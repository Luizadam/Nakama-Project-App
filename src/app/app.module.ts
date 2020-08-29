import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PostComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
