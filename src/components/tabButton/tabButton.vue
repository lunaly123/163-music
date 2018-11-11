<template>
  <flexbox class="tabs-bar">
      <flexbox-item v-for="(item,index) in musicTabs" :key="index" class="tab-item">
        <div class="item-bg">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        <p class="item-name">{{item.name}}</p>
      </flexbox-item>
    </flexbox>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'

const musicTabs = [
  {
    icon: 'icon-shouyinji',
    name: '私人FM',
    url: 'personalFm'
  },
  {
    icon: 'icon-rili',
    name: '每日推荐',
    url: 'recomSong'
  },
  {
    icon: 'icon-swticonyinle2',
    name: '歌单',
    url: 'myMusic'
  },
  {
    icon: 'icon-paixingbang',
    name: '排行榜',
    url: 'topList'
  }
]

export default {
  data() {
    return {
      // tab图标
      musicTabs: musicTabs
    }
  },
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="less">
.tabs-bar {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0.4rem 0;
  .tab-item {
    text-align: center;
    .item-name {
      font-size: 0.24rem;
      margin-top: 0.2rem;
    }
    .item-bg {
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      background: linear-gradient(90deg,#fc5245,#dd3544);
      border-radius: 50%;
      margin: 0 auto;
      i {
        font-size: 0.5rem;
        color: #fff;
        vertical-align: top;
        display: inline-block;
      }
    }
  }
}
</style>
