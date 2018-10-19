//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [],
    start: 0,
    end: 20,
    initLoading: false,
    loading: false
  },
  onLoad: function (optionis) {
    this.setData({
      initLoading: true
    })
    this.loadData(optionis.type);
    this.setData({
      initLoading: false
    })
  },
  loadData(type) {
    let { start, list, end } = this.data;

    wx.showLoading({
      title: '正在拼命加载中...',
      mask: true
    })
    //解决调用重复加载
    this.setData({
      loading: true
    })

    wx.request({

      // url: `https://www.koocv.com/h5-view/v/movie/list?start=${start}`,
      // url: 'https://movie.douban.com/j/search_tags?type=movie&source=index',
      url: `https://movie.douban.com/j/search_subjects?type=movie&tag=${type}&page_limit=${end}&page_start=${start}`,
      header: {
        "Content-Type": "application/text"
      },
      success: res => {
        start += 10;
        list.push(...res.data.subjects);
        this.setData({
          //key value一样可以只写一个
          list,
          start,
          loading: false
        })
        wx.hideLoading();
      }
    })
  },
  lower() {
    if (this.data.loading == false) {
      this.loadData();
    }
  },
  toSubject(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    })
  }
})
