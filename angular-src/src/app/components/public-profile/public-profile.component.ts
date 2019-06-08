import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  user: any;
  attempted_problems: string;
  solved_problems: string;

  constructor(private route: ActivatedRoute,
              private authService: AuthService) { }

  getUser(username: string){
    this.authService.getUserInfo(username).subscribe(data => {
      this.user = data.user;
      if (data.user.num_attempted == 0){
        this.attempted_problems = `${username} hasn't even tried solving something. What a loser!`;
        this.solved_problems = "";
      } else {
        this.attempted_problems += `${username} has attempted: `;
        if (data.user.num_solved == 0) {
          for (let name in data.user.attempted_problems) {
            if (this.attempted_problems === `${username} has attempted: `) {
              this.attempted_problems += name;
            } else {
              this.attempted_problems += `, ${name}`;
            }
          }
          this.solved_problems += "\nBut hasn't solved anything. What a loser!";
        } else {
          this.solved_problems += `\n${username} has solved: `;
          for (let name in data.user.attempted_problems) {
            if (this.attempted_problems === `${username} has attempted: `) {
              this.attempted_problems += name;
            } else {
              this.attempted_problems += `, ${name}`;
            }
            if (data.user.attempted_problems[name].solved){
              if (this.solved_problems === `\n${username} has solved: `) {
                this.solved_problems += name;
              } else {
                this.solved_problems += `, ${name}`;
              }
            }
          }
        }
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.attempted_problems = "";
      this.solved_problems = "";
      this.getUser(routeParams.username);
    });
  }

}
