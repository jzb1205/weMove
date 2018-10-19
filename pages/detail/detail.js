// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onDetail(options.id);
  },
  onDetail(id){
    wx.showLoading({
      title: '加载详情...',
    })
    this.setData({
      loading:true
    })
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/detail?id=${id}`,
      success: res => {
        this.setData({
          detail:res.data,
          loading:false
        })
        wx.hideLoading();
        wx.setNavigationBarTitle({
          title: this.data.detail.title,
        })
      },
      fail:errMsg=>{
        wx.showToast({
          title: errMsg,
        })
      }
    })
  },
  goRemuse(e){
    console.log(e.currentTarget.dataset.alt)
    wx.navigateTo({
      url: `/pages/out/out?alt=${e.currentTarget.dataset.alt}`,
    })
  }

})