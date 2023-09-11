//your code here
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function sortBandNames(bandNames) {
    return bandNames.sort((a, b) => {
        // Function to remove articles and leading spaces
        const removeArticles = (str) => str.replace(/^(the|an|a)\s+/i, '');

        const nameA = removeArticles(a.toLowerCase());
        const nameB = removeArticles(b.toLowerCase());

        return nameA.localeCompare(nameB);
    });
}

// Sort the band names
bandNames = sortBandNames(bandNames);

// Display the sorted band names in an HTML list
const ul = document.getElementById('band');

bandNames.forEach((bandName) => {
    const li = document.createElement('li');
    li.textContent = bandName;
    ul.appendChild(li);
});

