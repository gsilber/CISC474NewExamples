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
var AppRouter_1 = require("../common/AppRouter");
var securityController_1 = require("./securityController");
var SecurityRouter = /** @class */ (function (_super) {
    __extends(SecurityRouter, _super);
    function SecurityRouter() {
        return _super.call(this) || this;
    }
    SecurityRouter.prototype.setupRoutes = function () {
        var securityController = new securityController_1.SecurityController();
        this.expressRouter.get('/authorize', securityController.authorize);
        this.expressRouter.post('/login', securityController.login);
        this.expressRouter.post('/register', securityController.register);
        this.expressRouter.post('/changepwd', securityController.changePwd);
    };
    return SecurityRouter;
}(AppRouter_1.AppRouter));
exports.SecurityRouter = SecurityRouter;
//# sourceMappingURL=securityrouter.js.map