const SECTIONS = [
  {
    title: 'Account Information',
    description: 'Update your admin profile and credentials',
    fields: [
      { label: 'Full Name', type: 'text', placeholder: 'Super Admin', value: 'Super Admin' },
      { label: 'Email Address', type: 'email', placeholder: 'admin@refabafrica.org', value: 'admin@refabafrica.org' },
    ],
  },
  {
    title: 'Change Password',
    description: 'Keep your account secure with a strong password',
    fields: [
      { label: 'Current Password', type: 'password', placeholder: '••••••••', value: '' },
      { label: 'New Password', type: 'password', placeholder: '••••••••', value: '' },
      { label: 'Confirm New Password', type: 'password', placeholder: '••••••••', value: '' },
    ],
  },
]

const TOGGLES = [
  { label: 'Email Notifications', description: 'Receive email alerts for new registrations and donations', enabled: true },
  { label: 'New Agent Alerts', description: 'Get notified when a new agent registers', enabled: true },
  { label: 'Donation Alerts', description: 'Get notified for every donation received', enabled: false },
  { label: 'Weekly Summary Report', description: 'Receive a weekly digest of platform activity', enabled: true },
]

function Toggle({ enabled }: { enabled: boolean }) {
  return (
    <div className={`relative w-10 h-5 rounded-full transition-colors flex-shrink-0 cursor-pointer ${enabled ? 'bg-primary' : 'bg-gray-light'}`}>
      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0.5'}`} />
    </div>
  )
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 max-w-2xl">

      {/* Account & Password sections */}
      {SECTIONS.map((section) => (
        <div key={section.title} className="bg-white rounded-[14px] border border-gray-light overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-light">
            <h2 className="text-primary-deepest font-semibold text-sm">{section.title}</h2>
            <p className="text-gray text-xs mt-0.5">{section.description}</p>
          </div>
          <div className="px-5 py-5 flex flex-col gap-4">
            {section.fields.map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <label className="text-primary-deepest text-sm font-medium">{field.label}</label>
                <input
                  type={field.type}
                  defaultValue={field.value}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-light bg-background text-primary-deepest text-sm outline-none focus:border-primary transition-colors placeholder:text-gray/50 font-clash"
                />
              </div>
            ))}
            <div className="flex justify-end pt-1">
              <button className="bg-primary-deepest text-white text-sm font-medium px-5 py-2.5 rounded-[10px] hover:bg-primary transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Notifications */}
      <div className="bg-white rounded-[14px] border border-gray-light overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-light">
          <h2 className="text-primary-deepest font-semibold text-sm">Notifications</h2>
          <p className="text-gray text-xs mt-0.5">Choose what alerts you receive</p>
        </div>
        <div className="px-5 py-2 flex flex-col divide-y divide-gray-light">
          {TOGGLES.map((toggle) => (
            <div key={toggle.label} className="flex items-center justify-between gap-4 py-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-primary-deepest text-sm font-medium">{toggle.label}</span>
                <span className="text-gray text-xs">{toggle.description}</span>
              </div>
              <Toggle enabled={toggle.enabled} />
            </div>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-[14px] border border-red-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-red-100">
          <h2 className="text-red-500 font-semibold text-sm">Danger Zone</h2>
          <p className="text-gray text-xs mt-0.5">Irreversible actions — proceed with caution</p>
        </div>
        <div className="px-5 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-primary-deepest text-sm font-medium">Sign out all sessions</span>
            <span className="text-gray text-xs">This will log you out from all active admin sessions</span>
          </div>
          <button className="text-red-500 border border-red-200 text-sm font-medium px-4 py-2.5 rounded-[10px] hover:bg-red-50 transition-colors flex-shrink-0">
            Sign Out All
          </button>
        </div>
      </div>
    </div>
  )
}
