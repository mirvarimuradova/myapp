import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
const Search = () => {
    const [ resultData, setResultData] = useState([])
    useEffect(() => {
        fetch('https://656461dbceac41c0761e0f66.mockapi.io/Users')
        .then( res =>{
            res.json()
        })
        .then( data =>{
            setResultData(data)
        })
    },[])
     const [searchDatas,setSearchDatas] = useState("")
     const searchData = (e) =>{
        setSearchDatas(e.target.value.toLowerCase())
     }
  return (
    <div>
      <input type='text' onChange={searchData}></input>
      {
        resultData.filter(e => e.name.toLowerCase().includes(searchDatas)).map((a,b)=>(
            <div className='list-item' key={b}>
                <h4>{a.name}</h4>
            </div>
        ))
      }
    </div>
  )
}

export default Search
