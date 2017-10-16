var shopThing = require('../../utils/goods.js')
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
    haveThing: true,
    ifchoose: false,
    chooseId: 1,
    shopThing: shopThing.shopThing,
    ifchooseall: false,
    allprice: 0,
    ifchoosegoods: false,
    reader: false,
    readeroff: '编辑',
    readeron: '完成',
    chooseNum: "（0）"
  },
  changereader: function() {
    this.setData({
      reader: !this.data.reader
    })
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
      allprice: allprice
    })
    this.chooseNum()
  },
  tobuy: function() {
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
    })
    this.changeprice();
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
