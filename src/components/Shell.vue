<template>

  <div>
    <el-row>
      <el-col :span="1"><el-button type="success">重连</el-button></el-col>
      <el-col :span="3"><el-input placeholder="请输主机名"></el-input></el-col>
      <el-col :span="3"><el-input  placeholder="请输入用户"></el-input></el-col>
      <el-col :span="3"><el-input  placeholder="请输入密码"></el-input></el-col>
      <el-col :span="1"><el-button v-on:click="connect" type="success">连接</el-button></el-col>
    </el-row>
    <el-row>
      <el-input
        type="textarea"
        :rows="20"
        placeholder="请输入内容"
        v-model="shellInfo">
      </el-input>
    </el-row>

    <el-row>
      <el-col :span="10"><el-input v-model="command"  placeholder="请输入内容"></el-input></el-col>
      <el-col :span="1"><el-button type="success" v-on:click="submit">输入</el-button></el-col>
    </el-row>

  </div>

</template>

<script>

  export default {
  name: 'Shell',
  data () {
    return {
      shellInfo:'$',
      command:''
    };

  },
    methods:{
      submit:function () {
        this.socket.send(this.command);
        this.command = '';
      },
      connect:function () {
        this.socket = new WebSocket('ws://localhost:8181');
        let that = this;
        this.socket.addEventListener('open', function (event) {
          that.shellInfo = event.data;
        });

        this.socket.addEventListener('message', function (event) {
          that.shellInfo +=event.data;
        });

        this.socket.addEventListener('close', function (event) {
            alert('close');
        });

      }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-col{
  margin-right: 12px;
}
  .el-row {
    margin-top: 10px;
  }
</style>
