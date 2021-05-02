class Meet {
  constructor(id, descrip, date,users) {
    this.id = id;
    this.descrip = descrip;
    this.date = date;
    this.users = users;
  }
  get id() {
    return this._id;
  }
  set id(newId) {
    this._id = newId;
  }
  get descrip() {
    return this._descrip;
  }
  set descrip(newDescrip) {
    this._descrip = newDescrip;
  }
  get date() {
    return this._descrip;
  }
  set date(newDate) {
    this._date = newDate;
  }
  get users() {
    return this._users;
  }
  set users(newUser){
    this._users = newUser;
  }
}

export default Meet;
