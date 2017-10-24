var address = require('../../utils/address.js');
var order = require('../../utils/order.js');

Page({
	data:{
		addressList: '',
		orderList: '',
		allmoney: 0
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

	},
	onLoad:function(options){
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