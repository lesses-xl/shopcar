var shopThing = require('../../utils/shopThing.js');
var index = require('../../utils/inedx.js');
var list = require('../../utils/list.js');
var pic = require('../../util/base.js');

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
    var index = e.currentTarget.dataset.index;
    var arr = [0,index]
    wx.navigateTo({
      url: "../list/detail/detail?index="+arr
    })
  },
  index1: function(e) {
    console.log(e);
    var arr = [0,e.currentTarget.dataset.index]
    wx.navigateTo({
      url: "../list/detail/detail?index="+arr
    })
  },
  index2: function(e) {
    console.log(e);
    var arr = [1,e.currentTarget.dataset.index]
    wx.navigateTo({
      url: "../list/detail/detail?index="+arr
    })
  },
  index3: function(e) {
    console.log(e);
    var arr = [2,e.currentTarget.dataset.index]
    wx.navigateTo({
      url: "../list/detail/detail?index="+arr
    })
  },
  index4: function(e) {
    console.log(e);
    var arr = [3,e.currentTarget.dataset.index]
    wx.navigateTo({
      url: "../list/detail/detail?index="+arr
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
    this.setData({
      index: index.index,
      imgList: index.list,
      list: list.list
    })  
    // console.log(index.list)
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    this.setData({
      showMask: false,
      list: list.list
    })

    wx.setStorageSync('list',list.list);
    wx.setStorageSync('index',index.index);
    wx.setStorageSync('shopThing',shopThing.shopThing);
    wx.setStorageSync('pic',pic.pic);
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