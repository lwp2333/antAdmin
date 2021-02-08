<template>
  <div class="login">
    登录
  </div>
</template>

<script>
import { login } from '@/api/login'
import { setAccessToken, getAccessToken, setRefreshToken, getRefreshToken, removeAllToken } from '@/utils/auth'
export default {
  name: 'Login',
  data: function() {
    return {
      accessToken: getAccessToken(),
      refreshToken: getRefreshToken()
    }
  },
  created: function() {
    this.submitLogin()
  },
  mounted: function() {},
  methods: {
    submitLogin: function() {
      if (this.accessToken && this.refreshToken) {
        this.$router.push('/dashboard')
        return
      }
      const loginForm = {
        name: 'lwp2333',
        password: 'jujingyi3344'
      }
      login(loginForm)
        .then(res => {
          const { accessToken, refreshToken } = res
          setAccessToken(accessToken)
          setRefreshToken(refreshToken)
        })
        .catch(err => {
          removeAllToken()
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped></style>
