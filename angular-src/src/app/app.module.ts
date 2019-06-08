import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./guards/auth.guard";
import { CodeProblemComponent } from './components/code-problem/code-problem.component';
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AdminGuard } from "./guards/admin.guard";
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { LanguageComponent } from './components/language/language.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TestComponent } from './components/test/test.component';
import { TestProblemComponent } from './components/test-problem/test-problem.component';
import { TestGuard } from "./guards/test.guard";

import 'codemirror/mode/clike/clike';
import 'codemirror/addon/edit/closebrackets';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'problems', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard]},
  {path: 'test', component: TestComponent, canActivate: [AuthGuard]},
  {path: 'test/problem', component: TestProblemComponent, canActivate: [AuthGuard, TestGuard]},
  {path: 'stats', component: StatisticsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'problems/:name', component: CodeProblemComponent, canActivate: [AuthGuard]},
  {path: 'user/:username', component: PublicProfileComponent, canActivate: [AuthGuard]},
  {path: 'language/:language/:filters', component: LanguageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CodeProblemComponent,
    StatisticsComponent,
    PublicProfileComponent,
    LeaderboardComponent,
    LanguageComponent,
    TestComponent,
    TestProblemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
