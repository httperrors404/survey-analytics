/*!
 * surveyjs - SurveyJS Analytics library v1.8.68
 * Copyright (c) 2015-2021 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), require("tabulator-tables"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalyticsTabulator", ["survey-core", "tabulator-tables"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalyticsTabulator"] = factory(require("survey-core"), require("tabulator-tables"));
	else
		root["SurveyAnalyticsTabulator"] = factory(root["Survey"], root["Tabulator"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_survey_core__, __WEBPACK_EXTERNAL_MODULE_tabulator_tables__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/tabulator.ts");
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

/***/ "./src/entries/tabulator.ts":
/*!**********************************!*\
  !*** ./src/entries/tabulator.ts ***!
  \**********************************/
/*! exports provided: localization, surveyStrings, Table, TableRow, Tabulator, TabulatorRow, TableExtensions, DocumentHelper */
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

/* harmony import */ var _tables_tabulator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tables/tabulator */ "./src/tables/tabulator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_13__["Tabulator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabulatorRow", function() { return _tables_tabulator__WEBPACK_IMPORTED_MODULE_13__["TabulatorRow"]; });

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

/***/ "./src/tables/tabulator.scss":
/*!***********************************!*\
  !*** ./src/tables/tabulator.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tables/tabulator.ts":
/*!*********************************!*\
  !*** ./src/tables/tabulator.ts ***!
  \*********************************/
/*! exports provided: Tabulator, TabulatorRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return Tabulator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabulatorRow", function() { return TabulatorRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/utils/helpers.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/tables/table.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/tables/config.ts");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabulator.scss */ "./src/tables/tabulator.scss");
/* harmony import */ var _tabulator_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabulator_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _localizationManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localizationManager */ "./src/localizationManager.ts");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tabulator-tables */ "tabulator-tables");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tabulator_tables__WEBPACK_IMPORTED_MODULE_6__);







if (!!document) {
    var svgTemplate = __webpack_require__(/*! html-loader?interpolate!val-loader!../svgbundle.html */ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/svgbundle.html");
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var defaultDownloadOptions = {
    fileName: "results",
    pdf: {
        orientation: "landscape",
        autoTable: {
            styles: {
                columnWidth: 1,
            },
            margin: { top: 10, right: 10, bottom: 10, left: 10 },
        },
    },
    csv: { delimiter: "," },
    xlsx: { sheetName: "results" },
};
var defaultOptions = {
    tabulatorOptions: {},
    actionsColumnWidth: 60,
    downloadHiddenColumns: false,
    downloadButtons: ["pdf", "xlsx", "csv"],
    downloadOptions: defaultDownloadOptions,
    onDownloadCallbacks: {
        pdf: function (tabulator, options) {
            var minWidth = (tabulator.tabulatorTables
                .getColumns(true)
                .filter(function (col) { return col.isVisible(); }).length -
                1) *
                186.72;
            if (minWidth > 841.89) {
                options.jsPDF = { format: [595.28, minWidth] };
            }
        },
    },
};
var Tabulator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Tabulator, _super);
    function Tabulator(survey, data, options, _columns) {
        if (_columns === void 0) { _columns = []; }
        var _this = _super.call(this, survey, data, options, _columns) || this;
        _this.COLUMN_MIN_WIDTH = 155;
        _this.tabulatorTables = null;
        _this.tableContainer = null;
        _this.destroy = function () {
            _this.tabulatorTables.destroy();
            _super.prototype.destroy.call(_this);
        };
        _this.columnMovedCallback = function (column, columns) {
            var from = _this._columns.indexOf(_this.getColumnByName(column.getField()));
            var to = columns.indexOf(column) - 1;
            _this.moveColumn(from, to);
            _this.disableColumnReorder();
        };
        _this.columnResizedCallback = function (column) {
            _this.setColumnWidth(column.getField(), column.getWidth());
            _this.layout();
        };
        _this.rowFormatter = function (row) {
            var tableRow = new TabulatorRow(_this, row.getCells()[0].getElement(), row.getElement(), row);
            tableRow.onToggleDetails.add(function () {
                row.normalizeHeight();
                _this.layout();
            });
            tableRow.render();
            _this._rows.push(tableRow);
        };
        _this.options = Object.assign({}, defaultOptions, options);
        return _this;
    }
    Object.defineProperty(Tabulator, "haveCommercialLicense", {
        set: function (val) {
            _table__WEBPACK_IMPORTED_MODULE_1__["Table"].haveCommercialLicense = val;
        },
        enumerable: false,
        configurable: true
    });
    Tabulator.prototype.render = function (targetNode) {
        _super.prototype.render.call(this, targetNode);
        targetNode.className += " sa-table sa-tabulator";
        var columns = this.getColumns();
        var data = this.tableData;
        var header = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__header");
        var paginationElement = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__pagination-container");
        this.tableContainer = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        targetNode.appendChild(header);
        targetNode.appendChild(this.tableContainer);
        var config = {};
        Object.assign(config, {
            data: data,
            layout: "fitColumns",
            pagination: "local",
            paginationSize: this.currentPageSize,
            movableColumns: true,
            maxHeight: "100%",
            columns: columns,
            rowFormatter: this.rowFormatter,
            paginationElement: paginationElement,
            columnMoved: this.columnMovedCallback,
            columnResized: this.columnResizedCallback,
            tooltipsHeader: true,
            tooltips: function (cell) { return cell.getValue(); },
            downloadRowRange: "all",
            columnMinWidth: 248,
            paginationButtonCount: 3,
            nestedFieldSeparator: false,
        }, this.options.tabulatorOptions);
        this.tabulatorTables = new tabulator_tables__WEBPACK_IMPORTED_MODULE_6___default.a(this.tableContainer, config);
        var extensionsContainer = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-table__header-extensions");
        header.appendChild(this.createDownloadsBar());
        header.appendChild(extensionsContainer);
        header.appendChild(paginationElement);
        this.extensions.render(extensionsContainer, "header");
        this.renderResult = targetNode;
    };
    Tabulator.prototype.createDownloadsBar = function () {
        var _this = this;
        var createDownloadButton = function (type, caption) {
            var btn = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("button", "sa-table__btn sa-table__btn--small sa-table__btn--gray", {
                innerHTML: caption,
                onclick: function () {
                    _this.download(type);
                },
            });
            return btn;
        };
        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-tabulator__downloads-bar");
        this.options.downloadButtons.forEach(function (type) {
            container.appendChild(createDownloadButton(type, _localizationManager__WEBPACK_IMPORTED_MODULE_5__["localization"].getString(type + "DownloadCaption")));
        });
        return container;
    };
    Tabulator.prototype.getTitleFormatter = function (cell, formatterParams, onRendered, columnName) {
        var _this = this;
        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div");
        var title = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("span", "", {
            innerHTML: cell.getValue(),
        });
        var actions = this.getHeaderActions(columnName);
        container.appendChild(actions);
        container.appendChild(title);
        container.onmousedown = function (e) {
            if (!_this.isColumnReorderEnabled) {
                e.stopPropagation();
            }
            else {
                _this.disableColumnReorder();
            }
        };
        return container;
    };
    Tabulator.prototype.getHeaderActions = function (columnName) {
        var container = _utils__WEBPACK_IMPORTED_MODULE_4__["DocumentHelper"].createElement("div", "sa-table__action-container");
        this.extensions.render(container, "column", { columnName: columnName });
        return container;
    };
    Tabulator.prototype.getColumns = function () {
        var _this = this;
        var columns = this.columns.map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            var formatter = "plaintext";
            if (column.dataType == _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].FileLink) {
                formatter = "html";
            }
            if (column.dataType == _config__WEBPACK_IMPORTED_MODULE_2__["ColumnDataType"].Image) {
                formatter = "image";
            }
            return {
                field: column.name,
                title: (question &&
                    (_this.options.useNamesAsTitles ? question.name : question.title)) ||
                    column.displayName,
                width: column.width,
                widthShrink: !column.width ? 1 : 0,
                visible: _this.isColumnVisible(column),
                headerSort: false,
                download: _this.options.downloadHiddenColumns ? true : undefined,
                formatter: formatter,
                titleFormatter: function (cell, formatterParams, onRendered) {
                    return _this.getTitleFormatter(cell, formatterParams, onRendered, column.name);
                },
            };
        });
        // add special column (collapse/expand)
        columns.unshift({
            field: "",
            title: "",
            download: false,
            resizable: false,
            minWidth: this.options.actionsColumnWidth,
            width: this.options.actionsColumnWidth,
        });
        return columns;
    };
    Tabulator.prototype.setColumnVisibility = function (columnName, isVisible) {
        _super.prototype.setColumnVisibility.call(this, columnName, isVisible);
        if (this.isRendered) {
            if (isVisible) {
                this.tabulatorTables.showColumn(columnName);
            }
            else {
                this.tabulatorTables.hideColumn(columnName);
            }
            this.layout();
        }
    };
    Tabulator.prototype.setColumnLocation = function (columnName, location) {
        _super.prototype.setColumnLocation.call(this, columnName, location);
        if (this.isRendered) {
            if (location == _config__WEBPACK_IMPORTED_MODULE_2__["QuestionLocation"].Row)
                this.tabulatorTables.hideColumn(columnName);
            else
                this.tabulatorTables.showColumn(columnName);
            this.layout();
        }
    };
    Tabulator.prototype.setColumnWidth = function (columnName, width) {
        _super.prototype.setColumnWidth.call(this, columnName, width);
        if (this.isRendered) {
            var definition = this.tabulatorTables
                .getColumn(columnName)
                .getDefinition();
            definition.width = width;
            definition.widthShrink = 0;
            this.layout();
        }
    };
    Tabulator.prototype.sortByColumn = function (columnName, direction) {
        this.tabulatorTables.setSort(columnName, direction);
    };
    Tabulator.prototype.applyColumnFilter = function (columnName, value) {
        this.tabulatorTables.setFilter(columnName, "like", value);
    };
    Tabulator.prototype.applyFilter = function (value) {
        var customFilter = function (data, filterParams) {
            for (var key in data) {
                if (data[key].toLowerCase().includes(filterParams.value.toLowerCase())) {
                    return true;
                }
            }
            return false;
        };
        this.tabulatorTables.setFilter(customFilter, {
            value: value,
        });
    };
    Tabulator.prototype.getPageNumber = function () {
        if (!this.isRendered) {
            return 1;
        }
        return this.tabulatorTables.getPage();
    };
    Tabulator.prototype.setPageNumber = function (value) {
        _super.prototype.setPageNumber.call(this, value);
        if (this.isRendered) {
            this.tabulatorTables.setPage(value);
        }
    };
    Tabulator.prototype.setPageSize = function (value) {
        _super.prototype.setPageSize.call(this, value);
        if (this.isRendered) {
            this.tabulatorTables.setPageSize(value);
        }
    };
    Tabulator.prototype.getDownloadOptions = function (type) {
        var options = Object.assign({}, this.options.downloadOptions[type] || defaultOptions.downloadOptions[type]);
        var onDownloadCallback = this.options.onDownloadCallbacks[type];
        if (!!onDownloadCallback)
            onDownloadCallback(this, options);
        return options;
    };
    Tabulator.prototype.download = function (type) {
        this.tabulatorTables.download(type, this.options.downloadOptions.fileName + "." + type, this.getDownloadOptions(type));
    };
    Tabulator.prototype.layout = function (hard) {
        if (hard === void 0) { hard = false; }
        this.tabulatorTables.redraw(hard);
    };
    return Tabulator;
}(_table__WEBPACK_IMPORTED_MODULE_1__["Table"]));

var TabulatorRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TabulatorRow, _super);
    function TabulatorRow(table, extensionsContainer, detailsContainer, innerRow) {
        var _this = _super.call(this, table, extensionsContainer, detailsContainer) || this;
        _this.table = table;
        _this.extensionsContainer = extensionsContainer;
        _this.detailsContainer = detailsContainer;
        _this.innerRow = innerRow;
        return _this;
    }
    TabulatorRow.prototype.getElement = function () {
        return this.innerRow.getElement();
    };
    TabulatorRow.prototype.getRowData = function () {
        return this.innerRow.getData();
    };
    TabulatorRow.prototype.getDataPosition = function () {
        return this.innerRow.getPosition();
    };
    TabulatorRow.prototype.remove = function () {
        this.innerRow.delete();
        _super.prototype.remove.call(this);
    };
    return TabulatorRow;
}(_table__WEBPACK_IMPORTED_MODULE_1__["TableRow"]));



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

/***/ }),

/***/ "tabulator-tables":
/*!***************************************************************************************************************************!*\
  !*** external {"root":"Tabulator","commonjs2":"tabulator-tables","commonjs":"tabulator-tables","amd":"tabulator-tables"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tabulator_tables__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvc3ZnYnVuZGxlLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2VudHJpZXMvdGFidWxhdG9yLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZHV0Y2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9lbmdsaXNoLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vZmFyc2kudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9rb3JlYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9ub3J3ZWdpYW4udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL2xvY2FsaXphdGlvbi9wb3J0dWd1ZXNlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy9sb2NhbGl6YXRpb24vcnVzc2lhbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvbG9jYWxpemF0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvY29sdW1uZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL2V4dGVuc2lvbnMvZGV0YWlsc2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL2hlYWRlcmV4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3Jvd2V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc3JjL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYmxlLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NyYy90YWJsZXMvdGFidWxhdG9yLnNjc3M/NGZlNyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdGFibGVzL3RhYnVsYXRvci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXktY29yZVwiLFwiY29tbW9uanNcIjpcInN1cnZleS1jb3JlXCIsXCJhbWRcIjpcInN1cnZleS1jb3JlXCJ9Iiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJUYWJ1bGF0b3JcIixcImNvbW1vbmpzMlwiOlwidGFidWxhdG9yLXRhYmxlc1wiLFwiY29tbW9uanNcIjpcInRhYnVsYXRvci10YWJsZXNcIixcImFtZFwiOlwidGFidWxhdG9yLXRhYmxlc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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akIsY0FBYyxDQUFDLFdBQVcsQ0FDeEIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ3RDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztTQUNsQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDalBELHlEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6InN1cnZleS5hbmFseXRpY3MudGFidWxhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWNvcmVcIiksIHJlcXVpcmUoXCJ0YWJ1bGF0b3ItdGFibGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5QW5hbHl0aWNzVGFidWxhdG9yXCIsIFtcInN1cnZleS1jb3JlXCIsIFwidGFidWxhdG9yLXRhYmxlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlBbmFseXRpY3NUYWJ1bGF0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXktY29yZVwiKSwgcmVxdWlyZShcInRhYnVsYXRvci10YWJsZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUFuYWx5dGljc1RhYnVsYXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlN1cnZleVwiXSwgcm9vdFtcIlRhYnVsYXRvclwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90YWJ1bGF0b3JfdGFibGVzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL3RhYnVsYXRvci50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kZXRhaWxcXFwiPjxjaXJjbGUgY3g9XFxcIjEuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTMuNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1kcmFnXFxcIj48cGF0aCBkPVxcXCJNMTMgNWwtMSAxIDEgMUg5VjNsMSAxIDEtMS0zLTMtMyAzIDEgMSAxLTF2NEgzbDEtMS0xLTEtMyAzIDMgMyAxLTEtMS0xaDR2NGwtMS0xLTEgMSAzIDMgMy0zLTEtMS0xIDFWOWg0bC0xIDEgMSAxIDMtM3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1oaWRlXFxcIj48cGF0aCBkPVxcXCJNMTIuNzkgNC4yTDE2IDFsLTEtMS0zLjMyIDMuMzJDMTAuNTcgMi41NSA5LjMyIDIgOCAyIDMuNjMgMiAwIDcuOTcgMCA3Ljk3czEuMjcgMi4xIDMuMjEgMy44MmwtMy4yMyAzLjIzLjk4Ljk4IDMuMzUtMy4zNEM1LjQxIDEzLjQ0IDYuNjcgMTQgOCAxNGM0LjM3IDAgOC02IDgtNnMtMS4yNy0yLjA5LTMuMjEtMy44ek0yIDcuOTdjMS4wNy0xLjQ3IDMuNjEtNCA2LTQgLjggMCAxLjYuMjcgMi4zNS42OGwtLjc4Ljc4Yy0uNDYtLjI5LS45OS0uNDYtMS41Ny0uNDYtMS42NiAwLTMgMS4zNC0zIDMgMCAuNTguMTcgMS4xMS40NiAxLjU3bC0uOTcuOTdBMTMuMzggMTMuMzggMCAwIDEgMiA3Ljk3em02IDRjLS44IDAtMS41OS0uMjctMi4zMy0uNjdsLjc4LS43N2MuNDUuMjcuOTguNDQgMS41NS40NCAxLjY2IDAgMy0xLjM0IDMtMyAwLS41Ny0uMTctMS4wOS0uNDQtMS41NWwuOTgtLjk4YzEuMTEuODcgMi4wMSAxLjkxIDIuNDYgMi41Mi0xLjA3IDEuNDgtMy42MSA0LjAxLTYgNC4wMXpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHJpdmF0ZVxcXCI+PGNpcmNsZSBjeD1cXFwiOFxcXCIgY3k9XFxcIjRcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk04IDhjLTMuMzEgMC02IDIuNzMtNiA0LjY3UzUuMjcgMTUgOCAxNXM2LS40IDYtMi4zM1MxMS4zMSA4IDggOHpcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1tYWtlcHVibGljXFxcIj48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTEwIDVjMCAuMzQtLjA2LjY3LS4xNC45OS4wNSAwIC4wOS4wMS4xNC4wMSAxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtM0M4Ljk3IDAgOC4wNy41MiA3LjUzIDEuMyA4Ljk4IDEuOTEgMTAgMy4zMyAxMCA1ek02IDljLTMuMzEgMC02IDIuNzMtNiA0LjY3UzMuMjcgMTYgNiAxNnM2LS40IDYtMi4zM1M5LjMxIDkgNiA5ek0xMCA3Yy0uMTkgMC0uMzguMDEtLjU3LjAzYTQuMTQgNC4xNCAwIDAgMS0xLjM3IDEuMzljMyAuODMgNS4yMyAzLjMxIDUuNDIgNS4yOCAxLjQ0LS4zMSAyLjUyLS45MiAyLjUyLTIuMDNDMTYgOS43NCAxMy4zMSA3IDEwIDd6XFxcIj48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGlkPVxcXCJzYS1zdmctbW92ZXRvZGV0YWlsc1xcXCI+PGNpcmNsZSBjeD1cXFwiMS41XFxcIiBjeT1cXFwiMTQuNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI3LjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEzLjVcXFwiIGN5PVxcXCIxNC41XFxcIiByPVxcXCIxLjVcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAxaDN2OWgtM3pNMi4wMiA3LjAyTDEgNiAwIDdsMyAzIDMtMy0xLTEtLjk0Ljk0QzQuMzMgNC43MyA2LjIxIDMgOC41IDNjLjE3IDAgLjMzLjAzLjUuMDVWMS4wM0M4LjgzIDEuMDEgOC42NyAxIDguNSAxIDUuMDggMSAyLjI3IDMuNjYgMi4wMiA3LjAyelxcXCI+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBpZD1cXFwic2Etc3ZnLW5vbmNvbW1lcmNpYWxcXFwiPjxwYXRoIGQ9XFxcIk04IDBMMCAxNWgxNkw4IDB6bTEgMTNIN3YtMmgydjJ6bS0yLTNWNWgydjVIN3pcXFwiPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgaWQ9XFxcInNhLXN2Zy1zb3J0aW5nXFxcIj48cGF0aCBkPVxcXCJNOCAzbDIgMiAxLTEtMy0zLTMgMyAxIDF6TTggMTNsLTItMi0xIDEgMyAzIDMtMy0xLTF6XFxcIj48L3BhdGg+PC9zeW1ib2w+PC9zdmc+XCI7IiwiZXhwb3J0ICogZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuLy9sb2NhbGl6YXRpb25cbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9mYXJzaVwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL2ZyZW5jaFwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL25vcndlZ2lhblwiO1xuaW1wb3J0IFwiLi4vbG9jYWxpemF0aW9uL3BvcnR1Z3Vlc2VcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9ydXNzaWFuXCI7XG5pbXBvcnQgXCIuLi9sb2NhbGl6YXRpb24vZHV0Y2hcIjtcbmltcG9ydCBcIi4uL2xvY2FsaXphdGlvbi9rb3JlYW5cIjtcblxuLy9leHRlbnNpb25zXG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9yb3dleHRlbnNpb25zXCI7XG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9oZWFkZXJleHRlbnNpb25zXCI7XG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9jb2x1bW5leHRlbnNpb25zXCI7XG5pbXBvcnQgXCIuLi90YWJsZXMvZXh0ZW5zaW9ucy9kZXRhaWxzZXh0ZW5zaW9uc1wiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi4vdGFibGVzL3RhYmxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdGFibGVzL3RhYnVsYXRvclwiO1xuZXhwb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4uL3RhYmxlcy9leHRlbnNpb25zL3RhYmxlZXh0ZW5zaW9uc1wiO1xuZXhwb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHMvaW5kZXhcIjtcbiIsIi8vVW5jb21tZW50IHRoaXMgbGluZSBvbiBjcmVhdGluZyBhIHRyYW5zbGF0aW9uIGZpbGVcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZHV0Y2hTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcm9lcCBkb29yIG1palwiLFxuICB1bmdyb3VwQnV0dG9uOiBcIkRlZ3JvZXBlcmVuIGJpaiBtaWpcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjdGVlciBtaWpcIixcbiAgaGlkZUNvbHVtbjogXCJLb2xvbSB2ZXJiZXJnZW5cIixcbiAgc2hvd0NvbHVtbjogXCJUb29uIGtvbG9tXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIktvbG9tIHByaXbDqSBtYWtlblwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIk1hYWsgZGUga29sb20gb3BlbmJhYXJcIixcbiAgbW92ZVRvRGV0YWlsOiBcIkdhIG5hYXIgRGV0YWlsXCIsXG4gIHNob3dBc0NvbHVtbjogXCJXZWVyZ2V2ZW4gYWxzIGtvbG9tXCIsXG4gIGZpbHRlclBsYWNlaG9sZGVyOiBcIlpvZWtlbi4uLlwiLFxuICByZW1vdmVSb3dzOiBcIlZlcndpamRlciByaWplblwiLFxuICBzaG93TGFiZWw6IFwiVG9uZW5cIixcbiAgZW50cmllc0xhYmVsOiBcImluemVuZGluZ2VuXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZWtzdGVuIGluIHRhYmVsXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJHZXN0YXBlbGRlIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG9udXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJUYWFydFwiLFxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJWZXJzdHJvb2llblwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiTWV0ZXJcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJLb2dlbFwiLFxuICBoaWRlQnV0dG9uOiBcIlZlcmJlcmdlblwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJNYWFrIHByaXZlXCIsXG4gIG1ha2VQdWJsaWNCdXR0b246IFwiT3BlbmJhYXIgbWFrZW5cIixcbiAgc2hvd0J1dHRvbjogXCJUb25lblwiLFxuICByZXNldEZpbHRlcjogXCJGaWx0ZXIgcmVzZXR0ZW5cIixcbiAgY2hhbmdlTG9jYWxlOiBcIldpanppZyBkZSBsYW5kaW5zdGVsbGluZ1wiLFxuICBjbGVhckJ1dHRvbjogXCJEb29yemljaHRpZ1wiLFxuICBhZGRFbGVtZW50OiBcIktpZXMgZWVuIHZyYWFnIG9tIHdlZXIgdGUgZ2V2ZW4gLi4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJTdGFuZGFhcmR2b2xnb3JkZVwiLFxuICBhc2NPcmRlcjogXCJPcGxvcGVuZFwiLFxuICBkZXNjT3JkZXI6IFwiQWZsb3BlbmRcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJUb29uIGtsZWluZSBrb2xvbW1lblwiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJBbmRlcmUgaXRlbXMgZW4gb3BtZXJraW5nZW5cIixcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIlBlcmNlbnRhZ2VzIHdlZXJnZXZlblwiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiVmVyYmVyZyBwZXJjZW50YWdlc1wiLFxuICBwZGZEb3dubG9hZENhcHRpb246IFwiUERGXCIsXG4gIHhsc3hEb3dubG9hZENhcHRpb246IFwiRXhjZWxcIixcbiAgY3N2RG93bmxvYWRDYXB0aW9uOiBcIkNTVlwiLFxuICBzYXZlRGlhZ3JhbUFzUE5HOiBcIkRvd25sb2FkIHBsb3QgYWxzIGVlbiBwbmdcIixcbiAgaGlkZUVtcHR5QW5zd2VyczogXCJWZXJiZXJnIGxlZ2UgYW50d29vcmRlblwiLFxuICBzaG93RW1wdHlBbnN3ZXJzOiBcIlRvb24gbGVnZSBhbnR3b29yZGVuXCIsXG4gIFwidG9wTlZhbHVlVGV4dC0xXCI6IFwiQWxsZSBhbnR3b29yZGVuXCIsXG4gIFwidG9wTlZhbHVlVGV4dDVcIjogXCJUb3AgNSBhbnR3b29yZGVuXCIsXG4gIFwidG9wTlZhbHVlVGV4dDEwXCI6IFwiVG9wIDEwIGFudHdvb3JkZW5cIixcbiAgXCJ0b3BOVmFsdWVUZXh0MjBcIjogXCJUb3AgMjAgYW50d29vcmRlblwiLFxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcIm5sXCJdID0gZHV0Y2hTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wibmxcIl0gPSBcIkR1dGNoXCI7XG4iLCIvL1VuY29tbWVudCB0aGlzIGxpbmUgb24gY3JlYXRpbmcgYSB0cmFuc2xhdGlvbiBmaWxlXG4vL2ltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZW5nbGlzaFN0cmluZ3MgPSB7XG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwIEJ5IE1lXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiVW5ncm91cCBCeSBNZVwiLFxuICBzZWxlY3RCdXR0b246IFwiU2VsZWN0IE1lXCIsXG4gIGhpZGVDb2x1bW46IFwiSGlkZSBjb2x1bW5cIixcbiAgc2hvd0NvbHVtbjogXCJTaG93IGNvbHVtblwiLFxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJNYWtlIGNvbHVtbiBwcml2YXRlXCIsXG4gIG1ha2VQdWJsaWNDb2x1bW46IFwiTWFrZSBjb2x1bW4gcHVibGljXCIsXG4gIG1vdmVUb0RldGFpbDogXCJNb3ZlIHRvIERldGFpbFwiLFxuICBzaG93QXNDb2x1bW46IFwiU2hvdyBhcyBDb2x1bW5cIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gIHJlbW92ZVJvd3M6IFwiUmVtb3ZlIHJvd3NcIixcbiAgc2hvd0xhYmVsOiBcIlNob3dcIixcbiAgZW50cmllc0xhYmVsOiBcImVudHJpZXNcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRzIGluIHRhYmxlXCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIldvcmRjbG91ZFwiLFxuICBjaGFydFR5cGVfYmFyOiBcIkJhclwiLFxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJTdGFja2VkIEJhclwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiRG91Z2hudXRcIixcbiAgY2hhcnRUeXBlX3BpZTogXCJQaWVcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwiU2NhdHRlclwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiR2F1Z2VcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXRcIixcbiAgaGlkZUJ1dHRvbjogXCJIaWRlXCIsXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIk1ha2UgcHJpdmF0ZVwiLFxuICBtYWtlUHVibGljQnV0dG9uOiBcIk1ha2UgcHVibGljXCIsXG4gIHNob3dCdXR0b246IFwiU2hvd1wiLFxuICBmaWx0ZXI6IFwiRmlsdGVyXCIsXG4gIHJlc2V0RmlsdGVyOiBcIlJlc2V0IEZpbHRlclwiLFxuICBjaGFuZ2VMb2NhbGU6IFwiQ2hhbmdlIExvY2FsZVwiLFxuICBjbGVhckJ1dHRvbjogXCJDbGVhclwiLFxuICBhZGRFbGVtZW50OiBcIkNob29zZSBxdWVzdGlvbiB0byBzaG93Li4uXCIsXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdWx0IE9yZGVyXCIsXG4gIGFzY09yZGVyOiBcIkFzY2VuZGluZ1wiLFxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGluZ1wiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIlNob3cgbWlub3IgY29sdW1uc1wiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJPdGhlciBpdGVtcyBhbmQgY29tbWVudHNcIixcbiAgc2hvd1BlcmNlbnRhZ2VzOiBcIlNob3cgcGVyY2VudGFnZXNcIixcbiAgaGlkZVBlcmNlbnRhZ2VzOiBcIkhpZGUgcGVyY2VudGFnZXNcIixcbiAgcGRmRG93bmxvYWRDYXB0aW9uOiBcIlBERlwiLFxuICB4bHN4RG93bmxvYWRDYXB0aW9uOiBcIkV4Y2VsXCIsXG4gIGNzdkRvd25sb2FkQ2FwdGlvbjogXCJDU1ZcIixcbiAgc2F2ZURpYWdyYW1Bc1BORzogXCJEb3dubG9hZCBwbG90IGFzIGEgcG5nXCIsXG4gIGhpZGVFbXB0eUFuc3dlcnM6IFwiSGlkZSBlbXB0eSBhbnN3ZXJzXCIsXG4gIHNob3dFbXB0eUFuc3dlcnM6IFwiU2hvdyBlbXB0eSBhbnN3ZXJzXCIsXG4gIFwidG9wTlZhbHVlVGV4dC0xXCI6IFwiQWxsIGFuc3dlcnNcIixcbiAgXCJ0b3BOVmFsdWVUZXh0NVwiOiBcIlRvcCA1IGFuc3dlcnNcIixcbiAgXCJ0b3BOVmFsdWVUZXh0MTBcIjogXCJUb3AgMTAgYW5zd2Vyc1wiLFxuICBcInRvcE5WYWx1ZVRleHQyMFwiOiBcIlRvcCAyMCBhbnN3ZXJzXCIsXG4gIG5vVmlzdWFsaXplckZvclF1ZXN0aW9uOiBcIlRoaXMgcXVlc3Rpb24gdHlwZSBpcyBub3QgdmlzdWFsaXplZCB5ZXRcIixcbiAgbm9SZXN1bHRzOiBcIlRoZXJlIGFyZSBubyByZXN1bHRzIHlldFwiLFxuICBzaG93UGVyVmFsdWVzOiBcIlBlciBWYWx1ZXNcIixcbiAgc2hvd1BlckNvbHVtbnM6IFwiUGVyIENvbHVtbnNcIlxufTtcblxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXG4vL2xvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBlbmdsaXNoU3RyaW5ncztcbi8vbG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZW5cIl0gPSBcIkVuZ2xpc2hcIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIgZmFyc2lTdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCLar9ix2YjZhyDYqNmG2K/bjCDYqNinXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwi2K3YsNmBINqv2LHZiNmHXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCLYp9mG2KrYrtin2KhcIixcbiAgaGlkZUNvbHVtbjogXCLZhdiu2YHbjCDaqdix2K/ZhiDYs9iq2YjZhlwiLFxuICBzaG93Q29sdW1uOiBcItmG2YXYp9uM2LQg2LPYqtmI2YZcIixcbiAgbW92ZVRvRGV0YWlsOiBcItin2YbYqtmC2KfZhCDYqNmHINis2LLYptuM2KfYqlwiLFxuICBzaG93QXNDb2x1bW46IFwi2YbZhdin24zYtCDYqNmHINi52YbZiNin2YYg2LPYqtmI2YZcIixcbiAgdmlzdWFsaXplcl90ZXh0OiBcItmF2KrZiNmGINiv2LEg2KzYr9mI2YRcIixcbiAgdmlzdWFsaXplcl93b3JkY2xvdWQ6IFwi2KfYqNixINqp2YTZhdin2KpcIixcbiAgY2hhcnRUeXBlX2JhcjogXCLZhduM2YTZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwi2K/Yp9io2LHZhyDYp9uMKHBpZSlcIixcbiAgY2hhcnRUeXBlX3NjYXR0ZXI6IFwi2b7Ysdin2qnZhtiv2q/bjChTY2F0dGVyKVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwi2LnZgtix2KjZhyDYp9uMXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi2YXYrtmB24xcIixcbiAgcmVzZXRGaWx0ZXI6IFwi2KjYp9iy2YbYtNin2YbbjCDZgduM2YTYqtix2YfYp1wiLFxuICBjbGVhckJ1dHRvbjogXCLZvtin2qkg2qnYsdiv2YZcIixcbiAgYWRkRWxlbWVudDogXCLYp9mG2KrYrtin2Kgg2LPZiNin2YQg2KjYsdin24wg2YbZhdin24zYtC4uLlwiXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZhXCJdID0gZmFyc2lTdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZmFcIl0gPSBcIkZhcnNpKFBlcnNpYW4pXCI7XG4iLCJpbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdHJpbmdzID0ge1xyXG4gIGdyb3VwQnV0dG9uOiBcIkdyb3VwZXJcIixcclxuICB1bmdyb3VwQnV0dG9uOiBcIkRpc3NvY2llclwiLFxyXG4gIHNlbGVjdEJ1dHRvbjogXCJTw6lsZWN0aW9ubmVyXCIsXHJcbiAgaGlkZUNvbHVtbjogXCJNYXNxdWVyIGNvbG9ubmVcIixcclxuICBzaG93Q29sdW1uOiBcIkFmZmljaGVyIGNvbG9ubmVcIixcclxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJSZW5kcmUgbGEgY29sb25uZSBwcml2w6lcIixcclxuICBtYWtlUHVibGljQ29sdW1uOiBcIlJlbmRyZSBsYSBjb2xvbm5lIHB1YmxpY1wiLFxyXG4gIG1vdmVUb0RldGFpbDogXCJEw6lwbGFjZXIgdmVycyBkw6l0YWlsc1wiLFxyXG4gIHNob3dBc0NvbHVtbjogXCJBZmZpY2hlciBlbiBjb2xvbm5lXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRlcyBlbiB0YWJsZVwiLFxyXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIk51YWdlcyBkZSBtb3RzXCIsXHJcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJyZXNcIixcclxuICBjaGFydFR5cGVfc3RhY2tlZGJhcjogXCJCYXJyZXMgZW1waWzDqWVzXCIsXHJcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkFubmVhdVwiLFxyXG4gIGNoYXJ0VHlwZV9waWU6IFwiU2VjdGV1cnNcIixcclxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJOdWFnZXMgZGUgcG9pbnRzXCIsXHJcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXHJcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCdWxsZXNcIixcclxuICBmaWx0ZXI6IFwiRmlsdHJlXCIsXHJcbiAgaGlkZUJ1dHRvbjogXCJNYXNxdWVyXCIsXHJcbiAgcmVzZXRGaWx0ZXI6IFwiUmFmcmFpY2hpciBGaWx0cmVzXCIsXHJcbiAgY2xlYXJCdXR0b246IFwiUmFmcmFpY2hpclwiLFxyXG4gIGFkZEVsZW1lbnQ6IFwiQ2hvaXNpciBsYSBxdWVzdGlvbiDDoCBhZmZpY2hlci4uLlwiLFxyXG4gIGRlZmF1bHRPcmRlcjogXCJEZWZhdXRcIixcclxuICBhc2NPcmRlcjogXCJBc2NlbmRhbnRcIixcclxuICBkZXNjT3JkZXI6IFwiRGVzY2VuZGFudFwiLFxyXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzIG1pbmV1cmVzXCIsXHJcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwiQXV0cmUgw6lsw6ltZW50IGV0IGNvbW1lbnRhaXJlc1wiLFxyXG4gIG5vVmlzdWFsaXplckZvclF1ZXN0aW9uOiBcIkNlIHR5cGUgZGUgcXVlc3Rpb24gbidlc3QgcGFzIGVuY29yZSB2aXN1YWxpc8OpXCIsXHJcbiAgbm9SZXN1bHRzOiBcIklsIG4neSBhIHBhcyBlbmNvcmUgZGUgcsOpc3VsdGF0c1wiXHJcbn07XHJcblxyXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcImZyXCJdID0gZnJlbmNoU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wiZnJcIl0gPSBcIkZyZW5jaFwiOyIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5cbmV4cG9ydCB2YXIga29yZWFuU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwi6re466O57ZWRXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwi6re466O5IO2VtOygnFwiLFxuICBzZWxlY3RCdXR0b246IFwi7ISg7YOdXCIsXG4gIGhpZGVDb2x1bW46IFwi7Iio6rmAXCIsXG4gIHNob3dDb2x1bW46IFwi67O07J206riwXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIuu5hOqzteqwnFwiLFxuICBtYWtlUHVibGljQ29sdW1uOiBcIuqzteqwnFwiLFxuICBtb3ZlVG9EZXRhaWw6IFwi7IS467aA7KCV67O0XCIsXG4gIHNob3dBc0NvbHVtbjogXCLsl7TroZwg7ZGc6riwXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCLsi5zqsIHtmZQg64+E7Jqw66+4XCIsXG4gIHZpc3VhbGl6ZXJfd29yZGNsb3VkOiBcIuyLnOqwge2ZlCDrj4TqtaxcIixcbiAgY2hhcnRUeXBlX2JhcjogXCLrp4nrjIDtmJUg7LCo7Yq4XCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIuuIhOyggeunieuMgO2YlSDssKjtirhcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIuuPhOuEm+2YlSDssKjtirhcIixcbiAgY2hhcnRUeXBlX3BpZTogXCLtjIzsnbTtmJUg7LCo7Yq4XCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIuu2hOyCsO2YlSDssKjtirhcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIuqyjOydtOyngO2YlSDssKjtirhcIixcbiAgY2hhcnRUeXBlX2J1bGxldDogXCLquIDrqLjrpqwg6riw7Zi4IOywqO2KuFwiLFxuICBmaWx0ZXI6IFwi7ZWE7YSwXCIsXG4gIGhpZGVCdXR0b246IFwi7Iio6riw6riwXCIsXG4gIHJlc2V0RmlsdGVyOiBcIuy0iOq4sO2ZlFwiLFxuICBjbGVhckJ1dHRvbjogXCLstIjquLDtmZRcIixcbiAgYWRkRWxlbWVudDogXCLtkZzsi5ztlaAg7KeI66y47J2EIOyEoO2Dne2VmOyEuOyalC5cIixcbiAgZGVmYXVsdE9yZGVyOiBcIuq4sOuzuOqwklwiLFxuICBhc2NPcmRlcjogXCLsmKTrpoTssKjsiJxcIixcbiAgZGVzY09yZGVyOiBcIuuCtOumvOywqOyInFwiLFxuICBzaG93TWlub3JDb2x1bW5zOiBcIiDrs7TsobAg7Je0IO2RnOyLnFwiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCLquLDtg4Ag7KCc66qpXCIsXG4gIG5vVmlzdWFsaXplckZvclF1ZXN0aW9uOiBcIuyniOusuOyXkCDrjIDtlZwg7Iuc6rCB7ZmUIOuPhOyasOuvuOqwgCDsl4bsirXri4jri6RcIixcbiAgbm9SZXN1bHRzOiBcIuqysOqzvOqwgCDsl4bsirXri4jri6RcIlxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJrb1wiXSA9IGtvcmVhblN0cmluZ3M7XG5sb2NhbGl6YXRpb24ubG9jYWxlTmFtZXNbXCJrb1wiXSA9IFwiS29yZWFuXCI7IiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBub3J3ZWdpYW5TdHJpbmdzID0ge1xuICBncm91cEJ1dHRvbjogXCJHcnVwcGVyXCIsXG4gIHVuZ3JvdXBCdXR0b246IFwiT3BwaGV2IGdydXBwZXJpbmdcIixcbiAgc2VsZWN0QnV0dG9uOiBcIlZlbGdcIixcbiAgaGlkZUNvbHVtbjogXCJTa2p1bCBrb2xvbm5lXCIsXG4gIHNob3dDb2x1bW46IFwiVmlzIGtvbG9ubmVcIixcbiAgbWFrZVByaXZhdGVDb2x1bW46IFwiR2rDuHIga29sb25uZSBwcml2YXRcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJHasO4ciBrb2xvbm5lIG9mZmVudGxpZ1wiLFxuICBtb3ZlVG9EZXRhaWw6IFwiRmx5dHQgdGlsIGRldGFsamVydCB2aXNuaW5nXCIsXG4gIHNob3dBc0NvbHVtbjogXCJWaXMgc29tIGtvbG9ubmVcIixcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiU8O4ay4uLlwiLFxuICByZW1vdmVSb3dzOiBcIkZqZXJuIHJhZGVyXCIsXG4gIHNob3dMYWJlbDogXCJWaXNcIixcbiAgZW50cmllc0xhYmVsOiBcIm9wcGbDuHJpbmdlclwiLFxuICB2aXN1YWxpemVyX3RleHQ6IFwiVGFiZWxsdmlzbmluZ1wiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJPcmRza3lcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJTdG9scGVkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9zdGFja2VkYmFyOiBcIlN0YWJsZXQgc3RvbHBlZGlhZ3JhbVwiLFxuICBjaGFydFR5cGVfZG91Z2hudXQ6IFwiSGp1bGRpYWdyYW1cIixcbiAgY2hhcnRUeXBlX3BpZTogXCJTZWt0b3JkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlB1bmt0ZGlhZ3JhbVwiLFxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiTcOlbGVkaWFncmFtXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiS3VsZWRpYWdyYW1cIixcbiAgaGlkZUJ1dHRvbjogXCJTa2p1bFwiLFxuICBtYWtlUHJpdmF0ZUJ1dHRvbjogXCJHasO4ciBwcml2YXRcIixcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJHasO4ciBvZmZlbnRsaWdcIixcbiAgc2hvd0J1dHRvbjogXCJWaXNcIixcbiAgcmVzZXRGaWx0ZXI6IFwiTnVsbHN0aWxsIGZpbHRlclwiLFxuICBjaGFuZ2VMb2NhbGU6IFwiQnl0dCBzcHLDpWtcIixcbiAgY2xlYXJCdXR0b246IFwiVMO4bVwiLFxuICBhZGRFbGVtZW50OiBcIlZlbGcgc3DDuHJzbcOlbC4uLlwiLFxuICBkZWZhdWx0T3JkZXI6IFwiU3RhbmRhcmRcIixcbiAgYXNjT3JkZXI6IFwiU3RpZ2VuZGVcIixcbiAgZGVzY09yZGVyOiBcIlN5bmtlbmRlXCIsXG4gIHNob3dNaW5vckNvbHVtbnM6IFwiVmlzIG1pbmRyZSBrb2xvbm5lclwiLFxuICBvdGhlckNvbW1lbnRUaXRsZTogXCJBbm5ldCBvZyBrb21tZW50YXJlclwiLFxuICBzaG93UGVyY2VudGFnZXM6IFwiVmlzIHByb3NlbnRlclwiLFxuICBoaWRlUGVyY2VudGFnZXM6IFwiU2tqdWwgcHJvc2VudGVyXCIsXG59O1xuXG5sb2NhbGl6YXRpb24ubG9jYWxlc1tcIm5vXCJdID0gbm9yd2VnaWFuU3RyaW5ncztcbmxvY2FsaXphdGlvbi5sb2NhbGVOYW1lc1tcIm5vXCJdID0gXCJOb3J3ZWdpYW5cIjtcbiIsImltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdmFyIHBvcnR1Z3Vlc2VTdHJpbmdzID0ge1xyXG4gIGdyb3VwQnV0dG9uOiBcIkFncnVwYXIgUG9yIE1pbVwiLFxyXG4gIHVuZ3JvdXBCdXR0b246IFwiRGVzYWdydXBhciBQb3IgTWltXCIsXHJcbiAgc2VsZWN0QnV0dG9uOiBcIlNlbGVjaW9uYXJcIixcclxuICBoaWRlQ29sdW1uOiBcIkVzY29uZGVyIGNvbHVuYVwiLFxyXG4gIHNob3dDb2x1bW46IFwiTW9zdHJhciBjb2x1bmFcIixcclxuICBtYWtlUHJpdmF0ZUNvbHVtbjogXCJUb3JuYXIgY29sdW5hIHByaXZhZGFcIixcclxuICBtYWtlUHVibGljQ29sdW1uOiBcIlRvcm5hciBjb2x1bmEgcMO6YmxpY2FcIixcclxuICBtb3ZlVG9EZXRhaWw6IFwiTW92ZXIgcGFyYSBEZXRhbGhlc1wiLFxyXG4gIHNob3dBc0NvbHVtbjogXCJNb3N0cmFyIGNvbW8gQ29sdW5hXCIsXHJcbiAgZmlsdGVyUGxhY2Vob2xkZXI6IFwiUGVzcXVpc2FyLi4uXCIsXHJcbiAgcmVtb3ZlUm93czogXCJSZW1vdmVyIGxpbmhhc1wiLFxyXG4gIHNob3dMYWJlbDogXCJNb3N0cmFyXCIsXHJcbiAgZW50cmllc0xhYmVsOiBcImVudHJhZGFzXCIsXHJcbiAgdmlzdWFsaXplcl90ZXh0OiBcIlRleHRvcyBlbSB0YWJlbGFcIixcclxuICBjaGFydFR5cGVfYmFyOiBcIkJhcnJhXCIsXHJcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiQmFycmEgRW1waWxoYWRhXCIsXHJcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIlJvc3F1aW5oYVwiLFxyXG4gIGNoYXJ0VHlwZV9waWU6IFwiVG9ydGFcIixcclxuICBjaGFydFR5cGVfc2NhdHRlcjogXCJMYXN0cm9cIixcclxuICBjaGFydFR5cGVfZ2F1Z2U6IFwiRXNjYWxhXCIsXHJcbiAgY2hhcnRUeXBlX2J1bGxldDogXCJCYWxhXCIsXHJcbiAgaGlkZUJ1dHRvbjogXCJFc2NvbmRlclwiLFxyXG4gIG1ha2VQcml2YXRlQnV0dG9uOiBcIlRvcm5hciBwcml2YWRvXCIsXHJcbiAgbWFrZVB1YmxpY0J1dHRvbjogXCJUb3JuYXIgcMO6YmxpY29cIixcclxuICBzaG93QnV0dG9uOiBcIk1vc3RyYXJcIixcclxuICBmaWx0ZXI6IFwiRmlsdHJhclwiLFxyXG4gIHJlc2V0RmlsdGVyOiBcIlJlc3RhdXJhciBGaWx0cm9cIixcclxuICBjaGFuZ2VMb2NhbGU6IFwiTXVkYXIgTG9jYWxpemHDp8Ojb1wiLFxyXG4gIGNsZWFyQnV0dG9uOiBcIkxpbXBhclwiLFxyXG4gIGFkZEVsZW1lbnQ6IFwiRXNjb2xoZXIgcXVlc3TDo28gcGFyYSBtb3N0cmFyLi4uXCIsXHJcbiAgZGVmYXVsdE9yZGVyOiBcIk9yZGVuYcOnw6NvIFBhZHLDo29cIixcclxuICBhc2NPcmRlcjogXCJBc2NlbmRlbnRlXCIsXHJcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRlbnRlXCIsXHJcbiAgc2hvd01pbm9yQ29sdW1uczogXCJNb3N0cmFyIGNvbHVuYXMgbWVub3Jlc1wiLFxyXG4gIG90aGVyQ29tbWVudFRpdGxlOiBcIk91dHJvcyBpdGVucyBlIGNvbWVudMOhcmlvc1wiLFxyXG4gIHNob3dQZXJjZW50YWdlczogXCJNb3N0cmFyIHBlcmNlbnR1YWlzXCIsXHJcbiAgaGlkZVBlcmNlbnRhZ2VzOiBcIkVzY29uZGVyIHBlcmNlbnR1YWlzXCIsXHJcbiAgc2F2ZURpYWdyYW1Bc1BORzogXCJCYWl4YXIgcGxvdCBjb21vIHBuZ1wiLFxyXG4gIGhpZGVFbXB0eUFuc3dlcnM6IFwiRXNjb25kZXIgcGVyZ3VudGFzIHZhemlhc1wiLFxyXG4gIHNob3dFbXB0eUFuc3dlcnM6IFwiTW9zdHJhciBwZXJndW50YXMgdmF6aWFzXCIsXHJcbiAgXCJ0b3BOVmFsdWVUZXh0LTFcIjogXCJUb2RhcyBhcyByZXNwb3N0YXNcIixcclxuICBcInRvcE5WYWx1ZVRleHQ1XCI6IFwiUHJpbWVpcmFzIDUgcmVzcG9zdGFzXCIsXHJcbiAgXCJ0b3BOVmFsdWVUZXh0MTBcIjogXCJQcmltZWlyYXMgMTAgcmVzcG9zdGFzXCIsXHJcbiAgXCJ0b3BOVmFsdWVUZXh0MjBcIjogXCJQcmltZWlyYXMgMjAgcmVzcG9zdGFzXCIsXHJcbiAgbm9WaXN1YWxpemVyRm9yUXVlc3Rpb246IFwiRXN0ZSB0aXBvIGRlIHBlcmd1bnRhIGFpbmRhIG7Do28gZm9pIHZpc3VhbGl6YWRhXCIsXHJcbiAgbm9SZXN1bHRzOiBcIkFpbmRhIG7Do28gcG9zc3VpIHJlc3VsdGFkb3NcIlxyXG59O1xyXG5cclxuLy9VbmNvbW1lbnQgdGhlc2UgdHdvIGxpbmVzIG9uIGNyZWF0aW5nIGEgdHJhbnNsYXRpb24gZmlsZS4gWW91IHNob3VsZCByZXBsYWNlIFwiZW5cIiBhbmQgZW5TdHJpbmdzIHdpdGggeW91ciBsb2NhbGUgKFwiZnJcIiwgXCJkZVwiIGFuZCBzbyBvbikgYW5kIHlvdXIgdmFyaWFibGUuXHJcbmxvY2FsaXphdGlvbi5sb2NhbGVzW1wicHRcIl0gPSBwb3J0dWd1ZXNlU3RyaW5ncztcclxubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wicHRcIl0gPSBcIlBvcnR1Z3Vlc2VcIjtcclxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IHZhciBydXNzaWFuU3RyaW5ncyA9IHtcbiAgZ3JvdXBCdXR0b246IFwiR3JvdXAgQnkgTWVcIixcbiAgdW5ncm91cEJ1dHRvbjogXCJVbmdyb3VwIEJ5IE1lXCIsXG4gIHNlbGVjdEJ1dHRvbjogXCJTZWxlY3QgTWVcIixcbiAgaGlkZUNvbHVtbjogXCJIaWRlIGNvbHVtblwiLFxuICBzaG93Q29sdW1uOiBcIlNob3cgY29sdW1uXCIsXG4gIG1ha2VQcml2YXRlQ29sdW1uOiBcIk1ha2UgY29sdW1uIHByaXZhdGVcIixcbiAgbWFrZVB1YmxpY0NvbHVtbjogXCJNYWtlIGNvbHVtbiBwdWJsaWNcIixcbiAgbW92ZVRvRGV0YWlsOiBcIk1vdmUgdG8gRGV0YWlsXCIsXG4gIGZpbHRlcjogXCLQpNC40LvRjNGC0YBcIixcbiAgc2hvd0FzQ29sdW1uOiBcIlNob3cgYXMgQ29sdW1uXCIsXG4gIHZpc3VhbGl6ZXJfdGV4dDogXCJUZXh0cyBpbiB0YWJsZVwiLFxuICB2aXN1YWxpemVyX3dvcmRjbG91ZDogXCJXb3JkY2xvdWRcIixcbiAgY2hhcnRUeXBlX2JhcjogXCJCYXJcIixcbiAgY2hhcnRUeXBlX3N0YWNrZWRiYXI6IFwiU3RhY2tlZCBCYXJcIixcbiAgY2hhcnRUeXBlX2RvdWdobnV0OiBcIkRvdWdobnV0XCIsXG4gIGNoYXJ0VHlwZV9waWU6IFwiUGllXCIsXG4gIGNoYXJ0VHlwZV9zY2F0dGVyOiBcIlNjYXR0ZXJcIixcbiAgY2hhcnRUeXBlX2dhdWdlOiBcIkdhdWdlXCIsXG4gIGNoYXJ0VHlwZV9idWxsZXQ6IFwiQnVsbGV0XCIsXG4gIGhpZGVCdXR0b246IFwi0KHQutGA0YvRgtGMXCIsXG4gIHNob3dCdXR0b246IFwi0J/QvtC60LDQt9Cw0YLRjFwiLFxuICByZXNldEZpbHRlcjogXCLQntGH0LjRgdGC0LjRgtGMINGE0LjQu9GM0YLRgFwiLFxuICBjaGFuZ2VMb2NhbGU6IFwi0KHQvNC10L3QuNGC0Ywg0Y/Qt9GL0LpcIixcbiAgY2xlYXJCdXR0b246IFwiQ2xlYXJcIixcbiAgYWRkRWxlbWVudDogXCJDaG9vc2UgcXVlc3Rpb24gdG8gc2hvdy4uLlwiLFxuICBkZWZhdWx0T3JkZXI6IFwiRGVmYXVsdFwiLFxuICBhc2NPcmRlcjogXCJBc2NlbmRpbmdcIixcbiAgZGVzY09yZGVyOiBcIkRlc2NlbmRpbmdcIixcbiAgc2hvd01pbm9yQ29sdW1uczogXCJTaG93IG1pbm9yIGNvbHVtbnNcIixcbiAgb3RoZXJDb21tZW50VGl0bGU6IFwi0JTRgNGD0LPQvtC1INC4INC60L7QvNC80LXQvdGC0LDRgNC40LhcIixcbiAgbm9WaXN1YWxpemVyRm9yUXVlc3Rpb246IFwi0K3RgtC+0YIg0YLQuNC/INCy0L7Qv9GA0L7RgdCwINC10YnQtSDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0LDQvdCw0LvQuNGC0LjQutC+0LlcIixcbiAgbm9SZXN1bHRzOiBcItCg0LXQt9GD0LvRjNGC0LDRgtGLINC+0YLRgdGD0YLRgdGC0LLRg9GO0YJcIlxufTtcblxubG9jYWxpemF0aW9uLmxvY2FsZXNbXCJydVwiXSA9IHJ1c3NpYW5TdHJpbmdzO1xubG9jYWxpemF0aW9uLmxvY2FsZU5hbWVzW1wicnVcIl0gPSBcIlJ1c3NpYW5cIjtcbiIsImltcG9ydCB7IGVuZ2xpc2hTdHJpbmdzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uL2VuZ2xpc2hcIjtcblxuZXhwb3J0IHZhciBsb2NhbGl6YXRpb24gPSB7XG4gIGN1cnJlbnRMb2NhbGVWYWx1ZTogXCJcIixcbiAgZGVmYXVsdExvY2FsZVZhbHVlOiBcImVuXCIsXG4gIGxvY2FsZXM6IDx7W2luZGV4OiBzdHJpbmddOiBhbnl9Pnt9LFxuICBsb2NhbGVOYW1lczogPHtbaW5kZXg6IHN0cmluZ106IGFueX0+e30sXG4gIHN1cHBvcnRlZExvY2FsZXM6IDxBcnJheTxhbnk+PltdLFxuICBnZXQgY3VycmVudExvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPT09IHRoaXMuZGVmYXVsdExvY2FsZVZhbHVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogdGhpcy5jdXJyZW50TG9jYWxlVmFsdWU7XG4gIH0sXG4gIHNldCBjdXJyZW50TG9jYWxlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlVmFsdWUgPSB2YWw7XG4gIH0sXG4gIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZTtcbiAgfSxcbiAgc2V0IGRlZmF1bHRMb2NhbGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRMb2NhbGVWYWx1ZSA9IHZhbDtcbiAgfSxcbiAgZ2V0U3RyaW5nOiBmdW5jdGlvbihzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlXG4gICAgICA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdXG4gICAgICA6IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIGlmICghbG9jIHx8ICFsb2Nbc3RyTmFtZV0pIGxvYyA9IHRoaXMubG9jYWxlc1t0aGlzLmRlZmF1bHRMb2NhbGVdO1xuICAgIHZhciByZXN1bHQgPSBsb2Nbc3RyTmFtZV07XG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxlc1tcImVuXCJdW3N0ck5hbWVdIHx8IHN0ck5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGdldExvY2FsZXM6IGZ1bmN0aW9uKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICByZXMucHVzaChcIlwiKTtcbiAgICBpZiAodGhpcy5zdXBwb3J0ZWRMb2NhbGVzICYmIHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VwcG9ydGVkTG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMucHVzaCh0aGlzLnN1cHBvcnRlZExvY2FsZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5zb3J0KCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuZXhwb3J0IHZhciBzdXJ2ZXlTdHJpbmdzID0gZW5nbGlzaFN0cmluZ3M7XG4oPGFueT5sb2NhbGl6YXRpb24pLmxvY2FsZXNbXCJlblwiXSA9IGVuZ2xpc2hTdHJpbmdzO1xuKDxhbnk+bG9jYWxpemF0aW9uKS5sb2NhbGVOYW1lc1tcImVuXCJdID0gXCJlbmdsaXNoXCI7XG4iLCJleHBvcnQgZW51bSBRdWVzdGlvbkxvY2F0aW9uIHtcbiAgQ29sdW1uLFxuICBSb3csXG59XG5leHBvcnQgZW51bSBDb2x1bW5EYXRhVHlwZSB7XG4gIFRleHQsXG4gIEZpbGVMaW5rLFxuICBJbWFnZSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuICBpc1B1YmxpYzogYm9vbGVhbjtcbiAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb247XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpc0NvbW1lbnQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcbiAgbG9jYWxlPzogc3RyaW5nO1xuICBlbGVtZW50cz86IElUYWJsZUNvbHVtbltdO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGVybWlzc2lvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNQdWJsaWM6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsaXphdGlvbiB9IGZyb20gXCIuLi8uLi9sb2NhbGl6YXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcbmltcG9ydCB7IFF1ZXN0aW9uTG9jYXRpb24sIElUYWJsZUNvbHVtbiB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwiY29sdW1uXCIsXG4gIG5hbWU6IFwiZHJhZ1wiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19kcmFnLWJ1dHRvblwiXG4gICAgKTtcbiAgICBidG4uYXBwZW5kQ2hpbGQoRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcImRyYWdcIikpO1xuICAgIGJ0bi5vbm1vdXNlZG93biA9IChlKSA9PiB7XG4gICAgICB0YWJsZS5lbmFibGVDb2x1bW5SZW9yZGVyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcInNvcnRcIixcbiAgdmlzaWJsZUluZGV4OiAxLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGRlc2NUaXRsZSA9IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJkZXNjT3JkZXJcIik7XG4gICAgY29uc3QgYXNjVGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYXNjT3JkZXJcIik7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcInNvcnRpbmdcIik7XG4gICAgYnRuLnRpdGxlID0gXCJcIjtcbiAgICB2YXIgZGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJhc2NcIikge1xuICAgICAgICBidG4udGl0bGUgPSBkZXNjVGl0bGU7XG4gICAgICAgIGRpcmVjdGlvbiA9IFwiZGVzY1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLnRpdGxlID0gYXNjVGl0bGU7XG4gICAgICAgIGRpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgICB9XG4gICAgICB0YWJsZS5zb3J0QnlDb2x1bW4ob3B0aW9ucy5jb2x1bW5OYW1lLCBkaXJlY3Rpb24pO1xuICAgIH07XG4gICAgYnRuLm9uZHJhZyA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJjb2x1bW5cIixcbiAgbmFtZTogXCJoaWRlXCIsXG4gIHZpc2libGVJbmRleDogMixcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICB2YXIgYnRuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnQnV0dG9uKFwiaGlkZVwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaGlkZUNvbHVtblwiKTtcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRhYmxlLnNldENvbHVtblZpc2liaWxpdHkob3B0aW9ucy5jb2x1bW5OYW1lLCBmYWxzZSk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcIm1vdmV0b2RldGFpbHNcIixcbiAgdmlzaWJsZUluZGV4OiAzLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcIm1vdmV0b2RldGFpbHNcIik7XG4gICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1vdmVUb0RldGFpbFwiKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGFibGUuc2V0Q29sdW1uTG9jYXRpb24ob3B0aW9ucy5jb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLlJvdyk7XG4gICAgfTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcImZpbHRlclwiLFxuICB2aXNpYmxlSW5kZXg6IDQsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSwgb3B0aW9uczogYW55KSB7XG4gICAgdmFyIGVsID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlSW5wdXQoXG4gICAgICBcInNhLXRhYmxlX19maWx0ZXJcIixcbiAgICAgIGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJQbGFjZWhvbGRlclwiKVxuICAgICk7XG4gICAgZWwub25jbGljayA9IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGVsLm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgIHRhYmxlLmFwcGx5Q29sdW1uRmlsdGVyKG9wdGlvbnMuY29sdW1uTmFtZSwgZWwudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGVsO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImNvbHVtblwiLFxuICBuYW1lOiBcIm1ha2VwdWJsaWNcIixcbiAgdmlzaWJsZUluZGV4OiAtMSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlLCBvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1ha2VQcml2YXRlU3ZnID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChcIm1ha2Vwcml2YXRlXCIpO1xuICAgIGNvbnN0IG1ha2VQdWJsaWNTdmcgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVTdmdFbGVtZW50KFwibWFrZXB1YmxpY1wiKTtcbiAgICBjb25zdCBjb2x1bW4gPSB0YWJsZS5nZXRDb2x1bW5CeU5hbWUob3B0aW9ucy5jb2x1bW5OYW1lKTtcblxuICAgIHVwZGF0ZVN0YXRlKGNvbHVtbik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKG1ha2VQcml2YXRlU3ZnKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobWFrZVB1YmxpY1N2Zyk7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbHVtbi5pc1B1YmxpYyA9ICFjb2x1bW4uaXNQdWJsaWM7XG4gICAgICB1cGRhdGVTdGF0ZShjb2x1bW4pO1xuICAgICAgdGFibGUub25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjayAmJlxuICAgICAgICB0YWJsZS5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrKHRhYmxlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoY29sdW1uOiBJVGFibGVDb2x1bW4pIHtcbiAgICAgIGlmIChjb2x1bW4uaXNQdWJsaWMpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic2EtdGFibGVfX3N2Zy1idXR0b25cIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQcml2YXRlQ29sdW1uXCIpO1xuICAgICAgICBtYWtlUHJpdmF0ZVN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInNhLXRhYmxlX19zdmctYnV0dG9uIHNhLXRhYmxlX19zdmctYnV0dG9uLS1hY3RpdmVcIjtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gbG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1ha2VQdWJsaWNDb2x1bW5cIik7XG4gICAgICAgIG1ha2VQcml2YXRlU3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1ha2VQdWJsaWNTdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZVJvdyB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBDb2x1bW5EYXRhVHlwZSwgUXVlc3Rpb25Mb2NhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRhYmxlRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3RhYmxlZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByaXZhdGUgcm93OiBUYWJsZVJvdyxcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kZXRhaWxzVGFibGUgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJ0YWJsZVwiLFxuICAgICAgXCJzYS10YWJsZV9fZGV0YWlsLXRhYmxlXCJcbiAgICApO1xuICAgIHRoaXMudGFibGUub25Db2x1bW5zTG9jYXRpb25DaGFuZ2VkLmFkZCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBkZXRhaWxzVGFibGU6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgbG9jYXRpb24gPSBcImRldGFpbHNcIjtcblxuICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFpbHNUYWJsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHZhciByb3dzOiBIVE1MRWxlbWVudFtdID0gW107XG4gICAgdGhpcy50YWJsZS5jb2x1bW5zXG4gICAgICAuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5sb2NhdGlvbiA9PT0gUXVlc3Rpb25Mb2NhdGlvbi5Sb3cgJiYgY29sdW1uKVxuICAgICAgLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgcm93ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2EtdGFibGVfX2RldGFpbFwiKTtcbiAgICAgICAgdmFyIHRkMSA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7XG4gICAgICAgICAgaW5uZXJIVE1MOiBjb2x1bW4uZGlzcGxheU5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdGQyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZDIudGV4dENvbnRlbnQgPSB0aGlzLnJvdy5nZXRSb3dEYXRhKClbY29sdW1uLm5hbWVdO1xuICAgICAgICBpZihjb2x1bW4uZGF0YVR5cGUgPT09IENvbHVtbkRhdGFUeXBlLkltYWdlKSB7XG4gICAgICAgICAgdGQyLmlubmVySFRNTCA9IFwiPGltYWdlIHNyYz0nXCIgKyB0ZDIudGV4dENvbnRlbnQgKyBcIicvPlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZDMgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkMy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNob3dBc0NvbHVtbkJ1dHRvbihjb2x1bW4ubmFtZSkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgIH0pO1xuICAgIHZhciByb3cgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzYS10YWJsZV9fZGV0YWlsXCIpO1xuICAgIHZhciB0ZCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcIlwiLCB7IGNvbFNwYW46IDMgfSk7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBuZXcgVGFibGVFeHRlbnNpb25zKHRoaXMudGFibGUpO1xuICAgIGV4dGVuc2lvbnMucmVuZGVyKHRkLCBcImRldGFpbHNcIiwgeyByb3c6IHRoaXMucm93IH0pO1xuICAgIGlmICh0ZC5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICB0aGlzLmRldGFpbHNUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHNUYWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU2hvd0FzQ29sdW1uQnV0dG9uID0gKGNvbHVtbk5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2EtdGFibGVfX2J0biBzYS10YWJsZV9fYnRuLS1ncmF5XCIsXG4gICAgICB7IGlubmVySFRNTDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dBc0NvbHVtblwiKSB9XG4gICAgKTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50YWJsZS5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbik7XG4gICAgfTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICghIXRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZGV0YWlsc1RhYmxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kZXRhaWxzVGFibGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5pbXBvcnQgeyBEb2N1bWVudEhlbHBlciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vdGFibGVleHRlbnNpb25zXCI7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcImZpbHRlclwiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlOiBUYWJsZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBpbnB1dCA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUlucHV0KFxuICAgICAgXCJzYS10YWJsZV9fZ2xvYmFsLWZpbHRlciBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLFxuICAgICAgbG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlclBsYWNlaG9sZGVyXCIpXG4gICAgKTtcbiAgICBpbnB1dC5vbmNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0YWJsZS5hcHBseUZpbHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIGlucHV0O1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3djb2x1bW5cIixcbiAgdmlzaWJsZUluZGV4OiAyLFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic2VsZWN0XCIsXG4gICAgICBcInNhLXRhYmxlX19zaG93LWNvbHVtbiBzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gdGFibGUuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IGFueSkgPT4gIWNvbHVtbi5pc1Zpc2libGVcbiAgICAgICk7XG4gICAgICBpZiAoaGlkZGVuQ29sdW1ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgZHJvcGRvd24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHZhciBvcHRpb24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcbiAgICAgICAgdGV4dDogbG9jYWxpemF0aW9uLmdldFN0cmluZyhcInNob3dDb2x1bW5cIiksXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgICAgaGlkZGVuQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICB2YXIgdGV4dCA9IGNvbHVtbi5kaXNwbGF5TmFtZSB8fCBjb2x1bW4ubmFtZTtcbiAgICAgICAgaWYgKCEhdGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgdGl0bGU6IGNvbHVtbi5kaXNwbGF5TmFtZSxcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLm5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJvcGRvd24ub25jaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGFibGUuc2V0Q29sdW1uVmlzaWJpbGl0eSh2YWwsIHRydWUpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHZhciBvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgdGFibGUub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuYWRkKG9uVmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG5cbiAgICB0aGlzLm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLm9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkLnJlbW92ZShvblZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIGRyb3Bkb3duO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcImhlYWRlclwiLFxuICBuYW1lOiBcInNob3dlbnRyaWVzXCIsXG4gIHZpc2libGVJbmRleDogMyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFibGU6IFRhYmxlKTogSFRNTEVsZW1lbnQge1xuICAgIGZ1bmN0aW9uIGdldEVudHJpZXNEcm9wZG93bih0YWJsZTogVGFibGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICBjb25zdCBlbCA9IDxIVE1MU2VsZWN0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNWYWx1ZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCIsIFwiMjVcIiwgXCI1MFwiLCBcIjc1XCIsIFwiMTAwXCJdO1xuICAgICAgb3B0aW9uc1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwge1xuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgdGV4dDogdmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZWwudmFsdWUgPSBTdHJpbmcodGFibGUuZ2V0UGFnZVNpemUoKSk7XG5cbiAgICAgIGVsLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0YWJsZS5zZXRQYWdlU2l6ZShOdW1iZXIoZWwudmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3JDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXNcIlxuICAgICk7XG4gICAgY29uc3Qgc2hvd1NwYW4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBcInNhLXRhYmxlX19lbnRyaWVzLWxhYmVsIHNhLXRhYmxlX19lbnRyaWVzLWxhYmVsLS1yaWdodFwiLFxuICAgICAge1xuICAgICAgICBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJzaG93TGFiZWxcIiksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBlbnRyaWVzU3BhbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFwic2EtdGFibGVfX2VudHJpZXMtbGFiZWwgc2EtdGFibGVfX2VudHJpZXMtbGFiZWwtLWxlZnRcIixcbiAgICAgIHtcbiAgICAgICAgaW5uZXJIVE1MOiBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZW50cmllc0xhYmVsXCIpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93U3Bhbik7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0RW50cmllc0Ryb3Bkb3duKHRhYmxlKSk7XG4gICAgc2VsZWN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmllc1NwYW4pO1xuICAgIHJldHVybiBzZWxlY3RvckNvbnRhaW5lcjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJyZW1vdmVyb3dzXCIsXG4gIHZpc2libGVJbmRleDogLTEsXG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgdmFyIGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzYS10YWJsZV9fYnRuIHNhLXRhYmxlX19idG4tLWdyZWVuIHNhLXRhYmxlX19oZWFkZXItZXh0ZW5zaW9uIFwiLFxuICAgICAgeyBpbm5lckhUTUw6IGxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZW1vdmVSb3dzXCIpIH1cbiAgICApO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFibGUuZ2V0Q3JlYXRlZFJvd3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvdy5nZXRJc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICByb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGJ0bjtcbiAgfSxcbn0pO1xuXG5UYWJsZUV4dGVuc2lvbnMucmVnaXN0ZXJFeHRlbnNpb24oe1xuICBsb2NhdGlvbjogXCJoZWFkZXJcIixcbiAgbmFtZTogXCJjaGFuZ2Vsb2NhbGVcIixcbiAgdmlzaWJsZUluZGV4OiAxLFxuICByZW5kZXI6IGZ1bmN0aW9uICh0YWJsZSkge1xuICAgIHZhciBsb2NhbGVzID0gdGFibGUuZ2V0TG9jYWxlcygpO1xuICAgIGlmIChsb2NhbGVzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsID0gPEhUTUxTZWxlY3RFbGVtZW50PihcbiAgICAgIERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJzYS10YWJsZV9faGVhZGVyLWV4dGVuc2lvblwiLCB7fSlcbiAgICApO1xuICAgIHZhciBvcHRpb25zVmFsdWVzID0gW2xvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJjaGFuZ2VMb2NhbGVcIildLmNvbmNhdChcbiAgICAgIGxvY2FsZXNcbiAgICApO1xuICAgIG9wdGlvbnNWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICB2YXIgb3B0aW9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIHRleHQ6IHZhbCxcbiAgICAgIH0pO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBlbC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRhYmxlLmxvY2FsZSA9IGVsLnZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGVsO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuaW1wb3J0IHsgbG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uLy4uL2xvY2FsaXphdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBUYWJsZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi90YWJsZWV4dGVuc2lvbnNcIjtcblxuVGFibGVFeHRlbnNpb25zLnJlZ2lzdGVyRXh0ZW5zaW9uKHtcbiAgbG9jYXRpb246IFwicm93XCIsXG4gIG5hbWU6IFwiZGV0YWlsc1wiLFxuICB2aXNpYmxlSW5kZXg6IDAsXG4gIHJlbmRlcjogKF90YWJsZTogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0J1dHRvbihcImRldGFpbFwiKTtcbiAgICBidG4udGl0bGUgPSBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwic2hvd01pbm9yQ29sdW1uc1wiKTtcbiAgICBidG4uY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCI7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvcHRpb25zLnJvdy50b2dnbGVEZXRhaWxzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gYnRuO1xuICB9LFxufSk7XG5cblRhYmxlRXh0ZW5zaW9ucy5yZWdpc3RlckV4dGVuc2lvbih7XG4gIGxvY2F0aW9uOiBcInJvd1wiLFxuICBuYW1lOiBcInNlbGVjdFwiLFxuICB2aXNpYmxlSW5kZXg6IC0xLFxuICByZW5kZXI6IGZ1bmN0aW9uIChfdGFibGUsIG9wdCkge1xuICAgIHZhciByb3cgPSBvcHQucm93O1xuICAgIHZhciBjaGVja2JveCA9IDxIVE1MSW5wdXRFbGVtZW50PkRvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImlucHV0XCIsXG4gICAgICBcInNhLXRhYmxlX19yb3ctZXh0ZW5zaW9uXCIsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSByb3cuZ2V0SXNTZWxlY3RlZCgpO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LnRvZ2dsZVNlbGVjdCgpO1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuXG5pbnRlcmZhY2UgSVRhYmxlRXh0ZW5zaW9uIHtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2aXNpYmxlSW5kZXg6IG51bWJlcjtcbiAgcmVuZGVyOiAodGFibGU6IFRhYmxlLCBvcHQ6IGFueSkgPT4gSFRNTEVsZW1lbnQ7XG4gIGRlc3Ryb3k/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVFeHRlbnNpb25zIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZTogVGFibGUpIHt9XG4gIHByaXZhdGUgc3RhdGljIGV4dGVuc2lvbnM6IHsgW2xvY2F0aW9uOiBzdHJpbmddOiBBcnJheTxJVGFibGVFeHRlbnNpb24+IH0gPSB7fTtcbiAgcHJpdmF0ZSByZW5kZXJlZEV4dGVuc2lvbnM6IEFycmF5PElUYWJsZUV4dGVuc2lvbj4gPSBbXTtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBsb2NhdGlvbjogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdmFyIGV4dGVuc2lvbnMgPSBUYWJsZUV4dGVuc2lvbnMuZXh0ZW5zaW9uc1tsb2NhdGlvbl07XG4gICAgaWYgKCEhZXh0ZW5zaW9ucykge1xuICAgICAgZXh0ZW5zaW9ucyA9IHRoaXMuc29ydEV4dGVuc2lvbnMoZXh0ZW5zaW9ucyk7XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBpZiAoISFleHRlbnNpb24ucmVuZGVyKSB7XG4gICAgICAgICAgdmFyIGFjdGlvbiA9IGV4dGVuc2lvbi5yZW5kZXIodGhpcy50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKCEhYWN0aW9uKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbmRlcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKChleHRlbnNpb24pID0+IHtcbiAgICAgIGlmICghIWV4dGVuc2lvbi5kZXN0cm95KSBleHRlbnNpb24uZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZWRFeHRlbnNpb25zID0gW107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXh0ZW5zaW9uKGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXSlcbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb24ubG9jYXRpb25dID0gW107XG4gICAgdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbi5sb2NhdGlvbl0ucHVzaChleHRlbnNpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlRXh0ZW5zaW9uKGV4dGVuc2lvbjogSVRhYmxlRXh0ZW5zaW9uKSB7XG4gICAgaWYoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBleHRlbnNpb25zID0gVGFibGVFeHRlbnNpb25zLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLmxvY2F0aW9uXTtcbiAgICBjb25zdCBpbmRleCA9IGV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pO1xuICAgIGlmKGluZGV4ID49IDApIHtcbiAgICAgIGV4dGVuc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJFeHRlbnNpb24oXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBhY3Rpb25OYW1lOiBzdHJpbmdcbiAgKSB7XG4gICAgaWYoIWFjdGlvbk5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoISFsb2NhdGlvbikge1xuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gVGFibGVFeHRlbnNpb25zLmZpbmRFeHRlbnNpb24obG9jYXRpb24sIGFjdGlvbk5hbWUpO1xuICAgICAgVGFibGVFeHRlbnNpb25zLnJlbW92ZUV4dGVuc2lvbihleHRlbnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmV4dGVuc2lvbnMpLmZvckVhY2goKGxvY2F0aW9uOnN0cmluZykgPT4gVGFibGVFeHRlbnNpb25zLnVucmVnaXN0ZXJFeHRlbnNpb24obG9jYXRpb24sIGFjdGlvbk5hbWUpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZpbmRFeHRlbnNpb24oXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBhY3Rpb25OYW1lOiBzdHJpbmdcbiAgKTogSVRhYmxlRXh0ZW5zaW9uIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tsb2NhdGlvbl0pIHJldHVybiBudWxsO1xuICAgIHZhciBleHRlbnNpb24gPSB0aGlzLmV4dGVuc2lvbnNbbG9jYXRpb25dLmZpbHRlcihmdW5jdGlvbiAoXG4gICAgICBleHRlbnNpb246IElUYWJsZUV4dGVuc2lvblxuICAgICkge1xuICAgICAgcmV0dXJuIGV4dGVuc2lvbi5uYW1lID09IGFjdGlvbk5hbWU7XG4gICAgfSlbMF07XG4gICAgcmV0dXJuIGV4dGVuc2lvbiB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0RXh0ZW5zaW9ucyhleHRlbnNpb25zOiBBcnJheTxJVGFibGVFeHRlbnNpb24+KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dGVuc2lvbnMpKSByZXR1cm47XG4gICAgcmV0dXJuIFtdXG4gICAgICAuY29uY2F0KGV4dGVuc2lvbnMuZmlsdGVyKChleHRlbnNpb24pID0+IGV4dGVuc2lvbi52aXNpYmxlSW5kZXggPj0gMCkpXG4gICAgICAuc29ydCgoZmlyc3RFeHRlbnNpb24sIHNlY29uZEV4dGVuc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gZmlyc3RFeHRlbnNpb24udmlzaWJsZUluZGV4IC0gc2Vjb25kRXh0ZW5zaW9uLnZpc2libGVJbmRleDtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdXJ2ZXlNb2RlbCwgUXVlc3Rpb24sIEV2ZW50LCBzZXR0aW5ncyB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHtcbiAgSVBlcm1pc3Npb24sXG4gIFF1ZXN0aW9uTG9jYXRpb24sXG4gIENvbHVtbkRhdGFUeXBlLFxuICBJVGFibGVTdGF0ZSxcbiAgSVRhYmxlQ29sdW1uLFxufSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IERldGFpbHMgfSBmcm9tIFwiLi9leHRlbnNpb25zL2RldGFpbHNleHRlbnNpb25zXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHsgVGFibGVFeHRlbnNpb25zIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy90YWJsZWV4dGVuc2lvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbW1lcmNpYWxMaWNlbnNlTGluaywgY3JlYXRlSW1hZ2VzQ29udGFpbmVyLCBjcmVhdGVMaW5rc0NvbnRhaW5lciwgRG9jdW1lbnRIZWxwZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVPcHRpb25zIHtcbiAgW2luZGV4OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHByb3BlcnR5IHRvIHRydWUgdG8gcmVuZGVyIGNvbHVtbiBoZWFkaW5ncyB1c2luZyBxdWVzdGlvbiBuYW1lc1xuICAgKi9cbiAgdXNlTmFtZXNBc1RpdGxlcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBVc2UgdGhpcyBldmVudCB0byBjaGFuZ2UgdGhlIGRpc3BsYXkgdmFsdWUgb2YgcXVlc3Rpb24gaW4gdGFibGUuXG4gICAqIDxici8+IGBzZW5kZXJgIC0gdGhlIHRhYmxlIG9iamVjdCB0aGF0IGZpcmVzIHRoZSBldmVudC5cbiAgICogPGJyLz4gYG9wdGlvbnMucXVlc3Rpb25gIC0gdGhlIHF1ZXN0aW9uIG9iZWN0IGZvciB3aGljaCBldmVudCBpcyBmaXJlZC5cbiAgICogPGJyLz4gYG9wdGlvbnMuZGlzcGxheVZhbHVlYCAtIHRoZSBxdWVzdGlvbiBkaXNwbGF5IHZhbHVlLiBZb3UgY2FuIGNoYW5nZSB0aGlzIG9wdGlvbiBiZWZvcmUgaXQgaXMgZGlzcGxheWVkIGluIHRoZSB0YWJsZS5cbiAgICovXG4gIG9uR2V0UXVlc3Rpb25WYWx1ZT86IChvcHRpb25zOiB7XG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uLFxuICAgIGRpc3BsYXlWYWx1ZTogYW55LFxuICB9KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGUge1xuICBwdWJsaWMgc3RhdGljIHNob3dGaWxlc0FzSW1hZ2VzID0gZmFsc2U7XG4gIHB1YmxpYyBzdGF0aWMgaGF2ZUNvbW1lcmNpYWxMaWNlbnNlOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCB0YWJsZURhdGE6IGFueTtcbiAgcHJvdGVjdGVkIGV4dGVuc2lvbnM6IFRhYmxlRXh0ZW5zaW9ucztcbiAgcHJpdmF0ZSBoYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN1cnZleTogU3VydmV5TW9kZWwsXG4gICAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IElUYWJsZU9wdGlvbnMgPSB7fSxcbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4gPSBbXVxuICApIHtcbiAgICBpZighdGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoX2NvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5idWlsZENvbHVtbnMoc3VydmV5KTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVEYXRhKGRhdGEpO1xuICAgIGxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdGhpcy5zdXJ2ZXkubG9jYWxlO1xuXG4gICAgaWYgKF9jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuYnVpbGRDb2x1bW5zKHN1cnZleSk7XG4gICAgfVxuICAgIHRoaXMuZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGhpcyk7XG5cbiAgICB0aGlzLmhhdmVDb21tZXJjaWFsTGljZW5zZSA9XG4gICAgICBUYWJsZS5oYXZlQ29tbWVyY2lhbExpY2Vuc2UgfHxcbiAgICAgICghIW9wdGlvbnMgJiZcbiAgICAgICAgKHR5cGVvZiBvcHRpb25zLmhhdmVDb21tZXJjaWFsTGljZW5zZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgID8gb3B0aW9ucy5oYXZlQ29tbWVyY2lhbExpY2Vuc2VcbiAgICAgICAgICA6IGZhbHNlKSk7XG4gIH1cbiAgcHJvdGVjdGVkIHJlbmRlclJlc3VsdDogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBjdXJyZW50UGFnZVNpemU6IG51bWJlciA9IDU7XG4gIHByb3RlY3RlZCBjdXJyZW50UGFnZU51bWJlcjogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3Jvd3M6IFRhYmxlUm93W10gPSBbXTtcbiAgcHJvdGVjdGVkIGlzQ29sdW1uUmVvcmRlckVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIG9uQ29sdW1uc1Zpc2liaWxpdHlDaGFuZ2VkOiBFdmVudDxcbiAgICAoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksXG4gICAgYW55XG4gID4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgcHVibGljIG9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZDogRXZlbnQ8XG4gICAgKHNlbmRlcjogVGFibGUsIG9wdGlvbnM6IGFueSkgPT4gYW55LFxuICAgIGFueVxuICA+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuXG4gIHB1YmxpYyBvblJvd1JlbW92ZWQ6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICBwdWJsaWMgcmVuZGVyRGV0YWlsQWN0aW9uczogKFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcm93OiBUYWJsZVJvd1xuICApID0+IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBwdWJsaWMgYWJzdHJhY3Qgc29ydEJ5Q29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHB1YmxpYyByZW5kZXIodGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0YXJnZXROb2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLmhhdmVDb21tZXJjaWFsTGljZW5zZSkge1xuICAgICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVDb21tZXJjaWFsTGljZW5zZUxpbmsoKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGVuYWJsZUNvbHVtblJlb3JkZXIoKSB7XG4gICAgdGhpcy5pc0NvbHVtblJlb3JkZXJFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQ29sdW1uUmVvcmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ29sdW1uUmVvcmRlckVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYWdlTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VOdW1iZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZU51bWJlciA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VTaXplO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlU2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDcmVhdGVkUm93cygpOiBUYWJsZVJvd1tdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuX3Jvd3MpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ3JlYXRlZFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcm93cyA9IFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ29sdW1ucyA9IChzdXJ2ZXk6IFN1cnZleU1vZGVsKSA9PiB7XG4gICAgbGV0IGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj4gPSBbXTtcbiAgICB0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKS5mb3JFYWNoKChxdWVzdGlvbjogUXVlc3Rpb24pID0+IHtcbiAgICAgIGxldCBkYXRhVHlwZSA9IENvbHVtbkRhdGFUeXBlLlRleHQ7XG4gICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImZpbGVcIikge1xuICAgICAgICBkYXRhVHlwZSA9IENvbHVtbkRhdGFUeXBlLkZpbGVMaW5rO1xuICAgICAgfVxuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzaWduYXR1cmVwYWRcIikge1xuICAgICAgICBkYXRhVHlwZSA9IENvbHVtbkRhdGFUeXBlLkltYWdlO1xuICAgICAgfVxuICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6XG4gICAgICAgICAgdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy51c2VOYW1lc0FzVGl0bGVzXG4gICAgICAgICAgICA/IHF1ZXN0aW9uLm5hbWVcbiAgICAgICAgICAgIDogKHF1ZXN0aW9uLnRpdGxlIHx8IFwiXCIpLnRyaW0oKSB8fCBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBkYXRhVHlwZSxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICBpc1B1YmxpYzogdHJ1ZSxcbiAgICAgICAgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24uQ29sdW1uLFxuICAgICAgfSk7XG4gICAgICBpZiAoXG4gICAgICAgIHF1ZXN0aW9uLmhhc0NvbW1lbnQgfHxcbiAgICAgICAgKHF1ZXN0aW9uLmhhc090aGVyICYmIHF1ZXN0aW9uLmdldFN0b3JlT3RoZXJzQXNDb21tZW50KCkpXG4gICAgICApIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBgJHtxdWVzdGlvbi5uYW1lfSR7c2V0dGluZ3MuY29tbWVudFByZWZpeH1gLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBxdWVzdGlvbi5oYXNPdGhlclxuICAgICAgICAgICAgPyBxdWVzdGlvbi5vdGhlclRleHRcbiAgICAgICAgICAgIDogcXVlc3Rpb24uY29tbWVudFRleHQsXG4gICAgICAgICAgaXNDb21tZW50OiB0cnVlLFxuICAgICAgICAgIGRhdGFUeXBlLFxuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc1B1YmxpYzogdHJ1ZSxcbiAgICAgICAgICBsb2NhdGlvbjogUXVlc3Rpb25Mb2NhdGlvbi5Db2x1bW4sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9O1xuXG4gIHB1YmxpYyBpc0NvbHVtblZpc2libGUoY29sdW1uOiBJVGFibGVDb2x1bW4pIHtcbiAgICBpZiAoY29sdW1uLmxvY2F0aW9uICE9PSBRdWVzdGlvbkxvY2F0aW9uLkNvbHVtbikgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBjb2x1bW4uaXNWaXNpYmxlO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbHVtbnMoY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPikge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkLmZpcmUodGhpcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFRhYmxlRGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChpdGVtKSA9PiB7XG4gICAgICB2YXIgZGF0YUl0ZW06IGFueSA9IHt9O1xuICAgICAgdGhpcy5zdXJ2ZXkuZGF0YSA9IGl0ZW07XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gaXRlbVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUoY29sdW1uLm5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICBpZiAoY29sdW1uLmlzQ29tbWVudCkge1xuICAgICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24uY29tbWVudDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy51c2VWYWx1ZXNBc0xhYmVscykge1xuICAgICAgICAgICAgZGlzcGxheVZhbHVlID0gcXVlc3Rpb24udmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHF1ZXN0aW9uLmRpc3BsYXlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbi5kYXRhVHlwZSA9PT0gQ29sdW1uRGF0YVR5cGUuRmlsZUxpbmspIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkaXNwbGF5VmFsdWUpKSB7XG4gICAgICAgICAgICBkYXRhSXRlbVtjb2x1bW4ubmFtZV0gPSBUYWJsZS5zaG93RmlsZXNBc0ltYWdlcyA/IGNyZWF0ZUltYWdlc0NvbnRhaW5lcihcbiAgICAgICAgICAgICAgZGlzcGxheVZhbHVlXG4gICAgICAgICAgICApLm91dGVySFRNTCA6IGNyZWF0ZUxpbmtzQ29udGFpbmVyKFxuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWVcbiAgICAgICAgICAgICkub3V0ZXJIVE1MO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhSXRlbVtjb2x1bW4ubmFtZV0gPVxuICAgICAgICAgICAgdHlwZW9mIGRpc3BsYXlWYWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICA/IGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KGRpc3BsYXlWYWx1ZSkgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcHQgPSB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgZGlzcGxheVZhbHVlOiBkYXRhSXRlbVtjb2x1bW4ubmFtZV0gfTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25HZXRRdWVzdGlvblZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25HZXRRdWVzdGlvblZhbHVlKG9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUl0ZW1bY29sdW1uLm5hbWVdID0gb3B0LmRpc3BsYXlWYWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGF0YUl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZUNvbHVtbihmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcbiAgICB2YXIgZGVsZXRlZENvbHVtbnMgPSB0aGlzLl9jb2x1bW5zLnNwbGljZShmcm9tLCAxKTtcbiAgICB0aGlzLl9jb2x1bW5zLnNwbGljZSh0bywgMCwgZGVsZXRlZENvbHVtbnNbMF0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBRdWVzdGlvbkxvY2F0aW9uKSB7XG4gICAgdGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZSkubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHtcbiAgICAgIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lOiBzdHJpbmcpOiBJVGFibGVDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubmFtZSA9PT0gY29sdW1uTmFtZSlbMF07XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uVmlzaWJpbGl0eShjb2x1bW5OYW1lOiBzdHJpbmcsIGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lKTtcbiAgICBjb2x1bW4uaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgIHRoaXMub25Db2x1bW5zVmlzaWJpbGl0eUNoYW5nZWQuZmlyZSh0aGlzLCB7XG4gICAgICBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLFxuICAgICAgY29sdW1uVmlzaWJpbGl0eTogaXNWaXNpYmxlLFxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQuZmlyZSh0aGlzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5XaWR0aChjb2x1bW5OYW1lOiBzdHJpbmcsIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB2YXIgY29sdW1uID0gdGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZSk7XG4gICAgY29sdW1uLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVJvdyhyb3c6IFRhYmxlUm93KTogdm9pZCB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fcm93cy5pbmRleE9mKHJvdyk7XG4gICAgdGhpcy5fcm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMub25Sb3dSZW1vdmVkLmZpcmUodGhpcywgeyByb3c6IHJvdyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgbG9jYWxlIG9mIHRoZSB0YWJsZS5cbiAgICogSWYgbG9jYWxlcyBtb3JlIHRoYW4gb25lLCB0aGUgbGFuZ3VhZ2Ugc2VsZWN0aW9uIGRyb3Bkb3duIHdpbGwgYmUgYWRkZWQgaW4gdGhlIHRvb2xiYXJcbiAgICovXG4gIHB1YmxpYyBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGxvY2FsZSBmb3IgdGFibGUuXG4gICAqL1xuICBwdWJsaWMgc2V0IGxvY2FsZShuZXdMb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMuc3VydmV5LmxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICB0aGlzLnJlZnJlc2godHJ1ZSk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZC5maXJlKHRoaXMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHVibGljIGdldExvY2FsZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLnN1cnZleS5nZXRVc2VkTG9jYWxlcygpKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoKGhhcmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLmdldFBhZ2VOdW1iZXIoKTtcbiAgICAgIGlmIChoYXJkKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhYmxlRGF0YSh0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgICAgdmFyIHRhcmdldE5vZGUgPSB0aGlzLnJlbmRlclJlc3VsdDtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5yZW5kZXIodGFyZ2V0Tm9kZSk7XG4gICAgICB0aGlzLnNldFBhZ2VTaXplKHRoaXMuY3VycmVudFBhZ2VTaXplKTtcbiAgICAgIHRoaXMuc2V0UGFnZU51bWJlcih0aGlzLmN1cnJlbnRQYWdlTnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFyQ3JlYXRlZFJvd3MoKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMuZGVzdHJveSgpO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhpcy5yZW5kZXJSZXN1bHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVuZGVyZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5yZW5kZXJSZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVml6dWFsaXphdGlvbiBwYW5lbCBzdGF0ZSBnZXR0ZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IElUYWJsZVN0YXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9jYWxlOiBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSxcbiAgICAgIGVsZW1lbnRzOiBbXS5jb25jYXQodGhpcy5fY29sdW1ucyksXG4gICAgICBwYWdlU2l6ZTogdGhpcy5jdXJyZW50UGFnZVNpemUsXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVml6dWFsaXphdGlvbiBwYW5lbCBzdGF0ZSBzZXR0ZXIuXG4gICAqL1xuICBwdWJsaWMgc2V0IHN0YXRlKG5ld1N0YXRlOiBJVGFibGVTdGF0ZSkge1xuICAgIGlmICghbmV3U3RhdGUpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUubG9jYWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBsb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSA9IG5ld1N0YXRlLmxvY2FsZTtcbiAgICAgIHRoaXMuc3VydmV5LmxvY2FsZSA9IG5ld1N0YXRlLmxvY2FsZTtcbiAgICAgIHRoaXMuaW5pdFRhYmxlRGF0YSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV3U3RhdGUuZWxlbWVudHMgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICB0aGlzLl9jb2x1bW5zID0gbmV3U3RhdGUuZWxlbWVudHM7XG5cbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlLnBhZ2VTaXplICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgdGhpcy5jdXJyZW50UGFnZVNpemUgPSBuZXdTdGF0ZS5wYWdlU2l6ZTtcbiAgfVxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0YWJsZSBzdGF0ZSBjaGFuZ2VkLlxuICAgKi9cbiAgcHVibGljIG9uU3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlLCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRhYmxlIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgcHVibGljIGdldCBwZXJtaXNzaW9ucygpOiBJUGVybWlzc2lvbltdIHtcbiAgICByZXR1cm4gPGFueT50aGlzLl9jb2x1bW5zLm1hcCgoY29sdW1uOiBJVGFibGVDb2x1bW4pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICBpc1B1YmxpYzogY29sdW1uLmlzUHVibGljLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0YWJsZSBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHB1YmxpYyBzZXQgcGVybWlzc2lvbnMocGVybWlzc2lvbnM6IElQZXJtaXNzaW9uW10pIHtcbiAgICBjb25zdCB1cGRhdGVkRWxlbWVudHMgPSB0aGlzLl9jb2x1bW5zLm1hcCgoY29sdW1uOiBJVGFibGVDb2x1bW4pID0+IHtcbiAgICAgIHBlcm1pc3Npb25zLmZvckVhY2goKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgaWYgKHBlcm1pc3Npb24ubmFtZSA9PT0gY29sdW1uLm5hbWUpXG4gICAgICAgICAgY29sdW1uLmlzUHVibGljID0gcGVybWlzc2lvbi5pc1B1YmxpYztcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyAuLi5jb2x1bW4gfTtcbiAgICB9KTtcbiAgICB0aGlzLl9jb2x1bW5zID0gW10uY29uY2F0KHVwZGF0ZWRFbGVtZW50cyk7XG4gICAgdGhpcy5vblBlcm1pc3Npb25zQ2hhbmdlZENhbGxiYWNrICYmXG4gICAgICB0aGlzLm9uUGVybWlzc2lvbnNDaGFuZ2VkQ2FsbGJhY2sodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBwZXJtaXNzaW9ucyBjaGFuZ2VkXG4gICAqL1xuICBwdWJsaWMgb25QZXJtaXNzaW9uc0NoYW5nZWRDYWxsYmFjazogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFibGVSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGFibGU6IFRhYmxlLFxuICAgIHByb3RlY3RlZCBleHRlbnNpb25zQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZGV0YWlsc0NvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHModGFibGUsIHRoaXMsIGRldGFpbHNDb250YWluZXIpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucyA9IG5ldyBUYWJsZUV4dGVuc2lvbnModGFibGUpO1xuICAgIHRhYmxlLm9uQ29sdW1uc0xvY2F0aW9uQ2hhbmdlZC5hZGQodGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgcHVibGljIGV4dGVuc2lvbnM6IFRhYmxlRXh0ZW5zaW9ucztcbiAgcHJpdmF0ZSBkZXRhaWxlZFJvd0NsYXNzID0gXCJzYS10YWJsZV9fZGV0YWlsLXJvd1wiO1xuICBwcml2YXRlIGlzRGV0YWlsc0V4cGFuZGVkID0gZmFsc2U7XG4gIHB1YmxpYyBvblRvZ2dsZURldGFpbHM6IEV2ZW50PFxuICAgIChzZW5kZXI6IFRhYmxlUm93LCBvcHRpb25zOiBhbnkpID0+IGFueSxcbiAgICBhbnlcbiAgPiA9IG5ldyBFdmVudDwoc2VuZGVyOiBUYWJsZVJvdywgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICAvKipcbiAgICogUmV0dXJucyByb3cncyBodG1sIGVsZW1lbnRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGRhdGEsIHdoaWNoIGlzIGRpc3BsYXllZCBpbiB0aGUgcm93LlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFJvd0RhdGEoKTogYW55O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBvc2l0aW9uIG9mIHJvdyBpbiB0aGUgdGFibGUncyBkYXRhLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldERhdGFQb3NpdGlvbigpOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKHRoaXMuZXh0ZW5zaW9uc0NvbnRhaW5lciwgXCJyb3dcIiwgeyByb3c6IHRoaXMgfSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRldGFpbHMoKSB7XG4gICAgdGhpcy5kZXRhaWxzLm9wZW4oKTtcbiAgICB0aGlzLmdldEVsZW1lbnQoKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLmRldGFpbGVkUm93Q2xhc3M7XG4gICAgdGhpcy5vblRvZ2dsZURldGFpbHMuZmlyZSh0aGlzLCB7IGlzRXhwYW5kZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEZXRhaWxzKCkge1xuICAgIHRoaXMuZGV0YWlscy5jbG9zZSgpO1xuICAgIHRoaXMuZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kZXRhaWxlZFJvd0NsYXNzKTtcbiAgICB0aGlzLm9uVG9nZ2xlRGV0YWlscy5maXJlKHRoaXMsIHsgaXNFeHBhbmRlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5pc0RldGFpbHNFeHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXRhaWxzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gICAgfSBlbHNlIHRoaXMub3BlbkRldGFpbHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9ICF0aGlzLmlzU2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUucmVtb3ZlUm93KHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvc2VEZXRhaWxzKCk7XG4gIH07XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5vbkNvbHVtbnNMb2NhdGlvbkNoYW5nZWQucmVtb3ZlKFxuICAgICAgdGhpcy5vbkNvbHVtbkxvY2F0aW9uQ2hhbmdlZENhbGxiYWNrXG4gICAgKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMuZGVzdHJveSgpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBJVGFibGVPcHRpb25zLCBUYWJsZSwgVGFibGVSb3cgfSBmcm9tIFwiLi90YWJsZVwiO1xuaW1wb3J0IHsgU3VydmV5TW9kZWwgfSBmcm9tIFwic3VydmV5LWNvcmVcIjtcbmltcG9ydCB7IENvbHVtbkRhdGFUeXBlLCBRdWVzdGlvbkxvY2F0aW9uIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmltcG9ydCBcIi4vdGFidWxhdG9yLnNjc3NcIjtcbmltcG9ydCB7IERvY3VtZW50SGVscGVyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IFRhYnVsYXRvclRhYmxlcyBmcm9tIFwidGFidWxhdG9yLXRhYmxlc1wiO1xuXG5pZiAoISFkb2N1bWVudCkge1xuICBjb25zdCBzdmdUZW1wbGF0ZSA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4uL3N2Z2J1bmRsZS5odG1sXCIpO1xuICBjb25zdCB0ZW1wbGF0ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBsYXRlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGVtcGxhdGVIb2xkZXIuaW5uZXJIVE1MID0gc3ZnVGVtcGxhdGU7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGVIb2xkZXIpO1xufVxuXG5pbnRlcmZhY2UgSVRhYnVsYXRvck9wdGlvbnMgZXh0ZW5kcyBJVGFibGVPcHRpb25zIHtcbiAgdGFidWxhdG9yT3B0aW9ucz86IGFueTtcbiAgZG93bmxvYWRIaWRkZW5Db2x1bW5zPzogYm9vbGVhbjtcbiAgYWN0aW9uc0NvbHVtbldpZHRoPzogbnVtYmVyO1xuICBkb3dubG9hZEJ1dHRvbnM6IEFycmF5PHN0cmluZz47XG4gIGRvd25sb2FkT3B0aW9ucz86IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xuICAvKlxuICAgKnVzZSAgdG8gY2hhbmdlIG9wdGlvbnMgZHluYW1pY2FsbHlcbiAgICovXG4gIG9uRG93bmxvYWRDYWxsYmFja3M/OiB7XG4gICAgW3R5cGU6IHN0cmluZ106ICh0YWJ1bGF0b3I6IFRhYnVsYXRvciwgb3B0aW9uczogYW55KSA9PiB2b2lkLFxuICB9O1xufVxuXG5jb25zdCBkZWZhdWx0RG93bmxvYWRPcHRpb25zID0ge1xuICBmaWxlTmFtZTogXCJyZXN1bHRzXCIsXG4gIHBkZjoge1xuICAgIG9yaWVudGF0aW9uOiBcImxhbmRzY2FwZVwiLFxuICAgIGF1dG9UYWJsZToge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGNvbHVtbldpZHRoOiAxLFxuICAgICAgfSxcbiAgICAgIG1hcmdpbjogeyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMTAsIGxlZnQ6IDEwIH0sXG4gICAgfSxcbiAgfSxcbiAgY3N2OiB7IGRlbGltaXRlcjogXCIsXCIgfSxcbiAgeGxzeDogeyBzaGVldE5hbWU6IFwicmVzdWx0c1wiIH0sXG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9uczogSVRhYnVsYXRvck9wdGlvbnMgPSB7XG4gIHRhYnVsYXRvck9wdGlvbnM6IHt9LFxuICBhY3Rpb25zQ29sdW1uV2lkdGg6IDYwLFxuICBkb3dubG9hZEhpZGRlbkNvbHVtbnM6IGZhbHNlLFxuICBkb3dubG9hZEJ1dHRvbnM6IFtcInBkZlwiLCBcInhsc3hcIiwgXCJjc3ZcIl0sXG4gIGRvd25sb2FkT3B0aW9uczogZGVmYXVsdERvd25sb2FkT3B0aW9ucyxcbiAgb25Eb3dubG9hZENhbGxiYWNrczoge1xuICAgIHBkZjogKHRhYnVsYXRvcjogVGFidWxhdG9yLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBtaW5XaWR0aCA9XG4gICAgICAgICh0YWJ1bGF0b3IudGFidWxhdG9yVGFibGVzXG4gICAgICAgICAgLmdldENvbHVtbnModHJ1ZSlcbiAgICAgICAgICAuZmlsdGVyKChjb2w6IGFueSkgPT4gY29sLmlzVmlzaWJsZSgpKS5sZW5ndGggLVxuICAgICAgICAgIDEpICpcbiAgICAgICAgMTg2LjcyO1xuICAgICAgaWYgKG1pbldpZHRoID4gODQxLjg5KSB7XG4gICAgICAgIG9wdGlvbnMuanNQREYgPSB7IGZvcm1hdDogWzU5NS4yOCwgbWluV2lkdGhdIH07XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBUYWJ1bGF0b3IgZXh0ZW5kcyBUYWJsZSB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0IGhhdmVDb21tZXJjaWFsTGljZW5zZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBUYWJsZS5oYXZlQ29tbWVyY2lhbExpY2Vuc2UgPSB2YWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzdXJ2ZXk6IFN1cnZleU1vZGVsLFxuICAgIGRhdGE6IEFycmF5PE9iamVjdD4sXG4gICAgb3B0aW9uczogSVRhYnVsYXRvck9wdGlvbnMsXG4gICAgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXVxuICApIHtcbiAgICBzdXBlcihzdXJ2ZXksIGRhdGEsIG9wdGlvbnMsIF9jb2x1bW5zKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IENPTFVNTl9NSU5fV0lEVEggPSAxNTU7XG4gIHB1YmxpYyB0YWJ1bGF0b3JUYWJsZXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgdGFibGVDb250YWluZXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcblxuICBwdWJsaWMgcmVuZGVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgc3VwZXIucmVuZGVyKHRhcmdldE5vZGUpO1xuICAgIHRhcmdldE5vZGUuY2xhc3NOYW1lICs9IFwiIHNhLXRhYmxlIHNhLXRhYnVsYXRvclwiO1xuXG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucygpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRhYmxlRGF0YTtcblxuICAgIHZhciBoZWFkZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2EtdGFidWxhdG9yX19oZWFkZXJcIik7XG4gICAgdmFyIHBhZ2luYXRpb25FbGVtZW50ID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXRhYnVsYXRvcl9fcGFnaW5hdGlvbi1jb250YWluZXJcIlxuICAgICk7XG4gICAgdGhpcy50YWJsZUNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRhYmxlQ29udGFpbmVyKTtcblxuICAgIHZhciBjb25maWcgPSB7fTtcbiAgICBPYmplY3QuYXNzaWduKFxuICAgICAgY29uZmlnLFxuICAgICAge1xuICAgICAgICBkYXRhLFxuICAgICAgICBsYXlvdXQ6IFwiZml0Q29sdW1uc1wiLFxuICAgICAgICBwYWdpbmF0aW9uOiBcImxvY2FsXCIsXG4gICAgICAgIHBhZ2luYXRpb25TaXplOiB0aGlzLmN1cnJlbnRQYWdlU2l6ZSxcbiAgICAgICAgbW92YWJsZUNvbHVtbnM6IHRydWUsXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGNvbHVtbnMsXG4gICAgICAgIHJvd0Zvcm1hdHRlcjogdGhpcy5yb3dGb3JtYXR0ZXIsXG4gICAgICAgIHBhZ2luYXRpb25FbGVtZW50OiBwYWdpbmF0aW9uRWxlbWVudCxcbiAgICAgICAgY29sdW1uTW92ZWQ6IHRoaXMuY29sdW1uTW92ZWRDYWxsYmFjayxcbiAgICAgICAgY29sdW1uUmVzaXplZDogdGhpcy5jb2x1bW5SZXNpemVkQ2FsbGJhY2ssXG4gICAgICAgIHRvb2x0aXBzSGVhZGVyOiB0cnVlLFxuICAgICAgICB0b29sdGlwczogKGNlbGw6IGFueSkgPT4gY2VsbC5nZXRWYWx1ZSgpLFxuICAgICAgICBkb3dubG9hZFJvd1JhbmdlOiBcImFsbFwiLFxuICAgICAgICBjb2x1bW5NaW5XaWR0aDogMjQ4LFxuICAgICAgICBwYWdpbmF0aW9uQnV0dG9uQ291bnQ6IDMsXG4gICAgICAgIG5lc3RlZEZpZWxkU2VwYXJhdG9yOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMudGFidWxhdG9yT3B0aW9uc1xuICAgICk7XG5cbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcyA9IG5ldyBUYWJ1bGF0b3JUYWJsZXModGhpcy50YWJsZUNvbnRhaW5lciwgY29uZmlnKTtcblxuICAgIGNvbnN0IGV4dGVuc2lvbnNDb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdGFibGVfX2hlYWRlci1leHRlbnNpb25zXCJcbiAgICApO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURvd25sb2Fkc0JhcigpKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZXh0ZW5zaW9uc0NvbnRhaW5lcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHBhZ2luYXRpb25FbGVtZW50KTtcbiAgICB0aGlzLmV4dGVuc2lvbnMucmVuZGVyKGV4dGVuc2lvbnNDb250YWluZXIsIFwiaGVhZGVyXCIpO1xuICAgIHRoaXMucmVuZGVyUmVzdWx0ID0gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRG93bmxvYWRzQmFyKCk6IEhUTUxFbGVtZW50IHtcbiAgICB2YXIgY3JlYXRlRG93bmxvYWRCdXR0b24gPSAodHlwZTogc3RyaW5nLCBjYXB0aW9uOiBzdHJpbmcpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBidG4gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcInNhLXRhYmxlX19idG4gc2EtdGFibGVfX2J0bi0tc21hbGwgc2EtdGFibGVfX2J0bi0tZ3JheVwiLFxuICAgICAgICB7XG4gICAgICAgICAgaW5uZXJIVE1MOiBjYXB0aW9uLFxuICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWQodHlwZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBidG47XG4gICAgfTtcblxuICAgIHZhciBjb250YWluZXIgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic2EtdGFidWxhdG9yX19kb3dubG9hZHMtYmFyXCJcbiAgICApO1xuXG4gICAgdGhpcy5vcHRpb25zLmRvd25sb2FkQnV0dG9ucy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlRG93bmxvYWRCdXR0b24oXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBsb2NhbGl6YXRpb24uZ2V0U3RyaW5nKGAke3R5cGV9RG93bmxvYWRDYXB0aW9uYClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuZGVzdHJveSgpO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfTtcblxuICBwcml2YXRlIGNvbHVtbk1vdmVkQ2FsbGJhY2sgPSAoY29sdW1uOiBhbnksIGNvbHVtbnM6IGFueVtdKSA9PiB7XG4gICAgdmFyIGZyb20gPSB0aGlzLl9jb2x1bW5zLmluZGV4T2YodGhpcy5nZXRDb2x1bW5CeU5hbWUoY29sdW1uLmdldEZpZWxkKCkpKTtcbiAgICB2YXIgdG8gPSBjb2x1bW5zLmluZGV4T2YoY29sdW1uKSAtIDE7XG4gICAgdGhpcy5tb3ZlQ29sdW1uKGZyb20sIHRvKTtcbiAgICB0aGlzLmRpc2FibGVDb2x1bW5SZW9yZGVyKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBjb2x1bW5SZXNpemVkQ2FsbGJhY2sgPSAoY29sdW1uOiBhbnkpID0+IHtcbiAgICB0aGlzLnNldENvbHVtbldpZHRoKGNvbHVtbi5nZXRGaWVsZCgpLCBjb2x1bW4uZ2V0V2lkdGgoKSk7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfTtcblxuICBwcml2YXRlIHJvd0Zvcm1hdHRlciA9IChyb3c6IGFueSk6IHZvaWQgPT4ge1xuICAgIHZhciB0YWJsZVJvdyA9IG5ldyBUYWJ1bGF0b3JSb3coXG4gICAgICB0aGlzLFxuICAgICAgcm93LmdldENlbGxzKClbMF0uZ2V0RWxlbWVudCgpLFxuICAgICAgcm93LmdldEVsZW1lbnQoKSxcbiAgICAgIHJvd1xuICAgICk7XG4gICAgdGFibGVSb3cub25Ub2dnbGVEZXRhaWxzLmFkZCgoKSA9PiB7XG4gICAgICByb3cubm9ybWFsaXplSGVpZ2h0KCk7XG4gICAgICB0aGlzLmxheW91dCgpO1xuICAgIH0pO1xuICAgIHRhYmxlUm93LnJlbmRlcigpO1xuXG4gICAgdGhpcy5fcm93cy5wdXNoKHRhYmxlUm93KTtcbiAgfTtcblxuICBwcml2YXRlIGdldFRpdGxlRm9ybWF0dGVyKFxuICAgIGNlbGw6IGFueSxcbiAgICBmb3JtYXR0ZXJQYXJhbXM6IGFueSxcbiAgICBvblJlbmRlcmVkOiBhbnksXG4gICAgY29sdW1uTmFtZTogYW55XG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICB2YXIgY29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YXIgdGl0bGUgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIlwiLCB7XG4gICAgICBpbm5lckhUTUw6IGNlbGwuZ2V0VmFsdWUoKSxcbiAgICB9KTtcbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMuZ2V0SGVhZGVyQWN0aW9ucyhjb2x1bW5OYW1lKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXIub25tb3VzZWRvd24gPSAoZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDb2x1bW5SZW9yZGVyRW5hYmxlZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlQ29sdW1uUmVvcmRlcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGVhZGVyQWN0aW9ucyhjb2x1bW5OYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInNhLXRhYmxlX19hY3Rpb24tY29udGFpbmVyXCJcbiAgICApO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5yZW5kZXIoY29udGFpbmVyLCBcImNvbHVtblwiLCB7IGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUgfSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zKCk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IGFueSA9IHRoaXMuY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBxdWVzdGlvbiA9IHRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKGNvbHVtbi5uYW1lKTtcbiAgICAgIGxldCBmb3JtYXR0ZXIgPSBcInBsYWludGV4dFwiO1xuICAgICAgaWYgKGNvbHVtbi5kYXRhVHlwZSA9PSBDb2x1bW5EYXRhVHlwZS5GaWxlTGluaykge1xuICAgICAgICBmb3JtYXR0ZXIgPSBcImh0bWxcIjtcbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW4uZGF0YVR5cGUgPT0gQ29sdW1uRGF0YVR5cGUuSW1hZ2UpIHtcbiAgICAgICAgZm9ybWF0dGVyID0gXCJpbWFnZVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGQ6IGNvbHVtbi5uYW1lLFxuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAocXVlc3Rpb24gJiZcbiAgICAgICAgICAgICh0aGlzLm9wdGlvbnMudXNlTmFtZXNBc1RpdGxlcyA/IHF1ZXN0aW9uLm5hbWUgOiBxdWVzdGlvbi50aXRsZSkpIHx8XG4gICAgICAgICAgY29sdW1uLmRpc3BsYXlOYW1lLFxuICAgICAgICB3aWR0aDogY29sdW1uLndpZHRoLFxuICAgICAgICB3aWR0aFNocmluazogIWNvbHVtbi53aWR0aCA/IDEgOiAwLFxuICAgICAgICB2aXNpYmxlOiB0aGlzLmlzQ29sdW1uVmlzaWJsZShjb2x1bW4pLFxuICAgICAgICBoZWFkZXJTb3J0OiBmYWxzZSxcbiAgICAgICAgZG93bmxvYWQ6IHRoaXMub3B0aW9ucy5kb3dubG9hZEhpZGRlbkNvbHVtbnMgPyB0cnVlIDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgIHRpdGxlRm9ybWF0dGVyOiAoY2VsbDogYW55LCBmb3JtYXR0ZXJQYXJhbXM6IGFueSwgb25SZW5kZXJlZDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGVGb3JtYXR0ZXIoXG4gICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgZm9ybWF0dGVyUGFyYW1zLFxuICAgICAgICAgICAgb25SZW5kZXJlZCxcbiAgICAgICAgICAgIGNvbHVtbi5uYW1lXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gYWRkIHNwZWNpYWwgY29sdW1uIChjb2xsYXBzZS9leHBhbmQpXG4gICAgY29sdW1ucy51bnNoaWZ0KHtcbiAgICAgIGZpZWxkOiBcIlwiLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBkb3dubG9hZDogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgbWluV2lkdGg6IHRoaXMub3B0aW9ucy5hY3Rpb25zQ29sdW1uV2lkdGgsXG4gICAgICB3aWR0aDogdGhpcy5vcHRpb25zLmFjdGlvbnNDb2x1bW5XaWR0aCxcbiAgICB9KTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcHVibGljIHNldENvbHVtblZpc2liaWxpdHkoY29sdW1uTmFtZTogc3RyaW5nLCBpc1Zpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBzdXBlci5zZXRDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbk5hbWUsIGlzVmlzaWJsZSk7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zaG93Q29sdW1uKGNvbHVtbk5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJ1bGF0b3JUYWJsZXMuaGlkZUNvbHVtbihjb2x1bW5OYW1lKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldENvbHVtbkxvY2F0aW9uKGNvbHVtbk5hbWU6IHN0cmluZywgbG9jYXRpb246IFF1ZXN0aW9uTG9jYXRpb24pOiB2b2lkIHtcbiAgICBzdXBlci5zZXRDb2x1bW5Mb2NhdGlvbihjb2x1bW5OYW1lLCBsb2NhdGlvbik7XG4gICAgaWYgKHRoaXMuaXNSZW5kZXJlZCkge1xuICAgICAgaWYgKGxvY2F0aW9uID09IFF1ZXN0aW9uTG9jYXRpb24uUm93KVxuICAgICAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5oaWRlQ29sdW1uKGNvbHVtbk5hbWUpO1xuICAgICAgZWxzZSB0aGlzLnRhYnVsYXRvclRhYmxlcy5zaG93Q29sdW1uKGNvbHVtbk5hbWUpO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1uV2lkdGgoY29sdW1uTmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0Q29sdW1uV2lkdGgoY29sdW1uTmFtZSwgd2lkdGgpO1xuICAgIGlmICh0aGlzLmlzUmVuZGVyZWQpIHtcbiAgICAgIHZhciBkZWZpbml0aW9uID0gdGhpcy50YWJ1bGF0b3JUYWJsZXNcbiAgICAgICAgLmdldENvbHVtbihjb2x1bW5OYW1lKVxuICAgICAgICAuZ2V0RGVmaW5pdGlvbigpO1xuICAgICAgZGVmaW5pdGlvbi53aWR0aCA9IHdpZHRoO1xuICAgICAgZGVmaW5pdGlvbi53aWR0aFNocmluayA9IDA7XG4gICAgICB0aGlzLmxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0QnlDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLnNldFNvcnQoY29sdW1uTmFtZSwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUNvbHVtbkZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRGaWx0ZXIoY29sdW1uTmFtZSwgXCJsaWtlXCIsIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGN1c3RvbUZpbHRlciA9IChkYXRhOiBhbnksIGZpbHRlclBhcmFtczogYW55KSA9PiB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZGF0YVtrZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyUGFyYW1zLnZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRGaWx0ZXIoY3VzdG9tRmlsdGVyLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFnZU51bWJlcigpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGFidWxhdG9yVGFibGVzLmdldFBhZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlTnVtYmVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRQYWdlTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRQYWdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnZVNpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHN1cGVyLnNldFBhZ2VTaXplKHZhbHVlKTtcbiAgICBpZiAodGhpcy5pc1JlbmRlcmVkKSB7XG4gICAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5zZXRQYWdlU2l6ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREb3dubG9hZE9wdGlvbnModHlwZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5vcHRpb25zLmRvd25sb2FkT3B0aW9uc1t0eXBlXSB8fCBkZWZhdWx0T3B0aW9ucy5kb3dubG9hZE9wdGlvbnNbdHlwZV1cbiAgICApO1xuICAgIGNvbnN0IG9uRG93bmxvYWRDYWxsYmFjayA9IHRoaXMub3B0aW9ucy5vbkRvd25sb2FkQ2FsbGJhY2tzW3R5cGVdO1xuICAgIGlmICghIW9uRG93bmxvYWRDYWxsYmFjaykgb25Eb3dubG9hZENhbGxiYWNrKHRoaXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcHVibGljIGRvd25sb2FkKHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudGFidWxhdG9yVGFibGVzLmRvd25sb2FkKFxuICAgICAgdHlwZSxcbiAgICAgIGAke3RoaXMub3B0aW9ucy5kb3dubG9hZE9wdGlvbnMuZmlsZU5hbWV9LiR7dHlwZX1gLFxuICAgICAgdGhpcy5nZXREb3dubG9hZE9wdGlvbnModHlwZSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGxheW91dChoYXJkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnVsYXRvclRhYmxlcy5yZWRyYXcoaGFyZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhYnVsYXRvclJvdyBleHRlbmRzIFRhYmxlUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRhYmxlOiBUYWJsZSxcbiAgICBwcm90ZWN0ZWQgZXh0ZW5zaW9uc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGRldGFpbHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByb3RlY3RlZCBpbm5lclJvdzogYW55XG4gICkge1xuICAgIHN1cGVyKHRhYmxlLCBleHRlbnNpb25zQ29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5pbm5lclJvdy5nZXRFbGVtZW50KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Um93RGF0YSgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJSb3cuZ2V0RGF0YSgpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmlubmVyUm93LmdldFBvc2l0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5uZXJSb3cuZGVsZXRlKCk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCB2YXIgX19hc3NpZ24gPVxuICAoPGFueT5PYmplY3QpW1wiYXNzaWduXCJdIHx8XG4gIGZ1bmN0aW9uKHRhcmdldDogYW55KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzczogYW55LCBiYXNlQ2xhc3M6IGFueSkge1xuICBmb3IgKHZhciBwIGluIGJhc2VDbGFzcylcbiAgICBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XG4gIGZ1bmN0aW9uIF9fKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSB0aGlzQ2xhc3M7XG4gIH1cbiAgdGhpc0NsYXNzLnByb3RvdHlwZSA9XG4gICAgYmFzZUNsYXNzID09PSBudWxsXG4gICAgICA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKVxuICAgICAgOiAoKF9fLnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGUpLCBuZXcgKDxhbnk+X18pKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fcmVzdCA9IGZ1bmN0aW9uKHNvdXJjZTogYW55LCBlOiBhbnkpIHtcbiAgdmFyIHJlc3VsdDogYW55ID0ge307XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBzb3VyY2UpXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcGVydHlOYW1lKSAmJlxuICAgICAgZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPCAwXG4gICAgKVxuICAgICAgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBzb3VyY2VbcHJvcGVydHlOYW1lXTtcbiAgaWYgKFxuICAgIHNvdXJjZSAhPSBudWxsICYmXG4gICAgdHlwZW9mICg8YW55Pk9iamVjdClbXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIl0gPT09IFwiZnVuY3Rpb25cIlxuICApXG4gICAgZm9yIChcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgcHJvcGVydHlTeW1ib2xzID0gKDxhbnk+T2JqZWN0KVtcImdldE93blByb3BlcnR5U3ltYm9sc1wiXShzb3VyY2UpO1xuICAgICAgaSA8IHByb3BlcnR5U3ltYm9scy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApXG4gICAgICBpZiAoZS5pbmRleE9mKHByb3BlcnR5U3ltYm9sc1tpXSkgPCAwKVxuICAgICAgICByZXN1bHRbcHJvcGVydHlTeW1ib2xzW2ldXSA9IHNvdXJjZVtwcm9wZXJ0eVN5bWJvbHNbaV1dO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuXG5leHBvcnQgdmFyIF9fZGVjb3JhdGUgPSBmdW5jdGlvbihcbiAgZGVjb3JhdG9yczogYW55LFxuICB0YXJnZXQ6IGFueSxcbiAga2V5OiBhbnksXG4gIGRlc2M6IGFueVxuKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICByID1cbiAgICAgIGMgPCAzXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogZGVzYyA9PT0gbnVsbFxuICAgICAgICAgID8gKGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgICA6IGRlc2MsXG4gICAgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICBpZiAoKGQgPSBkZWNvcmF0b3JzW2ldKSlcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuIiwiZXhwb3J0IGNsYXNzIERvY3VtZW50SGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfT4sXHJcbiAgICBpc1NlbGVjdGVkOiAob3B0aW9uOiB7IHZhbHVlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB9KSA9PiBib29sZWFuLFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdC13cmFwcGVyXCI7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwic2EtcXVlc3Rpb25fX3NlbGVjdFwiO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIHtcclxuICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxyXG4gICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKG9wdGlvbiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdC5vbmNoYW5nZSA9IGhhbmRsZXI7XHJcbiAgICBzZWxlY3RXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0V3JhcHBlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnV0dG9uKFxyXG4gICAgaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZCxcclxuICAgIHRleHQgPSBcIlwiLFxyXG4gICAgY2xhc3NOYW1lID0gXCJzYS10b29sYmFyX19idXR0b25cIlxyXG4gICkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgY2xhc3NOYW1lLCB7XHJcbiAgICAgIGlubmVyVGV4dDogdGV4dCxcclxuICAgICAgb25jbGljazogaGFuZGxlcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChcclxuICAgIHRhZ05hbWU6IHN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nID0gXCJcIixcclxuICAgIGF0dHJzPzogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmICghIWF0dHJzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAoPGFueT5lbClba2V5XSA9IGF0dHJzW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdFbGVtZW50KHBhdGg6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInVzZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWxlbS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXHJcbiAgICAgIFwiaHJlZlwiLFxyXG4gICAgICBcIiNzYS1zdmctXCIgKyBwYXRoXHJcbiAgICApO1xyXG4gICAgc3ZnRWxlbS5hcHBlbmRDaGlsZCh1c2VFbGVtKTtcclxuICAgIHJldHVybiBzdmdFbGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTdmdCdXR0b24ocGF0aDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgY29uc3QgYnRuID0gPEhUTUxCdXR0b25FbGVtZW50PihcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNhLXRhYmxlX19zdmctYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQocGF0aCkpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3ZnVG9nZ2xlQnV0dG9uKFxyXG4gICAgc3ZnUGF0aDE6IHN0cmluZyxcclxuICAgIHN2UHBhdGgyOiBzdHJpbmcsXHJcbiAgICB0ZXh0MTogc3RyaW5nLFxyXG4gICAgdGV4dDI6IHN0cmluZyxcclxuICAgIGhhbmRsZXIxOiAoZTogYW55KSA9PiBhbnksXHJcbiAgICBoYW5kbGVyMjogKGU6IGFueSkgPT4gYW55LFxyXG4gICAgc3RhdGUgPSBcImZpcnN0XCIsXHJcbiAgICBjbGFzc05hbWUgPSBcInNhLXRvb2xiYXJfX2J1dHRvbiBzYS10b29sYmFyX19zdmctYnV0dG9uXCJcclxuICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmcxID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdmdQYXRoMSk7XHJcbiAgICBjb25zdCBzdmcyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlU3ZnRWxlbWVudChzdlBwYXRoMik7XHJcbiAgICBjb25zdCBidXR0b24gPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICAgIHN0YXRlID0gXCJzZWNvbmRcIjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoc3ZnMSk7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGhhbmRsZXIyKGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcInNlY29uZFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSBcImZpcnN0XCI7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gdGV4dDE7XHJcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHN2ZzIpO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzdmcxKTtcclxuICAgICAgICBoYW5kbGVyMShlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc3RhdGUgPT09IFwiZmlyc3RcIikge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MTtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzEpO1xyXG4gICAgfSBlbHNlIGlmICgoc3RhdGUgPSBcInNlY29uZFwiKSkge1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0ZXh0MjtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2ZzIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gdG9nZ2xlO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlucHV0KFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgICBkZWZhdWx0VmFsdWUgPSBcIlwiXHJcbiAgKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSA8SFRNTElucHV0RWxlbWVudD5Eb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFxyXG4gICAgICBcImlucHV0XCIsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgb3B0aW9ucyA9IHtcclxuICBydW5uaW5nSW5Ccm93c2VyOiB0eXBlb2Ygd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIixcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd0RvbVJlbmRlcmluZygpIHtcclxuICByZXR1cm4gb3B0aW9ucy5ydW5uaW5nSW5Ccm93c2VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tbWVyY2lhbExpY2Vuc2VMaW5rKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IERvY3VtZW50SGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzYS1jb21tZXJjaWFsXCIpO1xyXG4gIGNvbnN0IGxpbmsgPSBEb2N1bWVudEhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBcInNhLWNvbW1lcmNpYWxfX3RleHRcIiwge1xyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5zdXJ2ZXlqcy5pby9CdXlcIixcclxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXJTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJcIik7XHJcbiAgY29uc3QgaWNvbiA9IERvY3VtZW50SGVscGVyLmNyZWF0ZVN2Z0VsZW1lbnQoXCJub25jb21tZXJjaWFsXCIpO1xyXG4gIGNvbnN0IHRleHRTcGFuID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcclxuICAgIFwic3BhblwiLFxyXG4gICAgXCJzYS1jb21tZXJjaWFsX19wcm9kdWN0XCIsXHJcbiAgICB7XHJcbiAgICAgIGlubmVySFRNTDogYFBsZWFzZSBwdXJjaGFzZSBhIFN1cnZleUpTIEFuYWx5dGljcyBkZXZlbG9wZXIgbGljZW5zZVxyXG4gICAgICAgIHRvXHJcbiAgICAgICAgdXNlIGl0IGluIHlvdXJcclxuICAgICAgICBhcHAuYCxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKS5hcHBlbmRDaGlsZChjb250YWluZXJTcGFuKTtcclxuICBjb250YWluZXJTcGFuLmFwcGVuZENoaWxkKGljb24pO1xyXG4gIGNvbnRhaW5lclNwYW4uYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHppcEFycmF5cyguLi5hcnJheXM6IGFueVtdKTogYW55W11bXSB7XHJcbiAgICBsZXQgemlwQXJyYXk6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5c1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB6aXBBcnJheVtpXSA9IFtdO1xyXG4gICAgICBhcnJheXMuZm9yRWFjaCgoYXJyKSA9PiB7XHJcbiAgICAgICAgemlwQXJyYXlbaV0ucHVzaChhcnJbaV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB6aXBBcnJheTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW56aXBBcnJheXMoemlwQXJyYXk6IGFueVtdW10pOiBhbnlbXVtdIHtcclxuICAgIGxldCBhcnJheXM6IGFueVtdW10gPSBbXTtcclxuICAgIHppcEFycmF5LmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaikgPT4ge1xyXG4gICAgICAgIGlmICghYXJyYXlzW2pdKSBhcnJheXNbal0gPSBbXTtcclxuICAgICAgICBhcnJheXNbal1baV0gPSB2YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyYXlzO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNvcnREaWN0aW9uYXJ5KFxyXG4gICAga2V5czogYW55W10sXHJcbiAgICB2YWx1ZXM6IGFueVtdLFxyXG4gICAgZGVzYzogYm9vbGVhblxyXG4gICk6IHsga2V5czogYW55W10sIHZhbHVlczogYW55W10gfSB7XHJcbiAgICBsZXQgZGljdGlvbmFyeSA9IHRoaXMuemlwQXJyYXlzKGtleXMsIHZhbHVlcyk7XHJcbiAgICBsZXQgY29tcGFyYXRvciA9IChhOiBhbnlbXSwgYjogYW55W10sIGFzYzogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFbMV0gPCBiWzFdID8gMSA6IGFbMV0gPT0gYlsxXSA/IDAgOiAtMTtcclxuICAgICAgcmV0dXJuIGFzYyA/IHJlc3VsdCA6IHJlc3VsdCAqIC0xO1xyXG4gICAgfTtcclxuICAgIGRpY3Rpb25hcnkuc29ydCgoYTogYW55W10sIGI6IGFueVtdKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZXNjID8gY29tcGFyYXRvcihhLCBiLCBmYWxzZSkgOiBjb21wYXJhdG9yKGEsIGIpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQga2V5c0FuZFZhbHVlcyA9IHRoaXMudW56aXBBcnJheXMoZGljdGlvbmFyeSk7XHJcbiAgICByZXR1cm4geyBrZXlzOiBrZXlzQW5kVmFsdWVzWzBdLCB2YWx1ZXM6IGtleXNBbmRWYWx1ZXNbMV0gfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9QZXJjZW50YWdlKHZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlua3NDb250YWluZXIoXHJcbiAgbGlua3M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb250ZW50OiBhbnkgfT5cclxuKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgXCJcIiwge1xyXG4gICAgICAgIGlubmVySFRNTDogbGluay5uYW1lLFxyXG4gICAgICAgIGRvd25sb2FkOiBsaW5rLm5hbWUsXHJcbiAgICAgICAgaHJlZjogbGluay5jb250ZW50LFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gbGlua3NDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZXNDb250YWluZXIoXHJcbiAgbGlua3M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb250ZW50OiBhbnkgfT5cclxuKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgRG9jdW1lbnRIZWxwZXIuY3JlYXRlRWxlbWVudChcImltZ1wiLCBcIlwiLCB7XHJcbiAgICAgICAgYWx0OiBsaW5rLm5hbWUsXHJcbiAgICAgICAgc3JjOiBsaW5rLmNvbnRlbnQsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiBsaW5rc0NvbnRhaW5lcjtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VydmV5X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGFidWxhdG9yX3RhYmxlc19fOyJdLCJzb3VyY2VSb290IjoiIn0=