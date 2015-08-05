$().ready(function () {

	setTimeout(function () {
		
		timer();
		
		
	},500);


	

	
	
	
	
	
	
	
});
var colorlist=['#990066',
				'#FFCC00',
				'#CC0033',
				'#FFCC33',
				'#009999',
				'#003399',
				'#006699',
				'#FF6600',
				'#99CC00',
				'#663399',
				'#336699',
				'#FF0033',
				'#006699',
				'#000000',
				'#003399',
				'#333333',
				'#FF9900',
				'#666633',
				'#009933',
				'#0099CC',
				'#666699',
				'#33CC99',
				'#FF6666'
				





];
var csslist=[{left:'100%',top:'50%',transform:'translateZ(-1000px) rotateZ(-360deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-360deg) rotateY(-90deg) rotateX(0deg)'},
			 {left:'100%',top:'100%',transform:'translateZ(-1000px) rotateZ(-315deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-315deg) rotateY(-90deg) rotateX(0deg)'},
			 {left:'50%',top:'100%',transform:'translateZ(-1000px) rotateZ(-270deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-270deg) rotateY(-90deg) rotateX(0deg)'},
			 {left:'0%',top:'100%',transform:'translateZ(-1000px) rotateZ(-225deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-225deg) rotateY(-90deg) rotateX(0deg)'},
			 {left:'0%',top:'50%',transform:'translateZ(-1000px) rotateZ(-180deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-180deg) rotateY(-90deg) rotateX(0deg)'},
			 {left:'0%',top:'0%',transform:'translateZ(-1000px) rotateZ(-135deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-135deg) rotateY(-90deg) rotateX(0deg)'},
			 {left:'50%',top:'0%',transform:'translateZ(-1000px) rotateZ(-90deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-90deg) rotateY(-90deg) rotateX(0deg)'},
			 {left:'100%',top:'0%',transform:'translateZ(-1000px) rotateZ(-45deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-45deg) rotateY(-90deg) rotateX(0deg)'}
			];


var ddtime=500;
function timer () {
	var tempdiv= $('<div class="link_bar"></div>').appendTo('#main');
//	console.log(csslist);
//	console.log(count+"   "+(count%8));
//	Math.ceil(Math.random()*colorlist.length)
	
//	tempdiv.css('background','linear-gradient(to right,#f00 , #f00 50%, rgba(11,11,11,0))');
	var tempcolor=colorlist[Math.floor(Math.random()*colorlist.length)];

	var tempobj=csslist[Math.floor(Math.random()*csslist.length)];
	console.log(tempobj);
	tempdiv.css('background','linear-gradient(to right,'+tempcolor+','+tempcolor+' 95%, rgba(0,0,0,0))');
	tempdiv.css('left',tempobj.left);
	tempdiv.css('top',tempobj.top);
	tempdiv.css('transform',tempobj.transform);
	tempdiv.data('reT',tempobj);
	setTimeout(function () {
		tempdiv.css('transform',tempdiv.data('reT').retransform);
//	ddtime--;
	},100);
	
	setTimeout(function () {
		
		tempdiv.remove();
		
		
	},5500);
	setTimeout(timer,ddtime);
}

