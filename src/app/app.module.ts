import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { MoreComponent } from './more/more.component';
import { ContactComponent } from './contact/contact.component';
import { LogoComponent } from './logo/logo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SquarePipe } from './square.pipe';
import { CubePipe } from './cube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    MoreComponent,
    ContactComponent,
    LogoComponent,
    PagenotfoundComponent,
    SquarePipe,
    CubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
