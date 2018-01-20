function fun(){
    var query=document.getElementById("search").value;
    var act="./genre.html?query="+encodeURIComponent(query);
    window.location.href=act;
    }