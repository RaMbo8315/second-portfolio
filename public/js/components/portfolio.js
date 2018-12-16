webpackJsonp([0],{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(158);

var _reactTransitionGroup = __webpack_require__(605);

var _landing = __webpack_require__(263);

var _landing2 = _interopRequireDefault(_landing);

var _about = __webpack_require__(262);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          render: function render(_ref) {
            var location = _ref.location;
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactTransitionGroup.TransitionGroup,
                null,
                _react2.default.createElement(
                  _reactTransitionGroup.CSSTransition,
                  {
                    key: location.key,
                    timeout: 500,
                    classNames: 'fade' },
                  _react2.default.createElement(
                    _reactRouterDom.Switch,
                    { location: location },
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _landing2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/About', component: _about2.default })
                  )
                )
              )
            );
          }
        })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(158);

var _reactTypingAnimation = __webpack_require__(608);

var _reactTypingAnimation2 = _interopRequireDefault(_reactTypingAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var about = function (_Component) {
    _inherits(about, _Component);

    function about() {
        _classCallCheck(this, about);

        var _this = _possibleConstructorReturn(this, (about.__proto__ || Object.getPrototypeOf(about)).call(this));

        _this.switchExp = function () {
            var expTitle = document.getElementsByClassName('exp')[0];
            var famTitle = document.getElementsByClassName('fam')[0];
            var bars = document.getElementsByClassName('bars-group')[0];
            var familiar = document.getElementsByClassName('familiar')[0];
            if (bars.style.display = 'none') {
                famTitle.classList.remove("active");
                familiar.style.display = 'none';
                familiar.style.opacity = 0;
                bars.style.display = 'grid';
                bars.style.opacity = 1;
                expTitle.classList.add("active");
            } else {
                famTitle.classList.add("active");
                familiar.style.display = 'grid';
                familiar.style.opacity = 1;
                expTitle.classList.remove("active");
                bars.style.display = 'none';
                bars.style.opacity = 0;
            }
        };

        _this.switchFam = function () {
            var expTitle = document.getElementsByClassName('exp')[0];
            var famTitle = document.getElementsByClassName('fam')[0];
            var bars = document.getElementsByClassName('bars-group')[0];
            var familiar = document.getElementsByClassName('familiar')[0];
            if (familiar.style.display = 'none') {
                bars.style.display = 'none';
                bars.style.opacity = 0;
                expTitle.classList.remove("active");
                famTitle.classList.add("active");
                familiar.style.display = 'grid';
                familiar.style.opacity = 1;
            } else {
                expTitle.classList.add("active");
                bars.style.display = 'grid';
                bars.style.opacity = 1;
                famTitle.classList.remove("active");
                familiar.style.display = 'none';
                familiar.style.opacity = 0;
            }
        };

        _this.Typing = function () {
            return _react2.default.createElement(
                _reactTypingAnimation2.default,
                { hideCursor: true, startDelay: 5000, speed: 50 },
                _react2.default.createElement(
                    'div',
                    null,
                    'This a paragraph about me in my website come what i\'ve been up to in my time as a developer. Let me know if you like it.'
                )
            );
        };

        _this.state = {};
        return _this;
    }

    _createClass(about, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var app = document.getElementById('app');
            app.style.overflow = 'visible';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'About' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'layout' },
                        _react2.default.createElement(
                            'div',
                            { className: 'weather' },
                            _react2.default.createElement(
                                'div',
                                { id: 'cloud', className: 'cloud' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'menu-btn' },
                                        _react2.default.createElement('div', null),
                                        _react2.default.createElement('div', null),
                                        _react2.default.createElement('div', null)
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement('div', { className: 'sunny' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'logo' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/' },
                                _react2.default.createElement('img', { src: '/img/logo.png' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'me' },
                            _react2.default.createElement(
                                'div',
                                { className: 'info' },
                                _react2.default.createElement(
                                    'div',
                                    { id: 'para' },
                                    this.Typing()
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'image' },
                                _react2.default.createElement('img', { src: '/img/me1.png' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'exp-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'exp-header' },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'exp active', onClick: this.switchExp },
                                    'Experience'
                                ),
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    '/'
                                ),
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'fam', onClick: this.switchFam },
                                    'Familiar'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'familiar' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/jquery-128.png' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/git-128.png' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/linux-128.png' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/seq-128.png' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/word-128.png' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/heroku-128.png' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/boot-128.png' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fam-img' },
                                    _react2.default.createElement('img', { src: '/img/sass-128.png' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bars-group' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'bars' },
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'html', className: 'flex-space' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'infobox' },
                                                _react2.default.createElement('img', { src: '/img/html5-64.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'HTML'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'bottom' }),
                                        _react2.default.createElement('div', { className: 'percent' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'css', className: 'flex-space' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'infobox' },
                                                _react2.default.createElement('img', { src: '/img/css-64.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'CSS'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'bottom' }),
                                        _react2.default.createElement('div', { className: 'percent' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'javascript', className: 'flex-space' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'infobox' },
                                                _react2.default.createElement('img', { src: '/img/javascript-64.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'JS'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'bottom' }),
                                        _react2.default.createElement('div', { className: 'percent' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'node', className: 'flex-space' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'infobox' },
                                                _react2.default.createElement('img', { src: '/img/nodejs-64.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Node'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'bottom' }),
                                        _react2.default.createElement('div', { className: 'percent' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'react', className: 'flex-space' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'infobox' },
                                                _react2.default.createElement('img', { src: '/img/react-64.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'React'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'bottom' }),
                                        _react2.default.createElement('div', { className: 'percent' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'mysql', className: 'flex-space' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'infobox' },
                                                _react2.default.createElement('img', { src: '/img/mysql.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'MySQL'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'bottom' }),
                                        _react2.default.createElement('div', { className: 'percent' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'mongo', className: 'flex-space' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'infobox' },
                                                _react2.default.createElement('img', { src: '/img/mongo-64.png' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Mongo'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'bottom' }),
                                        _react2.default.createElement('div', { className: 'percent' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'percent-line' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'percent-group' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'top-group' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'percent-line-top' },
                                                _react2.default.createElement('div', { className: 'top-line' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'percent' },
                                                    '100'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'percent-line-middle' },
                                            _react2.default.createElement('div', { className: 'middle-line' }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'percent' },
                                                '50'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'bottom-group' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'percent-line-bottom' },
                                                _react2.default.createElement('div', { className: 'bottom-line' }),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'percent' },
                                                    '0'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'line' },
                                        _react2.default.createElement('div', { className: 'line-body' })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return about;
}(_react.Component);

exports.default = about;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var landing = function (_Component) {
    _inherits(landing, _Component);

    function landing() {
        _classCallCheck(this, landing);

        var _this = _possibleConstructorReturn(this, (landing.__proto__ || Object.getPrototypeOf(landing)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(landing, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var app = document.getElementById('app');
            app.style.overflow = 'hidden';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'Landing' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/About' },
                    _react2.default.createElement(
                        'div',
                        { className: 'group' },
                        _react2.default.createElement('div', { className: 'background' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            'Henry Urena'
                        ),
                        _react2.default.createElement('div', { className: 'cover' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pulsatingCircle' },
                        _react2.default.createElement(
                            'span',
                            { className: 'firstCircle' },
                            _react2.default.createElement(
                                'p',
                                { className: 'text' },
                                'About'
                            )
                        ),
                        _react2.default.createElement('span', { className: 'secondCircle' }),
                        _react2.default.createElement('span', { className: 'thirdCircle' })
                    )
                )
            );
        }
    }]);

    return landing;
}(_react.Component);

exports.default = landing;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(257);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ })

},[264]);