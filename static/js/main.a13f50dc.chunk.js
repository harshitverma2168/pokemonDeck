(this.webpackJsonppokemongo=this.webpackJsonppokemongo||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(13),n(3)),l=n(4),s=n(6),m=n(5),u=n(7),h=(n(14),n(15),n(16),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"pokemon",src:"https://robohash.org/".concat(e.pokemon.id,"?set=set2")}),a.a.createElement("h1",null,e.pokemon.name),a.a.createElement("h3",null,e.pokemon.email))}),p=function(e){return a.a.createElement("div",{className:"card-list"},e.pokemon.map((function(e){return a.a.createElement(h,{key:e.id,pokemon:e})})))},d=(n(17),function(e){var t=e.placeholder,n=e.changeHandler;return a.a.createElement("input",{type:"text",className:"search",placeholder:t,onChange:n})}),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={pokemon:[],searchFeild:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({pokemon:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.pokemon,o=t.searchFeild,r=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("img",{className:"pokeText",alt:"pokemon",src:"https://miro.medium.com/max/1920/1*UNMAo8su_wbOENW8cjcEiw.png"})),a.a.createElement(d,{placeholder:"search pokemon",changeHandler:function(t){return e.setState({searchFeild:t.target.value})}}),a.a.createElement(p,{pokemon:r}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a13f50dc.chunk.js.map