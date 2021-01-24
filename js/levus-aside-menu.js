// 10-08-2020
{
    const menu = document.querySelector('.levus-aside-menu');
    // li's
    const lis = menu.querySelectorAll('li');
    // add '.parent'
    lis.forEach(li => {
        if (li.children.length > 1) {
            li.className = 'parent';
        }
    });

    // add 'span'
    document.querySelectorAll('.parent > a').forEach(parent => {
        parent.insertAdjacentHTML('afterEnd', '<span></span>');
    });

    const spans = document.querySelectorAll('.parent span');

    spans.forEach(span => {
        span.addEventListener('click', function() {
            // check
            const is_open = this.classList.contains('open');
            // toggle other 
            spans.forEach(span => span.classList.remove('open'));
            // change class
            if (is_open) {
                this.classList.remove('open');
            } else {
                this.classList.add('open');
            }
        });
    })

}