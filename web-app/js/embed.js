(function() {
    'use strict';
    var _config = window.disqus_config;
    window.disqus_config = function() {
        if (_config) _config.call(this);
        this.server_side = {
            "bin": "embed:promoted_discovery:dynamic:network_default_hidden:fallthrough",
            "service": "dynamic",
            "variant": "fallthrough",
            "bottom_placement_url": "",
            "engage_lite_html": "",
            "forum_id": "4306355",
            "experiment": "network_default_hidden",
            "top_placement_url": "",
            "engage_lite_url": ""
        };
    };
})();
! function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U = {},
        V = {},
        W = {},
        X = {},
        Y = {},
        Z = {},
        $ = {},
        _ = {};
    c = S = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b) }, d = T = function() {
        return function(a, b) {
            var c = a.length,
                d = Array.prototype.forEach;
            if (isNaN(c))
                for (var e in a) S(a, e) && b(a[e], e, a);
            else if (d) d.call(a, b);
            else
                for (var f = 0; c > f; f++) b(a[f], f, a) } }(), e = function() {
        var a = 0;
        return function(b) {
            var c = String(++a);
            return b ? b + c : c } }(), f = function() {
        var a = d,
            b = c,
            f = e,
            g = function(a) {
                var b, c = !1;
                return function() {
                    return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b) } },
            h = Object.keys || function(a) {
                if (a !== Object(a)) throw new TypeError("Invalid object");
                var c = [];
                for (var d in a) b(a, d) && (c[c.length] = d);
                return c },
            i = [].slice,
            j = { on: function(a, b, c) {
                    if (!l(this, "on", a, [b, c]) || !b) return this;
                    this._events = this._events || {};
                    var d = this._events[a] || (this._events[a] = []);
                    return d.push({ callback: b, context: c, ctx: c || this }), this }, once: function(a, b, c) {
                    if (!l(this, "once", a, [b, c]) || !b) return this;
                    var d = this,
                        e = g(function() { d.off(a, e), b.apply(this, arguments) });
                    return e._callback = b, this.on(a, e, c) }, off: function(a, b, c) {
                    var d, e, f, g, i, j, k, m;
                    if (!this._events || !l(this, "off", a, [b, c])) return this;
                    if (!a && !b && !c) return this._events = {}, this;
                    for (g = a ? [a] : h(this._events), i = 0, j = g.length; j > i; i++)
                        if (a = g[i], f = this._events[a]) {
                            if (this._events[a] = d = [], b || c)
                                for (k = 0, m = f.length; m > k; k++) e = f[k], (c && c !== e.context || b && b !== e.callback && b !== e.callback._callback) && d.push(e);
                            d.length || delete this._events[a] }
                    return this }, trigger: function(a) {
                    if (!this._events) return this;
                    var b = i.call(arguments, 1);
                    if (!l(this, "trigger", a, b)) return this;
                    var c = this._events[a],
                        d = this._events.all;
                    return c && m(c, b), d && m(d, arguments), this }, stopListening: function(a, b, c) {
                    var d = this._listeners;
                    if (!d) return this;
                    var e = !b && !c; "object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
                    for (var f in d) d[f].off(b, c, this), e && delete this._listeners[f];
                    return this } },
            k = /\s+/,
            l = function(a, b, c, d) {
                if (!c) return !0;
                if ("object" == typeof c) {
                    for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
                    return !1 }
                if (k.test(c)) {
                    for (var f = c.split(k), g = 0, h = f.length; h > g; g++) a[b].apply(a, [f[g]].concat(d));
                    return !1 }
                return !0 },
            m = function(a, b) {
                var c, d = -1,
                    e = a.length,
                    f = b[0],
                    g = b[1],
                    h = b[2];
                switch (b.length) {
                    case 0:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                        return;
                    case 1:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
                        return;
                    case 2:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
                        return;
                    case 3:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
                        return;
                    default:
                        for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b) } },
            n = { listenTo: "on", listenToOnce: "once" };
        return a(n, function(a, b) { j[b] = function(b, c, d) {
                var e = this._listeners || (this._listeners = {}),
                    g = b._listenerId || (b._listenerId = f("l"));
                return e[g] = b, "object" == typeof c && (d = this), b[a](c, d, this), this } }), j.bind = j.on, j.unbind = j.off, j }(), g = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a) }, h = function(a) {
        return "[object String]" === Object.prototype.toString.call(a) }, i = function(a) {
        return function(b) {
            return T(Array.prototype.slice.call(arguments, 1), function(c) {
                for (var d in c) a(c, d) && (b[d] = c[d]) }), b } }(c), j = function() {
        function a(a) {
            return a.replace(/\s+/g, "").toLowerCase() }
        var b = d,
            c = g,
            e = h,
            f = i;
        return function(d, g, h) {
            var i = {};
            e(g) ? i[g] = h : i = g;
            var j = f({}, i);
            b(j, function(b, c) {
                var d = a(c);
                d !== c && (delete j[c], j[d] = b), null === b && (j[d] = ""), void 0 === b && delete j[d] });
            var k = d.style;
            if (!c(k.setProperty)) {
                var l = {};
                b(k.cssText.split(";"), function(b) {
                    if (b) {
                        var c = b.split(":"),
                            d = c.shift(),
                            e = c.join(":");
                        l[a(d)] = e } });
                var m = f({}, l, j),
                    n = [];
                return b(m, function(a, b) { "" !== a && n.push(/!important/i.test(a) ? b + ":" + a : b + ":" + a + " !important") }), void(k.cssText = n.join(";")) }
            b(j, function(a, b) { k.setProperty(b, String(a), "important") }) } }(), k = function(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1);
        else {
            if (!a.attachEvent) throw new Error("No event support.");
            a.attachEvent("on" + b, c) } }, l = function(a, b, c) {
        if (a.removeEventListener) a.removeEventListener(b, c, !1);
        else {
            if (!a.detachEvent) throw new Error("No event support.");
            a.detachEvent("on" + b, c) } }, m = function(a, b, c) { c || (c = 0);
        var d, e, f, g, h = 0,
            i = function() { h = new Date, f = null, g = a.apply(d, e) };
        return function() {
            var j = new Date,
                k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(f), f = null, h = j, g = a.apply(d, e)) : f || (f = setTimeout(i, k + c)), g } }, U = function(b) {
        function d(a) {
            return t.getElementById(a) || t.body || t.documentElement }
        var g = f,
            n = j,
            p = h,
            q = c,
            r = i,
            s = e,
            t = a.document,
            u = {},
            v = t.createElement("a");
        b.getOffset = function(a, b) { b = b || t.documentElement;
            for (var c = a, d = 0, e = 0; c && c !== b;) d += c.offsetLeft, e += c.offsetTop, c = c.offsetParent;
            return { top: e, left: d, height: a.offsetHeight, width: a.offsetWidth } }, b.getHost = function(a) {
            return v.href = a, v.hostname }, b.addEvent = k, b.removeEvent = l, b.throttle = m, b.addEvent(a, "message", function(a) {
            var c, d = o;
            try { c = d.parse(a.data) } catch (e) {
                return }
            var f = c.sender,
                g = q(u, f) && u[f];
            g && b.getHost(a.origin) === g.host && (a.origin !== g.origin && (g.origin = a.origin), "host" === c.scope && g.trigger(c.name, c.data)) }, !1), b.addEvent(a, "hashchange", function() { b.trigger("window.hashchange", { hash: a.location.hash }) }, !1), b.addEvent(a, "resize", b.throttle(function() { b.trigger("window.resize") }, 250, 50), !1), b.addEvent(t, "mousemove", b.throttle(function() { b.trigger("window.mousemove") }, 250, 50), !1);
        var w = function() { b.trigger("window.scroll") };
        b.addEvent(a, "scroll", b.throttle(w, 250, 50)), b.addEvent(t, "click", function() { b.trigger("window.click") });
        var x = b.WindowBase = function(a) { a = a || {}, this.state = x.INIT, this.uid = a.uid || s("dsq-frame"), this.origin = a.origin, this.host = b.getHost(this.origin), this.target = a.target, this.window = null, u[this.uid] = this, this.on("ready", function() { this.state = x.READY }, this), this.on("die", function() { this.state = x.KILLED }, this) };
        r(x, { INIT: 0, READY: 1, KILLED: 2, postMessage: function(a, b, c) {
                return a.postMessage(b, c) } }), r(x.prototype, g), x.prototype.requiresWindow = function(a) {
            var b = this;
            return function() {
                var c = Array.prototype.slice.call(arguments),
                    d = function() {
                        var e = b.window;
                        e ? a.apply(b, c) : setTimeout(d, 500) };
                b.isReady() ? d() : b.on("ready", d) } }, x.prototype.sendMessage = function(a, b) {
            var c = o,
                d = c.stringify({ scope: "client", name: a, data: b });
            this.requiresWindow(function(a) { x.postMessage(this.window, a, this.origin) })(d) }, x.prototype.hide = function() {}, x.prototype.show = function() {}, x.prototype.url = function() {
            return this.target }, x.prototype.destroy = function() { this.state = x.KILLED, this.off() }, x.prototype.isReady = function() {
            return this.state === x.READY }, x.prototype.isKilled = function() {
            return this.state === x.KILLED };
        var y = b.Popup = function(a) { a.uid = a.windowName, x.call(this, a) };
        r(y.prototype, x.prototype), y.prototype.load = function() {
            var b = this.window = a.open("", this.uid || "_blank");
            b.location = this.url() }, y.prototype.isKilled = function() {
            return x.prototype.isKilled() || this.window.closed };
        var z = b.Iframe = function(a) { x.call(this, a), this.styles = a.styles || {}, this.tabIndex = a.tabIndex || 0, this.title = a.title || "Disqus", this.container = a.container, this.elem = null };
        r(z.prototype, x.prototype), z.prototype.load = function() {
            var a = this.elem = t.createElement("iframe");
            a.setAttribute("id", this.uid), a.setAttribute("name", this.uid), a.setAttribute("allowTransparency", "true"), a.setAttribute("frameBorder", "0"), a.setAttribute("scrolling", "no"), this.role && a.setAttribute("role", this.role), a.setAttribute("tabindex", this.tabIndex), a.setAttribute("title", this.title), this.setInlineStyle(this.styles) }, z.prototype.getOffset = function(a) {
            return b.getOffset(this.elem, a) }, z.prototype.setInlineStyle = function(a, b) {
            return n(this.elem, a, b) }, z.prototype.removeInlineStyle = function(a) {
            var b = this.elem.style;
            return "removeProperty" in b ? void b.removeProperty(a) : void(b[a] = "") }, z.prototype.hide = function() { this.setInlineStyle("display", "none") }, z.prototype.show = function() { this.removeInlineStyle("display") }, z.prototype.destroy = function() {
            return this.elem && this.elem.parentNode && (this.elem.parentNode.removeChild(this.elem), this.elem = null), x.prototype.destroy.call(this) };
        var A = b.Channel = function(a) {
            var b = this;
            b.window = null, z.call(b, a), this.insertBeforeEl = a.insertBeforeEl, this.insertAfterEl = a.insertAfterEl, b.styles = r({ width: "1px", "min-width": "100%", border: "none", overflow: "hidden", height: "0" }, a.styles || {}) };
        r(A.prototype, z.prototype), A.prototype.load = function(a) {
            var c = this;
            z.prototype.load.call(c);
            var e = c.elem;
            e.setAttribute("width", "100%"), e.setAttribute("src", this.url()), b.addEvent(e, "load", function() { c.window = e.contentWindow, a && a() });
            var f = p(c.container) ? d(c.container) : c.container,
                g = (c.insertAfterEl ? c.insertAfterEl.nextSibling : c.insertBeforeEl) || null;
            f.insertBefore(e, g) }, A.prototype.destroy = function() {
            return this.window = null, z.prototype.destroy.call(this) };
        var B = b.Sandbox = function(a) { z.call(this, a), this.contents = a.contents || "", this.styles = r({ width: "100%", border: "none", overflow: "hidden" }, a.styles || {}) };
        return r(B.prototype, z.prototype), B.prototype.load = function(a) { z.prototype.load.call(this);
            var b = this.elem,
                c = p(this.container) ? d(this.container) : this.container;
            c.appendChild(b), this.window = b.contentWindow;
            try { this.window.document.open() } catch (e) { b.src = 'javascript:var d=document.open();d.domain="' + t.domain + '";void(0);' }
            return this.document = this.window.document, this.document.write(this.contents), this.document.close(), this.updateHeight(), a && setTimeout(a, 0), this }, B.prototype.updateHeight = function() {
            var a, b = this.document.body;
            b && (a = b.offsetHeight + "px", this.setInlineStyle({ height: a, "min-height": a, "max-height": a })) }, B.prototype.show = function() { this.setInlineStyle("display", "block") }, B.prototype.click = function(a) {
            var c = this,
                d = c.document.body;
            b.addEvent(d, "click", function(b) { a.call(c, b) }) }, B.prototype.setBodyClass = function(a) { this.document.body.className = a }, b.on = g.on, b.off = g.off, b.trigger = g.trigger, b }(U), n = function() {
        var b = U,
            c = new b.Sandbox({ container: "disqus_thread", styles: { display: "none" } }).load();
        return function(b) {
            try {
                return c.window[b] || a[b] } catch (d) {
                return a[b] } } }(), o = function() {
        var b, c = n;
        return b = "[object JSON]" === a.Object.prototype.toString.call(a.JSON) ? a.JSON : c("JSON"), b ? b : {} }(), V = function(a) {
        var c = d;
        return a = function(a) {
            var d = [];
            return c(a, function(a, c) { a !== b && d.push(c + (null === a ? "" : "=" + encodeURIComponent(a))) }), d.join("&") } }(V), W = function(a) {
        var b = V;
        return a = function c(a, d, e) {
            if (d && (-1 === a.indexOf("?") ? a += "?" : "&" !== a.charAt(a.length - 1) && (a += "&"), a += b(d)), e) {
                var f = {};
                return f[(new Date).getTime()] = null, c(a, f) }
            var g = a.length;
            return "&" === a.charAt(g - 1) ? a.slice(0, g - 1) : a } }(W), X = function(b) {
        var c = W,
            d = a.document,
            e = d.head || d.getElementsByTagName("head")[0] || d.body;
        return b = function(a, b, f) {
            var g = d.createElement("script");
            g.src = c(a, b, f), g.async = !0, g.charset = "UTF-8", e.appendChild(g) } }(X), p = function(a) {
        var b;
        return function() {
            return a && (b = a.apply(this, arguments), a = null), b } }, q = function() {
        function b(b) { b = b || {};
            var c = b.Math || a.Math,
                d = b.Date || a.Date;
            try {
                var e = (new d).getTimezoneOffset(),
                    f = 1,
                    g = a.screen;
                g && g.availWidth ? f = g.availWidth * g.availHeight + g.colorDepth : g && g.width && (f = g.width * g.height);
                var h = a.document.documentElement,
                    i = h.clientWidth * h.clientHeight;
                return c.abs(17 * e + 25 * f - i) } catch (j) {
                return 1 } }
        return { get: b } }(), r = function(b) {
        function c(b) { b = b || {};
            var c = b.Uint32Array || a.Uint32Array,
                d = b.crypto || a.crypto,
                e = b.Math || a.Math;
            try {
                var f = new c(1);
                return d.getRandomValues(f), f[0] } catch (g) {
                return e.floor(1e9 * e.random()) } }

        function d() {
            var b = a.performance,
                c = b && b.timing;
            if (!c) return 1e5;
            var d = c.domainLookupEnd - c.domainLookupStart,
                e = c.connectEnd - c.connectStart,
                f = c.responseStart - c.navigationStart;
            return 11 * d + 13 * e + 17 * f }

        function e(e) { e = e || {};
            var f = e.Math || a.Math,
                g = Number((new Date).getTime().toString().substring(3)),
                h = f.abs(g + d() - b.get()).toString(32);
            return h += c(e).toString(32) }
        return { generate: e } }(q), s = function() {
        return a.getComputedStyle ? function(b, c, d) {
            return a.document.defaultView.getComputedStyle(b, null).getPropertyValue(c) } : function(a, b, c) {
            return a.currentStyle[b] || a.currentStyle[c] } }(), t = function() {
        function b(a) {
            return a.replace(/\s+/g, "").toLowerCase() }

        function c(a) {
            return a = a.replace(/^#([a-f0-9])([a-f0-9])([a-f0-9])$/, "#$1$1$2$2$3$3"), a = a.slice(1), { red: parseInt(a.slice(0, 2), 16), green: parseInt(a.slice(2, 4), 16), blue: parseInt(a.slice(4, 6), 16) } }

        function d(a) {
            var b = a.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
            return { red: parseInt(b[1], 10), green: parseInt(b[2], 10), blue: parseInt(b[3], 10) } }

        function e(a) {
            var b = a.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/);
            return { red: parseInt(b[1], 10), green: parseInt(b[2], 10), blue: parseInt(b[3], 10), alpha: parseFloat(b[4]) } }

        function f(b, c, d, e) {
            return c = a.document.createElement(c), h(c, { visibility: "hidden", color: d }), b.appendChild(c), d = e(c), b.removeChild(c), d }

        function g(c, e) { e = e || {};
            var g = e.container || a.document.body;
            return a.getComputedStyle ? (c = f(g, "span", c, function(b) {
                return a.getComputedStyle(b, null).getPropertyValue("color") }), d(b(c))) : (c = f(g, "textarea", c, function(a) {
                return a.createTextRange().queryCommandValue("ForeColor") }), { red: 255 & c, blue: c >>> 16, green: (65280 & c) >>> 8 }) }
        var h = j;
        return function(a, f) { a = b(a);
            var h;
            if ("transparent" === a) return { red: 0, green: 0, blue: 0, alpha: 0 };
            if ("#" === a.charAt(0)) h = c;
            else if ("rgba(" === a.slice(0, 5)) h = e;
            else if ("rgb(" === a.slice(0, 4)) h = d;
            else {
                if (!/^[a-z]+$/.test(a)) throw new Error("parseColor received unparseable color: " + a);
                h = g }
            return h(a, f) } }(), u = function() {
        function c(a) {
            if (!a || "embed.js" !== a.substring(a.length - 8)) return null;
            for (var b, c = [/(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i, /(https?:)?\/\/(www\.)?([\w_\-]+)\.disqus\.com/i, /(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i, /(https?:)?\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i], d = c.length, e = 0; d > e; e++)
                if (b = a.match(c[e]), b && b.length && 4 === b.length) return b[3];
            return null }

        function d(a, b) {
            var d, e, f, g = a.getElementsByTagName("script"),
                h = g.length;
            b = b || c;
            for (var i = h - 1; i >= 0; i--)
                if (d = g[i], e = d.getAttribute ? d.getAttribute("src") : d.src, f = b(e), null !== f) return f.toLowerCase();
            return null }

        function e(a, b) {
            var c, d, e = 0,
                f = new Array(a.length);
            for (c = 0; c <= a.length; c++)
                for (f[c] = new Array(b.length), d = 0; d <= b.length; d++) f[c][d] = 0;
            for (c = 0; c < a.length; c++)
                for (d = 0; d < b.length; d++) a[c] === b[d] && (f[c + 1][d + 1] = f[c][d] + 1, f[c + 1][d + 1] > e && (e = f[c + 1][d + 1]));
            return e }

        function f() {
            for (var a = z.getElementsByTagName("h1"), c = z.title, d = c.length, f = c, g = .6, h = function(a) {
                    var h, i = a.textContent || a.innerText;
                    null !== i && i !== b && (h = e(c, i) / d, h > g && (g = h, f = i)) }, i = 0; i < a.length; i++) h(a[i]);
            return f }

        function g(a) {
            return a.toLowerCase().replace(/^\s+|\s+$/g, "").replace(/['"]/g, "") }

        function i(a) {
            var b = 0,
                c = 1,
                d = 2;
            if (!a.postMessage) return c;
            if (!a.JSON) return "Microsoft Internet Explorer" === a.navigator.appName ? d : c;
            try { a.postMessage("ping", "*") } catch (e) {
                return d }
            return b }

        function j(b) {
            (new a.Image).src = w(y + "/stat.gif", { event: b }) }

        function k(b) {
            (new a.Image).src = w(y + "/event.gif", b) }

        function l(a, b, c) {
            if (c = c || b, a === z) return "";
            var d = u(a, b, c);
            return "" === d || /color/i.test(b) && 0 === v(d).alpha ? l(a.parentNode, b, c) || d : d || null }

        function m(a, b, c, d) { r(b) && (b = z.createElement(b));
            var e = null;
            return b.style.visibility = "hidden", a.appendChild(b), e = l(b, c, d), a.removeChild(b), e }

        function n(a) {
            for (var b, c = m(a, "span", "font-family", "fontFamily"), d = c.split(","), e = { courier: 1, times: 1, "times new roman": 1, georgia: 1, palatino: 1, serif: 1 }, f = 0; f < d.length; f++)
                if (b = g(d[f]), e.hasOwnProperty(b)) return !0;
            return !1 }

        function o(a) {
            var b = z.createElement("a");
            return b.href = Number(new Date), v(m(a, b, "color"), { container: a }) }

        function p(a) {
            var b = a.red,
                c = a.green,
                d = a.blue;
            if (a.hasOwnProperty("alpha")) {
                var e = a.alpha,
                    f = function(a) {
                        return Math.round(a * e + 255 * (1 - e)) };
                b = f(b), c = f(c), d = f(d) }
            return (299 * b + 587 * c + 114 * d) / 1e3 }

        function q(a) {
            var b = m(a, "span", "background-color", "backgroundColor"),
                c = v(b, { container: a });
            return 0 === c.alpha ? "light" : p(c) < 128 ? "dark" : "light" }
        var r = h,
            u = s,
            v = t,
            w = W,
            x = U,
            y = "https://referrer.disqus.com/juggler",
            z = a.document,
            A = function() {
                var a, b, c = function() {
                    return !1 };
                if ("hidden" in z) a = "hidden", b = "visibilitychange";
                else {
                    if (!("webkitHidden" in z)) return { isHidden: c, listen: c, stopListening: c };
                    a = "webkitHidden", b = "webkitvisibilitychange" }
                return { isHidden: function() {
                        return z[a] }, listen: function(a) {
                        return x.addEvent(z, b, a) }, stopListening: function(a) {
                        return x.removeEvent(z, b, a) } } }(),
            B = function() {
                var a = z.createElement("div");
                a.style.visibility = "hidden", a.style.width = "100px", a.style.msOverflowStyle = "scrollbar", z.body.appendChild(a);
                var b = a.offsetWidth;
                a.style.overflow = "scroll";
                var c = z.createElement("div");
                c.style.width = "100%", a.appendChild(c);
                var d = c.offsetWidth;
                return a.parentNode.removeChild(a), b - d },
            C = function(a) {
                var b = a.split("."),
                    c = b.length > 2 ? b[b.length - 2] : "";
                return c.match(/^[0-9a-f]{32}$/i) && c },
            D = { isIE: function() {
                    return Boolean(z.documentMode) }, isSafari: function() {
                    var b = a.navigator.userAgent.toLowerCase();
                    return b.indexOf("safari") > -1 && -1 === b.indexOf("chrome") } },
            E = { getItem: function(b) {
                    try {
                        return a.localStorage.getItem(b) } catch (c) {} }, setItem: function(b, c) {
                    try {
                        return a.localStorage.setItem(b, c) } catch (d) {} } },
            F = function() {
                var a = !1;
                return a || "https:" === z.location.protocol },
            G = 1,
            H = function(a) {
                if (a.nodeType === G) {
                    var b = u(a, "max-height", "maxHeight"),
                        c = u(a, "overflow-y", "overflowY");
                    return b && "none" !== b && c && "visible" !== c } },
            I = 4,
            J = function(a) {
                return a.nodeType === G ? a.scrollHeight - a.clientHeight > I : void 0 },
            K = function() {
                if (z.querySelector) {
                    var a = z.querySelector("link[rel=canonical]");
                    if (a) return a.href } };
        return { MAX_Z_INDEX: 2147483647, getShortnameFromUrl: c, getForum: d, guessThreadTitle: f, getContrastYIQ: p, getColorScheme: q, getElementStyle: m, getAnchorColor: o, normalizeFontValue: g, isSerif: n, getBrowserSupport: i, logStat: j, reportJester: k, pageVisibility: A, getScrollbarWidth: B, getLoaderVersionFromUrl: C, browser: D, storage: E, defaultProtocol: F() ? "https:" : "http:", appearsToHideContent: H, hasOverflow: J, getCanonicalUrl: K } }(), v = function() {
        var a = d,
            c = r,
            e = n,
            f = u,
            g = function(a, c) { this.win = a, this.configurator = c, this.config = { page: { url: b, title: b, slug: b, category_id: b, identifier: b, language: b, api_key: b, remote_auth_s3: b, author_s3: b }, experiment: { enable_scroll_container: !0, force_auto_styles: b, sort_order: b, force_mobile: b }, server_side: { service: "static", experiment: "default", variant: "control", top_placement_url: b, bottom_placement_url: b, engage_lite_html: b, engage_lite_url: b, forum_id: b }, discovery: { disable_all: b, disable_promoted: b, sponsored_comment_id: b, preview: !1, adsFixture: b, pdFixture: b }, strings: b, sso: {}, callbacks: { preData: [], preInit: [], onInit: [], afterRender: [], onReady: [], onNewComment: [], preReset: [], onPaginate: [], onIdentify: [], beforeComment: [] } } };
        g.DISQUS_GLOBALS = ["shortname", "identifier", "url", "title", "category_id", "slug"];
        var h = g.prototype;
        return h.getContainer = function() {
            var a = this.win;
            return a.document.getElementById(a.disqus_container_id || "disqus_thread") }, h.runConfigurator = function() {
            var a = this.configurator || this.win.disqus_config;
            if ("function" == typeof a) try { a.call(this.config) } catch (b) {} }, h.getValuesFromGlobals = function() {
            var b, c = this.win,
                d = this.config,
                e = d.page;
            a(g.DISQUS_GLOBALS, function(a) {
                var b = c["disqus_" + a]; "undefined" != typeof b && (e[a] = b) }), this.runConfigurator(), d.forum || (b = e.shortname, d.forum = b ? b.toLowerCase() : f.getForum(c.document)) }, h.toJSON = function() {
            var a, b = this.win,
                d = this.config,
                g = d.page,
                h = this.getContainer();
            return this.getValuesFromGlobals(), (d.server_side.top_placement_url || d.server_side.bottom_placement_url) && (a = c.generate({ Math: e("Math"), crypto: e("crypto"), Uint32Array: e("Uint32Array"), Date: e("Date") })), { impressionId: a || null, container: h, forum: d.forum, sortOrder: d.experiment.sort_order || f.storage.getItem("disqus.sort") || "default", language: d.language, typeface: f.isSerif(h) ? "serif" : "sans-serif", anchorColor: f.getAnchorColor(h), colorScheme: f.getColorScheme(h), canonicalUrl: f.getCanonicalUrl(), url: g.url || b.location.href.replace(/#.*$/, ""), title: g.title, documentTitle: f.guessThreadTitle(), slug: g.slug, category: g.category_id, identifier: g.identifier, discovery: d.discovery, experimentName: d.server_side.experiment, experimentVariant: d.server_side.variant, experimentService: d.server_side.service, forumId: d.server_side.forum_id, topPlacementUrl: d.server_side.top_placement_url, bottomPlacementUrl: d.server_side.bottom_placement_url, apiKey: g.api_key, remoteAuthS3: g.remote_auth_s3, sso: d.sso, unsupported: f.getBrowserSupport(b), callbacks: d.callbacks, enableScrollContainer: d.experiment.enable_scroll_container, forceAutoStyles: d.experiment.force_auto_styles, forceMobile: d.experiment.force_mobile, engageLiteHTML: d.server_side.engage_lite_html, engageLiteURL: d.server_side.engage_lite_url } }, { HostConfig: g } }(), w = function() {
        var a;
        return a = "undefined" == typeof console ? function() {} : "function" == typeof console.log ? function() {
            return console.log(Array.prototype.slice.call(arguments, 0).join(" ")) } : function() {
            return console.log.apply(console, arguments) }, { log: a } }(), x = function(a) {
        try {
            return a.self !== a.top } catch (b) {
            return !0 } }, y = function(a) {
        return Boolean(a && (a.offsetWidth || a.offsetHeight || a.getClientRects().length)) }, z = function(a, b, c) {
        var d = function() {
            var e = a();
            return e ? void b(e) : void setTimeout(d, c) };
        d() }, A = function() {
        var b = s,
            c = a.document.body;
        return function() {
            var a = c.offsetHeight,
                d = parseInt(b(c, "margin-top", "marginTop"), 10);
            d && (a += d);
            var e = parseInt(b(c, "margin-bottom", "marginBottom"), 10);
            return e && (a += e), a } }(), B = function() {
        var b = i,
            c = W,
            d = "default",
            e = { lounge: "http://disqus.com/embed/comments/", home: "https://disqus.com/home/".replace("home/", "") },
            f = function(a, b) {
                return /^http/.test(b) || (b = "http:"), b + "//" + a.replace(/^\s*(\w+:)?\/\//, "") },
            g = function(g, h, i) {
                var j = e[g];
                if (!j) throw new Error("Unknown app: " + g);
                var k = f(j, a.document.location.protocol),
                    l = b({ base: d }, h || {}),
                    m = i ? "#" + encodeURIComponent(JSON.stringify(i)) : "";
                return c(k, l) + m };
        return { BASE: d, apps: e, get: g, ensureHttpBasedProtocol: f } }(), C = function() {
        var b = f,
            d = s,
            g = A,
            h = y,
            j = i,
            k = c,
            l = e,
            m = B,
            n = U,
            o = u,
            p = a.document,
            q = p.documentElement,
            r = p.location.protocol,
            t = function(a) { this.uid = l("dsq-app"), this.settings = a || {};
                var b = [],
                    c = this.constructor.prototype;
                do b.unshift(c), c = c.constructor.__super__; while (c);
                for (var d = 0, e = b.length; e > d; d++) c = b[d], k(c, "events") && this.on(c.events, this), k(c, "onceEvents") && this.once(c.onceEvents, this) };
        j(t.prototype, b), t.prototype.destroy = function() { this.off(), this.stopListening() }, t.extend = function(a, b) {
            var c, d = this;
            c = a && k(a, "constructor") ? a.constructor : function() {
                return d.apply(this, arguments) }, j(c, d, b);
            var e = function() { this.constructor = c };
            return e.prototype = d.prototype, c.prototype = new e, a && j(c.prototype, a), c.__super__ = d.prototype, c };
        var v = t.extend({ name: null, loaderVersion: null, frame: null, origin: m.ensureHttpBasedProtocol("http://disqus.com", r), state: null, getUrl: function(a, b) {
                    return a = this.loaderVersion ? j({ version: this.loaderVersion }, a) : j({ disqus_version: "4ba5ba1" }, a), m.ensureHttpBasedProtocol(m.get(this.name, a, b), r) }, getFrameSettings: function() {
                    var a = { target: this.getUrl(), origin: this.origin, uid: this.uid },
                        b = this.settings;
                    return b.windowName ? a.windowName = b.windowName : a.container = b.container || p.body, a }, getFrame: function() {
                    var a = this.getFrameSettings(),
                        b = a.windowName ? n.Popup : n.Channel;
                    return new b(a) }, setState: function(a) {
                    var b = this.constructor;
                    return a in b.states ? (this.state = b.states[a], void this.trigger("state:" + a)) : !1 }, init: function() {
                    var a, b = this;
                    b.frame = a = this.getFrame(), b.listenTo(a, "all", function(c, d) { b.trigger("frame:" + c, d, a) }), b.trigger("change:frame", a), b.frame.load(function() { b.setState("LOADED") }), b.setState("INIT") }, destroy: function() {
                    var a = this.frame;
                    a && (this.stopListening(a), a.destroy()), this.setState("KILLED"), this.frame = null, t.prototype.destroy.call(this) }, events: { "frame:ready": function() { this.setState("READY") } }, isHeightRestricted: function(a) {
                    function b() {
                        return o.appearsToHideContent(d) || f && o.appearsToHideContent(e) }

                    function c() {
                        return o.appearsToHideContent(d) && o.hasOverflow(d) || f && o.appearsToHideContent(e) && o.hasOverflow(e) }
                    a = a || {};
                    var d = this.settings.container,
                        e = d.parentNode,
                        f = e !== q && e !== p.body;
                    return a.checkScrollHeight ? c() : b() } }, { states: { INIT: 0, LOADED: 1, READY: 2, RUNNING: 3, KILLED: 4 } }),
            w = v.extend({ getUrl: function() {
                    var b = this.settings,
                        c = { f: b.forum, t_i: b.identifier, t_u: b.url || a.location.href, t_s: b.slug, t_e: b.title, t_d: b.documentTitle, t_t: b.title || b.documentTitle, t_c: b.category, s_o: b.sortOrder, l: b.language };
                    return b.unsupported && (c.n_s = b.unsupported), v.prototype.getUrl.call(this, c) }, getFrameInitParams: function(b) {
                    var c = this.settings,
                        d = { permalink: c.permalink, anchorColor: c.anchorColor, referrer: a.location.href, hostReferrer: p.referrer, canonicalUrl: c.canonicalUrl, colorScheme: c.colorScheme, typeface: c.typeface, remoteAuthS3: c.remoteAuthS3, apiKey: c.apiKey, sso: c.sso, parentWindowHash: a.location.hash, forceAutoStyles: c.forceAutoStyles, forceMobile: c.forceMobile, layout: c.layout, timestamp: this.timestamp, embedLoadTime: this.getBootloaderTimingInfo(), isHeightRestricted: this.isHeightRestricted() };
                    return d.initialPosition = this.getViewportAndScrollStatus(), d }, listenToScrollEvent: function(a) {
                    var b = this,
                        c = b.getScrollContainer();
                    if (c === q) return b.listenTo(n, "window.scroll", a),
                        function() { b.stopListening(n, "window.scroll", a) };
                    var d = n.throttle(function() { a.call(b) }, 250, 50);
                    return n.addEvent(c, "scroll", d),
                        function() { n.removeEvent(c, "scroll", d) } }, getScrollContainer: function() {
                    if (this.scrollContainer) return this.scrollContainer;
                    if (!this.settings.enableScrollContainer) return q;
                    var a = this.settings.container;
                    do {
                        var b = d(a, "overflow-y", "overflowY");
                        if (("scroll" === b || "auto" === b) && a.clientHeight < a.scrollHeight) break;
                        a = a.parentNode } while (a && a !== q);
                    return a && a !== p.body || (a = q), this.scrollContainer = a }, getViewportCoords: function() {
                    return this.getScrollContainer() === q ? this.getWindowCoords() : this.getScrollContainerCoords() }, getWindowCoords: function() {
                    if ("number" == typeof a.pageYOffset) this.getWindowScroll = function() {
                        return a.pageYOffset }, this.getWindowHeight = function() {
                        return a.innerHeight };
                    else {
                        var b = q.clientHeight || q.clientWidth ? q : p.body;
                        this.getWindowScroll = function() {
                            return b.scrollTop }, this.getWindowHeight = function() {
                            return b.clientHeight } }
                    return this.getWindowCoords = function() {
                        return { top: this.getWindowScroll(), height: this.getWindowHeight() } }, this.getWindowCoords() }, getScrollContainerCoords: function() {
                    var a = this.getScrollContainer();
                    return { top: a.scrollTop, height: a.clientHeight } }, getBootloaderTimingInfo: function() {
                    if (a.performance && a.performance.getEntriesByName) {
                        var b = p.currentScript ? p.currentScript.src : r + "//" + this.settings.forum + ".disqus.com/embed.js",
                            c = a.performance.getEntriesByName(b)[0];
                        return c && c.duration } }, getViewportAndScrollStatus: function() {
                    var a = this.frame;
                    if (!a || !a.getOffset) return null;
                    if (!h(a.elem)) return null;
                    var b = this.getViewportCoords();
                    return { frameOffset: a.getOffset(this.getScrollContainer()), pageOffset: b.top, height: b.height } }, communicateViewportAndScrollStatus: function() {
                    var a = this.getViewportAndScrollStatus();
                    if (a) {
                        var b = a.frameOffset,
                            c = b.top,
                            d = c + b.height,
                            e = a.pageOffset,
                            f = a.height,
                            g = e + f,
                            h = !1,
                            i = !1;
                        g + f >= c && (h = d >= e, i = h && g >= c);
                        var j = this.frame;
                        j.sendMessage("window.scroll.always", a), h && j.sendMessage("window.scroll", a), i !== this.wasInViewport && (j.sendMessage(i ? "window.inViewport" : "window.scrollOffViewport"), this.wasInViewport = i) } }, getBestNextFrameHeight: function(a) {
                    var b = this.getViewportAndScrollStatus();
                    if (!b || this.settings.enableScrollContainer || !this.getScrollContainer()) return a;
                    var c = b.frameOffset;
                    if (a >= c.height) return a;
                    var d = g(),
                        e = d - (c.height + c.top),
                        f = b.pageOffset + b.height - (c.top + e);
                    return f > a ? f + 1 : a }, events: { "state:INIT": function() { this.settings.unsupported || (this.settings.windowName || (this.listenToScrollEvent(this.communicateViewportAndScrollStatus), this.listenTo(n, "window.resize", this.communicateViewportAndScrollStatus)), this.timestamp = Number(new Date)) }, "state:LOADED": function() {
                        var a = this.frame,
                            b = a.elem;
                        this.settings.unsupported ? (a.setInlineStyle("height", "500px"), b.setAttribute("scrolling", "yes"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "yes"), a.show()) : this.settings.windowName || (this.rendered = !1, a.setInlineStyle("height", "0"), b.setAttribute("scrolling", "no"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "no")) }, "frame:ready": function(a, b) {
                        var c = this.getFrameInitParams(a, b);
                        b.sendMessage("init", c) }, "frame:resize": function(a, b) {
                        var c = a.height;
                        b.elem && this.rendered && (c = this.getBestNextFrameHeight(c), b.setInlineStyle("height", c + "px"), b.sendMessage("embed.resized")), this.communicateViewportAndScrollStatus() }, "frame:rendered": function(a, b) { this.rendered = !0, this.wasInViewport = !1, b.trigger("resize", a), b.sendMessage("embed.rendered") }, "frame:fail": function(a, b) { b.elem && b.setInlineStyle("height", a && a.height || "75px") }, "frame:scrollTo": function(b, c) {
                        if (c.elem && c.getOffset) {
                            var d = this.getScrollContainer(),
                                e = c.getOffset(d),
                                f = "window" === b.relative ? b.top : e.top + b.top,
                                g = this.getViewportCoords();!b.force && f > g.top && f < g.top + g.height || (d === q ? a.scrollTo(0, f) : d.scrollTop = f) } } } });
        return { protocol: r, BaseApp: t, WindowedApp: v, ThreadBoundApp: w } }(), D = function() {
        var b = s,
            c = W,
            d = u,
            e = B,
            f = C.WindowedApp,
            g = a.document,
            h = /^calc\((.+)\)$/,
            i = f.extend({ name: "home", events: { "frame:close": function(b, c) { c.hide(), a.focus() }, "frame:openReady": function() { this.frame.show(), this.frame.sendMessage("open"), (d.browser.isIE() || d.browser.isSafari()) && this.preventScrolling() }, "state:LOADED": function() { this.frame.removeInlineStyle("visibility") }, "frame:after:render": function() { d.browser.isSafari() && this.triggerHostReflow() } }, preventScrolling: function() {
                    var a = this.getBodyOverflow(),
                        c = g.body.style.marginRight,
                        d = g.documentElement.style,
                        e = d.overflow;
                    this.listenToOnce(this, "frame:close", function() { this.setBodyStyles({ overflow: a, marginRight: c }), d.overflow = e }), this.setBodyStyles({ overflow: "hidden", marginRight: this.calcMargin(b(g.body, "margin-right", "marginRight") || c) }), d.overflow = "hidden" }, triggerHostReflow: function() {
                    var a = g.createElement("style");
                    g.body.appendChild(a), g.body.removeChild(a) }, calcMargin: function(a) {
                    var b = a.match(h);
                    return b && (a = b[1]), a ? "calc(" + a + " + " + d.getScrollbarWidth() + "px)" : d.getScrollbarWidth() + "px" }, setBodyStyles: function(a) {
                    for (var b in a) g.body.style[b] = a[b] }, getBodyOverflow: function() {
                    return g.body.style.overflow }, getSecureOrigin: function() {
                    var a = e.ensureHttpBasedProtocol("https://disqus.com/home/", "https:"),
                        b = a.split("/"),
                        c = b[0],
                        d = b[2];
                    return c + "//" + d }, getFrameSettings: function() {
                    var a = f.prototype.getFrameSettings.call(this);
                    return a.role = "dialog", a.origin = this.getSecureOrigin(), a.styles = { height: "100%", position: "fixed", top: 0, right: 0, left: "auto", bottom: "auto", "z-index": d.MAX_Z_INDEX, visibility: "hidden" }, a }, getUrl: function() {
                    var a = this.settings.path || "",
                        b = this.settings.language,
                        d = { utm_source: "disqus_embed" };
                    return b && "en" !== b && (d.l = b), c(e.apps[this.name] + a, d) }, show: function(a) {
                    if (!this.frame.isReady()) return void this.once("frame:ready", function() { this.show(a) }, this);
                    var b = { path: a };
                    this.settings.sso && (b.sso = this.settings.sso), this.frame.sendMessage("showPath", b) } }, { READY_TIMEOUT: 1e4, getInstanceOrLoad: function(a) {
                    var b = i.instance;
                    return b ? b : (b = i.instance = new i(a), a.preload && b.listenToOnce(b, "state:INIT", function() { b.frame.hide() }), i.setHomeTimeout(b), b.init(), b) }, setHomeTimeout: function(a) { i.homeTimeoutId && clearTimeout(i.homeTimeoutId);
                    var b = i.homeTimeoutId = setTimeout(function() { a.frame.destroy(), a.trigger("timeout") }, i.READY_TIMEOUT);
                    a.listenToOnce(a, "state:READY", function() { clearTimeout(b) }) }, preload: function(a) {
                    return a.preload = !0, i.getInstanceOrLoad(a) }, destroy: function() {
                    var a = i.instance;
                    a && (a.destroy(), i.instance = null) }, show: function(a) {
                    var b = i.getInstanceOrLoad(a);
                    return b.show(a.path), b } });
        return { show: i.show, preload: i.preload, destroy: i.destroy, _HomeApp: i } }(), E = function() {
        var b = a.document,
            c = d,
            e = x,
            f = X,
            g = i,
            h = y,
            j = z,
            k = C.ThreadBoundApp,
            l = U,
            m = w,
            n = u,
            o = D,
            p = k.extend({
                name: "lounge",
                loaderVersion: n.getLoaderVersionFromUrl("//a.disquscdn.com/next/embed/lounge.load.54091cfc9e1316883d3ae3983a0a35a6.js"),
                indicators: null,
                wasInViewport: !1,
                triggeredSlowEvent: !1,
                events: {
                    "state:INIT": function() {
                        var a = this.settings,
                            b = a.server_side;
                        b && "fallback" === b.service && n.logStat("embed.fallback"), a.unsupported || (this.indicators = {}, this.isContainerVisible() ? this.addLoadingAnim() : this.addLoadingAnimOnContainerVisible(), this.bindPublisherCallbacks(), this.forwardGlobalEvents()) },
                    "state:LOADED": function() { this.isContainerVisible() && this.addLoadingAnim() },
                    "frame:reload": function() { a.location.reload() },
                    "frame:navigate": function(b) { a.location.href = b },
                    "frame:session.identify": function(a) { this.trigger("session.identify", a) },
                    "frame:posts.paginate": function() { this.trigger("posts.paginate") },
                    "frame:posts.count": function(a) { this.trigger("posts.count", a) },
                    "frame:posts.create": function(a) {
                        this.trigger("posts.create", { id: a.id, text: a.raw_message })
                    },
                    "frame:posts.beforeCreate": function(a) { this.onBeforePostCreate(a) },
                    "frame:home.destroy": function() { this.destroyHome() },
                    "frame:home.preload": function(a) { this.preloadHome(a) },
                    "frame:home.show": function(a) { this.showHome(a) },
                    "frame:home.open": function(b) { a.location = b },
                    "frame:indicator:init": function(a, b) {
                        if (b.getOffset) {
                            for (var c, d, e = ["north", "south"], f = this.indicators, h = b.getOffset().width + "px", i = { width: h, "min-width": h, "max-width": h, position: "fixed", "z-index": n.MAX_Z_INDEX - 1 }, j = { north: { top: "0" }, south: { bottom: "0" } }, k = function() { b.sendMessage("indicator:click", this.uid.split("-")[1]) }, m = 0; m < e.length; m++) { d = e[m], c = new l.Sandbox({ uid: "indicator-" + d, container: this.settings.container, contents: a[d].contents, styles: g(j[d], i), role: "alert", type: d });
                                try { c.load() } catch (o) {
                                    continue }
                                c.hide(), c.click(k), f[d] = c }
                            this.on({ "frame:indicator:show": function(a) {
                                    var b = f[a.type];
                                    b && (b.document.getElementById("message").innerHTML = a.content, b.show()) }, "frame:indicator:hide": function(a) {
                                    var b = a && a.type,
                                        c = b && f[b];
                                    if (c) c.hide();
                                    else if (!b)
                                        for (var d = 0; d < e.length; d++) b = e[d], c = f[b], c && c.hide() } }) } },
                    "frame:change:sort": function(a) { n.storage.setItem("disqus.sort", a) },
                    "frame:fail frame:rendered": function() { this.removeLoadingAnim(), this.setState("RUNNING") },
                    "frame:fail": function(a) { n.logStat("failed_embed.server." + a.code) },
                    "frame:rendered": function() { this.triggeredSlowEvent && n.logStat("rendered_embed.slow") }
                },
                onceEvents: { "frame:viglink:init": function(b, c) {
                        var d = function() {
                            for (var b in a)
                                if (0 === b.indexOf("skimlinks") || 0 === b.indexOf("skimwords")) return !0;
                            return !1 };
                        if (!(a.vglnk_self || a.vglnk || d())) {
                            var e = b.apiUrl,
                                g = b.key,
                                h = String(b.id);
                            null != b.clientUrl && null != e && null != g && null != b.id && (this.listenForAffiliationRequests(e, g, h), DISQUS.vglnk = { api_url: e, key: g, sub_id: h, onlibready: function() { c.sendMessage("viglink:change:timeout", { timeout: DISQUS.vglnk.opt("click_timeout") }) } }, a.vglnk_self = "DISQUS.vglnk", f(b.clientUrl)) } } },
                getFrameInitParams: function(b, c) {
                    var d = k.prototype.getFrameInitParams.call(this, b, c);
                    return d.experiment = { experiment: this.settings.experimentName, variant: this.settings.experimentVariant, service: this.settings.experimentService }, d.isBehindClick = this.isHeightRestricted() || !h(c.elem), d.discovery = this.settings.discovery, this.settings.impressionId && (d.impressionId = this.settings.impressionId), (this.settings.discoveryDisabled || e(a)) && (d.discoveryDisabled = !0), d },
                onBeforePostCreate: function(a) {
                    var b = { text: a.raw_message };
                    try {
                        var c = this.settings.callbacks.beforeComment;
                        if (c)
                            for (var d = 0; d < c.length; d++) b = c[d](b) } catch (e) { m.log("Error processing Disqus callback: ", e.toString()) } finally { this.frame.sendMessage("posts.beforeCreate.response", b && b.text) } },
                destroyHome: function() { o.destroy() },
                preloadHome: function(a) { a.path = "home/preload/";
                    var b = this.home = o.preload(this.getHomeData(a));
                    this.listenToOnce(b, "frame:ready", function() { this.frame.sendMessage("home.ready") }), this.handleHomeTimeout(b) },
                handleHomeTimeout: function(a) { this.listenTo(a, "timeout", function() { this.frame.sendMessage("home.timeout") }) },
                showHome: function(a) {
                    var b = this.home = o.show(this.getHomeData(a));
                    this.listenToOnce(b, "frame:openReady", function() { this.frame.sendMessage("home.opened") }), this.handleHomeTimeout(b) },
                getHomeData: function(a) {
                    var b = this.settings;
                    return a.language || (a.language = b.language), b.apiKey && b.remoteAuthS3 && (a.sso = { apiKey: b.apiKey, remoteAuthS3: b.remoteAuthS3 }), a },
                listenForAffiliationRequests: function(a, b, c) {
                    var d = this.frame;
                    this.on("frame:viglink:getaffiliatelink", function(e) {
                        function f(a) {
                            return function(b) {
                                var c = { linkId: a };
                                b && (c.url = b), d.sendMessage("viglink:getaffiliatelink:response", c) } }
                        var g = DISQUS.vglnk.$;
                        return g ? void g.request(a + "/click", { format: "jsonp", out: e.url, key: b, loc: d.target, subId: c }, { fn: f(e.linkId), timeout: DISQUS.vglnk.opt("click_timeout") }) : void d.sendMessage("viglink:getaffiliatelink:response") }) },
                forwardGlobalEvents: function() {
                    var a = this;
                    a.settings.windowName || (a.listenTo(l, "window.resize", function() { a.frame.sendMessage("window.resize") }), a.listenTo(l, "window.click", function() { a.frame.sendMessage("window.click") }), a.listenTo(l, "window.mousemove", function() { a.frame.sendMessage("window.mousemove") })), a.listenTo(l, "window.hashchange", function(b) { a.frame.sendMessage("window.hashchange", b.hash) }) },
                bindPublisherCallbacks: function() {
                    var a = this,
                        b = a.settings,
                        d = p.LEGACY_EVENTS_MAPPING,
                        e = b.callbacks;
                    e && c(e, function(b, e) { d[e] && c(b, function(b) { a.on(d[e], b) }) }) },
                isContainerVisible: function() {
                    var a = this.getViewportCoords(),
                        b = l.getOffset(this.settings.container, this.getScrollContainer()),
                        c = b.top + b.height - a.top;
                    return c > 0 && c <= a.height },
                pollFullyVisible: function() {
                    if (!this.pollingFullVisibility) { this.pollingFullVisibility = !0;
                        var a = this.isHeightRestricted(),
                            b = {},
                            c = this;
                        j(function() {
                            return c.frame && c.frame.elem ? a && !c.rendered ? !1 : h(c.frame.elem) && !c.isHeightRestricted({ checkScrollHeight: !0 }) : b }, function(a) { a !== b && (c.fullyVisible = !0, c.trigger("fullyVisible")) }, this.constructor.VISIBILITY_POLL_INTERVAL) } },
                whenFullyVisible: function(a) { this.pollFullyVisible(), this.fullyVisible ? a() : this.once("fullyVisible", a) },
                showSlowLoadingMessage: function() {
                    var a, b = this;
                    if (b.loadingElem) {
                        if (n.pageVisibility.isHidden()) return a = function() { n.pageVisibility.stopListening(a), b.setSlowLoadingMessageTimer(2e3) }, void n.pageVisibility.listen(a);
                        b.triggeredSlowEvent = !0, b.state === b.constructor.states.READY ? n.logStat("slow_embed.got_ready") : b.state === b.constructor.states.LOADED ? n.logStat("slow_embed.loaded") : n.logStat("slow_embed.no_ready"), b.loadingElem.firstChild.insertAdjacentHTML("afterend", '<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>') } },
                clearSlowLoadingMessageTimer: function() { this.timeout && (clearTimeout(this.timeout), this.timeout = null) },
                setSlowLoadingMessageTimer: function(a) {
                    var b = this;
                    b.clearSlowLoadingMessageTimer(), b.timeout = setTimeout(function() { b.showSlowLoadingMessage() }, a) },
                addLoadingAnimOnContainerVisible: function() {
                    var a, b = this;
                    a = b.listenToScrollEvent(function() {
                        var c = b.isContainerVisible();
                        (c || b.state >= b.constructor.states.RUNNING) && a(), c && b.addLoadingAnim() }) },
                addLoadingAnim: function() {
                    var a, c, d, e = this,
                        f = e.settings.container;
                    if (e.loadingElem) return e.loadingElem;
                    if (!(e.state >= e.constructor.states.RUNNING)) {
                        var g = b.createElement("link");
                        g.rel = "stylesheet", g.href = "//a.disquscdn.com/next/embed/styles/loading.8023a7350e47171f7bb79707886cd7c5.css", (b.head || b.getElementsByTagName("head")[0]).appendChild(g), a = b.createElement("div"), c = b.createElement("div"), d = b.createElement("div"), c.appendChild(d), a.appendChild(c), a.dir = "ltr", a.style.overflow = "hidden";
                        var h = "dark" === e.settings.colorScheme;
                        c.className = "disqus-loader-bubble";
                        var i = c.style;
                        i.height = "52px", i.width = "54px", i.margin = "0 auto", i.overflow = "hidden", i.position = "relative", h && (i.backgroundPosition = "0 -52px");
                        var j = 13,
                            k = h ? "rgba(223, 228, 237, .4)" : "rgba(51, 54, 58, .4)",
                            l = h ? "#6D6F72" : "#A3A7AD",
                            m = d.style;
                        return i.boxSizing = m.boxSizing = "border-box", m.height = m.width = 2 * j + "px", m.position = "absolute", m.top = "13px", m.left = "15px", "borderRadius" in m ? (m.borderWidth = "3px", m.borderStyle = "solid", m.borderColor = k + " transparent", m.borderRadius = j + "px", m.transformOrigin = "50% 50% 0px", d.className = "disqus-loader-spinner") : m.borderLeft = "3px solid " + l, f.appendChild(a), e.loadingElem = a, n.logStat("lounge.loading.view"), e.setSlowLoadingMessageTimer(15e3), e.loadingElem } },
                removeLoadingAnim: function() {
                    var a = this.loadingElem,
                        b = this.settings.container;
                    this.clearSlowLoadingMessageTimer(), a && a.parentNode === b && (b.removeChild(a), this.loadingElem = null) },
                destroy: function() {
                    var a = this.indicators;
                    this.removeLoadingAnim(), a && a.north && (a.north.destroy(), a.north = null), a && a.south && (a.south.destroy(), a.south = null), k.prototype.destroy.call(this) }
            }, { LEGACY_EVENTS_MAPPING: { onReady: "frame:rendered", onNewComment: "posts.create", onPaginate: "posts.paginate", onCommentCountChange: "posts.count", onIdentify: "session.identify" } }, { VISIBILITY_POLL_INTERVAL: 500 }),
            q = function(a) {
                return new p(a) };
        return { Lounge: q }
    }(), F = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = (new Date).getTime() - g;
            b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null))) };
        return function() { f = this, e = arguments, g = (new Date).getTime();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h } }, G = function(a, b) {
        for (var c = 0; c < a.length; ++c)
            if (a[c] === b) return c;
        return -1 }, H = function(a, b, c) {
        for (var d = 0; d < a.length; ++d)
            if (b.call(c, a[d], d, a)) return !0;
        return !1 }, I = function(a) {
        return function(b, c, d) {
            var e = null === b || void 0 === b ? void 0 : b[c];
            return void 0 === e && (e = d), a(e) ? e.call(b) : e } }(g), J = function(a) {
        return Boolean(a && 1 === a.nodeType) }, Y = function(a, b, c) {
        return a.getElement = function(a) {
            return b(a) ? a : a && a.el }, a.EL_ID_ATTR = "data-visibility-id", a.OBJ_ID_PROP = "_visibility_id", a.getId = function(d) {
            var e = null;
            return b(d) ? (e = d.getAttribute(a.EL_ID_ATTR) || null, e || (e = c(), d.setAttribute(a.EL_ID_ATTR, e))) : d && (e = d[a.OBJ_ID_PROP] || null, e || (e = d[a.OBJ_ID_PROP] = c())), e }, a.visiblePercent = function(a, b) {
            var c = 0;
            if (!b) return c;
            var d = a.top,
                e = d + a.height,
                f = b.visibleTop < d,
                g = b.visibleBottom > e;
            return !f && !g || f && g ? c = 1 : f ? c = (b.height - (d - b.visibleTop)) / b.height : g && (c = (e - b.visibleTop) / b.height), Math.round(100 * c) }, a }(Y, J, e), Z = function(c, d, e, f, g, h) {
        return h.events = [], h.lastPos = null, h.clearCache = function(a) {
            if (a === b) h.getElementOffset.cache = {};
            else {
                var c = g.getId(a);
                c && (h.getElementOffset.cache[c] = null) } }, h.calculateOffset = function(b) {
            if (!b) return null;
            if (!e(b)) return null;
            var c = b.ownerDocument.documentElement;
            return { height: b.offsetHeight, top: b.getBoundingClientRect().top + (a.pageYOffset || c.scrollTop) - (c.clientTop || 0) } }, h._getElementOffset = function(a) {
            var b = g.getElement(a);
            if (!b) return null;
            var c = h.calculateOffset(b);
            return c ? { visibleTop: c.top + (f(a, "topEdgeOffset") || 0), visibleBottom: c.top + c.height - (f(a, "bottomEdgeOffset") || 0), offsetTop: c.top, height: c.height } : null }, h.getElementOffset = function() {
            var a = function(b) {
                var c = a.cache,
                    d = g.getId(b);
                if (d && c[d]) return c[d];
                var e = h._getElementOffset(b);
                return d && e && (c[d] = e), e };
            return a.cache = {}, a }(), h.EVENT_NAMES = ["enter", "exit", "visible", "invisible", "all"], h.updateTracking = function(a) {
            var e, f = function(a) {
                return a ? function(b) {
                    return a[b] } : function() {
                    return b } };
            d(h.EVENT_NAMES, f(a._events)) ? (e = c(h.events, a), -1 === e && h.events.push(a)) : (e = c(h.events, a), -1 !== e && h.events.splice(e, 1)) }, h.processEvents = function(a) { h.lastPos = a;
            var b = h.events;
            if (b.length)
                for (var c = b.length - 1; c >= 0; --c) {
                    var d = b[c],
                        e = d.isVisible(a);
                    null !== e && (e !== d.lastVisible && d.trigger(e ? "enter" : "exit", d, a), d.trigger(e ? "visible" : "invisible", d, a), d.lastVisible = e) } }, h }(G, H, y, I, Y, Z), K = function(b, c, d, e, f, g, h) {
        function i(a) {
            return this instanceof i ? (this.obj = a, void(this.lastVisible = !1)) : new i(a) }
        var j = c(function() { h.processEvents(h.lastPos) }, 250);
        return g(i.prototype, b, { on: function(a) {
                var c = !(this._events && this._events[a]),
                    d = b.on.apply(this, arguments);
                return c && h.updateTracking(this), j(), d }, off: function(a) {
                var c = b.off.apply(this, arguments);
                return this._events && this._events[a] || h.updateTracking(this), c }, offset: function() {
                return h.getElementOffset(this.obj) }, isVisible: function(a) {
                if (a = a || h.lastPos, !a) return null;
                var b = a.top,
                    c = b + a.height,
                    d = this.offset();
                return d ? d.offsetTop >= b && d.visibleTop < c || d.offsetTop + d.height <= c && d.visibleBottom > b : null }, invalidate: function() {
                return h.clearCache(this.obj), this } }), g(i, { invalidate: h.clearCache, scroll: h.processEvents, _windowScrollHandlerBound: !1, _ignoreCache: !1, _windowScrollHandler: d(function() { i._ignoreCache && i.invalidate(), h.processEvents({ top: a.pageYOffset, height: a.document.documentElement.clientHeight }) }, 250), bindWindowEvents: function(b) { this._windowScrollHandlerBound || ("undefined" != typeof b && (i._ignoreCache = b), e(a, "scroll", this._windowScrollHandler), e(a, "resize", this._windowScrollHandler), this._windowScrollHandlerBound = !0, this._windowScrollHandler()) }, unbindWindowEvents: function() { i._ignoreCache = !1, f(a, "scroll", this._windowScrollHandler), f(a, "resize", this._windowScrollHandler), this._windowScrollHandlerBound = !1 } }), i }(f, F, m, k, l, i, Z), L = function(a) {
        return a }(K), $ = function(a) {
        return a = function(a, b) {
            var c = null,
                d = !1;
            this.start = function() { d || (c = setTimeout(function() { d = !0, a() }, b)) }, this.clear = function() { clearTimeout(c) } } }($), M = function() {
        function a(a) {
            if (a = Number(a), isNaN(a) || a > 255) throw new Error("Color components should be numbers less than 256");
            return a = a.toString(16), 1 === a.length ? "0" + a : String(a) }
        return function(b) {
            return "#" + a(b.red) + a(b.green) + a(b.blue) } }(), N = function() {
        return function(b) { "undefined" == typeof b && (b = a.location.search);
            var c = {};
            return T(b.substr(1).split("&"), function(a) {
                var b = a.split("=").map(function(a) {
                    return decodeURIComponent(a.replace(/\+/g, "%20")) });
                b[0] && (c[b[0]] = b[1]) }), c } }(), O = function() {
        var b = {},
            c = a.document.createElement("a");
        return b.getOrigin = function(a) { c.href = a;
            var b = c.href.split("/");
            return b[0] + "//" + b[2] }, b.getHostName = function(a) {
            return c.href = a, c.hostname }, b.getDomainPart = function(a, c) { "undefined" == typeof c && (c = 0);
            var d = b.getHostName(a),
                e = d.split(".").reverse();
            return e[c] }, b.getQuery = function(a) {
            return c.href = a, c.search }, b }(), P = function() {
        var c = B,
            d = u,
            e = C.WindowedApp,
            f = o,
            g = U,
            h = K,
            j = Y,
            k = x,
            l = $,
            m = M,
            n = i,
            p = N,
            q = W,
            r = O.getOrigin,
            s = O.getQuery,
            t = { adsnative: 160465, gravity: 184723, taboola: 184193, outbrain: 185359 },
            v = e.extend({ name: "ads", origin: b, onceEvents: { "view:enter": function() { this._report({ verb: "view", adverb: "0ms-no50perc" }) }, "view:iab": function() { this._report({ verb: "view", adverb: "iab-scroll" }) } }, events: { "frame:ready": function(a) { this.forumId = a.forumId, this._reportOnce({ verb: "load" }, "load"), this.bindViewEvents() }, "frame:resize": function(a) { this.frame.setInlineStyle("height", a.height + "px") }, "frame:click": function() { this._reportOnce({ verb: "click" }, "click") }, "frame:error-provider-not-ready": function() { this._report({ verb: "fail", object_type: "provider", object_id: this.getProvider(), adverb: "provider_not_ready" }) }, "frame:error-no-height": function() { this._report({ verb: "fail", object_type: "provider", object_id: this.getProvider(), adverb: "no_height" }) } }, constructor: function() { e.apply(this, arguments), this.origin = r(this.settings.adUrl), this._reportOnceHistory = {} }, init: function() {
                    if (!k(a) && (this.settings.forum = p(s(this.settings.adUrl)).shortname, this.settings.forum)) {
                        var b = this.settings.discovery,
                            d = 0 === a.location.href.indexOf(c.apps.home);
                        (d || !b || !b.disable_all && !b.disable_promoted) && (this._reportOnce({ verb: "call", object_type: "provider", object_id: this.getProvider(), adjective: 1 }, "call"), e.prototype.init.call(this)) } }, getProvider: function() {
                    if (this._provider) return this._provider;
                    var a = this.settings.adUrl.match(/provider=(\w+)/);
                    return a && (this._provider = a[1]), this._provider }, getUrl: function() {
                    var b = this.settings;
                    return q(b.adUrl, { anchorColor: m(b.anchorColor), colorScheme: b.colorScheme, sourceUrl: a.document.location.href, typeface: b.typeface, canonicalUrl: b.canonicalUrl, disqus_version: "4ba5ba1" }) }, bindViewEvents: function() {
                    if (!this._viewEventsBound) { this._viewEventsBound = !0, h.bindWindowEvents(!0);
                        var a = this,
                            b = function(b, c) { a.postMessageDirect({ event: b, percentViewable: c }) },
                            c = 1e3,
                            d = new l(function() { a.trigger("view:iab"), b("view:iab") }, c),
                            e = !1;
                        this.listenTo(h({ el: this.frame.elem }), { enter: function() { a.trigger("view:enter"), b("view:enter") }, exit: function() { b("view:exit"), e && (e = !1, b("view:50out"), d.clear()) }, visible: function(a, c) {
                                var f = j.visiblePercent(c, a.offset());
                                f >= 50 && !e ? (e = !0, b("view:50in"), d.start()) : 50 > f && e && (e = !1, b("view:50out"), d.clear()), b("view", f) } }) } }, postMessageDirect: function(a) { this.frame.requiresWindow(function(a) {
                        var b = f.stringify(n({}, a, { space: "disqus" }));
                        g.WindowBase.postMessage(this.window, b, this.origin), g.WindowBase.postMessage(this.window, "disqus." + a.event, this.origin) })(a) }, _report: function(b) {
                    var c = this.settings,
                        e = this.getProvider(),
                        f = t[e];
                    b.forum_id = c.forumId || this.forumId, d.reportJester(n({ imp: c.impressionId, experiment: c.experimentName, variant: c.experimentVariant, service: c.experimentService, bin: "embed:promoted_discovery:" + c.experimentService + ":" + c.experimentName + ":" + c.experimentVariant, area: c.placement, product: "embed", forum: c.forum, zone: "thread", version: d.getLoaderVersionFromUrl("//a.disquscdn.com/next/embed/lounge.load.54091cfc9e1316883d3ae3983a0a35a6.js"), page_url: a.document.location.href, page_referrer: a.document.referrer, object_type: "advertisement", object_id: "[" + f + "]", provider: e, advertisement_id: f, ad_product_name: "iab_display", ad_product_layout: "iab_display", event: "activity", section: "default" }, b)) }, _reportOnce: function(a, b) { this._reportOnceHistory[b] || (this._report(a), this._reportOnceHistory[b] = !0) }, getFrameSettings: function() {
                    var a = e.prototype.getFrameSettings.call(this);
                    return a.insertBeforeEl = this.settings.insertBeforeEl, a.insertAfterEl = this.settings.insertAfterEl, a } }),
            w = function(a) {
                return new v(a) };
        return { Ads: w } }(), Q = function() {
        var a = B,
            b = O,
            c = C,
            d = U,
            e = c.WindowedApp.extend({ events: { "frame:resize": function(a) {
                        var b = a.height + "px";
                        this.frame.setInlineStyle({ height: b, "min-height": b, "max-height": b }) } }, getFrameSettings: function() {
                    var d = { container: this.settings.container, contents: this.settings.engageLiteHTML },
                        e = this.settings.engageLiteURL;
                    return e && (e = a.ensureHttpBasedProtocol(e, c.protocol), d.origin = b.getOrigin(e), d.target = e), d }, getFrame: function() {
                    var a = this.getFrameSettings(),
                        b = a.target ? d.Channel : d.Sandbox;
                    return new b(a) } }),
            f = function(a) {
                return new e(a) };
        return f }(), _ = function(b) {
        var c = i,
            d = p,
            e = v.HostConfig,
            f = U,
            g = w,
            h = u,
            j = E,
            k = P,
            l = Q,
            m = new e(a);
        b.configAdapter = m;
        var n = [],
            o = !1,
            q = b.removeDisqusLink = function() {
                var b = a.document;
                if (b.getElementsByClassName) {
                    if ("complete" !== b.readyState) return f.addEvent(a, "load", q);
                    var c = b.getElementsByClassName("dsq-brlink"),
                        d = c && c.length && c[0];
                    d && d.parentNode.removeChild(d) } };
        b.loadEmbed = function(a) {
            if (n.length) return s({ reload: !0 }), g.log("Use DISQUS.reset instead of reloading embed.js please."), void g.log("See https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites");
            m.configurator = a;
            var c = m.toJSON();
            o || (c.container.innerHTML = "", o = !0), b.loadApps(c), b.removeDisqusLink() };
        var r = function(a) {
            var b = j.Lounge(c({ discoveryDisabled: a.topPlacementUrl || a.bottomPlacementUrl }, a));
            n.push(b), b.init();
            var d = function(a) { b.whenFullyVisible(a) },
                e = null;
            if (a.topPlacementUrl && (e = k.Ads(c({ adUrl: a.topPlacementUrl, placement: "top" }, a, { insertBeforeEl: b.frame.elem })), n.push(e), d(function() { e.init() })), a.bottomPlacementUrl) {
                var f = k.Ads(c({ adUrl: a.bottomPlacementUrl, placement: "bottom" }, a, { insertAfterEl: b.frame.elem }));
                n.push(f), d(function() { "taboola_via_adsnative" === a.experimentName && "control" !== a.experimentVariant && "fallthrough" !== a.experimentVariant && null !== e ? f.listenTo(e, "frame:ready", function() { f.init() }) : f.init() }) } };
        b.loadApps = function(a) {
            var b = a.engageLiteURL;
            if (b && (b = b.replace(/__disqus_identifier__/g, encodeURIComponent(a.identifier || "")).replace(/__disqus_url__/g, encodeURIComponent(a.url || ""))), a.engageLiteHTML || b) {
                var e = new l(c({}, a, { engageLiteURL: b }));
                n.push(e), e.init(), e.on("frame:click", d(function() { e.destroy(), r(a) })) } else r(a) };
        var s = b.reset = function(a) { a = a || {};
            for (var c = n.pop(); c;) c.triggeredSlowEvent && c.state !== c.constructor.states.RUNNING && h.logStat("reset_embed.slow"), c.destroy(), c = n.pop();
            a.reload && b.loadEmbed(a.config) };
        return b }(_), R = function() {
        var b = a.DISQUS || {},
            c = X;
        b.reset || (b.reset = _.reset), b.request || (b.request = {}), b.request.get || (b.request.get = function(a, b, d) { c(a, b, d) }), b.host || (b.host = {}), b.host._loadEmbed || (b.host._loadEmbed = _.loadEmbed), a.DISQUS = b }()
}(this), this.DISQUS.host._loadEmbed();
