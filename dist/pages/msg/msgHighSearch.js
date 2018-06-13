"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageWeuiWxss = function (_wepy$page) {
        _inherits(pageWeuiWxss, _wepy$page);

        function pageWeuiWxss() {
                var _ref;

                var _temp, _this, _ret;

                _classCallCheck(this, pageWeuiWxss);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageWeuiWxss.__proto__ || Object.getPrototypeOf(pageWeuiWxss)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
                        navigationBarTitleText: "高级查找"
                }, _this.components = {}, _this.mixins = [], _this.data = {
                        index: 0,
                        list: ["李老三", "王老二", "张老六"]
                }, _this.computed = {}, _this.methods = {
                        search: function search() {},
                        bindAccountChange: function bindAccountChange(e) {
                                console.log(e);
                        }
                }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(pageWeuiWxss, [{
                key: "onLoad",
                value: function onLoad() {}
        }]);

        return pageWeuiWxss;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(pageWeuiWxss , 'pages/msg/msgHighSearch'));

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZ0hpZ2hTZWFyY2guanMiXSwibmFtZXMiOlsicGFnZVdldWlXeHNzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiaW5kZXgiLCJsaXN0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2VhcmNoIiwiYmluZEFjY291bnRDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs4TUFFakJDLE0sR0FBUztBQUNMQyxnREFBd0I7QUFEbkIsaUIsUUFJVEMsVSxHQUFhLEUsUUFJYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLCtCQUFPLENBREo7QUFFSEMsOEJBQU0sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWY7QUFGSCxpQixRQUtQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDTkMsOEJBRE0sb0JBQ0ksQ0FFVCxDQUhLO0FBS05DLHlDQUxNLDZCQUthQyxDQUxiLEVBS2dCO0FBQ2xCQyx3Q0FBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFQSyxpQixRQVVWRyxNLEdBQVMsRTs7Ozs7eUNBSUMsQ0FFVDs7OztFQXJDcUNDLGVBQUtDLEk7O2tCQUExQmpCLFk7QUFzQ3BCIiwiZmlsZSI6Im1zZ0hpZ2hTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZVdldWlXeHNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIumrmOe6p+afpeaJvlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1peGlucyA9IFtdXHJcblxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBsaXN0OiBbXCLmnY7ogIHkuIlcIiwgXCLnjovogIHkuoxcIiwgXCLlvKDogIHlha1cIl0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wdXRlZCA9IHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBzZWFyY2ggKCkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGJpbmRBY2NvdW50Q2hhbmdlIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnRzID0ge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiJdfQ==