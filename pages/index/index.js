// var shopThing = require('../../utils/shopThing.js');
// var index = require('../../utils/inedx.js');
// var list = require('../../utils/list.js');
var cart = require('../../utils/cart.js');

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 300,
    dotcolor: '#02AAFCFF',
    index: '',
    list: '',
    list1: cart.list1,
    imgList: [],
    showSearchData: [],
    // swiperCurrent: 0,
    inputVal: '',
    showMask: false,
    nosearch: true,   //隐藏
    showsearch: true, //隐藏
    recsearch: false  //显示
  },
  clearinput: function() {
    this.setData({
      inputVal: '',
      recsearch: false,
      showsearch:true,
      nosearch: true
    })
  },
  getSearch: function(e) {
    var val = e.detail.value;

    this.setData({
      inputVal: val
    });

    if(val == '') {
      this.setData({
        recsearch: false,
        showsearch:true,
        nosearch: true
      })
    }else {
      // cart数据遍历查询
      var data = cart.cart;
      var result;
      var results = [];
      for(var i=0; i<data.length; i++) {
        result = data[i]['list'].filter(function(item,index){
          if(item.thingName.indexOf(val) >= 0) {
            results.push(item)
          }
        })
      }

      // console.log(results)
      this.setData({
        showSearchData: results
      })

      if(this.data.showSearchData.length > 0) {
        this.setData({
          recsearch: true,
          showsearch:false,
          nosearch: true
        })
      }else {
        this.setData({
          recsearch: true,
          showsearch:true,
          nosearch: false
        })
      }
    }
  },
  donthide: function() {
    // return false;
    this.setData({
      showMask: true
    })
  },
  swiperChange: function(e){
    this.setData({
        swiperCurrent: e.detail.current
    })
  },
  onetap: function() {
    wx.navigateTo({
      url: "recommed/recommed?index=1"
    }) 
  },
  twotap: function() {
    wx.navigateTo({
      url: "recommed/recommed?index=2"
    })
  },
  threetap: function() {
    wx.navigateTo({
      url: "recommed/recommed?index=3"
    })
  },
  toDetail: function(e) {
    var a = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: "recommed/recommed?index="+a
    })
  },
  toDetail1: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../list/detail/detail?id="+id
    })
  },
  searchToDetail: function(e) {
    var index = e.currentTarget.dataset.index;
    var id = this.data.showSearchData[index].thingId;
    console.log(index,id);
    wx.navigateTo({
      url: '../list/detail/detail?id='+id
    })
  },
  index1: function(e) {
    var id = e.currentTarget.dataset.id;
    // var arr = e.currentTarget.dataset.index.split(',');
    // console.log(arr);
    wx.navigateTo({
      url: "../list/detail/detail?id="+id
    })
  },
  index2: function(e) {
    var id = e.currentTarget.dataset.id;
    // var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?id="+id
    })
  },
  index3: function(e) {
    var id = e.currentTarget.dataset.id;
    // var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?id="+id
    })
  },
  index4: function(e) {
    var id = e.currentTarget.dataset.id;
    // var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?id="+id
    })
  },
  index5: function(e) {
    var id = e.currentTarget.dataset.id;
    // var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?id="+id
    })
  },
  list: function(e) {
    var index = e.currentTarget.dataset.index;

    if(index == 0) {
      console.log(index);
    }else if(index == 1) {
      console.log(index);
    }else if(index == 2) {
      console.log(index);
    }else if(index == 3) {
      console.log(index);
      wx.navigateTo({
        url: 'coupon/coupon'
      })
    }else if(index == 4) {
      console.log(index);
    }else if(index == 5) {
      console.log(index);
    }
  },
  getmask: function() {
    this.setData({
      showMask: true
    })
  },
  hidemask: function() {
    // console.log(1111);
    this.setData({
      showMask: false
    })
    this.clearinput();
  },
  onLoad: function (options) { 
    this.setData({
      showMask: false,
      index: cart.indexImg,
      imgList: cart.list,
      list: cart.cart
    })
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    this.setData({
      showMask: false,
      index: cart.indexImg,
      imgList: cart.list,
      list: cart.cart
    })

    if(wx.getStorageSync('cart')) {
      //null
    }else {
      wx.setStorageSync('cart',cart.cart);
    }
  },
  onHide: function () {
    // Do something when page hide.
    this.clearinput();
  },
  onUnload: function () {
    this.clearinput();
  },
  onPullDownRefresh: function () {
    this.setData({
      index: index.index
    })
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
})