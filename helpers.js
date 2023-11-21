"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocaleDateString = exports.NumberToReais = void 0;
var NumberToReais = function (value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};
exports.NumberToReais = NumberToReais;
var toLocaleDateString = function (date) {
    return new Date(date).toLocaleDateString('pt-br');
};
exports.toLocaleDateString = toLocaleDateString;
