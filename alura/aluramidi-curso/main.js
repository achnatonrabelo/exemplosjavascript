function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

listaTeclas.forEach((e, i) => {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];

    tecla.onclick = () => {
        tocaSom(`#som_${instrumento}`);
    };
});7
