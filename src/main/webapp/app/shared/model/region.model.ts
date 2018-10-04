import { Moment } from 'moment';

export interface IRegion {
    id?: number;
    regionName?: string;
    dateTime?: Moment;
}

export class Region implements IRegion {
    constructor(public id?: number, public regionName?: string, public dateTime?: Moment) {}
}
