"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "\n        <h1>Verify your email waqas here</h1>\n        <p>Click the link below to verify your email:</p>\n        <a href=\"".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, "\">Verify</a>\n        ");
            }
        }
    },
    access: {
        read: function () { return true; },
        create: function () { return true; }
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            admin: {
                condition: function (req) { return true; }
            },
            type: "select",
            options: [
                {
                    label: "Admin",
                    value: "admin",
                },
                {
                    label: "User",
                    value: "user",
                },
            ],
        },
    ],
};
