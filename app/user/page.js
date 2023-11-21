'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var AuthContext_1 = require("@/context/AuthContext");
var Navbar_1 = require("@/components/Navbar");
var recoil_1 = require("recoil");
var CartContext_1 = require("@/context/CartContext");
var CartList_1 = require("@/components/CartList");
function Page() {
    var user = (0, AuthContext_1.useAuthContext)().user;
    var router = (0, navigation_1.useRouter)();
    var _a = (0, recoil_1.useRecoilState)(CartContext_1.CartContext), items = _a[0], _ = _a[1];
    react_1.default.useEffect(function () {
        if (user == null)
            router.push("/");
    }, [user]);
    return (<AuthContext_1.AuthContextProvider>
            <>
                <Navbar_1.default />
                {items.length ? (<h1>Falta pouco para confirmamos seu pedido!</h1>) : ""}
                <CartList_1.default products={items}/>
            </>
        </AuthContext_1.AuthContextProvider>);
}
exports.default = Page;
