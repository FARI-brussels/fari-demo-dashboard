import { defineComponent as E, createElementBlock as i, openBlock as l, createElementVNode as e, toDisplayString as k, ref as m, onMounted as I, watch as M, createBlock as D, createCommentVNode as p, Fragment as C, renderList as w, unref as $, Teleport as N, createVNode as B, Transition as V, withCtx as z, normalizeClass as f } from "vue";
const v = [
  {
    slug: "air-quality",
    title: "Air Quality in Brussels",
    description: "Citizen Engagement",
    url: "https://demo-air-quality.netlify.app/",
    thumbnail: "/thumbnails/air-quality.png"
  },
  {
    slug: "which-content-is-real",
    title: "Which Content is Real?",
    description: "AI Education",
    url: "https://which-content-is-real.netlify.app",
    thumbnail: "/thumbnails/which-content-is-real.png"
  }
], R = { class: "demo-card__header" }, F = { class: "font-weight-black title" }, O = { class: "color-green" }, S = /* @__PURE__ */ E({
  __name: "DemoCard",
  props: {
    title: {},
    description: {},
    value: {}
  },
  setup(c) {
    return (o, s) => (l(), i("div", {
      class: "demo-card bg-color-blue rounded-sm",
      onClick: s[0] || (s[0] = (u) => o.$emit("start", o.value))
    }, [
      e("div", R, [
        e("h3", F, k(o.title), 1),
        e("p", O, k(o.description), 1)
      ])
    ]));
  }
}), q = (c, o) => {
  const s = c.__vccOpts || c;
  for (const [u, d] of o)
    s[u] = d;
  return s;
}, T = /* @__PURE__ */ q(S, [["__scopeId", "data-v-7ee23914"]]), L = { class: "main bg-color-primary" }, Q = { class: "card-grid" }, U = {
  key: 0,
  class: "dialog-backdrop"
}, W = { class: "iframe-container rounded-sm" }, j = ["src"], G = { class: "gallery" }, H = ["onClick"], J = ["src", "alt"], K = /* @__PURE__ */ E({
  __name: "DemoView",
  props: {
    initialDemo: {},
    fullscreen: { type: Boolean }
  },
  setup(c) {
    const o = c, s = m(!1);
    I(() => s.value = !0);
    const u = !1, d = m(!1), n = m(null), _ = m(!1), x = m(null), h = (a) => {
      g(a) && (d.value = !0, _.value = u);
    };
    function g(a) {
      const r = v.find((t) => t.slug === a);
      return r ? (n.value = r.url, _.value = u, !0) : !1;
    }
    const A = () => {
      d.value = !1, n.value = null, _.value = !1;
    };
    return M(
      () => o.initialDemo,
      (a) => a && h(a),
      {
        immediate: !0
      }
    ), (a, r) => (l(), i("div", L, [
      r[0] || (r[0] = e("h2", { class: "title" }, "Available components", -1)),
      e("div", Q, [
        (l(!0), i(C, null, w($(v), ({ title: t, description: y, slug: b }) => (l(), D(T, {
          title: t,
          key: b,
          description: y,
          value: b,
          onStart: h
        }, null, 8, ["title", "description", "value"]))), 128))
      ]),
      s.value ? (l(), D(N, {
        key: 0,
        to: "body"
      }, [
        B(V, { name: "dialog" }, {
          default: z(() => [
            d.value ? (l(), i("div", U, [
              e("button", {
                class: "close-button",
                onClick: A
              }, "✕"),
              e("div", {
                class: f(["dialog", { "is-maximized": _.value }]),
                ref_key: "dialogRef",
                ref: x
              }, [
                e("div", W, [
                  B(V, {
                    name: "slide",
                    mode: "out-in"
                  }, {
                    default: z(() => [
                      n.value ? (l(), i("iframe", {
                        key: n.value,
                        src: n.value,
                        class: f(["demo-iframe rounded-sm", { "demo-iframe-active": n.value }]),
                        frameborder: "0"
                      }, null, 10, j)) : p("", !0)
                    ]),
                    _: 1
                  })
                ]),
                e("div", G, [
                  (l(!0), i(C, null, w($(v), (t) => (l(), i("div", {
                    key: t.slug,
                    class: f(["gallery-item rounded-sm", { "border-color-secondary active": n.value === t.url }]),
                    onClick: (y) => g(t.slug)
                  }, [
                    e("img", {
                      src: t.thumbnail,
                      alt: t.title,
                      class: "gallery-thumbnail rounded-sm"
                    }, null, 8, J)
                  ], 10, H))), 128))
                ])
              ], 2)
            ])) : p("", !0)
          ]),
          _: 1
        })
      ])) : p("", !0)
    ]));
  }
}), X = /* @__PURE__ */ q(K, [["__scopeId", "data-v-a65a159b"]]);
export {
  X as default
};
