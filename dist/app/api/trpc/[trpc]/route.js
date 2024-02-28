"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
var trpc_1 = require("@/trpc");
var fetch_1 = require("@trpc/server/adapters/fetch");
var handler = function (req) {
    (0, fetch_1.fetchRequestHandler)({
        endpoint: '/api/trpc',
        req: req,
        router: trpc_1.appRouter,
        // @ts-expect-error already passed context through milddlewere
        createContext: function () { return ({}); }
    });
};
exports.GET = handler;
exports.POST = handler;
exports.PUT = handler;
exports.DELETE = handler;
