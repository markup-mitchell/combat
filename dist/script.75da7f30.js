// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"dice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var rollDie = function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
};

var rollDice = function rollDice(sides, quantity) {
  var total = 0;

  for (var i = 0; i < quantity; i++) {
    total += rollDie(sides);
  }

  ;
  return total;
};

var _default = rollDice;
exports.default = _default;
},{}],"stats.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monsterStats = exports.heroStats = void 0;

var _dice = _interopRequireDefault(require("./dice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heroStats = {
  name: "Link",
  health: (0, _dice.default)(6, 1),
  attack: (0, _dice.default)(6, 1),
  defend: (0, _dice.default)(6, 1),
  stamina: (0, _dice.default)(6, 1),
  speed: (0, _dice.default)(6, 1)
};
exports.heroStats = heroStats;
var monsterStats = {
  name: "Ganon",
  health: (0, _dice.default)(6, 1),
  attack: (0, _dice.default)(6, 1),
  defend: (0, _dice.default)(6, 1),
  stamina: (0, _dice.default)(6, 1),
  speed: (0, _dice.default)(6, 1)
};
exports.monsterStats = monsterStats;
},{"./dice":"dice.js"}],"entity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity =
/*#__PURE__*/
function () {
  function Entity(_ref) {
    var name = _ref.name,
        health = _ref.health,
        attack = _ref.attack,
        defend = _ref.defend,
        stamina = _ref.stamina,
        speed = _ref.speed;

    _classCallCheck(this, Entity);

    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defend = defend;
    this.stamina = stamina;
    this.speed = speed;
  }

  _createClass(Entity, [{
    key: "takeDamage",
    value: function takeDamage(damage) {
      this.health -= damage;
    }
  }]);

  return Entity;
}();

exports.default = Entity;
;
},{}],"getStats.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStats;

function getStats(sample) {
  var blowsLanded = 0;
  var blowsBlocked = 0;
  var result;

  for (var i = 0; i < sample; i++) {
    var _result = battle.takeTurn(hero, monster);

    switch (_result) {
      case _result[0] > _result[1]:
        blowsLanded++;
        break;

      case _result[1] > _result[0]:
        blowsBlocked++;
        break;

      default:
        null;
    }
  }

  ;
  console.log("hero: ".concat(blowsLanded, " monster: ").concat(blowsBlocked));
}

;
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _stats = require("./stats");

var _entity = _interopRequireDefault(require("./entity"));

var _getStats = _interopRequireDefault(require("./getStats"));

var _dice = _interopRequireDefault(require("./dice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var model = {
  turn: 0,
  fighters: []
};
var view = {
  display: document.querySelector(".display"),
  messageBoard: document.querySelector(".messageBoard"),
  init: function init() {
    var _this = this;

    this.clear(this.display); // add divs for fighter stats

    model.fighters.forEach(function (fighter) {
      var playerBoard = document.createElement("div");
      playerBoard.className = fighter.name;

      _this.display.appendChild(playerBoard); //...and add their info


      _this.renderPlayer(fighter);
    });
  },
  renderPlayer: function renderPlayer(entity) {
    var playerBoard = document.querySelector(".".concat(entity.name));
    var stats = "\n      <h3>".concat(entity.name, "</h3>\n      <p>HP: ").concat(entity.health, "</p>\n      <p>AT: ").concat(entity.attack, "</p>\n      <p>DF: ").concat(entity.defend, "</p>\n      <p>SP: ").concat(entity.speed, "</p>\n      <p>ST: ").concat(entity.stamina, "</p>\n    ");
    playerBoard.innerHTML = stats;
  },
  broadcast: function broadcast(message) {
    var messageNode = "\n      <p class=\"fade-off\">\n        ".concat(message, "\n      </p>\n    ");
    this.messageBoard.innerHTML = messageNode;
  },
  clear: function clear(element) {
    element.innerHTML = "";
  }
};
var controller = {
  init: function init() {
    var hero = new _entity.default(_stats.heroStats);
    var monster = new _entity.default(_stats.monsterStats);
    model.fighters = [hero, monster];
    view.init();
  },
  attack: function attack() {
    var messages = ["<h3 class='fade-off'>attack fails!</h3>", "<h3 class='fade-off'>attack successful!</h3>"];

    var _model$fighters = _slicedToArray(model.fighters, 2),
        attacker = _model$fighters[0],
        defender = _model$fighters[1];

    var attack = attacker.attack + (0, _dice.default)(6, 2);
    var defend = defender.defend + (0, _dice.default)(6, 1);
    var outcome = attack >= defend ? 1 : 0;
    defender.health -= outcome;
    view.renderPlayer(defender);
    view.broadcast("\n      <p class=\"fade-off\">\n        ".concat(attacker.name, " attacks (").concat(attack, ") - ").concat(defender.name, " defends (").concat(defend, ")\n      </p>   \n        ").concat(messages[outcome], "\n    "));
    this.nextFighter();
    this.update();
  },
  nextFighter: function nextFighter() {
    console.log(model.fighters);
    var currentOrder = model.fighters;
    currentOrder.reverse();
    console.log(model.fighters);
  },
  update: function update() {
    model.fighters.forEach(function (fighter) {
      if (fighter.health === 0) {
        view.broadcast("\n          <h2>\n            ".concat(fighter.name, " IS DEAD! GAME OVER\n          </h2>\n          <button onclick=\"location.reload()\">reset</button>\n        "));
      }

      ;
    });
  }
};
window.onload = controller.init();
window.controller = controller;
window.GetStats = _getStats.default;
window.model = model;
window.view = view;
},{"./stats":"stats.js","./entity":"entity.js","./getStats":"getStats.js","./dice":"dice.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49259" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.map