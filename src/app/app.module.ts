import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'contact', component: ContactComponent
      }
    ]),
  ],
  declarations: [AppComponent, PortfolioComponent, HomeComponent, AboutComponent, ContactComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
