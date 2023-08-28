(window.webpackJsonp = window.webpackJsonp || []).push([["retail/recommendPage"], {
    "+QRC": function(e, t, A) {
        "use strict";
        var n = A("E9nw")
          , r = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        e.exports = function(e, t) {
            var A, i, s, o, a, l, c = !1;
            t || (t = {}),
            A = t.debug || !1;
            try {
                if (s = n(),
                o = document.createRange(),
                a = document.getSelection(),
                (l = document.createElement("span")).textContent = e,
                l.style.all = "unset",
                l.style.position = "fixed",
                l.style.top = 0,
                l.style.clip = "rect(0, 0, 0, 0)",
                l.style.whiteSpace = "pre",
                l.style.webkitUserSelect = "text",
                l.style.MozUserSelect = "text",
                l.style.msUserSelect = "text",
                l.style.userSelect = "text",
                l.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(),
                    t.format)
                        if (n.preventDefault(),
                        void 0 === n.clipboardData) {
                            A && console.warn("unable to use e.clipboardData"),
                            A && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var i = r[t.format] || r.default;
                            window.clipboardData.setData(i, e)
                        } else
                            n.clipboardData.clearData(),
                            n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(),
                    t.onCopy(n.clipboardData))
                }
                )),
                document.body.appendChild(l),
                o.selectNodeContents(l),
                a.addRange(o),
                !document.execCommand("copy"))
                    throw new Error("copy command was unsuccessful");
                c = !0
            } catch (n) {
                A && console.error("unable to copy using execCommand: ", n),
                A && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(t.format || "text", e),
                    t.onCopy && t.onCopy(window.clipboardData),
                    c = !0
                } catch (n) {
                    A && console.error("unable to copy using clipboardData: ", n),
                    A && console.error("falling back to prompt"),
                    i = function(e) {
                        var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                        return e.replace(/#{\s*key\s*}/g, t)
                    }("message"in t ? t.message : "Copy to clipboard: #{key}, Enter"),
                    window.prompt(i, e)
                }
            } finally {
                a && ("function" == typeof a.removeRange ? a.removeRange(o) : a.removeAllRanges()),
                l && document.body.removeChild(l),
                s()
            }
            return c
        }
    },
    "+n12": function(e, t, A) {
        "use strict";
        A.d(t, "e", (function() {
            return u
        }
        )),
        A.d(t, "g", (function() {
            return d
        }
        )),
        A.d(t, "a", (function() {
            return h
        }
        )),
        A.d(t, "b", (function() {
            return f
        }
        )),
        A.d(t, "c", (function() {
            return g
        }
        )),
        A.d(t, "d", (function() {
            return B
        }
        )),
        A.d(t, "f", (function() {
            return w
        }
        ));
        A("VRzm"),
        A("Btvt"),
        A("pIFo"),
        A("OG14"),
        A("SRfc"),
        A("Oyvg");
        var n = A("Jrpl")
          , r = A.n(n)
          , i = (A("gUK9"),
        A("yZVg"))
          , s = A.n(i)
          , o = A("rULw")
          , a = A("NYxa")
          , l = A("Jn7e")
          , c = {
            lat: "",
            lng: "",
            city: "",
            addr: ""
        };
        function u(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
              , A = window.location.search.substr(1).match(t);
            return null != A ? decodeURI(A[2]) : null
        }
        function d(e) {
            return "true" === e || "false" !== e && null
        }
        function h(e, t) {
            if (null !== u(e)) {
                var A = window.location.search
                  , n = new RegExp("(.+[&|?]".concat(e, "=)([^&?=#]*)(.*)"),"ig")
                  , r = A.replace(n, (function(e, A, n, r) {
                    return A + t + r
                }
                ));
                window.history.pushState({}, "", "".concat(window.location.pathname).concat(r))
            }
        }
        function p(e) {
            if (!window.__tmap_loading) {
                window.__tmap_loading = !0,
                console.log("__te", window.__tmap_loading);
                var t = document.createElement("script");
                t.src = "https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js",
                t.crossOrigin = "anonymous",
                document.body.appendChild(t),
                t.onreadystatechange = function() {
                    if (window.__tmap_loading = !1,
                    (!t.readyState || "loaded" === t.readyState || "complete" === t.readyState) && (t.onload = null,
                    t.onreadystatechange = null,
                    e)) {
                        var A = new qq.maps.Geolocation("DZYBZ-73WWI-FG6GZ-5JRFR-PNVIE-4OFUL","waimaiapp");
                        e(A)
                    }
                }
                ,
                t.onload = t.onreadystatechange
            }
        }
        function f(e) {
            p(e)
        }
        function B() {
            var e = this;
            return c.lat ? Promise.resolve(c) : new Promise((function(t) {
                p((function(A) {
                    try {
                        A.getLocation(function(e) {
                            console.log("定位成功, 经纬度为：new", JSON.stringify(e));
                            var A = e.lng
                              , n = e.lat
                              , r = e.city
                              , i = e.addr;
                            c.lat = n,
                            c.lng = A,
                            c.city = r,
                            c.addr = i,
                            t(c)
                        }
                        .bind(e), function() {
                            console.log("腾讯定位失败"),
                            s.a.show("腾讯定位失败"),
                            t({
                                lat: "",
                                lng: "",
                                city: l.a
                            })
                        }
                        .bind(e), {
                            timeout: 3e3
                        })
                    } catch (e) {
                        console.log("定位异常:news", e),
                        t(c)
                    }
                }
                ))
            }
            ))
        }
        var m = {
            prod: "h5.waimai.meituan.com",
            st: "h5.waimai.st.meituan.com",
            test: "h5.waimai.test.sankuai.com"
        };
        function w(e) {
            var t = e.lat
              , A = void 0 === t ? "" : t
              , n = e.lng
              , r = void 0 === n ? "" : n
              , i = e.tab
              , s = void 0 === i ? "" : i
              , o = window.location.href;
            s && (o = "".concat(o, "&tab=").concat(s));
            var a, l, c = "//".concat(m[(a = window.location.host,
            l = "prod",
            a.indexOf(".dev") > -1 || a.indexOf(".test") > -1 ? l = "test" : a.indexOf(".st") > -1 && (l = "st"),
            l)], "/waimai/mindex/poipicker?lat=").concat(A, "&lng=").concat(r, "&goback=").concat(encodeURIComponent(o), "&source=external");
            window.location.href = c
        }
    },
    "1zE1": function(e, t, A) {
        var n = A("mYya")
          , r = A("dDqg")
          , i = A("012a")
          , s = A("f+Jo");
        e.exports = function(e) {
            return n(e) || r(e) || i(e) || s()
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    24: function(e, t, A) {
        e.exports = A("8ItT")
    },
    "2DWn": function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    },
    "3uu7": function(e, t, A) {
        "use strict";
        var n = A("HsOD")
          , r = A.n(n)
          , i = A("pj57")
          , s = A.n(i);
        A("Wr5T");
        IntersectionObserver.prototype.POLL_INTERVAL = 200;
        var o = function() {
            function e(t) {
                r()(this, e),
                this._observer = null,
                this.exposureList = {},
                this.hasReported = {},
                this.init(t)
            }
            return s()(e, [{
                key: "init",
                value: function(e) {
                    var t = this;
                    this._observer = new IntersectionObserver((function(A, n) {
                        A.forEach((function(A) {
                            var n = A.target.attributes["data-fxId"].value || "";
                            A.isIntersecting && !t.hasReported[n] && (e && e.reportView(A.target.attributes["data-infos"].value || ""),
                            t.exposureList[n] && t.exposureList[n](),
                            t.hasReported[n] = !0)
                        }
                        ))
                    }
                    ),{
                        root: document.body,
                        rootMargin: "0px",
                        threshold: 0
                    })
                }
            }, {
                key: "add",
                value: function(e) {
                    this._observer && this._observer.observe(e)
                }
            }, {
                key: "remove",
                value: function() {
                    this._observer.disconnect()
                }
            }]),
            e
        }();
        t.a = o
    },
    "4vFl": function(e, t, A) {},
    "7W6E": function(e, t, A) {
        var n = A("DdPZ")
          , r = A("fBKz");
        e.exports = function(e) {
            return function(t, A) {
                var i, s, o = String(r(t)), a = n(A), l = o.length;
                return a < 0 || a >= l ? e ? "" : void 0 : (i = o.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === l || (s = o.charCodeAt(a + 1)) < 56320 || s > 57343 ? e ? o.charAt(a) : i : e ? o.slice(a, a + 2) : s - 56320 + (i - 55296 << 10) + 65536
            }
        }
    },
    "7eRh": function(e, t, A) {
        "use strict";
        var n = A("js6a")
          , r = RegExp.prototype.exec;
        e.exports = function(e, t) {
            var A = e.exec;
            if ("function" == typeof A) {
                var i = A.call(e, t);
                if ("object" != typeof i)
                    throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== n(e))
                throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(e, t)
        }
    },
    "8ItT": function(t, A, n) {
        "use strict";
        n.r(A);
        var r = n("q1tI")
          , i = n.n(r)
          , s = n("i8i4")
          , o = n.n(s)
          , a = (n("IsG4"),
        n("ga4j"))
          , l = (n("jm62"),
        n("ioFf"),
        n("I5cv"),
        n("ls82"),
        n("ROkk"))
          , c = n.n(l)
          , u = n("1zE1")
          , d = n.n(u)
          , h = (n("KKXr"),
        n("91GP"),
        n("rGqo"),
        n("yt8O"),
        n("RW0V"),
        n("0l/t"),
        n("bWfx"),
        n("I78e"),
        n("VRzm"),
        n("Btvt"),
        n("CX2u"),
        n("HsOD"))
          , p = n.n(h)
          , f = n("pj57")
          , g = n.n(f)
          , B = n("a/cl")
          , m = n.n(B)
          , w = n("Pkpw")
          , v = n.n(w)
          , E = n("oEga")
          , C = n.n(E)
          , Q = n("9WXe")
          , y = n.n(Q)
          , b = n("vR76")
          , U = n.n(b)
          , F = n("O2jJ")
          , T = n.n(F)
          , H = n("Jrpl")
          , S = n.n(H)
          , N = n("aWWK")
          , x = n("Wu5E")
          , I = n.n(x)
          , O = n("yZVg")
          , k = n.n(O)
          , M = n("6wY4")
          , P = n.n(M)
          , K = n("U4Qu")
          , L = n("YXqI")
          , D = n("3uu7")
          , R = n("+n12")
          , _ = n("rULw")
          , z = n("Jn7e")
          , X = n("YOzA")
          , V = n("mzAT")
          , G = n.n(V)
          , Y = n("Grdq")
          , J = n.n(Y);
        n("ie/A");
        function W(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = y()(e);
                if (t) {
                    var r = y()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return C()(this, A)
            }
        }
        var $ = function(e) {
            v()(A, e);
            var t = W(A);
            function A(e) {
                var n;
                return p()(this, A),
                n = t.call(this, e),
                U()(m()(n), "clickTransferLink", (function() {
                    var e = n.props
                      , t = e.pageCid;
                    (0,
                    e.reportMC)("b_waimai_hoztyesf_mc", {
                        source: Object(R.e)("source")
                    }, t),
                    n.props.openTransferPopup(!0)
                }
                )),
                n
            }
            return g()(A, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "render",
                value: function() {
                    return i.a.createElement("div", {
                        className: "search-content"
                    }, i.a.createElement(G.a, {
                        className: "transfer-link",
                        onClick: this.clickTransferLink
                    }, i.a.createElement("img", {
                        src: "//p0.meituan.net/travelcube/01adf57a037a35d6a49717472d259bde1683.png"
                    }), i.a.createElement("span", null, "转换")), i.a.createElement("div", {
                        className: "search-box"
                    }, i.a.createElement(J.a, {
                        label: i.a.createElement("div", {
                            style: {
                                backgroundImage: "url(https://p0.meituan.net/travelcube/d7a3997481f67ef3bc9cecd4b2caf1be1516.png)",
                                backgroundSize: "cover",
                                height: "0.24rem",
                                width: "0.24rem"
                            }
                        }),
                        type: "text",
                        placeholder: "请输入商家或商品名称",
                        onFocus: function() {
                            k.a.show("功能在开发中，敬请期待～")
                        }
                    })))
                }
            }]),
            A
        }(i.a.Component);
        n("GgmE");
        function j(e, t) {
            var A = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                A.push.apply(A, n)
            }
            return A
        }
        function q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var A = null != arguments[t] ? arguments[t] : {};
                t % 2 ? j(Object(A), !0).forEach((function(t) {
                    U()(e, t, A[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : j(Object(A)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                }
                ))
            }
            return e
        }
        function Z(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = y()(e);
                if (t) {
                    var r = y()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return C()(this, A)
            }
        }
        var ee = function(e) {
            v()(A, e);
            var t = Z(A);
            function A(e) {
                var n;
                return p()(this, A),
                n = t.call(this, e),
                U()(m()(n), "splitArrGroup", (function(e, t) {
                    for (var A = 0, n = []; A < e.length; )
                        n.push(e.slice(A, A += t));
                    return n
                }
                )),
                U()(m()(n), "renderCommodityItem", (function(e) {
                    var t = n.props
                      , A = t.openSharePopup
                      , r = t.viewObject
                      , s = e.vpSkuName
                      , o = e.recommendReason
                      , a = e.brandName
                      , l = e.originPrice
                      , c = e.sellPrice
                      , u = e.estimatedCommission
                      , d = e.vpSkuMainPic
                      , h = e.index
                      , p = e.vpSkuCount
                      , f = e.vpSkuId
                      , g = e.configSku;
                    return i.a.createElement("div", {
                        className: "commodity",
                        key: "commodity-item-".concat(f),
                        id: "commodity-item-".concat(f),
                        "data-fxId": "commodity-item-".concat(f),
                        "data-infos": JSON.stringify({
                            cid: r.cid,
                            bid: r.bid,
                            val_lab: {
                                theme_id: z.i.TODAY,
                                index: h + 1,
                                vp_sku_id: f,
                                sku_type: 2 === g ? "activity" : "vpsku"
                            }
                        }),
                        onClick: function() {
                            A({
                                vpSkuId: f,
                                index: h + 1,
                                themeId: z.i.TODAY
                            })
                        }
                    }, i.a.createElement("div", {
                        className: "commodity-poster"
                    }, i.a.createElement("img", {
                        className: "commodity-poster-img",
                        src: d || "//p0.meituan.net/travelcube/2be1b498f4bb776275671198a1d12f1339059.png",
                        alt: ""
                    }), o && i.a.createElement("span", {
                        className: "commodity-poster-reason ".concat(h % 2 ? "commodity-poster-strict" : "")
                    }, o.slice(0, 4), o.length > 4 ? "..." : "")), i.a.createElement("div", {
                        className: "commodity-information"
                    }, i.a.createElement("div", {
                        className: "commodity-top"
                    }, s && i.a.createElement("div", {
                        className: "commodity-title text-cut"
                    }, s, "*", p || 1, "张"), a && i.a.createElement("div", {
                        className: "commodity-brand"
                    }, i.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/f72078060a36b62963b6d55719a120a32708.png",
                        alt: "",
                        className: "commodity-logo"
                    }), i.a.createElement("span", {
                        className: "commodity-name"
                    }, a))), i.a.createElement("div", {
                        className: "commodity-bottom"
                    }, i.a.createElement("div", {
                        className: "commodity-price"
                    }, i.a.createElement("span", {
                        className: "commodity-price-original"
                    }, i.a.createElement("span", {
                        className: "commodity-price-yuan"
                    }, "¥"), c || "??"), i.a.createElement("span", {
                        className: "commodity-price-current"
                    }, "¥", l || "??", " ", i.a.createElement("span", {
                        className: "commodity-price-line"
                    }))), i.a.createElement("div", {
                        className: "commodity-btn"
                    }, "立即购买")))) 
                    //}, "赚￥", u || "??"))))
                }
                )),
                n
            }
            return g()(A, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , A = t.mustShareToday
                      , n = t.jumpCommodityListPage
                      , r = this.splitArrGroup(A, 2);
                    return i.a.createElement("div", {
                        className: "push-content"
                    }, i.a.createElement("img", {
                        src: "//p0.meituan.net/travelcube/c1f47c329121a6f69e30ddf0395196a153110.png",
                        alt: "",
                        className: "push-text"
                    }), i.a.createElement("div", {
                        className: "push-title"
                    }, i.a.createElement("div", {
                        className: "push-title-left"
                    }, i.a.createElement("img", {
                        src: "//p0.meituan.net/travelcube/6dbff42e18084db3a8d70f8ef438d91244643.png",
                        alt: "",
                        className: "push-title-left-logo"
                    }), i.a.createElement("img", {
                        src: "//p0.meituan.net/travelcube/97271e0db3267b4e8e19a340524d5d68178767.png",
                        alt: "",
                        className: "push-title-left-text"
                    })), i.a.createElement("div", {
                        className: "push-title-more",
                        onClick: function() {
                            n({
                                themeId: z.i.TODAY
                            })
                        }
                    }, i.a.createElement("span", null, "更多"), i.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/06e828c0840a9ef5b61a381b7b2e6039607.png",
                        alt: ""
                    }))), i.a.createElement("div", {
                        className: "push-list",
                        style: {
                            paddingRight: 1 === r.length ? "0.12rem" : ""
                        }
                    }, r.map((function(t, A) {
                        return i.a.createElement("div", {
                            className: "push-commodity",
                            style: {
                                width: 1 !== r.length ? "calc(100% - 0.4rem)" : "100%",
                                marginRight: A < r.length - 1 ? "0.2rem" : ""
                            }
                        }, t.map((function(s, o) {
                            return i.a.createElement(i.a.Fragment, null, 1 === o && 1 !== t.length && i.a.createElement("div", {
                                className: "push-commodity-space"
                            }), e.renderCommodityItem(q(q({}, s), {}, {
                                index: o + 2 * A
                            })), 1 !== r.length && 1 === t.length && i.a.createElement("div", {
                                className: "push-commodity-text"
                            }, "更多商品进入", i.a.createElement("span", {
                                className: "push-commodity-rtext",
                                onClick: function() {
                                    n({
                                        themeId: z.i.TODAY
                                    })
                                }
                            }, "榜单"), "查看~"))
                        }
                        )))
                    }
                    )), 1 !== r.length && i.a.createElement("div", {
                        className: "space"
                    })))
                }
            }]),
            A
        }(i.a.Component);
        n("jpH4");
        function te(e, t) {
            var A = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                A.push.apply(A, n)
            }
            return A
        }
        function Ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var A = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(A), !0).forEach((function(t) {
                    U()(e, t, A[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : te(Object(A)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                }
                ))
            }
            return e
        }
        function ne(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = y()(e);
                if (t) {
                    var r = y()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return C()(this, A)
            }
        }
        var re = function(e) {
            v()(A, e);
            var t = ne(A);
            function A(e) {
                return p()(this, A),
                t.call(this, e)
            }
            return g()(A, [{
                key: "renderCommodityItemSamll",
                value: function(e) {
                    var t = this.props
                      , A = t.jumpCommodityListPage
                      , n = t.openSharePopup
                      , r = t.viewObject
                      , s = e.vpSkuName
                      , o = e.estimatedCommission
                      , a = e.vpSkuMainPic
                      , l = e.vpSkuCount
                      , c = e.saleCount
                      , u = e.mediaProCount
                      , d = e.type
                      , h = e.index
                      , p = e.vpSkuId
                      , f = e.configSku;
                    return i.a.createElement("div", {
                        className: "commodity-small",
                        id: "commodity-small-item-".concat(p),
                        "data-fxId": "commodity-small-item-".concat(p),
                        "data-infos": JSON.stringify({
                            cid: r.cid,
                            bid: r.bid,
                            val_lab: {
                                theme_id: 1 === d ? z.i.LOCAL : z.i.MEDIA,
                                index: h + 1,
                                vp_sku_id: p,
                                sku_type: 2 === f ? "activity" : "vpsku"
                            }
                        }),
                        onClick: function(e) {
                            e.stopPropagation(),
                            A({
                                type: d,
                                index: h + 1,
                                vpSkuId: p,
                                themeId: 1 === d ? z.i.LOCAL : z.i.MEDIA,
                                skuType: 2 === f ? "activity" : "vpsku"
                            })
                        }
                    }, i.a.createElement("div", {
                        className: "commodity-small-poster"
                    }, i.a.createElement("img", {
                        src: a || "//p0.meituan.net/travelcube/2be1b498f4bb776275671198a1d12f1339059.png",
                        alt: "",
                        className: "commodity-small-poster-img"
                    }), (1 === d && c || 2 === d && u) && i.a.createElement("span", {
                        className: "commodity-small-poster-reason"
                    }, 1 === d ? c : u)), s ? i.a.createElement("div", {
                        className: "commodity-small-title"
                    }, s, "*", l || 1, "张") : i.a.createElement("div", {
                        className: "commodity-small-space"
                    }), i.a.createElement("div", {
                        className: "commodity-small-btn",
                        onClick: function(e) {
                            e.stopPropagation(),
                            n({
                                vpSkuId: p,
                                index: h + 1,
                                themeId: 1 === d ? z.i.LOCAL : z.i.MEDIA
                            })
                        }
                    }, "立即购买"))
                    //}, "赚￥", o || "??"))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , A = t.localAndMediaList
                      , n = t.jumpCommodityListPage
                      , r = 1 === A.length;
                    return i.a.createElement("div", {
                        className: "local-media"
                    }, A.map((function(t, A) {
                        return i.a.createElement("div", {
                            className: "list-item",
                            key: t.type,
                            style: {
                                width: r ? "100%" : "50%",
                                marginLeft: r || 1 !== A ? "" : ".2rem"
                            }
                        }, i.a.createElement("div", {
                            className: "item-title",
                            onClick: function() {
                                n({
                                    themeId: 1 === t.type ? z.i.LOCAL : z.i.MEDIA
                                })
                            }
                        }, i.a.createElement("img", {
                            src: t.img,
                            alt: ""
                        }), i.a.createElement("span", null, t.title)), i.a.createElement("div", {
                            className: "commodity-item",
                            style: {
                                justifyContent: r ? "space-between" : "flex-start"
                            }
                        }, t.list.map((function(A, n) {
                            return i.a.createElement("div", {
                                key: A.vpSkuId,
                                style: {
                                    marginRight: r && n !== t.list.length - 1 || 0 === n ? "0.12rem" : ""
                                }
                            }, e.renderCommodityItemSamll(Ae(Ae({}, A), {}, {
                                type: t.type,
                                index: n
                            })))
                        }
                        ))))
                    }
                    )))
                }
            }]),
            A
        }(i.a.Component);
        n("GSKs");
        function ie(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }
        function se(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach((function(A) {
                void 0 === e[A] ? e[A] = t[A] : ie(t[A]) && ie(e[A]) && Object.keys(t[A]).length > 0 && se(e[A], t[A])
            }
            ))
        }
        var oe = "undefined" != typeof document ? document : {}
          , ae = {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            createElementNS: function() {
                return {}
            },
            importNode: function() {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        se(oe, ae);
        var le = "undefined" != typeof window ? window : {};
        se(le, {
            document: ae,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState: function() {},
                pushState: function() {},
                go: function() {},
                back: function() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {},
            matchMedia: function() {
                return {}
            }
        });
        class ce {
            constructor(e) {
                const t = this;
                for (let A = 0; A < e.length; A += 1)
                    t[A] = e[A];
                return t.length = e.length,
                this
            }
        }
        function ue(e, t) {
            const A = [];
            let n = 0;
            if (e && !t && e instanceof ce)
                return e;
            if (e)
                if ("string" == typeof e) {
                    let r, i;
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        for (0 === s.indexOf("<li") && (e = "ul"),
                        0 === s.indexOf("<tr") && (e = "tbody"),
                        0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
                        0 === s.indexOf("<tbody") && (e = "table"),
                        0 === s.indexOf("<option") && (e = "select"),
                        i = oe.createElement(e),
                        i.innerHTML = s,
                        n = 0; n < i.childNodes.length; n += 1)
                            A.push(i.childNodes[n])
                    } else
                        for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || oe).querySelectorAll(e.trim()) : [oe.getElementById(e.trim().split("#")[1])],
                        n = 0; n < r.length; n += 1)
                            r[n] && A.push(r[n])
                } else if (e.nodeType || e === le || e === oe)
                    A.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (n = 0; n < e.length; n += 1)
                        A.push(e[n]);
            return new ce(A)
        }
        function de(e) {
            const t = [];
            for (let A = 0; A < e.length; A += 1)
                -1 === t.indexOf(e[A]) && t.push(e[A]);
            return t
        }
        ue.fn = ce.prototype,
        ue.Class = ce,
        ue.Dom7 = ce;
        "resize scroll".split(" ");
        const he = {
            addClass: function(e) {
                if (void 0 === e)
                    return this;
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1)
                    for (let A = 0; A < this.length; A += 1)
                        void 0 !== this[A] && void 0 !== this[A].classList && this[A].classList.add(t[e]);
                return this
            },
            removeClass: function(e) {
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1)
                    for (let A = 0; A < this.length; A += 1)
                        void 0 !== this[A] && void 0 !== this[A].classList && this[A].classList.remove(t[e]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1)
                    for (let A = 0; A < this.length; A += 1)
                        void 0 !== this[A] && void 0 !== this[A].classList && this[A].classList.toggle(t[e]);
                return this
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let A = 0; A < this.length; A += 1)
                    if (2 === arguments.length)
                        this[A].setAttribute(e, t);
                    else
                        for (const t in e)
                            this[A][t] = e[t],
                            this[A].setAttribute(t, e[t]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                let A;
                if (void 0 !== t) {
                    for (let n = 0; n < this.length; n += 1)
                        A = this[n],
                        A.dom7ElementDataStorage || (A.dom7ElementDataStorage = {}),
                        A.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (A = this[0],
                A) {
                    if (A.dom7ElementDataStorage && e in A.dom7ElementDataStorage)
                        return A.dom7ElementDataStorage[e];
                    const t = A.getAttribute("data-" + e);
                    return t || void 0
                }
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1) {
                    const A = this[t].style;
                    A.webkitTransform = e,
                    A.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (let t = 0; t < this.length; t += 1) {
                    const A = this[t].style;
                    A.webkitTransitionDuration = e,
                    A.transitionDuration = e
                }
                return this
            },
            on: function(...e) {
                let[t,A,n,r] = e;
                function i(e) {
                    const t = e.target;
                    if (!t)
                        return;
                    const r = e.target.dom7EventData || [];
                    if (r.indexOf(e) < 0 && r.unshift(e),
                    ue(t).is(A))
                        n.apply(t, r);
                    else {
                        const e = ue(t).parents();
                        for (let t = 0; t < e.length; t += 1)
                            ue(e[t]).is(A) && n.apply(e[t], r)
                    }
                }
                function s(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e),
                    n.apply(this, t)
                }
                "function" == typeof e[1] && ([t,n,r] = e,
                A = void 0),
                r || (r = !1);
                const o = t.split(" ");
                let a;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (A)
                        for (a = 0; a < o.length; a += 1) {
                            const e = o[a];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                            t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                            t.dom7LiveListeners[e].push({
                                listener: n,
                                proxyListener: i
                            }),
                            t.addEventListener(e, i, r)
                        }
                    else
                        for (a = 0; a < o.length; a += 1) {
                            const e = o[a];
                            t.dom7Listeners || (t.dom7Listeners = {}),
                            t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                            t.dom7Listeners[e].push({
                                listener: n,
                                proxyListener: s
                            }),
                            t.addEventListener(e, s, r)
                        }
                }
                return this
            },
            off: function(...e) {
                let[t,A,n,r] = e;
                "function" == typeof e[1] && ([t,n,r] = e,
                A = void 0),
                r || (r = !1);
                const i = t.split(" ");
                for (let e = 0; e < i.length; e += 1) {
                    const t = i[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const i = this[e];
                        let s;
                        if (!A && i.dom7Listeners ? s = i.dom7Listeners[t] : A && i.dom7LiveListeners && (s = i.dom7LiveListeners[t]),
                        s && s.length)
                            for (let e = s.length - 1; e >= 0; e -= 1) {
                                const A = s[e];
                                n && A.listener === n || n && A.listener && A.listener.dom7proxy && A.listener.dom7proxy === n ? (i.removeEventListener(t, A.proxyListener, r),
                                s.splice(e, 1)) : n || (i.removeEventListener(t, A.proxyListener, r),
                                s.splice(e, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...e) {
                const t = e[0].split(" ")
                  , A = e[1];
                for (let n = 0; n < t.length; n += 1) {
                    const r = t[n];
                    for (let t = 0; t < this.length; t += 1) {
                        const n = this[t];
                        let i;
                        try {
                            i = new le.CustomEvent(r,{
                                detail: A,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (e) {
                            i = oe.createEvent("Event"),
                            i.initEvent(r, !0, !0),
                            i.detail = A
                        }
                        n.dom7EventData = e.filter((e,t)=>t > 0),
                        n.dispatchEvent(i),
                        n.dom7EventData = [],
                        delete n.dom7EventData
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                const t = ["webkitTransitionEnd", "transitionend"]
                  , A = this;
                let n;
                function r(i) {
                    if (i.target === this)
                        for (e.call(this, i),
                        n = 0; n < t.length; n += 1)
                            A.off(t[n], r)
                }
                if (e)
                    for (n = 0; n < t.length; n += 1)
                        A.on(t[n], r);
                return this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (this.length > 0) {
                    const e = this[0]
                      , t = e.getBoundingClientRect()
                      , A = oe.body
                      , n = e.clientTop || A.clientTop || 0
                      , r = e.clientLeft || A.clientLeft || 0
                      , i = e === le ? le.scrollY : e.scrollTop
                      , s = e === le ? le.scrollX : e.scrollLeft;
                    return {
                        top: t.top + i - n,
                        left: t.left + s - r
                    }
                }
                return null
            },
            css: function(e, t) {
                let A;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (A = 0; A < this.length; A += 1)
                            for (let t in e)
                                this[A].style[t] = e[t];
                        return this
                    }
                    if (this[0])
                        return le.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (A = 0; A < this.length; A += 1)
                        this[A].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                if (!e)
                    return this;
                for (let t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t]))
                        return this;
                return this
            },
            html: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (let t = 0; t < this.length; t += 1)
                    this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this
            },
            is: function(e) {
                const t = this[0];
                let A, n;
                if (!t || void 0 === e)
                    return !1;
                if ("string" == typeof e) {
                    if (t.matches)
                        return t.matches(e);
                    if (t.webkitMatchesSelector)
                        return t.webkitMatchesSelector(e);
                    if (t.msMatchesSelector)
                        return t.msMatchesSelector(e);
                    for (A = ue(e),
                    n = 0; n < A.length; n += 1)
                        if (A[n] === t)
                            return !0;
                    return !1
                }
                if (e === oe)
                    return t === oe;
                if (e === le)
                    return t === le;
                if (e.nodeType || e instanceof ce) {
                    for (A = e.nodeType ? [e] : e,
                    n = 0; n < A.length; n += 1)
                        if (A[n] === t)
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e)
                    return this;
                const t = this.length;
                let A;
                return e > t - 1 ? new ce([]) : e < 0 ? (A = t + e,
                new ce(A < 0 ? [] : [this[A]])) : new ce([this[e]])
            },
            append: function(...e) {
                let t;
                for (let A = 0; A < e.length; A += 1) {
                    t = e[A];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const A = oe.createElement("div");
                            for (A.innerHTML = t; A.firstChild; )
                                this[e].appendChild(A.firstChild)
                        } else if (t instanceof ce)
                            for (let A = 0; A < t.length; A += 1)
                                this[e].appendChild(t[A]);
                        else
                            this[e].appendChild(t)
                }
                return this
            },
            prepend: function(e) {
                let t, A;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        const n = oe.createElement("div");
                        for (n.innerHTML = e,
                        A = n.childNodes.length - 1; A >= 0; A -= 1)
                            this[t].insertBefore(n.childNodes[A], this[t].childNodes[0])
                    } else if (e instanceof ce)
                        for (A = 0; A < e.length; A += 1)
                            this[t].insertBefore(e[A], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && ue(this[0].nextElementSibling).is(e) ? new ce([this[0].nextElementSibling]) : new ce([]) : this[0].nextElementSibling ? new ce([this[0].nextElementSibling]) : new ce([]) : new ce([])
            },
            nextAll: function(e) {
                const t = [];
                let A = this[0];
                if (!A)
                    return new ce([]);
                for (; A.nextElementSibling; ) {
                    const n = A.nextElementSibling;
                    e ? ue(n).is(e) && t.push(n) : t.push(n),
                    A = n
                }
                return new ce(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && ue(t.previousElementSibling).is(e) ? new ce([t.previousElementSibling]) : new ce([]) : t.previousElementSibling ? new ce([t.previousElementSibling]) : new ce([])
                }
                return new ce([])
            },
            prevAll: function(e) {
                const t = [];
                let A = this[0];
                if (!A)
                    return new ce([]);
                for (; A.previousElementSibling; ) {
                    const n = A.previousElementSibling;
                    e ? ue(n).is(e) && t.push(n) : t.push(n),
                    A = n
                }
                return new ce(t)
            },
            parent: function(e) {
                const t = [];
                for (let A = 0; A < this.length; A += 1)
                    null !== this[A].parentNode && (e ? ue(this[A].parentNode).is(e) && t.push(this[A].parentNode) : t.push(this[A].parentNode));
                return ue(de(t))
            },
            parents: function(e) {
                const t = [];
                for (let A = 0; A < this.length; A += 1) {
                    let n = this[A].parentNode;
                    for (; n; )
                        e ? ue(n).is(e) && t.push(n) : t.push(n),
                        n = n.parentNode
                }
                return ue(de(t))
            },
            closest: function(e) {
                let t = this;
                return void 0 === e ? new ce([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                t)
            },
            find: function(e) {
                const t = [];
                for (let A = 0; A < this.length; A += 1) {
                    const n = this[A].querySelectorAll(e);
                    for (let e = 0; e < n.length; e += 1)
                        t.push(n[e])
                }
                return new ce(t)
            },
            children: function(e) {
                const t = [];
                for (let A = 0; A < this.length; A += 1) {
                    const n = this[A].childNodes;
                    for (let A = 0; A < n.length; A += 1)
                        e ? 1 === n[A].nodeType && ue(n[A]).is(e) && t.push(n[A]) : 1 === n[A].nodeType && t.push(n[A])
                }
                return new ce(de(t))
            },
            filter: function(e) {
                const t = []
                  , A = this;
                for (let n = 0; n < A.length; n += 1)
                    e.call(A[n], n, A[n]) && t.push(A[n]);
                return new ce(t)
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function(...e) {
                const t = this;
                let A, n;
                for (A = 0; A < e.length; A += 1) {
                    const r = ue(e[A]);
                    for (n = 0; n < r.length; n += 1)
                        t[t.length] = r[n],
                        t.length += 1
                }
                return t
            },
            styles: function() {
                return this[0] ? le.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(he).forEach(e=>{
            ue.fn[e] = ue.fn[e] || he[e]
        }
        );
        const pe = {
            deleteProps(e) {
                const t = e;
                Object.keys(t).forEach(e=>{
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                )
            },
            nextTick: (e,t=0)=>setTimeout(e, t),
            now: ()=>Date.now(),
            getTranslate(e, t="x") {
                let A, n, r;
                const i = le.getComputedStyle(e, null);
                return le.WebKitCSSMatrix ? (n = i.transform || i.webkitTransform,
                n.split(",").length > 6 && (n = n.split(", ").map(e=>e.replace(",", ".")).join(", ")),
                r = new le.WebKitCSSMatrix("none" === n ? "" : n)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                A = r.toString().split(",")),
                "x" === t && (n = le.WebKitCSSMatrix ? r.m41 : 16 === A.length ? parseFloat(A[12]) : parseFloat(A[4])),
                "y" === t && (n = le.WebKitCSSMatrix ? r.m42 : 16 === A.length ? parseFloat(A[13]) : parseFloat(A[5])),
                n || 0
            },
            parseUrlQuery(e) {
                const t = {};
                let A, n, r, i, s = e || le.location.href;
                if ("string" == typeof s && s.length)
                    for (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "",
                    n = s.split("&").filter(e=>"" !== e),
                    i = n.length,
                    A = 0; A < i; A += 1)
                        r = n[A].replace(/#\S+/g, "").split("="),
                        t[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
                return t
            },
            isObject: e=>"object" == typeof e && null !== e && e.constructor && e.constructor === Object,
            extend(...e) {
                const t = Object(e[0]);
                for (let A = 1; A < e.length; A += 1) {
                    const n = e[A];
                    if (null != n) {
                        const e = Object.keys(Object(n));
                        for (let A = 0, r = e.length; A < r; A += 1) {
                            const r = e[A]
                              , i = Object.getOwnPropertyDescriptor(n, r);
                            void 0 !== i && i.enumerable && (pe.isObject(t[r]) && pe.isObject(n[r]) ? pe.extend(t[r], n[r]) : !pe.isObject(t[r]) && pe.isObject(n[r]) ? (t[r] = {},
                            pe.extend(t[r], n[r])) : t[r] = n[r])
                        }
                    }
                }
                return t
            }
        }
          , fe = {
            touch: !!("ontouchstart"in le || le.DocumentTouch && oe instanceof le.DocumentTouch),
            pointerEvents: !!le.PointerEvent && "maxTouchPoints"in le.navigator && le.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver"in le || "WebkitMutationObserver"in le,
            passiveListener: function() {
                let e = !1;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get() {
                            e = !0
                        }
                    });
                    le.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart"in le
        };
        class ge {
            constructor(e={}) {
                const t = this;
                t.params = e,
                t.eventsListeners = {},
                t.params && t.params.on && Object.keys(t.params.on).forEach(e=>{
                    t.on(e, t.params.on[e])
                }
                )
            }
            on(e, t, A) {
                const n = this;
                if ("function" != typeof t)
                    return n;
                const r = A ? "unshift" : "push";
                return e.split(" ").forEach(e=>{
                    n.eventsListeners[e] || (n.eventsListeners[e] = []),
                    n.eventsListeners[e][r](t)
                }
                ),
                n
            }
            once(e, t, A) {
                const n = this;
                if ("function" != typeof t)
                    return n;
                function r(...A) {
                    n.off(e, r),
                    r.f7proxy && delete r.f7proxy,
                    t.apply(n, A)
                }
                return r.f7proxy = t,
                n.on(e, r, A)
            }
            off(e, t) {
                const A = this;
                return A.eventsListeners ? (e.split(" ").forEach(e=>{
                    void 0 === t ? A.eventsListeners[e] = [] : A.eventsListeners[e] && A.eventsListeners[e].length && A.eventsListeners[e].forEach((n,r)=>{
                        (n === t || n.f7proxy && n.f7proxy === t) && A.eventsListeners[e].splice(r, 1)
                    }
                    )
                }
                ),
                A) : A
            }
            emit(...e) {
                const t = this;
                if (!t.eventsListeners)
                    return t;
                let A, n, r;
                "string" == typeof e[0] || Array.isArray(e[0]) ? (A = e[0],
                n = e.slice(1, e.length),
                r = t) : (A = e[0].events,
                n = e[0].data,
                r = e[0].context || t);
                return (Array.isArray(A) ? A : A.split(" ")).forEach(e=>{
                    if (t.eventsListeners && t.eventsListeners[e]) {
                        const A = [];
                        t.eventsListeners[e].forEach(e=>{
                            A.push(e)
                        }
                        ),
                        A.forEach(e=>{
                            e.apply(r, n)
                        }
                        )
                    }
                }
                ),
                t
            }
            useModulesParams(e) {
                const t = this;
                t.modules && Object.keys(t.modules).forEach(A=>{
                    const n = t.modules[A];
                    n.params && pe.extend(e, n.params)
                }
                )
            }
            useModules(e={}) {
                const t = this;
                t.modules && Object.keys(t.modules).forEach(A=>{
                    const n = t.modules[A]
                      , r = e[A] || {};
                    n.instance && Object.keys(n.instance).forEach(e=>{
                        const A = n.instance[e];
                        t[e] = "function" == typeof A ? A.bind(t) : A
                    }
                    ),
                    n.on && t.on && Object.keys(n.on).forEach(e=>{
                        t.on(e, n.on[e])
                    }
                    ),
                    n.create && n.create.bind(t)(r)
                }
                )
            }
            static set components(e) {
                this.use && this.use(e)
            }
            static installModule(e, ...t) {
                const A = this;
                A.prototype.modules || (A.prototype.modules = {});
                const n = e.name || `${Object.keys(A.prototype.modules).length}_ ${pe.now()}`;
                return A.prototype.modules[n] = e,
                e.proto && Object.keys(e.proto).forEach(t=>{
                    A.prototype[t] = e.proto[t]
                }
                ),
                e.static && Object.keys(e.static).forEach(t=>{
                    A[t] = e.static[t]
                }
                ),
                e.install && e.install.apply(A, t),
                A
            }
            static use(e, ...t) {
                const A = this;
                return Array.isArray(e) ? (e.forEach(e=>A.installModule(e)),
                A) : A.installModule(e, ...t)
            }
        }
        var Be = {
            updateSize: function() {
                const e = this;
                let t, A;
                const n = e.$el;
                t = void 0 !== e.params.width ? e.params.width : n[0].clientWidth,
                A = void 0 !== e.params.height ? e.params.height : n[0].clientHeight,
                0 === t && e.isHorizontal() || 0 === A && e.isVertical() || (t = t - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10),
                A = A - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10),
                pe.extend(e, {
                    width: t,
                    height: A,
                    size: e.isHorizontal() ? t : A
                }))
            },
            updateSlides: function() {
                const e = this
                  , t = e.params
                  , {$wrapperEl: A, size: n, rtlTranslate: r, wrongRTL: i} = e
                  , s = e.virtual && t.virtual.enabled
                  , o = s ? e.virtual.slides.length : e.slides.length
                  , a = A.children("." + e.params.slideClass)
                  , l = s ? e.virtual.slides.length : a.length;
                let c = [];
                const u = []
                  , d = [];
                function h(e) {
                    return !t.cssMode || e !== a.length - 1
                }
                let p = t.slidesOffsetBefore;
                "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
                let f = t.slidesOffsetAfter;
                "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
                const g = e.snapGrid.length
                  , B = e.snapGrid.length;
                let m, w, v = t.spaceBetween, E = -p, C = 0, Q = 0;
                if (void 0 === n)
                    return;
                "string" == typeof v && v.indexOf("%") >= 0 && (v = parseFloat(v.replace("%", "")) / 100 * n),
                e.virtualSize = -v,
                r ? a.css({
                    marginLeft: "",
                    marginTop: ""
                }) : a.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                t.slidesPerColumn > 1 && (m = Math.floor(l / t.slidesPerColumn) === l / e.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (m = Math.max(m, t.slidesPerView * t.slidesPerColumn)));
                const y = t.slidesPerColumn
                  , b = m / y
                  , U = Math.floor(l / t.slidesPerColumn);
                for (let A = 0; A < l; A += 1) {
                    w = 0;
                    const r = a.eq(A);
                    if (t.slidesPerColumn > 1) {
                        let n, i, s;
                        if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                            const e = Math.floor(A / (t.slidesPerGroup * t.slidesPerColumn))
                              , o = A - t.slidesPerColumn * t.slidesPerGroup * e
                              , a = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((l - e * y * t.slidesPerGroup) / y), t.slidesPerGroup);
                            s = Math.floor(o / a),
                            i = o - s * a + e * t.slidesPerGroup,
                            n = i + s * m / y,
                            r.css({
                                "-webkit-box-ordinal-group": n,
                                "-moz-box-ordinal-group": n,
                                "-ms-flex-order": n,
                                "-webkit-order": n,
                                order: n
                            })
                        } else
                            "column" === t.slidesPerColumnFill ? (i = Math.floor(A / y),
                            s = A - i * y,
                            (i > U || i === U && s === y - 1) && (s += 1,
                            s >= y && (s = 0,
                            i += 1))) : (s = Math.floor(A / b),
                            i = A - s * b);
                        r.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== s && t.spaceBetween && t.spaceBetween + "px")
                    }
                    if ("none" !== r.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            const A = le.getComputedStyle(r[0], null)
                              , n = r[0].style.transform
                              , i = r[0].style.webkitTransform;
                            if (n && (r[0].style.transform = "none"),
                            i && (r[0].style.webkitTransform = "none"),
                            t.roundLengths)
                                w = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                const e = parseFloat(A.getPropertyValue("width"))
                                  , t = parseFloat(A.getPropertyValue("padding-left"))
                                  , n = parseFloat(A.getPropertyValue("padding-right"))
                                  , r = parseFloat(A.getPropertyValue("margin-left"))
                                  , i = parseFloat(A.getPropertyValue("margin-right"))
                                  , s = A.getPropertyValue("box-sizing");
                                w = s && "border-box" === s ? e + r + i : e + t + n + r + i
                            } else {
                                const e = parseFloat(A.getPropertyValue("height"))
                                  , t = parseFloat(A.getPropertyValue("padding-top"))
                                  , n = parseFloat(A.getPropertyValue("padding-bottom"))
                                  , r = parseFloat(A.getPropertyValue("margin-top"))
                                  , i = parseFloat(A.getPropertyValue("margin-bottom"))
                                  , s = A.getPropertyValue("box-sizing");
                                w = s && "border-box" === s ? e + r + i : e + t + n + r + i
                            }
                            n && (r[0].style.transform = n),
                            i && (r[0].style.webkitTransform = i),
                            t.roundLengths && (w = Math.floor(w))
                        } else
                            w = (n - (t.slidesPerView - 1) * v) / t.slidesPerView,
                            t.roundLengths && (w = Math.floor(w)),
                            a[A] && (e.isHorizontal() ? a[A].style.width = w + "px" : a[A].style.height = w + "px");
                        a[A] && (a[A].swiperSlideSize = w),
                        d.push(w),
                        t.centeredSlides ? (E = E + w / 2 + C / 2 + v,
                        0 === C && 0 !== A && (E = E - n / 2 - v),
                        0 === A && (E = E - n / 2 - v),
                        Math.abs(E) < .001 && (E = 0),
                        t.roundLengths && (E = Math.floor(E)),
                        Q % t.slidesPerGroup == 0 && c.push(E),
                        u.push(E)) : (t.roundLengths && (E = Math.floor(E)),
                        (Q - Math.min(e.params.slidesPerGroupSkip, Q)) % e.params.slidesPerGroup == 0 && c.push(E),
                        u.push(E),
                        E = E + w + v),
                        e.virtualSize += w + v,
                        C = w,
                        Q += 1
                    }
                }
                let F;
                if (e.virtualSize = Math.max(e.virtualSize, n) + f,
                r && i && ("slide" === t.effect || "coverflow" === t.effect) && A.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                t.setWrapperSize && (e.isHorizontal() ? A.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : A.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                t.slidesPerColumn > 1 && (e.virtualSize = (w + t.spaceBetween) * m,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? A.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : A.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                    F = [];
                    for (let A = 0; A < c.length; A += 1) {
                        let n = c[A];
                        t.roundLengths && (n = Math.floor(n)),
                        c[A] < e.virtualSize + c[0] && F.push(n)
                    }
                    c = F
                }
                if (!t.centeredSlides) {
                    F = [];
                    for (let A = 0; A < c.length; A += 1) {
                        let r = c[A];
                        t.roundLengths && (r = Math.floor(r)),
                        c[A] <= e.virtualSize - n && F.push(r)
                    }
                    c = F,
                    Math.floor(e.virtualSize - n) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - n)
                }
                if (0 === c.length && (c = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? r ? a.filter(h).css({
                    marginLeft: v + "px"
                }) : a.filter(h).css({
                    marginRight: v + "px"
                }) : a.filter(h).css({
                    marginBottom: v + "px"
                })),
                t.centeredSlides && t.centeredSlidesBounds) {
                    let e = 0;
                    d.forEach(A=>{
                        e += A + (t.spaceBetween ? t.spaceBetween : 0)
                    }
                    ),
                    e -= t.spaceBetween;
                    const A = e - n;
                    c = c.map(e=>e < 0 ? -p : e > A ? A + f : e)
                }
                if (t.centerInsufficientSlides) {
                    let e = 0;
                    if (d.forEach(A=>{
                        e += A + (t.spaceBetween ? t.spaceBetween : 0)
                    }
                    ),
                    e -= t.spaceBetween,
                    e < n) {
                        const t = (n - e) / 2;
                        c.forEach((e,A)=>{
                            c[A] = e - t
                        }
                        ),
                        u.forEach((e,A)=>{
                            u[A] = e + t
                        }
                        )
                    }
                }
                pe.extend(e, {
                    slides: a,
                    snapGrid: c,
                    slidesGrid: u,
                    slidesSizesGrid: d
                }),
                l !== o && e.emit("slidesLengthChange"),
                c.length !== g && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                u.length !== B && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            },
            updateAutoHeight: function(e) {
                const t = this
                  , A = [];
                let n, r = 0;
                if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed),
                "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        t.visibleSlides.each((e,t)=>{
                            A.push(t)
                        }
                        );
                    else
                        for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                            const e = t.activeIndex + n;
                            if (e > t.slides.length)
                                break;
                            A.push(t.slides.eq(e)[0])
                        }
                else
                    A.push(t.slides.eq(t.activeIndex)[0]);
                for (n = 0; n < A.length; n += 1)
                    if (void 0 !== A[n]) {
                        const e = A[n].offsetHeight;
                        r = e > r ? e : r
                    }
                r && t.$wrapperEl.css("height", r + "px")
            },
            updateSlidesOffset: function() {
                const e = this
                  , t = e.slides;
                for (let A = 0; A < t.length; A += 1)
                    t[A].swiperSlideOffset = e.isHorizontal() ? t[A].offsetLeft : t[A].offsetTop
            },
            updateSlidesProgress: function(e=this && this.translate || 0) {
                const t = this
                  , A = t.params
                  , {slides: n, rtlTranslate: r} = t;
                if (0 === n.length)
                    return;
                void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                let i = -e;
                r && (i = e),
                n.removeClass(A.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (let e = 0; e < n.length; e += 1) {
                    const s = n[e]
                      , o = (i + (A.centeredSlides ? t.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + A.spaceBetween);
                    if (A.watchSlidesVisibility || A.centeredSlides && A.autoHeight) {
                        const r = -(i - s.swiperSlideOffset)
                          , o = r + t.slidesSizesGrid[e];
                        (r >= 0 && r < t.size - 1 || o > 1 && o <= t.size || r <= 0 && o >= t.size) && (t.visibleSlides.push(s),
                        t.visibleSlidesIndexes.push(e),
                        n.eq(e).addClass(A.slideVisibleClass))
                    }
                    s.progress = r ? -o : o
                }
                t.visibleSlides = ue(t.visibleSlides)
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const A = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * A || 0
                }
                const A = t.params
                  , n = t.maxTranslate() - t.minTranslate();
                let {progress: r, isBeginning: i, isEnd: s} = t;
                const o = i
                  , a = s;
                0 === n ? (r = 0,
                i = !0,
                s = !0) : (r = (e - t.minTranslate()) / n,
                i = r <= 0,
                s = r >= 1),
                pe.extend(t, {
                    progress: r,
                    isBeginning: i,
                    isEnd: s
                }),
                (A.watchSlidesProgress || A.watchSlidesVisibility || A.centeredSlides && A.autoHeight) && t.updateSlidesProgress(e),
                i && !o && t.emit("reachBeginning toEdge"),
                s && !a && t.emit("reachEnd toEdge"),
                (o && !i || a && !s) && t.emit("fromEdge"),
                t.emit("progress", r)
            },
            updateSlidesClasses: function() {
                const e = this
                  , {slides: t, params: A, $wrapperEl: n, activeIndex: r, realIndex: i} = e
                  , s = e.virtual && A.virtual.enabled;
                let o;
                t.removeClass(`${A.slideActiveClass} ${A.slideNextClass} ${A.slidePrevClass} ${A.slideDuplicateActiveClass} ${A.slideDuplicateNextClass} ${A.slideDuplicatePrevClass}`),
                o = s ? e.$wrapperEl.find(`.${A.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r),
                o.addClass(A.slideActiveClass),
                A.loop && (o.hasClass(A.slideDuplicateClass) ? n.children(`.${A.slideClass}:not(.${A.slideDuplicateClass})[data-swiper-slide-index="${i}"]`).addClass(A.slideDuplicateActiveClass) : n.children(`.${A.slideClass}.${A.slideDuplicateClass}[data-swiper-slide-index="${i}"]`).addClass(A.slideDuplicateActiveClass));
                let a = o.nextAll("." + A.slideClass).eq(0).addClass(A.slideNextClass);
                A.loop && 0 === a.length && (a = t.eq(0),
                a.addClass(A.slideNextClass));
                let l = o.prevAll("." + A.slideClass).eq(0).addClass(A.slidePrevClass);
                A.loop && 0 === l.length && (l = t.eq(-1),
                l.addClass(A.slidePrevClass)),
                A.loop && (a.hasClass(A.slideDuplicateClass) ? n.children(`.${A.slideClass}:not(.${A.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(A.slideDuplicateNextClass) : n.children(`.${A.slideClass}.${A.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(A.slideDuplicateNextClass),
                l.hasClass(A.slideDuplicateClass) ? n.children(`.${A.slideClass}:not(.${A.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(A.slideDuplicatePrevClass) : n.children(`.${A.slideClass}.${A.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(A.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                const t = this
                  , A = t.rtlTranslate ? t.translate : -t.translate
                  , {slidesGrid: n, snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: a} = t;
                let l, c = e;
                if (void 0 === c) {
                    for (let e = 0; e < n.length; e += 1)
                        void 0 !== n[e + 1] ? A >= n[e] && A < n[e + 1] - (n[e + 1] - n[e]) / 2 ? c = e : A >= n[e] && A < n[e + 1] && (c = e + 1) : A >= n[e] && (c = e);
                    i.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if (r.indexOf(A) >= 0)
                    l = r.indexOf(A);
                else {
                    const e = Math.min(i.slidesPerGroupSkip, c);
                    l = e + Math.floor((c - e) / i.slidesPerGroup)
                }
                if (l >= r.length && (l = r.length - 1),
                c === s)
                    return void (l !== a && (t.snapIndex = l,
                    t.emit("snapIndexChange")));
                const u = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                pe.extend(t, {
                    snapIndex: l,
                    realIndex: u,
                    previousIndex: s,
                    activeIndex: c
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                o !== u && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this
                  , A = t.params
                  , n = ue(e.target).closest("." + A.slideClass)[0];
                let r = !1;
                if (n)
                    for (let e = 0; e < t.slides.length; e += 1)
                        t.slides[e] === n && (r = !0);
                if (!n || !r)
                    return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
                t.clickedSlide = n,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(ue(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = ue(n).index(),
                A.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        };
        var me = {
            getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
                const {params: t, rtlTranslate: A, translate: n, $wrapperEl: r} = this;
                if (t.virtualTranslate)
                    return A ? -n : n;
                if (t.cssMode)
                    return n;
                let i = pe.getTranslate(r[0], e);
                return A && (i = -i),
                i || 0
            },
            setTranslate: function(e, t) {
                const A = this
                  , {rtlTranslate: n, params: r, $wrapperEl: i, wrapperEl: s, progress: o} = A;
                let a, l = 0, c = 0;
                A.isHorizontal() ? l = n ? -e : e : c = e,
                r.roundLengths && (l = Math.floor(l),
                c = Math.floor(c)),
                r.cssMode ? s[A.isHorizontal() ? "scrollLeft" : "scrollTop"] = A.isHorizontal() ? -l : -c : r.virtualTranslate || i.transform(`translate3d(${l}px, ${c}px, 0px)`),
                A.previousTranslate = A.translate,
                A.translate = A.isHorizontal() ? l : c;
                const u = A.maxTranslate() - A.minTranslate();
                a = 0 === u ? 0 : (e - A.minTranslate()) / u,
                a !== o && A.updateProgress(e),
                A.emit("setTranslate", A.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e=0, t=this.params.speed, A=!0, n=!0, r) {
                const i = this
                  , {params: s, wrapperEl: o} = i;
                if (i.animating && s.preventInteractionOnTransition)
                    return !1;
                const a = i.minTranslate()
                  , l = i.maxTranslate();
                let c;
                if (c = n && e > a ? a : n && e < l ? l : e,
                i.updateProgress(c),
                s.cssMode) {
                    const e = i.isHorizontal();
                    return 0 === t ? o[e ? "scrollLeft" : "scrollTop"] = -c : o.scrollTo ? o.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    }) : o[e ? "scrollLeft" : "scrollTop"] = -c,
                    !0
                }
                return 0 === t ? (i.setTransition(0),
                i.setTranslate(c),
                A && (i.emit("beforeTransitionStart", t, r),
                i.emit("transitionEnd"))) : (i.setTransition(t),
                i.setTranslate(c),
                A && (i.emit("beforeTransitionStart", t, r),
                i.emit("transitionStart")),
                i.animating || (i.animating = !0,
                i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(e) {
                    i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd),
                    i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd),
                    i.onTranslateToWrapperTransitionEnd = null,
                    delete i.onTranslateToWrapperTransitionEnd,
                    A && i.emit("transitionEnd"))
                }
                ),
                i.$wrapperEl[0].addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd),
                i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd))),
                !0
            }
        };
        var we = {
            setTransition: function(e, t) {
                const A = this;
                A.params.cssMode || A.$wrapperEl.transition(e),
                A.emit("setTransition", e, t)
            },
            transitionStart: function(e=!0, t) {
                const A = this
                  , {activeIndex: n, params: r, previousIndex: i} = A;
                if (r.cssMode)
                    return;
                r.autoHeight && A.updateAutoHeight();
                let s = t;
                if (s || (s = n > i ? "next" : n < i ? "prev" : "reset"),
                A.emit("transitionStart"),
                e && n !== i) {
                    if ("reset" === s)
                        return void A.emit("slideResetTransitionStart");
                    A.emit("slideChangeTransitionStart"),
                    "next" === s ? A.emit("slideNextTransitionStart") : A.emit("slidePrevTransitionStart")
                }
            },
            transitionEnd: function(e=!0, t) {
                const A = this
                  , {activeIndex: n, previousIndex: r, params: i} = A;
                if (A.animating = !1,
                i.cssMode)
                    return;
                A.setTransition(0);
                let s = t;
                if (s || (s = n > r ? "next" : n < r ? "prev" : "reset"),
                A.emit("transitionEnd"),
                e && n !== r) {
                    if ("reset" === s)
                        return void A.emit("slideResetTransitionEnd");
                    A.emit("slideChangeTransitionEnd"),
                    "next" === s ? A.emit("slideNextTransitionEnd") : A.emit("slidePrevTransitionEnd")
                }
            }
        };
        var ve = {
            slideTo: function(e=0, t=this.params.speed, A=!0, n) {
                const r = this;
                let i = e;
                i < 0 && (i = 0);
                const {params: s, snapGrid: o, slidesGrid: a, previousIndex: l, activeIndex: c, rtlTranslate: u, wrapperEl: d} = r;
                if (r.animating && s.preventInteractionOnTransition)
                    return !1;
                const h = Math.min(r.params.slidesPerGroupSkip, i);
                let p = h + Math.floor((i - h) / r.params.slidesPerGroup);
                p >= o.length && (p = o.length - 1),
                (c || s.initialSlide || 0) === (l || 0) && A && r.emit("beforeSlideChangeStart");
                const f = -o[p];
                if (r.updateProgress(f),
                s.normalizeSlideIndex)
                    for (let e = 0; e < a.length; e += 1)
                        -Math.floor(100 * f) >= Math.floor(100 * a[e]) && (i = e);
                if (r.initialized && i !== c) {
                    if (!r.allowSlideNext && f < r.translate && f < r.minTranslate())
                        return !1;
                    if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (c || 0) !== i)
                        return !1
                }
                let g;
                if (g = i > c ? "next" : i < c ? "prev" : "reset",
                u && -f === r.translate || !u && f === r.translate)
                    return r.updateActiveIndex(i),
                    s.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    "slide" !== s.effect && r.setTranslate(f),
                    "reset" !== g && (r.transitionStart(A, g),
                    r.transitionEnd(A, g)),
                    !1;
                if (s.cssMode) {
                    const e = r.isHorizontal();
                    let A = -f;
                    return u && (A = d.scrollWidth - d.offsetWidth - A),
                    0 === t ? d[e ? "scrollLeft" : "scrollTop"] = A : d.scrollTo ? d.scrollTo({
                        [e ? "left" : "top"]: A,
                        behavior: "smooth"
                    }) : d[e ? "scrollLeft" : "scrollTop"] = A,
                    !0
                }
                return 0 === t ? (r.setTransition(0),
                r.setTranslate(f),
                r.updateActiveIndex(i),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, n),
                r.transitionStart(A, g),
                r.transitionEnd(A, g)) : (r.setTransition(t),
                r.setTranslate(f),
                r.updateActiveIndex(i),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, n),
                r.transitionStart(A, g),
                r.animating || (r.animating = !0,
                r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                    r.onSlideToWrapperTransitionEnd = null,
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(A, g))
                }
                ),
                r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                !0
            },
            slideToLoop: function(e=0, t=this.params.speed, A=!0, n) {
                const r = this;
                let i = e;
                return r.params.loop && (i += r.loopedSlides),
                r.slideTo(i, t, A, n)
            },
            slideNext: function(e=this.params.speed, t=!0, A) {
                const n = this
                  , {params: r, animating: i} = n
                  , s = n.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
                if (r.loop) {
                    if (i)
                        return !1;
                    n.loopFix(),
                    n._clientLeft = n.$wrapperEl[0].clientLeft
                }
                return n.slideTo(n.activeIndex + s, e, t, A)
            },
            slidePrev: function(e=this.params.speed, t=!0, A) {
                const n = this
                  , {params: r, animating: i, snapGrid: s, slidesGrid: o, rtlTranslate: a} = n;
                if (r.loop) {
                    if (i)
                        return !1;
                    n.loopFix(),
                    n._clientLeft = n.$wrapperEl[0].clientLeft
                }
                function l(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const c = l(a ? n.translate : -n.translate)
                  , u = s.map(e=>l(e));
                o.map(e=>l(e)),
                s[u.indexOf(c)];
                let d, h = s[u.indexOf(c) - 1];
                return void 0 === h && r.cssMode && s.forEach(e=>{
                    !h && c >= e && (h = e)
                }
                ),
                void 0 !== h && (d = o.indexOf(h),
                d < 0 && (d = n.activeIndex - 1)),
                n.slideTo(d, e, t, A)
            },
            slideReset: function(e=this.params.speed, t=!0, A) {
                return this.slideTo(this.activeIndex, e, t, A)
            },
            slideToClosest: function(e=this.params.speed, t=!0, A, n=.5) {
                const r = this;
                let i = r.activeIndex;
                const s = Math.min(r.params.slidesPerGroupSkip, i)
                  , o = s + Math.floor((i - s) / r.params.slidesPerGroup)
                  , a = r.rtlTranslate ? r.translate : -r.translate;
                if (a >= r.snapGrid[o]) {
                    const e = r.snapGrid[o];
                    a - e > (r.snapGrid[o + 1] - e) * n && (i += r.params.slidesPerGroup)
                } else {
                    const e = r.snapGrid[o - 1];
                    a - e <= (r.snapGrid[o] - e) * n && (i -= r.params.slidesPerGroup)
                }
                return i = Math.max(i, 0),
                i = Math.min(i, r.slidesGrid.length - 1),
                r.slideTo(i, e, t, A)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, $wrapperEl: A} = e
                  , n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let r, i = e.clickedIndex;
                if (t.loop) {
                    if (e.animating)
                        return;
                    r = parseInt(ue(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                    t.centeredSlides ? i < e.loopedSlides - n / 2 || i > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(),
                    i = A.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    pe.nextTick(()=>{
                        e.slideTo(i)
                    }
                    )) : e.slideTo(i) : i > e.slides.length - n ? (e.loopFix(),
                    i = A.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    pe.nextTick(()=>{
                        e.slideTo(i)
                    }
                    )) : e.slideTo(i)
                } else
                    e.slideTo(i)
            }
        };
        var Ee = {
            loopCreate: function() {
                const e = this
                  , {params: t, $wrapperEl: A} = e;
                A.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                let n = A.children("." + t.slideClass);
                if (t.loopFillGroupWithBlank) {
                    const e = t.slidesPerGroup - n.length % t.slidesPerGroup;
                    if (e !== t.slidesPerGroup) {
                        for (let n = 0; n < e; n += 1) {
                            const e = ue(oe.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                            A.append(e)
                        }
                        n = A.children("." + t.slideClass)
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length),
                e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
                e.loopedSlides += t.loopAdditionalSlides,
                e.loopedSlides > n.length && (e.loopedSlides = n.length);
                const r = []
                  , i = [];
                n.each((t,A)=>{
                    const s = ue(A);
                    t < e.loopedSlides && i.push(A),
                    t < n.length && t >= n.length - e.loopedSlides && r.push(A),
                    s.attr("data-swiper-slide-index", t)
                }
                );
                for (let e = 0; e < i.length; e += 1)
                    A.append(ue(i[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (let e = r.length - 1; e >= 0; e -= 1)
                    A.prepend(ue(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const {activeIndex: t, slides: A, loopedSlides: n, allowSlidePrev: r, allowSlideNext: i, snapGrid: s, rtlTranslate: o} = e;
                let a;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                const l = -s[t] - e.getTranslate();
                if (t < n) {
                    a = A.length - 3 * n + t,
                    a += n;
                    e.slideTo(a, 0, !1, !0) && 0 !== l && e.setTranslate((o ? -e.translate : e.translate) - l)
                } else if (t >= A.length - n) {
                    a = -A.length + t + n,
                    a += n;
                    e.slideTo(a, 0, !1, !0) && 0 !== l && e.setTranslate((o ? -e.translate : e.translate) - l)
                }
                e.allowSlidePrev = r,
                e.allowSlideNext = i,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                const {$wrapperEl: e, params: t, slides: A} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                A.removeAttr("data-swiper-slide-index")
            }
        };
        var Ce = {
            setGrabCursor: function(e) {
                if (fe.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)
                    return;
                const t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
                fe.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        };
        var Qe = {
            appendSlide: function(e) {
                const t = this
                  , {$wrapperEl: A, params: n} = t;
                if (n.loop && t.loopDestroy(),
                "object" == typeof e && "length"in e)
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && A.append(e[t]);
                else
                    A.append(e);
                n.loop && t.loopCreate(),
                n.observer && fe.observer || t.update()
            },
            prependSlide: function(e) {
                const t = this
                  , {params: A, $wrapperEl: n, activeIndex: r} = t;
                A.loop && t.loopDestroy();
                let i = r + 1;
                if ("object" == typeof e && "length"in e) {
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && n.prepend(e[t]);
                    i = r + e.length
                } else
                    n.prepend(e);
                A.loop && t.loopCreate(),
                A.observer && fe.observer || t.update(),
                t.slideTo(i, 0, !1)
            },
            addSlide: function(e, t) {
                const A = this
                  , {$wrapperEl: n, params: r, activeIndex: i} = A;
                let s = i;
                r.loop && (s -= A.loopedSlides,
                A.loopDestroy(),
                A.slides = n.children("." + r.slideClass));
                const o = A.slides.length;
                if (e <= 0)
                    return void A.prependSlide(t);
                if (e >= o)
                    return void A.appendSlide(t);
                let a = s > e ? s + 1 : s;
                const l = [];
                for (let t = o - 1; t >= e; t -= 1) {
                    const e = A.slides.eq(t);
                    e.remove(),
                    l.unshift(e)
                }
                if ("object" == typeof t && "length"in t) {
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && n.append(t[e]);
                    a = s > e ? s + t.length : s
                } else
                    n.append(t);
                for (let e = 0; e < l.length; e += 1)
                    n.append(l[e]);
                r.loop && A.loopCreate(),
                r.observer && fe.observer || A.update(),
                r.loop ? A.slideTo(a + A.loopedSlides, 0, !1) : A.slideTo(a, 0, !1)
            },
            removeSlide: function(e) {
                const t = this
                  , {params: A, $wrapperEl: n, activeIndex: r} = t;
                let i = r;
                A.loop && (i -= t.loopedSlides,
                t.loopDestroy(),
                t.slides = n.children("." + A.slideClass));
                let s, o = i;
                if ("object" == typeof e && "length"in e) {
                    for (let A = 0; A < e.length; A += 1)
                        s = e[A],
                        t.slides[s] && t.slides.eq(s).remove(),
                        s < o && (o -= 1);
                    o = Math.max(o, 0)
                } else
                    s = e,
                    t.slides[s] && t.slides.eq(s).remove(),
                    s < o && (o -= 1),
                    o = Math.max(o, 0);
                A.loop && t.loopCreate(),
                A.observer && fe.observer || t.update(),
                A.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
            },
            removeAllSlides: function() {
                const e = this
                  , t = [];
                for (let A = 0; A < e.slides.length; A += 1)
                    t.push(A);
                e.removeSlide(t)
            }
        };
        const ye = function() {
            const e = le.navigator.platform
              , t = le.navigator.userAgent
              , A = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!le.cordova && !le.phonegap),
                phonegap: !(!le.cordova && !le.phonegap),
                electron: !1
            }
              , n = le.screen.width
              , r = le.screen.height
              , i = t.match(/(Android);?[\s\/]+([\d.]+)?/);
            let s = t.match(/(iPad).*OS\s([\d_]+)/);
            const o = t.match(/(iPod)(.*OS\s([\d_]+))?/)
              , a = !s && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , l = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
              , c = t.indexOf("Edge/") >= 0
              , u = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0
              , d = "Win32" === e
              , h = t.toLowerCase().indexOf("electron") >= 0;
            let p = "MacIntel" === e;
            return !s && p && fe.touch && (1024 === n && 1366 === r || 834 === n && 1194 === r || 834 === n && 1112 === r || 768 === n && 1024 === r) && (s = t.match(/(Version)\/([\d.]+)/),
            p = !1),
            A.ie = l,
            A.edge = c,
            A.firefox = u,
            i && !d && (A.os = "android",
            A.osVersion = i[2],
            A.android = !0,
            A.androidChrome = t.toLowerCase().indexOf("chrome") >= 0),
            (s || a || o) && (A.os = "ios",
            A.ios = !0),
            a && !o && (A.osVersion = a[2].replace(/_/g, "."),
            A.iphone = !0),
            s && (A.osVersion = s[2].replace(/_/g, "."),
            A.ipad = !0),
            o && (A.osVersion = o[3] ? o[3].replace(/_/g, ".") : null,
            A.ipod = !0),
            A.ios && A.osVersion && t.indexOf("Version/") >= 0 && "10" === A.osVersion.split(".")[0] && (A.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
            A.webView = !(!(a || s || o) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !le.navigator.standalone) || le.matchMedia && le.matchMedia("(display-mode: standalone)").matches,
            A.webview = A.webView,
            A.standalone = A.webView,
            A.desktop = !(A.ios || A.android) || h,
            A.desktop && (A.electron = h,
            A.macos = p,
            A.windows = d,
            A.macos && (A.os = "macos"),
            A.windows && (A.os = "windows")),
            A.pixelRatio = le.devicePixelRatio || 1,
            A
        }();
        function be(e) {
            const t = this
              , A = t.touchEventsData
              , {params: n, touches: r} = t;
            if (t.animating && n.preventInteractionOnTransition)
                return;
            let i = e;
            i.originalEvent && (i = i.originalEvent);
            const s = ue(i.target);
            if ("wrapper" === n.touchEventsTarget && !s.closest(t.wrapperEl).length)
                return;
            if (A.isTouchEvent = "touchstart" === i.type,
            !A.isTouchEvent && "which"in i && 3 === i.which)
                return;
            if (!A.isTouchEvent && "button"in i && i.button > 0)
                return;
            if (A.isTouched && A.isMoved)
                return;
            if (n.noSwiping && s.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0])
                return void (t.allowClick = !0);
            if (n.swipeHandler && !s.closest(n.swipeHandler)[0])
                return;
            r.currentX = "touchstart" === i.type ? i.targetTouches[0].pageX : i.pageX,
            r.currentY = "touchstart" === i.type ? i.targetTouches[0].pageY : i.pageY;
            const o = r.currentX
              , a = r.currentY
              , l = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection
              , c = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
            if (!l || !(o <= c || o >= le.screen.width - c)) {
                if (pe.extend(A, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }),
                r.startX = o,
                r.startY = a,
                A.touchStartTime = pe.now(),
                t.allowClick = !0,
                t.updateSize(),
                t.swipeDirection = void 0,
                n.threshold > 0 && (A.allowThresholdMove = !1),
                "touchstart" !== i.type) {
                    let e = !0;
                    s.is(A.formElements) && (e = !1),
                    oe.activeElement && ue(oe.activeElement).is(A.formElements) && oe.activeElement !== s[0] && oe.activeElement.blur();
                    const r = e && t.allowTouchMove && n.touchStartPreventDefault;
                    (n.touchStartForcePreventDefault || r) && i.preventDefault()
                }
                t.emit("touchStart", i)
            }
        }
        function Ue(e) {
            const t = this
              , A = t.touchEventsData
              , {params: n, touches: r, rtlTranslate: i} = t;
            let s = e;
            if (s.originalEvent && (s = s.originalEvent),
            !A.isTouched)
                return void (A.startMoving && A.isScrolling && t.emit("touchMoveOpposite", s));
            if (A.isTouchEvent && "touchmove" !== s.type)
                return;
            const o = "touchmove" === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0])
              , a = "touchmove" === s.type ? o.pageX : s.pageX
              , l = "touchmove" === s.type ? o.pageY : s.pageY;
            if (s.preventedByNestedSwiper)
                return r.startX = a,
                void (r.startY = l);
            if (!t.allowTouchMove)
                return t.allowClick = !1,
                void (A.isTouched && (pe.extend(r, {
                    startX: a,
                    startY: l,
                    currentX: a,
                    currentY: l
                }),
                A.touchStartTime = pe.now()));
            if (A.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                if (t.isVertical()) {
                    if (l < r.startY && t.translate <= t.maxTranslate() || l > r.startY && t.translate >= t.minTranslate())
                        return A.isTouched = !1,
                        void (A.isMoved = !1)
                } else if (a < r.startX && t.translate <= t.maxTranslate() || a > r.startX && t.translate >= t.minTranslate())
                    return;
            if (A.isTouchEvent && oe.activeElement && s.target === oe.activeElement && ue(s.target).is(A.formElements))
                return A.isMoved = !0,
                void (t.allowClick = !1);
            if (A.allowTouchCallbacks && t.emit("touchMove", s),
            s.targetTouches && s.targetTouches.length > 1)
                return;
            r.currentX = a,
            r.currentY = l;
            const c = r.currentX - r.startX
              , u = r.currentY - r.startY;
            if (t.params.threshold && Math.sqrt(c ** 2 + u ** 2) < t.params.threshold)
                return;
            if (void 0 === A.isScrolling) {
                let e;
                t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? A.isScrolling = !1 : c * c + u * u >= 25 && (e = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI,
                A.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
            }
            if (A.isScrolling && t.emit("touchMoveOpposite", s),
            void 0 === A.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (A.startMoving = !0)),
            A.isScrolling)
                return void (A.isTouched = !1);
            if (!A.startMoving)
                return;
            t.allowClick = !1,
            !n.cssMode && s.cancelable && s.preventDefault(),
            n.touchMoveStopPropagation && !n.nested && s.stopPropagation(),
            A.isMoved || (n.loop && t.loopFix(),
            A.startTranslate = t.getTranslate(),
            t.setTransition(0),
            t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            A.allowMomentumBounce = !1,
            !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
            t.emit("sliderFirstMove", s)),
            t.emit("sliderMove", s),
            A.isMoved = !0;
            let d = t.isHorizontal() ? c : u;
            r.diff = d,
            d *= n.touchRatio,
            i && (d = -d),
            t.swipeDirection = d > 0 ? "prev" : "next",
            A.currentTranslate = d + A.startTranslate;
            let h = !0
              , p = n.resistanceRatio;
            if (n.touchReleaseOnEdges && (p = 0),
            d > 0 && A.currentTranslate > t.minTranslate() ? (h = !1,
            n.resistance && (A.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + A.startTranslate + d) ** p)) : d < 0 && A.currentTranslate < t.maxTranslate() && (h = !1,
            n.resistance && (A.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - A.startTranslate - d) ** p)),
            h && (s.preventedByNestedSwiper = !0),
            !t.allowSlideNext && "next" === t.swipeDirection && A.currentTranslate < A.startTranslate && (A.currentTranslate = A.startTranslate),
            !t.allowSlidePrev && "prev" === t.swipeDirection && A.currentTranslate > A.startTranslate && (A.currentTranslate = A.startTranslate),
            n.threshold > 0) {
                if (!(Math.abs(d) > n.threshold || A.allowThresholdMove))
                    return void (A.currentTranslate = A.startTranslate);
                if (!A.allowThresholdMove)
                    return A.allowThresholdMove = !0,
                    r.startX = r.currentX,
                    r.startY = r.currentY,
                    A.currentTranslate = A.startTranslate,
                    void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
            }
            n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(),
            t.updateSlidesClasses()),
            n.freeMode && (0 === A.velocities.length && A.velocities.push({
                position: r[t.isHorizontal() ? "startX" : "startY"],
                time: A.touchStartTime
            }),
            A.velocities.push({
                position: r[t.isHorizontal() ? "currentX" : "currentY"],
                time: pe.now()
            })),
            t.updateProgress(A.currentTranslate),
            t.setTranslate(A.currentTranslate))
        }
        function Fe(e) {
            const t = this
              , A = t.touchEventsData
              , {params: n, touches: r, rtlTranslate: i, $wrapperEl: s, slidesGrid: o, snapGrid: a} = t;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent),
            A.allowTouchCallbacks && t.emit("touchEnd", l),
            A.allowTouchCallbacks = !1,
            !A.isTouched)
                return A.isMoved && n.grabCursor && t.setGrabCursor(!1),
                A.isMoved = !1,
                void (A.startMoving = !1);
            n.grabCursor && A.isMoved && A.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const c = pe.now()
              , u = c - A.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(l),
            t.emit("tap click", l),
            u < 300 && c - A.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)),
            A.lastClickTime = pe.now(),
            pe.nextTick(()=>{
                t.destroyed || (t.allowClick = !0)
            }
            ),
            !A.isTouched || !A.isMoved || !t.swipeDirection || 0 === r.diff || A.currentTranslate === A.startTranslate)
                return A.isTouched = !1,
                A.isMoved = !1,
                void (A.startMoving = !1);
            let d;
            if (A.isTouched = !1,
            A.isMoved = !1,
            A.startMoving = !1,
            d = n.followFinger ? i ? t.translate : -t.translate : -A.currentTranslate,
            n.cssMode)
                return;
            if (n.freeMode) {
                if (d < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (d > -t.maxTranslate())
                    return void (t.slides.length < a.length ? t.slideTo(a.length - 1) : t.slideTo(t.slides.length - 1));
                if (n.freeModeMomentum) {
                    if (A.velocities.length > 1) {
                        const e = A.velocities.pop()
                          , r = A.velocities.pop()
                          , i = e.position - r.position
                          , s = e.time - r.time;
                        t.velocity = i / s,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                        (s > 150 || pe.now() - e.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= n.freeModeMomentumVelocityRatio,
                    A.velocities.length = 0;
                    let e = 1e3 * n.freeModeMomentumRatio;
                    const r = t.velocity * e;
                    let o = t.translate + r;
                    i && (o = -o);
                    let l, c = !1;
                    const u = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                    let d;
                    if (o < t.maxTranslate())
                        n.freeModeMomentumBounce ? (o + t.maxTranslate() < -u && (o = t.maxTranslate() - u),
                        l = t.maxTranslate(),
                        c = !0,
                        A.allowMomentumBounce = !0) : o = t.maxTranslate(),
                        n.loop && n.centeredSlides && (d = !0);
                    else if (o > t.minTranslate())
                        n.freeModeMomentumBounce ? (o - t.minTranslate() > u && (o = t.minTranslate() + u),
                        l = t.minTranslate(),
                        c = !0,
                        A.allowMomentumBounce = !0) : o = t.minTranslate(),
                        n.loop && n.centeredSlides && (d = !0);
                    else if (n.freeModeSticky) {
                        let e;
                        for (let t = 0; t < a.length; t += 1)
                            if (a[t] > -o) {
                                e = t;
                                break
                            }
                        o = Math.abs(a[e] - o) < Math.abs(a[e - 1] - o) || "next" === t.swipeDirection ? a[e] : a[e - 1],
                        o = -o
                    }
                    if (d && t.once("transitionEnd", ()=>{
                        t.loopFix()
                    }
                    ),
                    0 !== t.velocity) {
                        if (e = i ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity),
                        n.freeModeSticky) {
                            const A = Math.abs((i ? -o : o) - t.translate)
                              , r = t.slidesSizesGrid[t.activeIndex];
                            e = A < r ? n.speed : A < 2 * r ? 1.5 * n.speed : 2.5 * n.speed
                        }
                    } else if (n.freeModeSticky)
                        return void t.slideToClosest();
                    n.freeModeMomentumBounce && c ? (t.updateProgress(l),
                    t.setTransition(e),
                    t.setTranslate(o),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating = !0,
                    s.transitionEnd(()=>{
                        t && !t.destroyed && A.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(n.speed),
                        setTimeout(()=>{
                            t.setTranslate(l),
                            s.transitionEnd(()=>{
                                t && !t.destroyed && t.transitionEnd()
                            }
                            )
                        }
                        , 0))
                    }
                    )) : t.velocity ? (t.updateProgress(o),
                    t.setTransition(e),
                    t.setTranslate(o),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                    s.transitionEnd(()=>{
                        t && !t.destroyed && t.transitionEnd()
                    }
                    ))) : t.updateProgress(o),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                } else if (n.freeModeSticky)
                    return void t.slideToClosest();
                return void ((!n.freeModeMomentum || u >= n.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses()))
            }
            let h = 0
              , p = t.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                void 0 !== o[e + t] ? d >= o[e] && d < o[e + t] && (h = e,
                p = o[e + t] - o[e]) : d >= o[e] && (h = e,
                p = o[o.length - 1] - o[o.length - 2])
            }
            const f = (d - o[h]) / p
              , g = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
            if (u > n.longSwipesMs) {
                if (!n.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (f >= n.longSwipesRatio ? t.slideTo(h + g) : t.slideTo(h)),
                "prev" === t.swipeDirection && (f > 1 - n.longSwipesRatio ? t.slideTo(h + g) : t.slideTo(h))
            } else {
                if (!n.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(h + g) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(h + g),
                "prev" === t.swipeDirection && t.slideTo(h))
            }
        }
        function Te() {
            const e = this
              , {params: t, el: A} = e;
            if (A && 0 === A.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: n, allowSlidePrev: r, snapGrid: i} = e;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            e.allowSlidePrev = r,
            e.allowSlideNext = n,
            e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
        }
        function He(e) {
            const t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
        function Se() {
            const e = this
              , {wrapperEl: t, rtlTranslate: A} = e;
            let n;
            e.previousTranslate = e.translate,
            e.isHorizontal() ? e.translate = A ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop,
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
            const r = e.maxTranslate() - e.minTranslate();
            n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
            n !== e.progress && e.updateProgress(A ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1)
        }
        let Ne = !1;
        function xe() {}
        var Ie = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        };
        const Oe = {
            update: Be,
            translate: me,
            transition: we,
            slide: ve,
            loop: Ee,
            grabCursor: Ce,
            manipulation: Qe,
            events: {
                attachEvents: function() {
                    const e = this
                      , {params: t, touchEvents: A, el: n, wrapperEl: r} = e;
                    e.onTouchStart = be.bind(e),
                    e.onTouchMove = Ue.bind(e),
                    e.onTouchEnd = Fe.bind(e),
                    t.cssMode && (e.onScroll = Se.bind(e)),
                    e.onClick = He.bind(e);
                    const i = !!t.nested;
                    if (!fe.touch && fe.pointerEvents)
                        n.addEventListener(A.start, e.onTouchStart, !1),
                        oe.addEventListener(A.move, e.onTouchMove, i),
                        oe.addEventListener(A.end, e.onTouchEnd, !1);
                    else {
                        if (fe.touch) {
                            const r = !("touchstart" !== A.start || !fe.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            n.addEventListener(A.start, e.onTouchStart, r),
                            n.addEventListener(A.move, e.onTouchMove, fe.passiveListener ? {
                                passive: !1,
                                capture: i
                            } : i),
                            n.addEventListener(A.end, e.onTouchEnd, r),
                            A.cancel && n.addEventListener(A.cancel, e.onTouchEnd, r),
                            Ne || (oe.addEventListener("touchstart", xe),
                            Ne = !0)
                        }
                        (t.simulateTouch && !ye.ios && !ye.android || t.simulateTouch && !fe.touch && ye.ios) && (n.addEventListener("mousedown", e.onTouchStart, !1),
                        oe.addEventListener("mousemove", e.onTouchMove, i),
                        oe.addEventListener("mouseup", e.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0),
                    t.cssMode && r.addEventListener("scroll", e.onScroll),
                    t.updateOnWindowResize ? e.on(ye.ios || ye.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Te, !0) : e.on("observerUpdate", Te, !0)
                },
                detachEvents: function() {
                    const e = this
                      , {params: t, touchEvents: A, el: n, wrapperEl: r} = e
                      , i = !!t.nested;
                    if (!fe.touch && fe.pointerEvents)
                        n.removeEventListener(A.start, e.onTouchStart, !1),
                        oe.removeEventListener(A.move, e.onTouchMove, i),
                        oe.removeEventListener(A.end, e.onTouchEnd, !1);
                    else {
                        if (fe.touch) {
                            const r = !("onTouchStart" !== A.start || !fe.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            n.removeEventListener(A.start, e.onTouchStart, r),
                            n.removeEventListener(A.move, e.onTouchMove, i),
                            n.removeEventListener(A.end, e.onTouchEnd, r),
                            A.cancel && n.removeEventListener(A.cancel, e.onTouchEnd, r)
                        }
                        (t.simulateTouch && !ye.ios && !ye.android || t.simulateTouch && !fe.touch && ye.ios) && (n.removeEventListener("mousedown", e.onTouchStart, !1),
                        oe.removeEventListener("mousemove", e.onTouchMove, i),
                        oe.removeEventListener("mouseup", e.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0),
                    t.cssMode && r.removeEventListener("scroll", e.onScroll),
                    e.off(ye.ios || ye.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Te)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this
                      , {activeIndex: t, initialized: A, loopedSlides: n=0, params: r, $el: i} = e
                      , s = r.breakpoints;
                    if (!s || s && 0 === Object.keys(s).length)
                        return;
                    const o = e.getBreakpoint(s);
                    if (o && e.currentBreakpoint !== o) {
                        const a = o in s ? s[o] : void 0;
                        a && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(e=>{
                            const t = a[e];
                            void 0 !== t && (a[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        );
                        const l = a || e.originalParams
                          , c = r.slidesPerColumn > 1
                          , u = l.slidesPerColumn > 1;
                        c && !u ? i.removeClass(`${r.containerModifierClass}multirow ${r.containerModifierClass}multirow-column`) : !c && u && (i.addClass(r.containerModifierClass + "multirow"),
                        "column" === l.slidesPerColumnFill && i.addClass(r.containerModifierClass + "multirow-column"));
                        const d = l.direction && l.direction !== r.direction
                          , h = r.loop && (l.slidesPerView !== r.slidesPerView || d);
                        d && A && e.changeDirection(),
                        pe.extend(e.params, l),
                        pe.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }),
                        e.currentBreakpoint = o,
                        h && A && (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - n + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", l)
                    }
                },
                getBreakpoint: function(e) {
                    if (!e)
                        return;
                    let t = !1;
                    const A = Object.keys(e).map(e=>{
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {
                                value: le.innerHeight * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    );
                    A.sort((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < A.length; e += 1) {
                        const {point: n, value: r} = A[e];
                        r <= le.innerWidth && (t = n)
                    }
                    return t || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this
                      , t = e.params
                      , A = e.isLocked
                      , n = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && n ? e.isLocked = n <= e.size : e.isLocked = 1 === e.snapGrid.length,
                    e.allowSlideNext = !e.isLocked,
                    e.allowSlidePrev = !e.isLocked,
                    A !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                    A && A !== e.isLocked && (e.isEnd = !1,
                    e.navigation && e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    const {classNames: e, params: t, rtl: A, $el: n} = this
                      , r = [];
                    r.push("initialized"),
                    r.push(t.direction),
                    t.freeMode && r.push("free-mode"),
                    t.autoHeight && r.push("autoheight"),
                    A && r.push("rtl"),
                    t.slidesPerColumn > 1 && (r.push("multirow"),
                    "column" === t.slidesPerColumnFill && r.push("multirow-column")),
                    ye.android && r.push("android"),
                    ye.ios && r.push("ios"),
                    t.cssMode && r.push("css-mode"),
                    r.forEach(A=>{
                        e.push(t.containerModifierClass + A)
                    }
                    ),
                    n.addClass(e.join(" "))
                },
                removeClasses: function() {
                    const {$el: e, classNames: t} = this;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, A, n, r, i) {
                    let s;
                    function o() {
                        i && i()
                    }
                    ue(e).parent("picture")[0] || e.complete && r ? o() : t ? (s = new le.Image,
                    s.onload = o,
                    s.onerror = o,
                    n && (s.sizes = n),
                    A && (s.srcset = A),
                    t && (s.src = t)) : o()
                },
                preloadImages: function() {
                    const e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                        e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let A = 0; A < e.imagesToLoad.length; A += 1) {
                        const n = e.imagesToLoad[A];
                        e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }
          , ke = {};
        class Me extends ge {
            constructor(...e) {
                let t, A;
                1 === e.length && e[0].constructor && e[0].constructor === Object ? A = e[0] : [t,A] = e,
                A || (A = {}),
                A = pe.extend({}, A),
                t && !A.el && (A.el = t),
                super(A),
                Object.keys(Oe).forEach(e=>{
                    Object.keys(Oe[e]).forEach(t=>{
                        Me.prototype[t] || (Me.prototype[t] = Oe[e][t])
                    }
                    )
                }
                );
                const n = this;
                void 0 === n.modules && (n.modules = {}),
                Object.keys(n.modules).forEach(e=>{
                    const t = n.modules[e];
                    if (t.params) {
                        const e = Object.keys(t.params)[0]
                          , n = t.params[e];
                        if ("object" != typeof n || null === n)
                            return;
                        if (!(e in A) || !("enabled"in n))
                            return;
                        !0 === A[e] && (A[e] = {
                            enabled: !0
                        }),
                        "object" != typeof A[e] || "enabled"in A[e] || (A[e].enabled = !0),
                        A[e] || (A[e] = {
                            enabled: !1
                        })
                    }
                }
                );
                const r = pe.extend({}, Ie);
                n.useModulesParams(r),
                n.params = pe.extend({}, r, ke, A),
                n.originalParams = pe.extend({}, n.params),
                n.passedParams = pe.extend({}, A),
                n.$ = ue;
                const i = ue(n.params.el);
                if (t = i[0],
                !t)
                    return;
                if (i.length > 1) {
                    const e = [];
                    return i.each((t,n)=>{
                        const r = pe.extend({}, A, {
                            el: n
                        });
                        e.push(new Me(r))
                    }
                    ),
                    e
                }
                let s;
                return t.swiper = n,
                i.data("swiper", n),
                t && t.shadowRoot && t.shadowRoot.querySelector ? (s = ue(t.shadowRoot.querySelector("." + n.params.wrapperClass)),
                s.children = e=>i.children(e)) : s = i.children("." + n.params.wrapperClass),
                pe.extend(n, {
                    $el: i,
                    el: t,
                    $wrapperEl: s,
                    wrapperEl: s[0],
                    classNames: [],
                    slides: ue(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: ()=>"horizontal" === n.params.direction,
                    isVertical: ()=>"vertical" === n.params.direction,
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === n.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === s.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: n.params.allowSlideNext,
                    allowSlidePrev: n.params.allowSlidePrev,
                    touchEvents: function() {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
                        let t = ["mousedown", "mousemove", "mouseup"];
                        return fe.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]),
                        n.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        },
                        n.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        },
                        fe.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: pe.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: n.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                n.useModules(),
                n.params.init && n.init(),
                n
            }
            slidesPerViewDynamic() {
                const {params: e, slides: t, slidesGrid: A, size: n, activeIndex: r} = this;
                let i = 1;
                if (e.centeredSlides) {
                    let e, A = t[r].swiperSlideSize;
                    for (let s = r + 1; s < t.length; s += 1)
                        t[s] && !e && (A += t[s].swiperSlideSize,
                        i += 1,
                        A > n && (e = !0));
                    for (let s = r - 1; s >= 0; s -= 1)
                        t[s] && !e && (A += t[s].swiperSlideSize,
                        i += 1,
                        A > n && (e = !0))
                } else
                    for (let e = r + 1; e < t.length; e += 1)
                        A[e] - A[r] < n && (i += 1);
                return i
            }
            update() {
                const e = this;
                if (!e || e.destroyed)
                    return;
                const {snapGrid: t, params: A} = e;
                function n() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate
                      , A = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(A),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                let r;
                A.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (n(),
                e.params.autoHeight && e.updateAutoHeight()) : (r = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                r || n()),
                A.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            changeDirection(e, t=!0) {
                const A = this
                  , n = A.params.direction;
                return e || (e = "horizontal" === n ? "vertical" : "horizontal"),
                e === n || "horizontal" !== e && "vertical" !== e || (A.$el.removeClass(`${A.params.containerModifierClass}${n}`).addClass(`${A.params.containerModifierClass}${e}`),
                A.params.direction = e,
                A.slides.each((t,A)=>{
                    "vertical" === e ? A.style.width = "" : A.style.height = ""
                }
                ),
                A.emit("changeDirection"),
                t && A.update()),
                A
            }
            init() {
                const e = this;
                e.initialized || (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                e.addClasses(),
                e.params.loop && e.loopCreate(),
                e.updateSize(),
                e.updateSlides(),
                e.params.watchOverflow && e.checkOverflow(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                e.attachEvents(),
                e.initialized = !0,
                e.emit("init"))
            }
            destroy(e=!0, t=!0) {
                const A = this
                  , {params: n, $el: r, $wrapperEl: i, slides: s} = A;
                return void 0 === A.params || A.destroyed || (A.emit("beforeDestroy"),
                A.initialized = !1,
                A.detachEvents(),
                n.loop && A.loopDestroy(),
                t && (A.removeClasses(),
                r.removeAttr("style"),
                i.removeAttr("style"),
                s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                A.emit("destroy"),
                Object.keys(A.eventsListeners).forEach(e=>{
                    A.off(e)
                }
                ),
                !1 !== e && (A.$el[0].swiper = null,
                A.$el.data("swiper", null),
                pe.deleteProps(A)),
                A.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                pe.extend(ke, e)
            }
            static get extendedDefaults() {
                return ke
            }
            static get defaults() {
                return Ie
            }
            static get Class() {
                return ge
            }
            static get $() {
                return ue
            }
        }
        var Pe = {
            name: "device",
            proto: {
                device: ye
            },
            static: {
                device: ye
            }
        }
          , Ke = {
            name: "support",
            proto: {
                support: fe
            },
            static: {
                support: fe
            }
        };
        const Le = {
            isEdge: !!le.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                const e = le.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(le.navigator.userAgent)
        };
        var De = {
            name: "browser",
            proto: {
                browser: Le
            },
            static: {
                browser: Le
            }
        }
          , Re = {
            name: "resize",
            create() {
                const e = this;
                pe.extend(e, {
                    resize: {
                        resizeHandler() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                            e.emit("resize"))
                        },
                        orientationChangeHandler() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init() {
                    le.addEventListener("resize", this.resize.resizeHandler),
                    le.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy() {
                    le.removeEventListener("resize", this.resize.resizeHandler),
                    le.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        };
        const _e = {
            func: le.MutationObserver || le.WebkitMutationObserver,
            attach(e, t={}) {
                const A = this
                  , n = new (0,
                _e.func)(e=>{
                    if (1 === e.length)
                        return void A.emit("observerUpdate", e[0]);
                    const t = function() {
                        A.emit("observerUpdate", e[0])
                    };
                    le.requestAnimationFrame ? le.requestAnimationFrame(t) : le.setTimeout(t, 0)
                }
                );
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }),
                A.observer.observers.push(n)
            },
            init() {
                const e = this;
                if (fe.observer && e.params.observer) {
                    if (e.params.observeParents) {
                        const t = e.$el.parents();
                        for (let A = 0; A < t.length; A += 1)
                            e.observer.attach(t[A])
                    }
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }),
                    e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy() {
                this.observer.observers.forEach(e=>{
                    e.disconnect()
                }
                ),
                this.observer.observers = []
            }
        };
        var ze = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create() {
                pe.extend(this, {
                    observer: {
                        init: _e.init.bind(this),
                        attach: _e.attach.bind(this),
                        destroy: _e.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init() {
                    this.observer.init()
                },
                destroy() {
                    this.observer.destroy()
                }
            }
        };
        const Xe = {
            update(e) {
                const t = this
                  , {slidesPerView: A, slidesPerGroup: n, centeredSlides: r} = t.params
                  , {addSlidesBefore: i, addSlidesAfter: s} = t.params.virtual
                  , {from: o, to: a, slides: l, slidesGrid: c, renderSlide: u, offset: d} = t.virtual;
                t.updateActiveIndex();
                const h = t.activeIndex || 0;
                let p, f, g;
                p = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                r ? (f = Math.floor(A / 2) + n + i,
                g = Math.floor(A / 2) + n + s) : (f = A + (n - 1) + i,
                g = n + s);
                const B = Math.max((h || 0) - g, 0)
                  , m = Math.min((h || 0) + f, l.length - 1)
                  , w = (t.slidesGrid[B] || 0) - (t.slidesGrid[0] || 0);
                function v() {
                    t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses(),
                    t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (pe.extend(t.virtual, {
                    from: B,
                    to: m,
                    offset: w,
                    slidesGrid: t.slidesGrid
                }),
                o === B && a === m && !e)
                    return t.slidesGrid !== c && w !== d && t.slides.css(p, w + "px"),
                    void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return t.params.virtual.renderExternal.call(t, {
                        offset: w,
                        from: B,
                        to: m,
                        slides: function() {
                            const e = [];
                            for (let t = B; t <= m; t += 1)
                                e.push(l[t]);
                            return e
                        }()
                    }),
                    void v();
                const E = []
                  , C = [];
                if (e)
                    t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (let e = o; e <= a; e += 1)
                        (e < B || e > m) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                for (let t = 0; t < l.length; t += 1)
                    t >= B && t <= m && (void 0 === a || e ? C.push(t) : (t > a && C.push(t),
                    t < o && E.push(t)));
                C.forEach(e=>{
                    t.$wrapperEl.append(u(l[e], e))
                }
                ),
                E.sort((e,t)=>t - e).forEach(e=>{
                    t.$wrapperEl.prepend(u(l[e], e))
                }
                ),
                t.$wrapperEl.children(".swiper-slide").css(p, w + "px"),
                v()
            },
            renderSlide(e, t) {
                const A = this
                  , n = A.params.virtual;
                if (n.cache && A.virtual.cache[t])
                    return A.virtual.cache[t];
                const r = n.renderSlide ? ue(n.renderSlide.call(A, e, t)) : ue(`<div class="${A.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t),
                n.cache && (A.virtual.cache[t] = r),
                r
            },
            appendSlide(e) {
                const t = this;
                if ("object" == typeof e && "length"in e)
                    for (let A = 0; A < e.length; A += 1)
                        e[A] && t.virtual.slides.push(e[A]);
                else
                    t.virtual.slides.push(e);
                t.virtual.update(!0)
            },
            prependSlide(e) {
                const t = this
                  , A = t.activeIndex;
                let n = A + 1
                  , r = 1;
                if (Array.isArray(e)) {
                    for (let A = 0; A < e.length; A += 1)
                        e[A] && t.virtual.slides.unshift(e[A]);
                    n = A + e.length,
                    r = e.length
                } else
                    t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    const e = t.virtual.cache
                      , A = {};
                    Object.keys(e).forEach(t=>{
                        const n = e[t]
                          , i = n.attr("data-swiper-slide-index");
                        i && n.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                        A[parseInt(t, 10) + r] = n
                    }
                    ),
                    t.virtual.cache = A
                }
                t.virtual.update(!0),
                t.slideTo(n, 0)
            },
            removeSlide(e) {
                const t = this;
                if (null == e)
                    return;
                let A = t.activeIndex;
                if (Array.isArray(e))
                    for (let n = e.length - 1; n >= 0; n -= 1)
                        t.virtual.slides.splice(e[n], 1),
                        t.params.virtual.cache && delete t.virtual.cache[e[n]],
                        e[n] < A && (A -= 1),
                        A = Math.max(A, 0);
                else
                    t.virtual.slides.splice(e, 1),
                    t.params.virtual.cache && delete t.virtual.cache[e],
                    e < A && (A -= 1),
                    A = Math.max(A, 0);
                t.virtual.update(!0),
                t.slideTo(A, 0)
            },
            removeAllSlides() {
                const e = this;
                e.virtual.slides = [],
                e.params.virtual.cache && (e.virtual.cache = {}),
                e.virtual.update(!0),
                e.slideTo(0, 0)
            }
        };
        var Ve = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create() {
                pe.extend(this, {
                    virtual: {
                        update: Xe.update.bind(this),
                        appendSlide: Xe.appendSlide.bind(this),
                        prependSlide: Xe.prependSlide.bind(this),
                        removeSlide: Xe.removeSlide.bind(this),
                        removeAllSlides: Xe.removeAllSlides.bind(this),
                        renderSlide: Xe.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (!e.params.virtual.enabled)
                        return;
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    const t = {
                        watchSlidesProgress: !0
                    };
                    pe.extend(e.params, t),
                    pe.extend(e.originalParams, t),
                    e.params.initialSlide || e.virtual.update()
                },
                setTranslate() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        };
        const Ge = {
            handle(e) {
                const t = this
                  , {rtlTranslate: A} = t;
                let n = e;
                n.originalEvent && (n = n.originalEvent);
                const r = n.keyCode || n.charCode
                  , i = t.params.keyboard.pageUpDown
                  , s = i && 33 === r
                  , o = i && 34 === r
                  , a = 37 === r
                  , l = 39 === r
                  , c = 38 === r
                  , u = 40 === r;
                if (!t.allowSlideNext && (t.isHorizontal() && l || t.isVertical() && u || o))
                    return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && a || t.isVertical() && c || s))
                    return !1;
                if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || oe.activeElement && oe.activeElement.nodeName && ("input" === oe.activeElement.nodeName.toLowerCase() || "textarea" === oe.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (s || o || a || l || c || u)) {
                        let e = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                            return;
                        const n = le.innerWidth
                          , r = le.innerHeight
                          , i = t.$el.offset();
                        A && (i.left -= t.$el[0].scrollLeft);
                        const s = [[i.left, i.top], [i.left + t.width, i.top], [i.left, i.top + t.height], [i.left + t.width, i.top + t.height]];
                        for (let t = 0; t < s.length; t += 1) {
                            const A = s[t];
                            A[0] >= 0 && A[0] <= n && A[1] >= 0 && A[1] <= r && (e = !0)
                        }
                        if (!e)
                            return
                    }
                    t.isHorizontal() ? ((s || o || a || l) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                    ((o || l) && !A || (s || a) && A) && t.slideNext(),
                    ((s || a) && !A || (o || l) && A) && t.slidePrev()) : ((s || o || c || u) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                    (o || u) && t.slideNext(),
                    (s || c) && t.slidePrev()),
                    t.emit("keyPress", r)
                }
            },
            enable() {
                this.keyboard.enabled || (ue(oe).on("keydown", this.keyboard.handle),
                this.keyboard.enabled = !0)
            },
            disable() {
                this.keyboard.enabled && (ue(oe).off("keydown", this.keyboard.handle),
                this.keyboard.enabled = !1)
            }
        };
        var Ye = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create() {
                pe.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: Ge.enable.bind(this),
                        disable: Ge.disable.bind(this),
                        handle: Ge.handle.bind(this)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy() {
                    const e = this;
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        };
        const Je = {
            lastScrollTime: pe.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: ()=>le.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                let e = "onwheel"in oe;
                if (!e) {
                    const t = oe.createElement("div");
                    t.setAttribute("onwheel", "return;"),
                    e = "function" == typeof t.onwheel
                }
                return !e && oe.implementation && oe.implementation.hasFeature && !0 !== oe.implementation.hasFeature("", "") && (e = oe.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }() ? "wheel" : "mousewheel",
            normalize(e) {
                let t = 0
                  , A = 0
                  , n = 0
                  , r = 0;
                return "detail"in e && (A = e.detail),
                "wheelDelta"in e && (A = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (A = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = A,
                A = 0),
                n = 10 * t,
                r = 10 * A,
                "deltaY"in e && (r = e.deltaY),
                "deltaX"in e && (n = e.deltaX),
                e.shiftKey && !n && (n = r,
                r = 0),
                (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40,
                r *= 40) : (n *= 800,
                r *= 800)),
                n && !t && (t = n < 1 ? -1 : 1),
                r && !A && (A = r < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: A,
                    pixelX: n,
                    pixelY: r
                }
            },
            handleMouseEnter() {
                this.mouseEntered = !0
            },
            handleMouseLeave() {
                this.mouseEntered = !1
            },
            handle(e) {
                let t = e;
                const A = this
                  , n = A.params.mousewheel;
                A.params.cssMode && t.preventDefault();
                let r = A.$el;
                if ("container" !== A.params.mousewheel.eventsTarged && (r = ue(A.params.mousewheel.eventsTarged)),
                !A.mouseEntered && !r[0].contains(t.target) && !n.releaseOnEdges)
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                let i = 0;
                const s = A.rtlTranslate ? -1 : 1
                  , o = Je.normalize(t);
                if (n.forceToAxis)
                    if (A.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                            return !0;
                        i = -o.pixelX * s
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                            return !0;
                        i = -o.pixelY
                    }
                else
                    i = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                if (0 === i)
                    return !0;
                if (n.invert && (i = -i),
                A.params.freeMode) {
                    const e = {
                        time: pe.now(),
                        delta: Math.abs(i),
                        direction: Math.sign(i)
                    }
                      , {lastEventBeforeSnap: r} = A.mousewheel
                      , s = r && e.time < r.time + 500 && e.delta <= r.delta && e.direction === r.direction;
                    if (!s) {
                        A.mousewheel.lastEventBeforeSnap = void 0,
                        A.params.loop && A.loopFix();
                        let r = A.getTranslate() + i * n.sensitivity;
                        const o = A.isBeginning
                          , a = A.isEnd;
                        if (r >= A.minTranslate() && (r = A.minTranslate()),
                        r <= A.maxTranslate() && (r = A.maxTranslate()),
                        A.setTransition(0),
                        A.setTranslate(r),
                        A.updateProgress(),
                        A.updateActiveIndex(),
                        A.updateSlidesClasses(),
                        (!o && A.isBeginning || !a && A.isEnd) && A.updateSlidesClasses(),
                        A.params.freeModeSticky) {
                            clearTimeout(A.mousewheel.timeout),
                            A.mousewheel.timeout = void 0;
                            const t = A.mousewheel.recentWheelEvents;
                            t.length >= 15 && t.shift();
                            const n = t.length ? t[t.length - 1] : void 0
                              , r = t[0];
                            if (t.push(e),
                            n && (e.delta > n.delta || e.direction !== n.direction))
                                t.splice(0);
                            else if (t.length >= 15 && e.time - r.time < 500 && r.delta - e.delta >= 1 && e.delta <= 6) {
                                const n = i > 0 ? .8 : .2;
                                A.mousewheel.lastEventBeforeSnap = e,
                                t.splice(0),
                                A.mousewheel.timeout = pe.nextTick(()=>{
                                    A.slideToClosest(A.params.speed, !0, void 0, n)
                                }
                                , 0)
                            }
                            A.mousewheel.timeout || (A.mousewheel.timeout = pe.nextTick(()=>{
                                A.mousewheel.lastEventBeforeSnap = e,
                                t.splice(0),
                                A.slideToClosest(A.params.speed, !0, void 0, .5)
                            }
                            , 500))
                        }
                        if (s || A.emit("scroll", t),
                        A.params.autoplay && A.params.autoplayDisableOnInteraction && A.autoplay.stop(),
                        r === A.minTranslate() || r === A.maxTranslate())
                            return !0
                    }
                } else {
                    const t = {
                        time: pe.now(),
                        delta: Math.abs(i),
                        direction: Math.sign(i),
                        raw: e
                    }
                      , n = A.mousewheel.recentWheelEvents;
                    n.length >= 2 && n.shift();
                    const r = n.length ? n[n.length - 1] : void 0;
                    if (n.push(t),
                    r ? (t.direction !== r.direction || t.delta > r.delta || t.time > r.time + 150) && A.mousewheel.animateSlider(t) : A.mousewheel.animateSlider(t),
                    A.mousewheel.releaseScroll(t))
                        return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
            },
            animateSlider(e) {
                const t = this;
                return e.delta >= 6 && pe.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
                t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
                t.emit("scroll", e.raw)),
                t.mousewheel.lastScrollTime = (new le.Date).getTime(),
                !1)
            },
            releaseScroll(e) {
                const t = this
                  , A = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && A.releaseOnEdges)
                        return !0
                } else if (t.isBeginning && !t.params.loop && A.releaseOnEdges)
                    return !0;
                return !1
            },
            enable() {
                const e = this
                  , t = Je.event();
                if (e.params.cssMode)
                    return e.wrapperEl.removeEventListener(t, e.mousewheel.handle),
                    !0;
                if (!t)
                    return !1;
                if (e.mousewheel.enabled)
                    return !1;
                let A = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (A = ue(e.params.mousewheel.eventsTarged)),
                A.on("mouseenter", e.mousewheel.handleMouseEnter),
                A.on("mouseleave", e.mousewheel.handleMouseLeave),
                A.on(t, e.mousewheel.handle),
                e.mousewheel.enabled = !0,
                !0
            },
            disable() {
                const e = this
                  , t = Je.event();
                if (e.params.cssMode)
                    return e.wrapperEl.addEventListener(t, e.mousewheel.handle),
                    !0;
                if (!t)
                    return !1;
                if (!e.mousewheel.enabled)
                    return !1;
                let A = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (A = ue(e.params.mousewheel.eventsTarged)),
                A.off(t, e.mousewheel.handle),
                e.mousewheel.enabled = !1,
                !0
            }
        };
        const We = {
            update() {
                const e = this
                  , t = e.params.navigation;
                if (e.params.loop)
                    return;
                const {$nextEl: A, $prevEl: n} = e.navigation;
                n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass),
                n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                A && A.length > 0 && (e.isEnd ? A.addClass(t.disabledClass) : A.removeClass(t.disabledClass),
                A[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            },
            onPrevClick(e) {
                e.preventDefault(),
                this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick(e) {
                e.preventDefault(),
                this.isEnd && !this.params.loop || this.slideNext()
            },
            init() {
                const e = this
                  , t = e.params.navigation;
                if (!t.nextEl && !t.prevEl)
                    return;
                let A, n;
                t.nextEl && (A = ue(t.nextEl),
                e.params.uniqueNavElements && "string" == typeof t.nextEl && A.length > 1 && 1 === e.$el.find(t.nextEl).length && (A = e.$el.find(t.nextEl))),
                t.prevEl && (n = ue(t.prevEl),
                e.params.uniqueNavElements && "string" == typeof t.prevEl && n.length > 1 && 1 === e.$el.find(t.prevEl).length && (n = e.$el.find(t.prevEl))),
                A && A.length > 0 && A.on("click", e.navigation.onNextClick),
                n && n.length > 0 && n.on("click", e.navigation.onPrevClick),
                pe.extend(e.navigation, {
                    $nextEl: A,
                    nextEl: A && A[0],
                    $prevEl: n,
                    prevEl: n && n[0]
                })
            },
            destroy() {
                const e = this
                  , {$nextEl: t, $prevEl: A} = e.navigation;
                t && t.length && (t.off("click", e.navigation.onNextClick),
                t.removeClass(e.params.navigation.disabledClass)),
                A && A.length && (A.off("click", e.navigation.onPrevClick),
                A.removeClass(e.params.navigation.disabledClass))
            }
        };
        const $e = {
            update() {
                const e = this
                  , t = e.rtl
                  , A = e.params.pagination;
                if (!A.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , r = e.pagination.$el;
                let i;
                const s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? (i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
                i > n - 1 - 2 * e.loopedSlides && (i -= n - 2 * e.loopedSlides),
                i > s - 1 && (i -= s),
                i < 0 && "bullets" !== e.params.paginationType && (i = s + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === A.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    const n = e.pagination.bullets;
                    let s, o, a;
                    if (A.dynamicBullets && (e.pagination.bulletSize = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (A.dynamicMainBullets + 4) + "px"),
                    A.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex,
                    e.pagination.dynamicBulletIndex > A.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = A.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    s = i - e.pagination.dynamicBulletIndex,
                    o = s + (Math.min(n.length, A.dynamicMainBullets) - 1),
                    a = (o + s) / 2),
                    n.removeClass(`${A.bulletActiveClass} ${A.bulletActiveClass}-next ${A.bulletActiveClass}-next-next ${A.bulletActiveClass}-prev ${A.bulletActiveClass}-prev-prev ${A.bulletActiveClass}-main`),
                    r.length > 1)
                        n.each((e,t)=>{
                            const n = ue(t)
                              , r = n.index();
                            r === i && n.addClass(A.bulletActiveClass),
                            A.dynamicBullets && (r >= s && r <= o && n.addClass(A.bulletActiveClass + "-main"),
                            r === s && n.prev().addClass(A.bulletActiveClass + "-prev").prev().addClass(A.bulletActiveClass + "-prev-prev"),
                            r === o && n.next().addClass(A.bulletActiveClass + "-next").next().addClass(A.bulletActiveClass + "-next-next"))
                        }
                        );
                    else {
                        const t = n.eq(i)
                          , r = t.index();
                        if (t.addClass(A.bulletActiveClass),
                        A.dynamicBullets) {
                            const t = n.eq(s)
                              , i = n.eq(o);
                            for (let e = s; e <= o; e += 1)
                                n.eq(e).addClass(A.bulletActiveClass + "-main");
                            if (e.params.loop)
                                if (r >= n.length - A.dynamicMainBullets) {
                                    for (let e = A.dynamicMainBullets; e >= 0; e -= 1)
                                        n.eq(n.length - e).addClass(A.bulletActiveClass + "-main");
                                    n.eq(n.length - A.dynamicMainBullets - 1).addClass(A.bulletActiveClass + "-prev")
                                } else
                                    t.prev().addClass(A.bulletActiveClass + "-prev").prev().addClass(A.bulletActiveClass + "-prev-prev"),
                                    i.next().addClass(A.bulletActiveClass + "-next").next().addClass(A.bulletActiveClass + "-next-next");
                            else
                                t.prev().addClass(A.bulletActiveClass + "-prev").prev().addClass(A.bulletActiveClass + "-prev-prev"),
                                i.next().addClass(A.bulletActiveClass + "-next").next().addClass(A.bulletActiveClass + "-next-next")
                        }
                    }
                    if (A.dynamicBullets) {
                        const r = Math.min(n.length, A.dynamicMainBullets + 4)
                          , i = (e.pagination.bulletSize * r - e.pagination.bulletSize) / 2 - a * e.pagination.bulletSize
                          , s = t ? "right" : "left";
                        n.css(e.isHorizontal() ? s : "top", i + "px")
                    }
                }
                if ("fraction" === A.type && (r.find("." + A.currentClass).text(A.formatFractionCurrent(i + 1)),
                r.find("." + A.totalClass).text(A.formatFractionTotal(s))),
                "progressbar" === A.type) {
                    let t;
                    t = A.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const n = (i + 1) / s;
                    let o = 1
                      , a = 1;
                    "horizontal" === t ? o = n : a = n,
                    r.find("." + A.progressbarFillClass).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${a})`).transition(e.params.speed)
                }
                "custom" === A.type && A.renderCustom ? (r.html(A.renderCustom(e, i + 1, s)),
                e.emit("paginationRender", e, r[0])) : e.emit("paginationUpdate", e, r[0]),
                r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](A.lockClass)
            },
            render() {
                const e = this
                  , t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , n = e.pagination.$el;
                let r = "";
                if ("bullets" === t.type) {
                    const i = e.params.loop ? Math.ceil((A - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    for (let A = 0; A < i; A += 1)
                        t.renderBullet ? r += t.renderBullet.call(e, A, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    n.html(r),
                    e.pagination.bullets = n.find("." + t.bulletClass)
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
                n.html(r)),
                "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
                n.html(r)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            },
            init() {
                const e = this
                  , t = e.params.pagination;
                if (!t.el)
                    return;
                let A = ue(t.el);
                0 !== A.length && (e.params.uniqueNavElements && "string" == typeof t.el && A.length > 1 && (A = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && A.addClass(t.clickableClass),
                A.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (A.addClass(`${t.modifierClass}${t.type}-dynamic`),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && A.addClass(t.progressbarOppositeClass),
                t.clickable && A.on("click", "." + t.bulletClass, (function(t) {
                    t.preventDefault();
                    let A = ue(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (A += e.loopedSlides),
                    e.slideTo(A)
                }
                )),
                pe.extend(e.pagination, {
                    $el: A,
                    el: A[0]
                }))
            },
            destroy() {
                const e = this.params.pagination;
                if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length)
                    return;
                const t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        };
        const je = {
            setTranslate() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el)
                    return;
                const {scrollbar: t, rtlTranslate: A, progress: n} = e
                  , {dragSize: r, trackSize: i, $dragEl: s, $el: o} = t
                  , a = e.params.scrollbar;
                let l = r
                  , c = (i - r) * n;
                A ? (c = -c,
                c > 0 ? (l = r - c,
                c = 0) : -c + r > i && (l = i + c)) : c < 0 ? (l = r + c,
                c = 0) : c + r > i && (l = i - c),
                e.isHorizontal() ? (s.transform(`translate3d(${c}px, 0, 0)`),
                s[0].style.width = l + "px") : (s.transform(`translate3d(0px, ${c}px, 0)`),
                s[0].style.height = l + "px"),
                a.hide && (clearTimeout(e.scrollbar.timeout),
                o[0].style.opacity = 1,
                e.scrollbar.timeout = setTimeout(()=>{
                    o[0].style.opacity = 0,
                    o.transition(400)
                }
                , 1e3))
            },
            setTransition(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el)
                    return;
                const {scrollbar: t} = e
                  , {$dragEl: A, $el: n} = t;
                A[0].style.width = "",
                A[0].style.height = "";
                const r = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight
                  , i = e.size / e.virtualSize
                  , s = i * (r / e.size);
                let o;
                o = "auto" === e.params.scrollbar.dragSize ? r * i : parseInt(e.params.scrollbar.dragSize, 10),
                e.isHorizontal() ? A[0].style.width = o + "px" : A[0].style.height = o + "px",
                n[0].style.display = i >= 1 ? "none" : "",
                e.params.scrollbar.hide && (n[0].style.opacity = 0),
                pe.extend(t, {
                    trackSize: r,
                    divider: i,
                    moveDivider: s,
                    dragSize: o
                }),
                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            },
            getPointerPosition(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition(e) {
                const {scrollbar: t, rtlTranslate: A} = this
                  , {$el: n, dragSize: r, trackSize: i, dragStartPos: s} = t;
                let o;
                o = (t.getPointerPosition(e) - n.offset()[this.isHorizontal() ? "left" : "top"] - (null !== s ? s : r / 2)) / (i - r),
                o = Math.max(Math.min(o, 1), 0),
                A && (o = 1 - o);
                const a = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
                this.updateProgress(a),
                this.setTranslate(a),
                this.updateActiveIndex(),
                this.updateSlidesClasses()
            },
            onDragStart(e) {
                const t = this
                  , A = t.params.scrollbar
                  , {scrollbar: n, $wrapperEl: r} = t
                  , {$el: i, $dragEl: s} = n;
                t.scrollbar.isTouched = !0,
                t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? n.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
                e.preventDefault(),
                e.stopPropagation(),
                r.transition(100),
                s.transition(100),
                n.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                i.transition(0),
                A.hide && i.css("opacity", 1),
                t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                t.emit("scrollbarDragStart", e)
            },
            onDragMove(e) {
                const {scrollbar: t, $wrapperEl: A} = this
                  , {$el: n, $dragEl: r} = t;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                t.setDragPosition(e),
                A.transition(0),
                n.transition(0),
                r.transition(0),
                this.emit("scrollbarDragMove", e))
            },
            onDragEnd(e) {
                const t = this
                  , A = t.params.scrollbar
                  , {scrollbar: n, $wrapperEl: r} = t
                  , {$el: i} = n;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
                t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
                r.transition("")),
                A.hide && (clearTimeout(t.scrollbar.dragTimeout),
                t.scrollbar.dragTimeout = pe.nextTick(()=>{
                    i.css("opacity", 0),
                    i.transition(400)
                }
                , 1e3)),
                t.emit("scrollbarDragEnd", e),
                A.snapOnRelease && t.slideToClosest())
            },
            enableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, touchEventsTouch: A, touchEventsDesktop: n, params: r} = e
                  , i = t.$el[0]
                  , s = !(!fe.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!fe.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                fe.touch ? (i.addEventListener(A.start, e.scrollbar.onDragStart, s),
                i.addEventListener(A.move, e.scrollbar.onDragMove, s),
                i.addEventListener(A.end, e.scrollbar.onDragEnd, o)) : (i.addEventListener(n.start, e.scrollbar.onDragStart, s),
                oe.addEventListener(n.move, e.scrollbar.onDragMove, s),
                oe.addEventListener(n.end, e.scrollbar.onDragEnd, o))
            },
            disableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, touchEventsTouch: A, touchEventsDesktop: n, params: r} = e
                  , i = t.$el[0]
                  , s = !(!fe.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!fe.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                fe.touch ? (i.removeEventListener(A.start, e.scrollbar.onDragStart, s),
                i.removeEventListener(A.move, e.scrollbar.onDragMove, s),
                i.removeEventListener(A.end, e.scrollbar.onDragEnd, o)) : (i.removeEventListener(n.start, e.scrollbar.onDragStart, s),
                oe.removeEventListener(n.move, e.scrollbar.onDragMove, s),
                oe.removeEventListener(n.end, e.scrollbar.onDragEnd, o))
            },
            init() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, $el: A} = e
                  , n = e.params.scrollbar;
                let r = ue(n.el);
                e.params.uniqueNavElements && "string" == typeof n.el && r.length > 1 && 1 === A.find(n.el).length && (r = A.find(n.el));
                let i = r.find("." + e.params.scrollbar.dragClass);
                0 === i.length && (i = ue(`<div class="${e.params.scrollbar.dragClass}"></div>`),
                r.append(i)),
                pe.extend(t, {
                    $el: r,
                    el: r[0],
                    $dragEl: i,
                    dragEl: i[0]
                }),
                n.draggable && t.enableDraggable()
            },
            destroy() {
                this.scrollbar.disableDraggable()
            }
        };
        const qe = {
            setTransform(e, t) {
                const {rtl: A} = this
                  , n = ue(e)
                  , r = A ? -1 : 1
                  , i = n.attr("data-swiper-parallax") || "0";
                let s = n.attr("data-swiper-parallax-x")
                  , o = n.attr("data-swiper-parallax-y");
                const a = n.attr("data-swiper-parallax-scale")
                  , l = n.attr("data-swiper-parallax-opacity");
                if (s || o ? (s = s || "0",
                o = o || "0") : this.isHorizontal() ? (s = i,
                o = "0") : (o = i,
                s = "0"),
                s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * r + "%" : s * t * r + "px",
                o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px",
                null != l) {
                    const e = l - (l - 1) * (1 - Math.abs(t));
                    n[0].style.opacity = e
                }
                if (null == a)
                    n.transform(`translate3d(${s}, ${o}, 0px)`);
                else {
                    const e = a - (a - 1) * (1 - Math.abs(t));
                    n.transform(`translate3d(${s}, ${o}, 0px) scale(${e})`)
                }
            },
            setTranslate() {
                const e = this
                  , {$el: t, slides: A, progress: n, snapGrid: r} = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t,A)=>{
                    e.parallax.setTransform(A, n)
                }
                ),
                A.each((t,A)=>{
                    let i = A.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (i += Math.ceil(t / 2) - n * (r.length - 1)),
                    i = Math.min(Math.max(i, -1), 1),
                    ue(A).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t,A)=>{
                        e.parallax.setTransform(A, i)
                    }
                    )
                }
                )
            },
            setTransition(e=this.params.speed) {
                const {$el: t} = this;
                t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t,A)=>{
                    const n = ue(A);
                    let r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0),
                    n.transition(r)
                }
                )
            }
        };
        const Ze = {
            getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2)
                    return 1;
                const t = e.targetTouches[0].pageX
                  , A = e.targetTouches[0].pageY
                  , n = e.targetTouches[1].pageX
                  , r = e.targetTouches[1].pageY;
                return Math.sqrt((n - t) ** 2 + (r - A) ** 2)
            },
            onGestureStart(e) {
                const t = this
                  , A = t.params.zoom
                  , n = t.zoom
                  , {gesture: r} = n;
                if (n.fakeGestureTouched = !1,
                n.fakeGestureMoved = !1,
                !fe.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                        return;
                    n.fakeGestureTouched = !0,
                    r.scaleStart = Ze.getDistanceBetweenTouches(e)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = ue(e.target).closest("." + t.params.slideClass),
                0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
                r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                r.$imageWrapEl = r.$imageEl.parent("." + A.containerClass),
                r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || A.maxRatio,
                0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0),
                t.zoom.isScaling = !0) : r.$imageEl = void 0
            },
            onGestureChange(e) {
                const t = this.params.zoom
                  , A = this.zoom
                  , {gesture: n} = A;
                if (!fe.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                        return;
                    A.fakeGestureMoved = !0,
                    n.scaleMove = Ze.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (A.scale = fe.gestures ? e.scale * A.currentScale : n.scaleMove / n.scaleStart * A.currentScale,
                A.scale > n.maxRatio && (A.scale = n.maxRatio - 1 + (A.scale - n.maxRatio + 1) ** .5),
                A.scale < t.minRatio && (A.scale = t.minRatio + 1 - (t.minRatio - A.scale + 1) ** .5),
                n.$imageEl.transform(`translate3d(0,0,0) scale(${A.scale})`))
            },
            onGestureEnd(e) {
                const t = this.params.zoom
                  , A = this.zoom
                  , {gesture: n} = A;
                if (!fe.gestures) {
                    if (!A.fakeGestureTouched || !A.fakeGestureMoved)
                        return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !ye.android)
                        return;
                    A.fakeGestureTouched = !1,
                    A.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (A.scale = Math.max(Math.min(A.scale, n.maxRatio), t.minRatio),
                n.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${A.scale})`),
                A.currentScale = A.scale,
                A.isScaling = !1,
                1 === A.scale && (n.$slideEl = void 0))
            },
            onTouchStart(e) {
                const t = this.zoom
                  , {gesture: A, image: n} = t;
                A.$imageEl && 0 !== A.$imageEl.length && (n.isTouched || (ye.android && e.cancelable && e.preventDefault(),
                n.isTouched = !0,
                n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove(e) {
                const t = this
                  , A = t.zoom
                  , {gesture: n, image: r, velocity: i} = A;
                if (!n.$imageEl || 0 === n.$imageEl.length)
                    return;
                if (t.allowClick = !1,
                !r.isTouched || !n.$slideEl)
                    return;
                r.isMoved || (r.width = n.$imageEl[0].offsetWidth,
                r.height = n.$imageEl[0].offsetHeight,
                r.startX = pe.getTranslate(n.$imageWrapEl[0], "x") || 0,
                r.startY = pe.getTranslate(n.$imageWrapEl[0], "y") || 0,
                n.slideWidth = n.$slideEl[0].offsetWidth,
                n.slideHeight = n.$slideEl[0].offsetHeight,
                n.$imageWrapEl.transition(0),
                t.rtl && (r.startX = -r.startX,
                r.startY = -r.startY));
                const s = r.width * A.scale
                  , o = r.height * A.scale;
                if (!(s < n.slideWidth && o < n.slideHeight)) {
                    if (r.minX = Math.min(n.slideWidth / 2 - s / 2, 0),
                    r.maxX = -r.minX,
                    r.minY = Math.min(n.slideHeight / 2 - o / 2, 0),
                    r.maxY = -r.minY,
                    r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !r.isMoved && !A.isScaling) {
                        if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x))
                            return void (r.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y))
                            return void (r.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    r.isMoved = !0,
                    r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX,
                    r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY,
                    r.currentX < r.minX && (r.currentX = r.minX + 1 - (r.minX - r.currentX + 1) ** .8),
                    r.currentX > r.maxX && (r.currentX = r.maxX - 1 + (r.currentX - r.maxX + 1) ** .8),
                    r.currentY < r.minY && (r.currentY = r.minY + 1 - (r.minY - r.currentY + 1) ** .8),
                    r.currentY > r.maxY && (r.currentY = r.maxY - 1 + (r.currentY - r.maxY + 1) ** .8),
                    i.prevPositionX || (i.prevPositionX = r.touchesCurrent.x),
                    i.prevPositionY || (i.prevPositionY = r.touchesCurrent.y),
                    i.prevTime || (i.prevTime = Date.now()),
                    i.x = (r.touchesCurrent.x - i.prevPositionX) / (Date.now() - i.prevTime) / 2,
                    i.y = (r.touchesCurrent.y - i.prevPositionY) / (Date.now() - i.prevTime) / 2,
                    Math.abs(r.touchesCurrent.x - i.prevPositionX) < 2 && (i.x = 0),
                    Math.abs(r.touchesCurrent.y - i.prevPositionY) < 2 && (i.y = 0),
                    i.prevPositionX = r.touchesCurrent.x,
                    i.prevPositionY = r.touchesCurrent.y,
                    i.prevTime = Date.now(),
                    n.$imageWrapEl.transform(`translate3d(${r.currentX}px, ${r.currentY}px,0)`)
                }
            },
            onTouchEnd() {
                const e = this.zoom
                  , {gesture: t, image: A, velocity: n} = e;
                if (!t.$imageEl || 0 === t.$imageEl.length)
                    return;
                if (!A.isTouched || !A.isMoved)
                    return A.isTouched = !1,
                    void (A.isMoved = !1);
                A.isTouched = !1,
                A.isMoved = !1;
                let r = 300
                  , i = 300;
                const s = n.x * r
                  , o = A.currentX + s
                  , a = n.y * i
                  , l = A.currentY + a;
                0 !== n.x && (r = Math.abs((o - A.currentX) / n.x)),
                0 !== n.y && (i = Math.abs((l - A.currentY) / n.y));
                const c = Math.max(r, i);
                A.currentX = o,
                A.currentY = l;
                const u = A.width * e.scale
                  , d = A.height * e.scale;
                A.minX = Math.min(t.slideWidth / 2 - u / 2, 0),
                A.maxX = -A.minX,
                A.minY = Math.min(t.slideHeight / 2 - d / 2, 0),
                A.maxY = -A.minY,
                A.currentX = Math.max(Math.min(A.currentX, A.maxX), A.minX),
                A.currentY = Math.max(Math.min(A.currentY, A.maxY), A.minY),
                t.$imageWrapEl.transition(c).transform(`translate3d(${A.currentX}px, ${A.currentY}px,0)`)
            },
            onTransitionEnd() {
                const e = this.zoom
                  , {gesture: t} = e;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
                e.scale = 1,
                e.currentScale = 1,
                t.$slideEl = void 0,
                t.$imageEl = void 0,
                t.$imageWrapEl = void 0)
            },
            toggle(e) {
                const t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in(e) {
                const t = this
                  , A = t.zoom
                  , n = t.params.zoom
                  , {gesture: r, image: i} = A;
                if (r.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? r.$slideEl = t.$wrapperEl.children("." + t.params.slideActiveClass) : r.$slideEl = t.slides.eq(t.activeIndex),
                r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass)),
                !r.$imageEl || 0 === r.$imageEl.length)
                    return;
                let s, o, a, l, c, u, d, h, p, f, g, B, m, w, v, E, C, Q;
                r.$slideEl.addClass("" + n.zoomedSlideClass),
                void 0 === i.touchesStart.x && e ? (s = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
                o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (s = i.touchesStart.x,
                o = i.touchesStart.y),
                A.scale = r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio,
                A.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio,
                e ? (C = r.$slideEl[0].offsetWidth,
                Q = r.$slideEl[0].offsetHeight,
                a = r.$slideEl.offset().left,
                l = r.$slideEl.offset().top,
                c = a + C / 2 - s,
                u = l + Q / 2 - o,
                p = r.$imageEl[0].offsetWidth,
                f = r.$imageEl[0].offsetHeight,
                g = p * A.scale,
                B = f * A.scale,
                m = Math.min(C / 2 - g / 2, 0),
                w = Math.min(Q / 2 - B / 2, 0),
                v = -m,
                E = -w,
                d = c * A.scale,
                h = u * A.scale,
                d < m && (d = m),
                d > v && (d = v),
                h < w && (h = w),
                h > E && (h = E)) : (d = 0,
                h = 0),
                r.$imageWrapEl.transition(300).transform(`translate3d(${d}px, ${h}px,0)`),
                r.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${A.scale})`)
            },
            out() {
                const e = this
                  , t = e.zoom
                  , A = e.params.zoom
                  , {gesture: n} = t;
                n.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? n.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : n.$slideEl = e.slides.eq(e.activeIndex),
                n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                n.$imageWrapEl = n.$imageEl.parent("." + A.containerClass)),
                n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1,
                t.currentScale = 1,
                n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                n.$slideEl.removeClass("" + A.zoomedSlideClass),
                n.$slideEl = void 0)
            },
            enable() {
                const e = this
                  , t = e.zoom;
                if (t.enabled)
                    return;
                t.enabled = !0;
                const A = !("touchstart" !== e.touchEvents.start || !fe.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , n = !fe.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , r = "." + e.params.slideClass;
                fe.gestures ? (e.$wrapperEl.on("gesturestart", r, t.onGestureStart, A),
                e.$wrapperEl.on("gesturechange", r, t.onGestureChange, A),
                e.$wrapperEl.on("gestureend", r, t.onGestureEnd, A)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, t.onGestureStart, A),
                e.$wrapperEl.on(e.touchEvents.move, r, t.onGestureChange, n),
                e.$wrapperEl.on(e.touchEvents.end, r, t.onGestureEnd, A),
                e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, t.onGestureEnd, A)),
                e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, n)
            },
            disable() {
                const e = this
                  , t = e.zoom;
                if (!t.enabled)
                    return;
                e.zoom.enabled = !1;
                const A = !("touchstart" !== e.touchEvents.start || !fe.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , n = !fe.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , r = "." + e.params.slideClass;
                fe.gestures ? (e.$wrapperEl.off("gesturestart", r, t.onGestureStart, A),
                e.$wrapperEl.off("gesturechange", r, t.onGestureChange, A),
                e.$wrapperEl.off("gestureend", r, t.onGestureEnd, A)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, A),
                e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, n),
                e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, A),
                e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, A)),
                e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, n)
            }
        };
        const et = {
            loadInSlide(e, t=!0) {
                const A = this
                  , n = A.params.lazy;
                if (void 0 === e)
                    return;
                if (0 === A.slides.length)
                    return;
                const r = A.virtual && A.params.virtual.enabled ? A.$wrapperEl.children(`.${A.params.slideClass}[data-swiper-slide-index="${e}"]`) : A.slides.eq(e);
                let i = r.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);
                !r.hasClass(n.elementClass) || r.hasClass(n.loadedClass) || r.hasClass(n.loadingClass) || (i = i.add(r[0])),
                0 !== i.length && i.each((e,i)=>{
                    const s = ue(i);
                    s.addClass(n.loadingClass);
                    const o = s.attr("data-background")
                      , a = s.attr("data-src")
                      , l = s.attr("data-srcset")
                      , c = s.attr("data-sizes")
                      , u = s.parent("picture");
                    A.loadImage(s[0], a || o, l, c, !1, ()=>{
                        if (null != A && A && (!A || A.params) && !A.destroyed) {
                            if (o ? (s.css("background-image", `url("${o}")`),
                            s.removeAttr("data-background")) : (l && (s.attr("srcset", l),
                            s.removeAttr("data-srcset")),
                            c && (s.attr("sizes", c),
                            s.removeAttr("data-sizes")),
                            u.length && u.children("source").each((e,t)=>{
                                const A = ue(t);
                                A.attr("data-srcset") && (A.attr("srcset", A.attr("data-srcset")),
                                A.removeAttr("data-srcset"))
                            }
                            ),
                            a && (s.attr("src", a),
                            s.removeAttr("data-src"))),
                            s.addClass(n.loadedClass).removeClass(n.loadingClass),
                            r.find("." + n.preloaderClass).remove(),
                            A.params.loop && t) {
                                const e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(A.params.slideDuplicateClass)) {
                                    const t = A.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${A.params.slideDuplicateClass})`);
                                    A.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    const t = A.$wrapperEl.children(`.${A.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                    A.lazy.loadInSlide(t.index(), !1)
                                }
                            }
                            A.emit("lazyImageReady", r[0], s[0]),
                            A.params.autoHeight && A.updateAutoHeight()
                        }
                    }
                    ),
                    A.emit("lazyImageLoad", r[0], s[0])
                }
                )
            },
            load() {
                const e = this
                  , {$wrapperEl: t, params: A, slides: n, activeIndex: r} = e
                  , i = e.virtual && A.virtual.enabled
                  , s = A.lazy;
                let o = A.slidesPerView;
                function a(e) {
                    if (i) {
                        if (t.children(`.${A.slideClass}[data-swiper-slide-index="${e}"]`).length)
                            return !0
                    } else if (n[e])
                        return !0;
                    return !1
                }
                function l(e) {
                    return i ? ue(e).attr("data-swiper-slide-index") : ue(e).index()
                }
                if ("auto" === o && (o = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                e.params.watchSlidesVisibility)
                    t.children("." + A.slideVisibleClass).each((t,A)=>{
                        const n = i ? ue(A).attr("data-swiper-slide-index") : ue(A).index();
                        e.lazy.loadInSlide(n)
                    }
                    );
                else if (o > 1)
                    for (let t = r; t < r + o; t += 1)
                        a(t) && e.lazy.loadInSlide(t);
                else
                    e.lazy.loadInSlide(r);
                if (s.loadPrevNext)
                    if (o > 1 || s.loadPrevNextAmount && s.loadPrevNextAmount > 1) {
                        const t = s.loadPrevNextAmount
                          , A = o
                          , i = Math.min(r + A + Math.max(t, A), n.length)
                          , l = Math.max(r - Math.max(A, t), 0);
                        for (let t = r + o; t < i; t += 1)
                            a(t) && e.lazy.loadInSlide(t);
                        for (let t = l; t < r; t += 1)
                            a(t) && e.lazy.loadInSlide(t)
                    } else {
                        const n = t.children("." + A.slideNextClass);
                        n.length > 0 && e.lazy.loadInSlide(l(n));
                        const r = t.children("." + A.slidePrevClass);
                        r.length > 0 && e.lazy.loadInSlide(l(r))
                    }
            }
        };
        const tt = {
            LinearSpline: function(e, t) {
                const A = function() {
                    let e, t, A;
                    return (n,r)=>{
                        for (t = -1,
                        e = n.length; e - t > 1; )
                            A = e + t >> 1,
                            n[A] <= r ? t = A : e = A;
                        return e
                    }
                }();
                let n, r;
                return this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1,
                this.interpolate = function(e) {
                    return e ? (r = A(this.x, e),
                    n = r - 1,
                    (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                }
                ,
                this
            },
            getInterpolateFunction(e) {
                const t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new tt.LinearSpline(t.slidesGrid,e.slidesGrid) : new tt.LinearSpline(t.snapGrid,e.snapGrid))
            },
            setTranslate(e, t) {
                const A = this
                  , n = A.controller.control;
                let r, i;
                function s(e) {
                    const t = A.rtlTranslate ? -A.translate : A.translate;
                    "slide" === A.params.controller.by && (A.controller.getInterpolateFunction(e),
                    i = -A.controller.spline.interpolate(-t)),
                    i && "container" !== A.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (A.maxTranslate() - A.minTranslate()),
                    i = (t - A.minTranslate()) * r + e.minTranslate()),
                    A.params.controller.inverse && (i = e.maxTranslate() - i),
                    e.updateProgress(i),
                    e.setTranslate(i, A),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(n))
                    for (let e = 0; e < n.length; e += 1)
                        n[e] !== t && n[e]instanceof Me && s(n[e]);
                else
                    n instanceof Me && t !== n && s(n)
            },
            setTransition(e, t) {
                const A = this
                  , n = A.controller.control;
                let r;
                function i(t) {
                    t.setTransition(e, A),
                    0 !== e && (t.transitionStart(),
                    t.params.autoHeight && pe.nextTick(()=>{
                        t.updateAutoHeight()
                    }
                    ),
                    t.$wrapperEl.transitionEnd(()=>{
                        n && (t.params.loop && "slide" === A.params.controller.by && t.loopFix(),
                        t.transitionEnd())
                    }
                    ))
                }
                if (Array.isArray(n))
                    for (r = 0; r < n.length; r += 1)
                        n[r] !== t && n[r]instanceof Me && i(n[r]);
                else
                    n instanceof Me && t !== n && i(n)
            }
        };
        const At = {
            makeElFocusable: e=>(e.attr("tabIndex", "0"),
            e),
            makeElNotFocusable: e=>(e.attr("tabIndex", "-1"),
            e),
            addElRole: (e,t)=>(e.attr("role", t),
            e),
            addElLabel: (e,t)=>(e.attr("aria-label", t),
            e),
            disableEl: e=>(e.attr("aria-disabled", !0),
            e),
            enableEl: e=>(e.attr("aria-disabled", !1),
            e),
            onEnterKey(e) {
                const t = this
                  , A = t.params.a11y;
                if (13 !== e.keyCode)
                    return;
                const n = ue(e.target);
                t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? t.a11y.notify(A.lastSlideMessage) : t.a11y.notify(A.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? t.a11y.notify(A.firstSlideMessage) : t.a11y.notify(A.prevSlideMessage)),
                t.pagination && n.is("." + t.params.pagination.bulletClass) && n[0].click()
            },
            notify(e) {
                const t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""),
                t.html(e))
            },
            updateNavigation() {
                const e = this;
                if (e.params.loop || !e.navigation)
                    return;
                const {$nextEl: t, $prevEl: A} = e.navigation;
                A && A.length > 0 && (e.isBeginning ? (e.a11y.disableEl(A),
                e.a11y.makeElNotFocusable(A)) : (e.a11y.enableEl(A),
                e.a11y.makeElFocusable(A))),
                t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t),
                e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t),
                e.a11y.makeElFocusable(t)))
            },
            updatePagination() {
                const e = this
                  , t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((A,n)=>{
                    const r = ue(n);
                    e.a11y.makeElFocusable(r),
                    e.a11y.addElRole(r, "button"),
                    e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/\{\{index\}\}/, r.index() + 1))
                }
                )
            },
            init() {
                const e = this;
                e.$el.append(e.a11y.liveRegion);
                const t = e.params.a11y;
                let A, n;
                e.navigation && e.navigation.$nextEl && (A = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                A && (e.a11y.makeElFocusable(A),
                e.a11y.addElRole(A, "button"),
                e.a11y.addElLabel(A, t.nextSlideMessage),
                A.on("keydown", e.a11y.onEnterKey)),
                n && (e.a11y.makeElFocusable(n),
                e.a11y.addElRole(n, "button"),
                e.a11y.addElLabel(n, t.prevSlideMessage),
                n.on("keydown", e.a11y.onEnterKey)),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy() {
                const e = this;
                let t, A;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(),
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (A = e.navigation.$prevEl),
                t && t.off("keydown", e.a11y.onEnterKey),
                A && A.off("keydown", e.a11y.onEnterKey),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            }
        };
        const nt = {
            init() {
                const e = this;
                if (!e.params.history)
                    return;
                if (!le.history || !le.history.pushState)
                    return e.params.history.enabled = !1,
                    void (e.params.hashNavigation.enabled = !0);
                const t = e.history;
                t.initialized = !0,
                t.paths = nt.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || le.addEventListener("popstate", e.history.setHistoryPopState))
            },
            destroy() {
                const e = this;
                e.params.history.replaceState || le.removeEventListener("popstate", e.history.setHistoryPopState)
            },
            setHistoryPopState() {
                this.history.paths = nt.getPathValues(),
                this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues() {
                const e = le.location.pathname.slice(1).split("/").filter(e=>"" !== e)
                  , t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory(e, t) {
                if (!this.history.initialized || !this.params.history.enabled)
                    return;
                const A = this.slides.eq(t);
                let n = nt.slugify(A.attr("data-history"));
                le.location.pathname.includes(e) || (n = `${e}/${n}`);
                const r = le.history.state;
                r && r.value === n || (this.params.history.replaceState ? le.history.replaceState({
                    value: n
                }, null, n) : le.history.pushState({
                    value: n
                }, null, n))
            },
            slugify: e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            scrollToSlide(e, t, A) {
                const n = this;
                if (t)
                    for (let r = 0, i = n.slides.length; r < i; r += 1) {
                        const i = n.slides.eq(r);
                        if (nt.slugify(i.attr("data-history")) === t && !i.hasClass(n.params.slideDuplicateClass)) {
                            const t = i.index();
                            n.slideTo(t, e, A)
                        }
                    }
                else
                    n.slideTo(0, e, A)
            }
        };
        const rt = {
            onHashCange() {
                const e = this;
                e.emit("hashChange");
                const t = oe.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const A = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === A)
                        return;
                    e.slideTo(A)
                }
            },
            setHash() {
                const e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && le.history && le.history.replaceState)
                        le.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""),
                        e.emit("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex)
                          , A = t.attr("data-hash") || t.attr("data-history");
                        oe.location.hash = A || "",
                        e.emit("hashSet")
                    }
            },
            init() {
                const e = this;
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                    return;
                e.hashNavigation.initialized = !0;
                const t = oe.location.hash.replace("#", "");
                if (t) {
                    const A = 0;
                    for (let n = 0, r = e.slides.length; n < r; n += 1) {
                        const r = e.slides.eq(n);
                        if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                            const t = r.index();
                            e.slideTo(t, A, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && ue(le).on("hashchange", e.hashNavigation.onHashCange)
            },
            destroy() {
                const e = this;
                e.params.hashNavigation.watchState && ue(le).off("hashchange", e.hashNavigation.onHashCange)
            }
        };
        const it = {
            run() {
                const e = this
                  , t = e.slides.eq(e.activeIndex);
                let A = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (A = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = pe.nextTick(()=>{
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                    e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay")),
                    e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }
                , A)
            },
            start() {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
                this.emit("autoplayStart"),
                this.autoplay.run(),
                !0))
            },
            stop() {
                const e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = void 0),
                e.autoplay.running = !1,
                e.emit("autoplayStop"),
                !0))
            },
            pause(e) {
                const t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                t.autoplay.paused = !0,
                0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
                t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
                t.autoplay.run())))
            }
        };
        const st = {
            setTranslate() {
                const e = this
                  , {slides: t} = e;
                for (let A = 0; A < t.length; A += 1) {
                    const t = e.slides.eq(A);
                    let n = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (n -= e.translate);
                    let r = 0;
                    e.isHorizontal() || (r = n,
                    n = 0);
                    const i = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({
                        opacity: i
                    }).transform(`translate3d(${n}px, ${r}px, 0px)`)
                }
            },
            setTransition(e) {
                const t = this
                  , {slides: A, $wrapperEl: n} = t;
                if (A.transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    let e = !1;
                    A.transitionEnd(()=>{
                        if (e)
                            return;
                        if (!t || t.destroyed)
                            return;
                        e = !0,
                        t.animating = !1;
                        const A = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < A.length; e += 1)
                            n.trigger(A[e])
                    }
                    )
                }
            }
        };
        const ot = {
            setTranslate() {
                const {$el: e, $wrapperEl: t, slides: A, width: n, height: r, rtlTranslate: i, size: s} = this
                  , o = this.params.cubeEffect
                  , a = this.isHorizontal()
                  , l = this.virtual && this.params.virtual.enabled;
                let c, u = 0;
                o.shadow && (a ? (c = t.find(".swiper-cube-shadow"),
                0 === c.length && (c = ue('<div class="swiper-cube-shadow"></div>'),
                t.append(c)),
                c.css({
                    height: n + "px"
                })) : (c = e.find(".swiper-cube-shadow"),
                0 === c.length && (c = ue('<div class="swiper-cube-shadow"></div>'),
                e.append(c))));
                for (let e = 0; e < A.length; e += 1) {
                    const t = A.eq(e);
                    let n = e;
                    l && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * n
                      , c = Math.floor(r / 360);
                    i && (r = -r,
                    c = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0
                      , p = 0
                      , f = 0;
                    n % 4 == 0 ? (h = 4 * -c * s,
                    f = 0) : (n - 1) % 4 == 0 ? (h = 0,
                    f = 4 * -c * s) : (n - 2) % 4 == 0 ? (h = s + 4 * c * s,
                    f = s) : (n - 3) % 4 == 0 && (h = -s,
                    f = 3 * s + 4 * s * c),
                    i && (h = -h),
                    a || (p = h,
                    h = 0);
                    const g = `rotateX(${a ? 0 : -r}deg) rotateY(${a ? r : 0}deg) translate3d(${h}px, ${p}px, ${f}px)`;
                    if (d <= 1 && d > -1 && (u = 90 * n + 90 * d,
                    i && (u = 90 * -n - 90 * d)),
                    t.transform(g),
                    o.slideShadows) {
                        let e = a ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , A = a ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ue(`<div class="swiper-slide-shadow-${a ? "left" : "top"}"></div>`),
                        t.append(e)),
                        0 === A.length && (A = ue(`<div class="swiper-slide-shadow-${a ? "right" : "bottom"}"></div>`),
                        t.append(A)),
                        e.length && (e[0].style.opacity = Math.max(-d, 0)),
                        A.length && (A[0].style.opacity = Math.max(d, 0))
                    }
                }
                if (t.css({
                    "-webkit-transform-origin": `50% 50% -${s / 2}px`,
                    "-moz-transform-origin": `50% 50% -${s / 2}px`,
                    "-ms-transform-origin": `50% 50% -${s / 2}px`,
                    "transform-origin": `50% 50% -${s / 2}px`
                }),
                o.shadow)
                    if (a)
                        c.transform(`translate3d(0px, ${n / 2 + o.shadowOffset}px, ${-n / 2}px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`);
                    else {
                        const e = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                          , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , A = o.shadowScale
                          , n = o.shadowScale / t
                          , i = o.shadowOffset;
                        c.transform(`scale3d(${A}, 1, ${n}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / n}px) rotateX(-90deg)`)
                    }
                const d = Le.isSafari || Le.isWebView ? -s / 2 : 0;
                t.transform(`translate3d(0px,0,${d}px) rotateX(${this.isHorizontal() ? 0 : u}deg) rotateY(${this.isHorizontal() ? -u : 0}deg)`)
            },
            setTransition(e) {
                const {$el: t, slides: A} = this;
                A.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        };
        const at = {
            setTranslate() {
                const e = this
                  , {slides: t, rtlTranslate: A} = e;
                for (let n = 0; n < t.length; n += 1) {
                    const r = t.eq(n);
                    let i = r[0].progress;
                    e.params.flipEffect.limitRotation && (i = Math.max(Math.min(r[0].progress, 1), -1));
                    let s = -180 * i
                      , o = 0
                      , a = -r[0].swiperSlideOffset
                      , l = 0;
                    if (e.isHorizontal() ? A && (s = -s) : (l = a,
                    a = 0,
                    o = -s,
                    s = 0),
                    r[0].style.zIndex = -Math.abs(Math.round(i)) + t.length,
                    e.params.flipEffect.slideShadows) {
                        let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                          , A = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = ue(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`),
                        r.append(t)),
                        0 === A.length && (A = ue(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`),
                        r.append(A)),
                        t.length && (t[0].style.opacity = Math.max(-i, 0)),
                        A.length && (A[0].style.opacity = Math.max(i, 0))
                    }
                    r.transform(`translate3d(${a}px, ${l}px, 0px) rotateX(${o}deg) rotateY(${s}deg)`)
                }
            },
            setTransition(e) {
                const t = this
                  , {slides: A, activeIndex: n, $wrapperEl: r} = t;
                if (A.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    let e = !1;
                    A.eq(n).transitionEnd((function() {
                        if (e)
                            return;
                        if (!t || t.destroyed)
                            return;
                        e = !0,
                        t.animating = !1;
                        const A = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < A.length; e += 1)
                            r.trigger(A[e])
                    }
                    ))
                }
            }
        };
        const lt = {
            setTranslate() {
                const {width: e, height: t, slides: A, $wrapperEl: n, slidesSizesGrid: r} = this
                  , i = this.params.coverflowEffect
                  , s = this.isHorizontal()
                  , o = this.translate
                  , a = s ? e / 2 - o : t / 2 - o
                  , l = s ? i.rotate : -i.rotate
                  , c = i.depth;
                for (let e = 0, t = A.length; e < t; e += 1) {
                    const t = A.eq(e)
                      , n = r[e]
                      , o = (a - t[0].swiperSlideOffset - n / 2) / n * i.modifier;
                    let u = s ? l * o : 0
                      , d = s ? 0 : l * o
                      , h = -c * Math.abs(o)
                      , p = i.stretch;
                    "string" == typeof p && -1 !== p.indexOf("%") && (p = parseFloat(i.stretch) / 100 * n);
                    let f = s ? 0 : p * o
                      , g = s ? p * o : 0
                      , B = 1 - (1 - i.scale) * Math.abs(o);
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(f) < .001 && (f = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(u) < .001 && (u = 0),
                    Math.abs(d) < .001 && (d = 0),
                    Math.abs(B) < .001 && (B = 0);
                    const m = `translate3d(${g}px,${f}px,${h}px)  rotateX(${d}deg) rotateY(${u}deg) scale(${B})`;
                    if (t.transform(m),
                    t[0].style.zIndex = 1 - Math.abs(Math.round(o)),
                    i.slideShadows) {
                        let e = s ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , A = s ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ue(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`),
                        t.append(e)),
                        0 === A.length && (A = ue(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`),
                        t.append(A)),
                        e.length && (e[0].style.opacity = o > 0 ? o : 0),
                        A.length && (A[0].style.opacity = -o > 0 ? -o : 0)
                    }
                }
                if (fe.pointerEvents || fe.prefixedPointerEvents) {
                    n[0].style.perspectiveOrigin = a + "px 50%"
                }
            },
            setTransition(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        };
        const ct = {
            init() {
                const e = this
                  , {thumbs: t} = e.params
                  , A = e.constructor;
                t.swiper instanceof A ? (e.thumbs.swiper = t.swiper,
                pe.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                pe.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : pe.isObject(t.swiper) && (e.thumbs.swiper = new A(pe.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })),
                e.thumbs.swiperCreated = !0),
                e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick() {
                const e = this
                  , t = e.thumbs.swiper;
                if (!t)
                    return;
                const A = t.clickedIndex
                  , n = t.clickedSlide;
                if (n && ue(n).hasClass(e.params.thumbs.slideThumbActiveClass))
                    return;
                if (null == A)
                    return;
                let r;
                if (r = t.params.loop ? parseInt(ue(t.clickedSlide).attr("data-swiper-slide-index"), 10) : A,
                e.params.loop) {
                    let t = e.activeIndex;
                    e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                    e._clientLeft = e.$wrapperEl[0].clientLeft,
                    t = e.activeIndex);
                    const A = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index()
                      , n = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();
                    r = void 0 === A ? n : void 0 === n ? A : n - t < t - A ? n : A
                }
                e.slideTo(r)
            },
            update(e) {
                const t = this
                  , A = t.thumbs.swiper;
                if (!A)
                    return;
                const n = "auto" === A.params.slidesPerView ? A.slidesPerViewDynamic() : A.params.slidesPerView
                  , r = t.params.thumbs.autoScrollOffset
                  , i = r && !A.params.loop;
                if (t.realIndex !== A.realIndex || i) {
                    let s, o, a = A.activeIndex;
                    if (A.params.loop) {
                        A.slides.eq(a).hasClass(A.params.slideDuplicateClass) && (A.loopFix(),
                        A._clientLeft = A.$wrapperEl[0].clientLeft,
                        a = A.activeIndex);
                        const e = A.slides.eq(a).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                          , n = A.slides.eq(a).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        s = void 0 === e ? n : void 0 === n ? e : n - a == a - e ? a : n - a < a - e ? n : e,
                        o = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else
                        s = t.realIndex,
                        o = s > t.previousIndex ? "next" : "prev";
                    i && (s += "next" === o ? r : -1 * r),
                    A.visibleSlidesIndexes && A.visibleSlidesIndexes.indexOf(s) < 0 && (A.params.centeredSlides ? s = s > a ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1 : s > a && (s = s - n + 1),
                    A.slideTo(s, e ? 0 : void 0))
                }
                let s = 1;
                const o = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (s = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (s = 1),
                s = Math.floor(s),
                A.slides.removeClass(o),
                A.params.loop || A.params.virtual && A.params.virtual.enabled)
                    for (let e = 0; e < s; e += 1)
                        A.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(o);
                else
                    for (let e = 0; e < s; e += 1)
                        A.slides.eq(t.realIndex + e).addClass(o)
            }
        };
        const ut = [Pe, Ke, De, Re, ze, Ve, Ye, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create() {
                pe.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: Je.enable.bind(this),
                        disable: Je.disable.bind(this),
                        handle: Je.handle.bind(this),
                        handleMouseEnter: Je.handleMouseEnter.bind(this),
                        handleMouseLeave: Je.handleMouseLeave.bind(this),
                        animateSlider: Je.animateSlider.bind(this),
                        releaseScroll: Je.releaseScroll.bind(this),
                        lastScrollTime: pe.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(),
                    e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy() {
                    const e = this;
                    e.params.cssMode && e.mousewheel.enable(),
                    e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create() {
                pe.extend(this, {
                    navigation: {
                        init: We.init.bind(this),
                        update: We.update.bind(this),
                        destroy: We.destroy.bind(this),
                        onNextClick: We.onNextClick.bind(this),
                        onPrevClick: We.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init() {
                    this.navigation.init(),
                    this.navigation.update()
                },
                toEdge() {
                    this.navigation.update()
                },
                fromEdge() {
                    this.navigation.update()
                },
                destroy() {
                    this.navigation.destroy()
                },
                click(e) {
                    const t = this
                      , {$nextEl: A, $prevEl: n} = t.navigation;
                    if (t.params.navigation.hideOnClick && !ue(e.target).is(n) && !ue(e.target).is(A)) {
                        let e;
                        A ? e = A.hasClass(t.params.navigation.hiddenClass) : n && (e = n.hasClass(t.params.navigation.hiddenClass)),
                        !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t),
                        A && A.toggleClass(t.params.navigation.hiddenClass),
                        n && n.toggleClass(t.params.navigation.hiddenClass)
                    }
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e=>e,
                    formatFractionTotal: e=>e,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create() {
                pe.extend(this, {
                    pagination: {
                        init: $e.init.bind(this),
                        render: $e.render.bind(this),
                        update: $e.update.bind(this),
                        destroy: $e.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init() {
                    this.pagination.init(),
                    this.pagination.render(),
                    this.pagination.update()
                },
                activeIndexChange() {
                    const e = this;
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                },
                snapIndexChange() {
                    const e = this;
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange() {
                    const e = this;
                    e.params.loop && (e.pagination.render(),
                    e.pagination.update())
                },
                snapGridLengthChange() {
                    const e = this;
                    e.params.loop || (e.pagination.render(),
                    e.pagination.update())
                },
                destroy() {
                    this.pagination.destroy()
                },
                click(e) {
                    const t = this;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !ue(e.target).hasClass(t.params.pagination.bulletClass)) {
                        !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                        t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                    }
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create() {
                pe.extend(this, {
                    scrollbar: {
                        init: je.init.bind(this),
                        destroy: je.destroy.bind(this),
                        updateSize: je.updateSize.bind(this),
                        setTranslate: je.setTranslate.bind(this),
                        setTransition: je.setTransition.bind(this),
                        enableDraggable: je.enableDraggable.bind(this),
                        disableDraggable: je.disableDraggable.bind(this),
                        setDragPosition: je.setDragPosition.bind(this),
                        getPointerPosition: je.getPointerPosition.bind(this),
                        onDragStart: je.onDragStart.bind(this),
                        onDragMove: je.onDragMove.bind(this),
                        onDragEnd: je.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init() {
                    this.scrollbar.init(),
                    this.scrollbar.updateSize(),
                    this.scrollbar.setTranslate()
                },
                update() {
                    this.scrollbar.updateSize()
                },
                resize() {
                    this.scrollbar.updateSize()
                },
                observerUpdate() {
                    this.scrollbar.updateSize()
                },
                setTranslate() {
                    this.scrollbar.setTranslate()
                },
                setTransition(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create() {
                pe.extend(this, {
                    parallax: {
                        setTransform: qe.setTransform.bind(this),
                        setTranslate: qe.setTranslate.bind(this),
                        setTransition: qe.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                    this.originalParams.watchSlidesProgress = !0)
                },
                init() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create() {
                const e = this
                  , t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(A=>{
                    t[A] = Ze[A].bind(e)
                }
                ),
                pe.extend(e, {
                    zoom: t
                });
                let A = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: ()=>A,
                    set(t) {
                        if (A !== t) {
                            const A = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                              , n = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, A, n)
                        }
                        A = t
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy() {
                    this.zoom.disable()
                },
                touchStart(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap(e) {
                    const t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                },
                transitionEnd() {
                    const e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                },
                slideChange() {
                    const e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create() {
                pe.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: et.load.bind(this),
                        loadInSlide: et.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init() {
                    const e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                },
                scroll() {
                    const e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                resize() {
                    const e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                scrollbarDragMove() {
                    const e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart() {
                    const e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd() {
                    const e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                },
                slideChange() {
                    const e = this;
                    e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create() {
                pe.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: tt.getInterpolateFunction.bind(this),
                        setTranslate: tt.setTranslate.bind(this),
                        setTransition: tt.setTransition.bind(this)
                    }
                })
            },
            on: {
                update() {
                    const e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
                },
                resize() {
                    const e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
                },
                observerUpdate() {
                    const e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
                },
                setTranslate(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create() {
                const e = this;
                pe.extend(e, {
                    a11y: {
                        liveRegion: ue(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                    }
                }),
                Object.keys(At).forEach(t=>{
                    e.a11y[t] = At[t].bind(e)
                }
                )
            },
            on: {
                init() {
                    this.params.a11y.enabled && (this.a11y.init(),
                    this.a11y.updateNavigation())
                },
                toEdge() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create() {
                pe.extend(this, {
                    history: {
                        init: nt.init.bind(this),
                        setHistory: nt.setHistory.bind(this),
                        setHistoryPopState: nt.setHistoryPopState.bind(this),
                        scrollToSlide: nt.scrollToSlide.bind(this),
                        destroy: nt.destroy.bind(this)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.history.enabled && e.history.init()
                },
                destroy() {
                    const e = this;
                    e.params.history.enabled && e.history.destroy()
                },
                transitionEnd() {
                    const e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                },
                slideChange() {
                    const e = this;
                    e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create() {
                pe.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: rt.init.bind(this),
                        destroy: rt.destroy.bind(this),
                        setHash: rt.setHash.bind(this),
                        onHashCange: rt.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy() {
                    const e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                transitionEnd() {
                    const e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                },
                slideChange() {
                    const e = this;
                    e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create() {
                const e = this;
                pe.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: it.run.bind(e),
                        start: it.start.bind(e),
                        stop: it.stop.bind(e),
                        pause: it.pause.bind(e),
                        onVisibilityChange() {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                            "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                            e.autoplay.paused = !1)
                        },
                        onTransitionEnd(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                            e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                            e.autoplay.paused = !1,
                            e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.autoplay.enabled && (e.autoplay.start(),
                    document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                },
                beforeTransitionStart(e, t) {
                    const A = this;
                    A.autoplay.running && (t || !A.params.autoplay.disableOnInteraction ? A.autoplay.pause(e) : A.autoplay.stop())
                },
                sliderFirstMove() {
                    const e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                touchEnd() {
                    const e = this;
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                },
                destroy() {
                    const e = this;
                    e.autoplay.running && e.autoplay.stop(),
                    document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create() {
                pe.extend(this, {
                    fadeEffect: {
                        setTranslate: st.setTranslate.bind(this),
                        setTransition: st.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit() {
                    if ("fade" !== this.params.effect)
                        return;
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    const e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    pe.extend(this.params, e),
                    pe.extend(this.originalParams, e)
                },
                setTranslate() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create() {
                pe.extend(this, {
                    cubeEffect: {
                        setTranslate: ot.setTranslate.bind(this),
                        setTransition: ot.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit() {
                    if ("cube" !== this.params.effect)
                        return;
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    const e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    pe.extend(this.params, e),
                    pe.extend(this.originalParams, e)
                },
                setTranslate() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create() {
                pe.extend(this, {
                    flipEffect: {
                        setTranslate: at.setTranslate.bind(this),
                        setTransition: at.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit() {
                    if ("flip" !== this.params.effect)
                        return;
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    const e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    pe.extend(this.params, e),
                    pe.extend(this.originalParams, e)
                },
                setTranslate() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create() {
                pe.extend(this, {
                    coverflowEffect: {
                        setTranslate: lt.setTranslate.bind(this),
                        setTransition: lt.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                    this.classNames.push(this.params.containerModifierClass + "3d"),
                    this.params.watchSlidesProgress = !0,
                    this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create() {
                pe.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: ct.init.bind(this),
                        update: ct.update.bind(this),
                        onThumbClick: ct.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit() {
                    const {thumbs: e} = this.params;
                    e && e.swiper && (this.thumbs.init(),
                    this.thumbs.update(!0))
                },
                slideChange() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition(e) {
                    const t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy() {
                    const e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
        void 0 === Me.use && (Me.use = Me.Class.use,
        Me.installModule = Me.Class.installModule),
        Me.use(ut);
        var dt = Me;
        n("9L0q");
        function ht(e, t) {
            var A = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                A.push.apply(A, n)
            }
            return A
        }
        function pt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var A = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ht(Object(A), !0).forEach((function(t) {
                    U()(e, t, A[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : ht(Object(A)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                }
                ))
            }
            return e
        }
        function ft(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = y()(e);
                if (t) {
                    var r = y()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return C()(this, A)
            }
        }
        var gt = function(e) {
            v()(A, e);
            var t = ft(A);
            function A(e) {
                var n;
                return p()(this, A),
                (n = t.call(this, e)).mySwiper = "",
                n.realIndex = 0,
                n
            }
            return g()(A, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.mySwiper = new dt(".swiper-container",{
                        slidesPerView: 1,
                        loop: !0,
                        cache: !1,
                        autoplay: {
                            delay: 5e3
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0
                        },
                        spaceBetween: 20
                    });
                    var t = this.props
                      , A = t.eventPromotionalBanner
                      , n = t.reportView
                      , r = t.viewObject
                      , i = r.cid
                      , s = r.bid
                      , o = r.cityName
                      , a = t.bannerJump
                      , l = {
                        activity_urlkey: window.location.href,
                        city_name: o,
                        num: A.length
                    }
                      , c = {
                        bid: s,
                        cid: i
                    };
                    n(JSON.stringify(pt(pt({}, c), {}, {
                        val_lab: pt({
                            index: 1,
                            pic_url: A[0].bannerPic
                        }, l)
                    }))),
                    this.mySwiper.on("slideChange", (function() {
                        e.realIndex !== A.length - 1 && (e.realIndex = e.mySwiper.realIndex,
                        n(JSON.stringify(pt(pt({}, c), {}, {
                            val_lab: pt({
                                index: e.realIndex + 1,
                                pic_url: A[e.realIndex].bannerPic
                            }, l)
                        }))))
                    }
                    )),
                    this.mySwiper.on("click", (function() {
                        var t = e.mySwiper.realIndex;
                        a(pt(pt({}, A[t]), {}, {
                            index: t + 1
                        }))
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.eventPromotionalBanner;
                    return i.a.createElement("div", {
                        //className: "banner"
                    }, i.a.createElement("div", {
                        //className: "swiper-container"
                    }, i.a.createElement("div", {
                        //className: "swiper-wrapper"
                        //className: "swiper-wrapper"
                    }, e.map((function(e, t) {
                        return i.a.createElement("img", {
                            //className: "swiper-slide",
                            //src: e.bannerPic,
                            alt: "",
                            key: "banner-item-".concat(t)
                        })
                    }
                    ))), i.a.createElement("div", {
                        //className: "swiper-pagination"
                    })))
                }
            }]),
            A
        }(i.a.Component);
        n("H9cp");
        function Bt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = y()(e);
                if (t) {
                    var r = y()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return C()(this, A)
            }
        }
        var mt = function(e) {
            v()(A, e);
            var t = Bt(A);
            function A(e) {
                var n;
                return p()(this, A),
                n = t.call(this, e),
                U()(m()(n), "transferLink", (function() {
                    var e = n.state.content
                      , t = n.props
                      , A = t.openSharePopup
                      , r = t.reportMC;
                    "" !== e && (P.a.show(),
                    S.a.post({
                        url: "./convertLink.php",
                        body: {
                            linkText: e
                        },
                        checkLogic: !1
                    }).then((function(e) {
                        if (0 === e.code) {
                            var t = e.data;
                            A({
                                vpSkuId: t.vpSkuId,
                                index: -1,
                                themeId: z.i.TRANSFER,
                                response: e
                            }, !0),
                            r("b_waimai_5h5yf20d_mc", {
                                source: Object(R.e)("source")
                            }, n.pageCid)
                        } else
                            k.a.show(e.msg);
                        P.a.hide()
                    }
                    )).catch((function(e) {
                        P.a.hide()
                    }
                    )))
                }
                )),
                U()(m()(n), "closePopup", (function() {
                    var e = n.props.openTransferPopup;
                    n.setState({
                        popupShow: !0
                    }, (function() {
                        e(!1)
                    }
                    ))
                }
                )),
                U()(m()(n), "jumpCourse", (function() {
                    (0,
                    n.props.reportMC)("b_waimai_s0a93itw_mc", {
                        source: Object(R.e)("source")
                    }, n.pageCid),
                    location.href = "https://page.meituan.net/html/1689060159051_898aad/index.html"
                }
                )),
                U()(m()(n), "clearContent", (function() {
                    var e = n.props.reportMC;
                    n.state.content && (n.setState({
                        content: ""
                    }),
                    e("b_waimai_cptpq1q2_mc", {
                        source: Object(R.e)("source")
                    }, n.pageCid))
                }
                )),
                U()(m()(n), "handleInputLink", (function(e) {
                    n.setState({
                        content: e.target.value
                    })
                }
                )),
                U()(m()(n), "renderBgMask", (function() {
                    return i.a.createElement("div", {
                        className: "transfer-mask",
                        onClick: function() {
                            n.setState({
                                transferMask: !1
                            })
                        }
                    })
                }
                )),
                n.state = {
                    popupShow: !0,
                    content: ""
                },
                n
            }
            return g()(A, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        popupShow: !0
                    }),
                    this.props.reportPv("c_waimai_0asbf712", {
                        source: Object(R.e)("source")
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    P.a.hide()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.transferMask
                      , A = e.popupShow
                      , n = e.content;
                    return i.a.createElement("div", {
                        className: "transfer"
                    }, i.a.createElement("div", {
                        className: "transfer-bgmask ".concat(A ? "transfer-gradationin" : "transfer-gradationout"),
                        onClick: this.closePopup
                    }), i.a.createElement("div", {
                        className: "transfer-bar ".concat(A ? "transfer-gradationin" : "transfer-gradationout")
                    }, i.a.createElement("div", {
                        className: "transfer-bar-desc"
                    }, "通过转换后链接所产生的订单才能计入您的佣金中"), i.a.createElement("div", {
                        className: "transfer-bar-link",
                        onClick: this.jumpCourse
                    }, "教程")), i.a.createElement("div", {
                        className: "transfer-content ".concat(A ? "transfer-fadein" : "transfer-fadeout")
                    }, i.a.createElement("div", {
                        className: "transfer-title"
                    }, i.a.createElement("span", {
                        className: "transfer-title-left"
                    }, i.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/73e539973def33173ba3e98f1e4cec80980.png",
                        alt: "",
                        onClick: this.closePopup
                    })), i.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/03025ceca0f17977054d175062d44d411517.png",
                        alt: "",
                        className: "transfer-title-close",
                        onClick: this.closePopup
                    })), i.a.createElement("div", {
                        className: "transfer-type"
                    }, i.a.createElement("div", {
                        className: "transfer-type-title"
                    }, i.a.createElement("span", {
                        className: "transfer-type-left"
                    }, i.a.createElement("img", {
                        src: "//p0.meituan.net/travelcube/df590832fb2df7c689b617e9cc670cc92726.png",
                        alt: ""
                    }), "待转换的链接"), i.a.createElement("span", {
                        className: "transfer-type-right ".concat(n ? "" : "disabled-clear"),
                        onClick: this.clearContent
                    }, "清空内容")), i.a.createElement("div", {
                        className: "transfer-type-content"
                    }, i.a.createElement("textarea", {
                        placeholder: "请将您要推广的原始链接粘贴到这里，并确保链接的完整性",
                        value: n,
                        onChange: this.handleInputLink
                    })), i.a.createElement("div", {
                        className: "transfer-type-btn ".concat(n ? "" : "disabled-btn"),
                        onClick: this.transferLink
                    }, "转换为我的链接"))), t && this.renderBgMask())
                }
            }]),
            A
        }(i.a.Component)
          , wt = n("Uunj")
          , vt = n("NYxa");
        function Et(e, t) {
            var A = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                A.push.apply(A, n)
            }
            return A
        }
        function Ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var A = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Et(Object(A), !0).forEach((function(t) {
                    U()(e, t, A[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : Et(Object(A)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                }
                ))
            }
            return e
        }
        function Qt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = y()(e);
                if (t) {
                    var r = y()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return C()(this, A)
            }
        }
        function yt(e) {
            var t = Object(R.e)(e);
            return t ? t > 1e3 ? t / 1e6 : t : ""
        }
        var bt = 1
          , Ut = 2
          , Ft = [{
            title: "同城热销",
            list: [],
            type: bt,
            img: "//p1.meituan.net/travelcube/b8f33fbc99121a750af5239e05fb29483021.png"
        }, {
            title: "跟推榜单",
            list: [],
            type: Ut,
            img: "//p0.meituan.net/travelcube/266f299b0287beb83d17e9f09356d3db2825.png"
        }]
          , Tt = "c_waimai_vmrejevq"
          , Ht = encodeURIComponent("./list.html?wm_longitude=".concat(yt("wm_longitude") || "", "&wm_latitude=").concat(yt("wm_latitude") || "", "&pickedCityName=").concat(Object(R.e)("pickedCityName") || Object(R.e)("pickedAddress"), "&source=").concat(Object(R.e)("source") || ""))
          , St = function(t) {
            v()(r, t);
            var A, n = Qt(r);
            function r(t) {
                var A;
                return p()(this, r),
                A = n.call(this, t),
                U()(m()(A), "reportView", (function(e) {
                    if (console.log("infos=", e),
                    "string" == typeof e) {
                        var t = {};
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            console.log("JSON解析失败")
                        }
                        window.LXAnalytics && window.LXAnalytics("moduleView", t.bid, {
                            custom: Ct(Ct({}, t.val_lab), {}, {
                                account_id: window.localStorage.getItem(vt.a),
                                source: Object(R.e)("source") || ""
                            })
                        }, {
                            cid: t.cid
                        })
                    }
                }
                )),
                U()(m()(A), "initData", (function() {
                    var e = A.state
                      , t = e.longitude
                      , n = e.latitude;
                    A.error = !1,
                    P.a.show(),
                    S.a.post({
                        url: "./getHomeCouponPackList.php",
                        body: {
                            longitude: t,
                            latitude: n
                        },
                        checkLogic: !1
                    }).then((function(e) {
                        "string" == typeof e && (e = JSON.parse(e));
                        var t = e.data
                          , n = t.mustShareToday
                          , r = t.eventPromotionalBanner
                          , i = t.localHotRecommend
                          , s = t.mediaHotRecommend
                          , o = (i || {}).couponPackList
                          , a = void 0 === o ? [] : o
                          , l = (s || {}).couponPackList
                          , c = void 0 === l ? [] : l;
                        if (setTimeout((function() {
                            P.a.hide()
                        }
                        ), 100),
                        0 == +e.code) {
                            var u = []
                              , d = []
                              , h = [];
                            if (a.length >= 2 && c.length >= 2 ? (d = a.slice(0, 2),
                            h = c.slice(0, 2)) : (a.length < 2 || c.length < 2) && (d = a.length < 4 ? [] : a.slice(0, 4),
                            h = c.length < 4 ? [] : c.slice(0, 4)),
                            d.length) {
                                var p = Ct(Ct({}, Ft[0]), {}, {
                                    list: d
                                });
                                u.push(p)
                            }
                            if (h.length) {
                                var f = Ct(Ct({}, Ft[1]), {}, {
                                    list: h
                                });
                                u.push(f)
                            }
                            A.setState({
                                mustShareToday: (null == n ? void 0 : n.couponPackList) ? n.couponPackList.slice(0, 6) : [],
                                eventPromotionalBanner: r || [],
                                localAndMediaList: u
                            }, (function() {
                                var e, t = A.state.exp;
                                null == n || null === (e = n.couponPackList) || void 0 === e || e.slice(0, 6).map((function(e) {
                                    t.add(document.getElementById("commodity-item-".concat(e.vpSkuId)), e.vpSkuId)
                                }
                                )),
                                null == u || u.map((function(e) {
                                    e.list.map((function(e) {
                                        t.add(document.getElementById("commodity-small-item-".concat(e.vpSkuId)), e.vpSkuId)
                                    }
                                    ))
                                }
                                )),
                                A.initReportPoint()
                            }
                            ))
                        } else
                            2 == +e.code ? A.setState({
                                visible: !0,
                                alertMsg: "媒体状态异常，请咨询客服"
                            }) : 3 == +e.code || 29 == +e.code ? 3 == +e.code ? Object(R.c)(Ht) : Object(R.c)(Ht, "notClean") : A.error = !0
                    }
                    )).catch((function(e) {
                        A.error = !0
                    }
                    )).finally((function() {
                        A.getInfo([], "init")
                    }
                    ))
                }
                )),
                U()(m()(A), "initReportPoint", (function() {
                    var e, t, n = A.state, r = n.mustShareToday, i = n.localAndMediaList, s = n.locationText, o = {
                        "今日必推": {
                            num: r.length,
                            theme_id: z.i.TODAY
                        },
                        "同城热销": {
                            num: null === (e = i.filter((function(e) {
                                return e.type === bt
                            }
                            ))[0]) || void 0 === e ? void 0 : e.list.length,
                            theme_id: z.i.LOCAL
                        },
                        "跟推榜单": {
                            num: null === (t = i.filter((function(e) {
                                return e.type === Ut
                            }
                            ))[0]) || void 0 === t ? void 0 : t.list.length,
                            theme_id: z.i.MEDIA
                        }
                    };
                    Object.keys(o).forEach((function(e) {
                        o[e].num && A.reportView(JSON.stringify({
                            bid: "b_waimai_i3k2fcf6_mv",
                            cid: Tt,
                            val_lab: Ct(Ct({}, o[e]), {}, {
                                activity_urlkey: window.location.href,
                                city_name: s
                            })
                        }))
                    }
                    ))
                }
                )),
                U()(m()(A), "reportPv", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = A.state.locationText;
                    window.LXAnalytics && window.LXAnalytics("pageView", {
                        custom: Ct({
                            activity_urlkey: window.location.href,
                            city_name: n,
                            account_id: window.localStorage.getItem(vt.a),
                            source: Object(R.e)("source") || ""
                        }, t)
                    }, null, e)
                }
                )),
                U()(m()(A), "reportMC", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                      , r = A.state.locationText;
                    window.LXAnalytics && window.LXAnalytics("moduleClick", e, {
                        custom: Ct({
                            activity_urlkey: window.location.href,
                            city_name: r,
                            account_id: window.localStorage.getItem(vt.a),
                            source: Object(R.e)("source") || ""
                        }, t)
                    }, {
                        cid: n
                    })
                }
                )),
                U()(m()(A), "bannerJump", (function(e) {
                    var t = e.bannerUrl
                      , n = e.bannerPic
                      , r = e.index
                      , i = A.state
                      , s = i.eventPromotionalBanner
                      , o = i.locationText;
                    A.reportMC("b_waimai_qp1up60z_mc", {
                        index: r,
                        pic_url: n,
                        num: s.length,
                        city_name: o
                    }, Tt),
                    window.location.href = t
                }
                )),
                U()(m()(A), "openTransferPopup", (function(e) {
                    A.setState({
                        showTransferPopup: e
                    })
                }
                )),
                U()(m()(A), "onSearch", (function() {}
                )),
                U()(m()(A), "updateShareData", (function(e, t) {
                    var n = t.vpSkuId
                      , r = t.index
                      , i = t.themeId
                      , e = JSON.parse(e)
                      , s = e.data;
                    if (0 == +e.code) {
                        var o = s.vpSkuName
                          , a = s.vpSkuMainPic
                          , l = s.clickLink
                          , c = {
                            title: o ? "".concat(null == o ? void 0 : o.slice(0, 12)).concat(o.length > 12 ? "..." : "") : "点外卖，用超值券包更优惠",
                            imgUrl: a || "//p0.meituan.net/travelcube/2be1b498f4bb776275671198a1d12f1339059.png",
                            link: l
                        };
                        //A.shareLogin(c),
                        A.setState({
                            showPopup: !0,//!0
                            popupData: s,
                            chooseThemeId: i
                        })
                    } else
                        2 == +e.code ? A.setState({
                            showPopup: !0,
                            visible: !0,
                            alertMsg: "媒体状态异常，请咨询客服"
                        }) : 3 == +e.code || 29 == +e.code ? 3 == +e.code ? Object(R.c)(Ht) : Object(R.c)(Ht, "notClean") : k.a.show("打开失败，请重试");
                    A.reportMC("b_waimai_fhyc8jkw_mc", Object.assign({
                        vp_sku_id: n,
                        theme_id: i,
                        sku_type: s ? 2 === (null == s ? void 0 : s.configSku) ? "activity" : "vpsku" : "unknow"
                    }, -1 !== r ? {
                        index: r
                    } : {}), Tt)
                }
                )),
                U()(m()(A), "openSharePopup", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0
                      , n = e.vpSkuId
                      , r = A.state.showPopup;
                    if (r)
                        return A.shareLogin(),
                        void A.setState({
                            showPopup: !r
                        });
                    t ? A.updateShareData(e.response, e) : S.a.post({
                        url: "./couponPackEarnBySharing.php",
                        body: {
                            vpSkuId: n
                        },
                        checkLogic: !1
                    }).then((function(t) {
                        A.updateShareData(t, e)
                        console.log('这是回调的t',t)
                    }
                    )).catch((function(e) {
                        P.a.hide()
                    }
                    ))
                }
                )),
                U()(m()(A), "jumpCommodityListPage", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.vpSkuId
                      , n = e.index
                      , r = e.themeId
                      , i = e.skuType;
                    console.log("params....", e);
                    var s = A.state
                      , o = s.longitude
                      , a = s.latitude
                      , l = s.locationText;
                    t && A.reportMC("b_waimai_3nwb82j8_mc", {
                        index: n,
                        vp_sku_id: t,
                        theme_id: r,
                        source: Object(R.e)("source"),
                        sku_type: i
                    }, Tt),
                    window.location.href = "./list.html?wm_longitude=".concat(o, "&wm_latitude=").concat(a, "&pickedCityName=").concat(l, "&tab=").concat(r, "&source=").concat(Object(R.e)("source") || "")
                }
                )),
                U()(m()(A), "wxInit", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (window.wx) {
                        var A = 0 !== Object.keys(t).length
                          , n = {
                            appId: e.wxAppId,
                            timestamp: e.wxTimestamp,
                            nonceStr: e.wxNonceStr,
                            signature: e.wxSignature,
                            jsApiList: ["hideMenuItems", "hideOptionMenu"]
                        };
                        A && (n.jsApiList = ["hideMenuItems", "updateAppMessageShareData", "updateTimelineShareData", "showOptionMenu"]),
                        window.wx.config(n),
                        window.wx.ready((function() {
                            A ? (window.wx.showOptionMenu(),
                            setTimeout((function() {
                                window.wx.updateAppMessageShareData(Ct(Ct({}, t), {}, {
                                    desc: "马上点击去抢购",
                                    success: function() {
                                        console.log("updateAppMessageShareData-success")
                                    },
                                    fail: function(e) {
                                        console.log("updateAppMessageShareData-fail", e)
                                    }
                                })),
                                window.wx.updateTimelineShareData(Ct(Ct({}, t), {}, {
                                    success: function() {
                                        console.log("updateTimelineShareData-success")
                                    },
                                    fail: function(e) {
                                        console.log("updateTimelineShareData-fail", e)
                                    }
                                })),
                                window.wx.hideMenuItems({
                                    menuList: ["menuItem:copyUrl", "menuItem:favorite", "menuItem:openWithSafari", "menuItem:openWithQQBrowser", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:QZone", "menuItem:share:facebook"]
                                })
                            }
                            ), 1e3)) : window.wx.hideOptionMenu()
                        }
                        )),
                        window.wx.error((function(e) {
                            console.log("e", e)
                        }
                        ))
                    } else
                        console.log("找不到wx")
                }
                )),
                U()(m()(A), "shareLogin", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    S.a.post({
                        url: "./weixinSign.php",
                        query: {
                            url: window.location.href.split("#")[0]
                        },
                        checkLogic: !1
                    }).then((function(t) {
                        0 == +t.code ? A.wxInit(t.data, e) : Object(a.b)("B".concat(t.code), "".concat(window.location.origin, "https://media.meituan.com/mtz/retail/wechatSignature"), {
                            ResponseData: t,
                            RequestParams: {
                                url: window.location.href.split("#")[0]
                            }
                        })
                    }
                    )).catch((function(e) {
                        Object(a.b)(e.feErrorCode || "F10", "".concat(window.location.origin, "https://media.meituan.com/mtz/retail/wechatSignature"), {
                            reponseRrror: e,
                            RequestParams: {
                                url: window.location.href.split("#")[0]
                            }
                        })
                    }
                    ))
                }
                )),
                U()(m()(A), "getInfo", (function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    return new Promise((function(r) {
                        var i = A.state
                          , s = i.longitude
                          , o = i.latitude
                          , l = i.page
                          , c = i.pageSize
                          , u = i.total
                          , h = i.selectedTab
                          , p = i.selectedFilter
                          , f = i.flag
                          , g = i.selectedPriceOrder
                          , B = i.listInfo
                          , m = i.locationText;
                        if (!f)
                            if (u !== B.length) {
                                A.setState({
                                    flag: !0
                                });
                                var w = p === z.g.PRICE ? g : p;
                                S.a.post({
                                    url: "./couponPackRankingList.php",
                                    body: {
                                        longitude: s,
                                        latitude: o,
                                        rankingListType: h,
                                        sortType: w,
                                        page: l + 1,
                                        pageSize: c
                                    },
                                    checkLogic: !1
                                }).then((function(i) {
                                    if ("string" == typeof i && (i = JSON.parse(i)),
                                    "init" === n && A.reportView(JSON.stringify({
                                        bid: "b_waimai_i3k2fcf6_mv",
                                        cid: Tt,
                                        val_lab: {
                                            theme_id: z.i.CHOSEN,
                                            num: i.data.total || 0,
                                            activity_urlkey: window.location.href,
                                            city_name: m
                                        }
                                    })),
                                    0 == +i.code) {
                                        var s = t.concat.apply(t, d()(i.data.couponPackList)) || [];
                                        A.setState({
                                            listInfo: s,
                                            page: l + 1,
                                            total: i.data.total,
                                            flag: !1,
                                            listLoading: !1
                                        }, (function() {
                                            i.data.couponPackList && Array.isArray(i.data.couponPackList) && !A.state.identificationCode && i.data.couponPackList.map((function(e) {
                                                A.state.exp.add(document.getElementById("list-item-".concat(e.vpSkuId)), e.vpSkuId)
                                            }
                                            )),
                                            i.data.total === s.length ? r({
                                                noMore: !0,
                                                data: i.data
                                            }) : r({
                                                success: !0,
                                                data: i.data
                                            })
                                        }
                                        ))
                                    } else if (2 == +i.code)
                                        A.setState({
                                            visible: !0,
                                            flag: !1,
                                            listInfo: [],
                                            page: 0,
                                            total: -1,
                                            alertMsg: "媒体状态异常，请咨询客服"
                                        }),
                                        r({
                                            success: !1
                                        });
                                    else if (3 == +i.code || 29 == +i.code)
                                        3 == +i.code ? Object(R.c)(Ht) : Object(R.c)(Ht, "notClean"),
                                        A.setState({
                                            listInfo: [],
                                            page: 0,
                                            total: -1,
                                            flag: !1
                                        }),
                                        r({
                                            success: !1
                                        });
                                    else if (A.setState({
                                        flag: !1,
                                        listInfo: []
                                    }),
                                    r({
                                        success: !1
                                    }),
                                    A.error && "init" === n) {
                                        var o = Object(a.b)(e.feErrorCode || "F10", "".concat(window.location.origin, "./couponPackRankingList.php"), {
                                            ResponseData: i
                                        });
                                        A.setState({
                                            identificationCode: o
                                        })
                                    }
                                    setTimeout((function() {
                                        P.a.hide()
                                    }
                                    ), 100)
                                }
                                )).catch((function(e) {
                                    if (reportView(JSON.stringify({
                                        bid: "b_waimai_i3k2fcf6_mv",
                                        cid: Tt,
                                        val_lab: {
                                            theme_id: z.i.CHOSEN,
                                            num: 0,
                                            activity_urlkey: window.location.href,
                                            city_name: m
                                        }
                                    })),
                                    A.setState({
                                        listInfo: [],
                                        flag: !1
                                    }),
                                    setTimeout((function() {
                                        P.a.hide()
                                    }
                                    ), 100),
                                    r({
                                        success: !1
                                    }),
                                    A.error && "init" === n) {
                                        var t = Object(a.b)(e.feErrorCode || "F10", "".concat(window.location.origin, "./couponPackRankingList.php"), {
                                            reponseRrror: e
                                        });
                                        A.setState({
                                            identificationCode: t
                                        })
                                    }
                                    A.error = !0
                                }
                                )).finally((function() {
                                    A.setState({
                                        listLoading: !1
                                    })
                                }
                                ))
                            } else
                                r({
                                    noMore: !0
                                })
                    }
                    ))
                }
                )),
                U()(m()(A), "closeModal", (function() {
                    var e = A.state.alertMsg;
                    A.setState({
                        visible: !1,
                        alertMsg: ""
                    }, (function() {
                        "本页面仅限微信访问" !== e && "媒体状态异常，请咨询客服" !== e || setTimeout((function() {
                            window.location.href = "https://m.meituan.com"
                        }
                        ), 200)
                    }
                    ))
                }
                )),
                U()(m()(A), "handleTabChange", function() {
                    var e = c()(T.a.mark((function e(t, n) {
                        return T.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    console.log("tabChange", t),
                                    A.setState({
                                        selectedTab: t,
                                        selectedFilter: z.g.ALL,
                                        selectedPriceOrder: z.d.DECREASE,
                                        page: 0,
                                        listInfo: [],
                                        total: -1
                                    }, c()(T.a.mark((function e() {
                                        var t;
                                        return T.a.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    A.getInfo();
                                                case 2:
                                                    t = e.sent,
                                                    n(t);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    ))));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, A) {
                        return e.apply(this, arguments)
                    }
                }()),
                U()(m()(A), "handleFilterChange", function() {
                    var e = c()(T.a.mark((function e(t, n) {
                        var r, i, s;
                        return T.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = "",
                                    i = A.state.selectedPriceOrder,
                                    r = t === z.g.PRICE ? i === z.d.INCREASE ? z.d.DECREASE : z.d.INCREASE : i,
                                    s = "",
                                    s = t === z.g.ALL ? "default" : t === z.g.PRICE && r === z.d.INCREASE ? "asc" : t === z.g.CITY ? "" : "desc",
                                    A.reportMC("b_waimai_gxzx2zat_mc", {
                                        index: t,
                                        sort: s,
                                        filter_name: z.f[t],
                                        source: Object(R.e)("source")
                                    }, Tt),
                                    t !== z.g.CITY) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    A.setState({
                                        selectedPriceOrder: r,
                                        selectedFilter: t,
                                        page: 0,
                                        total: -1
                                    }, c()(T.a.mark((function e() {
                                        var t;
                                        return T.a.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    A.getInfo();
                                                case 2:
                                                    t = e.sent,
                                                    n(t);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    ))));
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, A) {
                        return e.apply(this, arguments)
                    }
                }()),
                U()(m()(A), "renderList", (function() {
                    var e = A.state
                      , t = e.listInfo
                      , n = e.latitude
                      , r = e.longitude
                      , s = e.selectedTab
                      , o = e.selectedFilter
                      , a = e.selectedPriceOrder
                      , l = e.locationText
                      , c = e.total;
                    return i.a.createElement(X.a, {
                        latitude: n,
                        longitude: r,
                        locationText: l,
                        list: t,
                        showTab: !1,
                        showFilter: !0,
                        selectedPriceOrder: a,
                        selectedTab: s,
                        selectedFilter: o,
                        tabs: [z.i.CHOSEN, z.i.TODAY, z.i.LOCAL, z.i.MEDIA],
                        filters: [z.g.ALL, z.g.PRICE, z.g.SALES, z.g.COMMISSION],
                        onTabChange: A.handleTabChange,
                        onFilterChange: A.handleFilterChange,
                        total: c,
                        getInfo: A.getInfo,
                        openSharePopup: A.openSharePopup,
                        viewObject: {
                            cid: Tt,
                            bid: "b_waimai_hpk4e6fs_mv",
                            val_lab: {
                                activity_urlkey: window.location.href,
                                account_id: window.localStorage.getItem(vt.a),
                                city_name: l,
                                theme_id: s
                            }
                        }
                    })
                }
                )),
                A.state = {
                    identificationCode: "",
                    listInfo: [],
                    visible: !1,
                    alertMsg: "",
                    longitude: yt("wm_longitude") || "",
                    latitude: yt("wm_latitude") || "",
                    page: 0,
                    pageSize: 10,
                    total: -1,
                    selectedPriceOrder: z.d.DECREASE,
                    selectedTab: z.i.CHOSEN,
                    selectedFilter: z.g.ALL,
                    locationText: decodeURIComponent(Object(R.e)("pickedCityName") || Object(R.e)("pickedAddress")) || "未知",
                    flag: !1,
                    showTransferPopup: !1,
                    showPopup: !1,
                    mustShareToday: [],
                    eventPromotionalBanner: [],
                    localAndMediaList: [],
                    popupData: {},
                    chooseThemeId: "",
                    exp: new D.a(m()(A)),
                    listLoading: !0
                },
                A.error = !1,
                A
            }
            return g()(r, [{
                key: "componentDidMount",
                value: (A = c()(T.a.mark((function e() {
                    var t, A, n, r, i = this;
                    return T.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(L.a && L.a.versions && L.a.versions.weixin)) {
                                    e.next = 15;
                                    break
                                }
                                if (window.addEventListener("pageshow", (function() {
                                    setTimeout((function() {
                                        i.shareLogin()
                                    }
                                    ), 100)
                                }
                                )),
                                t = this.state,
                                A = t.longitude,
                                n = t.latitude,
                                A && n) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 6,
                                Object(R.d)();
                            case 6:
                                "手动选择城市" === (r = e.sent).city && (r.city = "重新定位"),
                                this.setState({
                                    longitude: r.lng,
                                    latitude: r.lat,
                                    locationText: r.city
                                }, (function() {
                                    i.getLoignInfo()
                                }
                                )),
                                e.next = 12;
                                break;
                            case 11:
                                this.getLoignInfo();
                            case 12:
                                this.reportPv(Tt),
                                e.next = 16;
                                break;
                            case 15:
                                this.setState({
                                    alertMsg: "本页面仅限微信访问",
                                    visible: !0
                                });
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return A.apply(this, arguments)
                }
                )
            }, {
                key: "getLoignInfo",
                value: function() {
                    var e = this;
                    S.a.post({
                        url: "./login.php",
                        checkLogic: !1
                    }).then((function(t) {
                        if (0 == +t.code) {
                            var A = t.data && t.data.mediaType
                              , n = t.data && t.data.mediaId;
                            A && Object(_.c)(vt.c, A),
                            window.localStorage.setItem(vt.a, n),
                            e.initData()
                        } else
                            2 == +t.code ? e.setState({
                                visible: !0,
                                alertMsg: "媒体状态异常，请咨询客服"
                            }) : 3 == +t.code ? Object(R.c)(Ht) : e.initData()
                    }
                    )).catch((function(t) {
                        e.initData()
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , A = t.identificationCode
                      , n = t.visible
                      , r = t.alertMsg
                      , s = t.mustShareToday
                      , o = t.eventPromotionalBanner
                      , a = t.showTransferPopup
                      , l = t.showPopup
                      , c = t.localAndMediaList
                      , u = t.popupData
                      , d = t.locationText
                      , h = t.chooseThemeId
                      , p = t.listLoading
                      , f = this.jumpCommodityListPage
                      , g = this.openTransferPopup
                      , B = this.openSharePopup
                      , m = this.onSearch
                      , w = this.bannerJump
                      , v = this.reportMC
                      , E = this.reportPv
                      , C = this.reportView
                      , Q = {
                        cid: Tt,
                        bid: "b_waimai_hpk4e6fs_mv"
                    };
                    return i.a.createElement("div", {
                        className: "recommend-page-wrap"
                    }, !A && i.a.createElement(i.a.Fragment, null, "true" === Object(R.e)("onshow") && i.a.createElement($, {
                        openTransferPopup: g,
                        openSharePopup: B,
                        onSearch: m,
                        reportMC: v,
                        pageCid: Tt
                    }), s.length > 0 && i.a.createElement(ee, {
                        jumpCommodityListPage: f,
                        openSharePopup: B,
                        mustShareToday: s,
                        viewObject: Q
                    }), c.length > 0 && i.a.createElement(re, {
                        jumpCommodityListPage: f,
                        openSharePopup: B,
                        localAndMediaList: c,
                        viewObject: Q
                    }), o.length > 0 && i.a.createElement(gt, {
                        bannerJump: w,
                        eventPromotionalBanner: o,
                        viewObject: {
                            cid: Tt,
                            bid: "b_waimai_7r096pg7_mv",
                            cityName: d
                        },
                        reportView: C
                    }), !p && this.renderList(), a && i.a.createElement(mt, {
                        openTransferPopup: g,
                        openSharePopup: B,
                        popupData: u,
                        reportMC: v,
                        reportPv: E,
                        chooseThemeId: h
                    }), l && i.a.createElement(wt.a, {
                        showTransferPopup: a,
                        openTransferPopup: g,
                        openSharePopup: B,
                        popupData: u,
                        reportMC: v,
                        reportPv: E,
                        chooseThemeId: h,
                        reportView: C
                    }), n && i.a.createElement(I.a, {
                        title: "",
                        visible: n,
                        onClose: function() {
                            return e.closeModal()
                        }
                    }, r)), A && i.a.createElement(N.a, {
                        identificationCode: A
                    }))
                }
            }]),
            r
        }(i.a.Component)
          , Nt = Object(K.a)(St);
        n("Wvm5");
        Object(a.a)(),
        o.a.render(i.a.createElement(Nt, null), document.getElementById("root"))
    },
    "91GP": function(e, t, A) {
        var n = A("XKFU");
        n(n.S + n.F, "Object", {
            assign: A("czNK")
        })
    },
    "9L0q": function(e, t, A) {},
    AnPH: function(e, t, A) {},
    AzAI: function(e, t, A) {},
    DdPZ: function(e, t) {
        var A = Math.ceil
          , n = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : A)(e)
        }
    },
    E9nw: function(e, t) {
        e.exports = function() {
            var e = document.getSelection();
            if (!e.rangeCount)
                return function() {}
                ;
            for (var t = document.activeElement, A = [], n = 0; n < e.rangeCount; n++)
                A.push(e.getRangeAt(n));
            switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
            }
            return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount || A.forEach((function(t) {
                    e.addRange(t)
                }
                )),
                t && t.focus()
            }
        }
    },
    GSKs: function(e, t, A) {},
    GgmE: function(e, t, A) {},
    Grdq: function(e, t, A) {
        "use strict";
        A("hfKm")(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = s(A("RNEG"))
          , r = s(A("fx8m"));
        A("JqUd");
        var i = s(A("pSK3"));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = (0,
        n.default)(i.default)(r.default);
        t.default = o
    },
    H9cp: function(e, t, A) {},
    IgQE: function(e, t, A) {
        "use strict";
        var n = A("7W6E")(!0);
        e.exports = function(e, t, A) {
            return t + (A ? n(e, t).length : 1)
        }
    },
    Jn7e: function(e, t, A) {
        "use strict";
        A.d(t, "a", (function() {
            return o
        }
        )),
        A.d(t, "b", (function() {
            return a
        }
        )),
        A.d(t, "e", (function() {
            return l
        }
        )),
        A.d(t, "c", (function() {
            return c
        }
        )),
        A.d(t, "i", (function() {
            return u
        }
        )),
        A.d(t, "h", (function() {
            return d
        }
        )),
        A.d(t, "g", (function() {
            return h
        }
        )),
        A.d(t, "d", (function() {
            return p
        }
        )),
        A.d(t, "f", (function() {
            return f
        }
        )),
        A.d(t, "j", (function() {
            return g
        }
        ));
        var n, r, i = A("vR76"), s = A.n(i), o = "手动选择城市", a = {
            normal: "NORMAL",
            poi: "POI_MATERIAL",
            poiProduct: "POI_SINGLE_PRODUCT",
            poiApi: "POI_API_MATERIAL",
            productApi: "PRODUCT_API_MATERIAL"
        }, l = {
            more: "上拉加载更多",
            fail: "加载失败，请稍后再试～",
            noMore: "已经到底啦"
        }, c = {
            default: 1,
            desc: 2,
            asc: 3
        }, u = {
            CHOSEN: 1,
            TODAY: 2,
            LOCAL: 3,
            MEDIA: 4,
            TRANSFER: 99
        }, d = (n = {},
        s()(n, u.CHOSEN, "精选"),
        s()(n, u.TODAY, "今日必推"),
        s()(n, u.LOCAL, "同城热销"),
        s()(n, u.MEDIA, "跟推榜单"),
        n), h = {
            ALL: 1,
            PRICE: 2,
            SALES: 4,
            COMMISSION: 5,
            CITY: 6
        }, p = {
            INCREASE: 2,
            DECREASE: 3
        }, f = (r = {},
        s()(r, h.ALL, "综合排序"),
        s()(r, h.PRICE, "价格"),
        s()(r, h.SALES, "销量"),
        //s()(r, h.COMMISSION, "佣金收入"),
        s()(r, h.CITY, "城市"),
        r), g = {
            SALE: 1,
            UNSALE: 2
        }
    },
    LzhO: function(e, t, A) {},
    NYxa: function(e, t, A) {
        "use strict";
        A.d(t, "d", (function() {
            return n
        }
        )),
        A.d(t, "b", (function() {
            return r
        }
        )),
        A.d(t, "c", (function() {
            return i
        }
        )),
        A.d(t, "a", (function() {
            return s
        }
        ));
        var n = {
            ON_THE_WAY: "1",
            SETTLED: "2",
            EXPIRED: "3"
        }
          , r = {
            PERSON: "1",
            COMPANY: "2"
        }
          , i = "front_cur_media_type"
          , s = "front_cur_media_id"
    },
    Nr18: function(e, t, A) {
        "use strict";
        var n = A("S/j/")
          , r = A("d/Gc")
          , i = A("ne8i");
        e.exports = function(e) {
            for (var t = n(this), A = i(t.length), s = arguments.length, o = r(s > 1 ? arguments[1] : void 0, A), a = s > 2 ? arguments[2] : void 0, l = void 0 === a ? A : r(a, A); l > o; )
                t[o++] = e;
            return t
        }
    },
    OGh1: function(e, t, A) {
        "use strict";
        var n, r, i = A("K5r4"), s = RegExp.prototype.exec, o = String.prototype.replace, a = s, l = (n = /a/,
        r = /b*/g,
        s.call(n, "a"),
        s.call(r, "a"),
        0 !== n.lastIndex || 0 !== r.lastIndex), c = void 0 !== /()??/.exec("")[1];
        (l || c) && (a = function(e) {
            var t, A, n, r, a = this;
            return c && (A = new RegExp("^" + a.source + "$(?!\\s)",i.call(a))),
            l && (t = a.lastIndex),
            n = s.call(a, e),
            l && n && (a.lastIndex = a.global ? n.index + n[0].length : t),
            c && n && n.length > 1 && o.call(n[0], A, (function() {
                for (r = 1; r < arguments.length - 2; r++)
                    void 0 === arguments[r] && (n[r] = void 0)
            }
            )),
            n
        }
        ),
        e.exports = a
    },
    P5Jw: function(e, t, A) {
        "use strict";
        var n = A("rHrb").CopyToClipboard;
        n.CopyToClipboard = n,
        e.exports = n
    },
    SJXK: function(e, t, A) {
        var n = A("fBKz");
        e.exports = function(e) {
            return Object(n(e))
        }
    },
    TPLH: function(e, t, A) {
        "use strict";
        var n = A("OGh1");
        A("hWTD")({
            target: "RegExp",
            proto: !0,
            forced: n !== /./.exec
        }, {
            exec: n
        })
    },
    U4Qu: function(e, t, A) {
        "use strict";
        var n = A("yZVg")
          , r = A.n(n)
          , i = A("rULw")
          , s = A("NYxa");
        t.a = function(e) {
            return Object(i.b)(s.c) === s.b.COMPANY ? (r.a.show("企业用户请访问PC端使用网盟服务"),
            setTimeout((function() {
                window.location.href = "https://i.meituan.com/"
            }
            ), 3e3),
            null) : e
        }
    },
    Uunj: function(e, t, A) {
        "use strict";
        A("jm62"),
        A("0l/t"),
        A("ioFf"),
        A("rGqo"),
        A("yt8O"),
        A("RW0V"),
        A("I5cv"),
        A("I78e"),
        A("bWfx"),
        A("VRzm"),
        A("Btvt"),
        A("CX2u");
        var n = A("HsOD")
          , r = A.n(n)
          , i = A("pj57")
          , s = A.n(i)
          , o = A("a/cl")
          , a = A.n(o)
          , l = A("Pkpw")
          , c = A.n(l)
          , u = A("oEga")
          , d = A.n(u)
          , h = A("9WXe")
          , p = A.n(h)
          , f = A("vR76")
          , g = A.n(f)
          , B = A("q1tI")
          , m = A.n(B)
          , w = A("Jrpl")
          , v = A.n(w)
          , E = A("P5Jw")
          , C = A.n(E)
          , Q = A("yZVg")
          , y = A.n(Q)
          , b = A("Wu5E")
          , U = A.n(b)
          , F = A("6wY4")
          , T = A.n(F)
          , H = A("1zE1")
          , S = A.n(H)
          , N = (A("Vd3H"),
        A("4vFl"),
        A("wOnQ"))
          , x = A.n(N)
          , I = A("+n12");
        function O(e, t) {
            var A = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                A.push.apply(A, n)
            }
            return A
        }
        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var A = null != arguments[t] ? arguments[t] : {};
                t % 2 ? O(Object(A), !0).forEach((function(t) {
                    g()(e, t, A[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : O(Object(A)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                }
                ))
            }
            return e
        }
        function M(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = p()(e);
                if (t) {
                    var r = p()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return d()(this, A)
            }
        }
        var P = function(e) {
            c()(A, e);
            var t = M(A);
            function A(e) {
                var n;
                return r()(this, A),
                n = t.call(this, e),
                g()(a()(n), "reportPoint", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = n.props
                      , A = t.popupData
                      , r = A.vpSkuId
                      , i = A.configSku
                      , s = t.picList
                      , o = t.reportMC
                      , a = k({
                        vp_sku_id: r,
                        cid: "c_waimai_2apbe03y",
                        theme_id: "",
                        num: s.length,
                        source: Object(I.e)("source"),
                        sku_type: 2 === i ? "activity" : "vpsku"
                    }, e);
                    o(a.bid, a, a.cid)
                }
                )),
                g()(a()(n), "group", (function(e, t) {
                    for (var A = 0, n = []; A < e.length; )
                        n.push(e.slice(A, A += t));
                    return n.reverse()
                }
                )),
                g()(a()(n), "makePoster", (function() {
                    var e = n.props.saveCanvas
                      , t = n.state.canvasImg
                      , A = document.getElementsByClassName("canvas")[0]
                      , r = {
                        scale: window.devicePixelRatio,
                        width: A.offsetWidth,
                        height: A.offsetHeight,
                        useCORS: !0,
                        allowTaint: !0,
                        backgroundColor: "transparent"
                    };
                    x()(A, r).then((function(A) {
                        var r = A.toDataURL("image/png", 1);
                        !t && e(r),
                        n.setState({
                            canvasImg: r
                        })
                    }
                    )).catch((function() {
                        !t && e(null)
                    }
                    ))
                }
                )),
                g()(a()(n), "ellipsizeTextElement", (function() {
                    var e = n.props.popupData.vpSkuName;
                    if ("" !== e) {
                        var t = document.getElementsByClassName("canvas-title")[1];
                        if (document.getElementsByClassName("canvas-title-fixed")[0].scrollHeight <= 40)
                            t.style.height = "0.4rem";
                        else
                            for (var A = t.offsetHeight, r = 0; r < e.length + 1; r++)
                                if (t.innerHTML = e.substr(0, r),
                                A < t.scrollHeight) {
                                    t.style.overflow = "hidden",
                                    t.innerHTML = "".concat(e.substr(0, r - 3), "...");
                                    break
                                }
                    }
                }
                )),
                g()(a()(n), "choosePics", (function(e) {
                    var t = n.state.choosePicList.flat()
                      , A = t.indexOf(e);
                    if (-1 === A)
                        t.push(e);
                    else {
                        if (1 === t.length)
                            return;
                        t.splice(A, 1)
                    }
                    t = t.sort((function(e, t) {
                        return e - t
                    }
                    )),
                    t = n.group(t.reverse(), 2),
                    n.setState({
                        choosePicList: S()(t)
                    }, (function() {
                        n.makePoster()
                    }
                    )),
                    n.reportPoint({
                        num: t.flat().length,
                        bid: "b_waimai_m09ivulc_mc"
                    })
                }
                )),
                g()(a()(n), "imgLoad", (function() {
                    n.state.allImgLoad && n.makePoster(),
                    n.setState({
                        allImgLoad: !0
                    })
                }
                )),
                n.state = {
                    choosePicList: [],
                    canvasImg: "",
                    allImgLoad: !1
                },
                n
            }
            return s()(A, [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = this.props
                      , A = t.picList
                      , n = t.saveCanvas;
                    this.setState({
                        choosePicList: [[A[0]]]
                    }, (function() {
                        var t = document.getElementById("canvas-img")
                          , r = new Image;
                        r.src = A[0],
                        r.onload = function() {
                            t.style.backgroundImage = "url(".concat(A[0], ")"),
                            e.imgLoad()
                        }
                        ,
                        r.onerror = function() {
                            n(null)
                        }
                    }
                    )),
                    this.ellipsizeTextElement()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , A = t.openSharePopup
                      , n = t.picList
                      , r = t.showPosterPage
                      , i = t.downPopup
                      , s = t.popupData
                      , o = t.backShare
                      , a = t.saveCanvas
                      , l = this.state
                      , c = l.canvasImg
                      , u = l.choosePicList
                      , d = s.vpSkuName
                      , h = s.originPrice
                      , p = s.sellPrice
                      , f = s.qrCodePic;
                    return m.a.createElement("div", {
                        className: "".concat(i ? "poster-fadeout" : "", " poster"),
                        style: {
                            position: r ? "absolute" : "fixed",
                            left: r ? "0" : "-1000px"
                        }
                    }, m.a.createElement("div", {
                        className: "operation"
                    }, m.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/73e539973def33173ba3e98f1e4cec80980.png",
                        alt: "",
                        className: "header-back",
                        onClick: function() {
                            o(),
                            e.reportPoint({
                                bid: "b_waimai_73l6ls1y_mc"
                            })
                        }
                    }), m.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/03025ceca0f17977054d175062d44d411517.png",
                        alt: "",
                        className: "header-close",
                        onClick: function() {
                            A()
                        }
                    })), m.a.createElement("div", {
                        className: "content"
                    }, m.a.createElement("div", {
                        className: "title"
                    }, m.a.createElement("span", {
                        className: "title-b"
                    }, "素材图（", u.flat().length, "/", n.length, ")"), m.a.createElement("span", {
                        className: "title-t"
                    }, "长按保存图片即可发送给好友")), m.a.createElement("div", {
                        className: "pics"
                    }, n.map((function(t) {
                        return m.a.createElement("div", {
                            className: "pics-out",
                            onClick: function() {
                                e.choosePics(t)
                            },
                            key: t
                        }, m.a.createElement("img", {
                            src: t,
                            alt: "",
                            className: "pics-img"
                        }), -1 === u.flat().indexOf(t) ? m.a.createElement("span", {
                            className: "pics-choose pics-nochoose"
                        }) : m.a.createElement("img", {
                            src: "//p0.meituan.net/travelcube/32dd51f90b5d64d9a5667a078e26bb294439.png",
                            alt: "",
                            className: "pics-choose"
                        }), -1 !== u.flat().indexOf(t) && m.a.createElement("img", {
                            src: "//p1.meituan.net/travelcube/bffc7bcc4fda3499b04c416c4b3bb65026598.png",
                            alt: "",
                            className: "pics-mask"
                        }))
                    }
                    ))), c && m.a.createElement("img", {
                        src: c,
                        alt: "",
                        className: "canvas-save-img",
                        onClick: function() {
                            e.reportPoint({
                                bid: "b_waimai_80mftyht_mc"
                            })
                        }
                    }), m.a.createElement("div", {
                        className: "canvas"
                    }, m.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/59b93ce3e9c8849c0b313be8352dc5e621894.png",
                        alt: "",
                        className: "canvas-header",
                        crossOrigin: "anonymous"
                    }), m.a.createElement("div", {
                        className: "canvas-center"
                    }, m.a.createElement("div", {
                        className: "canvas-box"
                    }, u.map((function(e) {
                        return 1 === u.length && 2 === e.length ? m.a.createElement(m.a.Fragment, null, e.map((function(e) {
                            return m.a.createElement("img", {
                                src: e,
                                alt: "",
                                className: "canvas-img-two",
                                crossOrigin: "anonymous",
                                key: e
                            })
                        }
                        ))) : 1 === e.length ? m.a.createElement("div", {
                            id: "canvas-img",
                            className: "canvas-img",
                            style: {
                                backgroundImage: "url(".concat(e[0], ")")
                            }
                        }) : 2 === e.length ? m.a.createElement("div", {
                            className: "canvas-row"
                        }, e.map((function(e) {
                            return m.a.createElement("img", {
                                src: e,
                                alt: "",
                                className: "canvas-img-three",
                                crossOrigin: "anonymous",
                                key: e
                            })
                        }
                        ))) : null
                    }
                    ))), d && m.a.createElement("span", {
                        className: "canvas-title canvas-title-fixed"
                    }, d), d && m.a.createElement("span", {
                        className: "canvas-title"
                    }, d), m.a.createElement("div", {
                        className: "bottom"
                    }, m.a.createElement("div", null, m.a.createElement("div", {
                        className: "price"
                    }, m.a.createElement("span", {
                        className: "price-y"
                    }, "¥"), m.a.createElement("span", {
                        className: "price-b"
                    }, p || "??"), h && m.a.createElement("span", {
                        className: "price-s"
                    }, "¥", h, " ", m.a.createElement("span", {
                        className: "price-line"
                    }))), h && h - p != 0 && m.a.createElement("div", {
                        className: "price-cut"
                    }, "已减", (h - p).toFixed(2), "元")), m.a.createElement("img", {
                        src: f,
                        alt: "",
                        className: "price-code",
                        crossOrigin: "anonymous",
                        onLoad: function() {
                            e.imgLoad()
                        },
                        onError: function() {
                            a(null)
                        }
                    }))))))
                }
            }]),
            A
        }(m.a.Component)
          , K = A("WfBb")
          , L = A.n(K)
          , D = A("qqsA")
          , R = A.n(D);
        A("rtZs");
        function _(e, t) {
            var A = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                A.push.apply(A, n)
            }
            return A
        }
        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var A = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _(Object(A), !0).forEach((function(t) {
                    g()(e, t, A[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : _(Object(A)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                }
                ))
            }
            return e
        }
        function X(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = p()(e);
                if (t) {
                    var r = p()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return d()(this, A)
            }
        }
        A.d(t, "a", (function() {
            return $
        }
        ));
        var V = encodeURIComponent("mt.92haohuo.cn/index.html")
          , G = "//p0.meituan.net/travelcube/2be1b498f4bb776275671198a1d12f1339059.png"
          , Y = 0
          , J = 1
          , W = 2
          , $ = function(e) {
            c()(A, e);
            var t = X(A);
            function A(e) {
                var n;
                return r()(this, A),
                n = t.call(this, e),
                g()(a()(n), "adaptShareData", (function(e) {
                    var t = z({}, e);
                    return e.type && 1 === e.type && (t.clickLink = e.referralLink),
                    e.type && 2 === e.type && (t.clickLink = e.referralLink,
                    t.vpSkuMergePic = e.pic),
                    t
                }
                )),
                g()(a()(n), "getShareTypeList", (function() {
                    var e = n.state
                      , t = e.showPosterPage
                      , A = e.canvasImg
                      , r = e.shareMask
                      , i = n.props.popupData
                      , s = i = n.adaptShareData(i)
                      , o = s.vpSkuName
                      , a = s.recommendReason
                      , l = s.originPrice
                      , c = s.sellPrice
                      , u = s.discount
                      , d = s.vpSkuMainPic
                      , h = s.clickLink
                      , p = s.configSku
                      , f = s.vpSkuMergePic
                      , g = s.type
                      , B = o// || a || c || l || u || h
                      , m = {
                        title: "分享图片",
                        operatioTitle: [d || G].length > 1 ? "点击制作海报素材" : "",
                        iconUrl: "//p0.meituan.net/travelcube/7859467dc25e8c4ff3b0fff17f6014651845.png",
                        btnText: "",
                        textClick: function() {
                            n.setState({
                                showPosterPage: !t
                            }),
                            t || n.reportPoint("b_waimai_s79admwt_mc")
                        }
                    }
                      //, w = {
                        //title: "分享文案",
                        //operatioTitle: "复制文案",//仅复制链接
                        //btnText: "直接下单",//复制文案
                        //iconUrl: "//p0.meituan.net/travelcube/af565ffe0fc77d563d27996ebfa5de772316.png",
                        //textClick: function() {//链接
                            //y.a.show("链接复制成功"),
                            //n.reportPoint("b_waimai_ykusjyng_mc", {
                                //type: "copylink"
                            //})
                        //},
                        //btnClick: function() {//文案
                            //var link = "copylink";
                            //window.location.href = link;
                            //y.a.show("文案复制成功"),
                            //n.reportPoint("b_waimai_ykusjyng_mc", {
                                //type: "copytext"
                            //})
                        //}
                    //}
                      , w = {
                        title: "分享文案",
                        operatioTitle: "复制文案分享",
                        btnText: "点击抢购",
                        iconUrl: "//p0.meituan.net/travelcube/af565ffe0fc77d563d27996ebfa5de772316.png",
                        btnClick: function() {
                            y.a.show("文案复制成功"),
                            n.reportPoint("b_waimai_ykusjyng_mc", {
                                //var link = "copylink";
                                type: "copylink" //type: "copylink"
                                //window.location.href = copylink
                            })
                        },
                        textClick: function() {
                            y.a.show("复制成功"),
                            n.reportPoint("b_waimai_ykusjyng_mc", {
                                type: "copytext"
                            })
                        }
                    }
                      , v = [{
                        title: "分享链接",
                        btnText: "一键转发",
                        iconUrl: "//p1.meituan.net/travelcube/e830f4410ef10759daa41604362c4e0f2421.png",
                        btnClick: function() {
                            n.setState({
                                shareMask: !r,
                                maskType: Y
                            }),
                            !r && n.reportPoint("b_waimai_h1n4njwx_mc")
                        }
                    }];
                    return B && v.splice(0, 0, w),
                    (2 !== p && A || 2 === p && f) && v.splice(B ? 1 : 0, 0, m),
                    2 === g && f && v.splice(B ? 1 : 0, 0, m),
                    v
                }
                )),
                g()(a()(n), "reportPoint", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , A = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , r = n.props
                      , i = r.popupData
                      , s = i.vpSkuId
                      , o = i.configSku
                      , a = r.reportMC
                      , l = r.reportPv
                      , c = r.chooseThemeId
                      , u = r.reportView
                      , d = "c_waimai_2apbe03y"
                      , h = z({
                        vp_sku_id: s,
                        theme_id: c,
                        source: Object(I.e)("source"),
                        sku_type: 2 === o ? "activity" : "vpsku"
                    }, t);
                    if (A)
                        return l(d, h),
                        void u(JSON.stringify({
                            cid: d,
                            bid: e,
                            val_lab: h
                        }));
                    a(e, h, d)
                }
                )),
                g()(a()(n), "closePopup", (function(e) {
                    var t = n.props
                      , A = t.showTransferPopup
                      , r = t.openTransferPopup
                      , i = t.openSharePopup
                      , s = [t.popupData.vpSkuMainPic || G];
                    n.setState({
                        downPopup: !0
                    }, (function() {
                        var t = 2 === e ? "b_waimai_73l6ls1y_mc" : "b_waimai_lg87pg08_mc";
                        n.reportPoint(t, {
                            num: s.length
                        }),
                        !A || 0 !== e && 1 !== e || r(!1),
                        setTimeout((function() {
                            i()
                        }
                        ), 300)
                    }
                    ))
                }
                )),
                g()(a()(n), "saveCanvas", (function(e) {
                    n.setState({
                        canvasImg: e
                    }, (function() {
                        T.a.hide()
                    }
                    ))
                }
                )),
                g()(a()(n), "onShareMiniCard", (function() {
                    var e = n.props.popupData.vpSkuId
                      , t = !1;
                    T.a.show({
                        className: "roo-no-loading-msg",
                        msg: ""
                    }),
                    v.a.post({
                        url: "https://media.meituan.com/mtz/miniShareCouponPackActivity",
                        body: {
                            vpSkuId: e
                        },
                        checkLogic: !1
                    }).then((function(e) {
                        "string" == typeof e && (e = JSON.parse(e)),
                        0 == +e.code || 32 == +e.code ? (n.setState({
                            shareMask: !0,
                            maskType: 0 == +e.code ? J : W,
                            miniShareInfo: {
                                msg: e.msg,
                                img: e.data.img
                            }
                        }),
                        t = 0 == +e.code) : 2 == +e.code ? n.setState({
                            alertVisible: !0,
                            alertMsg: "媒体状态异常，请咨询客服"
                        }) : 3 == +e.code || 29 == +e.code ? 3 == +e.code ? Object(I.c)(V) : Object(I.c)(V, "notClean") : 98 == +e.code ? y.a.show(e.msg) : y.a.show("系统开小差了，请稍后再试～")
                    }
                    )).catch((function() {}
                    )).finally((function() {
                        setTimeout((function() {
                            T.a.hide()
                        }
                        ), 100),
                        n.reportPoint("b_waimai_ovh6upmv_mc", {
                            result: t
                        })
                    }
                    ))
                }
                )),
                g()(a()(n), "renderMaskMini", (function() {
                    var e = n.state.miniShareInfo;
                    return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                        className: "share-mask-icon",
                        style: {
                            backgroundImage: "url(//p0.meituan.net/travelcube/9eb0306d92ab42082705c5406f425afb13095.png)",
                            backgroundSize: "100% 100%",
                            left: ".4rem",
                            top: ".16rem",
                            height: "1.42rem",
                            width: ".92rem"
                        },
                        alt: "arrow"
                    }), e && m.a.createElement("div", {
                        className: "share-mask-mini"
                    }, m.a.createElement("div", {
                        className: "share-mask-msg"
                    }, e.msg), m.a.createElement("div", {
                        className: "share-mask-img"
                    }, e.img && m.a.createElement("img", {
                        crossOrigin: "anonymous",
                        src: e.img,
                        alt: ""
                    }))))
                }
                )),
                g()(a()(n), "renderBgMask", (function() {
                    var e = n.state.maskType;
                    return m.a.createElement("div", {
                        className: "share-mask",
                        onClick: function() {
                            n.setState({
                                shareMask: !1
                            })
                        }
                    }, e === Y && n.renderMaskLink(), (e === W || e === J) && n.renderMaskMini())
                }
                )),
                g()(a()(n), "renderTransferTitle", (function(e, t) {
                    return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                        className: "share-title"
                    }, m.a.createElement("span", {
                        className: "share-title-left"
                    }, m.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/73e539973def33173ba3e98f1e4cec80980.png",
                        alt: "",
                        onClick: function() {
                            return n.closePopup(2)
                        }
                    })), m.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/03025ceca0f17977054d175062d44d411517.png",
                        alt: "",
                        className: "share-title-close",
                        onClick: function() {
                            return n.closePopup(0)
                        }
                    })), m.a.createElement("div", {
                        className: "share-title"
                    }, m.a.createElement("span", {
                        className: "share-title-left",
                        style: e ? {} : {
                            display: "none"
                        }
                    }, "分享给亲朋好友一起点", m.a.createElement("span", {
                        //className: "share-title-red"
                    }, ), m.a.createElement("img", {//}, "￥", t || "??"), m.a.createElement("img", {
                        src: "//p0.meituan.net/travelcube/f3e52f8873a2e70bbf9b7b7ff5615c6d2976.png",
                        alt: "",
                        onClick: function() {
                            n.setState({
                                alertVisible: !0,
                                alertMsg: "今天吃的啥分享给身边的朋友 万一他也想吃呢。\n                                    "
                            })
                        }
                    }))))
                }
                )),
                n.state = {
                    showPosterPage: !1,
                    alertVisible: !1,
                    alertMsg: "",
                    shareMask: !1,
                    canvasImg: "",
                    initShow: !0,
                    downPopup: !1,
                    miniShareInfo: {
                        msg: "",
                        img: ""
                    },
                    maskType: Y
                },
                n.destroy = !1,
                n
            }
            return s()(A, [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = (this.props || {}).popupData || {}
                      , A = t.qrCodePic
                      , n = t.configSku;
                    setTimeout((function() {
                        e.setState({
                            initShow: !1
                        })
                    }
                    ), 300),
                    setTimeout((function() {
                        e.destroy || A && 2 !== n && !e.state.canvasImg && T.a.show()
                    }
                    ), 1e3),
                    this.reportPoint("b_waimai_ertcuthv_mv", {}, !0)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.destroy = !0,
                    T.a.hide()
                }
            }, {
                key: "renderMaskLink",
                value: function() {
                    return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                        className: "share-mask-icon",
                        style: {
                            backgroundImage: "url(".concat(L.a, ")"),
                            backgroundSize: "100% 100%",
                            right: ".59rem",
                            top: ".16rem",
                            height: "1.42rem",
                            width: ".92rem"
                        },
                        alt: "arrow"
                    }), m.a.createElement("div", {
                        className: "share-mask-icon",
                        style: {
                            backgroundImage: "url(".concat(R.a, ")"),
                            backgroundSize: "100% 100%",
                            right: "1.56rem",
                            top: "1.61rem",
                            width: ".49rem",
                            height: ".33rem"
                        },
                        alt: "dot"
                    }), m.a.createElement("img", {
                        className: "share-mask-icon",
                        src: "https://p0.meituan.net/travelcube/654d3ef46feedef76a0121d151d1777115356.png",
                        style: {
                            right: "1.83rem",
                            top: "1.61rem",
                            width: "2.16rem"
                        },
                        alt: "text"
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , A = t.showPosterPage
                      , n = t.canvasImg
                      , r = t.alertVisible
                      , i = t.shareMask
                      , s = t.initShow
                      , o = t.alertMsg
                      , a = t.downPopup
                      , l = this.props
                      , c = l.showTransferPopup
                      , u = l.popupData
                      , d = l.reportMC
                      , h = this.adaptShareData(u)
                      , p = h || {}
                      , f = p.vpSkuName
                      , g = p.recommendReason
                      , B = p.originPrice
                      , w = p.sellPrice
                      , v = p.discount
                      , E = p.commissionRatio
                      , Q = p.estimatedCommission
                      , y = p.vpSkuMainPic
                      , b = p.vpSkuCount
                      , F = p.clickLink
                      , T = (p.referralLink,
                    p.qrCodePic)
                      , H = p.configSku
                      , S = p.vpSkuMergePic
                      , N = p.shareTitle
                      , x = p.shareMessage
                      , I = p.type
                      , O = [y || G]
                      , k = 2 !== H ? "".concat(f ? "".concat(f, "*").concat(b || 1, "张") : "", "\r\n").concat(g ? "【推荐】".concat(g) : "", "\r\n").concat(w ? "【现价】".concat(w, "元") : "", "\r\n").concat(B ? "【原价】".concat(B, "元") : "", "\r\n").concat(v ? "【折扣】".concat(v, "折") : "", "\r\n").concat(F ? "【下单链接】".concat(F) : "") : "".concat(N, "\n").concat(x).concat(F)
                      , M = 2 === I ? "".concat(N, "\n").concat(x).concat(F) : "";
                    return m.a.createElement("div", {
                        className: "share"
                    }, m.a.createElement("div", {
                        className: "share-bgmask ".concat(s ? "share-gradationin" : "", " ").concat(a ? "share-gradationout" : ""),
                        onClick: function() {
                            return e.closePopup(1)
                        }
                    }), 2 !== H ? T && m.a.createElement(P, {
                        backShare: this.getShareTypeList()[1].textClick,
                        openSharePopup: this.closePopup,
                        picList: O,
                        popupData: h,
                        showPosterPage: A,
                        saveCanvas: this.saveCanvas,
                        downPopup: a,
                        reportMC: d
                    }) : null, !A && m.a.createElement("div", {
                        className: "".concat(s ? "share-fadein" : "", " ").concat(a ? "share-fadeout" : "", " share-content")
                    }, !c && m.a.createElement("div", {
                        className: "share-title"
                    }, m.a.createElement("span", {
                        className: "share-title-left"
                    //}, "分享预计赚", m.a.createElement("span", {
                        //className: "share-title-red"
                    //}, "￥", Q || "??"), m.a.createElement("img", {
                        //src: "//p0.meituan.net/travelcube/f3e52f8873a2e70bbf9b7b7ff5615c6d2976.png",
                        //alt: "",
                        //onClick: function() {
                            //e.setState({
                                //alertVisible: !0,
                                //alertMsg: "此处展示的预估佣金为当日推广可享受的税前佣金，不同日期推广的佣金可能不同，最终以实际成单的计算结果为准。\n                                                    预估佣金计算规则：单个商品券包售卖金额x佣金比例"
                    }, "分享给亲朋好友一起点", m.a.createElement("span", {
                        //className: "share-title-red"
                    }, ), m.a.createElement("img", {//}, "￥", t || "??"), m.a.createElement("img", {
                        src: "//p0.meituan.net/travelcube/f3e52f8873a2e70bbf9b7b7ff5615c6d2976.png",
                        alt: "",
                        onClick: function() {
                            n.setState({
                                alertVisible: !0,
                                alertMsg: "今天吃的啥分享给身边的朋友 万一他也想吃呢。\n                                    "
                            })
                        }
                    })), m.a.createElement("img", {
                        src: "//p1.meituan.net/travelcube/03025ceca0f17977054d175062d44d411517.png",
                        alt: "",
                        className: "share-title-close",
                        onClick: function() {
                            return e.closePopup(0)
                        }
                    })), c && this.renderTransferTitle(E, Q), m.a.createElement("div", {
                        className: "share-stitle",
                        style: E ? {} : {
                            display: "none"
                        }
                    //}, "佣金比例：", E || "??", "%"), this.getShareTypeList().map((function(t) {
                    }, ), this.getShareTypeList().map((function(t) {
                        return m.a.createElement("div", {
                            className: "share-type"
                        }, m.a.createElement("div", {
                            className: "share-type-title"
                        }, m.a.createElement("span", {
                            className: "share-type-left"
                        }, m.a.createElement("img", {
                            src: t.iconUrl,
                            alt: ""
                        //}), t.title), "仅复制链接" === t.operatioTitle && F && m.a.createElement(C.a, {//复制链接
                            //text: F,
                            //onCopy: function() {
                                //t.textClick()
                            //}
                        //}, m.a.createElement("span", {
                            //className: "share-type-right"
                        //}, t.operatioTitle)), "" !== t.operatioTitle && "仅复制链接" !== t.operatioTitle && m.a.createElement("span", {
                            //className: "share-type-right",
                            //onClick: function() {
                                //t.textClick()
                            //}
                        })), "复制文案分享" === t.btnText && m.a.createElement(C.a, {//复制链接
                            //text: F,
                            text: 2 === I ? M : k,
                            onCopy: function() {
                                t.btnClick()
                                //window.open(F, '_blank');
                            }
                        }, m.a.createElement("span", {
                            className: "share-type-right"
                        }, t.btnText)), "" !== t.btnText && "复制文案分享" !== t.btnText && m.a.createElement("span", {
                            className: "share-type-right",
                            onClick: function() {
                                t.btnClick()
                                //window.open(F, '_blank');
                            }
                        }, t.operatioTitle)), m.a.createElement("div", {
                            className: "share-type-content"
                        }, "分享文案" === t.title && m.a.createElement(m.a.Fragment, null, H && 2 !== H ? m.a.createElement(m.a.Fragment, null, f && m.a.createElement("div", null, f, "*", b || 1, "张"), g && m.a.createElement("div", null, "【推荐】", g), w && m.a.createElement("div", null, "【现价】", w, "元"), B && m.a.createElement("div", null, "【原价】", B, "元"), v && m.a.createElement("div", null, "【折扣】", v, "折"), F && m.a.createElement("div", null, "【下单链接】", F)) : m.a.createElement(m.a.Fragment, null, m.a.createElement("div", null, N), m.a.createElement("div", null, x, F))), "分享图片" === t.title && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                            className: "share-type-content-save"
                        }, "长按保存图片即可发送给好友"), m.a.createElement("img", {
                            src: 2 === H || 2 === I ? S : n,
                            alt: "",
                            className: "share-type-content-img",
                            onTouchStart: function() {
                                e.reportPoint("b_waimai_vhu0pmsn_mc")
                            }
                        })), "分享小程序卡片" === t.title && m.a.createElement("div", {
                            className: "share-mini"
                        }, m.a.createElement("div", {
                            className: "share-card share-card-mini"
                        }, m.a.createElement("div", {
                            className: "share-mini-header"
                        }, m.a.createElement("img", {
                            src: "//p0.meituan.net/travelcube/8d9b5c5b5310281a917f29097d15002e3545.png",
                            alt: ""
                        }), m.a.createElement("span", null, "美团团购 | 优选外卖单车美食酒店")), m.a.createElement("div", {
                            className: "share-mini-title"
                        }, f.length > 12 ? "".concat(f.slice(0, 12), "...") : f || "点外卖用超值券包更优惠，快来看看！"), m.a.createElement("img", {
                            src: y || G,
                            alt: "",
                            className: "share-mini-commodity"
                        }), m.a.createElement("div", {
                            className: "share-mini-line"
                        }), m.a.createElement("div", {
                            className: "share-mini-logo"
                        }, m.a.createElement("img", {
                            src: "//p0.meituan.net/travelcube/27be894156029ac4140afe04b94c8c923534.png",
                            alt: ""
                        }), m.a.createElement("span", null, "小程序"))), m.a.createElement("img", {
                            className: "share-link-avatar",
                            crossOrigin: "anonymous",
                            src: "//p0.meituan.net/travelcube/3e4b1cc5f99b66bffac45cf278cf00073968.png",
                            alt: ""
                        })), "分享链接" === t.title && m.a.createElement("div", {
                            className: "share-link"
                        }, m.a.createElement("div", {
                            className: "share-card"
                        }, 2 === H ? m.a.createElement(m.a.Fragment, null, N ? m.a.createElement("div", {
                            className: "share-link-title"
                        }, null == N ? void 0 : N.slice(0, 12), (null == N ? void 0 : N.length) > 12 ? "..." : "") : m.a.createElement("div", {
                            className: "share-link-title"
                        }, "点外卖，用超值券包更优惠")) : m.a.createElement(m.a.Fragment, null, f ? m.a.createElement("div", {
                            className: "share-link-title"
                        }, null == f ? void 0 : f.slice(0, 12), (null == f ? void 0 : f.length) > 12 ? "..." : "") : m.a.createElement("div", {
                            className: "share-link-title"
                        }, "点外卖，用超值券包更优惠")), m.a.createElement("img", {
                            src: y || G,
                            alt: "",
                            className: "share-link-img"
                        }), m.a.createElement("div", {
                            className: "share-link-stitle"
                        }, 2 === H && x ? x : "马上点击去抢购")), m.a.createElement("img", {
                            className: "share-link-avatar",
                            crossOrigin: "anonymous",
                            src: "//p0.meituan.net/travelcube/3e4b1cc5f99b66bffac45cf278cf00073968.png",
                            alt: ""
                        //}))), "复制文案" === t.btnText && m.a.createElement(C.a, {
                            //text: 2 === I ? M : k,
                            //onCopy: function() {
                                //t.btnClick()
                            //}
                        //}, m.a.createElement("div", {
                            //className: "share-type-btn"
                        //}, t.btnText)), "" !== t.btnText && "复制文案" !== t.btnText && m.a.createElement("div", {
                            //className: "share-type-btn",
                            //onClick: function() {
                                //t.btnClick()
                            //}
                        //}, t.btnText))
                    //}
                        }))), "点击抢购" === t.btnText && m.a.createElement(C.a, {
                            //text: 2 === I ? M : k,
                            text: F,
                            onCopy: function() {
                                window.open(F, '_blank');
                                //t.btnClick()
                            }
                        }, m.a.createElement("div", {
                            className: "share-type-btn"
                        }, t.btnText)), "" !== t.btnText && "点击抢购" !== t.btnText && m.a.createElement("div", {
                            className: "share-type-btn",
                            onClick: function() {
                                window.open(F, '_blank');
                                //t.btnClick()
                            }
                        }, t.btnText))
                    }
                    ))), r && m.a.createElement(U.a, {
                        title: "",
                        visible: r,
                        onClose: function() {
                            e.setState({
                                alertVisible: !1
                            })
                        },
                        confirmText: "确定"
                    }, o), i && this.renderBgMask())
                }
            }]),
            A
        }(m.a.Component)
    },
    Vd3H: function(e, t, A) {
        "use strict";
        var n = A("XKFU")
          , r = A("2OiF")
          , i = A("S/j/")
          , s = A("eeVq")
          , o = [].sort
          , a = [1, 2, 3];
        n(n.P + n.F * (s((function() {
            a.sort(void 0)
        }
        )) || !s((function() {
            a.sort(null)
        }
        )) || !A("LyE8")(o)), "Array", {
            sort: function(e) {
                return void 0 === e ? o.call(i(this)) : o.call(i(this), r(e))
            }
        })
    },
    WfBb: function(e, t, A) {
        e.exports = A.p + "images/mask-arrow-f089658b2f.png"
    },
    Wr5T: function(e, t) {
        !function() {
            "use strict";
            if ("object" == typeof window)
                if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                    "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                else {
                    var e = function(e) {
                        for (var t = window.document, A = r(t); A; )
                            A = r(t = A.ownerDocument);
                        return t
                    }()
                      , t = []
                      , A = null
                      , n = null;
                    s.prototype.THROTTLE_TIMEOUT = 100,
                    s.prototype.POLL_INTERVAL = null,
                    s.prototype.USE_MUTATION_OBSERVER = !0,
                    s._setupCrossOriginUpdater = function() {
                        return A || (A = function(e, A) {
                            n = e && A ? u(e, A) : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            },
                            t.forEach((function(e) {
                                e._checkForIntersections()
                            }
                            ))
                        }
                        ),
                        A
                    }
                    ,
                    s._resetCrossOriginUpdater = function() {
                        A = null,
                        n = null
                    }
                    ,
                    s.prototype.observe = function(e) {
                        if (!this._observationTargets.some((function(t) {
                            return t.element == e
                        }
                        ))) {
                            if (!e || 1 != e.nodeType)
                                throw new Error("target must be an Element");
                            this._registerInstance(),
                            this._observationTargets.push({
                                element: e,
                                entry: null
                            }),
                            this._monitorIntersections(e.ownerDocument),
                            this._checkForIntersections()
                        }
                    }
                    ,
                    s.prototype.unobserve = function(e) {
                        this._observationTargets = this._observationTargets.filter((function(t) {
                            return t.element != e
                        }
                        )),
                        this._unmonitorIntersections(e.ownerDocument),
                        0 == this._observationTargets.length && this._unregisterInstance()
                    }
                    ,
                    s.prototype.disconnect = function() {
                        this._observationTargets = [],
                        this._unmonitorAllIntersections(),
                        this._unregisterInstance()
                    }
                    ,
                    s.prototype.takeRecords = function() {
                        var e = this._queuedEntries.slice();
                        return this._queuedEntries = [],
                        e
                    }
                    ,
                    s.prototype._initThresholds = function(e) {
                        var t = e || [0];
                        return Array.isArray(t) || (t = [t]),
                        t.sort().filter((function(e, t, A) {
                            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                                throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return e !== A[t - 1]
                        }
                        ))
                    }
                    ,
                    s.prototype._parseRootMargin = function(e) {
                        var t = (e || "0px").split(/\s+/).map((function(e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t)
                                throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            }
                        }
                        ));
                        return t[1] = t[1] || t[0],
                        t[2] = t[2] || t[0],
                        t[3] = t[3] || t[1],
                        t
                    }
                    ,
                    s.prototype._monitorIntersections = function(t) {
                        var A = t.defaultView;
                        if (A && -1 == this._monitoringDocuments.indexOf(t)) {
                            var n = this._checkForIntersections
                              , i = null
                              , s = null;
                            this.POLL_INTERVAL ? i = A.setInterval(n, this.POLL_INTERVAL) : (o(A, "resize", n, !0),
                            o(t, "scroll", n, !0),
                            this.USE_MUTATION_OBSERVER && "MutationObserver"in A && (s = new A.MutationObserver(n)).observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })),
                            this._monitoringDocuments.push(t),
                            this._monitoringUnsubscribes.push((function() {
                                var e = t.defaultView;
                                e && (i && e.clearInterval(i),
                                a(e, "resize", n, !0)),
                                a(t, "scroll", n, !0),
                                s && s.disconnect()
                            }
                            ));
                            var l = this.root && (this.root.ownerDocument || this.root) || e;
                            if (t != l) {
                                var c = r(t);
                                c && this._monitorIntersections(c.ownerDocument)
                            }
                        }
                    }
                    ,
                    s.prototype._unmonitorIntersections = function(t) {
                        var A = this._monitoringDocuments.indexOf(t);
                        if (-1 != A) {
                            var n = this.root && (this.root.ownerDocument || this.root) || e;
                            if (!this._observationTargets.some((function(e) {
                                var A = e.element.ownerDocument;
                                if (A == t)
                                    return !0;
                                for (; A && A != n; ) {
                                    var i = r(A);
                                    if ((A = i && i.ownerDocument) == t)
                                        return !0
                                }
                                return !1
                            }
                            ))) {
                                var i = this._monitoringUnsubscribes[A];
                                if (this._monitoringDocuments.splice(A, 1),
                                this._monitoringUnsubscribes.splice(A, 1),
                                i(),
                                t != n) {
                                    var s = r(t);
                                    s && this._unmonitorIntersections(s.ownerDocument)
                                }
                            }
                        }
                    }
                    ,
                    s.prototype._unmonitorAllIntersections = function() {
                        var e = this._monitoringUnsubscribes.slice(0);
                        this._monitoringDocuments.length = 0,
                        this._monitoringUnsubscribes.length = 0;
                        for (var t = 0; t < e.length; t++)
                            e[t]()
                    }
                    ,
                    s.prototype._checkForIntersections = function() {
                        if (this.root || !A || n) {
                            var e = this._rootIsInDom()
                              , t = e ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                            this._observationTargets.forEach((function(n) {
                                var r = n.element
                                  , s = l(r)
                                  , o = this._rootContainsTarget(r)
                                  , a = n.entry
                                  , c = e && o && this._computeTargetAndRootIntersection(r, s, t)
                                  , u = null;
                                this._rootContainsTarget(r) ? A && !this.root || (u = t) : u = {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                };
                                var d = n.entry = new i({
                                    time: window.performance && performance.now && performance.now(),
                                    target: r,
                                    boundingClientRect: s,
                                    rootBounds: u,
                                    intersectionRect: c
                                });
                                a ? e && o ? this._hasCrossedThreshold(a, d) && this._queuedEntries.push(d) : a && a.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
                            }
                            ), this),
                            this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }
                    }
                    ,
                    s.prototype._computeTargetAndRootIntersection = function(t, r, i) {
                        if ("none" != window.getComputedStyle(t).display) {
                            for (var s, o, a, c, d, p, f, g, B = r, m = h(t), w = !1; !w && m; ) {
                                var v = null
                                  , E = 1 == m.nodeType ? window.getComputedStyle(m) : {};
                                if ("none" == E.display)
                                    return null;
                                if (m == this.root || 9 == m.nodeType)
                                    if (w = !0,
                                    m == this.root || m == e)
                                        A && !this.root ? !n || 0 == n.width && 0 == n.height ? (m = null,
                                        v = null,
                                        B = null) : v = n : v = i;
                                    else {
                                        var C = h(m)
                                          , Q = C && l(C)
                                          , y = C && this._computeTargetAndRootIntersection(C, Q, i);
                                        Q && y ? (m = C,
                                        v = u(Q, y)) : (m = null,
                                        B = null)
                                    }
                                else {
                                    var b = m.ownerDocument;
                                    m != b.body && m != b.documentElement && "visible" != E.overflow && (v = l(m))
                                }
                                if (v && (s = v,
                                o = B,
                                a = void 0,
                                c = void 0,
                                d = void 0,
                                p = void 0,
                                f = void 0,
                                g = void 0,
                                a = Math.max(s.top, o.top),
                                c = Math.min(s.bottom, o.bottom),
                                d = Math.max(s.left, o.left),
                                p = Math.min(s.right, o.right),
                                g = c - a,
                                B = (f = p - d) >= 0 && g >= 0 && {
                                    top: a,
                                    bottom: c,
                                    left: d,
                                    right: p,
                                    width: f,
                                    height: g
                                } || null),
                                !B)
                                    break;
                                m = m && h(m)
                            }
                            return B
                        }
                    }
                    ,
                    s.prototype._getRootRect = function() {
                        var t;
                        if (this.root && !p(this.root))
                            t = l(this.root);
                        else {
                            var A = p(this.root) ? this.root : e
                              , n = A.documentElement
                              , r = A.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }
                    ,
                    s.prototype._expandRectByRootMargin = function(e) {
                        var t = this._rootMarginValues.map((function(t, A) {
                            return "px" == t.unit ? t.value : t.value * (A % 2 ? e.width : e.height) / 100
                        }
                        ))
                          , A = {
                            top: e.top - t[0],
                            right: e.right + t[1],
                            bottom: e.bottom + t[2],
                            left: e.left - t[3]
                        };
                        return A.width = A.right - A.left,
                        A.height = A.bottom - A.top,
                        A
                    }
                    ,
                    s.prototype._hasCrossedThreshold = function(e, t) {
                        var A = e && e.isIntersecting ? e.intersectionRatio || 0 : -1
                          , n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (A !== n)
                            for (var r = 0; r < this.thresholds.length; r++) {
                                var i = this.thresholds[r];
                                if (i == A || i == n || i < A != i < n)
                                    return !0
                            }
                    }
                    ,
                    s.prototype._rootIsInDom = function() {
                        return !this.root || d(e, this.root)
                    }
                    ,
                    s.prototype._rootContainsTarget = function(t) {
                        var A = this.root && (this.root.ownerDocument || this.root) || e;
                        return d(A, t) && (!this.root || A == t.ownerDocument)
                    }
                    ,
                    s.prototype._registerInstance = function() {
                        t.indexOf(this) < 0 && t.push(this)
                    }
                    ,
                    s.prototype._unregisterInstance = function() {
                        var e = t.indexOf(this);
                        -1 != e && t.splice(e, 1)
                    }
                    ,
                    window.IntersectionObserver = s,
                    window.IntersectionObserverEntry = i
                }
            function r(e) {
                try {
                    return e.defaultView && e.defaultView.frameElement || null
                } catch (e) {
                    return null
                }
            }
            function i(e) {
                this.time = e.time,
                this.target = e.target,
                this.rootBounds = c(e.rootBounds),
                this.boundingClientRect = c(e.boundingClientRect),
                this.intersectionRect = c(e.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }),
                this.isIntersecting = !!e.intersectionRect;
                var t = this.boundingClientRect
                  , A = t.width * t.height
                  , n = this.intersectionRect
                  , r = n.width * n.height;
                this.intersectionRatio = A ? Number((r / A).toFixed(4)) : this.isIntersecting ? 1 : 0
            }
            function s(e, t) {
                var A, n, r, i = t || {};
                if ("function" != typeof e)
                    throw new Error("callback must be a function");
                if (i.root && 1 != i.root.nodeType && 9 != i.root.nodeType)
                    throw new Error("root must be a Document or Element");
                this._checkForIntersections = (A = this._checkForIntersections.bind(this),
                n = this.THROTTLE_TIMEOUT,
                r = null,
                function() {
                    r || (r = setTimeout((function() {
                        A(),
                        r = null
                    }
                    ), n))
                }
                ),
                this._callback = e,
                this._observationTargets = [],
                this._queuedEntries = [],
                this._rootMarginValues = this._parseRootMargin(i.rootMargin),
                this.thresholds = this._initThresholds(i.threshold),
                this.root = i.root || null,
                this.rootMargin = this._rootMarginValues.map((function(e) {
                    return e.value + e.unit
                }
                )).join(" "),
                this._monitoringDocuments = [],
                this._monitoringUnsubscribes = []
            }
            function o(e, t, A, n) {
                "function" == typeof e.addEventListener ? e.addEventListener(t, A, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, A)
            }
            function a(e, t, A, n) {
                "function" == typeof e.removeEventListener ? e.removeEventListener(t, A, n || !1) : "function" == typeof e.detachEvent && e.detachEvent("on" + t, A)
            }
            function l(e) {
                var t;
                try {
                    t = e.getBoundingClientRect()
                } catch (e) {}
                return t ? (t.width && t.height || (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }),
                t) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }
            function c(e) {
                return !e || "x"in e ? e : {
                    top: e.top,
                    y: e.top,
                    bottom: e.bottom,
                    left: e.left,
                    x: e.left,
                    right: e.right,
                    width: e.width,
                    height: e.height
                }
            }
            function u(e, t) {
                var A = t.top - e.top
                  , n = t.left - e.left;
                return {
                    top: A,
                    left: n,
                    height: t.height,
                    width: t.width,
                    bottom: A + t.height,
                    right: n + t.width
                }
            }
            function d(e, t) {
                for (var A = t; A; ) {
                    if (A == e)
                        return !0;
                    A = h(A)
                }
                return !1
            }
            function h(t) {
                var A = t.parentNode;
                return 9 == t.nodeType && t != e ? r(t) : (A && A.assignedSlot && (A = A.assignedSlot.parentNode),
                A && 11 == A.nodeType && A.host ? A.host : A)
            }
            function p(e) {
                return e && 9 === e.nodeType
            }
        }()
    },
    Wvm5: function(e, t, A) {},
    YOzA: function(e, t, A) {
        "use strict";
        A.d(t, "a", (function() {
            return N
        }
        ));
        A("I5cv"),
        A("bWfx"),
        A("I78e"),
        A("ls82");
        var n = A("ROkk")
          , r = A.n(n)
          , i = A("HsOD")
          , s = A.n(i)
          , o = A("pj57")
          , a = A.n(o)
          , l = A("a/cl")
          , c = A.n(l)
          , u = A("Pkpw")
          , d = A.n(u)
          , h = A("oEga")
          , p = A.n(h)
          , f = A("9WXe")
          , g = A.n(f)
          , B = A("vR76")
          , m = A.n(B)
          , w = A("O2jJ")
          , v = A.n(w)
          , E = A("q1tI")
          , C = A.n(E)
          , Q = A("Jn7e")
          , y = A("dwco")
          , b = A.n(y)
          , U = A("yZVg")
          , F = A.n(U)
          , T = A("+n12")
          , H = A("t9UJ");
        A("LzhO");
        function S(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = g()(e);
                if (t) {
                    var r = g()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return p()(this, A)
            }
        }
        b.a.polyfill();
        var N = function(e) {
            d()(A, e);
            var t = S(A);
            function A(e) {
                var n;
                return s()(this, A),
                n = t.call(this, e),
                m()(c()(n), "onScroll", (function(e) {
                    if (e.y > 0 && 0 === n.scrollStatus) {
                        console.log("上拉刷新"),
                        n.scrollStatus = 1;
                        var t = document.querySelector(".recommend-page-wrap");
                        t && 0 !== t.scrollTop && t.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                    if (e.y < 0 && 0 === n.scrollStatus) {
                        console.log("下拉加载"),
                        n.scrollStatus = 2;
                        var A = document.querySelector(".recommend-page-wrap");
                        A && A.scrollTop !== A.scrollHeight && A.scrollTo({
                            top: A.scrollHeight,
                            behavior: "smooth"
                        })
                    }
                }
                )),
                m()(c()(n), "onScrollStart", (function() {
                    n.scrollStatus = 0
                }
                )),
                m()(c()(n), "handlePullingUp", r()(v.a.mark((function e() {
                    var t, A, r, i;
                    return v.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.props,
                                A = t.getInfo,
                                r = t.list,
                                e.next = 3,
                                A(r);
                            case 3:
                                (i = e.sent).noMore ? n.ScrollRef.current.forceUpdate(Q.e.noMore) : (i.success,
                                n.ScrollRef.current.forceUpdate(""));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))),
                m()(c()(n), "getRecommendTagContent", (function(e) {
                    return e.length > 4 ? "".concat(e.slice(0, 4), "...") : e
                }
                )),
                m()(c()(n), "renderList", (function() {
                    var e = n.props
                      , t = e.list
                      , A = e.viewObject
                      , r = e.openSharePopup
                      , i = e.selectedTab
                      , s = e.total;
                    return n.bottomText = t && t.length === s ? Q.e.noMore : Q.e.more,
                    C.a.createElement("div", {
                        className: "re-content-wrap",
                        ref: n.scrollWrapper
                    }, t.length > 0 && C.a.createElement(C.a.Fragment, null, C.a.createElement(H.a, {
                        onRef: function(e) {
                            n.ScrollRef.current = e
                        },
                        onPullingUp: function() {
                            return n.handlePullingUp()
                        },
                        showText: !1,
                        bottomText: n.bottomText,
                        onScroll: n.onScroll,
                        onScrollStart: n.onScrollStart,
                        onPullingDown: function() {
                            n.ScrollRef.current.forceUpdate(" ")
                        }
                    }, C.a.createElement("section", {
                        className: "lt-wrap"
                    }, C.a.createElement("div", {
                        className: "card-init"
                    }, "-"), t.map((function(e, t) {
                        return C.a.createElement("div", {
                            className: "list-item ".concat(e.sellStatus === Q.j.UNSALE && "item-disable"),
                            key: e,
                            id: "list-item-".concat(e.vpSkuId),
                            "data-fxId": "list-item-".concat(e.vpSkuId, "-").concat(i),
                            "data-infos": JSON.stringify({
                                cid: A.cid,
                                bid: A.bid,
                                val_lab: {
                                    activity_urlkey: A.val_lab.activity_urlkey,
                                    account_id: A.val_lab.account_id,
                                    city_name: A.val_lab.city_name,
                                    theme_id: A.val_lab.theme_id,
                                    index: t + 1,
                                    vp_sku_id: e.vpSkuId,
                                    sku_type: 2 === e.configSku ? "activity" : "vpsku"
                                }
                            }),
                            onClick: function() {
                                e.sellStatus !== Q.j.UNSALE && r({
                                    vpSkuId: e.vpSkuId,
                                    index: t + 1,
                                    themeId: i
                                })
                            }
                        }, C.a.createElement("div", {
                            className: "card-left"
                        }, C.a.createElement("img", {
                            src: e.vpSkuMainPic || "//p0.meituan.net/travelcube/2be1b498f4bb776275671198a1d12f1339059.png"
                        }), e.recommendReason && C.a.createElement("div", {
                            className: "card-tag"
                        }, C.a.createElement("span", null, n.getRecommendTagContent(e.recommendReason)))), C.a.createElement("div", {
                            className: "card-right"
                        }, e.vpSkuName && C.a.createElement("div", {
                            className: "card-title"
                        }, e.vpSkuName, "".concat(e.vpSkuCount ? "*" + e.vpSkuCount + "张" : "")), e.brandName && C.a.createElement("div", {
                            className: "card-shop"
                        }, C.a.createElement("img", {
                            src: "//p1.meituan.net/travelcube/f72078060a36b62963b6d55719a120a32708.png"
                        }), C.a.createElement("span", null, e.brandName)), e.commissionRatio && "0" !== e.commissionRatio && C.a.createElement(C.a.Fragment, null, C.a.createElement("div", {
                            className: "card-commission-rate"
                        //}, C.a.createElement("span", null, "佣金比例"), C.a.createElement("span", null, e.commissionRatio), C.a.createElement("span", null, "%"))), C.a.createElement("div", {
                        }, C.a.createElement("span", null, ""), C.a.createElement("span", null, ""))), C.a.createElement("div", {
                            className: "card-price-wrap"
                        }, C.a.createElement("div", {
                            className: "card-price"
                        }, C.a.createElement("span", {
                            className: "card-price-i"
                        }, "￥"), C.a.createElement("span", {
                            className: "card-price-c"
                        }, e.sellPrice && 0 !== e.sellPrice ? e.sellPrice : "??")), e.originPrice && 0 !== e.originPrice && C.a.createElement("div", {
                            className: "card-price-origin"
                        }, C.a.createElement("span", {
                            className: "card-price-origin-i"
                        }, "￥"), C.a.createElement("span", {
                            className: "card-price-origin-c"
                        }, e.originPrice))), C.a.createElement("div", {
                            className: "card-btn"
//                        }, C.a.createElement("span", null, "赚￥", e.estimatedCommission && 0 !== e.estimatedCommission ? e.estimatedCommission : "??"))), C.a.createElemen
                        }, C.a.createElement("span", null, "立即购买",))), C.a.createElement("div", {
                            className: "disable-icon"
                        }))
                    }
                    )), C.a.createElement("div", {
                        className: "bottom-text"
                    }, n.bottomText))), C.a.createElement("div", {
                        className: "back-top",
                        onClick: function() {
                            return n.ScrollRef.current.backToTop()
                        }
                    })), (!t || 0 === t.length) && C.a.createElement("div", {
                        className: "re-empty"
                    }, C.a.createElement("img", {
                        src: "//s3plus.meituan.net/v1/mss_1ada830d56584ddeae1b0899c231c552/source/INGEE_SOURCEFILE/5958468/ingeetemp/1657515332696/assets/1122%E6%97%A0%E5%95%86%E5%93%81-%E6%8B%B7%E8%B4%9D%402x.png"
                    }), C.a.createElement("div", {
                        className: "empty-1"
                    }, "抱歉，没有符合条件的商品"), C.a.createElement("div", {
                        className: "empty-2"
                    }, "换个主题试试～")))
                }
                )),
                n.state = {},
                n.scrollWrapper = C.a.createRef(),
                n.ScrollRef = C.a.createRef(null),
                n.bottomText = Q.e.more,
                n.scrollStatus = 0,
                n
            }
            return a()(A, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.list
                      , A = e.showTab
                      , n = e.tabs
                      , r = e.selectedTab
                      , i = e.onTabChange
                      , s = e.showFilter
                      , o = e.filters
                      , a = e.onFilterChange
                      , l = e.selectedFilter
                      , c = e.selectedPriceOrder
                      , u = e.locationText
                      , d = e.latitude
                      , h = e.longitude
                      , p = this;
                    return C.a.createElement("div", {
                        className: "re-list-wrap"
                    }, A && n.length > 1 && C.a.createElement("div", {
                        className: "re-tab-wrap"
                    }, n.map((function(e) {
                        return C.a.createElement("div", {
                            onClick: function() {
                                i(e, (function(e) {
                                    t && t.length && p.ScrollRef.current.backToTop(),
                                    t && t.length && p.ScrollRef.current.refresh(),
                                    !e.success && !e.noMore && F.a.show("刷新失败，请稍后再试～")
                                }
                                ))
                            },
                            key: e,
                            className: "tab-item ".concat(e === r && "select-tab")
                        }, Q.h[e])
                    }
                    ))), s && o.length >= 1 && C.a.createElement("div", {
                        className: "re-filter-wrap"
                    }, C.a.createElement(C.a.Fragment, null, o.map((function(e) {
                        return r === Q.i && e === Q.g.SALES ? "" : C.a.createElement("div", {
                            className: "filter-item ".concat(l === e && "filter-selected"),
                            style: {
                                paddingLeft: e === Q.g.ALL && r === Q.i.LOCAL ? "0.4rem" : ""
                            },
                            onClick: function() {
                                a(e, (function(e) {
                                    t && t.length && p.ScrollRef.current.backToTop(),
                                    t && t.length && p.ScrollRef.current.refresh(),
                                    !e.success && !e.noMore && F.a.show("刷新失败，请稍后再试～")
                                }
                                ))
                            }
                        }, C.a.createElement("span", null, e === Q.g.ALL && r === Q.i.LOCAL ? "销量" : Q.f[e]), e === Q.g.PRICE && C.a.createElement("img", {
                            className: "".concat(l === Q.g.PRICE && c === Q.d.INCREASE && "arrow-increase", " arrow"),
                            src: "//p0.meituan.net/ingee/652175ce9504f060dedf27577bf82f12349.png"
                        }))
                    }
                    ))), r === Q.i.LOCAL && C.a.createElement("div", {
                        className: "location-item",
                        onClick: function() {
                            a(Q.g.CITY, (function() {}
                            )),
                            Object(T.f)({
                                lat: d,
                                lng: h,
                                tab: r
                            })
                        }
                    }, C.a.createElement("img", {
                        className: "loc-img",
                        src: "//p0.meituan.net/travelcube/34e91293c3927b40db95e1f02dae43e1952.png"
                    }), C.a.createElement("span", {
                        className: "loc-text"
                    }, u && u.length > 6 ? "".concat(u.slice(0, 6), "...") : u), C.a.createElement("img", {
                        className: "arrow",
                        src: "//p0.meituan.net/ingee/652175ce9504f060dedf27577bf82f12349.png"
                    }))), t && this.renderList())
                }
            }]),
            A
        }(C.a.Component)
    },
    YXqI: function(e, t, A) {
        "use strict";
        var n;
        A("SRfc");
        t.a = {
            versions: (n = navigator.userAgent,
            {
                trident: n.indexOf("Trident") > -1,
                presto: n.indexOf("Presto") > -1,
                webKit: n.indexOf("AppleWebKit") > -1,
                gecko: n.indexOf("Gecko") > -1 && -1 === n.indexOf("KHTML"),
                mobile: !!n.match(/AppleWebKit.*Mobile.*/),
                ios: !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,
                iPhone: n.indexOf("iPhone") > -1 || n.indexOf("Mac") > -1,
                iPad: n.indexOf("iPad") > -1,
                QQBrowser: n.indexOf("QQBrowser") > -1,
                QQWebview: -1 === n.indexOf("QQBrowser") && n.indexOf("QQ") > -1,
                webApp: -1 === n.indexOf("Safari"),
                weixin: true,
                chrome: n.indexOf("Chrome") > -1 || n.indexOf("CriOS") > -1
            })
        }
    },
    YfRO: function(e, t, A) {},
    "a/2G": function(e, t, A) {
        var n = A("2DWn");
        e.exports = function(e, t, A) {
            if (n(e),
            void 0 === t)
                return e;
            switch (A) {
            case 1:
                return function(A) {
                    return e.call(t, A)
                }
                ;
            case 2:
                return function(A, n) {
                    return e.call(t, A, n)
                }
                ;
            case 3:
                return function(A, n, r) {
                    return e.call(t, A, n, r)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    },
    aWWK: function(e, t, A) {
        "use strict";
        A.d(t, "a", (function() {
            return m
        }
        ));
        A("I5cv");
        var n = A("HsOD")
          , r = A.n(n)
          , i = A("pj57")
          , s = A.n(i)
          , o = A("Pkpw")
          , a = A.n(o)
          , l = A("oEga")
          , c = A.n(l)
          , u = A("9WXe")
          , d = A.n(u)
          , h = A("q1tI")
          , p = A.n(h)
          , f = A("17x9")
          , g = A.n(f);
        A("AnPH");
        function B(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = d()(e);
                if (t) {
                    var r = d()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return c()(this, A)
            }
        }
        var m = function(e) {
            a()(A, e);
            var t = B(A);
            function A(e) {
                var n;
                return r()(this, A),
                (n = t.call(this, e)).state = {},
                n
            }
            return s()(A, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "render",
                value: function() {
                    return p.a.createElement("div", null, p.a.createElement("div", {
                        className: "error_container"
                    }, p.a.createElement("img", {
                        src: "https://p0.meituan.net/travelcube/481a114d20f57cc7e76bbce37199d361130865.png"
                    }), p.a.createElement("div", {
                        className: "error_text"
                    }, "服务器繁忙，请稍后再试"), this.props.identificationCode && p.a.createElement("div", {
                        className: "error_code"
                    }, this.props.identificationCode)))
                }
            }]),
            A
        }(p.a.Component);
        m.propTypes = {
            identificationCode: g.a.string.isRequired
        }
    },
    bHtr: function(e, t, A) {
        var n = A("XKFU");
        n(n.P, "Array", {
            fill: A("Nr18")
        }),
        A("nGyu")("fill")
    },
    bVXt: function(e, t, A) {
        "use strict";
        var n = A("F8+L")
          , r = A("SJXK")
          , i = A("luyb")
          , s = A("DdPZ")
          , o = A("IgQE")
          , a = A("7eRh")
          , l = Math.max
          , c = Math.min
          , u = Math.floor
          , d = /\$([$&`']|\d\d?|<[^>]*>)/g
          , h = /\$([$&`']|\d\d?)/g;
        A("yc4i")("replace", 2, (function(e, t, A, p) {
            return [function(n, r) {
                var i = e(this)
                  , s = null == n ? void 0 : n[t];
                return void 0 !== s ? s.call(n, i, r) : A.call(String(i), n, r)
            }
            , function(e, t) {
                var r = p(A, e, this, t);
                if (r.done)
                    return r.value;
                var u = n(e)
                  , d = String(this)
                  , h = "function" == typeof t;
                h || (t = String(t));
                var g = u.global;
                if (g) {
                    var B = u.unicode;
                    u.lastIndex = 0
                }
                for (var m = []; ; ) {
                    var w = a(u, d);
                    if (null === w)
                        break;
                    if (m.push(w),
                    !g)
                        break;
                    "" === String(w[0]) && (u.lastIndex = o(d, i(u.lastIndex), B))
                }
                for (var v, E = "", C = 0, Q = 0; Q < m.length; Q++) {
                    w = m[Q];
                    for (var y = String(w[0]), b = l(c(s(w.index), d.length), 0), U = [], F = 1; F < w.length; F++)
                        U.push(void 0 === (v = w[F]) ? v : String(v));
                    var T = w.groups;
                    if (h) {
                        var H = [y].concat(U, b, d);
                        void 0 !== T && H.push(T);
                        var S = String(t.apply(void 0, H))
                    } else
                        S = f(y, d, b, U, T, t);
                    b >= C && (E += d.slice(C, b) + S,
                    C = b + y.length)
                }
                return E + d.slice(C)
            }
            ];
            function f(e, t, n, i, s, o) {
                var a = n + e.length
                  , l = i.length
                  , c = h;
                return void 0 !== s && (s = r(s),
                c = d),
                A.call(o, c, (function(A, r) {
                    var o;
                    switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return t.slice(0, n);
                    case "'":
                        return t.slice(a);
                    case "<":
                        o = s[r.slice(1, -1)];
                        break;
                    default:
                        var c = +r;
                        if (0 === c)
                            return A;
                        if (c > l) {
                            var d = u(c / 10);
                            return 0 === d ? A : d <= l ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : A
                        }
                        o = i[c - 1]
                    }
                    return void 0 === o ? "" : o
                }
                ))
            }
        }
        ))
    },
    czNK: function(e, t, A) {
        "use strict";
        var n = A("nh4g")
          , r = A("DVgA")
          , i = A("JiEa")
          , s = A("UqcF")
          , o = A("S/j/")
          , a = A("Ymqv")
          , l = Object.assign;
        e.exports = !l || A("eeVq")((function() {
            var e = {}
              , t = {}
              , A = Symbol()
              , n = "abcdefghijklmnopqrst";
            return e[A] = 7,
            n.split("").forEach((function(e) {
                t[e] = e
            }
            )),
            7 != l({}, e)[A] || Object.keys(l({}, t)).join("") != n
        }
        )) ? function(e, t) {
            for (var A = o(e), l = arguments.length, c = 1, u = i.f, d = s.f; l > c; )
                for (var h, p = a(arguments[c++]), f = u ? r(p).concat(u(p)) : r(p), g = f.length, B = 0; g > B; )
                    h = f[B++],
                    n && !d.call(p, h) || (A[h] = p[h]);
            return A
        }
        : l
    },
    dDqg: function(e, t) {
        e.exports = function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    dwco: function(e, t, A) {
        !function() {
            "use strict";
            e.exports = {
                polyfill: function() {
                    var e = window
                      , t = document;
                    if (!("scrollBehavior"in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                        var A, n = e.HTMLElement || e.Element, r = {
                            scroll: e.scroll || e.scrollTo,
                            scrollBy: e.scrollBy,
                            elementScroll: n.prototype.scroll || o,
                            scrollIntoView: n.prototype.scrollIntoView
                        }, i = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now, s = (A = e.navigator.userAgent,
                        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(A) ? 1 : 0);
                        e.scroll = e.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? p.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : r.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                        }
                        ,
                        e.scrollBy = function() {
                            void 0 !== arguments[0] && (a(arguments[0]) ? r.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                        }
                        ,
                        n.prototype.scroll = n.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== a(arguments[0])) {
                                    var e = arguments[0].left
                                      , t = arguments[0].top;
                                    p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                        throw new SyntaxError("Value could not be converted");
                                    r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }
                        ,
                        n.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }
                        ,
                        n.prototype.scrollIntoView = function() {
                            if (!0 !== a(arguments[0])) {
                                var A = d(this)
                                  , n = A.getBoundingClientRect()
                                  , i = this.getBoundingClientRect();
                                A !== t.body ? (p.call(this, A, A.scrollLeft + i.left - n.left, A.scrollTop + i.top - n.top),
                                "fixed" !== e.getComputedStyle(A).position && e.scrollBy({
                                    left: n.left,
                                    top: n.top,
                                    behavior: "smooth"
                                })) : e.scrollBy({
                                    left: i.left,
                                    top: i.top,
                                    behavior: "smooth"
                                })
                            } else
                                r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }
                    function o(e, t) {
                        this.scrollLeft = e,
                        this.scrollTop = t
                    }
                    function a(e) {
                        if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior)
                            return !0;
                        if ("object" == typeof e && "smooth" === e.behavior)
                            return !1;
                        throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }
                    function l(e, t) {
                        return "Y" === t ? e.clientHeight + s < e.scrollHeight : "X" === t ? e.clientWidth + s < e.scrollWidth : void 0
                    }
                    function c(t, A) {
                        var n = e.getComputedStyle(t, null)["overflow" + A];
                        return "auto" === n || "scroll" === n
                    }
                    function u(e) {
                        var t = l(e, "Y") && c(e, "Y")
                          , A = l(e, "X") && c(e, "X");
                        return t || A
                    }
                    function d(e) {
                        for (; e !== t.body && !1 === u(e); )
                            e = e.parentNode || e.host;
                        return e
                    }
                    function h(t) {
                        var A, n, r, s, o = (i() - t.startTime) / 468;
                        s = o = o > 1 ? 1 : o,
                        A = .5 * (1 - Math.cos(Math.PI * s)),
                        n = t.startX + (t.x - t.startX) * A,
                        r = t.startY + (t.y - t.startY) * A,
                        t.method.call(t.scrollable, n, r),
                        n === t.x && r === t.y || e.requestAnimationFrame(h.bind(e, t))
                    }
                    function p(A, n, s) {
                        var a, l, c, u, d = i();
                        A === t.body ? (a = e,
                        l = e.scrollX || e.pageXOffset,
                        c = e.scrollY || e.pageYOffset,
                        u = r.scroll) : (a = A,
                        l = A.scrollLeft,
                        c = A.scrollTop,
                        u = o),
                        h({
                            scrollable: a,
                            method: u,
                            startTime: d,
                            startX: l,
                            startY: c,
                            x: n,
                            y: s
                        })
                    }
                }
            }
        }()
    },
    "f+Jo": function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    fBKz: function(e, t) {
        e.exports = function(e) {
            if (null == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    fx8m: function(e, t, A) {
        "use strict";
        var n = A("Jo+v")
          , r = A("hfKm")
          , i = A("G4HQ");
        r(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = w(A("XVgq"))
          , o = w(A("Z7t5"))
          , a = w(A("hfKm"));
        A("IgYz"),
        A("xKLC");
        var l = w(A("pbKT"))
          , c = w(A("Bhuq"))
          , u = w(A("SqZg"))
          , d = w(A("TRZx"));
        A("bVXt");
        var h = m(A("q1tI"))
          , p = m(A("17x9"))
          , f = A("VCL8")
          , g = w(A("TSYQ"));
        function B() {
            if ("function" != typeof i)
                return null;
            var e = new i;
            return B = function() {
                return e
            }
            ,
            e
        }
        function m(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== v(e) && "function" != typeof e)
                return {
                    default: e
                };
            var t = B();
            if (t && t.has(e))
                return t.get(e);
            var A = {}
              , i = r && n;
            for (var s in e)
                if (Object.prototype.hasOwnProperty.call(e, s)) {
                    var o = i ? n(e, s) : null;
                    o && (o.get || o.set) ? r(A, s, o) : A[s] = e[s]
                }
            return A.default = e,
            t && t.set(e, A),
            A
        }
        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function v(e) {
            return (v = "function" == typeof o.default && "symbol" == typeof s.default ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function E(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function C(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                (0,
                a.default)(e, n.key, n)
            }
        }
        function Q(e, t) {
            return !t || "object" !== v(t) && "function" != typeof t ? y(e) : t
        }
        function y(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function b() {
            if ("undefined" == typeof Reflect || !l.default)
                return !1;
            if (l.default.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call((0,
                l.default)(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function U(e) {
            return (U = d.default ? c.default : function(e) {
                return e.__proto__ || (0,
                c.default)(e)
            }
            )(e)
        }
        function F(e, t) {
            return (F = d.default || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function T(e, t, A) {
            return t in e ? (0,
            a.default)(e, t, {
                value: A,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = A,
            e
        }
        function H(e, t) {
            var A = e;
            if ("phone" === t) {
                var n = (A = e.replace(/\D/g, "").substring(0, 11)).length;
                n > 3 && n < 8 ? A = "".concat(A.substr(0, 3), " ").concat(A.substr(3)) : n >= 8 && (A = "".concat(A.substr(0, 3), " ").concat(A.substr(3, 4), " ").concat(A.substr(7)))
            } else
                "bankCard" === t && (A = e.replace(/\D/g, "").replace(/(....)(?=.)/g, "$1 "));
            return A
        }
        var S = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = (0,
                u.default)(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && F(e, t)
            }(s, e);
            var t, A, n, r, i = (t = s,
            function() {
                var e, A = U(t);
                if (b()) {
                    var n = U(this).constructor;
                    e = (0,
                    l.default)(A, arguments, n)
                } else
                    e = A.apply(this, arguments);
                return Q(this, e)
            }
            );
            function s() {
                var e;
                E(this, s);
                for (var t = arguments.length, A = new Array(t), n = 0; n < t; n++)
                    A[n] = arguments[n];
                return T(y(e = i.call.apply(i, [this].concat(A))), "state", {
                    value: void 0 === e.props.value ? e.props.defaultValue : e.props.value
                }),
                T(y(e), "inputEl", h.createRef()),
                T(y(e), "selectionJudge", (function() {
                    var t = e.props.type;
                    if (e.inputEl.current && ("bankCard" === t || "phone" === t)) {
                        try {
                            var A = H(e.inputEl.current.value, t)
                              , n = e.inputEl.current.selectionEnd;
                            return !!n && " " === A.charAt(n - 1)
                        } catch (e) {
                            console.log(e)
                        }
                        return null
                    }
                    return null
                }
                )),
                T(y(e), "setSelectionEnd", (function() {
                    try {
                        if (!e.inputEl.current)
                            return;
                        var t = e.props.type
                          , A = H(e.inputEl.current.value, t)
                          , n = e.inputEl.current.selectionEnd;
                        n && " " === A.charAt(n - 1) && (e.inputEl.current.selectionStart = n + 1,
                        e.inputEl.current.selectionEnd = n + 1)
                    } catch (e) {
                        console.log(e)
                    }
                }
                )),
                T(y(e), "getOnChange", (function(t) {
                    var A = e.props
                      , n = A.value
                      , r = A.onChange
                      , i = A.type
                      , s = A.typeFormate
                      , o = H(t, i)
                      , a = o;
                    "bankCard" === i || "phone" === i ? (a = o.replace(/\D/g, ""),
                    r(s ? o : a)) : r(o);
                    void 0 === n && e.setState({
                        value: a
                    })
                }
                )),
                T(y(e), "clearValue", (function() {
                    (0,
                    e.props.onChange)(""),
                    e.setState({
                        value: ""
                    }),
                    e.inputEl.current && e.inputEl.current.focus()
                }
                )),
                e
            }
            return A = s,
            (n = [{
                key: "getSnapshotBeforeUpdate",
                value: function(e, t) {
                    var A = this.props.value
                      , n = e.value
                      , r = this.state.value
                      , i = t.value;
                    return void 0 !== A && A !== n || r !== i ? this.selectionJudge() : null
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t, A) {
                    var n = this;
                    A && setTimeout((function() {
                        n.setSelectionEnd()
                    }
                    ), 2)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , A = t.theme
                      , n = t.label
                      , r = t.extra
                      , i = t.value
                      , s = t.type
                      , o = t.required
                      , a = t.placeholder
                      , l = t.readonly
                      , c = t.disabled
                      , u = t.clear
                      , d = t.maxLength
                      , p = t.error
                      , f = t.onErrorClick
                      , B = t.name
                      , m = t.textAlign
                      , w = t.onBlur
                      , v = t.onFocus
                      , E = t.onExtraClick
                      , C = H(void 0 !== i ? i : this.state.value, s);
                    return h.createElement("div", {
                        className: A.inputitem
                    }, h.createElement("div", {
                        className: A.list
                    }, h.createElement("div", {
                        className: (0,
                        g.default)(o ? A.required : A.label, T({}, A.disable, c))
                    }, n), h.createElement("input", {
                        className: (0,
                        g.default)(A.input, A[m], T({}, A.disable, c)),
                        type: s,
                        placeholder: a,
                        maxLength: d,
                        disabled: c || l,
                        name: B,
                        value: C,
                        onChange: function(t) {
                            e.getOnChange(t.target.value)
                        },
                        onBlur: function(e) {
                            return void 0 !== w ? w(e.target.value) : {}
                        },
                        onFocus: function(e) {
                            return void 0 !== v ? v(e.target.value) : {}
                        },
                        ref: this.inputEl
                    }), h.createElement("div", {
                        className: A.extra,
                        onClick: E
                    }, r), h.createElement("div", {
                        className: (0,
                        g.default)(T({}, A.clear, u && i && i.length > 0)),
                        onClick: function() {
                            return e.clearValue()
                        }
                    }), h.createElement("div", {
                        className: (0,
                        g.default)(T({}, A.error, p)),
                        onClick: function(e) {
                            return void 0 !== f ? f(e) : {}
                        }
                    })))
                }
            }]) && C(A.prototype, n),
            r && C(A, r),
            s
        }(h.Component);
        T(S, "propTypes", {
            label: p.oneOfType([p.node, p.string]),
            type: p.string,
            typeFormate: p.bool,
            value: p.string,
            required: p.bool,
            defaultValue: p.string,
            placeholder: p.string,
            readonly: p.bool,
            disabled: p.bool,
            clear: p.bool,
            onChange: p.func,
            error: p.bool,
            onExtraClick: p.func,
            name: p.string,
            textAlign: p.string
        }),
        T(S, "defaultProps", {
            label: "",
            type: "text",
            typeFormate: !0,
            value: void 0,
            defaultValue: "",
            placeholder: "",
            required: !1,
            readonly: !1,
            disabled: !1,
            clear: !1,
            onChange: function() {},
            error: !1,
            onExtraClick: function() {},
            name: "",
            textAlign: "left"
        }),
        (0,
        f.polyfill)(S);
        var N = S;
        t.default = N
    },
    ga4j: function(e, t, A) {
        "use strict";
        A.d(t, "a", (function() {
            return i
        }
        )),
        A.d(t, "b", (function() {
            return s
        }
        ));
        var n = A("sgVM")
          , r = A.n(n);
        function i() {
            try {
                new r.a({
                    samplingRate: 1,
                    teamIds: [9177, 9177, 9178]
                })
            } catch (e) {
                console.log("生成错误码SDK init error", e)
            }
        }
        function s(e, t, A) {
            var n = "";
            try {
                n = window.ErrorCode && window.ErrorCode.getCode({
                    code: "".concat(e) || ""
                })
            } catch (e) {
                console.log("identificationCode", e)
            }
            return window.ErrorCode && window.ErrorCode.report({
                code: "B".concat(e),
                isglobal: !0,
                resourceUrl: t,
                data: A
            }),
            n
        }
    },
    hWTD: function(e, t, A) {
        var n = A("1SuZ")
          , r = A("aXaM")
          , i = A("+ypN")
          , s = A("heXC")
          , o = A("a/2G")
          , a = function(e, t, A) {
            var l, c, u, d, h = e & a.F, p = e & a.G, f = e & a.S, g = e & a.P, B = e & a.B, m = p ? n : f ? n[t] || (n[t] = {}) : (n[t] || {}).prototype, w = p ? r : r[t] || (r[t] = {}), v = w.prototype || (w.prototype = {});
            for (l in p && (A = t),
            A)
                u = ((c = !h && m && void 0 !== m[l]) ? m : A)[l],
                d = B && c ? o(u, n) : g && "function" == typeof u ? o(Function.call, u) : u,
                m && s(m, l, u, e & a.U),
                w[l] != u && i(w, l, d),
                g && v[l] != u && (v[l] = u)
        };
        n.core = r,
        a.F = 1,
        a.G = 2,
        a.S = 4,
        a.P = 8,
        a.B = 16,
        a.W = 32,
        a.U = 64,
        a.R = 128,
        e.exports = a
    },
    "ie/A": function(e, t, A) {},
    jpH4: function(e, t, A) {},
    luyb: function(e, t, A) {
        var n = A("DdPZ")
          , r = Math.min;
        e.exports = function(e) {
            return e > 0 ? r(n(e), 9007199254740991) : 0
        }
    },
    mYya: function(e, t, A) {
        var n = A("latG");
        e.exports = function(e) {
            if (Array.isArray(e))
                return n(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    pSK3: function(e, t, A) {
        e.exports = {
            "util-full-parent-content": "roo-util-full-parent-content",
            "util-fullscreen": "roo-util-fullscreen",
            "util-text-overflow-ellipsis-oneline": "roo-util-text-overflow-ellipsis-oneline",
            "util-text-overflow-ellipsis-twolines": "roo-util-text-overflow-ellipsis-twolines",
            inputitem: "roo-inputitem",
            list: "roo-list",
            label: "roo-label",
            required: "roo-required",
            input: "roo-input",
            disable: "roo-disable",
            extra: "roo-extra",
            clear: "roo-clear",
            error: "roo-error",
            right: "roo-right",
            left: "roo-left"
        }
    },
    qqsA: function(e, t, A) {
        e.exports = A.p + "images/mask-dot-08babcf403.png"
    },
    rHrb: function(e, t, A) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CopyToClipboard = void 0;
        var n = i(A("q1tI"))
          , r = i(A("+QRC"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o(e, t) {
            var A = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                A.push.apply(A, n)
            }
            return A
        }
        function a(e, t) {
            if (null == e)
                return {};
            var A, n, r = function(e, t) {
                if (null == e)
                    return {};
                var A, n, r = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    A = i[n],
                    t.indexOf(A) >= 0 || (r[A] = e[A]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    A = i[n],
                    t.indexOf(A) >= 0 || Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A])
            }
            return r
        }
        function l(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function u(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? h(e) : t
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function h(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function f(e, t, A) {
            return t in e ? Object.defineProperty(e, t, {
                value: A,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = A,
            e
        }
        var g = function(e) {
            function t() {
                var e, A;
                l(this, t);
                for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
                    s[o] = arguments[o];
                return f(h(A = u(this, (e = d(t)).call.apply(e, [this].concat(s)))), "onClick", (function(e) {
                    var t = A.props
                      , i = t.text
                      , s = t.onCopy
                      , o = t.children
                      , a = t.options
                      , l = n.default.Children.only(o)
                      , c = (0,
                    r.default)(i, a);
                    s && s(i, c),
                    l && l.props && "function" == typeof l.props.onClick && l.props.onClick(e)
                }
                )),
                A
            }
            var A, i, s;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(t, e),
            A = t,
            (i = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.text,
                    e.onCopy,
                    e.options,
                    e.children)
                      , A = a(e, ["text", "onCopy", "options", "children"])
                      , r = n.default.Children.only(t);
                    return n.default.cloneElement(r, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var A = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(A, !0).forEach((function(t) {
                                f(e, t, A[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : o(A).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
                            }
                            ))
                        }
                        return e
                    }({}, A, {
                        onClick: this.onClick
                    }))
                }
            }]) && c(A.prototype, i),
            s && c(A, s),
            t
        }(n.default.PureComponent);
        t.CopyToClipboard = g,
        f(g, "defaultProps", {
            onCopy: void 0,
            options: void 0
        })
    },
    rtZs: function(e, t, A) {},
    t9UJ: function(e, t, A) {
        "use strict";
        A("I5cv"),
        A("VRzm"),
        A("rGqo"),
        A("yt8O"),
        A("Btvt"),
        A("RW0V");
        var n = A("HsOD")
          , r = A.n(n)
          , i = A("pj57")
          , s = A.n(i)
          , o = A("a/cl")
          , a = A.n(o)
          , l = A("Pkpw")
          , c = A.n(l)
          , u = A("oEga")
          , d = A.n(u)
          , h = A("9WXe")
          , p = A.n(h)
          , f = A("vR76")
          , g = A.n(f)
          , B = A("q1tI")
          , m = A.n(B)
          , w = A("17x9")
          , v = A.n(w)
          , E = function(e, t) {
            return (E = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var A in t)
                    Object.prototype.hasOwnProperty.call(t, A) && (e[A] = t[A])
            }
            )(e, t)
        };
        function C(e, t) {
            function A() {
                this.constructor = e
            }
            E(e, t),
            e.prototype = null === t ? Object.create(t) : (A.prototype = t.prototype,
            new A)
        }
        var Q = function() {
            return (Q = Object.assign || function(e) {
                for (var t, A = 1, n = arguments.length; A < n; A++)
                    for (var r in t = arguments[A])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        };
        function y() {
            for (var e = 0, t = 0, A = arguments.length; t < A; t++)
                e += arguments[t].length;
            var n = Array(e)
              , r = 0;
            for (t = 0; t < A; t++)
                for (var i = arguments[t], s = 0, o = i.length; s < o; s++,
                r++)
                    n[r] = i[s];
            return n
        }
        var b = [{
            sourceKey: "scroller.scrollBehaviorX.currentPos",
            key: "x"
        }, {
            sourceKey: "scroller.scrollBehaviorY.currentPos",
            key: "y"
        }, {
            sourceKey: "scroller.scrollBehaviorX.hasScroll",
            key: "hasHorizontalScroll"
        }, {
            sourceKey: "scroller.scrollBehaviorY.hasScroll",
            key: "hasVerticalScroll"
        }, {
            sourceKey: "scroller.scrollBehaviorX.contentSize",
            key: "scrollerWidth"
        }, {
            sourceKey: "scroller.scrollBehaviorY.contentSize",
            key: "scrollerHeight"
        }, {
            sourceKey: "scroller.scrollBehaviorX.maxScrollPos",
            key: "maxScrollX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.maxScrollPos",
            key: "maxScrollY"
        }, {
            sourceKey: "scroller.scrollBehaviorX.minScrollPos",
            key: "minScrollX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.minScrollPos",
            key: "minScrollY"
        }, {
            sourceKey: "scroller.scrollBehaviorX.movingDirection",
            key: "movingDirectionX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.movingDirection",
            key: "movingDirectionY"
        }, {
            sourceKey: "scroller.scrollBehaviorX.direction",
            key: "directionX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.direction",
            key: "directionY"
        }, {
            sourceKey: "scroller.actions.enabled",
            key: "enabled"
        }, {
            sourceKey: "scroller.animater.pending",
            key: "pending"
        }, {
            sourceKey: "scroller.animater.stop",
            key: "stop"
        }, {
            sourceKey: "scroller.scrollTo",
            key: "scrollTo"
        }, {
            sourceKey: "scroller.scrollBy",
            key: "scrollBy"
        }, {
            sourceKey: "scroller.scrollToElement",
            key: "scrollToElement"
        }, {
            sourceKey: "scroller.resetPosition",
            key: "resetPosition"
        }];
        function U(e) {
            console.error("[BScroll warn]: " + e)
        }
        var F = "undefined" != typeof window
          , T = F && navigator.userAgent.toLowerCase()
          , H = !(!T || !/wechatdevtools/.test(T))
          , S = T && T.indexOf("android") > 0
          , N = function() {
            if ("string" == typeof T) {
                var e = /os (\d\d?_\d(_\d)?)/.exec(T);
                if (!e)
                    return !1;
                var t = e[1].split("_").map((function(e) {
                    return parseInt(e, 10)
                }
                ));
                return !!(13 === t[0] && t[1] >= 4)
            }
            return !1
        }()
          , x = !1;
        if (F) {
            try {
                var I = {};
                Object.defineProperty(I, "passive", {
                    get: function() {
                        x = !0
                    }
                }),
                window.addEventListener("test-passive", (function() {}
                ), I)
            } catch (e) {}
        }
        function O() {
            return window.performance && window.performance.now && window.performance.timing ? window.performance.now() + window.performance.timing.navigationStart : +new Date
        }
        var k = function(e, t) {
            for (var A in t)
                e[A] = t[A];
            return e
        };
        function M(e) {
            return null == e
        }
        function P(e, t, A) {
            return e < t ? t : e > A ? A : e
        }
        var K = F && document.createElement("div").style
          , L = function() {
            if (!F)
                return !1;
            for (var e = 0, t = [{
                key: "standard",
                value: "transform"
            }, {
                key: "webkit",
                value: "webkitTransform"
            }, {
                key: "Moz",
                value: "MozTransform"
            }, {
                key: "O",
                value: "OTransform"
            }, {
                key: "ms",
                value: "msTransform"
            }]; e < t.length; e++) {
                var A = t[e];
                if (void 0 !== K[A.value])
                    return A.key
            }
            return !1
        }();
        function D(e) {
            return !1 === L ? e : "standard" === L ? "transitionEnd" === e ? "transitionend" : e : L + e.charAt(0).toUpperCase() + e.substr(1)
        }
        function R(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        }
        function _(e, t, A, n) {
            var r = x ? {
                passive: !1,
                capture: !!n
            } : !!n;
            e.addEventListener(t, A, r)
        }
        function z(e, t, A, n) {
            e.removeEventListener(t, A, {
                capture: !!n
            })
        }
        function X(e) {
            for (var t = 0, A = 0; e; )
                t -= e.offsetLeft,
                A -= e.offsetTop,
                e = e.offsetParent;
            return {
                left: t,
                top: A
            }
        }
        L && "standard" !== L && L.toLowerCase();
        var V = D("transform")
          , G = D("transition")
          , Y = F && D("perspective")in K
          , J = F && ("ontouchstart"in window || H)
          , W = F && G in K
          , $ = {
            transform: V,
            transition: G,
            transitionTimingFunction: D("transitionTimingFunction"),
            transitionDuration: D("transitionDuration"),
            transitionDelay: D("transitionDelay"),
            transformOrigin: D("transformOrigin"),
            transitionEnd: D("transitionEnd"),
            transitionProperty: D("transitionProperty")
        }
          , j = {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            touchcancel: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2
        };
        function q(e) {
            if (e instanceof window.SVGElement) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }
            return {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
        function Z(e, t) {
            for (var A in t)
                if (t[A].test(e[A]))
                    return !0;
            return !1
        }
        var ee = Z;
        function te(e, t) {
            var A;
            void 0 === t && (t = "click"),
            "mouseup" === e.type ? A = e : "touchend" !== e.type && "touchcancel" !== e.type || (A = e.changedTouches[0]);
            var n, r = {};
            A && (r.screenX = A.screenX || 0,
            r.screenY = A.screenY || 0,
            r.clientX = A.clientX || 0,
            r.clientY = A.clientY || 0);
            var i = {
                ctrlKey: e.ctrlKey,
                shiftKey: e.shiftKey,
                altKey: e.altKey,
                metaKey: e.metaKey
            };
            if ("undefined" != typeof MouseEvent)
                try {
                    n = new MouseEvent(t,k(Q({
                        bubbles: !0,
                        cancelable: !0
                    }, i), r))
                } catch (e) {
                    s()
                }
            else
                s();
            function s() {
                (n = document.createEvent("Event")).initEvent(t, !0, !0),
                k(n, r)
            }
            n.forwardedTouchEvent = !0,
            n._constructed = !0,
            e.target.dispatchEvent(n)
        }
        var Ae = {
            swipe: {
                style: "cubic-bezier(0.23, 1, 0.32, 1)",
                fn: function(e) {
                    return 1 + --e * e * e * e * e
                }
            },
            swipeBounce: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(e) {
                    return e * (2 - e)
                }
            },
            bounce: {
                style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                fn: function(e) {
                    return 1 - --e * e * e * e
                }
            }
        }
          , ne = F && window;
        function re() {}
        var ie = F ? ne.requestAnimationFrame || ne.webkitRequestAnimationFrame || ne.mozRequestAnimationFrame || ne.oRequestAnimationFrame || function(e) {
            return window.setTimeout(e, e.interval || 1e3 / 60)
        }
        : re
          , se = F ? ne.cancelAnimationFrame || ne.webkitCancelAnimationFrame || ne.mozCancelAnimationFrame || ne.oCancelAnimationFrame || function(e) {
            window.clearTimeout(e)
        }
        : re
          , oe = function(e) {}
          , ae = {
            enumerable: !0,
            configurable: !0,
            get: oe,
            set: oe
        };
        var le = function() {
            function e(e) {
                this.events = {},
                this.eventTypes = {},
                this.registerType(e)
            }
            return e.prototype.on = function(e, t, A) {
                return void 0 === A && (A = this),
                this.hasType(e),
                this.events[e] || (this.events[e] = []),
                this.events[e].push([t, A]),
                this
            }
            ,
            e.prototype.once = function(e, t, A) {
                var n = this;
                void 0 === A && (A = this),
                this.hasType(e);
                var r = function() {
                    for (var i = [], s = 0; s < arguments.length; s++)
                        i[s] = arguments[s];
                    n.off(e, r);
                    var o = t.apply(A, i);
                    if (!0 === o)
                        return o
                };
                return r.fn = t,
                this.on(e, r),
                this
            }
            ,
            e.prototype.off = function(e, t) {
                if (!e && !t)
                    return this.events = {},
                    this;
                if (e) {
                    if (this.hasType(e),
                    !t)
                        return this.events[e] = [],
                        this;
                    var A = this.events[e];
                    if (!A)
                        return this;
                    for (var n = A.length; n--; )
                        (A[n][0] === t || A[n][0] && A[n][0].fn === t) && A.splice(n, 1);
                    return this
                }
            }
            ,
            e.prototype.trigger = function(e) {
                for (var t = [], A = 1; A < arguments.length; A++)
                    t[A - 1] = arguments[A];
                this.hasType(e);
                var n = this.events[e];
                if (n)
                    for (var r, i = n.length, s = y(n), o = 0; o < i; o++) {
                        var a = s[o]
                          , l = a[0]
                          , c = a[1];
                        if (l && !0 === (r = l.apply(c, t)))
                            return r
                    }
            }
            ,
            e.prototype.registerType = function(e) {
                var t = this;
                e.forEach((function(e) {
                    t.eventTypes[e] = e
                }
                ))
            }
            ,
            e.prototype.destroy = function() {
                this.events = {},
                this.eventTypes = {}
            }
            ,
            e.prototype.hasType = function(e) {
                var t = this.eventTypes;
                t[e] === e || U('EventEmitter has used unknown event type: "' + e + '", should be oneof [' + Object.keys(t).map((function(e) {
                    return JSON.stringify(e)
                }
                )) + "]")
            }
            ,
            e
        }()
          , ce = function() {
            function e(e, t) {
                this.wrapper = e,
                this.events = t,
                this.addDOMEvents()
            }
            return e.prototype.destroy = function() {
                this.removeDOMEvents(),
                this.events = []
            }
            ,
            e.prototype.addDOMEvents = function() {
                this.handleDOMEvents(_)
            }
            ,
            e.prototype.removeDOMEvents = function() {
                this.handleDOMEvents(z)
            }
            ,
            e.prototype.handleDOMEvents = function(e) {
                var t = this
                  , A = this.wrapper;
                this.events.forEach((function(n) {
                    e(A, n.name, t, !!n.capture)
                }
                ))
            }
            ,
            e.prototype.handleEvent = function(e) {
                var t = e.type;
                this.events.some((function(A) {
                    return A.name === t && (A.handler(e),
                    !0)
                }
                ))
            }
            ,
            e
        }()
          , ue = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.startX = 0,
                t.startY = 0,
                t.scrollX = !1,
                t.scrollY = !0,
                t.freeScroll = !1,
                t.directionLockThreshold = 0,
                t.eventPassthrough = "",
                t.click = !1,
                t.dblclick = !1,
                t.tap = "",
                t.bounce = {
                    top: !0,
                    bottom: !0,
                    left: !0,
                    right: !0
                },
                t.bounceTime = 800,
                t.momentum = !0,
                t.momentumLimitTime = 300,
                t.momentumLimitDistance = 15,
                t.swipeTime = 2500,
                t.swipeBounceTime = 500,
                t.deceleration = .0015,
                t.flickLimitTime = 200,
                t.flickLimitDistance = 100,
                t.resizePolling = 60,
                t.probeType = 0,
                t.stopPropagation = !1,
                t.preventDefault = !0,
                t.preventDefaultException = {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
                },
                t.tagException = {
                    tagName: /^TEXTAREA$/
                },
                t.HWCompositing = !0,
                t.useTransition = !0,
                t.bindToWrapper = !1,
                t.bindToTarget = !1,
                t.disableMouse = J,
                t.disableTouch = !J,
                t.autoBlur = !0,
                t.autoEndDistance = 5,
                t.outOfBoundaryDampingFactor = 1 / 3,
                t.specifiedIndexAsContent = 0,
                t.quadrant = 1,
                t
            }
            return C(t, e),
            t.prototype.merge = function(e) {
                if (!e)
                    return this;
                for (var t in e)
                    "bounce" !== t ? this[t] = e[t] : this.bounce = this.resolveBounce(e[t]);
                return this
            }
            ,
            t.prototype.process = function() {
                return this.translateZ = this.HWCompositing && Y ? " translateZ(1px)" : "",
                this.useTransition = this.useTransition && W,
                this.preventDefault = !this.eventPassthrough && this.preventDefault,
                this.scrollX = "horizontal" !== this.eventPassthrough && this.scrollX,
                this.scrollY = "vertical" !== this.eventPassthrough && this.scrollY,
                this.freeScroll = this.freeScroll && !this.eventPassthrough,
                this.scrollX = !!this.freeScroll || this.scrollX,
                this.scrollY = !!this.freeScroll || this.scrollY,
                this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold,
                this
            }
            ,
            t.prototype.resolveBounce = function(e) {
                var t = {
                    top: !0,
                    right: !0,
                    bottom: !0,
                    left: !0
                };
                return "object" == typeof e ? k(t, e) : e ? t : {
                    top: !1,
                    right: !1,
                    bottom: !1,
                    left: !1
                }
            }
            ,
            t
        }((function() {}
        ))
          , de = function() {
            function e(e, t) {
                this.wrapper = e,
                this.options = t,
                this.hooks = new le(["beforeStart", "start", "move", "end", "click"]),
                this.handleDOMEvents()
            }
            return e.prototype.handleDOMEvents = function() {
                var e = this.options
                  , t = e.bindToWrapper
                  , A = e.disableMouse
                  , n = e.disableTouch
                  , r = e.click
                  , i = this.wrapper
                  , s = t ? i : window
                  , o = []
                  , a = []
                  , l = !n
                  , c = !A;
                r && o.push({
                    name: "click",
                    handler: this.click.bind(this),
                    capture: !0
                }),
                l && (o.push({
                    name: "touchstart",
                    handler: this.start.bind(this)
                }),
                a.push({
                    name: "touchmove",
                    handler: this.move.bind(this)
                }, {
                    name: "touchend",
                    handler: this.end.bind(this)
                }, {
                    name: "touchcancel",
                    handler: this.end.bind(this)
                })),
                c && (o.push({
                    name: "mousedown",
                    handler: this.start.bind(this)
                }),
                a.push({
                    name: "mousemove",
                    handler: this.move.bind(this)
                }, {
                    name: "mouseup",
                    handler: this.end.bind(this)
                })),
                this.wrapperEventRegister = new ce(i,o),
                this.targetEventRegister = new ce(s,a)
            }
            ,
            e.prototype.beforeHandler = function(e, t) {
                var A = this.options
                  , n = A.preventDefault
                  , r = A.stopPropagation
                  , i = A.preventDefaultException;
                ({
                    start: function() {
                        return n && !Z(e.target, i)
                    },
                    end: function() {
                        return n && !Z(e.target, i)
                    },
                    move: function() {
                        return n
                    }
                })[t]() && e.preventDefault(),
                r && e.stopPropagation()
            }
            ,
            e.prototype.setInitiated = function(e) {
                void 0 === e && (e = 0),
                this.initiated = e
            }
            ,
            e.prototype.start = function(e) {
                var t = j[e.type];
                if (!this.initiated || this.initiated === t)
                    if (this.setInitiated(t),
                    ee(e.target, this.options.tagException))
                        this.setInitiated();
                    else if ((2 !== t || 0 === e.button) && !this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
                        this.beforeHandler(e, "start");
                        var A = e.touches ? e.touches[0] : e;
                        this.pointX = A.pageX,
                        this.pointY = A.pageY,
                        this.hooks.trigger(this.hooks.eventTypes.start, e)
                    }
            }
            ,
            e.prototype.move = function(e) {
                if (j[e.type] === this.initiated) {
                    this.beforeHandler(e, "move");
                    var t = e.touches ? e.touches[0] : e
                      , A = t.pageX - this.pointX
                      , n = t.pageY - this.pointY;
                    if (this.pointX = t.pageX,
                    this.pointY = t.pageY,
                    !this.hooks.trigger(this.hooks.eventTypes.move, {
                        deltaX: A,
                        deltaY: n,
                        e: e
                    })) {
                        var r = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
                          , i = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                          , s = this.pointX - r
                          , o = this.pointY - i
                          , a = this.options.autoEndDistance;
                        (s > document.documentElement.clientWidth - a || o > document.documentElement.clientHeight - a || s < a || o < a) && this.end(e)
                    }
                }
            }
            ,
            e.prototype.end = function(e) {
                j[e.type] === this.initiated && (this.setInitiated(),
                this.beforeHandler(e, "end"),
                this.hooks.trigger(this.hooks.eventTypes.end, e))
            }
            ,
            e.prototype.click = function(e) {
                this.hooks.trigger(this.hooks.eventTypes.click, e)
            }
            ,
            e.prototype.setContent = function(e) {
                e !== this.wrapper && (this.wrapper = e,
                this.rebindDOMEvents())
            }
            ,
            e.prototype.rebindDOMEvents = function() {
                this.wrapperEventRegister.destroy(),
                this.targetEventRegister.destroy(),
                this.handleDOMEvents()
            }
            ,
            e.prototype.destroy = function() {
                this.wrapperEventRegister.destroy(),
                this.targetEventRegister.destroy(),
                this.hooks.destroy()
            }
            ,
            e
        }()
          , he = {
            x: ["translateX", "px"],
            y: ["translateY", "px"]
        }
          , pe = function() {
            function e(e) {
                this.setContent(e),
                this.hooks = new le(["beforeTranslate", "translate"])
            }
            return e.prototype.getComputedPosition = function() {
                var e = window.getComputedStyle(this.content, null)[$.transform].split(")")[0].split(", ");
                return {
                    x: +(e[12] || e[4]) || 0,
                    y: +(e[13] || e[5]) || 0
                }
            }
            ,
            e.prototype.translate = function(e) {
                var t = [];
                Object.keys(e).forEach((function(A) {
                    if (he[A]) {
                        var n = he[A][0];
                        if (n) {
                            var r = he[A][1]
                              , i = e[A];
                            t.push(n + "(" + i + r + ")")
                        }
                    }
                }
                )),
                this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, t, e),
                this.style[$.transform] = t.join(" "),
                this.hooks.trigger(this.hooks.eventTypes.translate, e)
            }
            ,
            e.prototype.setContent = function(e) {
                this.content !== e && (this.content = e,
                this.style = e.style)
            }
            ,
            e.prototype.destroy = function() {
                this.hooks.destroy()
            }
            ,
            e
        }()
          , fe = function() {
            function e(e, t, A) {
                this.translater = t,
                this.options = A,
                this.timer = 0,
                this.hooks = new le(["move", "end", "beforeForceStop", "forceStop", "callStop", "time", "timeFunction"]),
                this.setContent(e)
            }
            return e.prototype.translate = function(e) {
                this.translater.translate(e)
            }
            ,
            e.prototype.setPending = function(e) {
                this.pending = e
            }
            ,
            e.prototype.setForceStopped = function(e) {
                this.forceStopped = e
            }
            ,
            e.prototype.setCallStop = function(e) {
                this.callStopWhenPending = e
            }
            ,
            e.prototype.setContent = function(e) {
                this.content !== e && (this.content = e,
                this.style = e.style,
                this.stop())
            }
            ,
            e.prototype.clearTimer = function() {
                this.timer && (se(this.timer),
                this.timer = 0)
            }
            ,
            e.prototype.destroy = function() {
                this.hooks.destroy(),
                se(this.timer)
            }
            ,
            e
        }()
          , ge = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return C(t, e),
            t.prototype.startProbe = function(e, t) {
                var A = this
                  , n = e
                  , r = function() {
                    var i = A.translater.getComputedPosition();
                    (function(e, t, A, n) {
                        var r = function(e, t) {
                            var A = e - t;
                            return A > 0 ? -1 : A < 0 ? 1 : 0
                        }
                          , i = r(t.x, e.x)
                          , s = r(t.y, e.y)
                          , o = A.x - n.x
                          , a = A.y - n.y;
                        return i * o <= 0 && s * a <= 0
                    }
                    )(e, t, i, n) && A.hooks.trigger(A.hooks.eventTypes.move, i),
                    A.pending || (A.callStopWhenPending ? A.callStopWhenPending = !1 : A.hooks.trigger(A.hooks.eventTypes.end, i)),
                    n = i,
                    A.pending && (A.timer = ie(r))
                };
                this.callStopWhenPending && this.setCallStop(!1),
                se(this.timer),
                r()
            }
            ,
            t.prototype.transitionTime = function(e) {
                void 0 === e && (e = 0),
                this.style[$.transitionDuration] = e + "ms",
                this.hooks.trigger(this.hooks.eventTypes.time, e)
            }
            ,
            t.prototype.transitionTimingFunction = function(e) {
                this.style[$.transitionTimingFunction] = e,
                this.hooks.trigger(this.hooks.eventTypes.timeFunction, e)
            }
            ,
            t.prototype.transitionProperty = function() {
                this.style[$.transitionProperty] = $.transform
            }
            ,
            t.prototype.move = function(e, t, A, n) {
                this.setPending(A > 0),
                this.transitionTimingFunction(n),
                this.transitionProperty(),
                this.transitionTime(A),
                this.translate(t);
                var r = 3 === this.options.probeType;
                A && r && this.startProbe(e, t),
                A || (this._reflow = this.content.offsetHeight,
                r && this.hooks.trigger(this.hooks.eventTypes.move, t),
                this.hooks.trigger(this.hooks.eventTypes.end, t))
            }
            ,
            t.prototype.doStop = function() {
                var e = this.pending;
                if (this.setForceStopped(!1),
                this.setCallStop(!1),
                e) {
                    this.setPending(!1),
                    se(this.timer);
                    var t = this.translater.getComputedPosition()
                      , A = t.x
                      , n = t.y;
                    this.transitionTime(),
                    this.translate({
                        x: A,
                        y: n
                    }),
                    this.setForceStopped(!0),
                    this.setCallStop(!0),
                    this.hooks.trigger(this.hooks.eventTypes.forceStop, {
                        x: A,
                        y: n
                    })
                }
                return e
            }
            ,
            t.prototype.stop = function() {
                this.doStop() && this.hooks.trigger(this.hooks.eventTypes.callStop)
            }
            ,
            t
        }(fe)
          , Be = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return C(t, e),
            t.prototype.move = function(e, t, A, n) {
                if (!A)
                    return this.translate(t),
                    3 === this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.move, t),
                    void this.hooks.trigger(this.hooks.eventTypes.end, t);
                this.animate(e, t, A, n)
            }
            ,
            t.prototype.animate = function(e, t, A, n) {
                var r = this
                  , i = O()
                  , s = i + A
                  , o = 3 === this.options.probeType
                  , a = function() {
                    var l = O();
                    if (l >= s)
                        return r.translate(t),
                        o && r.hooks.trigger(r.hooks.eventTypes.move, t),
                        void r.hooks.trigger(r.hooks.eventTypes.end, t);
                    var c = n(l = (l - i) / A)
                      , u = {};
                    Object.keys(t).forEach((function(A) {
                        var n = e[A]
                          , r = t[A];
                        u[A] = (r - n) * c + n
                    }
                    )),
                    r.translate(u),
                    o && r.hooks.trigger(r.hooks.eventTypes.move, u),
                    r.pending && (r.timer = ie(a)),
                    r.pending || (r.callStopWhenPending ? r.callStopWhenPending = !1 : r.hooks.trigger(r.hooks.eventTypes.end, t))
                };
                this.setPending(!0),
                this.callStopWhenPending && this.setCallStop(!1),
                se(this.timer),
                a()
            }
            ,
            t.prototype.doStop = function() {
                var e = this.pending;
                if (this.setForceStopped(!1),
                this.setCallStop(!1),
                e) {
                    this.setPending(!1),
                    se(this.timer);
                    var t = this.translater.getComputedPosition();
                    this.setForceStopped(!0),
                    this.setCallStop(!0),
                    this.hooks.trigger(this.hooks.eventTypes.forceStop, t)
                }
                return e
            }
            ,
            t.prototype.stop = function() {
                this.doStop() && this.hooks.trigger(this.hooks.eventTypes.callStop)
            }
            ,
            t
        }(fe);
        var me, we, ve, Ee, Ce = function() {
            function e(e, t, A) {
                this.wrapper = e,
                this.options = A,
                this.hooks = new le(["beforeComputeBoundary", "computeBoundary", "momentum", "end", "ignoreHasScroll"]),
                this.refresh(t)
            }
            return e.prototype.start = function() {
                this.dist = 0,
                this.setMovingDirection(0),
                this.setDirection(0)
            }
            ,
            e.prototype.move = function(e) {
                return e = this.hasScroll ? e : 0,
                this.setMovingDirection(e),
                this.performDampingAlgorithm(e, this.options.outOfBoundaryDampingFactor)
            }
            ,
            e.prototype.setMovingDirection = function(e) {
                this.movingDirection = e > 0 ? -1 : e < 0 ? 1 : 0
            }
            ,
            e.prototype.setDirection = function(e) {
                this.direction = e > 0 ? -1 : e < 0 ? 1 : 0
            }
            ,
            e.prototype.performDampingAlgorithm = function(e, t) {
                var A = this.currentPos + e;
                return (A > this.minScrollPos || A < this.maxScrollPos) && (A = A > this.minScrollPos && this.options.bounces[0] || A < this.maxScrollPos && this.options.bounces[1] ? this.currentPos + e * t : A > this.minScrollPos ? this.minScrollPos : this.maxScrollPos),
                A
            }
            ,
            e.prototype.end = function(e) {
                var t = {
                    duration: 0
                }
                  , A = Math.abs(this.currentPos - this.startPos);
                if (this.options.momentum && e < this.options.momentumLimitTime && A > this.options.momentumLimitDistance) {
                    var n = -1 === this.direction && this.options.bounces[0] || 1 === this.direction && this.options.bounces[1] ? this.wrapperSize : 0;
                    t = this.hasScroll ? this.momentum(this.currentPos, this.startPos, e, this.maxScrollPos, this.minScrollPos, n, this.options) : {
                        destination: this.currentPos,
                        duration: 0
                    }
                } else
                    this.hooks.trigger(this.hooks.eventTypes.end, t);
                return t
            }
            ,
            e.prototype.momentum = function(e, t, A, n, r, i, s) {
                void 0 === s && (s = this.options);
                var o = e - t
                  , a = Math.abs(o) / A
                  , l = s.deceleration
                  , c = s.swipeBounceTime
                  , u = s.swipeTime
                  , d = {
                    destination: e + a * a / l * (o < 0 ? -1 : 1),
                    duration: Math.min(u, 2 * a / l),
                    rate: 15
                };
                return this.hooks.trigger(this.hooks.eventTypes.momentum, d, o),
                d.destination < n ? (d.destination = i ? Math.max(n - i / 4, n - i / d.rate * a) : n,
                d.duration = c) : d.destination > r && (d.destination = i ? Math.min(r + i / 4, r + i / d.rate * a) : r,
                d.duration = c),
                d.destination = Math.round(d.destination),
                d
            }
            ,
            e.prototype.updateDirection = function() {
                var e = this.currentPos - this.absStartPos;
                this.setDirection(e)
            }
            ,
            e.prototype.refresh = function(e) {
                var t = this.options.rect
                  , A = t.size
                  , n = t.position
                  , r = "static" === window.getComputedStyle(this.wrapper, null).position
                  , i = q(this.wrapper);
                this.wrapperSize = this.wrapper["width" === A ? "clientWidth" : "clientHeight"],
                this.setContent(e);
                var s = q(this.content);
                this.contentSize = s[A],
                this.relativeOffset = s[n],
                r && (this.relativeOffset -= i[n]),
                this.computeBoundary(),
                this.setDirection(0)
            }
            ,
            e.prototype.setContent = function(e) {
                e !== this.content && (this.content = e,
                this.resetState())
            }
            ,
            e.prototype.resetState = function() {
                this.currentPos = 0,
                this.startPos = 0,
                this.dist = 0,
                this.setDirection(0),
                this.setMovingDirection(0),
                this.resetStartPos()
            }
            ,
            e.prototype.computeBoundary = function() {
                this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
                var e = {
                    minScrollPos: 0,
                    maxScrollPos: this.wrapperSize - this.contentSize
                };
                e.maxScrollPos < 0 && (e.maxScrollPos -= this.relativeOffset,
                0 === this.options.specifiedIndexAsContent && (e.minScrollPos = -this.relativeOffset)),
                this.hooks.trigger(this.hooks.eventTypes.computeBoundary, e),
                this.minScrollPos = e.minScrollPos,
                this.maxScrollPos = e.maxScrollPos,
                this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos,
                !this.hasScroll && this.minScrollPos < this.maxScrollPos && (this.maxScrollPos = this.minScrollPos,
                this.contentSize = this.wrapperSize)
            }
            ,
            e.prototype.updatePosition = function(e) {
                this.currentPos = e
            }
            ,
            e.prototype.getCurrentPos = function() {
                return this.currentPos
            }
            ,
            e.prototype.checkInBoundary = function() {
                var e = this.adjustPosition(this.currentPos);
                return {
                    position: e,
                    inBoundary: e === this.getCurrentPos()
                }
            }
            ,
            e.prototype.adjustPosition = function(e) {
                return this.hasScroll || this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll) ? e > this.minScrollPos ? e = this.minScrollPos : e < this.maxScrollPos && (e = this.maxScrollPos) : e = this.minScrollPos,
                e
            }
            ,
            e.prototype.updateStartPos = function() {
                this.startPos = this.currentPos
            }
            ,
            e.prototype.updateAbsStartPos = function() {
                this.absStartPos = this.currentPos
            }
            ,
            e.prototype.resetStartPos = function() {
                this.updateStartPos(),
                this.updateAbsStartPos()
            }
            ,
            e.prototype.getAbsDist = function(e) {
                return this.dist += e,
                Math.abs(this.dist)
            }
            ,
            e.prototype.destroy = function() {
                this.hooks.destroy()
            }
            ,
            e
        }(), Qe = ((me = {}).yes = function(e) {
            return !0
        }
        ,
        me.no = function(e) {
            return e.preventDefault(),
            !1
        }
        ,
        me), ye = ((we = {}).horizontal = ((ve = {}).yes = "horizontal",
        ve.no = "vertical",
        ve),
        we.vertical = ((Ee = {}).yes = "vertical",
        Ee.no = "horizontal",
        Ee),
        we), be = function() {
            function e(e, t, A) {
                this.directionLockThreshold = e,
                this.freeScroll = t,
                this.eventPassthrough = A,
                this.reset()
            }
            return e.prototype.reset = function() {
                this.directionLocked = ""
            }
            ,
            e.prototype.checkMovingDirection = function(e, t, A) {
                return this.computeDirectionLock(e, t),
                this.handleEventPassthrough(A)
            }
            ,
            e.prototype.adjustDelta = function(e, t) {
                return "horizontal" === this.directionLocked ? t = 0 : "vertical" === this.directionLocked && (e = 0),
                {
                    deltaX: e,
                    deltaY: t
                }
            }
            ,
            e.prototype.computeDirectionLock = function(e, t) {
                "" !== this.directionLocked || this.freeScroll || (e > t + this.directionLockThreshold ? this.directionLocked = "horizontal" : t >= e + this.directionLockThreshold ? this.directionLocked = "vertical" : this.directionLocked = "none")
            }
            ,
            e.prototype.handleEventPassthrough = function(e) {
                var t = ye[this.directionLocked];
                if (t) {
                    if (this.eventPassthrough === t.yes)
                        return Qe.yes(e);
                    if (this.eventPassthrough === t.no)
                        return Qe.no(e)
                }
                return !1
            }
            ,
            e
        }(), Ue = function() {
            function e(e, t, A, n, r) {
                this.hooks = new le(["start", "beforeMove", "scrollStart", "scroll", "beforeEnd", "end", "scrollEnd", "contentNotMoved", "detectMovingDirection", "coordinateTransformation"]),
                this.scrollBehaviorX = e,
                this.scrollBehaviorY = t,
                this.actionsHandler = A,
                this.animater = n,
                this.options = r,
                this.directionLockAction = new be(r.directionLockThreshold,r.freeScroll,r.eventPassthrough),
                this.enabled = !0,
                this.bindActionsHandler()
            }
            return e.prototype.bindActionsHandler = function() {
                var e = this;
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, (function(t) {
                    return !e.enabled || e.handleStart(t)
                }
                )),
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, (function(t) {
                    var A = t.deltaX
                      , n = t.deltaY
                      , r = t.e;
                    if (!e.enabled)
                        return !0;
                    var i = function(e, t, A) {
                        return 2 === A ? [t, -e] : 3 === A ? [-e, -t] : 4 === A ? [-t, e] : [e, t]
                    }(A, n, e.options.quadrant)
                      , s = {
                        deltaX: i[0],
                        deltaY: i[1]
                    };
                    return e.hooks.trigger(e.hooks.eventTypes.coordinateTransformation, s),
                    e.handleMove(s.deltaX, s.deltaY, r)
                }
                )),
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, (function(t) {
                    return !e.enabled || e.handleEnd(t)
                }
                )),
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, (function(t) {
                    e.enabled && !t._constructed && e.handleClick(t)
                }
                ))
            }
            ,
            e.prototype.handleStart = function(e) {
                var t = O();
                this.fingerMoved = !1,
                this.contentMoved = !1,
                this.startTime = t,
                this.directionLockAction.reset(),
                this.scrollBehaviorX.start(),
                this.scrollBehaviorY.start(),
                this.animater.doStop(),
                this.scrollBehaviorX.resetStartPos(),
                this.scrollBehaviorY.resetStartPos(),
                this.hooks.trigger(this.hooks.eventTypes.start, e)
            }
            ,
            e.prototype.handleMove = function(e, t, A) {
                if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, A)) {
                    var n = this.scrollBehaviorX.getAbsDist(e)
                      , r = this.scrollBehaviorY.getAbsDist(t)
                      , i = O();
                    if (this.checkMomentum(n, r, i))
                        return !0;
                    if (this.directionLockAction.checkMovingDirection(n, r, A))
                        return this.actionsHandler.setInitiated(),
                        !0;
                    var s = this.directionLockAction.adjustDelta(e, t)
                      , o = this.scrollBehaviorX.getCurrentPos()
                      , a = this.scrollBehaviorX.move(s.deltaX)
                      , l = this.scrollBehaviorY.getCurrentPos()
                      , c = this.scrollBehaviorY.move(s.deltaY);
                    if (!this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
                        this.fingerMoved || (this.fingerMoved = !0);
                        var u = a !== o || c !== l;
                        this.contentMoved || u || this.hooks.trigger(this.hooks.eventTypes.contentNotMoved),
                        !this.contentMoved && u && (this.contentMoved = !0,
                        this.hooks.trigger(this.hooks.eventTypes.scrollStart)),
                        this.contentMoved && u && (this.animater.translate({
                            x: a,
                            y: c
                        }),
                        this.dispatchScroll(i))
                    }
                }
            }
            ,
            e.prototype.dispatchScroll = function(e) {
                e - this.startTime > this.options.momentumLimitTime && (this.startTime = e,
                this.scrollBehaviorX.updateStartPos(),
                this.scrollBehaviorY.updateStartPos(),
                1 === this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())),
                this.options.probeType > 1 && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())
            }
            ,
            e.prototype.checkMomentum = function(e, t, A) {
                return A - this.endTime > this.options.momentumLimitTime && t < this.options.momentumLimitDistance && e < this.options.momentumLimitDistance
            }
            ,
            e.prototype.handleEnd = function(e) {
                if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
                    var t = this.getCurrentPos();
                    if (this.scrollBehaviorX.updateDirection(),
                    this.scrollBehaviorY.updateDirection(),
                    this.hooks.trigger(this.hooks.eventTypes.end, e, t))
                        return !0;
                    t = this.ensureIntegerPos(t),
                    this.animater.translate(t),
                    this.endTime = O();
                    var A = this.endTime - this.startTime;
                    this.hooks.trigger(this.hooks.eventTypes.scrollEnd, t, A)
                }
            }
            ,
            e.prototype.ensureIntegerPos = function(e) {
                this.ensuringInteger = !0;
                var t = e.x
                  , A = e.y
                  , n = this.scrollBehaviorX
                  , r = n.minScrollPos
                  , i = n.maxScrollPos
                  , s = this.scrollBehaviorY
                  , o = s.minScrollPos
                  , a = s.maxScrollPos;
                return t = t > 0 ? Math.ceil(t) : Math.floor(t),
                A = A > 0 ? Math.ceil(A) : Math.floor(A),
                {
                    x: t = P(t, i, r),
                    y: A = P(A, a, o)
                }
            }
            ,
            e.prototype.handleClick = function(e) {
                Z(e.target, this.options.preventDefaultException) || (e.preventDefault(),
                e.stopPropagation())
            }
            ,
            e.prototype.getCurrentPos = function() {
                return {
                    x: this.scrollBehaviorX.getCurrentPos(),
                    y: this.scrollBehaviorY.getCurrentPos()
                }
            }
            ,
            e.prototype.refresh = function() {
                this.endTime = 0
            }
            ,
            e.prototype.destroy = function() {
                this.hooks.destroy()
            }
            ,
            e
        }();
        function Fe(e, t, A, n) {
            var r = ["momentum", "momentumLimitTime", "momentumLimitDistance", "deceleration", "swipeBounceTime", "swipeTime", "outOfBoundaryDampingFactor", "specifiedIndexAsContent"].reduce((function(t, A) {
                return t[A] = e[A],
                t
            }
            ), {});
            return r.scrollable = !!e[t],
            r.bounces = A,
            r.rect = n,
            r
        }
        function Te(e, t, A) {
            A.forEach((function(A) {
                var n, r;
                "string" == typeof A ? n = r = A : (n = A.source,
                r = A.target),
                e.on(n, (function() {
                    for (var e = [], A = 0; A < arguments.length; A++)
                        e[A] = arguments[A];
                    return t.trigger.apply(t, y([r], e))
                }
                ))
            }
            ))
        }
        var He = function() {
            function e(e, t, A) {
                this.wrapper = e,
                this.content = t,
                this.resizeTimeout = 0,
                this.hooks = new le(["beforeStart", "beforeMove", "beforeScrollStart", "scrollStart", "scroll", "beforeEnd", "scrollEnd", "resize", "touchEnd", "end", "flick", "scrollCancel", "momentum", "scrollTo", "minDistanceScroll", "scrollToElement", "beforeRefresh"]),
                this.options = A;
                var n, r = this.options.bounce, i = r.left, s = r.right, o = r.top, a = r.bottom;
                this.scrollBehaviorX = new Ce(e,t,Fe(A, "scrollX", [i, s], {
                    size: "width",
                    position: "left"
                })),
                this.scrollBehaviorY = new Ce(e,t,Fe(A, "scrollY", [o, a], {
                    size: "height",
                    position: "top"
                })),
                this.translater = new pe(this.content),
                this.animater = function(e, t, A) {
                    var n = A.useTransition
                      , r = {};
                    return Object.defineProperty(r, "probeType", {
                        enumerable: !0,
                        configurable: !1,
                        get: function() {
                            return A.probeType
                        }
                    }),
                    n ? new ge(e,t,r) : new Be(e,t,r)
                }(this.content, this.translater, this.options),
                this.actionsHandler = new de(this.options.bindToTarget ? this.content : e,(n = this.options,
                ["click", "bindToWrapper", "disableMouse", "disableTouch", "preventDefault", "stopPropagation", "tagException", "preventDefaultException", "autoEndDistance"].reduce((function(e, t) {
                    return e[t] = n[t],
                    e
                }
                ), {}))),
                this.actions = new Ue(this.scrollBehaviorX,this.scrollBehaviorY,this.actionsHandler,this.animater,this.options);
                var l = this.resize.bind(this);
                this.resizeRegister = new ce(window,[{
                    name: "orientationchange",
                    handler: l
                }, {
                    name: "resize",
                    handler: l
                }]),
                this.registerTransitionEnd(),
                this.init()
            }
            return e.prototype.init = function() {
                var e = this;
                this.bindTranslater(),
                this.bindAnimater(),
                this.bindActions(),
                this.hooks.on(this.hooks.eventTypes.scrollEnd, (function() {
                    e.togglePointerEvents(!0)
                }
                ))
            }
            ,
            e.prototype.registerTransitionEnd = function() {
                this.transitionEndRegister = new ce(this.content,[{
                    name: $.transitionEnd,
                    handler: this.transitionEnd.bind(this)
                }])
            }
            ,
            e.prototype.bindTranslater = function() {
                var e = this
                  , t = this.translater.hooks;
                t.on(t.eventTypes.beforeTranslate, (function(t) {
                    e.options.translateZ && t.push(e.options.translateZ)
                }
                )),
                t.on(t.eventTypes.translate, (function(t) {
                    var A = e.getCurrentPos();
                    e.updatePositions(t),
                    !0 !== e.actions.ensuringInteger ? t.x === A.x && t.y === A.y || e.togglePointerEvents(!1) : e.actions.ensuringInteger = !1
                }
                ))
            }
            ,
            e.prototype.bindAnimater = function() {
                var e = this;
                this.animater.hooks.on(this.animater.hooks.eventTypes.end, (function(t) {
                    e.resetPosition(e.options.bounceTime) || (e.animater.setPending(!1),
                    e.hooks.trigger(e.hooks.eventTypes.scrollEnd, t))
                }
                )),
                Te(this.animater.hooks, this.hooks, [{
                    source: this.animater.hooks.eventTypes.move,
                    target: this.hooks.eventTypes.scroll
                }, {
                    source: this.animater.hooks.eventTypes.forceStop,
                    target: this.hooks.eventTypes.scrollEnd
                }])
            }
            ,
            e.prototype.bindActions = function() {
                var e = this
                  , t = this.actions;
                Te(t.hooks, this.hooks, [{
                    source: t.hooks.eventTypes.start,
                    target: this.hooks.eventTypes.beforeStart
                }, {
                    source: t.hooks.eventTypes.start,
                    target: this.hooks.eventTypes.beforeScrollStart
                }, {
                    source: t.hooks.eventTypes.beforeMove,
                    target: this.hooks.eventTypes.beforeMove
                }, {
                    source: t.hooks.eventTypes.scrollStart,
                    target: this.hooks.eventTypes.scrollStart
                }, {
                    source: t.hooks.eventTypes.scroll,
                    target: this.hooks.eventTypes.scroll
                }, {
                    source: t.hooks.eventTypes.beforeEnd,
                    target: this.hooks.eventTypes.beforeEnd
                }]),
                t.hooks.on(t.hooks.eventTypes.end, (function(A, n) {
                    return e.hooks.trigger(e.hooks.eventTypes.touchEnd, n),
                    !!e.hooks.trigger(e.hooks.eventTypes.end, n) || (!(t.fingerMoved || (e.hooks.trigger(e.hooks.eventTypes.scrollCancel),
                    !e.checkClick(A))) || (e.resetPosition(e.options.bounceTime, Ae.bounce) ? (e.animater.setForceStopped(!1),
                    !0) : void 0))
                }
                )),
                t.hooks.on(t.hooks.eventTypes.scrollEnd, (function(A, n) {
                    var r = Math.abs(A.x - e.scrollBehaviorX.startPos)
                      , i = Math.abs(A.y - e.scrollBehaviorY.startPos);
                    if (e.checkFlick(n, r, i))
                        return e.animater.setForceStopped(!1),
                        void e.hooks.trigger(e.hooks.eventTypes.flick);
                    e.momentum(A, n) ? e.animater.setForceStopped(!1) : (t.contentMoved && e.hooks.trigger(e.hooks.eventTypes.scrollEnd, A),
                    e.animater.forceStopped && e.animater.setForceStopped(!1))
                }
                ))
            }
            ,
            e.prototype.checkFlick = function(e, t, A) {
                if (this.hooks.events.flick.length > 1 && e < this.options.flickLimitTime && t < this.options.flickLimitDistance && A < this.options.flickLimitDistance && (A > 1 || t > 1))
                    return !0
            }
            ,
            e.prototype.momentum = function(e, t) {
                var A = {
                    time: 0,
                    easing: Ae.swiper,
                    newX: e.x,
                    newY: e.y
                }
                  , n = this.scrollBehaviorX.end(t)
                  , r = this.scrollBehaviorY.end(t);
                if (A.newX = M(n.destination) ? A.newX : n.destination,
                A.newY = M(r.destination) ? A.newY : r.destination,
                A.time = Math.max(n.duration, r.duration),
                this.hooks.trigger(this.hooks.eventTypes.momentum, A, this),
                A.newX !== e.x || A.newY !== e.y)
                    return (A.newX > this.scrollBehaviorX.minScrollPos || A.newX < this.scrollBehaviorX.maxScrollPos || A.newY > this.scrollBehaviorY.minScrollPos || A.newY < this.scrollBehaviorY.maxScrollPos) && (A.easing = Ae.swipeBounce),
                    this.scrollTo(A.newX, A.newY, A.time, A.easing),
                    !0
            }
            ,
            e.prototype.checkClick = function(e) {
                var t = this.animater.forceStopped;
                if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
                    return this.animater.setForceStopped(!1),
                    !0;
                if (!t) {
                    var A = this.options.dblclick
                      , n = !1;
                    if (A && this.lastClickTime) {
                        var r = A.delay
                          , i = void 0 === r ? 300 : r;
                        O() - this.lastClickTime < i && (n = !0,
                        function(e) {
                            te(e, "dblclick")
                        }(e))
                    }
                    return this.options.tap && function(e, t) {
                        var A = document.createEvent("Event");
                        A.initEvent(t, !0, !0),
                        A.pageX = e.pageX,
                        A.pageY = e.pageY,
                        e.target.dispatchEvent(A)
                    }(e, this.options.tap),
                    this.options.click && !Z(e.target, this.options.preventDefaultException) && te(e),
                    this.lastClickTime = n ? null : O(),
                    !0
                }
                return !1
            }
            ,
            e.prototype.resize = function() {
                var e = this;
                this.actions.enabled && (S && (this.wrapper.scrollTop = 0),
                clearTimeout(this.resizeTimeout),
                this.resizeTimeout = window.setTimeout((function() {
                    e.hooks.trigger(e.hooks.eventTypes.resize)
                }
                ), this.options.resizePolling))
            }
            ,
            e.prototype.transitionEnd = function(e) {
                e.target === this.content && this.animater.pending && (this.animater.transitionTime(),
                this.resetPosition(this.options.bounceTime, Ae.bounce) || (this.animater.setPending(!1),
                3 !== this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos())))
            }
            ,
            e.prototype.togglePointerEvents = function(e) {
                void 0 === e && (e = !0);
                for (var t = this.content.children.length ? this.content.children : [this.content], A = e ? "auto" : "none", n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.isBScrollContainer || (r.style.pointerEvents = A)
                }
            }
            ,
            e.prototype.refresh = function(e) {
                var t = this.setContent(e);
                this.hooks.trigger(this.hooks.eventTypes.beforeRefresh),
                this.scrollBehaviorX.refresh(e),
                this.scrollBehaviorY.refresh(e),
                t && (this.translater.setContent(e),
                this.animater.setContent(e),
                this.transitionEndRegister.destroy(),
                this.registerTransitionEnd(),
                this.options.bindToTarget && this.actionsHandler.setContent(e)),
                this.actions.refresh(),
                this.wrapperOffset = X(this.wrapper)
            }
            ,
            e.prototype.setContent = function(e) {
                var t = e !== this.content;
                return t && (this.content = e),
                t
            }
            ,
            e.prototype.scrollBy = function(e, t, A, n) {
                void 0 === A && (A = 0);
                var r = this.getCurrentPos()
                  , i = r.x
                  , s = r.y;
                n = n || Ae.bounce,
                e += i,
                t += s,
                this.scrollTo(e, t, A, n)
            }
            ,
            e.prototype.scrollTo = function(e, t, A, n, r) {
                void 0 === A && (A = 0),
                void 0 === n && (n = Ae.bounce),
                void 0 === r && (r = {
                    start: {},
                    end: {}
                });
                var i = this.options.useTransition ? n.style : n.fn
                  , s = this.getCurrentPos()
                  , o = Q({
                    x: s.x,
                    y: s.y
                }, r.start)
                  , a = Q({
                    x: e,
                    y: t
                }, r.end);
                if (this.hooks.trigger(this.hooks.eventTypes.scrollTo, a),
                !function(e, t) {
                    for (var A = 0, n = Object.keys(e); A < n.length; A++) {
                        var r = n[A];
                        if (e[r] !== t[r])
                            return !1
                    }
                    return !0
                }(o, a)) {
                    var l = Math.abs(a.x - o.x)
                      , c = Math.abs(a.y - o.y);
                    l < 1 && c < 1 && (A = 0,
                    this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)),
                    this.animater.move(o, a, A, i)
                }
            }
            ,
            e.prototype.scrollToElement = function(e, t, A, n, r) {
                var i = R(e)
                  , s = X(i)
                  , o = function(e, t, A) {
                    return "number" == typeof e ? e : e ? Math.round(t / 2 - A / 2) : 0
                };
                A = o(A, i.offsetWidth, this.wrapper.offsetWidth),
                n = o(n, i.offsetHeight, this.wrapper.offsetHeight);
                var a = function(e, t, A, n) {
                    return e -= t,
                    e = n.adjustPosition(e - A)
                };
                s.left = a(s.left, this.wrapperOffset.left, A, this.scrollBehaviorX),
                s.top = a(s.top, this.wrapperOffset.top, n, this.scrollBehaviorY),
                this.hooks.trigger(this.hooks.eventTypes.scrollToElement, i, s) || this.scrollTo(s.left, s.top, t, r)
            }
            ,
            e.prototype.resetPosition = function(e, t) {
                void 0 === e && (e = 0),
                void 0 === t && (t = Ae.bounce);
                var A = this.scrollBehaviorX.checkInBoundary()
                  , n = A.position
                  , r = A.inBoundary
                  , i = this.scrollBehaviorY.checkInBoundary()
                  , s = i.position
                  , o = i.inBoundary;
                return (!r || !o) && (N && this.reflow(),
                this.scrollTo(n, s, e, t),
                !0)
            }
            ,
            e.prototype.reflow = function() {
                this._reflow = this.content.offsetHeight
            }
            ,
            e.prototype.updatePositions = function(e) {
                this.scrollBehaviorX.updatePosition(e.x),
                this.scrollBehaviorY.updatePosition(e.y)
            }
            ,
            e.prototype.getCurrentPos = function() {
                return this.actions.getCurrentPos()
            }
            ,
            e.prototype.enable = function() {
                this.actions.enabled = !0
            }
            ,
            e.prototype.disable = function() {
                se(this.animater.timer),
                this.actions.enabled = !1
            }
            ,
            e.prototype.destroy = function() {
                var e = this;
                ["resizeRegister", "transitionEndRegister", "actionsHandler", "actions", "hooks", "animater", "translater", "scrollBehaviorX", "scrollBehaviorY"].forEach((function(t) {
                    return e[t].destroy()
                }
                ))
            }
            ,
            e
        }()
          , Se = function(e) {
            function t(t, A) {
                var n = e.call(this, ["refresh", "contentChanged", "enable", "disable", "beforeScrollStart", "scrollStart", "scroll", "scrollEnd", "scrollCancel", "touchEnd", "flick", "destroy"]) || this
                  , r = R(t);
                return r ? (n.plugins = {},
                n.options = (new ue).merge(A).process(),
                n.setContent(r).valid ? (n.hooks = new le(["refresh", "enable", "disable", "destroy", "beforeInitialScrollTo", "contentChanged"]),
                n.init(r),
                n) : n) : (U("Can not resolve the wrapper DOM."),
                n)
            }
            return C(t, e),
            t.use = function(e) {
                var A = e.pluginName;
                return t.plugins.some((function(t) {
                    return e === t.ctor
                }
                )) ? t : M(A) ? (U("Plugin Class must specify plugin's name in static property by 'pluginName' field."),
                t) : (t.pluginsMap[A] = !0,
                t.plugins.push({
                    name: A,
                    applyOrder: e.applyOrder,
                    ctor: e
                }),
                t)
            }
            ,
            t.prototype.setContent = function(e) {
                var t = !1
                  , A = !0
                  , n = e.children[this.options.specifiedIndexAsContent];
                return n ? (t = this.content !== n) && (this.content = n) : (U("The wrapper need at least one child element to be content element to scroll."),
                A = !1),
                {
                    valid: A,
                    contentChanged: t
                }
            }
            ,
            t.prototype.init = function(e) {
                var t = this;
                this.wrapper = e,
                e.isBScrollContainer = !0,
                this.scroller = new He(e,this.content,this.options),
                this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, (function() {
                    t.refresh()
                }
                )),
                this.eventBubbling(),
                this.handleAutoBlur(),
                this.enable(),
                this.proxy(b),
                this.applyPlugins(),
                this.refreshWithoutReset(this.content);
                var A = this.options
                  , n = {
                    x: A.startX,
                    y: A.startY
                };
                this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, n) || this.scroller.scrollTo(n.x, n.y)
            }
            ,
            t.prototype.applyPlugins = function() {
                var e = this
                  , A = this.options;
                t.plugins.sort((function(e, t) {
                    var A, n = ((A = {}).pre = -1,
                    A.post = 1,
                    A);
                    return (e.applyOrder ? n[e.applyOrder] : 0) - (t.applyOrder ? n[t.applyOrder] : 0)
                }
                )).forEach((function(t) {
                    var n = t.ctor;
                    A[t.name] && "function" == typeof n && (e.plugins[t.name] = new n(e))
                }
                ))
            }
            ,
            t.prototype.handleAutoBlur = function() {
                this.options.autoBlur && this.on(this.eventTypes.beforeScrollStart, (function() {
                    var e = document.activeElement;
                    !e || "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName || e.blur()
                }
                ))
            }
            ,
            t.prototype.eventBubbling = function() {
                Te(this.scroller.hooks, this, [this.eventTypes.beforeScrollStart, this.eventTypes.scrollStart, this.eventTypes.scroll, this.eventTypes.scrollEnd, this.eventTypes.scrollCancel, this.eventTypes.touchEnd, this.eventTypes.flick])
            }
            ,
            t.prototype.refreshWithoutReset = function(e) {
                this.scroller.refresh(e),
                this.hooks.trigger(this.hooks.eventTypes.refresh, e),
                this.trigger(this.eventTypes.refresh, e)
            }
            ,
            t.prototype.proxy = function(e) {
                var t = this;
                e.forEach((function(e) {
                    var A = e.key
                      , n = e.sourceKey;
                    !function(e, t, A) {
                        ae.get = function() {
                            return function(e, t) {
                                for (var A = t.split("."), n = 0; n < A.length - 1; n++)
                                    if ("object" != typeof (e = e[A[n]]) || !e)
                                        return;
                                var r = A.pop();
                                return "function" == typeof e[r] ? function() {
                                    return e[r].apply(e, arguments)
                                }
                                : e[r]
                            }(this, t)
                        }
                        ,
                        ae.set = function(e) {
                            !function(e, t, A) {
                                for (var n, r = t.split("."), i = 0; i < r.length - 1; i++)
                                    e[n = r[i]] || (e[n] = {}),
                                    e = e[n];
                                e[r.pop()] = A
                            }(this, t, e)
                        }
                        ,
                        Object.defineProperty(e, A, ae)
                    }(t, n, A)
                }
                ))
            }
            ,
            t.prototype.refresh = function() {
                var e = this.setContent(this.wrapper)
                  , t = e.contentChanged;
                if (e.valid) {
                    var A = this.content;
                    this.refreshWithoutReset(A),
                    t && (this.hooks.trigger(this.hooks.eventTypes.contentChanged, A),
                    this.trigger(this.eventTypes.contentChanged, A)),
                    this.scroller.resetPosition()
                }
            }
            ,
            t.prototype.enable = function() {
                this.scroller.enable(),
                this.hooks.trigger(this.hooks.eventTypes.enable),
                this.trigger(this.eventTypes.enable)
            }
            ,
            t.prototype.disable = function() {
                this.scroller.disable(),
                this.hooks.trigger(this.hooks.eventTypes.disable),
                this.trigger(this.eventTypes.disable)
            }
            ,
            t.prototype.destroy = function() {
                this.hooks.trigger(this.hooks.eventTypes.destroy),
                this.trigger(this.eventTypes.destroy),
                this.scroller.destroy()
            }
            ,
            t.prototype.eventRegister = function(e) {
                this.registerType(e)
            }
            ,
            t.plugins = [],
            t.pluginsMap = {},
            t
        }(le);
        function Ne(e, t) {
            return new Se(e,t)
        }
        Ne.use = Se.use,
        Ne.plugins = Se.plugins,
        Ne.pluginsMap = Se.pluginsMap;
        var xe = Ne
          , Ie = "undefined" != typeof window
          , Oe = Ie && navigator.userAgent.toLowerCase();
        Oe && /wechatdevtools/.test(Oe),
        Oe && Oe.indexOf("android"),
        function() {
            if ("string" == typeof Oe) {
                var e = /os (\d\d?_\d(_\d)?)/.exec(Oe);
                if (!e)
                    return !1;
                var t = e[1].split("_").map((function(e) {
                    return parseInt(e, 10)
                }
                ));
                return !!(13 === t[0] && t[1] >= 4)
            }
        }();
        if (Ie) {
            try {
                var ke = {};
                Object.defineProperty(ke, "passive", {
                    get: function() {
                        !0
                    }
                }),
                window.addEventListener("test-passive", (function() {}
                ), ke)
            } catch (e) {}
        }
        var Me = Ie && document.createElement("div").style
          , Pe = function() {
            if (!Ie)
                return !1;
            for (var e = 0, t = [{
                key: "standard",
                value: "transform"
            }, {
                key: "webkit",
                value: "webkitTransform"
            }, {
                key: "Moz",
                value: "MozTransform"
            }, {
                key: "O",
                value: "OTransform"
            }, {
                key: "ms",
                value: "msTransform"
            }]; e < t.length; e++) {
                var A = t[e];
                if (void 0 !== Me[A.value])
                    return A.key
            }
            return !1
        }();
        function Ke(e) {
            return !1 === Pe ? e : "standard" === Pe ? "transitionEnd" === e ? "transitionend" : e : Pe + e.charAt(0).toUpperCase() + e.substr(1)
        }
        Pe && "standard" !== Pe && Pe.toLowerCase();
        Ke("transform"),
        Ke("transition");
        Ie && Ke("perspective"),
        Ke("transitionTimingFunction"),
        Ke("transitionDuration"),
        Ke("transitionDelay"),
        Ke("transformOrigin"),
        Ke("transitionEnd"),
        Ke("transitionProperty");
        var Le = {
            style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
            fn: function(e) {
                return 1 - --e * e * e * e
            }
        }
          , De = [{
            key: "finishPullDown",
            name: "finishPullDown"
        }, {
            key: "openPullDown",
            name: "openPullDown"
        }, {
            key: "closePullDown",
            name: "closePullDown"
        }, {
            key: "autoPullDownRefresh",
            name: "autoPullDownRefresh"
        }].map((function(e) {
            return {
                key: e.key,
                sourceKey: "plugins.pullDownRefresh." + e.name
            }
        }
        ))
          , Re = function() {
            function e(e) {
                this.scroll = e,
                this.pulling = 0,
                this.thresholdBoundary = 0,
                this.init()
            }
            return e.prototype.setPulling = function(e) {
                this.pulling = e
            }
            ,
            e.prototype.setThresholdBoundary = function(e) {
                this.thresholdBoundary = e
            }
            ,
            e.prototype.init = function() {
                this.handleBScroll(),
                this.handleOptions(this.scroll.options.pullDownRefresh),
                this.handleHooks(),
                this.watch()
            }
            ,
            e.prototype.handleBScroll = function() {
                this.scroll.registerType(["pullingDown", "enterThreshold", "leaveThreshold"]),
                this.scroll.proxy(De)
            }
            ,
            e.prototype.handleOptions = function(e) {
                void 0 === e && (e = {}),
                e = !0 === e ? {} : e;
                this.options = function(e, t) {
                    for (var A in t)
                        e[A] = t[A];
                    return e
                }({
                    threshold: 90,
                    stop: 40
                }, e),
                this.scroll.options.probeType = 3
            }
            ,
            e.prototype.handleHooks = function() {
                var e = this;
                this.hooksFn = [];
                var t = this.scroll.scroller
                  , A = t.scrollBehaviorY;
                this.currentMinScrollY = this.cachedOriginanMinScrollY = A.minScrollPos,
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, (function() {
                    e.finishPullDown()
                }
                )),
                this.registerHooks(A.hooks, A.hooks.eventTypes.computeBoundary, (function(t) {
                    t.maxScrollPos > 0 && (t.maxScrollPos = -1),
                    t.minScrollPos = e.currentMinScrollY
                }
                )),
                this.hasMouseWheelPlugin() && (this.registerHooks(this.scroll, this.scroll.eventTypes.alterOptions, (function(e) {
                    e.discreteTime = 300,
                    e.easeTime = 350
                }
                )),
                this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, (function() {
                    t.hooks.trigger(t.hooks.eventTypes.end)
                }
                )))
            }
            ,
            e.prototype.registerHooks = function(e, t, A) {
                e.on(t, A, this),
                this.hooksFn.push([e, t, A])
            }
            ,
            e.prototype.hasMouseWheelPlugin = function() {
                return !!this.scroll.eventTypes.alterOptions
            }
            ,
            e.prototype.watch = function() {
                var e = this.scroll.scroller;
                this.watching = !0,
                this.registerHooks(e.hooks, e.hooks.eventTypes.end, this.checkPullDown),
                this.registerHooks(this.scroll, this.scroll.eventTypes.scrollStart, this.resetStateBeforeScrollStart),
                this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkLocationOfThresholdBoundary),
                this.hasMouseWheelPlugin() && this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart)
            }
            ,
            e.prototype.resetStateBeforeScrollStart = function() {
                this.isFetchingStatus() || (this.setPulling(1),
                this.setThresholdBoundary(0))
            }
            ,
            e.prototype.checkLocationOfThresholdBoundary = function() {
                if (1 === this.pulling) {
                    var e = this.scroll
                      , t = 1 !== this.thresholdBoundary && this.locateInsideThresholdBoundary()
                      , A = 2 !== this.thresholdBoundary && !this.locateInsideThresholdBoundary();
                    t && (this.setThresholdBoundary(1),
                    e.trigger("enterThreshold")),
                    A && (this.setThresholdBoundary(2),
                    e.trigger("leaveThreshold"))
                }
            }
            ,
            e.prototype.locateInsideThresholdBoundary = function() {
                return this.scroll.y <= this.options.threshold
            }
            ,
            e.prototype.unwatch = function() {
                var e = this.scroll
                  , t = e.scroller;
                this.watching = !1,
                t.hooks.off(t.hooks.eventTypes.end, this.checkPullDown),
                e.off(e.eventTypes.scrollStart, this.resetStateBeforeScrollStart),
                e.off(e.eventTypes.scroll, this.checkLocationOfThresholdBoundary),
                this.hasMouseWheelPlugin() && e.off(e.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart)
            }
            ,
            e.prototype.checkPullDown = function() {
                var e = this.options
                  , t = e.threshold
                  , A = e.stop;
                return !(this.scroll.y < t) && (1 === this.pulling && (this.modifyBehaviorYBoundary(A),
                this.setPulling(2),
                this.scroll.trigger("pullingDown")),
                this.scroll.scrollTo(this.scroll.x, A, this.scroll.options.bounceTime, Le),
                this.isFetchingStatus())
            }
            ,
            e.prototype.isFetchingStatus = function() {
                return 2 === this.pulling
            }
            ,
            e.prototype.modifyBehaviorYBoundary = function(e) {
                var t = this.scroll.scroller.scrollBehaviorY;
                this.cachedOriginanMinScrollY = t.minScrollPos,
                this.currentMinScrollY = e,
                t.computeBoundary()
            }
            ,
            e.prototype.finishPullDown = function() {
                if (this.isFetchingStatus()) {
                    var e = this.scroll.scroller.scrollBehaviorY;
                    this.currentMinScrollY = this.cachedOriginanMinScrollY,
                    e.computeBoundary(),
                    this.setPulling(0),
                    this.scroll.resetPosition(this.scroll.options.bounceTime, Le)
                }
            }
            ,
            e.prototype.openPullDown = function(e) {
                void 0 === e && (e = {}),
                this.handleOptions(e),
                this.watching || this.watch()
            }
            ,
            e.prototype.closePullDown = function() {
                this.unwatch()
            }
            ,
            e.prototype.autoPullDownRefresh = function() {
                var e = this.options
                  , t = e.threshold
                  , A = e.stop;
                !this.isFetchingStatus() && this.watching && (this.modifyBehaviorYBoundary(A),
                this.scroll.trigger(this.scroll.eventTypes.scrollStart),
                this.scroll.scrollTo(this.scroll.x, t),
                this.setPulling(2),
                this.scroll.trigger("pullingDown"),
                this.scroll.scrollTo(this.scroll.x, A, this.scroll.options.bounceTime, Le))
            }
            ,
            e.pluginName = "pullDownRefresh",
            e
        }()
          , _e = "undefined" != typeof window
          , ze = _e && navigator.userAgent.toLowerCase();
        ze && /wechatdevtools/.test(ze),
        ze && ze.indexOf("android"),
        function() {
            if ("string" == typeof ze) {
                var e = /os (\d\d?_\d(_\d)?)/.exec(ze);
                if (!e)
                    return !1;
                var t = e[1].split("_").map((function(e) {
                    return parseInt(e, 10)
                }
                ));
                return !!(13 === t[0] && t[1] >= 4)
            }
        }();
        if (_e) {
            try {
                var Xe = {};
                Object.defineProperty(Xe, "passive", {
                    get: function() {
                        !0
                    }
                }),
                window.addEventListener("test-passive", (function() {}
                ), Xe)
            } catch (e) {}
        }
        var Ve = _e && document.createElement("div").style
          , Ge = function() {
            if (!_e)
                return !1;
            for (var e = 0, t = [{
                key: "standard",
                value: "transform"
            }, {
                key: "webkit",
                value: "webkitTransform"
            }, {
                key: "Moz",
                value: "MozTransform"
            }, {
                key: "O",
                value: "OTransform"
            }, {
                key: "ms",
                value: "msTransform"
            }]; e < t.length; e++) {
                var A = t[e];
                if (void 0 !== Ve[A.value])
                    return A.key
            }
            return !1
        }();
        function Ye(e) {
            return !1 === Ge ? e : "standard" === Ge ? "transitionEnd" === e ? "transitionend" : e : Ge + e.charAt(0).toUpperCase() + e.substr(1)
        }
        Ge && "standard" !== Ge && Ge.toLowerCase();
        Ye("transform"),
        Ye("transition");
        _e && Ye("perspective"),
        Ye("transitionTimingFunction"),
        Ye("transitionDuration"),
        Ye("transitionDelay"),
        Ye("transformOrigin"),
        Ye("transitionEnd"),
        Ye("transitionProperty");
        var Je = [{
            key: "finishPullUp",
            name: "finishPullUp"
        }, {
            key: "openPullUp",
            name: "openPullUp"
        }, {
            key: "closePullUp",
            name: "closePullUp"
        }, {
            key: "autoPullUpLoad",
            name: "autoPullUpLoad"
        }].map((function(e) {
            return {
                key: e.key,
                sourceKey: "plugins.pullUpLoad." + e.name
            }
        }
        ))
          , We = function() {
            function e(e) {
                this.scroll = e,
                this.pulling = !1,
                this.watching = !1,
                this.init()
            }
            return e.prototype.init = function() {
                this.handleBScroll(),
                this.handleOptions(this.scroll.options.pullUpLoad),
                this.handleHooks(),
                this.watch()
            }
            ,
            e.prototype.handleBScroll = function() {
                this.scroll.registerType(["pullingUp"]),
                this.scroll.proxy(Je)
            }
            ,
            e.prototype.handleOptions = function(e) {
                void 0 === e && (e = {}),
                e = !0 === e ? {} : e;
                this.options = function(e, t) {
                    for (var A in t)
                        e[A] = t[A];
                    return e
                }({
                    threshold: 0
                }, e),
                this.scroll.options.probeType = 3
            }
            ,
            e.prototype.handleHooks = function() {
                var e = this;
                this.hooksFn = [];
                var t = this.scroll.scroller.scrollBehaviorY;
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, (function() {
                    e.finishPullUp()
                }
                )),
                this.registerHooks(t.hooks, t.hooks.eventTypes.computeBoundary, (function(e) {
                    e.maxScrollPos > 0 && (e.maxScrollPos = -1)
                }
                ))
            }
            ,
            e.prototype.registerHooks = function(e, t, A) {
                e.on(t, A, this),
                this.hooksFn.push([e, t, A])
            }
            ,
            e.prototype.watch = function() {
                this.watching || (this.watching = !0,
                this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkPullUp))
            }
            ,
            e.prototype.unwatch = function() {
                this.watching = !1,
                this.scroll.off(this.scroll.eventTypes.scroll, this.checkPullUp)
            }
            ,
            e.prototype.checkPullUp = function(e) {
                var t = this
                  , A = this.options.threshold;
                1 === this.scroll.movingDirectionY && e.y <= this.scroll.maxScrollY + A && (this.pulling = !0,
                this.scroll.once(this.scroll.eventTypes.scrollEnd, (function() {
                    t.pulling = !1
                }
                )),
                this.unwatch(),
                this.scroll.trigger("pullingUp"))
            }
            ,
            e.prototype.finishPullUp = function() {
                var e = this;
                this.scroll.scroller.scrollBehaviorY.setMovingDirection(0),
                this.pulling ? this.scroll.once(this.scroll.eventTypes.scrollEnd, (function() {
                    e.watch()
                }
                )) : this.watch()
            }
            ,
            e.prototype.openPullUp = function(e) {
                void 0 === e && (e = {}),
                this.handleOptions(e),
                this.watch()
            }
            ,
            e.prototype.closePullUp = function() {
                this.unwatch()
            }
            ,
            e.prototype.autoPullUpLoad = function() {
                var e = this.options.threshold
                  , t = this.scroll.scroller.scrollBehaviorY;
                if (!this.pulling && this.watching) {
                    var A = t.maxScrollPos + e + -1;
                    this.scroll.scroller.scrollBehaviorY.setMovingDirection(-1),
                    this.scroll.scrollTo(this.scroll.x, A, this.scroll.options.bounceTime)
                }
            }
            ,
            e.pluginName = "pullUpLoad",
            e
        }()
          , $e = "undefined" != typeof window
          , je = $e && navigator.userAgent.toLowerCase();
        je && /wechatdevtools/.test(je),
        je && je.indexOf("android"),
        function() {
            if ("string" == typeof je) {
                var e = /os (\d\d?_\d(_\d)?)/.exec(je);
                if (!e)
                    return !1;
                var t = e[1].split("_").map((function(e) {
                    return parseInt(e, 10)
                }
                ));
                return !!(13 === t[0] && t[1] >= 4)
            }
        }();
        if ($e) {
            try {
                var qe = {};
                Object.defineProperty(qe, "passive", {
                    get: function() {
                        !0
                    }
                }),
                window.addEventListener("test-passive", (function() {}
                ), qe)
            } catch (e) {}
        }
        var Ze = $e && document.createElement("div").style
          , et = function() {
            if (!$e)
                return !1;
            for (var e = 0, t = [{
                key: "standard",
                value: "transform"
            }, {
                key: "webkit",
                value: "webkitTransform"
            }, {
                key: "Moz",
                value: "MozTransform"
            }, {
                key: "O",
                value: "OTransform"
            }, {
                key: "ms",
                value: "msTransform"
            }]; e < t.length; e++) {
                var A = t[e];
                if (void 0 !== Ze[A.value])
                    return A.key
            }
            return !1
        }();
        function tt(e) {
            return !1 === et ? e : "standard" === et ? "transitionEnd" === e ? "transitionend" : e : et + e.charAt(0).toUpperCase() + e.substr(1)
        }
        et && "standard" !== et && et.toLowerCase();
        tt("transform"),
        tt("transition");
        function At(e) {
            if (e instanceof window.SVGElement) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }
            return {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
        $e && tt("perspective"),
        tt("transitionTimingFunction"),
        tt("transitionDuration"),
        tt("transitionDelay"),
        tt("transformOrigin"),
        tt("transitionEnd"),
        tt("transitionProperty");
        var nt = function() {
            function e(e) {
                this.scroll = e,
                this.stopObserver = !1,
                this.init()
            }
            return e.prototype.init = function() {
                this.handleMutationObserver(),
                this.handleHooks()
            }
            ,
            e.prototype.handleMutationObserver = function() {
                var e = this;
                if ("undefined" != typeof MutationObserver) {
                    this.observer = new MutationObserver((function(t) {
                        e.mutationObserverHandler(t, 0)
                    }
                    )),
                    this.startObserve(this.observer)
                } else
                    this.checkDOMUpdate()
            }
            ,
            e.prototype.handleHooks = function() {
                var e = this;
                this.hooksFn = [],
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, (function() {
                    e.stopObserve(),
                    e.handleMutationObserver()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.enable, (function() {
                    e.stopObserver && e.handleMutationObserver()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.disable, (function() {
                    e.stopObserve()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, (function() {
                    e.destroy()
                }
                ))
            }
            ,
            e.prototype.mutationObserverHandler = function(e, t) {
                var A = this;
                if (!this.shouldNotRefresh()) {
                    for (var n = !1, r = !1, i = 0; i < e.length; i++) {
                        var s = e[i];
                        if ("attributes" !== s.type) {
                            n = !0;
                            break
                        }
                        if (s.target !== this.scroll.scroller.content) {
                            r = !0;
                            break
                        }
                    }
                    n ? this.scroll.refresh() : r && (clearTimeout(t),
                    t = window.setTimeout((function() {
                        A.shouldNotRefresh() || A.scroll.refresh()
                    }
                    ), 60))
                }
            }
            ,
            e.prototype.startObserve = function(e) {
                e.observe(this.scroll.scroller.content, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                })
            }
            ,
            e.prototype.shouldNotRefresh = function() {
                var e = this.scroll.scroller
                  , t = e.scrollBehaviorX
                  , A = e.scrollBehaviorY
                  , n = t.currentPos > t.minScrollPos || t.currentPos < t.maxScrollPos || A.currentPos > A.minScrollPos || A.currentPos < A.maxScrollPos;
                return e.animater.pending || n
            }
            ,
            e.prototype.checkDOMUpdate = function() {
                var e = this
                  , t = this.scroll.scroller.content
                  , A = At(t)
                  , n = A.width
                  , r = A.height
                  , i = function() {
                    setTimeout((function() {
                        !function() {
                            if (!e.stopObserver) {
                                var s = (A = At(t)).width
                                  , o = A.height;
                                n === s && r === o || e.scroll.refresh(),
                                n = s,
                                r = o,
                                i()
                            }
                        }()
                    }
                    ), 1e3)
                };
                i()
            }
            ,
            e.prototype.registerHooks = function(e, t, A) {
                e.on(t, A, this),
                this.hooksFn.push([e, t, A])
            }
            ,
            e.prototype.stopObserve = function() {
                this.stopObserver = !0,
                this.observer && this.observer.disconnect()
            }
            ,
            e.prototype.destroy = function() {
                this.stopObserve(),
                this.hooksFn.forEach((function(e) {
                    var t = e[0]
                      , A = e[1]
                      , n = e[2];
                    t.off(A, n)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            e.pluginName = "observeDOM",
            e
        }();
        A("AzAI");
        var rt = function() {
            return m.a.createElement("div", {
                className: "mf-loading-container"
            }, m.a.createElement("img", {
                src: "//p0.meituan.net/dptakeaway/1f26c50bb56f9f5aba4a0d2b287987e24002.gif",
                alt: "加载中..."
            }))
        }
          , it = A("Jn7e");
        A("bHtr");
        function st(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = p()(e);
                if (t) {
                    var r = p()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return d()(this, A)
            }
        }
        var ot = function(e) {
            c()(A, e);
            var t = st(A);
            function A(e) {
                var n;
                return r()(this, A),
                (n = t.call(this, e)).state = {
                    y: e.y
                },
                n.bubbleRef = m.a.createRef(),
                n.ratio = window.devicePixelRatio,
                n.width = 50 * n.ratio,
                n.height = 80 * n.ratio,
                n.initRadius = 18 * n.ratio,
                n.minHeadRadius = 12 * n.ratio,
                n.minTailRadius = 5 * n.ratio,
                n.initArrowRadius = 10 * n.ratio,
                n.minArrowRadius = 6 * n.ratio,
                n.arrowWidth = 3 * n.ratio,
                n.maxDistance = 40 * n.ratio,
                n.initCenterX = 25 * n.ratio,
                n.initCenterY = 25 * n.ratio,
                n.headCenter = {
                    x: n.initCenterX,
                    y: n.initCenterY
                },
                n
            }
            return s()(A, [{
                key: "componentDidMount",
                value: function() {
                    this._draw()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.y !== this.state.y && (this.setState({
                        y: e.y
                    }),
                    this._draw())
                }
            }, {
                key: "distance",
                value: function() {
                    var e = this.state.y;
                    return Math.max(0, Math.min(e * this.ratio, this.maxDistance))
                }
            }, {
                key: "_draw",
                value: function() {
                    var e = this.bubbleRef.current
                      , t = e.getContext("2d");
                    t.clearRect(0, 0, e.width, e.height),
                    this._drawBubble(t),
                    this._drawArrow(t)
                }
            }, {
                key: "_drawBubble",
                value: function(e) {
                    e.save(),
                    e.beginPath();
                    var t = this.distance() / this.maxDistance
                      , A = this.initRadius - (this.initRadius - this.minHeadRadius) * t;
                    this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * t,
                    e.arc(this.headCenter.x, this.headCenter.y, A, 0, Math.PI, !0);
                    var n = this.initRadius - (this.initRadius - this.minTailRadius) * t
                      , r = {
                        x: this.headCenter.x,
                        y: this.headCenter.y + this.distance()
                    }
                      , i = {
                        x: r.x - n,
                        y: r.y
                    }
                      , s = {
                        x: i.x,
                        y: i.y - this.distance() / 2
                    };
                    e.quadraticCurveTo(s.x, s.y, i.x, i.y),
                    e.arc(r.x, r.y, n, Math.PI, 0, !0);
                    var o = {
                        x: this.headCenter.x + A,
                        y: this.headCenter.y
                    }
                      , a = {
                        x: r.x + n,
                        y: o.y + this.distance() / 2
                    };
                    e.quadraticCurveTo(a.x, a.y, o.x, o.y),
                    e.fillStyle = "rgb(170,170,170)",
                    e.fill(),
                    e.strokeStyle = "rgb(153,153,153)",
                    e.stroke(),
                    e.restore()
                }
            }, {
                key: "_drawArrow",
                value: function(e) {
                    e.save(),
                    e.beginPath();
                    var t = this.distance() / this.maxDistance
                      , A = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * t;
                    e.arc(this.headCenter.x, this.headCenter.y, A - (this.arrowWidth - t), -Math.PI / 2, 0, !0),
                    e.arc(this.headCenter.x, this.headCenter.y, A, 0, 3 * Math.PI / 2, !1),
                    e.lineTo(this.headCenter.x, this.headCenter.y - A - this.arrowWidth / 2 + t),
                    e.lineTo(this.headCenter.x + 2 * this.arrowWidth - 2 * t, this.headCenter.y - A + this.arrowWidth / 2),
                    e.lineTo(this.headCenter.x, this.headCenter.y - A + 3 * this.arrowWidth / 2 - t),
                    e.fillStyle = "rgb(255,255,255)",
                    e.fill(),
                    e.strokeStyle = "rgb(170,170,170)",
                    e.stroke(),
                    e.restore()
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        width: "".concat(this.width / this.ratio, "px"),
                        height: "".concat(this.height / this.ratio, "px")
                    };
                    return m.a.createElement("canvas", {
                        ref: this.bubbleRef,
                        width: this.width,
                        height: this.height,
                        style: e
                    })
                }
            }]),
            A
        }(B.PureComponent);
        ot.defaultProps = {
            y: 0
        },
        ot.propTypes = {
            y: v.a.number
        };
        var at = ot;
        A("YfRO");
        function lt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var A, n = p()(e);
                if (t) {
                    var r = p()(this).constructor;
                    A = Reflect.construct(n, arguments, r)
                } else
                    A = n.apply(this, arguments);
                return d()(this, A)
            }
        }
        xe.use(nt),
        xe.use(Re),
        xe.use(We);
        var ct = Object(B.memo)((function(e) {
            var t = e.pullDownRefresh
              , A = e.beforePullDown
              , n = e.isPullingDown
              , r = e.bubbleY
              , i = e.pullDownStyle
              , s = e.pullDownTxt;
            if (!t)
                return "";
            var o = "";
            return o = A ? m.a.createElement("div", {
                className: "before-trigger"
            }, m.a.createElement(at, {
                y: r
            })) : n ? m.a.createElement("div", {
                className: "loading"
            }, m.a.createElement(rt, null)) : m.a.createElement("div", null, m.a.createElement("span", null, s)),
            m.a.createElement("div", {
                className: "pulldown-wrapper",
                style: i
            }, o)
        }
        ))
          , ut = Object(B.memo)((function(e) {
            var t = e.pullUpLoad
              , A = e.isPullUpLoad
              , n = e.pullUpTxt
              , r = e.showText
              , i = e.bottomText;
            if (!t)
                return "";
            if (i === it.e.noMore && !r)
                return "";
            return A ? m.a.createElement("div", {
                className: "pullup-wrapper pullup-padding"
            }, m.a.createElement("div", {
                className: "after-trigger"
            }, m.a.createElement(rt, null))) : m.a.createElement("div", {
                className: "pullup-wrapper ".concat(n ? "pullup-padding" : "")
            }, m.a.createElement("div", {
                className: "before-trigger"
            }, m.a.createElement("span", null, n)))
        }
        ))
          , dt = function(e) {
            c()(A, e);
            var t = lt(A);
            function A(e) {
                var n;
                return r()(this, A),
                n = t.call(this, e),
                g()(a()(n), "scrollStart", (function() {
                    n.bscroll.on("scrollStart", (function(e) {
                        n.props.onScrollStart && n.props.onScrollStart(e)
                    }
                    ))
                }
                )),
                g()(a()(n), "scrollEnd", (function() {
                    n.bscroll.on("scrollEnd", (function(e) {
                        n.props.onScrollEnd && n.props.onScrollEnd(e)
                    }
                    ))
                }
                )),
                g()(a()(n), "initScroll", (function() {
                    if (n.scrollViewRef.current) {
                        var e = n.props
                          , t = e.pullDownRefresh
                          , A = e.pullUpLoad;
                        n.contentRef.current && (t || A) && (n.contentRef.current.style.minHeight = "".concat(n.scrollViewRef.current.offsetHeight + 1, "px")),
                        n.bscroll || (n.bscroll = new xe(n.scrollViewRef.current,{
                            probeType: 3,
                            click: n.props.click,
                            observeDom: n.props.observeDom,
                            refresh: n.props.refresh,
                            scrollY: n.props.scrollY,
                            pullDownRefresh: t,
                            pullUpLoad: A
                        }),
                        n.bscroll.on("scroll", (function(e) {
                            n.props.onScroll ? n.props.onScroll(e) : n.scrollHandler(e)
                        }
                        )),
                        n.props.scrollY && n.props.pullDownRefresh && n.props.onPullingDown && n._initPullDownRefresh(),
                        n.props.scrollY && n.props.pullUpLoad && n.props.onPullingUp && n._initPullUpLoad())
                    }
                }
                )),
                g()(a()(n), "scrollHandler", (function(e) {}
                )),
                g()(a()(n), "forceUpdate", (function(e) {
                    var t = n.state
                      , A = t.isPullingDown
                      , r = t.isPullUpLoad
                      , i = n.props
                      , s = i.pullDownRefresh
                      , o = i.pullUpLoad;
                    console.log(e, o, r, s, A),
                    s && A ? (n.setState({
                        isPullingDown: !1,
                        pullDownDirty: e
                    }),
                    n._reboundPullDown().then((function() {
                        n._afterPullDown()
                    }
                    ))) : o && r ? (n.setState({
                        isPullUpLoad: !1,
                        pullUpDirty: e
                    }),
                    n.bscroll.finishPullUp(),
                    n.refresh()) : n.refresh()
                }
                )),
                g()(a()(n), "_initPullDownRefresh", (function() {
                    var e = n.props
                      , t = e.onPullingDown
                      , A = e.pullDownRefresh;
                    n.bscroll.on("pullingDown", (function() {
                        n.setState({
                            beforePullDown: !1,
                            isPullingDown: !0
                        }),
                        t()
                    }
                    )),
                    n.bscroll.on("scroll", (function(e) {
                        var t = n.state
                          , r = t.beforePullDown
                          , i = t.isRebounding;
                        if (A) {
                            var s = 0
                              , o = {};
                            r ? (s = Math.max(0, e.y + -50),
                            o = {
                                top: "".concat(Math.min(e.y + -50, 10), "px")
                            }) : s = 0,
                            i && (o = {
                                top: "".concat(10 - (A.stop - e.y), "px")
                            }),
                            Object.keys(o).length > 0 ? n.setState({
                                bubbleY: s,
                                pullDownStyle: o
                            }) : n.setState({
                                bubbleY: s
                            })
                        }
                    }
                    ))
                }
                )),
                g()(a()(n), "_initPullUpLoad", (function() {
                    var e = n.props.onPullingUp;
                    n.bscroll.on("pullingUp", (function() {
                        n.setState({
                            isPullUpLoad: !0
                        }),
                        e()
                    }
                    ))
                }
                )),
                g()(a()(n), "_reboundPullDown", (function() {
                    var e = n.props.pullDownRefresh.stopTime
                      , t = void 0 === e ? 600 : e;
                    return new Promise((function(e) {
                        setTimeout((function() {
                            n.setState({
                                isRebounding: !0
                            }),
                            n.bscroll.finishPullDown(),
                            e()
                        }
                        ), t)
                    }
                    ))
                }
                )),
                g()(a()(n), "_afterPullDown", (function() {
                    setTimeout((function() {
                        n.setState({
                            pullDownStyle: {
                                top: "".concat(-50, "px")
                            },
                            beforePullDown: !0,
                            isRebounding: !1
                        }),
                        n.refresh()
                    }
                    ), n.bscroll.options.bounceTime)
                }
                )),
                g()(a()(n), "refresh", (function() {
                    n.bscroll && n.bscroll.refresh()
                }
                )),
                g()(a()(n), "backToTop", (function() {
                    n.bscroll && n.bscroll.scrollTo(0, 0, 500)
                }
                )),
                n.scrollViewRef = m.a.createRef(),
                n.contentRef = m.a.createRef(),
                n.state = {
                    beforePullDown: !0,
                    isRebounding: !1,
                    isPullingDown: !1,
                    pullDownStyle: {},
                    bubbleY: 0,
                    pullDownDirty: "刷新成功",
                    isPullUpLoad: !1,
                    pullUpDirty: "上拉加载更多"
                },
                n
            }
            return s()(A, [{
                key: "componentDidMount",
                value: function() {
                    this.props.onRef(this),
                    this.initScroll(),
                    this.scrollStart()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.bscroll.off("scroll"),
                    this.bscroll = null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.pullDownRefresh
                      , A = e.showText
                      , n = void 0 === A || A
                      , r = e.bottomText
                      , i = this.state
                      , s = i.pullDownStyle
                      , o = i.bubbleY
                      , a = i.beforePullDown
                      , l = i.isPullingDown
                      , c = this.props.pullUpLoad
                      , u = this.state
                      , d = u.isPullUpLoad
                      , h = u.pullUpDirty
                      , p = u.pullDownDirty;
                    return m.a.createElement("div", {
                        className: "scroll-wrapper",
                        ref: this.scrollViewRef
                    }, m.a.createElement("div", {
                        className: "scroll-content"
                    }, m.a.createElement("div", {
                        className: "content-wrapper",
                        ref: this.contentRef
                    }, m.a.createElement("div", null, this.props.children)), m.a.createElement(ut, {
                        pullUpLoad: c,
                        isPullUpLoad: d,
                        pullUpTxt: h,
                        showText: n,
                        bottomText: r || ""
                    })), m.a.createElement(ct, {
                        pullDownStyle: s,
                        pullDownRefresh: t,
                        beforePullDown: a,
                        isPullingDown: l,
                        bubbleY: o,
                        pullDownTxt: p
                    }))
                }
            }]),
            A
        }(B.PureComponent);
        dt.defaultProps = {
            click: !0,
            refresh: !0,
            observeDom: !0,
            scrollY: !0,
            wheel: !0,
            pullDownRefresh: {
                threshold: 90,
                stop: 40
            },
            pullUpLoad: !0
        },
        dt.propTypes = {
            click: v.a.bool,
            refresh: v.a.bool,
            observeDom: v.a.bool,
            onScroll: v.a.func,
            onScrollStart: v.a.func,
            onScrollEnd: v.a.func,
            scrollY: v.a.bool,
            pullDownRefresh: v.a.oneOfType([v.a.bool, v.a.shape({
                threshold: v.a.number,
                stop: v.a.number
            })]),
            onPullingDown: v.a.func,
            pullUpLoad: v.a.bool
        };
        t.a = dt
    },
    wOnQ: function(e, t, A) {
        /*!
 * html2canvas 1.0.0-rc.4 <https://html2canvas.hertzen.com>
 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
        e.exports = function() {
            "use strict";
            /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
            var e = function(t, A) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var A in t)
                        t.hasOwnProperty(A) && (e[A] = t[A])
                }
                )(t, A)
            };
            function t(t, A) {
                function n() {
                    this.constructor = t
                }
                e(t, A),
                t.prototype = null === A ? Object.create(A) : (n.prototype = A.prototype,
                new n)
            }
            var A = function() {
                return (A = Object.assign || function(e) {
                    for (var t, A = 1, n = arguments.length; A < n; A++)
                        for (var r in t = arguments[A])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }
                ).apply(this, arguments)
            };
            function n(e, t, A, n) {
                return new (A || (A = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            a(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function o(e) {
                        try {
                            a(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        e.done ? r(e.value) : new A((function(t) {
                            t(e.value)
                        }
                        )).then(s, o)
                    }
                    a((n = n.apply(e, t || [])).next())
                }
                ))
            }
            function r(e, t) {
                var A, n, r, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0])
                            throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (A)
                                throw new TypeError("Generator is already executing.");
                            for (; s; )
                                try {
                                    if (A = 1,
                                    n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                                    0) : n.next) && !(r = r.call(n, i[1])).done)
                                        return r;
                                    switch (n = 0,
                                    r && (i = [2 & i[0], r.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        r = i;
                                        break;
                                    case 4:
                                        return s.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        n = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < r[1]) {
                                            s.label = r[1],
                                            r = i;
                                            break
                                        }
                                        if (r && s.label < r[2]) {
                                            s.label = r[2],
                                            s.ops.push(i);
                                            break
                                        }
                                        r[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e],
                                    n = 0
                                } finally {
                                    A = r = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            }
            for (var i = function() {
                function e(e, t, A, n) {
                    this.left = e,
                    this.top = t,
                    this.width = A,
                    this.height = n
                }
                return e.prototype.add = function(t, A, n, r) {
                    return new e(this.left + t,this.top + A,this.width + n,this.height + r)
                }
                ,
                e.fromClientRect = function(t) {
                    return new e(t.left,t.top,t.width,t.height)
                }
                ,
                e
            }(), s = function(e) {
                return i.fromClientRect(e.getBoundingClientRect())
            }, o = function(e) {
                for (var t = [], A = 0, n = e.length; A < n; ) {
                    var r = e.charCodeAt(A++);
                    if (r >= 55296 && r <= 56319 && A < n) {
                        var i = e.charCodeAt(A++);
                        56320 == (64512 & i) ? t.push(((1023 & r) << 10) + (1023 & i) + 65536) : (t.push(r),
                        A--)
                    } else
                        t.push(r)
                }
                return t
            }, a = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                if (String.fromCodePoint)
                    return String.fromCodePoint.apply(String, e);
                var A = e.length;
                if (!A)
                    return "";
                for (var n = [], r = -1, i = ""; ++r < A; ) {
                    var s = e[r];
                    s <= 65535 ? n.push(s) : (s -= 65536,
                    n.push(55296 + (s >> 10), s % 1024 + 56320)),
                    (r + 1 === A || n.length > 16384) && (i += String.fromCharCode.apply(String, n),
                    n.length = 0)
                }
                return i
            }, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), u = 0; u < l.length; u++)
                c[l.charCodeAt(u)] = u;
            var d, h = function(e, t, A) {
                return e.slice ? e.slice(t, A) : new Uint16Array(Array.prototype.slice.call(e, t, A))
            }, p = function() {
                function e(e, t, A, n, r, i) {
                    this.initialValue = e,
                    this.errorValue = t,
                    this.highStart = A,
                    this.highValueIndex = n,
                    this.index = r,
                    this.data = i
                }
                return e.prototype.get = function(e) {
                    var t;
                    if (e >= 0) {
                        if (e < 55296 || e > 56319 && e <= 65535)
                            return t = ((t = this.index[e >> 5]) << 2) + (31 & e),
                            this.data[t];
                        if (e <= 65535)
                            return t = ((t = this.index[2048 + (e - 55296 >> 5)]) << 2) + (31 & e),
                            this.data[t];
                        if (e < this.highStart)
                            return t = 2080 + (e >> 11),
                            t = this.index[t],
                            t += e >> 5 & 63,
                            t = ((t = this.index[t]) << 2) + (31 & e),
                            this.data[t];
                        if (e <= 1114111)
                            return this.data[this.highValueIndex]
                    }
                    return this.errorValue
                }
                ,
                e
            }(), f = 10, g = 13, B = 15, m = 17, w = 18, v = 19, E = 20, C = 21, Q = 22, y = 24, b = 25, U = 26, F = 27, T = 28, H = 30, S = 32, N = 33, x = 34, I = 35, O = 37, k = 38, M = 39, P = 40, K = 42, L = function(e) {
                var t, A, n, r = function(e) {
                    var t, A, n, r, i, s = .75 * e.length, o = e.length, a = 0;
                    "=" === e[e.length - 1] && (s--,
                    "=" === e[e.length - 2] && s--);
                    var l = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s)
                      , u = Array.isArray(l) ? l : new Uint8Array(l);
                    for (t = 0; t < o; t += 4)
                        A = c[e.charCodeAt(t)],
                        n = c[e.charCodeAt(t + 1)],
                        r = c[e.charCodeAt(t + 2)],
                        i = c[e.charCodeAt(t + 3)],
                        u[a++] = A << 2 | n >> 4,
                        u[a++] = (15 & n) << 4 | r >> 2,
                        u[a++] = (3 & r) << 6 | 63 & i;
                    return l
                }(e), i = Array.isArray(r) ? function(e) {
                    for (var t = e.length, A = [], n = 0; n < t; n += 4)
                        A.push(e[n + 3] << 24 | e[n + 2] << 16 | e[n + 1] << 8 | e[n]);
                    return A
                }(r) : new Uint32Array(r), s = Array.isArray(r) ? function(e) {
                    for (var t = e.length, A = [], n = 0; n < t; n += 2)
                        A.push(e[n + 1] << 8 | e[n]);
                    return A
                }(r) : new Uint16Array(r), o = h(s, 12, i[4] / 2), a = 2 === i[5] ? h(s, (24 + i[4]) / 2) : (t = i,
                A = Math.ceil((24 + i[4]) / 4),
                t.slice ? t.slice(A, n) : new Uint32Array(Array.prototype.slice.call(t, A, n)));
                return new p(i[0],i[1],i[2],i[3],o,a)
            }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"), D = [H, 36], R = [1, 2, 3, 5], _ = [f, 8], z = [F, U], X = R.concat(_), V = [k, M, P, x, I], G = [B, g], Y = function(e, t, A, n) {
                var r = n[A];
                if (Array.isArray(e) ? -1 !== e.indexOf(r) : e === r)
                    for (var i = A; i <= n.length; ) {
                        if ((a = n[++i]) === t)
                            return !0;
                        if (a !== f)
                            break
                    }
                if (r === f)
                    for (i = A; i > 0; ) {
                        var s = n[--i];
                        if (Array.isArray(e) ? -1 !== e.indexOf(s) : e === s)
                            for (var o = A; o <= n.length; ) {
                                var a;
                                if ((a = n[++o]) === t)
                                    return !0;
                                if (a !== f)
                                    break
                            }
                        if (s !== f)
                            break
                    }
                return !1
            }, J = function(e, t) {
                for (var A = e; A >= 0; ) {
                    var n = t[A];
                    if (n !== f)
                        return n;
                    A--
                }
                return 0
            }, W = function(e, t, A, n, r) {
                if (0 === A[n])
                    return "×";
                var i = n - 1;
                if (Array.isArray(r) && !0 === r[i])
                    return "×";
                var s = i - 1
                  , o = i + 1
                  , a = t[i]
                  , l = s >= 0 ? t[s] : 0
                  , c = t[o];
                if (2 === a && 3 === c)
                    return "×";
                if (-1 !== R.indexOf(a))
                    return "!";
                if (-1 !== R.indexOf(c))
                    return "×";
                if (-1 !== _.indexOf(c))
                    return "×";
                if (8 === J(i, t))
                    return "÷";
                if (11 === L.get(e[i]) && (c === O || c === S || c === N))
                    return "×";
                if (7 === a || 7 === c)
                    return "×";
                if (9 === a)
                    return "×";
                if (-1 === [f, g, B].indexOf(a) && 9 === c)
                    return "×";
                if (-1 !== [m, w, v, y, T].indexOf(c))
                    return "×";
                if (J(i, t) === Q)
                    return "×";
                if (Y(23, Q, i, t))
                    return "×";
                if (Y([m, w], C, i, t))
                    return "×";
                if (Y(12, 12, i, t))
                    return "×";
                if (a === f)
                    return "÷";
                if (23 === a || 23 === c)
                    return "×";
                if (16 === c || 16 === a)
                    return "÷";
                if (-1 !== [g, B, C].indexOf(c) || 14 === a)
                    return "×";
                if (36 === l && -1 !== G.indexOf(a))
                    return "×";
                if (a === T && 36 === c)
                    return "×";
                if (c === E && -1 !== D.concat(E, v, b, O, S, N).indexOf(a))
                    return "×";
                if (-1 !== D.indexOf(c) && a === b || -1 !== D.indexOf(a) && c === b)
                    return "×";
                if (a === F && -1 !== [O, S, N].indexOf(c) || -1 !== [O, S, N].indexOf(a) && c === U)
                    return "×";
                if (-1 !== D.indexOf(a) && -1 !== z.indexOf(c) || -1 !== z.indexOf(a) && -1 !== D.indexOf(c))
                    return "×";
                if (-1 !== [F, U].indexOf(a) && (c === b || -1 !== [Q, B].indexOf(c) && t[o + 1] === b) || -1 !== [Q, B].indexOf(a) && c === b || a === b && -1 !== [b, T, y].indexOf(c))
                    return "×";
                if (-1 !== [b, T, y, m, w].indexOf(c))
                    for (var u = i; u >= 0; ) {
                        if ((d = t[u]) === b)
                            return "×";
                        if (-1 === [T, y].indexOf(d))
                            break;
                        u--
                    }
                if (-1 !== [F, U].indexOf(c))
                    for (u = -1 !== [m, w].indexOf(a) ? s : i; u >= 0; ) {
                        var d;
                        if ((d = t[u]) === b)
                            return "×";
                        if (-1 === [T, y].indexOf(d))
                            break;
                        u--
                    }
                if (k === a && -1 !== [k, M, x, I].indexOf(c) || -1 !== [M, x].indexOf(a) && -1 !== [M, P].indexOf(c) || -1 !== [P, I].indexOf(a) && c === P)
                    return "×";
                if (-1 !== V.indexOf(a) && -1 !== [E, U].indexOf(c) || -1 !== V.indexOf(c) && a === F)
                    return "×";
                if (-1 !== D.indexOf(a) && -1 !== D.indexOf(c))
                    return "×";
                if (a === y && -1 !== D.indexOf(c))
                    return "×";
                if (-1 !== D.concat(b).indexOf(a) && c === Q || -1 !== D.concat(b).indexOf(c) && a === w)
                    return "×";
                if (41 === a && 41 === c) {
                    for (var h = A[i], p = 1; h > 0 && 41 === t[--h]; )
                        p++;
                    if (p % 2 != 0)
                        return "×"
                }
                return a === S && c === N ? "×" : "÷"
            }, $ = function(e, t) {
                t || (t = {
                    lineBreak: "normal",
                    wordBreak: "normal"
                });
                var A = function(e, t) {
                    void 0 === t && (t = "strict");
                    var A = []
                      , n = []
                      , r = [];
                    return e.forEach((function(e, i) {
                        var s = L.get(e);
                        if (s > 50 ? (r.push(!0),
                        s -= 50) : r.push(!1),
                        -1 !== ["normal", "auto", "loose"].indexOf(t) && -1 !== [8208, 8211, 12316, 12448].indexOf(e))
                            return n.push(i),
                            A.push(16);
                        if (4 === s || 11 === s) {
                            if (0 === i)
                                return n.push(i),
                                A.push(H);
                            var o = A[i - 1];
                            return -1 === X.indexOf(o) ? (n.push(n[i - 1]),
                            A.push(o)) : (n.push(i),
                            A.push(H))
                        }
                        return n.push(i),
                        31 === s ? A.push("strict" === t ? C : O) : s === K || 29 === s ? A.push(H) : 43 === s ? e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? A.push(O) : A.push(H) : void A.push(s)
                    }
                    )),
                    [n, A, r]
                }(e, t.lineBreak)
                  , n = A[0]
                  , r = A[1]
                  , i = A[2];
                return "break-all" !== t.wordBreak && "break-word" !== t.wordBreak || (r = r.map((function(e) {
                    return -1 !== [b, H, K].indexOf(e) ? O : e
                }
                ))),
                [n, r, "keep-all" === t.wordBreak ? i.map((function(t, A) {
                    return t && e[A] >= 19968 && e[A] <= 40959
                }
                )) : void 0]
            }, j = function() {
                function e(e, t, A, n) {
                    this.codePoints = e,
                    this.required = "!" === t,
                    this.start = A,
                    this.end = n
                }
                return e.prototype.slice = function() {
                    return a.apply(void 0, this.codePoints.slice(this.start, this.end))
                }
                ,
                e
            }();
            !function(e) {
                e[e.STRING_TOKEN = 0] = "STRING_TOKEN",
                e[e.BAD_STRING_TOKEN = 1] = "BAD_STRING_TOKEN",
                e[e.LEFT_PARENTHESIS_TOKEN = 2] = "LEFT_PARENTHESIS_TOKEN",
                e[e.RIGHT_PARENTHESIS_TOKEN = 3] = "RIGHT_PARENTHESIS_TOKEN",
                e[e.COMMA_TOKEN = 4] = "COMMA_TOKEN",
                e[e.HASH_TOKEN = 5] = "HASH_TOKEN",
                e[e.DELIM_TOKEN = 6] = "DELIM_TOKEN",
                e[e.AT_KEYWORD_TOKEN = 7] = "AT_KEYWORD_TOKEN",
                e[e.PREFIX_MATCH_TOKEN = 8] = "PREFIX_MATCH_TOKEN",
                e[e.DASH_MATCH_TOKEN = 9] = "DASH_MATCH_TOKEN",
                e[e.INCLUDE_MATCH_TOKEN = 10] = "INCLUDE_MATCH_TOKEN",
                e[e.LEFT_CURLY_BRACKET_TOKEN = 11] = "LEFT_CURLY_BRACKET_TOKEN",
                e[e.RIGHT_CURLY_BRACKET_TOKEN = 12] = "RIGHT_CURLY_BRACKET_TOKEN",
                e[e.SUFFIX_MATCH_TOKEN = 13] = "SUFFIX_MATCH_TOKEN",
                e[e.SUBSTRING_MATCH_TOKEN = 14] = "SUBSTRING_MATCH_TOKEN",
                e[e.DIMENSION_TOKEN = 15] = "DIMENSION_TOKEN",
                e[e.PERCENTAGE_TOKEN = 16] = "PERCENTAGE_TOKEN",
                e[e.NUMBER_TOKEN = 17] = "NUMBER_TOKEN",
                e[e.FUNCTION = 18] = "FUNCTION",
                e[e.FUNCTION_TOKEN = 19] = "FUNCTION_TOKEN",
                e[e.IDENT_TOKEN = 20] = "IDENT_TOKEN",
                e[e.COLUMN_TOKEN = 21] = "COLUMN_TOKEN",
                e[e.URL_TOKEN = 22] = "URL_TOKEN",
                e[e.BAD_URL_TOKEN = 23] = "BAD_URL_TOKEN",
                e[e.CDC_TOKEN = 24] = "CDC_TOKEN",
                e[e.CDO_TOKEN = 25] = "CDO_TOKEN",
                e[e.COLON_TOKEN = 26] = "COLON_TOKEN",
                e[e.SEMICOLON_TOKEN = 27] = "SEMICOLON_TOKEN",
                e[e.LEFT_SQUARE_BRACKET_TOKEN = 28] = "LEFT_SQUARE_BRACKET_TOKEN",
                e[e.RIGHT_SQUARE_BRACKET_TOKEN = 29] = "RIGHT_SQUARE_BRACKET_TOKEN",
                e[e.UNICODE_RANGE_TOKEN = 30] = "UNICODE_RANGE_TOKEN",
                e[e.WHITESPACE_TOKEN = 31] = "WHITESPACE_TOKEN",
                e[e.EOF_TOKEN = 32] = "EOF_TOKEN"
            }(d || (d = {}));
            var q = function(e) {
                return e >= 48 && e <= 57
            }
              , Z = function(e) {
                return q(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102
            }
              , ee = function(e) {
                return 10 === e || 9 === e || 32 === e
            }
              , te = function(e) {
                return function(e) {
                    return function(e) {
                        return e >= 97 && e <= 122
                    }(e) || function(e) {
                        return e >= 65 && e <= 90
                    }(e)
                }(e) || function(e) {
                    return e >= 128
                }(e) || 95 === e
            }
              , Ae = function(e) {
                return te(e) || q(e) || 45 === e
            }
              , ne = function(e) {
                return e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || 127 === e
            }
              , re = function(e, t) {
                return 92 === e && 10 !== t
            }
              , ie = function(e, t, A) {
                return 45 === e ? te(t) || re(t, A) : !!te(e) || !(92 !== e || !re(e, t))
            }
              , se = function(e, t, A) {
                return 43 === e || 45 === e ? !!q(t) || 46 === t && q(A) : q(46 === e ? t : e)
            }
              , oe = function(e) {
                var t = 0
                  , A = 1;
                43 !== e[t] && 45 !== e[t] || (45 === e[t] && (A = -1),
                t++);
                for (var n = []; q(e[t]); )
                    n.push(e[t++]);
                var r = n.length ? parseInt(a.apply(void 0, n), 10) : 0;
                46 === e[t] && t++;
                for (var i = []; q(e[t]); )
                    i.push(e[t++]);
                var s = i.length
                  , o = s ? parseInt(a.apply(void 0, i), 10) : 0;
                69 !== e[t] && 101 !== e[t] || t++;
                var l = 1;
                43 !== e[t] && 45 !== e[t] || (45 === e[t] && (l = -1),
                t++);
                for (var c = []; q(e[t]); )
                    c.push(e[t++]);
                var u = c.length ? parseInt(a.apply(void 0, c), 10) : 0;
                return A * (r + o * Math.pow(10, -s)) * Math.pow(10, l * u)
            }
              , ae = {
                type: d.LEFT_PARENTHESIS_TOKEN
            }
              , le = {
                type: d.RIGHT_PARENTHESIS_TOKEN
            }
              , ce = {
                type: d.COMMA_TOKEN
            }
              , ue = {
                type: d.SUFFIX_MATCH_TOKEN
            }
              , de = {
                type: d.PREFIX_MATCH_TOKEN
            }
              , he = {
                type: d.COLUMN_TOKEN
            }
              , pe = {
                type: d.DASH_MATCH_TOKEN
            }
              , fe = {
                type: d.INCLUDE_MATCH_TOKEN
            }
              , ge = {
                type: d.LEFT_CURLY_BRACKET_TOKEN
            }
              , Be = {
                type: d.RIGHT_CURLY_BRACKET_TOKEN
            }
              , me = {
                type: d.SUBSTRING_MATCH_TOKEN
            }
              , we = {
                type: d.BAD_URL_TOKEN
            }
              , ve = {
                type: d.BAD_STRING_TOKEN
            }
              , Ee = {
                type: d.CDO_TOKEN
            }
              , Ce = {
                type: d.CDC_TOKEN
            }
              , Qe = {
                type: d.COLON_TOKEN
            }
              , ye = {
                type: d.SEMICOLON_TOKEN
            }
              , be = {
                type: d.LEFT_SQUARE_BRACKET_TOKEN
            }
              , Ue = {
                type: d.RIGHT_SQUARE_BRACKET_TOKEN
            }
              , Fe = {
                type: d.WHITESPACE_TOKEN
            }
              , Te = {
                type: d.EOF_TOKEN
            }
              , He = function() {
                function e() {
                    this._value = []
                }
                return e.prototype.write = function(e) {
                    this._value = this._value.concat(o(e))
                }
                ,
                e.prototype.read = function() {
                    for (var e = [], t = this.consumeToken(); t !== Te; )
                        e.push(t),
                        t = this.consumeToken();
                    return e
                }
                ,
                e.prototype.consumeToken = function() {
                    var e = this.consumeCodePoint();
                    switch (e) {
                    case 34:
                        return this.consumeStringToken(34);
                    case 35:
                        var t = this.peekCodePoint(0)
                          , A = this.peekCodePoint(1)
                          , n = this.peekCodePoint(2);
                        if (Ae(t) || re(A, n)) {
                            var r = ie(t, A, n) ? 2 : 1
                              , i = this.consumeName();
                            return {
                                type: d.HASH_TOKEN,
                                value: i,
                                flags: r
                            }
                        }
                        break;
                    case 36:
                        if (61 === this.peekCodePoint(0))
                            return this.consumeCodePoint(),
                            ue;
                        break;
                    case 39:
                        return this.consumeStringToken(39);
                    case 40:
                        return ae;
                    case 41:
                        return le;
                    case 42:
                        if (61 === this.peekCodePoint(0))
                            return this.consumeCodePoint(),
                            me;
                        break;
                    case 43:
                        if (se(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                            return this.reconsumeCodePoint(e),
                            this.consumeNumericToken();
                        break;
                    case 44:
                        return ce;
                    case 45:
                        var s = e
                          , o = this.peekCodePoint(0)
                          , l = this.peekCodePoint(1);
                        if (se(s, o, l))
                            return this.reconsumeCodePoint(e),
                            this.consumeNumericToken();
                        if (ie(s, o, l))
                            return this.reconsumeCodePoint(e),
                            this.consumeIdentLikeToken();
                        if (45 === o && 62 === l)
                            return this.consumeCodePoint(),
                            this.consumeCodePoint(),
                            Ce;
                        break;
                    case 46:
                        if (se(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                            return this.reconsumeCodePoint(e),
                            this.consumeNumericToken();
                        break;
                    case 47:
                        if (42 === this.peekCodePoint(0))
                            for (this.consumeCodePoint(); ; ) {
                                var c = this.consumeCodePoint();
                                if (42 === c && 47 === (c = this.consumeCodePoint()))
                                    return this.consumeToken();
                                if (-1 === c)
                                    return this.consumeToken()
                            }
                        break;
                    case 58:
                        return Qe;
                    case 59:
                        return ye;
                    case 60:
                        if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2))
                            return this.consumeCodePoint(),
                            this.consumeCodePoint(),
                            Ee;
                        break;
                    case 64:
                        var u = this.peekCodePoint(0)
                          , h = this.peekCodePoint(1)
                          , p = this.peekCodePoint(2);
                        if (ie(u, h, p))
                            return i = this.consumeName(),
                            {
                                type: d.AT_KEYWORD_TOKEN,
                                value: i
                            };
                        break;
                    case 91:
                        return be;
                    case 92:
                        if (re(e, this.peekCodePoint(0)))
                            return this.reconsumeCodePoint(e),
                            this.consumeIdentLikeToken();
                        break;
                    case 93:
                        return Ue;
                    case 61:
                        if (61 === this.peekCodePoint(0))
                            return this.consumeCodePoint(),
                            de;
                        break;
                    case 123:
                        return ge;
                    case 125:
                        return Be;
                    case 117:
                    case 85:
                        var f = this.peekCodePoint(0)
                          , g = this.peekCodePoint(1);
                        return 43 !== f || !Z(g) && 63 !== g || (this.consumeCodePoint(),
                        this.consumeUnicodeRangeToken()),
                        this.reconsumeCodePoint(e),
                        this.consumeIdentLikeToken();
                    case 124:
                        if (61 === this.peekCodePoint(0))
                            return this.consumeCodePoint(),
                            pe;
                        if (124 === this.peekCodePoint(0))
                            return this.consumeCodePoint(),
                            he;
                        break;
                    case 126:
                        if (61 === this.peekCodePoint(0))
                            return this.consumeCodePoint(),
                            fe;
                        break;
                    case -1:
                        return Te
                    }
                    return ee(e) ? (this.consumeWhiteSpace(),
                    Fe) : q(e) ? (this.reconsumeCodePoint(e),
                    this.consumeNumericToken()) : te(e) ? (this.reconsumeCodePoint(e),
                    this.consumeIdentLikeToken()) : {
                        type: d.DELIM_TOKEN,
                        value: a(e)
                    }
                }
                ,
                e.prototype.consumeCodePoint = function() {
                    var e = this._value.shift();
                    return void 0 === e ? -1 : e
                }
                ,
                e.prototype.reconsumeCodePoint = function(e) {
                    this._value.unshift(e)
                }
                ,
                e.prototype.peekCodePoint = function(e) {
                    return e >= this._value.length ? -1 : this._value[e]
                }
                ,
                e.prototype.consumeUnicodeRangeToken = function() {
                    for (var e = [], t = this.consumeCodePoint(); Z(t) && e.length < 6; )
                        e.push(t),
                        t = this.consumeCodePoint();
                    for (var A = !1; 63 === t && e.length < 6; )
                        e.push(t),
                        t = this.consumeCodePoint(),
                        A = !0;
                    if (A) {
                        var n = parseInt(a.apply(void 0, e.map((function(e) {
                            return 63 === e ? 48 : e
                        }
                        ))), 16)
                          , r = parseInt(a.apply(void 0, e.map((function(e) {
                            return 63 === e ? 70 : e
                        }
                        ))), 16);
                        return {
                            type: d.UNICODE_RANGE_TOKEN,
                            start: n,
                            end: r
                        }
                    }
                    var i = parseInt(a.apply(void 0, e), 16);
                    if (45 === this.peekCodePoint(0) && Z(this.peekCodePoint(1))) {
                        this.consumeCodePoint(),
                        t = this.consumeCodePoint();
                        for (var s = []; Z(t) && s.length < 6; )
                            s.push(t),
                            t = this.consumeCodePoint();
                        return r = parseInt(a.apply(void 0, s), 16),
                        {
                            type: d.UNICODE_RANGE_TOKEN,
                            start: i,
                            end: r
                        }
                    }
                    return {
                        type: d.UNICODE_RANGE_TOKEN,
                        start: i,
                        end: i
                    }
                }
                ,
                e.prototype.consumeIdentLikeToken = function() {
                    var e = this.consumeName();
                    return "url" === e.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                    this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                    {
                        type: d.FUNCTION_TOKEN,
                        value: e
                    }) : {
                        type: d.IDENT_TOKEN,
                        value: e
                    }
                }
                ,
                e.prototype.consumeUrlToken = function() {
                    var e = [];
                    if (this.consumeWhiteSpace(),
                    -1 === this.peekCodePoint(0))
                        return {
                            type: d.URL_TOKEN,
                            value: ""
                        };
                    var t = this.peekCodePoint(0);
                    if (39 === t || 34 === t) {
                        var A = this.consumeStringToken(this.consumeCodePoint());
                        return A.type === d.STRING_TOKEN && (this.consumeWhiteSpace(),
                        -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(),
                        {
                            type: d.URL_TOKEN,
                            value: A.value
                        }) : (this.consumeBadUrlRemnants(),
                        we)
                    }
                    for (; ; ) {
                        var n = this.consumeCodePoint();
                        if (-1 === n || 41 === n)
                            return {
                                type: d.URL_TOKEN,
                                value: a.apply(void 0, e)
                            };
                        if (ee(n))
                            return this.consumeWhiteSpace(),
                            -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                            {
                                type: d.URL_TOKEN,
                                value: a.apply(void 0, e)
                            }) : (this.consumeBadUrlRemnants(),
                            we);
                        if (34 === n || 39 === n || 40 === n || ne(n))
                            return this.consumeBadUrlRemnants(),
                            we;
                        if (92 === n) {
                            if (!re(n, this.peekCodePoint(0)))
                                return this.consumeBadUrlRemnants(),
                                we;
                            e.push(this.consumeEscapedCodePoint())
                        } else
                            e.push(n)
                    }
                }
                ,
                e.prototype.consumeWhiteSpace = function() {
                    for (; ee(this.peekCodePoint(0)); )
                        this.consumeCodePoint()
                }
                ,
                e.prototype.consumeBadUrlRemnants = function() {
                    for (; ; ) {
                        var e = this.consumeCodePoint();
                        if (41 === e || -1 === e)
                            return;
                        re(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                    }
                }
                ,
                e.prototype.consumeStringSlice = function(e) {
                    for (var t = ""; e > 0; ) {
                        var A = Math.min(6e4, e);
                        t += a.apply(void 0, this._value.splice(0, A)),
                        e -= A
                    }
                    return this._value.shift(),
                    t
                }
                ,
                e.prototype.consumeStringToken = function(e) {
                    for (var t = "", A = 0; ; ) {
                        var n = this._value[A];
                        if (-1 === n || void 0 === n || n === e)
                            return t += this.consumeStringSlice(A),
                            {
                                type: d.STRING_TOKEN,
                                value: t
                            };
                        if (10 === n)
                            return this._value.splice(0, A),
                            ve;
                        if (92 === n) {
                            var r = this._value[A + 1];
                            -1 !== r && void 0 !== r && (10 === r ? (t += this.consumeStringSlice(A),
                            A = -1,
                            this._value.shift()) : re(n, r) && (t += this.consumeStringSlice(A),
                            t += a(this.consumeEscapedCodePoint()),
                            A = -1))
                        }
                        A++
                    }
                }
                ,
                e.prototype.consumeNumber = function() {
                    var e = []
                      , t = 4
                      , A = this.peekCodePoint(0);
                    for (43 !== A && 45 !== A || e.push(this.consumeCodePoint()); q(this.peekCodePoint(0)); )
                        e.push(this.consumeCodePoint());
                    A = this.peekCodePoint(0);
                    var n = this.peekCodePoint(1);
                    if (46 === A && q(n))
                        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()),
                        t = 8; q(this.peekCodePoint(0)); )
                            e.push(this.consumeCodePoint());
                    A = this.peekCodePoint(0),
                    n = this.peekCodePoint(1);
                    var r = this.peekCodePoint(2);
                    if ((69 === A || 101 === A) && ((43 === n || 45 === n) && q(r) || q(n)))
                        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()),
                        t = 8; q(this.peekCodePoint(0)); )
                            e.push(this.consumeCodePoint());
                    return [oe(e), t]
                }
                ,
                e.prototype.consumeNumericToken = function() {
                    var e = this.consumeNumber()
                      , t = e[0]
                      , A = e[1]
                      , n = this.peekCodePoint(0)
                      , r = this.peekCodePoint(1)
                      , i = this.peekCodePoint(2);
                    if (ie(n, r, i)) {
                        var s = this.consumeName();
                        return {
                            type: d.DIMENSION_TOKEN,
                            number: t,
                            flags: A,
                            unit: s
                        }
                    }
                    return 37 === n ? (this.consumeCodePoint(),
                    {
                        type: d.PERCENTAGE_TOKEN,
                        number: t,
                        flags: A
                    }) : {
                        type: d.NUMBER_TOKEN,
                        number: t,
                        flags: A
                    }
                }
                ,
                e.prototype.consumeEscapedCodePoint = function() {
                    var e = this.consumeCodePoint();
                    if (Z(e)) {
                        for (var t = a(e); Z(this.peekCodePoint(0)) && t.length < 6; )
                            t += a(this.consumeCodePoint());
                        ee(this.peekCodePoint(0)) && this.consumeCodePoint();
                        var A = parseInt(t, 16);
                        return 0 === A || function(e) {
                            return e >= 55296 && e <= 57343
                        }(A) || A > 1114111 ? 65533 : A
                    }
                    return -1 === e ? 65533 : e
                }
                ,
                e.prototype.consumeName = function() {
                    for (var e = ""; ; ) {
                        var t = this.consumeCodePoint();
                        if (Ae(t))
                            e += a(t);
                        else {
                            if (!re(t, this.peekCodePoint(0)))
                                return this.reconsumeCodePoint(t),
                                e;
                            e += a(this.consumeEscapedCodePoint())
                        }
                    }
                }
                ,
                e
            }()
              , Se = function() {
                function e(e) {
                    this._tokens = e
                }
                return e.create = function(t) {
                    var A = new He;
                    return A.write(t),
                    new e(A.read())
                }
                ,
                e.parseValue = function(t) {
                    return e.create(t).parseComponentValue()
                }
                ,
                e.parseValues = function(t) {
                    return e.create(t).parseComponentValues()
                }
                ,
                e.prototype.parseComponentValue = function() {
                    for (var e = this.consumeToken(); e.type === d.WHITESPACE_TOKEN; )
                        e = this.consumeToken();
                    if (e.type === d.EOF_TOKEN)
                        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                    this.reconsumeToken(e);
                    var t = this.consumeComponentValue();
                    do {
                        e = this.consumeToken()
                    } while (e.type === d.WHITESPACE_TOKEN);
                    if (e.type === d.EOF_TOKEN)
                        return t;
                    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                }
                ,
                e.prototype.parseComponentValues = function() {
                    for (var e = []; ; ) {
                        var t = this.consumeComponentValue();
                        if (t.type === d.EOF_TOKEN)
                            return e;
                        e.push(t),
                        e.push()
                    }
                }
                ,
                e.prototype.consumeComponentValue = function() {
                    var e = this.consumeToken();
                    switch (e.type) {
                    case d.LEFT_CURLY_BRACKET_TOKEN:
                    case d.LEFT_SQUARE_BRACKET_TOKEN:
                    case d.LEFT_PARENTHESIS_TOKEN:
                        return this.consumeSimpleBlock(e.type);
                    case d.FUNCTION_TOKEN:
                        return this.consumeFunction(e)
                    }
                    return e
                }
                ,
                e.prototype.consumeSimpleBlock = function(e) {
                    for (var t = {
                        type: e,
                        values: []
                    }, A = this.consumeToken(); ; ) {
                        if (A.type === d.EOF_TOKEN || Le(A, e))
                            return t;
                        this.reconsumeToken(A),
                        t.values.push(this.consumeComponentValue()),
                        A = this.consumeToken()
                    }
                }
                ,
                e.prototype.consumeFunction = function(e) {
                    for (var t = {
                        name: e.value,
                        values: [],
                        type: d.FUNCTION
                    }; ; ) {
                        var A = this.consumeToken();
                        if (A.type === d.EOF_TOKEN || A.type === d.RIGHT_PARENTHESIS_TOKEN)
                            return t;
                        this.reconsumeToken(A),
                        t.values.push(this.consumeComponentValue())
                    }
                }
                ,
                e.prototype.consumeToken = function() {
                    var e = this._tokens.shift();
                    return void 0 === e ? Te : e
                }
                ,
                e.prototype.reconsumeToken = function(e) {
                    this._tokens.unshift(e)
                }
                ,
                e
            }()
              , Ne = function(e) {
                return e.type === d.DIMENSION_TOKEN
            }
              , xe = function(e) {
                return e.type === d.NUMBER_TOKEN
            }
              , Ie = function(e) {
                return e.type === d.IDENT_TOKEN
            }
              , Oe = function(e) {
                return e.type === d.STRING_TOKEN
            }
              , ke = function(e, t) {
                return Ie(e) && e.value === t
            }
              , Me = function(e) {
                return e.type !== d.WHITESPACE_TOKEN
            }
              , Pe = function(e) {
                return e.type !== d.WHITESPACE_TOKEN && e.type !== d.COMMA_TOKEN
            }
              , Ke = function(e) {
                var t = []
                  , A = [];
                return e.forEach((function(e) {
                    if (e.type === d.COMMA_TOKEN) {
                        if (0 === A.length)
                            throw new Error("Error parsing function args, zero tokens for arg");
                        return t.push(A),
                        void (A = [])
                    }
                    e.type !== d.WHITESPACE_TOKEN && A.push(e)
                }
                )),
                A.length && t.push(A),
                t
            }
              , Le = function(e, t) {
                return t === d.LEFT_CURLY_BRACKET_TOKEN && e.type === d.RIGHT_CURLY_BRACKET_TOKEN || t === d.LEFT_SQUARE_BRACKET_TOKEN && e.type === d.RIGHT_SQUARE_BRACKET_TOKEN || t === d.LEFT_PARENTHESIS_TOKEN && e.type === d.RIGHT_PARENTHESIS_TOKEN
            }
              , De = function(e) {
                return e.type === d.NUMBER_TOKEN || e.type === d.DIMENSION_TOKEN
            }
              , Re = function(e) {
                return e.type === d.PERCENTAGE_TOKEN || De(e)
            }
              , _e = function(e) {
                return e.length > 1 ? [e[0], e[1]] : [e[0]]
            }
              , ze = {
                type: d.NUMBER_TOKEN,
                number: 0,
                flags: 4
            }
              , Xe = {
                type: d.PERCENTAGE_TOKEN,
                number: 50,
                flags: 4
            }
              , Ve = {
                type: d.PERCENTAGE_TOKEN,
                number: 100,
                flags: 4
            }
              , Ge = function(e, t, A) {
                var n = e[0]
                  , r = e[1];
                return [Ye(n, t), Ye(void 0 !== r ? r : n, A)]
            }
              , Ye = function(e, t) {
                if (e.type === d.PERCENTAGE_TOKEN)
                    return e.number / 100 * t;
                if (Ne(e))
                    switch (e.unit) {
                    case "rem":
                    case "em":
                        return 16 * e.number;
                    case "px":
                    default:
                        return e.number
                    }
                return e.number
            }
              , Je = function(e) {
                if (e.type === d.DIMENSION_TOKEN)
                    switch (e.unit) {
                    case "deg":
                        return Math.PI * e.number / 180;
                    case "grad":
                        return Math.PI / 200 * e.number;
                    case "rad":
                        return e.number;
                    case "turn":
                        return 2 * Math.PI * e.number
                    }
                throw new Error("Unsupported angle type")
            }
              , We = function(e) {
                return e.type === d.DIMENSION_TOKEN && ("deg" === e.unit || "grad" === e.unit || "rad" === e.unit || "turn" === e.unit)
            }
              , $e = function(e) {
                switch (e.filter(Ie).map((function(e) {
                    return e.value
                }
                )).join(" ")) {
                case "to bottom right":
                case "to right bottom":
                case "left top":
                case "top left":
                    return [ze, ze];
                case "to top":
                case "bottom":
                    return je(0);
                case "to bottom left":
                case "to left bottom":
                case "right top":
                case "top right":
                    return [ze, Ve];
                case "to right":
                case "left":
                    return je(90);
                case "to top left":
                case "to left top":
                case "right bottom":
                case "bottom right":
                    return [Ve, Ve];
                case "to bottom":
                case "top":
                    return je(180);
                case "to top right":
                case "to right top":
                case "left bottom":
                case "bottom left":
                    return [Ve, ze];
                case "to left":
                case "right":
                    return je(270)
                }
                return 0
            }
              , je = function(e) {
                return Math.PI * e / 180
            }
              , qe = function(e) {
                if (e.type === d.FUNCTION) {
                    var t = at[e.name];
                    if (void 0 === t)
                        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
                    return t(e.values)
                }
                if (e.type === d.HASH_TOKEN) {
                    if (3 === e.value.length) {
                        var A = e.value.substring(0, 1)
                          , n = e.value.substring(1, 2)
                          , r = e.value.substring(2, 3);
                        return tt(parseInt(A + A, 16), parseInt(n + n, 16), parseInt(r + r, 16), 1)
                    }
                    if (4 === e.value.length) {
                        A = e.value.substring(0, 1),
                        n = e.value.substring(1, 2),
                        r = e.value.substring(2, 3);
                        var i = e.value.substring(3, 4);
                        return tt(parseInt(A + A, 16), parseInt(n + n, 16), parseInt(r + r, 16), parseInt(i + i, 16) / 255)
                    }
                    if (6 === e.value.length)
                        return A = e.value.substring(0, 2),
                        n = e.value.substring(2, 4),
                        r = e.value.substring(4, 6),
                        tt(parseInt(A, 16), parseInt(n, 16), parseInt(r, 16), 1);
                    if (8 === e.value.length)
                        return A = e.value.substring(0, 2),
                        n = e.value.substring(2, 4),
                        r = e.value.substring(4, 6),
                        i = e.value.substring(6, 8),
                        tt(parseInt(A, 16), parseInt(n, 16), parseInt(r, 16), parseInt(i, 16) / 255)
                }
                if (e.type === d.IDENT_TOKEN) {
                    var s = lt[e.value.toUpperCase()];
                    if (void 0 !== s)
                        return s
                }
                return lt.TRANSPARENT
            }
              , Ze = function(e) {
                return 0 == (255 & e)
            }
              , et = function(e) {
                var t = 255 & e
                  , A = 255 & e >> 8
                  , n = 255 & e >> 16
                  , r = 255 & e >> 24;
                return t < 255 ? "rgba(" + r + "," + n + "," + A + "," + t / 255 + ")" : "rgb(" + r + "," + n + "," + A + ")"
            }
              , tt = function(e, t, A, n) {
                return (e << 24 | t << 16 | A << 8 | Math.round(255 * n) << 0) >>> 0
            }
              , At = function(e, t) {
                if (e.type === d.NUMBER_TOKEN)
                    return e.number;
                if (e.type === d.PERCENTAGE_TOKEN) {
                    var A = 3 === t ? 1 : 255;
                    return 3 === t ? e.number / 100 * A : Math.round(e.number / 100 * A)
                }
                return 0
            }
              , nt = function(e) {
                var t = e.filter(Pe);
                if (3 === t.length) {
                    var A = t.map(At)
                      , n = A[0]
                      , r = A[1]
                      , i = A[2];
                    return tt(n, r, i, 1)
                }
                if (4 === t.length) {
                    var s = t.map(At)
                      , o = (n = s[0],
                    r = s[1],
                    i = s[2],
                    s[3]);
                    return tt(n, r, i, o)
                }
                return 0
            };
            function rt(e, t, A) {
                return A < 0 && (A += 1),
                A >= 1 && (A -= 1),
                A < 1 / 6 ? (t - e) * A * 6 + e : A < .5 ? t : A < 2 / 3 ? 6 * (t - e) * (2 / 3 - A) + e : e
            }
            var it, st, ot = function(e) {
                var t = e.filter(Pe)
                  , A = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3]
                  , s = (A.type === d.NUMBER_TOKEN ? je(A.number) : Je(A)) / (2 * Math.PI)
                  , o = Re(n) ? n.number / 100 : 0
                  , a = Re(r) ? r.number / 100 : 0
                  , l = void 0 !== i && Re(i) ? Ye(i, 1) : 1;
                if (0 === o)
                    return tt(255 * a, 255 * a, 255 * a, 1);
                var c = a <= .5 ? a * (o + 1) : a + o - a * o
                  , u = 2 * a - c
                  , h = rt(u, c, s + 1 / 3)
                  , p = rt(u, c, s)
                  , f = rt(u, c, s - 1 / 3);
                return tt(255 * h, 255 * p, 255 * f, l)
            }, at = {
                hsl: ot,
                hsla: ot,
                rgb: nt,
                rgba: nt
            }, lt = {
                ALICEBLUE: 4042850303,
                ANTIQUEWHITE: 4209760255,
                AQUA: 16777215,
                AQUAMARINE: 2147472639,
                AZURE: 4043309055,
                BEIGE: 4126530815,
                BISQUE: 4293182719,
                BLACK: 255,
                BLANCHEDALMOND: 4293643775,
                BLUE: 65535,
                BLUEVIOLET: 2318131967,
                BROWN: 2771004159,
                BURLYWOOD: 3736635391,
                CADETBLUE: 1604231423,
                CHARTREUSE: 2147418367,
                CHOCOLATE: 3530104575,
                CORAL: 4286533887,
                CORNFLOWERBLUE: 1687547391,
                CORNSILK: 4294499583,
                CRIMSON: 3692313855,
                CYAN: 16777215,
                DARKBLUE: 35839,
                DARKCYAN: 9145343,
                DARKGOLDENROD: 3095837695,
                DARKGRAY: 2846468607,
                DARKGREEN: 6553855,
                DARKGREY: 2846468607,
                DARKKHAKI: 3182914559,
                DARKMAGENTA: 2332068863,
                DARKOLIVEGREEN: 1433087999,
                DARKORANGE: 4287365375,
                DARKORCHID: 2570243327,
                DARKRED: 2332033279,
                DARKSALMON: 3918953215,
                DARKSEAGREEN: 2411499519,
                DARKSLATEBLUE: 1211993087,
                DARKSLATEGRAY: 793726975,
                DARKSLATEGREY: 793726975,
                DARKTURQUOISE: 13554175,
                DARKVIOLET: 2483082239,
                DEEPPINK: 4279538687,
                DEEPSKYBLUE: 12582911,
                DIMGRAY: 1768516095,
                DIMGREY: 1768516095,
                DODGERBLUE: 512819199,
                FIREBRICK: 2988581631,
                FLORALWHITE: 4294635775,
                FORESTGREEN: 579543807,
                FUCHSIA: 4278255615,
                GAINSBORO: 3705462015,
                GHOSTWHITE: 4177068031,
                GOLD: 4292280575,
                GOLDENROD: 3668254975,
                GRAY: 2155905279,
                GREEN: 8388863,
                GREENYELLOW: 2919182335,
                GREY: 2155905279,
                HONEYDEW: 4043305215,
                HOTPINK: 4285117695,
                INDIANRED: 3445382399,
                INDIGO: 1258324735,
                IVORY: 4294963455,
                KHAKI: 4041641215,
                LAVENDER: 3873897215,
                LAVENDERBLUSH: 4293981695,
                LAWNGREEN: 2096890111,
                LEMONCHIFFON: 4294626815,
                LIGHTBLUE: 2916673279,
                LIGHTCORAL: 4034953471,
                LIGHTCYAN: 3774873599,
                LIGHTGOLDENRODYELLOW: 4210742015,
                LIGHTGRAY: 3553874943,
                LIGHTGREEN: 2431553791,
                LIGHTGREY: 3553874943,
                LIGHTPINK: 4290167295,
                LIGHTSALMON: 4288707327,
                LIGHTSEAGREEN: 548580095,
                LIGHTSKYBLUE: 2278488831,
                LIGHTSLATEGRAY: 2005441023,
                LIGHTSLATEGREY: 2005441023,
                LIGHTSTEELBLUE: 2965692159,
                LIGHTYELLOW: 4294959359,
                LIME: 16711935,
                LIMEGREEN: 852308735,
                LINEN: 4210091775,
                MAGENTA: 4278255615,
                MAROON: 2147483903,
                MEDIUMAQUAMARINE: 1724754687,
                MEDIUMBLUE: 52735,
                MEDIUMORCHID: 3126187007,
                MEDIUMPURPLE: 2473647103,
                MEDIUMSEAGREEN: 1018393087,
                MEDIUMSLATEBLUE: 2070474495,
                MEDIUMSPRINGGREEN: 16423679,
                MEDIUMTURQUOISE: 1221709055,
                MEDIUMVIOLETRED: 3340076543,
                MIDNIGHTBLUE: 421097727,
                MINTCREAM: 4127193855,
                MISTYROSE: 4293190143,
                MOCCASIN: 4293178879,
                NAVAJOWHITE: 4292783615,
                NAVY: 33023,
                OLDLACE: 4260751103,
                OLIVE: 2155872511,
                OLIVEDRAB: 1804477439,
                ORANGE: 4289003775,
                ORANGERED: 4282712319,
                ORCHID: 3664828159,
                PALEGOLDENROD: 4008225535,
                PALEGREEN: 2566625535,
                PALETURQUOISE: 2951671551,
                PALEVIOLETRED: 3681588223,
                PAPAYAWHIP: 4293907967,
                PEACHPUFF: 4292524543,
                PERU: 3448061951,
                PINK: 4290825215,
                PLUM: 3718307327,
                POWDERBLUE: 2967529215,
                PURPLE: 2147516671,
                REBECCAPURPLE: 1714657791,
                RED: 4278190335,
                ROSYBROWN: 3163525119,
                ROYALBLUE: 1097458175,
                SADDLEBROWN: 2336560127,
                SALMON: 4202722047,
                SANDYBROWN: 4104413439,
                SEAGREEN: 780883967,
                SEASHELL: 4294307583,
                SIENNA: 2689740287,
                SILVER: 3233857791,
                SKYBLUE: 2278484991,
                SLATEBLUE: 1784335871,
                SLATEGRAY: 1887473919,
                SLATEGREY: 1887473919,
                SNOW: 4294638335,
                SPRINGGREEN: 16744447,
                STEELBLUE: 1182971135,
                TAN: 3535047935,
                TEAL: 8421631,
                THISTLE: 3636451583,
                TOMATO: 4284696575,
                TRANSPARENT: 0,
                TURQUOISE: 1088475391,
                VIOLET: 4001558271,
                WHEAT: 4125012991,
                WHITE: 4294967295,
                WHITESMOKE: 4126537215,
                YELLOW: 4294902015,
                YELLOWGREEN: 2597139199
            };
            (function(e) {
                e[e.VALUE = 0] = "VALUE",
                e[e.LIST = 1] = "LIST",
                e[e.IDENT_VALUE = 2] = "IDENT_VALUE",
                e[e.TYPE_VALUE = 3] = "TYPE_VALUE",
                e[e.TOKEN_VALUE = 4] = "TOKEN_VALUE"
            }
            )(it || (it = {})),
            function(e) {
                e[e.BORDER_BOX = 0] = "BORDER_BOX",
                e[e.PADDING_BOX = 1] = "PADDING_BOX",
                e[e.CONTENT_BOX = 2] = "CONTENT_BOX"
            }(st || (st = {}));
            var ct, ut, dt, ht = {
                name: "background-clip",
                initialValue: "border-box",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return e.map((function(e) {
                        if (Ie(e))
                            switch (e.value) {
                            case "padding-box":
                                return st.PADDING_BOX;
                            case "content-box":
                                return st.CONTENT_BOX
                            }
                        return st.BORDER_BOX
                    }
                    ))
                }
            }, pt = {
                name: "background-color",
                initialValue: "transparent",
                prefix: !1,
                type: it.TYPE_VALUE,
                format: "color"
            }, ft = function(e) {
                var t = qe(e[0])
                  , A = e[1];
                return A && Re(A) ? {
                    color: t,
                    stop: A
                } : {
                    color: t,
                    stop: null
                }
            }, gt = function(e, t) {
                var A = e[0]
                  , n = e[e.length - 1];
                null === A.stop && (A.stop = ze),
                null === n.stop && (n.stop = Ve);
                for (var r = [], i = 0, s = 0; s < e.length; s++) {
                    var o = e[s].stop;
                    if (null !== o) {
                        var a = Ye(o, t);
                        a > i ? r.push(a) : r.push(i),
                        i = a
                    } else
                        r.push(null)
                }
                var l = null;
                for (s = 0; s < r.length; s++) {
                    var c = r[s];
                    if (null === c)
                        null === l && (l = s);
                    else if (null !== l) {
                        for (var u = s - l, d = (c - r[l - 1]) / (u + 1), h = 1; h <= u; h++)
                            r[l + h - 1] = d * h;
                        l = null
                    }
                }
                return e.map((function(e, A) {
                    return {
                        color: e.color,
                        stop: Math.max(Math.min(1, r[A] / t), 0)
                    }
                }
                ))
            }, Bt = function(e, t, A) {
                var n = "number" == typeof e ? e : function(e, t, A) {
                    var n = t / 2
                      , r = A / 2
                      , i = Ye(e[0], t) - n
                      , s = r - Ye(e[1], A);
                    return (Math.atan2(s, i) + 2 * Math.PI) % (2 * Math.PI)
                }(e, t, A)
                  , r = Math.abs(t * Math.sin(n)) + Math.abs(A * Math.cos(n))
                  , i = t / 2
                  , s = A / 2
                  , o = r / 2
                  , a = Math.sin(n - Math.PI / 2) * o
                  , l = Math.cos(n - Math.PI / 2) * o;
                return [r, i - l, i + l, s - a, s + a]
            }, mt = function(e, t) {
                return Math.sqrt(e * e + t * t)
            }, wt = function(e, t, A, n, r) {
                return [[0, 0], [0, t], [e, 0], [e, t]].reduce((function(e, t) {
                    var i = t[0]
                      , s = t[1]
                      , o = mt(A - i, n - s);
                    return (r ? o < e.optimumDistance : o > e.optimumDistance) ? {
                        optimumCorner: t,
                        optimumDistance: o
                    } : e
                }
                ), {
                    optimumDistance: r ? 1 / 0 : -1 / 0,
                    optimumCorner: null
                }).optimumCorner
            }, vt = function(e) {
                var t = je(180)
                  , A = [];
                return Ke(e).forEach((function(e, n) {
                    if (0 === n) {
                        var r = e[0];
                        if (r.type === d.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(r.value))
                            return void (t = $e(e));
                        if (We(r))
                            return void (t = (Je(r) + je(270)) % je(360))
                    }
                    var i = ft(e);
                    A.push(i)
                }
                )),
                {
                    angle: t,
                    stops: A,
                    type: ct.LINEAR_GRADIENT
                }
            }, Et = function(e) {
                return 0 === e[0] && 255 === e[1] && 0 === e[2] && 255 === e[3]
            }, Ct = function(e, t, A, n, r) {
                var i = "http://www.w3.org/2000/svg"
                  , s = document.createElementNS(i, "svg")
                  , o = document.createElementNS(i, "foreignObject");
                return s.setAttributeNS(null, "width", e.toString()),
                s.setAttributeNS(null, "height", t.toString()),
                o.setAttributeNS(null, "width", "100%"),
                o.setAttributeNS(null, "height", "100%"),
                o.setAttributeNS(null, "x", A.toString()),
                o.setAttributeNS(null, "y", n.toString()),
                o.setAttributeNS(null, "externalResourcesRequired", "true"),
                s.appendChild(o),
                o.appendChild(r),
                s
            }, Qt = function(e) {
                return new Promise((function(t, A) {
                    var n = new Image;
                    n.onload = function() {
                        return t(n)
                    }
                    ,
                    n.onerror = A,
                    n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(e))
                }
                ))
            }, yt = {
                get SUPPORT_RANGE_BOUNDS() {
                    var e = function(e) {
                        if (e.createRange) {
                            var t = e.createRange();
                            if (t.getBoundingClientRect) {
                                var A = e.createElement("boundtest");
                                A.style.height = "123px",
                                A.style.display = "block",
                                e.body.appendChild(A),
                                t.selectNode(A);
                                var n = t.getBoundingClientRect()
                                  , r = Math.round(n.height);
                                if (e.body.removeChild(A),
                                123 === r)
                                    return !0
                            }
                        }
                        return !1
                    }(document);
                    return Object.defineProperty(yt, "SUPPORT_RANGE_BOUNDS", {
                        value: e
                    }),
                    e
                },
                get SUPPORT_SVG_DRAWING() {
                    var e = function(e) {
                        var t = new Image
                          , A = e.createElement("canvas")
                          , n = A.getContext("2d");
                        if (!n)
                            return !1;
                        t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try {
                            n.drawImage(t, 0, 0),
                            A.toDataURL()
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }(document);
                    return Object.defineProperty(yt, "SUPPORT_SVG_DRAWING", {
                        value: e
                    }),
                    e
                },
                get SUPPORT_FOREIGNOBJECT_DRAWING() {
                    var e = "function" == typeof Array.from && "function" == typeof window.fetch ? function(e) {
                        var t = e.createElement("canvas");
                        t.width = 100,
                        t.height = 100;
                        var A = t.getContext("2d");
                        if (!A)
                            return Promise.reject(!1);
                        A.fillStyle = "rgb(0, 255, 0)",
                        A.fillRect(0, 0, 100, 100);
                        var n = new Image
                          , r = t.toDataURL();
                        n.src = r;
                        var i = Ct(100, 100, 0, 0, n);
                        return A.fillStyle = "red",
                        A.fillRect(0, 0, 100, 100),
                        Qt(i).then((function(t) {
                            A.drawImage(t, 0, 0);
                            var n = A.getImageData(0, 0, 100, 100).data;
                            A.fillStyle = "red",
                            A.fillRect(0, 0, 100, 100);
                            var i = e.createElement("div");
                            return i.style.backgroundImage = "url(" + r + ")",
                            i.style.height = "100px",
                            Et(n) ? Qt(Ct(100, 100, 0, 0, i)) : Promise.reject(!1)
                        }
                        )).then((function(e) {
                            return A.drawImage(e, 0, 0),
                            Et(A.getImageData(0, 0, 100, 100).data)
                        }
                        )).catch((function() {
                            return !1
                        }
                        ))
                    }(document) : Promise.resolve(!1);
                    return Object.defineProperty(yt, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                        value: e
                    }),
                    e
                },
                get SUPPORT_CORS_IMAGES() {
                    var e = void 0 !== (new Image).crossOrigin;
                    return Object.defineProperty(yt, "SUPPORT_CORS_IMAGES", {
                        value: e
                    }),
                    e
                },
                get SUPPORT_RESPONSE_TYPE() {
                    var e = "string" == typeof (new XMLHttpRequest).responseType;
                    return Object.defineProperty(yt, "SUPPORT_RESPONSE_TYPE", {
                        value: e
                    }),
                    e
                },
                get SUPPORT_CORS_XHR() {
                    var e = "withCredentials"in new XMLHttpRequest;
                    return Object.defineProperty(yt, "SUPPORT_CORS_XHR", {
                        value: e
                    }),
                    e
                }
            }, bt = function() {
                function e(e) {
                    this.id = e,
                    this.start = Date.now()
                }
                return e.prototype.debug = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    "undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, [this.id, this.getTime() + "ms"].concat(e)) : this.info.apply(this, e)
                }
                ,
                e.prototype.getTime = function() {
                    return Date.now() - this.start
                }
                ,
                e.create = function(t) {
                    e.instances[t] = new e(t)
                }
                ,
                e.destroy = function(t) {
                    delete e.instances[t]
                }
                ,
                e.getInstance = function(t) {
                    var A = e.instances[t];
                    if (void 0 === A)
                        throw new Error("No logger instance found with id " + t);
                    return A
                }
                ,
                e.prototype.info = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, [this.id, this.getTime() + "ms"].concat(e))
                }
                ,
                e.prototype.error = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    "undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, [this.id, this.getTime() + "ms"].concat(e)) : this.info.apply(this, e)
                }
                ,
                e.instances = {},
                e
            }(), Ut = function() {
                function e() {}
                return e.create = function(t, A) {
                    return e._caches[t] = new Ft(t,A)
                }
                ,
                e.destroy = function(t) {
                    delete e._caches[t]
                }
                ,
                e.open = function(t) {
                    var A = e._caches[t];
                    if (void 0 !== A)
                        return A;
                    throw new Error('Cache with key "' + t + '" not found')
                }
                ,
                e.getOrigin = function(t) {
                    var A = e._link;
                    return A ? (A.href = t,
                    A.href = A.href,
                    A.protocol + A.hostname + A.port) : "about:blank"
                }
                ,
                e.isSameOrigin = function(t) {
                    return e.getOrigin(t) === e._origin
                }
                ,
                e.setContext = function(t) {
                    e._link = t.document.createElement("a"),
                    e._origin = e.getOrigin(t.location.href)
                }
                ,
                e.getInstance = function() {
                    var t = e._current;
                    if (null === t)
                        throw new Error("No cache instance attached");
                    return t
                }
                ,
                e.attachInstance = function(t) {
                    e._current = t
                }
                ,
                e.detachInstance = function() {
                    e._current = null
                }
                ,
                e._caches = {},
                e._origin = "about:blank",
                e._current = null,
                e
            }(), Ft = function() {
                function e(e, t) {
                    this.id = e,
                    this._options = t,
                    this._cache = {}
                }
                return e.prototype.addImage = function(e) {
                    var t = Promise.resolve();
                    return this.has(e) ? t : Ot(e) || Nt(e) ? (this._cache[e] = this.loadImage(e),
                    t) : t
                }
                ,
                e.prototype.match = function(e) {
                    return this._cache[e]
                }
                ,
                e.prototype.loadImage = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, A, n, i, s = this;
                        return r(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return t = Ut.isSameOrigin(e),
                                A = !xt(e) && !0 === this._options.useCORS && yt.SUPPORT_CORS_IMAGES && !t,
                                n = !xt(e) && !t && "string" == typeof this._options.proxy && yt.SUPPORT_CORS_XHR && !A,
                                t || !1 !== this._options.allowTaint || xt(e) || n || A ? (i = e,
                                n ? [4, this.proxy(i)] : [3, 2]) : [2];
                            case 1:
                                i = r.sent(),
                                r.label = 2;
                            case 2:
                                return bt.getInstance(this.id).debug("Added image " + e.substring(0, 256)),
                                [4, new Promise((function(e, t) {
                                    var n = new Image;
                                    n.onload = function() {
                                        return e(n)
                                    }
                                    ,
                                    n.onerror = t,
                                    (It(i) || A) && (n.crossOrigin = "anonymous"),
                                    n.src = i,
                                    !0 === n.complete && setTimeout((function() {
                                        return e(n)
                                    }
                                    ), 500),
                                    s._options.imageTimeout > 0 && setTimeout((function() {
                                        return t("Timed out (" + s._options.imageTimeout + "ms) loading image")
                                    }
                                    ), s._options.imageTimeout)
                                }
                                ))];
                            case 3:
                                return [2, r.sent()]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.has = function(e) {
                    return void 0 !== this._cache[e]
                }
                ,
                e.prototype.keys = function() {
                    return Promise.resolve(Object.keys(this._cache))
                }
                ,
                e.prototype.proxy = function(e) {
                    var t = this
                      , A = this._options.proxy;
                    if (!A)
                        throw new Error("No proxy defined");
                    var n = e.substring(0, 256);
                    return new Promise((function(r, i) {
                        var s = yt.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
                          , o = new XMLHttpRequest;
                        if (o.onload = function() {
                            if (200 === o.status)
                                if ("text" === s)
                                    r(o.response);
                                else {
                                    var e = new FileReader;
                                    e.addEventListener("load", (function() {
                                        return r(e.result)
                                    }
                                    ), !1),
                                    e.addEventListener("error", (function(e) {
                                        return i(e)
                                    }
                                    ), !1),
                                    e.readAsDataURL(o.response)
                                }
                            else
                                i("Failed to proxy resource " + n + " with status code " + o.status)
                        }
                        ,
                        o.onerror = i,
                        o.open("GET", A + "?url=" + encodeURIComponent(e) + "&responseType=" + s),
                        "text" !== s && o instanceof XMLHttpRequest && (o.responseType = s),
                        t._options.imageTimeout) {
                            var a = t._options.imageTimeout;
                            o.timeout = a,
                            o.ontimeout = function() {
                                return i("Timed out (" + a + "ms) proxying " + n)
                            }
                        }
                        o.send()
                    }
                    ))
                }
                ,
                e
            }(), Tt = /^data:image\/svg\+xml/i, Ht = /^data:image\/.*;base64,/i, St = /^data:image\/.*/i, Nt = function(e) {
                return yt.SUPPORT_SVG_DRAWING || !kt(e)
            }, xt = function(e) {
                return St.test(e)
            }, It = function(e) {
                return Ht.test(e)
            }, Ot = function(e) {
                return "blob" === e.substr(0, 4)
            }, kt = function(e) {
                return "svg" === e.substr(-3).toLowerCase() || Tt.test(e)
            }, Mt = function(e) {
                var t = ut.CIRCLE
                  , A = dt.FARTHEST_CORNER
                  , n = []
                  , r = [];
                return Ke(e).forEach((function(e, i) {
                    var s = !0;
                    if (0 === i ? s = e.reduce((function(e, t) {
                        if (Ie(t))
                            switch (t.value) {
                            case "center":
                                return r.push(Xe),
                                !1;
                            case "top":
                            case "left":
                                return r.push(ze),
                                !1;
                            case "right":
                            case "bottom":
                                return r.push(Ve),
                                !1
                            }
                        else if (Re(t) || De(t))
                            return r.push(t),
                            !1;
                        return e
                    }
                    ), s) : 1 === i && (s = e.reduce((function(e, n) {
                        if (Ie(n))
                            switch (n.value) {
                            case "circle":
                                return t = ut.CIRCLE,
                                !1;
                            case "ellipse":
                                return t = ut.ELLIPSE,
                                !1;
                            case "contain":
                            case "closest-side":
                                return A = dt.CLOSEST_SIDE,
                                !1;
                            case "farthest-side":
                                return A = dt.FARTHEST_SIDE,
                                !1;
                            case "closest-corner":
                                return A = dt.CLOSEST_CORNER,
                                !1;
                            case "cover":
                            case "farthest-corner":
                                return A = dt.FARTHEST_CORNER,
                                !1
                            }
                        else if (De(n) || Re(n))
                            return Array.isArray(A) || (A = []),
                            A.push(n),
                            !1;
                        return e
                    }
                    ), s)),
                    s) {
                        var o = ft(e);
                        n.push(o)
                    }
                }
                )),
                {
                    size: A,
                    shape: t,
                    stops: n,
                    position: r,
                    type: ct.RADIAL_GRADIENT
                }
            };
            !function(e) {
                e[e.URL = 0] = "URL",
                e[e.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT",
                e[e.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT"
            }(ct || (ct = {})),
            function(e) {
                e[e.CIRCLE = 0] = "CIRCLE",
                e[e.ELLIPSE = 1] = "ELLIPSE"
            }(ut || (ut = {})),
            function(e) {
                e[e.CLOSEST_SIDE = 0] = "CLOSEST_SIDE",
                e[e.FARTHEST_SIDE = 1] = "FARTHEST_SIDE",
                e[e.CLOSEST_CORNER = 2] = "CLOSEST_CORNER",
                e[e.FARTHEST_CORNER = 3] = "FARTHEST_CORNER"
            }(dt || (dt = {}));
            var Pt, Kt = function(e) {
                if (e.type === d.URL_TOKEN) {
                    var t = {
                        url: e.value,
                        type: ct.URL
                    };
                    return Ut.getInstance().addImage(e.value),
                    t
                }
                if (e.type === d.FUNCTION) {
                    var A = Lt[e.name];
                    if (void 0 === A)
                        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
                    return A(e.values)
                }
                throw new Error("Unsupported image type")
            }, Lt = {
                "linear-gradient": function(e) {
                    var t = je(180)
                      , A = [];
                    return Ke(e).forEach((function(e, n) {
                        if (0 === n) {
                            var r = e[0];
                            if (r.type === d.IDENT_TOKEN && "to" === r.value)
                                return void (t = $e(e));
                            if (We(r))
                                return void (t = Je(r))
                        }
                        var i = ft(e);
                        A.push(i)
                    }
                    )),
                    {
                        angle: t,
                        stops: A,
                        type: ct.LINEAR_GRADIENT
                    }
                },
                "-moz-linear-gradient": vt,
                "-ms-linear-gradient": vt,
                "-o-linear-gradient": vt,
                "-webkit-linear-gradient": vt,
                "radial-gradient": function(e) {
                    var t = ut.CIRCLE
                      , A = dt.FARTHEST_CORNER
                      , n = []
                      , r = [];
                    return Ke(e).forEach((function(e, i) {
                        var s = !0;
                        if (0 === i) {
                            var o = !1;
                            s = e.reduce((function(e, n) {
                                if (o)
                                    if (Ie(n))
                                        switch (n.value) {
                                        case "center":
                                            return r.push(Xe),
                                            e;
                                        case "top":
                                        case "left":
                                            return r.push(ze),
                                            e;
                                        case "right":
                                        case "bottom":
                                            return r.push(Ve),
                                            e
                                        }
                                    else
                                        (Re(n) || De(n)) && r.push(n);
                                else if (Ie(n))
                                    switch (n.value) {
                                    case "circle":
                                        return t = ut.CIRCLE,
                                        !1;
                                    case "ellipse":
                                        return t = ut.ELLIPSE,
                                        !1;
                                    case "at":
                                        return o = !0,
                                        !1;
                                    case "closest-side":
                                        return A = dt.CLOSEST_SIDE,
                                        !1;
                                    case "cover":
                                    case "farthest-side":
                                        return A = dt.FARTHEST_SIDE,
                                        !1;
                                    case "contain":
                                    case "closest-corner":
                                        return A = dt.CLOSEST_CORNER,
                                        !1;
                                    case "farthest-corner":
                                        return A = dt.FARTHEST_CORNER,
                                        !1
                                    }
                                else if (De(n) || Re(n))
                                    return Array.isArray(A) || (A = []),
                                    A.push(n),
                                    !1;
                                return e
                            }
                            ), s)
                        }
                        if (s) {
                            var a = ft(e);
                            n.push(a)
                        }
                    }
                    )),
                    {
                        size: A,
                        shape: t,
                        stops: n,
                        position: r,
                        type: ct.RADIAL_GRADIENT
                    }
                },
                "-moz-radial-gradient": Mt,
                "-ms-radial-gradient": Mt,
                "-o-radial-gradient": Mt,
                "-webkit-radial-gradient": Mt,
                "-webkit-gradient": function(e) {
                    var t = je(180)
                      , A = []
                      , n = ct.LINEAR_GRADIENT
                      , r = ut.CIRCLE
                      , i = dt.FARTHEST_CORNER;
                    return Ke(e).forEach((function(e, t) {
                        var r = e[0];
                        if (0 === t) {
                            if (Ie(r) && "linear" === r.value)
                                return void (n = ct.LINEAR_GRADIENT);
                            if (Ie(r) && "radial" === r.value)
                                return void (n = ct.RADIAL_GRADIENT)
                        }
                        if (r.type === d.FUNCTION)
                            if ("from" === r.name) {
                                var i = qe(r.values[0]);
                                A.push({
                                    stop: ze,
                                    color: i
                                })
                            } else if ("to" === r.name)
                                i = qe(r.values[0]),
                                A.push({
                                    stop: Ve,
                                    color: i
                                });
                            else if ("color-stop" === r.name) {
                                var s = r.values.filter(Pe);
                                if (2 === s.length) {
                                    i = qe(s[1]);
                                    var o = s[0];
                                    xe(o) && A.push({
                                        stop: {
                                            type: d.PERCENTAGE_TOKEN,
                                            number: 100 * o.number,
                                            flags: o.flags
                                        },
                                        color: i
                                    })
                                }
                            }
                    }
                    )),
                    n === ct.LINEAR_GRADIENT ? {
                        angle: (t + je(180)) % je(360),
                        stops: A,
                        type: n
                    } : {
                        size: i,
                        shape: r,
                        stops: A,
                        position: [],
                        type: n
                    }
                }
            }, Dt = {
                name: "background-image",
                initialValue: "none",
                type: it.LIST,
                prefix: !1,
                parse: function(e) {
                    if (0 === e.length)
                        return [];
                    var t = e[0];
                    return t.type === d.IDENT_TOKEN && "none" === t.value ? [] : e.filter((function(e) {
                        return Pe(e) && function(e) {
                            return e.type !== d.FUNCTION || Lt[e.name]
                        }(e)
                    }
                    )).map(Kt)
                }
            }, Rt = {
                name: "background-origin",
                initialValue: "border-box",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return e.map((function(e) {
                        if (Ie(e))
                            switch (e.value) {
                            case "padding-box":
                                return 1;
                            case "content-box":
                                return 2
                            }
                        return 0
                    }
                    ))
                }
            }, _t = {
                name: "background-position",
                initialValue: "0% 0%",
                type: it.LIST,
                prefix: !1,
                parse: function(e) {
                    return Ke(e).map((function(e) {
                        return e.filter(Re)
                    }
                    )).map(_e)
                }
            };
            !function(e) {
                e[e.REPEAT = 0] = "REPEAT",
                e[e.NO_REPEAT = 1] = "NO_REPEAT",
                e[e.REPEAT_X = 2] = "REPEAT_X",
                e[e.REPEAT_Y = 3] = "REPEAT_Y"
            }(Pt || (Pt = {}));
            var zt, Xt = {
                name: "background-repeat",
                initialValue: "repeat",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return Ke(e).map((function(e) {
                        return e.filter(Ie).map((function(e) {
                            return e.value
                        }
                        )).join(" ")
                    }
                    )).map(Vt)
                }
            }, Vt = function(e) {
                switch (e) {
                case "no-repeat":
                    return Pt.NO_REPEAT;
                case "repeat-x":
                case "repeat no-repeat":
                    return Pt.REPEAT_X;
                case "repeat-y":
                case "no-repeat repeat":
                    return Pt.REPEAT_Y;
                case "repeat":
                default:
                    return Pt.REPEAT
                }
            };
            !function(e) {
                e.AUTO = "auto",
                e.CONTAIN = "contain",
                e.COVER = "cover"
            }(zt || (zt = {}));
            var Gt, Yt = {
                name: "background-size",
                initialValue: "0",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return Ke(e).map((function(e) {
                        return e.filter(Jt)
                    }
                    ))
                }
            }, Jt = function(e) {
                return Ie(e) || Re(e)
            }, Wt = function(e) {
                return {
                    name: "border-" + e + "-color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: it.TYPE_VALUE,
                    format: "color"
                }
            }, $t = Wt("top"), jt = Wt("right"), qt = Wt("bottom"), Zt = Wt("left"), eA = function(e) {
                return {
                    name: "border-radius-" + e,
                    initialValue: "0 0",
                    prefix: !1,
                    type: it.LIST,
                    parse: function(e) {
                        return _e(e.filter(Re))
                    }
                }
            }, tA = eA("top-left"), AA = eA("top-right"), nA = eA("bottom-right"), rA = eA("bottom-left");
            !function(e) {
                e[e.NONE = 0] = "NONE",
                e[e.SOLID = 1] = "SOLID"
            }(Gt || (Gt = {}));
            var iA, sA = function(e) {
                return {
                    name: "border-" + e + "-style",
                    initialValue: "solid",
                    prefix: !1,
                    type: it.IDENT_VALUE,
                    parse: function(e) {
                        switch (e) {
                        case "none":
                            return Gt.NONE
                        }
                        return Gt.SOLID
                    }
                }
            }, oA = sA("top"), aA = sA("right"), lA = sA("bottom"), cA = sA("left"), uA = function(e) {
                return {
                    name: "border-" + e + "-width",
                    initialValue: "0",
                    type: it.VALUE,
                    prefix: !1,
                    parse: function(e) {
                        return Ne(e) ? e.number : 0
                    }
                }
            }, dA = uA("top"), hA = uA("right"), pA = uA("bottom"), fA = uA("left"), gA = {
                name: "color",
                initialValue: "transparent",
                prefix: !1,
                type: it.TYPE_VALUE,
                format: "color"
            }, BA = {
                name: "display",
                initialValue: "inline-block",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return e.filter(Ie).reduce((function(e, t) {
                        return e | mA(t.value)
                    }
                    ), 0)
                }
            }, mA = function(e) {
                switch (e) {
                case "block":
                    return 2;
                case "inline":
                    return 4;
                case "run-in":
                    return 8;
                case "flow":
                    return 16;
                case "flow-root":
                    return 32;
                case "table":
                    return 64;
                case "flex":
                case "-webkit-flex":
                    return 128;
                case "grid":
                case "-ms-grid":
                    return 256;
                case "ruby":
                    return 512;
                case "subgrid":
                    return 1024;
                case "list-item":
                    return 2048;
                case "table-row-group":
                    return 4096;
                case "table-header-group":
                    return 8192;
                case "table-footer-group":
                    return 16384;
                case "table-row":
                    return 32768;
                case "table-cell":
                    return 65536;
                case "table-column-group":
                    return 131072;
                case "table-column":
                    return 262144;
                case "table-caption":
                    return 524288;
                case "ruby-base":
                    return 1048576;
                case "ruby-text":
                    return 2097152;
                case "ruby-base-container":
                    return 4194304;
                case "ruby-text-container":
                    return 8388608;
                case "contents":
                    return 16777216;
                case "inline-block":
                    return 33554432;
                case "inline-list-item":
                    return 67108864;
                case "inline-table":
                    return 134217728;
                case "inline-flex":
                    return 268435456;
                case "inline-grid":
                    return 536870912
                }
                return 0
            };
            !function(e) {
                e[e.NONE = 0] = "NONE",
                e[e.LEFT = 1] = "LEFT",
                e[e.RIGHT = 2] = "RIGHT",
                e[e.INLINE_START = 3] = "INLINE_START",
                e[e.INLINE_END = 4] = "INLINE_END"
            }(iA || (iA = {}));
            var wA, vA = {
                name: "float",
                initialValue: "none",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "left":
                        return iA.LEFT;
                    case "right":
                        return iA.RIGHT;
                    case "inline-start":
                        return iA.INLINE_START;
                    case "inline-end":
                        return iA.INLINE_END
                    }
                    return iA.NONE
                }
            }, EA = {
                name: "letter-spacing",
                initialValue: "0",
                prefix: !1,
                type: it.VALUE,
                parse: function(e) {
                    return e.type === d.IDENT_TOKEN && "normal" === e.value ? 0 : e.type === d.NUMBER_TOKEN || e.type === d.DIMENSION_TOKEN ? e.number : 0
                }
            };
            !function(e) {
                e.NORMAL = "normal",
                e.STRICT = "strict"
            }(wA || (wA = {}));
            var CA, QA = {
                name: "line-break",
                initialValue: "normal",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "strict":
                        return wA.STRICT;
                    case "normal":
                    default:
                        return wA.NORMAL
                    }
                }
            }, yA = {
                name: "line-height",
                initialValue: "normal",
                prefix: !1,
                type: it.TOKEN_VALUE
            }, bA = {
                name: "list-style-image",
                initialValue: "none",
                type: it.VALUE,
                prefix: !1,
                parse: function(e) {
                    return e.type === d.IDENT_TOKEN && "none" === e.value ? null : Kt(e)
                }
            };
            !function(e) {
                e[e.INSIDE = 0] = "INSIDE",
                e[e.OUTSIDE = 1] = "OUTSIDE"
            }(CA || (CA = {}));
            var UA, FA = {
                name: "list-style-position",
                initialValue: "outside",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "inside":
                        return CA.INSIDE;
                    case "outside":
                    default:
                        return CA.OUTSIDE
                    }
                }
            };
            !function(e) {
                e[e.NONE = -1] = "NONE",
                e[e.DISC = 0] = "DISC",
                e[e.CIRCLE = 1] = "CIRCLE",
                e[e.SQUARE = 2] = "SQUARE",
                e[e.DECIMAL = 3] = "DECIMAL",
                e[e.CJK_DECIMAL = 4] = "CJK_DECIMAL",
                e[e.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO",
                e[e.LOWER_ROMAN = 6] = "LOWER_ROMAN",
                e[e.UPPER_ROMAN = 7] = "UPPER_ROMAN",
                e[e.LOWER_GREEK = 8] = "LOWER_GREEK",
                e[e.LOWER_ALPHA = 9] = "LOWER_ALPHA",
                e[e.UPPER_ALPHA = 10] = "UPPER_ALPHA",
                e[e.ARABIC_INDIC = 11] = "ARABIC_INDIC",
                e[e.ARMENIAN = 12] = "ARMENIAN",
                e[e.BENGALI = 13] = "BENGALI",
                e[e.CAMBODIAN = 14] = "CAMBODIAN",
                e[e.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH",
                e[e.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM",
                e[e.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC",
                e[e.DEVANAGARI = 18] = "DEVANAGARI",
                e[e.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC",
                e[e.GEORGIAN = 20] = "GEORGIAN",
                e[e.GUJARATI = 21] = "GUJARATI",
                e[e.GURMUKHI = 22] = "GURMUKHI",
                e[e.HEBREW = 22] = "HEBREW",
                e[e.HIRAGANA = 23] = "HIRAGANA",
                e[e.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA",
                e[e.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL",
                e[e.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL",
                e[e.KANNADA = 27] = "KANNADA",
                e[e.KATAKANA = 28] = "KATAKANA",
                e[e.KATAKANA_IROHA = 29] = "KATAKANA_IROHA",
                e[e.KHMER = 30] = "KHMER",
                e[e.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL",
                e[e.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL",
                e[e.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL",
                e[e.LAO = 34] = "LAO",
                e[e.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN",
                e[e.MALAYALAM = 36] = "MALAYALAM",
                e[e.MONGOLIAN = 37] = "MONGOLIAN",
                e[e.MYANMAR = 38] = "MYANMAR",
                e[e.ORIYA = 39] = "ORIYA",
                e[e.PERSIAN = 40] = "PERSIAN",
                e[e.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL",
                e[e.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL",
                e[e.TAMIL = 43] = "TAMIL",
                e[e.TELUGU = 44] = "TELUGU",
                e[e.THAI = 45] = "THAI",
                e[e.TIBETAN = 46] = "TIBETAN",
                e[e.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL",
                e[e.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL",
                e[e.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN",
                e[e.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN",
                e[e.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"
            }(UA || (UA = {}));
            var TA, HA = {
                name: "list-style-type",
                initialValue: "none",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "disc":
                        return UA.DISC;
                    case "circle":
                        return UA.CIRCLE;
                    case "square":
                        return UA.SQUARE;
                    case "decimal":
                        return UA.DECIMAL;
                    case "cjk-decimal":
                        return UA.CJK_DECIMAL;
                    case "decimal-leading-zero":
                        return UA.DECIMAL_LEADING_ZERO;
                    case "lower-roman":
                        return UA.LOWER_ROMAN;
                    case "upper-roman":
                        return UA.UPPER_ROMAN;
                    case "lower-greek":
                        return UA.LOWER_GREEK;
                    case "lower-alpha":
                        return UA.LOWER_ALPHA;
                    case "upper-alpha":
                        return UA.UPPER_ALPHA;
                    case "arabic-indic":
                        return UA.ARABIC_INDIC;
                    case "armenian":
                        return UA.ARMENIAN;
                    case "bengali":
                        return UA.BENGALI;
                    case "cambodian":
                        return UA.CAMBODIAN;
                    case "cjk-earthly-branch":
                        return UA.CJK_EARTHLY_BRANCH;
                    case "cjk-heavenly-stem":
                        return UA.CJK_HEAVENLY_STEM;
                    case "cjk-ideographic":
                        return UA.CJK_IDEOGRAPHIC;
                    case "devanagari":
                        return UA.DEVANAGARI;
                    case "ethiopic-numeric":
                        return UA.ETHIOPIC_NUMERIC;
                    case "georgian":
                        return UA.GEORGIAN;
                    case "gujarati":
                        return UA.GUJARATI;
                    case "gurmukhi":
                        return UA.GURMUKHI;
                    case "hebrew":
                        return UA.HEBREW;
                    case "hiragana":
                        return UA.HIRAGANA;
                    case "hiragana-iroha":
                        return UA.HIRAGANA_IROHA;
                    case "japanese-formal":
                        return UA.JAPANESE_FORMAL;
                    case "japanese-informal":
                        return UA.JAPANESE_INFORMAL;
                    case "kannada":
                        return UA.KANNADA;
                    case "katakana":
                        return UA.KATAKANA;
                    case "katakana-iroha":
                        return UA.KATAKANA_IROHA;
                    case "khmer":
                        return UA.KHMER;
                    case "korean-hangul-formal":
                        return UA.KOREAN_HANGUL_FORMAL;
                    case "korean-hanja-formal":
                        return UA.KOREAN_HANJA_FORMAL;
                    case "korean-hanja-informal":
                        return UA.KOREAN_HANJA_INFORMAL;
                    case "lao":
                        return UA.LAO;
                    case "lower-armenian":
                        return UA.LOWER_ARMENIAN;
                    case "malayalam":
                        return UA.MALAYALAM;
                    case "mongolian":
                        return UA.MONGOLIAN;
                    case "myanmar":
                        return UA.MYANMAR;
                    case "oriya":
                        return UA.ORIYA;
                    case "persian":
                        return UA.PERSIAN;
                    case "simp-chinese-formal":
                        return UA.SIMP_CHINESE_FORMAL;
                    case "simp-chinese-informal":
                        return UA.SIMP_CHINESE_INFORMAL;
                    case "tamil":
                        return UA.TAMIL;
                    case "telugu":
                        return UA.TELUGU;
                    case "thai":
                        return UA.THAI;
                    case "tibetan":
                        return UA.TIBETAN;
                    case "trad-chinese-formal":
                        return UA.TRAD_CHINESE_FORMAL;
                    case "trad-chinese-informal":
                        return UA.TRAD_CHINESE_INFORMAL;
                    case "upper-armenian":
                        return UA.UPPER_ARMENIAN;
                    case "disclosure-open":
                        return UA.DISCLOSURE_OPEN;
                    case "disclosure-closed":
                        return UA.DISCLOSURE_CLOSED;
                    case "none":
                    default:
                        return UA.NONE
                    }
                }
            }, SA = function(e) {
                return {
                    name: "margin-" + e,
                    initialValue: "0",
                    prefix: !1,
                    type: it.TOKEN_VALUE
                }
            }, NA = SA("top"), xA = SA("right"), IA = SA("bottom"), OA = SA("left");
            !function(e) {
                e[e.VISIBLE = 0] = "VISIBLE",
                e[e.HIDDEN = 1] = "HIDDEN",
                e[e.SCROLL = 2] = "SCROLL",
                e[e.AUTO = 3] = "AUTO"
            }(TA || (TA = {}));
            var kA, MA = {
                name: "overflow",
                initialValue: "visible",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return e.filter(Ie).map((function(e) {
                        switch (e.value) {
                        case "hidden":
                            return TA.HIDDEN;
                        case "scroll":
                            return TA.SCROLL;
                        case "auto":
                            return TA.AUTO;
                        case "visible":
                        default:
                            return TA.VISIBLE
                        }
                    }
                    ))
                }
            };
            !function(e) {
                e.NORMAL = "normal",
                e.BREAK_WORD = "break-word"
            }(kA || (kA = {}));
            var PA, KA = {
                name: "overflow-wrap",
                initialValue: "normal",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "break-word":
                        return kA.BREAK_WORD;
                    case "normal":
                    default:
                        return kA.NORMAL
                    }
                }
            }, LA = function(e) {
                return {
                    name: "padding-" + e,
                    initialValue: "0",
                    prefix: !1,
                    type: it.TYPE_VALUE,
                    format: "length-percentage"
                }
            }, DA = LA("top"), RA = LA("right"), _A = LA("bottom"), zA = LA("left");
            !function(e) {
                e[e.LEFT = 0] = "LEFT",
                e[e.CENTER = 1] = "CENTER",
                e[e.RIGHT = 2] = "RIGHT"
            }(PA || (PA = {}));
            var XA, VA = {
                name: "text-align",
                initialValue: "left",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "right":
                        return PA.RIGHT;
                    case "center":
                    case "justify":
                        return PA.CENTER;
                    case "left":
                    default:
                        return PA.LEFT
                    }
                }
            };
            !function(e) {
                e[e.STATIC = 0] = "STATIC",
                e[e.RELATIVE = 1] = "RELATIVE",
                e[e.ABSOLUTE = 2] = "ABSOLUTE",
                e[e.FIXED = 3] = "FIXED",
                e[e.STICKY = 4] = "STICKY"
            }(XA || (XA = {}));
            var GA, YA = {
                name: "position",
                initialValue: "static",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "relative":
                        return XA.RELATIVE;
                    case "absolute":
                        return XA.ABSOLUTE;
                    case "fixed":
                        return XA.FIXED;
                    case "sticky":
                        return XA.STICKY
                    }
                    return XA.STATIC
                }
            }, JA = {
                name: "text-shadow",
                initialValue: "none",
                type: it.LIST,
                prefix: !1,
                parse: function(e) {
                    return 1 === e.length && ke(e[0], "none") ? [] : Ke(e).map((function(e) {
                        for (var t = {
                            color: lt.TRANSPARENT,
                            offsetX: ze,
                            offsetY: ze,
                            blur: ze
                        }, A = 0, n = 0; n < e.length; n++) {
                            var r = e[n];
                            De(r) ? (0 === A ? t.offsetX = r : 1 === A ? t.offsetY = r : t.blur = r,
                            A++) : t.color = qe(r)
                        }
                        return t
                    }
                    ))
                }
            };
            !function(e) {
                e[e.NONE = 0] = "NONE",
                e[e.LOWERCASE = 1] = "LOWERCASE",
                e[e.UPPERCASE = 2] = "UPPERCASE",
                e[e.CAPITALIZE = 3] = "CAPITALIZE"
            }(GA || (GA = {}));
            var WA, $A = {
                name: "text-transform",
                initialValue: "none",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "uppercase":
                        return GA.UPPERCASE;
                    case "lowercase":
                        return GA.LOWERCASE;
                    case "capitalize":
                        return GA.CAPITALIZE
                    }
                    return GA.NONE
                }
            }, jA = {
                name: "transform",
                initialValue: "none",
                prefix: !0,
                type: it.VALUE,
                parse: function(e) {
                    if (e.type === d.IDENT_TOKEN && "none" === e.value)
                        return null;
                    if (e.type === d.FUNCTION) {
                        var t = qA[e.name];
                        if (void 0 === t)
                            throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
                        return t(e.values)
                    }
                    return null
                }
            }, qA = {
                matrix: function(e) {
                    var t = e.filter((function(e) {
                        return e.type === d.NUMBER_TOKEN
                    }
                    )).map((function(e) {
                        return e.number
                    }
                    ));
                    return 6 === t.length ? t : null
                },
                matrix3d: function(e) {
                    var t = e.filter((function(e) {
                        return e.type === d.NUMBER_TOKEN
                    }
                    )).map((function(e) {
                        return e.number
                    }
                    ))
                      , A = t[0]
                      , n = t[1]
                      , r = (t[2],
                    t[3],
                    t[4])
                      , i = t[5]
                      , s = (t[6],
                    t[7],
                    t[8],
                    t[9],
                    t[10],
                    t[11],
                    t[12])
                      , o = t[13];
                    return t[14],
                    t[15],
                    16 === t.length ? [A, n, r, i, s, o] : null
                }
            }, ZA = {
                type: d.PERCENTAGE_TOKEN,
                number: 50,
                flags: 4
            }, en = [ZA, ZA], tn = {
                name: "transform-origin",
                initialValue: "50% 50%",
                prefix: !0,
                type: it.LIST,
                parse: function(e) {
                    var t = e.filter(Re);
                    return 2 !== t.length ? en : [t[0], t[1]]
                }
            };
            !function(e) {
                e[e.VISIBLE = 0] = "VISIBLE",
                e[e.HIDDEN = 1] = "HIDDEN",
                e[e.COLLAPSE = 2] = "COLLAPSE"
            }(WA || (WA = {}));
            var An, nn = {
                name: "visible",
                initialValue: "none",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "hidden":
                        return WA.HIDDEN;
                    case "collapse":
                        return WA.COLLAPSE;
                    case "visible":
                    default:
                        return WA.VISIBLE
                    }
                }
            };
            !function(e) {
                e.NORMAL = "normal",
                e.BREAK_ALL = "break-all",
                e.KEEP_ALL = "keep-all"
            }(An || (An = {}));
            var rn, sn = {
                name: "word-break",
                initialValue: "normal",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "break-all":
                        return An.BREAK_ALL;
                    case "keep-all":
                        return An.KEEP_ALL;
                    case "normal":
                    default:
                        return An.NORMAL
                    }
                }
            }, on = {
                name: "z-index",
                initialValue: "auto",
                prefix: !1,
                type: it.VALUE,
                parse: function(e) {
                    if (e.type === d.IDENT_TOKEN)
                        return {
                            auto: !0,
                            order: 0
                        };
                    if (xe(e))
                        return {
                            auto: !1,
                            order: e.number
                        };
                    throw new Error("Invalid z-index number parsed")
                }
            }, an = {
                name: "opacity",
                initialValue: "1",
                type: it.VALUE,
                prefix: !1,
                parse: function(e) {
                    return xe(e) ? e.number : 1
                }
            }, ln = {
                name: "text-decoration-color",
                initialValue: "transparent",
                prefix: !1,
                type: it.TYPE_VALUE,
                format: "color"
            }, cn = {
                name: "text-decoration-line",
                initialValue: "none",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return e.filter(Ie).map((function(e) {
                        switch (e.value) {
                        case "underline":
                            return 1;
                        case "overline":
                            return 2;
                        case "line-through":
                            return 3;
                        case "none":
                            return 4
                        }
                        return 0
                    }
                    )).filter((function(e) {
                        return 0 !== e
                    }
                    ))
                }
            }, un = {
                name: "font-family",
                initialValue: "",
                prefix: !1,
                type: it.LIST,
                parse: function(e) {
                    return e.filter(dn).map((function(e) {
                        return e.value
                    }
                    ))
                }
            }, dn = function(e) {
                return e.type === d.STRING_TOKEN || e.type === d.IDENT_TOKEN
            }, hn = {
                name: "font-size",
                initialValue: "0",
                prefix: !1,
                type: it.TYPE_VALUE,
                format: "length"
            }, pn = {
                name: "font-weight",
                initialValue: "normal",
                type: it.VALUE,
                prefix: !1,
                parse: function(e) {
                    if (xe(e))
                        return e.number;
                    if (Ie(e))
                        switch (e.value) {
                        case "bold":
                            return 700;
                        case "normal":
                        default:
                            return 400
                        }
                    return 400
                }
            }, fn = {
                name: "font-variant",
                initialValue: "none",
                type: it.LIST,
                prefix: !1,
                parse: function(e) {
                    return e.filter(Ie).map((function(e) {
                        return e.value
                    }
                    ))
                }
            };
            !function(e) {
                e.NORMAL = "normal",
                e.ITALIC = "italic",
                e.OBLIQUE = "oblique"
            }(rn || (rn = {}));
            var gn, Bn = {
                name: "font-style",
                initialValue: "normal",
                prefix: !1,
                type: it.IDENT_VALUE,
                parse: function(e) {
                    switch (e) {
                    case "oblique":
                        return rn.OBLIQUE;
                    case "italic":
                        return rn.ITALIC;
                    case "normal":
                    default:
                        return rn.NORMAL
                    }
                }
            }, mn = function(e, t) {
                return 0 != (e & t)
            }, wn = {
                name: "content",
                initialValue: "none",
                type: it.LIST,
                prefix: !1,
                parse: function(e) {
                    if (0 === e.length)
                        return [];
                    var t = e[0];
                    return t.type === d.IDENT_TOKEN && "none" === t.value ? [] : e
                }
            }, vn = {
                name: "counter-increment",
                initialValue: "none",
                prefix: !0,
                type: it.LIST,
                parse: function(e) {
                    if (0 === e.length)
                        return null;
                    var t = e[0];
                    if (t.type === d.IDENT_TOKEN && "none" === t.value)
                        return null;
                    for (var A = [], n = e.filter(Me), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , s = n[r + 1];
                        if (i.type === d.IDENT_TOKEN) {
                            var o = s && xe(s) ? s.number : 1;
                            A.push({
                                counter: i.value,
                                increment: o
                            })
                        }
                    }
                    return A
                }
            }, En = {
                name: "counter-reset",
                initialValue: "none",
                prefix: !0,
                type: it.LIST,
                parse: function(e) {
                    if (0 === e.length)
                        return [];
                    for (var t = [], A = e.filter(Me), n = 0; n < A.length; n++) {
                        var r = A[n]
                          , i = A[n + 1];
                        if (Ie(r) && "none" !== r.value) {
                            var s = i && xe(i) ? i.number : 0;
                            t.push({
                                counter: r.value,
                                reset: s
                            })
                        }
                    }
                    return t
                }
            }, Cn = {
                name: "quotes",
                initialValue: "none",
                prefix: !0,
                type: it.LIST,
                parse: function(e) {
                    if (0 === e.length)
                        return null;
                    var t = e[0];
                    if (t.type === d.IDENT_TOKEN && "none" === t.value)
                        return null;
                    var A = []
                      , n = e.filter(Oe);
                    if (n.length % 2 != 0)
                        return null;
                    for (var r = 0; r < n.length; r += 2) {
                        var i = n[r].value
                          , s = n[r + 1].value;
                        A.push({
                            open: i,
                            close: s
                        })
                    }
                    return A
                }
            }, Qn = function(e, t, A) {
                if (!e)
                    return "";
                var n = e[Math.min(t, e.length - 1)];
                return n ? A ? n.open : n.close : ""
            }, yn = {
                name: "box-shadow",
                initialValue: "none",
                type: it.LIST,
                prefix: !1,
                parse: function(e) {
                    return 1 === e.length && ke(e[0], "none") ? [] : Ke(e).map((function(e) {
                        for (var t = {
                            color: 255,
                            offsetX: ze,
                            offsetY: ze,
                            blur: ze,
                            spread: ze,
                            inset: !1
                        }, A = 0, n = 0; n < e.length; n++) {
                            var r = e[n];
                            ke(r, "inset") ? t.inset = !0 : De(r) ? (0 === A ? t.offsetX = r : 1 === A ? t.offsetY = r : 2 === A ? t.blur = r : t.spread = r,
                            A++) : t.color = qe(r)
                        }
                        return t
                    }
                    ))
                }
            }, bn = function() {
                function e(e) {
                    this.backgroundClip = Tn(ht, e.backgroundClip),
                    this.backgroundColor = Tn(pt, e.backgroundColor),
                    this.backgroundImage = Tn(Dt, e.backgroundImage),
                    this.backgroundOrigin = Tn(Rt, e.backgroundOrigin),
                    this.backgroundPosition = Tn(_t, e.backgroundPosition),
                    this.backgroundRepeat = Tn(Xt, e.backgroundRepeat),
                    this.backgroundSize = Tn(Yt, e.backgroundSize),
                    this.borderTopColor = Tn($t, e.borderTopColor),
                    this.borderRightColor = Tn(jt, e.borderRightColor),
                    this.borderBottomColor = Tn(qt, e.borderBottomColor),
                    this.borderLeftColor = Tn(Zt, e.borderLeftColor),
                    this.borderTopLeftRadius = Tn(tA, e.borderTopLeftRadius),
                    this.borderTopRightRadius = Tn(AA, e.borderTopRightRadius),
                    this.borderBottomRightRadius = Tn(nA, e.borderBottomRightRadius),
                    this.borderBottomLeftRadius = Tn(rA, e.borderBottomLeftRadius),
                    this.borderTopStyle = Tn(oA, e.borderTopStyle),
                    this.borderRightStyle = Tn(aA, e.borderRightStyle),
                    this.borderBottomStyle = Tn(lA, e.borderBottomStyle),
                    this.borderLeftStyle = Tn(cA, e.borderLeftStyle),
                    this.borderTopWidth = Tn(dA, e.borderTopWidth),
                    this.borderRightWidth = Tn(hA, e.borderRightWidth),
                    this.borderBottomWidth = Tn(pA, e.borderBottomWidth),
                    this.borderLeftWidth = Tn(fA, e.borderLeftWidth),
                    this.boxShadow = Tn(yn, e.boxShadow),
                    this.color = Tn(gA, e.color),
                    this.display = Tn(BA, e.display),
                    this.float = Tn(vA, e.cssFloat),
                    this.fontFamily = Tn(un, e.fontFamily),
                    this.fontSize = Tn(hn, e.fontSize),
                    this.fontStyle = Tn(Bn, e.fontStyle),
                    this.fontVariant = Tn(fn, e.fontVariant),
                    this.fontWeight = Tn(pn, e.fontWeight),
                    this.letterSpacing = Tn(EA, e.letterSpacing),
                    this.lineBreak = Tn(QA, e.lineBreak),
                    this.lineHeight = Tn(yA, e.lineHeight),
                    this.listStyleImage = Tn(bA, e.listStyleImage),
                    this.listStylePosition = Tn(FA, e.listStylePosition),
                    this.listStyleType = Tn(HA, e.listStyleType),
                    this.marginTop = Tn(NA, e.marginTop),
                    this.marginRight = Tn(xA, e.marginRight),
                    this.marginBottom = Tn(IA, e.marginBottom),
                    this.marginLeft = Tn(OA, e.marginLeft),
                    this.opacity = Tn(an, e.opacity);
                    var t = Tn(MA, e.overflow);
                    this.overflowX = t[0],
                    this.overflowY = t[t.length > 1 ? 1 : 0],
                    this.overflowWrap = Tn(KA, e.overflowWrap),
                    this.paddingTop = Tn(DA, e.paddingTop),
                    this.paddingRight = Tn(RA, e.paddingRight),
                    this.paddingBottom = Tn(_A, e.paddingBottom),
                    this.paddingLeft = Tn(zA, e.paddingLeft),
                    this.position = Tn(YA, e.position),
                    this.textAlign = Tn(VA, e.textAlign),
                    this.textDecorationColor = Tn(ln, e.textDecorationColor || e.color),
                    this.textDecorationLine = Tn(cn, e.textDecorationLine),
                    this.textShadow = Tn(JA, e.textShadow),
                    this.textTransform = Tn($A, e.textTransform),
                    this.transform = Tn(jA, e.transform),
                    this.transformOrigin = Tn(tn, e.transformOrigin),
                    this.visibility = Tn(nn, e.visibility),
                    this.wordBreak = Tn(sn, e.wordBreak),
                    this.zIndex = Tn(on, e.zIndex)
                }
                return e.prototype.isVisible = function() {
                    return this.display > 0 && this.opacity > 0 && this.visibility === WA.VISIBLE
                }
                ,
                e.prototype.isTransparent = function() {
                    return Ze(this.backgroundColor)
                }
                ,
                e.prototype.isTransformed = function() {
                    return null !== this.transform
                }
                ,
                e.prototype.isPositioned = function() {
                    return this.position !== XA.STATIC
                }
                ,
                e.prototype.isPositionedWithZIndex = function() {
                    return this.isPositioned() && !this.zIndex.auto
                }
                ,
                e.prototype.isFloating = function() {
                    return this.float !== iA.NONE
                }
                ,
                e.prototype.isInlineLevel = function() {
                    return mn(this.display, 4) || mn(this.display, 33554432) || mn(this.display, 268435456) || mn(this.display, 536870912) || mn(this.display, 67108864) || mn(this.display, 134217728)
                }
                ,
                e
            }(), Un = function(e) {
                this.content = Tn(wn, e.content),
                this.quotes = Tn(Cn, e.quotes)
            }, Fn = function(e) {
                this.counterIncrement = Tn(vn, e.counterIncrement),
                this.counterReset = Tn(En, e.counterReset)
            }, Tn = function(e, t) {
                var A = new He
                  , n = null != t ? t.toString() : e.initialValue;
                A.write(n);
                var r = new Se(A.read());
                switch (e.type) {
                case it.IDENT_VALUE:
                    var i = r.parseComponentValue();
                    return e.parse(Ie(i) ? i.value : e.initialValue);
                case it.VALUE:
                    return e.parse(r.parseComponentValue());
                case it.LIST:
                    return e.parse(r.parseComponentValues());
                case it.TOKEN_VALUE:
                    return r.parseComponentValue();
                case it.TYPE_VALUE:
                    switch (e.format) {
                    case "angle":
                        return Je(r.parseComponentValue());
                    case "color":
                        return qe(r.parseComponentValue());
                    case "image":
                        return Kt(r.parseComponentValue());
                    case "length":
                        var s = r.parseComponentValue();
                        return De(s) ? s : ze;
                    case "length-percentage":
                        var o = r.parseComponentValue();
                        return Re(o) ? o : ze
                    }
                }
                throw new Error("Attempting to parse unsupported css format type " + e.format)
            }, Hn = function(e) {
                this.styles = new bn(window.getComputedStyle(e, null)),
                this.textNodes = [],
                this.elements = [],
                null !== this.styles.transform && sr(e) && (e.style.transform = "none"),
                this.bounds = s(e),
                this.flags = 0
            }, Sn = function(e, t) {
                this.text = e,
                this.bounds = t
            }, Nn = function(e) {
                var t = e.ownerDocument;
                if (t) {
                    var A = t.createElement("html2canvaswrapper");
                    A.appendChild(e.cloneNode(!0));
                    var n = e.parentNode;
                    if (n) {
                        n.replaceChild(A, e);
                        var r = s(A);
                        return A.firstChild && n.replaceChild(A.firstChild, A),
                        r
                    }
                }
                return new i(0,0,0,0)
            }, xn = function(e, t, A) {
                var n = e.ownerDocument;
                if (!n)
                    throw new Error("Node has no owner document");
                var r = n.createRange();
                return r.setStart(e, t),
                r.setEnd(e, t + A),
                i.fromClientRect(r.getBoundingClientRect())
            }, In = function(e, t) {
                return 0 !== t.letterSpacing ? o(e).map((function(e) {
                    return a(e)
                }
                )) : On(e, t)
            }, On = function(e, t) {
                for (var A, n = function(e, t) {
                    var A = o(e)
                      , n = $(A, t)
                      , r = n[0]
                      , i = n[1]
                      , s = n[2]
                      , a = A.length
                      , l = 0
                      , c = 0;
                    return {
                        next: function() {
                            if (c >= a)
                                return {
                                    done: !0,
                                    value: null
                                };
                            for (var e = "×"; c < a && "×" === (e = W(A, i, r, ++c, s)); )
                                ;
                            if ("×" !== e || c === a) {
                                var t = new j(A,e,l,c);
                                return l = c,
                                {
                                    value: t,
                                    done: !1
                                }
                            }
                            return {
                                done: !0,
                                value: null
                            }
                        }
                    }
                }(e, {
                    lineBreak: t.lineBreak,
                    wordBreak: t.overflowWrap === kA.BREAK_WORD ? "break-word" : t.wordBreak
                }), r = []; !(A = n.next()).done; )
                    A.value && r.push(A.value.slice());
                return r
            }, kn = function(e, t) {
                this.text = Mn(e.data, t.textTransform),
                this.textBounds = function(e, t, A) {
                    var n = In(e, t)
                      , r = []
                      , i = 0;
                    return n.forEach((function(e) {
                        if (t.textDecorationLine.length || e.trim().length > 0)
                            if (yt.SUPPORT_RANGE_BOUNDS)
                                r.push(new Sn(e,xn(A, i, e.length)));
                            else {
                                var n = A.splitText(e.length);
                                r.push(new Sn(e,Nn(A))),
                                A = n
                            }
                        else
                            yt.SUPPORT_RANGE_BOUNDS || (A = A.splitText(e.length));
                        i += e.length
                    }
                    )),
                    r
                }(this.text, t, e)
            }, Mn = function(e, t) {
                switch (t) {
                case GA.LOWERCASE:
                    return e.toLowerCase();
                case GA.CAPITALIZE:
                    return e.replace(Pn, Kn);
                case GA.UPPERCASE:
                    return e.toUpperCase();
                default:
                    return e
                }
            }, Pn = /(^|\s|:|-|\(|\))([a-z])/g, Kn = function(e, t, A) {
                return e.length > 0 ? t + A.toUpperCase() : e
            }, Ln = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this;
                    return A.src = t.currentSrc || t.src,
                    A.intrinsicWidth = t.naturalWidth,
                    A.intrinsicHeight = t.naturalHeight,
                    Ut.getInstance().addImage(A.src),
                    A
                }
                return t(A, e),
                A
            }(Hn), Dn = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this;
                    return A.canvas = t,
                    A.intrinsicWidth = t.width,
                    A.intrinsicHeight = t.height,
                    A
                }
                return t(A, e),
                A
            }(Hn), Rn = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this
                      , n = new XMLSerializer;
                    return A.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(t)),
                    A.intrinsicWidth = t.width.baseVal.value,
                    A.intrinsicHeight = t.height.baseVal.value,
                    Ut.getInstance().addImage(A.svg),
                    A
                }
                return t(A, e),
                A
            }(Hn), _n = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this;
                    return A.value = t.value,
                    A
                }
                return t(A, e),
                A
            }(Hn), zn = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this;
                    return A.start = t.start,
                    A.reversed = "boolean" == typeof t.reversed && !0 === t.reversed,
                    A
                }
                return t(A, e),
                A
            }(Hn), Xn = [{
                type: d.DIMENSION_TOKEN,
                flags: 0,
                unit: "px",
                number: 3
            }], Vn = [{
                type: d.PERCENTAGE_TOKEN,
                flags: 0,
                number: 50
            }], Gn = "password", Yn = function(e) {
                function A(t) {
                    var A, n, r, s = e.call(this, t) || this;
                    switch (s.type = t.type.toLowerCase(),
                    s.checked = t.checked,
                    s.value = 0 === (n = (A = t).type === Gn ? new Array(A.value.length + 1).join("•") : A.value).length ? A.placeholder || "" : n,
                    "checkbox" !== s.type && "radio" !== s.type || (s.styles.backgroundColor = 3739148031,
                    s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575,
                    s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1,
                    s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = Gt.SOLID,
                    s.styles.backgroundClip = [st.BORDER_BOX],
                    s.styles.backgroundOrigin = [0],
                    s.bounds = (r = s.bounds).width > r.height ? new i(r.left + (r.width - r.height) / 2,r.top,r.height,r.height) : r.width < r.height ? new i(r.left,r.top + (r.height - r.width) / 2,r.width,r.width) : r),
                    s.type) {
                    case "checkbox":
                        s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = Xn;
                        break;
                    case "radio":
                        s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = Vn
                    }
                    return s
                }
                return t(A, e),
                A
            }(Hn), Jn = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this
                      , n = t.options[t.selectedIndex || 0];
                    return A.value = n && n.text || "",
                    A
                }
                return t(A, e),
                A
            }(Hn), Wn = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this;
                    return A.value = t.value,
                    A
                }
                return t(A, e),
                A
            }(Hn), $n = function(e) {
                return qe(Se.create(e).parseComponentValue())
            }, jn = function(e) {
                function A(t) {
                    var A = e.call(this, t) || this;
                    A.src = t.src,
                    A.width = parseInt(t.width, 10) || 0,
                    A.height = parseInt(t.height, 10) || 0,
                    A.backgroundColor = A.styles.backgroundColor;
                    try {
                        if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
                            A.tree = tr(t.contentWindow.document.documentElement);
                            var n = t.contentWindow.document.documentElement ? $n(getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : lt.TRANSPARENT
                              , r = t.contentWindow.document.body ? $n(getComputedStyle(t.contentWindow.document.body).backgroundColor) : lt.TRANSPARENT;
                            A.backgroundColor = Ze(n) ? Ze(r) ? A.styles.backgroundColor : r : n
                        }
                    } catch (e) {}
                    return A
                }
                return t(A, e),
                A
            }(Hn), qn = ["OL", "UL", "MENU"], Zn = function(e, t, A) {
                for (var n = e.firstChild, r = void 0; n; n = r)
                    if (r = n.nextSibling,
                    rr(n) && n.data.trim().length > 0)
                        t.textNodes.push(new kn(n,t.styles));
                    else if (ir(n)) {
                        var i = er(n);
                        i.styles.isVisible() && (Ar(n, i, A) ? i.flags |= 4 : nr(i.styles) && (i.flags |= 2),
                        -1 !== qn.indexOf(n.tagName) && (i.flags |= 8),
                        t.elements.push(i),
                        Br(n) || cr(n) || mr(n) || Zn(n, i, A))
                    }
            }, er = function(e) {
                return hr(e) ? new Ln(e) : dr(e) ? new Dn(e) : cr(e) ? new Rn(e) : or(e) ? new _n(e) : ar(e) ? new zn(e) : lr(e) ? new Yn(e) : mr(e) ? new Jn(e) : Br(e) ? new Wn(e) : pr(e) ? new jn(e) : new Hn(e)
            }, tr = function(e) {
                var t = er(e);
                return t.flags |= 4,
                Zn(e, t, t),
                t
            }, Ar = function(e, t, A) {
                return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || ur(e) && A.styles.isTransparent()
            }, nr = function(e) {
                return e.isPositioned() || e.isFloating()
            }, rr = function(e) {
                return e.nodeType === Node.TEXT_NODE
            }, ir = function(e) {
                return e.nodeType === Node.ELEMENT_NODE
            }, sr = function(e) {
                return void 0 !== e.style
            }, or = function(e) {
                return "LI" === e.tagName
            }, ar = function(e) {
                return "OL" === e.tagName
            }, lr = function(e) {
                return "INPUT" === e.tagName
            }, cr = function(e) {
                return "svg" === e.tagName
            }, ur = function(e) {
                return "BODY" === e.tagName
            }, dr = function(e) {
                return "CANVAS" === e.tagName
            }, hr = function(e) {
                return "IMG" === e.tagName
            }, pr = function(e) {
                return "IFRAME" === e.tagName
            }, fr = function(e) {
                return "STYLE" === e.tagName
            }, gr = function(e) {
                return "SCRIPT" === e.tagName
            }, Br = function(e) {
                return "TEXTAREA" === e.tagName
            }, mr = function(e) {
                return "SELECT" === e.tagName
            }, wr = function() {
                function e() {
                    this.counters = {}
                }
                return e.prototype.getCounterValue = function(e) {
                    var t = this.counters[e];
                    return t && t.length ? t[t.length - 1] : 1
                }
                ,
                e.prototype.getCounterValues = function(e) {
                    var t = this.counters[e];
                    return t || []
                }
                ,
                e.prototype.pop = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        return t.counters[e].pop()
                    }
                    ))
                }
                ,
                e.prototype.parse = function(e) {
                    var t = this
                      , A = e.counterIncrement
                      , n = e.counterReset;
                    null !== A && A.forEach((function(e) {
                        var A = t.counters[e.counter];
                        A && (A[Math.max(0, A.length - 1)] += e.increment)
                    }
                    ));
                    var r = [];
                    return n.forEach((function(e) {
                        var A = t.counters[e.counter];
                        r.push(e.counter),
                        A || (A = t.counters[e.counter] = []),
                        A.push(e.reset)
                    }
                    )),
                    r
                }
                ,
                e
            }(), vr = {
                integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
            }, Er = {
                integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
            }, Cr = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
            }, Qr = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
            }, yr = function(e, t, A, n, r, i) {
                return e < t || e > A ? Hr(e, r, i.length > 0) : n.integers.reduce((function(t, A, r) {
                    for (; e >= A; )
                        e -= A,
                        t += n.values[r];
                    return t
                }
                ), "") + i
            }, br = function(e, t, A, n) {
                var r = "";
                do {
                    A || e--,
                    r = n(e) + r,
                    e /= t
                } while (e * t >= t);
                return r
            }, Ur = function(e, t, A, n, r) {
                var i = A - t + 1;
                return (e < 0 ? "-" : "") + (br(Math.abs(e), i, n, (function(e) {
                    return a(Math.floor(e % i) + t)
                }
                )) + r)
            }, Fr = function(e, t, A) {
                void 0 === A && (A = ". ");
                var n = t.length;
                return br(Math.abs(e), n, !1, (function(e) {
                    return t[Math.floor(e % n)]
                }
                )) + A
            }, Tr = function(e, t, A, n, r, i) {
                if (e < -9999 || e > 9999)
                    return Hr(e, UA.CJK_DECIMAL, r.length > 0);
                var s = Math.abs(e)
                  , o = r;
                if (0 === s)
                    return t[0] + o;
                for (var a = 0; s > 0 && a <= 4; a++) {
                    var l = s % 10;
                    0 === l && mn(i, 1) && "" !== o ? o = t[l] + o : l > 1 || 1 === l && 0 === a || 1 === l && 1 === a && mn(i, 2) || 1 === l && 1 === a && mn(i, 4) && e > 100 || 1 === l && a > 1 && mn(i, 8) ? o = t[l] + (a > 0 ? A[a - 1] : "") + o : 1 === l && a > 0 && (o = A[a - 1] + o),
                    s = Math.floor(s / 10)
                }
                return (e < 0 ? n : "") + o
            }, Hr = function(e, t, A) {
                var n = A ? ". " : ""
                  , r = A ? "、" : ""
                  , i = A ? ", " : ""
                  , s = A ? " " : "";
                switch (t) {
                case UA.DISC:
                    return "•" + s;
                case UA.CIRCLE:
                    return "◦" + s;
                case UA.SQUARE:
                    return "◾" + s;
                case UA.DECIMAL_LEADING_ZERO:
                    var o = Ur(e, 48, 57, !0, n);
                    return o.length < 4 ? "0" + o : o;
                case UA.CJK_DECIMAL:
                    return Fr(e, "〇一二三四五六七八九", r);
                case UA.LOWER_ROMAN:
                    return yr(e, 1, 3999, vr, UA.DECIMAL, n).toLowerCase();
                case UA.UPPER_ROMAN:
                    return yr(e, 1, 3999, vr, UA.DECIMAL, n);
                case UA.LOWER_GREEK:
                    return Ur(e, 945, 969, !1, n);
                case UA.LOWER_ALPHA:
                    return Ur(e, 97, 122, !1, n);
                case UA.UPPER_ALPHA:
                    return Ur(e, 65, 90, !1, n);
                case UA.ARABIC_INDIC:
                    return Ur(e, 1632, 1641, !0, n);
                case UA.ARMENIAN:
                case UA.UPPER_ARMENIAN:
                    return yr(e, 1, 9999, Er, UA.DECIMAL, n);
                case UA.LOWER_ARMENIAN:
                    return yr(e, 1, 9999, Er, UA.DECIMAL, n).toLowerCase();
                case UA.BENGALI:
                    return Ur(e, 2534, 2543, !0, n);
                case UA.CAMBODIAN:
                case UA.KHMER:
                    return Ur(e, 6112, 6121, !0, n);
                case UA.CJK_EARTHLY_BRANCH:
                    return Fr(e, "子丑寅卯辰巳午未申酉戌亥", r);
                case UA.CJK_HEAVENLY_STEM:
                    return Fr(e, "甲乙丙丁戊己庚辛壬癸", r);
                case UA.CJK_IDEOGRAPHIC:
                case UA.TRAD_CHINESE_INFORMAL:
                    return Tr(e, "零一二三四五六七八九", "十百千萬", "負", r, 14);
                case UA.TRAD_CHINESE_FORMAL:
                    return Tr(e, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", r, 15);
                case UA.SIMP_CHINESE_INFORMAL:
                    return Tr(e, "零一二三四五六七八九", "十百千萬", "负", r, 14);
                case UA.SIMP_CHINESE_FORMAL:
                    return Tr(e, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", r, 15);
                case UA.JAPANESE_INFORMAL:
                    return Tr(e, "〇一二三四五六七八九", "十百千万", "マイナス", r, 0);
                case UA.JAPANESE_FORMAL:
                    return Tr(e, "零壱弐参四伍六七八九", "拾百千万", "マイナス", r, 7);
                case UA.KOREAN_HANGUL_FORMAL:
                    return Tr(e, "영일이삼사오육칠팔구", "십백천만", "마이너스", i, 7);
                case UA.KOREAN_HANJA_INFORMAL:
                    return Tr(e, "零一二三四五六七八九", "十百千萬", "마이너스", i, 0);
                case UA.KOREAN_HANJA_FORMAL:
                    return Tr(e, "零壹貳參四五六七八九", "拾百千", "마이너스", i, 7);
                case UA.DEVANAGARI:
                    return Ur(e, 2406, 2415, !0, n);
                case UA.GEORGIAN:
                    return yr(e, 1, 19999, Qr, UA.DECIMAL, n);
                case UA.GUJARATI:
                    return Ur(e, 2790, 2799, !0, n);
                case UA.GURMUKHI:
                    return Ur(e, 2662, 2671, !0, n);
                case UA.HEBREW:
                    return yr(e, 1, 10999, Cr, UA.DECIMAL, n);
                case UA.HIRAGANA:
                    return Fr(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                case UA.HIRAGANA_IROHA:
                    return Fr(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                case UA.KANNADA:
                    return Ur(e, 3302, 3311, !0, n);
                case UA.KATAKANA:
                    return Fr(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
                case UA.KATAKANA_IROHA:
                    return Fr(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
                case UA.LAO:
                    return Ur(e, 3792, 3801, !0, n);
                case UA.MONGOLIAN:
                    return Ur(e, 6160, 6169, !0, n);
                case UA.MYANMAR:
                    return Ur(e, 4160, 4169, !0, n);
                case UA.ORIYA:
                    return Ur(e, 2918, 2927, !0, n);
                case UA.PERSIAN:
                    return Ur(e, 1776, 1785, !0, n);
                case UA.TAMIL:
                    return Ur(e, 3046, 3055, !0, n);
                case UA.TELUGU:
                    return Ur(e, 3174, 3183, !0, n);
                case UA.THAI:
                    return Ur(e, 3664, 3673, !0, n);
                case UA.TIBETAN:
                    return Ur(e, 3872, 3881, !0, n);
                case UA.DECIMAL:
                default:
                    return Ur(e, 48, 57, !0, n)
                }
            }, Sr = function() {
                function e(e, t) {
                    if (this.options = t,
                    this.scrolledElements = [],
                    this.referenceElement = e,
                    this.counters = new wr,
                    this.quoteDepth = 0,
                    !e.ownerDocument)
                        throw new Error("Cloned element does not have an owner document");
                    this.documentElement = this.cloneNode(e.ownerDocument.documentElement)
                }
                return e.prototype.toIFrame = function(e, t) {
                    var A = this
                      , n = xr(e, t);
                    if (!n.contentWindow)
                        return Promise.reject("Unable to find iframe window");
                    var r = e.defaultView.pageXOffset
                      , i = e.defaultView.pageYOffset
                      , s = n.contentWindow
                      , o = s.document
                      , a = Ir(n).then((function() {
                        A.scrolledElements.forEach(Pr),
                        s && (s.scrollTo(t.left, t.top),
                        !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === t.top && s.scrollX === t.left || (o.documentElement.style.top = -t.top + "px",
                        o.documentElement.style.left = -t.left + "px",
                        o.documentElement.style.position = "absolute"));
                        var e = A.options.onclone;
                        return void 0 === A.clonedReferenceElement ? Promise.reject("Error finding the " + A.referenceElement.nodeName + " in the cloned document") : "function" == typeof e ? Promise.resolve().then((function() {
                            return e(o)
                        }
                        )).then((function() {
                            return n
                        }
                        )) : n
                    }
                    ));
                    return o.open(),
                    o.write(kr(document.doctype) + "<html></html>"),
                    Mr(this.referenceElement.ownerDocument, r, i),
                    o.replaceChild(o.adoptNode(this.documentElement), o.documentElement),
                    o.close(),
                    a
                }
                ,
                e.prototype.createElementClone = function(e) {
                    return dr(e) ? this.createCanvasClone(e) : fr(e) ? this.createStyleClone(e) : e.cloneNode(!1)
                }
                ,
                e.prototype.createStyleClone = function(e) {
                    try {
                        var t = e.sheet;
                        if (t && t.cssRules) {
                            var A = [].slice.call(t.cssRules, 0).reduce((function(e, t) {
                                return t && "string" == typeof t.cssText ? e + t.cssText : e
                            }
                            ), "")
                              , n = e.cloneNode(!1);
                            return n.textContent = A,
                            n
                        }
                    } catch (e) {
                        if (bt.getInstance(this.options.id).error("Unable to access cssRules property", e),
                        "SecurityError" !== e.name)
                            throw e
                    }
                    return e.cloneNode(!1)
                }
                ,
                e.prototype.createCanvasClone = function(e) {
                    if (this.options.inlineImages && e.ownerDocument) {
                        var t = e.ownerDocument.createElement("img");
                        try {
                            return t.src = e.toDataURL(),
                            t
                        } catch (e) {
                            bt.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")
                        }
                    }
                    var A = e.cloneNode(!1);
                    try {
                        A.width = e.width,
                        A.height = e.height;
                        var n = e.getContext("2d")
                          , r = A.getContext("2d");
                        return r && (n ? r.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0) : r.drawImage(e, 0, 0)),
                        A
                    } catch (e) {}
                    return A
                }
                ,
                e.prototype.cloneNode = function(e) {
                    if (rr(e))
                        return document.createTextNode(e.data);
                    if (!e.ownerDocument)
                        return e.cloneNode(!1);
                    var t = e.ownerDocument.defaultView;
                    if (sr(e) && t) {
                        var A = this.createElementClone(e)
                          , n = t.getComputedStyle(e)
                          , r = t.getComputedStyle(e, ":before")
                          , i = t.getComputedStyle(e, ":after");
                        this.referenceElement === e && (this.clonedReferenceElement = A),
                        ur(A) && Dr(A);
                        for (var s = this.counters.parse(new Fn(n)), o = this.resolvePseudoContent(e, A, r, gn.BEFORE), a = e.firstChild; a; a = a.nextSibling)
                            ir(a) && (gr(a) || a.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(a)) || this.options.copyStyles && ir(a) && fr(a) || A.appendChild(this.cloneNode(a));
                        o && A.insertBefore(o, A.firstChild);
                        var l = this.resolvePseudoContent(e, A, i, gn.AFTER);
                        return l && A.appendChild(l),
                        this.counters.pop(s),
                        n && this.options.copyStyles && !pr(e) && Or(n, A),
                        0 === e.scrollTop && 0 === e.scrollLeft || this.scrolledElements.push([A, e.scrollLeft, e.scrollTop]),
                        (Br(e) || mr(e)) && (Br(A) || mr(A)) && (A.value = e.value),
                        A
                    }
                    return e.cloneNode(!1)
                }
                ,
                e.prototype.resolvePseudoContent = function(e, t, A, n) {
                    var r = this;
                    if (A) {
                        var i = A.content
                          , s = t.ownerDocument;
                        if (s && i && "none" !== i && "-moz-alt-content" !== i && "none" !== A.display) {
                            this.counters.parse(new Fn(A));
                            var o = new Un(A)
                              , a = s.createElement("html2canvaspseudoelement");
                            return Or(A, a),
                            o.content.forEach((function(t) {
                                if (t.type === d.STRING_TOKEN)
                                    a.appendChild(s.createTextNode(t.value));
                                else if (t.type === d.URL_TOKEN) {
                                    var A = s.createElement("img");
                                    A.src = t.value,
                                    A.style.opacity = "1",
                                    a.appendChild(A)
                                } else if (t.type === d.FUNCTION) {
                                    if ("attr" === t.name) {
                                        var n = t.values.filter(Ie);
                                        n.length && a.appendChild(s.createTextNode(e.getAttribute(n[0].value) || ""))
                                    } else if ("counter" === t.name) {
                                        var i = t.values.filter(Pe)
                                          , l = i[0]
                                          , c = i[1];
                                        if (l && Ie(l)) {
                                            var u = r.counters.getCounterValue(l.value)
                                              , h = c && Ie(c) ? HA.parse(c.value) : UA.DECIMAL;
                                            a.appendChild(s.createTextNode(Hr(u, h, !1)))
                                        }
                                    } else if ("counters" === t.name) {
                                        var p = t.values.filter(Pe)
                                          , f = (l = p[0],
                                        p[1]);
                                        if (c = p[2],
                                        l && Ie(l)) {
                                            var g = r.counters.getCounterValues(l.value)
                                              , B = c && Ie(c) ? HA.parse(c.value) : UA.DECIMAL
                                              , m = f && f.type === d.STRING_TOKEN ? f.value : ""
                                              , w = g.map((function(e) {
                                                return Hr(e, B, !1)
                                            }
                                            )).join(m);
                                            a.appendChild(s.createTextNode(w))
                                        }
                                    }
                                } else if (t.type === d.IDENT_TOKEN)
                                    switch (t.value) {
                                    case "open-quote":
                                        a.appendChild(s.createTextNode(Qn(o.quotes, r.quoteDepth++, !0)));
                                        break;
                                    case "close-quote":
                                        a.appendChild(s.createTextNode(Qn(o.quotes, --r.quoteDepth, !1)))
                                    }
                            }
                            )),
                            a.className = Kr + " " + Lr,
                            t.className += n === gn.BEFORE ? " " + Kr : " " + Lr,
                            a
                        }
                    }
                }
                ,
                e
            }();
            !function(e) {
                e[e.BEFORE = 0] = "BEFORE",
                e[e.AFTER = 1] = "AFTER"
            }(gn || (gn = {}));
            var Nr, xr = function(e, t) {
                var A = e.createElement("iframe");
                return A.className = "html2canvas-container",
                A.style.visibility = "hidden",
                A.style.position = "fixed",
                A.style.left = "-10000px",
                A.style.top = "0px",
                A.style.border = "0",
                A.width = t.width.toString(),
                A.height = t.height.toString(),
                A.scrolling = "no",
                A.setAttribute("data-html2canvas-ignore", "true"),
                e.body.appendChild(A),
                A
            }, Ir = function(e) {
                return new Promise((function(t, A) {
                    var n = e.contentWindow;
                    if (!n)
                        return A("No window assigned for iframe");
                    var r = n.document;
                    n.onload = e.onload = r.onreadystatechange = function() {
                        n.onload = e.onload = r.onreadystatechange = null;
                        var A = setInterval((function() {
                            r.body.childNodes.length > 0 && "complete" === r.readyState && (clearInterval(A),
                            t(e))
                        }
                        ), 50)
                    }
                }
                ))
            }, Or = function(e, t) {
                for (var A = e.length - 1; A >= 0; A--) {
                    var n = e.item(A);
                    "content" !== n && t.style.setProperty(n, e.getPropertyValue(n))
                }
                return t
            }, kr = function(e) {
                var t = "";
                return e && (t += "<!DOCTYPE ",
                e.name && (t += e.name),
                e.internalSubset && (t += e.internalSubset),
                e.publicId && (t += '"' + e.publicId + '"'),
                e.systemId && (t += '"' + e.systemId + '"'),
                t += ">"),
                t
            }, Mr = function(e, t, A) {
                e && e.defaultView && (t !== e.defaultView.pageXOffset || A !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(t, A)
            }, Pr = function(e) {
                var t = e[0]
                  , A = e[1]
                  , n = e[2];
                t.scrollLeft = A,
                t.scrollTop = n
            }, Kr = "___html2canvas___pseudoelement_before", Lr = "___html2canvas___pseudoelement_after", Dr = function(e) {
                Rr(e, "." + Kr + ':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' + Lr + ':after{\n    content: "" !important;\n    display: none !important;\n}')
            }, Rr = function(e, t) {
                var A = e.ownerDocument;
                if (A) {
                    var n = A.createElement("style");
                    n.textContent = t,
                    e.appendChild(n)
                }
            };
            !function(e) {
                e[e.VECTOR = 0] = "VECTOR",
                e[e.BEZIER_CURVE = 1] = "BEZIER_CURVE"
            }(Nr || (Nr = {}));
            var _r, zr = function(e, t) {
                return e.length === t.length && e.some((function(e, A) {
                    return e === t[A]
                }
                ))
            }, Xr = function() {
                function e(e, t) {
                    this.type = Nr.VECTOR,
                    this.x = e,
                    this.y = t
                }
                return e.prototype.add = function(t, A) {
                    return new e(this.x + t,this.y + A)
                }
                ,
                e
            }(), Vr = function(e, t, A) {
                return new Xr(e.x + (t.x - e.x) * A,e.y + (t.y - e.y) * A)
            }, Gr = function() {
                function e(e, t, A, n) {
                    this.type = Nr.BEZIER_CURVE,
                    this.start = e,
                    this.startControl = t,
                    this.endControl = A,
                    this.end = n
                }
                return e.prototype.subdivide = function(t, A) {
                    var n = Vr(this.start, this.startControl, t)
                      , r = Vr(this.startControl, this.endControl, t)
                      , i = Vr(this.endControl, this.end, t)
                      , s = Vr(n, r, t)
                      , o = Vr(r, i, t)
                      , a = Vr(s, o, t);
                    return A ? new e(this.start,n,s,a) : new e(a,o,i,this.end)
                }
                ,
                e.prototype.add = function(t, A) {
                    return new e(this.start.add(t, A),this.startControl.add(t, A),this.endControl.add(t, A),this.end.add(t, A))
                }
                ,
                e.prototype.reverse = function() {
                    return new e(this.end,this.endControl,this.startControl,this.start)
                }
                ,
                e
            }(), Yr = function(e) {
                return e.type === Nr.BEZIER_CURVE
            }, Jr = function(e) {
                var t = e.styles
                  , A = e.bounds
                  , n = Ge(t.borderTopLeftRadius, A.width, A.height)
                  , r = n[0]
                  , i = n[1]
                  , s = Ge(t.borderTopRightRadius, A.width, A.height)
                  , o = s[0]
                  , a = s[1]
                  , l = Ge(t.borderBottomRightRadius, A.width, A.height)
                  , c = l[0]
                  , u = l[1]
                  , d = Ge(t.borderBottomLeftRadius, A.width, A.height)
                  , h = d[0]
                  , p = d[1]
                  , f = [];
                f.push((r + o) / A.width),
                f.push((h + c) / A.width),
                f.push((i + p) / A.height),
                f.push((a + u) / A.height);
                var g = Math.max.apply(Math, f);
                g > 1 && (r /= g,
                i /= g,
                o /= g,
                a /= g,
                c /= g,
                u /= g,
                h /= g,
                p /= g);
                var B = A.width - o
                  , m = A.height - u
                  , w = A.width - c
                  , v = A.height - p
                  , E = t.borderTopWidth
                  , C = t.borderRightWidth
                  , Q = t.borderBottomWidth
                  , y = t.borderLeftWidth
                  , b = Ye(t.paddingTop, e.bounds.width)
                  , U = Ye(t.paddingRight, e.bounds.width)
                  , F = Ye(t.paddingBottom, e.bounds.width)
                  , T = Ye(t.paddingLeft, e.bounds.width);
                this.topLeftBorderBox = r > 0 || i > 0 ? Wr(A.left, A.top, r, i, _r.TOP_LEFT) : new Xr(A.left,A.top),
                this.topRightBorderBox = o > 0 || a > 0 ? Wr(A.left + B, A.top, o, a, _r.TOP_RIGHT) : new Xr(A.left + A.width,A.top),
                this.bottomRightBorderBox = c > 0 || u > 0 ? Wr(A.left + w, A.top + m, c, u, _r.BOTTOM_RIGHT) : new Xr(A.left + A.width,A.top + A.height),
                this.bottomLeftBorderBox = h > 0 || p > 0 ? Wr(A.left, A.top + v, h, p, _r.BOTTOM_LEFT) : new Xr(A.left,A.top + A.height),
                this.topLeftPaddingBox = r > 0 || i > 0 ? Wr(A.left + y, A.top + E, Math.max(0, r - y), Math.max(0, i - E), _r.TOP_LEFT) : new Xr(A.left + y,A.top + E),
                this.topRightPaddingBox = o > 0 || a > 0 ? Wr(A.left + Math.min(B, A.width + y), A.top + E, B > A.width + y ? 0 : o - y, a - E, _r.TOP_RIGHT) : new Xr(A.left + A.width - C,A.top + E),
                this.bottomRightPaddingBox = c > 0 || u > 0 ? Wr(A.left + Math.min(w, A.width - y), A.top + Math.min(m, A.height + E), Math.max(0, c - C), u - Q, _r.BOTTOM_RIGHT) : new Xr(A.left + A.width - C,A.top + A.height - Q),
                this.bottomLeftPaddingBox = h > 0 || p > 0 ? Wr(A.left + y, A.top + v, Math.max(0, h - y), p - Q, _r.BOTTOM_LEFT) : new Xr(A.left + y,A.top + A.height - Q),
                this.topLeftContentBox = r > 0 || i > 0 ? Wr(A.left + y + T, A.top + E + b, Math.max(0, r - (y + T)), Math.max(0, i - (E + b)), _r.TOP_LEFT) : new Xr(A.left + y + T,A.top + E + b),
                this.topRightContentBox = o > 0 || a > 0 ? Wr(A.left + Math.min(B, A.width + y + T), A.top + E + b, B > A.width + y + T ? 0 : o - y + T, a - (E + b), _r.TOP_RIGHT) : new Xr(A.left + A.width - (C + U),A.top + E + b),
                this.bottomRightContentBox = c > 0 || u > 0 ? Wr(A.left + Math.min(w, A.width - (y + T)), A.top + Math.min(m, A.height + E + b), Math.max(0, c - (C + U)), u - (Q + F), _r.BOTTOM_RIGHT) : new Xr(A.left + A.width - (C + U),A.top + A.height - (Q + F)),
                this.bottomLeftContentBox = h > 0 || p > 0 ? Wr(A.left + y + T, A.top + v, Math.max(0, h - (y + T)), p - (Q + F), _r.BOTTOM_LEFT) : new Xr(A.left + y + T,A.top + A.height - (Q + F))
            };
            !function(e) {
                e[e.TOP_LEFT = 0] = "TOP_LEFT",
                e[e.TOP_RIGHT = 1] = "TOP_RIGHT",
                e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
                e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
            }(_r || (_r = {}));
            var Wr = function(e, t, A, n, r) {
                var i = (Math.sqrt(2) - 1) / 3 * 4
                  , s = A * i
                  , o = n * i
                  , a = e + A
                  , l = t + n;
                switch (r) {
                case _r.TOP_LEFT:
                    return new Gr(new Xr(e,l),new Xr(e,l - o),new Xr(a - s,t),new Xr(a,t));
                case _r.TOP_RIGHT:
                    return new Gr(new Xr(e,t),new Xr(e + s,t),new Xr(a,l - o),new Xr(a,l));
                case _r.BOTTOM_RIGHT:
                    return new Gr(new Xr(a,t),new Xr(a,t + o),new Xr(e + s,l),new Xr(e,l));
                case _r.BOTTOM_LEFT:
                default:
                    return new Gr(new Xr(a,l),new Xr(a - s,l),new Xr(e,t + o),new Xr(e,t))
                }
            }
              , $r = function(e) {
                return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox]
            }
              , jr = function(e) {
                return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox]
            }
              , qr = function(e, t, A) {
                this.type = 0,
                this.offsetX = e,
                this.offsetY = t,
                this.matrix = A,
                this.target = 6
            }
              , Zr = function(e, t) {
                this.type = 1,
                this.target = t,
                this.path = e
            }
              , ei = function(e) {
                this.element = e,
                this.inlineLevel = [],
                this.nonInlineLevel = [],
                this.negativeZIndex = [],
                this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
                this.positiveZIndex = [],
                this.nonPositionedFloats = [],
                this.nonPositionedInlineLevel = []
            }
              , ti = function() {
                function e(e, t) {
                    if (this.container = e,
                    this.effects = t.slice(0),
                    this.curves = new Jr(e),
                    null !== e.styles.transform) {
                        var A = e.bounds.left + e.styles.transformOrigin[0].number
                          , n = e.bounds.top + e.styles.transformOrigin[1].number
                          , r = e.styles.transform;
                        this.effects.push(new qr(A,n,r))
                    }
                    if (e.styles.overflowX !== TA.VISIBLE) {
                        var i = $r(this.curves)
                          , s = jr(this.curves);
                        zr(i, s) ? this.effects.push(new Zr(i,6)) : (this.effects.push(new Zr(i,2)),
                        this.effects.push(new Zr(s,4)))
                    }
                }
                return e.prototype.getParentEffects = function() {
                    var e = this.effects.slice(0);
                    if (this.container.styles.overflowX !== TA.VISIBLE) {
                        var t = $r(this.curves)
                          , A = jr(this.curves);
                        zr(t, A) || e.push(new Zr(A,6))
                    }
                    return e
                }
                ,
                e
            }()
              , Ai = function(e, t, A, n) {
                e.container.elements.forEach((function(r) {
                    var i = mn(r.flags, 4)
                      , s = mn(r.flags, 2)
                      , o = new ti(r,e.getParentEffects());
                    mn(r.styles.display, 2048) && n.push(o);
                    var a = mn(r.flags, 8) ? [] : n;
                    if (i || s) {
                        var l = i || r.styles.isPositioned() ? A : t
                          , c = new ei(o);
                        if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
                            var u = r.styles.zIndex.order;
                            if (u < 0) {
                                var d = 0;
                                l.negativeZIndex.some((function(e, t) {
                                    return u > e.element.container.styles.zIndex.order ? (d = t,
                                    !1) : d > 0
                                }
                                )),
                                l.negativeZIndex.splice(d, 0, c)
                            } else if (u > 0) {
                                var h = 0;
                                l.positiveZIndex.some((function(e, t) {
                                    return u > e.element.container.styles.zIndex.order ? (h = t + 1,
                                    !1) : h > 0
                                }
                                )),
                                l.positiveZIndex.splice(h, 0, c)
                            } else
                                l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)
                        } else
                            r.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
                        Ai(o, c, i ? c : A, a)
                    } else
                        r.styles.isInlineLevel() ? t.inlineLevel.push(o) : t.nonInlineLevel.push(o),
                        Ai(o, t, A, a);
                    mn(r.flags, 8) && ni(r, a)
                }
                ))
            }
              , ni = function(e, t) {
                for (var A = e instanceof zn ? e.start : 1, n = e instanceof zn && e.reversed, r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.container instanceof _n && "number" == typeof i.container.value && 0 !== i.container.value && (A = i.container.value),
                    i.listValue = Hr(A, i.container.styles.listStyleType, !0),
                    A += n ? -1 : 1
                }
            }
              , ri = function(e, t, A, n) {
                var r = [];
                return Yr(e) ? r.push(e.subdivide(.5, !1)) : r.push(e),
                Yr(A) ? r.push(A.subdivide(.5, !0)) : r.push(A),
                Yr(n) ? r.push(n.subdivide(.5, !0).reverse()) : r.push(n),
                Yr(t) ? r.push(t.subdivide(.5, !1).reverse()) : r.push(t),
                r
            }
              , ii = function(e) {
                var t = e.bounds
                  , A = e.styles;
                return t.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth))
            }
              , si = function(e) {
                var t = e.styles
                  , A = e.bounds
                  , n = Ye(t.paddingLeft, A.width)
                  , r = Ye(t.paddingRight, A.width)
                  , i = Ye(t.paddingTop, A.width)
                  , s = Ye(t.paddingBottom, A.width);
                return A.add(n + t.borderLeftWidth, i + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + n + r), -(t.borderTopWidth + t.borderBottomWidth + i + s))
            }
              , oi = function(e, t, A) {
                var n = function(e, t) {
                    return 0 === e ? t.bounds : 2 === e ? si(t) : ii(t)
                }(ui(e.styles.backgroundOrigin, t), e)
                  , r = function(e, t) {
                    return e === st.BORDER_BOX ? t.bounds : e === st.CONTENT_BOX ? si(t) : ii(t)
                }(ui(e.styles.backgroundClip, t), e)
                  , i = ci(ui(e.styles.backgroundSize, t), A, n)
                  , s = i[0]
                  , o = i[1]
                  , a = Ge(ui(e.styles.backgroundPosition, t), n.width - s, n.height - o);
                return [di(ui(e.styles.backgroundRepeat, t), a, i, n, r), Math.round(n.left + a[0]), Math.round(n.top + a[1]), s, o]
            }
              , ai = function(e) {
                return Ie(e) && e.value === zt.AUTO
            }
              , li = function(e) {
                return "number" == typeof e
            }
              , ci = function(e, t, A) {
                var n = t[0]
                  , r = t[1]
                  , i = t[2]
                  , s = e[0]
                  , o = e[1];
                if (Re(s) && o && Re(o))
                    return [Ye(s, A.width), Ye(o, A.height)];
                var a = li(i);
                if (Ie(s) && (s.value === zt.CONTAIN || s.value === zt.COVER))
                    return li(i) ? A.width / A.height < i != (s.value === zt.COVER) ? [A.width, A.width / i] : [A.height * i, A.height] : [A.width, A.height];
                var l = li(n)
                  , c = li(r)
                  , u = l || c;
                if (ai(s) && (!o || ai(o)))
                    return l && c ? [n, r] : a || u ? u && a ? [l ? n : r * i, c ? r : n / i] : [l ? n : A.width, c ? r : A.height] : [A.width, A.height];
                if (a) {
                    var d = 0
                      , h = 0;
                    return Re(s) ? d = Ye(s, A.width) : Re(o) && (h = Ye(o, A.height)),
                    ai(s) ? d = h * i : o && !ai(o) || (h = d / i),
                    [d, h]
                }
                var p = null
                  , f = null;
                if (Re(s) ? p = Ye(s, A.width) : o && Re(o) && (f = Ye(o, A.height)),
                null === p || o && !ai(o) || (f = l && c ? p / n * r : A.height),
                null !== f && ai(s) && (p = l && c ? f / r * n : A.width),
                null !== p && null !== f)
                    return [p, f];
                throw new Error("Unable to calculate background-size for element")
            }
              , ui = function(e, t) {
                var A = e[t];
                return void 0 === A ? e[0] : A
            }
              , di = function(e, t, A, n, r) {
                var i = t[0]
                  , s = t[1]
                  , o = A[0]
                  , a = A[1];
                switch (e) {
                case Pt.REPEAT_X:
                    return [new Xr(Math.round(n.left),Math.round(n.top + s)), new Xr(Math.round(n.left + n.width),Math.round(n.top + s)), new Xr(Math.round(n.left + n.width),Math.round(a + n.top + s)), new Xr(Math.round(n.left),Math.round(a + n.top + s))];
                case Pt.REPEAT_Y:
                    return [new Xr(Math.round(n.left + i),Math.round(n.top)), new Xr(Math.round(n.left + i + o),Math.round(n.top)), new Xr(Math.round(n.left + i + o),Math.round(n.height + n.top)), new Xr(Math.round(n.left + i),Math.round(n.height + n.top))];
                case Pt.NO_REPEAT:
                    return [new Xr(Math.round(n.left + i),Math.round(n.top + s)), new Xr(Math.round(n.left + i + o),Math.round(n.top + s)), new Xr(Math.round(n.left + i + o),Math.round(n.top + s + a)), new Xr(Math.round(n.left + i),Math.round(n.top + s + a))];
                default:
                    return [new Xr(Math.round(r.left),Math.round(r.top)), new Xr(Math.round(r.left + r.width),Math.round(r.top)), new Xr(Math.round(r.left + r.width),Math.round(r.height + r.top)), new Xr(Math.round(r.left),Math.round(r.height + r.top))]
                }
            }
              , hi = function() {
                function e(e) {
                    this._data = {},
                    this._document = e
                }
                return e.prototype.parseMetrics = function(e, t) {
                    var A = this._document.createElement("div")
                      , n = this._document.createElement("img")
                      , r = this._document.createElement("span")
                      , i = this._document.body;
                    A.style.visibility = "hidden",
                    A.style.fontFamily = e,
                    A.style.fontSize = t,
                    A.style.margin = "0",
                    A.style.padding = "0",
                    i.appendChild(A),
                    n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    n.width = 1,
                    n.height = 1,
                    n.style.margin = "0",
                    n.style.padding = "0",
                    n.style.verticalAlign = "baseline",
                    r.style.fontFamily = e,
                    r.style.fontSize = t,
                    r.style.margin = "0",
                    r.style.padding = "0",
                    r.appendChild(this._document.createTextNode("Hidden Text")),
                    A.appendChild(r),
                    A.appendChild(n);
                    var s = n.offsetTop - r.offsetTop + 2;
                    A.removeChild(r),
                    A.appendChild(this._document.createTextNode("Hidden Text")),
                    A.style.lineHeight = "normal",
                    n.style.verticalAlign = "super";
                    var o = n.offsetTop - A.offsetTop + 2;
                    return i.removeChild(A),
                    {
                        baseline: s,
                        middle: o
                    }
                }
                ,
                e.prototype.getMetrics = function(e, t) {
                    var A = e + " " + t;
                    return void 0 === this._data[A] && (this._data[A] = this.parseMetrics(e, t)),
                    this._data[A]
                }
                ,
                e
            }()
              , pi = function() {
                function e(e) {
                    this._activeEffects = [],
                    this.canvas = e.canvas ? e.canvas : document.createElement("canvas"),
                    this.ctx = this.canvas.getContext("2d"),
                    this.options = e,
                    this.canvas.width = Math.floor(e.width * e.scale),
                    this.canvas.height = Math.floor(e.height * e.scale),
                    this.canvas.style.width = e.width + "px",
                    this.canvas.style.height = e.height + "px",
                    this.fontMetrics = new hi(document),
                    this.ctx.scale(this.options.scale, this.options.scale),
                    this.ctx.translate(-e.x + e.scrollX, -e.y + e.scrollY),
                    this.ctx.textBaseline = "bottom",
                    this._activeEffects = [],
                    bt.getInstance(e.id).debug("Canvas renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale)
                }
                return e.prototype.applyEffects = function(e, t) {
                    for (var A = this; this._activeEffects.length; )
                        this.popEffect();
                    e.filter((function(e) {
                        return mn(e.target, t)
                    }
                    )).forEach((function(e) {
                        return A.applyEffect(e)
                    }
                    ))
                }
                ,
                e.prototype.applyEffect = function(e) {
                    this.ctx.save(),
                    function(e) {
                        return 0 === e.type
                    }(e) && (this.ctx.translate(e.offsetX, e.offsetY),
                    this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]),
                    this.ctx.translate(-e.offsetX, -e.offsetY)),
                    function(e) {
                        return 1 === e.type
                    }(e) && (this.path(e.path),
                    this.ctx.clip()),
                    this._activeEffects.push(e)
                }
                ,
                e.prototype.popEffect = function() {
                    this._activeEffects.pop(),
                    this.ctx.restore()
                }
                ,
                e.prototype.renderStack = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t;
                        return r(this, (function(A) {
                            switch (A.label) {
                            case 0:
                                return (t = e.element.container.styles).isVisible() ? (this.ctx.globalAlpha = t.opacity,
                                [4, this.renderStackContent(e)]) : [3, 2];
                            case 1:
                                A.sent(),
                                A.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.renderNode = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return r(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
                            case 1:
                                return t.sent(),
                                [4, this.renderNodeContent(e)];
                            case 2:
                                t.sent(),
                                t.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.renderTextWithLetterSpacing = function(e, t) {
                    var A = this;
                    0 === t ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + e.bounds.height) : o(e.text).map((function(e) {
                        return a(e)
                    }
                    )).reduce((function(t, n) {
                        return A.ctx.fillText(n, t, e.bounds.top + e.bounds.height),
                        t + A.ctx.measureText(n).width
                    }
                    ), e.bounds.left)
                }
                ,
                e.prototype.createFontStyle = function(e) {
                    var t = e.fontVariant.filter((function(e) {
                        return "normal" === e || "small-caps" === e
                    }
                    )).join("")
                      , A = e.fontFamily.join(", ")
                      , n = Ne(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
                    return [[e.fontStyle, t, e.fontWeight, n, A].join(" "), A, n]
                }
                ,
                e.prototype.renderTextNode = function(e, t) {
                    return n(this, void 0, void 0, (function() {
                        var A, n, i, s, o = this;
                        return r(this, (function(r) {
                            return A = this.createFontStyle(t),
                            n = A[0],
                            i = A[1],
                            s = A[2],
                            this.ctx.font = n,
                            e.textBounds.forEach((function(e) {
                                o.ctx.fillStyle = et(t.color),
                                o.renderTextWithLetterSpacing(e, t.letterSpacing);
                                var A = t.textShadow;
                                A.length && e.text.trim().length && (A.slice(0).reverse().forEach((function(t) {
                                    o.ctx.shadowColor = et(t.color),
                                    o.ctx.shadowOffsetX = t.offsetX.number * o.options.scale,
                                    o.ctx.shadowOffsetY = t.offsetY.number * o.options.scale,
                                    o.ctx.shadowBlur = t.blur.number,
                                    o.ctx.fillText(e.text, e.bounds.left, e.bounds.top + e.bounds.height)
                                }
                                )),
                                o.ctx.shadowColor = "",
                                o.ctx.shadowOffsetX = 0,
                                o.ctx.shadowOffsetY = 0,
                                o.ctx.shadowBlur = 0),
                                t.textDecorationLine.length && (o.ctx.fillStyle = et(t.textDecorationColor || t.color),
                                t.textDecorationLine.forEach((function(t) {
                                    switch (t) {
                                    case 1:
                                        var A = o.fontMetrics.getMetrics(i, s).baseline;
                                        o.ctx.fillRect(e.bounds.left, Math.round(e.bounds.top + A), e.bounds.width, 1);
                                        break;
                                    case 2:
                                        o.ctx.fillRect(e.bounds.left, Math.round(e.bounds.top), e.bounds.width, 1);
                                        break;
                                    case 3:
                                        var n = o.fontMetrics.getMetrics(i, s).middle;
                                        o.ctx.fillRect(e.bounds.left, Math.ceil(e.bounds.top + n), e.bounds.width, 1)
                                    }
                                }
                                )))
                            }
                            )),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.renderReplacedElement = function(e, t, A) {
                    if (A && e.intrinsicWidth > 0 && e.intrinsicHeight > 0) {
                        var n = si(e)
                          , r = jr(t);
                        this.path(r),
                        this.ctx.save(),
                        this.ctx.clip(),
                        this.ctx.drawImage(A, 0, 0, e.intrinsicWidth, e.intrinsicHeight, n.left, n.top, n.width, n.height),
                        this.ctx.restore()
                    }
                }
                ,
                e.prototype.renderNodeContent = function(t) {
                    return n(this, void 0, void 0, (function() {
                        var A, n, s, o, a, l, c, u, h, p, f, g, B, m;
                        return r(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                this.applyEffects(t.effects, 4),
                                A = t.container,
                                n = t.curves,
                                s = A.styles,
                                o = 0,
                                a = A.textNodes,
                                r.label = 1;
                            case 1:
                                return o < a.length ? (l = a[o],
                                [4, this.renderTextNode(l, s)]) : [3, 4];
                            case 2:
                                r.sent(),
                                r.label = 3;
                            case 3:
                                return o++,
                                [3, 1];
                            case 4:
                                if (!(A instanceof Ln))
                                    return [3, 8];
                                r.label = 5;
                            case 5:
                                return r.trys.push([5, 7, , 8]),
                                [4, this.options.cache.match(A.src)];
                            case 6:
                                return g = r.sent(),
                                this.renderReplacedElement(A, n, g),
                                [3, 8];
                            case 7:
                                return r.sent(),
                                bt.getInstance(this.options.id).error("Error loading image " + A.src),
                                [3, 8];
                            case 8:
                                if (A instanceof Dn && this.renderReplacedElement(A, n, A.canvas),
                                !(A instanceof Rn))
                                    return [3, 12];
                                r.label = 9;
                            case 9:
                                return r.trys.push([9, 11, , 12]),
                                [4, this.options.cache.match(A.svg)];
                            case 10:
                                return g = r.sent(),
                                this.renderReplacedElement(A, n, g),
                                [3, 12];
                            case 11:
                                return r.sent(),
                                bt.getInstance(this.options.id).error("Error loading svg " + A.svg.substring(0, 255)),
                                [3, 12];
                            case 12:
                                return A instanceof jn && A.tree ? [4, new e({
                                    id: this.options.id,
                                    scale: this.options.scale,
                                    backgroundColor: A.backgroundColor,
                                    x: 0,
                                    y: 0,
                                    scrollX: 0,
                                    scrollY: 0,
                                    width: A.width,
                                    height: A.height,
                                    cache: this.options.cache,
                                    windowWidth: A.width,
                                    windowHeight: A.height
                                }).render(A.tree)] : [3, 14];
                            case 13:
                                c = r.sent(),
                                A.width && A.height && this.ctx.drawImage(c, 0, 0, A.width, A.height, A.bounds.left, A.bounds.top, A.bounds.width, A.bounds.height),
                                r.label = 14;
                            case 14:
                                if (A instanceof Yn && (u = Math.min(A.bounds.width, A.bounds.height),
                                "checkbox" === A.type ? A.checked && (this.ctx.save(),
                                this.path([new Xr(A.bounds.left + .39363 * u,A.bounds.top + .79 * u), new Xr(A.bounds.left + .16 * u,A.bounds.top + .5549 * u), new Xr(A.bounds.left + .27347 * u,A.bounds.top + .44071 * u), new Xr(A.bounds.left + .39694 * u,A.bounds.top + .5649 * u), new Xr(A.bounds.left + .72983 * u,A.bounds.top + .23 * u), new Xr(A.bounds.left + .84 * u,A.bounds.top + .34085 * u), new Xr(A.bounds.left + .39363 * u,A.bounds.top + .79 * u)]),
                                this.ctx.fillStyle = et(707406591),
                                this.ctx.fill(),
                                this.ctx.restore()) : "radio" === A.type && A.checked && (this.ctx.save(),
                                this.ctx.beginPath(),
                                this.ctx.arc(A.bounds.left + u / 2, A.bounds.top + u / 2, u / 4, 0, 2 * Math.PI, !0),
                                this.ctx.fillStyle = et(707406591),
                                this.ctx.fill(),
                                this.ctx.restore())),
                                fi(A) && A.value.length) {
                                    switch (this.ctx.font = this.createFontStyle(s)[0],
                                    this.ctx.fillStyle = et(s.color),
                                    this.ctx.textBaseline = "middle",
                                    this.ctx.textAlign = Bi(A.styles.textAlign),
                                    m = si(A),
                                    h = 0,
                                    A.styles.textAlign) {
                                    case PA.CENTER:
                                        h += m.width / 2;
                                        break;
                                    case PA.RIGHT:
                                        h += m.width
                                    }
                                    p = m.add(h, 0, 0, -m.height / 2 + 1),
                                    this.ctx.save(),
                                    this.path([new Xr(m.left,m.top), new Xr(m.left + m.width,m.top), new Xr(m.left + m.width,m.top + m.height), new Xr(m.left,m.top + m.height)]),
                                    this.ctx.clip(),
                                    this.renderTextWithLetterSpacing(new Sn(A.value,p), s.letterSpacing),
                                    this.ctx.restore(),
                                    this.ctx.textBaseline = "bottom",
                                    this.ctx.textAlign = "left"
                                }
                                if (!mn(A.styles.display, 2048))
                                    return [3, 20];
                                if (null === A.styles.listStyleImage)
                                    return [3, 19];
                                if ((f = A.styles.listStyleImage).type !== ct.URL)
                                    return [3, 18];
                                g = void 0,
                                B = f.url,
                                r.label = 15;
                            case 15:
                                return r.trys.push([15, 17, , 18]),
                                [4, this.options.cache.match(B)];
                            case 16:
                                return g = r.sent(),
                                this.ctx.drawImage(g, A.bounds.left - (g.width + 10), A.bounds.top),
                                [3, 18];
                            case 17:
                                return r.sent(),
                                bt.getInstance(this.options.id).error("Error loading list-style-image " + B),
                                [3, 18];
                            case 18:
                                return [3, 20];
                            case 19:
                                t.listValue && A.styles.listStyleType !== UA.NONE && (this.ctx.font = this.createFontStyle(s)[0],
                                this.ctx.fillStyle = et(s.color),
                                this.ctx.textBaseline = "middle",
                                this.ctx.textAlign = "right",
                                m = new i(A.bounds.left,A.bounds.top + Ye(A.styles.paddingTop, A.bounds.width),A.bounds.width,function(e, t) {
                                    return Ie(e) && "normal" === e.value ? 1.2 * t : e.type === d.NUMBER_TOKEN ? t * e.number : Re(e) ? Ye(e, t) : t
                                }(s.lineHeight, s.fontSize.number) / 2 + 1),
                                this.renderTextWithLetterSpacing(new Sn(t.listValue,m), s.letterSpacing),
                                this.ctx.textBaseline = "bottom",
                                this.ctx.textAlign = "left"),
                                r.label = 20;
                            case 20:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.renderStackContent = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, A, n, i, s, o, a, l, c, u, d, h, p, f, g;
                        return r(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.renderNodeBackgroundAndBorders(e.element)];
                            case 1:
                                r.sent(),
                                t = 0,
                                A = e.negativeZIndex,
                                r.label = 2;
                            case 2:
                                return t < A.length ? (g = A[t],
                                [4, this.renderStack(g)]) : [3, 5];
                            case 3:
                                r.sent(),
                                r.label = 4;
                            case 4:
                                return t++,
                                [3, 2];
                            case 5:
                                return [4, this.renderNodeContent(e.element)];
                            case 6:
                                r.sent(),
                                n = 0,
                                i = e.nonInlineLevel,
                                r.label = 7;
                            case 7:
                                return n < i.length ? (g = i[n],
                                [4, this.renderNode(g)]) : [3, 10];
                            case 8:
                                r.sent(),
                                r.label = 9;
                            case 9:
                                return n++,
                                [3, 7];
                            case 10:
                                s = 0,
                                o = e.nonPositionedFloats,
                                r.label = 11;
                            case 11:
                                return s < o.length ? (g = o[s],
                                [4, this.renderStack(g)]) : [3, 14];
                            case 12:
                                r.sent(),
                                r.label = 13;
                            case 13:
                                return s++,
                                [3, 11];
                            case 14:
                                a = 0,
                                l = e.nonPositionedInlineLevel,
                                r.label = 15;
                            case 15:
                                return a < l.length ? (g = l[a],
                                [4, this.renderStack(g)]) : [3, 18];
                            case 16:
                                r.sent(),
                                r.label = 17;
                            case 17:
                                return a++,
                                [3, 15];
                            case 18:
                                c = 0,
                                u = e.inlineLevel,
                                r.label = 19;
                            case 19:
                                return c < u.length ? (g = u[c],
                                [4, this.renderNode(g)]) : [3, 22];
                            case 20:
                                r.sent(),
                                r.label = 21;
                            case 21:
                                return c++,
                                [3, 19];
                            case 22:
                                d = 0,
                                h = e.zeroOrAutoZIndexOrTransformedOrOpacity,
                                r.label = 23;
                            case 23:
                                return d < h.length ? (g = h[d],
                                [4, this.renderStack(g)]) : [3, 26];
                            case 24:
                                r.sent(),
                                r.label = 25;
                            case 25:
                                return d++,
                                [3, 23];
                            case 26:
                                p = 0,
                                f = e.positiveZIndex,
                                r.label = 27;
                            case 27:
                                return p < f.length ? (g = f[p],
                                [4, this.renderStack(g)]) : [3, 30];
                            case 28:
                                r.sent(),
                                r.label = 29;
                            case 29:
                                return p++,
                                [3, 27];
                            case 30:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.mask = function(e) {
                    this.ctx.beginPath(),
                    this.ctx.moveTo(0, 0),
                    this.ctx.lineTo(this.canvas.width, 0),
                    this.ctx.lineTo(this.canvas.width, this.canvas.height),
                    this.ctx.lineTo(0, this.canvas.height),
                    this.ctx.lineTo(0, 0),
                    this.formatPath(e.slice(0).reverse()),
                    this.ctx.closePath()
                }
                ,
                e.prototype.path = function(e) {
                    this.ctx.beginPath(),
                    this.formatPath(e),
                    this.ctx.closePath()
                }
                ,
                e.prototype.formatPath = function(e) {
                    var t = this;
                    e.forEach((function(e, A) {
                        var n = Yr(e) ? e.start : e;
                        0 === A ? t.ctx.moveTo(n.x, n.y) : t.ctx.lineTo(n.x, n.y),
                        Yr(e) && t.ctx.bezierCurveTo(e.startControl.x, e.startControl.y, e.endControl.x, e.endControl.y, e.end.x, e.end.y)
                    }
                    ))
                }
                ,
                e.prototype.renderRepeat = function(e, t, A, n) {
                    this.path(e),
                    this.ctx.fillStyle = t,
                    this.ctx.translate(A, n),
                    this.ctx.fill(),
                    this.ctx.translate(-A, -n)
                }
                ,
                e.prototype.resizeImage = function(e, t, A) {
                    if (e.width === t && e.height === A)
                        return e;
                    var n = this.canvas.ownerDocument.createElement("canvas");
                    return n.width = t,
                    n.height = A,
                    n.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, t, A),
                    n
                }
                ,
                e.prototype.renderBackgroundImage = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, A, n, i, s, o;
                        return r(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                t = e.styles.backgroundImage.length - 1,
                                A = function(A) {
                                    var i, s, o, a, l, c, u, d, h, p, f, g, B, m, w, v, E, C, Q, y, b, U, F, T, H, S, N, x, I, O, k;
                                    return r(this, (function(r) {
                                        switch (r.label) {
                                        case 0:
                                            if (A.type !== ct.URL)
                                                return [3, 5];
                                            i = void 0,
                                            s = A.url,
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]),
                                            [4, n.options.cache.match(s)];
                                        case 2:
                                            return i = r.sent(),
                                            [3, 4];
                                        case 3:
                                            return r.sent(),
                                            bt.getInstance(n.options.id).error("Error loading background-image " + s),
                                            [3, 4];
                                        case 4:
                                            return i && (o = oi(e, t, [i.width, i.height, i.width / i.height]),
                                            v = o[0],
                                            U = o[1],
                                            F = o[2],
                                            Q = o[3],
                                            y = o[4],
                                            m = n.ctx.createPattern(n.resizeImage(i, Q, y), "repeat"),
                                            n.renderRepeat(v, m, U, F)),
                                            [3, 6];
                                        case 5:
                                            A.type === ct.LINEAR_GRADIENT ? (a = oi(e, t, [null, null, null]),
                                            v = a[0],
                                            U = a[1],
                                            F = a[2],
                                            Q = a[3],
                                            y = a[4],
                                            l = Bt(A.angle, Q, y),
                                            c = l[0],
                                            u = l[1],
                                            d = l[2],
                                            h = l[3],
                                            p = l[4],
                                            (f = document.createElement("canvas")).width = Q,
                                            f.height = y,
                                            g = f.getContext("2d"),
                                            B = g.createLinearGradient(u, h, d, p),
                                            gt(A.stops, c).forEach((function(e) {
                                                return B.addColorStop(e.stop, et(e.color))
                                            }
                                            )),
                                            g.fillStyle = B,
                                            g.fillRect(0, 0, Q, y),
                                            Q > 0 && y > 0 && (m = n.ctx.createPattern(f, "repeat"),
                                            n.renderRepeat(v, m, U, F))) : function(e) {
                                                return e.type === ct.RADIAL_GRADIENT
                                            }(A) && (w = oi(e, t, [null, null, null]),
                                            v = w[0],
                                            E = w[1],
                                            C = w[2],
                                            Q = w[3],
                                            y = w[4],
                                            b = 0 === A.position.length ? [Xe] : A.position,
                                            U = Ye(b[0], Q),
                                            F = Ye(b[b.length - 1], y),
                                            T = function(e, t, A, n, r) {
                                                var i = 0
                                                  , s = 0;
                                                switch (e.size) {
                                                case dt.CLOSEST_SIDE:
                                                    e.shape === ut.CIRCLE ? i = s = Math.min(Math.abs(t), Math.abs(t - n), Math.abs(A), Math.abs(A - r)) : e.shape === ut.ELLIPSE && (i = Math.min(Math.abs(t), Math.abs(t - n)),
                                                    s = Math.min(Math.abs(A), Math.abs(A - r)));
                                                    break;
                                                case dt.CLOSEST_CORNER:
                                                    if (e.shape === ut.CIRCLE)
                                                        i = s = Math.min(mt(t, A), mt(t, A - r), mt(t - n, A), mt(t - n, A - r));
                                                    else if (e.shape === ut.ELLIPSE) {
                                                        var o = Math.min(Math.abs(A), Math.abs(A - r)) / Math.min(Math.abs(t), Math.abs(t - n))
                                                          , a = wt(n, r, t, A, !0)
                                                          , l = a[0]
                                                          , c = a[1];
                                                        s = o * (i = mt(l - t, (c - A) / o))
                                                    }
                                                    break;
                                                case dt.FARTHEST_SIDE:
                                                    e.shape === ut.CIRCLE ? i = s = Math.max(Math.abs(t), Math.abs(t - n), Math.abs(A), Math.abs(A - r)) : e.shape === ut.ELLIPSE && (i = Math.max(Math.abs(t), Math.abs(t - n)),
                                                    s = Math.max(Math.abs(A), Math.abs(A - r)));
                                                    break;
                                                case dt.FARTHEST_CORNER:
                                                    if (e.shape === ut.CIRCLE)
                                                        i = s = Math.max(mt(t, A), mt(t, A - r), mt(t - n, A), mt(t - n, A - r));
                                                    else if (e.shape === ut.ELLIPSE) {
                                                        o = Math.max(Math.abs(A), Math.abs(A - r)) / Math.max(Math.abs(t), Math.abs(t - n));
                                                        var u = wt(n, r, t, A, !1);
                                                        l = u[0],
                                                        c = u[1],
                                                        s = o * (i = mt(l - t, (c - A) / o))
                                                    }
                                                }
                                                return Array.isArray(e.size) && (i = Ye(e.size[0], n),
                                                s = 2 === e.size.length ? Ye(e.size[1], r) : i),
                                                [i, s]
                                            }(A, U, F, Q, y),
                                            H = T[0],
                                            S = T[1],
                                            H > 0 && H > 0 && (N = n.ctx.createRadialGradient(E + U, C + F, 0, E + U, C + F, H),
                                            gt(A.stops, 2 * H).forEach((function(e) {
                                                return N.addColorStop(e.stop, et(e.color))
                                            }
                                            )),
                                            n.path(v),
                                            n.ctx.fillStyle = N,
                                            H !== S ? (x = e.bounds.left + .5 * e.bounds.width,
                                            I = e.bounds.top + .5 * e.bounds.height,
                                            k = 1 / (O = S / H),
                                            n.ctx.save(),
                                            n.ctx.translate(x, I),
                                            n.ctx.transform(1, 0, 0, O, 0, 0),
                                            n.ctx.translate(-x, -I),
                                            n.ctx.fillRect(E, k * (C - I) + I, Q, y * k),
                                            n.ctx.restore()) : n.ctx.fill())),
                                            r.label = 6;
                                        case 6:
                                            return t--,
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ,
                                n = this,
                                i = 0,
                                s = e.styles.backgroundImage.slice(0).reverse(),
                                a.label = 1;
                            case 1:
                                return i < s.length ? (o = s[i],
                                [5, A(o)]) : [3, 4];
                            case 2:
                                a.sent(),
                                a.label = 3;
                            case 3:
                                return i++,
                                [3, 1];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.renderBorder = function(e, t, A) {
                    return n(this, void 0, void 0, (function() {
                        return r(this, (function(n) {
                            return this.path(function(e, t) {
                                switch (t) {
                                case 0:
                                    return ri(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
                                case 1:
                                    return ri(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
                                case 2:
                                    return ri(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
                                case 3:
                                default:
                                    return ri(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox)
                                }
                            }(A, t)),
                            this.ctx.fillStyle = et(e),
                            this.ctx.fill(),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.renderNodeBackgroundAndBorders = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, A, n, i, s, o, a, l, c = this;
                        return r(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return this.applyEffects(e.effects, 2),
                                t = e.container.styles,
                                A = !Ze(t.backgroundColor) || t.backgroundImage.length,
                                n = [{
                                    style: t.borderTopStyle,
                                    color: t.borderTopColor
                                }, {
                                    style: t.borderRightStyle,
                                    color: t.borderRightColor
                                }, {
                                    style: t.borderBottomStyle,
                                    color: t.borderBottomColor
                                }, {
                                    style: t.borderLeftStyle,
                                    color: t.borderLeftColor
                                }],
                                i = gi(ui(t.backgroundClip, 0), e.curves),
                                A || t.boxShadow.length ? (this.ctx.save(),
                                this.path(i),
                                this.ctx.clip(),
                                Ze(t.backgroundColor) || (this.ctx.fillStyle = et(t.backgroundColor),
                                this.ctx.fill()),
                                [4, this.renderBackgroundImage(e.container)]) : [3, 2];
                            case 1:
                                r.sent(),
                                this.ctx.restore(),
                                t.boxShadow.slice(0).reverse().forEach((function(t) {
                                    c.ctx.save();
                                    var A, n, r, i, s, o = $r(e.curves), a = t.inset ? 0 : 1e4, l = (A = o,
                                    n = -a + (t.inset ? 1 : -1) * t.spread.number,
                                    r = (t.inset ? 1 : -1) * t.spread.number,
                                    i = t.spread.number * (t.inset ? -2 : 2),
                                    s = t.spread.number * (t.inset ? -2 : 2),
                                    A.map((function(e, t) {
                                        switch (t) {
                                        case 0:
                                            return e.add(n, r);
                                        case 1:
                                            return e.add(n + i, r);
                                        case 2:
                                            return e.add(n + i, r + s);
                                        case 3:
                                            return e.add(n, r + s)
                                        }
                                        return e
                                    }
                                    )));
                                    t.inset ? (c.path(o),
                                    c.ctx.clip(),
                                    c.mask(l)) : (c.mask(o),
                                    c.ctx.clip(),
                                    c.path(l)),
                                    c.ctx.shadowOffsetX = t.offsetX.number + a,
                                    c.ctx.shadowOffsetY = t.offsetY.number,
                                    c.ctx.shadowColor = et(t.color),
                                    c.ctx.shadowBlur = t.blur.number,
                                    c.ctx.fillStyle = t.inset ? et(t.color) : "rgba(0,0,0,1)",
                                    c.ctx.fill(),
                                    c.ctx.restore()
                                }
                                )),
                                r.label = 2;
                            case 2:
                                s = 0,
                                o = 0,
                                a = n,
                                r.label = 3;
                            case 3:
                                return o < a.length ? (l = a[o]).style === Gt.NONE || Ze(l.color) ? [3, 5] : [4, this.renderBorder(l.color, s, e.curves)] : [3, 7];
                            case 4:
                                r.sent(),
                                r.label = 5;
                            case 5:
                                s++,
                                r.label = 6;
                            case 6:
                                return o++,
                                [3, 3];
                            case 7:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.render = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t;
                        return r(this, (function(A) {
                            switch (A.label) {
                            case 0:
                                return this.options.backgroundColor && (this.ctx.fillStyle = et(this.options.backgroundColor),
                                this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height)),
                                n = new ti(e,[]),
                                r = new ei(n),
                                Ai(n, r, r, i = []),
                                ni(n.container, i),
                                t = r,
                                [4, this.renderStack(t)];
                            case 1:
                                return A.sent(),
                                this.applyEffects([], 2),
                                [2, this.canvas]
                            }
                            var n, r, i
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }()
              , fi = function(e) {
                return e instanceof Wn || e instanceof Jn || e instanceof Yn && "radio" !== e.type && "checkbox" !== e.type
            }
              , gi = function(e, t) {
                switch (e) {
                case st.BORDER_BOX:
                    return $r(t);
                case st.CONTENT_BOX:
                    return function(e) {
                        return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox]
                    }(t);
                case st.PADDING_BOX:
                default:
                    return jr(t)
                }
            }
              , Bi = function(e) {
                switch (e) {
                case PA.CENTER:
                    return "center";
                case PA.RIGHT:
                    return "right";
                case PA.LEFT:
                default:
                    return "left"
                }
            }
              , mi = function() {
                function e(e) {
                    this.canvas = e.canvas ? e.canvas : document.createElement("canvas"),
                    this.ctx = this.canvas.getContext("2d"),
                    this.options = e,
                    this.canvas.width = Math.floor(e.width * e.scale),
                    this.canvas.height = Math.floor(e.height * e.scale),
                    this.canvas.style.width = e.width + "px",
                    this.canvas.style.height = e.height + "px",
                    this.ctx.scale(this.options.scale, this.options.scale),
                    this.ctx.translate(-e.x + e.scrollX, -e.y + e.scrollY),
                    bt.getInstance(e.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale)
                }
                return e.prototype.render = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, A;
                        return r(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return t = Ct(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, e),
                                [4, wi(t)];
                            case 1:
                                return A = n.sent(),
                                this.options.backgroundColor && (this.ctx.fillStyle = et(this.options.backgroundColor),
                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                                this.ctx.drawImage(A, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                                [2, this.canvas]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }()
              , wi = function(e) {
                return new Promise((function(t, A) {
                    var n = new Image;
                    n.onload = function() {
                        t(n)
                    }
                    ,
                    n.onerror = A,
                    n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(e))
                }
                ))
            }
              , vi = function(e) {
                return qe(Se.create(e).parseComponentValue())
            };
            Ut.setContext(window);
            var Ei = function(e, t) {
                return n(void 0, void 0, void 0, (function() {
                    var n, o, a, l, c, u, d, h, p, f, g, B, m, w, v, E, C, Q, y, b, U, F, T;
                    return r(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            if (!(n = e.ownerDocument))
                                throw new Error("Element is not attached to a Document");
                            if (!(o = n.defaultView))
                                throw new Error("Document is not attached to a Window");
                            return a = (Math.round(1e3 * Math.random()) + Date.now()).toString(16),
                            l = ur(e) || "HTML" === e.tagName ? function(e) {
                                var t = e.body
                                  , A = e.documentElement;
                                if (!t || !A)
                                    throw new Error("Unable to get document size");
                                var n = Math.max(Math.max(t.scrollWidth, A.scrollWidth), Math.max(t.offsetWidth, A.offsetWidth), Math.max(t.clientWidth, A.clientWidth))
                                  , r = Math.max(Math.max(t.scrollHeight, A.scrollHeight), Math.max(t.offsetHeight, A.offsetHeight), Math.max(t.clientHeight, A.clientHeight));
                                return new i(0,0,n,r)
                            }(n) : s(e),
                            c = l.width,
                            u = l.height,
                            d = l.left,
                            h = l.top,
                            p = A({}, {
                                allowTaint: !1,
                                imageTimeout: 15e3,
                                proxy: void 0,
                                useCORS: !1
                            }, t),
                            f = {
                                backgroundColor: "#ffffff",
                                cache: t.cache ? t.cache : Ut.create(a, p),
                                logging: !0,
                                removeContainer: !0,
                                foreignObjectRendering: !1,
                                scale: o.devicePixelRatio || 1,
                                windowWidth: o.innerWidth,
                                windowHeight: o.innerHeight,
                                scrollX: o.pageXOffset,
                                scrollY: o.pageYOffset,
                                x: d,
                                y: h,
                                width: Math.ceil(c),
                                height: Math.ceil(u),
                                id: a
                            },
                            g = A({}, f, p, t),
                            B = new i(g.scrollX,g.scrollY,g.windowWidth,g.windowHeight),
                            bt.create(a),
                            bt.getInstance(a).debug("Starting document clone"),
                            m = new Sr(e,{
                                id: a,
                                onclone: g.onclone,
                                ignoreElements: g.ignoreElements,
                                inlineImages: g.foreignObjectRendering,
                                copyStyles: g.foreignObjectRendering
                            }),
                            (w = m.clonedReferenceElement) ? [4, m.toIFrame(n, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                        case 1:
                            return v = r.sent(),
                            E = n.documentElement ? vi(getComputedStyle(n.documentElement).backgroundColor) : lt.TRANSPARENT,
                            C = n.body ? vi(getComputedStyle(n.body).backgroundColor) : lt.TRANSPARENT,
                            Q = t.backgroundColor,
                            y = "string" == typeof Q ? vi(Q) : null === Q ? lt.TRANSPARENT : 4294967295,
                            b = e === n.documentElement ? Ze(E) ? Ze(C) ? y : C : E : y,
                            U = {
                                id: a,
                                cache: g.cache,
                                backgroundColor: b,
                                scale: g.scale,
                                x: g.x,
                                y: g.y,
                                scrollX: g.scrollX,
                                scrollY: g.scrollY,
                                width: g.width,
                                height: g.height,
                                windowWidth: g.windowWidth,
                                windowHeight: g.windowHeight
                            },
                            g.foreignObjectRendering ? (bt.getInstance(a).debug("Document cloned, using foreign object rendering"),
                            [4, new mi(U).render(w)]) : [3, 3];
                        case 2:
                            return F = r.sent(),
                            [3, 5];
                        case 3:
                            return bt.getInstance(a).debug("Document cloned, using computed rendering"),
                            Ut.attachInstance(g.cache),
                            bt.getInstance(a).debug("Starting DOM parsing"),
                            T = tr(w),
                            Ut.detachInstance(),
                            b === T.styles.backgroundColor && (T.styles.backgroundColor = lt.TRANSPARENT),
                            bt.getInstance(a).debug("Starting renderer"),
                            [4, new pi(U).render(T)];
                        case 4:
                            F = r.sent(),
                            r.label = 5;
                        case 5:
                            return !0 === g.removeContainer && (Ci(v) || bt.getInstance(a).error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                            bt.getInstance(a).debug("Finished rendering"),
                            bt.destroy(a),
                            Ut.destroy(a),
                            [2, F]
                        }
                    }
                    ))
                }
                ))
            }
              , Ci = function(e) {
                return !!e.parentNode && (e.parentNode.removeChild(e),
                !0)
            };
            return function(e, t) {
                return void 0 === t && (t = {}),
                Ei(e, t)
            }
        }()
    },
    yc4i: function(e, t, A) {
        "use strict";
        A("TPLH");
        var n = A("heXC")
          , r = A("+ypN")
          , i = A("VWt6")
          , s = A("fBKz")
          , o = A("Xbfs")
          , a = A("OGh1")
          , l = o("species")
          , c = !i((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                },
                e
            }
            ,
            "7" !== "".replace(e, "$<a>")
        }
        ))
          , u = function() {
            var e = /(?:)/
              , t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            }
            ;
            var A = "ab".split(e);
            return 2 === A.length && "a" === A[0] && "b" === A[1]
        }();
        e.exports = function(e, t, A) {
            var d = o(e)
              , h = !i((function() {
                var t = {};
                return t[d] = function() {
                    return 7
                }
                ,
                7 != ""[e](t)
            }
            ))
              , p = h ? !i((function() {
                var t = !1
                  , A = /a/;
                return A.exec = function() {
                    return t = !0,
                    null
                }
                ,
                "split" === e && (A.constructor = {},
                A.constructor[l] = function() {
                    return A
                }
                ),
                A[d](""),
                !t
            }
            )) : void 0;
            if (!h || !p || "replace" === e && !c || "split" === e && !u) {
                var f = /./[d]
                  , g = A(s, d, ""[e], (function(e, t, A, n, r) {
                    return t.exec === a ? h && !r ? {
                        done: !0,
                        value: f.call(t, A, n)
                    } : {
                        done: !0,
                        value: e.call(A, t, n)
                    } : {
                        done: !1
                    }
                }
                ))
                  , B = g[0]
                  , m = g[1];
                n(String.prototype, e, B),
                r(RegExp.prototype, d, 2 == t ? function(e, t) {
                    return m.call(e, this, t)
                }
                : function(e) {
                    return m.call(e, this)
                }
                )
            }
        }
    }
}, [[24, "runtime", "vendor"]]]);
//# sourceMappingURL=https://msstest.sankuai.com/v1/mss_c50f95e950c74fa2aeaa9d9bff3475ac/nine-namespace/meitianzhuan-2d785bdc-sourcemap/production/sourcemap/js/retail/recommendPage.d7d6415707bc5d9349af.js.map
