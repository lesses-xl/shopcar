var address = require('../../utils/address.js');
var order = require('../../utils/order.js');

Page({
	data:{
		addressList: '',
		orderList: ''
	},
	chooseaddress: function() {
		wx.navigateTo({
			url: '../my/myaddress/myaddress'
		})
	},
	onLoad:function(options){
		this.setData({
			addressList: address.address[address.chooseId],
			orderList: order.order
		})
	},
	onReady:function(){
		
	},
	onShow:function(){
		this.setData({
			addressList: address.address[address.chooseId],
			orderList: order.order
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