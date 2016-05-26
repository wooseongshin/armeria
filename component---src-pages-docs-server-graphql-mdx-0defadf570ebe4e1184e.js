(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-graphql"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},qj7H:function(e,a,r){"use strict";r.r(a),r.d(a,"pageTitle",(function(){return c})),r.d(a,"_frontmatter",(function(){return l})),r.d(a,"default",(function(){return m}));var t=r("zLVn"),n=(r("q1tI"),r("7ljp")),i=r("xCMr"),c="Running a GraphQL service",l={},o=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},s=o("Tip"),p=o("RequiredDependencies"),h={pageTitle:c,_frontmatter:l},d=i.a;function m(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(n.b)(d,Object.assign({},h,r,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"running-a-graphql-service",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#running-a-graphql-service","aria-label":"running a graphql service permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Running a GraphQL service"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#graphqlservice"},"GraphqlService")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#blocking-service-implementation"},"Blocking service implementation"))),Object(n.b)(s,{mdxType:"Tip"},Object(n.b)("p",null,"Visit ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),Object(n.b)("p",null,"First, You need the ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-graphql")," dependency:"),Object(n.b)(p,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-graphql"}],mdxType:"RequiredDependencies"}),Object(n.b)("p",null,"Let's assume we have the following ",Object(n.b)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"GraphQL Schema"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  user(id: ID): User\n}\n\ntype User {\n  id: ID\n  name: String\n}\n")),Object(n.b)("p",null,"The schema describes that if a client requests a ",Object(n.b)("inlineCode",{parentName:"p"},"User")," data using the ",Object(n.b)("inlineCode",{parentName:"p"},"ID")," field, the GraphQL server will\nreturn the ",Object(n.b)("inlineCode",{parentName:"p"},"User")," data. The GraphQL engine uses a ",Object(n.b)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/DataFetcher.html"},"DataFetcher"),"\nto resolve the ID and fetch the corresponding object. For the sake of simplicity, let's implement\n",Object(n.b)("inlineCode",{parentName:"p"},"UserDataFetcher")," that stores ",Object(n.b)("inlineCode",{parentName:"p"},"User"),"s in a ",Object(n.b)("inlineCode",{parentName:"p"},"Map"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import graphql.schema.DataFetcher;\nimport graphql.schema.DataFetchingEnvironment;\n\nclass UserDataFetcher implements DataFetcher<User> {\n\n    private final Map<String, User> data = Map.of("1", new User("1", "hero"),\n                                                  "2", new User("2", "human"),\n                                                  "3", new User("3", "droid"));\n\n    @Override\n    public User get(DataFetchingEnvironment environment) throws Exception {\n        final String id = environment.getArgument("id");\n        return data.get(id);\n    }\n}\n')),Object(n.b)(s,{mdxType:"Tip"},Object(n.b)("p",null,"Please note that this is entirely based on ",Object(n.b)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),".")),Object(n.b)("h2",{id:"graphqlservice",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#graphqlservice","aria-label":"graphqlservice permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(n.b)("inlineCode",{parentName:"h2"},"GraphqlService")),Object(n.b)("p",null,"Once you've finished the implementation of the ",Object(n.b)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/DataFetcher.html"},"DataFetcher"),", you need to build a ",Object(n.b)("a",{parentName:"p",href:"type://GraphqlService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/graphql/GraphqlService.html"},"type://GraphqlService")," using\na ",Object(n.b)("a",{parentName:"p",href:"type://GraphqlServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/graphql/GraphqlServiceBuilder.html"},"type://GraphqlServiceBuilder")," and add it to the ",Object(n.b)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.graphql.GraphqlService;\n\nServerBuilder sb = Server.builder();\n...\nsb.service("/graphql",\n           GraphqlService.builder()\n                         .runtimeWiring(c -> {\n                            c.type("Query",\n                                   typeWiring -> typeWiring.dataFetcher("user", new UserDataFetcher()));\n                         })\n                         .build());\n...\nServer server = sb.build();\nserver.start();\n')),Object(n.b)("p",null,"We used ",Object(n.b)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/idl/RuntimeWiring.html"},"RuntimeWiring")," to wire the type with DataFetcher. Please see ",Object(n.b)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/master/schema/#creating-a-schema-using-the-sdl"},"Creating a schema using the SDL")," to find more wiring examples."),Object(n.b)("h2",{id:"blocking-service-implementation",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#blocking-service-implementation","aria-label":"blocking service implementation permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Blocking service implementation"),Object(n.b)("p",null,"Armeria does not run service logic in a separate thread pool by default. If your service implementation\nrequires blocking, either run the individual blocking logic in a thread pool, or set\n",Object(n.b)("a",{parentName:"p",href:"type://GraphqlServiceBuilder#useBlockingTaskExecutor(boolean):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/graphql/GraphqlServiceBuilder.html#useBlockingTaskExecutor(boolean)"},"type://GraphqlServiceBuilder#useBlockingTaskExecutor(boolean)")," to ",Object(n.b)("inlineCode",{parentName:"p"},"true")," so the service runs in\nall service methods and lifecycle callbacks."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = Server.builder();\nsb.service("/graphql",\n           GraphqlService.builder()\n                         .runtimeWiring(c -> {\n                            c.type("Query",\n                                   typeWiring -> typeWiring.dataFetcher("user", new UserDataFetcher()));\n                         })\n                         // All service methods will be run within\n                         // the blocking executor.\n                         .useBlockingTaskExecutor(true)\n                         .build());\n')),Object(n.b)(s,{mdxType:"Tip"},Object(n.b)("p",null,"You can wrap a ",Object(n.b)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/DataFetcher.html"},"DataFetcher")," using ",Object(n.b)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/AsyncDataFetcher.html"},"AsyncDataFetcher")," to run it asynchronously.")))}m.isMDXComponent=!0},xCMr:function(e,a,r){"use strict";var t=r("Wbzz"),n=r("q1tI"),i=r.n(n),c=r("/94A"),l=r("+ejy");a.a=function(e){var a=Object(t.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:a,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-graphql-mdx-0defadf570ebe4e1184e.js.map