import { defineComponent as z, createElementBlock as s, openBlock as t, createElementVNode as r, toDisplayString as D, ref as v, onMounted as F, watch as I, createCommentVNode as f, createBlock as b, Fragment as C, renderList as $, Teleport as O, createVNode as w, Transition as V, withCtx as B, normalizeClass as p } from "vue";
const R = { class: "demo-card__header" }, S = { class: "font-weight-black title" }, T = { class: "color-green" }, x = /* @__PURE__ */ z({
  __name: "DemoCard",
  props: {
    title: {},
    description: {},
    value: {}
  },
  setup(c) {
    return (e, a) => (t(), s("div", {
      class: "demo-card bg-color-blue rounded-sm",
      onClick: a[0] || (a[0] = (d) => e.$emit("start", e.value))
    }, [
      r("div", R, [
        r("h3", S, D(e.title), 1),
        r("p", T, D(e.description), 1)
      ])
    ]));
  }
}), M = (c, e) => {
  const a = c.__vccOpts || c;
  for (const [d, u] of e)
    a[d] = u;
  return a;
}, L = /* @__PURE__ */ M(x, [["__scopeId", "data-v-e4ce7728"]]), U = { class: "main p-xl bg-color-primary" }, j = {
  key: 0,
  class: "card-grid"
}, q = {
  key: 0,
  class: "dialog-backdrop"
}, A = ["src"], G = { class: "gallery" }, H = ["onClick"], J = ["src", "alt"], K = /* @__PURE__ */ z({
  __name: "DemoView",
  props: {
    initialDemo: {},
    fullscreen: { type: Boolean },
    demos: {}
  },
  setup(c) {
    const e = c, a = v(!1);
    F(() => a.value = !0);
    const d = !1, u = v(!1), n = v(null), i = v(!1), N = v(null), g = (o) => {
      h(o) && (u.value = !0, i.value = d);
    };
    function h(o) {
      var m;
      const _ = (m = e == null ? void 0 : e.demos) == null ? void 0 : m.find((l) => l.slug === o);
      return _ ? (n.value = _.url, i.value = d, !0) : !1;
    }
    const E = () => {
      u.value = !1, n.value = null, i.value = !1;
    };
    return I(
      () => e.initialDemo,
      (o) => o && g(o),
      {
        immediate: !0
      }
    ), (o, _) => {
      var m;
      return t(), s("div", U, [
        (m = o.demos) != null && m.length ? (t(), s("div", j, [
          (t(!0), s(C, null, $(o.demos, ({ title: l, description: k, slug: y }) => (t(), b(L, {
            title: l.en,
            key: y,
            description: k.en,
            value: y,
            onStart: g
          }, null, 8, ["title", "description", "value"]))), 128))
        ])) : f("", !0),
        a.value ? (t(), b(O, {
          key: 1,
          to: "body"
        }, [
          w(V, { name: "dialog" }, {
            default: B(() => [
              u.value ? (t(), s("div", q, [
                (t(), s("button", {
                  key: 0,
                  class: "close-button",
                  onClick: E
                }, "✕")),
                r("div", {
                  class: p(["dialog", { "is-maximized": i.value }]),
                  ref_key: "dialogRef",
                  ref: N
                }, [
                  r("div", {
                    class: p(["iframe-container", { "rounded-sm": !i.value }])
                  }, [
                    w(V, {
                      name: "slide",
                      mode: "out-in"
                    }, {
                      default: B(() => [
                        n.value ? (t(), s("iframe", {
                          key: n.value,
                          src: n.value,
                          class: p(["demo-iframe", {
                            "demo-iframe-active": n.value,
                            "rounded-sm": !i.value
                          }]),
                          frameborder: "0"
                        }, null, 10, A)) : f("", !0)
                      ]),
                      _: 1
                    })
                  ], 2),
                  r("div", G, [
                    (t(!0), s(C, null, $(o.demos, (l) => (t(), s("div", {
                      key: l.slug,
                      class: p(["gallery-item rounded-sm", { "border-color-secondary active": n.value === l.url }]),
                      onClick: (k) => h(l.slug)
                    }, [
                      r("img", {
                        src: l.thumbnail,
                        alt: l.title,
                        class: "gallery-thumbnail rounded-sm"
                      }, null, 8, J)
                    ], 10, H))), 128))
                  ])
                ], 2)
              ])) : f("", !0)
            ]),
            _: 1
          })
        ])) : f("", !0)
      ]);
    };
  }
}), Q = /* @__PURE__ */ M(K, [["__scopeId", "data-v-079be752"]]);
export {
  Q as default
};
