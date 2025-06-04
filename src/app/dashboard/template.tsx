export default function Template({ children }: { children: React.ReactNode }) {
  return <div className = "template">
    <h3>Template Title</h3>
    {children}
    </div>
}