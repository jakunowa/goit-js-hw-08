var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return g(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function T(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function h(){var e,n,i,o=p();if(T(o))return O(o);u=setTimeout(h,(e=o-l,n=o-c,i=t-e,d?m(i,a-n):i))}function O(e){return(u=void 0,b&&o)?j(e):(o=r=void 0,f)}function w(){var e,n=p(),i=T(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=e=l,u=setTimeout(h,t),s?j(e):f;if(d)return u=setTimeout(h,t),j(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,g(i)&&(s=!!i.leading,a=(d="maxWait"in i)?v(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},w.flush=function(){return void 0===u?f:O(p())},w}(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),{email:j,message:T}=b.elements;b.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){dataForm={email:j.value,message:T.value},localStorage.setItem("feedback-form-state",JSON.stringify(dataForm))},500)),b.addEventListener("submit",function(e){e.preventDefault(),console.log({email:j.value,message:T.value}),e.currentTarget.reset()});
//# sourceMappingURL=03-feedback.18f95925.js.map
