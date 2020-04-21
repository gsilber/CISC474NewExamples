"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRouter_1 = require("./common/ApiRouter");
var securityrouter_1 = require("./security/securityrouter");
var MainRouter = /** @class */ (function (_super) {
    __extends(MainRouter, _super);
    function MainRouter() {
        return _super.call(this) || this;
    }
    MainRouter.prototype.setupRoutes = function () {
        this.router.use('/security', new securityrouter_1.SecurityRouter().getRouter());
    };
    return MainRouter;
}(ApiRouter_1.ApiRouter));
exports.MainRouter = MainRouter;
//# sourceMappingURL=mainRouter.js.map