(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],{228:function(e,a,t){"use strict";t.r(a);var i=t(0),r=t.n(i),n=t(79),c=t.n(n),o=t(80),s=t(81),l=t(84),m=t(82),g=t(85);t(40),t(91);var d=function(e){return r.a.createElement("div",{className:"container mb-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-1"}),r.a.createElement("div",{className:"jumbotron mt-2 p-0 bg-info"},r.a.createElement("p",{className:"text-center h1 ranga bg-warning mb-3 p-2 rounded bg-light border border-dark"},"Clicky Game"),r.a.createElement("p",{className:"text-center texty h3"},"Welcome to Ocean clicky. The memory game where you the user has to remember which ocean creature images you have already clicked. To win click each image only once, otherwise the game will start over."),r.a.createElement("p",{className:"mt-3 mb-0"},e.children)),r.a.createElement("div",{className:"col-lg-1"})))};var p=function(e){return r.a.createElement("div",{className:"container mt-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"jumbotron rounded p-0 bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},e.children)))))},u=t(83);var h=function(e){return r.a.createElement("div",null,r.a.createElement("img",{id:e.id,className:"float-left m-2 rounded",src:e.image,width:"175px",height:"175px",onClick:function(a){return e.ImageClick(a)}}))};var w=function(e){return r.a.createElement("p",{className:"text-center ranga h2 mt-0"},"Score:",e.score)};var f=function(e){function a(){var e,t;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={Creatures:u,score:0},t.imageClick=function(e){console.log(e.target.id);var a=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[t],e[t]=i}return console.log("shuffle"),e}(t.state.Creatures),i=t.state.score+1;console.log("done"),t.setState({Creatures:a,score:i})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(p,null,this.state.Creatures.map((function(a){return r.a.createElement(h,{key:a.id,id:a.id,image:a.image,ImageClick:e.imageClick})}))),r.a.createElement(w,{score:this.state.score}))}}]),a}(i.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root"))},40:function(e,a,t){},83:function(e){e.exports=JSON.parse('[{"id":1,"image":"https://www.gannett-cdn.com/-mm-/3a8355bb5c6ca99487318f7a8ad7344eab971b39/c=0-78-800-530/local/-/media/Brevard/2014/06/07/lionfish.jpg?width=3200&height=1680&fit=crop"},{"id":2,"image":"http://www.aquariumofpacific.org/images/made/images/olc/92sea_kraitcrop_530_328_80auto_s.jpg"},{"id":3,"image":"https://images.theconversation.com/files/150289/original/image-20161215-13663-1o37rfi.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"},{"id":4,"image":"https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Reptiles/reptile_hawksbill-sea-turtle-egypt_chris-schenker_600x300.ashx"},{"id":5,"image":"https://allthatsinteresting.com/thumb/800.422.https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/04/mako-open-mouth-og.jpg"},{"id":6,"image":"http://www.flyhooker.com/wp-content/uploads/2015/03/Black-Marlin.jpg"},{"id":7,"image":"https://oceana.org/sites/default/files/spermwhale.jpg"},{"id":8,"image":"https://www.outsideonline.com/sites/default/files/styles/img_400x400/public/2019/09/26/great-white-shark-dive_s.jpg?itok=nh3eujC5"},{"id":9,"image":"https://www.georgiaaquarium.org/wp-content/uploads/2018/08/beluga-whale-2.jpg"},{"id":10,"image":"https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/animals/green-sea-turtle-coral-crop.ngsversion.1556636488382.adapt.1900.1.jpg"},{"id":11,"image":"http://animalsking.com/wp-content/uploads/2018/02/barracuda-fish-lifestyle-and-habitat-of-barracuda-fish-1.jpg"},{"id":12,"image":"https://upload.wikimedia.org/wikipedia/commons/5/55/Centropomus.jpg"},{"id":13,"image":"https://s2r.iucnredlist.org/sis2_images/632317007.jpg"},{"id":14,"image":"https://gardenandgun.com/wp-content/uploads/2017/02/GG0310_Fishing-Tarpon_01-1100x733.jpg"},{"id":15,"image":"http://www.kingsailfishmounts.com/UserFiles/Image/98-inch_Striped_Marlin.jpg"}]')},86:function(e,a,t){e.exports=t(228)}},[[86,1,2]]]);
//# sourceMappingURL=main.64f9dc58.chunk.js.map