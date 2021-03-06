<template>
  <div class="hoverRotate">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HoverRotate'
}
</script>

<style scoped lang="less">
.hoverRotate {
  cursor: pointer;
  :hover {
    transform: rotate(666turn);
    transition: all 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
  }
}
</style>
