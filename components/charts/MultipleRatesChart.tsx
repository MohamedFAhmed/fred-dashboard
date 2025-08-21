'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { generateMultipleRatesData } from '@/lib/mockData'

interface MultipleRatesChartProps {
  year?: number
}

export default function MultipleRatesChart({ year }: MultipleRatesChartProps) {
  const data = generateMultipleRatesData(year)
  const interval = year ? 2 : 11

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 25 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
        <XAxis 
          dataKey="label" 
          tick={{ fontSize: 10, fill: '#8b949e' }}
          interval={interval}
          stroke="#30363d"
        />
        <YAxis 
          tick={{ fontSize: 10, fill: '#8b949e' }}
          domain={[0, 5]}
          stroke="#30363d"
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#161b22', 
            border: '1px solid #30363d', 
            borderRadius: '6px',
            color: '#c9d1d9'
          }}
          labelStyle={{ color: '#8b949e' }}
          itemStyle={{ color: '#c9d1d9' }}
        />
        <Legend 
          wrapperStyle={{ fontSize: '12px', color: '#8b949e' }}
          iconType="line"
        />
        <Line 
          type="monotone" 
          dataKey="3Month" 
          stroke="#f85149" 
          strokeWidth={2}
          dot={false}
          name="3-Month"
        />
        <Line 
          type="monotone" 
          dataKey="90Day" 
          stroke="#3fb950" 
          strokeWidth={2}
          dot={false}
          name="90-Day"
        />
        <Line 
          type="monotone" 
          dataKey="10Year" 
          stroke="#58a6ff" 
          strokeWidth={2}
          dot={false}
          name="10-Year"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}