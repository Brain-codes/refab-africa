'use client'

import { usePathname } from 'next/navigation'

const PAGE_TITLES: Record<string, { title: string; description: string }> = {
  '/admin/dashboard': { title: 'Dashboard', description: 'Overview of your platform activity' },
  '/admin/projects': { title: 'Projects', description: 'Manage all Refab Africa projects' },
  '/admin/agents': { title: 'Agents', description: 'View and manage registered agents' },
  '/admin/upcyclers': { title: 'Upcyclers', description: 'View and manage registered upcyclers' },
  '/admin/donations': { title: 'Donations', description: 'Track and manage all donations' },
  '/admin/settings': { title: 'Settings', description: 'Configure your admin preferences' },
}

interface TopbarProps {
  onMenuClick: () => void
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const pathname = usePathname()
  const page = PAGE_TITLES[pathname] ?? { title: 'Admin', description: '' }

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-light flex items-center justify-between px-5 lg:px-7 py-4 gap-4">

      {/* Left: hamburger + title */}
      <div className="flex items-center gap-4 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden flex-shrink-0 text-primary-deepest hover:text-primary transition-colors"
          aria-label="Open sidebar"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="flex flex-col min-w-0">
          <h1 className="text-primary-deepest font-bold text-[1.05rem] leading-tight truncate">{page.title}</h1>
          <p className="text-gray text-xs hidden sm:block truncate">{page.description}</p>
        </div>
      </div>

      {/* Right: search + notifications + avatar */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-background border border-gray-light rounded-[10px] px-3 py-2 w-48 lg:w-56">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray flex-shrink-0">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-primary-deepest placeholder:text-gray/50 outline-none w-full font-clash"
          />
        </div>

        {/* Notifications */}
        <button
          className="relative w-9 h-9 flex items-center justify-center rounded-[10px] border border-gray-light text-gray hover:text-primary-deepest hover:border-primary/30 transition-all"
          aria-label="Notifications"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white" />
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-[10px] bg-primary-deepest flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-primary transition-colors">
          SA
        </div>
      </div>
    </header>
  )
}
