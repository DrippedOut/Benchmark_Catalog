import { React } from "react";
import IconField from "./IconField";
import InputField from "./ui/InputField";
import DropdownField from "./ui/DropdownField";
import Textbox from "./ui/TextboxField";

// Renders input field according to the input params
// Param:
//   category:          fields within a category (Taken from HUDetails.json)
//   handleInputChange: value to pass to parent component
//   HUinfo:            value to pre-fills the field (Edit mode only)
const FieldRenderer = ({ category, handleInputChange, HUinfo }) => {

	// Passes user-entered value to parent component (upload.jsx)
	const handleInputChangeWrapper = (name, value) => {
		handleInputChange(name, value);
	};
  
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{category.map((item, index) => (
					<div key={index}>
						{/* Field name and icon */}
						<label className="text-sm flex gap-2 items-center mb-2">
							<span className="p-[6px] text-[#01A981] rounded-full bg-[#01A981]/20"><IconField icon={item?.icon} /></span>
							<span className="mt-1 font-medium">{item?.label}{" "}</span>
							{item.required && <span className="text-red-500">*</span>}
						</label>
						
						{/* Renders field component according to its respective type */}
						{item.fieldType === "text" || item.fieldType === "number" ? (
							<InputField
								HUinfo={HUinfo}
								item={item}
								handleInputChange={handleInputChangeWrapper}
								title={item.description}
							/>
						) : item.fieldType === "dropdown" ? (
							<DropdownField
								HUinfo={HUinfo}
								item={item}
								handleInputChange={handleInputChangeWrapper}
								title={item.description}
							/>
						) : item.fieldType === "textarea" ? (
							<Textbox
								HUinfo={HUinfo}
								item={item}
								handleInputChange={handleInputChangeWrapper}
								title={item.description}
							/>
						) : null}
					</div>
				))}
			</div>
		</>
  	);
};

export default FieldRenderer;
