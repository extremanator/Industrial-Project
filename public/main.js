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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! codemirror/mode/clike/clike */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_28__);





























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
    { path: 'language/:language/:filters', component: _components_language_language_component__WEBPACK_IMPORTED_MODULE_20__["LanguageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
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
                _components_test_problem_test_problem_component__WEBPACK_IMPORTED_MODULE_23__["TestProblemComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_16__["CodemirrorModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_26__["NgxUiLoaderModule"]
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

module.exports = "tr {\r\n  background: #ededed;\r\n  border: 1px solid #ccc;\r\n  padding: 10px 30px;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\ntr:active {\r\n  background: #e5e5e5;\r\n  box-shadow: inset 0px 0px 5px #c1c1c1;\r\n  outline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2RlLXByb2JsZW0vY29kZS1wcm9ibGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUduQixxQ0FBcUM7RUFDckMsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2RlLXByb2JsZW0vY29kZS1wcm9ibGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ciB7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50cjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCAjYzFjMWMxO1xyXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggI2MxYzFjMTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCAjYzFjMWMxO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/code-problem/code-problem.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/code-problem/code-problem.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\r\n\r\n<h1>{{(problem === undefined)?'':problem.name}}</h1>\r\n<div *ngIf=\"problem?.type==='open'\">\r\n  <p style=\"white-space: pre-wrap;\">{{(problem === undefined)?'':problem.paragraph}}</p>\r\n  <ngx-codemirror [(ngModel)]=\"solution_code\"\r\n                  [options]=\"{\r\n                  lineNumbers: true,\r\n                  theme: 'material',\r\n                  mode: 'text/x-c++src',\r\n                  indentUnit: 4,\r\n                  indentWithTabs: true,\r\n                  autoCloseBrackets: true\r\n                }\">{{solution_code}}</ngx-codemirror>\r\n  <br/>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitSolution(solution_code)\">Submit</button>\r\n  <br/>\r\n  <br/>\r\n  <div style=\"position: relative; background-color: white; height: 50px; width: 100%\">\r\n    <ngx-ui-loader [loaderId]=\"'resultLoader'\" [fgsSize]=\"30\"></ngx-ui-loader>\r\n    <div *ngIf=\"isSuccess == true\" class=\"alert alert-dismissible alert-success\">\r\n      <strong>{{feedback_msg}}</strong>\r\n    </div>\r\n    <div *ngIf=\"isSuccess == false\" class=\"alert alert-dismissible alert-danger\">\r\n      <strong>{{feedback_msg}}</strong>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n</div>\r\n\r\n<div *ngIf=\"problem?.type==='close'\">\r\n  <p style=\"white-space: pre-wrap;\">{{problem.paragraph}}</p>\r\n  <ngx-codemirror *ngIf=\"solution_code\" [(ngModel)]=\"solution_code\"\r\n                  [options]=\"{\r\n                    lineNumbers: true,\r\n                    theme: 'material',\r\n                    mode: 'text/x-c++src',\r\n                    indentUnit: 4,\r\n                    indentWithTabs: true,\r\n                    readOnly: true\r\n                  }\">{{solution_code}}</ngx-codemirror>\r\n  <br *ngIf=\"solution_code\"/>\r\n  <table class=\"table table-hover\">\r\n    <tbody>\r\n    <tr *ngFor=\"let sol of problem.solutions\" (click)=\"onSolveClosed(sol)\" class=\"change-cursor\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">{{ sol }}</button>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <div style=\"position: relative; background-color: white; height: 50px; width: 100%\">\r\n    <ngx-ui-loader [loaderId]=\"'resultLoader'\" [fgsSize]=\"30\"></ngx-ui-loader>\r\n    <div *ngIf=\"isSuccess == true\" class=\"alert alert-dismissible alert-success\">\r\n      <strong>{{feedback_msg}}</strong>\r\n    </div>\r\n    <div *ngIf=\"isSuccess == false\" class=\"alert alert-dismissible alert-danger\">\r\n      <strong>{{feedback_msg}}</strong>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");





var CodeProblemComponent = /** @class */ (function () {
    function CodeProblemComponent(route, problemService, spinnerService) {
        this.route = route;
        this.problemService = problemService;
        this.spinnerService = spinnerService;
    }
    CodeProblemComponent.prototype.getProblem = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        this.problemService.getProblem(name).subscribe(function (problemWrapper) {
            _this.problem = problemWrapper.problem;
            if (_this.problem.code !== undefined) {
                _this.solution_code = _this.problem.code;
            }
        });
    };
    CodeProblemComponent.prototype.onSubmitSolution = function (submitted_code) {
        var _this = this;
        this.spinnerService.startLoader('resultLoader');
        window.scroll({
            top: 1000,
            behavior: 'smooth'
        });
        this.problemService.testProblemSolution(this.problem.name, submitted_code).subscribe(function (res) {
            _this.isSuccess = res.success;
            _this.feedback_msg = res.msg;
            _this.spinnerService.stopLoader('resultLoader');
        });
    };
    CodeProblemComponent.prototype.onSolveClosed = function (solution) {
        var _this = this;
        this.spinnerService.startLoader('resultLoader');
        window.scroll({
            top: 1000,
            behavior: 'smooth'
        });
        this.problemService.checkCloseProblemSolution(this.problem.name, solution).subscribe(function (res) {
            _this.isSuccess = res.success;
            _this.feedback_msg = res.msg;
            _this.spinnerService.stopLoader('resultLoader');
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
            _services_problem_service__WEBPACK_IMPORTED_MODULE_3__["ProblemService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]])
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

module.exports = "<br/>\r\n<h2 class=\"page-header\">Programming Languages</h2>\r\n<div class=\"jumbotron cpp change-cursor\" routerLink=\"/language/cpp/::\">\r\n  <h2 class=\"language-name\">C++</h2>\r\n</div>\r\n<div class=\"jumbotron java change-cursor\" routerLink=\"/language/java/::\">\r\n  <h2 class=\"language-name\">Java</h2>\r\n</div>\r\n<div class=\"jumbotron c# change-cursor\" routerLink=\"/language/c#/::\">\r\n  <h2 class=\"language-name\">C#</h2>\r\n</div>\r\n"

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

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer{\r\n  background-color: darkslategrey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"card-footer\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
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

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>Cyber-Trainer</h1>\r\n  <p class=\"lead\">Welcome to our project</p>\r\n  <div>\r\n    <a *ngIf=\"user === undefined\" class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a *ngIf=\"user === undefined\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n    <p *ngIf=\"user !== undefined\">Welcome, {{ user.name }}</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h3>Express Backend</h3>\r\n    <p>A rock solid blah</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Angular-CLI</h3>\r\n    <p>A paper solid blahh</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>JWT Tokens</h3>\r\n    <p>A scissors solid blah</p>\r\n  </div>\r\n</div>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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

module.exports = ".problems{\r\n  display: table-cell;\r\n  width: 80%;\r\n}\r\n\r\n.filters{\r\n  display: table-cell;\r\n  padding-left: 20px;\r\n  width: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2JsZW1ze1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZpbHRlcnN7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/language/language.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/language/language.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<h2 class=\"page-header\">{{language}}</h2>\n<div class=\"problems\">\n  <table class=\"table table-hover\">\n    <thead>\n    <tr>\n      <th scope=\"col\"></th>\n      <th scope=\"col\">Difficulty</th>\n      <th scope=\"col\">Points</th>\n      <th scope=\"col\">Date of Solution</th>\n      <th scope=\"col\">Solved</th>\n    </tr>\n    </thead>\n    <tbody *ngIf=\"problemInfo\">\n      <tr *ngFor=\"let problem of problems\" (click)=\"onClickProblem(problem.name)\" class=\"change-cursor\">\n        <th scope=\"row\">{{problem.name}}</th>\n        <td>{{problem.difficulty}}</td>\n        <td>{{problem.points}}</td>\n        <td>{{(problemInfo.get(problem.name) === undefined)?'':(problemInfo.get(problem.name).dateSol)}}</td>\n        <td>\n          <div *ngIf=\"(problemInfo.get(problem.name)===undefined)?false:(problemInfo.get(problem.name).solved == true); else elseBlock\">&#10004;</div>\n          <ng-template #elseBlock>&#10060;</ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"filters\">\n  <fieldset>\n    <legend>Difficulty</legend>\n    <div class=\"form-group\">\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"difficulty1\" [(ngModel)]=\"filterEasy\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"difficulty1\">Easy</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"difficutly2\" [(ngModel)]=\"filterMedium\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"difficutly2\">Medium</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"difficulty3\" [(ngModel)]=\"filterHard\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"difficulty3\">Hard</label>\n      </div>\n    </div>\n    <legend>Category</legend>\n    <div class=\"form-group\">\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category1\" [(ngModel)]=\"filterDCL\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category1\">Declarations and Initialization</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category2\" [(ngModel)]=\"filterEXP\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category2\">Expressions</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category3\" [(ngModel)]=\"filterINT\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category3\">Integers</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category4\" [(ngModel)]=\"filterCTR\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category4\">Containers</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category5\" [(ngModel)]=\"filterSTR\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category5\">Characters and Strings</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category6\" [(ngModel)]=\"filterMEM\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category6\">Memory Management</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category7\" [(ngModel)]=\"filterFIO\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category7\">Input Output</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category8\" [(ngModel)]=\"filterERR\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category8\">Exceptions and Error Handling</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category9\" [(ngModel)]=\"filterOOP\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category9\">Object Oriented Programming</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category10\" [(ngModel)]=\"filterCON\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category10\">Concurrency</label>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"category11\" [(ngModel)]=\"filterMSC\" (change)=\"updateFilter()\">\n        <label class=\"custom-control-label\" for=\"category11\">Miscellaneous</label>\n      </div>\n    </div>\n  </fieldset>\n</div>\n"

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
        if (this.filterCTR) {
            filters += 'CTR:';
        }
        if (this.filterSTR) {
            filters += 'STR:';
        }
        if (this.filterMEM) {
            filters += 'MEM:';
        }
        if (this.filterFIO) {
            filters += 'FIO:';
        }
        if (this.filterERR) {
            filters += 'ERR:';
        }
        if (this.filterOOP) {
            filters += 'OOP:';
        }
        if (this.filterCON) {
            filters += 'CON:';
        }
        if (this.filterMSC) {
            filters += 'MSC:';
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
            else
                _this.filterEasy = false;
            if (filters.difficulties.includes('medium'))
                _this.filterMedium = true;
            else
                _this.filterMedium = false;
            if (filters.difficulties.includes('hard'))
                _this.filterHard = true;
            else
                _this.filterHard = false;
            if (filters.categories.includes('DCL'))
                _this.filterDCL = true;
            else
                _this.filterDCL = false;
            if (filters.categories.includes('EXP'))
                _this.filterEXP = true;
            else
                _this.filterEXP = false;
            if (filters.categories.includes('INT'))
                _this.filterINT = true;
            else
                _this.filterINT = false;
            if (filters.categories.includes('CTR'))
                _this.filterCTR = true;
            else
                _this.filterCTR = false;
            if (filters.categories.includes('STR'))
                _this.filterSTR = true;
            else
                _this.filterSTR = false;
            if (filters.categories.includes('MEM'))
                _this.filterMEM = true;
            else
                _this.filterMEM = false;
            if (filters.categories.includes('FIO'))
                _this.filterFIO = true;
            else
                _this.filterFIO = false;
            if (filters.categories.includes('ERR'))
                _this.filterERR = true;
            else
                _this.filterERR = false;
            if (filters.categories.includes('OOP'))
                _this.filterOOP = true;
            else
                _this.filterOOP = false;
            if (filters.categories.includes('CON'))
                _this.filterCON = true;
            else
                _this.filterCON = false;
            if (filters.categories.includes('MSC'))
                _this.filterMSC = true;
            else
                _this.filterMSC = false;
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

module.exports = "<br/>\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n  <br/>\n</form>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n"

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

module.exports = "<br/>\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">Join Date: {{user.join_date}}</li>\n    <li class=\"list-group-item\">Number of Solved Problems: {{user.num_solved}}</li>\n    <li class=\"list-group-item\">Number of Solution Attempts: {{user.num_attempted}}</li>\n  </ul>\n</div>\n<br/>\n"

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

module.exports = "<br/>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  <br/>\n</form>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n"

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

module.exports = ".list {\r\n  width: 25%;\r\n}\r\n\r\n.info {\r\n  width: 75%;\r\n  height: 1200px;\r\n}\r\n\r\n.sub-table{\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.my-dropdown::after{\r\n  content: '˅';\r\n  font-family: \"Courier New\", serif;\r\n  float: right;\r\n}\r\n\r\n.custom-radio{\r\n  float: left;\r\n  margin-left: 20px;\r\n}\r\n\r\n.radio-label{\r\n  float: left;\r\n}\r\n\r\n.search-results{\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDEyMDBweDtcclxufVxyXG5cclxuLnN1Yi10YWJsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ubXktZHJvcGRvd246OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICfLhSc7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgc2VyaWY7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY3VzdG9tLXJhZGlve1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tbGFiZWx7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0c3tcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/statistics/statistics.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; height: 2000px\">\n  <div class=\"list\">\n    <table class=\"table table-hover\">\n      <tbody class=\"body\">\n      <tr class=\"change-cursor\" (click)=\"onClickGeneral()\" [class.table-success]=\"clickedGeneral\">\n        <th class=\"my-dropdown\" scope=\"row\">General</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedGeneral\" (click)=\"onClickUsers('Users')\" [class.table-active]=\"'Users' === selected.name\">\n        <th scope=\"row\">&emsp;Users</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedGeneral\" (click)=\"onClickProblems('Problems')\" [class.table-active]=\"'Problems' === selected.name\">\n        <th scope=\"row\">&emsp;Problems</th>\n      </tr>\n      <tr class=\"change-cursor\" (click)=\"onClickCategories()\" [class.table-success]=\"clickedCategories\">\n        <th class=\"my-dropdown\" scope=\"row\">Categories</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Declarations and Initialization')\" [class.table-active]=\"'Declarations and Initialization' === selected.name\">\n        <th scope=\"row\">&emsp;Declarations and Initialization</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Expressions')\" [class.table-active]=\"'Expressions' === selected.name\">\n        <th scope=\"row\">&emsp;Expressions</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Integers')\" [class.table-active]=\"'Integers' === selected.name\">\n        <th scope=\"row\">&emsp;Integers</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Containers')\" [class.table-active]=\"'Containers' === selected.name\">\n        <th scope=\"row\">&emsp;Containers</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Characters and Strings')\" [class.table-active]=\"'Characters and Strings' === selected.name\">\n        <th scope=\"row\">&emsp;Characters and Strings</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Memory Management')\" [class.table-active]=\"'Memory Management' === selected.name\">\n        <th scope=\"row\">&emsp;Memory Management</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Input Output')\" [class.table-active]=\"'Input Output' === selected.name\">\n        <th scope=\"row\">&emsp;Input Output</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Exceptions and Error Handling')\" [class.table-active]=\"'Exceptions and Error Handling' === selected.name\">\n        <th scope=\"row\">&emsp;Exceptions and Error Handling</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Object Oriented Programming')\" [class.table-active]=\"'Object Oriented Programming' === selected.name\">\n        <th scope=\"row\">&emsp;Object Oriented Programming</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Concurrency')\" [class.table-active]=\"'Concurrency' === selected.name\">\n        <th scope=\"row\">&emsp;Concurrency</th>\n      </tr>\n      <tr class=\"change-cursor sub-table\" *ngIf=\"clickedCategories\" (click)=\"onClickCategory('Miscellaneous')\" [class.table-active]=\"'Miscellaneous' === selected.name\">\n        <th scope=\"row\">&emsp;Miscellaneous</th>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"info\" *ngIf=\"selected.name !== undefined\">\n    <br/>\n    <h2 align=\"center\">{{selected.name}}</h2>\n    <div *ngIf=\"selected.name === 'Users'\" class=\"jumbotron\">\n      <p class=\"lead\">The number of users in the system is: {{numUsers}}</p>\n      <hr class=\"my-4\">\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"searchUsername\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control mr-sm-2\" placeholder=\"Search for username\" autocomplete=\"off\" (input)=\"onSearchUser(searchUsername)\">\n      </div>\n      <ul class=\"list-group search-results\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center change-cursor\" *ngFor=\"let user of searchUsers$ | async\" (click)=\"onSelectUser(user)\">\n            {{user.username}}\n        </li>\n      </ul>\n      <div *ngIf=\"selectedUser !== undefined\">\n        <br/>\n        <h2 class=\"page-header\">{{selectedUser.name}}</h2>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">Username: {{selectedUser.username}}</li>\n          <li class=\"list-group-item\">Email: {{selectedUser.email}}</li>\n          <li class=\"list-group-item\">Join Date: {{selectedUser.join_date}}</li>\n          <li class=\"list-group-item\">Number of Solved Problems: {{selectedUser.num_solved}}</li>\n          <li class=\"list-group-item\">Number of Solution Attempts: {{selectedUser.num_attempted}}</li>\n          <li class=\"list-group-item\">User has solved: {{selectedUser.attempts}}</li>\n          <li class=\"list-group-item\">User has attempted: {{selectedUser.solved}}</li>\n        </ul>\n        <br/>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClickRemoveUser(selectedUser)\">Remove User</button>\n        <hr class=\"my-4\">\n        <p>And even more possible commands to apply to the user! <i>Maybe give test?!</i></p>\n      </div>\n    </div>\n    <div *ngIf=\"selected.name === 'Problems'\" class=\"jumbotron\">\n      <p class=\"lead\">The number of problems in the system is: {{numProblems}}</p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Most solved problems: {{maxProblemsText}}</li>\n        <li class=\"list-group-item\">Number of users that solved: {{maxSolutions}}</li>\n        <li class=\"list-group-item\">Least solved problems: {{minProblemsText}}</li>\n        <li class=\"list-group-item\">Number of users that solved: {{minSolutions}}</li>\n      </ul>\n      <hr class=\"my-4\">\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"searchProblem\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control mr-sm-2\" placeholder=\"Search for problem name\" autocomplete=\"off\" (input)=\"onSearchProblem(searchProblem)\">\n      </div>\n      <ul class=\"list-group search-results\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center change-cursor\" *ngFor=\"let problem of searchProblems$ | async\" (click)=\"onSelectProblem(problem)\">\n          {{problem.name}}\n        </li>\n      </ul>\n      <div *ngIf=\"selectedProblem !== undefined\">\n        <br/>\n        <h2 class=\"page-header\">{{selectedProblem.name}}</h2>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">Name: {{selectedProblem.name}}</li>\n          <li class=\"list-group-item\">Difficulty: {{selectedProblem.difficulty}}</li>\n          <li class=\"list-group-item\">Categories: {{selectedProblem.category}}</li>\n          <li class=\"list-group-item\">Point value: {{selectedProblem.points}}</li>\n          <li class=\"list-group-item\">Type: {{selectedProblem.type_text}}</li>\n          <li class=\"list-group-item\">Number of users that solved the problem: {{selectedProblem.num_solved}}</li>\n          <li class=\"list-group-item\">Number of attempts to solve the problem: {{selectedProblem.num_attempted}}</li>\n          <li class=\"list-group-item\">Percent of users that solved: {{selectedProblem.solved_percent}}</li>\n          <li class=\"list-group-item\">Solving users: {{selectedProblem.solvingUsers}}</li>\n          <li class=\"list-group-item\">Avg attempts until first solution: {{selectedProblem.avg_attempts}}</li>\n        </ul>\n        <br/>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClickRemoveProblem(selectedProblem)\">Remove Problem</button>\n        <hr class=\"my-4\">\n        <p>And even more possible commands to apply to the problem!</p>\n      </div>\n    </div>\n    <div *ngIf=\"selected.name !== 'Users' && selected.name !== 'Problems'\" class=\"jumbotron\">\n      <p class=\"lead\" style=\"white-space: pre-line\">\n        The number of attempts of problems from this category is: {{selected.num_attempted}}<br>\n        The number of times a problem from this category has been solved is: {{selected.num_solved}}<br>\n      </p>\n      <hr class=\"my-4\">\n      <p class=\"lead\">List of problems from this category:</p>\n      <p class=\"radio-label\">Order by: </p>\n      <fieldset>\n        <div class=\"form-group\">\n          <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" id=\"order1\" name=\"order\" class=\"custom-control-input\" checked=\"\" (change)=\"onChangeOrder('attempts')\">\n            <label class=\"custom-control-label\" for=\"order1\">Number of attempts</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" id=\"order2\" name=\"order\" class=\"custom-control-input\"  (change)=\"onChangeOrder('solutions')\">\n            <label class=\"custom-control-label\" for=\"order2\">Number of solutions</label>\n          </div>\n        </div>\n      </fieldset>\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Difficulty</th>\n          <th scope=\"col\"># Attempts</th>\n          <th scope=\"col\"># Solutions</th>\n          <th scope=\"col\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let problem of displayedProblems\">\n          <th scope=\"row\">{{problem.name}}</th>\n          <td>{{problem.difficulty}}</td>\n          <td>{{problem.num_attempted}}</td>\n          <td>{{problem.num_solved}}</td>\n          <td>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClickRemoveProblem(problem)\">Remove</button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<!--\n        {{selected.solved_percent}}% of users have solved this problem.</p>-->\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(problemService, authService) {
        this.problemService = problemService;
        this.authService = authService;
        this.userSearchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.problemSearchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    StatisticsComponent.prototype.getAllInfo = function () {
        var _this = this;
        this.problemService.getAllProblems().subscribe(function (problemsWrapper) {
            _this.problems = problemsWrapper.problems;
            _this.numProblems = _this.problems.length;
            _this.authService.getAllUsers().subscribe(function (users) {
                _this.users = users;
                _this.numUsers = _this.users.length;
                var maxProblems = [];
                var minProblems = [];
                _this.maxSolutions = null;
                _this.minSolutions = null;
                for (var _i = 0, _a = _this.problems; _i < _a.length; _i++) {
                    var problem = _a[_i];
                    if (_this.maxSolutions === null || _this.maxSolutions < problem.num_solved) {
                        maxProblems = [problem.name];
                        _this.maxSolutions = problem.num_solved;
                    }
                    else if (_this.maxSolutions === problem.num_solved) {
                        maxProblems.push(problem.name);
                    }
                    if (_this.minSolutions === null || _this.minSolutions > problem.num_solved) {
                        minProblems = [problem.name];
                        _this.minSolutions = problem.num_solved;
                    }
                    else if (_this.minSolutions === problem.num_solved) {
                        minProblems.push(problem.name);
                    }
                }
                minProblems.sort(function (name1, name2) {
                    return (name1 > name2) ? 1 : -1;
                });
                maxProblems.sort(function (name1, name2) {
                    return (name1 > name2) ? 1 : -1;
                });
                _this.maxProblemsText = '';
                for (var _b = 0, maxProblems_1 = maxProblems; _b < maxProblems_1.length; _b++) {
                    var name_1 = maxProblems_1[_b];
                    if (_this.maxProblemsText === '') {
                        _this.maxProblemsText += name_1;
                    }
                    else {
                        _this.maxProblemsText += ", " + name_1;
                    }
                }
                _this.minProblemsText = '';
                for (var _c = 0, minProblems_1 = minProblems; _c < minProblems_1.length; _c++) {
                    var name_2 = minProblems_1[_c];
                    if (_this.minProblemsText === '') {
                        _this.minProblemsText += name_2;
                    }
                    else {
                        _this.minProblemsText += ", " + name_2;
                    }
                }
            });
        });
    };
    StatisticsComponent.prototype.onSearchUser = function (username) {
        this.userSearchTerms.next(username);
    };
    StatisticsComponent.prototype.onSearchProblem = function (name) {
        this.problemSearchTerms.next(name);
    };
    StatisticsComponent.prototype.onSelectUser = function (user) {
        this.selectedUser = user;
        this.selectedUser.attempts = '';
        this.selectedUser.solved = '';
        for (var name_3 in user.attempted_problems) {
            if (this.selectedUser.attempts === '') {
                this.selectedUser.attempts += name_3;
            }
            else {
                this.selectedUser.attempts += ", " + name_3;
            }
            if (user.attempted_problems[name_3].solved) {
                if (this.selectedUser.solved === '') {
                    this.selectedUser.solved += name_3;
                }
                else {
                    this.selectedUser.solved += ", " + name_3;
                }
            }
        }
        if (this.selectedUser.attempts === '') {
            this.selectedUser.attempts = 'None';
        }
        if (this.selectedUser.solved === '') {
            this.selectedUser.solved = 'None';
        }
    };
    StatisticsComponent.prototype.onSelectProblem = function (problem) {
        this.selectedProblem = problem;
        this.selectedProblem.solved_percent = ((problem.num_solved * 100) / this.numUsers);
        this.selectedProblem.type_text = (problem.type === 'open') ? 'Open Problem' : 'Multiple Choice Problem';
        var totAttempts = 0;
        this.selectedProblem.solvingUsers = '';
        if (problem.solved_by !== undefined) {
            for (var name_4 in problem.solved_by) {
                if (this.selectedProblem.solvingUsers === '') {
                    this.selectedProblem.solvingUsers += name_4;
                }
                else {
                    this.selectedProblem.solvingUsers += ", " + name_4;
                }
                totAttempts += problem.solved_by[name_4];
            }
        }
        if (this.selectedProblem.solvingUsers === '') {
            this.selectedProblem.solvingUsers = 'None';
        }
        this.selectedProblem.avg_attempts = (problem.num_solved === 0) ? 0 : totAttempts / problem.num_solved;
    };
    StatisticsComponent.prototype.onClickGeneral = function () {
        this.clickedGeneral = !this.clickedGeneral;
    };
    StatisticsComponent.prototype.onClickCategories = function () {
        this.clickedCategories = !this.clickedCategories;
    };
    StatisticsComponent.prototype.onClickUsers = function (name) {
        this.selected.name = name;
        this.selectedUser = undefined;
    };
    StatisticsComponent.prototype.onClickProblems = function (name) {
        this.selected.name = name;
        this.selectedProblem = undefined;
    };
    StatisticsComponent.prototype.onClickCategory = function (name) {
        this.displayedProblems = [];
        this.selected.name = name;
        var category = this.getCategory(name);
        this.selected.num_attempted = 0;
        this.selected.num_solved = 0;
        for (var _i = 0, _a = this.problems; _i < _a.length; _i++) {
            var problem = _a[_i];
            if (problem.category.includes(category)) {
                this.selected.num_attempted += problem.num_attempted;
                this.selected.num_solved += problem.num_solved;
                this.displayedProblems.push(problem);
            }
        }
        if (this.displayOrder === 'Number of attempts') {
            this.displayedProblems.sort(function (prob1, prob2) {
                var dif = (prob2.num_attempted - prob1.num_attempted);
                if (dif === 0) {
                    return (prob1.name > prob2.name) ? 1 : -1;
                }
                return dif;
            });
        }
        else {
            this.displayedProblems.sort(function (prob1, prob2) {
                var dif = (prob2.num_solved - prob1.num_solved);
                if (dif === 0) {
                    return (prob1.name > prob2.name) ? 1 : -1;
                }
                return dif;
            });
        }
    };
    StatisticsComponent.prototype.onChangeOrder = function (order) {
        if (order === 'attempts') {
            this.displayOrder = 'Number of attempts';
            this.displayedProblems.sort(function (prob1, prob2) {
                var dif = (prob2.num_attempted - prob1.num_attempted);
                if (dif === 0) {
                    return (prob1.name > prob2.name) ? 1 : -1;
                }
                return dif;
            });
        }
        else {
            this.displayOrder = 'Number of solutions';
            this.displayedProblems.sort(function (prob1, prob2) {
                var dif = (prob2.num_solved - prob1.num_solved);
                if (dif === 0) {
                    return (prob1.name > prob2.name) ? 1 : -1;
                }
                return dif;
            });
        }
    };
    StatisticsComponent.prototype.getCategory = function (name) {
        switch (name) {
            case 'Declarations and Initialization':
                return 'DCL';
            case 'Expressions':
                return 'EXP';
            case 'Integers':
                return 'INT';
            case 'Containers':
                return 'CTR';
            case 'Characters and Strings':
                return 'STR';
            case 'Memory Management':
                return 'MEM';
            case 'Input Output':
                return 'FIO';
            case 'Exceptions and Error Handling':
                return 'ERR';
            case 'Object Oriented Programming':
                return 'OOP';
            case 'Concurrency':
                return 'CON';
            case 'Miscellaneous':
                return 'MSC';
        }
    };
    StatisticsComponent.prototype.onClickRemoveProblem = function (problem) {
        console.log('Removing ' + problem.name);
    };
    StatisticsComponent.prototype.onClickRemoveUser = function (user) {
        console.log('Removing ' + user.username);
    };
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllInfo();
        this.clickedGeneral = false;
        this.clickedCategories = false;
        this.selected = {};
        this.displayedProblems = [];
        this.displayOrder = 'Number of attempts';
        this.searchUsers$ = [];
        this.searchUsers$ = this.userSearchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
            if (!term.trim()) {
                // if not search term, return empty user array.
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
            }
            var result = [];
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.username.includes(term)) {
                    result.push(user);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        }));
        this.searchProblems$ = [];
        this.searchProblems$ = this.problemSearchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
            if (!term.trim()) {
                // if not search term, return empty user array.
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
            }
            var result = [];
            for (var _i = 0, _a = _this.problems; _i < _a.length; _i++) {
                var problem = _a[_i];
                if (problem.name.includes(term)) {
                    result.push(problem);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        }));
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

module.exports = "<div *ngIf=\"!completed\">\r\n  <br/>\r\n  <h1 class=\"text-center\">Problem {{cur_prob+1}} of {{num_problems}}</h1>\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" [style.width.%]=\"(num_problems != 0)?(progress*100)/num_problems:10\"\r\n         aria-valuemin=\"0\" [attr.aria-valuemax]=\"num_problems\"></div>\r\n  </div>\r\n  <hr class=\"my-4\">\r\n  <h1>{{(problem === undefined)?'':problem.name}}</h1>\r\n  <div *ngIf=\"problem?.type==='open'\">\r\n    <p style=\"white-space: pre-wrap;\">{{(problem === undefined)?'':problem.paragraph}}</p>\r\n    <ngx-codemirror [(ngModel)]=\"solution_code\"\r\n                    [options]=\"{\r\n                    lineNumbers: true,\r\n                    theme: 'material',\r\n                    mode: 'text/x-c++src',\r\n                    indentUnit: 4,\r\n                    indentWithTabs: true,\r\n                    autoCloseBrackets: true\r\n                  }\">{{solution_code}}</ngx-codemirror>\r\n    <br/>\r\n    <div>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitSolution(solution_code)\">Submit</button>\r\n    </div>\r\n    <br/>\r\n    <div style=\"position: relative; background-color: white; height: 50px; width: 100%\">\r\n      <ngx-ui-loader [loaderId]=\"'testLoader1'\" [fgsSize]=\"30\"></ngx-ui-loader>\r\n      <div *ngIf=\"isSuccess == true\" class=\"alert alert-dismissible alert-success\">\r\n        <strong>{{feedback_msg}}</strong>\r\n      </div>\r\n      <div *ngIf=\"isSuccess == false\" class=\"alert alert-dismissible alert-danger\">\r\n        <strong>{{feedback_msg}}</strong>\r\n      </div>\r\n    </div>\r\n    <br *ngIf=\"!showNext\" />\r\n  </div>\r\n  <div *ngIf=\"problem?.type==='close'\">\r\n    <p style=\"white-space: pre-wrap;\">{{problem.paragraph}}</p>\r\n    <ngx-codemirror *ngIf=\"solution_code\" [(ngModel)]=\"solution_code\"\r\n                    [options]=\"{\r\n                    lineNumbers: true,\r\n                    theme: 'material',\r\n                    mode: 'text/x-c++src',\r\n                    indentUnit: 4,\r\n                    indentWithTabs: true,\r\n                    readOnly: true\r\n                  }\">{{solution_code}}</ngx-codemirror>\r\n    <br *ngIf=\"solution_code\"/>\r\n    <table class=\"table table-hover\">\r\n      <tbody>\r\n      <tr *ngFor=\"let sol of problem.solutions\" (click)=\"onSolveClosed(sol)\" class=\"change-cursor\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">{{ sol }}</button>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <br/>\r\n    <div style=\"position: relative; background-color: white; height: 50px; width: 100%\">\r\n      <ngx-ui-loader [loaderId]=\"'testLoader2'\" [fgsSize]=\"30\"></ngx-ui-loader>\r\n      <div *ngIf=\"isSuccess == true\" class=\"alert alert-dismissible alert-success\">\r\n        <strong>{{feedback_msg}}</strong>\r\n      </div>\r\n      <div *ngIf=\"isSuccess == false\" class=\"alert alert-dismissible alert-danger\">\r\n        <strong>{{feedback_msg}}</strong>\r\n      </div>\r\n    </div>\r\n    <br *ngIf=\"!showNext\" />\r\n  </div>\r\n  <div *ngIf=\"showNext\">\r\n    <hr class=\"my-4\">\r\n    <div class=\"text-center\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"nextProblem()\">{{nextText}}</button>\r\n    </div>\r\n    <br/>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"completed\">\r\n  <br/>\r\n  <h1 class=\"text-center\">Test Results</h1>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">You solved {{solvedProblems.length}} out of {{num_problems}}</li>\r\n    <li class=\"list-group-item\">Solved Problems: {{solvedText}}</li>\r\n    <li class=\"list-group-item\">Failed Problems: {{unsolvedText}}</li>\r\n  </ul>\r\n  <br/>\r\n  <div class=\"text-center\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"retakeTest()\">Retake Test</button>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n<ngx-ui-loader></ngx-ui-loader>\r\n\r\n"

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
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");






var TestProblemComponent = /** @class */ (function () {
    function TestProblemComponent(problemService, testService, router, spinnerService) {
        this.problemService = problemService;
        this.testService = testService;
        this.router = router;
        this.spinnerService = spinnerService;
    }
    TestProblemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.completed = false;
        this.showNext = false;
        this.cur_prob = 0;
        this.progress = 0;
        this.unsolvedProblems = [];
        this.solvedProblems = [];
        this.num_problems = this.testService.getNumProblems();
        this.filters = this.testService.getFilters();
        this.nextText = 'Next Problem';
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
            if (_this.problems.length === 0) {
                _this.router.navigate(['/test']);
                return;
            }
            _this.num_problems = Math.min(_this.num_problems, _this.problems.length);
            _this.problem = _this.problems[0];
            if (_this.problem.code !== undefined) {
                _this.solution_code = _this.problem.code;
            }
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
        if (!this.showNext) {
            this.spinnerService.startLoader('testLoader1');
            window.scroll({
                top: 1000,
                behavior: 'smooth'
            });
            this.problemService.checkOpenSolutionInTest(this.problem.name, submitted_code).subscribe(function (res) {
                _this.spinnerService.stopLoader('testLoader1');
                _this.isSuccess = res.success;
                _this.feedback_msg = res.msg;
                if (_this.feedback_msg !== 'Compilation Error!') {
                    _this.showNext = true;
                    _this.progress++;
                    if (_this.progress === _this.num_problems) {
                        _this.nextText = 'See Results';
                    }
                    if (_this.isSuccess) {
                        _this.solvedProblems.push(_this.problem.name);
                    }
                    if (_this.feedback_msg === 'Incorrect Solution!') {
                        _this.unsolvedProblems.push(_this.problem.name);
                    }
                }
            });
        }
    };
    TestProblemComponent.prototype.onSolveClosed = function (solution) {
        var _this = this;
        if (!this.showNext) {
            this.spinnerService.startLoader('testLoader2');
            window.scroll({
                top: 1000,
                behavior: 'smooth'
            });
            this.problemService.checkCloseSolutionInTest(this.problem.name, solution).subscribe(function (res) {
                _this.spinnerService.stopLoader('testLoader2');
                _this.showNext = true;
                _this.isSuccess = res.success;
                _this.feedback_msg = res.msg;
                _this.progress++;
                if (_this.progress === _this.num_problems) {
                    _this.nextText = 'See Results';
                }
                if (_this.isSuccess) {
                    _this.solvedProblems.push(_this.problem.name);
                }
                if (_this.feedback_msg === 'Incorrect!') {
                    _this.unsolvedProblems.push(_this.problem.name);
                }
            });
        }
    };
    TestProblemComponent.prototype.retakeTest = function () {
        this.completed = false;
        this.showNext = false;
        this.cur_prob = 0;
        this.progress = 0;
        this.nextText = 'Next Problem';
        this.unsolvedProblems = [];
        this.solvedProblems = [];
        this.problem = this.problems[0];
        if (this.problem.code !== undefined) {
            this.solution_code = this.problem.code;
        }
    };
    TestProblemComponent.prototype.nextProblem = function () {
        this.isSuccess = undefined;
        this.feedback_msg = undefined;
        this.solution_code = undefined;
        this.showNext = false;
        if (this.progress === this.num_problems) {
            this.solvedText = (this.solvedProblems.length === 0) ? 'None' : this.solvedProblems.toString();
            this.unsolvedText = (this.unsolvedProblems.length === 0) ? 'None' : this.unsolvedProblems.toString();
            this.completed = true;
        }
        else {
            this.cur_prob += 1;
            this.problem = this.problems[this.cur_prob];
            if (this.problem.code !== undefined) {
                this.solution_code = this.problem.code;
            }
        }
    };
    TestProblemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-problem',
            template: __webpack_require__(/*! ./test-problem.component.html */ "./src/app/components/test-problem/test-problem.component.html"),
            styles: [__webpack_require__(/*! ./test-problem.component.css */ "./src/app/components/test-problem/test-problem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_problem_service__WEBPACK_IMPORTED_MODULE_2__["ProblemService"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
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

module.exports = "<br/>\n<div class=\"jumbotron\" style=\"border-color: black; border-style: dotted; border-radius: 5px\">\n  <h2 class=\"page-header\">Setup Test</h2>\n  <hr class=\"my-4\">\n  <h4 class=\"subheader\">Select the categories of the test:</h4>\n  <div class=\"filters\">\n    <fieldset>\n      <div class=\"form-group\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category1\" [(ngModel)]=\"filterDCL\">\n          <label class=\"custom-control-label\" for=\"category1\">Declarations and Initialization</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category2\" [(ngModel)]=\"filterEXP\">\n          <label class=\"custom-control-label\" for=\"category2\">Expressions</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category3\" [(ngModel)]=\"filterINT\">\n          <label class=\"custom-control-label\" for=\"category3\">Integers</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category4\" [(ngModel)]=\"filterCTR\">\n          <label class=\"custom-control-label\" for=\"category4\">Containers</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category5\" [(ngModel)]=\"filterSTR\">\n          <label class=\"custom-control-label\" for=\"category5\">Characters and Strings</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category6\" [(ngModel)]=\"filterMEM\">\n          <label class=\"custom-control-label\" for=\"category6\">Memory Management</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category7\" [(ngModel)]=\"filterFIO\">\n          <label class=\"custom-control-label\" for=\"category7\">Input Output</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category8\" [(ngModel)]=\"filterERR\">\n          <label class=\"custom-control-label\" for=\"category8\">Exceptions and Error Handling</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category9\" [(ngModel)]=\"filterOOP\">\n          <label class=\"custom-control-label\" for=\"category9\">Object Oriented Programming</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category10\" [(ngModel)]=\"filterCON\">\n          <label class=\"custom-control-label\" for=\"category10\">Concurrency</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"category11\" [(ngModel)]=\"filterMSC\">\n          <label class=\"custom-control-label\" for=\"category11\">Miscellaneous</label>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n  <hr class=\"my-4\">\n  <h4 class=\"subheader\">Select number of problems:</h4>\n  <div class=\"form-group num-questions-form\">\n    <select [(ngModel)]=\"numProblems\" class=\"custom-select\">\n      <option value=\"5\">5</option>\n      <option value=\"10\">10</option>\n      <option value=\"15\">15</option>\n    </select>\n  </div>\n  <hr class=\"my-4\">\n  <div class=\"text-center\">\n    <a class=\"btn btn-primary\" (click)=\"startTest()\">Start Test!</a>\n  </div>\n</div>\n\n"

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
        if (this.filterCTR) {
            filters.push('CTR');
        }
        if (this.filterSTR) {
            filters.push('STR');
        }
        if (this.filterMEM) {
            filters.push('MEM');
        }
        if (this.filterFIO) {
            filters.push('FIO');
        }
        if (this.filterERR) {
            filters.push('ERR');
        }
        if (this.filterOOP) {
            filters.push('OOP');
        }
        if (this.filterCON) {
            filters.push('CON');
        }
        if (this.filterMSC) {
            filters.push('MSC');
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
    ProblemService.prototype.checkOpenSolutionInTest = function (name, solution) {
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
    ProblemService.prototype.checkCloseSolutionInTest = function (name, solution) {
        var authToken = this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': authToken, 'Content-Type': 'application/json' })
        };
        var problemRequest = {
            name: name,
            solution: solution
        };
        return this.http.post(problemsUrl + "/checkClosedTestSolution", problemRequest, httpOptions);
    };
    ProblemService.prototype.checkCloseProblemSolution = function (name, solution) {
        var authToken = this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': authToken, 'Content-Type': 'application/json' })
        };
        var problemRequest = {
            name: name,
            solution: solution
        };
        return this.http.post(problemsUrl + "/checkClosedProblemSolution", problemRequest, httpOptions);
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