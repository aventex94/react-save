import AbstractBeerStrategy from "./AbstractBeerStrategy"
/**
 * Strategy Beer Hot
 * 
 * @class StrategyBeerHot
 * @exteds {AbstractStrategyBeer}
 */

class StrategyBeerHot extends AbstractBeerStrategy{
    calculateBeers(cantUsers){
        return cantUsers * this._coefficient;
    }
   
}

export default StrategyBeerHot