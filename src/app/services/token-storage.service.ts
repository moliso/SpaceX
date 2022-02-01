import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({ providedIn: "root" })

export class TokenStorageService {

    public getToken(): string | null {
        return localStorage.getItem('token');
    }

} 