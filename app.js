
App({
  globalData: {
    //全局对象
    userInfo : null
  },
  onLaunch: function () {
    var that = this;
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    // if((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600))&&(!userInfo.nickName)) {
      wx.login({
        success: function(res) {
          console.log(res);
          if(res.code) {
            wx.getUserInfo({
              success: function(res) {
                var objs = {};
                objs.avatarUrl = res.userInfo.avatarUrl;
                objs.nickName = res.userInfo.nickName;
                wx.setStorageSync('userInfo',objs); //存储
                console.log(res)
              }
            });
            var d = that.globalData;
            var u = "https://api.weixin.qq.com/sns/jscode2session?appid="+d.appid+"&secret="+d.secret+"&js_code="+res.code+"&grant_type=authorization_code'"; 
            wx.request({
              url: u,
              data:{},
              method: "GET",
              success: function(res) {
                console.log(res)
                var obj = {};
                obj.openid = res.data.openid;
                obj.expires_in = Date.now() + res.data.expires_in;
                wx.setStorageSync('user',obj); //存储openid
              }
            })
          }else {
            console.log('获取用户信息失败!' + res.errMsg)
          }
        }
      })
    // }
           
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
  }
})