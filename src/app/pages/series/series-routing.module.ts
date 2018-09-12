import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 


const seriesRoutes: Routes = [
];
@NgModule({
    imports: [
        RouterModule.forChild(seriesRoutes)
    ],
    exports: [
        RouterModule 
    ]
})
export class SeriesRoutingModule { }