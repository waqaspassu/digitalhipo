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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var button_1 = require("./ui/button");
var use_cart_1 = require("@/hooks/use-cart");
var AddToCardButton = function (_a) {
    var product = _a.product;
    var _b = (0, react_1.useState)(false), isSuccess = _b[0], setIsSuccess = _b[1];
    var addItems = (0, use_cart_1.useCart)().addItems;
    (0, react_1.useEffect)(function () {
        var timeOut = setTimeout(function () {
            setIsSuccess(false);
        }, 2000);
        return function () { return clearTimeout(timeOut); };
    }, []);
    return (React.createElement(button_1.Button, { onClick: function () {
            addItems(product);
            setIsSuccess(true);
        }, className: "w-full " }, isSuccess ? "Added to cart" : "Add to cart"));
};
exports.default = AddToCardButton;
