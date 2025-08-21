'use client'

import React from 'react'
import { TrendingUp, Users, Percent, BarChart3, DollarSign, Home, ShoppingCart, Cloud } from 'lucide-react'

const menuItems = [
  { icon: TrendingUp, label: 'Key Indicators', id: 'key-indicators' },
  { icon: Percent, label: 'Inflation', id: 'inflation' },
  { icon: Users, label: 'Employment', id: 'employment' },
  { icon: BarChart3, label: 'Interest Rates', id: 'interest-rates' },
  { icon: TrendingUp, label: 'Economic Growth', id: 'economic-growth' },
  { icon: DollarSign, label: 'Exchange Rates', id: 'exchange-rates' },
  { icon: Home, label: 'Housing', id: 'housing' },
  { icon: ShoppingCart, label: 'Consumer Spending', id: 'consumer-spending' },
  { icon: Cloud, label: 'Weather Forecast', id: 'weather-forecast' }
]

interface SidebarProps {
  activeTab?: string
  onTabChange?: (tabId: string) => void
}

export default function Sidebar({ activeTab = 'key-indicators', onTabChange }: SidebarProps) {
  return (
    <div className="w-64 h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-secondary)', borderRight: '1px solid var(--border-default)' }}>
      <div className="p-6">
        <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>FRED Indicators</h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Economic Data Dashboard</p>
      </div>
      
      <nav className="flex-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-md mb-1"
              style={{
                backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
                color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
                transition: 'all var(--transition-base)',
                cursor: 'pointer'
              }}
              onClick={() => onTabChange?.(item.id)}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <Icon size={18} />
              <span className="text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>
      
      <div className="p-4" style={{ borderTop: '1px solid var(--border-default)' }}>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Data provided by Federal Reserve Economic Data (FRED)
        </p>
      </div>
    </div>
  )
}