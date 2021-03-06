<template>
  <div class="notFound">
    <img :src="notFound" alt="找不到路径或者无权访问" />
    <div class="coutDown">
      <a-button type="primary" shape="round" @click="backHome"> 返回（{{ coutDown }}）</a-button>
    </div>
  </div>
</template>

<script>
import notFound from '@/assets/svg/404.svg'
export default {
  name: 'NotFound',
  data: function() {
    return {
      notFound,
      coutDown: 5,
      timer: null
    }
  },
  created: function() {},
  mounted: function() {
    this.timer = setInterval(() => {
      this.coutDown--
    }, 1000)
  },
  watch: {
    coutDown(newValud) {
      if (newValud === 0) {
        clearInterval(this.timer)
        this.backHome()
      }
    }
  },
  methods: {
    backHome() {
      this.$router.push('/')
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="less">
.notFound {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 36%;
  }
}
</style>
<style lang="less">
// scoped 模式下重置不了的样式写在这里面，但记得加个id 包裹
</style>
