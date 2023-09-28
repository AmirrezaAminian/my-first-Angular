import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes  , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const appRoutes : Routes = [
  {path:'users' , component : UserComponent} ,
  {path:'servers' , component : ServersComponent} ,
  {path:'home' , component : HomeComponent} ,
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) ,
    FormsModule,
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
