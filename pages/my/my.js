var app = getApp();

Page({
	data:{
		userInfo: {},
		userImage:null,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		ifbind: false,
		mobile: 1,
		code: ''
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
	showMyStar: function() {
		wx.navigateTo({
		  url:"mystar/mystar"
		 });
	},
	bindMyPhone: function() {
		wx.navigateTo({
		  url:"myphone/myphone"
		 });
	},
	tous: function() {
		wx.navigateTo({
			url:'aboutus/aboutus'
		})
	},
	toversion: function() {
		wx.navigateTo({
			url:'version/version'
		})
	},
	tohelp: function() {
		wx.navigateTo({
			url:'help/help'
		})
	},
	tosay: function() {
		wx.navigateTo({
			url:'tosay/tosay'
		})
	},
	onLoad:function(options){
		var that = this;
		this.setData({
			userInfo: wx.getStorageSync('userInfo'),
			code: wx.getStorageSync('userInfo').code
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