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

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: "天才养猪少女"
        }, _this.components = {}, _this.mixins = [], _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "onLoad",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log("你好，世界");
                                _context.next = 3;
                                return _wepy2.default.request({
                                    url: "https://www.91weixin.net/queryMsg",
                                    method: "POST",
                                    data: {}
                                });

                            case 3:
                                result = _context.sent;

                                console.log(result);

                            case 5:
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

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzdWx0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxVLEdBQWEsRSxRQUliQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU8sRSxRQUlQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7O0FBS0xDLHdDQUFRQyxHQUFSLENBQVksT0FBWjs7dUNBQ21CQyxlQUFLQyxPQUFMLENBQWE7QUFDNUJDLHlDQUFLLG1DQUR1QjtBQUU1QkMsNENBQVEsTUFGb0I7QUFHNUJULDBDQUFNO0FBSHNCLGlDQUFiLEM7OztBQUFmVSxzQzs7QUFLSk4sd0NBQVFDLEdBQVIsQ0FBWUssTUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5DMkJKLGVBQUtLLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5aSp5omN5YW754yq5bCR5aWzXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG1peGlucyA9IFtdXG5cbiAgICAgICAgZGF0YSA9IHtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50cyA9IHtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvaDlpb3vvIzkuJbnlYxcIik7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuOTF3ZWl4aW4ubmV0L3F1ZXJ5TXNnXCIsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7IH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=