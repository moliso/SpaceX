import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({ providedIn: "root" })

export class AuthService {
    private router: Router;
    
    /*
    public user: User;
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    setUser(email: string, password: string) {
        this.user.email = email
        this.user.password = password
    } 
    */

    login(email: string, password: string) {
        localStorage.setItem('token', "authToken");
        localStorage.setItem('username', email);
        //this.loggedIn.next(true);
    }

    logout() {
        //this.loggedIn.next(false);
        localStorage.clear();
        this.router.navigate(['/login'])
    }
}