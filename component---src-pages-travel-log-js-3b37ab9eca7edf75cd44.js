(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(135),o=a(142),c=a(139);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Travel Log"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},135:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(134),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(136),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},136:function(e,t,a){var n;e.exports=(n=a(137))&&n.default||n},137:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(46),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},138:function(e,t,a){e.exports=a.p+"static/profile-b0a3d29c11fa7e64f2362936649f9882.png"},139:function(e,t,a){"use strict";var n=a(140),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(143),u=a.n(s),l=a(135);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Jayanth Kanugo",description:"Frontend web developer, Activist, Bibilophile",author:"@gatsbyjs"}}}}},141:function(e){e.exports={data:{site:{siteMetadata:{title:"Jayanth Kanugo"}}}}},142:function(e,t,a){"use strict";var n=a(141),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(135),u=a(138),l=a.n(u),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement(s.Link,{to:"/"}," ",i.a.createElement("div",{style:{margin:0,display:"flex",alignContent:"baseline"}},i.a.createElement("img",{style:{order:"1",borderRadius:"50%",height:"50px",width:"50px"},src:l.a}),i.a.createElement("h1",{style:{marginLeft:"2%",order:"2"}},t)))))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var p=d,m=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})};m.propTypes={children:c.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-travel-log-js-3b37ab9eca7edf75cd44.js.map