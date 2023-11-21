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
var image_1 = require("next/image");
var icon_pizza_png_1 = require("../public/assets/icon_pizza.png");
var whats_png_1 = require("../public/assets/whats.png");
var link_1 = require("next/link");
var bs_1 = require("react-icons/bs");
var CartContext_1 = require("@/context/CartContext");
var recoil_1 = require("recoil");
var auth_1 = require("@/firebase/auth");
var navigation_1 = require("next/navigation");
var AuthContext_1 = require("@/context/AuthContext");
var admins = require("@/admins.json");
var Navbar = function () {
    var router = (0, navigation_1.useRouter)();
    var user = (0, AuthContext_1.useAuthContext)().user;
    function handleSignOut() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, result, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, auth_1.doSignOut)()];
                    case 1:
                        _a = _b.sent(), result = _a.result, error = _a.error;
                        return [2 /*return*/, router.push("/")];
                }
            });
        });
    }
    var items = (0, recoil_1.useRecoilState)(CartContext_1.CartContext)[0];
    return (<div className='bg-red-700 h-16 w-full flex text-white items-center justify-around gap-24 p-12 text-center'>
            <a href={"/"}>
                <div className='flex items-center justify-center '>
                    <image_1.default src={icon_pizza_png_1.default} alt="logo" width={50} height={50}/>
                    <h1 className='text-white text-4xl'>FoodStiks</h1>
                </div>
            </a>
            <div>
                <ul className='flex items-center justify-center gap-24'>
                    <li className='text-base font-bold'>
                        <link_1.default href="/">Sobre</link_1.default></li>
                    <li className='text-base font-bold'><link_1.default href="/">Cardápio</link_1.default></li>
                    <li className='text-lg font-bold'><link_1.default href="/">Serviços</link_1.default></li>

                    {user && (<li className='text-lg font-bold'><link_1.default href="/orders">Meus Pedidos</link_1.default></li>)}

                    {user && admins.includes(user.email) && (<li className='text-lg font-bold'><link_1.default href="/admin">Admin</link_1.default></li>)}
                </ul>
            </div>
            <div>
                {!user && (<link_1.default className={'bg-yellow-200 text-black rounded-2xl text-base w-32 py-2 px-4'} href="/login">Login</link_1.default>)}
                {user && (<button className={'bg-yellow-200 text-black rounded-2xl text-base w-32 py-2 px-4'} onClick={function () { return handleSignOut(); }}>Sair</button>)}
            </div>
            <div className='flex items-center justify-center gap-2'>
                <image_1.default src={whats_png_1.default} alt="" width={30}/>
                <p>000000000</p>
            </div>
            <div className='relative cursor-pointer'>
                <link_1.default href="/cart">
                    <div>
                        <bs_1.BsCart size={35}/>
                        <span className='absolute -top-2 -right-2 text[11px] bg-white h-[22px] w-[22px] rounded-full grid place-items-center text-black'>{items.length}</span>
                    </div>
                </link_1.default>
            </div>
        </div>);
};
exports.default = Navbar;
