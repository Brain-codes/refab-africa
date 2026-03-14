const UPCYCLERS = [
  { id: 1, name: 'Kemi Adeyemi', email: 'kemi@example.com', specialty: 'Textile Weaving', location: 'Lagos', project: 'Textile Revival Lagos', status: 'Active', joined: 'Mar 5, 2026' },
  { id: 2, name: 'Chukwudi Obi', email: 'chukwudi@example.com', specialty: 'Bag Making', location: 'Anambra', project: 'Odyssey Foundation', status: 'Active', joined: 'Feb 14, 2026' },
  { id: 3, name: 'Halima Musa', email: 'halima@example.com', specialty: 'Fabric Dyeing', location: 'Kano', project: 'EcoStitch Kano', status: 'Pending', joined: 'Mar 12, 2026' },
  { id: 4, name: 'Sola Adewale', email: 'sola@example.com', specialty: 'Garment Making', location: 'Ibadan', project: 'One Barrow Initiative', status: 'Active', joined: 'Jan 28, 2026' },
  { id: 5, name: 'Musa Ibrahim', email: 'musa@example.com', specialty: 'Furniture Upcycling', location: 'Abuja', project: 'FabForward Abuja', status: 'Inactive', joined: 'Nov 3, 2025' },
]

const STATUS_STYLES: Record<string, string> = {
  Active: 'bg-primary-light text-primary-dark',
  Pending: 'bg-amber-50 text-amber-600',
  Inactive: 'bg-gray-light text-gray',
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
      {initials}
    </div>
  )
}

export default function UpcyclersPage() {
  return (
    <div className="flex flex-col gap-5">

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 bg-white border border-gray-light rounded-[10px] px-3.5 py-2.5 flex-1 max-w-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray flex-shrink-0">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search upcyclers..." className="bg-transparent text-sm text-primary-deepest placeholder:text-gray/50 outline-none w-full font-clash" />
        </div>
        <select className="bg-white border border-gray-light rounded-[10px] px-3.5 py-2.5 text-sm text-primary-deepest outline-none font-clash">
          <option>All Specialties</option>
          <option>Textile Weaving</option>
          <option>Bag Making</option>
          <option>Fabric Dyeing</option>
          <option>Garment Making</option>
          <option>Furniture Upcycling</option>
        </select>
      </div>

      {/* Summary */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'Total Upcyclers', count: 67, style: 'bg-white border-gray-light text-primary-deepest' },
          { label: 'Active', count: 51, style: 'bg-primary-light text-primary-dark border-transparent' },
          { label: 'Pending Review', count: 10, style: 'bg-amber-50 text-amber-600 border-transparent' },
          { label: 'Inactive', count: 6, style: 'bg-gray-light text-gray border-transparent' },
        ].map((c) => (
          <div key={c.label} className={`flex items-center gap-2 px-4 py-2 rounded-[10px] border text-xs font-medium ${c.style}`}>
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
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Upcycler</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Specialty</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Location</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Project</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Status</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Joined</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light">
              {UPCYCLERS.map((u) => (
                <tr key={u.id} className="hover:bg-background transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <Avatar name={u.name} />
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-primary-deepest font-medium text-sm truncate">{u.name}</span>
                        <span className="text-gray text-xs truncate">{u.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5"><span className="text-gray text-xs">{u.specialty}</span></td>
                  <td className="px-5 py-3.5"><span className="text-gray text-xs">{u.location}</span></td>
                  <td className="px-5 py-3.5"><span className="text-primary-deepest text-xs font-medium">{u.project}</span></td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[u.status]}`}>{u.status}</span>
                  </td>
                  <td className="px-5 py-3.5"><span className="text-gray text-xs">{u.joined}</span></td>
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
          <span className="text-gray text-xs">Showing 5 of 67 upcyclers</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((n) => (
              <button key={n} className={`w-7 h-7 rounded-md text-xs font-medium transition-colors ${n === 1 ? 'bg-primary-deepest text-white' : 'text-gray hover:bg-background'}`}>{n}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
