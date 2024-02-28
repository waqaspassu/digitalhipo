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
var payload_utils_1 = require("@/lib/payload-utils");
var image_1 = __importDefault(require("next/image"));
var headers_1 = require("next/headers");
var get_payload_1 = require("@/get-payload");
var navigation_1 = require("next/navigation");
var config_1 = require("@/config");
var utils_1 = require("@/lib/utils");
var link_1 = __importDefault(require("next/link"));
var PaymentStatus_1 = __importDefault(require("@/components/PaymentStatus"));
var ThankYou = function (_a) {
    var searchParams = _a.searchParams;
    return __awaiter(void 0, void 0, void 0, function () {
        var orderId, nextCookies, user, payload, orders, order, orderUserId, products, orderTotal;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    orderId = searchParams.orderId;
                    nextCookies = (0, headers_1.cookies)();
                    return [4 /*yield*/, (0, payload_utils_1.getServerSideUser)(nextCookies)];
                case 1:
                    user = (_b.sent()).user;
                    return [4 /*yield*/, (0, get_payload_1.getPayloadClient)()];
                case 2:
                    payload = _b.sent();
                    return [4 /*yield*/, payload.find({
                            collection: "orders",
                            depth: 2,
                            where: {
                                id: {
                                    equals: orderId,
                                },
                            },
                        })];
                case 3:
                    orders = (_b.sent()).docs;
                    order = orders[0];
                    if (!order)
                        return [2 /*return*/, (0, navigation_1.notFound)()];
                    orderUserId = typeof order.user === "string" ? order.user : order.user.id;
                    if (orderUserId !== (user === null || user === void 0 ? void 0 : user.id)) {
                        return [2 /*return*/, (0, navigation_1.redirect)("/login?origin=thank-you?".concat(order.id))];
                    }
                    {
                        console.log({ order: order });
                    }
                    products = order.products;
                    orderTotal = products.reduce(function (total, product) { return total + product.price; }, 0);
                    return [2 /*return*/, (React.createElement("main", { className: "relative " },
                            React.createElement("div", { className: "lg:pr-4 lg:block xl:pr-12 h-80 lg:w-1/2 relative text-center m-auto left-0 top-10 right-0" },
                                React.createElement(image_1.default, { fill: true, src: "/checkout-thank-you.jpg", className: "h-full w-full object-cover object-center", alt: "thank you image" })),
                            React.createElement("div", null,
                                React.createElement("div", { className: "max-auto max-w-2xl py-16 px-4 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24" },
                                    React.createElement("div", { className: "lg:col-start-2 " },
                                        React.createElement("p", { className: "text-sm font-medium text-blue-600 text-left " },
                                            "Order Successfull",
                                            " "),
                                        React.createElement("h1", { className: "nt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, "Thanks for ordering"),
                                        order._isPaid ? (React.createElement("p", { className: "mt-2 text-base text-muted-foreground" },
                                            "Your order was processed and your assets are available to download. We've sent you reciept and order details",
                                            typeof order.user !== "string" ? (React.createElement("span", { className: "font-medium text-gray-900" }, order.user.email)) : null,
                                            ".")) : (React.createElement("p", { className: "mt-2 text-base text-muted-foreground" }, "We appreciate your order and we're currently processing it and we'll send you confirmation very soon!")),
                                        React.createElement("div", { className: "mt-16 text-sm font-medium" },
                                            React.createElement("div", { className: "text-muted-foreground " }, " Order nr."),
                                            React.createElement("div", { className: "mt-2 text-gray-900 " }, order.id),
                                            React.createElement("ul", { className: "mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground" }, order.products.map(function (product) {
                                                var _a;
                                                var lable = (_a = config_1.PRODUCT_CATEGORY.find(function (_a) {
                                                    var value = _a.value;
                                                    return value === product.category;
                                                })) === null || _a === void 0 ? void 0 : _a.label;
                                                var downloadUrl = product.product_files
                                                    .url;
                                                var image = product.images[0].image;
                                                return (React.createElement("li", { key: product.id, className: "flex space-x-6 py-6" },
                                                    React.createElement("div", { className: "relative h-24 w-24" }, typeof image !== "string" && image.url ? (React.createElement(image_1.default, { fill: true, src: image.url, alt: " ".concat(product.name, " image "), className: "flex-none rounded-md bg-gray-100 object-cover object-center" })) : null),
                                                    React.createElement("div", { className: "flex-auto flex flex-col justify-between  " },
                                                        React.createElement("div", { className: "space-y-1" },
                                                            React.createElement("h3", { className: "texxt-gray-900" }, product.name),
                                                            React.createElement("p", { className: "my-1" },
                                                                "Category : ",
                                                                lable)),
                                                        React.createElement("div", null, order._isPaid ? (React.createElement("a", { className: "text-blue-600 hover:underline hover:text-blue-400", href: downloadUrl, download: product.name }, "Download asset")) : null),
                                                        React.createElement("p", { className: "flex-none font-medium text-gray-900" }, (0, utils_1.formatPrice)(product.price)))));
                                            })),
                                            React.createElement("div", { className: "space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-muted-foreground" },
                                                React.createElement("div", { className: "flex justify-between" },
                                                    React.createElement("p", null, "Subtotal"),
                                                    React.createElement("p", { className: "text-gray-900" }, (0, utils_1.formatPrice)(orderTotal))),
                                                React.createElement("div", { className: "flex justify-between" },
                                                    React.createElement("p", null, "Transaction fee"),
                                                    React.createElement("p", { className: "text-gray-900" }, (0, utils_1.formatPrice)(1))),
                                                React.createElement("div", { className: "flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900" },
                                                    React.createElement("p", { className: "text-base " }, "total"),
                                                    React.createElement("p", { className: "text-base " }, (0, utils_1.formatPrice)(orderTotal + 1)))),
                                            React.createElement("div", null,
                                                React.createElement(PaymentStatus_1.default, { _isPaid: order._isPaid, orderEmail: order.user.email, orderId: order.id })),
                                            React.createElement("div", { className: "mt-16 border-t border-gray-100 pt-6 text-right" },
                                                React.createElement(link_1.default, { href: "/products", className: "text-sm font-medium text-blue-600 hover:text-blue-500" }, "Continue Shopping \u2192"))))))))];
            }
        });
    });
};
exports.default = ThankYou;
