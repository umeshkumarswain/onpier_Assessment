export interface Control {
  name:string;
  label:string;
  type:string;
  placeholder:string;
  validators:any;
}
export interface IFormSettings {
  isHeaderRequired:boolean;
  headerText:string;
  subHeaderTest:string;
  controls:Control[];
}




