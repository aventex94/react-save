/**
 * Meet
 * 
 * @class Meet
 * 
 */
class Meet {
  /**
   * 
   * @constructor
   * @param {*} id 
   * @param {*} descrip 
   * @param {*} date 
   * @param {*} temperature 
   * @param {*} users 
   * @param {*} beers 
   * @param {*} strategyBeer 
   */
  constructor(id, descrip, date, temperature, users, beers, strategyBeer) {
    this.id = id;
    this.descrip = descrip;
    this.date = date;
    this.temperature = temperature;
    this.users = users;
    this.beers = beers;
    this.strategyBeer = strategyBeer;
  }
  /**
   * Get id
   * @return id
   * @type string
   */
  get id() {
    return this._id;
  }
  /**
   * Set id
   * @param newId
   */
  set id(newId) {
    this._id = newId;
  }
  /**
   * Get descript
   * @return descript
   * @type string
   */
  get descrip() {
    return this._descrip;
  }
  /**
   * Set descript
   * @param newDescrip
   */
  set descrip(newDescrip) {
    this._descrip = newDescrip;
  }
  /**
   * Get date
   * @return date
   * @type date
   */
  get date() {
    return this._descrip;
  }
  /**
   * Set date
   * @param newDate
   */
  set date(newDate) {
    this._date = newDate;
  }
  /**
   * Get temperature
   * @return temperature
   * @type int
   */
  get temperature() {
    return this._temperature;
  }
  /**
   * Set temperature
   * @param newTemperature
   */
  set temperature(newTemperature) {
    this._temperature = newTemperature;
  }
  /**
   * Get users
   * @return users
   * @type array of users
   */
  get users() {
    return this._users;
  }
  /**
   * Set users
   * @param newUser
   */
  set users(newUser) {
    this._users = newUser;
  }
  /**
   * Get beers
   * @return beers
   * @type int
   */
  get beers() {
    return this._beers;
  }
  /**
   * Set beers
   * @param newBeers
   */
  set beers(newBeers) {
    this._beers = newBeers;
  }
  /**
   * Get strategyBeer
   * @return strategyBeer
   * @type Object
   */
  get strategyBeer() {
    return this._strategyBeer;
  }
  /**
   * Set StrategyBeer
   * @param newStrategyBeer
   */
  set strategyBeer(newStrategyBeer) {
    this._strategyBeer = newStrategyBeer;
  }
}

export default Meet;
