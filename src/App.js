import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { GlobalStyles } from "./Styles/global";



function App() {


    const [addItem, setAddItem] = useState([]);

    const addNote = (note) =>{
       setAddItem((prevData) =>{
           return [...prevData, note];
       });

       console.log(note);
       
    };

    const onDelete = (id) => {
      setAddItem((oldData) =>
         oldData.filter((currdata, idx) => {
          return idx !==id;
         })
      );
    };

    
   function onEdit(id,title,content){
    const update = addItem.find((note, idx) => idx === id)
    update.idx = id;
    update.title = title;
    update.content = content;
    setAddItem([...addItem])

   }
 
   

  return (
    
    <div>
      <GlobalStyles />
      <Header />
      <CreateNote addedNote={addNote}/>
  
      {
        addItem.map((val, index) =>{
          return(
              <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content} 
              deleteItem ={onDelete}
              editItem = {onEdit}
              />
            
          );
        })
      }
      <Footer />
    </div>
    
  );
}

export default App;
