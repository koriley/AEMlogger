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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n  <div class=\"d-flex justify-content-center\">\n    <div class=\"container-fluid\">\n      <app-path></app-path>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".master {\n  width: 50%;\n  margin: auto;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rbm9yaWxleS9Eb2N1bWVudHMvbmcvQUVNbG9nZ2VyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULFlBQVc7RUFDWCxzQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0ZXJ7XG4gICAgd2lkdGg6NTAlO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbn0iXX0= */"

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
        this.title = 'AEMlogger';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _path_path_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./path/path.component */ "./src/app/path/path.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _path_path_component__WEBPACK_IMPORTED_MODULE_7__["PathComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/path/path.component.html":
/*!******************************************!*\
  !*** ./src/app/path/path.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"input-group mb-3 floatedInput\">\n    <div class=\"innerBox\">\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\" (change)=\"chooseFile($event)\">\n        <label *ngIf=\"selectedPath == undefined\" class=\"custom-file-label\" for=\"inputGroupFile02\" aria-describedby=\"inputGroupFileAddon02\" >Select File</label>\n        <label *ngIf=\"selectedPath\" class=\"custom-file-label\" for=\"inputGroupFile02\" aria-describedby=\"inputGroupFileAddon02\" >{{selectedPath}} ff</label>\n      </div>\n      <div style=\"display:inline-block; margin:5px\"><input type=\"checkbox\" name=\"siblings\" (change)=\"sibling($event)\" > Include Siblings</div>\n      <div style=\"display:inline-block; margin:5px\"><input type=\"checkbox\" name=\"save\" (change)=\"savePath($event)\"> Save Path</div>\n      \n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/path/path.component.scss":
/*!******************************************!*\
  !*** ./src/app/path/path.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n  .wrapper .floatedInput {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    width: 75%;\n    height: 100%;\n    margin: auto; }\n  .wrapper .floatedInput .innerBox {\n      width: 100%;\n      padding: 15% 10px;\n      background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rbm9yaWxleS9Eb2N1bWVudHMvbmcvQUVNbG9nZ2VyL3NyYy9hcHAvcGF0aC9wYXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQUs7RUFBRSxTQUFRO0VBQUUsT0FBTTtFQUFFLFFBQU87RUFDaEMsb0NBQXNDLEVBQUE7RUFIMUM7SUFLUSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixVQUFTO0lBRVQsWUFBVztJQUNYLFlBQVcsRUFBQTtFQVhuQjtNQWFZLFdBQVU7TUFDVixpQkFBZ0I7TUFDaEIsdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXRoL3BhdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7IGJvdHRvbTowOyBsZWZ0OjA7IHJpZ2h0OjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjUpO1xuICAgIC5mbG9hdGVkSW5wdXR7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDo3NSU7XG4gICAgICAgIFxuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgIC5pbm5lckJveHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOjE1JSAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/path/path.component.ts":
/*!****************************************!*\
  !*** ./src/app/path/path.component.ts ***!
  \****************************************/
/*! exports provided: PathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathComponent", function() { return PathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bakery.service */ "./src/app/services/bakery.service.ts");



var PathComponent = /** @class */ (function () {
    function PathComponent(baker) {
        this.baker = baker;
        this.path = "filepath";
        this.defaultLabelText = "Select File";
        this.getCookie = this.baker.getCookie(this.path);
        this.selectedPath = this.defaultLabelText;
    }
    PathComponent.prototype.ngOnInit = function () { };
    PathComponent.prototype.chooseFile = function (data) {
        console.log(data);
        this.selectedPath = data.target.files[0].path;
        this.fileName = data.target.files[0].name;
        if (this.siblings) {
            this.setCleanPath(this.selectedPath);
        }
    };
    PathComponent.prototype.sibling = function (data) {
        this.siblings = data.target.checked;
        console.log(this.siblings);
        if (this.siblings) {
            if (this.selectedPath != this.defaultLabelText) {
                this.setCleanPath(this.selectedPath);
            }
        }
        else {
            if (this.selectedPath != this.defaultLabelText) {
                this.setOrgPath();
            }
        }
    };
    PathComponent.prototype.savePath = function (data) {
        this.saveFilePath = data.target.checked;
        console.log(this.saveFilePath);
    };
    PathComponent.prototype.setCleanPath = function (path) {
        var newPath = path.toString().replace(this.fileName, "");
        this.selectedPath = newPath;
    };
    PathComponent.prototype.setOrgPath = function () {
        this.selectedPath = this.selectedPath + this.fileName;
    };
    PathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-path',
            template: __webpack_require__(/*! ./path.component.html */ "./src/app/path/path.component.html"),
            styles: [__webpack_require__(/*! ./path.component.scss */ "./src/app/path/path.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bakery_service__WEBPACK_IMPORTED_MODULE_2__["BakeryService"]])
    ], PathComponent);
    return PathComponent;
}());



/***/ }),

/***/ "./src/app/services/bakery.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/bakery.service.ts ***!
  \********************************************/
/*! exports provided: BakeryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BakeryService", function() { return BakeryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BakeryService = /** @class */ (function () {
    function BakeryService() {
    }
    /**
   * Creates a cookie, defaults to the location.href and path / for cookie storage.
   * @param {*} cname the name of the cookie being set.
   * @param {*} cvalue The value of the cookie
   * @param {*} exdays number of days till expire
   * @param {*} allowedProtocol http or https optional
   */
    BakeryService.prototype.setCookie = function (cname, cvalue, exdays, allowedProtocol) {
        if (allowedProtocol === void 0) { allowedProtocol = "http"; }
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        var secure = this.getProtocol();
        if (allowedProtocol == 'https') {
            if (secure == allowedProtocol) {
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;secure;httpOnly";
            }
        }
        else {
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    };
    BakeryService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    BakeryService.prototype.checkCookie = function (cname) {
        var cookie = this.getCookie(cname);
        if (cookie != "") {
            return cookie;
        }
        else {
            return '';
        }
    };
    BakeryService.prototype.deleteCookie = function (cname) {
        var cookie = this.getCookie(cname);
        if (cookie) {
            this.setCookie;
        }
    };
    BakeryService.prototype.getProtocol = function () {
        return location.protocol.replace(":", '');
    };
    BakeryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BakeryService);
    return BakeryService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/knoriley/Documents/ng/AEMlogger/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map