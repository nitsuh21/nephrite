import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <div>Test Nephrite</div>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
