$(function() {
    const $themeToggle = $('#theme-toggle')

    $themeToggle.on('mouseenter', function() {
        if ($themeToggle.hasClass("fa-moon")) {
            $themeToggle.attr("class", "fa-regular fa-moon fa-lg")
        }
        else if ($themeToggle.hasClass("fa-sun")) {
            $themeToggle.attr("class", "fa-solid fa-sun fa-lg")
        }
    }).on('mouseleave', function() {
        if ($themeToggle.hasClass("fa-moon")) {
            $themeToggle.attr("class", "fa-solid fa-moon fa-lg")
        }
        else if ($themeToggle.hasClass("fa-sun")) {
            $themeToggle.attr("class", "fa-regular fa-sun fa-lg")
        }
    }).on('click', function() {
        toggleTheme();
    })

    function toggleTheme() {
        const $htmlTag = $('html')
        if ($htmlTag.attr("data-bs-theme")) {
            $htmlTag.removeAttr("data-bs-theme")
            $themeToggle.attr("class", "fa-regular fa-sun fa-lg")
        }
        else {
            $htmlTag.attr("data-bs-theme", "dark")
            $themeToggle.attr("class", "fa-solid fa-moon fa-lg")
        }
    }
});
