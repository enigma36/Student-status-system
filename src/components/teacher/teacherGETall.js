import axios from "axios";

export default function GetAllTeacher() {
    
    const GetAllTeacher = () => {
        axios.get('https://student-status-system.herokuapp.com/api/v1/teacher/all')
        .then((res) => {
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <button onClick={GetAllTeacher}>get teacher</button>
        </>
    )

}