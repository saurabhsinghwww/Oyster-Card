import TransportTypes from './transport_types';
import Zones from './zones';

/**
* Journey class use to calculate the fare for the user with some starting balance.
*
* @author Saurabh Singh
* @version 1.0
*/
export default class Journey {

    constructor(balance, maximumFare, busJourneyFare, transportTypes, zones) {

        this.balance = balance;
        this.maximumFare = maximumFare;
        this.busJourneyFare = busJourneyFare;
        this.transportTypes = transportTypes;
        this.zones = zones;

        this.zonesPassed = [];
        this.currentFare = 0;

    }

    /**
     * The function is used when the user passes through the inward barrier at the station,
     * their oyster card is charged the maximum fare.
     *
     * @param {object} zones 
     * @param {object} transportType 
     */
    barrierIn(zones, transportType) {

        // deduct the maximum fair because suppose if user not check out
        this.currentFare = (this.balance - this.maximumFare);

        // In case of bus travel deduct the bus fare
        if (transportType === this.transportTypes.BUS) {

            this.currentFare = (this.currentFare + this.maximumFare) - this.busJourneyFare;

        } else {

            this.zonesPassed.push(zones);

        }

    }

    /**
     * The function is used when they pass out of the barrier at the exit station, the fare is calculated and the maximum
     * fare transaction removed and replaced with the real transaction (in this way, if the user
     * doesn’t swipe out, they are charged the maximum fare).
     * 
     * @param {object} zones
     * @param {object} transportType 
     */
    barrierOut(zones, transportType) {

        // Not doing anything because bus fare is constant
        if (transportType === this.transportTypes.BUS) {

            return;

        } else {

            this.zonesPassed.push(zones);
        }

    }

    /**
     * The function calculate and return the updated fare.
     * 
     * @return {object} currentFare
     */
    updatedFare() {

        let distinctZonesPassed = [...new Set(this.zonesPassed)];

        // Current fare for anywhere in Zone 1
        if (distinctZonesPassed.includes(this.zones.ONE) && !distinctZonesPassed.includes(this.zones.TWO)) {

            this.currentFare = (this.balance - 2.50);

        }
        // Current fare for any two zones including zone 1
        else if (distinctZonesPassed.includes(this.zones.TWO) && distinctZonesPassed.includes(this.zones.ONE) && !distinctZonesPassed.includes(this.zones.THREE)) {

            this.currentFare = (this.balance - 2.00);

        }
        // Current fare for any two zones excluding zone 1
        else if (distinctZonesPassed.includes(this.zones.TWO) && !distinctZonesPassed.includes(this.zones.ONE) && distinctZonesPassed.length > 2) {

            this.currentFare = (this.balance - 3.00);

        }
        // Current fare for any three zones
        else if (distinctZonesPassed.includes(this.zones.ONE) && distinctZonesPassed.includes(this.zones.TWO) && distinctZonesPassed.includes(this.zones.THREE)) {

            this.currentFare = (this.balance - 3.20);

        } else {

            this.currentFare = (this.balance - this.maximumFare);
        }

        return this.currentFare;

    }

}