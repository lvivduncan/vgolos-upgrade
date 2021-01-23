// 2-12-2020
function levusHorizontalScroll(selector){

    const scroll = document.querySelectorAll(selector);

    scroll.forEach(item => {
        const ul = item.querySelector('ul');
        // elements
        let li = ul.querySelectorAll('li');

        // if less than 4, cloned 
        if (li.length <= 4) {
            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));
            // new nodelist
            li = item.querySelectorAll('li');
        }

        item.innerHTML += '<span class="left"></span><span class="right"></span>';

        item.addEventListener('click', e => {
            const ul = item.querySelector('ul');
            if (e.target.className == 'left') {
                // move last element
                const last = ul.lastElementChild;
                ul.prepend(last);
                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-right');
                setTimeout(() => {
                    ul.classList.remove('to-right');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });

        item.addEventListener('click', e => {
            const ul = item.querySelector('ul');
            if (e.target.className == 'right') {
                // move first element
                const first = ul.firstElementChild;
                ul.append(first);
                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-left');
                setTimeout(() => {
                    ul.classList.remove('to-left');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });
    });
}

levusHorizontalScroll('.levus-horizontal-scroll');