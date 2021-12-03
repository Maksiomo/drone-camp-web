import Nav from '../components/nav'
import { useState } from 'react'
import {Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialState = {
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

const getState = () => ({
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
});

export default function Practices() {

  const [testStats, setTestStats] = useState(initialState);

  if(getState()){
    setInterval(() => {
      setTestStats(getState());
    }, 10000)
  }

  return (
    <div>
      <Nav pressed={"practices"}/>
      <main className="practices">
        <iframe src="https://playcanv.as/p/JERg21J8/"></iframe>
        <div className="graph">
          <Doughnut
            data={testStats}
            width={40}
            height={40}
          />
        </div>
      </main>
    </div>
  )
}