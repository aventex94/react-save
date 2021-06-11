import AbstractBeerStrategy from "./AbstractBeerStrategy";
/**
 * Strategy Beer Tempered
 *
 * @class StrategyBeerTempered
 * @exteds {AbstractStrategyBeer}
 */

class StrategyBeerTempered extends AbstractBeerStrategy {
  calculateBeers(cantUsers) {
    return cantUsers * this._coefficient;
  }
}

export default StrategyBeerTempered;
