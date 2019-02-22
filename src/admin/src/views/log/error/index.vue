<template >
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border style="width: 100%">
      <el-table-column prop="id" label="id" width="180" sortable></el-table-column>
      <el-table-column prop="name" label="name" width="180"></el-table-column>
      <el-table-column prop="code" label="code"></el-table-column>
      <el-table-column prop="contentId" label="contentId"></el-table-column>
      <el-table-column prop="contentName" label="contentName"></el-table-column>
      <el-table-column prop="createTime" label="createTime"></el-table-column>
      <el-table-column prop="modifyTime" label="modifyTime"></el-table-column>
      <el-table-column prop="status" label="status"></el-table-column>
      <el-table-column prop="type" label="type"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { setEvent } from '@/api/table'
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
      setEvent('get', '').then(res => {
        this.listLoading = false
        if (res.status) {
          this.list = res.result
        } else {
          Message({
            message: res.errMessage,
            type: 'error',
            duration: 1 * 1000
          })
        }
      })
    }
  }
}
</script>
