var tcity = require("../../../utils/citys.js");

Page({
  data: {
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    name: "",
    phone: "",
    detail: "",
    details: ""
  },
  bindChange: function(e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;
    
    if(val[0] != t[0]){
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0 ; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0 ; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys:citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys:countys,
        values: val,
        value:[val[0],0,0]
      })
      
      return;
    }
    if(val[1] != t[1]){
      console.log('city no');
      const countys = [];

      for (let i = 0 ; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }
      
      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys:countys,
        values: val,
        value:[val[0],val[1],0]
      })
      return;
    }
    if(val[2] != t[2]){
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }  
  },
  open:function(){
    this.setData({
      condition:!this.data.condition
    })
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
    // console.log("onLoad");
    // var that = this;
    
    // tcity.init(that);

    // var cityData = that.data.cityData;

    
    // const provinces = [];
    // const citys = [];
    // const countys = [];

    // for(let i=0;i<cityData.length;i++){
    //   provinces.push(cityData[i].name);
    // }
    // // console.log('省份完成');
    // for (let i = 0 ; i < cityData[0].sub.length; i++) {
    //   citys.push(cityData[0].sub[i].name)
    // }
    // // console.log('city完成');
    // for (let i = 0 ; i < cityData[0].sub[0].sub.length; i++) {
    //   countys.push(cityData[0].sub[0].sub[i].name)
    // }

    // that.setData({
    //   'provinces': provinces,
    //   'citys':citys,
    //   'countys':countys,
    //   'province':cityData[0].name,
    //   'city':cityData[0].sub[0].name,
    //   'county':cityData[0].sub[0].sub[0].name
    // })
    // console.log('初始化完成');
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
            county: '',
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
                   county: res.data.result.address_component.street,
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
            console.log(res)
            that.setData({
                province: '',
                city: '',
                county: '',
                details: res.address
            });
          }
        })
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