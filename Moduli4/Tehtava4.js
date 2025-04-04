// Add event listener to the form when it is submitted
document.getElementById('searchForm').addEventListener('submit', async function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value entered in the input field (TV series name)
    const query = document.getElementById('searchQuery').value;

    // TVMaze API endpoint
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

    // Fetch data from TVMaze API
    try {
        const response = await fetch(apiUrl); // Send the request to the API
        const data = await response.json();   // Parse the response into JSON

        // Get the result container and clear any old results
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = '';  // Clear old results

        // Iterate through each TV show in the response
        data.forEach(tvShow => {
            // Create an article element for each show
            const article = document.createElement('article');

            // Create an h2 element for the name
            const nameElement = document.createElement('h2');
            nameElement.textContent = tvShow.show.name;

            // Create an anchor element for the link
            const linkElement = document.createElement('a');
            linkElement.href = tvShow.show.url;
            linkElement.target = "_blank";
            linkElement.textContent = "More details";

            // Check if the image exists, if not, use a default image
            const imageElement = document.createElement('img');
            const imageUrl = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
            imageElement.src = imageUrl;
            imageElement.alt = tvShow.show.name; // Use name as alt text

            // Create a div element for the summary
            const summaryElement = document.createElement('div');
            summaryElement.innerHTML = tvShow.show.summary || 'No summary available.';

            // Append all elements to the article
            article.appendChild(nameElement);
            article.appendChild(linkElement);
            article.appendChild(imageElement);
            article.appendChild(summaryElement);

            // Append the article to the result container
            resultElement.appendChild(article);
        });

        // Log the data to the console for debugging
        console.log(data);

    } catch (error) {
        // If there is an error, display an error message in the console and the page
        console.error('Error:', error);
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Error retrieving data. Please try again later.';
    }
});
