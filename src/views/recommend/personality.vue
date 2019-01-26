<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll" :data="newSong">
      <div>
        <!-- 轮播图 -->
        <div class="bannerWrapper">
          <div class="banner-bg"></div>
          <swiper loop auto dots-position="center" :aspect-ratio="1/2">
            <swiper-item v-for="(item,i) in bannerList" :key="i">
              <img v-lazy="item.imageUrl" @click="ad(item.url)">
            </swiper-item>
          </swiper>
        </div>
        <!-- 四个按键 -->
        <TabButton/>
        <!-- 推荐歌单 -->
        <section class="recommend-list">
          <h2 class="title">
            <span>推荐歌单</span>
            <i class="iconfont icon-youjiantou"></i>
          </h2>
          <grid :cols="3" :show-vertical-dividers="true">
            <grid-item
              class="item"
              v-for="item in playList"
              :key="item.id"
              @on-item-click="selectList(item)"
            >
              <div class="icon">
                <div class="gradients"></div>
                <img v-lazy="item.picUrl">
              </div>
              <p class="play-count">
                <i class="iconfont icon-headset"></i>
                {{Math.floor(item.playCount / 10000) }}万
              </p>
              <div class="text">
                <p class="name">{{item.name}}</p>
              </div>
            </grid-item>
          </grid>
        </section>
        <!-- 推荐歌曲 -->
        <section class="recommend-song">
          <h2 class="title">
            <span>推荐歌曲</span>
            <i class="iconfont icon-youjiantou"></i>
          </h2>
          <grid :cols="3" :show-vertical-dividers="true">
            <grid-item class="item" v-for="item in newSong" :key="item.id">
              <div class="icon">
                <img v-lazy="item.imageUrl">
              </div>
              <p class="text">{{item.name}}</p>
              <p class="singer">{{item.singer}}</p>
            </grid-item>
          </grid>
        </section>
        <!-- 独家放送 -->
        <section class="recommend-private">
          <h2 class="title">
            <span>独家放送</span>
            <i class="iconfont icon-youjiantou"></i>
          </h2>
          <ul>
            <li v-for="item in PrivateContxt" :key="item.id">
              <img v-lazy="item.picUrl">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </section>
        <!-- 推荐MV -->
        <section class="recommend-prmv">
          <h2 class="title">
            <span>推荐MV</span>
            <i class="iconfont icon-youjiantou"></i>
          </h2>
          <grid :cols="2" :show-vertical-dividers="true">
            <grid-item class="item" v-for="item in PrMV" :key="item.id">
              <div class="icon">
                <img v-lazy="item.picUrl">
              </div>
              <p class="text">{{item.name}}</p>
            </grid-item>
          </grid>
        </section>
        <!-- 主播电台 -->
        <section class="recommend-prbcstation">
          <h2 class="title">
            <span>主播电台</span>
            <i class="iconfont icon-youjiantou"></i>
          </h2>
          <grid :cols="2" :show-vertical-dividers="true">
            <grid-item class="item" v-for="item in PrBCStation" :key="item.id">
              <div class="icon">
                <img class="bsc" v-lazy="item.imageUrl">
              </div>
              <p class="text">{{item.name}}</p>
              <p class="singer" style="height:0.5rem">{{item.singer}}</p>
            </grid-item>
          </grid>
        </section>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import { Swiper, SwiperItem, Grid, GridItem, GroupTitle, Loading } from 'vux'
import scroll from 'base/scroll/scroll'
import TabButton from 'components/tabButton/tabButton'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Swiper,
    SwiperItem,
    TabButton,
    Grid,
    GridItem,
    GroupTitle,
    scroll,
    Loading
  },
  created() {
    // 初始化
    this.$store.dispatch('initRecommendPage')
  },
  computed: {
    ...mapState({
      // 获取banner图
      bannerList: state => state.recommend.bannerList,
      // 获取推荐歌单
      playList: state => state.recommend.PrSongList,
      // 获取新歌
      newSong: state => state.recommend.PrNewSong,
      // 获取独家放送
      PrivateContxt: state => state.recommend.PrivateContxt,
      // 获取推荐Mv
      PrMV: state => state.recommend.PrMV,
      // 获取主播电台
      PrBCStation: state => state.recommend.PrBCStation
    })
  },
  methods: {
    ad(url) { // banner外链
      window.location.href = url
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    }),
    selectList(list) {
      this.$router.push({ name: 'songListDetails', params: { id: list.id } })
      this.setSinger(list)
    }
  }
}
</script>

<style lang="less">
@import url("~common/less/variable.less");
@import url("~common/less/mixin.less");
.recommend {
  position: fixed;
  width: 100%;
  top: 1.9rem;
  bottom: 0;
  z-index: 100;
  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.bannerWrapper {
  height: 3.8rem;
  .banner-bg {
    background: #ce3d3a;
    height: 9rem;
    position: absolute;
    top: -6rem;
    z-index: -10;
    width: 100%;
    vertical-align: inherit;
  }
  img {
    margin: 0 auto;
    display: block;
    width: 96%;
    height: 100%;
  }
}
.vux-slider {
  border-radius: 8px;
}
.vux-slider > .vux-indicator-center {
  font-size: 0 !important;
}
.vux-slider .vux-swiper-item img {
  border-radius: 8px;
}
.weui-grid:before,
.weui-grids:before,
.weui-grid:after {
  border: none !important;
}
.recommend-list,
.recommend-private,
.recommend-prmv {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  .title {
    height: 65px;
    line-height: 65px;
    padding-left: 1.5%;
    text-align: left;
    font-size: 0.4rem;
    font-weight: bold;
    color: @color-text;
  }
  .item {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 33%;
    padding: 0 1.5%;
    float: none;
    .icon {
      position: relative;
      display: inline-block;
      width: 100%;
      margin-bottom: 5px;
      .gradients {
        position: absolute;
        top: 0;
        width: 100%;
        height: 35px;
        border-radius: 3px;
        background: linear-gradient(
          rgba(109, 109, 109, 0.4),
          rgba(255, 255, 255, 0)
        );
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
    }
    .play-count {
      position: absolute;
      top: 5px;
      right: 8px;
      font-size: @font-size-small-s;
      color: @color-text-l;
    }
    .text {
      float: left;
      line-height: 16px;
      text-align: left;
      height: 40px;
      line-height: 16px;
      overflow: hidden;
      margin-bottom: 10px;
      font-size: @font-size-small;
    }
    .singer {
      line-height: 16px;
      margin-bottom: 10px;
      text-align: left;
      .no-wrap();
      font-size: @font-size-small;
      color: @color-text-g;
    }
  }
}
.recommend-song,
.recommend-prbcstation {
  margin-top: -20px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  .title {
    height: 65px;
    line-height: 65px;
    padding-left: 1.5%;
    text-align: left;
    font-size: 0.4rem;
    font-weight: bold;
    color: @color-text;
  }
  .item {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 33%;
    padding: 0 1.5%;
    .icon {
      position: relative;
      display: inline-block;
      width: 100%;
      margin-bottom: 5px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      .bsc {
        width: 3.6rem;
        height: 3.6rem;
      }
    }
    .text {
      line-height: 16px;
      text-align: left;
      height: 16px;
      .no-wrap();
      font-size: @font-size-small;
      color: @color-text;
    }
    .singer {
      line-height: 16px;
      margin-bottom: 10px;
      text-align: left;
      .no-wrap();
      font-size: @font-size-small;
      color: @color-text-g;
    }
  }
}
.recommend-private {
  ul {
    display: grid;
    grid-template-columns: repeat(2, 50vw);
    grid-template-rows: repeat(2, 2rem);
    li {
      width: 100%;
      height: 1.8rem;
      img {
        width: 96%;
        height: 1.5rem;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 16px;
        text-align: center;
        height: 16px;
        .no-wrap();
        font-size: @font-size-small;
        color: @color-text;
      }
    }
    li:last-child {
      grid-column: 1 / span 2;
    }
  }
}
</style>
