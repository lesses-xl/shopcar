var star = require('../../../utils/star.js');
var cart = require('../../../utils/cart.js');
/*
	缓存保存以后star需要同步cart.js	
*/

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
		wx.navigateTo({
			url: '../../list/detail/detail?id='+id
		})
	},
	delstar: function(e) {
		var that = this;
		var id =  e.currentTarget.dataset.id;
		wx.showModal({
			title: '提示',
			content: '是否删除',
			success: function(res) {
				if(res.confirm) {
					var index = e.currentTarget.dataset.index;				
					// console.log(index);

					star.star.splice(index,1);
					// console.log(star.star)
					that.setData({
						starList: star.star
					})

					wx.setStorageSync('star',star.star);

					/*同步cart.js文件*/
					// console.log(cart.cart.length)
					for(var i=0; i<cart.cart.length; i++) {
						for(var j=0; j<cart.cart[i].list.length; j++) {
							// console.log(cart.cart[i].list[j].thingId)
							// console.log(id,cart.cart[i].list[j].thingId)
							if(cart.cart[i].list[j].thingId == id) {
								cart.cart[i].list[j].star = false

								// console.log(cart.cart[i].list[j])
							}
						}
					}

					if(star.star.length <= 0) {
						that.setData({
							havestar: false
						})
					}
					wx.setStorageSync('cart',cart.cart);
					console.log(cart.cart);
				}else if(res.cancel) {
					// null 
				}
			}
		});

		console.log(star.star);
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
		if(wx.getStorageSync('star').length > star.star.length) {
			star.star = wx.getStorageSync('star');
			this.setData({
				starList: star.star
			})
		}else {		
			this.setData({
				starList: star.star
			})
		}


		if(star.star.length <= 0) {
			this.setData({
				havestar: false
			})
		}else {
			this.setData({
				havestar: true
			})
		}

		wx.setStorageSync('star',star.star)
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