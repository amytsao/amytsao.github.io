(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    193: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(206);
      t.default = function() {
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement("h1", null, "NOT FOUND"),
          r.a.createElement(
            "p",
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
        );
      };
    },
    198: function(e, t, a) {
      e.exports = a.p + "static/avatar-610f877ba29987f58f32b4c0de0142a7.jpg";
    },
    206: function(e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        o = (a(207), a(221));
      var l = (function(e) {
          var t, a;
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            (a = e),
            ((t = n).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a),
            (n.prototype.render = function() {
              return r.a.createElement(
                "div",
                { id: "footer" },
                r.a.createElement(
                  "div",
                  { className: "inner" },
                  r.a.createElement(
                    "ul",
                    { className: "social-icons" },
                    r.a.createElement(
                      "a",
                      {
                        href: "https://www.linkedin.com/in/amy-tsao-aaab51a8/",
                        alt: "github"
                      },
                      r.a.createElement(o.d, null)
                    ),
                    r.a.createElement(
                      "a",
                      { href: "https://github.com/amytsao", alt: "github" },
                      r.a.createElement(o.c, null)
                    ),
                    r.a.createElement(
                      "a",
                      {
                        href: "https://www.facebook.com/amy.tsao.9",
                        alt: "facebook"
                      },
                      r.a.createElement(o.b, null)
                    ),
                    r.a.createElement(
                      "a",
                      { href: "mailto:amy.tsao227@gmail.com", alt: "email" },
                      r.a.createElement(o.a, null)
                    )
                  )
                )
              );
            }),
            n
          );
        })(r.a.Component),
        c = a(198),
        s = a.n(c);
      var i = (function(e) {
        var t, a;
        function n() {
          return e.apply(this, arguments) || this;
        }
        return (
          (a = e),
          ((t = n).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a),
          (n.prototype.render = function() {
            return r.a.createElement(
              "header",
              { className: "navbar", id: "sideNav" },
              r.a.createElement(
                "div",
                { className: "navbar-brand" },
                r.a.createElement("h2", null, "Amy Tsao"),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement("img", {
                    className: "img-profile",
                    src: s.a,
                    alt: ""
                  })
                )
              ),
              r.a.createElement(
                "ul",
                { className: "navbar-nav" },
                r.a.createElement(
                  "li",
                  { className: "nav-item" },
                  r.a.createElement(
                    "a",
                    { className: "nav-link", href: "#" },
                    "About"
                  )
                ),
                r.a.createElement(
                  "li",
                  { className: "nav-item" },
                  r.a.createElement(
                    "a",
                    { className: "nav-link", href: "#projects" },
                    "Projects"
                  )
                )
              ),
              r.a.createElement(l, null)
            );
          }),
          n
        );
      })(r.a.Component);
      var m = (function(e) {
        var t, a;
        function n() {
          return e.apply(this, arguments) || this;
        }
        return (
          (a = e),
          ((t = n).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a),
          (n.prototype.render = function() {
            var e = this.props.children;
            return r.a.createElement(
              "div",
              null,
              r.a.createElement(i, null),
              e
            );
          }),
          n
        );
      })(r.a.Component);
      t.a = m;
    }
  }
]);
//# sourceMappingURL=component---src-pages-404-js-130764d090e4c9f73a38.js.map
