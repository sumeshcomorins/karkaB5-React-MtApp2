const PressHandler =()=>{
    const data={
        request : 'candidate_login',
        email : 'jegan',
        password : '1234567890'
        }

        const headers = {
            'Content-Type': 'text/plain'
        };
    
    axios.post(`http://karka.academy/api/action.php`,data, {headers})
    .then(response => {
        console.log("Success", response);
    })
    .catch(error => {
        console.log("Error", error);
    }
);
}