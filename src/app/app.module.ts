import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServersService } from './servers/servers.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { canDeactivateGuard } from './servers/edit-server/can-deactive-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ServersComponent,
		ServerComponent,
		EditServerComponent,
		UsersComponent,
		UserComponent,
		ErrorPageComponent,
		PageNotFoundComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule ],
	providers: [ ServersService, AuthService, AuthGuard, canDeactivateGuard, ServerResolver ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
