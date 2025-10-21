> Абылайхан:
# JSON Деректерін Түрлендіріп Көрсету Мысалы

Бұл жоба JavaScript-тегі fetch API арқылы интернеттен JSON деректерін қалай алуға болатынын және оны пайдаланушы таңдауы бойынша әртүрлі HTML пішімінде (форматында) қалай көрсетуге болатынын көрсетеді.

## Жобаның мақсаты

* Деректерді алу: https://jsonplaceholder.typicode.com/users API-нен пайдаланушылар тізімін JSON форматында алу.
* Деректерді түрлендіру: Алынған толық JSON-ды пайдаланушыға ыңғайлы түрге келтіру (мысалы, тек аттарын немесе кестеге қажетті бағандарды ғана көрсету).
* Көрсетуді таңдау: Пайдаланушыға деректерді "Кесте", "Тізім" немесе "Шикі JSON" түрінде көруге мүмкіндік беретін түймелерді ұсыну.

## Файлдар құрылымы

* index.html: Негізгі веб-парақшаның құрылымы. Басқару түймелері мен деректер шығарылатын контейнер осында орналасқан.
* style.css: Парақшаға визуалды стиль беру үшін (түймелер, кесте, т.б.).
* script.js: Барлық логика: API-ге сұрау жіберу, деректерді сақтау және оларды HTML-ге түрлендіріп шығару.

## Қалай іске қосу керек

1.  Осы репозиторийдегі барлық 3 файлды (index.html, style.css, script.js) бір қалтаға жүктеп алыңыз.
2.  index.html файлын кез келген веб-браузерде (Chrome, Firefox, Safari, т.б.) ашыңыз.
3.  "Деректерді жүктеу" түймесін басыңыз.

> Абылайхан:
<!DOCTYPE html>
<html lang="kk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Деректер Мысалы</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>JSON API Деректерін Көрсету</h1>
    <p>API арқылы деректерді жүктеп, оны өзіңіз қалаған түрде көрсетіңіз.</p>

    <div class="controls">
        <button id="fetchButton">Деректерді жүктеу</button>
    </div>

    <div class="view-options" style="display: none;">
        <button id="showTableButton">Кесте түрінде</button>
        <button id="showListButton">Тізім түрінде</button>
        <button id="showRawButton">Шикі JSON түрінде</button>
    </div>

    <div id="output" class="output-container">
        Деректерді жүктеу үшін түймені басыңыз...
    </div>

    <script src="script.js"></script>
</body>
</html>
