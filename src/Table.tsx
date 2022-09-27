import { useEffect, useState } from "react"


const Table = () => {
    const [data, setData] = useState<studentDetail[]>([])

    useEffect(() => {
      fetch(
        "https://cdn.statically.io/gist/habibmy/e68e3ae78c609652754c187f4b8d3fe1/raw/0329242628f9e7078f5c9d8d23358d770bf0fd33/result.json")
        .then((res) => res.json())
        .then((json)=>setData(json))
      
    }, [])


    const sortByMarks = () =>{
        data.sort((a,b)=> parseInt(a.marks) - parseInt(b.marks))
    }
    
  return (
    <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll no</th>
        <th onClick={sortByMarks}>Marks</th>
      </tr>
    </thead>
    <tbody>
        {data.map((item)=>
<tr key={item.rollNo} className="hover">
        <td>{item.name}</td>
        <td>{item.rollNo}</td>
        <td>{item.marks}</td>
      </tr>
        )}
      
    </tbody>
  </table>
</div>
  )
}

export default Table