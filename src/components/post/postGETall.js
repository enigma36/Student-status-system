import axios from "axios";

export default function GetAllPost() {
    
    const getAllPost = () => {
        axios.get('https://student-status-system.herokuapp.com/api/v1/post/all')
        .then((res) => {
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <button onClick={getAllPost}>get post</button>
        </>
    )

}