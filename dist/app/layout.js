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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var React = __importStar(require("react"));
var google_1 = require("next/font/google");
require("./globals.css");
var utils_1 = require("@/lib/utils");
var Navbar_1 = __importDefault(require("@/components/Navbar"));
var Providers_1 = __importDefault(require("@/components/Providers"));
var sonner_1 = require("sonner");
var inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "h-full" },
        React.createElement("body", { className: (0, utils_1.cn)("relative h-full font-sans antialiased", inter.className) },
            React.createElement(Providers_1.default, null,
                React.createElement("main", { className: "relative flex flex-col min-h-screen" },
                    React.createElement(Navbar_1.default, null),
                    React.createElement("div", { className: "flex-grow flex-fill" }, children))),
            React.createElement(sonner_1.Toaster, { position: "top-center", richColors: true }))));
}
exports.default = RootLayout;
