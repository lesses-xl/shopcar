var address = require('../../../utils/address.js')

Page({
  data: {
    address: ''
  },
  addaddress: function() {
    var obj = {
        name: '',
        mobile: null,
        detail: '',
        postCode: null,
        delete: false,
        add: true,
        location: true,
        save: false
    }
    address.address.push(obj);
    var length = address.address.length -1;
    // console.log(length)
    wx.navigateTo({
      url: '../addaddress/addaddress?index='+length
    })
  },
  choosethis: function() {

  },
  changeaddress: function(e) {
    var num = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../addaddress/addaddress?index='+num
    })
  },
  onLoad: function () {
      this.setData({
        address: address.address 
      })
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    this.setData({
      address: address.address 
    })
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