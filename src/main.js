const TextArea = document.getElementById("textarea-texto")
const BtnEncriptar = document.getElementById("btn-encriptar")
const BtnDesencriptar = document.getElementById("btn-desencriptar")
const campoResult = document.getElementById("result-text")
let BtnCopiar;

BtnEncriptar.onclick = () => {
    let text = TextArea.value
    text = text.replace(/e/g, "enter")
    text = text.replace(/i/g, "imes")
    text = text.replace(/a/g, "ai")
    text = text.replace(/o/g, "ober")
    text = text.replace(/u/g, "ufat")
    campoResult.innerHTML = `<span id="texto-resultado">${text}</span> <button class="btn btn__desencriptar" id="copiar">Copiar</button>`
    campoResult.style.justifyContent = "space-between" 
    BtnCopiar = document.getElementById("copiar")
    BtnCopiar.onclick = copiarResult()
}

BtnDesencriptar.onclick = () => {
    console.log('test');
    let text = TextArea.value
    text = text.replace(/enter/g, "e")
    text = text.replace(/imes/g, "i")
    text = text.replace(/ai/g, "a")
    text = text.replace(/ober/g, "o")
    text = text.replace(/ufat/g, "u")
    campoResult.innerHTML = `<span id="texto-resultado">${text}</span> <button class="btn btn__desencriptar" id="copiar">Copiar</button>`
    campoResult.style.justifyContent = "space-between" 
    BtnCopiar = document.getElementById("copiar")
    BtnCopiar.onclick = copiarResult()
}

copiarResult = () => {
    const toCopy = document.createElement("textarea");
    toCopy.value = document.getElementById("texto-resultado").innerText
    toCopy.setAttribute("readonly", "");
    toCopy.style.position = "absolute";
    toCopy.style.opacity = "0";
    document.body.appendChild(toCopy);
    toCopy.select();
    document.execCommand("copy");
    document.body.removeChild(toCopy);
}


