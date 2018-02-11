import StationsZones from '../../../../../js/com/alef/oystercard/stations_zones'; 

describe('StationsZones', function() {

    it('should return correct zones for the given station', function(){
        let stationsZones = new StationsZones([
            {
                "name": "HOLBORN", 
                "zones": "1"
            }                                   
        ]); 
        expect(stationsZones.HOLBORN === "1").toBeTruthy(); 
    }); 

}); 