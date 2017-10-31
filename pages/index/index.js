var shopThing = require('../../utils/shopThing.js');
var index = require('../../utils/inedx.js');

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
    swiperCurrent: 0
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
    var index = e.currentTarget.dataset.index;
    var arr = [0,index]
    wx.navigateTo({
      url: "../list/detail/detail?index="+arr
    })
  },
  onLoad: function (options) { 
    this.setData({
      index: index.index
    })  
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
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