(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),i=a("aOgs"),c=a("q1tI"),r=a.n(c),o=a("7ljp"),m=a("pD55"),p=a("8Aig"),s=a("ReZb"),b=a("GCVy"),d=a("+6vE");var h=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var u=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=a("gnlW"),y=a("mwnC"),O=a("/Rw0"),g=a("dVM4"),j=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,a=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:a+1}):null)})))}N.defaultProps={depth:0};var v=N,E=a("MfeC");function w(e){var t=E.a.getPath(e.location.pathname),a=E.a.getVariantAndPage(e.root,t);if(!a)return null;var n=E.a.getVariantsForPage(e.root,a.page),i=[],c=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(c=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,c.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=w,x=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,c=a.frontmatter,j=c.title,N=c.description,w=c.status,A=c.source,D=c.additionalContributors,z=void 0===D?[]:D,H=E.a.getVariantRoot(n.pathname);return r.a.createElement(o.a,{components:{Index:s.a,Note:b.a,Prompt:h,PromptReply:u,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:j,description:N}),r.a.createElement(p.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),N))),null!=H?r.a.createElement(S,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:n})):null),a.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:a.tableOfContents.items})):null,r.a.createElement(T,null,w||A?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(g.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),A?r.a.createElement(O.a,{href:A}):null):null,a.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},YkAq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("O6H6"),c={},r={_frontmatter:c},o=i.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(o,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm cache add <tarball file>\nnpm cache add <folder>\nnpm cache add <tarball url>\nnpm cache add <git url>\nnpm cache add <name>@<version>\nnpm cache clean [<key>]\nnpm cache ls [<name>@<version>]\nnpm cache verify\n")),Object(l.b)("p",null,"Note: This command is unaware of workspaces."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Used to add, list, or clean the npm cache folder."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"add:\nAdd the specified packages to the local cache.  This command is primarily\nintended to be used internally by npm, but it can provide a way to\nadd data to the local installation cache explicitly.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"clean:\nDelete all data out of the cache folder.  Note that this is typically\nunnecessary, as npm's cache is self-healing and resistant to data\ncorruption issues.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"verify:\nVerify the contents of the cache folder, garbage collecting any unneeded\ndata, and verifying the integrity of the cache index and all cached data."))),Object(l.b)("h3",null,"Details"),Object(l.b)("p",null,"npm stores cache data in an opaque directory within the configured ",Object(l.b)("inlineCode",{parentName:"p"},"cache"),",\nnamed ",Object(l.b)("inlineCode",{parentName:"p"},"_cacache"),". This directory is a\n",Object(l.b)("a",{parentName:"p",href:"http://npm.im/cacache"},Object(l.b)("inlineCode",{parentName:"a"},"cacache")),"-based content-addressable cache that\nstores all http request data as well as other package-related data. This\ndirectory is primarily accessed through ",Object(l.b)("inlineCode",{parentName:"p"},"pacote"),", the library responsible\nfor all package fetching as of npm@5."),Object(l.b)("p",null,"All data that passes through the cache is fully verified for integrity on\nboth insertion and extraction. Cache corruption will either trigger an\nerror, or signal to ",Object(l.b)("inlineCode",{parentName:"p"},"pacote")," that the data must be refetched, which it will\ndo automatically. For this reason, it should never be necessary to clear\nthe cache for any reason other than reclaiming disk space, thus why ",Object(l.b)("inlineCode",{parentName:"p"},"clean"),"\nnow requires ",Object(l.b)("inlineCode",{parentName:"p"},"--force")," to run."),Object(l.b)("p",null,"There is currently no method exposed through npm to inspect or directly\nmanage the contents of this cache. In order to access it, ",Object(l.b)("inlineCode",{parentName:"p"},"cacache")," must be\nused directly."),Object(l.b)("p",null,"npm will not remove data by itself: the cache will grow as new packages are\ninstalled."),Object(l.b)("h3",null,"A note about the cache's design"),Object(l.b)("p",null,"The npm cache is strictly a cache: it should not be relied upon as a\npersistent and reliable data store for package data. npm makes no guarantee\nthat a previously-cached piece of data will be available later, and will\nautomatically delete corrupted contents. The primary guarantee that the\ncache makes is that, if it does return data, that data will be exactly the\ndata that was inserted."),Object(l.b)("p",null,"To run an offline verification of existing cache contents, use ",Object(l.b)("inlineCode",{parentName:"p"},"npm cache\nverify"),"."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"cache")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: Windows: ",Object(l.b)("inlineCode",{parentName:"li"},"%LocalAppData%\\npm-cache"),", Posix: ",Object(l.b)("inlineCode",{parentName:"li"},"~/.npm")),Object(l.b)("li",{parentName:"ul"},"Type: Path")),Object(l.b)("p",null,"The location of npm's cache directory. See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-cache"},Object(l.b)("inlineCode",{parentName:"a"},"npm\ncache"))),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/npmrc"},"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-pack"},"npm pack")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://npm.im/cacache"},"https://npm.im/cacache")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://npm.im/pacote"},"https://npm.im/pacote")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://npm.im/@npmcli/arborist"},"https://npm.im/@npmcli/arborist")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://npm.im/make-fetch-happen"},"https://npm.im/make-fetch-happen"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-cache-md-738a5a97dbb7fdd8cb6b.js.map