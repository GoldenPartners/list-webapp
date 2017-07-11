export class User {
  constructor(
    public name : string,
    public email : string,
    public phone : string,
    public enabled : string,
    public token : string,
    public authorities : Array<String>
  ) { }
}
