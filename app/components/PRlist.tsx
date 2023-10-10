import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient() 

const fetchPRs = async () =>{
    let PRs = await prisma.pR.findMany()
    return PRs
}

const PRlist = async () => {
    const PRs = await fetchPRs()
    console.log(PRs)
  return (
    <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th></th>
            <th>Description</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Attachement</th>
            <th>Edit</th>
            <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        {PRs.map((PR, index) => (
            <tr key={PR.id}>
              <td>{index + 1}</td>
              <td>{PR.desc}</td>
              <td>{PR.price}</td>
              <td>{PR.UserID}</td>
              <td>{PR.attach}</td>
              <td>{PR.UserID}</td>
              <td>
              <button className="btn btn-success">Edit</button>
              </td>
              <td>
              <button className="btn btn-error">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  )
} 

export default PRlist