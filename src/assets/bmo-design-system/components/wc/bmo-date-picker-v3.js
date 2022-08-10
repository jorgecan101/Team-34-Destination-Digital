/*
 * BmoDatePickerComponent v3.1.1 beta
 * by Daniel B. Kazmer (daniel.kazmer@bmo.com)
 */
export class BmoDatePickerComponent extends HTMLElement {
    constructor() {
        if (super(),
        this.hasAttributes() || document.body.contains(this)) {
            const e = {};
            for (let t of this.attributes)
                switch (t.name) {
                case "error-message-en":
                case "error-message-fr":
                case "helper-text-en":
                case "helper-text-fr":
                    0 !== t.name.indexOf("error-message") || e["error-message"] || (e["error-message"] = {}),
                    0 === t.name.indexOf("helper-text") && e["helper-text"] && (e["helper-text"] = {}),
                    e[t.name.slice(0, -3)][t.name.substr(-2)] = t.value;
                    break;
                case "on-ready":
                case "on-change":
                case "on-select":
                case "on-keyup":
                    setTimeout(()=>{
                        this.on(t.name.substr(3), Function(`"use strict"; return ${t.value};`)())
                    }
                    , 0);
                    break;
                case "optional":
                case "disabled":
                case "field-only":
                case "long-term-vague":
                    e[t.name] = "true" === t.value;
                    break;
                case "min-decade":
                case "max-decade":
                    e[t.name] = Number(t.value);
                case "forbidden":
                    e.forbid = JSON.parse(t.value);
                    break;
                default:
                    e[t.name] = t.value
                }
            let t = "true" === e["long-term"] || "true" === e["long-term-vague"]
              , a = "true" === e["fall-back"];
            this.initialize(e, t, a)
        }
    }
    initialize(e, t, a) {
        this.container = this,
        this.field = null;
        const n = (e=>{
            const a = e || {};
            let n = (new Date).getFullYear() + 10;
            a["long-term-vague"] && (a["long-term-vague"] = t);
            let s = Object.assign({
                "init-date": "",
                label: "Date",
                "min-date": "1900-01-01",
                "max-date": `${n}-12-31`,
                disabled: !1,
                mandatory: !0,
                "field-only": !1,
                "min-decade": 1900,
                "max-decade": BmoDatePickerComponent.decade(n),
                "long-term-vague": !1,
                forbid: {}
            }, a);
            return s["error-message"] = Object.assign({
                en: "Bad format or invalid date",
                fr: "Mauvais format ou date invalide"
            }, a["error-message"]),
            s["helper-text"] = Object.assign({
                en: s["long-term-vague"] ? "MM/YYYY" : "MM/DD/YYYY",
                fr: s["long-term-vague"] ? "MM/AAAA" : "JJ/MM/AAAA"
            }, a["helper-text"]),
            s
        }
        )(e)
          , s = {}
          , r = {
            coarse: "",
            smooth: ""
        };
        var o, i, l = null, c = !0;
        const d = ()=>{
            g(),
            m.fallback().intlItems().legalRange(),
            p(),
            a || v(),
            h(),
            a || n["field-only"] || this.calendar(!t, n),
            BmoDatePickerComponent.entries.push(this),
            setTimeout(()=>{
                s.ready && s.ready()
            }
            , 0)
        }
          , m = {
            intlItems() {
                return /^fr/gi.test(BmoDatePickerComponent.locale) ? (n["helper-text"] = n["helper-text"].fr,
                n["error-message"] = n["error-message"].fr,
                r.locale = "dd/LL/yyyy") : (n["helper-text"] = n["helper-text"].en,
                n["error-message"] = n["error-message"].en,
                r.locale = "LL/dd/yyyy"),
                n["long-term-vague"] && (r.locale = "LL/yyyy"),
                this
            },
            legalRange() {
                if (!n["min-date"] || !n["max-date"])
                    throw new Error("BmoDatePickerComponent: Invalid min/max date setting(s). See documentation.");
                if (t) {
                    if (!n["min-decade"] || !n["max-decade"])
                        throw new Error("BmoDatePickerComponent: Invalid min/max decade setting(s). See documentation.");
                    n["min-date"] = `${BmoDatePickerComponent.decade(n["min-decade"])}-01-01`,
                    n["max-date"] = `${BmoDatePickerComponent.decade(n["max-decade"]) + 9}-12-31`
                }
                return o = DT.fromISO(n["min-date"]),
                i = DT.fromISO(n["max-date"]).endOf("day"),
                this
            },
            fallback() {
                return a = utils.isMobileOrTablet() && !1 !== a || a,
                this
            }
        }
          , u = e=>{
            const t = this["input-element"];
            c ? (l.classList.remove("error"),
            l.setAttribute("aria-hidden", "true"),
            t.nextElementSibling.classList.remove("error-field"),
            t.setAttribute("aria-invalid", "false")) : (l.textContent = e || n["error-message"],
            l.classList.add("error"),
            l.setAttribute("aria-hidden", "false"),
            t.nextElementSibling.classList.add("error-field"),
            t.setAttribute("aria-invalid", "true"))
        }
          , h = ()=>{
            let e = n["init-date"];
            if (e) {
                const t = this["input-element"] || this.field.querySelector("input");
                a ? "today" === e ? e = DT.local().toISODate(r.locale) : "lt-vague" === this.get.type && (e += "-01") : e = ("today" === e ? DT.local() : DT.fromISO(e)).toFormat(r.locale),
                t.value = e,
                t.trigger("change", ()=>{
                    setTimeout(()=>{
                        c && !a && (t.value = r.smooth)
                    }
                    , 0)
                }
                )
            }
        }
          , p = ()=>{
            utils.clearElement(this.container);
            const e = n.disabled ? ' disabled="disabled"' : ""
              , t = BmoDatePickerComponent.entries.length
              , s = document.createElement("div");
            s.className = "form-field date-picker";
            const r = `<div class="form-label-group">\n\t\t\t\t<input class="input" id="myDate${t}" type="${a ? "date" : "text"}" maxlength="${"lt-vague" === this.get.type ? "7" : "10"}"${e} aria-describedby="myDateError${t}" aria-labelledby="myDateLabel${t} myDateHelper${t}" aria-invalid="false">\n\t\t\t\t<label class="slide-label${a ? " active-label" : ""}" for="myDate${t}">\n\t\t\t\t\t<span class="label-text" id="myDateLabel${t}">${n.label}</span>\n\t\t\t\t</label>\n\t\t\t\t<span class="error-message" id="myDateError${t}" aria-hidden="true">${n["error-message"]}</span>\n\t\t\t\t<span class="input-helper-text" id="myDateHelper${t}">${a ? "" : n["helper-text"]}</span>\n\t\t\t</div>`;
            s.innerHTML = r,
            this.container.appendChild(s),
            this.field = s,
            this["input-element"] = s.querySelector("input"),
            l = s.querySelector(".error-message")
        }
          , v = ()=>{
            const e = this["input-element"] || this.field.querySelector("input");
            e.addEventListener("focus", e=>{
                c && (e.target.value = r.coarse)
            }
            ),
            e.addEventListener("blur", e=>{
                setTimeout(()=>{
                    c && e.isTrusted && (e.target.value = r.smooth)
                }
                , 0)
            }
            ),
            e.addEventListener("keyup", e=>{
                let t = e.target.value;
                const a = /^([0-9])|(\/)$/;
                let n = /^(((0)[1-9])|((1)[0-2]))$/
                  , r = /^(((0)[1-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])$/;
                const o = e.target.selectionStart;
                let i = !1;
                if (a.test(e.key)) {
                    if (0 === BmoDatePickerComponent.locale.indexOf("fr") && (n = /^([0-2][0-9]|(3)[0-1])$/,
                    r = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))$/),
                    (n.test(t) || r.test(t) && "lt-vague" !== this.get.type) && (t += "/",
                    i = !0),
                    -1 !== t.indexOf("//")) {
                        let e = t.indexOf("//");
                        t = t.slice(0, e) + t.slice(e + 1)
                    }
                    s.keyup && s.keyup(e)
                }
                let l = BmoDatePickerComponent.zeroPad_dateStr(t, e.key);
                e.target.value = l.string,
                !l.padded || i || e.shiftKey || "Shift" === e.key ? utils.browser.isSafari && (e.target.selectionStart = e.target.selectionEnd = i ? o + 1 : o) : e.target.selectionStart = e.target.selectionEnd = o + 1
            }
            ),
            e.addEventListener("change", e=>{
                const a = e.target
                  , n = a.nextElementSibling;
                n.classList[a.value.length ? "add" : "remove"]("active-label"),
                c = this.validate(a.value),
                u(),
                c && (a.value ? (this.set.coarse = "",
                this.set.smooth = "") : (r.coarse = "",
                r.smooth = ""),
                setTimeout(()=>{
                    this.reset && e.isTrusted && !t && this.reset()
                }
                , 0),
                s.change && e.isTrusted && s.change(DT.fromFormat(a.value, r.locale).toISODate()))
            }
            )
        }
          , g = ()=>{
            try {
                DT = luxon.DateTime
            } catch (e) {
                throw new Error("BmoDatePickerComponent: Luxon missing")
            }
        }
        ;
        {
            const e = this;
            this.get = {
                get formatObj() {
                    return Object.assign({}, r)
                },
                get legalRange() {
                    return {
                        min: o,
                        max: i
                    }
                },
                get type() {
                    return t ? n["long-term-vague"] ? "lt-vague" : "lt" : "st"
                },
                get forbidden() {
                    return n.forbid
                },
                get isoDate() {
                    return DT.fromFormat(r.coarse, r.locale).toISODate()
                },
                get userCallbacks() {
                    return s
                }
            },
            this.set = {
                set coarse(t) {
                    r.coarse = e["input-element"].value || t
                },
                set smooth(t) {
                    const a = DT.fromFormat(r.coarse, r.locale);
                    switch (e.get.type) {
                    case "lt-vague":
                        r.smooth = a.monthLong + " " + a.year;
                        break;
                    default:
                        r.smooth = a.toLocaleString(DT.DATE_FULL)
                    }
                },
                set error(e) {
                    c = !e.length,
                    u(e)
                },
                set disabled(t) {
                    const a = [e["input-element"]];
                    switch (n["field-only"] || a.push(e.icon),
                    t) {
                    case !0:
                        a.forEach(e=>e.setAttribute("disabled", "disabled"));
                        break;
                    case !1:
                        a.forEach(e=>e.removeAttribute("disabled"))
                    }
                }
            },
            this.is = {
                get valid() {
                    return c
                },
                get mandatory() {
                    return n.mandatory
                },
                get filled() {
                    return e["input-element"].value.length > 0
                },
                get disabled() {
                    return "disabled" === e["input-element"].getAttribute("disabled")
                }
            }
        }
        d()
    }
    static closeAll(e) {
        const t = this.entries;
        for (let a of t)
            if (a.reset) {
                let t = a.container.getElementsByClassName("calendar-widget")[0];
                t.offsetParent && (e instanceof BmoDatePickerComponent ? a !== e && a.closeCalendar() : a.closeCalendar())
            }
    }
    static zeroPad_dateStr(e, t) {
        const a = "/" === t ? /^([0-9])(\/)/ : /^([2-9])(\/)/
          , n = "/" === t ? /(\/)([0-9])(\/)/ : /(\/)([4-9])(\/)/
          , s = /0(\/)/;
        let r = ""
          , o = !1;
        if (a.test(e) && !s.test(e))
            r = "0" + e,
            o = !0;
        else if (n.test(e) && !s.test(e)) {
            const t = e.search(n) + 1;
            r = e.substr(0, t) + "0" + e.substr(t),
            o = !0
        } else
            r = e;
        return {
            string: r,
            padded: o
        }
    }
    static decade(e) {
        return 10 * Math.floor(e / 10)
    }
    static get locale() {
        return luxon.Settings.defaultLocale || navigator.language
    }
    static ordinal(e) {
        if (0 === BmoDatePickerComponent.locale.indexOf("en"))
            switch (e) {
            case 1:
            case 21:
            case 31:
                return `${e}st`;
            case 2:
            case 22:
                return `${e}nd`;
            case 3:
            case 23:
                return `${e}rd`;
            default:
                return `${e}th`
            }
        return String(e)
    }
    static get info() {
        return {
            author: "Daniel B. Kazmer",
            maintainer: "Daniel B. Kazmer",
            version: "3.1.1 beta",
            contact: "daniel.kazmer@bmo.com",
            created: "July 2019",
            updated: "August 2020",
            documented: !0,
            "open-source": !1,
            dependencies: "Luxon; GridNav (modified)"
        }
    }
    static get observedAttributes() {
        return ["disabled", "error"]
    }
    attributeChangedCallback(e, t, a) {
        this.set[e] = "disabled" === e ? a === e : a
    }
    destroy() {
        utils.clearElement(this.container);
        for (const e in this)
            this.hasOwnProperty(e) && delete this[e];
        BmoDatePickerComponent.entries = BmoDatePickerComponent.entries.filter(e=>e !== this)
    }
    on(e, t) {
        switch (e) {
        case "ready":
        case "select":
        case "change":
        case "keyup":
            this.get.userCallbacks[e] = (e=>t.call(this, e));
            break;
        default:
            console.warn('BmoDatePickerComponent: "' + e + "\" isn't an accepted event name. See documentation.")
        }
        return this
    }
    parseForbidden(e) {
        const t = this.get.forbidden;
        var a = !0;
        return t["days-of-week"] && t["days-of-week"].forEach(t=>{
            e.weekday !== t || (a = !1)
        }
        ),
        a && t["days-of-month"] && t["days-of-month"].forEach(t=>{
            e.day !== t || (a = !1)
        }
        ),
        a && t["spec-dates"] && t["spec-dates"].forEach(t=>{
            e.hasSame(DT.fromISO(t), "day") && (a = !1)
        }
        ),
        a
    }
    validate(e) {
        if (!e.length)
            return !0;
        var t = /^(((0)[1-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/;
        "lt-vague" === this.get.type ? t = /^(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/ : 0 === BmoDatePickerComponent.locale.indexOf("fr") && (t = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/);
        const a = DT.fromFormat(e, this.get.formatObj.locale)
          , n = this.get.legalRange;
        return t.test(e) && !a.invalid && this.parseForbidden(a) && luxon.Interval.fromDateTimes(n.min, n.max).contains(a)
    }
    calendar(e, t) {
        if (this.reset)
            return void this.reset();
        const a = this.container.querySelector(".date-picker")
          , n = {
            locale: BmoDatePickerComponent.locale
        }
          , s = {}
          , r = {}
          , o = {}
          , i = {}
          , l = luxon.Info
          , c = this.get.userCallbacks
          , d = /^en/gi.test(n.locale) || 0 === n.locale.indexOf("en")
          , m = /^fr/gi.test(n.locale) || 0 === n.locale.indexOf("fr");
        var u, h, p, v, g, b, f, y, k, D = !1;
        Object.defineProperty(this.is, "open", {
            get: ()=>D
        });
        const x = t=>{
            t || C(),
            E(),
            w(),
            e ? (n.now = DT.local(),
            r.renderCalendar(),
            S(t),
            r.events(),
            r.datePickEvent(),
            L(),
            setTimeout(T, 0)) : (S(t),
            o.control(0 === n.locale.indexOf("en") || o.vague ? "months" : "days"),
            o.events())
        }
          , C = ()=>{
            const e = BmoDatePickerComponent.entries.length
              , n = document.createElement("div");
            n.className = "form-field-button",
            n.innerHTML = `<button class="icon-button medium widget-trigger" aria-label="Open date picker" tabindex="0"${t.disabled ? ' disabled="disabled"' : ""} aria-haspopup="true" aria-owns="myDatePicker${e}" aria-expanded="false"><span class="icon medium calendar"></span></button>`,
            a.appendChild(n),
            this.icon = n.childNodes[0]
        }
          , E = ()=>{
            k = this.get.formatObj,
            i.min = this.get.legalRange.min,
            i.max = this.get.legalRange.max;
            const e = ()=>{
                const e = t ? DT.fromISO(t) : DT.local();
                return e < i.min ? e.plus({
                    months: i.min.diff(e, "months").months
                }) : e > i.max ? e.minus({
                    months: e.diff(i.max, "months").months
                }) : e
            }
              , t = this.get.isoDate;
            t && this.validate(k.coarse) ? (f = DT.fromISO(t),
            n.fromInput = !0) : (f = e(),
            this["input-element"].value.length && console.warn("BmoDatePickerComponent: out of range or forbidden")),
            n.firstDayStartsOn = f.startOf("month").weekday
        }
          , w = ()=>{
            const t = BmoDatePickerComponent.entries.length
              , a = document.createElement("div");
            a.className = "calendar-widget-container",
            a.innerHTML = `<div class="bmo-card hover calendar-widget ${e ? "short" : "long"}-term${m ? " fr" : ""}" id="myDatePicker${t}" style="display:none">\n\t\t\t\t<div class="head">\n\t\t\t\t\t${e ? "" : '<button class="icon-button medium larr" aria-label="Previous step" disabled="disabled"><span class="icon medium arrow-left"></span></button>'}\n\t\t\t\t\t<button class="icon-button medium close-btn" aria-label="Close the calendar widget"><span class="icon medium close granite"></span></button>\n\t\t\t\t\t<span class="medium yr-heading">${f.year}</span>\n\t\t\t\t\t${e ? "" : '<div role="alert" class="step-announce" style="font-size:0"></div>'}\n\t\t\t\t</div>\n\t\t\t</div>`,
            this.container.prepend(a),
            u = a.childNodes[0],
            v = u.querySelector(".head span.yr-heading"),
            e || (b = u.querySelector("button.larr"))
        }
        ;
        e ? (r.datePickEventRemove = (()=>{}
        ),
        r.renderCalendar = (()=>{
            const e = f.monthLong
              , t = document.createElement("div");
            t.className = "dp-body",
            t.innerHTML = `<div class="dp-cycler">\n\t\t\t\t\t<button class="icon-button chvy-left medium" aria-label="${m ? "Mois précédent" : "Previous month"}"><span class="icon medium chevron-left"></span></button>\n\t\t\t\t\t<span class="medium month-label">${e}</span>\n\t\t\t\t\t<button class="icon-button chvy-right medium" aria-label="${m ? "Mois suivant" : "Next month"}"><span class="icon medium chevron-right"></span></button>\n\t\t\t\t\t<div role="alert">${e} ${f.year}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="grid-template" role="grid" data-element="div" aria-colcount="7"></div>`,
            u.appendChild(t),
            g = t.querySelector(".grid-template"),
            g.innerHTML = r.fillCalendarDays(),
            h = t.querySelector(".dp-cycler"),
            p = h.querySelector("span.month-label")
        }
        ),
        r.fillCalendarDays = (e=>{
            const t = n.now || DT.local()
              , a = e || f
              , s = a.hasSame(t, "month") ? t.day : null
              , r = l.weekdays().move(6, 0)
              , o = l.weekdaysFormat("short").move(6, 0)
              , i = this.get.isoDate;
            if (i) {
                const e = DT.fromISO(i)
                  , t = a.hasSame(e, "month") && n.fromInput;
                n.activeDay = t ? e.day : null
            }
            if ("number" != typeof n.firstDayStartsOn || "number" != typeof a.daysInMonth)
                throw new Error("BmoDatePickerComponent: type error on firstDayStartsOn or daysInMonth");
            let c = ""
              , d = 1;
            const u = (e,t)=>`<div tabindex="-1" role="gridcell" class="not-this-month" aria-colindex="${e}">${t}</div>`;
            for (let e = 0; e < 7; e++)
                c += `<div class="weekday" role="columnheader" aria-colindex="${e + 1}" aria-label="${r[e]}">${o[e]}</div>`;
            for (let e = 0; n.firstDayStartsOn - e > 0 && n.firstDayStartsOn - e < 7; e++) {
                let t = a.startOf("month").minus({
                    days: n.firstDayStartsOn - e
                }).toFormat("d");
                c += u(d, t),
                d++
            }
            {
                const e = a.month
                  , t = a.year
                  , o = a=>m ? utils.pad(a) + "/" + utils.pad(e) + "/" + t : utils.pad(e) + "/" + utils.pad(a) + "/" + t
                  , i = t=>m ? r[d - 1] + " " + t + " " + l.months()[e - 1] + (t === s ? ", aujourd'hui" : "") : r[d - 1] + " " + l.months()[e - 1] + " " + BmoDatePickerComponent.ordinal(t) + (t === s ? ", today" : "")
                  , u = a=>{
                    const n = this.get.legalRange
                      , s = DT.local(t, e, a);
                    let r = luxon.Interval.fromDateTimes(n.min, n.max).contains(s);
                    return r && (r = this.parseForbidden(s)),
                    r
                }
                ;
                for (let e = 1; e <= a.daysInMonth; e++) {
                    let t = u(e);
                    c += `<div tabindex="${t ? "0" : "-1"}" role="gridcell" aria-colindex="${d}"\n\t\t\t\t\t\tclass="${t ? "selectable" : ""}${(e === s ? " today" : "") + (n.activeDay === e ? " selected" : "")}"\n\t\t\t\t\t\taria-label="${i(e)}" data-date="${o(e)}">${e}</div>`,
                    7 === d ? d = 1 : d++
                }
            }
            let h = 1;
            for (; d <= 7 && d > 1; )
                c += u(d, h),
                d++,
                h++;
            return c
        }
        )) : (o.data = {},
        o.announceStepElement = null,
        o.vague = "lt-vague" === this.get.type,
        o.control = ((e,t)=>{
            const a = l.months()
              , n = o.data.m ? a[Number(o.data.m) - 1] : null;
            v.innerHTML = "&nbsp;",
            o.step = e;
            const s = document.createElement("div");
            switch (s.className = "dp-body",
            s.innerHTML = o.render[e](f.year),
            e) {
            case "months":
                m && !o.vague ? (v.textContent = o.data.d,
                b.removeAttribute("disabled")) : b.setAttribute("disabled", "disabled");
                break;
            case "days":
                v.textContent = m ? "Jour" : n,
                m ? b.setAttribute("disabled", "disabled") : b.removeAttribute("disabled");
                break;
            default:
                o.vague ? (v.textContent = n,
                b.removeAttribute("disabled")) : v.textContent = m ? `${o.data.d} ${n}` : `${n} ${o.data.d}`
            }
            u.appendChild(s),
            g = s.querySelector(".grid-template"),
            L(),
            T(),
            o.stepEvents(e),
            t || o.setFocus(s),
            o.stepAnnounce(e)
        }
        ),
        o.render = {
            months() {
                var e = '<div class="grid-template grid-col-3 mt-small" role="grid" data-element="div" aria-colcount="3">';
                return l.monthsFormat("short").map((t,a)=>{
                    e += `<div tabindex="0" role="gridcell" aria-label="${l.months()[a]}" data-vertex="${a + 1}">${t}</div>`
                }
                ),
                e += "</div>",
                e
            },
            days() {
                var e = '<div class="grid-template mt-small" role="grid" data-element="div" aria-colcount="7">';
                for (let t = 1; t <= 31; t++)
                    e += `<div tabindex="0" role="gridcell" data-vertex="${t}">${t}</div>`;
                return e += "</div>",
                e
            },
            years(e) {
                const a = BmoDatePickerComponent.decade(e)
                  , n = BmoDatePickerComponent.decade(t["min-decade"])
                  , s = BmoDatePickerComponent.decade(t["max-decade"]) + 9
                  , r = a >= n && a <= s;
                var o = `<div class="dp-cycler">\n\t\t\t\t\t\t<button class="icon-button medium chvy-left" aria-label="Previous decade"><span class="icon medium chevron-left"></span></button>\n\t\t\t\t\t\t<span class="medium year-label" role="alert">${m ? "Années" : ""} ${a + (m ? "" : "s")}</span>\n\t\t\t\t\t\t<button class="icon-button medium chvy-right" aria-label="Next decade"><span class="icon medium chevron-right"></span></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="grid-template grid-col-3 mt-small gridnav" role="grid" data-element="div" aria-colcount="3">`;
                for (let e = 0; e <= 9; e++)
                    o += `<div tabindex="${r ? "0" : "-1"}" role="gridcell" data-vertex="${a + e}">${a + e}</div>`;
                return o += "</div>",
                o
            }
        },
        o.stepAnnounce = (e=>{
            let t = e.slice(0, -1);
            if (m)
                switch (e) {
                case "months":
                    t = "le mois";
                    break;
                case "days":
                    t = "le jour";
                    break;
                default:
                    t = "l'année"
                }
            o.announceStepElement && (o.announceStepElement.textContent = m ? "Choisir " + t : "select a " + t)
        }
        ));
        const S = a=>{
            t.disabled || a || this.icon.addEventListener("click", t=>{
                if (t.stopPropagation(),
                BmoDatePickerComponent.closeAll(),
                u.style.display = "block",
                this.icon.setAttribute("aria-expanded", "true"),
                P(),
                e) {
                    const e = g.querySelector('.selectable[tabindex="0"]')
                      , t = g.querySelector(".selected")
                      , a = g.querySelector(".selectable.today");
                    $(!0, ()=>{
                        t ? t.focus() : a ? a.focus() : e ? e.focus() : h.firstElementChild.focus()
                    }
                    )
                } else {
                    const e = u.getElementsByClassName("dp-body")[0];
                    $(!0, ()=>o.setFocus(e))
                }
                D = !0
            }
            , !1),
            t.disabled || u.querySelector("button.close-btn").addEventListener("click", this.closeCalendar)
        }
        ;
        e ? (r.events = (()=>{
            let e = f;
            const t = h.querySelector('[role="alert"]')
              , a = h.querySelector("button.chvy-left")
              , s = h.querySelector("button.chvy-right");
            var o = null;
            [a, s].forEach(t=>t.addEventListener("click", t=>{
                o && clearTimeout(o),
                o = setTimeout(function() {
                    o = null,
                    e = e[this === s ? "plus" : "minus"]({
                        months: 1
                    }),
                    i()
                }
                .bind(t.currentTarget), 0)
            }
            , !1));
            const i = ()=>{
                const a = v.textContent = e.year
                  , s = p.textContent = e.monthLong;
                n.firstDayStartsOn = e.startOf("month").weekday,
                r.datePickEventRemove(),
                g.innerHTML = r.fillCalendarDays(e),
                r.datePickEvent(),
                L(),
                T(),
                t.textContent = `${s} ${a}`
            }
            ;
            this.jumpTo = (t=>{
                e = t ? DT.fromISO(t) : n.now || DT.local(),
                i()
            }
            )
        }
        ),
        r.datePickEvent = (()=>{
            let e = !1;
            if (r.selectedCell = null,
            r.cells = g.getElementsByClassName("selectable"),
            !s.cellEventClick && !s.cellEventKeydown) {
                const t = t=>{
                    e || (e = !0,
                    r.selectedCell && r.selectedCell.classList.remove("selected"),
                    t.classList.add("selected"),
                    r.selectedCell = t,
                    c.select && c.select(DT.fromFormat(t.dataset.date, k.locale).toISODate()),
                    setTimeout(()=>{
                        this.closeCalendar(),
                        this["input-element"].value = t.dataset.date,
                        this["input-element"].trigger("change"),
                        n.fromInput = !0,
                        e = !1
                    }
                    , 100))
                }
                ;
                s.cellEventClick = (e=>t(e.target)),
                s.cellEventKeydown = (e=>{
                    switch (e.keyCode || e.which) {
                    case 13:
                        e.preventDefault(),
                        t(e.target);
                        break;
                    case 36:
                        r.cells[0].focus();
                        break;
                    case 35:
                        r.cells[r.cells.length - 1].focus()
                    }
                }
                )
            }
            setTimeout(()=>{
                for (let e of r.cells)
                    e.classList.contains("selected") && (r.selectedCell = e),
                    e.addEventListener("click", s.cellEventClick),
                    e.addEventListener("keydown", s.cellEventKeydown)
            }
            , 0),
            r.datePickEventRemove = (()=>{
                for (let e of r.cells)
                    e.removeEventListener("click", s.cellEventClick),
                    e.removeEventListener("keydown", s.cellEventKeydown)
            }
            )
        }
        )) : (o.events = (()=>{
            b.addEventListener("click", ()=>{
                let e = null
                  , t = !0;
                o.vague ? e = "months" : "months" === o.step && m ? e = "days" : "days" !== o.step || m ? "years" === o.step && (e = m ? "months" : "days",
                t = !1) : e = "months";
                const a = u.getElementsByClassName("dp-body")[0];
                u.removeChild(a),
                o.control(e, !t)
            }
            )
        }
        ),
        o.stepEvents = (e=>{
            const t = g.querySelectorAll('[role="gridcell"][tabindex="0"]');
            let a = null
              , n = !1;
            o.announceStepElement = u.getElementsByClassName("step-announce")[0],
            o.vague ? "months" === e && (a = "years") : "months" === e ? a = d ? "days" : "years" : "days" === e && (a = d ? "years" : "months");
            const r = t=>{
                n || (n = !0,
                t.classList.add("selected"),
                setTimeout(()=>{
                    let s = u.querySelector(".dp-body");
                    u.removeChild(s);
                    var r = t.dataset.vertex;
                    switch (e) {
                    case "months":
                        o.data.m = r;
                        break;
                    case "days":
                        o.data.d = r;
                        break;
                    default:
                        o.data.y = r
                    }
                    a ? o.control(a) : (o.setDateSelection(),
                    this.closeCalendar()),
                    n = !1
                }
                , 100))
            }
            ;
            s.ltCellClick = (e=>r(e.target)),
            s.ltCellKeydown = (e=>{
                switch (e.keyCode || e.which) {
                case 13:
                    e.preventDefault(),
                    r(e.target);
                    break;
                case 36:
                    g.firstElementChild.focus();
                    break;
                case 35:
                    g.lastElementChild.focus()
                }
            }
            ),
            t.forEach(e=>e.addEventListener("click", s.ltCellClick)),
            t.forEach(e=>e.addEventListener("keydown", s.ltCellKeydown)),
            "years" === e && o.cyclerEvent()
        }
        ),
        o.setDateSelection = (()=>{
            const e = e=>e.map(e=>utils.pad(Number(e)));
            let t = e(d ? [o.data.m, o.data.d, o.data.y] : [o.data.d, o.data.m, o.data.y]).join("/");
            o.vague && (t = e([o.data.m, o.data.y]).join("/")),
            this["input-element"].value = t,
            this["input-element"].trigger("change"),
            c.select && c.select(DT.fromFormat(t, k.locale).toISODate())
        }
        ),
        o.destruct = (()=>{
            const e = u.getElementsByClassName("dp-body")[0];
            e && u.removeChild(e),
            o.control(d || o.vague ? "months" : "days"),
            o.data = {}
        }
        ),
        o.setFocus = (e=>{
            const t = e.querySelectorAll('button:enabled, [tabindex="0"]');
            t.length && t[0].focus()
        }
        ),
        o.cyclerEvent = (()=>{
            var e = null;
            let a = g.closest(".dp-body")
              , n = f;
            h = a.querySelector(".dp-cycler"),
            p = h.querySelector("span.year-label");
            const s = BmoDatePickerComponent.decade(t["min-decade"])
              , r = BmoDatePickerComponent.decade(t["max-decade"])
              , i = h.querySelector("button.chvy-left")
              , l = h.querySelector("button.chvy-right")
              , c = e=>{
                e <= s ? i.setAttribute("disabled", "disabled") : i.removeAttribute("disabled"),
                e >= r ? l.setAttribute("disabled", "disabled") : l.removeAttribute("disabled")
            }
              , d = ()=>{
                var e = ""
                  , t = BmoDatePickerComponent.decade(n.year);
                p.textContent = (m ? "Années " : "") + t + (m ? "" : "s");
                const a = t >= s && t <= r;
                for (let n = 0; n <= 9; n++)
                    e += `<div tabindex="${a ? "0" : "-1"}" role="gridcell" data-vertex="${t + n}">${t + n}</div>`;
                g.innerHTML = e,
                L(),
                T(),
                o.stepEvents(),
                c(t),
                (t <= s && document.activeElement !== l || t >= r && document.activeElement !== i) && g.firstElementChild.focus()
            }
            ;
            [i, l].forEach(t=>t.addEventListener("click", t=>{
                e && clearTimeout(e),
                e = setTimeout(function() {
                    e = null,
                    n = n[this === i ? "minus" : "plus"]({
                        years: 10
                    }),
                    d()
                }
                .bind(t.currentTarget), 0)
            }
            )),
            c(BmoDatePickerComponent.decade(n.year))
        }
        ));
        const $ = (e,t)=>{
            e ? setTimeout(()=>u.classList.add("active"), 20) : u.classList.remove("active"),
            setTimeout(t, 300)
        }
          , T = ()=>{
            try {
                Gridnav.lists.push(new Gridnav(g))
            } catch (e) {
                console.warn("BmoDatePickerComponent: GridNav is missing. 2D grid navigation disabled.")
            }
        }
          , L = e=>{
            y && (y.forEach(e=>e.removeEventListener("keydown", s.trapFocus)),
            y = null),
            e || setTimeout(()=>{
                y = u.querySelectorAll('button:enabled, [tabindex="0"]');
                const e = y[0]
                  , t = y[y.length - 1];
                s.trapFocus = (a=>{
                    switch (a.key) {
                    case "Tab":
                        a.shiftKey ? document.activeElement === e && (a.preventDefault(),
                        t.focus()) : document.activeElement === t && (a.preventDefault(),
                        e.focus());
                        break;
                    case "Escape":
                    case "Esc":
                        this.closeCalendar()
                    }
                }
                ),
                y.forEach(e=>{
                    e.addEventListener("keydown", s.trapFocus)
                }
                )
            }
            , 0)
        }
        ;
        this.closeCalendar = (()=>{
            if ($(!1, ()=>{
                u.style.display = "none",
                u.style.left = "0",
                this.icon.setAttribute("aria-expanded", "false"),
                e || o.destruct(),
                D = !1
            }
            ),
            document.activeElement)
                switch (document.activeElement.tagName) {
                case "INPUT":
                case "TEXTAREA":
                case "SELECT":
                    break;
                default:
                    this["input-element"].focus()
                }
            else
                this["input-element"].focus()
        }
        ),
        this.reset = (()=>{
            L(!0),
            this.container.removeChild(u.parentNode),
            setTimeout(()=>{
                u = h = p = v = g = f = null,
                x(!0)
            }
            , 0)
        }
        );
        const P = ()=>{
            const e = document.documentElement.clientWidth
              , t = u.getBoundingClientRect();
            if (t.right > e) {
                let a = t.right - e;
                u.style.left = u.offsetLeft - a + "px"
            }
        }
        ;
        x()
    }
}
var DT = null;
const utils = {
    clearElement(e) {
        for (; e.firstChild; )
            e.removeChild(e.firstChild)
    },
    isMobileOrTablet() {
        var e, t = !1;
        return e = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0),
        t
    },
    pad: e=>e < 10 ? "0" + e : String(e),
    browser: {
        isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }
};
BmoDatePickerComponent.entries = [],
document.addEventListener("click", e=>{
    var t = document.querySelectorAll(".icon-button.calendar, .calendar-widget-container")
      , a = !1;
    t.forEach(t=>{
        t.contains(e.target) && (a = !0)
    }
    ),
    a || BmoDatePickerComponent.closeAll()
}
),
HTMLInputElement.prototype.trigger = function(e, t) {
    const a = new Event(e);
    this.dispatchEvent(a),
    t instanceof Function && t.call(this)
}
,
Array.prototype.move = function(e, t) {
    var a = [...this];
    return a.splice(t, 0, a.splice(e, 1)[0]),
    a
}
,
customElements.define("bmo-date-picker", BmoDatePickerComponent);
