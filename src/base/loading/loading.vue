<template>
  <div class="loading">
    <img src="../../assets/img/loading.gif">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入'
    }
  }
}
</script>

<style lang="less" scoped>

.loading {
  width: 100%;
  height: 40px;
  text-align: center;
  img {
    margin-top: 10px;
    border-radius: 5px;
  }
}
</style>
