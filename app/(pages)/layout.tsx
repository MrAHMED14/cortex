import ContactBar from "@/components/navbar/contact-bar"
import SearchBar from "@/components/navbar/search-bar"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/global/footer"
import Up from "@/components/ui/up"

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ContactBar />
      <SearchBar />
      <Navbar />
      <main className="flex flex-col h-full min-h-screen">
        <div className="flex-grow flex-1">{children}</div>
        <Footer />
      </main>
      <Up />
    </>
  )
}
