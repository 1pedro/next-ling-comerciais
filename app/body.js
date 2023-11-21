'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var recoil_1 = require("recoil");
var react_hot_toast_1 = require("react-hot-toast");
require("./globals.css");
function Body(_a) {
    var children = _a.children;
    return (<body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <>
            <react_hot_toast_1.Toaster position='bottom-center'/>
            <recoil_1.RecoilRoot>{children}</recoil_1.RecoilRoot>
        </>
        </body>);
}
exports.default = Body;
