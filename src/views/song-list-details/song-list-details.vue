<template>
  <transition name="slide" ref="scroll">
    <div class="music-list">
      <div class="header" ref="header">
        <div class="back" @click="back">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="text">
          <h1 class="title">歌单</h1>
        </div>
      </div>
      <div class="titleWrapper">
        <div class="header-contxt">
          <div class="header-contxt-l">
            <i class="iconfont icon-headset">{{songListDetail.playCount}}</i>
            <img v-lazy="singer.picUrl">
          </div>
          <div class="header-contxt-r">
            <p>{{songListDetail.name}}</p>
            <div>
              <img v-lazy="songListDetail.creator.avatarUrl">
              <span>{{songListDetail.creator.nickname}}</span>
              <i class="iconfont icon-youjiantou"></i>
            </div>
          </div>
        </div>
        <div class="header-footer">
          <span>
            <i class="iconfont icon-weishoucang"></i>
            <p>{{songListDetail.subscribedCount}}</p>
          </span>
          <span>
            <i class="iconfont icon-comments"></i>
            <p>{{songListDetail.trackCount}}</p>
          </span>
          <span>
            <i class="iconfont icon-fenxiang"></i>
            <p>{{songListDetail.shareCount}}</p>
          </span>
        </div>
      </div>
      <scroll class="songList-content">
        <div class="songList">
          <ul>
            <router-link v-for="(item,i) in songListDetail.tracks" :key="item.id" tag="li" to="/">
              <i>{{i+1}}</i>
              <span class="halfBorder">
                <p>{{item.name}}</p>
                <s>{{item.ar[0].name}}</s>
              </span>
            </router-link>
          </ul>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import scroll from 'base/scroll/scroll'

export default {
  computed: {
    ...mapGetters([
      'singer'
    ]),
    ...mapState(['songListDetails']),
    // 歌单详情
    songListDetail() {
      return this.songListDetails
    }
  },
  created() {
    this.get_songListDetails({
      id: this.singer.id
    })
  },
  methods: {
    back() {
      this.$router.back()
    },
    ...mapActions(['get_songListDetails'])
  },
  components: {
    scroll
  }
}
</script>

<style lang="less" scoped>
@import url("~common/less/variable.less");
@import url("~common/less/mixin.less");
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(30%, 0, 0);
  opacity: 0;
}
.titleWrapper {
  background: -webkit-linear-gradient(left, #dcdcdc, #666);
}
.music-list {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: @color-background;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    z-index: 100;
    .back {
      position: absolute;
      top: 0;
      left: 4px;
      .icon-zuojiantou {
        padding: 0 0.4rem;
        font-size: 0.4rem;
        line-height: 1rem;
        display: inline-block;
        vertical-align: top;
      }
    }
    .text {
      position: absolute;
      left: 68px;
      line-height: 1rem;
      font-size: @font-size-medium-x;
      .no-wrap();
    }
  }
  .list {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: @color-background;
    .music-list-wrapper {
      .bg-image {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 75%;
        transform-origin: top;
        background-size: cover;
        background-position: 0 30%;
        .filter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          opacity: 0.2;
        }
        .text {
          position: absolute;
          width: 80%;
          height: 40px;
          bottom: 50px;
          left: 15px;
          color: #fff;
          .play-count {
            position: absolute;
            bottom: -16px;
            font-size: @font-size-small;
          }
          .list-title {
            position: absolute;
            bottom: 0;
            font-size: @font-size-medium-x;
            line-height: 18px;
            font-weight: bold;
            letter-spacing: 1px;
          }
        }
      }
      .song-list-wrapper {
        padding: 41px 0 20px 0;
        border-radius: 10px;
        position: relative;
        top: -20px;
        background: @color-background;
        .sequence-play {
          position: absolute;
          // left: 8;
          top: 0px;
          display: flex;
          align-items: center;
          width: 100%;
          height: 40px;
          padding-left: 16px;
          border-bottom: 1px solid rgb(228, 228, 228);
          .iconfont {
            font-size: 18px;
            color: @color-text;
            padding-right: 14px;
          }
          .text {
            font-size: @font-size-medium-x;
          }
          .count {
            font-size: @font-size-medium;
            color: @color-text-g;
          }
        }
      }
    }
  }
}
.header-contxt {
  padding: 1.4rem 5% 0;
  width: 90%;
  font-size: 0;
}
.header-contxt-l {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 40%;
  img {
    display: block;
    width: 90%;
  }
  .icon-headset {
    position: absolute;
    top: 0.05rem;
    right: 13%;
    font-size: 0.16rem;
    color: #fff;
  }
}
.header-contxt-r {
  display: inline-block;
  vertical-align: top;
  width: 60%;
  div {
    align-items: center;
    display: flex;
    width: 100%;
    height: auto;
    line-height: 1;
    font-size: 0.12rem;
    color: #fff;
  }
  p {
    font-size: 0.3rem;
    color: #fff;
    padding: 8% 0;
  }
  img {
    border-radius: 50%;
    width: 15%;
  }
  span {
    padding: 0 0.05rem;
    font-size: 0.12rem;
    color: #ccc;
  }
  .icon-right {
    font-size: 0.14rem;
    color: #ccc;
  }
}
.header-footer {
  font-size: 0;
  text-align: center;
  padding: 0.1rem 5% 0.2rem;
  display: flex;
  span {
    flex: 1;
    -webkit-box-flex: 1;
    i {
      font-size: 0.5rem;
      display: block;
      color: #fff;
    }
    p {
      padding-top: 0.07rem;
      font-size: 0.12rem;
      color: #fff;
    }
  }
}
.songList {
  ul {
    li {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      padding: 0.05rem 0;
      font-size: 0;
      i {
        display: inline-block;
        vertical-align: top;
        font-size: 0.12rem;
        color: #666;
        width: 15%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        vertical-align: top;
        width: 85%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: left;
      }
      p {
        font-size: 0.14rem;
        color: #333;
        width: 85%;
        height: 0.6rem;
        line-height: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      s {
        display: block;
        text-decoration: none;
        font-size: 0.12rem;
        color: #ccc;
        width: 85%;
        height: 0.2rem;
        line-height: 0.2rem;
      }
    }
  }
}
.songList-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
