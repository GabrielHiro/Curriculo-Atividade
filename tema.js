function trocatema() {
    const body = document.body;
    const temaTroca = document.getElementById('tema-troca');

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        temaTroca.classList.remove('btn-light');
        temaTroca.classList.add('btn-dark');
        temaTroca.innerText = 'Tema Claro';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        temaTroca.classList.remove('btn-dark');
        temaTroca.classList.add('btn-light');
        temaTroca.innerText = 'Tema Escuro';
    }
}
