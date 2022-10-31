
import modals from './modules/modal';
import sliders from './modules/sliders';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    forms();
    
});