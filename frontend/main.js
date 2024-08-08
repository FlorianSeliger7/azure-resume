window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    return fetch(functionApi)
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