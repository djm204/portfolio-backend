(this["webpackJsonpportfolio-frontend"]=this["webpackJsonpportfolio-frontend"]||[]).push([[0],{18:function(e,a,t){e.exports=t(49)},23:function(e,a,t){},29:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),c=t.n(o),l=(t(23),t(5)),i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App__Header__Title"},r.a.createElement("p",null,"Hello, I'm ",r.a.createElement("span",{className:"App__Header__Title__Name"},"David Mendez.")),r.a.createElement("p",null,"a full-stack Web Developer."),r.a.createElement("div",{className:"CheckMe",onClick:function(e){e.preventDefault();var a=document.querySelector("#About");a&&a.scrollIntoView({behavior:"smooth"})}},"Check out my work ",r.a.createElement(l.a,{className:"CheckMe__Arrow",icon:"arrow-alt-down"}))))},s=(t(29),function(){return r.a.createElement("header",{className:"App__Header"},r.a.createElement("div",{className:"Swoosh--1"}),r.a.createElement("div",{className:"Swoosh--2"}),r.a.createElement("div",{className:"Swoosh--3"}),r.a.createElement(i,null))}),m=t(3),u=function(e){var a=e.type,t=e.iconClass,n=e.contactProfileUrl,o=t.indexOf(" ")>-1?t.split(" "):t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{title:a,href:n},r.a.createElement(l.a,{icon:o})))},d=t(4),p=t.n(d),g=t(6);t(31),t(35);function h(){return(h=Object(g.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.url);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error(t.statusText);case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(g.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a.payload)},e.next=3,fetch(a.url,t);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.abrupt("return",n.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(36);var E=function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){(function(e){return h.apply(this,arguments)})({url:"/contactInfo"}).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement("footer",null,r.a.createElement("div",{className:"SocialMedia__Wrapper"},t?t.map((function(e){return r.a.createElement(u,Object.assign({key:JSON.stringify(e)},e))})):null),r.a.createElement("div",null," \xa92010 - ",(new Date).getFullYear()," David Mendez"))},v=t(2),_=t.n(v),b=function(e){return r.a.createElement("div",Object.assign({},e,{className:_()("InfoSection",e.classnames)}),e.children)},w=function(e){return r.a.createElement("div",{className:_()("image-wrapper",e.imgClasses)},r.a.createElement("img",{src:e.imgUrl,alt:e.altText}))},y=function(e){return r.a.createElement("div",{className:"WriteUp"},r.a.createElement("h2",null,"About David"),e.children)},N=(t(37),function(){return r.a.createElement("div",{id:"About",className:"About","data-aos":"fade-in","data-aos-easing":"ease-in-out","data-aos-once":"true","data-aos-duration":"1000"},r.a.createElement(b,{classnames:"Bio"},r.a.createElement("div",{className:"Bio__Image"},r.a.createElement(w,{imgClasses:"Bio__Image__Picture",imgUrl:"david_on_a_mountain.jpg",altText:"David Mendez"}),r.a.createElement("h4",null,"David Mendez"),r.a.createElement("h5",null,"Developer")),r.a.createElement("div",{className:"Bio__AndQuote"},r.a.createElement(y,null,r.a.createElement("p",null,"As a life-long technology enthusiast with an insatiable appetite for software development I spend a lot of my free time in front of the PC; creating and furthering my knowledge about different technologies such as JavaScript, GoLang and Python."),r.a.createElement("p",null,"Staying up to date with technology, code coverage and best practices are very important to me.")),r.a.createElement("div",{className:"Quote"},r.a.createElement("h4",null,"Favourite Quote"),r.a.createElement("blockquote",null,'"Why settle for normalcy when there\'s a whole world of weird to explore?"')))))}),S=(t(38),function(e){var a=e.role,t=e.name,n=e.link,o=e.points,c=e.className,l=e.imgSrc,i=e.dataAosDuration,s=e.dataAosEasing;return r.a.createElement("div",{id:c,className:_()("Project",c)},r.a.createElement("img",{className:"Project__Image",alt:t,src:l}),r.a.createElement("div",{className:"Project__Details"},r.a.createElement("h3",{className:"Project__Name ","data-aos-duration":i,"data-aos-easing":s},t),r.a.createElement("div",{className:"Project__Role "},a),r.a.createElement("ul",{className:"Project__Notables "},"string"!==typeof o?o.map((function(e){return r.a.createElement("li",{key:e},e)})):r.a.createElement("li",null,o)),r.a.createElement("div",{className:"Project__Link__Wrapper"},"NPA"===n?r.a.createElement("span",{className:"Project__NotPublic "},"*Not Publicly Available"):r.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"Project__Link"},"View Project"))))}),k=(t(39),function(e){var a=e.name,t=e.percentage;return r.a.createElement("div",{className:"StatsBar__Wrapper"},r.a.createElement("div",{className:"StatsBar__Name"},a),r.a.createElement("div",{className:"StatsBar__Container"},r.a.createElement("div",{className:"StatsBar",style:{width:t-10+"%"}},t+"%")))}),j=(t(40),[{className:"Projects_Cashier",name:"Cashier",role:"Developer Team Lead / Full Stack Developer",link:"NPA",imgSrc:"cashier.png",points:["Pair programming / mentoring & unblocking reports.","Delegation and prioritization of tasks.","React/Redux App for Admin and Checkout.","Hybrid PHP / Go backend.","4 years on the team."],dataAos:"fade-right",dataAosDuration:"1000",dataAosEasing:"ease-in-out",dataAosOnce:"true"},{className:"Projects_Staples",name:"Staples Project",link:"https://staples.ca",imgSrc:"staples.png",role:"Developer Team Lead / Full Stack Developer",points:["React/Redux App.","Customized Cashier to meet Staples' business requirements.","Successful delivery on tight timeline."],dataAos:"fade-up",dataAosDuration:"1000",dataAosEasing:"ease-in-out",dataAosOnce:"true"},{className:"Projects_MultiCurrency",name:"Bold MultiCurrency",link:"https://boldcommerce.com/multi-currency",imgSrc:"multicurrency.png",role:"Completed the first iteration of the frontend of the app in its entirety, pretty much solo. *cracks knuckles*",points:["React/Redux App","Conversion engine","Integrated with Cashier"],dataAos:"fade-up",dataAosDuration:"1000",dataAosEasing:"ease-in-out",dataAosOnce:"true"},{className:"Projects_DeepRoots",name:"DRSD - Website",link:"https://www.deeproots-strongdance.com/",imgSrc:"deeproots.png",role:"Designed and built entire site",points:["React/Redux","API endpoint for adding to mailing list."],dataAos:"fade-left",dataAosDuration:"1000",dataAosEasing:"ease-in-out",dataAosOnce:"true"}]),C=[{name:"HTML",percentage:95},{name:"CSS",percentage:90},{name:"JavaScript",percentage:90},{name:"React",percentage:90},{name:"Redux",percentage:85},{name:"TypeScript",percentage:75},{name:"NodeJS",percentage:65},{name:"Go",percentage:65},{name:"K8s",percentage:55},{name:"GCP",percentage:55}],P=function(e){var a=e.classnames;return r.a.createElement("div",Object.assign({},e,{className:_()("HorizontalSeparator",a)}))},A=function(){return r.a.createElement("div",{"data-aos":"fade-left","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-once":"true",id:"TechSummary",className:"TechSummaryPage"},r.a.createElement(P,{classnames:["lighter","left-to-right"]}),r.a.createElement(b,{classnames:"TechSummaryPage__InfoSection"},r.a.createElement("div",{className:"TechSummaryPage__Introduction"},r.a.createElement("h2",null,"A Brief History"),r.a.createElement("p",null,"Technology has had be enamoured from a very young age. I was first introduced by my parents via a IBM PS/2 486 Desktop PC."),r.a.createElement("p",null,"I managed to mess up the Windows installation within a week. Pretty darn sure I used"," ",r.a.createElement("code",null,"FORMAT C:")),r.a.createElement("p",null,"When my parents brought the PC to get fixed, I asked the person fixing the PC if I could watch, he agreed."),r.a.createElement("p",null,"After watching what he did to re-install Windows, I was now equipped to corrupt the OS as much as I pleased as long as I reinstalled it, of course."),r.a.createElement("p",null,"Little did I know that this interaction would spark a life long journey into technology.")),r.a.createElement("div",{className:"TechSummaryPage__Introduction__StatBars"},C.map((function(e){return r.a.createElement(k,Object.assign({key:JSON.stringify(e)},e))})),r.a.createElement("small",null,"* Percentages represent level of confidence when working with respective technologies"))),r.a.createElement(P,{classnames:["lighter","right-to-left"]}),r.a.createElement(b,{id:"Projects",classnames:"TechSummaryPage__Projects"},r.a.createElement("h2",null,"Projects"),r.a.createElement("div",{className:"TechSummary__Projects__Wrapper"},j.map((function(e){return r.a.createElement(S,Object.assign({key:JSON.stringify(e)},e))})))))},O=t(11),D=t(12),I={name:"",email:"",phone:"",message:"",errors:{}},T=[],H=function(e){var a=Object(n.useState)(I),t=Object(m.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)(T),l=Object(m.a)(c,2),i=l[0];l[1];return{handleSubmit:function(a){var t=r;delete t.errors;var n={url:"/api/sendContactForm",payload:Object(D.a)({},t)};a&&a.preventDefault(),function(e){return f.apply(this,arguments)}(n).then((function(a){return e(a)})).catch((function(e){return alert(e)}))},handleInputChange:function(e){e.persist(),o((function(a){return Object(D.a)({},a,Object(O.a)({},e.target.name,e.target.value))}))},inputs:r,inputErrors:i}},x=(t(41),function(e){var a=e.onChangeHandler,t=e.value,n=e.name,o=e.placeholder,c=e.required,l=e.error,i=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onChange:a,type:i,value:t,name:n,placeholder:o,required:c}),r.a.createElement("div",{className:"Error_Message"},l))}),M=function(){var e=H((function(e){alert("Successful Submit!")})),a=e.inputs,t=(e.inputErrors,e.handleInputChange),n=e.handleSubmit;return r.a.createElement("div",{id:"Contact",className:"Contact"},r.a.createElement("div",{className:"Contact__Form__Wrapper"},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("h4",null,"Do you want to work together?"),r.a.createElement("form",{className:"Contact__Form",onSubmit:n},r.a.createElement(x,{onChangeHandler:t,value:a.name,name:"name",type:"text",placeholder:"*Name",required:!0}),r.a.createElement(x,{onChangeHandler:t,value:a.email,type:"email",placeholder:"*Enter email",name:"email",required:!0}),r.a.createElement(x,{onChangeHandler:t,value:a.phone,type:"tel",placeholder:"Phone (optional)",name:"phone"}),r.a.createElement("textarea",{onChange:t,name:"message",placeholder:"*I'd love to hear from you!",required:!0,value:a.message}),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))))},B=(t(42),t(43),function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],o=a[1],c=function(e){return"Egg--"+(Math.floor(Math.random()*e)+1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"EggBert",onClick:function(){var e=t;if(e<5)e++,o(e);else{var a=c(4),n=document.querySelector("."+a);null===n||void 0===n||n.classList.remove("Egg__Hide"),null===n||void 0===n||n.classList.add("Egg__Show"),setTimeout((function(){null===n||void 0===n||n.classList.add("Egg__Hide"),null===n||void 0===n||n.classList.remove("Egg__Show")}),5e3),o(0)}}},r.a.createElement(l.a,{icon:"egg"})),r.a.createElement("div",{className:"Counter"}),r.a.createElement("div",{className:"Egg--1 Egg__Hide"}),r.a.createElement("div",{className:"Egg--2 Egg__Hide"}),r.a.createElement("div",{className:"Egg--3 Egg__Hide"}),r.a.createElement("div",{className:"Egg--4 Egg__Hide"}))}),L=function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(),i=Object(m.a)(c,2),s=i[0],u=i[1],d=Object(n.useState)(),p=Object(m.a)(d,2),g=p[0],h=p[1];window.addEventListener("load",(function(){var e=f();u(e),h(e)})),window.addEventListener("resize",(function(){var e=f();s!==e&&(u(e),h(e))})),window.addEventListener("scroll",(function(){window.scrollY>window.innerHeight-20&&!t&&o(!0),window.scrollY<window.innerHeight-20&&t&&o(!1)}));var f=function(){return window.innerWidth<800},E=function(e){e.preventDefault();var a=e.currentTarget,t=document.querySelector("#".concat(a.dataset.goto));s&&h(!0),t&&t.scrollIntoView({behavior:"smooth"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:_()("Nav",{Nav__Fixed:t,Nav__Mobile:s})},r.a.createElement("div",{onClick:function(){return h(!g)},className:_()("Hamburger__MobileNav",{Nav__Hidden:!g})},r.a.createElement(l.a,{icon:"bars"})),r.a.createElement("div",{className:_()("Nav__Links",{Nav__Hidden:g})},r.a.createElement("a",{onClick:E,href:"/about","data-goto":"About"},"About"),r.a.createElement("a",{onClick:E,href:"/tech-summary","data-goto":"TechSummary"},"Tech Summary"),r.a.createElement("a",{onClick:E,href:"/projects","data-goto":"Projects"},"Projects"),r.a.createElement("a",{onClick:E,href:"/contact","data-goto":"Contact"},"Contact")),r.a.createElement(B,null)))},W=t(17),F=t.n(W),R=(t(44),t(10)),q=t(8),J=t(7);F.a.init(),R.b.add(J.b,J.a,J.d,J.c,q.a,q.c,q.e,q.d,q.b,J.e);var z=function(){return r.a.createElement("div",{id:"App__Container"},r.a.createElement(s,null),r.a.createElement(L,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(P,{classnames:["darker","left-to-right"]}),r.a.createElement(M,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(45),t(46),t(47),t(48);c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5b1a8294.chunk.js.map