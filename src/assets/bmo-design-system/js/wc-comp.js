setTimeout(function() {
    ! function(t) { var e = {};

        function s(i) { if (e[i]) return e[i].exports; var a = e[i] = { i: i, l: !1, exports: {} }; return t[i].call(a.exports, a, a.exports, s), a.l = !0, a.exports }
        s.m = t, s.c = e, s.d = function(t, e, i) { s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }) }, s.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, s.t = function(t, e) { if (1 & e && (t = s(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var i = Object.create(null); if (s.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var a in t) s.d(i, a, function(e) { return t[e] }.bind(null, a)); return i }, s.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return s.d(e, "a", e), e }, s.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, s.p = "", s(s.s = 0) }([function(t, e, s) { "use strict";
        s.r(e);
        class i extends HTMLElement { constructor() { super() }
            connectedCallback() { this.innerHTML;
                this.classList.add("bmo-container"), this.innerHTML.bmoContent, this.hasAttribute("flex") && (this.classList.remove("bmo-container"), this.classList.add("bmo-container-flex")) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("bmo-container", i);
        class a extends HTMLElement { constructor() { super() }
            connectedCallback() { this.innerHTML;
                this.classList.add("row"), this.innerHTML.bmoContent, this.hasAttribute("flex") && (this.classList.remove("row"), this.classList.add("flex-row")) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("bmo-row", a);
        class r extends HTMLElement { constructor() { super() }
            get width() { return this.getAttribute("width") }
            set width(t) { t && this.setAttribute("width", t) }
            get max() { return this.getAttribute("max") }
            set max(t) { t && this.setAttribute("max", t) }
            get xl() { return this.getAttribute("xl") }
            set xl(t) { t && this.setAttribute("xl", t) }
            get lg() { return this.getAttribute("lg") }
            set lg(t) { t && this.setAttribute("lg", t) }
            get md() { return this.getAttribute("md") }
            set md(t) { t && this.setAttribute("md", t) }
            get sm() { return this.getAttribute("sm") }
            set sm(t) { t && this.setAttribute("sm", t) }
            get xms() { return this.getAttribute("xsm") }
            set xsm(t) { t && this.setAttribute("xsm", t) }
            connectedCallback() { this.innerHTML;
                this.classList.add("grid"), this.innerHTML.bmoContent, this.hasAttribute("flex") && (this.classList.remove("grid"), this.classList.add("flex")), this.hasAttribute("mf") && (this.classList.remove("grid"), this.classList.add("mf"), this.classList.add("grid")), this.hasAttribute("width") && this.classList.add("col-" + this.width), this.hasAttribute("xl") && this.classList.add("xl-col-" + this.xl), this.hasAttribute("lg") && this.classList.add("lg-col-" + this.lg), this.hasAttribute("md") && this.classList.add("md-col-" + this.md), this.hasAttribute("sm") && this.classList.add("sm-col-" + this.sm), this.hasAttribute("xsm") && this.classList.add("xms-col-" + this.xsm), this.hasAttribute("max") && this.classList.add("max-col-" + this.max) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("bmo-grid", r);
        class l extends HTMLElement { constructor() { super() }
            get labelText() { return this.getAttribute("label") }
            set labelText(t) { t && this.setAttribute("label", t) }
            get icon() { return this.getAttribute("icon") }
            set icon(t) { t && l.classList.add("icon", t) }
            get iconSize() { return this.getAttribute("icon-size") }
            set iconSize(t) { t && l.classList.add("icon-size", t) }
            get iconColor() { return this.getAttribute("icon-color") }
            set iconColor(t) { t && l.classList.add("icon-color", t) }
            connectedCallback() { this.innerHTML = "<button></button>"; const t = this.querySelector("button"); if (t.textContent = this.labelText, this.hasAttribute("primary") && t.classList.add("primary"), this.hasAttribute("secondary") && t.classList.add("secondary"), this.hasAttribute("tertiary")) { t.classList.add("tertiary"); let e = document.createElement("span");
                    t.innerHTML = "", e.innerHTML = this.labelText, t.appendChild(e) } if (this.hasAttribute("has-icon")) { t.insertAdjacentHTML("afterbegin", '<span class="icon"></span>'); const e = this.querySelector(".icon");
                    e.classList.add(this.icon), e.classList.add("medium"), e.classList.add(this.iconColor) } if (this.hasAttribute("icon-button")) { t.classList.add("icon-button"), t.classList.add(this.iconSize); let e = document.createElement("span");
                    t.appendChild(e); let s = this.querySelector("span");
                    s.classList.add("icon"), s.classList.add(this.icon), s.classList.add(this.iconSize), s.classList.add(this.iconColor) }
                this.hasAttribute("disabled") && t.setAttribute("disabled", ""), this.hasAttribute("small") && t.classList.add("small"), this.hasAttribute("micro") && t.classList.add("micro"), this.hasAttribute("modal-trigger") && (t.setAttribute("aria-haspopup", "true"), t.classList.add("modal-trigger")), this.hasAttribute("popover-trigger") && (t.setAttribute("aria-haspopup", "true"), t.classList.add("popover-trigger")), this.hasAttribute("submit") && t.setAttribute("type", "submit") }
            disconnectedCallback() {}
            static get observedAttributes() { return ["disabled"] }
            attributeChangedCallback(t, e, s) { this.querySelector("button");
                this.hasAttribute("disabled") || this.removeAttribute("disabled") } }
        customElements.define("bmo-button", l);
        class n extends HTMLElement { constructor() { super() }
            get badgeStyle() { return this.getAttribute("styled") }
            set badgeStyle(t) { t && this.setAttribute("styled", t) }
            connectedCallback() { this.querySelector(".new-component");
                this.classList.add("badge"), this.classList.add(this.badgeStyle), this.hasAttribute("small") && this.classList.add("small"), this.hasAttribute("has-attribute-demo-specific") } }
        customElements.define("bmo-badge", n);
        class o extends HTMLElement { constructor() { super() }
            get iconName() { return this.getAttribute("icon") }
            set iconName(t) { t && this.setAttribute("icon", t) }
            connectedCallback() { var t = this.iconName;
                t = t.charAt(0).toUpperCase() + t.slice(1).replace(/-/g, " "), this.classList.add("icon"), this.setAttribute("title", t), this.setAttribute("role", "presetation"), this.hasAttribute("small") && this.classList.add("small"), this.hasAttribute("medium") && this.classList.add("medium"), this.hasAttribute("large") && this.classList.add("large"), this.hasAttribute("icon") && this.classList.add(this.iconName), this.hasAttribute("white") && this.classList.add("white"), this.hasAttribute("granite") && this.classList.add("granite") }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("bmo-icon", o);
        class c extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="display-1">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("display-1", c);
        class d extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="display-2">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("display-2", d);
        class u extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="headline-1">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("headline-1", u);
        class h extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="title-1">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("title-1", h);
        class b extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="sub-heading">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("sub-heading", b);
        class m extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="body-1">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("body-1", m);
        class g extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="body-2">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("body-2", g);
        class p extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="body-3">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("body-3", p);
        class v extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="disclaimer-1">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("disclaimer-1", v);
        class f extends HTMLElement { constructor() { super() }
            get sV() { return this.getAttribute("sv") }
            set sV(t) { t && this.setAttribute("sv", t) }
            get textColor() { return this.getAttribute("text-color") }
            set textColor(t) { t && this.setAttribute("text-color", t) }
            connectedCallback() { const t = this.innerHTML;
                setTimeout(() => { this.innerHTML = "<" + this.sV + ' class="disclaimer-2">' + t + "</" + this.sVS + ">"; const e = this.firstChild; "span" === this.getAttribute("sv") && (this.style.display = "inline"), this.hasAttribute("bold") && e.classList.add("bold"), this.hasAttribute("medium") && e.classList.add("medium"), this.hasAttribute("light") && e.classList.add("light"), this.hasAttribute("text-color") && e.classList.add(this.textColor) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("disclaimer-2", f);
        class A extends HTMLElement { constructor() { super() }
            connectedCallback() { this.classList.add("bmo-card"), this.hasAttribute("interactive") && (this.classList.add("hover"), this.setAttribute("tabindex", "0")), this.hasAttribute("flat") && this.classList.add("flat"), this.hasAttribute("no-pad") && this.classList.add("no-pad"), this.hasAttribute("has-attribute-demo-specific") } }
        customElements.define("bmo-card", A);
        class y extends HTMLElement { constructor() { super() }
            get labelText() { return this.getAttribute("label") }
            set labelText(t) { t && this.setAttribute("label", t) }
            connectedCallback() { this.innerHTML = '<div class="bmo-switch-wrap"><input type="checkbox"><label class="activate-switch"><span class="switch-label left">Show Personal Account</span><div class="bmo-switch-rail"></div><span role="button" tabindex="0" class="bmo-switch"></span></label></div>'; const t = this.querySelector(".bmo-switch-wrap"),
                    e = this.querySelector(".switch-label.left"),
                    s = this.querySelector(".bmo-switch-rail"),
                    i = this.querySelector(".bmo-switch"),
                    a = this.querySelector("input"),
                    r = this.querySelector(".activate-switch"),
                    l = this.labelText + " is on",
                    n = this.labelText + " is off";
                e.textContent = this.labelText, y.disabled = this.isDisabled, i.setAttribute("aria-label", "Toggle " + this.labelText); const o = e.innerHTML.replace(/\s+/g, "-").toLowerCase();
                r.setAttribute("for", o), a.setAttribute("name", o), a.setAttribute("id", o), this.hasAttribute("checked") && (s.classList.add("active"), switchesButton.classList.add("active"), a.toggleAttribute("checked")), this.hasAttribute("fullWidth") && (y.textContent = "", t.classList.add("full-width")); const c = () => { s.classList.toggle("active"), i.classList.toggle("active"), a.toggleAttribute("checked"), a.hasAttribute("checked") ? i.setAttribute("aria-label", l) : i.setAttribute("aria-label", n), i.blur(), i.focus() };
                setTimeout((function() { r.addEventListener("click", (function() { event.preventDefault(), c() })), r.addEventListener("keydown", (function(t) { switch (t.keyCode) {
                            case 32:
                                t.preventDefault(), c(); break;
                            case 13:
                                c() } })) }), 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["checked"] }
            attributeChangedCallback(t, e, s) { const i = this.querySelector(".bmo-switch-rail"),
                    a = this.querySelector(".bmo-switch"),
                    r = this.querySelector("input");
                r.hasAttribute("checked"), i.classList.toggle("active"), a.classList.toggle("active"), r.toggleAttribute("checked") } }
        customElements.define("bmo-switch", y);
        class L extends HTMLElement { constructor() { super() }
            get labelText() { return this.getAttribute("label") }
            set labelText(t) { t && this.setAttribute("label", t) }
            get labelDual() { return this.getAttribute("label-2") }
            set labelDual(t) { t && this.setAttribute("label-2", t) }
            get isDisabled() { return this.getAttribute("disabled") }
            set isDisabled(t) { t && this.setAttribute("disabled", t) }
            connectedCallback() { this.innerHTML = '<div class="bmo-switch-wrap dual"><input type="checkbox"><label class="activate-switch"><span class="switch-label left">Show Personal Account</span><div class="bmo-switch-rail"></div><span role="button" tabindex="0" class="bmo-switch"></span><span class="switch-label right" id="right-label-daul"></span></label></div>';
                this.querySelector(".bmo-switch-wrap"); const t = this.querySelector(".switch-label.left"),
                    e = this.querySelector(".switch-label.right"),
                    s = this.querySelector(".bmo-switch-rail"),
                    i = this.querySelector(".bmo-switch"),
                    a = this.querySelector("input"),
                    r = this.querySelector(".activate-switch");
                t.textContent = this.labelText, e.textContent = this.labelDual, i.setAttribute("aria-label", "Toggle " + this.labelText); const l = t.innerHTML.replace(/\s+/g, "-").toLowerCase();
                r.setAttribute("for", l), a.setAttribute("name", l), a.setAttribute("id", l); const n = e.innerHTML.replace(/\s+/g, "-").toLowerCase();
                r.setAttribute("for", l + "-" + n), a.setAttribute("name", l + "-" + n), a.setAttribute("id", l + "-" + n); const o = this.labelText,
                    c = this.labelDual;
                i.setAttribute("aria-label", "switch between " + this.labelText + " and " + this.labelDual + " " + this.labelText + " is currently active"), this.hasAttribute("ios") && (s.classList.add("ios"), i.classList.add("ios")); const d = () => { s.classList.toggle("active"), i.classList.toggle("active"), a.toggleAttribute("checked"), a.hasAttribute("checked") ? i.setAttribute("aria-label", c + " is on. press to switch to " + o) : i.setAttribute("aria-label", o + " is on. press to switch to " + c), i.blur(), i.focus() };
                this.hasAttribute("checked") && d(), setTimeout((function() { r.addEventListener("click", (function() { event.preventDefault(), d() })), r.addEventListener("keydown", (function(t) { switch (t.keyCode) {
                            case 32:
                                t.preventDefault(), d(); break;
                            case 13:
                                d() } })) }), 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["checked"] }
            attributeChangedCallback(t, e, s) { const i = this.querySelector(".bmo-switch-rail"),
                    a = this.querySelector(".bmo-switch"),
                    r = this.querySelector("input"),
                    l = this.labelText,
                    n = this.labelDual,
                    o = () => { i.classList.toggle("active"), a.classList.toggle("active"), r.toggleAttribute("checked"), r.hasAttribute("checked") ? a.setAttribute("aria-label", n + " is on. press to switch to " + l) : a.setAttribute("aria-label", l + " is on. press to switch to " + n), a.blur(), a.focus() };
                this.hasAttribute("checked"), o() } } if (customElements.define("dual-switch", L), navigator.userAgent.toLowerCase().indexOf("android") > -1) { var x = document.querySelectorAll(".bmo-switch-wrap .bmo-switch");
            [].forEach.call(x, (function(t) { t.classList.add("ios") })); var k = document.querySelectorAll(".bmo-switch-wrap .bmo-switch-rail");
            [].forEach.call(k, (function(t) { t.classList.add("ios") })) }
        class C extends HTMLElement { constructor() { super() }
            connectedCallback() { const t = this.innerHTML;
                this.innerHTML = '<ul class="tab-list"></ul>'; const e = this.querySelector(".tab-list");
                document.createElement("span").innerHTML = '<span class="tablist-guideline" aria-hidden="true"></span>', e.parentNode.classList.add("bmo-tabs-wrap"), e.parentNode.setAttribute("id", "bmo-tabs-wrap"), e.setAttribute("role", "tablist"), e.setAttribute("aria-label", "Use right and left arrows to navigate between tabs"), e.innerHTML = t } }
        customElements.define("tab-list", C);
        class S extends HTMLElement { constructor() { super() }
            get tabText() { return this.getAttribute("label") }
            set tabText(t) { t && this.setAttribute("label", t) }
            get activeTab() { return this.getAttribute("active") }
            set activeTab(t) { t && this.setAttribute("active", t) }
            static get observedAttributes() { return ["active"] }
            connectedCallback() { this.innerHTML = '<span class="tab-indicator"></span>'; const t = this.querySelector(".tab-indicator");
                t.parentNode.classList.add("tab"), t.parentNode.setAttribute("role", "tab"), t.parentNode.setAttribute("tabindex", "-1"), t.parentNode.textContent = this.tabText; let e = document.createElement("span");
                e.classList.add("tab-indicator"), this.appendChild(e), this.hasAttribute("active") && (this.classList.add(this.active), this.setAttribute("tabindex", "0")); var s = 0,
                    i = document.querySelectorAll(".tab");
                [].forEach.call(i, (function(t) { s++, t.setAttribute("id", "tab-" + s), t.setAttribute("aria-controls", "tab-" + s + "-panel") })); const a = t => { this.nextElementSibling.focus() },
                    r = t => { this.previousElementSibling.focus() },
                    l = t => { this.querySelector(".tab");
                        this.setAttribute("active", ""), this.focus(), this.setAttribute("tabindex", "0");
                        this.id;
                        document.querySelector("#" + this.id + "-panel").setAttribute("active", ""); var e = document.querySelector(".bmo-tabs-wrap"); const s = document.querySelectorAll(".tab");
                        [].slice.call(s); var i = this.offsetLeft - Math.abs(e.offsetWidth - this.offsetWidth) / 2;
                        e.scrollLeft = i };
                setTimeout(() => { this.addEventListener("click", (function() { l() })), this.addEventListener("keypress", (function() { switch (event.keyCode) {
                            case 13:
                                l() } })), this.addEventListener("keydown", (function(t) { switch (t.keyCode || t.which) {
                            case 39:
                                t.preventDefault(), a(); break;
                            case 37:
                                t.preventDefault(), r() } })) }, 100) }
            attributeChangedCallback(t, e, s) { if (console.log("Attribute changed:", t, e, s), "active" === t) { var i = document.querySelectorAll(".tab");
                    [].forEach.call(i, (function(t) { t.removeAttribute("tabindex"), t.classList.remove("active-tab-label"), t.setAttribute("tabindex", "-1"), t.setAttribute("aria-selected", "false") })), this.classList.add("active-tab-label"), this.setAttribute("aria-selected", "true") } } }
        customElements.define("bmo-tab", S);
        class E extends HTMLElement { constructor() { super() }
            get activePanel() { return this.getAttribute("active") }
            set activePanel(t) { t && this.setAttribute("active", t) }
            connectedCallback() { const t = this.innerHTML;
                this.innerHTML = '<div class="panel-content"></div'; const e = this.querySelector(".panel-content");
                e.parentNode.classList.add("tab-panel"), e.parentNode.setAttribute("role", "tabpanel"), e.innerHTML = t, this.hasAttribute("active"); var s = 0,
                    i = document.querySelectorAll(".tab-panel");
                [].forEach.call(i, (function(t) { s++, t.setAttribute("id", "tab-" + s + "-panel"), t.setAttribute("aria-describedby", "tab-" + s) })) }
            static get observedAttributes() { return ["active"] }
            attributeChangedCallback(t, e, s) { if (console.log("Attribute changed:", t, e, s), "active" === t) { var i = document.querySelectorAll("tab-panel");
                    [].forEach.call(i, (function(t) { t.removeAttribute("tabindex"), t.removeAttribute("active"), t.classList.remove("active-tab-content") })), this.setAttribute("aria-selected", "true"), this.classList.add("active-tab-content"), this.setAttribute("aria-hidden", "false") } } }
        customElements.define("tab-panel", E);
        class T extends HTMLElement { constructor() { super() }
            get alertTitle() { return this.getAttribute("heading") }
            set alertTitle(t) { t && this.setAttribute("heading", t) }
            get dismissable() { return this.getAttribute("dismissable") }
            set dismissable(t) { t && this.setAttribute("dismissable", t) }
            connectedCallback() { const t = this.innerHTML;
                this.classList.add("alert-notification"), this.innerHTML = '<div class="bmo-container"><span class="notification-icon icon medium"></span><div class="alert-message-wrap"><p></p><div> ' + t + "</div></div></div>"; const e = this.querySelector(".alert-notification .icon"),
                    s = this.querySelector(".alert-notification  p:first-of-type"),
                    i = (this.querySelector(".alert-notification .alert-message-wrap div:first-of-type"), this.querySelector(".alert-message-wrap"));
                this.hasAttribute("success") && (this.classList.add("alert-success"), e.classList.add("success-green")), this.hasAttribute("info") && (this.classList.add("alert-info"), e.classList.add("info-blue")), this.hasAttribute("warning") && (this.classList.add("alert-warning"), e.classList.add("warning-yellow")), this.hasAttribute("danger") && (this.classList.add("alert-danger"), e.classList.add("error-red")), this.hasAttribute("dismissable") && (i.insertAdjacentHTML("afterend", '<bmo-button label="close this notification" icon-button icon-size="medium" icon="close" icon-color="granite" class="pull-right"></bmo-button>'), setTimeout((function() { const t = document.querySelectorAll("bmo-notification > div > bmo-button > button");
                    [].forEach.call(t, (function(t) { t.addEventListener("click", (function() { this.parentElement.parentElement.parentElement.style.display = "none" })) })) }), 200)), this.hasAttribute("alert") && this.setAttribute("role", "alert"), s.textContent = this.alertTitle } }
        customElements.define("bmo-notification", T);
        class w extends HTMLElement { constructor() { super() }
            connectedCallback() { this.classList.add("bmo-accordion") } }
        customElements.define("bmo-accordion", w);
        class M extends HTMLElement { constructor() { super() }
            get labelText() { return this.getAttribute("label") }
            set labelText(t) { t && this.setAttribute("label", t) }
            get iconName() { return this.getAttribute("icon") }
            set iconName(t) { t && this.setAttribute("icon", t) }
            connectedCallback() { if (this.classList.add("accordion-trigger"), this.setAttribute("tabindex", "0"), this.setAttribute("role", "tab"), this.setAttribute("aria-expanded", "false"), this.innerHTML = '<bmo-icon medium icon="' + this.iconName + '" aria-hidden="true"></bmo-icon>' + this.labelText + '<span class="short-border"></span>', this.parentElement.hasAttribute("compact") && (this.classList.add("trigger-compact"), this.innerHTML = '<bmo-icon small icon="' + this.iconName + '" aria-hidden="true"></bmo-icon>' + this.labelText), this.parentElement.hasAttribute("icon-right")) { this.querySelector(".accordion-trigger .icon").classList.add("pull-right") } const t = () => { this.toggleAttribute("expanded"), this.nextElementSibling.toggleAttribute("expanded") };
                setTimeout(() => { this.addEventListener("click", (function() { t() })), this.addEventListener("keydown", (function() { switch (event.keyCode) {
                            case 32:
                            case 13:
                                t(); break;
                            case 40:
                                this.setAttribute("expanded", ""), this.nextElementSibling.setAttribute("expanded", "") } })), this.addEventListener("keypress", (function() { switch (event.keyCode) {
                            case 40:
                                this.setAttribute("expanded", ""), this.nextElementSibling.setAttribute("expanded", "") } })), this.addEventListener("keyup", (function() { switch (event.keyCode) {
                            case 38:
                                this.removeAttribute("expanded"), this.nextElementSibling.removeAttribute("expanded") } })) }, 300) }
            static get observedAttributes() { return ["expanded"] }
            attributeChangedCallback(t, e, s) { if ("expanded" === t) { const t = this.querySelector(".accordion-trigger .icon"),
                        e = this.querySelector(".short-border");
                    setTimeout(() => { "false" === this.getAttribute("aria-expanded") ? (this.setAttribute("aria-expanded", "true"), e.style.display = "none") : (this.setAttribute("aria-expanded", "false"), e.style.display = "block"), t.classList.contains("expanded") ? t.classList.remove("expanded") : t.classList.add("expanded") }, 10) } } }
        customElements.define("acc-trigger", M);
        class q extends HTMLElement { constructor() { super() }
            connectedCallback() { const t = this.innerHTML;
                this.setAttribute("role", "tabpanel"), this.classList.add("accordion-panel"), this.innerHTML = '<div class="panel-content">' + t + "</div>";
                this.querySelector(".panel-content").offsetHeight;
                this.insertAdjacentHTML("beforeend", '<span class="short-border"></span>') }
            static get observedAttributes() { return ["expanded"] }
            attributeChangedCallback(t, e, s) { if ("expanded" === t)
                    if (this.classList.toggle("expanded"), this.classList.contains("expanded")) { const t = this.querySelector(".panel-content").offsetHeight;
                        console.log(t), this.style.height = t + "px" } else this.removeAttribute("style") } }
        customElements.define("acc-panel", q);
        class H { constructor(t, e) { this.field = t, this.container = t.parentElement, this.matchWith = e; const s = this.container.querySelector(".min-eight"),
                    i = this.container.querySelector(".one-num"),
                    a = this.container.querySelector(".special-char"),
                    r = this.container.querySelector(".lower-case"),
                    l = this.container.querySelector(".upper-case"),
                    n = this.container.querySelector(".matching");
                e && (n.style.display = "block"), this.field.addEventListener("keyup", () => { this.field.value.length ? (this.chkEightChars(s), this.chkNum(i), this.chkSpecialChar(a), this.chkLowerCase(r), this.chkUpperCase(l), e && this.chkMatching(n)) : [s, i, a, r, l, n].forEach(t => { t.classList.remove("fail"), t.classList.remove("pass") }) }) }
            static pass(t) { t.classList.remove("fail"), t.classList.add("pass") }
            static fail(t) { t.classList.remove("pass"), t.classList.add("fail") }
            chkEightChars(t) { H[this.field.value.length > 7 ? "pass" : "fail"](t) }
            chkNum(t) { H[/[0-9]/gi.test(this.field.value) ? "pass" : "fail"](t) }
            chkSpecialChar(t) { H[/(.*\W)/g.test(this.field.value) ? "pass" : "fail"](t) }
            chkLowerCase(t) { H[/[a-z]/g.test(this.field.value) ? "pass" : "fail"](t) }
            chkUpperCase(t) { H[/[A-Z]/g.test(this.field.value) ? "pass" : "fail"](t) }
            chkMatching(t) { H[this.matchWith.value === this.field.value ? "pass" : "fail"](t) } }
        class D extends HTMLElement { constructor() { super() }
            get inputLabel() { return this.getAttribute("label") }
            set inputLabel(t) { t && this.setAttribute("label", t) }
            get helperText() { return this.getAttribute("helper-text") }
            set helperText(t) { t && this.setAttribute("helper-text", t) }
            get errorMessage() { return this.getAttribute("error-message") }
            set errorMessage(t) { t && this.setAttribute("error-message", t) }
            get TextInputType() { return this.getAttribute("type") }
            set TextInputType(t) { t && this.setAttribute("type", t) }
            get initialValue() { return this.getAttribute("iv") }
            set initialValue(t) { t && this.setAttribute("iv", t) }
            get maxLength() { return this.getAttribute("maxlength") }
            set maxLength(t) { t && this.setAttribute("maxlength", t) }
            connectedCallback() { this.innerHTML = '<div class="form-field"><div class="form-label-group"><input type="text" class="input text"><label class="slide-label"><span class="label-text"></span></label><span class="error-message" role="alert"></span><span class="input-helper-text"></span></div>';
                this.querySelector(".form-field"); const t = this.querySelector(".slide-label"),
                    e = this.querySelector(".label-text"),
                    s = this.querySelector(".input-helper-text"),
                    i = this.querySelector(".input"),
                    a = this.querySelector(".input"),
                    r = this.querySelector(".error-message");
                this.querySelector(".form-field bmo-icon.inline-error");
                e.innerHTML = this.inputLabel, s.innerHTML = this.helperText; const l = this.querySelector(".label-text").innerHTML.replace(/\s+/g, "-").toLowerCase(); if (t.setAttribute("for", l), i.setAttribute("name", l), a.setAttribute("id", l), a.value = this.initialValue, r.innerHTML = this.errorMessage, r.setAttribute("id", "error-" + l), s.setAttribute("id", "helper-" + l), a.setAttribute("aria-describedby", "error-" + l), this.hasAttribute("maxlength") && a.setAttribute("maxlength", this.maxLength), this.hasAttribute("readonly") && a.setAttribute("readonly", ""), this.hasAttribute("maxlength") && a.setAttribute("maxlength", this.maxLength), this.hasAttribute("autofocus") && a.focus(), this.hasAttribute("iv") && a.setAttribute("value", this.initialValue), "email" === this.getAttribute("type") && a.setAttribute("type", "email"), "hidden" === this.getAttribute("type") && a.setAttribute("type", "hidden"), "number" === this.getAttribute("type") && a.setAttribute("type", "number"), "email" === this.getAttribute("type") && a.setAttribute("type", "email"), "password" === this.getAttribute("type") && a.setAttribute("type", "password"), "tel" === this.getAttribute("type") && (a.setAttribute("type", "tel"), a.addEventListener("input", (function(t) { var e = t.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                        t.target.value = e[2] ? "(" + e[1] + ") " + e[2] + (e[3] ? "-" + e[3] : "") : e[1] }))), "set-password" === this.getAttribute("type")) {
                    function n(t, e) { e.parentNode.insertBefore(t, e.nextSibling) }
                    a.setAttribute("type", "password"), a.classList.add("set-password"), (o = document.createElement("div")).innerHTML = '<div class="half-input-width"><span class="input-helper-text-pass-fail min-eight">Minimum 8 characters</span><span class="input-helper-text-pass-fail one-num">Minimum 1 number</span><span class="input-helper-text-pass-fail special-char ">Minimum 1 special character</span></div><div class="half-input-width"><span class="input-helper-text-pass-fail lower-case">Minimum 1 lower case letter</span><span class="input-helper-text-pass-fail upper-case">Minimum 1 upper case letter</span></div>', n(o, this.querySelector("label")) } if ("match-password" === this.getAttribute("type")) {
                    function n(t, e) { e.parentNode.insertBefore(t, e.nextSibling) } var o;
                    a.setAttribute("type", "password"), a.classList.add("set-password"), (o = document.createElement("div")).innerHTML = '<div class="half-input-width"><span class="input-helper-text-pass-fail min-eight" style="display: none;">Minimum 8 characters</span><span class="input-helper-text-pass-fail one-num" style="display: none;">Minimum 1 number</span><span class="input-helper-text-pass-fail special-char" style="display: none;">Minimum 1 special character</span><span class="input-helper-text-pass-fail lower-case" style="display: none;">Minimum 1 lower case letter</span><span class="input-helper-text-pass-fail upper-case" style="display: none;">Minimum 1 upper case letter</span><span class="input-helper-text-pass-fail matching" style="display: block;">Matches</span></div>', n(o, this.querySelector("label")) }
                setTimeout((function() { var t, e;

                    function s() { this.nextElementSibling.classList[this.value.length ? "add" : "remove"]("active-label") }
                    t = document.querySelectorAll("input, select, textarea"), (t = Array.prototype.slice.call(t)).forEach((function(t) { "radio" !== t.type && (s.call(t), t.addEventListener("change", s)) })), e = document.querySelectorAll(".input.set-password"), (e = Array.prototype.slice.call(e)).forEach((function(t, s) { new H(t, s > 0 ? e[0] : null) })) }), 200) }
            static get observedAttributes() { return ["error", "disabled", "readonly", "mercury"] }
            attributeChangedCallback(t, e, s) { setTimeout(() => { const e = this.querySelector(".slide-label"),
                        s = this.querySelector(".input"),
                        i = this.querySelector(".error-message"),
                        a = (this.querySelector(".form-field bmo-icon.inline-error"), this.querySelector(".form-field")); "error" === t && (i.classList.toggle("error"), e.classList.toggle("error-field"), s.classList.toggle("error")), "disabled" === t && (s.toggleAttribute("disabled"), e.classList.toggle("disabled")), "mercury" === t && a.classList.toggle("mercury") }, 80) } }
        customElements.define("text-input", D);
        class $ extends HTMLElement { constructor() { super() }
            get inputLabel() { return this.getAttribute("label") }
            set inputLabel(t) { t && this.setAttribute("label", t) }
            get helperText() { return this.getAttribute("helper-text") }
            set helperText(t) { t && this.setAttribute("helper-text", t) }
            get errorMessage() { return this.getAttribute("error-message") }
            set errorMessage(t) { t && this.setAttribute("error-message", t) }
            get initialValue() { return this.getAttribute("iv") }
            set initialValue(t) { t && this.setAttribute("iv", t) }
            connectedCallback() { this.innerHTML = '<div class="form-field textarea-field"><div class="form-label-group"><textarea class="input textarea scrollbar" rows="1"></textarea><label class="slide-label"><span class="label-text"></span></label><span class="error-message" role="alert"></span><span class="input-helper-text"></span></div>';
                this.querySelector(".form-field"); const t = this.querySelector(".slide-label"),
                    e = this.querySelector(".label-text"),
                    s = this.querySelector(".input-helper-text"),
                    i = this.querySelector(".input.textarea"),
                    a = this.querySelector(".input.textarea"),
                    r = this.querySelector(".error-message");
                e.innerHTML = this.inputLabel, s.innerHTML = this.helperText; const l = this.querySelector(".label-text").innerHTML.replace(/\s+/g, "-").toLowerCase();
                t.setAttribute("for", l), i.setAttribute("name", l), a.setAttribute("id", l), a.value = this.initialValue, r.innerHTML = this.errorMessage, r.setAttribute("id", "error-" + l), s.setAttribute("id", "helper-" + l), a.setAttribute("aria-describedby", "error-" + l), this.hasAttribute("autofocus") && a.focus(), this.hasAttribute("iv") && a.setAttribute("value", this.initialValue), "hidden" === this.getAttribute("type") && a.setAttribute("type", "hidden"), setTimeout((function() { var t;

                    function e() { this.nextElementSibling.classList[this.value.length ? "add" : "remove"]("active-label") }
                    t = document.querySelectorAll(".input.textarea"), (t = Array.prototype.slice.call(t)).forEach((function(t) { "radio" !== t.type && (e.call(t), t.addEventListener("change", e)) })) }), 200); const n = this.querySelector(".input.textarea");
                document.addEventListener("input", t => { this.querySelector("textarea").classList.contains(n) || t.target.autoExpand() }, !1), HTMLTextAreaElement.prototype.autoExpand = function() { this.style.height = "inherit"; var t = this.scrollHeight;
                    this.style.height = t + "px" }, HTMLTextAreaElement.prototype.dynamicValue = function(t) { this.querySelector("textarea").classList.contains(n) && (this.value = t, this.autoExpand()) } }
            static get observedAttributes() { return ["error", "disabled", "readonly", "mercury"] }
            attributeChangedCallback(t, e, s) { setTimeout(() => { const e = this.querySelector(".form-field"),
                        s = this.querySelector(".slide-label"),
                        i = this.querySelector(".input.textarea"),
                        a = this.querySelector(".error-message");
                    this.querySelector(".form-field bmo-icon.inline-error"); "error" === t && (a.classList.toggle("error"), s.classList.toggle("error-field"), i.classList.toggle("error")), "disabled" === t && (i.toggleAttribute("disabled"), s.classList.toggle("disabled")), "readonly" === t && i.toggleAttribute("readonly"), "mercury" === t && e.classList.toggle("mercury") }, 80) } }
        customElements.define("bmo-textarea", $);
        class N extends HTMLElement { constructor() { super() }
            get inputLabel() { return this.getAttribute("label") }
            set inputLabel(t) { t && this.setAttribute("label", t) }
            get helperText() { return this.getAttribute("helper-text") }
            set helperText(t) { t && this.setAttribute("helper-text", t) }
            get errorMessage() { return this.getAttribute("error-message") }
            set errorMessage(t) { t && this.setAttribute("error-message", t) }
            connectedCallback() { const t = this.innerHTML;
                this.innerHTML = '<div class="form-field"><div class="form-label-group"><select class="select"><select><label class="slide-label select-label"><span class="label-text"></span></label><bmo-icon small icon="baby-chevy-down"></bmo-icon><span class="error-message select-error" role="alert"></span><span class="input-helper-text select-helper"></span></div>'; const e = this.querySelector(".slide-label"),
                    s = this.querySelector(".label-text"),
                    i = this.querySelector(".input-helper-text"),
                    a = this.querySelector(".select"),
                    r = this.querySelector(".select"),
                    l = this.querySelector(".error-message");
                s.innerHTML = this.inputLabel, i.innerHTML = this.helperText; const n = this.querySelector(".label-text").innerHTML.replace(/\s+/g, "-").toLowerCase();
                e.setAttribute("for", n), a.setAttribute("name", n), r.setAttribute("id", n), r.innerHTML = t, r.value = this.initialValue, l.innerHTML = this.errorMessage, l.setAttribute("id", "error-" + n), i.setAttribute("id", "helper-" + n), r.setAttribute("aria-describedby", "error-" + n); const o = this.querySelectorAll("option");
                [].forEach.call(o, (function(t) { let e = t.innerHTML;
                    t.setAttribute("value", e) })), this.hasAttribute("autofocus") && r.focus() }
            static get observedAttributes() { return ["error", "disabled", "readonly", "mercury"] }
            attributeChangedCallback(t, e, s) { setTimeout(() => { const e = this.querySelector(".slide-label"),
                        s = this.querySelector(".select"),
                        i = this.querySelector(".error-message"),
                        a = (this.querySelector(".form-field .icon.inline-error"), this.querySelector(".form-field")); "error" === t && (i.classList.toggle("error"), e.classList.toggle("error-field"), s.classList.toggle("error")), "disabled" === t && (s.toggleAttribute("disabled"), e.classList.toggle("disabled")), "readonly" === t && s.toggleAttribute("readonly"), "mercury" === t && a.classList.toggle("mercury") }, 300) } }
        customElements.define("bmo-select", N), setTimeout((function() { var t, e;

            function s() { this.nextElementSibling.classList[this.value.length ? "add" : "remove"]("active-label") }
            t = document.querySelectorAll(".select"), (t = Array.prototype.slice.call(t)).forEach((function(t) { "radio" !== t.type && (s.call(t), t.addEventListener("change", s)) })), e = document.querySelectorAll(".input.set-password"), (e = Array.prototype.slice.call(e)).forEach((function(t, s) { new H(t, s > 0 ? e[0] : null) })) }), 200);
        class O extends HTMLElement { constructor() { super() }
            get groupLabel() { return this.getAttribute("group-label") }
            set groupLabel(t) { t && this.setAttribute("group-label", t) }
            get errorMessage() { return this.getAttribute("error-message") }
            set errorMessage(t) { t && this.setAttribute("error-message", t) }
            connectedCallback() { this.classList.add("radio-group"); const t = this.innerHTML;
                this.innerHTML = '<fieldset class="input-wrap input-radio"><legend class="legend"></legend><span class="error-message" role="alert"></span></fieldset>'; const e = this.querySelector("legend");
                this.querySelector(".error-message").textContent = this.errorMessage, e.innerHTML = this.groupLabel; let s = document.createElement("div");
                s.innerHTML = t, e.parentNode.insertBefore(s, e.nextElementSibling), setTimeout(() => { const t = e.innerHTML.replace(/\s+/g, "-").toLowerCase(); var s = this.querySelectorAll(".radio,.box-radio");
                    [].forEach.call(s, (function(e) { e.setAttribute("name", t) })) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["error", "disabled", "readonly"] }
            attributeChangedCallback(t, e, s) { "disabled" === t && setTimeout(() => { this.querySelector("fieldset").toggleAttribute("disabled") }, 300), "error" === t && setTimeout(() => { this.querySelector(".error-message").classList.add("has-error") }, 300) } }
        customElements.define("radio-group", O);
        class V extends HTMLElement { constructor() { super() }
            get inputLabel() { return this.getAttribute("label") }
            set inputLabel(t) { t && this.setAttribute("label", t) }
            connectedCallback() { this.innerHTML = '<input type="radio" class="radio"><label class="radio-label"></label>'; const t = this.querySelector(".radio-label"),
                    e = this.querySelector(".radio");
                this.hasAttribute("disabled") && e.setAttribute("disabled", "true"), this.hasAttribute("checked") && e.setAttribute("checked", "checked"), t.innerHTML = this.inputLabel, e.setAttribute("value", this.inputLabel), setTimeout(() => { let t = this.querySelector(".radio-label"); const e = t.innerHTML.replace(/\s+/g, "-").toLowerCase(); var s = this.querySelectorAll(".radio");
                    [].forEach.call(s, (function(s) { let i = Math.round(1e4 * Math.random());
                        s.setAttribute("id", e + "-" + i), t.setAttribute("for", e + "-" + i) })) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["error", "disabled"] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s); const i = this.querySelector(".radio");
                this.parentNode.parentNode.parentNode.parentNode.querySelector("radio-group");
                this.hasAttribute("disabled") || i.removeAttribute("disabled"), "disabled" === t && setTimeout(() => { this.querySelector(".radio").setAttribute("disabled", "true") }, 300) } }
        customElements.define("bmo-radio", V);
        class P extends HTMLElement { constructor() { super() }
            get inputLabel() { return this.getAttribute("label") }
            set inputLabel(t) { t && this.setAttribute("label", t) }
            connectedCallback() { this.innerHTML = '<input type="radio" class="box-radio"><label class="box-radio-label"></label>'; const t = this.querySelector(".box-radio-label"),
                    e = this.querySelector(".box-radio");
                this.hasAttribute("disabled") && e.setAttribute("disabled", "true"), this.hasAttribute("checked") && e.setAttribute("checked", "checked"), t.innerHTML = this.inputLabel, e.setAttribute("value", this.inputLabel), setTimeout(() => { let t = this.querySelector(".box-radio-label"); const e = t.innerHTML.replace(/\s+/g, "-").toLowerCase(); var s = this.querySelectorAll(".box-radio");
                    [].forEach.call(s, (function(s) { let i = Math.round(1e4 * Math.random());
                        s.setAttribute("id", e + "-" + i), t.setAttribute("for", e + "-" + i) })) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["error", "disabled"] }
            attributeChangedCallback(t, e, s) { "disabled" === t && setTimeout(() => { this.querySelector(".box-radio").setAttribute("disabled", "true") }, 300) } }
        customElements.define("box-radio", P);
        class I extends HTMLElement { constructor() { super() }
            get groupLabel() { return this.getAttribute("group-label") }
            set groupLabel(t) { t && this.setAttribute("group-label", t) }
            get errorMessage() { return this.getAttribute("error-message") }
            set errorMessage(t) { t && this.setAttribute("error-message", t) }
            connectedCallback() { this.classList.add("check-group"); const t = this.innerHTML;
                this.innerHTML = '<fieldset class="input-wrap input-checkbox"><legend class="legend check-legend"></legend><span class="error-message" role="alert"></span></fieldset>'; const e = this.querySelector("legend");
                this.querySelector(".error-message").textContent = this.errorMessage, e.innerHTML = this.groupLabel; let s = document.createElement("div");
                s.innerHTML = t, e.parentNode.insertBefore(s, e.nextElementSibling), setTimeout(() => { const t = e.innerHTML.replace(/\s+/g, "-").toLowerCase(); var s = this.querySelectorAll(".check,.box-check");
                    [].forEach.call(s, (function(e) { e.setAttribute("name", t) })) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["error", "disabled"] }
            attributeChangedCallback(t, e, s) { "disabled" === t && setTimeout(() => { this.querySelector("fieldset").toggleAttribute("disabled") }, 300), "error" === t && setTimeout(() => { this.querySelector(".error-message").classList.add("has-error") }, 300) } }
        customElements.define("check-group", I);
        class j extends HTMLElement { constructor() { super() }
            get inputLabel() { return this.getAttribute("label") }
            set inputLabel(t) { t && this.setAttribute("label", t) }
            connectedCallback() { this.innerHTML = '<input type="checkbox" class="check"><label class="check-label"></label>'; const t = this.querySelector(".check-label"),
                    e = this.querySelector(".check");
                this.hasAttribute("disabled") && e.setAttribute("disabled", "true"), this.hasAttribute("checked") && e.setAttribute("checked", "checked"), t.innerHTML = this.inputLabel, e.setAttribute("value", this.inputLabel), setTimeout(() => { let t = this.querySelector(".check-label"); const e = t.innerHTML.replace(/\s+/g, "-").toLowerCase(); var s = this.querySelectorAll(".check");
                    [].forEach.call(s, (function(s) { let i = Math.round(1e4 * Math.random());
                        s.setAttribute("id", e + "-" + i), t.setAttribute("for", e + "-" + i) })) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["error", "disabled"] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s); const i = this.querySelector(".check");
                this.parentNode.parentNode.parentNode.parentNode.querySelector("check-group");
                this.hasAttribute("disabled") || i.removeAttribute("disabled"), "disabled" === t && setTimeout(() => { this.querySelector(".check").setAttribute("disabled", "true") }, 300) } }
        customElements.define("bmo-check", j);
        class z extends HTMLElement { constructor() { super() }
            get inputLabel() { return this.getAttribute("label") }
            set inputLabel(t) { t && this.setAttribute("label", t) }
            get imgSrc() { return this.getAttribute("img-src") }
            set imgSrc(t) { t && this.setAttribute("img-src", t) }
            connectedCallback() { this.innerHTML = '<div class="bmo-card-checkbox check-fixed-cards"><input type="checkbox" class="card-check-input"><label class="card-check-label"><span class="check"></span><span class="card-check-image"></span><span class="card-check-label-text"></span></label></div>'; const t = this.querySelector(".card-check-image"),
                    e = this.querySelector(".card-check-input"),
                    s = this.querySelector(".card-check-label-text"),
                    i = this.querySelector(".card-check-label");
                this.hasAttribute("disabled") && e.setAttribute("disabled", "true"), this.hasAttribute("checked") && e.setAttribute("checked", "checked"), this.classList.add("check-card"), this.parentNode.classList.add("check-card-wrap"), s.innerHTML = this.inputLabel, e.setAttribute("value", this.inputLabel), this.hasAttribute("img-src") ? (console.log("has image"), t.innerHTML = '<img src="' + this.imgSrc + '" role="presentation" />') : t.remove(), setTimeout(() => { const t = this.querySelector(".card-check-label-text").innerHTML.replace(/\s+/g, "-").toLowerCase(); var e = this.querySelectorAll(".card-check-input");
                    [].forEach.call(e, (function(e) { let s = Math.round(1e4 * Math.random());
                        e.setAttribute("id", t + "-" + s), i.setAttribute("for", t + "-" + s) })) }, 300) }
            disconnectedCallback() {}
            static get observedAttributes() { return ["error", "disabled"] }
            attributeChangedCallback(t, e, s) { "disabled" === t && setTimeout(() => { this.querySelector(".card-check-input").setAttribute("disabled", "true") }, 300) } }
        customElements.define("card-check", z);
        class B extends HTMLElement { constructor() { if (super(), this.hasAttributes() || document.body.contains(this)) { const t = {}; for (let e of this.attributes) switch (e.name) {
                        case "error-message-en":
                        case "error-message-fr":
                        case "helper-text-en":
                        case "helper-text-fr":
                            0 !== e.name.indexOf("error-message") || t["error-message"] || (t["error-message"] = {}), 0 === e.name.indexOf("helper-text") && t["helper-text"] && (t["helper-text"] = {}), t[e.name.slice(0, -3)][e.name.substr(-2)] = e.value; break;
                        case "on-ready":
                        case "on-change":
                        case "on-select":
                        case "on-keyup":
                            setTimeout(() => { this.on(e.name.substr(3), Function(`"use strict"; return ${e.value};`)()) }, 0); break;
                        case "optional":
                        case "disabled":
                        case "field-only":
                        case "long-term-vague":
                            t[e.name] = "true" === e.value; break;
                        case "min-decade":
                        case "max-decade":
                            t[e.name] = Number(e.value);
                        case "forbidden":
                            t.forbid = JSON.parse(e.value); break;
                        default:
                            t[e.name] = e.value }
                    let e = "true" === t["long-term"] || "true" === t["long-term-vague"],
                        s = "true" === t["fall-back"];
                    this.initialize(t, e, s) } }
            initialize(t, e, s) { this.container = this, this.field = null; const i = (t => { const s = t || {}; let i = (new Date).getFullYear() + 10;
                        s["long-term-vague"] && (s["long-term-vague"] = e); let a = Object.assign({ "init-date": "", label: "Date", "min-date": "1900-01-01", "max-date": i + "-12-31", disabled: !1, mandatory: !0, "field-only": !1, "min-decade": 1900, "max-decade": B.decade(i), "long-term-vague": !1, forbid: {} }, s); return a["error-message"] = Object.assign({ en: "Bad format or invalid date", fr: "Mauvais format ou date invalide" }, s["error-message"]), a["helper-text"] = Object.assign({ en: a["long-term-vague"] ? "MM/YYYY" : "MM/DD/YYYY", fr: a["long-term-vague"] ? "MM/AAAA" : "JJ/MM/AAAA" }, s["helper-text"]), a })(t),
                    a = {},
                    r = { coarse: "", smooth: "" }; var l, n, o = null,
                    c = !0; const d = { intlItems() { return /^fr/gi.test(B.locale) ? (i["helper-text"] = i["helper-text"].fr, i["error-message"] = i["error-message"].fr, r.locale = "dd/LL/yyyy") : (i["helper-text"] = i["helper-text"].en, i["error-message"] = i["error-message"].en, r.locale = "LL/dd/yyyy"), i["long-term-vague"] && (r.locale = "LL/yyyy"), this }, legalRange() { if (!i["min-date"] || !i["max-date"]) throw new Error("BmoDatePickerComponent: Invalid min/max date setting(s). See documentation."); if (e) { if (!i["min-decade"] || !i["max-decade"]) throw new Error("BmoDatePickerComponent: Invalid min/max decade setting(s). See documentation.");
                                i["min-date"] = B.decade(i["min-decade"]) + "-01-01", i["max-date"] = B.decade(i["max-decade"]) + 9 + "-12-31" } return l = F.fromISO(i["min-date"]), n = F.fromISO(i["max-date"]).endOf("day"), this }, fallback() { return s = R.isMobileOrTablet() && !1 !== s || s, this } },
                    u = t => { const e = this["input-element"];
                        c ? (o.classList.remove("error"), o.setAttribute("aria-hidden", "true"), e.nextElementSibling.classList.remove("error-field"), e.setAttribute("aria-invalid", "false")) : (o.textContent = t || i["error-message"], o.classList.add("error"), o.setAttribute("aria-hidden", "false"), e.nextElementSibling.classList.add("error-field"), e.setAttribute("aria-invalid", "true")) },
                    h = () => { let t = i["init-date"]; if (t) { const e = this["input-element"] || this.field.querySelector("input");
                            s ? "today" === t ? t = F.local().toISODate(r.locale) : "lt-vague" === this.get.type && (t += "-01") : t = ("today" === t ? F.local() : F.fromISO(t)).toFormat(r.locale), e.value = t, e.trigger("change", () => { setTimeout(() => { c && !s && (e.value = r.smooth) }, 0) }) } },
                    b = () => { R.clearElement(this.container); const t = i.disabled ? ' disabled="disabled"' : "",
                            e = B.entries.length,
                            a = document.createElement("div");
                        a.className = "form-field date-picker"; const r = `<div class="form-label-group">\n\t\t\t\t<input class="input" id="myDate${e}" type="${s?"date":"text"}" maxlength="${"lt-vague"===this.get.type?"7":"10"}"${t} aria-describedby="myDateError${e}" aria-labelledby="myDateLabel${e} myDateHelper${e}" aria-invalid="false">\n\t\t\t\t<label class="slide-label${s?" active-label":""}" for="myDate${e}">\n\t\t\t\t\t<span class="label-text" id="myDateLabel${e}">${i.label}</span>\n\t\t\t\t</label>\n\t\t\t\t<span class="error-message" id="myDateError${e}" aria-hidden="true">${i["error-message"]}</span>\n\t\t\t\t<span class="input-helper-text" id="myDateHelper${e}">${s?"":i["helper-text"]}</span>\n\t\t\t</div>`;
                        a.innerHTML = r, this.container.appendChild(a), this.field = a, this["input-element"] = a.querySelector("input"), o = a.querySelector(".error-message") },
                    m = () => { const t = this["input-element"] || this.field.querySelector("input");
                        t.addEventListener("focus", t => { c && (t.target.value = r.coarse) }), t.addEventListener("blur", t => { setTimeout(() => { c && t.isTrusted && (t.target.value = r.smooth) }, 0) }), t.addEventListener("keyup", t => { let e = t.target.value; let s = /^(((0)[1-9])|((1)[0-2]))$/,
                                i = /^(((0)[1-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])$/; const r = t.target.selectionStart; let l = !1; if (/^([0-9])|(\/)$/.test(t.key)) { if (0 === B.locale.indexOf("fr") && (s = /^([0-2][0-9]|(3)[0-1])$/, i = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))$/), (s.test(e) || i.test(e) && "lt-vague" !== this.get.type) && (e += "/", l = !0), -1 !== e.indexOf("//")) { let t = e.indexOf("//");
                                    e = e.slice(0, t) + e.slice(t + 1) }
                                a.keyup && a.keyup(t) } let n = B.zeroPad_dateStr(e, t.key);
                            t.target.value = n.string, !n.padded || l || t.shiftKey || "Shift" === t.key ? R.browser.isSafari && (t.target.selectionStart = t.target.selectionEnd = l ? r + 1 : r) : t.target.selectionStart = t.target.selectionEnd = r + 1 }), t.addEventListener("change", t => { const s = t.target;
                            s.nextElementSibling.classList[s.value.length ? "add" : "remove"]("active-label"), c = this.validate(s.value), u(), c && (s.value ? (this.set.coarse = "", this.set.smooth = "") : (r.coarse = "", r.smooth = ""), setTimeout(() => { this.reset && t.isTrusted && !e && this.reset() }, 0), a.change && t.isTrusted && a.change(F.fromFormat(s.value, r.locale).toISODate())) }) },
                    g = () => { try { F = luxon.DateTime } catch (t) { throw new Error("BmoDatePickerComponent: Luxon missing") } }; { const t = this;
                    this.get = {get formatObj() { return Object.assign({}, r) }, get legalRange() { return { min: l, max: n } }, get type() { return e ? i["long-term-vague"] ? "lt-vague" : "lt" : "st" }, get forbidden() { return i.forbid }, get isoDate() { return F.fromFormat(r.coarse, r.locale).toISODate() }, get userCallbacks() { return a } }, this.set = {set coarse(e) { r.coarse = t["input-element"].value || e }, set smooth(e) { const s = F.fromFormat(r.coarse, r.locale); switch (t.get.type) {
                                case "lt-vague":
                                    r.smooth = s.monthLong + " " + s.year; break;
                                default:
                                    r.smooth = s.toLocaleString(F.DATE_FULL) } }, set error(t) { c = !t.length, u(t) }, set disabled(e) { const s = [t["input-element"]]; switch (i["field-only"] || s.push(t.icon), e) {
                                case !0:
                                    s.forEach(t => t.setAttribute("disabled", "disabled")); break;
                                case !1:
                                    s.forEach(t => t.removeAttribute("disabled")) } } }, this.is = {get valid() { return c }, get mandatory() { return i.mandatory }, get filled() { return t["input-element"].value.length > 0 }, get disabled() { return "disabled" === t["input-element"].getAttribute("disabled") } } }(() => { g(), d.fallback().intlItems().legalRange(), b(), s || m(), h(), s || i["field-only"] || this.calendar(!e, i), B.entries.push(this), setTimeout(() => { a.ready && a.ready() }, 0) })() }
            static closeAll(t) { const e = this.entries; for (let s of e)
                    if (s.reset) { s.container.getElementsByClassName("calendar-widget")[0].offsetParent && (t instanceof B ? s !== t && s.closeCalendar() : s.closeCalendar()) } }
            static zeroPad_dateStr(t, e) { const s = "/" === e ? /(\/)([0-9])(\/)/ : /(\/)([4-9])(\/)/,
                    i = /0(\/)/; let a = "",
                    r = !1; if (("/" === e ? /^([0-9])(\/)/ : /^([2-9])(\/)/).test(t) && !i.test(t)) a = "0" + t, r = !0;
                else if (s.test(t) && !i.test(t)) { const e = t.search(s) + 1;
                    a = t.substr(0, e) + "0" + t.substr(e), r = !0 } else a = t; return { string: a, padded: r } }
            static decade(t) { return 10 * Math.floor(t / 10) }
            static get locale() { return luxon.Settings.defaultLocale || navigator.language }
            static ordinal(t) { if (0 === B.locale.indexOf("en")) switch (t) {
                    case 1:
                    case 21:
                    case 31:
                        return t + "st";
                    case 2:
                    case 22:
                        return t + "nd";
                    case 3:
                    case 23:
                        return t + "rd";
                    default:
                        return t + "th" }
                return String(t) }
            static get info() { return { author: "Daniel B. Kazmer", maintainer: "Daniel B. Kazmer", version: "3.1.1 beta", contact: "daniel.kazmer@bmo.com", created: "July 2019", updated: "August 2020", documented: !0, "open-source": !1, dependencies: "Luxon; GridNav (modified)" } }
            static get observedAttributes() { return ["disabled", "error"] }
            attributeChangedCallback(t, e, s) { this.set[t] = "disabled" === t ? s === t : s }
            destroy() { R.clearElement(this.container); for (const t in this) this.hasOwnProperty(t) && delete this[t];
                B.entries = B.entries.filter(t => t !== this) }
            on(t, e) { switch (t) {
                    case "ready":
                    case "select":
                    case "change":
                    case "keyup":
                        this.get.userCallbacks[t] = t => e.call(this, t); break;
                    default:
                        console.warn('BmoDatePickerComponent: "' + t + "\" isn't an accepted event name. See documentation.") } return this }
            parseForbidden(t) { const e = this.get.forbidden; var s = !0; return e["days-of-week"] && e["days-of-week"].forEach(e => { t.weekday !== e || (s = !1) }), s && e["days-of-month"] && e["days-of-month"].forEach(e => { t.day !== e || (s = !1) }), s && e["spec-dates"] && e["spec-dates"].forEach(e => { t.hasSame(F.fromISO(e), "day") && (s = !1) }), s }
            validate(t) { if (!t.length) return !0; var e = /^(((0)[1-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/; "lt-vague" === this.get.type ? e = /^(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/ : 0 === B.locale.indexOf("fr") && (e = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/); const s = F.fromFormat(t, this.get.formatObj.locale),
                    i = this.get.legalRange; return e.test(t) && !s.invalid && this.parseForbidden(s) && luxon.Interval.fromDateTimes(i.min, i.max).contains(s) }
            calendar(t, e) { if (this.reset) return void this.reset(); const s = this.container.querySelector(".date-picker"),
                    i = { locale: B.locale },
                    a = {},
                    r = {},
                    l = {},
                    n = {},
                    o = luxon.Info,
                    c = this.get.userCallbacks,
                    d = /^en/gi.test(i.locale) || 0 === i.locale.indexOf("en"),
                    u = /^fr/gi.test(i.locale) || 0 === i.locale.indexOf("fr"); var h, b, m, g, p, v, f, A, y, L = !1;
                Object.defineProperty(this.is, "open", { get: () => L }); const x = e => { e || k(), C(), S(), t ? (i.now = F.local(), r.renderCalendar(), E(e), r.events(), r.datePickEvent(), M(), setTimeout(w, 0)) : (E(e), l.control(0 === i.locale.indexOf("en") || l.vague ? "months" : "days"), l.events()) },
                    k = () => { const t = B.entries.length,
                            i = document.createElement("div");
                        i.className = "form-field-button", i.innerHTML = `<button class="icon-button medium widget-trigger" aria-label="Open date picker" tabindex="0"${e.disabled?' disabled="disabled"':""} aria-haspopup="true" aria-owns="myDatePicker${t}" aria-expanded="false"><span class="icon medium calendar"></span></button>`, s.appendChild(i), this.icon = i.childNodes[0] },
                    C = () => { y = this.get.formatObj, n.min = this.get.legalRange.min, n.max = this.get.legalRange.max; const t = this.get.isoDate;
                        t && this.validate(y.coarse) ? (f = F.fromISO(t), i.fromInput = !0) : (f = (() => { const e = t ? F.fromISO(t) : F.local(); return e < n.min ? e.plus({ months: n.min.diff(e, "months").months }) : e > n.max ? e.minus({ months: e.diff(n.max, "months").months }) : e })(), this["input-element"].value.length && console.warn("BmoDatePickerComponent: out of range or forbidden")), i.firstDayStartsOn = f.startOf("month").weekday },
                    S = () => { const e = B.entries.length,
                            s = document.createElement("div");
                        s.className = "calendar-widget-container", s.innerHTML = `<div class="bmo-card hover calendar-widget ${t?"short":"long"}-term${u?" fr":""}" id="myDatePicker${e}" style="display:none">\n\t\t\t\t<div class="head">\n\t\t\t\t\t${t?"":'<button class="icon-button medium larr" aria-label="Previous step" disabled="disabled"><span class="icon medium arrow-left"></span></button>'}\n\t\t\t\t\t<button class="icon-button medium close-btn" aria-label="Close the calendar widget"><span class="icon medium close granite"></span></button>\n\t\t\t\t\t<span class="medium yr-heading">${f.year}</span>\n\t\t\t\t\t${t?"":'<div role="alert" class="step-announce" style="font-size:0"></div>'}\n\t\t\t\t</div>\n\t\t\t</div>`, this.container.prepend(s), h = s.childNodes[0], g = h.querySelector(".head span.yr-heading"), t || (v = h.querySelector("button.larr")) };
                t ? (r.datePickEventRemove = () => {}, r.renderCalendar = () => { const t = f.monthLong,
                        e = document.createElement("div");
                    e.className = "dp-body", e.innerHTML = `<div class="dp-cycler">\n\t\t\t\t\t<button class="icon-button chvy-left medium" aria-label="${u?"Mois précédent":"Previous month"}"><span class="icon medium chevron-left"></span></button>\n\t\t\t\t\t<span class="medium month-label">${t}</span>\n\t\t\t\t\t<button class="icon-button chvy-right medium" aria-label="${u?"Mois suivant":"Next month"}"><span class="icon medium chevron-right"></span></button>\n\t\t\t\t\t<div role="alert">${t} ${f.year}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="grid-template" role="grid" data-element="div" aria-colcount="7"></div>`, h.appendChild(e), (p = e.querySelector(".grid-template")).innerHTML = r.fillCalendarDays(), b = e.querySelector(".dp-cycler"), m = b.querySelector("span.month-label") }, r.fillCalendarDays = t => { const e = i.now || F.local(),
                        s = t || f,
                        a = s.hasSame(e, "month") ? e.day : null,
                        r = o.weekdays().move(6, 0),
                        l = o.weekdaysFormat("short").move(6, 0),
                        n = this.get.isoDate; if (n) { const t = F.fromISO(n),
                            e = s.hasSame(t, "month") && i.fromInput;
                        i.activeDay = e ? t.day : null } if ("number" != typeof i.firstDayStartsOn || "number" != typeof s.daysInMonth) throw new Error("BmoDatePickerComponent: type error on firstDayStartsOn or daysInMonth"); let c = "",
                        d = 1; const h = (t, e) => `<div tabindex="-1" role="gridcell" class="not-this-month" aria-colindex="${t}">${e}</div>`; for (let t = 0; t < 7; t++) c += `<div class="weekday" role="columnheader" aria-colindex="${t+1}" aria-label="${r[t]}">${l[t]}</div>`; for (let t = 0; i.firstDayStartsOn - t > 0 && i.firstDayStartsOn - t < 7; t++) { let e = s.startOf("month").minus({ days: i.firstDayStartsOn - t }).toFormat("d");
                        c += h(d, e), d++ } { const t = s.month,
                            e = s.year,
                            l = s => u ? R.pad(s) + "/" + R.pad(t) + "/" + e : R.pad(t) + "/" + R.pad(s) + "/" + e,
                            n = e => u ? r[d - 1] + " " + e + " " + o.months()[t - 1] + (e === a ? ", aujourd'hui" : "") : r[d - 1] + " " + o.months()[t - 1] + " " + B.ordinal(e) + (e === a ? ", today" : ""),
                            h = s => { const i = this.get.legalRange,
                                    a = F.local(e, t, s); let r = luxon.Interval.fromDateTimes(i.min, i.max).contains(a); return r && (r = this.parseForbidden(a)), r }; for (let t = 1; t <= s.daysInMonth; t++) { let e = h(t);
                            c += `<div tabindex="${e?"0":"-1"}" role="gridcell" aria-colindex="${d}"\n\t\t\t\t\t\tclass="${e?"selectable":""}${(t===a?" today":"")+(i.activeDay===t?" selected":"")}"\n\t\t\t\t\t\taria-label="${n(t)}" data-date="${l(t)}">${t}</div>`, 7 === d ? d = 1 : d++ } } let b = 1; for (; d <= 7 && d > 1;) c += h(d, b), d++, b++; return c }) : (l.data = {}, l.announceStepElement = null, l.vague = "lt-vague" === this.get.type, l.control = (t, e) => { const s = o.months(),
                        i = l.data.m ? s[Number(l.data.m) - 1] : null;
                    g.innerHTML = "&nbsp;", l.step = t; const a = document.createElement("div"); switch (a.className = "dp-body", a.innerHTML = l.render[t](f.year), t) {
                        case "months":
                            u && !l.vague ? (g.textContent = l.data.d, v.removeAttribute("disabled")) : v.setAttribute("disabled", "disabled"); break;
                        case "days":
                            g.textContent = u ? "Jour" : i, u ? v.setAttribute("disabled", "disabled") : v.removeAttribute("disabled"); break;
                        default:
                            l.vague ? (g.textContent = i, v.removeAttribute("disabled")) : g.textContent = u ? `${l.data.d} ${i}` : `${i} ${l.data.d}` }
                    h.appendChild(a), p = a.querySelector(".grid-template"), M(), w(), l.stepEvents(t), e || l.setFocus(a), l.stepAnnounce(t) }, l.render = { months() { var t = '<div class="grid-template grid-col-3 mt-small" role="grid" data-element="div" aria-colcount="3">'; return o.monthsFormat("short").map((e, s) => { t += `<div tabindex="0" role="gridcell" aria-label="${o.months()[s]}" data-vertex="${s+1}">${e}</div>` }), t += "</div>" }, days() { var t = '<div class="grid-template mt-small" role="grid" data-element="div" aria-colcount="7">'; for (let e = 1; e <= 31; e++) t += `<div tabindex="0" role="gridcell" data-vertex="${e}">${e}</div>`; return t += "</div>" }, years(t) { const s = B.decade(t),
                            i = B.decade(e["min-decade"]),
                            a = B.decade(e["max-decade"]) + 9,
                            r = s >= i && s <= a; var l = `<div class="dp-cycler">\n\t\t\t\t\t\t<button class="icon-button medium chvy-left" aria-label="Previous decade"><span class="icon medium chevron-left"></span></button>\n\t\t\t\t\t\t<span class="medium year-label" role="alert">${u?"Années":""} ${s+(u?"":"s")}</span>\n\t\t\t\t\t\t<button class="icon-button medium chvy-right" aria-label="Next decade"><span class="icon medium chevron-right"></span></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="grid-template grid-col-3 mt-small gridnav" role="grid" data-element="div" aria-colcount="3">`; for (let t = 0; t <= 9; t++) l += `<div tabindex="${r?"0":"-1"}" role="gridcell" data-vertex="${s+t}">${s+t}</div>`; return l += "</div>" } }, l.stepAnnounce = t => { let e = t.slice(0, -1); if (u) switch (t) {
                        case "months":
                            e = "le mois"; break;
                        case "days":
                            e = "le jour"; break;
                        default:
                            e = "l'année" }
                    l.announceStepElement && (l.announceStepElement.textContent = u ? "Choisir " + e : "select a " + e) }); const E = s => { e.disabled || s || this.icon.addEventListener("click", e => { if (e.stopPropagation(), B.closeAll(), h.style.display = "block", this.icon.setAttribute("aria-expanded", "true"), q(), t) { const t = p.querySelector('.selectable[tabindex="0"]'),
                                e = p.querySelector(".selected"),
                                s = p.querySelector(".selectable.today");
                            T(!0, () => { e ? e.focus() : s ? s.focus() : t ? t.focus() : b.firstElementChild.focus() }) } else { const t = h.getElementsByClassName("dp-body")[0];
                            T(!0, () => l.setFocus(t)) }
                        L = !0 }, !1), e.disabled || h.querySelector("button.close-btn").addEventListener("click", this.closeCalendar) };
                t ? (r.events = () => { let t = f; const e = b.querySelector('[role="alert"]'),
                        s = b.querySelector("button.chvy-left"),
                        a = b.querySelector("button.chvy-right"); var l = null;
                    [s, a].forEach(e => e.addEventListener("click", e => { l && clearTimeout(l), l = setTimeout(function() { l = null, t = t[this === a ? "plus" : "minus"]({ months: 1 }), n() }.bind(e.currentTarget), 0) }, !1)); const n = () => { const s = g.textContent = t.year,
                            a = m.textContent = t.monthLong;
                        i.firstDayStartsOn = t.startOf("month").weekday, r.datePickEventRemove(), p.innerHTML = r.fillCalendarDays(t), r.datePickEvent(), M(), w(), e.textContent = `${a} ${s}` };
                    this.jumpTo = e => { t = e ? F.fromISO(e) : i.now || F.local(), n() } }, r.datePickEvent = () => { let t = !1; if (r.selectedCell = null, r.cells = p.getElementsByClassName("selectable"), !a.cellEventClick && !a.cellEventKeydown) { const e = e => { t || (t = !0, r.selectedCell && r.selectedCell.classList.remove("selected"), e.classList.add("selected"), r.selectedCell = e, c.select && c.select(F.fromFormat(e.dataset.date, y.locale).toISODate()), setTimeout(() => { this.closeCalendar(), this["input-element"].value = e.dataset.date, this["input-element"].trigger("change"), i.fromInput = !0, t = !1 }, 100)) };
                        a.cellEventClick = t => e(t.target), a.cellEventKeydown = t => { switch (t.keyCode || t.which) {
                                case 13:
                                    t.preventDefault(), e(t.target); break;
                                case 36:
                                    r.cells[0].focus(); break;
                                case 35:
                                    r.cells[r.cells.length - 1].focus() } } }
                    setTimeout(() => { for (let t of r.cells) t.classList.contains("selected") && (r.selectedCell = t), t.addEventListener("click", a.cellEventClick), t.addEventListener("keydown", a.cellEventKeydown) }, 0), r.datePickEventRemove = () => { for (let t of r.cells) t.removeEventListener("click", a.cellEventClick), t.removeEventListener("keydown", a.cellEventKeydown) } }) : (l.events = () => { v.addEventListener("click", () => { let t = null,
                            e = !0;
                        l.vague ? t = "months" : "months" === l.step && u ? t = "days" : "days" !== l.step || u ? "years" === l.step && (t = u ? "months" : "days", e = !1) : t = "months"; const s = h.getElementsByClassName("dp-body")[0];
                        h.removeChild(s), l.control(t, !e) }) }, l.stepEvents = t => { const e = p.querySelectorAll('[role="gridcell"][tabindex="0"]'); let s = null,
                        i = !1;
                    l.announceStepElement = h.getElementsByClassName("step-announce")[0], l.vague ? "months" === t && (s = "years") : "months" === t ? s = d ? "days" : "years" : "days" === t && (s = d ? "years" : "months"); const r = e => { i || (i = !0, e.classList.add("selected"), setTimeout(() => { let a = h.querySelector(".dp-body");
                            h.removeChild(a); var r = e.dataset.vertex; switch (t) {
                                case "months":
                                    l.data.m = r; break;
                                case "days":
                                    l.data.d = r; break;
                                default:
                                    l.data.y = r }
                            s ? l.control(s) : (l.setDateSelection(), this.closeCalendar()), i = !1 }, 100)) };
                    a.ltCellClick = t => r(t.target), a.ltCellKeydown = t => { switch (t.keyCode || t.which) {
                            case 13:
                                t.preventDefault(), r(t.target); break;
                            case 36:
                                p.firstElementChild.focus(); break;
                            case 35:
                                p.lastElementChild.focus() } }, e.forEach(t => t.addEventListener("click", a.ltCellClick)), e.forEach(t => t.addEventListener("keydown", a.ltCellKeydown)), "years" === t && l.cyclerEvent() }, l.setDateSelection = () => { const t = t => t.map(t => R.pad(Number(t))); let e = t(d ? [l.data.m, l.data.d, l.data.y] : [l.data.d, l.data.m, l.data.y]).join("/");
                    l.vague && (e = t([l.data.m, l.data.y]).join("/")), this["input-element"].value = e, this["input-element"].trigger("change"), c.select && c.select(F.fromFormat(e, y.locale).toISODate()) }, l.destruct = () => { const t = h.getElementsByClassName("dp-body")[0];
                    t && h.removeChild(t), l.control(d || l.vague ? "months" : "days"), l.data = {} }, l.setFocus = t => { const e = t.querySelectorAll('button:enabled, [tabindex="0"]');
                    e.length && e[0].focus() }, l.cyclerEvent = () => { var t = null; let s = p.closest(".dp-body"),
                        i = f;
                    b = s.querySelector(".dp-cycler"), m = b.querySelector("span.year-label"); const a = B.decade(e["min-decade"]),
                        r = B.decade(e["max-decade"]),
                        n = b.querySelector("button.chvy-left"),
                        o = b.querySelector("button.chvy-right"),
                        c = t => { t <= a ? n.setAttribute("disabled", "disabled") : n.removeAttribute("disabled"), t >= r ? o.setAttribute("disabled", "disabled") : o.removeAttribute("disabled") };
                    [n, o].forEach(e => e.addEventListener("click", e => { t && clearTimeout(t), t = setTimeout(function() { t = null, i = i[this === n ? "minus" : "plus"]({ years: 10 }), (() => { var t = "",
                                    e = B.decade(i.year);
                                m.textContent = (u ? "Années " : "") + e + (u ? "" : "s"); const s = e >= a && e <= r; for (let i = 0; i <= 9; i++) t += `<div tabindex="${s?"0":"-1"}" role="gridcell" data-vertex="${e+i}">${e+i}</div>`;
                                p.innerHTML = t, M(), w(), l.stepEvents(), c(e), (e <= a && document.activeElement !== o || e >= r && document.activeElement !== n) && p.firstElementChild.focus() })() }.bind(e.currentTarget), 0) })), c(B.decade(i.year)) }); const T = (t, e) => { t ? setTimeout(() => h.classList.add("active"), 20) : h.classList.remove("active"), setTimeout(e, 300) },
                    w = () => { try { Gridnav.lists.push(new Gridnav(p)) } catch (t) { console.warn("BmoDatePickerComponent: GridNav is missing. 2D grid navigation disabled.") } },
                    M = t => { A && (A.forEach(t => t.removeEventListener("keydown", a.trapFocus)), A = null), t || setTimeout(() => { const t = (A = h.querySelectorAll('button:enabled, [tabindex="0"]'))[0],
                                e = A[A.length - 1];
                            a.trapFocus = s => { switch (s.key) {
                                    case "Tab":
                                        s.shiftKey ? document.activeElement === t && (s.preventDefault(), e.focus()) : document.activeElement === e && (s.preventDefault(), t.focus()); break;
                                    case "Escape":
                                    case "Esc":
                                        this.closeCalendar() } }, A.forEach(t => { t.addEventListener("keydown", a.trapFocus) }) }, 0) };
                this.closeCalendar = () => { if (T(!1, () => { h.style.display = "none", h.style.left = "0", this.icon.setAttribute("aria-expanded", "false"), t || l.destruct(), L = !1 }), document.activeElement) switch (document.activeElement.tagName) {
                        case "INPUT":
                        case "TEXTAREA":
                        case "SELECT":
                            break;
                        default:
                            this["input-element"].focus() } else this["input-element"].focus() }, this.reset = () => { M(!0), this.container.removeChild(h.parentNode), setTimeout(() => { h = b = m = g = p = f = null, x(!0) }, 0) }; const q = () => { const t = document.documentElement.clientWidth,
                        e = h.getBoundingClientRect(); if (e.right > t) { let s = e.right - t;
                        h.style.left = h.offsetLeft - s + "px" } };
                x() } } var F = null; const R = { clearElement(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }, isMobileOrTablet() { var t, e = !1; return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e }, pad: t => t < 10 ? "0" + t : String(t), browser: { isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent) } };
        B.entries = [], document.addEventListener("click", t => { var e = document.querySelectorAll(".icon-button.calendar, .calendar-widget-container"),
                s = !1;
            e.forEach(e => { e.contains(t.target) && (s = !0) }), s || B.closeAll() }), HTMLInputElement.prototype.trigger = function(t, e) { const s = new Event(t);
            this.dispatchEvent(s), e instanceof Function && e.call(this) }, Array.prototype.move = function(t, e) { var s = [...this]; return s.splice(e, 0, s.splice(t, 1)[0]), s }, customElements.define("bmo-date-picker", B); const _ = document.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), label, li[role="tab"]:not([disabled]), .tab[tabindex="0"], div[role="tabpanel"]:not([disabled]), .tab:not([disabled]),.bmo-switch[tabindex="0"]'),
            K = document.querySelectorAll('.modal a[href]:not([disabled]), .modal button:not([disabled]), .modal textarea:not([disabled]), .modal input[type="text"]:not([disabled]), .modal input[type="radio"]:not([disabled]), .modal input[type="checkbox"]:not([disabled]), .modal select:not([disabled]), .modal label, .modal li[role="tab"]:not([disabled]), .modal div[role="tabpanel"]:not([disabled])');
        class Y extends HTMLElement { constructor() { super() }
            get modalTitle() { return this.getAttribute("modal-title") }
            set modalTitle(t) { t && this.setAttribute("modal-title", t) }
            connectedCallback() { var t = this.innerHTML;
                this.innerHTML = '<div class="modal" aria-describedby="title"><bmo-button label="Close this modal" icon-button icon-color="granite" icon-size="medium" icon="close"></bmo-button><div class="modal-header"><div class="grid col-100 modal-title"><h2 class="sub-heading bold modal-title-text" id="title"></h2></div></div><div class="body-scroll scrollbar"><div class="modal-body grid col-100">' + t + '</div></div></div><div class="bmo-overlay-dark"></div>', this.hasAttribute("small") && Y.classList.add("small"), this.hasAttribute("large") && Y.classList.add("large");
                this.querySelector(".modal-body"); const e = this.querySelector(".modal");
                this.querySelector("bmo-modal bmo-button  button.icon-button.medium span.icon.medium.close").parentElement.classList.add("modal-close"); const s = this.querySelector(".modal-title-text"),
                    i = this.querySelector(".bmo-overlay-dark"),
                    a = this.querySelectorAll(".bmo-overlay-dark");
                s.textContent = this.modalTitle; const r = this.querySelector(".modal-title-text").innerHTML.replace(/\s+/g, "-").toLowerCase();
                e.setAttribute("id", r), e.setAttribute("aria-describedby", r), setTimeout(() => { const t = document.querySelectorAll(".modal-trigger"),
                        s = document.querySelectorAll(".modal .modal-close");
                    [].forEach.call(t, (function(t) { t.addEventListener("click", (function() { this.parentNode.nextElementSibling.childNodes[0].classList.add("active"), this.parentNode.nextElementSibling.childNodes[0].setAttribute("tabIndex", "0"), _.forEach((function(t) { t.setAttribute("tabindex", "-1") })), this.parentNode.nextElementSibling.childNodes[1].setAttribute("active", ""), this.parentNode.nextElementSibling.childNodes[1].classList.add("active"), setTimeout((function() { document.querySelector(".modal.active").focus(), K.forEach((function(t) { t.removeAttribute("tabindex") })) }), 300) })) })), [].forEach.call(s, (function(t) { t.addEventListener("click", (function() { this.parentNode.parentNode.classList.remove("active"), this.parentNode.parentNode.removeAttribute("tabIndex"), i.removeAttribute("active"), i.classList.remove("active"), _.forEach((function(t) { t.removeAttribute("tabindex") })), document.querySelectorAll(".bmo-switch").forEach((function(t) { t.setAttribute("tabindex", "0") })) })) })); const r = () => { e.classList.remove("active"), i.removeAttribute("active"), i.classList.remove("active"), _.forEach((function(t) { t.removeAttribute("tabindex") })), document.querySelectorAll(".bmo-switch").forEach((function(t) { t.setAttribute("tabindex", "0") })) };
                    [].forEach.call(a, (function(t) { t.addEventListener("click", (function() { r() })) })), document.addEventListener("keyup", (function(t) { if (!t.defaultPrevented) { var e = t.key || t.keyCode; "Escape" !== e && "Esc" !== e && 27 !== e || r() } })) }, 300) } }
        customElements.define("bmo-modal", Y);
        class W extends HTMLElement { constructor() { super() }
            connectedCallback() { this.classList.add("popover-wrapper") } }
        customElements.define("pop-wrap", W);
        class U extends HTMLElement { constructor() { super() }
            get direction() { return this.getAttribute("direction") }
            set direction(t) { t && this.classList.add("direction", t) }
            get popoverTitle() { return this.getAttribute("popover-title") }
            set popoverTitle(t) { t && this.setAttribute("popover-title", t) }
            connectedCallback() { const t = this.innerHTML;
                this.classList.add("popover"), this.classList.add(this.direction), this.classList.add("block"), this.innerHTML = '<bmo-button label="Close this popover" icon-button  icon-size="medium" icon="close" icon-color="granite" class="pull-right close-popover"></bmo-button><div class="popover-header"></div><div class="popover-content"></div>'; const e = this.querySelector(".popover-content"),
                    s = this.querySelector(".popover-header"); var i = document.querySelectorAll(".popover-trigger"),
                    a = document.querySelectorAll(".close-popover"),
                    r = document.querySelectorAll(".popover");
                e.innerHTML = t, s.textContent = this.popoverTitle, setTimeout(() => { this.insertAdjacentHTML("afterend", '<div class="bmo-overlay-light"></div>') }, 100), setTimeout(() => {
                    [].forEach.call(i, (function(t) { t.addEventListener("click", (function() {
                            [].forEach.call(r, (function(t) { t.classList.remove("active") }));
                            this.querySelector(".bmo-overlay-light");
                            t.parentElement.nextElementSibling.nextElementSibling.classList.add("active"), this.parentElement.nextElementSibling.setAttribute("active", ""), this.parentElement.nextElementSibling.setAttribute("tabindex", "0"), setTimeout((function() { document.querySelector(".popover.active").focus() }), 200) })) })), [].forEach.call(a, (function(t) { t.addEventListener("click", (function() { this.parentElement.removeAttribute("active"), this.parentElement.removeAttribute("tabindex"), document.querySelector(".bmo-overlay-light.active").classList.remove("active") })) })); const t = document.querySelectorAll(".bmo-overlay-light");
                    [].forEach.call(t, (function(t) { t.addEventListener("click", (function() { console.log("clicked"), t.classList.remove("active"), document.querySelector(".popover.active").classList.remove("active") })) })) }, 400) }
            static get observedAttributes() { return ["active"] }
            attributeChangedCallback(t, e, s) { "active" === t && this.classList.toggle("active") } }
        customElements.define("bmo-popover", U);
        class J extends HTMLElement { constructor() { super() }
            get profileInitial() { return this.getAttribute("letter") }
            set profileInitial(t) { t && this.setAttribute("letter", t) }
            get imagePath() { return this.getAttribute("img-src") }
            set imagePath(t) { t && this.setAttribute("img-src", t) }
            connectedCallback() { this.classList.add("profile-image"), this.classList.add("avatar"), this.setAttribute("role", "presetation"), this.hasAttribute("letter") && this.classList.add(this.profileInitial) }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("profile-avatar", J);
        class G extends HTMLElement { constructor() { super() }
            get styled() { return this.getAttribute("styled") }
            set styled(t) { t && this.setAttribute("styled", t) }
            connectedCallback() { this.classList.add("bank-card"), this.hasAttribute("styled") && this.classList.add(this.styled) } }
        customElements.define("bank-card", G);
        class X extends HTMLElement { constructor() { super() }
            get CustomAttr() { return this.getAttribute("custome-attr") }
            set CustomAttr(t) { t && this.setAttribute("custom-attr", t) }
            connectedCallback() { const t = this.innerHTML;
                this.innerHTML = '<a href="#main-content" class="header-skip">Skip to Main Content</a><header class="bmo-header"><div class="bmo-container"><div class="bmo-logo"><a href="index.html"><img src="./assets/img/bmo-roundel-logo-dark-bg.svg" alt="BMO of Montreal Logo - Home Link" /></a></div><div class="header-content">' + t + "</div></div></header>";
                this.querySelector(".bmo-header");
                this.hasAttribute("has-attribute-demo"), this.hasAttribute("has-attribute-demo-specific") }
            disconnectedCallback() {}
            static get observedAttributes() { return [] }
            attributeChangedCallback(t, e, s) { console.log("Attribute changed:", t, e, s) } }
        customElements.define("bmo-header", X); const Z = ".bmo-switch-wrap, .bmo-switch, .bmo-switch-rail, .switch-label, .bmo-switch-wrap.dual, #right-label-daul, .bmo-card, .modal";
        (() => { let t = navigator.userAgent || navigator.vendor || window.opera; if (/android/i.test(t)) { const t = document.querySelectorAll(".bmo-card,.modal");
                [].forEach.call(t, (function(t) { t.classList.add("md") })); const e = document.querySelectorAll(Z);
                [].forEach.call(e, (function(t) { t.classList.remove("ios") })) } })();
        (() => { if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) { const t = document.querySelectorAll(".bmo-card,.modal");
                [].forEach.call(t, (function(t) { t.classList.remove("md") })); const e = document.querySelectorAll(Z);
                [].forEach.call(e, (function(t) { t.classList.add("ios") })) } })() }]);
});