import axios from "axios";

export default function GetAllStudent() {
    
    const getAllStudent = () => {
        axios.get('https://student-status-system.herokuapp.com/api/v1/student/all')
        .then((res) => {
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <button onClick={getAllStudent}>get student</button>
        </>
    )

}