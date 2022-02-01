import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isLoggedIn$ = false;
    username?: string;
    token = localStorage.getItem('token');

    constructor(
        private authenticationService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.username = localStorage.getItem("username")
    }

    onLogout() {
        this.authenticationService.logout();
        this.reloadComponent();
    }

    reloadComponent() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}