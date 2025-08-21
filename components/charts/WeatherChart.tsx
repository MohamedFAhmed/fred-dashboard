'use client'

import React from 'react'
import { Cloud, CloudRain, Sun, CloudSnow } from 'lucide-react'

interface WeatherDay {
  date: string
  day: string
  high: number
  low: number
  condition: string
  icon: 'sunny' | 'cloudy' | 'rainy' | 'snowy'
  humidity: number
}

const mockWeatherData: WeatherDay[] = [
  {
    date: '2025-08-21',
    day: 'Today',
    high: 78,
    low: 65,
    condition: 'Partly Cloudy',
    icon: 'cloudy',
    humidity: 62
  },
  {
    date: '2025-08-22',
    day: 'Thu',
    high: 82,
    low: 68,
    condition: 'Sunny',
    icon: 'sunny',
    humidity: 55
  },
  {
    date: '2025-08-23',
    day: 'Fri',
    high: 75,
    low: 62,
    condition: 'Light Rain',
    icon: 'rainy',
    humidity: 78
  },
  {
    date: '2025-08-24',
    day: 'Sat',
    high: 73,
    low: 58,
    condition: 'Cloudy',
    icon: 'cloudy',
    humidity: 71
  },
  {
    date: '2025-08-25',
    day: 'Sun',
    high: 79,
    low: 64,
    condition: 'Sunny',
    icon: 'sunny',
    humidity: 58
  },
  {
    date: '2025-08-26',
    day: 'Mon',
    high: 81,
    low: 67,
    condition: 'Partly Cloudy',
    icon: 'cloudy',
    humidity: 61
  },
  {
    date: '2025-08-27',
    day: 'Tue',
    high: 77,
    low: 63,
    condition: 'Light Rain',
    icon: 'rainy',
    humidity: 75
  }
]

const WeatherIcon = ({ icon, size = 32 }: { icon: string, size?: number }) => {
  const iconStyle = { color: 'var(--accent-primary)' }
  
  switch (icon) {
    case 'sunny':
      return <Sun size={size} style={iconStyle} />
    case 'cloudy':
      return <Cloud size={size} style={iconStyle} />
    case 'rainy':
      return <CloudRain size={size} style={iconStyle} />
    case 'snowy':
      return <CloudSnow size={size} style={iconStyle} />
    default:
      return <Cloud size={size} style={iconStyle} />
  }
}

export default function WeatherChart() {
  return (
    <div className="w-full">
      <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-default)' }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            New York City
          </h3>
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            7-Day Forecast
          </span>
        </div>
        <div className="flex items-center gap-4">
          <WeatherIcon icon={mockWeatherData[0].icon} size={48} />
          <div>
            <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {mockWeatherData[0].high}°F
            </div>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {mockWeatherData[0].condition}
            </div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Low: {mockWeatherData[0].low}°F
            </div>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Humidity: {mockWeatherData[0].humidity}%
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
        {mockWeatherData.slice(1).map((day, index) => (
          <div
            key={day.date}
            className="p-3 rounded-lg transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              border: '1px solid var(--border-default)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-default)'
              e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <WeatherIcon icon={day.icon} size={24} />
                <div>
                  <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                    {day.day}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {day.condition}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {day.high}°
                </div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {day.low}°
                </div>
              </div>
            </div>
            <div className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border-default)' }}>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                Humidity: {day.humidity}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-default)' }}>
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Weather data is simulated for demonstration purposes. In a production environment, this would connect to a weather API service.
        </div>
      </div>
    </div>
  )
}