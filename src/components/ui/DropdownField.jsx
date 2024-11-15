import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DropdownField({ item, handleInputChange, HUinfo }) {
  return (
    <div>
      <Select onValueChange={(value) => handleInputChange(item.name, value)} required={item.required} defaultValue={HUinfo?.[item?.name]}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={HUinfo?.[item?.name]
          ? HUinfo?.[item.name]   // If NOT NULL show its data
          : "--Select--"} />      {/* If NULL show '--Select--' */}
        </SelectTrigger>
        <SelectContent>
          {item?.options?.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default DropdownField;
