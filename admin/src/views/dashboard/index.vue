<template>
  <div class="dashboard-container">
    <div style="margin-bottom: 15px;">Your name：{{ name }} </div>
    <div style="margin-bottom: 15px;">Your roles：<span v-for="role in roles" key="123">{{ [role] }}</span> </div>
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期"
      style="margin-top:30px;"
      @change="changeDate"
    >
    </el-date-picker>
    <el-row style="background:#fff;margin-bottom:32px;margin-top:20px;">
      <line-chart :chart-data="yData" :chart-xdata="xData"/>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineChart from './components/LineChart'
import { Message } from 'element-ui'
import { getResLogs } from '@/api/table'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'Dashboard',
  components: {
    LineChart
  },
  data() {
    return {
      value: Date.now(),
      lineChartData: lineChartData.newVisitis,
      xData: [],
      yData:{
        actualData: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created() {
    this.fetchData()
  },
  methods: {
    /*
    * 速度最快， 占空间最多（空间换时间）
    *
    * 该方法执行的速度比其他任何方法都快， 就是占用的内存大一些。
    * 现思路：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键，
    * 不是的话给对象新增该键并放入新数组。
    * 注意点：判断是否为js对象键时，会自动对传入的键执行“toString()”，
    * 不同的键可能会被误认为一样，例如n[val]-- n[1]、n["1"]；
    * 解决上述问题还是得调用“indexOf”。
    * */
    uniq(array) {
        var temp = {}, r = [], len = array.length, val, type;
        for (var i = 0; i < len; i++) {
            val = array[i];
            type = typeof val;
            if (!temp[val]) {
                temp[val] = [type];
                r.push(val);
            } else if (temp[val].indexOf(type) < 0) {
                temp[val].push(type);
                r.push(val);
            }
        }
        return r;
    },
    fetchData(data) {
      const param = {}
      this.listLoading = true
      if (data) {
        param.time = data
      }
      this.$data.xData = []
      this.$data.yData['actualData'] = []
      getResLogs(param).then(res => {
        if (res.status) {
          if(res.data.length <= 0){
            Message({
              message: res.message,
              type: 'error',
              duration: 1 * 1000
            })
            return
          }
          var time = []
          var listData = {}
          this.list = res.data
          for(var i=0;i<res.data.length;i++){
            time.push(res.data[i].startTime.split(' ')[1].split(':')[0])
          }
          var untime = this.uniq(time)
          this.$data.xData = untime.sort();
          for(var j=0;j<untime.length;j++){
            listData[untime[j]] = [];
          }
          for(var k=0;k<res.data.length;k++){
            listData[res.data[k].startTime.split(' ')[1].split(':')[0]].push(res.data[k])
          }
          for(var j=0;j<untime.length;j++){
            this.$data.yData['actualData'].push(listData[untime[j]].length);
          }
        }else {
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

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
