import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HeroTabComponent } from './pages/home/hero-tab/hero-tab.component';
import { BlogsComponent } from './pages/home/blogs/blogs.component';
import { AshComponent } from './pages/home/ash/ash.component';
import { AuthorsComponent } from './pages/home/authors/authors.component';
import { LyricsSheetComponent } from './components/lyrics-sheet/lyrics-sheet.component';
import { FacebookComponent } from './pages/home/facebook/facebook.component';
import { HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HeroTabComponent,
    BlogsComponent,
    AshComponent,
    AuthorsComponent,
    LyricsSheetComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config, 'config'),
    MatBottomSheetModule,
    HttpClientModule,
    OwlModule,
    MatButtonModule

  ],
  providers: [],
  entryComponents: [LyricsSheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
