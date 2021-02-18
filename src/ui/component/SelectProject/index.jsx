import * as React from "react";


function SelectProject() {
  const onSelect = ({target}) => {
  };
  return (
    <select onChange={onSelect}>
      <option value="">Default</option>
      <option value="add">Add Project</option>
    </select>
  )
};

export default SelectProject;
