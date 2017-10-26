var index = require('../../../utils/inedx.js');

Page({
	data:{
		item: ''
	},
	toCart: function(e) {
		var index = e.currentTarget.dataset.index;
		wx.navigateTo({
		  url: "../../list/detail/detail?index="+index
		})
	},
	onLoad:function(options){
		console.log(options.index)
		var num = Number(options.index)
		this.setData({
			index: index.index[num]
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