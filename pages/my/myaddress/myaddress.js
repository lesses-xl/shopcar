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
    wx.setStorageSync('currentIndex',this.data.currentIndex)
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
    console.log(wx.getStorageSync('address').length)  
    if(wx.getStorageSync('address')) {
      if(wx.getStorageSync('address').length > address.address.length) {
        address.address = wx.getStorageSync('address');
      }
    }

    this.setData({
      address: address.address,
      currentIndex:address.chooseId
    })
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    var addressStorage = wx.getStorageSync('address');    
    if(wx.getStorageSync('address')) {
      if(wx.getStorageSync('address').length > address.address.length) {
        address.address = wx.getStorageSync('address');
      }
    }

    this.setData({
      address: address.address,
    })
    
    if(wx.getStorageSync('currentIndex')) {
      this.setData({
        currentIndex: wx.getStorageSync('currentIndex')
      })
    }else {
      this.setData({
        currentIndex: address.chooseId
      })
    }
  },
  onHide: function () {
    console.log(address.address)
    
  },
  onUnload: function () {
    console.log(address.address)
    // wx.setStorageSync('address',address.address);
    wx.setStorageSync('currentIndex',this.data.currentIndex)
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