const addbtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  //   console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
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

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <div class="tool">
          <i class="save fa-solid fa-floppy-disk fa-2x __save"></i>
          <i class="trash fa-solid  fa-trash fa-2x"></i>
        </div>
        <textarea>${text}</textarea>
      `;

  note.querySelector(".save").addEventListener("click", () => {
    saveNotes();
  });
  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });
  note.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });
  main.appendChild(note);
  saveNotes();
};
(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes === null) {
    addNote();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();
