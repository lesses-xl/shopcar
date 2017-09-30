Page({
	data:{
	  statusType: ["待付款", "待发货", "待收货", "待评价", "已完成"],
	  currentType:0,
	  tabClass: ["", "", "", "", ""]
	},
	statustap: function(e) {
		var curType = e.currentTarget.dataset.index;
		this.data.currentType = curType;
		this.setData({
			currentType: curType
		});
		// this.onShow();
	}
})