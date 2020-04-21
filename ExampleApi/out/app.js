"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mainRouter_1 = require("./mainRouter");
var Application = /** @class */ (function () {
    function Application(port) {
        this.port = port;
        this.app = express_1.default();
    }
    Application.prototype.startServer = function () {
        var _this = this;
        //configure body parser
        //configure CORS
        this.app.use('/api', new mainRouter_1.MainRouter().getRouter());
        this.app.listen(this.port, function () { return console.log('ExampleApi Listening on port ' + _this.port.toString()); });
    };
    return Application;
}());
var port = process.env.PORT || 3000;
new Application(+port).startServer();
//# sourceMappingURL=app.js.map