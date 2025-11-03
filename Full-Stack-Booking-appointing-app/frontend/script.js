document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await axios.get("http://localhost:3000/users");
    const users = res.data;
    users.forEach((user) => display(user));
  } catch (error) {
    alert(error);
  }
});

async function handleFormSubmit(e) {
  try {
    e.preventDefault();
    const obj = {
      username: e.target.username.value,
      email: e.target.email.value,
      number: e.target.number.value,
    };

    const res = await axios.post("http://localhost:3000/users", obj);
    display(res.data);
  } catch (error) {
    alert(error);
  }
}

function display(data) {
  const li = document.createElement("li");
  const ul = document.querySelector("ul");

  li.textContent =
    data.username + " - " + data.email + " - " + data.number + " ";

  ul.append(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => handleDeleteBtn(data.id, li));
  li.append(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", () => handleEditBtn(data));
  li.append(editBtn);
}

async function handleDeleteBtn(id, li) {
  try {
    axios.delete(`http://localhost:3000/users/${id}`);
    alert("data deleted successfully");

    li.remove();
  } catch (error) {
    alert(error);
  }
}
