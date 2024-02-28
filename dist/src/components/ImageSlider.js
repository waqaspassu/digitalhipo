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
var image_1 = __importDefault(require("next/image"));
var react_1 = require("swiper/react");
var modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/pagination");
var react_2 = require("react");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var ImageSlider = function (_a) {
    var _b, _c;
    var _d;
    var urls = _a.urls;
    var _e = (0, react_2.useState)(null), swiper = _e[0], setSwiper = _e[1];
    var _f = (0, react_2.useState)(0), activeIndex = _f[0], setActiveIndex = _f[1];
    var _g = (0, react_2.useState)({
        isBegning: true,
        isEnd: activeIndex === ((_d = urls.length) !== null && _d !== void 0 ? _d : 0) - 1,
    }), slidesConfig = _g[0], setSlidesConfig = _g[1];
    (0, react_2.useEffect)(function () {
        console.log({ urls: urls });
        swiper === null || swiper === void 0 ? void 0 : swiper.on("slideChange", function (_a) {
            var _b;
            var activeIndex = _a.activeIndex;
            setActiveIndex(activeIndex);
            setSlidesConfig({
                isBegning: activeIndex === 0,
                isEnd: activeIndex === ((_b = urls.length) !== null && _b !== void 0 ? _b : 0) - 1,
            });
        });
    }, [swiper, urls]);
    var activeStyle = "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
    var inActiceStyles = "hidden text-gray-400";
    return (React.createElement("div", { className: "group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl" },
        React.createElement("div", { className: "absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition" },
            React.createElement("button", { onClick: function (e) {
                    e.preventDefault();
                    swiper === null || swiper === void 0 ? void 0 : swiper.slideNext();
                }, className: (0, utils_1.cn)(activeStyle, "right-4  transition", (_b = {},
                    _b[inActiceStyles] = slidesConfig.isEnd,
                    _b["hover:bg-primary-300 text-primary-800 opacity-100"] = !slidesConfig.isEnd,
                    _b)), "aria-label": "next-image" },
                React.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4 text-zinc-700" })),
            React.createElement("button", { onClick: function (e) {
                    e.preventDefault();
                    swiper === null || swiper === void 0 ? void 0 : swiper.slidePrev();
                }, className: (0, utils_1.cn)(activeStyle, "left-4  transition", (_c = {},
                    _c[inActiceStyles] = slidesConfig.isBegning,
                    _c["hover:bg-primary-300 text-primary-800 opacity-100"] = !slidesConfig.isBegning,
                    _c)), "aria-label": "previous-image" },
                React.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4 text-zinc-700" }))),
        React.createElement(react_1.Swiper, { pagination: {
                renderBullet: function (_a) {
                    var _ = _a._, className = _a.className;
                    return "<span class=\"rounded-full transition ".concat(className, "\"></span>");
                },
            }, onSwiper: function (swiper) { return setSwiper(swiper); }, spaceBetween: 50, slidesPerView: 1, modules: [modules_1.Pagination], className: "h-full w-full" }, urls.map(function (url, index) {
            return (React.createElement(react_1.SwiperSlide, { key: index, className: "-z-10 relative w-full h-full" },
                React.createElement(image_1.default, { src: url, loading: "eager", alt: "product image category", fill: true, className: "-z-10 h-full object-cover object-center" })));
        }))));
};
exports.default = ImageSlider;
