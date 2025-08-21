'use client'

import React, { useState } from 'react'

interface ChartCardProps {
  title: string
  series?: string
  children: React.ReactNode
}

export default function ChartCard({ title, series, children }: ChartCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="card rounded-lg p-6" 
      style={{ 
        backgroundColor: 'var(--bg-secondary)', 
        border: `1px solid ${isHovered ? 'var(--border-hover)' : 'var(--border-default)'}`,
        boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'all var(--transition-base)',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
        {series && <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{series}</p>}
      </div>
      <div className="h-64">
        {children}
      </div>
    </div>
  )
}