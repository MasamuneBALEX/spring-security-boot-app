document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('#editModal, #deleteModal');
    modals.forEach(modal => {
        const idField = modal.querySelector('input[name="id"]');
        const firstNameField = modal.querySelector('input[name="firstName"]');
        const surnameField = modal.querySelector('input[name="surname"]');
        const ageField = modal.querySelector('input[name="age"]');
        const emailField = modal.querySelector('input[name="email"]');
        const passwordField = modal.querySelector('input[name="password"]');

        modal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;

            const id = button.getAttribute('data-id');
            const firstName = button.getAttribute('data-firstname');
            const surname = button.getAttribute('data-surname');
            const age = button.getAttribute('data-age');
            const email = button.getAttribute('data-email');

            if (idField) idField.value = id;
            if (firstNameField) firstNameField.value = firstName;
            if (surnameField) surnameField.value = surname;
            if (ageField) ageField.value = age;
            if (emailField) emailField.value = email;

            if (passwordField) passwordField.value = '';
        });
    })
});