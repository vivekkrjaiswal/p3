import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { P3RegionModule } from './region/region.module';
import { P3CountryModule } from './country/country.module';
import { P3LocationModule } from './location/location.module';
import { P3DepartmentModule } from './department/department.module';
import { P3TaskModule } from './task/task.module';
import { P3EmployeeModule } from './employee/employee.module';
import { P3JobModule } from './job/job.module';
import { P3JobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        P3RegionModule,
        P3CountryModule,
        P3LocationModule,
        P3DepartmentModule,
        P3TaskModule,
        P3EmployeeModule,
        P3JobModule,
        P3JobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class P3EntityModule {}
