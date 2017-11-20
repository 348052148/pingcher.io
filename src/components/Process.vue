<template>
  <el-table
    :data="tableData2"
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Process',
  data () {
    return {
      tableData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '进程1 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '进程2 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '进程3 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '进程4 1518 弄'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
