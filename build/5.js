(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{386:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var n,c,r,l,i,o,s,m,u,g,p,d,E,h,f,x=a(62),b=a.n(x),v=a(52),$=a.n(v),y=a(119),w=a.n(y),k=a(120),C=a.n(k),R=a(121),N=a.n(R),O=a(122),I=a.n(O),F=a(0),L=a.n(F),U=a(6),_=a(85),j=a(38),B=a(53),M=a(70),A=a(64),S=a.n(A),D=a(165),q=a.n(D),V=a(39),z=a.n(V),H=(a(164),n=function(e){function l(){var e,t;b()(this,l);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=w()(this,(e=C()(l)).call.apply(e,[this].concat(n))),S()(t,"coin",c,q()(t)),t}return N()(l,e),$()(l,[{key:"updateCanvas",value:function(m){var t=this;if(m){m.style.width="100%",m.style.height="100%",m.width=m.offsetWidth,m.height=m.offsetHeight;var r=m.getContext("2d"),l=new Image;l.src="/src/img/portal.png";var u=new Image;u.src=M.a.base_image+"1iu0GFaJQ0UsSN8yYWi77VY1cXsQpM4o7",u.onload=function(){r.drawImage(u,0,0),function(){var e=new Image;e.src=M.a.base_image+"0B6oyUfwoM3u1LWtvNUZ2NVdjTGc",e.onload=function(){r.drawImage(e,50,350)};var t=new Image;t.src=M.a.base_image+"0B6oyUfwoM3u1bFVIclZscHlHTVE",t.onload=function(){r.drawImage(t,m.width-300,350)};var a=new Image;a.src=M.a.base_image+"0B6oyUfwoM3u1YzNhLUdSMHlmdFE",a.onload=function(){r.drawImage(a,m.width-350,l.height+10)};var n=new Image;n.src=M.a.base_image+"0B6oyUfwoM3u1MVVqQlpqYldsVDQ",n.onload=function(){r.drawImage(n,50,l.height+10)}}(),r.drawImage(l,m.width/2-l.width/2,0)};var e=new Image;this.coin=function(e){var r={},l=0,c=0,t=0,a=e.ticksPerFrame||0,n=e.frames||1,i=e.w_frames||1,o=e.h_frames||1;r.context=e.context,r.width=e.width,r.height=e.height,r.image=e.image;var s=0;return r.update=function(){a<(t+=1)&&(t=0,l+1<i?l+=1:(l=0,c+=1),n<++s+1&&(s=c=l=0))},r.render=function(){var e=r.width/i,t=r.height/o,a=m.width/2-e/2,n=m.height/2-t/2;r.context.clearRect(a,n,e,t),r.context.drawImage(u,a,n,e,t,a,n,e,t),r.context.drawImage(r.image,e*l,t*c,e,t,a,n,e,t)},r}({context:m.getContext("2d"),width:448,height:448,image:e,w_frames:7,h_frames:7,frames:47,ticksPerFrame:4}),e.addEventListener("load",function e(){t.coin&&(window.requestAnimationFrame(e),t.coin.update(),t.coin.render())}),e.src=M.a.base_image+"0B6oyUfwoM3u1cC1vaGVkU1J1ZzQ"}}},{key:"render",value:function(){return L.a.createElement(F.Fragment,null,L.a.createElement("canvas",{ref:this.updateCanvas.bind(this),height:"600px"}))}}]),l}(L.a.Component),c=z()(n.prototype,"coin",[U.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),n),T=a(379),G=a.n(T),P=a(123),Q=a.n(P),W=a(63),J=a(35),Y=Object(_.a)(function(e,t,a){return t})(o=Object(_.b)((s=function(e){function a(e){var t;return b()(this,a),t=w()(this,C()(a).call(this,e)),S()(t,"input",m,q()(t)),S()(t,"query",u,q()(t)),t.search=function(e){e.preventDefault(),e.stopPropagation(),t.props.history.push("/portal/Search/?"+encodeURIComponent(t.query)),t.input=t.query},t.query=t.input=decodeURIComponent(t.props.location.search.substr(1)),t}return N()(a,e),$()(a,[{key:"render",value:function(){var t=this;return L.a.createElement("div",{className:"search"},L.a.createElement("form",{onSubmit:this.search},L.a.createElement("input",{type:"text",value:this.query,autoFocus:!0,onChange:function(e){return t.query=e.target.value}}),L.a.createElement("button",{type:"submit"},L.a.createElement(J.n,null))),L.a.createElement(Z,{string:this.input}))}}]),a}(L.a.Component),m=z()(s.prototype,"input",[U.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=z()(s.prototype,"query",[U.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=s))||o)||o,Z=Object(_.a)(function(e,t,a){return t})(r=Object(_.b)((l=function(e){function t(){var e;return b()(this,t),e=w()(this,C()(t).call(this)),S()(e,"loaded",i,q()(e)),e.filter=new Q.a("filter.db"),e}return N()(t,e),$()(t,[{key:"render",value:function(){var e=this;if(0==this.loaded)return M.a.LoadDB([{portal:"attacks"},{portal:"battlegear"},{portal:"creatures"},{portal:"locations"},{portal:"mugic"},{cards:"attacks"},{cards:"battlegear"},{cards:"creatures"},{cards:"locations"},{cards:"mugic"}]).then(function(){e.loaded=!0}),L.a.createElement("span",null,"Loading...");var t=this.props.string;if(""==t)return L.a.createElement("div",{style:{minHeight:"50px"}});function a(e,t){var a="/portal";switch(e.gsx$type){case"Attacks":a+="/Attacks/"+encodeURIComponent(e.gsx$name);break;case"Battlegear":a+="/Battlegear/"+encodeURIComponent(e.gsx$name);break;case"Creatures":a+="/Creatures/"+encodeURIComponent(e.gsx$name);break;case"Locations":a+="/Locations/"+encodeURIComponent(e.gsx$name);break;case"Mugic":a+="/Mugic/"+encodeURIComponent(e.gsx$name)}return L.a.createElement("div",{key:t},L.a.createElement(G.a,I()({as:B.b},W.a.link,{to:a}),e.gsx$name),L.a.createElement("br",null))}var n=this.filter.addCollection("filter"),r=n.addDynamicView("filter");r.applySimpleSort("gsx$name");var l,c=M.a.portal.attacks.chain(),i=M.a.portal.battlegear.chain(),o=M.a.portal.creatures.chain(),s=M.a.portal.locations.chain(),m=M.a.portal.mugic.chain();c=c.find({$or:[{gsx$attributes:{$regex:new RegExp(t,"i")}},{gsx$background:{$regex:new RegExp(t,"i")}},{gsx$details:{$regex:new RegExp(t,"i")}}]}),i=i.find({$or:[{gsx$attributes:{$regex:new RegExp(t,"i")}},{gsx$background:{$regex:new RegExp(t,"i")}},{gsx$details:{$regex:new RegExp(t,"i")}}]}),o=o.find({$or:[{gsx$appearance:{$regex:new RegExp(t,"i")}},{gsx$background:{$regex:new RegExp(t,"i")}},{gsx$specialabilities:{$regex:new RegExp(t,"i")}},{gsx$details:{$regex:new RegExp(t,"i")}}]}),s=s.find({$or:[{gsx$localfeatures:{$regex:new RegExp(t,"i")}},{gsx$background:{$regex:new RegExp(t,"i")}},{gsx$details:{$regex:new RegExp(t,"i")}}]}),m=m.find({$or:[{gsx$background:{$regex:new RegExp(t,"i")}},{gsx$details:{$regex:new RegExp(t,"i")}}]}),(l=c.data()).forEach(function(e){delete e.$loki}),n.insert(l),(l=i.data()).forEach(function(e){delete e.$loki}),n.insert(l),(l=o.data()).forEach(function(e){delete e.$loki}),n.insert(l),(l=s.data()).forEach(function(e){delete e.$loki}),n.insert(l),(l=m.data()).forEach(function(e){delete e.$loki}),n.insert(l);var u,g=r.data().map(a);this.filter.removeCollection("filter");var p=[].concat(M.a.portal.attacks.find({gsx$name:{$regex:new RegExp(t,"i")}}),M.a.portal.battlegear.find({gsx$name:{$regex:new RegExp(t,"i")}}),M.a.portal.creatures.find({gsx$name:{$regex:new RegExp(t,"i")}}),M.a.portal.locations.find({gsx$name:{$regex:new RegExp(t,"i")}}),M.a.portal.mugic.find({gsx$name:{$regex:new RegExp(t,"i")}}),M.a.cards.attacks.chain().find({gsx$name:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data(),M.a.cards.battlegear.chain().find({gsx$name:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data(),M.a.cards.locations.chain().find({gsx$name:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data(),M.a.cards.mugic.chain().find({gsx$name:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data()).sort(function(e,t){return(e=e.gsx$name.toLowerCase())<(t=t.gsx$name.toLowerCase())?-1:t<e?1:0}).map(a);if(0==g.length){var d=[].concat(M.a.cards.attacks.chain().find({gsx$artist:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data(),M.a.cards.battlegear.chain().find({gsx$artist:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data(),M.a.cards.creatures.chain().find({gsx$artist:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data(),M.a.cards.locations.chain().find({gsx$artist:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data(),M.a.cards.mugic.chain().find({gsx$artist:{$regex:new RegExp(t,"i")}}).where(function(e){return""!=e.gsx$splash}).data()).sort(function(e,t){return(e=e.gsx$name.toLowerCase())<(t=t.gsx$name.toLowerCase())?-1:t<e?1:0}).map(a);0<d.length?(u="Art contributed by ".concat(t,":"),g=d):u="No Results Found"}else u="Results containing ".concat(t,":");return L.a.createElement("div",{className:"results"},L.a.createElement("hr",null),0<p.length&&L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,"Entries"),p,L.a.createElement("hr",null)),L.a.createElement("div",null,u),g)}}]),t}(L.a.Component),i=z()(l.prototype,"loaded",[U.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),r=l))||r)||r,X=Object(_.a)(function(e,t,a){return t})(g=Object(_.b)((p=function(e){function a(e){var t;return b()(this,a),t=w()(this,C()(a).call(this,e)),S()(t,"loaded",d,q()(t)),t.type=e.type.toLowerCase(),t}return N()(a,e),$()(a,[{key:"scrollLeft",value:function(e){document.getElementsByClassName("bottom_nav")[0].scrollLeft=e}},{key:"render",value:function(){var r=this;if(0==this.loaded)return M.a.LoadDB([{cards:this.type},{portal:this.type}]).then(function(){r.loaded=!0}),L.a.createElement(J.h,null);function l(e,t,a,n){return t?L.a.createElement("div",{key:a},L.a.createElement(G.a,I()({as:B.b,to:n||"/portal/".concat(r.props.type,"/").concat(e.gsx$name)},W.a.link),L.a.createElement("span",null,e.gsx$name.split(",")[0]),L.a.createElement("br",null),L.a.createElement("img",{className:"thumb",src:M.a.base_image+t.gsx$thumb}))):L.a.createElement("div",{key:a})}var e=!0,t="",a=L.a.createElement("div",null),n=[],c=this.props.location.pathname.split("/");if(""==c[c.length-1]&&c.pop(),"creatures"==this.type||"mugic"==this.type){var i=4<=c.length&&M.a.tribes.includes(c[3])?c[3]:null;c.length<3&&(e=!1,a=i?L.a.createElement(j.a,{path:"".concat(this.props.match.url,"/").concat(i,"/:card"),component:this.props.component}):L.a.createElement(j.a,{path:"".concat(this.props.match.url,"/:card"),component:this.props.component})),t=i?"".concat(i," ").concat(this.props.type):this.props.type,n=(i?M.a.portal[this.type].chain().find({gsx$tribe:i}).simplesort("gsx$name").data():M.a.portal[this.type].chain().simplesort("gsx$name").data()).map(function(e,t){var a=M.a.cards[r.type].findOne({gsx$name:e.gsx$name}),n=i?"/portal/".concat(r.props.type,"/").concat(e.gsx$tribe,"/").concat(encodeURIComponent(e.gsx$name)):"/portal/".concat(r.props.type,"/").concat(encodeURIComponent(e.gsx$name));return l(e,a,t,n)})}else c.length<3&&(e=!1,a=L.a.createElement(j.a,{path:"".concat(this.props.match.url,"/:card"),component:this.props.component})),t=this.props.type,n=M.a.portal[this.type].data.sort(function(e,t){return e.gsx$name>t.gsx$name?1:-1}).map(function(e,t){var a=M.a.cards[r.type].findOne({gsx$name:e.gsx$name});return l(e,a,t)});return e?L.a.createElement("div",{className:"entry ".concat(this.type," base_path")},L.a.createElement("div",{className:"cat_title"},t),L.a.createElement("div",{className:"entry_nav"},n)):L.a.createElement("div",{className:"entry ".concat(this.type)},L.a.createElement("div",{className:"entry_content"},a),L.a.createElement("div",{className:"cat_title"},t),L.a.createElement("div",{className:"entry_nav"},n))}}]),a}(L.a.Component),d=z()(p.prototype,"loaded",[U.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=p))||g)||g;function K(e){var t=e.name.split(",");return L.a.createElement(L.a.Fragment,null,L.a.createElement("span",null,t[0]),1<t.length&&L.a.createElement("span",{className:"bigger"},L.a.createElement("br",null),t[1].trim()))}function ee(e){var a=[];return e.artist.split(/(?=, )/).forEach(function(e,t){a.push(L.a.createElement(B.b,{key:t,to:"/portal/Search/?".concat(e.replace(", ",""))},e))}),L.a.createElement("div",{className:"artist"},a)}var te,ae=Object(_.a)(function(e,t,a){return t})(E=Object(_.b)((h=function(e){function l(){var e,t;b()(this,l);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=w()(this,(e=C()(l)).call.apply(e,[this].concat(n))),S()(t,"fullscreen",f,q()(t)),t}return N()(l,e),$()(l,[{key:"expand",value:function(e){this.fullscreen=!0}},{key:"close",value:function(e){this.fullscreen=!1}},{key:"render",value:function(){var e=this.props.card;return L.a.createElement(L.a.Fragment,null,L.a.createElement("div",{className:"modal"+(this.fullscreen?"":" hidden")},L.a.createElement("span",{className:"close",onClick:this.close.bind(this)},"×"),L.a.createElement("img",{className:"modal-content",src:M.a.base_image+e.gsx$splash})),e.gsx$splash&&L.a.createElement("div",{className:"entry_splash"},L.a.createElement("img",{onClick:this.expand.bind(this),src:M.a.base_image+e.gsx$splash})),L.a.createElement("div",{className:"entry_body"},L.a.createElement("div",{className:"title"},L.a.createElement(K,{name:e.gsx$name}),L.a.createElement("hr",null)),this.props.text&&L.a.createElement("div",{className:"nocolumn"},this.props.text),!this.props.text&&L.a.createElement("div",{className:"column"},e.gsx$artist&&L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Artist(s):"),L.a.createElement(ee,{artist:e.gsx$artist})),L.a.createElement("hr",null)),L.a.createElement("div",null,L.a.createElement("strong",null,"Set: "),"".concat(M.a.sets[e.gsx$set]," (").concat(e.gsx$set,")")),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Rarity: "),L.a.createElement(J.m,{set:e.gsx$set,rarity:e.gsx$rarity,notext:"true"})," ",e.gsx$rarity),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Card ID: "),e.gsx$id),this.props.col0&&L.a.createElement(L.a.Fragment,null,L.a.createElement("hr",null),this.props.col0),e.gsx$ability&&L.a.createElement(L.a.Fragment,null,L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Ability:"),L.a.createElement(J.a,{ability:e.gsx$ability}))),e.gsx$flavortext&&L.a.createElement(L.a.Fragment,null,L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Card Flavor:"),L.a.createElement("br",null),e.gsx$flavortext)),this.props.col1&&L.a.createElement(L.a.Fragment,null,L.a.createElement("hr",null),"this.props.col1")),!this.props.text&&L.a.createElement("div",{className:"column"},this.props.col2)))}}]),l}(L.a.Component),f=z()(h.prototype,"fullscreen",[U.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),E=h))||E)||E;function ne(e){var a=[];return e.artist.split(/(?=, )/).forEach(function(e,t){a.push(L.a.createElement(B.b,{key:t,to:"/portal/Search/?".concat(e.replace(", ",""))},e))}),L.a.createElement("div",{className:"ability"},a)}var re,le,ce,ie,oe,se,me,ue,ge=Object(_.a)(function(e,t,a){return t})(te=Object(_.b)(te=function(e){function t(){return b()(this,t),w()(this,C()(t).apply(this,arguments))}return N()(t,e),$()(t,[{key:"render",value:function(){var e=this.props.location.pathname.split("/");""==e[e.length-1]&&e.pop();var t=5<=e.length?decodeURIComponent(e[4]):4==e.length?decodeURIComponent(e[3]):void 0,a=M.a.portal.creatures.findOne({gsx$name:t});if(!a)return L.a.createElement(J.l,{location:this.props.location});for(var n=a.gsx$tribe,r=M.a.cards.creatures.findOne({gsx$name:t}),l=a.gsx$location.split(/[;]+\s*/).map(function(e,t){return L.a.createElement("p",{key:t},L.a.createElement(G.a,I()({as:B.b},W.a.link,{to:"/portal/Locations/"+e}),L.a.createElement("span",null,e)))}),c=a.gsx$battlegear.split(/[;]+\s*/).map(function(e,t){return L.a.createElement("p",{key:t},L.a.createElement(G.a,I()({as:B.b},W.a.link,{to:"/portal/Battlegear/"+e}),L.a.createElement("span",null,e)))}),i=[],o=0;o<r.gsx$mugicability;o++)i.push(L.a.createElement(J.j,{key:o,tribe:n}));return L.a.createElement(ae,{card:r,text:L.a.createElement(L.a.Fragment,null,L.a.createElement("hr",null),a.gsx$appearance&&L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Appearance:"),L.a.createElement("br",null),a.gsx$appearance),L.a.createElement("hr",null)),L.a.createElement("div",null,L.a.createElement("strong",null,"Background:"),L.a.createElement("br",null),a.gsx$background),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Details:"),L.a.createElement("br",null),a.gsx$details),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Favorite Battlegear(s):"),L.a.createElement("br",null),c),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Favorite Location(s):"),L.a.createElement("br",null),l),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Height (ft):"),L.a.createElement("br",null),a.gsx$height),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Special Abilities:"),L.a.createElement("br",null),a.gsx$specialabilities),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Weight (lb):"),L.a.createElement("br",null),a.gsx$weight),L.a.createElement("hr",null),r.gsx$artist&&L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Artist(s):"),L.a.createElement(ne,{artist:r.gsx$artist})),L.a.createElement("hr",null)),L.a.createElement("div",null,L.a.createElement("strong",null,"Card ID: "),r.gsx$id),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Set: "),r.gsx$set),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Rarity: "),r.gsx$rarity),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Tribe: "),L.a.createElement(J.o,{tribe:n})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Ability:"),L.a.createElement("br",null),L.a.createElement(J.a,{ability:r.gsx$ability,tribe:r.gsx$tribe})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Courage: "),r.gsx$courage,L.a.createElement(J.d,{discipline:"courage"})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Power: "),r.gsx$power,L.a.createElement(J.d,{discipline:"power"})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Speed: "),r.gsx$speed,L.a.createElement(J.d,{discipline:"speed"})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Wisdom: "),r.gsx$wisdom,L.a.createElement(J.d,{discipline:"wisdom"})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Energy: "),r.gsx$energy),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Elements: "),L.a.createElement("div",null,L.a.createElement(J.f,{element:"fire",value:0<=r.gsx$elements.toLowerCase().indexOf("fire")})," ",L.a.createElement(J.f,{element:"air",value:0<=r.gsx$elements.toLowerCase().indexOf("air")})," ",L.a.createElement(J.f,{element:"earth",value:0<=r.gsx$elements.toLowerCase().indexOf("earth")})," ",L.a.createElement(J.f,{element:"water",value:0<=r.gsx$elements.toLowerCase().indexOf("water")}))),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Flavortext:"),L.a.createElement("br",null),r.gsx$flavortext),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Mugic Ability: "),i))})}}]),t}(L.a.Component))||te)||te,pe=Object(_.a)(function(e,t,a){return t})(re=Object(_.b)(re=function(e){function t(){return b()(this,t),w()(this,C()(t).apply(this,arguments))}return N()(t,e),$()(t,[{key:"render",value:function(){var e=this.props.location.pathname.split("/");""==e[e.length-1]&&e.pop();function t(){var e=[];if(0==r.gsx$cost)e.push(L.a.createElement("span",{key:0},"0"));else if("x"==r.gsx$cost.toLowerCase())e.push(L.a.createElement("span",{key:0},"X"));else for(var t=0;t<r.gsx$cost;t++)e.push(L.a.createElement(J.j,{tribe:r.gsx$tribe,key:t}));return e}var a=5<=e.length?decodeURIComponent(e[4]):4==e.length?decodeURIComponent(e[3]):void 0,n=M.a.portal.mugic.findOne({gsx$name:a}),r=M.a.cards.mugic.findOne({gsx$name:a});return n?L.a.createElement(ae,{card:r,col0:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Tribe: "),L.a.createElement(J.o,{tribe:n.gsx$tribe})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Cost: "),t())),col2:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Background:"),L.a.createElement("br",null),n.gsx$background),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Details:"),L.a.createElement("br",null),n.gsx$details))}):r&&r.gsx$splash?L.a.createElement(ae,{card:r,col0:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Tribe: "),L.a.createElement(J.o,{tribe:r.gsx$tribe})),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Cost: "),t()))}):L.a.createElement(J.l,{location:this.props.location})}}]),t}(L.a.Component))||re)||re,de=Object(_.a)(function(e,t,a){return t})(le=Object(_.b)((ce=function(e){function t(){var e;return b()(this,t),e=w()(this,C()(t).call(this)),S()(e,"loaded",ie,q()(e)),e.filter=new Q.a("filter.db"),e}return N()(t,e),$()(t,[{key:"render",value:function(){var e=this;if(0==this.loaded)return M.a.LoadDB([{cards:"creatures"},{portal:"creatures"},{cards:"mugic"},{portal:"mugic"}]).then(function(){e.loaded=!0}),L.a.createElement(J.h,null);var t=this.props.location.pathname.split("/");""==t[t.length-1]&&t.pop();var a,r=t[2],n=this.filter.addCollection("filter"),l=n.addDynamicView("filter");l.applySimpleSort("gsx$name"),(a=M.a.portal.creatures.find({gsx$tribe:r})).forEach(function(e){delete e.$loki}),n.insert(a),(a=M.a.portal.mugic.find({gsx$tribe:r})).forEach(function(e){delete e.$loki}),n.insert(a);var c=l.data();this.filter.removeCollection("filter");var i=c.map(function(e,t){var a,n;return"Mugic"==e.gsx$type&&(a=M.a.cards.mugic.findOne({gsx$name:e.gsx$name}),n="/portal/"+r+"/Mugic/"+encodeURIComponent(e.gsx$name)),"Creatures"==e.gsx$type&&(a=M.a.cards.creatures.findOne({gsx$name:e.gsx$name}),n="/portal/"+r+"/Creatures/"+encodeURIComponent(e.gsx$name)),a?L.a.createElement("div",{key:t},L.a.createElement(G.a,I()({as:B.b},W.a.link,{to:n}),L.a.createElement("span",null,e.gsx$name.split(",")[0]),L.a.createElement("br",null),L.a.createElement("img",{className:"thumb",src:M.a.base_image+a.gsx$thumb}))):L.a.createElement("div",{key:t})});return L.a.createElement("div",{className:"entry tribe"},L.a.createElement("div",{className:"entry_content"},L.a.createElement(j.a,{path:"".concat(this.props.match.url,"/Creatures/:card"),component:ge}),L.a.createElement(j.a,{path:"".concat(this.props.match.url,"/Mugic/:card"),component:pe})),L.a.createElement("div",{className:"cat_title"},t[2]),L.a.createElement("div",{className:"entry_nav"},i))}}]),t}(L.a.Component),ie=z()(ce.prototype,"loaded",[U.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),le=ce))||le)||le,Ee=Object(_.a)(function(e,t,a){return t})(oe=Object(_.b)(oe=function(e){function t(){return b()(this,t),w()(this,C()(t).apply(this,arguments))}return N()(t,e),$()(t,[{key:"render",value:function(){var e=this.props.location.pathname.split("/");if(""==e[e.length-1]&&e.pop(),4!==e.length)return L.a.createElement(J.l,{location:this.props.location});var t=decodeURIComponent(e[3]),a=M.a.portal.attacks.findOne({gsx$name:t}),n=M.a.cards.attacks.findOne({gsx$name:t});return a?L.a.createElement(ae,{card:n,col2:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Attributes:"),L.a.createElement("br",null),a.gsx$attributes),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Background:"),L.a.createElement("br",null),a.gsx$background),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Details:"),L.a.createElement("br",null),a.gsx$details))}):n&&n.gsx$splash?L.a.createElement(ae,{card:n}):L.a.createElement(J.l,{location:this.props.location})}}]),t}(L.a.Component))||oe)||oe,he=Object(_.a)(function(e,t,a){return t})(se=Object(_.b)(se=function(e){function t(){return b()(this,t),w()(this,C()(t).apply(this,arguments))}return N()(t,e),$()(t,[{key:"render",value:function(){var e=this.props.location.pathname.split("/");if(""==e[e.length-1]&&e.pop(),4!==e.length)return L.a.createElement(J.l,{location:this.props.location});var t=decodeURIComponent(e[3]),a=M.a.portal.battlegear.findOne({gsx$name:t}),n=M.a.cards.battlegear.findOne({gsx$name:t});return a?L.a.createElement(ae,{card:n,col2:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Attributes:"),L.a.createElement("br",null),a.gsx$attributes),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Background:"),L.a.createElement("br",null),a.gsx$background),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Details:"),L.a.createElement("br",null),a.gsx$details))}):n&&n.gsx$splash?L.a.createElement(ae,{card:n}):L.a.createElement(J.l,{location:this.props.location})}}]),t}(L.a.Component))||se)||se,fe=Object(_.a)(function(e,t,a){return t})(me=Object(_.b)(me=function(e){function t(){return b()(this,t),w()(this,C()(t).apply(this,arguments))}return N()(t,e),$()(t,[{key:"render",value:function(){var e=this.props.location.pathname.split("/");if(""==e[e.length-1]&&e.pop(),4!==e.length)return L.a.createElement(J.l,{location:this.props.location});var t=decodeURIComponent(e[3]),a=M.a.portal.locations.findOne({gsx$name:t}),n=M.a.cards.locations.findOne({gsx$name:t});return a?L.a.createElement(ae,{card:n,col0:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Initiative: "),L.a.createElement(J.g,{initiative:n.gsx$initiative,notitle:"true"}))),col2:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Local Features:"),L.a.createElement("br",null),a.gsx$localfeatures),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Background:"),L.a.createElement("br",null),a.gsx$background),L.a.createElement("hr",null),L.a.createElement("div",null,L.a.createElement("strong",null,"Details:"),L.a.createElement("br",null),a.gsx$details))}):n&&n.gsx$splash?L.a.createElement(ae,{card:n,col0:L.a.createElement(L.a.Fragment,null,L.a.createElement("div",null,L.a.createElement("strong",null,"Initiative: "),L.a.createElement(J.g,{initiative:n.gsx$initiative,notitle:"true"})))}):L.a.createElement(J.l,{location:this.props.location})}}]),t}(L.a.Component))||me)||me;a(386);a.d(t,"default",function(){return xe});var xe=Object(_.a)(function(e,t,a){return t})(ue=Object(_.b)(ue=function(e){function t(){return b()(this,t),w()(this,C()(t).apply(this,arguments))}return N()(t,e),$()(t,[{key:"componentDidUpdate",value:function(){window.scrollTo({top:220,left:0,behavior:"smooth"})}},{key:"render",value:function(){return L.a.createElement("div",{className:"portal"},L.a.createElement($e,null),L.a.createElement(be,this.props))}}]),t}(L.a.Component))||ue)||ue;function be(e){var a=e.match.url;return L.a.createElement(L.a.Fragment,null,L.a.createElement(j.a,{exact:!0,path:a,component:H}),L.a.createElement(j.a,{path:"".concat(a,"/Attacks"),render:function(e){return L.a.createElement(X,I()({},e,{type:"Attacks",component:Ee}))}}),L.a.createElement(j.a,{path:"".concat(a,"/Battlegear"),render:function(e){return L.a.createElement(X,I()({},e,{type:"Battlegear",component:he}))}}),L.a.createElement(j.a,{path:"".concat(a,"/Creatures"),render:function(e){return L.a.createElement(X,I()({},e,{type:"Creatures",component:ge}))}}),L.a.createElement(j.a,{path:"".concat(a,"/Locations"),render:function(e){return L.a.createElement(X,I()({},e,{type:"Locations",component:fe}))}}),L.a.createElement(j.a,{path:"".concat(a,"/Mugic"),render:function(e){return L.a.createElement(X,I()({},e,{type:"Mugic",component:pe}))}}),M.a.tribes.map(function(e,t){return L.a.createElement(j.a,{key:t,path:"".concat(a,"/").concat(e),component:de})}),L.a.createElement(j.a,{path:"".concat(a,"/Search"),component:Y}))}function ve(e){e.preventDefault(),e.stopPropagation()}function $e(){var e=L.a.createElement("li",{className:"dropdown"},L.a.createElement(B.b,{to:" ",onClick:ve,className:"dropbtn"},"Types"),L.a.createElement("div",{className:"dropdown-content"},L.a.createElement(B.b,{to:"/portal/Attacks"},"Attacks"),L.a.createElement(B.b,{to:"/portal/Battlegear"},"Battlegear"),L.a.createElement(B.b,{to:"/portal/Creatures"},"Creatures"),L.a.createElement(B.b,{to:"/portal/Locations"},"Locations"),L.a.createElement(B.b,{to:"/portal/Mugic"},"Mugic"))),t=M.a.tribes.map(function(e,t){return L.a.createElement("li",{key:t,className:"dropdown"},L.a.createElement(B.b,{to:" ",className:"dropbtn",onClick:ve},e),L.a.createElement("div",{className:"dropdown-content"},L.a.createElement(B.b,{to:"/portal/"+e},"All"),L.a.createElement(B.b,{to:"/portal/Creatures/"+e}," Creatures"),L.a.createElement(B.b,{to:"/portal/Mugic/"+e}," Mugic")))});return L.a.createElement("div",{className:"navbar"},L.a.createElement("ul",null,L.a.createElement("li",null,L.a.createElement(B.b,{to:"/portal/"},"Home")),L.a.createElement("li",null,L.a.createElement(B.b,{to:"/portal/Search"},L.a.createElement(J.n,null),"Search")),e,L.a.createElement("li",{className:"dropdown"},L.a.createElement(B.b,{to:" ",onClick:ve,className:"dropbtn"},"Generic"),L.a.createElement("div",{className:"dropdown-content"},L.a.createElement(B.b,{to:"/portal/Generic/Mugic"},"Mugic"))),t))}}}]);