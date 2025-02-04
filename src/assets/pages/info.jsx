import { useEffect, useState } from "react";
import { addDoc, collection,doc,getDocs, updateDoc,deleteDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";
const dataCollectionRef = collection(db, "sdb");
//This page will handle crud
const Admin = () => {
  const[data,setData]=useState([])
  const [note, setNote] = useState("");
  const [noteImg, setNoteImg] = useState("");
  const[updatedNote,setUpdatedNote]=useState("")
  //creating note
  const createNote = async () => {
    //adding document
    await addDoc(dataCollectionRef, { img: noteImg, note: note });
  };

  const updateNote=async(id)=>{
    const dataDoc=doc(db,"sdb",id)
    const newField={note:updatedNote}
    await updateDoc(dataDoc,newField)
  }

  const deleteUser=async(id)=>{
    const dataDoc=doc(db,"sdb",id);
    await deleteDoc(dataDoc)

  }




  useEffect(()=>{
    //api calling firestore database
    const getData=async()=>{
      //fetching data
      //data collection ref tells from which collection ref i want my data from
      // db is firestore db instance
      const fetchedData=await getDocs(dataCollectionRef)
      setData(fetchedData.docs.map((doc)=>({...doc.data(),id:doc.id})))
     
    }
    getData()

  },[data])





  return (
    <div className="flex flex-col w-full justify-center items-center gap-5">
      <div className="flex flex-col">
        <h1>Create Notes</h1>
        <input
          placeholder="Note..."
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
          type="text"
        />
        <input
          onChange={(event) => {
            setNoteImg(event.target.value);
          }}
          value={noteImg}
          placeholder="Img..."
          type="text"
        />
        <button onClick={createNote}>Create note</button>
      </div>

      <div>
        <h1>Update Notes</h1>
        <input value={updatedNote} onChange={(e)=>{setUpdatedNote(e.target.value)}} type="text" />
      </div>
      {
        data.map((notes)=>(
          <div key={notes.id}>
            <h1>{notes.img}</h1>
            <h2>{notes.note}</h2>
            {/* the button is taking id of the specific note and giving it to update note */}
            <button className="bg-black" onClick={()=>{updateNote(notes.id)}}>Update</button>
            <button className="bg-red-600" onClick={()=>{deleteUser(notes.id)}}>Delete user</button>
          </div>
        ))
      }






    </div>
  );
};

export default Admin;
