'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Navbar_1 = require("@/components/Navbar");
var recoil_1 = require("recoil");
var CartContext_1 = require("@/context/CartContext");
var CartList_1 = require("@/components/CartList");
var Page = function () {
    var _a = (0, recoil_1.useRecoilState)(CartContext_1.CartContext), items = _a[0], _ = _a[1];
    return (<div>
            <Navbar_1.default />

            <div className='container mx-auto'>
                <CartList_1.default products={items}></CartList_1.default>
            </div>
        </div>);
};
exports.default = Page;
