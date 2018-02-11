import TransportTypes from './transport_types'; 
import Zones from './zones'; 
import StationsZones from './stations_zones'; 
import Journey from './journey';

// Transport types, balance, maximumFare, busJourneyFare, zones and stations can be derived from configuration or REST call
let balance = 30, maximumFare = 3.20, busJourneyFare = 1.80;
let transportTypes = new TransportTypes(['BUS', 'TUBE']);
let zones = new Zones(['ONE', 'TWO', 'THREE']);
let stationsZones = new StationsZones([
    {
        "name": "HOLBORN", 
        "zones": "1"
    },
    {
        "name": "EARLS_COURT", 
        "zones": "1,2"
    },
    {
        "name": "WIMBLEDON", 
        "zones": "3"
    },
    {
        "name": "HAMMERSMITH", 
        "zones": "2"
    },
    {
        "name": "CHELSEA", 
        "zones": "-1"
    }                                    
]); 

let journey =  new Journey(balance, maximumFare, busJourneyFare, transportTypes, zones);

journey.barrierIn(stationsZones.HOLBORN, transportTypes.TUBE); 
journey.barrierOut(stationsZones.EARLS_COURT, transportTypes.TUBE); 

journey.barrierIn(stationsZones.EARLS_COURT, transportTypes.BUS); 
journey.barrierOut(stationsZones.CHELSEA, transportTypes.BUS); 

journey.barrierIn(stationsZones.EARLS_COURT, transportTypes.TUBE); 
journey.barrierOut(stationsZones.HAMMERSMITH, transportTypes.TUBE);

//Get and print current fare after travel
let updatedFare = journey.updatedFare();

console.log(updatedFare); 
