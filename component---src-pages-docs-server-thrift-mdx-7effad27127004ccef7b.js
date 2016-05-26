(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-graphql"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},P8mm:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a("zLVn"),n=(a("q1tI"),a("7ljp")),i=a("xCMr"),c="Running a Thrift service",l={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=o("Tip"),s=o("Warning"),b={pageTitle:c,_frontmatter:l},m=i.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(m,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"running-a-thrift-service",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#running-a-thrift-service","aria-label":"running a thrift service permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Running a Thrift service"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#thttpservice"},"THttpService")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#serialization-formats"},"Serialization formats")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#service-multiplexing"},"Service multiplexing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#see-also"},"See also"))),Object(n.b)(p,{mdxType:"Tip"},Object(n.b)("p",null,"Visit ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),Object(n.b)("p",null,"Let's assume we have the following Thrift IDL:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-protobuf"},"namespace java com.example.thrift.hello\n\nservice HelloService {\n    string hello(1:string name)\n}\n")),Object(n.b)("p",null,"The Apache Thrift compiler will produce some Java code under the ",Object(n.b)("inlineCode",{parentName:"p"},"com.example.thrift.hello")," package.\nThe most noteworthy one is ",Object(n.b)("inlineCode",{parentName:"p"},"HelloService.java")," which defines the service interfaces we will implement:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"import org.apache.thrift.TException;\nimport org.apache.thrift.async.AsyncMethodCallback;\n\npublic class HelloService {\n    public interface Iface {\n        public String hello(String name) throws TException;\n    }\n\n    public interface AsyncIface {\n        public void hello(String name, AsyncMethodCallback<String> resultHandler) throws TException;\n    }\n    ...\n}\n")),Object(n.b)("p",null,"If you are interested in going fully asynchronous, it is recommended to implement the ",Object(n.b)("inlineCode",{parentName:"p"},"AsyncIface")," interface,\nalthough it is easier to implement the synchronous ",Object(n.b)("inlineCode",{parentName:"p"},"Iface")," interface:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"import org.apache.thrift.TException;\nimport org.apache.thrift.async.AsyncMethodCallback;\n\npublic class MyHelloService implements HelloService.AsyncIface {\n    @Override\n    public void hello(String name, AsyncMethodCallback<String> resultHandler) {\n        resultHandler.onComplete(\"Hello, \" + name + '!');\n    }\n}\n\n// or synchronously:\npublic class MySynchronousHelloService implements HelloService.Iface {\n    @Override\n    public String hello(String name) throws TException {\n        return \"Hello, \" + name + '!';\n    }\n}\n")),Object(n.b)("h2",{id:"thttpservice",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#thttpservice","aria-label":"thttpservice permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(n.b)("inlineCode",{parentName:"h2"},"THttpService")),Object(n.b)("p",null,"Once you've finished the implementation of the interface, you need to wrap it with a ",Object(n.b)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService"),"\nand add it to the ",Object(n.b)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = Server.builder();\n...\nsb.service("/hello", THttpService.of(new MyHelloService()));\n...\nServer server = sb.build();\nserver.start();\n')),Object(n.b)("h2",{id:"serialization-formats",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#serialization-formats","aria-label":"serialization formats permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Serialization formats"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService")," supports four Thrift serialization formats: TBINARY, TCOMPACT, TJSON and TTEXT.\nIt chooses the serialization format based on the value of the ",Object(n.b)("inlineCode",{parentName:"p"},"content-type")," HTTP header."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"th"},"Header value")),Object(n.b)("th",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"th"},"Serialization format")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Unspecified or\n",Object(n.b)("inlineCode",{parentName:"p"},"application/x-thrift"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Use the default serialization format\n(TBINARY unless specified)"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TBINARY")," or ",Object(n.b)("br",null),"\n",Object(n.b)("inlineCode",{parentName:"p"},"vnd.apache.thrift.binary"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"TBINARY"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TCOMPACT")," or ",Object(n.b)("br",null),"\n",Object(n.b)("inlineCode",{parentName:"p"},"vnd.apache.thrift.compact"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"TCOMPACT"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TJSON")," or ",Object(n.b)("br",null),"\n",Object(n.b)("inlineCode",{parentName:"p"},"vnd.apache.thrift.json"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"TJSON"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TTEXT")," or ",Object(n.b)("br",null),"\n",Object(n.b)("inlineCode",{parentName:"p"},"vnd.apache.thrift.text"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"TTEXT"))))),Object(n.b)("p",null,"To change the default serialization format from TBINARY to something else, specify it when creating a\n",Object(n.b)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.thrift.ThriftSerializationFormats;\n\nServerBuilder sb = Server.builder();\n// Use TCOMPACT as the default serialization format.\nsb.service("/hello", THttpService.of(new MyHelloService(),\n                                     ThriftSerializationFormats.COMPACT));\n')),Object(n.b)("p",null,"You can also choose the list of allowed serialization formats:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = Server.builder();\n// Use TBINARY as the default serialization format.\n// Allow TBINARY and TCOMPACT only.\nsb.service("/hello", THttpService.of(new MyHelloService(),\n                                     ThriftSerializationFormats.BINARY,\n                                     ThriftSerializationFormats.COMPACT));\n')),Object(n.b)(s,{mdxType:"Warning"},"TTEXT is not designed for efficiency and is recommended to be only used for debugging. It's best to serve from a separate path only accessible internally."),Object(n.b)("h2",{id:"service-multiplexing",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#service-multiplexing","aria-label":"service multiplexing permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Service multiplexing"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService")," supports service multiplexing fully compatible with Apache Thrift ",Object(n.b)("a",{parentName:"p",href:"https://github.com/apache/thrift/blob/400b346db2510fffa06c0ced11105e3618ce5367/lib/java/src/org/apache/thrift/TMultiplexedProcessor.java#L28"},"TMultiplexedProcessor"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> impls = new HashMap<>();\nimpls.put("foo", new MyFooService());\nimpls.put("bar", new MyBarService());\n// Use MyHelloService for non-multiplexed requests.\nimpls.put("", new MyHelloService());\n\nsb.service("/thrift", THttpService.of(impls));\n')),Object(n.b)("h2",{id:"see-also",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/client-thrift"},"Calling a Thrift service"))))}d.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("q1tI"),i=a.n(n),c=a("/94A"),l=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-thrift-mdx-7effad27127004ccef7b.js.map