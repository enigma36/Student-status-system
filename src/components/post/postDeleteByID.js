import React, { useState } from 'react'
import axios from 'axios';


function PostDeleteById() {

    const [Id, setId] = useState('');

    const api = axios.create({
        baseURL: 'https://student-status-system.herokuapp.com/api/v1/post/delete'

    })

    const deleteId = () => {
       api.delete(`/${Id}`)
       .then((res)=>{
           console.log(res);
           console.log('deleted');
       })
       .catch((err)=>{
           console.log('error: '  + err);
       })

    }



    return (
            <>
                <input onChange={(e)=> setId(e.target.value) }  value={Id} id='Id' type='text' placeholder = 'id' />
                <button onClick={deleteId}>delete</button>
            </>

        )
}

export default PostDeleteById;