/**
 * Abstract Class Beer Strategy
 * @class AbstractBeerStrategy
 */

class AbstractBeerStrategy {
    constructor(coefficient){
        this.coefficient = coefficient;
        
    }
    get coefficient(){
        return this._coefficient;
    }
    set coefficient(newCoefficient){
        this._coefficient = newCoefficient;
    }
    calculateBeers(){
        throw new Error("Method 'calculateBeers()' must be implemented.")
    }
}

export default AbstractBeerStrategy;