import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = 'b6b89a49e6c5541b19b8';
  private clientsecret = 'c5f4c771454fd6005f7cae93fedd23bd6cb02460';
  constructor(private http: Http) {
    // tslint:disable-next-line: quotemark
    console.log("Service is now ready!");
    this.username = 'markian';
  }
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	// tslint:disable-next-line: indent
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
