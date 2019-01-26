<template>
  <div>
    <tab :index.sync="currentIndex" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Tab from 'components/tab/tab'

export default {
  components: {
    Tab
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.meta.tabIndex >= 0) {
      next()
    } else {
      this.$router.replace({ name: from.name })
    }
  }
}
</script>
