function saveNote() {
  let noteText = document.getElementById("noteInput").value;
  if (noteText === "") return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  document.getElementById("noteInput").value = "";
  showNotes();
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function showNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    container.innerHTML += `
      <div class="note">
        ${note}
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

showNotes(); // page load pe bhi dikhao
function saveNote() {
  let noteText = document.getElementById("noteInput").value;
  if (noteText === "") return;

  let date = new Date();
  let formattedDate = date.toLocaleString();

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push({ text: noteText, time: formattedDate });
  localStorage.setItem("notes", JSON.stringify(notes));
  document.getElementById("noteInput").value = "";
  showNotes();
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function showNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";

  if (notes.length === 0) {
    container.innerHTML = `<p style="color: gray;">🗒 No notes yet. Start writing one!</p>`;
    return;
  }

  notes.forEach((note, index) => {
    container.innerHTML += `
      <div class="note">
        <p>${note.text}</p>
        <small>🕒 ${note.time}</small>
        <button onclick="deleteNote(${index})">❌</button>
      </div>
    `;
  });
}

showNotes();

