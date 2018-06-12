'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        //应用Promise
        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ["pages/index"],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#ffc0cb",
                navigationBarTitleText: "WeChat",
                navigationBarTextStyle: "black"
            },
            tabBar: {
                color: "#a9b7b7",
                selectedColor: "#ffc0cb",
                borderStyle: "black",
                backgroundColor: "white",
                list: [{
                    selectedIconPath: "./assets/icons/words_active.png",
                    iconPath: "./assets/icons/words.png",
                    pagePath: "pages/index",
                    text: "言叶"
                }, {
                    selectedIconPath: "./assets/icons/count_active.png",
                    iconPath: "./assets/icons/count.png",
                    pagePath: "pages/index",
                    text: "星盘"
                }]
            }
        };
        _this.globalData = {
            userInfo: null
        };
        _this.use("promisify");
        //this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            this.testAsync();
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'testAsync',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.sleep(3);

                            case 2:
                                data = _context.sent;

                                console.log(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function testAsync() {
                return _ref.apply(this, arguments);
            }

            return testAsync;
        }()
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(cb) {
            var that = this;
            if (this.globalData.userInfo) {
                return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
                success: function success(res) {
                    that.globalData.userInfo = res.userInfo;
                    cb && cb(res.userInfo);
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJzZWxlY3RlZEljb25QYXRoIiwiaWNvblBhdGgiLCJwYWdlUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsIndlcHkiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQXdDSSx3QkFBZTtBQUFBOztBQUVYO0FBRlc7O0FBQUEsY0FwQ1hBLE1Bb0NXLEdBcENGO0FBQ0xDLG1CQUFPLENBQ0gsYUFERyxDQURGO0FBSUxDLG9CQUFRO0FBQ0pDLHFDQUFxQixPQURqQjtBQUVKQyw4Q0FBOEIsU0FGMUI7QUFHSkMsd0NBQXdCLFFBSHBCO0FBSUpDLHdDQUF3QjtBQUpwQixhQUpIO0FBVUxDLG9CQUFRO0FBQ0pDLHVCQUFPLFNBREg7QUFFSkMsK0JBQWUsU0FGWDtBQUdKQyw2QkFBYSxPQUhUO0FBSUpDLGlDQUFpQixPQUpiO0FBS0pDLHNCQUFNLENBQ0Y7QUFDSUMsc0NBQWtCLGlDQUR0QjtBQUVJQyw4QkFBVSwwQkFGZDtBQUdJQyw4QkFBVSxhQUhkO0FBSUlDLDBCQUFNO0FBSlYsaUJBREUsRUFPRjtBQUNJSCxzQ0FBa0IsaUNBRHRCO0FBRUlDLDhCQUFVLDBCQUZkO0FBR0lDLDhCQUFVLGFBSGQ7QUFJSUMsMEJBQU07QUFKVixpQkFQRTtBQUxGO0FBVkgsU0FvQ0U7QUFBQSxjQUpmQyxVQUllLEdBSkY7QUFDVEMsc0JBQVU7QUFERCxTQUlFO0FBR1gsY0FBS0MsR0FBTCxDQUFTLFdBQVQ7QUFDQTtBQUpXO0FBS2Q7Ozs7bUNBRVU7QUFDUCxpQkFBS0MsU0FBTDtBQUNIOzs7OEJBRU1DLEMsRUFBRztBQUNOLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDeENDLDJCQUFXLFlBQU07QUFDYkYsNEJBQVEsa0JBQVI7QUFDSCxpQkFGRCxFQUVHRixJQUFJLElBRlA7QUFHQyxhQUpNLENBQVA7QUFLSDs7Ozs7Ozs7Ozs7dUNBR3NCLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQzs7QUFDTkMsd0NBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUdRRyxFLEVBQUk7QUFDWixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsZ0JBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDOUIsdUJBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDQztBQUNEYywyQkFBS0MsV0FBTCxDQUFpQjtBQUNqQkMsdUJBRGlCLG1CQUNSQyxHQURRLEVBQ0g7QUFDVkoseUJBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCaUIsSUFBSWpCLFFBQS9CO0FBQ0FZLDBCQUFNQSxHQUFHSyxJQUFJakIsUUFBUCxDQUFOO0FBQ0g7QUFKZ0IsYUFBakI7QUFNSDs7OztFQXhFNEJjLGVBQUtJLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAgICAgICBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmYzBjYlwiLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiV2VDaGF0XCIsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJibGFja1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiQmFyOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2E5YjdiN1wiLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IFwiI2ZmYzBjYlwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi4vYXNzZXRzL2ljb25zL3dvcmRzX2FjdGl2ZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiBcIi4vYXNzZXRzL2ljb25zL3dvcmRzLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi6KiA5Y+2XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2Fzc2V0cy9pY29ucy9jb3VudF9hY3RpdmUucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogXCIuL2Fzc2V0cy9pY29ucy9jb3VudC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuaYn+ebmFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgICB1c2VySW5mbzogbnVsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy/lupTnlKhQcm9taXNlXG4gICAgICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xuICAgICAgICAvL3RoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgfVxuXG4gICAgb25MYXVuY2goKSB7XG4gICAgICAgIHRoaXMudGVzdEFzeW5jKClcbiAgICB9XG5cbiAgICBzbGVlcCAocykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICB9LCBzICogMTAwMClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyB0ZXN0QXN5bmMgKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIH1cbiJdfQ==