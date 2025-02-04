import { useEffect, useState } from "react"
import Card from "../Components/Card"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../libs/firebase";
import { bnote } from "../constants";
const dataDBCollectionRef = collection(db, "sdb");
function BdayBoard() {
  const [data,setData]=useState([])
useEffect(()=>{
  const getData=async()=>{
    const fetchedData=await getDocs(dataDBCollectionRef)
    setData(
      fetchedData.docs.map((item)=>({...item.data(),id:item.id}))
    )

  }
getData();
},[data])
  return (
    <div className="w-full h-full items-center flex flex-col">
      <div className="w-[95%] md:w-1/2 bg-rose-300 mt-5 rounded-2xl h-full flex flex-col justify-center items-center text-center">
      <h1 className="mt-5 text-center custom-font font-bold text-pink-800">
      Bday Notes Board</h1>
      <img className="w-52 " src="/Images/gang.png" alt="" />
      </div>

      <div className="w-full h-full flex justify-center">
        <div className="mt-10 grid grid-cols-1 h-full md:grid-cols-3 gap-10">
          <Card name={bnote.name} color="bg-pink-200"  img={bnote.img} note={bnote.note}/>
          {
            data.map((item)=>(
              <Card key={item.id} name={item.name}  img={item.img} note={item.note}/>)
            )

          }

        </div>

      </div>
  
    </div>
  )
}

export default BdayBoard


