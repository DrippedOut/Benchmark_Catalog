import React from "react";
import { Input } from "@/components/ui/input";

function InputField({ item, handleInputChange, title, HUinfo }) {
  return (
    <div>
      <Input
        type={item?.fieldType}
        name={item?.name}
        title={title}
        required={item?.required}
        defaultValue={HUinfo?.[item?.name]}
        onChange={(e)=>handleInputChange(item.name,e.target.value)}
      />
    </div>
  );
}

export default InputField;
