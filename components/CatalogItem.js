"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var image_1 = require("next/image");
var helpers_1 = require("@/helpers");
function CatalogItem(_a) {
    var product = _a.product, appendItems = _a.appendItems;
    return (<div className='flex justify-center'>
            <div className='w-72 p-4 bg-yellow-200 m-12 flex flex-col'>
                <image_1.default src={product.image} alt="" width={600} height={600}/>
                <div style={{ height: '70%' }}>
                    <h1 className='text-center p-1 font-bold text-3xl'>{product.name}</h1>
                    <h3 className='text-justify'>{product.text}</h3>
                </div>
                <p className='text-center font-bold p-1'>{(0, helpers_1.NumberToReais)(product.price)}</p>
                <button className='bg-red-700 mx-auto block p-1 text-yellow-200 rounded-lg' onClick={function () { return appendItems(product); }}>
                    Adicionar compra
                </button>
            </div>
        </div>);
}
exports.default = CatalogItem;
