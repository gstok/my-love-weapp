"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                        navigationBarTitleText: "言叶"
                }, _this.components = {}, _this.mixins = [], _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(pageWords, [{
                key: "onLoad",
                value: function onLoad() {}
        }]);

        return pageWords;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageWords , 'pages/words'));

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzLmpzIl0sIm5hbWVzIjpbInBhZ2VXb3JkcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozt3TUFFakJDLE0sR0FBUztBQUNMQyxnREFBd0I7QUFEbkIsaUIsUUFJVEMsVSxHQUFhLEUsUUFJYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPLEUsUUFJUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7O3lDQUlBLENBRVI7Ozs7RUE5QmtDQyxlQUFLQyxJOztrQkFBdkJWLFM7QUErQnBCIiwiZmlsZSI6IndvcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2VXb3JkcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuiogOWPtlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1peGlucyA9IFtdXHJcblxyXG4gICAgICAgIGRhdGEgPSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcHV0ZWQgPSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudHMgPSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4iXX0=