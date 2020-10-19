import IParteMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(date: IParteMailTemplateDTO): Promise<string>;
}
