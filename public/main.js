(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_code_problem_code_problem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/code-problem/code-problem.component */ "./src/app/components/code-problem/code-problem.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/components/statistics/statistics.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/public-profile/public-profile.component */ "./src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var _components_language_language_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/language/language.component */ "./src/app/components/language/language.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_test_problem_test_problem_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/test-problem/test-problem.component */ "./src/app/components/test-problem/test-problem.component.ts");
/* harmony import */ var _guards_test_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guards/test.guard */ "./src/app/guards/test.guard.ts");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! codemirror/mode/clike/clike */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_26__);



























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'problems', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'leaderboard', component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_21__["LeaderboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'test', component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'test/problem', component: _components_test_problem_test_problem_component__WEBPACK_IMPORTED_MODULE_23__["TestProblemComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _guards_test_guard__WEBPACK_IMPORTED_MODULE_24__["TestGuard"]] },
    { path: 'stats', component: _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]] },
    { path: 'problems/:name', component: _components_code_problem_code_problem_component__WEBPACK_IMPORTED_MODULE_15__["CodeProblemComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'user/:username', component: _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_19__["PublicProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'language/:language/:filters', component: _components_language_language_component__WEBPACK_IMPORTED_MODULE_20__["LanguageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_code_problem_code_problem_component__WEBPACK_IMPORTED_MODULE_15__["CodeProblemComponent"],
                _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"],
                _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_19__["PublicProfileComponent"],
                _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_21__["LeaderboardComponent"],
                _components_language_language_component__WEBPACK_IMPORTED_MODULE_20__["LanguageComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"],
                _components_test_problem_test_problem_component__WEBPACK_IMPORTED_MODULE_23__["TestProblemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_16__["CodemirrorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/code-problem/code-problem.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/code-problem/code-problem.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS1wcm9ibGVtL2NvZGUtcHJvYmxlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/code-problem/code-problem.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/code-problem/code-problem.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<h1>{{(problem === undefined)?'':problem.name}}</h1>\n<p style=\"white-space: pre-wrap;\">{{(problem === undefined)?'':problem.paragraph}}</p>\n<ngx-codemirror [(ngModel)]=\"solution_code\"\n                [options]=\"{\n                  lineNumbers: true,\n                  theme: 'material',\n                  mode: 'text/x-c++src',\n                  indentUnit: 4,\n                  indentWithTabs: true,\n                  autoCloseBrackets: true\n                }\">{{solution_code}}</ngx-codemirror>\n<br/>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitSolution(solution_code)\">Submit</button>\n<br/>\n<div *ngIf=\"isSuccess != undefined\">{{feedback_msg}}</div>\n\n"

/***/ }),

/***/ "./src/app/components/code-problem/code-problem.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/code-problem/code-problem.component.ts ***!
  \*******************************************************************/
/*! exports provided: CodeProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeProblemComponent", function() { return CodeProblemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/problem.service */ "./src/app/services/problem.service.ts");




var CodeProblemComponent = /** @class */ (function () {
    function CodeProblemComponent(route, problemService) {
        this.route = route;
        this.problemService = problemService;
    }
    CodeProblemComponent.prototype.getProblem = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        this.problemService.getProblem(name).subscribe(function (problem) {
            _this.problem = problem.problem;
            _this.solution_code = problem.problem.code;
        });
    };
    CodeProblemComponent.prototype.onSubmitSolution = function (submitted_code) {
        var _this = this;
        this.problemService.testProblemSolution(this.problem.name, submitted_code).subscribe(function (res) {
            _this.isSuccess = res.success;
            _this.feedback_msg = res.msg;
        });
    };
    CodeProblemComponent.prototype.ngOnInit = function () {
        this.getProblem();
    };
    CodeProblemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-problem',
            template: __webpack_require__(/*! ./code-problem.component.html */ "./src/app/components/code-problem/code-problem.component.html"),
            styles: [__webpack_require__(/*! ./code-problem.component.css */ "./src/app/components/code-problem/code-problem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_problem_service__WEBPACK_IMPORTED_MODULE_3__["ProblemService"]])
    ], CodeProblemComponent);
    return CodeProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header{\r\n  text-align: center;\r\n}\r\n.language-name{\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGFuZ3VhZ2UtbmFtZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<h2 class=\"page-header\">Dashboard</h2>\n<div class=\"jumbotron cpp change-cursor\" routerLink=\"/language/cpp/::\">\n  <h2 class=\"language-name\">C++</h2>\n</div>\n<div class=\"jumbotron java change-cursor\" routerLink=\"/language/java/::\">\n  <h2 class=\"language-name\">Java</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Cyber-Trainer</h1>\n  <p class=\"lead\">Welcome to our project</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid blah</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>A paper solid blah</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>A scissors solid blah</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/language/language.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/language/language.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".problems{\r\n  display: table-cell;\r\n  width: 80%;\r\n}\r\n\r\n.filters{\r\n  display: table-cell;\r\n  margin-left: 20px;\r\n  width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2JsZW1ze1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZpbHRlcnN7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/language/language.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/language/language.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<h2 class=\"page-header\">{{language}}</h2>\n<div class=\"problems\">\n  <table class=\"table table-hover\">\n    <thead>\n    <tr>\n      <th scope=\"col\"></th>\n      <th scope=\"col\">Difficulty</th>\n      <th scope=\"col\">Points</th>\n      <th scope=\"col\">Date of Solution</th>\n      <th scope=\"col\">Solved</th>\n    </tr>\n    </thead>\n    <tbody *ngIf=\"problemInfo\">\n      <tr *ngFor=\"let problem of problems\" (click)=\"onClickProblem(problem.name)\" class=\"change-cursor\">\n        <th scope=\"row\">{{problem.name}}</th>\n        <td>{{problem.difficulty}}</td>\n        <td>{{problem.points}}</td>\n        <td>{{(problemInfo.get(problem.name) === undefined)?'':(problemInfo.get(problem.name).dateSol)}}</td>\n        <td>\n          <div *ngIf=\"(problemInfo.get(problem.name)===undefined)?false:(problemInfo.get(problem.name).solved == true); else elseBlock\">&#10004;</div>\n          <ng-template #elseBlock>&#10060;</ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"filters\">\n  <fieldset>\n    <legend>Difficulty</legend>\n    <div class=\"form-group\">\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"difficulty1\" [(ngModel)]=\"filterEasy\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"difficulty1\">Easy</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"difficutly2\" [(ngModel)]=\"filterMedium\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"difficutly2\">Medium</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"difficulty3\" [(ngModel)]=\"filterHard\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"difficulty3\">Hard</label>\n      </div>\n    </div>\n    <legend>Category</legend>\n    <div class=\"form-group\">\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category1\" [(ngModel)]=\"filterDCL\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category1\">Declarations and Initialization</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category2\" [(ngModel)]=\"filterEXP\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category2\">Expressions</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category3\" [(ngModel)]=\"filterINT\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category3\">Integers</label>\n      </div>\n    </div>\n  </fieldset>\n</div>\n"

/***/ }),

/***/ "./src/app/components/language/language.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/language/language.component.ts ***!
  \***********************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/problem.service */ "./src/app/services/problem.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(problemService, authService, router, route) {
        this.problemService = problemService;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    LanguageComponent.prototype.getLanguageProblems = function (language, filters) {
        var _this = this;
        this.problemService.getLanguageProblems(language).subscribe(function (problemsWrapper) {
            var temp = problemsWrapper.problems;
            _this.problems = [];
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var problem = temp_1[_i];
                var hasDifficulty = false;
                if (filters.difficulties.length === 0)
                    hasDifficulty = true;
                else {
                    for (var _a = 0, _b = filters.difficulties; _a < _b.length; _a++) {
                        var difficulty = _b[_a];
                        if (problem.category.includes(difficulty)) {
                            hasDifficulty = true;
                            break;
                        }
                    }
                }
                var hasCategory = false;
                if (filters.categories.length === 0)
                    hasCategory = true;
                else {
                    for (var _c = 0, _d = filters.categories; _c < _d.length; _c++) {
                        var category = _d[_c];
                        if (problem.category.includes(category)) {
                            hasCategory = true;
                            break;
                        }
                    }
                }
                if (hasCategory && hasDifficulty) {
                    _this.problems.push(problem);
                }
            }
            _this.problems.sort(function (obj1, obj2) {
                return (obj1.name > obj2.name) ? 1 : -1;
            });
            _this.authService.getProfile().subscribe(function (profile) {
                var info = profile.user.attempted_problems;
                var temp_info = new Map();
                for (var _i = 0, _a = _this.problems; _i < _a.length; _i++) {
                    var problem = _a[_i];
                    if (info.hasOwnProperty(problem.name)) {
                        temp_info.set(problem.name, { solved: info[problem.name].solved, dateSol: info[problem.name].dateSol });
                    }
                    else {
                        temp_info.set(problem.name, { solved: false, dateSol: 'TBD' });
                    }
                }
                _this.problemInfo = temp_info;
            });
        });
    };
    LanguageComponent.prototype.onClickProblem = function (problem_name) {
        this.router.navigate(["/problems/" + problem_name]);
    };
    LanguageComponent.prototype.updateFilter = function () {
        var filters = ":";
        if (this.filterEasy) {
            filters += 'easy:';
        }
        if (this.filterMedium) {
            filters += 'medium:';
        }
        if (this.filterHard) {
            filters += 'hard:';
        }
        filters += ':';
        if (this.filterDCL) {
            filters += 'DCL:';
        }
        if (this.filterEXP) {
            filters += 'EXP:';
        }
        if (this.filterINT) {
            filters += 'INT:';
        }
        this.router.navigate(["/language/" + this.routeLanguage + "/" + filters]);
    };
    LanguageComponent.prototype.getFilters = function (filters) {
        var difficulties = [];
        var i;
        while (filters[1] != ':') {
            i = filters.indexOf(':', 1);
            difficulties.push(filters.slice(1, i));
            filters = filters.slice(i, filters.length);
        }
        filters = filters.slice(1, filters.length);
        var categories = [];
        while (filters != ':') {
            i = filters.indexOf(':', 1);
            categories.push(filters.slice(1, i));
            filters = filters.slice(i, filters.length);
        }
        return { difficulties: difficulties, categories: categories };
    };
    LanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.problemInfo = null;
        this.route.params.subscribe(function (routeParams) {
            _this.routeLanguage = routeParams.language;
            switch (routeParams.language) {
                case 'cpp':
                    _this.language = 'C++';
                    break;
                case 'java':
                    _this.language = 'Java';
                    break;
                default:
                    _this.language = '';
                    break;
            }
            var filters = _this.getFilters(routeParams.filters);
            if (filters.difficulties.includes('easy'))
                _this.filterEasy = true;
            if (filters.difficulties.includes('medium'))
                _this.filterMedium = true;
            if (filters.difficulties.includes('hard'))
                _this.filterHard = true;
            if (filters.categories.includes('DCL'))
                _this.filterDCL = true;
            if (filters.categories.includes('EXP'))
                _this.filterEXP = true;
            if (filters.categories.includes('INT'))
                _this.filterINT = true;
            _this.getLanguageProblems(routeParams.language, filters);
        });
    };
    LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/components/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.css */ "./src/app/components/language/language.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_problem_service__WEBPACK_IMPORTED_MODULE_2__["ProblemService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <th scope=\"col\">Username</th>\n    <th scope=\"col\">Join Date</th>\n    <th scope=\"col\">Number of Problems Solved</th>\n    <th scope=\"col\">Total Points</th>\n  </tr>\n  </thead>\n  <tbody *ngIf=\"users\">\n  <tr *ngFor=\"let user of users\" routerLink=\"/user/{{user.username}}\" class=\"change-cursor\">\n    <th scope=\"row\">{{user.username}}</th>\n    <td>{{user.join_date}}</td>\n    <td>{{user.num_solved}}</td>\n    <td>{{user.total_points}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LeaderboardComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.authService.getAllUsers().subscribe(function (users) {
            _this.users = users;
            _this.users.sort(function (obj1, obj2) {
                var points_diff = obj2.total_points - obj1.total_points;
                if (points_diff != 0)
                    return points_diff;
                else {
                    return (obj2.username > obj1.username) ? 1 : -1;
                }
            });
        });
    };
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/components/leaderboard/leaderboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timout: 5000 });
                _this.router.navigate(['/problems']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timout: 5000 });
                _this.router.navigate(['/login']);
                _this.password = '';
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-results{\r\n  position: absolute;\r\n  width: 204px;\r\n  z-index: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHRze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjA0cHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Rafael-Project</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n    <ul class=\"navbar-nav mr-auto navbar-left\">\r\n      <li *ngIf=\"!authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li *ngIf=\"!authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"!authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n      </li>\r\n      <li *ngIf=\"authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/problems']\">Problems</a>\r\n      </li>\r\n      <li *ngIf=\"authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/test']\">Tests</a>\r\n      </li>\r\n      <li *ngIf=\"authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/leaderboard']\">Leaderboard</a>\r\n      </li>\r\n      <li *ngIf=\"authService.isLoggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/stats']\">Stats</a>\r\n      </li>\r\n      <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n    </ul>\r\n    <div *ngIf=\"authService.isLoggedIn()\">\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input #searchBox id=\"search-box\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" autocomplete=\"off\" (input)=\"search(searchBox.value)\">\r\n      </form>\r\n      <ul class=\"list-group search-results\">\r\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let user of users$ | async\" >\r\n          <a routerLink=\"/user/{{user.username}}\">\r\n            {{user.username}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (term) { return _this.authService.searchUsers(term); }));
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">Join Date: {{user.join_date}}</li>\n    <li class=\"list-group-item\">Number of Solved Problems: {{user.num_solved}}</li>\n    <li class=\"list-group-item\">Number of Solution Attempts: {{user.num_attempted}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/public-profile/public-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljLXByb2ZpbGUvcHVibGljLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/public-profile/public-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">Join Date: {{user.join_date}}</li>\n    <li class=\"list-group-item\">Number of Solved Problems: {{user.num_solved}}</li>\n    <li class=\"list-group-item\">Number of Solution Attempts: {{user.num_attempted}}</li>\n    <div class=\"jumbotron\">\n      <p class=\"lead\" style=\"white-space: pre-line\">{{attempted_problems}}{{solved_problems}}</p>\n    </div>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/public-profile/public-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: PublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function() { return PublicProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    PublicProfileComponent.prototype.getUser = function (username) {
        var _this = this;
        this.authService.getUserInfo(username).subscribe(function (data) {
            _this.user = data.user;
            if (data.user.num_attempted == 0) {
                _this.attempted_problems = username + " hasn't even tried solving something. What a loser!";
                _this.solved_problems = "";
            }
            else {
                _this.attempted_problems += username + " has attempted: ";
                if (data.user.num_solved == 0) {
                    for (var name_1 in data.user.attempted_problems) {
                        if (_this.attempted_problems === username + " has attempted: ") {
                            _this.attempted_problems += name_1;
                        }
                        else {
                            _this.attempted_problems += ", " + name_1;
                        }
                    }
                    _this.solved_problems += "\nBut hasn't solved anything. What a loser!";
                }
                else {
                    _this.solved_problems += "\n" + username + " has solved: ";
                    for (var name_2 in data.user.attempted_problems) {
                        if (_this.attempted_problems === username + " has attempted: ") {
                            _this.attempted_problems += name_2;
                        }
                        else {
                            _this.attempted_problems += ", " + name_2;
                        }
                        if (data.user.attempted_problems[name_2].solved) {
                            if (_this.solved_problems === "\n" + username + " has solved: ") {
                                _this.solved_problems += name_2;
                            }
                            else {
                                _this.solved_problems += ", " + name_2;
                            }
                        }
                    }
                }
            }
        });
    };
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            _this.attempted_problems = "";
            _this.solved_problems = "";
            _this.getUser(routeParams.username);
        });
    };
    PublicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(/*! ./public-profile.component.html */ "./src/app/components/public-profile/public-profile.component.html"),
            styles: [__webpack_require__(/*! ./public-profile.component.css */ "./src/app/components/public-profile/public-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        else if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered and can log in", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/statistics/statistics.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\r\n  float: left;\r\n}\r\n\r\n.info {\r\n  float: left;\r\n  width: 70%;\r\n  height: 1000px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/statistics/statistics.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <table class=\"table table-hover\">\n    <tbody class=\"body\">\n    <tr class=\"change-cursor\" (click)=\"onClickGeneral()\" [class.table-active]=\"'General' === selected.name\">\n      <th scope=\"row\">General</th>\n    </tr>\n    <tr *ngFor=\"let info of problemsInfo\" (click)=\"onClickProblem(info)\" class=\"change-cursor\" [class.table-active]=\"info.name === selected.name\">\n      <th scope=\"row\">{{info.name}}</th>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"info\">\n  <br/>\n  <h2 align=\"center\">{{selected.name}}</h2>\n  <div *ngIf=\"selected.name === 'General'; else elseBlock\" class=\"jumbotron\">\n    <p class=\"lead\">The number of users in the system is: {{selected.numUsers}}</p>\n    <hr class=\"my-4\">\n    <p>More interesting statistics. <i>Maybe leaderboard?!</i></p>\n  </div>\n  <ng-template #elseBlock>\n    <div class=\"jumbotron\">\n      <p class=\"lead\" style=\"white-space: pre-line\">{{selected.num_attempted}}<br>The number of users who solved the problem is: {{selected.num_solved}}.<br>\n        {{selected.solvingUsers}}\n        Average number of attempts until solution is: {{selected.avg_attempts}}.<br>\n        {{selected.solved_percent}}% of users have solved this problem.</p>\n      <hr class=\"my-4\">\n      <p>More interesting statistics.</p>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/statistics/statistics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/problem.service */ "./src/app/services/problem.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(problemService, authService) {
        this.problemService = problemService;
        this.authService = authService;
    }
    StatisticsComponent.prototype.getAllProblems = function () {
        var _this = this;
        this.problemService.getAllProblems().subscribe(function (problemsWrapper) {
            _this.problems = problemsWrapper.problems;
            var temp_info = [];
            _this.authService.getNumUsers().subscribe(function (data) {
                _this.numUsers = data.num_users;
                for (var _i = 0, _a = _this.problems; _i < _a.length; _i++) {
                    var problem = _a[_i];
                    var tot_attempts = 0;
                    var solvingUsers = '';
                    if (problem.solved_by !== undefined) {
                        if (problem.num_solved > 1) {
                            var i = 1;
                            solvingUsers += 'The users are: ';
                            for (var name_1 in problem.solved_by) {
                                if (solvingUsers === "The users are: ") {
                                    solvingUsers += name_1;
                                }
                                else if (i === problem.num_solved) {
                                    if (problem.num_solved !== 2)
                                        solvingUsers += ',';
                                    solvingUsers += " and " + name_1;
                                }
                                else {
                                    solvingUsers += ", " + name_1;
                                }
                                i++;
                                tot_attempts += problem.solved_by[name_1];
                            }
                            solvingUsers += '.\n';
                        }
                        else if (problem.num_solved === 1) {
                            solvingUsers += 'The user is: ';
                            for (var name_2 in problem.solved_by) {
                                solvingUsers += name_2;
                                tot_attempts += problem.solved_by[name_2];
                            }
                            solvingUsers += '.\n';
                        }
                        else {
                            solvingUsers += '\n';
                        }
                    }
                    var text1 = void 0;
                    if (problem.num_attempted !== 1) {
                        text1 = "So far their have been " + problem.num_attempted + " attempts to solve the problem.";
                    }
                    else {
                        text1 = "So far their has been " + problem.num_attempted + " attempt to solve the problem.";
                    }
                    temp_info.push({
                        name: problem.name,
                        solved_percent: ((problem.num_solved * 100) / _this.numUsers),
                        avg_attempts: (problem.num_solved === 0) ? 0 : tot_attempts / problem.num_solved,
                        num_solved: problem.num_solved,
                        num_attempted: text1,
                        solvingUsers: solvingUsers
                    });
                    _this.generalInfo = { name: 'General', numUsers: data.num_users };
                    _this.selected = _this.generalInfo;
                }
                temp_info.sort(function (obj1, obj2) { if (obj1.name > obj2.name)
                    return 1;
                else
                    return -1; });
            });
            _this.problemsInfo = temp_info;
        });
    };
    StatisticsComponent.prototype.onClickGeneral = function () {
        this.selected = this.generalInfo;
    };
    StatisticsComponent.prototype.onClickProblem = function (name) {
        this.selected = name;
    };
    StatisticsComponent.prototype.ngOnInit = function () {
        this.generalInfo = {};
        this.selected = {};
        this.getAllProblems();
    };
    StatisticsComponent.prototype.test = function () {
        alert("hi");
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/components/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/components/statistics/statistics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_problem_service__WEBPACK_IMPORTED_MODULE_2__["ProblemService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/components/test-problem/test-problem.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/test-problem/test-problem.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1wcm9ibGVtL3Rlc3QtcHJvYmxlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/test-problem/test-problem.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/test-problem/test-problem.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<h1 class=\"text-center\">Problem {{cur_prob+1}} of {{num_problems}}</h1>\r\n<div class=\"progress\">\r\n  <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" [style.width.%]=\"(num_problems != 0)?(progress*100)/num_problems:10\"\r\n       aria-valuemin=\"0\" [attr.aria-valuemax]=\"num_problems\"></div>\r\n</div>\r\n<hr class=\"my-4\">\r\n<h1>{{(problem === undefined)?'':problem.name}}</h1>\r\n<p style=\"white-space: pre-wrap;\">{{(problem === undefined)?'':problem.paragraph}}</p>\r\n<ngx-codemirror [(ngModel)]=\"solution_code\"\r\n                [options]=\"{\r\n                  lineNumbers: true,\r\n                  theme: 'material',\r\n                  mode: 'text/x-c++src',\r\n                  indentUnit: 4,\r\n                  indentWithTabs: true,\r\n                  autoCloseBrackets: true\r\n                }\">{{solution_code}}</ngx-codemirror>\r\n<br/>\r\n<div *ngIf=\"failed != true; else elseBlock\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitSolution(solution_code)\">Submit</button>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/test\">Back to Test Menu</button>\r\n</ng-template>\r\n<br/>\r\n<div *ngIf=\"isSuccess != undefined\">{{feedback_msg}}</div>\r\n<div *ngIf=\"isSuccess == true && (cur_prob!=(num_problems-1))\">\r\n  <hr class=\"my-4\">\r\n  <div class=\"text-center\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"nextProblem()\">Next</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"isSuccess == true && (cur_prob==(num_problems-1))\">\r\n  <hr class=\"my-4\">\r\n  <p style=\"text-align: center\">========================================You Did It!!!!==============================================</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/test-problem/test-problem.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/test-problem/test-problem.component.ts ***!
  \*******************************************************************/
/*! exports provided: TestProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestProblemComponent", function() { return TestProblemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/problem.service */ "./src/app/services/problem.service.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/test.service */ "./src/app/services/test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TestProblemComponent = /** @class */ (function () {
    function TestProblemComponent(problemService, testService, router) {
        this.problemService = problemService;
        this.testService = testService;
        this.router = router;
    }
    TestProblemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.failed = false;
        this.cur_prob = 0;
        this.progress = 0;
        this.num_problems = this.testService.getNumProblems();
        this.filters = this.testService.getFilters();
        this.problemService.getAllProblems().subscribe(function (problemsArr) {
            var allProblems = problemsArr.problems;
            var filteredProblems = [];
            for (var _i = 0, allProblems_1 = allProblems; _i < allProblems_1.length; _i++) {
                var problem = allProblems_1[_i];
                var hasCategory = false;
                if (_this.filters.length === 0) {
                    hasCategory = true;
                }
                else {
                    for (var _a = 0, _b = _this.filters; _a < _b.length; _a++) {
                        var category = _b[_a];
                        if (problem.category.includes(category)) {
                            hasCategory = true;
                            break;
                        }
                    }
                }
                if (hasCategory) {
                    filteredProblems.push(problem);
                }
            }
            _this.shuffle(filteredProblems);
            _this.problems = filteredProblems;
            if (_this.problems.length == 0) {
                _this.router.navigate(['/test']);
                return;
            }
            _this.problem = _this.problems[0];
            _this.num_problems = Math.min(_this.num_problems, _this.problems.length);
            _this.solution_code = _this.problem.code;
        });
    };
    /**
     * Shuffles array in place. ES6 version
     * @param {Array} arr items An array containing the items.
     */
    TestProblemComponent.prototype.shuffle = function (arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
        return arr;
    };
    TestProblemComponent.prototype.onSubmitSolution = function (submitted_code) {
        var _this = this;
        this.problemService.testTestSolution(this.problem.name, submitted_code).subscribe(function (res) {
            _this.isSuccess = res.success;
            _this.feedback_msg = res.msg;
            if (_this.isSuccess)
                _this.progress++;
            else if (_this.feedback_msg === 'Incorrect Solution!')
                _this.failed = true;
        });
    };
    TestProblemComponent.prototype.nextProblem = function () {
        this.isSuccess = undefined;
        this.feedback_msg = undefined;
        this.cur_prob += 1;
        this.problem = this.problems[this.cur_prob];
        this.solution_code = this.problem.code;
    };
    TestProblemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-problem',
            template: __webpack_require__(/*! ./test-problem.component.html */ "./src/app/components/test-problem/test-problem.component.html"),
            styles: [__webpack_require__(/*! ./test-problem.component.css */ "./src/app/components/test-problem/test-problem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_problem_service__WEBPACK_IMPORTED_MODULE_2__["ProblemService"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TestProblemComponent);
    return TestProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header{\r\n  text-align: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.subheader{\r\n  margin-left: 5px;\r\n}\r\n\r\n.custom-checkbox{\r\n  float: left;\r\n  margin-left: 30px;\r\n}\r\n\r\n.num-questions-form{\r\n  width: 200px;\r\n  margin-left: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zdWJoZWFkZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLm51bS1xdWVzdGlvbnMtZm9ybXtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"jumbotron\" style=\"border-color: black; border-style: dotted; border-radius: 5px\">\n  <h2 class=\"page-header\">Setup Test</h2>\n  <hr class=\"my-4\">\n  <h4 class=\"subheader\">Select the categories of the test:</h4>\n  <div class=\"filters\">\n    <fieldset>\n      <div class=\"form-group\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category1\" [(ngModel)]=\"filterDCL\">\n          <label class=\"custom-control-label\" for=\"category1\">Declarations and Initialization</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category2\" [(ngModel)]=\"filterEXP\">\n          <label class=\"custom-control-label\" for=\"category2\">Expressions</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category3\" [(ngModel)]=\"filterINT\">\n          <label class=\"custom-control-label\" for=\"category3\">Integers</label>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n  <hr class=\"my-4\">\n  <h4 class=\"subheader\">Select number of problems:</h4>\n  <div class=\"form-group num-questions-form\">\n    <select [(ngModel)]=\"numProblems\" class=\"custom-select\">\n      <option value=\"5\">5</option>\n      <option value=\"10\">10</option>\n      <option value=\"15\">15</option>\n    </select>\n  </div>\n  <hr class=\"my-4\">\n  <div class=\"text-center\">\n    <a class=\"btn btn-primary\" (click)=\"startTest()\">Start Test!</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/test.service */ "./src/app/services/test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TestComponent = /** @class */ (function () {
    function TestComponent(testService, router) {
        this.testService = testService;
        this.router = router;
    }
    TestComponent.prototype.startTest = function () {
        var filters = [];
        if (this.filterDCL) {
            filters.push('DCL');
        }
        if (this.filterINT) {
            filters.push('INT');
        }
        if (this.filterEXP) {
            filters.push('EXP');
        }
        this.testService.beginTest(this.numProblems, filters);
        this.router.navigate(['/test/problem']);
    };
    TestComponent.prototype.ngOnInit = function () {
        this.filterDCL = false;
        this.filterINT = false;
        this.filterEXP = false;
        this.numProblems = 10;
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.isAdmin()) {
            return true;
        }
        else {
            if (this.authService.isLoggedIn()) {
                this.router.navigate(['/problems']);
            }
            else {
                this.router.navigate(['/login']);
            }
            return false;
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/test.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/test.guard.ts ***!
  \**************************************/
/*! exports provided: TestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGuard", function() { return TestGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/test.service */ "./src/app/services/test.service.ts");





var TestGuard = /** @class */ (function () {
    function TestGuard(authService, testService, router) {
        this.authService = authService;
        this.testService = testService;
        this.router = router;
    }
    TestGuard.prototype.canActivate = function () {
        if (this.testService.isTakingTest()) {
            return true;
        }
        else {
            if (this.authService.isLoggedIn()) {
                this.router.navigate(['/test']);
            }
            else {
                this.router.navigate(['/login']);
            }
            return false;
        }
    };
    TestGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TestGuard);
    return TestGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post('http://localhost:3000/users/register', user, httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post('http://localhost:3000/users/authenticate', user, httpOptions);
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get('http://localhost:3000/users/profile', httpOptions);
    };
    AuthService.prototype.getUserInfo = function (username) {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get("http://localhost:3000/users/getUser/" + username, httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        this.authToken = token;
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('id_token');
        return token !== null && !helper.isTokenExpired(token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.getTokenUser = function () {
        this.loadToken();
        if (this.authToken != null) {
            var user = helper.decodeToken(this.authToken);
            return user.username;
        }
        else {
            return "";
        }
    };
    AuthService.prototype.isAdmin = function () {
        this.loadToken();
        if (this.authToken != null) {
            var user = helper.decodeToken(this.authToken);
            return user.isAdmin;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        localStorage.clear();
    };
    AuthService.prototype.getNumUsers = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get('http://localhost:3000/users/getNumUsers', httpOptions);
    };
    AuthService.prototype.getAllUsers = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get('http://localhost:3000/users/getAllUsers', httpOptions);
    };
    AuthService.prototype.searchUsers = function (term) {
        if (!term.trim()) {
            // if not search term, return empty user array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get("http://localhost:3000/users/search/" + term, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/problem.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/problem.service.ts ***!
  \*********************************************/
/*! exports provided: ProblemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemService", function() { return ProblemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var problemsUrl = 'http://localhost:3000/problems';
var ProblemService = /** @class */ (function () {
    function ProblemService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProblemService.prototype.getAllProblems = function () {
        var authToken = this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get(problemsUrl + "/getAllProblems", httpOptions);
    };
    ProblemService.prototype.getLanguageProblems = function (language) {
        var authToken = this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get(problemsUrl + "/getLanguageProblems/" + language, httpOptions);
    };
    ProblemService.prototype.getProblem = function (name) {
        var authToken = this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': authToken, 'Content-Type': 'application/json' })
        };
        return this.http.get(problemsUrl + "/getProblem/" + name, httpOptions);
    };
    ProblemService.prototype.testProblemSolution = function (name, solution) {
        var authToken = this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': authToken, 'Content-Type': 'application/json' })
        };
        var problemRequest = {
            name: name,
            solution: solution
        };
        return this.http.post(problemsUrl + "/checkProblemSolution", problemRequest, httpOptions);
    };
    ProblemService.prototype.testTestSolution = function (name, solution) {
        var authToken = this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': authToken, 'Content-Type': 'application/json' })
        };
        var problemRequest = {
            name: name,
            solution: solution
        };
        return this.http.post(problemsUrl + "/checkTestSolution", problemRequest, httpOptions);
    };
    ProblemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProblemService);
    return ProblemService;
}());



/***/ }),

/***/ "./src/app/services/test.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/test.service.ts ***!
  \******************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.prototype.beginTest = function (num_problems, filters) {
        this.takingTest = true;
        this.num_problems = num_problems;
        this.filters = filters;
    };
    TestService.prototype.getNumProblems = function () {
        return this.num_problems;
    };
    TestService.prototype.getFilters = function () {
        return this.filters;
    };
    TestService.prototype.isTakingTest = function () {
        return (this.takingTest === true);
    };
    TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        return !(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined
            || user.name == '' || user.username == '' || user.email == '' || user.password == '');
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dan\Documents\Rafael-Project\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map