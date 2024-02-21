import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h1>
        Name:{props.name}, Age:{props.age}
      </h1>
    </div>
  );
};

export default Employee;
