var shopThing = require('../../../utils/shopThing.js');
var index = require('../../../utils/inedx.js');
var list = require('../../../utils/list.js');
var order = require('../../../utils/order.js');
var star = require('../../../utils/star.js');
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
		// array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20],
		index: 0,
		num: 1,
		cartNum: 0,
		ifadd: false,
		detail: '',
		eIndex: 0,
		putcart: false,
		buycart: false,
		shopcarcart: false ,
		shopThing: [],
		ifHave: false,
		starfull: false,
		whatrequire: '',
		one: false
	},
	getTime: function () {
	  var timeNumber = 0;
	  var dates = new Date();
	  var year = dates.getFullYear() + '';
	  var month = dates.getMonth() + 1 + '';
	  var date = dates.getDate() + '';
	  var minute = dates.getMinutes() + '';
	  var second = dates.getSeconds() + '';
	  var time = dates.getTime() % 6 + '';
	  time = parseInt(Math.random() * time);

	  if(month.length < 2) {
	    month = '0' + month
	  }

	  if(minute.length < 2) {
	    minute = '0' + minute
	  }

	  if(second.length < 2) {
	    second = '0' + second
	  }

	  return timeNumber = year + month + date + minute + second + minute + second + time;
	},
	bindChange: function(e) {
		var that = this;
		this.setData({
			currentTab: e.detail.current
		})
	},
	tostar: function() {
		console.log(this.data.whatrequire)
		var n = this.data.whatrequire[0];
		var n1 = this.data.whatrequire[1];
		var n2 = this.data.whatrequire[2];
		var obj = {}
		var that = this;
		function addgoods() {
			obj = {
				"thingName": that.data.detail.thingName,
				"thingImg": that.data.detail.thingImg,
				"thingPrice": that.data.detail.thingPrice,
				"thingNum": that.data.num,
				"thingId": that.data.detail.thingId,
				"choose": true
			}					
			
			if(n === 'index') {
				index.index[n1][n2].star = true;
				that.setData({
					starfull: true,
					detail: index.index[n1][n2]
				})
			}else if(n === 'list') {
				list.list[n1][n2].star = true;
				that.setData({
					starfull: true,
					detail: list.list[n1][n2]
				})
			}
			console.log(index.index[n1][n2])
			wx.showToast({
				title: '收藏成功!'
			})	
			that.setData({
				one: true
			})
		}

		console.log(star.star)
		if(star.star.length == 0) {
			console.log('相同')
			var nogoods = true;
		}else {
			var length = star.star.length;
			nogoods = false;
		}
		
		if(this.data.detail.star == false) {
			if(nogoods) {
				addgoods();
				console.log(111);
			}else {
				for(var i=0; i<length; i++) {
					if((star.star[i].thingId == this.data.thingId)) {

					}
					else {						
						addgoods();
					}
				}	
			}
		}else {
			this.setData({
				one: false
			})
			for(var i=0; i<star.star.length; i++) {

				if(star.star[i].thingId == this.data.detail.thingId) {
					star.star.splice(i,1);
				}
				// console.log(star.star[i].thingName)
			}
			if(n === 'index') {
				index.index[n1][n2].star = false;
				this.setData({
					starfull: false,
					detail: index.index[n1][n2]
				})
			}else if(n === 'list') {
				list.list[n1][n2].star = false;
				this.setData({
					starfull: false,
					detail: list.list[n1][n2]
				})
			}
			wx.showToast({
				title: '取消收藏'
			})	
		}
		if(this.data.one) {
			star.star.push(obj);
		}
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
	},
	toshopcar: function() {
		console.log(this.data.shopThing);
		console.log(shopThing.shopThing);
		this.setData({
			shopThing: shopThing.shopThing
		})
  		this.setData({
  			shopcarcart: true
  		})

  		if(shopThing.shopThing.length == 0) {
  			this.setData({
  				ifHave: false
  			})
  		}else {
  			this.setData({
  				ifHave: true
  			})
  		}
	},
	tomyshopcar: function() {
		wx.switchTab({
			url: '../../shopcar/shopcar'
		})
	},
	delshopThing: function(e) {
		this.showwhat();
		var that = this;
		var num = e.currentTarget.dataset.index;
		wx.showModal({
			title: '提示',
			content: '是否删除商品',
			success: function(res) {
				if(res.confirm) {
					shopThing.shopThing.splice(num,1);
					that.setData({
						shopThing: shopThing.shopThing
					})
				}else if(res.cancel) {
					//null
				}
			},
			complete: function() {
				console.log(shopThing.shopThing.length)
				that.showwhat();
			}
		})	
	},
	subnum: function() {
		if(this.data.num <= 1) {
			this.setData({
				num: 1
			})
		}else {
			this.setData({
				num: this.data.num-1
			})
		}
	},
	addnum: function() {
		if(this.data.num >= 99) {
			this.setData({
				num: 99
			})
		}else {
			this.setData({
				num: this.data.num+1
			})
		}
	},
	changeput: function() {
		this.setData({
			putcart: true
		})
	},
	hidemask: function() {
		this.setData({
			putcart: false
		})
	},
	hidemask1: function() {
		this.setData({
			buycart: false
		})
	},
	hidemask2: function() {
		this.setData({
			shopcarcart: false
		})
	},
	gobuy: function() {
		this.setData({
			buycart: true
		})
		this.toShopThing();
	},
	tocart: function() {
		console.log()
		var that = this;
		var obj = {
			"thingName": this.data.detail.thingName,
			"thingImg": this.data.detail.thingImg,
			"thingPrice": this.data.detail.thingPrice,
			"thingNum": this.data.num,
			"thingId": this.data.detail.thingId,
			"choose": true,
			"star": false
		}
		var timer = null;
		var num = 0;
		for(var k=0; k<shopThing.shopThing.length; k++) {
			num += shopThing.shopThing[k].thingNum;
		}
		
		this.setData({
			cartNum: num,
			putcart: false
		})	
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
		this.toShopThing();
		console.log(this.data.shopThing);
	},
	toorder: function() {
		var obj = {
		  thingNumber: this.getTime(),
		  thingName: this.data.detail.thingName,
		  thingImg: this.data.detail.thingImg,
		  thingPrice: this.data.detail.thingPrice,
		  thingNum: this.data.num,
		  thingId: this.data.detail.thingId,
		  thingPay: '待付款',
		  star: false
		}
		order.order.push(obj);

		wx.navigateTo({
		  url: '../../buy/buy'
		}) 
		this.toShopThing();
	},
	toShopThing: function() {
		this.setData({
			shopThing: shopThing.shopThing
		})
		console.log(this.data.shopThing)
	},
	showwhat: function() {
		// console.log(cartNum,shopThing.shopThing.length)
		if(shopThing.shopThing.length == 0) {
			this.setData({
				ifHave: false,
				cartNum: 0
			})
		}else {
			var num = 0;
			for(var i=0; i<shopThing.shopThing.length; i++) {
				num += shopThing.shopThing[i].thingNum
			}
			this.setData({
				ifHave: true,
				cartNum: num
			})
		}
	},
	onLoad:function(options){
		console.log(options.list)
		console.log(options.index)
		if(options.index) {
			var arr = options.index.split(',');
			for(var i=0; i<arr.length; i++) {
				arr[i] = Number(arr[i]);
			}
			console.log(arr)
			if(arr[0] == 0) {

				this.setData({
					detail: index.index[0][arr[1]],
					whatrequire: ['index',arr[0],arr[1]]
				})
				console.log(index.index[0]);
				var num = 0;
				for(var i=0; i<shopThing.shopThing.length; i++) {
					num += shopThing.shopThing[i].thingNum;
				}

				this.setData({
					cartNum: num
				})	
			}
			else {
				this.setData({
					whatrequire: ['index',arr[0],arr[1]],
					detail: index.index[arr[0]][arr[1]],
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
		}else {
			var arr1 = options.list.split(',');
			for(var i=0; i<arr1.length; i++) {
				arr1[i] = Number(arr1[i]);
			}
			console.log(arr1)
			this.setData({
				whatrequire: ['list',arr1[0],arr1[1]],
				detail: list.list[arr1[0]][arr1[1]]
			})
			var num = 0;
			for(var i=0; i<shopThing.shopThing.length; i++) {
				num += shopThing.shopThing[i].thingNum;
			}
			this.setData({
				cartNum: num
			})	
		}
		this.toShopThing();
		this.showwhat();
		this.setData({
			starfull: this.data.detail.star
		})
		console.log(this.data.detail.star)
	},
	onReady:function(){
		
	},
	onShow:function(){
		this.toShopThing();
		this.showwhat();
		this.setData({
			starfull: this.data.detail.star
		})

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