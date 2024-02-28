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
var button_1 = require("@/components/ui/button");
var config_1 = require("@/config");
var use_cart_1 = require("@/hooks/use-cart");
var utils_1 = require("@/lib/utils");
var client_1 = require("@/trpc/client");
var lucide_react_1 = require("lucide-react");
var image_1 = __importDefault(require("next/image"));
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Page = function () {
    var router = (0, navigation_1.useRouter)();
    var fee = 2;
    var _a = (0, use_cart_1.useCart)(), items = _a.items, removeItem = _a.removeItem;
    var _b = client_1.trpc.payment.createSession.useMutation({
        onSuccess: function (_a) {
            var url = _a.url;
            if (url)
                router.push(url);
        },
    }), createCheckoutSession = _b.mutate, isLoading = _b.isLoading;
    var productIds = items.map(function (_a) {
        var product = _a.product;
        return product.id;
    });
    var _c = (0, react_1.useState)(false), isMounted = _c[0], setIsMountd = _c[1];
    var cartTotal = items.reduce(function (total, _a) {
        var product = _a.product;
        return total + product.price;
    }, 0);
    (0, react_1.useEffect)(function () {
        setIsMountd(true);
    }, []);
    return (React.createElement("div", { className: "bg-white" },
        React.createElement("div", { className: "mx-auto mx-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8" },
            React.createElement("h1", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl " }, "Shopping Cart"),
            React.createElement("div", { className: "mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16" },
                React.createElement("div", { className: (0, utils_1.cn)("lg:col-span-7", {
                        "rounded-lg border-2 border-dashed border-zinc-200 p-12": isMounted && items.length === 0,
                    }) },
                    React.createElement("h2", { className: "sr-only" }, "Items in your shoping cart"),
                    isMounted && items.length === 0 ? (React.createElement("div", { className: "flex h-full flex-col items-center justify-center space-y-1" },
                        React.createElement("div", { "aria-hidden": "true", className: "relative mb-4 h-40 w-40 text-muted-foreground" },
                            React.createElement(image_1.default, { src: "/hippo-empty-cart.png", fill: true, loading: "eager", alt: "empty shopping" })),
                        React.createElement("h3", { className: "font-semibold text-2xl" }, "Your cart is empty"),
                        React.createElement("p", { className: "text-muted-foreground text-center" }, "Woops! .Nothing to show here yet"))) : null,
                    React.createElement("ul", { className: (0, utils_1.cn)({
                            "border-y-[1px] divide-gray-200 border-gray-300": isMounted && items.length > 0,
                        }) }, isMounted &&
                        items.map(function (_a, index) {
                            var _b;
                            var product = _a.product;
                            var label = (_b = config_1.PRODUCT_CATEGORY.find(function (c) { return c.value === (product === null || product === void 0 ? void 0 : product.category); })) === null || _b === void 0 ? void 0 : _b.label;
                            var image = product.images[0].image;
                            return (React.createElement("li", { key: product.id, className: "flex py-6 sm:py-10" },
                                React.createElement("div", { className: "flex-shrink-0" },
                                    React.createElement("div", { className: "relative h-24 w-24" }, typeof image !== "string" && image.url ? (React.createElement(image_1.default, { fill: true, src: image.url, alt: "product image", className: "h-full w-full rounded-md object-cover object-center sm:w-48" })) : null)),
                                React.createElement("div", { className: "ml-4 flex flex-col flex-1 justify-between sm:ml-6" },
                                    React.createElement("div", { className: "relative  pr-9 sm:grid sm:grid-cols-2 sm:pr-0" },
                                        React.createElement("div", null,
                                            React.createElement("div", { className: "flex justify-between" },
                                                React.createElement("h3", { className: "text-sm" },
                                                    React.createElement(link_1.default, { href: "product/".concat(product.id), className: "font-medium text-gray-700 hover:text-gray-800" }, product.name))),
                                            React.createElement("div", { className: "mt-1 flex text-sm" },
                                                React.createElement("p", { className: "text-muted-foreground" },
                                                    " ",
                                                    "Category:",
                                                    label)),
                                            React.createElement("p", { className: "mt-1 text-sm font-medium text-gray-900" }, (0, utils_1.formatPrice)(product.price))),
                                        React.createElement("div", { className: "mt-4 sm:mt-0 sm:pr-9 w-20" },
                                            React.createElement("div", { className: "absolute right-0 top-0" },
                                                React.createElement(button_1.Button, { "aria-label": "remove product", onClick: function () { return removeItem(product.id); }, variant: "ghost" },
                                                    React.createElement(lucide_react_1.X, { className: "h-5 w-5 ", "aria-hidden": "true" }))))),
                                    React.createElement("p", { className: "mt-4 flex space-x-2 text-sm text-gray-700" },
                                        React.createElement(lucide_react_1.Check, { className: "h-5 w-5 text-green-500" }),
                                        React.createElement("span", null, "Elligible for isntant delivery")))));
                        }))),
                React.createElement("section", { className: "mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p6 lg:col-span-5 lg:mt-0 lg:p-8" },
                    React.createElement("h2", { className: "text-lg font-medium text-gray-900" }, "Order summary"),
                    React.createElement("div", { className: "mt-6 space-y-4 " },
                        React.createElement("div", { className: "flex items-center justify-between " },
                            React.createElement("p", { className: "text-sm text-gray-600" }, "Subtotal"),
                            React.createElement("p", { className: "text-sm font-medium text-gray-900" }, isMounted ? ((0, utils_1.formatPrice)(cartTotal)) : (React.createElement(lucide_react_1.Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })))),
                        React.createElement("div", { className: "flex items-center justify-between border-t border-gray-200 pt-4" },
                            React.createElement("div", { className: "flex items-center text-sm text-muted-foreground" },
                                React.createElement("span", { className: "" }, "Flat transaction fee")),
                            React.createElement("div", { className: "text-sm font-medium text-gray-900" }, isMounted ? ((0, utils_1.formatPrice)(fee)) : (React.createElement(lucide_react_1.Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })))),
                        React.createElement("div", { className: "flex items-center justify-between border-t border-gray-200 pt-4" },
                            React.createElement("div", { className: "text-base font-medium text-gray-900" }, "Order total"),
                            React.createElement("div", { className: "text-base font-medium text-gray-900" }, isMounted ? ((0, utils_1.formatPrice)(cartTotal + fee)) : (React.createElement(lucide_react_1.Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }))))),
                    React.createElement("div", { className: "mt-6" },
                        React.createElement(button_1.Button, { disabled: items.length === 0 || isLoading, onClick: function () {
                                return createCheckoutSession({
                                    productIds: productIds,
                                });
                            }, className: "w-full ", size: "lg" },
                            isLoading ? (React.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin mr-1.5" })) : null,
                            "Checkout")))))));
};
exports.default = Page;
