import{a as n,j as r}from"./sun-Du5GTUnu.js";import{T as i}from"./triangle-alert-Lw_l7deH.js";import{w as d}from"./Section-VTHnS5gg.js";/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],g=n("circle-x",t);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],b=n("info",m),f={info:{color:"rgb(var(--brand))",bg:"rgb(var(--brand) / 0.08)",Icon:b},warn:{color:"rgb(var(--warn))",bg:"rgb(var(--warn) / 0.08)",Icon:i},danger:{color:"rgb(var(--danger))",bg:"rgb(var(--danger) / 0.08)",Icon:g}};function h({variant:o="info",title:e,children:c}){const{color:a,bg:s,Icon:l}=f[o];return r.jsxs("div",{className:"flex gap-3 rounded-xl border p-4",style:{borderColor:a,background:s},children:[r.jsx(l,{size:18,style:{color:a,flexShrink:0,marginTop:2}}),r.jsxs("div",{className:"min-w-0 text-sm leading-relaxed text-fg-secondary",children:[e&&r.jsx("div",{className:"font-semibold text-fg-primary",children:e}),c]})]})}function p({src:o,caption:e}){return r.jsxs("figure",{className:"doc-figure",children:[r.jsx("img",{src:d(o),alt:e??"",loading:"lazy",className:"w-full rounded-xl border",style:{borderColor:"rgb(var(--border-default))"}}),e&&r.jsx("figcaption",{children:e})]})}export{h as C,p as D};
