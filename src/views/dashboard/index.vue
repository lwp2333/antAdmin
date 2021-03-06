<template>
  <div class="dashboard">
    <!-- <onlineChat />
    <stripLoading :loading="loading2">
      <triangle :width="16" color="#09f" placement="left" />
    </stripLoading>
    <messageTag>
      icss
    </messageTag> -->
    <!-- <heartShape /> -->
    <a-spin :spinning="loading">
      <div class="svgCode" v-html="svgCode" @click="getSvgCode"></div>
    </a-spin>
  </div>
</template>

<script>
import { getUserListByPage } from '@/api/user'
import { getSvgCode } from '@/api/common'
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
      },
      loading: false,
      loading2: true,
      svgCode: null,
      svgText: null
    }
  },
  created: function() {
    this.initList()
  },
  mounted: function() {
    this.getSvgCode()
  },
  methods: {
    initList: async function() {
      this.loading = true
      // const res = await getUserListByPage(this.search).catch(() => {
      //   this.loading = false
      // })
      // this.loading = false
    },
    getSvgCode: async function() {
      this.loading = true
      const res = await getSvgCode().catch(() => {
        this.loading = false
      })
      this.svgCode = res.svg || null
      this.svgText = res.text || null
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 12px;
  }
}
.svgCode {
  cursor: pointer;
  :hover {
    border: 1px solid #40a9ff;
  }
}
</style>
