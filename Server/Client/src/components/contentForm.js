import React from 'react';

export default function ContentForm() {
    const [content, setcontent] = useState({
        content_name:"",
        text:"",
        code:""
    });

    function handleChange(e)
    {
        const{name,value}=e.target;
        setcontent((prev)=>{
            return{
              ...prev,
              [name]:value
            };
          });
    }

    function handleSubmit(e)
    {
        axios.post('http://localhost:5000/content/add',content)
        .then((res)=> console.log(res.data))
        .catch((err)=> console.log(err))
    }
    
  return (
    <>
    <input onChange={handleChange} placeholder="Quiz Name" type="text" name="contentname"/>
    <input onChange={handleChange} placeholder="Text" type="text" name="text"/>
    <input onChange={handleChange} placeholder="Code" type="text" name="code"/>

    <button onClick={handleSubmit}></button>    
    </>
  );
}
