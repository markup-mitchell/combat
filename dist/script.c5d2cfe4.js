parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"r2hz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return Math.floor(Math.random()*e)+1},r=function(r,t){for(var o=0,u=0;u<t;u++)o+=e(r);return o},t=r;exports.default=t;
},{}],"6dsC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.monsterStats=exports.heroStats=void 0;var e=t(require("./dice"));function t(e){return e&&e.__esModule?e:{default:e}}var a={name:"Link",health:(0,e.default)(6,1),attack:(0,e.default)(6,1),defend:(0,e.default)(6,1),stamina:(0,e.default)(6,1),speed:(0,e.default)(6,1)};exports.heroStats=a;var d={name:"Ganon",health:(0,e.default)(6,1),attack:(0,e.default)(6,1),defend:(0,e.default)(6,1),stamina:(0,e.default)(6,1),speed:(0,e.default)(6,1)};exports.monsterStats=d;
},{"./dice":"r2hz"}],"Yrqs":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(a){var n=a.name,i=a.health,r=a.attack,o=a.defend,s=a.stamina,u=a.speed;e(this,t),this.name=n,this.health=i,this.attack=r,this.defend=o,this.stamina=s,this.speed=u}return a(t,[{key:"takeDamage",value:function(e){this.health-=e}}]),t}();exports.default=n;
},{}],"XOMe":[function(require,module,exports) {
"use strict";function e(e){for(var t=0,o=0,r=0;r<e;r++){var a=battle.takeTurn(hero,monster);switch(a){case a[0]>a[1]:t++;break;case a[1]>a[0]:o++}}console.log("hero: ".concat(t," monster: ").concat(o))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=require("./stats"),n=a(require("./entity")),t=a(require("./getStats"));function a(e){return e&&e.__esModule?e:{default:e}}var r={turn:0,fighters:[]},i={display:document.querySelector(".display"),messageBoard:document.querySelector(".messageBoard"),init:function(){var e=this;this.clear(this.display),r.fighters.forEach(function(n){var t=document.createElement("div");t.className=n.name,e.display.appendChild(t),e.renderPlayer(n)})},renderPlayer:function(e){var n=document.querySelector(".".concat(e.name)),t="\n      <h3>".concat(e.name,"</h3>\n      <p>HP: ").concat(e.health,"</p>\n      <p>AT: ").concat(e.attack,"</p>\n      <p>DF: ").concat(e.defend,"</p>\n      <p>SP: ").concat(e.speed,"</p>\n      <p>ST: ").concat(e.stamina,"</p>\n    ");n.innerHTML=t},broadcast:function(e){var n='\n      <p class="fade-off">\n        '.concat(e,"\n      </p>\n    ");this.messageBoard.innerHTML=n},clear:function(e){e.innerHTML=""}},c={init:function(){var t=new n.default(e.heroStats),a=new n.default(e.monsterStats);r.fighters=[t,a],i.init()}};window.onload=c.init(),window.GetStats=t.default,window.model=r,window.view=i;
},{"./stats":"6dsC","./entity":"Yrqs","./getStats":"XOMe"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.c5d2cfe4.map