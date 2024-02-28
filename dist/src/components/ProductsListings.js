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
var react_1 = require("react");
var skeleton_1 = require("./ui/skeleton");
var link_1 = __importDefault(require("next/link"));
var utils_1 = require("@/lib/utils");
var config_1 = require("@/config");
var ImageSlider_1 = __importDefault(require("./ImageSlider"));
var ProductListing = function (_a) {
    var _b;
    var product = _a.product, index = _a.index;
    var _c = (0, react_1.useState)(false), visile = _c[0], setIsvisible = _c[1];
    var label = (_b = config_1.PRODUCT_CATEGORY.find(function (_a) {
        var value = _a.value;
        return value === (product === null || product === void 0 ? void 0 : product.category);
    })) === null || _b === void 0 ? void 0 : _b.label;
    var validUrls = product === null || product === void 0 ? void 0 : product.images.map(function (_a) {
        var image = _a.image;
        return (typeof image === "string" ? image : image === null || image === void 0 ? void 0 : image.url);
    }).filter(Boolean);
    (0, react_1.useEffect)(function () {
        var timeer = setTimeout(function () {
            setIsvisible(true);
        }, index * 75);
        return function () { return clearTimeout(timeer); };
    }, [index]);
    if (product && !visile)
        return React.createElement(ProductPlaceholder, null);
    if (visile && product)
        return (React.createElement(link_1.default, { className: (0, utils_1.cn)("invisible h-full w-full cursor-pointer group/main", {
                "visible animate-in fade-in-5": visile,
            }), href: "/product/".concat(product.id) },
            React.createElement("div", { className: "flex flex-col w-full" },
                React.createElement(ImageSlider_1.default, { urls: validUrls }),
                React.createElement("h3", { className: "mt-4 text-sm font-medium text-grey-700" }, product.name),
                React.createElement("p", { className: "mt-1 text-sm text-green-500" }, label),
                React.createElement("p", { className: "mt-1 font-medium text-grey-900" }, (0, utils_1.formatPrice)(product.price)))));
};
var React = __importStar(require("react"));
var ProductPlaceholder = function () {
    return (React.createElement("div", { className: "flex flex-col w-full" },
        React.createElement("div", { className: "relative w-full bg-zinc-100 aspect-square overflow-hidden rounded-xl" },
            React.createElement(skeleton_1.Skeleton, { className: "h-full w-full" })),
        React.createElement(skeleton_1.Skeleton, { className: "mt-4 w-2/3 h-4 rounded-lg" }),
        React.createElement(skeleton_1.Skeleton, { className: "mt-2 w-16 h-4 rounded-lg" }),
        React.createElement(skeleton_1.Skeleton, { className: "mt-4 w-12 h-4 rounded-lg" })));
};
exports.default = ProductListing;
