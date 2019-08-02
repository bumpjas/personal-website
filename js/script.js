/* General JS Scripts */
// .social HoverIN Function 
$(document).ready(function () {
    $('.social').hover(
        function () {
            $(this).css({"width": "150px"});
        },

        function () {
            $(this).css({"width": "100px"});
        }
    );

});
// .social HoverOut Function
$(document).ready(function () {
    $('.social').hover(function () {
            $(this).css({"height": "150px"});
        },

        function () {
            $(this).css({"height": "100px"});
        }
    );

});

function loadRepos() {
    $("#repos").empty();
    let url = "https://api.github.com/users/bumpjas/repos"
    $.ajax({
        url,
        success: displayRepos,
    });
    function displayRepos(respos) {
        for (let repo of respos) {
            let link = $('<a>').text(repo.full_name);
            link.attr('href', repo.html_url);
            $("#repos").append($('<li>').append(link));
        }
    }}