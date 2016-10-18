var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
    data:{
      error:"",
      popError:true
    },
    errClose:function(){},
    fedback:function(){
         wx.redirectTo({
      url: '/pages/fedBack/fedBack'
    })
    }
})