import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class canDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
	canDeactivate(
		component: CanComponentDeactivate,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): boolean | Observable<boolean> | Promise<boolean> {
		return component.canDeactivate();
	}
}
