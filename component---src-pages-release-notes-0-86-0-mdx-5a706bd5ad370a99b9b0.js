(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),i=t("q1tI"),r=t.n(i),s=t("2+3N"),l=t("1lec"),c=t("+ejy"),o=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(l).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var i=Object(o.a)(e.location),h=e.version||i.substring(i.lastIndexOf("/")+1);return h.match(/^[0-9]/)||(h=void 0),r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:h?h+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),h?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),h," release notes"):"",e.children)}},Rt0B:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return h}));var n,i=t("zLVn"),r=(t("q1tI"),t("7ljp")),s=t("JkCF"),l={},c=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o={_frontmatter:l},b=s.a;function h(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"17th May 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The request body is injected automatically in annotated HTTP service when the parameter type is ",Object(r.b)("inlineCode",{parentName:"li"},"byte[]"),", ",Object(r.b)("inlineCode",{parentName:"li"},"HttpData"),", ",Object(r.b)("inlineCode",{parentName:"li"},"String")," or ",Object(r.b)("inlineCode",{parentName:"li"},"CharSequence")," regardless of the ",Object(r.b)("inlineCode",{parentName:"li"},"content-type")," header. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1584"},"#1584"),", ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1745"},"#1745")),Object(r.b)("li",{parentName:"ul"},"You can now create a curl command from the ",Object(r.b)("inlineCode",{parentName:"li"},"DocService")," using ",Object(r.b)("inlineCode",{parentName:"li"},"COPY AS A CURL COMMAND")," button. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/196"},"#196"),", ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1747"},"#1747")),Object(r.b)("li",{parentName:"ul"},"You can now build your gRPC service without depending on gRPC stubs by extending ",Object(r.b)("inlineCode",{parentName:"li"},"AbstractUnsafeUnaryGrpcService"),". This is for advanced users only. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1766"},"#1766")),Object(r.b)("li",{parentName:"ul"},"You can now log available ciphers for TLS on startup by setting a system property: ",Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.dumpOpenSslInfo=true"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1777"},"#1777"))),Object(r.b)("h2",{id:"improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can now use ",Object(r.b)("inlineCode",{parentName:"li"},"HttpTracingClient")," even when the client is used outside of Armeria server. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1767"},"#1767"),", ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1768"},"#1768")),Object(r.b)("li",{parentName:"ul"},"You can now get pooled HTTP decode responses. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1770"},"#1770"))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestLogAvailabilityException")," is no longer raised in ",Object(r.b)("inlineCode",{parentName:"li"},"HttpTracing(Client|Service)")," when a request timed out. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1769"},"#1769"),", ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1775"},"#1775")),Object(r.b)("li",{parentName:"ul"},"Now, an exception is raised while building a server when TLS is configured but ALPN is not supported. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1772"},"#1772"),", ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1774"},"#1774")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},":scheme")," and ",Object(r.b)("inlineCode",{parentName:"li"},":authority")," headers are set for every received request in the server. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1773"},"#1773"),", ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1776"},"#1776"))),Object(r.b)("h2",{id:"breaking-change",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#breaking-change","aria-label":"breaking change permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking change"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"newDecoder()")," in ",Object(r.b)("inlineCode",{parentName:"li"},"StreamDecoderFactory")," now takes a ",Object(r.b)("inlineCode",{parentName:"li"},"ByteBufAllocator"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1770"},"#1770"))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Jackson 2.9.8 -> 2.9.9"),Object(r.b)("li",{parentName:"ul"},"jsoup 1.11.3 -> 1.12.1"),Object(r.b)("li",{parentName:"ul"},"tomcat-embed-core 9.0.19 -> 9.0.20"),Object(r.b)("li",{parentName:"ul"},"Spring Boot",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"2.1.4.RELEASE -> 2.1.5.RELEASE"),Object(r.b)("li",{parentName:"ul"},"1.5.20.RELEASE -> 1.5.21.RELEASE")))),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),Object(r.b)(c,{usernames:["alex-lx","anuraaga","codefromthecrypt","dawnbreaks","gquintana","hyangtack","imasahiro","jongmin92","minwoox","trustin","wooyeong"],mdxType:"ThankYou"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-86-0-mdx-5a706bd5ad370a99b9b0.js.map