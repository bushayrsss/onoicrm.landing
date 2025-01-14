document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 700) {
                menuToggle.checked = false; // Закрываем меню
            }
        });
    });
});


<script>
    const persons = document.querySelectorAll('.person');

    persons.forEach(person => {
    person.addEventListener('click', () => {
        person.classList.toggle('active'); // Переключаем класс active
    });
});
</script>