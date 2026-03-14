const STATS = [
  {
    label: 'Total Projects',
    value: '24',
    change: '+3 this month',
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 7l10-4 10 4v10l-10 4L2 17V7z"/>
        <path d="M12 3v18M2 7l10 4 10-4"/>
      </svg>
    ),
  },
  {
    label: 'Registered Agents',
    value: '182',
    change: '+12 this month',
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="7" r="4"/>
        <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"/>
        <path d="M19 8v6M22 11h-6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Upcyclers',
    value: '67',
    change: '+5 this month',
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12V9a8 8 0 0114.93-4" strokeLinecap="round"/>
        <path d="M20 12v3a8 8 0 01-14.93 4" strokeLinecap="round"/>
        <path d="M16 5l3-2 1 3M8 19l-3 2-1-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Total Donations',
    value: '₦2.4M',
    change: '+₦340K this month',
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21C12 21 3 14 3 8a5 5 0 0110 0 5 5 0 0110 0c0 6-9 13-9 13h-2z" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const RECENT_ACTIVITY = [
  { type: 'agent', action: 'New agent registered', name: 'Amaka Okonkwo', time: '2 min ago', status: 'new' },
  { type: 'donation', action: 'Donation received', name: '₦50,000 from Chidi E.', time: '18 min ago', status: 'success' },
  { type: 'project', action: 'Project updated', name: 'Odyssey Foundation', time: '1 hr ago', status: 'update' },
  { type: 'upcycler', action: 'New upcycler registered', name: 'Kemi Adeyemi', time: '3 hrs ago', status: 'new' },
  { type: 'agent', action: 'Agent profile approved', name: 'Tunde Balogun', time: '5 hrs ago', status: 'success' },
]

const RECENT_PROJECTS = [
  { name: 'Odyssey Foundation', status: 'Active', agents: 14, date: 'Mar 2, 2026' },
  { name: 'One Barrow Initiative', status: 'Active', agents: 9, date: 'Feb 18, 2026' },
  { name: 'Green Stitch Program', status: 'Draft', agents: 0, date: 'Mar 10, 2026' },
  { name: 'Textile Revival Lagos', status: 'Active', agents: 22, date: 'Jan 30, 2026' },
]

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-50 text-blue-600',
  success: 'bg-primary-light text-primary-dark',
  update: 'bg-amber-50 text-amber-600',
}

const PROJECT_STATUS_COLORS: Record<string, string> = {
  Active: 'bg-primary-light text-primary-dark',
  Draft: 'bg-gray-light text-gray',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-[14px] p-5 flex flex-col gap-4 border border-gray-light"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-[10px] bg-primary-light flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <span className={`text-xs font-medium flex items-center gap-1 ${stat.up ? 'text-primary' : 'text-red-500'}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {stat.up
                    ? <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                    : <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  }
                </svg>
                {stat.change}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-primary-deepest font-bold text-2xl leading-tight">{stat.value}</span>
              <span className="text-gray text-xs">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom grid: activity + projects */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4">

        {/* Recent Activity */}
        <div className="bg-white rounded-[14px] border border-gray-light overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-light flex items-center justify-between">
            <h2 className="text-primary-deepest font-semibold text-sm">Recent Activity</h2>
            <button className="text-primary text-xs font-medium hover:underline">View all</button>
          </div>
          <div className="flex flex-col divide-y divide-gray-light">
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  item.status === 'new' ? 'bg-blue-400' :
                  item.status === 'success' ? 'bg-primary' : 'bg-amber-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-primary-deepest text-xs font-medium truncate">{item.action}</p>
                  <p className="text-gray text-[11px] truncate">{item.name}</p>
                </div>
                <span className="text-gray text-[10px] flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-[14px] border border-gray-light overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-light flex items-center justify-between">
            <h2 className="text-primary-deepest font-semibold text-sm">Recent Projects</h2>
            <button className="text-primary text-xs font-medium hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-light">
                  <th className="text-left text-gray text-[11px] font-medium px-5 py-3 uppercase tracking-wider">Project</th>
                  <th className="text-left text-gray text-[11px] font-medium px-5 py-3 uppercase tracking-wider">Status</th>
                  <th className="text-left text-gray text-[11px] font-medium px-5 py-3 uppercase tracking-wider">Agents</th>
                  <th className="text-left text-gray text-[11px] font-medium px-5 py-3 uppercase tracking-wider">Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-light">
                {RECENT_PROJECTS.map((project) => (
                  <tr key={project.name} className="hover:bg-background transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="text-primary-deepest font-medium text-xs">{project.name}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${PROJECT_STATUS_COLORS[project.status]}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-gray text-xs">{project.agents}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-gray text-xs">{project.date}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
