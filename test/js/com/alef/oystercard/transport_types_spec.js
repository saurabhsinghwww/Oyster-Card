import TransportTypes from '../../../../../js/com/alef/oystercard/transport_types'; 

describe('TransportTypes', function() {

    it('should return current transaction type', function(){
        let transportTypes = new TransportTypes(['BUS', 'TUBE']);
        expect(transportTypes.BUS === 'BUS').toBeTruthy(); 
    }); 

}); 