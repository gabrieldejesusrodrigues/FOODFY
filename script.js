const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const imgId = card.getAttribute('id');
        const cardName = card.querySelector('.card_name').querySelector('p').textContent;
        const madeBy = card.querySelector('.made_by').querySelector('p').textContent;
        modalOverlay.classList.add('active'); /*==ADICIONA UMA NOVA CLASSE .ACTIVE==*/
        modalOverlay.querySelector('img').src = `/images/${imgId}.png`;
        modalOverlay.querySelector('#nome_receita').textContent = cardName;
        modalOverlay.querySelector('#chef_receita').textContent = madeBy;
    })
}

modalOverlay.querySelector('.close_modal').addEventListener('click', function() {

    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('img').src = "";

})