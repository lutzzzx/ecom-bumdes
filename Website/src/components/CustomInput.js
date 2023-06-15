import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, id, value, onChange, onBlur } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        id={`${id}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CustomInput;
