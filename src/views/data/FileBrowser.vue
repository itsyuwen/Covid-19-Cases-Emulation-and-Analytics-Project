<template>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</div>
</template>
<script>
import axios from "axios"
export default {
    data() {
      return {
        data:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    created(){
        this.fetchData()
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      /* 1：查询数据 */
      fetchData(){
     
      const config ={
        contentType:'application/json',
      } 
        let formData = new FormData()
        formData.append('instructions', 'mkdir /')
        let path ="http://localhost:5000/mySQL";

        axios.post(path,formData,config)
          .then((res)=>{
            let organizationList = res.data;
            let tree = organizationList;
            this.data.push(tree);
            console.log(this.data);
          })
          .catch((error)=>{
            console.error(error);
          });
        },
        
      
  }
}
</script>