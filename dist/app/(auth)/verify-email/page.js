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
var React = __importStar(require("react"));
var image_1 = __importDefault(require("next/image"));
var VerifyEmail_1 = __importDefault(require("@/components/VerifyEmail"));
var VerifyEmail = function (_a) {
    var searchParams = _a.searchParams;
    var token = searchParams === null || searchParams === void 0 ? void 0 : searchParams.token;
    var toEmail = searchParams === null || searchParams === void 0 ? void 0 : searchParams.to;
    return (React.createElement("div", { className: "container relative flex pt-20 flex-col item-center justify-center px-0" },
        React.createElement("div", { className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]" }, token && typeof token === "string" ? (React.createElement("div", { className: "grid gap-6 " },
            React.createElement(VerifyEmail_1.default, { token: token }))) : (React.createElement("div", { className: "flex h-full flex-col items-center justify-center space-y-1" },
            React.createElement("div", { className: "relative mb-4 h-60 w-60 text-muted-foreground" },
                React.createElement(image_1.default, { src: "/hippo-email-sent.png", alt: "verify email", fill: true })),
            React.createElement("h3", { className: "font-semi-bold text-2xl" }, " Check your email"),
            toEmail && typeof toEmail === "string" ? (React.createElement("p", { className: "text-center text-muted-foreground" },
                "We 've sent a verification email",
                " ",
                React.createElement("span", { className: "font-semibold" }, toEmail))) : (React.createElement("p", { className: "text-muted-foreground text-center" }, "We 've sent a Verification link to your email")))))));
};
exports.default = VerifyEmail;
