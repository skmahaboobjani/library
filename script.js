const add_btn = document.querySelector('.add-btn')
const modal = document.querySelector('.modal')
const hide_modal = document.querySelector('.hide-modal-btn')
const book_title = document.querySelector('.book-title')
const add_book_btn = document.querySelector('.add-book-btn')
const container = document.querySelector('.container')
let delete_keys = document.querySelectorAll('.cross-btn')
const id_value = 1
let books=[];
console.log(book_title)
console.log(add_book_btn)

delete_keys.forEach((key)=>{
    console.log("hi")
}
);
delete_keys.forEach((key)=>{
    console.log("hi")
}
)

const delete_book_from_local= (bname) =>{

    localStorage.getItem("books")
    books = JSON.parse(localStorage.getItem("books1"));
    for(i=0;i<books.length;i++){
        if(books[i].title==bname){
            books.pop(books[i]);
            localStorage.setItem("books1",JSON.stringify(books))
             console.log(localStorage.getItem("books1"))
 
        }
 
    }
} 

const deleteBook = (event)=>{
    //    hide_modal = document.querySelector('.hide-modal-btn')
    // console.log(event.target)
    // console.log(event.target.classList[0])
    // console.log(event.target.list)
    // event.srcElement.id.classList.remove('show-modal')
    // event.srcElement.id.append(hide_modal)
    console.log(event.srcElement.id)
    let id = event.srcElement.id;
    let inner = document.getElementById(id);
    let bname = inner.parentNode.querySelector('.book-name').textContent;
    delete_book_from_local(bname);

    inner.parentNode.parentNode.removeChild(inner.parentNode);

}

const BuildUi = (books)=>{
    books.forEach((book)=>{
        const book_ctn = document.createElement('div')
        book_ctn.classList.add('book')

        const book_name = document.createElement('h2')
        book_name.classList.add("book-name")
        book_name.innerText = book.title

        const icon = document.createElement('img')
        icon.classList.add("cross-btn")
        //    icon.setAttribute('src',"icons8-cross-mark-48.png")
        icon.setAttribute('src', "https://img.icons8.com/emoji/344/cross-mark-emoji.png")
        icon.setAttribute('id', Math.floor(Math.random() * 100) + 1)
        book_ctn.append(book_name, icon)
        container.append(book_ctn)

    }
    )

    delete_keys = document.querySelectorAll(".cross-btn")
    console.log(delete_keys)
    delete_keys.forEach((key)=>{
        key.addEventListener('click', deleteBook)
    }
    )

}
// const BuildUi =(books)=>{
//     books.forEach((book)=>{
//         const book_ctn = document.createElement('div')
//         book_ctn.classList.add('book')
//         const book_name = document.createElement('h2')
//         book_name.classList.add("book-name")
//         book_name.innerText=book.title

//         const icon = document.createElement('img')
//         icon.classList.add("icons8-cross-mark-48.png")
//         icon.setAttribute('src',"icons8-cross-mark-48.png")

//         book_ctn.append(book_name,icon)
//         container.append(book_ctn)

//     })
// }

const setBooks = ()=>{
    if (localStorage.getItem("books1")) {
        books = JSON.parse(localStorage.getItem("books1"))
    } else {
        const test = {
            title: "Not Found"
        }
        books.push(test)
    }
    BuildUi(books)
}

const showModal = ()=>{
    modal.classList.add('show-modal')
}
const hidemodal = ()=>{

    modal.classList.remove('show-modal')
}
const fetchBookTitle = (event)=>{
    event.preventDefault()
    const book = {
        title: book_title.value
    }
    books.push(book)
    localStorage.setItem("books1", JSON.stringify(books))
    console.log(localStorage.getItem("books1"))
    book_title.value = ""

}

add_book_btn.addEventListener('click', fetchBookTitle)
add_btn.addEventListener('click', showModal);
hide_modal.addEventListener('click', hidemodal);

setBooks()








