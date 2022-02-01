import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const apiUrl = environment.apiUrl;

@Injectable({ providedIn: "root" })

export class LaunchService {

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any> {
        return this.httpClient.get(apiUrl + 'launches')
    }

    getDetails(id): Observable<any> {
        return this.httpClient.get(apiUrl + 'launches/' + id)
    }

}