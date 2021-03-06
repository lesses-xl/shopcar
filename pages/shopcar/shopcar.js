var shopThing = require('../../utils/shopThing.js');
var order = require('../../utils/order.js');
/*
  1.单个选中
  2.全部选中
  3.数量增加
  4.金额修改
  5.同步utils数据
  6.编辑完成

*/
Page({
  data:{
    haveThing: false,
    ifchoose: false,
    chooseId: 1,
    shopThing: shopThing.shopThing,
    ifchooseall: false,
    allprice: 0,
    ifchoosegoods: false,
    reader: false,
    readeroff: '编辑',
    readeron: '完成',
    chooseNum: "（0）",
    onePrice: 0
  },
  changereader: function() {
    this.setData({
      reader: !this.data.reader
    })
  },
  getTime: function () {
    var timeNumber = 0;
    var dates = new Date();
    var year = dates.getFullYear() + '';
    var month = dates.getMonth() + 1 + '';
    var date = dates.getDate() + '';
    var minute = dates.getMinutes() + '';
    var second = dates.getSeconds() + '';
    var time = dates.getTime() % 6 + '';
    time = parseInt(Math.random() * time);

    if(month.length < 2) {
      month = '0' + month
    }

    if(minute.length < 2) {
      minute = '0' + minute
    }

    if(second.length < 2) {
      second = '0' + second
    }

    return timeNumber = year + month + date + minute + second + minute + second + time;
  },
  chooseNum: function() {
    var num = 0;
    for(var i=0; i<this.data.shopThing.length; i++) {
      if(this.data.shopThing[i].choose == true) {
        num += this.data.shopThing[i].thingNum;
      }     
    }
    this.setData({
      chooseNum: "（"+num+"）"
    })
  },
  subnum: function(e) {
    // this.download();
    var index = e.currentTarget.dataset.index;
    var num = this.data.shopThing[index].thingNum;
    var Num = "shopThing["+index+"].thingNum";
    if(num <= 1) {
      this.setData({
        [Num]: 1
      })
    }else {
      this.setData({
        [Num]: num-1
      })
    }
    this.changeprice();
  },
  addnum: function(e) {
    // this.download()
    var index = e.currentTarget.dataset.index;
    var num = this.data.shopThing[index].thingNum;
    var Num = "shopThing["+index+"].thingNum";
    if(num >= 99) {
      this.setData({
        [Num]: 99
      })
    }else {
      this.setData({
        [Num]: num+1
      })
    }
    this.changeprice();
  },
  chooseall: function() {
    var choose = this.data.ifchooseall;
    this.setData({
      ifchooseall: !choose
    })
    for(var i=0; i<this.data.shopThing.length; i++) {
      var s = "shopThing["+i+"].choose";
      this.setData({
        [s]: this.data.ifchooseall
      })
    }
    this.changeprice();
  },
  chooseone: function(e) {
    var index = e.currentTarget.dataset.index;
    var bool = this.data.shopThing[index].choose;
    var Bool = "shopThing["+index+"].choose";
    this.setData({
      [Bool]: !bool
    })
    this.changeprice();
    console.log(this.data.shopThing)
  },
  deletethis: function(e) {
    var index = e.currentTarget.dataset.index;
    this.data.shopThing.splice(index,1);
    this.setData({
      shopThing:this.data.shopThing
    })
    if(this.data.shopThing.length == 0) {
      this.setData({
        haveThing: false
      })
    }
    this.changeprice();
  },
  deleteall: function() {

    var arr = [];
    var bool = this.data.shopThing.some(function(item,index){
      if(item.choose == true) {
        return true;
      }
    });
    this.data.shopThing.forEach(function(item,index){
      if(item.choose == true) {
        arr.push(index);
      }
    })
    if(bool) {
      var s = this.data.shopThing;
      for(var i=arr.length-1; i >= 0; i--) {
        s.splice(arr[i],1)
      }
      this.setData({
        shopThing: s
      })
    }else {
      wx.showToast({
        title: '请选择!'
      })
    }
    if(this.data.shopThing.length <= 0) {
      this.setData({
        haveThing: false
      })
    }
    this.changeprice();
  },
  changeprice: function() {
    var num = 0;
    var price = 0;
    var allprice = 0;
    var choosenum = 0;
    var length = this.data.shopThing.length;
    for(var i=0; i<this.data.shopThing.length; i++) {
      if(this.data.shopThing[i].choose == true) {
        choosenum++;
        allprice += this.data.shopThing[i].thingNum * this.data.shopThing[i].thingPrice;
      }
      if(choosenum == length) {
        this.setData({
          ifchooseall: true 
        })
      }else {
        this.setData({
          ifchooseall: false
        })
      }
    }
    if(choosenum == 0) {
      this.setData({
        allprice: 0 
      })
    }
    this.setData({
      allprice: allprice.toFixed(2)
    })
    this.chooseNum()
  },
  tolist: function() {
    wx.switchTab({
      url: '../list/list'
    });
  },
  tobuy: function() {
    shopThing.shopThing = this.data.shopThing;
    for(var i=0; i<shopThing.shopThing.length; i++) {
      console.log(i)
      if(shopThing.shopThing[i].choose == true) {
        var obj = {
          thingNumber: this.getTime(),
          thingName: shopThing.shopThing[i].thingName,
          thingImg: shopThing.shopThing[i].thingImg,
          thingPrice: shopThing.shopThing[i].thingPrice,
          thingNum: shopThing.shopThing[i].thingNum,
          thingId: shopThing.shopThing[i].thingId,
          thingPay: '待付款',
          star: false
        }
        // console.log(obj);
        order.order.push(obj);
        console.log(order.order);
        console.log(i);
        shopThing.shopThing[i] = '';
      }
    }

    for(var j=0; j<shopThing.shopThing.length; j++) {
      if(shopThing.shopThing[j] == '') {
        shopThing.shopThing.splice(j,1);
        j = j-1;
      }
    }

    this.setData({
      shopThing: shopThing.shopThing,
      haveThing: true
    })
    if(this.data.shopThing.length == 0) {
      this.setData({
        haveThing: false
      })
    }
    wx.navigateTo({
      url: '../buy/buy'
    })    
  },
  onLoad:function(options){
    this.setData({
      shopThing: shopThing.shopThing
    })
    this.changeprice();
  },
  onReady:function(){    
  },
  onShow:function(){
    this.setData({
      shopThing: shopThing.shopThing
    });
    if(this.data.shopThing.length > 0) {
      this.setData({
        haveThing: true
      })
    }
    this.changeprice();
    wx.setStorageSync('order',order.order);
    wx.setStorageSync('shopThing',shopThing.shopThing);
  },
  onHide:function(){
    shopThing.shopThing = this.data.shopThing;
  },
  onUnload:function(){
    
  },
  onPullDownRefresh:function(){
    
  },
  onReachBottom:function(){
    
  }
})    
