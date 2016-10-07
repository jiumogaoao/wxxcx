var app=getApp();
Page({
  data: {
    point:[
      {id:0,name:"商家1",total:99,luggage:44,list:[
          {id:0,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:1,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77},
          {id:2,icon:'/images/3.jpg',title:"商品3",dsc:"描述描述",price:99,count:77},
          {id:3,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:4,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77}
      ]},
      {id:0,name:"商家2",total:99,luggage:44,list:[
          {id:0,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:1,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77},
          {id:2,icon:'/images/3.jpg',title:"商品3",dsc:"描述描述",price:99,count:77},
          {id:3,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:4,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77}
      ]},
      {id:0,name:"商家3",total:99,luggage:44,list:[
          {id:0,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:1,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77},
          {id:2,icon:'/images/3.jpg',title:"商品3",dsc:"描述描述",price:99,count:77},
          {id:3,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:4,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77}
      ]},
      {id:0,name:"商家4",total:99,luggage:44,list:[
          {id:0,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:1,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77},
          {id:2,icon:'/images/3.jpg',title:"商品3",dsc:"描述描述",price:99,count:77},
          {id:3,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:4,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77}
      ]},
      {id:0,name:"商家5",total:99,luggage:44,list:[
          {id:0,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:1,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77},
          {id:2,icon:'/images/3.jpg',title:"商品3",dsc:"描述描述",price:99,count:77},
          {id:3,icon:'/images/1.jpg',title:"商品1",dsc:"描述描述",price:99,count:77},
          {id:4,icon:'/images/2.jpg',title:"商品2",dsc:"描述描述",price:99,count:77}
      ]}
    ]
  },
  goPay:function(){
      
  },
  onLoad: function () {
      console.log(app.globalData.shopId)
  }
})