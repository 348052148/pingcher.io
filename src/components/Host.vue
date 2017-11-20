<template>
  <div>

    <el-row>
      <el-col :span="1">

        <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>

      </el-col>

      <el-col :span="3">
        <el-input v-model="input" placeholder="主机名"></el-input>
      </el-col>

      <el-col :span="3">
        <el-select v-model="value6" placeholder="地址">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="3">
        <el-select v-model="value4" filterable placeholder="账户">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="1">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>

    </el-row>

    <el-row>

      <el-table
        :data="tableData2"
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期">
        </el-table-column>

        <el-table-column
          prop="host"
          label="host地址">
        </el-table-column>

        <el-table-column
          prop="os"
          label="系统">
        </el-table-column>

        <el-table-column
          prop="cpu"
          label="CPU">
        </el-table-column>

        <el-table-column
          prop="mem"
          label="内存">
        </el-table-column>


        <el-table-column
          prop="disk"
          label="磁盘">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="success">查看详情</el-button>

            <router-link to="/Shell"><el-button type="text" >连接服务器</el-button></router-link>

          </template>
        </el-table-column>

      </el-table>

    </el-row>
  </div>

</template>

<script>
export default {
  components: {},
  name: 'Host',
  methods: {
    open5() {

    }
  },
  data () {
    return {
        info:'',
      tableData2: [
        {
            date:'2017-12-11',
            host:'192.168.1.198',
            os:'CenteOS5',
            cpu:'4核8线程',
            disk:'希捷10T',
            mem: '2048kb'
        },
        {
          date:'2017-12-11',
          host:'192.168.1.198',
          os:'Ubuntu12.7',
          cpu:'4核8线程',
          disk:'希捷10T',
          mem: '2048kb'
        },
        {
          date:'2017-12-11',
          host:'192.168.1.198',
          os:'CenteOS5',
          cpu:'4核8线程',
          disk:'希捷10T',
          mem: '2048kb'
        },
        {
          date:'2017-12-11',
          host:'192.168.1.198',
          os:'CenteOS5',
          cpu:'4核8线程',
          disk:'希捷10T',
          mem: '2048kb'
        }
      ],
      value6: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value4: '',
      input:''
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


  .el-col{
    margin-right: 10px;
  }
  .el-row{
    margin-top: 10px;
  }
</style>
