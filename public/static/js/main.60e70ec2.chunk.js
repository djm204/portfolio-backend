(this["webpackJsonpportfolio-frontend"]=this["webpackJsonpportfolio-frontend"]||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(29),a(7)),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/tech-summary"},"Tech Summary"),r.a.createElement(o.b,{to:"/cat-stats"},"Cat Stats"),r.a.createElement(o.b,{to:"/contact"},"Contact"))))},i=function(){return r.a.createElement("footer",null,r.a.createElement("div",null,"\xa9 David Mendez  2010 - ",(new Date).getFullYear()))},u=a(11),s=a.n(u),E=function(e){return r.a.createElement("div",{className:s()("info-section",e.classnames)},e.children)},f=function(e){return r.a.createElement("div",{className:s()("image-wrapper",e.imgClasses)},r.a.createElement("img",{src:e.imgUrl,alt:e.altText}))},p=function(e){return r.a.createElement("div",{className:"bio"},e.bioText)},d=function(e){return r.a.createElement("div",{className:"home"},r.a.createElement(E,null,r.a.createElement("div",{className:"bio-wrapper"},r.a.createElement("div",{className:"image-and-brief"},r.a.createElement(f,{imgClasses:"bio-picture",imgUrl:e.bioPicUrl||"",altText:"David Mendez"}),r.a.createElement("ul",{className:"brief"},r.a.createElement("li",null,"Name: David Mendez"),r.a.createElement("li",null))),r.a.createElement(p,{bioText:"look how awesome I am"}))))},h=function(){return r.a.createElement(r.a.Fragment,null,"TechSummary")},v=function(){return r.a.createElement(r.a.Fragment,null,"cat stats")},b=a(23),g=function(e){var t=e.type,a=e.iconClass,n=e.contactProfileUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:a}),r.a.createElement("a",{title:t,href:n},n)))},w=a(4),x=a.n(w),y=a(9);a(35),a(39);function N(){return(N=Object(y.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error(a.statusText);case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){var t=Object(n.useState)(),a=Object(b.a)(t,2),c=a[0],l=a[1];l(e),Object(n.useEffect)((function(){var e=function(e){return N.apply(this,arguments)}({url:"/contactInfo"});l(e)}),[]);return r.a.createElement("div",{className:"contact-page"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement("p",null,"If you would like to reach me feel free to use any of the following:"),function(e){return e.map((function(e){return r.a.createElement(g,Object.assign({key:JSON.stringify(e)},e))}))}(c))},T=a(6),j=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{id:"app-container"},r.a.createElement(m,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/",component:d}),r.a.createElement(T.a,{exact:!0,path:"/tech-summary",component:h}),r.a.createElement(T.a,{exact:!0,path:"/cat-stats",component:v}),r.a.createElement(T.a,{exact:!0,path:"/contact",component:k}),"} />"),r.a.createElement(i,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.60e70ec2.chunk.js.map