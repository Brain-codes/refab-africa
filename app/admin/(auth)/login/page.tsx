'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: implement auth
  }

  return (
    <div className="min-h-dvh flex font-clash antialiased">

      {/* Left — Brand Panel */}
      <div className="hidden lg:flex lg:w-[45%] bg-primary-deepest flex-col justify-between p-[5%] relative overflow-hidden">

        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #15B800 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #15B800 0%, transparent 40%)`
          }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M10 6L14 8.5V13.5L10 16L6 13.5V8.5L10 6Z" fill="white" opacity="0.6"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-[1.1rem] tracking-tight">Refab Africa</span>
          </Link>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Admin Portal</span>
            <h1 className="text-white font-bold leading-[1.15]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              Manage your<br />impact, one<br />
              <span className="text-primary">action</span> at a time.
            </h1>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-[300px]">
            Access your admin dashboard to oversee projects, agents, upcyclers, and donations across the Refab Africa ecosystem.
          </p>
        </div>

        {/* Bottom stats */}
        <div className="relative z-10 flex gap-8">
          {[
            { value: '24+', label: 'Projects' },
            { value: '180+', label: 'Agents' },
            { value: '₦2.4M', label: 'Donations' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-primary font-bold text-xl">{stat.value}</span>
              <span className="text-white/40 text-xs">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Decorative circle */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full border border-primary/20" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full border border-primary/10" />
      </div>

      {/* Right — Login Form */}
      <div className="flex-1 flex flex-col justify-center px-[6%] py-16 bg-background">

        {/* Mobile logo */}
        <div className="lg:hidden mb-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-deepest rounded-md flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M10 6L14 8.5V13.5L10 16L6 13.5V8.5L10 6Z" fill="white" opacity="0.6"/>
              </svg>
            </div>
            <span className="text-primary-deepest font-semibold text-[1rem]">Refab Africa</span>
          </Link>
        </div>

        <div className="max-w-[400px] w-full mx-auto lg:mx-0">
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-primary-deepest font-bold" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}>
              Welcome back
            </h2>
            <p className="text-gray text-sm">Sign in to your admin account to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-primary-deepest text-sm font-medium" htmlFor="email">
                Email address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="3"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@refabafrica.org"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-[10px] border border-gray-light bg-white text-primary-deepest text-sm outline-none focus:border-primary transition-colors placeholder:text-gray/50"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-primary-deepest text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <button type="button" className="text-primary text-xs font-medium hover:underline">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3.5 rounded-[10px] border border-gray-light bg-white text-primary-deepest text-sm outline-none focus:border-primary transition-colors placeholder:text-gray/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray hover:text-primary-deepest transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-primary-deepest text-white font-semibold text-sm rounded-[10px] hover:bg-primary transition-colors mt-1"
            >
              Sign in to Dashboard
            </button>
          </form>

          <p className="text-center text-gray text-xs mt-8">
            Protected area.{' '}
            <Link href="/" className="text-primary hover:underline">Return to website →</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
