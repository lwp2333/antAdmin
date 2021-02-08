<template>
  <div class="dashboard">
    <onlineChat />
  </div>
</template>

<script>
import { getUserListByPage } from '@/api/user'
import onlineChat from '@/components/onlineChat/index'
export default {
  name: 'Dashboard',
  components: {
    onlineChat
  },
  data: function() {
    return {
      search: {
        pageNum: 1,
        pageSize: 2
      }
    }
  },
  created: function() {
    this.initList()
  },
  mounted: function() {
    this.initSocket()
  },
  methods: {
    initList: async function() {
      const res = await getUserListByPage(this.search).catch(() => {})
      console.log(res)
    },
    initSocket: function() {}
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
