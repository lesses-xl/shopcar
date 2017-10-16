var shopThing = require('../../utils/goods.js');

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
    news: [
      {
        image: '../../images/goods/goods1.png',
        name: '梨花带雨',
        price: '20'
      },
      {
        image: '../../images/goods/goods1.png',
        name: '梨花带雨',
        price: '20'
      },
      {
        image: '../../images/goods/goods1.png',
        name: '梨花带雨',
        price: '20'
      },
      {
        image: '../../images/goods/goods1.png',
        name: '梨花带雨',
        price: '20'
      },
      {
        image: '../../images/goods/goods1.png',
        name: '梨花带雨',
        price: '20'
      },
      {
        image: '../../images/goods/goods1.png',
        name: '梨花带雨',
        price: '20'
      },
      {
        image: '../../images/goods/goods1.png',
        name: '梨花带雨',
        price: '20'
      }
    ],
    item1: {
      indexImg: '../../../images/goods/s1.png',
      fruit: [
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        }
      ]
    },
    item2: {
      indexImg: '../../../images/goods/s2.png',
      fruit: [
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        }
      ]
    },
    item3: {
      indexImg: '../../../images/goods/list3.png',
      fruit: [
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        },
        {
          image: '../../../images/goods/goods1.png',
          name: '梨花带雨',
          price: 20
        }
      ]
    }
  },
  onetap: function() {
    console.log(this.data.item1)
    var url = this.data.item1;
    wx.navigateTo({
      url: 'recommed/recommed? url='+ url
    })
  },
  onLoad: function (options) {
    var a = wx.getStorageSync('userInfo');

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