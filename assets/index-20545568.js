(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
        const i = {};
        return (
            l.integrity && (i.integrity = l.integrity),
            l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : l.crossOrigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i);
    }
})();
function Ea(t) {
    return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, "default")
        ? t.default
        : t;
}
function Ed(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
        var n = function r() {
            return this instanceof r
                ? Reflect.construct(e, arguments, this.constructor)
                : e.apply(this, arguments);
        };
        n.prototype = e.prototype;
    } else n = {};
    return (
        Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.keys(t).forEach(function (r) {
            var l = Object.getOwnPropertyDescriptor(t, r);
            Object.defineProperty(
                n,
                r,
                l.get
                    ? l
                    : {
                          enumerable: !0,
                          get: function () {
                              return t[r];
                          },
                      }
            );
        }),
        n
    );
}
var _a = { exports: {} },
    Il = {},
    Pa = { exports: {} },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = Symbol.for("react.element"),
    _d = Symbol.for("react.portal"),
    Pd = Symbol.for("react.fragment"),
    Nd = Symbol.for("react.strict_mode"),
    Od = Symbol.for("react.profiler"),
    Rd = Symbol.for("react.provider"),
    zd = Symbol.for("react.context"),
    jd = Symbol.for("react.forward_ref"),
    Ld = Symbol.for("react.suspense"),
    Td = Symbol.for("react.memo"),
    Md = Symbol.for("react.lazy"),
    Zs = Symbol.iterator;
function Dd(t) {
    return t === null || typeof t != "object"
        ? null
        : ((t = (Zs && t[Zs]) || t["@@iterator"]),
          typeof t == "function" ? t : null);
}
var Na = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Oa = Object.assign,
    Ra = {};
function gn(t, e, n) {
    (this.props = t),
        (this.context = e),
        (this.refs = Ra),
        (this.updater = n || Na);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, t, e, "setState");
};
gn.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function za() {}
za.prototype = gn.prototype;
function Ko(t, e, n) {
    (this.props = t),
        (this.context = e),
        (this.refs = Ra),
        (this.updater = n || Na);
}
var Yo = (Ko.prototype = new za());
Yo.constructor = Ko;
Oa(Yo, gn.prototype);
Yo.isPureReactComponent = !0;
var qs = Array.isArray,
    ja = Object.prototype.hasOwnProperty,
    Go = { current: null },
    La = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ta(t, e, n) {
    var r,
        l = {},
        i = null,
        o = null;
    if (e != null)
        for (r in (e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (i = "" + e.key),
        e))
            ja.call(e, r) && !La.hasOwnProperty(r) && (l[r] = e[r]);
    var s = arguments.length - 2;
    if (s === 1) l.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
        l.children = u;
    }
    if (t && t.defaultProps)
        for (r in ((s = t.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
    return {
        $$typeof: dr,
        type: t,
        key: i,
        ref: o,
        props: l,
        _owner: Go.current,
    };
}
function Ad(t, e) {
    return {
        $$typeof: dr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner,
    };
}
function Xo(t) {
    return typeof t == "object" && t !== null && t.$$typeof === dr;
}
function Id(t) {
    var e = { "=": "=0", ":": "=2" };
    return (
        "$" +
        t.replace(/[=:]/g, function (n) {
            return e[n];
        })
    );
}
var bs = /\/+/g;
function si(t, e) {
    return typeof t == "object" && t !== null && t.key != null
        ? Id("" + t.key)
        : e.toString(36);
}
function Gr(t, e, n, r, l) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (t.$$typeof) {
                    case dr:
                    case _d:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = t),
            (l = l(o)),
            (t = r === "" ? "." + si(o, 0) : r),
            qs(l)
                ? ((n = ""),
                  t != null && (n = t.replace(bs, "$&/") + "/"),
                  Gr(l, e, n, "", function (a) {
                      return a;
                  }))
                : l != null &&
                  (Xo(l) &&
                      (l = Ad(
                          l,
                          n +
                              (!l.key || (o && o.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(bs, "$&/") + "/") +
                              t
                      )),
                  e.push(l)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), qs(t)))
        for (var s = 0; s < t.length; s++) {
            i = t[s];
            var u = r + si(i, s);
            o += Gr(i, e, n, u, l);
        }
    else if (((u = Dd(t)), typeof u == "function"))
        for (t = u.call(t), s = 0; !(i = t.next()).done; )
            (i = i.value), (u = r + si(i, s++)), (o += Gr(i, e, n, u, l));
    else if (i === "object")
        throw (
            ((e = String(t)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return o;
}
function kr(t, e, n) {
    if (t == null) return t;
    var r = [],
        l = 0;
    return (
        Gr(t, r, "", "", function (i) {
            return e.call(n, i, l++);
        }),
        r
    );
}
function $d(t) {
    if (t._status === -1) {
        var e = t._result;
        (e = e()),
            e.then(
                function (n) {
                    (t._status === 0 || t._status === -1) &&
                        ((t._status = 1), (t._result = n));
                },
                function (n) {
                    (t._status === 0 || t._status === -1) &&
                        ((t._status = 2), (t._result = n));
                }
            ),
            t._status === -1 && ((t._status = 0), (t._result = e));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
}
var fe = { current: null },
    Xr = { transition: null },
    Fd = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Xr,
        ReactCurrentOwner: Go,
    };
L.Children = {
    map: kr,
    forEach: function (t, e, n) {
        kr(
            t,
            function () {
                e.apply(this, arguments);
            },
            n
        );
    },
    count: function (t) {
        var e = 0;
        return (
            kr(t, function () {
                e++;
            }),
            e
        );
    },
    toArray: function (t) {
        return (
            kr(t, function (e) {
                return e;
            }) || []
        );
    },
    only: function (t) {
        if (!Xo(t))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return t;
    },
};
L.Component = gn;
L.Fragment = Pd;
L.Profiler = Od;
L.PureComponent = Ko;
L.StrictMode = Nd;
L.Suspense = Ld;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fd;
L.cloneElement = function (t, e, n) {
    if (t == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                t +
                "."
        );
    var r = Oa({}, t.props),
        l = t.key,
        i = t.ref,
        o = t._owner;
    if (e != null) {
        if (
            (e.ref !== void 0 && ((i = e.ref), (o = Go.current)),
            e.key !== void 0 && (l = "" + e.key),
            t.type && t.type.defaultProps)
        )
            var s = t.type.defaultProps;
        for (u in e)
            ja.call(e, u) &&
                !La.hasOwnProperty(u) &&
                (r[u] = e[u] === void 0 && s !== void 0 ? s[u] : e[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
        r.children = s;
    }
    return { $$typeof: dr, type: t.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (t) {
    return (
        (t = {
            $$typeof: zd,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (t.Provider = { $$typeof: Rd, _context: t }),
        (t.Consumer = t)
    );
};
L.createElement = Ta;
L.createFactory = function (t) {
    var e = Ta.bind(null, t);
    return (e.type = t), e;
};
L.createRef = function () {
    return { current: null };
};
L.forwardRef = function (t) {
    return { $$typeof: jd, render: t };
};
L.isValidElement = Xo;
L.lazy = function (t) {
    return { $$typeof: Md, _payload: { _status: -1, _result: t }, _init: $d };
};
L.memo = function (t, e) {
    return { $$typeof: Td, type: t, compare: e === void 0 ? null : e };
};
L.startTransition = function (t) {
    var e = Xr.transition;
    Xr.transition = {};
    try {
        t();
    } finally {
        Xr.transition = e;
    }
};
L.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (t, e) {
    return fe.current.useCallback(t, e);
};
L.useContext = function (t) {
    return fe.current.useContext(t);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (t) {
    return fe.current.useDeferredValue(t);
};
L.useEffect = function (t, e) {
    return fe.current.useEffect(t, e);
};
L.useId = function () {
    return fe.current.useId();
};
L.useImperativeHandle = function (t, e, n) {
    return fe.current.useImperativeHandle(t, e, n);
};
L.useInsertionEffect = function (t, e) {
    return fe.current.useInsertionEffect(t, e);
};
L.useLayoutEffect = function (t, e) {
    return fe.current.useLayoutEffect(t, e);
};
L.useMemo = function (t, e) {
    return fe.current.useMemo(t, e);
};
L.useReducer = function (t, e, n) {
    return fe.current.useReducer(t, e, n);
};
L.useRef = function (t) {
    return fe.current.useRef(t);
};
L.useState = function (t) {
    return fe.current.useState(t);
};
L.useSyncExternalStore = function (t, e, n) {
    return fe.current.useSyncExternalStore(t, e, n);
};
L.useTransition = function () {
    return fe.current.useTransition();
};
L.version = "18.2.0";
Pa.exports = L;
var pr = Pa.exports;
const Ud = Ea(pr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd = pr,
    Wd = Symbol.for("react.element"),
    Vd = Symbol.for("react.fragment"),
    Hd = Object.prototype.hasOwnProperty,
    Qd =
        Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ma(t, e, n) {
    var r,
        l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n),
        e.key !== void 0 && (i = "" + e.key),
        e.ref !== void 0 && (o = e.ref);
    for (r in e) Hd.call(e, r) && !Kd.hasOwnProperty(r) && (l[r] = e[r]);
    if (t && t.defaultProps)
        for (r in ((e = t.defaultProps), e)) l[r] === void 0 && (l[r] = e[r]);
    return {
        $$typeof: Wd,
        type: t,
        key: i,
        ref: o,
        props: l,
        _owner: Qd.current,
    };
}
Il.Fragment = Vd;
Il.jsx = Ma;
Il.jsxs = Ma;
_a.exports = Il;
var y = _a.exports,
    Ii = {},
    Da = { exports: {} },
    ke = {},
    Aa = { exports: {} },
    Ia = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
    function e(O, z) {
        var j = O.length;
        O.push(z);
        e: for (; 0 < j; ) {
            var Y = (j - 1) >>> 1,
                q = O[Y];
            if (0 < l(q, z)) (O[Y] = z), (O[j] = q), (j = Y);
            else break e;
        }
    }
    function n(O) {
        return O.length === 0 ? null : O[0];
    }
    function r(O) {
        if (O.length === 0) return null;
        var z = O[0],
            j = O.pop();
        if (j !== z) {
            O[0] = j;
            e: for (var Y = 0, q = O.length, xr = q >>> 1; Y < xr; ) {
                var Et = 2 * (Y + 1) - 1,
                    oi = O[Et],
                    _t = Et + 1,
                    Sr = O[_t];
                if (0 > l(oi, j))
                    _t < q && 0 > l(Sr, oi)
                        ? ((O[Y] = Sr), (O[_t] = j), (Y = _t))
                        : ((O[Y] = oi), (O[Et] = j), (Y = Et));
                else if (_t < q && 0 > l(Sr, j))
                    (O[Y] = Sr), (O[_t] = j), (Y = _t);
                else break e;
            }
        }
        return z;
    }
    function l(O, z) {
        var j = O.sortIndex - z.sortIndex;
        return j !== 0 ? j : O.id - z.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        t.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            s = o.now();
        t.unstable_now = function () {
            return o.now() - s;
        };
    }
    var u = [],
        a = [],
        p = 1,
        m = null,
        h = 3,
        v = !1,
        w = !1,
        S = !1,
        k = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(O) {
        for (var z = n(a); z !== null; ) {
            if (z.callback === null) r(a);
            else if (z.startTime <= O)
                r(a), (z.sortIndex = z.expirationTime), e(u, z);
            else break;
            z = n(a);
        }
    }
    function g(O) {
        if (((S = !1), d(O), !w))
            if (n(u) !== null) (w = !0), li(C);
            else {
                var z = n(a);
                z !== null && ii(g, z.startTime - O);
            }
    }
    function C(O, z) {
        (w = !1), S && ((S = !1), f(N), (N = -1)), (v = !0);
        var j = h;
        try {
            for (
                d(z), m = n(u);
                m !== null && (!(m.expirationTime > z) || (O && !le()));

            ) {
                var Y = m.callback;
                if (typeof Y == "function") {
                    (m.callback = null), (h = m.priorityLevel);
                    var q = Y(m.expirationTime <= z);
                    (z = t.unstable_now()),
                        typeof q == "function"
                            ? (m.callback = q)
                            : m === n(u) && r(u),
                        d(z);
                } else r(u);
                m = n(u);
            }
            if (m !== null) var xr = !0;
            else {
                var Et = n(a);
                Et !== null && ii(g, Et.startTime - z), (xr = !1);
            }
            return xr;
        } finally {
            (m = null), (h = j), (v = !1);
        }
    }
    var _ = !1,
        E = null,
        N = -1,
        M = 5,
        R = -1;
    function le() {
        return !(t.unstable_now() - R < M);
    }
    function Ke() {
        if (E !== null) {
            var O = t.unstable_now();
            R = O;
            var z = !0;
            try {
                z = E(!0, O);
            } finally {
                z ? xn() : ((_ = !1), (E = null));
            }
        } else _ = !1;
    }
    var xn;
    if (typeof c == "function")
        xn = function () {
            c(Ke);
        };
    else if (typeof MessageChannel < "u") {
        var Js = new MessageChannel(),
            Cd = Js.port2;
        (Js.port1.onmessage = Ke),
            (xn = function () {
                Cd.postMessage(null);
            });
    } else
        xn = function () {
            k(Ke, 0);
        };
    function li(O) {
        (E = O), _ || ((_ = !0), xn());
    }
    function ii(O, z) {
        N = k(function () {
            O(t.unstable_now());
        }, z);
    }
    (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (O) {
            O.callback = null;
        }),
        (t.unstable_continueExecution = function () {
            w || v || ((w = !0), li(C));
        }),
        (t.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (M = 0 < O ? Math.floor(1e3 / O) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
            return h;
        }),
        (t.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (t.unstable_next = function (O) {
            switch (h) {
                case 1:
                case 2:
                case 3:
                    var z = 3;
                    break;
                default:
                    z = h;
            }
            var j = h;
            h = z;
            try {
                return O();
            } finally {
                h = j;
            }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (O, z) {
            switch (O) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    O = 3;
            }
            var j = h;
            h = O;
            try {
                return z();
            } finally {
                h = j;
            }
        }),
        (t.unstable_scheduleCallback = function (O, z, j) {
            var Y = t.unstable_now();
            switch (
                (typeof j == "object" && j !== null
                    ? ((j = j.delay),
                      (j = typeof j == "number" && 0 < j ? Y + j : Y))
                    : (j = Y),
                O)
            ) {
                case 1:
                    var q = -1;
                    break;
                case 2:
                    q = 250;
                    break;
                case 5:
                    q = 1073741823;
                    break;
                case 4:
                    q = 1e4;
                    break;
                default:
                    q = 5e3;
            }
            return (
                (q = j + q),
                (O = {
                    id: p++,
                    callback: z,
                    priorityLevel: O,
                    startTime: j,
                    expirationTime: q,
                    sortIndex: -1,
                }),
                j > Y
                    ? ((O.sortIndex = j),
                      e(a, O),
                      n(u) === null &&
                          O === n(a) &&
                          (S ? (f(N), (N = -1)) : (S = !0), ii(g, j - Y)))
                    : ((O.sortIndex = q), e(u, O), w || v || ((w = !0), li(C))),
                O
            );
        }),
        (t.unstable_shouldYield = le),
        (t.unstable_wrapCallback = function (O) {
            var z = h;
            return function () {
                var j = h;
                h = z;
                try {
                    return O.apply(this, arguments);
                } finally {
                    h = j;
                }
            };
        });
})(Ia);
Aa.exports = Ia;
var Yd = Aa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a = pr,
    Se = Yd;
function x(t) {
    for (
        var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
            n = 1;
        n < arguments.length;
        n++
    )
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Fa = new Set(),
    Qn = {};
function $t(t, e) {
    sn(t, e), sn(t + "Capture", e);
}
function sn(t, e) {
    for (Qn[t] = e, t = 0; t < e.length; t++) Fa.add(e[t]);
}
var qe = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    $i = Object.prototype.hasOwnProperty,
    Gd =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    eu = {},
    tu = {};
function Xd(t) {
    return $i.call(tu, t)
        ? !0
        : $i.call(eu, t)
        ? !1
        : Gd.test(t)
        ? (tu[t] = !0)
        : ((eu[t] = !0), !1);
}
function Jd(t, e, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((t = t.toLowerCase().slice(0, 5)),
                  t !== "data-" && t !== "aria-");
        default:
            return !1;
    }
}
function Zd(t, e, n, r) {
    if (e === null || typeof e > "u" || Jd(t, e, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !e;
            case 4:
                return e === !1;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e;
        }
    return !1;
}
function de(t, e, n, r, l, i, o) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (t) {
        re[t] = new de(t, 0, !1, t, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (t) {
    var e = t[0];
    re[e] = new de(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    re[t] = new de(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (t) {
    re[t] = new de(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (t) {
        re[t] = new de(t, 3, !1, t.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
    re[t] = new de(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
    re[t] = new de(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
    re[t] = new de(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
    re[t] = new de(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Jo = /[\-:]([a-z])/g;
function Zo(t) {
    return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (t) {
        var e = t.replace(Jo, Zo);
        re[e] = new de(e, 1, !1, t, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (t) {
        var e = t.replace(Jo, Zo);
        re[e] = new de(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var e = t.replace(Jo, Zo);
    re[e] = new de(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
    re[t] = new de(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
    re[t] = new de(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function qo(t, e, n, r) {
    var l = re.hasOwnProperty(e) ? re[e] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
        (Zd(e, n, l, r) && (n = null),
        r || l === null
            ? Xd(e) &&
              (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
            : l.mustUseProperty
            ? (t[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
            : ((e = l.attributeName),
              (r = l.attributeNamespace),
              n === null
                  ? t.removeAttribute(e)
                  : ((l = l.type),
                    (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var rt = $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Cr = Symbol.for("react.element"),
    Wt = Symbol.for("react.portal"),
    Vt = Symbol.for("react.fragment"),
    bo = Symbol.for("react.strict_mode"),
    Fi = Symbol.for("react.profiler"),
    Ua = Symbol.for("react.provider"),
    Ba = Symbol.for("react.context"),
    es = Symbol.for("react.forward_ref"),
    Ui = Symbol.for("react.suspense"),
    Bi = Symbol.for("react.suspense_list"),
    ts = Symbol.for("react.memo"),
    it = Symbol.for("react.lazy"),
    Wa = Symbol.for("react.offscreen"),
    nu = Symbol.iterator;
function Sn(t) {
    return t === null || typeof t != "object"
        ? null
        : ((t = (nu && t[nu]) || t["@@iterator"]),
          typeof t == "function" ? t : null);
}
var Q = Object.assign,
    ui;
function jn(t) {
    if (ui === void 0)
        try {
            throw Error();
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            ui = (e && e[1]) || "";
        }
    return (
        `
` +
        ui +
        t
    );
}
var ai = !1;
function ci(t, e) {
    if (!t || ai) return "";
    ai = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (
                ((e = function () {
                    throw Error();
                }),
                Object.defineProperty(e.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(e, []);
                } catch (a) {
                    var r = a;
                }
                Reflect.construct(t, [], e);
            } else {
                try {
                    e.call();
                } catch (a) {
                    r = a;
                }
                t.call(e.prototype);
            }
        else {
            try {
                throw Error();
            } catch (a) {
                r = a;
            }
            t();
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (
                var l = a.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = l.length - 1,
                    s = i.length - 1;
                1 <= o && 0 <= s && l[o] !== i[s];

            )
                s--;
            for (; 1 <= o && 0 <= s; o--, s--)
                if (l[o] !== i[s]) {
                    if (o !== 1 || s !== 1)
                        do
                            if ((o--, s--, 0 > s || l[o] !== i[s])) {
                                var u =
                                    `
` + l[o].replace(" at new ", " at ");
                                return (
                                    t.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace(
                                            "<anonymous>",
                                            t.displayName
                                        )),
                                    u
                                );
                            }
                        while (1 <= o && 0 <= s);
                    break;
                }
        }
    } finally {
        (ai = !1), (Error.prepareStackTrace = n);
    }
    return (t = t ? t.displayName || t.name : "") ? jn(t) : "";
}
function qd(t) {
    switch (t.tag) {
        case 5:
            return jn(t.type);
        case 16:
            return jn("Lazy");
        case 13:
            return jn("Suspense");
        case 19:
            return jn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (t = ci(t.type, !1)), t;
        case 11:
            return (t = ci(t.type.render, !1)), t;
        case 1:
            return (t = ci(t.type, !0)), t;
        default:
            return "";
    }
}
function Wi(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case Vt:
            return "Fragment";
        case Wt:
            return "Portal";
        case Fi:
            return "Profiler";
        case bo:
            return "StrictMode";
        case Ui:
            return "Suspense";
        case Bi:
            return "SuspenseList";
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
            case Ba:
                return (t.displayName || "Context") + ".Consumer";
            case Ua:
                return (t._context.displayName || "Context") + ".Provider";
            case es:
                var e = t.render;
                return (
                    (t = t.displayName),
                    t ||
                        ((t = e.displayName || e.name || ""),
                        (t =
                            t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
                    t
                );
            case ts:
                return (
                    (e = t.displayName || null),
                    e !== null ? e : Wi(t.type) || "Memo"
                );
            case it:
                (e = t._payload), (t = t._init);
                try {
                    return Wi(t(e));
                } catch {}
        }
    return null;
}
function bd(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (t = e.render),
                (t = t.displayName || t.name || ""),
                e.displayName ||
                    (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Wi(e);
        case 8:
            return e === bo ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
    }
    return null;
}
function wt(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return "";
    }
}
function Va(t) {
    var e = t.type;
    return (
        (t = t.nodeName) &&
        t.toLowerCase() === "input" &&
        (e === "checkbox" || e === "radio")
    );
}
function ep(t) {
    var e = Va(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        r = "" + t[e];
    if (
        !t.hasOwnProperty(e) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            i = n.set;
        return (
            Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
            Object.defineProperty(t, e, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (t._valueTracker = null), delete t[e];
                },
            }
        );
    }
}
function Er(t) {
    t._valueTracker || (t._valueTracker = ep(t));
}
function Ha(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        r = "";
    return (
        t && (r = Va(t) ? (t.checked ? "true" : "false") : t.value),
        (t = r),
        t !== n ? (e.setValue(t), !0) : !1
    );
}
function al(t) {
    if (
        ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
        return null;
    try {
        return t.activeElement || t.body;
    } catch {
        return t.body;
    }
}
function Vi(t, e) {
    var n = e.checked;
    return Q({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked,
    });
}
function ru(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        r = e.checked != null ? e.checked : e.defaultChecked;
    (n = wt(e.value != null ? e.value : n)),
        (t._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                e.type === "checkbox" || e.type === "radio"
                    ? e.checked != null
                    : e.value != null,
        });
}
function Qa(t, e) {
    (e = e.checked), e != null && qo(t, "checked", e, !1);
}
function Hi(t, e) {
    Qa(t, e);
    var n = wt(e.value),
        r = e.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && t.value === "") || t.value != n) &&
              (t.value = "" + n)
            : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return;
    }
    e.hasOwnProperty("value")
        ? Qi(t, e.type, n)
        : e.hasOwnProperty("defaultValue") && Qi(t, e.type, wt(e.defaultValue)),
        e.checked == null &&
            e.defaultChecked != null &&
            (t.defaultChecked = !!e.defaultChecked);
}
function lu(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (e.value !== void 0 && e.value !== null)
            )
        )
            return;
        (e = "" + t._wrapperState.initialValue),
            n || e === t.value || (t.value = e),
            (t.defaultValue = e);
    }
    (n = t.name),
        n !== "" && (t.name = ""),
        (t.defaultChecked = !!t._wrapperState.initialChecked),
        n !== "" && (t.name = n);
}
function Qi(t, e, n) {
    (e !== "number" || al(t.ownerDocument) !== t) &&
        (n == null
            ? (t.defaultValue = "" + t._wrapperState.initialValue)
            : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Ln = Array.isArray;
function en(t, e, n, r) {
    if (((t = t.options), e)) {
        e = {};
        for (var l = 0; l < n.length; l++) e["$" + n[l]] = !0;
        for (n = 0; n < t.length; n++)
            (l = e.hasOwnProperty("$" + t[n].value)),
                t[n].selected !== l && (t[n].selected = l),
                l && r && (t[n].defaultSelected = !0);
    } else {
        for (n = "" + wt(n), e = null, l = 0; l < t.length; l++) {
            if (t[l].value === n) {
                (t[l].selected = !0), r && (t[l].defaultSelected = !0);
                return;
            }
            e !== null || t[l].disabled || (e = t[l]);
        }
        e !== null && (e.selected = !0);
    }
}
function Ki(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(x(91));
    return Q({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue,
    });
}
function iu(t, e) {
    var n = e.value;
    if (n == null) {
        if (((n = e.children), (e = e.defaultValue), n != null)) {
            if (e != null) throw Error(x(92));
            if (Ln(n)) {
                if (1 < n.length) throw Error(x(93));
                n = n[0];
            }
            e = n;
        }
        e == null && (e = ""), (n = e);
    }
    t._wrapperState = { initialValue: wt(n) };
}
function Ka(t, e) {
    var n = wt(e.value),
        r = wt(e.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== t.value && (t.value = n),
        e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
        r != null && (t.defaultValue = "" + r);
}
function ou(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue &&
        e !== "" &&
        e !== null &&
        (t.value = e);
}
function Ya(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Yi(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml"
        ? Ya(e)
        : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : t;
}
var _r,
    Ga = (function (t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (e, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return t(e, n, r, l);
                  });
              }
            : t;
    })(function (t, e) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
            t.innerHTML = e;
        else {
            for (
                _r = _r || document.createElement("div"),
                    _r.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
                    e = _r.firstChild;
                t.firstChild;

            )
                t.removeChild(t.firstChild);
            for (; e.firstChild; ) t.appendChild(e.firstChild);
        }
    });
function Kn(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return;
        }
    }
    t.textContent = e;
}
var An = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (t) {
    tp.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (An[e] = An[t]);
    });
});
function Xa(t, e, n) {
    return e == null || typeof e == "boolean" || e === ""
        ? ""
        : n ||
          typeof e != "number" ||
          e === 0 ||
          (An.hasOwnProperty(t) && An[t])
        ? ("" + e).trim()
        : e + "px";
}
function Ja(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Xa(n, e[n], r);
            n === "float" && (n = "cssFloat"),
                r ? t.setProperty(n, l) : (t[n] = l);
        }
}
var np = Q(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Gi(t, e) {
    if (e) {
        if (np[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(x(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(x(60));
            if (
                typeof e.dangerouslySetInnerHTML != "object" ||
                !("__html" in e.dangerouslySetInnerHTML)
            )
                throw Error(x(61));
        }
        if (e.style != null && typeof e.style != "object") throw Error(x(62));
    }
}
function Xi(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Ji = null;
function ns(t) {
    return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    );
}
var Zi = null,
    tn = null,
    nn = null;
function su(t) {
    if ((t = yr(t))) {
        if (typeof Zi != "function") throw Error(x(280));
        var e = t.stateNode;
        e && ((e = Wl(e)), Zi(t.stateNode, t.type, e));
    }
}
function Za(t) {
    tn ? (nn ? nn.push(t) : (nn = [t])) : (tn = t);
}
function qa() {
    if (tn) {
        var t = tn,
            e = nn;
        if (((nn = tn = null), su(t), e))
            for (t = 0; t < e.length; t++) su(e[t]);
    }
}
function ba(t, e) {
    return t(e);
}
function ec() {}
var fi = !1;
function tc(t, e, n) {
    if (fi) return t(e, n);
    fi = !0;
    try {
        return ba(t, e, n);
    } finally {
        (fi = !1), (tn !== null || nn !== null) && (ec(), qa());
    }
}
function Yn(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var r = Wl(n);
    if (r === null) return null;
    n = r[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((t = t.type),
                (r = !(
                    t === "button" ||
                    t === "input" ||
                    t === "select" ||
                    t === "textarea"
                ))),
                (t = !r);
            break e;
        default:
            t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(x(231, e, typeof n));
    return n;
}
var qi = !1;
if (qe)
    try {
        var kn = {};
        Object.defineProperty(kn, "passive", {
            get: function () {
                qi = !0;
            },
        }),
            window.addEventListener("test", kn, kn),
            window.removeEventListener("test", kn, kn);
    } catch {
        qi = !1;
    }
function rp(t, e, n, r, l, i, o, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, a);
    } catch (p) {
        this.onError(p);
    }
}
var In = !1,
    cl = null,
    fl = !1,
    bi = null,
    lp = {
        onError: function (t) {
            (In = !0), (cl = t);
        },
    };
function ip(t, e, n, r, l, i, o, s, u) {
    (In = !1), (cl = null), rp.apply(lp, arguments);
}
function op(t, e, n, r, l, i, o, s, u) {
    if ((ip.apply(this, arguments), In)) {
        if (In) {
            var a = cl;
            (In = !1), (cl = null);
        } else throw Error(x(198));
        fl || ((fl = !0), (bi = a));
    }
}
function Ft(t) {
    var e = t,
        n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
        t = e;
        do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
        while (t);
    }
    return e.tag === 3 ? n : null;
}
function nc(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (
            (e === null &&
                ((t = t.alternate), t !== null && (e = t.memoizedState)),
            e !== null)
        )
            return e.dehydrated;
    }
    return null;
}
function uu(t) {
    if (Ft(t) !== t) throw Error(x(188));
}
function sp(t) {
    var e = t.alternate;
    if (!e) {
        if (((e = Ft(t)), e === null)) throw Error(x(188));
        return e !== t ? null : t;
    }
    for (var n = t, r = e; ; ) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n) return uu(l), t;
                if (i === r) return uu(l), e;
                i = i.sibling;
            }
            throw Error(x(188));
        }
        if (n.return !== r.return) (n = l), (r = i);
        else {
            for (var o = !1, s = l.child; s; ) {
                if (s === n) {
                    (o = !0), (n = l), (r = i);
                    break;
                }
                if (s === r) {
                    (o = !0), (r = l), (n = i);
                    break;
                }
                s = s.sibling;
            }
            if (!o) {
                for (s = i.child; s; ) {
                    if (s === n) {
                        (o = !0), (n = i), (r = l);
                        break;
                    }
                    if (s === r) {
                        (o = !0), (r = i), (n = l);
                        break;
                    }
                    s = s.sibling;
                }
                if (!o) throw Error(x(189));
            }
        }
        if (n.alternate !== r) throw Error(x(190));
    }
    if (n.tag !== 3) throw Error(x(188));
    return n.stateNode.current === n ? t : e;
}
function rc(t) {
    return (t = sp(t)), t !== null ? lc(t) : null;
}
function lc(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
        var e = lc(t);
        if (e !== null) return e;
        t = t.sibling;
    }
    return null;
}
var ic = Se.unstable_scheduleCallback,
    au = Se.unstable_cancelCallback,
    up = Se.unstable_shouldYield,
    ap = Se.unstable_requestPaint,
    G = Se.unstable_now,
    cp = Se.unstable_getCurrentPriorityLevel,
    rs = Se.unstable_ImmediatePriority,
    oc = Se.unstable_UserBlockingPriority,
    dl = Se.unstable_NormalPriority,
    fp = Se.unstable_LowPriority,
    sc = Se.unstable_IdlePriority,
    $l = null,
    He = null;
function dp(t) {
    if (He && typeof He.onCommitFiberRoot == "function")
        try {
            He.onCommitFiberRoot(
                $l,
                t,
                void 0,
                (t.current.flags & 128) === 128
            );
        } catch {}
}
var De = Math.clz32 ? Math.clz32 : mp,
    pp = Math.log,
    hp = Math.LN2;
function mp(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((pp(t) / hp) | 0)) | 0;
}
var Pr = 64,
    Nr = 4194304;
function Tn(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t;
    }
}
function pl(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = t.suspendedLanes,
        i = t.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var s = o & ~l;
        s !== 0 ? (r = Tn(s)) : ((i &= o), i !== 0 && (r = Tn(i)));
    } else (o = n & ~l), o !== 0 ? (r = Tn(o)) : i !== 0 && (r = Tn(i));
    if (r === 0) return 0;
    if (
        e !== 0 &&
        e !== r &&
        !(e & l) &&
        ((l = r & -r),
        (i = e & -e),
        l >= i || (l === 16 && (i & 4194240) !== 0))
    )
        return e;
    if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
        for (t = t.entanglements, e &= r; 0 < e; )
            (n = 31 - De(e)), (l = 1 << n), (r |= t[n]), (e &= ~l);
    return r;
}
function yp(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function gp(t, e) {
    for (
        var n = t.suspendedLanes,
            r = t.pingedLanes,
            l = t.expirationTimes,
            i = t.pendingLanes;
        0 < i;

    ) {
        var o = 31 - De(i),
            s = 1 << o,
            u = l[o];
        u === -1
            ? (!(s & n) || s & r) && (l[o] = yp(s, e))
            : u <= e && (t.expiredLanes |= s),
            (i &= ~s);
    }
}
function eo(t) {
    return (
        (t = t.pendingLanes & -1073741825),
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
}
function uc() {
    var t = Pr;
    return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), t;
}
function di(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
}
function hr(t, e, n) {
    (t.pendingLanes |= e),
        e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
        (t = t.eventTimes),
        (e = 31 - De(e)),
        (t[e] = n);
}
function vp(t, e) {
    var n = t.pendingLanes & ~e;
    (t.pendingLanes = e),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.expiredLanes &= e),
        (t.mutableReadLanes &= e),
        (t.entangledLanes &= e),
        (e = t.entanglements);
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var l = 31 - De(n),
            i = 1 << l;
        (e[l] = 0), (r[l] = -1), (t[l] = -1), (n &= ~i);
    }
}
function ls(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
        var r = 31 - De(n),
            l = 1 << r;
        (l & e) | (t[r] & e) && (t[r] |= e), (n &= ~l);
    }
}
var D = 0;
function ac(t) {
    return (
        (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var cc,
    is,
    fc,
    dc,
    pc,
    to = !1,
    Or = [],
    ft = null,
    dt = null,
    pt = null,
    Gn = new Map(),
    Xn = new Map(),
    st = [],
    wp =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function cu(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            ft = null;
            break;
        case "dragenter":
        case "dragleave":
            dt = null;
            break;
        case "mouseover":
        case "mouseout":
            pt = null;
            break;
        case "pointerover":
        case "pointerout":
            Gn.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Xn.delete(e.pointerId);
    }
}
function Cn(t, e, n, r, l, i) {
    return t === null || t.nativeEvent !== i
        ? ((t = {
              blockedOn: e,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [l],
          }),
          e !== null && ((e = yr(e)), e !== null && is(e)),
          t)
        : ((t.eventSystemFlags |= r),
          (e = t.targetContainers),
          l !== null && e.indexOf(l) === -1 && e.push(l),
          t);
}
function xp(t, e, n, r, l) {
    switch (e) {
        case "focusin":
            return (ft = Cn(ft, t, e, n, r, l)), !0;
        case "dragenter":
            return (dt = Cn(dt, t, e, n, r, l)), !0;
        case "mouseover":
            return (pt = Cn(pt, t, e, n, r, l)), !0;
        case "pointerover":
            var i = l.pointerId;
            return Gn.set(i, Cn(Gn.get(i) || null, t, e, n, r, l)), !0;
        case "gotpointercapture":
            return (
                (i = l.pointerId),
                Xn.set(i, Cn(Xn.get(i) || null, t, e, n, r, l)),
                !0
            );
    }
    return !1;
}
function hc(t) {
    var e = Ot(t.target);
    if (e !== null) {
        var n = Ft(e);
        if (n !== null) {
            if (((e = n.tag), e === 13)) {
                if (((e = nc(n)), e !== null)) {
                    (t.blockedOn = e),
                        pc(t.priority, function () {
                            fc(n);
                        });
                    return;
                }
            } else if (
                e === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    t.blockedOn = null;
}
function Jr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = no(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Ji = r), n.target.dispatchEvent(r), (Ji = null);
        } else return (e = yr(n)), e !== null && is(e), (t.blockedOn = n), !1;
        e.shift();
    }
    return !0;
}
function fu(t, e, n) {
    Jr(t) && n.delete(e);
}
function Sp() {
    (to = !1),
        ft !== null && Jr(ft) && (ft = null),
        dt !== null && Jr(dt) && (dt = null),
        pt !== null && Jr(pt) && (pt = null),
        Gn.forEach(fu),
        Xn.forEach(fu);
}
function En(t, e) {
    t.blockedOn === e &&
        ((t.blockedOn = null),
        to ||
            ((to = !0),
            Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Sp)));
}
function Jn(t) {
    function e(l) {
        return En(l, t);
    }
    if (0 < Or.length) {
        En(Or[0], t);
        for (var n = 1; n < Or.length; n++) {
            var r = Or[n];
            r.blockedOn === t && (r.blockedOn = null);
        }
    }
    for (
        ft !== null && En(ft, t),
            dt !== null && En(dt, t),
            pt !== null && En(pt, t),
            Gn.forEach(e),
            Xn.forEach(e),
            n = 0;
        n < st.length;
        n++
    )
        (r = st[n]), r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); )
        hc(n), n.blockedOn === null && st.shift();
}
var rn = rt.ReactCurrentBatchConfig,
    hl = !0;
function kp(t, e, n, r) {
    var l = D,
        i = rn.transition;
    rn.transition = null;
    try {
        (D = 1), os(t, e, n, r);
    } finally {
        (D = l), (rn.transition = i);
    }
}
function Cp(t, e, n, r) {
    var l = D,
        i = rn.transition;
    rn.transition = null;
    try {
        (D = 4), os(t, e, n, r);
    } finally {
        (D = l), (rn.transition = i);
    }
}
function os(t, e, n, r) {
    if (hl) {
        var l = no(t, e, n, r);
        if (l === null) ki(t, e, r, ml, n), cu(t, r);
        else if (xp(l, t, e, n, r)) r.stopPropagation();
        else if ((cu(t, r), e & 4 && -1 < wp.indexOf(t))) {
            for (; l !== null; ) {
                var i = yr(l);
                if (
                    (i !== null && cc(i),
                    (i = no(t, e, n, r)),
                    i === null && ki(t, e, r, ml, n),
                    i === l)
                )
                    break;
                l = i;
            }
            l !== null && r.stopPropagation();
        } else ki(t, e, r, null, n);
    }
}
var ml = null;
function no(t, e, n, r) {
    if (((ml = null), (t = ns(r)), (t = Ot(t)), t !== null))
        if (((e = Ft(t)), e === null)) t = null;
        else if (((n = e.tag), n === 13)) {
            if (((t = nc(e)), t !== null)) return t;
            t = null;
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
        } else e !== t && (t = null);
    return (ml = t), null;
}
function mc(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (cp()) {
                case rs:
                    return 1;
                case oc:
                    return 4;
                case dl:
                case fp:
                    return 16;
                case sc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var at = null,
    ss = null,
    Zr = null;
function yc() {
    if (Zr) return Zr;
    var t,
        e = ss,
        n = e.length,
        r,
        l = "value" in at ? at.value : at.textContent,
        i = l.length;
    for (t = 0; t < n && e[t] === l[t]; t++);
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === l[i - r]; r++);
    return (Zr = l.slice(t, 1 < r ? 1 - r : void 0));
}
function qr(t) {
    var e = t.keyCode;
    return (
        "charCode" in t
            ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
            : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    );
}
function Rr() {
    return !0;
}
function du() {
    return !1;
}
function Ce(t) {
    function e(n, r, l, i, o) {
        (this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null);
        for (var s in t)
            t.hasOwnProperty(s) && ((n = t[s]), (this[s] = n ? n(i) : i[s]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? Rr
                : du),
            (this.isPropagationStopped = du),
            this
        );
    }
    return (
        Q(e.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Rr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Rr));
            },
            persist: function () {},
            isPersistent: Rr,
        }),
        e
    );
}
var vn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
            return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    us = Ce(vn),
    mr = Q({}, vn, { view: 0, detail: 0 }),
    Ep = Ce(mr),
    pi,
    hi,
    _n,
    Fl = Q({}, mr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: as,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0
                ? t.fromElement === t.srcElement
                    ? t.toElement
                    : t.fromElement
                : t.relatedTarget;
        },
        movementX: function (t) {
            return "movementX" in t
                ? t.movementX
                : (t !== _n &&
                      (_n && t.type === "mousemove"
                          ? ((pi = t.screenX - _n.screenX),
                            (hi = t.screenY - _n.screenY))
                          : (hi = pi = 0),
                      (_n = t)),
                  pi);
        },
        movementY: function (t) {
            return "movementY" in t ? t.movementY : hi;
        },
    }),
    pu = Ce(Fl),
    _p = Q({}, Fl, { dataTransfer: 0 }),
    Pp = Ce(_p),
    Np = Q({}, mr, { relatedTarget: 0 }),
    mi = Ce(Np),
    Op = Q({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rp = Ce(Op),
    zp = Q({}, vn, {
        clipboardData: function (t) {
            return "clipboardData" in t
                ? t.clipboardData
                : window.clipboardData;
        },
    }),
    jp = Ce(zp),
    Lp = Q({}, vn, { data: 0 }),
    hu = Ce(Lp),
    Tp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Mp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Dp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Ap(t) {
    var e = this.nativeEvent;
    return e.getModifierState
        ? e.getModifierState(t)
        : (t = Dp[t])
        ? !!e[t]
        : !1;
}
function as() {
    return Ap;
}
var Ip = Q({}, mr, {
        key: function (t) {
            if (t.key) {
                var e = Tp[t.key] || t.key;
                if (e !== "Unidentified") return e;
            }
            return t.type === "keypress"
                ? ((t = qr(t)), t === 13 ? "Enter" : String.fromCharCode(t))
                : t.type === "keydown" || t.type === "keyup"
                ? Mp[t.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: as,
        charCode: function (t) {
            return t.type === "keypress" ? qr(t) : 0;
        },
        keyCode: function (t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
        },
        which: function (t) {
            return t.type === "keypress"
                ? qr(t)
                : t.type === "keydown" || t.type === "keyup"
                ? t.keyCode
                : 0;
        },
    }),
    $p = Ce(Ip),
    Fp = Q({}, Fl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    mu = Ce(Fp),
    Up = Q({}, mr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: as,
    }),
    Bp = Ce(Up),
    Wp = Q({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vp = Ce(Wp),
    Hp = Q({}, Fl, {
        deltaX: function (t) {
            return "deltaX" in t
                ? t.deltaX
                : "wheelDeltaX" in t
                ? -t.wheelDeltaX
                : 0;
        },
        deltaY: function (t) {
            return "deltaY" in t
                ? t.deltaY
                : "wheelDeltaY" in t
                ? -t.wheelDeltaY
                : "wheelDelta" in t
                ? -t.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Qp = Ce(Hp),
    Kp = [9, 13, 27, 32],
    cs = qe && "CompositionEvent" in window,
    $n = null;
qe && "documentMode" in document && ($n = document.documentMode);
var Yp = qe && "TextEvent" in window && !$n,
    gc = qe && (!cs || ($n && 8 < $n && 11 >= $n)),
    yu = String.fromCharCode(32),
    gu = !1;
function vc(t, e) {
    switch (t) {
        case "keyup":
            return Kp.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function wc(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Ht = !1;
function Gp(t, e) {
    switch (t) {
        case "compositionend":
            return wc(e);
        case "keypress":
            return e.which !== 32 ? null : ((gu = !0), yu);
        case "textInput":
            return (t = e.data), t === yu && gu ? null : t;
        default:
            return null;
    }
}
function Xp(t, e) {
    if (Ht)
        return t === "compositionend" || (!cs && vc(t, e))
            ? ((t = yc()), (Zr = ss = at = null), (Ht = !1), t)
            : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(e.ctrlKey || e.altKey || e.metaKey) ||
                (e.ctrlKey && e.altKey)
            ) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which);
            }
            return null;
        case "compositionend":
            return gc && e.locale !== "ko" ? null : e.data;
        default:
            return null;
    }
}
var Jp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function vu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Jp[t.type] : e === "textarea";
}
function xc(t, e, n, r) {
    Za(r),
        (e = yl(e, "onChange")),
        0 < e.length &&
            ((n = new us("onChange", "change", null, n, r)),
            t.push({ event: n, listeners: e }));
}
var Fn = null,
    Zn = null;
function Zp(t) {
    jc(t, 0);
}
function Ul(t) {
    var e = Yt(t);
    if (Ha(e)) return t;
}
function qp(t, e) {
    if (t === "change") return e;
}
var Sc = !1;
if (qe) {
    var yi;
    if (qe) {
        var gi = "oninput" in document;
        if (!gi) {
            var wu = document.createElement("div");
            wu.setAttribute("oninput", "return;"),
                (gi = typeof wu.oninput == "function");
        }
        yi = gi;
    } else yi = !1;
    Sc = yi && (!document.documentMode || 9 < document.documentMode);
}
function xu() {
    Fn && (Fn.detachEvent("onpropertychange", kc), (Zn = Fn = null));
}
function kc(t) {
    if (t.propertyName === "value" && Ul(Zn)) {
        var e = [];
        xc(e, Zn, t, ns(t)), tc(Zp, e);
    }
}
function bp(t, e, n) {
    t === "focusin"
        ? (xu(), (Fn = e), (Zn = n), Fn.attachEvent("onpropertychange", kc))
        : t === "focusout" && xu();
}
function eh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Ul(Zn);
}
function th(t, e) {
    if (t === "click") return Ul(e);
}
function nh(t, e) {
    if (t === "input" || t === "change") return Ul(e);
}
function rh(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Ie = typeof Object.is == "function" ? Object.is : rh;
function qn(t, e) {
    if (Ie(t, e)) return !0;
    if (
        typeof t != "object" ||
        t === null ||
        typeof e != "object" ||
        e === null
    )
        return !1;
    var n = Object.keys(t),
        r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!$i.call(e, l) || !Ie(t[l], e[l])) return !1;
    }
    return !0;
}
function Su(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
}
function ku(t, e) {
    var n = Su(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = t + n.textContent.length), t <= e && r >= e))
                return { node: n, offset: e - t };
            t = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Su(n);
    }
}
function Cc(t, e) {
    return t && e
        ? t === e
            ? !0
            : t && t.nodeType === 3
            ? !1
            : e && e.nodeType === 3
            ? Cc(t, e.parentNode)
            : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
            ? !!(t.compareDocumentPosition(e) & 16)
            : !1
        : !1;
}
function Ec() {
    for (var t = window, e = al(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) t = e.contentWindow;
        else break;
        e = al(t.document);
    }
    return e;
}
function fs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
        e &&
        ((e === "input" &&
            (t.type === "text" ||
                t.type === "search" ||
                t.type === "tel" ||
                t.type === "url" ||
                t.type === "password")) ||
            e === "textarea" ||
            t.contentEditable === "true")
    );
}
function lh(t) {
    var e = Ec(),
        n = t.focusedElem,
        r = t.selectionRange;
    if (
        e !== n &&
        n &&
        n.ownerDocument &&
        Cc(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && fs(n)) {
            if (
                ((e = r.start),
                (t = r.end),
                t === void 0 && (t = e),
                "selectionStart" in n)
            )
                (n.selectionStart = e),
                    (n.selectionEnd = Math.min(t, n.value.length));
            else if (
                ((t =
                    ((e = n.ownerDocument || document) && e.defaultView) ||
                    window),
                t.getSelection)
            ) {
                t = t.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                (r = r.end === void 0 ? i : Math.min(r.end, l)),
                    !t.extend && i > r && ((l = r), (r = i), (i = l)),
                    (l = ku(n, i));
                var o = ku(n, r);
                l &&
                    o &&
                    (t.rangeCount !== 1 ||
                        t.anchorNode !== l.node ||
                        t.anchorOffset !== l.offset ||
                        t.focusNode !== o.node ||
                        t.focusOffset !== o.offset) &&
                    ((e = e.createRange()),
                    e.setStart(l.node, l.offset),
                    t.removeAllRanges(),
                    i > r
                        ? (t.addRange(e), t.extend(o.node, o.offset))
                        : (e.setEnd(o.node, o.offset), t.addRange(e)));
            }
        }
        for (e = [], t = n; (t = t.parentNode); )
            t.nodeType === 1 &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < e.length;
            n++
        )
            (t = e[n]),
                (t.element.scrollLeft = t.left),
                (t.element.scrollTop = t.top);
    }
}
var ih = qe && "documentMode" in document && 11 >= document.documentMode,
    Qt = null,
    ro = null,
    Un = null,
    lo = !1;
function Cu(t, e, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    lo ||
        Qt == null ||
        Qt !== al(r) ||
        ((r = Qt),
        "selectionStart" in r && fs(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Un && qn(Un, r)) ||
            ((Un = r),
            (r = yl(ro, "onSelect")),
            0 < r.length &&
                ((e = new us("onSelect", "select", null, e, n)),
                t.push({ event: e, listeners: r }),
                (e.target = Qt))));
}
function zr(t, e) {
    var n = {};
    return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n["Webkit" + t] = "webkit" + e),
        (n["Moz" + t] = "moz" + e),
        n
    );
}
var Kt = {
        animationend: zr("Animation", "AnimationEnd"),
        animationiteration: zr("Animation", "AnimationIteration"),
        animationstart: zr("Animation", "AnimationStart"),
        transitionend: zr("Transition", "TransitionEnd"),
    },
    vi = {},
    _c = {};
qe &&
    ((_c = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Kt.animationend.animation,
        delete Kt.animationiteration.animation,
        delete Kt.animationstart.animation),
    "TransitionEvent" in window || delete Kt.transitionend.transition);
function Bl(t) {
    if (vi[t]) return vi[t];
    if (!Kt[t]) return t;
    var e = Kt[t],
        n;
    for (n in e) if (e.hasOwnProperty(n) && n in _c) return (vi[t] = e[n]);
    return t;
}
var Pc = Bl("animationend"),
    Nc = Bl("animationiteration"),
    Oc = Bl("animationstart"),
    Rc = Bl("transitionend"),
    zc = new Map(),
    Eu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function St(t, e) {
    zc.set(t, e), $t(e, [t]);
}
for (var wi = 0; wi < Eu.length; wi++) {
    var xi = Eu[wi],
        oh = xi.toLowerCase(),
        sh = xi[0].toUpperCase() + xi.slice(1);
    St(oh, "on" + sh);
}
St(Pc, "onAnimationEnd");
St(Nc, "onAnimationIteration");
St(Oc, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(Rc, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
$t(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
$t(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$t(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$t(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    uh = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Mn)
    );
function _u(t, e, n) {
    var r = t.type || "unknown-event";
    (t.currentTarget = n), op(r, e, void 0, t), (t.currentTarget = null);
}
function jc(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o],
                        u = s.instance,
                        a = s.currentTarget;
                    if (((s = s.listener), u !== i && l.isPropagationStopped()))
                        break e;
                    _u(l, s, a), (i = u);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((s = r[o]),
                        (u = s.instance),
                        (a = s.currentTarget),
                        (s = s.listener),
                        u !== i && l.isPropagationStopped())
                    )
                        break e;
                    _u(l, s, a), (i = u);
                }
        }
    }
    if (fl) throw ((t = bi), (fl = !1), (bi = null), t);
}
function F(t, e) {
    var n = e[ao];
    n === void 0 && (n = e[ao] = new Set());
    var r = t + "__bubble";
    n.has(r) || (Lc(e, t, 2, !1), n.add(r));
}
function Si(t, e, n) {
    var r = 0;
    e && (r |= 4), Lc(n, t, r, e);
}
var jr = "_reactListening" + Math.random().toString(36).slice(2);
function bn(t) {
    if (!t[jr]) {
        (t[jr] = !0),
            Fa.forEach(function (n) {
                n !== "selectionchange" &&
                    (uh.has(n) || Si(n, !1, t), Si(n, !0, t));
            });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[jr] || ((e[jr] = !0), Si("selectionchange", !1, e));
    }
}
function Lc(t, e, n, r) {
    switch (mc(e)) {
        case 1:
            var l = kp;
            break;
        case 4:
            l = Cp;
            break;
        default:
            l = os;
    }
    (n = l.bind(null, e, n, t)),
        (l = void 0),
        !qi ||
            (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? t.addEventListener(e, n, { capture: !0, passive: l })
                : t.addEventListener(e, n, !0)
            : l !== void 0
            ? t.addEventListener(e, n, { passive: l })
            : t.addEventListener(e, n, !1);
}
function ki(t, e, n, r, l) {
    var i = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var s = r.stateNode.containerInfo;
                if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = o.stateNode.containerInfo),
                            u === l || (u.nodeType === 8 && u.parentNode === l))
                        )
                            return;
                        o = o.return;
                    }
                for (; s !== null; ) {
                    if (((o = Ot(s)), o === null)) return;
                    if (((u = o.tag), u === 5 || u === 6)) {
                        r = i = o;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    tc(function () {
        var a = i,
            p = ns(n),
            m = [];
        e: {
            var h = zc.get(t);
            if (h !== void 0) {
                var v = us,
                    w = t;
                switch (t) {
                    case "keypress":
                        if (qr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = $p;
                        break;
                    case "focusin":
                        (w = "focus"), (v = mi);
                        break;
                    case "focusout":
                        (w = "blur"), (v = mi);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = mi;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = pu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = Pp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = Bp;
                        break;
                    case Pc:
                    case Nc:
                    case Oc:
                        v = Rp;
                        break;
                    case Rc:
                        v = Vp;
                        break;
                    case "scroll":
                        v = Ep;
                        break;
                    case "wheel":
                        v = Qp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = jp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = mu;
                }
                var S = (e & 4) !== 0,
                    k = !S && t === "scroll",
                    f = S ? (h !== null ? h + "Capture" : null) : h;
                S = [];
                for (var c = a, d; c !== null; ) {
                    d = c;
                    var g = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            g !== null &&
                            ((d = g),
                            f !== null &&
                                ((g = Yn(c, f)),
                                g != null && S.push(er(c, g, d)))),
                        k)
                    )
                        break;
                    c = c.return;
                }
                0 < S.length &&
                    ((h = new v(h, w, null, n, p)),
                    m.push({ event: h, listeners: S }));
            }
        }
        if (!(e & 7)) {
            e: {
                if (
                    ((h = t === "mouseover" || t === "pointerover"),
                    (v = t === "mouseout" || t === "pointerout"),
                    h &&
                        n !== Ji &&
                        (w = n.relatedTarget || n.fromElement) &&
                        (Ot(w) || w[be]))
                )
                    break e;
                if (
                    (v || h) &&
                    ((h =
                        p.window === p
                            ? p
                            : (h = p.ownerDocument)
                            ? h.defaultView || h.parentWindow
                            : window),
                    v
                        ? ((w = n.relatedTarget || n.toElement),
                          (v = a),
                          (w = w ? Ot(w) : null),
                          w !== null &&
                              ((k = Ft(w)),
                              w !== k || (w.tag !== 5 && w.tag !== 6)) &&
                              (w = null))
                        : ((v = null), (w = a)),
                    v !== w)
                ) {
                    if (
                        ((S = pu),
                        (g = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (c = "mouse"),
                        (t === "pointerout" || t === "pointerover") &&
                            ((S = mu),
                            (g = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (c = "pointer")),
                        (k = v == null ? h : Yt(v)),
                        (d = w == null ? h : Yt(w)),
                        (h = new S(g, c + "leave", v, n, p)),
                        (h.target = k),
                        (h.relatedTarget = d),
                        (g = null),
                        Ot(p) === a &&
                            ((S = new S(f, c + "enter", w, n, p)),
                            (S.target = d),
                            (S.relatedTarget = k),
                            (g = S)),
                        (k = g),
                        v && w)
                    )
                        t: {
                            for (S = v, f = w, c = 0, d = S; d; d = Bt(d)) c++;
                            for (d = 0, g = f; g; g = Bt(g)) d++;
                            for (; 0 < c - d; ) (S = Bt(S)), c--;
                            for (; 0 < d - c; ) (f = Bt(f)), d--;
                            for (; c--; ) {
                                if (
                                    S === f ||
                                    (f !== null && S === f.alternate)
                                )
                                    break t;
                                (S = Bt(S)), (f = Bt(f));
                            }
                            S = null;
                        }
                    else S = null;
                    v !== null && Pu(m, h, v, S, !1),
                        w !== null && k !== null && Pu(m, k, w, S, !0);
                }
            }
            e: {
                if (
                    ((h = a ? Yt(a) : window),
                    (v = h.nodeName && h.nodeName.toLowerCase()),
                    v === "select" || (v === "input" && h.type === "file"))
                )
                    var C = qp;
                else if (vu(h))
                    if (Sc) C = nh;
                    else {
                        C = eh;
                        var _ = bp;
                    }
                else
                    (v = h.nodeName) &&
                        v.toLowerCase() === "input" &&
                        (h.type === "checkbox" || h.type === "radio") &&
                        (C = th);
                if (C && (C = C(t, a))) {
                    xc(m, C, n, p);
                    break e;
                }
                _ && _(t, h, a),
                    t === "focusout" &&
                        (_ = h._wrapperState) &&
                        _.controlled &&
                        h.type === "number" &&
                        Qi(h, "number", h.value);
            }
            switch (((_ = a ? Yt(a) : window), t)) {
                case "focusin":
                    (vu(_) || _.contentEditable === "true") &&
                        ((Qt = _), (ro = a), (Un = null));
                    break;
                case "focusout":
                    Un = ro = Qt = null;
                    break;
                case "mousedown":
                    lo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (lo = !1), Cu(m, n, p);
                    break;
                case "selectionchange":
                    if (ih) break;
                case "keydown":
                case "keyup":
                    Cu(m, n, p);
            }
            var E;
            if (cs)
                e: {
                    switch (t) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
            else
                Ht
                    ? vc(t, n) && (N = "onCompositionEnd")
                    : t === "keydown" &&
                      n.keyCode === 229 &&
                      (N = "onCompositionStart");
            N &&
                (gc &&
                    n.locale !== "ko" &&
                    (Ht || N !== "onCompositionStart"
                        ? N === "onCompositionEnd" && Ht && (E = yc())
                        : ((at = p),
                          (ss = "value" in at ? at.value : at.textContent),
                          (Ht = !0))),
                (_ = yl(a, N)),
                0 < _.length &&
                    ((N = new hu(N, t, null, n, p)),
                    m.push({ event: N, listeners: _ }),
                    E
                        ? (N.data = E)
                        : ((E = wc(n)), E !== null && (N.data = E)))),
                (E = Yp ? Gp(t, n) : Xp(t, n)) &&
                    ((a = yl(a, "onBeforeInput")),
                    0 < a.length &&
                        ((p = new hu(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            p
                        )),
                        m.push({ event: p, listeners: a }),
                        (p.data = E)));
        }
        jc(m, e);
    });
}
function er(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
}
function yl(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var l = t,
            i = l.stateNode;
        l.tag === 5 &&
            i !== null &&
            ((l = i),
            (i = Yn(t, n)),
            i != null && r.unshift(er(t, i, l)),
            (i = Yn(t, e)),
            i != null && r.push(er(t, i, l))),
            (t = t.return);
    }
    return r;
}
function Bt(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
}
function Pu(t, e, n, r, l) {
    for (var i = e._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
            u = s.alternate,
            a = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 &&
            a !== null &&
            ((s = a),
            l
                ? ((u = Yn(n, i)), u != null && o.unshift(er(n, u, s)))
                : l || ((u = Yn(n, i)), u != null && o.push(er(n, u, s)))),
            (n = n.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
}
var ah = /\r\n?/g,
    ch = /\u0000|\uFFFD/g;
function Nu(t) {
    return (typeof t == "string" ? t : "" + t)
        .replace(
            ah,
            `
`
        )
        .replace(ch, "");
}
function Lr(t, e, n) {
    if (((e = Nu(e)), Nu(t) !== e && n)) throw Error(x(425));
}
function gl() {}
var io = null,
    oo = null;
function so(t, e) {
    return (
        t === "textarea" ||
        t === "noscript" ||
        typeof e.children == "string" ||
        typeof e.children == "number" ||
        (typeof e.dangerouslySetInnerHTML == "object" &&
            e.dangerouslySetInnerHTML !== null &&
            e.dangerouslySetInnerHTML.__html != null)
    );
}
var uo = typeof setTimeout == "function" ? setTimeout : void 0,
    fh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ou = typeof Promise == "function" ? Promise : void 0,
    dh =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Ou < "u"
            ? function (t) {
                  return Ou.resolve(null).then(t).catch(ph);
              }
            : uo;
function ph(t) {
    setTimeout(function () {
        throw t;
    });
}
function Ci(t, e) {
    var n = e,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((t.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    t.removeChild(l), Jn(e);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    Jn(e);
}
function ht(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
            if (e === "/$") return null;
        }
    }
    return t;
}
function Ru(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--;
            } else n === "/$" && e++;
        }
        t = t.previousSibling;
    }
    return null;
}
var wn = Math.random().toString(36).slice(2),
    Ve = "__reactFiber$" + wn,
    tr = "__reactProps$" + wn,
    be = "__reactContainer$" + wn,
    ao = "__reactEvents$" + wn,
    hh = "__reactListeners$" + wn,
    mh = "__reactHandles$" + wn;
function Ot(t) {
    var e = t[Ve];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
        if ((e = n[be] || n[Ve])) {
            if (
                ((n = e.alternate),
                e.child !== null || (n !== null && n.child !== null))
            )
                for (t = Ru(t); t !== null; ) {
                    if ((n = t[Ve])) return n;
                    t = Ru(t);
                }
            return e;
        }
        (t = n), (n = t.parentNode);
    }
    return null;
}
function yr(t) {
    return (
        (t = t[Ve] || t[be]),
        !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
            ? null
            : t
    );
}
function Yt(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(x(33));
}
function Wl(t) {
    return t[tr] || null;
}
var co = [],
    Gt = -1;
function kt(t) {
    return { current: t };
}
function U(t) {
    0 > Gt || ((t.current = co[Gt]), (co[Gt] = null), Gt--);
}
function I(t, e) {
    Gt++, (co[Gt] = t.current), (t.current = e);
}
var xt = {},
    ue = kt(xt),
    me = kt(!1),
    Tt = xt;
function un(t, e) {
    var n = t.type.contextTypes;
    if (!n) return xt;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = e[i];
    return (
        r &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = e),
            (t.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function ye(t) {
    return (t = t.childContextTypes), t != null;
}
function vl() {
    U(me), U(ue);
}
function zu(t, e, n) {
    if (ue.current !== xt) throw Error(x(168));
    I(ue, e), I(me, n);
}
function Tc(t, e, n) {
    var r = t.stateNode;
    if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in e)) throw Error(x(108, bd(t) || "Unknown", l));
    return Q({}, n, r);
}
function wl(t) {
    return (
        (t =
            ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
            xt),
        (Tt = ue.current),
        I(ue, t),
        I(me, me.current),
        !0
    );
}
function ju(t, e, n) {
    var r = t.stateNode;
    if (!r) throw Error(x(169));
    n
        ? ((t = Tc(t, e, Tt)),
          (r.__reactInternalMemoizedMergedChildContext = t),
          U(me),
          U(ue),
          I(ue, t))
        : U(me),
        I(me, n);
}
var Ge = null,
    Vl = !1,
    Ei = !1;
function Mc(t) {
    Ge === null ? (Ge = [t]) : Ge.push(t);
}
function yh(t) {
    (Vl = !0), Mc(t);
}
function Ct() {
    if (!Ei && Ge !== null) {
        Ei = !0;
        var t = 0,
            e = D;
        try {
            var n = Ge;
            for (D = 1; t < n.length; t++) {
                var r = n[t];
                do r = r(!0);
                while (r !== null);
            }
            (Ge = null), (Vl = !1);
        } catch (l) {
            throw (Ge !== null && (Ge = Ge.slice(t + 1)), ic(rs, Ct), l);
        } finally {
            (D = e), (Ei = !1);
        }
    }
    return null;
}
var Xt = [],
    Jt = 0,
    xl = null,
    Sl = 0,
    Ee = [],
    _e = 0,
    Mt = null,
    Xe = 1,
    Je = "";
function Pt(t, e) {
    (Xt[Jt++] = Sl), (Xt[Jt++] = xl), (xl = t), (Sl = e);
}
function Dc(t, e, n) {
    (Ee[_e++] = Xe), (Ee[_e++] = Je), (Ee[_e++] = Mt), (Mt = t);
    var r = Xe;
    t = Je;
    var l = 32 - De(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - De(e) + l;
    if (30 < i) {
        var o = l - (l % 5);
        (i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (l -= o),
            (Xe = (1 << (32 - De(e) + l)) | (n << l) | r),
            (Je = i + t);
    } else (Xe = (1 << i) | (n << l) | r), (Je = t);
}
function ds(t) {
    t.return !== null && (Pt(t, 1), Dc(t, 1, 0));
}
function ps(t) {
    for (; t === xl; )
        (xl = Xt[--Jt]), (Xt[Jt] = null), (Sl = Xt[--Jt]), (Xt[Jt] = null);
    for (; t === Mt; )
        (Mt = Ee[--_e]),
            (Ee[_e] = null),
            (Je = Ee[--_e]),
            (Ee[_e] = null),
            (Xe = Ee[--_e]),
            (Ee[_e] = null);
}
var xe = null,
    we = null,
    B = !1,
    Me = null;
function Ac(t, e) {
    var n = Pe(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = e),
        (n.return = t),
        (e = t.deletions),
        e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Lu(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return (
                (e =
                    e.nodeType !== 1 ||
                    n.toLowerCase() !== e.nodeName.toLowerCase()
                        ? null
                        : e),
                e !== null
                    ? ((t.stateNode = e), (xe = t), (we = ht(e.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
                e !== null ? ((t.stateNode = e), (xe = t), (we = null), !0) : !1
            );
        case 13:
            return (
                (e = e.nodeType !== 8 ? null : e),
                e !== null
                    ? ((n = Mt !== null ? { id: Xe, overflow: Je } : null),
                      (t.memoizedState = {
                          dehydrated: e,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Pe(18, null, null, 0)),
                      (n.stateNode = e),
                      (n.return = t),
                      (t.child = n),
                      (xe = t),
                      (we = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function fo(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function po(t) {
    if (B) {
        var e = we;
        if (e) {
            var n = e;
            if (!Lu(t, e)) {
                if (fo(t)) throw Error(x(418));
                e = ht(n.nextSibling);
                var r = xe;
                e && Lu(t, e)
                    ? Ac(r, n)
                    : ((t.flags = (t.flags & -4097) | 2), (B = !1), (xe = t));
            }
        } else {
            if (fo(t)) throw Error(x(418));
            (t.flags = (t.flags & -4097) | 2), (B = !1), (xe = t);
        }
    }
}
function Tu(t) {
    for (
        t = t.return;
        t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

    )
        t = t.return;
    xe = t;
}
function Tr(t) {
    if (t !== xe) return !1;
    if (!B) return Tu(t), (B = !0), !1;
    var e;
    if (
        ((e = t.tag !== 3) &&
            !(e = t.tag !== 5) &&
            ((e = t.type),
            (e = e !== "head" && e !== "body" && !so(t.type, t.memoizedProps))),
        e && (e = we))
    ) {
        if (fo(t)) throw (Ic(), Error(x(418)));
        for (; e; ) Ac(t, e), (e = ht(e.nextSibling));
    }
    if ((Tu(t), t.tag === 13)) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
            throw Error(x(317));
        e: {
            for (t = t.nextSibling, e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            we = ht(t.nextSibling);
                            break e;
                        }
                        e--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
                }
                t = t.nextSibling;
            }
            we = null;
        }
    } else we = xe ? ht(t.stateNode.nextSibling) : null;
    return !0;
}
function Ic() {
    for (var t = we; t; ) t = ht(t.nextSibling);
}
function an() {
    (we = xe = null), (B = !1);
}
function hs(t) {
    Me === null ? (Me = [t]) : Me.push(t);
}
var gh = rt.ReactCurrentBatchConfig;
function je(t, e) {
    if (t && t.defaultProps) {
        (e = Q({}, e)), (t = t.defaultProps);
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e;
    }
    return e;
}
var kl = kt(null),
    Cl = null,
    Zt = null,
    ms = null;
function ys() {
    ms = Zt = Cl = null;
}
function gs(t) {
    var e = kl.current;
    U(kl), (t._currentValue = e);
}
function ho(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if (
            ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
                : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
            t === n)
        )
            break;
        t = t.return;
    }
}
function ln(t, e) {
    (Cl = t),
        (ms = Zt = null),
        (t = t.dependencies),
        t !== null &&
            t.firstContext !== null &&
            (t.lanes & e && (he = !0), (t.firstContext = null));
}
function Oe(t) {
    var e = t._currentValue;
    if (ms !== t)
        if (((t = { context: t, memoizedValue: e, next: null }), Zt === null)) {
            if (Cl === null) throw Error(x(308));
            (Zt = t), (Cl.dependencies = { lanes: 0, firstContext: t });
        } else Zt = Zt.next = t;
    return e;
}
var Rt = null;
function vs(t) {
    Rt === null ? (Rt = [t]) : Rt.push(t);
}
function $c(t, e, n, r) {
    var l = e.interleaved;
    return (
        l === null ? ((n.next = n), vs(e)) : ((n.next = l.next), (l.next = n)),
        (e.interleaved = n),
        et(t, r)
    );
}
function et(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
        (t.childLanes |= e),
            (n = t.alternate),
            n !== null && (n.childLanes |= e),
            (n = t),
            (t = t.return);
    return n.tag === 3 ? n.stateNode : null;
}
var ot = !1;
function ws(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Fc(t, e) {
    (t = t.updateQueue),
        e.updateQueue === t &&
            (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
            });
}
function Ze(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function mt(t, e, n) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), T & 2)) {
        var l = r.pending;
        return (
            l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
            (r.pending = e),
            et(t, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((e.next = e), vs(r)) : ((e.next = l.next), (l.next = e)),
        (r.interleaved = e),
        et(t, n)
    );
}
function br(t, e, n) {
    if (
        ((e = e.updateQueue),
        e !== null && ((e = e.shared), (n & 4194240) !== 0))
    ) {
        var r = e.lanes;
        (r &= t.pendingLanes), (n |= r), (e.lanes = n), ls(t, n);
    }
}
function Mu(t, e) {
    var n = t.updateQueue,
        r = t.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (l = i = e) : (i = i.next = e);
        } else l = i = e;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (t.updateQueue = n);
        return;
    }
    (t = n.lastBaseUpdate),
        t === null ? (n.firstBaseUpdate = e) : (t.next = e),
        (n.lastBaseUpdate = e);
}
function El(t, e, n, r) {
    var l = t.updateQueue;
    ot = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        s = l.shared.pending;
    if (s !== null) {
        l.shared.pending = null;
        var u = s,
            a = u.next;
        (u.next = null), o === null ? (i = a) : (o.next = a), (o = u);
        var p = t.alternate;
        p !== null &&
            ((p = p.updateQueue),
            (s = p.lastBaseUpdate),
            s !== o &&
                (s === null ? (p.firstBaseUpdate = a) : (s.next = a),
                (p.lastBaseUpdate = u)));
    }
    if (i !== null) {
        var m = l.baseState;
        (o = 0), (p = a = u = null), (s = i);
        do {
            var h = s.lane,
                v = s.eventTime;
            if ((r & h) === h) {
                p !== null &&
                    (p = p.next =
                        {
                            eventTime: v,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null,
                        });
                e: {
                    var w = t,
                        S = s;
                    switch (((h = e), (v = n), S.tag)) {
                        case 1:
                            if (((w = S.payload), typeof w == "function")) {
                                m = w.call(v, m, h);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = S.payload),
                                (h =
                                    typeof w == "function"
                                        ? w.call(v, m, h)
                                        : w),
                                h == null)
                            )
                                break e;
                            m = Q({}, m, h);
                            break e;
                        case 2:
                            ot = !0;
                    }
                }
                s.callback !== null &&
                    s.lane !== 0 &&
                    ((t.flags |= 64),
                    (h = l.effects),
                    h === null ? (l.effects = [s]) : h.push(s));
            } else
                (v = {
                    eventTime: v,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                }),
                    p === null ? ((a = p = v), (u = m)) : (p = p.next = v),
                    (o |= h);
            if (((s = s.next), s === null)) {
                if (((s = l.shared.pending), s === null)) break;
                (h = s),
                    (s = h.next),
                    (h.next = null),
                    (l.lastBaseUpdate = h),
                    (l.shared.pending = null);
            }
        } while (1);
        if (
            (p === null && (u = m),
            (l.baseState = u),
            (l.firstBaseUpdate = a),
            (l.lastBaseUpdate = p),
            (e = l.shared.interleaved),
            e !== null)
        ) {
            l = e;
            do (o |= l.lane), (l = l.next);
            while (l !== e);
        } else i === null && (l.shared.lanes = 0);
        (At |= o), (t.lanes = o), (t.memoizedState = m);
    }
}
function Du(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
        for (e = 0; e < t.length; e++) {
            var r = t[e],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(x(191, l));
                l.call(r);
            }
        }
}
var Uc = new $a.Component().refs;
function mo(t, e, n, r) {
    (e = t.memoizedState),
        (n = n(r, e)),
        (n = n == null ? e : Q({}, e, n)),
        (t.memoizedState = n),
        t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Hl = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? Ft(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var r = ce(),
            l = gt(t),
            i = Ze(r, l);
        (i.payload = e),
            n != null && (i.callback = n),
            (e = mt(t, i, l)),
            e !== null && (Ae(e, t, l, r), br(e, t, l));
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var r = ce(),
            l = gt(t),
            i = Ze(r, l);
        (i.tag = 1),
            (i.payload = e),
            n != null && (i.callback = n),
            (e = mt(t, i, l)),
            e !== null && (Ae(e, t, l, r), br(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = ce(),
            r = gt(t),
            l = Ze(n, r);
        (l.tag = 2),
            e != null && (l.callback = e),
            (e = mt(t, l, r)),
            e !== null && (Ae(e, t, r, n), br(e, t, r));
    },
};
function Au(t, e, n, r, l, i, o) {
    return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == "function"
            ? t.shouldComponentUpdate(r, i, o)
            : e.prototype && e.prototype.isPureReactComponent
            ? !qn(n, r) || !qn(l, i)
            : !0
    );
}
function Bc(t, e, n) {
    var r = !1,
        l = xt,
        i = e.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = Oe(i))
            : ((l = ye(e) ? Tt : ue.current),
              (r = e.contextTypes),
              (i = (r = r != null) ? un(t, l) : xt)),
        (e = new e(n, i)),
        (t.memoizedState =
            e.state !== null && e.state !== void 0 ? e.state : null),
        (e.updater = Hl),
        (t.stateNode = e),
        (e._reactInternals = t),
        r &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = l),
            (t.__reactInternalMemoizedMaskedChildContext = i)),
        e
    );
}
function Iu(t, e, n, r) {
    (t = e.state),
        typeof e.componentWillReceiveProps == "function" &&
            e.componentWillReceiveProps(n, r),
        typeof e.UNSAFE_componentWillReceiveProps == "function" &&
            e.UNSAFE_componentWillReceiveProps(n, r),
        e.state !== t && Hl.enqueueReplaceState(e, e.state, null);
}
function yo(t, e, n, r) {
    var l = t.stateNode;
    (l.props = n), (l.state = t.memoizedState), (l.refs = Uc), ws(t);
    var i = e.contextType;
    typeof i == "object" && i !== null
        ? (l.context = Oe(i))
        : ((i = ye(e) ? Tt : ue.current), (l.context = un(t, i))),
        (l.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (mo(t, e, i, n), (l.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((e = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            e !== l.state && Hl.enqueueReplaceState(l, l.state, null),
            El(t, n, l, r),
            (l.state = t.memoizedState)),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308);
}
function Pn(t, e, n) {
    if (
        ((t = n.ref),
        t !== null && typeof t != "function" && typeof t != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(x(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(x(147, t));
            var l = r,
                i = "" + t;
            return e !== null &&
                e.ref !== null &&
                typeof e.ref == "function" &&
                e.ref._stringRef === i
                ? e.ref
                : ((e = function (o) {
                      var s = l.refs;
                      s === Uc && (s = l.refs = {}),
                          o === null ? delete s[i] : (s[i] = o);
                  }),
                  (e._stringRef = i),
                  e);
        }
        if (typeof t != "string") throw Error(x(284));
        if (!n._owner) throw Error(x(290, t));
    }
    return t;
}
function Mr(t, e) {
    throw (
        ((t = Object.prototype.toString.call(e)),
        Error(
            x(
                31,
                t === "[object Object]"
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
            )
        ))
    );
}
function $u(t) {
    var e = t._init;
    return e(t._payload);
}
function Wc(t) {
    function e(f, c) {
        if (t) {
            var d = f.deletions;
            d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
        }
    }
    function n(f, c) {
        if (!t) return null;
        for (; c !== null; ) e(f, c), (c = c.sibling);
        return null;
    }
    function r(f, c) {
        for (f = new Map(); c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
                (c = c.sibling);
        return f;
    }
    function l(f, c) {
        return (f = vt(f, c)), (f.index = 0), (f.sibling = null), f;
    }
    function i(f, c, d) {
        return (
            (f.index = d),
            t
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
                      : ((f.flags |= 2), c))
                : ((f.flags |= 1048576), c)
        );
    }
    function o(f) {
        return t && f.alternate === null && (f.flags |= 2), f;
    }
    function s(f, c, d, g) {
        return c === null || c.tag !== 6
            ? ((c = ji(d, f.mode, g)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c);
    }
    function u(f, c, d, g) {
        var C = d.type;
        return C === Vt
            ? p(f, c, d.props.children, g, d.key)
            : c !== null &&
              (c.elementType === C ||
                  (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === it &&
                      $u(C) === c.type))
            ? ((g = l(c, d.props)), (g.ref = Pn(f, c, d)), (g.return = f), g)
            : ((g = il(d.type, d.key, d.props, null, f.mode, g)),
              (g.ref = Pn(f, c, d)),
              (g.return = f),
              g);
    }
    function a(f, c, d, g) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== d.containerInfo ||
            c.stateNode.implementation !== d.implementation
            ? ((c = Li(d, f.mode, g)), (c.return = f), c)
            : ((c = l(c, d.children || [])), (c.return = f), c);
    }
    function p(f, c, d, g, C) {
        return c === null || c.tag !== 7
            ? ((c = Lt(d, f.mode, g, C)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c);
    }
    function m(f, c, d) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = ji("" + c, f.mode, d)), (c.return = f), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Cr:
                    return (
                        (d = il(c.type, c.key, c.props, null, f.mode, d)),
                        (d.ref = Pn(f, null, c)),
                        (d.return = f),
                        d
                    );
                case Wt:
                    return (c = Li(c, f.mode, d)), (c.return = f), c;
                case it:
                    var g = c._init;
                    return m(f, g(c._payload), d);
            }
            if (Ln(c) || Sn(c))
                return (c = Lt(c, f.mode, d, null)), (c.return = f), c;
            Mr(f, c);
        }
        return null;
    }
    function h(f, c, d, g) {
        var C = c !== null ? c.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return C !== null ? null : s(f, c, "" + d, g);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Cr:
                    return d.key === C ? u(f, c, d, g) : null;
                case Wt:
                    return d.key === C ? a(f, c, d, g) : null;
                case it:
                    return (C = d._init), h(f, c, C(d._payload), g);
            }
            if (Ln(d) || Sn(d)) return C !== null ? null : p(f, c, d, g, null);
            Mr(f, d);
        }
        return null;
    }
    function v(f, c, d, g, C) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
            return (f = f.get(d) || null), s(c, f, "" + g, C);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Cr:
                    return (
                        (f = f.get(g.key === null ? d : g.key) || null),
                        u(c, f, g, C)
                    );
                case Wt:
                    return (
                        (f = f.get(g.key === null ? d : g.key) || null),
                        a(c, f, g, C)
                    );
                case it:
                    var _ = g._init;
                    return v(f, c, d, _(g._payload), C);
            }
            if (Ln(g) || Sn(g))
                return (f = f.get(d) || null), p(c, f, g, C, null);
            Mr(c, g);
        }
        return null;
    }
    function w(f, c, d, g) {
        for (
            var C = null, _ = null, E = c, N = (c = 0), M = null;
            E !== null && N < d.length;
            N++
        ) {
            E.index > N ? ((M = E), (E = null)) : (M = E.sibling);
            var R = h(f, E, d[N], g);
            if (R === null) {
                E === null && (E = M);
                break;
            }
            t && E && R.alternate === null && e(f, E),
                (c = i(R, c, N)),
                _ === null ? (C = R) : (_.sibling = R),
                (_ = R),
                (E = M);
        }
        if (N === d.length) return n(f, E), B && Pt(f, N), C;
        if (E === null) {
            for (; N < d.length; N++)
                (E = m(f, d[N], g)),
                    E !== null &&
                        ((c = i(E, c, N)),
                        _ === null ? (C = E) : (_.sibling = E),
                        (_ = E));
            return B && Pt(f, N), C;
        }
        for (E = r(f, E); N < d.length; N++)
            (M = v(E, f, N, d[N], g)),
                M !== null &&
                    (t &&
                        M.alternate !== null &&
                        E.delete(M.key === null ? N : M.key),
                    (c = i(M, c, N)),
                    _ === null ? (C = M) : (_.sibling = M),
                    (_ = M));
        return (
            t &&
                E.forEach(function (le) {
                    return e(f, le);
                }),
            B && Pt(f, N),
            C
        );
    }
    function S(f, c, d, g) {
        var C = Sn(d);
        if (typeof C != "function") throw Error(x(150));
        if (((d = C.call(d)), d == null)) throw Error(x(151));
        for (
            var _ = (C = null), E = c, N = (c = 0), M = null, R = d.next();
            E !== null && !R.done;
            N++, R = d.next()
        ) {
            E.index > N ? ((M = E), (E = null)) : (M = E.sibling);
            var le = h(f, E, R.value, g);
            if (le === null) {
                E === null && (E = M);
                break;
            }
            t && E && le.alternate === null && e(f, E),
                (c = i(le, c, N)),
                _ === null ? (C = le) : (_.sibling = le),
                (_ = le),
                (E = M);
        }
        if (R.done) return n(f, E), B && Pt(f, N), C;
        if (E === null) {
            for (; !R.done; N++, R = d.next())
                (R = m(f, R.value, g)),
                    R !== null &&
                        ((c = i(R, c, N)),
                        _ === null ? (C = R) : (_.sibling = R),
                        (_ = R));
            return B && Pt(f, N), C;
        }
        for (E = r(f, E); !R.done; N++, R = d.next())
            (R = v(E, f, N, R.value, g)),
                R !== null &&
                    (t &&
                        R.alternate !== null &&
                        E.delete(R.key === null ? N : R.key),
                    (c = i(R, c, N)),
                    _ === null ? (C = R) : (_.sibling = R),
                    (_ = R));
        return (
            t &&
                E.forEach(function (Ke) {
                    return e(f, Ke);
                }),
            B && Pt(f, N),
            C
        );
    }
    function k(f, c, d, g) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === Vt &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case Cr:
                    e: {
                        for (var C = d.key, _ = c; _ !== null; ) {
                            if (_.key === C) {
                                if (((C = d.type), C === Vt)) {
                                    if (_.tag === 7) {
                                        n(f, _.sibling),
                                            (c = l(_, d.props.children)),
                                            (c.return = f),
                                            (f = c);
                                        break e;
                                    }
                                } else if (
                                    _.elementType === C ||
                                    (typeof C == "object" &&
                                        C !== null &&
                                        C.$$typeof === it &&
                                        $u(C) === _.type)
                                ) {
                                    n(f, _.sibling),
                                        (c = l(_, d.props)),
                                        (c.ref = Pn(f, _, d)),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                }
                                n(f, _);
                                break;
                            } else e(f, _);
                            _ = _.sibling;
                        }
                        d.type === Vt
                            ? ((c = Lt(d.props.children, f.mode, g, d.key)),
                              (c.return = f),
                              (f = c))
                            : ((g = il(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  g
                              )),
                              (g.ref = Pn(f, c, d)),
                              (g.return = f),
                              (f = g));
                    }
                    return o(f);
                case Wt:
                    e: {
                        for (_ = d.key; c !== null; ) {
                            if (c.key === _)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    c.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(f, c.sibling),
                                        (c = l(c, d.children || [])),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                } else {
                                    n(f, c);
                                    break;
                                }
                            else e(f, c);
                            c = c.sibling;
                        }
                        (c = Li(d, f.mode, g)), (c.return = f), (f = c);
                    }
                    return o(f);
                case it:
                    return (_ = d._init), k(f, c, _(d._payload), g);
            }
            if (Ln(d)) return w(f, c, d, g);
            if (Sn(d)) return S(f, c, d, g);
            Mr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              c !== null && c.tag === 6
                  ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
                  : (n(f, c), (c = ji(d, f.mode, g)), (c.return = f), (f = c)),
              o(f))
            : n(f, c);
    }
    return k;
}
var cn = Wc(!0),
    Vc = Wc(!1),
    gr = {},
    Qe = kt(gr),
    nr = kt(gr),
    rr = kt(gr);
function zt(t) {
    if (t === gr) throw Error(x(174));
    return t;
}
function xs(t, e) {
    switch ((I(rr, e), I(nr, t), I(Qe, gr), (t = e.nodeType), t)) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : Yi(null, "");
            break;
        default:
            (t = t === 8 ? e.parentNode : e),
                (e = t.namespaceURI || null),
                (t = t.tagName),
                (e = Yi(e, t));
    }
    U(Qe), I(Qe, e);
}
function fn() {
    U(Qe), U(nr), U(rr);
}
function Hc(t) {
    zt(rr.current);
    var e = zt(Qe.current),
        n = Yi(e, t.type);
    e !== n && (I(nr, t), I(Qe, n));
}
function Ss(t) {
    nr.current === t && (U(Qe), U(nr));
}
var V = kt(0);
function _l(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return e;
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e;
        } else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return null;
            e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
}
var _i = [];
function ks() {
    for (var t = 0; t < _i.length; t++)
        _i[t]._workInProgressVersionPrimary = null;
    _i.length = 0;
}
var el = rt.ReactCurrentDispatcher,
    Pi = rt.ReactCurrentBatchConfig,
    Dt = 0,
    H = null,
    J = null,
    b = null,
    Pl = !1,
    Bn = !1,
    lr = 0,
    vh = 0;
function ie() {
    throw Error(x(321));
}
function Cs(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!Ie(t[n], e[n])) return !1;
    return !0;
}
function Es(t, e, n, r, l, i) {
    if (
        ((Dt = i),
        (H = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (el.current = t === null || t.memoizedState === null ? kh : Ch),
        (t = n(r, l)),
        Bn)
    ) {
        i = 0;
        do {
            if (((Bn = !1), (lr = 0), 25 <= i)) throw Error(x(301));
            (i += 1),
                (b = J = null),
                (e.updateQueue = null),
                (el.current = Eh),
                (t = n(r, l));
        } while (Bn);
    }
    if (
        ((el.current = Nl),
        (e = J !== null && J.next !== null),
        (Dt = 0),
        (b = J = H = null),
        (Pl = !1),
        e)
    )
        throw Error(x(300));
    return t;
}
function _s() {
    var t = lr !== 0;
    return (lr = 0), t;
}
function We() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return b === null ? (H.memoizedState = b = t) : (b = b.next = t), b;
}
function Re() {
    if (J === null) {
        var t = H.alternate;
        t = t !== null ? t.memoizedState : null;
    } else t = J.next;
    var e = b === null ? H.memoizedState : b.next;
    if (e !== null) (b = e), (J = t);
    else {
        if (t === null) throw Error(x(310));
        (J = t),
            (t = {
                memoizedState: J.memoizedState,
                baseState: J.baseState,
                baseQueue: J.baseQueue,
                queue: J.queue,
                next: null,
            }),
            b === null ? (H.memoizedState = b = t) : (b = b.next = t);
    }
    return b;
}
function ir(t, e) {
    return typeof e == "function" ? e(t) : e;
}
function Ni(t) {
    var e = Re(),
        n = e.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = t;
    var r = J,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            (l.next = i.next), (i.next = o);
        }
        (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
        (i = l.next), (r = r.baseState);
        var s = (o = null),
            u = null,
            a = i;
        do {
            var p = a.lane;
            if ((Dt & p) === p)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: a.action,
                            hasEagerState: a.hasEagerState,
                            eagerState: a.eagerState,
                            next: null,
                        }),
                    (r = a.hasEagerState ? a.eagerState : t(r, a.action));
            else {
                var m = {
                    lane: p,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                };
                u === null ? ((s = u = m), (o = r)) : (u = u.next = m),
                    (H.lanes |= p),
                    (At |= p);
            }
            a = a.next;
        } while (a !== null && a !== i);
        u === null ? (o = r) : (u.next = s),
            Ie(r, e.memoizedState) || (he = !0),
            (e.memoizedState = r),
            (e.baseState = o),
            (e.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((t = n.interleaved), t !== null)) {
        l = t;
        do (i = l.lane), (H.lanes |= i), (At |= i), (l = l.next);
        while (l !== t);
    } else l === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch];
}
function Oi(t) {
    var e = Re(),
        n = e.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch,
        l = n.pending,
        i = e.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = (l = l.next);
        do (i = t(i, o.action)), (o = o.next);
        while (o !== l);
        Ie(i, e.memoizedState) || (he = !0),
            (e.memoizedState = i),
            e.baseQueue === null && (e.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Qc() {}
function Kc(t, e) {
    var n = H,
        r = Re(),
        l = e(),
        i = !Ie(r.memoizedState, l);
    if (
        (i && ((r.memoizedState = l), (he = !0)),
        (r = r.queue),
        Ps(Xc.bind(null, n, r, t), [t]),
        r.getSnapshot !== e || i || (b !== null && b.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            or(9, Gc.bind(null, n, r, l, e), void 0, null),
            ee === null)
        )
            throw Error(x(349));
        Dt & 30 || Yc(n, e, l);
    }
    return l;
}
function Yc(t, e, n) {
    (t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        (e = H.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
              (H.updateQueue = e),
              (e.stores = [t]))
            : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Gc(t, e, n, r) {
    (e.value = n), (e.getSnapshot = r), Jc(e) && Zc(t);
}
function Xc(t, e, n) {
    return n(function () {
        Jc(e) && Zc(t);
    });
}
function Jc(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Ie(t, n);
    } catch {
        return !0;
    }
}
function Zc(t) {
    var e = et(t, 1);
    e !== null && Ae(e, t, 1, -1);
}
function Fu(t) {
    var e = We();
    return (
        typeof t == "function" && (t = t()),
        (e.memoizedState = e.baseState = t),
        (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ir,
            lastRenderedState: t,
        }),
        (e.queue = t),
        (t = t.dispatch = Sh.bind(null, H, t)),
        [e.memoizedState, t]
    );
}
function or(t, e, n, r) {
    return (
        (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
        (e = H.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
              (H.updateQueue = e),
              (e.lastEffect = t.next = t))
            : ((n = e.lastEffect),
              n === null
                  ? (e.lastEffect = t.next = t)
                  : ((r = n.next),
                    (n.next = t),
                    (t.next = r),
                    (e.lastEffect = t))),
        t
    );
}
function qc() {
    return Re().memoizedState;
}
function tl(t, e, n, r) {
    var l = We();
    (H.flags |= t),
        (l.memoizedState = or(1 | e, n, void 0, r === void 0 ? null : r));
}
function Ql(t, e, n, r) {
    var l = Re();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (J !== null) {
        var o = J.memoizedState;
        if (((i = o.destroy), r !== null && Cs(r, o.deps))) {
            l.memoizedState = or(e, n, i, r);
            return;
        }
    }
    (H.flags |= t), (l.memoizedState = or(1 | e, n, i, r));
}
function Uu(t, e) {
    return tl(8390656, 8, t, e);
}
function Ps(t, e) {
    return Ql(2048, 8, t, e);
}
function bc(t, e) {
    return Ql(4, 2, t, e);
}
function ef(t, e) {
    return Ql(4, 4, t, e);
}
function tf(t, e) {
    if (typeof e == "function")
        return (
            (t = t()),
            e(t),
            function () {
                e(null);
            }
        );
    if (e != null)
        return (
            (t = t()),
            (e.current = t),
            function () {
                e.current = null;
            }
        );
}
function nf(t, e, n) {
    return (
        (n = n != null ? n.concat([t]) : null), Ql(4, 4, tf.bind(null, e, t), n)
    );
}
function Ns() {}
function rf(t, e) {
    var n = Re();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Cs(e, r[1])
        ? r[0]
        : ((n.memoizedState = [t, e]), t);
}
function lf(t, e) {
    var n = Re();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Cs(e, r[1])
        ? r[0]
        : ((t = t()), (n.memoizedState = [t, e]), t);
}
function of(t, e, n) {
    return Dt & 21
        ? (Ie(n, e) ||
              ((n = uc()), (H.lanes |= n), (At |= n), (t.baseState = !0)),
          e)
        : (t.baseState && ((t.baseState = !1), (he = !0)),
          (t.memoizedState = n));
}
function wh(t, e) {
    var n = D;
    (D = n !== 0 && 4 > n ? n : 4), t(!0);
    var r = Pi.transition;
    Pi.transition = {};
    try {
        t(!1), e();
    } finally {
        (D = n), (Pi.transition = r);
    }
}
function sf() {
    return Re().memoizedState;
}
function xh(t, e, n) {
    var r = gt(t);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        uf(t))
    )
        af(e, n);
    else if (((n = $c(t, e, n, r)), n !== null)) {
        var l = ce();
        Ae(n, t, r, l), cf(n, e, r);
    }
}
function Sh(t, e, n) {
    var r = gt(t),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (uf(t)) af(e, l);
    else {
        var i = t.alternate;
        if (
            t.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = e.lastRenderedReducer), i !== null)
        )
            try {
                var o = e.lastRenderedState,
                    s = i(o, n);
                if (((l.hasEagerState = !0), (l.eagerState = s), Ie(s, o))) {
                    var u = e.interleaved;
                    u === null
                        ? ((l.next = l), vs(e))
                        : ((l.next = u.next), (u.next = l)),
                        (e.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = $c(t, e, l, r)),
            n !== null && ((l = ce()), Ae(n, t, r, l), cf(n, e, r));
    }
}
function uf(t) {
    var e = t.alternate;
    return t === H || (e !== null && e === H);
}
function af(t, e) {
    Bn = Pl = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (t.pending = e);
}
function cf(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        (r &= t.pendingLanes), (n |= r), (e.lanes = n), ls(t, n);
    }
}
var Nl = {
        readContext: Oe,
        useCallback: ie,
        useContext: ie,
        useEffect: ie,
        useImperativeHandle: ie,
        useInsertionEffect: ie,
        useLayoutEffect: ie,
        useMemo: ie,
        useReducer: ie,
        useRef: ie,
        useState: ie,
        useDebugValue: ie,
        useDeferredValue: ie,
        useTransition: ie,
        useMutableSource: ie,
        useSyncExternalStore: ie,
        useId: ie,
        unstable_isNewReconciler: !1,
    },
    kh = {
        readContext: Oe,
        useCallback: function (t, e) {
            return (We().memoizedState = [t, e === void 0 ? null : e]), t;
        },
        useContext: Oe,
        useEffect: Uu,
        useImperativeHandle: function (t, e, n) {
            return (
                (n = n != null ? n.concat([t]) : null),
                tl(4194308, 4, tf.bind(null, e, t), n)
            );
        },
        useLayoutEffect: function (t, e) {
            return tl(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
            return tl(4, 2, t, e);
        },
        useMemo: function (t, e) {
            var n = We();
            return (
                (e = e === void 0 ? null : e),
                (t = t()),
                (n.memoizedState = [t, e]),
                t
            );
        },
        useReducer: function (t, e, n) {
            var r = We();
            return (
                (e = n !== void 0 ? n(e) : e),
                (r.memoizedState = r.baseState = e),
                (t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e,
                }),
                (r.queue = t),
                (t = t.dispatch = xh.bind(null, H, t)),
                [r.memoizedState, t]
            );
        },
        useRef: function (t) {
            var e = We();
            return (t = { current: t }), (e.memoizedState = t);
        },
        useState: Fu,
        useDebugValue: Ns,
        useDeferredValue: function (t) {
            return (We().memoizedState = t);
        },
        useTransition: function () {
            var t = Fu(!1),
                e = t[0];
            return (t = wh.bind(null, t[1])), (We().memoizedState = t), [e, t];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (t, e, n) {
            var r = H,
                l = We();
            if (B) {
                if (n === void 0) throw Error(x(407));
                n = n();
            } else {
                if (((n = e()), ee === null)) throw Error(x(349));
                Dt & 30 || Yc(r, e, n);
            }
            l.memoizedState = n;
            var i = { value: n, getSnapshot: e };
            return (
                (l.queue = i),
                Uu(Xc.bind(null, r, i, t), [t]),
                (r.flags |= 2048),
                or(9, Gc.bind(null, r, i, n, e), void 0, null),
                n
            );
        },
        useId: function () {
            var t = We(),
                e = ee.identifierPrefix;
            if (B) {
                var n = Je,
                    r = Xe;
                (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
                    (e = ":" + e + "R" + n),
                    (n = lr++),
                    0 < n && (e += "H" + n.toString(32)),
                    (e += ":");
            } else (n = vh++), (e = ":" + e + "r" + n.toString(32) + ":");
            return (t.memoizedState = e);
        },
        unstable_isNewReconciler: !1,
    },
    Ch = {
        readContext: Oe,
        useCallback: rf,
        useContext: Oe,
        useEffect: Ps,
        useImperativeHandle: nf,
        useInsertionEffect: bc,
        useLayoutEffect: ef,
        useMemo: lf,
        useReducer: Ni,
        useRef: qc,
        useState: function () {
            return Ni(ir);
        },
        useDebugValue: Ns,
        useDeferredValue: function (t) {
            var e = Re();
            return of(e, J.memoizedState, t);
        },
        useTransition: function () {
            var t = Ni(ir)[0],
                e = Re().memoizedState;
            return [t, e];
        },
        useMutableSource: Qc,
        useSyncExternalStore: Kc,
        useId: sf,
        unstable_isNewReconciler: !1,
    },
    Eh = {
        readContext: Oe,
        useCallback: rf,
        useContext: Oe,
        useEffect: Ps,
        useImperativeHandle: nf,
        useInsertionEffect: bc,
        useLayoutEffect: ef,
        useMemo: lf,
        useReducer: Oi,
        useRef: qc,
        useState: function () {
            return Oi(ir);
        },
        useDebugValue: Ns,
        useDeferredValue: function (t) {
            var e = Re();
            return J === null
                ? (e.memoizedState = t)
                : of(e, J.memoizedState, t);
        },
        useTransition: function () {
            var t = Oi(ir)[0],
                e = Re().memoizedState;
            return [t, e];
        },
        useMutableSource: Qc,
        useSyncExternalStore: Kc,
        useId: sf,
        unstable_isNewReconciler: !1,
    };
function dn(t, e) {
    try {
        var n = "",
            r = e;
        do (n += qd(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (i) {
        l =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: t, source: e, stack: l, digest: null };
}
function Ri(t, e, n) {
    return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function go(t, e) {
    try {
        console.error(e.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var _h = typeof WeakMap == "function" ? WeakMap : Map;
function ff(t, e, n) {
    (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = e.value;
    return (
        (n.callback = function () {
            Rl || ((Rl = !0), (No = r)), go(t, e);
        }),
        n
    );
}
function df(t, e, n) {
    (n = Ze(-1, n)), (n.tag = 3);
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = e.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                go(t, e);
            });
    }
    var i = t.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                go(t, e),
                    typeof r != "function" &&
                        (yt === null ? (yt = new Set([this])) : yt.add(this));
                var o = e.stack;
                this.componentDidCatch(e.value, {
                    componentStack: o !== null ? o : "",
                });
            }),
        n
    );
}
function Bu(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new _h();
        var l = new Set();
        r.set(e, l);
    } else (l = r.get(e)), l === void 0 && ((l = new Set()), r.set(e, l));
    l.has(n) || (l.add(n), (t = Fh.bind(null, t, e, n)), e.then(t, t));
}
function Wu(t) {
    do {
        var e;
        if (
            ((e = t.tag === 13) &&
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated !== null : !0)),
            e)
        )
            return t;
        t = t.return;
    } while (t !== null);
    return null;
}
function Vu(t, e, n, r, l) {
    return t.mode & 1
        ? ((t.flags |= 65536), (t.lanes = l), t)
        : (t === e
              ? (t.flags |= 65536)
              : ((t.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((e = Ze(-1, 1)), (e.tag = 2), mt(n, e, 1))),
                (n.lanes |= 1)),
          t);
}
var Ph = rt.ReactCurrentOwner,
    he = !1;
function ae(t, e, n, r) {
    e.child = t === null ? Vc(e, null, n, r) : cn(e, t.child, n, r);
}
function Hu(t, e, n, r, l) {
    n = n.render;
    var i = e.ref;
    return (
        ln(e, l),
        (r = Es(t, e, n, r, i, l)),
        (n = _s()),
        t !== null && !he
            ? ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~l),
              tt(t, e, l))
            : (B && n && ds(e), (e.flags |= 1), ae(t, e, r, l), e.child)
    );
}
function Qu(t, e, n, r, l) {
    if (t === null) {
        var i = n.type;
        return typeof i == "function" &&
            !Ds(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((e.tag = 15), (e.type = i), pf(t, e, i, r, l))
            : ((t = il(n.type, null, r, e, e.mode, l)),
              (t.ref = e.ref),
              (t.return = e),
              (e.child = t));
    }
    if (((i = t.child), !(t.lanes & l))) {
        var o = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : qn),
            n(o, r) && t.ref === e.ref)
        )
            return tt(t, e, l);
    }
    return (
        (e.flags |= 1),
        (t = vt(i, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t)
    );
}
function pf(t, e, n, r, l) {
    if (t !== null) {
        var i = t.memoizedProps;
        if (qn(i, r) && t.ref === e.ref)
            if (((he = !1), (e.pendingProps = r = i), (t.lanes & l) !== 0))
                t.flags & 131072 && (he = !0);
            else return (e.lanes = t.lanes), tt(t, e, l);
    }
    return vo(t, e, n, r, l);
}
function hf(t, e, n) {
    var r = e.pendingProps,
        l = r.children,
        i = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                I(bt, ve),
                (ve |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (t = i !== null ? i.baseLanes | n : n),
                    (e.lanes = e.childLanes = 1073741824),
                    (e.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null,
                    }),
                    (e.updateQueue = null),
                    I(bt, ve),
                    (ve |= t),
                    null
                );
            (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                I(bt, ve),
                (ve |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (e.memoizedState = null))
            : (r = n),
            I(bt, ve),
            (ve |= r);
    return ae(t, e, l, n), e.child;
}
function mf(t, e) {
    var n = e.ref;
    ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
        ((e.flags |= 512), (e.flags |= 2097152));
}
function vo(t, e, n, r, l) {
    var i = ye(n) ? Tt : ue.current;
    return (
        (i = un(e, i)),
        ln(e, l),
        (n = Es(t, e, n, r, i, l)),
        (r = _s()),
        t !== null && !he
            ? ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~l),
              tt(t, e, l))
            : (B && r && ds(e), (e.flags |= 1), ae(t, e, n, l), e.child)
    );
}
function Ku(t, e, n, r, l) {
    if (ye(n)) {
        var i = !0;
        wl(e);
    } else i = !1;
    if ((ln(e, l), e.stateNode === null))
        nl(t, e), Bc(e, n, r), yo(e, n, r, l), (r = !0);
    else if (t === null) {
        var o = e.stateNode,
            s = e.memoizedProps;
        o.props = s;
        var u = o.context,
            a = n.contextType;
        typeof a == "object" && a !== null
            ? (a = Oe(a))
            : ((a = ye(n) ? Tt : ue.current), (a = un(e, a)));
        var p = n.getDerivedStateFromProps,
            m =
                typeof p == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function";
        m ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((s !== r || u !== a) && Iu(e, o, r, a)),
            (ot = !1);
        var h = e.memoizedState;
        (o.state = h),
            El(e, r, o, l),
            (u = e.memoizedState),
            s !== r || h !== u || me.current || ot
                ? (typeof p == "function" &&
                      (mo(e, n, p, r), (u = e.memoizedState)),
                  (s = ot || Au(e, n, s, r, h, u, a))
                      ? (m ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" &&
                            (e.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" &&
                            (e.flags |= 4194308),
                        (e.memoizedProps = r),
                        (e.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = a),
                  (r = s))
                : (typeof o.componentDidMount == "function" &&
                      (e.flags |= 4194308),
                  (r = !1));
    } else {
        (o = e.stateNode),
            Fc(t, e),
            (s = e.memoizedProps),
            (a = e.type === e.elementType ? s : je(e.type, s)),
            (o.props = a),
            (m = e.pendingProps),
            (h = o.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = Oe(u))
                : ((u = ye(n) ? Tt : ue.current), (u = un(e, u)));
        var v = n.getDerivedStateFromProps;
        (p =
            typeof v == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((s !== m || h !== u) && Iu(e, o, r, u)),
            (ot = !1),
            (h = e.memoizedState),
            (o.state = h),
            El(e, r, o, l);
        var w = e.memoizedState;
        s !== m || h !== w || me.current || ot
            ? (typeof v == "function" &&
                  (mo(e, n, v, r), (w = e.memoizedState)),
              (a = ot || Au(e, n, a, r, h, w, u) || !1)
                  ? (p ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" &&
                            o.componentWillUpdate(r, w, u),
                        typeof o.UNSAFE_componentWillUpdate == "function" &&
                            o.UNSAFE_componentWillUpdate(r, w, u)),
                    typeof o.componentDidUpdate == "function" && (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" &&
                        (e.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (s === t.memoizedProps && h === t.memoizedState) ||
                        (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (s === t.memoizedProps && h === t.memoizedState) ||
                        (e.flags |= 1024),
                    (e.memoizedProps = r),
                    (e.memoizedState = w)),
              (o.props = r),
              (o.state = w),
              (o.context = u),
              (r = a))
            : (typeof o.componentDidUpdate != "function" ||
                  (s === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (s === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 1024),
              (r = !1));
    }
    return wo(t, e, n, r, i, l);
}
function wo(t, e, n, r, l, i) {
    mf(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o) return l && ju(e, n, !1), tt(t, e, i);
    (r = e.stateNode), (Ph.current = e);
    var s =
        o && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (e.flags |= 1),
        t !== null && o
            ? ((e.child = cn(e, t.child, null, i)),
              (e.child = cn(e, null, s, i)))
            : ae(t, e, s, i),
        (e.memoizedState = r.state),
        l && ju(e, n, !0),
        e.child
    );
}
function yf(t) {
    var e = t.stateNode;
    e.pendingContext
        ? zu(t, e.pendingContext, e.pendingContext !== e.context)
        : e.context && zu(t, e.context, !1),
        xs(t, e.containerInfo);
}
function Yu(t, e, n, r, l) {
    return an(), hs(l), (e.flags |= 256), ae(t, e, n, r), e.child;
}
var xo = { dehydrated: null, treeContext: null, retryLane: 0 };
function So(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
}
function gf(t, e, n) {
    var r = e.pendingProps,
        l = V.current,
        i = !1,
        o = (e.flags & 128) !== 0,
        s;
    if (
        ((s = o) ||
            (s = t !== null && t.memoizedState === null ? !1 : (l & 2) !== 0),
        s
            ? ((i = !0), (e.flags &= -129))
            : (t === null || t.memoizedState !== null) && (l |= 1),
        I(V, l & 1),
        t === null)
    )
        return (
            po(e),
            (t = e.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null)
                ? (e.mode & 1
                      ? t.data === "$!"
                          ? (e.lanes = 8)
                          : (e.lanes = 1073741824)
                      : (e.lanes = 1),
                  null)
                : ((o = r.children),
                  (t = r.fallback),
                  i
                      ? ((r = e.mode),
                        (i = e.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = o))
                            : (i = Gl(o, r, 0, null)),
                        (t = Lt(t, r, n, null)),
                        (i.return = e),
                        (t.return = e),
                        (i.sibling = t),
                        (e.child = i),
                        (e.child.memoizedState = So(n)),
                        (e.memoizedState = xo),
                        t)
                      : Os(e, o))
        );
    if (((l = t.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
        return Nh(t, e, o, r, s, l, n);
    if (i) {
        (i = r.fallback), (o = e.mode), (l = t.child), (s = l.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && e.child !== l
                ? ((r = e.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (e.deletions = null))
                : ((r = vt(l, u)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            s !== null
                ? (i = vt(s, i))
                : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
            (i.return = e),
            (r.return = e),
            (r.sibling = i),
            (e.child = r),
            (r = i),
            (i = e.child),
            (o = t.child.memoizedState),
            (o =
                o === null
                    ? So(n)
                    : {
                          baseLanes: o.baseLanes | n,
                          cachePool: null,
                          transitions: o.transitions,
                      }),
            (i.memoizedState = o),
            (i.childLanes = t.childLanes & ~n),
            (e.memoizedState = xo),
            r
        );
    }
    return (
        (i = t.child),
        (t = i.sibling),
        (r = vt(i, { mode: "visible", children: r.children })),
        !(e.mode & 1) && (r.lanes = n),
        (r.return = e),
        (r.sibling = null),
        t !== null &&
            ((n = e.deletions),
            n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
        (e.child = r),
        (e.memoizedState = null),
        r
    );
}
function Os(t, e) {
    return (
        (e = Gl({ mode: "visible", children: e }, t.mode, 0, null)),
        (e.return = t),
        (t.child = e)
    );
}
function Dr(t, e, n, r) {
    return (
        r !== null && hs(r),
        cn(e, t.child, null, n),
        (t = Os(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
    );
}
function Nh(t, e, n, r, l, i, o) {
    if (n)
        return e.flags & 256
            ? ((e.flags &= -257), (r = Ri(Error(x(422)))), Dr(t, e, o, r))
            : e.memoizedState !== null
            ? ((e.child = t.child), (e.flags |= 128), null)
            : ((i = r.fallback),
              (l = e.mode),
              (r = Gl({ mode: "visible", children: r.children }, l, 0, null)),
              (i = Lt(i, l, o, null)),
              (i.flags |= 2),
              (r.return = e),
              (i.return = e),
              (r.sibling = i),
              (e.child = r),
              e.mode & 1 && cn(e, t.child, null, o),
              (e.child.memoizedState = So(o)),
              (e.memoizedState = xo),
              i);
    if (!(e.mode & 1)) return Dr(t, e, o, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
        return (
            (r = s), (i = Error(x(419))), (r = Ri(i, r, void 0)), Dr(t, e, o, r)
        );
    }
    if (((s = (o & t.childLanes) !== 0), he || s)) {
        if (((r = ee), r !== null)) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | o) ? 0 : l),
                l !== 0 &&
                    l !== i.retryLane &&
                    ((i.retryLane = l), et(t, l), Ae(r, t, l, -1));
        }
        return Ms(), (r = Ri(Error(x(421)))), Dr(t, e, o, r);
    }
    return l.data === "$?"
        ? ((e.flags |= 128),
          (e.child = t.child),
          (e = Uh.bind(null, t)),
          (l._reactRetry = e),
          null)
        : ((t = i.treeContext),
          (we = ht(l.nextSibling)),
          (xe = e),
          (B = !0),
          (Me = null),
          t !== null &&
              ((Ee[_e++] = Xe),
              (Ee[_e++] = Je),
              (Ee[_e++] = Mt),
              (Xe = t.id),
              (Je = t.overflow),
              (Mt = e)),
          (e = Os(e, r.children)),
          (e.flags |= 4096),
          e);
}
function Gu(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), ho(t.return, e, n);
}
function zi(t, e, n, r, l) {
    var i = t.memoizedState;
    i === null
        ? (t.memoizedState = {
              isBackwards: e,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((i.isBackwards = e),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = l));
}
function vf(t, e, n) {
    var r = e.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if ((ae(t, e, r.children, n), (r = V.current), r & 2))
        (r = (r & 1) | 2), (e.flags |= 128);
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13) t.memoizedState !== null && Gu(t, n, e);
                else if (t.tag === 19) Gu(t, n, e);
                else if (t.child !== null) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) break e;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        r &= 1;
    }
    if ((I(V, r), !(e.mode & 1))) e.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = e.child, l = null; n !== null; )
                    (t = n.alternate),
                        t !== null && _l(t) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = e.child), (e.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    zi(e, !1, l, n, i);
                break;
            case "backwards":
                for (n = null, l = e.child, e.child = null; l !== null; ) {
                    if (((t = l.alternate), t !== null && _l(t) === null)) {
                        e.child = l;
                        break;
                    }
                    (t = l.sibling), (l.sibling = n), (n = l), (l = t);
                }
                zi(e, !0, n, null, i);
                break;
            case "together":
                zi(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
    return e.child;
}
function nl(t, e) {
    !(e.mode & 1) &&
        t !== null &&
        ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function tt(t, e, n) {
    if (
        (t !== null && (e.dependencies = t.dependencies),
        (At |= e.lanes),
        !(n & e.childLanes))
    )
        return null;
    if (t !== null && e.child !== t.child) throw Error(x(153));
    if (e.child !== null) {
        for (
            t = e.child, n = vt(t, t.pendingProps), e.child = n, n.return = e;
            t.sibling !== null;

        )
            (t = t.sibling),
                (n = n.sibling = vt(t, t.pendingProps)),
                (n.return = e);
        n.sibling = null;
    }
    return e.child;
}
function Oh(t, e, n) {
    switch (e.tag) {
        case 3:
            yf(e), an();
            break;
        case 5:
            Hc(e);
            break;
        case 1:
            ye(e.type) && wl(e);
            break;
        case 4:
            xs(e, e.stateNode.containerInfo);
            break;
        case 10:
            var r = e.type._context,
                l = e.memoizedProps.value;
            I(kl, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = e.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (I(V, V.current & 1), (e.flags |= 128), null)
                    : n & e.child.childLanes
                    ? gf(t, e, n)
                    : (I(V, V.current & 1),
                      (t = tt(t, e, n)),
                      t !== null ? t.sibling : null);
            I(V, V.current & 1);
            break;
        case 19:
            if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
                if (r) return vf(t, e, n);
                e.flags |= 128;
            }
            if (
                ((l = e.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                I(V, V.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (e.lanes = 0), hf(t, e, n);
    }
    return tt(t, e, n);
}
var wf, ko, xf, Sf;
wf = function (t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
ko = function () {};
xf = function (t, e, n, r) {
    var l = t.memoizedProps;
    if (l !== r) {
        (t = e.stateNode), zt(Qe.current);
        var i = null;
        switch (n) {
            case "input":
                (l = Vi(t, l)), (r = Vi(t, r)), (i = []);
                break;
            case "select":
                (l = Q({}, l, { value: void 0 })),
                    (r = Q({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (l = Ki(t, l)), (r = Ki(t, r)), (i = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (t.onclick = gl);
        }
        Gi(n, r);
        var o;
        n = null;
        for (a in l)
            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
                if (a === "style") {
                    var s = l[a];
                    for (o in s)
                        s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    a !== "dangerouslySetInnerHTML" &&
                        a !== "children" &&
                        a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (Qn.hasOwnProperty(a)
                            ? i || (i = [])
                            : (i = i || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (
                ((s = l != null ? l[a] : void 0),
                r.hasOwnProperty(a) && u !== s && (u != null || s != null))
            )
                if (a === "style")
                    if (s) {
                        for (o in s)
                            !s.hasOwnProperty(o) ||
                                (u && u.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ""));
                        for (o in u)
                            u.hasOwnProperty(o) &&
                                s[o] !== u[o] &&
                                (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(a, n)), (n = u);
                else
                    a === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (s = s ? s.__html : void 0),
                          u != null && s !== u && (i = i || []).push(a, u))
                        : a === "children"
                        ? (typeof u != "string" && typeof u != "number") ||
                          (i = i || []).push(a, "" + u)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          (Qn.hasOwnProperty(a)
                              ? (u != null &&
                                    a === "onScroll" &&
                                    F("scroll", t),
                                i || s === u || (i = []))
                              : (i = i || []).push(a, u));
        }
        n && (i = i || []).push("style", n);
        var a = i;
        (e.updateQueue = a) && (e.flags |= 4);
    }
};
Sf = function (t, e, n, r) {
    n !== r && (e.flags |= 4);
};
function Nn(t, e) {
    if (!B)
        switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e), (e = e.sibling);
                n === null ? (t.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = t.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? e || t.tail === null
                        ? (t.tail = null)
                        : (t.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function oe(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        r = 0;
    if (e)
        for (var l = t.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = t),
                (l = l.sibling);
    else
        for (l = t.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = t),
                (l = l.sibling);
    return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function Rh(t, e, n) {
    var r = e.pendingProps;
    switch ((ps(e), e.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return oe(e), null;
        case 1:
            return ye(e.type) && vl(), oe(e), null;
        case 3:
            return (
                (r = e.stateNode),
                fn(),
                U(me),
                U(ue),
                ks(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (t === null || t.child === null) &&
                    (Tr(e)
                        ? (e.flags |= 4)
                        : t === null ||
                          (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                          ((e.flags |= 1024),
                          Me !== null && (zo(Me), (Me = null)))),
                ko(t, e),
                oe(e),
                null
            );
        case 5:
            Ss(e);
            var l = zt(rr.current);
            if (((n = e.type), t !== null && e.stateNode != null))
                xf(t, e, n, r, l),
                    t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
            else {
                if (!r) {
                    if (e.stateNode === null) throw Error(x(166));
                    return oe(e), null;
                }
                if (((t = zt(Qe.current)), Tr(e))) {
                    (r = e.stateNode), (n = e.type);
                    var i = e.memoizedProps;
                    switch (
                        ((r[Ve] = e), (r[tr] = i), (t = (e.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            F("cancel", r), F("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            F("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Mn.length; l++) F(Mn[l], r);
                            break;
                        case "source":
                            F("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            F("error", r), F("load", r);
                            break;
                        case "details":
                            F("toggle", r);
                            break;
                        case "input":
                            ru(r, i), F("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                F("invalid", r);
                            break;
                        case "textarea":
                            iu(r, i), F("invalid", r);
                    }
                    Gi(n, i), (l = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var s = i[o];
                            o === "children"
                                ? typeof s == "string"
                                    ? r.textContent !== s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Lr(r.textContent, s, t),
                                      (l = ["children", s]))
                                    : typeof s == "number" &&
                                      r.textContent !== "" + s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Lr(r.textContent, s, t),
                                      (l = ["children", "" + s]))
                                : Qn.hasOwnProperty(o) &&
                                  s != null &&
                                  o === "onScroll" &&
                                  F("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Er(r), lu(r, i, !0);
                            break;
                        case "textarea":
                            Er(r), ou(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = gl);
                    }
                    (r = l), (e.updateQueue = r), r !== null && (e.flags |= 4);
                } else {
                    (o = l.nodeType === 9 ? l : l.ownerDocument),
                        t === "http://www.w3.org/1999/xhtml" && (t = Ya(n)),
                        t === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((t = o.createElement("div")),
                                  (t.innerHTML = "<script></script>"),
                                  (t = t.removeChild(t.firstChild)))
                                : typeof r.is == "string"
                                ? (t = o.createElement(n, { is: r.is }))
                                : ((t = o.createElement(n)),
                                  n === "select" &&
                                      ((o = t),
                                      r.multiple
                                          ? (o.multiple = !0)
                                          : r.size && (o.size = r.size)))
                            : (t = o.createElementNS(t, n)),
                        (t[Ve] = e),
                        (t[tr] = r),
                        wf(t, e, !1, !1),
                        (e.stateNode = t);
                    e: {
                        switch (((o = Xi(n, r)), n)) {
                            case "dialog":
                                F("cancel", t), F("close", t), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                F("load", t), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Mn.length; l++) F(Mn[l], t);
                                l = r;
                                break;
                            case "source":
                                F("error", t), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                F("error", t), F("load", t), (l = r);
                                break;
                            case "details":
                                F("toggle", t), (l = r);
                                break;
                            case "input":
                                ru(t, r), (l = Vi(t, r)), F("invalid", t);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (t._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = Q({}, r, { value: void 0 })),
                                    F("invalid", t);
                                break;
                            case "textarea":
                                iu(t, r), (l = Ki(t, r)), F("invalid", t);
                                break;
                            default:
                                l = r;
                        }
                        Gi(n, l), (s = l);
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var u = s[i];
                                i === "style"
                                    ? Ja(t, u)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((u = u ? u.__html : void 0),
                                      u != null && Ga(t, u))
                                    : i === "children"
                                    ? typeof u == "string"
                                        ? (n !== "textarea" || u !== "") &&
                                          Kn(t, u)
                                        : typeof u == "number" && Kn(t, "" + u)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (Qn.hasOwnProperty(i)
                                          ? u != null &&
                                            i === "onScroll" &&
                                            F("scroll", t)
                                          : u != null && qo(t, i, u, o));
                            }
                        switch (n) {
                            case "input":
                                Er(t), lu(t, r, !1);
                                break;
                            case "textarea":
                                Er(t), ou(t);
                                break;
                            case "option":
                                r.value != null &&
                                    t.setAttribute("value", "" + wt(r.value));
                                break;
                            case "select":
                                (t.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? en(t, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          en(
                                              t,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (t.onclick = gl);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (e.flags |= 4);
                }
                e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
            }
            return oe(e), null;
        case 6:
            if (t && e.stateNode != null) Sf(t, e, t.memoizedProps, r);
            else {
                if (typeof r != "string" && e.stateNode === null)
                    throw Error(x(166));
                if (((n = zt(rr.current)), zt(Qe.current), Tr(e))) {
                    if (
                        ((r = e.stateNode),
                        (n = e.memoizedProps),
                        (r[Ve] = e),
                        (i = r.nodeValue !== n) && ((t = xe), t !== null))
                    )
                        switch (t.tag) {
                            case 3:
                                Lr(r.nodeValue, n, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Lr(r.nodeValue, n, (t.mode & 1) !== 0);
                        }
                    i && (e.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Ve] = e),
                        (e.stateNode = r);
            }
            return oe(e), null;
        case 13:
            if (
                (U(V),
                (r = e.memoizedState),
                t === null ||
                    (t.memoizedState !== null &&
                        t.memoizedState.dehydrated !== null))
            ) {
                if (B && we !== null && e.mode & 1 && !(e.flags & 128))
                    Ic(), an(), (e.flags |= 98560), (i = !1);
                else if (((i = Tr(e)), r !== null && r.dehydrated !== null)) {
                    if (t === null) {
                        if (!i) throw Error(x(318));
                        if (
                            ((i = e.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(x(317));
                        i[Ve] = e;
                    } else
                        an(),
                            !(e.flags & 128) && (e.memoizedState = null),
                            (e.flags |= 4);
                    oe(e), (i = !1);
                } else Me !== null && (zo(Me), (Me = null)), (i = !0);
                if (!i) return e.flags & 65536 ? e : null;
            }
            return e.flags & 128
                ? ((e.lanes = n), e)
                : ((r = r !== null),
                  r !== (t !== null && t.memoizedState !== null) &&
                      r &&
                      ((e.child.flags |= 8192),
                      e.mode & 1 &&
                          (t === null || V.current & 1
                              ? Z === 0 && (Z = 3)
                              : Ms())),
                  e.updateQueue !== null && (e.flags |= 4),
                  oe(e),
                  null);
        case 4:
            return (
                fn(),
                ko(t, e),
                t === null && bn(e.stateNode.containerInfo),
                oe(e),
                null
            );
        case 10:
            return gs(e.type._context), oe(e), null;
        case 17:
            return ye(e.type) && vl(), oe(e), null;
        case 19:
            if ((U(V), (i = e.memoizedState), i === null)) return oe(e), null;
            if (((r = (e.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) Nn(i, !1);
                else {
                    if (Z !== 0 || (t !== null && t.flags & 128))
                        for (t = e.child; t !== null; ) {
                            if (((o = _l(t)), o !== null)) {
                                for (
                                    e.flags |= 128,
                                        Nn(i, !1),
                                        r = o.updateQueue,
                                        r !== null &&
                                            ((e.updateQueue = r),
                                            (e.flags |= 4)),
                                        e.subtreeFlags = 0,
                                        r = n,
                                        n = e.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (t = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = t),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  o.memoizedProps),
                                              (i.memoizedState =
                                                  o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (t = o.dependencies),
                                              (i.dependencies =
                                                  t === null
                                                      ? null
                                                      : {
                                                            lanes: t.lanes,
                                                            firstContext:
                                                                t.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return I(V, (V.current & 1) | 2), e.child;
                            }
                            t = t.sibling;
                        }
                    i.tail !== null &&
                        G() > pn &&
                        ((e.flags |= 128),
                        (r = !0),
                        Nn(i, !1),
                        (e.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((t = _l(o)), t !== null)) {
                        if (
                            ((e.flags |= 128),
                            (r = !0),
                            (n = t.updateQueue),
                            n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                            Nn(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !o.alternate &&
                                !B)
                        )
                            return oe(e), null;
                    } else
                        2 * G() - i.renderingStartTime > pn &&
                            n !== 1073741824 &&
                            ((e.flags |= 128),
                            (r = !0),
                            Nn(i, !1),
                            (e.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = e.child), (e.child = o))
                    : ((n = i.last),
                      n !== null ? (n.sibling = o) : (e.child = o),
                      (i.last = o));
            }
            return i.tail !== null
                ? ((e = i.tail),
                  (i.rendering = e),
                  (i.tail = e.sibling),
                  (i.renderingStartTime = G()),
                  (e.sibling = null),
                  (n = V.current),
                  I(V, r ? (n & 1) | 2 : n & 1),
                  e)
                : (oe(e), null);
        case 22:
        case 23:
            return (
                Ts(),
                (r = e.memoizedState !== null),
                t !== null &&
                    (t.memoizedState !== null) !== r &&
                    (e.flags |= 8192),
                r && e.mode & 1
                    ? ve & 1073741824 &&
                      (oe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                    : oe(e),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(x(156, e.tag));
}
function zh(t, e) {
    switch ((ps(e), e.tag)) {
        case 1:
            return (
                ye(e.type) && vl(),
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 3:
            return (
                fn(),
                U(me),
                U(ue),
                ks(),
                (t = e.flags),
                t & 65536 && !(t & 128)
                    ? ((e.flags = (t & -65537) | 128), e)
                    : null
            );
        case 5:
            return Ss(e), null;
        case 13:
            if (
                (U(V),
                (t = e.memoizedState),
                t !== null && t.dehydrated !== null)
            ) {
                if (e.alternate === null) throw Error(x(340));
                an();
            }
            return (
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 19:
            return U(V), null;
        case 4:
            return fn(), null;
        case 10:
            return gs(e.type._context), null;
        case 22:
        case 23:
            return Ts(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Ar = !1,
    se = !1,
    jh = typeof WeakSet == "function" ? WeakSet : Set,
    P = null;
function qt(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                K(t, e, r);
            }
        else n.current = null;
}
function Co(t, e, n) {
    try {
        n();
    } catch (r) {
        K(t, e, r);
    }
}
var Xu = !1;
function Lh(t, e) {
    if (((io = hl), (t = Ec()), fs(t))) {
        if ("selectionStart" in t)
            var n = { start: t.selectionStart, end: t.selectionEnd };
        else
            e: {
                n = ((n = t.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        s = -1,
                        u = -1,
                        a = 0,
                        p = 0,
                        m = t,
                        h = null;
                    t: for (;;) {
                        for (
                            var v;
                            m !== n ||
                                (l !== 0 && m.nodeType !== 3) ||
                                (s = o + l),
                                m !== i ||
                                    (r !== 0 && m.nodeType !== 3) ||
                                    (u = o + r),
                                m.nodeType === 3 && (o += m.nodeValue.length),
                                (v = m.firstChild) !== null;

                        )
                            (h = m), (m = v);
                        for (;;) {
                            if (m === t) break t;
                            if (
                                (h === n && ++a === l && (s = o),
                                h === i && ++p === r && (u = o),
                                (v = m.nextSibling) !== null)
                            )
                                break;
                            (m = h), (h = m.parentNode);
                        }
                        m = v;
                    }
                    n = s === -1 || u === -1 ? null : { start: s, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        oo = { focusedElem: t, selectionRange: n }, hl = !1, P = e;
        P !== null;

    )
        if (
            ((e = P),
            (t = e.child),
            (e.subtreeFlags & 1028) !== 0 && t !== null)
        )
            (t.return = e), (P = t);
        else
            for (; P !== null; ) {
                e = P;
                try {
                    var w = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var S = w.memoizedProps,
                                        k = w.memoizedState,
                                        f = e.stateNode,
                                        c = f.getSnapshotBeforeUpdate(
                                            e.elementType === e.type
                                                ? S
                                                : je(e.type, S),
                                            k
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var d = e.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(x(163));
                        }
                } catch (g) {
                    K(e, e.return, g);
                }
                if (((t = e.sibling), t !== null)) {
                    (t.return = e.return), (P = t);
                    break;
                }
                P = e.return;
            }
    return (w = Xu), (Xu = !1), w;
}
function Wn(t, e, n) {
    var r = e.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & t) === t) {
                var i = l.destroy;
                (l.destroy = void 0), i !== void 0 && Co(e, n, i);
            }
            l = l.next;
        } while (l !== r);
    }
}
function Kl(t, e) {
    if (
        ((e = e.updateQueue),
        (e = e !== null ? e.lastEffect : null),
        e !== null)
    ) {
        var n = (e = e.next);
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== e);
    }
}
function Eo(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n;
        }
        typeof e == "function" ? e(t) : (e.current = t);
    }
}
function kf(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), kf(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 &&
            ((e = t.stateNode),
            e !== null &&
                (delete e[Ve],
                delete e[tr],
                delete e[ao],
                delete e[hh],
                delete e[mh])),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
}
function Cf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Ju(t) {
    e: for (;;) {
        for (; t.sibling === null; ) {
            if (t.return === null || Cf(t.return)) return null;
            t = t.return;
        }
        for (
            t.sibling.return = t.return, t = t.sibling;
            t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

        ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            (t.child.return = t), (t = t.child);
        }
        if (!(t.flags & 2)) return t.stateNode;
    }
}
function _o(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        (t = t.stateNode),
            e
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(t, e)
                    : n.insertBefore(t, e)
                : (n.nodeType === 8
                      ? ((e = n.parentNode), e.insertBefore(t, n))
                      : ((e = n), e.appendChild(t)),
                  (n = n._reactRootContainer),
                  n != null || e.onclick !== null || (e.onclick = gl));
    else if (r !== 4 && ((t = t.child), t !== null))
        for (_o(t, e, n), t = t.sibling; t !== null; )
            _o(t, e, n), (t = t.sibling);
}
function Po(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && ((t = t.child), t !== null))
        for (Po(t, e, n), t = t.sibling; t !== null; )
            Po(t, e, n), (t = t.sibling);
}
var te = null,
    Te = !1;
function lt(t, e, n) {
    for (n = n.child; n !== null; ) Ef(t, e, n), (n = n.sibling);
}
function Ef(t, e, n) {
    if (He && typeof He.onCommitFiberUnmount == "function")
        try {
            He.onCommitFiberUnmount($l, n);
        } catch {}
    switch (n.tag) {
        case 5:
            se || qt(n, e);
        case 6:
            var r = te,
                l = Te;
            (te = null),
                lt(t, e, n),
                (te = r),
                (Te = l),
                te !== null &&
                    (Te
                        ? ((t = te),
                          (n = n.stateNode),
                          t.nodeType === 8
                              ? t.parentNode.removeChild(n)
                              : t.removeChild(n))
                        : te.removeChild(n.stateNode));
            break;
        case 18:
            te !== null &&
                (Te
                    ? ((t = te),
                      (n = n.stateNode),
                      t.nodeType === 8
                          ? Ci(t.parentNode, n)
                          : t.nodeType === 1 && Ci(t, n),
                      Jn(t))
                    : Ci(te, n.stateNode));
            break;
        case 4:
            (r = te),
                (l = Te),
                (te = n.stateNode.containerInfo),
                (Te = !0),
                lt(t, e, n),
                (te = r),
                (Te = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !se &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    (i = i.tag),
                        o !== void 0 && (i & 2 || i & 4) && Co(n, e, o),
                        (l = l.next);
                } while (l !== r);
            }
            lt(t, e, n);
            break;
        case 1:
            if (
                !se &&
                (qt(n, e),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (s) {
                    K(n, e, s);
                }
            lt(t, e, n);
            break;
        case 21:
            lt(t, e, n);
            break;
        case 22:
            n.mode & 1
                ? ((se = (r = se) || n.memoizedState !== null),
                  lt(t, e, n),
                  (se = r))
                : lt(t, e, n);
            break;
        default:
            lt(t, e, n);
    }
}
function Zu(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new jh()),
            e.forEach(function (r) {
                var l = Bh.bind(null, t, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function ze(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = t,
                    o = e,
                    s = o;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                        case 5:
                            (te = s.stateNode), (Te = !1);
                            break e;
                        case 3:
                            (te = s.stateNode.containerInfo), (Te = !0);
                            break e;
                        case 4:
                            (te = s.stateNode.containerInfo), (Te = !0);
                            break e;
                    }
                    s = s.return;
                }
                if (te === null) throw Error(x(160));
                Ef(i, o, l), (te = null), (Te = !1);
                var u = l.alternate;
                u !== null && (u.return = null), (l.return = null);
            } catch (a) {
                K(l, e, a);
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; ) _f(e, t), (e = e.sibling);
}
function _f(t, e) {
    var n = t.alternate,
        r = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ze(e, t), Fe(t), r & 4)) {
                try {
                    Wn(3, t, t.return), Kl(3, t);
                } catch (S) {
                    K(t, t.return, S);
                }
                try {
                    Wn(5, t, t.return);
                } catch (S) {
                    K(t, t.return, S);
                }
            }
            break;
        case 1:
            ze(e, t), Fe(t), r & 512 && n !== null && qt(n, n.return);
            break;
        case 5:
            if (
                (ze(e, t),
                Fe(t),
                r & 512 && n !== null && qt(n, n.return),
                t.flags & 32)
            ) {
                var l = t.stateNode;
                try {
                    Kn(l, "");
                } catch (S) {
                    K(t, t.return, S);
                }
            }
            if (r & 4 && ((l = t.stateNode), l != null)) {
                var i = t.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    s = t.type,
                    u = t.updateQueue;
                if (((t.updateQueue = null), u !== null))
                    try {
                        s === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            Qa(l, i),
                            Xi(s, o);
                        var a = Xi(s, i);
                        for (o = 0; o < u.length; o += 2) {
                            var p = u[o],
                                m = u[o + 1];
                            p === "style"
                                ? Ja(l, m)
                                : p === "dangerouslySetInnerHTML"
                                ? Ga(l, m)
                                : p === "children"
                                ? Kn(l, m)
                                : qo(l, p, m, a);
                        }
                        switch (s) {
                            case "input":
                                Hi(l, i);
                                break;
                            case "textarea":
                                Ka(l, i);
                                break;
                            case "select":
                                var h = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!i.multiple;
                                var v = i.value;
                                v != null
                                    ? en(l, !!i.multiple, v, !1)
                                    : h !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? en(
                                                l,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : en(
                                                l,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        l[tr] = i;
                    } catch (S) {
                        K(t, t.return, S);
                    }
            }
            break;
        case 6:
            if ((ze(e, t), Fe(t), r & 4)) {
                if (t.stateNode === null) throw Error(x(162));
                (l = t.stateNode), (i = t.memoizedProps);
                try {
                    l.nodeValue = i;
                } catch (S) {
                    K(t, t.return, S);
                }
            }
            break;
        case 3:
            if (
                (ze(e, t),
                Fe(t),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Jn(e.containerInfo);
                } catch (S) {
                    K(t, t.return, S);
                }
            break;
        case 4:
            ze(e, t), Fe(t);
            break;
        case 13:
            ze(e, t),
                Fe(t),
                (l = t.child),
                l.flags & 8192 &&
                    ((i = l.memoizedState !== null),
                    (l.stateNode.isHidden = i),
                    !i ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (js = G())),
                r & 4 && Zu(t);
            break;
        case 22:
            if (
                ((p = n !== null && n.memoizedState !== null),
                t.mode & 1
                    ? ((se = (a = se) || p), ze(e, t), (se = a))
                    : ze(e, t),
                Fe(t),
                r & 8192)
            ) {
                if (
                    ((a = t.memoizedState !== null),
                    (t.stateNode.isHidden = a) && !p && t.mode & 1)
                )
                    for (P = t, p = t.child; p !== null; ) {
                        for (m = P = p; P !== null; ) {
                            switch (((h = P), (v = h.child), h.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Wn(4, h, h.return);
                                    break;
                                case 1:
                                    qt(h, h.return);
                                    var w = h.stateNode;
                                    if (
                                        typeof w.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = h), (n = h.return);
                                        try {
                                            (e = r),
                                                (w.props = e.memoizedProps),
                                                (w.state = e.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (S) {
                                            K(r, n, S);
                                        }
                                    }
                                    break;
                                case 5:
                                    qt(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        bu(m);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = h), (P = v)) : bu(m);
                        }
                        p = p.sibling;
                    }
                e: for (p = null, m = t; ; ) {
                    if (m.tag === 5) {
                        if (p === null) {
                            p = m;
                            try {
                                (l = m.stateNode),
                                    a
                                        ? ((i = l.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((s = m.stateNode),
                                          (u = m.memoizedProps.style),
                                          (o =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (s.style.display = Xa("display", o)));
                            } catch (S) {
                                K(t, t.return, S);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (p === null)
                            try {
                                m.stateNode.nodeValue = a
                                    ? ""
                                    : m.memoizedProps;
                            } catch (S) {
                                K(t, t.return, S);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === t) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === t) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === t) break e;
                        p === m && (p = null), (m = m.return);
                    }
                    p === m && (p = null),
                        (m.sibling.return = m.return),
                        (m = m.sibling);
                }
            }
            break;
        case 19:
            ze(e, t), Fe(t), r & 4 && Zu(t);
            break;
        case 21:
            break;
        default:
            ze(e, t), Fe(t);
    }
}
function Fe(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Cf(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(x(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
                    var i = Ju(t);
                    Po(t, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        s = Ju(t);
                    _o(t, s, o);
                    break;
                default:
                    throw Error(x(161));
            }
        } catch (u) {
            K(t, t.return, u);
        }
        t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
}
function Th(t, e, n) {
    (P = t), Pf(t);
}
function Pf(t, e, n) {
    for (var r = (t.mode & 1) !== 0; P !== null; ) {
        var l = P,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Ar;
            if (!o) {
                var s = l.alternate,
                    u = (s !== null && s.memoizedState !== null) || se;
                s = Ar;
                var a = se;
                if (((Ar = o), (se = u) && !a))
                    for (P = l; P !== null; )
                        (o = P),
                            (u = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? ea(l)
                                : u !== null
                                ? ((u.return = o), (P = u))
                                : ea(l);
                for (; i !== null; ) (P = i), Pf(i), (i = i.sibling);
                (P = l), (Ar = s), (se = a);
            }
            qu(t);
        } else
            l.subtreeFlags & 8772 && i !== null
                ? ((i.return = l), (P = i))
                : qu(t);
    }
}
function qu(t) {
    for (; P !== null; ) {
        var e = P;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            se || Kl(5, e);
                            break;
                        case 1:
                            var r = e.stateNode;
                            if (e.flags & 4 && !se)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        e.elementType === e.type
                                            ? n.memoizedProps
                                            : je(e.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = e.updateQueue;
                            i !== null && Du(e, i, r);
                            break;
                        case 3:
                            var o = e.updateQueue;
                            if (o !== null) {
                                if (((n = null), e.child !== null))
                                    switch (e.child.tag) {
                                        case 5:
                                            n = e.child.stateNode;
                                            break;
                                        case 1:
                                            n = e.child.stateNode;
                                    }
                                Du(e, o, n);
                            }
                            break;
                        case 5:
                            var s = e.stateNode;
                            if (n === null && e.flags & 4) {
                                n = s;
                                var u = e.memoizedProps;
                                switch (e.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (e.memoizedState === null) {
                                var a = e.alternate;
                                if (a !== null) {
                                    var p = a.memoizedState;
                                    if (p !== null) {
                                        var m = p.dehydrated;
                                        m !== null && Jn(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(x(163));
                    }
                se || (e.flags & 512 && Eo(e));
            } catch (h) {
                K(e, e.return, h);
            }
        }
        if (e === t) {
            P = null;
            break;
        }
        if (((n = e.sibling), n !== null)) {
            (n.return = e.return), (P = n);
            break;
        }
        P = e.return;
    }
}
function bu(t) {
    for (; P !== null; ) {
        var e = P;
        if (e === t) {
            P = null;
            break;
        }
        var n = e.sibling;
        if (n !== null) {
            (n.return = e.return), (P = n);
            break;
        }
        P = e.return;
    }
}
function ea(t) {
    for (; P !== null; ) {
        var e = P;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        Kl(4, e);
                    } catch (u) {
                        K(e, n, u);
                    }
                    break;
                case 1:
                    var r = e.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = e.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            K(e, l, u);
                        }
                    }
                    var i = e.return;
                    try {
                        Eo(e);
                    } catch (u) {
                        K(e, i, u);
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        Eo(e);
                    } catch (u) {
                        K(e, o, u);
                    }
            }
        } catch (u) {
            K(e, e.return, u);
        }
        if (e === t) {
            P = null;
            break;
        }
        var s = e.sibling;
        if (s !== null) {
            (s.return = e.return), (P = s);
            break;
        }
        P = e.return;
    }
}
var Mh = Math.ceil,
    Ol = rt.ReactCurrentDispatcher,
    Rs = rt.ReactCurrentOwner,
    Ne = rt.ReactCurrentBatchConfig,
    T = 0,
    ee = null,
    X = null,
    ne = 0,
    ve = 0,
    bt = kt(0),
    Z = 0,
    sr = null,
    At = 0,
    Yl = 0,
    zs = 0,
    Vn = null,
    pe = null,
    js = 0,
    pn = 1 / 0,
    Ye = null,
    Rl = !1,
    No = null,
    yt = null,
    Ir = !1,
    ct = null,
    zl = 0,
    Hn = 0,
    Oo = null,
    rl = -1,
    ll = 0;
function ce() {
    return T & 6 ? G() : rl !== -1 ? rl : (rl = G());
}
function gt(t) {
    return t.mode & 1
        ? T & 2 && ne !== 0
            ? ne & -ne
            : gh.transition !== null
            ? (ll === 0 && (ll = uc()), ll)
            : ((t = D),
              t !== 0 ||
                  ((t = window.event), (t = t === void 0 ? 16 : mc(t.type))),
              t)
        : 1;
}
function Ae(t, e, n, r) {
    if (50 < Hn) throw ((Hn = 0), (Oo = null), Error(x(185)));
    hr(t, n, r),
        (!(T & 2) || t !== ee) &&
            (t === ee && (!(T & 2) && (Yl |= n), Z === 4 && ut(t, ne)),
            ge(t, r),
            n === 1 &&
                T === 0 &&
                !(e.mode & 1) &&
                ((pn = G() + 500), Vl && Ct()));
}
function ge(t, e) {
    var n = t.callbackNode;
    gp(t, e);
    var r = pl(t, t === ee ? ne : 0);
    if (r === 0)
        n !== null && au(n), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((e = r & -r), t.callbackPriority !== e)) {
        if ((n != null && au(n), e === 1))
            t.tag === 0 ? yh(ta.bind(null, t)) : Mc(ta.bind(null, t)),
                dh(function () {
                    !(T & 6) && Ct();
                }),
                (n = null);
        else {
            switch (ac(r)) {
                case 1:
                    n = rs;
                    break;
                case 4:
                    n = oc;
                    break;
                case 16:
                    n = dl;
                    break;
                case 536870912:
                    n = sc;
                    break;
                default:
                    n = dl;
            }
            n = Mf(n, Nf.bind(null, t));
        }
        (t.callbackPriority = e), (t.callbackNode = n);
    }
}
function Nf(t, e) {
    if (((rl = -1), (ll = 0), T & 6)) throw Error(x(327));
    var n = t.callbackNode;
    if (on() && t.callbackNode !== n) return null;
    var r = pl(t, t === ee ? ne : 0);
    if (r === 0) return null;
    if (r & 30 || r & t.expiredLanes || e) e = jl(t, r);
    else {
        e = r;
        var l = T;
        T |= 2;
        var i = Rf();
        (ee !== t || ne !== e) && ((Ye = null), (pn = G() + 500), jt(t, e));
        do
            try {
                Ih();
                break;
            } catch (s) {
                Of(t, s);
            }
        while (1);
        ys(),
            (Ol.current = i),
            (T = l),
            X !== null ? (e = 0) : ((ee = null), (ne = 0), (e = Z));
    }
    if (e !== 0) {
        if (
            (e === 2 && ((l = eo(t)), l !== 0 && ((r = l), (e = Ro(t, l)))),
            e === 1)
        )
            throw ((n = sr), jt(t, 0), ut(t, r), ge(t, G()), n);
        if (e === 6) ut(t, r);
        else {
            if (
                ((l = t.current.alternate),
                !(r & 30) &&
                    !Dh(l) &&
                    ((e = jl(t, r)),
                    e === 2 &&
                        ((i = eo(t)), i !== 0 && ((r = i), (e = Ro(t, i)))),
                    e === 1))
            )
                throw ((n = sr), jt(t, 0), ut(t, r), ge(t, G()), n);
            switch (((t.finishedWork = l), (t.finishedLanes = r), e)) {
                case 0:
                case 1:
                    throw Error(x(345));
                case 2:
                    Nt(t, pe, Ye);
                    break;
                case 3:
                    if (
                        (ut(t, r),
                        (r & 130023424) === r && ((e = js + 500 - G()), 10 < e))
                    ) {
                        if (pl(t, 0) !== 0) break;
                        if (((l = t.suspendedLanes), (l & r) !== r)) {
                            ce(), (t.pingedLanes |= t.suspendedLanes & l);
                            break;
                        }
                        t.timeoutHandle = uo(Nt.bind(null, t, pe, Ye), e);
                        break;
                    }
                    Nt(t, pe, Ye);
                    break;
                case 4:
                    if ((ut(t, r), (r & 4194240) === r)) break;
                    for (e = t.eventTimes, l = -1; 0 < r; ) {
                        var o = 31 - De(r);
                        (i = 1 << o), (o = e[o]), o > l && (l = o), (r &= ~i);
                    }
                    if (
                        ((r = l),
                        (r = G() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * Mh(r / 1960)) - r),
                        10 < r)
                    ) {
                        t.timeoutHandle = uo(Nt.bind(null, t, pe, Ye), r);
                        break;
                    }
                    Nt(t, pe, Ye);
                    break;
                case 5:
                    Nt(t, pe, Ye);
                    break;
                default:
                    throw Error(x(329));
            }
        }
    }
    return ge(t, G()), t.callbackNode === n ? Nf.bind(null, t) : null;
}
function Ro(t, e) {
    var n = Vn;
    return (
        t.current.memoizedState.isDehydrated && (jt(t, e).flags |= 256),
        (t = jl(t, e)),
        t !== 2 && ((e = pe), (pe = n), e !== null && zo(e)),
        t
    );
}
function zo(t) {
    pe === null ? (pe = t) : pe.push.apply(pe, t);
}
function Dh(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ie(i(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
            (n.return = e), (e = n);
        else {
            if (e === t) break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return !0;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
    }
    return !0;
}
function ut(t, e) {
    for (
        e &= ~zs,
            e &= ~Yl,
            t.suspendedLanes |= e,
            t.pingedLanes &= ~e,
            t = t.expirationTimes;
        0 < e;

    ) {
        var n = 31 - De(e),
            r = 1 << n;
        (t[n] = -1), (e &= ~r);
    }
}
function ta(t) {
    if (T & 6) throw Error(x(327));
    on();
    var e = pl(t, 0);
    if (!(e & 1)) return ge(t, G()), null;
    var n = jl(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = eo(t);
        r !== 0 && ((e = r), (n = Ro(t, r)));
    }
    if (n === 1) throw ((n = sr), jt(t, 0), ut(t, e), ge(t, G()), n);
    if (n === 6) throw Error(x(345));
    return (
        (t.finishedWork = t.current.alternate),
        (t.finishedLanes = e),
        Nt(t, pe, Ye),
        ge(t, G()),
        null
    );
}
function Ls(t, e) {
    var n = T;
    T |= 1;
    try {
        return t(e);
    } finally {
        (T = n), T === 0 && ((pn = G() + 500), Vl && Ct());
    }
}
function It(t) {
    ct !== null && ct.tag === 0 && !(T & 6) && on();
    var e = T;
    T |= 1;
    var n = Ne.transition,
        r = D;
    try {
        if (((Ne.transition = null), (D = 1), t)) return t();
    } finally {
        (D = r), (Ne.transition = n), (T = e), !(T & 6) && Ct();
    }
}
function Ts() {
    (ve = bt.current), U(bt);
}
function jt(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    if ((n !== -1 && ((t.timeoutHandle = -1), fh(n)), X !== null))
        for (n = X.return; n !== null; ) {
            var r = n;
            switch ((ps(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && vl();
                    break;
                case 3:
                    fn(), U(me), U(ue), ks();
                    break;
                case 5:
                    Ss(r);
                    break;
                case 4:
                    fn();
                    break;
                case 13:
                    U(V);
                    break;
                case 19:
                    U(V);
                    break;
                case 10:
                    gs(r.type._context);
                    break;
                case 22:
                case 23:
                    Ts();
            }
            n = n.return;
        }
    if (
        ((ee = t),
        (X = t = vt(t.current, null)),
        (ne = ve = e),
        (Z = 0),
        (sr = null),
        (zs = Yl = At = 0),
        (pe = Vn = null),
        Rt !== null)
    ) {
        for (e = 0; e < Rt.length; e++)
            if (((n = Rt[e]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = l), (r.next = o);
                }
                n.pending = r;
            }
        Rt = null;
    }
    return t;
}
function Of(t, e) {
    do {
        var n = X;
        try {
            if ((ys(), (el.current = Nl), Pl)) {
                for (var r = H.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                Pl = !1;
            }
            if (
                ((Dt = 0),
                (b = J = H = null),
                (Bn = !1),
                (lr = 0),
                (Rs.current = null),
                n === null || n.return === null)
            ) {
                (Z = 1), (sr = e), (X = null);
                break;
            }
            e: {
                var i = t,
                    o = n.return,
                    s = n,
                    u = e;
                if (
                    ((e = ne),
                    (s.flags |= 32768),
                    u !== null &&
                        typeof u == "object" &&
                        typeof u.then == "function")
                ) {
                    var a = u,
                        p = s,
                        m = p.tag;
                    if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var h = p.alternate;
                        h
                            ? ((p.updateQueue = h.updateQueue),
                              (p.memoizedState = h.memoizedState),
                              (p.lanes = h.lanes))
                            : ((p.updateQueue = null),
                              (p.memoizedState = null));
                    }
                    var v = Wu(o);
                    if (v !== null) {
                        (v.flags &= -257),
                            Vu(v, o, s, i, e),
                            v.mode & 1 && Bu(i, a, e),
                            (e = v),
                            (u = a);
                        var w = e.updateQueue;
                        if (w === null) {
                            var S = new Set();
                            S.add(u), (e.updateQueue = S);
                        } else w.add(u);
                        break e;
                    } else {
                        if (!(e & 1)) {
                            Bu(i, a, e), Ms();
                            break e;
                        }
                        u = Error(x(426));
                    }
                } else if (B && s.mode & 1) {
                    var k = Wu(o);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                            Vu(k, o, s, i, e),
                            hs(dn(u, s));
                        break e;
                    }
                }
                (i = u = dn(u, s)),
                    Z !== 4 && (Z = 2),
                    Vn === null ? (Vn = [i]) : Vn.push(i),
                    (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                            var f = ff(i, u, e);
                            Mu(i, f);
                            break e;
                        case 1:
                            s = u;
                            var c = i.type,
                                d = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (yt === null || !yt.has(d))))
                            ) {
                                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                                var g = df(i, s, e);
                                Mu(i, g);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            jf(n);
        } catch (C) {
            (e = C), X === n && n !== null && (X = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Rf() {
    var t = Ol.current;
    return (Ol.current = Nl), t === null ? Nl : t;
}
function Ms() {
    (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
        ee === null || (!(At & 268435455) && !(Yl & 268435455)) || ut(ee, ne);
}
function jl(t, e) {
    var n = T;
    T |= 2;
    var r = Rf();
    (ee !== t || ne !== e) && ((Ye = null), jt(t, e));
    do
        try {
            Ah();
            break;
        } catch (l) {
            Of(t, l);
        }
    while (1);
    if ((ys(), (T = n), (Ol.current = r), X !== null)) throw Error(x(261));
    return (ee = null), (ne = 0), Z;
}
function Ah() {
    for (; X !== null; ) zf(X);
}
function Ih() {
    for (; X !== null && !up(); ) zf(X);
}
function zf(t) {
    var e = Tf(t.alternate, t, ve);
    (t.memoizedProps = t.pendingProps),
        e === null ? jf(t) : (X = e),
        (Rs.current = null);
}
function jf(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (((t = e.return), e.flags & 32768)) {
            if (((n = zh(n, e)), n !== null)) {
                (n.flags &= 32767), (X = n);
                return;
            }
            if (t !== null)
                (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            else {
                (Z = 6), (X = null);
                return;
            }
        } else if (((n = Rh(n, e, ve)), n !== null)) {
            X = n;
            return;
        }
        if (((e = e.sibling), e !== null)) {
            X = e;
            return;
        }
        X = e = t;
    } while (e !== null);
    Z === 0 && (Z = 5);
}
function Nt(t, e, n) {
    var r = D,
        l = Ne.transition;
    try {
        (Ne.transition = null), (D = 1), $h(t, e, n, r);
    } finally {
        (Ne.transition = l), (D = r);
    }
    return null;
}
function $h(t, e, n, r) {
    do on();
    while (ct !== null);
    if (T & 6) throw Error(x(327));
    n = t.finishedWork;
    var l = t.finishedLanes;
    if (n === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
        throw Error(x(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (vp(t, i),
        t === ee && ((X = ee = null), (ne = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Ir ||
            ((Ir = !0),
            Mf(dl, function () {
                return on(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = Ne.transition), (Ne.transition = null);
        var o = D;
        D = 1;
        var s = T;
        (T |= 4),
            (Rs.current = null),
            Lh(t, n),
            _f(n, t),
            lh(oo),
            (hl = !!io),
            (oo = io = null),
            (t.current = n),
            Th(n),
            ap(),
            (T = s),
            (D = o),
            (Ne.transition = i);
    } else t.current = n;
    if (
        (Ir && ((Ir = !1), (ct = t), (zl = l)),
        (i = t.pendingLanes),
        i === 0 && (yt = null),
        dp(n.stateNode),
        ge(t, G()),
        e !== null)
    )
        for (r = t.onRecoverableError, n = 0; n < e.length; n++)
            (l = e[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Rl) throw ((Rl = !1), (t = No), (No = null), t);
    return (
        zl & 1 && t.tag !== 0 && on(),
        (i = t.pendingLanes),
        i & 1 ? (t === Oo ? Hn++ : ((Hn = 0), (Oo = t))) : (Hn = 0),
        Ct(),
        null
    );
}
function on() {
    if (ct !== null) {
        var t = ac(zl),
            e = Ne.transition,
            n = D;
        try {
            if (((Ne.transition = null), (D = 16 > t ? 16 : t), ct === null))
                var r = !1;
            else {
                if (((t = ct), (ct = null), (zl = 0), T & 6))
                    throw Error(x(331));
                var l = T;
                for (T |= 4, P = t.current; P !== null; ) {
                    var i = P,
                        o = i.child;
                    if (P.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (P = a; P !== null; ) {
                                    var p = P;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Wn(8, p, i);
                                    }
                                    var m = p.child;
                                    if (m !== null) (m.return = p), (P = m);
                                    else
                                        for (; P !== null; ) {
                                            p = P;
                                            var h = p.sibling,
                                                v = p.return;
                                            if ((kf(p), p === a)) {
                                                P = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                (h.return = v), (P = h);
                                                break;
                                            }
                                            P = v;
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var S = w.child;
                                if (S !== null) {
                                    w.child = null;
                                    do {
                                        var k = S.sibling;
                                        (S.sibling = null), (S = k);
                                    } while (S !== null);
                                }
                            }
                            P = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        (o.return = i), (P = o);
                    else
                        e: for (; P !== null; ) {
                            if (((i = P), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Wn(9, i, i.return);
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                (f.return = i.return), (P = f);
                                break e;
                            }
                            P = i.return;
                        }
                }
                var c = t.current;
                for (P = c; P !== null; ) {
                    o = P;
                    var d = o.child;
                    if (o.subtreeFlags & 2064 && d !== null)
                        (d.return = o), (P = d);
                    else
                        e: for (o = c; P !== null; ) {
                            if (((s = P), s.flags & 2048))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Kl(9, s);
                                    }
                                } catch (C) {
                                    K(s, s.return, C);
                                }
                            if (s === o) {
                                P = null;
                                break e;
                            }
                            var g = s.sibling;
                            if (g !== null) {
                                (g.return = s.return), (P = g);
                                break e;
                            }
                            P = s.return;
                        }
                }
                if (
                    ((T = l),
                    Ct(),
                    He && typeof He.onPostCommitFiberRoot == "function")
                )
                    try {
                        He.onPostCommitFiberRoot($l, t);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (D = n), (Ne.transition = e);
        }
    }
    return !1;
}
function na(t, e, n) {
    (e = dn(n, e)),
        (e = ff(t, e, 1)),
        (t = mt(t, e, 1)),
        (e = ce()),
        t !== null && (hr(t, 1, e), ge(t, e));
}
function K(t, e, n) {
    if (t.tag === 3) na(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                na(e, t, n);
                break;
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (
                    typeof e.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (yt === null || !yt.has(r)))
                ) {
                    (t = dn(n, t)),
                        (t = df(e, t, 1)),
                        (e = mt(e, t, 1)),
                        (t = ce()),
                        e !== null && (hr(e, 1, t), ge(e, t));
                    break;
                }
            }
            e = e.return;
        }
}
function Fh(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
        (e = ce()),
        (t.pingedLanes |= t.suspendedLanes & n),
        ee === t &&
            (ne & n) === n &&
            (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > G() - js)
                ? jt(t, 0)
                : (zs |= n)),
        ge(t, e);
}
function Lf(t, e) {
    e === 0 &&
        (t.mode & 1
            ? ((e = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
            : (e = 1));
    var n = ce();
    (t = et(t, e)), t !== null && (hr(t, e, n), ge(t, n));
}
function Uh(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), Lf(t, n);
}
function Bh(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var r = t.stateNode,
                l = t.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = t.stateNode;
            break;
        default:
            throw Error(x(314));
    }
    r !== null && r.delete(e), Lf(t, n);
}
var Tf;
Tf = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || me.current) he = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return (he = !1), Oh(t, e, n);
            he = !!(t.flags & 131072);
        }
    else (he = !1), B && e.flags & 1048576 && Dc(e, Sl, e.index);
    switch (((e.lanes = 0), e.tag)) {
        case 2:
            var r = e.type;
            nl(t, e), (t = e.pendingProps);
            var l = un(e, ue.current);
            ln(e, n), (l = Es(null, e, r, t, l, n));
            var i = _s();
            return (
                (e.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((e.tag = 1),
                      (e.memoizedState = null),
                      (e.updateQueue = null),
                      ye(r) ? ((i = !0), wl(e)) : (i = !1),
                      (e.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      ws(e),
                      (l.updater = Hl),
                      (e.stateNode = l),
                      (l._reactInternals = e),
                      yo(e, r, t, n),
                      (e = wo(null, e, r, !0, i, n)))
                    : ((e.tag = 0),
                      B && i && ds(e),
                      ae(null, e, l, n),
                      (e = e.child)),
                e
            );
        case 16:
            r = e.elementType;
            e: {
                switch (
                    (nl(t, e),
                    (t = e.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (e.type = r),
                    (l = e.tag = Vh(r)),
                    (t = je(r, t)),
                    l)
                ) {
                    case 0:
                        e = vo(null, e, r, t, n);
                        break e;
                    case 1:
                        e = Ku(null, e, r, t, n);
                        break e;
                    case 11:
                        e = Hu(null, e, r, t, n);
                        break e;
                    case 14:
                        e = Qu(null, e, r, je(r.type, t), n);
                        break e;
                }
                throw Error(x(306, r, ""));
            }
            return e;
        case 0:
            return (
                (r = e.type),
                (l = e.pendingProps),
                (l = e.elementType === r ? l : je(r, l)),
                vo(t, e, r, l, n)
            );
        case 1:
            return (
                (r = e.type),
                (l = e.pendingProps),
                (l = e.elementType === r ? l : je(r, l)),
                Ku(t, e, r, l, n)
            );
        case 3:
            e: {
                if ((yf(e), t === null)) throw Error(x(387));
                (r = e.pendingProps),
                    (i = e.memoizedState),
                    (l = i.element),
                    Fc(t, e),
                    El(e, r, null, n);
                var o = e.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (e.updateQueue.baseState = i),
                        (e.memoizedState = i),
                        e.flags & 256)
                    ) {
                        (l = dn(Error(x(423)), e)), (e = Yu(t, e, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = dn(Error(x(424)), e)), (e = Yu(t, e, r, n, l));
                        break e;
                    } else
                        for (
                            we = ht(e.stateNode.containerInfo.firstChild),
                                xe = e,
                                B = !0,
                                Me = null,
                                n = Vc(e, null, r, n),
                                e.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((an(), r === l)) {
                        e = tt(t, e, n);
                        break e;
                    }
                    ae(t, e, r, n);
                }
                e = e.child;
            }
            return e;
        case 5:
            return (
                Hc(e),
                t === null && po(e),
                (r = e.type),
                (l = e.pendingProps),
                (i = t !== null ? t.memoizedProps : null),
                (o = l.children),
                so(r, l)
                    ? (o = null)
                    : i !== null && so(r, i) && (e.flags |= 32),
                mf(t, e),
                ae(t, e, o, n),
                e.child
            );
        case 6:
            return t === null && po(e), null;
        case 13:
            return gf(t, e, n);
        case 4:
            return (
                xs(e, e.stateNode.containerInfo),
                (r = e.pendingProps),
                t === null ? (e.child = cn(e, null, r, n)) : ae(t, e, r, n),
                e.child
            );
        case 11:
            return (
                (r = e.type),
                (l = e.pendingProps),
                (l = e.elementType === r ? l : je(r, l)),
                Hu(t, e, r, l, n)
            );
        case 7:
            return ae(t, e, e.pendingProps, n), e.child;
        case 8:
            return ae(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return ae(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (
                    ((r = e.type._context),
                    (l = e.pendingProps),
                    (i = e.memoizedProps),
                    (o = l.value),
                    I(kl, r._currentValue),
                    (r._currentValue = o),
                    i !== null)
                )
                    if (Ie(i.value, o)) {
                        if (i.children === l.children && !me.current) {
                            e = tt(t, e, n);
                            break e;
                        }
                    } else
                        for (
                            i = e.child, i !== null && (i.return = e);
                            i !== null;

                        ) {
                            var s = i.dependencies;
                            if (s !== null) {
                                o = i.child;
                                for (var u = s.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            (u = Ze(-1, n & -n)), (u.tag = 2);
                                            var a = i.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var p = a.pending;
                                                p === null
                                                    ? (u.next = u)
                                                    : ((u.next = p.next),
                                                      (p.next = u)),
                                                    (a.pending = u);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (u = i.alternate),
                                            u !== null && (u.lanes |= n),
                                            ho(i.return, n, e),
                                            (s.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (i.tag === 10)
                                o = i.type === e.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null))
                                    throw Error(x(341));
                                (o.lanes |= n),
                                    (s = o.alternate),
                                    s !== null && (s.lanes |= n),
                                    ho(o, n, e),
                                    (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === e) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                ae(t, e, l.children, n), (e = e.child);
            }
            return e;
        case 9:
            return (
                (l = e.type),
                (r = e.pendingProps.children),
                ln(e, n),
                (l = Oe(l)),
                (r = r(l)),
                (e.flags |= 1),
                ae(t, e, r, n),
                e.child
            );
        case 14:
            return (
                (r = e.type),
                (l = je(r, e.pendingProps)),
                (l = je(r.type, l)),
                Qu(t, e, r, l, n)
            );
        case 15:
            return pf(t, e, e.type, e.pendingProps, n);
        case 17:
            return (
                (r = e.type),
                (l = e.pendingProps),
                (l = e.elementType === r ? l : je(r, l)),
                nl(t, e),
                (e.tag = 1),
                ye(r) ? ((t = !0), wl(e)) : (t = !1),
                ln(e, n),
                Bc(e, r, l),
                yo(e, r, l, n),
                wo(null, e, r, !0, t, n)
            );
        case 19:
            return vf(t, e, n);
        case 22:
            return hf(t, e, n);
    }
    throw Error(x(156, e.tag));
};
function Mf(t, e) {
    return ic(t, e);
}
function Wh(t, e, n, r) {
    (this.tag = t),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = e),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Pe(t, e, n, r) {
    return new Wh(t, e, n, r);
}
function Ds(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Vh(t) {
    if (typeof t == "function") return Ds(t) ? 1 : 0;
    if (t != null) {
        if (((t = t.$$typeof), t === es)) return 11;
        if (t === ts) return 14;
    }
    return 2;
}
function vt(t, e) {
    var n = t.alternate;
    return (
        n === null
            ? ((n = Pe(t.tag, e, t.key, t.mode)),
              (n.elementType = t.elementType),
              (n.type = t.type),
              (n.stateNode = t.stateNode),
              (n.alternate = t),
              (t.alternate = n))
            : ((n.pendingProps = e),
              (n.type = t.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = t.flags & 14680064),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies =
            e === null
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
    );
}
function il(t, e, n, r, l, i) {
    var o = 2;
    if (((r = t), typeof t == "function")) Ds(t) && (o = 1);
    else if (typeof t == "string") o = 5;
    else
        e: switch (t) {
            case Vt:
                return Lt(n.children, l, i, e);
            case bo:
                (o = 8), (l |= 8);
                break;
            case Fi:
                return (
                    (t = Pe(12, n, e, l | 2)),
                    (t.elementType = Fi),
                    (t.lanes = i),
                    t
                );
            case Ui:
                return (
                    (t = Pe(13, n, e, l)),
                    (t.elementType = Ui),
                    (t.lanes = i),
                    t
                );
            case Bi:
                return (
                    (t = Pe(19, n, e, l)),
                    (t.elementType = Bi),
                    (t.lanes = i),
                    t
                );
            case Wa:
                return Gl(n, l, i, e);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                        case Ua:
                            o = 10;
                            break e;
                        case Ba:
                            o = 9;
                            break e;
                        case es:
                            o = 11;
                            break e;
                        case ts:
                            o = 14;
                            break e;
                        case it:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(x(130, t == null ? t : typeof t, ""));
        }
    return (
        (e = Pe(o, n, e, l)),
        (e.elementType = t),
        (e.type = r),
        (e.lanes = i),
        e
    );
}
function Lt(t, e, n, r) {
    return (t = Pe(7, t, r, e)), (t.lanes = n), t;
}
function Gl(t, e, n, r) {
    return (
        (t = Pe(22, t, r, e)),
        (t.elementType = Wa),
        (t.lanes = n),
        (t.stateNode = { isHidden: !1 }),
        t
    );
}
function ji(t, e, n) {
    return (t = Pe(6, t, null, e)), (t.lanes = n), t;
}
function Li(t, e, n) {
    return (
        (e = Pe(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = n),
        (e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation,
        }),
        e
    );
}
function Hh(t, e, n, r, l) {
    (this.tag = e),
        (this.containerInfo = t),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = di(0)),
        (this.expirationTimes = di(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = di(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function As(t, e, n, r, l, i, o, s, u) {
    return (
        (t = new Hh(t, e, n, s, u)),
        e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
        (i = Pe(3, null, null, e)),
        (t.current = i),
        (i.stateNode = t),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        ws(i),
        t
    );
}
function Qh(t, e, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Wt,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n,
    };
}
function Df(t) {
    if (!t) return xt;
    t = t._reactInternals;
    e: {
        if (Ft(t) !== t || t.tag !== 1) throw Error(x(170));
        var e = t;
        do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (ye(e.type)) {
                        e =
                            e.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            e = e.return;
        } while (e !== null);
        throw Error(x(171));
    }
    if (t.tag === 1) {
        var n = t.type;
        if (ye(n)) return Tc(t, n, e);
    }
    return e;
}
function Af(t, e, n, r, l, i, o, s, u) {
    return (
        (t = As(n, r, !0, t, l, i, o, s, u)),
        (t.context = Df(null)),
        (n = t.current),
        (r = ce()),
        (l = gt(n)),
        (i = Ze(r, l)),
        (i.callback = e ?? null),
        mt(n, i, l),
        (t.current.lanes = l),
        hr(t, l, r),
        ge(t, r),
        t
    );
}
function Xl(t, e, n, r) {
    var l = e.current,
        i = ce(),
        o = gt(l);
    return (
        (n = Df(n)),
        e.context === null ? (e.context = n) : (e.pendingContext = n),
        (e = Ze(i, o)),
        (e.payload = { element: t }),
        (r = r === void 0 ? null : r),
        r !== null && (e.callback = r),
        (t = mt(l, e, o)),
        t !== null && (Ae(t, l, o, i), br(t, l, o)),
        o
    );
}
function Ll(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode;
    }
}
function ra(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
    }
}
function Is(t, e) {
    ra(t, e), (t = t.alternate) && ra(t, e);
}
function Kh() {
    return null;
}
var If =
    typeof reportError == "function"
        ? reportError
        : function (t) {
              console.error(t);
          };
function $s(t) {
    this._internalRoot = t;
}
Jl.prototype.render = $s.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(x(409));
    Xl(t, e, null, null);
};
Jl.prototype.unmount = $s.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        It(function () {
            Xl(null, t, null, null);
        }),
            (e[be] = null);
    }
};
function Jl(t) {
    this._internalRoot = t;
}
Jl.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = dc();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < st.length && e !== 0 && e < st[n].priority; n++);
        st.splice(n, 0, t), n === 0 && hc(t);
    }
};
function Fs(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Zl(t) {
    return !(
        !t ||
        (t.nodeType !== 1 &&
            t.nodeType !== 9 &&
            t.nodeType !== 11 &&
            (t.nodeType !== 8 ||
                t.nodeValue !== " react-mount-point-unstable "))
    );
}
function la() {}
function Yh(t, e, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var a = Ll(o);
                i.call(a);
            };
        }
        var o = Af(e, r, t, 0, null, !1, !1, "", la);
        return (
            (t._reactRootContainer = o),
            (t[be] = o.current),
            bn(t.nodeType === 8 ? t.parentNode : t),
            It(),
            o
        );
    }
    for (; (l = t.lastChild); ) t.removeChild(l);
    if (typeof r == "function") {
        var s = r;
        r = function () {
            var a = Ll(u);
            s.call(a);
        };
    }
    var u = As(t, 0, !1, null, null, !1, !1, "", la);
    return (
        (t._reactRootContainer = u),
        (t[be] = u.current),
        bn(t.nodeType === 8 ? t.parentNode : t),
        It(function () {
            Xl(e, u, n, r);
        }),
        u
    );
}
function ql(t, e, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var s = l;
            l = function () {
                var u = Ll(o);
                s.call(u);
            };
        }
        Xl(e, o, t, l);
    } else o = Yh(n, e, t, l, r);
    return Ll(o);
}
cc = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = Tn(e.pendingLanes);
                n !== 0 &&
                    (ls(e, n | 1),
                    ge(e, G()),
                    !(T & 6) && ((pn = G() + 500), Ct()));
            }
            break;
        case 13:
            It(function () {
                var r = et(t, 1);
                if (r !== null) {
                    var l = ce();
                    Ae(r, t, 1, l);
                }
            }),
                Is(t, 1);
    }
};
is = function (t) {
    if (t.tag === 13) {
        var e = et(t, 134217728);
        if (e !== null) {
            var n = ce();
            Ae(e, t, 134217728, n);
        }
        Is(t, 134217728);
    }
};
fc = function (t) {
    if (t.tag === 13) {
        var e = gt(t),
            n = et(t, e);
        if (n !== null) {
            var r = ce();
            Ae(n, t, e, r);
        }
        Is(t, e);
    }
};
dc = function () {
    return D;
};
pc = function (t, e) {
    var n = D;
    try {
        return (D = t), e();
    } finally {
        D = n;
    }
};
Zi = function (t, e, n) {
    switch (e) {
        case "input":
            if ((Hi(t, n), (e = n.name), n.type === "radio" && e != null)) {
                for (n = t; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + e) +
                            '][type="radio"]'
                    ),
                        e = 0;
                    e < n.length;
                    e++
                ) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                        var l = Wl(r);
                        if (!l) throw Error(x(90));
                        Ha(r), Hi(r, l);
                    }
                }
            }
            break;
        case "textarea":
            Ka(t, n);
            break;
        case "select":
            (e = n.value), e != null && en(t, !!n.multiple, e, !1);
    }
};
ba = Ls;
ec = It;
var Gh = { usingClientEntryPoint: !1, Events: [yr, Yt, Wl, Za, qa, Ls] },
    On = {
        findFiberByHostInstance: Ot,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Xh = {
        bundleType: On.bundleType,
        version: On.version,
        rendererPackageName: On.rendererPackageName,
        rendererConfig: On.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: rt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return (t = rc(t)), t === null ? null : t.stateNode;
        },
        findFiberByHostInstance: On.findFiberByHostInstance || Kh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$r.isDisabled && $r.supportsFiber)
        try {
            ($l = $r.inject(Xh)), (He = $r);
        } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gh;
ke.createPortal = function (t, e) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fs(e)) throw Error(x(200));
    return Qh(t, e, null, n);
};
ke.createRoot = function (t, e) {
    if (!Fs(t)) throw Error(x(299));
    var n = !1,
        r = "",
        l = If;
    return (
        e != null &&
            (e.unstable_strictMode === !0 && (n = !0),
            e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
            e.onRecoverableError !== void 0 && (l = e.onRecoverableError)),
        (e = As(t, 1, !1, null, null, n, !1, r, l)),
        (t[be] = e.current),
        bn(t.nodeType === 8 ? t.parentNode : t),
        new $s(e)
    );
};
ke.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function"
            ? Error(x(188))
            : ((t = Object.keys(t).join(",")), Error(x(268, t)));
    return (t = rc(e)), (t = t === null ? null : t.stateNode), t;
};
ke.flushSync = function (t) {
    return It(t);
};
ke.hydrate = function (t, e, n) {
    if (!Zl(e)) throw Error(x(200));
    return ql(null, t, e, !0, n);
};
ke.hydrateRoot = function (t, e, n) {
    if (!Fs(t)) throw Error(x(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = If;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (e = Af(e, null, t, 1, n ?? null, l, !1, i, o)),
        (t[be] = e.current),
        bn(t),
        r)
    )
        for (t = 0; t < r.length; t++)
            (n = r[t]),
                (l = n._getVersion),
                (l = l(n._source)),
                e.mutableSourceEagerHydrationData == null
                    ? (e.mutableSourceEagerHydrationData = [n, l])
                    : e.mutableSourceEagerHydrationData.push(n, l);
    return new Jl(e);
};
ke.render = function (t, e, n) {
    if (!Zl(e)) throw Error(x(200));
    return ql(null, t, e, !1, n);
};
ke.unmountComponentAtNode = function (t) {
    if (!Zl(t)) throw Error(x(40));
    return t._reactRootContainer
        ? (It(function () {
              ql(null, null, t, !1, function () {
                  (t._reactRootContainer = null), (t[be] = null);
              });
          }),
          !0)
        : !1;
};
ke.unstable_batchedUpdates = Ls;
ke.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!Zl(n)) throw Error(x(200));
    if (t == null || t._reactInternals === void 0) throw Error(x(38));
    return ql(t, e, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
function $f() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($f);
        } catch (t) {
            console.error(t);
        }
}
$f(), (Da.exports = ke);
var Jh = Da.exports,
    ia = Jh;
(Ii.createRoot = ia.createRoot), (Ii.hydrateRoot = ia.hydrateRoot);
const Zh = [
        {
            href: "https://wa.me/6285520749954",
            color: "#25D366",
            title: "WhatsApp",
            path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
        },
        {
            href: "https://t.me/fynnn77",
            color: "#26A5E4",
            title: "Telegram",
            path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
        },
        {
            href: "https://www.instagram.com/imfyn77/",
            color: "#E4405F",
            title: "Instagram",
            path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
        },
        {
            href: "https://facebook.com/nurfian.qodar/",
            color: "#1877F2",
            title: "Facebook",
            path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
        },
    ],
    qh = (t) =>
        y.jsx(
            "a",
            {
                href: t.href,
                target: "_blank",
                class: `px-3 py-3 rounded-full flex items-center justify-center border border-slate-300 text-slate-500 hover:text-[${t.color}] hover:border-[${t.color}] group`,
                children: y.jsxs("svg", {
                    role: "img",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    class: "fill-current  transition duration-150 group-hover:scale-[140%]",
                    children: [
                        y.jsx("title", { children: t.title }),
                        y.jsx("path", { d: t.path }),
                    ],
                }),
            },
            t.key
        ),
    bh = () =>
        y.jsx("section", {
            id: "about",
            class: "pt-32 py-32",
            children: y.jsx("div", {
                class: "container",
                children: y.jsxs("div", {
                    class: "flex flex-wrap",
                    children: [
                        y.jsxs("div", {
                            class: "w-full px-4 mb-10 lg:w-1/2",
                            children: [
                                y.jsx("h1", {
                                    class: "font-bold text-sky-500 text-xl mb-3",
                                    children: "About Me",
                                }),
                                y.jsx("h2", {
                                    class: "text-3xl font-semibold text-slate-500 mb-4 max-w-md",
                                    children: "Nurfian?",
                                }),
                                y.jsx("p", {
                                    class: "leading-relaxed text-base font-medium mb-3 max-w-xl text-slate-700",
                                    children:
                                        "I am an agricultural student at Siliwangi University, deeply passionate about farming. Additionally, I find great joy in web development, where I craft virtual landscapes with programming.",
                                }),
                                y.jsx("p", {
                                    class: "leading-relaxed text-base font-medium max-w-xl text-slate-700",
                                    children:
                                        "My journey blends the wonders of agriculture with the art of coding, creating a unique path of innovation and growth.",
                                }),
                            ],
                        }),
                        y.jsxs("div", {
                            class: "w-full px-4 lg:w-1/2 flex flex-col justify-center",
                            id: "socmed",
                            children: [
                                y.jsx("h1", {
                                    class: "text-2xl font-semibold text-sky-500 mb-4 lg:pt-15",
                                    children: "My Social Media",
                                }),
                                y.jsx("p", {
                                    class: "font-medium text-base mb-5 text-slate-700",
                                    children:
                                        "Follow Nurfian Qodar's social media for a better quality of life. What is the relation? Yes, nothing :D",
                                }),
                                y.jsx("div", {
                                    class: "flex items-center justify-evenly mt-3 mx-4 flex-wrap gap-4",
                                    children: Zh.map((t, e) =>
                                        y.jsx(
                                            qh,
                                            {
                                                path: t.path,
                                                color: t.color,
                                                title: t.title,
                                                href: t.href,
                                            },
                                            e
                                        )
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    e1 = "assets/nurfian-c7ab8486.png";
var ol = {},
    Ff,
    Uf;
Object.defineProperty(ol, "__esModule", { value: !0 });
var Dn = y,
    Ue = pr,
    Le = function () {
        return (
            (Le =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var l in (e = arguments[n]))
                            Object.prototype.hasOwnProperty.call(e, l) &&
                                (t[l] = e[l]);
                    return t;
                }),
            Le.apply(this, arguments)
        );
    };
function t1(t, e) {
    var n, r;
    switch (e.type) {
        case "TYPE":
            return Le(Le({}, t), {
                speed: e.speed,
                text:
                    (n = e.payload) === null || n === void 0
                        ? void 0
                        : n.substring(0, t.text.length + 1),
            });
        case "DELAY":
            return Le(Le({}, t), { speed: e.payload });
        case "DELETE":
            return Le(Le({}, t), {
                speed: e.speed,
                text:
                    (r = e.payload) === null || r === void 0
                        ? void 0
                        : r.substring(0, t.text.length - 1),
            });
        case "COUNT":
            return Le(Le({}, t), { count: t.count + 1 });
        default:
            return t;
    }
}
var oa = function (t) {
        var e = t.words,
            n =
                e === void 0
                    ? ["Hello World!", "This is", "a simple Typewriter"]
                    : e,
            r = t.loop,
            l = r === void 0 ? 1 : r,
            i = t.typeSpeed,
            o = i === void 0 ? 80 : i,
            s = t.deleteSpeed,
            u = s === void 0 ? 50 : s,
            a = t.delaySpeed,
            p = a === void 0 ? 1500 : a,
            m = t.onLoopDone,
            h = t.onType,
            v = t.onDelete,
            w = t.onDelay,
            S = Ue.useReducer(t1, { speed: o, text: "", count: 0 }),
            k = S[0],
            f = k.speed,
            c = k.text,
            d = k.count,
            g = S[1],
            C = Ue.useRef(0),
            _ = Ue.useRef(!1),
            E = Ue.useRef(!1),
            N = Ue.useRef(!1),
            M = Ue.useRef(!1),
            R = Ue.useCallback(
                function () {
                    var le = d % n.length,
                        Ke = n[le];
                    E.current
                        ? (g({ type: "DELETE", payload: Ke, speed: u }),
                          c === "" && ((E.current = !1), g({ type: "COUNT" })))
                        : (g({ type: "TYPE", payload: Ke, speed: o }),
                          (N.current = !0),
                          c === Ke &&
                              (g({ type: "DELAY", payload: p }),
                              (N.current = !1),
                              (M.current = !0),
                              setTimeout(function () {
                                  (M.current = !1), (E.current = !0);
                              }, p),
                              l > 0 &&
                                  ((C.current += 1),
                                  C.current / n.length === l &&
                                      ((M.current = !1), (_.current = !0))))),
                        N.current && h && h(C.current),
                        E.current && v && v(),
                        M.current && w && w();
                },
                [d, p, u, l, o, n, c, h, v, w]
            );
        return (
            Ue.useEffect(
                function () {
                    var le = setTimeout(R, f);
                    return (
                        _.current && clearTimeout(le),
                        function () {
                            return clearTimeout(le);
                        }
                    );
                },
                [R, f]
            ),
            Ue.useEffect(
                function () {
                    m && _.current && m();
                },
                [m]
            ),
            [
                c,
                {
                    isType: N.current,
                    isDelay: M.current,
                    isDelete: E.current,
                    isDone: _.current,
                },
            ]
        );
    },
    n1 = "styles-module_blinkingCursor__yugAC",
    r1 = "styles-module_blinking__9VXRT";
(function (t, e) {
    e === void 0 && (e = {});
    var n = e.insertAt;
    if (t && typeof document < "u") {
        var r = document.head || document.getElementsByTagName("head")[0],
            l = document.createElement("style");
        (l.type = "text/css"),
            n === "top" && r.firstChild
                ? r.insertBefore(l, r.firstChild)
                : r.appendChild(l),
            l.styleSheet
                ? (l.styleSheet.cssText = t)
                : l.appendChild(document.createTextNode(t));
    }
})(
    ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
);
var sa = Ue.memo(function (t) {
    var e = t.cursorBlinking,
        n = e === void 0 || e,
        r = t.cursorStyle,
        l = r === void 0 ? "|" : r,
        i = t.cursorColor,
        o = i === void 0 ? "inherit" : i;
    return Dn.jsx(
        "span",
        Le(
            {
                style: { color: o },
                className: "".concat(n1, " ").concat(n ? r1 : ""),
            },
            { children: l }
        )
    );
});
(Uf = ol.Cursor = sa),
    (Ff = ol.Typewriter =
        function (t) {
            var e = t.words,
                n =
                    e === void 0
                        ? ["Hello World!", "This is", "a simple Typewriter"]
                        : e,
                r = t.loop,
                l = r === void 0 ? 1 : r,
                i = t.typeSpeed,
                o = i === void 0 ? 80 : i,
                s = t.deleteSpeed,
                u = s === void 0 ? 50 : s,
                a = t.delaySpeed,
                p = a === void 0 ? 1500 : a,
                m = t.cursor,
                h = m !== void 0 && m,
                v = t.cursorStyle,
                w = v === void 0 ? "|" : v,
                S = t.cursorColor,
                k = S === void 0 ? "inherit" : S,
                f = t.cursorBlinking,
                c = f === void 0 || f,
                d = t.onLoopDone,
                g = t.onType,
                C = t.onDelay,
                _ = t.onDelete,
                E = oa({
                    words: n,
                    loop: l,
                    typeSpeed: o,
                    deleteSpeed: u,
                    delaySpeed: p,
                    onLoopDone: d,
                    onType: g,
                    onDelay: C,
                    onDelete: _,
                })[0];
            return Dn.jsxs(Dn.Fragment, {
                children: [
                    Dn.jsx("span", { children: E }),
                    h &&
                        Dn.jsx(sa, {
                            cursorStyle: w,
                            cursorColor: k,
                            cursorBlinking: c,
                        }),
                ],
            });
        }),
    (ol.useTypewriter = oa);
const l1 = () => {
    const t = Ff({
        words: ["Nurfian Qodar", "Web Developer", "Farmer :)"],
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 90,
    });
    return y.jsx("section", {
        id: "home",
        class: "pt-36",
        children: y.jsx("div", {
            class: "container",
            children: y.jsxs("div", {
                class: "flex flex-wrap",
                children: [
                    y.jsx("div", {
                        class: "w-full self-center px-4 lg:w-1/2",
                        children: y.jsxs("div", {
                            class: "mx-auto",
                            children: [
                                y.jsxs("h1", {
                                    class: "text-xl font-semibold text-slate-600 lg:text-2xl",
                                    children: [
                                        "Hi I'm",
                                        y.jsxs("span", {
                                            class: "block text-sky-500 text-4xl mt-1 mb-2",
                                            children: [
                                                t,
                                                y.jsx("span", {
                                                    children: y.jsx(Uf, {}),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                y.jsxs("h2", {
                                    class: "text-base text-slate-500 font-light mb-5",
                                    children: [
                                        "Siliwangi University",
                                        y.jsx("span", {
                                            class: "font-medium",
                                            children: "Agriculture Student",
                                        }),
                                    ],
                                }),
                                y.jsx("p", {
                                    class: "font-medium text-slate-700 mb-10 leading-relaxed",
                                    children:
                                        "Combining my passion for farming with my love for programming, I envision a remarkable journey where I harness cutting-edge technology to revolutionize agricultural practices.",
                                }),
                                y.jsx("a", {
                                    href: "#about",
                                    class: "text-base font-semibold text-white bg-sky-400 rounded-full py-3 px-8 hover:bg-sky-500 transition duration-300 ease-in-out",
                                    children: "Be My Friend",
                                }),
                            ],
                        }),
                    }),
                    y.jsx("div", {
                        class: "w-full self-end px-4 lg:w-1/2",
                        children: y.jsx("div", {
                            class: "mt-10 lg:mt-0 mx-auto lg:right-0",
                            children: y.jsx("img", {
                                src: e1,
                                alt: "Nurfian Qodar",
                                class: "max-w-full mx-auto",
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var Us = { exports: {} },
    $ = String,
    Bf = function () {
        return {
            isColorSupported: !1,
            reset: $,
            bold: $,
            dim: $,
            italic: $,
            underline: $,
            inverse: $,
            hidden: $,
            strikethrough: $,
            black: $,
            red: $,
            green: $,
            yellow: $,
            blue: $,
            magenta: $,
            cyan: $,
            white: $,
            gray: $,
            bgBlack: $,
            bgRed: $,
            bgGreen: $,
            bgYellow: $,
            bgBlue: $,
            bgMagenta: $,
            bgCyan: $,
            bgWhite: $,
        };
    };
Us.exports = Bf();
Us.exports.createColors = Bf;
var i1 = Us.exports;
const o1 = {},
    s1 = Object.freeze(
        Object.defineProperty(
            { __proto__: null, default: o1 },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    $e = Ed(s1);
let ua = i1,
    aa = $e,
    jo = class Wf extends Error {
        constructor(e, n, r, l, i, o) {
            super(e),
                (this.name = "CssSyntaxError"),
                (this.reason = e),
                i && (this.file = i),
                l && (this.source = l),
                o && (this.plugin = o),
                typeof n < "u" &&
                    typeof r < "u" &&
                    (typeof n == "number"
                        ? ((this.line = n), (this.column = r))
                        : ((this.line = n.line),
                          (this.column = n.column),
                          (this.endLine = r.line),
                          (this.endColumn = r.column))),
                this.setMessage(),
                Error.captureStackTrace && Error.captureStackTrace(this, Wf);
        }
        setMessage() {
            (this.message = this.plugin ? this.plugin + ": " : ""),
                (this.message += this.file ? this.file : "<css input>"),
                typeof this.line < "u" &&
                    (this.message += ":" + this.line + ":" + this.column),
                (this.message += ": " + this.reason);
        }
        showSourceCode(e) {
            if (!this.source) return "";
            let n = this.source;
            e == null && (e = ua.isColorSupported), aa && e && (n = aa(n));
            let r = n.split(/\r?\n/),
                l = Math.max(this.line - 3, 0),
                i = Math.min(this.line + 2, r.length),
                o = String(i).length,
                s,
                u;
            if (e) {
                let { bold: a, gray: p, red: m } = ua.createColors(!0);
                (s = (h) => a(m(h))), (u = (h) => p(h));
            } else s = u = (a) => a;
            return r.slice(l, i).map((a, p) => {
                let m = l + 1 + p,
                    h = " " + (" " + m).slice(-o) + " | ";
                if (m === this.line) {
                    let v =
                        u(h.replace(/\d/g, " ")) +
                        a.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                    return (
                        s(">") +
                        u(h) +
                        a +
                        `
 ` +
                        v +
                        s("^")
                    );
                }
                return " " + u(h) + a;
            }).join(`
`);
        }
        toString() {
            let e = this.showSourceCode();
            return (
                e &&
                    (e =
                        `

` +
                        e +
                        `
`),
                this.name + ": " + this.message + e
            );
        }
    };
var Bs = jo;
jo.default = jo;
var vr = {};
vr.isClean = Symbol("isClean");
vr.my = Symbol("my");
const ca = {
    after: `
`,
    beforeClose: `
`,
    beforeComment: `
`,
    beforeDecl: `
`,
    beforeOpen: " ",
    beforeRule: `
`,
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1,
};
function u1(t) {
    return t[0].toUpperCase() + t.slice(1);
}
let Lo = class {
    constructor(e) {
        this.builder = e;
    }
    atrule(e, n) {
        let r = "@" + e.name,
            l = e.params ? this.rawValue(e, "params") : "";
        if (
            (typeof e.raws.afterName < "u"
                ? (r += e.raws.afterName)
                : l && (r += " "),
            e.nodes)
        )
            this.block(e, r + l);
        else {
            let i = (e.raws.between || "") + (n ? ";" : "");
            this.builder(r + l + i, e);
        }
    }
    beforeAfter(e, n) {
        let r;
        e.type === "decl"
            ? (r = this.raw(e, null, "beforeDecl"))
            : e.type === "comment"
            ? (r = this.raw(e, null, "beforeComment"))
            : n === "before"
            ? (r = this.raw(e, null, "beforeRule"))
            : (r = this.raw(e, null, "beforeClose"));
        let l = e.parent,
            i = 0;
        for (; l && l.type !== "root"; ) (i += 1), (l = l.parent);
        if (
            r.includes(`
`)
        ) {
            let o = this.raw(e, null, "indent");
            if (o.length) for (let s = 0; s < i; s++) r += o;
        }
        return r;
    }
    block(e, n) {
        let r = this.raw(e, "between", "beforeOpen");
        this.builder(n + r + "{", e, "start");
        let l;
        e.nodes && e.nodes.length
            ? (this.body(e), (l = this.raw(e, "after")))
            : (l = this.raw(e, "after", "emptyBody")),
            l && this.builder(l),
            this.builder("}", e, "end");
    }
    body(e) {
        let n = e.nodes.length - 1;
        for (; n > 0 && e.nodes[n].type === "comment"; ) n -= 1;
        let r = this.raw(e, "semicolon");
        for (let l = 0; l < e.nodes.length; l++) {
            let i = e.nodes[l],
                o = this.raw(i, "before");
            o && this.builder(o), this.stringify(i, n !== l || r);
        }
    }
    comment(e) {
        let n = this.raw(e, "left", "commentLeft"),
            r = this.raw(e, "right", "commentRight");
        this.builder("/*" + n + e.text + r + "*/", e);
    }
    decl(e, n) {
        let r = this.raw(e, "between", "colon"),
            l = e.prop + r + this.rawValue(e, "value");
        e.important && (l += e.raws.important || " !important"),
            n && (l += ";"),
            this.builder(l, e);
    }
    document(e) {
        this.body(e);
    }
    raw(e, n, r) {
        let l;
        if ((r || (r = n), n && ((l = e.raws[n]), typeof l < "u"))) return l;
        let i = e.parent;
        if (
            r === "before" &&
            (!i ||
                (i.type === "root" && i.first === e) ||
                (i && i.type === "document"))
        )
            return "";
        if (!i) return ca[r];
        let o = e.root();
        if ((o.rawCache || (o.rawCache = {}), typeof o.rawCache[r] < "u"))
            return o.rawCache[r];
        if (r === "before" || r === "after") return this.beforeAfter(e, r);
        {
            let s = "raw" + u1(r);
            this[s]
                ? (l = this[s](o, e))
                : o.walk((u) => {
                      if (((l = u.raws[n]), typeof l < "u")) return !1;
                  });
        }
        return typeof l > "u" && (l = ca[r]), (o.rawCache[r] = l), l;
    }
    rawBeforeClose(e) {
        let n;
        return (
            e.walk((r) => {
                if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
                    return (
                        (n = r.raws.after),
                        n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")),
                        !1
                    );
            }),
            n && (n = n.replace(/\S/g, "")),
            n
        );
    }
    rawBeforeComment(e, n) {
        let r;
        return (
            e.walkComments((l) => {
                if (typeof l.raws.before < "u")
                    return (
                        (r = l.raws.before),
                        r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
                        !1
                    );
            }),
            typeof r > "u"
                ? (r = this.raw(n, null, "beforeDecl"))
                : r && (r = r.replace(/\S/g, "")),
            r
        );
    }
    rawBeforeDecl(e, n) {
        let r;
        return (
            e.walkDecls((l) => {
                if (typeof l.raws.before < "u")
                    return (
                        (r = l.raws.before),
                        r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
                        !1
                    );
            }),
            typeof r > "u"
                ? (r = this.raw(n, null, "beforeRule"))
                : r && (r = r.replace(/\S/g, "")),
            r
        );
    }
    rawBeforeOpen(e) {
        let n;
        return (
            e.walk((r) => {
                if (r.type !== "decl" && ((n = r.raws.between), typeof n < "u"))
                    return !1;
            }),
            n
        );
    }
    rawBeforeRule(e) {
        let n;
        return (
            e.walk((r) => {
                if (
                    r.nodes &&
                    (r.parent !== e || e.first !== r) &&
                    typeof r.raws.before < "u"
                )
                    return (
                        (n = r.raws.before),
                        n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")),
                        !1
                    );
            }),
            n && (n = n.replace(/\S/g, "")),
            n
        );
    }
    rawColon(e) {
        let n;
        return (
            e.walkDecls((r) => {
                if (typeof r.raws.between < "u")
                    return (n = r.raws.between.replace(/[^\s:]/g, "")), !1;
            }),
            n
        );
    }
    rawEmptyBody(e) {
        let n;
        return (
            e.walk((r) => {
                if (
                    r.nodes &&
                    r.nodes.length === 0 &&
                    ((n = r.raws.after), typeof n < "u")
                )
                    return !1;
            }),
            n
        );
    }
    rawIndent(e) {
        if (e.raws.indent) return e.raws.indent;
        let n;
        return (
            e.walk((r) => {
                let l = r.parent;
                if (
                    l &&
                    l !== e &&
                    l.parent &&
                    l.parent === e &&
                    typeof r.raws.before < "u"
                ) {
                    let i = r.raws.before.split(`
`);
                    return (
                        (n = i[i.length - 1]), (n = n.replace(/\S/g, "")), !1
                    );
                }
            }),
            n
        );
    }
    rawSemicolon(e) {
        let n;
        return (
            e.walk((r) => {
                if (
                    r.nodes &&
                    r.nodes.length &&
                    r.last.type === "decl" &&
                    ((n = r.raws.semicolon), typeof n < "u")
                )
                    return !1;
            }),
            n
        );
    }
    rawValue(e, n) {
        let r = e[n],
            l = e.raws[n];
        return l && l.value === r ? l.raw : r;
    }
    root(e) {
        this.body(e), e.raws.after && this.builder(e.raws.after);
    }
    rule(e) {
        this.block(e, this.rawValue(e, "selector")),
            e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
    }
    stringify(e, n) {
        if (!this[e.type])
            throw new Error(
                "Unknown AST node type " +
                    e.type +
                    ". Maybe you need to change PostCSS stringifier."
            );
        this[e.type](e, n);
    }
};
var Vf = Lo;
Lo.default = Lo;
let a1 = Vf;
function To(t, e) {
    new a1(e).stringify(t);
}
var bl = To;
To.default = To;
let { isClean: Fr, my: c1 } = vr,
    f1 = Bs,
    d1 = Vf,
    p1 = bl;
function Mo(t, e) {
    let n = new t.constructor();
    for (let r in t) {
        if (!Object.prototype.hasOwnProperty.call(t, r) || r === "proxyCache")
            continue;
        let l = t[r],
            i = typeof l;
        r === "parent" && i === "object"
            ? e && (n[r] = e)
            : r === "source"
            ? (n[r] = l)
            : Array.isArray(l)
            ? (n[r] = l.map((o) => Mo(o, n)))
            : (i === "object" && l !== null && (l = Mo(l)), (n[r] = l));
    }
    return n;
}
let Do = class {
    constructor(e = {}) {
        (this.raws = {}), (this[Fr] = !1), (this[c1] = !0);
        for (let n in e)
            if (n === "nodes") {
                this.nodes = [];
                for (let r of e[n])
                    typeof r.clone == "function"
                        ? this.append(r.clone())
                        : this.append(r);
            } else this[n] = e[n];
    }
    addToError(e) {
        if (
            ((e.postcssNode = this),
            e.stack && this.source && /\n\s{4}at /.test(e.stack))
        ) {
            let n = this.source;
            e.stack = e.stack.replace(
                /\n\s{4}at /,
                `$&${n.input.from}:${n.start.line}:${n.start.column}$&`
            );
        }
        return e;
    }
    after(e) {
        return this.parent.insertAfter(this, e), this;
    }
    assign(e = {}) {
        for (let n in e) this[n] = e[n];
        return this;
    }
    before(e) {
        return this.parent.insertBefore(this, e), this;
    }
    cleanRaws(e) {
        delete this.raws.before,
            delete this.raws.after,
            e || delete this.raws.between;
    }
    clone(e = {}) {
        let n = Mo(this);
        for (let r in e) n[r] = e[r];
        return n;
    }
    cloneAfter(e = {}) {
        let n = this.clone(e);
        return this.parent.insertAfter(this, n), n;
    }
    cloneBefore(e = {}) {
        let n = this.clone(e);
        return this.parent.insertBefore(this, n), n;
    }
    error(e, n = {}) {
        if (this.source) {
            let { end: r, start: l } = this.rangeBy(n);
            return this.source.input.error(
                e,
                { column: l.column, line: l.line },
                { column: r.column, line: r.line },
                n
            );
        }
        return new f1(e);
    }
    getProxyProcessor() {
        return {
            get(e, n) {
                return n === "proxyOf"
                    ? e
                    : n === "root"
                    ? () => e.root().toProxy()
                    : e[n];
            },
            set(e, n, r) {
                return (
                    e[n] === r ||
                        ((e[n] = r),
                        (n === "prop" ||
                            n === "value" ||
                            n === "name" ||
                            n === "params" ||
                            n === "important" ||
                            n === "text") &&
                            e.markDirty()),
                    !0
                );
            },
        };
    }
    markDirty() {
        if (this[Fr]) {
            this[Fr] = !1;
            let e = this;
            for (; (e = e.parent); ) e[Fr] = !1;
        }
    }
    next() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e + 1];
    }
    positionBy(e, n) {
        let r = this.source.start;
        if (e.index) r = this.positionInside(e.index, n);
        else if (e.word) {
            n = this.toString();
            let l = n.indexOf(e.word);
            l !== -1 && (r = this.positionInside(l, n));
        }
        return r;
    }
    positionInside(e, n) {
        let r = n || this.toString(),
            l = this.source.start.column,
            i = this.source.start.line;
        for (let o = 0; o < e; o++)
            r[o] ===
            `
`
                ? ((l = 1), (i += 1))
                : (l += 1);
        return { column: l, line: i };
    }
    prev() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e - 1];
    }
    rangeBy(e) {
        let n = {
                column: this.source.start.column,
                line: this.source.start.line,
            },
            r = this.source.end
                ? {
                      column: this.source.end.column + 1,
                      line: this.source.end.line,
                  }
                : { column: n.column + 1, line: n.line };
        if (e.word) {
            let l = this.toString(),
                i = l.indexOf(e.word);
            i !== -1 &&
                ((n = this.positionInside(i, l)),
                (r = this.positionInside(i + e.word.length, l)));
        } else
            e.start
                ? (n = { column: e.start.column, line: e.start.line })
                : e.index && (n = this.positionInside(e.index)),
                e.end
                    ? (r = { column: e.end.column, line: e.end.line })
                    : e.endIndex
                    ? (r = this.positionInside(e.endIndex))
                    : e.index && (r = this.positionInside(e.index + 1));
        return (
            (r.line < n.line || (r.line === n.line && r.column <= n.column)) &&
                (r = { column: n.column + 1, line: n.line }),
            { end: r, start: n }
        );
    }
    raw(e, n) {
        return new d1().raw(this, e, n);
    }
    remove() {
        return (
            this.parent && this.parent.removeChild(this),
            (this.parent = void 0),
            this
        );
    }
    replaceWith(...e) {
        if (this.parent) {
            let n = this,
                r = !1;
            for (let l of e)
                l === this
                    ? (r = !0)
                    : r
                    ? (this.parent.insertAfter(n, l), (n = l))
                    : this.parent.insertBefore(n, l);
            r || this.remove();
        }
        return this;
    }
    root() {
        let e = this;
        for (; e.parent && e.parent.type !== "document"; ) e = e.parent;
        return e;
    }
    toJSON(e, n) {
        let r = {},
            l = n == null;
        n = n || new Map();
        let i = 0;
        for (let o in this) {
            if (
                !Object.prototype.hasOwnProperty.call(this, o) ||
                o === "parent" ||
                o === "proxyCache"
            )
                continue;
            let s = this[o];
            if (Array.isArray(s))
                r[o] = s.map((u) =>
                    typeof u == "object" && u.toJSON ? u.toJSON(null, n) : u
                );
            else if (typeof s == "object" && s.toJSON) r[o] = s.toJSON(null, n);
            else if (o === "source") {
                let u = n.get(s.input);
                u == null && ((u = i), n.set(s.input, i), i++),
                    (r[o] = { end: s.end, inputId: u, start: s.start });
            } else r[o] = s;
        }
        return l && (r.inputs = [...n.keys()].map((o) => o.toJSON())), r;
    }
    toProxy() {
        return (
            this.proxyCache ||
                (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
            this.proxyCache
        );
    }
    toString(e = p1) {
        e.stringify && (e = e.stringify);
        let n = "";
        return (
            e(this, (r) => {
                n += r;
            }),
            n
        );
    }
    warn(e, n, r) {
        let l = { node: this };
        for (let i in r) l[i] = r[i];
        return e.warn(n, l);
    }
    get proxyOf() {
        return this;
    }
};
var ei = Do;
Do.default = Do;
let h1 = ei,
    Ao = class extends h1 {
        constructor(e) {
            e &&
                typeof e.value < "u" &&
                typeof e.value != "string" &&
                (e = { ...e, value: String(e.value) }),
                super(e),
                (this.type = "decl");
        }
        get variable() {
            return this.prop.startsWith("--") || this.prop[0] === "$";
        }
    };
var ti = Ao;
Ao.default = Ao;
let m1 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
    y1 =
        (t, e = 21) =>
        (n = e) => {
            let r = "",
                l = n;
            for (; l--; ) r += t[(Math.random() * t.length) | 0];
            return r;
        },
    g1 = (t = 21) => {
        let e = "",
            n = t;
        for (; n--; ) e += m1[(Math.random() * 64) | 0];
        return e;
    };
var v1 = { nanoid: g1, customAlphabet: y1 };
let { SourceMapConsumer: fa, SourceMapGenerator: da } = $e,
    { existsSync: w1, readFileSync: x1 } = $e,
    { dirname: Ti, join: S1 } = $e;
function k1(t) {
    return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let Io = class {
    constructor(e, n) {
        if (n.map === !1) return;
        this.loadAnnotation(e),
            (this.inline = this.startWith(this.annotation, "data:"));
        let r = n.map ? n.map.prev : void 0,
            l = this.loadMap(n.from, r);
        !this.mapFile && n.from && (this.mapFile = n.from),
            this.mapFile && (this.root = Ti(this.mapFile)),
            l && (this.text = l);
    }
    consumer() {
        return (
            this.consumerCache || (this.consumerCache = new fa(this.text)),
            this.consumerCache
        );
    }
    decodeInline(e) {
        let n = /^data:application\/json;charset=utf-?8;base64,/,
            r = /^data:application\/json;base64,/,
            l = /^data:application\/json;charset=utf-?8,/,
            i = /^data:application\/json,/;
        if (l.test(e) || i.test(e))
            return decodeURIComponent(e.substr(RegExp.lastMatch.length));
        if (n.test(e) || r.test(e))
            return k1(e.substr(RegExp.lastMatch.length));
        let o = e.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + o);
    }
    getAnnotationURL(e) {
        return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(e) {
        return typeof e != "object"
            ? !1
            : typeof e.mappings == "string" ||
                  typeof e._mappings == "string" ||
                  Array.isArray(e.sections);
    }
    loadAnnotation(e) {
        let n = e.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!n) return;
        let r = e.lastIndexOf(n.pop()),
            l = e.indexOf("*/", r);
        r > -1 &&
            l > -1 &&
            (this.annotation = this.getAnnotationURL(e.substring(r, l)));
    }
    loadFile(e) {
        if (((this.root = Ti(e)), w1(e)))
            return (this.mapFile = e), x1(e, "utf-8").toString().trim();
    }
    loadMap(e, n) {
        if (n === !1) return !1;
        if (n) {
            if (typeof n == "string") return n;
            if (typeof n == "function") {
                let r = n(e);
                if (r) {
                    let l = this.loadFile(r);
                    if (!l)
                        throw new Error(
                            "Unable to load previous source map: " +
                                r.toString()
                        );
                    return l;
                }
            } else {
                if (n instanceof fa) return da.fromSourceMap(n).toString();
                if (n instanceof da) return n.toString();
                if (this.isMap(n)) return JSON.stringify(n);
                throw new Error(
                    "Unsupported previous source map format: " + n.toString()
                );
            }
        } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
                let r = this.annotation;
                return e && (r = S1(Ti(e), r)), this.loadFile(r);
            }
        }
    }
    startWith(e, n) {
        return e ? e.substr(0, n.length) === n : !1;
    }
    withContent() {
        return !!(
            this.consumer().sourcesContent &&
            this.consumer().sourcesContent.length > 0
        );
    }
};
var Hf = Io;
Io.default = Io;
let { SourceMapConsumer: C1, SourceMapGenerator: E1 } = $e,
    { fileURLToPath: pa, pathToFileURL: Ur } = $e,
    { isAbsolute: $o, resolve: Fo } = $e,
    { nanoid: _1 } = v1,
    Mi = $e,
    ha = Bs,
    P1 = Hf,
    Di = Symbol("fromOffsetCache"),
    N1 = !!(C1 && E1),
    ma = !!(Fo && $o),
    Tl = class {
        constructor(e, n = {}) {
            if (
                e === null ||
                typeof e > "u" ||
                (typeof e == "object" && !e.toString)
            )
                throw new Error(`PostCSS received ${e} instead of CSS string`);
            if (
                ((this.css = e.toString()),
                this.css[0] === "\uFEFF" || this.css[0] === "￾"
                    ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
                    : (this.hasBOM = !1),
                n.from &&
                    (!ma || /^\w+:\/\//.test(n.from) || $o(n.from)
                        ? (this.file = n.from)
                        : (this.file = Fo(n.from))),
                ma && N1)
            ) {
                let r = new P1(this.css, n);
                if (r.text) {
                    this.map = r;
                    let l = r.consumer().file;
                    !this.file && l && (this.file = this.mapResolve(l));
                }
            }
            this.file || (this.id = "<input css " + _1(6) + ">"),
                this.map && (this.map.file = this.from);
        }
        error(e, n, r, l = {}) {
            let i, o, s;
            if (n && typeof n == "object") {
                let a = n,
                    p = r;
                if (typeof a.offset == "number") {
                    let m = this.fromOffset(a.offset);
                    (n = m.line), (r = m.col);
                } else (n = a.line), (r = a.column);
                if (typeof p.offset == "number") {
                    let m = this.fromOffset(p.offset);
                    (o = m.line), (s = m.col);
                } else (o = p.line), (s = p.column);
            } else if (!r) {
                let a = this.fromOffset(n);
                (n = a.line), (r = a.col);
            }
            let u = this.origin(n, r, o, s);
            return (
                u
                    ? (i = new ha(
                          e,
                          u.endLine === void 0
                              ? u.line
                              : { column: u.column, line: u.line },
                          u.endLine === void 0
                              ? u.column
                              : { column: u.endColumn, line: u.endLine },
                          u.source,
                          u.file,
                          l.plugin
                      ))
                    : (i = new ha(
                          e,
                          o === void 0 ? n : { column: r, line: n },
                          o === void 0 ? r : { column: s, line: o },
                          this.css,
                          this.file,
                          l.plugin
                      )),
                (i.input = {
                    column: r,
                    endColumn: s,
                    endLine: o,
                    line: n,
                    source: this.css,
                }),
                this.file &&
                    (Ur && (i.input.url = Ur(this.file).toString()),
                    (i.input.file = this.file)),
                i
            );
        }
        fromOffset(e) {
            let n, r;
            if (this[Di]) r = this[Di];
            else {
                let i = this.css.split(`
`);
                r = new Array(i.length);
                let o = 0;
                for (let s = 0, u = i.length; s < u; s++)
                    (r[s] = o), (o += i[s].length + 1);
                this[Di] = r;
            }
            n = r[r.length - 1];
            let l = 0;
            if (e >= n) l = r.length - 1;
            else {
                let i = r.length - 2,
                    o;
                for (; l < i; )
                    if (((o = l + ((i - l) >> 1)), e < r[o])) i = o - 1;
                    else if (e >= r[o + 1]) l = o + 1;
                    else {
                        l = o;
                        break;
                    }
            }
            return { col: e - r[l] + 1, line: l + 1 };
        }
        mapResolve(e) {
            return /^\w+:\/\//.test(e)
                ? e
                : Fo(this.map.consumer().sourceRoot || this.map.root || ".", e);
        }
        origin(e, n, r, l) {
            if (!this.map) return !1;
            let i = this.map.consumer(),
                o = i.originalPositionFor({ column: n, line: e });
            if (!o.source) return !1;
            let s;
            typeof r == "number" &&
                (s = i.originalPositionFor({ column: l, line: r }));
            let u;
            $o(o.source)
                ? (u = Ur(o.source))
                : (u = new URL(
                      o.source,
                      this.map.consumer().sourceRoot || Ur(this.map.mapFile)
                  ));
            let a = {
                column: o.column,
                endColumn: s && s.column,
                endLine: s && s.line,
                line: o.line,
                url: u.toString(),
            };
            if (u.protocol === "file:")
                if (pa) a.file = pa(u);
                else
                    throw new Error(
                        "file: protocol is not available in this PostCSS build"
                    );
            let p = i.sourceContentFor(o.source);
            return p && (a.source = p), a;
        }
        toJSON() {
            let e = {};
            for (let n of ["hasBOM", "css", "file", "id"])
                this[n] != null && (e[n] = this[n]);
            return (
                this.map &&
                    ((e.map = { ...this.map }),
                    e.map.consumerCache && (e.map.consumerCache = void 0)),
                e
            );
        }
        get from() {
            return this.file || this.id;
        }
    };
var ni = Tl;
Tl.default = Tl;
Mi && Mi.registerInput && Mi.registerInput(Tl);
let { SourceMapConsumer: Qf, SourceMapGenerator: sl } = $e,
    { dirname: ul, relative: Kf, resolve: Yf, sep: Gf } = $e,
    { pathToFileURL: ya } = $e,
    O1 = ni,
    R1 = !!(Qf && sl),
    z1 = !!(ul && Yf && Kf && Gf),
    j1 = class {
        constructor(e, n, r, l) {
            (this.stringify = e),
                (this.mapOpts = r.map || {}),
                (this.root = n),
                (this.opts = r),
                (this.css = l),
                (this.usesFileUrls =
                    !this.mapOpts.from && this.mapOpts.absolute),
                (this.memoizedFileURLs = new Map()),
                (this.memoizedPaths = new Map()),
                (this.memoizedURLs = new Map());
        }
        addAnnotation() {
            let e;
            this.isInline()
                ? (e =
                      "data:application/json;base64," +
                      this.toBase64(this.map.toString()))
                : typeof this.mapOpts.annotation == "string"
                ? (e = this.mapOpts.annotation)
                : typeof this.mapOpts.annotation == "function"
                ? (e = this.mapOpts.annotation(this.opts.to, this.root))
                : (e = this.outputFile() + ".map");
            let n = `
`;
            this.css.includes(`\r
`) &&
                (n = `\r
`),
                (this.css += n + "/*# sourceMappingURL=" + e + " */");
        }
        applyPrevMaps() {
            for (let e of this.previous()) {
                let n = this.toUrl(this.path(e.file)),
                    r = e.root || ul(e.file),
                    l;
                this.mapOpts.sourcesContent === !1
                    ? ((l = new Qf(e.text)),
                      l.sourcesContent &&
                          (l.sourcesContent = l.sourcesContent.map(() => null)))
                    : (l = e.consumer()),
                    this.map.applySourceMap(l, n, this.toUrl(this.path(r)));
            }
        }
        clearAnnotation() {
            if (this.mapOpts.annotation !== !1)
                if (this.root) {
                    let e;
                    for (let n = this.root.nodes.length - 1; n >= 0; n--)
                        (e = this.root.nodes[n]),
                            e.type === "comment" &&
                                e.text.indexOf("# sourceMappingURL=") === 0 &&
                                this.root.removeChild(n);
                } else
                    this.css &&
                        (this.css = this.css.replace(
                            /(\n)?\/\*#[\S\s]*?\*\/$/gm,
                            ""
                        ));
        }
        generate() {
            if ((this.clearAnnotation(), z1 && R1 && this.isMap()))
                return this.generateMap();
            {
                let e = "";
                return (
                    this.stringify(this.root, (n) => {
                        e += n;
                    }),
                    [e]
                );
            }
        }
        generateMap() {
            if (this.root) this.generateString();
            else if (this.previous().length === 1) {
                let e = this.previous()[0].consumer();
                (e.file = this.outputFile()), (this.map = sl.fromSourceMap(e));
            } else
                (this.map = new sl({ file: this.outputFile() })),
                    this.map.addMapping({
                        generated: { column: 0, line: 1 },
                        original: { column: 0, line: 1 },
                        source: this.opts.from
                            ? this.toUrl(this.path(this.opts.from))
                            : "<no source>",
                    });
            return (
                this.isSourcesContent() && this.setSourcesContent(),
                this.root && this.previous().length > 0 && this.applyPrevMaps(),
                this.isAnnotation() && this.addAnnotation(),
                this.isInline() ? [this.css] : [this.css, this.map]
            );
        }
        generateString() {
            (this.css = ""), (this.map = new sl({ file: this.outputFile() }));
            let e = 1,
                n = 1,
                r = "<no source>",
                l = {
                    generated: { column: 0, line: 0 },
                    original: { column: 0, line: 0 },
                    source: "",
                },
                i,
                o;
            this.stringify(this.root, (s, u, a) => {
                if (
                    ((this.css += s),
                    u &&
                        a !== "end" &&
                        ((l.generated.line = e),
                        (l.generated.column = n - 1),
                        u.source && u.source.start
                            ? ((l.source = this.sourcePath(u)),
                              (l.original.line = u.source.start.line),
                              (l.original.column = u.source.start.column - 1),
                              this.map.addMapping(l))
                            : ((l.source = r),
                              (l.original.line = 1),
                              (l.original.column = 0),
                              this.map.addMapping(l))),
                    (i = s.match(/\n/g)),
                    i
                        ? ((e += i.length),
                          (o = s.lastIndexOf(`
`)),
                          (n = s.length - o))
                        : (n += s.length),
                    u && a !== "start")
                ) {
                    let p = u.parent || { raws: {} };
                    (!(
                        u.type === "decl" ||
                        (u.type === "atrule" && !u.nodes)
                    ) ||
                        u !== p.last ||
                        p.raws.semicolon) &&
                        (u.source && u.source.end
                            ? ((l.source = this.sourcePath(u)),
                              (l.original.line = u.source.end.line),
                              (l.original.column = u.source.end.column - 1),
                              (l.generated.line = e),
                              (l.generated.column = n - 2),
                              this.map.addMapping(l))
                            : ((l.source = r),
                              (l.original.line = 1),
                              (l.original.column = 0),
                              (l.generated.line = e),
                              (l.generated.column = n - 1),
                              this.map.addMapping(l)));
                }
            });
        }
        isAnnotation() {
            return this.isInline()
                ? !0
                : typeof this.mapOpts.annotation < "u"
                ? this.mapOpts.annotation
                : this.previous().length
                ? this.previous().some((e) => e.annotation)
                : !0;
        }
        isInline() {
            if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
            let e = this.mapOpts.annotation;
            return typeof e < "u" && e !== !0
                ? !1
                : this.previous().length
                ? this.previous().some((n) => n.inline)
                : !0;
        }
        isMap() {
            return typeof this.opts.map < "u"
                ? !!this.opts.map
                : this.previous().length > 0;
        }
        isSourcesContent() {
            return typeof this.mapOpts.sourcesContent < "u"
                ? this.mapOpts.sourcesContent
                : this.previous().length
                ? this.previous().some((e) => e.withContent())
                : !0;
        }
        outputFile() {
            return this.opts.to
                ? this.path(this.opts.to)
                : this.opts.from
                ? this.path(this.opts.from)
                : "to.css";
        }
        path(e) {
            if (
                this.mapOpts.absolute ||
                e.charCodeAt(0) === 60 ||
                /^\w+:\/\//.test(e)
            )
                return e;
            let n = this.memoizedPaths.get(e);
            if (n) return n;
            let r = this.opts.to ? ul(this.opts.to) : ".";
            typeof this.mapOpts.annotation == "string" &&
                (r = ul(Yf(r, this.mapOpts.annotation)));
            let l = Kf(r, e);
            return this.memoizedPaths.set(e, l), l;
        }
        previous() {
            if (!this.previousMaps)
                if (((this.previousMaps = []), this.root))
                    this.root.walk((e) => {
                        if (e.source && e.source.input.map) {
                            let n = e.source.input.map;
                            this.previousMaps.includes(n) ||
                                this.previousMaps.push(n);
                        }
                    });
                else {
                    let e = new O1(this.css, this.opts);
                    e.map && this.previousMaps.push(e.map);
                }
            return this.previousMaps;
        }
        setSourcesContent() {
            let e = {};
            if (this.root)
                this.root.walk((n) => {
                    if (n.source) {
                        let r = n.source.input.from;
                        if (r && !e[r]) {
                            e[r] = !0;
                            let l = this.usesFileUrls
                                ? this.toFileUrl(r)
                                : this.toUrl(this.path(r));
                            this.map.setSourceContent(l, n.source.input.css);
                        }
                    }
                });
            else if (this.css) {
                let n = this.opts.from
                    ? this.toUrl(this.path(this.opts.from))
                    : "<no source>";
                this.map.setSourceContent(n, this.css);
            }
        }
        sourcePath(e) {
            return this.mapOpts.from
                ? this.toUrl(this.mapOpts.from)
                : this.usesFileUrls
                ? this.toFileUrl(e.source.input.from)
                : this.toUrl(this.path(e.source.input.from));
        }
        toBase64(e) {
            return Buffer
                ? Buffer.from(e).toString("base64")
                : window.btoa(unescape(encodeURIComponent(e)));
        }
        toFileUrl(e) {
            let n = this.memoizedFileURLs.get(e);
            if (n) return n;
            if (ya) {
                let r = ya(e).toString();
                return this.memoizedFileURLs.set(e, r), r;
            } else
                throw new Error(
                    "`map.absolute` option is not available in this PostCSS build"
                );
        }
        toUrl(e) {
            let n = this.memoizedURLs.get(e);
            if (n) return n;
            Gf === "\\" && (e = e.replace(/\\/g, "/"));
            let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
            return this.memoizedURLs.set(e, r), r;
        }
    };
var Xf = j1;
let L1 = ei,
    Uo = class extends L1 {
        constructor(e) {
            super(e), (this.type = "comment");
        }
    };
var ri = Uo;
Uo.default = Uo;
let { isClean: Jf, my: Zf } = vr,
    qf = ti,
    bf = ri,
    T1 = ei,
    ed,
    Ws,
    Vs,
    td;
function nd(t) {
    return t.map(
        (e) => (e.nodes && (e.nodes = nd(e.nodes)), delete e.source, e)
    );
}
function rd(t) {
    if (((t[Jf] = !1), t.proxyOf.nodes)) for (let e of t.proxyOf.nodes) rd(e);
}
let nt = class ld extends T1 {
    append(...e) {
        for (let n of e) {
            let r = this.normalize(n, this.last);
            for (let l of r) this.proxyOf.nodes.push(l);
        }
        return this.markDirty(), this;
    }
    cleanRaws(e) {
        if ((super.cleanRaws(e), this.nodes))
            for (let n of this.nodes) n.cleanRaws(e);
    }
    each(e) {
        if (!this.proxyOf.nodes) return;
        let n = this.getIterator(),
            r,
            l;
        for (
            ;
            this.indexes[n] < this.proxyOf.nodes.length &&
            ((r = this.indexes[n]),
            (l = e(this.proxyOf.nodes[r], r)),
            l !== !1);

        )
            this.indexes[n] += 1;
        return delete this.indexes[n], l;
    }
    every(e) {
        return this.nodes.every(e);
    }
    getIterator() {
        this.lastEach || (this.lastEach = 0),
            this.indexes || (this.indexes = {}),
            (this.lastEach += 1);
        let e = this.lastEach;
        return (this.indexes[e] = 0), e;
    }
    getProxyProcessor() {
        return {
            get(e, n) {
                return n === "proxyOf"
                    ? e
                    : e[n]
                    ? n === "each" ||
                      (typeof n == "string" && n.startsWith("walk"))
                        ? (...r) =>
                              e[n](
                                  ...r.map((l) =>
                                      typeof l == "function"
                                          ? (i, o) => l(i.toProxy(), o)
                                          : l
                                  )
                              )
                        : n === "every" || n === "some"
                        ? (r) => e[n]((l, ...i) => r(l.toProxy(), ...i))
                        : n === "root"
                        ? () => e.root().toProxy()
                        : n === "nodes"
                        ? e.nodes.map((r) => r.toProxy())
                        : n === "first" || n === "last"
                        ? e[n].toProxy()
                        : e[n]
                    : e[n];
            },
            set(e, n, r) {
                return (
                    e[n] === r ||
                        ((e[n] = r),
                        (n === "name" || n === "params" || n === "selector") &&
                            e.markDirty()),
                    !0
                );
            },
        };
    }
    index(e) {
        return typeof e == "number"
            ? e
            : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }
    insertAfter(e, n) {
        let r = this.index(e),
            l = this.normalize(n, this.proxyOf.nodes[r]).reverse();
        r = this.index(e);
        for (let o of l) this.proxyOf.nodes.splice(r + 1, 0, o);
        let i;
        for (let o in this.indexes)
            (i = this.indexes[o]), r < i && (this.indexes[o] = i + l.length);
        return this.markDirty(), this;
    }
    insertBefore(e, n) {
        let r = this.index(e),
            l = r === 0 ? "prepend" : !1,
            i = this.normalize(n, this.proxyOf.nodes[r], l).reverse();
        r = this.index(e);
        for (let s of i) this.proxyOf.nodes.splice(r, 0, s);
        let o;
        for (let s in this.indexes)
            (o = this.indexes[s]), r <= o && (this.indexes[s] = o + i.length);
        return this.markDirty(), this;
    }
    normalize(e, n) {
        if (typeof e == "string") e = nd(ed(e).nodes);
        else if (Array.isArray(e)) {
            e = e.slice(0);
            for (let l of e) l.parent && l.parent.removeChild(l, "ignore");
        } else if (e.type === "root" && this.type !== "document") {
            e = e.nodes.slice(0);
            for (let l of e) l.parent && l.parent.removeChild(l, "ignore");
        } else if (e.type) e = [e];
        else if (e.prop) {
            if (typeof e.value > "u")
                throw new Error("Value field is missed in node creation");
            typeof e.value != "string" && (e.value = String(e.value)),
                (e = [new qf(e)]);
        } else if (e.selector) e = [new Ws(e)];
        else if (e.name) e = [new Vs(e)];
        else if (e.text) e = [new bf(e)];
        else throw new Error("Unknown node type in node creation");
        return e.map(
            (l) => (
                l[Zf] || ld.rebuild(l),
                (l = l.proxyOf),
                l.parent && l.parent.removeChild(l),
                l[Jf] && rd(l),
                typeof l.raws.before > "u" &&
                    n &&
                    typeof n.raws.before < "u" &&
                    (l.raws.before = n.raws.before.replace(/\S/g, "")),
                (l.parent = this.proxyOf),
                l
            )
        );
    }
    prepend(...e) {
        e = e.reverse();
        for (let n of e) {
            let r = this.normalize(n, this.first, "prepend").reverse();
            for (let l of r) this.proxyOf.nodes.unshift(l);
            for (let l in this.indexes)
                this.indexes[l] = this.indexes[l] + r.length;
        }
        return this.markDirty(), this;
    }
    push(e) {
        return (e.parent = this), this.proxyOf.nodes.push(e), this;
    }
    removeAll() {
        for (let e of this.proxyOf.nodes) e.parent = void 0;
        return (this.proxyOf.nodes = []), this.markDirty(), this;
    }
    removeChild(e) {
        (e = this.index(e)),
            (this.proxyOf.nodes[e].parent = void 0),
            this.proxyOf.nodes.splice(e, 1);
        let n;
        for (let r in this.indexes)
            (n = this.indexes[r]), n >= e && (this.indexes[r] = n - 1);
        return this.markDirty(), this;
    }
    replaceValues(e, n, r) {
        return (
            r || ((r = n), (n = {})),
            this.walkDecls((l) => {
                (n.props && !n.props.includes(l.prop)) ||
                    (n.fast && !l.value.includes(n.fast)) ||
                    (l.value = l.value.replace(e, r));
            }),
            this.markDirty(),
            this
        );
    }
    some(e) {
        return this.nodes.some(e);
    }
    walk(e) {
        return this.each((n, r) => {
            let l;
            try {
                l = e(n, r);
            } catch (i) {
                throw n.addToError(i);
            }
            return l !== !1 && n.walk && (l = n.walk(e)), l;
        });
    }
    walkAtRules(e, n) {
        return n
            ? e instanceof RegExp
                ? this.walk((r, l) => {
                      if (r.type === "atrule" && e.test(r.name)) return n(r, l);
                  })
                : this.walk((r, l) => {
                      if (r.type === "atrule" && r.name === e) return n(r, l);
                  })
            : ((n = e),
              this.walk((r, l) => {
                  if (r.type === "atrule") return n(r, l);
              }));
    }
    walkComments(e) {
        return this.walk((n, r) => {
            if (n.type === "comment") return e(n, r);
        });
    }
    walkDecls(e, n) {
        return n
            ? e instanceof RegExp
                ? this.walk((r, l) => {
                      if (r.type === "decl" && e.test(r.prop)) return n(r, l);
                  })
                : this.walk((r, l) => {
                      if (r.type === "decl" && r.prop === e) return n(r, l);
                  })
            : ((n = e),
              this.walk((r, l) => {
                  if (r.type === "decl") return n(r, l);
              }));
    }
    walkRules(e, n) {
        return n
            ? e instanceof RegExp
                ? this.walk((r, l) => {
                      if (r.type === "rule" && e.test(r.selector))
                          return n(r, l);
                  })
                : this.walk((r, l) => {
                      if (r.type === "rule" && r.selector === e) return n(r, l);
                  })
            : ((n = e),
              this.walk((r, l) => {
                  if (r.type === "rule") return n(r, l);
              }));
    }
    get first() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
        if (this.proxyOf.nodes)
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
};
nt.registerParse = (t) => {
    ed = t;
};
nt.registerRule = (t) => {
    Ws = t;
};
nt.registerAtRule = (t) => {
    Vs = t;
};
nt.registerRoot = (t) => {
    td = t;
};
var Ut = nt;
nt.default = nt;
nt.rebuild = (t) => {
    t.type === "atrule"
        ? Object.setPrototypeOf(t, Vs.prototype)
        : t.type === "rule"
        ? Object.setPrototypeOf(t, Ws.prototype)
        : t.type === "decl"
        ? Object.setPrototypeOf(t, qf.prototype)
        : t.type === "comment"
        ? Object.setPrototypeOf(t, bf.prototype)
        : t.type === "root" && Object.setPrototypeOf(t, td.prototype),
        (t[Zf] = !0),
        t.nodes &&
            t.nodes.forEach((e) => {
                nt.rebuild(e);
            });
};
let M1 = Ut,
    id,
    od,
    ur = class extends M1 {
        constructor(e) {
            super({ type: "document", ...e }), this.nodes || (this.nodes = []);
        }
        toResult(e = {}) {
            return new id(new od(), this, e).stringify();
        }
    };
ur.registerLazyResult = (t) => {
    id = t;
};
ur.registerProcessor = (t) => {
    od = t;
};
var Hs = ur;
ur.default = ur;
let Bo = class {
    constructor(e, n = {}) {
        if (
            ((this.type = "warning"), (this.text = e), n.node && n.node.source)
        ) {
            let r = n.node.rangeBy(n);
            (this.line = r.start.line),
                (this.column = r.start.column),
                (this.endLine = r.end.line),
                (this.endColumn = r.end.column);
        }
        for (let r in n) this[r] = n[r];
    }
    toString() {
        return this.node
            ? this.node.error(this.text, {
                  index: this.index,
                  plugin: this.plugin,
                  word: this.word,
              }).message
            : this.plugin
            ? this.plugin + ": " + this.text
            : this.text;
    }
};
var sd = Bo;
Bo.default = Bo;
let D1 = sd,
    Wo = class {
        constructor(e, n, r) {
            (this.processor = e),
                (this.messages = []),
                (this.root = n),
                (this.opts = r),
                (this.css = void 0),
                (this.map = void 0);
        }
        toString() {
            return this.css;
        }
        warn(e, n = {}) {
            n.plugin ||
                (this.lastPlugin &&
                    this.lastPlugin.postcssPlugin &&
                    (n.plugin = this.lastPlugin.postcssPlugin));
            let r = new D1(e, n);
            return this.messages.push(r), r;
        }
        warnings() {
            return this.messages.filter((e) => e.type === "warning");
        }
        get content() {
            return this.css;
        }
    };
var Qs = Wo;
Wo.default = Wo;
const Ai = "'".charCodeAt(0),
    ga = '"'.charCodeAt(0),
    Br = "\\".charCodeAt(0),
    va = "/".charCodeAt(0),
    Wr = `
`.charCodeAt(0),
    Rn = " ".charCodeAt(0),
    Vr = "\f".charCodeAt(0),
    Hr = "	".charCodeAt(0),
    Qr = "\r".charCodeAt(0),
    A1 = "[".charCodeAt(0),
    I1 = "]".charCodeAt(0),
    $1 = "(".charCodeAt(0),
    F1 = ")".charCodeAt(0),
    U1 = "{".charCodeAt(0),
    B1 = "}".charCodeAt(0),
    W1 = ";".charCodeAt(0),
    V1 = "*".charCodeAt(0),
    H1 = ":".charCodeAt(0),
    Q1 = "@".charCodeAt(0),
    Kr = /[\t\n\f\r "#'()/;[\\\]{}]/g,
    Yr = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
    K1 = /.[\r\n"'(/\\]/,
    wa = /[\da-f]/i;
var Y1 = function (e, n = {}) {
    let r = e.css.valueOf(),
        l = n.ignoreErrors,
        i,
        o,
        s,
        u,
        a,
        p,
        m,
        h,
        v,
        w,
        S = r.length,
        k = 0,
        f = [],
        c = [];
    function d() {
        return k;
    }
    function g(N) {
        throw e.error("Unclosed " + N, k);
    }
    function C() {
        return c.length === 0 && k >= S;
    }
    function _(N) {
        if (c.length) return c.pop();
        if (k >= S) return;
        let M = N ? N.ignoreUnclosed : !1;
        switch (((i = r.charCodeAt(k)), i)) {
            case Wr:
            case Rn:
            case Hr:
            case Qr:
            case Vr: {
                o = k;
                do (o += 1), (i = r.charCodeAt(o));
                while (
                    i === Rn ||
                    i === Wr ||
                    i === Hr ||
                    i === Qr ||
                    i === Vr
                );
                (w = ["space", r.slice(k, o)]), (k = o - 1);
                break;
            }
            case A1:
            case I1:
            case U1:
            case B1:
            case H1:
            case W1:
            case F1: {
                let R = String.fromCharCode(i);
                w = [R, R, k];
                break;
            }
            case $1: {
                if (
                    ((h = f.length ? f.pop()[1] : ""),
                    (v = r.charCodeAt(k + 1)),
                    h === "url" &&
                        v !== Ai &&
                        v !== ga &&
                        v !== Rn &&
                        v !== Wr &&
                        v !== Hr &&
                        v !== Vr &&
                        v !== Qr)
                ) {
                    o = k;
                    do {
                        if (((p = !1), (o = r.indexOf(")", o + 1)), o === -1))
                            if (l || M) {
                                o = k;
                                break;
                            } else g("bracket");
                        for (m = o; r.charCodeAt(m - 1) === Br; )
                            (m -= 1), (p = !p);
                    } while (p);
                    (w = ["brackets", r.slice(k, o + 1), k, o]), (k = o);
                } else
                    (o = r.indexOf(")", k + 1)),
                        (u = r.slice(k, o + 1)),
                        o === -1 || K1.test(u)
                            ? (w = ["(", "(", k])
                            : ((w = ["brackets", u, k, o]), (k = o));
                break;
            }
            case Ai:
            case ga: {
                (s = i === Ai ? "'" : '"'), (o = k);
                do {
                    if (((p = !1), (o = r.indexOf(s, o + 1)), o === -1))
                        if (l || M) {
                            o = k + 1;
                            break;
                        } else g("string");
                    for (m = o; r.charCodeAt(m - 1) === Br; )
                        (m -= 1), (p = !p);
                } while (p);
                (w = ["string", r.slice(k, o + 1), k, o]), (k = o);
                break;
            }
            case Q1: {
                (Kr.lastIndex = k + 1),
                    Kr.test(r),
                    Kr.lastIndex === 0
                        ? (o = r.length - 1)
                        : (o = Kr.lastIndex - 2),
                    (w = ["at-word", r.slice(k, o + 1), k, o]),
                    (k = o);
                break;
            }
            case Br: {
                for (o = k, a = !0; r.charCodeAt(o + 1) === Br; )
                    (o += 1), (a = !a);
                if (
                    ((i = r.charCodeAt(o + 1)),
                    a &&
                        i !== va &&
                        i !== Rn &&
                        i !== Wr &&
                        i !== Hr &&
                        i !== Qr &&
                        i !== Vr &&
                        ((o += 1), wa.test(r.charAt(o))))
                ) {
                    for (; wa.test(r.charAt(o + 1)); ) o += 1;
                    r.charCodeAt(o + 1) === Rn && (o += 1);
                }
                (w = ["word", r.slice(k, o + 1), k, o]), (k = o);
                break;
            }
            default: {
                i === va && r.charCodeAt(k + 1) === V1
                    ? ((o = r.indexOf("*/", k + 2) + 1),
                      o === 0 && (l || M ? (o = r.length) : g("comment")),
                      (w = ["comment", r.slice(k, o + 1), k, o]),
                      (k = o))
                    : ((Yr.lastIndex = k + 1),
                      Yr.test(r),
                      Yr.lastIndex === 0
                          ? (o = r.length - 1)
                          : (o = Yr.lastIndex - 2),
                      (w = ["word", r.slice(k, o + 1), k, o]),
                      f.push(w),
                      (k = o));
                break;
            }
        }
        return k++, w;
    }
    function E(N) {
        c.push(N);
    }
    return { back: E, endOfFile: C, nextToken: _, position: d };
};
let ud = Ut,
    Ml = class extends ud {
        constructor(e) {
            super(e), (this.type = "atrule");
        }
        append(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
        }
        prepend(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
        }
    };
var Ks = Ml;
Ml.default = Ml;
ud.registerAtRule(Ml);
let ad = Ut,
    cd,
    fd,
    hn = class extends ad {
        constructor(e) {
            super(e), (this.type = "root"), this.nodes || (this.nodes = []);
        }
        normalize(e, n, r) {
            let l = super.normalize(e);
            if (n) {
                if (r === "prepend")
                    this.nodes.length > 1
                        ? (n.raws.before = this.nodes[1].raws.before)
                        : delete n.raws.before;
                else if (this.first !== n)
                    for (let i of l) i.raws.before = n.raws.before;
            }
            return l;
        }
        removeChild(e, n) {
            let r = this.index(e);
            return (
                !n &&
                    r === 0 &&
                    this.nodes.length > 1 &&
                    (this.nodes[1].raws.before = this.nodes[r].raws.before),
                super.removeChild(e)
            );
        }
        toResult(e = {}) {
            return new cd(new fd(), this, e).stringify();
        }
    };
hn.registerLazyResult = (t) => {
    cd = t;
};
hn.registerProcessor = (t) => {
    fd = t;
};
var wr = hn;
hn.default = hn;
ad.registerRoot(hn);
let ar = {
    comma(t) {
        return ar.split(t, [","], !0);
    },
    space(t) {
        let e = [
            " ",
            `
`,
            "	",
        ];
        return ar.split(t, e);
    },
    split(t, e, n) {
        let r = [],
            l = "",
            i = !1,
            o = 0,
            s = !1,
            u = "",
            a = !1;
        for (let p of t)
            a
                ? (a = !1)
                : p === "\\"
                ? (a = !0)
                : s
                ? p === u && (s = !1)
                : p === '"' || p === "'"
                ? ((s = !0), (u = p))
                : p === "("
                ? (o += 1)
                : p === ")"
                ? o > 0 && (o -= 1)
                : o === 0 && e.includes(p) && (i = !0),
                i
                    ? (l !== "" && r.push(l.trim()), (l = ""), (i = !1))
                    : (l += p);
        return (n || l !== "") && r.push(l.trim()), r;
    },
};
var dd = ar;
ar.default = ar;
let pd = Ut,
    G1 = dd,
    Dl = class extends pd {
        constructor(e) {
            super(e), (this.type = "rule"), this.nodes || (this.nodes = []);
        }
        get selectors() {
            return G1.comma(this.selector);
        }
        set selectors(e) {
            let n = this.selector ? this.selector.match(/,\s*/) : null,
                r = n ? n[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(r);
        }
    };
var Ys = Dl;
Dl.default = Dl;
pd.registerRule(Dl);
let X1 = ti,
    J1 = Y1,
    Z1 = ri,
    q1 = Ks,
    b1 = wr,
    xa = Ys;
const Sa = { empty: !0, space: !0 };
function em(t) {
    for (let e = t.length - 1; e >= 0; e--) {
        let n = t[e],
            r = n[3] || n[2];
        if (r) return r;
    }
}
let tm = class {
    constructor(e) {
        (this.input = e),
            (this.root = new b1()),
            (this.current = this.root),
            (this.spaces = ""),
            (this.semicolon = !1),
            (this.customProperty = !1),
            this.createTokenizer(),
            (this.root.source = {
                input: e,
                start: { column: 1, line: 1, offset: 0 },
            });
    }
    atrule(e) {
        let n = new q1();
        (n.name = e[1].slice(1)),
            n.name === "" && this.unnamedAtrule(n, e),
            this.init(n, e[2]);
        let r,
            l,
            i,
            o = !1,
            s = !1,
            u = [],
            a = [];
        for (; !this.tokenizer.endOfFile(); ) {
            if (
                ((e = this.tokenizer.nextToken()),
                (r = e[0]),
                r === "(" || r === "["
                    ? a.push(r === "(" ? ")" : "]")
                    : r === "{" && a.length > 0
                    ? a.push("}")
                    : r === a[a.length - 1] && a.pop(),
                a.length === 0)
            )
                if (r === ";") {
                    (n.source.end = this.getPosition(e[2])),
                        n.source.end.offset++,
                        (this.semicolon = !0);
                    break;
                } else if (r === "{") {
                    s = !0;
                    break;
                } else if (r === "}") {
                    if (u.length > 0) {
                        for (
                            i = u.length - 1, l = u[i];
                            l && l[0] === "space";

                        )
                            l = u[--i];
                        l &&
                            ((n.source.end = this.getPosition(l[3] || l[2])),
                            n.source.end.offset++);
                    }
                    this.end(e);
                    break;
                } else u.push(e);
            else u.push(e);
            if (this.tokenizer.endOfFile()) {
                o = !0;
                break;
            }
        }
        (n.raws.between = this.spacesAndCommentsFromEnd(u)),
            u.length
                ? ((n.raws.afterName = this.spacesAndCommentsFromStart(u)),
                  this.raw(n, "params", u),
                  o &&
                      ((e = u[u.length - 1]),
                      (n.source.end = this.getPosition(e[3] || e[2])),
                      n.source.end.offset++,
                      (this.spaces = n.raws.between),
                      (n.raws.between = "")))
                : ((n.raws.afterName = ""), (n.params = "")),
            s && ((n.nodes = []), (this.current = n));
    }
    checkMissedSemicolon(e) {
        let n = this.colon(e);
        if (n === !1) return;
        let r = 0,
            l;
        for (
            let i = n - 1;
            i >= 0 && ((l = e[i]), !(l[0] !== "space" && ((r += 1), r === 2)));
            i--
        );
        throw this.input.error(
            "Missed semicolon",
            l[0] === "word" ? l[3] + 1 : l[2]
        );
    }
    colon(e) {
        let n = 0,
            r,
            l,
            i;
        for (let [o, s] of e.entries()) {
            if (
                ((r = s),
                (l = r[0]),
                l === "(" && (n += 1),
                l === ")" && (n -= 1),
                n === 0 && l === ":")
            )
                if (!i) this.doubleColon(r);
                else {
                    if (i[0] === "word" && i[1] === "progid") continue;
                    return o;
                }
            i = r;
        }
        return !1;
    }
    comment(e) {
        let n = new Z1();
        this.init(n, e[2]),
            (n.source.end = this.getPosition(e[3] || e[2])),
            n.source.end.offset++;
        let r = e[1].slice(2, -2);
        if (/^\s*$/.test(r))
            (n.text = ""), (n.raws.left = r), (n.raws.right = "");
        else {
            let l = r.match(/^(\s*)([^]*\S)(\s*)$/);
            (n.text = l[2]), (n.raws.left = l[1]), (n.raws.right = l[3]);
        }
    }
    createTokenizer() {
        this.tokenizer = J1(this.input);
    }
    decl(e, n) {
        let r = new X1();
        this.init(r, e[0][2]);
        let l = e[e.length - 1];
        for (
            l[0] === ";" && ((this.semicolon = !0), e.pop()),
                r.source.end = this.getPosition(l[3] || l[2] || em(e)),
                r.source.end.offset++;
            e[0][0] !== "word";

        )
            e.length === 1 && this.unknownWord(e),
                (r.raws.before += e.shift()[1]);
        for (
            r.source.start = this.getPosition(e[0][2]), r.prop = "";
            e.length;

        ) {
            let a = e[0][0];
            if (a === ":" || a === "space" || a === "comment") break;
            r.prop += e.shift()[1];
        }
        r.raws.between = "";
        let i;
        for (; e.length; )
            if (((i = e.shift()), i[0] === ":")) {
                r.raws.between += i[1];
                break;
            } else
                i[0] === "word" && /\w/.test(i[1]) && this.unknownWord([i]),
                    (r.raws.between += i[1]);
        (r.prop[0] === "_" || r.prop[0] === "*") &&
            ((r.raws.before += r.prop[0]), (r.prop = r.prop.slice(1)));
        let o = [],
            s;
        for (
            ;
            e.length && ((s = e[0][0]), !(s !== "space" && s !== "comment"));

        )
            o.push(e.shift());
        this.precheckMissedSemicolon(e);
        for (let a = e.length - 1; a >= 0; a--) {
            if (((i = e[a]), i[1].toLowerCase() === "!important")) {
                r.important = !0;
                let p = this.stringFrom(e, a);
                (p = this.spacesFromEnd(e) + p),
                    p !== " !important" && (r.raws.important = p);
                break;
            } else if (i[1].toLowerCase() === "important") {
                let p = e.slice(0),
                    m = "";
                for (let h = a; h > 0; h--) {
                    let v = p[h][0];
                    if (m.trim().indexOf("!") === 0 && v !== "space") break;
                    m = p.pop()[1] + m;
                }
                m.trim().indexOf("!") === 0 &&
                    ((r.important = !0), (r.raws.important = m), (e = p));
            }
            if (i[0] !== "space" && i[0] !== "comment") break;
        }
        e.some((a) => a[0] !== "space" && a[0] !== "comment") &&
            ((r.raws.between += o.map((a) => a[1]).join("")), (o = [])),
            this.raw(r, "value", o.concat(e), n),
            r.value.includes(":") && !n && this.checkMissedSemicolon(e);
    }
    doubleColon(e) {
        throw this.input.error(
            "Double colon",
            { offset: e[2] },
            { offset: e[2] + e[1].length }
        );
    }
    emptyRule(e) {
        let n = new xa();
        this.init(n, e[2]),
            (n.selector = ""),
            (n.raws.between = ""),
            (this.current = n);
    }
    end(e) {
        this.current.nodes &&
            this.current.nodes.length &&
            (this.current.raws.semicolon = this.semicolon),
            (this.semicolon = !1),
            (this.current.raws.after =
                (this.current.raws.after || "") + this.spaces),
            (this.spaces = ""),
            this.current.parent
                ? ((this.current.source.end = this.getPosition(e[2])),
                  this.current.source.end.offset++,
                  (this.current = this.current.parent))
                : this.unexpectedClose(e);
    }
    endFile() {
        this.current.parent && this.unclosedBlock(),
            this.current.nodes &&
                this.current.nodes.length &&
                (this.current.raws.semicolon = this.semicolon),
            (this.current.raws.after =
                (this.current.raws.after || "") + this.spaces),
            (this.root.source.end = this.getPosition(
                this.tokenizer.position()
            ));
    }
    freeSemicolon(e) {
        if (((this.spaces += e[1]), this.current.nodes)) {
            let n = this.current.nodes[this.current.nodes.length - 1];
            n &&
                n.type === "rule" &&
                !n.raws.ownSemicolon &&
                ((n.raws.ownSemicolon = this.spaces), (this.spaces = ""));
        }
    }
    getPosition(e) {
        let n = this.input.fromOffset(e);
        return { column: n.col, line: n.line, offset: e };
    }
    init(e, n) {
        this.current.push(e),
            (e.source = { input: this.input, start: this.getPosition(n) }),
            (e.raws.before = this.spaces),
            (this.spaces = ""),
            e.type !== "comment" && (this.semicolon = !1);
    }
    other(e) {
        let n = !1,
            r = null,
            l = !1,
            i = null,
            o = [],
            s = e[1].startsWith("--"),
            u = [],
            a = e;
        for (; a; ) {
            if (((r = a[0]), u.push(a), r === "(" || r === "["))
                i || (i = a), o.push(r === "(" ? ")" : "]");
            else if (s && l && r === "{") i || (i = a), o.push("}");
            else if (o.length === 0)
                if (r === ";")
                    if (l) {
                        this.decl(u, s);
                        return;
                    } else break;
                else if (r === "{") {
                    this.rule(u);
                    return;
                } else if (r === "}") {
                    this.tokenizer.back(u.pop()), (n = !0);
                    break;
                } else r === ":" && (l = !0);
            else
                r === o[o.length - 1] &&
                    (o.pop(), o.length === 0 && (i = null));
            a = this.tokenizer.nextToken();
        }
        if (
            (this.tokenizer.endOfFile() && (n = !0),
            o.length > 0 && this.unclosedBracket(i),
            n && l)
        ) {
            if (!s)
                for (
                    ;
                    u.length &&
                    ((a = u[u.length - 1][0]),
                    !(a !== "space" && a !== "comment"));

                )
                    this.tokenizer.back(u.pop());
            this.decl(u, s);
        } else this.unknownWord(u);
    }
    parse() {
        let e;
        for (; !this.tokenizer.endOfFile(); )
            switch (((e = this.tokenizer.nextToken()), e[0])) {
                case "space":
                    this.spaces += e[1];
                    break;
                case ";":
                    this.freeSemicolon(e);
                    break;
                case "}":
                    this.end(e);
                    break;
                case "comment":
                    this.comment(e);
                    break;
                case "at-word":
                    this.atrule(e);
                    break;
                case "{":
                    this.emptyRule(e);
                    break;
                default:
                    this.other(e);
                    break;
            }
        this.endFile();
    }
    precheckMissedSemicolon() {}
    raw(e, n, r, l) {
        let i,
            o,
            s = r.length,
            u = "",
            a = !0,
            p,
            m;
        for (let h = 0; h < s; h += 1)
            (i = r[h]),
                (o = i[0]),
                o === "space" && h === s - 1 && !l
                    ? (a = !1)
                    : o === "comment"
                    ? ((m = r[h - 1] ? r[h - 1][0] : "empty"),
                      (p = r[h + 1] ? r[h + 1][0] : "empty"),
                      !Sa[m] && !Sa[p]
                          ? u.slice(-1) === ","
                              ? (a = !1)
                              : (u += i[1])
                          : (a = !1))
                    : (u += i[1]);
        if (!a) {
            let h = r.reduce((v, w) => v + w[1], "");
            e.raws[n] = { raw: h, value: u };
        }
        e[n] = u;
    }
    rule(e) {
        e.pop();
        let n = new xa();
        this.init(n, e[0][2]),
            (n.raws.between = this.spacesAndCommentsFromEnd(e)),
            this.raw(n, "selector", e),
            (this.current = n);
    }
    spacesAndCommentsFromEnd(e) {
        let n,
            r = "";
        for (
            ;
            e.length &&
            ((n = e[e.length - 1][0]), !(n !== "space" && n !== "comment"));

        )
            r = e.pop()[1] + r;
        return r;
    }
    spacesAndCommentsFromStart(e) {
        let n,
            r = "";
        for (
            ;
            e.length && ((n = e[0][0]), !(n !== "space" && n !== "comment"));

        )
            r += e.shift()[1];
        return r;
    }
    spacesFromEnd(e) {
        let n,
            r = "";
        for (; e.length && ((n = e[e.length - 1][0]), n === "space"); )
            r = e.pop()[1] + r;
        return r;
    }
    stringFrom(e, n) {
        let r = "";
        for (let l = n; l < e.length; l++) r += e[l][1];
        return e.splice(n, e.length - n), r;
    }
    unclosedBlock() {
        let e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column);
    }
    unclosedBracket(e) {
        throw this.input.error(
            "Unclosed bracket",
            { offset: e[2] },
            { offset: e[2] + 1 }
        );
    }
    unexpectedClose(e) {
        throw this.input.error(
            "Unexpected }",
            { offset: e[2] },
            { offset: e[2] + 1 }
        );
    }
    unknownWord(e) {
        throw this.input.error(
            "Unknown word",
            { offset: e[0][2] },
            { offset: e[0][2] + e[0][1].length }
        );
    }
    unnamedAtrule(e, n) {
        throw this.input.error(
            "At-rule without name",
            { offset: n[2] },
            { offset: n[2] + n[1].length }
        );
    }
};
var nm = tm;
let rm = Ut,
    lm = nm,
    im = ni;
function Al(t, e) {
    let n = new im(t, e),
        r = new lm(n);
    try {
        r.parse();
    } catch (l) {
        throw l;
    }
    return r.root;
}
var Gs = Al;
Al.default = Al;
rm.registerParse(Al);
let { isClean: Be, my: om } = vr,
    sm = Xf,
    um = bl,
    am = Ut,
    cm = Hs,
    ka = Qs,
    fm = Gs,
    dm = wr;
const pm = {
        atrule: "AtRule",
        comment: "Comment",
        decl: "Declaration",
        document: "Document",
        root: "Root",
        rule: "Rule",
    },
    hm = {
        AtRule: !0,
        AtRuleExit: !0,
        Comment: !0,
        CommentExit: !0,
        Declaration: !0,
        DeclarationExit: !0,
        Document: !0,
        DocumentExit: !0,
        Once: !0,
        OnceExit: !0,
        postcssPlugin: !0,
        prepare: !0,
        Root: !0,
        RootExit: !0,
        Rule: !0,
        RuleExit: !0,
    },
    mm = { Once: !0, postcssPlugin: !0, prepare: !0 },
    mn = 0;
function zn(t) {
    return typeof t == "object" && typeof t.then == "function";
}
function hd(t) {
    let e = !1,
        n = pm[t.type];
    return (
        t.type === "decl"
            ? (e = t.prop.toLowerCase())
            : t.type === "atrule" && (e = t.name.toLowerCase()),
        e && t.append
            ? [n, n + "-" + e, mn, n + "Exit", n + "Exit-" + e]
            : e
            ? [n, n + "-" + e, n + "Exit", n + "Exit-" + e]
            : t.append
            ? [n, mn, n + "Exit"]
            : [n, n + "Exit"]
    );
}
function Ca(t) {
    let e;
    return (
        t.type === "document"
            ? (e = ["Document", mn, "DocumentExit"])
            : t.type === "root"
            ? (e = ["Root", mn, "RootExit"])
            : (e = hd(t)),
        {
            eventIndex: 0,
            events: e,
            iterator: 0,
            node: t,
            visitorIndex: 0,
            visitors: [],
        }
    );
}
function Vo(t) {
    return (t[Be] = !1), t.nodes && t.nodes.forEach((e) => Vo(e)), t;
}
let Ho = {},
    yn = class md {
        constructor(e, n, r) {
            (this.stringified = !1), (this.processed = !1);
            let l;
            if (
                typeof n == "object" &&
                n !== null &&
                (n.type === "root" || n.type === "document")
            )
                l = Vo(n);
            else if (n instanceof md || n instanceof ka)
                (l = Vo(n.root)),
                    n.map &&
                        (typeof r.map > "u" && (r.map = {}),
                        r.map.inline || (r.map.inline = !1),
                        (r.map.prev = n.map));
            else {
                let i = fm;
                r.syntax && (i = r.syntax.parse),
                    r.parser && (i = r.parser),
                    i.parse && (i = i.parse);
                try {
                    l = i(n, r);
                } catch (o) {
                    (this.processed = !0), (this.error = o);
                }
                l && !l[om] && am.rebuild(l);
            }
            (this.result = new ka(e, l, r)),
                (this.helpers = { ...Ho, postcss: Ho, result: this.result }),
                (this.plugins = this.processor.plugins.map((i) =>
                    typeof i == "object" && i.prepare
                        ? { ...i, ...i.prepare(this.result) }
                        : i
                ));
        }
        async() {
            return this.error
                ? Promise.reject(this.error)
                : this.processed
                ? Promise.resolve(this.result)
                : (this.processing || (this.processing = this.runAsync()),
                  this.processing);
        }
        catch(e) {
            return this.async().catch(e);
        }
        finally(e) {
            return this.async().then(e, e);
        }
        getAsyncError() {
            throw new Error(
                "Use process(css).then(cb) to work with async plugins"
            );
        }
        handleError(e, n) {
            let r = this.result.lastPlugin;
            try {
                n && n.addToError(e),
                    (this.error = e),
                    e.name === "CssSyntaxError" && !e.plugin
                        ? ((e.plugin = r.postcssPlugin), e.setMessage())
                        : r.postcssVersion;
            } catch (l) {
                console && console.error && console.error(l);
            }
            return e;
        }
        prepareVisitors() {
            this.listeners = {};
            let e = (n, r, l) => {
                this.listeners[r] || (this.listeners[r] = []),
                    this.listeners[r].push([n, l]);
            };
            for (let n of this.plugins)
                if (typeof n == "object")
                    for (let r in n) {
                        if (!hm[r] && /^[A-Z]/.test(r))
                            throw new Error(
                                `Unknown event ${r} in ${n.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
                            );
                        if (!mm[r])
                            if (typeof n[r] == "object")
                                for (let l in n[r])
                                    l === "*"
                                        ? e(n, r, n[r][l])
                                        : e(
                                              n,
                                              r + "-" + l.toLowerCase(),
                                              n[r][l]
                                          );
                            else typeof n[r] == "function" && e(n, r, n[r]);
                    }
            this.hasListener = Object.keys(this.listeners).length > 0;
        }
        async runAsync() {
            this.plugin = 0;
            for (let e = 0; e < this.plugins.length; e++) {
                let n = this.plugins[e],
                    r = this.runOnRoot(n);
                if (zn(r))
                    try {
                        await r;
                    } catch (l) {
                        throw this.handleError(l);
                    }
            }
            if ((this.prepareVisitors(), this.hasListener)) {
                let e = this.result.root;
                for (; !e[Be]; ) {
                    e[Be] = !0;
                    let n = [Ca(e)];
                    for (; n.length > 0; ) {
                        let r = this.visitTick(n);
                        if (zn(r))
                            try {
                                await r;
                            } catch (l) {
                                let i = n[n.length - 1].node;
                                throw this.handleError(l, i);
                            }
                    }
                }
                if (this.listeners.OnceExit)
                    for (let [n, r] of this.listeners.OnceExit) {
                        this.result.lastPlugin = n;
                        try {
                            if (e.type === "document") {
                                let l = e.nodes.map((i) => r(i, this.helpers));
                                await Promise.all(l);
                            } else await r(e, this.helpers);
                        } catch (l) {
                            throw this.handleError(l);
                        }
                    }
            }
            return (this.processed = !0), this.stringify();
        }
        runOnRoot(e) {
            this.result.lastPlugin = e;
            try {
                if (typeof e == "object" && e.Once) {
                    if (this.result.root.type === "document") {
                        let n = this.result.root.nodes.map((r) =>
                            e.Once(r, this.helpers)
                        );
                        return zn(n[0]) ? Promise.all(n) : n;
                    }
                    return e.Once(this.result.root, this.helpers);
                } else if (typeof e == "function")
                    return e(this.result.root, this.result);
            } catch (n) {
                throw this.handleError(n);
            }
        }
        stringify() {
            if (this.error) throw this.error;
            if (this.stringified) return this.result;
            (this.stringified = !0), this.sync();
            let e = this.result.opts,
                n = um;
            e.syntax && (n = e.syntax.stringify),
                e.stringifier && (n = e.stringifier),
                n.stringify && (n = n.stringify);
            let l = new sm(n, this.result.root, this.result.opts).generate();
            return (
                (this.result.css = l[0]), (this.result.map = l[1]), this.result
            );
        }
        sync() {
            if (this.error) throw this.error;
            if (this.processed) return this.result;
            if (((this.processed = !0), this.processing))
                throw this.getAsyncError();
            for (let e of this.plugins) {
                let n = this.runOnRoot(e);
                if (zn(n)) throw this.getAsyncError();
            }
            if ((this.prepareVisitors(), this.hasListener)) {
                let e = this.result.root;
                for (; !e[Be]; ) (e[Be] = !0), this.walkSync(e);
                if (this.listeners.OnceExit)
                    if (e.type === "document")
                        for (let n of e.nodes)
                            this.visitSync(this.listeners.OnceExit, n);
                    else this.visitSync(this.listeners.OnceExit, e);
            }
            return this.result;
        }
        then(e, n) {
            return this.async().then(e, n);
        }
        toString() {
            return this.css;
        }
        visitSync(e, n) {
            for (let [r, l] of e) {
                this.result.lastPlugin = r;
                let i;
                try {
                    i = l(n, this.helpers);
                } catch (o) {
                    throw this.handleError(o, n.proxyOf);
                }
                if (n.type !== "root" && n.type !== "document" && !n.parent)
                    return !0;
                if (zn(i)) throw this.getAsyncError();
            }
        }
        visitTick(e) {
            let n = e[e.length - 1],
                { node: r, visitors: l } = n;
            if (r.type !== "root" && r.type !== "document" && !r.parent) {
                e.pop();
                return;
            }
            if (l.length > 0 && n.visitorIndex < l.length) {
                let [o, s] = l[n.visitorIndex];
                (n.visitorIndex += 1),
                    n.visitorIndex === l.length &&
                        ((n.visitors = []), (n.visitorIndex = 0)),
                    (this.result.lastPlugin = o);
                try {
                    return s(r.toProxy(), this.helpers);
                } catch (u) {
                    throw this.handleError(u, r);
                }
            }
            if (n.iterator !== 0) {
                let o = n.iterator,
                    s;
                for (; (s = r.nodes[r.indexes[o]]); )
                    if (((r.indexes[o] += 1), !s[Be])) {
                        (s[Be] = !0), e.push(Ca(s));
                        return;
                    }
                (n.iterator = 0), delete r.indexes[o];
            }
            let i = n.events;
            for (; n.eventIndex < i.length; ) {
                let o = i[n.eventIndex];
                if (((n.eventIndex += 1), o === mn)) {
                    r.nodes &&
                        r.nodes.length &&
                        ((r[Be] = !0), (n.iterator = r.getIterator()));
                    return;
                } else if (this.listeners[o]) {
                    n.visitors = this.listeners[o];
                    return;
                }
            }
            e.pop();
        }
        walkSync(e) {
            e[Be] = !0;
            let n = hd(e);
            for (let r of n)
                if (r === mn)
                    e.nodes &&
                        e.each((l) => {
                            l[Be] || this.walkSync(l);
                        });
                else {
                    let l = this.listeners[r];
                    if (l && this.visitSync(l, e.toProxy())) return;
                }
        }
        warnings() {
            return this.sync().warnings();
        }
        get content() {
            return this.stringify().content;
        }
        get css() {
            return this.stringify().css;
        }
        get map() {
            return this.stringify().map;
        }
        get messages() {
            return this.sync().messages;
        }
        get opts() {
            return this.result.opts;
        }
        get processor() {
            return this.result.processor;
        }
        get root() {
            return this.sync().root;
        }
        get [Symbol.toStringTag]() {
            return "LazyResult";
        }
    };
yn.registerPostcss = (t) => {
    Ho = t;
};
var yd = yn;
yn.default = yn;
dm.registerLazyResult(yn);
cm.registerLazyResult(yn);
let ym = Xf,
    gm = bl,
    vm = Gs;
const wm = Qs;
let Qo = class {
    constructor(e, n, r) {
        (n = n.toString()),
            (this.stringified = !1),
            (this._processor = e),
            (this._css = n),
            (this._opts = r),
            (this._map = void 0);
        let l,
            i = gm;
        (this.result = new wm(this._processor, l, this._opts)),
            (this.result.css = n);
        let o = this;
        Object.defineProperty(this.result, "root", {
            get() {
                return o.root;
            },
        });
        let s = new ym(i, l, this._opts, n);
        if (s.isMap()) {
            let [u, a] = s.generate();
            u && (this.result.css = u), a && (this.result.map = a);
        }
    }
    async() {
        return this.error
            ? Promise.reject(this.error)
            : Promise.resolve(this.result);
    }
    catch(e) {
        return this.async().catch(e);
    }
    finally(e) {
        return this.async().then(e, e);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
    then(e, n) {
        return this.async().then(e, n);
    }
    toString() {
        return this._css;
    }
    warnings() {
        return [];
    }
    get content() {
        return this.result.css;
    }
    get css() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get messages() {
        return [];
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        if (this._root) return this._root;
        let e,
            n = vm;
        try {
            e = n(this._css, this._opts);
        } catch (r) {
            this.error = r;
        }
        if (this.error) throw this.error;
        return (this._root = e), e;
    }
    get [Symbol.toStringTag]() {
        return "NoWorkResult";
    }
};
var xm = Qo;
Qo.default = Qo;
let Sm = xm,
    km = yd,
    Cm = Hs,
    Em = wr,
    cr = class {
        constructor(e = []) {
            (this.version = "8.4.31"), (this.plugins = this.normalize(e));
        }
        normalize(e) {
            let n = [];
            for (let r of e)
                if (
                    (r.postcss === !0
                        ? (r = r())
                        : r.postcss && (r = r.postcss),
                    typeof r == "object" && Array.isArray(r.plugins))
                )
                    n = n.concat(r.plugins);
                else if (typeof r == "object" && r.postcssPlugin) n.push(r);
                else if (typeof r == "function") n.push(r);
                else if (!(typeof r == "object" && (r.parse || r.stringify)))
                    throw new Error(r + " is not a PostCSS plugin");
            return n;
        }
        process(e, n = {}) {
            return this.plugins.length === 0 &&
                typeof n.parser > "u" &&
                typeof n.stringifier > "u" &&
                typeof n.syntax > "u"
                ? new Sm(this, e, n)
                : new km(this, e, n);
        }
        use(e) {
            return (
                (this.plugins = this.plugins.concat(this.normalize([e]))), this
            );
        }
    };
var _m = cr;
cr.default = cr;
Em.registerProcessor(cr);
Cm.registerProcessor(cr);
let Pm = ti,
    Nm = Hf,
    Om = ri,
    Rm = Ks,
    zm = ni,
    jm = wr,
    Lm = Ys;
function fr(t, e) {
    if (Array.isArray(t)) return t.map((l) => fr(l));
    let { inputs: n, ...r } = t;
    if (n) {
        e = [];
        for (let l of n) {
            let i = { ...l, __proto__: zm.prototype };
            i.map && (i.map = { ...i.map, __proto__: Nm.prototype }), e.push(i);
        }
    }
    if ((r.nodes && (r.nodes = t.nodes.map((l) => fr(l, e))), r.source)) {
        let { inputId: l, ...i } = r.source;
        (r.source = i), l != null && (r.source.input = e[l]);
    }
    if (r.type === "root") return new jm(r);
    if (r.type === "decl") return new Pm(r);
    if (r.type === "rule") return new Lm(r);
    if (r.type === "comment") return new Om(r);
    if (r.type === "atrule") return new Rm(r);
    throw new Error("Unknown node type: " + t.type);
}
var Tm = fr;
fr.default = fr;
let Mm = Bs,
    gd = ti,
    Dm = yd,
    Am = Ut,
    Xs = _m,
    Im = bl,
    $m = Tm,
    vd = Hs,
    Fm = sd,
    wd = ri,
    xd = Ks,
    Um = Qs,
    Bm = ni,
    Wm = Gs,
    Vm = dd,
    Sd = Ys,
    kd = wr,
    Hm = ei;
function A(...t) {
    return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new Xs(t);
}
A.plugin = function (e, n) {
    let r = !1;
    function l(...o) {
        console &&
            console.warn &&
            !r &&
            ((r = !0),
            console.warn(
                e +
                    `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
            ),
            {}.LANG &&
                {}.LANG.startsWith("cn") &&
                console.warn(
                    e +
                        `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
                ));
        let s = n(...o);
        return (s.postcssPlugin = e), (s.postcssVersion = new Xs().version), s;
    }
    let i;
    return (
        Object.defineProperty(l, "postcss", {
            get() {
                return i || (i = l()), i;
            },
        }),
        (l.process = function (o, s, u) {
            return A([l(u)]).process(o, s);
        }),
        l
    );
};
A.stringify = Im;
A.parse = Wm;
A.fromJSON = $m;
A.list = Vm;
A.comment = (t) => new wd(t);
A.atRule = (t) => new xd(t);
A.decl = (t) => new gd(t);
A.rule = (t) => new Sd(t);
A.root = (t) => new kd(t);
A.document = (t) => new vd(t);
A.CssSyntaxError = Mm;
A.Declaration = gd;
A.Container = Am;
A.Processor = Xs;
A.Document = vd;
A.Comment = wd;
A.Warning = Fm;
A.AtRule = xd;
A.Result = Um;
A.Input = Bm;
A.Rule = Sd;
A.Root = kd;
A.Node = Hm;
Dm.registerPostcss(A);
var Qm = A;
A.default = A;
const W = Ea(Qm);
W.stringify;
W.fromJSON;
W.plugin;
W.parse;
W.list;
W.document;
W.comment;
W.atRule;
W.rule;
W.decl;
W.root;
W.CssSyntaxError;
W.Declaration;
W.Container;
W.Processor;
W.Document;
W.Comment;
W.Warning;
W.AtRule;
W.Result;
W.Input;
W.Rule;
W.Root;
W.Node;
const Km = (t) => {
        const e = [
            ["#home", "Home"],
            ["#about", "About"],
            ["#skill", "My Skill"],
            ["#biodata", "Biodata"],
        ];
        return y.jsx("nav", {
            id: "nav-menu",
            className: `${
                t.isOpen ? "" : "hidden"
            } absolute bg-white shadow-lg py-5 max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none`,
            children: y.jsx("ul", {
                className: "block lg:flex",
                children: e.map((n, r) =>
                    y.jsx(
                        "li",
                        {
                            className: "group",
                            children: y.jsx("a", {
                                href: n[0],
                                className:
                                    "text-base text-slate-700 py-2 mx-8 flex",
                                children: n[1],
                            }),
                        },
                        r
                    )
                ),
            }),
        });
    },
    Ym = () => {
        const [t, e] = pr.useState(!1);
        return y.jsx("header", {
            className:
                "bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed",
            children: y.jsx("div", {
                className: "container relative",
                children: y.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                        y.jsx("div", {
                            className: "px-4 items-center",
                            children: y.jsx("a", {
                                href: "#home",
                                className:
                                    "font-bold text-lg text-sky-500 block py-6",
                                children: "Nurfian Qodar",
                            }),
                        }),
                        y.jsxs("div", {
                            className: "flex items-center px-4",
                            children: [
                                y.jsxs("button", {
                                    type: "button",
                                    className: `${
                                        t ? "btn-active" : ""
                                    } block absolute right-4 lg:hidden`,
                                    onClick: function () {
                                        e(!t);
                                    },
                                    children: [
                                        y.jsx("span", {
                                            className:
                                                "menu-line origin-top-left",
                                        }),
                                        y.jsx("span", {
                                            className: "menu-line",
                                        }),
                                        y.jsx("span", {
                                            className:
                                                "menu-line origin-bottom-left",
                                        }),
                                    ],
                                }),
                                y.jsx(Km, { isOpen: t }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    Gm = () =>
        y.jsx("section", {
            id: "skill",
            class: "bg-slate-200 pt-36 pb-16",
            children: y.jsx("div", {
                class: "w-full px-4",
                children: y.jsxs("div", {
                    class: "max-w-xl mx-auto text-center mb-16",
                    children: [
                        y.jsx("h1", {
                            class: "font-bold text-2xl text-sky-500",
                            children: "My Programming Skill",
                        }),
                        y.jsx("h2", {
                            class: "text-xl font-light text-slate-500 mb-5",
                            children: "Web Development",
                        }),
                        y.jsxs("p", {
                            class: "font-semibold text-base text-slate-500 mb-5",
                            children: [
                                "Farmer? Programmer? ",
                                y.jsx("br", {}),
                                "Nothing is imposible. ",
                                y.jsx("br", {}),
                                "Break your limit.",
                            ],
                        }),
                        y.jsxs("div", {
                            class: "flex flex-wrap items-center m-auto justify-center",
                            children: [
                                y.jsx("a", {
                                    href: "#",
                                    class: "mx-3 my-3 px-5 py-5 bg-white rounded-full",
                                    children: y.jsxs("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        class: "fill-[#F7DF1E] hover:scale-[130%] transition duration-150",
                                        children: [
                                            y.jsx("title", {
                                                children: "Vanilla JavaScript",
                                            }),
                                            y.jsx("path", {
                                                d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
                                            }),
                                        ],
                                    }),
                                }),
                                y.jsx("a", {
                                    href: "#",
                                    class: "mx-3 my-3 px-5 py-5 bg-white rounded-full",
                                    children: y.jsxs("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        class: "fill-[#3776AB] hover:scale-[130%] transition duration-150",
                                        children: [
                                            y.jsx("title", {
                                                children: "Python",
                                            }),
                                            y.jsx("path", {
                                                d: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",
                                            }),
                                        ],
                                    }),
                                }),
                                y.jsx("a", {
                                    href: "#",
                                    class: "mx-3 my-3 px-5 py-5 bg-white rounded-full",
                                    children: y.jsxs("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        class: "fill-[#092E20] hover:scale-[130%] transition duration-150",
                                        children: [
                                            y.jsx("title", {
                                                children: "Django Farmework",
                                            }),
                                            y.jsx("path", {
                                                d: "M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z",
                                            }),
                                        ],
                                    }),
                                }),
                                y.jsx("a", {
                                    href: "#",
                                    class: "mx-3 my-3 px-5 py-5 bg-white rounded-full",
                                    children: y.jsxs("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        class: "fill-[#E34F26] hover:scale-[130%] transition duration-150",
                                        children: [
                                            y.jsx("title", {
                                                children: "HTML5",
                                            }),
                                            y.jsx("path", {
                                                d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
                                            }),
                                        ],
                                    }),
                                }),
                                y.jsx("a", {
                                    href: "#",
                                    class: "mx-3 my-3 px-5 py-5 bg-white rounded-full",
                                    children: y.jsxs("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        class: "fill-[#1572B6] hover:scale-[130%] transition duration-150",
                                        children: [
                                            y.jsx("title", {
                                                children: "CSS3",
                                            }),
                                            y.jsx("path", {
                                                d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
                                            }),
                                        ],
                                    }),
                                }),
                                y.jsx("a", {
                                    href: "#",
                                    class: "mx-3 my-3 px-5 py-5 bg-white rounded-full",
                                    children: y.jsxs("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        class: "fill-[#06B6D4] hover:scale-[130%] transition duration-150",
                                        children: [
                                            y.jsx("title", {
                                                children: "Tailwind CSS",
                                            }),
                                            y.jsx("path", {
                                                d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
                                            }),
                                        ],
                                    }),
                                }),
                                y.jsx("a", {
                                    href: "#",
                                    class: "mx-3 my-3 px-5 py-5 bg-white rounded-full",
                                    children: y.jsxs("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "40",
                                        class: "fill-[#7952B3] hover:scale-[130%] transition duration-150",
                                        children: [
                                            y.jsx("title", {
                                                children: "Bootstrap",
                                            }),
                                            y.jsx("path", {
                                                d: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    Xm = () =>
        y.jsx("section", {
            id: "biodata",
            class: "w-full pt-36 pb-24",
            children: y.jsxs("div", {
                class: "container",
                children: [
                    y.jsx("h1", {
                        class: "text-center text-3xl font-bold text-slate-500 mx-10",
                        children: "My Biodata",
                    }),
                    y.jsxs("div", {
                        class: "my-6 mx-5",
                        children: [
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "Full Name",
                                    }),
                                    y.jsx("h1", {
                                        class: "font-semibold text-2xl text-sky-700",
                                        children: "Nurfian Qodar",
                                    }),
                                ],
                            }),
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "Nickname",
                                    }),
                                    y.jsx("h1", {
                                        class: "font-semibold text-2xl text-sky-700",
                                        children: "Fian",
                                    }),
                                ],
                            }),
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "Place of Birth",
                                    }),
                                    y.jsx("h1", {
                                        class: "font-semibold text-2xl text-sky-700",
                                        children: "Ciamis - West Java",
                                    }),
                                ],
                            }),
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "Date of Birth",
                                    }),
                                    y.jsx("h1", {
                                        class: "font-semibold text-2xl text-sky-700",
                                        children: "27 November 2003",
                                    }),
                                ],
                            }),
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "Addres",
                                    }),
                                    y.jsx("h1", {
                                        class: "font-semibold text-2xl text-sky-700",
                                        children:
                                            "Rancah village, Rancah sub-district, Ciamis district - West Java",
                                    }),
                                ],
                            }),
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "University",
                                    }),
                                    y.jsx("h1", {
                                        class: "font-semibold text-2xl text-sky-700",
                                        children: "Siliwangi University",
                                    }),
                                ],
                            }),
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "Study Program",
                                    }),
                                    y.jsx("h1", {
                                        class: "font-semibold text-2xl text-sky-700",
                                        children:
                                            "Agrotechnology, Faculty of Agriculture",
                                    }),
                                ],
                            }),
                            y.jsxs("div", {
                                class: "my-4",
                                children: [
                                    y.jsx("h2", {
                                        class: "font-light text-lg text-slate-500",
                                        children: "Educational Background",
                                    }),
                                    y.jsxs("ul", {
                                        class: "list-disc",
                                        children: [
                                            y.jsx("li", {
                                                children: y.jsx("h1", {
                                                    class: "font-semibold text-2xl text-sky-700",
                                                    children:
                                                        "SDN 4 Rancah (2011)",
                                                }),
                                            }),
                                            y.jsx("li", {
                                                children: y.jsx("h1", {
                                                    class: "font-semibold text-2xl text-sky-700",
                                                    children:
                                                        "SMPN 2 Rancah (2016 - 2019)",
                                                }),
                                            }),
                                            y.jsx("li", {
                                                children: y.jsx("h1", {
                                                    class: "font-semibold text-2xl text-sky-700",
                                                    children:
                                                        "MAN 6 Ciamis (2019 - 2022)",
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    Jm = () =>
        y.jsx("footer", {
            class: "bg-slate-700 pt-10 pb-2 w-full",
            children: y.jsxs("h2", {
                class: "ml-5 my-4 text-white text-sm font-light",
                children: [
                    "©2023 | Created by",
                    y.jsx("a", {
                        href: "#",
                        class: "font-semibold text-sky-500 hover:text-sky-200",
                        children: "Nurfian Qodar",
                    }),
                ],
            }),
        });
function Zm() {
    return y.jsxs(y.Fragment, {
        children: [
            y.jsx(Ym, {}),
            y.jsx(l1, {}),
            y.jsx(bh, {}),
            y.jsx(Gm, {}),
            y.jsx(Xm, {}),
            y.jsx(Jm, {}),
        ],
    });
}
Ii.createRoot(document.getElementById("root")).render(
    y.jsx(Ud.StrictMode, { children: y.jsx(Zm, {}) })
);
