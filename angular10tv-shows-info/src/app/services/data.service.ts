import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://api.themoviedb.org/3/";
  private apikey="api_key=89c03b44df1ea6a32f56ff5a0ce45867&language=en-US"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(query,i){
    return this.httpClient.get(this.REST_API_SERVER+"search/tv?"+this.apikey+"&query="+query+"&page="+i);
  }

  public getDetails(id){
    return this.httpClient.get(this.REST_API_SERVER+"tv/"+id+"?"+this.apikey);
  }

  public getSeasons(season_number,tv_id){
    
    return this.httpClient.get(this.REST_API_SERVER+"tv/"+tv_id+"/season/"+season_number+"?"+this.apikey);

  }

  public getpopularShows(i){
    return this.httpClient.get(this.REST_API_SERVER+"tv/popular?"+this.apikey+"&page="+i);

  }

  /**
   * name
   */
  public getTopRatedShows(i) {
    return this.httpClient.get(this.REST_API_SERVER+"tv/top_rated?"+this.apikey+"&page="+i);
  }

  public getTodaysAiring(i) {
    return this.httpClient.get(this.REST_API_SERVER+"tv/airing_today?"+this.apikey+"&page="+i);
  }

  public getDirectors(i) {
    return this.httpClient.get(this.REST_API_SERVER+"person/"+i+"?"+this.apikey+"&page="+1);
  }

}


 