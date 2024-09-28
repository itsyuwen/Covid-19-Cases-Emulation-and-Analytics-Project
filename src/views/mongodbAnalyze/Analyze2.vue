<template>
    <div class="top">
    <el-card class="box-card">
          <span class="box-card-top"><strong>problem2</strong></span>
          <br>
          <div  class="box-card-top1">Connecting to MongoDB</div>
          <div  class="box-card-top2">How do new cases and total cases of infection grow from Jan. 2020 to July 2020?</div>
       <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> --> 
    </el-card>
    </div>

      <div style="margin-left: 50px;margin-top:50px;margin-bottom: 15px;"></div>
      <el-table :data="commits"  style="width: 70%;margin-left:100px;padding-left: 30px;padding-top:15px;padding-right: 20px;">
      <el-table-column prop="Date" label="Date" width="180" />
      <el-table-column prop="NewCases" label="NewCases" width="180" />
      <el-table-column prop="TotalCases" label="TotalCases" width="180" />
    </el-table>
    <el-card class="box-card1">
          <span class="box-card11-top"><strong>analytics</strong></span>
          <br>
          <div  class="box-card1-top"><h2 style="font-weight:600;">conclusion</h2></div>
          <div class="box-card-bottom">
            From January 2020 to July 2020, the number of new cases increased from 9,372 to 6,030,911.<br>
    From January 2020 to July 2020, the number of total cases grew from 38,534 to 362,895,848.</div>
          <div  class="box-card1-top"><h2 style="font-weight:600;">function</h2></div>
          <div class="box-card-bottom">
           Select Date, sum(NewCases), sum(TotalCases) From day_wise Group by Date;<br></div>
          <div  class="box-card1-top"><h2 style="font-weight:600;">map reduce</h2></div>
          <div class="box-card-bottom">
            In this case, mapPartition(p) may takes day_wise in partition p, output the sum of total cases and the sum of new cases for each different date.<br>
    Reduce function then combines the sum of total cases and the sum of new cases in.<br></div>
       <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> --> 
    </el-card>
  
      <!-- <h4>analytics function</h4>
      Select Continent, sum(TotalCases) From worldometer_data Group by Continent<br>
      <h4>map reduce</h4>
      <h4>In this case, mapPartition(p) may takes worldometer_data in partition p, output the sum of total cases for each different continent.<br>
      Reduce function then combines the sum of total cases in.</h4>
  </div> -->
  
  </template>
  
  <script>
  export default{
    data: () => ({
      // branches: ['main', 'v2-compat'],
      // currentBranch: 'main',
      commits: null,
  
    }),
    // data() {
        
    //       commits:{
    //         Continent:'',
    //         TotalCases:''
    //     },
        
    //     }
    // },
    
          // return { onclick:{
          // add:true,//代表add显示
          // edd:false,//代表edd不显示
          // },}
      
      created() {
      // 在初始化的时候进行获取
        this.fetchData()
      },
      methods:{
      //   testbtn() {
      //       this.$refs.testRef.innerHTML = 'Connected'//this.refs.获取制定DOM.输出值：原始值
      // },
        async fetchData() {
        const url = "http://localhost:5000/analytics2mongodb"
        this.commits = await (await fetch(url)).json()
        // console.log(this.commits)
        for (var value of this.commits.values()) {
            console.log(value);
        }
        // console.log(commits)
      }
      }
  }
  </script>
  
 
  <style>
  .top{
    align-items: center;
  
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .text {
    font-size: 14px;
  }
  
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 700px;
    margin-left: 50px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
    
  }
  .box-card-top{
      text-align: center;
      /* margin-left: 50px; */
    }
  .box-card-top1{
      text-align: center;
      /* margin-left: 50px; */
    }
    .box-card-top2{
      /* text-align: left; */
      padding-left: 30px;
      text-align: left;
    }
  strong{
      font-size: 40px;
      color:black;
  }
  
  .Desc1{
    font-size: 13px;
    color:black;
  }
  .Desc{
    font-size: 13px;
    color:black;
  }
  
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .box-card1 {
    width: 700px;
    margin-left: 70px;
    text-align: left;
    margin-top: 40px;
    margin-bottom: 20px;
    padding-left: 20px;
  }
  .box-card11-top{
      text-align: center;
      /* margin-left: 50px; */
    }
  .box-card1-top{
      margin-top: 10px;
      text-align: left;
      margin-bottom: 10px;
      /* margin-left: 50px; */
    }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  </style>