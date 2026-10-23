import react from 'react';
import {useState} from 'react'

const Form = ({ setShortId }) => {
    const [url, setUrl] = useState("")
//sending data to backend
    const handleSubmit = async(e) =>{
        e.preventDefault(); //prevents page reload on submit

        try{
            const response = await fetch('http://localhost:8001/',
            {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url: url })
            },
        )
// receiving response from backend in data variable
        const data = await response.json();
        
        setShortId(data.shortId);

        setUrl("")
    } catch(error){
        console.log("error generating link", error)
    }
    }
    return (
       <>
        <form className='form' onSubmit={handleSubmit}>
            <label> <b>Enter your link here: </b> </label>
            
            <input type="text" placeholder='http://www.example.com'
            value={url} onChange={(e)=>setUrl(e.target.value)} className='input-field' />
            
            <button className='btn'>Generate link</button>
            <i style={{display:"block",}}>*Please include "http://" in the link for it to work</i>
        </form>
       </> 
    )
}

export default Form;