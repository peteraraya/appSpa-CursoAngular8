(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container main-container\">\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fadeIn fast\">Sobre Comic App</h1>\n<hr>\n<p class=\"animated fadeIn\">\n\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/buscador/buscador.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/buscador/buscador.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Buscando: <small>{{ termino }}</small></h1>\n<hr>\n\n<div class=\"row animated fadeIn fast\" *ngIf=\"heroes.length == 0\">\n  <div class=\"col-md-12\">\n    <div class=\"alert alert-info\" role=\"alert\">\n      No existen resultados con el término: {{ termino }}\n    </div>\n  </div>\n</div>\n\n\n<div class=\"card-columns\">\n\n  <app-heroe-tarjeta [heroe]=\"foo\" [index]=\"foo.idx\"  *ngFor=\"let foo of heroes\"></app-heroe-tarjeta>\n\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/heroe-tarjeta/heroe-tarjeta.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/heroe-tarjeta/heroe-tarjeta.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\" >\n  <img class=\"card-img-top img-fluid\" [src]=\"heroe.img\" [alt]=\"heroe.nombre\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ heroe.nombre }}</h4>\n    <p class=\"card-text\"> {{ heroe.bio }} </p>\n    <p class=\"card-text\"><small class=\"text-muted\">{{ heroe.aparicion }}</small></p>\n\n    <button (click)=\"verHeroe()\"\n      type=\"button\" class=\"btn btn-outline-primary btn-block\">\n      Ver más...\n    </button>\n    <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/heroe/heroe.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/heroe/heroe.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fadeIn\">{{ heroe.nombre | uppercase }} <small>({{ heroe.aparicion | date:'y' }})</small></h1>\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-4\">\n\n    <img [src]=\"heroe.img\" class=\"img-fluid\" [alt]=\"heroe.nombre\">\n    <br><br>\n    <a [routerLink]=\"['/heroes']\" class=\"btn btn-outline-danger btn-block\">Regresar</a>\n\n  </div>\n\n  <div class=\"col-md-8\">\n    <h3>{{ heroe.nombre }}</h3>\n    <hr>\n    <p>\n      {{ heroe.bio }}\n    </p>\n    <div>\n      <img *ngIf=\"heroe.casa == 'Marvel'\" class=\"img-logo\" src=\"assets/img/marvel-logo.png\" alt=\"DC\">\n      <img *ngIf=\"heroe.casa == 'DC'\" class=\"img-logo\" src=\"assets/img/dc-logo.png\" alt=\"Marvel\">\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/heroes/heroes.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/heroes/heroes.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Héroes <small>Marvel y DC</small></h1>\n<hr>\n\n\n<div class=\"card-columns\">\n\n<!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n  <app-heroe-tarjeta (heroeSeleccionado)=\"verHeroe( $event )\" [heroe]=\"foo\" [index]=\"i\" \n   *ngFor=\"let foo of heroes; let i = index\"></app-heroe-tarjeta>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid animated fadeIn fast\">\n\n  <div class=\"container\">\n    <h1 class=\"display-3\">Comic App</h1>\n    <p class=\"lead\">Esta es una aplicación de comics.</p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/img/A-64.png\" width=\"30\" height=\"30\" alt=\"\">\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <!-- active -->\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['heroes']\">Heroes</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['about']\">About</a>\n      </li>\n    </ul>\n\n\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar héroe\" (keypress)=\"buscarHeroe(buscarTexto.value)\" #buscarTexto>\n      <button (click)=\"buscarHeroe(buscarTexto.value)\"\n          class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"button\">Buscar</button>\n    </form>\n\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app works!';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios/heroes.service */ "./src/app/servicios/heroes.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
/* harmony import */ var _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/heroe/heroe.component */ "./src/app/components/heroe/heroe.component.ts");
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");
/* harmony import */ var _components_heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/heroe-tarjeta/heroe-tarjeta.component */ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.ts");




// Rutas

// Servicios

// Componentes








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__["HeroesComponent"],
            _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_11__["HeroeComponent"],
            _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_12__["BuscadorComponent"],
            _components_heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_13__["HeroeTarjetaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"]
        ],
        providers: [
            _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_5__["HeroesService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
/* harmony import */ var _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/heroe/heroe.component */ "./src/app/components/heroe/heroe.component.ts");
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");






const APP_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'heroes', component: _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'heroe/:id', component: _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__["HeroeComponent"] },
    { path: 'buscar/:termino', component: _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_5__["BuscadorComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/buscador/buscador.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.ts ***!
  \***********************************************************/
/*! exports provided: BuscadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorComponent", function() { return BuscadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/heroes.service */ "./src/app/servicios/heroes.service.ts");




let BuscadorComponent = class BuscadorComponent {
    constructor(activatedRoute, _heroesService) {
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.heroes = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.termino = params['termino'];
            this.heroes = this._heroesService.buscarHeroes(params['termino']);
            // console.log( this.heroes );
        });
    }
};
BuscadorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_3__["HeroesService"] }
];
BuscadorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buscador',
        template: __webpack_require__(/*! raw-loader!./buscador.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/buscador/buscador.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_3__["HeroesService"]])
], BuscadorComponent);



/***/ }),

/***/ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/heroe-tarjeta/heroe-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVyb2UtdGFyamV0YS9oZXJvZS10YXJqZXRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/heroe-tarjeta/heroe-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeroeTarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeTarjetaComponent", function() { return HeroeTarjetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeroeTarjetaComponent = class HeroeTarjetaComponent {
    constructor(router) {
        this.router = router;
        this.heroe = {};
        this.heroeSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    verHeroe() {
        // console.log(  this.index );
        this.router.navigate(['/heroe', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    }
};
HeroeTarjetaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeroeTarjetaComponent.prototype, "heroe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], HeroeTarjetaComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], HeroeTarjetaComponent.prototype, "heroeSeleccionado", void 0);
HeroeTarjetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heroe-tarjeta',
        template: __webpack_require__(/*! raw-loader!./heroe-tarjeta.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/heroe-tarjeta/heroe-tarjeta.component.html"),
        styles: [__webpack_require__(/*! ./heroe-tarjeta.component.css */ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HeroeTarjetaComponent);



/***/ }),

/***/ "./src/app/components/heroe/heroe.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/heroe/heroe.component.ts ***!
  \*****************************************************/
/*! exports provided: HeroeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeComponent", function() { return HeroeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/heroes.service */ "./src/app/servicios/heroes.service.ts");




let HeroeComponent = class HeroeComponent {
    constructor(activatedRoute, _heroesService) {
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.heroe = {};
        this.activatedRoute.params.subscribe(params => {
            this.heroe = this._heroesService.getHeroe(params['id']);
            // console.log(this.heroe);
        });
    }
};
HeroeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_3__["HeroesService"] }
];
HeroeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heroe',
        template: __webpack_require__(/*! raw-loader!./heroe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/heroe/heroe.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_3__["HeroesService"]])
], HeroeComponent);



/***/ }),

/***/ "./src/app/components/heroes/heroes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.ts ***!
  \*******************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/heroes.service */ "./src/app/servicios/heroes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeroesComponent = class HeroesComponent {
    constructor(_heroesService, router) {
        this._heroesService = _heroesService;
        this.router = router;
        this.heroes = [];
        // console.log("constructor");
    }
    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
        // console.log( this.heroes );
    }
    verHeroe(idx) {
        this.router.navigate(['/heroe', idx]);
    }
};
HeroesComponent.ctorParameters = () => [
    { type: _servicios_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heroes',
        template: __webpack_require__(/*! raw-loader!./heroes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/heroes/heroes.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HeroesComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    buscarHeroe(termino) {
        // console.log(termino);
        this.router.navigate(['/buscar', termino]);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/servicios/heroes.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/heroes.service.ts ***!
  \*********************************************/
/*! exports provided: HeroesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesService", function() { return HeroesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeroesService = class HeroesService {
    constructor() {
        this.heroes = [
            {
                nombre: "Aquaman",
                bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
                img: "assets/img/aquaman.png",
                aparicion: "1941-11-01",
                casa: "DC"
            },
            {
                nombre: "Batman",
                bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
                img: "assets/img/batman.png",
                aparicion: "1939-05-01",
                casa: "DC"
            },
            {
                nombre: "Daredevil",
                bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
                img: "assets/img/daredevil.png",
                aparicion: "1964-01-01",
                casa: "Marvel"
            },
            {
                nombre: "Hulk",
                bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
                img: "assets/img/hulk.png",
                aparicion: "1962-05-01",
                casa: "Marvel"
            },
            {
                nombre: "Linterna Verde",
                bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
                img: "assets/img/linterna-verde.png",
                aparicion: "1940-06-01",
                casa: "DC"
            },
            {
                nombre: "Spider-Man",
                bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
                img: "assets/img/spiderman.png",
                aparicion: "1962-08-01",
                casa: "Marvel"
            },
            {
                nombre: "Wolverine",
                bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
                img: "assets/img/wolverine.png",
                aparicion: "1974-11-01",
                casa: "Marvel"
            }
        ];
        //console.log("Servicio listo para usar!!!");
    }
    getHeroes() {
        return this.heroes;
    }
    getHeroe(idx) {
        return this.heroes[idx];
    }
    buscarHeroes(termino) {
        let heroesArr = [];
        termino = termino.toLowerCase();
        for (let i = 0; i < this.heroes.length; i++) {
            let heroe = this.heroes[i];
            let nombre = heroe.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                heroe.idx = i;
                heroesArr.push(heroe);
            }
        }
        return heroesArr;
    }
};
HeroesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeroesService);

;


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
const environment = {
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PeterZipek\Documents\MEGA\00-Cursos\Angular8\02-spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map