"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ApiRouter = /** @class */ (function () {
    function ApiRouter() {
        this.router = express_1.default.Router();
        this.setupRoutes();
    }
    ApiRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ApiRouter;
}());
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=ApiRouter.js.map