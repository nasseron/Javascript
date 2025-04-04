document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value;
    const resultElement = document.getElementById('result');
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        resultElement.textContent = JSON.stringify(data, null, 2);
        console.log(data);
    } catch (error) {
        resultElement.textContent = 'Error retrieving data.';
        console.error('Error:', error);
    }
});