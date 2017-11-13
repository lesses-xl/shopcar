// var list = require('../../utils/list.js')
var cart = require('../../utils/cart.js')

Page({
  data: {
    area: ["糕点","小食","果干","坚果","冲饮","茗茶","肉制品","调味","生鲜"],
    imgList: [
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png',
        '../../images/goods/list1.png'
    ],
    indexImg: cart.indexImg,
    list: cart.cart,
    currentIndex: 0,
    ifChoose: false,
    showSearchData: [],
    inputVal: '',
    showMask: false,
    nosearch: true,   //隐藏
    showsearch: true, //隐藏
    recsearch: false  //显示
  },
  changearea: function (e) {
    this.setData({
      currentIndex: e.target.dataset.index,
      ifChoose: true
    })
  },
  getDetail: function(e) {
    // console.log(e.currentTarget.dataset.index);
    // var arr = [this.data.currentIndex,e.currentTarget.dataset.index]
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:"detail/detail?id="+id
     });
  },
  clearinput: function() {
    this.setData({
      inputVal: '',
      recsearch: false,
      showsearch:true,
      nosearch: true
    })
  },
  getSearch: function(e) {
    var val = e.detail.value;

    this.setData({
      inputVal: val
    });

    if(val == '') {
      this.setData({
        recsearch: false,
        showsearch:true,
        nosearch: true
      })
    }else {
      // cart数据遍历查询
      var data = cart.cart;
      var result;
      var results = [];
      for(var i=0; i<data.length; i++) {
        result = data[i]['list'].filter(function(item,index){
          if(item.thingName.indexOf(val) >= 0) {
            results.push(item)
          }
        })
      }

      // console.log(results)
      this.setData({
        showSearchData: results
      })

      if(this.data.showSearchData.length > 0) {
        this.setData({
          recsearch: true,
          showsearch:false,
          nosearch: true
        })
      }else {
        this.setData({
          recsearch: true,
          showsearch:true,
          nosearch: false
        })
      }
    }
  },
  donthide: function() {
    // return false;
    this.setData({
      showMask: true
    })
  },
  toDetail1: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../list/detail/detail?id="+id
    })
  },
  searchToDetail: function(e) {
    var index = e.currentTarget.dataset.index;
    var id = this.data.showSearchData[index].thingId;
    console.log(index,id);
    wx.navigateTo({
      url: '../list/detail/detail?id='+id
    })
  },
  getmask: function() {
    this.setData({
      showMask: true
    })
  },
  hidemask: function() {
    // console.log(1111);
    this.setData({
      showMask: false
    })
    this.clearinput();
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
   this.setData({
     showMask: false
   })
  },
  onHide: function () {
    this.clearinput();
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