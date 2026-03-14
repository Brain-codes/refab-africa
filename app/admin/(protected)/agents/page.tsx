const AGENTS = [
  { id: 1, name: 'Amaka Okonkwo', email: 'amaka@example.com', location: 'Lagos', project: 'Odyssey Foundation', status: 'Approved', joined: 'Mar 1, 2026' },
  { id: 2, name: 'Tunde Balogun', email: 'tunde@example.com', location: 'Abuja', project: 'FabForward Abuja', status: 'Approved', joined: 'Feb 22, 2026' },
  { id: 3, name: 'Ngozi Eze', email: 'ngozi@example.com', location: 'Enugu', project: 'Odyssey Foundation', status: 'Pending', joined: 'Mar 9, 2026' },
  { id: 4, name: 'Yusuf Abdullahi', email: 'yusuf@example.com', location: 'Kano', project: 'EcoStitch Kano', status: 'Pending', joined: 'Mar 11, 2026' },
  { id: 5, name: 'Fatima Hassan', email: 'fatima@example.com', location: 'Kano', project: 'EcoStitch Kano', status: 'Approved', joined: 'Jan 15, 2026' },
  { id: 6, name: 'Emeka Nwosu', email: 'emeka@example.com', location: 'Lagos', project: 'Textile Revival Lagos', status: 'Suspended', joined: 'Dec 5, 2025' },
  { id: 7, name: 'Blessing Okafor', email: 'blessing@example.com', location: 'Lagos', project: 'One Barrow Initiative', status: 'Approved', joined: 'Feb 10, 2026' },
]

const STATUS_STYLES: Record<string, string> = {
  Approved: 'bg-primary-light text-primary-dark',
  Pending: 'bg-amber-50 text-amber-600',
  Suspended: 'bg-red-50 text-red-500',
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className="w-8 h-8 rounded-full bg-primary-deepest flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
      {initials}
    </div>
  )
}

export default function AgentsPage() {
  return (
    <div className="flex flex-col gap-5">

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 bg-white border border-gray-light rounded-[10px] px-3.5 py-2.5 flex-1 max-w-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray flex-shrink-0">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search agents..." className="bg-transparent text-sm text-primary-deepest placeholder:text-gray/50 outline-none w-full font-clash" />
        </div>
        <div className="flex items-center gap-2">
          <select className="bg-white border border-gray-light rounded-[10px] px-3.5 py-2.5 text-sm text-primary-deepest outline-none font-clash">
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Summary chips */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'Total', count: 182, color: 'bg-white border-gray-light text-primary-deepest' },
          { label: 'Approved', count: 154, color: 'bg-primary-light text-primary-dark border-transparent' },
          { label: 'Pending', count: 21, color: 'bg-amber-50 text-amber-600 border-transparent' },
          { label: 'Suspended', count: 7, color: 'bg-red-50 text-red-500 border-transparent' },
        ].map((c) => (
          <div key={c.label} className={`flex items-center gap-2 px-4 py-2 rounded-[10px] border text-xs font-medium ${c.color}`}>
            <span>{c.label}</span>
            <span className="font-bold">{c.count}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-[14px] border border-gray-light overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-light bg-background">
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Agent</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Location</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Project</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Status</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Joined</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light">
              {AGENTS.map((agent) => (
                <tr key={agent.id} className="hover:bg-background transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <Avatar name={agent.name} />
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-primary-deepest font-medium text-sm truncate">{agent.name}</span>
                        <span className="text-gray text-xs truncate">{agent.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-gray text-xs">{agent.location}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-primary-deepest text-xs font-medium">{agent.project}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[agent.status]}`}>
                      {agent.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-gray text-xs">{agent.joined}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="text-gray hover:text-primary-deepest transition-colors" aria-label="Options">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-light">
          <span className="text-gray text-xs">Showing 7 of 182 agents</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((n) => (
              <button key={n} className={`w-7 h-7 rounded-md text-xs font-medium transition-colors ${n === 1 ? 'bg-primary-deepest text-white' : 'text-gray hover:bg-background'}`}>{n}</button>
            ))}
            <span className="text-gray text-xs px-1">...</span>
            <button className="w-7 h-7 rounded-md text-xs font-medium text-gray hover:bg-background">26</button>
          </div>
        </div>
      </div>
    </div>
  )
}
