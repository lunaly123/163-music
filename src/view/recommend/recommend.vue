<template>
  <div>
    <tab/>
    <router-view/>
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
