var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("r1").innerHTML=myObj.results[0].title;
        document.getElementById("f").innerHTML = myObj.results[0].title;
         document.getElementById("s").innerHTML = myObj.results[1].title;
         document.getElementById("t").innerHTML = myObj.results[2].title;
         document.getElementById("fo").innerHTML = myObj.results[3].title;
         document.getElementById("fi").innerHTML = myObj.results[4].title;
        document.getElementById("r1").href='./movieInfo.html?id='+myObj.results[0].id;
        document.getElementById("r1a").innerHTML=myObj.results[0].release_date;
        document.getElementById("r1b").innerHTML=myObj.results[0].vote_average;
        document.getElementById("r1c").innerHTML=myObj.results[0].popularity;
        var img1="https://image.tmdb.org/t/p/w500"+myObj.results[0].poster_path;
        document.getElementById("rimg1").src=img1;
        ///////////////
        document.getElementById("r2").innerHTML=myObj.results[1].title;
        document.getElementById("r2").href='./movieInfo.html?id='+myObj.results[1].id;
        document.getElementById("r2a").innerHTML=myObj.results[1].release_date;
        document.getElementById("r2b").innerHTML=myObj.results[1].vote_average;
        document.getElementById("r2c").innerHTML=myObj.results[1].popularity;
        var img2="https://image.tmdb.org/t/p/w500"+myObj.results[1].poster_path;
        document.getElementById("rimg2").src=img2;
        /////////
        document.getElementById("r3").innerHTML=myObj.results[2].title;
        document.getElementById("r3").href='./movieInfo.html?id='+myObj.results[2].id;
        document.getElementById("r3a").innerHTML=myObj.results[2].release_date;
        document.getElementById("r3b").innerHTML=myObj.results[2].vote_average;
        document.getElementById("r3c").innerHTML=myObj.results[2].popularity;
        var img3="https://image.tmdb.org/t/p/w500"+myObj.results[2].poster_path;
        document.getElementById("rimg3").src=img3;
        //////
        document.getElementById("r4").innerHTML=myObj.results[3].title;
        document.getElementById("r4").href='./movieInfo.html?id='+myObj.results[3].id;
        document.getElementById("r4a").innerHTML=myObj.results[3].release_date;
        document.getElementById("r4b").innerHTML=myObj.results[3].vote_average;
        document.getElementById("r4c").innerHTML=myObj.results[3].popularity;
        var img4="https://image.tmdb.org/t/p/w500"+myObj.results[3].poster_path;
        document.getElementById("rimg4").src=img4;
        /////////
        document.getElementById("r5").innerHTML=myObj.results[4].title;
        document.getElementById("r5").href='./movieInfo.html?id='+myObj.results[4].id;
        document.getElementById("r5a").innerHTML=myObj.results[4].release_date;
        document.getElementById("r5b").innerHTML=myObj.results[4].vote_average;
        document.getElementById("r5c").innerHTML=myObj.results[4].popularity;
        var img5="https://image.tmdb.org/t/p/w500"+myObj.results[4].poster_path;
        document.getElementById("rimg5").src=img5;
        ////////
        document.getElementById("r6").innerHTML=myObj.results[5].title;
        document.getElementById("r6").href='./movieInfo.html?id='+myObj.results[5].id;
        document.getElementById("r6a").innerHTML=myObj.results[5].release_date;
        document.getElementById("r6b").innerHTML=myObj.results[5].vote_average;
        document.getElementById("r6c").innerHTML=myObj.results[5].popularity;
        var img6="https://image.tmdb.org/t/p/w500"+myObj.results[5].poster_path;
        document.getElementById("rimg6").src=img6;
/////////////////////
document.getElementById("r7").innerHTML=myObj.results[6].title;
document.getElementById("r7").href='./movieInfo.html?id='+myObj.results[6].id;
        document.getElementById("r7a").innerHTML=myObj.results[6].release_date;
        document.getElementById("r7b").innerHTML=myObj.results[6].vote_average;
        document.getElementById("r7c").innerHTML=myObj.results[6].popularity;
        var img7="https://image.tmdb.org/t/p/w500"+myObj.results[6].poster_path;
        document.getElementById("rimg7").src=img7;
        ///////////
        document.getElementById("r8").innerHTML=myObj.results[7].title;
        document.getElementById("r8").href='./movieInfo.html?id='+myObj.results[7].id;
        document.getElementById("r8a").innerHTML=myObj.results[7].release_date;
        document.getElementById("r8b").innerHTML=myObj.results[7].vote_average;
        document.getElementById("r8c").innerHTML=myObj.results[7].popularity;
        var img8="https://image.tmdb.org/t/p/w500"+myObj.results[7].poster_path;
        document.getElementById("rimg8").src=img8;
        /////////
        document.getElementById("r9").innerHTML=myObj.results[8].title;
        document.getElementById("r9").href='./movieInfo.html?id='+myObj.results[8].id;
        document.getElementById("r9a").innerHTML=myObj.results[8].release_date;
        document.getElementById("r9b").innerHTML=myObj.results[8].vote_average;
        document.getElementById("r9c").innerHTML=myObj.results[8].popularity;
        var img9="https://image.tmdb.org/t/p/w500"+myObj.results[8].poster_path;
        document.getElementById("rimg9").src=img9;
        /////////////////
        document.getElementById("r10").innerHTML=myObj.results[9].title;
        document.getElementById("r10").href='./movieInfo.html?id='+myObj.results[9].id;
        document.getElementById("r10a").innerHTML=myObj.results[9].release_date;
        document.getElementById("r10b").innerHTML=myObj.results[9].vote_average;
        document.getElementById("r10c").innerHTML=myObj.results[9].popularity;
        var img10="https://image.tmdb.org/t/p/w500"+myObj.results[9].poster_path;
        document.getElementById("rimg10").src=img10;
        document.getElementById("c1").src="https://image.tmdb.org/t/p/w650"+myObj.results[0].backdrop_path;
        document.getElementById("c2").src="https://image.tmdb.org/t/p/w650"+myObj.results[1].backdrop_path;
        document.getElementById("c3").src="https://image.tmdb.org/t/p/w650"+myObj.results[2].backdrop_path;
        document.getElementById("c4").src="https://image.tmdb.org/t/p/w650"+myObj.results[3].backdrop_path;
        document.getElementById("c5").src="https://image.tmdb.org/t/p/w650"+myObj.results[4].backdrop_path;
    }
};
url="https://api.themoviedb.org/3/movie/popular?api_key=5c8c2f862eecc57cc9a208ccde813b0b&language=en-US&page=1";
 xmlhttp.open("GET", url, true);
xmlhttp.send();