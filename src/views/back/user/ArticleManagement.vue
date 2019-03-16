<template>
  <div>
    <Back></Back>
    <el-row class="mt50">
      <el-col :span="16" :offset="4">
        <el-table
          empty-text="暂无帖子"
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%"
          :header-row-style="{height:'70px'}"
          :row-style="{height:'70px'}">
          <el-table-column
            align="center"
            prop="id"
            label="ID"
            width="50">
          </el-table-column>
          <el-table-column
            align="center"
            prop="title"
            width="250"
            label="文章标题">
          </el-table-column>
          <el-table-column
            align="center"
            prop="level"
            label="分类等级">
            <template slot-scope="scope">
              <div v-if="scope.row.level === 0">未测试</div>
              <div v-else>{{scope.row.level}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="ctime"
            label="创建时间">
          </el-table-column>
          <el-table-column
            align="center"
            prop=""
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
        <el-button type="primary" @click="addArticle">新增</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { config } from "../../../utils/global"
import axios from 'axios'
import Back from "../../components/Back"
export default {
    name: "ArticleManagement",
    components: {Back},
    inject: ['reload'],
    data() {
      return {
        tableData: [
          {
            id: 1,
            title: '放松冥想',
            level: 2,
            createdDate: '2019-03-15'
          }
        ],
        total:0,          //默认数据总数
        pagesize:5,       //每页的数据条数
        currentPage:1,    //默认开始页面
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      addArticle() {
        this.$router.push('/back/article/add')
      },
      init() {
        const url = config.base_url + '/article/all'
        axios
          .get(url)
          .then(response=>{
            this.total = response.data.data.length
            this.tableData = response.data.data
          })
      },
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      handleEdit(index,row) {
        this.$router.push('/back/article/update/' + row.id)
      },
      handleDel(index,row) {
        const self = this
        const url = config.base_url + '/article/del?id=' + row.id
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
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
    }
  }
</script>

<style scoped>
  .mt50{
    margin-top: 50px;
  }
</style>
