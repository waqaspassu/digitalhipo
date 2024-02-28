"use strict";
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Icons_1 = require("@/components/Icons");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var link_1 = __importDefault(require("next/link"));
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var account_validators_1 = require("@/lib/validators/account-validators");
var client_1 = require("@/trpc/client");
var sonner_1 = require("sonner");
var navigation_1 = require("next/navigation");
var Page = function () {
    var searchParams = (0, navigation_1.useSearchParams)();
    var router = (0, navigation_1.useRouter)();
    var isSeller = searchParams.get("as") === "seller";
    var origin = searchParams.get("origin");
    var continueAsSeller = function () {
        router.push("?as=seller");
    };
    var continueAsBuyer = function () {
        router.replace("/login", undefined);
    };
    var _a = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(account_validators_1.AuthCredentialValidator),
    }), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var _b = client_1.trpc.auth.signIn.useMutation({
        onError: function (error) {
            var _a;
            if (((_a = error.data) === null || _a === void 0 ? void 0 : _a.code) === "UNAUTHORIZED") {
                sonner_1.toast.error("Invalid password or email");
            }
        },
        onSuccess: function (success) {
            sonner_1.toast.success("Sign In successfully");
            router.refresh();
            if (origin) {
                router.push(origin);
                return;
            }
            if (isSeller) {
                router.push("/sell");
                return;
            }
            router.push("/");
        },
    }), signIn = _b.mutate, isLoading = _b.isLoading;
    var onSubmit = function (data) {
        var password = data.password, email = data.email;
        signIn({
            email: email,
            password: password,
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container relative flex pt-20 flex-col items-center justify-center lg:px-0" },
            React.createElement("div", { className: "mx-auto flex w-full flex-col justify-center space-y-6 sm-w-[300px] lg:max-w-[500px]" },
                React.createElement("div", { className: "flex flex-col items-center space-y-2 text-center" },
                    React.createElement(Icons_1.Icons.logo, { className: "h-20 w-20" }),
                    React.createElement("h1", { className: "text-2xl font-bold" },
                        "Sign in to your ",
                        isSeller ? "Seller" : "Buyer",
                        " account"),
                    React.createElement(link_1.default, { className: (0, button_1.buttonVariants)({
                            variant: "link",
                            className: "gap-1.5",
                        }), href: "signup" },
                        "Don't have an  account? Sign-up",
                        React.createElement(lucide_react_1.ArrowRight, { className: "h-4 w-4" }))),
                React.createElement("div", { className: "grid gap-6" },
                    React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                        React.createElement("div", { className: "grid gap-2" },
                            React.createElement("div", { className: "grid grid-gap-1 py-2" },
                                React.createElement(label_1.Label, { htmlFor: "email" }, "Email"),
                                React.createElement(input_1.Input, __assign({ className: (0, utils_1.cn)({
                                        "focus-visible:ring-red-500": errors.email,
                                    }) }, register("email"), { id: "email", type: "email", placeholder: "your@example.com" })),
                                (errors === null || errors === void 0 ? void 0 : errors.email) && (React.createElement("p", { className: "text-sm text-red-500" }, errors.email.message))),
                            React.createElement("div", { className: "grid grid-gap-1 py-2" },
                                React.createElement(label_1.Label, { htmlFor: "password" }, "Password"),
                                React.createElement(input_1.Input, __assign({ className: (0, utils_1.cn)({
                                        "focus-visible:ring-red-500": errors.password,
                                    }) }, register("password"), { id: "password", placeholder: "Password", type: "password" })),
                                (errors === null || errors === void 0 ? void 0 : errors.password) && (React.createElement("p", { className: "text-sm text-red-500" }, errors.password.message))),
                            React.createElement(button_1.Button, { type: "submit" }, "Sign in"))),
                    React.createElement("div", { className: "relative" },
                        React.createElement("div", { "aria-hidden": true, className: "absolute inset-0 flex items-center" },
                            React.createElement("span", { className: "w-full border-t" })),
                        React.createElement("div", { className: "relative flex justify-center text-ts uppercase" },
                            React.createElement("span", { className: "bg-background px-2 text-muted-foreground" }, "or"))),
                    isSeller ? (React.createElement(button_1.Button, { onClick: continueAsBuyer, variant: "secondary", disabled: isLoading }, "Continue as Customer")) : (React.createElement(button_1.Button, { onClick: continueAsSeller, variant: "ghost", disabled: isLoading }, "Contiune as Seller")))))));
};
exports.default = Page;
