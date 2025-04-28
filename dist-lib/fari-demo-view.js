import { defineComponent as z, createElementBlock as s, openBlock as e, createElementVNode as a, toDisplayString as b, ref as m, onMounted as M, watch as N, createBlock as D, createCommentVNode as f, Fragment as C, renderList as w, unref as $, Teleport as R, createVNode as B, Transition as V, withCtx as x, normalizeClass as p } from "vue";
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
], A = { class: "demo-card__header" }, F = { class: "font-weight-black title" }, O = { class: "color-green" }, S = /* @__PURE__ */ z({
  __name: "DemoCard",
  props: {
    title: {},
    description: {},
    value: {}
  },
  setup(c) {
    return (l, o) => (e(), s("div", {
      class: "demo-card bg-color-blue rounded-sm",
      onClick: o[0] || (o[0] = (u) => l.$emit("start", l.value))
    }, [
      a("div", A, [
        a("h3", F, b(l.title), 1),
        a("p", O, b(l.description), 1)
      ])
    ]));
  }
}), E = (c, l) => {
  const o = c.__vccOpts || c;
  for (const [u, d] of l)
    o[u] = d;
  return o;
}, T = /* @__PURE__ */ E(S, [["__scopeId", "data-v-7ee23914"]]), L = { class: "main p-xl bg-color-primary" }, Q = { class: "card-grid" }, U = {
  key: 0,
  class: "dialog-backdrop"
}, W = ["src"], j = { class: "gallery" }, G = ["onClick"], H = ["src", "alt"], J = /* @__PURE__ */ z({
  __name: "DemoView",
  props: {
    initialDemo: {},
    fullscreen: { type: Boolean }
  },
  setup(c) {
    const l = c, o = m(!1);
    M(() => o.value = !0);
    const u = !1, d = m(!1), n = m(null), r = m(!1), q = m(null), h = (i) => {
      g(i) && (d.value = !0, r.value = u);
    };
    function g(i) {
      const _ = v.find((t) => t.slug === i);
      return _ ? (n.value = _.url, r.value = u, !0) : !1;
    }
    const I = () => {
      d.value = !1, n.value = null, r.value = !1;
    };
    return N(
      () => l.initialDemo,
      (i) => i && h(i),
      {
        immediate: !0
      }
    ), (i, _) => (e(), s("div", L, [
      a("div", Q, [
        (e(!0), s(C, null, w($(v), ({ title: t, description: y, slug: k }) => (e(), D(T, {
          title: t,
          key: k,
          description: y,
          value: k,
          onStart: h
        }, null, 8, ["title", "description", "value"]))), 128))
      ]),
      o.value ? (e(), D(R, {
        key: 0,
        to: "body"
      }, [
        B(V, { name: "dialog" }, {
          default: x(() => [
            d.value ? (e(), s("div", U, [
              (e(), s("button", {
                key: 0,
                class: "close-button",
                onClick: I
              }, "✕")),
              a("div", {
                class: p(["dialog", { "is-maximized": r.value }]),
                ref_key: "dialogRef",
                ref: q
              }, [
                a("div", {
                  class: p(["iframe-container", { "rounded-sm": !r.value }])
                }, [
                  B(V, {
                    name: "slide",
                    mode: "out-in"
                  }, {
                    default: x(() => [
                      n.value ? (e(), s("iframe", {
                        key: n.value,
                        src: n.value,
                        class: p(["demo-iframe", {
                          "demo-iframe-active": n.value,
                          "rounded-sm": !r.value
                        }]),
                        frameborder: "0"
                      }, null, 10, W)) : f("", !0)
                    ]),
                    _: 1
                  })
                ], 2),
                a("div", j, [
                  (e(!0), s(C, null, w($(v), (t) => (e(), s("div", {
                    key: t.slug,
                    class: p(["gallery-item rounded-sm", { "border-color-secondary active": n.value === t.url }]),
                    onClick: (y) => g(t.slug)
                  }, [
                    a("img", {
                      src: t.thumbnail,
                      alt: t.title,
                      class: "gallery-thumbnail rounded-sm"
                    }, null, 8, H)
                  ], 10, G))), 128))
                ])
              ], 2)
            ])) : f("", !0)
          ]),
          _: 1
        })
      ])) : f("", !0)
    ]));
  }
}), P = /* @__PURE__ */ E(J, [["__scopeId", "data-v-5cccf766"]]);
export {
  P as DemoView,
  P as default
};
