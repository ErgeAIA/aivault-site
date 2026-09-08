import{a,j as r}from"./sun-Du5GTUnu.js";import{T as d}from"./triangle-alert-Lw_l7deH.js";/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],t=a("circle-x",l);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],m=a("image",g);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],y=a("info",x),f={info:{color:"rgb(var(--brand))",bg:"rgb(var(--brand) / 0.08)",Icon:y},warn:{color:"rgb(var(--warn))",bg:"rgb(var(--warn) / 0.08)",Icon:d},danger:{color:"rgb(var(--danger))",bg:"rgb(var(--danger) / 0.08)",Icon:t}};function p({variant:c="info",title:e,children:n}){const{color:o,bg:s,Icon:i}=f[c];return r.jsxs("div",{className:"flex gap-3 rounded-xl border p-4",style:{borderColor:o,background:s},children:[r.jsx(i,{size:18,style:{color:o,flexShrink:0,marginTop:2}}),r.jsxs("div",{className:"min-w-0 text-sm leading-relaxed text-fg-secondary",children:[e&&r.jsx("div",{className:"font-semibold text-fg-primary",children:e}),n]})]})}function u({ratio:c="16 / 9",caption:e}){return r.jsxs("figure",{className:"doc-figure",children:[r.jsxs("div",{className:"doc-img-placeholder",style:{aspectRatio:c},children:[r.jsx(m,{size:20}),r.jsx("span",{children:"截图待补"})]}),e&&r.jsx("figcaption",{children:e})]})}export{p as C,u as I};
