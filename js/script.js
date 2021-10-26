const btnGenera = document.getElementById('btn-genera');

btnGenera.addEventListener('click',function(){
  
  const mailUser = document.getElementById('mailForm').value;
  const ticket = document.getElementById('ticket-table');
  const errore = document.getElementById('errore');

  const listaMail = ['anthony@gmail.com',
'andreab@gmail.com',
'federico@gmail.com',
'cristia@gmail.com',
'davide@gmail.com',
'alberto@gmail.com',
'mauro@gmail.com',
'matteod@gmail.com',
'michele@gmail.com',
'matteof@gmail.com',
'andreaf@gmail.com',
'simone@gmail.com',
'mattiaG@gmail.com',
'larisa@gmail.com',
'manuel@gmail.com',
'matteol@gmail.com',
'francesco@gmail.com',
'morena@gmail.com',
'mattiam@gmail.com',
'simone@gmail.com',
'mariano@gmail.com',
'vitali@gmail.com',
'gianluca@gmail.com',
'giuseppe@gmail.com',
'salvatore@gmail.com',
'giada@gmail.com',
'giuliasa@gmail.com',
'benjamins@gmail.com',
'davide@gmail.com',
'luigi@gmail.com'];


let mailVerificata = false;
const stampMail = document.getElementById('mailInserita');

if(listaMail.includes(mailUser)){
  mailVerificata = true;
  console.log('Mail verificata. il nostro casinò è lieto di ospitarla. Le auguriamo buona fortuna!');
}else{
  mailVerificata = false;
}
;

if(mailVerificata == true){
  stampMail.innerHTML = `
  La tua mail ${mailUser} è stata verificata dal nostro sistema. <br>
  'Il Casinò di Venezia le dà il benvenuto e Le augura buona fortuna!'
  `;
}else{
  stampMail.innerHTML = `
  La tua mail ${mailUser} non è stata validata dal nostro sistema. <br>
  Non possiamo farti accedere alle nostre sale giochi private. <br>
  Puoi chiamare il numero verde 800 900 700 per ulteriori informazioni. <br>
  Casinò di Venezia
  `;
}


  if(mailVerificata == true){
    ticket.classList.add('show');
    ticket.classList.remove('hide');

    const generaNumero = document.getElementById('btn-primary');

    generaNumero.addEventListener('click', function(){
  
  const numPC = Math.floor(Math.random()*6)+1;
  const numUtente = Math.floor(Math.random()*6)+1;
  let msg = ''
  
  console.log('PC: ' + numPC);
  console.log('Tu: ' + numUtente);
  
  if(numPC < numUtente){
    msg = ('Hai vinto!')
    console.log('Hai vinto!');
  }else if(numPC == numUtente){
    msg = ('Pari! Ritira i dadi.')
    console.log('Pari! Ritira i dadi.');
  }
  else{
    msg = ('Hai perso! Ritenta e sarai più fortunato.')
    console.log('Hai perso! Ritenta e sarai più fortunato.');
  }
}
);



























  }else{
    document.getElementById('error-msg').innerHTML = errorMsg;
    ticket.classList.add('hide');
    ticket.classList.remove('show');
  }
});
