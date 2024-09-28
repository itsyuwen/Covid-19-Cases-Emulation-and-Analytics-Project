<template>

  <el-form :model="form" class="login-container">
    <h3>MySQL EDFS terminal</h3>
    <el-form-item>
      <label style="margin-bottom: 10px;"> 
        <p>mkdir: type in the directory you want to create, e.g.mkdir /user/john</p>
          <p>ls: listing content of a given directory, e.g., ls /user</p>
          <p>cat: display content of a file, e.g., cat /user/john/day_wise.csv</p>
          <p>rm: remove a file from the file system, e.g., rm /user/john/day_wise.csv</p>
          <p>put: uploading a file to file system, e.g., put(day_wise.csv, /user/john, k = # partitions)</p>
          <p>getPartitionLocations(file): this method will return the locations of partitions of the file</p>
          <p>readPartition(file, partition#): this method will return the content of partition # of the specified file</p>
      </label>
      <el-input
        type="input"
        placeholder="please input here"
        v-model="form.instruction" 
        name="name"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="submit-button" type="primary" @click="onClick"> submit </el-button>
    </el-form-item>
  </el-form>
  <div>
  <pre>{{returnData}}</pre>
  </div>

</template>
<script>
import axios from "axios"
export default{
data() {
    return {
      form:{
        instruction:'',
      },
      returnData:{},
    }
},
methods:{
  onClick(){
    let formData = new FormData()
    formData.append('instructions', this.form.instruction)
    for (var value of formData.values()) {
  console.log(value);
    }
    //接口请求
    const config ={
      contentType:'application/json',
    } 
    let path ="http://localhost:5000/mySQL";
    axios.post(path,formData,config)
      .then((res)=>{
        this.returnData = res.data;
        //console.log();
      })
      .catch((error)=>{
        console.error(error);
      });
  },
},

}
</script>

<!-- //</script> -->
<style lang="less" scoped>
.login-container {
width: 800px;
background-color: #fff;
border: 1px solid #eaeaea;
border-radius: 15px;
padding: 35px 35px 15px 35px;
box-shadow: 0 0 25px #cacaca;
margin: 10px auto;
h3 {
  text-align: center;
  margin-bottom: 20px;
  color: #505450;
}
.el-form-item__content {
  display: flex;
  justify-content: center;
}
.submit-button{
  margin-left:300px;
  justify-content: center;
}
}
</style>