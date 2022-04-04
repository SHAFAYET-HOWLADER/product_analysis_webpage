import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const data = [{
        "month": "Mar",
        "sell": 100000,
        "benefit": 30000,
        "balance": 1000
    },
    {
        "month": "april",
        "sell": 80000,
        "benefit": 20000,
        "balance": 1000
    },
    {
        "month": "may",
        "sell": 70000,
        "benefit": 20000,
        "balance": 1500
    },
    {
        "month": "jun",
        "sell": 100000,
        "benefit": 20000,
        "balance": 1000
    },
    {
        "month": "jul",
        "sell": 90000,
        "benefit": 20000,
        "balance": 12000
    },
    {
        "month": "aug",
        "sell": 100000,
        "benefit": 30000,
        "balance": 1000
    }
]
    return (
    <div className='chartArea'>
        <div className='lineChart'>
            <div>
            <h2>LineChart : </h2>
            </div>
            <LineChart width={390} height={250} data={data}>
            <Line type="monotone" dataKey={'sell'} stroke="#8884d8" />
            <Line dataKey={"balance"} type="monotone" stroke="#d1d1d1"></Line>
            <CartesianGrid strokeDasharray="3 3" />
            <Line dataKey={"benefit"}></Line>
            <YAxis></YAxis>
            <Tooltip />
            <Legend />
            <XAxis dataKey={"month"}></XAxis>
            </LineChart>
        </div>
        <div className='pieChart'>
            <div>
                <h2>PieChart</h2>
            </div>
            <PieChart width={390} height={250}>
                <Pie data={data} dataKey={"sell"} nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey={"sell"} nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
        <div className='barChart'>
            <div>
                <h2>BarChart : 
          </h2>
            </div>
        <BarChart width={390} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={"sell"} fill="#8884d8" />
                <Bar dataKey={'month'} fill="#82ca9d" />
        </BarChart>
        </div>
        <div className='composedChart'>
            <div>
                <h2>ComposedChart : </h2>
            </div>
        <ComposedChart   width={390} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#d1d1d1" />
            <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="month" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="balance" stroke="#ff7300" />
            </ComposedChart>
        </div>
       </div>
    );
};

export default Dashboard;