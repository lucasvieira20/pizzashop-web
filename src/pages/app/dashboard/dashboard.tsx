import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './cards/day-orders-amount'
import { MonthCanceledOrdersAmountCard } from './cards/month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './cards/month-orders-amount'
import { MonthRevenueCard } from './cards/month-revenue-card'
import { PopularProductsChart } from './charts/popular-products-chart'
import { RevenueChart } from './charts/revenue-chart'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="tracking-tigher text-3xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </div>
  )
}
