const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")

const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

const btnDislike1 = document.getElementById("btnDislike1")
const btnDislike2 = document.getElementById("btnDislike2")

const countDisLikes1 = document.getElementById("countDisLikes1")
const countDisLikes2 = document.getElementById("countDisLikes2")

function hitLikes1() {
   let totalLikes1 = parseInt(countLikes1.value) + 1
   countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitLikes2() {
   let totalLikes2 = parseInt(countLikes1.value) + 1
   countLikes2.textContent = totalLikes2.toString() 
} btnLike2.addEventListener("click",hitLikes2)

function MisLikes1() {
   let totalMisLikes1 = parseInt(countDisLikes1.value) + 1
   countDisLikes1.textContent = totalDisLikes1.toString()
}
btnDislike1.addEventListener("click",hitDisLikes1)

function MisLikes2() {
   let totalMisLikes2 = parseInt(countDisLikes2.value) + 1
   countDisLikes2.textContent = totalDisLikes2.toString()
}
btnDislike2.addEventListener("click",hitDisLikes2)
