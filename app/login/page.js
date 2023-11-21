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
var auth_1 = require("@/firebase/auth");
var navigation_1 = require("next/navigation");
var Navbar_1 = require("@/components/Navbar");
var Main_1 = require("@/components/Main");
var admins = require("@/admins.json");
function Page() {
    var _this = this;
    var _a = react_1.default.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.default.useState(''), password = _b[0], setPassword = _b[1];
    var router = (0, navigation_1.useRouter)();
    var handleFormLogin = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var _a, result, error, user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, (0, auth_1.login)(email, password)];
                case 1:
                    _a = _b.sent(), result = _a.result, error = _a.error;
                    user = (result || {}).user;
                    if (error) {
                        return [2 /*return*/, console.log(error)];
                    }
                    if (user && user.email && admins.includes(user.email)) {
                        return [2 /*return*/, router.push("/admin")];
                    }
                    return [2 /*return*/, router.push("/user")];
            }
        });
    }); };
    var handleFormSignUp = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var _a, result, error, user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, (0, auth_1.register)(email, password)];
                case 1:
                    _a = _b.sent(), result = _a.result, error = _a.error;
                    user = (result || {}).user;
                    if (error) {
                        return [2 /*return*/, console.log(error)];
                    }
                    if (user && user.email && admins.includes(user.email)) {
                        return [2 /*return*/, router.push("/admin")];
                    }
                    return [2 /*return*/, router.push("/user")];
            }
        });
    }); };
    return (<div>
            <Navbar_1.default />

            <Main_1.default>

                <div className={"flex"}>
                    <div className="w-1/2 mx-auto p-10">
                        <h1 className="mt-40 font-bold text-2xl text-zinc-700">Login</h1>
                        <form onSubmit={handleFormLogin} className="form">
                            <label htmlFor="email">
                                <p className={"font-bold text-zinc-700"}>Email</p>
                                <input onChange={function (e) { return setEmail(e.target.value); }} required type="email" name="email" id="email" placeholder="example@mail.com" className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>
                            <label htmlFor="password" className={"w-full"}>
                                <p className={"font-bold text-zinc-700"}>Senha</p>
                                <input onChange={function (e) { return setPassword(e.target.value); }} required type="password" name="password" id="password" placeholder="senha" className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>
                            <button type="submit" className={"bg-red-700 rounded-lg py-2 px-4 block w-full text-white font-bold mt-2"}>Entrar
                            </button>
                        </form>
                    </div>

                    <div className="w-1/2 mx-auto p-10">
                        <h1 className="mt-40 font-bold text-2xl text-zinc-700">Registrar</h1>
                        <form onSubmit={handleFormSignUp} className="form">
                            <label htmlFor="email">
                                <p className={"font-bold text-zinc-700"}>Email</p>
                                <input onChange={function (e) { return setEmail(e.target.value); }} required type="email" name="email" id="email" placeholder="example@mail.com" className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>
                            <label htmlFor="password">
                                <p className={"font-bold text-zinc-700"}>Password</p>
                                <input onChange={function (e) { return setPassword(e.target.value); }} required type="password" name="password" id="password" placeholder="password" className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>

                            <button type="submit" className={"bg-red-700 rounded-lg py-2 px-4 block w-full text-white font-bold mt-2"}>Criar
                                Conta
                            </button>
                        </form>
                    </div>
                </div>

            </Main_1.default>
        </div>);
}
exports.default = Page;
