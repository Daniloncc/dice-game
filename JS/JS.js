// Quando a página é carregada
window.onload = function () {

    // variaveis goBtn, restartBtn, player1, player2
    var goBtn = document.getElementById("go-btn");
    var restartBtn = document.getElementById("restart-btn");
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var dados = document.querySelectorAll(".dado");
    var irish = document.getElementById("irish");
    var minion = document.getElementById("minion");
    var draw = document.getElementById("draw");

    // Exibe os elementos escondidos
    goBtn.classList.remove("hidden");
    irish.classList.remove("hidden");
    dados.forEach((dado) => dado.classList.remove("hidden"));


    //evento go button
    goBtn.addEventListener("click", function () {

        // Oculta o botão go e dado interrogaçao
        goBtn.classList.add("hidden");
        dados.forEach((dado) => dado.classList.add("hidden"));

        //Exibe os elementos de player 1, player 2 e o botão de restart

        restartBtn.classList.remove("hidden");

        // criaçao de numeros aleatorios
        var number1 = Math.floor((Math.random() * 6) + 1);
        var number2 = Math.floor((Math.random() * 6) + 1);

        //mostrar vencedor
        if (number1 > number2) {
            player1.classList.remove("hidden");
        }
        else if (number2 > number1) {
            player2.classList.remove("hidden");
        } else {
            irish.classList.toggle("hidden");
            minion.classList.remove("hidden");
            draw.classList.remove("hidden");

        }

        //variavel para imagem1

        var imgNumber1 = "dado." + number1 + ".PNG";

        var imgSource1 = "IMAGES/" + imgNumber1;

        var image1 = document.querySelectorAll("img")[1];

        image1.classList.remove("hidden");

        image1.setAttribute("src", imgSource1);

        //variavel para imagem2
        var imgNumber2 = "dado." + number2 + ".PNG";

        var imgSource2 = "IMAGES/" + imgNumber2;

        var image2 = document.querySelectorAll("img")[3];

        image2.classList.remove("hidden");

        image2.setAttribute("src", imgSource2);

    });

    //evento restart button
    restartBtn.addEventListener("click", function () {

        // Oculta o botão "Restart, player1 e player2!!!" e exibe os elementos de player 1, player 2 e o botão de restart
        goBtn.classList.remove("hidden");
        irish.classList.remove("hidden");
        minion.classList.add("hidden");
        draw.classList.add("hidden");
        dados.forEach((dado) => dado.classList.remove("hidden"));

        player1.classList.add("hidden");
        player2.classList.add("hidden");
        document.querySelectorAll("img")[1].classList.add("hidden");
        document.querySelectorAll("img")[3].classList.add("hidden");
        restartBtn.classList.add("hidden");

    });

};

