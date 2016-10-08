//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,//基本资料
    navId:"",//分类
    shopId:"",//商家
    productId:"",//商品
    total:99999,//订单金额
    latitude:0,//送货坐标
    longitude:0,//送货坐标
    name:"",//收件人
    detail:"",//收件地址
    icon:"",//收件人头像
    phone:""//收件人手机
  },
  nav:{
   "1": {src:'/images/nav1.jpg',id:"1",name:"类型1"},
   "2":{src:'/images/nav2.jpg',id:"2",name:"类型2"},
   "3":{src:'/images/nav3.jpg',id:"3",name:"类型3"}
  },
  shop:{
   "1":{id:1,icon:"/images/shop1.jpg",name:"商家1",dsc:"商品描述",nav:"1",luggage:12},
   "2":{id:2,icon:"/images/shop2.jpg",name:"商家2",dsc:"商品描述",nav:"2",luggage:32},
   "3":{id:3,icon:"/images/shop3.jpg",name:"商家3",dsc:"商品描述",nav:"3",luggage:32},
   "4":{id:4,icon:"/images/shop4.jpg",name:"商家4",dsc:"商品描述",nav:"1",luggage:43},
   "5":{id:5,icon:"/images/shop5.jpg",name:"商家5",dsc:"商品描述",nav:"2",luggage:12},
   "6":{id:6,icon:"/images/shop6.jpg",name:"商家6",dsc:"商品描述",nav:"3",luggage:43},
   "7":{id:7,icon:"/images/shop7.jpg",name:"商家7",dsc:"商品描述",nav:"1",luggage:52},
   "8":{id:8,icon:"/images/shop8.jpg",name:"商家8",dsc:"商品描述",nav:"2",luggage:35},
   "9":{id:9,icon:"/images/shop9.jpg",name:"商家9",dsc:"商品描述",nav:"3",luggage:13},
  "10":{id:10,icon:"/images/shop10.jpg",name:"商家10",dsc:"商品描述",nav:"1",luggage:35}
  },
  productList:{
    "1":{id:1,icon:"/images/product1.jpg",name:"商品1",dsc:"商品描述",price:10,shop:"1",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "2":{id:2,icon:"/images/product2.jpg",name:"商品2",dsc:"商品描述",price:10,shop:"1",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "3":{id:3,icon:"/images/product3.jpg",name:"商品3",dsc:"商品描述",price:10,shop:"1",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "4":{id:4,icon:"/images/product4.jpg",name:"商品4",dsc:"商品描述",price:10,shop:"1",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "5":{id:5,icon:"/images/product5.jpg",name:"商品5",dsc:"商品描述",price:10,shop:"1",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "6":{id:6,icon:"/images/product6.jpg",name:"商品6",dsc:"商品描述",price:10,shop:"2",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "7":{id:7,icon:"/images/product7.jpg",name:"商品7",dsc:"商品描述",price:10,shop:"2",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "8":{id:8,icon:"/images/product8.jpg",name:"商品8",dsc:"商品描述",price:10,shop:"2",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
    "9":{id:9,icon:"/images/product9.jpg",name:"商品9",dsc:"商品描述",price:10,shop:"2",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "10":{id:10,icon:"/images/product10.jpg",name:"商品10",dsc:"商品描述",price:10,shop:"2",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "11":{id:11,icon:"/images/product11.jpg",name:"商品11",dsc:"商品描述",price:10,shop:"3",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "12":{id:12,icon:"/images/product12.jpg",name:"商品12",dsc:"商品描述",price:10,shop:"3",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "13":{id:13,icon:"/images/product13.jpg",name:"商品13",dsc:"商品描述",price:10,shop:"3",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "14":{id:14,icon:"/images/product14.jpg",name:"商品14",dsc:"商品描述",price:10,shop:"3",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "15":{id:15,icon:"/images/product15.jpg",name:"商品15",dsc:"商品描述",price:10,shop:"3",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "16":{id:16,icon:"/images/product16.jpg",name:"商品16",dsc:"商品描述",price:10,shop:"4",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "17":{id:17,icon:"/images/product17.jpg",name:"商品17",dsc:"商品描述",price:10,shop:"4",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "18":{id:18,icon:"/images/product18.jpg",name:"商品18",dsc:"商品描述",price:10,shop:"4",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "19":{id:19,icon:"/images/product19.jpg",name:"商品19",dsc:"商品描述",price:10,shop:"4",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "20":{id:20,icon:"/images/product20.jpg",name:"商品20",dsc:"商品描述",price:10,shop:"4",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "21":{id:21,icon:"/images/product21.jpg",name:"商品21",dsc:"商品描述",price:10,shop:"5",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "22":{id:22,icon:"/images/product22.jpg",name:"商品22",dsc:"商品描述",price:10,shop:"5",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "23":{id:23,icon:"/images/product23.jpg",name:"商品23",dsc:"商品描述",price:10,shop:"5",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "24":{id:24,icon:"/images/product24.jpg",name:"商品24",dsc:"商品描述",price:10,shop:"5",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "25":{id:25,icon:"/images/product25.jpg",name:"商品25",dsc:"商品描述",price:10,shop:"5",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "26":{id:26,icon:"/images/product26.jpg",name:"商品26",dsc:"商品描述",price:10,shop:"6",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "27":{id:27,icon:"/images/product27.jpg",name:"商品27",dsc:"商品描述",price:10,shop:"6",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "28":{id:28,icon:"/images/product28.jpg",name:"商品28",dsc:"商品描述",price:10,shop:"6",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "29":{id:29,icon:"/images/product29.jpg",name:"商品29",dsc:"商品描述",price:10,shop:"6",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "30":{id:30,icon:"/images/product30.jpg",name:"商品30",dsc:"商品描述",price:10,shop:"6",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "31":{id:31,icon:"/images/product31.jpg",name:"商品31",dsc:"商品描述",price:10,shop:"7",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "32":{id:32,icon:"/images/product32.jpg",name:"商品32",dsc:"商品描述",price:10,shop:"7",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "33":{id:33,icon:"/images/product33.jpg",name:"商品33",dsc:"商品描述",price:10,shop:"7",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "34":{id:34,icon:"/images/product34.jpg",name:"商品34",dsc:"商品描述",price:10,shop:"7",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "35":{id:35,icon:"/images/product35.jpg",name:"商品35",dsc:"商品描述",price:10,shop:"7",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "36":{id:36,icon:"/images/product36.jpg",name:"商品36",dsc:"商品描述",price:10,shop:"8",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "37":{id:37,icon:"/images/product37.jpg",name:"商品37",dsc:"商品描述",price:10,shop:"8",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "38":{id:38,icon:"/images/product38.jpg",name:"商品38",dsc:"商品描述",price:10,shop:"8",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "39":{id:39,icon:"/images/product39.jpg",name:"商品39",dsc:"商品描述",price:10,shop:"8",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "40":{id:40,icon:"/images/product40.jpg",name:"商品40",dsc:"商品描述",price:10,shop:"8",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "41":{id:31,icon:"/images/product41.jpg",name:"商品41",dsc:"商品描述",price:10,shop:"9",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "42":{id:32,icon:"/images/product42.jpg",name:"商品42",dsc:"商品描述",price:10,shop:"9",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "43":{id:33,icon:"/images/product43.jpg",name:"商品43",dsc:"商品描述",price:10,shop:"9",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "44":{id:34,icon:"/images/product44.jpg",name:"商品44",dsc:"商品描述",price:10,shop:"9",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "45":{id:35,icon:"/images/product45.jpg",name:"商品45",dsc:"商品描述",price:10,shop:"9",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "46":{id:36,icon:"/images/product46.jpg",name:"商品46",dsc:"商品描述",price:10,shop:"10",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "47":{id:37,icon:"/images/product47.jpg",name:"商品47",dsc:"商品描述",price:10,shop:"10",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "48":{id:38,icon:"/images/product48.jpg",name:"商品48",dsc:"商品描述",price:10,shop:"10",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "49":{id:39,icon:"/images/product49.jpg",name:"商品49",dsc:"商品描述",price:10,shop:"10",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']},
   "50":{id:40,icon:"/images/product50.jpg",name:"商品50",dsc:"商品描述",price:10,shop:"10",imgUrls: ['/images/1.jpg','/images/2.jpg','/images/3.jpg']}
  },
 balance:{
//   "1":{id:"1",count:1,shop:"1"}
 },
 add:function(id,shop){
   if(!this.balance[id]){
     this.balance[id]={id:id,count:1,shop:shop,pay:true}
   }else{
     this.balance[id].count++;
   }
   return this.balance[id].count;
 },
 sub:function(id){
   if(!this.balance[id]){
     return false;
   }else if(this.balance[id].count==1||this.balance[id].count==0){
     delete this.balance[id];
     return false;
   }else{
     this.balance[id].count--;
     return this.balance[id];
   }
 },
 payCheck:function(id){
   this.balance[id].pay=!this.balance[id].pay;
 }
})