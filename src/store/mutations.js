import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, payload) {
    state.singer = payload
  },
  [types.SET_SONGLISTDETAILS](state, payload) {
    state.songListDetails = payload
  }
}

export default mutations
