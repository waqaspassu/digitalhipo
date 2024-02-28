"use strict";
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_query_1 = require("@tanstack/react-query");
var client_1 = require("@/trpc/client");
var client_2 = require("@trpc/client");
var Providers = function (_a) {
    var children = _a.children;
    var queryClient = (0, react_1.useState)(function () { return new react_query_1.QueryClient(); })[0];
    var trpcClient = (0, react_1.useState)(function () { return client_1.trpc.createClient({
        links: [(0, client_2.httpBatchLink)({
                url: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/api/trpc"),
                fetch: function (url, options) {
                    return fetch(url, __assign(__assign({}, options), { credentials: 'include' }));
                }
            })]
    }); })[0];
    return (React.createElement(client_1.trpc.Provider, { client: trpcClient, queryClient: queryClient },
        React.createElement(react_query_1.QueryClientProvider, { client: queryClient }, children)));
};
exports.default = Providers;
