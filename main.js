const parent=document.querySelector('.parent')
const child=document.querySelector('.child')
const submit=document.querySelector('.submit')

submit.addEventListener('click',()=>{
    child.style.backgroundColor='red';
    console.log("child color changed to red")

const newDiv=document.createElement('div')
newDiv.classList.add('child')
newDiv.innerHTML =  "this is a new div"
parent.appendChild(newDiv)
console.log("new div added")
})

// Async function to fetch data from a URL
async function fetchData() {
    try {
        // Fetch data from the URL
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Check if the response is successful (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Log the fetched data
        console.log("Fetched data:", data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error.message);
    }

    console.log("After calling fetchData");
}

// Call the fetchData function
fetchData();
