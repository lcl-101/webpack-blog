<template lang="html">
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border style="width: 100%">
      <el-table-column type="index"width="90"></el-table-column>
      <el-table-column prop="setter" label="setter"></el-table-column>
      <el-table-column prop="subscribe" label="subscribe"></el-table-column>
      <el-table-column prop="isLoop" label="isLoop"></el-table-column>
      <el-table-column prop="hasExpired" label="hasExpired"></el-table-column>
      <el-table-column prop="createdAt" label="createdAt"></el-table-column>
      <el-table-column prop="content" label="content" width="300"></el-table-column>
      <el-table-column prop="time" label="time"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getScheduleList } from '@/api/wechat'
export default {
  data() {
    return {
      listLoading: true,
      list: []
    }
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist (){
      this.listLoading = true
      getScheduleList().then(res => {
        this.listLoading = false
        if(res.status){
          this.list = res.data
        }else {
          this.list = ''
        }
      })
    }
  }
}
</script>
