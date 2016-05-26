(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-graphql"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},BLYt:function(e,r,a){"use strict";a.r(r),a.d(r,"pageTitle",(function(){return c})),a.d(r,"_frontmatter",(function(){return l})),a.d(r,"default",(function(){return h}));var t,o=a("zLVn"),i=(a("q1tI"),a("7ljp")),n=a("xCMr"),c="Configuring CORS",l={},s=(t="Tip",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={pageTitle:c,_frontmatter:l},d=n.a;function h(e){var r=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object.assign({},p,a,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"configuring-cors",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#configuring-cors","aria-label":"configuring cors permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Configuring CORS"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#allowing-any-origin"},"Allowing any origin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#allowing-specific-origins"},"Allowing specific origins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#applying-different-policies-for-different-origins"},"Applying different policies for different origins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#applying-a-policy-to-the-specific-paths"},"Applying a policy to the specific paths")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#configuring-cors-via-annotation"},"Configuring CORS via annotation"))),Object(i.b)("p",null,"Armeria provides a way to configure Cross-origin resource sharing (CORS) policy for specific origins or\nany origin via ",Object(i.b)("a",{parentName:"p",href:"type://CorsServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsServiceBuilder.html"},"type://CorsServiceBuilder"),". For more information about CORS,\nvisit ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"Wikipedia's CORS page"),"."),Object(i.b)("h2",{id:"allowing-any-origin",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#allowing-any-origin","aria-label":"allowing any origin permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Allowing any origin"),Object(i.b)("p",null,"To configure CORS Service allowing any origin (*), use ",Object(i.b)("a",{parentName:"p",href:"type://CorsService#builderForAnyOrigin():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsService.html#builderForAnyOrigin()"},"type://CorsService#builderForAnyOrigin()"),", e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpMethod;\nimport com.linecorp.armeria.server.HttpService;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.cors.CorsService;\n\nHttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builderForAnyOrigin()\n                   .allowCredentials()\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(i.b)("h2",{id:"allowing-specific-origins",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#allowing-specific-origins","aria-label":"allowing specific origins permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Allowing specific origins"),Object(i.b)("p",null,"To configure CORS Service allowing specific origins, use ",Object(i.b)("inlineCode",{parentName:"p"},"CorsService.builder()"),", e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'HttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   .allowCredentials()\n                   .allowNullOrigin() // \'Origin: null\' will be accepted.\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(i.b)("h2",{id:"applying-different-policies-for-different-origins",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#applying-different-policies-for-different-origins","aria-label":"applying different policies for different origins permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Applying different policies for different origins"),Object(i.b)("p",null,"To configure different policies for different groups of origins, use ",Object(i.b)("inlineCode",{parentName:"p"},"andForOrigins()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"andForOrigin()"),"\nmethod which creates a new ",Object(i.b)("a",{parentName:"p",href:"type://ChainedCorsPolicyBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/ChainedCorsPolicyBuilder.html"},"type://ChainedCorsPolicyBuilder")," with the specific origins.\nCall ",Object(i.b)("inlineCode",{parentName:"p"},"and()")," to return to ",Object(i.b)("a",{parentName:"p",href:"type://CorsServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsServiceBuilder.html"},"type://CorsServiceBuilder")," once you are done with building a policy, e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'HttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   .allowCredentials()\n                   .allowNullOrigin() // \'Origin: null\' will be accepted.\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .maxAge(3600)\n                   .andForOrigins("http://example2.com")\n                   .allowCredentials()\n                   .allowRequestMethods(HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header2")\n                   .exposeHeaders("expose_header_3", "expose_header_4")\n                   .and()\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(i.b)("p",null,"You can also directly add a ",Object(i.b)("a",{parentName:"p",href:"type://CorsPolicy:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsPolicy.html"},"type://CorsPolicy")," created by a ",Object(i.b)("a",{parentName:"p",href:"type://CorsPolicyBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsPolicyBuilder.html"},"type://CorsPolicyBuilder"),", e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.cors.CorsPolicyBuilder;\n\nHttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   .allowCredentials()\n                   .allowNullOrigin() // \'Origin: null\' will be accepted.\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .maxAge(3600)\n                   .addPolicy(CorsPolicy.builder("http://example2.com")\n                                        .allowCredentials()\n                                        .allowRequestMethods(HttpMethod.GET)\n                                        .allowRequestHeaders("allow_request_header2")\n                                        .exposeHeaders("expose_header_3", "expose_header_4")\n                                        .build())\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(i.b)("h2",{id:"applying-a-policy-to-the-specific-paths",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#applying-a-policy-to-the-specific-paths","aria-label":"applying a policy to the specific paths permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Applying a policy to the specific paths"),Object(i.b)("p",null,"To configure a policy to the specific paths, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"route()")," methods in the\n",Object(i.b)("a",{parentName:"p",href:"type://CorsServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsServiceBuilder.html"},"type://CorsServiceBuilder")," and ",Object(i.b)("a",{parentName:"p",href:"type://ChainedCorsPolicyBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/ChainedCorsPolicyBuilder.html"},"type://ChainedCorsPolicyBuilder"),". They can help you to adjust the scope that\na policy is applied to, e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'HttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   // CORS policy will be applied for the path that starts with \'/message/web/api/\'.\n                   .route("prefix:/message/web/api/")\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .newDecorator();\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(i.b)(s,{mdxType:"Tip"},Object(i.b)("p",null,"Please refer to the ",Object(i.b)("a",{parentName:"p",href:"type://Route:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html"},"type://Route")," in order to learn how to specify a path pattern.")),Object(i.b)("h2",{id:"configuring-cors-via-annotation",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#configuring-cors-via-annotation","aria-label":"configuring cors via annotation permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Configuring CORS via annotation"),Object(i.b)("p",null,"You can also configure CORS for ",Object(i.b)("a",{parentName:"p",href:"/docs/server-annotated-service"},"Annotated services")," using the\n",Object(i.b)("a",{parentName:"p",href:"type://@CorsDecorator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/decorator/CorsDecorator.html"},"type://@CorsDecorator")," annotation, e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.annotation.AdditionalHeader;\nimport com.linecorp.armeria.server.annotation.Get;\nimport com.linecorp.armeria.server.annotation.decorator.CorsDecorator;\n\nObject annotatedService = new Object() {\n    @Get("/get")\n    @CorsDecorator(origins = "http://example.com", credentialsAllowed = true,\n                   nullOriginAllowed = true, exposedHeaders = "expose_header",\n                   allowedRequestMethods = HttpMethod.GET, allowedRequestHeaders = "allow_header",\n                   preflightResponseHeaders = {\n                       @AdditionalHeader(name = "preflight_header", value = "preflight_value")\n                   })\n    // In case you want to configure different CORS policies for different origins.\n    @CorsDecorator(origins = "http://example2.com", credentialsAllowed = true)\n    public HttpResponse get() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n\n    @Post("/post")\n    // In case you want to allow any origin (*):\n    @CorsDecorator(origins = "*", exposedHeaders = "expose_header")\n    // You can not add a policy after adding the decorator allowing any origin (*).\n    public HttpResponse post() {\n        return HttpResponse.of(HttpStatus.OK)\n    }\n};\n\nServer s = Server.builder()\n                 .annotatedService("/example", annotatedService)\n                 .build();\n')),Object(i.b)("p",null,"You can also use ",Object(i.b)("a",{parentName:"p",href:"type://@CorsDecorator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/decorator/CorsDecorator.html"},"type://@CorsDecorator")," at the class level to apply the decorator to all service methods in the class.\nNote that the ",Object(i.b)("a",{parentName:"p",href:"type://@CorsDecorator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/decorator/CorsDecorator.html"},"type://@CorsDecorator")," annotation specified at the method level takes precedence over what's specified\nat the class level:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'// This decorator will be ignored for the path "/post".\n@CorsDecorator(origins = "http://example.com", credentialsAllowed = true)\nclass MyAnnotatedService {\n    @Get("/get")\n    public HttpResponse get() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n\n    @Post("/post")\n    @CorsDecorator(origins = "http://example2.com", credentialsAllowed = true)\n    public HttpResponse post() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n}\n')),Object(i.b)("p",null,"If you want to allow a CORS policy to the specific paths, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"pathPatterns")," property:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'// This policy will be applied only to the paths matched by the pattern.\n@CorsDecorator(origins = "http://example.com", pathPatterns = "glob:/**/web/api", credentialsAllowed = true)\nclass MyAnnotatedService {\n    ...\n}\n')))}h.isMDXComponent=!0},xCMr:function(e,r,a){"use strict";var t=a("Wbzz"),o=a("q1tI"),i=a.n(o),n=a("/94A"),c=a("+ejy");r.a=function(e){var r=Object(t.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:r,index:n,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-cors-mdx-c9525c76900f30ec9024.js.map