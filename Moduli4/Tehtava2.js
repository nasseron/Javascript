document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value;
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;
    try {
        const response = await fetch(apiUral);
        const data = await response.json();
        console.log(data);
        const resultElement = document.getElementById('result');
        resultElement.textContent = JSON.stringify(data, null, 2);
    }catch (error) {
        console.error('Error:', error);
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Error retrieving data. Please try again later.';

    }
});