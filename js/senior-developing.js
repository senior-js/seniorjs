// All right reserved for SeniorJs.com
// copywrite 2018
// SeniorJs Library V-0.1.2

// Opera 8.0+
var browserIsOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var browserIsFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]"
var browserIsSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Internet Explorer 6-11
var browserIsIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var browserIsEdge = !browserIsIE && !!window.StyleMedia;
// Chrome 1+
var browserIsChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var browserIsBlink = (browserIsChrome || browserIsOpera) && !!window.CSS;

// ----------------------- Animation Functions --------------------
(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function () {
				callback(currTime + timeToCall);
			},
			timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
		clearTimeout(id);
	};
}());
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
	hidden = "mozHidden";
	visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}
//function handleVisibilityChange() {
//	if (document.hidden) {
//		windowHidden=true;
//		hideTime=window.performance.now();
//	} else  {
//		windowHidden=false;
//		var timeDiff=(window.performance.now()-hideTime)/1000;
//		console.log('Page invisible for ',timeDiff,' seconds, jump ahead.');
////		tick(timeDiff);
////		render();
//		window.requestAnimationFrame(animate);
//	}
//}
//document.addEventListener("visibilitychange", handleVisibilityChange, false);









//	getTheStyle(this,'display')
function getTheStyle(el,prop){
	return window.getComputedStyle(el,null).getPropertyValue(prop);
}
//	ptrVisibility( _this, _this.getAttribute('data-ptr') );
function ptrVisibility(el, field){
	if ( field === 'visible' ) {
		el.setAttribute('data-ptr','invisible');
	}
	else if ( field === 'invisible' ) {
		el.setAttribute('data-ptr','visible');
	} else {
		el.setAttribute('data-ptr','visible');
	}
	return el.getAttribute('data-ptr');
}
// --------- isThisMobileFunc() ----------
function isThisMobileFunc() {
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	){
		return true;
	}
	else {
		return false;
	}
}
var isThisMobile = isThisMobileFunc();


//----------------------------- START: Added to Lib ------------------------------
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "seniorJs requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

	// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	"use strict";

	var seniorJs = function(el) {
		if (typeof el != 'undefined') {
			return (new newSeniorJs(el));
		}
		else {
			return [];
		}
	};
	function newSeniorJs(el){
		this.el = selectorJs(el);
	}

	// Added main methods for working on DOM Elements
	seniorJs.fn = newSeniorJs.prototype;
	seniorJs.fn.ok = function() {
		var el = this.el;

		return el;
	}




	//	$('.el')[0].hasClass('p123')
	seniorJs.fn.hasClass = function(className) {
		var _this = this.el;
		if (_this.length <= 0)
			return false;
		for (var i=0; i<_this.length; i++) {
			var lnE = _this[i].classList,
				lnELength = lnE.length;
			for (var j=0; j<lnELength; j++) {
				if (lnE[j] == className) {
					return true;
				}
			}
		}
		return false;
	}
	//	$('.el')[0].addClass('p123')
	seniorJs.fn.addClass = function(className) {
		var _this = this.el;
		if (_this.length <= 0)
			return seniorJs(_this);
		for (var i=0; i<_this.length; i++) {
			if (!(_this[i].hasClass(className)))
				_this[i].classList.add(className);
		}
		return seniorJs(_this);
	}
	//	$('.el')[0].removeClass('p123')
	seniorJs.fn.removeClass = function(className) {
		var _this = this.el;
		if (_this.length <= 0)
			return false;
		for (var i=0; i<_this.length; i++) {
			if (_this[i].hasClass(className))
				_this[i].classList.remove(className);
		}
		return seniorJs(_this);
	}
	//	$('.el')[0].toggleClass('p123')
	seniorJs.fn.toggleClass = function(className) {
		var _this = this.el;
		if (_this.length <= 0)
			return false;
		for (var i=0; i<_this.length; i++) {
			if (!(_this[i].hasClass(className)))
				_this[i].classList.add(className);
			else
				_this[i].classList.remove(className);
		}
		return seniorJs(_this);
	}
	//	$('.el')[0].closestByClass('inputsDivOut')
	seniorJs.fn.closestByClass = function(className) {
		var _this = this.el,
			_thisArr = [];
		if (_this.length <= 0)
			return false;
		for (var i=0; i<this.length; i++) {
			while (!(_this[i].parentNode.hasClass(className))) {
				_this[i] = _this[i].parentNode;
				if (_this[i].parentNode.nodeType !== 1) break;
			}
			if (_this[i].parentNode.nodeType === 1) {
				_thisArr.push( _this[i].parentNode );
			}
		}
		return seniorJs(_thisArr);
	}
	//	$('.el')[0].closestByID('IDName')
	seniorJs.fn.closestByID = function(IDName) {
		var _this = this.el,
			_thisArr = [];
		if (_this.length <= 0)
			return false;
		for (var i=0; i<this.length; i++) {
			while (!(_this[i].parentNode.id === IDName)) {
				_this[i] = _this[i].parentNode;
				if (_this[i].parentNode.nodeType !== 1) break;
			}
			if (_this[i].parentNode.nodeType === 1) {
				_thisArr.push( _this[i].parentNode );
			}
		}
		return seniorJs(_thisArr);
	}
	//	$('.el')[0].find('inputsDivOut')
	seniorJs.fn.find = function (el) {
		var elements = this.el;
		var elements2 = [];
		for (var i = 0; i < elements.length; i++) {
			if ( (typeof elements[i] === 'object') && (elements[i].nodeType === 1) ) {
				var subI = elements[i].querySelectorAll(el);
				for (var j = 0; j < subI.length; j++) {
					elements2.push(subI[j]);
				}
			}
		}
		return seniorJs(elements2);
	}
	seniorJs.fn.findByClass = function(className) {
		var _this = this.el,
			thisChild = [];
		if (_this == undefined)
			return [];
		for (var i=0; i<this.length; i++) {
			for (var j = 0; j < _this[i].children.length; j++) {
				if (_this[i].children[j].hasClass(className))
					thisChild.push(_this[i].children[j])
			}
		}
		return seniorJs(thisChild);
	}
	//	$('.draggable').seniorDraggable({ handle: $('.handle'), wrapper: $('#wrapper'), onUpdate: callback, onComplete: onComplete });
	seniorJs.fn.seniorDraggable = function(args) {
		var _this;
		if (this.el.nodeType === 1) {
			_this = this.el;
		}
		else if (Array.isArray(this.el)) {
			_this = this.el[0];
		}
		var	handle = selectorJs(args.handle)[0],
			wrapper = selectorJs(args.wrapper)[0],
			onUpdate = (args.onUpdate != null)? args.onUpdate: false,
			onComplete = (args.onComplete != null)? args.onComplete: false,
			thisW = parseInt( getTheStyle(_this,'width') )/2,
			thisH = parseInt( getTheStyle(_this,'height') )/2,
			wrapperW = parseInt( getTheStyle(wrapper,'width') ),
			wrapperH = parseInt( getTheStyle(wrapper,'height') ),
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX,
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY,
			XY = {};
		window.addEventListener('resize', function(){
			setTimeout(function(){
				wrapperW = parseInt( getTheStyle(wrapper,'width') );
				wrapperH = parseInt( getTheStyle(wrapper,'height') );
				wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
				wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
			}, 100);
			setTimeout(function(){
				wrapperW = parseInt( getTheStyle(wrapper,'width') );
				wrapperH = parseInt( getTheStyle(wrapper,'height') );
				wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
				wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
			}, 1000);
		});
		var dragSweep = {
			x: 0,
			y:0
		};
		if (isThisMobile) {
			var dragMobileFunc = function(e){
				wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
				wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
				XY = isInBox(_this, e.touches[0], thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop);
				if (XY.boolX)
					_this.style.right = 'auto';
				_this.style.left = XY.X + 'px';
				if (XY.boolY)
					_this.style.bottom = 'auto';
				_this.style.top = XY.Y + 'px';
				if (onUpdate != false)
					onUpdate(XY);
			}
			function touchStart(e) {
				e.preventDefault();
				dragSweep = {
					x: e.clientX,
					y: e.clientY
				};
				//		wrapper.style.position = 'relative';
				_this.style.position = 'absolute';
				_this.setAttribute('data-dragging', 'true');
				_this.addEventListener('touchmove', dragMobileFunc, true);
			}
			function touchEnd(e) {
				_this.removeEventListener('touchmove', dragMobileFunc, true);
				if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
				_this.setAttribute('data-dragging', 'false');
			}
			function touchCancel(e) {
				_this.removeEventListener('touchmove', dragMobileFunc, true);
				if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
				_this.setAttribute('data-dragging', 'false');
			}

			handle.addEventListener("touchstart", touchStart, true);
			handle.addEventListener("touchend", touchEnd, false);
			handle.addEventListener("touchcancel", touchCancel, false);
		}
		else {
			var dragFunc = function (e) {
				wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
				wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
				XY = isInBox(_this, e, thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop);
				if (XY.boolX) _this.style.right = 'auto';
				_this.style.left = XY.X + 'px';
				if (XY.boolY) _this.style.bottom = 'auto';
				_this.style.top = XY.Y + 'px';
				if (onUpdate != false) onUpdate(XY);
			}
			handle.addEventListener('mousedown', function (e) {
				e.preventDefault();
				dragSweep = {
					x: e.clientX, y: e.clientY
				};
				//		wrapper.style.position = 'relative';
				_this.style.position = 'absolute';
				_this.setAttribute('data-dragging', 'true');
				window.addEventListener('mousemove', dragFunc, true);
			}, true);
			window.addEventListener('mouseup', function (e) {
				window.removeEventListener('mousemove', dragFunc, true);
				if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
				_this.setAttribute('data-dragging', 'false');
			}, true);
		}
	}
	//	$('#slider').seniorSlider({ bar: $('#slider .paBar'), handle: $('#slider .Handle'), Update: function (O, val) { console.log(O, val); }, Complete: function (O, val) { console.log(O, val); } });
	seniorJs.fn.seniorSlider = function(args) {
		var _this = this.el[0],
			Update = args.Update,
			Complete = args.Complete,
			paBar = selectorJs(args.bar)[0],
			paHandle = selectorJs(args.handle)[0],
			Range = paBar.querySelector('.Range'),
			ShowValue = _this.querySelector('.ShowValue'),
			min = parseInt(_this.getAttribute('data-min')),
			max = parseInt(_this.getAttribute('data-max'));

		var paHandleW = parseInt( getTheStyle(paHandle,'width') )/2,
			thisW = parseInt( getTheStyle(_this,'width') ) - (2 * paHandleW),
			opacity = ( _this.getAttribute('data-val') != null && _this.getAttribute('data-val') != '' )? parseInt( _this.getAttribute('data-val') ) : min;
		Range.style.width = thisW * (opacity-min)/(max-min) + paHandleW + 'px';
		paHandle.style.left = thisW * (opacity-min)/(max-min) + 'px';
		if (isThisMobile) {
			_this.addEventListener("touchstart", function () {
				ShowValue.fadeIn(0.3);
			}, true);
			$('html, body').addEventListener("touchend", function () {
				ShowValue.fadeOut(0.2);
			}, false);
			$('html, body').addEventListener("touchcancel", function () {
				ShowValue.fadeOut(0.2);
			}, false);
		}
		else {
			seniorJs(_this).on('mousedown', function () {
				seniorJs(ShowValue).fadeIn(0.3);
			});
			seniorJs('html, body').on('mouseup', function () {
				seniorJs(ShowValue).fadeOut(0.2);
			});
		}
		seniorJs(paHandle).seniorDraggable({ handle: args.handle, wrapper: this.el,
			onUpdate: function(O){
				// O = { X:'number', Y:'number', boolX:'number', boolY:'number' }
				Range.style.width = O.X + paHandleW + 'px';
				var valTrans = parseInt( (O.X/thisW) * (max-min) + min );
				_this.setAttribute('data-val', valTrans);
				ShowValue.innerHTML = valTrans + '%';
				ShowValue.setAttribute('data-value', valTrans);
				Update(O, valTrans);
			}, onComplete: function(O){
				// O = { X:'number', Y:'number', boolX:'number', boolY:'number' }
				Range.style.width = O.X + paHandleW + 'px';
				var valTrans = parseInt( (O.X/thisW) * (max-min) + min );
				_this.setAttribute('data-val', valTrans);
				ShowValue.innerHTML = valTrans + '%';
				ShowValue.setAttribute('data-value', valTrans);
				Complete(O, valTrans);
			}
		});
	}

	//	-------------------- FADE animates --------------------------------
	//	--------- Choose animation here: https://greensock.com/docs/Easing --------------
	//	$('.el')[0].fadeIn(0.5,Power1.easeInOut);
	seniorJs.fn.fadeIn = function(time, Easing, callback) {
		var _this = this.el,
			Easing = (Easing != null)? Easing : 'Linear.easeNone';
		if (_this.length <= 0)
			return seniorJs(_this);
		for (var i=0; i<_this.length; i++) {
			var thisAttr = _this[i].getAttribute('data-ptr');

			_this[i].style.removeProperty('height');
			_this[i].style.removeProperty('overflow');
			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this[i].seniorAttrs == null) {
				paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
				paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
				if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
					Height = _this[i].offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this[i].offsetHeight;
				}
				if (getTheStyle(_this[i], 'display') == 'none') {
					display = 'block';
				}
				else {
					display = getTheStyle(_this[i], 'display');
				}

				_this[i].seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this[i].seniorAttrs;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				display = seniorAttrs.display;
				Height = seniorAttrs.height;
			}
			_this[i].seniorAttrs.animation = 'fadeIn';
			if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
				_this[i].style.height = 'auto';
			}
			_this[i].style.paddingTop = paddingT + 'px';
			_this[i].style.paddingBottom = paddingB + 'px';
			_this[i].style.marginTop = marginTop + 'px';
			_this[i].style.marginBottom = marginBottom + 'px';

			if (_this[i].getAttribute('data-ptr') == null) {
				if (getTheStyle(_this[i],'display') == 'none' || getTheStyle(_this[i],'opacity') == 0 || getTheStyle(_this[i],'height') == 0) {
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.opacity = 0;
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					seniorJs(_this[i]).animation(
						{opacity: 1},
						time,
						function(e){
							if (getTheStyle(e, 'box-sizing') === 'content-box') {
								e.seniorAttrs.height = e.offsetHeight - paddingT - paddingB;
							}
							else {
								e.seniorAttrs.height = e.offsetHeight;
							}
							if (callback != null) {
								callback(e);
							}
						}
					);
				}
				else {
					_this[i].setAttribute('data-ptr','visible');
					continue;
				}
			}
			else if ( thisAttr === 'invisible' ) {
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.opacity = 0;
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				seniorJs(_this[i]).animation(
					{opacity: 1},
					time,
					function(e){
						if (getTheStyle(e, 'box-sizing') === 'content-box') {
							e.seniorAttrs.height = e.offsetHeight - paddingT - paddingB;
						}
						else {
							e.seniorAttrs.height = e.offsetHeight;
						}
						if (callback != null) {
							callback(e);
						}
					}
				);
			}
			_this[i].setAttribute('data-ptr','visible');
		}
		return seniorJs(_this);
	}
	//	$('.el')[0].fadeOut(0.5,Power1.easeInOut);
	seniorJs.fn.fadeOut = function(time, Easing, callback) {
		var _this = this.el,
			Easing = (Easing != null)? Easing : 'Linear.easeNone';
		if (_this.length <= 0)
			return seniorJs(_this);
		var fadeOutBool = false;
		for (var i=0; i<_this.length; i++) {
			var thisAttr = _this[i].getAttribute('data-ptr');
			if (_this[i].seniorAttrs == null) {
				fadeOutBool = false;
			}
			else {
				if (_this[i].seniorAttrs.animation == 'slideUp') {
					fadeOutBool = true;
				}
			}
			if ((thisAttr !== 'invisible') || fadeOutBool) {

				_this[i].style.removeProperty('height');
				_this[i].style.removeProperty('overflow');
				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}
					if (getTheStyle(_this[i], 'display') == 'none') {
						display = 'block';
					}
					else {
						display = getTheStyle(_this[i], 'display');
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					display = seniorAttrs.display;
					Height = seniorAttrs.height;
				}
				_this[i].seniorAttrs.animation = 'fadeOut';

				seniorJs(_this[i]).animation(
					{opacity: 0},
					time,
					function(e){
						e.style.display = 'none';
						if (callback != null)
							callback(e);
					}
				);
			}
			_this[i].setAttribute('data-ptr', 'invisible');
		}
		return seniorJs(_this);
	}
	//	$('.el')[0].fadeToggle(0.5,Power1.easeInOut);
	seniorJs.fn.fadeToggle = function(time, Easing, callback) {
		var _this = this.el,
			Easing = (Easing != null)? Easing : 'Linear.easeNone';
		if (_this.length <= 0)
			return seniorJs(_this);

		for (var i=0; i<_this.length; i++) {
			var ifNullAttr = _this[i].getAttribute('data-ptr'),
				thisAttr = ptrVisibility(_this[i],ifNullAttr);

			_this[i].style.removeProperty('height');
			_this[i].style.removeProperty('overflow');
			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this[i].seniorAttrs == null) {
				paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
				paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
				if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
					Height = _this[i].offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this[i].offsetHeight;
				}
				if (getTheStyle(_this[i], 'display') == 'none') {
					display = 'block';
				}
				else {
					display = getTheStyle(_this[i], 'display');
				}

				_this[i].seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this[i].seniorAttrs;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				display = seniorAttrs.display;
				Height = seniorAttrs.height;
			}
			if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
				_this[i].style.height = 'auto';
			}
			_this[i].style.paddingTop = paddingT + 'px';
			_this[i].style.paddingBottom = paddingB + 'px';
			_this[i].style.marginTop = marginTop + 'px';
			_this[i].style.marginBottom = marginBottom + 'px';

			if (ifNullAttr == null) {
				if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
					_this[i].seniorAttrs.animation = 'fadeIn';
					_this[i].setAttribute('data-ptr', 'visible');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.opacity = 0;
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
						_this[i].style.height = 'auto';
					}

					seniorJs(_this[i]).animation(
						{opacity: 1},
						time,
						function(e){
							if (getTheStyle(e, 'box-sizing') === 'content-box') {
								e.seniorAttrs.height = e.offsetHeight - paddingT - paddingB;
							}
							else {
								e.seniorAttrs.height = e.offsetHeight;
							}
							if (callback != null) {
								callback(e);
							}
						}
					);
				}
				else {
					_this[i].seniorAttrs.animation = 'fadeOut';
					seniorJs(_this[i]).animation(
						{opacity: 0},
						time,
						function(e){
							e.style.display = 'none';
							if (callback != null)
								callback(e);
						}
					);
					_this[i].setAttribute('data-ptr', 'invisible');
				}
			}
			else if (thisAttr === 'visible') {
				var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;
				if (_this[i].getAttribute('data-ptr') == null) {
					if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
						_this[i].seniorAttrs.animation = 'fadeIn';
						_this[i].setAttribute('data-ptr', 'visible');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.opacity = 0;
							_this[i].style.removeProperty('display');
							if (getTheStyle(_this[i],'display') == 'none') {
								_this[i].style.display = 'block';
							}
						}
						if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
							_this[i].style.height = 'auto';
						}

						seniorJs(_this[i]).animation(
							{opacity: 1},
							time,
							function(e){
								if (getTheStyle(e, 'box-sizing') === 'content-box') {
									e.seniorAttrs.height = e.offsetHeight - paddingT - paddingB;
								}
								else {
									e.seniorAttrs.height = e.offsetHeight;
								}
								if (callback != null) {
									callback(e);
								}
							}
						);
					}
					else {
						_this[i].seniorAttrs.animation = 'fadeOut';

						seniorJs(_this[i]).animation(
							{opacity: 0},
							time,
							function(e){
								e.style.display = 'none';
								if (callback != null)
									callback(e);
							}
						);
						_this[i].setAttribute('data-ptr', 'invisible');
					}
				}
				else if ( (ifNullAttr === 'invisible') || (getTheStyle(_this[i], 'display') == 'none') ) {
					_this[i].seniorAttrs.animation = 'fadeIn';
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.opacity = 0;
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
						_this[i].style.height = 'auto';
					}

					seniorJs(_this[i]).animation(
						{opacity: 1},
						time,
						function(e){
							if (getTheStyle(e, 'box-sizing') === 'content-box') {
								e.seniorAttrs.height = e.offsetHeight - paddingT - paddingB;
							}
							else {
								e.seniorAttrs.height = e.offsetHeight;
							}
							if (callback != null) {
								callback(e);
							}
						}
					);
				}
			}
			else if (thisAttr === 'invisible') {
				_this[i].seniorAttrs.animation = 'fadeOut';

				seniorJs(_this[i]).animation(
					{opacity: 0},
					time,
					function(e){
						e.style.display = 'none';
						if (callback != null)
							callback(e);
					}
				);
			}
		}
		return seniorJs(_this);
	}

	//	-------------------- SLIDE animate --------------------------------
	//	$('.el')[0].slideDown(0.3,Power1.easeInOut);
	seniorJs.fn.slideDown = function(time, Easing, callback) {
		var _this = this.el;
		time = (time != null)? time : 0;
		Easing = (Easing != null)? Easing : 'Linear.easeNone';

		for (var i=0; i<_this.length; i++) {
			var thisAttr = _this[i].getAttribute('data-ptr');
			var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;
			if (_this[i].getAttribute('data-ptr') == null) {
				if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
					if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
						_this[i].style.height = 'auto';
					}
					if (_this[i].seniorAttrs != null) {
						if ( (_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut') ) {
							_this[i].style.removeProperty('opacity');
						}
					}
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}

					var paddingT = 0,
						paddingB = 0,
						marginTop = 0,
						marginBottom = 0,
						Height = 0,
						display = '';
					if (_this[i].seniorAttrs == null) {
						display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
						_this[i].style.display = display;
						paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
						paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
						marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
						marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
						borderTop = parseInt(getTheStyle(_this[i], 'border-top'));
						borderBottom = parseInt(getTheStyle(_this[i], 'border-bottom'));
						if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
							Height = _this[i].offsetHeight - paddingT - paddingB;
						}
						else {
							Height = _this[i].offsetHeight;
						}

						_this[i].seniorAttrs = {
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
							display: display,
							height: Height,
						}
					}
					else {
						var seniorAttrs = _this[i].seniorAttrs;
						display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
						_this[i].style.display = display;
						paddingT = seniorAttrs.paddingTop;
						paddingB = seniorAttrs.paddingBottom;
						marginTop = seniorAttrs.marginTop;
						marginBottom = seniorAttrs.marginBottom;
						Height = seniorAttrs.height;
					}
					if (_this[i].seniorAttrs.animation == 'fadeOut') {
						_this[i].style.removeProperty('opacity');
						if (getTheStyle(_this[i], 'opacity') == 0) {
							_this[i].style.opacity = 1;
						}
						_this[i].style.height = 0;
						_this[i].style.paddingTop = 0;
						_this[i].style.paddingBottom = 0;
						_this[i].style.marginTop = 0;
						_this[i].style.marginBottom = 0;
					}
					_this[i].seniorAttrs.animation = 'slideDown';

					var thisHeight = 0,
						thisPaddingT = 0,
						thisPaddingB = 0,
						thisMarginB = 0,
						thisMarginT = 0;
					if (!firstDisplayNone) {
						thisHeight = getTheStyle(_this[i], 'height');
						thisPaddingT = getTheStyle(_this[i], 'padding-top');
						thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
						thisMarginT = getTheStyle(_this[i], 'margin-top');
						thisMarginB = getTheStyle(_this[i], 'margin-bottom');
					}
					_this[i].style.overflow = 'hidden';
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					Height = (Height == 0)? 'auto': Height;

					seniorJs(_this[i]).css({height: thisHeight, paddingTop: thisPaddingT, paddingBottom: thisPaddingB, marginTop: thisMarginT, marginBottom: thisMarginB});
					seniorJs(_this[i]).animation({
							height: Height,
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
						},
						time,
						function(e){
							e.style.removeProperty('overflow');
							e.style.height = 'auto';
							if (callback != null) callback(e);
						}
					);
				}
				else {
					_this[i].setAttribute('data-ptr', 'visible');
					continue;
				}
			}
			else if ( (thisAttr === 'invisible') || (getTheStyle(_this[i], 'display') == 'none') ) {
				if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
					_this[i].style.height = 'auto';
				}
				if (_this[i].seniorAttrs != null) {
					if ( (_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut') ) {
						_this[i].style.removeProperty('opacity');
					}
				}
				if (getTheStyle(_this[i], 'opacity') == 0) {
					_this[i].style.opacity = 1;
				}

				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
					_this[i].style.display = display;
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
					_this[i].style.display = display;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					Height = seniorAttrs.height;
				}
				if (_this[i].seniorAttrs.animation == 'fadeOut') {
					_this[i].style.removeProperty('opacity');
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}
					_this[i].style.height = 0;
					_this[i].style.paddingTop = 0;
					_this[i].style.paddingBottom = 0;
					_this[i].style.marginTop = 0;
					_this[i].style.marginBottom = 0;
				}
				_this[i].seniorAttrs.animation = 'slideDown';

				var thisHeight = 0,
					thisPaddingT = 0,
					thisPaddingB = 0,
					thisMarginB = 0,
					thisMarginT = 0;
				if (!firstDisplayNone) {
					thisHeight = getTheStyle(_this[i], 'height');
					thisPaddingT = getTheStyle(_this[i], 'padding-top');
					thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
					thisMarginT = getTheStyle(_this[i], 'margin-top');
					thisMarginB = getTheStyle(_this[i], 'margin-bottom');
				}
				_this[i].style.overflow = 'hidden';
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				Height = (Height == 0)? 'auto': Height;

				seniorJs(_this[i]).css({height: thisHeight, paddingTop: thisPaddingT, paddingBottom: thisPaddingB, marginTop: thisMarginT, marginBottom: thisMarginB});
				seniorJs(_this[i]).animation({
						height: Height,
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
					},
					time,
					function(e){
						e.style.removeProperty('overflow');
						e.style.height = 'auto';
						if (callback != null) callback(e);
					}
				);
			}
			_this[i].setAttribute('data-ptr', 'visible');
		}
		return seniorJs(_this);
	}
	//	$('.el')[0].slideUp(0.3,Power1.easeInOut);
	seniorJs.fn.slideUp = function(time, Easing, callback) {
		var _this = this.el;
		time = (time != null)? time : 0;
		Easing = (Easing != null)? Easing : 'Linear.easeNone';

		for (var i=0; i<_this.length; i++) {
			if (_this[i].seniorAttrs != null) {
				if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
					_this[i].style.removeProperty('opacity');
				}
			}
			if (getTheStyle(_this[i], 'opacity') == 0) {
				_this[i].style.opacity = 1;
			}
			var thisAttr = _this[i].getAttribute('data-ptr');
			if ( (thisAttr !== 'invisible') && (getTheStyle(_this[i], 'display') != 'none') ) {
				_this[i].style.overflow = 'hidden';
				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}
					if (getTheStyle(_this[i], 'display') == 'none') {
						display = 'block';
					}
					else {
						display = getTheStyle(_this[i], 'display');
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					display = seniorAttrs.display;
					Height = seniorAttrs.height;
				}
				_this[i].seniorAttrs.animation = 'slideUp';
				//			_this[i].style.removeProperty('height');

				seniorJs(_this[i]).animation({
						height: 0,
						paddingTop: 0,
						paddingBottom: 0,
						marginTop: 0,
						marginBottom: 0,
					},
					time,
					function(e){
						e.style.display = 'none';
						e.style.removeProperty('overflow');
						if (callback != null) callback(e);
					}
				);
			}
			else {
				if (callback != null) callback(_this[i]);
			}
			_this[i].setAttribute('data-ptr', 'invisible');
		}
		return seniorJs(_this);
	}
	//	$('.el')[0].slideToggle(0.3,Power1.easeInOut);
	seniorJs.fn.slideToggle = function(time, Easing, callback ) {
		var _this = this.el,
			Easing = (Easing != null)? Easing : 'Linear.easeNone';

		for (var i=0; i<_this.length; i++) {
			var ifNullAttr = _this[i].getAttribute('data-ptr'),
				thisAttr = ptrVisibility(_this[i],ifNullAttr);
			if (ifNullAttr == null) {
				if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
					var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;

					if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
						_this[i].style.height = 'auto';
					}
					if (_this[i].seniorAttrs != null) {
						if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
							_this[i].style.removeProperty('opacity');
						}
					}
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}

					var paddingT = 0,
						paddingB = 0,
						marginTop = 0,
						marginBottom = 0,
						Height = 0,
						display = '';
					if (_this[i].seniorAttrs == null) {
						display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
						_this[i].style.display = display;
						paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
						paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
						marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
						marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
						if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
							Height = _this[i].offsetHeight - paddingT - paddingB;
						}
						else {
							Height = _this[i].offsetHeight;
						}

						_this[i].seniorAttrs = {
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
							display: display,
							height: Height,
						}
					}
					else {
						var seniorAttrs = _this[i].seniorAttrs;
						display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
						_this[i].style.display = display;
						paddingT = seniorAttrs.paddingTop;
						paddingB = seniorAttrs.paddingBottom;
						marginTop = seniorAttrs.marginTop;
						marginBottom = seniorAttrs.marginBottom;
						Height = seniorAttrs.height;
					}
					if (_this[i].seniorAttrs.animation == 'fadeOut') {
						_this[i].style.removeProperty('opacity');
						if (getTheStyle(_this[i], 'opacity') == 0) {
							_this[i].style.opacity = 1;
						}
						_this[i].style.height = 0;
						_this[i].style.paddingTop = 0;
						_this[i].style.paddingBottom = 0;
						_this[i].style.marginTop = 0;
						_this[i].style.marginBottom = 0;
					}
					_this[i].seniorAttrs.animation = 'slideDown';

					var thisHeight = 0,
						thisPaddingT = 0,
						thisPaddingB = 0,
						thisMarginB = 0,
						thisMarginT = 0;
					if (!firstDisplayNone) {
						thisHeight = getTheStyle(_this[i], 'height');
						thisPaddingT = getTheStyle(_this[i], 'padding-top');
						thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
						thisMarginT = getTheStyle(_this[i], 'margin-top');
						thisMarginB = getTheStyle(_this[i], 'margin-bottom');
					}
					_this[i].style.overflow = 'hidden';
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					Height = (Height == 0)? 'auto': Height;
					_this[i].setAttribute('data-ptr', 'visible');

					seniorJs(_this[i]).css({height: thisHeight, paddingTop: thisPaddingT, paddingBottom: thisPaddingB, marginTop: thisMarginT, marginBottom: thisMarginB});
					seniorJs(_this[i]).animation({
							height: Height,
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
						},
						time,
						function(e){
							e.style.removeProperty('overflow');
							e.style.height = 'auto';
							if (callback != null) callback(e);
						}
					);
				}
				else {
					if (_this[i].seniorAttrs != null) {
						if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
							_this[i].style.removeProperty('opacity');
						}
					}
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}
					_this[i].style.overflow = 'hidden';
					var paddingT = 0,
						paddingB = 0,
						marginTop = 0,
						marginBottom = 0,
						Height = 0,
						display = '';
					if (_this[i].seniorAttrs == null) {
						paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
						paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
						marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
						marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
						if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
							Height = _this[i].offsetHeight - paddingT - paddingB;
						}
						else {
							Height = _this[i].offsetHeight;
						}
						if (getTheStyle(_this[i], 'display') == 'none') {
							display = 'block';
						}
						else {
							display = getTheStyle(_this[i], 'display');
						}

						_this[i].seniorAttrs = {
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
							display: display,
							height: Height,
						}
					}
					else {
						var seniorAttrs = _this[i].seniorAttrs;
						paddingT = seniorAttrs.paddingTop;
						paddingB = seniorAttrs.paddingBottom;
						marginTop = seniorAttrs.marginTop;
						marginBottom = seniorAttrs.marginBottom;
						display = seniorAttrs.display;
						Height = seniorAttrs.height;
					}
					_this[i].seniorAttrs.animation = 'slideUp';
					//				_this[i].style.removeProperty('height');

					seniorJs(_this[i]).animation({
							height: 0,
							paddingTop: 0,
							paddingBottom: 0,
							marginTop: 0,
							marginBottom: 0,
						},
						time,
						function(e){
							e.style.display = 'none';
							e.style.removeProperty('overflow');
							if (callback != null) callback(e);
						}
					);
					_this[i].setAttribute('data-ptr', 'invisible');
				}
			}
			else if (thisAttr === 'visible') {
				var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;
				if (_this[i].getAttribute('data-ptr') == null) {
					if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
						if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
							_this[i].style.height = 'auto';
						}
						if (_this[i].seniorAttrs != null) {
							if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
								_this[i].style.removeProperty('opacity');
							}
						}
						if (getTheStyle(_this[i], 'opacity') == 0) {
							_this[i].style.opacity = 1;
						}

						var paddingT = 0,
							paddingB = 0,
							marginTop = 0,
							marginBottom = 0,
							Height = 0,
							display = '';
						if (_this[i].seniorAttrs == null) {
							display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
							_this[i].style.display = display;
							paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
							paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
							marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
							marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
							if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
								Height = _this[i].offsetHeight - paddingT - paddingB;
							}
							else {
								Height = _this[i].offsetHeight;
							}

							_this[i].seniorAttrs = {
								paddingTop: paddingT,
								paddingBottom: paddingB,
								marginTop: marginTop,
								marginBottom: marginBottom,
								display: display,
								height: Height,
							}
						}
						else {
							var seniorAttrs = _this[i].seniorAttrs;
							display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
							_this[i].style.display = display;
							paddingT = seniorAttrs.paddingTop;
							paddingB = seniorAttrs.paddingBottom;
							marginTop = seniorAttrs.marginTop;
							marginBottom = seniorAttrs.marginBottom;
							Height = seniorAttrs.height;
						}
						if (_this[i].seniorAttrs.animation == 'fadeOut') {
							_this[i].style.removeProperty('opacity');
							if (getTheStyle(_this[i], 'opacity') == 0) {
								_this[i].style.opacity = 1;
							}
							_this[i].style.height = 0;
							_this[i].style.paddingTop = 0;
							_this[i].style.paddingBottom = 0;
							_this[i].style.marginTop = 0;
							_this[i].style.marginBottom = 0;
						}
						_this[i].seniorAttrs.animation = 'slideDown';

						var thisHeight = 0,
							thisPaddingT = 0,
							thisPaddingB = 0,
							thisMarginB = 0,
							thisMarginT = 0;
						if (!firstDisplayNone) {
							thisHeight = getTheStyle(_this[i], 'height');
							thisPaddingT = getTheStyle(_this[i], 'padding-top');
							thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
							thisMarginT = getTheStyle(_this[i], 'margin-top');
							thisMarginB = getTheStyle(_this[i], 'margin-bottom');
						}
						_this[i].style.overflow = 'hidden';
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.removeProperty('display');
							if (getTheStyle(_this[i],'display') == 'none') {
								_this[i].style.display = 'block';
							}
						}
						Height = (Height == 0)? 'auto': Height;

						seniorJs(_this[i]).css({height: thisHeight, paddingTop: thisPaddingT, paddingBottom: thisPaddingB, marginTop: thisMarginT, marginBottom: thisMarginB});
						seniorJs(_this[i]).animation({
								height: Height,
								paddingTop: paddingT,
								paddingBottom: paddingB,
								marginTop: marginTop,
								marginBottom: marginBottom,
							},
							time,
							function(e){
								e.style.removeProperty('overflow');
								e.style.height = 'auto';
								if (callback != null) callback(e);
							}
						);
					}
					else {
						_this[i].setAttribute('data-ptr', 'visible');
						continue;
					}
				}
				else if ( (ifNullAttr === 'invisible') || (getTheStyle(_this[i], 'display') == 'none') ) {
					if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
						_this[i].style.height = 'auto';
					}
					if (_this[i].seniorAttrs != null) {
						if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
							_this[i].style.removeProperty('opacity');
						}
					}
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}

					var paddingT = 0,
						paddingB = 0,
						marginTop = 0,
						marginBottom = 0,
						Height = 0,
						display = '';
					if (_this[i].seniorAttrs == null) {
						display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
						_this[i].style.display = display;
						paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
						paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
						marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
						marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
						if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
							Height = _this[i].offsetHeight - paddingT - paddingB;
						}
						else {
							Height = _this[i].offsetHeight;
						}

						_this[i].seniorAttrs = {
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
							display: display,
							height: Height,
						}
					}
					else {
						var seniorAttrs = _this[i].seniorAttrs;
						display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
						_this[i].style.display = display;
						paddingT = seniorAttrs.paddingTop;
						paddingB = seniorAttrs.paddingBottom;
						marginTop = seniorAttrs.marginTop;
						marginBottom = seniorAttrs.marginBottom;
						Height = seniorAttrs.height;
					}
					if (_this[i].seniorAttrs.animation == 'fadeOut') {
						_this[i].style.removeProperty('opacity');
						if (getTheStyle(_this[i], 'opacity') == 0) {
							_this[i].style.opacity = 1;
						}
						_this[i].style.height = 0;
						_this[i].style.paddingTop = 0;
						_this[i].style.paddingBottom = 0;
						_this[i].style.marginTop = 0;
						_this[i].style.marginBottom = 0;
					}
					_this[i].seniorAttrs.animation = 'slideDown';

					var thisHeight = 0,
						thisPaddingT = 0,
						thisPaddingB = 0,
						thisMarginB = 0,
						thisMarginT = 0;
					if (!firstDisplayNone) {
						thisHeight = getTheStyle(_this[i], 'height');
						thisPaddingT = getTheStyle(_this[i], 'padding-top');
						thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
						thisMarginT = getTheStyle(_this[i], 'margin-top');
						thisMarginB = getTheStyle(_this[i], 'margin-bottom');
					}
					_this[i].style.overflow = 'hidden';
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					Height = (Height == 0)? 'auto': Height;

					seniorJs(_this[i]).css({height: thisHeight, paddingTop: thisPaddingT, paddingBottom: thisPaddingB, marginTop: thisMarginT, marginBottom: thisMarginB});
					seniorJs(_this[i]).animation({
							height: Height,
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
						},
						time,
						function(e){
							e.style.removeProperty('overflow');
							e.style.height = 'auto';
							if (callback != null) callback(e);
						}
					);
				}
			}
			else if (thisAttr === 'invisible') {
				if (_this[i].seniorAttrs != null) {
					if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
						_this[i].style.removeProperty('opacity');
					}
				}
				if (getTheStyle(_this[i], 'opacity') == 0) {
					_this[i].style.opacity = 1;
				}
				_this[i].style.overflow = 'hidden';
				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}
					if (getTheStyle(_this[i], 'display') == 'none') {
						display = 'block';
					}
					else {
						display = getTheStyle(_this[i], 'display');
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					display = seniorAttrs.display;
					Height = seniorAttrs.height;
				}
				_this[i].seniorAttrs.animation = 'slideUp';
				//			_this[i].style.removeProperty('height');

				seniorJs(_this[i]).animation({
						height: 0,
						paddingTop: 0,
						paddingBottom: 0,
						marginTop: 0,
						marginBottom: 0,
					},
					time,
					function(e){
						e.style.display = 'none';
						e.style.removeProperty('overflow');
						if (callback != null) callback(e);
					}
				);
			}
		}
		return seniorJs(_this);
	}
	//	Append or Prepend el to another DOM Element
	//	outerEl.prepend(innerEl);
	seniorJs.fn.prepend = function(el) {
		var _this = this.el;
		if (_this.length >= 0)
			for (var i=0; i<_this.length; i++)
				_this[i].insertBefore(el, _this[i].childNodes[0]);
		return seniorJs(_this);
	}
	//	outerEl.append(innerEl);
	seniorJs.fn.append = function(el) {
		var _this = this.el;
		if (_this.length >= 0)
			for (var i=0; i<_this.length; i++)
				_this[i].appendChild(el);
		return seniorJs(_this);
	}
	//	$('.el').text('String');
	seniorJs.fn.text = function(theString) {
		var _this = this.el;
		if ( (theString === null) || (typeof theString === 'undefined') ) {
			if (_this.length >= 0)
				for (var i=0; i<_this.length; i++)
					return seniorJs(_this)[i].innerText;
			return seniorJs(_this);
		}
		else {
			if (_this.length >= 0)
				for (var i=0; i<_this.length; i++)
					_this[i].innerText = theString;
			return seniorJs(_this);
		}
	}
	//	$('.el').html('String: (text and html tags)');
	seniorJs.fn.html = function(theString) {
		var _this = this.el;
		if ( (theString === null) || (typeof theString === 'undefined') ) {
			if (_this.length >= 0)
				for (var i=0; i<_this.length; i++)
					return seniorJs(_this)[i].innerHTML;
			return seniorJs(_this);
		}
		else {
			if (_this.length >= 0)
				for (var i=0; i<_this.length; i++)
					_this[i].innerHTML = theString;
			return seniorJs(_this);
		}
	}
	//	$('.el').html('String: (text and html tags)');
	seniorJs.fn.val = function(theString) {
		var _this = this.el;
		if ( (theString === null) || (typeof theString === 'undefined') ) {
			if (_this.length >= 0)
				for (var i=0; i<_this.length; i++)
					return seniorJs(_this)[i].value;
			return seniorJs(_this);
		}
		else {
			if (_this.length >= 0)
				for (var i=0; i<_this.length; i++)
					_this[i].value = theString;
			return seniorJs(_this);
		}
	}
	// var p = document.createElement("p"); p.innerHTML = 'OK'; p.clone(true)
	seniorJs.fn.clone = function(deep) {
		var _this = this.el;
		if (_this.length >= 0)
			for (var i=0; i<_this.length; i++)
				return seniorJs(_this)[i].cloneNode(deep);
		return seniorJs(_this);
	}

	//	$('#ts1').on('click', function(e){ do this;});
	seniorJs.fn.on = function(event,callback) {
		var _this = this.el;
		if (_this.length >= 0)
			for (var i=0; i<_this.length; i++)
				_this[i].addEventListener(event, callback, _this[i]);
		return seniorJs(_this);
	}
	// $(SELECTOR).one('click', function(e){ do this;});
	seniorJs.fn.one = function(event, callback) {
		var _this = this.el;
		var tempFunc = function(e) {
			callback(e);
			e.target.removeEventListener(event, tempFunc);
		}
		if (_this.length > 0) {
			for (var i = 0; i < _this.length; i++) {
				_this[i].addEventListener(event, tempFunc, _this[i]);
			}
		}
	}
	//	$('#ts1').hover(enterCallback, outCallback);
	seniorJs.fn.hover = function(enter,out) {
		var _this = this.el;
		var enter = (enter != null)? enter : false,
			out = (out != null)? out : false;
		if (_this.length >= 0)
			for (var i=0; i<_this.length; i++) {
				if (enter !== false)
					_this[i].addEventListener("mouseenter", enter);
				if (out !== false)
					_this[i].addEventListener("mouseleave", out);
			}
	}

	//	$('.el')[0].css({'padding-right': '25px'});
	seniorJs.fn.css = function(styles, callback) {
		var _this = this.el;
		if (_this.length <= 0)
			return seniorJs(_this);

		if ( _this.nodeType === 1 && !(Array.isArray(_this)) ) {
			for (var x in styles) {
				_this.style[x] = styles[x];
			}
		}
		else {
			for (var i=0; i<_this.length; i++) {
				for (var x in styles) {
					_this[i].style[x] = styles[x];
				}
			}
		}

		if (callback != null) callback(_this);
		return seniorJs(_this);
	}
	//----------- Aanimations -----------------------------------------
	seniorJs.fn.animation = function(properties, duration, callback) {
		var elements = this.el;
		if (elements.length <= 0)
			return false;
		var end = properties;
		if ( elements.nodeType === 1 && !(Array.isArray(elements)) ) {
			var _this = elements;

			var start = {};
			for (var x in end) {
				var temX = x.split('');
				for (var j=0; j<temX.length; j++) {
					if (temX[j] !== temX[j].toLowerCase()) {
						temX.splice(j, 1, '-' + temX[j].toLowerCase());
					}
				}
				temX = temX.join('');
				start[x] = (typeof end[x] === 'number')? parseFloat(getTheStyle(_this, temX)): getTheStyle(_this, temX);
				if (!$.isNumber(parseFloat(start[x]))) {
					start[x] = 0;
				}
			}
			new defineAnimate(_this, duration, start, end, callback);
		}
		else {
			for (var i=0; i<elements.length; i++) {
				var _this = elements[i];

				var start = {};
				for (var x in end) {
					var temX = x.split('');
					for (var j=0; j<temX.length; j++) {
						if (temX[j] !== temX[j].toLowerCase()) {
							temX.splice(j, 1, '-' + temX[j].toLowerCase());
						}
					}
					temX = temX.join('');
					start[x] = (typeof end[x] === 'number')? parseFloat(getTheStyle(_this, temX)): getTheStyle(_this, temX);
					if (!$.isNumber(parseFloat(start[x]))) {
						start[x] = 0;
					}
				}
				new defineAnimate(_this, duration, start, end, callback);
			}
		}
		return seniorJs(elements);
	}





	//	isNumber(659)
	seniorJs.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	//	setCookie('dragged', 'true');
	seniorJs.setCookie = function(cName, cValue, exDays) {
		var d = new Date();
		d.setTime(d.getTime() + (exDays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		if (exDays != null) {
			document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
		}
		else {
			document.cookie = cName + "=" + cValue + ";path=/";
		}
	}
	//	deleteCookie('dragged');
	seniorJs.deleteCookie = function(cName) {
		document.cookie = cName + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/';
	}
	//	getCookie('dragged')
	seniorJs.getCookie = function(cName) {
		var name = cName + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	//	$.ajax('POST', URL, data[Object], callback);
	seniorJs.ajax = function(Method, URL, data, callback){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open(Method, URL);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');
		xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xmlhttp.send(JSON.stringify(data));
		xmlhttp.onreadystatechange = function() {
			var statusSuccess = xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304;
			var status = statusSuccess? 'success': 'unsuccess';
			if (xmlhttp.readyState == 4 && statusSuccess == true) {
				var response = JSON.parse(xmlhttp.responseText);
				callback(response, status);
			}
			return;
		}
	};

	window.seniorJs = window.$ = seniorJs;
	return seniorJs;
});
//----------------------------- END: Added to Lib   ------------------------------

// selectorJs start
var selectorJs = function (el) {
	if (el.nodeType === 1) return el;
	if (Array.isArray(el)) return el;
	var elements = document.querySelectorAll(el);
	var result = [];
	for( var x in elements) {
		if (elements[x].nodeType === 1) {
			result.push(elements[x]);
		}
	}
	//	var result = Array.from(elements);
	return result;
}










//	_this.isInBox(e, thisW, thisH, wrapperW, wrapperH, wrapper.offsetLeft, wrapper.offsetTop);
var isInBox = function(el, e, thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop) {
	var O = {
		X: 0,
		Y: 0,
		boolX: false,
		boolY: false,
	};

	if ((e.clientX - thisW) < wrapperLeft) {
		O.boolX = true;
		O.X = 0;
	}
	else if ((e.clientX + thisW) > (wrapperLeft + wrapperW)) {
		O.boolX = true;
		O.X = wrapperW - 2*thisW;
	}
	else {
		O.boolX = true;
		O.X = e.clientX - wrapperLeft - thisW;
	}

	if ((e.clientY - thisH) < wrapperTop) {
		O.boolY = true;
		O.Y = 0;
	}
	else if ((e.clientY + thisH) > (wrapperTop + wrapperH)) {
		O.boolY = true;
		O.Y = wrapperH - 2*thisH;
	}
	else {
		O.boolY = true;
		O.Y = e.clientY - wrapperTop - thisH;
	}

	return O;
}
//	body.mobileTouch();
HTMLElement.prototype.mobileTouch = function(wrapID, touchLRUnit) {
	var _this = this,
		touchSweep = [],
		sweepsMobile = [],
		sweepsMobileX = [],
		sweepsRightIndex = [],
		sweepsLeftIndex = [],
		sweepsRightValue = [],
		sweepsLeftValue = [];
	var sweepFuncTouch = function(e){
		if (e.touches.length <= 1) {
			if ((touchSweep[0].x - e.touches[0].clientX) > touchLRUnit) {
				goLRNoAnimate(wrapID, 1, 2);
				sweepsMobileX[0] = touchSweep[0];
				touchSweep[0] = {
					x: parseInt(e.touches[0].clientX), y: parseInt(e.touches[0].clientY)
				}
				sweepsMobile[0] = 'sweepRight';
			}
			else if ((touchSweep[0].x - e.touches[0].clientX) < -touchLRUnit) {
				goLRNoAnimate(wrapID, -1, 2);
				sweepsMobileX[0] = touchSweep[0];
				touchSweep[0] = {
					x: parseInt(e.touches[0].clientX), y: parseInt(e.touches[0].clientY)
				}
				sweepsMobile[0] = 'sweepLeft';
			}
		}
		else {
			for(var i=0; i<e.touches.length; i++) {
				if ((touchSweep[i].x - e.touches[i].clientX) > touchLRUnit) {
					//					console.log('sweepRight[ ', i, ' ] : ', touchSweep[i].x - e.touches[i].clientX);
					sweepsMobileX[i] = touchSweep[i];
					touchSweep[i] = {
						x: parseInt(e.touches[i].clientX), y: parseInt(e.touches[i].clientY)
					}
					sweepsMobile[i] = 'sweepRight';
				}
				else if ((touchSweep[i].x - e.touches[i].clientX) < -touchLRUnit) {
					//					console.log('sweepLeft[ ', i, ' ] : ', touchSweep[i].x - e.touches[i].clientX);
					sweepsMobileX[i] = touchSweep[i];
					touchSweep[i] = {
						x: parseInt(e.touches[i].clientX), y: parseInt(e.touches[i].clientY)
					}
					sweepsMobile[i] = 'sweepLeft';
				}
			}
			if ( (sweepsMobile.indexOf("sweepLeft") >= 0) && (sweepsMobile.indexOf("sweepRight") >= 0) ) {
				sweepsMobile.forEach(function(element, index) {
					if (element == 'sweepRight') sweepsRightIndex.push(sweepsMobileX[index].x);
					else if (element == 'sweepLeft') sweepsLeftIndex.push(sweepsMobileX[index].x);
				});
				sweepsRightValue[0] = min2(sweepsRightIndex);
				sweepsRightValue[1] = max2(sweepsRightIndex);
				sweepsLeftValue[0] = min2(sweepsLeftIndex);
				sweepsLeftValue[1] = max2(sweepsLeftIndex);

				//				document.getElementById('ForPA').value = ( (sweepsRightValue[0] < sweepsLeftValue[0]) || (sweepsRightValue[1] < sweepsLeftValue[1]) ) + ' , ' + ( (sweepsRightValue[0] > sweepsLeftValue[0]) || (sweepsRightValue[1] > sweepsLeftValue[1]) ) + ' , ' + e.touches.length;
				if ( (sweepsRightValue[0] < sweepsLeftValue[0]) || (sweepsRightValue[1] < sweepsLeftValue[1]) ) {
					if (clickAllow)
						zoomInFunc(wrapID);
					//					console.log('Zoomed In');
					_this.removeEventListener('touchmove', sweepFuncTouch, true);
				}
				else if ( (sweepsRightValue[0] > sweepsLeftValue[0]) || (sweepsRightValue[1] > sweepsLeftValue[1]) ) {
					if (clickAllow)
						zoomOutFunc(wrapID);
					//					console.log('Zoomed Out');
					_this.removeEventListener('touchmove', sweepFuncTouch, true);
				} else {
					//					console.log(sweepsMobile);
				}
			} else {
				// Do Nothing
			}
		}
	}
	function touchStart(e) {
		for(var i=0; i<e.touches.length; i++) {
			touchSweep[i] = {
				x : parseInt(e.touches[i].clientX),
				y : parseInt(e.touches[i].clientY)
			}
		}
		//		console.log('Touch Started!');
		_this.addEventListener('touchmove', sweepFuncTouch, true);
		//		------------------ for Multi Touch ----------------
		if (e.touches.length > 1) {
			//			console.log('Multi touched');
			//			console.log(touchSweep);
		}
	}
	function touchEnd(e) {
		_this.removeEventListener('touchmove', sweepFuncTouch, true);
		touchSweep = [];
		sweepsMobile = [];
		sweepsMobileX = [];
		sweepsRightValue = [];
		sweepsLeftValue = [];
		sweepsRightIndex = [];
		sweepsLeftIndex = [];
		//		console.log('touch Ended');
	}
	function touchCancel(e) {
		_this.removeEventListener('touchmove', sweepFuncTouch, true);
		touchSweep = [];
		sweepsMobile = [];
		sweepsMobileX = [];
		sweepsRightValue = [];
		sweepsLeftValue = [];
		sweepsRightIndex = [];
		sweepsLeftIndex = [];
		//		console.log('Touch Canceled');
	}

	_this.addEventListener("touchstart", touchStart, true);
	_this.addEventListener("touchend", touchEnd, false);
	_this.addEventListener("touchcancel", touchCancel, false);
}
//	body.mouseTouch();
HTMLElement.prototype.mouseTouch = function(wrapID, mouseLRUnit) {
	var _this = this,
		sweep = {
			x: 0,
			y:0
		};
	sweepFunc = function(e){
		if ( (sweep.x - e.clientX) > mouseLRUnit ) {
			//			console.log('Sweep Right');
			goLRNoAnimate(wrapID, 1, 12);
			sweep = {
				x: e.clientX, y: e.clientY
			}
		}
		else if ( (sweep.x - e.clientX) < -mouseLRUnit ) {
			//			console.log('Sweep Left');
			goLRNoAnimate(wrapID, -1, 12);
			sweep = {
				x: e.clientX, y: e.clientY
			}
		}
	}
	_this.onmousedown = function(e){
		sweep = {
			x: e.clientX,
			y: e.clientY
		};
		this.addEventListener('mousemove', sweepFunc);
	}
	_this.onmouseup = function(e){
		this.removeEventListener('mousemove', sweepFunc);
	}
	_this.onmouseenter = function(e){
		if (e.buttons != 1) {
			this.removeEventListener('mousemove', sweepFunc);
		}
	}
}
// var p = document.createElement("p"); p.innerHTML = 'OK'; p.clone(true)
HTMLElement.prototype.clone = function(deep) {
	return this.cloneNode(deep);
}
//	----------------------- Process Array ---------------------
//	arrayName.max2();
var max2 = function (el) {
	return Math.max.apply(Math, el.map(function (o) {
		return o;
	}))
};
//	arrayName.min2();
var min2 = function (el) {
	return Math.min.apply(Math, el.map(function (o) {
		return o;
	}))
};

//----------- animations -----------------------------------------
var mainDefineAnimate = 'mainDefineAnimate';
var mainDefineAnimateCount = 1;

function defineAnimate(_this, duration, start, end, callback) {
	//	------------------------------------------------------
	if (_this.defineanimate != null && _this.defineanimate != '') {
		//		--------- Starting a new animation ---------------
		cancelAnimationFrame(window[_this.defineanimate]);
		_this.defineanimate = '';
	}
	//	---------------------------------------------------------
	if (browserIsIE || (browserIsSafari && (navigator.userAgent.indexOf('Windows')) ) ) {
		var startedAt = Date.now();
		setTimeout(function() {
			updateTarget(0, _this, start, end);
		}, 5);
		setTimeout(function() {
			update(startedAt, _this, duration, start, end, callback);
		}, 10);
	}
	else {
		Promise.resolve( Date.now() )
		.then(function(value) {
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					updateTarget(0, _this, start, end);
					resolve(value);
				}, 1);
			});
		})
		.then(function(value) {
			setTimeout(function() {
				update(value, _this, duration, start, end, callback);
			}, 1);
		});
	}
}

function update(startedAt, _this, duration, start, end, callback) {
	var elapsedTime = Date.now() - startedAt;
	var playback = elapsedTime / duration;
	if (elapsedTime >= duration) {
//		------------- Animation comleted ------------------------
		cancelAnimationFrame(window[_this.defineanimate]);
		_this.defineanimate = '';

		if (!(playback > 0 && playback < 1)) {
			updateTarget(1, _this, start, end);
			callback(_this);
		}
	}
	else {
		// playback is a value between 0 and 1
		// being 0 the start of the animation and 1 its end

		updateTarget(playback, _this, start, end);

		if (playback > 0 && playback < 1) {
			// Queue the next frame
			var tempFunc = function(){
				update(startedAt, _this, duration, start, end, callback);
			}
			var tempDFAnimate = '';

			//	------------------------------------------------------
			if (_this.defineanimate != null && _this.defineanimate != '') {
				tempDFAnimate = _this.defineanimate;
			}
			else {
				tempDFAnimate = 'mainDefineAnimate' + mainDefineAnimateCount++;
			}
			//	---------------------------------------------------------

			window[tempDFAnimate] = requestAnimationFrame(tempFunc);
			_this.defineanimate = tempDFAnimate;
		} else {
			// Wait for a while and restart the animation
			setTimeout(start, duration/10);
		}
	}
}

function updateTarget(playback, _this, start, end) {
	// reverse the animation: playback = 1 - playback
	for (var x in end) {
		var tempStart, tempEnd, tempUnit;
		if ($.isNumber(parseFloat(end[x]))) {
			if (typeof end[x] === 'string') {
				tempStart = parseFloat(start[x]);
				tempEnd = parseFloat(end[x]);
				tempUnit = end[x].substring(tempEnd.toString().length);
			}
			else if (typeof end[x] === 'number') {
				tempStart = start[x];
				tempEnd = end[x];
				if (x != 'opacity' && x != 'zIndex') {
					tempUnit = 'px';
				}
				else {
					tempUnit = 0;
				}
			}
			else { return; }
			var range = tempEnd - tempStart;
			var position = tempStart + (playback * range);
			_this.style[x] = position + tempUnit;
		}
		else {
			_this.style[x] = end[x];
		}
	}
}
