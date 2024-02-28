"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var MaxWidthWrapper_1 = __importDefault(require("./MaxWidthWrapper"));
var Icons_1 = require("./Icons");
var NavItems_1 = __importDefault(require("./NavItems"));
var button_1 = require("./ui/button");
var Cart_1 = __importDefault(require("./Cart"));
var payload_utils_1 = require("../lib/payload-utils");
var headers_1 = require("next/headers");
var UserAccountNav_1 = __importDefault(require("./UserAccountNav"));
var Navbar = function () { return __awaiter(void 0, void 0, void 0, function () {
    var nextCookies, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nextCookies = (0, headers_1.cookies)();
                return [4 /*yield*/, (0, payload_utils_1.getServerSideUser)(nextCookies)];
            case 1:
                user = (_a.sent()).user;
                return [2 /*return*/, (React.createElement("div", { className: "bg-white sticky z-50 top-0 inset-x-0 h-16" },
                        React.createElement("header", { className: "relative bg-white" },
                            React.createElement(MaxWidthWrapper_1.default, null,
                                React.createElement("div", { className: "border-b border-gray-200" },
                                    React.createElement("div", { className: "flex h-16 items-center " },
                                        React.createElement("div", { className: "ml-4 flex lg:ml-0" },
                                            React.createElement(link_1.default, { href: "/" },
                                                React.createElement(Icons_1.Icons.logo, { className: "h-10 w-10" }))),
                                        React.createElement("div", { className: "hidden z-50 lg:ml-8 lg:block lg:self-stretch" },
                                            React.createElement(NavItems_1.default, null)),
                                        React.createElement("div", { className: "ml-auto flex item-center" },
                                            React.createElement("div", { className: "hiddin lg:flex lg:flex-1 lg:item-center lg:justify-end lg:space-x-6" },
                                                user ? null : (React.createElement(link_1.default, { href: "/sign-in", className: (0, button_1.buttonVariants)({ variant: "ghost" }) },
                                                    " ",
                                                    "Sign In")),
                                                user ? null : (React.createElement("span", { className: "h-6 w-px bg-gray-200 m-auto", "areia-hidden": "true" })),
                                                user ? (React.createElement(UserAccountNav_1.default, { user: user })) : (React.createElement(link_1.default, { href: "/signup", className: (0, button_1.buttonVariants)({ variant: "ghost" }) }, "Create Account")),
                                                user ? React.createElement("span", { className: "h-6 w-px bg-gray-200 m-auto", "areia-hidden": "true" }) : null,
                                                user ? null : (React.createElement("span", { className: "h-6 w-px bg-gray-200 align-items-center m-auto", "areia-hidden": "true" })),
                                                React.createElement("div", { className: "ml-4 flow-root lg:ml-6" },
                                                    React.createElement(Cart_1.default, null))))))))))];
        }
    });
}); };
exports.default = Navbar;
