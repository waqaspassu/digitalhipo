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
var link_1 = __importDefault(require("next/link"));
var ProductsListings_1 = __importDefault(require("./ProductsListings"));
var FALLBACK_LIMIT = 4;
var ProductReel = function (props) {
    var _a, _b;
    var title = props.title, subtitle = props.subtitle, href = props.href, query = props.query;
    var _c = client_1.trpc.getInfiniteProducts.useInfiniteQuery({
        limit: (_a = query.limit) !== null && _a !== void 0 ? _a : FALLBACK_LIMIT,
        query: query,
    }, {
        getNextPageParam: function (lastPage) { return lastPage.nextPage; },
    }), queryData = _c.data, isLoading = _c.isLoading;
    var products = queryData === null || queryData === void 0 ? void 0 : queryData.pages.flatMap(function (page) { return page.items; });
    var map = [];
    if (products && products.length) {
        map = products;
    }
    else if (isLoading) {
        map = new Array((_b = query.limit) !== null && _b !== void 0 ? _b : FALLBACK_LIMIT).fill(null);
    }
    return (React.createElement("section", { className: "py-20" },
        React.createElement("div", { className: "md:flex md:items-center md:justify-between mb-4" },
            React.createElement("div", { className: "max-w-2xl px-4 lg:max-w-4xl lg:px-0" },
                title ? (React.createElement("h1", { className: "text-2xl font-bold text-gray-900 sm:text-3xl" }, title)) : null,
                subtitle ? (React.createElement("p", { className: "mt-2 text-sm text-muted-foreground" }, subtitle)) : null),
            href ? (React.createElement(link_1.default, { className: "hidden text-sm font-medium text-blue-500 md:block", href: href },
                "Shop the collection ",
                React.createElement("span", { "aria-hidden": "true" }, "\u2192"))) : null),
        React.createElement("div", { className: "relative" },
            React.createElement("div", { className: "mt-6 flex items-center w-full" },
                React.createElement("div", { className: "w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-10 lg:gap-x-8" }, map.map(function (product, i) {
                    return React.createElement(ProductsListings_1.default, { key: i, product: product, index: i });
                }))))));
};
exports.default = ProductReel;
