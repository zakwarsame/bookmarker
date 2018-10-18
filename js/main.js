//listen for form
document.getElementById('myForm').addEventListener('submit', saveBookmark)

function saveBookmark(e) {
  //get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  // Test if bookmarks is null
  if (localStorage.getItem('bookmarks') === null) {
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




function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //get output id
  var bookmarksResult = document.getElementById('bookmarkResult');

  //build output
  bookmarksResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    bookmarksResults.innerHTML += '<div class="well">' + '<h3>' + 
    name + '<a class="btn btn-default" target ="_blank" href="' + 
    url + '">Visit</a> ' +
    '<a onClick="deleteBookmark(\''+url+'\')" class="btn btn-danger" target ="_blank" href="#">Delete</a> '
    + "</h3>";


  }
}