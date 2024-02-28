"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCredentialValidator = void 0;
var zod_1 = require("zod");
var AuthCredentialValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, { message: "Passwod must be at least 8 characters" }),
});
exports.AuthCredentialValidator = AuthCredentialValidator;
