interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParteMailTemplateDTO {
  template: string;
  variables: ITemplateVariables;
}
