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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n  <div class=\"d-flex justify-content-center\">\r\n    <div class=\"container-fluid\">\r\n      <app-path></app-path>\r\n      <app-monitor></app-monitor>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".master {\n  width: 50%;\n  margin: auto;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxLT1JcXERvY3VtZW50c1xccHJvamVjdHNcXEFFTWxvZ2dlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULFlBQVc7RUFDWCxzQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0ZXJ7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _path_path_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./path/path.component */ "./src/app/path/path.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _monitoring_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./monitoring/monitor/monitor.component */ "./src/app/monitoring/monitor/monitor.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _path_path_component__WEBPACK_IMPORTED_MODULE_8__["PathComponent"],
                _monitoring_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_10__["MonitorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/monitoring/monitor/monitor.component.html":
/*!***********************************************************!*\
  !*** ./src/app/monitoring/monitor/monitor.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"monitor\" class=\"monitor\" *ngIf=\"filePath != undefined\">\r\n  <ul>\r\n    <li *ngFor=\"let i of fileContents\">\r\n      {{i}}\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/monitoring/monitor/monitor.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/monitoring/monitor/monitor.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3JpbmcvbW9uaXRvci9tb25pdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/monitoring/monitor/monitor.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/monitoring/monitor/monitor.component.ts ***!
  \*********************************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/io.service */ "./src/app/services/io.service.ts");
/* harmony import */ var _services_global_vars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global-vars.service */ "./src/app/services/global-vars.service.ts");




var MonitorComponent = /** @class */ (function () {
    function MonitorComponent(IO, global) {
        this.IO = IO;
        this.global = global;
    }
    MonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.global.setWatchFileListener().subscribe(function (data) {
            console.log(data);
            _this.filePath = data;
            _this.global.setWatchDirListener().subscribe(function (dir) {
                _this.fileDir = dir;
                console.log(dir);
                if (_this.fileDir) {
                    console.log("is true");
                }
                else {
                    _this.readFile();
                }
            });
        });
    };
    MonitorComponent.prototype.readFile = function () {
        var _this = this;
        this.IO.readAFile(this.filePath).then(function (data) {
            _this.fileContents = data.toString().split(/\r?\n/);
            _this.IO.streamRead(_this.filePath);
            _this.IO.getStreamListener().subscribe(function (data) {
                console.log(data);
                _this.fileContents = data.toString().split(/\r?\n/);
                // if(data.event == "change"){
                //  this.IO.readAFile(data.file).then((data)=>{
                //   this.fileContents = data.toString().split(/\r?\n/);
                //  })
                // }
            });
        });
    };
    MonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitor',
            template: __webpack_require__(/*! ./monitor.component.html */ "./src/app/monitoring/monitor/monitor.component.html"),
            styles: [__webpack_require__(/*! ./monitor.component.scss */ "./src/app/monitoring/monitor/monitor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_io_service__WEBPACK_IMPORTED_MODULE_2__["IoService"], _services_global_vars_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarsService"]])
    ], MonitorComponent);
    return MonitorComponent;
}());



/***/ }),

/***/ "./src/app/path/path.component.html":
/*!******************************************!*\
  !*** ./src/app/path/path.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" id='wrapper'>\r\n  <div class=\"input-group mb-3 floatedInput\">\r\n    <div class=\"innerBox\">\r\n      <div class=\"custom-file\">\r\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\" (change)=\"chooseFile($event)\">\r\n        <label *ngIf=\"selectedPath == undefined\" class=\"custom-file-label\" for=\"inputGroupFile02\" aria-describedby=\"inputGroupFileAddon02\" >Select File</label>\r\n        <label *ngIf=\"selectedPath\" class=\"custom-file-label\" for=\"inputGroupFile02\" aria-describedby=\"inputGroupFileAddon02\" >{{selectedPath}}</label>\r\n      </div>\r\n      <div style=\"display:inline-block; margin:5px\"><input type=\"checkbox\" name=\"siblings\" (change)=\"sibling($event)\" [checked]=\"siblings\" > Include Siblings</div>\r\n      <div style=\"display:inline-block; margin:5px\"><input type=\"checkbox\" name=\"save\" (change)=\"savePath($event)\" [checked]=\"saveFilePath\"> Save Path</div>\r\n      <button class=\"monitorButton\" (click)=\"startMonitoing('#wrapper')\" mat-raised-button>Monitor</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/path/path.component.scss":
/*!******************************************!*\
  !*** ./src/app/path/path.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n  .wrapper .floatedInput {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    width: 75%;\n    height: 100%;\n    margin: auto; }\n  .wrapper .floatedInput .innerBox {\n      width: 100%;\n      padding: 15% 10px;\n      background-color: white;\n      position: relative; }\n  .wrapper .floatedInput .innerBox .monitorButton {\n        position: absolute;\n        right: 5px;\n        bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aC9DOlxcVXNlcnNcXEtPUlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcQUVNbG9nZ2VyL3NyY1xcYXBwXFxwYXRoXFxwYXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQUs7RUFBRSxTQUFRO0VBQUUsT0FBTTtFQUFFLFFBQU87RUFDaEMsb0NBQXNDLEVBQUE7RUFIMUM7SUFLUSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixVQUFTO0lBRVQsWUFBVztJQUNYLFlBQVcsRUFBQTtFQVhuQjtNQWFZLFdBQVU7TUFDVixpQkFBZ0I7TUFDaEIsdUJBQXNCO01BQ3RCLGtCQUFrQixFQUFBO0VBaEI5QjtRQWtCZ0Isa0JBQWtCO1FBQ2xCLFVBQVM7UUFDVCxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXRoL3BhdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowOyBib3R0b206MDsgbGVmdDowOyByaWdodDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjUpO1xyXG4gICAgLmZsb2F0ZWRJbnB1dHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6NzUlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgIC5pbm5lckJveHtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzoxNSUgMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAubW9uaXRvckJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _services_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/io.service */ "./src/app/services/io.service.ts");
/* harmony import */ var _services_global_vars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global-vars.service */ "./src/app/services/global-vars.service.ts");




var os = window['os'];
var PathComponent = /** @class */ (function () {
    function PathComponent(IO, watcher) {
        this.IO = IO;
        this.watcher = watcher;
        this.path = "filepath";
        this.defaultLabelText = "Select File";
        this.saveDB = './save.json';
        this.selectedPath = this.defaultLabelText;
        this.thisOS = os.platform();
    }
    PathComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.IO.checkFileExist(this.saveDB).then(function (data) {
            if (data == true) {
                console.log(data);
                _this.IO.readAFile(_this.saveDB).then(function (data) {
                    var saveJson = JSON.parse(data.toString());
                    _this.siblings = saveJson.data.dir;
                    _this.fileName = saveJson.data.fileName;
                    _this.saveFilePath = saveJson.data.saved;
                    if (saveJson.data.saves != "") {
                        _this.selectedPath = saveJson.data.saves;
                    }
                });
            }
        });
    };
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
                this.setSavePath();
            }
        }
        else {
            if (this.selectedPath != this.defaultLabelText) {
                this.setOrgPath();
                this.setSavePath();
            }
        }
    };
    PathComponent.prototype.savePath = function (data) {
        this.saveFilePath = data.target.checked;
        this.setSavePath();
    };
    PathComponent.prototype.setCleanPath = function (path) {
        var newPath = path.toString().replace(this.fileName, "");
        this.selectedPath = newPath;
        this.setSavePath();
    };
    PathComponent.prototype.setSavePath = function () {
        if (this.saveFilePath == true && this.selectedPath != this.defaultLabelText) {
            if (this.thisOS == "win32") {
                var winData = this.winFix("{\"data\": {\"saves\": \"" + this.selectedPath + "\", \"dir\":" + this.siblings + ", \"fileName\":\"" + this.fileName + "\", \"saved\":" + this.saveFilePath + "}");
                this.IO.writeFile(this.saveDB, winData);
            }
            else {
                this.IO.writeFile(this.saveDB, "{\"data\": {\"saves\": \"" + this.selectedPath + "\", \"dir\":" + this.siblings + ", \"fileName\":\"" + this.fileName + "\", \"saved\":" + this.saveFilePath + "}}");
            }
        }
        else if (this.saveFilePath == false || this.selectedPath == this.defaultLabelText) {
            this.IO.writeFile(this.saveDB, "{\"data\": {\"saves\": \"\", \"dir\":" + this.siblings + ", \"fileName\":\"\", \"saved\":" + this.saveFilePath + "}}");
        }
    };
    PathComponent.prototype.setOrgPath = function () {
        this.selectedPath = this.selectedPath + this.fileName;
    };
    PathComponent.prototype.winFix = function (jsonData) {
        var newText = jsonData.toString().replace("\\", "\\\\");
    };
    PathComponent.prototype.startMonitoing = function (target) {
        this.watcher.getWatchFilePath(this.selectedPath);
        this.watcher.getWatchFileDir(this.siblings);
        var elm = document.querySelector(target);
        elm.style.display = "none";
        // console.log(elm)
    };
    PathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-path',
            template: __webpack_require__(/*! ./path.component.html */ "./src/app/path/path.component.html"),
            styles: [__webpack_require__(/*! ./path.component.scss */ "./src/app/path/path.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_io_service__WEBPACK_IMPORTED_MODULE_2__["IoService"], _services_global_vars_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarsService"]])
    ], PathComponent);
    return PathComponent;
}());



/***/ }),

/***/ "./src/app/services/global-vars.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/global-vars.service.ts ***!
  \*************************************************/
/*! exports provided: GlobalVarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVarsService", function() { return GlobalVarsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var GlobalVarsService = /** @class */ (function () {
    function GlobalVarsService() {
        this.watchFileObserv = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.watchDirObserv = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    GlobalVarsService.prototype.setWatchFileListener = function () {
        return this.watchFileObserv.asObservable();
    };
    GlobalVarsService.prototype.setWatchDirListener = function () {
        return this.watchDirObserv.asObservable();
    };
    GlobalVarsService.prototype.getWatchFilePath = function (path) {
        this.watchFile = path;
        return this.watchFileObserv.next(this.watchFile);
    };
    GlobalVarsService.prototype.getWatchFileDir = function (dir) {
        this.watchDir = dir;
        return this.watchDirObserv.next(this.watchDir);
    };
    GlobalVarsService.prototype.setHidden = function (target) {
        var elm = document.querySelector(target);
        elm.style.display = "none";
    };
    GlobalVarsService.prototype.setShow = function (target) {
        var elm = document.querySelector(target);
        elm.style.display = "block";
    };
    GlobalVarsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalVarsService);
    return GlobalVarsService;
}());



/***/ }),

/***/ "./src/app/services/io.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/io.service.ts ***!
  \****************************************/
/*! exports provided: IoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoService", function() { return IoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// let fs = require('fs');
var fs = window['fs'];
var trs = window['trs'];
var IoService = /** @class */ (function () {
    function IoService() {
        this.streamUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    IoService.prototype.getStreamListener = function () {
        return this.streamUpdate.asObservable();
    };
    //This is IO code written for node and adapted to angular.
    //to -- adapt to ts standards as needed --
    IoService.prototype.readAFile = function (filepath) {
        return new Promise(function (resolve, reject) {
            fs.readFile(filepath, 'utf-8', function (err, data) {
                if (err) {
                    reject("An error ocurred reading the file :" + err.message);
                    return;
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    IoService.prototype.streamRead = function (files) {
        // fs.watch(files, (event, file) => {
        //     let change: Filechange = { "event": event, "file": file };
        //     return this.streamUpdate.next(change);
        var _this = this;
        // })
        var read = trs.createReadStream(files, { timeout: 0 });
        read.on('data', function (data) {
            var change = data.toString();
            return _this.streamUpdate.next(change);
        });
    };
    IoService.prototype.writeFile = function (filepath, data) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(filepath, data, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("File Written");
                }
            });
        });
    };
    IoService.prototype.getDirContents = function (dir) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var files = {};
            var fileNames = [];
            try {
                fs.readdirSync(dir).forEach(function (fileName) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        fileNames.push({
                            "name": fileName,
                        });
                        files = { "files": fileNames };
                        return [2 /*return*/];
                    });
                }); });
                resolve(files);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    IoService.prototype.checkFileExist = function (path) {
        return new Promise(function (resolve, reject) {
            if (!path) {
                reject("Path is invalid " + path);
            }
            try {
                fs.access(path, fs.F_OK, function (err) {
                    if (err) {
                        resolve(false + err);
                    }
                    resolve(true);
                });
            }
            catch (error) {
                reject("error");
            }
        });
    };
    IoService.prototype.checkType = function (path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var error_1;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, fs.lstat(path, function (err, stats) {
                                            if (err) {
                                                reject(new Error("" + err));
                                            }
                                            if (stats.isFile()) {
                                                resolve("file");
                                            }
                                            else if (stats.isDirectory()) {
                                                resolve("dir");
                                            }
                                            else {
                                                reject(new Error("File type unknown in scope"));
                                            }
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_1 = _a.sent();
                                    reject(new Error("" + error_1));
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    IoService.prototype.checkDirExist = function (dir) {
        return new Promise(function (resolve, reject) {
            try {
                if (fs.existsSync(dir)) {
                    resolve("true");
                }
                else {
                    resolve("false");
                }
            }
            catch (error) {
                reject(error);
            }
        });
    };
    IoService.prototype.createDir = function (dir) {
        return new Promise(function (resolve, reject) {
            try {
                fs.mkdirSync(dir);
                resolve("done");
            }
            catch (error) {
                reject(error);
            }
        });
    };
    IoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IoService);
    return IoService;
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

module.exports = __webpack_require__(/*! C:\Users\KOR\Documents\projects\AEMlogger\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map