import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { MoreComponent } from './more/more.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"more",component:MoreComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"logo",component:LogoComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
