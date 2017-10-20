var item = require('../../../utils/inedx.js');

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
		this.setData({
			item: item[options.item]
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