import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthorizationService } from '@services/core/authorization.service';

@Component({
  selector: 'spotify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  authorizationSuccessSub!: Subscription;
  authorizationFailureSub!: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authorizationSuccessSub = this.route.fragment
      .pipe(
        filter(fragment => fragment !== null),
        map(fragment => new URLSearchParams(fragment!)),
        map(params => ({
          accessToken: params.get('access_token'),
        })),
        filter(params => !!params.accessToken)
      )
      .subscribe(
        (loginInfo) => {
          this.authorizationService.handleLoginSuccess(loginInfo);
          this.router.navigate([]);
        }
      );

    this.authorizationFailureSub = this.route.queryParams
      .pipe(
        filter(params => params.error !== undefined),
      )
      .subscribe(
        () => {
          this.authorizationService.handleLoginFailure();
          this.router.navigate([]);
        }
      );
  }

  ngOnDestroy(): void {
    this.authorizationSuccessSub.unsubscribe();
    this.authorizationFailureSub.unsubscribe();
  }
}
