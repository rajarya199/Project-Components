import Navbar from "@/components/nav/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar/>
      <main className="flex-1">{children}</main>
    </div>
  )
}
