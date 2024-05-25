const btnlikes1 = document.getElementById("btnLikes1")
const btnlikes2 = document.getElementById("btnLikes2")
const countLikes1 = document.getElementById("countLikes1)
const countLikes2 = document.getElementById("countLikes2)

function hitLikes1() {
        let totalLikes1 = parseInt(countLikes1.value) + 1
        countLikes1.textContent = totalLikes1.toString()
}
btnLikes1.addEventListener("click",hitLikes1)
