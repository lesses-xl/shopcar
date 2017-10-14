var tcity = require("../../../utils/citys.js");

Page({
  data: {
    province: "",
    city: "",
    country: '',
    condition: false,
    name: "",
    phone: "",
    detail: "",
    details: "",
    disabled: false
  },
  getName: function(e) {
    this.data.name = e.detail.value;
  },
  getPhone: function(e) {
    var reg = /^1[0-9]{10}$/;
    var mobile = e.detail.value;
    if(!reg.test(mobile)) {
      this.data.detail = '';
    }else {
      this.data.phone = e.detail.value;
    }
  },
  getDetail: function(e) {
    this.data.detail = e.detail.value;
  },
  saveUserData: function() {
    if(this.data.name =='') {
      wx.showToast({
        title: '请填写姓名!'
      });
    }else {
      if(this.data.phone == '') {
        wx.showToast({
          title: '手机号有误!'
        });
      }else {
        if(this.data.detail == '') {
          wx.showToast({
            title: '请填写详细地址!'
          });
        }else {
          wx.showToast({
            title: '保存完成!'
          });
        }
      }
    }
  },
  onLoad: function () {
    this.getLocation();
  },
  getLocation: function() {
    var that = this;
    var timer = null;
    clearTimeout(timer);
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
         console.log(res); 
         that.setData({
            province: '正在定位...',
            city: '',
            country: '',
            disabled: true
         });
         timer = setTimeout(function() {
            wx.request({
              //http://apis.map.qq.com/ws/geocoder/v1/?location='+res.latitude+','+res.longitude+'&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&get_poi=1
              url: 'https://apis.map.qq.com/ws/geocoder/v1/?location='+res.latitude+','+res.longitude+'&key=RAHBZ-KLP3O-HCJWQ-SVU4O-EHKB3-SLFZA&get_poi=1',
              data: {},
              header: {
                  'Content-Type': 'json'
              },
              success: function(res) {

               console.log(res);
                that.setData({
                   province: res.data.result.address_component.province,
                   city: res.data.result.address_component.city,
                   country: res.data.result.address_component.street,
                   disabled: false
                });
              },
              fail: function(res) {
                wx.showToast({
                 title: '获取失败'
                })
              },
              complete: function(res) {

              }
            })
         },3000);
         
      }
    })
  },
  openMap: function() {
    var that = this;
    wx.getSetting({
      success: function() {
        wx.chooseLocation({
          success: function(res) {
            if(!res.address) {
              that.setData({
                  province: '',
                  city: '',
                  country: '',
                  details: '请选择位置...'
              });
              return;
            }
            if(res.name == '') {
              that.setData({
                  province: '',
                  city: '',
                  country: '',
                  details: res.address
              });
            }else {
              that.setData({
                  province: '',
                  city: '',
                  country: '',
                  details: res.address+"("+res.name+")"
              });
            }            
          }
        })
      },
      cancel: function() {
        that.setData({
            province: '',
            city: '',
            country: '',
            details: '请选择位置...'
        });
      }
    });
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