import axios from "axios";

export default function AdminGETall() {

    const getAll = () => {

        axios.get('https://student-status-system.herokuapp.com/api/v1/admin/all')
        .then((res)=>{
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log('this is the error: ' + err);
        })

    }

    return (
        <>
            <button onClick={getAll}>get all admin</button>
        </>
    )

}