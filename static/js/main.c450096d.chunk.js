(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(1),s=n(2),i=n(4),o=n(3),l=n(0),c=n.n(l),u=n(6),h=n.n(u),m=(n(14),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("a",{href:"https://github.com/kvo189/tic-tac-toe"},"View On Github"))}}]),n}(c.a.Component));function p(e){return c.a.createElement("button",{className:"square"+(e.highlighted?" highlighted":""),onClick:e.onClick},e.value)}var v=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderSquare",value:function(e){var t=this,n=!(!this.props.winningSquares||!this.props.winningSquares.includes(e));return c.a.createElement(p,{key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},highlighted:n})}},{key:"generateBoard",value:function(){for(var e=[],t=0;t<3;t++){for(var n=[],a=0;a<3;a++)n.push(this.renderSquare(3*t+a));e.push(c.a.createElement("div",{key:t,className:"board-row"},n))}return e}},{key:"render",value:function(){return c.a.createElement("div",null,this.generateBoard())}}]),n}(c.a.Component),d=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={history:[{squares:Array(9).fill(null),moveLocation:{col:null,row:null}}],xIsNext:!0,stepNumber:0,historyAscending:!0},a}return Object(s.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice(),a={col:e%3+1,row:Math.floor(e/3)+1};g(n).player||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,moveLocation:a}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleHistorySort",value:function(){this.setState({historyAscending:!this.state.historyAscending})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],r=g(a.squares).player,s=n.map((function(e,n){var a=n?"Go to move #"+n+" (col:".concat(e.moveLocation.col,", row:").concat(e.moveLocation.row,")"):"Go to game start",r=t.state.stepNumber===n?{fontWeight:"bold"}:{fontWeight:"normal"};return c.a.createElement("li",{key:n},c.a.createElement("button",{onClick:function(){return t.jumpTo(n)},style:r},a))}));return e=r?"Winner: "+r:n.length>9?"It is a draw!":"Next player: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(v,{winningSquares:g(a.squares).winningSquares,squares:a.squares,onClick:function(e){return t.handleClick(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){return t.handleHistorySort()}},"Toggle Move History Order (",this.state.historyAscending?"Ascending":"Descending",")"),c.a.createElement("ol",null,this.state.historyAscending?s:s.reverse()))))}}]),n}(c.a.Component);function g(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(a.a)(t[n],3),s=r[0],i=r[1],o=r[2];if(e[s]&&e[s]===e[i]&&e[s]===e[o])return{player:e[s],winningSquares:t[n]}}return{player:null,winningSquares:null}}h.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.c450096d.chunk.js.map