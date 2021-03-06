<template>
  <div class="jsonEdit">
    <div id="jsoneditor"></div>
    {{ JSON.stringify(json) }}
  </div>
</template>

<script>
import JSONEditor from 'jsoneditor'
export default {
  name: '',
  data: function() {
    return {
      json: {}
    }
  },
  created: function() {},
  mounted: function() {
    const container = document.getElementById('jsoneditor')
    const options = {}
    const editor = new JSONEditor(container, options)
    editor.set(this.json)
    this.timer = setInterval(() => {
      this.json = editor.get()
    }, 120)
  },
  methods: {}
}
</script>

<style scoped lang="less"></style>
