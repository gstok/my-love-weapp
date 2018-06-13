"use strict";

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
            pages: ["pages/astrolabe", "pages/words", "pages/weui-wxss", "pages/template"],
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
                    selectedIconPath: "./assets/icons/count_active.png",
                    iconPath: "./assets/icons/count.png",
                    pagePath: "pages/astrolabe",
                    text: "星盘"
                }, {
                    selectedIconPath: "./assets/icons/words_active.png",
                    iconPath: "./assets/icons/words.png",
                    pagePath: "pages/template",
                    text: "言叶"
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
        key: "onLaunch",
        value: function onLaunch() {
            this.testAsync();
        }
    }, {
        key: "sleep",
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: "testAsync",
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
                            case "end":
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
        key: "getUserInfo",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJzZWxlY3RlZEljb25QYXRoIiwiaWNvblBhdGgiLCJwYWdlUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsIndlcHkiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTBDSSx3QkFBZTtBQUFBOztBQUVYO0FBRlc7O0FBQUEsY0F2Q2ZBLE1BdUNlLEdBdkNOO0FBQ0xDLG1CQUFPLENBQ0gsaUJBREcsRUFFSCxhQUZHLEVBR0gsaUJBSEcsRUFJSCxnQkFKRyxDQURGO0FBT0xDLG9CQUFRO0FBQ0pDLHFDQUFxQixPQURqQjtBQUVKQyw4Q0FBOEIsU0FGMUI7QUFHSkMsd0NBQXdCLFFBSHBCO0FBSUpDLHdDQUF3QjtBQUpwQixhQVBIO0FBYUxDLG9CQUFRO0FBQ0pDLHVCQUFPLFNBREg7QUFFSkMsK0JBQWUsU0FGWDtBQUdKQyw2QkFBYSxPQUhUO0FBSUpDLGlDQUFpQixPQUpiO0FBS0pDLHNCQUFNLENBQ0Y7QUFDSUMsc0NBQWtCLGlDQUR0QjtBQUVJQyw4QkFBVSwwQkFGZDtBQUdJQyw4QkFBVSxpQkFIZDtBQUlJQywwQkFBTTtBQUpWLGlCQURFLEVBT0Y7QUFDSUgsc0NBQWtCLGlDQUR0QjtBQUVJQyw4QkFBVSwwQkFGZDtBQUdJQyw4QkFBVSxnQkFIZDtBQUlJQywwQkFBTTtBQUpWLGlCQVBFO0FBTEY7QUFiSCxTQXVDTTtBQUFBLGNBSmZDLFVBSWUsR0FKRjtBQUNUQyxzQkFBVTtBQURELFNBSUU7QUFHWCxjQUFLQyxHQUFMLENBQVMsV0FBVDtBQUNBO0FBSlc7QUFLZDs7OzttQ0FFVTtBQUNQLGlCQUFLQyxTQUFMO0FBQ0g7Ozs4QkFFTUMsQyxFQUFHO0FBQ04sbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN4Q0MsMkJBQVcsWUFBTTtBQUNiRiw0QkFBUSxrQkFBUjtBQUNILGlCQUZELEVBRUdGLElBQUksSUFGUDtBQUdDLGFBSk0sQ0FBUDtBQUtIOzs7Ozs7Ozs7Ozt1Q0FHc0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9DOztBQUNOQyx3Q0FBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBR1FHLEUsRUFBSTtBQUNaLGdCQUFNQyxPQUFPLElBQWI7QUFDQSxnQkFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM5Qix1QkFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNDO0FBQ0RjLDJCQUFLQyxXQUFMLENBQWlCO0FBQ2pCQyx1QkFEaUIsbUJBQ1JDLEdBRFEsRUFDSDtBQUNWSix5QkFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJpQixJQUFJakIsUUFBL0I7QUFDQVksMEJBQU1BLEdBQUdLLElBQUlqQixRQUFQLENBQU47QUFDSDtBQUpnQixhQUFqQjtBQU1IOzs7O0VBM0V3QmMsZUFBS0ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuICAgIGltcG9ydCBcIndlcHktYXN5bmMtZnVuY3Rpb25cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBwYWdlczogW1xuICAgICAgICAgICAgICAgIFwicGFnZXMvYXN0cm9sYWJlXCIsXG4gICAgICAgICAgICAgICAgXCJwYWdlcy93b3Jkc1wiLFxuICAgICAgICAgICAgICAgIFwicGFnZXMvd2V1aS13eHNzXCIsXG4gICAgICAgICAgICAgICAgXCJwYWdlcy90ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHdpbmRvdzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiNmZmMwY2JcIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIldlQ2hhdFwiLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwiYmxhY2tcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYkJhcjoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNhOWI3YjdcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yOiBcIiNmZmMwY2JcIixcbiAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2Fzc2V0cy9pY29ucy9jb3VudF9hY3RpdmUucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogXCIuL2Fzc2V0cy9pY29ucy9jb3VudC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2FzdHJvbGFiZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLmmJ/nm5hcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi4vYXNzZXRzL2ljb25zL3dvcmRzX2FjdGl2ZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiBcIi4vYXNzZXRzL2ljb25zL3dvcmRzLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvdGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi6KiA5Y+2XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgICAgICAgdXNlckluZm86IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAvL+W6lOeUqFByb21pc2VcbiAgICAgICAgICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xuICAgICAgICAgICAgLy90aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25MYXVuY2goKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3RBc3luYygpXG4gICAgICAgIH1cblxuICAgICAgICBzbGVlcCAocykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=