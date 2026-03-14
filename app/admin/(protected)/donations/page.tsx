const DONATIONS = [
  { id: 'DON-001', donor: 'Chidi Ezekwesili', email: 'chidi@example.com', amount: '₦50,000', project: 'Odyssey Foundation', method: 'Card', status: 'Completed', date: 'Mar 12, 2026' },
  { id: 'DON-002', donor: 'Anonymous', email: '—', amount: '₦10,000', project: 'General Fund', method: 'Transfer', status: 'Completed', date: 'Mar 11, 2026' },
  { id: 'DON-003', donor: 'Bisi Olatunde', email: 'bisi@example.com', amount: '₦25,000', project: 'One Barrow Initiative', method: 'Card', status: 'Pending', date: 'Mar 10, 2026' },
  { id: 'DON-004', donor: 'Adaeze Nwosu', email: 'adaeze@example.com', amount: '₦100,000', project: 'Textile Revival Lagos', method: 'Transfer', status: 'Completed', date: 'Mar 8, 2026' },
  { id: 'DON-005', donor: 'Seun Akinwale', email: 'seun@example.com', amount: '₦5,000', project: 'General Fund', method: 'Card', status: 'Failed', date: 'Mar 7, 2026' },
  { id: 'DON-006', donor: 'Ngozi Iheke', email: 'ngozi@example.com', amount: '₦75,000', project: 'FabForward Abuja', method: 'Transfer', status: 'Completed', date: 'Mar 5, 2026' },
]

const STATUS_STYLES: Record<string, string> = {
  Completed: 'bg-primary-light text-primary-dark',
  Pending: 'bg-amber-50 text-amber-600',
  Failed: 'bg-red-50 text-red-500',
}

export default function DonationsPage() {
  return (
    <div className="flex flex-col gap-5">

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Received', value: '₦2,400,000', sub: 'All time' },
          { label: 'This Month', value: '₦340,000', sub: 'March 2026' },
          { label: 'Total Donors', value: '218', sub: 'Unique donors' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-[14px] border border-gray-light px-5 py-4 flex flex-col gap-1">
            <span className="text-gray text-xs">{s.label}</span>
            <span className="text-primary-deepest font-bold text-xl">{s.value}</span>
            <span className="text-gray text-[11px]">{s.sub}</span>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3 bg-white border border-gray-light rounded-[10px] px-3.5 py-2.5 flex-1 max-w-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray flex-shrink-0">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search donations..." className="bg-transparent text-sm text-primary-deepest placeholder:text-gray/50 outline-none w-full font-clash" />
        </div>
        <select className="bg-white border border-gray-light rounded-[10px] px-3.5 py-2.5 text-sm text-primary-deepest outline-none font-clash">
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[14px] border border-gray-light overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-light bg-background">
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">ID</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Donor</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Amount</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Project</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Method</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Status</th>
                <th className="text-left text-gray text-[11px] font-medium px-5 py-3.5 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light">
              {DONATIONS.map((d) => (
                <tr key={d.id} className="hover:bg-background transition-colors">
                  <td className="px-5 py-3.5">
                    <span className="text-gray text-xs font-mono">{d.id}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary-deepest font-medium text-sm">{d.donor}</span>
                      <span className="text-gray text-xs">{d.email}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-primary-deepest font-bold text-sm">{d.amount}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-gray text-xs">{d.project}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-gray text-xs">{d.method}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[d.status]}`}>{d.status}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-gray text-xs">{d.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-light">
          <span className="text-gray text-xs">Showing 6 of 218 donations</span>
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
