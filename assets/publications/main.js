(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vitor.silva\Desktop\TomeAppAngular\Publications\Publications\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BxYy":
/*!******************************************************!*\
  !*** ./src/app/publication/publication.component.ts ***!
  \******************************************************/
/*! exports provided: PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PublicationComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublicationComponent.ɵfac = function PublicationComponent_Factory(t) { return new (t || PublicationComponent)(); };
PublicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationComponent, selectors: [["app-publication"]], decls: 2, vars: 0, template: function PublicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "publication works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "GVa1":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/publication.service */ "wzbf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PublicationsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "figcaption", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figcaption", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.publications[i_r2].back, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.publications[i_r2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.publications[i_r2].front, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.publications[i_r2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.publications[i_r2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.publications[i_r2].back, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.publications[i_r2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.publications[i_r2].back, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.publications[i_r2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.publications[i_r2].title);
} }
class PublicationsComponent {
    constructor(publicationService) {
        this.publicationService = publicationService;
        this.publications = [];
        this.errMess = '';
        this.todoItems = [];
    }
    ngOnInit() {
        // GET PUBLICATIONS FROM SERVER
        this.publicationService.getPublications()
            .subscribe((publicationsFromServer) => this.publications = publicationsFromServer, errmess => this.errMess = errmess);
    }
    sortList() {
        this.publications.sort();
    }
    doSomething() {
        // const newPublicationToPostInServer = new Publication();
        // newPublicationToPostInServer.title = 'Internet PARA TOTÓS';
        // newPublicationToPostInServer.front = 'https://live.staticflickr.com/65535/49512257438_75003a4f14_z.jpg';
        // const obs = this.publicationService.postPublication(newPublicationToPostInServer)
        // .subscribe(feedback => {
        //   // alert(feedback);
        // },
        // errmess => { /*alert(errmess);*/ });
        // const employeeGeofences = this.publicationService.getEmployeeGeofences().subscribe(feedback => {
        //   alert(feedback.toString());
        // },
        // errmess => { alert(errmess); });
        // const rosterGeofences = this.publicationService.getRosterGeofences().subscribe(feedback => {
        //   alert(feedback.toString());
        // },
        // errmess => { alert(errmess); });
        const employeeGeofence = this.publicationService.getEmployeeGeofence().subscribe(feedback => {
            for (const x in feedback) {
                if (x) {
                    alert(x.toString());
                }
            }
        }, errmess => { alert(errmess); });
        const rosterGeofence = this.publicationService.getRosterGeofence().subscribe(feedback => {
            for (const x in feedback) {
                if (x) {
                    alert(x.toString());
                }
            }
        }, errmess => { alert(errmess); });
        // const postedEmployeeGeofence = this.publicationService.postEmployeeGeofence({}).subscribe(feedback => {
        //   alert(feedback.toString());
        // },
        // errmess => { alert(errmess); });
        // const deletedEmployeeGeofence = this.publicationService.deleteEmployeeGeofence({}).subscribe(feedback => {
        //   alert(feedback.toString());
        // },
        // errmess => { alert(errmess); });
        const postedRosterGeofence = this.publicationService.postRosterGeofence({}).subscribe(feedback => {
            alert(feedback.toString());
        }, errmess => { alert(errmess); });
        const deletedRosterGeofence = this.publicationService.deleteRosterGeofence({}).subscribe(feedback => {
            alert(feedback.toString());
        }, errmess => { alert(errmess); });
        // INSERT COMMENTS IN THE DISH COPY AND PUT TO THE SERVER
        // this.dishcopy.comments.push(newComment);
        // this.dishservice.putDish(this.dishcopy)
        //   .subscribe(dish => {
        //     this.dish = dish; this.dishcopy = dish;
        //   },
        //   errmess => { this.dish = this.dish; this.dishcopy = this.dish; this.errMess = <any>errmess; });
        // // SEND FEEDBACK TO SERVER
        // this.requestInProgress = true;
        // this.feedbackService.submitFeedback(this.feedback)
        // .subscribe(feedback => {
        //   this.feedback = feedback;
        // },
        // errmess => { this.feedback = this.feedback; this.errMess = <any>errmess; });
        // const newTodoItemToPost = new TodoItem();
        // newTodoItemToPost.id = 1;
        // newTodoItemToPost.name = "Todo Item From Angular";
        // newTodoItemToPost.isComplete = false;
        // this.publicationService.postTodoItem(newTodoItemToPost)
        // .subscribe(feedback => {
        //     alert(feedback);
        //   },
        //   errmess => { alert(errmess); });
        // alert();
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_publication_service__WEBPACK_IMPORTED_MODULE_1__["PublicationService"])); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], decls: 4, vars: 2, consts: [[1, "text-center", "h3", "text-light"], ["id", "paintings", "data-role", "list", "data-sort-class", "painting-price", "data-sort-dir", "desc", "data-cls-list", "unstyled-list row flex-justify-center mt-4", "data-cls-list-item", "cell-sm-6 cell-md-4"], [4, "ngFor", "ngForOf"], [1, "flip-card", "effect-on-hover", 2, "height", "300px", "width", "100%"], [1, "front"], [1, "text-center"], [1, "img-container", "thumbnail"], ["target", "_blank", 3, "href", "title"], [3, "src", "alt"], [1, "painting-name"], [1, "back"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PublicationsComponent_li_3_Template, 16, 10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.publications.length, " Tech Books \uD83D\uDCDA read so far!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\ndiv.img-container.thumbnail[_ngcontent-%COMP%]:hover {\n  border: 1px solid blue !important;\n}\n\ndiv[_ngcontent-%COMP%]   [class=cell-md-4][_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n\nli[_ngcontent-%COMP%] {\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBU0E7RUFFRSxpQ0FBQTtBQVBGOztBQVdBO0VBQ0Usa0JBQUE7QUFSRjs7QUFXQTtFQUNFLFVBQUE7QUFSRiIsImZpbGUiOiJwdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLy8gZmlndXJlOmhvdmVyIHtcclxuLy8gICB3aWR0aDogY2FsYygxMDAlICsgMXB4KTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5kaXYuaW1nLWNvbnRhaW5lci50aHVtYm5haWw6aG92ZXIge1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5kaXYgW2NsYXNzPVwiY2VsbC1tZC00XCJdIHtcclxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publications/publications.component */ "GVa1");


class AppComponent {
    constructor() {
        this.title = 'Publications';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-publications");
    } }, directives: [_publications_publications_component__WEBPACK_IMPORTED_MODULE_1__["PublicationsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _publication_publication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publication/publication.component */ "BxYy");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publications/publications.component */ "GVa1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");





// ADDED


class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _publication_publication_component__WEBPACK_IMPORTED_MODULE_3__["PublicationComponent"],
        _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__["PublicationsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();


/***/ }),

/***/ "lUK6":
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProcessHTTPMsgService {
    constructor() { }
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    }
}
ProcessHTTPMsgService.ɵfac = function ProcessHTTPMsgService_Factory(t) { return new (t || ProcessHTTPMsgService)(); };
ProcessHTTPMsgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProcessHTTPMsgService, factory: ProcessHTTPMsgService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mI4i":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
const baseURL = 'http://localhost:3000/';


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wzbf":
/*!*************************************************!*\
  !*** ./src/app/services/publication.service.ts ***!
  \*************************************************/
/*! exports provided: PublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationService", function() { return PublicationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "mI4i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "lUK6");






class PublicationService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getPublications() {
        return this.http.get('https://vitmfs.github.io/assets/publications_db.json' /*baseURL + 'Publications'*/)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    // https://localhost:44373/api/EmployeeGeofences
    getEmployeeGeofences() {
        const employeeGeofencesUrlEndpoint = 'https://localhost:44373/api/EmployeeGeofences';
        return this.http.get(employeeGeofencesUrlEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getRosterGeofences() {
        const rosterGeofencesUrlEndpoint = 'https://localhost:44373/api/RosterGeofences';
        return this.http.get(rosterGeofencesUrlEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getEmployeeGeofence() {
        return this.http.get('https://localhost/QualityOfLifePortalAPI/api/employeegeofences/getemployeegeofence?employeeCode=3&startDate=2012-06-21%2010%3A34%3A09.000&geofenceID=3')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getRosterGeofence() {
        return this.http.get('https://localhost/QualityOfLifePortalAPI/api/rostergeofences/getrostergeofence?rosterCode=2&startDate=2012-06-20%2010%3A34%3A09.000&geofenceID=2')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    postEmployeeGeofence(employeeGeofenceToPost) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify({
            "employeeCode": 26,
            "startDate": "2021-07-22T15:22:47.128Z",
            "endDate": "2021-07-22T15:22:47.128Z",
            "geofenceID": 26,
            "timeStamp": "2021-07-22T15:22:47.128Z"
        });
        // alert(body);
        return this.http.post('https://localhost/QualityOfLifePortalAPI/api/employeegeofences/save', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    deleteEmployeeGeofence(employeeGeofenceToPost) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify({
            "employeeCode": 25,
            "startDate": "2021-07-22T15:22:47.128Z",
            "endDate": "2021-07-22T15:22:47.128Z",
            "geofenceID": 25,
            "timeStamp": "2021-07-22T15:22:47.128Z"
        });
        // alert(body);
        return this.http.post('https://localhost/QualityOfLifePortalAPI/api/employeegeofences/delete?employeeCode=25&startDate=2021-07-22%2015%3A22%3A47.127&geofenceID=25', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    postRosterGeofence(rosterGeofenceToPost) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify({
            "RosterCode": 27,
            "StartDate": "2021-07-23T11:10:08.181Z",
            "EndDate": "2021-07-23T11:10:08.181Z",
            "GeofenceID": 27,
            "TimeStamp": "2021-07-23T11:10:08.181Z",
            "Timestamp": "2021-07-23T11:10:08.181Z"
        });
        // alert(body);
        return this.http.post('https://localhost/QualityOfLifePortalAPI/api/rostergeofences/save', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    deleteRosterGeofence(rosterGeofenceToPost) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify({
            "RosterCode": 10,
            "StartDate": "2021-07-23T11:10:08.181Z",
            "EndDate": "2021-07-23T11:10:08.181Z",
            "GeofenceID": 10,
            "TimeStamp": "2021-07-23T11:10:08.181Z",
            "Timestamp": "2021-07-23T11:10:08.181Z"
        });
        // alert(body);
        return this.http.post('https://localhost/QualityOfLifePortalAPI/api/rostergeofences/delete?rosterCode=10&startDate=2021-07-23%2011%3A10%3A08.180&geofenceID=10', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    // getTodoItems(): Observable<TodoItem[]> {
    //   return this.http.get<TodoItem[]>('https://localhost:44304/api/TodoItems')
    //     .pipe(catchError(this.processHTTPMsgService.handleError));
    // }
    postPublication(publicationToPost) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify(publicationToPost);
        // alert(body);
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'publications/', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    postTodoItem(todoItemToPost) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify(todoItemToPost);
        // alert(body);
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'new_publications/', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
    putPublication(publicationToPut) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify(publicationToPut);
        alert(body);
        return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'publications/13', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHTTPMsgService.handleError));
    }
}
PublicationService.ɵfac = function PublicationService_Factory(t) { return new (t || PublicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"])); };
PublicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PublicationService, factory: PublicationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map