'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { interestRatesData } from '@/lib/mockData'

export default function InterestRatesChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={interestRatesData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
        <XAxis 
          dataKey="label" 
          tick={{ fontSize: 10, fill: '#8b949e' }}
          interval={11}
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
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#58a6ff" 
          strokeWidth={2}
          dot={false}
          name="10-Year Treasury %"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}