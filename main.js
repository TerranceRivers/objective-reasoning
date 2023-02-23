// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(object){
    if (object.userRole === "ADMIN"){
        return true
    }else {
        return false
    }
}

function getEmail(object){
let firstName = object.firstName.toLowerCase()
let lastName = object.lastName.toLowerCase()
return firstName + "." + lastName + "@codeimmersives.com"
}

function getPlaylistLength(playlist){
return playlist.songs.length
}

function getHardestHomework(homeworks) {
    if (homeworks.length === 0) {
      return '';
    }
    
    let hardest = homeworks[0];
    for (let i = 1; i < homeworks.length; i++) {
      if (homeworks[i].averageScore < hardest.averageScore) {
        hardest = homeworks[i];
      }
    }
    
    return hardest.name;
  }
  
  
  
  
      
      function createPhonebook(names, numbers) {
        let phonebook = {};
      
        for (let i = 0; i < names.length; i++) {
          phonebook[names[i]] = numbers[i];
        }
      
        return phonebook;
      }
      


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};