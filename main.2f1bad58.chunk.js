(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 121:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(43);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(19);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/cloudtables-api/dist/CloudTablesApi.js
var CloudTablesApi = __webpack_require__(86);
var CloudTablesApi_default = /*#__PURE__*/__webpack_require__.n(CloudTablesApi);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(156);

// EXTERNAL MODULE: ./src/Components/Combobox/jquery-ui-autocomplete.css
var jquery_ui_autocomplete = __webpack_require__(157);

// CONCATENATED MODULE: ./src/Components/Combobox/Combobox.js





function setupAgencyCombobox(combobox) {
  // combobox setup
  $(function () {
    $.widget('custom.combobox', {
      _create: function _create() {
        this.wrapper = $('<span>').addClass('custom-combobox').insertAfter(this.element);
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
      _createAutocomplete: function _createAutocomplete() {
        var selected = this.element.children(':selected'),
          value = selected.val() ? selected.text() : '';
        this.input = $('<input>').appendTo(this.wrapper).val(value).attr('title', '').addClass('custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left').autocomplete({
          delay: 0,
          minLength: 0,
          source: this._source.bind(this)
        }).tooltip({
          classes: {
            'ui-tooltip': 'ui-state-highlight'
          }
        });
        this._on(this.input, {
          autocompleteselect: function autocompleteselect(event, ui) {
            ui.item.option.selected = true;
            this._trigger('select', event, {
              item: ui.item.option
            });
            // trigger change event
            $('#combobox').trigger('change');
          },
          autocompletechange: '_removeIfInvalid'
        });
      },
      _createShowAllButton: function _createShowAllButton() {
        var input = this.input,
          wasOpen = false;
        $('<a>').attr('tabIndex', -1)
        // .attr('title','Show All Items')
        .tooltip().appendTo(this.wrapper).button({
          icons: {
            primary: 'ui-icon-triangle-1-s'
          },
          text: false
        }).removeClass('ui-corner-all').addClass('custom-combobox-toggle ui-corner-right').on('mousedown', function () {
          wasOpen = input.autocomplete('widget').is(':visible');
        }).on('click', function () {
          input.trigger('focus');

          // Close if already visible
          if (wasOpen) {
            return;
          }

          // Pass empty string as value to search for, displaying all results
          input.autocomplete('search', '');
        });
      },
      _source: function _source(request, response) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
        response(this.element.children('option').map(function () {
          var text = $(this).text();
          if (this.value && (!request.term || matcher.test(text))) return {
            label: text,
            value: text,
            option: this
          };
        }));
      },
      _removeIfInvalid: function _removeIfInvalid(event, ui) {
        // Selected an item, nothing to do
        if (ui.item) {
          return;
        }

        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children('option').each(function () {
          if ($(this).text().toLowerCase() === valueLowerCase) {
            this.selected = valid = true;
            return false;
          }
        });

        // Found a match, nothing to do
        if (valid) {
          return;
        }

        // Remove invalid value
        this.input.val('').attr('title', 'No matches').tooltip('open');
        this.element.val('');
        this._delay(function () {
          this.input.tooltip('close').attr('title', '');
        }, 2500);
        this.input.autocomplete('instance').term = '';
      },
      _destroy: function _destroy() {
        this.wrapper.remove();
        this.element.show();
      }
    });

    // execute function
    $(combobox).combobox();
  });
}
/* harmony default export */ var Combobox = (setupAgencyCombobox);
// CONCATENATED MODULE: ./src/data/agencies.js
var agenciesList = ["All agencies", "New West Police", "Transit Police", "Delta police", "Oak Bay police", "Port Moody police", "Saanich police", "Vancouver police (VPD)", "Victoria police", "Abbotsford police", "B.C. Assessment", "B.C. Ferries", "B.C. Housing", "B.C. Financial Services Authority", "B.C. Hydro", "B.C. Infrastructure Benefits", "B.C. Lottery Corporation (BCLC)", "B.C. Pavilion Corporation", "B.C. Pension Corp.", "B.C. Securities Commission", "B.C. Utilities Commission", "Columbia Basin Trust", "Community Living B.C.", "Columbia Power Corporation", "Destination B.C.", "Forest Enhancement Society of B.C.", "Forestry Innovation Investment", "First Peoples’ Heritage, Language and Culture Council", "ICBC", "Infrastructure B.C.", "Innovate B.C.", "B.C. Council for International Education", "Industry Training Authority of B.C.", "Knowledge Network", "Liquor Distribution Branch", "Legal Services Society", "B.C. Oil and Gas Commission", "Royal B.C. Museum", "Transportation Investment Corporation", "TransLink", "WorkSafe B.C.", "City of Abbotsford", "Anmore", "Belcarra", "Bowen Island", "Lions Bay", "Provincial government", "City of Burnaby", "City of Chilliwack", "City of Coquitlam", "City of Delta", "Langley Township", "City of Langley", "City of Maple Ridge", "Metro Vancouver", "City of Mission", "City of New Westminster", "City of North Vancouver", "District of North Vancouver", "District of Oak Bay", "City of Pitt Meadows", "City of Port Coquitlam", "City of Port Moody", "City of Richmond", "District of Saanich", "City of Surrey", "City of Victoria", "City of Vancouver", "District of West Vancouver", "City of White Rock", "Vancouver Island Health", "Northern Health", "Interior Health", "Vancouver Coastal Health", "Fraser Health", "Providence Health Care", "Provincial Health Services Authority (PHSA)", "Abbotsford school district", "Burnaby school district", "Chilliwack school district", "Coquitlam school district", "Delta school district", "Delta School District", "Mission school district", "New Westminster school board", "North Vancouver school district", "Surrey school district", "Richmond school district", "Maple Ridge/Pitt Meadows school district", "Vancouver school district", "West Vancouver school district", "BCIT", "Camosun College", "Capilano University", "College of New Caledonia", "College of the Rockies", "Coast Mountain College", "Douglas College", "Emily Carr", "Justice Institute of B.C.", "Langara College", "North Island College", "Kwantlen Polytechnic University", "Royal Roads University", "Selkirk College", "Simon Fraser University (SFU)", "Thompson Rivers University", "University of British Columbia (UBC)", "University of Northern B.C.", "University of the Fraser Valley", "University of Victoria", "Vancouver Community College (VCC)", "Vancouver Island University"];
/* harmony default export */ var agencies = (agenciesList);
// CONCATENATED MODULE: ./src/data/params.js
var params = {
  appId: 'app',
  agencyId: 'dp-9',
  // find in the data page of your cloudtables dataset
  clientId: 'pssdb-v11',
  // unique for each dataset
  cloudTableId: 'fd3ab5e8-3064-11ed-a814-6bfc76c2745a',
  // find in embed tab
  // below here probably won’t change 
  tableId: 'cloudtable',
  // DOM element for the table
  cloudTableDomain: 'vs-postmedia.cloudtables.me',
  apiKey: 'kcZqiHL7MiUCi1waLZYN1vkz' // read-only    
};

/* harmony default export */ var data_params = (params);
// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(158);

// EXTERNAL MODULE: ./src/css/postmedia.css
var postmedia = __webpack_require__(159);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(160);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(161);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(162);

// EXTERNAL MODULE: ./src/css/cloudtable.css
var cloudtable = __webpack_require__(163);

// CONCATENATED MODULE: ./src/fonts/Shift-Bold.otf
/* harmony default export */ var Shift_Bold = (__webpack_require__.p + "assets/Shift-Bold.8c454d7e.otf");
// CONCATENATED MODULE: ./src/fonts/Shift-BoldItalic.otf
/* harmony default export */ var Shift_BoldItalic = (__webpack_require__.p + "assets/Shift-BoldItalic.144e2c1f.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-Regular.otf
/* harmony default export */ var BentonSansCond_Regular = (__webpack_require__.p + "assets/BentonSansCond-Regular.4421f875.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-RegItalic.otf
/* harmony default export */ var BentonSansCond_RegItalic = (__webpack_require__.p + "assets/BentonSansCond-RegItalic.06edc58b.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-Bold.otf
/* harmony default export */ var BentonSansCond_Bold = (__webpack_require__.p + "assets/BentonSansCond-Bold.87a66dcd.otf");
// CONCATENATED MODULE: ./src/index.js










// CSS







// FONTS






// JS FUNCTIONS
var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // create dynamic list of options for agency select tag
            createAgencyComboBox();

            // create combobox filter for agencies
            Combobox('#combobox');
            $('#combobox').change(comboboxChangeHandler);

            // load the unfiltered cloudtable
            loadCloudTable('');
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function init() {
    return _ref.apply(this, arguments);
  };
}();
function comboboxChangeHandler(e) {
  // reset container dom element
  $('.cloudtables')[0].textContent = '';

  // reload the table with selected agency filtered
  var filterValue = e.target.value === 'All agencies' ? null : e.target.value;

  // reload table
  loadCloudTable(filterValue);
}
function createAgencyComboBox() {
  var agenciesString = '';
  agencies.forEach(function (d) {
    agenciesString += "<option value='".concat(d, "'>").concat(d, "</option>");
  });
  $('#combobox').append(agenciesString);
}
function loadCloudTable(_x) {
  return _loadCloudTable.apply(this, arguments);
} // KICK *SHT OFF!!!
function _loadCloudTable() {
  _loadCloudTable = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(agency) {
    var conditionsArray, conditions, api, token, script, app;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            conditionsArray = [{
              id: data_params.agencyId,
              value: agency
            }]; // if the filter has been selected, filter for those options, otherwise show everything (null)
            conditions = agency ? conditionsArray : null; // grab the ct api instance
            api = new CloudTablesApi_default.a(data_params.apiKey, {
              clientName: data_params.clientId,
              // Client's name - optional
              domain: data_params.cloudTableDomain,
              // Your CloudTables host
              // secure: false,              // Disallow (true), or allow (false) self-signed certificates   
              // ssl: false,               // Disable https
              conditions: conditions // Use this to filter table
            }); // get a cloudtables api token
            _context2.next = 5;
            return api.token();
          case 5:
            token = _context2.sent;
            // build the script tag for the table
            script = document.createElement('script');
            script.src = "https://".concat(data_params.cloudTableDomain, "/io/loader/").concat(data_params.cloudTableId, "/table/d");
            script.setAttribute('data-token', token);
            script.setAttribute('data-insert', data_params.tableId);
            script.setAttribute('data-clientId', data_params.clientId);

            // insert the script tag to load the table
            app = document.getElementById(data_params.appId).appendChild(script);
          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadCloudTable.apply(this, arguments);
}
init();

/***/ })

},[[164,1,2]]]);