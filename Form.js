

$(".btnEnvoyer").on("click", function () {
    
    var tel = document.getElementById("telephone").value;
            if (tel.length == 10 &&
                (tel.startsWith("032") ||
                    tel.startsWith("034") ||
                    tel.startsWith("033") ||
                    tel.startsWith("038") ||
                    tel.startsWith("039")))
                     {
                        document.getElementById('labtel').classList.remove('hide');
                        var label = document.getElementById("tel_Erreur");
                        label.textContent = "";
        
                    } else {
                        document.getElementById('labtel').classList.remove('hide');
                        var label = document.getElementById("tel_Erreur");
                        label.textContent = "*Numéro de telephone invalide!";
                    }
     });
