import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;  
}

body{

    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; 
}
.header{
    position:fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    display:flex;
    justify-content:start;
    background-color:#FEEFC3;
    color:#FFFFFF;
    gap:1em;
    padding: 0.5em;
    align-items: center;
    font-size:1em;
}
.createnote{
    margin-top: 5em;
    display: flex;
    justify-content: center;   
}
.inputtext{
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    padding: 0.5em;
    width: 500px;
    gap: 0.2em;
    border:2px solid #C0C0C0;
    border-radius: 10px;
    box-shadow: 10px 10px 8px #C0C0C0;
}
.add{
   border-radius: 50%;
   width: 40px;
   height: 40px;
   font-size: 2rem;
   color: #FF8C00;
   cursor: pointer;
   border:none;
   box-shadow: 10px 10px 8px #C0C0C0;
}
.add:hover{
    color:#FF8C00;
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.1); 
}
.palette{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height:40px;
    border-radius: 50%;
    border: none;
    box-shadow: 10px 10px 8px #C0C0C0;
}
.palette:hover{
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.1); 
    color:	#FF0000; 
}
textarea{
    height: 40px;
    padding: 0.2em;
    border:none;
    outline:none;
}
input{
    padding: 0.2em;
    font-size: 1.2em;
    border: none;
    color: black;
    outline:none;
}
input::placeholder{
    font-weight:bold;
}
.bt{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.ct{
    display: flex;
    justify-content:flex-end;
    gap:0.4em;
}
.delete, .edit{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height:40px;
    border-radius: 50%;
    border: none;
    box-shadow: 10px 10px 8px #C0C0C0;
}

.ct .delete:hover{
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.1); 
    color:	#FF0000; 
}
.ct .edit:hover{
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.1);
    color:#008000;
}
.note{
    width: 400px;
    margin: 1em;
    display:flex;
    flex-direction: column;
    justify-content: start;
    flex-wrap: wrap;
    gap:20px;
    padding: 0.5em;
    border: 2px solid #C0C0C0;
    border-radius: 10px;
    box-shadow: 10px 10px 8px #C0C0C0;
}

span{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.footer{
    position: fixed;
    width: 100%;
    overflow: hidden;
    bottom: 0;
    display: flex;
    justify-content: center;
    

}

.show{
    display: block;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content: center;
}
.hide{
    display: none;
}

.submit{
   width: 30%;
   border-radius: 10px;
   box-shadow: 10px 10px 8px #C0C0C0;
   cursor: pointer;
}
.submit:hover{
    background-color:#1E90FF;
    
}

`