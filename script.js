const studente1 = {

    nome: 'Polina',
    cognome: 'Boretc',
    genere: 'Femmina',
    eta: 27,
    citta: 'Chelyabinsk',
    sposato: false,
}

const studente2 = { 
    nome: 'Christopher', 
    cognome: 'Limone', 
    genere: 'Maschio', 
    eta: 27, 
    citta: 'Genova', 
    sposato: false, 
   
} 

const studente3 = { 
    nome: 'Cinzia', 
    cognome: 'Ariotti', 
    genere: 'Femmina', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
   
} 


const studente4 = { 
    nome: 'Giovanni', 
    cognome: 'Cambiaso', 
    genere: 'Maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
  
} 


const studente5 = { 
    nome: 'Mattia', 
    cognome: 'Dalla Mutta', 
    genere: 'Maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    
} 


const studente6 = { 
    nome: 'Mirco', 
    cognome: 'Faro', 
    genere: 'Maschio', 
    eta: 29, 
    citta: 'Genova', 
    sposato: false, 
   
} 

const studente7 = { 
    nome: 'Paolo', 
    cognome: 'Foppiano', 
    genere: 'Maschio', 
    eta: 25, 
    citta: 'Genova', 
    sposato: false, 
   
} 


const studente8 = { 
    nome: 'Leslie', 
    cognome: 'Fritas', 
    genere: 'Femmina', 
    eta: 27, 
    citta: 'Lima', 
    sposato: true, 
   
}


const studente9 = { 
    nome: 'Artem', 
    cognome: 'San Giorgio', 
    genere: 'Maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
   
} 

const studente10 = { 
    nome: 'Jessica', 
    cognome: 'Vitanza', 
    genere: 'Femmina', 
    eta: 26, 
    citta:'Genova',
    sposato: false, 
   
} 

const studenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10]


function writeListToDocument(listaArray) {
    
    const container = document.getElementById('lista-container');

    for (let i = 0; i < listaArray.length; i++) {
        
        const lista = listaArray[i];
        
        const li = document.createElement('div');

        li.classList.add('list-element');

        const icon = lista.genere === 'femmina' ? './icons8-cerchiato-utente-donna-tipo-di-pelle-4-40.png' : './icons8-cerchiato-utente-maschio-tipo-di-pelle-4-40.png'

       /*   li.innerHTML = `
        <img class="list-element-img" width="30" src="${icon}"> 
        ${lista.nome} ${lista.cognome} ${lista.eta}
        `*/
        const img = document.createElement('img')
        img.src = icon
        img.width = 30
        img.classList.add('list-element-img');

        const text  = document.createTextNode(lista.nome + ' ' + lista.cognome + ': '  + lista.eta + 'anni' + ' - ' + lista.genere + ', ' + lista.citta + '.');

        const br = document.createElement('br')

        li.appendChild(img);
        li.appendChild(text);
        li.appendChild(br);

        container.appendChild(li);

    }
}

writeListToDocument(studenti);


