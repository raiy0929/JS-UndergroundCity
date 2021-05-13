// let num = [];
let item = '';
let result = [];


// ----------------------------------------------------------------
// --- Models
function getMultiChart(){
    for (let i = 2; i <10; i++) {
        for (let j = 1; j<10; j++) {
            item = i + '×' + j + '=' + i*j;
            result.push(item);
        } 
        // result.push('') //做分割
    }
    separateData(result);
}
// 分割各區塊數字
function separateData(datas){
    let separa_n = 0;
    for(let j = 2; j < 10; j++) {
        let data_wrap = document.createElement('ul');
        data_wrap.className = 'major'
        data_wrap.id = 'js_'+j;
        data_wrap.innerHTML = '<h2>'+j+'</h2>'
        
        for(let i = separa_n; i < separa_n+9; i++){
            let data = '<li>'+datas[i]+'</li>'
            data_wrap.innerHTML+=data;
        }
        showData(data_wrap);
        separa_n+=9
    }
}

// --- views

function showData(data_wrap){
    let main = document.getElementById('js_main');
    main.appendChild(data_wrap)
}


// --- controllers
getMultiChart();


