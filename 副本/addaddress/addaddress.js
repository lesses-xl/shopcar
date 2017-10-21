var address = require('../../../utils/address.js')

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
    postCode: "",
    disabled: false,
    delete: false,
    add: false,
    save: true,
    code: '',
    mobile:null,
    index: null,
    saveOk: false
  },
  addaddress: function() {
    wx.navigateTo({
      url: '../addaddress/addaddress'
    })
  },
  getCode: function() {
  	var that = this;
  	wx.login({
  		success: function(res) {
  			that.setData({
  				code: res.code
  			})
  		}
  	})
  },
  getPhoneNumber: function(e) {
  	var that = this;
    console.log(e);
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
  getName: function(e) {
    this.data.name = e.detail.value;
  },
  getPhone: function(e) {
      this.setData({
        mobile: e.detail.value
      })
  },
  getDetail: function(e) {
    this.setData({
      details: e.detail.value
    })
    console.log(this.data.details)
  },
  getPost: function(e) {
    this.setData({
      postCode: e.detail.value
    })
  },
  saveUserData: function() {
    var timer = null;
    clearTimeout(timer);
    console.log(this.data.details)
    if(this.data.name =='') {
      wx.showToast({
        title: '请填写姓名!'
      });
    }else {
      if(this.data.mobile == '') {
        wx.showToast({
          title: '手机号为空!'
        });
      }else {
        var reg = /^1[0-9]{10}$/;
        var mobile = this.data.mobile;
        if(!reg.test(mobile)) {
          wx.showToast({
            title: '手机号有误!'
          })
        }else {
          if(!this.data.detail == '' && !this.data.details == '') {
            wx.showToast({
              title: '请填写详细地址!'
            });
          }else {
            if(this.data.postCode == '') {
              wx.showToast({
                title: '请输入邮编!'
              });
            }else {
              this.setData({
                saveOk: true
              });
              address.address[this.data.index].name = this.data.name;
              address.address[this.data.index].mobile = this.data.mobile;
              address.address[this.data.index].detail = this.data.details;
              address.address[this.data.index].postCode = this.data.postCode;
              wx.showToast({
                title: '保存完成!'
              });
              timer = setTimeout(function() {
                wx.navigateBack({
                  url: '../myaddress/myaddress'
                })
              },500)
            }
          }
        }
      }
    }
  },
  addUserData: function() {
  	this.saveUserData();
  },
  deleteUserData: function() {

  },
  onLoad: function (options) {
  	console.log(options);
  	this.setData({
  		delete: address.address[options.index].delete,
  		add: address.address[options.index].add,
      save: address.address[options.index].save,
  		location: address.address[options.index].location,
      index: options.index,
      details: address.address[options.index].detail,
      mobile: address.address[options.index].mobile,
      postCode: address.address[options.index].postCode,
      name: address.address[options.index].name

  	})
    console.log(this.data.details)
  	if(this.data.location) {
  		this.getLocation();
  	}
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
               // console.log(res);
                that.setData({
                   province: res.data.result.address_component.province,
                   city: res.data.result.address_component.city,
                   country: res.data.result.address_component.street,
                   disabled: false
                });
                that.setData({
                   details: that.data.province+that.data.city+that.data.country,
                });
                // console.log(that.data.detail)   
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
              that.getDetail(e);
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
  onShow: function (options) {
    // console.log(options)
  },
  onHide: function (options) {
    console.log(options);
  },
  onUnload: function () {
    if(!this.data.saveOk) {
      address.address.splice(this.data.index,1);
    }
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