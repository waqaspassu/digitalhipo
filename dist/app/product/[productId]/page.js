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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var AddToCartButton_1 = __importDefault(require("@/components/AddToCartButton"));
var ImageSlider_1 = __importDefault(require("@/components/ImageSlider"));
var MaxWidthWrapper_1 = __importDefault(require("@/components/MaxWidthWrapper"));
var ProductReel_1 = __importDefault(require("@/components/ProductReel"));
var config_1 = require("@/config");
var get_payload_1 = require("@/get-payload");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var BREADCRUMBS = [
    {
        id: 1,
        name: "Home",
        href: "/",
        active: true,
    },
    {
        id: 2,
        name: "Products",
        href: "/products",
        active: false,
    },
];
var Page = function (_a) {
    var params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        var productId, payload, Products, product, lable, validUrls;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    productId = params.productId;
                    return [4 /*yield*/, (0, get_payload_1.getPayloadClient)()];
                case 1:
                    payload = _c.sent();
                    return [4 /*yield*/, payload.find({
                            collection: "products",
                            limit: 1,
                            where: {
                                id: {
                                    equals: productId,
                                },
                                approvedForSale: {
                                    equals: "approved",
                                },
                            },
                        })];
                case 2:
                    Products = (_c.sent()).docs;
                    product = Products[0];
                    if (!product)
                        return [2 /*return*/, (0, navigation_1.notFound)()];
                    lable = (_b = config_1.PRODUCT_CATEGORY.find(function (_a) {
                        var value = _a.value;
                        return value === product.category;
                    })) === null || _b === void 0 ? void 0 : _b.label;
                    validUrls = product === null || product === void 0 ? void 0 : product.images.map(function (_a) {
                        var image = _a.image;
                        return (typeof image === "string" ? image : image === null || image === void 0 ? void 0 : image.url);
                    }).filter(Boolean);
                    return [2 /*return*/, (React.createElement(MaxWidthWrapper_1.default, { className: "bg-white" },
                            React.createElement("div", { className: "bg-white " },
                                React.createElement("div", { className: "mx-auto max-w-2xl  px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-col-2 lg:gap-x-8 lg:px-8" },
                                    React.createElement("div", { className: " lg:max-w-lg lg:self-end" },
                                        React.createElement("ol", { className: "flex items-center space-x-2" }, BREADCRUMBS.map(function (item, index) {
                                            return (React.createElement("li", { key: item.id },
                                                React.createElement("div", { className: "flex items-center text-sm " },
                                                    React.createElement(link_1.default, { href: item.href, className: "font-medium text-sm text-muted-foreground hover:text-grey-900" }, item.name),
                                                    index !== BREADCRUMBS.length - 1 ? (React.createElement("svg", { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", className: "ml-2 h-5 w-5 flex-shrink-0 text-gray-300" },
                                                        React.createElement("path", { d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z" }))) : null)));
                                        })),
                                        React.createElement("div", { className: "mt-4" },
                                            React.createElement("h1", { className: "text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl" }, product.name)),
                                        React.createElement("section", { className: "mt-4" },
                                            React.createElement("div", { className: "flex items-center" },
                                                React.createElement("p", null, (0, utils_1.formatPrice)(product.price)),
                                                React.createElement("div", { className: "ml-4 border-1 text-muted-foreground border-gray-400" }, lable)),
                                            React.createElement("div", { className: "mt-4 space-y-6" },
                                                React.createElement("p", { className: "text-base text-muted-foreground" }, product.description)),
                                            React.createElement("div", { className: "mt-6 flex items-center" },
                                                React.createElement(lucide_react_1.Check, { "aria-hidden": "true", className: "h-5 w-5 flex-shrink-0 text-green-500" }),
                                                React.createElement("p", { className: "ml-2 text-sm text-muted-foreground " }, "Eligible for instant delivery")))),
                                    React.createElement("div", { className: "mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center overflow-hidden" },
                                        React.createElement("div", { className: "aspect-square rounded-lg" },
                                            React.createElement(ImageSlider_1.default, { urls: validUrls }))),
                                    React.createElement("div", { className: "mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start" },
                                        React.createElement("div", null,
                                            React.createElement("div", { className: "mt-10" },
                                                React.createElement(AddToCartButton_1.default, { product: product })),
                                            React.createElement("div", { className: "mt-6 self-center" },
                                                React.createElement("div", { className: "group inline-flex text-sm text-medium" },
                                                    React.createElement(lucide_react_1.Shield, { "aria-hidden": "true", className: "mr-2 h-5 w-5 flex-shrink-0 text-gray-400" }),
                                                    React.createElement("span", { className: "text-muted-foreground text-gray-700" }, "30 Day return Gurantee"))))))),
                            React.createElement(ProductReel_1.default, { href: "/products", query: { category: product.category, limit: 4 }, title: "similar ".concat(lable, " "), subtitle: "Browse similar high quality ".concat(lable) })))];
            }
        });
    });
};
exports.default = Page;
