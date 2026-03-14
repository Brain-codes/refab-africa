const PROJECTS = [
  { id: 1, name: 'Odyssey Foundation', description: 'Upcycled fashion for youth empowerment', status: 'Active', agents: 14, upcyclers: 8, date: 'Mar 2, 2026' },
  { id: 2, name: 'One Barrow Initiative', description: 'Street vendor circular economy project', status: 'Active', agents: 9, upcyclers: 5, date: 'Feb 18, 2026' },
  { id: 3, name: 'Green Stitch Program', description: 'Community textile recycling campaign', status: 'Draft', agents: 0, upcyclers: 0, date: 'Mar 10, 2026' },
  { id: 4, name: 'Textile Revival Lagos', description: 'Bulk textile waste processing in Lagos', status: 'Active', agents: 22, upcyclers: 12, date: 'Jan 30, 2026' },
  { id: 5, name: 'FabForward Abuja', description: 'Upcycler training and market access', status: 'Paused', agents: 6, upcyclers: 3, date: 'Dec 14, 2025' },
  { id: 6, name: 'EcoStitch Kano', description: 'Northern Nigeria textile waste initiative', status: 'Draft', agents: 0, upcyclers: 0, date: 'Mar 12, 2026' },
]

const STATUS_STYLES: Record<string, string> = {
  Active: 'bg-primary-light text-primary-dark',
  Draft: 'bg-gray-light text-gray',
  Paused: 'bg-amber-50 text-amber-600',
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-5">

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 bg-white border border-gray-light rounded-[10px] px-3.5 py-2.5 flex-1 max-w-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray flex-shrink-0">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search projects..." className="bg-transparent text-sm text-primary-deepest placeholder:text-gray/50 outline-none w-full font-clash" />
        </div>
        <button className="flex items-center gap-2 bg-primary-deepest text-white text-sm font-medium px-4 py-2.5 rounded-[10px] hover:bg-primary transition-colors flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
          </svg>
          New Project
        </button>
      </div>

      {/* Table card */}
      <div className="bg-white rounded-[14px] border border-gray-light overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-light bg-background">
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Project</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Status</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Agents</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Upcyclers</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Date Added</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light">
              {PROJECTS.map((project) => (
                <tr key={project.id} className="hover:bg-background transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary-deepest font-medium text-sm">{project.name}</span>
                      <span className="text-gray text-xs">{project.description}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[project.status]}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-primary-deepest text-sm font-medium">{project.agents}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-primary-deepest text-sm font-medium">{project.upcyclers}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-gray text-xs">{project.date}</span>
                  </td>
                  <td className="px-5 py-4">
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

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-light">
          <span className="text-gray text-xs">Showing 6 of 24 projects</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`w-7 h-7 rounded-md text-xs font-medium transition-colors ${
                  n === 1 ? 'bg-primary-deepest text-white' : 'text-gray hover:bg-background'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
