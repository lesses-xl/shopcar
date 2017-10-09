var app = getApp();

Page({
	data:{
		userInfo: {},
		userImage:null,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	showMyOrder: function() {
		wx.navigateTo({
		  url:"myorder/myorder"
		 });
	},
	showMyAddress: function() {
		wx.navigateTo({
		  url:"myaddress/myaddress"
		 });
	},
	bindMyPhone: function() {
		wx.navigateTo({
		  url:"myphone/myphone"
		 });
	},
	onLoad:function(options){
		if(app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		}else if(this.data.canIUse) {

		}
		// console.log(app.globalData)
		// console.log(this.data.userInfo);
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