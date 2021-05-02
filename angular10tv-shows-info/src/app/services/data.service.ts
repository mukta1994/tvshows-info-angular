import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://api.themoviedb.org/3/";
  private apikey=""

  constructor(private httpClient: HttpClient) { }

  // search results based on query
  public sendGetRequest(query,i){
    return this.httpClient.get(this.REST_API_SERVER+"search/tv?"+this.apikey+"&query="+query+"&page="+i);
  }

  //get details of TV show by passing tv id
  public getDetails(id){
    return this.httpClient.get(this.REST_API_SERVER+"tv/"+id+"?"+this.apikey);
  }

  //get all episode details by season num and tv id
  public getSeasons(season_number,tv_id){ 
    return this.httpClient.get(this.REST_API_SERVER+"tv/"+tv_id+"/season/"+season_number+"?"+this.apikey);
  }

   /**
   *   get shows which are popular 
   */
  public getpopularShows(i){
    return this.httpClient.get(this.REST_API_SERVER+"tv/popular?"+this.apikey+"&page="+i);
  }

  /**
   *   get shows which are top rated 
   */
  public getTopRatedShows(i) {
    return this.httpClient.get(this.REST_API_SERVER+"tv/top_rated?"+this.apikey+"&page="+i);
  }

  //get shows which are airing today
  public getTodaysAiring(i) {
    return this.httpClient.get(this.REST_API_SERVER+"tv/airing_today?"+this.apikey+"&page="+i);
  }



}


 
