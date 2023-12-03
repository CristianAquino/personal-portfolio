export type SelectOption = {
  label: string;
  value: string;
};

export type SingleSelect = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export type MultipleSelect = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};
