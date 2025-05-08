$(document).ready(function(){
    function performSearch() {
        var searchQuery = $('#menubar_searchBar').val();
        console.log('Search Query:', searchQuery);
        window.open(`https://penguinmod.com/search?q=${searchQuery}`)
    }

    $('#menubar_searchIcon').click(function(){
        performSearch();
    });

    $('#menubar_searchBar').keypress(function(e){
        if(e.which === 13){
            performSearch();
        }
    });
});