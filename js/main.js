//listen for form
document.getElementById('myForm').addEventListener('submit', saveBookmark)

function saveBookmark(e){
  //get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name : siteName,
    url: siteUrl
  }
  
    // Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
      // Init array
      var bookmarks = [];
      // Add to array
      bookmarks.push(bookmark);
      // Set to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      // Get bookmarks from localStorage
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      // Add bookmark to array
      bookmarks.push(bookmark);
      // Re-set back to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }


  //prevent form from submitting
  e.preventDefault();
}

function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //get 
}