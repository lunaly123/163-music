<template>
  <transition name="search">
    <div class="search" ref="searchWrapper">
      <div class="search-box-wrapper">
        <i class="iconfont icon-zuojiantou" @click="back"></i>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
@import url("~common/less/variable.less");
@import url("~common/less/mixin.less");

.search-enter-active,
.search-leave-active {
  transition: all 0.3s;
}
.search-enter,
.search-leave-to {
  transform: translate3d(50%, 0, 0);
  opacity: 0;
}
.search {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  bottom: 0;
  background: @color-background;
  .search-box-wrapper {
    padding: 10px 40px 10px 43px;
    // margin-bottom: 15px;
    background: @color-theme;
    .icon-zuojiantou {
      position: absolute;
      left: 5px;
      top: 3px;
      padding: 3px 10px;
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
