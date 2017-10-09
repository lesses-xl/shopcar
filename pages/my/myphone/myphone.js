Page({
  data: {
    phoneNumber: 0,
    ifSend: false,
    ifMobile: false,
    getCode: '获取验证码',
    disabled: false,
    code: null
  },
  getPhoneNumber: function(e) {
    this.data.phoneNumber = e.detail.value;

  },
  phoneIfTrue: function() {  
    var reg = /^1[0-9]{10}$/;
    var mobile = this.data.phoneNumber;
    if(!reg.test(mobile)) {
      wx.showToast({
        title: '手机号有误!'
      })
      this.setData({
        ifMobile: false
      })
      return false;
    }else {
      this.setData({
        ifMobile: true
      })
    }
  },
  getAuthCode: function() {
    this.phoneIfTrue();
    if(!this.data.ifMobile) {
      wx.showToast({
        title: '手机号有误!'
      });
    }else {
      var that = this;
      var t = 10;
      var timer = null;
      wx.showToast({
        title: '验证码已发送'
      });
      clearInterval(timer);
      timer = setInterval(function() {
        t = t-1;
        that.setData({
          getCode: t + 's后重发',
          disabled: true
        });
        if(t == 0) {
          clearInterval(timer);
          that.setData({
            getCode: '获取验证码',
            disabled: false
          });
        }
        wx.request({
          url: '',
          data: {
            
          },
          method: "POST",
          header: {
              'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            
          },
          fail: function(res) {
            
          },
          complete: function(res) {
            
          }
        })
      },1000);
    }
  },
  codeTrue: function(e) {
    this.setData({
      code: e.detail.value,
      ifSend: true
    })
  },
  bindPhone: function() {
    this.phoneIfTrue();
    if(!this.data.ifMobile) {
      wx.showToast({
        title: '手机号有误!'
      });
    }else {
      if(!this.data.ifSend) {
        wx.showToast({
          title: '验证码有误!'
        });
      }else {
        //绑定
      }
    }
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