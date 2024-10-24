document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Button clicked: ' + this.textContent);
            window.location.href = this.href;
        });
    });
});




