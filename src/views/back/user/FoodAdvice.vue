<template>
  <div>
    <Back></Back>
    <el-row class="mt50">
      <el-col :span="16" :offset="4">
        <el-table
          empty-text="暂无饮食搭配"
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%"
          :header-row-style="{height:'70px'}"
          :row-style="{height:'70px'}">
          <el-table-column
            align="center"
            prop="id"
            label="ID"
            width="80">
          </el-table-column>
          <el-table-column
            align="center"
            prop="food1"
            label="饮食1"
            width="120">
          </el-table-column>
          <el-table-column
            align="center"
            prop="food2"
            label="饮食2"
            width="120">
          </el-table-column>
          <el-table-column
            align="center"
            prop="advice"
            label="搭配建议"
            width="100">
          </el-table-column>
          <el-table-column
            align="center"
            prop="reason"
            label="原因">
          </el-table-column>
          <el-table-column
            align="center"
            prop=""
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDel(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row class="mt50">
      <el-col :span="6" :offset="8">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pagesize"
          @current-change="current_change">
        </el-pagination>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="addFood">新增</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Back from '@/views/components/Back'
import { config } from "../../../utils/global"
import axios from 'axios'
export default {
  name: "UserCheck",
  inject: ['reload'],
  components:{
      Back
  },
  data() {
    return {
      tableData: [],
      total:0,          //默认数据总数
      pagesize:5,       //每页的数据条数
      currentPage:1,    //默认开始页面
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    addFood() {
      this.$router.push('/back/food/add')
    },
    init() {
      const url = config.base_url + '/food/all'
      axios
        .get(url)
        .then(response=>{
          this.total = response.data.data.length
          this.tableData = response.data.data
        })
    },
    handleEdit(index,row) {
      this.$router.push('/back/food/update/' + row.id)
    },
    handleDel(index,row) {
      const self = this
      const url = config.base_url + '/food/del?id=' + row.id
      this.$confirm('此操作将永久删除该搭配, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios
          .delete(url)
          .then(res=>{
            self.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.reload()
          })



      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // });
      });
    },
    current_change:function(currentPage){
      this.currentPage = currentPage;
    }
  }
}
</script>

<style scoped>
  /*垂直居中*/
  .vcenter{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .fonttopic{
    font-size: 24px;
    margin-left: 20px;
  }

  .mt30{
    margin-top: 30px;
  }
  .mt50{
    margin-top: 50px;
  }
</style>
