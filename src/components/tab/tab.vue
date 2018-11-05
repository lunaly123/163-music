<template>
  <tab :line-width="2" bar-active-color="#f33" active-color='#f33'>
    <tab-item @on-item-click="skipPage" :selected="tabIndex === 0">个性推荐</tab-item>
    <tab-item @on-item-click="skipPage" :selected="tabIndex === 1">歌单</tab-item>
    <tab-item @on-item-click="skipPage" :selected="tabIndex === 2">主播电台</tab-item>
    <tab-item @on-item-click="skipPage" :selected="tabIndex === 3">排行榜</tab-item>
  </tab>
</template>
<script>
import { Tab, TabItem } from 'vux'

export default {
  data() {
    return {
      tabIndex: 0
    }
  },
  components: {
    Tab,
    TabItem
  },
  methods: {
    skipPage(index) {
      this.tabIndex = index
      if (index === 0) {
        this.$router.push({
          name: 'personality'
        })
      } else if (index === 1) {
        this.$router.push({
          name: 'songList'
        })
      } else if (index === 2) {
        this.$router.push({
          name: 'radioStation'
        })
      } else if (index === 3) {
        this.$router.push({
          name: 'rank'
        })
      }
    }
  }
}
</script>

<style lang="less">
.tab {
  height: 0.4rem;
}
</style>
