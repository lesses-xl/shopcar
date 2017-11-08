
App({
  globalData: {
    //全局对象
    appid: '',
    secret: '',
    userInfo : null
  },
  onLaunch: function () {
    var that = this;
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    if((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600))&&(!userInfo.nickName)) {
      // console.log(userInfo)
      wx.login({
        success: function(res_code) {
          console.log(res_code.code);
          if(res_code.code) {
            wx.getUserInfo({
              // withCredentials: true,
              success: function(res) {
                var objs = {};
                objs.code = res_code.code;
                objs.avatarUrl = res.userInfo.avatarUrl;
                objs.nickName = res.userInfo.nickName;
                objs.encryptedData = res.encryptedData;
                objs.iv = res.iv;
                wx.setStorageSync('userInfo',objs); //存储
                console.log(res);
                that.globalData.userInfo = objs;
                console.log(that.globalData.userInfo)
              }
            });
            var d = that.globalData;
            var u = "https://api.weixin.qq.com/sns/jscode2session?appid="+d.appid+"&secret="+d.secret+"&js_code="+res_code.code+"&grant_type=authorization_code'"; 
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
                console.log(wx.getStorageSync('user'))
              }
            })
          }else {
            console.log('获取用户信息失败!' + res.errMsg)
          }
        },
        fail: function() {
          // console.log(1);
        }
      })
    }
    else {
      // console.log(wx.getStorageSync('userInfo'))
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
  }
})