<template>
  <div id="app">
    <MHeader/>
    <!-- <Loading v-model="isLoading"/> -->
    <!-- <transition name="fade"> -->
      <keep-alive>
        <router-view/>
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
import MHeader from 'components/header/header'
// import Loading from 'vux'

export default {
  name: 'App',
  components: {
    MHeader
    // Loading
  }
}
</script>

<style>
/* .fade-leave-active {
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  transform: translate3d(30%, 0, 0);
  opacity: 0;
} */
.vux-loading {
  font-size: 28% !important;
}
</style>
