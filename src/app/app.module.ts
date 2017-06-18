import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './home/welcome.component';
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
        path: 'welcome', component: WelcomeComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'contact', component: ContactComponent
      }
    ]),
  ],
  declarations: [AppComponent, WelcomeComponent, AboutComponent,ContactComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
