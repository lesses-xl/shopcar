var address = require('../../utils/address.js');
var order = require('../../utils/order.js');
var time = require('../../utils/time.js');

Page({
	data:{
		addressList: '',
		orderList: '',
		allmoney: 0,
		noaddress: true
	},
	chooseaddress: function() {
		wx.navigateTo({
			url: '../my/myaddress/myaddress'
		})
	},
	tocancel: function() {
		var that = this;
		wx.showModal({
			title: '提示',
			content: '是否删除商品?',
			success: function(res) {
				if(res.confirm) {
					order.order = [];
					that.setData({
						orderList: order.order,
						allmoney: 0
					})
				}else if(res.cancel) {
					//null
				}
			}
		})
	},
	topay: function() {
		// console.log(time.thisTime);
		wx.requestPayment({
			'timeStamp': time.thisTime,
			'nonceStr': 'dgshdgfkvfj',
			'package': 'prepay_id=',
			'signType': 'MD5',
			'paySign': '',
			'success':function(res){
				console.log(res);
			},
			'fail':function(res){
			}
		})
	},
	onLoad:function(options){
		if(address.address.length < 1) {
			this.setData({
				noaddress: true
			})
		}else {
			this.setData({
				noaddress: false
			})
		}
		var a = 0;
		for(var i=0; i<order.order.length; i++) {
			a+=order.order[i].thingNum * order.order[i].thingPrice
		}
		this.setData({
			addressList: address.address[address.chooseId],
			orderList: order.order,
			allmoney: a
		})
	},
	onReady:function(){
		
	},
	onShow:function(){
		if(wx.getStorageSync('address')) {
			address.address = wx.getStorageSync('address');
		}

		if(wx.getStorageSync('currentIndex')) {
			address.chooseId = wx.getStorageSync('currentIndex');
		}

		this.setData({
			addressList: address.address[address.chooseId],
			orderList: order.order
		})
		if(address.address.length < 1) {
			this.setData({
				noaddress: true
			})
		}else {
			this.setData({
				noaddress: false
			})
		}
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