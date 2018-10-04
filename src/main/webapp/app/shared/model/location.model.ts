import { Moment } from 'moment';
import { ICountry } from 'app/shared/model//country.model';

export interface ILocation {
    id?: number;
    streetAddress?: string;
    postalCode?: string;
    city?: string;
    stateProvince?: string;
    dateTime?: Moment;
    country?: ICountry;
}

export class Location implements ILocation {
    constructor(
        public id?: number,
        public streetAddress?: string,
        public postalCode?: string,
        public city?: string,
        public stateProvince?: string,
        public dateTime?: Moment,
        public country?: ICountry
    ) {}
}
