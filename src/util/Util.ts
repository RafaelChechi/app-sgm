import { FormattingType } from "@/models/configs";
import moment from "moment";
import "moment-timezone";

export const getRandomValue = () => {
  return Math.floor(Math.random() * 100);
};

export const retirarFormatacao = (textField: any) => {
  textField.value = textField.value.replace("/(.|/|-)/g", "");
};

export const maskCpf = (value: any) => {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

export const maskCpfOrCnpj = (value: string) => {
  if (value.length == 14) {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      "$1.$2.$3/$4-$5"
    );
  }

  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

export const maskDate = (value: any) => {
  const date = moment(value, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY");
  return date;
};

export const date = (value: any) => {
  console.log("value", value);
  const date = moment(value, "DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss");
  console.log("date", date);
  return date;
};

export const getBadge = (state: string) => {
  switch (state) {
    case "ACTIVE":
      return "success";
    case "INACTIVE":
      return "secondary";
    default:
      "success";
  }
};

export const getState = (state: string) => {
  switch (state) {
    case "ACTIVE":
      return "ATIVO";
    case "INACTIVE":
      return "INATIVO";
    default:
      "Ativo";
  }
};

export const format = (field: string, value: any) => {
  switch (field) {
    case FormattingType.CPF_CNPJ:
      return maskCpfOrCnpj(value);
    case FormattingType.DATE: {
      return maskDate(value);
    }
    default:
      return value;
  }
};

/*export const replaceParams = (url: string, params: string[]) => {
  const companyId: string = AuthorizationService.getCompany()?.id || "";
  if (companyId != undefined && companyId) {
    url = url.replace(`{companyId}`, companyId);
  }

  params.forEach((i: any) => {
    const param: string = Object.keys(i)[0];
    url = url.replace(`{${param}}`, i[param]);
  });

  return url;
};*/
