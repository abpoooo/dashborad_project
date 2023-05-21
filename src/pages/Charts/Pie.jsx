import React from 'react';
import {Header} from "../../components";

import {pieChartData} from "../../data/dummy";
import PieChart from "../../components/Charts/PieChart";

const Pie = () => {
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category="Pie" title="Project Cost Breakdown" />
            <div className='w-full'>
                <PieChart id='chart-pie' data={pieChartData} legendVisibility height='full'/>
            </div>
        </div>
    );
};

export default Pie;