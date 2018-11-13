<template>
  <div class="header">
    <div class="header-bar">
      <router-link tag="div" class="tab-item" to="/menu">
        <i class="iconfont icon-weibiaoti12"></i>
      </router-link>
      <div class="navWrapper">
        <router-link tag="div" class="tab-item" to="/personal">
          <i class="iconfont icon-yinle"></i>
        </router-link>
        <router-link tag="div" class="tab-item" to="/recommend/personality">
          <i class="iconfont icon-tubiaozhizuomoban"></i>
        </router-link>
        <router-link tag="div" class="tab-item" to="/mv">
          <i class="iconfont icon-haoyou"></i>
        </router-link>
      </div>
      <router-link tag="div" class="tab-item" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
  </div>
</template>

<style lang="less">
.header {
  width: 100%;
  height: 1rem;
  background: #ce3d3a;
  .header-bar {
    padding: 0.1rem 0;
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
    i {
      font-size: 0.6rem;
      display: inline-block;
      vertical-align: top;
      padding: 0 0.1rem;
    }
    .navWrapper {
      display: flex;
      .tab-item {
        color: rgba(255, 255, 255, 0.4);
        padding: 0 0.3rem;
        &.active {
          color: #fff;
        }
      }
    }
  }
}
</style>
