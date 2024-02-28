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
var button_1 = require("./ui/button");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var image_1 = __importDefault(require("next/image"));
var link_1 = __importDefault(require("next/link"));
var NavItem = function (_a) {
    var isAnyopen = _a.isAnyopen, category = _a.category, handleOpen = _a.handleOpen, isOpen = _a.isOpen;
    return (React.createElement("div", { className: "flex" },
        React.createElement("div", { className: "relative flex items-center" },
            React.createElement(button_1.Button, { onClick: handleOpen, className: "gap-1.5", variant: isOpen ? "secondary" : "ghost" },
                category.label,
                React.createElement(lucide_react_1.ChevronDown, { className: (0, utils_1.cn)("h-4 w-4 transition-all text-muted-foreground", {
                        "rotate-180": isOpen,
                    }) }))),
        isOpen ? (React.createElement("div", { className: (0, utils_1.cn)("absolute  top-full inset-x-0 text-sm text-muted-foreground", {
                "animate-in fade-in-10 slide-in-from-top-5": !isOpen,
            }) },
            React.createElement("div", { className: "absolute inset-0 top-1/2 bg-white shadow", "arieal-hidden": "true" },
                React.createElement("div", { className: "relative bg-white" },
                    React.createElement("div", { className: "mx-auto max-w-7xl px-8" },
                        React.createElement("div", { className: "grid grid-cols-4 gap-x-8 gap-y-10 py-16" },
                            React.createElement("div", { className: "col-span-4 col-start-1 grid grid-cols-3 gap-x-8" }, category.featured.map(function (item, index) {
                                return (React.createElement("div", { className: "group relative text-base sm:text-small", key: item.name },
                                    React.createElement("div", { className: "relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75" },
                                        React.createElement(image_1.default, { src: item.imageSrc, alt: "product image category", fill: true, className: "object-cover object-center" })),
                                    React.createElement(link_1.default, { href: item.href, className: "mt-6 block font-medium text-gray-900" }, item.name),
                                    React.createElement("p", { className: "mt-1", "area-hidden": "true" }, "Shop Now")));
                            })))))))) : null));
};
exports.default = NavItem;
