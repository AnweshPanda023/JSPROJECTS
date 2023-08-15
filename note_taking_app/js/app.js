const addbtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  //   console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(data));
  //   console.log(data);
};
{
  /* <div class="note">
        <div class="tool">
          <i class="fa-solid fa-floppy-disk fa-2x save"></i>
          <i class="fa-solid fa-trash fa-2x"></i>
        </div>
        <textarea></textarea>
      </div> */
}

addbtn.addEventListener("click", () => {
  addNote();
});
const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <div class="tool">
          <i class="save fa-solid fa-floppy-disk fa-2x __save"></i>
          <i class="trash fa-solid  fa-trash fa-2x"></i>
        </div>
        <textarea></textarea>
      `;
  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
  });

  note.querySelector(".save").addEventListener("click", () => {
    saveNotes();
  });
  main.appendChild(note);
};
