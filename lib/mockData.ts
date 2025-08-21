// Generate mock data for charts
export const generateTimeSeriesData = (months: number, minValue: number, maxValue: number) => {
  const data = []
  const currentDate = new Date()
  
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() - i)
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: minValue + Math.random() * (maxValue - minValue) + (Math.sin(i * 0.2) * (maxValue - minValue) * 0.2)
    })
  }
  
  return data
}

// CPI Data (Consumer Price Index)
export const cpiData = generateTimeSeriesData(60, 260, 280).map(d => ({
  ...d,
  label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
}))

// Unemployment Rate Data
export const unemploymentData = generateTimeSeriesData(60, 3.5, 7.5).map(d => ({
  ...d,
  label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
}))

// Interest Rates Data (10-Year Treasury)
export const interestRatesData = generateTimeSeriesData(60, 0.5, 5).map(d => ({
  ...d,
  label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
}))

// Multiple Interest Rates Data
export const multipleRatesData = generateTimeSeriesData(60, 0, 5).map(d => {
  const baseValue = d.value
  return {
    date: d.date,
    label: new Date(d.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
    '3Month': baseValue * 0.8,
    '90Day': baseValue * 0.85,
    '10Year': baseValue
  }
})