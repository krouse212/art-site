const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                const active = this.classList.contains('active-style');

                btns.forEach(btn => {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = '0px';
                });

                if (!active) {
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
                    this.classList.add('active-style');
                    this.nextElementSibling.classList.add('active-content');
                }
            });
        });


        // blocks = document.querySelectorAll(itemsSelector);

        // blocks.forEach(block => {
        //     block.classList.add('animated', 'fadeInDown');
        // });

        // btns.forEach(btn => {
        //     btn.addEventListener('click', function() {
        //         if (!this.classList.contains('active')) {
        //             btns.forEach(btn => {
        //                 btn.classList.remove('active', 'active-style');
        //             });
        //             this.classList.add('active', 'active-style');
        //         }
        //     });
        // });
};

export default accordion;