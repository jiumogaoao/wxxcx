var app=getApp();
Page({
  data: {
    latitude:0,
    longitude:0,
    name:"",
    detail:"",
    icon:"",
    phone:"",
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }]
  },
  picChange:function(event){
    var that=this;
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            that.setData({icon:res.tempFilePaths[0]});
        }
    })
  },
  nameChange:function(event){
      this.setData({name:event.detail.value,
                markers:[{
                    latitude: res.latitude,
                    longitude: res.longitude,
                    name: that.data.name,
                    desc: that.data.detail
                }]})
  },
  phoneChange:function(event){
      this.setData({phone:event.detail.value})
  },
  detailChange:function(event){
      this.setData({detail:event.detail.value,
                markers:[{
                    latitude: res.latitude,
                    longitude: res.longitude,
                    name: that.data.name,
                    desc: that.data.detail
                }]})
  },
  goBalance:function(){
    app.globalData.latitude=this.data.latitude
    app.globalData.longitude=this.data.longitude
    app.globalData.name=this.data.name
    app.globalData.detail=this.data.detail
    app.globalData.icon=this.data.icon
    app.globalData.phone=this.data.phone
    wx.redirectTo({
        url: '/pages/balance/balance'
    })
  },
  onLoad: function () {
      var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        name:userInfo.nickName,
        detail:userInfo.province+"_"+userInfo.city,
        icon:userInfo.avatarUrl
      })
    })
    wx.getLocation({
        type: 'wgs84',
        success: function(res) {
            that.setData({
                latitude:res.latitude,
                longitude:res.longitude,
                markers:[{
                    latitude: res.latitude,
                    longitude: res.longitude,
                    name: that.data.name,
                    desc: that.data.detail
                }]
            });
        }
    })
  }
})