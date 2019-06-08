import { Component, OnInit } from '@angular/core';
import { User } from "../../user";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  users: User[];

  constructor(private authService: AuthService,
              private router: Router) { }

  getAllUsers(){
    this.authService.getAllUsers().subscribe(users => {
      this.users = users;
      this.users.sort((obj1,obj2) => {
        let points_diff = obj2.total_points - obj1.total_points;
        if (points_diff != 0) return points_diff;
        else {
          return (obj2.username > obj1.username)? 1 : -1;
        }
      });
    });
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
