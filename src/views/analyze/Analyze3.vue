<template>
    <div class="top">
    <el-card class="box-card">
          <span class="box-card-top"><strong>problem3</strong></span>
          <br>
          <div  class="box-card-top1">Connecting to FireBase</div>
          <div  class="box-card-top2">What is the death rate from the Covid-19 in each country and region? Which countries and regions have the highest death rate from the Covid-19? Which countries and regions have the lowest death rate from the Covid-19?</div>
       <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> --> 
    </el-card>
    </div>
      <div style="margin-left: 360px;margin-top:15px;margin-bottom: 15px;"><h3>table</h3></div>
      <el-table :data="commits"  style="width: 40%;margin-left:230px;padding-left: 20px;padding-top:15px;">
      <el-table-column prop="Country/Region" label="Country/Region" width="180" />
      <el-table-column prop="Mortality Rate" label="Mortality Rate" width="180" />
    </el-table>
    <el-card class="box-card1">
          <span class="box-card11-top"><strong>analytics</strong></span>
          <br>
          <div  class="box-card1-top"><h2 style="font-weight:600;">conclusion</h2></div>
          <div class="box-card-bottom">
            Of the 187 countries, Yemen, Belgium, United Kingdom, France, Italy, Hungary, Netherlands, Mexico and Spain had the highest death rates of more than 10%. <br>
    Vietnam, Laos, Grenada, Holy See, Saint Vincent and the Grenadines, Greenland, Timor-Leste, Bhutan, Mongolia, Eritrea, Dominica, Cambodia, Seychelles, Saint Kitts and Nevis, Saint Lucia and Fiji had the lowest death rate at 0%.</div>
          <div  class="box-card1-top"><h2 style="font-weight:600;">function</h2></div>
          <div class="box-card-bottom">
            CountryRegion, sum(Deaths)/sum(Confirmed) As MortalityRate From (Select CountryRegion, sum(Deaths), sum(Confirmed) From full_grouped Group by CountryRegion) As A Order by MortalityRate DESC;<br></div>
          <div  class="box-card1-top"><h2 style="font-weight:600;">map reduce</h2></div>
          <div class="box-card-bottom">
            In this case, mapPartition(p) may takes full_grouped in partition p, output the sum of deaths and the sum of confirmed for each country or region.<br>
Reduce function then combines the sum of deaths and the sum of confirmed in, finally calculates the death rate for each country or region.</div>
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
        const url = "http://localhost:5000/analytics3firebase"
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