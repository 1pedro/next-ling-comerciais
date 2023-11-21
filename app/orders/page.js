'use client';
"use strict";
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
var orders_1 = require("@/firebase/orders");
var Navbar_1 = require("@/components/Navbar");
var OrderList_1 = require("@/components/OrderList");
function Page() {
    var router = (0, navigation_1.useRouter)();
    var user = (0, AuthContext_1.useAuthContext)().user;
    var _a = react_1.default.useState([]), orders = _a[0], setOrders = _a[1];
    react_1.default.useEffect(function () {
        if (user == null)
            router.push("/");
    }, [user]);
    react_1.default.useEffect(function () {
        loadOrders(user);
        function loadOrders(user) {
            return __awaiter(this, void 0, void 0, function () {
                var orders_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(user && user.email)) return [3 /*break*/, 2];
                            return [4 /*yield*/, (0, orders_1.getOrders)(user.email)];
                        case 1:
                            orders_2 = (_a.sent()).result;
                            console.log({ orders: orders_2 });
                            if (orders_2) {
                                setOrders(orders_2);
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        }
    }, [user]);
    return (<div>
            <Navbar_1.default />


            <OrderList_1.default orders={orders}/>
        </div>);
}
exports.default = Page;
