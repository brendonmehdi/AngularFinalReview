import { Routes } from '@angular/router';
import {ContentListComponent} from "./contentlist/contentlist.component";
import {RouterTestComponent} from "./router-test/router-test.component";


export const routes: Routes = [
  { path:'allStudents', component: ContentListComponent },
  {path: 'page-not-found', component: RouterTestComponent},


  {path:'**',redirectTo:'allStudents',pathMatch:'full'}

];
