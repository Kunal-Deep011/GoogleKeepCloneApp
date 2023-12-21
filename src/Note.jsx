import React, { useState } from "react";

function Note(props){

    const [displayForm, setDisplayForm] = useState(false);

    const deleteNote =()=>{

        props.deleteItem(props.id);
    };

   function editNote(e){
    e.preventDefault();
    const title = e.target.children[0].value;
    const content = e.target.children[1].value;
    props.editItem(props.id, title, content);

    setDisplayForm(false);

   }

    return(
       
        <div className="note">
           <h3>{props.title}</h3>
           <p>{props.content}</p>
           <form
             onSubmit={editNote}
             className={`${displayForm ? "show" : "hide"}`}
             style={{
                border:"1px solid grey", 
                borderRadius : "1em", 
                padding:"1em", 
                boxShadow:" 10px 10px 8px #C0C0C0"
                }}
           >
               <input placeholder= "Title" />
               <input placeholder="content" />
               <input className="submit" type="submit"/>
           </form>
           <div className="ct">
              <button onClick={deleteNote} className="delete"><span class="material-symbols-outlined" >delete_sweep</span></button>
              <button onClick={()=> setDisplayForm(!displayForm)} className="edit"> <span class="material-symbols-outlined">edit_note</span></button>
           </div>    
         </div>

    );
}

export default Note;