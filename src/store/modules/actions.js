import getData from 'api/getData'
export default {
  // 初始化个性推荐页面
  async initRecommendPage({ dispatch }) {
    dispatch('get_Recommend_Banner')
    dispatch('get_Recommend_PrSongList')
    dispatch('get_Recommend_PrivateContxt')
    dispatch('get_Recommend_PrMV')
    dispatch('get_Recommend_PrBCStation')
    dispatch('get_Recommend_PrNewSong')
  },
  // 获取banner
  async get_Recommend_Banner({ commit }) {
    let res = await getData({ path: 'queryBanner' })
    commit('set_Recommend_Banner', res.banner)
  },
  // 获取推荐歌单
  async get_Recommend_PrSongList({ commit }) {
    let res = await getData({ path: 'queryPrSongList' })
    commit('set_Recommend_PrSongList', res.list)
  },
  // 获取独家放送
  async get_Recommend_PrivateContxt({ commit }) {
    let res = await getData({ path: 'queryPrivateContxt' })
    commit('set_Recommend_PrivateContxt', res.list)
  },
  // 获取最新音乐
  async get_Recommend_PrNewSong({ commit }) {
    let res = await getData({ path: 'queryNewSong' })
    commit('set_Recommend_PrNewSong', res.list)
  },
  // 获取推荐MV
  async get_Recommend_PrMV({ commit }) {
    let res = await getData({ path: 'queryPrMV' })
    commit('set_Recommend_PrMV', res.list)
  },
  // 获取主播电台
  async get_Recommend_PrBCStation({ commit }) {
    let res = await getData({ path: 'queryPrBCStation' })
    commit('set_Recommend_PrBCStation', res.list)
  }
}
