const btnIniciar = document.querySelector(`.btn-danger`);
const btnPausar = document.querySelector(`.btn-primary`);
const btnResetear = document.querySelector(`.btn-success`);
const textContador = document.querySelector(`.fw-semibold`);


/* deshabilitar botones */

const deshabilitarBotones = () => {
  btnResetear.disabled = true;
  btnPausar.disabled = true;
};
deshabilitarBotones();

/* agregar funcionalidad - iniciar contador */
let contador = 0;

btnIniciar.addEventListener(`click`, () => {
  /* habilitar boton pausar */
  btnPausar.disabled = false;
  /* deshabilito boton iniciar y resetear */
  btnIniciar.disabled = true;
  btnResetear.disabled = true;

  /* arrancar contador */
  
  console.log(textContador);
  /* creo el contador */
  /*  let contador = 0; */
  let idInterval;
  /* inicio contador */
  idInterval = setInterval(() => {
    contador++;
    textContador.textContent = contador;
  }, 1000);

  /* detengo contador */

  btnPausar.addEventListener(`click`, () => {
    /* habilito boton iniciar y resetear y deshabilito pausar*/
    btnIniciar.disabled = false;
    btnResetear.disabled = false;
    btnPausar.disabled = true;
    clearInterval(idInterval);
  });

  /* resetear cronometro */

  btnResetear.addEventListener(`click`, () => {
    /* habilito boton iniciar  y deshabilito resetear y pausar*/
    btnIniciar.disabled = false;
    btnResetear.disabled = true;
    btnPausar.disabled = true;
    console.log(`aqui resetear`);
    console.log(contador);
    /* pongo en cero contador */

    textContador.textContent = `0`;
  });
});
 
