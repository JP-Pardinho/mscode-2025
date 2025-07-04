function mostrarOpcaoForm() {
    const select = document.querySelector('#opcoes select');
    const opcoes = {
        "1": "agendamento",
        "2": "curriculo",
        "3": "rastrear",
        "4": "outros"
    };
    const ids = Object.values(opcoes);

    ids.forEach(id => document.getElementById(id).classList.add('d-none'));

    const escolhido = opcoes[select.value];
    if (escolhido) {
        document.getElementById(escolhido).classList.remove('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const select = document.querySelector('#opcoes select');
    select.addEventListener('change', mostrarOpcaoForm);
});