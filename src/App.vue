<template>
  <div id="app">
    <MHeader/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import MHeader from 'components/header/header'

export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
