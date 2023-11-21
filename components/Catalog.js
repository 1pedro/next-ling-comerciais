'use client';
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var recoil_1 = require("recoil");
var CartContext_1 = require("@/context/CartContext");
var react_hot_toast_1 = require("react-hot-toast");
var CatalogItem_1 = require("@/components/CatalogItem");
var Catalog = function (_a) {
    var products = _a.products;
    var _b = (0, recoil_1.useRecoilState)(CartContext_1.CartContext), items = _b[0], setCartItems = _b[1];
    var handleAppendToItems = function (product) {
        if (items.find(function (i) { return i.id === product.id; })) {
            setCartItems(function (prevState) {
                return prevState.map(function (item) {
                    return item.id === product.id ? __assign(__assign({}, item), { quantidade: item.quantidade + 1 }) : item;
                });
            });
        }
        else {
            setCartItems(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), [product], false); });
        }
        (0, react_hot_toast_1.default)("".concat(product.name, " Adicionado ao carrinho"));
    };
    var parsedProducts = products.map(function (product) { return <CatalogItem_1.default product={product} key={product.id} appendItems={handleAppendToItems}/>; });
    return (<>
            {parsedProducts}
        </>);
};
exports.default = Catalog;
