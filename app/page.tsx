import Sidebar from '@/components/Sidebar'
import ChartCard from '@/components/ChartCard'
import CPIChart from '@/components/charts/CPIChart'
import UnemploymentChart from '@/components/charts/UnemploymentChart'
import InterestRatesChart from '@/components/charts/InterestRatesChart'
import MultipleRatesChart from '@/components/charts/MultipleRatesChart'

export default function Home() {
  return (
    <div className="flex h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Economic Indicators Dashboard</h2>
            <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>Real-time economic data from the Federal Reserve Economic Data (FRED) system</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="CPI - last five years" 
              series="FRED"
            >
              <CPIChart />
            </ChartCard>
            
            <ChartCard 
              title="Infra-Annual Labor Statistics: Unemployment Rate Total" 
              series="FRED"
            >
              <UnemploymentChart />
            </ChartCard>
            
            <ChartCard 
              title="Interest Rates: Long-Term Government Bond Yields: 10-Year" 
              series="FRED"
            >
              <InterestRatesChart />
            </ChartCard>
            
            <ChartCard 
              title="Interest Rates: 3-Month or 90-Day Rates and Yields" 
              series="FRED"
            >
              <MultipleRatesChart />
            </ChartCard>
          </div>
        </div>
      </main>
    </div>
  );
}
