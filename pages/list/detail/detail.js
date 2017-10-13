var shopThing = require('../../../utils/goods.js')

Page({
	data:{
		winWidth: 0,
		winHeight: 0,
		currentTab: 0,
		array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20],
		index: 0,
		num: 1,
		cartNUm: 0,
		ifadd: false
	},
	onLoad: function() {  
	  var that = this;  
	  wx.getSystemInfo( {  	
	    success: function( res ) {  
	      that.setData( {  
	        winWidth: res.windowWidth,  
	        winHeight: res.windowHeight  
	      });  
	    }  	
	  });  
	},
	bindChange: function(e) {
		var that = this;
		this.setData({
			currentTab: e.detail.current
		})
	},
	swichNav: function(e) {  	
	  var that = this;  	
	  if( this.data.currentTab === e.target.dataset.current ) {  
	    return false;  
	  } else {  
	    that.setData( {  
	      currentTab: e.target.dataset.current,
	    })  
	  }  
	},
	changeNum: function(e) {
		this.setData({
			index: e.detail.value,
			num: this.data.array[e.detail.value]
		})
		console.log(this.data.index,e)
	},
	toshopcar: function() {
		wx.switchTab({
      		url:"../../shopcar/shopcar"
     	});
	},
	tocart: function() {
		var that = this;
		var obj = {
			"thingName": "梨花带雨",
			"thingImg": "../../images/goods/goods1.png",
			"thingPrice": 20,
			"thingNum": this.data.num,
			"thingId": 99,
			"choose": true
		}
		var timer = null;
		var num = 0;
		for(var k=0; k<shopThing.shopThing.length; k++) {
			num += shopThing.shopThing[k].thingNum;
		}
		
		this.setData({
			cartNum: num,
			ifadd: true
		})	
		timer = setTimeout(function() {
			that.setData({
				ifadd: false
			})
		},300)
		for(var i=0; i<shopThing.shopThing.length; i++) {
			if(shopThing.shopThing[i].thingName === '梨花带雨') {
				if(this.data.num === 1) {
					shopThing.shopThing[i].thingNum += 1;
					num += 1
				}else {
					shopThing.shopThing[i].thingNum += this.data.num;
					num += this.data.num
				}				
				this.setData({
					cartNum: num
				})
				return;
			}
		}	
		shopThing.shopThing.push(obj);	
		num = 0;
		for(var j=0; j<shopThing.shopThing.length; j++) {
			num += shopThing.shopThing[j].thingNum;
		}
		this.setData({
			cartNum: num
		})		
	},
	onLoad:function(options){
		var num = 0;
		for(var i=0; i<shopThing.shopThing.length; i++) {
			num += shopThing.shopThing[i].thingNum;
		}
		console.log(shopThing.shopThing)
		this.setData({
			cartNum: num
		})	
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		