/**
 * User
 *
 * @class User
 */
class User {
  /** @constructor */
  constructor(id, username, password, rol, isAuthenticated) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.rol = rol;
    this.isAuthenticated = isAuthenticated;
  }
  /**
   * Get id
   * @returns id
   */
  get id() {
    return this._id;
  }
  set id(newId) {
    this._id = newId;
  }
  /**
   * Get username
   * @returns username
   */
  get username() {
    return this._username;
  }
  /**
   * Set username
   * @params newUsername
   */
  set username(newUsername) {
    this._username = newUsername;
  }
  /**
   * Get password
   * @returns password
   */
  get password() {
    return this._password;
  }
  /**
   * Set password
   * @params newPassword
   */
  set password(newPassword) {
    this._password = newPassword;
  }
  /**
   * Get rol
   * @returns rol
   */
  get rol() {
    return this._rol;
  }
  /**
   * Set rol
   * @params newRol
   */
  set rol(newRol) {
    this._rol = newRol;
  }
  /**
   * Get isAuthenticated
   * @returns isAuthenticated
   */
  get isAuthenticated() {
    return this._isAuthenticated;
  }
  /**
   * Set isAuthenticated
   * @params Authenticated
   */
  set isAuthenticated(Authenticated) {
    this._isAuthenticated = Authenticated;
  }
  verifiedCredentials(userName, password) {
    return this._username === userName && this._password === password;
  }
}

export default User;
