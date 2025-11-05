document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await axios.get("http://localhost:3000/expense");
    const expenses = res.data;
    expenses.forEach((expense) => display(expense));
    localStorage.removeItem("editId");
  } catch (error) {
    alert(error.message);
  }
});

async function handleFormSubmit(e) {
  try {
    e.preventDefault();
    const obj = {
      amount: e.target.amount.value,
      description: e.target.description.value,
      category: e.target.category.value,
    };

    const editId = JSON.parse(localStorage.getItem("editId"));
    if (editId) {
      updateEditEntry(editId, obj);
    } else {
      const res = await axios.post("http://localhost:3000/expense", obj);
      display(res.data);
    }
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}

function display(data) {
  let li = document.createElement("li");
  let ul = document.querySelector("ul");

  li.id = data.id;

  li.textContent =
    data.id +
    " - " +
    data.amount +
    " - " +
    data.description +
    " - " +
    data.category +
    " ";

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
    const res = await axios.delete(`http://localhost:3000/expense/${id}`);
    alert(res.data);
    li.remove();
  } catch (error) {
    alert(error.message);
  }
}

function handleEditBtn(data) {
  document.getElementById("amount").value = data.amount;
  document.getElementById("description").value = data.description;
  document.getElementById("category").value = data.category;
  console.log(data);
  
  localStorage.setItem("editId", data.id);
}

async function updateEditEntry(id, data) {
  try {
    const res = await axios.put(`http://localhost:3000/expense/${id}`, data);
    alert(res.data);

    const li = document.getElementById(id);
    li.firstChild.textContent =
      id +
      " - " +
      data.amount +
      " - " +
      data.description +
      " - " +
      data.category +
      " ";

    localStorage.removeItem(id);
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}
