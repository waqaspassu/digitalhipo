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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var client_1 = require("@/trpc/client");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var PaymentStatus = function (_a) {
    var orderEmail = _a.orderEmail, orderId = _a.orderId, _isPaid = _a._isPaid;
    var router = (0, navigation_1.useRouter)();
    var data = client_1.trpc.payment.pollOrderStatus.useQuery({ orderId: orderId }, {
        enabled: _isPaid === false,
        refetchInterval: function (data) { return ((data === null || data === void 0 ? void 0 : data._isPaid) ? false : 1000); },
    }).data;
    (0, react_1.useEffect)(function () {
        if (data === null || data === void 0 ? void 0 : data._isPaid)
            router.refresh();
    }, [data === null || data === void 0 ? void 0 : data._isPaid, router]);
    return (React.createElement("div", { className: "mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600" },
        React.createElement("div", null,
            React.createElement("p", { className: "font-medium text-gray-900" }, "Shipping to"),
            React.createElement("p", null, orderEmail)),
        React.createElement("div", null,
            React.createElement("p", { className: "font-medium text-gray-900" }, "Order Status"),
            React.createElement("p", { className: "font-medium text-gray-900" }, _isPaid ? "Payment Successful" : "Pending Payment"))));
};
exports.default = PaymentStatus;
