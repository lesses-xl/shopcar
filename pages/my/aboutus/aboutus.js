var app = getApp();

Page({
	data:{
		code: '',
		encryptedData: '',
		iv: ''
	},
	onLoad:function(options){
		this.setData({
			code: wx.getStorageSync('userInfo').code,
			encryptedData: wx.getStorageSync('userInfo').encryptedData,
			iv: wx.getStorageSync('userInfo').iv
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