var shopThing = require('../../utils/goods.js');
var news = require('../../utils/inedx.js');

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
    news: ''
  },
  onetap: function() {
    wx.navigateTo({
      url: "recommed/recommed?item=item1"
    })
  },
  twotap: function() {
    wx.navigateTo({
      url: "recommed/recommed?item=item2"
    })
  },
  threetap: function() {
    wx.navigateTo({
      url: "recommed/recommed?item=item3"
    })
  },
  toDetail: function(e) {
    // console.log(e.currentTarget)
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: "../list/detail/detail?index="+index
    })
  },
  onLoad: function (options) { 
    // console.log(news.news);
    this.setData({
      news: news.news
    })  
    // console.log(this.data.news)
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
    // Do something when pull down.
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