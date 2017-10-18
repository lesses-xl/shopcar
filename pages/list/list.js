var list = require('../../utils/list.js')

Page({
  data: {
    area: ["推荐区","美食区","零食区","水果区","点心","蔬菜","美食1","美食2","美食3","美食4","美食5","美食6"],
    goods: list.list,
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
      url:"detail/detail?index="+arr
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