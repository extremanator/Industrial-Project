import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(){
    if(this.authService.isAdmin()){
      return true;
    } else{
      if(this.authService.isLoggedIn()){
        this.router.navigate(['/problems']);
      } else {
        this.router.navigate(['/login']);
      }
      return false;
    }
  }
}
