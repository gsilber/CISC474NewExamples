"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AppRouter = /** @class */ (function () {
    function AppRouter() {
        this.router = express_1.default.Router();
        this.setupRoutes();
    }
    Object.defineProperty(AppRouter.prototype, "expressRouter", {
        get: function () {
            return this.router;
        },
        enumerable: true,
        configurable: true
    });
    AppRouter.prototype.addRouter = function (path, child) {
        this.router.use(path, child.expressRouter);
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
//# sourceMappingURL=AppRouter.js.map