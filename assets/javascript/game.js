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
        alert("You Lost")
        getRandomNum()
        crystalRandomNum()
        $(".score").empty()
    }
    else if (score == count) {
        win++
        $("#win").text(win)
        alert("You Won")
        getRandomNum()
        crystalRandomNum()
        $(".score").empty()

    }
})

$(".btn").click(function () {
    getRandomNum()
    crystalRandomNum()
    $(".score").empty()

})