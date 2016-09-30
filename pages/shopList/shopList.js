var app=getApp();
Page({
  data: {
    point:[
      {id:1,icon:"/images/1.jpg",name:"商品1",dsc:"商品描述"},
      {id:2,icon:"/images/2.jpg",name:"商品2",dsc:"商品描述"},
      {id:3,icon:"/images/3.jpg",name:"商品3",dsc:"商品描述"},
      {id:4,icon:"/images/1.jpg",name:"商品4",dsc:"商品描述"},
      {id:5,icon:"/images/2.jpg",name:"商品5",dsc:"商品描述"},
      {id:6,icon:"/images/3.jpg",name:"商品6",dsc:"商品描述"},
      {id:7,icon:"/images/1.jpg",name:"商品7",dsc:"商品描述"},
      {id:8,icon:"/images/2.jpg",name:"商品8",dsc:"商品描述"},
      {id:9,icon:"/images/3.jpg",name:"商品9",dsc:"商品描述"},
      {id:10,icon:"/images/1.jpg",name:"商品10",dsc:"商品描述"}
    ]
  },
  goShop:function(event){
      app.globalData.shopId=event.currentTarget.dataset.pid;
    wx.navigateTo({
        url: '/pages/productList/productList'
    })
  },
  onLoad: function () {
      console.log(app.globalData.typeId)
  }
})
