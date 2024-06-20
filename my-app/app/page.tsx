import { Approche } from '@/components/Approche'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProject from '@/components/RecentProject'
import { FloatingNav } from '@/components/ui/Floating-navbar'
import { FaHome } from 'react-icons/fa'

export default function Home() {
  return (
    <main className=" relative bg-black-100  font-sans flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: 'Home', link: 'home', icon: <FaHome /> },
            { name: 'Projects', link: 'projects' },
            { name: 'Contact', link: 'contact' },
          ]}
        />
        <Hero />
        <Grid />
        <RecentProject />
        <Experience />
        <Approche />
        <Footer />
      </div>
    </main>
  )
}
