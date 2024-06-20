let list = document.querySelectorAll(".que-list");
let listArray = Array.from(list);
let openItem = null;

listArray.forEach((listItem) => {
    listItem.addEventListener('click', () => {

        let contentItem = listItem.querySelector(".faq-content");
        if (contentItem) {
            contentItem.classList.toggle("content");
        }
        if(openItem && openItem !== contentItem){
            openItem.classList.remove("content");
        }
        openItem = contentItem

    })
})

