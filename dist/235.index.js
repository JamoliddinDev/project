"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[235],{235:(e,n,t)=>{t.a(e,(async(e,r)=>{try{t.r(n),t.d(n,{__wbg_log_1d3ae0273d8f4f8a:()=>c.gE,__wbg_set_wasm:()=>c.oT,__wbindgen_object_drop_ref:()=>c.ug,__wbindgen_string_new:()=>c.h4,__wbindgen_throw:()=>c.Or,grayscale:()=>c.se});var o=t(530),c=t(838),_=e([o]);o=(_.then?(await _)():_)[0],(0,c.oT)(o),r()}catch(e){r(e)}}))},838:(e,n,t)=>{let r;function o(e){r=e}t.d(n,{Or:()=>x,gE:()=>T,h4:()=>y,oT:()=>o,se:()=>h,ug:()=>p}),e=t.hmd(e);let c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let _=null;function i(){return null!==_&&0!==_.byteLength||(_=new Uint8Array(r.memory.buffer)),_}function u(e,n){return e>>>=0,c.decode(i().subarray(e,e+n))}const d=new Array(128).fill(void 0);d.push(void 0,null,!0,!1);let l=d.length;function f(e){return d[e]}let a=0,g=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const s="function"==typeof g.encodeInto?function(e,n){return g.encodeInto(e,n)}:function(e,n){const t=g.encode(e);return n.set(t),{read:e.length,written:t.length}};let w=null;function b(){return null!==w&&0!==w.byteLength||(w=new Int32Array(r.memory.buffer)),w}function h(e){let n,t;try{const _=r.__wbindgen_add_to_stack_pointer(-16),d=function(e,n,t){if(void 0===t){const t=g.encode(e),r=n(t.length,1)>>>0;return i().subarray(r,r+t.length).set(t),a=t.length,r}let r=e.length,o=n(r,1)>>>0;const c=i();let _=0;for(;_<r;_++){const n=e.charCodeAt(_);if(n>127)break;c[o+_]=n}if(_!==r){0!==_&&(e=e.slice(_)),o=t(o,r,r=_+3*e.length,1)>>>0;const n=i().subarray(o+_,o+r);_+=s(e,n).written}return a=_,o}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),l=a;r.grayscale(_,d,l);var o=b()[_/4+0],c=b()[_/4+1];return n=o,t=c,u(o,c)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t,1)}}function y(e,n){return function(e){l===d.length&&d.push(d.length+1);const n=l;return l=d[n],d[n]=e,n}(u(e,n))}function p(e){!function(e){const n=f(e);(function(e){e<132||(d[e]=l,l=e)})(e)}(e)}function T(e){console.log(f(e))}function x(e,n){throw new Error(u(e,n))}},530:(e,n,t)=>{var r=t(838);e.exports=t.v(n,e.id,"428791ea6f081c8579be",{"./index_bg.js":{__wbindgen_string_new:r.h4,__wbindgen_object_drop_ref:r.ug,__wbg_log_1d3ae0273d8f4f8a:r.gE,__wbindgen_throw:r.Or}})}}]);