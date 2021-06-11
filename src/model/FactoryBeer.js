import StrategyBeerCold from "./StrategyBeerCold";
import StrategyBeerTempered from "./StrategyBeerTempered";
import StrategyBeerHot from "./StrategyBeerHot";
/**
 * Factory Beer
 * 
 * Patron para instanciar la strategia de beers
 * 
 * @class FactoryBeer
 */
class FactoryBeer{
    
    constructor(temp){

        this.create = (temp) =>{
            let strategy;
            if(temp < 20){
                strategy = new StrategyBeerCold(0.75);
            }else if(temp >= 20 && temp <= 24){
                strategy = new StrategyBeerTempered(1)
            }else if(temp > 24){
                strategy = new StrategyBeerHot(2);
            }
            return strategy;
        }
    }
    
}

export default FactoryBeer;