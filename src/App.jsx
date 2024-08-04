
// get multiple data form firebase start here ------ 
// import { useEffect, useState } from 'react';
// import './App.css'
// import { collection, getDocs } from "firebase/firestore";
// import { db } from './firebase';

// function App() {
//   const [value, setValue] = useState([])
//   useEffect(() => {

//     const getdata = async () => {
//       const querySnapshot = await getDocs(collection(db, "result"));
//       let datastock = []
//       querySnapshot.forEach((doc) => {
//         const a = doc.data()

//         datastock.push(a)
//         setValue(datastock)
//         // doc.data() is never undefined for query doc snapshots
//         // console.log(doc.id, " => ", doc.data());
//       });
//     }


//     getdata()
//   }, [])

//   return (
//     <>
//       <h1>hello</h1>
//       {value.map((item, i) => {
//         return <h1 key={i}>
//           hello my name is {item.name}
//         </h1>
//       })}
//     </>
//   )
// }

// export default App

// get a single doucment form database---start here----- 




import { useEffect, useState } from 'react';
import './App.css'
import { getDoc, doc } from "firebase/firestore";
import { db } from './firebase';

function App() {
  const [value, setValue] = useState([])
  useEffect(() => {

    const getData = async () => {
      const docRef = doc(db, "result", "jQ6poBrANtlgFVnE5OrS"); //--here is id of data from database-   
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }


    getData()
  }, [])

  return (
    <>
      <h1>hello</h1>
      {value.map((item, i) => {
        return <h1 key={i}>
          hello my name is {item.name}
        </h1>
      })}
    </>
  )
}

export default App







