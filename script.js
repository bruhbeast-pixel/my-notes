document.addEventListener('DOMContentLoaded', function() {
    const noteInput = document.getElementById('note-input');
    const addNoteButton = document.getElementById('add-note-button');
    const noteBox = document.getElementById('note-box');

    addNoteButton.addEventListener('click', addNote);
    noteInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent new line on Enter press
            addNote();
        }
    });

    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText === '') return;

        const noteElement = document.createElement('div');
        noteElement.classList.add('note');

        const noteContent = document.createElement('p');
        noteContent.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '&times;';
        deleteButton.addEventListener('click', function() {
            noteElement.remove();
        });

        noteElement.appendChild(noteContent);
        noteElement.appendChild(deleteButton);
        noteBox.appendChild(noteElement);

        // Clear input
        noteInput.value = '';

        // Scroll to bottom
        noteBox.scrollTop = noteBox.scrollHeight;
    }
});