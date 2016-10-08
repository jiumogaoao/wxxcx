var app=getApp();
function getList(){
    var list=[];
    var listObj={};
    var total=0;
    for(var i in app.balance){
        var shopId=app.balance[i].shop;
        if(!listObj[shopId]){
            listObj[shopId]={id:shopId,name:app.shop[shopId].name,total:app.shop[shopId].luggage,luggage:app.shop[shopId].luggage,list:[]}
        }
        listObj[shopId].list.push(app.productList[i]);
        listObj[shopId].total+=app.productList[i].price*app.balance[i].count;
    }
    for (var i in listObj){
        list.push(listObj[i]);
        total+=listObj[i].total;
    }
    return {list:list,total:total};
}
Page({
  data: {
    point:[],
    count:app.balance,
    total:99999,
    modalHidden:true,
  },
  modalChange:function(){
      this.setData({modalHidden:true});
  },
  goPay:function(){
    app.globalData.total=this.data.total;
    this.setData({modalHidden:false});
  },
  onLoad: function () {
      var list=getList()
      this.setData({point:list.list,count:app.balance,total:list.total});
  }
})