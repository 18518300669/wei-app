App({
  onLaunch() {
    try {
      const info = wx.getSystemInfoSync()
      this.globalData.width = info.windowWidth
      this.globalData.height = info.windowHeight
    } catch (err) {
      console.log(err)
    }
  },

  globalData: {}
})