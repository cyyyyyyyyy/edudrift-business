(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    245: function(e, a, t) {
      e.exports = {
        main: "nb-create-program_main__22qrQ",
        content: "nb-create-program_content__1Erq9"
      };
    },
    30: function(e, a, t) {
      e.exports = {
        main_header: "nb-overview_main_header__oW7PV",
        add_icon: "nb-overview_add_icon__djeru",
        card: "nb-overview_card__1FCQQ",
        sub: "nb-overview_sub__3sPLt",
        content: "nb-overview_content__2ORoT",
        footer: "nb-overview_footer__1Jv_a",
        event_header: "nb-overview_event_header__3crvQ",
        event_list: "nb-overview_event_list__3iV9C"
      };
    },
    319: function(e, a, t) {
      e.exports = t.p + "static/media/logo.7913e28e.png";
    },
    342: function(e, a, t) {
      e.exports = { breadcrumb: "nb-home_breadcrumb__3-7gL" };
    },
    349: function(e) {
      e.exports = {
        "EduDrift Admin Panel": "EduDrift Admin Panel",
        "SIGN IN": "SIGN IN",
        "Email Address": "Email Address",
        Password: "Password"
      };
    },
    350: function(e) {
      e.exports = { "Welcome to React": "\u6b22\u8fce" };
    },
    362: function(e, a, t) {
      e.exports = t(743);
    },
    46: function(e, a, t) {
      e.exports = {
        radio: "program-type_radio__1hOan",
        radio_content: "program-type_radio_content__3spi1",
        footer: "program-type_footer__3tYKW"
      };
    },
    531: function(e, a, t) {
      e.exports = {
        radio: "base-info_radio__x-6Mq",
        radio_content: "base-info_radio_content__35d9V",
        footer: "base-info_footer__2sWdJ"
      };
    },
    742: function(e, a, t) {},
    743: function(e, a, t) {
      "use strict";
      t.r(a);
      var r = t(0),
        n = t.n(r),
        l = t(5),
        o = t.n(l),
        c = t(131),
        i = t(351),
        s = t(315),
        m = t(786),
        u = t(788),
        p = t(772),
        d = t(343),
        E = t.n(d),
        v = t(344),
        h = t.n(v),
        f = t(773),
        g = t(81),
        y = t(789),
        b = t(63),
        _ = t(759),
        T = t(19),
        P = t(762),
        w = t(787),
        N = t(760),
        x = t(761),
        A = t(321),
        k = t.n(A),
        I = t(319),
        O = t.n(I),
        S = [
          { label: "home", value: "home", path: "/nb-home" },
          { label: "program", value: "program", path: "/nb-program" },
          { label: "finance", value: "finance" },
          { label: "analytics", value: "analytics" },
          { label: "promotion", value: "promotion" },
          { label: "user profile", value: "profile" },
          { label: "help center", value: "center" }
        ],
        j = Object(_.a)(function(e) {
          return {
            root: {
              width: "100%",
              maxWidth: 360,
              backgroundColor: e.palette.background.paper
            },
            header: { height: 90 },
            logo: {
              width: 150,
              display: "block",
              paddingTop: 13,
              margin: "0 auto"
            },
            text: { fontSize: "18px" }
          };
        }),
        Y = Object(T.a)(function(e) {
          return {
            selected: {
              backgroundColor: "".concat(e.palette.primary.main, " !important"),
              color: "#fff",
              boxShadow: "none"
            },
            "selected:hover": {
              backgroundColor: e.palette.primary.main,
              color: "#fff"
            }
          };
        })(w.a);
      function D(e) {
        var a = j(),
          t = n.a.useState(""),
          r = Object(b.a)(t, 2),
          l = r[0],
          o = r[1];
        return n.a.createElement(
          "div",
          { className: a.root },
          n.a.createElement(
            "div",
            { className: a.header },
            n.a.createElement("img", { src: O.a, className: a.logo })
          ),
          n.a.createElement(
            P.a,
            { component: "nav", "aria-label": "main mailbox folders" },
            (function(a) {
              var t = [];
              return (
                a.forEach(function(a) {
                  t.push(
                    n.a.createElement(
                      Y,
                      {
                        key: a.value,
                        button: !0,
                        selected: l === a.value,
                        onClick: function(t) {
                          return (function(a, t, r) {
                            o(t), e.onChange(r);
                          })(0, a.value, a);
                        }
                      },
                      n.a.createElement(
                        N.a,
                        null,
                        n.a.createElement(k.a, {
                          color: l === a.value ? "#fff" : "primary"
                        })
                      ),
                      n.a.createElement(x.a, null, a.label.toLocaleUpperCase())
                    )
                  );
                }),
                t
              );
            })(S)
          )
        );
      }
      D.defaultProps = { onChange: function() {} };
      for (
        var q = t(777),
          M = t(763),
          R = t(744),
          L = t(764),
          G = t(783),
          C = t(774),
          F = t(96),
          H = t.n(F),
          V = [
            { title: "Title", dataIndex: "name" },
            { title: "State", dataIndex: "age" },
            { title: "Place", dataIndex: "address" },
            { title: "Event time", dataIndex: "address" },
            { title: "Creation time", dataIndex: "address" },
            {
              title: "action",
              render: function() {
                return n.a.createElement("a", null, "Detail");
              }
            }
          ],
          W = [],
          z = 0;
        z < 46;
        z++
      )
        W.push({
          key: z,
          name: "Edward King ".concat(z),
          age: 32,
          address: "London, Park Lane no. ".concat(z)
        });
      var B = Object(_.a)(function(e) {
          return { tabs: { minHeight: 52 } };
        }),
        U = function() {
          var e = B(),
            a = n.a.useState(0),
            t = Object(b.a)(a, 2),
            r = t[0],
            l = t[1];
          return n.a.createElement(
            "div",
            { className: H.a.main },
            n.a.createElement(
              R.a,
              { className: H.a.header },
              n.a.createElement(
                "div",
                { className: H.a.bar },
                n.a.createElement(
                  q.a,
                  {
                    className: e.tabs,
                    value: r,
                    onChange: function(e, a) {
                      l(a);
                    },
                    indicatorColor: "primary",
                    textColor: "primary"
                  },
                  n.a.createElement(M.a, { label: "Item One" }),
                  n.a.createElement(M.a, { label: "Item Two" }),
                  n.a.createElement(M.a, { label: "Item Three" })
                )
              ),
              n.a.createElement(
                "div",
                { className: H.a.search },
                n.a.createElement(G.a.Search, null)
              ),
              n.a.createElement(
                "div",
                { className: H.a.event },
                n.a.createElement(
                  L.a,
                  { color: "primary", variant: "extended", size: "small" },
                  "NEW EVENT"
                )
              )
            ),
            n.a.createElement(
              R.a,
              { className: H.a.table },
              n.a.createElement(C.a, { dataSource: W, columns: V })
            )
          );
        },
        J = t(768),
        K = t(785),
        X = t(15),
        Q = t.n(X),
        Z = t(767),
        $ = t(765),
        ee = t(766),
        ae = t(769),
        te = t(331),
        re = t.n(te),
        ne = t(67),
        le = t.n(ne),
        oe = t(172),
        ce = t.n(oe),
        ie = t(93),
        se = t.n(ie),
        me = [
          { month: "Jan", Tokyo: 7 },
          { month: "Feb", Tokyo: 6.9 },
          { month: "Mar", Tokyo: 9.5 },
          { month: "Apr", Tokyo: 14.5 },
          { month: "May", Tokyo: 18.4 },
          { month: "Jun", Tokyo: 21.5 },
          { month: "Jul", Tokyo: 25.2 },
          { month: "Aug", Tokyo: 26.5 },
          { month: "Sep", Tokyo: 23.3 },
          { month: "Oct", Tokyo: 18.3 },
          { month: "Nov", Tokyo: 13.9 },
          { month: "Dec", Tokyo: 9.6 }
        ],
        ue = function() {
          var e = Object(r.useRef)("");
          return (
            Object(r.useEffect)(function() {
              var a = new ce.a().createView().source(me);
              a.transform({
                type: "fold",
                fields: ["Tokyo"],
                key: "city",
                value: "temperature"
              });
              var t = new le.a.Chart({
                container: e.current,
                forceFit: !0,
                animate: !0,
                height: 60,
                padding: [0, 0, 0, 0]
              });
              t.source(a, { temperature: { min: 0, max: 30 } }),
                t.tooltip(!1),
                t.axis("temperature", !1),
                t.axis("month", !1),
                t.legend(!1),
                t
                  .line()
                  .position("month*temperature")
                  .color("city")
                  .shape("smooth"),
                t
                  .point()
                  .position("month*temperature")
                  .color("city")
                  .size(4)
                  .shape("circle")
                  .style({ stroke: "#fff", lineWidth: 1 }),
                t.render();
            }),
            n.a.createElement("div", { ref: e, className: se.a.chart })
          );
        },
        pe = function() {
          return n.a.createElement(
            $.a,
            { className: se.a.card, style: { height: 334 } },
            n.a.createElement(
              ee.a,
              null,
              n.a.createElement(g.a, { variant: "subtitle1" }, "FINANCE"),
              n.a.createElement(
                "ul",
                null,
                (function() {
                  var e = [];
                  return (
                    [1, 2, 3].forEach(function(a) {
                      e.push(
                        n.a.createElement(
                          "li",
                          { className: se.a.list, key: a },
                          n.a.createElement("div", { className: se.a.line }),
                          n.a.createElement(
                            "div",
                            { className: se.a.text },
                            n.a.createElement(
                              g.a,
                              { variant: "h6" },
                              "123,123"
                            ),
                            n.a.createElement(
                              g.a,
                              { variant: "overline" },
                              "Total Amount"
                            )
                          ),
                          n.a.createElement(ue, null)
                        )
                      );
                    }),
                    e
                  );
                })()
              )
            )
          );
        },
        de = t(30),
        Ee = t.n(de),
        ve = [
          { type: "\u8bc4\u4f30\u4e2d", percent: 0.23 },
          { type: "\u8bbe\u8ba1\u4e2d", percent: 0.28 },
          { type: "\u6b63\u5728\u5f00\u53d1", percent: 0.3 },
          { type: "\u5df2\u4e0a\u7ebf", percent: 0.19 }
        ],
        he = Object(_.a)(function(e) {
          return { textPrimary: { color: e.palette.primary.main } };
        }),
        fe = function() {
          var e = he(),
            a = Object(r.useRef)("");
          return (
            Object(r.useEffect)(function() {
              var e = new ce.a().createView().source(ve);
              e.transform({
                type: "map",
                callback: function(e) {
                  return (e.value = parseInt(500 * e.percent)), e;
                }
              });
              var t = new le.a.Chart({
                container: a.current,
                forceFit: !0,
                height: 450,
                padding: "auto",
                animate: !0
              });
              t.source(e),
                t.tooltip(!1),
                t.coord("theta", { radius: 0.82, innerRadius: 0.8 }),
                t
                  .intervalStack()
                  .position("percent")
                  .color("type", ["#0a7aca", "#0a9afe", "#4cb9ff", "#8ed1ff"])
                  .opacity(1),
                t.render();
            }),
            n.a.createElement(
              $.a,
              { className: Ee.a.card, style: { height: 550 } },
              n.a.createElement(
                ee.a,
                null,
                n.a.createElement(
                  g.a,
                  { variant: "subtitle1", className: e.textPrimary },
                  "ANALYTICS"
                ),
                n.a.createElement(
                  g.a,
                  { variant: "subtitle1" },
                  "PERCENTAGE OF PARTICIPATION"
                ),
                n.a.createElement("div", { ref: a }),
                ";"
              )
            )
          );
        },
        ge = t(330),
        ye = t.n(ge),
        be = Object(_.a)(function(e) {
          return { textPrimary: { color: e.palette.primary.main } };
        }),
        _e = function() {
          var e = be(),
            a = Object(r.useRef)("");
          return (
            Object(r.useEffect)(function() {
              var e = {
                Asia: le.a.Global.colors[0],
                Americas: le.a.Global.colors[1],
                Europe: le.a.Global.colors[2],
                Oceania: le.a.Global.colors[3]
              };
              ye.a
                .get(
                  "https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json"
                )
                .then(function(t) {
                  var r = t.data;
                  console.log(r);
                  var n = new le.a.Chart({
                    container: a.current,
                    forceFit: !0,
                    height: 450,
                    animate: !0
                  });
                  n.source(r),
                    n.scale({
                      LifeExpectancy: {
                        alias: "\u4eba\u5747\u5bff\u547d\uff08\u5e74\uff09"
                      },
                      Population: {
                        type: "pow",
                        alias: "\u4eba\u53e3\u603b\u6570"
                      },
                      GDP: {
                        alias:
                          "\u4eba\u5747\u56fd\u5185\u751f\u4ea7\u603b\u503c($)"
                      },
                      Country: { alias: "\u56fd\u5bb6/\u5730\u533a" }
                    }),
                    n.axis("GDP", {
                      label: {
                        formatter: function(e) {
                          return (e / 1e3).toFixed(0) + "k";
                        }
                      }
                    }),
                    n.tooltip({ showTitle: !1 }),
                    n.legend("Population", !1),
                    n
                      .point()
                      .position("GDP*LifeExpectancy")
                      .size("Population", [4, 65])
                      .color("continent", function(a) {
                        return e[a];
                      })
                      .shape("circle")
                      .tooltip("Country*Population*GDP*LifeExpectancy")
                      .style("continent", {
                        lineWidth: 1,
                        strokeOpacity: 1,
                        fillOpacity: 0.3,
                        opacity: 0.65,
                        stroke: function(a) {
                          return e[a];
                        }
                      }),
                    n.render();
                });
            }),
            n.a.createElement(
              $.a,
              { className: Ee.a.card, style: { height: 550 } },
              n.a.createElement(
                ee.a,
                null,
                n.a.createElement(
                  g.a,
                  { variant: "subtitle1", className: e.textPrimary },
                  "ANALYTICS"
                ),
                n.a.createElement(
                  g.a,
                  { variant: "subtitle1" },
                  "TOTAO PROGRAMS SALE"
                ),
                n.a.createElement("div", { ref: a })
              )
            )
          );
        },
        Te = Object(_.a)(function(e) {
          return { textPrimary: { color: e.palette.primary.main } };
        }),
        Pe = function() {
          var e = Te(),
            a = function() {
              var e = [];
              return (
                [1, 2, 3].forEach(function(a) {
                  e.push(
                    n.a.createElement(
                      Z.a,
                      { key: a, xs: 4 },
                      n.a.createElement(g.a, { variant: "h4" }, "12"),
                      n.a.createElement(
                        g.a,
                        { variant: "caption" },
                        Q()().format("YYYY-MM-DD HH:mm")
                      )
                    )
                  );
                }),
                e
              );
            };
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "ul",
              { className: Ee.a.main_header },
              n.a.createElement(
                "li",
                null,
                n.a.createElement(
                  g.a,
                  { variant: "h5", display: "inline" },
                  "OVERVIEW"
                ),
                n.a.createElement(
                  g.a,
                  { variant: "caption", display: "inline" },
                  Q()().format("YYYY-MM-DD HH:mm")
                )
              ),
              n.a.createElement(
                "li",
                null,
                n.a.createElement(
                  J.a,
                  { to: "/nb-home/create" },
                  n.a.createElement(
                    L.a,
                    {
                      color: "primary",
                      variant: "extended",
                      "aria-label": "delete",
                      className: e.fab
                    },
                    "Extended",
                    n.a.createElement(re.a, { className: Ee.a.add_icon })
                  )
                )
              )
            ),
            n.a.createElement(
              Z.a,
              { container: !0 },
              n.a.createElement(
                Z.a,
                { item: !0, xs: 8, style: { paddingRight: 24 } },
                n.a.createElement(
                  $.a,
                  { className: Ee.a.card },
                  n.a.createElement(
                    ee.a,
                    null,
                    n.a.createElement(
                      g.a,
                      { variant: "subtitle1" },
                      "GLOBAL LEADERSHIP & TALENT PROGRAM PROGRAM(SUMMER)"
                    ),
                    n.a.createElement(
                      "div",
                      { className: Ee.a.sub },
                      n.a.createElement("span", null, "current"),
                      n.a.createElement(g.a, null, "time")
                    ),
                    n.a.createElement(
                      Z.a,
                      { container: !0, className: Ee.a.content },
                      a()
                    ),
                    n.a.createElement(
                      "footer",
                      { className: Ee.a.footer },
                      "Your project has a new order"
                    )
                  )
                ),
                n.a.createElement(
                  $.a,
                  { className: Ee.a.card },
                  n.a.createElement(
                    ee.a,
                    null,
                    n.a.createElement(
                      g.a,
                      { variant: "subtitle1" },
                      "GLOBAL LEADERSHIP & TALENT PROGRAM PROGRAM(SUMMER)"
                    ),
                    n.a.createElement(
                      "div",
                      { className: Ee.a.sub },
                      n.a.createElement("span", null, "current"),
                      n.a.createElement(g.a, null, "time")
                    ),
                    n.a.createElement(
                      Z.a,
                      { container: !0, className: Ee.a.content },
                      a()
                    ),
                    n.a.createElement(
                      "footer",
                      { className: Ee.a.footer },
                      "Your project has a new order"
                    )
                  )
                ),
                n.a.createElement(
                  $.a,
                  { className: Ee.a.card },
                  n.a.createElement(
                    ee.a,
                    null,
                    n.a.createElement(
                      g.a,
                      { variant: "subtitle1" },
                      "GLOBAL LEADERSHIP & TALENT PROGRAM PROGRAM(SUMMER)"
                    ),
                    n.a.createElement(
                      "div",
                      { className: Ee.a.sub },
                      n.a.createElement("span", null, "current"),
                      n.a.createElement(g.a, null, "time")
                    ),
                    n.a.createElement(
                      "div",
                      { className: Ee.a.content },
                      "123"
                    ),
                    n.a.createElement(
                      "footer",
                      { className: Ee.a.footer },
                      "Your project has a new order"
                    )
                  )
                )
              ),
              n.a.createElement(
                Z.a,
                { item: !0, xs: 4 },
                n.a.createElement(
                  $.a,
                  { className: Ee.a.card, style: { height: 470 } },
                  n.a.createElement(ae.a, {
                    className: Ee.a.event_header,
                    title: n.a.createElement(
                      g.a,
                      { variant: "subtitle1" },
                      "APPROVED EVENTS"
                    )
                  }),
                  n.a.createElement(
                    ee.a,
                    null,
                    (function() {
                      var e = [];
                      return (
                        [1, 2, 3].forEach(function(a) {
                          e.push(
                            n.a.createElement(
                              Z.a,
                              { key: a, className: Ee.a.event_list },
                              n.a.createElement(
                                g.a,
                                {
                                  variant: "body1",
                                  style: { paddingBottom: 10 }
                                },
                                "Global Leadership & Program"
                              ),
                              n.a.createElement(
                                g.a,
                                {
                                  variant: "body2",
                                  style: { paddingBottom: 10 }
                                },
                                "Your project has a new order"
                              ),
                              n.a.createElement(
                                g.a,
                                { variant: "caption" },
                                Q()().format("YYYY-MM-DD HH:mm")
                              )
                            )
                          );
                        }),
                        e
                      );
                    })()
                  )
                ),
                n.a.createElement(pe, null)
              )
            ),
            n.a.createElement(
              Z.a,
              { container: !0 },
              n.a.createElement(
                Z.a,
                { item: !0, xs: 4, style: { paddingRight: 24 } },
                n.a.createElement(fe, null)
              ),
              n.a.createElement(
                Z.a,
                { item: !0, xs: 8 },
                n.a.createElement(_e, null)
              )
            )
          );
        },
        we = (t(354), t(784)),
        Ne = t(778),
        xe = t(182),
        Ae = t(95),
        ke = t(46),
        Ie = t.n(ke),
        Oe = [
          {
            label: "\u590f/\u51ac\u4ee4\u8425",
            value: "1",
            content:
              "Official accredited/non-accredited university programs conducted in the summer or winter school breaks. These programs usually last between 3-12 weeks with a variety of courses \nfor students to choose from."
          },
          {
            label: "\u77ed\u671f\u6e38\u5b66\u53c2\u89c2",
            value: "2",
            content:
              "Reputable programs conducted in collaboration with institutions and/or universities. These programs are usually theme-based, and also provide a cultural-immersion experience for visiting students. Length of programs vary from 3 days to 2 weeks."
          },
          {
            label: "\u6d77\u5916\u5b9e\u4e60",
            value: "3",
            content:
              "Arranged internships in various countries done in partnership with start-ups, SMEs, NGOs, and other partnering organisations. These program may involve participants receiving an internship allowance/stipend. Length of programs vary from 3 weeks to 6 months."
          },
          {
            label: "\u7ade\u8d5b",
            value: "4",
            content:
              "Tournaments, competitions and other international events for both international and local student participants. These programs include, but not limited to, debate competitions, mooting competitions, robotics, public speaking, tech exhibitions, etc."
          }
        ],
        Se = function(e) {
          var a = e.form.getFieldDecorator;
          return n.a.createElement(
            "div",
            null,
            a("project_type", {
              rules: [{ required: !0, message: "Please input your username!" }]
            })(
              n.a.createElement(
                xe.a.Group,
                null,
                (function() {
                  var e = [];
                  return (
                    Oe.forEach(function(a) {
                      e.push(
                        n.a.createElement(
                          "div",
                          { className: Ie.a.radio },
                          n.a.createElement(xe.a, { value: a.value }, a.label),
                          n.a.createElement(
                            "div",
                            { className: Ie.a.radio_content },
                            a.content
                          )
                        )
                      );
                    }),
                    e
                  );
                })()
              )
            ),
            n.a.createElement(
              "div",
              { style: { paddingTop: 30 } },
              n.a.createElement(Ae.a, { type: "primary" }, "NEXT STEP")
            )
          );
        },
        je = t(780),
        Ye = t(770),
        De = t(115),
        qe = t(771),
        Me = t(132),
        Re = t(775),
        Le = (t(531), je.a.Title),
        Ge = je.a.Text,
        Ce = G.a.TextArea,
        Fe = [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" },
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" },
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" },
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" }
        ],
        He = [
          { label: "\u6700\u5c11\u5b66\u751f", value: "Apple" },
          { label: "\u6700\u5927\u5b66\u751f", value: "Pear" },
          { label: "\u6700\u5c11\u6559\u5458", value: "Orange" },
          { label: "\u6700\u5927\u6559\u5458", value: "Apple1" },
          { label: "\u6700\u5c11\u89c2\u6469", value: "Pear2" },
          { label: "\u6700\u5927\u89c2\u6469", value: "Orange3" }
        ],
        Ve = function(e) {
          var a = e.form.getFieldDecorator,
            t = function(e) {
              var a = [];
              return (
                e.forEach(function(e) {
                  a.push(
                    n.a.createElement(
                      Ye.a,
                      { span: 6 },
                      n.a.createElement(De.a, { value: e.value }, e.label)
                    )
                  );
                }),
                a
              );
            };
          return n.a.createElement(
            Ne.a,
            null,
            n.a.createElement(Le, { level: 3 }, "\u57fa\u672c\u4fe1\u606f"),
            n.a.createElement(
              Ge,
              { type: "secondary" },
              "Lets begin with the basic introduction to what you\u2019re about to offer."
            ),
            n.a.createElement(
              qe.a,
              null,
              n.a.createElement(
                Ye.a,
                { span: 10, style: { paddingRight: 40 } },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u9879\u76ee\u540d\u79f0" },
                  a("project_name", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(
                    n.a.createElement(G.a, {
                      placeholder: "\u9879\u76ee\u540d\u79f0"
                    })
                  )
                ),
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u56fd\u5bb6" },
                  a("country", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(Me.a, { placeholder: "\u56fd\u5bb6" }))
                ),
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u9879\u76ee\u4e3b\u9875" },
                  a("project_home", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(
                    n.a.createElement(G.a, {
                      placeholder: "\u9879\u76ee\u4e3b\u9875"
                    })
                  )
                )
              ),
              n.a.createElement(
                Ye.a,
                { span: 10 },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u7ec4\u7ec7\u673a\u6784\u540d\u79f0" },
                  a("username", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(
                    n.a.createElement(G.a, {
                      placeholder: "\u7ec4\u7ec7\u673a\u6784\u540d\u79f0"
                    })
                  )
                ),
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u57ce\u5e02/\u5730\u533a" },
                  a("city", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(
                    n.a.createElement(Me.a, {
                      placeholder: "\u57ce\u5e02/\u5730\u533a"
                    })
                  )
                )
              )
            ),
            n.a.createElement(Le, { level: 4 }, "\u9879\u76ee\u63cf\u8ff0"),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                a("describe", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(Ce, null))
              )
            ),
            n.a.createElement(
              Le,
              { level: 4 },
              "\u6dfb\u52a0\u9879\u76ee\u6807\u7b7e"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                a("tags", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(De.a.Group, null, t(Fe)))
              )
            ),
            n.a.createElement(Le, { level: 4 }, "\u9879\u76ee\u65f6\u95f4"),
            n.a.createElement(
              Ge,
              { type: "secondary" },
              "Let us know when is the last day that participants can register for your program!"
            ),
            n.a.createElement(
              qe.a,
              null,
              n.a.createElement(
                Ye.a,
                { span: 5, style: { paddingRight: 40 } },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u9879\u76ee\u5f00\u59cb\u65f6\u95f4" },
                  a("project_start", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(Re.a, { format: "YYYY/MM/DD" }))
                ),
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u62a5\u540d\u622a\u6b62\u65f6\u95f4" },
                  a("country", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(Re.a, { format: "YYYY/MM/DD" }))
                )
              ),
              n.a.createElement(
                Ye.a,
                { span: 5 },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u9879\u76ee\u7ed3\u675f\u65f6\u95f4" },
                  a("username", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(Re.a, { format: "YYYY/MM/DD" }))
                )
              )
            ),
            n.a.createElement(
              Le,
              { level: 4 },
              "\u9879\u76ee\u6210\u5458\u5206\u7c7b"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                a("type", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(De.a.Group, null, t(Fe)))
              )
            ),
            n.a.createElement(
              Le,
              { level: 4 },
              "\u9879\u76ee\u6210\u578b\u8981\u6c42"
            ),
            n.a.createElement(
              qe.a,
              null,
              (function(e) {
                var t = [];
                return (
                  e.forEach(function(e) {
                    console.log(e.value),
                      t.push(
                        n.a.createElement(
                          Ye.a,
                          { span: 8, style: { paddingRight: 40 } },
                          n.a.createElement(
                            Ne.a.Item,
                            { label: e.label },
                            a(e.value, { rules: [] })(
                              n.a.createElement(G.a, null)
                            )
                          )
                        )
                      );
                  }),
                  t
                );
              })(He)
            ),
            n.a.createElement(
              "div",
              { style: { paddingTop: 30 } },
              n.a.createElement(Ae.a, { type: "primary" }, "NEXT STEP")
            )
          );
        },
        We = je.a.Title,
        ze = je.a.Text,
        Be = (G.a.TextArea,
        [
          { label: "Day01", value: "1", date: "2019-10-10" },
          { label: "Day02", value: "2", date: "2019-10-11" },
          { label: "Day03", value: "3", date: "2019-10-12" },
          { label: "Day04", value: "4", date: "2019-10-13" },
          { label: "Day05", value: "5", date: "2019-10-14" },
          { label: "Day06", value: "6", date: "2019-10-15" },
          { label: "Day07", value: "7", date: "2019-10-16" },
          { label: "Day08", value: "8", date: "2019-10-17" }
        ]),
        Ue = [
          { value: "morning", label: " Morning(0900H-1200H)", type: "text" },
          { value: "morning-1", label: "Airport Arrival" },
          { value: "morning-2", label: "Registration and Hotel Check-In" },
          { value: "morning-3", label: "Airport Arrival" },
          {
            value: "afternoon",
            label: "Afternoon (1400H - 1700H)",
            type: "text"
          },
          { value: "afternoon-1", label: "Airport Arrival" },
          { value: "afternoon-2", label: "Registration and Hotel Check-In" },
          { value: "afternoon-3", label: "Airport Arrival" },
          { value: "evening", label: "Evening (1800H onwards)", type: "text" },
          { value: "evening-1", label: "Airport Arrival" },
          { value: "evening-2", label: "Registration and Hotel Check-In" },
          { value: "evening-3", label: "Airport Arrival" }
        ],
        Je = function(e) {
          var a = e.form,
            t = a.getFieldDecorator,
            l = (a.getFieldsValue, a.setFieldsValue, Object(r.useState)("")),
            o = Object(b.a)(l, 2),
            c = o[0],
            i = o[1],
            s =
              Be.find(function(e) {
                return e.value === c;
              }) || {};
          return n.a.createElement(
            Ne.a,
            null,
            n.a.createElement(We, { level: 3 }, "\u9879\u76ee\u8ba1\u5212"),
            n.a.createElement(
              ze,
              { type: "secondary" },
              "Having a finalised schedule allows for participants to search and pick programs that fits. It also helps with the planning of flights, travel and other arrangements to allow faster decisions on participation."
            ),
            n.a.createElement(
              qe.a,
              null,
              n.a.createElement(
                Ye.a,
                { span: 6, style: { paddingRight: 40 } },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u9879\u76ee\u5f00\u59cb\u65f6\u95f4" },
                  t("project_name", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(Re.a, { format: "YYYY/MM/DD" }))
                )
              ),
              n.a.createElement(
                Ye.a,
                { span: 6 },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "\u9879\u76ee\u7ed3\u675f\u65f6\u95f4" },
                  t("username", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(Re.a, { format: "YYYY/MM/DD" }))
                )
              )
            ),
            n.a.createElement(We, { level: 4 }, "\u65e5\u5e38\u5b89\u6392"),
            n.a.createElement(
              qe.a,
              null,
              (function(e) {
                var a = [];
                return (
                  e.forEach(function(e) {
                    a.push(
                      n.a.createElement(
                        Ye.a,
                        { span: 2, key: e.value },
                        n.a.createElement(
                          Ae.a,
                          {
                            onClick: function() {
                              return (a = e.value), void i(a);
                              var a;
                            }
                          },
                          e.label
                        )
                      )
                    );
                  }),
                  a
                );
              })(Be)
            ),
            c
              ? n.a.createElement(
                  "div",
                  null,
                  n.a.createElement(
                    Ne.a.Item,
                    { label: n.a.createElement("spa", null, s.label) },
                    t("".concat(c, "[arrival]"), {
                      preserve: !0,
                      rules: [
                        { required: !0, message: "Please input your username!" }
                      ]
                    })(n.a.createElement(Re.a, { format: "YYYY/MM/DD" }))
                  ),
                  (function(e) {
                    var a = [];
                    return (
                      e.forEach(function(e) {
                        a.push(
                          n.a.createElement(
                            qe.a,
                            { key: e.value },
                            n.a.createElement(
                              Ye.a,
                              { span: 6 },
                              "text" !== e.type
                                ? n.a.createElement(
                                    Ne.a.Item,
                                    null,
                                    t("".concat(c, "[").concat(e.value, "]"), {
                                      rules: [],
                                      preserve: !0
                                    })(
                                      n.a.createElement(G.a, {
                                        placeholder: e.label
                                      })
                                    )
                                  )
                                : n.a.createElement("div", null, e.label)
                            )
                          )
                        );
                      }),
                      a
                    );
                  })(Ue)
                )
              : null,
            n.a.createElement(
              "div",
              { style: { paddingTop: 30 } },
              n.a.createElement(Ae.a, { type: "primary" }, "NEXT STEP")
            )
          );
        },
        Ke = t(776),
        Xe = t(7),
        Qe = je.a.Title,
        Ze = je.a.Text,
        $e = G.a.TextArea,
        ea = [
          {
            label: "\u4e0e\u9879\u76ee\u4e3b\u529e\u673a\u6784\u76f8\u540c",
            value: "1"
          },
          {
            label: "\u4e0d\uff0c\u6709\u5176\u4ed6\u7ec4\u7ec7\u8d1f\u8d23",
            value: "2"
          }
        ],
        aa = function(e) {
          var a = e.form,
            t = a.getFieldDecorator,
            r = a.getFieldValue,
            l = a.setFieldsValue;
          t("projectKeys", { initialValue: [1, 2, 3] }),
            t("projectImageKeys", {
              initialValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            });
          var o = function() {
            var e = r("projectImageKeys"),
              a = [];
            return (
              e &&
                e.forEach(function(e, r) {
                  a.push(
                    n.a.createElement(
                      "li",
                      {
                        style: { float: "left", paddingRight: 12 },
                        key: "projectImage".concat(r)
                      },
                      t("project_image[".concat(e, "]"), {})(
                        n.a.createElement(
                          Ke.a,
                          {
                            name: "avatar",
                            listType: "picture-card",
                            showUploadList: !0
                          },
                          n.a.createElement(
                            "div",
                            null,
                            n.a.createElement(Xe.a, { type: "plus" }),
                            n.a.createElement(
                              "div",
                              { className: "ant-upload-text" },
                              "Upload"
                            )
                          )
                        )
                      )
                    )
                  );
                }),
              a
            );
          };
          return n.a.createElement(
            Ne.a,
            null,
            n.a.createElement(Qe, { level: 3 }, "\u9879\u76ee\u5c55\u793a"),
            n.a.createElement(
              Ze,
              { type: "secondary" },
              "Are the lectures discussion based? Are there guest lectures from esteemed speakers? How are courses evaluated? List the strengths and highlights of your program."
            ),
            n.a.createElement(
              "ul",
              { style: { width: 500, overflow: "hidden" } },
              (function() {
                var e = r("projectKeys"),
                  a = [];
                return (
                  e &&
                    e.forEach(function(e, r) {
                      a.push(
                        n.a.createElement(
                          "li",
                          {
                            key: "project".concat(r),
                            style: { paddingTop: 10 }
                          },
                          t("project_show[".concat(e, "]"), {})(
                            n.a.createElement(G.a, null)
                          )
                        )
                      );
                    }),
                  a
                );
              })(),
              n.a.createElement(
                "li",
                null,
                n.a.createElement(
                  "a",
                  {
                    onClick: function() {
                      var e = r("projectKeys"),
                        a = e.concat(e.length++);
                      l({ projectKeys: a });
                    }
                  },
                  "add"
                )
              )
            ),
            n.a.createElement(
              Ze,
              { type: "secondary" },
              "Upload photos of the previous editions of the course or other relevant photos (E.g. lecture session)"
            ),
            n.a.createElement(
              "ul",
              { style: { overflow: "hidden", paddingTop: 20 } },
              o()
            ),
            n.a.createElement(
              Qe,
              { level: 4 },
              "\u7ec4\u7ec7\u6e38\u73a9(\u53ef\u9009)"
            ),
            n.a.createElement(
              Ze,
              { type: "secondary", style: { marginTop: 14 } },
              "Let us know a little more about the team behind the non-curriculum aspects of the program."
            ),
            n.a.createElement(
              "div",
              { style: { marginBottom: 14 } },
              t("cannel", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(
                n.a.createElement(
                  xe.a.Group,
                  null,
                  (function(e) {
                    var a = [];
                    return (
                      e.forEach(function(e) {
                        a.push(
                          n.a.createElement(
                            "div",
                            null,
                            n.a.createElement(xe.a, { value: e.value }, e.label)
                          )
                        );
                      }),
                      a
                    );
                  })(ea)
                )
              )
            ),
            n.a.createElement(
              Ze,
              { type: "secondary", s: !0 },
              "Introduction to the Program Organiser"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                t("organiser", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(
                  n.a.createElement($e, {
                    rows: 6,
                    placeholder:
                      "A write-up about the history of the program, its unique selling point, the objectives and aims of the the program that are valuable for the\ndevelopment of the participants taking part in it. [Max 1000 characters]"
                  })
                )
              )
            ),
            n.a.createElement(
              "ul",
              { style: { overflow: "hidden", paddingTop: 20 } },
              o()
            ),
            n.a.createElement(
              "div",
              { style: { paddingTop: 30 } },
              n.a.createElement(Ae.a, { type: "primary" }, "NEXT STEP")
            )
          );
        },
        ta = je.a.Title,
        ra = je.a.Text,
        na = { display: "block", height: "30px", lineHeight: "30px" },
        la = [
          { label: "\u6700\u5c11\u5b66\u751f", value: "Apple" },
          { label: "\u6700\u5927\u5b66\u751f", value: "Pear" },
          { label: "\u6700\u5c11\u6559\u5458", value: "Orange" },
          { label: "\u6700\u5927\u6559\u5458", value: "Apple1" },
          { label: "\u6700\u5c11\u89c2\u6469", value: "Pear2" },
          { label: "\u6700\u5927\u89c2\u6469", value: "Orange3" }
        ],
        oa = [
          {
            label: "No Additional Age Restrictions",
            value: "1",
            content:
              "As long as participants are within the suggested Education Level/Academic Profile, they are allowed to participate in this program. If they have recently graduated from their respective academic institutions, they will still be able to participate."
          },
          {
            label: "Restricted Age Group",
            value: "2",
            content:
              "As part of the program policy, there are age restrictions. Participants whose individual profiles do not meet these requirements will not be able to successful register for the program. The maximum and/or minimum age requirements are as follow:"
          }
        ],
        ca = function(e) {
          var a = e.form,
            t = a.getFieldDecorator,
            r = (a.getFieldsValue, a.setFieldsValue),
            l = a.getFieldValue;
          t("keys", { initialValue: [1, 2, 3] });
          var o = function(e) {
            var a = [];
            return (
              e.forEach(function(e) {
                a.push(
                  n.a.createElement(
                    Ye.a,
                    { span: 8 },
                    n.a.createElement(De.a, { value: e.value }, e.label)
                  )
                );
              }),
              a
            );
          };
          return n.a.createElement(
            Ne.a,
            null,
            n.a.createElement(ta, { level: 3 }, "\u8d44\u683c\u8981\u6c42"),
            n.a.createElement(
              ra,
              { type: "secondary" },
              "Having a finalised schedule allows for participants to search and pick programs that fits. It also helps with the planning of flights, travel and other arrangements to allow faster decisions on participation."
            ),
            n.a.createElement(ta, { level: 4 }, "\u5b66\u5386"),
            n.a.createElement(
              ra,
              { type: "secondary" },
              "Select up to 3 most relevant profile that best fits the program. Note that if you select multiple groups, there is a very high likelyhood that these participant from different academic profiles will register and be in the same program."
            ),
            n.a.createElement(
              "div",
              { style: { paddingTop: 10 } },
              n.a.createElement(
                Ne.a.Item,
                null,
                t("tags", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(
                  n.a.createElement(
                    De.a.Group,
                    { style: { width: "80%" } },
                    o(la)
                  )
                )
              )
            ),
            n.a.createElement(ta, { level: 4 }, "\u5e74\u9f84"),
            n.a.createElement(
              "div",
              null,
              t("age", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(
                n.a.createElement(
                  xe.a.Group,
                  null,
                  (function(e) {
                    var a = [];
                    return (
                      e.forEach(function(e) {
                        a.push(
                          n.a.createElement(
                            "div",
                            { className: Ie.a.radio },
                            n.a.createElement(
                              xe.a,
                              { value: e.value },
                              e.label
                            ),
                            n.a.createElement(
                              "div",
                              { className: Ie.a.radio_content },
                              e.content
                            )
                          )
                        );
                      }),
                      a
                    );
                  })(oa)
                )
              )
            ),
            n.a.createElement(
              qe.a,
              null,
              n.a.createElement(
                Ye.a,
                { span: 5, style: { marginRight: 40 } },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "Minimum age" },
                  t("mini_age", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(G.a, { format: "YYYY/MM/DD" }))
                )
              ),
              n.a.createElement(
                Ye.a,
                { span: 5 },
                n.a.createElement(
                  Ne.a.Item,
                  { label: "Maximum age" },
                  t("max_age", {
                    rules: [
                      { required: !0, message: "Please input your username!" }
                    ]
                  })(n.a.createElement(G.a, { format: "YYYY/MM/DD" }))
                )
              )
            ),
            n.a.createElement(ta, { level: 4 }, "\u5176\u4ed6\u4fe1\u606f"),
            n.a.createElement(
              ra,
              { type: "secondary" },
              "Information of the participants that you may require for successful registration."
            ),
            n.a.createElement(
              ta,
              { level: 4 },
              "\u662f\u5426\u9700\u8981\u989d\u5916\u7684\u62a5\u540d\u4fe1\u606f\uff1f"
            ),
            n.a.createElement(
              "div",
              null,
              t("max_age", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(
                n.a.createElement(
                  xe.a.Group,
                  null,
                  n.a.createElement(
                    xe.a,
                    { style: na, value: 1 },
                    "No. The above information is sufficient."
                  ),
                  n.a.createElement(
                    xe.a,
                    { style: na, value: 2 },
                    "Yes. The program requires the following additional information:"
                  )
                )
              )
            ),
            n.a.createElement(
              "div",
              { style: { paddingTop: 10 } },
              t("age", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(
                n.a.createElement(
                  De.a.Group,
                  { style: { width: "80%" } },
                  o(oa)
                )
              )
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                "ul",
                { style: { paddingTop: 10, width: 500 } },
                (function() {
                  var e = l("keys"),
                    a = [];
                  return (
                    e &&
                      e.forEach(function(e, r) {
                        a.push(
                          n.a.createElement(
                            "li",
                            { key: r, style: { paddingTop: 10 } },
                            t("moreInfo[".concat(e, "]"), {})(
                              n.a.createElement(G.a, null)
                            )
                          )
                        );
                      }),
                    a
                  );
                })()
              ),
              n.a.createElement(
                "a",
                {
                  onClick: function() {
                    var e = l("keys"),
                      a = e.concat(e.length++);
                    r({ keys: a });
                  }
                },
                "add"
              )
            ),
            n.a.createElement(
              "div",
              { style: { paddingTop: 30 } },
              n.a.createElement(Ae.a, { type: "primary" }, "NEXT STEP")
            )
          );
        },
        ia = je.a.Title,
        sa = je.a.Text,
        ma = [
          {
            label:
              "\u662f\u7684\uff0c\u4f4f\u5bbf\u5305\u542b\u5728\u9879\u76ee\u5957\u9910\u4e2d\u3002",
            value: "1"
          },
          {
            label:
              "\u4e0d\uff0c\u5957\u9910\u4e2d\u4e0d\u63d0\u4f9b\u4f4f\u5bbf\u670d\u52a1\u3002",
            value: "2"
          }
        ],
        ua = [
          { label: "Hotel (5 Star Hotel)", value: "1" },
          { label: "Hotel (4 Star Hotel)", value: "2" },
          { label: "Hotel (4 Star Hotel)", value: "3" },
          { label: "Student Dormitory/Hostel ", value: "4" },
          { label: "Student Dormitory/Hostel ", value: "5" },
          { label: "Serviced Apartment/Condominium", value: "6" }
        ],
        pa = [
          { label: "Yes, Both ways. (Scheduled)", value: "1" },
          { label: "Only for arrival. (Scheduled)", value: "2" },
          { label: "Only for departure. (Scheduled)", value: "3" },
          {
            label:
              "No, airport transfers will not be provided. Participants will have to find their own way to the accommodation.",
            value: "4"
          }
        ],
        da = [
          { label: "Single Room (Not shared)", value: "1" },
          { label: "Double/Twin Rooms", value: "2" },
          { label: "Triple Rooms", value: "3" },
          { label: "Mix of Double/Twin/Triple Rooms", value: "4" },
          { label: "Three or more roommates in one room ", value: "5" }
        ],
        Ea = function(e) {
          var a = e.form,
            t = a.getFieldDecorator,
            l = (a.getFieldsValue, a.setFieldsValue, Object(r.useState)("")),
            o = Object(b.a)(l, 2),
            c = (o[0],
            o[1],
            function(e) {
              var a = [];
              return (
                e.forEach(function(e) {
                  a.push(
                    n.a.createElement(
                      "div",
                      null,
                      n.a.createElement(xe.a, { value: e.value }, e.label)
                    )
                  );
                }),
                a
              );
            });
          return n.a.createElement(
            Ne.a,
            null,
            n.a.createElement(ia, { level: 3 }, "\u4f4f\u5bbf"),
            n.a.createElement(
              sa,
              { type: "secondary" },
              "Participants traveling abroad for overseas program are most concerned about the accommodation arrangements. Do input the information for the length of their stay in the program."
            ),
            n.a.createElement(
              ia,
              { level: 4 },
              "\u4e00 \u60a8\u662f\u5426\u5728\u9879\u76ee\u4e2d\u8ba1\u5212\u63d0\u4f9b\u4f4f\u5bbf?"
            ),
            n.a.createElement(
              sa,
              { type: "secondary" },
              "Select up to 3 most relevant profile that best fits the program. Note that if you select multiple groups, there is a very high likelyhood that these participant from different academic profiles will register and be in the same program."
            ),
            n.a.createElement(
              "div",
              null,
              t("has_live", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(
                n.a.createElement(
                  xe.a.Group,
                  { style: { width: "100% " } },
                  (function(e) {
                    var a = [];
                    return (
                      e.forEach(function(e) {
                        a.push(
                          n.a.createElement(
                            "div",
                            { className: Ie.a.radio },
                            n.a.createElement(
                              xe.a,
                              { value: e.value },
                              e.label
                            ),
                            n.a.createElement(
                              "div",
                              { className: Ie.a.radio_content },
                              e.content
                            )
                          )
                        );
                      }),
                      a
                    );
                  })(ma)
                )
              )
            ),
            n.a.createElement(
              ia,
              { level: 4 },
              "\u4e8c \u4f4f\u5bbf\u8be6\u60c5"
            ),
            n.a.createElement(sa, { type: "secondary" }, "In English language"),
            t("english_language", {
              rules: [{ required: !0, message: "Please input your username!" }]
            })(n.a.createElement(G.a, { style: { marginTop: 10 } })),
            n.a.createElement(
              sa,
              { type: "secondary", style: { marginTop: 10 } },
              "In Local language"
            ),
            t("local_language", {
              rules: [{ required: !0, message: "Please input your username!" }]
            })(n.a.createElement(G.a, { style: { marginTop: 10 } })),
            n.a.createElement(ia, { level: 4 }, "Address of Accommodation"),
            n.a.createElement(sa, { type: "secondary" }, "In English language"),
            n.a.createElement(
              "div",
              { style: { width: 300 } },
              t("eg_line1", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(n.a.createElement(G.a, { style: { marginTop: 10 } })),
              t("eg_line2", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(n.a.createElement(G.a, { style: { marginTop: 10 } })),
              t("eg_place_code", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(n.a.createElement(G.a, { style: { marginTop: 10 } }))
            ),
            n.a.createElement(sa, { type: "secondary" }, "In Local language"),
            n.a.createElement(
              "div",
              { style: { width: 300 } },
              t("local_line1", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(n.a.createElement(G.a, { style: { marginTop: 10 } })),
              t("local_line2", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(n.a.createElement(G.a, { style: { marginTop: 10 } })),
              t("local_place_code", {
                rules: [
                  { required: !0, message: "Please input your username!" }
                ]
              })(n.a.createElement(G.a, { style: { marginTop: 10 } }))
            ),
            n.a.createElement(ia, { level: 4 }, "\u4f4f\u5bbf\u661f\u7ea7"),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                t("star", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(xe.a.Group, null, c(ua)))
              )
            ),
            n.a.createElement(
              ia,
              { level: 4 },
              "\u662f\u5426\u63d0\u4f9b\u673a\u573a\u63a5\u9001\u670d\u52a1\uff1f"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                t("arrive", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(
                  n.a.createElement(
                    De.a.Group,
                    null,
                    (function(e) {
                      var a = [];
                      return (
                        e.forEach(function(e) {
                          a.push(
                            n.a.createElement(
                              "div",
                              { style: { paddingTop: 18 } },
                              n.a.createElement(
                                De.a,
                                { value: e.value },
                                e.label
                              )
                            )
                          );
                        }),
                        a
                      );
                    })(pa)
                  )
                )
              )
            ),
            n.a.createElement(
              ia,
              { level: 4 },
              "\u623f\u578b\u9009\u62e9(\u591a\u9009)"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                t("roomType", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(xe.a.Group, null, c(da)))
              )
            ),
            n.a.createElement(ia, { level: 4 }, "\u4e0a\u4f20\u56fe\u7247"),
            n.a.createElement(
              sa,
              { type: "secondary" },
              "Upload photos of the designated accommodation so as to give participants a better idea of where they will be staying at and what to expect in the accommodation!"
            ),
            n.a.createElement(
              "div",
              { style: { paddingTop: 30 } },
              n.a.createElement(Ae.a, { type: "primary" }, "NEXT STEP")
            )
          );
        },
        va = t(782),
        ha = je.a.Title,
        fa = je.a.Text,
        ga = [
          {
            label:
              "\u662f\u7684\uff0c\u4f4f\u5bbf\u5305\u542b\u5728\u9879\u76ee\u5957\u9910\u4e2d\u3002",
            value: "1"
          },
          {
            label:
              "\u4e0d\uff0c\u5957\u9910\u4e2d\u4e0d\u63d0\u4f9b\u4f4f\u5bbf\u670d\u52a1\u3002",
            value: "2"
          }
        ],
        ya = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "j",
          "k",
          "m",
          "n",
          "p",
          "q",
          "r",
          "s",
          "t"
        ],
        ba = [
          {
            label:
              "\u5168\u989d\u9000\u6b3e\uff0c\u53c2\u52a0\u8005\u627f\u62c5\u624b\u7eed\u8d39",
            value: "1"
          },
          {
            label:
              "\u4e0d\u9000\u6b3e\uff0c\u53c2\u52a0\u8005\u53ef\u8f6c\u8ba9\u53c2\u8d5b\u8d44\u683c\u7ed9\u5176\u4ed6\u4eba",
            value: "2"
          }
        ],
        _a = [
          {
            label:
              "\u5168\u989d\u9000\u6b3e\uff0c\u53c2\u52a0\u8005\u627f\u62c5\u624b\u7eed\u8d39",
            value: "1"
          },
          {
            label:
              "\u9000\u6b3e75%\uff0c\u53c2\u52a0\u8005\u627f\u62c5\u624b\u7eed\u8d39",
            value: "2"
          },
          {
            label:
              "\u9000\u6b3e50%\uff0c\u53c2\u52a0\u8005\u627f\u62c5\u624b\u7eed\u8d39",
            value: "3"
          },
          {
            label:
              "\u4e0d\u9000\u6b3e\uff0c\u53c2\u4e0e\u8005\u53ef\u8f6c\u8ba9\u53c2\u8d5b\u8d44\u683c\u7ed9\u5176\u4ed6\u4eba",
            value: "4"
          }
        ],
        Ta = function(e) {
          var a = e.form,
            t = a.getFieldDecorator,
            r = a.setFieldsValue,
            l = a.getFieldValue;
          t("keys", { initialValue: ["a", "b", "c"] });
          var o = function(e) {
            var a = [];
            return (
              e.forEach(function(e) {
                a.push(
                  n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(xe.a, { value: e.value }, e.label)
                  )
                );
              }),
              a
            );
          };
          return n.a.createElement(
            Ne.a,
            null,
            n.a.createElement(ha, { level: 3 }, "\u8d39\u7528"),
            n.a.createElement(
              fa,
              { type: "secondary" },
              "Participants traveling abroad for overseas program are most concerned about the accommodation arrangements. Do input the information for the length of their stay in the program."
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                { label: "\u8d27\u5e01\u9009\u62e9" },
                t("cost_type", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(Me.a, null))
              )
            ),
            n.a.createElement(ha, { level: 4 }, "\u4e00 \u7533\u8bf7\u8d39"),
            n.a.createElement(
              fa,
              { type: "secondary" },
              "The amount that each participant to pay to secure their spot in the program. This fee is non-refundable and should be calculated in as the processing fee for the participation. In case of a dispute due to miscommunications or an approved exception, our team will be able to facilitate the refund."
            ),
            n.a.createElement(
              ha,
              { level: 4 },
              "\u60a8\u662f\u5426\u9700\u8981\u6536\u53d6\u7533\u8bf7\u8d39\uff1f"
            ),
            n.a.createElement(
              "div",
              null,
              t("apply", { rules: [] })(
                n.a.createElement(
                  xe.a.Group,
                  { style: { width: "100% " } },
                  (function(e) {
                    var a = [];
                    return (
                      e.forEach(function(e) {
                        a.push(
                          n.a.createElement(
                            "div",
                            { className: Ie.a.radio },
                            n.a.createElement(
                              xe.a,
                              { value: e.value },
                              e.label
                            ),
                            n.a.createElement(
                              "div",
                              { className: Ie.a.radio_content },
                              e.content
                            )
                          )
                        );
                      }),
                      a
                    );
                  })(ga)
                )
              )
            ),
            n.a.createElement(
              ha,
              { level: 4 },
              "\u60a8\u8981\u6536\u53d6\u591a\u5c11\u7533\u8bf7\u8d39\u7528(\u6bcf\u4eba)"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                { label: "Additional fee" },
                t("additional_fee", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(G.a, null))
              )
            ),
            n.a.createElement(
              ha,
              { level: 4 },
              "\u4e8c \u5957\u9910\u8d39\u7528"
            ),
            n.a.createElement(
              fa,
              { type: "secondary" },
              "The total program fee to be charged for your program excluding the Application Fee. If your program includes accommodation, this should be inclusive of the accommodation fees. You can choose to collect a partial amount (Deposit Fee) before the final balance amount."
            ),
            n.a.createElement(
              ha,
              { level: 4 },
              "\u65e9\u9e1f\u4f18\u60e0\u5957\u9910(\u53ef\u9009)"
            ),
            n.a.createElement(
              fa,
              { type: "secondary" },
              "\u5728\u6307\u5b9a\u65f6\u95f4\u5185\u62a5\u540d\uff0c\u53ef\u4eab\u53d7\u7684\u4f18\u60e0\u5957\u9910"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                { label: "\u6301\u7eed\u65f6\u95f4" },
                t("start", {})(
                  n.a.createElement(Re.a.RangePicker, { format: "YYYY/MM/DD" })
                )
              ),
              n.a.createElement(
                Ne.a.Item,
                { label: "\u4f18\u60e0\u91d1\u989d" },
                t("end", {})(n.a.createElement(va.a, null))
              )
            ),
            (function() {
              var e = l("keys"),
                a = [];
              return (
                e.forEach(function(e) {
                  a.push(
                    n.a.createElement(
                      "li",
                      { key: e },
                      n.a.createElement(ha, { level: 4 }, "\u5957\u9910", e),
                      n.a.createElement(
                        qe.a,
                        { gutter: [16, 16] },
                        n.a.createElement(
                          Ye.a,
                          { span: 6 },
                          n.a.createElement(
                            Ne.a.Item,
                            { label: "\u53c2\u4e0e\u8005\u7c7b\u578b" },
                            t("add_type", {
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input your username!"
                                }
                              ]
                            })(n.a.createElement(Me.a, null))
                          )
                        ),
                        n.a.createElement(
                          Ye.a,
                          { span: 6 },
                          n.a.createElement(
                            Ne.a.Item,
                            { label: "\u623f\u95f4\u578b\u53f7" },
                            t("add_room_type", {
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input your username!"
                                }
                              ]
                            })(n.a.createElement(Me.a, null))
                          )
                        ),
                        n.a.createElement(
                          Ye.a,
                          { span: 6 },
                          n.a.createElement(
                            Ne.a.Item,
                            { label: "\u5b66\u8d39" },
                            t("add_tuition_fee", {
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input your username!"
                                }
                              ]
                            })(n.a.createElement(G.a, null))
                          )
                        ),
                        n.a.createElement(
                          Ye.a,
                          { span: 6 },
                          n.a.createElement(
                            Ne.a.Item,
                            { label: "\u4f4f\u5bbf\u8d39" },
                            t("hotel_fee", {
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input your username!"
                                }
                              ]
                            })(n.a.createElement(G.a, null))
                          )
                        )
                      )
                    )
                  );
                }),
                n.a.createElement("ul", null, a)
              );
            })(),
            n.a.createElement(
              "a",
              {
                onClick: function(e) {
                  var a = l("keys"),
                    t = a.concat(ya[a.length]);
                  r({ keys: t });
                }
              },
              "\u589e\u52a0\u5957\u9910\u7c7b\u578b"
            ),
            n.a.createElement(
              ha,
              { level: 4 },
              "\u4e09 \u53d6\u6d88\u548c\u9000\u6b3e\u653f\u7b56"
            ),
            n.a.createElement(
              ha,
              { level: 4, style: { fontSize: "18px" } },
              "1 \u4ed8\u5b8c\u8ba2\u91d1\u540e\uff0c\u53c2\u52a0\u8005\u8981\u6c42\u53d6\u6d88\u8ba2\u5355"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                t("cannel", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(xe.a.Group, null, o(ba)))
              )
            ),
            n.a.createElement(
              ha,
              { level: 4, style: { fontSize: "18px" } },
              "2 \u53c2\u4e0e\u8005\u4ed8\u8ba2\u91d1\u4e4b\u540e7\u5929\u5185\u987b\u5c06\u4f59\u989d\u5168\u90e8\u652f\u4ed8\uff0c\u903e\u671f\u89c6\u4e3a\u81ea\u52a8\u653e\u5f03\uff0c\u4e0d\u4f1a\u9000\u8fd8\u8ba2\u91d1"
            ),
            n.a.createElement(
              ha,
              { level: 4, style: { fontSize: "18px" } },
              "3 \u53c2\u4e0e\u8005\u4ed8\u5b8c\u5168\u6b3e\u540e\uff0c\u8981\u6c42\u53d6\u6d88\u8ba2\u5355"
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                Ne.a.Item,
                null,
                t("pay_cannel", {
                  rules: [
                    { required: !0, message: "Please input your username!" }
                  ]
                })(n.a.createElement(xe.a.Group, null, o(_a)))
              )
            )
          );
        },
        Pa = je.a.Title,
        wa = je.a.Text,
        Na = function() {
          return n.a.createElement(
            "div",
            null,
            n.a.createElement(
              Pa,
              { level: 3 },
              "\u9879\u76ee\u65b0\u5efa\u5b8c\u6210!"
            ),
            n.a.createElement(
              wa,
              { type: "secondary" },
              "Choose the program type that best represents the nature of your study program. [Important note] An accurate representation of the program provides tailored areas of input for your content."
            ),
            n.a.createElement(
              "footer",
              { style: { paddingTop: 20 } },
              n.a.createElement(
                Ae.a,
                { type: "primary", style: { marginRight: 20 } },
                "\u63d0\u4ea4\u9879\u76ee"
              ),
              n.a.createElement(Ae.a, null, "\u4ec5\u4fdd\u5b58")
            )
          );
        },
        xa = t(779),
        Aa = t(781),
        ka = Object(xa.a)({
          setProgram: function(e) {
            return e;
          }
        }).setProgram,
        Ia = Object(Aa.a)(
          {
            setProgram: function(e, a) {
              return console.log(a), a.payload;
            }
          },
          {}
        ),
        Oa = t(245),
        Sa = t.n(Oa),
        ja = we.a.Step,
        Ya = [
          { title: "\u9879\u76ee\u7c7b\u578b", content: "First-content" },
          { title: "\u57fa\u672c\u4fe1\u606f", content: "Second-content" },
          { title: "\u9879\u76ee\u8ba1\u5212", content: "Last-content" },
          { title: "\u9879\u76ee\u5c55\u793a", content: "Last-content" },
          { title: "\u8d44\u683c\u8981\u6c42", content: "Last-content" },
          { title: "\u4f4f\u5bbf", content: "Last-content" },
          { title: "\u8d39\u7528", content: "Last-content" },
          { title: "\u63d0\u4ea4", content: "Last-content" }
        ],
        Da = Ne.a.create({
          name: "base",
          onFieldsChange: function(e, a, t) {
            console.log(a);
          }
        })(function(e) {
          var a = e.form,
            t = Object(r.useState)(0),
            l = Object(b.a)(t, 2),
            o = l[0],
            i = l[1],
            s = (Object(c.c)(function(e) {
              return e.program;
            }),
            Object(c.b)());
          Object(r.useEffect)(function() {
            s(
              ka({
                project_type: Ne.a.createFormField({
                  name: "project_type",
                  value: "1"
                })
              })
            );
          }, []);
          return n.a.createElement(
            "div",
            { className: Sa.a.main },
            n.a.createElement(
              "header",
              null,
              n.a.createElement(
                we.a,
                {
                  size: "small",
                  current: o,
                  style: {
                    width: 800,
                    marginLeft: -22,
                    padding: "15px 0 30px 0"
                  },
                  labelPlacement: "vertical",
                  onChange: function(e) {
                    return i(e);
                  }
                },
                Ya.map(function(e, a) {
                  return n.a.createElement(ja, { key: a, title: e.title });
                })
              )
            ),
            n.a.createElement(
              "div",
              { className: Sa.a.content },
              (function() {
                switch (o) {
                  case 0:
                    return n.a.createElement(Se, { form: a });
                  case 1:
                    return n.a.createElement(Ve, { form: a });
                  case 2:
                    return n.a.createElement(Je, { form: a });
                  case 3:
                    return n.a.createElement(aa, { form: a });
                  case 4:
                    return n.a.createElement(ca, { form: a });
                  case 5:
                    return n.a.createElement(Ea, { form: a });
                  case 6:
                    return n.a.createElement(Ta, { form: a });
                  case 7:
                    return n.a.createElement(Na, { form: a });
                  default:
                    return null;
                }
              })()
            )
          );
        }),
        qa = function() {
          return n.a.createElement(
            u.a,
            null,
            n.a.createElement(p.a, { path: "/nb-home/create", component: Da }),
            n.a.createElement(p.a, { path: "/nb-home", component: Pe })
          );
        },
        Ma = t(342),
        Ra = t.n(Ma),
        La = { "/nb-home": "overview", "/nb-home/create": "create-program" },
        Ga = Object(y.a)(function(e) {
          var a = e.location.pathname.split("/").filter(function(e) {
              return e;
            }),
            t = a.map(function(e, t) {
              var r = "/".concat(a.slice(0, t + 1).join("/"));
              return n.a.createElement(
                K.a.Item,
                { key: r },
                n.a.createElement(J.a, { to: r }, La[r])
              );
            });
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              { className: Ra.a.breadcrumb },
              n.a.createElement(K.a, null, t)
            ),
            n.a.createElement(qa, null)
          );
        }),
        Ca = function() {
          return n.a.createElement(
            u.a,
            null,
            n.a.createElement(p.a, { path: "/nb-program", component: U }),
            n.a.createElement(p.a, { path: "/nb-home", component: Ga })
          );
        },
        Fa = t(80),
        Ha = t.n(Fa),
        Va = Object(y.a)(function(e) {
          var a = e.history;
          return n.a.createElement(
            "div",
            { className: Ha.a.root },
            n.a.createElement(
              "aside",
              { className: Ha.a.aside },
              n.a.createElement(D, {
                onChange: function(e) {
                  a.push(e.path);
                }
              })
            ),
            n.a.createElement(
              "section",
              { className: Ha.a.content },
              n.a.createElement(
                "header",
                { className: Ha.a.header },
                n.a.createElement(
                  E.a,
                  { badgeContent: 12, color: "primary" },
                  n.a.createElement(h.a, { style: { fontSize: 28 } })
                ),
                n.a.createElement(f.a, { className: Ha.a.avatar }),
                n.a.createElement(
                  "div",
                  { className: Ha.a.name },
                  n.a.createElement(
                    g.a,
                    { variant: "subtitle1", display: "block" },
                    "overline text"
                  ),
                  n.a.createElement(
                    g.a,
                    { variant: "caption", display: "block" },
                    "caption text"
                  )
                )
              ),
              n.a.createElement(
                "div",
                { className: Ha.a.main },
                n.a.createElement(Ca, null)
              )
            )
          );
        }),
        Wa = function() {
          return n.a.createElement(
            m.a,
            null,
            n.a.createElement(
              u.a,
              null,
              n.a.createElement(p.a, { path: "/", component: Va })
            )
          );
        },
        za = t(88),
        Ba = t(345),
        Ua = t.n(Ba),
        Ja = (Object(xa.a)({
          SET_SELECT: function(e) {
            return e;
          }
        }).setSelect,
        Object(Aa.a)(
          {
            SET_SELECT: function(e, a) {
              return e;
            }
          },
          {}
        )),
        Ka = Object(za.c)({ accounts: Ja, program: Ia }),
        Xa = [Ua.a],
        Qa = Object(za.d)(Ka, za.a.apply(void 0, Xa)),
        Za = t(352),
        $a = t(353),
        et = { en: { translation: t(349) }, zh: { translation: t(350) } };
      Za.a
        .use($a.a)
        .init({
          resources: et,
          fallbackLng: "en",
          debug: !1,
          interpolation: { escapeValue: !1 },
          react: { wait: !0 }
        });
      t(742);
      var at = Object(i.a)({
          palette: { primary: { main: "#266BF0" } },
          overrides: {
            MuiStepConnector: { lineVertical: { "min-height": "70px" } },
            MuiStepper: { root: { background: "none" } },
            MuiStepLabel: { root: { cursor: "pointer !important" } },
            MuiPaper: { rounded: { "border-radius": "6px" } },
            MuiFormControlLabel: {
              root: { "margin-left": 0, "margin-right": 0 }
            }
          }
        }),
        tt = function() {
          return n.a.createElement(
            s.a,
            { theme: at },
            n.a.createElement(c.a, { store: Qa }, n.a.createElement(Wa, null))
          );
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(n.a.createElement(tt, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    80: function(e, a, t) {
      e.exports = {
        root: "home_root__3guGa",
        aside: "home_aside__3nrI1",
        content: "home_content__2JGA7",
        header: "home_header__2G6qZ",
        main: "home_main__2g4-w",
        notifi: "home_notifi__1tcSo",
        avatar: "home_avatar__1oU9j",
        name: "home_name__3TF9Z"
      };
    },
    93: function(e, a, t) {
      e.exports = {
        list: "finance_list__9DVNm",
        line: "finance_line__Yn6sM",
        text: "finance_text__3NykG",
        chart: "finance_chart__b3I4E"
      };
    },
    96: function(e, a, t) {
      e.exports = {
        main: "nb-program_main__YV6tt",
        table: "nb-program_table__3SHSs",
        header: "nb-program_header__1gNdV",
        tabs: "nb-program_tabs__3RoXj",
        bar: "nb-program_bar__1wcht",
        search: "nb-program_search__Q3i7H",
        event: "nb-program_event__2pRSZ"
      };
    }
  },
  [[362, 1, 2]]
]);
//# sourceMappingURL=main.3f83f9a9.chunk.js.map
