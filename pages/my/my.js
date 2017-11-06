var app = getApp();

Page({
	data:{
		userInfo: {},
		userImage:null,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		ifbind: false,
		mobile: 1,
		code: '',
		coderesult: '',
		codeget: false
	},
	myCode: function() {

	},
	sys: function() {
		var that = this;
		wx.scanCode({
			success: function(res) {
				console.log(res);
				
				// wx.showToast({
				// 	title: res.result
				// })
				that.setData({
					coderesult: res.result,
					codeget: true
				})
			},
			fail: function() {
				that.setData({
					coderesult: '错误!'
				})
			}
		})
	},
	removeStorage: function() {
		console.log(wx.getStorageSync('user'),wx.getStorageSync('userInfo'))
		var kb = 0;
		wx.getStorageInfo({
			success: function(res) {
				kb = res.currentSize;
				console.log(res.currentSize)
			},
			complete: function() {
				wx.showModal({
					title: '提示',
					content: '是否清除缓存('+ kb +'kb)',
					success: function(res) {
						if(res.confirm) {
							wx.clearStorageSync();
						}else if(res.cancel) {
							//null
						}
					}
				})
			}
		})
	},
	myMask: function() {
		this.setData({
			codeget: false
		})
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