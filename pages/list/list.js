Page({
  data: {
    area: ["推荐区","美食区","零食区","水果区","点心","蔬菜","美食1","美食2","美食3","美食4","美食5","美食6"],
    goods: [
      [
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "11111"
        }
      ],
      [
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "22222"
        }
      ],
      [
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        },
        {
          img: '../../images/goods/goods1.png',
          text: "33333"
        }
      ],
    ],
    currentIndex: 0,
    ifChoose: false
  },
  changearea: function (e) {
    this.setData({
      currentIndex: e.target.dataset.index,
      ifChoose: true
    })
  },
  getDetail: function() {
    wx.navigateTo({
      url:"detail/detail"
     });
  },
  onLoad: function (options) {
    // Do some initialize when page load.
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