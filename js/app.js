function mostraImagem(img) {
    if (img.files && img.files[0]) {
        var reader = new FileReader();
        var imagem = document.getElementById("imgUsuario");
        reader.onload = function (e) {
            imagem.src = e.target.result;
        };
        reader.readAsDataURL(img.files[0]);
    }
}

//

const operations = document.querySelectorAll('.operation');
const resumeCont = document.querySelector('#resume .card');
const resume = document.getElementById('resume');

const apiData = [
    {
        operation: 'Operação 1',
        summary: 'Resumo da Operação 1'
    },
    {
        operation: 'Operação 2',
        summary: 'Resumo da Operação 2'
    },
    {
        operation: 'Operação 3',
        summary: 'Resumo da Operação 3'
    },
    // Adicionar mais objetos para mais operações e resumos
];

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        const operationText = operation.textContent.trim();
        const firstParagraph = operationText.split(/\n+/)[0];
        const operationData = apiData.find(data => data.operation == firstParagraph);
        const summary = operationData ? operationData.summary : 'Operação inválida';
        resumeCont.textContent = summary;
        resume.classList.add('appear');
    });
});