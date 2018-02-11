/**
* TransportTypes class maintains list of all the posible transport types.
*
* @author Saurabh Singh
* @version 1.0
*/   
export default class TransportTypes {

    constructor(transportTypes) {

        for (let transportType of transportTypes) {
            this[transportType] = transportType;
        }

    }
    
}