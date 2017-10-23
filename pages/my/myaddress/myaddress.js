var address = require('../../../utils/address.js')

Page({
  data: {
    address: '',
    currentIndex: 0
  },
  addaddress: function() {
    var obj = {
        name: '',
        mobile: null,
        detail: '',
        postCode: '',
        delete: false,
        add: true,
        location: true,
        save: false,
    }
    address.address.push(obj);
    var length = address.address.length -1;
    wx.navigateTo({
      url: 'addaddress/addaddress?index='+length
    })
  },
  choosethis: function(e) {
    var thisIndex = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: thisIndex
    })
    address.chooseId = thisIndex;
  },
  changeaddress: function(e) {
    var num = e.currentTarget.dataset.index;
    address.address[num].delete = true;
    address.address[num].save = true;
    address.address[num].add = false;
    address.address[num].location = false;
    wx.navigateTo({
      url: 'addaddress/addaddress?index='+num
    })
  },
  onLoad: function () {
      this.setData({
        address: address.address,
        currentIndex:address.chooseId
      })
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    this.setData({
      address: address.address,
      currentIndex: address.chooseId 
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