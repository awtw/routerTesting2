import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactive-guard.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-edit-server',
	templateUrl: './edit-server.component.html',
	styleUrls: [ './edit-server.component.css' ]
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
	server: { id: number; name: string; status: string };
	serverName = '';
	serverStatus = '';
	allowEdit = false;
	changeSaved = false;
	constructor(private serverService: ServersService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		console.log(this.route.snapshot.queryParams);
		console.log(this.route.snapshot.fragment);
		const id = +this.route.snapshot.params['id'];
		this.route.queryParams.subscribe((queryParams: Params) => {
			this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
		});
		this.route.fragment.subscribe();
		this.server = this.serverService.getServer(id);
		this.serverName = this.server.name;
		this.serverStatus = this.server.status;
	}

	onUpdateServer() {
		this.serverService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
		this.changeSaved = true;
		this.router.navigate([ '../' ], { relativeTo: this.route });
	}

	canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
		if (!this.allowEdit) {
			return true;
		}
		if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved) {
			return confirm('Do you want to discard the changes ?');
		} else {
			return true;
		}
	}
}
