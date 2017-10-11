Page({
	data:{
		winWidth: 0,
		winHeight: 0,
		currentTab: 0,
		array: ["1","2","3","4","5","6","7","8","9"],
		index: 0,
		num: 1
	},
	onLoad: function() {  
	  var that = this;  
	  wx.getSystemInfo( {  	
	    success: function( res ) {  
	      that.setData( {  
	        winWidth: res.windowWidth,  
	        winHeight: res.windowHeight  
	      });  
	    }  	
	  });  
	},
	bindChange: function(e) {
		var that = this;
		this.setData({
			currentTab: e.detail.current
		})
	},
	swichNav: function(e) {  	
	  var that = this;  	
	  if( this.data.currentTab === e.target.dataset.current ) {  
	    return false;  
	  } else {  
	    that.setData( {  
	      currentTab: e.target.dataset.current,
	    })  
	  }  
	},
	changeNum: function(e) {
		this.setData({
			index: e.detail.value,
			num: this.data.array[e.detail.value]
		})
		console.log(this.data.index,e)
	},
	toCart: function() {

	},
	onLoad:function(options){
		
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