import { addDoc, collection, doc, getDocs,deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../libs/firebase";
import AdminFormComponent from "../Components/AdminFormComponent";
import { SignedIn, SignedOut, SignIn, } from "@clerk/clerk-react";
const dataDBCollectionRef = collection(db, "sdb");
function Admin() {
  //States
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    note: "",
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //Create note
  const createNote = async () => {
    await addDoc(dataDBCollectionRef, {
      img: formData.img,
      name: formData.name,
      note: formData.note,
    
    });
  };

  //Delete
  const deleteData=async(id)=>{
    const dataDoc=doc(db,"sdb",id)
    await deleteDoc(dataDoc)
  }

  //Data fetch
  useEffect(() => {
    const getData = async () => {
      //fetching data
      //data collection ref tells from which collection ref i want my data from
      // db is firestore db instance
      const fetchedData = await getDocs(dataDBCollectionRef);
      //doc.data() retrieves the data
      //{...doc.data()} uses the spread operator to
      // copy all properties from doc.data() in new object
      // adds an id from  doc.id
      // maps the arrays into an object
      
      setData(
        fetchedData.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    };
    getData();
  }, [data]);

  return (
    <>
    <SignedIn>
      <div className="w-full flex flex-col gap-10 items-center">
        <h1 className="text-3xl mt-5 custom-font font-semibold text-pink-700 underline">
          Admin
        </h1>
        <div>
          
        </div>
      
      <AdminFormComponent handleChange={handleChange} createNote={createNote}/>
        {/* mapped documents */}

        <div className="w-full h-full  flex items-center justify-center">
          <div className="flex flex-col w-full  md:w-1/2 h-full gap-5">
          <h1 className="text-center text-2xl font-semibold">List of Notes</h1>
          {
            data.map((item)=>(
              <div className="w-full p-2 justify-between flex border" key={item.id}>
                <img className="rounded-full h-10 w-10" src={item.img} alt="" />
                <h2>{item.name}</h2>
                <h2 className="max-w-[200px]">{item.note}</h2>
                <button onClick={()=>{deleteData(item.id)}}>
                  <img className="w-7" src="/trash.svg" alt="" />
                </button>
                </div>
            ))

          }
          </div>
        </div>
      </div>

      </SignedIn>
      <SignedOut>
        <div className="w-full flex-col h-screen items-center gap-10 flex mt-10">
          <h1 className="text-2xl   font-semibold font-mono text-center">Either its me or some mf who thinks he slick</h1>

          <SignIn />

        </div>

      </SignedOut>
    </>
  );
}

export default Admin;
