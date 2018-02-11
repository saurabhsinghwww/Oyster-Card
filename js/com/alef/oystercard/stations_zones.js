/**
* StationsZones class maintains list of stations and it's zones.
*
* @author Saurabh Singh
* @version 1.0
*/   
export default class StationsZones {
    
        constructor(stationsZones) {

            for(let stationZones of stationsZones){
                this[stationZones.name] = stationZones.zones;
            }
    
        }
        
    }