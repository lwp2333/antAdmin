<template>
  <div class="loadingSwap">
    <div v-if="loading" class="stripLoading">
      <span v-for="(item, index) in number" :style="`--line-index: ${index + 1};`" :key="index"></span>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'StripLoading',
  props: {
    number: {
      type: Number,
      default: 6
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
.loadingSwap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stripLoading {
  width: 100%;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    --time: calc((var(--line-index) - 1) * 200ms);
    border-radius: 3px;
    width: 6px;
    height: 30px;
    background-color: #09f;
    animation: beat 1.2s ease-in-out var(--time) infinite;
    & + span {
      margin-left: 5px;
    }
  }
}
@keyframes beat {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
  }
}
</style>
