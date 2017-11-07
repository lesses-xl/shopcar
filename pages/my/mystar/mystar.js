var star = require('../../../utils/star.js');

Page({
	data:{
		starList: '',
		havestar: false
	},
	tolist: function() {
		console.log(1);
		wx.switchTab({
			url: '../../list/list'
		})
	},
	opendetail: function(e) {
		console.log(e)
		var id = e.currentTarget.dataset.id;
		
	},
	onLoad:function(options){
		this.setData({
			starList: star.star
		})
		if(star.star.length <= 0) {
			this.setData({
				havestar: false
			})
		}else {
			this.setData({
				havestar: true
			})
		}
	},
	onReady:function(){
		
	},
	onShow:function(){
		if(star.star.length <= 0) {
			this.setData({
				havestar: false
			})
		}else {
			this.setData({
				havestar: true
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