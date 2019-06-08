import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { TestService } from "../services/test.service";

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate{
  constructor(private authService: AuthService,
              private testService: TestService,
              private router: Router) { }

  canActivate(){
    if(this.testService.isTakingTest()){
      return true;
    } else{
      if(this.authService.isLoggedIn()){
        this.router.navigate(['/test']);
      } else {
        this.router.navigate(['/login']);
      }
      return false;
    }
  }
}

