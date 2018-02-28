main()

// debut
function main() {
    const canvas = document.querySelector(".canvas")

    // Initialisation du contexte WebGL
    const gl = canvas.getContext("webgl")

     // seulement si WebGL est disponible et fonctionnel
     if(!gl) {
        alert("Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter.")
        return
     }

     //  Définir la couleur d'effacement comme étant le jaune

     gl.clearColor(1.0, 1, 0.5, 1.0)

    // Effacer le tampon de couleur avec la couleur d'effacement spécifiée

    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
}
