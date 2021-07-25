import Customer from "./Customer";

export default class CustomerDTO{
  private _fName:string;
  private _email:string;
  private _mobile:string;
  private _userRole:string;
  private _username:string;
  private _password:string;
  private _customer:Customer;


  constructor(fName: string, email: string, mobile: string, userRole: string, username: string, password: string, customer: Customer) {
    this._fName = fName;
    this._email = email;
    this._mobile = mobile;
    this._userRole = userRole;
    this._username = username;
    this._password = password;
    this._customer = customer;
  }


  get fName(): string {
    return this._fName;
  }

  set fName(value: string) {
    this._fName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get userRole(): string {
    return this._userRole;
  }

  set userRole(value: string) {
    this._userRole = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }
}
