/*!
 * currency.js / currency() v0.0.1
 * Copyright (c) 2013, Pierre Dulac
 *
 * JavaScript library for to convert currency ISO code into a readable currency symbol
 *
 * Freely distributable under the MIT license.
 * Data are initiality taken from the http://github.com/RubyMoney/money project
 *
 */
(function(root, undefined) {

	/* --- Setup --- */

	// Create the local library object, to be exported or referenced globally later
	var lib = {};

	// Current version.
	lib.version = '0.0.1';


	/* --- Exposed settings --- */

	lib.settings = {
		symbols: {
			"AED": "\u062f.\u0625", 
			"AFN": "\u060b", 
			"ALL": "L", 
			"AMD": "\u0564\u0580.", 
			"ANG": "\u0192", 
			"AOA": "Kz", 
			"ARS": "$", 
			"AUD": "$", 
			"AWG": "\u0192", 
			"AZN": null, 
			"BAM": "\u041a\u041c", 
			"BBD": "$", 
			"BDT": "\u09f3", 
			"BGN": "\u043b\u0432", 
			"BHD": "\u0628.\u062f", 
			"BIF": "Fr", 
			"BMD": "$", 
			"BND": "$", 
			"BOB": "Bs.", 
			"BRL": "R$ ", 
			"BSD": "$", 
			"BTC": "\u0243", 
			"BTN": "Nu.", 
			"BWP": "P", 
			"BYR": "Br", 
			"BZD": "$", 
			"CAD": "$", 
			"CDF": "Fr", 
			"CHF": "Fr", 
			"CLF": "UF", 
			"CLP": "$", 
			"CNY": "\u00a5", 
			"COP": "$", 
			"CRC": "\u20a1", 
			"CUC": "$", 
			"CUP": "$", 
			"CVE": "$", 
			"CZK": "K\u010d", 
			"DJF": "Fdj", 
			"DKK": "kr", 
			"DOP": "$", 
			"DZD": "\u062f.\u062c", 
			"EEK": "kr", 
			"EGP": "\u062c.\u0645", 
			"ERN": "Nfk", 
			"ETB": "Br", 
			"EUR": "\u20ac", 
			"FJD": "$", 
			"FKP": "\u00a3", 
			"GBP": "\u00a3", 
			"GEL": "\u10da", 
			"GGP": "\u00a3", 
			"GHS": "\u20b5", 
			"GIP": "\u00a3", 
			"GMD": "D", 
			"GNF": "Fr", 
			"GTQ": "Q", 
			"GYD": "$", 
			"HKD": "$", 
			"HNL": "L", 
			"HRK": "kn", 
			"HTG": "G", 
			"HUF": "Ft", 
			"IDR": "Rp", 
			"ILS": "\u20aa", 
			"IMP": "\u00a3", 
			"INR": "\u20b9", 
			"IQD": "\u0639.\u062f", 
			"IRR": "\ufdfc", 
			"ISK": "kr", 
			"JEP": "\u00a3", 
			"JMD": "$", 
			"JOD": "\u062f.\u0627", 
			"JPY": "\u00a5", 
			"KES": "KSh", 
			"KGS": "som", 
			"KHR": "\u17db", 
			"KMF": "Fr", 
			"KPW": "\u20a9", 
			"KRW": "\u20a9", 
			"KWD": "\u062f.\u0643", 
			"KYD": "$", 
			"KZT": "\u3012", 
			"LAK": "\u20ad", 
			"LBP": "\u0644.\u0644", 
			"LKR": "\u20a8", 
			"LRD": "$", 
			"LSL": "L", 
			"LTL": "Lt", 
			"LVL": "Ls", 
			"LYD": "\u0644.\u062f", 
			"MAD": "\u062f.\u0645.", 
			"MDL": "L", 
			"MGA": "Ar", 
			"MKD": "\u0434\u0435\u043d", 
			"MMK": "K", 
			"MNT": "\u20ae", 
			"MOP": "P", 
			"MRO": "UM", 
			"MTL": "\u20a4", 
			"MUR": "\u20a8", 
			"MVR": "MVR", 
			"MWK": "MK", 
			"MXN": "$", 
			"MYR": "RM", 
			"MZN": "MTn", 
			"NAD": "$", 
			"NGN": "\u20a6", 
			"NIO": "C$", 
			"NOK": "kr", 
			"NPR": "\u20a8", 
			"NZD": "$", 
			"OMR": "\u0631.\u0639.", 
			"PAB": "B/.", 
			"PEN": "S/.", 
			"PGK": "K", 
			"PHP": "\u20b1", 
			"PKR": "\u20a8", 
			"PLN": "z\u0142", 
			"PYG": "\u20b2", 
			"QAR": "\u0631.\u0642", 
			"RON": "L", 
			"RSD": "\u0420\u0421\u0414", 
			"RUB": "\u0440.", 
			"RWF": "FRw", 
			"SAR": "\u0631.\u0633", 
			"SBD": "$", 
			"SCR": "\u20a8", 
			"SDG": "\u00a3", 
			"SEK": "kr", 
			"SGD": "$", 
			"SHP": "\u00a3", 
			"SKK": "Sk", 
			"SLL": "Le", 
			"SOS": "Sh", 
			"SRD": "$", 
			"STD": "Db", 
			"SVC": "\u20a1", 
			"SYP": "\u00a3S", 
			"SZL": "L", 
			"THB": "\u0e3f", 
			"TJS": "\u0405\u041c", 
			"TMM": "m", 
			"TMT": "m", 
			"TND": "\u062f.\u062a", 
			"TOP": "T$", 
			"TRY": "TL", 
			"TTD": "$", 
			"TWD": "$", 
			"TZS": "Sh", 
			"UAH": "\u20b4", 
			"UGX": "USh", 
			"USD": "$", 
			"UYU": "$", 
			"UZS": null, 
			"VEF": "Bs F", 
			"VND": "\u20ab", 
			"VUV": "Vt", 
			"WST": "T", 
			"XAF": "Fr", 
			"XAG": "Ag Oz", 
			"XAU": "Au Oz", 
			"XCD": "$", 
			"XDR": "XDR", 
			"XOF": "Fr", 
			"XPF": "Fr", 
			"YER": "\ufdfc", 
			"ZAR": "R", 
			"ZMK": "ZK", 
			"ZMW": "ZK", 
			"ZWL": "Z$"
		}
	};

	/* --- Symbolization --- */

	// Convert an ISO code into a currency Symbol
	lib.symbolize = function(code) {
		if ( ! (code in lib.settings.symbols))
			return code;  // return the ISO code if there is no match

		return lib.settings.symbols[code];
	};


	/* --- Module Definition --- */

	// Export the currency for CommonJS. If being loaded as an AMD module, define it as such.
	// Otherwise, just add `currency` to the global object
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = lib;
		}
		exports.currency = lib;
	} else if (typeof define === 'function' && define.amd) {
		// Return the library as an AMD module:
		define([], function() {
			return lib;
		});
	} else {
		// Use currency.noConflict to restore `currency` back to its original value before currency.js was loaded.
		// Returns a reference to the library's `currency` object; e.g. `var money = currency.noConflict();`
		lib.noConflict = (function(previousCury) {
			return function() {
				// Reset the value of the root's `currency` variable:
				root.currency = previousCury;
				// Delete the noConflict function:
				lib.noConflict = undefined;
				// Return reference to the library to re-assign it:
				return lib;
			};
		})(root.currency);

		// Declare `currency` on the root (global/window) object:
		root.currency = lib;
	}

	// Root will be `window` in browser or `global` on the server:
}(this));
