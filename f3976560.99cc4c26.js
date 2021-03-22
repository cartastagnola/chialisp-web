(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(75)),i={},c={type:"mdx",permalink:"/",source:"@site/src/pages/index.md"},l=[{value:"Introductory Material",id:"introductory-material",children:[]},{value:"Developer Documentation",id:"developer-documentation",children:[]},{value:"Coloured Coins",id:"coloured-coins",children:[{value:"Video Overviews of Coloured Coins:",id:"video-overviews-of-coloured-coins",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"chialisp"},"Chialisp"),Object(o.b)("p",null,"Chialisp is a powerful and secure LISP-like language for encumbering and releasing funds with smart-contract capabilities.\nThis website is a consolidated place to learn about Chialisp, CLVM and the conditions language."),Object(o.b)("p",null,"Here's a sample:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"(mod (password new_puzhash amount)\n  (defconstant CREATE_COIN 51)\n\n  (if (= (sha256 password) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824))\n    (list (list CREATE_COIN new_puzhash amount))\n    (x)\n  )\n)\n")),Object(o.b)("h2",{id:"introductory-material"},"Introductory Material"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bram\u2019s introductory post on ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.chia.net/2019/11/27/chialisp.en.html"}),"Chialisp")),Object(o.b)("li",{parentName:"ul"},"Bram\u2019s introduction to our ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.chia.net/2020/04/29/coloured-coins-launch.en.html"}),"MVP of Coloured coins")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Chia-Network/clvm/archive/0.4.tar.gz"}),"Download Chialisp 0.4 in tar.gz format"))),Object(o.b)("h2",{id:"developer-documentation"},"Developer Documentation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Chia-Network/clvm"}),"ChiaLisp Compiler Repository")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=dEFLJSU87K8"}),"A video introduction to developing in Chialisp"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/"}),"CLVM Basics")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/doc2/"}),"Coins, Spends and Wallets")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/doc3/"}),"Deeper into CLVM")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/doc4/"}),"The Compiler and Other Useful Information")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/doc5/"}),"Glossary of Chialisp terms"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/ref/opcodes/"}),"Lower Level Language Reference Document"))),Object(o.b)("h2",{id:"coloured-coins"},"Coloured Coins"),Object(o.b)("p",null,"The first Chialisp smart transaction that we integrated into chia-blockchain were Coloured Coins. We will be integrating additional smart transactions and wallets into chia-blockchain in most releases."),Object(o.b)("h3",{id:"video-overviews-of-coloured-coins"},"Video Overviews of Coloured Coins:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=YOlpmCBK8zY"}),"Non Technical Overview and Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=17pa2t_FQQM"}),"Technical Guide (Part 1) - Smart Transactions and ChiaLisp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=P33gWX4WmEQ"}),"Technical Guide (Part 2) - The Coloured Coins Contract & Offers"))))}u.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);