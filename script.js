// Function to handle search action
function handleSearch() {
    const query = document.querySelector('.search-input').value;
    if (query) {
      alert(`Searching for: ${query}`);
    } else {
      alert('Please enter a search query.');
    }
  }
  
  // Function to handle "I'm Feeling Lucky" action
  function handleFeelingLucky() {
    const query = document.querySelector('.search-input').value;
    if (query) {
      alert(`Feeling lucky with: ${query}`);
    } else {
      alert('Please enter a search query.');
    }
  }
  
  // Add event listeners once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-search').addEventListener('click', handleSearch);
    document.querySelector('.btn-lucky').addEventListener('click', handleFeelingLucky);
  });
  