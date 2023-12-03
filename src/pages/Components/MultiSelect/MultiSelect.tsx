import { useState } from "react";
import { MultipleSelect, SelectOption, SingleSelect } from "./models";
import {
  Badge,
  Caret,
  ClearBtn,
  Container,
  Divider,
  InputValue,
  Option,
  Options,
} from "./styled-componets";

export type MultiSelectProps = {
  options: SelectOption[];
} & (SingleSelect | MultipleSelect);

const MultiSelect = ({}) => {
  const options = [
    { label: "First", value: "1" },
    { label: "Second", value: "2" },
    { label: "Third", value: "3" },
    { label: "Fourth", value: "4" },
    { label: "Fifth", value: "5" },
  ];

  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);

  return (
    <Select
      multiple
      options={options}
      value={value1}
      onChange={(value) => setValue1(value)}
    />
  );
};

const Select = ({ multiple, options, onChange, value }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.some((ele) => ele.label == option.label)) {
        onChange(value.filter((ele) => ele !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple
      ? value.some((ele) => ele.label == option.label)
      : option === value;
  }

  return (
    <Container
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <InputValue>
        {multiple
          ? value.map((ele) => (
              <Badge
                key={ele.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(ele);
                }}
              >
                {ele.label}
                <span className="remove-btn">&times;</span>
              </Badge>
            ))
          : value?.label}
      </InputValue>
      <ClearBtn
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </ClearBtn>
      <Divider />
      <Caret />
      <Options className={`${isOpen ? "show" : ""}`}>
        {options.map((option) => (
          <Option
            key={option.label}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            className={`${isOptionSelected(option) ? "selected" : ""}`}
          >
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
};

export default MultiSelect;
