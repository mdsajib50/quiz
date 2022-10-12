import React from 'react';
import { useLoaderData } from 'react-router';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const Statistics = () => {
    const chartData = useLoaderData()
   const {data} =chartData
    console.log(data)

        return (
       
            <div style={{ width: "100%", height: 500 }}>
                <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 10 }} />
                    
                    </LineChart>
            </ResponsiveContainer>
            </div>
            

    );
    
};
export default Statistics;