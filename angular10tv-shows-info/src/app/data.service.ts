import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://api.themoviedb.org/3/";
  private apikey="api_key=89c03b44df1ea6a32f56ff5a0ce45867&language=en-US"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER+"genre/tv/list?"+this.apikey);
  }}
