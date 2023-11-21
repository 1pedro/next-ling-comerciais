"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var body_1 = require("@/app/body");
var AuthContext_1 = require("@/context/AuthContext");
exports.metadata = {
    title: 'FoodStiks',
    description: 'O melhor delivery da cidade!',
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
        <AuthContext_1.AuthContextProvider>

            <body_1.default>{children}</body_1.default>
        </AuthContext_1.AuthContextProvider>
        </html>);
}
exports.default = RootLayout;
