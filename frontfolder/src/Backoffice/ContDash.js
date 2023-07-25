import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Footer from "./footer"
import { useEffect} from "react";
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import {
  
  PieSeries,
  Title,
  LineSeries,
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Table from "./table";
import AddProjectForm from "./AddProjectForm";
export default function ContDash() {
 // var id=useParams()
 // console.log(id)
    const data = [
        { argument: 'Monday', value: 30 },
        { argument: 'Tuesday', value: 20 },
        { argument: 'Wednesday', value: 10 },
        { argument: 'Thursday', value: 50 },
        { argument: 'Friday', value: 60 },
      ];
      const [chartdata,setchartdata]= useState([])
      const [chartdata1,setchartdata1]= useState([])
      const [chartdata2,setchartdata2]= useState([])
      const [isLoaded, setIsLoaded] = useState(false);

      const tab=[{ argument:'', value:0 }]
      const tab2=[{argument:'', value:0}]
      const tab3=[{argument:'',value:0}]
      useEffect(()=>{
        fetch("http://localhost:8095/votes/stats2")
        .then(res => res.json())
        .then(
            (datachart) => {
                for(let i = 0 ;i < datachart.length;i++)
                        {
                            let o = { "argument": datachart[i]._id.team.team_Name,"value": datachart[i].total}
                            tab3.push(o)
                        }
               setIsLoaded(true)
               setchartdata2(tab3)
            },
            (error) => { 
            },
            console.log(chartdata2)
        )
      },[setIsLoaded==true])     
       useEffect(()=>{  fetch("http://localhost:8095/votes/stats3")
 .then(res => res.json())
 .then(
     (datachart) => {
         
        // console.log(datachart)
         for(let i = 0 ;i < datachart.length;i++)
         {
           //  console.log(datachart[i]._id.option)
           
          //   console.log(datachart[i].nb_qualified_project)
            
             let o = { "argument": datachart[i]._id.option,"value": datachart[i].nb_qualified_project}
           //  console.log(o)
             tab.push(o)
             setIsLoaded(true)
             
         }
         
         
        setchartdata(tab)
      
     },
     (error) => {
        
     },
     console.log(chartdata)
 )
      },[setIsLoaded==true])
      useEffect(()=>{
        fetch("http://localhost:8095/votes/stats1")
        .then(res => res.json())
        .then(
            (datachart) => {
                for(let i = 0 ;i < datachart.length;i++)
                        {
                    let o = { "argument": datachart[i]._id.month+"/"+datachart[i]._id.day,"value": datachart[i].total}
                            tab2.push(o)
                }
               setIsLoaded(true)
               setchartdata1(tab2)
            },
            (error) => {
               
            },
            console.log(chartdata1)
        )
          

      },[setIsLoaded==true])     
       useEffect(()=>{  fetch("http://localhost:8095/votes/stats3")
 .then(res => res.json())
 .then(
     (datachart) => {
         
        // console.log(datachart)
         for(let i = 0 ;i < datachart.length;i++)
         {
           //  console.log(datachart[i]._id.option)
           
          //   console.log(datachart[i].nb_qualified_project)
            
             let o = { "argument": datachart[i]._id.option,"value": datachart[i].nb_qualified_project}
           //  console.log(o)
             tab.push(o)
             setIsLoaded(true)
             
         }
         
         
        setchartdata(tab)
      
     },
     (error) => {
        
     },
     console.log(chartdata)
 )},[])
  
  
    return (<div>
        <body className="g-sidenav-show  bg-gray-200">
        <SideBar></SideBar>

        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div class="container-fluid py-4">
      <div class="row">
    <NavBar></NavBar>
    <div class="row mt-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                
                <div class="chart">
                <Paper>
    <Chart
      data={chartdata}
    >
        <ArgumentAxis></ArgumentAxis>
        <ValueAxis></ValueAxis>
      <BarSeries valueField="value" argumentField="argument" />
      <Title text="Number of Qualified Projects for Bal-projects Per Option"/>
    </Chart>
  </Paper>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 "></h6>
              <p class="text-sm ">Last Campaign Performance</p>
              <div class="dark horizontal">
              <div class="d-flex ">
                <i class="material-icons text-sm my-auto me-1">schedule</i>
                <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2  ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                <div class="chart">
                <Paper>
    <Chart
      data={chartdata1}
    >
        <ArgumentAxis></ArgumentAxis>
        <ValueAxis></ValueAxis>
      <LineSeries valueField="value" argumentField="argument" />
      <Title text="Number of Votes Per day"/>
    </Chart>
  </Paper>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 "> Daily Sales </h6>
              <p class="text-sm "> (<span class="font-weight-bolder">+15%</span>) increase in today sales. </p>
              <div class="dark horizontal">
              <div class="d-flex ">
                <i class="material-icons text-sm my-auto me-1">schedule</i>
                <p class="mb-0 text-sm"> updated 4 min ago </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4 mb-3">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                <div class="chart">
                <Paper>
    <Chart
      data={chartdata2}
    >
        <ArgumentAxis></ArgumentAxis>
        <ValueAxis></ValueAxis>
      <BarSeries valueField="value" argumentField="argument" />
      <Title text="Number of Votes Per Team"/>
    </Chart>
  </Paper>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">Completed Tasks</h6>
              <p class="text-sm ">Last Campaign Performance</p>
              <div class="dark horizontal">
              <div class="d-flex ">
                <i class="material-icons text-sm my-auto me-1">schedule</i>
                <p class="mb-0 text-sm">just updated</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
        <Table></Table>
       </div>
     
      </div>
     
          
         
         
         
       
   
      <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/chartjs.min.js"></script>
    </div></div>
    </main>
    <Footer></Footer>
    </body>
    </div>
    )
}