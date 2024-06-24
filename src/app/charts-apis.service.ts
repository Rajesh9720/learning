import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { salesdata } from "../chartdata.modul";

@Injectable({
  providedIn: "root",
})
export class ChartsApisService {
  private chartsApis = "http://localhost:3000/sales";

  constructor(private http: HttpClient) {}

  getDiffCharts(): Observable<salesdata[]> {
    return this.http.get<salesdata[]>(this.chartsApis);
  }
}
