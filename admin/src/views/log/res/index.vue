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
    <el-table v-loading="listLoading" :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)" border style="width: 100%">
      <el-table-column prop="id" label="id" width="90" sortable></el-table-column>
      <el-table-column prop="startTime" label="startTime" width="180" sortable></el-table-column>
      <el-table-column prop="data[0].request-client-ip" label="ip" width="180"></el-table-column>
      <el-table-column prop="data[0].request-method" label="method"></el-table-column>
      <el-table-column prop="data[0].request-originalUrl" label="originalUrl" width="180"></el-table-column>
      <el-table-column prop="data[0].request-query" label="query"></el-table-column>
      <el-table-column prop="data[0].response-status" label="status" width="100"></el-table-column>
      <el-table-column prop="data[0].response-time" label="time(ms)" width="60"></el-table-column>
      <el-table-column prop="data[0].user-agent" label="agent" width="400"></el-table-column>
      <el-table-column prop="level.levelStr" label="level" width="90">
        <template slot-scope="scope">
          <el-tag :type="scope.row.level.levelStr == 'INFO'?'success':'danger'">{{ scope.row.level.levelStr }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page_boxs"
      background
			layout="prev, pager, next, sizes, total, jumper"
      :page-sizes="[5, 10, 15, 20]"
			:page-size="pagesize"
			:total="list.length"
      :current-page="currpage"
			@current-change="handleCurrentChange"
			@size-change="handleSizeChange"
      style="float:right;margin:20px 0;"
			>
		</el-pagination>
  </div>
</template>
<script>
import { getResLogs } from '@/api/table'
import { Message } from 'element-ui'
import '@/styles/logres.css'
export default {
  data() {
    return {
      clearable: false,
      editable: false,
      listLoading: true,
      list: [],
      value: Date.now(),
      pagesize: 10,
			currpage: 1
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
      getResLogs(param).then(res => {
        this.listLoading = false
        if (res.status) {
          this.list = res.data
        } else {
          this.list = ''
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
      // var h = date.getHours()
      // h = h < 10 ? ('0' + h) : h
      // var minute = date.getMinutes()
      // minute = minute < 10 ? ('0' + minute) : minute
      // var second = date.getSeconds()
      // second = second < 10 ? ('0' + second) : second
      return y + '-' + m + '-' + d
      // return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
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
    handleCurrentChange(cpage) {
      window.scroll(0, 0) 
			this.currpage = cpage
		},
		handleSizeChange(psize) {
			this.pagesize = psize
		}
  }
}
</script>
