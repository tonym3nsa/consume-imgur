(this.webpackJsonpeurowings = this.webpackJsonpeurowings || []).push([
  [0],
  {
    25: function (e, t, a) {
      e.exports = a(46);
    },
    31: function (e, t, a) {},
    32: function (e, t, a) {},
    37: function (e, t, a) {},
    38: function (e, t, a) {},
    40: function (e, t, a) {},
    41: function (e, t, a) {},
    42: function (e, t, a) {},
    43: function (e, t, a) {},
    44: function (e, t, a) {},
    45: function (e, t, a) {},
    46: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        c = a(14),
        r = a.n(c),
        o = (a(30), a(31), a(32), a(11)),
        i = a(2),
        u = a(16),
        m = a(6),
        s = a(10),
        d = "top",
        E = function (e) {
          var t = new Headers();
          t.append("Authorization", "Client-ID 9bb9c2ffa02c9bb");
          var a = e && e.section ? e.section : "hot",
            n = e && e.sort ? e.sort : d,
            l = e && e.window ? e.window : "day",
            c = { method: "GET", headers: t, redirect: "follow" };
          return function (e) {
            return (
              e({ type: "GETTING_GALLERY", status: !0 }),
              fetch(
                ""
                  .concat("https://api.imgur.com/3/", "gallery/")
                  .concat(a, "/")
                  .concat(n, "/")
                  .concat(l),
                c
              )
                .then(function (e) {
                  return e.text();
                })
                .then(function (t) {
                  var a = JSON.parse(t);
                  e({ type: "GET_GALLERY", payload: a.data }),
                    e({ type: "GETTING_GALLERY", status: !1 });
                })
                .catch(function (e) {
                  alert("There was an error: ".concat(e));
                })
            );
          };
        },
        v = a(8),
        f = a.n(v);
      a(37);
      function g(e) {
        return l.a.createElement(
          "select",
          {
            onChange: function (t) {
              var a = t.target.value;
              e.handleChange(a);
            },
          },
          e.options.map(function (e, t) {
            return l.a.createElement(
              "option",
              { key: t, value: e.value },
              e.name
            );
          })
        );
      }
      g.prototypes = {
        handleChange: f.a.func.isRequired,
        options: f.a.array.isRequired,
      };
      var p = g;
      a(38);
      var h = function () {
          var e = Object(s.b)(),
            t = Object(n.useState)("hot"),
            a = Object(m.a)(t, 2),
            c = a[0],
            r = a[1],
            o = Object(n.useState)(d),
            i = Object(m.a)(o, 2),
            u = i[0],
            v = i[1],
            f = Object(n.useState)("day"),
            g = Object(m.a)(f, 2),
            h = g[0],
            b = g[1];
          Object(n.useEffect)(function () {
            e(E());
          }, []);
          var y = [
              { value: "hot", name: "hot" },
              { value: d, name: d },
              { value: "user", name: "user" },
            ],
            O = [
              { value: d, name: d },
              { value: "time", name: "time" },
              { value: "viral", name: "viral" },
            ],
            j = [
              { value: "day", name: "day" },
              { value: "week", name: "week" },
              { value: "month", name: "month" },
              { value: "year", name: "year" },
              { value: "all", name: "all" },
            ];
          function N(t, a, n) {
            e(E({ section: t, sort: a, window: n }));
          }
          return l.a.createElement(
            "div",
            { className: "filters" },
            l.a.createElement(
              "div",
              { className: "row" },
              l.a.createElement(
                "div",
                { className: "col-md-2" },
                l.a.createElement("label", null, "Section"),
                l.a.createElement(p, {
                  options: y,
                  handleChange: function (e) {
                    r(e), N(e, u, h);
                  },
                })
              ),
              l.a.createElement(
                "div",
                { className: "col-md-2" },
                l.a.createElement("label", null, "Sort"),
                l.a.createElement(p, {
                  options: O,
                  handleChange: function (e) {
                    v(e), N(c, e, h);
                  },
                })
              ),
              l.a.createElement(
                "div",
                { className: "col-md-2" },
                l.a.createElement("label", null, "Window"),
                l.a.createElement(p, {
                  options: j,
                  handleChange: function (e) {
                    b(e), N(c, u, e);
                  },
                })
              )
            )
          );
        },
        b = function (e) {
          var t = e.children;
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(h, null),
            l.a.createElement("div", { className: "main" }, t)
          );
        },
        y = function (e) {
          var t = e.component,
            a = Object(u.a)(e, ["component"]);
          return (
            Object(n.useEffect)(function () {
              document.title = "Lazy loaded fancy thumbnails";
            }, []),
            l.a.createElement(
              i.a,
              Object.assign({}, a, {
                render: function (e) {
                  return l.a.createElement(b, null, l.a.createElement(t, e));
                },
              })
            )
          );
        },
        O = function (e) {
          var t = e.children;
          return l.a.createElement(
            "div",
            null,
            l.a.createElement("div", { className: "main" }, t)
          );
        },
        j = function (e) {
          var t = e.component,
            a = Object(u.a)(e, ["component"]);
          return (
            Object(n.useEffect)(function () {
              document.title = "Error!!!";
            }, []),
            l.a.createElement(
              i.a,
              Object.assign({}, a, {
                render: function (e) {
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(O, null, l.a.createElement(t, e))
                  );
                },
              })
            )
          );
        };
      a(40);
      function N(e) {
        var t = e.image;
        if (t && t.length > 0)
          for (var a = 0; a < 1; a++)
            switch (t[a].type) {
              case "image/png":
              case "image/jpeg":
              case "image/gif":
                return l.a.createElement(w, { id: t[a].id, url: t[a].link });
              case "video/mp4":
                return l.a.createElement(k, {
                  url: t[a].link,
                  type: t[a].type,
                });
              default:
                return l.a.createElement(
                  "span",
                  null,
                  "Nothing to display amigo :("
                );
            }
        return null;
      }
      function w(e) {
        var t = e.url,
          a = e.id;
        return l.a.createElement(
          "span",
          { "data-testid": "imageCard" },
          l.a.createElement("img", { src: t, alt: "photo_".concat(a) })
        );
      }
      function k(e) {
        var t = e.url,
          a = e.type;
        return l.a.createElement(
          "span",
          { "data-testid": "videoCard" },
          l.a.createElement(
            "video",
            { controls: !0 },
            l.a.createElement("source", { src: t, type: a })
          )
        );
      }
      var S = function (e) {
        return l.a.createElement(
          "div",
          { className: "thumbnail" },
          l.a.createElement(
            "div",
            null,
            l.a.createElement(N, { image: e.image })
          ),
          l.a.createElement("h3", null, e.title)
        );
      };
      var C = function (e) {
        return l.a.createElement(
          "div",
          { className: "preview-section" },
          l.a.createElement(
            "div",
            { className: "row" },
            l.a.createElement(
              "div",
              { className: "col-md-12" },
              l.a.createElement(
                "ul",
                { className: "preview" },
                e.images && e.images.length > 1
                  ? e.images.map(function (t, a) {
                      return l.a.createElement(
                        "li",
                        {
                          className: e.isActive === a ? "active" : "",
                          onClick: function () {
                            return (function (t) {
                              e.handleIsActive(t);
                            })(a);
                          },
                          key: a,
                        },
                        l.a.createElement("span", {
                          style: { background: "url(".concat(t.link, ")") },
                        })
                      );
                    })
                  : null
              )
            )
          )
        );
      };
      a(41);
      function G(e) {
        var t = e.type,
          a = e.url,
          n = e.id;
        switch (t) {
          case "image/png":
          case "image/jpeg":
          case "image/gif":
            return l.a.createElement(L, { id: n, url: a });
          case "video/mp4":
            return l.a.createElement(T, { type: t, url: a });
          default:
            return l.a.createElement(
              "span",
              null,
              "Nothing to display amigo :("
            );
        }
      }
      function L(e) {
        var t = e.url,
          a = e.id;
        return l.a.createElement(
          "span",
          { "data-testid": "imageCardCarousel" },
          l.a.createElement("img", { src: t, style: { width: "100%" }, alt: a })
        );
      }
      function T(e) {
        var t = e.url,
          a = e.type;
        return l.a.createElement(
          "span",
          { "data-testid": "videoCardCarousel" },
          l.a.createElement(
            "video",
            { controls: !0, width: "100%" },
            l.a.createElement("source", { src: t, type: a })
          )
        );
      }
      var _ = function (e) {
        Object(n.useEffect)(function () {}, []);
        var t = Object(n.useState)(0),
          a = Object(m.a)(t, 2),
          c = a[0],
          r = a[1];
        return (
          Object(n.useEffect)(function () {}, [c]),
          l.a.createElement(
            "div",
            null,
            e.images
              ? e.images.map(function (t, a) {
                  return l.a.createElement(
                    "div",
                    { key: a },
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "div",
                        { className: "col-md-8" },
                        l.a.createElement(
                          "div",
                          { className: c === a ? "" : "hidden" },
                          l.a.createElement(G, {
                            url: t.link,
                            type: t.type,
                            id: t.id,
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "col-md-4" },
                        l.a.createElement(
                          "div",
                          {
                            className: c === a ? "" : "hidden",
                            style: { margin: "0 auto" },
                          },
                          t.description
                            ? l.a.createElement(
                                "div",
                                null,
                                l.a.createElement("p", null, t.description)
                              )
                            : null,
                          l.a.createElement(
                            "ul",
                            { className: "stats" },
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "h4",
                                null,
                                "Upvote: ",
                                e.ups ? "".concat(e.ups) : "0"
                              )
                            ),
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "h4",
                                null,
                                "Downvote: ",
                                e.downs ? "".concat(e.downs) : "0"
                              )
                            ),
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "h4",
                                null,
                                "Scores: ",
                                e.score ? "".concat(e.score) : "0"
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                })
              : l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement("h1", null, "Nothing to display")
                ),
            e.images && e.images.length > 1
              ? l.a.createElement(C, {
                  handleIsActive: function (e) {
                    r(e);
                  },
                  images: e.images,
                  isActive: c,
                })
              : null
          )
        );
      };
      a(42);
      var I = function (e) {
        var t = e.handleClick,
          a = e.text;
        return l.a.createElement(
          "button",
          { "data-testid": "buttonId", onClick: t },
          a
        );
      };
      a(43);
      var R = function (e) {
        return l.a.createElement(
          "div",
          null,
          !0 === e.display
            ? l.a.createElement(
                "span",
                null,
                l.a.createElement(
                  "div",
                  {
                    className: "modal fade show block",
                    tabIndex: "-1",
                    role: "dialog",
                  },
                  l.a.createElement(
                    "div",
                    {
                      className:
                        "modal-dialog modal-dialog-scrollable modal-xl",
                      role: "document",
                    },
                    l.a.createElement(
                      "div",
                      { className: "modal-content" },
                      l.a.createElement(
                        "div",
                        { className: "modal-header" },
                        l.a.createElement(
                          "h5",
                          { className: "modal-title" },
                          e.title
                        ),
                        l.a.createElement(I, {
                          text: "\xd7",
                          handleClick: function () {
                            e.close();
                          },
                        })
                      ),
                      l.a.createElement(
                        "div",
                        { className: "modal-body" },
                        l.a.createElement(
                          "div",
                          { className: "row" },
                          l.a.createElement(
                            "div",
                            { className: "col-md-12" },
                            e.content
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "modal-footer" },
                        e.footer
                      )
                    )
                  )
                ),
                l.a.createElement("div", {
                  className: "modal-backdrop fade show block",
                  id: "backdrop",
                  style: { display: "block" },
                })
              )
            : null
        );
      };
      a(44);
      var A = function () {
        var e = Object(s.c)(function (e) {
            return e.galleryReducer;
          }).galleryItems,
          t = Object(s.c)(function (e) {
            return e.galleryReducer;
          }).galleryStatus,
          a = Object(n.useState)(!1),
          c = Object(m.a)(a, 2),
          r = c[0],
          o = c[1],
          i = Object(n.useState)(""),
          u = Object(m.a)(i, 2),
          d = u[0],
          E = u[1],
          v = Object(n.useState)(1),
          f = Object(m.a)(v, 2),
          g = f[0],
          p = f[1],
          h = Object(n.useState)(null),
          b = Object(m.a)(h, 2),
          y = b[0],
          O = b[1],
          j = Object(n.useState)([]),
          N = Object(m.a)(j, 2),
          w = N[0],
          k = N[1],
          C = Object(n.useState)(null),
          G = Object(m.a)(C, 2),
          L = G[0],
          T = G[1];
        function I(e, t) {
          return e.slice((g - 1) * t, g * t);
        }
        Object(n.useEffect)(
          function () {
            e &&
              (function () {
                var t = e.length / 10;
                t % 2 > 0 && (t += 1);
                T(t),
                  (function () {
                    var t = I(e, 10);
                    k(t);
                  })();
              })();
          },
          [e]
        ),
          Object(n.useEffect)(
            function () {
              e &&
                (function () {
                  var t = I(e, 10),
                    a = w.concat(t);
                  k(a);
                })();
            },
            [g]
          );
        var A = l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement("h1", { style: { color: "#ffffff" } }, "Loading...")
        );
        return l.a.createElement(
          "div",
          {
            onScroll:
              g <= L
                ? function (e) {
                    e.target.scrollHeight - e.target.scrollTop ===
                      e.target.clientHeight && p(g + 1);
                  }
                : null,
            className: "gallery",
            style: { overflowY: "scroll", height: "100vh" },
          },
          l.a.createElement(R, {
            display: r,
            close: function () {
              return o(!1);
            },
            content: l.a.createElement(_, { images: y ? y.images : null }),
            title: d,
          }),
          l.a.createElement(
            "div",
            { className: "container-fluid" },
            !0 === t
              ? A
              : l.a.createElement(
                  "div",
                  { className: "card-columns" },
                  w && w.length > 0
                    ? w.map(function (e, t) {
                        return l.a.createElement(
                          "div",
                          { key: t },
                          l.a.createElement(
                            "div",
                            {
                              className: "card",
                              key: t,
                              onClick: function () {
                                return O((t = e)), E(t.title), void o(!0);
                                var t;
                              },
                            },
                            l.a.createElement(S, {
                              title: e.title,
                              type: e.type,
                              animated: e.animated,
                              image: e.images,
                              link: e.link,
                            })
                          )
                        );
                      })
                    : null
                )
          )
        );
      };
      a(45);
      var x = function () {
        return l.a.createElement(
          "div",
          { className: "not-found" },
          l.a.createElement("h1", null, "404: Page not found"),
          l.a.createElement(o.b, { to: "/" }, "Go home")
        );
      };
      var Y = function () {
          return l.a.createElement(
            o.a,
            null,
            l.a.createElement(
              i.c,
              null,
              l.a.createElement(y, { path: "/", exact: !0, component: A }),
              l.a.createElement(j, { component: x })
            )
          );
        },
        D = a(9),
        H = a(24),
        J = a(13),
        W = { gallery: [] };
      var q = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : W,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "GET_GALLERY":
              return Object(J.a)(
                Object(J.a)({}, e),
                {},
                { galleryItems: t.payload }
              );
            case "GETTING_GALLERY":
              return Object(J.a)(
                Object(J.a)({}, e),
                {},
                { galleryStatus: t.status }
              );
            default:
              return e;
          }
        },
        z = Object(D.c)({ galleryReducer: q }),
        B = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || D.d,
        F = Object(D.e)(z, B(Object(D.a)(H.a)));
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      console.log("the store", F.getState().galleryReducer),
        r.a.render(
          l.a.createElement(
            s.a,
            { store: F },
            l.a.createElement(l.a.StrictMode, null, l.a.createElement(Y, null))
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.5d74ea52.chunk.js.map
