import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AuthGuard } from './auth-guard.service';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { canDeactivateGuard } from './servers/edit-server/can-deactive-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'users',
		component: UsersComponent,
		children: [
			{
				path: ':id/:name',
				component: UserComponent
			}
		]
	},
	{
		path: 'servers',
		canActivateChild: [ AuthGuard ],
		component: ServersComponent,
		children: [
			{
				path: ':id',
				component: ServerComponent,
				resolve: { server: ServerResolver }
			},
			{
				path: ':id/edit',
				component: EditServerComponent,
				canDeactivate: [ canDeactivateGuard ]
			}
		]
	},
	{
		path: 'not-found',
		component: ErrorPageComponent,
		data: { message: 'Page not found !' }
	},
	{
		path: '**',
		redirectTo: '/not-found'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
