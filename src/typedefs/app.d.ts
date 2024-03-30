// ----------------------------------------------------------------------
export type TAppState = {
  hasError: boolean;
};

// ----------------------------------------------------------------------
export type AutocompleteItem<T = string, R = string> = {
  readonly value: T;
  readonly label: string;
  readonly helperText?: string;
  readonly related?: R[];
};

// ----------------------------------------------------------------------
