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

/***/ "./src/app/app-load/app-load.module.ts":
/*!*********************************************!*\
  !*** ./src/app/app-load/app-load.module.ts ***!
  \*********************************************/
/*! exports provided: init_app, get_settings, AppLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_app", function() { return init_app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_settings", function() { return get_settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadModule", function() { return AppLoadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-load.service */ "./src/app/app-load/app-load.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function init_app(appLoadService) {
    return function () { return appLoadService.initializeApp(); };
}
function get_settings(appLoadService) {
    return function () { return appLoadService.getSettings(); };
}
var AppLoadModule = /** @class */ (function () {
    function AppLoadModule() {
    }
    AppLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            providers: [
                _app_load_service__WEBPACK_IMPORTED_MODULE_2__["AppLoadService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: init_app, deps: [_app_load_service__WEBPACK_IMPORTED_MODULE_2__["AppLoadService"]], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: get_settings, deps: [_app_load_service__WEBPACK_IMPORTED_MODULE_2__["AppLoadService"]], multi: true }
            ]
        })
    ], AppLoadModule);
    return AppLoadModule;
}());



/***/ }),

/***/ "./src/app/app-load/app-load.service.ts":
/*!**********************************************!*\
  !*** ./src/app/app-load/app-load.service.ts ***!
  \**********************************************/
/*! exports provided: AppLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadService", function() { return AppLoadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/GlobalConstants */ "./src/app/shared/GlobalConstants.ts");
/* harmony import */ var _shared_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utilities */ "./src/app/shared/utilities.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppLoadService = /** @class */ (function () {
    function AppLoadService(httpClient) {
        this.httpClient = httpClient;
    }
    AppLoadService.prototype.initializeApp = function () {
        return new Promise(function (resolve, reject) {
            console.log("initializeApp:: inside promise");
            setTimeout(function () {
                console.log("initializeApp:: inside setTimeout");
                resolve();
            }, 1500);
        });
    };
    AppLoadService.prototype.getSettings = function () {
        var _this = this;
        var promise = this.httpClient.get('assets/appconfig.json')
            .toPromise()
            .then(function (settings) {
            console.log("Settings from file: ", settings);
            _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].voices = settings.voices;
            _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].selectedVoiceConfiguration = settings.selectedVoiceConfiguration;
            return settings;
        })
            .then(function (settings) {
            _this.httpClient.get(settings.serviceUrl + '/getConfigMaster').toPromise().then(function (appSettings) {
                console.log("appSettings", appSettings.sidemenuConfig);
                var sideMenu = appSettings.sidemenuConfig.filter(function (x) { return x.isActive == 1; });
                _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSideMenu = sideMenu;
                for (var i = 0; i < appSettings.appLevelConfig.length; i++) {
                    _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].dictAppSettingsMaster.add(appSettings.appLevelConfig[i].key, appSettings.appLevelConfig[i].value);
                }
                _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrMenuLevelConfig = appSettings.menuLevelConfig;
                _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSelectionConfig = appSettings.selectionConfig;
                var m = new Date().getMonth() - 1;
                if (m == -1) {
                    m = 11;
                }
                var actMonth = Object(_shared_utilities__WEBPACK_IMPORTED_MODULE_3__["getAlphaMonth"])(m);
                var actYear = "F" + new Date().getFullYear().toString().split('').slice(2, 4).join('');
                for (var i = 0; i < _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSelectionConfig.length; i++) {
                    if (_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSelectionConfig[i].fieldName == "Month") {
                        _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSelectionConfig[i].fieldValue = actMonth;
                    }
                    else if (_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSelectionConfig[i].fieldName == "FY Year") {
                        _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSelectionConfig[i].fieldValue = actYear;
                    }
                }
                var firstLevelMenuData = appSettings.menuLevelConfig.filter(function (x) { return x.isLandingMenu == 1 && x.reqType == 1; });
                var tempfirst = firstLevelMenuData[0].btns.split('|');
                for (var i = 0; i < tempfirst.length; i++) {
                    var o = tempfirst[i].split('$');
                    _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrFirstLevelMenu.push({ fieldName: o[1], fieldValue: o[0] });
                }
                var secondLevelMenuData = appSettings.menuLevelConfig.filter(function (x) { return x.isLandingMenu == 2; });
                var tempSecond = secondLevelMenuData[0].btns.split('|');
                for (var i = 0; i < tempSecond.length; i++) {
                    var o = tempSecond[i].split('$');
                    _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrSecondLevelMenu.push({ name: o[1], strDim: o[0] });
                }
                var thirdLevelMenuData = appSettings.menuLevelConfig.filter(function (x) { return x.isLandingMenu == 3; });
                var tempThird = thirdLevelMenuData[0].btns.split('|');
                for (var i = 0; i < tempThird.length; i++) {
                    var o = tempThird[i].split('$');
                    _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].arrThirdLevelMenu.push({ name: o[0], strDim: o[1] });
                }
                var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].isMobile = isMobile;
                console.log("isMobile", isMobile);
            });
        });
        return promise;
    };
    AppLoadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppLoadService);
    return AppLoadService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation/conversation.component */ "./src/app/conversation/conversation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'conversation', component: _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_3__["ConversationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<!-- <h1>Shree Swami Samartha</h1> -->\r\n<!-- <h1>Shree Swami Samartha</h1> -->\r\n\r\n<div class=\"bot-bg-box\"></div>\r\n<router-outlet></router-outlet>\r\n<div class=\"chat-icon\">\r\n  <div class=\"chat-icon-inner-box\">\r\n      <img src=\"../assets/images/UnripeAdoredGrayreefshark.gif\" (click)=\"navigateToHome()\">\r\n  </div>\r\n</div>\r\n\r\n<!-- https://www.npmjs.com/package/bingspeech-api-client -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(httpService, loggerService, storageAndUtilsService, router) {
        this.httpService = httpService;
        this.loggerService = loggerService;
        this.storageAndUtilsService = storageAndUtilsService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        try {
        }
        catch (error) {
            this.loggerService.log('error', "This is Error On Console");
        }
    };
    AppComponent.prototype.navigateToHome = function () {
        try {
            this.router.navigate(['/home', { openChat: 'true' }]);
        }
        catch (error) {
            this.loggerService.log('error', "[AppComponent] --> [navigateToHome] --> " + JSON.stringify(error));
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _shared__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
            _shared__WEBPACK_IMPORTED_MODULE_2__["StorageAndUtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_load_app_load_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-load/app-load.module */ "./src/app/app-load/app-load.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _star_star_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./star/star.component */ "./src/app/star/star.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _messagetime_messagetime_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messagetime/messagetime.component */ "./src/app/messagetime/messagetime.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./conversation/conversation.component */ "./src/app/conversation/conversation.component.ts");
/* harmony import */ var _shared_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/dropdown/dropdown.directive */ "./src/app/shared/dropdown/dropdown.directive.ts");
/* harmony import */ var _shared_dropdown_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/dropdown/dropdown-not-closable-zone.directive */ "./src/app/shared/dropdown/dropdown-not-closable-zone.directive.ts");
/* harmony import */ var _shared_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/dropdown/dropdown-open.directive */ "./src/app/shared/dropdown/dropdown-open.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _messagetime_messagetime_component__WEBPACK_IMPORTED_MODULE_11__["MessagetimeComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_13__["ConversationComponent"],
                _star_star_component__WEBPACK_IMPORTED_MODULE_7__["StarComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["SafebrowsePipe"],
                _shared_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__["DropdownDirective"],
                _shared_dropdown_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_15__["DropdownNotClosableZoneDirective"],
                _shared_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_16__["DropdownOpenDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_load_app_load_module__WEBPACK_IMPORTED_MODULE_2__["AppLoadModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            exports: [
                _shared_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__["DropdownDirective"],
                _shared_dropdown_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_15__["DropdownNotClosableZoneDirective"],
                _shared_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_16__["DropdownOpenDirective"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _shared__WEBPACK_IMPORTED_MODULE_8__["NlpService"], _shared__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], _shared__WEBPACK_IMPORTED_MODULE_8__["SpeechRecognitionService"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["StorageAndUtilsService"], _shared__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"],
                { provide: _shared__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], useClass: _shared__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/conversation/conversation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/conversation/conversation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/conversation/conversation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/conversation/conversation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chats-content\">\n\n  <div id=\"loader\" class=\"rply-msg-box typing-gif-box\" style=\"width: auto; padding: 0px; position: absolute; bottom: 60px; display: none;\">\n    <div class=\"\">\n      <img src=\"assets/images/typing-gif.gif\">\n    </div>\n  </div>\n  <div class=\"rply-msg-box\">\n    <p> {{ storageAndUtilsService.getGreeting() }} {{ userName }}, How can I help you?</p>\n    <!-- <app-messagetime></app-messagetime> -->\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n\n<ul id=\"conversation\" style=\"height: 85vh;\">\n  <div *ngFor=\"let conv of arrConversation;let i = index;\">\n\n    <div *ngIf=\"conv.type == 'hiddeniframe'\">\n      <iframe class=\"iframe-border\" [hidden]=\"'true'\" width=\"100%\" height=\"400px\" [src]=\"conv.url | safebrowse\"></iframe>\n      <div id=\"sheetListHere\"></div>\n    </div>\n\n    <div *ngIf=\"conv.type == 'landingCard' && dictLandingPageLinks.length > 0\">\n      <span class=\"chat-img pull-left\" style=\"display: inline-block;width: 10px;\">\n        <img ng-src=\"assets/images/M_logo.PNG\" alt=\"BOT\" class=\"img-circle doneLoading\" src=\"assets/images/M_logo.PNG\">\n        <input type=\"checkbox\" (change)=\"bookmarkThis(i,conv)\" style=\"margin: 4px;\">\n      </span>\n\n      <li class=\"left lastchat clearfix rply-msg-box\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"> Menu </h5>\n            <ul style=\"list-style: none;height: auto;\">\n              <li *ngFor=\"let intentLink of dictLandingPageLinksWithURLS\">\n\n                <div (click)=\"landingPageLinkClicked(intentLink)\">\n                  {{ intentLink?.name }}\n                </div>\n\n              </li>\n            </ul>\n            <div class=\"text-center\">\n              <button type=\"button\" (click)=\"toggle()\" class=\"btn btn-xs btn-info faqtoggle\">View More</button>\n            </div>\n\n          </div>\n        </div>\n      </li>\n    </div>\n\n    <div *ngIf=\"conv.type == 'iframewithbuttons'\">\n      <span class=\"chat-img pull-left\" style=\"display: inline-block;width: 10px;\">\n        <img ng-src=\"assets/images/M_logo.PNG\" alt=\"BOT\" class=\"img-circle doneLoading\" src=\"assets/images/M_logo.PNG\">\n        <input type=\"checkbox\" (change)=\"bookmarkThis(i,conv)\" style=\"margin: 4px;\">\n      </span>\n\n      <li class=\"left lastchat clearfix rply-msg-box\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ conv.cardHeader }}</h5>\n\n            <p class=\"card-text\">\n              <iframe #results class=\"iframe-border\" width=\"100%\" height=\"375px\" [src]=\"conv.url | safebrowse\"></iframe>\n            </p>\n\n            <div style=\"display:inline-block;border: 1px solid #e32b3a;\" class=\"listbtn3 listbtns listbtn1\" *ngFor=\"let btn of conv?.btnsData\">\n              <div (click)=\"btnClicked(btn)\">{{btn}}</div>\n            </div>\n            <!-- *ngIf=\"conv.isNlpResponse==true\" -->\n            <div class=\"star-component-wrapper\" style=\"display: flex\">\n\n              <div class=\"additionalFunctionalities\">\n                <i class=\"fa fa-comments-o\" (click)=\"openModalComentandNotify(contentComment,conv)\"></i>\n              </div>\n\n              <app-star [selectedData]=\"conv\" style=\"margin: 8px 0px 0px 8px;\"></app-star>\n            </div>\n          </div>\n        </div>\n        <!-- <app-messagetime></app-messagetime> -->\n      </li>\n    </div>\n\n    <div *ngIf=\"conv.type == 'iframe'\">\n      <span class=\"chat-img pull-left\" style=\"display: inline-block;width: 10px;\">\n        <img ng-src=\"assets/images/M_logo.PNG\" alt=\"BOT\" class=\"img-circle doneLoading\" src=\"assets/images/M_logo.PNG\">\n        <input type=\"checkbox\" (change)=\"bookmarkThis(i,conv)\" style=\"margin: 4px;\">\n      </span>\n      <li class=\"left lastchat clearfix rply-msg-box\">\n        <div class=\"\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ conv.cardHeader }}</h5>\n            <p class=\"card-text\">\n              <iframe class=\"iframe-border\" width=\"100%\" height=\"400px\" [src]=\"conv.url | safebrowse\"></iframe>\n            </p>\n          </div>\n\n          <div *ngIf=\"conv.isNlpResponse==true\" class=\"star-component-wrapper\">\n            <div class=\"additionalFunctionalities\">\n              <i class=\"fa fa-comments-o\" (click)=\"openModalComentandNotify(contentComment,conv)\"></i>\n            </div>\n            <app-star style=\"margin: 8px 0px 0px 8px;\" [selectedData]=\"conv\"></app-star>\n          </div>\n          <!-- <app-messagetime></app-messagetime> -->\n        </div>\n      </li>\n    </div>\n\n    <div *ngIf=\"conv.type == 'userMsg'\" class=\"right lastchat clearfix\">\n      <span class=\"chat-img pull-right\">\n        <img ng-src=\"assets/images/logo7.png\" alt=\"BOT\" class=\"img-circle  doneLoading\" src=\"assets/images/logo7.png\">\n      </span>\n      <div class=\"chat-body\">\n        <div class=\"clearfix ng-scope\" ng-if=\"list.position==='right'\">\n          <p class=\"lastmsg ng-binding\">\n            {{ conv.text }}\n          </p>\n        </div>\n        <!-- <app-messagetime></app-messagetime> -->\n      </div>\n    </div>\n\n  </div>\n</ul>\n\n\n<div class=\"reply-box\">\n  <div class=\"container-fluid\">\n    <!--  dialogForm.form.valid &&  -->\n    <form name=\"form\" (ngSubmit)=\"sendMessage()\" #dialogForm=\"ngForm\">\n      <div class=\"row\" style=\"display: block;\">\n        <div class=\"col-xs-11\">\n          <div class=\"reply-input-box\">\n\n            <input id=\"myInput\" type=\"text\" class=\"rply-input\" name=\"dialog\" [(ngModel)]=\"messageDialogModel.dialog\" #dialog=\"ngModel\"\n              required placeholder=\"reply\">\n            <div id=\"rec\" class=\"voice-box\">\n              <i id=\"rec1\" class=\"fa fa-microphone\"></i>\n            </div>\n            <div id=\"rec\" class=\"voice-box\">\n              <i id=\"rec1\" (click)=\"starRecording()\" class=\"fa fa-microphone\"></i>\n            </div>\n            <!-- <button (click)=\"download()\" class=\"btn btn-warning btn-sm\">Download results</button> -->\n            <div class=\"voice-box1\" type=\"submit\">\n              <i class=\"fa fa-paper-plane-o\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n<ng-template #contentComment let-modalComment>\n  <div class=\"modal-header\">\n    <h3 style=\"margin-bottom: 0px; text-align: center; width: 100%;\">Comment</h3>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalComment.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"container\">\n\n      <div class=\"form-area\">\n        <form role=\"form\">\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" type=\"textarea\" id=\"message\" name=\"message\" placeholder=\"Message\" \n            [(ngModel)]=\"commentModel.message\"\n              maxlength=\"140\" rows=\"7\"></textarea>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"modalComment.close(commentModel)\">Submit</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/conversation/conversation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/conversation/conversation.component.ts ***!
  \********************************************************/
/*! exports provided: ConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationComponent", function() { return ConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// line 116 @_ToDo
var ConversationComponent = /** @class */ (function () {
    function ConversationComponent(httpService, websocket, modalService, loggerService, speechRecognitionService, storageAndUtilsService) {
        this.httpService = httpService;
        this.websocket = websocket;
        this.modalService = modalService;
        this.loggerService = loggerService;
        this.speechRecognitionService = speechRecognitionService;
        this.storageAndUtilsService = storageAndUtilsService;
        this.qTicket = "";
        this.userName = "";
        this.commentModel = {
            message: ""
        };
        this.arrConversation = [];
        this.messageDialogModel = {};
        this.dictLandingPageLinks = [];
        this.dictLandingPageLinksWithURLS = [];
        this.showAll = false;
        this.cardHeader = "";
        this.sendLoginNotificationFlag = 1;
    }
    ConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dictLandingPageLinks = [];
        this.dictLandingPageLinksWithURLS = [];
        this.speechRecognitionService.speak("Welcome to Human Resourses ChatBot");
        this.gSessionID = JSON.parse(localStorage.getItem("jSession")).ResponseObject.sessionId;
        // this.userName = JSON.parse(localStorage.getItem("jUserData")).username;
        this.filteredLandingMenu = _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrMenuLevelConfig.filter(function (x) { return x.isLandingMenu == 1; });
        // this.dictLandingPageLinks = this.filteredLandingMenu.sort(function (a, b) { return a.nSequence - b.nSequence });
        this.arrConversation = this.initConversation();
        //  setTimeout(() => {
        this.getSheetLevelAccess();
        // }, 5000);
        console.log("Menu Final:- ", _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrMenuLevelConfig);
        this.showMoreOrLessLandingPageLinks();
        this.storageAndUtilsService.getClearChat().subscribe(function (d) {
            if (d.type == "CC") {
                _this.arrConversation = [];
                _this.arrConversation = _this.initConversation();
            }
            else if (d.type == "KPI") {
                _this.arrConversation.push({ type: 'landingCard', isNlpResponse: false, text: "Welcome" });
            }
            else if (d.type == "N") {
                console.log("inside notifications");
            }
            else if (d.type == "sendRating") {
                console.log("sendRating inside conversation", d);
                var obj = {
                    query: d.data.query,
                    username: _this.userName,
                    url: d.data.url,
                    rating: d.rating,
                    sessionId: _this.gSessionID,
                    reason: d.reason
                };
                _this.httpService.post('/pushToServerLog', { "type": "rating", "logBody": obj }).subscribe(function (d) {
                    console.log("logging rating");
                });
                // this.httpService.httpPost(GlobalConstants.dictAppSettingsMaster.getItem("URL_NLP_SERVICE") + '/putratingsdata', obj)
                // .subscribe((data) => {
                //   console.log("after post ratings", data);
                // });
                console.log("To send Nlp service", obj);
            }
        });
    };
    ConversationComponent.prototype.landingPageLinkClicked = function (landingPageLinkObj) {
        this.storageAndUtilsService.saveUserdata("objPrimaryContext", landingPageLinkObj);
        var key = landingPageLinkObj.name.replace(/\s+/g, "").toLowerCase();
        console.log(key);
        this.cardHeader = _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("MSG_CARD_HEADER").replace('{% intent %}', landingPageLinkObj.name);
        this.createConversation(landingPageLinkObj);
    };
    ConversationComponent.prototype.createConversation = function (landingPageLinkObj) {
        var _this = this;
        var url = "";
        console.log("inside getSingleConfigratorURL:- ", landingPageLinkObj);
        if (landingPageLinkObj.reqType == 1) {
            // https://qsdev.mahindra.com/extensions/HR_Phase1_action/HR_Phase1_action.html
            // ?reqType=1&bDefaultSelFlag=1&objId=BZmLC&selReq=Month$FEB|Employee_Type$Officers|FY%20Year$F19
            this.arrConversation.push({
                type: "iframewithbuttons",
                cardHeader: this.cardHeader,
                btnsData: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrFirstLevelMenu.map(function (x) { return x.fieldValue; }),
                url: this.getBindingUrl(landingPageLinkObj),
                isBookMarked: false,
                isNlpResponse: true
            });
            this.loggerService.log('info', url);
        }
        else if (landingPageLinkObj.reqType == 2) {
            // Reports
            // ?reqType=2&objId=max&strAdditionalObjects=PUzNyUY|TauKNBw
            this.arrConversation.push({
                type: "iframe",
                cardHeader: this.cardHeader,
                url: this.getBindingUrl(landingPageLinkObj),
                isBookMarked: false,
                isNlpResponse: false
            });
            this.loggerService.log('info', url);
        }
        setTimeout(function () {
            _this.speechRecognitionService.speak(_shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("MSG_CARD_HEADER").replace('{% intent %}', landingPageLinkObj.name));
        }, 1200);
    };
    ConversationComponent.prototype.btnClicked = function (btnName) {
        var _this = this;
        if (btnName === void 0) { btnName = ""; }
        console.log(btnName);
        var landingObj = JSON.parse(localStorage.getItem("objPrimaryContext"));
        var objId = landingObj.objId;
        if (_shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrFirstLevelMenu.map(function (x) { return x.fieldValue; }).includes(btnName)) {
            // ?reqType=4&objId=max&strFieldName=EmployeeCategory&strFieldValue=Permanant
            landingObj["reqType"] = 4;
            landingObj["objId"] = objId;
            this.arrConversation.push({
                type: "iframewithbuttons",
                cardHeader: this.cardHeader,
                btnsData: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrSecondLevelMenu.map(function (x) { return x.name; }),
                url: this.getBindingUrl(landingObj, btnName),
                isBookMarked: false,
                isNlpResponse: false
            });
        }
        else if (_shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrSecondLevelMenu.map(function (x) { return x.name; }).includes(btnName)) {
            landingObj["reqType"] = 3;
            landingObj["objId"] = objId;
            //?reqType=3&strLibID=pkhxzd&strDim=Sector
            this.arrConversation.push({
                type: "iframewithbuttons",
                cardHeader: this.cardHeader,
                btnsData: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrThirdLevelMenu.map(function (x) { return x.name; }),
                url: this.getBindingUrl(landingObj, btnName),
                isBookMarked: false,
                isNlpResponse: false
            });
        }
        else if (_shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrThirdLevelMenu.map(function (x) { return x.name; }).includes(btnName)) {
            landingObj["reqType"] = 3;
            landingObj["objId"] = objId;
            //?reqType=3&strLibID=pkhxzd&strDim=Tenure_Group
            this.arrConversation.push({
                type: "iframe",
                cardHeader: this.cardHeader,
                url: this.getBindingUrl(landingObj, btnName),
                isBookMarked: false,
                isNlpResponse: false
            });
        }
        setTimeout(function () {
            _this.speechRecognitionService.speak(_shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("MSG_CARD_HEADER").replace('{% intent %}', btnName));
        }, 1200);
    };
    ConversationComponent.prototype.getBindingUrl = function (landingPageLinkObj, btnName) {
        if (btnName === void 0) { btnName = null; }
        var url = _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_COMMANDER_MASHUP")
            + "reqType=" + landingPageLinkObj["reqType"]
            + "&objId=" + landingPageLinkObj["objId"];
        if (landingPageLinkObj["reqType"] == 1) {
            url = url + "&selReq=" + landingPageLinkObj["strSelections"]
                + "&strAddObj=" + landingPageLinkObj["strAdditionalObjects"];
        }
        else if (landingPageLinkObj["reqType"] == 2) {
            url = url + "&selReq=" + landingPageLinkObj["strSelections"]
                + "&strAddObj=" + landingPageLinkObj["strAdditionalObjects"];
        }
        else if (landingPageLinkObj["reqType"] == 3) {
            var btnAttr = _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrSecondLevelMenu.filter(function (x) { return x.name == btnName; })[0];
            if (btnAttr == undefined) {
                btnAttr = _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrThirdLevelMenu.filter(function (x) { return x.name == btnName; })[0];
            }
            url = url + "&strLibID=" + landingPageLinkObj["strLibID"] + "&strDim=" + btnAttr.strDim;
        }
        else if (landingPageLinkObj["reqType"] == 4) {
            var btnAttr = _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrFirstLevelMenu.filter(function (x) { return x.fieldValue == btnName; })[0];
            url = url + "&selReq=" + btnAttr.fieldName + '$' + btnAttr.fieldValue;
        }
        url = url + "&qlikTicket=" + this.qTicket;
        console.log("getBindingUrl " + landingPageLinkObj["reqType"], url);
        return url;
    };
    ConversationComponent.prototype.sendMessage = function () {
        var _this = this;
        try {
            console.log("User Asked:- ", this.messageDialogModel.dialog);
            if (this.sendLoginNotificationFlag) {
                var pyReq = {
                    strUserId: this.userName,
                    strSessionId: this.gSessionID,
                    arrAllowedSheets: JSON.parse(localStorage.getItem("allAllowedSheetNames"))
                };
                this.loggerService.log('info', this.messageDialogModel.dialog);
                console.log("sending login Notification to Python Service pyreq ", pyReq);
                this.httpService.httpPost(_shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_NLP_SERVICE") + '/type', { "text": this.messageDialogModel.dialog }).subscribe(function (data) {
                    _this.speechRecognitionService.speak(_shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("MSG_CARD_HEADER").replace('{% intent %}', _this.messageDialogModel.dialog));
                    _this.loggerService.log('info', data._body);
                    var resFromNlp = JSON.parse(data._body);
                    console.log("Nlp Service Response:--------- ", resFromNlp);
                    _this.createConversationFromNLP(resFromNlp);
                    // this.sendLoginNotificationFlag = 0;
                });
            }
            this.arrConversation.push({ type: 'userMsg', text: this.messageDialogModel.dialog });
        }
        catch (error) {
            this.loggerService.log('error', "[ConversationComponent] --> [sendMessage()] --> " + JSON.stringify(error));
        }
    };
    ConversationComponent.prototype.createConversationFromNLP = function (resFromNlp) {
        if (resFromNlp["reqType"] == "4") {
            this.arrConversation.push({
                query: this.messageDialogModel.dialog,
                type: "iframewithbuttons",
                username: this.userName,
                cardHeader: this.cardHeader,
                btnsData: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrSecondLevelMenu.map(function (x) { return x.name; }),
                url: this.getBindingUrlForNlp(resFromNlp),
                isBookMarked: false,
                isNlpResponse: true
            });
        }
        else if (resFromNlp["reqType"] == "3") {
            this.arrConversation.push({
                query: this.messageDialogModel.dialog,
                username: this.userName,
                type: "iframewithbuttons",
                cardHeader: this.cardHeader,
                btnsData: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrThirdLevelMenu.map(function (x) { return x.name; }),
                url: this.getBindingUrlForNlp(resFromNlp),
                isBookMarked: false,
                isNlpResponse: true
            });
        }
        else if (resFromNlp["reqType"] == "2") {
        }
        else if (resFromNlp["reqType"] == "1") {
            resFromNlp["strSelections"] = "Month$FEB|Employee_Type$Officers|FY%20Year$F19";
            this.arrConversation.push({
                query: this.messageDialogModel.dialog,
                username: this.userName,
                type: "iframewithbuttons",
                cardHeader: this.cardHeader,
                btnsData: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].arrFirstLevelMenu.map(function (x) { return x.fieldValue; }),
                url: this.getBindingUrl(resFromNlp),
                isBookMarked: false,
                isNlpResponse: true
            });
        }
    };
    ConversationComponent.prototype.getBindingUrlForNlp = function (resFromNlp) {
        var url = _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_COMMANDER_MASHUP")
            + "reqType=" + resFromNlp["reqType"] + "&qlikTicket=" + this.qTicket +
            +"&objId=" + resFromNlp["objId"];
        if (resFromNlp["reqType"] == "4") {
            url = url + "&selReq=" + resFromNlp["strSelections"];
        }
        else if (resFromNlp["reqType"] == "3") {
            url = url + "&strLibID=" + resFromNlp["strLibID"] + "&strDim=" + resFromNlp["strDim"];
        }
        else if (resFromNlp["reqType"] == "2") {
            url = url + "&selReq=" + resFromNlp["strSelections"]
                + "&strAddObj=" + resFromNlp["strAdditionalObjects"];
        }
        return url;
    };
    ConversationComponent.prototype.ngOnChanges = function (change) {
        try {
            this.qTicket = change.loggedInUser.currentValue.ticketInfo.Ticket;
            this.userName = change.loggedInUser.currentValue.ticketInfo.UserId;
        }
        catch (error) {
            this.loggerService.log('error', "[ConversationComponent] --> [ngOnChanges()] --> " + JSON.stringify(error));
        }
    };
    ConversationComponent.prototype.ngOnDestroy = function () {
        this.speechRecognitionService.DestroySpeechObject();
    };
    ConversationComponent.prototype.initConversation = function () {
        this.dictLandingPageLinksWithURLS = [];
        this.dictLandingPageLinks = [];
        // req 0 ==> Does Session Access
        // req PS ==> Does Persist Selections
        var a = [
            { type: "hiddeniframe", isNlpResponse: false, url: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_COMMANDER_MASHUP") + "reqType=0&sessionId=" + this.gSessionID + "&qlikTicket=" + this.qTicket + "&username=" + this.userName },
            { type: "hiddeniframe", isNlpResponse: false, url: _shared__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_COMMANDER_MASHUP") + "reqType=PS&sessionId=" + this.gSessionID + "&qlikTicket=" + this.qTicket + "&username=" + this.userName },
            { type: 'landingCard', isNlpResponse: false, text: "Welcome" },
        ];
        // { type: "hiddeniframe", url: GlobalConstants.dictAppSettingsMaster.getItem("URL_DEV_HUB").replace('{% qTicket %}', this.qTicket) }
        return a;
    };
    ConversationComponent.prototype.getSheetLevelAccess = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.gSessionID);
            _this.httpService.post("/getAllowedSheets", { "sessionId": _this.gSessionID })
                .subscribe(function (d) {
                if (d.ResponseString == 1) {
                    var allowedSheets = JSON.parse(d.ResponseObject)["allAllowedSheetNames[]"];
                    var allsheets = _this.filteredLandingMenu.map(function (x) { return x.sheetName.toUpperCase(); });
                    _this.allowedSheets = allowedSheets.filter(function (value) { return -1 !== allsheets.indexOf(value); });
                    var _loop_1 = function (i) {
                        var sheetName = _this.allowedSheets[i];
                        if (allsheets.includes(sheetName)) {
                            _this.dictLandingPageLinks.push(_this.filteredLandingMenu[allsheets.findIndex(function (x) { return x === sheetName; })]);
                        }
                    };
                    // this.dictLandingPageLinks = this.filteredLandingMenu.filter(x=>this.allowedSheets.includes( x.sheetName)).sort(function (a, b) { return a.nSequence - b.nSequence })
                    for (var i = 0; i < _this.allowedSheets.length; i++) {
                        _loop_1(i);
                    }
                    _this.dictLandingPageLinks.sort(function (a, b) { return a.nSequence - b.nSequence; });
                    _this.showMoreOrLessLandingPageLinks();
                }
                else {
                    console.log("Sheet Level Access Not executed | Session Is not found in redis DB");
                }
            });
        }, 7000);
    };
    ConversationComponent.prototype.toggle = function () {
        try {
            this.showAll = !this.showAll;
            this.showMoreOrLessLandingPageLinks();
        }
        catch (error) {
            this.loggerService.log('error', "[ConversationComponent] --> [toggle()] --> " + JSON.stringify(error));
        }
    };
    ConversationComponent.prototype.showMoreOrLessLandingPageLinks = function () {
        // this.showAll = !this.showAll;
        try {
            if (this.showAll) {
                this.dictLandingPageLinksWithURLS = [];
                this.dictLandingPageLinksWithURLS = this.dictLandingPageLinks;
            }
            else {
                this.dictLandingPageLinksWithURLS = [];
                this.dictLandingPageLinksWithURLS = this.dictLandingPageLinks.slice(0, 3);
            }
        }
        catch (error) {
            this.loggerService.log('error', "[ConverstaionComponent] --> [showMoreOrLessLandingPageLinks()] --> " + JSON.stringify(error));
        }
    };
    ConversationComponent.prototype.starRecording = function () {
        var _this = this;
        this.speechRecognitionService.record()
            .subscribe(function (value) {
            // console.log(value);
            _this.messageDialogModel.dialog = value;
        }, function (err) {
            console.log(err);
            if (err.error == "no-speech") {
                _this.starRecording();
            }
        }, function () {
            _this.starRecording();
        });
    };
    ConversationComponent.prototype.bookmarkThis = function (i, conv) {
        // console.log(i, conv);
        this.arrConversation[i].isBookMarked = !this.arrConversation[i].isBookMarked;
    };
    ConversationComponent.prototype.saveBookmark = function (profileName) {
        var arrProfiles = [];
        var profile = {
            "profileName": "",
            "profileData": []
        };
        profile.profileName = profileName;
        profile.profileData = this.arrConversation.filter(function (x) { return x.isBookMarked == true; });
        arrProfiles.push(profile);
        localStorage.setItem("profiles", JSON.stringify(arrProfiles));
    };
    ConversationComponent.prototype.openModalComentandNotify = function (contentComment, data) {
        var _this = this;
        this.modalService.open(contentComment, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (commentModal) {
            console.log("contentComment:- ", contentComment);
            console.log("commentModal:- ", commentModal);
            var menuName = JSON.parse(localStorage.getItem("objPrimaryContext")).name;
            var obj = {
                opType: 1,
                comment: commentModal["message"],
                arrConvData: data,
                sessionId: _this.gSessionID,
                username: _this.userName,
                menuname: menuName,
                currentSelections: "",
                timestamp: Date.now()
            };
            console.log("data:- ", obj);
            _this.httpService.post("/commentsOperations", obj).subscribe(function (d) {
            });
            _this.closeResult = "Closed with: " + commentModal;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConversationComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConversationComponent.prototype, "loggedInUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('results'),
        __metadata("design:type", Object)
    ], ConversationComponent.prototype, "results", void 0);
    ConversationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conversation',
            template: __webpack_require__(/*! ./conversation.component.html */ "./src/app/conversation/conversation.component.html"),
            styles: [__webpack_require__(/*! ./conversation.component.css */ "./src/app/conversation/conversation.component.css")]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _shared__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _shared__WEBPACK_IMPORTED_MODULE_1__["LoggerService"],
            _shared__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognitionService"],
            _shared__WEBPACK_IMPORTED_MODULE_1__["StorageAndUtilsService"]])
    ], ConversationComponent);
    return ConversationComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showChatBotWrapper\" #chatWindow class=\"chat-window opened\">\n\n  <div class=\"mahindra_logo\">\n    <img src=\"./assets/images/mahindra_logo.jpg\" class=\"img-responsive doneLoading\">\n  </div>\n\n  <div class=\"upper-div text-center\">\n    <div class=\"gif-box\">\n    </div>\n    <img src=\"./assets/images/close-icon.png\" (click)=\"CloseChatBotWrapper()\" class=\"close-btn\">\n\n    <div class=\"btn-group\" dropdown (onOpen)=\"dropDownOpen($event)\" style=\" cursor: pointer; position: absolute; margin-top: -17px; color: white; right: 41px;\">\n\n      <i class=\"fa fa-bars\" data-toggle=\"dropdown\" aria-expanded=\"false\" dropdown-open></i>\n\n      <ul class=\"dropdown-menu\">\n        <div *ngFor=\"let sm of sideMenu\">\n          <li *ngIf=\"sm.menuKey=='N'\" (click)=\"sideMenuClicked(sm,contentNotifications)\">\n            <span>\n              <i [ngClass]=\"sm.menuIconUrl\"></i> {{ sm.menuName }} </span>\n          </li>\n\n          <li *ngIf=\"sm.menuKey=='MS'\" (click)=\"sideMenuClicked(sm,content)\">\n            <span>\n              <i [ngClass]=\"sm.menuIconUrl\"></i> {{ sm.menuName }} </span>\n          </li>\n\n          <li *ngIf=\"sm.menuKey=='A'\" (click)=\"sideMenuClicked(sm,contentAbout)\">\n            <span>\n              <i [ngClass]=\"sm.menuIconUrl\"></i> {{ sm.menuName }} </span>\n          </li>\n\n          <li *ngIf=\"sm.menuKey!='MS' && sm.menuKey!='N' && sm.menuKey!='A'\" (click)=\"sideMenuClicked(sm,contentNotifications)\">\n            <span>\n              <i [ngClass]=\"sm.menuIconUrl\"></i> {{ sm.menuName }} </span>\n          </li>\n        </div>\n      </ul>\n\n    </div>\n  </div>\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h3 style=\"margin-bottom: 0px; text-align: center; width: 100%;\">Contact Form</h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"container\">\n\n        <div class=\"form-area\">\n          <form role=\"form\">\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email To\" [disabled]=\"true\" [(ngModel)]=\"contact.email\"\n                required>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"subject\" name=\"subject\" placeholder=\"Subject\" [(ngModel)]=\"contact.subject\" required>\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" type=\"textarea\" id=\"message\" name=\"message\" placeholder=\"Message\" [(ngModel)]=\"contact.message\"\n                maxlength=\"140\" rows=\"7\"></textarea>\n            </div>\n\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"modal.close(contact)\">Submit</button>\n    </div>\n  </ng-template>\n\n  <ng-template #contentNotifications let-modalNotifications>\n    <div class=\"modal-header\">\n      <h3 style=\"margin-bottom: 0px; text-align: center; width: 100%;\">Notifications</h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalNotifications.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"container\">\n        <div class=\"form-area\">\n          <ul>\n            <li *ngFor=\"let note of comments\">\n             <strong>{{ note.username }}</strong> {{ note.comment }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #contentAbout let-modalAbout>\n    <div class=\"modal-header\">\n      <h3 style=\"margin-bottom: 0px; text-align: center; width: 100%;\">About</h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalAbout.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"container\">\n        <div class=\"form-area\">\n\n          <div style=\"margin: 10px 10px 0px 10px;\" class=\"about_bot\">\n            <p style=\"text-align: center; \">\n              I am a\n              <span style=\"font-weight: bold;\">Virtual Assistants</span> for\n              <span style=\"font-weight: bold;\">Qlik Sense</span> application with\n              <span style=\"font-weight: bold;\">KPI list</span> and\n              <span style=\"font-weight: bold;\">Custom Query</span> support.\n            </p>\n            <div class=\"panel panel-default\" style=\"margin-bottom: 0px; box-shadow: 1px 1px 8px 2px rgba(144, 144, 144, 0.54);\">\n              <div class=\"panel-heading\">What can i do?</div>\n              <div class=\"panel-body\" style=\"padding: 10px;\">\n                <ul class=\"list-group\" style=\"margin-bottom: 0px;\">\n                  <li class=\"list-group-item\">\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Application Level Access</li>\n                  <li class=\"list-group-item\">\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Voice &#8644; Text</li>\n                  <li class=\"list-group-item\">\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>KPI / Top Queries (Quick access menu)</li>\n                  <li class=\"list-group-item\">\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Custom Queries Search</li>\n                  <li class=\"list-group-item\">\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Mute Audio (Quick access menu)</li>\n                  <li class=\"list-group-item\">\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>Clear Chat(Quick access menu)</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n  <div #scrollMe class=\"chat-outer-wrapper\">\n    <div class=\"chat-wrapper\">\n      <app-login></app-login>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_location, actRoute, storageAndUtilsService, modalService, config, httpService, wsService, loggerService) {
        var _this = this;
        this._location = _location;
        this.actRoute = actRoute;
        this.storageAndUtilsService = storageAndUtilsService;
        this.modalService = modalService;
        this.config = config;
        this.httpService = httpService;
        this.wsService = wsService;
        this.loggerService = loggerService;
        this.showChatBotWrapper = false;
        this.expandFlag = false;
        this.toggleVolumeFlag = true;
        this.toggleMenu = false;
        this.sideMenu = _shared__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].arrSideMenu;
        this.contact = {
            "email": _shared__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].dictAppSettingsMaster.getItem("CONST_CONTACT_EMAIL")
        };
        try {
            console.log("contact", this.contact);
            config.placement = 'bottom-left';
            config.autoClose = false;
            this.sideMenu = _shared__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].arrSideMenu;
            console.log("Inside CTOR this.sideMenu", this.sideMenu);
            this.actRoute.params.subscribe(function (params) {
                _this.showChatBotWrapper = params["openChat"];
            });
        }
        catch (error) {
            this.loggerService.log('error', "[Component] --> [] --> " + JSON.stringify(error));
        }
    }
    HomeComponent.prototype.open = function (content, sideMenuKey) {
        var _this = this;
        if (sideMenuKey == "A") {
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (mailModel) {
                _this.closeResult = "Closed with: " + mailModel;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (sideMenuKey == "MS") {
            this.contact.email = _shared__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].dictAppSettingsMaster.getItem("CONST_CONTACT_EMAIL");
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (mailModel) {
                _this.httpService.post("/sendmail", mailModel).subscribe(function (resMailSent) {
                    console.log("resMailSent", resMailSent);
                });
                _this.closeResult = "Closed with: " + mailModel;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (sideMenuKey == "N") {
            this.httpService.post("/commentsOperations", { opType: 0 }).subscribe(function (d) {
                console.log("DAtaaaaaaa:- ", d);
                _this.comments = d;
            });
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (notificationsModel) {
                _this.closeResult = "Closed with: " + notificationsModel;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    HomeComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HomeComponent.prototype.toggleHamMenu = function () {
        this.toggleMenu = !this.toggleMenu;
        console.log("Hello toggleMenu:- ", this.toggleMenu);
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.scrollToBottom();
    };
    HomeComponent.prototype.CloseChatBotWrapper = function () {
        this.wsService.closeWebSocket();
        this.showChatBotWrapper = false;
        this._location.back();
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    HomeComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            this.loggerService.log('error', "[HomeComponent] --> [scrollToBottom()] --> " + JSON.stringify(err));
        }
    };
    HomeComponent.prototype.sendContext = function (type) {
        try {
            this.storageAndUtilsService.sendClearChat({ type: type });
        }
        catch (error) {
            this.loggerService.log('error', "[HomeComponent] --> [clearChat()] --> " + JSON.stringify(error));
        }
    };
    HomeComponent.prototype.openDialog = function () {
        console.log("Email Dialog Opened");
    };
    HomeComponent.prototype.toggleExpand = function () {
        this.expandFlag = !this.expandFlag;
        // console.log(this.expandFlag);
        if (this.expandFlag) {
            this.chatWindow.nativeElement.classList.remove("collapseChatWindow");
            this.chatWindow.nativeElement.classList.add("expandChatWindow");
        }
        else {
            this.chatWindow.nativeElement.classList.add("collapseChatWindow");
            this.chatWindow.nativeElement.classList.remove("expandChatWindow");
        }
    };
    HomeComponent.prototype.toggleVolume = function () {
        this.toggleVolumeFlag = !this.toggleVolumeFlag;
        _shared__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].volumeFlag = this.toggleVolumeFlag;
    };
    HomeComponent.prototype.dropDownOpen = function (e) {
        this.sideMenu = _shared__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].arrSideMenu;
    };
    HomeComponent.prototype.sideMenuClicked = function (sm, content) {
        var menuKey = sm.menuKey;
        console.log(menuKey);
        switch (menuKey) {
            case ("KPI"):
                this.sendContext("KPI");
                break;
            case ("TQ"):
                break;
            case ("MA"):
                this.toggleVolume();
                break;
            case ("DG"):
                break;
            case ("SB"):
                break;
            case ("LB"):
                break;
            case ("DB"):
                break;
            case ("CC"):
                this.sendContext("CC");
                break;
            case ("MS"):
                this.open(content, "MS");
                break;
            case ("FS"):
                this.toggleExpand();
                break;
            case ("H"):
                break;
            case ("LO"):
                this.CloseChatBotWrapper();
                break;
            case ("N"):
                this.sendContext("N");
                this.open(content, "N");
                break;
            case ("A"):
                this.sendContext("A");
                this.open(content, "A");
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "myScrollContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatWindow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "chatWindow", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["StorageAndUtilsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #loginHandle>\n  <div *ngIf=\"showLogin\">\n    <div class=\"login\">\n      <div class=\"login-container\">\n        <div class=\"login_text\">LOGIN</div>\n        <br>\n        <form id=\"login_form\" name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\n          <div class=\"form-group\">\n\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n\n              <input placeholder=\"User Name\" type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"userModel.username\" #username=\"ngModel\"\n                required />\n              <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">* Username is required</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\n              <input placeholder=\"Password\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"userModel.password\" #password=\"ngModel\"\n                required />\n              <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">* Password is required</div>\n            </div>\n\n          <label>\n            <input class=\"rememberme\" type=\"checkbox\" name=\"rememberMe\" [(ngModel)]=\"userModel.rememberMe\" #rememberMe=\"ngModel\"> Remember Me\n          </label>\n\n            <input class=\"form-control\" type=\"submit\" value=\"Login\">\n\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"showConverSation\">\n    <app-conversation [loggedInUser]=\"loginInfo\"></app-conversation>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(storageService, httpService, loggerService, router) {
        this.storageService = storageService;
        this.httpService = httpService;
        this.loggerService = loggerService;
        this.router = router;
        this.showLogin = true;
        this.showConverSation = false;
        this.userModel = {};
        this.loginInfo = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        try {
            this.showLogin = true;
            this.showConverSation = false;
            var storedData = JSON.parse(this.storageService.getUserData("jUserData"));
            sessionStorage.setItem("username", JSON.parse(localStorage.getItem("jUserData")).username);
            if (storedData != null) {
                console.log("Stored Data");
                this.userModel.username = storedData.username;
                this.userModel.password = storedData.password;
                this.userModel.rememberMe = storedData.rememberMe;
            }
        }
        catch (error) {
            this.loggerService.log('error', "[LoginComponent] --> [ngOnInit()] --> " + JSON.stringify(error));
        }
    };
    LoginComponent.prototype.ngOnChanges = function (change) {
        if (change != null) {
            console.log("In Login OnChanges", change);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        try {
            if (this.userModel.rememberMe == true)
                this.storageService.saveUserdata("jUserData", this.userModel);
            // this.httpService.authenticateAD(this.userModel.username, this.userModel.password).subscribe((adData: any) => {
            //   console.log("adData:- ", adData);
            // })
            this.httpService.post("/login", {
                "username": this.userModel.username,
                "password": this.userModel.password
            }).subscribe(function (objData) {
                if (objData.ResponseString == 1) {
                    _this.loginInfo = objData.ResponseObject;
                    _this.storageService.saveUserdata("jSession", objData);
                    _this.showLogin = false;
                    _this.showConverSation = true;
                    _this.loginHandle.nativeElement.offsetParent.lastChild.classList.add("shortWrapper");
                }
                else if (objData.ResponseString == 0) {
                    alert("User Dont Have App Level Access...!!");
                }
                else {
                    alert("Error...");
                }
            });
        }
        catch (error) {
            this.loggerService.log('error', "[LoginComponent] --> [login()] --> " + JSON.stringify(error));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginHandle'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "loginHandle", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_2__["StorageAndUtilsService"],
            _shared__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _shared__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messagetime/messagetime.component.css":
/*!*******************************************************!*\
  !*** ./src/app/messagetime/messagetime.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2V0aW1lL21lc3NhZ2V0aW1lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messagetime/messagetime.component.html":
/*!********************************************************!*\
  !*** ./src/app/messagetime/messagetime.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  messagetime works!\n</p>\n"

/***/ }),

/***/ "./src/app/messagetime/messagetime.component.ts":
/*!******************************************************!*\
  !*** ./src/app/messagetime/messagetime.component.ts ***!
  \******************************************************/
/*! exports provided: MessagetimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagetimeComponent", function() { return MessagetimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagetimeComponent = /** @class */ (function () {
    function MessagetimeComponent() {
    }
    MessagetimeComponent.prototype.ngOnInit = function () {
    };
    MessagetimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messagetime',
            template: __webpack_require__(/*! ./messagetime.component.html */ "./src/app/messagetime/messagetime.component.html"),
            styles: [__webpack_require__(/*! ./messagetime.component.css */ "./src/app/messagetime/messagetime.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagetimeComponent);
    return MessagetimeComponent;
}());



/***/ }),

/***/ "./src/app/shared/GlobalConstants.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/GlobalConstants.ts ***!
  \*******************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
/* harmony import */ var _shared_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utilities */ "./src/app/shared/utilities.ts");

var GlobalConstants = /** @class */ (function () {
    function GlobalConstants() {
    }
    GlobalConstants.dictAppSettingsMaster = new _shared_utilities__WEBPACK_IMPORTED_MODULE_0__["Dictonary"]();
    GlobalConstants.arrFirstLevelMenu = [];
    GlobalConstants.arrSecondLevelMenu = [];
    GlobalConstants.arrThirdLevelMenu = [];
    GlobalConstants.arrSelectionConfig = [];
    GlobalConstants.arrSideMenu = [];
    GlobalConstants.selectedVoiceConfiguration = 0;
    GlobalConstants.isMobile = false;
    GlobalConstants.volumeFlag = true;
    return GlobalConstants;
}());



/***/ }),

/***/ "./src/app/shared/doc.ts":
/*!*******************************!*\
  !*** ./src/app/shared/doc.ts ***!
  \*******************************/
/*! exports provided: Doc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doc", function() { return Doc; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/app/shared/index.ts");

var Doc = /** @class */ (function () {
    // public static ws = GlobalConstants.objWss;
    function Doc() {
    }
    Doc.genrateRandom = function () {
        var len = 10;
        var bits = bits || 16;
        var outStr = "", newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr.toUpperCase();
    };
    ;
    //this.genrateRandom()
    Doc.sheetLevelAccess = function () {
        var sheetLevelAccessStep1 = {
            "handle": 1,
            "method": "CreateSessionObject",
            "params": {
                "qProp": {
                    "qInfo": {
                        "qId": "sheetlevelaccess",
                        "qType": "listbox"
                    },
                    "ListObject1": {
                        "qListObjectDef": {
                            "qDef": {
                                "qFieldDefs": [
                                    "ANAME"
                                ],
                                "qFieldLabels": [
                                    "ANAME"
                                ]
                            },
                            "qInitialDataFetch": [{
                                    "qTop": 0,
                                    "qLeft": 0,
                                    "qHeight": 1000,
                                    "qWidth": 1
                                }]
                        }
                    }
                }
            }
        };
        return sheetLevelAccessStep1;
    };
    Doc.getLayout = function () {
        var sheetLevelAccessStep2 = {
            "handle": 2,
            "method": "GetLayout",
            "params": {}
        };
        return sheetLevelAccessStep2;
    };
    Doc.openDoc = function (qDocName, qUserName, qPassword) {
        var openDoc = {
            "handle": -1,
            "method": "OpenDoc",
            "params": {
                "qDocName": qDocName,
                "qUserName": qUserName,
                "qPassword": qPassword,
                "qSerial": "",
                "qNoData": false
            }
        };
        return openDoc;
    };
    Doc.GetField = function (handle, qFieldName) {
        var qFieldSelect = {
            "handle": 1,
            "method": "GetField",
            "params": {
                "qFieldName": "[" + qFieldName + "]"
            }
        };
        return qFieldSelect;
    };
    Doc.Select = function (handle, fieldValue) {
        var selectReq = {
            "handle": ___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].docLevelMethodHandle,
            "method": "Select",
            "params": {
                "qMatch": fieldValue,
                "qSoftLock": false,
                "qExcludedValuesMode": 0
            }
        };
        return selectReq;
    };
    Doc.ClearAll = function () {
        var clearAllReq = {
            "handle": 1,
            "method": "ClearAll",
            "params": {
                "qLockedAlso": false,
                "qStateName": ""
            }
        };
        return clearAllReq;
    };
    Doc.docLevelMethodHandle = 0;
    return Doc;
}());



/***/ }),

/***/ "./src/app/shared/dropdown/dropdown-not-closable-zone.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/dropdown/dropdown-not-closable-zone.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DropdownNotClosableZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownNotClosableZoneDirective", function() { return DropdownNotClosableZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownNotClosableZoneDirective = /** @class */ (function () {
    function DropdownNotClosableZoneDirective(elementRef) {
        this.elementRef = elementRef;
    }
    DropdownNotClosableZoneDirective.prototype.contains = function (element) {
        if (this.dropdownNotClosabledZone === false)
            return false;
        var thisElement = this.elementRef.nativeElement;
        return thisElement.contains(element);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropdown-not-closable-zone"),
        __metadata("design:type", Boolean)
    ], DropdownNotClosableZoneDirective.prototype, "dropdownNotClosabledZone", void 0);
    DropdownNotClosableZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropdown-not-closable-zone]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownNotClosableZoneDirective);
    return DropdownNotClosableZoneDirective;
}());



/***/ }),

/***/ "./src/app/shared/dropdown/dropdown-open.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/dropdown/dropdown-open.directive.ts ***!
  \************************************************************/
/*! exports provided: DropdownOpenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownOpenDirective", function() { return DropdownOpenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/dropdown/dropdown.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownOpenDirective = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function DropdownOpenDirective(dropdown, elementRef) {
        this.dropdown = dropdown;
        this.elementRef = elementRef;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        /**
         * This hack is needed for dropdown not to open and instantly closed
         */
        this.openedByFocus = false;
        var _this = this;
        this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event) {
            _this.closeIfInClosableZone(event);
        };
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    DropdownOpenDirective.prototype.toggle = function () {
        if (this.dropdown.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownOpenDirective.prototype.open = function () {
        if (this.dropdown.isOpened())
            return;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownOpenDirective.prototype.close = function () {
        if (!this.dropdown.isOpened())
            return;
        this.dropdown.close();
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownOpenDirective.prototype.openDropdown = function () {
        if (this.dropdown.activateOnFocus && this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownOpenDirective.prototype.dropdownKeydown = function (event) {
        if (event.keyCode === 40) { // down
            this.openDropdown();
        }
    };
    DropdownOpenDirective.prototype.onFocus = function () {
        if (!this.dropdown.activateOnFocus)
            return;
        this.openedByFocus = true;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownOpenDirective.prototype.onBlur = function (event) {
        if (!this.dropdown.activateOnFocus)
            return;
        if (event.relatedTarget &&
            !this.dropdown.isInClosableZone(event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    };
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    DropdownOpenDirective.prototype.ngOnDestroy = function () {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    DropdownOpenDirective.prototype.closeIfInClosableZone = function (event) {
        if (!this.dropdown.isInClosableZone(event.target)
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownOpenDirective.prototype, "openDropdown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DropdownOpenDirective.prototype, "dropdownKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focus"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownOpenDirective.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("blur", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FocusEvent]),
        __metadata("design:returntype", void 0)
    ], DropdownOpenDirective.prototype, "onBlur", null);
    DropdownOpenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[dropdown-open]",
            exportAs: "dropdownOpen"
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()),
        __metadata("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownOpenDirective);
    return DropdownOpenDirective;
}());



/***/ }),

/***/ "./src/app/shared/dropdown/dropdown.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/dropdown/dropdown.directive.ts ***!
  \*******************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-not-closable-zone.directive */ "./src/app/shared/dropdown/dropdown-not-closable-zone.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownDirective = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function DropdownDirective(elementRef) {
        this.elementRef = elementRef;
        // -------------------------------------------------------------------------
        // Inputs / Outputs
        // -------------------------------------------------------------------------
        this.toggleClick = true;
        this.activateOnFocus = false;
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    DropdownDirective.prototype.open = function () {
        var element = this.elementRef.nativeElement;
        element.classList.add("open");
        this.onOpen.emit(element);
    };
    DropdownDirective.prototype.close = function () {
        var element = this.elementRef.nativeElement;
        element.classList.remove("open");
        this.onClose.emit(undefined);
    };
    DropdownDirective.prototype.isOpened = function () {
        var element = this.elementRef.nativeElement;
        return element.classList.contains("open");
    };
    DropdownDirective.prototype.isInClosableZone = function (element) {
        if (!this.notClosableZone)
            return false;
        return this.notClosableZone.contains(element);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropdownToggle"),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "toggleClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropdownFocusActivate"),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "activateOnFocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownNotClosableZoneDirective"]),
        __metadata("design:type", _dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownNotClosableZoneDirective"])
    ], DropdownDirective.prototype, "notClosableZone", void 0);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[dropdown]",
            exportAs: "dropdown"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/http.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http, utilsService) {
        this.http = http;
        this.utilsService = utilsService;
        this.baseUrl = "";
    }
    HttpService.prototype.authenticateAD = function (username, password) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("content-type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var enc = this.utilsService.encryptWithAES("214333", "m&mprd@60");
        return this.http.post(___WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_AD_LOGIN"), {
            "tokenid": enc
        }, options);
    };
    HttpService.prototype.httpGet = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.httpPost = function (url, body) {
        return this.http.post(url, body);
    };
    HttpService.prototype.get = function (url) {
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Get);
    };
    HttpService.prototype.post = function (url, body) {
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post, body);
    };
    HttpService.prototype.put = function (url, body) {
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Put, body);
    };
    HttpService.prototype.delete = function (url) {
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Delete);
    };
    HttpService.prototype.request = function (url, method, body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            url: ___WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_BACKEND_SERVICE") + ("" + url),
            method: method,
            headers: headers
        });
        if (body) {
            requestOptions.body = body;
        }
        var request = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"](requestOptions);
        return this.http.request(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], ___WEBPACK_IMPORTED_MODULE_3__["StorageAndUtilsService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: StorageAndUtilsService, HttpService, LoggerService, WebsocketService, NlpService, SpeechRecognitionService, SafebrowsePipe, GlobalConstants, Dictonary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storageAndUtils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageAndUtils.service */ "./src/app/shared/storageAndUtils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageAndUtilsService", function() { return _storageAndUtils_service__WEBPACK_IMPORTED_MODULE_0__["StorageAndUtilsService"]; });

/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/shared/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.service */ "./src/app/shared/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]; });

/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket.service */ "./src/app/shared/websocket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]; });

/* harmony import */ var _nlp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nlp.service */ "./src/app/shared/nlp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NlpService", function() { return _nlp_service__WEBPACK_IMPORTED_MODULE_4__["NlpService"]; });

/* harmony import */ var _speech_recognition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speech-recognition.service */ "./src/app/shared/speech-recognition.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return _speech_recognition_service__WEBPACK_IMPORTED_MODULE_5__["SpeechRecognitionService"]; });

/* harmony import */ var _safebrowse_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./safebrowse.pipe */ "./src/app/shared/safebrowse.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafebrowsePipe", function() { return _safebrowse_pipe__WEBPACK_IMPORTED_MODULE_6__["SafebrowsePipe"]; });

/* harmony import */ var _GlobalConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GlobalConstants */ "./src/app/shared/GlobalConstants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return _GlobalConstants__WEBPACK_IMPORTED_MODULE_7__["GlobalConstants"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities */ "./src/app/shared/utilities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dictonary", function() { return _utilities__WEBPACK_IMPORTED_MODULE_8__["Dictonary"]; });












/***/ }),

/***/ "./src/app/shared/logger.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/logger.service.ts ***!
  \******************************************/
/*! exports provided: isDebugMode, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDebugMode", function() { return isDebugMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var isDebugMode = false; //environment.isDebugMode;
var noop = function () { return undefined; };
var LoggerService = /** @class */ (function () {
    function LoggerService(httpService) {
        this.httpService = httpService;
    }
    Object.defineProperty(LoggerService.prototype, "info", {
        get: function () {
            if (isDebugMode) {
                return console.info.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerService.prototype, "warn", {
        get: function () {
            if (isDebugMode) {
                return console.warn.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerService.prototype, "error", {
        get: function () {
            if (isDebugMode) {
                return console.error.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    LoggerService.prototype.log = function (type, args) {
        if (isDebugMode) {
            var logFn = (console)[type] || console.log || noop;
            logFn.apply(console, [args]);
        }
        else {
            // if (type =='error') {
            this.httpService.post("/pushToServerLog", { "type": type, "logBody": args });
            // }
        }
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/shared/nlp.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/nlp.service.ts ***!
  \***************************************/
/*! exports provided: NlpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlpService", function() { return NlpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storageAndUtils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAndUtils.service */ "./src/app/shared/storageAndUtils.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/shared/http.service.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NlpService = /** @class */ (function () {
    function NlpService(storageAndUtilsService, httpService) {
        this.storageAndUtilsService = storageAndUtilsService;
        this.httpService = httpService;
    }
    NlpService.prototype.nlpRequest = function (body) {
        return this.httpService.httpPost(___WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].dictAppSettingsMaster.getItem("URL_NLP_SERVICE") + "/objectname", body);
    };
    NlpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_storageAndUtils_service__WEBPACK_IMPORTED_MODULE_1__["StorageAndUtilsService"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NlpService);
    return NlpService;
}());



/***/ }),

/***/ "./src/app/shared/safebrowse.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/safebrowse.pipe.ts ***!
  \*******************************************/
/*! exports provided: SafebrowsePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafebrowsePipe", function() { return SafebrowsePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafebrowsePipe = /** @class */ (function () {
    function SafebrowsePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafebrowsePipe.prototype.transform = function (url, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafebrowsePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safebrowse'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafebrowsePipe);
    return SafebrowsePipe;
}());



/***/ }),

/***/ "./src/app/shared/speech-recognition.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/speech-recognition.service.ts ***!
  \******************************************************/
/*! exports provided: SpeechRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return SpeechRecognitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeechRecognitionService = /** @class */ (function () {
    function SpeechRecognitionService(zone) {
        var _this = this;
        this.zone = zone;
        this.SpeechSynthesisUtterance = window;
        this.speechSynthesis = window;
        window.speechSynthesis.onvoiceschanged = function (e) {
            var voices = window.speechSynthesis.getVoices();
            _this.voice = voices.filter(function (voice) {
                return voice.name == ___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].voices[___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].selectedVoiceConfiguration].name;
            })[0];
        };
    }
    SpeechRecognitionService.prototype.stopSpeaking = function () {
        speechSynthesis.cancel();
    };
    SpeechRecognitionService.prototype.speak = function (voiceMsg) {
        var msg = new SpeechSynthesisUtterance(voiceMsg);
        msg.lang = ___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].voices[___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].selectedVoiceConfiguration].lang;
        msg.voice = this.voice;
        if (___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].volumeFlag) {
            window.speechSynthesis.speak(msg);
        }
    };
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            _this.speechRecognition.continuous = true;
            //this.speechRecognition.interimResults = true;
            _this.speechRecognition.lang = ___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].voices[___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].selectedVoiceConfiguration].lang;
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                var term = "";
                if (speech.results) {
                    console.log(speech);
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = lodash__WEBPACK_IMPORTED_MODULE_3__["trim"](transcript);
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log("Listening Started");
        });
    };
    SpeechRecognitionService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    };
    SpeechRecognitionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
}());



/***/ }),

/***/ "./src/app/shared/storageAndUtils.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/storageAndUtils.service.ts ***!
  \***************************************************/
/*! exports provided: StorageAndUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageAndUtilsService", function() { return StorageAndUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageAndUtilsService = /** @class */ (function () {
    function StorageAndUtilsService() {
        this.clearChatFlag = false;
        this.clearChatFlagChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    StorageAndUtilsService.prototype.encryptWithAES = function (username, password) {
        var toBeEncryptedStr = "usr=" + username + "===pwd=" + password;
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(___WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].dictAppSettingsMaster.getItem("CONST_AES_KEY"));
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(___WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].dictAppSettingsMaster.getItem("CONST_AES_IV"));
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(toBeEncryptedStr), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
        });
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(encrypted, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
        });
        console.log('utf8 = ' + decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8));
        console.log('Encrypted  = ' + encrypted);
        return encrypted.toString();
    };
    StorageAndUtilsService.prototype.getUserData = function (key) {
        if (localStorage.getItem(key) == null) {
            return null;
        }
        else {
            return localStorage.getItem(key);
        }
    };
    StorageAndUtilsService.prototype.saveUserdata = function (key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    };
    StorageAndUtilsService.prototype.clearUserData = function () {
        localStorage.clear();
    };
    StorageAndUtilsService.prototype.getCurrentTime = function () {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        var hr = hours % 12;
        hr = hr ? hr : 12;
        var min = minutes < 10 ? '0' + minutes : minutes;
        var sec = seconds < 10 ? '0' + seconds : seconds;
        var strTime = hr + ':' + min + ':' + sec + ' ' + ampm;
        return strTime;
    };
    StorageAndUtilsService.prototype.genrateSessionId = function () {
        var bits = 36;
        var len = 16;
        var outStr = "", newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr.toUpperCase();
    };
    StorageAndUtilsService.prototype.getGreeting = function () {
        var hour = new Date().getHours();
        if (hour >= 6 && hour < 12) {
            return 'Good Morning';
        }
        else if (hour > +12 && hour < 18) {
            return 'Good Afternoon';
        }
        else {
            return 'Good Evening';
        }
    };
    StorageAndUtilsService.prototype.getClearChat = function () {
        return this.subject.asObservable();
    };
    StorageAndUtilsService.prototype.sendClearChat = function (shortType) {
        this.subject.next(shortType);
    };
    StorageAndUtilsService.prototype.getContext = function () {
        return this.subject.asObservable();
    };
    StorageAndUtilsService.prototype.sendContext = function (data) {
        this.subject.next(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StorageAndUtilsService.prototype, "clearChatFlagChange", void 0);
    StorageAndUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageAndUtilsService);
    return StorageAndUtilsService;
}());



/***/ }),

/***/ "./src/app/shared/utilities.ts":
/*!*************************************!*\
  !*** ./src/app/shared/utilities.ts ***!
  \*************************************/
/*! exports provided: Dictonary, getAlphaMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictonary", function() { return Dictonary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlphaMonth", function() { return getAlphaMonth; });
var Dictonary = /** @class */ (function () {
    function Dictonary() {
        this.length = 0;
    }
    Dictonary.prototype.count = function () {
        return this.length;
    };
    Dictonary.prototype.setItems = function (obj) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                this[p] = obj[p];
                this.length++;
            }
        }
    };
    Dictonary.prototype.add = function (key, value) {
        var previous = undefined;
        if (this.containsKey(key)) {
            previous = this[key];
        }
        else {
            this.length++;
        }
        this[key] = value;
    };
    Dictonary.prototype.remove = function (key) {
        var val = this[key];
        delete this[key];
        this.length--;
        return val;
    };
    Dictonary.prototype.containsKey = function (key) {
        return this.hasOwnProperty(key);
    };
    Dictonary.prototype.getItem = function (key) {
        return this.containsKey(key) ? this[key] : undefined;
    };
    Dictonary.prototype.keys = function () {
        var keySet = [];
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    Dictonary.prototype.each = function (fn) {
        for (var k in this) {
            if (this.containsKey(k)) {
                fn(k, this[k]);
            }
        }
    };
    Dictonary.prototype.clear = function () {
        //this = {}
        this.length = 0;
    };
    return Dictonary;
}());

function getAlphaMonth(sMonth) {
    try {
        var sRetval = '';
        switch (sMonth) {
            case 0:
                sRetval = 'JAN';
                break;
            case 1:
                sRetval = 'FEB';
                break;
            case 2:
                sRetval = 'MAR';
                break;
            case 3:
                sRetval = 'APR';
                break;
            case 4:
                sRetval = 'MAY';
                break;
            case 5:
                sRetval = 'JUN';
                break;
            case 6:
                sRetval = 'JUL';
                break;
            case 7:
                sRetval = 'AUG';
                break;
            case 8:
                sRetval = 'SEP';
                break;
            case 9:
                sRetval = 'OCT';
                break;
            case 10:
                sRetval = 'NOV';
                break;
            case 11:
                sRetval = 'DEC';
                break;
        }
        return sRetval;
    }
    catch (e) {
    }
}


/***/ }),

/***/ "./src/app/shared/websocket.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/websocket.service.ts ***!
  \*********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc */ "./src/app/shared/doc.ts");
/* harmony import */ var _GlobalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalConstants */ "./src/app/shared/GlobalConstants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this.ws = {};
    }
    WebsocketService.prototype.initiateWebSocketComm = function () {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            setTimeout(function () {
                _this.ws = new WebSocket(_GlobalConstants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].dictAppSettingsMaster.getItem('URL_QLIKENGINE_WEBSOCKET'));
                _this.ws.onopen = function () {
                    console.log("opening web socket");
                };
                _this.ws.onclose = function () {
                    console.log("Closed Websocket");
                };
                _this.ws.onerror = function (err) {
                    console.log("Error on websocket", JSON.stringify(err));
                };
                setTimeout(function () {
                    var openDoc = _doc__WEBPACK_IMPORTED_MODULE_2__["Doc"].openDoc(_GlobalConstants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].dictAppSettingsMaster.getItem('APPID'), "", "");
                    try {
                        console.log("WebSocket State:- " + _this.ws.readyState);
                        _this.ws.send(JSON.stringify(openDoc));
                        if (_this.ws.readyState == 1) { // Checking Sheet Level Access
                            _this.getAuthenticatedUSer();
                        }
                    }
                    catch (error) {
                        console.log("Error In sending Data on WebSocket");
                    }
                    _this.ws.onmessage = function (evt) {
                        // var d = JSON.parse(evt.data);
                        // console.log("WS Response:- ", d);
                        // if (evt.returnValue && d.result != null && d.result["qReturn"] != null && d.result["qReturn"]["qHandle"] != null) {
                        //   GlobalConstants.docLevelMethodHandle = d.result["qReturn"]["qHandle"];
                        //   console.log("Handle Retured By Qlik:- ", d.result["qReturn"]["qHandle"]);
                        // } else if (d["result"] != null && d.result["qLayout"] != null && d.result.qLayout["ListObject1"]) {
                        //   var allAllowedSheets = d.result.qLayout.ListObject1.qListObject.qDataPages[0].qMatrix;
                        //   var allAllowedSheetNames = [];
                        //   for (let i = 0; i < allAllowedSheets.length; i++) {
                        //     for (let j = 0; j < allAllowedSheets[i].length; j++) {
                        //       allAllowedSheetNames.push(allAllowedSheets[i][j].qText);
                        //     }
                        //   }
                        //   var masterSheets = [];
                        //   var filtered = [];
                        //   var keys = Object.keys(environment.landingPageLinks);
                        //   var finalMenu = {};
                        //   for (let i = 0; i < keys.length; i++) {
                        //     if (environment.landingPageLinks[keys[i]].sheetName == "")
                        //       filtered.push(environment.landingPageLinks[keys[i]]);
                        //     else
                        //       masterSheets.push(environment.landingPageLinks[keys[i]].sheetName);
                        //   }
                        //   masterSheets = masterSheets.filter(x => x != "");
                        //   masterSheets = masterSheets.map(function (x) { return x.toUpperCase() })
                        //   var matchedSheetaNames = masterSheets.filter(x => allAllowedSheetNames.includes(x));
                        //   console.log(allAllowedSheetNames);
                        //   for (let j = 0; j < matchedSheetaNames.length; j++) {
                        //     for (let k = 0; k < keys.length; k++) {
                        //       if (environment.landingPageLinks[keys[k]].sheetName.toUpperCase() == matchedSheetaNames[j]) {
                        //         filtered.push(environment.landingPageLinks[keys[k]]);
                        //       }
                        //     }
                        //   }
                        //   filtered = filtered.sort(function (a, b) { return a.nSequence - b.nSequence });
                        //   for (let j = 0; j < filtered.length; j++) {
                        //     filtered[j]["isActive"] = 1;
                        //     finalMenu[filtered[j].name.toLowerCase().replace(/ /g, '')] = filtered[j];
                        //   }
                        //   environment.landingPageLinks = finalMenu;
                        //   console.log("finalMenu:- ", finalMenu);
                        //   localStorage.setItem("allAllowedSheetNames", JSON.stringify(allAllowedSheetNames));
                        //   observer.next(finalMenu);
                        // }
                    };
                }, 3000);
            }, 2000);
        });
    };
    WebsocketService.prototype.closeWebSocket = function () {
        if (this.ws.readyState === WebSocket.OPEN) {
            console.log("closing opened websocket");
            this.ws.close();
        }
    };
    WebsocketService.prototype.secondLevelDocOpration = function (methodName, request) {
        this.ws.send(JSON.stringify(request));
    };
    WebsocketService.prototype.timer = function (ms) {
        return new Promise(function (res) { return setTimeout(res, ms); });
    };
    WebsocketService.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < _GlobalConstants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].arrSelectionConfig.length)) return [3 /*break*/, 5];
                        this.secondLevelDocOpration("GetField", _doc__WEBPACK_IMPORTED_MODULE_2__["Doc"].GetField('', _GlobalConstants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].arrSelectionConfig[i].fieldName));
                        return [4 /*yield*/, this.timer(1000)];
                    case 2:
                        _a.sent();
                        this.secondLevelDocOpration("Select", _doc__WEBPACK_IMPORTED_MODULE_2__["Doc"].Select(_GlobalConstants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].docLevelMethodHandle, _GlobalConstants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].arrSelectionConfig[i].fieldValue));
                        return [4 /*yield*/, this.timer(500)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    WebsocketService.prototype.getAuthenticatedUSer = function () {
        var _this = this;
        setTimeout(function () {
            _this.ws.send(JSON.stringify(_doc__WEBPACK_IMPORTED_MODULE_2__["Doc"].sheetLevelAccess()));
        }, 2000);
        setTimeout(function () {
            _this.ws.send(JSON.stringify(_doc__WEBPACK_IMPORTED_MODULE_2__["Doc"].getLayout()));
        }, 2000);
        setTimeout(function () {
            _this.load();
        }, 2000);
    };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/star/star.component.css":
/*!*****************************************!*\
  !*** ./src/app/star/star.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.rating {\n    float:left;\n}\n\n.rating:not(:checked) > input {\n    position:absolute;\n    top:-9999px;\n    clip:rect(0,0,0,0);\n}\n\n.rating:not(:checked) > label {\n    float:right;\n    width:1em;\n    padding:0.1em;\n    overflow:hidden;\n    white-space:nowrap;\n    cursor:pointer;\n    font-size:100%;\n    line-height:0.5;\n    color:#ddd;\n}\n\n.rating:not(:checked) > label:before {\n    content: '★ ';\n}\n\n.rating > input:checked ~ label {\n    color: #f70;\n}\n\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n    color: gold;\n}\n\n.rating > input:checked ~ label:hover,\n.rating > input:checked ~ label:hover ~ label,\n.rating > label:hover ~ input:checked ~ label {\n    color: #ea0;\n}\n\n.ratingValue {\n    font-size: 10px;\n    display: inline-block;\n    position: relative;\n    top: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rhci9zdGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksWUFBWTtDQUNmOztBQUdEOzs7SUFHSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zdGFyL3N0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJhdGluZyB7XG4gICAgZmxvYXQ6bGVmdDtcbn1cblxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gaW5wdXQge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDotOTk5OXB4O1xuICAgIGNsaXA6cmVjdCgwLDAsMCwwKTtcbn1cblxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWwge1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIHdpZHRoOjFlbTtcbiAgICBwYWRkaW5nOjAuMWVtO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgZm9udC1zaXplOjEwMCU7XG4gICAgbGluZS1oZWlnaHQ6MC41O1xuICAgIGNvbG9yOiNkZGQ7XG59XG5cbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogJ+KYhSAnO1xufVxuXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgICBjb2xvcjogI2Y3MDtcbn1cblxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcbiAgICBjb2xvcjogZ29sZDtcbn1cblxuXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxuLnJhdGluZyA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgICBjb2xvcjogI2VhMDtcbn1cblxuLnJhdGluZ1ZhbHVlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC04cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/star/star.component.html":
/*!******************************************!*\
  !*** ./src/app/star/star.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <td>\n      <fieldset class=\"rating\">\n        <input type=\"radio\" [name]=\"inputName\" value=\"3\" [checked]=\"rating===3\" />\n        <label title=\"Meh\" (click)='onClick(3,content)'>3 stars</label>\n\n        <input type=\"radio\" [name]=\"inputName\" value=\"2\" [checked]=\"rating===2\" />\n        <label title=\"Kinda bad\" (click)='onClick(2,content)'>2 stars</label>\n\n        <input type=\"radio\" [name]=\"inputName\" value=\"1\" [checked]=\"rating===1\" />\n        <label title=\"Sucks big time\" (click)='onClick(1,content)'>1 star</label>\n      </fieldset>\n    </td>\n  </tr>\n</table>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h3 style=\"margin-bottom: 0px; text-align: center; width: 100%;\">Suggetion For Rating</h3>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"container\">\n\n      <div class=\"form-area\">\n        <form role=\"form\">\n        \n          <div class=\"form-group\">\n            <textarea class=\"form-control\" type=\"textarea\" id=\"message\" name=\"message\" placeholder=\"Message\" [(ngModel)]=\"ratingModel.message\"\n              maxlength=\"140\" rows=\"7\"></textarea>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"modal.close(ratingModel)\">Submit</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/star/star.component.ts":
/*!****************************************!*\
  !*** ./src/app/star/star.component.ts ***!
  \****************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_storageAndUtils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/storageAndUtils.service */ "./src/app/shared/storageAndUtils.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StarComponent = /** @class */ (function () {
    function StarComponent(storageAndUtilsService, modalService) {
        this.storageAndUtilsService = storageAndUtilsService;
        this.modalService = modalService;
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ratingModel = { message: "" };
        storageAndUtilsService.getContext().subscribe(function (d) {
            // if (d.type == "sendRating") {
            //   console.log(d);
            // }
        });
    }
    StarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    StarComponent.prototype.ngOnInit = function () {
        this.inputName = '_rating';
        this.rating = 0;
    };
    StarComponent.prototype.onClick = function (rating, content) {
        var _this = this;
        this.rating = rating;
        if (rating < 3) {
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (mailModel) {
                _this.closeResult = mailModel.message; // this.ratingModel.message ;
                console.log(_this.closeResult);
                _this.ratingClick.emit({
                    rating: rating
                });
                _this.storageAndUtilsService.sendContext({
                    type: "sendRating", rating: rating, data: _this.ratingContext, reason: _this.closeResult
                });
            }, function (reason) {
                console.log(reason);
            });
        }
    };
    StarComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
        this.ratingContext = change.selectedData.currentValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarComponent.prototype, "ratingClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarComponent.prototype, "selectedData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StarComponent.prototype, "content", void 0);
    StarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/star/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/star/star.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]]
        }),
        __metadata("design:paramtypes", [_shared_storageAndUtils_service__WEBPACK_IMPORTED_MODULE_1__["StorageAndUtilsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], StarComponent);
    return StarComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\client_workspace\Mahindra\Qliksense-chatbot-production\Arch-2\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map