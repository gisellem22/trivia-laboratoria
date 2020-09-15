function CheckValidation(){
    let isValidForm = document.forms['form1'].checkValidity();
    if (isValidForm){
guardar();
    }
    else
    {
        document.getElementById("mensajeerror").innerHTML = 'Completa este campo';
        return false;
    }
}
function guardar() {
  let name = document.getElementsByName('name').value;
  document.getElementById('categorias').innerHTML='<h2> ¡Hola,'+name+'!<br></h2>' ;
  obj1 = document.getElementById('entrada');
  obj1.style.display = (obj1.style.display=='block') ?'none' : 'block';
  obj2 = document.getElementById('categorias');
  obj2.style.display = (obj2.style.display=='none') ?'block' : 'none';
  obj3 = document.getElementById('elegirCategorias');
  obj3.style.display = (obj3.style.display=='none') ?'block' : 'none';
}


function mostrarInter() {
  obj2 = document.getElementById('categorias');
  obj2.style.display = (obj2.style.display=='block') ?'none' : 'block';
  obj3 = document.getElementById('elegirCategorias');
  obj3.style.display = (obj3.style.display=='block') ?'none' : 'block';
  obj4 = document.getElementById('triviaInter1');
  obj4.style.display = (obj4.style.display=='none') ?'block' : 'none';
}
function mostrarNac() {
  obj2 = document.getElementById('categorias');
  obj2.style.display = (obj2.style.display=='block') ?'none' : 'block';
  obj3 = document.getElementById('elegirCategorias');
  obj3.style.display = (obj3.style.display=='block') ?'none' : 'block';
  obj5 = document.getElementById('triviaNac1');
  obj5.style.display = (obj5.style.display=='none') ?'block' : 'none';
}
let counterInt = 0;
function resultIntQ1(){
  console.log('hola');
 //Guarda la respuesta del usuario
let interQ1 = document.triviaInter1.question1.value;
  console.log(interQ1); // muestra respuesta del usuario en la consola
  if(interQ1 === "Sean Connery"){
    alert("Muy Bien, Acertaste!");
    counterInt++;
  }else{
    alert("Mejor Suerte la Próxima!");
  }
  obj4 = document.getElementById('triviaInter1');
  obj4.style.display = (obj4.style.display=='block') ?'none' : 'block';
  obj6 = document.getElementById('triviaInter2');
  obj6.style.display = (obj6.style.display=='none') ?'block' : 'none';
}
function resultIntQ2(){
  console.log('hola');
  //Guarda la respuesta del usuario
let interQ2 = document.triviaInter2.question2.value;
  console.log(interQ2);
  if(interQ2 === "1997"){
    alert("Muy Bien, Acertaste!");
    counterInt++;
  }else{
    alert("Mejor Suerte la Próxima!");
  }
  obj6 = document.getElementById('triviaInter2');
  obj6.style.display = (obj6.style.display=='block') ?'none' : 'block';
  obj7 = document.getElementById('triviaInter3');
  obj7.style.display = (obj7.style.display=='none') ?'block' : 'none';
}
function resultIntQ3(){
  console.log('hola');
//Guarda la respuesta del usuario
let interQ3 = document.triviaInter3.question3.value;
  console.log(interQ3);
  if(interQ3 === "Sylvester Stallone"){
    alert("Muy Bien, Acertaste!");
    counterInt++;
  }else{
    alert("Mejor Suerte la Próxima!");
  }
  obj7 = document.getElementById('triviaInter3');
  obj7.style.display = (obj7.style.display=='block') ?'none' : 'block';
  obj8 = document.getElementById('resultInter');
  obj8.style.display = (obj8.style.display=='none') ?'block' : 'none';
  document.getElementById("counterInt").innerHTML = " <h2> Acertaste " + counterInt +" de 3 </h2>";
}
let counterNac = 0
function resultNacQ1(){
  console.log('hola');
  //Guarda la respuesta del usuario
let nacQ1 = document.triviaNac1.question1.value;
  console.log(nacQ1); // muestra respuesta del usuario en la consola
  if(nacQ1 === "Marina Vidal"){
    alert("Muy Bien, Acertaste!");
    counterNac++;
  }else{
    alert("Mejor Suerte la Próxima!");
  }
  obj5 = document.getElementById('triviaNac1');
  obj5.style.display = (obj5.style.display=='block') ?'none' : 'block';
  obj9 = document.getElementById('triviaNac2');
  obj9.style.display = (obj9.style.display=='none') ?'block' : 'none';
}
function resultNacQ2(){
  console.log('hola');
  //Guarda la respuesta del usuario
  let nacQ2 = document.triviaNac2.question2.value;
  console.log(nacQ2);
  if(nacQ2 === "Andrés Wood"){
    alert("Muy Bien, Acertaste!");
    counterNac++;
  }else{
    alert("Mejor Suerte la Próxima!");
  }
  obj9 = document.getElementById('triviaNac2');
  obj9.style.display = (obj9.style.display=='block') ?'none' : 'block';
  obj10 = document.getElementById('triviaNac3');
  obj10.style.display = (obj10.style.display=='none') ?'block' : 'none';
}
function resultNacQ3(){
  console.log('hola');
//Guarda la respuesta del usuario
let nacQ3 = document.triviaNac3.question3.value;
  console.log(nacQ3);
  if(nacQ3 === "Catalina Saavedra"){
    alert("Muy Bien, Acertaste!");
    counterNac++;
  }else{
    alert("Mejor Suerte la Próxima!");
  }
  obj10 = document.getElementById('triviaNac3');
  obj10.style.display = (obj10.style.display=='block') ?'none' : 'block';
  obj11 = document.getElementById('resultNac');
  obj11.style.display = (obj11.style.display=='none') ?'block' : 'none';
  document.getElementById("counterNac").innerHTML = " <h2> Acertaste " + counterNac +" de 3 </h2>";
}
function guardarNac() {
  name = document.getElementsByName('name')[0].value;
  document.getElementById('categorias').innerHTML='<h2> Hola '+name+'!<br></h2>' ;
  //obj11 = document.getElementById('resultNac');
  obj11.style.display = (obj11.style.display=='block') ?'none' : 'block';
  //obj8 = document.getElementById('resultInter');
  //obj8.style.display = (obj8.style.display=='block') ?'none' : 'block';
  obj2 = document.getElementById('categorias');
  obj2.style.display = (obj2.style.display=='none') ?'block' : 'none';
  obj3 = document.getElementById('elegirCategorias');
  obj3.style.display = (obj3.style.display=='none') ?'block' : 'none';
}
function guardarInt() {
  name = document.getElementsByName('name')[0].value;
  document.getElementById('categorias').innerHTML='<h2> Hola '+name+'!<br></h2>' ;
  //obj11 = document.getElementById('resultNac');
  //obj11.style.display = (obj11.style.display=='block') ?'none' : 'block';
  //obj8 = document.getElementById('resultInter');
  obj8.style.display = (obj8.style.display=='block') ?'none' : 'block';
  obj2 = document.getElementById('categorias');
  obj2.style.display = (obj2.style.display=='none') ?'block' : 'none';
  obj3 = document.getElementById('elegirCategorias');
  obj3.style.display = (obj3.style.display=='none') ?'block' : 'none';
}
