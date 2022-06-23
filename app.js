let points = 0;
const button_result = document.querySelector("#btn")
const btn_send_name = document.querySelector("#send")
let username = document.getElementById('user');
let user_name = " "

user_name = prompt("Por favor, digite o seu nome.")
username.innerHTML = `Olá, ${user_name}!😊 Está preparad@ para testar seus conhecimentos sobre a série?`

function atualizarSelect() {
    let select_question_1 = document.querySelector('#question_1');

    if (select_question_1.value === "Velocidade") {
        points++
    }
}

function atualizarSelect2() {
    let select_question_2 = document.querySelector('#question_2');

    if (select_question_2.value === "Piscina") {
        points++
    }
}

function atualizarSelect3() {
    let select_question_3 = document.querySelector('#question_3');
    if (select_question_3.value === "Um chapéu de formatura") {
        points++
    }
}

function atualizarSelect4() {
    let select_question_4 = document.querySelector('#question_4');
    if (select_question_4.value === "The Flash") {
        points++
    }
}
function atualizarSelect5() {
    let select_question_5 = document.querySelector('#question_5');
    if (select_question_5.value === "Penny") {
        points++
    }
}

function atualizarSelect6() {
    let select_question_6 = document.querySelector('#question_6');
    if (select_question_6.value === "7ª") {
        points++
    }
}

function atualizarSelect6() {
    let select_question_7 = document.querySelector('#question_7');
    if (select_question_7.value === "7ª") {
        points++
    }
}

function showModal() {
    var element2 = document.getElementById('modal_content');
    var element = document.getElementById('modal');
    element.classList.add('show-modal');

    if (points >= 5) {
        element2.innerHTML = `<h1>Resultado</h1> <br/> Pois bem, <b> ${user_name}</b>! Você atingiu o total de <b>${points} pontos</b>. <br/>Pode colocar The Big Bang Theory no seu currículo pois você é um expert no assunto!  🤓`

    } else if (points > 5 && points < 7) {
        element2.innerHTML = `<h1>Resultado</h1> <br/> Pois bem, <b> ${user_name}</b>! Você atingiu o total de <b> ${points} pontos</b>. Você foi bem apesar de não ser um fã ávido da série. Tudo bem, nós entendemos. Ninguém aguenta os argumentos do Sheldon por muito tempo! 😅`

    } else if (points > 3 && points < 7) {
        element2.innerHTML = `<h1>Resultado</h1> <br/> Pois bem, <b> ${user_name}</b>! Você atingiu o total de <b> ${points} pontos</b>. Você foi bem apesar de não ser um fã ávido da série. Tudo bem, nós entendemos. Ninguém aguenta os argumentos do Sheldon por muito tempo! 😅`

    } else if (points < 3) {
        element2.innerHTML = `<h1>Resultado</h1> <br/> Pois bem, <b> ${user_name}</b>! Você atingiu o total de <b> ${points} pontos</b>. Será que já você já assistiu The Big Band Theory ou está confundindo com How I Met Your Mother? 🤔Melhor sorte da próxima vez!`
    }
}

function hideModal() {
    var element = document.getElementById('modal');
    element.classList.remove('show-modal');

}


