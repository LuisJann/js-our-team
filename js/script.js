/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, 
potete prendere uno spunto dallo screenshot allegato.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico! */

const infoArray = [
    {
        name:"Wayne Barnett",
        jobRole:"Founder & CEO",
        img:"img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name:"Angela Caroll",
        jobRole:"Chief Editor",
        img:"img/angela-caroll-chief-editor.jpg"
    },

    {
        name:"Walter Gordon",
        jobRole:"img/Office Manager	",
        img:"img/walter-gordon-office-manager.jpg"
    },

    {
        name:"Angela Lopez",
        jobRole:"Social Media Manager",
        img:"img/angela-lopez-social-media-manager.jpg"
    },

    {
        name:"Scott Estrada",
        jobRole:"Developer",
        img:"img/scott-estrada-developer.jpg"
    },  
    
    {
        name:"Barbara Ramos",
        jobRole:"Graphic Designerr",
        img:"img/barbara-ramos-graphic-designer.jpg"
    },  
];

console.log(infoArray);

const wrapper = document.getElementById("wrapper");
console.log(wrapper);

for (let i = 0; i < infoArray.length; i++){
    const thisObject = infoArray[i];
    console.log(thisObject, "thisObject");
    console.log(thisObject.name, thisObject.jobRole, thisObject.img, "dettagli object");
    wrapper.innerHTML += `
                <div class="card">
                    <img src="${thisObject.img}" alt="">
                    <h2>${thisObject.name}</h2>
                    <span>${thisObject.jobRole}</span>
                </div> `
}



