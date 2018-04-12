Page({
  data: {
    list: []
  },

  staticData: {
    keyword: ''
  },

  onLoad() {
    this.getData()
  },

  handleKeywordsChange(e) {
    this.staticData.keyword = e.detail.value
  },

  handleSearchTap() {
    this.getData()
  },

  getData() {
    wx.request({
      url: 'https://54izbtat.qcloud.la/index.php/trade/get_search_list',
      method: 'POST',
      data: {
        keyword: this.staticData.keyword
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        if(res && res.data && res.data.ret){
          this.setData({
            list: res.data.data
          })
        }else{
          this.setData({
            list: ""
          })
          wx.showToast({
            title:"没有找到匹配的信息",
            icon: 'loading',
            duration: 2000
          })
        }
        
      }
    })
  }
})