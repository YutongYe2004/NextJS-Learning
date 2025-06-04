export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div>
    <h2>Dashboard Layout</h2>
    <main>{children}</main>
  </div>
  )
}