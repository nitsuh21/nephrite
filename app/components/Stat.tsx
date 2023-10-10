import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import Image from "next/image"

const Stat = async () => {
    const session = await getServerSession(authOptions)
  return (
    <div className="stats shadow mr-1">
  <div className="stat place-items-center">
  <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Total Requests</div>
    <div className="stat-value text-primary">25</div>
    <div className="stat-desc">1% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Onprogress</div>
    <div className="stat-value text-secondary">12</div>
    <div className="stat-desc">3% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
        <Image
        src="data:image/jpeg;base64,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"
        width={500}
        height={500}
        alt="Picture of the user"
        />
     </div>
      </div>
      <div className="stat-title">{JSON.stringify(session?.user?.name)}</div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Items Delivered</div>
    <div className="stat-desc text-secondary">13 tasks remaining</div>
  </div>
  
</div>
  )
}

export default Stat