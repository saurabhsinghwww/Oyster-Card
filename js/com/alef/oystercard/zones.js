/**
* Zones class maintains list of all the posible zones.
*
* @author Saurabh Singh
* @version 1.0
*/   
export default class Zones {
    
        constructor(zones) {
    
            for (let i in zones) {
                this[zones[i]] = 1 + parseInt(i) + "";
            }
    
        }
        
    }