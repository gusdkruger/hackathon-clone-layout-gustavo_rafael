const inputCRM = document.getElementById("input-crm");
inputCRM.addEventListener("keydown", (event) => {
    console.log(event);
    const number = Number(event.key);
    const length = event.target.value.length;
    if(isNaN(number) && event.key !== "Backspace" || length > 8 && event.key !== "Backspace") {
        event.preventDefault();
    }
    else if(length == 3 && event.key !== "Backspace") {
        event.target.value += ".";
    }
    else if(length == 7 && event.key !== "Backspace") {
        event.target.value += "-";
    }
});

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let erros = false;

    const inputCRM = document.getElementById("input-crm");
    if(inputCRM.value.length !== 9) {
        alert("Digite o CRM completo");
        erros = true;
    }

    const formUF = document.getElementById("form-uf");
    console.log(formUF);
    if(formUF.value == 0) {
        alert("Selecione o estado");
        erros = true;
    }

    if(!erros) {
        const body = document.getElementsByTagName("body")[0];
        body.innerHTML += `<div class="toast-container position-absolute top-0 end-0">
                            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                <strong class="me-auto">Max Doctor</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body">
                                Sucesso
                                </div>
                            </div>
                            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                <strong class="me-auto">Max Doctor</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body">
                                Voce esta sendo redirecionado
                                </div>
                            </div>
                            </div>`;
        setTimeout(() => {
            window.location.replace("http://www.w3schools.com");
        }, 5000);
    }
});