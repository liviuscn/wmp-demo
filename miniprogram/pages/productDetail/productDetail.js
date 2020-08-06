var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: false,
    currentTab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Product/index',
      method: 'post',
      data: {
        pro_id: options.productId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var status = res.data.status;
        if (status == 1) {
          var pro = res.data.pro;
          var content = pro.content;
          delete pro.content
          var img_arr = pro.img_arr
          delete pro.img_arr

          that.setData({
            itemData: pro,
            bannerItem: img_arr,
            content: content,
            commodityAttr: res.data.commodityAttr,
            attrValueList: res.data.attrValueList,
          });
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000,
          });
        }
      },
      error: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000,
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * modal确定
   */
  handleModalOk: function () {
    this.setData({
      visible: false
    })
  },
  /**
   * modal取消
   */
  handleModalCancle: function () {
    this.setData({
      visible: false
    })
  },
  //立即购买
  buy: function () {
    this.setData({
      visible: true
    })
  },
  /**
   * 收藏
   */
  addFavorites: function () {
    wx.showToast({
      title: '收藏成功',
    })
  },
  /**
   * 加入购物车
   */
  addCart: function () {
    wx.showToast({
      title: '加入购物车成功',
    })
  },
  changeTab: function (e) {
 
    this.setData({
      currentTab: e.target.dataset.tab
    })
  },
  bindchange:function(e){
    this.setData({ currentTab: e.detail.current });
  }
})