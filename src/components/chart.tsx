import React from 'react'
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { options } from "../hooks/useChart"
import useChart from "../hooks/useChart"

const Chart = () => {

    const chartData = useChart();


    return (
        <div className="block rounded-lg bg-white px-5 text-center dark:bg-neutral-700 ">
            <div className=" font-bold border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Covid Cases Fluctuations
            </div>
            <Line data={chartData} options={options}></Line>
        </div>
    )
}

export default Chart
