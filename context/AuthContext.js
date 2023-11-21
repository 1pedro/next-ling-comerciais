'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthContextProvider = exports.useAuthContext = exports.AuthContext = void 0;
var react_1 = require("react");
var auth_1 = require("firebase/auth");
var config_1 = require("../firebase/config");
exports.AuthContext = react_1.default.createContext({});
var useAuthContext = function () { return react_1.default.useContext(exports.AuthContext); };
exports.useAuthContext = useAuthContext;
var AuthContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.default.useState(null), user = _b[0], setUser = _b[1];
    var _c = react_1.default.useState(false), loading = _c[0], setLoading = _c[1];
    react_1.default.useEffect(function () {
        var unsubscribe = (0, auth_1.onAuthStateChanged)(config_1.auth, function (user) {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setLoading(false);
        });
        return function () { return unsubscribe(); };
    }, []);
    return (<exports.AuthContext.Provider value={{ user: user }}>
            {loading ? <div>Loading...</div> : children}
        </exports.AuthContext.Provider>);
};
exports.AuthContextProvider = AuthContextProvider;
