var cart = require('../../../utils/cart.js');

Page({
	data:{
		item: '',
		index: '',
		indexs: 0
	},
	toCart: function(e) {
		var index = e.currentTarget.dataset.index;
		var arr = [this.data.indexs,index];
		console.log(arr);
		wx.navigateTo({
		  url: "../../list/detail/detail?list="+arr
		})
	},
	onLoad:function(options){
		var num = Number(options.index)
		this.setData({
			index: cart.cart[num],
			indexs: num
		})
		console.log(this.data.index)
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