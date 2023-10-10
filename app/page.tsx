import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import AddPR from './components/AddPR'
import PRlist from './components/PRlist'
import Navbar from './components/Navbar'
import Stat from './components/Stat'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <Navbar/>
      <div className='text-center'>
      <Stat/>
      </div>
      <div className='text-center my-5 flex flex-col gap-4'>
        <AddPR />
      </div>
      <PRlist/>
    </main>
  )
}
