import { Routes, RouterModule } from "@angular/router";
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { DatailComponent } from './cvTech/datail/datail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTING: Routes = [

    {path:'cv',children:[
        {path: '', component: CvComponent},
        // {path: 'cv', redirectTo:'/' ,pathMatch:'full'},
         {path: 'delete/:id', component: DeleteCvComponent},
         {path: 'add', component: AddCvComponent},
         {path: ':id', component: DatailComponent},
         
    ]},
    {path: '', component: CvComponent},
    {path: 'color/:default/:secondParam', component: ColorComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: ErrorComponent},
    
]

export const ROUTING =RouterModule.forRoot(APP_ROUTING);


