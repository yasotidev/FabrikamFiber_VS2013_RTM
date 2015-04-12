// Knockout JavaScript library v1.2.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window, undefined) {
    function c(d) { throw d; }

    var n = void 0, o = null, p = window.ko = {};
    p.b = function(d, e) {
        for (var b = d.split("."), a = window, f = 0; f < b.length - 1; f++)a = a[b[f]];
        a[b[b.length - 1]] = e;
    };
    p.i = function(d, e, b) { d[e] = b };
    p.a = new function() {
        function d(a, f) {
            if (a.tagName != "INPUT" || !a.type)return!1;
            if (f.toLowerCase() != "click")return!1;
            var b = a.type.toLowerCase();
            return b == "checkbox" || b == "radio";
        }

        var e = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, b = { click: 1, dblclick: 1, mousedown: 1, mouseup: 1, mousemove: 1, mouseover: 1, mouseout: 1, mouseenter: 1, mouseleave: 1 };
        return{
            ba: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
            h: function(a, f) { for (var b = 0, d = a.length; b < d; b++)f(a[b]) },
            g: function(a, f) {
                if (typeof a.indexOf == "function")return a.indexOf(f);
                for (var b = 0, d = a.length; b < d; b++)if (a[b] == f)return b;
                return-1;
            },
            xa: function(a, f, b) {
                for (var d = 0, e = a.length; d < e; d++)if (f.call(b, a[d]))return a[d];
                return o;
            },
            M: function(a, f) {
                var b = p.a.g(a, f);
                b >= 0 && a.splice(b, 1);
            },
            $: function(a) {
                for (var a = a || [], f = [], b = 0, d = a.length; b < d; b++)p.a.g(f, a[b]) < 0 && f.push(a[b]);
                return f;
            },
            K: function(a, f) {
                for (var a = a || [], b = [], d = 0, e = a.length; d < e; d++)b.push(f(a[d]));
                return b;
            },
            J: function(a, f) {
                for (var a = a || [], b = [], d = 0, e = a.length; d < e; d++)f(a[d]) && b.push(a[d]);
                return b;
            },
            L: function(a, f) {
                for (var b =
                             0,
                    d = f.length; b < d; b++)a.push(f[b]);
            },
            aa: function(a) { for (; a.firstChild;)p.removeNode(a.firstChild) },
            Wa: function(a, f) {
                p.a.aa(a);
                f && p.a.h(f, function(f) { a.appendChild(f) });
            },
            ka: function(a, f) {
                var b = a.nodeType ? [a] : a;
                if (b.length > 0) {
                    for (var d = b[0], e = d.parentNode, j = 0, k = f.length; j < k; j++)e.insertBefore(f[j], d);
                    j = 0;
                    for (k = b.length; j < k; j++)p.removeNode(b[j]);
                }
            },
            ma: function(a, f) { navigator.userAgent.indexOf("MSIE 6") >= 0 ? a.setAttribute("selected", f) : a.selected = f },
            ca: function(a, f) {
                if (!a || a.nodeType != 1)return[];
                var b = [];
                a.getAttribute(f) !== o && b.push(a);
                for (var d = a.getElementsByTagName("*"), e = 0, j = d.length; e < j; e++)d[e].getAttribute(f) !== o && b.push(d[e]);
                return b;
            },
            m: function(a) { return(a || "").replace(e, "") },
            Za: function(a, b) {
                for (var d = [], e = (a || "").split(b), i = 0, j = e.length; i < j; i++) {
                    var k = p.a.m(e[i]);
                    k !== "" && d.push(k);
                }
                return d;
            },
            Xa: function(a, b) {
                a = a || "";
                if (b.length > a.length)return!1;
                return a.substring(0, b.length) === b;
            },
            Ha: function(a, b) {
                if (b === n)return(new Function("return " + a))();
                with (b)return eval("(" + a + ")");
            },
            Fa: function(a,
                b) {
                if (b.compareDocumentPosition)return(b.compareDocumentPosition(a) & 16) == 16;
                for (; a != o;) {
                    if (a == b)return!0;
                    a = a.parentNode;
                }
                return!1;
            },
            O: function(a) { return p.a.Fa(a, document) },
            t: function(a, b, e) {
                if (typeof jQuery != "undefined") {
                    if (d(a, b))
                        var g = e,
                            e = function(a, b) {
                                var f = this.checked;
                                if (b)this.checked = b.Aa !== !0;
                                g.call(this, a);
                                this.checked = f;
                            };
                    jQuery(a).bind(b, e);
                } else
                    typeof a.addEventListener == "function" ? a.addEventListener(b, e, !1) : typeof a.attachEvent != "undefined" ? a.attachEvent("on" + b, function(b) { e.call(a, b) }) :
                        c(Error("Browser doesn't support addEventListener or attachEvent"));
            },
            qa: function(a, f) {
                (!a || !a.nodeType) && c(Error("element must be a DOM node when calling triggerEvent"));
                if (typeof jQuery != "undefined") {
                    var e = [];
                    d(a, f) && e.push({ Aa: a.checked });
                    jQuery(a).trigger(f, e);
                } else if (typeof document.createEvent == "function")typeof a.dispatchEvent == "function" ? (e = document.createEvent(f in b ? "MouseEvents" : "HTMLEvents"), e.initEvent(f, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(e)) : c(Error("The supplied element doesn't support dispatchEvent"));
                else if (typeof a.fireEvent != "undefined") {
                    if (f == "click" && a.tagName == "INPUT" && (a.type.toLowerCase() == "checkbox" || a.type.toLowerCase() == "radio"))a.checked = a.checked !== !0;
                    a.fireEvent("on" + f);
                } else c(Error("Browser doesn't support triggering events"));
            },
            d: function(a) { return p.B(a) ? a() : a },
            Ea: function(a, b) { return p.a.g((a.className || "").split(/\s+/), b) >= 0 },
            pa: function(a, b, d) {
                var e = p.a.Ea(a, b);
                if (d && !e)a.className = (a.className || "") + " " + b;
                else if (e && !d) {
                    for (var d = (a.className || "").split(/\s+/), e = "", i = 0; i < d.length; i++)
                        d[i] !=
                            b && (e += d[i] + " ");
                    a.className = p.a.m(e);
                }
            },
            Ta: function(a, b) {
                for (var a = p.a.d(a), b = p.a.d(b), d = [], e = a; e <= b; e++)d.push(e);
                return d;
            },
            ga: function(a) {
                for (var b = [], d = a.length - 1; d >= 0; d--)b.push(a[d]);
                return b;
            },
            Q: /MSIE 6/i.test(navigator.userAgent),
            Ma: /MSIE 7/i.test(navigator.userAgent),
            da: function(a, b) {
                for (var d = p.a.ga(a.getElementsByTagName("INPUT")).concat(p.a.ga(a.getElementsByTagName("TEXTAREA"))), e = typeof b == "string" ? function(a) { return a.name === b } : function(a) { return b.test(a.name) }, i = [], j = d.length - 1; j >=
                    0; j--)e(d[j]) && i.push(d[j]);
                return i;
            },
            D: function(a) {
                if (typeof a == "string" && (a = p.a.m(a))) {
                    if (window.JSON && window.JSON.parse)return window.JSON.parse(a);
                    return(new Function("return " + a))();
                }
                return o;
            },
            V: function(a) {
                (typeof JSON == "undefined" || typeof JSON.stringify == "undefined") && c(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
                return JSON.stringify(p.a.d(a));
            },
            Sa: function(a, b, d) {
                var d = d || {}, e = d.params || {}, i = d.includeFields || this.ba, j = a;
                if (typeof a == "object" && a.tagName == "FORM")for (var j = a.action, k = i.length - 1; k >= 0; k--)for (var m = p.a.da(a, i[k]), q = m.length - 1; q >= 0; q--)e[m[q].name] = m[q].value;
                var b = p.a.d(b), l = document.createElement("FORM");
                l.style.display = "none";
                l.action = j;
                l.method = "post";
                for (var s in b)a = document.createElement("INPUT"), a.name = s, a.value = p.a.V(p.a.d(b[s])), l.appendChild(a);
                for (s in e)a = document.createElement("INPUT"), a.name = s, a.value = e[s], l.appendChild(a);
                document.body.appendChild(l);
                d.submitter ? d.submitter(l) : l.submit();
                setTimeout(function() { l.parentNode.removeChild(l) }, 0);
            }
        };
    };
    p.b("ko.utils", p.a);
    p.b("ko.utils.arrayForEach", p.a.h);
    p.b("ko.utils.arrayFirst", p.a.xa);
    p.b("ko.utils.arrayFilter", p.a.J);
    p.b("ko.utils.arrayGetDistinctValues", p.a.$);
    p.b("ko.utils.arrayIndexOf", p.a.g);
    p.b("ko.utils.arrayMap", p.a.K);
    p.b("ko.utils.arrayPushAll", p.a.L);
    p.b("ko.utils.arrayRemoveItem", p.a.M);
    p.b("ko.utils.fieldsIncludedWithJsonPost", p.a.ba);
    p.b("ko.utils.getElementsHavingAttribute", p.a.ca);
    p.b("ko.utils.getFormFields", p.a.da);
    p.b("ko.utils.postJson", p.a.Sa);
    p.b("ko.utils.parseJson", p.a.D);
    p.b("ko.utils.registerEventHandler", p.a.t);
    p.b("ko.utils.stringifyJson", p.a.V);
    p.b("ko.utils.range", p.a.Ta);
    p.b("ko.utils.toggleDomNodeCssClass", p.a.pa);
    p.b("ko.utils.triggerEvent", p.a.qa);
    p.b("ko.utils.unwrapObservable", p.a.d);
    Function.prototype.bind || (Function.prototype.bind = function(d) {
        var e = this, b = Array.prototype.slice.call(arguments), d = b.shift();
        return function() { return e.apply(d, b.concat(Array.prototype.slice.call(arguments))) };
    });
    p.a.e = new function() {
        var d = 0, e = "__ko__" + (new Date).getTime(), b = {};
        return{
            get: function(a, b) {
                var d = p.a.e.getAll(a, !1);
                return d === n ? n : d[b];
            },
            set: function(a, b, d) { d === n && p.a.e.getAll(a, !1) === n || (p.a.e.getAll(a, !0)[b] = d) },
            getAll: function(a, f) {
                var h = a[e];
                if (!h) {
                    if (!f)return;
                    h = a[e] = "ko" + d++;
                    b[h] = {};
                }
                return b[h];
            },
            clear: function(a) {
                var d = a[e];
                d && (delete b[d], a[e] = o);
            }
        };
    };
    p.a.p = new function() {
        function d(a, d) {
            var e = p.a.e.get(a, b);
            e === n && d && (e = [], p.a.e.set(a, b, e));
            return e;
        }

        function e(a) {
            var b = d(a, !1);
            if (b)for (var b = b.slice(0), e = 0; e < b.length; e++)b[e](a);
            p.a.e.clear(a);
            typeof jQuery == "function" && typeof jQuery.cleanData == "function" && jQuery.cleanData([a]);
        }

        var b = "__ko_domNodeDisposal__" + (new Date).getTime();
        return{
            Z: function(a, b) {
                typeof b != "function" && c(Error("Callback must be a function"));
                d(a, !0).push(b);
            },
            ja: function(a, e) {
                var h = d(a, !1);
                h && (p.a.M(h, e), h.length == 0 && p.a.e.set(a,
                    b, n));
            },
            u: function(a) {
                if (!(a.nodeType != 1 && a.nodeType != 9)) {
                    e(a);
                    for (var a = a.getElementsByTagName("*"), b = 0, d = a.length; b < d; b++)e(a[b]);
                }
            },
            removeNode: function(a) {
                p.u(a);
                a.parentNode && a.parentNode.removeChild(a);
            }
        };
    };
    p.u = p.a.p.u;
    p.removeNode = p.a.p.removeNode;
    p.b("ko.cleanNode", p.u);
    p.b("ko.removeNode", p.removeNode);
    p.b("ko.utils.domNodeDisposal", p.a.p);
    p.b("ko.utils.domNodeDisposal.addDisposeCallback", p.a.p.Z);
    p.b("ko.utils.domNodeDisposal.removeDisposeCallback", p.a.p.ja);
    p.k = function() {
        function d() { return((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1) }

        function e(a, b) {
            if (a)
                if (a.nodeType == 8) {
                    var d = p.k.ha(a.nodeValue);
                    d != o && b.push({ Da: a, Pa: d });
                } else if (a.nodeType == 1)for (var d = 0, g = a.childNodes, i = g.length; d < i; d++)e(g[d], b);
        }

        var b = {};
        return{
            S: function(a) {
                typeof a != "function" && c(Error("You can only pass a function to ko.memoization.memoize()"));
                var e = d() + d();
                b[e] = a;
                return"<\!--[ko_memo:" + e + "]--\>";
            },
            ra: function(a, d) {
                var e = b[a];
                e === n && c(Error("Couldn't find any memo with ID " +
                    a + ". Perhaps it's already been unmemoized."));
                try {
                    return e.apply(o, d || []), !0;
                } finally {
                    delete b[a];
                }
            },
            sa: function(a, b) {
                var d = [];
                e(a, d);
                for (var g = 0, i = d.length; g < i; g++) {
                    var j = d[g].Da, k = [j];
                    b && p.a.L(k, b);
                    p.k.ra(d[g].Pa, k);
                    j.nodeValue = "";
                    j.parentNode && j.parentNode.removeChild(j);
                }
            },
            ha: function(a) { return(a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : o }
        };
    }();
    p.b("ko.memoization", p.k);
    p.b("ko.memoization.memoize", p.k.S);
    p.b("ko.memoization.unmemoize", p.k.ra);
    p.b("ko.memoization.parseMemoText", p.k.ha);
    p.b("ko.memoization.unmemoizeDomNodeAndDescendants", p.k.sa);
    p.Ya = function(d, e) {
        this.za = d;
        this.n = function() {
            this.La = !0;
            e();
        }.bind(this);
        p.i(this, "dispose", this.n);
    };
    p.W = function() {
        var d = [];
        this.X = function(e, b) {
            var a = b ? e.bind(b) : e, f = new p.Ya(a, function() { p.a.M(d, f) });
            d.push(f);
            return f;
        };
        this.w = function(e) { p.a.h(d.slice(0), function(b) { b && b.La !== !0 && b.za(e) }) };
        this.Ja = function() { return d.length };
        p.i(this, "subscribe", this.X);
        p.i(this, "notifySubscribers", this.w);
        p.i(this, "getSubscriptionsCount", this.Ja);
    };
    p.fa = function(d) { return typeof d.X == "function" && typeof d.w == "function" };
    p.b("ko.subscribable", p.W);
    p.b("ko.isSubscribable", p.fa);
    p.z = function() {
        var d = [];
        return{
            ya: function() { d.push([]) }, end: function() { return d.pop() },
            ia: function(e) {
                p.fa(e) || c("Only subscribable things can act as dependencies");
                d.length > 0 && d[d.length - 1].push(e);
            }
        };
    }();
    p.s = function(d) {
        function e() { return arguments.length > 0 ? (b = arguments[0], e.w(b), this) : (p.z.ia(e), b) }

        var b = d;
        e.o = p.s;
        e.G = function() { e.w(b) };
        p.W.call(e);
        p.i(e, "valueHasMutated", e.G);
        return e;
    };
    p.B = function(d) {
        if (d === o || d === n || d.o === n)return!1;
        if (d.o === p.s)return!0;
        return p.B(d.o);
    };
    p.C = function(d) {
        if (typeof d == "function" && d.o === p.s)return!0;
        if (typeof d == "function" && d.o === p.j && d.Ka)return!0;
        return!1;
    };
    p.b("ko.observable", p.s);
    p.b("ko.isObservable", p.B);
    p.b("ko.isWriteableObservable", p.C);
    p.Ra = function(d) {
        arguments.length == 0 && (d = []);
        d !== o && d !== n && !("length" in d) && c(new "The argument passed when initializing an observable array must be an array, or null, or undefined.");
        var e = new p.s(d);
        p.a.h(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(b) {
            e[b] = function() {
                var a = e(), a = a[b].apply(a, arguments);
                e.G();
                return a;
            };
        });
        p.a.h(["slice"], function(b) {
            e[b] = function() {
                var a = e();
                return a[b].apply(a, arguments);
            };
        });
        e.remove = function(b) {
            for (var a = e(),
                d = [],
                h = [],
                g = typeof b == "function" ?
                    b : function(a) { return a === b },
                i = 0,
                j = a.length; i < j; i++) {
                var k = a[i];
                g(k) ? h.push(k) : d.push(k);
            }
            e(d);
            return h;
        };
        e.Ua = function(b) {
            if (b === n) {
                var a = e();
                e([]);
                return a;
            }
            if (!b)return[];
            return e.remove(function(a) { return p.a.g(b, a) >= 0 });
        };
        e.N = function(b) {
            for (var a = e(), d = typeof b == "function" ? b : function(a) { return a === b }, h = a.length - 1; h >= 0; h--)d(a[h]) && (a[h]._destroy = !0);
            e.G();
        };
        e.Ca = function(b) {
            if (b === n)return e.N(function() { return!0 });
            if (!b)return[];
            return e.N(function(a) { return p.a.g(b, a) >= 0 });
        };
        e.indexOf = function(b) {
            var a =
                e();
            return p.a.g(a, b);
        };
        e.replace = function(b, a) {
            var d = e.indexOf(b);
            d >= 0 && (e()[d] = a, e.G());
        };
        p.i(e, "remove", e.remove);
        p.i(e, "removeAll", e.Ua);
        p.i(e, "destroy", e.N);
        p.i(e, "destroyAll", e.Ca);
        p.i(e, "indexOf", e.indexOf);
        return e;
    };
    p.b("ko.observableArray", p.Ra);
    p.j = function(d, e, b) {
        function a() {
            p.a.h(l, function(a) { a.n() });
            l = [];
        }

        function f(b) {
            a();
            p.a.h(b, function(a) { l.push(a.X(h)) });
        }

        function h() {
            if (j && typeof b.disposeWhen == "function" && b.disposeWhen())g.n();
            else {
                try {
                    p.z.ya(), i = b.owner ? b.read.call(b.owner) : b.read();
                } finally {
                    var a = p.a.$(p.z.end());
                    f(a);
                }
                g.w(i);
                j = !0;
            }
        }

        function g() {
            if (arguments.length > 0)
                if (typeof b.write === "function") {
                    var a = arguments[0];
                    b.owner ? b.write.call(b.owner, a) : b.write(a);
                } else c("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            else return j || h(), p.z.ia(g), i;
        }

        var i, j = !1;
        d && typeof d == "object" ? b = d : (b = b || {}, b.read = d || b.read, b.owner = e || b.owner);
        typeof b.read != "function" && c("Pass a function that returns the value of the dependentObservable");
        var k = typeof b.disposeWhenNodeIsRemoved == "object" ? b.disposeWhenNodeIsRemoved : o, m = o;
        if (k) {
            m = function() { g.n() };
            p.a.p.Z(k, m);
            var q = b.disposeWhen;
            b.disposeWhen = function() { return!p.a.O(k) || typeof q == "function" && q() };
        }
        var l = [];
        g.o = p.j;
        g.Ia = function() { return l.length };
        g.Ka = typeof b.write === "function";
        g.n = function() {
            k && p.a.p.ja(k, m);
            a();
        };
        p.W.call(g);
        b.deferEvaluation !== !0 && h();
        p.i(g, "dispose", g.n);
        p.i(g, "getDependenciesCount", g.Ia);
        return g;
    };
    p.j.o = p.s;
    p.b("ko.dependentObservable", p.j);
    (function() {
        function d(a, f, h) {
            h = h || new b;
            a = f(a);
            if (!(typeof a == "object" && a !== o && a !== n))return a;
            var g = a instanceof Array ? [] : {};
            h.save(a, g);
            e(a, function(b) {
                var e = f(a[b]);
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    g[b] = e;
                    break;
                case "object":
                case "undefined":
                    var k = h.get(e);
                    g[b] = k !== n ? k : d(e, f, h);
                }
            });
            return g;
        }

        function e(a, b) {
            if (a instanceof Array)for (var d = 0; d < a.length; d++)b(d);
            else for (d in a)b(d);
        }

        function b() {
            var a = [], b = [];
            this.save = function(d, e) {
                var i = p.a.g(a, d);
                i >= 0 ?
                    b[i] = e : (a.push(d), b.push(e));
            };
            this.get = function(d) {
                d = p.a.g(a, d);
                return d >= 0 ? b[d] : n;
            };
        }

        p.oa = function(a) {
            arguments.length == 0 && c(Error("When calling ko.toJS, pass the object you want to convert."));
            return d(a, function(a) {
                for (var b = 0; p.B(a) && b < 10; b++)a = a();
                return a;
            });
        };
        p.toJSON = function(a) {
            a = p.oa(a);
            return p.a.V(a);
        };
    })();
    p.b("ko.toJS", p.oa);
    p.b("ko.toJSON", p.toJSON);
    p.f = {
        l: function(d) {
            if (d.tagName == "OPTION") {
                if (d.__ko__hasDomDataOptionValue__ === !0)return p.a.e.get(d, p.c.options.T);
                return d.getAttribute("value");
            } else return d.tagName == "SELECT" ? d.selectedIndex >= 0 ? p.f.l(d.options[d.selectedIndex]) : n : d.value;
        },
        H: function(d, e) {
            if (d.tagName == "OPTION")
                switch (typeof e) {
                case "string":
                case "number":
                    p.a.e.set(d, p.c.options.T, n);
                    "__ko__hasDomDataOptionValue__" in d && delete d.__ko__hasDomDataOptionValue__;
                    d.value = e;
                    break;
                default:
                    p.a.e.set(d, p.c.options.T, e), d.__ko__hasDomDataOptionValue__ =
                        !0, d.value = "";
                }
            else if (d.tagName == "SELECT")
                for (var b = d.options.length - 1; b >= 0; b--) {
                    if (p.f.l(d.options[b]) == e) {
                        d.selectedIndex = b;
                        break;
                    }
                }
            else {
                if (e === o || e === n)e = "";
                d.value = e;
            }
        }
    };
    p.b("ko.selectExtensions", p.f);
    p.b("ko.selectExtensions.readValue", p.f.l);
    p.b("ko.selectExtensions.writeValue", p.f.H);
    p.r = function() {
        function d(a, b) { return a.replace(e, function(a, d) { return b[d] }) }

        var e = /\[ko_token_(\d+)\]/g, b = /^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i, a = ["true", "false"];
        return{
            D: function(a) {
                a = p.a.m(a);
                if (a.length < 3)return{};
                for (var b = [], e = o, i, j = a.charAt(0) == "{" ? 1 : 0; j < a.length; j++) {
                    var k = a.charAt(j);
                    if (e === o)
                        switch (k) {
                        case '"':
                        case "'":
                        case "/":
                            e = j;
                            i = k;
                            break;
                        case "{":
                            e = j;
                            i = "}";
                            break;
                        case "[":
                            e = j, i = "]";
                        }
                    else if (k == i) {
                        k = a.substring(e, j + 1);
                        b.push(k);
                        var m = "[ko_token_" + (b.length -
                                1) + "]",
                            a = a.substring(0, e) + m + a.substring(j + 1);
                        j -= k.length - m.length;
                        e = o;
                    }
                }
                e = {};
                a = a.split(",");
                i = 0;
                for (j = a.length; i < j; i++) {
                    var m = a[i], q = m.indexOf(":");
                    q > 0 && q < m.length - 1 && (k = p.a.m(m.substring(0, q)), m = p.a.m(m.substring(q + 1)), k.charAt(0) == "{" && (k = k.substring(1)), m.charAt(m.length - 1) == "}" && (m = m.substring(0, m.length - 1)), k = p.a.m(d(k, b)), m = p.a.m(d(m, b)), e[k] = m);
                }
                return e;
            },
            P: function(d) {
                var e = p.r.D(d), g = [], i;
                for (i in e) {
                    var j = e[i], k;
                    k = j;
                    k = p.a.g(a, p.a.m(k).toLowerCase()) >= 0 ? !1 : k.match(b) !== o;
                    k && (g.length > 0 && g.push(", "),
                        g.push(i + " : function(__ko_value) { " + j + " = __ko_value; }"));
                }
                g.length > 0 && (d = d + ", '_ko_property_writers' : { " + g.join("") + " } ");
                return d;
            }
        };
    }();
    p.b("ko.jsonExpressionRewriting", p.r);
    p.b("ko.jsonExpressionRewriting.parseJson", p.r.D);
    p.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson", p.r.P);
    p.c = {};
    p.I = function(d, e, b, a) {
        function f(a) { return function() { return i[a] } }

        function h() { return i }

        var g = !0, a = a || "data-bind", i;
        new p.j(function() {
            var j;
            if (!(j = typeof e == "function" ? e() : e)) {
                var k = d.getAttribute(a);
                try {
                    var m = " { " + p.r.P(k) + " } ";
                    j = p.a.Ha(m, b === o ? window : b);
                } catch (q) {
                    c(Error("Unable to parse binding attribute.\nMessage: " + q + ";\nAttribute value: " + k));
                }
            }
            i = j;
            if (g)for (var l in i)p.c[l] && typeof p.c[l].init == "function" && (0, p.c[l].init)(d, f(l), h, b);
            for (l in i)
                p.c[l] && typeof p.c[l].update == "function" && (0, p.c[l].update)(d,
                    f(l), h, b);
        }, o, { disposeWhenNodeIsRemoved: d });
        g = !1;
    };
    p.ua = function(d, e) {
        e && e.nodeType == n && c(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node (note: this is a breaking change since KO version 1.05)"));
        var e = e || window.document.body, b = p.a.ca(e, "data-bind");
        p.a.h(b, function(a) { p.I(a, o, d) });
    };
    p.b("ko.bindingHandlers", p.c);
    p.b("ko.applyBindings", p.ua);
    p.b("ko.applyBindingsToNode", p.I);
    p.a.h(["click"], function(d) {
        p.c[d] = {
            init: function(e, b, a, f) {
                return p.c.event.init.call(this, e, function() {
                    var a = {};
                    a[d] = b();
                    return a;
                }, a, f);
            }
        };
    });
    p.c.event = {
        init: function(d, e, b, a) {
            var f = e() || {}, h;
            for (h in f)
            (function() {
                var f = h;
                typeof f == "string" && p.a.t(d, f, function(d) {
                    var h, k = e()[f], m = b();
                    try {
                        h = k.apply(a, arguments);
                    } finally {
                        if (h !== !0)d.preventDefault ? d.preventDefault() : d.returnValue = !1;
                    }
                    if (m[f + "Bubble"] === !1)d.cancelBubble = !0, d.stopPropagation && d.stopPropagation();
                });
            })();
        }
    };
    p.c.submit = {
        init: function(d, e, b, a) {
            typeof e() != "function" && c(Error("The value for a submit binding must be a function to invoke on submit"));
            p.a.t(d, "submit", function(b) {
                var h, g = e();
                try {
                    h = g.call(a, d);
                } finally {
                    if (h !== !0)b.preventDefault ? b.preventDefault() : b.returnValue = !1;
                }
            });
        }
    };
    p.c.visible = {
        update: function(d, e) {
            var b = p.a.d(e()), a = d.style.display != "none";
            if (b && !a)d.style.display = "";
            else if (!b && a)d.style.display = "none";
        }
    };
    p.c.enable = {
        update: function(d, e) {
            var b = p.a.d(e());
            if (b && d.disabled)d.removeAttribute("disabled");
            else if (!b && !d.disabled)d.disabled = !0;
        }
    };
    p.c.disable = { update: function(d, e) { p.c.enable.update(d, function() { return!p.a.d(e()) }) } };
    p.c.value = {
        init: function(d, e, b) {
            var a = b().valueUpdate || "change", f = !1;
            p.a.Xa(a, "after") && (f = !0, a = a.substring(5));
            var h = f ? function(a) { setTimeout(a, 0) } : function(a) { a() };
            p.a.t(d, a, function() {
                h(function() {
                    var a = e(), f = p.f.l(d);
                    p.C(a) ? a(f) : (a = b(), a._ko_property_writers && a._ko_property_writers.value && a._ko_property_writers.value(f));
                });
            });
        },
        update: function(d, e) {
            var b = p.a.d(e()), a = p.f.l(d), f = b != a;
            b === 0 && a !== 0 && a !== "0" && (f = !0);
            f && (a = function() { p.f.H(d, b) }, a(), d.tagName == "SELECT" && setTimeout(a, 0));
            d.tagName == "SELECT" &&
            (a = p.f.l(d), a !== b && p.a.qa(d, "change"));
        }
    };
    p.c.options = {
        update: function(d, e, b) {
            d.tagName != "SELECT" && c(Error("options binding applies only to SELECT elements"));
            var a = p.a.K(p.a.J(d.childNodes, function(a) { return a.tagName && a.tagName == "OPTION" && a.selected }), function(a) { return p.f.l(a) || a.innerText || a.textContent }), f = d.scrollTop, h = p.a.d(e());
            p.a.aa(d);
            if (h) {
                var g = b();
                typeof h.length != "number" && (h = [h]);
                if (g.optionsCaption) {
                    var i = document.createElement("OPTION");
                    i.innerHTML = g.optionsCaption;
                    p.f.H(i, n);
                    d.appendChild(i);
                }
                b = 0;
                for (e = h.length; b < e; b++) {
                    var i =
                            document.createElement("OPTION"),
                        j = typeof g.optionsValue == "string" ? h[b][g.optionsValue] : h[b],
                        k = g.optionsText;
                    optionText = typeof k == "function" ? k(h[b]) : typeof k == "string" ? h[b][k] : j;
                    j = p.a.d(j);
                    optionText = p.a.d(optionText);
                    p.f.H(i, j);
                    i.innerHTML = optionText.toString();
                    d.appendChild(i);
                }
                h = d.getElementsByTagName("OPTION");
                b = g = 0;
                for (e = h.length; b < e; b++)p.a.g(a, p.f.l(h[b])) >= 0 && (p.a.ma(h[b], !0), g++);
                if (f)d.scrollTop = f;
            }
        }
    };
    p.c.options.T = "__ko.bindingHandlers.options.optionValueDomData__";
    p.c.selectedOptions = {
        ea: function(d) {
            for (var e = [], d = d.childNodes, b = 0, a = d.length; b < a; b++) {
                var f = d[b];
                f.tagName == "OPTION" && f.selected && e.push(p.f.l(f));
            }
            return e;
        },
        init: function(d, e, b) {
            p.a.t(d, "change", function() {
                var a = e();
                p.C(a) ? a(p.c.selectedOptions.ea(this)) : (a = b(), a._ko_property_writers && a._ko_property_writers.value && a._ko_property_writers.value(p.c.selectedOptions.ea(this)));
            });
        },
        update: function(d, e) {
            d.tagName != "SELECT" && c(Error("values binding applies only to SELECT elements"));
            var b = p.a.d(e());
            if (b &&
                typeof b.length == "number")
                for (var a = d.childNodes, f = 0, h = a.length; f < h; f++) {
                    var g = a[f];
                    g.tagName == "OPTION" && p.a.ma(g, p.a.g(b, p.f.l(g)) >= 0);
                }
        }
    };
    p.c.text = {
        update: function(d, e) {
            var b = p.a.d(e());
            if (b === o || b === n)b = "";
            typeof d.innerText == "string" ? d.innerText = b : d.textContent = b;
        }
    };
    p.c.html = {
        update: function(d, e) {
            var b = p.a.d(e());
            if (b === o || b === n)b = "";
            d.innerHTML = b;
        }
    };
    p.c.css = {
        update: function(d, e) {
            var b = p.a.d(e() || {}), a;
            for (a in b)
                if (typeof a == "string") {
                    var f = p.a.d(b[a]);
                    p.a.pa(d, a, f);
                }
        }
    };
    p.c.style = {
        update: function(d, e) {
            var b = p.a.d(e() || {}), a;
            for (a in b)
                if (typeof a == "string") {
                    var f = p.a.d(b[a]);
                    d.style[a] = f || "";
                }
        }
    };
    p.c.uniqueName = { init: function(d, e) { if (e())d.name = "ko_unique_" + ++p.c.uniqueName.Ba, p.a.Q && d.mergeAttributes(document.createElement("<input name='" + d.name + "'/>"), !1) } };
    p.c.uniqueName.Ba = 0;
    p.c.checked = {
        init: function(d, e, b) {
            p.a.t(d, "click", function() {
                var a;
                if (d.type == "checkbox")a = d.checked;
                else if (d.type == "radio" && d.checked)a = d.value;
                else return;
                var f = e();
                d.type == "checkbox" && p.a.d(f) instanceof Array ? (a = p.a.g(p.a.d(f), d.value), d.checked && a < 0 ? f.push(d.value) : !d.checked && a >= 0 && f.splice(a, 1)) : p.C(f) ? f() !== a && f(a) : (f = b(), f._ko_property_writers && f._ko_property_writers.checked && f._ko_property_writers.checked(a));
            });
            d.type == "radio" && !d.name && p.c.uniqueName.init(d, function() { return!0 });
        },
        update: function(d,
            e) {
            var b = p.a.d(e());
            if (d.type == "checkbox")d.checked = b instanceof Array ? p.a.g(b, d.value) >= 0 : b, b && p.a.Q && d.mergeAttributes(document.createElement("<input type='checkbox' checked='checked' />"), !1);
            else if (d.type == "radio")d.checked = d.value == b, d.value == b && (p.a.Q || p.a.Ma) && d.mergeAttributes(document.createElement("<input type='radio' checked='checked' />"), !1);
        }
    };
    p.c.attr = {
        update: function(d, e) {
            var b = p.a.d(e()) || {}, a;
            for (a in b)
                if (typeof a == "string") {
                    var f = p.a.d(b[a]);
                    f === !1 || f === o || f === n ? d.removeAttribute(a) : d.setAttribute(a, f.toString());
                }
        }
    };
    p.Y = function() {
        this.renderTemplate = function() { c("Override renderTemplate in your ko.templateEngine subclass") };
        this.isTemplateRewritten = function() { c("Override isTemplateRewritten in your ko.templateEngine subclass") };
        this.rewriteTemplate = function() { c("Override rewriteTemplate in your ko.templateEngine subclass") };
        this.createJavaScriptEvaluatorBlock = function() { c("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass") };
    };
    p.b("ko.templateEngine", p.Y);
    p.F = function() {
        var d = /(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi;
        return{
            Ga: function(d, b) { b.isTemplateRewritten(d) || b.rewriteTemplate(d, function(a) { return p.F.Qa(a, b) }) },
            Qa: function(e, b) {
                return e.replace(d, function(a, d, e, g, i, j, k) {
                    a = p.r.P(k);
                    return b.createJavaScriptEvaluatorBlock("ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {                     return (function() { return { " + a + " } })()                 })") + d;
                });
            },
            va: function(d) {
                return p.k.S(function(b,
                    a) { b.nextSibling && p.I(b.nextSibling, d, a) });
            }
        };
    }();
    p.b("ko.templateRewriting", p.F);
    p.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling", p.F.va);
    (function() {
        function d(b, a, d, h, g) {
            var i = p.a.d(h), g = g || {}, j = g.templateEngine || e;
            p.F.Ga(d, j);
            d = j.renderTemplate(d, i, g);
            (typeof d.length != "number" || d.length > 0 && typeof d[0].nodeType != "number") && c("Template engine must return an array of DOM nodes");
            d && p.a.h(d, function(a) { p.k.sa(a, [h]) });
            switch (a) {
            case "replaceChildren":
                p.a.Wa(b, d);
                break;
            case "replaceNode":
                p.a.ka(b, d);
                break;
            case "ignoreTargetNode":
                break;
            default:
                c(Error("Unknown renderMode: " + a));
            }
            g.afterRender && g.afterRender(d, h);
            return d;
        }

        var e;
        p.na = function(b) {
            b !=
                n && !(b instanceof p.Y) && c("templateEngine must inherit from ko.templateEngine");
            e = b;
        };
        p.U = function(b, a, f, h, g) {
            f = f || {};
            (f.templateEngine || e) == n && c("Set a template engine before calling renderTemplate");
            g = g || "replaceChildren";
            if (h) {
                var i = h.nodeType ? h : h.length > 0 ? h[0] : o;
                return new p.j(function() {
                    var e = typeof b == "function" ? b(a) : b, e = d(h, g, e, a, f);
                    g == "replaceNode" && (h = e, i = h.nodeType ? h : h.length > 0 ? h[0] : o);
                }, o, {
                    disposeWhen: function() { return!i || !p.a.O(i) },
                    disposeWhenNodeIsRemoved: i && g == "replaceNode" ? i.parentNode :
                        i
                });
            } else return p.k.S(function(d) { p.U(b, a, f, d, "replaceNode") });
        };
        p.Va = function(b, a, e, h) {
            return new p.j(function() {
                var g = p.a.d(a) || [];
                typeof g.length == "undefined" && (g = [g]);
                g = p.a.J(g, function(a) { return e.includeDestroyed || !a._destroy });
                p.a.la(h, g, function(a) {
                    var g = typeof b == "function" ? b(a) : b;
                    return d(o, "ignoreTargetNode", g, a, e);
                }, e);
            }, o, { disposeWhenNodeIsRemoved: h });
        };
        p.c.template = {
            update: function(b, a, d, e) {
                a = p.a.d(a());
                d = typeof a == "string" ? a : a.name;
                if (typeof a.foreach != "undefined")
                    e = p.Va(d, a.foreach || [],
                    { templateOptions: a.templateOptions, afterAdd: a.afterAdd, beforeRemove: a.beforeRemove, includeDestroyed: a.includeDestroyed, afterRender: a.afterRender }, b);
                else var g = a.data, e = p.U(d, typeof g == "undefined" ? e : g, { templateOptions: a.templateOptions, afterRender: a.afterRender }, b);
                (a = p.a.e.get(b, "__ko__templateSubscriptionDomDataKey__")) && typeof a.n == "function" && a.n();
                p.a.e.set(b, "__ko__templateSubscriptionDomDataKey__", e);
            }
        };
    })();
    p.b("ko.setTemplateEngine", p.na);
    p.b("ko.renderTemplate", p.U);
    p.a.v = function(d, e, b) {
        if (b === n)return p.a.v(d, e, 1) || p.a.v(d, e, 10) || p.a.v(d, e, Number.MAX_VALUE);
        else {
            for (var d = d || [], e = e || [], a = d, f = e, h = [], g = 0; g <= f.length; g++)h[g] = [];
            for (var g = 0, i = Math.min(a.length, b); g <= i; g++)h[0][g] = g;
            g = 1;
            for (i = Math.min(f.length, b); g <= i; g++)h[g][0] = g;
            for (var i = a.length, j, k = f.length, g = 1; g <= i; g++) {
                var m = Math.min(k, g + b);
                for (j = Math.max(1, g - b); j <= m; j++)h[j][g] = a[g - 1] === f[j - 1] ? h[j - 1][g - 1] : Math.min(h[j - 1][g] === n ? Number.MAX_VALUE : h[j - 1][g] + 1, h[j][g - 1] === n ? Number.MAX_VALUE : h[j][g - 1] + 1);
            }
            b =
                d.length;
            a = e.length;
            f = [];
            g = h[a][b];
            if (g === n)h = o;
            else {
                for (; b > 0 || a > 0;) {
                    i = h[a][b];
                    j = a > 0 ? h[a - 1][b] : g + 1;
                    k = b > 0 ? h[a][b - 1] : g + 1;
                    m = a > 0 && b > 0 ? h[a - 1][b - 1] : g + 1;
                    if (j === n || j < i - 1)j = g + 1;
                    if (k === n || k < i - 1)k = g + 1;
                    m < i - 1 && (m = g + 1);
                    j <= k && j < m ? (f.push({ status: "added", value: e[a - 1] }), a--) : (k < j && k < m ? f.push({ status: "deleted", value: d[b - 1] }) : (f.push({ status: "retained", value: d[b - 1] }), a--), b--);
                }
                h = f.reverse();
            }
            return h;
        }
    };
    p.b("ko.utils.compareArrays", p.a.v);
    (function() {
        function d(d, b, a) {
            var f = [],
                d = p.j(function() {
                    var d = b(a) || [];
                    f.length > 0 && p.a.ka(f, d);
                    f.splice(0, f.length);
                    p.a.L(f, d);
                }, o, { disposeWhenNodeIsRemoved: d, disposeWhen: function() { return f.length == 0 || !p.a.O(f[0]) } });
            return{ Oa: f, j: d };
        }

        p.a.la = function(e, b, a, f) {
            for (var b = b || [],
                f = f || {},
                h = p.a.e.get(e, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === n,
                g = p.a.e.get(e, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [],
                i = p.a.K(g, function(a) { return a.wa }),
                j = p.a.v(i, b),
                b = [],
                k = 0,
                m = [],
                i = [],
                q =
                    o,
                l = 0,
                s = j.length; l < s; l++)
                switch (j[l].status) {
                case "retained":
                    var r = g[k];
                    b.push(r);
                    r.A.length > 0 && (q = r.A[r.A.length - 1]);
                    k++;
                    break;
                case "deleted":
                    g[k].j.n();
                    p.a.h(g[k].A, function(a) {
                        m.push({ element: a, index: l, value: j[l].value });
                        q = a;
                    });
                    k++;
                    break;
                case "added":
                    var t = d(e, a, j[l].value), r = t.Oa;
                    b.push({ wa: j[l].value, A: r, j: t.j });
                    for (var t = 0, v = r.length; t < v; t++) {
                        var u = r[t];
                        i.push({ element: u, index: l, value: j[l].value });
                        q == o ? e.firstChild ? e.insertBefore(u, e.firstChild) : e.appendChild(u) : q.nextSibling ? e.insertBefore(u,
                            q.nextSibling) : e.appendChild(u);
                        q = u;
                    }
                }
            p.a.h(m, function(a) { p.u(a.element) });
            a = !1;
            if (!h) {
                if (f.afterAdd)for (l = 0; l < i.length; l++)f.afterAdd(i[l].element, i[l].index, i[l].value);
                if (f.beforeRemove) {
                    for (l = 0; l < m.length; l++)f.beforeRemove(m[l].element, m[l].index, m[l].value);
                    a = !0;
                }
            }
            a || p.a.h(m, function(a) { a.element.parentNode && a.element.parentNode.removeChild(a.element) });
            p.a.e.set(e, "setDomNodeChildrenFromArrayMapping_lastMappingResult", b);
        };
    })();
    p.b("ko.utils.setDomNodeChildrenFromArrayMapping", p.a.la);
    p.R = function() {
        this.q = function() {
            if (typeof jQuery == "undefined" || !jQuery.tmpl)return 0;
            if (jQuery.tmpl.tag) {
                if (jQuery.tmpl.tag.tmpl && jQuery.tmpl.tag.tmpl.open && jQuery.tmpl.tag.tmpl.open.toString().indexOf("__") >= 0)return 3;
                return 2;
            }
            return 1;
        }();
        this.getTemplateNode = function(d) {
            var b = document.getElementById(d);
            b == o && c(Error("Cannot find template with ID=" + d));
            return b;
        };
        var d = RegExp("__ko_apos__", "g");
        this.renderTemplate = function(e, b, a) {
            a = a || {};
            this.q == 0 && c(Error("jquery.tmpl not detected.\nTo use KO's default template engine, reference jQuery and jquery.tmpl. See Knockout installation documentation for more details."));
            if (this.q == 1)return e = '<script type="text/html">' + this.getTemplateNode(e).text + "<\/script>", b = jQuery.tmpl(e, b)[0].text.replace(d, "'"), jQuery.clean([b], document);
            if (!(e in jQuery.template)) {
                var f = this.getTemplateNode(e).text;
                jQuery.template(e, f);
            }
            b = [b];
            b = jQuery.tmpl(e, b, a.templateOptions);
            b.appendTo(document.createElement("div"));
            jQuery.fragments = {};
            return b;
        };
        this.isTemplateRewritten = function(d) {
            if (d in jQuery.template)return!0;
            return this.getTemplateNode(d).Na === !0;
        };
        this.rewriteTemplate = function(d,
            b) {
            var a = this.getTemplateNode(d), f = b(a.text);
            this.q == 1 && (f = p.a.m(f), f = f.replace(/([\s\S]*?)(\${[\s\S]*?}|{{[\=a-z][\s\S]*?}}|$)/g, function(a, b, d) { return b.replace(/\'/g, "__ko_apos__") + d }));
            a.text = f;
            a.Na = !0;
        };
        this.createJavaScriptEvaluatorBlock = function(d) {
            if (this.q == 1)return"{{= " + d + "}}";
            return"{{ko_code ((function() { return " + d + " })()) }}";
        };
        this.ta = function(d, b) { document.write("<script type='text/html' id='" + d + "'>" + b + "<\/script>") };
        p.i(this, "addTemplate", this.ta);
        this.q > 1 && (jQuery.tmpl.tag.ko_code =
        { open: (this.q < 3 ? "_" : "__") + ".push($1 || '');" });
    };
    p.R.prototype = new p.Y;
    p.na(new p.R);
    p.b("ko.jqueryTmplTemplateEngine", p.R);
})(window);