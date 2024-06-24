import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { HttpClientModule } from "@angular/common/http";
import { UsersService } from "./apis.service";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from "@angular/forms";
import { CommentsComponent } from "./comments/comments.component";
import { ChartsApisService } from "./charts-apis.service";
import { chartsComponent } from "./charts/charts.component";
import { NgChartsModule } from "ng2-charts";
import { ProjetslistComponent } from './projetslist/projetslist.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CommentsComponent,
    chartsComponent,
    ProjetslistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [UsersService, ChartsApisService],
  bootstrap: [AppComponent],
})
export class AppModule {}
