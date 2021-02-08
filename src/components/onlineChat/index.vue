<template>
  <div class="onlineChat">
    <div class="header">
      <span class="onlineNum">
        <a-badge status="success" />
        当前在线人数:{{ onlineUser.length }}
      </span>
      <span class="setUserName">
        <a-icon type="setting"></a-icon>
        设置
      </span>
    </div>
    <div class="content globalScrollbar">
      <chat-message
        v-for="item in messageList"
        v-bind="item"
        :avatar="item.avatarType | avatarTypeFilter"
        :key="item.id"
        :id="`message_${item.id}`"
      ></chat-message>
    </div>
    <a-divider></a-divider>
    <div class="footer">
      <a-input type="textarea" v-model="postContent"></a-input>
      <a-button type="primary" @click="postMessage" @keyup.enter="postMessage">发送</a-button>
    </div>
    <a-modal :visible="formModal" title="设置信息" :footer="null" :closable="false" :maskClosable="false">
      <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
        <a-form-model-item label="昵称" prop="userName">
          <a-input v-model="form.userName" placeholder="请输入昵称" />
        </a-form-model-item>
        <a-form-model-item label="头像" prop="avatarType">
          <a-radio-group v-model="form.avatarType">
            <a-radio v-for="(item, index) in avatarList" :value="index" :key="index">
              <a-avatar :src="item" :size="28"></a-avatar>
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 8, offset: 8 }">
          <a-button block type="primary" @click="onSubmitForm">
            确认
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import avatar from '@/assets/svg/avatar.svg'
import avatar2 from '@/assets/svg/avatar2.svg'
import avatar3 from '@/assets/svg/avatar3.svg'
import avatar4 from '@/assets/svg/avatar4.svg'
import avatar5 from '@/assets/svg/avatar5.svg'
import chatMessage from './chatMessage'
import { generateUUID } from '@/utils'
import moment from 'moment'
export default {
  name: 'OnlineChat',
  components: {
    chatMessage
  },
  data: function() {
    return {
      avatarList: [avatar, avatar2, avatar3, avatar4, avatar5],
      formModal: true,
      form: {
        userName: undefined,
        avatarType: undefined
      },
      rules: {
        userName: [
          { required: true, message: '请输入昵称', trigger: 'change' },
          { min: 3, max: 5, message: '昵称限制：3~5位', trigger: 'change' }
        ],
        avatarType: [
          {
            type: 'number',
            required: true,
            message: '请选择一个头像',
            trigger: 'change'
          }
        ]
      },
      onlineUser: [],
      messageList: [],
      postContent: null
    }
  },
  sockets: {
    online: function(data) {
      const { clients } = data
      this.onlineUser = clients
    },
    exchange: function(data) {
      const payload = data.data.payload
      this.parseMessage(payload)
    }
  },
  filters: {
    avatarTypeFilter: function(value) {
      return [avatar, avatar2, avatar3, avatar4, avatar5][Number(value)]
    }
  },
  watch: {
    messageList: function(newValue) {
      // 存储到本地
      localStorage.setItem('messageList', JSON.stringify(this.messageList))
      setTimeout(() => {
        const lastMessageItem = newValue[newValue.length - 1]
        const lastMessageId = `message_${lastMessageItem.id}`
        const lastMessageDom = document.getElementById(lastMessageId)
        lastMessageDom.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
      }, 120)
    }
  },
  created: function() {
    // 取回聊天记录
    const list = JSON.parse(localStorage.getItem('messageList'))
    if (list && list.length > 0) {
      this.messageList = list
    }
    const userName = localStorage.getItem('userName') || null
    const avatarType = localStorage.getItem('avatarType') || null
    if (userName) {
      this.form = {
        userName,
        avatarType
      }
      this.formModal = false
    }
  },
  mounted: function() {},
  methods: {
    onSubmitForm: function() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const { userName, avatarType } = this.form
          localStorage.setItem('userName', userName)
          localStorage.setItem('avatarType', avatarType)
          this.formModal = false
        }
      })
    },
    parseMessage: function(payload) {
      console.log(payload)
      const id = generateUUID()
      const { userName, content, avatarType } = payload
      const time = moment().format('YYYY-MM-DD h:mm:ss a')
      const isOwn = userName === this.form.userName
      const type = isOwn ? 'right' : 'left'
      const messageItem = {
        id,
        userName,
        avatarType,
        content,
        time,
        type
      }
      this.messageList.push(messageItem)
    },
    postMessage: function() {
      const { userName, avatarType } = this.form
      const data = {
        target: 'exchange',
        payload: {
          userName,
          avatarType,
          content: this.postContent
        }
      }
      console.log(data)
      this.$socket.emit('exchange', data)
      this.postContent = null
    }
  }
}
</script>

<style scoped lang="less">
.onlineChat {
  width: 360px;
  height: 480px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 320px) {
    width: 240px;
    height: 360px;
  }
  .header {
    padding: 0px 24px;
    height: 60px;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1890ff;
    color: rgba(255, 255, 255, 0.84);
    .setUserName {
      cursor: pointer;
    }
  }
  .content {
    flex: 1;
    width: 100%;
    padding: 12px 0px;
    overflow: auto;
  }
  .footer {
    height: 80px;
    padding: 8px 12px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
}
.ant-divider-horizontal {
  margin: 0;
}
</style>
