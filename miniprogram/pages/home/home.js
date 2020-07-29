Page({
  data: {
    swiperItems:[
      {
        id:'1',
        src:'../../images/product/20170630/1498823755795695.jpg',
        uri:''
      },
      {
        id:'2',
        src:'../../images/product/20170630/1498820794749927.jpg',
        uri:''
      },
      {
        id:'3',
        src:'../../images/product/20170630/1498820925308628.jpg',
        uri:''
      }
    ],
    list:[
        {
          id:'1',
          title:'华为P30华为P30华为P30',
          price:'￥60.00',
          oriPrice:'￥60.00',
          img:'../../images/product/20170630/1498823755795695.jpg'
        },
        {
          id:'2',
          title:'华为P30 Pro',
          price:'￥60.00',
          oriPrice:'￥60.00',
          img:'../../images/product/20170630/1498820794749927.jpg'
        },
        {
          id:'3',
          title:'华为P40',
          price:'￥60.00',
          oriPrice:'￥60.00',
          img:'../../images/product/20170630/1498820925308628.jpg'
        },
        {
          id:'4',
          title:'华为P40 Pro',
          price:'￥60.00',
          oriPrice:'￥60.00',
          img:'../../images/product/20170630/1498820926923500.jpg'
        },
        {
          id:'5',
          title:'华为Mate30',
          price:'￥64.00',
          oriPrice:'￥70.00',
          img:'../../images/product/20170630/1498823086228577.jpg'
        }
    ]
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
