/*! For license information please see main.min.js.LICENSE.txt */
(()=>{
    var e = {
        634: e=>{
            window,
            e.exports = function(e) {
                var t = {};
                function n(i) {
                    if (t[i])
                        return t[i].exports;
                    var s = t[i] = {
                        i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(s.exports, s, s.exports, n),
                    s.l = !0,
                    s.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, i) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: i
                    })
                }
                ,
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var i = Object.create(null);
                    if (n.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var s in e)
                            n.d(i, s, function(t) {
                                return e[t]
                            }
                            .bind(null, s));
                    return i
                }
                ,
                n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return n.d(t, "a", t),
                    t
                }
                ,
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "",
                n(n.s = 2)
            }([function(e, t, n) {
                window,
                e.exports = function(e) {
                    var t = {};
                    function n(i) {
                        if (t[i])
                            return t[i].exports;
                        var s = t[i] = {
                            i,
                            l: !1,
                            exports: {}
                        };
                        return e[i].call(s.exports, s, s.exports, n),
                        s.l = !0,
                        s.exports
                    }
                    return n.m = e,
                    n.c = t,
                    n.d = function(e, t, i) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: i
                        })
                    }
                    ,
                    n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    n.t = function(e, t) {
                        if (1 & t && (e = n(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var i = Object.create(null);
                        if (n.r(i),
                        Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                            for (var s in e)
                                n.d(i, s, function(t) {
                                    return e[t]
                                }
                                .bind(null, s));
                        return i
                    }
                    ,
                    n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return n.d(t, "a", t),
                        t
                    }
                    ,
                    n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    n.p = "",
                    n(n.s = 0)
                }([function(e, t, n) {
                    "use strict";
                    var i;
                    function s(e, t) {
                        if (e)
                            for (var n in t) {
                                var i = "number" == typeof t[n] ? t[n] + "px" : t[n];
                                e.style[n] = i + ""
                            }
                    }
                    n.r(t),
                    n.d(t, "InputAutoWidth", (function() {
                        return r
                    }
                    ));
                    var r = function() {
                        function e(e, t) {
                            this.cache = {},
                            this.options = t,
                            this.input = e,
                            this.trigger(),
                            this.eventHandler = this.trigger.bind(this),
                            this.input.addEventListener("blur", this.eventHandler),
                            this.input.addEventListener("input", this.eventHandler),
                            this.input.addEventListener("keyup", this.eventHandler),
                            this.input.addEventListener("keydown", this.eventHandler)
                        }
                        return e.prototype.measureString = function(e) {
                            return e ? this.cache && "number" == typeof this.cache[e] ? this.cache[e] : (i || (s(i = document.createElement("span"), {
                                position: "absolute",
                                top: -99999,
                                left: -99999,
                                width: "auto",
                                padding: 0,
                                whiteSpace: "pre"
                            }),
                            document.body.appendChild(i)),
                            i.textContent = e,
                            function(e, t, n) {
                                if (e && t) {
                                    var i = getComputedStyle(e)
                                      , r = {};
                                    if (n && n.length)
                                        for (var o = 0, a = n.length; o < a; o += 1)
                                            r[n[o]] = i[n[o]];
                                    else
                                        r = i;
                                    s(t, r)
                                }
                            }(this.input, i, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]),
                            i.offsetWidth || i.clientWidth) : 0
                        }
                        ,
                        e.prototype.trigger = function(e) {
                            if (void 0 === e && (e = {}),
                            !e.metaKey && !e.altKey) {
                                var t, n, i = this.input.value;
                                if (e.type && "keydown" === e.type.toLowerCase()) {
                                    var s = e.keyCode
                                      , r = 46 === s
                                      , o = 8 === s;
                                    if (r || o) {
                                        var a = function(e) {
                                            var t = {};
                                            if ("selectionStart"in e)
                                                t.start = e.selectionStart,
                                                t.length = e.selectionEnd - t.start;
                                            else if (document.selection) {
                                                e.focus();
                                                var n = document.selection.createRange()
                                                  , i = n.text.length;
                                                n.moveStart("character", -e.value.length),
                                                t.start = n.text.length - i,
                                                t.length = i
                                            }
                                            return t
                                        }(this.input);
                                        a.length ? i = i.substring(0, a.start) + i.substring(a.start + a.length) : o && a.start ? i = i.substring(0, a.start - 1) + i.substring(a.start + 1) : r && void 0 !== a.start && (i = i.substring(0, a.start) + i.substring(a.start + 1))
                                    } else if ((t = s) >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 96 && t <= 111 || t >= 186 && t <= 222 || 32 === t || 8 === t || 46 === t) {
                                        var l = String.fromCharCode(s);
                                        i += l = e.shiftKey ? l.toUpperCase() : l.toLowerCase()
                                    }
                                }
                                !i && (n = this.input.getAttribute("placeholder")) && (i = n);
                                var c = this.measureString(i) + 4;
                                this.options && this.options.cache && this.cache && (this.cache[i] = c);
                                var d = this.options && this.options.minWidth;
                                "number" == typeof d && c < d && (c = d);
                                var u = this.options && this.options.maxWidth;
                                "number" == typeof u && c > u && (c = u),
                                c !== this.currentWidth && (this.currentWidth = c,
                                this.input.style.width = c + "px")
                            }
                        }
                        ,
                        e.prototype.destroy = function() {
                            this.input.removeEventListener("blur", this.eventHandler),
                            this.input.removeEventListener("input", this.eventHandler),
                            this.input.removeEventListener("keyup", this.eventHandler),
                            this.input.removeEventListener("keydown", this.eventHandler),
                            this.input = this.cache = null
                        }
                        ,
                        e
                    }();
                    t.default = r
                }
                ])
            }
            , function(e, t) {
                var n = Element.prototype;
                n.matches || (n.matches = n.msMatchesSelector || n.webkitMatchesSelector),
                n.closest || (n.closest = function(e) {
                    var t = this;
                    do {
                        if (t.matches(e))
                            return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t && 1 === t.nodeType);
                    return null
                }
                )
            }
            , function(e, t, n) {
                "use strict";
                n.r(t),
                n.d(t, "AriaAutocomplete", (function() {
                    return O
                }
                ));
                var i = n(0)
                  , s = n.n(i)
                  , r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                function o(e, t) {
                    if (e && 1 === e.nodeType && "string" == typeof t)
                        !function(e, t) {
                            for (var n = e.getAttribute && e.getAttribute("class") || "", i = " " + n + " ", s = 0, o = t.split(" "), a = o.length; s < a; s += 1)
                                i = i.replace(" " + o[s] + " ", " ");
                            var l;
                            n !== (i = null == (l = i) ? "" : (l + "").replace(r, "")) && e.setAttribute("class", i)
                        }(e, t);
                    else if (e && "number" == typeof e.length)
                        for (var n = 0, i = e.length; n < i; n += 1)
                            o(e[n], t)
                }
                var a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                function l(e, t) {
                    if (e && 1 === e.nodeType && "string" == typeof t)
                        !function(e, t) {
                            for (var n = e.getAttribute && e.getAttribute("class") || "", i = " " + n + " ", s = "", r = 0, o = t.split(" "), l = o.length; r < l; r += 1)
                                "" !== o[r] && -1 === i.indexOf(" " + o[r] + " ") && (s += " " + o[r]);
                            var c;
                            n !== (s = null == (c = n + s) ? "" : (c + "").replace(a, "")) && e.setAttribute("class", s)
                        }(e, t);
                    else if (e && "number" == typeof e.length)
                        for (var n = 0, i = e.length; n < i; n += 1)
                            l(e[n], t)
                }
                var c = function(e) {
                    for (var t in void 0 === e && (e = {}),
                    this.sourceMapping = {},
                    this.alsoSearchIn = [],
                    this.create = !1,
                    this.delay = 100,
                    this.minLength = 1,
                    this.maxResults = 9999,
                    this.showAllControl = !1,
                    this.confirmOnBlur = !0,
                    this.multiple = !1,
                    this.autoGrow = !1,
                    this.maxItems = 9999,
                    this.multipleSeparator = ",",
                    this.deleteOnBackspace = !1,
                    this.deleteAllControl = !1,
                    this.deleteAllText = "Delete all",
                    this.asyncQueryParam = "q",
                    this.asyncMaxResultsParam = "limit",
                    this.noResultsText = "No results",
                    this.cssNameSpace = "aria-autocomplete",
                    this.srDelay = 1400,
                    this.srAutoClear = 1e4,
                    this.srDeleteText = "delete",
                    this.srDeletedText = "deleted",
                    this.srShowAllText = "Show all",
                    this.srSelectedText = "selected",
                    this.srListLabelText = "Search suggestions",
                    this.srAssistiveText = "When results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.",
                    this.srAssistiveTextAutoClear = !0,
                    this.srResultsText = function(e) {
                        return e + " " + (1 === e ? "result" : "results") + " available."
                    }
                    ,
                    e)
                        e.hasOwnProperty(t) && void 0 !== e[t] && (this[t] = e[t])
                }
                  , d = "_ariaAutocompleteCleanedLabel"
                  , u = "_ariaAutocompleteSelectedOption"
                  , p = /[&<>"']/g
                  , h = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                }
                  , f = function() {
                    function e(e) {
                        this.list = e.list,
                        this.input = e.input,
                        this.wrapper = e.wrapper,
                        this.options = e.options,
                        this.selected = e.selected,
                        this.open = this.open.bind(e),
                        this.close = this.close.bind(e),
                        this.enable = this.enable.bind(e),
                        this.disable = this.disable.bind(e),
                        this.filter = this.filter.bind(e),
                        this.destroy = this.destroy.bind(e),
                        e.element.ariaAutocomplete = this
                    }
                    return e.prototype.open = function() {
                        this.show.call(this)
                    }
                    ,
                    e.prototype.close = function() {
                        this.hide.call(this)
                    }
                    ,
                    e.prototype.enable = function() {
                        this.enable.call(this)
                    }
                    ,
                    e.prototype.disable = function(e) {
                        this.disable.call(this, e)
                    }
                    ,
                    e.prototype.filter = function(e) {
                        this.filter.call(this, e)
                    }
                    ,
                    e.prototype.destroy = function() {
                        this.destroy.call(this)
                    }
                    ,
                    e
                }()
                  , m = 0
                  , g = function(e, t, n) {
                    m += 1,
                    this.ELEMENT = e;
                    var i = n || e || "";
                    this.PREFIX = i + "aria-autocomplete-" + m,
                    this.LIST = this.PREFIX + "-list",
                    this.BUTTON = this.PREFIX + "-button",
                    this.OPTION = this.PREFIX + "-option",
                    this.WRAPPER = this.PREFIX + "-wrapper",
                    this.LABEL = t || this.PREFIX + "-label",
                    this.INPUT = n || this.PREFIX + "-input",
                    this.SR_ASSISTANCE = this.PREFIX + "-sr-assistance",
                    this.OPTION_SELECTED = this.PREFIX + "-option-selected",
                    this.SR_ANNOUNCEMENTS = this.PREFIX + "-sr-announcements"
                };
                function v(e) {
                    return null == e ? "" : (e + "").trim()
                }
                function y(e) {
                    return "string" == typeof e && e ? e.replace(p, (function(e) {
                        return h[e]
                    }
                    )) : ""
                }
                n(1);
                var b = /&/g
                  , w = /\s\s+/g
                  , x = /[\u2018\u2019',:\u2013-]/g
                  , E = /[\-\[\]{}()*+?.,\\\^$|#\s]/g;
                function T(e, t) {
                    return void 0 === t && (t = !1),
                    e = v(e).toLowerCase().replace(x, "").replace(b, "and").replace(w, " "),
                    t && (e = e.replace(E, "\\$&")),
                    e
                }
                function S() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var n = {};
                    return e.forEach((function(e) {
                        for (var t in e)
                            e.hasOwnProperty(t) && void 0 !== e[t] && (n[t] = e[t])
                    }
                    )),
                    n
                }
                function _(e, t) {
                    if ("createEvent"in document) {
                        var n = document.createEvent("HTMLEvents");
                        n.initEvent(t, !0, !0),
                        e.dispatchEvent(n)
                    } else
                        e.fireEvent("on" + t)
                }
                function C(e) {
                    return e && e.children ? Array.prototype.slice.call(e.children) : []
                }
                function A(e, t, n) {
                    t = !!t,
                    e && ("INPUT" === e.nodeName && "checked"in e && e.checked !== t && (e.checked = t,
                    _(e, "change")),
                    "OPTION" === e.nodeName && "selected"in e && e.selected !== t && (e.selected = t,
                    clearTimeout(n.elementChangeEventTimer),
                    n.elementChangeEventTimer = setTimeout((function() {
                        _(e.closest("select"), "change")
                    }
                    ), 1)))
                }
                function $(e, t) {
                    void 0 === t && (t = {});
                    var n = {}
                      , i = t.value
                      , s = t.label;
                    return "string" == typeof e ? n.value = n.label = e : ((n = S(e)).value = (n[i] || n.value || n.label || "").toString(),
                    n.label = (n[s] || n.label || n.value || "").toString()),
                    n[d] = T(n.label),
                    n
                }
                function k(e, t) {
                    return void 0 === t && (t = {}),
                    Array.isArray(e) ? e.map((function(e) {
                        return $(e, t)
                    }
                    )) : e ? [e] : []
                }
                function D(e, t, n) {
                    if ("string" == typeof e)
                        return function(e, t, n) {
                            return n !== d && (e = T(e, !1)),
                            -1 !== e.search(t)
                        }(e, t, n);
                    if (Array.isArray(e))
                        for (var i = 0, s = e.length; i < s; i += 1)
                            if (D(e[i], t))
                                return !0;
                    return !1
                }
                var L = function() {
                    function e(e, t) {
                        e && this.init(e, t)
                    }
                    return e.prototype.triggerOptionCallback = function(e, t, n) {
                        if (void 0 === t && (t = []),
                        void 0 === n && (n = this.api),
                        "function" == typeof this.options[e])
                            return this.options[e].apply(n, t)
                    }
                    ,
                    e.prototype.show = function(e) {
                        if (e)
                            return o(e, this.cssNameSpace + "--hide hide hidden"),
                            e.removeAttribute("aria-hidden"),
                            void e.removeAttribute("hidden");
                        if (this.input.setAttribute("aria-expanded", "true"),
                        this.showAll) {
                            var t = (!!this.forceShowAll).toString();
                            this.showAll.setAttribute("aria-expanded", t)
                        }
                        this.menuOpen || (this.show(this.list),
                        this.menuOpen = !0,
                        this.triggerOptionCallback("onOpen", [this.list]),
                        this.documentClickBound || (this.documentClickBound = !0,
                        document.addEventListener("click", this.documentClick)))
                    }
                    ,
                    e.prototype.hide = function(e) {
                        if (e)
                            return l(e, this.cssNameSpace + "--hide hide hidden"),
                            e.setAttribute("aria-hidden", "true"),
                            void e.setAttribute("hidden", "hidden");
                        this.currentSelectedIndex = -1,
                        this.input.setAttribute("aria-expanded", "false"),
                        this.showAll && this.showAll.setAttribute("aria-expanded", "false"),
                        this.menuOpen && (this.hide(this.list),
                        this.menuOpen = !1,
                        this.triggerOptionCallback("onClose", [this.list]))
                    }
                    ,
                    e.prototype.enable = function() {
                        if (this.disabled) {
                            this.disabled = !1,
                            this.input.disabled = !1;
                            var e = this.cssNameSpace;
                            o(this.input, e + "__input--disabled disabled"),
                            o(this.wrapper, e + "__wrapper--disabled disabled"),
                            this.showAll && (this.showAll.setAttribute("tabindex", "0"),
                            o(this.showAll, e + "__show-all--disabled disabled"))
                        }
                        this.enableDeletions()
                    }
                    ,
                    e.prototype.disable = function(e) {
                        if (void 0 === e && (e = !1),
                        !this.disabled) {
                            this.disabled = !0,
                            this.input.disabled = !0;
                            var t = this.cssNameSpace;
                            l(this.input, t + "__input--disabled disabled"),
                            l(this.wrapper, t + "__wrapper--disabled disabled"),
                            this.showAll && (this.showAll.setAttribute("tabindex", "-1"),
                            l(this.showAll, t + "__show-all--disabled disabled"))
                        }
                        e && this.disableDeletions()
                    }
                    ,
                    e.prototype.enableDeletions = function() {
                        if (this.deletionsDisabled) {
                            this.deletionsDisabled = !1;
                            var e = this.cssNameSpace;
                            o(this.wrapper, e + "__wrapper--deletions-disabled"),
                            this.getSelectedElems().forEach((function(t) {
                                o(t, e + "__selected--disabled"),
                                t.setAttribute("tabindex", "0")
                            }
                            )),
                            this.deleteAll && (o(this.deleteAll, e + "__delete-all--disabled " + e + "__selected--disabled"),
                            this.deleteAll.setAttribute("tabindex", "0"))
                        }
                    }
                    ,
                    e.prototype.disableDeletions = function() {
                        if (!this.deletionsDisabled) {
                            this.deletionsDisabled = !0;
                            var e = this.cssNameSpace;
                            l(this.wrapper, e + "__wrapper--deletions-disabled"),
                            this.getSelectedElems().forEach((function(t) {
                                l(t, e + "__selected--disabled"),
                                t.setAttribute("tabindex", "-1")
                            }
                            )),
                            this.deleteAll && (l(this.deleteAll, e + "__delete-all--disabled " + e + "__selected--disabled"),
                            this.deleteAll.setAttribute("tabindex", "-1"))
                        }
                    }
                    ,
                    e.prototype.triggerAutoGrow = function() {
                        this.autoGrow && this.inputAutoWidth && "function" == typeof this.inputAutoWidth.trigger && this.inputAutoWidth.trigger()
                    }
                    ,
                    e.prototype.setInputValue = function(e, t) {
                        void 0 === t && (t = !1),
                        this.term = e,
                        this.input && (this.input.value = e),
                        t && (this.inputPollingValue = e),
                        this.triggerAutoGrow()
                    }
                    ,
                    e.prototype.indexOfValueIn = function(e, t, n) {
                        if (void 0 === t && (t = this.input.value),
                        void 0 === n && (n = "label"),
                        e.length && (t = v(t).toLowerCase()))
                            for (var i = 0, s = e.length; i < s; i += 1)
                                if (v(e[i][n]).toLowerCase() === t)
                                    return i;
                        return -1
                    }
                    ,
                    e.prototype.clearAnnouncement = function(e) {
                        var t = this;
                        clearTimeout(this.clearAnnouncementTimer),
                        this.clearAnnouncementTimer = setTimeout((function() {
                            t.srAnnouncements && (t.srAnnouncements.textContent = "")
                        }
                        ), e)
                    }
                    ,
                    e.prototype.announce = function(e, t) {
                        var n = this;
                        if (void 0 === t && (t = this.options.srDelay),
                        this.srAnnouncements && e && "string" == typeof e) {
                            var i = function() {
                                n.srAnnouncements.textContent = e;
                                var t = n.options.srAutoClear;
                                (!0 === t || "number" == typeof t && t > -1) && n.clearAnnouncement("number" == typeof t ? t : 1e4)
                            };
                            0 !== t ? (clearTimeout(this.announcementTimer),
                            this.announcementTimer = setTimeout((function() {
                                return i()
                            }
                            ), t)) : i()
                        }
                    }
                    ,
                    e.prototype.setInputDescription = function() {
                        var e = this.input.getAttribute("aria-describedby")
                          , t = v(e)
                          , n = t.replace(this.ids.SR_ASSISTANCE, "");
                        this.input.value.length || (n = n + " " + this.ids.SR_ASSISTANCE),
                        (n = v(n)) ? n !== t && this.input.setAttribute("aria-describedby", n) : e && this.input.removeAttribute("aria-describedby")
                    }
                    ,
                    e.prototype.isSelectedElem = function(e) {
                        var t = e && e[u];
                        return !(!this.multiple || "object" != typeof t)
                    }
                    ,
                    e.prototype.getSelectedElems = function() {
                        for (var e = [], t = 0, n = this.wrapper.childNodes.length; t < n; t += 1) {
                            var i = this.wrapper.childNodes[t];
                            1 === i.nodeType && this.isSelectedElem(i) && e.push(i)
                        }
                        return e
                    }
                    ,
                    e.prototype.deleteAllSelected = function() {
                        if (!this.deletionsDisabled) {
                            for (var e = this.selected.length; e--; ) {
                                var t = S(this.selected[e]);
                                A(t.element, !1, this),
                                this.triggerOptionCallback("onDelete", [t])
                            }
                            this.selected.splice(0),
                            this.setSourceElementValues(),
                            this.buildMultiSelected(),
                            this.triggerAutoGrow(),
                            this.announce(this.options.srDeletedText, 0)
                        }
                    }
                    ,
                    e.prototype.removeEntryFromSelected = function(e, t) {
                        if (void 0 === t && (t = !1),
                        !this.deletionsDisabled) {
                            var n = this.selected.indexOf(e);
                            if (-1 === n)
                                for (var i = 0, s = this.selected.length; i < s; i += 1)
                                    if (this.selected[i].value === e.value) {
                                        n = i;
                                        break
                                    }
                            if (n > -1 && this.selected[n]) {
                                var r = S(this.selected[n])
                                  , o = r.label;
                                A(r.element, !1, this),
                                this.selected.splice(n, 1),
                                this.triggerOptionCallback("onDelete", [r]),
                                this.setSourceElementValues(),
                                this.buildMultiSelected(t ? n : null),
                                this.triggerAutoGrow(),
                                this.announce(o + " " + this.options.srDeletedText, 0)
                            }
                        }
                    }
                    ,
                    e.prototype.createSelectedElemFrom = function(e, t) {
                        var n = e.label
                          , i = this.cssNameSpace
                          , s = i + "__selected"
                          , r = document.createElement("span")
                          , o = t ? i + "__delete-all " + s + " " + s + "--delete-all" : s;
                        return r.setAttribute("aria-describedby", this.ids.LABEL),
                        r.setAttribute("class", o),
                        r.setAttribute("role", "button"),
                        r.setAttribute("tabindex", "0"),
                        r.textContent = n,
                        t || (r.setAttribute("aria-label", this.options.srDeleteText + " " + n),
                        r[u] = e),
                        r
                    }
                    ,
                    e.prototype.buildMultiSelected = function(e) {
                        var t = this;
                        if (this.multiple) {
                            this.multiple && this.selected.length >= this.options.maxItems ? this.disable() : this.enable();
                            var n = this.getSelectedElems();
                            if (this.selected.length || n.length) {
                                var i = [];
                                n.forEach((function(e) {
                                    for (var n = e[u], s = 0, r = t.selected.length; s < r; s += 1) {
                                        var o = t.selected[s];
                                        if (o === n || o.value === n.value)
                                            return void i.push(e)
                                    }
                                    e.parentNode.removeChild(e)
                                }
                                ));
                                var s = document.createDocumentFragment();
                                this.selected.forEach((function(e) {
                                    for (var n = 0, r = i.length; n < r; n += 1) {
                                        var o = i[n][u];
                                        if (o === e || o.value === e.value)
                                            return
                                    }
                                    s.appendChild(t.createSelectedElemFrom(e))
                                }
                                )),
                                s.childNodes && s.childNodes.length && this.wrapper.insertBefore(s, this.srAssistance);
                                var r = this.getSelectedElems()
                                  , o = r.map((function(e, n) {
                                    var i = t.ids.OPTION_SELECTED + "-" + n;
                                    return e.setAttribute("id", i),
                                    i
                                }
                                ));
                                if (o.push(this.ids.LIST),
                                this.input.setAttribute("aria-owns", o.join(" ")),
                                this.autoGrow && this.selected.length ? this.input.removeAttribute("placeholder") : this.options.placeholder && this.input.setAttribute("placeholder", this.options.placeholder),
                                this.selected.length <= 1 ? this.deleteAll && (this.deleteAll.parentNode.removeChild(this.deleteAll),
                                this.deleteAll = null) : this.options.deleteAllControl && !this.deleteAll && r[0] && (this.deleteAll = this.createSelectedElemFrom({
                                    label: this.options.deleteAllText
                                }, !0),
                                r[0].parentNode.insertBefore(this.deleteAll, r[0])),
                                "number" == typeof e) {
                                    var a = r[e] || r[e - 1] || r[0];
                                    a && "function" == typeof a.focus && a.focus()
                                }
                            }
                        }
                    }
                    ,
                    e.prototype.resetOptionAttributes = function(e) {
                        void 0 === e && (e = C(this.list));
                        var t = this.cssNameSpace + "__option--focused focused focus";
                        e.forEach((function(e) {
                            "true" !== e.getAttribute("aria-disabled") && e.setAttribute("aria-selected", "false"),
                            o(e, t)
                        }
                        ))
                    }
                    ,
                    e.prototype.setOptionFocus = function(e, t, n) {
                        void 0 === n && (n = !0);
                        var i = C(this.list);
                        if (this.resetOptionAttributes(i),
                        t < 0 || !i.length)
                            return this.currentSelectedIndex = -1,
                            void (e && e.target !== this.input && this.input.focus());
                        if (t >= i.length)
                            return this.currentSelectedIndex = i.length - 1,
                            void this.setOptionFocus(e, this.currentSelectedIndex);
                        var s = i[t];
                        if (s && "string" == typeof s.getAttribute("tabindex"))
                            return this.currentSelectedIndex = t,
                            l(s, this.cssNameSpace + "__option--focused focused focus"),
                            "true" !== s.getAttribute("aria-disabled") && s.setAttribute("aria-selected", "true"),
                            void (n && s.focus());
                        this.currentSelectedIndex = -1
                    }
                    ,
                    e.prototype.setSourceElementValues = function() {
                        for (var e = [], t = 0, n = this.selected.length; t < n; t += 1) {
                            var i = this.selected[t];
                            e.push(i.value),
                            A(i.element, !0, this)
                        }
                        if (this.elementIsInput) {
                            var s = e.join(this.options.multipleSeparator);
                            s !== this.element.value && (this.element.value = s,
                            _(this.element, "change"))
                        }
                        !this.selected.length && this.sourceFromSelect && (this.element.value = ""),
                        this.triggerOptionCallback("onChange", [this.selected])
                    }
                    ,
                    e.prototype.handleOptionSelect = function(e, t, n) {
                        if (void 0 === n && (n = !0),
                        !("number" != typeof t || t < 0 || this.multiple && this.selected.length >= this.options.maxItems) && this.filteredSource.length && this.filteredSource[t]) {
                            var i = S(this.filteredSource[t]);
                            if (!(i.disabled || i.element && i.element.disabled)) {
                                for (var s = !1, r = 0, o = this.selected.length; r < o; r += 1)
                                    if (this.selected[r].value === i.value) {
                                        s = !0;
                                        break
                                    }
                                s || this.multiple || this.selected.splice(0),
                                s || (this.addResultsEntryToDomAndSource(i),
                                this.selected.push(i),
                                this.setSourceElementValues(),
                                this.buildMultiSelected()),
                                this.setInputValue(this.multiple ? "" : i.label, !0),
                                this.triggerOptionCallback("onConfirm", [i]),
                                this.announce(i.label + " " + this.options.srSelectedText, 0),
                                !this.disabled && !1 !== n && this.input && this.input.focus(),
                                this.hide()
                            }
                        }
                    }
                    ,
                    e.prototype.removeSelectedFromResults = function(e) {
                        var t = this;
                        if (!this.multiple || !this.selected.length)
                            return e;
                        var n = [];
                        return e.forEach((function(e) {
                            for (var i = t.selected, s = 0, r = i.length; s < r; s += 1)
                                if (e.label === i[s].label && e.value === i[s].value)
                                    return;
                            n.push(e)
                        }
                        )),
                        n
                    }
                    ,
                    e.prototype.addResultsEntryToDomAndSource = function(e) {
                        var t = this.options.create
                          , n = this.sourceFromSelect
                          , i = this.sourceFromCheckboxList;
                        if (t && e && e.value && Array.isArray(this.source) && (n || i)) {
                            var s = e.label
                              , r = e.value;
                            if (!(this.indexOfValueIn(this.source, r, "value") > -1 || this.indexOfValueIn(this.source, s, "label") > -1)) {
                                var o;
                                if (n) {
                                    var a = this.element.querySelector("option")
                                      , l = a.cloneNode(!0);
                                    l.textContent = s,
                                    l.value = r,
                                    o = l,
                                    a.parentNode.insertBefore(l, a)
                                } else if (i) {
                                    var c = this.element.querySelector('input[type="checkbox"]')
                                      , d = c.cloneNode(!0)
                                      , u = c.closest("label")
                                      , p = document.createElement("label");
                                    p.textContent = s,
                                    d.value = r,
                                    o = d,
                                    p.appendChild(d);
                                    var h = u || c;
                                    h.parentNode.insertBefore(p, h)
                                }
                                o && (e.element = o,
                                o.removeAttribute("id")),
                                this.source.unshift(e)
                            }
                        }
                    }
                    ,
                    e.prototype.prependEntryInCreateMode = function(e, t) {
                        var n = this.options.create;
                        if ((!0 === n || "function" == typeof n) && T(e)) {
                            var i, s = v(e), r = this.options.sourceMapping;
                            if (!0 === n && (i = $(s, r)),
                            "function" == typeof n) {
                                var o = this.triggerOptionCallback("create", [s])
                                  , a = typeof o;
                                o && ("string" === a || "object" === a && !Array.isArray(o)) && (i = $(o, r))
                            }
                            !i || !i.label || !i.value || this.indexOfValueIn(t, i[d], d) > -1 || this.indexOfValueIn(t, i.value, "value") > -1 || t.unshift(i)
                        }
                    }
                    ,
                    e.prototype.setListOptions = function(e) {
                        var t = this.options.sourceMapping;
                        this.prependEntryInCreateMode(this.term, e);
                        var n = this.removeSelectedFromResults(e)
                          , i = this.triggerOptionCallback("onResponse", [n.slice()]);
                        this.filteredSource = Array.isArray(i) ? k(i, t) : n;
                        for (var s = this.ids.OPTION, r = this.cssNameSpace, a = r + "__option", c = this.filteredSource.length, d = "function" == typeof this.options.onItemRender, u = this.forceShowAll ? 9999 : this.options.maxResults, p = u < c ? u : c, h = [], f = 0; f < p; f += 1) {
                            var m = this.filteredSource[f]
                              , g = d && this.triggerOptionCallback("onItemRender", [m])
                              , v = "string" == typeof g ? g : m.label
                              , b = !!(m.disabled || m.element && m.element.disabled)
                              , w = b ? "" : ' aria-selected="false"';
                            h.push('<li tabindex="-1"' + w + ' role="option" class="' + a + '" aria-disabled="' + b + '" id="' + s + "--" + f + '" aria-posinset="' + (f + 1) + '" aria-setsize="' + p + '">' + y(v) + "</li>")
                        }
                        var x, E = !h.length;
                        E ? (o(this.list, r + "__list--has-results"),
                        l(this.list, r + "__list--no-results")) : (l(this.list, r + "__list--has-results"),
                        o(this.list, r + "__list--no-results"));
                        var T = this.options.noResultsText;
                        E && "string" == typeof T && T.length && (x = T,
                        h.push('<li class="' + a + " " + a + '--no-results">' + y(T) + "</li>")),
                        this.cancelFilterPrep(),
                        x || (x = this.triggerOptionCallback("srResultsText", [p])),
                        x && this.announce(x);
                        var S = h.join("");
                        if (this.currentListHtml !== S ? (this.currentListHtml = S,
                        this.list.innerHTML = S) : this.resetOptionAttributes(),
                        !h.length)
                            return this.hide(),
                            void (this.forceShowAll = !1);
                        this.show(),
                        this.forceShowAll = !1
                    }
                    ,
                    e.prototype.handleAsync = function(e, t) {
                        var n = this;
                        void 0 === t && (t = !1),
                        this.xhr && "function" == typeof this.xhr.abort && this.xhr.abort();
                        var i = new XMLHttpRequest
                          , s = this.forceShowAll
                          , r = t ? null : this.api
                          , o = this.multiple ? this.selected.length : 0
                          , a = s || t || 9999 === this.options.maxResults
                          , l = this.source + (/\?/.test(this.source) ? "&" : "?") + encodeURIComponent(this.options.asyncQueryParam) + "=" + encodeURIComponent(e) + "&" + encodeURIComponent(this.options.asyncMaxResultsParam) + "=" + (a ? 9999 : o + this.options.maxResults)
                          , c = this.triggerOptionCallback("onAsyncPrep", [l, i, t], r);
                        c && "string" == typeof c && (l = c),
                        i.open("GET", l),
                        i.onload = function() {
                            if (i.readyState === i.DONE && i.status >= 200 && i.status < 300) {
                                n.forceShowAll = s;
                                var o = k(n.triggerOptionCallback("onAsyncSuccess", [e, i, t], r) || i.responseText, n.options.sourceMapping);
                                t ? (n.prepSelectedFromArray(o),
                                n.setInputStartingStates(!1)) : n.setListOptions(o),
                                n.triggerOptionCallback("onAsyncComplete", [e, i, t], r)
                            }
                        }
                        ,
                        i.onerror = function() {
                            n.triggerOptionCallback("onAsyncError", [e, i, t], r)
                        }
                        ,
                        t || (this.xhr = i),
                        this.triggerOptionCallback("onAsyncBeforeSend", [e, i, t], r),
                        i.send()
                    }
                    ,
                    e.prototype.filter = function(e) {
                        var t = this;
                        if ("string" == typeof e) {
                            var n = this.forceShowAll;
                            if (!n) {
                                var i = this.triggerOptionCallback("onSearch", [e]);
                                "string" == typeof i && (e = i)
                            }
                            if (this.term = e,
                            "string" == typeof this.source && this.source.length)
                                return this.handleAsync(e),
                                void (this.forceShowAll = !1);
                            if ("function" != typeof this.source) {
                                e || (n = !0);
                                var s = []
                                  , r = this.source;
                                if (r && r.length) {
                                    var o = [d];
                                    if (!n) {
                                        e = T(e, !0);
                                        var a = this.options.alsoSearchIn;
                                        Array.isArray(a) && a.length && (o = function(e) {
                                            var t = [];
                                            return e.forEach((function(e) {
                                                if ("string" == typeof e) {
                                                    for (var n = v(e), i = "label" !== n, s = 0, r = t.length; i && s < r; s += 1)
                                                        i = t[r] !== n;
                                                    i && t.push(n)
                                                }
                                            }
                                            )),
                                            t
                                        }(o.concat(a)))
                                    }
                                    r.forEach((function(t) {
                                        (n || function(e, t, n) {
                                            for (var i in e)
                                                if (e.hasOwnProperty(i)) {
                                                    var s = e[i];
                                                    if (("string" == typeof s || Array.isArray(s)) && n.indexOf(i) > -1 && D(s, t, i))
                                                        return !0
                                                }
                                            return !1
                                        }(t, e, o)) && s.push(t)
                                    }
                                    ))
                                }
                                this.setListOptions(s)
                            } else {
                                var l = function(e) {
                                    var n = k(e, t.options.sourceMapping);
                                    t.setListOptions(n)
                                }
                                  , c = this.source.call(this.api, this.term, l, !1);
                                c && "function" == typeof c.then && c.then((function(e) {
                                    return l(e)
                                }
                                ))
                            }
                        } else
                            this.cancelFilterPrep()
                    }
                    ,
                    e.prototype.cancelFilterPrep = function() {
                        clearTimeout(this.filterTimer),
                        o(this.wrapper, this.cssNameSpace + "__wrapper--loading loading"),
                        o(this.input, this.cssNameSpace + "__input--loading loading"),
                        this.filtering = !1
                    }
                    ,
                    e.prototype.filterPrep = function(e, t, n) {
                        var i = this;
                        void 0 === t && (t = !1),
                        void 0 === n && (n = !1);
                        var s = this.forceShowAll
                          , r = s || n ? 0 : this.options.delay;
                        this.cancelFilterPrep(),
                        this.filtering = !0,
                        this.filterTimer = setTimeout((function() {
                            var n = i.input.value;
                            if (i.inputPollingValue = n,
                            (s || "" === n || t && !i.multiple && i.selected.length && v(i.selected[0].label) === v(n)) && (n = ""),
                            e && e.type && i.options.srAssistiveTextAutoClear && i.setInputDescription(),
                            !s && n.length < i.options.minLength)
                                i.hide();
                            else {
                                var r;
                                try {
                                    var o = e;
                                    r = e && "keydown" === e.type && (o.altKey || o.ctrlKey || o.metaKey)
                                } catch (e) {}
                                var a = "" !== n && n === i.term;
                                !a || a && !i.menuOpen && !r ? (l(i.wrapper, i.cssNameSpace + "__wrapper--loading loading"),
                                l(i.input, i.cssNameSpace + "__input--loading loading"),
                                i.currentSelectedIndex = -1,
                                i.filter(n)) : i.cancelFilterPrep()
                            }
                        }
                        ), r)
                    }
                    ,
                    e.prototype.filterPrepShowAll = function(e) {
                        var t = this;
                        this.disabled || (clearTimeout(this.showAllPrepTimer),
                        this.showAllPrepTimer = setTimeout((function() {
                            t.componentBlurTimer && clearTimeout(t.componentBlurTimer),
                            e.preventDefault(),
                            t.forceShowAll = !0,
                            t.filterPrep(e, !1, !0)
                        }
                        ), 0))
                    }
                    ,
                    e.prototype.handleComponentBlur = function(e, t) {
                        var n = this;
                        void 0 === t && (t = !1),
                        clearTimeout(this.componentBlurTimer);
                        var i = t ? 0 : 100;
                        this.componentBlurTimer = setTimeout((function() {
                            var e = document.activeElement;
                            if (t || !e || n.deleteAll && n.deleteAll === e || n.isSelectedElem(e) || !n.wrapper.contains(e)) {
                                if (n.xhr && "function" == typeof n.xhr.abort && n.xhr.abort(),
                                !t && n.options.confirmOnBlur && n.menuOpen) {
                                    var i = n.currentSelectedIndex;
                                    if ("number" != typeof i || -1 === i) {
                                        var s = n.filteredSource.slice()
                                          , r = n.triggerOptionCallback("confirmOnBlur", [n.term, s])
                                          , o = T(r && "string" == typeof r ? r : n.term);
                                        i = n.indexOfValueIn.call(n, n.filteredSource, o, d)
                                    }
                                    n.handleOptionSelect({}, i, !1)
                                }
                                if (n.cancelFilterPrep(),
                                n.hide(),
                                !n.multiple && -1 === n.indexOfValueIn.call(n, n.selected)) {
                                    n.selected.length && n.removeEntryFromSelected(n.selected[0]);
                                    var a = n.elementIsInput || n.sourceFromSelect
                                      , l = n.element;
                                    a && "" !== l.value && (l.value = "",
                                    _(l, "change")),
                                    n.setInputValue("", !0)
                                }
                                n.multiple && n.setInputValue("", !0),
                                n.documentClickBound && (n.documentClickBound = !1,
                                document.removeEventListener("click", n.documentClick)),
                                n.triggerOptionCallback("onBlur", [n.wrapper]),
                                n.isFocused = !1
                            }
                        }
                        ), i)
                    }
                    ,
                    e.prototype.handleUpKey = function(e) {
                        e.preventDefault(),
                        !this.disabled && this.menuOpen && "number" == typeof this.currentSelectedIndex && this.setOptionFocus(e, this.currentSelectedIndex - 1)
                    }
                    ,
                    e.prototype.handleDownKey = function(e) {
                        if (e.preventDefault(),
                        !this.menuOpen) {
                            var t = this.options.minLength;
                            this.forceShowAll = t < 1,
                            (this.forceShowAll || this.input.value.length >= t) && this.filterPrep(e)
                        }
                        if (this.menuOpen && !this.filtering) {
                            var n = this.currentSelectedIndex;
                            "number" != typeof n || n < 0 ? this.setOptionFocus(e, 0) : this.setOptionFocus(e, n + 1)
                        }
                    }
                    ,
                    e.prototype.handleEndKey = function(e) {
                        if (!this.disabled && this.menuOpen && e.target !== this.input) {
                            var t = C(this.list);
                            t.length && (e.preventDefault(),
                            this.setOptionFocus(e, t.length - 1))
                        }
                    }
                    ,
                    e.prototype.handleHomeKey = function(e) {
                        !this.disabled && this.menuOpen && e.target !== this.input && (e.preventDefault(),
                        this.setOptionFocus(e, 0))
                    }
                    ,
                    e.prototype.handlePageUpKey = function(e) {
                        if (!this.disabled && this.menuOpen && e.target !== this.input) {
                            e.preventDefault();
                            var t = this.currentSelectedIndex
                              , n = t > 0 && t - 10 < 0 ? 0 : 0 === t ? -1 : t - 10;
                            this.setOptionFocus(e, n)
                        }
                    }
                    ,
                    e.prototype.handlePageDownKey = function(e) {
                        if (!this.disabled && this.menuOpen && e.target !== this.input) {
                            e.preventDefault();
                            var t = this.currentSelectedIndex;
                            this.setOptionFocus(e, t < 0 ? 0 : t + 10)
                        }
                    }
                    ,
                    e.prototype.handleEnterKey = function(e) {
                        var t = e.target;
                        this.isSelectedElem(t) ? this.removeEntryFromSelected(t[u], !0) : this.deleteAll && t === this.deleteAll ? this.deleteAllSelected() : this.disabled || (this.showAll && t === this.showAll ? this.filterPrepShowAll(e) : (this.menuOpen && (e.preventDefault(),
                        this.currentSelectedIndex > -1 && this.handleOptionSelect(e, this.currentSelectedIndex)),
                        t === this.input && this.filterPrep(e, !1, !0)))
                    }
                    ,
                    e.prototype.handleKeyDownDefault = function(e) {
                        var t = e.keyCode
                          , n = e.target === this.input;
                        if (32 === t && !n || this.isSelectedElem(e.target) && 46 === t)
                            return e.preventDefault(),
                            void this.handleEnterKey(e);
                        if (!this.disabled) {
                            var i = this.selected && this.selected.length;
                            this.options.deleteOnBackspace && 8 === t && "" === this.input.value && i && n && this.multiple && this.removeEntryFromSelected(this.selected[i - 1]);
                            var s = function(e) {
                                return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 96 && e <= 111 || e >= 186 && e <= 222 || 32 === e || 8 === e || 46 === e
                            }(t)
                              , r = !n && s;
                            r && this.input.focus(),
                            (r || n && s) && this.filterPrep(e)
                        }
                    }
                    ,
                    e.prototype.prepKeyDown = function(e) {
                        switch (e.keyCode) {
                        case 38:
                            this.handleUpKey(e);
                            break;
                        case 40:
                            this.handleDownKey(e);
                            break;
                        case 35:
                            this.handleEndKey(e);
                            break;
                        case 36:
                            this.handleHomeKey(e);
                            break;
                        case 13:
                            this.handleEnterKey(e);
                            break;
                        case 33:
                            this.handlePageUpKey(e);
                            break;
                        case 34:
                            this.handlePageDownKey(e);
                            break;
                        case 27:
                            this.handleComponentBlur(e, !0);
                            break;
                        default:
                            this.handleKeyDownDefault(e)
                        }
                    }
                    ,
                    e.prototype.cancelPolling = function() {
                        clearTimeout(this.pollingTimer)
                    }
                    ,
                    e.prototype.startPolling = function() {
                        var e = this;
                        this.filtering || this.input.value === this.inputPollingValue || this.filterPrep({}),
                        this.pollingTimer = setTimeout((function() {
                            e.startPolling()
                        }
                        ), 200)
                    }
                    ,
                    e.prototype.bindEvents = function() {
                        var e = this;
                        this.wrapper.addEventListener("focusout", (function(t) {
                            e.handleComponentBlur(t, !1)
                        }
                        )),
                        this.wrapper.addEventListener("focusin", (function(t) {
                            e.list.contains(t.target) || (e.currentSelectedIndex = -1),
                            e.isFocused || e.triggerOptionCallback("onFocus", [e.wrapper]),
                            e.isFocused = !0
                        }
                        )),
                        this.wrapper.addEventListener("keydown", (function(t) {
                            e.prepKeyDown(t)
                        }
                        )),
                        this.wrapper.addEventListener("click", (function(t) {
                            t.target !== e.wrapper ? (e.isSelectedElem(t.target) && e.removeEntryFromSelected(t.target[u], !0),
                            e.deleteAll && t.target === e.deleteAll && e.deleteAllSelected()) : e.input.focus()
                        }
                        ));
                        var t = this.cssNameSpace + "__wrapper--focused focused focus"
                          , n = this.cssNameSpace + "__input--focused focused focus";
                        this.input.addEventListener("blur", (function() {
                            o(e.wrapper, t),
                            o(e.input, n),
                            e.cancelPolling()
                        }
                        )),
                        this.input.addEventListener("input", (function(t) {
                            document.activeElement === e.input && e.filterPrep(t)
                        }
                        )),
                        this.input.addEventListener("click", (function(t) {
                            !e.menuOpen && e.input.value.length >= e.options.minLength && e.filterPrep(t, !0)
                        }
                        )),
                        this.input.addEventListener("focusin", (function(i) {
                            l(e.wrapper, t),
                            l(e.input, n),
                            e.startPolling(),
                            e.disabled || e.menuOpen || e.filterPrep(i, !0)
                        }
                        )),
                        this.showAll && this.showAll.addEventListener("click", (function(t) {
                            e.filterPrepShowAll(t)
                        }
                        )),
                        this.list.addEventListener("mouseenter", (function(t) {
                            e.resetOptionAttributes()
                        }
                        )),
                        this.list.addEventListener("click", (function(t) {
                            if (t.target !== e.list) {
                                var n = C(e.list);
                                if (n.length) {
                                    var i = n.indexOf(t.target);
                                    e.handleOptionSelect(t, i)
                                }
                            }
                        }
                        )),
                        this.autoGrow && (this.inputAutoWidth = new s.a(this.input))
                    }
                    ,
                    e.prototype.prepListSourceCheckboxes = function() {
                        this.multiple = !0,
                        this.source = [];
                        for (var e = this.element.querySelectorAll('input[type="checkbox"]'), t = 0, n = e.length; t < n; t += 1) {
                            var i = e[t];
                            if (i.value) {
                                var s = {
                                    value: i.value
                                }
                                  , r = i.closest("label");
                                !r && i.id && (r = document.querySelector('[for="' + i.id + '"]')),
                                r && (s.label = r.textContent);
                                var o = $(s);
                                o.element = i,
                                this.source.push(o),
                                i.checked && this.selected.push(o)
                            }
                        }
                    }
                    ,
                    e.prototype.prepListSourceDdl = function() {
                        var e = this.element.multiple;
                        e && !this.multiple && (this.multiple = !0),
                        !e && this.multiple && this.options.maxItems > 1 && (this.options.maxItems = 1),
                        this.source = [];
                        for (var t = this.element.querySelectorAll("option"), n = 0, i = t.length; n < i; n += 1) {
                            var s = t[n];
                            if (s.value) {
                                var r = $({
                                    value: s.value,
                                    label: s.textContent
                                });
                                r.element = s,
                                this.source.push(r),
                                s.selected && this.selected.push(r)
                            }
                        }
                    }
                    ,
                    e.prototype.prepSelectedFromArray = function(e) {
                        var t = this
                          , n = this.elementIsInput && this.element.value;
                        if (n && Array.isArray(e) && e.length) {
                            var i = this.options
                              , s = i.multiple
                              , r = i.multipleSeparator
                              , o = s ? n.split(r) : [n]
                              , a = e.slice();
                            o.forEach((function(e) {
                                if (-1 === t.indexOfValueIn(t.selected, e, "value")) {
                                    t.prependEntryInCreateMode(e, a);
                                    var n = t.indexOfValueIn(a, e, "value");
                                    n > -1 && t.selected.push(a[n])
                                }
                            }
                            ))
                        }
                    }
                    ,
                    e.prototype.prepListSourceArray = function() {
                        this.source = k(this.source, this.options.sourceMapping),
                        this.prepSelectedFromArray(this.source)
                    }
                    ,
                    e.prototype.prepListSourceAsync = function() {
                        var e = this.element;
                        this.elementIsInput && e.value && this.handleAsync(e.value, !0)
                    }
                    ,
                    e.prototype.prepListSourceFunction = function() {
                        var e = this
                          , t = this.element;
                        if (this.elementIsInput && t.value) {
                            var n = function(t) {
                                var n = k(t, e.options.sourceMapping);
                                e.prepSelectedFromArray(n),
                                e.setInputStartingStates(!1)
                            }
                              , i = this.source.call(void 0, t.value, n, !0);
                            i && "function" == typeof i.then && i.then((function(e) {
                                return n(e)
                            }
                            ))
                        }
                    }
                    ,
                    e.prototype.prepListSource = function() {
                        return "function" == typeof this.source ? this.prepListSourceFunction() : "string" == typeof this.source && this.source.length ? this.prepListSourceAsync() : Array.isArray(this.source) && this.source.length ? this.prepListSourceArray() : (this.sourceFromSelect = "SELECT" === this.element.nodeName,
                        this.sourceFromSelect ? this.prepListSourceDdl() : (this.sourceFromCheckboxList = !!this.element.querySelector('input[type="checkbox"]'),
                        this.sourceFromCheckboxList ? this.prepListSourceCheckboxes() : void (this.source = [])))
                    }
                    ,
                    e.prototype.setInputStartingStates = function(e) {
                        if (void 0 === e && (e = !0),
                        e) {
                            this.label && (this.label._ariaAutocompleteLabelOriginallyFor = this.ids.ELEMENT,
                            this.label.setAttribute("for", this.ids.INPUT));
                            var t = this.element.getAttribute("aria-describedby");
                            t && this.input.setAttribute("aria-describedby", t);
                            var n = this.element.getAttribute("aria-labelledby");
                            n && this.input.setAttribute("aria-labelledby", n)
                        }
                        this.selected.length && (this.multiple ? (this.buildMultiSelected(),
                        this.triggerAutoGrow()) : this.setInputValue(this.selected[0].label || "", !0)),
                        this.element.disabled && this.disable(!0)
                    }
                    ,
                    e.prototype.setHtml = function() {
                        var e = this.options
                          , t = this.cssNameSpace
                          , n = e.wrapperClassName ? " " + e.wrapperClassName : ""
                          , i = ['<div id="' + this.ids.WRAPPER + '" class="' + t + "__wrapper" + n + '">'];
                        i.push('<p class="sr-only ' + t + "__sr-only " + t + '__sr-announcements" id="' + this.ids.SR_ANNOUNCEMENTS + '" aria-live="polite" aria-atomic="true"></p>');
                        var s = e.name ? ' name="' + e.name + '"' : ""
                          , r = e.inputClassName ? " " + e.inputClassName : ""
                          , o = e.placeholder ? ' placeholder="' + e.placeholder + '" aria-placeholder="' + e.placeholder + '"' : "";
                        i.push('<input type="text" autocomplete="off" aria-expanded="false" aria-autocomplete="list" aria-describedby="' + this.ids.SR_ASSISTANCE + '" role="combobox" id="' + this.ids.INPUT + '" aria-owns="' + this.ids.LIST + '" class="' + t + "__input" + r + '"' + s + o + " />"),
                        e.showAllControl && i.push('<span role="button" tabindex="0" id="' + this.ids.BUTTON + '" aria-label="' + e.srShowAllText + '" class="' + t + '__show-all" aria-describedby="' + this.ids.LABEL + '" aria-expanded="false"></span>');
                        var a = e.srListLabelText
                          , l = e.listClassName ? " " + e.listClassName : ""
                          , c = a ? ' aria-label="' + a + '"' : "";
                        i.push('<ul id="' + this.ids.LIST + '" class="' + t + "__list" + l + '" role="listbox" aria-describedby="' + this.ids.LABEL + '" aria-hidden="true" hidden="hidden"' + c + "></ul>"),
                        i.push('<p id="' + this.ids.SR_ASSISTANCE + '" style="display:none;">' + y(e.srAssistiveText) + "</p>"),
                        i.push("</div>"),
                        this.element.insertAdjacentHTML("afterend", i.join(""))
                    }
                    ,
                    e.prototype.destroy = function() {
                        var e = this;
                        this.label && this.label._ariaAutocompleteLabelOriginallyFor && (this.label.setAttribute("for", this.label._ariaAutocompleteLabelOriginallyFor),
                        delete this.label._ariaAutocompleteLabelOriginallyFor),
                        this.documentClickBound && document.removeEventListener("click", this.documentClick),
                        this.autoGrow && this.inputAutoWidth && this.inputAutoWidth.destroy(),
                        this.wrapper.parentNode.removeChild(this.wrapper),
                        delete this.element.ariaAutocomplete,
                        this.show(this.element),
                        clearTimeout(this.filterTimer),
                        clearTimeout(this.pollingTimer),
                        clearTimeout(this.showAllPrepTimer),
                        clearTimeout(this.announcementTimer),
                        clearTimeout(this.componentBlurTimer),
                        clearTimeout(this.clearAnnouncementTimer),
                        clearTimeout(this.elementChangeEventTimer),
                        ["list", "input", "label", "element", "wrapper", "showAll", "deleteAll", "srAssistance", "srAnnouncements"].forEach((function(t) {
                            return e[t] = null
                        }
                        ))
                    }
                    ,
                    e.prototype.init = function(e, t) {
                        this.selected = [],
                        this.element = e,
                        this.label = document.querySelector('[for="' + this.element.id + '"]'),
                        this.ids = new g(this.element.id,this.label ? this.label.id : null,t.id),
                        this.elementIsInput = "INPUT" === e.nodeName,
                        this.options = new c(t),
                        this.label && !this.label.id && (this.label.id = this.ids.LABEL),
                        this.source = this.options.source,
                        this.multiple = this.options.multiple,
                        this.autoGrow = this.options.autoGrow,
                        this.cssNameSpace = this.options.cssNameSpace,
                        this.documentClick = this.handleComponentBlur.bind(this),
                        this.setHtml(),
                        this.list = document.getElementById(this.ids.LIST),
                        this.input = document.getElementById(this.ids.INPUT),
                        this.wrapper = document.getElementById(this.ids.WRAPPER),
                        this.showAll = document.getElementById(this.ids.BUTTON),
                        this.srAssistance = document.getElementById(this.ids.SR_ASSISTANCE),
                        this.srAnnouncements = document.getElementById(this.ids.SR_ANNOUNCEMENTS),
                        this.prepListSource();
                        var n = [];
                        this.options.showAllControl && n.push(this.cssNameSpace + "__wrapper--show-all"),
                        this.autoGrow && n.push(this.cssNameSpace + "__wrapper--autogrow"),
                        this.multiple && n.push(this.cssNameSpace + "__wrapper--multiple"),
                        n.length && l(this.wrapper, n.join(" ")),
                        this.hide(this.list),
                        this.hide(this.element),
                        this.setInputStartingStates(),
                        this.bindEvents(),
                        this.api = new f(this),
                        this.triggerOptionCallback("onReady", [this.wrapper])
                    }
                    ,
                    e
                }();
                function O(e, t) {
                    return e && e.ariaAutocomplete && e.ariaAutocomplete.open ? e.ariaAutocomplete : new L(e,t).api
                }
                t.default = O
            }
            ])
        }
        ,
        423: (e,t,n)=>{
            var i, s, r;
            !function(o) {
                "use strict";
                s = [n(755)],
                i = function(e) {
                    function t(e) {
                        var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                        return new RegExp(t)
                    }
                    function n(e) {
                        return function(n) {
                            var s = n.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                            if (s)
                                for (var r = 0, o = s.length; r < o; ++r) {
                                    var l = s[r].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                                      , c = t(l[0])
                                      , d = l[1] || ""
                                      , u = l[3] || ""
                                      , p = null;
                                    l = l[2],
                                    a.hasOwnProperty(l) && (p = a[l],
                                    p = Number(e[p])),
                                    null !== p && ("!" === d && (p = i(u, p)),
                                    "" === d && p < 10 && (p = "0" + p.toString()),
                                    n = n.replace(c, p.toString()))
                                }
                            return n.replace(/%%/, "%")
                        }
                    }
                    function i(e, t) {
                        var n = "s"
                          , i = "";
                        return e && (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = e[0] : (i = e[0],
                        n = e[1])),
                        Math.abs(t) > 1 ? n : i
                    }
                    var s = []
                      , r = []
                      , o = {
                        precision: 100,
                        elapse: !1,
                        defer: !1
                    };
                    r.push(/^[0-9]*$/.source),
                    r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
                    r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
                    r = new RegExp(r.join("|"));
                    var a = {
                        Y: "years",
                        m: "months",
                        n: "daysToMonth",
                        d: "daysToWeek",
                        w: "weeks",
                        W: "weeksToMonth",
                        H: "hours",
                        M: "minutes",
                        S: "seconds",
                        D: "totalDays",
                        I: "totalHours",
                        N: "totalMinutes",
                        T: "totalSeconds"
                    }
                      , l = function(t, n, i) {
                        this.el = t,
                        this.$el = e(t),
                        this.interval = null,
                        this.offset = {},
                        this.options = e.extend({}, o),
                        this.firstTick = !0,
                        this.instanceNumber = s.length,
                        s.push(this),
                        this.$el.data("countdown-instance", this.instanceNumber),
                        i && ("function" == typeof i ? (this.$el.on("update.countdown", i),
                        this.$el.on("stoped.countdown", i),
                        this.$el.on("finish.countdown", i)) : this.options = e.extend({}, o, i)),
                        this.setFinalDate(n),
                        !1 === this.options.defer && this.start()
                    };
                    e.extend(l.prototype, {
                        start: function() {
                            null !== this.interval && clearInterval(this.interval);
                            var e = this;
                            this.update(),
                            this.interval = setInterval((function() {
                                e.update.call(e)
                            }
                            ), this.options.precision)
                        },
                        stop: function() {
                            clearInterval(this.interval),
                            this.interval = null,
                            this.dispatchEvent("stoped")
                        },
                        toggle: function() {
                            this.interval ? this.stop() : this.start()
                        },
                        pause: function() {
                            this.stop()
                        },
                        resume: function() {
                            this.start()
                        },
                        remove: function() {
                            this.stop.call(this),
                            s[this.instanceNumber] = null,
                            delete this.$el.data().countdownInstance
                        },
                        setFinalDate: function(e) {
                            this.finalDate = function(e) {
                                if (e instanceof Date)
                                    return e;
                                if (String(e).match(r))
                                    return String(e).match(/^[0-9]*$/) && (e = Number(e)),
                                    String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")),
                                    new Date(e);
                                throw new Error("Couldn't cast `" + e + "` to a date object.")
                            }(e)
                        },
                        update: function() {
                            if (0 !== this.$el.closest("html").length) {
                                var e, t = new Date;
                                return e = this.finalDate.getTime() - t.getTime(),
                                e = Math.ceil(e / 1e3),
                                e = !this.options.elapse && e < 0 ? 0 : Math.abs(e),
                                this.totalSecsLeft === e || this.firstTick ? void (this.firstTick = !1) : (this.totalSecsLeft = e,
                                this.elapsed = t >= this.finalDate,
                                this.offset = {
                                    seconds: this.totalSecsLeft % 60,
                                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                                    weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                                    years: Math.abs(this.finalDate.getFullYear() - t.getFullYear()),
                                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                                    totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                                    totalMinutes: Math.floor(this.totalSecsLeft / 60),
                                    totalSeconds: this.totalSecsLeft
                                },
                                void (this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(),
                                this.dispatchEvent("finish"))))
                            }
                            this.remove()
                        },
                        dispatchEvent: function(t) {
                            var i = e.Event(t + ".countdown");
                            i.finalDate = this.finalDate,
                            i.elapsed = this.elapsed,
                            i.offset = e.extend({}, this.offset),
                            i.strftime = n(this.offset),
                            this.$el.trigger(i)
                        }
                    }),
                    e.fn.countdown = function() {
                        var t = Array.prototype.slice.call(arguments, 0);
                        return this.each((function() {
                            var n = e(this).data("countdown-instance");
                            if (void 0 !== n) {
                                var i = s[n]
                                  , r = t[0];
                                l.prototype.hasOwnProperty(r) ? i[r].apply(i, t.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, r),
                                i.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r))
                            } else
                                new l(this,t[0],t[1])
                        }
                        ))
                    }
                }
                ,
                void 0 === (r = i.apply(t, s)) || (e.exports = r)
            }()
        }
        ,
        347: (e,t,n)=>{
            var i = n(755)
              , s = window.location.href.split("#")[1];
            s && i("#" + s).length && i("html,body").animate({
                scrollTop: i("#" + s).offset().top - 70
            }, 1e3),
            i(document).on("scroll", (function() {
                i(document).scrollTop() > 50 ? i("header").addClass("shrink") : i("header").removeClass("shrink")
            }
            )),
            i(".sidenav-toggle").click((function() {
                i("body").addClass("menuToggled")
            }
            )),
            i(".modalWithForm").on("shown.bs.modal", (function(e) {
                var t = i(e.relatedTarget).data("src")
                  , n = i(this);
                t && n.find(".dataToSend").length > 0 && n.find(".dataToSend").val(t),
                n.find(".iti__flag-container").length < 1 && triggredWhenclcik()
            }
            )),
            i(document).ready((function() {
                i(".whatsapp-contact .close").click((function() {
                    i(".whatsapp-contact .info").removeClass("show"),
                    sessionStorage.setItem("whatsappshow", "shownbefore")
                }
                )),
                setTimeout((function() {
                    if (i(".whatsapp-contact .info").length > 0) {
                        var e = sessionStorage.getItem("whatsappshow");
                        console.log("whatsapp", e, null != e),
                        "" != e && null !== e && null != e || setTimeout((function() {
                            i(".whatsapp-contact .info").addClass("show")
                        }
                        ), 5e3)
                    }
                }
                ), 1300)
            }
            ))
        }
        ,
        444: (e,t,n)=>{
            var i, s, r, o = n(755);
            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                a(e)
            }
            s = [n(755)],
            i = function(e) {
                var t = function() {
                    if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
                        var t = e.fn.select2.amd;
                    var n, i, s;
                    return t && t.requirejs || (t ? i = t : t = {},
                    function(e) {
                        var t, r, o, l, c = {}, d = {}, u = {}, p = {}, h = Object.prototype.hasOwnProperty, f = [].slice, m = /\.js$/;
                        function g(e, t) {
                            return h.call(e, t)
                        }
                        function v(e, t) {
                            var n, i, s, r, o, a, l, c, d, p, h, f = t && t.split("/"), g = u.map, v = g && g["*"] || {};
                            if (e) {
                                for (o = (e = e.split("/")).length - 1,
                                u.nodeIdCompat && m.test(e[o]) && (e[o] = e[o].replace(m, "")),
                                "." === e[0].charAt(0) && f && (e = f.slice(0, f.length - 1).concat(e)),
                                d = 0; d < e.length; d++)
                                    if ("." === (h = e[d]))
                                        e.splice(d, 1),
                                        d -= 1;
                                    else if (".." === h) {
                                        if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1])
                                            continue;
                                        d > 0 && (e.splice(d - 1, 2),
                                        d -= 2)
                                    }
                                e = e.join("/")
                            }
                            if ((f || v) && g) {
                                for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                                    if (i = n.slice(0, d).join("/"),
                                    f)
                                        for (p = f.length; p > 0; p -= 1)
                                            if ((s = g[f.slice(0, p).join("/")]) && (s = s[i])) {
                                                r = s,
                                                a = d;
                                                break
                                            }
                                    if (r)
                                        break;
                                    !l && v && v[i] && (l = v[i],
                                    c = d)
                                }
                                !r && l && (r = l,
                                a = c),
                                r && (n.splice(0, a, r),
                                e = n.join("/"))
                            }
                            return e
                        }
                        function y(t, n) {
                            return function() {
                                var i = f.call(arguments, 0);
                                return "string" != typeof i[0] && 1 === i.length && i.push(null),
                                r.apply(e, i.concat([t, n]))
                            }
                        }
                        function b(e) {
                            return function(t) {
                                c[e] = t
                            }
                        }
                        function w(n) {
                            if (g(d, n)) {
                                var i = d[n];
                                delete d[n],
                                p[n] = !0,
                                t.apply(e, i)
                            }
                            if (!g(c, n) && !g(p, n))
                                throw new Error("No " + n);
                            return c[n]
                        }
                        function x(e) {
                            var t, n = e ? e.indexOf("!") : -1;
                            return n > -1 && (t = e.substring(0, n),
                            e = e.substring(n + 1, e.length)),
                            [t, e]
                        }
                        function E(e) {
                            return e ? x(e) : []
                        }
                        function T(e) {
                            return function() {
                                return u && u.config && u.config[e] || {}
                            }
                        }
                        o = function(e, t) {
                            var n, i, s = x(e), r = s[0], o = t[1];
                            return e = s[1],
                            r && (n = w(r = v(r, o))),
                            r ? e = n && n.normalize ? n.normalize(e, (i = o,
                            function(e) {
                                return v(e, i)
                            }
                            )) : v(e, o) : (r = (s = x(e = v(e, o)))[0],
                            e = s[1],
                            r && (n = w(r))),
                            {
                                f: r ? r + "!" + e : e,
                                n: e,
                                pr: r,
                                p: n
                            }
                        }
                        ,
                        l = {
                            require: function(e) {
                                return y(e)
                            },
                            exports: function(e) {
                                var t = c[e];
                                return void 0 !== t ? t : c[e] = {}
                            },
                            module: function(e) {
                                return {
                                    id: e,
                                    uri: "",
                                    exports: c[e],
                                    config: T(e)
                                }
                            }
                        },
                        t = function(t, n, i, s) {
                            var r, u, h, f, m, v, x, T = [], S = a(i);
                            if (v = E(s = s || t),
                            "undefined" === S || "function" === S) {
                                for (n = !n.length && i.length ? ["require", "exports", "module"] : n,
                                m = 0; m < n.length; m += 1)
                                    if ("require" === (u = (f = o(n[m], v)).f))
                                        T[m] = l.require(t);
                                    else if ("exports" === u)
                                        T[m] = l.exports(t),
                                        x = !0;
                                    else if ("module" === u)
                                        r = T[m] = l.module(t);
                                    else if (g(c, u) || g(d, u) || g(p, u))
                                        T[m] = w(u);
                                    else {
                                        if (!f.p)
                                            throw new Error(t + " missing " + u);
                                        f.p.load(f.n, y(s, !0), b(u), {}),
                                        T[m] = c[u]
                                    }
                                h = i ? i.apply(c[t], T) : void 0,
                                t && (r && r.exports !== e && r.exports !== c[t] ? c[t] = r.exports : h === e && x || (c[t] = h))
                            } else
                                t && (c[t] = i)
                        }
                        ,
                        n = i = r = function(n, i, s, a, c) {
                            if ("string" == typeof n)
                                return l[n] ? l[n](i) : w(o(n, E(i)).f);
                            if (!n.splice) {
                                if ((u = n).deps && r(u.deps, u.callback),
                                !i)
                                    return;
                                i.splice ? (n = i,
                                i = s,
                                s = null) : n = e
                            }
                            return i = i || function() {}
                            ,
                            "function" == typeof s && (s = a,
                            a = c),
                            a ? t(e, n, i, s) : setTimeout((function() {
                                t(e, n, i, s)
                            }
                            ), 4),
                            r
                        }
                        ,
                        r.config = function(e) {
                            return r(e)
                        }
                        ,
                        n._defined = c,
                        (s = function(e, t, n) {
                            if ("string" != typeof e)
                                throw new Error("See almond README: incorrect module build, no module name");
                            t.splice || (n = t,
                            t = []),
                            g(c, e) || g(d, e) || (d[e] = [e, t, n])
                        }
                        ).amd = {
                            jQuery: !0
                        }
                    }(),
                    t.requirejs = n,
                    t.require = i,
                    t.define = s),
                    t.define("almond", (function() {}
                    )),
                    t.define("jquery", [], (function() {
                        var t = e || o;
                        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
                        t
                    }
                    )),
                    t.define("select2/utils", ["jquery"], (function(e) {
                        var t = {};
                        function n(e) {
                            var t = e.prototype
                              , n = [];
                            for (var i in t)
                                "function" == typeof t[i] && "constructor" !== i && n.push(i);
                            return n
                        }
                        t.Extend = function(e, t) {
                            var n = {}.hasOwnProperty;
                            function i() {
                                this.constructor = e
                            }
                            for (var s in t)
                                n.call(t, s) && (e[s] = t[s]);
                            return i.prototype = t.prototype,
                            e.prototype = new i,
                            e.__super__ = t.prototype,
                            e
                        }
                        ,
                        t.Decorate = function(e, t) {
                            var i = n(t)
                              , s = n(e);
                            function r() {
                                var n = Array.prototype.unshift
                                  , i = t.prototype.constructor.length
                                  , s = e.prototype.constructor;
                                i > 0 && (n.call(arguments, e.prototype.constructor),
                                s = t.prototype.constructor),
                                s.apply(this, arguments)
                            }
                            t.displayName = e.displayName,
                            r.prototype = new function() {
                                this.constructor = r
                            }
                            ;
                            for (var o = 0; o < s.length; o++) {
                                var a = s[o];
                                r.prototype[a] = e.prototype[a]
                            }
                            for (var l = function(e) {
                                var n = function() {};
                                e in r.prototype && (n = r.prototype[e]);
                                var i = t.prototype[e];
                                return function() {
                                    return Array.prototype.unshift.call(arguments, n),
                                    i.apply(this, arguments)
                                }
                            }, c = 0; c < i.length; c++) {
                                var d = i[c];
                                r.prototype[d] = l(d)
                            }
                            return r
                        }
                        ;
                        var i = function() {
                            this.listeners = {}
                        };
                        i.prototype.on = function(e, t) {
                            this.listeners = this.listeners || {},
                            e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                        }
                        ,
                        i.prototype.trigger = function(e) {
                            var t = Array.prototype.slice
                              , n = t.call(arguments, 1);
                            this.listeners = this.listeners || {},
                            null == n && (n = []),
                            0 === n.length && n.push({}),
                            n[0]._type = e,
                            e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                            "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }
                        ,
                        i.prototype.invoke = function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                e[n].apply(this, t)
                        }
                        ,
                        t.Observable = i,
                        t.generateChars = function(e) {
                            for (var t = "", n = 0; n < e; n++)
                                t += Math.floor(36 * Math.random()).toString(36);
                            return t
                        }
                        ,
                        t.bind = function(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }
                        ,
                        t._convertData = function(e) {
                            for (var t in e) {
                                var n = t.split("-")
                                  , i = e;
                                if (1 !== n.length) {
                                    for (var s = 0; s < n.length; s++) {
                                        var r = n[s];
                                        (r = r.substring(0, 1).toLowerCase() + r.substring(1))in i || (i[r] = {}),
                                        s == n.length - 1 && (i[r] = e[t]),
                                        i = i[r]
                                    }
                                    delete e[t]
                                }
                            }
                            return e
                        }
                        ,
                        t.hasScroll = function(t, n) {
                            var i = e(n)
                              , s = n.style.overflowX
                              , r = n.style.overflowY;
                            return (s !== r || "hidden" !== r && "visible" !== r) && ("scroll" === s || "scroll" === r || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
                        }
                        ,
                        t.escapeMarkup = function(e) {
                            var t = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                                return t[e]
                            }
                            ))
                        }
                        ,
                        t.__cache = {};
                        var s = 0;
                        return t.GetUniqueElementId = function(e) {
                            var n = e.getAttribute("data-select2-id");
                            return null != n || (n = e.id ? "select2-data-" + e.id : "select2-data-" + (++s).toString() + "-" + t.generateChars(4),
                            e.setAttribute("data-select2-id", n)),
                            n
                        }
                        ,
                        t.StoreData = function(e, n, i) {
                            var s = t.GetUniqueElementId(e);
                            t.__cache[s] || (t.__cache[s] = {}),
                            t.__cache[s][n] = i
                        }
                        ,
                        t.GetData = function(n, i) {
                            var s = t.GetUniqueElementId(n);
                            return i ? t.__cache[s] && null != t.__cache[s][i] ? t.__cache[s][i] : e(n).data(i) : t.__cache[s]
                        }
                        ,
                        t.RemoveData = function(e) {
                            var n = t.GetUniqueElementId(e);
                            null != t.__cache[n] && delete t.__cache[n],
                            e.removeAttribute("data-select2-id")
                        }
                        ,
                        t.copyNonInternalCssClasses = function(e, t) {
                            var n = e.getAttribute("class").trim().split(/\s+/);
                            n = n.filter((function(e) {
                                return 0 === e.indexOf("select2-")
                            }
                            ));
                            var i = t.getAttribute("class").trim().split(/\s+/);
                            i = i.filter((function(e) {
                                return 0 !== e.indexOf("select2-")
                            }
                            ));
                            var s = n.concat(i);
                            e.setAttribute("class", s.join(" "))
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
                        function n(e, t, i) {
                            this.$element = e,
                            this.data = i,
                            this.options = t,
                            n.__super__.constructor.call(this)
                        }
                        return t.Extend(n, t.Observable),
                        n.prototype.render = function() {
                            var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                            return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                            this.$results = t,
                            t
                        }
                        ,
                        n.prototype.clear = function() {
                            this.$results.empty()
                        }
                        ,
                        n.prototype.displayMessage = function(t) {
                            var n = this.options.get("escapeMarkup");
                            this.clear(),
                            this.hideLoading();
                            var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')
                              , s = this.options.get("translations").get(t.message);
                            i.append(n(s(t.args))),
                            i[0].className += " select2-results__message",
                            this.$results.append(i)
                        }
                        ,
                        n.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }
                        ,
                        n.prototype.append = function(e) {
                            this.hideLoading();
                            var t = [];
                            if (null != e.results && 0 !== e.results.length) {
                                e.results = this.sort(e.results);
                                for (var n = 0; n < e.results.length; n++) {
                                    var i = e.results[n]
                                      , s = this.option(i);
                                    t.push(s)
                                }
                                this.$results.append(t)
                            } else
                                0 === this.$results.children().length && this.trigger("results:message", {
                                    message: "noResults"
                                })
                        }
                        ,
                        n.prototype.position = function(e, t) {
                            t.find(".select2-results").append(e)
                        }
                        ,
                        n.prototype.sort = function(e) {
                            return this.options.get("sorter")(e)
                        }
                        ,
                        n.prototype.highlightFirstItem = function() {
                            var e = this.$results.find(".select2-results__option--selectable")
                              , t = e.filter(".select2-results__option--selected");
                            t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                            this.ensureHighlightVisible()
                        }
                        ,
                        n.prototype.setClasses = function() {
                            var n = this;
                            this.data.current((function(i) {
                                var s = i.map((function(e) {
                                    return e.id.toString()
                                }
                                ));
                                n.$results.find(".select2-results__option--selectable").each((function() {
                                    var n = e(this)
                                      , i = t.GetData(this, "data")
                                      , r = "" + i.id;
                                    null != i.element && i.element.selected || null == i.element && s.indexOf(r) > -1 ? (this.classList.add("select2-results__option--selected"),
                                    n.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"),
                                    n.attr("aria-selected", "false"))
                                }
                                ))
                            }
                            ))
                        }
                        ,
                        n.prototype.showLoading = function(e) {
                            this.hideLoading();
                            var t = {
                                disabled: !0,
                                loading: !0,
                                text: this.options.get("translations").get("searching")(e)
                            }
                              , n = this.option(t);
                            n.className += " loading-results",
                            this.$results.prepend(n)
                        }
                        ,
                        n.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }
                        ,
                        n.prototype.option = function(n) {
                            var i = document.createElement("li");
                            i.classList.add("select2-results__option"),
                            i.classList.add("select2-results__option--selectable");
                            var s = {
                                role: "option"
                            }
                              , r = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                            for (var o in (null != n.element && r.call(n.element, ":disabled") || null == n.element && n.disabled) && (s["aria-disabled"] = "true",
                            i.classList.remove("select2-results__option--selectable"),
                            i.classList.add("select2-results__option--disabled")),
                            null == n.id && i.classList.remove("select2-results__option--selectable"),
                            null != n._resultId && (i.id = n._resultId),
                            n.title && (i.title = n.title),
                            n.children && (s.role = "group",
                            s["aria-label"] = n.text,
                            i.classList.remove("select2-results__option--selectable"),
                            i.classList.add("select2-results__option--group")),
                            s) {
                                var a = s[o];
                                i.setAttribute(o, a)
                            }
                            if (n.children) {
                                var l = e(i)
                                  , c = document.createElement("strong");
                                c.className = "select2-results__group",
                                this.template(n, c);
                                for (var d = [], u = 0; u < n.children.length; u++) {
                                    var p = n.children[u]
                                      , h = this.option(p);
                                    d.push(h)
                                }
                                var f = e("<ul></ul>", {
                                    class: "select2-results__options select2-results__options--nested",
                                    role: "none"
                                });
                                f.append(d),
                                l.append(c),
                                l.append(f)
                            } else
                                this.template(n, i);
                            return t.StoreData(i, "data", n),
                            i
                        }
                        ,
                        n.prototype.bind = function(n, i) {
                            var s = this
                              , r = n.id + "-results";
                            this.$results.attr("id", r),
                            n.on("results:all", (function(e) {
                                s.clear(),
                                s.append(e.data),
                                n.isOpen() && (s.setClasses(),
                                s.highlightFirstItem())
                            }
                            )),
                            n.on("results:append", (function(e) {
                                s.append(e.data),
                                n.isOpen() && s.setClasses()
                            }
                            )),
                            n.on("query", (function(e) {
                                s.hideMessages(),
                                s.showLoading(e)
                            }
                            )),
                            n.on("select", (function() {
                                n.isOpen() && (s.setClasses(),
                                s.options.get("scrollAfterSelect") && s.highlightFirstItem())
                            }
                            )),
                            n.on("unselect", (function() {
                                n.isOpen() && (s.setClasses(),
                                s.options.get("scrollAfterSelect") && s.highlightFirstItem())
                            }
                            )),
                            n.on("open", (function() {
                                s.$results.attr("aria-expanded", "true"),
                                s.$results.attr("aria-hidden", "false"),
                                s.setClasses(),
                                s.ensureHighlightVisible()
                            }
                            )),
                            n.on("close", (function() {
                                s.$results.attr("aria-expanded", "false"),
                                s.$results.attr("aria-hidden", "true"),
                                s.$results.removeAttr("aria-activedescendant")
                            }
                            )),
                            n.on("results:toggle", (function() {
                                var e = s.getHighlightedResults();
                                0 !== e.length && e.trigger("mouseup")
                            }
                            )),
                            n.on("results:select", (function() {
                                var e = s.getHighlightedResults();
                                if (0 !== e.length) {
                                    var n = t.GetData(e[0], "data");
                                    e.hasClass("select2-results__option--selected") ? s.trigger("close", {}) : s.trigger("select", {
                                        data: n
                                    })
                                }
                            }
                            )),
                            n.on("results:previous", (function() {
                                var e = s.getHighlightedResults()
                                  , t = s.$results.find(".select2-results__option--selectable")
                                  , n = t.index(e);
                                if (!(n <= 0)) {
                                    var i = n - 1;
                                    0 === e.length && (i = 0);
                                    var r = t.eq(i);
                                    r.trigger("mouseenter");
                                    var o = s.$results.offset().top
                                      , a = r.offset().top
                                      , l = s.$results.scrollTop() + (a - o);
                                    0 === i ? s.$results.scrollTop(0) : a - o < 0 && s.$results.scrollTop(l)
                                }
                            }
                            )),
                            n.on("results:next", (function() {
                                var e = s.getHighlightedResults()
                                  , t = s.$results.find(".select2-results__option--selectable")
                                  , n = t.index(e) + 1;
                                if (!(n >= t.length)) {
                                    var i = t.eq(n);
                                    i.trigger("mouseenter");
                                    var r = s.$results.offset().top + s.$results.outerHeight(!1)
                                      , o = i.offset().top + i.outerHeight(!1)
                                      , a = s.$results.scrollTop() + o - r;
                                    0 === n ? s.$results.scrollTop(0) : o > r && s.$results.scrollTop(a)
                                }
                            }
                            )),
                            n.on("results:focus", (function(e) {
                                e.element[0].classList.add("select2-results__option--highlighted"),
                                e.element[0].setAttribute("aria-selected", "true")
                            }
                            )),
                            n.on("results:message", (function(e) {
                                s.displayMessage(e)
                            }
                            )),
                            e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                                var t = s.$results.scrollTop()
                                  , n = s.$results.get(0).scrollHeight - t + e.deltaY
                                  , i = e.deltaY > 0 && t - e.deltaY <= 0
                                  , r = e.deltaY < 0 && n <= s.$results.height();
                                i ? (s.$results.scrollTop(0),
                                e.preventDefault(),
                                e.stopPropagation()) : r && (s.$results.scrollTop(s.$results.get(0).scrollHeight - s.$results.height()),
                                e.preventDefault(),
                                e.stopPropagation())
                            }
                            )),
                            this.$results.on("mouseup", ".select2-results__option--selectable", (function(n) {
                                var i = e(this)
                                  , r = t.GetData(this, "data");
                                i.hasClass("select2-results__option--selected") ? s.options.get("multiple") ? s.trigger("unselect", {
                                    originalEvent: n,
                                    data: r
                                }) : s.trigger("close", {}) : s.trigger("select", {
                                    originalEvent: n,
                                    data: r
                                })
                            }
                            )),
                            this.$results.on("mouseenter", ".select2-results__option--selectable", (function(n) {
                                var i = t.GetData(this, "data");
                                s.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"),
                                s.trigger("results:focus", {
                                    data: i,
                                    element: e(this)
                                })
                            }
                            ))
                        }
                        ,
                        n.prototype.getHighlightedResults = function() {
                            return this.$results.find(".select2-results__option--highlighted")
                        }
                        ,
                        n.prototype.destroy = function() {
                            this.$results.remove()
                        }
                        ,
                        n.prototype.ensureHighlightVisible = function() {
                            var e = this.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = this.$results.find(".select2-results__option--selectable").index(e)
                                  , n = this.$results.offset().top
                                  , i = e.offset().top
                                  , s = this.$results.scrollTop() + (i - n)
                                  , r = i - n;
                                s -= 2 * e.outerHeight(!1),
                                t <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(s)
                            }
                        }
                        ,
                        n.prototype.template = function(t, n) {
                            var i = this.options.get("templateResult")
                              , s = this.options.get("escapeMarkup")
                              , r = i(t, n);
                            null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = s(r) : e(n).append(r)
                        }
                        ,
                        n
                    }
                    )),
                    t.define("select2/keys", [], (function() {
                        return {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        }
                    }
                    )),
                    t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                        function i(e, t) {
                            this.$element = e,
                            this.options = t,
                            i.__super__.constructor.call(this)
                        }
                        return t.Extend(i, t.Observable),
                        i.prototype.render = function() {
                            var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0,
                            null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                            n.attr("title", this.$element.attr("title")),
                            n.attr("tabindex", this._tabindex),
                            n.attr("aria-disabled", "false"),
                            this.$selection = n,
                            n
                        }
                        ,
                        i.prototype.bind = function(e, t) {
                            var i = this
                              , s = e.id + "-results";
                            this.container = e,
                            this.$selection.on("focus", (function(e) {
                                i.trigger("focus", e)
                            }
                            )),
                            this.$selection.on("blur", (function(e) {
                                i._handleBlur(e)
                            }
                            )),
                            this.$selection.on("keydown", (function(e) {
                                i.trigger("keypress", e),
                                e.which === n.SPACE && e.preventDefault()
                            }
                            )),
                            e.on("results:focus", (function(e) {
                                i.$selection.attr("aria-activedescendant", e.data._resultId)
                            }
                            )),
                            e.on("selection:update", (function(e) {
                                i.update(e.data)
                            }
                            )),
                            e.on("open", (function() {
                                i.$selection.attr("aria-expanded", "true"),
                                i.$selection.attr("aria-owns", s),
                                i._attachCloseHandler(e)
                            }
                            )),
                            e.on("close", (function() {
                                i.$selection.attr("aria-expanded", "false"),
                                i.$selection.removeAttr("aria-activedescendant"),
                                i.$selection.removeAttr("aria-owns"),
                                i.$selection.trigger("focus"),
                                i._detachCloseHandler(e)
                            }
                            )),
                            e.on("enable", (function() {
                                i.$selection.attr("tabindex", i._tabindex),
                                i.$selection.attr("aria-disabled", "false")
                            }
                            )),
                            e.on("disable", (function() {
                                i.$selection.attr("tabindex", "-1"),
                                i.$selection.attr("aria-disabled", "true")
                            }
                            ))
                        }
                        ,
                        i.prototype._handleBlur = function(t) {
                            var n = this;
                            window.setTimeout((function() {
                                document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                            }
                            ), 1)
                        }
                        ,
                        i.prototype._attachCloseHandler = function(n) {
                            e(document.body).on("mousedown.select2." + n.id, (function(n) {
                                var i = e(n.target).closest(".select2");
                                e(".select2.select2-container--open").each((function() {
                                    this != i[0] && t.GetData(this, "element").select2("close")
                                }
                                ))
                            }
                            ))
                        }
                        ,
                        i.prototype._detachCloseHandler = function(t) {
                            e(document.body).off("mousedown.select2." + t.id)
                        }
                        ,
                        i.prototype.position = function(e, t) {
                            t.find(".selection").append(e)
                        }
                        ,
                        i.prototype.destroy = function() {
                            this._detachCloseHandler(this.container)
                        }
                        ,
                        i.prototype.update = function(e) {
                            throw new Error("The `update` method must be defined in child classes.")
                        }
                        ,
                        i.prototype.isEnabled = function() {
                            return !this.isDisabled()
                        }
                        ,
                        i.prototype.isDisabled = function() {
                            return this.options.get("disabled")
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n, i) {
                        function s() {
                            s.__super__.constructor.apply(this, arguments)
                        }
                        return n.Extend(s, t),
                        s.prototype.render = function() {
                            var e = s.__super__.render.call(this);
                            return e[0].classList.add("select2-selection--single"),
                            e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                            e
                        }
                        ,
                        s.prototype.bind = function(e, t) {
                            var n = this;
                            s.__super__.bind.apply(this, arguments);
                            var i = e.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"),
                            this.$selection.attr("aria-labelledby", i),
                            this.$selection.attr("aria-controls", i),
                            this.$selection.on("mousedown", (function(e) {
                                1 === e.which && n.trigger("toggle", {
                                    originalEvent: e
                                })
                            }
                            )),
                            this.$selection.on("focus", (function(e) {}
                            )),
                            this.$selection.on("blur", (function(e) {}
                            )),
                            e.on("focus", (function(t) {
                                e.isOpen() || n.$selection.trigger("focus")
                            }
                            ))
                        }
                        ,
                        s.prototype.clear = function() {
                            var e = this.$selection.find(".select2-selection__rendered");
                            e.empty(),
                            e.removeAttr("title")
                        }
                        ,
                        s.prototype.display = function(e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t))
                        }
                        ,
                        s.prototype.selectionContainer = function() {
                            return e("<span></span>")
                        }
                        ,
                        s.prototype.update = function(e) {
                            if (0 !== e.length) {
                                var t = e[0]
                                  , n = this.$selection.find(".select2-selection__rendered")
                                  , i = this.display(t, n);
                                n.empty().append(i);
                                var s = t.title || t.text;
                                s ? n.attr("title", s) : n.removeAttr("title")
                            } else
                                this.clear()
                        }
                        ,
                        s
                    }
                    )),
                    t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
                        function i(e, t) {
                            i.__super__.constructor.apply(this, arguments)
                        }
                        return n.Extend(i, t),
                        i.prototype.render = function() {
                            var e = i.__super__.render.call(this);
                            return e[0].classList.add("select2-selection--multiple"),
                            e.html('<ul class="select2-selection__rendered"></ul>'),
                            e
                        }
                        ,
                        i.prototype.bind = function(t, s) {
                            var r = this;
                            i.__super__.bind.apply(this, arguments);
                            var o = t.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", o),
                            this.$selection.on("click", (function(e) {
                                r.trigger("toggle", {
                                    originalEvent: e
                                })
                            }
                            )),
                            this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                                if (!r.isDisabled()) {
                                    var i = e(this).parent()
                                      , s = n.GetData(i[0], "data");
                                    r.trigger("unselect", {
                                        originalEvent: t,
                                        data: s
                                    })
                                }
                            }
                            )),
                            this.$selection.on("keydown", ".select2-selection__choice__remove", (function(e) {
                                r.isDisabled() || e.stopPropagation()
                            }
                            ))
                        }
                        ,
                        i.prototype.clear = function() {
                            var e = this.$selection.find(".select2-selection__rendered");
                            e.empty(),
                            e.removeAttr("title")
                        }
                        ,
                        i.prototype.display = function(e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t))
                        }
                        ,
                        i.prototype.selectionContainer = function() {
                            return e('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')
                        }
                        ,
                        i.prototype.update = function(e) {
                            if (this.clear(),
                            0 !== e.length) {
                                for (var t = [], i = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", s = 0; s < e.length; s++) {
                                    var r = e[s]
                                      , o = this.selectionContainer()
                                      , a = this.display(r, o)
                                      , l = i + n.generateChars(4) + "-";
                                    r.id ? l += r.id : l += n.generateChars(4),
                                    o.find(".select2-selection__choice__display").append(a).attr("id", l);
                                    var c = r.title || r.text;
                                    c && o.attr("title", c);
                                    var d = this.options.get("translations").get("removeItem")
                                      , u = o.find(".select2-selection__choice__remove");
                                    u.attr("title", d()),
                                    u.attr("aria-label", d()),
                                    u.attr("aria-describedby", l),
                                    n.StoreData(o[0], "data", r),
                                    t.push(o)
                                }
                                this.$selection.find(".select2-selection__rendered").append(t)
                            }
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/selection/placeholder", [], (function() {
                        function e(e, t, n) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                            e.call(this, t, n)
                        }
                        return e.prototype.normalizePlaceholder = function(e, t) {
                            return "string" == typeof t && (t = {
                                id: "",
                                text: t
                            }),
                            t
                        }
                        ,
                        e.prototype.createPlaceholder = function(e, t) {
                            var n = this.selectionContainer();
                            n.html(this.display(t)),
                            n[0].classList.add("select2-selection__placeholder"),
                            n[0].classList.remove("select2-selection__choice");
                            var i = t.title || t.text || n.text();
                            return this.$selection.find(".select2-selection__rendered").attr("title", i),
                            n
                        }
                        ,
                        e.prototype.update = function(e, t) {
                            var n = 1 == t.length && t[0].id != this.placeholder.id;
                            if (t.length > 1 || n)
                                return e.call(this, t);
                            this.clear();
                            var i = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(i)
                        }
                        ,
                        e
                    }
                    )),
                    t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
                        function i() {}
                        return i.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                            null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                            this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                                i._handleClear(e)
                            }
                            )),
                            t.on("keypress", (function(e) {
                                i._handleKeyboardClear(e, t)
                            }
                            ))
                        }
                        ,
                        i.prototype._handleClear = function(e, t) {
                            if (!this.isDisabled()) {
                                var i = this.$selection.find(".select2-selection__clear");
                                if (0 !== i.length) {
                                    t.stopPropagation();
                                    var s = n.GetData(i[0], "data")
                                      , r = this.$element.val();
                                    this.$element.val(this.placeholder.id);
                                    var o = {
                                        data: s
                                    };
                                    if (this.trigger("clear", o),
                                    o.prevented)
                                        this.$element.val(r);
                                    else {
                                        for (var a = 0; a < s.length; a++)
                                            if (o = {
                                                data: s[a]
                                            },
                                            this.trigger("unselect", o),
                                            o.prevented)
                                                return void this.$element.val(r);
                                        this.$element.trigger("input").trigger("change"),
                                        this.trigger("toggle", {})
                                    }
                                }
                            }
                        }
                        ,
                        i.prototype._handleKeyboardClear = function(e, n, i) {
                            i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                        }
                        ,
                        i.prototype.update = function(t, i) {
                            if (t.call(this, i),
                            this.$selection.find(".select2-selection__clear").remove(),
                            this.$selection[0].classList.remove("select2-selection--clearable"),
                            !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                                var s = this.$selection.find(".select2-selection__rendered").attr("id")
                                  , r = this.options.get("translations").get("removeAllItems")
                                  , o = e('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
                                o.attr("title", r()),
                                o.attr("aria-label", r()),
                                o.attr("aria-describedby", s),
                                n.StoreData(o[0], "data", i),
                                this.$selection.prepend(o),
                                this.$selection[0].classList.add("select2-selection--clearable")
                            }
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                        function i(e, t, n) {
                            e.call(this, t, n)
                        }
                        return i.prototype.render = function(t) {
                            var n = this.options.get("translations").get("search")
                              , i = e('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
                            this.$searchContainer = i,
                            this.$search = i.find("textarea"),
                            this.$search.prop("autocomplete", this.options.get("autocomplete")),
                            this.$search.attr("aria-label", n());
                            var s = t.call(this);
                            return this._transferTabIndex(),
                            s.append(this.$searchContainer),
                            s
                        }
                        ,
                        i.prototype.bind = function(e, i, s) {
                            var r = this
                              , o = i.id + "-results"
                              , a = i.id + "-container";
                            e.call(this, i, s),
                            r.$search.attr("aria-describedby", a),
                            i.on("open", (function() {
                                r.$search.attr("aria-controls", o),
                                r.$search.trigger("focus")
                            }
                            )),
                            i.on("close", (function() {
                                r.$search.val(""),
                                r.resizeSearch(),
                                r.$search.removeAttr("aria-controls"),
                                r.$search.removeAttr("aria-activedescendant"),
                                r.$search.trigger("focus")
                            }
                            )),
                            i.on("enable", (function() {
                                r.$search.prop("disabled", !1),
                                r._transferTabIndex()
                            }
                            )),
                            i.on("disable", (function() {
                                r.$search.prop("disabled", !0)
                            }
                            )),
                            i.on("focus", (function(e) {
                                r.$search.trigger("focus")
                            }
                            )),
                            i.on("results:focus", (function(e) {
                                e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                            }
                            )),
                            this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                                r.trigger("focus", e)
                            }
                            )),
                            this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                                r._handleBlur(e)
                            }
                            )),
                            this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                                if (e.stopPropagation(),
                                r.trigger("keypress", e),
                                r._keyUpPrevented = e.isDefaultPrevented(),
                                e.which === n.BACKSPACE && "" === r.$search.val()) {
                                    var i = r.$selection.find(".select2-selection__choice").last();
                                    if (i.length > 0) {
                                        var s = t.GetData(i[0], "data");
                                        r.searchRemoveChoice(s),
                                        e.preventDefault()
                                    }
                                }
                            }
                            )),
                            this.$selection.on("click", ".select2-search--inline", (function(e) {
                                r.$search.val() && e.stopPropagation()
                            }
                            ));
                            var l = document.documentMode
                              , c = l && l <= 11;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                                c ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search")
                            }
                            )),
                            this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                                if (c && "input" === e.type)
                                    r.$selection.off("input.search input.searchcheck");
                                else {
                                    var t = e.which;
                                    t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e)
                                }
                            }
                            ))
                        }
                        ,
                        i.prototype._transferTabIndex = function(e) {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                            this.$selection.attr("tabindex", "-1")
                        }
                        ,
                        i.prototype.createPlaceholder = function(e, t) {
                            this.$search.attr("placeholder", t.text)
                        }
                        ,
                        i.prototype.update = function(e, t) {
                            var n = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""),
                            e.call(this, t),
                            this.resizeSearch(),
                            n && this.$search.trigger("focus")
                        }
                        ,
                        i.prototype.handleSearch = function() {
                            if (this.resizeSearch(),
                            !this._keyUpPrevented) {
                                var e = this.$search.val();
                                this.trigger("query", {
                                    term: e
                                })
                            }
                            this._keyUpPrevented = !1
                        }
                        ,
                        i.prototype.searchRemoveChoice = function(e, t) {
                            this.trigger("unselect", {
                                data: t
                            }),
                            this.$search.val(t.text),
                            this.handleSearch()
                        }
                        ,
                        i.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var e = "100%";
                            "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em"),
                            this.$search.css("width", e)
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/selection/selectionCss", ["../utils"], (function(e) {
                        function t() {}
                        return t.prototype.render = function(t) {
                            var n = t.call(this)
                              , i = this.options.get("selectionCssClass") || "";
                            return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                            e.copyNonInternalCssClasses(n[0], this.$element[0])),
                            n.addClass(i),
                            n
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
                        function t() {}
                        return t.prototype.bind = function(t, n, i) {
                            var s = this
                              , r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                              , o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                            t.call(this, n, i),
                            n.on("*", (function(t, n) {
                                if (-1 !== r.indexOf(t)) {
                                    n = n || {};
                                    var i = e.Event("select2:" + t, {
                                        params: n
                                    });
                                    s.$element.trigger(i),
                                    -1 !== o.indexOf(t) && (n.prevented = i.isDefaultPrevented())
                                }
                            }
                            ))
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/translation", ["jquery", "require"], (function(e, t) {
                        function n(e) {
                            this.dict = e || {}
                        }
                        return n.prototype.all = function() {
                            return this.dict
                        }
                        ,
                        n.prototype.get = function(e) {
                            return this.dict[e]
                        }
                        ,
                        n.prototype.extend = function(t) {
                            this.dict = e.extend({}, t.all(), this.dict)
                        }
                        ,
                        n._cache = {},
                        n.loadPath = function(e) {
                            if (!(e in n._cache)) {
                                var i = t(e);
                                n._cache[e] = i
                            }
                            return new n(n._cache[e])
                        }
                        ,
                        n
                    }
                    )),
                    t.define("select2/diacritics", [], (function() {
                        return {
                            "Ⓐ": "A",
                            Ａ: "A",
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ầ: "A",
                            Ấ: "A",
                            Ẫ: "A",
                            Ẩ: "A",
                            Ã: "A",
                            Ā: "A",
                            Ă: "A",
                            Ằ: "A",
                            Ắ: "A",
                            Ẵ: "A",
                            Ẳ: "A",
                            Ȧ: "A",
                            Ǡ: "A",
                            Ä: "A",
                            Ǟ: "A",
                            Ả: "A",
                            Å: "A",
                            Ǻ: "A",
                            Ǎ: "A",
                            Ȁ: "A",
                            Ȃ: "A",
                            Ạ: "A",
                            Ậ: "A",
                            Ặ: "A",
                            Ḁ: "A",
                            Ą: "A",
                            Ⱥ: "A",
                            Ɐ: "A",
                            Ꜳ: "AA",
                            Æ: "AE",
                            Ǽ: "AE",
                            Ǣ: "AE",
                            Ꜵ: "AO",
                            Ꜷ: "AU",
                            Ꜹ: "AV",
                            Ꜻ: "AV",
                            Ꜽ: "AY",
                            "Ⓑ": "B",
                            Ｂ: "B",
                            Ḃ: "B",
                            Ḅ: "B",
                            Ḇ: "B",
                            Ƀ: "B",
                            Ƃ: "B",
                            Ɓ: "B",
                            "Ⓒ": "C",
                            Ｃ: "C",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            Ç: "C",
                            Ḉ: "C",
                            Ƈ: "C",
                            Ȼ: "C",
                            Ꜿ: "C",
                            "Ⓓ": "D",
                            Ｄ: "D",
                            Ḋ: "D",
                            Ď: "D",
                            Ḍ: "D",
                            Ḑ: "D",
                            Ḓ: "D",
                            Ḏ: "D",
                            Đ: "D",
                            Ƌ: "D",
                            Ɗ: "D",
                            Ɖ: "D",
                            Ꝺ: "D",
                            Ǳ: "DZ",
                            Ǆ: "DZ",
                            ǲ: "Dz",
                            ǅ: "Dz",
                            "Ⓔ": "E",
                            Ｅ: "E",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ề: "E",
                            Ế: "E",
                            Ễ: "E",
                            Ể: "E",
                            Ẽ: "E",
                            Ē: "E",
                            Ḕ: "E",
                            Ḗ: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ë: "E",
                            Ẻ: "E",
                            Ě: "E",
                            Ȅ: "E",
                            Ȇ: "E",
                            Ẹ: "E",
                            Ệ: "E",
                            Ȩ: "E",
                            Ḝ: "E",
                            Ę: "E",
                            Ḙ: "E",
                            Ḛ: "E",
                            Ɛ: "E",
                            Ǝ: "E",
                            "Ⓕ": "F",
                            Ｆ: "F",
                            Ḟ: "F",
                            Ƒ: "F",
                            Ꝼ: "F",
                            "Ⓖ": "G",
                            Ｇ: "G",
                            Ǵ: "G",
                            Ĝ: "G",
                            Ḡ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ǧ: "G",
                            Ģ: "G",
                            Ǥ: "G",
                            Ɠ: "G",
                            Ꞡ: "G",
                            Ᵹ: "G",
                            Ꝿ: "G",
                            "Ⓗ": "H",
                            Ｈ: "H",
                            Ĥ: "H",
                            Ḣ: "H",
                            Ḧ: "H",
                            Ȟ: "H",
                            Ḥ: "H",
                            Ḩ: "H",
                            Ḫ: "H",
                            Ħ: "H",
                            Ⱨ: "H",
                            Ⱶ: "H",
                            Ɥ: "H",
                            "Ⓘ": "I",
                            Ｉ: "I",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            İ: "I",
                            Ï: "I",
                            Ḯ: "I",
                            Ỉ: "I",
                            Ǐ: "I",
                            Ȉ: "I",
                            Ȋ: "I",
                            Ị: "I",
                            Į: "I",
                            Ḭ: "I",
                            Ɨ: "I",
                            "Ⓙ": "J",
                            Ｊ: "J",
                            Ĵ: "J",
                            Ɉ: "J",
                            "Ⓚ": "K",
                            Ｋ: "K",
                            Ḱ: "K",
                            Ǩ: "K",
                            Ḳ: "K",
                            Ķ: "K",
                            Ḵ: "K",
                            Ƙ: "K",
                            Ⱪ: "K",
                            Ꝁ: "K",
                            Ꝃ: "K",
                            Ꝅ: "K",
                            Ꞣ: "K",
                            "Ⓛ": "L",
                            Ｌ: "L",
                            Ŀ: "L",
                            Ĺ: "L",
                            Ľ: "L",
                            Ḷ: "L",
                            Ḹ: "L",
                            Ļ: "L",
                            Ḽ: "L",
                            Ḻ: "L",
                            Ł: "L",
                            Ƚ: "L",
                            Ɫ: "L",
                            Ⱡ: "L",
                            Ꝉ: "L",
                            Ꝇ: "L",
                            Ꞁ: "L",
                            Ǉ: "LJ",
                            ǈ: "Lj",
                            "Ⓜ": "M",
                            Ｍ: "M",
                            Ḿ: "M",
                            Ṁ: "M",
                            Ṃ: "M",
                            Ɱ: "M",
                            Ɯ: "M",
                            "Ⓝ": "N",
                            Ｎ: "N",
                            Ǹ: "N",
                            Ń: "N",
                            Ñ: "N",
                            Ṅ: "N",
                            Ň: "N",
                            Ṇ: "N",
                            Ņ: "N",
                            Ṋ: "N",
                            Ṉ: "N",
                            Ƞ: "N",
                            Ɲ: "N",
                            Ꞑ: "N",
                            Ꞥ: "N",
                            Ǌ: "NJ",
                            ǋ: "Nj",
                            "Ⓞ": "O",
                            Ｏ: "O",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Ồ: "O",
                            Ố: "O",
                            Ỗ: "O",
                            Ổ: "O",
                            Õ: "O",
                            Ṍ: "O",
                            Ȭ: "O",
                            Ṏ: "O",
                            Ō: "O",
                            Ṑ: "O",
                            Ṓ: "O",
                            Ŏ: "O",
                            Ȯ: "O",
                            Ȱ: "O",
                            Ö: "O",
                            Ȫ: "O",
                            Ỏ: "O",
                            Ő: "O",
                            Ǒ: "O",
                            Ȍ: "O",
                            Ȏ: "O",
                            Ơ: "O",
                            Ờ: "O",
                            Ớ: "O",
                            Ỡ: "O",
                            Ở: "O",
                            Ợ: "O",
                            Ọ: "O",
                            Ộ: "O",
                            Ǫ: "O",
                            Ǭ: "O",
                            Ø: "O",
                            Ǿ: "O",
                            Ɔ: "O",
                            Ɵ: "O",
                            Ꝋ: "O",
                            Ꝍ: "O",
                            Œ: "OE",
                            Ƣ: "OI",
                            Ꝏ: "OO",
                            Ȣ: "OU",
                            "Ⓟ": "P",
                            Ｐ: "P",
                            Ṕ: "P",
                            Ṗ: "P",
                            Ƥ: "P",
                            Ᵽ: "P",
                            Ꝑ: "P",
                            Ꝓ: "P",
                            Ꝕ: "P",
                            "Ⓠ": "Q",
                            Ｑ: "Q",
                            Ꝗ: "Q",
                            Ꝙ: "Q",
                            Ɋ: "Q",
                            "Ⓡ": "R",
                            Ｒ: "R",
                            Ŕ: "R",
                            Ṙ: "R",
                            Ř: "R",
                            Ȑ: "R",
                            Ȓ: "R",
                            Ṛ: "R",
                            Ṝ: "R",
                            Ŗ: "R",
                            Ṟ: "R",
                            Ɍ: "R",
                            Ɽ: "R",
                            Ꝛ: "R",
                            Ꞧ: "R",
                            Ꞃ: "R",
                            "Ⓢ": "S",
                            Ｓ: "S",
                            ẞ: "S",
                            Ś: "S",
                            Ṥ: "S",
                            Ŝ: "S",
                            Ṡ: "S",
                            Š: "S",
                            Ṧ: "S",
                            Ṣ: "S",
                            Ṩ: "S",
                            Ș: "S",
                            Ş: "S",
                            Ȿ: "S",
                            Ꞩ: "S",
                            Ꞅ: "S",
                            "Ⓣ": "T",
                            Ｔ: "T",
                            Ṫ: "T",
                            Ť: "T",
                            Ṭ: "T",
                            Ț: "T",
                            Ţ: "T",
                            Ṱ: "T",
                            Ṯ: "T",
                            Ŧ: "T",
                            Ƭ: "T",
                            Ʈ: "T",
                            Ⱦ: "T",
                            Ꞇ: "T",
                            Ꜩ: "TZ",
                            "Ⓤ": "U",
                            Ｕ: "U",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ũ: "U",
                            Ṹ: "U",
                            Ū: "U",
                            Ṻ: "U",
                            Ŭ: "U",
                            Ü: "U",
                            Ǜ: "U",
                            Ǘ: "U",
                            Ǖ: "U",
                            Ǚ: "U",
                            Ủ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ǔ: "U",
                            Ȕ: "U",
                            Ȗ: "U",
                            Ư: "U",
                            Ừ: "U",
                            Ứ: "U",
                            Ữ: "U",
                            Ử: "U",
                            Ự: "U",
                            Ụ: "U",
                            Ṳ: "U",
                            Ų: "U",
                            Ṷ: "U",
                            Ṵ: "U",
                            Ʉ: "U",
                            "Ⓥ": "V",
                            Ｖ: "V",
                            Ṽ: "V",
                            Ṿ: "V",
                            Ʋ: "V",
                            Ꝟ: "V",
                            Ʌ: "V",
                            Ꝡ: "VY",
                            "Ⓦ": "W",
                            Ｗ: "W",
                            Ẁ: "W",
                            Ẃ: "W",
                            Ŵ: "W",
                            Ẇ: "W",
                            Ẅ: "W",
                            Ẉ: "W",
                            Ⱳ: "W",
                            "Ⓧ": "X",
                            Ｘ: "X",
                            Ẋ: "X",
                            Ẍ: "X",
                            "Ⓨ": "Y",
                            Ｙ: "Y",
                            Ỳ: "Y",
                            Ý: "Y",
                            Ŷ: "Y",
                            Ỹ: "Y",
                            Ȳ: "Y",
                            Ẏ: "Y",
                            Ÿ: "Y",
                            Ỷ: "Y",
                            Ỵ: "Y",
                            Ƴ: "Y",
                            Ɏ: "Y",
                            Ỿ: "Y",
                            "Ⓩ": "Z",
                            Ｚ: "Z",
                            Ź: "Z",
                            Ẑ: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            Ẓ: "Z",
                            Ẕ: "Z",
                            Ƶ: "Z",
                            Ȥ: "Z",
                            Ɀ: "Z",
                            Ⱬ: "Z",
                            Ꝣ: "Z",
                            "ⓐ": "a",
                            ａ: "a",
                            ẚ: "a",
                            à: "a",
                            á: "a",
                            â: "a",
                            ầ: "a",
                            ấ: "a",
                            ẫ: "a",
                            ẩ: "a",
                            ã: "a",
                            ā: "a",
                            ă: "a",
                            ằ: "a",
                            ắ: "a",
                            ẵ: "a",
                            ẳ: "a",
                            ȧ: "a",
                            ǡ: "a",
                            ä: "a",
                            ǟ: "a",
                            ả: "a",
                            å: "a",
                            ǻ: "a",
                            ǎ: "a",
                            ȁ: "a",
                            ȃ: "a",
                            ạ: "a",
                            ậ: "a",
                            ặ: "a",
                            ḁ: "a",
                            ą: "a",
                            ⱥ: "a",
                            ɐ: "a",
                            ꜳ: "aa",
                            æ: "ae",
                            ǽ: "ae",
                            ǣ: "ae",
                            ꜵ: "ao",
                            ꜷ: "au",
                            ꜹ: "av",
                            ꜻ: "av",
                            ꜽ: "ay",
                            "ⓑ": "b",
                            ｂ: "b",
                            ḃ: "b",
                            ḅ: "b",
                            ḇ: "b",
                            ƀ: "b",
                            ƃ: "b",
                            ɓ: "b",
                            "ⓒ": "c",
                            ｃ: "c",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            ç: "c",
                            ḉ: "c",
                            ƈ: "c",
                            ȼ: "c",
                            ꜿ: "c",
                            ↄ: "c",
                            "ⓓ": "d",
                            ｄ: "d",
                            ḋ: "d",
                            ď: "d",
                            ḍ: "d",
                            ḑ: "d",
                            ḓ: "d",
                            ḏ: "d",
                            đ: "d",
                            ƌ: "d",
                            ɖ: "d",
                            ɗ: "d",
                            ꝺ: "d",
                            ǳ: "dz",
                            ǆ: "dz",
                            "ⓔ": "e",
                            ｅ: "e",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ề: "e",
                            ế: "e",
                            ễ: "e",
                            ể: "e",
                            ẽ: "e",
                            ē: "e",
                            ḕ: "e",
                            ḗ: "e",
                            ĕ: "e",
                            ė: "e",
                            ë: "e",
                            ẻ: "e",
                            ě: "e",
                            ȅ: "e",
                            ȇ: "e",
                            ẹ: "e",
                            ệ: "e",
                            ȩ: "e",
                            ḝ: "e",
                            ę: "e",
                            ḙ: "e",
                            ḛ: "e",
                            ɇ: "e",
                            ɛ: "e",
                            ǝ: "e",
                            "ⓕ": "f",
                            ｆ: "f",
                            ḟ: "f",
                            ƒ: "f",
                            ꝼ: "f",
                            "ⓖ": "g",
                            ｇ: "g",
                            ǵ: "g",
                            ĝ: "g",
                            ḡ: "g",
                            ğ: "g",
                            ġ: "g",
                            ǧ: "g",
                            ģ: "g",
                            ǥ: "g",
                            ɠ: "g",
                            ꞡ: "g",
                            ᵹ: "g",
                            ꝿ: "g",
                            "ⓗ": "h",
                            ｈ: "h",
                            ĥ: "h",
                            ḣ: "h",
                            ḧ: "h",
                            ȟ: "h",
                            ḥ: "h",
                            ḩ: "h",
                            ḫ: "h",
                            ẖ: "h",
                            ħ: "h",
                            ⱨ: "h",
                            ⱶ: "h",
                            ɥ: "h",
                            ƕ: "hv",
                            "ⓘ": "i",
                            ｉ: "i",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            ï: "i",
                            ḯ: "i",
                            ỉ: "i",
                            ǐ: "i",
                            ȉ: "i",
                            ȋ: "i",
                            ị: "i",
                            į: "i",
                            ḭ: "i",
                            ɨ: "i",
                            ı: "i",
                            "ⓙ": "j",
                            ｊ: "j",
                            ĵ: "j",
                            ǰ: "j",
                            ɉ: "j",
                            "ⓚ": "k",
                            ｋ: "k",
                            ḱ: "k",
                            ǩ: "k",
                            ḳ: "k",
                            ķ: "k",
                            ḵ: "k",
                            ƙ: "k",
                            ⱪ: "k",
                            ꝁ: "k",
                            ꝃ: "k",
                            ꝅ: "k",
                            ꞣ: "k",
                            "ⓛ": "l",
                            ｌ: "l",
                            ŀ: "l",
                            ĺ: "l",
                            ľ: "l",
                            ḷ: "l",
                            ḹ: "l",
                            ļ: "l",
                            ḽ: "l",
                            ḻ: "l",
                            ſ: "l",
                            ł: "l",
                            ƚ: "l",
                            ɫ: "l",
                            ⱡ: "l",
                            ꝉ: "l",
                            ꞁ: "l",
                            ꝇ: "l",
                            ǉ: "lj",
                            "ⓜ": "m",
                            ｍ: "m",
                            ḿ: "m",
                            ṁ: "m",
                            ṃ: "m",
                            ɱ: "m",
                            ɯ: "m",
                            "ⓝ": "n",
                            ｎ: "n",
                            ǹ: "n",
                            ń: "n",
                            ñ: "n",
                            ṅ: "n",
                            ň: "n",
                            ṇ: "n",
                            ņ: "n",
                            ṋ: "n",
                            ṉ: "n",
                            ƞ: "n",
                            ɲ: "n",
                            ŉ: "n",
                            ꞑ: "n",
                            ꞥ: "n",
                            ǌ: "nj",
                            "ⓞ": "o",
                            ｏ: "o",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            ồ: "o",
                            ố: "o",
                            ỗ: "o",
                            ổ: "o",
                            õ: "o",
                            ṍ: "o",
                            ȭ: "o",
                            ṏ: "o",
                            ō: "o",
                            ṑ: "o",
                            ṓ: "o",
                            ŏ: "o",
                            ȯ: "o",
                            ȱ: "o",
                            ö: "o",
                            ȫ: "o",
                            ỏ: "o",
                            ő: "o",
                            ǒ: "o",
                            ȍ: "o",
                            ȏ: "o",
                            ơ: "o",
                            ờ: "o",
                            ớ: "o",
                            ỡ: "o",
                            ở: "o",
                            ợ: "o",
                            ọ: "o",
                            ộ: "o",
                            ǫ: "o",
                            ǭ: "o",
                            ø: "o",
                            ǿ: "o",
                            ɔ: "o",
                            ꝋ: "o",
                            ꝍ: "o",
                            ɵ: "o",
                            œ: "oe",
                            ƣ: "oi",
                            ȣ: "ou",
                            ꝏ: "oo",
                            "ⓟ": "p",
                            ｐ: "p",
                            ṕ: "p",
                            ṗ: "p",
                            ƥ: "p",
                            ᵽ: "p",
                            ꝑ: "p",
                            ꝓ: "p",
                            ꝕ: "p",
                            "ⓠ": "q",
                            ｑ: "q",
                            ɋ: "q",
                            ꝗ: "q",
                            ꝙ: "q",
                            "ⓡ": "r",
                            ｒ: "r",
                            ŕ: "r",
                            ṙ: "r",
                            ř: "r",
                            ȑ: "r",
                            ȓ: "r",
                            ṛ: "r",
                            ṝ: "r",
                            ŗ: "r",
                            ṟ: "r",
                            ɍ: "r",
                            ɽ: "r",
                            ꝛ: "r",
                            ꞧ: "r",
                            ꞃ: "r",
                            "ⓢ": "s",
                            ｓ: "s",
                            ß: "s",
                            ś: "s",
                            ṥ: "s",
                            ŝ: "s",
                            ṡ: "s",
                            š: "s",
                            ṧ: "s",
                            ṣ: "s",
                            ṩ: "s",
                            ș: "s",
                            ş: "s",
                            ȿ: "s",
                            ꞩ: "s",
                            ꞅ: "s",
                            ẛ: "s",
                            "ⓣ": "t",
                            ｔ: "t",
                            ṫ: "t",
                            ẗ: "t",
                            ť: "t",
                            ṭ: "t",
                            ț: "t",
                            ţ: "t",
                            ṱ: "t",
                            ṯ: "t",
                            ŧ: "t",
                            ƭ: "t",
                            ʈ: "t",
                            ⱦ: "t",
                            ꞇ: "t",
                            ꜩ: "tz",
                            "ⓤ": "u",
                            ｕ: "u",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ũ: "u",
                            ṹ: "u",
                            ū: "u",
                            ṻ: "u",
                            ŭ: "u",
                            ü: "u",
                            ǜ: "u",
                            ǘ: "u",
                            ǖ: "u",
                            ǚ: "u",
                            ủ: "u",
                            ů: "u",
                            ű: "u",
                            ǔ: "u",
                            ȕ: "u",
                            ȗ: "u",
                            ư: "u",
                            ừ: "u",
                            ứ: "u",
                            ữ: "u",
                            ử: "u",
                            ự: "u",
                            ụ: "u",
                            ṳ: "u",
                            ų: "u",
                            ṷ: "u",
                            ṵ: "u",
                            ʉ: "u",
                            "ⓥ": "v",
                            ｖ: "v",
                            ṽ: "v",
                            ṿ: "v",
                            ʋ: "v",
                            ꝟ: "v",
                            ʌ: "v",
                            ꝡ: "vy",
                            "ⓦ": "w",
                            ｗ: "w",
                            ẁ: "w",
                            ẃ: "w",
                            ŵ: "w",
                            ẇ: "w",
                            ẅ: "w",
                            ẘ: "w",
                            ẉ: "w",
                            ⱳ: "w",
                            "ⓧ": "x",
                            ｘ: "x",
                            ẋ: "x",
                            ẍ: "x",
                            "ⓨ": "y",
                            ｙ: "y",
                            ỳ: "y",
                            ý: "y",
                            ŷ: "y",
                            ỹ: "y",
                            ȳ: "y",
                            ẏ: "y",
                            ÿ: "y",
                            ỷ: "y",
                            ẙ: "y",
                            ỵ: "y",
                            ƴ: "y",
                            ɏ: "y",
                            ỿ: "y",
                            "ⓩ": "z",
                            ｚ: "z",
                            ź: "z",
                            ẑ: "z",
                            ż: "z",
                            ž: "z",
                            ẓ: "z",
                            ẕ: "z",
                            ƶ: "z",
                            ȥ: "z",
                            ɀ: "z",
                            ⱬ: "z",
                            ꝣ: "z",
                            Ά: "Α",
                            Έ: "Ε",
                            Ή: "Η",
                            Ί: "Ι",
                            Ϊ: "Ι",
                            Ό: "Ο",
                            Ύ: "Υ",
                            Ϋ: "Υ",
                            Ώ: "Ω",
                            ά: "α",
                            έ: "ε",
                            ή: "η",
                            ί: "ι",
                            ϊ: "ι",
                            ΐ: "ι",
                            ό: "ο",
                            ύ: "υ",
                            ϋ: "υ",
                            ΰ: "υ",
                            ώ: "ω",
                            ς: "σ",
                            "’": "'"
                        }
                    }
                    )),
                    t.define("select2/data/base", ["../utils"], (function(e) {
                        function t(e, n) {
                            t.__super__.constructor.call(this)
                        }
                        return e.Extend(t, e.Observable),
                        t.prototype.current = function(e) {
                            throw new Error("The `current` method must be defined in child classes.")
                        }
                        ,
                        t.prototype.query = function(e, t) {
                            throw new Error("The `query` method must be defined in child classes.")
                        }
                        ,
                        t.prototype.bind = function(e, t) {}
                        ,
                        t.prototype.destroy = function() {}
                        ,
                        t.prototype.generateResultId = function(t, n) {
                            var i = t.id + "-result-";
                            return i += e.generateChars(4),
                            null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4),
                            i
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
                        function i(e, t) {
                            this.$element = e,
                            this.options = t,
                            i.__super__.constructor.call(this)
                        }
                        return t.Extend(i, e),
                        i.prototype.current = function(e) {
                            var t = this;
                            e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), (function(e) {
                                return t.item(n(e))
                            }
                            )))
                        }
                        ,
                        i.prototype.select = function(e) {
                            var t = this;
                            if (e.selected = !0,
                            null != e.element && "option" === e.element.tagName.toLowerCase())
                                return e.element.selected = !0,
                                void this.$element.trigger("input").trigger("change");
                            if (this.$element.prop("multiple"))
                                this.current((function(n) {
                                    var i = [];
                                    (e = [e]).push.apply(e, n);
                                    for (var s = 0; s < e.length; s++) {
                                        var r = e[s].id;
                                        -1 === i.indexOf(r) && i.push(r)
                                    }
                                    t.$element.val(i),
                                    t.$element.trigger("input").trigger("change")
                                }
                                ));
                            else {
                                var n = e.id;
                                this.$element.val(n),
                                this.$element.trigger("input").trigger("change")
                            }
                        }
                        ,
                        i.prototype.unselect = function(e) {
                            var t = this;
                            if (this.$element.prop("multiple")) {
                                if (e.selected = !1,
                                null != e.element && "option" === e.element.tagName.toLowerCase())
                                    return e.element.selected = !1,
                                    void this.$element.trigger("input").trigger("change");
                                this.current((function(n) {
                                    for (var i = [], s = 0; s < n.length; s++) {
                                        var r = n[s].id;
                                        r !== e.id && -1 === i.indexOf(r) && i.push(r)
                                    }
                                    t.$element.val(i),
                                    t.$element.trigger("input").trigger("change")
                                }
                                ))
                            }
                        }
                        ,
                        i.prototype.bind = function(e, t) {
                            var n = this;
                            this.container = e,
                            e.on("select", (function(e) {
                                n.select(e.data)
                            }
                            )),
                            e.on("unselect", (function(e) {
                                n.unselect(e.data)
                            }
                            ))
                        }
                        ,
                        i.prototype.destroy = function() {
                            this.$element.find("*").each((function() {
                                t.RemoveData(this)
                            }
                            ))
                        }
                        ,
                        i.prototype.query = function(e, t) {
                            var i = []
                              , s = this;
                            this.$element.children().each((function() {
                                if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
                                    var t = n(this)
                                      , r = s.item(t)
                                      , o = s.matches(e, r);
                                    null !== o && i.push(o)
                                }
                            }
                            )),
                            t({
                                results: i
                            })
                        }
                        ,
                        i.prototype.addOptions = function(e) {
                            this.$element.append(e)
                        }
                        ,
                        i.prototype.option = function(e) {
                            var i;
                            e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text,
                            void 0 !== e.id && (i.value = e.id),
                            e.disabled && (i.disabled = !0),
                            e.selected && (i.selected = !0),
                            e.title && (i.title = e.title);
                            var s = this._normalizeItem(e);
                            return s.element = i,
                            t.StoreData(i, "data", s),
                            n(i)
                        }
                        ,
                        i.prototype.item = function(e) {
                            var i = {};
                            if (null != (i = t.GetData(e[0], "data")))
                                return i;
                            var s = e[0];
                            if ("option" === s.tagName.toLowerCase())
                                i = {
                                    id: e.val(),
                                    text: e.text(),
                                    disabled: e.prop("disabled"),
                                    selected: e.prop("selected"),
                                    title: e.prop("title")
                                };
                            else if ("optgroup" === s.tagName.toLowerCase()) {
                                i = {
                                    text: e.prop("label"),
                                    children: [],
                                    title: e.prop("title")
                                };
                                for (var r = e.children("option"), o = [], a = 0; a < r.length; a++) {
                                    var l = n(r[a])
                                      , c = this.item(l);
                                    o.push(c)
                                }
                                i.children = o
                            }
                            return (i = this._normalizeItem(i)).element = e[0],
                            t.StoreData(e[0], "data", i),
                            i
                        }
                        ,
                        i.prototype._normalizeItem = function(e) {
                            e !== Object(e) && (e = {
                                id: e,
                                text: e
                            });
                            return null != (e = n.extend({}, {
                                text: ""
                            }, e)).id && (e.id = e.id.toString()),
                            null != e.text && (e.text = e.text.toString()),
                            null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                            n.extend({}, {
                                selected: !1,
                                disabled: !1
                            }, e)
                        }
                        ,
                        i.prototype.matches = function(e, t) {
                            return this.options.get("matcher")(e, t)
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
                        function i(e, t) {
                            this._dataToConvert = t.get("data") || [],
                            i.__super__.constructor.call(this, e, t)
                        }
                        return t.Extend(i, e),
                        i.prototype.bind = function(e, t) {
                            i.__super__.bind.call(this, e, t),
                            this.addOptions(this.convertToOptions(this._dataToConvert))
                        }
                        ,
                        i.prototype.select = function(e) {
                            var t = this.$element.find("option").filter((function(t, n) {
                                return n.value == e.id.toString()
                            }
                            ));
                            0 === t.length && (t = this.option(e),
                            this.addOptions(t)),
                            i.__super__.select.call(this, e)
                        }
                        ,
                        i.prototype.convertToOptions = function(e) {
                            var t = this
                              , i = this.$element.find("option")
                              , s = i.map((function() {
                                return t.item(n(this)).id
                            }
                            )).get()
                              , r = [];
                            function o(e) {
                                return function() {
                                    return n(this).val() == e.id
                                }
                            }
                            for (var a = 0; a < e.length; a++) {
                                var l = this._normalizeItem(e[a]);
                                if (s.indexOf(l.id) >= 0) {
                                    var c = i.filter(o(l))
                                      , d = this.item(c)
                                      , u = n.extend(!0, {}, l, d)
                                      , p = this.option(u);
                                    c.replaceWith(p)
                                } else {
                                    var h = this.option(l);
                                    if (l.children) {
                                        var f = this.convertToOptions(l.children);
                                        h.append(f)
                                    }
                                    r.push(h)
                                }
                            }
                            return r
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
                        function i(e, t) {
                            this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                            null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                            i.__super__.constructor.call(this, e, t)
                        }
                        return t.Extend(i, e),
                        i.prototype._applyDefaults = function(e) {
                            var t = {
                                data: function(e) {
                                    return n.extend({}, e, {
                                        q: e.term
                                    })
                                },
                                transport: function(e, t, i) {
                                    var s = n.ajax(e);
                                    return s.then(t),
                                    s.fail(i),
                                    s
                                }
                            };
                            return n.extend({}, t, e, !0)
                        }
                        ,
                        i.prototype.processResults = function(e) {
                            return e
                        }
                        ,
                        i.prototype.query = function(e, t) {
                            var i = this;
                            null != this._request && ("function" == typeof this._request.abort && this._request.abort(),
                            this._request = null);
                            var s = n.extend({
                                type: "GET"
                            }, this.ajaxOptions);
                            function r() {
                                var n = s.transport(s, (function(n) {
                                    var s = i.processResults(n, e);
                                    i.options.get("debug") && window.console && console.error && (s && s.results && Array.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                                    t(s)
                                }
                                ), (function() {
                                    (!("status"in n) || 0 !== n.status && "0" !== n.status) && i.trigger("results:message", {
                                        message: "errorLoading"
                                    })
                                }
                                ));
                                i._request = n
                            }
                            "function" == typeof s.url && (s.url = s.url.call(this.$element, e)),
                            "function" == typeof s.data && (s.data = s.data.call(this.$element, e)),
                            this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                            this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r()
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/data/tags", ["jquery"], (function(e) {
                        function t(e, t, n) {
                            var i = n.get("tags")
                              , s = n.get("createTag");
                            void 0 !== s && (this.createTag = s);
                            var r = n.get("insertTag");
                            if (void 0 !== r && (this.insertTag = r),
                            e.call(this, t, n),
                            Array.isArray(i))
                                for (var o = 0; o < i.length; o++) {
                                    var a = i[o]
                                      , l = this._normalizeItem(a)
                                      , c = this.option(l);
                                    this.$element.append(c)
                                }
                        }
                        return t.prototype.query = function(e, t, n) {
                            var i = this;
                            this._removeOldTags(),
                            null != t.term && null == t.page ? e.call(this, t, (function e(s, r) {
                                for (var o = s.results, a = 0; a < o.length; a++) {
                                    var l = o[a]
                                      , c = null != l.children && !e({
                                        results: l.children
                                    }, !0);
                                    if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c)
                                        return !r && (s.data = o,
                                        void n(s))
                                }
                                if (r)
                                    return !0;
                                var d = i.createTag(t);
                                if (null != d) {
                                    var u = i.option(d);
                                    u.attr("data-select2-tag", "true"),
                                    i.addOptions([u]),
                                    i.insertTag(o, d)
                                }
                                s.results = o,
                                n(s)
                            }
                            )) : e.call(this, t, n)
                        }
                        ,
                        t.prototype.createTag = function(e, t) {
                            if (null == t.term)
                                return null;
                            var n = t.term.trim();
                            return "" === n ? null : {
                                id: n,
                                text: n
                            }
                        }
                        ,
                        t.prototype.insertTag = function(e, t, n) {
                            t.unshift(n)
                        }
                        ,
                        t.prototype._removeOldTags = function(t) {
                            this.$element.find("option[data-select2-tag]").each((function() {
                                this.selected || e(this).remove()
                            }
                            ))
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/data/tokenizer", ["jquery"], (function(e) {
                        function t(e, t, n) {
                            var i = n.get("tokenizer");
                            void 0 !== i && (this.tokenizer = i),
                            e.call(this, t, n)
                        }
                        return t.prototype.bind = function(e, t, n) {
                            e.call(this, t, n),
                            this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                        }
                        ,
                        t.prototype.query = function(t, n, i) {
                            var s = this;
                            n.term = n.term || "";
                            var r = this.tokenizer(n, this.options, (function(t) {
                                var n = s._normalizeItem(t);
                                if (!s.$element.find("option").filter((function() {
                                    return e(this).val() === n.id
                                }
                                )).length) {
                                    var i = s.option(n);
                                    i.attr("data-select2-tag", !0),
                                    s._removeOldTags(),
                                    s.addOptions([i])
                                }
                                !function(e) {
                                    s.trigger("select", {
                                        data: e
                                    })
                                }(n)
                            }
                            ));
                            r.term !== n.term && (this.$search.length && (this.$search.val(r.term),
                            this.$search.trigger("focus")),
                            n.term = r.term),
                            t.call(this, n, i)
                        }
                        ,
                        t.prototype.tokenizer = function(t, n, i, s) {
                            for (var r = i.get("tokenSeparators") || [], o = n.term, a = 0, l = this.createTag || function(e) {
                                return {
                                    id: e.term,
                                    text: e.term
                                }
                            }
                            ; a < o.length; ) {
                                var c = o[a];
                                if (-1 !== r.indexOf(c)) {
                                    var d = o.substr(0, a)
                                      , u = l(e.extend({}, n, {
                                        term: d
                                    }));
                                    null != u ? (s(u),
                                    o = o.substr(a + 1) || "",
                                    a = 0) : a++
                                } else
                                    a++
                            }
                            return {
                                term: o
                            }
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/data/minimumInputLength", [], (function() {
                        function e(e, t, n) {
                            this.minimumInputLength = n.get("minimumInputLength"),
                            e.call(this, t, n)
                        }
                        return e.prototype.query = function(e, t, n) {
                            t.term = t.term || "",
                            t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            }) : e.call(this, t, n)
                        }
                        ,
                        e
                    }
                    )),
                    t.define("select2/data/maximumInputLength", [], (function() {
                        function e(e, t, n) {
                            this.maximumInputLength = n.get("maximumInputLength"),
                            e.call(this, t, n)
                        }
                        return e.prototype.query = function(e, t, n) {
                            t.term = t.term || "",
                            this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            }) : e.call(this, t, n)
                        }
                        ,
                        e
                    }
                    )),
                    t.define("select2/data/maximumSelectionLength", [], (function() {
                        function e(e, t, n) {
                            this.maximumSelectionLength = n.get("maximumSelectionLength"),
                            e.call(this, t, n)
                        }
                        return e.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                            t.on("select", (function() {
                                i._checkIfMaximumSelected()
                            }
                            ))
                        }
                        ,
                        e.prototype.query = function(e, t, n) {
                            var i = this;
                            this._checkIfMaximumSelected((function() {
                                e.call(i, t, n)
                            }
                            ))
                        }
                        ,
                        e.prototype._checkIfMaximumSelected = function(e, t) {
                            var n = this;
                            this.current((function(e) {
                                var i = null != e ? e.length : 0;
                                n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: n.maximumSelectionLength
                                    }
                                }) : t && t()
                            }
                            ))
                        }
                        ,
                        e
                    }
                    )),
                    t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
                        function n(e, t) {
                            this.$element = e,
                            this.options = t,
                            n.__super__.constructor.call(this)
                        }
                        return t.Extend(n, t.Observable),
                        n.prototype.render = function() {
                            var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return t.attr("dir", this.options.get("dir")),
                            this.$dropdown = t,
                            t
                        }
                        ,
                        n.prototype.bind = function() {}
                        ,
                        n.prototype.position = function(e, t) {}
                        ,
                        n.prototype.destroy = function() {
                            this.$dropdown.remove()
                        }
                        ,
                        n
                    }
                    )),
                    t.define("select2/dropdown/search", ["jquery"], (function(e) {
                        function t() {}
                        return t.prototype.render = function(t) {
                            var n = t.call(this)
                              , i = this.options.get("translations").get("search")
                              , s = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                            return this.$searchContainer = s,
                            this.$search = s.find("input"),
                            this.$search.prop("autocomplete", this.options.get("autocomplete")),
                            this.$search.attr("aria-label", i()),
                            n.prepend(s),
                            n
                        }
                        ,
                        t.prototype.bind = function(t, n, i) {
                            var s = this
                              , r = n.id + "-results";
                            t.call(this, n, i),
                            this.$search.on("keydown", (function(e) {
                                s.trigger("keypress", e),
                                s._keyUpPrevented = e.isDefaultPrevented()
                            }
                            )),
                            this.$search.on("input", (function(t) {
                                e(this).off("keyup")
                            }
                            )),
                            this.$search.on("keyup input", (function(e) {
                                s.handleSearch(e)
                            }
                            )),
                            n.on("open", (function() {
                                s.$search.attr("tabindex", 0),
                                s.$search.attr("aria-controls", r),
                                s.$search.trigger("focus"),
                                window.setTimeout((function() {
                                    s.$search.trigger("focus")
                                }
                                ), 0)
                            }
                            )),
                            n.on("close", (function() {
                                s.$search.attr("tabindex", -1),
                                s.$search.removeAttr("aria-controls"),
                                s.$search.removeAttr("aria-activedescendant"),
                                s.$search.val(""),
                                s.$search.trigger("blur")
                            }
                            )),
                            n.on("focus", (function() {
                                n.isOpen() || s.$search.trigger("focus")
                            }
                            )),
                            n.on("results:all", (function(e) {
                                null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer[0].classList.remove("select2-search--hide") : s.$searchContainer[0].classList.add("select2-search--hide"))
                            }
                            )),
                            n.on("results:focus", (function(e) {
                                e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant")
                            }
                            ))
                        }
                        ,
                        t.prototype.handleSearch = function(e) {
                            if (!this._keyUpPrevented) {
                                var t = this.$search.val();
                                this.trigger("query", {
                                    term: t
                                })
                            }
                            this._keyUpPrevented = !1
                        }
                        ,
                        t.prototype.showSearch = function(e, t) {
                            return !0
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/dropdown/hidePlaceholder", [], (function() {
                        function e(e, t, n, i) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                            e.call(this, t, n, i)
                        }
                        return e.prototype.append = function(e, t) {
                            t.results = this.removePlaceholder(t.results),
                            e.call(this, t)
                        }
                        ,
                        e.prototype.normalizePlaceholder = function(e, t) {
                            return "string" == typeof t && (t = {
                                id: "",
                                text: t
                            }),
                            t
                        }
                        ,
                        e.prototype.removePlaceholder = function(e, t) {
                            for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                                var s = t[i];
                                this.placeholder.id === s.id && n.splice(i, 1)
                            }
                            return n
                        }
                        ,
                        e
                    }
                    )),
                    t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
                        function t(e, t, n, i) {
                            this.lastParams = {},
                            e.call(this, t, n, i),
                            this.$loadingMore = this.createLoadingMore(),
                            this.loading = !1
                        }
                        return t.prototype.append = function(e, t) {
                            this.$loadingMore.remove(),
                            this.loading = !1,
                            e.call(this, t),
                            this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
                            this.loadMoreIfNeeded())
                        }
                        ,
                        t.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                            t.on("query", (function(e) {
                                i.lastParams = e,
                                i.loading = !0
                            }
                            )),
                            t.on("query:append", (function(e) {
                                i.lastParams = e,
                                i.loading = !0
                            }
                            )),
                            this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                        }
                        ,
                        t.prototype.loadMoreIfNeeded = function() {
                            var t = e.contains(document.documentElement, this.$loadingMore[0]);
                            !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore()
                        }
                        ,
                        t.prototype.loadMore = function() {
                            this.loading = !0;
                            var t = e.extend({}, {
                                page: 1
                            }, this.lastParams);
                            t.page++,
                            this.trigger("query:append", t)
                        }
                        ,
                        t.prototype.showLoadingMore = function(e, t) {
                            return t.pagination && t.pagination.more
                        }
                        ,
                        t.prototype.createLoadingMore = function() {
                            var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>')
                              , n = this.options.get("translations").get("loadingMore");
                            return t.html(n(this.lastParams)),
                            t
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
                        function n(t, n, i) {
                            this.$dropdownParent = e(i.get("dropdownParent") || document.body),
                            t.call(this, n, i)
                        }
                        return n.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                            t.on("open", (function() {
                                i._showDropdown(),
                                i._attachPositioningHandler(t),
                                i._bindContainerResultHandlers(t)
                            }
                            )),
                            t.on("close", (function() {
                                i._hideDropdown(),
                                i._detachPositioningHandler(t)
                            }
                            )),
                            this.$dropdownContainer.on("mousedown", (function(e) {
                                e.stopPropagation()
                            }
                            ))
                        }
                        ,
                        n.prototype.destroy = function(e) {
                            e.call(this),
                            this.$dropdownContainer.remove()
                        }
                        ,
                        n.prototype.position = function(e, t, n) {
                            t.attr("class", n.attr("class")),
                            t[0].classList.remove("select2"),
                            t[0].classList.add("select2-container--open"),
                            t.css({
                                position: "absolute",
                                top: -999999
                            }),
                            this.$container = n
                        }
                        ,
                        n.prototype.render = function(t) {
                            var n = e("<span></span>")
                              , i = t.call(this);
                            return n.append(i),
                            this.$dropdownContainer = n,
                            n
                        }
                        ,
                        n.prototype._hideDropdown = function(e) {
                            this.$dropdownContainer.detach()
                        }
                        ,
                        n.prototype._bindContainerResultHandlers = function(e, t) {
                            if (!this._containerResultsHandlersBound) {
                                var n = this;
                                t.on("results:all", (function() {
                                    n._positionDropdown(),
                                    n._resizeDropdown()
                                }
                                )),
                                t.on("results:append", (function() {
                                    n._positionDropdown(),
                                    n._resizeDropdown()
                                }
                                )),
                                t.on("results:message", (function() {
                                    n._positionDropdown(),
                                    n._resizeDropdown()
                                }
                                )),
                                t.on("select", (function() {
                                    n._positionDropdown(),
                                    n._resizeDropdown()
                                }
                                )),
                                t.on("unselect", (function() {
                                    n._positionDropdown(),
                                    n._resizeDropdown()
                                }
                                )),
                                this._containerResultsHandlersBound = !0
                            }
                        }
                        ,
                        n.prototype._attachPositioningHandler = function(n, i) {
                            var s = this
                              , r = "scroll.select2." + i.id
                              , o = "resize.select2." + i.id
                              , a = "orientationchange.select2." + i.id
                              , l = this.$container.parents().filter(t.hasScroll);
                            l.each((function() {
                                t.StoreData(this, "select2-scroll-position", {
                                    x: e(this).scrollLeft(),
                                    y: e(this).scrollTop()
                                })
                            }
                            )),
                            l.on(r, (function(n) {
                                var i = t.GetData(this, "select2-scroll-position");
                                e(this).scrollTop(i.y)
                            }
                            )),
                            e(window).on(r + " " + o + " " + a, (function(e) {
                                s._positionDropdown(),
                                s._resizeDropdown()
                            }
                            ))
                        }
                        ,
                        n.prototype._detachPositioningHandler = function(n, i) {
                            var s = "scroll.select2." + i.id
                              , r = "resize.select2." + i.id
                              , o = "orientationchange.select2." + i.id;
                            this.$container.parents().filter(t.hasScroll).off(s),
                            e(window).off(s + " " + r + " " + o)
                        }
                        ,
                        n.prototype._positionDropdown = function() {
                            var t = e(window)
                              , n = this.$dropdown[0].classList.contains("select2-dropdown--above")
                              , i = this.$dropdown[0].classList.contains("select2-dropdown--below")
                              , s = null
                              , r = this.$container.offset();
                            r.bottom = r.top + this.$container.outerHeight(!1);
                            var o = {
                                height: this.$container.outerHeight(!1)
                            };
                            o.top = r.top,
                            o.bottom = r.top + o.height;
                            var a = this.$dropdown.outerHeight(!1)
                              , l = t.scrollTop()
                              , c = t.scrollTop() + t.height()
                              , d = l < r.top - a
                              , u = c > r.bottom + a
                              , p = {
                                left: r.left,
                                top: o.bottom
                            }
                              , h = this.$dropdownParent;
                            "static" === h.css("position") && (h = h.offsetParent());
                            var f = {
                                top: 0,
                                left: 0
                            };
                            (e.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()),
                            p.top -= f.top,
                            p.left -= f.left,
                            n || i || (s = "below"),
                            u || !d || n ? !d && u && n && (s = "below") : s = "above",
                            ("above" == s || n && "below" !== s) && (p.top = o.top - f.top - a),
                            null != s && (this.$dropdown[0].classList.remove("select2-dropdown--below"),
                            this.$dropdown[0].classList.remove("select2-dropdown--above"),
                            this.$dropdown[0].classList.add("select2-dropdown--" + s),
                            this.$container[0].classList.remove("select2-container--below"),
                            this.$container[0].classList.remove("select2-container--above"),
                            this.$container[0].classList.add("select2-container--" + s)),
                            this.$dropdownContainer.css(p)
                        }
                        ,
                        n.prototype._resizeDropdown = function() {
                            var e = {
                                width: this.$container.outerWidth(!1) + "px"
                            };
                            this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                            e.position = "relative",
                            e.width = "auto"),
                            this.$dropdown.css(e)
                        }
                        ,
                        n.prototype._showDropdown = function(e) {
                            this.$dropdownContainer.appendTo(this.$dropdownParent),
                            this._positionDropdown(),
                            this._resizeDropdown()
                        }
                        ,
                        n
                    }
                    )),
                    t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                        function e(t) {
                            for (var n = 0, i = 0; i < t.length; i++) {
                                var s = t[i];
                                s.children ? n += e(s.children) : n++
                            }
                            return n
                        }
                        function t(e, t, n, i) {
                            this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                            this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                            e.call(this, t, n, i)
                        }
                        return t.prototype.showSearch = function(t, n) {
                            return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
                        function t() {}
                        return t.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                            t.on("close", (function(e) {
                                i._handleSelectOnClose(e)
                            }
                            ))
                        }
                        ,
                        t.prototype._handleSelectOnClose = function(t, n) {
                            if (n && null != n.originalSelect2Event) {
                                var i = n.originalSelect2Event;
                                if ("select" === i._type || "unselect" === i._type)
                                    return
                            }
                            var s = this.getHighlightedResults();
                            if (!(s.length < 1)) {
                                var r = e.GetData(s[0], "data");
                                null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                                    data: r
                                })
                            }
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/dropdown/closeOnSelect", [], (function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                            t.on("select", (function(e) {
                                i._selectTriggered(e)
                            }
                            )),
                            t.on("unselect", (function(e) {
                                i._selectTriggered(e)
                            }
                            ))
                        }
                        ,
                        e.prototype._selectTriggered = function(e, t) {
                            var n = t.originalEvent;
                            n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                                originalEvent: n,
                                originalSelect2Event: t
                            })
                        }
                        ,
                        e
                    }
                    )),
                    t.define("select2/dropdown/dropdownCss", ["../utils"], (function(e) {
                        function t() {}
                        return t.prototype.render = function(t) {
                            var n = t.call(this)
                              , i = this.options.get("dropdownCssClass") || "";
                            return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                            e.copyNonInternalCssClasses(n[0], this.$element[0])),
                            n.addClass(i),
                            n
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/dropdown/tagsSearchHighlight", ["../utils"], (function(e) {
                        function t() {}
                        return t.prototype.highlightFirstItem = function(t) {
                            var n = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
                            if (n.length > 0) {
                                var i = n.first()
                                  , s = e.GetData(i[0], "data").element;
                                if (s && s.getAttribute && "true" === s.getAttribute("data-select2-tag"))
                                    return void i.trigger("mouseenter")
                            }
                            t.call(this)
                        }
                        ,
                        t
                    }
                    )),
                    t.define("select2/i18n/en", [], (function() {
                        return {
                            errorLoading: function() {
                                return "The results could not be loaded."
                            },
                            inputTooLong: function(e) {
                                var t = e.input.length - e.maximum
                                  , n = "Please delete " + t + " character";
                                return 1 != t && (n += "s"),
                                n
                            },
                            inputTooShort: function(e) {
                                return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                            },
                            loadingMore: function() {
                                return "Loading more results…"
                            },
                            maximumSelected: function(e) {
                                var t = "You can only select " + e.maximum + " item";
                                return 1 != e.maximum && (t += "s"),
                                t
                            },
                            noResults: function() {
                                return "No results found"
                            },
                            searching: function() {
                                return "Searching…"
                            },
                            removeAllItems: function() {
                                return "Remove all items"
                            },
                            removeItem: function() {
                                return "Remove item"
                            },
                            search: function() {
                                return "Search"
                            }
                        }
                    }
                    )),
                    t.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], (function(e, t, n, i, s, r, o, a, l, c, d, u, p, h, f, m, g, v, y, b, w, x, E, T, S, _, C, A, $, k, D) {
                        function L() {
                            this.reset()
                        }
                        return L.prototype.apply = function(d) {
                            if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter && (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = h : d.dataAdapter = p,
                            d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)),
                            d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)),
                            d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)),
                            d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)),
                            null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = c.Decorate(d.dataAdapter, g))),
                            null == d.resultsAdapter && (d.resultsAdapter = t,
                            null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, T)),
                            null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, E)),
                            d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C)),
                            d.tags && (d.resultsAdapter = c.Decorate(d.resultsAdapter, k))),
                            null == d.dropdownAdapter) {
                                if (d.multiple)
                                    d.dropdownAdapter = w;
                                else {
                                    var u = c.Decorate(w, x);
                                    d.dropdownAdapter = u
                                }
                                0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, _)),
                                d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, A)),
                                null != d.dropdownCssClass && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, $)),
                                d.dropdownAdapter = c.Decorate(d.dropdownAdapter, S)
                            }
                            null == d.selectionAdapter && (d.multiple ? d.selectionAdapter = i : d.selectionAdapter = n,
                            null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)),
                            d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)),
                            d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)),
                            null != d.selectionCssClass && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)),
                            d.selectionAdapter = c.Decorate(d.selectionAdapter, l)),
                            d.language = this._resolveLanguage(d.language),
                            d.language.push("en");
                            for (var D = [], L = 0; L < d.language.length; L++) {
                                var O = d.language[L];
                                -1 === D.indexOf(O) && D.push(O)
                            }
                            return d.language = D,
                            d.translations = this._processTranslations(d.language, d.debug),
                            d
                        }
                        ,
                        L.prototype.reset = function() {
                            function t(e) {
                                return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                                    return u[e] || e
                                }
                                ))
                            }
                            this.defaults = {
                                amdLanguageBase: "./i18n/",
                                autocomplete: "off",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: c.escapeMarkup,
                                language: {},
                                matcher: function n(i, s) {
                                    if (null == i.term || "" === i.term.trim())
                                        return s;
                                    if (s.children && s.children.length > 0) {
                                        for (var r = e.extend(!0, {}, s), o = s.children.length - 1; o >= 0; o--)
                                            null == n(i, s.children[o]) && r.children.splice(o, 1);
                                        return r.children.length > 0 ? r : n(i, r)
                                    }
                                    var a = t(s.text).toUpperCase()
                                      , l = t(i.term).toUpperCase();
                                    return a.indexOf(l) > -1 ? s : null
                                },
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                scrollAfterSelect: !1,
                                sorter: function(e) {
                                    return e
                                },
                                templateResult: function(e) {
                                    return e.text
                                },
                                templateSelection: function(e) {
                                    return e.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }
                        ,
                        L.prototype.applyFromElement = function(e, t) {
                            var n = e.language
                              , i = this.defaults.language
                              , s = t.prop("lang")
                              , r = t.closest("[lang]").prop("lang")
                              , o = Array.prototype.concat.call(this._resolveLanguage(s), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(r));
                            return e.language = o,
                            e
                        }
                        ,
                        L.prototype._resolveLanguage = function(t) {
                            if (!t)
                                return [];
                            if (e.isEmptyObject(t))
                                return [];
                            if (e.isPlainObject(t))
                                return [t];
                            var n;
                            n = Array.isArray(t) ? t : [t];
                            for (var i = [], s = 0; s < n.length; s++)
                                if (i.push(n[s]),
                                "string" == typeof n[s] && n[s].indexOf("-") > 0) {
                                    var r = n[s].split("-")[0];
                                    i.push(r)
                                }
                            return i
                        }
                        ,
                        L.prototype._processTranslations = function(t, n) {
                            for (var i = new d, s = 0; s < t.length; s++) {
                                var r = new d
                                  , o = t[s];
                                if ("string" == typeof o)
                                    try {
                                        r = d.loadPath(o)
                                    } catch (e) {
                                        try {
                                            o = this.defaults.amdLanguageBase + o,
                                            r = d.loadPath(o)
                                        } catch (e) {
                                            n && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.')
                                        }
                                    }
                                else
                                    r = e.isPlainObject(o) ? new d(o) : o;
                                i.extend(r)
                            }
                            return i
                        }
                        ,
                        L.prototype.set = function(t, n) {
                            var i = {};
                            i[e.camelCase(t)] = n;
                            var s = c._convertData(i);
                            e.extend(!0, this.defaults, s)
                        }
                        ,
                        new L
                    }
                    )),
                    t.define("select2/options", ["jquery", "./defaults", "./utils"], (function(e, t, n) {
                        function i(e, n) {
                            this.options = e,
                            null != n && this.fromElement(n),
                            null != n && (this.options = t.applyFromElement(this.options, n)),
                            this.options = t.apply(this.options)
                        }
                        return i.prototype.fromElement = function(t) {
                            var i = ["select2"];
                            null == this.options.multiple && (this.options.multiple = t.prop("multiple")),
                            null == this.options.disabled && (this.options.disabled = t.prop("disabled")),
                            null == this.options.autocomplete && t.prop("autocomplete") && (this.options.autocomplete = t.prop("autocomplete")),
                            null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                            t.prop("disabled", this.options.disabled),
                            t.prop("multiple", this.options.multiple),
                            n.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                            n.StoreData(t[0], "data", n.GetData(t[0], "select2Tags")),
                            n.StoreData(t[0], "tags", !0)),
                            n.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                            t.attr("ajax--url", n.GetData(t[0], "ajaxUrl")),
                            n.StoreData(t[0], "ajax-Url", n.GetData(t[0], "ajaxUrl")));
                            var s = {};
                            function r(e, t) {
                                return t.toUpperCase()
                            }
                            for (var o = 0; o < t[0].attributes.length; o++) {
                                var a = t[0].attributes[o].name
                                  , l = "data-";
                                if (a.substr(0, l.length) == l) {
                                    var c = a.substring(l.length)
                                      , d = n.GetData(t[0], c);
                                    s[c.replace(/-([a-z])/g, r)] = d
                                }
                            }
                            e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset && (s = e.extend(!0, {}, t[0].dataset, s));
                            var u = e.extend(!0, {}, n.GetData(t[0]), s);
                            for (var p in u = n._convertData(u))
                                i.indexOf(p) > -1 || (e.isPlainObject(this.options[p]) ? e.extend(this.options[p], u[p]) : this.options[p] = u[p]);
                            return this
                        }
                        ,
                        i.prototype.get = function(e) {
                            return this.options[e]
                        }
                        ,
                        i.prototype.set = function(e, t) {
                            this.options[e] = t
                        }
                        ,
                        i
                    }
                    )),
                    t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, i) {
                        var s = function e(i, s) {
                            null != n.GetData(i[0], "select2") && n.GetData(i[0], "select2").destroy(),
                            this.$element = i,
                            this.id = this._generateId(i),
                            s = s || {},
                            this.options = new t(s,i),
                            e.__super__.constructor.call(this);
                            var r = i.attr("tabindex") || 0;
                            n.StoreData(i[0], "old-tabindex", r),
                            i.attr("tabindex", "-1");
                            var o = this.options.get("dataAdapter");
                            this.dataAdapter = new o(i,this.options);
                            var a = this.render();
                            this._placeContainer(a);
                            var l = this.options.get("selectionAdapter");
                            this.selection = new l(i,this.options),
                            this.$selection = this.selection.render(),
                            this.selection.position(this.$selection, a);
                            var c = this.options.get("dropdownAdapter");
                            this.dropdown = new c(i,this.options),
                            this.$dropdown = this.dropdown.render(),
                            this.dropdown.position(this.$dropdown, a);
                            var d = this.options.get("resultsAdapter");
                            this.results = new d(i,this.options,this.dataAdapter),
                            this.$results = this.results.render(),
                            this.results.position(this.$results, this.$dropdown);
                            var u = this;
                            this._bindAdapters(),
                            this._registerDomEvents(),
                            this._registerDataEvents(),
                            this._registerSelectionEvents(),
                            this._registerDropdownEvents(),
                            this._registerResultsEvents(),
                            this._registerEvents(),
                            this.dataAdapter.current((function(e) {
                                u.trigger("selection:update", {
                                    data: e
                                })
                            }
                            )),
                            i[0].classList.add("select2-hidden-accessible"),
                            i.attr("aria-hidden", "true"),
                            this._syncAttributes(),
                            n.StoreData(i[0], "select2", this),
                            i.data("select2", this)
                        };
                        return n.Extend(s, n.Observable),
                        s.prototype._generateId = function(e) {
                            return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                        }
                        ,
                        s.prototype._placeContainer = function(e) {
                            e.insertAfter(this.$element);
                            var t = this._resolveWidth(this.$element, this.options.get("width"));
                            null != t && e.css("width", t)
                        }
                        ,
                        s.prototype._resolveWidth = function(e, t) {
                            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == t) {
                                var i = this._resolveWidth(e, "style");
                                return null != i ? i : this._resolveWidth(e, "element")
                            }
                            if ("element" == t) {
                                var s = e.outerWidth(!1);
                                return s <= 0 ? "auto" : s + "px"
                            }
                            if ("style" == t) {
                                var r = e.attr("style");
                                if ("string" != typeof r)
                                    return null;
                                for (var o = r.split(";"), a = 0, l = o.length; a < l; a += 1) {
                                    var c = o[a].replace(/\s/g, "").match(n);
                                    if (null !== c && c.length >= 1)
                                        return c[1]
                                }
                                return null
                            }
                            return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
                        }
                        ,
                        s.prototype._bindAdapters = function() {
                            this.dataAdapter.bind(this, this.$container),
                            this.selection.bind(this, this.$container),
                            this.dropdown.bind(this, this.$container),
                            this.results.bind(this, this.$container)
                        }
                        ,
                        s.prototype._registerDomEvents = function() {
                            var e = this;
                            this.$element.on("change.select2", (function() {
                                e.dataAdapter.current((function(t) {
                                    e.trigger("selection:update", {
                                        data: t
                                    })
                                }
                                ))
                            }
                            )),
                            this.$element.on("focus.select2", (function(t) {
                                e.trigger("focus", t)
                            }
                            )),
                            this._syncA = n.bind(this._syncAttributes, this),
                            this._syncS = n.bind(this._syncSubtree, this),
                            this._observer = new window.MutationObserver((function(t) {
                                e._syncA(),
                                e._syncS(t)
                            }
                            )),
                            this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })
                        }
                        ,
                        s.prototype._registerDataEvents = function() {
                            var e = this;
                            this.dataAdapter.on("*", (function(t, n) {
                                e.trigger(t, n)
                            }
                            ))
                        }
                        ,
                        s.prototype._registerSelectionEvents = function() {
                            var e = this
                              , t = ["toggle", "focus"];
                            this.selection.on("toggle", (function() {
                                e.toggleDropdown()
                            }
                            )),
                            this.selection.on("focus", (function(t) {
                                e.focus(t)
                            }
                            )),
                            this.selection.on("*", (function(n, i) {
                                -1 === t.indexOf(n) && e.trigger(n, i)
                            }
                            ))
                        }
                        ,
                        s.prototype._registerDropdownEvents = function() {
                            var e = this;
                            this.dropdown.on("*", (function(t, n) {
                                e.trigger(t, n)
                            }
                            ))
                        }
                        ,
                        s.prototype._registerResultsEvents = function() {
                            var e = this;
                            this.results.on("*", (function(t, n) {
                                e.trigger(t, n)
                            }
                            ))
                        }
                        ,
                        s.prototype._registerEvents = function() {
                            var e = this;
                            this.on("open", (function() {
                                e.$container[0].classList.add("select2-container--open")
                            }
                            )),
                            this.on("close", (function() {
                                e.$container[0].classList.remove("select2-container--open")
                            }
                            )),
                            this.on("enable", (function() {
                                e.$container[0].classList.remove("select2-container--disabled")
                            }
                            )),
                            this.on("disable", (function() {
                                e.$container[0].classList.add("select2-container--disabled")
                            }
                            )),
                            this.on("blur", (function() {
                                e.$container[0].classList.remove("select2-container--focus")
                            }
                            )),
                            this.on("query", (function(t) {
                                e.isOpen() || e.trigger("open", {}),
                                this.dataAdapter.query(t, (function(n) {
                                    e.trigger("results:all", {
                                        data: n,
                                        query: t
                                    })
                                }
                                ))
                            }
                            )),
                            this.on("query:append", (function(t) {
                                this.dataAdapter.query(t, (function(n) {
                                    e.trigger("results:append", {
                                        data: n,
                                        query: t
                                    })
                                }
                                ))
                            }
                            )),
                            this.on("keypress", (function(t) {
                                var n = t.which;
                                e.isOpen() ? n === i.ESC || n === i.UP && t.altKey ? (e.close(t),
                                t.preventDefault()) : n === i.ENTER || n === i.TAB ? (e.trigger("results:select", {}),
                                t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}),
                                t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}),
                                t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}),
                                t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(),
                                t.preventDefault())
                            }
                            ))
                        }
                        ,
                        s.prototype._syncAttributes = function() {
                            this.options.set("disabled", this.$element.prop("disabled")),
                            this.isDisabled() ? (this.isOpen() && this.close(),
                            this.trigger("disable", {})) : this.trigger("enable", {})
                        }
                        ,
                        s.prototype._isChangeMutation = function(e) {
                            var t = this;
                            if (e.addedNodes && e.addedNodes.length > 0) {
                                for (var n = 0; n < e.addedNodes.length; n++)
                                    if (e.addedNodes[n].selected)
                                        return !0
                            } else {
                                if (e.removedNodes && e.removedNodes.length > 0)
                                    return !0;
                                if (Array.isArray(e))
                                    return e.some((function(e) {
                                        return t._isChangeMutation(e)
                                    }
                                    ))
                            }
                            return !1
                        }
                        ,
                        s.prototype._syncSubtree = function(e) {
                            var t = this._isChangeMutation(e)
                              , n = this;
                            t && this.dataAdapter.current((function(e) {
                                n.trigger("selection:update", {
                                    data: e
                                })
                            }
                            ))
                        }
                        ,
                        s.prototype.trigger = function(e, t) {
                            var n = s.__super__.trigger
                              , i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting",
                                clear: "clearing"
                            };
                            if (void 0 === t && (t = {}),
                            e in i) {
                                var r = i[e]
                                  , o = {
                                    prevented: !1,
                                    name: e,
                                    args: t
                                };
                                if (n.call(this, r, o),
                                o.prevented)
                                    return void (t.prevented = !0)
                            }
                            n.call(this, e, t)
                        }
                        ,
                        s.prototype.toggleDropdown = function() {
                            this.isDisabled() || (this.isOpen() ? this.close() : this.open())
                        }
                        ,
                        s.prototype.open = function() {
                            this.isOpen() || this.isDisabled() || this.trigger("query", {})
                        }
                        ,
                        s.prototype.close = function(e) {
                            this.isOpen() && this.trigger("close", {
                                originalEvent: e
                            })
                        }
                        ,
                        s.prototype.isEnabled = function() {
                            return !this.isDisabled()
                        }
                        ,
                        s.prototype.isDisabled = function() {
                            return this.options.get("disabled")
                        }
                        ,
                        s.prototype.isOpen = function() {
                            return this.$container[0].classList.contains("select2-container--open")
                        }
                        ,
                        s.prototype.hasFocus = function() {
                            return this.$container[0].classList.contains("select2-container--focus")
                        }
                        ,
                        s.prototype.focus = function(e) {
                            this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"),
                            this.trigger("focus", {}))
                        }
                        ,
                        s.prototype.enable = function(e) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                            null != e && 0 !== e.length || (e = [!0]);
                            var t = !e[0];
                            this.$element.prop("disabled", t)
                        }
                        ,
                        s.prototype.data = function() {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var e = [];
                            return this.dataAdapter.current((function(t) {
                                e = t
                            }
                            )),
                            e
                        }
                        ,
                        s.prototype.val = function(e) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                            null == e || 0 === e.length)
                                return this.$element.val();
                            var t = e[0];
                            Array.isArray(t) && (t = t.map((function(e) {
                                return e.toString()
                            }
                            ))),
                            this.$element.val(t).trigger("input").trigger("change")
                        }
                        ,
                        s.prototype.destroy = function() {
                            n.RemoveData(this.$container[0]),
                            this.$container.remove(),
                            this._observer.disconnect(),
                            this._observer = null,
                            this._syncA = null,
                            this._syncS = null,
                            this.$element.off(".select2"),
                            this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                            this.$element[0].classList.remove("select2-hidden-accessible"),
                            this.$element.attr("aria-hidden", "false"),
                            n.RemoveData(this.$element[0]),
                            this.$element.removeData("select2"),
                            this.dataAdapter.destroy(),
                            this.selection.destroy(),
                            this.dropdown.destroy(),
                            this.results.destroy(),
                            this.dataAdapter = null,
                            this.selection = null,
                            this.dropdown = null,
                            this.results = null
                        }
                        ,
                        s.prototype.render = function() {
                            var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return t.attr("dir", this.options.get("dir")),
                            this.$container = t,
                            this.$container[0].classList.add("select2-container--" + this.options.get("theme")),
                            n.StoreData(t[0], "element", this.$element),
                            t
                        }
                        ,
                        s
                    }
                    )),
                    t.define("jquery-mousewheel", ["jquery"], (function(e) {
                        return e
                    }
                    )),
                    t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, i, s) {
                        if (null == e.fn.select2) {
                            var r = ["open", "close", "destroy"];
                            e.fn.select2 = function(t) {
                                if ("object" === a(t = t || {}))
                                    return this.each((function() {
                                        var i = e.extend(!0, {}, t);
                                        new n(e(this),i)
                                    }
                                    )),
                                    this;
                                if ("string" == typeof t) {
                                    var i, o = Array.prototype.slice.call(arguments, 1);
                                    return this.each((function() {
                                        var e = s.GetData(this, "select2");
                                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                                        i = e[t].apply(e, o)
                                    }
                                    )),
                                    r.indexOf(t) > -1 ? this : i
                                }
                                throw new Error("Invalid arguments for Select2: " + t)
                            }
                        }
                        return null == e.fn.select2.defaults && (e.fn.select2.defaults = i),
                        n
                    }
                    )),
                    {
                        define: t.define,
                        require: t.require
                    }
                }()
                  , n = t.require("jquery.select2");
                return e.fn.select2.amd = t,
                n
            }
            ,
            void 0 === (r = i.apply(t, s)) || (e.exports = r)
        }
        ,
        140: (e,t,n)=>{
            var i = n(755);
            i(".nav-tabs .nav-link").on("shown.bs.tab", (function(e) {
                i(".masonrygrid").length > 0 && setTimeout((function() {
                    i(".masonrygrid").masonry({
                        itemSelector: ".grid-item"
                    })
                }
                ), 10)
            }
            ))
        }
        ,
        734: function(e, t, n) {
            !function(e, t, n) {
                "use strict";
                function i(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var s = i(t)
                  , r = i(n);
                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                function a(e, t, n) {
                    return t && o(e.prototype, t),
                    n && o(e, n),
                    e
                }
                function l() {
                    return l = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n)
                                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                        }
                        return e
                    }
                    ,
                    l.apply(this, arguments)
                }
                function c(e, t) {
                    return c = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                        e
                    }
                    ,
                    c(e, t)
                }
                var d = "transitionend";
                function u(e) {
                    var t = this
                      , n = !1;
                    return s.default(this).one(p.TRANSITION_END, (function() {
                        n = !0
                    }
                    )),
                    setTimeout((function() {
                        n || p.triggerTransitionEnd(t)
                    }
                    ), e),
                    this
                }
                var p = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function(e) {
                        var t = e.getAttribute("data-target");
                        if (!t || "#" === t) {
                            var n = e.getAttribute("href");
                            t = n && "#" !== n ? n.trim() : ""
                        }
                        try {
                            return document.querySelector(t) ? t : null
                        } catch (e) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function(e) {
                        if (!e)
                            return 0;
                        var t = s.default(e).css("transition-duration")
                          , n = s.default(e).css("transition-delay")
                          , i = parseFloat(t)
                          , r = parseFloat(n);
                        return i || r ? (t = t.split(",")[0],
                        n = n.split(",")[0],
                        1e3 * (parseFloat(t) + parseFloat(n))) : 0
                    },
                    reflow: function(e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        s.default(e).trigger(d)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(d)
                    },
                    isElement: function(e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function(e, t, n) {
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i)) {
                                var s = n[i]
                                  , r = t[i]
                                  , o = r && p.isElement(r) ? "element" : null == (a = r) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                                if (!new RegExp(s).test(o))
                                    throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + s + '".')
                            }
                        var a
                    },
                    findShadowRoot: function(e) {
                        if (!document.documentElement.attachShadow)
                            return null;
                        if ("function" == typeof e.getRootNode) {
                            var t = e.getRootNode();
                            return t instanceof ShadowRoot ? t : null
                        }
                        return e instanceof ShadowRoot ? e : e.parentNode ? p.findShadowRoot(e.parentNode) : null
                    },
                    jQueryDetection: function() {
                        if (void 0 === s.default)
                            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                        var e = s.default.fn.jquery.split(" ")[0].split(".");
                        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
                            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                    }
                };
                p.jQueryDetection(),
                s.default.fn.emulateTransitionEnd = u,
                s.default.event.special[p.TRANSITION_END] = {
                    bindType: d,
                    delegateType: d,
                    handle: function(e) {
                        if (s.default(e.target).is(this))
                            return e.handleObj.handler.apply(this, arguments)
                    }
                };
                var h = "bs.alert"
                  , f = s.default.fn.alert
                  , m = function() {
                    function e(e) {
                        this._element = e
                    }
                    var t = e.prototype;
                    return t.close = function(e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)),
                        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                    }
                    ,
                    t.dispose = function() {
                        s.default.removeData(this._element, h),
                        this._element = null
                    }
                    ,
                    t._getRootElement = function(e) {
                        var t = p.getSelectorFromElement(e)
                          , n = !1;
                        return t && (n = document.querySelector(t)),
                        n || (n = s.default(e).closest(".alert")[0]),
                        n
                    }
                    ,
                    t._triggerCloseEvent = function(e) {
                        var t = s.default.Event("close.bs.alert");
                        return s.default(e).trigger(t),
                        t
                    }
                    ,
                    t._removeElement = function(e) {
                        var t = this;
                        if (s.default(e).removeClass("show"),
                        s.default(e).hasClass("fade")) {
                            var n = p.getTransitionDurationFromElement(e);
                            s.default(e).one(p.TRANSITION_END, (function(n) {
                                return t._destroyElement(e, n)
                            }
                            )).emulateTransitionEnd(n)
                        } else
                            this._destroyElement(e)
                    }
                    ,
                    t._destroyElement = function(e) {
                        s.default(e).detach().trigger("closed.bs.alert").remove()
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this)
                              , i = n.data(h);
                            i || (i = new e(this),
                            n.data(h, i)),
                            "close" === t && i[t](this)
                        }
                        ))
                    }
                    ,
                    e._handleDismiss = function(e) {
                        return function(t) {
                            t && t.preventDefault(),
                            e.close(this)
                        }
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }]),
                    e
                }();
                s.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', m._handleDismiss(new m)),
                s.default.fn.alert = m._jQueryInterface,
                s.default.fn.alert.Constructor = m,
                s.default.fn.alert.noConflict = function() {
                    return s.default.fn.alert = f,
                    m._jQueryInterface
                }
                ;
                var g = "bs.button"
                  , v = s.default.fn.button
                  , y = "active"
                  , b = '[data-toggle^="button"]'
                  , w = 'input:not([type="hidden"])'
                  , x = ".btn"
                  , E = function() {
                    function e(e) {
                        this._element = e,
                        this.shouldAvoidTriggerChange = !1
                    }
                    var t = e.prototype;
                    return t.toggle = function() {
                        var e = !0
                          , t = !0
                          , n = s.default(this._element).closest('[data-toggle="buttons"]')[0];
                        if (n) {
                            var i = this._element.querySelector(w);
                            if (i) {
                                if ("radio" === i.type)
                                    if (i.checked && this._element.classList.contains(y))
                                        e = !1;
                                    else {
                                        var r = n.querySelector(".active");
                                        r && s.default(r).removeClass(y)
                                    }
                                e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(y)),
                                this.shouldAvoidTriggerChange || s.default(i).trigger("change")),
                                i.focus(),
                                t = !1
                            }
                        }
                        this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)),
                        e && s.default(this._element).toggleClass(y))
                    }
                    ,
                    t.dispose = function() {
                        s.default.removeData(this._element, g),
                        this._element = null
                    }
                    ,
                    e._jQueryInterface = function(t, n) {
                        return this.each((function() {
                            var i = s.default(this)
                              , r = i.data(g);
                            r || (r = new e(this),
                            i.data(g, r)),
                            r.shouldAvoidTriggerChange = n,
                            "toggle" === t && r[t]()
                        }
                        ))
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }]),
                    e
                }();
                s.default(document).on("click.bs.button.data-api", b, (function(e) {
                    var t = e.target
                      , n = t;
                    if (s.default(t).hasClass("btn") || (t = s.default(t).closest(x)[0]),
                    !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
                        e.preventDefault();
                    else {
                        var i = t.querySelector(w);
                        if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled")))
                            return void e.preventDefault();
                        "INPUT" !== n.tagName && "LABEL" === t.tagName || E._jQueryInterface.call(s.default(t), "toggle", "INPUT" === n.tagName)
                    }
                }
                )).on("focus.bs.button.data-api blur.bs.button.data-api", b, (function(e) {
                    var t = s.default(e.target).closest(x)[0];
                    s.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
                }
                )),
                s.default(window).on("load.bs.button.data-api", (function() {
                    for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                        var i = e[t]
                          , s = i.querySelector(w);
                        s.checked || s.hasAttribute("checked") ? i.classList.add(y) : i.classList.remove(y)
                    }
                    for (var r = 0, o = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < o; r++) {
                        var a = e[r];
                        "true" === a.getAttribute("aria-pressed") ? a.classList.add(y) : a.classList.remove(y)
                    }
                }
                )),
                s.default.fn.button = E._jQueryInterface,
                s.default.fn.button.Constructor = E,
                s.default.fn.button.noConflict = function() {
                    return s.default.fn.button = v,
                    E._jQueryInterface
                }
                ;
                var T = "carousel"
                  , S = "bs.carousel"
                  , _ = ".bs.carousel"
                  , C = s.default.fn[T]
                  , A = "active"
                  , $ = "next"
                  , k = "prev"
                  , D = "slid.bs.carousel"
                  , L = ".active.carousel-item"
                  , O = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                    touch: !0
                }
                  , M = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                }
                  , I = {
                    TOUCH: "touch",
                    PEN: "pen"
                }
                  , P = function() {
                    function e(e, t) {
                        this._items = null,
                        this._interval = null,
                        this._activeElement = null,
                        this._isPaused = !1,
                        this._isSliding = !1,
                        this.touchTimeout = null,
                        this.touchStartX = 0,
                        this.touchDeltaX = 0,
                        this._config = this._getConfig(t),
                        this._element = e,
                        this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
                        this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
                        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                        this._addEventListeners()
                    }
                    var t = e.prototype;
                    return t.next = function() {
                        this._isSliding || this._slide($)
                    }
                    ,
                    t.nextWhenVisible = function() {
                        var e = s.default(this._element);
                        !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
                    }
                    ,
                    t.prev = function() {
                        this._isSliding || this._slide(k)
                    }
                    ,
                    t.pause = function(e) {
                        e || (this._isPaused = !0),
                        this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (p.triggerTransitionEnd(this._element),
                        this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                    }
                    ,
                    t.cycle = function(e) {
                        e || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval),
                        this._interval = null),
                        this._config.interval && !this._isPaused && (this._updateInterval(),
                        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }
                    ,
                    t.to = function(e) {
                        var t = this;
                        this._activeElement = this._element.querySelector(L);
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding)
                                s.default(this._element).one(D, (function() {
                                    return t.to(e)
                                }
                                ));
                            else {
                                if (n === e)
                                    return this.pause(),
                                    void this.cycle();
                                var i = e > n ? $ : k;
                                this._slide(i, this._items[e])
                            }
                    }
                    ,
                    t.dispose = function() {
                        s.default(this._element).off(_),
                        s.default.removeData(this._element, S),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                    }
                    ,
                    t._getConfig = function(e) {
                        return e = l({}, O, e),
                        p.typeCheckConfig(T, e, M),
                        e
                    }
                    ,
                    t._handleSwipe = function() {
                        var e = Math.abs(this.touchDeltaX);
                        if (!(e <= 40)) {
                            var t = e / this.touchDeltaX;
                            this.touchDeltaX = 0,
                            t > 0 && this.prev(),
                            t < 0 && this.next()
                        }
                    }
                    ,
                    t._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && s.default(this._element).on("keydown.bs.carousel", (function(t) {
                            return e._keydown(t)
                        }
                        )),
                        "hover" === this._config.pause && s.default(this._element).on("mouseenter.bs.carousel", (function(t) {
                            return e.pause(t)
                        }
                        )).on("mouseleave.bs.carousel", (function(t) {
                            return e.cycle(t)
                        }
                        )),
                        this._config.touch && this._addTouchEventListeners()
                    }
                    ,
                    t._addTouchEventListeners = function() {
                        var e = this;
                        if (this._touchSupported) {
                            var t = function(t) {
                                e._pointerEvent && I[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                            }
                              , n = function(t) {
                                e._pointerEvent && I[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                                e._handleSwipe(),
                                "hover" === e._config.pause && (e.pause(),
                                e.touchTimeout && clearTimeout(e.touchTimeout),
                                e.touchTimeout = setTimeout((function(t) {
                                    return e.cycle(t)
                                }
                                ), 500 + e._config.interval))
                            };
                            s.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(e) {
                                return e.preventDefault()
                            }
                            )),
                            this._pointerEvent ? (s.default(this._element).on("pointerdown.bs.carousel", (function(e) {
                                return t(e)
                            }
                            )),
                            s.default(this._element).on("pointerup.bs.carousel", (function(e) {
                                return n(e)
                            }
                            )),
                            this._element.classList.add("pointer-event")) : (s.default(this._element).on("touchstart.bs.carousel", (function(e) {
                                return t(e)
                            }
                            )),
                            s.default(this._element).on("touchmove.bs.carousel", (function(t) {
                                return function(t) {
                                    e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                                }(t)
                            }
                            )),
                            s.default(this._element).on("touchend.bs.carousel", (function(e) {
                                return n(e)
                            }
                            )))
                        }
                    }
                    ,
                    t._keydown = function(e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.which) {
                            case 37:
                                e.preventDefault(),
                                this.prev();
                                break;
                            case 39:
                                e.preventDefault(),
                                this.next()
                            }
                    }
                    ,
                    t._getItemIndex = function(e) {
                        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
                        this._items.indexOf(e)
                    }
                    ,
                    t._getItemByDirection = function(e, t) {
                        var n = e === $
                          , i = e === k
                          , s = this._getItemIndex(t)
                          , r = this._items.length - 1;
                        if ((i && 0 === s || n && s === r) && !this._config.wrap)
                            return t;
                        var o = (s + (e === k ? -1 : 1)) % this._items.length;
                        return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                    }
                    ,
                    t._triggerSlideEvent = function(e, t) {
                        var n = this._getItemIndex(e)
                          , i = this._getItemIndex(this._element.querySelector(L))
                          , r = s.default.Event("slide.bs.carousel", {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                        return s.default(this._element).trigger(r),
                        r
                    }
                    ,
                    t._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                            s.default(t).removeClass(A);
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && s.default(n).addClass(A)
                        }
                    }
                    ,
                    t._updateInterval = function() {
                        var e = this._activeElement || this._element.querySelector(L);
                        if (e) {
                            var t = parseInt(e.getAttribute("data-interval"), 10);
                            t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                            this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                        }
                    }
                    ,
                    t._slide = function(e, t) {
                        var n, i, r, o = this, a = this._element.querySelector(L), l = this._getItemIndex(a), c = t || a && this._getItemByDirection(e, a), d = this._getItemIndex(c), u = Boolean(this._interval);
                        if (e === $ ? (n = "carousel-item-left",
                        i = "carousel-item-next",
                        r = "left") : (n = "carousel-item-right",
                        i = "carousel-item-prev",
                        r = "right"),
                        c && s.default(c).hasClass(A))
                            this._isSliding = !1;
                        else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                            this._isSliding = !0,
                            u && this.pause(),
                            this._setActiveIndicatorElement(c),
                            this._activeElement = c;
                            var h = s.default.Event(D, {
                                relatedTarget: c,
                                direction: r,
                                from: l,
                                to: d
                            });
                            if (s.default(this._element).hasClass("slide")) {
                                s.default(c).addClass(i),
                                p.reflow(c),
                                s.default(a).addClass(n),
                                s.default(c).addClass(n);
                                var f = p.getTransitionDurationFromElement(a);
                                s.default(a).one(p.TRANSITION_END, (function() {
                                    s.default(c).removeClass(n + " " + i).addClass(A),
                                    s.default(a).removeClass("active " + i + " " + n),
                                    o._isSliding = !1,
                                    setTimeout((function() {
                                        return s.default(o._element).trigger(h)
                                    }
                                    ), 0)
                                }
                                )).emulateTransitionEnd(f)
                            } else
                                s.default(a).removeClass(A),
                                s.default(c).addClass(A),
                                this._isSliding = !1,
                                s.default(this._element).trigger(h);
                            u && this.cycle()
                        }
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this).data(S)
                              , i = l({}, O, s.default(this).data());
                            "object" == typeof t && (i = l({}, i, t));
                            var r = "string" == typeof t ? t : i.slide;
                            if (n || (n = new e(this,i),
                            s.default(this).data(S, n)),
                            "number" == typeof t)
                                n.to(t);
                            else if ("string" == typeof r) {
                                if (void 0 === n[r])
                                    throw new TypeError('No method named "' + r + '"');
                                n[r]()
                            } else
                                i.interval && i.ride && (n.pause(),
                                n.cycle())
                        }
                        ))
                    }
                    ,
                    e._dataApiClickHandler = function(t) {
                        var n = p.getSelectorFromElement(this);
                        if (n) {
                            var i = s.default(n)[0];
                            if (i && s.default(i).hasClass("carousel")) {
                                var r = l({}, s.default(i).data(), s.default(this).data())
                                  , o = this.getAttribute("data-slide-to");
                                o && (r.interval = !1),
                                e._jQueryInterface.call(s.default(i), r),
                                o && s.default(i).data(S).to(o),
                                t.preventDefault()
                            }
                        }
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return O
                        }
                    }]),
                    e
                }();
                s.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", P._dataApiClickHandler),
                s.default(window).on("load.bs.carousel.data-api", (function() {
                    for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
                        var i = s.default(e[t]);
                        P._jQueryInterface.call(i, i.data())
                    }
                }
                )),
                s.default.fn[T] = P._jQueryInterface,
                s.default.fn[T].Constructor = P,
                s.default.fn[T].noConflict = function() {
                    return s.default.fn[T] = C,
                    P._jQueryInterface
                }
                ;
                var N = "collapse"
                  , j = "bs.collapse"
                  , z = s.default.fn[N]
                  , H = "show"
                  , F = "collapse"
                  , R = "collapsing"
                  , q = "collapsed"
                  , B = "width"
                  , W = '[data-toggle="collapse"]'
                  , G = {
                    toggle: !0,
                    parent: ""
                }
                  , V = {
                    toggle: "boolean",
                    parent: "(string|element)"
                }
                  , U = function() {
                    function e(e, t) {
                        this._isTransitioning = !1,
                        this._element = e,
                        this._config = this._getConfig(t),
                        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var n = [].slice.call(document.querySelectorAll(W)), i = 0, s = n.length; i < s; i++) {
                            var r = n[i]
                              , o = p.getSelectorFromElement(r)
                              , a = [].slice.call(document.querySelectorAll(o)).filter((function(t) {
                                return t === e
                            }
                            ));
                            null !== o && a.length > 0 && (this._selector = o,
                            this._triggerArray.push(r))
                        }
                        this._parent = this._config.parent ? this._getParent() : null,
                        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                        this._config.toggle && this.toggle()
                    }
                    var t = e.prototype;
                    return t.toggle = function() {
                        s.default(this._element).hasClass(H) ? this.hide() : this.show()
                    }
                    ,
                    t.show = function() {
                        var t, n, i = this;
                        if (!(this._isTransitioning || s.default(this._element).hasClass(H) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                            return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(F)
                        }
                        ))).length && (t = null),
                        t && (n = s.default(t).not(this._selector).data(j)) && n._isTransitioning))) {
                            var r = s.default.Event("show.bs.collapse");
                            if (s.default(this._element).trigger(r),
                            !r.isDefaultPrevented()) {
                                t && (e._jQueryInterface.call(s.default(t).not(this._selector), "hide"),
                                n || s.default(t).data(j, null));
                                var o = this._getDimension();
                                s.default(this._element).removeClass(F).addClass(R),
                                this._element.style[o] = 0,
                                this._triggerArray.length && s.default(this._triggerArray).removeClass(q).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                                var a = "scroll" + (o[0].toUpperCase() + o.slice(1))
                                  , l = p.getTransitionDurationFromElement(this._element);
                                s.default(this._element).one(p.TRANSITION_END, (function() {
                                    s.default(i._element).removeClass(R).addClass("collapse show"),
                                    i._element.style[o] = "",
                                    i.setTransitioning(!1),
                                    s.default(i._element).trigger("shown.bs.collapse")
                                }
                                )).emulateTransitionEnd(l),
                                this._element.style[o] = this._element[a] + "px"
                            }
                        }
                    }
                    ,
                    t.hide = function() {
                        var e = this;
                        if (!this._isTransitioning && s.default(this._element).hasClass(H)) {
                            var t = s.default.Event("hide.bs.collapse");
                            if (s.default(this._element).trigger(t),
                            !t.isDefaultPrevented()) {
                                var n = this._getDimension();
                                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                                p.reflow(this._element),
                                s.default(this._element).addClass(R).removeClass("collapse show");
                                var i = this._triggerArray.length;
                                if (i > 0)
                                    for (var r = 0; r < i; r++) {
                                        var o = this._triggerArray[r]
                                          , a = p.getSelectorFromElement(o);
                                        null !== a && (s.default([].slice.call(document.querySelectorAll(a))).hasClass(H) || s.default(o).addClass(q).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                this._element.style[n] = "";
                                var l = p.getTransitionDurationFromElement(this._element);
                                s.default(this._element).one(p.TRANSITION_END, (function() {
                                    e.setTransitioning(!1),
                                    s.default(e._element).removeClass(R).addClass(F).trigger("hidden.bs.collapse")
                                }
                                )).emulateTransitionEnd(l)
                            }
                        }
                    }
                    ,
                    t.setTransitioning = function(e) {
                        this._isTransitioning = e
                    }
                    ,
                    t.dispose = function() {
                        s.default.removeData(this._element, j),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                    }
                    ,
                    t._getConfig = function(e) {
                        return (e = l({}, G, e)).toggle = Boolean(e.toggle),
                        p.typeCheckConfig(N, e, V),
                        e
                    }
                    ,
                    t._getDimension = function() {
                        return s.default(this._element).hasClass(B) ? B : "height"
                    }
                    ,
                    t._getParent = function() {
                        var t, n = this;
                        p.isElement(this._config.parent) ? (t = this._config.parent,
                        void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                        var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                          , r = [].slice.call(t.querySelectorAll(i));
                        return s.default(r).each((function(t, i) {
                            n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                        }
                        )),
                        t
                    }
                    ,
                    t._addAriaAndCollapsedClass = function(e, t) {
                        var n = s.default(e).hasClass(H);
                        t.length && s.default(t).toggleClass(q, !n).attr("aria-expanded", n)
                    }
                    ,
                    e._getTargetFromElement = function(e) {
                        var t = p.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this)
                              , i = n.data(j)
                              , r = l({}, G, n.data(), "object" == typeof t && t ? t : {});
                            if (!i && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1),
                            i || (i = new e(this,r),
                            n.data(j, i)),
                            "string" == typeof t) {
                                if (void 0 === i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        }
                        ))
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return G
                        }
                    }]),
                    e
                }();
                s.default(document).on("click.bs.collapse.data-api", W, (function(e) {
                    "A" === e.currentTarget.tagName && e.preventDefault();
                    var t = s.default(this)
                      , n = p.getSelectorFromElement(this)
                      , i = [].slice.call(document.querySelectorAll(n));
                    s.default(i).each((function() {
                        var e = s.default(this)
                          , n = e.data(j) ? "toggle" : t.data();
                        U._jQueryInterface.call(e, n)
                    }
                    ))
                }
                )),
                s.default.fn[N] = U._jQueryInterface,
                s.default.fn[N].Constructor = U,
                s.default.fn[N].noConflict = function() {
                    return s.default.fn[N] = z,
                    U._jQueryInterface
                }
                ;
                var X = "dropdown"
                  , Y = "bs.dropdown"
                  , K = ".bs.dropdown"
                  , Q = s.default.fn[X]
                  , Z = new RegExp("38|40|27")
                  , J = "disabled"
                  , ee = "show"
                  , te = "dropdown-menu-right"
                  , ne = "hide.bs.dropdown"
                  , ie = "hidden.bs.dropdown"
                  , se = "click.bs.dropdown.data-api"
                  , re = "keydown.bs.dropdown.data-api"
                  , oe = '[data-toggle="dropdown"]'
                  , ae = ".dropdown-menu"
                  , le = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic",
                    popperConfig: null
                }
                  , ce = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string",
                    popperConfig: "(null|object)"
                }
                  , de = function() {
                    function e(e, t) {
                        this._element = e,
                        this._popper = null,
                        this._config = this._getConfig(t),
                        this._menu = this._getMenuElement(),
                        this._inNavbar = this._detectNavbar(),
                        this._addEventListeners()
                    }
                    var t = e.prototype;
                    return t.toggle = function() {
                        if (!this._element.disabled && !s.default(this._element).hasClass(J)) {
                            var t = s.default(this._menu).hasClass(ee);
                            e._clearMenus(),
                            t || this.show(!0)
                        }
                    }
                    ,
                    t.show = function(t) {
                        if (void 0 === t && (t = !1),
                        !(this._element.disabled || s.default(this._element).hasClass(J) || s.default(this._menu).hasClass(ee))) {
                            var n = {
                                relatedTarget: this._element
                            }
                              , i = s.default.Event("show.bs.dropdown", n)
                              , o = e._getParentFromElement(this._element);
                            if (s.default(o).trigger(i),
                            !i.isDefaultPrevented()) {
                                if (!this._inNavbar && t) {
                                    if (void 0 === r.default)
                                        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                    var a = this._element;
                                    "parent" === this._config.reference ? a = o : p.isElement(this._config.reference) && (a = this._config.reference,
                                    void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && s.default(o).addClass("position-static"),
                                    this._popper = new r.default(a,this._menu,this._getPopperConfig())
                                }
                                "ontouchstart"in document.documentElement && 0 === s.default(o).closest(".navbar-nav").length && s.default(document.body).children().on("mouseover", null, s.default.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                s.default(this._menu).toggleClass(ee),
                                s.default(o).toggleClass(ee).trigger(s.default.Event("shown.bs.dropdown", n))
                            }
                        }
                    }
                    ,
                    t.hide = function() {
                        if (!this._element.disabled && !s.default(this._element).hasClass(J) && s.default(this._menu).hasClass(ee)) {
                            var t = {
                                relatedTarget: this._element
                            }
                              , n = s.default.Event(ne, t)
                              , i = e._getParentFromElement(this._element);
                            s.default(i).trigger(n),
                            n.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                            s.default(this._menu).toggleClass(ee),
                            s.default(i).toggleClass(ee).trigger(s.default.Event(ie, t)))
                        }
                    }
                    ,
                    t.dispose = function() {
                        s.default.removeData(this._element, Y),
                        s.default(this._element).off(K),
                        this._element = null,
                        this._menu = null,
                        null !== this._popper && (this._popper.destroy(),
                        this._popper = null)
                    }
                    ,
                    t.update = function() {
                        this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                    }
                    ,
                    t._addEventListeners = function() {
                        var e = this;
                        s.default(this._element).on("click.bs.dropdown", (function(t) {
                            t.preventDefault(),
                            t.stopPropagation(),
                            e.toggle()
                        }
                        ))
                    }
                    ,
                    t._getConfig = function(e) {
                        return e = l({}, this.constructor.Default, s.default(this._element).data(), e),
                        p.typeCheckConfig(X, e, this.constructor.DefaultType),
                        e
                    }
                    ,
                    t._getMenuElement = function() {
                        if (!this._menu) {
                            var t = e._getParentFromElement(this._element);
                            t && (this._menu = t.querySelector(ae))
                        }
                        return this._menu
                    }
                    ,
                    t._getPlacement = function() {
                        var e = s.default(this._element.parentNode)
                          , t = "bottom-start";
                        return e.hasClass("dropup") ? t = s.default(this._menu).hasClass(te) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : s.default(this._menu).hasClass(te) && (t = "bottom-end"),
                        t
                    }
                    ,
                    t._detectNavbar = function() {
                        return s.default(this._element).closest(".navbar").length > 0
                    }
                    ,
                    t._getOffset = function() {
                        var e = this
                          , t = {};
                        return "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element)),
                            t
                        }
                        : t.offset = this._config.offset,
                        t
                    }
                    ,
                    t._getPopperConfig = function() {
                        var e = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        return "static" === this._config.display && (e.modifiers.applyStyle = {
                            enabled: !1
                        }),
                        l({}, e, this._config.popperConfig)
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this).data(Y);
                            if (n || (n = new e(this,"object" == typeof t ? t : null),
                            s.default(this).data(Y, n)),
                            "string" == typeof t) {
                                if (void 0 === n[t])
                                    throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        }
                        ))
                    }
                    ,
                    e._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var n = [].slice.call(document.querySelectorAll(oe)), i = 0, r = n.length; i < r; i++) {
                                var o = e._getParentFromElement(n[i])
                                  , a = s.default(n[i]).data(Y)
                                  , l = {
                                    relatedTarget: n[i]
                                };
                                if (t && "click" === t.type && (l.clickEvent = t),
                                a) {
                                    var c = a._menu;
                                    if (s.default(o).hasClass(ee) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && s.default.contains(o, t.target))) {
                                        var d = s.default.Event(ne, l);
                                        s.default(o).trigger(d),
                                        d.isDefaultPrevented() || ("ontouchstart"in document.documentElement && s.default(document.body).children().off("mouseover", null, s.default.noop),
                                        n[i].setAttribute("aria-expanded", "false"),
                                        a._popper && a._popper.destroy(),
                                        s.default(c).removeClass(ee),
                                        s.default(o).removeClass(ee).trigger(s.default.Event(ie, l)))
                                    }
                                }
                            }
                    }
                    ,
                    e._getParentFromElement = function(e) {
                        var t, n = p.getSelectorFromElement(e);
                        return n && (t = document.querySelector(n)),
                        t || e.parentNode
                    }
                    ,
                    e._dataApiKeydownHandler = function(t) {
                        if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || s.default(t.target).closest(ae).length) : !Z.test(t.which)) && !this.disabled && !s.default(this).hasClass(J)) {
                            var n = e._getParentFromElement(this)
                              , i = s.default(n).hasClass(ee);
                            if (i || 27 !== t.which) {
                                if (t.preventDefault(),
                                t.stopPropagation(),
                                !i || 27 === t.which || 32 === t.which)
                                    return 27 === t.which && s.default(n.querySelector(oe)).trigger("focus"),
                                    void s.default(this).trigger("click");
                                var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                                    return s.default(e).is(":visible")
                                }
                                ));
                                if (0 !== r.length) {
                                    var o = r.indexOf(t.target);
                                    38 === t.which && o > 0 && o--,
                                    40 === t.which && o < r.length - 1 && o++,
                                    o < 0 && (o = 0),
                                    r[o].focus()
                                }
                            }
                        }
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return le
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return ce
                        }
                    }]),
                    e
                }();
                s.default(document).on(re, oe, de._dataApiKeydownHandler).on(re, ae, de._dataApiKeydownHandler).on(se + " keyup.bs.dropdown.data-api", de._clearMenus).on(se, oe, (function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    de._jQueryInterface.call(s.default(this), "toggle")
                }
                )).on(se, ".dropdown form", (function(e) {
                    e.stopPropagation()
                }
                )),
                s.default.fn[X] = de._jQueryInterface,
                s.default.fn[X].Constructor = de,
                s.default.fn[X].noConflict = function() {
                    return s.default.fn[X] = Q,
                    de._jQueryInterface
                }
                ;
                var ue = "modal"
                  , pe = "bs.modal"
                  , he = ".bs.modal"
                  , fe = s.default.fn.modal
                  , me = "modal-open"
                  , ge = "fade"
                  , ve = "show"
                  , ye = "modal-static"
                  , be = "hidden.bs.modal"
                  , we = "show.bs.modal"
                  , xe = "focusin.bs.modal"
                  , Ee = "resize.bs.modal"
                  , Te = "click.dismiss.bs.modal"
                  , Se = "keydown.dismiss.bs.modal"
                  , _e = "mousedown.dismiss.bs.modal"
                  , Ce = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                  , Ae = ".sticky-top"
                  , $e = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                }
                  , ke = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                }
                  , De = function() {
                    function e(e, t) {
                        this._config = this._getConfig(t),
                        this._element = e,
                        this._dialog = e.querySelector(".modal-dialog"),
                        this._backdrop = null,
                        this._isShown = !1,
                        this._isBodyOverflowing = !1,
                        this._ignoreBackdropClick = !1,
                        this._isTransitioning = !1,
                        this._scrollbarWidth = 0
                    }
                    var t = e.prototype;
                    return t.toggle = function(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                    ,
                    t.show = function(e) {
                        var t = this;
                        if (!this._isShown && !this._isTransitioning) {
                            var n = s.default.Event(we, {
                                relatedTarget: e
                            });
                            s.default(this._element).trigger(n),
                            n.isDefaultPrevented() || (this._isShown = !0,
                            s.default(this._element).hasClass(ge) && (this._isTransitioning = !0),
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            this._adjustDialog(),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            s.default(this._element).on(Te, '[data-dismiss="modal"]', (function(e) {
                                return t.hide(e)
                            }
                            )),
                            s.default(this._dialog).on(_e, (function() {
                                s.default(t._element).one("mouseup.dismiss.bs.modal", (function(e) {
                                    s.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                }
                                ))
                            }
                            )),
                            this._showBackdrop((function() {
                                return t._showElement(e)
                            }
                            )))
                        }
                    }
                    ,
                    t.hide = function(e) {
                        var t = this;
                        if (e && e.preventDefault(),
                        this._isShown && !this._isTransitioning) {
                            var n = s.default.Event("hide.bs.modal");
                            if (s.default(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented()) {
                                this._isShown = !1;
                                var i = s.default(this._element).hasClass(ge);
                                if (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                s.default(document).off(xe),
                                s.default(this._element).removeClass(ve),
                                s.default(this._element).off(Te),
                                s.default(this._dialog).off(_e),
                                i) {
                                    var r = p.getTransitionDurationFromElement(this._element);
                                    s.default(this._element).one(p.TRANSITION_END, (function(e) {
                                        return t._hideModal(e)
                                    }
                                    )).emulateTransitionEnd(r)
                                } else
                                    this._hideModal()
                            }
                        }
                    }
                    ,
                    t.dispose = function() {
                        [window, this._element, this._dialog].forEach((function(e) {
                            return s.default(e).off(he)
                        }
                        )),
                        s.default(document).off(xe),
                        s.default.removeData(this._element, pe),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._isTransitioning = null,
                        this._scrollbarWidth = null
                    }
                    ,
                    t.handleUpdate = function() {
                        this._adjustDialog()
                    }
                    ,
                    t._getConfig = function(e) {
                        return e = l({}, $e, e),
                        p.typeCheckConfig(ue, e, ke),
                        e
                    }
                    ,
                    t._triggerBackdropTransition = function() {
                        var e = this
                          , t = s.default.Event("hidePrevented.bs.modal");
                        if (s.default(this._element).trigger(t),
                        !t.isDefaultPrevented()) {
                            var n = this._element.scrollHeight > document.documentElement.clientHeight;
                            n || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add(ye);
                            var i = p.getTransitionDurationFromElement(this._dialog);
                            s.default(this._element).off(p.TRANSITION_END),
                            s.default(this._element).one(p.TRANSITION_END, (function() {
                                e._element.classList.remove(ye),
                                n || s.default(e._element).one(p.TRANSITION_END, (function() {
                                    e._element.style.overflowY = ""
                                }
                                )).emulateTransitionEnd(e._element, i)
                            }
                            )).emulateTransitionEnd(i),
                            this._element.focus()
                        }
                    }
                    ,
                    t._showElement = function(e) {
                        var t = this
                          , n = s.default(this._element).hasClass(ge)
                          , i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        s.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0,
                        n && p.reflow(this._element),
                        s.default(this._element).addClass(ve),
                        this._config.focus && this._enforceFocus();
                        var r = s.default.Event("shown.bs.modal", {
                            relatedTarget: e
                        })
                          , o = function() {
                            t._config.focus && t._element.focus(),
                            t._isTransitioning = !1,
                            s.default(t._element).trigger(r)
                        };
                        if (n) {
                            var a = p.getTransitionDurationFromElement(this._dialog);
                            s.default(this._dialog).one(p.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else
                            o()
                    }
                    ,
                    t._enforceFocus = function() {
                        var e = this;
                        s.default(document).off(xe).on(xe, (function(t) {
                            document !== t.target && e._element !== t.target && 0 === s.default(e._element).has(t.target).length && e._element.focus()
                        }
                        ))
                    }
                    ,
                    t._setEscapeEvent = function() {
                        var e = this;
                        this._isShown ? s.default(this._element).on(Se, (function(t) {
                            e._config.keyboard && 27 === t.which ? (t.preventDefault(),
                            e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                        }
                        )) : this._isShown || s.default(this._element).off(Se)
                    }
                    ,
                    t._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? s.default(window).on(Ee, (function(t) {
                            return e.handleUpdate(t)
                        }
                        )) : s.default(window).off(Ee)
                    }
                    ,
                    t._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._isTransitioning = !1,
                        this._showBackdrop((function() {
                            s.default(document.body).removeClass(me),
                            e._resetAdjustments(),
                            e._resetScrollbar(),
                            s.default(e._element).trigger(be)
                        }
                        ))
                    }
                    ,
                    t._removeBackdrop = function() {
                        this._backdrop && (s.default(this._backdrop).remove(),
                        this._backdrop = null)
                    }
                    ,
                    t._showBackdrop = function(e) {
                        var t = this
                          , n = s.default(this._element).hasClass(ge) ? ge : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"),
                            this._backdrop.className = "modal-backdrop",
                            n && this._backdrop.classList.add(n),
                            s.default(this._backdrop).appendTo(document.body),
                            s.default(this._element).on(Te, (function(e) {
                                t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                            }
                            )),
                            n && p.reflow(this._backdrop),
                            s.default(this._backdrop).addClass(ve),
                            !e)
                                return;
                            if (!n)
                                return void e();
                            var i = p.getTransitionDurationFromElement(this._backdrop);
                            s.default(this._backdrop).one(p.TRANSITION_END, e).emulateTransitionEnd(i)
                        } else if (!this._isShown && this._backdrop) {
                            s.default(this._backdrop).removeClass(ve);
                            var r = function() {
                                t._removeBackdrop(),
                                e && e()
                            };
                            if (s.default(this._element).hasClass(ge)) {
                                var o = p.getTransitionDurationFromElement(this._backdrop);
                                s.default(this._backdrop).one(p.TRANSITION_END, r).emulateTransitionEnd(o)
                            } else
                                r()
                        } else
                            e && e()
                    }
                    ,
                    t._adjustDialog = function() {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }
                    ,
                    t._resetAdjustments = function() {
                        this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                    }
                    ,
                    t._checkScrollbar = function() {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                    }
                    ,
                    t._setScrollbar = function() {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            var t = [].slice.call(document.querySelectorAll(Ce))
                              , n = [].slice.call(document.querySelectorAll(Ae));
                            s.default(t).each((function(t, n) {
                                var i = n.style.paddingRight
                                  , r = s.default(n).css("padding-right");
                                s.default(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                            }
                            )),
                            s.default(n).each((function(t, n) {
                                var i = n.style.marginRight
                                  , r = s.default(n).css("margin-right");
                                s.default(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                            }
                            ));
                            var i = document.body.style.paddingRight
                              , r = s.default(document.body).css("padding-right");
                            s.default(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                        }
                        s.default(document.body).addClass(me)
                    }
                    ,
                    t._resetScrollbar = function() {
                        var e = [].slice.call(document.querySelectorAll(Ce));
                        s.default(e).each((function(e, t) {
                            var n = s.default(t).data("padding-right");
                            s.default(t).removeData("padding-right"),
                            t.style.paddingRight = n || ""
                        }
                        ));
                        var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                        s.default(t).each((function(e, t) {
                            var n = s.default(t).data("margin-right");
                            void 0 !== n && s.default(t).css("margin-right", n).removeData("margin-right")
                        }
                        ));
                        var n = s.default(document.body).data("padding-right");
                        s.default(document.body).removeData("padding-right"),
                        document.body.style.paddingRight = n || ""
                    }
                    ,
                    t._getScrollbarWidth = function() {
                        var e = document.createElement("div");
                        e.className = "modal-scrollbar-measure",
                        document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e),
                        t
                    }
                    ,
                    e._jQueryInterface = function(t, n) {
                        return this.each((function() {
                            var i = s.default(this).data(pe)
                              , r = l({}, $e, s.default(this).data(), "object" == typeof t && t ? t : {});
                            if (i || (i = new e(this,r),
                            s.default(this).data(pe, i)),
                            "string" == typeof t) {
                                if (void 0 === i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t](n)
                            } else
                                r.show && i.show(n)
                        }
                        ))
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return $e
                        }
                    }]),
                    e
                }();
                s.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
                    var t, n = this, i = p.getSelectorFromElement(this);
                    i && (t = document.querySelector(i));
                    var r = s.default(t).data(pe) ? "toggle" : l({}, s.default(t).data(), s.default(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                    var o = s.default(t).one(we, (function(e) {
                        e.isDefaultPrevented() || o.one(be, (function() {
                            s.default(n).is(":visible") && n.focus()
                        }
                        ))
                    }
                    ));
                    De._jQueryInterface.call(s.default(t), r, this)
                }
                )),
                s.default.fn.modal = De._jQueryInterface,
                s.default.fn.modal.Constructor = De,
                s.default.fn.modal.noConflict = function() {
                    return s.default.fn.modal = fe,
                    De._jQueryInterface
                }
                ;
                var Le = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
                  , Oe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
                  , Me = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
                function Ie(e, t, n) {
                    if (0 === e.length)
                        return e;
                    if (n && "function" == typeof n)
                        return n(e);
                    for (var i = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), o = function(e, n) {
                        var i = r[e]
                          , o = i.nodeName.toLowerCase();
                        if (-1 === s.indexOf(i.nodeName.toLowerCase()))
                            return i.parentNode.removeChild(i),
                            "continue";
                        var a = [].slice.call(i.attributes)
                          , l = [].concat(t["*"] || [], t[o] || []);
                        a.forEach((function(e) {
                            (function(e, t) {
                                var n = e.nodeName.toLowerCase();
                                if (-1 !== t.indexOf(n))
                                    return -1 === Le.indexOf(n) || Boolean(Oe.test(e.nodeValue) || Me.test(e.nodeValue));
                                for (var i = t.filter((function(e) {
                                    return e instanceof RegExp
                                }
                                )), s = 0, r = i.length; s < r; s++)
                                    if (i[s].test(n))
                                        return !0;
                                return !1
                            }
                            )(e, l) || i.removeAttribute(e.nodeName)
                        }
                        ))
                    }, a = 0, l = r.length; a < l; a++)
                        o(a);
                    return i.body.innerHTML
                }
                var Pe = "tooltip"
                  , Ne = "bs.tooltip"
                  , je = ".bs.tooltip"
                  , ze = s.default.fn.tooltip
                  , He = new RegExp("(^|\\s)bs-tooltip\\S+","g")
                  , Fe = ["sanitize", "whiteList", "sanitizeFn"]
                  , Re = "fade"
                  , qe = "show"
                  , Be = "show"
                  , We = "out"
                  , Ge = "hover"
                  , Ve = "focus"
                  , Ue = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                }
                  , Xe = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    customClass: "",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "srcset", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: []
                    },
                    popperConfig: null
                }
                  , Ye = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    customClass: "(string|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object",
                    popperConfig: "(null|object)"
                }
                  , Ke = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip"
                }
                  , Qe = function() {
                    function e(e, t) {
                        if (void 0 === r.default)
                            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                        this._isEnabled = !0,
                        this._timeout = 0,
                        this._hoverState = "",
                        this._activeTrigger = {},
                        this._popper = null,
                        this.element = e,
                        this.config = this._getConfig(t),
                        this.tip = null,
                        this._setListeners()
                    }
                    var t = e.prototype;
                    return t.enable = function() {
                        this._isEnabled = !0
                    }
                    ,
                    t.disable = function() {
                        this._isEnabled = !1
                    }
                    ,
                    t.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }
                    ,
                    t.toggle = function(e) {
                        if (this._isEnabled)
                            if (e) {
                                var t = this.constructor.DATA_KEY
                                  , n = s.default(e.currentTarget).data(t);
                                n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                                s.default(e.currentTarget).data(t, n)),
                                n._activeTrigger.click = !n._activeTrigger.click,
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                            } else {
                                if (s.default(this.getTipElement()).hasClass(qe))
                                    return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }
                    ,
                    t.dispose = function() {
                        clearTimeout(this._timeout),
                        s.default.removeData(this.element, this.constructor.DATA_KEY),
                        s.default(this.element).off(this.constructor.EVENT_KEY),
                        s.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                        this.tip && s.default(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        this._activeTrigger = null,
                        this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                    }
                    ,
                    t.show = function() {
                        var e = this;
                        if ("none" === s.default(this.element).css("display"))
                            throw new Error("Please use show on visible elements");
                        var t = s.default.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            s.default(this.element).trigger(t);
                            var n = p.findShadowRoot(this.element)
                              , i = s.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                            if (t.isDefaultPrevented() || !i)
                                return;
                            var o = this.getTipElement()
                              , a = p.getUID(this.constructor.NAME);
                            o.setAttribute("id", a),
                            this.element.setAttribute("aria-describedby", a),
                            this.setContent(),
                            this.config.animation && s.default(o).addClass(Re);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                              , c = this._getAttachment(l);
                            this.addAttachmentClass(c);
                            var d = this._getContainer();
                            s.default(o).data(this.constructor.DATA_KEY, this),
                            s.default.contains(this.element.ownerDocument.documentElement, this.tip) || s.default(o).appendTo(d),
                            s.default(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new r.default(this.element,o,this._getPopperConfig(c)),
                            s.default(o).addClass(qe),
                            s.default(o).addClass(this.config.customClass),
                            "ontouchstart"in document.documentElement && s.default(document.body).children().on("mouseover", null, s.default.noop);
                            var u = function() {
                                e.config.animation && e._fixTransition();
                                var t = e._hoverState;
                                e._hoverState = null,
                                s.default(e.element).trigger(e.constructor.Event.SHOWN),
                                t === We && e._leave(null, e)
                            };
                            if (s.default(this.tip).hasClass(Re)) {
                                var h = p.getTransitionDurationFromElement(this.tip);
                                s.default(this.tip).one(p.TRANSITION_END, u).emulateTransitionEnd(h)
                            } else
                                u()
                        }
                    }
                    ,
                    t.hide = function(e) {
                        var t = this
                          , n = this.getTipElement()
                          , i = s.default.Event(this.constructor.Event.HIDE)
                          , r = function() {
                            t._hoverState !== Be && n.parentNode && n.parentNode.removeChild(n),
                            t._cleanTipClass(),
                            t.element.removeAttribute("aria-describedby"),
                            s.default(t.element).trigger(t.constructor.Event.HIDDEN),
                            null !== t._popper && t._popper.destroy(),
                            e && e()
                        };
                        if (s.default(this.element).trigger(i),
                        !i.isDefaultPrevented()) {
                            if (s.default(n).removeClass(qe),
                            "ontouchstart"in document.documentElement && s.default(document.body).children().off("mouseover", null, s.default.noop),
                            this._activeTrigger.click = !1,
                            this._activeTrigger.focus = !1,
                            this._activeTrigger.hover = !1,
                            s.default(this.tip).hasClass(Re)) {
                                var o = p.getTransitionDurationFromElement(n);
                                s.default(n).one(p.TRANSITION_END, r).emulateTransitionEnd(o)
                            } else
                                r();
                            this._hoverState = ""
                        }
                    }
                    ,
                    t.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }
                    ,
                    t.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }
                    ,
                    t.addAttachmentClass = function(e) {
                        s.default(this.getTipElement()).addClass("bs-tooltip-" + e)
                    }
                    ,
                    t.getTipElement = function() {
                        return this.tip = this.tip || s.default(this.config.template)[0],
                        this.tip
                    }
                    ,
                    t.setContent = function() {
                        var e = this.getTipElement();
                        this.setElementContent(s.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
                        s.default(e).removeClass("fade show")
                    }
                    ,
                    t.setElementContent = function(e, t) {
                        "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Ie(t, this.config.whiteList, this.config.sanitizeFn)),
                        e.html(t)) : e.text(t) : this.config.html ? s.default(t).parent().is(e) || e.empty().append(t) : e.text(s.default(t).text())
                    }
                    ,
                    t.getTitle = function() {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        e
                    }
                    ,
                    t._getPopperConfig = function(e) {
                        var t = this;
                        return l({}, {
                            placement: e,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: ".arrow"
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function(e) {
                                return t._handlePopperPlacementChange(e)
                            }
                        }, this.config.popperConfig)
                    }
                    ,
                    t._getOffset = function() {
                        var e = this
                          , t = {};
                        return "function" == typeof this.config.offset ? t.fn = function(t) {
                            return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element)),
                            t
                        }
                        : t.offset = this.config.offset,
                        t
                    }
                    ,
                    t._getContainer = function() {
                        return !1 === this.config.container ? document.body : p.isElement(this.config.container) ? s.default(this.config.container) : s.default(document).find(this.config.container)
                    }
                    ,
                    t._getAttachment = function(e) {
                        return Ue[e.toUpperCase()]
                    }
                    ,
                    t._setListeners = function() {
                        var e = this;
                        this.config.trigger.split(" ").forEach((function(t) {
                            if ("click" === t)
                                s.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                                    return e.toggle(t)
                                }
                                ));
                            else if ("manual" !== t) {
                                var n = t === Ge ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                                  , i = t === Ge ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                s.default(e.element).on(n, e.config.selector, (function(t) {
                                    return e._enter(t)
                                }
                                )).on(i, e.config.selector, (function(t) {
                                    return e._leave(t)
                                }
                                ))
                            }
                        }
                        )),
                        this._hideModalHandler = function() {
                            e.element && e.hide()
                        }
                        ,
                        s.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector ? this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }
                    ,
                    t._fixTitle = function() {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                    }
                    ,
                    t._enter = function(e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || s.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        s.default(e.currentTarget).data(n, t)),
                        e && (t._activeTrigger["focusin" === e.type ? Ve : Ge] = !0),
                        s.default(t.getTipElement()).hasClass(qe) || t._hoverState === Be ? t._hoverState = Be : (clearTimeout(t._timeout),
                        t._hoverState = Be,
                        t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                            t._hoverState === Be && t.show()
                        }
                        ), t.config.delay.show) : t.show())
                    }
                    ,
                    t._leave = function(e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || s.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        s.default(e.currentTarget).data(n, t)),
                        e && (t._activeTrigger["focusout" === e.type ? Ve : Ge] = !1),
                        t._isWithActiveTrigger() || (clearTimeout(t._timeout),
                        t._hoverState = We,
                        t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                            t._hoverState === We && t.hide()
                        }
                        ), t.config.delay.hide) : t.hide())
                    }
                    ,
                    t._isWithActiveTrigger = function() {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e])
                                return !0;
                        return !1
                    }
                    ,
                    t._getConfig = function(e) {
                        var t = s.default(this.element).data();
                        return Object.keys(t).forEach((function(e) {
                            -1 !== Fe.indexOf(e) && delete t[e]
                        }
                        )),
                        "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                            show: e.delay,
                            hide: e.delay
                        }),
                        "number" == typeof e.title && (e.title = e.title.toString()),
                        "number" == typeof e.content && (e.content = e.content.toString()),
                        p.typeCheckConfig(Pe, e, this.constructor.DefaultType),
                        e.sanitize && (e.template = Ie(e.template, e.whiteList, e.sanitizeFn)),
                        e
                    }
                    ,
                    t._getDelegateConfig = function() {
                        var e = {};
                        if (this.config)
                            for (var t in this.config)
                                this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }
                    ,
                    t._cleanTipClass = function() {
                        var e = s.default(this.getTipElement())
                          , t = e.attr("class").match(He);
                        null !== t && t.length && e.removeClass(t.join(""))
                    }
                    ,
                    t._handlePopperPlacementChange = function(e) {
                        this.tip = e.instance.popper,
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(e.placement))
                    }
                    ,
                    t._fixTransition = function() {
                        var e = this.getTipElement()
                          , t = this.config.animation;
                        null === e.getAttribute("x-placement") && (s.default(e).removeClass(Re),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = t)
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this)
                              , i = n.data(Ne)
                              , r = "object" == typeof t && t;
                            if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this,r),
                            n.data(Ne, i)),
                            "string" == typeof t)) {
                                if (void 0 === i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        }
                        ))
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return Xe
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return Pe
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return Ne
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return Ke
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return je
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return Ye
                        }
                    }]),
                    e
                }();
                s.default.fn.tooltip = Qe._jQueryInterface,
                s.default.fn.tooltip.Constructor = Qe,
                s.default.fn.tooltip.noConflict = function() {
                    return s.default.fn.tooltip = ze,
                    Qe._jQueryInterface
                }
                ;
                var Ze = "popover"
                  , Je = "bs.popover"
                  , et = ".bs.popover"
                  , tt = s.default.fn.popover
                  , nt = new RegExp("(^|\\s)bs-popover\\S+","g")
                  , it = l({}, Qe.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                })
                  , st = l({}, Qe.DefaultType, {
                    content: "(string|element|function)"
                })
                  , rt = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover"
                }
                  , ot = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    var n, i;
                    i = e,
                    (n = t).prototype = Object.create(i.prototype),
                    n.prototype.constructor = n,
                    c(n, i);
                    var r = t.prototype;
                    return r.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }
                    ,
                    r.addAttachmentClass = function(e) {
                        s.default(this.getTipElement()).addClass("bs-popover-" + e)
                    }
                    ,
                    r.getTipElement = function() {
                        return this.tip = this.tip || s.default(this.config.template)[0],
                        this.tip
                    }
                    ,
                    r.setContent = function() {
                        var e = s.default(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var t = this._getContent();
                        "function" == typeof t && (t = t.call(this.element)),
                        this.setElementContent(e.find(".popover-body"), t),
                        e.removeClass("fade show")
                    }
                    ,
                    r._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }
                    ,
                    r._cleanTipClass = function() {
                        var e = s.default(this.getTipElement())
                          , t = e.attr("class").match(nt);
                        null !== t && t.length > 0 && e.removeClass(t.join(""))
                    }
                    ,
                    t._jQueryInterface = function(e) {
                        return this.each((function() {
                            var n = s.default(this).data(Je)
                              , i = "object" == typeof e ? e : null;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this,i),
                            s.default(this).data(Je, n)),
                            "string" == typeof e)) {
                                if (void 0 === n[e])
                                    throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        }
                        ))
                    }
                    ,
                    a(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return it
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return Ze
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return Je
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return rt
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return et
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return st
                        }
                    }]),
                    t
                }(Qe);
                s.default.fn.popover = ot._jQueryInterface,
                s.default.fn.popover.Constructor = ot,
                s.default.fn.popover.noConflict = function() {
                    return s.default.fn.popover = tt,
                    ot._jQueryInterface
                }
                ;
                var at = "scrollspy"
                  , lt = "bs.scrollspy"
                  , ct = "." + lt
                  , dt = s.default.fn[at]
                  , ut = "active"
                  , pt = "position"
                  , ht = ".nav, .list-group"
                  , ft = ".nav-link"
                  , mt = {
                    offset: 10,
                    method: "auto",
                    target: ""
                }
                  , gt = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                }
                  , vt = function() {
                    function e(e, t) {
                        var n = this;
                        this._element = e,
                        this._scrollElement = "BODY" === e.tagName ? window : e,
                        this._config = this._getConfig(t),
                        this._selector = this._config.target + " " + ".nav-link," + this._config.target + " " + ".list-group-item," + this._config.target + " .dropdown-item",
                        this._offsets = [],
                        this._targets = [],
                        this._activeTarget = null,
                        this._scrollHeight = 0,
                        s.default(this._scrollElement).on("scroll.bs.scrollspy", (function(e) {
                            return n._process(e)
                        }
                        )),
                        this.refresh(),
                        this._process()
                    }
                    var t = e.prototype;
                    return t.refresh = function() {
                        var e = this
                          , t = this._scrollElement === this._scrollElement.window ? "offset" : pt
                          , n = "auto" === this._config.method ? t : this._config.method
                          , i = n === pt ? this._getScrollTop() : 0;
                        this._offsets = [],
                        this._targets = [],
                        this._scrollHeight = this._getScrollHeight(),
                        [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                            var t, r = p.getSelectorFromElement(e);
                            if (r && (t = document.querySelector(r)),
                            t) {
                                var o = t.getBoundingClientRect();
                                if (o.width || o.height)
                                    return [s.default(t)[n]().top + i, r]
                            }
                            return null
                        }
                        )).filter((function(e) {
                            return e
                        }
                        )).sort((function(e, t) {
                            return e[0] - t[0]
                        }
                        )).forEach((function(t) {
                            e._offsets.push(t[0]),
                            e._targets.push(t[1])
                        }
                        ))
                    }
                    ,
                    t.dispose = function() {
                        s.default.removeData(this._element, lt),
                        s.default(this._scrollElement).off(ct),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                    }
                    ,
                    t._getConfig = function(e) {
                        if ("string" != typeof (e = l({}, mt, "object" == typeof e && e ? e : {})).target && p.isElement(e.target)) {
                            var t = s.default(e.target).attr("id");
                            t || (t = p.getUID(at),
                            s.default(e.target).attr("id", t)),
                            e.target = "#" + t
                        }
                        return p.typeCheckConfig(at, e, gt),
                        e
                    }
                    ,
                    t._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }
                    ,
                    t._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                    ,
                    t._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }
                    ,
                    t._process = function() {
                        var e = this._getScrollTop() + this._config.offset
                          , t = this._getScrollHeight()
                          , n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(),
                        e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                                return this._activeTarget = null,
                                void this._clear();
                            for (var s = this._offsets.length; s--; )
                                this._activeTarget !== this._targets[s] && e >= this._offsets[s] && (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]) && this._activate(this._targets[s])
                        }
                    }
                    ,
                    t._activate = function(e) {
                        this._activeTarget = e,
                        this._clear();
                        var t = this._selector.split(",").map((function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        }
                        ))
                          , n = s.default([].slice.call(document.querySelectorAll(t.join(","))));
                        n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ut),
                        n.addClass(ut)) : (n.addClass(ut),
                        n.parents(ht).prev(".nav-link, .list-group-item").addClass(ut),
                        n.parents(ht).prev(".nav-item").children(ft).addClass(ut)),
                        s.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                            relatedTarget: e
                        })
                    }
                    ,
                    t._clear = function() {
                        [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                            return e.classList.contains(ut)
                        }
                        )).forEach((function(e) {
                            return e.classList.remove(ut)
                        }
                        ))
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this).data(lt);
                            if (n || (n = new e(this,"object" == typeof t && t),
                            s.default(this).data(lt, n)),
                            "string" == typeof t) {
                                if (void 0 === n[t])
                                    throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        }
                        ))
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return mt
                        }
                    }]),
                    e
                }();
                s.default(window).on("load.bs.scrollspy.data-api", (function() {
                    for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
                        var n = s.default(e[t]);
                        vt._jQueryInterface.call(n, n.data())
                    }
                }
                )),
                s.default.fn[at] = vt._jQueryInterface,
                s.default.fn[at].Constructor = vt,
                s.default.fn[at].noConflict = function() {
                    return s.default.fn[at] = dt,
                    vt._jQueryInterface
                }
                ;
                var yt = "bs.tab"
                  , bt = s.default.fn.tab
                  , wt = "active"
                  , xt = "fade"
                  , Et = "show"
                  , Tt = ".active"
                  , St = "> li > .active"
                  , _t = function() {
                    function e(e) {
                        this._element = e
                    }
                    var t = e.prototype;
                    return t.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && s.default(this._element).hasClass(wt) || s.default(this._element).hasClass("disabled"))) {
                            var t, n, i = s.default(this._element).closest(".nav, .list-group")[0], r = p.getSelectorFromElement(this._element);
                            if (i) {
                                var o = "UL" === i.nodeName || "OL" === i.nodeName ? St : Tt;
                                n = (n = s.default.makeArray(s.default(i).find(o)))[n.length - 1]
                            }
                            var a = s.default.Event("hide.bs.tab", {
                                relatedTarget: this._element
                            })
                              , l = s.default.Event("show.bs.tab", {
                                relatedTarget: n
                            });
                            if (n && s.default(n).trigger(a),
                            s.default(this._element).trigger(l),
                            !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                r && (t = document.querySelector(r)),
                                this._activate(this._element, i);
                                var c = function() {
                                    var t = s.default.Event("hidden.bs.tab", {
                                        relatedTarget: e._element
                                    })
                                      , i = s.default.Event("shown.bs.tab", {
                                        relatedTarget: n
                                    });
                                    s.default(n).trigger(t),
                                    s.default(e._element).trigger(i)
                                };
                                t ? this._activate(t, t.parentNode, c) : c()
                            }
                        }
                    }
                    ,
                    t.dispose = function() {
                        s.default.removeData(this._element, yt),
                        this._element = null
                    }
                    ,
                    t._activate = function(e, t, n) {
                        var i = this
                          , r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? s.default(t).children(Tt) : s.default(t).find(St))[0]
                          , o = n && r && s.default(r).hasClass(xt)
                          , a = function() {
                            return i._transitionComplete(e, r, n)
                        };
                        if (r && o) {
                            var l = p.getTransitionDurationFromElement(r);
                            s.default(r).removeClass(Et).one(p.TRANSITION_END, a).emulateTransitionEnd(l)
                        } else
                            a()
                    }
                    ,
                    t._transitionComplete = function(e, t, n) {
                        if (t) {
                            s.default(t).removeClass(wt);
                            var i = s.default(t.parentNode).find("> .dropdown-menu .active")[0];
                            i && s.default(i).removeClass(wt),
                            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                        }
                        s.default(e).addClass(wt),
                        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                        p.reflow(e),
                        e.classList.contains(xt) && e.classList.add(Et);
                        var r = e.parentNode;
                        if (r && "LI" === r.nodeName && (r = r.parentNode),
                        r && s.default(r).hasClass("dropdown-menu")) {
                            var o = s.default(e).closest(".dropdown")[0];
                            if (o) {
                                var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                                s.default(a).addClass(wt)
                            }
                            e.setAttribute("aria-expanded", !0)
                        }
                        n && n()
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this)
                              , i = n.data(yt);
                            if (i || (i = new e(this),
                            n.data(yt, i)),
                            "string" == typeof t) {
                                if (void 0 === i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        }
                        ))
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }]),
                    e
                }();
                s.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
                    e.preventDefault(),
                    _t._jQueryInterface.call(s.default(this), "show")
                }
                )),
                s.default.fn.tab = _t._jQueryInterface,
                s.default.fn.tab.Constructor = _t,
                s.default.fn.tab.noConflict = function() {
                    return s.default.fn.tab = bt,
                    _t._jQueryInterface
                }
                ;
                var Ct = "toast"
                  , At = "bs.toast"
                  , $t = s.default.fn.toast
                  , kt = "hide"
                  , Dt = "show"
                  , Lt = "showing"
                  , Ot = "click.dismiss.bs.toast"
                  , Mt = {
                    animation: !0,
                    autohide: !0,
                    delay: 500
                }
                  , It = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                }
                  , Pt = function() {
                    function e(e, t) {
                        this._element = e,
                        this._config = this._getConfig(t),
                        this._timeout = null,
                        this._setListeners()
                    }
                    var t = e.prototype;
                    return t.show = function() {
                        var e = this
                          , t = s.default.Event("show.bs.toast");
                        if (s.default(this._element).trigger(t),
                        !t.isDefaultPrevented()) {
                            this._clearTimeout(),
                            this._config.animation && this._element.classList.add("fade");
                            var n = function() {
                                e._element.classList.remove(Lt),
                                e._element.classList.add(Dt),
                                s.default(e._element).trigger("shown.bs.toast"),
                                e._config.autohide && (e._timeout = setTimeout((function() {
                                    e.hide()
                                }
                                ), e._config.delay))
                            };
                            if (this._element.classList.remove(kt),
                            p.reflow(this._element),
                            this._element.classList.add(Lt),
                            this._config.animation) {
                                var i = p.getTransitionDurationFromElement(this._element);
                                s.default(this._element).one(p.TRANSITION_END, n).emulateTransitionEnd(i)
                            } else
                                n()
                        }
                    }
                    ,
                    t.hide = function() {
                        if (this._element.classList.contains(Dt)) {
                            var e = s.default.Event("hide.bs.toast");
                            s.default(this._element).trigger(e),
                            e.isDefaultPrevented() || this._close()
                        }
                    }
                    ,
                    t.dispose = function() {
                        this._clearTimeout(),
                        this._element.classList.contains(Dt) && this._element.classList.remove(Dt),
                        s.default(this._element).off(Ot),
                        s.default.removeData(this._element, At),
                        this._element = null,
                        this._config = null
                    }
                    ,
                    t._getConfig = function(e) {
                        return e = l({}, Mt, s.default(this._element).data(), "object" == typeof e && e ? e : {}),
                        p.typeCheckConfig(Ct, e, this.constructor.DefaultType),
                        e
                    }
                    ,
                    t._setListeners = function() {
                        var e = this;
                        s.default(this._element).on(Ot, '[data-dismiss="toast"]', (function() {
                            return e.hide()
                        }
                        ))
                    }
                    ,
                    t._close = function() {
                        var e = this
                          , t = function() {
                            e._element.classList.add(kt),
                            s.default(e._element).trigger("hidden.bs.toast")
                        };
                        if (this._element.classList.remove(Dt),
                        this._config.animation) {
                            var n = p.getTransitionDurationFromElement(this._element);
                            s.default(this._element).one(p.TRANSITION_END, t).emulateTransitionEnd(n)
                        } else
                            t()
                    }
                    ,
                    t._clearTimeout = function() {
                        clearTimeout(this._timeout),
                        this._timeout = null
                    }
                    ,
                    e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = s.default(this)
                              , i = n.data(At);
                            if (i || (i = new e(this,"object" == typeof t && t),
                            n.data(At, i)),
                            "string" == typeof t) {
                                if (void 0 === i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t](this)
                            }
                        }
                        ))
                    }
                    ,
                    a(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return It
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return Mt
                        }
                    }]),
                    e
                }();
                s.default.fn.toast = Pt._jQueryInterface,
                s.default.fn.toast.Constructor = Pt,
                s.default.fn.toast.noConflict = function() {
                    return s.default.fn.toast = $t,
                    Pt._jQueryInterface
                }
                ,
                e.Alert = m,
                e.Button = E,
                e.Carousel = P,
                e.Collapse = U,
                e.Dropdown = de,
                e.Modal = De,
                e.Popover = ot,
                e.Scrollspy = vt,
                e.Tab = _t,
                e.Toast = Pt,
                e.Tooltip = Qe,
                e.Util = p,
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(755), n(981))
        },
        755: function(e, t) {
            var n;
            !function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document)
                        throw new Error("jQuery requires a window with a document");
                    return n(e)
                }
                : n(t)
            }("undefined" != typeof window ? window : this, (function(i, s) {
                "use strict";
                var r = []
                  , o = Object.getPrototypeOf
                  , a = r.slice
                  , l = r.flat ? function(e) {
                    return r.flat.call(e)
                }
                : function(e) {
                    return r.concat.apply([], e)
                }
                  , c = r.push
                  , d = r.indexOf
                  , u = {}
                  , p = u.toString
                  , h = u.hasOwnProperty
                  , f = h.toString
                  , m = f.call(Object)
                  , g = {}
                  , v = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                }
                  , y = function(e) {
                    return null != e && e === e.window
                }
                  , b = i.document
                  , w = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function x(e, t, n) {
                    var i, s, r = (n = n || b).createElement("script");
                    if (r.text = e,
                    t)
                        for (i in w)
                            (s = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, s);
                    n.head.appendChild(r).parentNode.removeChild(r)
                }
                function E(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e
                }
                var T = "3.6.0"
                  , S = function(e, t) {
                    return new S.fn.init(e,t)
                };
                function _(e) {
                    var t = !!e && "length"in e && e.length
                      , n = E(e);
                    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                S.fn = S.prototype = {
                    jquery: T,
                    constructor: S,
                    length: 0,
                    toArray: function() {
                        return a.call(this)
                    },
                    get: function(e) {
                        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = S.merge(this.constructor(), e);
                        return t.prevObject = this,
                        t
                    },
                    each: function(e) {
                        return S.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(S.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(S.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        }
                        )))
                    },
                    odd: function() {
                        return this.pushStack(S.grep(this, (function(e, t) {
                            return t % 2
                        }
                        )))
                    },
                    eq: function(e) {
                        var t = this.length
                          , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: c,
                    sort: r.sort,
                    splice: r.splice
                },
                S.extend = S.fn.extend = function() {
                    var e, t, n, i, s, r, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                    for ("boolean" == typeof o && (c = o,
                    o = arguments[a] || {},
                    a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === l && (o = this,
                    a--); a < l; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                i = e[t],
                                "__proto__" !== t && o !== i && (c && i && (S.isPlainObject(i) || (s = Array.isArray(i))) ? (n = o[t],
                                r = s && !Array.isArray(n) ? [] : s || S.isPlainObject(n) ? n : {},
                                s = !1,
                                o[t] = S.extend(c, r, i)) : void 0 !== i && (o[t] = i));
                    return o
                }
                ,
                S.extend({
                    expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e) || (t = o(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || f.call(n) !== m))
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        x(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, i = 0;
                        if (_(e))
                            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                                ;
                        else
                            for (i in e)
                                if (!1 === t.call(e[i], i, e[i]))
                                    break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (_(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                        n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : d.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, i = 0, s = e.length; i < n; i++)
                            e[s++] = t[i];
                        return e.length = s,
                        e
                    },
                    grep: function(e, t, n) {
                        for (var i = [], s = 0, r = e.length, o = !n; s < r; s++)
                            !t(e[s], s) !== o && i.push(e[s]);
                        return i
                    },
                    map: function(e, t, n) {
                        var i, s, r = 0, o = [];
                        if (_(e))
                            for (i = e.length; r < i; r++)
                                null != (s = t(e[r], r, n)) && o.push(s);
                        else
                            for (r in e)
                                null != (s = t(e[r], r, n)) && o.push(s);
                        return l(o)
                    },
                    guid: 1,
                    support: g
                }),
                "function" == typeof Symbol && (S.fn[Symbol.iterator] = r[Symbol.iterator]),
                S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    u["[object " + t + "]"] = t.toLowerCase()
                }
                ));
                var C = function(e) {
                    var t, n, i, s, r, o, a, l, c, d, u, p, h, f, m, g, v, y, b, w = "sizzle" + 1 * new Date, x = e.document, E = 0, T = 0, S = le(), _ = le(), C = le(), A = le(), $ = function(e, t) {
                        return e === t && (u = !0),
                        0
                    }, k = {}.hasOwnProperty, D = [], L = D.pop, O = D.push, M = D.push, I = D.slice, P = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", j = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", H = "\\[[\\x20\\t\\r\\n\\f]*(" + z + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + j + "*\\]", F = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", R = new RegExp(j + "+","g"), q = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"), B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), W = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), G = new RegExp(j + "|>"), V = new RegExp(F), U = new RegExp("^" + z + "$"), X = {
                        ID: new RegExp("^#(" + z + ")"),
                        CLASS: new RegExp("^\\.(" + z + ")"),
                        TAG: new RegExp("^(" + z + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),
                        bool: new RegExp("^(?:" + N + ")$","i"),
                        needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")
                    }, Y = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, se = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, re = function() {
                        p()
                    }, oe = we((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }
                    ), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        M.apply(D = I.call(x.childNodes), x.childNodes),
                        D[x.childNodes.length].nodeType
                    } catch (e) {
                        M = {
                            apply: D.length ? function(e, t) {
                                O.apply(e, I.call(t))
                            }
                            : function(e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++]; )
                                    ;
                                e.length = n - 1
                            }
                        }
                    }
                    function ae(e, t, i, s) {
                        var r, a, c, d, u, f, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
                        if (i = i || [],
                        "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
                            return i;
                        if (!s && (p(t),
                        t = t || h,
                        m)) {
                            if (11 !== x && (u = J.exec(e)))
                                if (r = u[1]) {
                                    if (9 === x) {
                                        if (!(c = t.getElementById(r)))
                                            return i;
                                        if (c.id === r)
                                            return i.push(c),
                                            i
                                    } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
                                        return i.push(c),
                                        i
                                } else {
                                    if (u[2])
                                        return M.apply(i, t.getElementsByTagName(e)),
                                        i;
                                    if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                        return M.apply(i, t.getElementsByClassName(r)),
                                        i
                                }
                            if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                                if (v = e,
                                y = t,
                                1 === x && (G.test(e) || W.test(e))) {
                                    for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, se) : t.setAttribute("id", d = w)),
                                    a = (f = o(e)).length; a--; )
                                        f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                                    v = f.join(",")
                                }
                                try {
                                    return M.apply(i, y.querySelectorAll(v)),
                                    i
                                } catch (t) {
                                    A(e, !0)
                                } finally {
                                    d === w && t.removeAttribute("id")
                                }
                            }
                        }
                        return l(e.replace(q, "$1"), t, i, s)
                    }
                    function le() {
                        var e = [];
                        return function t(n, s) {
                            return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                            t[n + " "] = s
                        }
                    }
                    function ce(e) {
                        return e[w] = !0,
                        e
                    }
                    function de(e) {
                        var t = h.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                            t = null
                        }
                    }
                    function ue(e, t) {
                        for (var n = e.split("|"), s = n.length; s--; )
                            i.attrHandle[n[s]] = t
                    }
                    function pe(e, t) {
                        var n = t && e
                          , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (i)
                            return i;
                        if (n)
                            for (; n = n.nextSibling; )
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function he(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }
                    function fe(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function me(e) {
                        return function(t) {
                            return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label"in t && t.disabled === e
                        }
                    }
                    function ge(e) {
                        return ce((function(t) {
                            return t = +t,
                            ce((function(n, i) {
                                for (var s, r = e([], n.length, t), o = r.length; o--; )
                                    n[s = r[o]] && (n[s] = !(i[s] = n[s]))
                            }
                            ))
                        }
                        ))
                    }
                    function ve(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = ae.support = {},
                    r = ae.isXML = function(e) {
                        var t = e && e.namespaceURI
                          , n = e && (e.ownerDocument || e).documentElement;
                        return !Y.test(t || n && n.nodeName || "HTML")
                    }
                    ,
                    p = ae.setDocument = function(e) {
                        var t, s, o = e ? e.ownerDocument || e : x;
                        return o != h && 9 === o.nodeType && o.documentElement ? (f = (h = o).documentElement,
                        m = !r(h),
                        x != h && (s = h.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", re, !1) : s.attachEvent && s.attachEvent("onunload", re)),
                        n.scope = de((function(e) {
                            return f.appendChild(e).appendChild(h.createElement("div")),
                            void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }
                        )),
                        n.attributes = de((function(e) {
                            return e.className = "i",
                            !e.getAttribute("className")
                        }
                        )),
                        n.getElementsByTagName = de((function(e) {
                            return e.appendChild(h.createComment("")),
                            !e.getElementsByTagName("*").length
                        }
                        )),
                        n.getElementsByClassName = Z.test(h.getElementsByClassName),
                        n.getById = de((function(e) {
                            return f.appendChild(e).id = w,
                            !h.getElementsByName || !h.getElementsByName(w).length
                        }
                        )),
                        n.getById ? (i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                        ,
                        i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                        ) : (i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                        ,
                        i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, i, s, r = t.getElementById(e);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === e)
                                        return [r];
                                    for (s = t.getElementsByName(e),
                                    i = 0; r = s[i++]; )
                                        if ((n = r.getAttributeNode("id")) && n.value === e)
                                            return [r]
                                }
                                return []
                            }
                        }
                        ),
                        i.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        }
                        : function(e, t) {
                            var n, i = [], s = 0, r = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = r[s++]; )
                                    1 === n.nodeType && i.push(n);
                                return i
                            }
                            return r
                        }
                        ,
                        i.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        v = [],
                        g = [],
                        (n.qsa = Z.test(h.querySelectorAll)) && (de((function(e) {
                            var t;
                            f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + N + ")"),
                            e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                            (t = h.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || g.push(":checked"),
                            e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            g.push("[\\r\\n\\f]")
                        }
                        )),
                        de((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = h.createElement("input");
                            t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                            f.appendChild(e).disabled = !0,
                            2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            g.push(",.*:")
                        }
                        ))),
                        (n.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de((function(e) {
                            n.disconnectedMatch = y.call(e, "*"),
                            y.call(e, "[s!='']:x"),
                            v.push("!=", F)
                        }
                        )),
                        g = g.length && new RegExp(g.join("|")),
                        v = v.length && new RegExp(v.join("|")),
                        t = Z.test(f.compareDocumentPosition),
                        b = t || Z.test(f.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                              , i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                        ,
                        $ = t ? function(e, t) {
                            if (e === t)
                                return u = !0,
                                0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == x && b(x, e) ? -1 : t == h || t.ownerDocument == x && b(x, t) ? 1 : d ? P(d, e) - P(d, t) : 0 : 4 & i ? -1 : 1)
                        }
                        : function(e, t) {
                            if (e === t)
                                return u = !0,
                                0;
                            var n, i = 0, s = e.parentNode, r = t.parentNode, o = [e], a = [t];
                            if (!s || !r)
                                return e == h ? -1 : t == h ? 1 : s ? -1 : r ? 1 : d ? P(d, e) - P(d, t) : 0;
                            if (s === r)
                                return pe(e, t);
                            for (n = e; n = n.parentNode; )
                                o.unshift(n);
                            for (n = t; n = n.parentNode; )
                                a.unshift(n);
                            for (; o[i] === a[i]; )
                                i++;
                            return i ? pe(o[i], a[i]) : o[i] == x ? -1 : a[i] == x ? 1 : 0
                        }
                        ,
                        h) : h
                    }
                    ,
                    ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }
                    ,
                    ae.matchesSelector = function(e, t) {
                        if (p(e),
                        n.matchesSelector && m && !A[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t)))
                            try {
                                var i = y.call(e, t);
                                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                    return i
                            } catch (e) {
                                A(t, !0)
                            }
                        return ae(t, h, null, [e]).length > 0
                    }
                    ,
                    ae.contains = function(e, t) {
                        return (e.ownerDocument || e) != h && p(e),
                        b(e, t)
                    }
                    ,
                    ae.attr = function(e, t) {
                        (e.ownerDocument || e) != h && p(e);
                        var s = i.attrHandle[t.toLowerCase()]
                          , r = s && k.call(i.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                        return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                    ,
                    ae.escape = function(e) {
                        return (e + "").replace(ie, se)
                    }
                    ,
                    ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    ae.uniqueSort = function(e) {
                        var t, i = [], s = 0, r = 0;
                        if (u = !n.detectDuplicates,
                        d = !n.sortStable && e.slice(0),
                        e.sort($),
                        u) {
                            for (; t = e[r++]; )
                                t === e[r] && (s = i.push(r));
                            for (; s--; )
                                e.splice(i[s], 1)
                        }
                        return d = null,
                        e
                    }
                    ,
                    s = ae.getText = function(e) {
                        var t, n = "", i = 0, r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent)
                                    return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    n += s(e)
                            } else if (3 === r || 4 === r)
                                return e.nodeValue
                        } else
                            for (; t = e[i++]; )
                                n += s(t);
                        return n
                    }
                    ,
                    i = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne),
                                e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                                e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                e[2] = n.slice(0, t)),
                                e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                }
                                : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + j + "|$)")) && S(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }
                                ))
                            },
                            ATTR: function(e, t, n) {
                                return function(i) {
                                    var s = ae.attr(i, e);
                                    return null == s ? "!=" === t : !t || (s += "",
                                    "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && s.indexOf(n) > -1 : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? (" " + s.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (s === n || s.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, i, s) {
                                var r = "nth" !== e.slice(0, 3)
                                  , o = "last" !== e.slice(-4)
                                  , a = "of-type" === t;
                                return 1 === i && 0 === s ? function(e) {
                                    return !!e.parentNode
                                }
                                : function(t, n, l) {
                                    var c, d, u, p, h, f, m = r !== o ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                    if (g) {
                                        if (r) {
                                            for (; m; ) {
                                                for (p = t; p = p[m]; )
                                                    if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                        return !1;
                                                f = m = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [o ? g.firstChild : g.lastChild],
                                        o && y) {
                                            for (b = (h = (c = (d = (u = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2],
                                            p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop(); )
                                                if (1 === p.nodeType && ++b && p === t) {
                                                    d[e] = [E, h, b];
                                                    break
                                                }
                                        } else if (y && (b = h = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === E && c[1]),
                                        !1 === b)
                                            for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [E, b]),
                                            p !== t)); )
                                                ;
                                        return (b -= s) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, s = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return s[w] ? s(t) : s.length > 1 ? (n = [e, e, "", t],
                                i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                    for (var i, r = s(e, t), o = r.length; o--; )
                                        e[i = P(e, r[o])] = !(n[i] = r[o])
                                }
                                )) : function(e) {
                                    return s(e, 0, n)
                                }
                                ) : s
                            }
                        },
                        pseudos: {
                            not: ce((function(e) {
                                var t = []
                                  , n = []
                                  , i = a(e.replace(q, "$1"));
                                return i[w] ? ce((function(e, t, n, s) {
                                    for (var r, o = i(e, null, s, []), a = e.length; a--; )
                                        (r = o[a]) && (e[a] = !(t[a] = r))
                                }
                                )) : function(e, s, r) {
                                    return t[0] = e,
                                    i(t, null, r, n),
                                    t[0] = null,
                                    !n.pop()
                                }
                            }
                            )),
                            has: ce((function(e) {
                                return function(t) {
                                    return ae(e, t).length > 0
                                }
                            }
                            )),
                            contains: ce((function(e) {
                                return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || s(t)).indexOf(e) > -1
                                }
                            }
                            )),
                            lang: ce((function(e) {
                                return U.test(e || "") || ae.error("unsupported lang: " + e),
                                e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }
                            )),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === f
                            },
                            focus: function(e) {
                                return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return K.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge((function() {
                                return [0]
                            }
                            )),
                            last: ge((function(e, t) {
                                return [t - 1]
                            }
                            )),
                            eq: ge((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }
                            )),
                            even: ge((function(e, t) {
                                for (var n = 0; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            odd: ge((function(e, t) {
                                for (var n = 1; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            lt: ge((function(e, t, n) {
                                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                                    e.push(i);
                                return e
                            }
                            )),
                            gt: ge((function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t; )
                                    e.push(i);
                                return e
                            }
                            ))
                        }
                    },
                    i.pseudos.nth = i.pseudos.eq,
                    {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        i.pseudos[t] = he(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        i.pseudos[t] = fe(t);
                    function ye() {}
                    function be(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++)
                            i += e[t].value;
                        return i
                    }
                    function we(e, t, n) {
                        var i = t.dir
                          , s = t.next
                          , r = s || i
                          , o = n && "parentNode" === r
                          , a = T++;
                        return t.first ? function(t, n, s) {
                            for (; t = t[i]; )
                                if (1 === t.nodeType || o)
                                    return e(t, n, s);
                            return !1
                        }
                        : function(t, n, l) {
                            var c, d, u, p = [E, a];
                            if (l) {
                                for (; t = t[i]; )
                                    if ((1 === t.nodeType || o) && e(t, n, l))
                                        return !0
                            } else
                                for (; t = t[i]; )
                                    if (1 === t.nodeType || o)
                                        if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}),
                                        s && s === t.nodeName.toLowerCase())
                                            t = t[i] || t;
                                        else {
                                            if ((c = d[r]) && c[0] === E && c[1] === a)
                                                return p[2] = c[2];
                                            if (d[r] = p,
                                            p[2] = e(t, n, l))
                                                return !0
                                        }
                            return !1
                        }
                    }
                    function xe(e) {
                        return e.length > 1 ? function(t, n, i) {
                            for (var s = e.length; s--; )
                                if (!e[s](t, n, i))
                                    return !1;
                            return !0
                        }
                        : e[0]
                    }
                    function Ee(e, t, n, i, s) {
                        for (var r, o = [], a = 0, l = e.length, c = null != t; a < l; a++)
                            (r = e[a]) && (n && !n(r, i, s) || (o.push(r),
                            c && t.push(a)));
                        return o
                    }
                    function Te(e, t, n, i, s, r) {
                        return i && !i[w] && (i = Te(i)),
                        s && !s[w] && (s = Te(s, r)),
                        ce((function(r, o, a, l) {
                            var c, d, u, p = [], h = [], f = o.length, m = r || function(e, t, n) {
                                for (var i = 0, s = t.length; i < s; i++)
                                    ae(e, t[i], n);
                                return n
                            }(t || "*", a.nodeType ? [a] : a, []), g = !e || !r && t ? m : Ee(m, p, e, a, l), v = n ? s || (r ? e : f || i) ? [] : o : g;
                            if (n && n(g, v, a, l),
                            i)
                                for (c = Ee(v, h),
                                i(c, [], a, l),
                                d = c.length; d--; )
                                    (u = c[d]) && (v[h[d]] = !(g[h[d]] = u));
                            if (r) {
                                if (s || e) {
                                    if (s) {
                                        for (c = [],
                                        d = v.length; d--; )
                                            (u = v[d]) && c.push(g[d] = u);
                                        s(null, v = [], c, l)
                                    }
                                    for (d = v.length; d--; )
                                        (u = v[d]) && (c = s ? P(r, u) : p[d]) > -1 && (r[c] = !(o[c] = u))
                                }
                            } else
                                v = Ee(v === o ? v.splice(f, v.length) : v),
                                s ? s(null, o, v, l) : M.apply(o, v)
                        }
                        ))
                    }
                    function Se(e) {
                        for (var t, n, s, r = e.length, o = i.relative[e[0].type], a = o || i.relative[" "], l = o ? 1 : 0, d = we((function(e) {
                            return e === t
                        }
                        ), a, !0), u = we((function(e) {
                            return P(t, e) > -1
                        }
                        ), a, !0), p = [function(e, n, i) {
                            var s = !o && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                            return t = null,
                            s
                        }
                        ]; l < r; l++)
                            if (n = i.relative[e[l].type])
                                p = [we(xe(p), n)];
                            else {
                                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                    for (s = ++l; s < r && !i.relative[e[s].type]; s++)
                                        ;
                                    return Te(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(q, "$1"), n, l < s && Se(e.slice(l, s)), s < r && Se(e = e.slice(s)), s < r && be(e))
                                }
                                p.push(n)
                            }
                        return xe(p)
                    }
                    return ye.prototype = i.filters = i.pseudos,
                    i.setFilters = new ye,
                    o = ae.tokenize = function(e, t) {
                        var n, s, r, o, a, l, c, d = _[e + " "];
                        if (d)
                            return t ? 0 : d.slice(0);
                        for (a = e,
                        l = [],
                        c = i.preFilter; a; ) {
                            for (o in n && !(s = B.exec(a)) || (s && (a = a.slice(s[0].length) || a),
                            l.push(r = [])),
                            n = !1,
                            (s = W.exec(a)) && (n = s.shift(),
                            r.push({
                                value: n,
                                type: s[0].replace(q, " ")
                            }),
                            a = a.slice(n.length)),
                            i.filter)
                                !(s = X[o].exec(a)) || c[o] && !(s = c[o](s)) || (n = s.shift(),
                                r.push({
                                    value: n,
                                    type: o,
                                    matches: s
                                }),
                                a = a.slice(n.length));
                            if (!n)
                                break
                        }
                        return t ? a.length : a ? ae.error(e) : _(e, l).slice(0)
                    }
                    ,
                    a = ae.compile = function(e, t) {
                        var n, s = [], r = [], a = C[e + " "];
                        if (!a) {
                            for (t || (t = o(e)),
                            n = t.length; n--; )
                                (a = Se(t[n]))[w] ? s.push(a) : r.push(a);
                            a = C(e, function(e, t) {
                                var n = t.length > 0
                                  , s = e.length > 0
                                  , r = function(r, o, a, l, d) {
                                    var u, f, g, v = 0, y = "0", b = r && [], w = [], x = c, T = r || s && i.find.TAG("*", d), S = E += null == x ? 1 : Math.random() || .1, _ = T.length;
                                    for (d && (c = o == h || o || d); y !== _ && null != (u = T[y]); y++) {
                                        if (s && u) {
                                            for (f = 0,
                                            o || u.ownerDocument == h || (p(u),
                                            a = !m); g = e[f++]; )
                                                if (g(u, o || h, a)) {
                                                    l.push(u);
                                                    break
                                                }
                                            d && (E = S)
                                        }
                                        n && ((u = !g && u) && v--,
                                        r && b.push(u))
                                    }
                                    if (v += y,
                                    n && y !== v) {
                                        for (f = 0; g = t[f++]; )
                                            g(b, w, o, a);
                                        if (r) {
                                            if (v > 0)
                                                for (; y--; )
                                                    b[y] || w[y] || (w[y] = L.call(l));
                                            w = Ee(w)
                                        }
                                        M.apply(l, w),
                                        d && !r && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                    }
                                    return d && (E = S,
                                    c = x),
                                    b
                                };
                                return n ? ce(r) : r
                            }(r, s)),
                            a.selector = e
                        }
                        return a
                    }
                    ,
                    l = ae.select = function(e, t, n, s) {
                        var r, l, c, d, u, p = "function" == typeof e && e, h = !s && o(e = p.selector || e);
                        if (n = n || [],
                        1 === h.length) {
                            if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                                if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                                    return n;
                                p && (t = t.parentNode),
                                e = e.slice(l.shift().value.length)
                            }
                            for (r = X.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r],
                            !i.relative[d = c.type]); )
                                if ((u = i.find[d]) && (s = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                    if (l.splice(r, 1),
                                    !(e = s.length && be(l)))
                                        return M.apply(n, s),
                                        n;
                                    break
                                }
                        }
                        return (p || a(e, h))(s, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t),
                        n
                    }
                    ,
                    n.sortStable = w.split("").sort($).join("") === w,
                    n.detectDuplicates = !!u,
                    p(),
                    n.sortDetached = de((function(e) {
                        return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
                    }
                    )),
                    de((function(e) {
                        return e.innerHTML = "<a href='#'></a>",
                        "#" === e.firstChild.getAttribute("href")
                    }
                    )) || ue("type|href|height|width", (function(e, t, n) {
                        if (!n)
                            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }
                    )),
                    n.attributes && de((function(e) {
                        return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    }
                    )) || ue("value", (function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase())
                            return e.defaultValue
                    }
                    )),
                    de((function(e) {
                        return null == e.getAttribute("disabled")
                    }
                    )) || ue(N, (function(e, t, n) {
                        var i;
                        if (!n)
                            return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }
                    )),
                    ae
                }(i);
                S.find = C,
                S.expr = C.selectors,
                S.expr[":"] = S.expr.pseudos,
                S.uniqueSort = S.unique = C.uniqueSort,
                S.text = C.getText,
                S.isXMLDoc = C.isXML,
                S.contains = C.contains,
                S.escapeSelector = C.escape;
                var A = function(e, t, n) {
                    for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (s && S(e).is(n))
                                break;
                            i.push(e)
                        }
                    return i
                }
                  , $ = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                  , k = S.expr.match.needsContext;
                function D(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function O(e, t, n) {
                    return v(t) ? S.grep(e, (function(e, i) {
                        return !!t.call(e, i, e) !== n
                    }
                    )) : t.nodeType ? S.grep(e, (function(e) {
                        return e === t !== n
                    }
                    )) : "string" != typeof t ? S.grep(e, (function(e) {
                        return d.call(t, e) > -1 !== n
                    }
                    )) : S.filter(t, e, n)
                }
                S.filter = function(e, t, n) {
                    var i = t[0];
                    return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, (function(e) {
                        return 1 === e.nodeType
                    }
                    )))
                }
                ,
                S.fn.extend({
                    find: function(e) {
                        var t, n, i = this.length, s = this;
                        if ("string" != typeof e)
                            return this.pushStack(S(e).filter((function() {
                                for (t = 0; t < i; t++)
                                    if (S.contains(s[t], this))
                                        return !0
                            }
                            )));
                        for (n = this.pushStack([]),
                        t = 0; t < i; t++)
                            S.find(e, s[t], n);
                        return i > 1 ? S.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(O(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(O(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!O(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
                    }
                });
                var M, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (S.fn.init = function(e, t, n) {
                    var i, s;
                    if (!e)
                        return this;
                    if (n = n || M,
                    "string" == typeof e) {
                        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t)
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (i[1]) {
                            if (t = t instanceof S ? t[0] : t,
                            S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                            L.test(i[1]) && S.isPlainObject(t))
                                for (i in t)
                                    v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this
                        }
                        return (s = b.getElementById(i[2])) && (this[0] = s,
                        this.length = 1),
                        this
                    }
                    return e.nodeType ? (this[0] = e,
                    this.length = 1,
                    this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
                }
                ).prototype = S.fn,
                M = S(b);
                var P = /^(?:parents|prev(?:Until|All))/
                  , N = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function j(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; )
                        ;
                    return e
                }
                S.fn.extend({
                    has: function(e) {
                        var t = S(e, this)
                          , n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (S.contains(this, t[e]))
                                    return !0
                        }
                        ))
                    },
                    closest: function(e, t) {
                        var n, i = 0, s = this.length, r = [], o = "string" != typeof e && S(e);
                        if (!k.test(e))
                            for (; i < s; i++)
                                for (n = this[i]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                        r.push(n);
                                        break
                                    }
                        return this.pushStack(r.length > 1 ? S.uniqueSort(r) : r)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? d.call(S(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                S.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return A(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return A(e, "parentNode", n)
                    },
                    next: function(e) {
                        return j(e, "nextSibling")
                    },
                    prev: function(e) {
                        return j(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return A(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return A(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return A(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return A(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return $((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return $(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e),
                        S.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    S.fn[e] = function(n, i) {
                        var s = S.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n),
                        i && "string" == typeof i && (s = S.filter(i, s)),
                        this.length > 1 && (N[e] || S.uniqueSort(s),
                        P.test(e) && s.reverse()),
                        this.pushStack(s)
                    }
                }
                ));
                var z = /[^\x20\t\r\n\f]+/g;
                function H(e) {
                    return e
                }
                function F(e) {
                    throw e
                }
                function R(e, t, n, i) {
                    var s;
                    try {
                        e && v(s = e.promise) ? s.call(e).done(t).fail(n) : e && v(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(i))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                S.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return S.each(e.match(z) || [], (function(e, n) {
                            t[n] = !0
                        }
                        )),
                        t
                    }(e) : S.extend({}, e);
                    var t, n, i, s, r = [], o = [], a = -1, l = function() {
                        for (s = s || e.once,
                        i = t = !0; o.length; a = -1)
                            for (n = o.shift(); ++a < r.length; )
                                !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length,
                                n = !1);
                        e.memory || (n = !1),
                        t = !1,
                        s && (r = n ? [] : "")
                    }, c = {
                        add: function() {
                            return r && (n && !t && (a = r.length - 1,
                            o.push(n)),
                            function t(n) {
                                S.each(n, (function(n, i) {
                                    v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== E(i) && t(i)
                                }
                                ))
                            }(arguments),
                            n && !t && l()),
                            this
                        },
                        remove: function() {
                            return S.each(arguments, (function(e, t) {
                                for (var n; (n = S.inArray(t, r, n)) > -1; )
                                    r.splice(n, 1),
                                    n <= a && a--
                            }
                            )),
                            this
                        },
                        has: function(e) {
                            return e ? S.inArray(e, r) > -1 : r.length > 0
                        },
                        empty: function() {
                            return r && (r = []),
                            this
                        },
                        disable: function() {
                            return s = o = [],
                            r = n = "",
                            this
                        },
                        disabled: function() {
                            return !r
                        },
                        lock: function() {
                            return s = o = [],
                            n || t || (r = n = ""),
                            this
                        },
                        locked: function() {
                            return !!s
                        },
                        fireWith: function(e, n) {
                            return s || (n = [e, (n = n || []).slice ? n.slice() : n],
                            o.push(n),
                            t || l()),
                            this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                    return c
                }
                ,
                S.extend({
                    Deferred: function(e) {
                        var t = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                          , n = "pending"
                          , s = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments),
                                this
                            },
                            catch: function(e) {
                                return s.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return S.Deferred((function(n) {
                                    S.each(t, (function(t, i) {
                                        var s = v(e[i[4]]) && e[i[4]];
                                        r[i[1]]((function() {
                                            var e = s && s.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, s ? [e] : arguments)
                                        }
                                        ))
                                    }
                                    )),
                                    e = null
                                }
                                )).promise()
                            },
                            then: function(e, n, s) {
                                var r = 0;
                                function o(e, t, n, s) {
                                    return function() {
                                        var a = this
                                          , l = arguments
                                          , c = function() {
                                            var i, c;
                                            if (!(e < r)) {
                                                if ((i = n.apply(a, l)) === t.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                c = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                                v(c) ? s ? c.call(i, o(r, t, H, s), o(r, t, F, s)) : (r++,
                                                c.call(i, o(r, t, H, s), o(r, t, F, s), o(r, t, H, t.notifyWith))) : (n !== H && (a = void 0,
                                                l = [i]),
                                                (s || t.resolveWith)(a, l))
                                            }
                                        }
                                          , d = s ? c : function() {
                                            try {
                                                c()
                                            } catch (i) {
                                                S.Deferred.exceptionHook && S.Deferred.exceptionHook(i, d.stackTrace),
                                                e + 1 >= r && (n !== F && (a = void 0,
                                                l = [i]),
                                                t.rejectWith(a, l))
                                            }
                                        }
                                        ;
                                        e ? d() : (S.Deferred.getStackHook && (d.stackTrace = S.Deferred.getStackHook()),
                                        i.setTimeout(d))
                                    }
                                }
                                return S.Deferred((function(i) {
                                    t[0][3].add(o(0, i, v(s) ? s : H, i.notifyWith)),
                                    t[1][3].add(o(0, i, v(e) ? e : H)),
                                    t[2][3].add(o(0, i, v(n) ? n : F))
                                }
                                )).promise()
                            },
                            promise: function(e) {
                                return null != e ? S.extend(e, s) : s
                            }
                        }
                          , r = {};
                        return S.each(t, (function(e, i) {
                            var o = i[2]
                              , a = i[5];
                            s[i[1]] = o.add,
                            a && o.add((function() {
                                n = a
                            }
                            ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                            o.add(i[3].fire),
                            r[i[0]] = function() {
                                return r[i[0] + "With"](this === r ? void 0 : this, arguments),
                                this
                            }
                            ,
                            r[i[0] + "With"] = o.fireWith
                        }
                        )),
                        s.promise(r),
                        e && e.call(r, r),
                        r
                    },
                    when: function(e) {
                        var t = arguments.length
                          , n = t
                          , i = Array(n)
                          , s = a.call(arguments)
                          , r = S.Deferred()
                          , o = function(e) {
                            return function(n) {
                                i[e] = this,
                                s[e] = arguments.length > 1 ? a.call(arguments) : n,
                                --t || r.resolveWith(i, s)
                            }
                        };
                        if (t <= 1 && (R(e, r.done(o(n)).resolve, r.reject, !t),
                        "pending" === r.state() || v(s[n] && s[n].then)))
                            return r.then();
                        for (; n--; )
                            R(s[n], o(n), r.reject);
                        return r.promise()
                    }
                });
                var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                S.Deferred.exceptionHook = function(e, t) {
                    i.console && i.console.warn && e && q.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }
                ,
                S.readyException = function(e) {
                    i.setTimeout((function() {
                        throw e
                    }
                    ))
                }
                ;
                var B = S.Deferred();
                function W() {
                    b.removeEventListener("DOMContentLoaded", W),
                    i.removeEventListener("load", W),
                    S.ready()
                }
                S.fn.ready = function(e) {
                    return B.then(e).catch((function(e) {
                        S.readyException(e)
                    }
                    )),
                    this
                }
                ,
                S.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0,
                        !0 !== e && --S.readyWait > 0 || B.resolveWith(b, [S]))
                    }
                }),
                S.ready.then = B.then,
                "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", W),
                i.addEventListener("load", W));
                var G = function(e, t, n, i, s, r, o) {
                    var a = 0
                      , l = e.length
                      , c = null == n;
                    if ("object" === E(n))
                        for (a in s = !0,
                        n)
                            G(e, t, a, n[a], !0, r, o);
                    else if (void 0 !== i && (s = !0,
                    v(i) || (o = !0),
                    c && (o ? (t.call(e, i),
                    t = null) : (c = t,
                    t = function(e, t, n) {
                        return c.call(S(e), n)
                    }
                    )),
                    t))
                        for (; a < l; a++)
                            t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
                    return s ? e : c ? t.call(e) : l ? t(e[0], n) : r
                }
                  , V = /^-ms-/
                  , U = /-([a-z])/g;
                function X(e, t) {
                    return t.toUpperCase()
                }
                function Y(e) {
                    return e.replace(V, "ms-").replace(U, X)
                }
                var K = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
                function Q() {
                    this.expando = S.expando + Q.uid++
                }
                Q.uid = 1,
                Q.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {},
                        K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                        t
                    },
                    set: function(e, t, n) {
                        var i, s = this.cache(e);
                        if ("string" == typeof t)
                            s[Y(t)] = n;
                        else
                            for (i in t)
                                s[Y(i)] = t[i];
                        return s
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                        void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, i = e[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t))in i ? [t] : t.match(z) || []).length;
                                for (; n--; )
                                    delete i[t[n]]
                            }
                            (void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !S.isEmptyObject(t)
                    }
                };
                var Z = new Q
                  , J = new Q
                  , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , te = /[A-Z]/g;
                function ne(e, t, n) {
                    var i;
                    if (void 0 === n && 1 === e.nodeType)
                        if (i = "data-" + t.replace(te, "-$&").toLowerCase(),
                        "string" == typeof (n = e.getAttribute(i))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (e) {}
                            J.set(e, t, n)
                        } else
                            n = void 0;
                    return n
                }
                S.extend({
                    hasData: function(e) {
                        return J.hasData(e) || Z.hasData(e)
                    },
                    data: function(e, t, n) {
                        return J.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        J.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return Z.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        Z.remove(e, t)
                    }
                }),
                S.fn.extend({
                    data: function(e, t) {
                        var n, i, s, r = this[0], o = r && r.attributes;
                        if (void 0 === e) {
                            if (this.length && (s = J.get(r),
                            1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
                                for (n = o.length; n--; )
                                    o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = Y(i.slice(5)),
                                    ne(r, i, s[i]));
                                Z.set(r, "hasDataAttrs", !0)
                            }
                            return s
                        }
                        return "object" == typeof e ? this.each((function() {
                            J.set(this, e)
                        }
                        )) : G(this, (function(t) {
                            var n;
                            if (r && void 0 === t)
                                return void 0 !== (n = J.get(r, e)) || void 0 !== (n = ne(r, e)) ? n : void 0;
                            this.each((function() {
                                J.set(this, e, t)
                            }
                            ))
                        }
                        ), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            J.remove(this, e)
                        }
                        ))
                    }
                }),
                S.extend({
                    queue: function(e, t, n) {
                        var i;
                        if (e)
                            return t = (t || "fx") + "queue",
                            i = Z.get(e, t),
                            n && (!i || Array.isArray(n) ? i = Z.access(e, t, S.makeArray(n)) : i.push(n)),
                            i || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = S.queue(e, t)
                          , i = n.length
                          , s = n.shift()
                          , r = S._queueHooks(e, t);
                        "inprogress" === s && (s = n.shift(),
                        i--),
                        s && ("fx" === t && n.unshift("inprogress"),
                        delete r.stop,
                        s.call(e, (function() {
                            S.dequeue(e, t)
                        }
                        ), r)),
                        !i && r && r.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return Z.get(e, n) || Z.access(e, n, {
                            empty: S.Callbacks("once memory").add((function() {
                                Z.remove(e, [t + "queue", n])
                            }
                            ))
                        })
                    }
                }),
                S.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                        e = "fx",
                        n--),
                        arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = S.queue(this, e, t);
                            S._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                        }
                        ))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            S.dequeue(this, e)
                        }
                        ))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, i = 1, s = S.Deferred(), r = this, o = this.length, a = function() {
                            --i || s.resolveWith(r, [r])
                        };
                        for ("string" != typeof e && (t = e,
                        e = void 0),
                        e = e || "fx"; o--; )
                            (n = Z.get(r[o], e + "queueHooks")) && n.empty && (i++,
                            n.empty.add(a));
                        return a(),
                        s.promise(t)
                    }
                });
                var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , se = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$","i")
                  , re = ["Top", "Right", "Bottom", "Left"]
                  , oe = b.documentElement
                  , ae = function(e) {
                    return S.contains(e.ownerDocument, e)
                }
                  , le = {
                    composed: !0
                };
                oe.getRootNode && (ae = function(e) {
                    return S.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
                }
                );
                var ce = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === S.css(e, "display")
                };
                function de(e, t, n, i) {
                    var s, r, o = 20, a = i ? function() {
                        return i.cur()
                    }
                    : function() {
                        return S.css(e, t, "")
                    }
                    , l = a(), c = n && n[3] || (S.cssNumber[t] ? "" : "px"), d = e.nodeType && (S.cssNumber[t] || "px" !== c && +l) && se.exec(S.css(e, t));
                    if (d && d[3] !== c) {
                        for (l /= 2,
                        c = c || d[3],
                        d = +l || 1; o--; )
                            S.style(e, t, d + c),
                            (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (o = 0),
                            d /= r;
                        d *= 2,
                        S.style(e, t, d + c),
                        n = n || []
                    }
                    return n && (d = +d || +l || 0,
                    s = n[1] ? d + (n[1] + 1) * n[2] : +n[2],
                    i && (i.unit = c,
                    i.start = d,
                    i.end = s)),
                    s
                }
                var ue = {};
                function pe(e) {
                    var t, n = e.ownerDocument, i = e.nodeName, s = ue[i];
                    return s || (t = n.body.appendChild(n.createElement(i)),
                    s = S.css(t, "display"),
                    t.parentNode.removeChild(t),
                    "none" === s && (s = "block"),
                    ue[i] = s,
                    s)
                }
                function he(e, t) {
                    for (var n, i, s = [], r = 0, o = e.length; r < o; r++)
                        (i = e[r]).style && (n = i.style.display,
                        t ? ("none" === n && (s[r] = Z.get(i, "display") || null,
                        s[r] || (i.style.display = "")),
                        "" === i.style.display && ce(i) && (s[r] = pe(i))) : "none" !== n && (s[r] = "none",
                        Z.set(i, "display", n)));
                    for (r = 0; r < o; r++)
                        null != s[r] && (e[r].style.display = s[r]);
                    return e
                }
                S.fn.extend({
                    show: function() {
                        return he(this, !0)
                    },
                    hide: function() {
                        return he(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            ce(this) ? S(this).show() : S(this).hide()
                        }
                        ))
                    }
                });
                var fe, me, ge = /^(?:checkbox|radio)$/i, ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ye = /^$|^module$|\/(?:java|ecma)script/i;
                fe = b.createDocumentFragment().appendChild(b.createElement("div")),
                (me = b.createElement("input")).setAttribute("type", "radio"),
                me.setAttribute("checked", "checked"),
                me.setAttribute("name", "t"),
                fe.appendChild(me),
                g.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked,
                fe.innerHTML = "<textarea>x</textarea>",
                g.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue,
                fe.innerHTML = "<option></option>",
                g.option = !!fe.lastChild;
                var be = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                function we(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                    void 0 === t || t && D(e, t) ? S.merge([e], n) : n
                }
                function xe(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
                }
                be.tbody = be.tfoot = be.colgroup = be.caption = be.thead,
                be.th = be.td,
                g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Ee = /<|&#?\w+;/;
                function Te(e, t, n, i, s) {
                    for (var r, o, a, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
                        if ((r = e[h]) || 0 === r)
                            if ("object" === E(r))
                                S.merge(p, r.nodeType ? [r] : r);
                            else if (Ee.test(r)) {
                                for (o = o || u.appendChild(t.createElement("div")),
                                a = (ve.exec(r) || ["", ""])[1].toLowerCase(),
                                l = be[a] || be._default,
                                o.innerHTML = l[1] + S.htmlPrefilter(r) + l[2],
                                d = l[0]; d--; )
                                    o = o.lastChild;
                                S.merge(p, o.childNodes),
                                (o = u.firstChild).textContent = ""
                            } else
                                p.push(t.createTextNode(r));
                    for (u.textContent = "",
                    h = 0; r = p[h++]; )
                        if (i && S.inArray(r, i) > -1)
                            s && s.push(r);
                        else if (c = ae(r),
                        o = we(u.appendChild(r), "script"),
                        c && xe(o),
                        n)
                            for (d = 0; r = o[d++]; )
                                ye.test(r.type || "") && n.push(r);
                    return u
                }
                var Se = /^([^.]*)(?:\.(.+)|)/;
                function _e() {
                    return !0
                }
                function Ce() {
                    return !1
                }
                function Ae(e, t) {
                    return e === function() {
                        try {
                            return b.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }
                function $e(e, t, n, i, s, r) {
                    var o, a;
                    if ("object" == typeof t) {
                        for (a in "string" != typeof n && (i = i || n,
                        n = void 0),
                        t)
                            $e(e, a, n, i, t[a], r);
                        return e
                    }
                    if (null == i && null == s ? (s = n,
                    i = n = void 0) : null == s && ("string" == typeof n ? (s = i,
                    i = void 0) : (s = i,
                    i = n,
                    n = void 0)),
                    !1 === s)
                        s = Ce;
                    else if (!s)
                        return e;
                    return 1 === r && (o = s,
                    s = function(e) {
                        return S().off(e),
                        o.apply(this, arguments)
                    }
                    ,
                    s.guid = o.guid || (o.guid = S.guid++)),
                    e.each((function() {
                        S.event.add(this, t, s, i, n)
                    }
                    ))
                }
                function ke(e, t, n) {
                    n ? (Z.set(e, t, !1),
                    S.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var i, s, r = Z.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r.length)
                                    (S.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (r = a.call(arguments),
                                Z.set(this, t, r),
                                i = n(this, t),
                                this[t](),
                                r !== (s = Z.get(this, t)) || i ? Z.set(this, t, !1) : s = {},
                                r !== s)
                                    return e.stopImmediatePropagation(),
                                    e.preventDefault(),
                                    s && s.value
                            } else
                                r.length && (Z.set(this, t, {
                                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                                }),
                                e.stopImmediatePropagation())
                        }
                    })) : void 0 === Z.get(e, t) && S.event.add(e, t, _e)
                }
                S.event = {
                    global: {},
                    add: function(e, t, n, i, s) {
                        var r, o, a, l, c, d, u, p, h, f, m, g = Z.get(e);
                        if (K(e))
                            for (n.handler && (n = (r = n).handler,
                            s = r.selector),
                            s && S.find.matchesSelector(oe, s),
                            n.guid || (n.guid = S.guid++),
                            (l = g.events) || (l = g.events = Object.create(null)),
                            (o = g.handle) || (o = g.handle = function(t) {
                                return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            c = (t = (t || "").match(z) || [""]).length; c--; )
                                h = m = (a = Se.exec(t[c]) || [])[1],
                                f = (a[2] || "").split(".").sort(),
                                h && (u = S.event.special[h] || {},
                                h = (s ? u.delegateType : u.bindType) || h,
                                u = S.event.special[h] || {},
                                d = S.extend({
                                    type: h,
                                    origType: m,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: s,
                                    needsContext: s && S.expr.match.needsContext.test(s),
                                    namespace: f.join(".")
                                }, r),
                                (p = l[h]) || ((p = l[h] = []).delegateCount = 0,
                                u.setup && !1 !== u.setup.call(e, i, f, o) || e.addEventListener && e.addEventListener(h, o)),
                                u.add && (u.add.call(e, d),
                                d.handler.guid || (d.handler.guid = n.guid)),
                                s ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                                S.event.global[h] = !0)
                    },
                    remove: function(e, t, n, i, s) {
                        var r, o, a, l, c, d, u, p, h, f, m, g = Z.hasData(e) && Z.get(e);
                        if (g && (l = g.events)) {
                            for (c = (t = (t || "").match(z) || [""]).length; c--; )
                                if (h = m = (a = Se.exec(t[c]) || [])[1],
                                f = (a[2] || "").split(".").sort(),
                                h) {
                                    for (u = S.event.special[h] || {},
                                    p = l[h = (i ? u.delegateType : u.bindType) || h] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    o = r = p.length; r--; )
                                        d = p[r],
                                        !s && m !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1),
                                        d.selector && p.delegateCount--,
                                        u.remove && u.remove.call(e, d));
                                    o && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || S.removeEvent(e, h, g.handle),
                                    delete l[h])
                                } else
                                    for (h in l)
                                        S.event.remove(e, h + t[c], n, i, !0);
                            S.isEmptyObject(l) && Z.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, i, s, r, o, a = new Array(arguments.length), l = S.event.fix(e), c = (Z.get(this, "events") || Object.create(null))[l.type] || [], d = S.event.special[l.type] || {};
                        for (a[0] = l,
                        t = 1; t < arguments.length; t++)
                            a[t] = arguments[t];
                        if (l.delegateTarget = this,
                        !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                            for (o = S.event.handlers.call(this, l, c),
                            t = 0; (s = o[t++]) && !l.isPropagationStopped(); )
                                for (l.currentTarget = s.elem,
                                n = 0; (r = s.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                    l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                                    l.data = r.data,
                                    void 0 !== (i = ((S.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a)) && !1 === (l.result = i) && (l.preventDefault(),
                                    l.stopPropagation()));
                            return d.postDispatch && d.postDispatch.call(this, l),
                            l.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, i, s, r, o, a = [], l = t.delegateCount, c = e.target;
                        if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                            for (; c !== this; c = c.parentNode || this)
                                if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                    for (r = [],
                                    o = {},
                                    n = 0; n < l; n++)
                                        void 0 === o[s = (i = t[n]).selector + " "] && (o[s] = i.needsContext ? S(s, this).index(c) > -1 : S.find(s, this, null, [c]).length),
                                        o[s] && r.push(i);
                                    r.length && a.push({
                                        elem: c,
                                        handlers: r
                                    })
                                }
                        return c = this,
                        l < t.length && a.push({
                            elem: c,
                            handlers: t.slice(l)
                        }),
                        a
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(S.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(t) ? function() {
                                if (this.originalEvent)
                                    return t(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[e]
                            }
                            ,
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[S.expando] ? e : new S.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && D(t, "input") && ke(t, "click", _e),
                                !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && D(t, "input") && ke(t, "click"),
                                !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return ge.test(t.type) && t.click && D(t, "input") && Z.get(t, "click") || D(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                },
                S.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                S.Event = function(e, t) {
                    if (!(this instanceof S.Event))
                        return new S.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : Ce,
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && S.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[S.expando] = !0
                }
                ,
                S.Event.prototype = {
                    constructor: S.Event,
                    isDefaultPrevented: Ce,
                    isPropagationStopped: Ce,
                    isImmediatePropagationStopped: Ce,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = _e,
                        e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = _e,
                        e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = _e,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                S.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, S.event.addProp),
                S.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    S.event.special[e] = {
                        setup: function() {
                            return ke(this, e, Ae),
                            !1
                        },
                        trigger: function() {
                            return ke(this, e),
                            !0
                        },
                        _default: function() {
                            return !0
                        },
                        delegateType: t
                    }
                }
                )),
                S.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    S.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, i = this, s = e.relatedTarget, r = e.handleObj;
                            return s && (s === i || S.contains(i, s)) || (e.type = r.origType,
                            n = r.handler.apply(this, arguments),
                            e.type = t),
                            n
                        }
                    }
                }
                )),
                S.fn.extend({
                    on: function(e, t, n, i) {
                        return $e(this, e, t, n, i)
                    },
                    one: function(e, t, n, i) {
                        return $e(this, e, t, n, i, 1)
                    },
                    off: function(e, t, n) {
                        var i, s;
                        if (e && e.preventDefault && e.handleObj)
                            return i = e.handleObj,
                            S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                            this;
                        if ("object" == typeof e) {
                            for (s in e)
                                this.off(s, t, e[s]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = Ce),
                        this.each((function() {
                            S.event.remove(this, e, n, t)
                        }
                        ))
                    }
                });
                var De = /<script|<style|<link/i
                  , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
                  , Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function Me(e, t) {
                    return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
                }
                function Ie(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
                }
                function Pe(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                    e
                }
                function Ne(e, t) {
                    var n, i, s, r, o, a;
                    if (1 === t.nodeType) {
                        if (Z.hasData(e) && (a = Z.get(e).events))
                            for (s in Z.remove(t, "handle events"),
                            a)
                                for (n = 0,
                                i = a[s].length; n < i; n++)
                                    S.event.add(t, s, a[s][n]);
                        J.hasData(e) && (r = J.access(e),
                        o = S.extend({}, r),
                        J.set(t, o))
                    }
                }
                function je(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
                function ze(e, t, n, i) {
                    t = l(t);
                    var s, r, o, a, c, d, u = 0, p = e.length, h = p - 1, f = t[0], m = v(f);
                    if (m || p > 1 && "string" == typeof f && !g.checkClone && Le.test(f))
                        return e.each((function(s) {
                            var r = e.eq(s);
                            m && (t[0] = f.call(this, s, r.html())),
                            ze(r, t, n, i)
                        }
                        ));
                    if (p && (r = (s = Te(t, e[0].ownerDocument, !1, e, i)).firstChild,
                    1 === s.childNodes.length && (s = r),
                    r || i)) {
                        for (a = (o = S.map(we(s, "script"), Ie)).length; u < p; u++)
                            c = s,
                            u !== h && (c = S.clone(c, !0, !0),
                            a && S.merge(o, we(c, "script"))),
                            n.call(e[u], c, u);
                        if (a)
                            for (d = o[o.length - 1].ownerDocument,
                            S.map(o, Pe),
                            u = 0; u < a; u++)
                                c = o[u],
                                ye.test(c.type || "") && !Z.access(c, "globalEval") && S.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && !c.noModule && S._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, d) : x(c.textContent.replace(Oe, ""), c, d))
                    }
                    return e
                }
                function He(e, t, n) {
                    for (var i, s = t ? S.filter(t, e) : e, r = 0; null != (i = s[r]); r++)
                        n || 1 !== i.nodeType || S.cleanData(we(i)),
                        i.parentNode && (n && ae(i) && xe(we(i, "script")),
                        i.parentNode.removeChild(i));
                    return e
                }
                S.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var i, s, r, o, a = e.cloneNode(!0), l = ae(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                            for (o = we(a),
                            i = 0,
                            s = (r = we(e)).length; i < s; i++)
                                je(r[i], o[i]);
                        if (t)
                            if (n)
                                for (r = r || we(e),
                                o = o || we(a),
                                i = 0,
                                s = r.length; i < s; i++)
                                    Ne(r[i], o[i]);
                            else
                                Ne(e, a);
                        return (o = we(a, "script")).length > 0 && xe(o, !l && we(e, "script")),
                        a
                    },
                    cleanData: function(e) {
                        for (var t, n, i, s = S.event.special, r = 0; void 0 !== (n = e[r]); r++)
                            if (K(n)) {
                                if (t = n[Z.expando]) {
                                    if (t.events)
                                        for (i in t.events)
                                            s[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                                    n[Z.expando] = void 0
                                }
                                n[J.expando] && (n[J.expando] = void 0)
                            }
                    }
                }),
                S.fn.extend({
                    detach: function(e) {
                        return He(this, e, !0)
                    },
                    remove: function(e) {
                        return He(this, e)
                    },
                    text: function(e) {
                        return G(this, (function(e) {
                            return void 0 === e ? S.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }
                            ))
                        }
                        ), null, e, arguments.length)
                    },
                    append: function() {
                        return ze(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
                        }
                        ))
                    },
                    prepend: function() {
                        return ze(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Me(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }
                        ))
                    },
                    before: function() {
                        return ze(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }
                        ))
                    },
                    after: function() {
                        return ze(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }
                        ))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (S.cleanData(we(e, !1)),
                            e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                        t = null == t ? e : t,
                        this.map((function() {
                            return S.clone(this, e, t)
                        }
                        ))
                    },
                    html: function(e) {
                        return G(this, (function(e) {
                            var t = this[0] || {}
                              , n = 0
                              , i = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !De.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = S.htmlPrefilter(e);
                                try {
                                    for (; n < i; n++)
                                        1 === (t = this[n] || {}).nodeType && (S.cleanData(we(t, !1)),
                                        t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }
                        ), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return ze(this, arguments, (function(t) {
                            var n = this.parentNode;
                            S.inArray(this, e) < 0 && (S.cleanData(we(this)),
                            n && n.replaceChild(t, this))
                        }
                        ), e)
                    }
                }),
                S.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    S.fn[e] = function(e) {
                        for (var n, i = [], s = S(e), r = s.length - 1, o = 0; o <= r; o++)
                            n = o === r ? this : this.clone(!0),
                            S(s[o])[t](n),
                            c.apply(i, n.get());
                        return this.pushStack(i)
                    }
                }
                ));
                var Fe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$","i")
                  , Re = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = i),
                    t.getComputedStyle(e)
                }
                  , qe = function(e, t, n) {
                    var i, s, r = {};
                    for (s in t)
                        r[s] = e.style[s],
                        e.style[s] = t[s];
                    for (s in i = n.call(e),
                    t)
                        e.style[s] = r[s];
                    return i
                }
                  , Be = new RegExp(re.join("|"),"i");
                function We(e, t, n) {
                    var i, s, r, o, a = e.style;
                    return (n = n || Re(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || ae(e) || (o = S.style(e, t)),
                    !g.pixelBoxStyles() && Fe.test(o) && Be.test(t) && (i = a.width,
                    s = a.minWidth,
                    r = a.maxWidth,
                    a.minWidth = a.maxWidth = a.width = o,
                    o = n.width,
                    a.width = i,
                    a.minWidth = s,
                    a.maxWidth = r)),
                    void 0 !== o ? o + "" : o
                }
                function Ge(e, t) {
                    return {
                        get: function() {
                            if (!e())
                                return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                !function() {
                    function e() {
                        if (d) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            oe.appendChild(c).appendChild(d);
                            var e = i.getComputedStyle(d);
                            n = "1%" !== e.top,
                            l = 12 === t(e.marginLeft),
                            d.style.right = "60%",
                            o = 36 === t(e.right),
                            s = 36 === t(e.width),
                            d.style.position = "absolute",
                            r = 12 === t(d.offsetWidth / 3),
                            oe.removeChild(c),
                            d = null
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var n, s, r, o, a, l, c = b.createElement("div"), d = b.createElement("div");
                    d.style && (d.style.backgroundClip = "content-box",
                    d.cloneNode(!0).style.backgroundClip = "",
                    g.clearCloneStyle = "content-box" === d.style.backgroundClip,
                    S.extend(g, {
                        boxSizingReliable: function() {
                            return e(),
                            s
                        },
                        pixelBoxStyles: function() {
                            return e(),
                            o
                        },
                        pixelPosition: function() {
                            return e(),
                            n
                        },
                        reliableMarginLeft: function() {
                            return e(),
                            l
                        },
                        scrollboxSize: function() {
                            return e(),
                            r
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, s;
                            return null == a && (e = b.createElement("table"),
                            t = b.createElement("tr"),
                            n = b.createElement("div"),
                            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                            t.style.cssText = "border:1px solid",
                            t.style.height = "1px",
                            n.style.height = "9px",
                            n.style.display = "block",
                            oe.appendChild(e).appendChild(t).appendChild(n),
                            s = i.getComputedStyle(t),
                            a = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === t.offsetHeight,
                            oe.removeChild(e)),
                            a
                        }
                    }))
                }();
                var Ve = ["Webkit", "Moz", "ms"]
                  , Ue = b.createElement("div").style
                  , Xe = {};
                function Ye(e) {
                    return S.cssProps[e] || Xe[e] || (e in Ue ? e : Xe[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; )
                            if ((e = Ve[n] + t)in Ue)
                                return e
                    }(e) || e)
                }
                var Ke = /^(none|table(?!-c[ea]).+)/
                  , Qe = /^--/
                  , Ze = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , Je = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function et(e, t, n) {
                    var i = se.exec(t);
                    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
                }
                function tt(e, t, n, i, s, r) {
                    var o = "width" === t ? 1 : 0
                      , a = 0
                      , l = 0;
                    if (n === (i ? "border" : "content"))
                        return 0;
                    for (; o < 4; o += 2)
                        "margin" === n && (l += S.css(e, n + re[o], !0, s)),
                        i ? ("content" === n && (l -= S.css(e, "padding" + re[o], !0, s)),
                        "margin" !== n && (l -= S.css(e, "border" + re[o] + "Width", !0, s))) : (l += S.css(e, "padding" + re[o], !0, s),
                        "padding" !== n ? l += S.css(e, "border" + re[o] + "Width", !0, s) : a += S.css(e, "border" + re[o] + "Width", !0, s));
                    return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0),
                    l
                }
                function nt(e, t, n) {
                    var i = Re(e)
                      , s = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i)
                      , r = s
                      , o = We(e, t, i)
                      , a = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Fe.test(o)) {
                        if (!n)
                            return o;
                        o = "auto"
                    }
                    return (!g.boxSizingReliable() && s || !g.reliableTrDimensions() && D(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === S.css(e, "display", !1, i)) && e.getClientRects().length && (s = "border-box" === S.css(e, "boxSizing", !1, i),
                    (r = a in e) && (o = e[a])),
                    (o = parseFloat(o) || 0) + tt(e, t, n || (s ? "border" : "content"), r, i, o) + "px"
                }
                function it(e, t, n, i, s) {
                    return new it.prototype.init(e,t,n,i,s)
                }
                S.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = We(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, i) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var s, r, o, a = Y(t), l = Qe.test(t), c = e.style;
                            if (l || (t = Ye(a)),
                            o = S.cssHooks[t] || S.cssHooks[a],
                            void 0 === n)
                                return o && "get"in o && void 0 !== (s = o.get(e, !1, i)) ? s : c[t];
                            "string" == (r = typeof n) && (s = se.exec(n)) && s[1] && (n = de(e, t, s),
                            r = "number"),
                            null != n && n == n && ("number" !== r || l || (n += s && s[3] || (S.cssNumber[a] ? "" : "px")),
                            g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                            o && "set"in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                        }
                    },
                    css: function(e, t, n, i) {
                        var s, r, o, a = Y(t);
                        return Qe.test(t) || (t = Ye(a)),
                        (o = S.cssHooks[t] || S.cssHooks[a]) && "get"in o && (s = o.get(e, !0, n)),
                        void 0 === s && (s = We(e, t, i)),
                        "normal" === s && t in Je && (s = Je[t]),
                        "" === n || n ? (r = parseFloat(s),
                        !0 === n || isFinite(r) ? r || 0 : s) : s
                    }
                }),
                S.each(["height", "width"], (function(e, t) {
                    S.cssHooks[t] = {
                        get: function(e, n, i) {
                            if (n)
                                return !Ke.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, i) : qe(e, Ze, (function() {
                                    return nt(e, t, i)
                                }
                                ))
                        },
                        set: function(e, n, i) {
                            var s, r = Re(e), o = !g.scrollboxSize() && "absolute" === r.position, a = (o || i) && "border-box" === S.css(e, "boxSizing", !1, r), l = i ? tt(e, t, i, a, r) : 0;
                            return a && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - tt(e, t, "border", !1, r) - .5)),
                            l && (s = se.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n,
                            n = S.css(e, t)),
                            et(0, n, l)
                        }
                    }
                }
                )),
                S.cssHooks.marginLeft = Ge(g.reliableMarginLeft, (function(e, t) {
                    if (t)
                        return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }
                        ))) + "px"
                }
                )),
                S.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    S.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var i = 0, s = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                                s[e + re[i] + t] = r[i] || r[i - 2] || r[0];
                            return s
                        }
                    },
                    "margin" !== e && (S.cssHooks[e + t].set = et)
                }
                )),
                S.fn.extend({
                    css: function(e, t) {
                        return G(this, (function(e, t, n) {
                            var i, s, r = {}, o = 0;
                            if (Array.isArray(t)) {
                                for (i = Re(e),
                                s = t.length; o < s; o++)
                                    r[t[o]] = S.css(e, t[o], !1, i);
                                return r
                            }
                            return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                        }
                        ), e, t, arguments.length > 1)
                    }
                }),
                S.Tween = it,
                it.prototype = {
                    constructor: it,
                    init: function(e, t, n, i, s, r) {
                        this.elem = e,
                        this.prop = n,
                        this.easing = s || S.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = i,
                        this.unit = r || (S.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = it.propHooks[this.prop];
                        return e && e.get ? e.get(this) : it.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = it.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                        this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : it.propHooks._default.set(this),
                        this
                    }
                },
                it.prototype.init.prototype = it.prototype,
                it.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                S.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                S.fx = it.prototype.init,
                S.fx.step = {};
                var st, rt, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
                function lt() {
                    rt && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(lt) : i.setTimeout(lt, S.fx.interval),
                    S.fx.tick())
                }
                function ct() {
                    return i.setTimeout((function() {
                        st = void 0
                    }
                    )),
                    st = Date.now()
                }
                function dt(e, t) {
                    var n, i = 0, s = {
                        height: e
                    };
                    for (t = t ? 1 : 0; i < 4; i += 2 - t)
                        s["margin" + (n = re[i])] = s["padding" + n] = e;
                    return t && (s.opacity = s.width = e),
                    s
                }
                function ut(e, t, n) {
                    for (var i, s = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), r = 0, o = s.length; r < o; r++)
                        if (i = s[r].call(n, t, e))
                            return i
                }
                function pt(e, t, n) {
                    var i, s, r = 0, o = pt.prefilters.length, a = S.Deferred().always((function() {
                        delete l.elem
                    }
                    )), l = function() {
                        if (s)
                            return !1;
                        for (var t = st || ct(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++)
                            c.tweens[r].run(i);
                        return a.notifyWith(e, [c, i, n]),
                        i < 1 && o ? n : (o || a.notifyWith(e, [c, 1, 0]),
                        a.resolveWith(e, [c]),
                        !1)
                    }, c = a.promise({
                        elem: e,
                        props: S.extend({}, t),
                        opts: S.extend(!0, {
                            specialEasing: {},
                            easing: S.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: st || ct(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = S.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i),
                            i
                        },
                        stop: function(t) {
                            var n = 0
                              , i = t ? c.tweens.length : 0;
                            if (s)
                                return this;
                            for (s = !0; n < i; n++)
                                c.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [c, 1, 0]),
                            a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                            this
                        }
                    }), d = c.props;
                    for (function(e, t) {
                        var n, i, s, r, o;
                        for (n in e)
                            if (s = t[i = Y(n)],
                            r = e[n],
                            Array.isArray(r) && (s = r[1],
                            r = e[n] = r[0]),
                            n !== i && (e[i] = r,
                            delete e[n]),
                            (o = S.cssHooks[i]) && "expand"in o)
                                for (n in r = o.expand(r),
                                delete e[i],
                                r)
                                    n in e || (e[n] = r[n],
                                    t[n] = s);
                            else
                                t[i] = s
                    }(d, c.opts.specialEasing); r < o; r++)
                        if (i = pt.prefilters[r].call(c, e, d, c.opts))
                            return v(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                            i;
                    return S.map(d, ut, c),
                    v(c.opts.start) && c.opts.start.call(e, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    S.fx.timer(S.extend(l, {
                        elem: e,
                        anim: c,
                        queue: c.opts.queue
                    })),
                    c
                }
                S.Animation = S.extend(pt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return de(n.elem, e, se.exec(t), n),
                            n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        v(e) ? (t = e,
                        e = ["*"]) : e = e.match(z);
                        for (var n, i = 0, s = e.length; i < s; i++)
                            n = e[i],
                            pt.tweeners[n] = pt.tweeners[n] || [],
                            pt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var i, s, r, o, a, l, c, d, u = "width"in t || "height"in t, p = this, h = {}, f = e.style, m = e.nodeType && ce(e), g = Z.get(e, "fxshow");
                        for (i in n.queue || (null == (o = S._queueHooks(e, "fx")).unqueued && (o.unqueued = 0,
                        a = o.empty.fire,
                        o.empty.fire = function() {
                            o.unqueued || a()
                        }
                        ),
                        o.unqueued++,
                        p.always((function() {
                            p.always((function() {
                                o.unqueued--,
                                S.queue(e, "fx").length || o.empty.fire()
                            }
                            ))
                        }
                        ))),
                        t)
                            if (s = t[i],
                            ot.test(s)) {
                                if (delete t[i],
                                r = r || "toggle" === s,
                                s === (m ? "hide" : "show")) {
                                    if ("show" !== s || !g || void 0 === g[i])
                                        continue;
                                    m = !0
                                }
                                h[i] = g && g[i] || S.style(e, i)
                            }
                        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                            for (i in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                            null == (c = g && g.display) && (c = Z.get(e, "display")),
                            "none" === (d = S.css(e, "display")) && (c ? d = c : (he([e], !0),
                            c = e.style.display || c,
                            d = S.css(e, "display"),
                            he([e]))),
                            ("inline" === d || "inline-block" === d && null != c) && "none" === S.css(e, "float") && (l || (p.done((function() {
                                f.display = c
                            }
                            )),
                            null == c && (d = f.display,
                            c = "none" === d ? "" : d)),
                            f.display = "inline-block")),
                            n.overflow && (f.overflow = "hidden",
                            p.always((function() {
                                f.overflow = n.overflow[0],
                                f.overflowX = n.overflow[1],
                                f.overflowY = n.overflow[2]
                            }
                            ))),
                            l = !1,
                            h)
                                l || (g ? "hidden"in g && (m = g.hidden) : g = Z.access(e, "fxshow", {
                                    display: c
                                }),
                                r && (g.hidden = !m),
                                m && he([e], !0),
                                p.done((function() {
                                    for (i in m || he([e]),
                                    Z.remove(e, "fxshow"),
                                    h)
                                        S.style(e, i, h[i])
                                }
                                ))),
                                l = ut(m ? g[i] : 0, i, p),
                                i in g || (g[i] = l.start,
                                m && (l.end = l.start,
                                l.start = 0))
                    }
                    ],
                    prefilter: function(e, t) {
                        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                    }
                }),
                S.speed = function(e, t, n) {
                    var i = e && "object" == typeof e ? S.extend({}, e) : {
                        complete: n || !n && t || v(e) && e,
                        duration: e,
                        easing: n && t || t && !v(t) && t
                    };
                    return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default),
                    null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                    i.old = i.complete,
                    i.complete = function() {
                        v(i.old) && i.old.call(this),
                        i.queue && S.dequeue(this, i.queue)
                    }
                    ,
                    i
                }
                ,
                S.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(ce).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function(e, t, n, i) {
                        var s = S.isEmptyObject(e)
                          , r = S.speed(t, n, i)
                          , o = function() {
                            var t = pt(this, S.extend({}, e), r);
                            (s || Z.get(this, "finish")) && t.stop(!0)
                        };
                        return o.finish = o,
                        s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
                    },
                    stop: function(e, t, n) {
                        var i = function(e) {
                            var t = e.stop;
                            delete e.stop,
                            t(n)
                        };
                        return "string" != typeof e && (n = t,
                        t = e,
                        e = void 0),
                        t && this.queue(e || "fx", []),
                        this.each((function() {
                            var t = !0
                              , s = null != e && e + "queueHooks"
                              , r = S.timers
                              , o = Z.get(this);
                            if (s)
                                o[s] && o[s].stop && i(o[s]);
                            else
                                for (s in o)
                                    o[s] && o[s].stop && at.test(s) && i(o[s]);
                            for (s = r.length; s--; )
                                r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(n),
                                t = !1,
                                r.splice(s, 1));
                            !t && n || S.dequeue(this, e)
                        }
                        ))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"),
                        this.each((function() {
                            var t, n = Z.get(this), i = n[e + "queue"], s = n[e + "queueHooks"], r = S.timers, o = i ? i.length : 0;
                            for (n.finish = !0,
                            S.queue(this, e, []),
                            s && s.stop && s.stop.call(this, !0),
                            t = r.length; t--; )
                                r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                                r.splice(t, 1));
                            for (t = 0; t < o; t++)
                                i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        }
                        ))
                    }
                }),
                S.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = S.fn[t];
                    S.fn[t] = function(e, i, s) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, s)
                    }
                }
                )),
                S.each({
                    slideDown: dt("show"),
                    slideUp: dt("hide"),
                    slideToggle: dt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    S.fn[e] = function(e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                }
                )),
                S.timers = [],
                S.fx.tick = function() {
                    var e, t = 0, n = S.timers;
                    for (st = Date.now(); t < n.length; t++)
                        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || S.fx.stop(),
                    st = void 0
                }
                ,
                S.fx.timer = function(e) {
                    S.timers.push(e),
                    S.fx.start()
                }
                ,
                S.fx.interval = 13,
                S.fx.start = function() {
                    rt || (rt = !0,
                    lt())
                }
                ,
                S.fx.stop = function() {
                    rt = null
                }
                ,
                S.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                S.fn.delay = function(e, t) {
                    return e = S.fx && S.fx.speeds[e] || e,
                    t = t || "fx",
                    this.queue(t, (function(t, n) {
                        var s = i.setTimeout(t, e);
                        n.stop = function() {
                            i.clearTimeout(s)
                        }
                    }
                    ))
                }
                ,
                function() {
                    var e = b.createElement("input")
                      , t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox",
                    g.checkOn = "" !== e.value,
                    g.optSelected = t.selected,
                    (e = b.createElement("input")).value = "t",
                    e.type = "radio",
                    g.radioValue = "t" === e.value
                }();
                var ht, ft = S.expr.attrHandle;
                S.fn.extend({
                    attr: function(e, t) {
                        return G(this, S.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            S.removeAttr(this, e)
                        }
                        ))
                    }
                }),
                S.extend({
                    attr: function(e, t, n) {
                        var i, s, r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === r && S.isXMLDoc(e) || (s = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ht : void 0)),
                            void 0 !== n ? null === n ? void S.removeAttr(e, t) : s && "set"in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                            n) : s && "get"in s && null !== (i = s.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && D(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, i = 0, s = t && t.match(z);
                        if (s && 1 === e.nodeType)
                            for (; n = s[i++]; )
                                e.removeAttribute(n)
                    }
                }),
                ht = {
                    set: function(e, t, n) {
                        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
                        n
                    }
                },
                S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = ft[t] || S.find.attr;
                    ft[t] = function(e, t, i) {
                        var s, r, o = t.toLowerCase();
                        return i || (r = ft[o],
                        ft[o] = s,
                        s = null != n(e, t, i) ? o : null,
                        ft[o] = r),
                        s
                    }
                }
                ));
                var mt = /^(?:input|select|textarea|button)$/i
                  , gt = /^(?:a|area)$/i;
                function vt(e) {
                    return (e.match(z) || []).join(" ")
                }
                function yt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function bt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || []
                }
                S.fn.extend({
                    prop: function(e, t) {
                        return G(this, S.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[S.propFix[e] || e]
                        }
                        ))
                    }
                }),
                S.extend({
                    prop: function(e, t, n) {
                        var i, s, r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                            s = S.propHooks[t]),
                            void 0 !== n ? s && "set"in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get"in s && null !== (i = s.get(e, t)) ? i : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = S.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : mt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                g.optSelected || (S.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                        null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    S.propFix[this.toLowerCase()] = this
                }
                )),
                S.fn.extend({
                    addClass: function(e) {
                        var t, n, i, s, r, o, a, l = 0;
                        if (v(e))
                            return this.each((function(t) {
                                S(this).addClass(e.call(this, t, yt(this)))
                            }
                            ));
                        if ((t = bt(e)).length)
                            for (; n = this[l++]; )
                                if (s = yt(n),
                                i = 1 === n.nodeType && " " + vt(s) + " ") {
                                    for (o = 0; r = t[o++]; )
                                        i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                    s !== (a = vt(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, i, s, r, o, a, l = 0;
                        if (v(e))
                            return this.each((function(t) {
                                S(this).removeClass(e.call(this, t, yt(this)))
                            }
                            ));
                        if (!arguments.length)
                            return this.attr("class", "");
                        if ((t = bt(e)).length)
                            for (; n = this[l++]; )
                                if (s = yt(n),
                                i = 1 === n.nodeType && " " + vt(s) + " ") {
                                    for (o = 0; r = t[o++]; )
                                        for (; i.indexOf(" " + r + " ") > -1; )
                                            i = i.replace(" " + r + " ", " ");
                                    s !== (a = vt(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e
                          , i = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                            S(this).toggleClass(e.call(this, n, yt(this), t), t)
                        }
                        )) : this.each((function() {
                            var t, s, r, o;
                            if (i)
                                for (s = 0,
                                r = S(this),
                                o = bt(e); t = o[s++]; )
                                    r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                            else
                                void 0 !== e && "boolean" !== n || ((t = yt(this)) && Z.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                        }
                        ))
                    },
                    hasClass: function(e) {
                        var t, n, i = 0;
                        for (t = " " + e + " "; n = this[i++]; )
                            if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                });
                var wt = /\r/g;
                S.fn.extend({
                    val: function(e) {
                        var t, n, i, s = this[0];
                        return arguments.length ? (i = v(e),
                        this.each((function(n) {
                            var s;
                            1 === this.nodeType && (null == (s = i ? e.call(this, n, S(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = S.map(s, (function(e) {
                                return null == e ? "" : e + ""
                            }
                            ))),
                            (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                        }
                        ))) : s ? (t = S.valHooks[s.type] || S.valHooks[s.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(s, "value")) ? n : "string" == typeof (n = s.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                    }
                }),
                S.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = S.find.attr(e, "value");
                                return null != t ? t : vt(S.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, i, s = e.options, r = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], l = o ? r + 1 : s.length;
                                for (i = r < 0 ? l : o ? r : 0; i < l; i++)
                                    if (((n = s[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                        if (t = S(n).val(),
                                        o)
                                            return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function(e, t) {
                                for (var n, i, s = e.options, r = S.makeArray(t), o = s.length; o--; )
                                    ((i = s[o]).selected = S.inArray(S.valHooks.option.get(i), r) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                r
                            }
                        }
                    }
                }),
                S.each(["radio", "checkbox"], (function() {
                    S.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t))
                                return e.checked = S.inArray(S(e).val(), t) > -1
                        }
                    },
                    g.checkOn || (S.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                    )
                }
                )),
                g.focusin = "onfocusin"in i;
                var xt = /^(?:focusinfocus|focusoutblur)$/
                  , Et = function(e) {
                    e.stopPropagation()
                };
                S.extend(S.event, {
                    trigger: function(e, t, n, s) {
                        var r, o, a, l, c, d, u, p, f = [n || b], m = h.call(e, "type") ? e.type : e, g = h.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (o = p = a = n = n || b,
                        3 !== n.nodeType && 8 !== n.nodeType && !xt.test(m + S.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."),
                        m = g.shift(),
                        g.sort()),
                        c = m.indexOf(":") < 0 && "on" + m,
                        (e = e[S.expando] ? e : new S.Event(m,"object" == typeof e && e)).isTrigger = s ? 2 : 3,
                        e.namespace = g.join("."),
                        e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                        e.target || (e.target = n),
                        t = null == t ? [e] : S.makeArray(t, [e]),
                        u = S.event.special[m] || {},
                        s || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                            if (!s && !u.noBubble && !y(n)) {
                                for (l = u.delegateType || m,
                                xt.test(l + m) || (o = o.parentNode); o; o = o.parentNode)
                                    f.push(o),
                                    a = o;
                                a === (n.ownerDocument || b) && f.push(a.defaultView || a.parentWindow || i)
                            }
                            for (r = 0; (o = f[r++]) && !e.isPropagationStopped(); )
                                p = o,
                                e.type = r > 1 ? l : u.bindType || m,
                                (d = (Z.get(o, "events") || Object.create(null))[e.type] && Z.get(o, "handle")) && d.apply(o, t),
                                (d = c && o[c]) && d.apply && K(o) && (e.result = d.apply(o, t),
                                !1 === e.result && e.preventDefault());
                            return e.type = m,
                            s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !K(n) || c && v(n[m]) && !y(n) && ((a = n[c]) && (n[c] = null),
                            S.event.triggered = m,
                            e.isPropagationStopped() && p.addEventListener(m, Et),
                            n[m](),
                            e.isPropagationStopped() && p.removeEventListener(m, Et),
                            S.event.triggered = void 0,
                            a && (n[c] = a)),
                            e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var i = S.extend(new S.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        S.event.trigger(i, null, t)
                    }
                }),
                S.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            S.event.trigger(e, t, this)
                        }
                        ))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return S.event.trigger(e, t, n, !0)
                    }
                }),
                g.focusin || S.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    var n = function(e) {
                        S.event.simulate(t, e.target, S.event.fix(e))
                    };
                    S.event.special[t] = {
                        setup: function() {
                            var i = this.ownerDocument || this.document || this
                              , s = Z.access(i, t);
                            s || i.addEventListener(e, n, !0),
                            Z.access(i, t, (s || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this.document || this
                              , s = Z.access(i, t) - 1;
                            s ? Z.access(i, t, s) : (i.removeEventListener(e, n, !0),
                            Z.remove(i, t))
                        }
                    }
                }
                ));
                var Tt = i.location
                  , St = {
                    guid: Date.now()
                }
                  , _t = /\?/;
                S.parseXML = function(e) {
                    var t, n;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        t = (new i.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {}
                    return n = t && t.getElementsByTagName("parsererror")[0],
                    t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, (function(e) {
                        return e.textContent
                    }
                    )).join("\n") : e)),
                    t
                }
                ;
                var Ct = /\[\]$/
                  , At = /\r?\n/g
                  , $t = /^(?:submit|button|image|reset|file)$/i
                  , kt = /^(?:input|select|textarea|keygen)/i;
                function Dt(e, t, n, i) {
                    var s;
                    if (Array.isArray(t))
                        S.each(t, (function(t, s) {
                            n || Ct.test(e) ? i(e, s) : Dt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, n, i)
                        }
                        ));
                    else if (n || "object" !== E(t))
                        i(e, t);
                    else
                        for (s in t)
                            Dt(e + "[" + s + "]", t[s], n, i)
                }
                S.param = function(e, t) {
                    var n, i = [], s = function(e, t) {
                        var n = v(t) ? t() : t;
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == e)
                        return "";
                    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
                        S.each(e, (function() {
                            s(this.name, this.value)
                        }
                        ));
                    else
                        for (n in e)
                            Dt(n, e[n], t, s);
                    return i.join("&")
                }
                ,
                S.fn.extend({
                    serialize: function() {
                        return S.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = S.prop(this, "elements");
                            return e ? S.makeArray(e) : this
                        }
                        )).filter((function() {
                            var e = this.type;
                            return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !$t.test(e) && (this.checked || !ge.test(e))
                        }
                        )).map((function(e, t) {
                            var n = S(this).val();
                            return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(At, "\r\n")
                                }
                            }
                            )) : {
                                name: t.name,
                                value: n.replace(At, "\r\n")
                            }
                        }
                        )).get()
                    }
                });
                var Lt = /%20/g
                  , Ot = /#.*$/
                  , Mt = /([?&])_=[^&]*/
                  , It = /^(.*?):[ \t]*([^\r\n]*)$/gm
                  , Pt = /^(?:GET|HEAD)$/
                  , Nt = /^\/\//
                  , jt = {}
                  , zt = {}
                  , Ht = "*/".concat("*")
                  , Ft = b.createElement("a");
                function Rt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t,
                        t = "*");
                        var i, s = 0, r = t.toLowerCase().match(z) || [];
                        if (v(n))
                            for (; i = r[s++]; )
                                "+" === i[0] ? (i = i.slice(1) || "*",
                                (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                    }
                }
                function qt(e, t, n, i) {
                    var s = {}
                      , r = e === zt;
                    function o(a) {
                        var l;
                        return s[a] = !0,
                        S.each(e[a] || [], (function(e, a) {
                            var c = a(t, n, i);
                            return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                            o(c),
                            !1)
                        }
                        )),
                        l
                    }
                    return o(t.dataTypes[0]) || !s["*"] && o("*")
                }
                function Bt(e, t) {
                    var n, i, s = S.ajaxSettings.flatOptions || {};
                    for (n in t)
                        void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
                    return i && S.extend(!0, e, i),
                    e
                }
                Ft.href = Tt.href,
                S.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Tt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Ht,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": S.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e)
                    },
                    ajaxPrefilter: Rt(jt),
                    ajaxTransport: Rt(zt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e,
                        e = void 0),
                        t = t || {};
                        var n, s, r, o, a, l, c, d, u, p, h = S.ajaxSetup({}, t), f = h.context || h, m = h.context && (f.nodeType || f.jquery) ? S(f) : S.event, g = S.Deferred(), v = S.Callbacks("once memory"), y = h.statusCode || {}, w = {}, x = {}, E = "canceled", T = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!o)
                                        for (o = {}; t = It.exec(r); )
                                            o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = o[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? r : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                                w[e] = t),
                                this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (h.mimeType = e),
                                this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c)
                                        T.always(e[T.status]);
                                    else
                                        for (t in e)
                                            y[t] = [y[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || E;
                                return n && n.abort(t),
                                _(0, t),
                                this
                            }
                        };
                        if (g.promise(T),
                        h.url = ((e || h.url || Tt.href) + "").replace(Nt, Tt.protocol + "//"),
                        h.type = t.method || t.type || h.method || h.type,
                        h.dataTypes = (h.dataType || "*").toLowerCase().match(z) || [""],
                        null == h.crossDomain) {
                            l = b.createElement("a");
                            try {
                                l.href = h.url,
                                l.href = l.href,
                                h.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                            } catch (e) {
                                h.crossDomain = !0
                            }
                        }
                        if (h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)),
                        qt(jt, h, t, T),
                        c)
                            return T;
                        for (u in (d = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                        h.type = h.type.toUpperCase(),
                        h.hasContent = !Pt.test(h.type),
                        s = h.url.replace(Ot, ""),
                        h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(s.length),
                        h.data && (h.processData || "string" == typeof h.data) && (s += (_t.test(s) ? "&" : "?") + h.data,
                        delete h.data),
                        !1 === h.cache && (s = s.replace(Mt, "$1"),
                        p = (_t.test(s) ? "&" : "?") + "_=" + St.guid++ + p),
                        h.url = s + p),
                        h.ifModified && (S.lastModified[s] && T.setRequestHeader("If-Modified-Since", S.lastModified[s]),
                        S.etag[s] && T.setRequestHeader("If-None-Match", S.etag[s])),
                        (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType),
                        T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]),
                        h.headers)
                            T.setRequestHeader(u, h.headers[u]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(f, T, h) || c))
                            return T.abort();
                        if (E = "abort",
                        v.add(h.complete),
                        T.done(h.success),
                        T.fail(h.error),
                        n = qt(zt, h, t, T)) {
                            if (T.readyState = 1,
                            d && m.trigger("ajaxSend", [T, h]),
                            c)
                                return T;
                            h.async && h.timeout > 0 && (a = i.setTimeout((function() {
                                T.abort("timeout")
                            }
                            ), h.timeout));
                            try {
                                c = !1,
                                n.send(w, _)
                            } catch (e) {
                                if (c)
                                    throw e;
                                _(-1, e)
                            }
                        } else
                            _(-1, "No Transport");
                        function _(e, t, o, l) {
                            var u, p, b, w, x, E = t;
                            c || (c = !0,
                            a && i.clearTimeout(a),
                            n = void 0,
                            r = l || "",
                            T.readyState = e > 0 ? 4 : 0,
                            u = e >= 200 && e < 300 || 304 === e,
                            o && (w = function(e, t, n) {
                                for (var i, s, r, o, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                                    l.shift(),
                                    void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (s in a)
                                        if (a[s] && a[s].test(i)) {
                                            l.unshift(s);
                                            break
                                        }
                                if (l[0]in n)
                                    r = l[0];
                                else {
                                    for (s in n) {
                                        if (!l[0] || e.converters[s + " " + l[0]]) {
                                            r = s;
                                            break
                                        }
                                        o || (o = s)
                                    }
                                    r = r || o
                                }
                                if (r)
                                    return r !== l[0] && l.unshift(r),
                                    n[r]
                            }(h, T, o)),
                            !u && S.inArray("script", h.dataTypes) > -1 && S.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                            ),
                            w = function(e, t, n, i) {
                                var s, r, o, a, l, c = {}, d = e.dataTypes.slice();
                                if (d[1])
                                    for (o in e.converters)
                                        c[o.toLowerCase()] = e.converters[o];
                                for (r = d.shift(); r; )
                                    if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    l = r,
                                    r = d.shift())
                                        if ("*" === r)
                                            r = l;
                                        else if ("*" !== l && l !== r) {
                                            if (!(o = c[l + " " + r] || c["* " + r]))
                                                for (s in c)
                                                    if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                        !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0],
                                                        d.unshift(a[1]));
                                                        break
                                                    }
                                            if (!0 !== o)
                                                if (o && e.throws)
                                                    t = o(t);
                                                else
                                                    try {
                                                        t = o(t)
                                                    } catch (e) {
                                                        return {
                                                            state: "parsererror",
                                                            error: o ? e : "No conversion from " + l + " to " + r
                                                        }
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(h, w, T, u),
                            u ? (h.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (S.lastModified[s] = x),
                            (x = T.getResponseHeader("etag")) && (S.etag[s] = x)),
                            204 === e || "HEAD" === h.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state,
                            p = w.data,
                            u = !(b = w.error))) : (b = E,
                            !e && E || (E = "error",
                            e < 0 && (e = 0))),
                            T.status = e,
                            T.statusText = (t || E) + "",
                            u ? g.resolveWith(f, [p, E, T]) : g.rejectWith(f, [T, E, b]),
                            T.statusCode(y),
                            y = void 0,
                            d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? p : b]),
                            v.fireWith(f, [T, E]),
                            d && (m.trigger("ajaxComplete", [T, h]),
                            --S.active || S.event.trigger("ajaxStop")))
                        }
                        return T
                    },
                    getJSON: function(e, t, n) {
                        return S.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return S.get(e, void 0, t, "script")
                    }
                }),
                S.each(["get", "post"], (function(e, t) {
                    S[t] = function(e, n, i, s) {
                        return v(n) && (s = s || i,
                        i = n,
                        n = void 0),
                        S.ajax(S.extend({
                            url: e,
                            type: t,
                            dataType: s,
                            data: n,
                            success: i
                        }, S.isPlainObject(e) && e))
                    }
                }
                )),
                S.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers)
                        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                }
                )),
                S._evalUrl = function(e, t, n) {
                    return S.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            S.globalEval(e, t, n)
                        }
                    })
                }
                ,
                S.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (v(e) && (e = e.call(this[0])),
                        t = S(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map((function() {
                            for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                            return e
                        }
                        )).append(this)),
                        this
                    },
                    wrapInner: function(e) {
                        return v(e) ? this.each((function(t) {
                            S(this).wrapInner(e.call(this, t))
                        }
                        )) : this.each((function() {
                            var t = S(this)
                              , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }
                        ))
                    },
                    wrap: function(e) {
                        var t = v(e);
                        return this.each((function(n) {
                            S(this).wrapAll(t ? e.call(this, n) : e)
                        }
                        ))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            S(this).replaceWith(this.childNodes)
                        }
                        )),
                        this
                    }
                }),
                S.expr.pseudos.hidden = function(e) {
                    return !S.expr.pseudos.visible(e)
                }
                ,
                S.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                ,
                S.ajaxSettings.xhr = function() {
                    try {
                        return new i.XMLHttpRequest
                    } catch (e) {}
                }
                ;
                var Wt = {
                    0: 200,
                    1223: 204
                }
                  , Gt = S.ajaxSettings.xhr();
                g.cors = !!Gt && "withCredentials"in Gt,
                g.ajax = Gt = !!Gt,
                S.ajaxTransport((function(e) {
                    var t, n;
                    if (g.cors || Gt && !e.crossDomain)
                        return {
                            send: function(s, r) {
                                var o, a = e.xhr();
                                if (a.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                    for (o in e.xhrFields)
                                        a[o] = e.xhrFields[o];
                                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"),
                                s)
                                    a.setRequestHeader(o, s[o]);
                                t = function(e) {
                                    return function() {
                                        t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }
                                ,
                                a.onload = t(),
                                n = a.onerror = a.ontimeout = t("error"),
                                void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                    4 === a.readyState && i.setTimeout((function() {
                                        t && n()
                                    }
                                    ))
                                }
                                ,
                                t = t("abort");
                                try {
                                    a.send(e.hasContent && e.data || null)
                                } catch (e) {
                                    if (t)
                                        throw e
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                }
                )),
                S.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }
                )),
                S.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return S.globalEval(e),
                            e
                        }
                    }
                }),
                S.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET")
                }
                )),
                S.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function(i, s) {
                                t = S("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(),
                                    n = null,
                                    e && s("error" === e.type ? 404 : 200, e.type)
                                }
                                ),
                                b.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                }
                ));
                var Vt, Ut = [], Xt = /(=)\?(?=&|$)|\?\?/;
                S.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Ut.pop() || S.expando + "_" + St.guid++;
                        return this[e] = !0,
                        e
                    }
                }),
                S.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var s, r, o, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0])
                        return s = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        a ? e[a] = e[a].replace(Xt, "$1" + s) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                        e.converters["script json"] = function() {
                            return o || S.error(s + " was not called"),
                            o[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        r = i[s],
                        i[s] = function() {
                            o = arguments
                        }
                        ,
                        n.always((function() {
                            void 0 === r ? S(i).removeProp(s) : i[s] = r,
                            e[s] && (e.jsonpCallback = t.jsonpCallback,
                            Ut.push(s)),
                            o && v(r) && r(o[0]),
                            o = r = void 0
                        }
                        )),
                        "script"
                }
                )),
                g.createHTMLDocument = ((Vt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                2 === Vt.childNodes.length),
                S.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                    t = !1),
                    t || (g.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                    t.head.appendChild(i)) : t = b),
                    r = !n && [],
                    (s = L.exec(e)) ? [t.createElement(s[1])] : (s = Te([e], t, r),
                    r && r.length && S(r).remove(),
                    S.merge([], s.childNodes)));
                    var i, s, r
                }
                ,
                S.fn.load = function(e, t, n) {
                    var i, s, r, o = this, a = e.indexOf(" ");
                    return a > -1 && (i = vt(e.slice(a)),
                    e = e.slice(0, a)),
                    v(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (s = "POST"),
                    o.length > 0 && S.ajax({
                        url: e,
                        type: s || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        r = arguments,
                        o.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
                    }
                    )).always(n && function(e, t) {
                        o.each((function() {
                            n.apply(this, r || [e.responseText, t, e])
                        }
                        ))
                    }
                    ),
                    this
                }
                ,
                S.expr.pseudos.animated = function(e) {
                    return S.grep(S.timers, (function(t) {
                        return e === t.elem
                    }
                    )).length
                }
                ,
                S.offset = {
                    setOffset: function(e, t, n) {
                        var i, s, r, o, a, l, c = S.css(e, "position"), d = S(e), u = {};
                        "static" === c && (e.style.position = "relative"),
                        a = d.offset(),
                        r = S.css(e, "top"),
                        l = S.css(e, "left"),
                        ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (o = (i = d.position()).top,
                        s = i.left) : (o = parseFloat(r) || 0,
                        s = parseFloat(l) || 0),
                        v(t) && (t = t.call(e, n, S.extend({}, a))),
                        null != t.top && (u.top = t.top - a.top + o),
                        null != t.left && (u.left = t.left - a.left + s),
                        "using"in t ? t.using.call(e, u) : d.css(u)
                    }
                },
                S.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each((function(t) {
                                S.offset.setOffset(this, e, t)
                            }
                            ));
                        var t, n, i = this[0];
                        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
                        n = i.ownerDocument.defaultView,
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, i = this[0], s = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === S.css(i, "position"))
                                t = i.getBoundingClientRect();
                            else {
                                for (t = this.offset(),
                                n = i.ownerDocument,
                                e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); )
                                    e = e.parentNode;
                                e && e !== i && 1 === e.nodeType && ((s = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                                s.left += S.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - s.top - S.css(i, "marginTop", !0),
                                left: t.left - s.left - S.css(i, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                                e = e.offsetParent;
                            return e || oe
                        }
                        ))
                    }
                }),
                S.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    S.fn[e] = function(i) {
                        return G(this, (function(e, i, s) {
                            var r;
                            if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                            void 0 === s)
                                return r ? r[t] : e[i];
                            r ? r.scrollTo(n ? r.pageXOffset : s, n ? s : r.pageYOffset) : e[i] = s
                        }
                        ), e, i, arguments.length)
                    }
                }
                )),
                S.each(["top", "left"], (function(e, t) {
                    S.cssHooks[t] = Ge(g.pixelPosition, (function(e, n) {
                        if (n)
                            return n = We(e, t),
                            Fe.test(n) ? S(e).position()[t] + "px" : n
                    }
                    ))
                }
                )),
                S.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    S.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, i) {
                        S.fn[i] = function(s, r) {
                            var o = arguments.length && (n || "boolean" != typeof s)
                              , a = n || (!0 === s || !0 === r ? "margin" : "border");
                            return G(this, (function(t, n, s) {
                                var r;
                                return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                                Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? S.css(t, n, a) : S.style(t, n, s, a)
                            }
                            ), t, o ? s : void 0, o)
                        }
                    }
                    ))
                }
                )),
                S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    S.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }
                )),
                S.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, i) {
                        return this.on(t, e, n, i)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    S.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }
                ));
                var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                S.proxy = function(e, t) {
                    var n, i, s;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    v(e))
                        return i = a.call(arguments, 2),
                        s = function() {
                            return e.apply(t || this, i.concat(a.call(arguments)))
                        }
                        ,
                        s.guid = e.guid = e.guid || S.guid++,
                        s
                }
                ,
                S.holdReady = function(e) {
                    e ? S.readyWait++ : S.ready(!0)
                }
                ,
                S.isArray = Array.isArray,
                S.parseJSON = JSON.parse,
                S.nodeName = D,
                S.isFunction = v,
                S.isWindow = y,
                S.camelCase = Y,
                S.type = E,
                S.now = Date.now,
                S.isNumeric = function(e) {
                    var t = S.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }
                ,
                S.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Yt, "")
                }
                ,
                void 0 === (n = function() {
                    return S
                }
                .apply(t, [])) || (e.exports = n);
                var Kt = i.jQuery
                  , Qt = i.$;
                return S.noConflict = function(e) {
                    return i.$ === S && (i.$ = Qt),
                    e && i.jQuery === S && (i.jQuery = Kt),
                    S
                }
                ,
                void 0 === s && (i.jQuery = i.$ = S),
                S
            }
            ))
        },
        981: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>re
            });
            var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
              , s = function() {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                    if (i && navigator.userAgent.indexOf(e[t]) >= 0)
                        return 1;
                return 0
            }()
              , r = i && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    window.Promise.resolve().then((function() {
                        t = !1,
                        e()
                    }
                    )))
                }
            }
            : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    setTimeout((function() {
                        t = !1,
                        e()
                    }
                    ), s))
                }
            }
            ;
            function o(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }
            function a(e, t) {
                if (1 !== e.nodeType)
                    return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }
            function l(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }
            function c(e) {
                if (!e)
                    return document.body;
                switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
                }
                var t = a(e)
                  , n = t.overflow
                  , i = t.overflowX
                  , s = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + s + i) ? e : c(l(e))
            }
            function d(e) {
                return e && e.referenceNode ? e.referenceNode : e
            }
            var u = i && !(!window.MSInputMethodContext || !document.documentMode)
              , p = i && /MSIE 10/.test(navigator.userAgent);
            function h(e) {
                return 11 === e ? u : 10 === e ? p : u || p
            }
            function f(e) {
                if (!e)
                    return document.documentElement;
                for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
                    n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? f(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }
            function m(e) {
                return null !== e.parentNode ? m(e.parentNode) : e
            }
            function g(e, t) {
                if (!(e && e.nodeType && t && t.nodeType))
                    return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
                  , i = n ? e : t
                  , s = n ? t : e
                  , r = document.createRange();
                r.setStart(i, 0),
                r.setEnd(s, 0);
                var o, a, l = r.commonAncestorContainer;
                if (e !== l && t !== l || i.contains(s))
                    return "BODY" === (a = (o = l).nodeName) || "HTML" !== a && f(o.firstElementChild) !== o ? f(l) : l;
                var c = m(e);
                return c.host ? g(c.host, t) : g(e, m(t).host)
            }
            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
                  , n = "top" === t ? "scrollTop" : "scrollLeft"
                  , i = e.nodeName;
                if ("BODY" === i || "HTML" === i) {
                    var s = e.ownerDocument.documentElement
                      , r = e.ownerDocument.scrollingElement || s;
                    return r[n]
                }
                return e[n]
            }
            function y(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , i = v(t, "top")
                  , s = v(t, "left")
                  , r = n ? -1 : 1;
                return e.top += i * r,
                e.bottom += i * r,
                e.left += s * r,
                e.right += s * r,
                e
            }
            function b(e, t) {
                var n = "x" === t ? "Left" : "Top"
                  , i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
            }
            function w(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], h(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }
            function x(e) {
                var t = e.body
                  , n = e.documentElement
                  , i = h(10) && getComputedStyle(n);
                return {
                    height: w("Height", t, n, i),
                    width: w("Width", t, n, i)
                }
            }
            var E = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
              , T = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n),
                    i && e(t, i),
                    t
                }
            }()
              , S = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
              , _ = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ;
            function C(e) {
                return _({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }
            function A(e) {
                var t = {};
                try {
                    if (h(10)) {
                        t = e.getBoundingClientRect();
                        var n = v(e, "top")
                          , i = v(e, "left");
                        t.top += n,
                        t.left += i,
                        t.bottom += n,
                        t.right += i
                    } else
                        t = e.getBoundingClientRect()
                } catch (e) {}
                var s = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }
                  , r = "HTML" === e.nodeName ? x(e.ownerDocument) : {}
                  , o = r.width || e.clientWidth || s.width
                  , l = r.height || e.clientHeight || s.height
                  , c = e.offsetWidth - o
                  , d = e.offsetHeight - l;
                if (c || d) {
                    var u = a(e);
                    c -= b(u, "x"),
                    d -= b(u, "y"),
                    s.width -= c,
                    s.height -= d
                }
                return C(s)
            }
            function $(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , i = h(10)
                  , s = "HTML" === t.nodeName
                  , r = A(e)
                  , o = A(t)
                  , l = c(e)
                  , d = a(t)
                  , u = parseFloat(d.borderTopWidth)
                  , p = parseFloat(d.borderLeftWidth);
                n && s && (o.top = Math.max(o.top, 0),
                o.left = Math.max(o.left, 0));
                var f = C({
                    top: r.top - o.top - u,
                    left: r.left - o.left - p,
                    width: r.width,
                    height: r.height
                });
                if (f.marginTop = 0,
                f.marginLeft = 0,
                !i && s) {
                    var m = parseFloat(d.marginTop)
                      , g = parseFloat(d.marginLeft);
                    f.top -= u - m,
                    f.bottom -= u - m,
                    f.left -= p - g,
                    f.right -= p - g,
                    f.marginTop = m,
                    f.marginLeft = g
                }
                return (i && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = y(f, t)),
                f
            }
            function k(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = e.ownerDocument.documentElement
                  , i = $(e, n)
                  , s = Math.max(n.clientWidth, window.innerWidth || 0)
                  , r = Math.max(n.clientHeight, window.innerHeight || 0)
                  , o = t ? 0 : v(n)
                  , a = t ? 0 : v(n, "left")
                  , l = {
                    top: o - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: s,
                    height: r
                };
                return C(l)
            }
            function D(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t)
                    return !1;
                if ("fixed" === a(e, "position"))
                    return !0;
                var n = l(e);
                return !!n && D(n)
            }
            function L(e) {
                if (!e || !e.parentElement || h())
                    return document.documentElement;
                for (var t = e.parentElement; t && "none" === a(t, "transform"); )
                    t = t.parentElement;
                return t || document.documentElement
            }
            function O(e, t, n, i) {
                var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  , r = {
                    top: 0,
                    left: 0
                }
                  , o = s ? L(e) : g(e, d(t));
                if ("viewport" === i)
                    r = k(o, s);
                else {
                    var a = void 0;
                    "scrollParent" === i ? "BODY" === (a = c(l(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                    var u = $(a, o, s);
                    if ("HTML" !== a.nodeName || D(o))
                        r = u;
                    else {
                        var p = x(e.ownerDocument)
                          , h = p.height
                          , f = p.width;
                        r.top += u.top - u.marginTop,
                        r.bottom = h + u.top,
                        r.left += u.left - u.marginLeft,
                        r.right = f + u.left
                    }
                }
                var m = "number" == typeof (n = n || 0);
                return r.left += m ? n : n.left || 0,
                r.top += m ? n : n.top || 0,
                r.right -= m ? n : n.right || 0,
                r.bottom -= m ? n : n.bottom || 0,
                r
            }
            function M(e) {
                return e.width * e.height
            }
            function I(e, t, n, i, s) {
                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto"))
                    return e;
                var o = O(n, i, r, s)
                  , a = {
                    top: {
                        width: o.width,
                        height: t.top - o.top
                    },
                    right: {
                        width: o.right - t.right,
                        height: o.height
                    },
                    bottom: {
                        width: o.width,
                        height: o.bottom - t.bottom
                    },
                    left: {
                        width: t.left - o.left,
                        height: o.height
                    }
                }
                  , l = Object.keys(a).map((function(e) {
                    return _({
                        key: e
                    }, a[e], {
                        area: M(a[e])
                    })
                }
                )).sort((function(e, t) {
                    return t.area - e.area
                }
                ))
                  , c = l.filter((function(e) {
                    var t = e.width
                      , i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight
                }
                ))
                  , d = c.length > 0 ? c[0].key : l[0].key
                  , u = e.split("-")[1];
                return d + (u ? "-" + u : "")
            }
            function P(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , s = i ? L(t) : g(t, d(n));
                return $(n, s, i)
            }
            function N(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e)
                  , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
                  , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + i,
                    height: e.offsetHeight + n
                }
            }
            function j(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return t[e]
                }
                ))
            }
            function z(e, t, n) {
                n = n.split("-")[0];
                var i = N(e)
                  , s = {
                    width: i.width,
                    height: i.height
                }
                  , r = -1 !== ["right", "left"].indexOf(n)
                  , o = r ? "top" : "left"
                  , a = r ? "left" : "top"
                  , l = r ? "height" : "width"
                  , c = r ? "width" : "height";
                return s[o] = t[o] + t[l] / 2 - i[l] / 2,
                s[a] = n === a ? t[a] - i[c] : t[j(a)],
                s
            }
            function H(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }
            function F(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex)
                        return e.findIndex((function(e) {
                            return e.name === n
                        }
                        ));
                    var i = H(e, (function(e) {
                        return e.name === n
                    }
                    ));
                    return e.indexOf(i)
                }(e, 0, n))).forEach((function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && o(n) && (t.offsets.popper = C(t.offsets.popper),
                    t.offsets.reference = C(t.offsets.reference),
                    t = n(t, e))
                }
                )),
                t
            }
            function R() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = P(this.state, this.popper, this.reference, this.options.positionFixed),
                    e.placement = I(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                    e.originalPlacement = e.placement,
                    e.positionFixed = this.options.positionFixed,
                    e.offsets.popper = z(this.popper, e.offsets.reference, e.placement),
                    e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                    e = F(this.modifiers, e),
                    this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e))
                }
            }
            function q(e, t) {
                return e.some((function(e) {
                    var n = e.name;
                    return e.enabled && n === t
                }
                ))
            }
            function B(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var s = t[i]
                      , r = s ? "" + s + n : e;
                    if (void 0 !== document.body.style[r])
                        return r
                }
                return null
            }
            function W() {
                return this.state.isDestroyed = !0,
                q(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[B("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
            function G(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }
            function V(e, t, n, i) {
                var s = "BODY" === e.nodeName
                  , r = s ? e.ownerDocument.defaultView : e;
                r.addEventListener(t, n, {
                    passive: !0
                }),
                s || V(c(r.parentNode), t, n, i),
                i.push(r)
            }
            function U(e, t, n, i) {
                n.updateBound = i,
                G(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var s = c(e);
                return V(s, "scroll", n.updateBound, n.scrollParents),
                n.scrollElement = s,
                n.eventsEnabled = !0,
                n
            }
            function X() {
                this.state.eventsEnabled || (this.state = U(this.reference, this.options, this.state, this.scheduleUpdate))
            }
            function Y() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
                this.state = (e = this.reference,
                t = this.state,
                G(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach((function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }
                )),
                t.updateBound = null,
                t.scrollParents = [],
                t.scrollElement = null,
                t.eventsEnabled = !1,
                t))
            }
            function K(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }
            function Q(e, t) {
                Object.keys(t).forEach((function(n) {
                    var i = "";
                    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(t[n]) && (i = "px"),
                    e.style[n] = t[n] + i
                }
                ))
            }
            var Z = i && /Firefox/i.test(navigator.userAgent);
            function J(e, t, n) {
                var i = H(e, (function(e) {
                    return e.name === t
                }
                ))
                  , s = !!i && e.some((function(e) {
                    return e.name === n && e.enabled && e.order < i.order
                }
                ));
                if (!s) {
                    var r = "`" + t + "`"
                      , o = "`" + n + "`";
                    console.warn(o + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
                }
                return s
            }
            var ee = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
              , te = ee.slice(3);
            function ne(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = te.indexOf(e)
                  , i = te.slice(n + 1).concat(te.slice(0, n));
                return t ? i.reverse() : i
            }
            var ie = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.placement
                              , n = t.split("-")[0]
                              , i = t.split("-")[1];
                            if (i) {
                                var s = e.offsets
                                  , r = s.reference
                                  , o = s.popper
                                  , a = -1 !== ["bottom", "top"].indexOf(n)
                                  , l = a ? "left" : "top"
                                  , c = a ? "width" : "height"
                                  , d = {
                                    start: S({}, l, r[l]),
                                    end: S({}, l, r[l] + r[c] - o[c])
                                };
                                e.offsets.popper = _({}, o, d[i])
                            }
                            return e
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function(e, t) {
                            var n, i = t.offset, s = e.placement, r = e.offsets, o = r.popper, a = r.reference, l = s.split("-")[0];
                            return n = K(+i) ? [+i, 0] : function(e, t, n, i) {
                                var s = [0, 0]
                                  , r = -1 !== ["right", "left"].indexOf(i)
                                  , o = e.split(/(\+|\-)/).map((function(e) {
                                    return e.trim()
                                }
                                ))
                                  , a = o.indexOf(H(o, (function(e) {
                                    return -1 !== e.search(/,|\s/)
                                }
                                )));
                                o[a] && -1 === o[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                                var l = /\s*,\s*|\s+/
                                  , c = -1 !== a ? [o.slice(0, a).concat([o[a].split(l)[0]]), [o[a].split(l)[1]].concat(o.slice(a + 1))] : [o];
                                return c = c.map((function(e, i) {
                                    var s = (1 === i ? !r : r) ? "height" : "width"
                                      , o = !1;
                                    return e.reduce((function(e, t) {
                                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                                        o = !0,
                                        e) : o ? (e[e.length - 1] += t,
                                        o = !1,
                                        e) : e.concat(t)
                                    }
                                    ), []).map((function(e) {
                                        return function(e, t, n, i) {
                                            var s = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                                              , r = +s[1]
                                              , o = s[2];
                                            return r ? 0 === o.indexOf("%") ? C("%p" === o ? n : i)[t] / 100 * r : "vh" === o || "vw" === o ? ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r : e
                                        }(e, s, t, n)
                                    }
                                    ))
                                }
                                )),
                                c.forEach((function(e, t) {
                                    e.forEach((function(n, i) {
                                        K(n) && (s[t] += n * ("-" === e[i - 1] ? -1 : 1))
                                    }
                                    ))
                                }
                                )),
                                s
                            }(i, o, a, l),
                            "left" === l ? (o.top += n[0],
                            o.left -= n[1]) : "right" === l ? (o.top += n[0],
                            o.left += n[1]) : "top" === l ? (o.left += n[0],
                            o.top -= n[1]) : "bottom" === l && (o.left += n[0],
                            o.top += n[1]),
                            e.popper = o,
                            e
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.boundariesElement || f(e.instance.popper);
                            e.instance.reference === n && (n = f(n));
                            var i = B("transform")
                              , s = e.instance.popper.style
                              , r = s.top
                              , o = s.left
                              , a = s[i];
                            s.top = "",
                            s.left = "",
                            s[i] = "";
                            var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            s.top = r,
                            s.left = o,
                            s[i] = a,
                            t.boundaries = l;
                            var c = t.priority
                              , d = e.offsets.popper
                              , u = {
                                primary: function(e) {
                                    var n = d[e];
                                    return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])),
                                    S({}, e, n)
                                },
                                secondary: function(e) {
                                    var n = "right" === e ? "left" : "top"
                                      , i = d[n];
                                    return d[e] > l[e] && !t.escapeWithReference && (i = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))),
                                    S({}, n, i)
                                }
                            };
                            return c.forEach((function(e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                d = _({}, d, u[t](e))
                            }
                            )),
                            e.offsets.popper = d,
                            e
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.offsets
                              , n = t.popper
                              , i = t.reference
                              , s = e.placement.split("-")[0]
                              , r = Math.floor
                              , o = -1 !== ["top", "bottom"].indexOf(s)
                              , a = o ? "right" : "bottom"
                              , l = o ? "left" : "top"
                              , c = o ? "width" : "height";
                            return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                            n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
                            e
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function(e, t) {
                            var n;
                            if (!J(e.instance.modifiers, "arrow", "keepTogether"))
                                return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i)))
                                    return e
                            } else if (!e.instance.popper.contains(i))
                                return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                                e;
                            var s = e.placement.split("-")[0]
                              , r = e.offsets
                              , o = r.popper
                              , l = r.reference
                              , c = -1 !== ["left", "right"].indexOf(s)
                              , d = c ? "height" : "width"
                              , u = c ? "Top" : "Left"
                              , p = u.toLowerCase()
                              , h = c ? "left" : "top"
                              , f = c ? "bottom" : "right"
                              , m = N(i)[d];
                            l[f] - m < o[p] && (e.offsets.popper[p] -= o[p] - (l[f] - m)),
                            l[p] + m > o[f] && (e.offsets.popper[p] += l[p] + m - o[f]),
                            e.offsets.popper = C(e.offsets.popper);
                            var g = l[p] + l[d] / 2 - m / 2
                              , v = a(e.instance.popper)
                              , y = parseFloat(v["margin" + u])
                              , b = parseFloat(v["border" + u + "Width"])
                              , w = g - e.offsets.popper[p] - y - b;
                            return w = Math.max(Math.min(o[d] - m, w), 0),
                            e.arrowElement = i,
                            e.offsets.arrow = (S(n = {}, p, Math.round(w)),
                            S(n, h, ""),
                            n),
                            e
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function(e, t) {
                            if (q(e.instance.modifiers, "inner"))
                                return e;
                            if (e.flipped && e.placement === e.originalPlacement)
                                return e;
                            var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                              , i = e.placement.split("-")[0]
                              , s = j(i)
                              , r = e.placement.split("-")[1] || ""
                              , o = [];
                            switch (t.behavior) {
                            case "flip":
                                o = [i, s];
                                break;
                            case "clockwise":
                                o = ne(i);
                                break;
                            case "counterclockwise":
                                o = ne(i, !0);
                                break;
                            default:
                                o = t.behavior
                            }
                            return o.forEach((function(a, l) {
                                if (i !== a || o.length === l + 1)
                                    return e;
                                i = e.placement.split("-")[0],
                                s = j(i);
                                var c = e.offsets.popper
                                  , d = e.offsets.reference
                                  , u = Math.floor
                                  , p = "left" === i && u(c.right) > u(d.left) || "right" === i && u(c.left) < u(d.right) || "top" === i && u(c.bottom) > u(d.top) || "bottom" === i && u(c.top) < u(d.bottom)
                                  , h = u(c.left) < u(n.left)
                                  , f = u(c.right) > u(n.right)
                                  , m = u(c.top) < u(n.top)
                                  , g = u(c.bottom) > u(n.bottom)
                                  , v = "left" === i && h || "right" === i && f || "top" === i && m || "bottom" === i && g
                                  , y = -1 !== ["top", "bottom"].indexOf(i)
                                  , b = !!t.flipVariations && (y && "start" === r && h || y && "end" === r && f || !y && "start" === r && m || !y && "end" === r && g)
                                  , w = !!t.flipVariationsByContent && (y && "start" === r && f || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m)
                                  , x = b || w;
                                (p || v || x) && (e.flipped = !0,
                                (p || v) && (i = o[l + 1]),
                                x && (r = function(e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e
                                }(r)),
                                e.placement = i + (r ? "-" + r : ""),
                                e.offsets.popper = _({}, e.offsets.popper, z(e.instance.popper, e.offsets.reference, e.placement)),
                                e = F(e.instance.modifiers, e, "flip"))
                            }
                            )),
                            e
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function(e) {
                            var t = e.placement
                              , n = t.split("-")[0]
                              , i = e.offsets
                              , s = i.popper
                              , r = i.reference
                              , o = -1 !== ["left", "right"].indexOf(n)
                              , a = -1 === ["top", "left"].indexOf(n);
                            return s[o ? "left" : "top"] = r[n] - (a ? s[o ? "width" : "height"] : 0),
                            e.placement = j(t),
                            e.offsets.popper = C(s),
                            e
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function(e) {
                            if (!J(e.instance.modifiers, "hide", "preventOverflow"))
                                return e;
                            var t = e.offsets.reference
                              , n = H(e.instance.modifiers, (function(e) {
                                return "preventOverflow" === e.name
                            }
                            )).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide)
                                    return e;
                                e.hide = !0,
                                e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide)
                                    return e;
                                e.hide = !1,
                                e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.x
                              , i = t.y
                              , s = e.offsets.popper
                              , r = H(e.instance.modifiers, (function(e) {
                                return "applyStyle" === e.name
                            }
                            )).gpuAcceleration;
                            void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var o, a, l = void 0 !== r ? r : t.gpuAcceleration, c = f(e.instance.popper), d = A(c), u = {
                                position: s.position
                            }, p = function(e, t) {
                                var n = e.offsets
                                  , i = n.popper
                                  , s = n.reference
                                  , r = Math.round
                                  , o = Math.floor
                                  , a = function(e) {
                                    return e
                                }
                                  , l = r(s.width)
                                  , c = r(i.width)
                                  , d = -1 !== ["left", "right"].indexOf(e.placement)
                                  , u = -1 !== e.placement.indexOf("-")
                                  , p = t ? d || u || l % 2 == c % 2 ? r : o : a
                                  , h = t ? r : a;
                                return {
                                    left: p(l % 2 == 1 && c % 2 == 1 && !u && t ? i.left - 1 : i.left),
                                    top: h(i.top),
                                    bottom: h(i.bottom),
                                    right: p(i.right)
                                }
                            }(e, window.devicePixelRatio < 2 || !Z), h = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", g = B("transform");
                            if (a = "bottom" === h ? "HTML" === c.nodeName ? -c.clientHeight + p.bottom : -d.height + p.bottom : p.top,
                            o = "right" === m ? "HTML" === c.nodeName ? -c.clientWidth + p.right : -d.width + p.right : p.left,
                            l && g)
                                u[g] = "translate3d(" + o + "px, " + a + "px, 0)",
                                u[h] = 0,
                                u[m] = 0,
                                u.willChange = "transform";
                            else {
                                var v = "bottom" === h ? -1 : 1
                                  , y = "right" === m ? -1 : 1;
                                u[h] = a * v,
                                u[m] = o * y,
                                u.willChange = h + ", " + m
                            }
                            var b = {
                                "x-placement": e.placement
                            };
                            return e.attributes = _({}, b, e.attributes),
                            e.styles = _({}, u, e.styles),
                            e.arrowStyles = _({}, e.offsets.arrow, e.arrowStyles),
                            e
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function(e) {
                            var t, n;
                            return Q(e.instance.popper, e.styles),
                            t = e.instance.popper,
                            n = e.attributes,
                            Object.keys(n).forEach((function(e) {
                                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                            }
                            )),
                            e.arrowElement && Object.keys(e.arrowStyles).length && Q(e.arrowElement, e.arrowStyles),
                            e
                        },
                        onLoad: function(e, t, n, i, s) {
                            var r = P(s, t, e, n.positionFixed)
                              , o = I(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", o),
                            Q(t, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }),
                            n
                        },
                        gpuAcceleration: void 0
                    }
                }
            }
              , se = function() {
                function e(t, n) {
                    var i = this
                      , s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    E(this, e),
                    this.scheduleUpdate = function() {
                        return requestAnimationFrame(i.update)
                    }
                    ,
                    this.update = r(this.update.bind(this)),
                    this.options = _({}, e.Defaults, s),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = t && t.jquery ? t[0] : t,
                    this.popper = n && n.jquery ? n[0] : n,
                    this.options.modifiers = {},
                    Object.keys(_({}, e.Defaults.modifiers, s.modifiers)).forEach((function(t) {
                        i.options.modifiers[t] = _({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                    }
                    )),
                    this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                        return _({
                            name: e
                        }, i.options.modifiers[e])
                    }
                    )).sort((function(e, t) {
                        return e.order - t.order
                    }
                    )),
                    this.modifiers.forEach((function(e) {
                        e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                    }
                    )),
                    this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(),
                    this.state.eventsEnabled = a
                }
                return T(e, [{
                    key: "update",
                    value: function() {
                        return R.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return W.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return X.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return Y.call(this)
                    }
                }]),
                e
            }();
            se.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils,
            se.placements = ee,
            se.Defaults = ie;
            const re = se
        }
    }
      , t = {};
    function n(i) {
        var s = t[i];
        if (void 0 !== s)
            return s.exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var i in t)
            n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        "use strict";
        function e(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }
        function t(n, i) {
            void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            Object.keys(i).forEach((function(s) {
                void 0 === n[s] ? n[s] = i[s] : e(i[s]) && e(n[s]) && Object.keys(i[s]).length > 0 && t(n[s], i[s])
            }
            ))
        }
        n(444);
        var i = "undefined" != typeof document ? document : {}
          , s = {
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
        t(i, s);
        var r = "undefined" != typeof window ? window : {};
        t(r, {
            document: s,
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
        class o {
            constructor(e) {
                const t = this;
                for (let n = 0; n < e.length; n += 1)
                    t[n] = e[n];
                return t.length = e.length,
                this
            }
        }
        function a(e, t) {
            const n = [];
            let s = 0;
            if (e && !t && e instanceof o)
                return e;
            if (e)
                if ("string" == typeof e) {
                    let r, o;
                    const a = e.trim();
                    if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                        let e = "div";
                        for (0 === a.indexOf("<li") && (e = "ul"),
                        0 === a.indexOf("<tr") && (e = "tbody"),
                        0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (e = "tr"),
                        0 === a.indexOf("<tbody") && (e = "table"),
                        0 === a.indexOf("<option") && (e = "select"),
                        o = i.createElement(e),
                        o.innerHTML = a,
                        s = 0; s < o.childNodes.length; s += 1)
                            n.push(o.childNodes[s])
                    } else
                        for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])],
                        s = 0; s < r.length; s += 1)
                            r[s] && n.push(r[s])
                } else if (e.nodeType || e === r || e === i)
                    n.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (s = 0; s < e.length; s += 1)
                        n.push(e[s]);
            return new o(n)
        }
        function l(e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }
        a.fn = o.prototype,
        a.Class = o,
        a.Dom7 = o,
        "resize scroll".split(" ");
        const c = {
            addClass: function(e) {
                if (void 0 === e)
                    return this;
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1)
                    for (let n = 0; n < this.length; n += 1)
                        void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[e]);
                return this
            },
            removeClass: function(e) {
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1)
                    for (let n = 0; n < this.length; n += 1)
                        void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[e]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1)
                    for (let n = 0; n < this.length; n += 1)
                        void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[e]);
                return this
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let n = 0; n < this.length; n += 1)
                    if (2 === arguments.length)
                        this[n].setAttribute(e, t);
                    else
                        for (const t in e)
                            this[n][t] = e[t],
                            this[n].setAttribute(t, e[t]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                let n;
                if (void 0 !== t) {
                    for (let i = 0; i < this.length; i += 1)
                        n = this[i],
                        n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                        n.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (n = this[0],
                n) {
                    if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage)
                        return n.dom7ElementDataStorage[e];
                    return n.getAttribute(`data-${e}`) || void 0
                }
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1) {
                    const n = this[t].style;
                    n.webkitTransform = e,
                    n.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e = `${e}ms`);
                for (let t = 0; t < this.length; t += 1) {
                    const n = this[t].style;
                    n.webkitTransitionDuration = e,
                    n.transitionDuration = e
                }
                return this
            },
            on: function(...e) {
                let[t,n,i,s] = e;
                function r(e) {
                    const t = e.target;
                    if (!t)
                        return;
                    const s = e.target.dom7EventData || [];
                    if (s.indexOf(e) < 0 && s.unshift(e),
                    a(t).is(n))
                        i.apply(t, s);
                    else {
                        const e = a(t).parents();
                        for (let t = 0; t < e.length; t += 1)
                            a(e[t]).is(n) && i.apply(e[t], s)
                    }
                }
                function o(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e),
                    i.apply(this, t)
                }
                "function" == typeof e[1] && ([t,i,s] = e,
                n = void 0),
                s || (s = !1);
                const l = t.split(" ");
                let c;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (n)
                        for (c = 0; c < l.length; c += 1) {
                            const e = l[c];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                            t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                            t.dom7LiveListeners[e].push({
                                listener: i,
                                proxyListener: r
                            }),
                            t.addEventListener(e, r, s)
                        }
                    else
                        for (c = 0; c < l.length; c += 1) {
                            const e = l[c];
                            t.dom7Listeners || (t.dom7Listeners = {}),
                            t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                            t.dom7Listeners[e].push({
                                listener: i,
                                proxyListener: o
                            }),
                            t.addEventListener(e, o, s)
                        }
                }
                return this
            },
            off: function(...e) {
                let[t,n,i,s] = e;
                "function" == typeof e[1] && ([t,i,s] = e,
                n = void 0),
                s || (s = !1);
                const r = t.split(" ");
                for (let e = 0; e < r.length; e += 1) {
                    const t = r[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const r = this[e];
                        let o;
                        if (!n && r.dom7Listeners ? o = r.dom7Listeners[t] : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
                        o && o.length)
                            for (let e = o.length - 1; e >= 0; e -= 1) {
                                const n = o[e];
                                i && n.listener === i || i && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === i ? (r.removeEventListener(t, n.proxyListener, s),
                                o.splice(e, 1)) : i || (r.removeEventListener(t, n.proxyListener, s),
                                o.splice(e, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...e) {
                const t = e[0].split(" ")
                  , n = e[1];
                for (let s = 0; s < t.length; s += 1) {
                    const o = t[s];
                    for (let t = 0; t < this.length; t += 1) {
                        const s = this[t];
                        let a;
                        try {
                            a = new r.CustomEvent(o,{
                                detail: n,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (e) {
                            a = i.createEvent("Event"),
                            a.initEvent(o, !0, !0),
                            a.detail = n
                        }
                        s.dom7EventData = e.filter(((e,t)=>t > 0)),
                        s.dispatchEvent(a),
                        s.dom7EventData = [],
                        delete s.dom7EventData
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                const t = ["webkitTransitionEnd", "transitionend"]
                  , n = this;
                let i;
                function s(r) {
                    if (r.target === this)
                        for (e.call(this, r),
                        i = 0; i < t.length; i += 1)
                            n.off(t[i], s)
                }
                if (e)
                    for (i = 0; i < t.length; i += 1)
                        n.on(t[i], s);
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
                      , n = i.body
                      , s = e.clientTop || n.clientTop || 0
                      , o = e.clientLeft || n.clientLeft || 0
                      , a = e === r ? r.scrollY : e.scrollTop
                      , l = e === r ? r.scrollX : e.scrollLeft;
                    return {
                        top: t.top + a - s,
                        left: t.left + l - o
                    }
                }
                return null
            },
            css: function(e, t) {
                let n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            for (let t in e)
                                this[n].style[t] = e[t];
                        return this
                    }
                    if (this[0])
                        return r.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        this[n].style[e] = t;
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
                let n, s;
                if (!t || void 0 === e)
                    return !1;
                if ("string" == typeof e) {
                    if (t.matches)
                        return t.matches(e);
                    if (t.webkitMatchesSelector)
                        return t.webkitMatchesSelector(e);
                    if (t.msMatchesSelector)
                        return t.msMatchesSelector(e);
                    for (n = a(e),
                    s = 0; s < n.length; s += 1)
                        if (n[s] === t)
                            return !0;
                    return !1
                }
                if (e === i)
                    return t === i;
                if (e === r)
                    return t === r;
                if (e.nodeType || e instanceof o) {
                    for (n = e.nodeType ? [e] : e,
                    s = 0; s < n.length; s += 1)
                        if (n[s] === t)
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
                let n;
                return e > t - 1 ? new o([]) : e < 0 ? (n = t + e,
                new o(n < 0 ? [] : [this[n]])) : new o([this[e]])
            },
            append: function(...e) {
                let t;
                for (let n = 0; n < e.length; n += 1) {
                    t = e[n];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const n = i.createElement("div");
                            for (n.innerHTML = t; n.firstChild; )
                                this[e].appendChild(n.firstChild)
                        } else if (t instanceof o)
                            for (let n = 0; n < t.length; n += 1)
                                this[e].appendChild(t[n]);
                        else
                            this[e].appendChild(t)
                }
                return this
            },
            prepend: function(e) {
                let t, n;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        const s = i.createElement("div");
                        for (s.innerHTML = e,
                        n = s.childNodes.length - 1; n >= 0; n -= 1)
                            this[t].insertBefore(s.childNodes[n], this[t].childNodes[0])
                    } else if (e instanceof o)
                        for (n = 0; n < e.length; n += 1)
                            this[t].insertBefore(e[n], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(e) ? new o([this[0].nextElementSibling]) : new o([]) : this[0].nextElementSibling ? new o([this[0].nextElementSibling]) : new o([]) : new o([])
            },
            nextAll: function(e) {
                const t = [];
                let n = this[0];
                if (!n)
                    return new o([]);
                for (; n.nextElementSibling; ) {
                    const i = n.nextElementSibling;
                    e ? a(i).is(e) && t.push(i) : t.push(i),
                    n = i
                }
                return new o(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && a(t.previousElementSibling).is(e) ? new o([t.previousElementSibling]) : new o([]) : t.previousElementSibling ? new o([t.previousElementSibling]) : new o([])
                }
                return new o([])
            },
            prevAll: function(e) {
                const t = [];
                let n = this[0];
                if (!n)
                    return new o([]);
                for (; n.previousElementSibling; ) {
                    const i = n.previousElementSibling;
                    e ? a(i).is(e) && t.push(i) : t.push(i),
                    n = i
                }
                return new o(t)
            },
            parent: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1)
                    null !== this[n].parentNode && (e ? a(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
                return a(l(t))
            },
            parents: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    let i = this[n].parentNode;
                    for (; i; )
                        e ? a(i).is(e) && t.push(i) : t.push(i),
                        i = i.parentNode
                }
                return a(l(t))
            },
            closest: function(e) {
                let t = this;
                return void 0 === e ? new o([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                t)
            },
            find: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n].querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1)
                        t.push(i[e])
                }
                return new o(t)
            },
            children: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n].childNodes;
                    for (let n = 0; n < i.length; n += 1)
                        e ? 1 === i[n].nodeType && a(i[n]).is(e) && t.push(i[n]) : 1 === i[n].nodeType && t.push(i[n])
                }
                return new o(l(t))
            },
            filter: function(e) {
                const t = []
                  , n = this;
                for (let i = 0; i < n.length; i += 1)
                    e.call(n[i], i, n[i]) && t.push(n[i]);
                return new o(t)
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function(...e) {
                const t = this;
                let n, i;
                for (n = 0; n < e.length; n += 1) {
                    const s = a(e[n]);
                    for (i = 0; i < s.length; i += 1)
                        t[t.length] = s[i],
                        t.length += 1
                }
                return t
            },
            styles: function() {
                return this[0] ? r.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(c).forEach((e=>{
            a.fn[e] = a.fn[e] || c[e]
        }
        ));
        const d = {
            deleteProps(e) {
                const t = e;
                Object.keys(t).forEach((e=>{
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                ))
            },
            nextTick: (e,t=0)=>setTimeout(e, t),
            now: ()=>Date.now(),
            getTranslate(e, t="x") {
                let n, i, s;
                const o = r.getComputedStyle(e, null);
                return r.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map((e=>e.replace(",", "."))).join(", ")),
                s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                n = s.toString().split(",")),
                "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                i || 0
            },
            parseUrlQuery(e) {
                const t = {};
                let n, i, s, o, a = e || r.location.href;
                if ("string" == typeof a && a.length)
                    for (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "",
                    i = a.split("&").filter((e=>"" !== e)),
                    o = i.length,
                    n = 0; n < o; n += 1)
                        s = i[n].replace(/#\S+/g, "").split("="),
                        t[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                return t
            },
            isObject: e=>"object" == typeof e && null !== e && e.constructor && e.constructor === Object,
            extend(...e) {
                const t = Object(e[0]);
                for (let n = 1; n < e.length; n += 1) {
                    const i = e[n];
                    if (null != i) {
                        const e = Object.keys(Object(i));
                        for (let n = 0, s = e.length; n < s; n += 1) {
                            const s = e[n]
                              , r = Object.getOwnPropertyDescriptor(i, s);
                            void 0 !== r && r.enumerable && (d.isObject(t[s]) && d.isObject(i[s]) ? d.extend(t[s], i[s]) : !d.isObject(t[s]) && d.isObject(i[s]) ? (t[s] = {},
                            d.extend(t[s], i[s])) : t[s] = i[s])
                        }
                    }
                }
                return t
            }
        }
          , u = {
            touch: !!("ontouchstart"in r || r.DocumentTouch && i instanceof r.DocumentTouch),
            pointerEvents: !!r.PointerEvent && "maxTouchPoints"in r.navigator && r.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver"in r || "WebkitMutationObserver"in r,
            passiveListener: function() {
                let e = !1;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get() {
                            e = !0
                        }
                    });
                    r.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart"in r
        };
        class p {
            constructor(e={}) {
                const t = this;
                t.params = e,
                t.eventsListeners = {},
                t.params && t.params.on && Object.keys(t.params.on).forEach((e=>{
                    t.on(e, t.params.on[e])
                }
                ))
            }
            on(e, t, n) {
                const i = this;
                if ("function" != typeof t)
                    return i;
                const s = n ? "unshift" : "push";
                return e.split(" ").forEach((e=>{
                    i.eventsListeners[e] || (i.eventsListeners[e] = []),
                    i.eventsListeners[e][s](t)
                }
                )),
                i
            }
            once(e, t, n) {
                const i = this;
                if ("function" != typeof t)
                    return i;
                function s(...n) {
                    i.off(e, s),
                    s.f7proxy && delete s.f7proxy,
                    t.apply(i, n)
                }
                return s.f7proxy = t,
                i.on(e, s, n)
            }
            off(e, t) {
                const n = this;
                return n.eventsListeners ? (e.split(" ").forEach((e=>{
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(((i,s)=>{
                        (i === t || i.f7proxy && i.f7proxy === t) && n.eventsListeners[e].splice(s, 1)
                    }
                    ))
                }
                )),
                n) : n
            }
            emit(...e) {
                const t = this;
                if (!t.eventsListeners)
                    return t;
                let n, i, s;
                return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0],
                i = e.slice(1, e.length),
                s = t) : (n = e[0].events,
                i = e[0].data,
                s = e[0].context || t),
                (Array.isArray(n) ? n : n.split(" ")).forEach((e=>{
                    if (t.eventsListeners && t.eventsListeners[e]) {
                        const n = [];
                        t.eventsListeners[e].forEach((e=>{
                            n.push(e)
                        }
                        )),
                        n.forEach((e=>{
                            e.apply(s, i)
                        }
                        ))
                    }
                }
                )),
                t
            }
            useModulesParams(e) {
                const t = this;
                t.modules && Object.keys(t.modules).forEach((n=>{
                    const i = t.modules[n];
                    i.params && d.extend(e, i.params)
                }
                ))
            }
            useModules(e={}) {
                const t = this;
                t.modules && Object.keys(t.modules).forEach((n=>{
                    const i = t.modules[n]
                      , s = e[n] || {};
                    i.instance && Object.keys(i.instance).forEach((e=>{
                        const n = i.instance[e];
                        t[e] = "function" == typeof n ? n.bind(t) : n
                    }
                    )),
                    i.on && t.on && Object.keys(i.on).forEach((e=>{
                        t.on(e, i.on[e])
                    }
                    )),
                    i.create && i.create.bind(t)(s)
                }
                ))
            }
            static set components(e) {
                this.use && this.use(e)
            }
            static installModule(e, ...t) {
                const n = this;
                n.prototype.modules || (n.prototype.modules = {});
                const i = e.name || `${Object.keys(n.prototype.modules).length}_${d.now()}`;
                return n.prototype.modules[i] = e,
                e.proto && Object.keys(e.proto).forEach((t=>{
                    n.prototype[t] = e.proto[t]
                }
                )),
                e.static && Object.keys(e.static).forEach((t=>{
                    n[t] = e.static[t]
                }
                )),
                e.install && e.install.apply(n, t),
                n
            }
            static use(e, ...t) {
                const n = this;
                return Array.isArray(e) ? (e.forEach((e=>n.installModule(e))),
                n) : n.installModule(e, ...t)
            }
        }
        var h = {
            updateSize: function() {
                const e = this;
                let t, n;
                const i = e.$el;
                t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth,
                n = void 0 !== e.params.height ? e.params.height : i[0].clientHeight,
                0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
                n = n - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
                d.extend(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            },
            updateSlides: function() {
                const e = this
                  , t = e.params
                  , {$wrapperEl: n, size: i, rtlTranslate: s, wrongRTL: o} = e
                  , a = e.virtual && t.virtual.enabled
                  , l = a ? e.virtual.slides.length : e.slides.length
                  , c = n.children(`.${e.params.slideClass}`)
                  , u = a ? e.virtual.slides.length : c.length;
                let p = [];
                const h = []
                  , f = [];
                function m(e) {
                    return !t.cssMode || e !== c.length - 1
                }
                let g = t.slidesOffsetBefore;
                "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
                let v = t.slidesOffsetAfter;
                "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
                const y = e.snapGrid.length
                  , b = e.snapGrid.length;
                let w, x, E = t.spaceBetween, T = -g, S = 0, _ = 0;
                if (void 0 === i)
                    return;
                "string" == typeof E && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * i),
                e.virtualSize = -E,
                s ? c.css({
                    marginLeft: "",
                    marginTop: ""
                }) : c.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                t.slidesPerColumn > 1 && (w = Math.floor(u / t.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
                const C = t.slidesPerColumn
                  , A = w / C
                  , $ = Math.floor(u / t.slidesPerColumn);
                for (let n = 0; n < u; n += 1) {
                    x = 0;
                    const s = c.eq(n);
                    if (t.slidesPerColumn > 1) {
                        let i, r, o;
                        if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                            const e = Math.floor(n / (t.slidesPerGroup * t.slidesPerColumn))
                              , a = n - t.slidesPerColumn * t.slidesPerGroup * e
                              , l = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((u - e * C * t.slidesPerGroup) / C), t.slidesPerGroup);
                            o = Math.floor(a / l),
                            r = a - o * l + e * t.slidesPerGroup,
                            i = r + o * w / C,
                            s.css({
                                "-webkit-box-ordinal-group": i,
                                "-moz-box-ordinal-group": i,
                                "-ms-flex-order": i,
                                "-webkit-order": i,
                                order: i
                            })
                        } else
                            "column" === t.slidesPerColumnFill ? (r = Math.floor(n / C),
                            o = n - r * C,
                            (r > $ || r === $ && o === C - 1) && (o += 1,
                            o >= C && (o = 0,
                            r += 1))) : (o = Math.floor(n / A),
                            r = n - o * A);
                        s.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== o && t.spaceBetween && `${t.spaceBetween}px`)
                    }
                    if ("none" !== s.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            const n = r.getComputedStyle(s[0], null)
                              , i = s[0].style.transform
                              , o = s[0].style.webkitTransform;
                            if (i && (s[0].style.transform = "none"),
                            o && (s[0].style.webkitTransform = "none"),
                            t.roundLengths)
                                x = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                const e = parseFloat(n.getPropertyValue("width"))
                                  , t = parseFloat(n.getPropertyValue("padding-left"))
                                  , i = parseFloat(n.getPropertyValue("padding-right"))
                                  , s = parseFloat(n.getPropertyValue("margin-left"))
                                  , r = parseFloat(n.getPropertyValue("margin-right"))
                                  , o = n.getPropertyValue("box-sizing");
                                x = o && "border-box" === o ? e + s + r : e + t + i + s + r
                            } else {
                                const e = parseFloat(n.getPropertyValue("height"))
                                  , t = parseFloat(n.getPropertyValue("padding-top"))
                                  , i = parseFloat(n.getPropertyValue("padding-bottom"))
                                  , s = parseFloat(n.getPropertyValue("margin-top"))
                                  , r = parseFloat(n.getPropertyValue("margin-bottom"))
                                  , o = n.getPropertyValue("box-sizing");
                                x = o && "border-box" === o ? e + s + r : e + t + i + s + r
                            }
                            i && (s[0].style.transform = i),
                            o && (s[0].style.webkitTransform = o),
                            t.roundLengths && (x = Math.floor(x))
                        } else
                            x = (i - (t.slidesPerView - 1) * E) / t.slidesPerView,
                            t.roundLengths && (x = Math.floor(x)),
                            c[n] && (e.isHorizontal() ? c[n].style.width = `${x}px` : c[n].style.height = `${x}px`);
                        c[n] && (c[n].swiperSlideSize = x),
                        f.push(x),
                        t.centeredSlides ? (T = T + x / 2 + S / 2 + E,
                        0 === S && 0 !== n && (T = T - i / 2 - E),
                        0 === n && (T = T - i / 2 - E),
                        Math.abs(T) < .001 && (T = 0),
                        t.roundLengths && (T = Math.floor(T)),
                        _ % t.slidesPerGroup == 0 && p.push(T),
                        h.push(T)) : (t.roundLengths && (T = Math.floor(T)),
                        (_ - Math.min(e.params.slidesPerGroupSkip, _)) % e.params.slidesPerGroup == 0 && p.push(T),
                        h.push(T),
                        T = T + x + E),
                        e.virtualSize += x + E,
                        S = x,
                        _ += 1
                    }
                }
                let k;
                if (e.virtualSize = Math.max(e.virtualSize, i) + v,
                s && o && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                    width: `${e.virtualSize + t.spaceBetween}px`
                }),
                t.setWrapperSize && (e.isHorizontal() ? n.css({
                    width: `${e.virtualSize + t.spaceBetween}px`
                }) : n.css({
                    height: `${e.virtualSize + t.spaceBetween}px`
                })),
                t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * w,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? n.css({
                    width: `${e.virtualSize + t.spaceBetween}px`
                }) : n.css({
                    height: `${e.virtualSize + t.spaceBetween}px`
                }),
                t.centeredSlides)) {
                    k = [];
                    for (let n = 0; n < p.length; n += 1) {
                        let i = p[n];
                        t.roundLengths && (i = Math.floor(i)),
                        p[n] < e.virtualSize + p[0] && k.push(i)
                    }
                    p = k
                }
                if (!t.centeredSlides) {
                    k = [];
                    for (let n = 0; n < p.length; n += 1) {
                        let s = p[n];
                        t.roundLengths && (s = Math.floor(s)),
                        p[n] <= e.virtualSize - i && k.push(s)
                    }
                    p = k,
                    Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? s ? c.filter(m).css({
                    marginLeft: `${E}px`
                }) : c.filter(m).css({
                    marginRight: `${E}px`
                }) : c.filter(m).css({
                    marginBottom: `${E}px`
                })),
                t.centeredSlides && t.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((n=>{
                        e += n + (t.spaceBetween ? t.spaceBetween : 0)
                    }
                    )),
                    e -= t.spaceBetween;
                    const n = e - i;
                    p = p.map((e=>e < 0 ? -g : e > n ? n + v : e))
                }
                if (t.centerInsufficientSlides) {
                    let e = 0;
                    if (f.forEach((n=>{
                        e += n + (t.spaceBetween ? t.spaceBetween : 0)
                    }
                    )),
                    e -= t.spaceBetween,
                    e < i) {
                        const t = (i - e) / 2;
                        p.forEach(((e,n)=>{
                            p[n] = e - t
                        }
                        )),
                        h.forEach(((e,n)=>{
                            h[n] = e + t
                        }
                        ))
                    }
                }
                d.extend(e, {
                    slides: c,
                    snapGrid: p,
                    slidesGrid: h,
                    slidesSizesGrid: f
                }),
                u !== l && e.emit("slidesLengthChange"),
                p.length !== y && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                h.length !== b && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            },
            updateAutoHeight: function(e) {
                const t = this
                  , n = [];
                let i, s = 0;
                if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed),
                "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        t.visibleSlides.each(((e,t)=>{
                            n.push(t)
                        }
                        ));
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length)
                                break;
                            n.push(t.slides.eq(e)[0])
                        }
                else
                    n.push(t.slides.eq(t.activeIndex)[0]);
                for (i = 0; i < n.length; i += 1)
                    if (void 0 !== n[i]) {
                        const e = n[i].offsetHeight;
                        s = e > s ? e : s
                    }
                s && t.$wrapperEl.css("height", `${s}px`)
            },
            updateSlidesOffset: function() {
                const e = this
                  , t = e.slides;
                for (let n = 0; n < t.length; n += 1)
                    t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
            },
            updateSlidesProgress: function(e=this && this.translate || 0) {
                const t = this
                  , n = t.params
                  , {slides: i, rtlTranslate: s} = t;
                if (0 === i.length)
                    return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let r = -e;
                s && (r = e),
                i.removeClass(n.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (let e = 0; e < i.length; e += 1) {
                    const o = i[e]
                      , a = (r + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);
                    if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) {
                        const s = -(r - o.swiperSlideOffset)
                          , a = s + t.slidesSizesGrid[e];
                        (s >= 0 && s < t.size - 1 || a > 1 && a <= t.size || s <= 0 && a >= t.size) && (t.visibleSlides.push(o),
                        t.visibleSlidesIndexes.push(e),
                        i.eq(e).addClass(n.slideVisibleClass))
                    }
                    o.progress = s ? -a : a
                }
                t.visibleSlides = a(t.visibleSlides)
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params
                  , i = t.maxTranslate() - t.minTranslate();
                let {progress: s, isBeginning: r, isEnd: o} = t;
                const a = r
                  , l = o;
                0 === i ? (s = 0,
                r = !0,
                o = !0) : (s = (e - t.minTranslate()) / i,
                r = s <= 0,
                o = s >= 1),
                d.extend(t, {
                    progress: s,
                    isBeginning: r,
                    isEnd: o
                }),
                (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
                r && !a && t.emit("reachBeginning toEdge"),
                o && !l && t.emit("reachEnd toEdge"),
                (a && !r || l && !o) && t.emit("fromEdge"),
                t.emit("progress", s)
            },
            updateSlidesClasses: function() {
                const e = this
                  , {slides: t, params: n, $wrapperEl: i, activeIndex: s, realIndex: r} = e
                  , o = e.virtual && n.virtual.enabled;
                let a;
                t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`),
                a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s),
                a.addClass(n.slideActiveClass),
                n.loop && (a.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));
                let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = t.eq(0),
                l.addClass(n.slideNextClass));
                let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === c.length && (c = t.eq(-1),
                c.addClass(n.slidePrevClass)),
                n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),
                c.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                const t = this
                  , n = t.rtlTranslate ? t.translate : -t.translate
                  , {slidesGrid: i, snapGrid: s, params: r, activeIndex: o, realIndex: a, snapIndex: l} = t;
                let c, u = e;
                if (void 0 === u) {
                    for (let e = 0; e < i.length; e += 1)
                        void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? u = e : n >= i[e] && n < i[e + 1] && (u = e + 1) : n >= i[e] && (u = e);
                    r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if (s.indexOf(n) >= 0)
                    c = s.indexOf(n);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, u);
                    c = e + Math.floor((u - e) / r.slidesPerGroup)
                }
                if (c >= s.length && (c = s.length - 1),
                u === o)
                    return void (c !== l && (t.snapIndex = c,
                    t.emit("snapIndexChange")));
                const p = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                d.extend(t, {
                    snapIndex: c,
                    realIndex: p,
                    previousIndex: o,
                    activeIndex: u
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                a !== p && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this
                  , n = t.params
                  , i = a(e.target).closest(`.${n.slideClass}`)[0];
                let s = !1;
                if (i)
                    for (let e = 0; e < t.slides.length; e += 1)
                        t.slides[e] === i && (s = !0);
                if (!i || !s)
                    return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
                t.clickedSlide = i,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a(i).index(),
                n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        }
          , f = {
            getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
                const {params: t, rtlTranslate: n, translate: i, $wrapperEl: s} = this;
                if (t.virtualTranslate)
                    return n ? -i : i;
                if (t.cssMode)
                    return i;
                let r = d.getTranslate(s[0], e);
                return n && (r = -r),
                r || 0
            },
            setTranslate: function(e, t) {
                const n = this
                  , {rtlTranslate: i, params: s, $wrapperEl: r, wrapperEl: o, progress: a} = n;
                let l, c = 0, d = 0;
                n.isHorizontal() ? c = i ? -e : e : d = e,
                s.roundLengths && (c = Math.floor(c),
                d = Math.floor(d)),
                s.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : s.virtualTranslate || r.transform(`translate3d(${c}px, ${d}px, 0px)`),
                n.previousTranslate = n.translate,
                n.translate = n.isHorizontal() ? c : d;
                const u = n.maxTranslate() - n.minTranslate();
                l = 0 === u ? 0 : (e - n.minTranslate()) / u,
                l !== a && n.updateProgress(e),
                n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e=0, t=this.params.speed, n=!0, i=!0, s) {
                const r = this
                  , {params: o, wrapperEl: a} = r;
                if (r.animating && o.preventInteractionOnTransition)
                    return !1;
                const l = r.minTranslate()
                  , c = r.maxTranslate();
                let d;
                if (d = i && e > l ? l : i && e < c ? c : e,
                r.updateProgress(d),
                o.cssMode) {
                    const e = r.isHorizontal();
                    return 0 === t ? a[e ? "scrollLeft" : "scrollTop"] = -d : a.scrollTo ? a.scrollTo({
                        [e ? "left" : "top"]: -d,
                        behavior: "smooth"
                    }) : a[e ? "scrollLeft" : "scrollTop"] = -d,
                    !0
                }
                return 0 === t ? (r.setTransition(0),
                r.setTranslate(d),
                n && (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionEnd"))) : (r.setTransition(t),
                r.setTranslate(d),
                n && (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionStart")),
                r.animating || (r.animating = !0,
                r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                    r.onTranslateToWrapperTransitionEnd = null,
                    delete r.onTranslateToWrapperTransitionEnd,
                    n && r.emit("transitionEnd"))
                }
                ),
                r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                !0
            }
        }
          , m = {
            slideTo: function(e=0, t=this.params.speed, n=!0, i) {
                const s = this;
                let r = e;
                r < 0 && (r = 0);
                const {params: o, snapGrid: a, slidesGrid: l, previousIndex: c, activeIndex: d, rtlTranslate: u, wrapperEl: p} = s;
                if (s.animating && o.preventInteractionOnTransition)
                    return !1;
                const h = Math.min(s.params.slidesPerGroupSkip, r);
                let f = h + Math.floor((r - h) / s.params.slidesPerGroup);
                f >= a.length && (f = a.length - 1),
                (d || o.initialSlide || 0) === (c || 0) && n && s.emit("beforeSlideChangeStart");
                const m = -a[f];
                if (s.updateProgress(m),
                o.normalizeSlideIndex)
                    for (let e = 0; e < l.length; e += 1)
                        -Math.floor(100 * m) >= Math.floor(100 * l[e]) && (r = e);
                if (s.initialized && r !== d) {
                    if (!s.allowSlideNext && m < s.translate && m < s.minTranslate())
                        return !1;
                    if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== r)
                        return !1
                }
                let g;
                if (g = r > d ? "next" : r < d ? "prev" : "reset",
                u && -m === s.translate || !u && m === s.translate)
                    return s.updateActiveIndex(r),
                    o.autoHeight && s.updateAutoHeight(),
                    s.updateSlidesClasses(),
                    "slide" !== o.effect && s.setTranslate(m),
                    "reset" !== g && (s.transitionStart(n, g),
                    s.transitionEnd(n, g)),
                    !1;
                if (o.cssMode) {
                    const e = s.isHorizontal();
                    let n = -m;
                    return u && (n = p.scrollWidth - p.offsetWidth - n),
                    0 === t ? p[e ? "scrollLeft" : "scrollTop"] = n : p.scrollTo ? p.scrollTo({
                        [e ? "left" : "top"]: n,
                        behavior: "smooth"
                    }) : p[e ? "scrollLeft" : "scrollTop"] = n,
                    !0
                }
                return 0 === t ? (s.setTransition(0),
                s.setTranslate(m),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(n, g),
                s.transitionEnd(n, g)) : (s.setTransition(t),
                s.setTranslate(m),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(n, g),
                s.animating || (s.animating = !0,
                s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                    s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                    s.onSlideToWrapperTransitionEnd = null,
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(n, g))
                }
                ),
                s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))),
                !0
            },
            slideToLoop: function(e=0, t=this.params.speed, n=!0, i) {
                const s = this;
                let r = e;
                return s.params.loop && (r += s.loopedSlides),
                s.slideTo(r, t, n, i)
            },
            slideNext: function(e=this.params.speed, t=!0, n) {
                const i = this
                  , {params: s, animating: r} = i
                  , o = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                if (s.loop) {
                    if (r)
                        return !1;
                    i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return i.slideTo(i.activeIndex + o, e, t, n)
            },
            slidePrev: function(e=this.params.speed, t=!0, n) {
                const i = this
                  , {params: s, animating: r, snapGrid: o, slidesGrid: a, rtlTranslate: l} = i;
                if (s.loop) {
                    if (r)
                        return !1;
                    i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const d = c(l ? i.translate : -i.translate)
                  , u = o.map((e=>c(e)));
                a.map((e=>c(e))),
                o[u.indexOf(d)];
                let p, h = o[u.indexOf(d) - 1];
                return void 0 === h && s.cssMode && o.forEach((e=>{
                    !h && d >= e && (h = e)
                }
                )),
                void 0 !== h && (p = a.indexOf(h),
                p < 0 && (p = i.activeIndex - 1)),
                i.slideTo(p, e, t, n)
            },
            slideReset: function(e=this.params.speed, t=!0, n) {
                return this.slideTo(this.activeIndex, e, t, n)
            },
            slideToClosest: function(e=this.params.speed, t=!0, n, i=.5) {
                const s = this;
                let r = s.activeIndex;
                const o = Math.min(s.params.slidesPerGroupSkip, r)
                  , a = o + Math.floor((r - o) / s.params.slidesPerGroup)
                  , l = s.rtlTranslate ? s.translate : -s.translate;
                if (l >= s.snapGrid[a]) {
                    const e = s.snapGrid[a];
                    l - e > (s.snapGrid[a + 1] - e) * i && (r += s.params.slidesPerGroup)
                } else {
                    const e = s.snapGrid[a - 1];
                    l - e <= (s.snapGrid[a] - e) * i && (r -= s.params.slidesPerGroup)
                }
                return r = Math.max(r, 0),
                r = Math.min(r, s.slidesGrid.length - 1),
                s.slideTo(r, e, t, n)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, $wrapperEl: n} = e
                  , i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let s, r = e.clickedIndex;
                if (t.loop) {
                    if (e.animating)
                        return;
                    s = parseInt(a(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                    t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(),
                    r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    d.nextTick((()=>{
                        e.slideTo(r)
                    }
                    ))) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(),
                    r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    d.nextTick((()=>{
                        e.slideTo(r)
                    }
                    ))) : e.slideTo(r)
                } else
                    e.slideTo(r)
            }
        }
          , g = {
            loopCreate: function() {
                const e = this
                  , {params: t, $wrapperEl: n} = e;
                n.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                let s = n.children(`.${t.slideClass}`);
                if (t.loopFillGroupWithBlank) {
                    const e = t.slidesPerGroup - s.length % t.slidesPerGroup;
                    if (e !== t.slidesPerGroup) {
                        for (let s = 0; s < e; s += 1) {
                            const e = a(i.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                            n.append(e)
                        }
                        s = n.children(`.${t.slideClass}`)
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length),
                e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
                e.loopedSlides += t.loopAdditionalSlides,
                e.loopedSlides > s.length && (e.loopedSlides = s.length);
                const r = []
                  , o = [];
                s.each(((t,n)=>{
                    const i = a(n);
                    t < e.loopedSlides && o.push(n),
                    t < s.length && t >= s.length - e.loopedSlides && r.push(n),
                    i.attr("data-swiper-slide-index", t)
                }
                ));
                for (let e = 0; e < o.length; e += 1)
                    n.append(a(o[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (let e = r.length - 1; e >= 0; e -= 1)
                    n.prepend(a(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const {activeIndex: t, slides: n, loopedSlides: i, allowSlidePrev: s, allowSlideNext: r, snapGrid: o, rtlTranslate: a} = e;
                let l;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                const c = -o[t] - e.getTranslate();
                t < i ? (l = n.length - 3 * i + t,
                l += i,
                e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)) : t >= n.length - i && (l = -n.length + t + i,
                l += i,
                e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)),
                e.allowSlidePrev = s,
                e.allowSlideNext = r,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                const {$wrapperEl: e, params: t, slides: n} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                n.removeAttr("data-swiper-slide-index")
            }
        }
          , v = {
            setGrabCursor: function(e) {
                const t = this;
                if (u.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const n = t.el;
                n.style.cursor = "move",
                n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                n.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                n.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
                const e = this;
                u.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
            }
        }
          , y = {
            appendSlide: function(e) {
                const t = this
                  , {$wrapperEl: n, params: i} = t;
                if (i.loop && t.loopDestroy(),
                "object" == typeof e && "length"in e)
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && n.append(e[t]);
                else
                    n.append(e);
                i.loop && t.loopCreate(),
                i.observer && u.observer || t.update()
            },
            prependSlide: function(e) {
                const t = this
                  , {params: n, $wrapperEl: i, activeIndex: s} = t;
                n.loop && t.loopDestroy();
                let r = s + 1;
                if ("object" == typeof e && "length"in e) {
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && i.prepend(e[t]);
                    r = s + e.length
                } else
                    i.prepend(e);
                n.loop && t.loopCreate(),
                n.observer && u.observer || t.update(),
                t.slideTo(r, 0, !1)
            },
            addSlide: function(e, t) {
                const n = this
                  , {$wrapperEl: i, params: s, activeIndex: r} = n;
                let o = r;
                s.loop && (o -= n.loopedSlides,
                n.loopDestroy(),
                n.slides = i.children(`.${s.slideClass}`));
                const a = n.slides.length;
                if (e <= 0)
                    return void n.prependSlide(t);
                if (e >= a)
                    return void n.appendSlide(t);
                let l = o > e ? o + 1 : o;
                const c = [];
                for (let t = a - 1; t >= e; t -= 1) {
                    const e = n.slides.eq(t);
                    e.remove(),
                    c.unshift(e)
                }
                if ("object" == typeof t && "length"in t) {
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && i.append(t[e]);
                    l = o > e ? o + t.length : o
                } else
                    i.append(t);
                for (let e = 0; e < c.length; e += 1)
                    i.append(c[e]);
                s.loop && n.loopCreate(),
                s.observer && u.observer || n.update(),
                s.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
            },
            removeSlide: function(e) {
                const t = this
                  , {params: n, $wrapperEl: i, activeIndex: s} = t;
                let r = s;
                n.loop && (r -= t.loopedSlides,
                t.loopDestroy(),
                t.slides = i.children(`.${n.slideClass}`));
                let o, a = r;
                if ("object" == typeof e && "length"in e) {
                    for (let n = 0; n < e.length; n += 1)
                        o = e[n],
                        t.slides[o] && t.slides.eq(o).remove(),
                        o < a && (a -= 1);
                    a = Math.max(a, 0)
                } else
                    o = e,
                    t.slides[o] && t.slides.eq(o).remove(),
                    o < a && (a -= 1),
                    a = Math.max(a, 0);
                n.loop && t.loopCreate(),
                n.observer && u.observer || t.update(),
                n.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
            },
            removeAllSlides: function() {
                const e = this
                  , t = [];
                for (let n = 0; n < e.slides.length; n += 1)
                    t.push(n);
                e.removeSlide(t)
            }
        };
        const b = function() {
            const e = r.navigator.platform
              , t = r.navigator.userAgent
              , n = {
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
                cordova: !(!r.cordova && !r.phonegap),
                phonegap: !(!r.cordova && !r.phonegap),
                electron: !1
            }
              , i = r.screen.width
              , s = r.screen.height
              , o = t.match(/(Android);?[\s\/]+([\d.]+)?/);
            let a = t.match(/(iPad).*OS\s([\d_]+)/);
            const l = t.match(/(iPod)(.*OS\s([\d_]+))?/)
              , c = !a && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , d = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
              , p = t.indexOf("Edge/") >= 0
              , h = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0
              , f = "Win32" === e
              , m = t.toLowerCase().indexOf("electron") >= 0;
            let g = "MacIntel" === e;
            return !a && g && u.touch && (1024 === i && 1366 === s || 834 === i && 1194 === s || 834 === i && 1112 === s || 768 === i && 1024 === s) && (a = t.match(/(Version)\/([\d.]+)/),
            g = !1),
            n.ie = d,
            n.edge = p,
            n.firefox = h,
            o && !f && (n.os = "android",
            n.osVersion = o[2],
            n.android = !0,
            n.androidChrome = t.toLowerCase().indexOf("chrome") >= 0),
            (a || c || l) && (n.os = "ios",
            n.ios = !0),
            c && !l && (n.osVersion = c[2].replace(/_/g, "."),
            n.iphone = !0),
            a && (n.osVersion = a[2].replace(/_/g, "."),
            n.ipad = !0),
            l && (n.osVersion = l[3] ? l[3].replace(/_/g, ".") : null,
            n.ipod = !0),
            n.ios && n.osVersion && t.indexOf("Version/") >= 0 && "10" === n.osVersion.split(".")[0] && (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
            n.webView = !(!(c || a || l) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !r.navigator.standalone) || r.matchMedia && r.matchMedia("(display-mode: standalone)").matches,
            n.webview = n.webView,
            n.standalone = n.webView,
            n.desktop = !(n.ios || n.android) || m,
            n.desktop && (n.electron = m,
            n.macos = g,
            n.windows = f,
            n.macos && (n.os = "macos"),
            n.windows && (n.os = "windows")),
            n.pixelRatio = r.devicePixelRatio || 1,
            n
        }();
        function w(e) {
            const t = this
              , n = t.touchEventsData
              , {params: s, touches: o} = t;
            if (t.animating && s.preventInteractionOnTransition)
                return;
            let l = e;
            l.originalEvent && (l = l.originalEvent);
            const c = a(l.target);
            if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
                return;
            if (n.isTouchEvent = "touchstart" === l.type,
            !n.isTouchEvent && "which"in l && 3 === l.which)
                return;
            if (!n.isTouchEvent && "button"in l && l.button > 0)
                return;
            if (n.isTouched && n.isMoved)
                return;
            if (s.noSwiping && c.closest(s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`)[0])
                return void (t.allowClick = !0);
            if (s.swipeHandler && !c.closest(s.swipeHandler)[0])
                return;
            o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX,
            o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
            const u = o.currentX
              , p = o.currentY
              , h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
              , f = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
            if (!h || !(u <= f || u >= r.screen.width - f)) {
                if (d.extend(n, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }),
                o.startX = u,
                o.startY = p,
                n.touchStartTime = d.now(),
                t.allowClick = !0,
                t.updateSize(),
                t.swipeDirection = void 0,
                s.threshold > 0 && (n.allowThresholdMove = !1),
                "touchstart" !== l.type) {
                    let e = !0;
                    c.is(n.formElements) && (e = !1),
                    i.activeElement && a(i.activeElement).is(n.formElements) && i.activeElement !== c[0] && i.activeElement.blur();
                    const r = e && t.allowTouchMove && s.touchStartPreventDefault;
                    (s.touchStartForcePreventDefault || r) && l.preventDefault()
                }
                t.emit("touchStart", l)
            }
        }
        function x(e) {
            const t = this
              , n = t.touchEventsData
              , {params: s, touches: r, rtlTranslate: o} = t;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent),
            !n.isTouched)
                return void (n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", l));
            if (n.isTouchEvent && "touchmove" !== l.type)
                return;
            const c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
              , u = "touchmove" === l.type ? c.pageX : l.pageX
              , p = "touchmove" === l.type ? c.pageY : l.pageY;
            if (l.preventedByNestedSwiper)
                return r.startX = u,
                void (r.startY = p);
            if (!t.allowTouchMove)
                return t.allowClick = !1,
                void (n.isTouched && (d.extend(r, {
                    startX: u,
                    startY: p,
                    currentX: u,
                    currentY: p
                }),
                n.touchStartTime = d.now()));
            if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                if (t.isVertical()) {
                    if (p < r.startY && t.translate <= t.maxTranslate() || p > r.startY && t.translate >= t.minTranslate())
                        return n.isTouched = !1,
                        void (n.isMoved = !1)
                } else if (u < r.startX && t.translate <= t.maxTranslate() || u > r.startX && t.translate >= t.minTranslate())
                    return;
            if (n.isTouchEvent && i.activeElement && l.target === i.activeElement && a(l.target).is(n.formElements))
                return n.isMoved = !0,
                void (t.allowClick = !1);
            if (n.allowTouchCallbacks && t.emit("touchMove", l),
            l.targetTouches && l.targetTouches.length > 1)
                return;
            r.currentX = u,
            r.currentY = p;
            const h = r.currentX - r.startX
              , f = r.currentY - r.startY;
            if (t.params.threshold && Math.sqrt(h ** 2 + f ** 2) < t.params.threshold)
                return;
            if (void 0 === n.isScrolling) {
                let e;
                t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI,
                n.isScrolling = t.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
            }
            if (n.isScrolling && t.emit("touchMoveOpposite", l),
            void 0 === n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)),
            n.isScrolling)
                return void (n.isTouched = !1);
            if (!n.startMoving)
                return;
            t.allowClick = !1,
            !s.cssMode && l.cancelable && l.preventDefault(),
            s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
            n.isMoved || (s.loop && t.loopFix(),
            n.startTranslate = t.getTranslate(),
            t.setTransition(0),
            t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            n.allowMomentumBounce = !1,
            !s.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
            t.emit("sliderFirstMove", l)),
            t.emit("sliderMove", l),
            n.isMoved = !0;
            let m = t.isHorizontal() ? h : f;
            r.diff = m,
            m *= s.touchRatio,
            o && (m = -m),
            t.swipeDirection = m > 0 ? "prev" : "next",
            n.currentTranslate = m + n.startTranslate;
            let g = !0
              , v = s.resistanceRatio;
            if (s.touchReleaseOnEdges && (v = 0),
            m > 0 && n.currentTranslate > t.minTranslate() ? (g = !1,
            s.resistance && (n.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + n.startTranslate + m) ** v)) : m < 0 && n.currentTranslate < t.maxTranslate() && (g = !1,
            s.resistance && (n.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - n.startTranslate - m) ** v)),
            g && (l.preventedByNestedSwiper = !0),
            !t.allowSlideNext && "next" === t.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
            !t.allowSlidePrev && "prev" === t.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
            s.threshold > 0) {
                if (!(Math.abs(m) > s.threshold || n.allowThresholdMove))
                    return void (n.currentTranslate = n.startTranslate);
                if (!n.allowThresholdMove)
                    return n.allowThresholdMove = !0,
                    r.startX = r.currentX,
                    r.startY = r.currentY,
                    n.currentTranslate = n.startTranslate,
                    void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
            }
            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (t.updateActiveIndex(),
            t.updateSlidesClasses()),
            s.freeMode && (0 === n.velocities.length && n.velocities.push({
                position: r[t.isHorizontal() ? "startX" : "startY"],
                time: n.touchStartTime
            }),
            n.velocities.push({
                position: r[t.isHorizontal() ? "currentX" : "currentY"],
                time: d.now()
            })),
            t.updateProgress(n.currentTranslate),
            t.setTranslate(n.currentTranslate))
        }
        function E(e) {
            const t = this
              , n = t.touchEventsData
              , {params: i, touches: s, rtlTranslate: r, $wrapperEl: o, slidesGrid: a, snapGrid: l} = t;
            let c = e;
            if (c.originalEvent && (c = c.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", c),
            n.allowTouchCallbacks = !1,
            !n.isTouched)
                return n.isMoved && i.grabCursor && t.setGrabCursor(!1),
                n.isMoved = !1,
                void (n.startMoving = !1);
            i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = d.now()
              , p = u - n.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(c),
            t.emit("tap click", c),
            p < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)),
            n.lastClickTime = d.now(),
            d.nextTick((()=>{
                t.destroyed || (t.allowClick = !0)
            }
            )),
            !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate)
                return n.isTouched = !1,
                n.isMoved = !1,
                void (n.startMoving = !1);
            let h;
            if (n.isTouched = !1,
            n.isMoved = !1,
            n.startMoving = !1,
            h = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate,
            i.cssMode)
                return;
            if (i.freeMode) {
                if (h < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (h > -t.maxTranslate())
                    return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (n.velocities.length > 1) {
                        const e = n.velocities.pop()
                          , s = n.velocities.pop()
                          , r = e.position - s.position
                          , o = e.time - s.time;
                        t.velocity = r / o,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                        (o > 150 || d.now() - e.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio,
                    n.velocities.length = 0;
                    let e = 1e3 * i.freeModeMomentumRatio;
                    const s = t.velocity * e;
                    let a = t.translate + s;
                    r && (a = -a);
                    let c, u = !1;
                    const p = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    let h;
                    if (a < t.maxTranslate())
                        i.freeModeMomentumBounce ? (a + t.maxTranslate() < -p && (a = t.maxTranslate() - p),
                        c = t.maxTranslate(),
                        u = !0,
                        n.allowMomentumBounce = !0) : a = t.maxTranslate(),
                        i.loop && i.centeredSlides && (h = !0);
                    else if (a > t.minTranslate())
                        i.freeModeMomentumBounce ? (a - t.minTranslate() > p && (a = t.minTranslate() + p),
                        c = t.minTranslate(),
                        u = !0,
                        n.allowMomentumBounce = !0) : a = t.minTranslate(),
                        i.loop && i.centeredSlides && (h = !0);
                    else if (i.freeModeSticky) {
                        let e;
                        for (let t = 0; t < l.length; t += 1)
                            if (l[t] > -a) {
                                e = t;
                                break
                            }
                        a = Math.abs(l[e] - a) < Math.abs(l[e - 1] - a) || "next" === t.swipeDirection ? l[e] : l[e - 1],
                        a = -a
                    }
                    if (h && t.once("transitionEnd", (()=>{
                        t.loopFix()
                    }
                    )),
                    0 !== t.velocity) {
                        if (e = r ? Math.abs((-a - t.translate) / t.velocity) : Math.abs((a - t.translate) / t.velocity),
                        i.freeModeSticky) {
                            const n = Math.abs((r ? -a : a) - t.translate)
                              , s = t.slidesSizesGrid[t.activeIndex];
                            e = n < s ? i.speed : n < 2 * s ? 1.5 * i.speed : 2.5 * i.speed
                        }
                    } else if (i.freeModeSticky)
                        return void t.slideToClosest();
                    i.freeModeMomentumBounce && u ? (t.updateProgress(c),
                    t.setTransition(e),
                    t.setTranslate(a),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating = !0,
                    o.transitionEnd((()=>{
                        t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(i.speed),
                        setTimeout((()=>{
                            t.setTranslate(c),
                            o.transitionEnd((()=>{
                                t && !t.destroyed && t.transitionEnd()
                            }
                            ))
                        }
                        ), 0))
                    }
                    ))) : t.velocity ? (t.updateProgress(a),
                    t.setTransition(e),
                    t.setTranslate(a),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                    o.transitionEnd((()=>{
                        t && !t.destroyed && t.transitionEnd()
                    }
                    )))) : t.updateProgress(a),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                } else if (i.freeModeSticky)
                    return void t.slideToClosest();
                return void ((!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses()))
            }
            let f = 0
              , m = t.slidesSizesGrid[0];
            for (let e = 0; e < a.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== a[e + t] ? h >= a[e] && h < a[e + t] && (f = e,
                m = a[e + t] - a[e]) : h >= a[e] && (f = e,
                m = a[a.length - 1] - a[a.length - 2])
            }
            const g = (h - a[f]) / m
              , v = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (p > i.longSwipesMs) {
                if (!i.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f)),
                "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f))
            } else {
                if (!i.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                !t.navigation || c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(f + v),
                "prev" === t.swipeDirection && t.slideTo(f)) : c.target === t.navigation.nextEl ? t.slideTo(f + v) : t.slideTo(f)
            }
        }
        function T() {
            const e = this
              , {params: t, el: n} = e;
            if (n && 0 === n.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: i, allowSlidePrev: s, snapGrid: r} = e;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            e.allowSlidePrev = s,
            e.allowSlideNext = i,
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
        function S(e) {
            const t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
        function _() {
            const e = this
              , {wrapperEl: t, rtlTranslate: n} = e;
            let i;
            e.previousTranslate = e.translate,
            e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop,
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
            const s = e.maxTranslate() - e.minTranslate();
            i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s,
            i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1)
        }
        let C = !1;
        function A() {}
        var $ = {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: n, loopedSlides: i=0, params: s, $el: r} = e
                  , o = s.breakpoints;
                if (!o || o && 0 === Object.keys(o).length)
                    return;
                const a = e.getBreakpoint(o);
                if (a && e.currentBreakpoint !== a) {
                    const l = a in o ? o[a] : void 0;
                    l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((e=>{
                        const t = l[e];
                        void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    }
                    ));
                    const c = l || e.originalParams
                      , u = s.slidesPerColumn > 1
                      , p = c.slidesPerColumn > 1;
                    u && !p ? r.removeClass(`${s.containerModifierClass}multirow ${s.containerModifierClass}multirow-column`) : !u && p && (r.addClass(`${s.containerModifierClass}multirow`),
                    "column" === c.slidesPerColumnFill && r.addClass(`${s.containerModifierClass}multirow-column`));
                    const h = c.direction && c.direction !== s.direction
                      , f = s.loop && (c.slidesPerView !== s.slidesPerView || h);
                    h && n && e.changeDirection(),
                    d.extend(e.params, c),
                    d.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = a,
                    f && n && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - i + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", c)
                }
            },
            getBreakpoint: function(e) {
                if (!e)
                    return;
                let t = !1;
                const n = Object.keys(e).map((e=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: r.innerHeight * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                n.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < n.length; e += 1) {
                    const {point: i, value: s} = n[e];
                    s <= r.innerWidth && (t = i)
                }
                return t || "max"
            }
        }
          , k = {
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
        const D = {
            update: h,
            translate: f,
            transition: {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e),
                    n.emit("setTransition", e, t)
                },
                transitionStart: function(e=!0, t) {
                    const n = this
                      , {activeIndex: i, params: s, previousIndex: r} = n;
                    if (s.cssMode)
                        return;
                    s.autoHeight && n.updateAutoHeight();
                    let o = t;
                    if (o || (o = i > r ? "next" : i < r ? "prev" : "reset"),
                    n.emit("transitionStart"),
                    e && i !== r) {
                        if ("reset" === o)
                            return void n.emit("slideResetTransitionStart");
                        n.emit("slideChangeTransitionStart"),
                        "next" === o ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function(e=!0, t) {
                    const n = this
                      , {activeIndex: i, previousIndex: s, params: r} = n;
                    if (n.animating = !1,
                    r.cssMode)
                        return;
                    n.setTransition(0);
                    let o = t;
                    if (o || (o = i > s ? "next" : i < s ? "prev" : "reset"),
                    n.emit("transitionEnd"),
                    e && i !== s) {
                        if ("reset" === o)
                            return void n.emit("slideResetTransitionEnd");
                        n.emit("slideChangeTransitionEnd"),
                        "next" === o ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
                    }
                }
            },
            slide: m,
            loop: g,
            grabCursor: v,
            manipulation: y,
            events: {
                attachEvents: function() {
                    const e = this
                      , {params: t, touchEvents: n, el: s, wrapperEl: r} = e;
                    e.onTouchStart = w.bind(e),
                    e.onTouchMove = x.bind(e),
                    e.onTouchEnd = E.bind(e),
                    t.cssMode && (e.onScroll = _.bind(e)),
                    e.onClick = S.bind(e);
                    const o = !!t.nested;
                    if (!u.touch && u.pointerEvents)
                        s.addEventListener(n.start, e.onTouchStart, !1),
                        i.addEventListener(n.move, e.onTouchMove, o),
                        i.addEventListener(n.end, e.onTouchEnd, !1);
                    else {
                        if (u.touch) {
                            const r = !("touchstart" !== n.start || !u.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(n.start, e.onTouchStart, r),
                            s.addEventListener(n.move, e.onTouchMove, u.passiveListener ? {
                                passive: !1,
                                capture: o
                            } : o),
                            s.addEventListener(n.end, e.onTouchEnd, r),
                            n.cancel && s.addEventListener(n.cancel, e.onTouchEnd, r),
                            C || (i.addEventListener("touchstart", A),
                            C = !0)
                        }
                        (t.simulateTouch && !b.ios && !b.android || t.simulateTouch && !u.touch && b.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1),
                        i.addEventListener("mousemove", e.onTouchMove, o),
                        i.addEventListener("mouseup", e.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0),
                    t.cssMode && r.addEventListener("scroll", e.onScroll),
                    t.updateOnWindowResize ? e.on(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0) : e.on("observerUpdate", T, !0)
                },
                detachEvents: function() {
                    const e = this
                      , {params: t, touchEvents: n, el: s, wrapperEl: r} = e
                      , o = !!t.nested;
                    if (!u.touch && u.pointerEvents)
                        s.removeEventListener(n.start, e.onTouchStart, !1),
                        i.removeEventListener(n.move, e.onTouchMove, o),
                        i.removeEventListener(n.end, e.onTouchEnd, !1);
                    else {
                        if (u.touch) {
                            const i = !("onTouchStart" !== n.start || !u.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(n.start, e.onTouchStart, i),
                            s.removeEventListener(n.move, e.onTouchMove, o),
                            s.removeEventListener(n.end, e.onTouchEnd, i),
                            n.cancel && s.removeEventListener(n.cancel, e.onTouchEnd, i)
                        }
                        (t.simulateTouch && !b.ios && !b.android || t.simulateTouch && !u.touch && b.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1),
                        i.removeEventListener("mousemove", e.onTouchMove, o),
                        i.removeEventListener("mouseup", e.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0),
                    t.cssMode && r.removeEventListener("scroll", e.onScroll),
                    e.off(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T)
                }
            },
            breakpoints: $,
            checkOverflow: {
                checkOverflow: function() {
                    const e = this
                      , t = e.params
                      , n = e.isLocked
                      , i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length,
                    e.allowSlideNext = !e.isLocked,
                    e.allowSlidePrev = !e.isLocked,
                    n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                    n && n !== e.isLocked && (e.isEnd = !1,
                    e.navigation && e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    const {classNames: e, params: t, rtl: n, $el: i} = this
                      , s = [];
                    s.push("initialized"),
                    s.push(t.direction),
                    t.freeMode && s.push("free-mode"),
                    t.autoHeight && s.push("autoheight"),
                    n && s.push("rtl"),
                    t.slidesPerColumn > 1 && (s.push("multirow"),
                    "column" === t.slidesPerColumnFill && s.push("multirow-column")),
                    b.android && s.push("android"),
                    b.ios && s.push("ios"),
                    t.cssMode && s.push("css-mode"),
                    s.forEach((n=>{
                        e.push(t.containerModifierClass + n)
                    }
                    )),
                    i.addClass(e.join(" "))
                },
                removeClasses: function() {
                    const {$el: e, classNames: t} = this;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, n, i, s, o) {
                    let l;
                    function c() {
                        o && o()
                    }
                    a(e).parent("picture")[0] || e.complete && s ? c() : t ? (l = new r.Image,
                    l.onload = c,
                    l.onerror = c,
                    i && (l.sizes = i),
                    n && (l.srcset = n),
                    t && (l.src = t)) : c()
                },
                preloadImages: function() {
                    const e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                        e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                        const i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }
          , L = {};
        class O extends p {
            constructor(...e) {
                let t, n;
                1 === e.length && e[0].constructor && e[0].constructor === Object ? n = e[0] : [t,n] = e,
                n || (n = {}),
                n = d.extend({}, n),
                t && !n.el && (n.el = t),
                super(n),
                Object.keys(D).forEach((e=>{
                    Object.keys(D[e]).forEach((t=>{
                        O.prototype[t] || (O.prototype[t] = D[e][t])
                    }
                    ))
                }
                ));
                const i = this;
                void 0 === i.modules && (i.modules = {}),
                Object.keys(i.modules).forEach((e=>{
                    const t = i.modules[e];
                    if (t.params) {
                        const e = Object.keys(t.params)[0]
                          , i = t.params[e];
                        if ("object" != typeof i || null === i)
                            return;
                        if (!(e in n) || !("enabled"in i))
                            return;
                        !0 === n[e] && (n[e] = {
                            enabled: !0
                        }),
                        "object" != typeof n[e] || "enabled"in n[e] || (n[e].enabled = !0),
                        n[e] || (n[e] = {
                            enabled: !1
                        })
                    }
                }
                ));
                const s = d.extend({}, k);
                i.useModulesParams(s),
                i.params = d.extend({}, s, L, n),
                i.originalParams = d.extend({}, i.params),
                i.passedParams = d.extend({}, n),
                i.$ = a;
                const r = a(i.params.el);
                if (t = r[0],
                !t)
                    return;
                if (r.length > 1) {
                    const e = [];
                    return r.each(((t,i)=>{
                        const s = d.extend({}, n, {
                            el: i
                        });
                        e.push(new O(s))
                    }
                    )),
                    e
                }
                let o;
                return t.swiper = i,
                r.data("swiper", i),
                t && t.shadowRoot && t.shadowRoot.querySelector ? (o = a(t.shadowRoot.querySelector(`.${i.params.wrapperClass}`)),
                o.children = e=>r.children(e)) : o = r.children(`.${i.params.wrapperClass}`),
                d.extend(i, {
                    $el: r,
                    el: t,
                    $wrapperEl: o,
                    wrapperEl: o[0],
                    classNames: [],
                    slides: a(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: ()=>"horizontal" === i.params.direction,
                    isVertical: ()=>"vertical" === i.params.direction,
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction"),
                    rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction")),
                    wrongRTL: "-webkit-box" === o.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: i.params.allowSlideNext,
                    allowSlidePrev: i.params.allowSlidePrev,
                    touchEvents: function() {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
                        let t = ["mousedown", "mousemove", "mouseup"];
                        return u.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]),
                        i.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        },
                        i.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        },
                        u.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
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
                        lastClickTime: d.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: i.params.allowTouchMove,
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
                i.useModules(),
                i.params.init && i.init(),
                i
            }
            slidesPerViewDynamic() {
                const {params: e, slides: t, slidesGrid: n, size: i, activeIndex: s} = this;
                let r = 1;
                if (e.centeredSlides) {
                    let e, n = t[s].swiperSlideSize;
                    for (let o = s + 1; o < t.length; o += 1)
                        t[o] && !e && (n += t[o].swiperSlideSize,
                        r += 1,
                        n > i && (e = !0));
                    for (let o = s - 1; o >= 0; o -= 1)
                        t[o] && !e && (n += t[o].swiperSlideSize,
                        r += 1,
                        n > i && (e = !0))
                } else
                    for (let e = s + 1; e < t.length; e += 1)
                        n[e] - n[s] < i && (r += 1);
                return r
            }
            update() {
                const e = this;
                if (!e || e.destroyed)
                    return;
                const {snapGrid: t, params: n} = e;
                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate
                      , n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(n),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                let s;
                n.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (i(),
                e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                s || i()),
                n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            changeDirection(e, t=!0) {
                const n = this
                  , i = n.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`),
                n.params.direction = e,
                n.slides.each(((t,n)=>{
                    "vertical" === e ? n.style.width = "" : n.style.height = ""
                }
                )),
                n.emit("changeDirection"),
                t && n.update()),
                n
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
                const n = this
                  , {params: i, $el: s, $wrapperEl: r, slides: o} = n;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"),
                n.initialized = !1,
                n.detachEvents(),
                i.loop && n.loopDestroy(),
                t && (n.removeClasses(),
                s.removeAttr("style"),
                r.removeAttr("style"),
                o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                n.emit("destroy"),
                Object.keys(n.eventsListeners).forEach((e=>{
                    n.off(e)
                }
                )),
                !1 !== e && (n.$el[0].swiper = null,
                n.$el.data("swiper", null),
                d.deleteProps(n)),
                n.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                d.extend(L, e)
            }
            static get extendedDefaults() {
                return L
            }
            static get defaults() {
                return k
            }
            static get Class() {
                return p
            }
            static get $() {
                return a
            }
        }
        var M = {
            name: "device",
            proto: {
                device: b
            },
            static: {
                device: b
            }
        }
          , I = {
            name: "support",
            proto: {
                support: u
            },
            static: {
                support: u
            }
        };
        const P = {
            isEdge: !!r.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                const e = r.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
        };
        var N = {
            name: "browser",
            proto: {
                browser: P
            },
            static: {
                browser: P
            }
        }
          , j = {
            name: "resize",
            create() {
                const e = this;
                d.extend(e, {
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
                    r.addEventListener("resize", this.resize.resizeHandler),
                    r.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy() {
                    r.removeEventListener("resize", this.resize.resizeHandler),
                    r.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        };
        const z = {
            func: r.MutationObserver || r.WebkitMutationObserver,
            attach(e, t={}) {
                const n = this
                  , i = new (0,
                z.func)((e=>{
                    if (1 === e.length)
                        return void n.emit("observerUpdate", e[0]);
                    const t = function() {
                        n.emit("observerUpdate", e[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                }
                ));
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }),
                n.observer.observers.push(i)
            },
            init() {
                const e = this;
                if (u.observer && e.params.observer) {
                    if (e.params.observeParents) {
                        const t = e.$el.parents();
                        for (let n = 0; n < t.length; n += 1)
                            e.observer.attach(t[n])
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
                this.observer.observers.forEach((e=>{
                    e.disconnect()
                }
                )),
                this.observer.observers = []
            }
        };
        var H = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create() {
                const e = this;
                d.extend(e, {
                    observer: {
                        init: z.init.bind(e),
                        attach: z.attach.bind(e),
                        destroy: z.destroy.bind(e),
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
        const F = {
            update(e) {
                const t = this
                  , {slidesPerView: n, slidesPerGroup: i, centeredSlides: s} = t.params
                  , {addSlidesBefore: r, addSlidesAfter: o} = t.params.virtual
                  , {from: a, to: l, slides: c, slidesGrid: u, renderSlide: p, offset: h} = t.virtual;
                t.updateActiveIndex();
                const f = t.activeIndex || 0;
                let m, g, v;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                s ? (g = Math.floor(n / 2) + i + r,
                v = Math.floor(n / 2) + i + o) : (g = n + (i - 1) + r,
                v = i + o);
                const y = Math.max((f || 0) - v, 0)
                  , b = Math.min((f || 0) + g, c.length - 1)
                  , w = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
                function x() {
                    t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses(),
                    t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (d.extend(t.virtual, {
                    from: y,
                    to: b,
                    offset: w,
                    slidesGrid: t.slidesGrid
                }),
                a === y && l === b && !e)
                    return t.slidesGrid !== u && w !== h && t.slides.css(m, `${w}px`),
                    void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return t.params.virtual.renderExternal.call(t, {
                        offset: w,
                        from: y,
                        to: b,
                        slides: function() {
                            const e = [];
                            for (let t = y; t <= b; t += 1)
                                e.push(c[t]);
                            return e
                        }()
                    }),
                    void x();
                const E = []
                  , T = [];
                if (e)
                    t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
                else
                    for (let e = a; e <= l; e += 1)
                        (e < y || e > b) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                for (let t = 0; t < c.length; t += 1)
                    t >= y && t <= b && (void 0 === l || e ? T.push(t) : (t > l && T.push(t),
                    t < a && E.push(t)));
                T.forEach((e=>{
                    t.$wrapperEl.append(p(c[e], e))
                }
                )),
                E.sort(((e,t)=>t - e)).forEach((e=>{
                    t.$wrapperEl.prepend(p(c[e], e))
                }
                )),
                t.$wrapperEl.children(".swiper-slide").css(m, `${w}px`),
                x()
            },
            renderSlide(e, t) {
                const n = this
                  , i = n.params.virtual;
                if (i.cache && n.virtual.cache[t])
                    return n.virtual.cache[t];
                const s = i.renderSlide ? a(i.renderSlide.call(n, e, t)) : a(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
                i.cache && (n.virtual.cache[t] = s),
                s
            },
            appendSlide(e) {
                const t = this;
                if ("object" == typeof e && "length"in e)
                    for (let n = 0; n < e.length; n += 1)
                        e[n] && t.virtual.slides.push(e[n]);
                else
                    t.virtual.slides.push(e);
                t.virtual.update(!0)
            },
            prependSlide(e) {
                const t = this
                  , n = t.activeIndex;
                let i = n + 1
                  , s = 1;
                if (Array.isArray(e)) {
                    for (let n = 0; n < e.length; n += 1)
                        e[n] && t.virtual.slides.unshift(e[n]);
                    i = n + e.length,
                    s = e.length
                } else
                    t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    const e = t.virtual.cache
                      , n = {};
                    Object.keys(e).forEach((t=>{
                        const i = e[t]
                          , r = i.attr("data-swiper-slide-index");
                        r && i.attr("data-swiper-slide-index", parseInt(r, 10) + 1),
                        n[parseInt(t, 10) + s] = i
                    }
                    )),
                    t.virtual.cache = n
                }
                t.virtual.update(!0),
                t.slideTo(i, 0)
            },
            removeSlide(e) {
                const t = this;
                if (null == e)
                    return;
                let n = t.activeIndex;
                if (Array.isArray(e))
                    for (let i = e.length - 1; i >= 0; i -= 1)
                        t.virtual.slides.splice(e[i], 1),
                        t.params.virtual.cache && delete t.virtual.cache[e[i]],
                        e[i] < n && (n -= 1),
                        n = Math.max(n, 0);
                else
                    t.virtual.slides.splice(e, 1),
                    t.params.virtual.cache && delete t.virtual.cache[e],
                    e < n && (n -= 1),
                    n = Math.max(n, 0);
                t.virtual.update(!0),
                t.slideTo(n, 0)
            },
            removeAllSlides() {
                const e = this;
                e.virtual.slides = [],
                e.params.virtual.cache && (e.virtual.cache = {}),
                e.virtual.update(!0),
                e.slideTo(0, 0)
            }
        };
        var R = {
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
                const e = this;
                d.extend(e, {
                    virtual: {
                        update: F.update.bind(e),
                        appendSlide: F.appendSlide.bind(e),
                        prependSlide: F.prependSlide.bind(e),
                        removeSlide: F.removeSlide.bind(e),
                        removeAllSlides: F.removeAllSlides.bind(e),
                        renderSlide: F.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (!e.params.virtual.enabled)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}virtual`);
                    const t = {
                        watchSlidesProgress: !0
                    };
                    d.extend(e.params, t),
                    d.extend(e.originalParams, t),
                    e.params.initialSlide || e.virtual.update()
                },
                setTranslate() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        };
        const q = {
            handle(e) {
                const t = this
                  , {rtlTranslate: n} = t;
                let s = e;
                s.originalEvent && (s = s.originalEvent);
                const o = s.keyCode || s.charCode
                  , a = t.params.keyboard.pageUpDown
                  , l = a && 33 === o
                  , c = a && 34 === o
                  , d = 37 === o
                  , u = 39 === o
                  , p = 38 === o
                  , h = 40 === o;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c))
                    return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && d || t.isVertical() && p || l))
                    return !1;
                if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (l || c || d || u || p || h)) {
                        let e = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                            return;
                        const i = r.innerWidth
                          , s = r.innerHeight
                          , o = t.$el.offset();
                        n && (o.left -= t.$el[0].scrollLeft);
                        const a = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
                        for (let t = 0; t < a.length; t += 1) {
                            const n = a[t];
                            n[0] >= 0 && n[0] <= i && n[1] >= 0 && n[1] <= s && (e = !0)
                        }
                        if (!e)
                            return
                    }
                    t.isHorizontal() ? ((l || c || d || u) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                    ((c || u) && !n || (l || d) && n) && t.slideNext(),
                    ((l || d) && !n || (c || u) && n) && t.slidePrev()) : ((l || c || p || h) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                    (c || h) && t.slideNext(),
                    (l || p) && t.slidePrev()),
                    t.emit("keyPress", o)
                }
            },
            enable() {
                const e = this;
                e.keyboard.enabled || (a(i).on("keydown", e.keyboard.handle),
                e.keyboard.enabled = !0)
            },
            disable() {
                const e = this;
                e.keyboard.enabled && (a(i).off("keydown", e.keyboard.handle),
                e.keyboard.enabled = !1)
            }
        };
        var B = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create() {
                const e = this;
                d.extend(e, {
                    keyboard: {
                        enabled: !1,
                        enable: q.enable.bind(e),
                        disable: q.disable.bind(e),
                        handle: q.handle.bind(e)
                    }
                })
            },
            on: {
                init() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
        const W = {
            lastScrollTime: d.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: ()=>r.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                const e = "onwheel";
                let t = e in i;
                if (!t) {
                    const n = i.createElement("div");
                    n.setAttribute(e, "return;"),
                    t = "function" == typeof n.onwheel
                }
                return !t && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (t = i.implementation.hasFeature("Events.wheel", "3.0")),
                t
            }() ? "wheel" : "mousewheel",
            normalize(e) {
                let t = 0
                  , n = 0
                  , i = 0
                  , s = 0;
                return "detail"in e && (n = e.detail),
                "wheelDelta"in e && (n = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
                n = 0),
                i = 10 * t,
                s = 10 * n,
                "deltaY"in e && (s = e.deltaY),
                "deltaX"in e && (i = e.deltaX),
                e.shiftKey && !i && (i = s,
                s = 0),
                (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
                s *= 40) : (i *= 800,
                s *= 800)),
                i && !t && (t = i < 1 ? -1 : 1),
                s && !n && (n = s < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: n,
                    pixelX: i,
                    pixelY: s
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
                const n = this
                  , i = n.params.mousewheel;
                n.params.cssMode && t.preventDefault();
                let s = n.$el;
                if ("container" !== n.params.mousewheel.eventsTarged && (s = a(n.params.mousewheel.eventsTarged)),
                !n.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                let r = 0;
                const o = n.rtlTranslate ? -1 : 1
                  , l = W.normalize(t);
                if (i.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                            return !0;
                        r = -l.pixelX * o
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                            return !0;
                        r = -l.pixelY
                    }
                else
                    r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
                if (0 === r)
                    return !0;
                if (i.invert && (r = -r),
                n.params.freeMode) {
                    const e = {
                        time: d.now(),
                        delta: Math.abs(r),
                        direction: Math.sign(r)
                    }
                      , {lastEventBeforeSnap: s} = n.mousewheel
                      , o = s && e.time < s.time + 500 && e.delta <= s.delta && e.direction === s.direction;
                    if (!o) {
                        n.mousewheel.lastEventBeforeSnap = void 0,
                        n.params.loop && n.loopFix();
                        let s = n.getTranslate() + r * i.sensitivity;
                        const a = n.isBeginning
                          , l = n.isEnd;
                        if (s >= n.minTranslate() && (s = n.minTranslate()),
                        s <= n.maxTranslate() && (s = n.maxTranslate()),
                        n.setTransition(0),
                        n.setTranslate(s),
                        n.updateProgress(),
                        n.updateActiveIndex(),
                        n.updateSlidesClasses(),
                        (!a && n.isBeginning || !l && n.isEnd) && n.updateSlidesClasses(),
                        n.params.freeModeSticky) {
                            clearTimeout(n.mousewheel.timeout),
                            n.mousewheel.timeout = void 0;
                            const t = n.mousewheel.recentWheelEvents;
                            t.length >= 15 && t.shift();
                            const i = t.length ? t[t.length - 1] : void 0
                              , s = t[0];
                            if (t.push(e),
                            i && (e.delta > i.delta || e.direction !== i.direction))
                                t.splice(0);
                            else if (t.length >= 15 && e.time - s.time < 500 && s.delta - e.delta >= 1 && e.delta <= 6) {
                                const i = r > 0 ? .8 : .2;
                                n.mousewheel.lastEventBeforeSnap = e,
                                t.splice(0),
                                n.mousewheel.timeout = d.nextTick((()=>{
                                    n.slideToClosest(n.params.speed, !0, void 0, i)
                                }
                                ), 0)
                            }
                            n.mousewheel.timeout || (n.mousewheel.timeout = d.nextTick((()=>{
                                n.mousewheel.lastEventBeforeSnap = e,
                                t.splice(0),
                                n.slideToClosest(n.params.speed, !0, void 0, .5)
                            }
                            ), 500))
                        }
                        if (o || n.emit("scroll", t),
                        n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(),
                        s === n.minTranslate() || s === n.maxTranslate())
                            return !0
                    }
                } else {
                    const t = {
                        time: d.now(),
                        delta: Math.abs(r),
                        direction: Math.sign(r),
                        raw: e
                    }
                      , i = n.mousewheel.recentWheelEvents;
                    i.length >= 2 && i.shift();
                    const s = i.length ? i[i.length - 1] : void 0;
                    if (i.push(t),
                    s ? (t.direction !== s.direction || t.delta > s.delta || t.time > s.time + 150) && n.mousewheel.animateSlider(t) : n.mousewheel.animateSlider(t),
                    n.mousewheel.releaseScroll(t))
                        return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
            },
            animateSlider(e) {
                const t = this;
                return e.delta >= 6 && d.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
                t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
                t.emit("scroll", e.raw)),
                t.mousewheel.lastScrollTime = (new r.Date).getTime(),
                !1)
            },
            releaseScroll(e) {
                const t = this
                  , n = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && n.releaseOnEdges)
                        return !0
                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
                    return !0;
                return !1
            },
            enable() {
                const e = this
                  , t = W.event();
                if (e.params.cssMode)
                    return e.wrapperEl.removeEventListener(t, e.mousewheel.handle),
                    !0;
                if (!t)
                    return !1;
                if (e.mousewheel.enabled)
                    return !1;
                let n = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (n = a(e.params.mousewheel.eventsTarged)),
                n.on("mouseenter", e.mousewheel.handleMouseEnter),
                n.on("mouseleave", e.mousewheel.handleMouseLeave),
                n.on(t, e.mousewheel.handle),
                e.mousewheel.enabled = !0,
                !0
            },
            disable() {
                const e = this
                  , t = W.event();
                if (e.params.cssMode)
                    return e.wrapperEl.addEventListener(t, e.mousewheel.handle),
                    !0;
                if (!t)
                    return !1;
                if (!e.mousewheel.enabled)
                    return !1;
                let n = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (n = a(e.params.mousewheel.eventsTarged)),
                n.off(t, e.mousewheel.handle),
                e.mousewheel.enabled = !1,
                !0
            }
        };
        const G = {
            update() {
                const e = this
                  , t = e.params.navigation;
                if (e.params.loop)
                    return;
                const {$nextEl: n, $prevEl: i} = e.navigation;
                i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
                i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass),
                n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            },
            onPrevClick(e) {
                const t = this;
                e.preventDefault(),
                t.isBeginning && !t.params.loop || t.slidePrev()
            },
            onNextClick(e) {
                const t = this;
                e.preventDefault(),
                t.isEnd && !t.params.loop || t.slideNext()
            },
            init() {
                const e = this
                  , t = e.params.navigation;
                if (!t.nextEl && !t.prevEl)
                    return;
                let n, i;
                t.nextEl && (n = a(t.nextEl),
                e.params.uniqueNavElements && "string" == typeof t.nextEl && n.length > 1 && 1 === e.$el.find(t.nextEl).length && (n = e.$el.find(t.nextEl))),
                t.prevEl && (i = a(t.prevEl),
                e.params.uniqueNavElements && "string" == typeof t.prevEl && i.length > 1 && 1 === e.$el.find(t.prevEl).length && (i = e.$el.find(t.prevEl))),
                n && n.length > 0 && n.on("click", e.navigation.onNextClick),
                i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
                d.extend(e.navigation, {
                    $nextEl: n,
                    nextEl: n && n[0],
                    $prevEl: i,
                    prevEl: i && i[0]
                })
            },
            destroy() {
                const e = this
                  , {$nextEl: t, $prevEl: n} = e.navigation;
                t && t.length && (t.off("click", e.navigation.onNextClick),
                t.removeClass(e.params.navigation.disabledClass)),
                n && n.length && (n.off("click", e.navigation.onPrevClick),
                n.removeClass(e.params.navigation.disabledClass))
            }
        };
        const V = {
            update() {
                const e = this
                  , t = e.rtl
                  , n = e.params.pagination;
                if (!n.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , s = e.pagination.$el;
                let r;
                const o = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? (r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
                r > i - 1 - 2 * e.loopedSlides && (r -= i - 2 * e.loopedSlides),
                r > o - 1 && (r -= o),
                r < 0 && "bullets" !== e.params.paginationType && (r = o + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    const i = e.pagination.bullets;
                    let o, l, c;
                    if (n.dynamicBullets && (e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"),
                    n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex,
                    e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    o = r - e.pagination.dynamicBulletIndex,
                    l = o + (Math.min(i.length, n.dynamicMainBullets) - 1),
                    c = (l + o) / 2),
                    i.removeClass(`${n.bulletActiveClass} ${n.bulletActiveClass}-next ${n.bulletActiveClass}-next-next ${n.bulletActiveClass}-prev ${n.bulletActiveClass}-prev-prev ${n.bulletActiveClass}-main`),
                    s.length > 1)
                        i.each(((e,t)=>{
                            const i = a(t)
                              , s = i.index();
                            s === r && i.addClass(n.bulletActiveClass),
                            n.dynamicBullets && (s >= o && s <= l && i.addClass(`${n.bulletActiveClass}-main`),
                            s === o && i.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`),
                            s === l && i.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`))
                        }
                        ));
                    else {
                        const t = i.eq(r)
                          , s = t.index();
                        if (t.addClass(n.bulletActiveClass),
                        n.dynamicBullets) {
                            const t = i.eq(o)
                              , r = i.eq(l);
                            for (let e = o; e <= l; e += 1)
                                i.eq(e).addClass(`${n.bulletActiveClass}-main`);
                            if (e.params.loop)
                                if (s >= i.length - n.dynamicMainBullets) {
                                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                                        i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                                    i.eq(i.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                                } else
                                    t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`),
                                    r.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`);
                            else
                                t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`),
                                r.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`)
                        }
                    }
                    if (n.dynamicBullets) {
                        const s = Math.min(i.length, n.dynamicMainBullets + 4)
                          , r = (e.pagination.bulletSize * s - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize
                          , o = t ? "right" : "left";
                        i.css(e.isHorizontal() ? o : "top", `${r}px`)
                    }
                }
                if ("fraction" === n.type && (s.find(`.${n.currentClass}`).text(n.formatFractionCurrent(r + 1)),
                s.find(`.${n.totalClass}`).text(n.formatFractionTotal(o))),
                "progressbar" === n.type) {
                    let t;
                    t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const i = (r + 1) / o;
                    let a = 1
                      , l = 1;
                    "horizontal" === t ? a = i : l = i,
                    s.find(`.${n.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${l})`).transition(e.params.speed)
                }
                "custom" === n.type && n.renderCustom ? (s.html(n.renderCustom(e, r + 1, o)),
                e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]),
                s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass)
            },
            render() {
                const e = this
                  , t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , i = e.pagination.$el;
                let s = "";
                if ("bullets" === t.type) {
                    const r = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    for (let n = 0; n < r; n += 1)
                        t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    i.html(s),
                    e.pagination.bullets = i.find(`.${t.bulletClass}`)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
                i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
                i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            },
            init() {
                const e = this
                  , t = e.params.pagination;
                if (!t.el)
                    return;
                let n = a(t.el);
                0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
                n.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass),
                t.clickable && n.on("click", `.${t.bulletClass}`, (function(t) {
                    t.preventDefault();
                    let n = a(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (n += e.loopedSlides),
                    e.slideTo(n)
                }
                )),
                d.extend(e.pagination, {
                    $el: n,
                    el: n[0]
                }))
            },
            destroy() {
                const e = this
                  , t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const n = e.pagination.$el;
                n.removeClass(t.hiddenClass),
                n.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && n.off("click", `.${t.bulletClass}`)
            }
        };
        const U = {
            setTranslate() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el)
                    return;
                const {scrollbar: t, rtlTranslate: n, progress: i} = e
                  , {dragSize: s, trackSize: r, $dragEl: o, $el: a} = t
                  , l = e.params.scrollbar;
                let c = s
                  , d = (r - s) * i;
                n ? (d = -d,
                d > 0 ? (c = s - d,
                d = 0) : -d + s > r && (c = r + d)) : d < 0 ? (c = s + d,
                d = 0) : d + s > r && (c = r - d),
                e.isHorizontal() ? (o.transform(`translate3d(${d}px, 0, 0)`),
                o[0].style.width = `${c}px`) : (o.transform(`translate3d(0px, ${d}px, 0)`),
                o[0].style.height = `${c}px`),
                l.hide && (clearTimeout(e.scrollbar.timeout),
                a[0].style.opacity = 1,
                e.scrollbar.timeout = setTimeout((()=>{
                    a[0].style.opacity = 0,
                    a.transition(400)
                }
                ), 1e3))
            },
            setTransition(e) {
                const t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            },
            updateSize() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el)
                    return;
                const {scrollbar: t} = e
                  , {$dragEl: n, $el: i} = t;
                n[0].style.width = "",
                n[0].style.height = "";
                const s = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight
                  , r = e.size / e.virtualSize
                  , o = r * (s / e.size);
                let a;
                a = "auto" === e.params.scrollbar.dragSize ? s * r : parseInt(e.params.scrollbar.dragSize, 10),
                e.isHorizontal() ? n[0].style.width = `${a}px` : n[0].style.height = `${a}px`,
                i[0].style.display = r >= 1 ? "none" : "",
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                d.extend(t, {
                    trackSize: s,
                    divider: r,
                    moveDivider: o,
                    dragSize: a
                }),
                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            },
            getPointerPosition(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition(e) {
                const t = this
                  , {scrollbar: n, rtlTranslate: i} = t
                  , {$el: s, dragSize: r, trackSize: o, dragStartPos: a} = n;
                let l;
                l = (n.getPointerPosition(e) - s.offset()[t.isHorizontal() ? "left" : "top"] - (null !== a ? a : r / 2)) / (o - r),
                l = Math.max(Math.min(l, 1), 0),
                i && (l = 1 - l);
                const c = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
                t.updateProgress(c),
                t.setTranslate(c),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            },
            onDragStart(e) {
                const t = this
                  , n = t.params.scrollbar
                  , {scrollbar: i, $wrapperEl: s} = t
                  , {$el: r, $dragEl: o} = i;
                t.scrollbar.isTouched = !0,
                t.scrollbar.dragStartPos = e.target === o[0] || e.target === o ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
                e.preventDefault(),
                e.stopPropagation(),
                s.transition(100),
                o.transition(100),
                i.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                r.transition(0),
                n.hide && r.css("opacity", 1),
                t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                t.emit("scrollbarDragStart", e)
            },
            onDragMove(e) {
                const t = this
                  , {scrollbar: n, $wrapperEl: i} = t
                  , {$el: s, $dragEl: r} = n;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                n.setDragPosition(e),
                i.transition(0),
                s.transition(0),
                r.transition(0),
                t.emit("scrollbarDragMove", e))
            },
            onDragEnd(e) {
                const t = this
                  , n = t.params.scrollbar
                  , {scrollbar: i, $wrapperEl: s} = t
                  , {$el: r} = i;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
                t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
                s.transition("")),
                n.hide && (clearTimeout(t.scrollbar.dragTimeout),
                t.scrollbar.dragTimeout = d.nextTick((()=>{
                    r.css("opacity", 0),
                    r.transition(400)
                }
                ), 1e3)),
                t.emit("scrollbarDragEnd", e),
                n.snapOnRelease && t.slideToClosest())
            },
            enableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, touchEventsTouch: n, touchEventsDesktop: s, params: r} = e
                  , o = t.$el[0]
                  , a = !(!u.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , l = !(!u.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                u.touch ? (o.addEventListener(n.start, e.scrollbar.onDragStart, a),
                o.addEventListener(n.move, e.scrollbar.onDragMove, a),
                o.addEventListener(n.end, e.scrollbar.onDragEnd, l)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, a),
                i.addEventListener(s.move, e.scrollbar.onDragMove, a),
                i.addEventListener(s.end, e.scrollbar.onDragEnd, l))
            },
            disableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, touchEventsTouch: n, touchEventsDesktop: s, params: r} = e
                  , o = t.$el[0]
                  , a = !(!u.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , l = !(!u.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                u.touch ? (o.removeEventListener(n.start, e.scrollbar.onDragStart, a),
                o.removeEventListener(n.move, e.scrollbar.onDragMove, a),
                o.removeEventListener(n.end, e.scrollbar.onDragEnd, l)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, a),
                i.removeEventListener(s.move, e.scrollbar.onDragMove, a),
                i.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
            },
            init() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, $el: n} = e
                  , i = e.params.scrollbar;
                let s = a(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === n.find(i.el).length && (s = n.find(i.el));
                let r = s.find(`.${e.params.scrollbar.dragClass}`);
                0 === r.length && (r = a(`<div class="${e.params.scrollbar.dragClass}"></div>`),
                s.append(r)),
                d.extend(t, {
                    $el: s,
                    el: s[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                i.draggable && t.enableDraggable()
            },
            destroy() {
                this.scrollbar.disableDraggable()
            }
        };
        const X = {
            setTransform(e, t) {
                const {rtl: n} = this
                  , i = a(e)
                  , s = n ? -1 : 1
                  , r = i.attr("data-swiper-parallax") || "0";
                let o = i.attr("data-swiper-parallax-x")
                  , l = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale")
                  , d = i.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0",
                l = l || "0") : this.isHorizontal() ? (o = r,
                l = "0") : (l = r,
                o = "0"),
                o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * s + "%" : o * t * s + "px",
                l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
                null != d) {
                    const e = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = e
                }
                if (null == c)
                    i.transform(`translate3d(${o}, ${l}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(t));
                    i.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
                }
            },
            setTranslate() {
                const e = this
                  , {$el: t, slides: n, progress: i, snapGrid: s} = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,n)=>{
                    e.parallax.setTransform(n, i)
                }
                )),
                n.each(((t,n)=>{
                    let r = n.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - i * (s.length - 1)),
                    r = Math.min(Math.max(r, -1), 1),
                    a(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,n)=>{
                        e.parallax.setTransform(n, r)
                    }
                    ))
                }
                ))
            },
            setTransition(e=this.params.speed) {
                const {$el: t} = this;
                t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,n)=>{
                    const i = a(n);
                    let s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (s = 0),
                    i.transition(s)
                }
                ))
            }
        };
        const Y = {
            getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2)
                    return 1;
                const t = e.targetTouches[0].pageX
                  , n = e.targetTouches[0].pageY
                  , i = e.targetTouches[1].pageX
                  , s = e.targetTouches[1].pageY;
                return Math.sqrt((i - t) ** 2 + (s - n) ** 2)
            },
            onGestureStart(e) {
                const t = this
                  , n = t.params.zoom
                  , i = t.zoom
                  , {gesture: s} = i;
                if (i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1,
                !u.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                        return;
                    i.fakeGestureTouched = !0,
                    s.scaleStart = Y.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = a(e.target).closest(`.${t.params.slideClass}`),
                0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
                s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                s.$imageWrapEl = s.$imageEl.parent(`.${n.containerClass}`),
                s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio,
                0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0),
                t.zoom.isScaling = !0) : s.$imageEl = void 0
            },
            onGestureChange(e) {
                const t = this.params.zoom
                  , n = this.zoom
                  , {gesture: i} = n;
                if (!u.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                        return;
                    n.fakeGestureMoved = !0,
                    i.scaleMove = Y.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (n.scale = u.gestures ? e.scale * n.currentScale : i.scaleMove / i.scaleStart * n.currentScale,
                n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + (n.scale - i.maxRatio + 1) ** .5),
                n.scale < t.minRatio && (n.scale = t.minRatio + 1 - (t.minRatio - n.scale + 1) ** .5),
                i.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
            },
            onGestureEnd(e) {
                const t = this
                  , n = t.params.zoom
                  , i = t.zoom
                  , {gesture: s} = i;
                if (!u.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                        return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !b.android)
                        return;
                    i.fakeGestureTouched = !1,
                    i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), n.minRatio),
                s.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
                i.currentScale = i.scale,
                i.isScaling = !1,
                1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart(e) {
                const t = this.zoom
                  , {gesture: n, image: i} = t;
                n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (b.android && e.cancelable && e.preventDefault(),
                i.isTouched = !0,
                i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove(e) {
                const t = this
                  , n = t.zoom
                  , {gesture: i, image: s, velocity: r} = n;
                if (!i.$imageEl || 0 === i.$imageEl.length)
                    return;
                if (t.allowClick = !1,
                !s.isTouched || !i.$slideEl)
                    return;
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                const o = s.width * n.scale
                  , a = s.height * n.scale;
                if (!(o < i.slideWidth && a < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - o / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - a / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !n.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - (s.minX - s.currentX + 1) ** .8),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + (s.currentX - s.maxX + 1) ** .8),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - (s.minY - s.currentY + 1) ** .8),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + (s.currentY - s.maxY + 1) ** .8),
                    r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                    r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                    r.prevPositionX = s.touchesCurrent.x,
                    r.prevPositionY = s.touchesCurrent.y,
                    r.prevTime = Date.now(),
                    i.$imageWrapEl.transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`)
                }
            },
            onTouchEnd() {
                const e = this.zoom
                  , {gesture: t, image: n, velocity: i} = e;
                if (!t.$imageEl || 0 === t.$imageEl.length)
                    return;
                if (!n.isTouched || !n.isMoved)
                    return n.isTouched = !1,
                    void (n.isMoved = !1);
                n.isTouched = !1,
                n.isMoved = !1;
                let s = 300
                  , r = 300;
                const o = i.x * s
                  , a = n.currentX + o
                  , l = i.y * r
                  , c = n.currentY + l;
                0 !== i.x && (s = Math.abs((a - n.currentX) / i.x)),
                0 !== i.y && (r = Math.abs((c - n.currentY) / i.y));
                const d = Math.max(s, r);
                n.currentX = a,
                n.currentY = c;
                const u = n.width * e.scale
                  , p = n.height * e.scale;
                n.minX = Math.min(t.slideWidth / 2 - u / 2, 0),
                n.maxX = -n.minX,
                n.minY = Math.min(t.slideHeight / 2 - p / 2, 0),
                n.maxY = -n.minY,
                n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX),
                n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY),
                t.$imageWrapEl.transition(d).transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)
            },
            onTransitionEnd() {
                const e = this
                  , t = e.zoom
                  , {gesture: n} = t;
                n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"),
                t.scale = 1,
                t.currentScale = 1,
                n.$slideEl = void 0,
                n.$imageEl = void 0,
                n.$imageWrapEl = void 0)
            },
            toggle(e) {
                const t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in(e) {
                const t = this
                  , n = t.zoom
                  , i = t.params.zoom
                  , {gesture: s, image: r} = n;
                if (s.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? s.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : s.$slideEl = t.slides.eq(t.activeIndex),
                s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                s.$imageWrapEl = s.$imageEl.parent(`.${i.containerClass}`)),
                !s.$imageEl || 0 === s.$imageEl.length)
                    return;
                let o, a, l, c, d, u, p, h, f, m, g, v, y, b, w, x, E, T;
                s.$slideEl.addClass(`${i.zoomedSlideClass}`),
                void 0 === r.touchesStart.x && e ? (o = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
                a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (o = r.touchesStart.x,
                a = r.touchesStart.y),
                n.scale = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
                n.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
                e ? (E = s.$slideEl[0].offsetWidth,
                T = s.$slideEl[0].offsetHeight,
                l = s.$slideEl.offset().left,
                c = s.$slideEl.offset().top,
                d = l + E / 2 - o,
                u = c + T / 2 - a,
                f = s.$imageEl[0].offsetWidth,
                m = s.$imageEl[0].offsetHeight,
                g = f * n.scale,
                v = m * n.scale,
                y = Math.min(E / 2 - g / 2, 0),
                b = Math.min(T / 2 - v / 2, 0),
                w = -y,
                x = -b,
                p = d * n.scale,
                h = u * n.scale,
                p < y && (p = y),
                p > w && (p = w),
                h < b && (h = b),
                h > x && (h = x)) : (p = 0,
                h = 0),
                s.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${h}px,0)`),
                s.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
            },
            out() {
                const e = this
                  , t = e.zoom
                  , n = e.params.zoom
                  , {gesture: i} = t;
                i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : i.$slideEl = e.slides.eq(e.activeIndex),
                i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                i.$imageWrapEl = i.$imageEl.parent(`.${n.containerClass}`)),
                i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
                t.currentScale = 1,
                i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                i.$slideEl.removeClass(`${n.zoomedSlideClass}`),
                i.$slideEl = void 0)
            },
            enable() {
                const e = this
                  , t = e.zoom;
                if (t.enabled)
                    return;
                t.enabled = !0;
                const n = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !u.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = `.${e.params.slideClass}`;
                u.gestures ? (e.$wrapperEl.on("gesturestart", s, t.onGestureStart, n),
                e.$wrapperEl.on("gesturechange", s, t.onGestureChange, n),
                e.$wrapperEl.on("gestureend", s, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, s, t.onGestureStart, n),
                e.$wrapperEl.on(e.touchEvents.move, s, t.onGestureChange, i),
                e.$wrapperEl.on(e.touchEvents.end, s, t.onGestureEnd, n),
                e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, s, t.onGestureEnd, n)),
                e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i)
            },
            disable() {
                const e = this
                  , t = e.zoom;
                if (!t.enabled)
                    return;
                e.zoom.enabled = !1;
                const n = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !u.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = `.${e.params.slideClass}`;
                u.gestures ? (e.$wrapperEl.off("gesturestart", s, t.onGestureStart, n),
                e.$wrapperEl.off("gesturechange", s, t.onGestureChange, n),
                e.$wrapperEl.off("gestureend", s, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, s, t.onGestureStart, n),
                e.$wrapperEl.off(e.touchEvents.move, s, t.onGestureChange, i),
                e.$wrapperEl.off(e.touchEvents.end, s, t.onGestureEnd, n),
                e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, s, t.onGestureEnd, n)),
                e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i)
            }
        };
        const K = {
            loadInSlide(e, t=!0) {
                const n = this
                  , i = n.params.lazy;
                if (void 0 === e)
                    return;
                if (0 === n.slides.length)
                    return;
                const s = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`) : n.slides.eq(e);
                let r = s.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || (r = r.add(s[0])),
                0 !== r.length && r.each(((e,r)=>{
                    const o = a(r);
                    o.addClass(i.loadingClass);
                    const l = o.attr("data-background")
                      , c = o.attr("data-src")
                      , d = o.attr("data-srcset")
                      , u = o.attr("data-sizes")
                      , p = o.parent("picture");
                    n.loadImage(o[0], c || l, d, u, !1, (()=>{
                        if (null != n && n && (!n || n.params) && !n.destroyed) {
                            if (l ? (o.css("background-image", `url("${l}")`),
                            o.removeAttr("data-background")) : (d && (o.attr("srcset", d),
                            o.removeAttr("data-srcset")),
                            u && (o.attr("sizes", u),
                            o.removeAttr("data-sizes")),
                            p.length && p.children("source").each(((e,t)=>{
                                const n = a(t);
                                n.attr("data-srcset") && (n.attr("srcset", n.attr("data-srcset")),
                                n.removeAttr("data-srcset"))
                            }
                            )),
                            c && (o.attr("src", c),
                            o.removeAttr("data-src"))),
                            o.addClass(i.loadedClass).removeClass(i.loadingClass),
                            s.find(`.${i.preloaderClass}`).remove(),
                            n.params.loop && t) {
                                const e = s.attr("data-swiper-slide-index");
                                if (s.hasClass(n.params.slideDuplicateClass)) {
                                    const t = n.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${n.params.slideDuplicateClass})`);
                                    n.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    const t = n.$wrapperEl.children(`.${n.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                    n.lazy.loadInSlide(t.index(), !1)
                                }
                            }
                            n.emit("lazyImageReady", s[0], o[0]),
                            n.params.autoHeight && n.updateAutoHeight()
                        }
                    }
                    )),
                    n.emit("lazyImageLoad", s[0], o[0])
                }
                ))
            },
            load() {
                const e = this
                  , {$wrapperEl: t, params: n, slides: i, activeIndex: s} = e
                  , r = e.virtual && n.virtual.enabled
                  , o = n.lazy;
                let l = n.slidesPerView;
                function c(e) {
                    if (r) {
                        if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length)
                            return !0
                    } else if (i[e])
                        return !0;
                    return !1
                }
                function d(e) {
                    return r ? a(e).attr("data-swiper-slide-index") : a(e).index()
                }
                if ("auto" === l && (l = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                e.params.watchSlidesVisibility)
                    t.children(`.${n.slideVisibleClass}`).each(((t,n)=>{
                        const i = r ? a(n).attr("data-swiper-slide-index") : a(n).index();
                        e.lazy.loadInSlide(i)
                    }
                    ));
                else if (l > 1)
                    for (let t = s; t < s + l; t += 1)
                        c(t) && e.lazy.loadInSlide(t);
                else
                    e.lazy.loadInSlide(s);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        const t = o.loadPrevNextAmount
                          , n = l
                          , r = Math.min(s + n + Math.max(t, n), i.length)
                          , a = Math.max(s - Math.max(n, t), 0);
                        for (let t = s + l; t < r; t += 1)
                            c(t) && e.lazy.loadInSlide(t);
                        for (let t = a; t < s; t += 1)
                            c(t) && e.lazy.loadInSlide(t)
                    } else {
                        const i = t.children(`.${n.slideNextClass}`);
                        i.length > 0 && e.lazy.loadInSlide(d(i));
                        const s = t.children(`.${n.slidePrevClass}`);
                        s.length > 0 && e.lazy.loadInSlide(d(s))
                    }
            }
        };
        const Q = {
            LinearSpline: function(e, t) {
                const n = function() {
                    let e, t, n;
                    return (i,s)=>{
                        for (t = -1,
                        e = i.length; e - t > 1; )
                            n = e + t >> 1,
                            i[n] <= s ? t = n : e = n;
                        return e
                    }
                }();
                let i, s;
                return this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1,
                this.interpolate = function(e) {
                    return e ? (s = n(this.x, e),
                    i = s - 1,
                    (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
                }
                ,
                this
            },
            getInterpolateFunction(e) {
                const t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new Q.LinearSpline(t.slidesGrid,e.slidesGrid) : new Q.LinearSpline(t.snapGrid,e.snapGrid))
            },
            setTranslate(e, t) {
                const n = this
                  , i = n.controller.control;
                let s, r;
                function o(e) {
                    const t = n.rtlTranslate ? -n.translate : n.translate;
                    "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e),
                    r = -n.controller.spline.interpolate(-t)),
                    r && "container" !== n.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()),
                    r = (t - n.minTranslate()) * s + e.minTranslate()),
                    n.params.controller.inverse && (r = e.maxTranslate() - r),
                    e.updateProgress(r),
                    e.setTranslate(r, n),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(i))
                    for (let e = 0; e < i.length; e += 1)
                        i[e] !== t && i[e]instanceof O && o(i[e]);
                else
                    i instanceof O && t !== i && o(i)
            },
            setTransition(e, t) {
                const n = this
                  , i = n.controller.control;
                let s;
                function r(t) {
                    t.setTransition(e, n),
                    0 !== e && (t.transitionStart(),
                    t.params.autoHeight && d.nextTick((()=>{
                        t.updateAutoHeight()
                    }
                    )),
                    t.$wrapperEl.transitionEnd((()=>{
                        i && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(),
                        t.transitionEnd())
                    }
                    )))
                }
                if (Array.isArray(i))
                    for (s = 0; s < i.length; s += 1)
                        i[s] !== t && i[s]instanceof O && r(i[s]);
                else
                    i instanceof O && t !== i && r(i)
            }
        };
        var Z = {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create() {
                const e = this;
                d.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: Q.getInterpolateFunction.bind(e),
                        setTranslate: Q.setTranslate.bind(e),
                        setTransition: Q.setTransition.bind(e)
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
        };
        const J = {
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
                  , n = t.params.a11y;
                if (13 !== e.keyCode)
                    return;
                const i = a(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)),
                t.pagination && i.is(`.${t.params.pagination.bulletClass}`) && i[0].click()
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
                const {$nextEl: t, $prevEl: n} = e.navigation;
                n && n.length > 0 && (e.isBeginning ? (e.a11y.disableEl(n),
                e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n),
                e.a11y.makeElFocusable(n))),
                t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t),
                e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t),
                e.a11y.makeElFocusable(t)))
            },
            updatePagination() {
                const e = this
                  , t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((n,i)=>{
                    const s = a(i);
                    e.a11y.makeElFocusable(s),
                    e.a11y.addElRole(s, "button"),
                    e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1))
                }
                ))
            },
            init() {
                const e = this;
                e.$el.append(e.a11y.liveRegion);
                const t = e.params.a11y;
                let n, i;
                e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
                n && (e.a11y.makeElFocusable(n),
                e.a11y.addElRole(n, "button"),
                e.a11y.addElLabel(n, t.nextSlideMessage),
                n.on("keydown", e.a11y.onEnterKey)),
                i && (e.a11y.makeElFocusable(i),
                e.a11y.addElRole(i, "button"),
                e.a11y.addElLabel(i, t.prevSlideMessage),
                i.on("keydown", e.a11y.onEnterKey)),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
            },
            destroy() {
                const e = this;
                let t, n;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(),
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                t && t.off("keydown", e.a11y.onEnterKey),
                n && n.off("keydown", e.a11y.onEnterKey),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
            }
        };
        const ee = {
            init() {
                const e = this;
                if (!e.params.history)
                    return;
                if (!r.history || !r.history.pushState)
                    return e.params.history.enabled = !1,
                    void (e.params.hashNavigation.enabled = !0);
                const t = e.history;
                t.initialized = !0,
                t.paths = ee.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || r.addEventListener("popstate", e.history.setHistoryPopState))
            },
            destroy() {
                this.params.history.replaceState || r.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState() {
                const e = this;
                e.history.paths = ee.getPathValues(),
                e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues() {
                const e = r.location.pathname.slice(1).split("/").filter((e=>"" !== e))
                  , t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory(e, t) {
                const n = this;
                if (!n.history.initialized || !n.params.history.enabled)
                    return;
                const i = n.slides.eq(t);
                let s = ee.slugify(i.attr("data-history"));
                r.location.pathname.includes(e) || (s = `${e}/${s}`);
                const o = r.history.state;
                o && o.value === s || (n.params.history.replaceState ? r.history.replaceState({
                    value: s
                }, null, s) : r.history.pushState({
                    value: s
                }, null, s))
            },
            slugify: e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            scrollToSlide(e, t, n) {
                const i = this;
                if (t)
                    for (let s = 0, r = i.slides.length; s < r; s += 1) {
                        const r = i.slides.eq(s);
                        if (ee.slugify(r.attr("data-history")) === t && !r.hasClass(i.params.slideDuplicateClass)) {
                            const t = r.index();
                            i.slideTo(t, e, n)
                        }
                    }
                else
                    i.slideTo(0, e, n)
            }
        };
        const te = {
            onHashCange() {
                const e = this;
                e.emit("hashChange");
                const t = i.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const n = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === n)
                        return;
                    e.slideTo(n)
                }
            },
            setHash() {
                const e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && r.history && r.history.replaceState)
                        r.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""),
                        e.emit("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex)
                          , n = t.attr("data-hash") || t.attr("data-history");
                        i.location.hash = n || "",
                        e.emit("hashSet")
                    }
            },
            init() {
                const e = this;
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                    return;
                e.hashNavigation.initialized = !0;
                const t = i.location.hash.replace("#", "");
                if (t) {
                    const n = 0;
                    for (let i = 0, s = e.slides.length; i < s; i += 1) {
                        const s = e.slides.eq(i);
                        if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                            const t = s.index();
                            e.slideTo(t, n, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && a(r).on("hashchange", e.hashNavigation.onHashCange)
            },
            destroy() {
                this.params.hashNavigation.watchState && a(r).off("hashchange", this.hashNavigation.onHashCange)
            }
        };
        const ne = {
            run() {
                const e = this
                  , t = e.slides.eq(e.activeIndex);
                let n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = d.nextTick((()=>{
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
                ), n)
            },
            start() {
                const e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0,
                e.emit("autoplayStart"),
                e.autoplay.run(),
                !0)
            },
            stop() {
                const e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = void 0),
                e.autoplay.running = !1,
                e.emit("autoplayStop"),
                !0)
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
        const ie = {
            setTranslate() {
                const e = this
                  , {slides: t} = e;
                for (let n = 0; n < t.length; n += 1) {
                    const t = e.slides.eq(n);
                    let i = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let s = 0;
                    e.isHorizontal() || (s = i,
                    i = 0);
                    const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({
                        opacity: r
                    }).transform(`translate3d(${i}px, ${s}px, 0px)`)
                }
            },
            setTransition(e) {
                const t = this
                  , {slides: n, $wrapperEl: i} = t;
                if (n.transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    let e = !1;
                    n.transitionEnd((()=>{
                        if (e)
                            return;
                        if (!t || t.destroyed)
                            return;
                        e = !0,
                        t.animating = !1;
                        const n = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < n.length; e += 1)
                            i.trigger(n[e])
                    }
                    ))
                }
            }
        };
        const se = {
            setTranslate() {
                const e = this
                  , {$el: t, $wrapperEl: n, slides: i, width: s, height: r, rtlTranslate: o, size: l} = e
                  , c = e.params.cubeEffect
                  , d = e.isHorizontal()
                  , u = e.virtual && e.params.virtual.enabled;
                let p, h = 0;
                c.shadow && (d ? (p = n.find(".swiper-cube-shadow"),
                0 === p.length && (p = a('<div class="swiper-cube-shadow"></div>'),
                n.append(p)),
                p.css({
                    height: `${s}px`
                })) : (p = t.find(".swiper-cube-shadow"),
                0 === p.length && (p = a('<div class="swiper-cube-shadow"></div>'),
                t.append(p))));
                for (let e = 0; e < i.length; e += 1) {
                    const t = i.eq(e);
                    let n = e;
                    u && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let s = 90 * n
                      , r = Math.floor(s / 360);
                    o && (s = -s,
                    r = Math.floor(-s / 360));
                    const p = Math.max(Math.min(t[0].progress, 1), -1);
                    let f = 0
                      , m = 0
                      , g = 0;
                    n % 4 == 0 ? (f = 4 * -r * l,
                    g = 0) : (n - 1) % 4 == 0 ? (f = 0,
                    g = 4 * -r * l) : (n - 2) % 4 == 0 ? (f = l + 4 * r * l,
                    g = l) : (n - 3) % 4 == 0 && (f = -l,
                    g = 3 * l + 4 * l * r),
                    o && (f = -f),
                    d || (m = f,
                    f = 0);
                    const v = `rotateX(${d ? 0 : -s}deg) rotateY(${d ? s : 0}deg) translate3d(${f}px, ${m}px, ${g}px)`;
                    if (p <= 1 && p > -1 && (h = 90 * n + 90 * p,
                    o && (h = 90 * -n - 90 * p)),
                    t.transform(v),
                    c.slideShadows) {
                        let e = d ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , n = d ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = a(`<div class="swiper-slide-shadow-${d ? "left" : "top"}"></div>`),
                        t.append(e)),
                        0 === n.length && (n = a(`<div class="swiper-slide-shadow-${d ? "right" : "bottom"}"></div>`),
                        t.append(n)),
                        e.length && (e[0].style.opacity = Math.max(-p, 0)),
                        n.length && (n[0].style.opacity = Math.max(p, 0))
                    }
                }
                if (n.css({
                    "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                    "-moz-transform-origin": `50% 50% -${l / 2}px`,
                    "-ms-transform-origin": `50% 50% -${l / 2}px`,
                    "transform-origin": `50% 50% -${l / 2}px`
                }),
                c.shadow)
                    if (d)
                        p.transform(`translate3d(0px, ${s / 2 + c.shadowOffset}px, ${-s / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                    else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                          , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , n = c.shadowScale
                          , i = c.shadowScale / t
                          , s = c.shadowOffset;
                        p.transform(`scale3d(${n}, 1, ${i}) translate3d(0px, ${r / 2 + s}px, ${-r / 2 / i}px) rotateX(-90deg)`)
                    }
                const f = P.isSafari || P.isWebView ? -l / 2 : 0;
                n.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal() ? 0 : h}deg) rotateY(${e.isHorizontal() ? -h : 0}deg)`)
            },
            setTransition(e) {
                const t = this
                  , {$el: n, slides: i} = t;
                i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
            }
        };
        const re = {
            setTranslate() {
                const e = this
                  , {slides: t, rtlTranslate: n} = e;
                for (let i = 0; i < t.length; i += 1) {
                    const s = t.eq(i);
                    let r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    let o = -180 * r
                      , l = 0
                      , c = -s[0].swiperSlideOffset
                      , d = 0;
                    if (e.isHorizontal() ? n && (o = -o) : (d = c,
                    c = 0,
                    l = -o,
                    o = 0),
                    s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length,
                    e.params.flipEffect.slideShadows) {
                        let t = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                          , n = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = a(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`),
                        s.append(t)),
                        0 === n.length && (n = a(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`),
                        s.append(n)),
                        t.length && (t[0].style.opacity = Math.max(-r, 0)),
                        n.length && (n[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform(`translate3d(${c}px, ${d}px, 0px) rotateX(${l}deg) rotateY(${o}deg)`)
                }
            },
            setTransition(e) {
                const t = this
                  , {slides: n, activeIndex: i, $wrapperEl: s} = t;
                if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    let e = !1;
                    n.eq(i).transitionEnd((function() {
                        if (e)
                            return;
                        if (!t || t.destroyed)
                            return;
                        e = !0,
                        t.animating = !1;
                        const n = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < n.length; e += 1)
                            s.trigger(n[e])
                    }
                    ))
                }
            }
        };
        const oe = {
            setTranslate() {
                const e = this
                  , {width: t, height: n, slides: i, $wrapperEl: s, slidesSizesGrid: r} = e
                  , o = e.params.coverflowEffect
                  , l = e.isHorizontal()
                  , c = e.translate
                  , d = l ? t / 2 - c : n / 2 - c
                  , p = l ? o.rotate : -o.rotate
                  , h = o.depth;
                for (let e = 0, t = i.length; e < t; e += 1) {
                    const t = i.eq(e)
                      , n = r[e]
                      , s = (d - t[0].swiperSlideOffset - n / 2) / n * o.modifier;
                    let c = l ? p * s : 0
                      , u = l ? 0 : p * s
                      , f = -h * Math.abs(s)
                      , m = o.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(o.stretch) / 100 * n);
                    let g = l ? 0 : m * s
                      , v = l ? m * s : 0
                      , y = 1 - (1 - o.scale) * Math.abs(s);
                    Math.abs(v) < .001 && (v = 0),
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(f) < .001 && (f = 0),
                    Math.abs(c) < .001 && (c = 0),
                    Math.abs(u) < .001 && (u = 0),
                    Math.abs(y) < .001 && (y = 0);
                    const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${u}deg) rotateY(${c}deg) scale(${y})`;
                    if (t.transform(b),
                    t[0].style.zIndex = 1 - Math.abs(Math.round(s)),
                    o.slideShadows) {
                        let e = l ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , n = l ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = a(`<div class="swiper-slide-shadow-${l ? "left" : "top"}"></div>`),
                        t.append(e)),
                        0 === n.length && (n = a(`<div class="swiper-slide-shadow-${l ? "right" : "bottom"}"></div>`),
                        t.append(n)),
                        e.length && (e[0].style.opacity = s > 0 ? s : 0),
                        n.length && (n[0].style.opacity = -s > 0 ? -s : 0)
                    }
                }
                (u.pointerEvents || u.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = `${d}px 50%`)
            },
            setTransition(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        };
        const ae = {
            init() {
                const e = this
                  , {thumbs: t} = e.params
                  , n = e.constructor;
                t.swiper instanceof n ? (e.thumbs.swiper = t.swiper,
                d.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                d.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : d.isObject(t.swiper) && (e.thumbs.swiper = new n(d.extend({}, t.swiper, {
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
                const n = t.clickedIndex
                  , i = t.clickedSlide;
                if (i && a(i).hasClass(e.params.thumbs.slideThumbActiveClass))
                    return;
                if (null == n)
                    return;
                let s;
                if (s = t.params.loop ? parseInt(a(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n,
                e.params.loop) {
                    let t = e.activeIndex;
                    e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                    e._clientLeft = e.$wrapperEl[0].clientLeft,
                    t = e.activeIndex);
                    const n = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index()
                      , i = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                    s = void 0 === n ? i : void 0 === i ? n : i - t < t - n ? i : n
                }
                e.slideTo(s)
            },
            update(e) {
                const t = this
                  , n = t.thumbs.swiper;
                if (!n)
                    return;
                const i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView
                  , s = t.params.thumbs.autoScrollOffset
                  , r = s && !n.params.loop;
                if (t.realIndex !== n.realIndex || r) {
                    let o, a, l = n.activeIndex;
                    if (n.params.loop) {
                        n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(),
                        n._clientLeft = n.$wrapperEl[0].clientLeft,
                        l = n.activeIndex);
                        const e = n.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                          , i = n.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        o = void 0 === e ? i : void 0 === i ? e : i - l == l - e ? l : i - l < l - e ? i : e,
                        a = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else
                        o = t.realIndex,
                        a = o > t.previousIndex ? "next" : "prev";
                    r && (o += "next" === a ? s : -1 * s),
                    n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(o) < 0 && (n.params.centeredSlides ? o = o > l ? o - Math.floor(i / 2) + 1 : o + Math.floor(i / 2) - 1 : o > l && (o = o - i + 1),
                    n.slideTo(o, e ? 0 : void 0))
                }
                let o = 1;
                const a = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (o = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (o = 1),
                o = Math.floor(o),
                n.slides.removeClass(a),
                n.params.loop || n.params.virtual && n.params.virtual.enabled)
                    for (let e = 0; e < o; e += 1)
                        n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(a);
                else
                    for (let e = 0; e < o; e += 1)
                        n.slides.eq(t.realIndex + e).addClass(a)
            }
        };
        const le = [M, I, N, j, H, R, B, {
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
                const e = this;
                d.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: W.enable.bind(e),
                        disable: W.disable.bind(e),
                        handle: W.handle.bind(e),
                        handleMouseEnter: W.handleMouseEnter.bind(e),
                        handleMouseLeave: W.handleMouseLeave.bind(e),
                        animateSlider: W.animateSlider.bind(e),
                        releaseScroll: W.releaseScroll.bind(e),
                        lastScrollTime: d.now(),
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
                const e = this;
                d.extend(e, {
                    navigation: {
                        init: G.init.bind(e),
                        update: G.update.bind(e),
                        destroy: G.destroy.bind(e),
                        onNextClick: G.onNextClick.bind(e),
                        onPrevClick: G.onPrevClick.bind(e)
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
                      , {$nextEl: n, $prevEl: i} = t.navigation;
                    if (t.params.navigation.hideOnClick && !a(e.target).is(i) && !a(e.target).is(n)) {
                        let e;
                        n ? e = n.hasClass(t.params.navigation.hiddenClass) : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
                        !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t),
                        n && n.toggleClass(t.params.navigation.hiddenClass),
                        i && i.toggleClass(t.params.navigation.hiddenClass)
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
                const e = this;
                d.extend(e, {
                    pagination: {
                        init: V.init.bind(e),
                        render: V.render.bind(e),
                        update: V.update.bind(e),
                        destroy: V.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.pagination.init(),
                    e.pagination.render(),
                    e.pagination.update()
                },
                activeIndexChange() {
                    const e = this;
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                },
                snapIndexChange() {
                    this.params.loop || this.pagination.update()
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
                    t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !a(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                    t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
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
                const e = this;
                d.extend(e, {
                    scrollbar: {
                        init: U.init.bind(e),
                        destroy: U.destroy.bind(e),
                        updateSize: U.updateSize.bind(e),
                        setTranslate: U.setTranslate.bind(e),
                        setTransition: U.setTransition.bind(e),
                        enableDraggable: U.enableDraggable.bind(e),
                        disableDraggable: U.disableDraggable.bind(e),
                        setDragPosition: U.setDragPosition.bind(e),
                        getPointerPosition: U.getPointerPosition.bind(e),
                        onDragStart: U.onDragStart.bind(e),
                        onDragMove: U.onDragMove.bind(e),
                        onDragEnd: U.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.scrollbar.init(),
                    e.scrollbar.updateSize(),
                    e.scrollbar.setTranslate()
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
                const e = this;
                d.extend(e, {
                    parallax: {
                        setTransform: X.setTransform.bind(e),
                        setTranslate: X.setTranslate.bind(e),
                        setTransition: X.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                    e.originalParams.watchSlidesProgress = !0)
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
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((n=>{
                    t[n] = Y[n].bind(e)
                }
                )),
                d.extend(e, {
                    zoom: t
                });
                let n = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: ()=>n,
                    set(t) {
                        if (n !== t) {
                            const n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                              , i = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, n, i)
                        }
                        n = t
                    }
                })
            },
            on: {
                init() {
                    this.params.zoom.enabled && this.zoom.enable()
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
                const e = this;
                d.extend(e, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: K.load.bind(e),
                        loadInSlide: K.loadInSlide.bind(e)
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
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove() {
                    this.params.lazy.enabled && this.lazy.load()
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
        }, Z, {
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
                d.extend(e, {
                    a11y: {
                        liveRegion: a(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                    }
                }),
                Object.keys(J).forEach((t=>{
                    e.a11y[t] = J[t].bind(e)
                }
                ))
            },
            on: {
                init() {
                    const e = this;
                    e.params.a11y.enabled && (e.a11y.init(),
                    e.a11y.updateNavigation())
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
                const e = this;
                d.extend(e, {
                    history: {
                        init: ee.init.bind(e),
                        setHistory: ee.setHistory.bind(e),
                        setHistoryPopState: ee.setHistoryPopState.bind(e),
                        scrollToSlide: ee.scrollToSlide.bind(e),
                        destroy: ee.destroy.bind(e)
                    }
                })
            },
            on: {
                init() {
                    this.params.history.enabled && this.history.init()
                },
                destroy() {
                    this.params.history.enabled && this.history.destroy()
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
                const e = this;
                d.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: te.init.bind(e),
                        destroy: te.destroy.bind(e),
                        setHash: te.setHash.bind(e),
                        onHashCange: te.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
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
                d.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: ne.run.bind(e),
                        start: ne.start.bind(e),
                        stop: ne.stop.bind(e),
                        pause: ne.pause.bind(e),
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
                    const n = this;
                    n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
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
                const e = this;
                d.extend(e, {
                    fadeEffect: {
                        setTranslate: ie.setTranslate.bind(e),
                        setTransition: ie.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if ("fade" !== e.params.effect)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}fade`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(e.params, t),
                    d.extend(e.originalParams, t)
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
                const e = this;
                d.extend(e, {
                    cubeEffect: {
                        setTranslate: se.setTranslate.bind(e),
                        setTransition: se.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if ("cube" !== e.params.effect)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}cube`),
                    e.classNames.push(`${e.params.containerModifierClass}3d`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    d.extend(e.params, t),
                    d.extend(e.originalParams, t)
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
                const e = this;
                d.extend(e, {
                    flipEffect: {
                        setTranslate: re.setTranslate.bind(e),
                        setTransition: re.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if ("flip" !== e.params.effect)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}flip`),
                    e.classNames.push(`${e.params.containerModifierClass}3d`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(e.params, t),
                    d.extend(e.originalParams, t)
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
                const e = this;
                d.extend(e, {
                    coverflowEffect: {
                        setTranslate: oe.setTranslate.bind(e),
                        setTransition: oe.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(`${e.params.containerModifierClass}coverflow`),
                    e.classNames.push(`${e.params.containerModifierClass}3d`),
                    e.params.watchSlidesProgress = !0,
                    e.originalParams.watchSlidesProgress = !0)
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
                const e = this;
                d.extend(e, {
                    thumbs: {
                        swiper: null,
                        init: ae.init.bind(e),
                        update: ae.update.bind(e),
                        onThumbClick: ae.onThumbClick.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this
                      , {thumbs: t} = e.params;
                    t && t.swiper && (e.thumbs.init(),
                    e.thumbs.update(!0))
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
        void 0 === O.use && (O.use = O.Class.use,
        O.installModule = O.Class.installModule),
        O.use(le);
        const ce = O;
        var de = n(755);
        function ue(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        if (de(".main-slider").each((function(e, t) {
            var n, i = de(this);
            i.addClass("instance-" + e),
            i.find(".swiper-button-prev").addClass("btn-prev-" + e),
            i.find(".swiper-pagination").addClass("swiper-pagination-" + e),
            new ce(".instance-" + e,(ue(n = {
                pagination: ".swiper-pagination",
                slidesPerView: 1,
                centeredSlides: !0,
                paginationClickable: !0,
                loop: !0,
                spaceBetween: 0,
                speed: 800
            }, "spaceBetween", 40),
            ue(n, "autoplay", {
                delay: 3e3
            }),
            ue(n, "pagination", {
                el: ".swiper-pagination-" + e,
                type: "bullets",
                clickable: "true"
            }),
            n))
        }
        )),
        new ce(".student-swiper-container",{
            pagination: {
                el: ".student-voice-pagination",
                type: "bullets",
                clickable: "true"
            },
            slidesPerView: "auto",
            paginationClickable: !0,
            loop: !0,
            spaceBetween: 0,
            slideToClickedSlide: !0,
            autoplay: {
                delay: 3e3
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: !0
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    centeredSlides: !0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    centeredSlides: !0
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    centeredSlides: !0
                }
            }
        }),
        new ce(".agents-members",{
            pagination: {
                el: ".agents-members-pagination",
                type: "bullets",
                clickable: "true"
            },
            slidesPerView: "auto",
            paginationClickable: !0,
            loop: !0,
            spaceBetween: 0,
            slideToClickedSlide: !0,
            autoplay: {
                delay: 3e3
            },
            breakpoints: {
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    centeredSlides: !0
                }
            }
        }),
        de(".swiper-js-container").length > 0) {
            var pe = de(".swiper-js-container");
            pe.length && pe.each((function(e, t) {
                var n, i, s, r, o, a;
                i = (n = de(t)).find(".swiper-container"),
                s = n.find(".swiper-pagination"),
                r = n.find(".swiper-button-next"),
                o = n.find(".swiper-button-prev"),
                a = i.data("swiper-pagination-type") ? i.data("swiper-pagination-type") : "bullets",
                new ce(i,{
                    paginationClickable: !0,
                    loop: !0,
                    spaceBetween: 0,
                    slideToClickedSlide: !0,
                    slidesPerView: 2,
                    breakpoints: {
                        767: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        }
                    },
                    pagination: {
                        el: s,
                        clickable: !0,
                        type: a
                    },
                    navigation: {
                        nextEl: r,
                        prevEl: o
                    }
                })
            }
            ))
        }
        de(".btn-photos").click((function() {
            var e = de(this).attr("gallery");
            de("#GalleryModal .gallery").html('    \n    <div class="swiper-button-prev swiper-button-white"></div>\n    <div class="swiper-button-next swiper-button-white"></div>     \n    <div class="swiper-container gallery-slider">\n        <div class="swiper-wrapper">\n        </div>\n        <div class=\'swiper-pagination white d-block d-md-none position-relative mt-4\'></div>\n\n   \n    </div>\n<div class=\'fractions-pagination d-none d-md-flex  justify-content-center text-white text-center pt-3\'> </div>\n    <div class="swiper-container gallery-thumbs d-md-block d-none">\n        <div class="swiper-wrapper">\n        </div>\n    </div>\n            \n\n    ');
            var t = "";
            de.getJSON(e, (function(e) {
                de.each(e, (function(e, n) {
                    console.log(e, "ss", n.Image),
                    t += '<div class="swiper-slide" >\n                 <img src="'.concat(n.Image, '" alt="">\n               </div>')
                }
                )),
                de("#GalleryModal .gallery .gallery-slider .swiper-wrapper").html(t),
                de("#GalleryModal .gallery .gallery-thumbs .swiper-wrapper").html(t),
                setTimeout((function() {
                    var e = new ce(".gallery-slider",{
                        slidesPerView: 1,
                        centeredSlides: !0,
                        loop: !0,
                        loopedSlides: 6,
                        spaceBetween: 15,
                        pagination: {
                            el: "#GalleryModal .gallery .swiper-pagination",
                            type: "bullets",
                            clickable: "true"
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }
                    })
                      , t = new ce(".gallery-thumbs",{
                        slidesPerView: "auto",
                        spaceBetween: 10,
                        centeredSlides: !0,
                        loop: !0,
                        slideToClickedSlide: !0,
                        pagination: {
                            el: ".fractions-pagination",
                            type: "custom",
                            renderCustom: function(e, t, n) {
                                return t + "/" + n
                            }
                        }
                    });
                    e.controller.control = t,
                    t.controller.control = e,
                    de(".gallery-slider ,.gallery-thumbs ,.fractions-pagination ,.swiper-button-white").css("opacity", "1"),
                    de(".modal .loader").hide()
                }
                ), 450)
            }
            )),
            de("#GalleryModal").modal("show"),
            de(".modal .loader").show(),
            de(".gallery-slider ,.gallery-thumbs ,.fractions-pagination ,.swiper-button-white").css("opacity", "0")
        }
        )),
        de("#GalleryModal").on("shown.bs.modal", (function(e) {}
        ));
        var he = n(634)
          , fe = n.n(he)
          , me = n(755)
          , ge = []
          , ve = !1;
        function ye(e, t) {
            new URLSearchParams(window.location.search).forEach((function(e, t) {
                ge[t] = e.split(",")
            }
            ));
            var n = me("input[name*='" + e + "'][value='" + t + "']").parent(".theInput").find(".name").text()
              , i = me("input[name*='" + e + "'][value='" + t + "']").parents(".accordion-item").find(".accordion__title").text();
            function s(t) {
                if (me(".addedFilters").removeClass("hide"),
                me(".clearAll").removeClass("d-none"),
                me(".addedFilters .theFilters").find("." + e).length <= 0) {
                    var s = '<div class="filter '.concat(e, '" >\n                      <span class="name">\n                      ').concat(i, " : \n                         </span>\n                    </div>\n                 ");
                    me(".addedFilters .theFilters").append(s)
                }
                var r = ' <span class="the-filter px-2" theval= '.concat(t, "  theFilterName=").concat(e, ">\n            ").concat(n, '\n        \n            <button class="delete-filter">\n                <i class="fa fa-times"> </i>\n            </button>\n            </span>');
                me(".addedFilters .theFilters").find("." + e).append(r)
            }
            "sort" == e || "q" == e ? (ge[e] = [],
            ge[e] = [t]) : ge[e] && ge.hasOwnProperty(e) ? -1 != ge[e].indexOf(String(t)) ? (ge[e].splice(ge[e].indexOf(String(t)), 1),
            String(t),
            me(".addedFilters .theFilters").find("." + e).find("[theval='" + t + "']").remove(),
            me(".addedFilters .theFilters").find("." + e).find(".the-filter").length < 1 && me(".addedFilters .theFilters").find("." + e).remove(),
            me(".addedFilters .theFilters .filter").length < 1 && (me(".addedFilters").addClass("hide"),
            me(".clearAll").addClass("hide"))) : (ge[e].push(String(t)),
            s(String(t))) : (ge[e] = [String(t)],
            s(String(t)));
            var r = [];
            for (var o in ge)
                "page" != o && ge[o].length > 0 && r.push(o + "=" + ge[o].join(","));
            var a = window.location.href.split("#")[0];
            a = a.split("?")[0] + "?" + r.join("&"),
            window.history.pushState("", "", a),
            me(".listLoader").show(),
            me(".universties-list .filteredItemsView .list").load(a + " .filteredItemsView .list > *"),
            me(".universties-list .filteredItemsView .totalFound").load(a + " .filteredItemsView .totalFound "),
            me(".universties-list .filteredItemsView .side2").load(a + " .filteredItemsView .side2 > *"),
            me.ajax({
                url: a,
                type: "GET"
            }).done((function(e) {
                me(".listLoader").hide(),
                me(".universties-list .filteredItemsView .list").load(a + " .filteredItemsView .list > *"),
                me(".universties-list .filteredItemsView .totalFound").load(a + " .filteredItemsView .totalFound "),
                me(".universties-list .filteredItemsView .side2").load(a + " .filteredItemsView .side2 > *"),
                setTimeout((function() {
                    me(".universties-list .filteredItemsView .select2").each((function() {
                        var e = me(this)
                          , t = e.attr("searchShow");
                        t || (t = -1),
                        e.select2({
                            minimumResultsForSearch: t
                        })
                    }
                    ))
                }
                ), 100),
                me("html, body").animate({
                    scrollTop: me(".universties-list").offset().top - 50
                }, "slow")
            }
            ))
        }
        if (me("body").on("change", ".theInput.checkbox :checkbox", (function() {
            var e = me(this).attr("value")
              , t = me(this).attr("name");
            (me(window).width() > 992 || 1 == ve) && ye(t, e),
            ve = !1
        }
        )),
        me("body").on("change", ".filterby select", (function() {
            console.log("lolo");
            var e = me(this).val()
              , t = me(this).attr("name");
            me(window).width() > 992 && ye(t, e)
        }
        )),
        me("#university-autocomplete-input").length > 0) {
            me("#university-autocomplete-input");
            var be = me("#university-autocomplete-input").attr("placeholder");
            fe()(document.getElementById("university-autocomplete-input"), {
                source: universtiesList,
                placeholder: be,
                sourceMapping: {
                    value: "value",
                    label: "name"
                },
                multiple: !0,
                onConfirm: function(e) {
                    console.log(e.value),
                    me(window).width() > 992 && ye("q", e.value.toString())
                }
            })
        }
        if (me("#major-autocomplete-input").length > 0) {
            me("#major-autocomplete-input");
            var we = me("#major-autocomplete-input").attr("placeholder")
              , xe = me("#major-autocomplete-input").attr("filterName");
            fe()(document.getElementById("major-autocomplete-input"), {
                source: majorList,
                multiple: !0,
                placeholder: we,
                sourceMapping: {
                    value: "value",
                    label: "name"
                },
                onConfirm: function(e) {
                    console.log(e.value, "filter_name", xe);
                    var t = '<label class="theInput checkbox">\n\n            <span class="name">'.concat(e.name, ' </span>\n            <input type="checkbox" checked name=').concat(xe, "  value=").concat(e.value, '>\n            <span class="checkmark"></span>\n            </label>\n    ');
                    me("#major-autocomplete-input").closest(".filters").find(".theActieNow").append(t),
                    me(window).width() > 992 && ye(xe, e.value.toString())
                }
            })
        }
        me(".closeFilter , .close-bg").click((function() {
            me("body").removeClass("showFilter menuToggled")
        }
        )),
        me(document).on("click", ".delete-filter", (function(e) {
            var t = me(this).parent(".the-filter").attr("theval")
              , n = me(this).parent(".the-filter").attr("thefiltername");
            ve = !0,
            me("input[name*='" + n + "'][value*='" + t + "']").parent(".theInput").click()
        }
        )),
        me(".showFIlter").click((function() {
            me("body").addClass("showFilter")
        }
        )),
        n(347),
        n(140),
        n(423);
        var Ee, Te = n(755);
        window.jQuery = Te,
        window.$ = Te,
        n(734),
        Te(".scrollTo").click((function() {
            var e = Te(this).data("href");
            console.log(e),
            Te("html, body").animate({
                scrollTop: Te("#" + e).offset().top
            }, 2e3)
        }
        )),
        Te(window).width() > 768 && Te(".select2").each((function() {
            var e = Te(this)
              , t = e.attr("searchShow");
            function n(e) {
                var t = Te(e.element).attr("data-image");
                return Te(t ? '<div class="option-elemnt"> <span class="option-ico"><img src="' + t + '" width="25px" /> ' + e.text + "</span></div>" : '<div class="option-elemnt"><span class="option-ico">' + e.text + "</span></div>")
            }
            t || (t = -1),
            e.select2({
                minimumResultsForSearch: t,
                templateResult: n,
                templateSelection: n
            })
        }
        )),
        Te("body").delegate(".play-video", "click", (function(e) {
            Ee = Te(this).data("src"),
            console.log(Ee)
        }
        )),
        Te("#videoModal").on("show.bs.modal", (function(e) {
            Te("#videoModal #video").attr("src", Ee)
        }
        )),
        Te("#videoModal").on("hide.bs.modal", (function(e) {
            Te("#videoModal #video").attr("src", "")
        }
        ));
        var Se = 0;
        if (Te(window).scroll((function() {
            if (Te(".counter-box").length > 0) {
                var e = Te(".counter-box").offset().top - window.innerHeight;
                0 == Se && Te(window).scrollTop() > e && (Te(".counter").each((function() {
                    var e = Te(this)
                      , t = e.attr("data-number");
                    Te({
                        countNum: e.text()
                    }).animate({
                        countNum: t
                    }, {
                        duration: 3500,
                        easing: "swing",
                        step: function() {
                            e.text(Math.ceil(this.countNum).toLocaleString("en"))
                        },
                        complete: function() {
                            e.text(Math.ceil(this.countNum).toLocaleString("en"))
                        }
                    })
                }
                )),
                Se = 1)
            }
        }
        )),
        Te("#autocomplete-input").length > 0) {
            Te("#autocomplete-input");
            var _e = Te("#autocomplete-input").attr("placeholder")
              , Ce = Te(".listToAppendIn .custom-checkbox").eq(0).find("input").attr("name");
            fe()(document.getElementById("autocomplete-input"), {
                maxItems: 4,
                maxResults: 20,
                multiple: !0,
                placeholder: _e,
                source: studyList,
                sourceMapping: {
                    label: "name"
                },
                onConfirm: function(e) {
                    console.log("".concat(e.label, " (").concat(e.value, ") (").concat(e.icon, ")"));
                    var t = '<div class="custom-checkbox custom-input d-inline-block m-1">\n        <input name='.concat(Ce, " id=").concat(e.value, "  value=").concat(e.value, ' checked class="checkbox-custom" id="" type="checkbox">\n        <label  for=').concat(e.value, ' class="checkbox-custom-label p-2" for="">\n\n        <span class="d-block px-2"><img src=').concat(e.icon, ">").concat(e.label, "</span>\n    </label>\n    </div>");
                    Te(t).prependTo(".listToAppendIn")
                }
            });
            var Ae = Te(".steps-tabs   .active").parent("li")
              , $e = Te(".tabs-w-steps .tab-pane.active");
            Te(".steps-continue").click((function() {
                Ae = Te(".steps-tabs   .active").parent("li"),
                $e = Te(".tabs-w-steps .tab-pane.active"),
                Te($e).find("input:checked").length > 0 ? (Te(Ae).next("li").length > 0 && (Te(Ae).find("a").addClass("passed"),
                Te(Ae).next("li").find("a").addClass("passed").trigger("click")),
                0 == Te(Ae).next("li").length && Te(".steps-continue").attr("type", "submit")) : Te($e).find(".error").removeClass("d-none").addClass("d-block")
            }
            )),
            Te(".tabs-w-steps  .checkbox-custom").click((function() {
                Te($e).find(".error").removeClass("d-block").addClass("d-none")
            }
            ))
        }
        Te("body").on("click", ".enlarge-img", (function(e) {
            var t = Te(this).data("lg")
              , n = "<img  class='mx-auto text-center img-fluid' src=\"".concat(t, '">');
            Te(".LgImgModal .img-wrap").html(n),
            Te(".LgImgModal").modal("show")
        }
        ));
        var ke, De = Te(".contents-menu  .menu"), Le = Te(".header").outerHeight(), Oe = De.find("a"), Me = Oe.map((function() {
            var e = Te(Te(this).attr("href"));
            if (e.length)
                return e
        }
        ));
        Te(window).width() > 0 && Te(window).scroll((function() {
            var e = Te(this).scrollTop() + Le + 220
              , t = Me.map((function() {
                if (Te(this).offset().top < e)
                    return this
            }
            ))
              , n = (t = t[t.length - 1]) && t.length ? t[0].id : "";
            ke !== n && (ke = n,
            Oe.removeClass("active"),
            Oe.filter("[href='#" + n + "']").addClass("active"))
        }
        )),
        Oe.click((function(e) {
            Te(".contents-menu").collapse("hide");
            var t = Te(this).attr("href")
              , n = Te(t).offset().top - Le + 30
              , i = "#" === t ? 0 : n;
            Te(window).width() < 992 && (i = "#" === t ? 0 : n - 30 - Te(".contents-menu").outerHeight()),
            setTimeout((function() {
                Te("html, body").stop().animate({
                    scrollTop: i
                }, 200)
            }
            ), 30),
            e.preventDefault()
        }
        )),
        Te((function() {
            Te("[data-countdown]").each((function() {
                var e = Te(this)
                  , t = Te(this).data("countdown");
                e.countdown(t, (function(t) {
                    e.html(t.strftime('<span class="tim">%D</span> : <span class="tim">%H</span> : <span class="tim">%M</span> : <span class="tim">%S</span>'))
                }
                ))
            }
            ))
        }
        )),
        Te('a[data-toggle="tab"]').on("shown.bs.tab", (function(e) {
            var t = this;
            setTimeout((function() {
                Te("#myTabContent").offset().top,
                Te(t).closest(".nav-tabs").outerHeight();
                var n = Te(Te(e.target).attr("href")).closest(".tab-content").offset().top - Te(t).closest(".nav-tabs").outerHeight() - 100;
                Te("html, body").animate({
                    scrollTop: n
                }, 500)
            }
            ), 100)
        }
        ))
    }
    )()
}
)();
//# sourceMappingURL=main.min.js.map
