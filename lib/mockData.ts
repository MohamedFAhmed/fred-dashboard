// Generate mock data for charts
export const generateTimeSeriesData = (months: number, minValue: number, maxValue: number, year?: number) => {
  const data = []
  const currentDate = year ? new Date(year, 0, 1) : new Date()
  
  for (let i = 0; i < months; i++) {
    const date = new Date(currentDate)
    if (year) {
      date.setMonth(i)
    } else {
      date.setMonth(date.getMonth() - (months - 1 - i))
    }
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: minValue + Math.random() * (maxValue - minValue) + (Math.sin(i * 0.2) * (maxValue - minValue) * 0.2)
    })
  }
  
  return data
}

// Generate year-specific data functions
export const generateCPIData = (year?: number) => {
  const months = year ? 12 : 60
  return generateTimeSeriesData(months, 260, 280, year).map(d => ({
    ...d,
    label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
  }))
}

export const generateUnemploymentData = (year?: number) => {
  const months = year ? 12 : 60
  return generateTimeSeriesData(months, 3.5, 7.5, year).map(d => ({
    ...d,
    label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
  }))
}

export const generateInterestRatesData = (year?: number) => {
  const months = year ? 12 : 60
  return generateTimeSeriesData(months, 0.5, 5, year).map(d => ({
    ...d,
    label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
  }))
}

export const generateMultipleRatesData = (year?: number) => {
  const months = year ? 12 : 60
  return generateTimeSeriesData(months, 0, 5, year).map(d => {
    const baseValue = d.value
    return {
      date: d.date,
      label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
      '3Month': baseValue * 0.8,
      '90Day': baseValue * 0.85,
      '10Year': baseValue
    }
  })
}

// Legacy exports for backward compatibility (default to 5-year data)
export const cpiData = generateCPIData()
export const unemploymentData = generateUnemploymentData()
export const interestRatesData = generateInterestRatesData()
export const multipleRatesData = generateMultipleRatesData()