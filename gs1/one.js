(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"one_atlas_1", frames: [[0,0,1024,683],[1026,0,600,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Behind = function() {
	this.initialize(ss["one_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cursor = function() {
	this.initialize(ss["one_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Scratchable = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC66").s().p("EhK/A6+MAAAh17MCV/AAAMAAAB17g");
	this.shape.setTransform(493,1021.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scratchable, new cjs.Rectangle(13,643.7,960,754.7), null);


(lib.Leaf3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Leaf2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Leaf1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Cursor_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.Cursor();
	this.instance.setTransform(0,0,0.23,0.2633);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cursor_1, new cjs.Rectangle(0,0,138,158), null);


(lib.Behind_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.Behind();
	this.instance.setTransform(-93,0,0.96,1.0451);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Behind_1, new cjs.Rectangle(-93,0,983.1,713.8), null);


(lib._2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.Cursor = new lib.Cursor_1();
	this.Cursor.name = "Cursor";
	this.Cursor.setTransform(-3,23,1,1,0,0,0,69,79);

	this.timeline.addTween(cjs.Tween.get(this.Cursor).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._2, new cjs.Rectangle(-72,-56,138,158), null);


(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Behind_1();
	this.instance.setTransform(480.65,193.3,0.9783,0.7705,0,0,0,400.1,266.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(-1.7,-11.9,961.7,549.9), null);


// stage content:
(lib.one = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var minProgressToReveal = 0.9; // minimum mask area that needs to be cleared to reveal what is behind
		var cursorType = "default";
		var strokeTickness = 48;
		var strokeCaps = "round";
		var strokeJoints = "round";
		var strokeColor = "rgba(0,0,0,1)"; // change the 4th argument for the stroke density
		var mkContainer = root.scratchable; // mask container instance
		var cursor = root.cursor; // cursor instance
		var friction = 0.8; // cursor friction
		var scratchable, mkBounds, grid, isDrawing, oldPt, oldMidPt, maskFilter;
		
		root.start = function()
		{
			createjs.Touch.enable(stage);
			stage.enableMouseOver();
			stage.mouseMoveOutside = true;
			document.body.style.backgroundColor = "white";
			grid = {};
			scratchable = mkContainer.children[0];
			mkBounds = root.scratchable.nominalBounds;
			scratchable.cache(-mkBounds.width * 0.5, -mkBounds.height * 0.5, mkBounds.width, mkBounds.height);
			maskFilter = new createjs.AlphaMaskFilter(scratchable.cacheCanvas);
			scratchable.cursor = cursorType;
			root.stop();
			root.mouseDown = stage.on("stagemousedown", root.mouseDownHandler);
			root.mouseUp = stage.on("stagemouseup", root.mouseUpHandler);
			root.tick = createjs.Ticker.on("tick", root.tickHandler);
		}
		
		root.mouseDownHandler = function(event)
		{
			var stageX = ((stage.mouseX / stage.scaleX) - mkBounds.width * 0.5);
			var stageY = ((stage.mouseY / stage.scaleY) - mkBounds.height * 0.5);
			
			oldPt = new createjs.Point(stageX, stageY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		root.tickHandler = function(event)
		{
			var stageX = stage.mouseX / stage.scaleX;
			var stageY = stage.mouseY / stage.scaleY;
			
			cursor.rotation = root.rotateToCursor(stageY - cursor.y, stageX - cursor.x);
			cursor.x = root.lerp(cursor.x, stageX, friction);
			cursor.y = root.lerp(cursor.y, stageY, friction);
			
			if (!isDrawing)
				return;
			
			var midPoint;
			
			stageX -= mkBounds.width * 0.5;
			stageY -= mkBounds.height * 0.5;	
			midPoint = new createjs.Point(oldPt.x + stageX >> 1, oldPt.y + stageY >> 1);
			root.trackProgress(midPoint);
		
			scratchable.graphics.clear()
				.setStrokeStyle(strokeTickness, strokeCaps, strokeJoints)
				.beginStroke(strokeColor)
				.moveTo(midPoint.x, midPoint.y)
				.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
			
			oldPt.x = stageX;
			oldPt.y = stageY;
		
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
		
			scratchable.updateCache("destination-out");
		}
		
		root.mouseUpHandler = function(event)
		{
			isDrawing = false;
		}
		
		root.trackProgress = function(point)
		{
			var columns = Math.round(mkBounds.width / strokeTickness) + 1;
			var rows = Math.round(mkBounds.height / strokeTickness) + 1;
			var total = columns * rows;
			var gridX = Math.round((point.x + mkBounds.width * 0.5) / strokeTickness);
			var gridY = Math.round((point.y + mkBounds.height * 0.5) / strokeTickness);
			
			grid[gridX + "_" + gridY] = true;
			
			if (Object.keys(grid).length >= Math.round(total * minProgressToReveal))
				root.revealCallback();	
		}
		
		root.revealCallback = function()
		{	
			createjs.Tween.get(scratchable).to({ alpha: 0 }, 500).call(function()
			{
				scratchable.visible = false;
			});
			
			createjs.Tween.get(cursor).to({ alpha: 0 }, 500).call(function()
			{
				cursor.visible = false;
			});	
			
			stage.off("stagemousedown", root.mouseDown);
			stage.off("stagemouseup", root.mouseUp);
			createjs.Ticker.off("tick", root.tick);
		}
		
		root.lerp = function(v1, v2, f)
		{
			 return f * v1 + (1 - f) * v2;
		};
		
		root.rotateToCursor = function(distY, distX)
		{
			return Math.atan2(distY, distX) * 180 / Math.PI;
		};
		
		root.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cursor
	this.cursor = new lib._2();
	this.cursor.name = "cursor";
	this.cursor.setTransform(565.5,265.3);

	this.timeline.addTween(cjs.Tween.get(this.cursor).wait(1));

	// scratchable
	this.scratchable = new lib.Scratchable();
	this.scratchable.name = "scratchable";
	this.scratchable.setTransform(-13,-659.9,1,1.0064,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.scratchable).wait(1));

	// behind
	this.instance = new lib.Leaf1("single",0);
	this.instance.setTransform(926.95,332.75,0.9999,0.9999,-149.9991,0,0,-0.1,0.1);

	this.instance_1 = new lib.Leaf1("single",0);
	this.instance_1.setTransform(177.6,311);

	this.instance_2 = new lib.Leaf1("single",0);
	this.instance_2.setTransform(29.55,456.5,1,1,-89.9991,0,0,0,0.1);

	this.instance_3 = new lib.Leaf2("single",0);
	this.instance_3.setTransform(316.35,55.55,0.9998,0.9998,-44.9994,0,0,0.1,0.3);

	this.instance_4 = new lib.Leaf2("single",0);
	this.instance_4.setTransform(767.65,229.75,0.9999,0.9999,59.9993,0,0,0.1,0.1);

	this.instance_5 = new lib._1();
	this.instance_5.cache(-4,-14,966,554);

	this.instance_6 = new lib.Leaf2("single",0);
	this.instance_6.setTransform(120.2,200.1,0.9998,0.9998,-44.9994,0,0,0.1,0.3);

	this.instance_7 = new lib.Leaf2("single",0);
	this.instance_7.setTransform(464.6,498.85,0.9998,0.9998,-44.9994,0,0,0.1,0.3);

	this.instance_8 = new lib.Leaf2("single",0);
	this.instance_8.setTransform(562.8,117.95,0.9999,0.9999,-29.9994,0,0,-0.1,0.1);

	this.instance_9 = new lib.Leaf2("single",0);
	this.instance_9.setTransform(215.8,217.3,0.9999,0.9999,29.9997,0,0,-0.1,0.1);

	this.instance_10 = new lib.Leaf2("single",0);
	this.instance_10.setTransform(432.9,78.25,0.9999,0.9999,0,0,0,0.1,0.2);

	this.instance_11 = new lib.Leaf2("single",0);
	this.instance_11.setTransform(884.25,50.3,0.9999,0.9999,30,0,0,0.1,0.2);

	this.instance_12 = new lib.Leaf2("single",0);
	this.instance_12.setTransform(664.25,89.2,0.9999,0.9999,0,0,0,0,0.2);

	this.instance_13 = new lib.Leaf2("single",0);
	this.instance_13.setTransform(744.7,50.25,0.9999,0.9999,-29.9994,0,0,-0.1,0.1);

	this.instance_14 = new lib.Leaf2("single",0);
	this.instance_14.setTransform(344.55,301.7,0.9999,0.9999,29.9997,0,0,-0.1,0.1);

	this.instance_15 = new lib.Leaf2("single",0);
	this.instance_15.setTransform(271.45,491.7,1,1,-14.9996,0,0,-0.1,0.1);

	this.instance_16 = new lib.Leaf2("single",0);
	this.instance_16.setTransform(46.4,305.5,1,1,-59.9996);

	this.instance_17 = new lib.Leaf2("single",0);
	this.instance_17.setTransform(321.1,194.65);

	this.instance_18 = new lib.Leaf2("single",0);
	this.instance_18.setTransform(89.3,133.55);

	this.instance_19 = new lib.Leaf1("single",0);
	this.instance_19.setTransform(777.6,328.15,0.9999,0.9999,-149.9991,0,0,-0.1,0.1);

	this.instance_20 = new lib.Leaf1("single",0);
	this.instance_20.setTransform(892.5,237.35,1,1,-104.9988,0,0,-0.1,0.2);

	this.instance_21 = new lib.Leaf1("single",0);
	this.instance_21.setTransform(647,243,1,1,-59.9996);

	this.instance_22 = new lib.Leaf1("single",0);
	this.instance_22.setTransform(581.5,547.8,0.8389,0.8389,-90,0,0,0,0.2);

	this.instance_23 = new lib.Leaf1("single",0);
	this.instance_23.setTransform(349.85,490.5,0.7965,0.7965,-90,0,0,0,0.1);

	this.instance_24 = new lib.Leaf1("single",0);
	this.instance_24.setTransform(485.95,286.9,1,1,-44.9994,0,0,-0.1,0.1);

	this.instance_25 = new lib.Leaf1("single",0);
	this.instance_25.setTransform(392.2,124.9,0.8187,0.8187);

	this.instance_26 = new lib.Leaf1("single",0);
	this.instance_26.setTransform(811.6,122.05,0.9999,0.9999,-149.9991,0,0,-0.1,0.1);

	this.instance_27 = new lib.Leaf1("single",0);
	this.instance_27.setTransform(676.1,175.2,0.8244,0.8244,-149.9995,0,0,-0.1,0.1);

	this.instance_28 = new lib.Leaf1("single",0);
	this.instance_28.setTransform(528.35,207.15,0.7711,0.7711,-104.9982,0,0,-0.1,0.2);

	this.instance_29 = new lib.Leaf1("single",0);
	this.instance_29.setTransform(532.85,37.85,0.7669,0.7669,-59.9993,0,0,-0.1,0.2);

	this.instance_30 = new lib.Leaf1("single",0);
	this.instance_30.setTransform(159.4,518.7,0.9999,0.9999,-164.9991,0,0,0,0.1);

	this.instance_31 = new lib.Leaf1("single",0);
	this.instance_31.setTransform(166.25,381.5,0.7407,0.7407,-44.9992,0,0,-0.1,0.2);

	this.instance_32 = new lib.Leaf3("single",0);
	this.instance_32.setTransform(911.9,142.95,0.9999,0.9999,-30.0002,0,0,0.1,0.1);

	this.instance_33 = new lib.Leaf3("single",0);
	this.instance_33.setTransform(761.75,90.25,0.9999,0.9999,-30.0002,0,0,0.1,0.1);

	this.instance_34 = new lib.Leaf3("single",0);
	this.instance_34.setTransform(739.4,196.75,1,1,14.999,0,0,0.1,0);

	this.instance_35 = new lib.Leaf3("single",0);
	this.instance_35.setTransform(113.75,462.35,1,1,-74.9987);

	this.instance_36 = new lib.Leaf3("single",0);
	this.instance_36.setTransform(219.75,451.9,1,1,-44.9994);

	this.instance_37 = new lib.Leaf3("single",0);
	this.instance_37.setTransform(556.8,526.4,0.9999,0.9999,97.4819);

	this.instance_38 = new lib.Leaf3("single",0);
	this.instance_38.setTransform(729.05,519.35,1,1,157.4824);

	this.instance_39 = new lib.Leaf3("single",0);
	this.instance_39.setTransform(540.85,398.8,1,1,112.4823);

	this.instance_40 = new lib.Leaf3("single",0);
	this.instance_40.setTransform(891.5,406.1,0.9999,0.9999,157.4818,0,0,0.1,0.1);

	this.instance_41 = new lib.Leaf3("single",0);
	this.instance_41.setTransform(927.5,303.4,0.9999,0.9999,-157.5198,0,0,0.1,0);

	this.instance_42 = new lib.Leaf3("single",0);
	this.instance_42.setTransform(757.05,281,1,1,172.4822);

	this.instance_43 = new lib.Leaf3("single",0);
	this.instance_43.setTransform(440.9,381.65,1,1,142.4824);

	this.instance_44 = new lib.Leaf3("single",0);
	this.instance_44.setTransform(394,483.8,1,1,-172.5186);

	this.instance_45 = new lib.Leaf3("single",0);
	this.instance_45.setTransform(444.1,34,0.9999,0.9999,-89.9991);

	this.instance_46 = new lib.Leaf3("single",0);
	this.instance_46.setTransform(253.5,54.5,1,1,-29.9993);

	this.instance_47 = new lib.Leaf3("single",0);
	this.instance_47.setTransform(476.55,158.45,1,1,-74.9987);

	this.instance_48 = new lib.Leaf3("single",0);
	this.instance_48.setTransform(127.95,251.25,0.9999,0.9999,-30.0002,0,0,0.1,0.1);

	this.instance_49 = new lib.Leaf3("single",0);
	this.instance_49.setTransform(59.6,272.8,1,1,14.999,0,0,0.1,0);

	this.instance_50 = new lib.Leaf3("single",0);
	this.instance_50.setTransform(248.95,303.35,1,1,-14.9996);

	this.instance_51 = new lib.Leaf3("single",0);
	this.instance_51.setTransform(577.9,162.4,1,1,-44.9994);

	this.instance_52 = new lib.Leaf3("single",0);
	this.instance_52.setTransform(611.1,55.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478.3,258.1,481.7,489.5);
// library properties:
lib.properties = {
	id: '4265D47241AA674A95C15A4472F5B395',
	width: 960,
	height: 540,
	fps: 60,
	color: "#999933",
	opacity: 1.00,
	manifest: [
		{src:"images/one_atlas_1.png", id:"one_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4265D47241AA674A95C15A4472F5B395'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;