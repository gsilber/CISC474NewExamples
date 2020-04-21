"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var NodeApplication = /** @class */ (function () {
    function NodeApplication(port, rootPath) {
        if (rootPath === void 0) { rootPath = '/'; }
        this.port = port;
        this.app = express_1.default();
        this.routes = this.SetupRoutes().expressRouter;
        this.app.use(rootPath, this.routes);
    }
    NodeApplication.prototype.OnBeforeInit = function () { };
    ;
    NodeApplication.prototype.OnSetupComplete = function (port) { };
    NodeApplication.prototype.setupServer = function () {
        this.initCors();
        this.initBodyParser();
    };
    NodeApplication.prototype.initBodyParser = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    };
    NodeApplication.prototype.initCors = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
    };
    NodeApplication.prototype.startServer = function () {
        var _this = this;
        this.OnBeforeInit();
        this.setupServer();
        this.app.listen(this.port, function () { return _this.OnSetupComplete(_this.port); });
    };
    return NodeApplication;
}());
exports.NodeApplication = NodeApplication;
//# sourceMappingURL=NodeApplication.js.map