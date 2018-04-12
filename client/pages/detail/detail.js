
Page({
  data:{
    detail: {}
  },
  onLoad(options) {
    wx.request({
      url: 'https://54izbtat.qcloud.la/index.php/trade/get_item',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: options.id
      },
      success: (res) => {
        this.setData({
          detail: res.data.data
        })
      }
    })
  }
})