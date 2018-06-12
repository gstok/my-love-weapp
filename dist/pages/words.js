"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageWords = function (_wepy$page) {
        _inherits(pageWords, _wepy$page);

        function pageWords() {
                var _ref;

                var _temp, _this, _ret;

                _classCallCheck(this, pageWords);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageWords.__proto__ || Object.getPrototypeOf(pageWords)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
                        navigationBarTitleText: "天才养猪少女"
                }, _this.components = {}, _this.mixins = [], _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(pageWords, [{
                key: "onLoad",
                value: function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                                switch (_context.prev = _context.next) {
                                                        case 0:
                                                        case "end":
                                                                return _context.stop();
                                                }
                                        }
                                }, _callee, this);
                        }));

                        function onLoad() {
                                return _ref2.apply(this, arguments);
                        }

                        return onLoad;
                }()
        }]);

        return pageWords;
}(_wepy2.default.page);

exports.default = pageWords;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzLmpzIl0sIm5hbWVzIjpbInBhZ2VXb3JkcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7O3dNQUVqQkMsTSxHQUFTO0FBQ0xDLGdEQUF3QjtBQURuQixpQixRQUlUQyxVLEdBQWEsRSxRQUliQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU8sRSxRQUlQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEIwQkMsZUFBS0MsSTs7a0JBQXZCVixTO0FBK0JwQiIsImZpbGUiOiJ3b3Jkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwYWdlV29yZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLlpKnmiY3lhbvnjKrlsJHlpbNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgICAgICBkYXRhID0ge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXB1dGVkID0ge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnRzID0ge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuIl19