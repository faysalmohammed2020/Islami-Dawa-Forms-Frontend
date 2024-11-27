// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { DonutChartData } from './Data/AmoliMuhasabaChartData'
import AmoliMuhasabaForm from './pages/AmoliMuhasabaForm'
import DonutChart from './pages/AmoliMuhasabaCharts'
import DawatiForm from './pages/DawatiForm'
import DawatiMojlishForm from './pages/DawatiMojlishForm'
import DayeeBishoyForm from './pages/DayeeBishoyForm'
import DineFirecheForm from './pages/DineFirecheForm'
import JamatBishoyForm from './pages/JamatBishoyForm'
import MoktobBishoyForm from './pages/MoktobBishoyForm'
import SoforBishoyForm from './pages/SoforBishoyForm'
import TalimForm from './pages/TalimForm'
import TalimDonutChart from './pages/TalimBishoyChart'
import {TalimDonutChartData1, TalimDonutChartData2 } from './Data/TalimBishoyChartData'
// import TalimDonutChart from './pages/TalimBishoyChart'
// import { TalimChartData } from './Data/TalimBishoyChartData'





function App() {
  

  return (
    <>
    <h1 className='text-center bg-[#155E75] text-white py-3'>Islami Dawa Institute All Form Front End With Validation</h1>
   <AmoliMuhasabaForm/>
   <MoktobBishoyForm/>
   <TalimForm/>
   <DayeeBishoyForm/>
   <DawatiForm/>
   <DawatiMojlishForm/>
   <JamatBishoyForm/>
   <DineFirecheForm/>
   <SoforBishoyForm/>

   <DonutChart
                    data={DonutChartData}
                    innerRadius={80}
                    outerRadius={120}
                    startAngle={90}
                    endAngle={450}
                 />
   <TalimDonutChart
                    data1={TalimDonutChartData1}
                    data2={TalimDonutChartData2}
                    innerRadius={80}
                    outerRadius={120}
                    startAngle={90}
                    endAngle={450}
                 />
   
   
    </>
  )
}

export default App
