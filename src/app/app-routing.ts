import { Routes, RouterModule } from "@angular/router";
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { DatailComponent } from './cvTech/datail/datail.component';

const APP_ROUTING: Routes = [
    {path: 'cv/:id', component: DatailComponent},
    {path: 'cv', redirectTo:'/' ,pathMatch:'full'},
    {path: '', component: CvComponent},
    {path: 'color/:default/:secondParam', component: ColorComponent},
]

export const ROUTING =RouterModule.forRoot(APP_ROUTING);


