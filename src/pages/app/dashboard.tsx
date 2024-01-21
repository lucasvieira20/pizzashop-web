import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="tracking-tigher text-3xl font-bold">Dashboard</h1>
      </div>
    </div>
  )
}
