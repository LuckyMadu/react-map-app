import { AutoComplete } from "antd";
import React, { useState } from "react";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={{ width: 400 }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="Search here..."
      />
    </>
  );
};

export default SearchInput;
