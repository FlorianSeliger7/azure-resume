window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})


const functionApiUrl = 'https://cvdbcounter.azurewebsites.net/api/GetResumeCounter?code=2uG25IPMFzee0E63iHLmSELVmYQy6Y6hT6rIL-95dtuiAzFuHeW-yw%3D%3D';
//const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    return fetch(functionApiUrl)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API.");
            const count = response.count;
            document.getElementById("Counter").innerText = count;
            return count;
        })
        .catch(error => {
            console.error(error);
            return 1000;  // Default value if fetch fails
        });
};