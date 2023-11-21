'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var image_1 = require("next/image");
var foodstips_back_jpg_1 = require("../public/assets/foodstips-back.jpg");
var Hero = function () {
    return <div className='w-full flex relatuive pt-px'>
        <div className='w-6/12 text-center p-6 '>
            <h1 className='text-5xl p-6 font-bold'>FoodStiks</h1>
            <p className=' text-3xl text-justify font-bold'>A lunmeal oferece a melhor experiência aos seus clientes,
                pois nela você pode experimentar diversos sabores variados de pizza com preços super acesssíveis para
                toda a sua família!</p>
            <button className='mt-10 mb-18 bg-red-700 text-white text-3xl p-4 rounded-2xl '>Faça seu pedido!</button>
        </div>
        <div className='w-6/12'>
            <image_1.default src={foodstips_back_jpg_1.default} alt="" width={690} height={800}/>
        </div>
    </div>;
};
exports.default = Hero;
