<template>
  <div>
    <tab/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import Tab from 'components/tab/tab'

export default {
  components: {
    Tab
  }
}
</script>
