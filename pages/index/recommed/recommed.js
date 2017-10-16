var item = require('../../../utils/inedx.js');

Page({
	data:{
		// item: {
		// 	indexImg: '../../../images/goods/s1.png',
		// 	fruit: [
		// 		{
		// 			image: '../../../images/goods/goods1.png',
		// 			name: '梨花带雨',
		// 			price: 20
		// 		},
		// 		{
		// 			image: '../../../images/goods/goods1.png',
		// 			name: '梨花带雨',
		// 			price: 20
		// 		},
		// 		{
		// 			image: '../../../images/goods/goods1.png',
		// 			name: '梨花带雨',
		// 			price: 20
		// 		},
		// 		{
		// 			image: '../../../images/goods/goods1.png',
		// 			name: '梨花带雨',
		// 			price: 20
		// 		},
		// 		{
		// 			image: '../../../images/goods/goods1.png',
		// 			name: '梨花带雨',
		// 			price: 20
		// 		}
		// 	]
		// },
		item: ''
	},
	onLoad:function(options){
		// console.log(options.item)	
		console.log(item[options.item]);
		this.setData({
			item: item[options.item]
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