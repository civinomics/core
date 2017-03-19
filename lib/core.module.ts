import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { UserService } from './services/user.service';
import { environment } from './environments/environment';

@NgModule({
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(environment.conf.firebase)
    ],
    providers: [
        UserService
    ]
})
export class CoreModule {
}
