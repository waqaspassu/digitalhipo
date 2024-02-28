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
var sheet_1 = require("@/components/ui/sheet");
var button_1 = require("./ui/button");
var lucide_react_1 = require("lucide-react");
var separator_1 = require("./ui/separator");
var utils_1 = require("@/lib/utils");
var link_1 = __importDefault(require("next/link"));
var image_1 = __importDefault(require("next/image"));
var use_cart_1 = require("@/hooks/use-cart");
var scroll_area_1 = require("./ui/scroll-area");
var CartItem_1 = __importDefault(require("./CartItem"));
var react_1 = require("react");
var Cart = function () {
    var items = (0, use_cart_1.useCart)().items;
    var _a = (0, react_1.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    var cartTotal = items.reduce(function (total, _a) {
        var product = _a.product;
        return total + product.price;
    }, 0);
    var itemCount = items.length;
    var fee = 2;
    return (React.createElement(sheet_1.Sheet, null,
        React.createElement(sheet_1.SheetTrigger, { className: "group -m-2 flex items-center p-2" },
            React.createElement(lucide_react_1.ShoppingCartIcon, { className: "h-6  w-6 flex-shrink-0 tex-gray-400 group-hover:text-gray-500" }),
            React.createElement("span", { className: "ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800" }, itemCount)),
        React.createElement(sheet_1.SheetContent, { className: "flex w-full flex-col pr-0 sm:max-w-lg" },
            React.createElement(sheet_1.SheetHeader, { className: "space-y-2.5 pr-6" },
                React.createElement(sheet_1.SheetTitle, { className: "text-sm font-medium text-gray-900" },
                    "Count (",
                    itemCount,
                    ")"),
                React.createElement(sheet_1.SheetDescription, { className: "text-sm text-gray-500" }, itemCount < 0 && "Your shopping cart is empty")),
            itemCount > 0 ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "flex w-full flex-col pr-6" },
                    React.createElement(scroll_area_1.ScrollArea, null, items.map(function (_a) {
                        var product = _a.product;
                        return (React.createElement(CartItem_1.default, { key: product.id, product: product }));
                    }))),
                React.createElement("div", { className: "space-y-4 pr-6" },
                    React.createElement(separator_1.Separator, null),
                    React.createElement("div", { className: "space-y-1.5 pr-6 " },
                        React.createElement("div", { className: "flex" },
                            React.createElement("span", { className: "flex-1" }, "Shipping"),
                            React.createElement("span", null, "Free")),
                        React.createElement("div", { className: "flex" },
                            React.createElement("span", { className: "flex-1" }, "Trasaction Fee"),
                            React.createElement("span", null, (0, utils_1.formatPrice)(fee))),
                        React.createElement("div", { className: "flex" },
                            React.createElement("span", { className: "flex-1" }, "Total"),
                            React.createElement("span", null, (0, utils_1.formatPrice)(cartTotal + fee)))),
                    React.createElement(sheet_1.SheetFooter, null,
                        React.createElement(sheet_1.SheetTrigger, { asChild: true },
                            React.createElement(link_1.default, { href: "/cart", className: (0, button_1.buttonVariants)({ className: "w-full" }) }, "Contine to Checkout")))))) : (React.createElement("div", { className: "flex h-full flex-col items-center justify-center space-y-2" },
                React.createElement("div", { className: "relative mb-4 h-60 w-60 text-muted-foreground" },
                    React.createElement(image_1.default, { src: "/hippo-empty-cart.png", alt: "Empty cart", fill: true })),
                React.createElement("div", { className: "text-xl font-semibold" },
                    React.createElement(sheet_1.SheetTrigger, { asChild: true },
                        React.createElement(link_1.default, { href: "/products", className: (0, button_1.buttonVariants)({
                                variant: "link",
                                size: "sm",
                                className: "text-sm text-muted-foreground",
                            }) }, "Add item to your cart to checkout"))))))));
};
exports.default = Cart;
