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
var link_1 = __importDefault(require("next/link"));
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var MaxWidthWrapper_1 = __importDefault(require("@/components/MaxWidthWrapper"));
var ProductReel_1 = __importDefault(require("@/components/ProductReel"));
var perks = [
    {
        name: "Instant Delivery",
        icon: lucide_react_1.ArrowDownToLine,
        description: "Get your assets and download them right away from here",
    },
    {
        name: "Guarenteed Quantity",
        icon: lucide_react_1.CheckCircle,
        description: "Get your assets and download them right away from here",
    },
    {
        name: "For the Planet",
        icon: lucide_react_1.Leaf,
        description: "Get your assets and download them right away from here. Restoration from the digital hippo enviroment",
    },
];
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(MaxWidthWrapper_1.default, null,
            React.createElement("div", { className: "py-20 mx-auto flex flex-col items-center max-w-3xl" },
                React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-grey-900 sm:text-6l" },
                    "Your marketplace for high-qualtiy",
                    " ",
                    React.createElement("span", { className: "text-blue-600" }, "digital assets")),
                React.createElement("p", { className: "mt-6 text-lg max-w-prose text-muted-foreground" }, "Welcome to Digitalhipo. Everything in our app is verified by our team so feel free to use"),
                React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 mt-6" },
                    React.createElement(link_1.default, { href: "/products", className: (0, button_1.buttonVariants)() }, "Browser Trending"),
                    React.createElement(button_1.Button, { variant: "ghost" }, "Our Quality Promise \u2192"))),
            React.createElement(ProductReel_1.default, { title: "Brand New", subtitle: "here is our new text so it is here", href: "/products", query: { sort: "desc", limit: 4 } })),
        React.createElement("section", { className: "border-t border-gray-200 bg-gray-50" },
            React.createElement(MaxWidthWrapper_1.default, { className: "py-20" },
                React.createElement("div", { className: "grid grid-cols-1 gap-y-12  sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0" }, perks.map(function (perk, i) { return (React.createElement("div", { key: perk.name, className: "text-center item-cemter md:flex md:item-start md:text-left lg:block lg:text-center" },
                    React.createElement("div", { className: "h-16 w-16 flex items-center justify-center m-auto rounded-full bg-blue-100 text-blue-900 " },
                        React.createElement(perk.icon, { className: "h-1/3 w-1/3" })),
                    React.createElement("div", { className: "mt-3 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6" },
                        React.createElement("h3", { className: "text-base font-medium text-grey-900" }, perk.name),
                        React.createElement("p", { className: "mt-3 text-sm text-muted-foreground" }, perk.description)))); }))))));
}
exports.default = Home;
