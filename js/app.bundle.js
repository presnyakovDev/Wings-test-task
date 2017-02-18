/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const angular = __webpack_require__(1);
	const MenuComponent_1 = __webpack_require__(2);
	const MenuItemComponent_1 = __webpack_require__(4);
	const FakeDataServise_1 = __webpack_require__(7);
	const RootComponent_1 = __webpack_require__(8);
	let app = angular.module("app", []);
	app.component("root", RootComponent_1.default);
	app.component("menuComp", MenuComponent_1.default);
	app.component("menuItem", MenuItemComponent_1.default);
	app.service("FakedataService", FakeDataServise_1.default);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const MenuComponent = {
	    bindings: {
	        items: "<"
	    },
	    controllerAs: "menuVm",
	    template: __webpack_require__(3)
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MenuComponent;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"menu\">\n  <menu-item ng-repeat=\"item in menuVm.items\" item=\"item\"></menu-item>\n</ul>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const MenuItemController_1 = __webpack_require__(5);
	const MenuItemComponent = {
	    bindings: {
	        item: "="
	    },
	    controller: MenuItemController_1.default,
	    controllerAs: "vm",
	    template: __webpack_require__(6)
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MenuItemComponent;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	class MenuItemController {
	    constructor() {
	        this.isSubmenuOpen = false;
	    }
	    showSubMenu() {
	        this.isSubmenuOpen = true;
	    }
	    hideSubMenu() {
	        this.isSubmenuOpen = false;
	        console.log("hide");
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MenuItemController;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<li class=\"menu-item\" role=\"presentation\" ng-mouseover=\"vm.showSubMenu()\" ng-mouseleave=\"vm.hideSubMenu()\">\n  {{vm.item.name}}\n  <ul ng-if=\"vm.isSubmenuOpen\" class=\"sub-menu\">\n    <menu-item ng-repeat=\"item in vm.item.children\" item=\"item\"></menu-item>\n  </ul>\n</li>\n \n";

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	class FakedataService {
	    constructor() {
	        this.data = [
	            { "id": 1, "name": "Jabbercube", "link": "http://usa.gov", children: [
	                    { "id": 4, "name": "Dynabox", "link": "http://timesonline.co.uk", children: [
	                            { "id": 11, "name": "Meevee", "link": "http://flavors.me", children: [] },
	                        ] },
	                    { "id": 5, "name": "Avaveo", "link": "https://prlog.org", children: [
	                            { "id": 12, "name": "Wikizz", "link": "http://comcast.net", children: [] }
	                        ] },
	                ] },
	            { "id": 2, "name": "Skimia", "link": "https://linkedin.com", children: [
	                    { "id": 6, "name": "Voolia", "link": "http://nbcnews.com", children: [
	                            { "id": 13, "name": "Kwideo", "link": "http://imageshack.us", children: [] },
	                            { "id": 14, "name": "Muxo", "link": "http://stanford.edu", children: [] }
	                        ] },
	                    { "id": 7, "name": "Leenti", "link": "https://zimbio.com", children: [
	                            { "id": 15, "name": "Mycat", "link": "https://vimeo.com", children: [
	                                    { "id": 19, "name": "Livetube", "link": "http://dropbox.com", children: [] }
	                                ] }
	                        ] },
	                ] },
	            { "id": 3, "name": "Mybuzz", "link": "https://loc.gov", children: [
	                    { "id": 8, "name": "Topicshots", "link": "http://lycos.com", children: [
	                            { "id": 15, "name": "Mycat", "link": "https://vimeo.com", children: [
	                                    { "id": 20, "name": "Kaymbo", "link": "https://nifty.com", children: [] }
	                                ] }
	                        ] },
	                    { "id": 9, "name": "Skyba", "link": "https://zdnet.com", children: [
	                            { "id": 16, "name": "Buzzshare", "link": "https://yolasite.com", children: [] },
	                            { "id": 17, "name": "Gigazoom", "link": "http://engadget.com", children: [] }
	                        ] },
	                    { "id": 10, "name": "Flashset", "link": "http://harvard.edu", children: [
	                            { "id": 18, "name": "Youspan", "link": "https://google.com.hk", children: [] }
	                        ] },
	                ] }
	        ];
	    }
	    getData() {
	        return this.data;
	    }
	}
	exports.FakedataService = FakedataService;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = FakedataService;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const RootController_1 = __webpack_require__(9);
	const RootComponent = {
	    controller: RootController_1.default,
	    controllerAs: "rootVm",
	    template: '<menu-comp items="rootVm.data"></menu-comp>'
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RootComponent;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	class RootController {
	    constructor(fakedataService) {
	        this.fakedataService = fakedataService;
	        this.data = fakedataService.getData();
	    }
	}
	RootController.$inject = ["FakedataService"];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RootController;


/***/ }
/******/ ]);