<template>
        <div style="padding-top: 10px;">
      <img src="../../assets/images/covid-19.png" style="padding-left:100px;padding-right:100px;width: 800px; height:300px; border-radius: 17%">   
      </div>
      <div style="padding: 10px;">
        <span style="font-size: 60px; font-weight: bold; padding-bottom: 70px;">Covid-19 Dataset</span>
        <div class="bottom clearfix">
          <br>
          <p class="Desc2">Number of Confirmed, Death and Recovered cases every day across the globe</p><br/>
          <p class="Desc"><strong >Description</strong></p><br/>
          <p class="Desc2">full_grouped.csv - Day to day country wise no. of cases (Has County/State/Province level data)<br/><br/>
covid19clean_complete.csv - Day to day country wise no. of cases (Doesn't have County/State/Province level data)<br/><br/>
countrywiselatest.csv - Latest country level no. of cases<br/><br/>
day_wise.csv - Day wise no. of cases (Doesn't have country level data)<br/><br/>
usacountywise.csv - Day to day county level no. of cases<br/><br/>
worldometer_data.csv - Latest data from https://www.worldometers.info/</p><br/>
        </div>
      </div>
</template>

<style lang="less" scoped>
.home {
  .box-card-lefttop{
    margin-top: 20px;
    margin-left: 50px;
    .time {
  font-size: 13px;
  color: black;
}
strong{
    font-size: 50px;
    color:black;
}

.Desc1{
  font-size: 15px;
  color:black;
}
.Desc{
  font-size: 50px;
  color:black;
}

.Desc2{
  font-size: 30px;
  color:black;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

// .button {
//   padding: 0;
//   float: right;
// }

.image {
  width: 400px;
  height: auto;
  display: block;
  padding-left: 20px;
}

.clearfix:before,
.clearfix:after {
    padding-left: 30px;
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
}
.box-card-leftbottom{
    margin-top: 20px;
    margin-left: 20px;
    time{
  font-size: 13px;
  color:black;
}
}
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icons {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
        color: #999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>
