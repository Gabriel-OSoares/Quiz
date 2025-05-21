window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const respostas = {
            q1: 'c',
            q2: 'c',
            q3: 'a',
            q4: 'c',
            q5: 'c',
            q6: 'b',
            q7: 'b'
        };

        let acertos = 0;

        for (let key in respostas) {
            const selecionada = document.querySelector(`input[name="${key}"]:checked`);
            if (selecionada && selecionada.value === respostas[key]) {
                acertos++;
            }
        }

        alert(`Você acertou ${acertos} de ${Object.keys(respostas).length} perguntas.`);
    });
});
