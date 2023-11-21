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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var AuthContext_1 = require("@/context/AuthContext");
var Navbar_1 = require("@/components/Navbar");
var products_1 = require("@/firebase/products");
var helpers_1 = require("@/helpers");
function Page() {
    var _this = this;
    var user = (0, AuthContext_1.useAuthContext)().user;
    var router = (0, navigation_1.useRouter)();
    var _a = (0, react_1.useState)([]), _b = _a[0], products = _b === void 0 ? [] : _b, setProducts = _a[1];
    console.log(products);
    react_1.default.useEffect(function () {
        if (user == null)
            router.push("/");
    }, [user]);
    var handleUpdateProductAvailability = function (id, available) { return __awaiter(_this, void 0, void 0, function () {
        var _a, result, error, newProducts;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, products_1.setAvailability)(id, available)];
                case 1:
                    _a = _b.sent(), result = _a.result, error = _a.error;
                    if (!error) {
                        newProducts = products.map(function (product) {
                            if (product.id === id) {
                                return __assign(__assign({}, product), { available: available });
                            }
                            return product;
                        });
                        setProducts(newProducts);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        function fetchProducts() {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, products_1.getAllProducts)()];
                        case 1:
                            data = (_a.sent()).result;
                            setProducts(data);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchProducts();
    }, []);
    var productElement = products && products.map(function (product) { return (<div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mt-5" key={product.id}>
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={product.image} alt=""/>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                            {product.name}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                            {product.text}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <a href="#">
                            <span className="sr-only">{product.name}</span>
                            <img className="h-10 w-10 rounded-full" src={product.image} alt=""/>
                        </a>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                                {product.name}
                            </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">
                                {(0, helpers_1.NumberToReais)(product.price)}
                            </time>
                        </div>
                    </div>
                </div>
                <label htmlFor="available" className={"mt-5"}>Disponivel?
                    <input type={"checkbox"} className={"ml-3"} checked={product.available} onChange={function () { return handleUpdateProductAvailability(product.id, !product.available); }}/>
                </label>
            </div>
        </div>); });
    return (<AuthContext_1.AuthContextProvider>
            <>
                <Navbar_1.default />
                <div className='bg-yellow-200 w-1/2 mx-auto py-5 px-6 gap-3 items-center justify-between'>
                    <h1 className={"text-3xl font-bold"}>Gestão de Produtos</h1>

                    <div className={"flex flex-col"}>

                        {productElement}
                    </div>

                </div>
            </>
        </AuthContext_1.AuthContextProvider>);
}
exports.default = Page;
