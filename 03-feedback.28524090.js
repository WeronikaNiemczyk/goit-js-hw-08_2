!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,r,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function h(e){return l=e,f=setTimeout(O,t),s?y(e):u}function w(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function O(){var e=p();if(w(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function T(e){return f=void 0,v&&i?y(e):(i=r=void 0,u)}function S(){var e=p(),n=w(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return h(c);if(d)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},S.flush=function(){return void 0===f?u:T(p())},S}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),w="feedback-form-state";h.addEventListener("input",e(t)((function(){var e={email:"".concat(h.email.value),message:"".concat(h.message.value)};try{localStorage.setItem(w,JSON.stringify(e))}catch(e){console.log(e.name)}})),500),h.addEventListener("submit",e(t)((function(e){e.preventDefault();var t={email:"".concat(h.email.value),message:"".concat(h.message.value)};if(""===t.email.trim()||""===t.message.trim())return alert("Uzupełnij wszystkie pola!");localStorage.getItem(w),console.log(t),h.reset()})),500)}();
//# sourceMappingURL=03-feedback.28524090.js.map
