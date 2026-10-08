function abrir()
{
    let checkbox = document.getElementById("OpenClose")
    let card = document.getElementById("soft-skills-card")

    if (checkbox.checked)
    {
        card.classList.add("aberto")
        card.style.height = "75%"
        setTimeout(function() {card.style.padding = "50px"}, 100)
    }
    else
    {
        card.classList.remove("aberto")
        card.style.height = 0
        card.style.padding = 0
    }
}