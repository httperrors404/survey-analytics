/*!
 * surveyjs - SurveyJS Analytics library v1.8.68
 * Copyright (c) 2015-2021 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalyticsDatatables", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalyticsDatatables"] = factory(require("survey-core"));
	else
		root["SurveyAnalyticsDatatables"] = factory(root["Survey"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_survey_core__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/datatables.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/svgbundle.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-detail\"><circle cx=\"1.5\" cy=\"8.5\" r=\"1.5\"></circle><circle cx=\"7.5\" cy=\"8.5\" r=\"1.5\"></circle><circle cx=\"13.5\" cy=\"8.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-drag\"><path d=\"M13 5l-1 1 1 1H9V3l1 1 1-1-3-3-3 3 1 1 1-1v4H3l1-1-1-1-3 3 3 3 1-1-1-1h4v4l-1-1-1 1 3 3 3-3-1-1-1 1V9h4l-1 1 1 1 3-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-hide\"><path d=\"M12.79 4.2L16 1l-1-1-3.32 3.32C10.57 2.55 9.32 2 8 2 3.63 2 0 7.97 0 7.97s1.27 2.1 3.21 3.82l-3.23 3.23.98.98 3.35-3.34C5.41 13.44 6.67 14 8 14c4.37 0 8-6 8-6s-1.27-2.09-3.21-3.8zM2 7.97c1.07-1.47 3.61-4 6-4 .8 0 1.6.27 2.35.68l-.78.78c-.46-.29-.99-.46-1.57-.46-1.66 0-3 1.34-3 3 0 .58.17 1.11.46 1.57l-.97.97A13.38 13.38 0 0 1 2 7.97zm6 4c-.8 0-1.59-.27-2.33-.67l.78-.77c.45.27.98.44 1.55.44 1.66 0 3-1.34 3-3 0-.57-.17-1.09-.44-1.55l.98-.98c1.11.87 2.01 1.91 2.46 2.52-1.07 1.48-3.61 4.01-6 4.01z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makeprivate\"><circle cx=\"8\" cy=\"4\" r=\"3\"></circle><path d=\"M8 8c-3.31 0-6 2.73-6 4.67S5.27 15 8 15s6-.4 6-2.33S11.31 8 8 8z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makepublic\"><circle cx=\"6\" cy=\"5\" r=\"3\"></circle><path d=\"M10 5c0 .34-.06.67-.14.99.05 0 .09.01.14.01 1.66 0 3-1.34 3-3s-1.34-3-3-3C8.97 0 8.07.52 7.53 1.3 8.98 1.91 10 3.33 10 5zM6 9c-3.31 0-6 2.73-6 4.67S3.27 16 6 16s6-.4 6-2.33S9.31 9 6 9zM10 7c-.19 0-.38.01-.57.03a4.14 4.14 0 0 1-1.37 1.39c3 .83 5.23 3.31 5.42 5.28 1.44-.31 2.52-.92 2.52-2.03C16 9.74 13.31 7 10 7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-movetodetails\"><circle cx=\"1.5\" cy=\"14.5\" r=\"1.5\"></circle><circle cx=\"7.5\" cy=\"14.5\" r=\"1.5\"></circle><circle cx=\"13.5\" cy=\"14.5\" r=\"1.5\"></circle><path d=\"M12 1h3v9h-3zM2.02 7.02L1 6 0 7l3 3 3-3-1-1-.94.94C4.33 4.73 6.21 3 8.5 3c.17 0 .33.03.5.05V1.03C8.83 1.01 8.67 1 8.5 1 5.08 1 2.27 3.66 2.02 7.02z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-noncommercial\"><path d=\"M8 0L0 15h16L8 0zm1 13H7v-2h2v2zm-2-3V5h2v5H7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-sorting\"><path d=\"M8 3l2 2 1-1-3-3-3 3 1 1zM8 13l-2-2-1 1 3 3 3-3-1-1z\"></path></symbol></svg>";

/***/ }),

/***/ "./src/entries/datatables.ts":
/*!***********************************!*\
  !*** ./src/entries/datatables.ts ***!
  \***********************************/
/*! exports provided: localization, surveyStrings, Table, TableRow, DataTables, DatatablesRow, TableExtensions, DocumentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return _localizationManager__WEBPACK_IMPORTED_MODULE_0__["surveyStrings"]; });

/* harmony import */ var _localization_farsi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localization/farsi */ "./src/localization/farsi.ts");
/* harmony import */ var _localization_french__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization/french */ "./src/localization/french.ts");
/* harmony import */ var _localization_norwegian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localization/norwegian */ "./src/localization/norwegian.ts");
/* harmony import */ var _localization_portuguese__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localization/portuguese */ "./src/localization/portuguese.ts");
/* harmony import */ var _localization_russian__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localization/russian */ "./src/localization/russian.ts");
/* harmony import */ var _localization_dutch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localization/dutch */ "./src/localization/dutch.ts");
/* harmony import */ var _localization_korean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../localization/korean */ "./src/localization/korean.ts");
/* harmony import */ var _tables_extensions_rowextensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/extensions/rowextensions */ "./src/tables/extensions/rowextensions.ts");
/* harmony import */ var _tables_extensions_headerextensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/extensions/headerextensions */ "./src/tables/extensions/headerextensions.ts");
/* harmony import */ var _tables_extensions_columnextensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tables/extensions/columnextensions */ "./src/tables/extensions/columnextensions.ts");
/* harmony import */ var _tables_extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tables/extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _tables_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tables/table */ "./src/tables/table.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _tables_table__WEBPACK_IMPORTED_MODULE_12__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return _tables_table__WEBPACK_IMPORTED_MODULE_12__["TableRow"]; });

/* harmony import */ var _tables_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tables/datatables */ "./src/tables/datatables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return _tables_datatables__WEBPACK_IMPORTED_MODULE_13__["DatatablesRow"]; });

/* harmony import */ var _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tables/extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return _tables_extensions_tableextensions__WEBPACK_IMPORTED_MODULE_14__["TableExtensions"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_15__["DocumentHelper"]; });


//localization







//extensions










/***/ }),

/***/ "./src/localization/dutch.ts":
/*!***********************************!*\
  !*** ./src/localization/dutch.ts ***!
  \***********************************/
/*! exports provided: dutchStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dutchStrings", function() { return dutchStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
//Uncomment this line on creating a translation file

var dutchStrings = {
    groupButton: "Groep door mij",
    ungroupButton: "Degroeperen bij mij",
    selectButton: "Selecteer mij",
    hideColumn: "Kolom verbergen",
    showColumn: "Toon kolom",
    makePrivateColumn: "Kolom privé maken",
    makePublicColumn: "Maak de kolom openbaar",
    moveToDetail: "Ga naar Detail",
    showAsColumn: "Weergeven als kolom",
    filterPlaceholder: "Zoeken...",
    removeRows: "Verwijder rijen",
    showLabel: "Tonen",
    entriesLabel: "inzendingen",
    visualizer_text: "Teksten in tabel",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Gestapelde Bar",
    chartType_doughnut: "Donut",
    chartType_pie: "Taart",
    chartType_scatter: "Verstrooien",
    chartType_gauge: "Meter",
    chartType_bullet: "Kogel",
    hideButton: "Verbergen",
    makePrivateButton: "Maak prive",
    makePublicButton: "Openbaar maken",
    showButton: "Tonen",
    resetFilter: "Filter resetten",
    changeLocale: "Wijzig de landinstelling",
    clearButton: "Doorzichtig",
    addElement: "Kies een vraag om weer te geven ...",
    defaultOrder: "Standaardvolgorde",
    ascOrder: "Oplopend",
    descOrder: "Aflopend",
    showMinorColumns: "Toon kleine kolommen",
    otherCommentTitle: "Andere items en opmerkingen",
    showPercentages: "Percentages weergeven",
    hidePercentages: "Verberg percentages",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "Download plot als een png",
    hideEmptyAnswers: "Verberg lege antwoorden",
    showEmptyAnswers: "Toon lege antwoorden",
    "topNValueText-1": "Alle antwoorden",
    "topNValueText5": "Top 5 antwoorden",
    "topNValueText10": "Top 10 antwoorden",
    "topNValueText20": "Top 20 antwoorden",
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["nl"] = dutchStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["nl"] = "Dutch";


/***/ }),

/***/ "./src/localization/english.ts":
/*!*************************************!*\
  !*** ./src/localization/english.ts ***!
  \*************************************/
/*! exports provided: englishStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "englishStrings", function() { return englishStrings; });
//Uncomment this line on creating a translation file
//import { localization } from "../localizationManager";
var englishStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    makePrivateColumn: "Make column private",
    makePublicColumn: "Make column public",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column",
    filterPlaceholder: "Search...",
    removeRows: "Remove rows",
    showLabel: "Show",
    entriesLabel: "entries",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Hide",
    makePrivateButton: "Make private",
    makePublicButton: "Make public",
    showButton: "Show",
    filter: "Filter",
    resetFilter: "Reset Filter",
    changeLocale: "Change Locale",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default Order",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Other items and comments",
    showPercentages: "Show percentages",
    hidePercentages: "Hide percentages",
    pdfDownloadCaption: "PDF",
    xlsxDownloadCaption: "Excel",
    csvDownloadCaption: "CSV",
    saveDiagramAsPNG: "Download plot as a png",
    hideEmptyAnswers: "Hide empty answers",
    showEmptyAnswers: "Show empty answers",
    "topNValueText-1": "All answers",
    "topNValueText5": "Top 5 answers",
    "topNValueText10": "Top 10 answers",
    "topNValueText20": "Top 20 answers",
    noVisualizerForQuestion: "This question type is not visualized yet",
    noResults: "There are no results yet",
    showPerValues: "Per Values",
    showPerColumns: "Per Columns"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//localization.locales["en"] = englishStrings;
//localization.localeNames["en"] = "English";


/***/ }),

/***/ "./src/localization/farsi.ts":
/*!***********************************!*\
  !*** ./src/localization/farsi.ts ***!
  \***********************************/
/*! exports provided: farsiStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "farsiStrings", function() { return farsiStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var farsiStrings = {
    groupButton: "گروه بندی با",
    ungroupButton: "حذف گروه",
    selectButton: "انتخاب",
    hideColumn: "مخفی کردن ستون",
    showColumn: "نمایش ستون",
    moveToDetail: "انتقال به جزئیات",
    showAsColumn: "نمایش به عنوان ستون",
    visualizer_text: "متون در جدول",
    visualizer_wordcloud: "ابر کلمات",
    chartType_bar: "میله ای",
    chartType_pie: "دابره ای(pie)",
    chartType_scatter: "پراکندگی(Scatter)",
    chartType_gauge: "عقربه ای",
    chartType_bullet: "Bullet",
    hideButton: "مخفی",
    resetFilter: "بازنشانی فیلترها",
    clearButton: "پاک کردن",
    addElement: "انتخاب سوال برای نمایش..."
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["fa"] = farsiStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["fa"] = "Farsi(Persian)";


/***/ }),

/***/ "./src/localization/french.ts":
/*!************************************!*\
  !*** ./src/localization/french.ts ***!
  \************************************/
/*! exports provided: frenchStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frenchStrings", function() { return frenchStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var frenchStrings = {
    groupButton: "Grouper",
    ungroupButton: "Dissocier",
    selectButton: "Sélectionner",
    hideColumn: "Masquer colonne",
    showColumn: "Afficher colonne",
    makePrivateColumn: "Rendre la colonne privé",
    makePublicColumn: "Rendre la colonne public",
    moveToDetail: "Déplacer vers détails",
    showAsColumn: "Afficher en colonne",
    visualizer_text: "Textes en table",
    visualizer_wordcloud: "Nuages de mots",
    chartType_bar: "Barres",
    chartType_stackedbar: "Barres empilées",
    chartType_doughnut: "Anneau",
    chartType_pie: "Secteurs",
    chartType_scatter: "Nuages de points",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bulles",
    filter: "Filtre",
    hideButton: "Masquer",
    resetFilter: "Rafraichir Filtres",
    clearButton: "Rafraichir",
    addElement: "Choisir la question à afficher...",
    defaultOrder: "Defaut",
    ascOrder: "Ascendant",
    descOrder: "Descendant",
    showMinorColumns: "Afficher les colonnes mineures",
    otherCommentTitle: "Autre élément et commentaires",
    noVisualizerForQuestion: "Ce type de question n'est pas encore visualisé",
    noResults: "Il n'y a pas encore de résultats"
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["fr"] = frenchStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["fr"] = "French";


/***/ }),

/***/ "./src/localization/korean.ts":
/*!************************************!*\
  !*** ./src/localization/korean.ts ***!
  \************************************/
/*! exports provided: koreanStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "koreanStrings", function() { return koreanStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var koreanStrings = {
    groupButton: "그룹핑",
    ungroupButton: "그룹 해제",
    selectButton: "선택",
    hideColumn: "숨김",
    showColumn: "보이기",
    makePrivateColumn: "비공개",
    makePublicColumn: "공개",
    moveToDetail: "세부정보",
    showAsColumn: "열로 표기",
    visualizer_text: "시각화 도우미",
    visualizer_wordcloud: "시각화 도구",
    chartType_bar: "막대형 차트",
    chartType_stackedbar: "누적막대형 차트",
    chartType_doughnut: "도넛형 차트",
    chartType_pie: "파이형 차트",
    chartType_scatter: "분산형 차트",
    chartType_gauge: "게이지형 차트",
    chartType_bullet: "글머리 기호 차트",
    filter: "필터",
    hideButton: "숨기기",
    resetFilter: "초기화",
    clearButton: "초기화",
    addElement: "표시할 질문을 선택하세요.",
    defaultOrder: "기본값",
    ascOrder: "오름차순",
    descOrder: "내림차순",
    showMinorColumns: " 보조 열 표시",
    otherCommentTitle: "기타 제목",
    noVisualizerForQuestion: "질문에 대한 시각화 도우미가 없습니다",
    noResults: "결과가 없습니다"
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["ko"] = koreanStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["ko"] = "Korean";


/***/ }),

/***/ "./src/localization/norwegian.ts":
/*!***************************************!*\
  !*** ./src/localization/norwegian.ts ***!
  \***************************************/
/*! exports provided: norwegianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norwegianStrings", function() { return norwegianStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var norwegianStrings = {
    groupButton: "Grupper",
    ungroupButton: "Opphev gruppering",
    selectButton: "Velg",
    hideColumn: "Skjul kolonne",
    showColumn: "Vis kolonne",
    makePrivateColumn: "Gjør kolonne privat",
    makePublicColumn: "Gjør kolonne offentlig",
    moveToDetail: "Flytt til detaljert visning",
    showAsColumn: "Vis som kolonne",
    filterPlaceholder: "Søk...",
    removeRows: "Fjern rader",
    showLabel: "Vis",
    entriesLabel: "oppføringer",
    visualizer_text: "Tabellvisning",
    visualizer_wordcloud: "Ordsky",
    chartType_bar: "Stolpediagram",
    chartType_stackedbar: "Stablet stolpediagram",
    chartType_doughnut: "Hjuldiagram",
    chartType_pie: "Sektordiagram",
    chartType_scatter: "Punktdiagram",
    chartType_gauge: "Målediagram",
    chartType_bullet: "Kulediagram",
    hideButton: "Skjul",
    makePrivateButton: "Gjør privat",
    makePublicButton: "Gjør offentlig",
    showButton: "Vis",
    resetFilter: "Nullstill filter",
    changeLocale: "Bytt språk",
    clearButton: "Tøm",
    addElement: "Velg spørsmål...",
    defaultOrder: "Standard",
    ascOrder: "Stigende",
    descOrder: "Synkende",
    showMinorColumns: "Vis mindre kolonner",
    otherCommentTitle: "Annet og kommentarer",
    showPercentages: "Vis prosenter",
    hidePercentages: "Skjul prosenter",
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["no"] = norwegianStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["no"] = "Norwegian";


/***/ }),

/***/ "./src/localization/portuguese.ts":
/*!****************************************!*\
  !*** ./src/localization/portuguese.ts ***!
  \****************************************/
/*! exports provided: portugueseStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portugueseStrings", function() { return portugueseStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var portugueseStrings = {
    groupButton: "Agrupar Por Mim",
    ungroupButton: "Desagrupar Por Mim",
    selectButton: "Selecionar",
    hideColumn: "Esconder coluna",
    showColumn: "Mostrar coluna",
    makePrivateColumn: "Tornar coluna privada",
    makePublicColumn: "Tornar coluna pública",
    moveToDetail: "Mover para Detalhes",
    showAsColumn: "Mostrar como Coluna",
    filterPlaceholder: "Pesquisar...",
    removeRows: "Remover linhas",
    showLabel: "Mostrar",
    entriesLabel: "entradas",
    visualizer_text: "Textos em tabela",
    chartType_bar: "Barra",
    chartType_stackedbar: "Barra Empilhada",
    chartType_doughnut: "Rosquinha",
    chartType_pie: "Torta",
    chartType_scatter: "Lastro",
    chartType_gauge: "Escala",
    chartType_bullet: "Bala",
    hideButton: "Esconder",
    makePrivateButton: "Tornar privado",
    makePublicButton: "Tornar público",
    showButton: "Mostrar",
    filter: "Filtrar",
    resetFilter: "Restaurar Filtro",
    changeLocale: "Mudar Localização",
    clearButton: "Limpar",
    addElement: "Escolher questão para mostrar...",
    defaultOrder: "Ordenação Padrão",
    ascOrder: "Ascendente",
    descOrder: "Descendente",
    showMinorColumns: "Mostrar colunas menores",
    otherCommentTitle: "Outros itens e comentários",
    showPercentages: "Mostrar percentuais",
    hidePercentages: "Esconder percentuais",
    saveDiagramAsPNG: "Baixar plot como png",
    hideEmptyAnswers: "Esconder perguntas vazias",
    showEmptyAnswers: "Mostrar perguntas vazias",
    "topNValueText-1": "Todas as respostas",
    "topNValueText5": "Primeiras 5 respostas",
    "topNValueText10": "Primeiras 10 respostas",
    "topNValueText20": "Primeiras 20 respostas",
    noVisualizerForQuestion: "Este tipo de pergunta ainda não foi visualizada",
    noResults: "Ainda não possui resultados"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["pt"] = portugueseStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["pt"] = "Portuguese";


/***/ }),

/***/ "./src/localization/russian.ts":
/*!*************************************!*\
  !*** ./src/localization/russian.ts ***!
  \*************************************/
/*! exports provided: russianStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russianStrings", function() { return russianStrings; });
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");

var russianStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    makePrivateColumn: "Make column private",
    makePublicColumn: "Make column public",
    moveToDetail: "Move to Detail",
    filter: "Фильтр",
    showAsColumn: "Show as Column",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Скрыть",
    showButton: "Показать",
    resetFilter: "Очистить фильтр",
    changeLocale: "Сменить язык",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns",
    otherCommentTitle: "Другое и комментарии",
    noVisualizerForQuestion: "Этот тип вопроса еще не поддерживается аналитикой",
    noResults: "Результаты отсутствуют"
};
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].locales["ru"] = russianStrings;
_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].localeNames["ru"] = "Russian";


/***/ }),

/***/ "./src/localizationManager.ts":
/*!************************************!*\
  !*** ./src/localizationManager.ts ***!
  \************************************/
/*! exports provided: localization, surveyStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return localization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return surveyStrings; });
/* harmony import */ var _localization_english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localization/english */ "./src/localization/english.ts");

var localization = {
    currentLocaleValue: "",
    defaultLocaleValue: "en",
    locales: {},
    localeNames: {},
    supportedLocales: [],
    get currentLocale() {
        return this.currentLocaleValue === this.defaultLocaleValue
            ? ""
            : this.currentLocaleValue;
    },
    set currentLocale(val) {
        this.currentLocaleValue = val;
    },
    get defaultLocale() {
        return this.defaultLocaleValue;
    },
    set defaultLocale(val) {
        this.defaultLocaleValue = val;
    },
    getString: function (strName) {
        var loc = this.currentLocale
            ? this.locales[this.currentLocale]
            : this.locales[this.defaultLocale];
        if (!loc || !loc[strName])
            loc = this.locales[this.defaultLocale];
        var result = loc[strName];
        if (result === undefined) {
            result = this.locales["en"][strName] || strName;
        }
        return result;
    },
    getLocales: function () {
        var res = [];
        res.push("");
        if (this.supportedLocales && this.supportedLocales.length > 0) {
            for (var i = 0; i < this.supportedLocales.length; i++) {
                res.push(this.supportedLocales[i]);
            }
        }
        else {
            for (var key in this.locales) {
                res.push(key);
            }
        }
        res.sort();
        return res;
    }
};
var surveyStrings = _localization_english__WEBPACK_IMPORTED_MODULE_0__["englishStrings"];
localization.locales["en"] = _localization_english__WEBPACK_IMPORTED_MODULE_0__["englishStrings"];
localization.localeNames["en"] = "english";


/***/ }),

/***/ "./src/tables/config.ts":
/*!******************************!*\
  !*** ./src/tables/config.ts ***!
  \******************************/
/*! exports provided: QuestionLocation, ColumnDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionLocation", function() { return QuestionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnDataType", function() { return ColumnDataType; });
var QuestionLocation;
(function (QuestionLocation) {
    QuestionLocation[QuestionLocation["Column"] = 0] = "Column";
    QuestionLocation[QuestionLocation["Row"] = 1] = "Row";
})(QuestionLocation || (QuestionLocation = {}));
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType[ColumnDataType["Text"] = 0] = "Text";
    ColumnDataType[ColumnDataType["FileLink"] = 1] = "FileLink";
    ColumnDataType[ColumnDataType["Image"] = 2] = "Image";
})(ColumnDataType || (ColumnDataType = {}));


/***/ }),

/***/ "./src/tables/datatables.scss":
/*!************************************!*\
  !*** ./src/tables/datatables.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tables/datatables.ts":
/*!**********************************!*\
  !*** ./src/tables/datatables.ts ***!
  \**********************************/
/*! exports provided: DataTables, DatatablesRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return DataTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesRow", function() { return DatatablesRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _datatables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatables.scss */ "./src/tables/datatables.scss");
/* harmony import */ var _datatables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_datatables_scss__WEBPACK_IMPORTED_MODULE_5__);






if (!!document) {
    var svgTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!../svgbundle.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html");
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var jQuery = window["jQuery"];
var DataTables = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataTables, _super);
    function DataTables(survey, data, options, _columns) {
        if (_columns === void 0) { _columns = []; }
        var _this = _super.call(this, survey, data, options, _columns) || this;
        _this.currentPageNumber = 0;
        /**
         * The event is fired columns configuration has been changed.
         * <br/> sender the datatables adapter
         * <br/> options.survey current survey
         * @see getColumns
         */
        _this.onColumnsReorder = new survey_core__WEBPACK_IMPORTED_MODULE_2__["Event"]();
        return _this;
    }
    DataTables.initJQuery = function ($) {
        jQuery = $;
    };
    Object.defineProperty(DataTables, "haveCommercialLicense", {
        set: function (val) {
            _table__WEBPACK_IMPORTED_MODULE_1__["Table"].haveCommercialLicense = val;
        },
        enumerable: false,
        configurable: true
    });
    DataTables.prototype.destroy = function () {
        if (!this.renderResult)
            return;
        var tableNode = this.renderResult.children[0];
        if (jQuery.fn.DataTable.isDataTable(tableNode)) {
            jQuery(tableNode).DataTable().destroy();
        }
        this.datatableApi = undefined;
        _super.prototype.destroy.call(this);
    };
    DataTables.prototype.setColumnVisibility = function (columnName, isVisible) {
        _super.prototype.setColumnVisibility.call(this, columnName, isVisible);
        this.datatableApi.column(columnName + ":name").visible(isVisible);
    };
    DataTables.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        var column = this.datatableApi.column(columnName + ":name");
        var isColumnLocation = location == _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Column;
        column.visible(isColumnLocation);
    };
    DataTables.prototype.applyFilter = function (value) {
        this.datatableApi.search(value).draw(false);
    };
    DataTables.prototype.applyColumnFilter = function (columnName, value) {
        var column = this.datatableApi.column(columnName + ":name");
        if (column.search() !== value) {
            column.search(value).draw(false);
        }
    };
    DataTables.prototype.sortByColumn = function (columnName, direction) {
        var column = this.datatableApi.column(columnName + ":name");
        column.order(direction).draw(false);
    };
    DataTables.prototype.setPageSize = function (value) {
        _super.prototype.setPageSize.call(this, value);
        if (this.isRendered) {
            this.datatableApi.page.len(value).draw(false);
        }
    };
    DataTables.prototype.setPageNumber = function (value) {
        _super.prototype.setPageNumber.call(this, value);
        if (this.isRendered) {
            this.datatableApi.page(value).draw(false);
        }
    };
    DataTables.prototype.getPageNumber = function () {
        if (!this.isRendered) {
            return 0;
        }
        return this.datatableApi.page();
    };
    DataTables.prototype.render = function (targetNode) {
        var _this = this;
        _super.prototype.render.call(this, targetNode);
        var self = this;
        targetNode.className += " sa-table sa-datatables";
        var tableNode = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("table", ""));
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var dtButtonClass = "sa-table__btn sa-table__btn--small sa-table__btn--gray";
        var options = jQuery.extend(true, {
            buttons: [
                { extend: "copy", className: dtButtonClass },
                { extend: "csv", className: dtButtonClass },
                { extend: "print", className: dtButtonClass },
            ],
            dom: 'B<"sa-table__header-extensions">prtip',
            // ordering: false,
            data: this.tableData,
            pageLength: this.currentPageSize,
            responsive: false,
            scrollX: true,
            columns: columns,
            colReorder: {
                fixedColumnsLeft: 1,
                realtime: false,
            },
            //orderFixed: [[1, "asc"]],
            language: {
                sSearch: " ",
                searchPlaceholder: "Search...",
                sLengthMenu: "Show _MENU_ entries",
                paginate: {
                    previous: " ",
                    next: " ",
                },
            },
            select: "api",
            headerCallback: function (thead, data, start, end, display) {
                var datatableApi = jQuery(tableNode).dataTable().api();
                var self = _this;
                datatableApi
                    .columns()
                    .eq(0)
                    .each(function (index) {
                    var $thNode = jQuery(datatableApi.columns(index).header());
                    $thNode.unbind("click.DT");
                    if (!!columnsData[index] && $thNode.has("button").length === 0) {
                        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-table__action-container");
                        self.extensions.render(container, "column", {
                            columnName: columnsData[index],
                        });
                        container.onmousedown = function (e) {
                            if (!self.isColumnReorderEnabled) {
                                e.stopPropagation();
                            }
                            else {
                                _this.disableColumnReorder();
                            }
                        };
                    }
                    $thNode.prepend(container);
                });
            },
        }, this.options);
        targetNode.appendChild(tableNode);
        tableNode.className = "sa-datatables__table display responsive dataTable";
        var datatableApiRef = (this.datatableApi = jQuery(tableNode).DataTable(options));
        var extensionsContainer = jQuery("div.sa-table__header-extensions")[0];
        // this.onTableToolsCreated.fire(this, { extensions: extensions });
        this.extensions.render(extensionsContainer, "header");
        datatableApiRef.page(self.currentPageNumber);
        this.datatableApi.rowGroup().enable(false).draw(false);
        datatableApiRef.on("column-reorder", function (e, settings, details) {
            _this.moveColumn(details.from - 1, details.to - 1);
            _this.disableColumnReorder();
            _this.onColumnsReorder.fire(_this, { columns: _this.columns });
        });
        datatableApiRef
            .rows()
            .eq(0)
            .each(function (index) {
            var row = datatableApiRef.row(index);
            var detailsTr = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("tr");
            var detailsTd = (_utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("td", "sa-datatables__details-container"));
            detailsTr.appendChild(detailsTd);
            var rowElement = row.node();
            var firstCell = row.cell(row.index(), 0).node();
            var tableRow = new DatatablesRow(_this, firstCell, detailsTd, row);
            tableRow.onToggleDetails.add(function (sender, options) {
                if (options.isExpanded) {
                    detailsTd.colSpan = rowElement.childElementCount;
                    rowElement.parentNode.insertBefore(detailsTr, rowElement.nextSibling);
                }
                else {
                    if (!!detailsTr.parentNode) {
                        detailsTr.parentNode.removeChild(detailsTr);
                    }
                }
            });
            _this._rows.push(tableRow);
            tableRow.render();
        });
        datatableApiRef.draw(false);
        this.renderResult = targetNode;
    };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var columns = this.columns.map(function (column) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                name: column.name,
                data: column.name,
                sTitle: (question && (_this.options.useNamesAsTitles ? question.name : question.title)) || column.displayName,
                visible: _this.isColumnVisible(column),
                orderable: false,
                defaultContent: "",
                width: typeof column.width == "number" ? column.width + "px" : column.width,
                render: function (_data, _type, row) {
                    var value = row[column.name];
                    if (column.dataType === _config__WEBPACK_IMPORTED_MODULE_3__["ColumnDataType"].FileLink) {
                        return value;
                    }
                    if (column.dataType === _config__WEBPACK_IMPORTED_MODULE_3__["ColumnDataType"].Image) {
                        return "<image src='" + value + "'/>";
                    }
                    return typeof value === "string"
                        ? jQuery("<div>").text(value).html()
                        : JSON.stringify(value);
                },
            };
        });
        return [
            {
                orderable: false,
                data: null,
                defaultContent: "",
            },
        ].concat(columns);
    };
    DataTables.prototype.layout = function () {
        !!this.datatableApi && this.datatableApi.columns.adjust();
    };
    return DataTables;
}(_table__WEBPACK_IMPORTED_MODULE_1__["Table"]));

var DatatablesRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DatatablesRow, _super);
    function DatatablesRow(table, extensionsContainer, detailsContainer, _innerRow) {
        var _this = _super.call(this, table, extensionsContainer, detailsContainer) || this;
        _this.table = table;
        _this.extensionsContainer = extensionsContainer;
        _this.detailsContainer = detailsContainer;
        _this._innerRow = _innerRow;
        _this.rowElement = _innerRow.node();
        _this.rowData = _innerRow.data();
        _this._innerRow = _this._innerRow.row(_this.rowElement);
        table.onColumnsReorder.add(function () {
            _this.render();
        });
        return _this;
    }
    Object.defineProperty(DatatablesRow.prototype, "innerRow", {
        get: function () {
            return this._innerRow.row(this.rowElement);
        },
        enumerable: false,
        configurable: true
    });
    DatatablesRow.prototype.getElement = function () {
        return this.rowElement;
    };
    DatatablesRow.prototype.getRowData = function () {
        return this.rowData;
    };
    DatatablesRow.prototype.getDataPosition = function () {
        return this.innerRow.index();
    };
    DatatablesRow.prototype.remove = function () {
        this.innerRow.remove().draw();
        _super.prototype.remove.call(this);
    };
    return DatatablesRow;
}(_table__WEBPACK_IMPORTED_MODULE_1__["TableRow"]));



/***/ }),

/***/ "./src/tables/extensions/columnextensions.ts":
/*!***************************************************!*\
  !*** ./src/tables/extensions/columnextensions.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");




_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "drag",
    visibleIndex: 0,
    render: function (table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button", "sa-table__svg-button sa-table__drag-button");
        btn.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("drag"));
        btn.onmousedown = function (e) {
            table.enableColumnReorder();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "sort",
    visibleIndex: 1,
    render: function (table, options) {
        var descTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("descOrder");
        var ascTitle = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("ascOrder");
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("sorting");
        btn.title = "";
        var direction = "asc";
        btn.onclick = function () {
            if (direction == "asc") {
                btn.title = descTitle;
                direction = "desc";
            }
            else {
                btn.title = ascTitle;
                direction = "asc";
            }
            table.sortByColumn(options.columnName, direction);
        };
        btn.ondrag = function (e) {
            e.stopPropagation();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "hide",
    visibleIndex: 2,
    render: function (table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("hide");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("hideColumn");
        btn.onclick = function () {
            table.setColumnVisibility(options.columnName, false);
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "movetodetails",
    visibleIndex: 3,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgButton("movetodetails");
        button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("moveToDetail");
        button.onclick = function (e) {
            e.stopPropagation();
            table.setColumnLocation(options.columnName, _config__WEBPACK_IMPORTED_MODULE_3__["QuestionLocation"].Row);
        };
        return button;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "filter",
    visibleIndex: 4,
    render: function (table, options) {
        var el = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createInput("sa-table__filter", _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("filterPlaceholder"));
        el.onclick = function (e) { return e.stopPropagation(); };
        el.onchange = function (e) {
            table.applyColumnFilter(options.columnName, el.value);
        };
        return el;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "column",
    name: "makepublic",
    visibleIndex: -1,
    render: function (table, options) {
        var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button");
        var makePrivateSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makeprivate");
        var makePublicSvg = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createSvgElement("makepublic");
        var column = table.getColumnByName(options.columnName);
        updateState(column);
        button.appendChild(makePrivateSvg);
        button.appendChild(makePublicSvg);
        button.onclick = function (e) {
            e.stopPropagation();
            column.isPublic = !column.isPublic;
            updateState(column);
            table.onPermissionsChangedCallback &&
                table.onPermissionsChangedCallback(table);
        };
        function updateState(column) {
            if (column.isPublic) {
                button.className = "sa-table__svg-button";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePrivateColumn");
                makePrivateSvg.style.display = "none";
                makePublicSvg.style.display = "block";
            }
            else {
                button.className = "sa-table__svg-button sa-table__svg-button--active";
                button.title = _localizationManager__WEBPACK_IMPORTED_MODULE_1__["localization"].getString("makePublicColumn");
                makePrivateSvg.style.display = "block";
                makePublicSvg.style.display = "none";
            }
        }
        return button;
    },
});


/***/ }),

/***/ "./src/tables/extensions/detailsextensions.ts":
/*!****************************************************!*\
  !*** ./src/tables/extensions/detailsextensions.ts ***!
  \****************************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/tables/config.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");




var Details = /** @class */ (function () {
    function Details(table, row, targetNode) {
        var _this = this;
        this.table = table;
        this.row = row;
        this.targetNode = targetNode;
        this.location = "details";
        this.createShowAsColumnButton = function (columnName) {
            var button = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--gray", { innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_3__["localization"].getString("showAsColumn") });
            button.onclick = function (e) {
                e.stopPropagation();
                _this.table.setColumnLocation(columnName, _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Column);
            };
            return button;
        };
        this.detailsTable = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("table", "sa-table__detail-table");
        this.table.onColumnsLocationChanged.add(function () {
            _this.close();
        });
    }
    Details.prototype.open = function () {
        var _this = this;
        this.detailsTable.innerHTML = "";
        var rows = [];
        this.table.columns
            .filter(function (column) { return column.location === _config__WEBPACK_IMPORTED_MODULE_1__["QuestionLocation"].Row && column; })
            .forEach(function (column) {
            var row = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("tr", "sa-table__detail");
            var td1 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td", "", {
                innerHTML: column.displayName,
            });
            var td2 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td");
            td2.textContent = _this.row.getRowData()[column.name];
            if (column.dataType === _config__WEBPACK_IMPORTED_MODULE_1__["ColumnDataType"].Image) {
                td2.innerHTML = "<image src='" + td2.textContent + "'/>";
            }
            var td3 = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td");
            td3.appendChild(_this.createShowAsColumnButton(column.name));
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            rows.push(row);
        });
        var row = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("tr", "sa-table__detail");
        var td = _utils__WEBPACK_IMPORTED_MODULE_0__["DocumentHelper"].createElement("td", "", { colSpan: 3 });
        var extensions = new _tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"](this.table);
        extensions.render(td, "details", { row: this.row });
        if (td.children.length != 0) {
            row.appendChild(td);
            rows.push(row);
        }
        rows.forEach(function (row) {
            _this.detailsTable.appendChild(row);
        });
        this.targetNode.appendChild(this.detailsTable);
    };
    Details.prototype.close = function () {
        if (!!this.detailsTable.parentNode) {
            this.detailsTable.parentNode.removeChild(this.detailsTable);
        }
    };
    return Details;
}());



/***/ }),

/***/ "./src/tables/extensions/headerextensions.ts":
/*!***************************************************!*\
  !*** ./src/tables/extensions/headerextensions.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");



_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "filter",
    visibleIndex: 0,
    render: function (table) {
        var input = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createInput("sa-table__global-filter sa-table__header-extension", _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("filterPlaceholder"));
        input.onchange = function (event) {
            table.applyFilter(event.target.value);
        };
        return input;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "showcolumn",
    visibleIndex: 2,
    destroy: function () {
        this.onDestroy();
    },
    render: function (table) {
        var dropdown = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select", "sa-table__show-column sa-table__header-extension");
        function update() {
            var hiddenColumns = table.columns.filter(function (column) { return !column.isVisible; });
            if (hiddenColumns.length == 0) {
                dropdown.style.display = "none";
                return;
            }
            dropdown.style.display = "inline-block";
            dropdown.innerHTML = "";
            var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                text: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showColumn"),
                disabled: true,
                selected: true,
            });
            dropdown.appendChild(option);
            hiddenColumns.forEach(function (column) {
                var text = column.displayName || column.name;
                if (!!text && text.length > 20) {
                    text = text.substring(0, 20) + "...";
                }
                var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                    text: text,
                    title: column.displayName,
                    value: column.name,
                });
                dropdown.appendChild(option);
            });
        }
        dropdown.onchange = function (e) {
            var val = e.target.value;
            e.stopPropagation();
            if (!val)
                return;
            table.setColumnVisibility(val, true);
        };
        update();
        var onVisibilityChangedCallback = function () {
            update();
        };
        table.onColumnsVisibilityChanged.add(onVisibilityChangedCallback);
        this.onDestroy = function () {
            table.onColumnsVisibilityChanged.remove(onVisibilityChangedCallback);
        };
        return dropdown;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "showentries",
    visibleIndex: 3,
    render: function (table) {
        function getEntriesDropdown(table) {
            var el = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select");
            var optionsValues = ["1", "5", "10", "25", "50", "75", "100"];
            optionsValues.forEach(function (val) {
                var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                    value: val,
                    text: val,
                });
                el.appendChild(option);
            });
            el.value = String(table.getPageSize());
            el.onchange = function () {
                table.setPageSize(Number(el.value));
            };
            return el;
        }
        var selectorContainer = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("div", "sa-table__entries");
        var showSpan = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--right", {
            innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showLabel"),
        });
        var entriesSpan = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("span", "sa-table__entries-label sa-table__entries-label--left", {
            innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("entriesLabel"),
        });
        selectorContainer.appendChild(showSpan);
        selectorContainer.appendChild(getEntriesDropdown(table));
        selectorContainer.appendChild(entriesSpan);
        return selectorContainer;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "removerows",
    visibleIndex: -1,
    render: function (table) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--green sa-table__header-extension ", { innerHTML: _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("removeRows") });
        btn.onclick = function () {
            table.getCreatedRows().forEach(function (row) {
                if (row.getIsSelected()) {
                    row.remove();
                }
            });
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "header",
    name: "changelocale",
    visibleIndex: 1,
    render: function (table) {
        var locales = table.getLocales();
        if (locales.length < 2)
            return null;
        var el = (_utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("select", "sa-table__header-extension", {}));
        var optionsValues = [_localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("changeLocale")].concat(locales);
        optionsValues.forEach(function (val) {
            var option = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("option", "", {
                value: val,
                text: val,
            });
            el.appendChild(option);
        });
        el.onchange = function () {
            table.locale = el.value;
        };
        return el;
    },
});


/***/ }),

/***/ "./src/tables/extensions/rowextensions.ts":
/*!************************************************!*\
  !*** ./src/tables/extensions/rowextensions.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _tableextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableextensions */ "./src/tables/extensions/tableextensions.ts");



_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "row",
    name: "details",
    visibleIndex: 0,
    render: function (_table, options) {
        var btn = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createSvgButton("detail");
        btn.title = _localizationManager__WEBPACK_IMPORTED_MODULE_0__["localization"].getString("showMinorColumns");
        btn.className += " sa-table__row-extension";
        btn.onclick = function () {
            options.row.toggleDetails();
        };
        return btn;
    },
});
_tableextensions__WEBPACK_IMPORTED_MODULE_2__["TableExtensions"].registerExtension({
    location: "row",
    name: "select",
    visibleIndex: -1,
    render: function (_table, opt) {
        var row = opt.row;
        var checkbox = _utils__WEBPACK_IMPORTED_MODULE_1__["DocumentHelper"].createElement("input", "sa-table__row-extension", {
            type: "checkbox",
        });
        checkbox.checked = row.getIsSelected();
        checkbox.onchange = function () {
            row.toggleSelect();
        };
        return checkbox;
    },
});


/***/ }),

/***/ "./src/tables/extensions/tableextensions.ts":
/*!**************************************************!*\
  !*** ./src/tables/extensions/tableextensions.ts ***!
  \**************************************************/
/*! exports provided: TableExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExtensions", function() { return TableExtensions; });
var TableExtensions = /** @class */ (function () {
    function TableExtensions(table) {
        this.table = table;
        this.renderedExtensions = [];
    }
    TableExtensions.prototype.render = function (targetNode, location, options) {
        var _this = this;
        var extensions = TableExtensions.extensions[location];
        if (!!extensions) {
            extensions = this.sortExtensions(extensions);
            extensions.forEach(function (extension) {
                if (!!extension.render) {
                    var action = extension.render(_this.table, options);
                    if (!!action) {
                        targetNode.appendChild(action);
                        _this.renderedExtensions.push(extension);
                    }
                }
            });
        }
    };
    TableExtensions.prototype.destroy = function () {
        this.renderedExtensions.forEach(function (extension) {
            if (!!extension.destroy)
                extension.destroy();
        });
        this.renderedExtensions = [];
    };
    TableExtensions.registerExtension = function (extension) {
        if (!this.extensions[extension.location])
            this.extensions[extension.location] = [];
        this.extensions[extension.location].push(extension);
    };
    TableExtensions.removeExtension = function (extension) {
        if (!extension) {
            return;
        }
        var extensions = TableExtensions.extensions[extension.location];
        var index = extensions.indexOf(extension);
        if (index >= 0) {
            extensions.splice(index, 1);
        }
    };
    TableExtensions.unregisterExtension = function (location, actionName) {
        if (!actionName) {
            return;
        }
        if (!!location) {
            var extension = TableExtensions.findExtension(location, actionName);
            TableExtensions.removeExtension(extension);
        }
        else {
            Object.keys(this.extensions).forEach(function (location) { return TableExtensions.unregisterExtension(location, actionName); });
        }
    };
    TableExtensions.findExtension = function (location, actionName) {
        if (!this.extensions[location])
            return null;
        var extension = this.extensions[location].filter(function (extension) {
            return extension.name == actionName;
        })[0];
        return extension || null;
    };
    TableExtensions.prototype.sortExtensions = function (extensions) {
        if (!Array.isArray(extensions))
            return;
        return []
            .concat(extensions.filter(function (extension) { return extension.visibleIndex >= 0; }))
            .sort(function (firstExtension, secondExtension) {
            return firstExtension.visibleIndex - secondExtension.visibleIndex;
        });
    };
    TableExtensions.extensions = {};
    return TableExtensions;
}());



/***/ }),

/***/ "./src/tables/table.ts":
/*!*****************************!*\
  !*** ./src/tables/table.ts ***!
  \*****************************/
/*! exports provided: Table, TableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/detailsextensions */ "./src/tables/extensions/detailsextensions.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/tableextensions */ "./src/tables/extensions/tableextensions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");







var Table = /** @class */ (function () {
    function Table(survey, data, options, _columns) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (_columns === void 0) { _columns = []; }
        this.survey = survey;
        this.data = data;
        this.options = options;
        this._columns = _columns;
        this.haveCommercialLicense = false;
        this.currentPageSize = 5;
        this._rows = [];
        this.onColumnsVisibilityChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.onColumnsLocationChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.onRowRemoved = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.buildColumns = function (survey) {
            var columns = [];
            _this.survey.getAllQuestions().forEach(function (question) {
                var dataType = _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].Text;
                if (question.getType() === "file") {
                    dataType = _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].FileLink;
                }
                if (question.getType() === "signaturepad") {
                    dataType = _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].Image;
                }
                columns.push({
                    name: question.name,
                    displayName: _this.options && _this.options.useNamesAsTitles
                        ? question.name
                        : (question.title || "").trim() || question.name,
                    dataType: dataType,
                    isVisible: true,
                    isPublic: true,
                    location: _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column,
                });
                if (question.hasComment ||
                    (question.hasOther && question.getStoreOthersAsComment())) {
                    columns.push({
                        name: "" + question.name + survey_core__WEBPACK_IMPORTED_MODULE_1__["settings"].commentPrefix,
                        displayName: question.hasOther
                            ? question.otherText
                            : question.commentText,
                        isComment: true,
                        dataType: dataType,
                        isVisible: true,
                        isPublic: true,
                        location: _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column,
                    });
                }
            });
            return columns;
        };
        /**
         * Fires when table state changed.
         */
        this.onStateChanged = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        if (!this.options) {
            this.options = {};
        }
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.initTableData(data);
        _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = this.survey.locale;
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__["TableExtensions"](this);
        this.haveCommercialLicense =
            Table.haveCommercialLicense ||
                (!!options &&
                    (typeof options.haveCommercialLicense !== "undefined"
                        ? options.haveCommercialLicense
                        : false));
    }
    Table.prototype.getData = function () {
        return this.data;
    };
    Table.prototype.render = function (targetNode) {
        targetNode.innerHTML = "";
        if (!this.haveCommercialLicense) {
            targetNode.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createCommercialLicenseLink"])());
        }
    };
    Table.prototype.enableColumnReorder = function () {
        this.isColumnReorderEnabled = true;
    };
    Table.prototype.disableColumnReorder = function () {
        this.isColumnReorderEnabled = false;
    };
    Table.prototype.getPageNumber = function () {
        return this.currentPageNumber;
    };
    Table.prototype.setPageNumber = function (value) {
        this.currentPageNumber = value;
    };
    Table.prototype.getPageSize = function () {
        return this.currentPageSize;
    };
    Table.prototype.setPageSize = function (value) {
        this.currentPageSize = value;
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.getCreatedRows = function () {
        return [].concat(this._rows);
    };
    Table.prototype.clearCreatedRows = function () {
        this._rows.forEach(function (row) {
            row.destroy();
        });
        this._rows = [];
    };
    Table.prototype.isColumnVisible = function (column) {
        if (column.location !== _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Column)
            return false;
        return column.isVisible;
    };
    Object.defineProperty(Table.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        set: function (columns) {
            this._columns = columns;
            this.refresh(true);
            this.onStateChanged.fire(this, this.state);
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.initTableData = function (data) {
        var _this = this;
        this.tableData = (data || []).map(function (item) {
            var dataItem = {};
            _this.survey.data = item;
            _this._columns.forEach(function (column) {
                var displayValue = item[column.name];
                var question = _this.survey.getQuestionByName(column.name);
                if (question) {
                    if (column.isComment) {
                        displayValue = question.comment;
                    }
                    else if (_this.options.useValuesAsLabels) {
                        displayValue = question.value;
                    }
                    else {
                        displayValue = question.displayValue;
                    }
                }
                if (column.dataType === _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].FileLink) {
                    if (Array.isArray(displayValue)) {
                        dataItem[column.name] = Table.showFilesAsImages ? Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createImagesContainer"])(displayValue).outerHTML : Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createLinksContainer"])(displayValue).outerHTML;
                    }
                }
                else {
                    dataItem[column.name] =
                        typeof displayValue === "string"
                            ? displayValue
                            : JSON.stringify(displayValue) || "";
                }
                var opt = { question: question, displayValue: dataItem[column.name] };
                if (typeof _this.options.onGetQuestionValue === "function") {
                    _this.options.onGetQuestionValue(opt);
                }
                dataItem[column.name] = opt.displayValue;
            });
            return dataItem;
        });
    };
    Table.prototype.moveColumn = function (from, to) {
        var deletedColumns = this._columns.splice(from, 1);
        this._columns.splice(to, 0, deletedColumns[0]);
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnLocation = function (columnName, location) {
        this.getColumnByName(columnName).location = location;
        this.onColumnsLocationChanged.fire(this, {
            columnName: columnName,
            location: location,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.getColumnByName = function (columnName) {
        return this._columns.filter(function (column) { return column.name === columnName; })[0];
    };
    Table.prototype.setColumnVisibility = function (columnName, isVisible) {
        var column = this.getColumnByName(columnName);
        column.isVisible = isVisible;
        this.onColumnsVisibilityChanged.fire(this, {
            columnName: columnName,
            columnVisibility: isVisible,
        });
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.setColumnWidth = function (columnName, width) {
        var column = this.getColumnByName(columnName);
        column.width = width;
        this.onStateChanged.fire(this, this.state);
    };
    Table.prototype.removeRow = function (row) {
        var index = this._rows.indexOf(row);
        this._rows.splice(index, 1);
        this.onRowRemoved.fire(this, { row: row });
    };
    Object.defineProperty(Table.prototype, "locale", {
        /**
         * Returns current locale of the table.
         * If locales more than one, the language selection dropdown will be added in the toolbar
         */
        get: function () {
            return _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale;
        },
        /**
         * Sets locale for table.
         */
        set: function (newLocale) {
            this.survey.locale = newLocale;
            _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newLocale;
            this.refresh(true);
            this.onStateChanged.fire(this, this.state);
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.getLocales = function () {
        return [].concat(this.survey.getUsedLocales());
    };
    Table.prototype.refresh = function (hard) {
        if (hard === void 0) { hard = false; }
        if (this.isRendered) {
            this.currentPageNumber = this.getPageNumber();
            if (hard) {
                this.initTableData(this.data);
            }
            var targetNode = this.renderResult;
            this.destroy();
            this.render(targetNode);
            this.setPageSize(this.currentPageSize);
            this.setPageNumber(this.currentPageNumber);
        }
    };
    Table.prototype.destroy = function () {
        this.clearCreatedRows();
        this.extensions.destroy();
        this.renderResult.innerHTML = "";
        this.renderResult = undefined;
    };
    Object.defineProperty(Table.prototype, "isRendered", {
        get: function () {
            return !!this.renderResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "state", {
        /**
         * Vizualization panel state getter.
         */
        get: function () {
            return {
                locale: _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale,
                elements: [].concat(this._columns),
                pageSize: this.currentPageSize,
            };
        },
        /**
         * Vizualization panel state setter.
         */
        set: function (newState) {
            if (!newState)
                return;
            if (typeof newState.locale !== "undefined") {
                _localizationManager__WEBPACK_IMPORTED_MODULE_4__["localization"].currentLocale = newState.locale;
                this.survey.locale = newState.locale;
                this.initTableData(this.data);
            }
            if (typeof newState.elements !== "undefined")
                this._columns = newState.elements;
            if (typeof newState.pageSize !== "undefined")
                this.currentPageSize = newState.pageSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "permissions", {
        /**
         * Gets table permissions.
         */
        get: function () {
            return this._columns.map(function (column) {
                return {
                    name: column.name,
                    isPublic: column.isPublic,
                };
            });
        },
        /**
         * Sets table permissions.
         */
        set: function (permissions) {
            var updatedElements = this._columns.map(function (column) {
                permissions.forEach(function (permission) {
                    if (permission.name === column.name)
                        column.isPublic = permission.isPublic;
                });
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column);
            });
            this._columns = [].concat(updatedElements);
            this.onPermissionsChangedCallback &&
                this.onPermissionsChangedCallback(this);
        },
        enumerable: false,
        configurable: true
    });
    Table.showFilesAsImages = false;
    Table.haveCommercialLicense = false;
    return Table;
}());

var TableRow = /** @class */ (function () {
    function TableRow(table, extensionsContainer, detailsContainer) {
        var _this = this;
        this.table = table;
        this.extensionsContainer = extensionsContainer;
        this.detailsContainer = detailsContainer;
        this.detailedRowClass = "sa-table__detail-row";
        this.isDetailsExpanded = false;
        this.onToggleDetails = new survey_core__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.onColumnLocationChangedCallback = function () {
            _this.closeDetails();
        };
        this.details = new _extensions_detailsextensions__WEBPACK_IMPORTED_MODULE_3__["Details"](table, this, detailsContainer);
        this.extensions = new _extensions_tableextensions__WEBPACK_IMPORTED_MODULE_5__["TableExtensions"](table);
        table.onColumnsLocationChanged.add(this.onColumnLocationChangedCallback);
    }
    TableRow.prototype.render = function () {
        this.extensions.render(this.extensionsContainer, "row", { row: this });
    };
    TableRow.prototype.openDetails = function () {
        this.details.open();
        this.getElement().className += " " + this.detailedRowClass;
        this.onToggleDetails.fire(this, { isExpanded: true });
        this.isDetailsExpanded = true;
    };
    TableRow.prototype.closeDetails = function () {
        this.details.close();
        this.getElement().classList.remove(this.detailedRowClass);
        this.onToggleDetails.fire(this, { isExpanded: false });
        this.isDetailsExpanded = false;
    };
    TableRow.prototype.toggleDetails = function () {
        if (this.isDetailsExpanded) {
            this.closeDetails();
        }
        else
            this.openDetails();
    };
    TableRow.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    TableRow.prototype.toggleSelect = function () {
        this.isSelected = !this.isSelected;
    };
    TableRow.prototype.remove = function () {
        this.table.removeRow(this);
    };
    TableRow.prototype.destroy = function () {
        this.table.onColumnsLocationChanged.remove(this.onColumnLocationChangedCallback);
        this.extensions.destroy();
    };
    return TableRow;
}());



/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: __assign, __extends, __rest, __decorate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}
var __rest = function (source, e) {
    var result = {};
    for (var propertyName in source)
        if (Object.prototype.hasOwnProperty.call(source, propertyName) &&
            e.indexOf(propertyName) < 0)
            result[propertyName] = source[propertyName];
    if (source != null &&
        typeof Object["getOwnPropertySymbols"] === "function")
        for (var i = 0, propertySymbols = Object["getOwnPropertySymbols"](source); i < propertySymbols.length; i++)
            if (e.indexOf(propertySymbols[i]) < 0)
                result[propertySymbols[i]] = source[propertySymbols[i]];
    return result;
};
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3
        ? target
        : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: DocumentHelper, options, allowDomRendering, createCommercialLicenseLink, DataHelper, createLinksContainer, createImagesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHelper", function() { return DocumentHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowDomRendering", function() { return allowDomRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommercialLicenseLink", function() { return createCommercialLicenseLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHelper", function() { return DataHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinksContainer", function() { return createLinksContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImagesContainer", function() { return createImagesContainer; });
var DocumentHelper = /** @class */ (function () {
    function DocumentHelper() {
    }
    DocumentHelper.createSelector = function (options, isSelected, handler) {
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "sa-question__select-wrapper";
        var select = document.createElement("select");
        select.className = "sa-question__select";
        options.forEach(function (option) {
            var optionElement = DocumentHelper.createElement("option", "", {
                value: option.value,
                text: option.text,
                selected: isSelected(option),
            });
            select.appendChild(optionElement);
        });
        select.onchange = handler;
        selectWrapper.appendChild(select);
        return selectWrapper;
    };
    DocumentHelper.createButton = function (handler, text, className) {
        if (text === void 0) { text = ""; }
        if (className === void 0) { className = "sa-toolbar__button"; }
        var button = DocumentHelper.createElement("span", className, {
            innerText: text,
            onclick: handler,
        });
        return button;
    };
    DocumentHelper.createElement = function (tagName, className, attrs) {
        if (className === void 0) { className = ""; }
        var el = document.createElement(tagName);
        el.className = className;
        if (!!attrs) {
            Object.keys(attrs).forEach(function (key) {
                el[key] = attrs[key];
            });
        }
        return el;
    };
    DocumentHelper.createSvgElement = function (path) {
        var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sa-svg-" + path);
        svgElem.appendChild(useElem);
        return svgElem;
    };
    DocumentHelper.createSvgButton = function (path) {
        var btn = (DocumentHelper.createElement("button", "sa-table__svg-button"));
        btn.appendChild(DocumentHelper.createSvgElement(path));
        return btn;
    };
    DocumentHelper.createSvgToggleButton = function (svgPath1, svPpath2, text1, text2, handler1, handler2, state, className) {
        if (state === void 0) { state = "first"; }
        if (className === void 0) { className = "sa-toolbar__button sa-toolbar__svg-button"; }
        var svg1 = DocumentHelper.createSvgElement(svgPath1);
        var svg2 = DocumentHelper.createSvgElement(svPpath2);
        var button = DocumentHelper.createElement("button", className);
        var toggle = function (e) {
            if (state === "first") {
                state = "second";
                button.title = text2;
                button.removeChild(svg1);
                button.appendChild(svg2);
                handler2(e);
            }
            else if (state === "second") {
                state = "first";
                button.title = text1;
                button.removeChild(svg2);
                button.appendChild(svg1);
                handler1(e);
            }
        };
        if (state === "first") {
            button.title = text1;
            button.appendChild(svg1);
        }
        else if ((state = "second")) {
            button.title = text2;
            button.appendChild(svg2);
        }
        button.onclick = toggle;
        return button;
    };
    DocumentHelper.createInput = function (className, placeholder, defaultValue) {
        if (placeholder === void 0) { placeholder = ""; }
        if (defaultValue === void 0) { defaultValue = ""; }
        var el = DocumentHelper.createElement("input", className, {
            placeholder: placeholder,
            defaultValue: defaultValue,
        });
        return el;
    };
    return DocumentHelper;
}());

var options = {
    runningInBrowser: typeof window.URL.createObjectURL === "function",
};
function allowDomRendering() {
    return options.runningInBrowser;
}
function createCommercialLicenseLink() {
    var container = DocumentHelper.createElement("div", "sa-commercial");
    var link = DocumentHelper.createElement("a", "sa-commercial__text", {
        href: "https://www.surveyjs.io/Buy",
        target: "_blank",
    });
    var containerSpan = DocumentHelper.createElement("span", "");
    var icon = DocumentHelper.createSvgElement("noncommercial");
    var textSpan = DocumentHelper.createElement("span", "sa-commercial__product", {
        innerHTML: "Please purchase a SurveyJS Analytics developer license\n        to\n        use it in your\n        app.",
    });
    container.appendChild(link).appendChild(containerSpan);
    containerSpan.appendChild(icon);
    containerSpan.appendChild(textSpan);
    return container;
}
var DataHelper = /** @class */ (function () {
    function DataHelper() {
    }
    DataHelper.zipArrays = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        var zipArray = [];
        var _loop_1 = function (i) {
            zipArray[i] = [];
            arrays.forEach(function (arr) {
                zipArray[i].push(arr[i]);
            });
        };
        for (var i = 0; i < arrays[0].length; i++) {
            _loop_1(i);
        }
        return zipArray;
    };
    DataHelper.unzipArrays = function (zipArray) {
        var arrays = [];
        zipArray.forEach(function (value, i) {
            value.forEach(function (val, j) {
                if (!arrays[j])
                    arrays[j] = [];
                arrays[j][i] = val;
            });
        });
        return arrays;
    };
    DataHelper.sortDictionary = function (keys, values, desc) {
        var dictionary = this.zipArrays(keys, values);
        var comparator = function (a, b, asc) {
            if (asc === void 0) { asc = true; }
            var result = a[1] < b[1] ? 1 : a[1] == b[1] ? 0 : -1;
            return asc ? result : result * -1;
        };
        dictionary.sort(function (a, b) {
            return desc ? comparator(a, b, false) : comparator(a, b);
        });
        var keysAndValues = this.unzipArrays(dictionary);
        return { keys: keysAndValues[0], values: keysAndValues[1] };
    };
    DataHelper.toPercentage = function (value, maxValue) {
        return (value / maxValue) * 100;
    };
    return DataHelper;
}());

function createLinksContainer(links) {
    var linksContainer = DocumentHelper.createElement("div");
    links.forEach(function (link) {
        linksContainer.appendChild(DocumentHelper.createElement("a", "", {
            innerHTML: link.name,
            download: link.name,
            href: link.content,
        }));
    });
    return linksContainer;
}
function createImagesContainer(links) {
    var linksContainer = DocumentHelper.createElement("div");
    links.forEach(function (link) {
        linksContainer.appendChild(DocumentHelper.createElement("img", "", {
            alt: link.name,
            src: link.content,
        }));
    });
    return linksContainer;
}


/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvZGF0YXRhYmxlcy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2R1dGNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZW5nbGlzaC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL2ZhcnNpLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZnJlbmNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24va29yZWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vbm9yd2VnaWFuLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vcG9ydHVndWVzZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9kYXRhdGFibGVzLnNjc3M/OTNlNSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2RhdGF0YWJsZXMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2NvbHVtbmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9oZWFkZXJleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy9yb3dleHRlbnNpb25zLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy90YWJsZS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUssR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQzs7QUFFTSxTQUFTLG9CQUFvQixDQUNsQyxLQUE0QztJQUU1QyxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ2pCLGNBQWMsQ0FBQyxXQUFXLENBQ3hCLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztTQUNuQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQztBQUVNLFNBQVMscUJBQXFCLENBQ25DLEtBQTRDO0lBRTVDLElBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFDakIsY0FBYyxDQUFDLFdBQVcsQ0FDeEIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ3RDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztTQUNsQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDalBELHlEIiwiZmlsZSI6InN1cnZleS5hbmFseXRpY3MuZGF0YXRhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzRGF0YXRhYmxlc1wiLCBbXCJzdXJ2ZXktY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NEYXRhdGFibGVzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc0RhdGF0YWJsZXNcIl0gPSBmYWN0b3J5KHJvb3RbXCJTdXJ2ZXlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cnZleV9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL2RhdGF0YWJsZXMudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZGV0YWlsXFxcIj48Y2lyY2xlIGN4PVxcXCIxLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNy41XFxcIiBjeT1cXFwiOC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctZHJhZ1xcXCI+PHBhdGggZD1cXFwiTTEzIDVsLTEgMSAxIDFIOVYzbDEgMSAxLTEtMy0zLTMgMyAxIDEgMS0xdjRIM2wxLTEtMS0xLTMgMyAzIDMgMS0xLTEtMWg0djRsLTEtMS0xIDEgMyAzIDMtMy0xLTEtMSAxVjloNGwtMSAxIDEgMSAzLTN6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctaGlkZVxcXCI+PHBhdGggZD1cXFwiTTEyLjc5IDQuMkwxNiAxbC0xLTEtMy4zMiAzLjMyQzEwLjU3IDIuNTUgOS4zMiAyIDggMiAzLjYzIDIgMCA3Ljk3IDAgNy45N3MxLjI3IDIuMSAzLjIxIDMuODJsLTMuMjMgMy4yMy45OC45OCAzLjM1LTMuMzRDNS40MSAxMy40NCA2LjY3IDE0IDggMTRjNC4zNyAwIDgtNiA4LTZzLTEuMjctMi4wOS0zLjIxLTMuOHpNMiA3Ljk3YzEuMDctMS40NyAzLjYxLTQgNi00IC44IDAgMS42LjI3IDIuMzUuNjhsLS43OC43OGMtLjQ2LS4yOS0uOTktLjQ2LTEuNTctLjQ2LTEuNjYgMC0zIDEuMzQtMyAzIDAgLjU4LjE3IDEuMTEuNDYgMS41N2wtLjk3Ljk3QTEzLjM4IDEzLjM4IDAgMCAxIDIgNy45N3ptNiA0Yy0uOCAwLTEuNTktLjI3LTIuMzMtLjY3bC43OC0uNzdjLjQ1LjI3Ljk4LjQ0IDEuNTUuNDQgMS42NiAwIDMtMS4zNCAzLTMgMC0uNTctLjE3LTEuMDktLjQ0LTEuNTVsLjk4LS45OGMxLjExLjg3IDIuMDEgMS45MSAyLjQ2IDIuNTItMS4wNyAxLjQ4LTMuNjEgNC4wMS02IDQuMDF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXByaXZhdGVcXFwiPjxjaXJjbGUgY3g9XFxcIjhcXFwiIGN5PVxcXCI0XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNOCA4Yy0zLjMxIDAtNiAyLjczLTYgNC42N1M1LjI3IDE1IDggMTVzNi0uNCA2LTIuMzNTMTEuMzEgOCA4IDh6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbWFrZXB1YmxpY1xcXCI+PGNpcmNsZSBjeD1cXFwiNlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMCA1YzAgLjM0LS4wNi42Ny0uMTQuOTkuMDUgMCAuMDkuMDEuMTQuMDEgMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTNDOC45NyAwIDguMDcuNTIgNy41MyAxLjMgOC45OCAxLjkxIDEwIDMuMzMgMTAgNXpNNiA5Yy0zLjMxIDAtNiAyLjczLTYgNC42N1MzLjI3IDE2IDYgMTZzNi0uNCA2LTIuMzNTOS4zMSA5IDYgOXpNMTAgN2MtLjE5IDAtLjM4LjAxLS41Ny4wM2E0LjE0IDQuMTQgMCAwIDEtMS4zNyAxLjM5YzMgLjgzIDUuMjMgMy4zMSA1LjQyIDUuMjggMS40NC0uMzEgMi41Mi0uOTIgMi41Mi0yLjAzQzE2IDkuNzQgMTMuMzEgNyAxMCA3elxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW1vdmV0b2RldGFpbHNcXFwiPjxjaXJjbGUgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjE0LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxMy41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTIgMWgzdjloLTN6TTIuMDIgNy4wMkwxIDYgMCA3bDMgMyAzLTMtMS0xLS45NC45NEM0LjMzIDQuNzMgNi4yMSAzIDguNSAzYy4xNyAwIC4zMy4wMy41LjA1VjEuMDNDOC44MyAxLjAxIDguNjcgMSA4LjUgMSA1LjA4IDEgMi4yNyAzLjY2IDIuMDIgNy4wMnpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1ub25jb21tZXJjaWFsXFxcIj48cGF0aCBkPVxcXCJNOCAwTDAgMTVoMTZMOCAwem0xIDEzSDd2LTJoMnYyem0tMi0zVjVoMnY1SDd6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctc29ydGluZ1xcXCI+PHBhdGggZD1cXFwiTTggM2wyIDIgMS0xLTMtMy0zIDMgMSAxek04IDEzbC0yLTItMSAxIDMgMyAzLTMtMS0xelxcXCI+PC9wYXRoPjwvc3ltYm9sPjwvc3ZnPlwiOyIsImV4cG9ydCAqIGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbi8vbG9jYWxpemF0aW9uXG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZmFyc2lcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mcmVuY2hcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9ub3J3ZWdpYW5cIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9wb3J0dWd1ZXNlXCI7XG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vcnVzc2lhblwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2R1dGNoXCI7XG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24va29yZWFuXCI7XG5cbi8vZXh0ZW5zaW9uc1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvcm93ZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvaGVhZGVyZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uL3RhYmxlcy90YWJsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3RhYmxlcy9kYXRhdGFibGVzXCI7XG5leHBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi4vdGFibGVzL2V4dGVuc2lvbnMvdGFibGVleHRlbnNpb25zXCI7XG5leHBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xuIiwiLy9VbmNvbW1lbnQgdGhpcyBsaW5lIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZVxuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBkdXRjaFN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb2VwIGRvb3IgbWlqXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiRGVncm9lcGVyZW4gYmlqIG1palwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0ZWVyIG1palwiLFxuICBoaWRlQ29sdW1uOiBcIktvbG9tIHZlcmJlcmdlblwiLFxuICBzaG93Q29sdW1uOiBcIlRvb24ga29sb21cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiS29sb20gcHJpdsOpIG1ha2VuXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFhayBkZSBrb2xvbSBvcGVuYmFhclwiLFxuICBtb3ZlVG9EZXRhaWw6IFwiR2EgbmFhciBEZXRhaWxcIixcbiAgc2hvd0FzQ29sdW1uOiBcIldlZXJnZXZlbiBhbHMga29sb21cIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiWm9la2VuLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiVmVyd2lqZGVyIHJpamVuXCIsXG4gIHNob3dMYWJlbDogXCJUb25lblwiLFxuICBlbnRyaWVzTGFiZWw6IFwiaW56ZW5kaW5nZW5cIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRla3N0ZW4gaW4gdGFiZWxcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkdlc3RhcGVsZGUgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb251dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlRhYXJ0XCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlZlcnN0cm9vaWVuXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJNZXRlclwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIktvZ2VsXCIsXG4gIGhpZGVCdXR0b246IFwiVmVyYmVyZ2VuXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIk1hYWsgcHJpdmVcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJPcGVuYmFhciBtYWtlblwiLFxuICBzaG93QnV0dG9uOiBcIlRvbmVuXCIsXG4gIHJlc2V0RmlsdGVyOiBcIkZpbHRlciByZXNldHRlblwiLFxuICBjaGFuZ2VMb2NhbGU6IFwiV2lqemlnIGRlIGxhbmRpbnN0ZWxsaW5nXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkRvb3J6aWNodGlnXCIsXG4gIGFkZEVsZW1lbnQ6IFwiS2llcyBlZW4gdnJhYWcgb20gd2VlciB0ZSBnZXZlbiAuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIlN0YW5kYWFyZHZvbGdvcmRlXCIsXG4gIGFzY09yZGVyOiBcIk9wbG9wZW5kXCIsXG4gIGRlc2NPcmRlcjogXCJBZmxvcGVuZFwiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlRvb24ga2xlaW5lIGtvbG9tbWVuXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIkFuZGVyZSBpdGVtcyBlbiBvcG1lcmtpbmdlblwiLFxuICBzaG93UGVyY2VudGFnZXM6IFwiUGVyY2VudGFnZXMgd2VlcmdldmVuXCIsXG4gIGhpZGVQZXJjZW50YWdlczogXCJWZXJiZXJnIHBlcmNlbnRhZ2VzXCIsXG4gIHBkZkRvd25sb2FkQ2FwdGlvbjogXCJQREZcIixcbiAgeGxzeERvd25sb2FkQ2FwdGlvbjogXCJFeGNlbFwiLFxuICBjc3ZEb3dubG9hZENhcHRpb246IFwiQ1NWXCIsXG4gIHNhdmVEaWFncmFtQXNQTkc6IFwiRG93bmxvYWQgcGxvdCBhbHMgZWVuIHBuZ1wiLFxuICBoaWRlRW1wdHlBbnN3ZXJzOiBcIlZlcmJlcmcgbGVnZSBhbnR3b29yZGVuXCIsXG4gIHNob3dFbXB0eUFuc3dlcnM6IFwiVG9vbiBsZWdlIGFudHdvb3JkZW5cIixcbiAgXCJ0b3BOVmFsdWVUZXh0LTFcIjogXCJBbGxlIGFudHdvb3JkZW5cIixcbiAgXCJ0b3BOVmFsdWVUZXh0NVwiOiBcIlRvcCA1IGFudHdvb3JkZW5cIixcbiAgXCJ0b3BOVmFsdWVUZXh0MTBcIjogXCJUb3AgMTAgYW50d29vcmRlblwiLFxuICBcInRvcE5WYWx1ZVRleHQyMFwiOiBcIlRvcCAyMCBhbnR3b29yZGVuXCIsXG59O1xuXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wibmxcIl0gPSBkdXRjaFN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJubFwiXSA9IFwiRHV0Y2hcIjtcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbi8vaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJTaG93IGFzIENvbHVtblwiLFxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCJTZWFyY2guLi5cIixcbiAgcmVtb3ZlUm93czogXCJSZW1vdmUgcm93c1wiLFxuICBzaG93TGFiZWw6IFwiU2hvd1wiLFxuICBlbnRyaWVzTGFiZWw6IFwiZW50cmllc1wiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dHMgaW4gdGFibGVcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiV29yZGNsb3VkXCIsXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFyXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWNrZWQgQmFyXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJEb3VnaG51dFwiLFxuICBjaGFydFR5cGVfcGllOiBcIlBpZVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJTY2F0dGVyXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJHYXVnZVwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxldFwiLFxuICBoaWRlQnV0dG9uOiBcIkhpZGVcIixcbiAgbWFrZVByaXZhdGVCdXR0b246IFwiTWFrZSBwcml2YXRlXCIsXG4gIG1ha2VQdWJsaWNCdXR0b246IFwiTWFrZSBwdWJsaWNcIixcbiAgc2hvd0J1dHRvbjogXCJTaG93XCIsXG4gIGZpbHRlcjogXCJGaWx0ZXJcIixcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzZXQgRmlsdGVyXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJDaGFuZ2UgTG9jYWxlXCIsXG4gIGNsZWFyQnV0dG9uOiBcIkNsZWFyXCIsXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvb3NlIHF1ZXN0aW9uIHRvIHNob3cuLi5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1bHQgT3JkZXJcIixcbiAgYXNjT3JkZXI6IFwiQXNjZW5kaW5nXCIsXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kaW5nXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiU2hvdyBtaW5vciBjb2x1bW5zXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk90aGVyIGl0ZW1zIGFuZCBjb21tZW50c1wiLFxuICBzaG93UGVyY2VudGFnZXM6IFwiU2hvdyBwZXJjZW50YWdlc1wiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiSGlkZSBwZXJjZW50YWdlc1wiLFxuICBwZGZEb3dubG9hZENhcHRpb246IFwiUERGXCIsXG4gIHhsc3hEb3dubG9hZENhcHRpb246IFwiRXhjZWxcIixcbiAgY3N2RG93bmxvYWRDYXB0aW9uOiBcIkNTVlwiLFxuICBzYXZlRGlhZ3JhbUFzUE5HOiBcIkRvd25sb2FkIHBsb3QgYXMgYSBwbmdcIixcbiAgaGlkZUVtcHR5QW5zd2VyczogXCJIaWRlIGVtcHR5IGFuc3dlcnNcIixcbiAgc2hvd0VtcHR5QW5zd2VyczogXCJTaG93IGVtcHR5IGFuc3dlcnNcIixcbiAgXCJ0b3BOVmFsdWVUZXh0LTFcIjogXCJBbGwgYW5zd2Vyc1wiLFxuICBcInRvcE5WYWx1ZVRleHQ1XCI6IFwiVG9wIDUgYW5zd2Vyc1wiLFxuICBcInRvcE5WYWx1ZVRleHQxMFwiOiBcIlRvcCAxMCBhbnN3ZXJzXCIsXG4gIFwidG9wTlZhbHVlVGV4dDIwXCI6IFwiVG9wIDIwIGFuc3dlcnNcIixcbiAgbm9WaXN1YWxpemVyRm9yUXVlc3Rpb246IFwiVGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCB2aXN1YWxpemVkIHlldFwiLFxuICBub1Jlc3VsdHM6IFwiVGhlcmUgYXJlIG5vIHJlc3VsdHMgeWV0XCIsXG4gIHNob3dQZXJWYWx1ZXM6IFwiUGVyIFZhbHVlc1wiLFxuICBzaG93UGVyQ29sdW1uczogXCJQZXIgQ29sdW1uc1wiXG59O1xuXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cbi8vbG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuLy9sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJlblwiXSA9IFwiRW5nbGlzaFwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBmYXJzaVN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcItqv2LHZiNmHINio2YbYr9uMINio2KdcIixcbiAgdW5ncm91cEJ1dHRvbjogXCLYrdiw2YEg2q/YsdmI2YdcIixcbiAgc2VsZWN0QnV0dG9uOiBcItin2YbYqtiu2KfYqFwiLFxuICBoaWRlQ29sdW1uOiBcItmF2K7ZgduMINqp2LHYr9mGINiz2KrZiNmGXCIsXG4gIHNob3dDb2x1bW46IFwi2YbZhdin24zYtCDYs9iq2YjZhlwiLFxuICBtb3ZlVG9EZXRhaWw6IFwi2KfZhtiq2YLYp9mEINio2Ycg2KzYstim24zYp9iqXCIsXG4gIHNob3dBc0NvbHVtbjogXCLZhtmF2KfbjNi0INio2Ycg2LnZhtmI2KfZhiDYs9iq2YjZhlwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwi2YXYqtmI2YYg2K/YsSDYrNiv2YjZhFwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCLYp9io2LEg2qnZhNmF2KfYqlwiLFxuICBjaGFydFR5cGVfYmFyOiBcItmF24zZhNmHINin24xcIixcbiAgY2hhcnRUeXBlX3BpZTogXCLYr9in2KjYsdmHINin24wocGllKVwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCLZvtix2KfaqdmG2K/ar9uMKFNjYXR0ZXIpXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCLYudmC2LHYqNmHINin24xcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCLZhdiu2YHbjFwiLFxuICByZXNldEZpbHRlcjogXCLYqNin2LLZhti02KfZhtuMINmB24zZhNiq2LHZh9inXCIsXG4gIGNsZWFyQnV0dG9uOiBcItm+2KfaqSDaqdix2K/ZhlwiLFxuICBhZGRFbGVtZW50OiBcItin2YbYqtiu2KfYqCDYs9mI2KfZhCDYqNix2KfbjCDZhtmF2KfbjNi0Li4uXCJcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmFcIl0gPSBmYXJzaVN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmYVwiXSA9IFwiRmFyc2koUGVyc2lhbilcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIGZyZW5jaFN0cmluZ3MgPSB7XHJcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXBlclwiLFxyXG4gIHVuZ3JvdXBCdXR0b246IFwiRGlzc29jaWVyXCIsXHJcbiAgc2VsZWN0QnV0dG9uOiBcIlPDqWxlY3Rpb25uZXJcIixcclxuICBoaWRlQ29sdW1uOiBcIk1hc3F1ZXIgY29sb25uZVwiLFxyXG4gIHNob3dDb2x1bW46IFwiQWZmaWNoZXIgY29sb25uZVwiLFxyXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHByaXbDqVwiLFxyXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiUmVuZHJlIGxhIGNvbG9ubmUgcHVibGljXCIsXHJcbiAgbW92ZVRvRGV0YWlsOiBcIkTDqXBsYWNlciB2ZXJzIGTDqXRhaWxzXCIsXHJcbiAgc2hvd0FzQ29sdW1uOiBcIkFmZmljaGVyIGVuIGNvbG9ubmVcIixcclxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dGVzIGVuIHRhYmxlXCIsXHJcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwiTnVhZ2VzIGRlIG1vdHNcIixcclxuICBjaGFydFR5cGVfYmFyOiBcIkJhcnJlc1wiLFxyXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIkJhcnJlcyBlbXBpbMOpZXNcIixcclxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiQW5uZWF1XCIsXHJcbiAgY2hhcnRUeXBlX3BpZTogXCJTZWN0ZXVyc1wiLFxyXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIk51YWdlcyBkZSBwb2ludHNcIixcclxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcclxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJ1bGxlc1wiLFxyXG4gIGZpbHRlcjogXCJGaWx0cmVcIixcclxuICBoaWRlQnV0dG9uOiBcIk1hc3F1ZXJcIixcclxuICByZXNldEZpbHRlcjogXCJSYWZyYWljaGlyIEZpbHRyZXNcIixcclxuICBjbGVhckJ1dHRvbjogXCJSYWZyYWljaGlyXCIsXHJcbiAgYWRkRWxlbWVudDogXCJDaG9pc2lyIGxhIHF1ZXN0aW9uIMOgIGFmZmljaGVyLi4uXCIsXHJcbiAgZGVmYXVsdE9yZGVyOiBcIkRlZmF1dFwiLFxyXG4gIGFzY09yZGVyOiBcIkFzY2VuZGFudFwiLFxyXG4gIGRlc2NPcmRlcjogXCJEZXNjZW5kYW50XCIsXHJcbiAgc2hvd01pbm9yQ29sdW1uczogXCJBZmZpY2hlciBsZXMgY29sb25uZXMgbWluZXVyZXNcIixcclxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJBdXRyZSDDqWzDqW1lbnQgZXQgY29tbWVudGFpcmVzXCIsXHJcbiAgbm9WaXN1YWxpemVyRm9yUXVlc3Rpb246IFwiQ2UgdHlwZSBkZSBxdWVzdGlvbiBuJ2VzdCBwYXMgZW5jb3JlIHZpc3VhbGlzw6lcIixcclxuICBub1Jlc3VsdHM6IFwiSWwgbid5IGEgcGFzIGVuY29yZSBkZSByw6lzdWx0YXRzXCJcclxufTtcclxuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZnJcIl0gPSBmcmVuY2hTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJmclwiXSA9IFwiRnJlbmNoXCI7IiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBrb3JlYW5TdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCLqt7jro7ntlZFcIixcbiAgdW5ncm91cEJ1dHRvbjogXCLqt7jro7kg7ZW07KCcXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCLshKDtg51cIixcbiAgaGlkZUNvbHVtbjogXCLsiKjquYBcIixcbiAgc2hvd0NvbHVtbjogXCLrs7TsnbTquLBcIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwi67mE6rO16rCcXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwi6rO16rCcXCIsXG4gIG1vdmVUb0RldGFpbDogXCLshLjrtoDsoJXrs7RcIixcbiAgc2hvd0FzQ29sdW1uOiBcIuyXtOuhnCDtkZzquLBcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIuyLnOqwge2ZlCDrj4TsmrDrr7hcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwi7Iuc6rCB7ZmUIOuPhOq1rFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIuunieuMgO2YlSDssKjtirhcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwi64iE7KCB66eJ64yA7ZiVIOywqO2KuFwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwi64+E64Sb7ZiVIOywqO2KuFwiLFxuICBjaGFydFR5cGVfcGllOiBcIu2MjOydtO2YlSDssKjtirhcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwi67aE7IKw7ZiVIOywqO2KuFwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi6rKM7J207KeA7ZiVIOywqO2KuFwiLFxuICBjaGFydFR5cGVfYnVsbGV0OiBcIuq4gOuouOumrCDquLDtmLgg7LCo7Yq4XCIsXG4gIGZpbHRlcjogXCLtlYTthLBcIixcbiAgaGlkZUJ1dHRvbjogXCLsiKjquLDquLBcIixcbiAgcmVzZXRGaWx0ZXI6IFwi7LSI6riw7ZmUXCIsXG4gIGNsZWFyQnV0dG9uOiBcIuy0iOq4sO2ZlFwiLFxuICBhZGRFbGVtZW50OiBcIu2RnOyLnO2VoCDsp4jrrLjsnYQg7ISg7YOd7ZWY7IS47JqULlwiLFxuICBkZWZhdWx0T3JkZXI6IFwi6riw67O46rCSXCIsXG4gIGFzY09yZGVyOiBcIuyYpOumhOywqOyInFwiLFxuICBkZXNjT3JkZXI6IFwi64K066a87LCo7IicXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiIOuztOyhsCDsl7Qg7ZGc7IucXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIuq4sO2DgCDsoJzrqqlcIixcbiAgbm9WaXN1YWxpemVyRm9yUXVlc3Rpb246IFwi7KeI66y47JeQIOuMgO2VnCDsi5zqsIHtmZQg64+E7Jqw66+46rCAIOyXhuyKteuLiOuLpFwiLFxuICBub1Jlc3VsdHM6IFwi6rKw6rO86rCAIOyXhuyKteuLiOuLpFwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImtvXCJdID0ga29yZWFuU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcImtvXCJdID0gXCJLb3JlYW5cIjsiLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIG5vcndlZ2lhblN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdydXBwZXJcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJPcHBoZXYgZ3J1cHBlcmluZ1wiLFxuICBzZWxlY3RCdXR0b246IFwiVmVsZ1wiLFxuICBoaWRlQ29sdW1uOiBcIlNranVsIGtvbG9ubmVcIixcbiAgc2hvd0NvbHVtbjogXCJWaXMga29sb25uZVwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJHasO4ciBrb2xvbm5lIHByaXZhdFwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIkdqw7hyIGtvbG9ubmUgb2ZmZW50bGlnXCIsXG4gIG1vdmVUb0RldGFpbDogXCJGbHl0dCB0aWwgZGV0YWxqZXJ0IHZpc25pbmdcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlZpcyBzb20ga29sb25uZVwiLFxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCJTw7hrLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiRmplcm4gcmFkZXJcIixcbiAgc2hvd0xhYmVsOiBcIlZpc1wiLFxuICBlbnRyaWVzTGFiZWw6IFwib3BwZsO4cmluZ2VyXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUYWJlbGx2aXNuaW5nXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk9yZHNreVwiLFxuICBjaGFydFR5cGVfYmFyOiBcIlN0b2xwZWRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhYmxldCBzdG9scGVkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9kb3VnaG51dDogXCJIanVsZGlhZ3JhbVwiLFxuICBjaGFydFR5cGVfcGllOiBcIlNla3RvcmRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiUHVua3RkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJNw6VsZWRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJLdWxlZGlhZ3JhbVwiLFxuICBoaWRlQnV0dG9uOiBcIlNranVsXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIkdqw7hyIHByaXZhdFwiLFxuICBtYWtlUHVibGljQnV0dG9uOiBcIkdqw7hyIG9mZmVudGxpZ1wiLFxuICBzaG93QnV0dG9uOiBcIlZpc1wiLFxuICByZXNldEZpbHRlcjogXCJOdWxsc3RpbGwgZmlsdGVyXCIsXG4gIGNoYW5nZUxvY2FsZTogXCJCeXR0IHNwcsOla1wiLFxuICBjbGVhckJ1dHRvbjogXCJUw7htXCIsXG4gIGFkZEVsZW1lbnQ6IFwiVmVsZyBzcMO4cnNtw6VsLi4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJTdGFuZGFyZFwiLFxuICBhc2NPcmRlcjogXCJTdGlnZW5kZVwiLFxuICBkZXNjT3JkZXI6IFwiU3lua2VuZGVcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJWaXMgbWluZHJlIGtvbG9ubmVyXCIsXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIkFubmV0IG9nIGtvbW1lbnRhcmVyXCIsXG4gIHNob3dQZXJjZW50YWdlczogXCJWaXMgcHJvc2VudGVyXCIsXG4gIGhpZGVQZXJjZW50YWdlczogXCJTa2p1bCBwcm9zZW50ZXJcIixcbn07XG5cbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wibm9cIl0gPSBub3J3ZWdpYW5TdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wibm9cIl0gPSBcIk5vcndlZ2lhblwiO1xuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCB2YXIgcG9ydHVndWVzZVN0cmluZ3MgPSB7XHJcbiAgZ3JvdXBCdXR0b246IFwiQWdydXBhciBQb3IgTWltXCIsXHJcbiAgdW5ncm91cEJ1dHRvbjogXCJEZXNhZ3J1cGFyIFBvciBNaW1cIixcclxuICBzZWxlY3RCdXR0b246IFwiU2VsZWNpb25hclwiLFxyXG4gIGhpZGVDb2x1bW46IFwiRXNjb25kZXIgY29sdW5hXCIsXHJcbiAgc2hvd0NvbHVtbjogXCJNb3N0cmFyIGNvbHVuYVwiLFxyXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIlRvcm5hciBjb2x1bmEgcHJpdmFkYVwiLFxyXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiVG9ybmFyIGNvbHVuYSBww7pibGljYVwiLFxyXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlciBwYXJhIERldGFsaGVzXCIsXHJcbiAgc2hvd0FzQ29sdW1uOiBcIk1vc3RyYXIgY29tbyBDb2x1bmFcIixcclxuICBmaWx0ZXJQbGFjZWhvbGRlcjogXCJQZXNxdWlzYXIuLi5cIixcclxuICByZW1vdmVSb3dzOiBcIlJlbW92ZXIgbGluaGFzXCIsXHJcbiAgc2hvd0xhYmVsOiBcIk1vc3RyYXJcIixcclxuICBlbnRyaWVzTGFiZWw6IFwiZW50cmFkYXNcIixcclxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGV4dG9zIGVtIHRhYmVsYVwiLFxyXG4gIGNoYXJ0VHlwZV9iYXI6IFwiQmFycmFcIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJCYXJyYSBFbXBpbGhhZGFcIixcclxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiUm9zcXVpbmhhXCIsXHJcbiAgY2hhcnRUeXBlX3BpZTogXCJUb3J0YVwiLFxyXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIkxhc3Ryb1wiLFxyXG4gIGNoYXJ0VHlwZV9nYXVnZTogXCJFc2NhbGFcIixcclxuICBjaGFydFR5cGVfYnVsbGV0OiBcIkJhbGFcIixcclxuICBoaWRlQnV0dG9uOiBcIkVzY29uZGVyXCIsXHJcbiAgbWFrZVByaXZhdGVCdXR0b246IFwiVG9ybmFyIHByaXZhZG9cIixcclxuICBtYWtlUHVibGljQnV0dG9uOiBcIlRvcm5hciBww7pibGljb1wiLFxyXG4gIHNob3dCdXR0b246IFwiTW9zdHJhclwiLFxyXG4gIGZpbHRlcjogXCJGaWx0cmFyXCIsXHJcbiAgcmVzZXRGaWx0ZXI6IFwiUmVzdGF1cmFyIEZpbHRyb1wiLFxyXG4gIGNoYW5nZUxvY2FsZTogXCJNdWRhciBMb2NhbGl6YcOnw6NvXCIsXHJcbiAgY2xlYXJCdXR0b246IFwiTGltcGFyXCIsXHJcbiAgYWRkRWxlbWVudDogXCJFc2NvbGhlciBxdWVzdMOjbyBwYXJhIG1vc3RyYXIuLi5cIixcclxuICBkZWZhdWx0T3JkZXI6IFwiT3JkZW5hw6fDo28gUGFkcsOjb1wiLFxyXG4gIGFzY09yZGVyOiBcIkFzY2VuZGVudGVcIixcclxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGVudGVcIixcclxuICBzaG93TWlub3JDb2x1bW5zOiBcIk1vc3RyYXIgY29sdW5hcyBtZW5vcmVzXCIsXHJcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiT3V0cm9zIGl0ZW5zIGUgY29tZW50w6FyaW9zXCIsXHJcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIk1vc3RyYXIgcGVyY2VudHVhaXNcIixcclxuICBoaWRlUGVyY2VudGFnZXM6IFwiRXNjb25kZXIgcGVyY2VudHVhaXNcIixcclxuICBzYXZlRGlhZ3JhbUFzUE5HOiBcIkJhaXhhciBwbG90IGNvbW8gcG5nXCIsXHJcbiAgaGlkZUVtcHR5QW5zd2VyczogXCJFc2NvbmRlciBwZXJndW50YXMgdmF6aWFzXCIsXHJcbiAgc2hvd0VtcHR5QW5zd2VyczogXCJNb3N0cmFyIHBlcmd1bnRhcyB2YXppYXNcIixcclxuICBcInRvcE5WYWx1ZVRleHQtMVwiOiBcIlRvZGFzIGFzIHJlc3Bvc3Rhc1wiLFxyXG4gIFwidG9wTlZhbHVlVGV4dDVcIjogXCJQcmltZWlyYXMgNSByZXNwb3N0YXNcIixcclxuICBcInRvcE5WYWx1ZVRleHQxMFwiOiBcIlByaW1laXJhcyAxMCByZXNwb3N0YXNcIixcclxuICBcInRvcE5WYWx1ZVRleHQyMFwiOiBcIlByaW1laXJhcyAyMCByZXNwb3N0YXNcIixcclxuICBub1Zpc3VhbGl6ZXJGb3JRdWVzdGlvbjogXCJFc3RlIHRpcG8gZGUgcGVyZ3VudGEgYWluZGEgbsOjbyBmb2kgdmlzdWFsaXphZGFcIixcclxuICBub1Jlc3VsdHM6IFwiQWluZGEgbsOjbyBwb3NzdWkgcmVzdWx0YWRvc1wiXHJcbn07XHJcblxyXG4vL1VuY29tbWVudCB0aGVzZSB0d28gbGluZXMgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlLiBZb3Ugc2hvdWxkIHJlcGxhY2UgXCJlblwiIGFuZCBlblN0cmluZ3Mgd2l0aCB5b3VyIGxvY2FsZSAoXCJmclwiLCBcImRlXCIgYW5kIHNvIG9uKSBhbmQgeW91ciB2YXJpYWJsZS5cclxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJwdFwiXSA9IHBvcnR1Z3Vlc2VTdHJpbmdzO1xyXG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJwdFwiXSA9IFwiUG9ydHVndWVzZVwiO1xyXG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgdmFyIHJ1c3NpYW5TdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm91cCBCeSBNZVwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIlVuZ3JvdXAgQnkgTWVcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdCBNZVwiLFxuICBoaWRlQ29sdW1uOiBcIkhpZGUgY29sdW1uXCIsXG4gIHNob3dDb2x1bW46IFwiU2hvdyBjb2x1bW5cIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1ha2UgY29sdW1uIHB1YmxpY1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZSB0byBEZXRhaWxcIixcbiAgZmlsdGVyOiBcItCk0LjQu9GM0YLRgFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG91Z2hudXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCLQodC60YDRi9GC0YxcIixcbiAgc2hvd0J1dHRvbjogXCLQn9C+0LrQsNC30LDRgtGMXCIsXG4gIHJlc2V0RmlsdGVyOiBcItCe0YfQuNGB0YLQuNGC0Ywg0YTQuNC70YzRgtGAXCIsXG4gIGNoYW5nZUxvY2FsZTogXCLQodC80LXQvdC40YLRjCDRj9C30YvQulwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0XCIsXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCLQlNGA0YPQs9C+0LUg0Lgg0LrQvtC80LzQtdC90YLQsNGA0LjQuFwiLFxuICBub1Zpc3VhbGl6ZXJGb3JRdWVzdGlvbjogXCLQrdGC0L7RgiDRgtC40L8g0LLQvtC/0YDQvtGB0LAg0LXRidC1INC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQsNC90LDQu9C40YLQuNC60L7QuVwiLFxuICBub1Jlc3VsdHM6IFwi0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L7RgtGB0YPRgtGB0YLQstGD0Y7RglwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcInJ1XCJdID0gcnVzc2lhblN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJydVwiXSA9IFwiUnVzc2lhblwiO1xuIiwiaW1wb3J0IHsgZW5nbGlzaFN0cmluZ3MgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vZW5nbGlzaFwiO1xuXG5leHBvcnQgdmFyIGxvY2FsaXphdGlvbiA9IHtcbiAgY3VycmVudExvY2FsZVZhbHVlOiBcIlwiLFxuICBkZWZhdWx0TG9jYWxlVmFsdWU6IFwiZW5cIixcbiAgbG9jYWxlczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIGxvY2FsZU5hbWVzOiA8e1tpbmRleDogc3RyaW5nXTogYW55fT57fSxcbiAgc3VwcG9ydGVkTG9jYWxlczogPEFycmF5PGFueT4+W10sXG4gIGdldCBjdXJyZW50TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0TG9jYWxlVmFsdWVcbiAgICAgID8gXCJcIlxuICAgICAgOiB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGN1cnJlbnRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlO1xuICB9LFxuICBzZXQgZGVmYXVsdExvY2FsZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlID0gdmFsO1xuICB9LFxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uKHN0ck5hbWU6IHN0cmluZykge1xuICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGVcbiAgICAgID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV1cbiAgICAgIDogdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gdGhpcy5sb2NhbGVzW3RoaXMuZGVmYXVsdExvY2FsZV07XG4gICAgdmFyIHJlc3VsdCA9IGxvY1tzdHJOYW1lXTtcbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbGVzW1wiZW5cIl1bc3RyTmFtZV0gfHwgc3RyTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgZ2V0TG9jYWxlczogZnVuY3Rpb24oKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZExvY2FsZXMgJiYgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXBwb3J0ZWRMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuc3VwcG9ydGVkTG9jYWxlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNvcnQoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSBlbmdsaXNoU3RyaW5ncztcbig8YW55PmxvY2FsaXphdGlvbikubG9jYWxlc1tcImVuXCJdID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcImVuZ2xpc2hcIjtcbiIsImV4cG9ydCBlbnVtIFF1ZXN0aW9uTG9jYXRpb24ge1xuICBDb2x1bW4sXG4gIFJvdyxcbn1cbmV4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHtcbiAgVGV4dCxcbiAgRmlsZUxpbmssXG4gIEltYWdlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG4gIGlzUHVibGljOiBib29sZWFuO1xuICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGlzQ29tbWVudD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBsb2NhbGU/OiBzdHJpbmc7XG4gIGVsZW1lbnRzPzogSVRhYmxlQ29sdW1uW107XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQZXJtaXNzaW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpc1B1YmxpYzogYm9vbGVhbjtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IElUYWJsZU9wdGlvbnMsIFRhYmxlLCBUYWJsZVJvdyB9IGZyb20gXCIuL3RhYmxlXCI7XG5pbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgRXZlbnQgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IENvbHVtbkRhdGFUeXBlLCBJVGFibGVDb2x1bW4sIFF1ZXN0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmltcG9ydCBcIi4vZGF0YXRhYmxlcy5zY3NzXCI7XG5cbmlmICghIWRvY3VtZW50KSB7XG4gIHZhciBzdmdUZW1wbGF0ZSA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4uL3N2Z2J1bmRsZS5odG1sXCIpO1xuICB2YXIgdGVtcGxhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wbGF0ZUhvbGRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRlbXBsYXRlSG9sZGVyLmlubmVySFRNTCA9IHN2Z1RlbXBsYXRlO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlSG9sZGVyKTtcbn1cblxudmFyIGpRdWVyeSA9ICg8YW55PndpbmRvdylbXCJqUXVlcnlcIl07XG5cbmludGVyZmFjZSBEYXRhVGFibGVzT3B0aW9ucyBleHRlbmRzIElUYWJsZU9wdGlvbnMge1xuICBidXR0b25zOiBib29sZWFuIHwgc3RyaW5nW10gfCBhbnlbXSB8IGFueTtcblxuICBkb206IHN0cmluZztcblxuICBvcmRlckZpeGVkOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHwgQXJyYXk8QXJyYXk8bnVtYmVyIHwgc3RyaW5nPj4gfCBvYmplY3Q7XG5cbiAgcm93R3JvdXA6IGJvb2xlYW4gfCBhbnk7XG5cbiAgaGVhZGVyQ2FsbGJhY2s6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZXMgZXh0ZW5kcyBUYWJsZSB7XG4gIHB1YmxpYyBkYXRhdGFibGVBcGk6IGFueTtcblxuICBwdWJsaWMgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBpcyBmaXJlZCBjb2x1bW5zIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZC5cbiAgICogPGJyLz4gc2VuZGVyIHRoZSBkYXRhdGFibGVzIGFkYXB0ZXJcbiAgICogPGJyLz4gb3B0aW9ucy5zdXJ2ZXkgY3VycmVudCBzdXJ2ZXlcbiAgICogQHNlZSBnZXRDb2x1bW5zXG4gICAqL1xuICBwdWJsaWMgb25Db2x1bW5zUmVvcmRlcjogRXZlbnQ8XG4gICAgKHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogRGF0YVRhYmxlcywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgc3RhdGljIGluaXRKUXVlcnkoJDogYW55KSB7XG4gICAgalF1ZXJ5ID0gJDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0IGhhdmVDb21tZXJjaWFsTGljZW5zZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBUYWJsZS5oYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSB2YWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgb3B0aW9uczogRGF0YVRhYmxlc09wdGlvbnMsXG4gICAgX2NvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4gPSBbXVxuICApIHtcbiAgICBzdXBlcihzdXJ2ZXksIGRhdGEsIG9wdGlvbnMsIF9jb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5yZW5kZXJSZXN1bHQpIHJldHVybjtcbiAgICBjb25zdCB0YWJsZU5vZGUgPSB0aGlzLnJlbmRlclJlc3VsdC5jaGlsZHJlblswXTtcbiAgICBpZiAoalF1ZXJ5LmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSh0YWJsZU5vZGUpKSB7XG4gICAgICBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YXRhYmxlQXBpID0gdW5kZWZpbmVkO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgc3VwZXIuc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lLCBpc1Zpc2libGUpO1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKS52aXNpYmxlKGlzVmlzaWJsZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uTG9jYXRpb24oY29sdW1uTmFtZTogc3RyaW5nLCBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbikge1xuICAgIHN1cGVyLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIGxvY2F0aW9uKTtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5kYXRhdGFibGVBcGkuY29sdW1uKGNvbHVtbk5hbWUgKyBcIjpuYW1lXCIpO1xuICAgIHZhciBpc0NvbHVtbkxvY2F0aW9uID0gbG9jYXRpb24gPT0gUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW47XG4gICAgY29sdW1uLnZpc2libGUoaXNDb2x1bW5Mb2NhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YXRhYmxlQXBpLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlDb2x1bW5GaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICBpZiAoY29sdW1uLnNlYXJjaCgpICE9PSB2YWx1ZSkge1xuICAgICAgY29sdW1uLnNlYXJjaCh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnRCeUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZGF0YXRhYmxlQXBpLmNvbHVtbihjb2x1bW5OYW1lICsgXCI6bmFtZVwiKTtcbiAgICBjb2x1bW4ub3JkZXIoZGlyZWN0aW9uKS5kcmF3KGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0UGFnZVNpemUodmFsdWUpO1xuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcbiAgICAgIHRoaXMuZGF0YXRhYmxlQXBpLnBhZ2UubGVuKHZhbHVlKS5kcmF3KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0UGFnZU51bWJlcih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5kYXRhdGFibGVBcGkucGFnZSh2YWx1ZSkuZHJhdyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhdGF0YWJsZUFwaS5wYWdlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgc3VwZXIucmVuZGVyKHRhcmdldE5vZGUpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0YXJnZXROb2RlLmNsYXNzTmFtZSArPSBcIiBzYS10YWJsZSBzYS1kYXRhdGFibGVzXCI7XG5cbiAgICBjb25zdCB0YWJsZU5vZGUgPSA8SFRNTFRhYmxlRWxlbWVudD4oXG4gICAgICBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgXCJcIilcbiAgICApO1xuICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XG4gICAgdmFyIGNvbHVtbnNEYXRhOiBhbnkgPSBjb2x1bW5zLm1hcCgoYzogYW55KSA9PiBjLmRhdGEpO1xuICAgIGNvbnN0IGR0QnV0dG9uQ2xhc3MgPVxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLXNtYWxsIHNhLXRhYmxlX19idG4tLWdyYXlcIjtcbiAgICBjb25zdCBvcHRpb25zID0galF1ZXJ5LmV4dGVuZChcbiAgICAgIHRydWUsXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7IGV4dGVuZDogXCJjb3B5XCIsIGNsYXNzTmFtZTogZHRCdXR0b25DbGFzcyB9LFxuICAgICAgICAgIHsgZXh0ZW5kOiBcImNzdlwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgICB7IGV4dGVuZDogXCJwcmludFwiLCBjbGFzc05hbWU6IGR0QnV0dG9uQ2xhc3MgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZG9tOiAnQjxcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uc1wiPnBydGlwJyxcbiAgICAgICAgLy8gb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcGFnZUxlbmd0aDogdGhpcy5jdXJyZW50UGFnZVNpemUsXG4gICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICBjb2xSZW9yZGVyOiB7XG4gICAgICAgICAgZml4ZWRDb2x1bW5zTGVmdDogMSxcbiAgICAgICAgICByZWFsdGltZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8vb3JkZXJGaXhlZDogW1sxLCBcImFzY1wiXV0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgc1NlYXJjaDogXCIgXCIsXG4gICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgICAgc0xlbmd0aE1lbnU6IFwiU2hvdyBfTUVOVV8gZW50cmllc1wiLFxuICAgICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICBwcmV2aW91czogXCIgXCIsXG4gICAgICAgICAgICBuZXh0OiBcIiBcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IFwiYXBpXCIsXG4gICAgICAgIGhlYWRlckNhbGxiYWNrOiAoXG4gICAgICAgICAgdGhlYWQ6IGFueSxcbiAgICAgICAgICBkYXRhOiBhbnksXG4gICAgICAgICAgc3RhcnQ6IGFueSxcbiAgICAgICAgICBlbmQ6IGFueSxcbiAgICAgICAgICBkaXNwbGF5OiBhbnlcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgdmFyIGRhdGF0YWJsZUFwaSA9IGpRdWVyeSh0YWJsZU5vZGUpLmRhdGFUYWJsZSgpLmFwaSgpO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBkYXRhdGFibGVBcGlcbiAgICAgICAgICAgIC5jb2x1bW5zKClcbiAgICAgICAgICAgIC5lcSgwKVxuICAgICAgICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgdmFyICR0aE5vZGUgPSBqUXVlcnkoZGF0YXRhYmxlQXBpLmNvbHVtbnMoaW5kZXgpLmhlYWRlcigpKTtcbiAgICAgICAgICAgICAgJHRoTm9kZS51bmJpbmQoXCJjbGljay5EVFwiKTtcbiAgICAgICAgICAgICAgaWYgKCEhY29sdW1uc0RhdGFbaW5kZXhdICYmICR0aE5vZGUuaGFzKFwiYnV0dG9uXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwic2EtdGFibGVfX2FjdGlvbi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2VsZi5leHRlbnNpb25zLnJlbmRlcihjb250YWluZXIsIFwiY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbnNEYXRhW2luZGV4XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICR0aE5vZGUucHJlcGVuZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgKTtcblxuICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcbiAgICB0YWJsZU5vZGUuY2xhc3NOYW1lID0gXCJzYS1kYXRhdGFibGVzX190YWJsZSBkaXNwbGF5IHJlc3BvbnNpdmUgZGF0YVRhYmxlXCI7XG5cbiAgICBjb25zdCBkYXRhdGFibGVBcGlSZWYgPSAodGhpcy5kYXRhdGFibGVBcGkgPSBqUXVlcnkodGFibGVOb2RlKS5EYXRhVGFibGUoXG4gICAgICBvcHRpb25zXG4gICAgKSk7XG4gICAgdmFyIGV4dGVuc2lvbnNDb250YWluZXIgPSBqUXVlcnkoXCJkaXYuc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25zXCIpWzBdO1xuXG4gICAgLy8gdGhpcy5vblRhYmxlVG9vbHNDcmVhdGVkLmZpcmUodGhpcywgeyBleHRlbnNpb25zOiBleHRlbnNpb25zIH0pO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIoZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJoZWFkZXJcIik7XG5cbiAgICBkYXRhdGFibGVBcGlSZWYucGFnZShzZWxmLmN1cnJlbnRQYWdlTnVtYmVyKTtcbiAgICB0aGlzLmRhdGF0YWJsZUFwaS5yb3dHcm91cCgpLmVuYWJsZShmYWxzZSkuZHJhdyhmYWxzZSk7XG5cbiAgICBkYXRhdGFibGVBcGlSZWYub24oXG4gICAgICBcImNvbHVtbi1yZW9yZGVyXCIsXG4gICAgICAoZTogYW55LCBzZXR0aW5nczogYW55LCBkZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5tb3ZlQ29sdW1uKGRldGFpbHMuZnJvbSAtIDEsIGRldGFpbHMudG8gLSAxKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgICAgICB0aGlzLm9uQ29sdW1uc1Jlb3JkZXIuZmlyZSh0aGlzLCB7IGNvbHVtbnM6IHRoaXMuY29sdW1ucyB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZGF0YXRhYmxlQXBpUmVmXG4gICAgICAucm93cygpXG4gICAgICAuZXEoMClcbiAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBkYXRhdGFibGVBcGlSZWYucm93KGluZGV4KTtcbiAgICAgICAgdmFyIGRldGFpbHNUciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgdmFyIGRldGFpbHNUZCA9IDxIVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQ+KFxuICAgICAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNhLWRhdGF0YWJsZXNfX2RldGFpbHMtY29udGFpbmVyXCIpXG4gICAgICAgICk7XG4gICAgICAgIGRldGFpbHNUci5hcHBlbmRDaGlsZChkZXRhaWxzVGQpO1xuICAgICAgICB2YXIgcm93RWxlbWVudCA9IHJvdy5ub2RlKCk7XG4gICAgICAgIHZhciBmaXJzdENlbGwgPSByb3cuY2VsbChyb3cuaW5kZXgoKSwgMCkubm9kZSgpO1xuICAgICAgICB2YXIgdGFibGVSb3cgPSBuZXcgRGF0YXRhYmxlc1Jvdyh0aGlzLCBmaXJzdENlbGwsIGRldGFpbHNUZCwgcm93KTtcbiAgICAgICAgdGFibGVSb3cub25Ub2dnbGVEZXRhaWxzLmFkZCgoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgZGV0YWlsc1RkLmNvbFNwYW4gPSByb3dFbGVtZW50LmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICAgICAgcm93RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgZGV0YWlsc1RyLFxuICAgICAgICAgICAgICByb3dFbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoISFkZXRhaWxzVHIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICBkZXRhaWxzVHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkZXRhaWxzVHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Jvd3MucHVzaCh0YWJsZVJvdyk7XG4gICAgICAgIHRhYmxlUm93LnJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgZGF0YXRhYmxlQXBpUmVmLmRyYXcoZmFsc2UpO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zKCk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IGFueSA9IHRoaXMuY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgIGRhdGE6IGNvbHVtbi5uYW1lLFxuICAgICAgICBzVGl0bGU6IChxdWVzdGlvbiAmJiAodGhpcy5vcHRpb25zLnVzZU5hbWVzQXNUaXRsZXMgPyBxdWVzdGlvbi5uYW1lIDogcXVlc3Rpb24udGl0bGUpKSB8fCBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgIHZpc2libGU6IHRoaXMuaXNDb2x1bW5WaXNpYmxlKGNvbHVtbiksXG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHRDb250ZW50OiBcIlwiLFxuICAgICAgICB3aWR0aDpcbiAgICAgICAgICB0eXBlb2YgY29sdW1uLndpZHRoID09IFwibnVtYmVyXCIgPyBjb2x1bW4ud2lkdGggKyBcInB4XCIgOiBjb2x1bW4ud2lkdGgsXG4gICAgICAgIHJlbmRlcjogKF9kYXRhOiBvYmplY3QsIF90eXBlOiBzdHJpbmcsIHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcm93W2NvbHVtbi5uYW1lXTtcbiAgICAgICAgICBpZiAoY29sdW1uLmRhdGFUeXBlID09PSBDb2x1bW5EYXRhVHlwZS5GaWxlTGluaykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sdW1uLmRhdGFUeXBlID09PSBDb2x1bW5EYXRhVHlwZS5JbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiPGltYWdlIHNyYz0nXCIgKyB2YWx1ZSArIFwiJy8+XCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8galF1ZXJ5KFwiPGRpdj5cIikudGV4dCh2YWx1ZSkuaHRtbCgpXG4gICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICBkZWZhdWx0Q29udGVudDogXCJcIixcbiAgICAgIH0sXG4gICAgXS5jb25jYXQoY29sdW1ucyk7XG4gIH1cblxuICBwdWJsaWMgbGF5b3V0KCkge1xuICAgICEhdGhpcy5kYXRhdGFibGVBcGkgJiYgdGhpcy5kYXRhdGFibGVBcGkuY29sdW1ucy5hZGp1c3QoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlc1JvdyBleHRlbmRzIFRhYmxlUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcbiAgICBwcm90ZWN0ZWQgZXh0ZW5zaW9uc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX2lubmVyUm93OiBhbnlcbiAgKSB7XG4gICAgc3VwZXIodGFibGUsIGV4dGVuc2lvbnNDb250YWluZXIsIGRldGFpbHNDb250YWluZXIpO1xuICAgIHRoaXMucm93RWxlbWVudCA9IF9pbm5lclJvdy5ub2RlKCk7XG4gICAgdGhpcy5yb3dEYXRhID0gX2lubmVyUm93LmRhdGEoKTtcbiAgICB0aGlzLl9pbm5lclJvdyA9IHRoaXMuX2lubmVyUm93LnJvdyh0aGlzLnJvd0VsZW1lbnQpO1xuICAgICg8RGF0YVRhYmxlcz50YWJsZSkub25Db2x1bW5zUmVvcmRlci5hZGQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIHJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHJvd0RhdGE6IGFueTtcblxuICBwdWJsaWMgZ2V0IGlubmVyUm93KCkge1xuICAgIHJldHVybiB0aGlzLl9pbm5lclJvdy5yb3codGhpcy5yb3dFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5yb3dFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIGdldFJvd0RhdGEoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnJvd0RhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuaW5kZXgoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5pbm5lclJvdy5yZW1vdmUoKS5kcmF3KCk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25Mb2NhdGlvbiwgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJkcmFnXCIsXG4gIHZpc2libGVJbmRleDogMCxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX3N2Zy1idXR0b24gc2EtdGFibGVfX2RyYWctYnV0dG9uXCJcbiAgICApO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwiZHJhZ1wiKSk7XG4gICAgYnRuLm9ubW91c2Vkb3duID0gKGUpID0+IHtcbiAgICAgIHRhYmxlLmVuYWJsZUNvbHVtblJlb3JkZXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwic29ydFwiLFxuICB2aXNpYmxlSW5kZXg6IDEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgZGVzY1RpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImRlc2NPcmRlclwiKTtcbiAgICBjb25zdCBhc2NUaXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJhc2NPcmRlclwiKTtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwic29ydGluZ1wiKTtcbiAgICBidG4udGl0bGUgPSBcIlwiO1xuICAgIHZhciBkaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImFzY1wiKSB7XG4gICAgICAgIGJ0bi50aXRsZSA9IGRlc2NUaXRsZTtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkZXNjXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4udGl0bGUgPSBhc2NUaXRsZTtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICAgIH1cbiAgICAgIHRhYmxlLnNvcnRCeUNvbHVtbihvcHRpb25zLmNvbHVtbk5hbWUsIGRpcmVjdGlvbik7XG4gICAgfTtcbiAgICBidG4ub25kcmFnID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImhpZGVcIixcbiAgdmlzaWJsZUluZGV4OiAyLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIHZhciBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdCdXR0b24oXCJoaWRlXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJoaWRlQ29sdW1uXCIpO1xuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eShvcHRpb25zLmNvbHVtbk5hbWUsIGZhbHNlKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwibW92ZXRvZGV0YWlsc1wiLFxuICB2aXNpYmxlSW5kZXg6IDMsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwibW92ZXRvZGV0YWlsc1wiKTtcbiAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibW92ZVRvRGV0YWlsXCIpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihvcHRpb25zLmNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uUm93KTtcbiAgICB9O1xuICAgIHJldHVybiBidXR0b247XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiZmlsdGVyXCIsXG4gIHZpc2libGVJbmRleDogNCxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICB2YXIgZWwgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVJbnB1dChcbiAgICAgIFwic2EtdGFibGVfX2ZpbHRlclwiLFxuICAgICAgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlclBsYWNlaG9sZGVyXCIpXG4gICAgKTtcbiAgICBlbC5vbmNsaWNrID0gKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZWwub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgdGFibGUuYXBwbHlDb2x1bW5GaWx0ZXIob3B0aW9ucy5jb2x1bW5OYW1lLCBlbC52YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwibWFrZXB1YmxpY1wiLFxuICB2aXNpYmxlSW5kZXg6IC0xLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbWFrZVByaXZhdGVTdmcgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibWFrZXByaXZhdGVcIik7XG4gICAgY29uc3QgbWFrZVB1YmxpY1N2ZyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJtYWtlcHVibGljXCIpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHRhYmxlLmdldENvbHVtbkJ5TmFtZShvcHRpb25zLmNvbHVtbk5hbWUpO1xuXG4gICAgdXBkYXRlU3RhdGUoY29sdW1uKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVByaXZhdGVTdmcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChtYWtlUHVibGljU3ZnKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29sdW1uLmlzUHVibGljID0gIWNvbHVtbi5pc1B1YmxpYztcbiAgICAgIHVwZGF0ZVN0YXRlKGNvbHVtbik7XG4gICAgICB0YWJsZS5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrICYmXG4gICAgICAgIHRhYmxlLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGFibGUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShjb2x1bW46IElUYWJsZUNvbHVtbikge1xuICAgICAgaWYgKGNvbHVtbi5pc1B1YmxpYykge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJzYS10YWJsZV9fc3ZnLWJ1dHRvblwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVByaXZhdGVDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b24gc2EtdGFibGVfX3N2Zy1idXR0b24tLWFjdGl2ZVwiO1xuICAgICAgICBidXR0b24udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWFrZVB1YmxpY0NvbHVtblwiKTtcbiAgICAgICAgbWFrZVByaXZhdGVTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbWFrZVB1YmxpY1N2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlUm93IH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IENvbHVtbkRhdGFUeXBlLCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJpdmF0ZSByb3c6IFRhYmxlUm93LFxuICAgIHByb3RlY3RlZCB0YXJnZXROb2RlOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHNUYWJsZSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBcInNhLXRhYmxlX19kZXRhaWwtdGFibGVcIlxuICAgICk7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGRldGFpbHNUYWJsZTogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsb2NhdGlvbiA9IFwiZGV0YWlsc1wiO1xuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWlsc1RhYmxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICB0aGlzLnRhYmxlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2F0aW9uID09PSBRdWVzdGlvbkxvY2F0aW9uLlJvdyAmJiBjb2x1bW4pXG4gICAgICAuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgICAgICB2YXIgdGQxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHtcbiAgICAgICAgICBpbm5lckhUTUw6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0ZDIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMi50ZXh0Q29udGVudCA9IHRoaXMucm93LmdldFJvd0RhdGEoKVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGlmKGNvbHVtbi5kYXRhVHlwZSA9PT0gQ29sdW1uRGF0YVR5cGUuSW1hZ2UpIHtcbiAgICAgICAgICB0ZDIuaW5uZXJIVE1MID0gXCI8aW1hZ2Ugc3JjPSdcIiArIHRkMi50ZXh0Q29udGVudCArIFwiJy8+XCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRkMyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGQzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uKGNvbHVtbi5uYW1lKSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgfSk7XG4gICAgdmFyIHJvdyA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNhLXRhYmxlX19kZXRhaWxcIik7XG4gICAgdmFyIHRkID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIsIFwiXCIsIHsgY29sU3BhbjogMyB9KTtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGhpcy50YWJsZSk7XG4gICAgZXh0ZW5zaW9ucy5yZW5kZXIodGQsIFwiZGV0YWlsc1wiLCB7IHJvdzogdGhpcy5yb3cgfSk7XG4gICAgaWYgKHRkLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXROb2RlLmFwcGVuZENoaWxkKHRoaXMuZGV0YWlsc1RhYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTaG93QXNDb2x1bW5CdXR0b24gPSAoY29sdW1uTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyYXlcIixcbiAgICAgIHsgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0FzQ29sdW1uXCIpIH1cbiAgICApO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnRhYmxlLnNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWUsIFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgaWYgKCEhdGhpcy5kZXRhaWxzVGFibGUucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5kZXRhaWxzVGFibGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiaGVhZGVyXCIsXG4gIG5hbWU6IFwiZmlsdGVyXCIsXG4gIHZpc2libGVJbmRleDogMCxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGlucHV0ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlSW5wdXQoXG4gICAgICBcInNhLXRhYmxlX19nbG9iYWwtZmlsdGVyIHNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uXCIsXG4gICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyUGxhY2Vob2xkZXJcIilcbiAgICApO1xuICAgIGlucHV0Lm9uY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRhYmxlLmFwcGx5RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiaGVhZGVyXCIsXG4gIG5hbWU6IFwic2hvd2NvbHVtblwiLFxuICB2aXNpYmxlSW5kZXg6IDIsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZHJvcGRvd24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzZWxlY3RcIixcbiAgICAgIFwic2EtdGFibGVfX3Nob3ctY29sdW1uIHNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uXCJcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdmFyIGhpZGRlbkNvbHVtbnMgPSB0YWJsZS5jb2x1bW5zLmZpbHRlcihcbiAgICAgICAgKGNvbHVtbjogYW55KSA9PiAhY29sdW1uLmlzVmlzaWJsZVxuICAgICAgKTtcbiAgICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICB0ZXh0OiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd0NvbHVtblwiKSxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgIHZhciB0ZXh0ID0gY29sdW1uLmRpc3BsYXlOYW1lIHx8IGNvbHVtbi5uYW1lO1xuICAgICAgICBpZiAoISF0ZXh0ICYmIHRleHQubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICB0aXRsZTogY29sdW1uLmRpc3BsYXlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkcm9wZG93bi5vbmNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdmFsKSByZXR1cm47XG4gICAgICB0YWJsZS5zZXRDb2x1bW5WaXNpYmlsaXR5KHZhbCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdmFyIG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICB0YWJsZS5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5hZGQob25WaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcblxuICAgIHRoaXMub25EZXN0cm95ID0gKCkgPT4ge1xuICAgICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQucmVtb3ZlKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gZHJvcGRvd247XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiaGVhZGVyXCIsXG4gIG5hbWU6IFwic2hvd2VudHJpZXNcIixcbiAgdmlzaWJsZUluZGV4OiAzLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgZnVuY3Rpb24gZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICB2YXIgb3B0aW9uc1ZhbHVlcyA9IFtcIjFcIiwgXCI1XCIsIFwiMTBcIiwgXCIyNVwiLCBcIjUwXCIsIFwiNzVcIiwgXCIxMDBcIl07XG4gICAgICBvcHRpb25zVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICB0ZXh0OiB2YWwsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh0YWJsZS5nZXRQYWdlU2l6ZSgpKTtcblxuICAgICAgZWwub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRhYmxlLnNldFBhZ2VTaXplKE51bWJlcihlbC52YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvckNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJzYS10YWJsZV9fZW50cmllc1wiXG4gICAgKTtcbiAgICBjb25zdCBzaG93U3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLXJpZ2h0XCIsXG4gICAgICB7XG4gICAgICAgIGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dMYWJlbFwiKSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGVudHJpZXNTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3BhblwiLFxuICAgICAgXCJzYS10YWJsZV9fZW50cmllcy1sYWJlbCBzYS10YWJsZV9fZW50cmllcy1sYWJlbC0tbGVmdFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlbnRyaWVzTGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcblxuICAgIHNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dTcGFuKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRFbnRyaWVzRHJvcGRvd24odGFibGUpKTtcbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyaWVzU3Bhbik7XG4gICAgcmV0dXJuIHNlbGVjdG9yQ29udGFpbmVyO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInJlbW92ZXJvd3NcIixcbiAgdmlzaWJsZUluZGV4OiAtMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGUpIHtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tZ3JlZW4gc2EtdGFibGVfX2hlYWRlci1leHRlbnNpb24gXCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlbW92ZVJvd3NcIikgfVxuICAgICk7XG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0YWJsZS5nZXRDcmVhdGVkUm93cygpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBpZiAocm93LmdldElzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImNoYW5nZWxvY2FsZVwiLFxuICB2aXNpYmxlSW5kZXg6IDEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGxvY2FsZXMgPSB0YWJsZS5nZXRMb2NhbGVzKCk7XG4gICAgaWYgKGxvY2FsZXMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWwgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcInNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uXCIsIHt9KVxuICAgICk7XG4gICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImNoYW5nZUxvY2FsZVwiKV0uY29uY2F0KFxuICAgICAgbG9jYWxlc1xuICAgICk7XG4gICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgdGV4dDogdmFsLFxuICAgICAgfSk7XG4gICAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGFibGUubG9jYWxlID0gZWwudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJyb3dcIixcbiAgbmFtZTogXCJkZXRhaWxzXCIsXG4gIHZpc2libGVJbmRleDogMCxcbiAgcmVuZGVyOiAoX3RhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiB7XG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwiZGV0YWlsXCIpO1xuICAgIGJ0bi50aXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TWlub3JDb2x1bW5zXCIpO1xuICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgc2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIjtcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG9wdGlvbnMucm93LnRvZ2dsZURldGFpbHMoKTtcbiAgICB9O1xuICAgIHJldHVybiBidG47XG4gIH0sXG59KTtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwic2VsZWN0XCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKF90YWJsZSwgb3B0KSB7XG4gICAgdmFyIHJvdyA9IG9wdC5yb3c7XG4gICAgdmFyIGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+RG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIFwic2EtdGFibGVfX3Jvdy1leHRlbnNpb25cIixcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgfVxuICAgICk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHJvdy5nZXRJc1NlbGVjdGVkKCk7XG4gICAgY2hlY2tib3gub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb3cudG9nZ2xlU2VsZWN0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5cbmludGVyZmFjZSBJVGFibGVFeHRlbnNpb24ge1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZpc2libGVJbmRleDogbnVtYmVyO1xuICByZW5kZXI6ICh0YWJsZTogVGFibGUsIG9wdDogYW55KSA9PiBIVE1MRWxlbWVudDtcbiAgZGVzdHJveT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUV4dGVuc2lvbnMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlOiBUYWJsZSkge31cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0ZW5zaW9uczogeyBbbG9jYXRpb246IHN0cmluZ106IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gfSA9IHt9O1xuICBwcml2YXRlIHJlbmRlcmVkRXh0ZW5zaW9uczogQXJyYXk8SVRhYmxlRXh0ZW5zaW9uPiA9IFtdO1xuXG4gIHB1YmxpYyByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQsIGxvY2F0aW9uOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IFRhYmxlRXh0ZW5zaW9ucy5leHRlbnNpb25zW2xvY2F0aW9uXTtcbiAgICBpZiAoISFleHRlbnNpb25zKSB7XG4gICAgICBleHRlbnNpb25zID0gdGhpcy5zb3J0RXh0ZW5zaW9ucyhleHRlbnNpb25zKTtcbiAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiB7XG4gICAgICAgIGlmICghIWV4dGVuc2lvbi5yZW5kZXIpIHtcbiAgICAgICAgICB2YXIgYWN0aW9uID0gZXh0ZW5zaW9uLnJlbmRlcih0aGlzLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICBpZiAoISFhY3Rpb24pIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLnB1c2goZXh0ZW5zaW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgaWYgKCEhZXh0ZW5zaW9uLmRlc3Ryb3kpIGV4dGVuc2lvbi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlZEV4dGVuc2lvbnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dKVxuICAgICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0gPSBbXTtcbiAgICB0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXS5wdXNoKGV4dGVuc2lvbik7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyByZW1vdmVFeHRlbnNpb24oZXh0ZW5zaW9uOiBJVGFibGVFeHRlbnNpb24pIHtcbiAgICBpZighZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dO1xuICAgIGNvbnN0IGluZGV4ID0gZXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbik7XG4gICAgaWYoaW5kZXggPj0gMCkge1xuICAgICAgZXh0ZW5zaW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckV4dGVuc2lvbihcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIGFjdGlvbk5hbWU6IHN0cmluZ1xuICApIHtcbiAgICBpZighYWN0aW9uTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZighIWxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBleHRlbnNpb24gPSBUYWJsZUV4dGVuc2lvbnMuZmluZEV4dGVuc2lvbihsb2NhdGlvbiwgYWN0aW9uTmFtZSk7XG4gICAgICBUYWJsZUV4dGVuc2lvbnMucmVtb3ZlRXh0ZW5zaW9uKGV4dGVuc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXh0ZW5zaW9ucykuZm9yRWFjaCgobG9jYXRpb246c3RyaW5nKSA9PiBUYWJsZUV4dGVuc2lvbnMudW5yZWdpc3RlckV4dGVuc2lvbihsb2NhdGlvbiwgYWN0aW9uTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmluZEV4dGVuc2lvbihcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIGFjdGlvbk5hbWU6IHN0cmluZ1xuICApOiBJVGFibGVFeHRlbnNpb24ge1xuICAgIGlmICghdGhpcy5leHRlbnNpb25zW2xvY2F0aW9uXSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGV4dGVuc2lvbiA9IHRoaXMuZXh0ZW5zaW9uc1tsb2NhdGlvbl0uZmlsdGVyKGZ1bmN0aW9uIChcbiAgICAgIGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uXG4gICAgKSB7XG4gICAgICByZXR1cm4gZXh0ZW5zaW9uLm5hbWUgPT0gYWN0aW9uTmFtZTtcbiAgICB9KVswXTtcbiAgICByZXR1cm4gZXh0ZW5zaW9uIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHNvcnRFeHRlbnNpb25zKGV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0ZW5zaW9ucykpIHJldHVybjtcbiAgICByZXR1cm4gW11cbiAgICAgIC5jb25jYXQoZXh0ZW5zaW9ucy5maWx0ZXIoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLnZpc2libGVJbmRleCA+PSAwKSlcbiAgICAgIC5zb3J0KChmaXJzdEV4dGVuc2lvbiwgc2Vjb25kRXh0ZW5zaW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBmaXJzdEV4dGVuc2lvbi52aXNpYmxlSW5kZXggLSBzZWNvbmRFeHRlbnNpb24udmlzaWJsZUluZGV4O1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN1cnZleU1vZGVsLCBRdWVzdGlvbiwgRXZlbnQsIHNldHRpbmdzIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQge1xuICBJUGVybWlzc2lvbixcbiAgUXVlc3Rpb25Mb2NhdGlvbixcbiAgQ29sdW1uRGF0YVR5cGUsXG4gIElUYWJsZVN0YXRlLFxuICBJVGFibGVDb2x1bW4sXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rLCBjcmVhdGVJbWFnZXNDb250YWluZXIsIGNyZWF0ZUxpbmtzQ29udGFpbmVyLCBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZU9wdGlvbnMge1xuICBbaW5kZXg6IHN0cmluZ106IGFueTtcblxuICAvKipcbiAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSB0byByZW5kZXIgY29sdW1uIGhlYWRpbmdzIHVzaW5nIHF1ZXN0aW9uIG5hbWVzXG4gICAqL1xuICB1c2VOYW1lc0FzVGl0bGVzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFVzZSB0aGlzIGV2ZW50IHRvIGNoYW5nZSB0aGUgZGlzcGxheSB2YWx1ZSBvZiBxdWVzdGlvbiBpbiB0YWJsZS5cbiAgICogPGJyLz4gYHNlbmRlcmAgLSB0aGUgdGFibGUgb2JqZWN0IHRoYXQgZmlyZXMgdGhlIGV2ZW50LlxuICAgKiA8YnIvPiBgb3B0aW9ucy5xdWVzdGlvbmAgLSB0aGUgcXVlc3Rpb24gb2JlY3QgZm9yIHdoaWNoIGV2ZW50IGlzIGZpcmVkLlxuICAgKiA8YnIvPiBgb3B0aW9ucy5kaXNwbGF5VmFsdWVgIC0gdGhlIHF1ZXN0aW9uIGRpc3BsYXkgdmFsdWUuIFlvdSBjYW4gY2hhbmdlIHRoaXMgb3B0aW9uIGJlZm9yZSBpdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIHRhYmxlLlxuICAgKi9cbiAgb25HZXRRdWVzdGlvblZhbHVlPzogKG9wdGlvbnM6IHtcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXG4gICAgZGlzcGxheVZhbHVlOiBhbnksXG4gIH0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZSB7XG4gIHB1YmxpYyBzdGF0aWMgc2hvd0ZpbGVzQXNJbWFnZXMgPSBmYWxzZTtcbiAgcHVibGljIHN0YXRpYyBoYXZlQ29tbWVyY2lhbExpY2Vuc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIHRhYmxlRGF0YTogYW55O1xuICBwcm90ZWN0ZWQgZXh0ZW5zaW9uczogVGFibGVFeHRlbnNpb25zO1xuICBwcml2YXRlIGhhdmVDb21tZXJjaWFsTGljZW5zZSA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3VydmV5OiBTdXJ2ZXlNb2RlbCxcbiAgICBwcm90ZWN0ZWQgZGF0YTogQXJyYXk8T2JqZWN0PixcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogSVRhYmxlT3B0aW9ucyA9IHt9LFxuICAgIHByb3RlY3RlZCBfY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPiA9IFtdXG4gICkge1xuICAgIGlmKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChfY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmJ1aWxkQ29sdW1ucyhzdXJ2ZXkpO1xuICAgIH1cbiAgICB0aGlzLmluaXRUYWJsZURhdGEoZGF0YSk7XG4gICAgbG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSB0aGlzLnN1cnZleS5sb2NhbGU7XG5cbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0aGlzKTtcblxuICAgIHRoaXMuaGF2ZUNvbW1lcmNpYWxMaWNlbnNlID1cbiAgICAgIFRhYmxlLmhhdmVDb21tZXJjaWFsTGljZW5zZSB8fFxuICAgICAgKCEhb3B0aW9ucyAmJlxuICAgICAgICAodHlwZW9mIG9wdGlvbnMuaGF2ZUNvbW1lcmNpYWxMaWNlbnNlICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgPyBvcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZVxuICAgICAgICAgIDogZmFsc2UpKTtcbiAgfVxuICBwcm90ZWN0ZWQgcmVuZGVyUmVzdWx0OiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2l6ZTogbnVtYmVyID0gNTtcbiAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfcm93czogVGFibGVSb3dbXSA9IFtdO1xuICBwcm90ZWN0ZWQgaXNDb2x1bW5SZW9yZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgb25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgb25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uUm93UmVtb3ZlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyByZW5kZXJEZXRhaWxBY3Rpb25zOiAoXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICByb3c6IFRhYmxlUm93XG4gICkgPT4gSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5Q29sdW1uRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQ7XG5cbiAgcHVibGljIHJlbmRlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRhcmdldE5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAoIXRoaXMuaGF2ZUNvbW1lcmNpYWxMaWNlbnNlKSB7XG4gICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUNvbW1lcmNpYWxMaWNlbnNlTGluaygpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlQ29sdW1uUmVvcmRlcigpIHtcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGVDb2x1bW5SZW9yZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZU51bWJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZVNpemU7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZVNpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFBhZ2VTaXplID0gdmFsdWU7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldENyZWF0ZWRSb3dzKCk6IFRhYmxlUm93W10ge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fcm93cyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDcmVhdGVkUm93cygpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICB0aGlzLl9yb3dzID0gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDb2x1bW5zID0gKHN1cnZleTogU3VydmV5TW9kZWwpID0+IHtcbiAgICBsZXQgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPiA9IFtdO1xuICAgIHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpLmZvckVhY2goKHF1ZXN0aW9uOiBRdWVzdGlvbikgPT4ge1xuICAgICAgbGV0IGRhdGFUeXBlID0gQ29sdW1uRGF0YVR5cGUuVGV4dDtcbiAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgIGRhdGFUeXBlID0gQ29sdW1uRGF0YVR5cGUuRmlsZUxpbms7XG4gICAgICB9XG4gICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNpZ25hdHVyZXBhZFwiKSB7XG4gICAgICAgIGRhdGFUeXBlID0gQ29sdW1uRGF0YVR5cGUuSW1hZ2U7XG4gICAgICB9XG4gICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTpcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnVzZU5hbWVzQXNUaXRsZXNcbiAgICAgICAgICAgID8gcXVlc3Rpb24ubmFtZVxuICAgICAgICAgICAgOiAocXVlc3Rpb24udGl0bGUgfHwgXCJcIikudHJpbSgpIHx8IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIGRhdGFUeXBlLFxuICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIGlzUHVibGljOiB0cnVlLFxuICAgICAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4sXG4gICAgICB9KTtcbiAgICAgIGlmIChcbiAgICAgICAgcXVlc3Rpb24uaGFzQ29tbWVudCB8fFxuICAgICAgICAocXVlc3Rpb24uaGFzT3RoZXIgJiYgcXVlc3Rpb24uZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSlcbiAgICAgICkge1xuICAgICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGAke3F1ZXN0aW9uLm5hbWV9JHtzZXR0aW5ncy5jb21tZW50UHJlZml4fWAsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHF1ZXN0aW9uLmhhc090aGVyXG4gICAgICAgICAgICA/IHF1ZXN0aW9uLm90aGVyVGV4dFxuICAgICAgICAgICAgOiBxdWVzdGlvbi5jb21tZW50VGV4dCxcbiAgICAgICAgICBpc0NvbW1lbnQ6IHRydWUsXG4gICAgICAgICAgZGF0YVR5cGUsXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgIGlzUHVibGljOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH07XG5cbiAgcHVibGljIGlzQ29sdW1uVmlzaWJsZShjb2x1bW46IElUYWJsZUNvbHVtbikge1xuICAgIGlmIChjb2x1bW4ubG9jYXRpb24gIT09IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGNvbHVtbi5pc1Zpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29sdW1ucyhjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+KSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0VGFibGVEYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLnRhYmxlRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHZhciBkYXRhSXRlbTogYW55ID0ge307XG4gICAgICB0aGlzLnN1cnZleS5kYXRhID0gaXRlbTtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSBpdGVtW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShjb2x1bW4ubmFtZSk7XG4gICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgIGlmIChjb2x1bW4uaXNDb21tZW50KSB7XG4gICAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi5jb21tZW50O1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnVzZVZhbHVlc0FzTGFiZWxzKSB7XG4gICAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uZGlzcGxheVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uLmRhdGFUeXBlID09PSBDb2x1bW5EYXRhVHlwZS5GaWxlTGluaykge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRpc3BsYXlWYWx1ZSkpIHtcbiAgICAgICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9IFRhYmxlLnNob3dGaWxlc0FzSW1hZ2VzID8gY3JlYXRlSW1hZ2VzQ29udGFpbmVyKFxuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWVcbiAgICAgICAgICAgICkub3V0ZXJIVE1MIDogY3JlYXRlTGlua3NDb250YWluZXIoXG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgKS5vdXRlckhUTUw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGFJdGVtW2NvbHVtbi5uYW1lXSA9XG4gICAgICAgICAgICB0eXBlb2YgZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgID8gZGlzcGxheVZhbHVlXG4gICAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoZGlzcGxheVZhbHVlKSB8fCBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdCA9IHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBkaXNwbGF5VmFsdWU6IGRhdGFJdGVtW2NvbHVtbi5uYW1lXSB9O1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkdldFF1ZXN0aW9uVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkdldFF1ZXN0aW9uVmFsdWUob3B0KTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhSXRlbVtjb2x1bW4ubmFtZV0gPSBvcHQuZGlzcGxheVZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkYXRhSXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQ29sdW1uKGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xuICAgIHZhciBkZWxldGVkQ29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc3BsaWNlKGZyb20sIDEpO1xuICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKHRvLCAwLCBkZWxldGVkQ29sdW1uc1swXSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pIHtcbiAgICB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmZpcmUodGhpcywge1xuICAgICAgY29sdW1uTmFtZTogY29sdW1uTmFtZSxcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICB9KTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWU6IHN0cmluZyk6IElUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBjb2x1bW5OYW1lKVswXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWU6IHN0cmluZywgaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgdmFyIGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGNvbHVtbk5hbWUpO1xuICAgIGNvbHVtbi5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgdGhpcy5vbkNvbHVtbnNWaXNpYmlsaXR5Q2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBjb2x1bW5WaXNpYmlsaXR5OiBpc1Zpc2libGUsXG4gICAgfSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtbldpZHRoKGNvbHVtbk5hbWU6IHN0cmluZywgd2lkdGg6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcbiAgICBjb2x1bW4ud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlUm93KHJvdzogVGFibGVSb3cpOiB2b2lkIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9yb3dzLmluZGV4T2Yocm93KTtcbiAgICB0aGlzLl9yb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5vblJvd1JlbW92ZWQuZmlyZSh0aGlzLCB7IHJvdzogcm93IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBsb2NhbGUgb2YgdGhlIHRhYmxlLlxuICAgKiBJZiBsb2NhbGVzIG1vcmUgdGhhbiBvbmUsIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gZHJvcGRvd24gd2lsbCBiZSBhZGRlZCBpbiB0aGUgdG9vbGJhclxuICAgKi9cbiAgcHVibGljIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbG9jYWxlIGZvciB0YWJsZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgbG9jYWxlKG5ld0xvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdXJ2ZXkubG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuc3VydmV5LmdldFVzZWRMb2NhbGVzKCkpO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2goaGFyZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuZ2V0UGFnZU51bWJlcigpO1xuICAgICAgaWYgKGhhcmQpIHtcbiAgICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMucmVuZGVyUmVzdWx0O1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlbmRlcih0YXJnZXROb2RlKTtcbiAgICAgIHRoaXMuc2V0UGFnZVNpemUodGhpcy5jdXJyZW50UGFnZVNpemUpO1xuICAgICAgdGhpcy5zZXRQYWdlTnVtYmVyKHRoaXMuY3VycmVudFBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJDcmVhdGVkUm93cygpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0aGlzLnJlbmRlclJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnJlbmRlclJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIGdldHRlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogSVRhYmxlU3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlLFxuICAgICAgZWxlbWVudHM6IFtdLmNvbmNhdCh0aGlzLl9jb2x1bW5zKSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmN1cnJlbnRQYWdlU2l6ZSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBWaXp1YWxpemF0aW9uIHBhbmVsIHN0YXRlIHNldHRlci5cbiAgICovXG4gIHB1YmxpYyBzZXQgc3RhdGUobmV3U3RhdGU6IElUYWJsZVN0YXRlKSB7XG4gICAgaWYgKCFuZXdTdGF0ZSkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiBuZXdTdGF0ZS5sb2NhbGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gbmV3U3RhdGUubG9jYWxlO1xuICAgICAgdGhpcy5zdXJ2ZXkubG9jYWxlID0gbmV3U3RhdGUubG9jYWxlO1xuICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXdTdGF0ZS5lbGVtZW50cyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBuZXdTdGF0ZS5lbGVtZW50cztcblxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUucGFnZVNpemUgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IG5ld1N0YXRlLnBhZ2VTaXplO1xuICB9XG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRhYmxlIHN0YXRlIGNoYW5nZWQuXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+KCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdGFibGUgcGVybWlzc2lvbnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCk6IElQZXJtaXNzaW9uW10ge1xuICAgIHJldHVybiA8YW55PnRoaXMuX2NvbHVtbnMubWFwKChjb2x1bW46IElUYWJsZUNvbHVtbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgIGlzUHVibGljOiBjb2x1bW4uaXNQdWJsaWMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRhYmxlIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgcHVibGljIHNldCBwZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSVBlcm1pc3Npb25bXSkge1xuICAgIGNvbnN0IHVwZGF0ZWRFbGVtZW50cyA9IHRoaXMuX2NvbHVtbnMubWFwKChjb2x1bW46IElUYWJsZUNvbHVtbikgPT4ge1xuICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICBpZiAocGVybWlzc2lvbi5uYW1lID09PSBjb2x1bW4ubmFtZSlcbiAgICAgICAgICBjb2x1bW4uaXNQdWJsaWMgPSBwZXJtaXNzaW9uLmlzUHVibGljO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IC4uLmNvbHVtbiB9O1xuICAgIH0pO1xuICAgIHRoaXMuX2NvbHVtbnMgPSBbXS5jb25jYXQodXBkYXRlZEVsZW1lbnRzKTtcbiAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sgJiZcbiAgICAgIHRoaXMub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHBlcm1pc3Npb25zIGNoYW5nZWRcbiAgICovXG4gIHB1YmxpYyBvblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrOiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYWJsZVJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZTogVGFibGUsXG4gICAgcHJvdGVjdGVkIGV4dGVuc2lvbnNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBkZXRhaWxzQ29udGFpbmVyOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyh0YWJsZSwgdGhpcywgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgdGhpcy5leHRlbnNpb25zID0gbmV3IFRhYmxlRXh0ZW5zaW9ucyh0YWJsZSk7XG4gICAgdGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCh0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG4gIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICBwdWJsaWMgZXh0ZW5zaW9uczogVGFibGVFeHRlbnNpb25zO1xuICBwcml2YXRlIGRldGFpbGVkUm93Q2xhc3MgPSBcInNhLXRhYmxlX19kZXRhaWwtcm93XCI7XG4gIHByaXZhdGUgaXNEZXRhaWxzRXhwYW5kZWQgPSBmYWxzZTtcbiAgcHVibGljIG9uVG9nZ2xlRGV0YWlsczogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGVSb3csIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJvdydzIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGF0YSwgd2hpY2ggaXMgZGlzcGxheWVkIGluIHRoZSByb3cuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0Um93RGF0YSgpOiBhbnk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcG9zaXRpb24gb2Ygcm93IGluIHRoZSB0YWJsZSdzIGRhdGEuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0RGF0YVBvc2l0aW9uKCk6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgaXNTZWxlY3RlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIodGhpcy5leHRlbnNpb25zQ29udGFpbmVyLCBcInJvd1wiLCB7IHJvdzogdGhpcyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGV0YWlscygpIHtcbiAgICB0aGlzLmRldGFpbHMub3BlbigpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMuZGV0YWlsZWRSb3dDbGFzcztcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLmNsb3NlKCk7XG4gICAgdGhpcy5nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRldGFpbGVkUm93Q2xhc3MpO1xuICAgIHRoaXMub25Ub2dnbGVEZXRhaWxzLmZpcmUodGhpcywgeyBpc0V4cGFuZGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLmlzRGV0YWlsc0V4cGFuZGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRGV0YWlscygpIHtcbiAgICBpZiAodGhpcy5pc0RldGFpbHNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgICB9IGVsc2UgdGhpcy5vcGVuRGV0YWlscygpO1xuICB9XG5cbiAgcHVibGljIGdldElzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gIXRoaXMuaXNTZWxlY3RlZDtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5yZW1vdmVSb3codGhpcyk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG9zZURldGFpbHMoKTtcbiAgfTtcblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5yZW1vdmUoXG4gICAgICB0aGlzLm9uQ29sdW1uTG9jYXRpb25DaGFuZ2VkQ2FsbGJhY2tcbiAgICApO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsImV4cG9ydCB2YXIgX19hc3NpZ24gPVxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xuICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcylcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gIGZ1bmN0aW9uIF9fKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7XG4gIH1cbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XG4gICAgYmFzZUNsYXNzID09PSBudWxsXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcbiAgdmFyIHJlc3VsdDogYW55ID0ge307XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcGVydHlOYW1lKSAmJlxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXG4gICAgKVxuICAgICAgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBzb3VyY2VbcHJvcGVydHlOYW1lXTtcbiAgaWYgKFxuICAgIHNvdXJjZSAhPSBudWxsICYmXG4gICAgdHlwZW9mICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0gPT09IFwiZnVuY3Rpb25cIlxuICApXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxuICAgICAgICByZXN1bHRbcHJvcGVydHlTeW1ib2xzW2ldXSA9IHNvdXJjZVtwcm9wZXJ0eVN5bWJvbHNbaV1dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuXG5leHBvcnQgdmFyIF9fZGVjb3JhdGUgPSBmdW5jdGlvbihcbiAgZGVjb3JhdG9yczogYW55LFxuICB0YXJnZXQ6IGFueSxcbiAga2V5OiBhbnksXG4gIGRlc2M6IGFueVxuKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICByID1cbiAgICAgIGMgPCAzXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxuICAgICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgICA6IGRlc2MsXG4gICAgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICBpZiAoKGQgPSBkZWNvcmF0b3JzW2ldKSlcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuIiwiZXhwb3J0IGNsYXNzIERvY3VtZW50SGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfT4sXHJcbiAgICBpc1NlbGVjdGVkOiAob3B0aW9uOiB7IHZhbHVlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB9KSA9PiBib29sZWFuLFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxyXG4gICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKG9wdGlvbiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRsZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZCxcclxuICAgIHRleHQgPSBcIlwiLFxyXG4gICAgY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b25cIlxyXG4gICkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgY2xhc3NOYW1lLCB7XHJcbiAgICAgIGlubmVyVGV4dDogdGV4dCxcclxuICAgICAgb25jbGljazogaGFuZGxlcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChcclxuICAgIHRhZ05hbWU6IHN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nID0gXCJcIixcclxuICAgIGF0dHJzPzogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmICghIWF0dHJzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAoPGFueT5lbClba2V5XSA9IGF0dHJzW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdFbGVtZW50KHBhdGg6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInVzZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWxlbS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXHJcbiAgICAgIFwiaHJlZlwiLFxyXG4gICAgICBcIiNzYS1zdmctXCIgKyBwYXRoXHJcbiAgICApO1xyXG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcclxuICAgIHJldHVybiBzdmdFbGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdCdXR0b24ocGF0aDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gPEhUTUxCdXR0b25FbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNhLXRhYmxlX19zdmctYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnVG9nZ2xlQnV0dG9uKFxyXG4gICAgc3ZnUGF0aDE6IHN0cmluZyxcclxuICAgIHN2UHBhdGgyOiBzdHJpbmcsXHJcbiAgICB0ZXh0MTogc3RyaW5nLFxyXG4gICAgdGV4dDI6IHN0cmluZyxcclxuICAgIGhhbmRsZXIxOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBoYW5kbGVyMjogKGU6IGFueSkgPT4gYW55LFxyXG4gICAgc3RhdGUgPSBcImZpcnN0XCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvbiBzYS10b29sYmFyX19zdmctYnV0dG9uXCJcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmcxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdmdQYXRoMSk7XHJcbiAgICBjb25zdCBzdmcyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdlBwYXRoMik7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICAgIHN0YXRlID0gXCJzZWNvbmRcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMSk7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGhhbmRsZXIyKGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcInNlY29uZFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcImZpcnN0XCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDE7XHJcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcxKTtcclxuICAgICAgICBoYW5kbGVyMShlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgfSBlbHNlIGlmICgoc3RhdGUgPSBcInNlY29uZFwiKSkge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gdG9nZ2xlO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSA8SFRNTElucHV0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImlucHV0XCIsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd0RvbVJlbmRlcmluZygpIHtcclxuICByZXR1cm4gb3B0aW9ucy5ydW5uaW5nSW5Ccm93c2VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzYS1jb21tZXJjaWFsXCIpO1xyXG4gIGNvbnN0IGxpbmsgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBcInNhLWNvbW1lcmNpYWxfX3RleHRcIiwge1xyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5zdXJ2ZXlqcy5pby9CdXlcIixcclxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXJTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJcIik7XHJcbiAgY29uc3QgaWNvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJub25jb21tZXJjaWFsXCIpO1xyXG4gIGNvbnN0IHRleHRTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgIFwic3BhblwiLFxyXG4gICAgXCJzYS1jb21tZXJjaWFsX19wcm9kdWN0XCIsXHJcbiAgICB7XHJcbiAgICAgIGlubmVySFRNTDogYFBsZWFzZSBwdXJjaGFzZSBhIFN1cnZleUpTIEFuYWx5dGljcyBkZXZlbG9wZXIgbGljZW5zZVxyXG4gICAgICAgIHRvXHJcbiAgICAgICAgdXNlIGl0IGluIHlvdXJcclxuICAgICAgICBhcHAuYCxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKS5hcHBlbmRDaGlsZChjb250YWluZXJTcGFuKTtcclxuICBjb250YWluZXJTcGFuLmFwcGVuZENoaWxkKGljb24pO1xyXG4gIGNvbnRhaW5lclNwYW4uYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyguLi5hcnJheXM6IGFueVtdKTogYW55W11bXSB7XHJcbiAgICBsZXQgemlwQXJyYXk6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5c1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB6aXBBcnJheVtpXSA9IFtdO1xyXG4gICAgICBhcnJheXMuZm9yRWFjaCgoYXJyKSA9PiB7XHJcbiAgICAgICAgemlwQXJyYXlbaV0ucHVzaChhcnJbaV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB6aXBBcnJheTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW56aXBBcnJheXMoemlwQXJyYXk6IGFueVtdW10pOiBhbnlbXVtdIHtcclxuICAgIGxldCBhcnJheXM6IGFueVtdW10gPSBbXTtcclxuICAgIHppcEFycmF5LmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaikgPT4ge1xyXG4gICAgICAgIGlmICghYXJyYXlzW2pdKSBhcnJheXNbal0gPSBbXTtcclxuICAgICAgICBhcnJheXNbal1baV0gPSB2YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W10sIHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzWzBdLCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXNbMV0gfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlua3NDb250YWluZXIoXHJcbiAgbGlua3M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb250ZW50OiBhbnkgfT5cclxuKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgXCJcIiwge1xyXG4gICAgICAgIGlubmVySFRNTDogbGluay5uYW1lLFxyXG4gICAgICAgIGRvd25sb2FkOiBsaW5rLm5hbWUsXHJcbiAgICAgICAgaHJlZjogbGluay5jb250ZW50LFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gbGlua3NDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZXNDb250YWluZXIoXHJcbiAgbGlua3M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb250ZW50OiBhbnkgfT5cclxuKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImltZ1wiLCBcIlwiLCB7XHJcbiAgICAgICAgYWx0OiBsaW5rLm5hbWUsXHJcbiAgICAgICAgc3JjOiBsaW5rLmNvbnRlbnQsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiBsaW5rc0NvbnRhaW5lcjtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9