Page({
  data: {
    phoneNumber: 0,
    ifSend: false,
    ifMobile: false,
    getCode: '获取验证码',
    disabled: false,
    code: null,
    mobile: null,
    wrongText: ''
  },
  getPhoneNumber: function(e) {
    this.data.mobile = e.detail.value;
  },
  phoneIfTrue: function() {  
    var reg = /^1[0-9]{10}$/;
    var mobile = this.data.mobile;
    if(!reg.test(mobile)) {
      // wx.showToast({
      //   title: '手机号有误!'
      // })
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
    console.log(this.data.mobile)
    this.phoneIfTrue();
    if(!this.data.ifMobile) {
      wx.showToast({
        title: '手机号有误!'
      });
    }else {
      var that = this;
      var t = 60;
      var timer = null;
      wx.showToast({
        title: '验证码已发送'
      });
      wx.request({
        url: 'https://api.feiwuhb.com/getUserPhoneNumber',
        data: {
          phoneNumber: this.data.mobile
        },
        method: "POST",
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          console.log(res);
        },
        fail: function(res) {
          
        },
        complete: function(res) {
          
        }
      })
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
      // wx.showToast({
      //   title: '手机号有误!'
      // });
      this.setData({
        wrongText: '手机号有误!'
      })
    }else {
      if(!this.data.ifSend) {
        this.setData({
          wrongText: '验证码有误!'
        })
      }else {
        //绑定
        this.setData({
          wrongText: '通过!'
        })
      }
    }
  },
  getCode: function() {
    var that = this;
    wx.login({
      success: function(res) {
        that.setData({
          code: res.code
        })
        console.log(that.data.code)
      }
    })
  },
  getPhoneNumbers: function(e) {
    var that = this;
    console.log(e);
    console.log(that.data.code)
    wx.request({
      url: 'https://api.feiwuhb.com/getUserPhoneNumber',
      data: {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        code: that.data.code
      },
      method: "POST",
      header: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        console.log(res);
        that.setData({
          mobile: res.data.userPhoneNumber
        })
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {       
        console.log(that.data.mobile)
      }
    })
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