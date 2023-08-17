{
  /* <div class="note">
        <div class="tool">
          <i class="fa-solid fa-floppy-disk fa-2x save"></i>
          <i class="fa-solid fa-trash fa-2x"></i>
        </div>
        <textarea></textarea>
      </div> */
}

const btn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const addNotes = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="tool">
          <i class="save fa-solid fa-floppy-disk fa-2x __save"></i>
          <i class="trash fa-solid fa-trash fa-2x"></i>
        </div>
        <textarea></textarea>`;
  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
  });
  main.appendChild(note);
};

btn.addEventListener("click", () => {
  addNotes();
});
