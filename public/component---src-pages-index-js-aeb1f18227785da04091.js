(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    194: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(222),
        o = a.n(c),
        i = a(206);
      a(307);
      var l = (function(e) {
        var t, a;
        function n() {
          return e.apply(this, arguments) || this;
        }
        (a = e),
          ((t = n).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a);
        var c = n.prototype;
        return (
          (c.renderGallery = function(e) {
            if (e) {
              var t = e.map(function(e, t) {
                return r.a.createElement(
                  "article",
                  { className: "6u 12u$(xsmall) work-item", key: t },
                  r.a.createElement(
                    "a",
                    { className: "image fit thumb", href: e.source },
                    r.a.createElement("img", { src: e.thumbnail })
                  ),
                  r.a.createElement("h3", null, e.caption),
                  r.a.createElement("p", null, e.description)
                );
              });
              return r.a.createElement("div", { className: "row" }, t);
            }
          }),
          (c.render = function() {
            var e = this.props.images;
            return r.a.createElement("div", null, this.renderGallery(e));
          }),
          n
        );
      })(n.Component);
      l.displayName = "Gallery";
      var s = l;
      var p = (function(e) {
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
                { className: "container" },
                r.a.createElement(
                  "svg",
                  {
                    className: "ghost",
                    version: "1.1",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "127.433px",
                    height: "132.743px",
                    viewBox: "0 0 127.433 132.743",
                    "enable-background": "new 0 0 127.433 132.743",
                    xmlSpace: "preserve"
                  },
                  r.a.createElement("path", {
                    fill: "#f4f6f6",
                    d:
                      "M116.223,125.064c1.032-1.183,1.323-2.73,1.391-3.747V54.76c0,0-4.625-34.875-36.125-44.375 s-66,6.625-72.125,44l-0.781,63.219c0.062,4.197,1.105,6.177,1.808,7.006c1.94,1.811,5.408,3.465,10.099-0.6 c7.5-6.5,8.375-10,12.75-6.875s5.875,9.75,13.625,9.25s12.75-9,13.75-9.625s4.375-1.875,7,1.25s5.375,8.25,12.875,7.875 s12.625-8.375,12.625-8.375s2.25-3.875,7.25,0.375s7.625,9.75,14.375,8.125C114.739,126.01,115.412,125.902,116.223,125.064z"
                  }),
                  r.a.createElement("circle", {
                    fill: "#013E51",
                    cx: "86.238",
                    cy: "57.885",
                    r: "6.667"
                  }),
                  r.a.createElement("circle", {
                    fill: "#013E51",
                    cx: "40.072",
                    cy: "57.885",
                    r: "6.667"
                  }),
                  r.a.createElement("path", {
                    fill: "#013E51",
                    d:
                      "M71.916,62.782c0.05-1.108-0.809-2.046-1.917-2.095c-0.673-0.03-1.28,0.279-1.667,0.771 c-0.758,0.766-2.483,2.235-4.696,2.358c-1.696,0.094-3.438-0.625-5.191-2.137c-0.003-0.003-0.007-0.006-0.011-0.009l0.002,0.005 c-0.332-0.294-0.757-0.488-1.235-0.509c-1.108-0.049-2.046,0.809-2.095,1.917c-0.032,0.724,0.327,1.37,0.887,1.749 c-0.001,0-0.002-0.001-0.003-0.001c2.221,1.871,4.536,2.88,6.912,2.986c0.333,0.014,0.67,0.012,1.007-0.01 c3.163-0.191,5.572-1.942,6.888-3.166l0.452-0.453c0.021-0.019,0.04-0.041,0.06-0.061l0.034-0.034 c-0.007,0.007-0.015,0.014-0.021,0.02C71.666,63.771,71.892,63.307,71.916,62.782z"
                  })
                ),
                r.a.createElement(
                  "p",
                  { className: "shadowFrame" },
                  r.a.createElement(
                    "svg",
                    {
                      version: "1.1",
                      className: "shadow",
                      id: "Layer_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      xmlnsXlink: "http://www.w3.org/1999/xlink",
                      x: "61px",
                      y: "20px",
                      width: "122.436px",
                      height: "39.744px",
                      viewBox: "0 0 122.436 39.744",
                      "enable-background": "new 0 0 122.436 39.744",
                      xmlSpace: "preserve"
                    },
                    r.a.createElement("ellipse", {
                      fill: "#b689b0",
                      cx: "61.128",
                      cy: "19.872",
                      rx: "49.25",
                      ry: "8.916"
                    })
                  )
                )
              );
            }),
            n
          );
        })(r.a.Component),
        m = a(301),
        u = a.n(m),
        d = a(302),
        h = a.n(d),
        f = a(303),
        b = a.n(f),
        y = a(304),
        E = a.n(y),
        w = a(305),
        v = a.n(w),
        g = a(306),
        x = a.n(g);
      var _ = [
          {
            id: "1",
            source: "https://csod.com",
            thumbnail: u.a,
            caption: "Cornerstone Ondemand",
            description:
              "Rebuilt site with team with new technologies such as React, Gatsby, Netlify, and Sanity."
          },
          {
            id: "2",
            source: "https://www.documentary.org/",
            thumbnail: h.a,
            caption: "IDA Documentary",
            description:
              "Wrote custom scripts to help with ease of access of site as well as theming"
          },
          {
            id: "3",
            source: "https://www.fordtheatres.org/",
            thumbnail: b.a,
            caption: "Ford Theatres",
            description: "Setup and front page theming"
          },
          {
            id: "4",
            source: "https://healthy.ucla.edu/",
            thumbnail: E.a,
            caption: "Healthy Campus Initiative - UCLA",
            description:
              "Designed and created the site using Wordpress and custom PHP."
          },
          {
            id: "5",
            source: "https://www.fastaff.com/",
            thumbnail: v.a,
            caption: "Fastaff",
            description:
              "Created custom module to integrate their site with Peoplesoft, made improvements to their job searching filters as well as css modifications to the site."
          },
          {
            id: "5",
            source: "http://phoenixmed.arizona.edu/",
            thumbnail: x.a,
            caption: "University of Arizona",
            description:
              "Configured site, assisted with theming, and created custom views for the School of Medicine (Phoenix) site"
          }
        ],
        N = (function(e) {
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
                i.a,
                null,
                r.a.createElement(
                  o.a,
                  null,
                  r.a.createElement("title", null, "Amy Tsao"),
                  r.a.createElement("meta", {
                    name: "description",
                    content: "Web Developer"
                  })
                ),
                r.a.createElement(
                  "div",
                  { id: "main" },
                  r.a.createElement(
                    "section",
                    { id: "one" },
                    r.a.createElement(
                      "h2",
                      null,
                      "About Amy",
                      r.a.createElement("br", null)
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      "Web developer, mobile game addict, aspiring pun master.",
                      r.a.createElement("br", null),
                      "Here to pet all the dogs."
                    ),
                    r.a.createElement(p, null)
                  ),
                  r.a.createElement(
                    "section",
                    { id: "two" },
                    r.a.createElement(
                      "a",
                      { name: "projects" },
                      r.a.createElement("h2", null, "Recent Projects")
                    ),
                    r.a.createElement(s, {
                      images: _.map(function(e) {
                        e.id;
                        return {
                          source: e.source,
                          thumbnail: e.thumbnail,
                          caption: e.caption,
                          description: e.description
                        };
                      })
                    })
                  )
                )
              );
            }),
            n
          );
        })(r.a.Component);
      t.default = N;
    },
    198: function(e, t, a) {
      e.exports = a.p + "static/avatar-610f877ba29987f58f32b4c0de0142a7.jpg";
    },
    206: function(e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        c = (a(207), a(221));
      var o = (function(e) {
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
                      r.a.createElement(c.d, null)
                    ),
                    r.a.createElement(
                      "a",
                      { href: "https://github.com/amytsao", alt: "github" },
                      r.a.createElement(c.c, null)
                    ),
                    r.a.createElement(
                      "a",
                      {
                        href: "https://www.facebook.com/amy.tsao.9",
                        alt: "facebook"
                      },
                      r.a.createElement(c.b, null)
                    ),
                    r.a.createElement(
                      "a",
                      { href: "mailto:amy.tsao227@gmail.com", alt: "email" },
                      r.a.createElement(c.a, null)
                    )
                  )
                )
              );
            }),
            n
          );
        })(r.a.Component),
        i = a(198),
        l = a.n(i);
      var s = (function(e) {
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
                    src: l.a,
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
              r.a.createElement(o, null)
            );
          }),
          n
        );
      })(r.a.Component);
      var p = (function(e) {
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
              r.a.createElement(s, null),
              e
            );
          }),
          n
        );
      })(r.a.Component);
      t.a = p;
    },
    301: function(e, t, a) {
      e.exports =
        a.p + "static/cornerstone-780bb43190e9075dba6ce70aa0f4f058.png";
    },
    302: function(e, t, a) {
      e.exports = a.p + "static/ida-950d4deb733a89b93cf0c5bd4f8379f3.png";
    },
    303: function(e, t, a) {
      e.exports = a.p + "static/ford-6d5417c29d17923cad03d8230cc0ecd0.jpg";
    },
    304: function(e, t, a) {
      e.exports = a.p + "static/hci-cbf65f4dbdce8af8e426cb98fb814cd7.jpeg";
    },
    305: function(e, t, a) {
      e.exports = a.p + "static/fastaff-c7c0b3be7d81d80f076f5f647cda601d.jpeg";
    },
    306: function(e, t, a) {
      e.exports = a.p + "static/ua-b4e5a7734e8671037022fa883b77f864.jpeg";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-aeb1f18227785da04091.js.map
