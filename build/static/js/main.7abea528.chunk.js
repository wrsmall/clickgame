(window.webpackJsonpclickgame=window.webpackJsonpclickgame||[]).push([[0],{229:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(79),c=a.n(n),o=a(80),s=a(81),l=a(84),m=a(82),g=a(85);a(40),a(91);var d=function(e){return r.a.createElement("div",{className:"container mb-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-1"}),r.a.createElement("div",{className:"jumbotron mt-2 p-0 bg-info"},r.a.createElement("p",{className:"text-center h1 ranga bg-warning mb-3 p-2 rounded bg-light border border-dark"},"Clicky Game"),r.a.createElement("p",{className:"text-center texty h3"},"Welcome to Ocean clicky. The memory game where you the user has to remember which ocean creature images you have already clicked. To win click each image only once, otherwise the game will start over."),r.a.createElement("p",{className:"mt-3 mb-0"},e.children)),r.a.createElement("div",{className:"col-lg-1"})))};var p=function(e){return r.a.createElement("div",{className:"container mt-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"jumbotron rounded p-0 bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},e.children)))))},u=a(83);var h=function(e){return r.a.createElement("div",null,r.a.createElement("img",{id:e.id,className:"float-left m-2 rounded",src:e.image,width:"175px",height:"175px",onClick:e.ImageClick}))};var w=function(e){return r.a.createElement("p",{className:"text-center ranga h2 mt-0"},"Score:",e.score)};a(228);var f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={Creatures:u,score:0,Clicked:[]},a.imageClick=function(e){var t=e.target.id,i=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[a],e[a]=i}return console.log("shuffle"),e}(a.state.Creatures);console.log("done"),a.setState({Creatures:i}),a.check(t)},a.check=function(e){var t=a.state.Clicked;if(t.includes(e))a.setState({score:0,Clicked:[]});else{t.push(e),console.log(t),a.setState({Clicked:t,score:a.state.score+1});var i=a.state.score;console.log("this is"+i),a.won(i)}},a.won=function(e){console.log("this is"+e),14===e&&(alert("congratulations you won!"),a.setState({score:0}))},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(p,null,this.state.Creatures.map((function(t){return r.a.createElement(h,{key:t.id,id:t.id,image:t.image,ImageClick:e.imageClick})}))),r.a.createElement(w,{score:this.state.score}))}}]),t}(i.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root"))},40:function(e,t,a){},83:function(e){e.exports=JSON.parse('[{"id":1,"image":"https://www.gannett-cdn.com/-mm-/3a8355bb5c6ca99487318f7a8ad7344eab971b39/c=0-78-800-530/local/-/media/Brevard/2014/06/07/lionfish.jpg?width=3200&height=1680&fit=crop"},{"id":2,"image":"http://www.aquariumofpacific.org/images/made/images/olc/92sea_kraitcrop_530_328_80auto_s.jpg"},{"id":3,"image":"https://images.theconversation.com/files/150289/original/image-20161215-13663-1o37rfi.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"},{"id":4,"image":"https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Reptiles/reptile_hawksbill-sea-turtle-egypt_chris-schenker_600x300.ashx"},{"id":5,"image":"https://allthatsinteresting.com/thumb/800.422.https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/04/mako-open-mouth-og.jpg"},{"id":6,"image":"http://www.flyhooker.com/wp-content/uploads/2015/03/Black-Marlin.jpg"},{"id":7,"image":"https://oceana.org/sites/default/files/spermwhale.jpg"},{"id":8,"image":"https://www.outsideonline.com/sites/default/files/styles/img_400x400/public/2019/09/26/great-white-shark-dive_s.jpg?itok=nh3eujC5"},{"id":9,"image":"https://www.georgiaaquarium.org/wp-content/uploads/2018/08/beluga-whale-2.jpg"},{"id":10,"image":"https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/animals/green-sea-turtle-coral-crop.ngsversion.1556636488382.adapt.1900.1.jpg"},{"id":11,"image":"http://animalsking.com/wp-content/uploads/2018/02/barracuda-fish-lifestyle-and-habitat-of-barracuda-fish-1.jpg"},{"id":12,"image":"https://upload.wikimedia.org/wikipedia/commons/5/55/Centropomus.jpg"},{"id":13,"image":"https://s2r.iucnredlist.org/sis2_images/632317007.jpg"},{"id":14,"image":"https://gardenandgun.com/wp-content/uploads/2017/02/GG0310_Fishing-Tarpon_01-1100x733.jpg"},{"id":15,"image":"http://www.kingsailfishmounts.com/UserFiles/Image/98-inch_Striped_Marlin.jpg"}]')},86:function(e,t,a){e.exports=a(229)}},[[86,1,2]]]);
//# sourceMappingURL=main.7abea528.chunk.js.map