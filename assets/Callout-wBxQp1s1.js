import{c as n,j as r}from"./lib-B8J5mPGj.js";import{T as d}from"./triangle-alert-BRrPfxKp.js";/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],t=n("circle-x",l);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],b=n("info",g),m={info:{color:"rgb(var(--brand))",bg:"rgb(var(--brand) / 0.08)",Icon:b},warn:{color:"rgb(var(--warn))",bg:"rgb(var(--warn) / 0.08)",Icon:d},danger:{color:"rgb(var(--danger))",bg:"rgb(var(--danger) / 0.08)",Icon:t}};function y({variant:a="info",title:o,children:c}){const{color:e,bg:i,Icon:s}=m[a];return r.jsxs("div",{className:"flex gap-3 rounded-xl border p-4",style:{borderColor:e,background:i},children:[r.jsx(s,{size:18,style:{color:e,flexShrink:0,marginTop:2}}),r.jsxs("div",{className:"min-w-0 text-sm leading-relaxed text-fg-secondary",children:[o&&r.jsx("div",{className:"font-semibold text-fg-primary",children:o}),c]})]})}export{y as C};
