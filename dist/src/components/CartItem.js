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
var config_1 = require("@/config");
var use_cart_1 = require("@/hooks/use-cart");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var image_1 = __importDefault(require("next/image"));
var CartItem = function (_a) {
    var _b;
    var product = _a.product;
    var image = product.images[0].image;
    var removeItem = (0, use_cart_1.useCart)().removeItem;
    var lable = (_b = config_1.PRODUCT_CATEGORY.find(function (_a) {
        var value = _a.value;
        return value === product.category;
    })) === null || _b === void 0 ? void 0 : _b.label;
    return (React.createElement("div", { className: "space-y-3 py-2" },
        React.createElement("div", { className: "flex items-start justify-between gap-4" },
            React.createElement("div", { className: "flex items-center space-x-4" },
                React.createElement("div", { className: "relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded" }, typeof image !== "string" && image.url ? (React.createElement(image_1.default, { width: 50, height: 60, src: image.url, alt: "product image" })) : (React.createElement("div", { className: "flex h-full items-center justify-center" },
                    React.createElement(lucide_react_1.ImageIcon, { "arial-hiden": "true", className: "h-4 w-4 text-muted-foreground " })))),
                React.createElement("div", { className: "flex flex-col self-start" },
                    React.createElement("span", { className: "line-clamp-1 text-sm font-medium mb-1" }, product.name),
                    React.createElement("span", { className: "line-clamp-1 text-xs capitilize text-muted-foreground" }, lable),
                    React.createElement("div", { className: "mt-4 text-xs text-muted-foreground" },
                        React.createElement("button", { className: "flex items-center gap-[0.5]", onClick: function () { return removeItem(product.id); } },
                            React.createElement(lucide_react_1.X, { className: "w-3 h-4" }),
                            "Remove")))),
            React.createElement("div", { className: "flex flex-col space-y-1 font-medium " },
                React.createElement("span", { className: "ml-auto line-clamp-1 text-sm" }, (0, utils_1.formatPrice)(product.price))))));
};
exports.default = CartItem;
