import AdminShell from './_components/AdminShell'

export const metadata = {
  title: 'Admin — Refab Africa',
}

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  // TODO: add server-side auth guard here
  return <AdminShell>{children}</AdminShell>
}
