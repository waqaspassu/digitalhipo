"use strict";
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
exports.ReceiptEmailHtml = exports.ReceiptEmail = void 0;
var React = __importStar(require("react"));
var components_1 = require("@react-email/components");
var ReceiptEmail = function (_a) {
    var email = _a.email, date = _a.date, orderId = _a.orderId, products = _a.products;
    var total = products.reduce(function (acc, product) { return acc + product.price; }, 0) + 1;
    return (React.createElement(components_1.Html, null,
        React.createElement(components_1.Head, null),
        React.createElement(components_1.Preview, null, "Apple Receipt"),
        React.createElement(components_1.Body, { style: main },
            React.createElement(components_1.Container, { style: container },
                React.createElement(components_1.Section, null,
                    React.createElement(components_1.Row, null,
                        React.createElement(components_1.Column, null,
                            React.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/static/apple-logo.png"), width: "42", height: "42", alt: "Apple Logo" })),
                        React.createElement(components_1.Column, { align: "right", style: tableCell },
                            React.createElement(components_1.Text, { style: heading }, "Receipt")))),
                React.createElement(components_1.Section, null,
                    React.createElement(components_1.Text, { style: cupomText },
                        "Save 3% on all your Apple purchases with Apple Card.",
                        React.createElement("sup", { style: supStyle }, "1"),
                        " ",
                        React.createElement(components_1.Link, { href: "https://www.apple.com/apple-card" }, "Apply and use in minutes"),
                        React.createElement("sup", { style: supStyle }, "2"))),
                React.createElement(components_1.Section, { style: informationTable },
                    React.createElement(components_1.Row, { style: informationTableRow },
                        React.createElement(components_1.Column, { colSpan: 2 },
                            React.createElement(components_1.Section, null,
                                React.createElement(components_1.Row, null,
                                    React.createElement(components_1.Column, { style: informationTableColumn },
                                        React.createElement(components_1.Text, { style: informationTableLabel }, "APPLE ID"),
                                        React.createElement(components_1.Link, { style: __assign(__assign({}, informationTableValue), { color: "#15c", textDecoration: "underline" }) }, "alan.turing@gmail.com"))),
                                React.createElement(components_1.Row, null,
                                    React.createElement(components_1.Column, { style: informationTableColumn },
                                        React.createElement(components_1.Text, { style: informationTableLabel }, "INVOICE DATE"),
                                        React.createElement(components_1.Text, { style: informationTableValue }, "18 Jan 2023"))),
                                React.createElement(components_1.Row, null,
                                    React.createElement(components_1.Column, { style: informationTableColumn },
                                        React.createElement(components_1.Text, { style: informationTableLabel }, "ORDER ID"),
                                        React.createElement(components_1.Link, { style: __assign(__assign({}, informationTableValue), { color: "#15c", textDecoration: "underline" }) }, "ML4F5L8522")),
                                    React.createElement(components_1.Column, { style: informationTableColumn },
                                        React.createElement(components_1.Text, { style: informationTableLabel }, "DOCUMENT NO."),
                                        React.createElement(components_1.Text, { style: informationTableValue }, "186623754793"))))),
                        React.createElement(components_1.Column, { style: informationTableColumn, colSpan: 2 },
                            React.createElement(components_1.Text, { style: informationTableLabel }, "BILLED TO"),
                            React.createElement(components_1.Text, { style: informationTableValue }, "Visa .... 7461 (Apple Pay)"),
                            React.createElement(components_1.Text, { style: informationTableValue }, "Alan Turing"),
                            React.createElement(components_1.Text, { style: informationTableValue }, "2125 Chestnut St"),
                            React.createElement(components_1.Text, { style: informationTableValue }, "San Francisco, CA 94123"),
                            React.createElement(components_1.Text, { style: informationTableValue }, "USA")))),
                React.createElement(components_1.Section, { style: productTitleTable },
                    React.createElement(components_1.Text, { style: productsTitle }, "App Store")),
                React.createElement(components_1.Section, null,
                    React.createElement(components_1.Row, null,
                        React.createElement(components_1.Column, { style: { width: "64px" } },
                            React.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/static/apple-hbo-max-icon.jpeg"), width: "64", height: "64", alt: "HBO Max", style: productIcon })),
                        React.createElement(components_1.Column, { style: { paddingLeft: "22px" } },
                            React.createElement(components_1.Text, { style: productTitle }, "HBO Max: Stream TV & Movies"),
                            React.createElement(components_1.Text, { style: productDescription }, "HBO Max Ad-Free (Monthly)"),
                            React.createElement(components_1.Text, { style: productDescription }, "Renews Aug 20, 2023"),
                            React.createElement(components_1.Link, { href: "https://userpub.itunes.apple.com/WebObjects/MZUserPublishing.woa/wa/addUserReview?cc=us&id=1497977514&o=i&type=Subscription%20Renewal", style: productLink, "data-saferedirecturl": "https://www.google.com/url?q=https://userpub.itunes.apple.com/WebObjects/MZUserPublishing.woa/wa/addUserReview?cc%3Dus%26id%3D1497977514%26o%3Di%26type%3DSubscription%2520Renewal&source=gmail&ust=1673963081204000&usg=AOvVaw2DFCLKMo1snS-Swk5H26Z1" }, "Write a Review"),
                            React.createElement("span", { style: divisor }, "|"),
                            React.createElement(components_1.Link, { href: "https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a=1497977514&cc=us&d=683263808&o=i&p=29065684906671&pli=29092219632071&s=1", style: productLink, "data-saferedirecturl": "https://www.google.com/url?q=https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a%3D1497977514%26cc%3Dus%26d%3D683263808%26o%3Di%26p%3D29065684906671%26pli%3D29092219632071%26s%3D1&source=gmail&ust=1673963081204000&usg=AOvVaw3y47L06B2LTrL6qsmaW2Hq" }, "Report a Problem")),
                        React.createElement(components_1.Column, { style: productPriceWrapper, align: "right" },
                            React.createElement(components_1.Text, { style: productPrice }, "$14.99")))),
                React.createElement(components_1.Hr, { style: productPriceLine }),
                React.createElement(components_1.Section, { align: "right" },
                    React.createElement(components_1.Row, null,
                        React.createElement(components_1.Column, { style: tableCell, align: "right" },
                            React.createElement(components_1.Text, { style: productPriceTotal }, "TOTAL")),
                        React.createElement(components_1.Column, { style: productPriceVerticalLine }),
                        React.createElement(components_1.Column, { style: productPriceLargeWrapper },
                            React.createElement(components_1.Text, { style: productPriceLarge }, "$14.99")))),
                React.createElement(components_1.Hr, { style: productPriceLineBottom }),
                React.createElement(components_1.Section, null,
                    React.createElement(components_1.Row, null,
                        React.createElement(components_1.Column, { align: "center", style: block },
                            React.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/static/apple-card-icon.png"), width: "60", height: "17", alt: "Apple Card" })))),
                React.createElement(components_1.Section, null,
                    React.createElement(components_1.Row, null,
                        React.createElement(components_1.Column, { align: "center", style: ctaTitle },
                            React.createElement(components_1.Text, { style: ctaText }, "Save 3% on all your Apple purchases.")))),
                React.createElement(components_1.Section, null,
                    React.createElement(components_1.Row, null,
                        React.createElement(components_1.Column, { align: "center", style: walletWrapper },
                            React.createElement(components_1.Link, { href: "https://wallet.apple.com/apple-card/setup/feature/ccs?referrer=cid%3Dapy-120-100003", style: walletLink },
                                React.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/static/apple-wallet.png"), width: "28", height: "28", alt: "Apple Wallet", style: walletImage }),
                                React.createElement("span", { style: walletLinkText }, "Apply and use in minutes"))))),
                React.createElement(components_1.Hr, { style: walletBottomLine }),
                React.createElement(components_1.Text, { style: footerText }, "1. 3% savings is earned as Daily Cash and is transferred to your Apple Cash card when transactions post to your Apple Card account. If you do not have an Apple Cash card, Daily Cash can be applied by you as a credit on your statement balance. 3% is the total amount of Daily Cash earned for these purchases. See the Apple Card Customer Agreement for more details on Daily Cash and qualifying transactions."),
                React.createElement(components_1.Text, { style: footerText }, "2. Subject to credit approval."),
                React.createElement(components_1.Text, { style: footerText }, "To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with iOS or iPadOS 13.2 or later. Update to the latest version of iOS or iPadOS by going to Settings > General > Software Update. Tap Download and Install."),
                React.createElement(components_1.Text, { style: footerText }, "Available for qualifying applicants in the United States."),
                React.createElement(components_1.Text, { style: footerText }, "Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch."),
                React.createElement(components_1.Text, { style: footerText }, "If you reside in the US territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card."),
                React.createElement(components_1.Text, { style: footerTextCenter },
                    "Privacy: We use a",
                    React.createElement(components_1.Link, { href: "http://support.apple.com/kb/HT207233", style: footerLink },
                        " ",
                        "Subscriber ID",
                        " "),
                    "to provide reports to developers."),
                React.createElement(components_1.Text, { style: footerTextCenter },
                    "Get help with subscriptions and purchases.",
                    React.createElement(components_1.Link, { href: "https://support.apple.com/billing?cid=email_receipt", style: footerLink }, "Visit Apple Support.")),
                React.createElement(components_1.Text, { style: footerTextCenter },
                    "Learn how to",
                    " ",
                    React.createElement(components_1.Link, { href: "https://support.apple.com/kb/HT204030?cid=email_receipt_itunes_article_HT204030" }, "manage your password preferences"),
                    " ",
                    "for iTunes, Apple Books, and App Store purchases."),
                React.createElement(components_1.Text, { style: footerTextCenter },
                    " ",
                    "You have the option to stop receiving email receipts for your subscription renewals. If you have opted out, you can still view your receipts in your account under Purchase History. To manage receipts or to opt in again, go to",
                    " ",
                    React.createElement(components_1.Link, { href: "https://finance-app.itunes.apple.com/account/subscriptions?unsupportedRedirectUrl=https://apps.apple.com/US/invoice" }, "Account Settings.")),
                React.createElement(components_1.Section, null,
                    React.createElement(components_1.Row, null,
                        React.createElement(components_1.Column, { align: "center", style: footerIcon },
                            React.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/static/apple-logo.png"), width: "26", height: "26", alt: "Apple Card" })))),
                React.createElement(components_1.Text, { style: footerLinksWrapper },
                    React.createElement(components_1.Link, { href: "https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary?mt=8" }, "Account Settings"),
                    " ",
                    "\u2022",
                    " ",
                    React.createElement(components_1.Link, { href: "https://www.apple.com/legal/itunes/us/sales.html" }, "Terms of Sale"),
                    " ",
                    "\u2022",
                    " ",
                    React.createElement(components_1.Link, { href: "https://www.apple.com/legal/privacy/" },
                        "Privacy Policy",
                        " ")),
                React.createElement(components_1.Text, { style: footerCopyright },
                    "Copyright \u00A9 2023 Apple Inc. ",
                    React.createElement("br", null),
                    " ",
                    React.createElement(components_1.Link, { href: "https://www.apple.com/legal/" }, "All rights reserved"))))));
};
exports.ReceiptEmail = ReceiptEmail;
var ReceiptEmailHtml = function (props) {
    return (0, components_1.render)(React.createElement(exports.ReceiptEmail, __assign({}, props)), {
        pretty: true,
    });
};
exports.ReceiptEmailHtml = ReceiptEmailHtml;
var main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#ffffff",
};
var resetText = {
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
};
var container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "660px",
    maxWidth: "100%",
};
var tableCell = { display: "table-cell" };
var heading = {
    fontSize: "32px",
    fontWeight: "300",
    color: "#888888",
};
var cupomText = {
    textAlign: "center",
    margin: "36px 0 40px 0",
    fontSize: "14px",
    fontWeight: "500",
    color: "#111111",
};
var supStyle = {
    fontWeight: "300",
};
var informationTable = {
    borderCollapse: "collapse",
    borderSpacing: "0px",
    color: "rgb(51,51,51)",
    backgroundColor: "rgb(250,250,250)",
    borderRadius: "3px",
    fontSize: "12px",
};
var informationTableRow = {
    height: "46px",
};
var informationTableColumn = {
    paddingLeft: "20px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "0px 1px 1px 0px",
    height: "44px",
};
var informationTableLabel = __assign(__assign({}, resetText), { color: "rgb(102,102,102)", fontSize: "10px" });
var informationTableValue = {
    fontSize: "12px",
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
};
var productTitleTable = __assign(__assign({}, informationTable), { margin: "30px 0 15px 0", height: "24px" });
var productsTitle = {
    background: "#fafafa",
    paddingLeft: "10px",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0",
};
var productIcon = {
    margin: "0 0 0 20px",
    borderRadius: "14px",
    border: "1px solid rgba(128,128,128,0.2)",
};
var productTitle = __assign({ fontSize: "12px", fontWeight: "600" }, resetText);
var productDescription = __assign({ fontSize: "12px", color: "rgb(102,102,102)" }, resetText);
var productLink = {
    fontSize: "12px",
    color: "rgb(0,112,201)",
    textDecoration: "none",
};
var divisor = {
    marginLeft: "4px",
    marginRight: "4px",
    color: "rgb(51,51,51)",
    fontWeight: 200,
};
var productPriceTotal = {
    margin: "0",
    color: "rgb(102,102,102)",
    fontSize: "10px",
    fontWeight: "600",
    padding: "0px 30px 0px 0px",
    textAlign: "right",
};
var productPrice = {
    fontSize: "12px",
    fontWeight: "600",
    margin: "0",
};
var productPriceLarge = {
    margin: "0px 20px 0px 0px",
    fontSize: "16px",
    fontWeight: "600",
    whiteSpace: "nowrap",
    textAlign: "right",
};
var productPriceWrapper = {
    display: "table-cell",
    padding: "0px 20px 0px 0px",
    width: "100px",
    verticalAlign: "top",
};
var productPriceLine = { margin: "30px 0 0 0" };
var productPriceVerticalLine = {
    height: "48px",
    borderLeft: "1px solid",
    borderColor: "rgb(238,238,238)",
};
var productPriceLargeWrapper = { display: "table-cell", width: "90px" };
var productPriceLineBottom = { margin: "0 0 75px 0" };
var block = { display: "block" };
var ctaTitle = {
    display: "block",
    margin: "15px 0 0 0",
};
var ctaText = { fontSize: "24px", fontWeight: "500" };
var walletWrapper = { display: "table-cell", margin: "10px 0 0 0" };
var walletLink = { color: "rgb(0,126,255)", textDecoration: "none" };
var walletImage = {
    display: "inherit",
    paddingRight: "8px",
    verticalAlign: "middle",
};
var walletBottomLine = { margin: "65px 0 20px 0" };
var footerText = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    margin: "0",
    lineHeight: "auto",
    marginBottom: "16px",
};
var footerTextCenter = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    margin: "20px 0",
    lineHeight: "auto",
    textAlign: "center",
};
var footerLink = { color: "rgb(0,115,255)" };
var footerIcon = { display: "block", margin: "40px 0 0 0" };
var footerLinksWrapper = {
    margin: "8px 0 0 0",
    textAlign: "center",
    fontSize: "12px",
    color: "rgb(102,102,102)",
};
var footerCopyright = {
    margin: "25px 0 0 0",
    textAlign: "center",
    fontSize: "12px",
    color: "rgb(102,102,102)",
};
var walletLinkText = {
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "none",
};
