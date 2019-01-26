import getData from 'api/getData'
import * as types from './mutation-types'
export default {
  // 获取推荐歌单详情
  async get_songListDetails({commit}, payload) {
    let res = await getData({ path: 'querySongListDetail', params: payload })
    commit(types.SET_SONGLISTDETAILS, res.playlist)
  }
}
