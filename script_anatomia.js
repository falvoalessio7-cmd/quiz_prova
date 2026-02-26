// ===============================
// QUIZ DI ANATOMIA
// ===============================

const quiz = [

    // 🔹 ESEMPIO DOMANDA MULTIPLE CHOICE
    {
        type: "multiple",
        question: "Il muscolo diaframma",
        options: ["Non possiede inserzioni sulle coste", "Possiede inserzioni sulla colonna vertebrale", "Abbassa le coste ", "È un muscolo del collo", "Forma il pavimento della cavità pelvica"],
        correct: "Possiede inserzioni sulla colonna vertebrale"
    },

    {
        type: "multiple",
        question: "Il muscolo Medio Gluteo agisce:",
        options: ["Come muscolo adduttore", "Definisce la circonvoluzione dell’arto inferiore", "Come muscolo estensore della coscia", "Come muscolo abduttore ed extrarotatore", "Come muscolo abduttore ed intrarotatore"],
        correct: "Come muscolo abduttore ed extrarotatore"
    },

    {
        type: "multiple",
        question: "I menischi articolari:",
        options: ["Sono una struttura tipica delle articolazioni per sinartrosi", "Danno congruità alle superfici in rapporto nell’articolazione del ginocchio", "Si trovano tipicamente a livello del gomito", "Aumentano la mobilità dell’articolazione del ginocchio", "Corrispondono ai legamenti collaterali esterni del ginocchio"],
        correct: "Danno congruità alle superfici in rapporto nell’articolazione del ginocchio"
    },

     {
        type: "multiple",
        question: "La scapola si articola:",
        options: ["Con le coste della gabbia", "Con il solo omero", "Con omero e clavicola", "Con la sola clavicola", "Con la clavicola e la 7° vertebra cervicale"],
        correct: "Con omero e clavicola"
    },

     {
        type: "multiple",
        question: "La clavicola ha rapporti articolari:",
        options: ["Con Scapola e 1° costa", "Con Scapola e Omero", "Con Omero e Sterno", "Con Scapola e Manubrio dello Sterno", "Con Scapola ed il Corpo dello Sterno"],
        correct: "Con Scapola e Manubrio dello Sterno"
    },

     {
        type: "multiple",
        question: "Il muscolo Tricipite",
        options: ["È un muscolo anteriore del braccio", "I suoi ventri laterali hanno inserzione scapolo-omerale", "Coadiuva i movimenti della mano", "È attivo nella flessione (avvicinamento) dell’avambraccio sul braccio", "Uno dei suoi ventri ha inserzione scapolo-ulnare"],
        correct: "Uno dei suoi ventri ha inserzione scapolo-ulnare"
    },

     {
        type: "multiple",
        question: "Le vene Epatiche:",
        options: ["Portano sangue venoso al fegato", "Drenano sangue venoso dalla massa intestinale", "Confluiscono nella vena Cava Inferiore", "Originano dalla vena Cava Superiore", "Confluiscono nella vena Cava Superiore"],
        correct: "Confluiscono nella vena Cava Inferiore"
    },

     {
        type: "multiple",
        question: "L’arteria mesenterica inferiore:",
        options: ["È una diramazione dell’arteria iliaca comune", "È un ramo del tripode (tronco) celiaco", "Trasporta sangue arterioso al fegato", "Vascolarizza stomaco, pancreas e milza", "È un ramo dell’aorta addominale"],
        correct: "È un ramo dell’aorta addominale"
    },

     {
        type: "multiple",
        question: "Il nodo seno-atriale del sistema di conduzione del cuore:",
        options: ["Trasmette l’impulso contrattile indirizzato ai soli ventricoli", "Decorre nel setto Inter-Atriale", "È una struttura vascolare del cuore", "Dà origine all’impulso contrattile per tutto il cuore", "Decorre nel piano tra Atri e Ventricoli"],
        correct: "Dà origine all’impulso contrattile per tutto il cuore"
    },

     {
        type: "multiple",
        question: "Il poligono di Willis prende origine:",
        options: ["Dalle arterie Succlavie e dalle arterie vertebrali", "Dalle sole arterie Carotidi Interne", "Dalle arterie Carotidi Interne e dalle arterie vertebrali", "Dalle arterie Carotidi Esterne e dall’arteria basilare", "Dalle arterie Carotidi Interne e dalle arterie Carotidi Esterne"],
        correct: "Dalle arterie Carotidi Interne e dalle arterie vertebrali"
    },

     {
        type: "multiple",
        question: "Nel ventricolo sinistro:",
        options: ["Vi origina la vena polmonare", "Vi circola unicamente sangue ossigenato", "Vi confluisce la vena cava superiore, inferiore ed il seno coronarico", "Vi origina l’arteria polmonare", "Vi circola alternativamente sangue ossigenato e deossigenato"],
        correct: "Vi circola unicamente sangue ossigenato"
    },

     {
        type: "multiple",
        question: "L’arteria lienale (Splenica):",
        options: ["È un ramo dell’arteria mesenterica inferiore", "È un ramo dell’arteria gastrica destra", "È un ramo dell’arteria mesenterica superiore", "È una diramazione dell’Aorta discendente", "È un ramo del tripode celiaco"],
        correct: "È un ramo del tripode celiaco"
    },

     {
        type: "multiple",
        question: "I muscoli papillari:",
        options: ["Definiscono il meccanismo di tenuta delle valvole semilunari", "Contribuiscono alla forza contrattile del cuore", "Si continuano con le corde tendinee", "Sono presenti negli atri", "Servono a ridurre la forza contrattile del cuore"],
        correct: "Si continuano con le corde tendinee"
    },

     {
        type: "multiple",
        question: "La Vena Cava Superiore:",
        options: ["Si forma dalla confluenza delle vene Succlavie", "Confluisce nell’atrio sinistro", "Si forma dalla confluenza delle Giugulari interne", "Confluisce nel ventricolo destro", "Si forma dalla confluenza delle vene Brachiocefaliche"],
        correct: "Si forma dalla confluenza delle vene Brachiocefaliche"
    },

     {
        type: "multiple",
        question: "I vasi linfatici con parete muscolare:",
        options: ["Si contraggono autonomamente e ritmicamente", "Si contraggono unicamente per regolare il loro calibro", "La muscolatura rinforza la parete del vaso, ma non si contrae", "Sono privi di fibre nervose", "I vasi linfatici sono privi di parete muscolare"],
        correct: "Si contraggono autonomamente e ritmicamente"
    },

     {
        type: "multiple",
        question: "Quale definizione non si applica all’intestino tenue:",
        options: ["È in continuità con lo stomaco", "È in continuità con il colon", "È avvolto dal peritoneo", "È alloggiato nella cavità addominale", "Si estende fino alla milza"],
        correct: "Si estende fino alla milza"
    },

     {
        type: "multiple",
        question: "La papilla di Vater è:",
        options: ["Corrisponde al lato duodenale dello sfintere pilorico", "Un rilievo del colon, punto di sbocco del Coledoco e del dotto pancreatico maggior", "Un rilievo duodenale, punto di sbocco delle sole vie biliari", "Un rilievo duodenale, punto di sbocco del dotto pancreatico maggiore e minore", "Un rilievo duodenale, punto di sbocco del Coledoco e del dotto pancreatico maggiore"],
        correct: "Un rilievo duodenale, punto di sbocco del Coledoco e del dotto pancreatico maggiore"
    },

     {
        type: "multiple",
        question: "L’alveolo polmonare:",
        options: ["È posto a stretto contatto con la rete capillare", "Si trova anche sulla parete dei bronchi principali", "Contiene muco di protezione", "È composto da un epitelio a due strati di cellule sovrapposte", "Fa seguito immediatamente alla trachea"],
        correct: "È posto a stretto contatto con la rete capillare"
    },

     {
        type: "multiple",
        question: "La Prostata:",
        options: ["Si pone intorno alla parte iniziale dell’uretra", "È un organo dell’apparato urinario", "Si pone intorno alla porzione vescicale dell’uretere", "È una struttura ghiandolare endocrina", "Ha rapporti con il colon discendente"],
        correct: "Si pone intorno alla parte iniziale dell’uretra"
    },

     {
        type: "multiple",
        question: "Il duodeno:",
        options: ["Rappresenta l’ultima porzione dell’intestino tenue", "Ha rapporti anatomici con la milza", "Riceve lo sbocco dei dotti pancreatici", "Ha rapporti anatomici con il colon ascendente", "È posto nella cavità pelvica"],
        correct: "Riceve lo sbocco dei dotti pancreatici"
    },

     {
        type: "multiple",
        question: "La Pleura:",
        options: ["Forma il pericardio sieroso", "Interviene funzionalmente nella respirazione", "Avvolge i polmoni ed i bronchi", "Avvolge esternamente la gabbia toracica", "È composta da due foglietti che racchiudono aria"],
        correct: "Interviene funzionalmente nella respirazione"
    },

     {
        type: "multiple",
        question: "Il tratto addominale dell’esofago:",
        options: ["Presenta rilievi detti valvole esofagee", "Non esiste un tratto addominale", "Presenta una mucosa di tipo gastrico", "Corrisponde alla zona denominata “cardiaca”", "Presenta una mucosa particolarmente ispessita per protezione"],
        correct: "Presenta una mucosa di tipo gastrico"
    },

     {
        type: "multiple",
        question: "La flessura colica sinistra è posta:",
        options: ["In prossimità della milza", "Dietro l’utero", "Al di sotto dello stomaco", "Inferiormente al fegato", "Nella regione pelvica"],
        correct: "In prossimità della milza"
    },

     {
        type: "multiple",
        question: "I villi intestinali:",
        options: ["Costituiscono la parete muscolare dell’intestino tenue", "Sono strutture che aumentano la superficie di assorbimento", "Presentano un grosso vaso arterioso", "Sono strutture di secrezione enzimatica", "Sono presenti unicamente nel Colon"],
        correct: "Sono strutture che aumentano la superficie di assorbimento"
    },

     {
        type: "multiple",
        question: "Il parenchima renale:",
        options: ["È in diretta continuazione con la prostata", "È in diretta continuazione con la vescica", "È in diretta continuazione con la pelvi renale", "È in diretta continuazione con l’uretra", "È in diretta continuazione con l’uretere"],
        correct: "È in diretta continuazione con la pelvi renale"
    },

     {
        type: "multiple",
        question: "L’istmo delle fauci:",
        options: ["Separa la cavità nasale", "Separa la cavità buccale dalla cavità faringea", "Attiva la funzione gustativa nei confronti del bolo alimentare in progressione", "Corrisponde all’apertura superiore dell’esofago", "Si apre durante l’atto deglutitorio"],
        correct: "Separa la cavità buccale dalla cavità faringea"
    },

     {
        type: "multiple",
        question: "La grande curvatura dello stomaco:",
        options: ["È in rapporto con il rene sinistro", "È in rapporto con il colon ascendente", "È in rapporto con la testa del pancreas", "È in rapporto con il colon discendente", "È in rapporto con il rene destro"],
        correct: "È in rapporto con il rene sinistro"
    },

     {
        type: "multiple",
        question: "La pelvi renale:",
        options: ["Si continua con l’uretere", "È una struttura cava di forma sferica", "Si continua direttamente con la vescica urinaria", "Riassorbe l’acqua in eccesso nell’urina", "Si continua con l’uretra"],
        correct: "Si continua con l’uretere"
    },

     {
        type: "multiple",
        question: "Il Talamo:",
        options: ["È il centro dove la sensibilità olfattiva diviene cosciente", "È un centro nucleare del Telencefalo", "È un centro nucleare del Diencefalo", "È un centro nucleare del Mesencefalo", "Possiede funzioni esclusivamente motorie"],
        correct: "È un centro nucleare del Diencefalo"
    },

     {
        type: "multiple",
        question: "Il raggruppamento dei nuclei della base:",
        options: ["È una formazione grigia Diencefalica", "Partecipa a funzioni sia motorie sia emozionali", "È un importante centro della motricità riflessa", "È un importante gruppo nucleare per le funzioni viscerali", "Dirige gli istinti di base quale fame, sete e desiderio sessuale"],
        correct: "Partecipa a funzioni sia motorie sia emozionali"
    },

    // 🔹 ESEMPIO DOMANDE CON IMMAGINE (puoi sostituire le immagini): { type: "image", img: "https://i.imgur.com/7c2Ae4R.jpeg", word: "costole" },
    
];

// ===============================
// PARAMETRI E VARIABILI
// ===============================

const params = new URLSearchParams(window.location.search);
let numDomande = parseInt(params.get("num")) || 10;
const MAX_DOMANDE = quiz.length;
if (numDomande > MAX_DOMANDE) numDomande = MAX_DOMANDE;

shuffle(quiz);

let current = 0;
let score = 0;
let results = [];

// ===============================
// FUNZIONI
// ===============================

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuiz() {
    const q = quiz[current];

    document.getElementById("feedback").textContent = "";
    updateProgress();

    document.getElementById("quiz-image").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("options").innerHTML = "";
    document.getElementById("options").style.display = "none";
    document.getElementById("question-text").style.display = "none";

    if (q.type === "image") {
        document.getElementById("quiz-image").src = q.img;
        document.getElementById("quiz-image").style.display = "block";

        document.getElementById("answer").value = "";
        document.getElementById("answer").disabled = false;
        document.getElementById("answer").style.display = "block";

        document.getElementById("btn").style.display = "inline-block";
        document.getElementById("next-btn").style.display = "none";
    }

    if (q.type === "multiple") {
        document.getElementById("question-text").textContent = q.question;
        document.getElementById("question-text").style.display = "block";

        document.getElementById("options").style.display = "block";

        // 🔥 Mescola le opzioni ogni volta che carichi una domanda
        shuffle(q.options);

        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(opt);
            document.getElementById("options").appendChild(btn);
        });

        document.getElementById("btn").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
    }
}

function updateProgress() {
    const percent = (current / numDomande) * 100;
    document.getElementById("progress").style.width = percent + "%";
}

function updateScore() {
    document.getElementById("score").textContent = `Punteggio: ${score}`;
}


function checkAnswer(userInput = null) {
    const q = quiz[current];
    const feedback = document.getElementById("feedback");

    let isCorrect = false;

    if (q.type === "image") {
        const user = document.getElementById("answer").value.trim().toLowerCase();
        isCorrect = user === q.word.toLowerCase();
    }

    if (q.type === "multiple") {
        isCorrect = userInput === q.correct;
    }

    if (isCorrect) {
        score++;
        updateScore();
        results[current] = true;
        feedback.textContent = "Corretto!";
        feedback.className = "correct";

        setTimeout(() => {
            current++;
            current < numDomande ? loadQuiz() : endGame();
        }, 700);

    } else {
        results[current] = false;

        const correctText = q.type === "image" ? q.word : q.correct;
        feedback.textContent = "Sbagliato! Risposta corretta: " + correctText;
        feedback.className = "wrong";

        feedback.style.display = "none";

        if (q.type === "image") {
            document.getElementById("answer").disabled = true;
            document.getElementById("btn").style.display = "none";

            const nextBtn = document.getElementById("next-btn");
            nextBtn.style.display = "inline-block";

            nextBtn.insertAdjacentElement("afterend", feedback);
            feedback.style.display = "block";

        } else {
    const optionsBox = document.getElementById("options");
    optionsBox.insertAdjacentElement("afterend", feedback);
    feedback.style.display = "block";

    // Disabilita i pulsanti delle opzioni
    document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);

    // Mostra il pulsante "Prossima"
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "inline-block";
}

    }
}

function nextQuestion() {
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("feedback").textContent = "";

    current++;
    current < numDomande ? loadQuiz() : endGame();
}


function endGame() {
    let recapHTML = "<h3>Recap delle domande:</h3><ul>";

    quiz.slice(0, numDomande).forEach((q, index) => {
        const icon = results[index] ? "✔️" : "❌";

        // Testo della domanda
        const domanda = q.type === "image"
            ? `Individua: ${q.word}`
            : q.question;

        recapHTML += `
            <li>
                ${icon} <strong>${domanda}</strong>
            </li>
        `;
    });

    recapHTML += "</ul>";

    document.getElementById("game").innerHTML = `
        <h2>Quiz completato!</h2>
        <p>Punteggio finale: <strong>${score}/${numDomande}</strong></p>
        ${recapHTML}
        <button onclick="location.reload()">Rigioca</button>
        <button onclick="window.location.href='index.html'" style="margin-top: 10px;">Torna alla Home</button>
    `;
}

updateScore();
loadQuiz();
