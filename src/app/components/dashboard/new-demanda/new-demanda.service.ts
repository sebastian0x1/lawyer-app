import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class NewDemandaService {
    constructor(private http: HttpClient) { }

    getData() {
        let url = "https://apis.digital.gob.cl/dpa/regiones/{codigo}/comunas"
        return this.http.get(url);
    }
}