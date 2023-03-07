function comprobarClave() {
    clave1 = document.f1.clave1.value
    clave2 = document.f1.clave2.value

    if (clave1 == "TILIN" && clave2 == "PANQUESITO123"){
        alert("SOS MACHO VA...\n VOTA POR SANDRA TORRES❤️👌🏾");
            var href = "proyecto/html/principal.html";
            window.location=href;
        }

    else{ 
        alert("Error...\nNOSEAS PATO OME");
            var href = "index.html";
            window.location=href;
    }
}
