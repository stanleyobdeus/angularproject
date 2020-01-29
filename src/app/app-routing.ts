import { Routes, RouterModule } from "@angular/router";
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';

const APP_ROUTING: Routes = [
    {path: 'cv', redirectTo:'/' ,pathMatch:'full'},
    {path: '', component: CvComponent},
    {path: 'color', component: ColorComponent}
]

export const ROUTING =RouterModule.forRoot(APP_ROUTING);


