document.querySelector("#createTask-btn").addEventListener("click", () => {
  taskInput();
});

const taskInput = () => {
  document.querySelector(".card-body").insertAdjacentHTML(
    "beforebegin",
    `<div class="card-body mb-5" >
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>`
  );
};
