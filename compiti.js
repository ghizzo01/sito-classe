var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var html = "<ul>";

        var interpretato = JSON.parse(xmlHttp.responseText);
        for(var i = 0; i < interpretato.length; i++) {
            var giorno = interpretato[i];
            var nome_giorno = giorno['giorno'];
            html = html + "<li>" +'<p class="giorno"'+ '</p>' + nome_giorno ;
            html = html + "<ul>";

            var compiti = giorno['compiti'];
            for(var o = 0; o < compiti.length; o++) {
               var compito = compiti[o];

               var nome_materia = compito['materia'];
               var nome_compito = compito['compito'];
               html = html + "<li>" + '<p class="materie">' + nome_materia+ "</p>";
               html = html + '<p class="compito">' + nome_compito + "</p>" + "</li>";


            }

            html = html + "</ul></li>";
        }

        html = html + "</ul>";

        document.getElementById("compiti").innerHTML = html;
    }
}
xmlHttp.open("GET", "https://raw.githubusercontent.com/ghizzo01/compiti-scuola/master/compiti.json", true);
xmlHttp.send(null);
