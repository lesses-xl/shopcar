var shopThing = require('../../../utils/shopThing.js');
var index = require('../../../utils/inedx.js');
var list = require('../../../utils/list.js');
/*
	图片
	是否有货
	名字
	价格
	详情
	参数
*/
Page({
	data:{
		currentTab: 0,
		array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20],
		index: 0,
		num: 1,
		cartNUm: 0,
		ifadd: false,
		detail: '',
		eIndex: 0
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
		console.log(e);
		this.setData({
			index: e.detail.value,
			num: this.data.array[e.detail.value]
		})
		// console.log(this.data.index,e)
	},
	toshopcar: function() {
		wx.switchTab({
      		url:"../../shopcar/shopcar"
     	});
	},
	tocart: function() {
		var that = this;
		console.log(this.data.detail)
		var obj = {
			"thingName": this.data.detail.thingName,
			"thingImg": this.data.detail.thingImg,
			"thingPrice": this.data.detail.thingPrice,
			"thingNum": this.data.detail.thingNum,
			"thingId": this.data.detail.thingId,
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
			if(shopThing.shopThing[i].thingName === obj.thingName) {
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
		var arr = options.index.split(',');
		for(var i=0; i<arr.length; i++) {
			arr[i] = Number(arr[i]);
		}
		console.log(arr);
		if(options.index.length > 1) {
			this.setData({
				detail: list.list[arr[0]][arr[1]]
			})

			var num = 0;
			for(var i=0; i<shopThing.shopThing.length; i++) {
				num += shopThing.shopThing[i].thingNum;
			}

			this.setData({
				cartNum: num
			})	
		}else {
			this.setData({
				detail: index.index[arr[0]],
				eIndex: options.index
			})
			var num = 0;
			for(var i=0; i<shopThing.shopThing.length; i++) {
				num += shopThing.shopThing[i].thingNum;
			}
			this.setData({
				cartNum: num
			})	
		}
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