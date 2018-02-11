import Zones from '../../../../../js/com/alef/oystercard/zones'; 

describe('Zones', function() {

    it('should return correct zone id', function(){

        let zones = new Zones(['ONE', 'TWO', 'THREE']);
        
        expect(zones.ONE === "1").toBeTruthy(); 
    }); 

}); 