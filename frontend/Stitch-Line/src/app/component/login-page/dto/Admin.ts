export default class Admin {
  private _nic:string;
  private _emp_number:string;


  constructor(nic: string, emp_number: string) {
    this._nic = nic;
    this._emp_number = emp_number;
  }


  get nic(): string {
    return this._nic;
  }

  set nic(value: string) {
    this._nic = value;
  }

  get emp_number(): string {
    return this._emp_number;
  }

  set emp_number(value: string) {
    this._emp_number = value;
  }
}
