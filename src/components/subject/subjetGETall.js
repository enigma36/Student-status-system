import axios from "axios";

export default function GetAllSubject() {
    
    const GetAllSubject = () => {
        axios.get('https://student-status-system.herokuapp.com/api/v1/subject/all')
        .then((res) => {
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <button onClick={GetAllSubject}>get subject</button>
        </>
    )

}