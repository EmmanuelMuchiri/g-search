import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';
import { Repos } from '../repos';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // profile:any[];
  // repos: any[];
  username:string;
  profile:User;
  repos:Repos
  constructor(private profileService: ProfileService) {

  }

  findProfile(){
  	this.profileService.updateProfile(this.username)
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	})

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})
  }

  ngOnInit() {
    interface ApiResponse{
        name: string;
    login: string;
    avatar_url: any;
    html_url: string;
    }
  }

}

