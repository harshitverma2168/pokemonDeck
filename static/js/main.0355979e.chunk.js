(this.webpackJsonppokemongo=this.webpackJsonppokemongo||[]).push([[0],{18:function(e,n,a){e.exports=a(46)},23:function(e,n,a){},24:function(e,n,a){},25:function(e,n,a){},26:function(e,n,a){},27:function(e,n,a){},46:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(11),i=a.n(r),c=(a(23),a(12)),m=a(13),s=a(16),l=a(14),u=a(17),d=(a(24),a(25),a(26),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"pokemon",className:"image",src:"https://img.pokemondb.net/artwork/".concat(e.pokemon.name,".jpg")}),o.a.createElement("h1",{className:"txt"},e.pokemon.name),o.a.createElement("p",null,e.pokemon.generation))}),p=function(e){return o.a.createElement("div",{className:"card-list"},e.pokemon.map((function(e){return o.a.createElement(d,{key:e.id,pokemon:e})})))},h=(a(27),function(e){var n=e.placeholder,a=e.changeHandler;return o.a.createElement("input",{type:"text",className:"search",placeholder:n,onChange:a})}),g=a(15),k=a.n(g),f=function(e){function n(e){var a;return Object(c.a)(this,n),(a=Object(s.a)(this,Object(l.a)(n).call(this,e))).pokemonArray=[{id:1,name:"charizard",generation:"Generation3"},{id:2,name:"golem",generation:"Generation1"},{id:3,name:"snorlax",generation:"Generation1"},{id:4,name:"machop",generation:"Generation2"},{id:5,name:"geodude",generation:"Generation1"},{id:6,name:"bulbasaur",generation:"Generation1"},{id:7,name:"raichu",generation:"Generation2"},{id:8,name:"sandshrew",generation:"Genertion1"},{id:9,name:"pikachu",generation:"Generation1"},{id:10,name:"venusaur",generation:"Generation3"},{id:11,name:"ivysaur",generation:"Generation2"},{id:12,name:"charmander",generation:"Generation1"},{id:13,name:"charmeleon",generation:"Generation2"},{id:14,name:"squirtle",generation:"Generation1"},{id:15,name:"wartortle",generation:"Generation2"},{id:16,name:"blastoise",generation:"Generation3"},{id:17,name:"rattata",generation:"Generation1"}],a.state={pokemon:[],searchFeild:""},a}return Object(u.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://localhost:300/pokemon").then((function(n){return e.setState({pokemon:n.data})})).catch((function(){return e.setState({pokemon:e.pokemonArray})}))}},{key:"render",value:function(){var e=this,n=this.state,a=n.pokemon,t=n.searchFeild,r=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.generation.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("img",{className:"pokeText",alt:"pokemon",src:"https://miro.medium.com/max/1920/1*UNMAo8su_wbOENW8cjcEiw.png"})),o.a.createElement(h,{placeholder:"search pokemon",changeHandler:function(n){return e.setState({searchFeild:n.target.value})}}),o.a.createElement(p,{pokemon:r}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0355979e.chunk.js.map