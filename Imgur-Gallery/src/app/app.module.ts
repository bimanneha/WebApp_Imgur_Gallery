import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './header/header.component';
import {GalleryComponent} from './gallery/gallery.component';
import {RadioComponent} from './global/custom-components/input-groups/radio/radio.component';
import {ImageFilterComponent} from './global/custom-components/image-filter/image-filter.component';
import {DropDownComponent} from './global/custom-components/input-groups/drop-down/drop-down.component';
import {FormsModule} from "@angular/forms";
import {ImageDetailsComponent} from './image-details/image-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {EachCardComponent} from "./global/custom-components/each-card/each-card.component";
import {ButtonsComponent} from './global/custom-components/buttons/buttons.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GalleryComponent,
    RadioComponent,
    ImageFilterComponent,
    DropDownComponent,
    ImageDetailsComponent,
    PageNotFoundComponent,
    EachCardComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
