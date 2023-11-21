"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var image_1 = require("next/image");
var helpers_1 = require("@/helpers");
function CartItem(_a) {
    var product = _a.product;
    var name = product.name, image = product.image, quantidade = product.quantidade, price = product.price;
    return (<div>
            <div className='bg-yellow-200 mx-auto py-5 px-6 flex gap-3 items-center justify-between border-b-2 border-dashed border-red-500'>
                <image_1.default width={200} height={300} src={image} alt="" className='p-2'/>
                <div>
                    <div className='font-bold text-2xl'>{name}</div>
                    <div>x{quantidade}</div>
                </div>
                <div className='text-3xl font-bold'> {(0, helpers_1.NumberToReais)(price * quantidade)}</div>
            </div>
        </div>);
}
exports.default = CartItem;
