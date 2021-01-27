// 2-12-2020
function levusHorizontalScroll(selector){

    const scroll = document.querySelectorAll(selector);

    scroll.forEach(item => {
        const gallery = item.parentNode;

        const ul = item.querySelector('ul');
        // elements
        let li = ul.querySelectorAll('li');
        const cnt = li.length;

        // if less than 4, cloned 
        if (cnt <= 4) {
            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));
            // new nodelist
            li = item.querySelectorAll('li');
        }

        gallery.innerHTML += '<span class="left"></span><span class="right"></span>';

        const left_btn = gallery.querySelector('.left');
        const right_btn = gallery.querySelector('.right');

        const counter = gallery.querySelector('.gallery-counter');

        if (counter)
        {
            let idx = 1;

            counter.querySelector('.gallery-counter-total').innerHTML = cnt.toString();

            const counter_current = counter.querySelector('.gallery-counter-current');
            counter_current.innerHTML = idx.toString();

            function updCounter(plus) {
                if (plus)
                    idx++;
                else idx--;

                if (idx < 1)
                    idx = cnt;
                else if (idx > cnt)
                    idx = idx - cnt;

                counter_current.innerHTML = idx.toString();
            }

            left_btn.addEventListener('click', () => updCounter(false));
            right_btn.addEventListener('click', () => updCounter(true));
        }

        left_btn.addEventListener('click', () => {
            const ul = gallery.querySelector('ul');
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
        });

        right_btn.addEventListener('click', () => {
            const ul = gallery.querySelector('ul');
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
        });
    });
}

levusHorizontalScroll('.levus-horizontal-scroll');