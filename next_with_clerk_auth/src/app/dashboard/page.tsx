import { Users, Calendar, DollarSign, Activity } from 'lucide-react'
import StatCard from '@/components/dashboard/StatCard'
export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of system activity and management
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,248"
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          title="Total Events"
          value="86"
          icon={<Calendar className="h-6 w-6" />}
        />
        <StatCard
          title="Revenue"
          value="$12,450"
          icon={<DollarSign className="h-6 w-6" />}
        />
        <StatCard
          title="Active Today"
          value="312"
          icon={<Activity className="h-6 w-6" />}
        />
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-4 text-sm">
          <li>👤 New user registered</li>
          <li>📅 Event "Tech Meetup" created</li>
          <li>💳 Ticket purchased</li>
          <li>✏️ Event updated</li>
        </ul>
      </div>
    </div>
  )
}



