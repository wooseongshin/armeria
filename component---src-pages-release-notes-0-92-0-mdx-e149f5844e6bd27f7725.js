(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),i=a("q1tI"),r=a.n(i),s=a("2+3N"),l=a("1lec"),c=a("+ejy"),o=a("+9zj"),b=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(l).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var i=Object(o.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},aXMD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n,i=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("JkCF"),l={},c=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o={_frontmatter:l},b=s.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"23rd September 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can now easily get the request URI using ",Object(r.b)("inlineCode",{parentName:"li"},"RequestHeaders.uri()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"HttpRequest.uri()"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2092"},"#2092"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'RequestHeaders headers = RequestHeaders.of(HttpMethod.GET, "/foo",\n                                           HttpHeaderNames.SCHEME, "https",\n                                           HttpHeaderNames.AUTHORITY, "example.com"));\nassert headers.uri().equals(URI.create("https://example.com/foo"));\nassert HttpRequest.of(header).uri() == headers.uri();\n'))),Object(r.b)("li",{parentName:"ul"},"You can now decorate the ",Object(r.b)("inlineCode",{parentName:"li"},"Runnable")," of the ",Object(r.b)("inlineCode",{parentName:"li"},"Thread")," created using ",Object(r.b)("inlineCode",{parentName:"li"},"ThreadFactoryBuilder"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2047"},"#2047")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2067"},"#2067"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ThreadFactories.builder(...)\n               .eventLoop(true)\n               .daemon(true)\n               .priority(...)\n               .taskFunction(task -> {\n                   // Specify your logic here so it's executed before the Runnable.\n                   task.run();\n                   // Specify your logic here so it's executed after the Runnable.\n               })\n               .build();\n"))),Object(r.b)("li",{parentName:"ul"},"You can now configure ",Object(r.b)("inlineCode",{parentName:"li"},"Server")," using ",Object(r.b)("inlineCode",{parentName:"li"},"Consumer<ServerBuilder>")," as well as ",Object(r.b)("inlineCode",{parentName:"li"},"ArmeriaServerConfigurator")," when integrating with Spring Boot. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2070"},"#2070"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic Consumer<ServerBuilder> customizer() {\n    return sb -> sb.port(...)\n                   ...\n                   .service(...);\n}\n"))),Object(r.b)("li",{parentName:"ul"},"You can now set example requests using ",Object(r.b)("inlineCode",{parentName:"li"},"AnnotatedServiceRegistrationBean"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1855"},"#1855")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2026"},"#2026"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic AnnotatedServiceRegistrationBean okService() {\n    return new AnnotatedServiceRegistrationBean()\n            .setServiceName("myAnnotatedService")\n            .setPathPrefix("/my_service")\n            .setService(new MyAnnotatedService())\n            .setExampleRequests(Lists.of(\n                    AnnotatedExampleRequest.of("myMethod", "{\\"foo\\":\\"bar\\"}")));\n}\n'))),Object(r.b)("li",{parentName:"ul"},"You can be aware of whether the response content is empty from an HTTP status code. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2058"},"#2058"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"HttpStatus status = ...\nif (!status.isContentAlwaysEmpty()) {\n    // We may have a body!\n}\n"))),Object(r.b)("li",{parentName:"ul"},"You can use ",Object(r.b)("inlineCode",{parentName:"li"},"SettableHealthIndicator")," for health check responses when using Spring boot autoconfigure. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2088"},"#2088"))),Object(r.b)("h2",{id:"improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You will see the doc service automatically scrolls down to the debug form if the URL contains a request. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1682"},"#1682")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2045"},"#2045")),Object(r.b)("li",{parentName:"ul"},"The performance for parsing a struct context in Thrift is improved, thanks to the ",Object(r.b)("a",{parentName:"li",href:"https://openjdk.java.net/jeps/259"},"Stack-Walking API")," in Java 9. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1686"},"#1686")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2055"},"#2055")),Object(r.b)("li",{parentName:"ul"},"You will see the int values of Enum members if they have in doc service. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1966"},"#1966")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2015"},"#2015")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContext")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"RequestLog")," is used for trace parsing and sampling. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2038"},"#2038"))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can now get the gRPC web trailers in the client. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2030"},"#2030")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2076"},"#2076")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("a",{parentName:"li",href:"https://www.baeldung.com/spring-boot-actuators"},"actuator")," now responds with the correct Spring boot content type. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2061"},"#2061")),Object(r.b)("li",{parentName:"ul"},"The blocking stub in gRPC now can read messages. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2065"},"#2065")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2066"},"#2066")),Object(r.b)("li",{parentName:"ul"},"The listeners for ",Object(r.b)("inlineCode",{parentName:"li"},"EndpointGroup")," are notified after the first health check even when all endpoints are unhealthy. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2074"},"#2074")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2075"},"#2075")),Object(r.b)("li",{parentName:"ul"},"The subscriber who subscribes to the ",Object(r.b)("inlineCode",{parentName:"li"},"Response")," from a ",Object(r.b)("inlineCode",{parentName:"li"},"WebClient")," gets notified when it's complete. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2080"},"#2080")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2087"},"#2087")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IllegalStateException")," that indicates the log should have at least one child is no longer raised when retrying. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2082"},"#2082")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2083"},"#2083")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DefaultEventLoopScheduler")," respects ",Object(r.b)("inlineCode",{parentName:"li"},"maxNumEventLoopsPerHttpHttp1Endpoint")," set from ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryBuilder"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2086"},"#2086"))),Object(r.b)("h2",{id:"deprecation",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#deprecation","aria-label":"deprecation permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"EventLoopThreadFactory")," has been deprecated in favor of ",Object(r.b)("inlineCode",{parentName:"li"},"ThreadFactories"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2067"},"#2067"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'ThreadFactory factory = ThreadFactories.builder("myThread")\n                                       .eventLoop(true)\n                                       .build();\n')))),Object(r.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Specifying an ",Object(r.b)("inlineCode",{parentName:"p"},":authority")," header in a request has no effect anymore. The current ",Object(r.b)("inlineCode",{parentName:"p"},"Endpoint")," always determines the authority. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2092"},"#2092")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// This does NOT work anymore.\nfinal HttpClient client = HttpClient.of("https://127.0.0.1:8080/");\nclient.execute(RequestHeaders.of(HttpMethod.GET, "/",\n                                 HttpHeaderNames.AUTHORITY, "foo.com"));\n// This works.\nfinal HttpClient client =\n        HttpClient.of(SessionProtocol.HTTPS,\n                      Endpoint.of("foo.com", 8080).withIpAddr("127.0.0.1"));\nclient.get("/");\n')),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Instead, you can now use ",Object(r.b)("inlineCode",{parentName:"p"},"ClientOption.HTTP_HEADERS")," or ",Object(r.b)("inlineCode",{parentName:"p"},"{Client,Service}RequestContext.additional{Request,Response}{Headers,Trailers}()")," to override the existing headers, including ",Object(r.b)("inlineCode",{parentName:"p"},":authority"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2092"},"#2092")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// This works.\nfinal HttpHeaders customHeaders =\n        HttpHeaders.of(HttpHeaderNames.AUTHORITY, "foo.com");\nfinal HttpClient client =\n        HttpClient.of("http://127.0.0.1:8080/",\n                      ClientOption.HTTP_HEADERS.newValue(customHeaders));\nclient.get("/");\n\n// This also works.\nfinal HttpClient client = HttpClient.of("http://127.0.0.1:8080/");\ntry (SafeCloseable ignored = Clients.withHttpHeader(\n             HttpHeaderNames.AUTHORITY, "foo.com")) {\n    client.get("/");\n}\n'))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ExceptionHandlerFunction.handleExeption()")," accepts ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceRequestContext")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"RequestContext"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2060"},"#2060")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You don't have to downcast anymore. :)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"GrpcServiceRegistrationBean.ExampleRequest")," has been removed. Use ",Object(r.b)("inlineCode",{parentName:"p"},"GrpcExampleRequest"),"."))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Micrometer 1.2.0 -> 1.2.1"),Object(r.b)("li",{parentName:"ul"},"Netty 4.1.39.Final -> 4.1.41.Final"),Object(r.b)("li",{parentName:"ul"},"Tomcat 9.0.24 -> 9.0.26",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Tomcat8 8.5.43 -> 8.5.45")))),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),Object(r.b)(c,{usernames:["andrewoma","anirudhr95","anuraaga","codefromthecrypt","eugene70","heowc","hirakida","ikhoon","imasahiro","jyblue","kojilin","minwoox","moonchanyong","SooJungDev","taejs","trustin","Waynefn"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-92-0-mdx-e149f5844e6bd27f7725.js.map