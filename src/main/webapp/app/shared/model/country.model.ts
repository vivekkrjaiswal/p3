import { Moment } from 'moment';
import { IRegion } from 'app/shared/model//region.model';

export interface ICountry {
    id?: number;
    countryName?: string;
    dateTime?: Moment;
    region?: IRegion;
}

export class Country implements ICountry {
    constructor(public id?: number, public countryName?: string, public dateTime?: Moment, public region?: IRegion) {}
}
