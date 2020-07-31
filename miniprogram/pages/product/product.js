var app = getApp();

Page({
  data: {
    imgUrls:[],
    productData:[],
    proCat:[],
    brand:[],
    course:[]
  },
  onLoad:function(options){
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Index/index',
      method: 'post',
      data: {},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var ggtop = res.data.ggtop;
        var procat = res.data.procat;
        var prolist = res.data.prolist;
        var brand = res.data.brand;
        var course = res.data.course;

        that.setData({
          imgUrls: ggtop,
          proCat: procat,
          productData: prolist,
          brand: brand,
          course: course
        });
        //endInitData
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })

  }
})
