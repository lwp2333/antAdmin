<template>
  <div class="chatMessage" :style="type | typeFilter">
    <div class="topInfo">
      {{ userName }}
      <span class="time">{{ time }}</span>
    </div>
    <div class="content" :class="type | contentfilter">
      <a-avatar :src="avatar" :size="28"></a-avatar>
      <span class="message">
        {{ content }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    userName: {
      type: String,
      required: true,
      default: () => ''
    },
    avatar: {
      type: String,
      required: true,
      default: () => ''
    },
    content: {
      type: String,
      required: true,
      default: () => ''
    },
    time: {
      type: String,
      required: true,
      default: () => ''
    },
    type: {
      type: String,
      required: true,
      default: () => ''
    }
  },
  filters: {
    typeFilter: function(value) {
      if (value === 'left') {
        return { alignItems: 'flex-start' }
      }
      return { alignItems: 'flex-end' }
    },
    contentfilter: function(value) {
      if (value === 'right') {
        return 'contentReverse'
      }
      return ''
    }
  },
  methods: {},
  mounted: function() {}
}
</script>

<style lang="less" scoped>
.chatMessage {
  width: 100%;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .topInfo {
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 2px;
  }
  .content {
    .message {
      max-width: 252px;
      margin: 0px 12px;
      display: inline-block;
      background-color: #f0f2f5;
      padding: 4px 6px;
    }
  }
  .contentReverse {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
