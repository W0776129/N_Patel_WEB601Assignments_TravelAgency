import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { YPipe } from './y.pipe';
import { YDirective } from './y.directive';
import { TypeFilterPipe } from './type-filter.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { HoverAffectDirective } from './hover-affect.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    YPipe,
    YDirective,
    TypeFilterPipe,
    ContentListComponent,
    HoverAffectDirective,
    CreateContentComponent,
    ModifyContentComponentComponent,
    MessagesComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 500
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
