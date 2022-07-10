exports.id = "component---src-pages-menu-js";
exports.ids = ["component---src-pages-menu-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./src/components/index.module.css":
/*!*****************************************!*\
  !*** ./src/components/index.module.css ***!
  \*****************************************/
/***/ (() => {

// Exports


/***/ }),

/***/ "./src/components/about/about.module.scss":
/*!************************************************!*\
  !*** ./src/components/about/about.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "img": () => (/* binding */ img),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "section": () => (/* binding */ section),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var list = "about-module--list--9CK-4";
var section = "about-module--section--hMId1";
var wrapper = "about-module--wrapper--zZ59F";
var title = "about-module--title---2HF-";
var text = "about-module--text--Z2xt9";
var img = "about-module--img--kxu7D";


/***/ }),

/***/ "./src/components/customers/customers.module.scss":
/*!********************************************************!*\
  !*** ./src/components/customers/customers.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "img": () => (/* binding */ img),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "section": () => (/* binding */ section),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var section = "customers-module--section--ERsBh";
var list = "customers-module--list--kY-wO";
var wrapper = "customers-module--wrapper--v2fR-";
var img = "customers-module--img--jeXVd";
var text = "customers-module--text--zRdDO";


/***/ }),

/***/ "./src/components/footer/footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/footer/footer.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "link": () => (/* binding */ link)
/* harmony export */ });
// Exports
var link = "footer-module--link--svGkA";


/***/ }),

/***/ "./src/components/gallery/gallery.module.scss":
/*!****************************************************!*\
  !*** ./src/components/gallery/gallery.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gallery": () => (/* binding */ gallery),
/* harmony export */   "image": () => (/* binding */ image)
/* harmony export */ });
// Exports
var gallery = "gallery-module--gallery--gb0c0";
var image = "gallery-module--image--vgxCT";


/***/ }),

/***/ "./src/components/hero/hero.module.scss":
/*!**********************************************!*\
  !*** ./src/components/hero/hero.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "image": () => (/* binding */ image),
/* harmony export */   "menuButton": () => (/* binding */ menuButton),
/* harmony export */   "smallWrapper": () => (/* binding */ smallWrapper),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "textWrapper": () => (/* binding */ textWrapper),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var wrapper = "hero-module--wrapper--Hnhsr";
var image = "hero-module--image--hoAjL";
var smallWrapper = "hero-module--smallWrapper--vqZh4";
var textWrapper = "hero-module--textWrapper--JzTNb";
var title = "hero-module--title--ECmwx";
var text = "hero-module--text--QFaJn";
var menuButton = "hero-module--menuButton--tkbFA";


/***/ }),

/***/ "./src/components/menu/menu.module.scss":
/*!**********************************************!*\
  !*** ./src/components/menu/menu.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "section": () => (/* binding */ section),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "topSection": () => (/* binding */ topSection),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var section = "menu-module--section--fGim3";
var wrapper = "menu-module--wrapper--mCXsB";
var topSection = "menu-module--topSection--Kzxyk";
var title = "menu-module--title--0T5qf";
var text = "menu-module--text--sgM9n";
var button = "menu-module--button--IEtJa";


/***/ }),

/***/ "./src/components/menu/product.module.scss":
/*!*************************************************!*\
  !*** ./src/components/menu/product.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "image": () => (/* binding */ image),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "text": () => (/* binding */ text)
/* harmony export */ });
// Exports
var list = "product-module--list--vewbL";
var image = "product-module--image--qtzrO";
var text = "product-module--text--Accx8";
var button = "product-module--button--xa3Gq";


/***/ }),

/***/ "./src/components/navbar/navbar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/navbar/navbar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
// Exports
var navbar = "navbar-module--navbar--VQF5q";


/***/ }),

/***/ "./src/components/reservation/reservation.module.scss":
/*!************************************************************!*\
  !*** ./src/components/reservation/reservation.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "image": () => (/* binding */ image),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "smallWrapper": () => (/* binding */ smallWrapper),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "textArea": () => (/* binding */ textArea),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var wrapper = "reservation-module--wrapper--08T+0";
var smallWrapper = "reservation-module--smallWrapper--DZ0SO";
var image = "reservation-module--image--y2202";
var title = "reservation-module--title--wtP4v";
var text = "reservation-module--text--RJRhR";
var input = "reservation-module--input--CjbMu";
var textArea = "reservation-module--textArea--nYpuB";
var button = "reservation-module--button--KSrS1";


/***/ }),

/***/ "./src/components/text/text.module.scss":
/*!**********************************************!*\
  !*** ./src/components/text/text.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var wrapper = "text-module--wrapper--LWOhD";
var title = "text-module--title--C5cWo";
var text = "text-module--text--L3+RG";


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ B),
/* harmony export */   "MainImage": () => (/* binding */ z),
/* harmony export */   "Placeholder": () => (/* binding */ O),
/* harmony export */   "StaticImage": () => (/* binding */ V),
/* harmony export */   "generateImageData": () => (/* binding */ f),
/* harmony export */   "getImage": () => (/* binding */ M),
/* harmony export */   "getImageData": () => (/* binding */ x),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ m),
/* harmony export */   "getSrc": () => (/* binding */ S),
/* harmony export */   "getSrcSet": () => (/* binding */ N),
/* harmony export */   "withArtDirection": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





function n() {
  return n = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, n.apply(this, arguments);
}

function o(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var s = [.25, .5, 1, 2],
    l = [750, 1080, 1366, 1920],
    d = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    u = function (e) {
  return console.warn(e);
},
    c = function (e, t) {
  return e - t;
},
    h = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function g(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function p(e) {
  var t = e.layout,
      i = void 0 === t ? "constrained" : t,
      r = e.width,
      o = e.height,
      s = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: c,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !d && (d = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (d || 1.3333333333333333))) : (r || (r = o && d ? o * d : s.width ? s.width : o ? Math.round(o / 1.3333333333333333) : 800), d && !o ? o = Math.round(r / d) : d || (d = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: d,
    layout: i,
    formats: c
  }));
}

function m(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = p(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function f(e) {
  var t,
      a = (e = p(e)).pluginName,
      i = e.sourceMetadata,
      r = e.generateImageSource,
      o = e.layout,
      d = e.fit,
      c = e.options,
      m = e.width,
      f = e.height,
      b = e.filename,
      E = e.reporter,
      k = void 0 === E ? {
    warn: u
  } : E,
      M = e.backgroundColor,
      S = e.placeholderURL;
  if (a || k.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = g(b)) : i = {
    width: m,
    height: f,
    format: (null == (t = i) ? void 0 : t.format) || g(b) || "auto"
  };
  var N = new Set(e.formats);
  (0 === N.size || N.has("auto") || N.has("")) && (N.delete("auto"), N.delete(""), N.add(i.format)), N.has("jpg") && N.has("png") && (k.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), N.delete("jpg" === i.format ? "png" : "jpg"));

  var x = function (e) {
    var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        d = void 0 === o ? {
      warn: u
    } : o,
        c = e.breakpoints,
        h = void 0 === c ? l : c,
        g = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (g.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + g.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === i ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          d = e.reporter,
          c = void 0 === d ? {
        warn: u
      } : d,
          h = a.width / a.height,
          g = v(void 0 === l ? s : l);

      if (i && r) {
        var p = y(a, {
          width: i,
          height: r,
          fit: o
        });
        i = p.width, r = p.height, h = p.aspectRatio;
      }

      i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : 800;
      var m = i;

      if (a.width < i || a.height < r) {
        var f = a.width < i ? "width" : "height";
        c.warn("\nThe requested " + f + ' "' + ("width" === f ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + f + " of " + a[f] + "px. If possible, replace the current image with a larger one."), "width" === f ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
      }

      return {
        sizes: g.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * i);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: h,
        presentationWidth: m,
        presentationHeight: Math.round(m / h),
        unscaledWidth: i
      };
    }(e) : "constrained" === i ? w(e) : "fullWidth" === i ? w(n({
      breakpoints: h
    }, e)) : (d.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
      sizes: [r.width],
      presentationWidth: r.width,
      presentationHeight: r.height,
      aspectRatio: r.width / r.height,
      unscaledWidth: r.width
    });
  }(n({}, e, {
    sourceMetadata: i
  })),
      I = {
    sources: []
  },
      W = e.sizes;

  W || (W = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(x.presentationWidth, o)), N.forEach(function (e) {
    var t = x.sizes.map(function (t) {
      var i = r(b, t, Math.round(t / x.aspectRatio), e, d, c);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      k.warn("[" + a + "] The resolver for image " + b + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === x.unscaledWidth;
      }) || t[0];
      i && (I.fallback = {
        src: i.src,
        srcSet: h(t),
        sizes: W
      });
    } else {
      var n;
      null == (n = I.sources) || n.push({
        srcSet: h(t),
        sizes: W,
        type: "image/" + e
      });
    }
  });
  var R = {
    images: I,
    layout: o,
    backgroundColor: M
  };

  switch (S && (R.placeholder = {
    fallback: S
  }), o) {
    case "fixed":
      R.width = x.presentationWidth, R.height = x.presentationHeight;
      break;

    case "fullWidth":
      R.width = 1, R.height = 1 / x.aspectRatio;
      break;

    case "constrained":
      R.width = e.width || x.presentationWidth || 1, R.height = (R.width || 1) / x.aspectRatio;
  }

  return R;
}

var v = function (e) {
  return Array.from(new Set([1].concat(e))).sort(c);
};

function w(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      l = e.outputPixelDensities,
      d = e.breakpoints,
      u = e.layout,
      h = a.width / a.height,
      g = v(void 0 === l ? s : l);

  if (i && r) {
    var p = y(a, {
      width: i,
      height: r,
      fit: o
    });
    i = p.width, r = p.height, h = p.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / h), i || (i = r * h);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == d ? void 0 : d.length) > 0 ? (t = d.filter(function (e) {
    return e <= a.width;
  })).length < d.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== u || t.includes(i) || t.push(i), {
    sizes: t = t.sort(c),
    aspectRatio: h,
    presentationWidth: m,
    presentationHeight: Math.round(m / h),
    unscaledWidth: i
  };
}

function y(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var b = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    E = ["images", "placeholder"];

function k() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

var M = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImage);
  }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    S = function (e) {
  var t, a, i;
  return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    N = function (e) {
  var t, a, i;
  return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function x(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      s = e.sourceHeight,
      l = e.pluginName,
      u = void 0 === l ? "getImageData" : l,
      c = e.formats,
      h = void 0 === c ? ["auto"] : c,
      g = e.breakpoints,
      p = e.options,
      m = o(e, b);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = d), f(n({}, m, {
    pluginName: u,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}

function I(e, t) {
  var a,
      i,
      r,
      s = e.images,
      l = e.placeholder,
      d = n({}, o(e, E), {
    images: n({}, s, {
      sources: []
    }),
    placeholder: l && n({}, l, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, l.sources)), d;
}

var W,
    R = ["src", "srcSet", "loading", "alt", "shouldLoad"],
    j = ["fallback", "sources", "shouldLoad"],
    _ = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      d = t.shouldLoad,
      u = o(t, R);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, u, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: l
  }));
},
    A = function (t) {
  var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      d = o(t, j),
      u = d.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_, n({}, d, a, {
    sizes: u,
    shouldLoad: l
  }));
  return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: l ? i : void 0,
      "data-srcset": l ? void 0 : i,
      sizes: u
    });
  }), c) : c;
};

_.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, A.displayName = "Picture", A.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};

var T = ["fallback"],
    O = function (t) {
  var a = t.fallback,
      i = o(t, T);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
};

O.displayName = "Placeholder", O.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (W = A.propTypes) ? void 0 : W.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};

var z = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t, {
    shouldLoad: !0
  }))));
};

z.displayName = "MainImage", z.propTypes = A.propTypes;

var L = ["children"],
    q = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
    }
  });
},
    C = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    D = function (a) {
  var i = a.children,
      r = o(a, L);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, null));
},
    P = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    H = ["style", "className"],
    F = function (e) {
  return e.replace(/\n/g, "");
},
    B = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      d = t.image,
      u = t.loading,
      c = void 0 === u ? "lazy" : u,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, P);
  if (!d) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  s && (r = s), g = n({
    objectFit: m,
    objectPosition: f,
    backgroundColor: p
  }, g);

  var w = d.width,
      y = d.height,
      b = d.layout,
      E = d.images,
      M = d.placeholder,
      S = d.backgroundColor,
      N = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return k() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (k() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(w, y, b),
      x = N.style,
      I = N.className,
      W = o(N, H),
      R = {
    fallback: void 0,
    sources: []
  };

  return E.fallback && (R.fallback = n({}, E.fallback, {
    srcSet: E.fallback.srcSet ? F(E.fallback.srcSet) : void 0
  })), E.sources && (R.sources = E.sources.map(function (e) {
    return n({}, e, {
      srcSet: F(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
    style: n({}, x, l, {
      backgroundColor: p
    }),
    className: I + (r ? " " + r : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, {
    layout: b,
    width: w,
    height: y
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, function (e, t, a, i, r, o, s, l) {
    var d = {};
    o && (d.backgroundColor = o, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = o, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), s && (d.objectFit = s), l && (d.objectPosition = l);
    var u = n({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: n({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return k() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(M, 0, b, w, y, S, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({
    "data-gatsby-image-ssr": "",
    className: h
  }, v, function (e, t, a, i, r) {
    return void 0 === r && (r = {}), k() || (r = n({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, r)), n({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: n({}, r, {
        opacity: 0
      })
    });
  }("eager" === c, 0, R, c, g)))));
},
    G = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    V = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, G);
    return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
      image: r
    }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(B),
    U = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    X = new Set(["fixed", "fullWidth", "constrained"]),
    Y = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: U,
  height: U,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !X.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

V.displayName = "StaticImage", V.propTypes = Y;


/***/ }),

/***/ "./src/components/about/about.js":
/*!***************************************!*\
  !*** ./src/components/about/about.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1241681552_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/1241681552.json */ "./public/page-data/sq/d/1241681552.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.module.scss */ "./src/components/about/about.module.scss");
/* harmony import */ var _text_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text */ "./src/components/text/text.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");






const About = ({}) => {
  const data = _public_page_data_sq_d_1241681552_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2__.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Best way to eat healthy food",
    text: "Making a reservation at D\xE9licious restaurant is easy and\r takes just a couple of minutes."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2__.list
  }, data.allAboutJson.nodes.map(product => {
    const {
      src,
      title,
      text
    } = product;
    const pathToImage = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(src);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2__.wrapper,
      key: data.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
      image: pathToImage,
      className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2__.img,
      alt: title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
      className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2__.title
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: _about_module_scss__WEBPACK_IMPORTED_MODULE_2__.text
    }, text))));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/customers/customers.js":
/*!***********************************************!*\
  !*** ./src/components/customers/customers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2538548948_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/2538548948.json */ "./public/page-data/sq/d/2538548948.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customers_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.module.scss */ "./src/components/customers/customers.module.scss");
/* harmony import */ var _text_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text */ "./src/components/text/text.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");






const Customers = ({}) => {
  const data = _public_page_data_sq_d_2538548948_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: _customers_module_scss__WEBPACK_IMPORTED_MODULE_2__.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "What our customer says",
    text: "Making a reservation at D\xE9licious restaurant is easy and takes just a couple of minutes."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: _customers_module_scss__WEBPACK_IMPORTED_MODULE_2__.list
  }, data.allCustomersJson.nodes.map(product => {
    const {
      src,
      title,
      text,
      name
    } = product;
    const pathToImage = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(src);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      className: _customers_module_scss__WEBPACK_IMPORTED_MODULE_2__.wrapper,
      key: data.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
      image: pathToImage,
      className: _customers_module_scss__WEBPACK_IMPORTED_MODULE_2__.img,
      alt: title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
      className: _customers_module_scss__WEBPACK_IMPORTED_MODULE_2__.title
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: _customers_module_scss__WEBPACK_IMPORTED_MODULE_2__.text
    }, text))));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customers);

/***/ }),

/***/ "./src/components/footer/contact.js":
/*!******************************************!*\
  !*** ./src/components/footer/contact.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer/footer.module.scss");



const Contact = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.street
  }, "76/A, Green Lane, Dhanmondi, NYC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.phonenumber
  }, "+10 (78) 738-9083"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.email
  }, "restaurco89@gmail.com"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer/footer.module.scss");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/components/footer/contact.js");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links */ "./src/components/footer/links.js");





const Footer = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_links__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contact__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/footer/links.js":
/*!****************************************!*\
  !*** ./src/components/footer/links.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer/footer.module.scss");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




const Links = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.text
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.link,
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.link,
    to: "/"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.link,
    to: "/"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.link,
    to: "/"
  }, "Contact"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Links);

/***/ }),

/***/ "./src/components/gallery/gallery.js":
/*!*******************************************!*\
  !*** ./src/components/gallery/gallery.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2528878794_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/2528878794.json */ "./public/page-data/sq/d/2528878794.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.module.scss */ "./src/components/gallery/gallery.module.scss");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");





const Customers = ({}) => {
  const data = _public_page_data_sq_d_2528878794_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__.gallery
  }, data.allGalleryJson.nodes.map(product => {
    const {
      src,
      title,
      text,
      name
    } = product;
    const pathToImage = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(src);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage, {
      image: pathToImage,
      className: _gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__.image,
      alt: title
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customers);

/***/ }),

/***/ "./src/components/hero/hero.js":
/*!*************************************!*\
  !*** ./src/components/hero/hero.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.module.scss */ "./src/components/hero/hero.module.scss");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const Hero = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.smallWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.textWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.title
  }, "Meet, Eat & Enjoy the true test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.text
  }, "Making a reservation at D\xE9licious restaurant is easy and takes just a couple of minutes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.menuButton
  }, "Our menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.menuButton
  }, "Watch Video"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_1__.image,
    src: "../../images/herro.webp",
    alt: "wee",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2071023901.json */ "./.cache/caches/gatsby-plugin-image/2071023901.json")
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar */ "./src/components/navbar/navbar.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_3__);






const Layout = ({
  children
}) => {
  const data = _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, children)));
};

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.module.scss */ "./src/components/menu/menu.module.scss");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/components/menu/product.js");




const Menu = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_1__.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_1__.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_1__.topSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_1__.title
  }, "Most Popular Dishes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_1__.text
  }, "Making a reservation at D\xE9licious restaurant is easy and takes just a couple of minutes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_1__.button
  }, "Full-Menu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_product__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/menu/product.js":
/*!****************************************!*\
  !*** ./src/components/menu/product.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_7565456_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/7565456.json */ "./public/page-data/sq/d/7565456.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.module.scss */ "./src/components/menu/product.module.scss");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");





const Product = () => {
  const data = _public_page_data_sq_d_7565456_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: _product_module_scss__WEBPACK_IMPORTED_MODULE_2__.list
  }, data.allMenuJson.nodes.map(product => {
    const {
      src,
      title,
      text
    } = product;
    const pathToImage = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(src);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      key: data.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage, {
      image: pathToImage,
      className: _product_module_scss__WEBPACK_IMPORTED_MODULE_2__.image,
      alt: title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
      className: _product_module_scss__WEBPACK_IMPORTED_MODULE_2__.title
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: _product_module_scss__WEBPACK_IMPORTED_MODULE_2__.text
    }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: _product_module_scss__WEBPACK_IMPORTED_MODULE_2__.button
    }, "Order now"))));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ "./src/components/navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.module.scss */ "./src/components/navbar/navbar.module.scss");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




const Navbar = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: _navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__.navbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/menu"
  }, "Menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact"
  }, "Contact"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/reservation/resevervation.js":
/*!*****************************************************!*\
  !*** ./src/components/reservation/resevervation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.module.scss */ "./src/components/reservation/reservation.module.scss");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const Reservation = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../../images/reservation.jpg",
    alt: "A dinosaur",
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.image,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/428946949.json */ "./.cache/caches/gatsby-plugin-image/428946949.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.smallWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.title
  }, "Book a table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.text
  }, "Making a reservation at D\xE9licious restaurant is easy and takes just a couple of minutes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.input,
    type: "text",
    placeholder: "Full Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.input,
    type: "date",
    placeholder: "Number of Guests"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.input,
    type: "text",
    placeholder: "Number of Guests"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.input,
    type: "text",
    placeholder: "Phone number"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.textArea,
    placeholder: "Message"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _reservation_module_scss__WEBPACK_IMPORTED_MODULE_1__.button
  }, "Send Reservation"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reservation);

/***/ }),

/***/ "./src/components/text/text.js":
/*!*************************************!*\
  !*** ./src/components/text/text.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.module.scss */ "./src/components/text/text.module.scss");



const Text = ({
  text,
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _text_module_scss__WEBPACK_IMPORTED_MODULE_1__.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: _text_module_scss__WEBPACK_IMPORTED_MODULE_1__.title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _text_module_scss__WEBPACK_IMPORTED_MODULE_1__.text
  }, text));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ "./src/components/layout/layout.js");
/* harmony import */ var _components_index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index.module.css */ "./src/components/index.module.css");
/* harmony import */ var _components_index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_hero_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero/hero */ "./src/components/hero/hero.js");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about/about */ "./src/components/about/about.js");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/menu/menu */ "./src/components/menu/menu.js");
/* harmony import */ var _components_reservation_resevervation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/reservation/resevervation */ "./src/components/reservation/resevervation.js");
/* harmony import */ var _components_customers_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/customers/customers */ "./src/components/customers/customers.js");
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/gallery/gallery */ "./src/components/gallery/gallery.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer/footer */ "./src/components/footer/footer.js");












const MenuPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_hero_hero__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_about_about__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_menu_menu__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_reservation_resevervation__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_customers_customers__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_gallery_gallery__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer_footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);

/***/ }),

/***/ "./src/components/layout/layout.css":
/*!******************************************!*\
  !*** ./src/components/layout/layout.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2071023901.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2071023901.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/6dea6070b98dbe60a93d1f5ba586d603/986a6/herro.webp","srcSet":"/static/6dea6070b98dbe60a93d1f5ba586d603/66d02/herro.webp 256w,\\n/static/6dea6070b98dbe60a93d1f5ba586d603/3b527/herro.webp 512w,\\n/static/6dea6070b98dbe60a93d1f5ba586d603/986a6/herro.webp 1024w","sizes":"(min-width: 1024px) 1024px, 100vw"},"sources":[]},"width":1024,"height":1060}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/428946949.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/428946949.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/69c07e6b16847941dd0cf235a2036caf/c175e/reservation.jpg","srcSet":"/static/69c07e6b16847941dd0cf235a2036caf/bbf37/reservation.jpg 172w,\\n/static/69c07e6b16847941dd0cf235a2036caf/4e558/reservation.jpg 343w,\\n/static/69c07e6b16847941dd0cf235a2036caf/c175e/reservation.jpg 686w","sizes":"(min-width: 686px) 686px, 100vw"},"sources":[{"srcSet":"/static/69c07e6b16847941dd0cf235a2036caf/3d614/reservation.webp 172w,\\n/static/69c07e6b16847941dd0cf235a2036caf/130d5/reservation.webp 343w,\\n/static/69c07e6b16847941dd0cf235a2036caf/95210/reservation.webp 686w","type":"image/webp","sizes":"(min-width: 686px) 686px, 100vw"}]},"width":686,"height":600}');

/***/ }),

/***/ "./public/page-data/sq/d/1241681552.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1241681552.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allAboutJson":{"nodes":[{"text":"Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.","title":"Healthy Meal","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8e8e8","images":{"fallback":{"src":"/static/eb9cc211f9ab988325d6d7e018f060ba/a3e51/services1.png","srcSet":"/static/eb9cc211f9ab988325d6d7e018f060ba/933ac/services1.png 25w,\\n/static/eb9cc211f9ab988325d6d7e018f060ba/d3aa0/services1.png 49w,\\n/static/eb9cc211f9ab988325d6d7e018f060ba/a3e51/services1.png 98w","sizes":"(min-width: 98px) 98px, 100vw"},"sources":[{"srcSet":"/static/eb9cc211f9ab988325d6d7e018f060ba/04db5/services1.webp 25w,\\n/static/eb9cc211f9ab988325d6d7e018f060ba/2207a/services1.webp 49w,\\n/static/eb9cc211f9ab988325d6d7e018f060ba/5aaad/services1.webp 98w","type":"image/webp","sizes":"(min-width: 98px) 98px, 100vw"}]},"width":98,"height":90.00000000000001}}}},{"text":"Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.","title":"Fast Food","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8e8e8","images":{"fallback":{"src":"/static/de586e1c0f90fe569d41818644af1c25/fc64d/services2.png","srcSet":"/static/de586e1c0f90fe569d41818644af1c25/0a575/services2.png 27w,\\n/static/de586e1c0f90fe569d41818644af1c25/77554/services2.png 54w,\\n/static/de586e1c0f90fe569d41818644af1c25/fc64d/services2.png 107w","sizes":"(min-width: 107px) 107px, 100vw"},"sources":[{"srcSet":"/static/de586e1c0f90fe569d41818644af1c25/9bd4d/services2.webp 27w,\\n/static/de586e1c0f90fe569d41818644af1c25/a6c1c/services2.webp 54w,\\n/static/de586e1c0f90fe569d41818644af1c25/d02ac/services2.webp 107w","type":"image/webp","sizes":"(min-width: 107px) 107px, 100vw"}]},"width":107,"height":90}}}},{"text":"Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.","title":"Delicious Coffe","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8e8e8","images":{"fallback":{"src":"/static/da1d74972e2c59a3fc930b30a22a7aa6/70b7e/services3.png","srcSet":"/static/da1d74972e2c59a3fc930b30a22a7aa6/ddeb4/services3.png 26w,\\n/static/da1d74972e2c59a3fc930b30a22a7aa6/7ccc9/services3.png 52w,\\n/static/da1d74972e2c59a3fc930b30a22a7aa6/70b7e/services3.png 104w","sizes":"(min-width: 104px) 104px, 100vw"},"sources":[{"srcSet":"/static/da1d74972e2c59a3fc930b30a22a7aa6/2c00b/services3.webp 26w,\\n/static/da1d74972e2c59a3fc930b30a22a7aa6/96329/services3.webp 52w,\\n/static/da1d74972e2c59a3fc930b30a22a7aa6/1480c/services3.webp 104w","type":"image/webp","sizes":"(min-width: 104px) 104px, 100vw"}]},"width":104,"height":90.00000000000001}}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2528878794.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2528878794.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allGalleryJson":{"nodes":[{"src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#b8c8d8","images":{"fallback":{"src":"/static/adf019726d83afd8c62b11601c330f93/c42f4/gallery1.jpg","srcSet":"/static/adf019726d83afd8c62b11601c330f93/c0fcb/gallery1.jpg 120w,\\n/static/adf019726d83afd8c62b11601c330f93/6a0b8/gallery1.jpg 240w,\\n/static/adf019726d83afd8c62b11601c330f93/c42f4/gallery1.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/adf019726d83afd8c62b11601c330f93/da7b5/gallery1.webp 120w,\\n/static/adf019726d83afd8c62b11601c330f93/bbd8d/gallery1.webp 240w,\\n/static/adf019726d83afd8c62b11601c330f93/e0ffb/gallery1.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":370}}}},{"src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#98a8c8","images":{"fallback":{"src":"/static/4cf56ed6d41927f89a2420355e358ea4/c42f4/gallery2.jpg","srcSet":"/static/4cf56ed6d41927f89a2420355e358ea4/c0fcb/gallery2.jpg 120w,\\n/static/4cf56ed6d41927f89a2420355e358ea4/6a0b8/gallery2.jpg 240w,\\n/static/4cf56ed6d41927f89a2420355e358ea4/c42f4/gallery2.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/4cf56ed6d41927f89a2420355e358ea4/da7b5/gallery2.webp 120w,\\n/static/4cf56ed6d41927f89a2420355e358ea4/bbd8d/gallery2.webp 240w,\\n/static/4cf56ed6d41927f89a2420355e358ea4/e0ffb/gallery2.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":370}}}},{"src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/dfb690bc0e4d5c9941fec8a36c2ca2ff/c42f4/gallery3.jpg","srcSet":"/static/dfb690bc0e4d5c9941fec8a36c2ca2ff/c0fcb/gallery3.jpg 120w,\\n/static/dfb690bc0e4d5c9941fec8a36c2ca2ff/6a0b8/gallery3.jpg 240w,\\n/static/dfb690bc0e4d5c9941fec8a36c2ca2ff/c42f4/gallery3.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/dfb690bc0e4d5c9941fec8a36c2ca2ff/da7b5/gallery3.webp 120w,\\n/static/dfb690bc0e4d5c9941fec8a36c2ca2ff/bbd8d/gallery3.webp 240w,\\n/static/dfb690bc0e4d5c9941fec8a36c2ca2ff/e0ffb/gallery3.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":370}}}},{"src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/395dc107e88368ae9e7da5a6bf9c3ddd/c42f4/gallery4.jpg","srcSet":"/static/395dc107e88368ae9e7da5a6bf9c3ddd/c0fcb/gallery4.jpg 120w,\\n/static/395dc107e88368ae9e7da5a6bf9c3ddd/6a0b8/gallery4.jpg 240w,\\n/static/395dc107e88368ae9e7da5a6bf9c3ddd/c42f4/gallery4.jpg 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/395dc107e88368ae9e7da5a6bf9c3ddd/da7b5/gallery4.webp 120w,\\n/static/395dc107e88368ae9e7da5a6bf9c3ddd/bbd8d/gallery4.webp 240w,\\n/static/395dc107e88368ae9e7da5a6bf9c3ddd/e0ffb/gallery4.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":370}}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2538548948.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2538548948.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allCustomersJson":{"nodes":[{"text":"Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.","name":"Ania","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/22708c9b94487635256c6665ae3117da/28510/food.webp","srcSet":"/static/22708c9b94487635256c6665ae3117da/789ca/food.webp 51w,\\n/static/22708c9b94487635256c6665ae3117da/e6c54/food.webp 101w,\\n/static/22708c9b94487635256c6665ae3117da/28510/food.webp 202w","sizes":"(min-width: 202px) 202px, 100vw"},"sources":[]},"width":202,"height":202}}}},{"text":"Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.","name":"Robert","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/22708c9b94487635256c6665ae3117da/28510/food.webp","srcSet":"/static/22708c9b94487635256c6665ae3117da/789ca/food.webp 51w,\\n/static/22708c9b94487635256c6665ae3117da/e6c54/food.webp 101w,\\n/static/22708c9b94487635256c6665ae3117da/28510/food.webp 202w","sizes":"(min-width: 202px) 202px, 100vw"},"sources":[]},"width":202,"height":202}}}},{"text":"Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.","name":"Simon","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/22708c9b94487635256c6665ae3117da/28510/food.webp","srcSet":"/static/22708c9b94487635256c6665ae3117da/789ca/food.webp 51w,\\n/static/22708c9b94487635256c6665ae3117da/e6c54/food.webp 101w,\\n/static/22708c9b94487635256c6665ae3117da/28510/food.webp 202w","sizes":"(min-width: 202px) 202px, 100vw"},"sources":[]},"width":202,"height":202}}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/7565456.json":
/*!********************************************!*\
  !*** ./public/page-data/sq/d/7565456.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allMenuJson":{"nodes":[{"title":"Pancake","text":"Making a reservation at Délicious restaurant is easy","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f47d22b52a20aa44cd8cd1206575560b/28510/pancake.webp","srcSet":"/static/f47d22b52a20aa44cd8cd1206575560b/789ca/pancake.webp 51w,\\n/static/f47d22b52a20aa44cd8cd1206575560b/e6c54/pancake.webp 101w,\\n/static/f47d22b52a20aa44cd8cd1206575560b/28510/pancake.webp 202w","sizes":"(min-width: 202px) 202px, 100vw"},"sources":[]},"width":202,"height":202}}}},{"title":"Hamburger","text":"Making a reservation at Délicious restaurant is easy","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/ce0b1cf25f33848889cccf92545784a1/28510/menu.webp","srcSet":"/static/ce0b1cf25f33848889cccf92545784a1/789ca/menu.webp 51w,\\n/static/ce0b1cf25f33848889cccf92545784a1/e6c54/menu.webp 101w,\\n/static/ce0b1cf25f33848889cccf92545784a1/28510/menu.webp 202w","sizes":"(min-width: 202px) 202px, 100vw"},"sources":[]},"width":202,"height":202}}}},{"title":"Tuna steak","text":"Making a reservation at Délicious restaurant is easy","src":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/ce0b1cf25f33848889cccf92545784a1/28510/menu.webp","srcSet":"/static/ce0b1cf25f33848889cccf92545784a1/789ca/menu.webp 51w,\\n/static/ce0b1cf25f33848889cccf92545784a1/e6c54/menu.webp 101w,\\n/static/ce0b1cf25f33848889cccf92545784a1/28510/menu.webp 202w","sizes":"(min-width: 202px) 202px, 100vw"},"sources":[]},"width":202,"height":202}}}}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-menu-js.js.map