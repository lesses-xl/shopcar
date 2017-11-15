var star = require('../../../utils/star.js');
var cart = require('../../../utils/cart.js');
/*
	缓存保存以后star需要同步cart.js	
*/

Page({
	data:{
		starList: '',
		havestar: false,
		ifchoose: true,
		toolName: '管理',
		chooseAll: false
	},
	tolist: function() {
		console.log(1);
		wx.switchTab({
			url: '../../list/list'
		})
	},
	searchThing: function(e) {
		var val = e.detail.value;
		var arr = [];

		if(val == '') {
			for(var j=0; j<star.star.length; j++) {
				star.star[j].show = true
			}
		}else {
			for(var j=0; j<star.star.length; j++) {
				star.star[j].show = false
			}

			for(var i=0; i<star.star.length; i++) {
				if(star.star[i].thingName.indexOf(val) >= 0) {
					arr.push(star.star[i].thingId);
				}
			}

			console.log(arr);
			for(var j=0; j<star.star.length; j++) {
				for(var k=0; k<arr.length; k++) {
					if(star.star[j].thingId === arr[k]) {
						star.star[j].show = true
					}
				}
			}
		}

		this.setData({
			starList: star.star
		})
	},
	opendetail: function(e) {
		var id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: '../../list/detail/detail?id='+id
		})
	},
	delstar: function(e) {
		console.log('a');
		var that = this;
		var id =  e.currentTarget.dataset.id;
		wx.showModal({
			title: '提示',
			content: '是否删除收藏',
			success: function(res) {
				if(res.confirm) {
					var index = e.currentTarget.dataset.index;				
					// console.log(index);

					star.star.splice(index,1);
					// console.log(star.star)
					that.setData({
						starList: star.star
					})

					that.sync(id);
					// console.log(cart.cart);
				}else if(res.cancel) {
					// null 
				}
			}
		});

		console.log(star.star);
	},
	chooseone: function(e) {
		var id = e.currentTarget.dataset.id;
		for(var i=0; i<star.star.length; i++) {
			if(star.star[i].thingId === id) {
				star.star[i].starChoose = !(star.star[i].starChoose)
			}
		}
		this.setData({
			starList: star.star
		})

		this.chooseAll();
	},
	chooseAll: function() {
		var length = 0;
		for(var i=0; i<star.star.length; i++) {
			if(star.star[i].starChoose) {
				length++;
			}
		}

		console.log(length,star.star.length);
		if(length == star.star.length) {
			this.setData({
				chooseAll: true
			})
		}else {
			this.setData({
				chooseAll: false
			})
		}

		this.setData({
			starList: star.star
		})
	},
	chooseall: function() {
		var bol = !(this.data.chooseAll);

		for(var i=0; i<star.star.length; i++) {
			star.star[i].starChoose = bol;
		}

		this.chooseAll();
	},
	delall: function() {
		var length = 0;
		var that = this;
		for(var i=0; i<star.star.length; i++) {
			if(star.star[i].starChoose) {
				length++;
			}
		}
		if(length <= 0) {
			wx.showToast({
				title: '请选中商品',
				image: '../../../images/ali/b-close.png'
			})
		}else {
			wx.showModal({
				title: '提示',
				content: '确认删除?',
				success: function(res) {
					if(res.confirm) {
						var arr = [];
						for(var i=0; i<star.star.length; i++) {
							if(star.star[i].starChoose) {
								arr.push(star.star[i].thingId);	
							}
						}
						for(var j=0; j<star.star.length; j++) {
							for(var k=0; k<arr.length; k++) {
								if(star.star[j].thingId == arr[k]) {
									star.star[j].star = false;
									star.star.splice(j,1);
								}
							}
						}
						that.setData({
							starList: star.star
						})

						if(that.data.starList.length <=0 ) {
							that.setData({
								havestar: false,
								chooseAll: false,
								ifchoose: true
							})
						}
						wx.setStorageSync('star',star.star);

						for(var a=0; a<cart.cart.length; a++) {
							for(var b=0; b<cart.cart[a].list.length; b++) {
								for(var c=0; c<arr.length; c++) {
									if(cart.cart[a].list[b].thingId == arr[c]) {
										cart.cart[a].list[b].star = false
									}
								}
							}
						}
						console.log()

						wx.setStorageSync('cart',cart.cart);
					}
				}
			})
		}
	},
	changeChoose: function() {
		if(this.data.ifchoose) {
			this.setData({
				ifchoose: false,
				toolName: '取消'
			})
		}else {
			this.setData({
				ifchoose: true,
				toolName: '管理'
			})
		}
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
	sync: function(id) {
		wx.setStorageSync('star',star.star);

		/*同步cart.js文件*/
		for(var i=0; i<cart.cart.length; i++) {
			for(var j=0; j<cart.cart[i].list.length; j++) {
				if(cart.cart[i].list[j].thingId == id) {
					cart.cart[i].list[j].star = false
				}
			}
		}

		if(star.star.length <= 0) {
			that.setData({
				havestar: false,
				ifchoose: true
			})
		}
		wx.setStorageSync('cart',cart.cart);
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
		wx.setStorageSync('star',star.star);

		for(var a=0; a<cart.cart.length; a++) {
			for(var b=0; b<cart.cart[a].list.length; b++) {
				for(var c=0; c<star.star.length; c++) {
					if(cart.cart[a].list[b].thingId == star.star[c].thingId) {
						cart.cart[a].list[b].star = star.star[c].star
					}
				}
			}
		}

		wx.setStorageSync('cart',cart.cart);
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		