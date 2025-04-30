import { defineComponent as z, createElementBlock as s, openBlock as e, createElementVNode as i, toDisplayString as D, ref as v, onMounted as F, watch as I, createCommentVNode as _, createBlock as b, Fragment as C, renderList as $, Teleport as O, createVNode as w, Transition as V, withCtx as B, normalizeClass as p } from "vue";
const R = { class: "demo-card__header" }, S = { class: "font-weight-black title" }, T = { class: "color-green" }, x = /* @__PURE__ */ z({
  __name: "DemoCard",
  props: {
    title: {},
    description: {},
    value: {}
  },
  setup(c) {
    return (o, a) => (e(), s("div", {
      class: "demo-card bg-color-blue rounded-sm",
      onClick: a[0] || (a[0] = (d) => o.$emit("start", o.value))
    }, [
      i("div", R, [
        i("h3", S, D(o.title), 1),
        i("p", T, D(o.description), 1)
      ])
    ]));
  }
}), M = (c, o) => {
  const a = c.__vccOpts || c;
  for (const [d, u] of o)
    a[d] = u;
  return a;
}, L = /* @__PURE__ */ M(x, [["__scopeId", "data-v-e4ce7728"]]), U = { class: "main p-xl bg-color-primary" }, j = {
  key: 0,
  class: "card-grid"
}, q = {
  key: 0,
  class: "dialog-backdrop"
}, A = ["src"], G = { class: "gallery" }, H = ["onClick"], J = ["src"], K = /* @__PURE__ */ z({
  __name: "DemoView",
  props: {
    initialDemo: {},
    fullscreen: { type: Boolean },
    demos: {}
  },
  setup(c) {
    const o = c, a = v(!1);
    F(() => a.value = !0);
    const d = !1, u = v(!1), n = v(null), r = v(!1), N = v(null), g = (t) => {
      k(t) && (u.value = !0, r.value = d);
    };
    function k(t) {
      var m;
      const f = (m = o == null ? void 0 : o.demos) == null ? void 0 : m.find((l) => l.slug === t);
      return f ? (n.value = f.url, r.value = d, !0) : !1;
    }
    const E = () => {
      u.value = !1, n.value = null, r.value = !1;
    };
    return I(
      () => o.initialDemo,
      (t) => t && g(t),
      {
        immediate: !0
      }
    ), (t, f) => {
      var m;
      return e(), s("div", U, [
        (m = t.demos) != null && m.length ? (e(), s("div", j, [
          (e(!0), s(C, null, $(t.demos, ({ title: l, description: y, slug: h }) => (e(), b(L, {
            title: l.en,
            key: h,
            description: y.en,
            value: h,
            onStart: g
          }, null, 8, ["title", "description", "value"]))), 128))
        ])) : _("", !0),
        a.value ? (e(), b(O, {
          key: 1,
          to: "body"
        }, [
          w(V, { name: "dialog" }, {
            default: B(() => [
              u.value ? (e(), s("div", q, [
                (e(), s("button", {
                  key: 0,
                  class: "close-button",
                  onClick: E
                }, "✕")),
                i("div", {
                  class: p(["dialog", { "is-maximized": r.value }]),
                  ref_key: "dialogRef",
                  ref: N
                }, [
                  i("div", {
                    class: p(["iframe-container", { "rounded-sm": !r.value }])
                  }, [
                    w(V, {
                      name: "slide",
                      mode: "out-in"
                    }, {
                      default: B(() => [
                        n.value ? (e(), s("iframe", {
                          key: n.value,
                          src: n.value,
                          class: p(["demo-iframe", {
                            "demo-iframe-active": n.value,
                            "rounded-sm": !r.value
                          }]),
                          frameborder: "0"
                        }, null, 10, A)) : _("", !0)
                      ]),
                      _: 1
                    })
                  ], 2),
                  i("div", G, [
                    (e(!0), s(C, null, $(t.demos, (l) => (e(), s("div", {
                      key: l.slug,
                      class: p(["gallery-item rounded-sm", { "border-color-secondary active": n.value === l.url }]),
                      onClick: (y) => k(l.slug)
                    }, [
                      l.image ? (e(), s("img", {
                        key: 0,
                        src: l.image,
                        class: "gallery-image rounded-sm demo-thumbnail"
                      }, null, 8, J)) : _("", !0)
                    ], 10, H))), 128))
                  ])
                ], 2)
              ])) : _("", !0)
            ]),
            _: 1
          })
        ])) : _("", !0)
      ]);
    };
  }
}), Q = /* @__PURE__ */ M(K, [["__scopeId", "data-v-322345e7"]]);
export {
  Q as default
};
