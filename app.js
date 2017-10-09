App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    var code = null;
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function(res) {
        code = res.code;
        var appId = '...';
        var secret = '...';
        // console.log(res);
        var openid = null;
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          header: {
              'content-type': 'application/json'
          },
          success: function(res) {
            openid = res.data.openid //返回openid
            // console.log(res);
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }  
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
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