var shopThing = require('../../utils/goods.js')

Page({
  data:{
    haveThing: true,
    chooseId: 1,
    // shopThing: [
    //   {
    //     "thingName": "iphone X",
    //     "thingImg": "../../images/goods01.png",
    //     "thingPrice": 10,
    //     "thingNum": 1,
    //     "thingId": 1,
    //     "choose": false
    //   },
    //   {
    //     "thingName": "苹果",
    //     "thingImg": "../../images/goods01.png",
    //     "thingPrice": 10,
    //     "thingNum": 1,
    //     "thingId": 2,
    //     "choose": false
    //   },
    //   {
    //     "thingName": "梨",
    //     "thingImg": "../../images/goods01.png",
    //     "thingPrice": 10,
    //     "thingNum": 1,
    //     "thingId": 3,
    //     "choose": false
    //   },
    //   {
    //     "thingName": "香蕉",
    //     "thingImg": "../../images/goods01.png",
    //     "thingPrice": 10,
    //     "thingNum": 1,
    //     "thingId": 4,
    //     "choose": false
    //   },
    //   {
    //     "thingName": "橘子",
    //     "thingImg": "../../images/goods01.png",
    //     "thingPrice": 10,
    //     "thingNum": 1,
    //     "thingId": 5,
    //     "choose": false
    //   },
    //   {
    //     "thingName": "火龙果",
    //     "thingImg": "../../images/goods01.png",
    //     "thingPrice": 10,
    //     "thingNum": 1,
    //     "thingId": 6,
    //     "choose": false
    //   }
    // ],
    shopThing: shopThing.shopThing,
    ifchooseall: false,
    allprice: 0,
    ifchoosegoods: false,
    reader: false,
    readeroff: '编辑',
    readeron: '完成'
  },
  changereader: function() {
    this.setData({
      reader: !this.data.reader
    })
  },
  chooseone: function(e) {
    var id = e.currentTarget.dataset.index;
    var thisChoose = "shopThing["+id+"].choose";
    var fan = !(this.data.shopThing[id].choose);
    console.log(thisChoose,fan)
    this.setData({
      [thisChoose]: fan
    })
    console.log(shopThing.shopThing);
    shopThing.shopThing = this.data.shopThing;
    this.changeprice();
  },
  chooseall: function() {
    var b = this.data.ifchooseall;
    this.setData({
      ifchooseall: !b
    })
    console.log(this.data.ifchooseall)
    for(var i=0; i<this.data.shopThing.length; i++) {
      var this_ = "shopThing["+i+"].choose"
      this.setData({
        [this_]: !b
      })
    }
    console.log(shopThing.shopThing)
    shopThing.shopThing = this.data.shopThing;
    this.changeprice();
  },
  subnum: function(e) {
    var i = e.currentTarget.dataset.index;
    // var n = this.data.shopThing[i].thingNum;
    var n = shopThing.shopThing[i].thingNum;
    var N = "shopThing["+i+"].thingNum"
    if(n <= 1) {
      // this.setData({
      //   [N]:1
      // }) 
      shopThing.shopThing[i].thingNum = 1;
      this.setData({
        shopThing:shopThing.shopThing
      }) 
    }else {
      // this.setData({
      //   [N]: n-1
      // }) 
      shopThing.shopThing[i].thingNum -= 1;
      this.setData({
        shopThing:shopThing.shopThing
      }) 
    }
    shopThing.shopThing = this.data.shopThing;
    this.changeprice();
  },
  addnum: function(e) {
    var i = e.currentTarget.dataset.index;
    // var n = this.data.shopThing[i].thingNum;
    var n = shopThing.shopThing[i].thingNum;
    var N = "shopThing["+i+"].thingNum"
    if(n >= 99) {
      // this.setData({
      //   [N]:99
      // }) 
      shopThing.shopThing[i].thingNum = 99;
      this.setData({
        shopThing:shopThing.shopThing
      })
    }else {
      // this.setData({
      //   [N]: n+1
      // }) 
      shopThing.shopThing[i].thingNum += 1;
      this.setData({
        shopThing:shopThing.shopThing
      })
    }
    shopThing.shopThing = this.data.shopThing;
    console.log(shopThing.shopThing)
    this.changeprice();
  },
  changeprice: function() {
    // this.setData({
    //   shopThing: shopThing.shopThing
    // })
    var length = this.data.shopThing.length;
    var num = 0;
    var price = 0;
    var oneprice = 0;
    for(var i=0; i<length; i++) {
      var truenum = 0;
      var this_ = this.data.shopThing[i];
      if(this_.choose) {
        truenum++;
        num = this_.thingNum-0;
        price = this_.thingPrice-0;
        oneprice += num*price
        // this.setData({
        //   ifchooseall: true
        // })
        if(truenum == length) {
          this.setData({
            ifchooseall: true
          })
        }
      }
      else {
        this.setData({
          ifchooseall: false
        })
        oneprice: '';
      }
    }
    this.setData({
      allprice: oneprice
    })
    // console.log(num,price,oneprice)
  },
  deletethis: function(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    this.data.shopThing.splice(index,1);
    // console.log(shopThing)
    this.setData({
      shopThing:this.data.shopThing
    })
    if(this.data.shopThing.length == 0) {
      this.setData({
        haveThing: false
      })
    }
    shopThing.shopThing = this.data.shopThing;
    this.changeprice();
  },

  deleteall: function() {
    var that = this
    if(this.data.ifchooseall === true) {
      wx.showModal({
        title: '提示',
        content: '是否要全部删除',
        success: function(res) {
          if(res.confirm) {
            that.setData({
              shopThing: []
            });
            that.changeprice();
            that.setData({
              haveThing: false
            })
            shopThing.shopThing = that.data.shopThing;
          }
        }
      })
    }else {
      wx.showToast({
        title: '请选中!'
      })
    }
  },

  onLoad:function(options){
    // this.setData({
    //     shopThing:shopThing.shopThing
    // })
    if(shopThing.shopThing.length >= 1) {
      this.setData({
        haveThing: true
      })
    }else {
      this.setData({
        haveThing: false
      })
    }
    this.changeprice();
    console.log(shopThing)
  },
  onReady:function(){
    
  },
  onShow:function(){
    this.setData({
        shopThing:shopThing.shopThing
    })
    if(shopThing.shopThing.length >= 1) {
      this.setData({
        haveThing: true
      })
    }else {
      this.setData({
        haveThing: false
      })
    }
    this.changeprice();
  },
  onHide:function(){
    
  },
  onUnload:function(){
    
  },
  onPullDownRefresh:function(){
    
  },
  onReachBottom:function(){
    
  }
})    
