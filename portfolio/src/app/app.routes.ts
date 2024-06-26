import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';

import { EducationComponent } from './_pages/education/education.component';
import { CalculatorComponent } from './_pages/calculator/calculator.component';
import { ContactUSComponent } from './_pages/contact-us/contact-us.component';
import { ProjectsComponent } from './_pages/projects/projects.component';

export const routes: Routes = [
    {path: '',redirectTo: 'home', pathMatch:'full'},
    {path: 'home' , component: HomeComponent},
    {path: 'projects' , component: ProjectsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'contact-us', component: ContactUSComponent}
];
