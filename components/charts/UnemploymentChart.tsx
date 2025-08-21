'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { generateUnemploymentData } from '@/lib/mockData'

interface UnemploymentChartProps {
  year?: number
}

export default function UnemploymentChart({ year }: UnemploymentChartProps) {
  const data = generateUnemploymentData(year)
  const interval = year ? 2 : 11

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
        <XAxis 
          dataKey="label" 
          tick={{ fontSize: 10, fill: '#8b949e' }}
          interval={interval}
          stroke="#30363d"
        />
        <YAxis 
          tick={{ fontSize: 10, fill: '#8b949e' }}
          domain={[3, 8]}
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
          name="Unemployment Rate %"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}