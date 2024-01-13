function darkmode() {
    var SetTheme = document.section

    SetTheme.classList.toggle(".dark-mode");

    var theme;

    if (SetTheme.classList.contains(".dark-mode")){
        console.log("Dark Mode")
        theme = 'DARK';
    } else {
        console.log("Light Mode")
        theme = 'LIGHT';
    }

    localStorage.setItem('PAGETHEME', JSON.stringify(theme));

}

var GetTheme = JSON.parse(localStorage.getItem('PAGETHEME'));
console.log(GetTheme)

if (GetTheme === "DARK") {
    var SetTheme = document.section
    SetTheme.classList = ".dark-mode"
}