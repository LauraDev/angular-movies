import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { SeriesRoutingModule } from './series-routing.module';

import { SerieListComponent } from './serie-list/serie-list.component';

@NgModule({
    declarations: [
        SerieListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        SeriesRoutingModule
    ],
    providers: [],
})
export class SeriesModule {}