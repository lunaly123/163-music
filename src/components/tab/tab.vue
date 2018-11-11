<template>
  <div>
    <tab
      :line-width="2"
      default-color="rgba(255, 255, 255, 0.4)"
      active-color="#fff"
      custom-bar-width=".6em"
    >
      <tab-item @on-item-click="skipPage" :selected="tabIndex === 0">推荐</tab-item>
      <tab-item @on-item-click="skipPage" :selected="tabIndex === 1">歌单</tab-item>
      <tab-item @on-item-click="skipPage" :selected="tabIndex === 2">电台</tab-item>
      <tab-item @on-item-click="skipPage" :selected="tabIndex === 3">排行</tab-item>
    </tab>
  </div>
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
.vux-tab-container {
  height: .9rem !important;
  background-color: #ce3d3a !important;
}
.vux-tab {
  background-color: #ce3d3a !important;
  height: 0.8rem !important;
  border: none !important;
}
.vux-tab-item {
  font-weight: 700 !important;
  border-color: #ce3d3a !important;
  background: #ce3d3a !important;
}
</style>
