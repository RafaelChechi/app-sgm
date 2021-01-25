export interface Config {
  name: string;
  context: Context[];
}

export interface Context {
  name: string;
  path: string;
  redirect: string;
  label: string;
  roles: Array<string>;
  contents: Content[];
}

export interface Content {
  main: ContentType;
  relations: Content[];
}

export interface ContentType {
  name: string;
  labelSingular: string;
  labelPlural: string;
  apiPath: string;
  roles: Array<string>;
  icon: string;
  fieldsForm?: Array<string>;
  fieldsList?: Array<string>;
  fields: Field[];
}

export interface Field {
  key: string;
  label: string;
  type: TypeField;
  format?: FormattingType;
  _style?: string;
  sorter?: boolean;
  filter?: boolean;
}

export enum TypeField {
  PASSWORD = "PASSWORD",
  STRING = "STRING",
  BOOLEAN = "BOOLEAN",
  BUTTON = "BUTTON",
  DATE = "DATE",
  STATE = "STATE",
  LIST = "LIST",
}

export enum FormattingType {
  CPF_CNPJ = "CPF_CNPJ",
  DATE = "DATE",
  CEP = "CEP",
  PHONE = "PHONE",
}

export enum State {
  ACTIVE = "ATIVO",
  INACTIVE = "INATIVO",
}
