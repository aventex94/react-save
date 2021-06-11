import AbstractBeerStrategy from "./AbstractBeerStrategy"
/**
 * Strategy Beer Cold
 * 
 * @class StrategyBeerCold
 * @exteds {AbstractStrategyBeer}
 */

class StrategyBeerCold extends AbstractBeerStrategy{
    calculateBeers(cantUsers){
        return cantUsers * this._coefficient;
    }
   
}

export default StrategyBeerCold