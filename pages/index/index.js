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
    imgUrls: [
      '../../images/goods/list1.png',
      '../../images/goods/list2.png',
      '../../images/goods/list3.png'
    ],
    index1: '精选主题',
    index2: '最近新品',
    theme1: '../../images/goods/s1.png',
    theme2: '../../images/goods/s2.png',
    theme3: '../../images/goods/list3.png',
    index: '',
    list: '',
    imgList: [],
    swiperCurrent: 0,
    showMask: false
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
  index1: function(e) {
    // var arr = [0,e.currentTarget.dataset.index]
    var arr = e.currentTarget.dataset.index.split(',');
    console.log(arr);
    wx.navigateTo({
      url: "../list/detail/detail?list="+arr
    })
  },
  index2: function(e) {
    // var arr = [1,e.currentTarget.dataset.index]
    var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?list="+arr
    })
  },
  index3: function(e) {
    // var arr = [2,e.currentTarget.dataset.index]
    var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?list="+arr
    })
  },
  index4: function(e) {
    // var arr = [3,e.currentTarget.dataset.index]
    var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?list="+arr
    })
  },
  index5: function(e) {
    // var arr = [3,e.currentTarget.dataset.index]
    var arr = e.currentTarget.dataset.index.split(',');
    wx.navigateTo({
      url: "../list/detail/detail?list="+arr
    })
  },
  getmask: function() {
    this.setData({
      showMask: true
    })
  },
  hidemask: function() {
    this.setData({
      showMask: false
    })
  },
  onLoad: function (options) { 
    // this.setData({
    //   index: index.index,
    //   imgList: index.list,
    //   list: list.list
    // })  
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
    // this.setData({
    //   showMask: false,
    //   list: list.list
    // })

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
  },
  onUnload: function () {
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