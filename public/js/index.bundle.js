/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webgl_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/App */ \"./ts/webgl/App.ts\");\n\n\nvar index = function index() {\n  new _webgl_App__WEBPACK_IMPORTED_MODULE_0__[\"App\"]('.canvas-wrapper');\n};\n\nindex();\n\n//# sourceURL=webpack:///./ts/index.ts?");

/***/ }),

/***/ "./ts/webgl/App.ts":
/*!*************************!*\
  !*** ./ts/webgl/App.ts ***!
  \*************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _objects_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/Grid */ \"./ts/webgl/objects/Grid.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.canvas-wrapper';\n\n    _classCallCheck(this, App);\n\n    _defineProperty(this, \"canvasElement\", void 0);\n\n    _defineProperty(this, \"viewProps\", void 0);\n\n    _defineProperty(this, \"renderer\", void 0);\n\n    _defineProperty(this, \"scene\", void 0);\n\n    _defineProperty(this, \"camera\", void 0);\n\n    _defineProperty(this, \"grid\", void 0);\n\n    _defineProperty(this, \"clock\", void 0);\n\n    _defineProperty(this, \"time\", void 0);\n\n    _defineProperty(this, \"controls\", void 0);\n\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGL1Renderer\"]({\n      antialias: true\n    });\n    var canvasWrapper = document.querySelector(selector);\n    canvasWrapper.append(this.renderer.domElement);\n    this.viewProps = {\n      width: this.renderer.domElement.clientWidth,\n      height: this.renderer.domElement.clientHeight,\n      dpr: Math.min(devicePixelRatio, 2 || false)\n    };\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, this.viewProps.width / this.viewProps.height, 1, 1000);\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n    this.grid = new _objects_Grid__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"](1000, 300, 100);\n    this.time = 0;\n    this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](this.camera, this.renderer.domElement);\n    this.init();\n    this.bind();\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render(deltaTime) {\n      this.time = deltaTime;\n      this.controls.update();\n      this.grid.update(deltaTime);\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      console.log('animate');\n      var deltaTime = this.clock.getDelta();\n      this.render(deltaTime);\n      requestAnimationFrame(this.animate.bind(this));\n    } // renderLoop() {\n    //   this.render();\n    // }\n\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      console.log('resize');\n      this.renderer.domElement.style.width = '100vw';\n      this.renderer.domElement.style.height = '300px';\n      var width = this.renderer.domElement.clientWidth;\n      var height = this.renderer.domElement.clientHeight;\n      this.renderer.domElement.width = width;\n      this.renderer.domElement.height = height;\n      this.viewProps.width = width;\n      this.viewProps.height = height;\n      this.renderer.setSize(width, height);\n      this.camera.aspect = width / height;\n      this.camera.updateProjectionMatrix();\n    }\n  }, {\n    key: \"bind\",\n    value: function bind() {\n      window.addEventListener('resize', this.resize.bind(this));\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.renderer.setPixelRatio(this.viewProps.dpr);\n      this.renderer.setClearColor(0x000000, 1.0);\n      this.resize();\n      this.controls.enableDamping = true;\n      this.controls.dampingFactor = 0.1; // this.canvasElement.width = this.canvasElement;\n      // this.renderer.domElement.height = this.viewProps.height;\n\n      this.grid.object.position.x = 0;\n      this.grid.object.position.z = 0;\n      this.scene.add(this.grid.object);\n      this.camera.position.x = 0;\n      this.camera.position.y = 0;\n      this.camera.position.z = 200;\n      this.clock.start();\n      this.animate();\n    }\n  }]);\n\n  return App;\n}();\n\n//# sourceURL=webpack:///./ts/webgl/App.ts?");

/***/ }),

/***/ "./ts/webgl/geometry/PointBufferGeometry.ts":
/*!**************************************************!*\
  !*** ./ts/webgl/geometry/PointBufferGeometry.ts ***!
  \**************************************************/
/*! exports provided: PointBufferGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PointBufferGeometry\", function() { return PointBufferGeometry; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice */ \"./node_modules/core-js/modules/es.array-buffer.slice.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ \"./node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ \"./node_modules/core-js/modules/es.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.float32-array */ \"./node_modules/core-js/modules/es.typed-array.float32-array.js\");\n/* harmony import */ var core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within */ \"./node_modules/core-js/modules/es.typed-array.copy-within.js\");\n/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.every */ \"./node_modules/core-js/modules/es.typed-array.every.js\");\n/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill */ \"./node_modules/core-js/modules/es.typed-array.fill.js\");\n/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter */ \"./node_modules/core-js/modules/es.typed-array.filter.js\");\n/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.find */ \"./node_modules/core-js/modules/es.typed-array.find.js\");\n/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index */ \"./node_modules/core-js/modules/es.typed-array.find-index.js\");\n/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each */ \"./node_modules/core-js/modules/es.typed-array.for-each.js\");\n/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes */ \"./node_modules/core-js/modules/es.typed-array.includes.js\");\n/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of */ \"./node_modules/core-js/modules/es.typed-array.index-of.js\");\n/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator */ \"./node_modules/core-js/modules/es.typed-array.iterator.js\");\n/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.join */ \"./node_modules/core-js/modules/es.typed-array.join.js\");\n/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of */ \"./node_modules/core-js/modules/es.typed-array.last-index-of.js\");\n/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.map */ \"./node_modules/core-js/modules/es.typed-array.map.js\");\n/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce */ \"./node_modules/core-js/modules/es.typed-array.reduce.js\");\n/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right */ \"./node_modules/core-js/modules/es.typed-array.reduce-right.js\");\n/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse */ \"./node_modules/core-js/modules/es.typed-array.reverse.js\");\n/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.set */ \"./node_modules/core-js/modules/es.typed-array.set.js\");\n/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice */ \"./node_modules/core-js/modules/es.typed-array.slice.js\");\n/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_29__);\n/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.some */ \"./node_modules/core-js/modules/es.typed-array.some.js\");\n/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_30__);\n/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort */ \"./node_modules/core-js/modules/es.typed-array.sort.js\");\n/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_31__);\n/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray */ \"./node_modules/core-js/modules/es.typed-array.subarray.js\");\n/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_32__);\n/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string */ \"./node_modules/core-js/modules/es.typed-array.to-locale-string.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_33__);\n/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string */ \"./node_modules/core-js/modules/es.typed-array.to-string.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_34__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_35__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar PointBufferGeometry = /*#__PURE__*/function (_THREE$BufferGeometry) {\n  _inherits(PointBufferGeometry, _THREE$BufferGeometry);\n\n  var _super = _createSuper(PointBufferGeometry);\n\n  function PointBufferGeometry(size, rowNums, columnNums) {\n    var _this;\n\n    _classCallCheck(this, PointBufferGeometry);\n\n    _this = _super.call(this);\n    _this.size = size;\n    _this.rowNums = rowNums;\n    _this.columnNums = columnNums;\n    console.log(_this.rowNums);\n    console.log(_this.columnNums);\n\n    _this.createParams(rowNums, columnNums);\n\n    _this.computeVertexNormals();\n\n    return _this;\n  }\n\n  _createClass(PointBufferGeometry, [{\n    key: \"createParams\",\n    value: function createParams(rowNums, columnNums) {\n      var position = [];\n      var colors = [];\n      var dotSize = [];\n      var indices = [];\n\n      for (var i = 1; i <= rowNums; i++) {\n        for (var j = 1; j <= columnNums; j++) {\n          var x = 0;\n          var y = 0;\n          var z = 0;\n          position.push(x, y, z);\n          var _size = 1;\n          dotSize.push(_size);\n          var rowIndex = i - 1;\n          var columnIndex = j - 1; // const rowIndex = (i - 1) / this.size;\n          // const columnIndex = (j - 1) / this.size;\n\n          indices.push(rowIndex, columnIndex);\n        }\n      }\n\n      console.log(indices);\n      this.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_36__[\"BufferAttribute\"](new Float32Array(position), 3));\n      this.setAttribute('dotSize', new three__WEBPACK_IMPORTED_MODULE_36__[\"BufferAttribute\"](new Float32Array(dotSize), 1));\n      this.setAttribute('indices', new three__WEBPACK_IMPORTED_MODULE_36__[\"BufferAttribute\"](new Float32Array(indices), 2));\n    }\n  }]);\n\n  return PointBufferGeometry;\n}(three__WEBPACK_IMPORTED_MODULE_36__[\"BufferGeometry\"]);\n\n//# sourceURL=webpack:///./ts/webgl/geometry/PointBufferGeometry.ts?");

/***/ }),

/***/ "./ts/webgl/objects/Grid.ts":
/*!**********************************!*\
  !*** ./ts/webgl/objects/Grid.ts ***!
  \**********************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _geometry_PointBufferGeometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/PointBufferGeometry */ \"./ts/webgl/geometry/PointBufferGeometry.ts\");\n/* harmony import */ var _shaders_grid_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaders/grid.vert */ \"./ts/webgl/shaders/grid.vert\");\n/* harmony import */ var _shaders_grid_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaders/grid.frag */ \"./ts/webgl/shaders/grid.frag\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Grid = /*#__PURE__*/function () {\n  function Grid(size, rowNums, columnNums) {\n    _classCallCheck(this, Grid);\n\n    _defineProperty(this, \"time\", void 0);\n\n    _defineProperty(this, \"object\", void 0);\n\n    _defineProperty(this, \"size\", void 0);\n\n    _defineProperty(this, \"rowNums\", void 0);\n\n    _defineProperty(this, \"columnNums\", void 0);\n\n    this.time = 0;\n    this.size = size;\n    this.rowNums = rowNums;\n    this.columnNums = columnNums;\n    this.object = this.createMesh();\n    console.log(this.object.material);\n  }\n\n  _createClass(Grid, [{\n    key: \"update\",\n    value: function update(deltaTime) {\n      this.time += deltaTime;\n      this.object.material.uniforms.time.value = this.time;\n    }\n  }, {\n    key: \"createGeometry\",\n    value: function createGeometry() {\n      var geometry = new _geometry_PointBufferGeometry__WEBPACK_IMPORTED_MODULE_1__[\"PointBufferGeometry\"](this.size, this.rowNums, this.columnNums);\n      return geometry;\n    }\n  }, {\n    key: \"createMaterial\",\n    value: function createMaterial() {\n      var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"RawShaderMaterial\"]({\n        vertexShader: _shaders_grid_vert__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        fragmentShader: _shaders_grid_frag__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        uniforms: {\n          time: {\n            type: 'f',\n            value: this.time\n          },\n          width: {\n            type: 'f',\n            value: this.size\n          },\n          rowNums: {\n            type: 'f',\n            value: this.rowNums\n          },\n          columnNums: {\n            type: 'f',\n            value: this.columnNums\n          }\n        },\n        side: three__WEBPACK_IMPORTED_MODULE_0__[\"DoubleSide\"]\n      });\n      return material;\n    }\n  }, {\n    key: \"createMesh\",\n    value: function createMesh() {\n      var geometry = this.createGeometry();\n      var material = this.createMaterial();\n      var mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Points\"](geometry, material);\n      return mesh;\n    }\n  }]);\n\n  return Grid;\n}();\n\n//# sourceURL=webpack:///./ts/webgl/objects/Grid.ts?");

/***/ }),

/***/ "./ts/webgl/shaders/grid.frag":
/*!************************************!*\
  !*** ./ts/webgl/shaders/grid.frag ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\n#define GLSLIFY 1\\nuniform float time;\\nvarying vec2 vIndices;\\nvarying vec3 vPosition;\\n\\nvec4 dotForm(vec2 centeredCoord, float size) {\\n  float len = length(centeredCoord);\\n  vec4 form = len <= size ? vec4(1.0, 1.0, 1.0, 1.0) : vec4(0.0, 0.0, 0.0, 0.0);\\n  return form;\\n}\\n\\nvoid main() {\\n  vec2 coord = gl_PointCoord;\\n  vec2 centeredCoord = vec2((coord.x * 2.0 - 1.0) / 2.0, (coord.y * 2.0 - 1.0) / 2.0);\\n  vec4 circle = dotForm(centeredCoord, 0.5);\\n  vec4 distColor = circle * vec4(vIndices, 1.0, 1.0);\\n\\n  if(distColor.a == 0.0) {\\n    discard;\\n  } else {\\n    gl_FragColor = distColor;\\n  }\\n}\\n\");\n\n//# sourceURL=webpack:///./ts/webgl/shaders/grid.frag?");

/***/ }),

/***/ "./ts/webgl/shaders/grid.vert":
/*!************************************!*\
  !*** ./ts/webgl/shaders/grid.vert ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nattribute vec3 position;\\nattribute vec3 normal;\\nattribute vec2 indices;\\nattribute float dotSize;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 projectionMatrix;\\n// uniform vec2 u_resolution;\\nuniform float time;\\nuniform float width;\\nuniform float rowNums;\\nuniform float columnNums;\\n\\nvarying vec3 vPosition;\\nvarying vec2 vIndices;\\n// varying vec2 resolution;\\n\\nfloat RATIO = 4.0;\\nfloat SEPARATION = RATIO / 2.0;\\nfloat PI = 3.14;\\n\\n//\\n// Description : Array and textureless GLSL 2D simplex noise function.\\n//      Author : Ian McEwan, Ashima Arts.\\n//  Maintainer : ijm\\n//     Lastmod : 20110822 (ijm)\\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\\n//               Distributed under the MIT License. See LICENSE file.\\n//               https://github.com/ashima/webgl-noise\\n//\\n\\nvec3 mod289(vec3 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec2 mod289(vec2 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec3 permute(vec3 x) {\\n  return mod289(((x*34.0)+1.0)*x);\\n}\\n\\nfloat snoise(vec2 v)\\n  {\\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\\n                      0.024390243902439); // 1.0 / 41.0\\n// First corner\\n  vec2 i  = floor(v + dot(v, C.yy) );\\n  vec2 x0 = v -   i + dot(i, C.xx);\\n\\n// Other corners\\n  vec2 i1;\\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\\n  //i1.y = 1.0 - i1.x;\\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\\n  // x1 = x0 - i1 + 1.0 * C.xx ;\\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\\n  vec4 x12 = x0.xyxy + C.xxzz;\\n  x12.xy -= i1;\\n\\n// Permutations\\n  i = mod289(i); // Avoid truncation effects in permutation\\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\\n    + i.x + vec3(0.0, i1.x, 1.0 ));\\n\\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\\n  m = m*m ;\\n  m = m*m ;\\n\\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\\n\\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\\n  vec3 h = abs(x) - 0.5;\\n  vec3 ox = floor(x + 0.5);\\n  vec3 a0 = x - ox;\\n\\n// Normalise gradients implicitly by scaling m\\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\\n\\n// Compute final noise value at P\\n  vec3 g;\\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\\n  return 130.0 * dot(m, g);\\n}\\n\\nvec3 rotate(vec3 p, float angle, vec3 axis){\\n    vec3 a = normalize(axis);\\n    float s = sin(angle);\\n    float c = cos(angle);\\n    float r = 1.0 - c;\\n    mat3 m = mat3(\\n        a.x * a.x * r + c,\\n        a.y * a.x * r + a.z * s,\\n        a.z * a.x * r - a.y * s,\\n        a.x * a.y * r - a.z * s,\\n        a.y * a.y * r + c,\\n        a.z * a.y * r + a.x * s,\\n        a.x * a.z * r + a.y * s,\\n        a.y * a.z * r - a.x * s,\\n        a.z * a.z * r + c\\n    );\\n    return m * p;\\n}\\n\\nvec3 waveForm(vec3 originalPosition, float noise) {\\n  vec3 pos = originalPosition;\\n  pos.x = indices.x * SEPARATION - ( rowNums * SEPARATION ) / 2.0 ;\\n  pos.y = cos(noise * 20.0 + pos.x * pos.y + time * 2.5) * 10.0;\\n  pos.z = indices.y * SEPARATION * 2.0 - ( columnNums *  SEPARATION * 2.0) / 2.0 ;\\n  return pos;\\n}\\n\\nvec3 sphereForm(vec3 originalPosition, float r) {\\n  vec3 pos = originalPosition;\\n  float rad1 = radians(indices.x / rowNums * 360.0);\\n  float rad2 = radians(indices.y / columnNums * 360.0);\\n  pos.x = cos(rad1) * cos(rad2) * r;\\n  pos.y = cos(rad1) * sin(rad2) * r;\\n  pos.z = sin(rad1) * r;\\n\\n  vec3 distPos = rotate(pos, radians(time * 100.0), vec3(0.0, 1.0, 0.0));\\n  return distPos;\\n}\\n\\nvoid main() {\\n  // float now = max(0.0, time);\\n  vec3 pos = position;\\n  vec2 normalizedIndices = vec2(indices.x / rowNums, indices.y / columnNums);\\n  // float noise = 1.0;\\n  float noise = snoise(normalizedIndices);\\n  float pointSize = dotSize * RATIO;\\n\\n  vec3 wavePosition = waveForm(pos,noise);\\n  vec3 spherePosition = sphereForm(pos, 50.0);\\n  float mixFactor = (clamp(15.0 * cos((time + normalizedIndices.x * normalizedIndices.y / 0.8) / 5.0 ), -1.0, 1.0) + 1.0 ) / 2.0;\\n  // float mixFactor = (clamp(15.0 * cos((time ) / 2.5 ), -1.0, 1.0) + 1.0 ) / 2.0;\\n  vec3 distPosition = mix(spherePosition, wavePosition, mixFactor);\\n\\n  vec4 mvPosition = modelViewMatrix * vec4( distPosition, 1.0 );\\n\\n  gl_PointSize = pointSize * ( (50.0 + 50.0 * mixFactor ) / - mvPosition.z ) ;\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(distPosition , 1.0 );\\n  vIndices = vec2(indices.x / rowNums, indices.y / columnNums);\\n  vPosition = distPosition;\\n  // gl_PointSize = size * 300.0;\\n}\\n\");\n\n//# sourceURL=webpack:///./ts/webgl/shaders/grid.vert?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./ts/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/rei.matsuda/workSpace/git/webGl/simplex-grid-system/resources/ts/index.ts */\"./ts/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./ts/index.ts?");

/***/ })

/******/ });