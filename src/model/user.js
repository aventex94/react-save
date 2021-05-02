class User {
  constructor(id,username,password,rol,login){
    this.id = id;
    this.username = username;
    this.password = password;
    this.rol = rol;
    this.login = login;
  }
  get id() {
    return this._id;
  }
  set id(newId) {
    this._id = newId;
  }
  get username() {
    return this._username;
  }
  set username(newUsername) {
    this._username = newUsername;
  }
  get password() {
    return this._password;
  }
  set password(newPassword) {
    this._password = newPassword;
  }
  get rol() {
    return this._rol;
  }
  set rol(newRol) {
    this._rol = newRol;
  }
  get login() {
    return this._login;
  }
  set login(newLogin) {
    this._login = newLogin;
  }
}

export default User;
