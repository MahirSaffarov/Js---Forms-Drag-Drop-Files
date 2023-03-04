let input = document.querySelector("input");
let icon = document.querySelector(".box i")
let tableBody = document.querySelector("table tbody");
let table = document.querySelector("table")
let box = document.querySelector(".box")


icon.addEventListener("click", function (e) {
    e.target.nextElementSibling.click();
})

input.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();
        reader.onloadend = (event) => {
            let base64 = event.currentTarget.result;

            tableBody.innerHTML +=
                `<tr>
                <td><img src="${base64}" alt=""></td>
                <td>${file.name}</td>
                <td>${file.size}</td>
                <td><i class="fa-solid fa-trash-can delete"></i></td>
                </tr>`

            let del = document.querySelectorAll(".delete")
            del.forEach(element => {
                element.addEventListener("click", function () {
                    this.parentNode.parentNode.remove();
                })
            });
        }
        reader.readAsDataURL(file);
    }
})
box.ondragover = (e) => {
    e.preventDefault();
}

box.ondrop = (e) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0]
    let reader = new FileReader();
    reader.onloadend = event => {
        let base64 = event.currentTarget.result;
        tableBody.innerHTML +=
        `<tr>
        <td><img src="${base64}" alt=""></td>
        <td>${file.name}</td>
        <td>${file.size}</td>
        <td><i class="fa-solid fa-trash-can delete"></i></td>
        </tr>`

        let del = document.querySelectorAll(".delete")
        del.forEach(element => {
            element.addEventListener("click", function () {
                this.parentNode.parentNode.remove();
                console.log(this.parentNode.parentNode);
            })
        });
    }
    reader.readAsDataURL(file);
}

