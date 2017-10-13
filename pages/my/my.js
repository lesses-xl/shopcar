var app = getApp();

Page({
	data:{
		userInfo: {},
		userImage:null,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		openId: ''
	},
	showMyOrder: function() {
		wx.navigateTo({
		  url:"myaddress/myaddress"
		 });
	},
	showMyAddress: function() {
		wx.navigateTo({
		  url:"myorder/myorder"
		 });
	},
	bindMyPhone: function() {
		wx.navigateTo({
		  url:"myphone/myphone"
		 });
	},
	onLoad:function(options){
		var that = this;
		this.setData({
			userInfo: wx.getStorageSync('userInfo'),
			openId: wx.getStorageSync('user').openid
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