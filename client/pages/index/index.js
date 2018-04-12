                   
const app = getApp()

Page({
  data: { 
    latitude: '',
    longitude: '',
    controls: [{
      id: 0,
      iconPath: '/resources/center.png',
      position: {
        left: app.globalData.width -40 -10,
        top: app.globalData.height -44 -64,
        width: 40,
        height: 40
      },
      clickable: true
    }, {
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.width-20)/2,
        top: (app.globalData.height -44) /2 -30,
        width: 20,
        height: 30
      },
      clickable: true
    }],
    markers:[]
  },

  onLoad() {
    this.mapCtx = wx.createMapContext('map', this)
   
    this.getLocation()
    this.getData()
  },
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: this.getPositionData.bind(this)
    })
  },

  getPositionData(res) {
    this.setData({
      latitude: res.latitude,
      longitude: res.longitude
    })
  },
  getData(){
    wx.request({
      url: 'https://54izbtat.qcloud.la/index.php/trade/get_list',
      success:(res) => {
        const data = res.data.data

        this.setData({
          markers:data.map((item) => ({
            iconPath:"/resources/" + item.type + ".png",
            id:item.id,
            latitude:item.latitude,
            longitude:item.longitude,
            width:30,
            height:30
          }))
        
        })

      }
    })
  },

  handleControlTap(){
    this.mapCtx.moveToLocation()
  },

  goToPublish(){
    wx.navigateTo({
      url: '/pages/publish/publish'
    })
  },

  goToSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },


  handleMarkerTap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId,
    })
  }
 
})
