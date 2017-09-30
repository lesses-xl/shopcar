Page({
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
	}
})