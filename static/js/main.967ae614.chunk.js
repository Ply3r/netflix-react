(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(8),s=a.n(c),r=a(3),o=a(4),l=a(2),h=a(6),u=a(5),d=a(9),v=(a(15),[[28,"Action"],[12,"Adventure"],[16,"Animation"],[35,"Comedy"],[80,"Crime"],[99,"Documentary"],[18,"Drama"],[10751,"Family"],[14,"Fantasy"],[36,"History"],[27,"Horror"],[10402,"Music"],[9648,"Mystery"],[10749,"Romance"],[878,"Science Fiction"],[10770,"TV Movie"],[53,"Thriller"],[10752,"War"],[37,"Western"]]),g=(a(16),a(0)),j=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=v.map((function(e){return Object(g.jsx)("option",{value:e[0],children:e[1]})})),t=this.props,a=t.search,n=t.types,i=t.formChange;return Object(g.jsxs)("div",{className:"search-container",children:[Object(g.jsxs)("select",{name:"types",id:"search",value:n,onChange:i,children:[Object(g.jsx)("option",{value:"All",children:"Todos"}),e]}),Object(g.jsx)("input",{type:"text",name:"search",value:a,onChange:i,placeholder:"Search films"})]})}}]),a}(n.Component),p=j,m=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).exportSearch=e.exportSearch.bind(Object(l.a)(e)),e.formChange=e.formChange.bind(Object(l.a)(e)),e.state={search:"",types:"All"},e}return Object(o.a)(a,[{key:"exportSearch",value:function(){(0,this.props.searchUpdate)(this.state),this.setState({search:""})}},{key:"formChange",value:function(e){var t=e.target,a=t.name,n=t.value;"types"===a&&(0,this.props.typeUpdate)(n);this.setState(Object(d.a)({},a,n))}},{key:"render",value:function(){var e=this.state,t=e.search,a=e.types;return Object(g.jsxs)("header",{children:[Object(g.jsx)("h1",{children:Object(g.jsx)("a",{className:"titulo-header",href:".",children:"NETFLIX"})}),Object(g.jsxs)("div",{className:"search-header",children:[Object(g.jsx)(p,{search:t,types:a,formChange:this.formChange}),Object(g.jsx)("button",{onClick:this.exportSearch,children:"Buscar"})]})]})}}]),a}(n.Component),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://api.themoviedb.org/3/movie/popular?api_key=cc13dcde48d6e0f1b0d6dc38b6120785&page=1").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(t){return t[e]})).then((function(e){var t=e.id,a=e.original_language,n=e.vote_average,i=e.title,c=e.overview,s=e.poster_path;return{id:t,original_language:a,vote_average:n,title:i,genre_ids:e.genre_ids,overview:c,img:"https://image.tmdb.org/t/p/w500/".concat(s)}}))},f=(a(18),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={title:"",id:"",genre_ids:"",overview:"",img:"",vote_average:"",original_language:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=Math.ceil(20*Math.random());b(t).then((function(t){var a=t.id,n=t.original_language,i=t.vote_average,c=t.title,s=t.genre_ids,r=t.overview,o=t.img;e.setState({title:c,id:a,original_language:n,vote_average:i,genre_ids:s,overview:r,img:o})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.overview,n=e.original_language,i=e.img,c=e.vote_average;return Object(g.jsxs)("section",{className:"firstMovie-section",style:{backgroundImage:"url(".concat(i,")")},children:[Object(g.jsxs)("div",{className:"information-FirstMovie",children:[Object(g.jsx)("h1",{children:t}),Object(g.jsx)("p",{className:"overview",children:a}),Object(g.jsxs)("h2",{children:["Rating: ",Object(g.jsx)("span",{className:"rating",children:c})]}),Object(g.jsxs)("p",{className:"languages",children:["Languages: ",n]})]}),Object(g.jsx)("div",{className:"play-div",children:Object(g.jsx)("button",{className:"play-button",children:"\u25b6"})})]})}}]),a}(n.Component)),O=a(10),x=(a(19),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).showImagem=n.showImagem.bind(Object(l.a)(n)),n.closeImagem=n.closeImagem.bind(Object(l.a)(n)),n.state={showCard:"none"},n}return Object(o.a)(a,[{key:"showImagem",value:function(){this.setState({showCard:"flex"})}},{key:"closeImagem",value:function(){this.setState({showCard:"none"})}},{key:"render",value:function(){var e=this.props,t=e.vote_average,a=e.title,n=e.overview,i=e.img,c=e.id;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{id:c,children:Object(g.jsx)("div",{className:"imagem-defalt",style:{backgroundImage:"url(".concat(i,")")},onClick:this.showImagem})}),Object(g.jsxs)("div",{className:"imagem-hiden",style:{display:this.state.showCard},children:[Object(g.jsx)("div",{className:"imagem-dentro-do-bgl",style:{backgroundImage:"url(".concat(i,")")},children:Object(g.jsx)("p",{onClick:this.closeImagem,className:"close",children:"X"})}),Object(g.jsxs)("div",{className:"description",children:[Object(g.jsx)("h1",{children:a}),Object(g.jsx)("p",{className:"paragrafo",children:n}),Object(g.jsxs)("h2",{children:["Rating: ",Object(g.jsx)("span",{className:"rating",children:t})]})]})]})]})}}]),a}(n.Component)),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cc13dcde48d6e0f1b0d6dc38b6120785&page=".concat(e)).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return e.map((function(e){var t=e.id,a=e.original_language,n=e.vote_average,i=e.title,c=e.overview,s=e.poster_path;return{id:t,original_language:a,vote_average:n,title:i,genre_ids:e.genre_ids,overview:c,img:"https://image.tmdb.org/t/p/w500/".concat(s)}}))}))},w=(a(20),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).prev=n.prev.bind(Object(l.a)(n)),n.next=n.next.bind(Object(l.a)(n)),n.state={movies:"",position:0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.page;y(t).then((function(t){e.setState({movies:t})}))}},{key:"prev",value:function(){var e=this.state.position;e<=60?this.setState({position:0}):this.setState({position:e-70})}},{key:"next",value:function(){var e=this.state.position;e>=170?this.setState({position:225}):this.setState({position:e+70})}},{key:"render",value:function(){var e,t=this.props,a=(t.types,t.search,t.title),n=(t.id,this.state.movies);n.length&&(e=n.map((function(e){var t=e.original_language,a=e.vote_average,n=e.title,i=e.overview,c=e.img;return Object(g.jsx)(x,{title:n,img:c,overview:i,vote_average:a,original_language:t})})));var i=this.state.position;return Object(g.jsxs)("div",{className:"movie-section-container",children:[Object(g.jsx)("h2",{className:"titulo",children:a}),Object(g.jsxs)("div",{className:"section-container",children:[Object(g.jsx)("button",{className:"button left",onClick:this.prev,children:Object(g.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",class:"svg-inline--fa fa-chevron-left fa-w-10",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(g.jsx)("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"})})}),Object(g.jsx)("section",{className:"movie-section",style:{right:"".concat(i,"%")},children:e}),Object(g.jsx)("button",{className:"button right",onClick:this.next,children:Object(g.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-right",class:"svg-inline--fa fa-angle-right fa-w-8",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512",children:Object(g.jsx)("path",{fill:"currentColor",d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"})})})]})]})}}]),a}(n.Component)),_=(a(21),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).addSection=n.addSection.bind(Object(l.a)(n)),n.state={id:5,newSections:[],loading:!1},n}return Object(o.a)(a,[{key:"addSection",value:function(){var e=this.state,t=e.id,a=e.newSections;this.setState({id:t+1,newSections:[].concat(Object(O.a)(a),[Object(g.jsx)(w,{id:"1",title:"Others films:",page:Math.ceil(100*Math.random())})])})}},{key:"render",value:function(){var e=this.state.newSections;return Object(g.jsxs)("section",{className:"movies-sections-container-movielist",children:[Object(g.jsx)(w,{id:"1",title:"Top rated:",page:Math.ceil(100*Math.random())}),Object(g.jsx)(w,{id:"2",title:"You might like:",page:Math.ceil(100*Math.random())}),Object(g.jsx)(w,{id:"3",title:"Others like'd:",page:Math.ceil(100*Math.random())}),Object(g.jsx)(w,{id:"4",title:"More films:",page:Math.ceil(100*Math.random())}),e,Object(g.jsx)("button",{className:"bot-add-new-films",onClick:this.addSection,children:Object(g.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus-square",class:"svg-inline--fa fa-plus-square fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(g.jsx)("path",{fill:"currentColor",d:"M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"})})})]})}}]),a}(n.Component)),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://api.themoviedb.org/3/search/multi?api_key=cc13dcde48d6e0f1b0d6dc38b6120785&language=en-US&page=".concat(t,"&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return e.map((function(e){var t=e.id,a=e.original_language,n=e.vote_average,i=e.title,c=e.overview,s=e.poster_path,r=e.genre_ids;return s?{id:t,original_language:a,vote_average:n,title:i,genre_ids:r,overview:c,img:"https://image.tmdb.org/t/p/w500/".concat(s)}:{id:t,original_language:a,vote_average:n,title:i,genre_ids:r,overview:c,img:null}}))}))},C=(a(22),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(r.a)(this,a);var i=(n=t.call(this,e)).props.query;return n.addItem=n.addItem.bind(Object(l.a)(n)),n.getNewComponent=n.getNewComponent.bind(Object(l.a)(n)),n.updateMovies=n.updateMovies.bind(Object(l.a)(n)),n.state={query:i,page:1,currentComponent:void 0,movies:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.query;this.getNewComponent()}},{key:"getNewComponent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this.props.query,n=this.state.movies;a?k(a,t).then((function(t){e.setState({movies:n.concat(t)})})):y(t).then((function(t){e.setState({movies:n.concat(t)})}))}},{key:"updateMovies",value:function(){var e=this,t=this.props.query;k(t).then((function(t){e.setState({movies:t})}))}},{key:"shouldComponentUpdate",value:function(e){var t=e.query;return t!==this.state.query&&(this.setState({page:1,query:t,currentComponent:void 0,movies:[]}),this.updateMovies()),!0}},{key:"addItem",value:function(){var e=this.state.page;this.setState({page:e+1}),this.getNewComponent(e+1)}},{key:"render",value:function(){var e,t=this.props,a=t.types,n=t.query,i=this.state.movies;return i.length&&("All"!==a&&(i=i.filter((function(e){var t=e.genre_ids;return t?t.includes(parseInt(a)):""}))),e=(i=i.filter((function(e){return e.img}))).map((function(e){var t=e.vote_average,a=e.title,n=e.overview,i=e.img,c=e.id;return Object(g.jsx)(x,{className:"movie-card",id:c,title:a,img:i,overview:n,vote_average:t})}))),Object(g.jsxs)("div",{className:"content-grid",children:[Object(g.jsxs)("h1",{className:"titulo-busca",children:["Busca por ",n,":"]}),Object(g.jsxs)("section",{className:"result-search-grid",children:[e,Object(g.jsx)("button",{className:"bot-add-new-films",onClick:this.addItem,children:Object(g.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus-square",class:"svg-inline--fa fa-plus-square fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(g.jsx)("path",{fill:"currentColor",d:"M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"})})})]})]})}}]),a}(n.Component)),N=C,S=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).searchUpdate=n.searchUpdate.bind(Object(l.a)(n)),n.typeUpdate=n.typeUpdate.bind(Object(l.a)(n)),n.state={search:"",types:"All"},n}return Object(o.a)(a,[{key:"searchUpdate",value:function(e){var t=e.search;this.setState({search:t})}},{key:"typeUpdate",value:function(e){this.setState({types:e})}},{key:"render",value:function(){var e=this.state,t=e.types,a=e.search;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m,{searchUpdate:this.searchUpdate,typeUpdate:this.typeUpdate}),Object(g.jsx)(f,{}),"All"!==t||a?Object(g.jsx)(N,{query:a,types:t}):Object(g.jsx)(_,{})]})}}]),a}(n.Component);a(23);s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.967ae614.chunk.js.map