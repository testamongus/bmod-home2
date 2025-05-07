$(document).ready(function(){
    $('#icon').click(function(){
        $('nav ul').toggleClass('show');
    });

    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
        applyMode(storedMode);
    }

    $('#darkModeToggle').click(function(){
        const isDarkMode = $('body').hasClass('dark-mode');
        const newMode = isDarkMode ? 'light-mode' : 'dark-mode';
        
        localStorage.setItem('mode', newMode);

        applyMode(newMode);
    });

    function applyMode(mode) {
        $('body').removeClass('dark-mode light-mode').addClass(mode);
        $('nav').removeClass('dark-mode light-mode').addClass(mode);
        $('section').removeClass('dark-mode light-mode').addClass(mode);
        $('footer').removeClass('dark-mode light-mode').addClass(mode);
        $('.footer-row a').removeClass('dark-mode light-mode').addClass(mode);
    }

    function performSearch() {
        var searchQuery = $('#searchBar').val();
        console.log('Search Query:', searchQuery);
        window.open(`https://penguinmod.com/search?q=${searchQuery}`)
    }

    $('#searchIcon').click(function(){
        performSearch();
    });

    $('#searchBar').keypress(function(e){
        if(e.which === 13){
            performSearch();
        }
    });
});