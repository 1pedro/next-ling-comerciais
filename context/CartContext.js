'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartContext = void 0;
var recoil_1 = require("recoil");
exports.CartContext = (0, recoil_1.atom)({
    key: "carroSate",
    default: []
});
