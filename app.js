App({
  onLaunch: function() {
    //当小程序初始化完成时，会触发onLaunch(全局只触发一次)

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs',logs);
  },

  getUserInfo: function(val) {
    var that = this;
    if(this.globalData.userInfo) {
      typeof val == 'function' && val(this.globalData.userInfo)
    }else {
      //调用微信登录接口
      wx.login({
        success: function(res) {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo;
              typeof val == 'function' && val(that.globalData.userInfo);
            }
          })
          console.log(res)
        }
      })
    }
  },

  onShow: function() {
    //当小程序启动时，或从后台进入前台显示，会触发onShow
  },

  onHide: function() {
    //当小程序从前台进入后台，会触发onHide
  },

  onError: function(msg) {
    //当小程序发生脚本错误，或者api调用失败时，会触发onError
  },

  other: function() {
    //全局函数，可以被项目上的其他js文件调用
  },

  globalData: {
    //全局对象
    usrInfo : null
  }
})