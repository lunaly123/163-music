<template>
  <transition name="slide">
    <div class="music-list">
      <div class="header" ref="header">
        <div class="back">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="text">
          <h1 class="title">headerTitle</h1>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

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
        padding: 0 0.2rem;
        font-size: .6rem;
        line-height: 1rem;
        display: inline-block;
        vertical-align: top;
      }
    }
    .text {
      position: absolute;
      left: 50px;
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
</style>
