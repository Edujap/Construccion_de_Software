import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportesNewComponent} from './reportes-new/reportes-new.component';
import {ReportesListComponent} from './reportes-list/reportes-list.component';

import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  declarations: [ReportesNewComponent, ReportesListComponent]
})
export class ReportesModule {


}
