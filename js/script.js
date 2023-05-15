async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .catch(err => console.log(`An error occured: ${err}`))
    return response.slip
}

document.addEventListener('DOMContentLoaded', async () => {
    const content = await fetchAdvice()
    document.getElementById('adviceId').textContent = content.id
    document.querySelector('.main__article-text').textContent = content.advice
})

document.getElementById('diceButton').addEventListener('click', async (ev) => {
    const content = await fetchAdvice()
    document.getElementById('adviceId').textContent = content.id
    document.querySelector('.main__article-text').textContent = content.advice
    
})