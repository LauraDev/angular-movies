import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { TruncatePipe } from '../pipes/truncate';

import { RestService } from './services/rest.service';
import { MovieService } from './services/Movie';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DirectorService } from './services/Director';
import { ActorService } from './services/Actor';
import { GenreService } from './services/Genre';

@NgModule({
    declarations: [
        TruncatePipe
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    providers: [
        RestService,
        MovieService,
        ActorService,
        DirectorService,
        GenreService
    ],
    exports: [
        TruncatePipe
    ]
})
export class SharedModule {}