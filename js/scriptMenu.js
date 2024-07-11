document.addEventListener("DOMContentLoaded", function() {
    var App = {
        init: function () {
            this.side.nav();
            this.search.bar();
            this.navigation();
            this.hyperlinks();
        },
        side: {
            nav: function () {
                this.toggle();
                this.navigation();
            },
            toggle: function () {
                var navIcon = document.querySelector(".mask");
                navIcon.addEventListener("click", function(e) {
                    e.preventDefault();
                    var nav = document.querySelector(".nav");
                    nav.classList.toggle("active");
                });
            },
            navigation: function () {
                var navLinks = document.querySelectorAll(".nav-left a");
                navLinks.forEach(function(link) {
                    link.addEventListener("click", function(e) {
                        e.preventDefault();
                        var t = e.target.getAttribute("href").replace("#", "");
                        document.querySelector(".sidebar").classList.toggle("active");
                        var htmlSections = document.querySelectorAll(".html");
                        htmlSections.forEach(function(section) {
                            section.classList.remove("visible");
                        });
                        if (t === "home" || t === "" || t === null) {
                            document.querySelector(".html.welcome").classList.add("visible");
                        } else {
                            document.querySelector(".html." + t).classList.add("visible");
                        }
                        App.title(e.target.textContent);
                    });
                });
            }
        },
        search: {
            bar: function () {
                var searchIcon = document.querySelector(".header .ion-ios-search");
                var searchInput = document.querySelector(".header .search input");
                var nav = document.querySelector(".nav");

                searchIcon.addEventListener("click", function() {
                    var e = searchInput.value;
                    if (e !== "" && e !== null) {
                        App.search.html(e);
                        return false;
                    } else {
                        nav.classList.remove("active");
                        searchInput.focus();
                        searchInput.classList.toggle("search-visible");
                    }
                });

                var searchForm = document.querySelector(".search form");
                searchForm.addEventListener("submit", function(e) {
                    e.preventDefault();
                    App.search.html(searchInput.value);
                });
            },
            html: function (e) {
                var searchInput = document.querySelector(".search input");
                searchInput.classList.remove("search-visible");
                var htmlSections = document.querySelectorAll(".html");
                htmlSections.forEach(function(section) {
                    section.classList.remove("visible");
                });
                var searchSection = document.querySelector(".html.search");
                searchSection.classList.add("visible");
                App.title("Result");
                searchSection.innerHTML = searchSection.innerHTML;
                document.querySelector(".html.search .key").innerHTML = e;
                searchInput.value = "";
            }
        },
        navigation: function () {
            var mask = document.querySelector(".nav .mask");
            mask.addEventListener("click", function(e) {
                e.preventDefault();
                mask.parentNode.classList.toggle("active");
            });
        },
        hyperlinks: function () {
            var navItems = document.querySelectorAll(".nav .nav-item");
            navItems.forEach(function(item) {
                item.addEventListener("click", function(e) {
                    e.preventDefault();
                    var t = item.getAttribute("href").replace("#", "");
                    var htmlSections = document.querySelectorAll(".html");
                    htmlSections.forEach(function(section) {
                        section.classList.remove("visible");
                    });
                    document.querySelector(".html." + t).classList.add("visible");
                    item.parentNode.classList.toggle("active");
                    App.title(item.textContent);
                });
            });
        },
        title: function(text) {
            document.title = text;
        }
    };

    App.init(); // Inicia o aplicativo
});
