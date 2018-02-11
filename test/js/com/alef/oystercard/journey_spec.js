import Journey from '../../../../../js/com/alef/oystercard/journey'; 
import Zones from '../../../../../js/com/alef/oystercard/zones'; 
import StationsZones from '../../../../../js/com/alef/oystercard/stations_zones'; 
import TransportTypes from '../../../../../js/com/alef/oystercard/transport_types'; 

describe('Journey', function() {

    it('should charge maximum fare in case of no barrier out', function(){
        
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

        expect(journey.updatedFare() === 27.5).toBeTruthy(); 
        
    });

    it('should charge correct fare', function(){
        
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

        expect(journey.updatedFare() === 28).toBeTruthy(); 
        
    });

}); 