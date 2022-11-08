// import checkNumInputs from './checkNumInputs';
    import { postData } from "../services/requests";

const forms = () => {
    const form  = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');


    // checkNumInputs('input[name="user_phone"]');

    const messege = {
        loading: 'loading...',
        success: 'Success!',
        failure: 'Fail!',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }


    const clearInputs = () => { 
        inputs.forEach(item => {
            item.vaue = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };
    

    upload.forEach(item => {
        item.addEventListener('input', () =>{
            console.log(item.files[0]);
            const arr = item.files[0].name.split('.');
            let dots = arr[0].length > 6 ? '...' : '.'; 
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });


    form.forEach(item => {
        item.addEventListener('submit', (e) =>{
            e.preventDefault();

            let statusMessege = document.createElement('div');
            statusMessege.classList.add('status');
            item.parentNode.appendChild(statusMessege);

            item.classList.add('animated', 'fadeOutUp');
                setTimeout(() =>{
                    item.style.display = 'none';
                }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', messege.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessege.appendChild(statusImg);

            let textMessege = document.createElement('div');
            textMessege.textContent = messege.loading;
            statusMessege.appendChild(textMessege);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            // if(item.getAttribute('data-calc' === "end")){
            //     for (let key in state){
            //         formData.append(key, state[key])
            //     }
            // }

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', messege.ok);
                    textMessege.textContent = messege.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', messege.fail);
                    textMessege.textContent = messege.failure;
                })
                .finally(() =>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessege.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });

};

export default forms;