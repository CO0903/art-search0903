import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { TopModule } from './top/top.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaterialComponent,
    TopModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
