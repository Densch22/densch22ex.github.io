async function getBooks(){
                try{
                    const response = await fetch("https://upadhayay.github.io/db.json");
                    const data = await response.json();

                    const booksDiv = document.getElementById("books");

                    for(let book of data.books){
                        const newBookDiv = document.createElement("div");
                      
                        newBookDiv.innerHTML = `<img src="imgs/book.png" alt="book image">` + ` <h1>${book.title}</h1>  <h2>${book.year}</h2> `;
                      
                        newBookDiv.classList.add("book");
                    
                        booksDiv.appendChild(newBookDiv);
                    }
                } catch{
                    console.error("error fetching papers data");
                 }
            }
            getBooks();