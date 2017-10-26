var list = require('../../utils/list.js')

Page({
  data: {
    area: ["糕点","小食","果干","坚果","冲饮","茗茶","肉制品","调味","生鲜"],
    imgList: [
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png'
    ],
    list: list.list,
    currentIndex: 0,
    ifChoose: false
  },
  changearea: function (e) {
    this.setData({
      currentIndex: e.target.dataset.index,
      ifChoose: true
    })
  },
  getDetail: function(e) {
    // console.log(e.currentTarget.dataset.index);
    var arr = [this.data.currentIndex,e.currentTarget.dataset.index]
    wx.navigateTo({
      url:"detail/detail?list="+arr
     });
  },
  onLoad: function (options) {
    // console.log(goods.goods)
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