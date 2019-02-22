<template >
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border style="width: 100%">
      <el-table-column prop="id" label="id" width="90" sortable></el-table-column>
      <el-table-column prop="startTime" label="time" width="180" sortable></el-table-column>
      <el-table-column prop="data[0].request-client-ip" label="ip" width="180"></el-table-column>
      <el-table-column prop="data[0].request-method" label="method"></el-table-column>
      <el-table-column prop="data[0].request-originalUrl" label="originalUrl" width="180"></el-table-column>
      <el-table-column prop="data[0].request-query" label="query"></el-table-column>
      <el-table-column prop="data[0].response-status" label="status" width="100"></el-table-column>
      <el-table-column prop="data[0].response-time" label="time" width="60"></el-table-column>
      <el-table-column prop="data[0].user-agent" label="agent" width="400"></el-table-column>
      <el-table-column prop="level.levelStr" label="level" width="90">
        <template slot-scope="scope">
          <el-tag :type="scope.row.level.levelStr == 'INFO'?'success':'danger'">{{ scope.row.level.levelStr }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getResLogs } from '@/api/table'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      listLoading: true,
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getResLogs().then(res => {
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
    }
  }
}
</script>
