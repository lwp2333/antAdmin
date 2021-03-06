<template>
  <div class="triangle" :style="style"></div>
</template>

<script>
export default {
  name: 'Triangle',
  props: {
    width: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#09f'
    },
    placement: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    style: function() {
      const { width, color, placement } = this
      const border = `${width}px solid transparent`
      const list = placement.split('-')
      let res = { border }
      list.forEach(item => {
        res = {
          ...res,
          [`border-${item}-color`]: color
        }
      })
      return res
    }
  }
}
</script>

<style scoped lang="less"></style>
