import React, { useState, useEffect } from "react";

function CreateNote(props){

    const[expand, setExpand] = useState(false);
   
    const [note, setNote] = useState({
       title: "",
       content: ""
    });

    
    const InputEvent = (e) =>{

        //const value = e.target.value;
        //const name = e.target.name;

        const {name, value} = e.target;

        setNote((prevData) =>{
            return{
                ...prevData,
                [name] : value,   
            }
        });
        console.log(note);
    };

    const addEvent = (e) => {
        e.preventDefault();
        props.addedNote(note);
        setNote({
            title: "",
            content: ""
        });
    };

    const expandIt = ()=>{
        setExpand(true);
    }

    const normalShow = ()=>{
        setExpand(false);
    }
    

    return(
        <div className="createnote" onDoubleClick={normalShow}>
            <form className="inputtext">
               { expand ? (
                 <input 
                 type="text" 
                 name="title" 
                 value={note.title} 
                 onChange={InputEvent} 
                 placeholder="Title" 
                 autoComplete="off" 
                 /> ): null }
                 <textarea 
                 rows="" 
                 column="" 
                 name="content" 
                 value={note.content} 
                 onChange={InputEvent} 
                 placeholder="Write a note..."
                 onClick={expandIt}
                 ></textarea>
                { expand ? (
                 <div className="bt">
                 {/*<button className="palette"> 
                 <span class="material-symbols-outlined">palette</span>
                </button>-->*/}
                 <button onClick={addEvent} className="add">+</button>
                 </div>) : null }
            </form>
        </div>
    )
}

export default CreateNote;