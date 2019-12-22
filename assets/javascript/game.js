var randomNum = []
var count = 0
var score = 0
var loss = 0
var win = 0
function getRandomNum() {
    count = Math.floor(Math.random() * (121 - 19) + 19)
    $(".random-num").text(count)
}

function crystalRandomNum() {
    randomNum = []
    for (i = 0; i < 4; i++) {
        randomNum.push(Math.floor(Math.random() * (13 - 1) + 1))
        console.log(randomNum[i])
    }

}

function reset() {
    count = 0
    score = 0
    getRandomNum()
    crystalRandomNum()
    $(".score").text("0")

}

getRandomNum()
crystalRandomNum()

$(".crystal").click(function (event) {

    var crystalSelected = $(event.target).attr("id")

    if (crystalSelected == "red-crystal") {
        score += randomNum[0]
    }
    else if (crystalSelected == "blue-crystal") {
        score += randomNum[1]
    }
    else if (crystalSelected == "yellow-crystal") {
        score += randomNum[2]
    }
    else if (crystalSelected == "green-crystal") {
        score += randomNum[3]
    }

    $(".score").text(score);

    if (score > count) {
        loss++
        $("#loss").text(loss)
        setTimeout(function () {
            alert("You Lost")
            reset()
        }, 100);


    }
    else if (score == count) {
        win++
        $("#win").text(win)
        setTimeout(function () {
            alert("You Won")
            reset()
        }, 100);
    }


}
)

$(".btn").click(function () {
    reset()

})