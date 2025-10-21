// DOM элементтеріне (HTML тэгтеріне) сілтемелер алу
const fetchButton = document.getElementById('fetchButton');
const showTableButton = document.getElementById('showTableButton');
const showListButton = document.getElementById('showListButton');
const showRawButton = document.getElementById('showRawButton');
const outputDiv = document.getElementById('output');
const viewOptionsDiv = document.querySelector('.view-options');

// API адресі (біз тегін JSONPlaceholder сервисін қолданамыз)
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Жүктелген деректерді сақтау үшін бос массив (кэш)
let cachedData = [];

// Оқиға тыңдаушыларды (Event Listeners) орнату
fetchButton.addEventListener('click', fetchData);
showTableButton.addEventListener('click', renderTable);
showListButton.addEventListener('click', renderList);
showRawButton.addEventListener('click', renderRawJSON);

/**
 * API-ден деректерді асинхронды түрде жүктейтін негізгі функция
 */
async function fetchData() {
    outputDiv.innerHTML = 'Деректер жүктелуде...';
    
    try {
        const response = await fetch(API_URL);
        
        // Егер сұраныс сәтсіз болса (мысалы, 404, 500 қате)
        if (!response.ok) {
            throw new Error(HTTP қатесі! Статус: ${response.status});
        }
        
        cachedData = await response.json(); // JSON деректерді оқып, кэшке сақтаймыз
        
        // Деректер жүктелген соң, көрсету нұсқаларын көрсетеміз
        viewOptionsDiv.style.display = 'block';
        
        // Әдепкі бойынша кесте түрінде көрсетеміз
        renderTable();
        
    } catch (error) {
        // Қате болған жағдайда хабарлама шығару
        outputDiv.innerHTML = Қате пайда болды: ${error.message};
        viewOptionsDiv.style.display = 'none'; // Қате болса, таңдау түймелерін жасыру
    }
}

/**
 * Функция: Деректерді КЕСТЕ түрінде көрсету (ТҮРЛЕНДІРУ)
 * Біз барлық деректі емес, тек id, name, username және email ғана көрсетеміз.
 */
function renderTable() {
    if (cachedData.length === 0) {
        outputDiv.innerHTML = 'Көрсетуге деректер жоқ.';
        return;
    }

    // Кестенің басын (headers) жасаймыз
    let tableHTML = 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Аты-жөні (Name)</th>
                    <th>Пайдаланушы аты (Username)</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
    ;

    // Деректер массивін аралап, әрбір элемент үшін кесте қатарын (row) жасаймыз
    cachedData.forEach(user => {
        tableHTML += 
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
            </tr>
        ;
    });

    tableHTML += </tbody></table>;
    outputDiv.innerHTML = tableHTML;
}

/**
 * Функция: Деректерді ТІЗІМ түрінде көрсету (ТҮРЛЕНДІРУ)
 * Бұл жерде біз тек аты мен телефон нөмірін ғана көрсетеміз.
 */
function renderList() {
    if (cachedData.length === 0) {
        outputDiv.innerHTML = 'Көрсетуге деректер жоқ.';
        return;
    }

    let listHTML = '<ul>';

    cachedData.forEach(user => {
        listHTML += <li><strong>${user.name}</strong> (Телефон: ${user.phone})</li>;
    });

    listHTML += '</ul>';
    outputDiv.innerHTML = listHTML;
}

/**
 * Функция: Деректерді "ШИКІ" (RAW) JSON түрінде көрсету
 * Бұл жерде түрлендіру жоқ, тек әдемі форматталған JSON шығарамыз.
 */
function renderRawJSON() {
    if (cachedData.length === 0) {
        outputDiv.innerHTML = 'Көрсетуге деректер жоқ.';
        return;
    }

    // JSON.stringify(data, null, 2) - JSON-ды оқуға ыңғайлы, 
    // 2 бос орынмен шегініс жасап, әдемі форматтайды.
    const jsonString = JSON.stringify(cachedData, null, 2);
    
    // <pre> және <code> тэгтері кодты немесе текстті форматтауды сақтап көрсету үшін қажет
    outputDiv.innerHTML = <pre><code>${jsonString}</code></pre>;
}