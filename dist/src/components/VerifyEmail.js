"use strict";
"use client";
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
var client_1 = require("@/trpc/client");
var lucide_react_1 = require("lucide-react");
var image_1 = __importDefault(require("next/image"));
var button_1 = require("./ui/button");
var link_1 = __importDefault(require("next/link"));
var VerifyEmail = function (_a) {
    var token = _a.token;
    var _b = client_1.trpc.auth.VerifyEmail.useQuery({
        token: token,
    }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    if (isError) {
        return (React.createElement("div", { className: "flex flex-col items-center gap-2" },
            React.createElement(lucide_react_1.XCircle, { className: "h-8 w-8 text-red-600" }),
            React.createElement("h3", { className: "font font-semibold text-xl" }, "There was a problem"),
            React.createElement("p", { className: "text-muted-foreground text-sm" }, "The token is not valid or might be expired. please try again")));
    }
    if (data === null || data === void 0 ? void 0 : data.success) {
        return (React.createElement("div", { className: "flex h-full flex-col items-center justify-center" },
            React.createElement("div", { className: "relative mb-4 h-60 w-60 text-muted-foreground" },
                React.createElement(image_1.default, { src: "/hippo-email-sent.png", alt: "verify email", fill: true })),
            React.createElement("h3", { className: "font-semibold text-2xl " }, "You're all set!"),
            React.createElement("p", { className: "text-muted-foreground text-center mt-1" }, "Thank you for verifying your Email"),
            React.createElement(link_1.default, { className: (0, button_1.buttonVariants)({ className: "mt-4" }), href: "/sign-in" }, "Sign In")));
    }
    if (isLoading) {
        React.createElement("div", { className: "flex flex-col items-center gap-2" },
            React.createElement(lucide_react_1.Loader2, { className: "h-8 w-8 text-zinc-300" }),
            React.createElement("h3", { className: "font font-semibold text-xl" }, "Verifying...."),
            React.createElement("p", { className: "text-muted-foreground text-sm" }, "this won&npos;nt take long"));
    }
};
exports.default = VerifyEmail;
