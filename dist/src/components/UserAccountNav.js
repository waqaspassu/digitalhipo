"use strict";
'use client';
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
var button_1 = require("./ui/button");
var dropdown_menu_1 = require("./ui/dropdown-menu");
var link_1 = __importDefault(require("next/link"));
var use_auth_1 = require("@/hooks/use-auth");
var UserAccountNav = function (_a) {
    var user = _a.user;
    var signout = (0, use_auth_1.useAuth)().signout;
    return (React.createElement(dropdown_menu_1.DropdownMenu, null,
        React.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, className: 'overflow-visible' },
            React.createElement(button_1.Button, { variant: 'ghost', size: 'sm', className: 'relative' }, "My account")),
        React.createElement(dropdown_menu_1.DropdownMenuContent, { className: 'bg-white w-60', align: 'end' },
            React.createElement("div", { className: 'flex items-center justify-start gap-2 p-2' },
                React.createElement("div", { className: 'flex flex-col space-y-0.5 leading-none' },
                    React.createElement("p", { className: 'font-medium text-sm text-black' }, user.email))),
            React.createElement(dropdown_menu_1.DropdownMenuSeparator, null),
            React.createElement(dropdown_menu_1.DropdownMenuItem, { asChild: true },
                React.createElement(link_1.default, { href: '/sell' }, "Seller Dashboard")),
            React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: signout, className: 'cursor-pointer' }, "Log out"))));
};
exports.default = UserAccountNav;
