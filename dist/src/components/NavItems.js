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
var config_1 = require("@/config");
var react_1 = require("react");
var NavItem_1 = __importDefault(require("./NavItem"));
var use_on_click_outside_1 = require("@/hooks/use-on-click-outside");
var NavItems = function () {
    var _a = (0, react_1.useState)(null), activeIndex = _a[0], setActiveIndex = _a[1];
    var isAnyOpen = activeIndex !== null;
    var navRefs = (0, react_1.useRef)(null);
    (0, use_on_click_outside_1.useOnClickOutside)(navRefs, function () {
        return setActiveIndex(null);
    });
    (0, react_1.useEffect)(function () {
        var handler = function (e) {
            if (e.key === "Escape") {
                setActiveIndex(null);
            }
        };
        document.addEventListener("keydown", function (e) { return handler(e); });
        return function () {
            document.removeEventListener("keydown", handler);
        };
    }, []);
    return (React.createElement("div", { className: "flex gap-4 h-full ", ref: navRefs }, config_1.PRODUCT_CATEGORY.map(function (category, index) {
        var handleOpen = function () {
            if (activeIndex === index) {
                setActiveIndex(null);
            }
            else {
                setActiveIndex(index);
            }
        };
        var isOpen = index === activeIndex;
        return React.createElement(NavItem_1.default, { category: category, isOpen: isOpen, handleOpen: handleOpen, isAnyopen: isAnyOpen, key: category.value });
    })));
};
exports.default = NavItems;
