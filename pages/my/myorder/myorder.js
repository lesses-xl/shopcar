var order = require('../../../utils/order.js')

Page({
	data:{
	  statusType: ["待付款", "待发货", "待收货", "待评价", "已完成"],
	  currentType:0,
	  tabClass: ["", "", "", "", ""],
	  orderList: order.order,
	  haveOrder: false
	},
	statustap: function(e) {
		var curType = e.currentTarget.dataset.index;
		this.data.currentType = curType;
		this.setData({
			currentType: curType
		});
	},
	onLoad:function(options){
		this.setData({
			orderList: order.order
		})	
	},
	onReady:function(){
		
	},
	onShow:function(){
		this.setData({
			orderList: order.order,
		})	
		if(order.order.length > 0) {
			this.setData({
				haveOrder: true
			})
		}else {
			this.setData({
				haveOrder: false
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