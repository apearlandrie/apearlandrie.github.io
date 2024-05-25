const btnlike1 = document.getElementById("btnLike1")
const btnlike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1)
const countLikes2 = document.getElementById("countLikes2)

function hitLike1() {
        let totalLike1 = parseInt(countLikes1.value) + 1
        countLikes1.textContent = totalLikes1.toString()
}
btnLikes1.addEventListener("click",hitLike1)
