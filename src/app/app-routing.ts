import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { LogoutGuard } from './guard/logout.guard';
import { LoginGuard } from './guard/login.guard';
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

    {path: 'cv', children: [
        {path: '', component: CvComponent},
        // {path: 'cv', redirectTo:'/' ,pathMatch:'full'},
         {path: 'delete/:id', component: DeleteCvComponent, canActivate: [LoginGuard]},
         {path: 'updateCv/:id', component: UpdateCvComponent},
         {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
         {path: ':id', component: DatailComponent},
    ]},
    {path: '', component: CvComponent},
    {path: 'color/:default/:secondParam', component: ColorComponent},
    {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
    {path: '**', component: ErrorComponent},]
export const ROUTING = RouterModule.forRoot(APP_ROUTING);


