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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-load.service */ "./src/app/app-load/app-load.service.ts");




function init_app(appLoadService) {
    return function () { return appLoadService.initializeApp(); };
}
function get_settings(appLoadService) {
    return function () { return appLoadService.getSettings(); };
}
var AppLoadModule = /** @class */ (function () {
    function AppLoadModule() {
    }
    AppLoadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [
                _app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: init_app, deps: [_app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"]], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: get_settings, deps: [_app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"]], multi: true }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings */ "./src/app/settings/index.ts");





var AppLoadService = /** @class */ (function () {
    function AppLoadService(httpClient) {
        this.httpClient = httpClient;
    }
    AppLoadService.prototype.initializeApp = function () {
        return new Promise(function (resolve, reject) {
            console.log("initializeApp:: inside promise");
            setTimeout(function () {
                console.log("initializeApp:: inside setTimeout");
                // doing something
                resolve();
            }, 1000);
        });
    };
    AppLoadService.prototype.getSettings = function () {
        console.log("getSettings:: before http.get call");
        var promise = this.httpClient.get('assets/appconfig.json')
            .toPromise()
            .then(function (settings) {
            console.log("Settings from API: ", settings);
            _settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl = settings.serviceUrl;
            _settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].singleConfiguratorUrl = settings.singleConfiguratorUrl;
            console.log("APP_SETTINGS: ", _settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"]);
            return settings;
        });
        return promise;
    };
    AppLoadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppLoadService);
    return AppLoadService;
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

module.exports = "<app-layout>\n\n    <div *ngIf=\"!showAccordian\" class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"loginPanel\">\n                <h2>Admin Login</h2>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username</label>\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\n                        />\n                        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                        />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button  class=\"btn btn-primary\">Login</button>\n                        <!-- <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a> -->\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"showAccordian\">\n        <p-accordion>\n            <p-accordionTab header=\"Step 1: App Level Constants\">\n                <p-panel header=\"Description\">\n                    <app-config-master [role]=\"role\"></app-config-master>\n                </p-panel>\n            </p-accordionTab>\n\n            <p-accordionTab header=\"Step 2: Define Menu\">\n                <p-panel header=\"Description\">\n                    <app-menu-master [role]=\"role\"></app-menu-master>\n                </p-panel>\n            </p-accordionTab>\n\n            <!-- <p-accordionTab header=\"Step 3: Default Selections\">\n                <p-panel header=\"Description\">\n                    <app-default-selection [role]=\"role\"></app-default-selection>\n                </p-panel>\n            </p-accordionTab> -->\n            <p-accordionTab header=\"Step 3: Server Config\">\n                <p-panel header=\"Description\">\n                    <app-server-config [role]=\"role\"></app-server-config>\n                </p-panel>\n            </p-accordionTab>\n\n            <p-accordionTab header=\"Step 3: Side Menu\">\n                <p-panel header=\"Description\">\n                    <app-sidemenu [role]=\"role\"></app-sidemenu>\n                </p-panel>\n            </p-accordionTab>\n        </p-accordion>\n    </div>\n</app-layout>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder, sharedService, router) {
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.showAccordian = false;
    }
    Object.defineProperty(AppComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.showAccordian = false;
        this.loginForm = this.formBuilder.group({
            username: ['talele', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['mahindra@123', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.loginForm);
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.sharedService.post('/loginForAdminPanel', {
                "username": this.loginForm.value.username,
                "password": this.loginForm.value.password,
            }).subscribe(function (d) {
                console.log(d);
                if (d.ResponseString == 1) {
                    console.log("User Logged in Sucessfully");
                    sessionStorage.setItem("userDetails", JSON.stringify(d.ResponseObject[0]));
                    _this.role = d.ResponseObject[0].role;
                    _this.showAccordian = true;
                }
                else {
                    alert("Kindly Check your Credentials");
                }
            });
        }
        // if(this.loginForm.value.username=="admin" && this.loginForm.value.password=="admin") {
        //     console.log("Login Sucessful");
        //     this.showAccordian = true;
        // }
        this.loading = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _app_load_app_load_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-load/app-load.module */ "./src/app/app-load/app-load.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _config_master_config_master_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./config-master/config-master.component */ "./src/app/config-master/config-master.component.ts");
/* harmony import */ var _menu_master_menu_master_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu-master/menu-master.component */ "./src/app/menu-master/menu-master.component.ts");
/* harmony import */ var _default_selection_default_selection_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./default-selection/default-selection.component */ "./src/app/default-selection/default-selection.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _server_config_server_config_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./server-config/server-config.component */ "./src/app/server-config/server-config.component.ts");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/sidemenu/sidemenu.component.ts");



























var appRoutes = [
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _config_master_config_master_component__WEBPACK_IMPORTED_MODULE_18__["ConfigMasterComponent"],
                _menu_master_menu_master_component__WEBPACK_IMPORTED_MODULE_19__["MenuMasterComponent"],
                _default_selection_default_selection_component__WEBPACK_IMPORTED_MODULE_20__["DefaultSelectionComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__["LayoutComponent"],
                _server_config_server_config_component__WEBPACK_IMPORTED_MODULE_24__["ServerConfigComponent"],
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_25__["SidemenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_load_app_load_module__WEBPACK_IMPORTED_MODULE_3__["AppLoadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_15__["PanelModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_shared_service__WEBPACK_IMPORTED_MODULE_17__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config-master/config-master.component.css":
/*!***********************************************************!*\
  !*** ./src/app/config-master/config-master.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy1tYXN0ZXIvY29uZmlnLW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/config-master/config-master.component.html":
/*!************************************************************!*\
  !*** ./src/app/config-master/config-master.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"App Config Details\" [(visible)]=\"displayDialogForAppconfig\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n  [closable]=\"true\" [width]=\"700\">\n  <div class=\"ui-g ui-fluid\" *ngIf=\"selectedAppConfigRow\">\n\n    <div class=\"ui-g-2\">\n      <label for=\"Key\">Key</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" id=\"key\" [disabled]=\"'true'\" [(ngModel)]=\"selectedAppConfigRow.key\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"Value\">Value</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" id=\"value\" [(ngModel)]=\"selectedAppConfigRow.value\" />\n    </div>\n\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n      <div *ngIf=\"role=='user'\">\n          <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigCancel()\" label=\"Cancel\"></button>\n      </div>\n\n      <div *ngIf=\"role=='admin'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigDelete()\" label=\"Delete\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"appConfigSave()\" label=\"Save\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigCancel()\" label=\"Cancel\"></button>\n      </div>\n\n    </div>\n  </p-footer>\n</p-dialog>\n\n\n<p-table [columns]=\"appConfigCols\" [value]=\"appConfigRows\" selectionMode=\"single\" [(selection)]=\"selectedAppConfigRow\" (onRowSelect)=\"onRowSelectAppConfig($event)\"\n  [paginator]=\"false\" rows=\"10\">\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{col.header}}\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        {{rowData[col.field]}}\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"summary\" let-rowData>\n    <div style=\"text-align:left\">\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAddAppConfig()\" label=\"Add\"></button>\n    </div>\n  </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/config-master/config-master.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/config-master/config-master.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfigMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMasterComponent", function() { return ConfigMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var ConfigMasterComponent = /** @class */ (function () {
    function ConfigMasterComponent(sharedService) {
        this.sharedService = sharedService;
        this.newAppConfig = false;
    }
    ConfigMasterComponent.prototype.ngOnInit = function () {
        this.appConfigCols = [
            { field: 'key', header: 'Key' },
            { field: 'value', header: 'Value' },
        ];
        this.initialize();
    };
    ConfigMasterComponent.prototype.ngOnChanges = function (change) {
        console.log("Change Received in COnfig Master", this.role);
    };
    ConfigMasterComponent.prototype.initialize = function () {
        var _this = this;
        this.sharedService.getMasterConfig().subscribe(function (config) {
            _this.appConfigRows = config.appLevelConfig.sort(function (a, b) {
                if (a.key < b.key) {
                    return -1;
                }
                if (a.key > b.key) {
                    return 1;
                }
                return 0;
            });
        });
    };
    ConfigMasterComponent.prototype.onRowSelectAppConfig = function (event) {
        this.selectedAppConfigRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event.data);
        this.displayDialogForAppconfig = true;
    };
    ConfigMasterComponent.prototype.showDialogToAddAppConfig = function () {
        this.newAppConfig = true;
        this.selectedAppConfigRow = {};
        this.displayDialogForAppconfig = true;
    };
    ConfigMasterComponent.prototype.appConfigSave = function () {
        if (this.newAppConfig) {
            // direct insert to mongoDb
            this.selectedAppConfigRow["opType"] = 1;
            console.log("To Insert New Document:- ", this.selectedAppConfigRow);
        }
        else {
            // find index and update to mongodb
            this.selectedAppConfigRow["opType"] = 0;
            console.log("To Update Document:- ", this.selectedAppConfigRow);
        }
        this.crudAndRefresh();
        this.displayDialogForAppconfig = false;
    };
    ConfigMasterComponent.prototype.crudAndRefresh = function () {
        var _this = this;
        this.sharedService.saveOrUpdateAppConfig(this.selectedAppConfigRow).subscribe(function (d) {
            _this.initialize();
            console.log(" crudAndRefresh ", d);
        });
    };
    ConfigMasterComponent.prototype.appConfigDelete = function () {
        this.selectedAppConfigRow["opType"] = -1;
        this.crudAndRefresh();
        this.selectedAppConfigRow = null;
        this.displayDialogForAppconfig = false;
        console.log("After Deleting");
    };
    ConfigMasterComponent.prototype.appConfigCancel = function () {
        this.displayDialogForAppconfig = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfigMasterComponent.prototype, "role", void 0);
    ConfigMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-master',
            template: __webpack_require__(/*! ./config-master.component.html */ "./src/app/config-master/config-master.component.html"),
            styles: [__webpack_require__(/*! ./config-master.component.css */ "./src/app/config-master/config-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ConfigMasterComponent);
    return ConfigMasterComponent;
}());



/***/ }),

/***/ "./src/app/default-selection/default-selection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/default-selection/default-selection.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtc2VsZWN0aW9uL2RlZmF1bHQtc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/default-selection/default-selection.component.html":
/*!********************************************************************!*\
  !*** ./src/app/default-selection/default-selection.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"App Config Details\" [(visible)]=\"displayDialogForAppconfig\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n  [closable]=\"true\" [width]=\"700\">\n  <div class=\"ui-g ui-fluid\" *ngIf=\"selectedAppConfigRow\">\n\n    <div class=\"ui-g-2\">\n      <label for=\"Key\">Field Name</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input  pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" id=\"key\"  [disabled]=\"'true'\" [(ngModel)]=\"selectedAppConfigRow.fieldName\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"Value\">Field Value</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" pInputText id=\"value\" [(ngModel)]=\"selectedAppConfigRow.fieldValue\" />\n    </div>\n\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n\n      <div *ngIf=\"role=='user'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigCancel()\" label=\"Cancel\"></button>\n      </div>\n\n      <div *ngIf=\"role=='admin'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigCancel()\" label=\"Cancel\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigDelete()\" label=\"Delete\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"appConfigSave()\" label=\"Save\"></button>\n      </div>\n\n    </div>\n  </p-footer>\n</p-dialog>\n\n\n<p-table [columns]=\"appConfigCols\" [value]=\"appConfigRows\" selectionMode=\"single\" [(selection)]=\"selectedAppConfigRow\" (onRowSelect)=\"onRowSelectAppConfig($event)\"\n  [paginator]=\"false\" rows=\"10\">\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{col.header}}\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        {{rowData[col.field]}}\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"summary\" let-rowData>\n    <div style=\"text-align:left\">\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAddAppConfig()\" label=\"Add\"></button>\n    </div>\n  </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/default-selection/default-selection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/default-selection/default-selection.component.ts ***!
  \******************************************************************/
/*! exports provided: DefaultSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSelectionComponent", function() { return DefaultSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var DefaultSelectionComponent = /** @class */ (function () {
    function DefaultSelectionComponent(sharedService) {
        this.sharedService = sharedService;
        this.newAppConfig = false;
    }
    DefaultSelectionComponent.prototype.ngOnInit = function () {
        this.appConfigCols = [
            { field: 'fieldName', header: 'Field Name' },
            { field: 'fieldValue', header: 'Field Value' },
        ];
        this.initialize();
    };
    DefaultSelectionComponent.prototype.initialize = function () {
        var _this = this;
        this.sharedService.getMasterConfig().subscribe(function (config) {
            _this.appConfigRows = config.selectionConfig;
        });
    };
    DefaultSelectionComponent.prototype.onRowSelectAppConfig = function (event) {
        this.selectedAppConfigRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event.data);
        this.displayDialogForAppconfig = true;
    };
    DefaultSelectionComponent.prototype.showDialogToAddAppConfig = function () {
        this.newAppConfig = true;
        this.selectedAppConfigRow = {};
        this.displayDialogForAppconfig = true;
    };
    DefaultSelectionComponent.prototype.appConfigSave = function () {
        if (this.newAppConfig) {
            // direct insert to mongoDb
            this.selectedAppConfigRow["opType"] = 1;
            console.log("To Insert New Document:- ", this.selectedAppConfigRow);
        }
        else {
            // find index and update to mongodb
            this.selectedAppConfigRow["opType"] = 0;
            console.log("To Update Document:- ", this.selectedAppConfigRow);
        }
        this.crudAndRefresh();
        this.displayDialogForAppconfig = false;
    };
    DefaultSelectionComponent.prototype.crudAndRefresh = function () {
        var _this = this;
        this.sharedService.saveOrUpdateDefaultSelections(this.selectedAppConfigRow).subscribe(function (d) {
            _this.initialize();
            console.log(" crudAndRefresh ", d);
        });
    };
    DefaultSelectionComponent.prototype.appConfigDelete = function () {
        this.selectedAppConfigRow["opType"] = -1;
        this.crudAndRefresh();
        this.selectedAppConfigRow = null;
        this.displayDialogForAppconfig = false;
        console.log("After Deleting");
    };
    DefaultSelectionComponent.prototype.appConfigCancel = function () {
        this.displayDialogForAppconfig = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefaultSelectionComponent.prototype, "role", void 0);
    DefaultSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-selection',
            template: __webpack_require__(/*! ./default-selection.component.html */ "./src/app/default-selection/default-selection.component.html"),
            styles: [__webpack_require__(/*! ./default-selection.component.css */ "./src/app/default-selection/default-selection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], DefaultSelectionComponent);
    return DefaultSelectionComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Copyrights Reserved &copy; <a href=\"https://www.mahindra.com\">Mahindra & Mahindra LTD.</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" href=\"/\">Admin Panel</a>\n  <div class=\"mahindra_logo_wrapper\">\n    <img src=\"./assets/images/mnmlogo.png\" class=\"mahindra_logo\">\n  </div>\n  <div class=\"navbar-expand mr-auto\">\n    <!-- <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" href=\"#\">Home</a>\n      <a class=\"nav-item nav-link\" href=\"#\">About</a>\n      <a class=\"nav-item nav-link\" href=\"#\">Contact</a>\n    </div> -->\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n      <a class=\"nav-item nav-link\" href=\"\" target=\"_blank\">\n        <i class=\"fa fa-twitter\"></i>\n      </a>\n      <a class=\"nav-item nav-link\" href=\"\" target=\"_blank\">\n        <i class=\"fa fa-medium\"></i>\n      </a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <ng-content></ng-content>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/menu-master/menu-master.component.css":
/*!*******************************************************!*\
  !*** ./src/app/menu-master/menu-master.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbWFzdGVyL21lbnUtbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu-master/menu-master.component.html":
/*!********************************************************!*\
  !*** ./src/app/menu-master/menu-master.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Menu Config Details\" [(visible)]=\"displayDialogForMenuconfig\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n  [closable]=\"true\" [width]=\"700\">\n  <div class=\"ui-g ui-fluid\" *ngIf=\"selectedMenuConfigRow\">\n\n    <div class=\"ui-g-2\">\n      <label for=\"Sequence\">Sequence</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"Sequence should be in number only eg : 1\" tooltipPosition=\"bottom\" id=\"nSequence\" [(ngModel)]=\"selectedMenuConfigRow.nSequence\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"isLandingMenu\">Menu Level</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"Menu Level should be in number only eg : 1\" tooltipPosition=\"bottom\" id=\"isLandingMenu\" [(ngModel)]=\"selectedMenuConfigRow.isLandingMenu\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"Value\">Name</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" id=\"name\" [(ngModel)]=\"selectedMenuConfigRow.name\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"Value\">Lib ID</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <!-- <input pInputText id=\"strLibID\" [(ngModel)]=\"selectedMenuConfigRow.strLibID\" /> -->\n      <select class=\"form-control\" pTooltip=\"Select Lib ID\" tooltipPosition=\"bottom\" id=\"power\" [(ngModel)]=\"selectedMenuConfigRow.strLibID\">\n        <option *ngFor=\"let sheetqIds of qlikLibIds\" [value]=\"sheetqIds.libId\">{{ sheetqIds.sheetTitle }} - ( {{ sheetqIds.libId }} )</option>\n      </select>\n    </div>\n\n\n    <div class=\"ui-g-2\">\n      <label for=\"reqType\">Req. Type</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"Req. Type should be in number only -> 1 : Single Object & default selections | 2 : Multiple Objects(Reports) | 3 : On th fly objects | 4 : only selection buttons\" tooltipPosition=\"bottom\" id=\"reqType\" [(ngModel)]=\"selectedMenuConfigRow.reqType\" />\n    </div>\n\n\n    <div class=\"ui-g-2\">\n      <label for=\"sheetName\">Sheet Name</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <select class=\"form-control\" pTooltip=\"Select Sheet Name to get Object from Object within that sheet\" tooltipPosition=\"bottom\" id=\"power\" (change)=\"onSheetNemeChange($event)\" [(ngModel)]=\"selectedMenuConfigRow.sheetName\">\n        <option *ngFor=\"let sheet of sheetData\" [value]=\"sheet.SheetTitle\">{{sheet.SheetTitle}}</option>\n      </select>\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"objId\">Object Id</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <select class=\"form-control\" pTooltip=\"Select Object id\" tooltipPosition=\"bottom\" id=\"power\" [(ngModel)]=\"selectedMenuConfigRow.objId\">\n        <option *ngFor=\"let objIds of sheetWiseObjects\" [value]=\"objIds\">{{objIds}}</option>\n      </select>\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"selections\">Selections</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"FieldName$field value|FieldName$value Eg : Month$Feb|Year$F18\" tooltipPosition=\"bottom\" id=\"strAdditionalObjects\" [(ngModel)]=\"selectedMenuConfigRow.strSelections\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"objId\">Additinal Objects</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"Additinal Objects For Reports Like X-style-List or DatePicker\" tooltipPosition=\"bottom\" id=\"strAdditionalObjects\" [(ngModel)]=\"selectedMenuConfigRow.strAdditionalObjects\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"btns\">Buttons</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pInputText pTooltip=\"ButtonName(ButtonValue)$FieldName|ButtonName(ButtonValue)$FieldName Eg: Trainee$Employee Category|Permanent$Employee Category\" tooltipPosition=\"bottom\" id=\"btns\" [(ngModel)]=\"selectedMenuConfigRow.btns\" />\n    </div>\n\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n\n      <div *ngIf=\"role=='user'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"menuConfigCancel()\" label=\"Cancel\"></button>\n      </div>\n      <div *ngIf=\"role=='admin'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"menuConfigCancel()\" label=\"Cancel\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"menuConfigDelete()\" label=\"Delete\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"menuConfigSave()\" label=\"Save\"></button>\n      </div>\n    </div>\n  </p-footer>\n</p-dialog>\n\n\n<p-table [columns]=\"menuConfigCols\" [value]=\"menuConfigRows\" selectionMode=\"single\" [(selection)]=\"selectedMenuConfigRow\"\n  (onRowSelect)=\"onRowSelectMenuConfig($event)\" [paginator]=\"false\" rows=\"10\">\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{col.header}}\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\" style=\"word-wrap: break-word;\">\n        <div *ngIf=\"col.type=='url'\">\n          <a style=\"text-decoration: underline;color:red\" (click)=\"objectIdClicked(rowData[col.field])\"> {{rowData[col.field]}} </a>\n        </div>\n        <div *ngIf=\"col.type=='string'\">\n          {{rowData[col.field]}}\n        </div>\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"summary\" let-rowData>\n    <div style=\"text-align:left\">\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAddMenuConfig()\" label=\"Add\"></button>\n    </div>\n  </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/menu-master/menu-master.component.ts":
/*!******************************************************!*\
  !*** ./src/app/menu-master/menu-master.component.ts ***!
  \******************************************************/
/*! exports provided: MenuMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMasterComponent", function() { return MenuMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/settings */ "./src/app/settings/settings.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var MenuMasterComponent = /** @class */ (function () {
    function MenuMasterComponent(sharedService) {
        this.sharedService = sharedService;
        this.newMenuConfig = false;
        this.qlikLibIds = [];
    }
    MenuMasterComponent.prototype.objectIdClicked = function (objId) {
        console.log(objId);
        // "http://qsdev.mahindra.com/single/?appid=d2d69372-0872-4319-ab68-e2784c2db879&obj="
        var url = _settings_settings__WEBPACK_IMPORTED_MODULE_2__["APP_SETTINGS"].singleConfiguratorUrl + objId + "&opt=nointeraction&select=clearall";
        window.open(url, '_blank');
    };
    MenuMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getMetaDataFromRedis().subscribe(function (meta) {
            _this.wholeMetaData = JSON.parse(JSON.parse(meta["metaHashMap"]));
            for (var i = 0; i < _this.wholeMetaData.arrMesureList.length; i++) {
                _this.qlikLibIds.push({ sheetTitle: _this.wholeMetaData.arrMesureList[i].data.title, libId: _this.wholeMetaData.arrMesureList[i].info.qId });
            }
            _this.sheetData = _this.wholeMetaData.sheetwiseData; // SheetTitle sheetWiseObjects ObjectName
        });
        this.menuConfigCols = [
            { field: 'nSequence', header: 'Sequence', type: 'string' },
            { field: 'isLandingMenu', header: 'Menu Level', type: 'string' },
            { field: 'name', header: 'Name', type: 'string' },
            { field: 'reqType', header: 'Req. Type', type: 'string' },
            { field: 'sheetName', header: 'Sheet Name', type: 'string' },
            { field: 'objId', header: 'Object Id', type: 'url' },
            { field: 'strLibID', header: 'Lib Id', type: 'string' },
        ];
        this.initialize();
    };
    MenuMasterComponent.prototype.initialize = function () {
        var _this = this;
        this.sharedService.getMasterConfig().subscribe(function (config) {
            _this.menuConfigRows = config.menuLevelConfig.sort(function (a, b) { return a.nSequence - b.nSequence; });
            ;
        });
    };
    MenuMasterComponent.prototype.bindObjects = function () {
        var _this = this;
        this.sheetWiseObjects = [];
        var matchedSheet = this.sheetData.filter(function (x) { return x.SheetTitle == _this.selectedMenuConfigRow.sheetName; });
        if (matchedSheet.length > 0) {
            this.sheetWiseObjects = matchedSheet[0].sheetWiseObjects.map(function (x) { return x.ObjectName; });
        }
        else {
            this.sheetWiseObjects = [];
        }
    };
    MenuMasterComponent.prototype.onRowSelectMenuConfig = function (event) {
        this.selectedMenuConfigRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event.data);
        this.bindObjects();
        this.displayDialogForMenuconfig = true;
    };
    MenuMasterComponent.prototype.onSheetNemeChange = function (sheetname) {
        console.log(sheetname);
        this.sheetWiseObjects = [];
        this.bindObjects();
    };
    MenuMasterComponent.prototype.showDialogToAddMenuConfig = function () {
        this.newMenuConfig = true;
        this.selectedMenuConfigRow = {};
        this.displayDialogForMenuconfig = true;
    };
    MenuMasterComponent.prototype.menuConfigSave = function () {
        this.selectedMenuConfigRow["isLandingMenu"] = Number(this.selectedMenuConfigRow["isLandingMenu"]);
        this.selectedMenuConfigRow["nSequence"] = Number(this.selectedMenuConfigRow["nSequence"]);
        this.selectedMenuConfigRow["isActive"] = Number(0);
        this.selectedMenuConfigRow["reqType"] = Number(this.selectedMenuConfigRow["reqType"]);
        if (this.newMenuConfig) {
            // direct insert to mongoDb
            this.selectedMenuConfigRow["opType"] = 1;
            console.log("To Insert New Document:- ", this.selectedMenuConfigRow);
        }
        else {
            // find index and update to mongodb
            this.selectedMenuConfigRow["opType"] = 0;
            console.log("To Update Document:- ", this.selectedMenuConfigRow);
        }
        this.crudAndRefresh();
        this.displayDialogForMenuconfig = false;
    };
    MenuMasterComponent.prototype.crudAndRefresh = function () {
        var _this = this;
        this.sharedService.saveOrUpdateMenuConfig(this.selectedMenuConfigRow).subscribe(function (d) {
            _this.initialize();
            console.log(" crudAndRefresh ", d);
        });
    };
    MenuMasterComponent.prototype.menuConfigDelete = function () {
        this.selectedMenuConfigRow["opType"] = -1;
        this.crudAndRefresh();
        this.selectedMenuConfigRow = null;
        this.displayDialogForMenuconfig = false;
        console.log("After Deleting");
    };
    MenuMasterComponent.prototype.menuConfigCancel = function () {
        this.displayDialogForMenuconfig = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuMasterComponent.prototype, "role", void 0);
    MenuMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-master',
            template: __webpack_require__(/*! ./menu-master.component.html */ "./src/app/menu-master/menu-master.component.html"),
            styles: [__webpack_require__(/*! ./menu-master.component.css */ "./src/app/menu-master/menu-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], MenuMasterComponent);
    return MenuMasterComponent;
}());



/***/ }),

/***/ "./src/app/server-config/server-config.component.css":
/*!***********************************************************!*\
  !*** ./src/app/server-config/server-config.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/server-config/server-config.component.html":
/*!************************************************************!*\
  !*** ./src/app/server-config/server-config.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"App Config Details\" [(visible)]=\"displayDialogForAppconfig\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n  [closable]=\"true\" [width]=\"700\">\n  <div class=\"ui-g ui-fluid\" *ngIf=\"selectedAppConfigRow\">\n\n    <div class=\"ui-g-2\">\n      <label for=\"Key\">Key</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" pInputText id=\"key\"  [disabled]=\"'true'\" [(ngModel)]=\"selectedAppConfigRow.key\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"Value\">Value</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" pInputText id=\"value\" [(ngModel)]=\"selectedAppConfigRow.value\" />\n    </div>\n\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n\n      <div *ngIf=\"role=='user'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigCancel()\" label=\"Cancel\"></button>\n      </div>\n      <div *ngIf=\"role=='admin'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigCancel()\" label=\"Cancel\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"appConfigDelete()\" label=\"Delete\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"appConfigSave()\" label=\"Save\"></button>\n      </div>\n\n    </div>\n  </p-footer>\n</p-dialog>\n\n\n<p-table [columns]=\"appConfigCols\" [value]=\"appConfigRows\" selectionMode=\"single\" [(selection)]=\"selectedAppConfigRow\" (onRowSelect)=\"onRowSelectAppConfig($event)\"\n  [paginator]=\"false\" rows=\"10\">\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{col.header}}\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        {{rowData[col.field]}}\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"summary\" let-rowData>\n    <div style=\"text-align:left\">\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAddAppConfig()\" label=\"Add\"></button>\n    </div>\n  </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/server-config/server-config.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/server-config/server-config.component.ts ***!
  \**********************************************************/
/*! exports provided: ServerConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerConfigComponent", function() { return ServerConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var ServerConfigComponent = /** @class */ (function () {
    function ServerConfigComponent(sharedService) {
        this.sharedService = sharedService;
        this.newAppConfig = false;
    }
    ServerConfigComponent.prototype.ngOnInit = function () {
        this.appConfigCols = [
            { field: 'key', header: 'Key' },
            { field: 'value', header: 'Value' },
        ];
        this.initialize();
    };
    ServerConfigComponent.prototype.initialize = function () {
        var _this = this;
        this.sharedService.getMasterConfig().subscribe(function (config) {
            _this.appConfigRows = config.serverConfig.sort(function (a, b) {
                if (a.key < b.key) {
                    return -1;
                }
                if (a.key > b.key) {
                    return 1;
                }
                return 0;
            });
        });
    };
    ServerConfigComponent.prototype.onRowSelectAppConfig = function (event) {
        this.selectedAppConfigRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event.data);
        this.displayDialogForAppconfig = true;
    };
    ServerConfigComponent.prototype.showDialogToAddAppConfig = function () {
        this.newAppConfig = true;
        this.selectedAppConfigRow = {};
        this.displayDialogForAppconfig = true;
    };
    ServerConfigComponent.prototype.appConfigSave = function () {
        if (this.newAppConfig) {
            // direct insert to mongoDb
            this.selectedAppConfigRow["opType"] = 1;
            console.log("To Insert New Document:- ", this.selectedAppConfigRow);
        }
        else {
            // find index and update to mongodb
            this.selectedAppConfigRow["opType"] = 0;
            console.log("To Update Document:- ", this.selectedAppConfigRow);
        }
        this.crudAndRefresh();
        this.displayDialogForAppconfig = false;
    };
    ServerConfigComponent.prototype.crudAndRefresh = function () {
        var _this = this;
        this.sharedService.saveOrUpdateServerConfig(this.selectedAppConfigRow).subscribe(function (d) {
            _this.initialize();
            console.log(" crudAndRefresh ", d);
        });
    };
    ServerConfigComponent.prototype.appConfigDelete = function () {
        this.selectedAppConfigRow["opType"] = -1;
        this.crudAndRefresh();
        this.selectedAppConfigRow = null;
        this.displayDialogForAppconfig = false;
        console.log("After Deleting");
    };
    ServerConfigComponent.prototype.appConfigCancel = function () {
        this.displayDialogForAppconfig = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServerConfigComponent.prototype, "role", void 0);
    ServerConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-config',
            template: __webpack_require__(/*! ./server-config.component.html */ "./src/app/server-config/server-config.component.html"),
            styles: [__webpack_require__(/*! ./server-config.component.css */ "./src/app/server-config/server-config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ServerConfigComponent);
    return ServerConfigComponent;
}());



/***/ }),

/***/ "./src/app/settings/index.ts":
/*!***********************************!*\
  !*** ./src/app/settings/index.ts ***!
  \***********************************/
/*! exports provided: APP_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/app/settings/settings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_SETTINGS", function() { return _settings__WEBPACK_IMPORTED_MODULE_0__["APP_SETTINGS"]; });




/***/ }),

/***/ "./src/app/settings/settings.ts":
/*!**************************************!*\
  !*** ./src/app/settings/settings.ts ***!
  \**************************************/
/*! exports provided: APP_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SETTINGS", function() { return APP_SETTINGS; });
var APP_SETTINGS = {
    serviceUrl: '',
    singleConfiguratorUrl: ''
};


/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings */ "./src/app/settings/settings.ts");





var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
    }
    SharedService.prototype.getMetaDataFromRedis = function () {
        return this.http.get(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + '/getWholeMetaData?forceFulDbCacheUpdate=0&dbChoice=0');
    };
    SharedService.prototype.getMasterConfig = function () {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + '/getConfigMaster')
                .toPromise()
                .then(function (res) { return res; })
                .then(function (data) {
                console.log("Master Config Received:- ", data);
                observer.next(data);
            });
        });
    };
    SharedService.prototype.saveOrUpdateAppConfig = function (body) {
        return this.http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + '/saveOrUpdateAppConfig', body);
    };
    SharedService.prototype.saveOrUpdateServerConfig = function (body) {
        return this.http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + '/saveOrUpdateServerConfig', body);
    };
    SharedService.prototype.saveOrUpdateMenuConfig = function (body) {
        return this.http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + '/saveOrUpdateMenuConfig', body);
    };
    SharedService.prototype.saveOrUpdateDefaultSelections = function (body) {
        return this.http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + '/saveOrUpdateDefaultSelections', body);
    };
    SharedService.prototype.saveOrUpdateSideMenuConfig = function (body) {
        return this.http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + '/saveOrUpdateSideMenuConfig', body);
    };
    SharedService.prototype.post = function (url, body) {
        return this.http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_4__["APP_SETTINGS"].serviceUrl + url, body);
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.css":
/*!*************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.html":
/*!**************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Side Menu Config Details\" [(visible)]=\"displayDialogForsideMenuconfig\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n  [closable]=\"true\" [width]=\"700\">\n  <div class=\"ui-g ui-fluid\" *ngIf=\"selectedsideMenuConfigRow\">\n\n    <div class=\"ui-g-2\">\n      <label for=\"menuname\">Menu Name</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" pInputText id=\"key\" [(ngModel)]=\"selectedsideMenuConfigRow.menuName\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"menuIconUrl\">Menu Icon Class</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" pInputText id=\"key\"  [(ngModel)]=\"selectedsideMenuConfigRow.menuIconUrl\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"menuKey\">Menu Key</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pTooltip=\"Enter Significant Menu Key\" tooltipPosition=\"bottom\" pInputText id=\"key\" [(ngModel)]=\"selectedsideMenuConfigRow.menuKey\" />\n    </div>\n\n    <div class=\"ui-g-2\">\n      <label for=\"isActive\">isActive</label>\n    </div>\n    <div class=\"ui-g-10\">\n      <input pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" pInputText id=\"value\" [(ngModel)]=\"selectedsideMenuConfigRow.isActive\" />\n    </div>\n\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n\n      <div *ngIf=\"role=='user'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"sideMenuConfigCancel()\" label=\"Cancel\"></button>\n      </div>\n      <div *ngIf=\"role=='admin'\">\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"sideMenuConfigCancel()\" label=\"Cancel\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"sideMenuConfigDelete()\" label=\"Delete\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"sideMenuConfigSave()\" label=\"Save\"></button>\n      </div>\n\n    </div>\n  </p-footer>\n</p-dialog>\n\n\n<p-table [columns]=\"sideMenuConfigCols\" [value]=\"sideMenuConfigRows\" selectionMode=\"single\" [(selection)]=\"selectedsideMenuConfigRow\" (onRowSelect)=\"onRowSelectsideMenuConfig($event)\"\n  [paginator]=\"false\" rows=\"10\">\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{col.header}}\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        {{rowData[col.field]}}\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"summary\" let-rowData>\n    <div style=\"text-align:left\">\n      <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAddsideMenuConfig()\" label=\"Add\"></button>\n    </div>\n  </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.ts":
/*!************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.ts ***!
  \************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(sharedService) {
        this.sharedService = sharedService;
        this.newsideMenuConfig = false;
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        this.sideMenuConfigCols = [
            { field: 'menuName', header: 'Menu Name' },
            { field: 'menuIconUrl', header: 'Menu Icon Class' },
            { field: 'menuKey', header: 'Menu Key' },
            { field: 'isActive', header: 'isActive' }
        ];
        this.initialize();
    };
    SidemenuComponent.prototype.initialize = function () {
        var _this = this;
        this.sharedService.getMasterConfig().subscribe(function (config) {
            console.log(config.sidemenuConfig);
            _this.sideMenuConfigRows = config.sidemenuConfig.sort(function (a, b) {
                if (a.menuName < b.menuName) {
                    return -1;
                }
                if (a.menuName > b.menuName) {
                    return 1;
                }
                return 0;
            });
        });
    };
    SidemenuComponent.prototype.onRowSelectsideMenuConfig = function (event) {
        this.selectedsideMenuConfigRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event.data);
        this.displayDialogForsideMenuconfig = true;
    };
    SidemenuComponent.prototype.showDialogToAddsideMenuConfig = function () {
        this.newsideMenuConfig = true;
        this.selectedsideMenuConfigRow = {};
        this.displayDialogForsideMenuconfig = true;
    };
    SidemenuComponent.prototype.sideMenuConfigSave = function () {
        this.selectedsideMenuConfigRow["isActive"] = Number(this.selectedsideMenuConfigRow["isActive"]);
        if (this.newsideMenuConfig) {
            // direct insert to mongoDb
            this.selectedsideMenuConfigRow["opType"] = 1;
            console.log("To Insert New Document:- ", this.selectedsideMenuConfigRow);
        }
        else {
            // find index and update to mongodb
            this.selectedsideMenuConfigRow["opType"] = 0;
            console.log("To Update Document:- ", this.selectedsideMenuConfigRow);
        }
        this.crudAndRefresh();
        this.displayDialogForsideMenuconfig = false;
    };
    SidemenuComponent.prototype.crudAndRefresh = function () {
        var _this = this;
        this.sharedService.saveOrUpdateSideMenuConfig(this.selectedsideMenuConfigRow).subscribe(function (d) {
            _this.initialize();
        });
    };
    SidemenuComponent.prototype.sideMenuConfigDelete = function () {
        this.selectedsideMenuConfigRow["opType"] = -1;
        this.crudAndRefresh();
        this.selectedsideMenuConfigRow = null;
        this.displayDialogForsideMenuconfig = false;
        console.log("After Deleting");
    };
    SidemenuComponent.prototype.sideMenuConfigCancel = function () {
        this.displayDialogForsideMenuconfig = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidemenuComponent.prototype, "role", void 0);
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/sidemenu/sidemenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], SidemenuComponent);
    return SidemenuComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\client_workspace\Mahindra\Qliksense-chatbot-production\Arch-2\AdminPanel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map