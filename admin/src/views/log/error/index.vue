<template >
  <div class="app-container">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期"
      style="margin-bottom:20px;"
      @change="changeDate"
      :clearable='clearable'
      :editable = 'editable'
    >
    </el-date-picker>
    <el-table v-loading="listLoading" :data="list" border style="width: 100%">
      <el-table-column prop="id" label="id" width="90" sortable></el-table-column>
      <el-table-column prop="startTime" label="startTime" width="180" sortable></el-table-column>
      <el-table-column prop="data[0].request-client-ip" label="ip" width="180"></el-table-column>
      <el-table-column prop="data[0].request-method" label="method"></el-table-column>
      <el-table-column prop="data[0].request-originalUrl" label="originalUrl" width="180"></el-table-column>
      <el-table-column prop="data[0].request-query" label="query"></el-table-column>
      <!-- <el-table-column prop="data[0].response-status" label="status" width="100"></el-table-column> -->
      <el-table-column prop="data[0].response-time" label="time(ms)" width="60"></el-table-column>
      <el-table-column prop="data[0].user-agent" label="agent" width="100"></el-table-column>
      <el-table-column prop="data[0].err-name" label="name" width="100"></el-table-column>
      <el-table-column prop="data[0].err-message" label="message" width="100"></el-table-column>
      <el-table-column prop="data[0].err-stack" label="stack" width="400"></el-table-column>
      <el-table-column prop="level.levelStr" label="level" width="90">
        <template slot-scope="scope">
          <el-tag :type="scope.row.level.levelStr == 'INFO'?'success':'danger'">{{ scope.row.level.levelStr }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getErrorlog } from '@/api/table'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      listLoading: true,
      list: null,
      value: Date.now(),
      clearable: false,
      editable: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(data) {
      const param = {}
      this.listLoading = true
      if (data) {
        param.time = data
      }
      getErrorlog(param).then(res => {
        this.listLoading = false
        if (res.status) {
          this.list = res.data
        } else {
          Message({
            message: res.message,
            type: 'error',
            duration: 1 * 1000
          })
        }
      })
    },
    formatDateTime(date) {
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      var d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + m + '-' + d
    },
    changeDate(value) {
      this.$data.currpage = 1;
      if (this.formatDateTime(new Date()) === this.formatDateTime(new Date(value))) {
        this.fetchData()
        return
      }
      const formatData = this.formatDateTime(new Date(value))
      this.fetchData(formatData)
    },
  }
}
</script>
