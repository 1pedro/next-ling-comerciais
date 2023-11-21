"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Order_1 = require("./Order");
function OrderList(_a) {
    var orders = _a.orders;
    var Orders = orders.map(function (o) { return <Order_1.default key={o.id} {...o}/>; });
    return (<div className='bg-yellow-200 w-1/2 mx-auto py-5 px-6 gap-3 items-center justify-between'>
            <h1 className={"text-3xl font-bold"}>Seus Pedidos:</h1>
            {Orders}
        </div>);
}
exports.default = OrderList;
