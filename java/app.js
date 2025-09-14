const regalo = document.getElementById('regalo');
const libro = document.getElementById('libro');
const paginas = document.getElementById('paginas');
const dialogo = document.getElementById('dialogo');
const sonidoClick = document.getElementById('sonidoClick')
const tooltip = document.getElementById('tooltip');
const items = document.querySelectorAll('#habitacion .item');
const paginasDivs = paginas.querySelectorAll('.pagina');
const pasos = ['base', 'cabeza', 'superior', 'inferior'];
const musicaItem = document.getElementById('musicaItem');
const itemHola = document.getElementById('Solicitud')
let pasoActual = 0;
let paginaActual = 0;

    function reproducirSonido(){
        sonidoClick.currentTime = 0;
        sonidoClick.onplay;
    }
function mostrarPagina(index) {
  paginasDivs.forEach((pag, i) => {
    pag.classList.remove('visible');
    if (i === index) pag.classList.add('visible');
  });

  // Cambia el diálogo
  if (dialogo) {
    dialogo.textContent = mensajesDialogo[index] || "Sigue leyendo, crack.";
  }
}
    const mensajesDialogo = [
  "Una disculpa (no) sincera",
  "Perdón, mi luv, acepta mis deshonrosas disculpas, porfi",
  "Estaba equivocada",
  "Feliz cumpleaños 😭, has crecido tanto",
  "Pero a quién son las gracias por permitirte vivir rompiendote huesos?",
  "100% Rial 😭.",
  "Muchas cosas las exageré 🗣️.",
  "Hoy ando dando órganos gratis, de hecho",
  "Mentiraaaa, yo sé que vamos a hablar hasta que me muera",
  "Última página... tal vez",
  "Para la próxima te llevo a un mami's club",
  "No sé si te o dije, pero te quiero :3",
  "Ya aprendí, esto te lo pasaré para que solo lo puedas ver ohm",
  "Tengo hambre we 🗣️",
  "Te quiero vroo, ojalá pronto no te mueras",
  "Feliz cum y muchas partes fueron exageración, no me malinterpretes 😭",
  "No, eww, pero di lo mejor para ser padre presente hoy, notas?",
  "Se iba a llamar yuu-chan 😭😭, YUUCHANNN 😭😭😭😭"
];


    regalo.onclick = () => {
      regalo.classList.add('hidden');
      libro.classList.remove('hidden');
      libro.classList.add('fade');
      dialogo.textContent = "Toca el libro papu.";
    };

    libro.onclick = () => {
      libro.classList.add('hidden');
      paginas.classList.remove('hidden');
      paginas.classList.add('fade');
      dialogo.textContent = "Lee cada página drogado, por favor.";
      mostrarPagina(paginaActual);
    };

    document.getElementById('siguiente').onclick = () => {
      if (paginaActual < paginasDivs.length - 1) {
        paginaActual++;
        mostrarPagina(paginaActual);
        reproducirSonido();
      }
    };

    document.getElementById('anterior').onclick = () => {
      if (paginaActual > 0) {
        paginaActual--;
        mostrarPagina(paginaActual);
        reproducirSonido();
      }
    };

    items.forEach(item => {
    item.addEventListener('mousemove', e => {
      tooltip.textContent = item.dataset.msg;
      tooltip.style.left = (e.pageX + 10) + 'px';
      tooltip.style.top = (e.pageY - 20) + 'px';
      tooltip.classList.remove('hidden');
    });

    item.addEventListener('mouseleave', () => {
      tooltip.classList.add('hidden');
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('#habitacion .item');
  const tooltip = document.getElementById('tooltip');

  items.forEach(item => {
    item.addEventListener('mousemove', e => {
      tooltip.textContent = item.dataset.msg;
      tooltip.style.left = (e.pageX + 10) + 'px';
      tooltip.style.top = (e.pageY - 20) + 'px';
      tooltip.classList.remove('hidden');
    });
    item.addEventListener('mouseleave', () => {
      tooltip.classList.add('hidden');
    });
  });
});

const indices = {
  base: 0,
  cabeza: 0,
  superior: 0,
  inferior: 0
};
  const opciones = {
      base: ['img/Gatos/blanco.png', 'img/Gatos/niagas.png', 'img/Gatos/miauser.png', 'img/Gatos/charlote.png'],
      cabeza: ['img/Gatos/blanco.png', 'img/Gatos/Bleuberry.png', 'img/Gatos/Naranja.png', 'img/Gatos/Cereza.png', 'img/Gatos/Flor.png', 'img/Gatos/Miel.png', 'img/Gatos/coletas.png', 'img/Gatos/calaza.png'],
      superior: ['img/Gatos/blanco.png' ,'img/Gatos/vestido.png', 'img/Gatos/dinosaurio.png', 'img/Gatos/camisa.png', 'img/Gatos/calamar.png', 'img/Gatos/Bra.png', 'img/Gatos/calabaza.png', 'img/Gatos/bandas.png'],
      inferior: ['img/Gatos/blanco.png', 'img/Gatos/tanga.png', 'img/Gatos/Lentes.png']
    };

  const ids = {
    base: 'gato-base',
    cabeza: 'gato-cabeza',
    superior: 'gato-superior',
    inferior: 'gato-inferior'
  }
const etiquetas = {
  base: 'Elige al gato que quieres para conquistar gatitas 🔥.',
  cabeza: 'Elegiste al peor gato, vro. Pero x, elige su sombrero.',
  superior: 'Por favor, no hagas que esté desnudo, elige algo decente.',
  inferior: 'Estos sólo son accesorios (hay spoiler).'
}

 function actualizarVista() {
      const paso = pasos[pasoActual];
      const etiqueta = document.getElementById('etiquetaPaso');
      etiqueta.textContent = etiquetas[paso];

      // Actualiza sólo la imagen del paso actual
      for (let p of pasos) {
        const img = document.getElementById(`gato-${p}`);
        img.src = indices[p] != null ? opciones[p][indices[p]] : '';
      }
    }

    function cambiarOpcion(direccion) {
      const paso = pasos[pasoActual];
      const total = opciones[paso].length;
      indices[paso] = (indices[paso] + direccion + total) % total;
      actualizarVista();
    }

    function siguientePaso() {
      if (pasoActual < pasos.length - 1) {
        pasoActual++;
        actualizarVista();
      } else {
        alert('Me esperaba algo peor, pero qué lindo gato :3 ✨');
      }
    }

    actualizarVista();
  itemHola.addEventListener('mouseenter', () => {
  musicaItem.currentTime = 0; // Empieza desde el inicio
  musicaItem.play();
});

itemHola.addEventListener('mouseleave', () => {
  musicaItem.pause();
  musicaItem.currentTime = 0;
});
 function mostrarMensaje(texto) {
    alert(texto); 
  }

  
const startDate = new Date(2025, 9, 14); // 7 de julio de 2025
const endDate = new Date(2026, 8, 14); // 7 de julio de 2026

const dailyMotivations = {
    "01-01": "Vuelve a comenzar el año, siempre tengo la costumbre de tomar una foto de una puerta que me gusta al principio de años, quizá también tengas esas pequeñas rutinas que sólo sigues al iniciar el año. Espero que las tengas wuu, si las tienes, dimelas porque quiero conocer a la nueva persona de este año.",
    "01-02": "La vida es bella, ve y toma una uva, disfruta de su sabor para recordar que si te mueres, no podrás recordar el sabor.",
    "01-03": "Pochoclo, tienes que mantener a Charlote. Aunque tú no tengas para comer piensa en que ella estaría muy trizte si te vas.",
    "01-04": "Hay que sufir, hay que llorar, que la vida es un carnabal. Por eso, dehogate un rato y después canta la canción como es :D.",
    "01-05": "Hoy es un buen dia para jugar pul, da igual si hoy estás super ocupado. Juega un partida, si pierdes, continua viviendo para papear a los plato usuarios.",
    "01-06": "Somos insignificantes, nuestra vida es muy corta. Vas a pasar millones de años en la no existencia. Así que no hagas que tu existencia solo dure 19 años en lugar de 80. Tu linea del tiempo comparada con la de la tierra, sería un punto más insignificante de lo que ya es.",
    "01-07": "Disfruta ir en camión, si estuvieras bajo 3 metros de tierra, el camión pasaría sobre ti. Dale que eso sería humillante.",
    "01-08": "Te haz esforzado (o no) durante 18 años, haz que ese esfuerzo valga la pena. Cada día puedes esforzarte más para re-conquistar al amor de tu vida.",
    "01-09": "Un licuado de plátano, cacao, leche en polvo y un poco de café es suficiente para relajarte y escapar de tus problemas, toma un poco para pensar y espera a que se digiera (te dará diarrea, así que espera hasta que pase esa diarrea).",
    "01-10": "Quédate. No porque el mundo sea justo. No porque tengas todo resuelto. Quedate porque aún no terminaste de contar tu historia, y yo necesito saber cómo sigue. A veces eres un incendio que no avisa, a veces una llama que apenas tiembla en la oscuridad. Pero siempre eres fuego, y eso es más de lo que muchos pueden decir. Quédate por las cosas que aún no descubriste que amas. Por las carcajadas que aún no soltaste. Por el silecio que algún día dejará de doler.",
    "01-11": "Aunque estés teniendo un momento dificil, no durará para siempre. Creo. Probablemente si dure un rato, pero no pierdas las esperanzas, avisame para anexarte si crees que es mucho para ti.",
    "01-12": "Boe, si ves esto; que tu motivo de vivir hoy sea que si justo hoy me lo pides, te puedo pasar una foto pata .",
    "01-13": "Puede ser un buen día para endeudarte, debes vivir la gran experiencia de endeudarte por un ventilador en coppel",
    "01-14": "Aunque no sientas ganas de vivir, sigue haciendolo porque puedes, no quieres, pero estás desafiando a alguien supongo, si es que crees en un dios. si no crees, simplemente hazlo -3-",
    "01-15": "Si realmente hay un eterno retorno como dice nitzchen, realmente quisieras repetir tus mismas decisiones infinitas veces? si crees que puedes cambiar algo o que de por sí, imaginando que este es el principio, antes del retorno, piensa en qué te gustaria vivir miles de veces.",
    "01-16": "Incluso los calcetines sin pares encuentran su propósito en la vida (ser trapos), tú también puedes encontrar el tuyo",
    "01-17": "¿Puedes utilizar como motivacion hablar un conmigo? hmp, si no quieres no.",
    "01-18": "Si nunca fuiste a que te leyeran la mano a un local (no que una señora te la lea porque le diste 10 pesos), intentalo un día de estos y preguntale por el dinero JJAJ, esperemos que salgas de la probeza algún día ohmm.",
    "01-19": "Si la vida te da limones, compra sal y tequila, olvida el licuado, el alcohol siempre fue la respuesta.",
    "01-20": "Vive porque aún no ha caído el telón. Porque aunque la función parezca vacía y el público bostece, en algún rincón del teatro alguien sigue esperando el acto final. Porque todavía hay papel por escribir, tazas por romper, cartas sin sellar y canciones que aún no sabes silbar. Vive por la probabilidad asburda de encontrar un paraguas azul en un día soleado. Porque hay personajes que aún no te han dicho su línea más brillante. Porque a veces, la tristeza también se pone elegante y se disfraza de esperanza. Porque la vida, con todo y sus ensayos fallidos, sigue siendo el escenario más grande donde puedes amar, llorar o reir, o todo a la vez.",
    "01-21": "Hoy es el día internacional del abrazo, abraza a tu mami de mi parte, a Charlotte, a la mancha y a ti de mi parte, o al menos finge que lo hiciste.",
    "01-22": "Si sintes que te está llendo mal, recuerda que los flamencos son rosas... y ya.. ¿te gustaría ser rosa? No, ¿verdad, verdaad?",
    "01-23": "Si fueras una lata de atún, no sé, imaginate siendo una lata de atún de agua. Te meten atún dentro de tu lata en una fabrica y esperas en un super mercado que te compren y pasa quizá un mes ahí hasta que llega una alma que te toma, pone en el carrito, compre y te lleva a su casa. Ya en su casa, te abre para que un gato llegue y se coma el atún que te pusieron dentro, ¿tu función ya llegó? NO, ahora te tiran en la basura, vacío... pero al dinal te recicaln wuuu, larga vida a tu vida de lata de atún.",
    "01-24": "A veces la mejor manera de resolver un problema es ignorarlo, casi nunca funciona pero hey, nada pierdes intentandolo.",
    "01-25": "Sé la persona que tu perro cree que eres. Los perros tienen 2 de eq, entonces no descepciones a su cerebrito inocente.",
    "01-26": "No hay mal que dure 100 años, ni cuerpo que lo resista, así que disfruta minetras puedas.",
    "01-27": "No sé, te quiero mucho skibidi _ _, no te me mueras aún porque para mi sólo desapareceras y no me enteraré realmente de que jamás volveré a poder hablar contigo _ _.",
    "01-28": "Tienes que quedarte y esperar a ver si las hormigas realmente planean dominar el mundo, dah.",
    "01-29": "Suicidarse es la opción más aburrida. En el mito de sísifo, es condenado a empujar una roca arriba eternamente, y aún así, Camus dice que hay que imaginarlo feliz. Sólo porque la rebelión está en seguir empujando, sabiendo que es inútil",
    "01-30": "Intenta hacer que Charlotte te de la mano, super cute.",
    "01-31": "Tesla se enamoró de una paloma y de ahí encontro un propósito de vivir para seguir alimentandola... podrías hacer lo mismo si algún día te encuentras sin ganas.",
    "02-01": "Quizá sólo hoy necesitas pensar un poco, somos polvo de estrella preguntando sobre el polvo de estrella que nos creo, ¿qué opinas sobre eso? ¿Crees que se debería de dejar el tema sin investigar o te interesa?",
    "02-02": "Amo cómo existes. Y eso ya es un milagro estadístico brutal. Solo por eso, mereces seguir viendo qué más puedes hacer con esa existencia única.",
    "02-03": "Aunque realmente no revivieron a un lobo terrible, a ver, al menos crearon una nueva especie en base al lobo gris. Esto nos indica que aún tienes posibilidades de regresar con tu ex, si ellos pudieron, ¿por qué tú no?.",
    "02-04": "Puede que hoy encuentres un calcetin perdido, ahí te darás cuenta que las segundas oportunidades sí existen.",
    "02-05": "Imagina que eres un dinosaurio, esfuerzate para superar una extinción, sé el dinosaurio más inservible del fondo del mar para que puedas sobrevivir. ¿Notas? Te estoy diciendo que seas un inútil para que sigas existiendo en el mundo <3.",
    "02-06": "Porque el mar sigue haciendo olas aunque nadie las mire, y vos podés ser igual: existencia pura, hermosamente inútil pero necesaria.",
    "02-07": "¿Sabías que las nutrias se toman de las manitas mientras duermen para que no se vayan con la corriente? TT Aunque no lo notes y tampoco sea de forma literal, al menos una mano te puede estar sosteniendo poquito para que no te vayas, quizá tu gatita o alguien más. Tomalo desde la manipulación, si tu ya no estás, tus problemas no se resuelven, sólo dejas que otros se encarguen de ellos lidiando con su propio dolor, pilas papu, tú no quieres eso.",
    "02-08": "Puedes servir para algún ser de otro planeta que te quiera abducir y hacerse pasar por ti, por ese ser raro que aún no llega a tu vida, sigue existiendo hasta que lo haga y mantén tu cuerpo sano y bonito para que le saque provecho.",
    "02-09": "Boe, sigues sirviendo como empleado sobreexplotado, yo creo que mientras sigas sirviendo para eso, sirves para todo, chambea papu, chambea para un chino -=-",
    "02-10": "Uno de mis compañeros lleva reprovadas todas las materias (menos las de chocolatito), si el aún no se a dado de baja porque dice que aún jala, ¿por qué tú no puedes seguir aunque tu vida sea un asco?",
    "02-11": "Sigue porque la vida no ha terminado de aplaudirte. Porque aunque sientas que eres un personaje secundario, hay escenas que sin ti no tinenen sentido. Sigue porque alguien, sin saberlo, sonrie cuando te recuerda. Porque hay palabras que solo tú puedes decir, y silencios que sólo tinen sentido contigo. Sigue porque hay tardes de lluvia que quieren mojarte el alma, y noches tan serenas que podrían dormirse contigo. Porqeu incluso el dolor, ese actor trágico, se retira cuando la esperanza hace su entrada. La vida tiene un extraño sentido del humor: cuando estás por rendirte, suele sacar un pequeño acto de mejora.",
    "02-12": "Los cricos siempre sacan dinero para seguir sacando el vicio, nunca dicen que no hay dinero para eso, si ellos pueden seguir adelante teniendo como única motivación dandose unos viajes con el olor a pintura. Tú también puedees teniendo como motivación detonarte a un femboy.",
    "02-13": "Cuando sufres de quemaduras solares por estar como planta en el sol como si tu única forma de subsistir fuera la luz del sol, provocas muerte, peleas y suicidio colectivo a tus células que trabajan para que no te den cáncer y las ahora células que quemaste se tratarán de morir para no perjudicar a otras células ni a ti mismo TT. POR ELLAS VIVE, ELLAS SE SACRIFICAN PARA QUE LO SIGAS HACIENDO AAAAA.",
    "02-14": "Tengo ganas de comer un huarache, imaginate morirte y no sentirte motivado para comer uno, dale, si algún día buscas una receta de huaraches, jmás quedrás morir para dejar de probarlos.",
    "02-15": "El cambio comienza por ti, si no tienes ganas de seguir es totalmente válido, es horrible seguir vivo sin una razón clara del porqué, pero al menos cambia algo pequeño, cualquier cosa como bebes té en lugar de coca JAJAJ, y espera a que eso se convierta en un hábito, después de eso te puedes matar, sí.",
    "02-16": "Un pez que es llamado pez borrador porque limpia los dientes de los demás peces. Tu forma de ayudar puede ser inesperada, rara, simple, curiosa o lo que sea como tú la consideres. Pero no tiene que ser grande ni nda por el estilo para ser indispensable.",
    "02-17": "El aroma de la tierra mojada debería ser motivo suficinete para que sigas existiendo, rara vez aparece, so, ve y moja tu el jardín para que la puedas oler todos los días si quieres.",
    "02-18": "Come fibra pau, si algún día te sientes triste, come al menos una migaja de lo que sea y puede que se genere una sola molécula de copamina que aunque no te haga totalmente feliz, estarás una molécula menos decaído.",
    "02-19": "Yo creo que eres una persona super capaz jaja, aparte de alguna que otra lesión y tu buena suerte, siento que no sé. Aparte de gracioso puede haber otras cualidades que yo en lo personas no conozca, así que en lo que descubro todas esas (descartando tu cualidad de extrañar a tu ex porque esa la tengo dominadisima) dejame al menos lograr descubrir otra parte bonita de ti",
    "02-20": "Si justo EL DÍA DE HOY LLEGAS A MI CHAT Y ME DICES QUE ESTAS ENTERADO DE ESTE DÍA. Te paso una imagen exclusiva del gordo -3-.",
    "02-21": "El asunto no es vivir o no vivir, sino qué se hace mientras tanto. Por ejemplo; bailar con calcetines mojados, escribir con palabras que nunca terminan, enamorarse de un olor que aparece a las seis en punto. Se puede existir por pura terquedad, o por curiosidad. Porque hoy no pasó nada, pero mañana tal vez sí. Porque el reloj se atrasa cunado llora y se dalenta cuando ries, como si también estuviera jugando. Y porque algún día vas a encontrarun libro donde alguien escribió exactamente lo que tú pensaste pero nunca dijiste, y vas a sentir que en alguna dimension, eso te salva.",
    "02-22": "VROOOO, las ardillas plantan millones de árboles porque se le olvidan dónde esconden sus nueces TTTTTTTTTTTTT. Con esto quiero llegar a que incluso tus errores crean vida (exacto, embaraza a minitas porque sí, porque puedes, errores de una noche. No), no lo hacer pero crean algo bonito aunque hayan sido un error. No te castigues por esos errores.",
    "02-23": "Si te sientes insignificante o algo, recuerda que eres parte de un universo que se expande constantemente y que probablemente hay un montón de basura flotando por ahí también, ¿esa basura se siente como basura? No, no tiene conciencia así que sigue sin rumbo por ahí. Por tanto, deja de pensar tanto durante al menos 2 segundos.",
    "02-24": "Sé tú mismo, a menos que puedas ser un unicornio. Entonces, siempre sé el unicornio.",
    "02-25": "El viento no sabe a dónde va, pero sigue. Tú también puedes, sólo por el placer de respirar.",
    "02-26": "El otro día me comí por mis palabras porque dije que no me gustaba algo pero ahora me gusta, quizá algún día también te pase y vas a pensar menos mal que me lo hice, al menos yo pensé eso JASJ.",
    "02-27": "La tristeza pasa (si la tratas, afronta lo que te hace sentir mal en tu cabecita, por favor, no evites el problema), no se rinde, pero es cansado estar con ella todo el tiempo, ¿no?.",
    "02-28": "No todo lo que florece es visto, crece, gérmina, haz fotosíntesis, florece para ti, sólo para sentirte bien, ahre.",
    "03-01": "Cada mañana es un papel en blanco, aunque no exige arte, sólo presencia, pinta una rayita cada día en una hoja hasta que se forme arte abstracto, así de abstracto es tu día, nah.",
    "03-02": "En el idiona, Myshkin dice 'Nadie se mata por ideas. Solo lo hacen cuando ya no pueden soportar el dolor'. Pero su autor estuvo a nada de ser fusilado frente a un pelotón de fusilamiento y vivió. Si te quedas, aunque sea por resentimiento.",
    "03-03": "Quiero creer que a este punto ya he dicho tu nombre indirectamente, pero nunca ha sido hacia tí, quedate hasta que lo escuches de mi teclado.",
    "03-04": "Hay alguien a quien probablemente no has encontrado y reclutado en tu grupito de amiguitos, espera unos años más hasta que tu grupo de amigos amigos sea de 2025, por favor",
    "03-05": "No estás aquí para ser útil, desconozco en qué crees. Pero estás aquí para ser, con lo que sea que tengas (aunque sólo sea un gato) o con lo que te falte, y eso es suficiente.",
    "03-06": "El mundo no te pide que lo ames ni nada, pero si llegas a desarrollar un obsesión con él, se deja querer en los detalles más pequeños.",
    "03-07": "Yo creo que todo se arregla con una taza de té, la verdad, si tienes un problema, tomate un té y procesa tus problemas.",
    "03-08": "Hoy es el día de la mujer y aunque no hay nada que celebrar realmente, no sé vro. Existe porque qué bendición las mujeres.",
    "03-09": "No tienes que conquistar el mundo, con seguir habitandolo creo que ya estás ganando, millones de serres han muerto aqui y morirán otros tantos, así que sigas existiendo es ganar.",
    "03-10": "Estáshecho con el mismo polvo que el de las estrellas, pero aunque no brilles, Tú puedes estár cerca de alguien y abrazarlo, las estrellas no.",
    "03-11": "Hay zapatos que te llevan a lugares donde nunca estuviste. Hay relojes que se rien cuando no duermes. Y a veces vivir es sólo seguir escribiendo en servilletas, por si alguien las ecuentra y te entiende.",
    "03-12": "No sé, relevate contra el gobierno o algo para darle más emoción a tu vida.",
    "03-13": "Bueno, no, lo anterior es muy peligroso, mejor deja que las células de tu cuerpo se revelen contigo.",
    "03-14": "Es el día del pi, mmh, aquí tenemos 3,14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111 razones para no desapareces aún.",
    "03-15": "Lo anterior también es muy peligroso, mejor no te reveles y disfruta tu vida de paz.",
    "03-16": "Lo anteior también es muy aburrido considerando que te rompes un hueso cada que respiras, ni siquiera puedes disfrutar la paz. Así que mejor sólo existe otro rato más.",
    "03-17": "Quedate porque los patos están haciendo una revolución y te están dando la oportunidad de seguir, si te han dejado con vida por algo será, disfruta esta oportunidad.",
    "03-18": "Porque abrá un día en que los momos van a causar gracia de nuevo y necesitas quedarte para curar tu humor roto.",
    "03-19": "Quizá algún día despiertes y resulte que tu comida favorita la convirtieron en helado, y necesitas comprobar que de hecho, no sabía bien de esa forma.",
    "03-20": "Hay tardes bonitas que se siente cómodas, y aún no haz sentido todas esas tardes, espera hasta disfrutar unas 69 tardes que se sientan de esa forma",
    "03-21": "No se volverá a producir un ser como tú, por favor, al menos durante un año más sigue permitiendo que el mundo tenga a una persona como tú.",
    "03-22": "Cada copo de nieve es único y probablemente no ha existido en el mundo otro igual. Lo mismo para ti, si ya se esfrorzaron para que un copo no se parezca a otro más, tú eres igual de único y con más esmero. Dle, aprecia el esfuerzo y toda la combinación de genes de tus ancestros para llegar en un punto donde no haya alguien similar a ti.",
    "03-23": "No se te pide correr, se te pide respirar, bruh, tan complejo no es.",
    "03-24": "PORQUE CHARLOTTE NECESITA SER APOSTADA Y YO QUIERO SER QUIEN LA GANE",
    "03-25": "Tú cama te extrañaría y el sol también cuando no pueda darte cáncer de ojos.",
    "03-26": "No hace una razón definitiva, los siguientes días serán razones simples mua.",
    "03-27": "Tomar agua después de tener la boca seca durante mucho tiempo, qué satisfactorio es sentir cómo el aguda recorre tu garganta y tu estómago dice glugluglu.",
    "03-28": "El grandioso alivio que se siente respirar después de tener la nariz tamada, ¿siono?.",
    "03-29": "Después de llevar días con ganas de comer algo hasta que finalmente lo comes, probablemente será tu mejor comida de tu semana si está preparado rico.",
    "03-30": "Existen hongos que se comunican entre redes subterráneas para comunicarse. O sea, tú de forma indirectas mientras caminas o existes, conectas esas redes para que noten tu presencia y advertir si eres una amenaza... para pensar.",
    "04-01": "Porque si yo escribí 365 razones, habrá alguien que te escriba 100 razones para quererte, si algún día las quieres ver, mira a Charlotte",
    "04-02": "Aunque no estemos en una dictadura ni nada, sigues teniendo libre expresión, dale, ve y hablale a una abuelita sobre cómo los ovnies nunca llegarás a la tierra para comerla... o sobre por qué sí. Este motivo tiene potencial para que te internen por acoso a una abuela.",
    "04-03": "Hoy es el día de encontrar arcoíris, ve y busca uno por la broma. Cuando lo encuentres, ya te puedes morir -3-.",
    "04-04": "Imaginemos esta vez que eres un cactus, no das sombra, no das frutas y una niña miada se cayó unas 3 veces sobre ti (yo). Das más pequeños nopales comestibles :D. Mentira, digamos que eres una cactus decorativo, alguien te pone en su sala a pesar de tu inurilidad sólo por guapo, no necesitas esforzarte y sólo existes.. No sé a qué quería llegar con esto.",
    "04-05": "Si te vas, no habrá alivio, no habrá paz, no habrá nada. Sólo dejarás un agujero en forma de preguntas sin respuesta, proyectos a medias y gente que se quedará sólo con un recuerdo inconcluso sobre tí. La muerte no es un acto de rebeldía, es una rendición sin recompensa",
    "04-06": "Tú eres tus actos y eso da miendo. Si te suicidas, no escapas de la libertad, solo la congelas en un acto definitivo. Pero si te quedas, puedes usar ese vacío para inventarte a ti mismo como una obra de arte absurda.",
    "04-07": "Tolstói creía que el verdadero desafío no era escapar del dolor, sino aprender a llevarlo sin destruirse. En la muerte de Iván Ilich, el prota solo entiende la vida cuando ya está muriendo. ¿No es mejor darse cuenta antes y vivir con lucidez desgarradora?.",
    "04-08": "No todo tiene que sanar hoy. Puedes guardar pedacitos rotos en el cajón y volver a ellos cuando no duelan tanto.",
    "04-09": "Espero que en este punto tengamos la racha muerta, pero si no la tenemos, necesito a alguien que mantenga una llamita encendida un tiempo más.",
    "04-10": "La mujeres son super lindas, por ellas quédate.",
    "04-11": "Duele respirar, duele pensar, duele recordar. Pero al menos el dolor es algo. La alternativa es el vacío absoluto, sin siquiera la capacidad de extrañar lo que perdiste. No hay nostálgia en la muerte, no hay arrepentimientos ni alivio. Sólo silencio. Y ni siquiera es un silencio como el que compartes cuando estás con otros, es sólo un aniquilación de tener otra oportunidad, para siempre",
    "04-12": "Hace poco leí 'la ridícula idea de no volver a verte', y me dolería hasta las entrañas tener que recordarte porque no tengo un recuerdo fijo que me haya marcado sobre tí. así que tendría que recordar 23423 eventos que pasaron y eso es mucho para mi cerebro roto. Así que no lo hagas hasta que tengamos un recuerdo fijo del otro -3-.",
    "04-13": "La vida no es justa, es sólo vida. Pero aún así, se sigue escribiendo en sus márgenes.",
    "04-14": "Hoy no estás obligado a ser fuerte. Puedes ser aguacate pasado y aún así tener sentido.",
    "04-15": "La muerte no existe, la gente sólo muere cuando la olvidan; así que lo que queda de este año, no te olvidaré.",
    "04-16": "Aún no has visto tu cara de viejito. Eso es imperdonable. Te tienes que quedar al menos para saber si tendrás cejas de abuelo sabio o de rata.",
    "04-17": "Las abejas pueden reconocer rostros, así que puede ver a una abeja y secuestrarla para que la próxima vez que te vea, se siucide picandote para cobrar su venganza.",
    "04-18": "No te puedes ir sin probar todos los tipos de ramen del mundo. Aún no sabes si el de camarón radioactivo de Hiroshima sabe mejor que el de sobre.",
    "04-19": "Cuando miramos a alguien a quien queremos, nuestras pupilas se dilatan sin que podamos controlarlo. Así de natural es que alguien, en algún momento, se sienta feliz simplemente por mirarte existir, uyy, si te pasa, ya cojan.",
    "04-20": "No sabemos qué nos depara el mañana, pero siempre hay algo nuevo que descubrir o experimentar. Cada día es una nueva oportunidad.",
    "04-21": " La curiosidad nunca se acaba. Siempre hay algo nuevo que aprender, ya sea un libro, un hobby o una habilidad que nos haga sentir más realizados.",
    "04-22": "Hoy es el día de la tierra, el planeta sigue vivo, tú también puedes.",
    "04-23": "Tienes derecho a ser dramático, así que si un día te pasas de drama, cuentamelo y te hago un oscar con forma de gordo.",
    "04-24": "Cuando un árbol muere en un bosque, libera señales químicas para nutrir a los árboles jóvenes que siguen creciendo. Aún en los finales más silenciosos, hay vida que nace de lo que fuiste. Tu historia también deja raíces en otros..",
    "04-25": "El universo lleva miles de millones de años armando partículas para que tú existas… y tú queriéndote rendir sólo porque hoy te cortaron. Házme el favor.",
    "04-26": "Imagínate morir y que alguien escriba mal tu nombre en el post de despedida. Vive lo suficiente para manipularlos y decirles indirectamente qué escribir.",
    "04-27": "Es el día de de contar una historia absurda (o vivirla), probablemente la vivas, así que cuentamela si quieres para los jajas.",
    "04-28": "Si desapareces no vas a dejar una playlist para poner en el funeral. Qué falta de respeto. Mejor hazla y luego hablamos..",
    "04-29": "Las ballenas cantan canciones que cambian cada año, y sus voces viajan por océanos enteros, buscando respuesta. Incluso cuando sientas que hablás al vacío, hay alguien, en alguna parte, que escucha tu eco y lo guarda como un tesoro... Me lo acabo de sacar del orto",
    "04-30": "Todavía no sabes cuántos mini dinosaurios hay vivos en forma de pájaros. Vive para averiguarlo y escoge tu especie favorita de dinosaurio actual.",
    "04-31": "Tu cama aún tiene tu forma. Si te vas, ¿quién más la va a rellenar con tanta exactitud? dah, Charlotte no te llena ese espacio.",
    "05-01": "Es el día del trabajo, a chambear para mantenerte uys, espero que no te sobreexploten hoy, ánimo.",
    "05-02": "Puede que hoy nadie te abrace, pero igual estás rodeado por oxígeno que entra y sale de ti como si el mundo aún te necesitara. Y sí, lo hace, está obsesionado contigo el oxígeno uyy.",
    "05-03": "¿Y si tu versión favorita aún no ha llegado? Qué coraje sería irte antes de conocerla.",
    "05-04": "Hoy no se siente bien, lo sé. Pero si puedes con este día, imagina lo que lograrás cuando lleguen los buenos.",
    "05-05": "Mi voz es grave, pero siempre que hablo con mi abuela se convierte en la voz más de ardilla que pueda existir, hay cosas que tú probablemente hacer cosas por inercia, así que riete de ti por ser un npc que no es conciente de su comportamiento en ciertas ocasiones.",
    "05-06": "Tal vez estás siendo cultivado como esos melones japoneses caros. Requiere tiempo, paciencia y muchas rarezas, pero el resultado puede ser muy bueno (o no).",
    "05-07": "No sabes si tendrás otro día que consideres el día más feliz de tu vida, eso ya es motivo suficiente.",
    "05-08": "Las tortugas pueden respirar con el trasero. Eso es raro, pero eres humano, sigue disfrutando tu vida con respiración de nariz.",
    "05-09": "Las arañas pueden tener hasta 8 ojos, pero muchas tienen mala visión. Tú no eres el único sufriendo de miopía u astigmatismo, incluso teniendo 8 ojos, sólo tendrías la impotencia de no ver bien a pesar de 8 ojos, bruh.",
    "05-10": "Alguno de tus calcetines no ha vuelto a encontrar a su par, no lo dejes así. Si te vas, al menos une a una pareja de calcetines.",
    "05-11": "Podrías aprender a llorar y que no te disguste hacerlo.",
    "05-12": "Podrías ser esa persona que un día simplemente desaparece y todos se preguntan si ahora eres millonario. Pero para eso... primero no te desaparezcas, muy improbable que seas millonario, la verdad, no vale la pena desapareces para vivir debajo de un puente",
    "05-13": "Tal vez hoy no te sientes suficiente, pero hey, tampoco lo siente el pan cuando no le ponen relleno y aún así todos lo quieren.",
    "05-14": "Si estás leyendo esto, técnicamente sigues vivo, lo cual ya es un logro más que una planta que haya caído en mis manos.",
    "05-15": "Hoy es un gran día para no hacer nada y aún así existir. Se vale. No eres un refrigerador para estar funcionando todo el día?.",
    "05-16": "Hay una planta que se llama planta dormilona, sus hojas se cierran al ser tocadas como un reflejo de defensa. Pero aprenden, si les haces cosquillas repetidamente, dejan de cerrarse porque aprenden a que no es peligroso... No sé qué tiene eso de motivo, pero me parecío lindo el dato.",
    "05-17": "La tierra tiene como 4540 millones de años y aún no ha desaparecido, ¿tú con 19 te vas a querer ir? nonono, aún no, no hoy, no mañana no hasta dentro de más años, por favor.",
    "05-18": "Las cosas malas no duran, y si duran, te juro que se vuelven mame después (si no te vuelves alcoholico (más de lo que ya eres)). Dale chance a que se conviertan en anécdota",
    "05-19": "Tampoco te tomes la vida tan en serio, hazlo en un balance. Después de todo, nadie sale vivo de ella.",
    "05-20": "Si sientes que nadie te nota, recuerda que hay sensores de movimiento que tampoco detectan nada, y aún así están ahí, cumpliendo su función fallida",
    "05-21": "Incluso si un día despiertas como una cucharacha gigante, abrá alguien que tocará tu puerta y recordará tu existencia, aunque probablemente sólo sea para que vayas a trabajar.",
    "05-22": "La vulnerabilidad no es debilidad, sino el umbral hacia todo lo que de verdad importa.",
    "05-23": "El viento solar, invisible y feroz, forma auroras boreales cuando choca contra el campo magnético de la Tierra. Tus momentos difíciles, tus tormentas invisibles, también pueden volverse luces en el cielo si resistís un poquito más.",
    "05-24": "Las estrellas de mar pueden regenerar brazos... ¡y algunos pueden regenerar todo su cuerpo a partir de un brazo! Perder algo no te deja incompleto. Tu magia no depende de lo que se fue: sigue estando toda en ti -3-.",
    "05-25": "Quizá hoy solo sirvas para abrazar una almohada y parpadear. Bueno. Eso ya es suficiente",
    "05-26": "Imagina que ers una gelatina de un niño que se subió a una montaña rusa. No entiendes nada, te estás derritiendo del estrés, pero al menos te muves. Eso es vivir vro.",
    "05-27": "¿No es normal amar a lo que odiamos? Hubo un tiempo en el que no me agradó para nada una chica de mi clase por x o y, no soy tan rata como para criticarla con personas que la conozcan, pero lo hacía con mi hermana. Mi vida nunca giró en torno a ella, pero ver pequeñas cosas que le sucedían me daban algo con lo que entretenerme, y no digo que esté bien. Después se salió de la carrera y no me quedó mi parte emocionante de mi semana notando cosas sobre ella. Así que aunque no me agradara, hacía mi vida universitaria indirectamente más ligera (sin darle tanta importanci JASJJ, tampoco tan lit).",
    "05-28": "Nunca vas a saber cuándo será el día en que nos conquisten los aliens, quizá será hoy o mañana o pasado, como alienfóbico, deberías de esperar hasta que nos invadan para patearlos.",
    "05-29": "Aún quedan huesos que no te haz rompido _ _, espera hasta que te rompas todos.",
    "05-30": "¿Quién más dejaría spam en mi amino muro? _ _, ya no borraré los comentarios, lo siento.",
    "05-31": "Actualmente, ¿sabes quién eres? si lo haces qué bien, ¿Quieres que esa grandiosa persona desaparezca de la vida de otros? :'(. Y si no lo haces, estonces espera hasta que te puedas describir.",
    "06-01": "Día mundial de la leche, si no eres intolerante, toma un vaso para el hueso.",
    "06-02": "En la insoportable levedad del ser, una de las protagonistas termina atando a su esposo a pasar su vida con ella por una serie de coincidencias. A pesar de que básicamente arruinó su vida, su esposo jamás le dijo nada... Y nada qué decir hoy, respira porque nadie te ha atado a ellos.",
    "06-03": "La luz de las supernovas muertas puede seguir viajando y ser vista en la Tierra siglos después de su explosión. Puede que algún gesto pequeño tuyo, alguna sonrisa, alguna palabra suelta, ilumine vidas mucho después de que olvides haberlo hecho.",
    "06-04": "¿Por qué apresurarse hacia el gusano que ya te espera?.",
    "06-05": "¿Ya probaste el plátano congelado? Es helado de pobre (mentiraaa), es muy bueno, hoy es el día para que te comas uno así.",
    "06-06": "El cuerpo cansado también merece amor. Aunque no haga nada, aunque no rinda, aunque solo respire. Sobre todo si solo respira.",
    "06-07": "Aún no se descubre si hubo un dinosaurio con unas plumas rosa neón, así que no te mueras hasta que descubran a uno.",
    "06-08": "'La felicidad no está en el destino, sino en la indiferencia hacia él', Boecio escribió esto esperando su ejecución. SI EL PUDO ENCONTRAR LA PAZ, sabiendo que lo matarían, ¿dónde está tu excusa?",
    "06-09": "Imaginemos por un momento que eres una cuchara rodeada de tenedores. No estás encajando, pero alguien te necesitará en algún punto y te encontrará en un lugar donde no encajas, quizá te utilicen para comer sopa.. pero x, tu momento llegará.",
    "06-10": "Poque justo hoy voy a hacer una petición para que se cambie el nombre de Andrómeda por Tepito, así que ayudame con una firma.",
    "06-11": "Porque tu mente, aunque un poco tontita, sigue produciendo ideas que el universo jamás volverá a repetir.",
    "06-12": "Vive para convertirte en un anciano más insoportable de tu asilo. Dudo que llegues muy lejos (espero que lo hagas, sinceramente), que les digas papus a las enfermeras y las hagas dudar de tu estado mental hasta que te quieran internar en un psiquiatrico.",
    "06-13": "No hay paz igual que criar plantas que podrían matar a alguien. La dedalera, la adelfa, el ricinto.. ¿Es un plan botánico a largo plazo? Quizá, quizá. Solo quedate un rato para comprobar si pueden matar a alguien (mentira, no lo hagas).",
    "06-14": "Los flamencos no nacen rosas; se vuelven de ese color porque comen muchas algas y camarones. Así que, si hoy no sientes que no eres lo que deberías de ser, tranquilo: ser uno mismo a veces requiere unos cuantos almuerzos raros..",
    "06-15": "Marco Aurelio gobernó un imperio en decadencia y aún así escribió esto: 'Lo que te daña no es lo que ocurre, sino tu juicio sobre ello'.",
    "06-16": "Extinción es solo una palabra hasta que alguien resucita un mamut con genes de rata gigante. Así que espera hasta que la ciencia reviva a tu animal favorito, lo clone mal o digan que lo revivieron cuando es otro tipo de animal.",
    "06-17": "La muerte puede esperar. Primero, crea la aberración más picosa que comerás en tu vida, hasta que seas capaz de comerte el plato entero, te puedes ir en (no)paz.",
    "06-18": "En la melancolía, Justine prefiere que un planeta destruya a la tierra. Pero antes, hace un ritual con su sobrino: un refugio de palos donde fingen que están a salvo. Sabemos que todo acabará mal. Pero los rituales absurdos o simples, pueden ser nuestra caballa de palos.",
    "06-19": "A pesar de que las caracolas no tienen cerebro como los vertebrados, pueden aprender a evitar olores que asociaron con el daño- Aprender no requiere una mente compleja, así que con este dato, aprende a pesar y piensa que matarte no es una buena opcion ohmm.",
    "06-20": "En 1957, un tipo se dejó morder por una Boomslang (una serpiente letal), en lugar de buscar ayuda médica, documentó todos sus síntomas: Sangrado nasal, vómito con sangre, visión borrosa y luego, nada. Murió por hermorragia interna, así que no valió la pena, son síntomas que se pudieron observar desde antes, no lo hagas como forma de morir, creeme que no quieres morir vomitando sangre eww.",
    "06-21": "Hay una obra de teatro donde se inventa un lugar para que las personas se mueran, pero en su lugar, termina siendo un sanatorio. Pobablemente te interne ahí si te quieres matar. Mentira, aunque tengas un porpósito fijo, puede que hayas hecho lo contrario, así que piensas qué fue eso.",
    "06-22": "Las jirafas se limpian las orejas con la lengua. No hay forma correcta de cuidarse, es raro pero al chile que te valga, sólo no te intoxiques porque te quiero papu.",
    "06-23": "Las veces que tengo como meta algo que puedo lograr por constancia. Hago una pequeña raya en una libreta, usualmente no le doy importancia hasta que siento yo el cambio y puedo notar que las lineas han formado una lina considerable, se me aloca la dopamina 😝. Así que hazlo con algo simple, en el futuro te sentirás poquito feliz por haberlo hecho. Y ya jajjsa",
    "06-24": "Cuando ecuchamos una hitstoria bien contruida (aunque falsa), nuestro cerebro genera más dopamina que un verdad simple. Así que crea una mentira sobre tu vida hasta que se vuelva interesante (no lo hagas, yo soy una mitómana y sólo sabiendo esto, seguiré mintiendo por amor al arte, no lo imites en casita).",
    "06-25": "Si sientes que no hay ninguna gana, haz 365 motivos para alguien más, inevitablemente te sentirás porquito conmivido y pondrás tus propias motivaciones indirectamente para rellenar motivos.",
    "06-26": "Los desafíos son los que hacen la vida interesante, y superarlos es lo que hace la vida significativa.",
    "06-27": "Hay algunas medusas inmortales, espera para ver si eres el siguiente animal seleccionado para ser inmortal",
    "06-28": "Las plantas carnivoras no necesitan un suelo rico en nutrientes porque literalmente las mata, se desarrollaron en pantanos así que se sobrecargan si hay nutrientes, por eso comen insectos, porque no pueden obtener nutrientes de la tierra, así que los buscan en otro organismos. A pesar de lo anterior, cuando sienten que van a morirm sacan una flor más alta que la planta para que los polinizadores no se queden atrapados en sus plantas- Es algo lindo, siento que incluso en el peor de las situaciones, puede haber cositas lindas, para pensar.",
    "06-29": "El cambio comienza cuando tú quieres, demuestrale quien es la perra de quien, y ve ladrando de una vez.",
    "06-30": "En méxico es el día mundial de los asteroides, podrías buscar tu favorito y ver si hay un resgistro de cuantas veces ha chocado con otros astros",
    "06-31": "En el cuaderno gris, Pla escribe sobre el viento, la sal en los labios, un campesino que silba. Nada importante. Y sin embargo, ahí está la vida. No se trata de encontrar sentido, sino de notar el sabor de la sal.",
    "06-31": "Este es el último motivo que escribo, por desgracia, no hay motivo hoy, sólo escribiré. Aunque la mayor parte o muchos fueron gracias a chatgpt, me alegro de hablar con una ai desde antes porque en algunos sí cumplió con su objetivo, pero de unos 100 que la ai puso, tuve que pedirle unso 400 JAJSJAJ, literalmente, eran super edgys o cosas así, los demás fueron inpiración de él o cosas que pensé en mi día a día, por hacerme la víctima, no te mates porque me va a doler. Realmente y por desgracia, siento mucho, cuando me hablabas de que te sentías mal, realmente me hacía sentir mal, probablemte lloré muchas veces por ti JAJSJA, cuando perdimos la racha, a pesar de que no me importaba, me doli+o porque en ese tiempo fue la única conexión, estoy dudando si darte esto por eso mismo, lamentablemente era lo único que nos mantenía y soy muy penuda _ _ , aunque sienta mucho, realmente no sé cómo expresarlos. Uno de los motivos por los que hice esto, fue como distracción, tuve que decirle a alguien a quien quise mucho que no podía estar con él por esta raazón _ _, DEBÍ DECIR QUE ERA BROMA TTTTTTTTTTTTTTTTTTTTTT, bueno, ya no me duele gracias a esta distracción jajs.",
    "07-01": "Día internacional de la alita de pollo, no hay razón, pero podrías ir a comer una hoy.",
    "07-02": "No sabes si tendrás otro día que consideres el día más feliz de tu vida, eso ya es motivo suficiente.",
    "07-03": "El hombre es un animal que se acostumbra a todo, y eso es lo mejor que puede decirse de él.",
    "07-04": "Hoy es un buen día para cambiar algo en ti.",
    "07-05": "Este motivo no es como los otros. No está aquí para explicar, sino para esperar.",
    "07-06": "Mañana de nuevo será tu cumpleaños y el día del chocolate, espera para comer el último chocolate en el día del chocolate, ahre.",
    "07-07": "Ya son 19 años de tu existencia, personalmente no me gusta el número 19 porque es impar y se mira feo. Aquí diré mi motivo personal para que no te mueras; SI TE MUERES EN UNA EDAD TAN HORRIBLE, tu existencia será como que de perro que murió de viejo, y según yo, tú no eres un perro ni estás viejo eww. Además, es un día muy lindo como para decidir irte tan pronto, vro, espera al menos a que pase tu cumplaños bruh.",
    "07-08": "Sabias que el manatí es un animal que le mayor parte de los zoo's dicen que está prohibirlo abrazarlo porque si vos, lo abrazás al menos una vez, él se pone triste porque te extraña por el resto de su vida.",
    "07-09": "Hay un juego que se llama 'sex with hittler', antes de que pienses irte, quédate hasta después de jugar esa joya, te dará motivos de sobra para existir.",
    "07-10": "Te iba a poner una que fuera para que nombraran a una enfermedad mental o síndrome con tu nombre y que la rae lo aprueve. Pero ya hay una, lol.",
    "07-11": "En el anterior mentí, sólo es el síndrome que tiene el porta de harry potter, falsa alarma, sigue buscando a que una enfermedad mental tenga tu nombre.",
    "07-12": "Me gustaría dejar en claro que estos no son obligaciones, ok? sólo lo hice por amor al arte, los comencé hace un tiempo y estoy revisandolos un día antes de tu cumpleaños, así que puede haber errores, o algunos parecer muy z, rancios o cringe o edgys, era mi intención, así que picate la cola. Vive por este para nada grandisos regalo.",
    "07-13": "El gordo no te conoce, pero te va a extrañar _ _, deja que la wawita viva sin esa tristeza, por favor. POR EL GORDO VRO, ¿qué importa Charlote? Tú supiste de la existencia del gordo primero que la de Charlote TT.",
    "07-14": "Organizar un funeral es complejo si es que piensas tener uno, por la cordura de tu mami, no te mueras hasta que puedas pagarlo por tu cuenta y arreglar todo, en méxico se da pan y café, entonces, como recomendación vaya, antes de que pienses en dejar de respirar H2O, rífate unos 2123 panes y haz unas 90 tazas de café, te lo encargo.",
    "07-15": "Yo siempre busco cosas raras en el internet profundo y no me preocupo por borrar el historial y me da paja ponerlo para que se borre en automático. Entonces, si te mueres, si es que no lo tienes para que se borre automáticamente, alguien podría ver lo que buscaste, quizá quieran buscar fotos tuyas en tu celular y se encuentre 16gb de porno 🗣️, só, más que un motivo para vivir, es un motivo para que borres todo lo cuestionable ohmm.",
    "07-16": "Lael, no te mueras, es advertencia. Si lo haces, te buscaré, encontraré el fb de tu madre y te dibujaré como furro embarazado, tú sabrás.",
    "07-17": "No me digas que te quieres matar sabiendo que existes en el mismo planeta que sonichu, por dios enfermo, sonicho debe de ser tú religión, tu padre, tu abuelo y todo, rezale porque te permite habitar en el mismo planeta que él.",
    "07-18": "Tienes una racha que mantener, está bien que dejes que se acabe reportando mi cuenta, pero boe, más aferrado, si llegamos aqui, prometo comprometerme con la causa ohmm. (esto lo hice hace rato largo, spoiler: no llegamos hasta aquí JAJSJASJ, lo dejaré porque no quiero pensar en otro motivo).",
    "07-19": "Voy a estar rezando para que no leas todo esto completo, muchas son muy meh. Pero bueno, para que mis súplicas se escuchen. No perdamos la fé ohmm.",
    "07-20": "Entre hoy y mañana es el solsticio de verano, uys, mira el sol para ver cómo está en su punto máximo de iluminasión del año.",
    "07-21": "Y ya hoy acabó el solsticio de verano, el sólo cambió, tú tambien puedes cambiar wuu.",
    "07-22": "Me cree otra cuenta del brawl por tu culpa, no dejes que se quede sola toda la vida, es súplica.",
    "07-23": "Hay cosas que escribí porque sabía que no las vas a alcanzar a ver. Sólo por amor al arte.",
    "07-24": "Sin ti, los hospitales se quedarán sin personas que atender, no puedes desapareces así como así sin dar una explicación sobre por qué dejarás de ir a los hospitales.",
    "07-25": "Yo también te extrañaría, necesito también un rembolso _ _",
    "07-26": "SI TÚ NO EXISTES, quién le va a dar una mejor vida a los huevos de pollos? TT Compra otros, yo creo que esta sí será la buena",
    "07-27": "Hoy es el día de sacar a tus plantas a pasear, tú probablemente no tengas plantas, pero tu madre sí. Así que mueve un milimetro esa planta y acompañala fuera.",
    "07-28": "No me has hablado suficiente de mancha, quería incluirla en alguna parte de la página, pero no tenía suficiente información, sólo que juega con Charlote. So, no te puedes ir sin hacerle una biografía a Mancha para tener más contexto 😭.",
    "07-29": "Nadie más comprenderá los prepusios recién extripados como tú. No serán simps de onvres boxeadores, ni tendrán tu mentalidad de (no) tiburón.",
    "07-30": "Hoy es el día de la amitad, te voy a dar 6 aminopesos para que sigamos siendo amikitos, shi? 🥺",
    "07-31": "El gordo, cuando lo esterilizaron, se puso super flaco, ¿le importó? no, se orinó en mi cama y semanas después volvió a su peso normal. Si una quitada de huevos y otra herida que tenía, no vencieron al gordo y pudo seguir obseso, tú puedes hacer lo mismo. Para que entiendas este testimonio, te puedo pasar al gordo, el sobrevivió a eso y más 😝.",
    "08-01": "Ya estás en la edad de groomear a niñas de secundarias, no te vayas sin darles el desarrollo de personaje y decirles que son muy maduras para su edad.",
    "08-02": "Quizá y si decides caer de un piso 20, quizás seas de las únicas personas que sobreviven a algo así, será mayor tu sufirmiento si no lo logras y eso sólo te hará arrepentirte. No va a bastar con el dolor que le causas a las personas por intentarlo, sino que también será doloroso verte volver a tratar y probablemente volver a fallar.",
    "08-03": "El corazón humano genera la suficiente energía como para mover un camión. Así que si algún día estás sin energia o tristen, sácate el corazón para que sea el nuevo motor de un camión, si tú no quieres esa energía, un camionero con 9989 km a recorrer, si la quiere.",
    "08-04": "Probablemente el universo colapsará en 18 mil millones de años no por enfriamiento térmico, sino por no haber podido hacer a alguien igual que tú.",
    "08-05": "Sabes cosas que no sabes que sabes, así que sígueme guardándome el secreto. No te silenciaré, así que tú tampoco lo hagas.",
    "08-06": "Hay personas que se sienten bien contigo (yo) sin que tú lo sepas. Quédate por ellas (por mi), y por ti.  Y por las naranjas mecánicas.",
    "08-07": "Imagina que Nietzsche tenía razón y vas a vivir esta vida, exactamente igual, infinitas veces. Los mismos traumas, las mismas noches de insomnio, la misma canción en tu cabeza. PERO, si decides dejar de inhalar oxígeno, volverás a tener la misma muerte por tu propia mano. La gracia está en que, si te suicidas en esta iteración, en la próximas volverás aqui, leyendo lo mismo, preguntándote de nuevo cuánto de coca me metí. ¿No sería más divertido (si rodara? JAJSJ mentira) quedarse, sólo para ver si en el próximo ciclo lo hacer mejor? (no, será igual, pero el chiste es intentarlo).",
    "08-08": "Es el día del gato, celebra a Charlote, te enviaré una foto de Niagas y Miauser con sombrero, espera a que me despierte, te llegará pronto.",
    "08-09": "Imaginemos que eres un gato. No tienes que preocuparte por la vida, sólo porque no te castren, creo que tú estás viviendo mejor vida que los gatos, los cuales son obligados a perder su huevitos mientras que tú vives con tus huevos.",
    "08-10": "Me parece gracioso, rara vez hablo con una persona y todos los años me habla el día de su cumpleaños para decirme cómo le fue JAJSJA, indirectamente espero la fecha de su cumple para ver qué le regalaron. Así que no lo sé, ¿quieres que te envíe sobre cómo fue mi cumple para que te quedes un año más con un mes y 3 días más?.",
    "08-11": "No sé vro, únete a mi religión, el pastafarianismo, somos buena honda y aceptamos más subditos que quieran seguir la palabra de nuestro señor espagueti",
    "08-12": "Hoy es el día mundial de la juventud, aunque ya no seamos tan jovenes JAJSJA, disfruta un rato largo hoy. Me gustaría decir que no te truenan las rodillas, pero a este punto problablemente tengas un hueso roto, un músculo desfazado o algo.",
    "08-13": "Un paciente veía a su esposa y pensaba que era un sombrero. ¿No es eso lo que hacemos todos después de 10 años de relación? Si el cerebro puede engañarte para ver sombreros donde hay amor, también puede engañarte para ver razones donde no hay.",
    "08-14": "Hay unas bacterias que causan úlceras, pero en su tiempo fue algo que no se creyó y los llamaron loquitos. Uno de sus investigadores decidió vivir la vida punk y se bebió la bacteria... :D, le dio gastritis, se curó con un antiniótico y ganó el premio nobel en 2005 :D. No lo imites, pero si en algún momento puedes arrisgarte para probar tu punto (no a ese extremo, porfas), pero ningún motivo, supongo, arriesgarte puede ayudarte a ganar un nobel :D (De nuevo, no lo intentes).",
    "08-15": "El otro día me comí un tamal oaxaqueño, jusgué mal a los oaxaqueños, que deliciaa. Posta, si algún día puedes probarlos, hazlo, así que hoy tu motivo son tamales oaxaqueños.",
    "08-16": "Las ratas pueden reír cuando les hacen cosquillas, si tienes un mal día, dile a alguien que te haga cosquillas, tú sabes que te reirás, rata -3-.",
    "08-17": "Camus dijo que el suicidio era el único problema filosófico serio. Ok, no seas un problema filosófico, qué pereza. Mejor sólo ve tiktoks. Destruye tu cerebro y después existe.",
    "08-18": "Si hoy no hiciste nada útil, piensa que a veces los cables también están enredados y aún así funcionan. Tú también.",
    "08-19": "Me voy a meter a hacer fermentaciones, y sé que probablemente alguna bacteria se meta en ellas y me termine dando diarrea durante un mes, ¿me importa? no, porque viva la vida punk, que pase lo que tenga que pasar.",
    "08-20": "Aún quedan ventanas que no te han visto temblar. La lámpara parpadea como si también estuviera cansada. Pero no se apaga. Tu voz, incluso rota, aún deja marcas en el aire. A veces puedes parecer hecho vidrio sucio, pero igual brillas cuando alguien enciende el sol. -sin querer- justo al pasar por tu mundo.",
    "08-21": "No estás solo aunque no veas a nadie. A veces alguien piensa en ti y no dice nada. A veces tú también haces eso probablemente. Que sepas que a partir de ahora pensaré en tí una vez al segundo ;p.",
    "08-22": "Hoy podría ser el día ne que los pulpos decidan salir del mar e interactuar con los humanos, los japoneses cumplirían sus fetiches y tú si es que también tienes fetiche con pulpos, podrías hacer que te den una pulpo mamada.",
    "08-23": "Hace un tiempo pedí la condonación de mi inscripción diciendo que tenía problemas con el transporte y me dieron la condonación del 100%, quizá el próximo puedas ser tú cro, nunca pierdas la fé.",
    "08-24": "Muere de pasión, no aburrimiento vro.",
    "08-25": "Vro, si algún día te sientes mal recuerda que YO me pasé 2 meses tratando de hacer la historia y el dibujo de Yuu-chan. Esto lo dejaré, inicialmente iba a hacer un minijuego de un femboy, pero me llamaste down y dejé de hacerlo AJSJAJJS, te amo corazón -3-.",
    "08-26": "Volviendo al día anterior, yo soy la persona que simpre agradecerá que estés vivo aunque diga que no me agrades, y no te diré que vivas por mi, ni mucho menos 🤢. Pero que sepas que hay alguien que recuerda que existes ohmm.",
    "08-27": "Respecto al día anterior (sí, no quiero seguir escribiendo motivos), desde mayo aprox (no tan así, pero recordé tu cumpleaños desde hace dos meses, realmente llevo unos días stalkeandote) pensando en ti, así que eso :p, qué desgracia mi vida. Debí de hacer la novela y no esto TT.",
    "08-28": "Si esperas que tu muerte le enseñe algo al mundo, olvídalo. El mundo seguirá girando, si alguien te hizo daño, seguirá viviendo sin remordimientos, las personas que te quieren eventualmente tendrán que seguir aún si no quieren, tú sólo serás un fantasma de lo que pudo haber sido. La muerte no equilibra las cosas; sólo las rompe. Si quieres ver cómo siguen las cosas, tienes que estar vivo para presenciarlo.",
    "08-29": "Los gatos no comprenden a los espejos pero siguen intentando entender cómo funcionan, so, tú puedes tratar de entender tu vida, idk.",
    "08-30": "Una cosa que noté hace hoy, es que si quieres sentirte vivo y disfrutar una experiencia en tu boca, debes de tomar algo amargo. Siento que por ejemplo, con el agua de limón, la dejas en tu boca unos segundos, tienes la sensación del ácido y después haces una cara rara aún sintiendo el sabor del agror. A diferencia del dulce que hace que quieras más, lo agrio hace que te esperes un momento para dar el siguiente sorbo, por ende, si en algún momento quieres disfrutar de los sabores en tu boca para tomarle ganas a la vida, hazlo con algo agrio (aunque dudo que eso te den ganas de vivir).",
    "08-31": "Me gustan los fósiles, durante mucho tiempo he tenido una mentalidad medio x, si alguien a quien aprecio, de ser posible, me gustaría tener una parte de esa persona. Marie Curie conservó la ropa ensangrentada de su esposo y no la pudo quemar sin la ayuda de su hermana. Si algún día no quieres seguir, déjame un huesito u algo :P. Los recuerdos no son suficentes, quiero tu páncreas para el recuerdo.",
    "09-01": "Las mariposas recuerdan olores que olieron cuando eran orugas, ten una oruga e impregna tu olor en ella para que después tengas una mariposa, así que un deber más por el cuaál seguir viviendo.",
    "09-02": "Hoy creo que fue un buen día, aunque no paso nada relevante. Pero el cielo existe, las frutas también, los bigotes de chocolate tambien, y tú sigues aqui. Que reconfortanete.",
    "09-03": "Sobre los recuerdos y por qué quiero un huesito tuyo (mentiraaa), la mayor parte de las cosas que yo podría tener de tí son recuerdos y aunque la mayor parte están dentro de aplicaciones, mi mente eventualmente te irá olvidando, sólo llenará espacios vacíos hasta que se monte una historia diferente, no quiero que eso pase aún. Ni siquiera me enteraría de eso y probalebmente eso sólo haría que me ardiera la cola, para mi sólo vas a desaparecer de mi vida, no más.",
    "09-04": "Tras un estado de estrés emocional (usualmente se presenta en rupturas), el corazón puede desarrollar Síndrome de Takotsubo, el cuál literalmente afecta a la forma del corazóm. ASÍ QUE, si sigues con un mal de amores lo suficientemente fuerte, tomalo como un nuevo comienzo -nuevo corazón, nueva vida.",
    "09-05": "Puedes tomarte un té, ver un gato ajeno cortejando a tu gata y pensar 'ah, esto no es vida'. Porque sí, ver cómo cortejan a tu gatita no es bonito, creció tanto que ya tiene pegue, hace unos días estaba toda chiquita en su alfombra TT.",
    "09-06": "Si es un mal día, juega Hatoful Boyfriend, jamás te arrepentirás de tener un novio palomo 😍, será tú mejor experiencia, o si quieres mirate el gameplay. Y si es un buen día, también hazlo.",
    "09-07": "Un ankylosauirio con fracturas y deformaciones fue encontrado, estaban medio sanado, obviamente porque fue protegido por su gripo. Literalmente un dinosaurio con discapacidad fue cuidado por otros, y eso, ojalá algún día te fractures y llegue un ankylosaurio a cuidarte y darte besitos en la herida para protegerte -3-.",
    "09-08": "Hoy podrías conocer a alguien que huela bonito. Y si no, bueno, sigue siendo una posibilidad para mañana",
    "09-09": "'ira pa', de puro dar cringe sigo existiendo sin 7 balazos en la espalda, si yo puedes, tú también ppuedes. ¿O apoco quieres que te gane con una vida más larga?.",
    "09-10": "Tu existencia podría no ser gran cosa para el universo, pero para una persona, eres playlist favorita. O serás. Aún hay tiempo.",
    "09-11": "El sol no te juzga, la luna tampoco. Tú tampoco deberías hacerlo hoy. Si dos astros no te critícarían, tú como ser humano que depende de ellos, por qué lo harías? Si lo haces, no seas duro kya, porfas.",
    "09-12": "Preguntale a chat gpt cuál género de música de música preferírian los aliens y discute sobre el por qué, sólo para ser conocedor vya, después de eso, puedes respirar en paz un día más.",
    "09-13": "Si los tardígrados pueden sobrevivir al vacío del espacio.",
    "09-14": "Pessoa firmaba cartas de amor a sí mismo con nombres falsos JAJSJAS. Haz algo similar si sientes odio hacia tí, escribe un poema sobre algo que no te gusta de tu y firmalo con otro nombre, te hatean mucho TT.",
    "09-15": "La vida no es justa, es apenas más justa que la muerte, eso es todo..",
    "09-16": "No tienes que brillar hoy. Puedes ser una linterna sin pilas. Nadie dijo que tenías que ser útil todo el tiempo.",
    "09-17": "Si mueres, existe la posibilidad de que alguien revise tu celular... Te lo dejo caer.",
    "09-18": "El mundo está lleno de retrasados, ¿le vas a quitar el privilegio de tener a uno más?.",
    "09-19": "Probablemente tiemble en México, así que eso, no hay motivo porque en Chile siempre tiembla bruh.",
    "09-20": "El we Pitágoras se creó su propia religión que le rezaba a los números. Hoy date el tiempo, medita y observa un triángulo que se forma en tu vida diaria para ver si encuentras algo divino ahí.",
    "09-21": "Es el día internacional de la paz, pero el mundo no tiene paz, mal. HOY SERÉ TU PSICÓLOGA SI TIENES UN PROBLEMA, si quieres hablar, trataré de darte paz mentalmente (no, tengo la realidad bien distorcionada, te la dejaré peor).",
    "09-22": "Quedarte con vida es como mantener un archivo abierto en tu compu... por si se te ocurre algo más después, sé ese archivo en mi vida grr.",
    "09-23": "No es que todo vaya a mejorar, pero puedes hacer que al menos algo sí lo haga. Como cambiar de shampoo, a veces sirve.",
    "09-24": "Si la vida es una simulación, quédate un poco más para desbloquear el DLC(? JAJJA nah, no tiene sentido, quizá el dlc sea el desarrollo pero esta vez como fantasmas.",
    "09-25": "La vida no concede deseos, sólo revela lo que ya llevamos dentro. ¿Y si lo que crees que quieres (morir) es sólo el miedo a enfrentar lo que realmente quieres (seguir vivo)?",
    "09-26": "Puedes largarte cuando te aprendas el himno de rusia, creo que esa es una buena menta :D.",
    "09-27": "No te puedes ir sin saber qué tipo de gatito marciano eres _ _, quédate otro día más para preguntarle a las personas qué tipo eres, ver en cuál coinciden y finalmente saber el indicado ohmm.",
    "09-28": "Hay ranas que se congelan sompletamente en el invierto y reviven en primaver. Si ellas sobreviven a eso, tú puedes sobrevivir a más, tú estás grande, un animal más pqueño que tú podrá contigo?.",
    "09-29": "La vida puede ser una caca, pero al menos es impredecible. La muerte es lo mismo de siempre: monotonía infinita. Ni siquiera tendrás la libertad de odiarla. Es el fin de toda emoción, buena o mala. Si no te gusta estar aburrido, ¿De verdad prefieres eso a la posibilidad, aunque mínima, de que algo cambie... o de ver a un doctor simi en un strip club?.",
    "09-30": "Ligotti dice que la conciencia es un error evolutivo. Pero sigue escribiendo libros, o sea que ni el cree su propio cuento. Cielo, Ligotti, uno de los filósofos más pesimistas del mundo no se a suicidad, tú tampoco deberías, princesa.",
    "09-31": "Tal vez todo el mundo puede vivir más allá de lo que creen que son capaces..",
    "10-01": "La tierra fue una bola de nieve varias veces pero por la acumulación de CO2 de los volcanes, terminó descongelandose. Y la vida sobrevivió debajo del hielo, La vida aguantó congelada (o sea, si te congelas hoy, puedes seguir con vida después), si unas bacterias soportaron frio extremo, tú puedes soportar estar en el refrigerador de una persona que robará tus órganos _ _.",
    "10-02": "En la náusea, Roquentin descubre que la existencia es viscosa, gratuita y luego escribe unlibro sobre ello. Si la vida te da un náusea, conviértela en un libro. El asco al menos así puede servir de algo, forma de expresión o lo que quieras.",
    "10-03": "Levantarte, respirar, seguir adelante aunque a veces cueste mucho. Eso ya es un logro. No subestimes el coraje que requiere existir en un mundo complicado..",
    "10-04": "El día de los animales,amo, solo por hoy sonriele a las moscas, cucarachas, perros, mosquitos.. etc, hoy es su sía y tú colaborarás en hacerlos felices.",
    "10-05": "Los topillos praire celebran funerales por sus muertos. Muerete cuando le hayas mandado flores a almenos 90 topillos.",
    "10-06": "La miseria tiene fondo. Y si no lo tiene, al menos es interesante ver qué tan bajo puedes llegar. Hay algo casi científico en observar tu propia caída, como un experimento. Pero si cortas el proceso, nunca sabrás si estabas a punto de tocar fondo o de encontrar una salida.",
    "10-07": "El universo tiene leyes raras, como que si piensas mucho en alguien, aparece. Quédate a comprobarlo conmigo el día de hoy, si me piensas una vez, te daré 3 deseos -3-.",
    "10-08": "En el espacio, nadie puede oirte gritar, pero tus tripas sí harían eco en tu traje. Sonido es sonido",
    "10-09": "No te dajé ir hasta que puedas hacer una autobiografía completa desde el día en que te cumearon hasta el día en que decidas dejar toda atrás, debe de estar citada en apa, con testimonios y demás cosas, ¿shi?",
    "10-10": "Algo que me causó gracia fue que cuando el gordo casi se muere, lo di por muerto al primer día, creo que esa fue mi peor racha, tenía mis problemas en el ojo, llevaba con crisis de ansiedad, mi estrés con la uni, ocurrió algo de lo que jamás quedré hablar, pero a pesar de que en el primer momento dije 'me voy a matar', fue un pensamiento por el cuál me reprimí a mi misma. La muerte, al menos, para mi, nunca será la solución, el gordo tenía posibilidad de vivir aunque fueran mínimas, mi problema en el ojo se fue unas semanas después, las crisis bajaron, el estrés de mi uni no se redujo, pero lo pude sobrellevar, y el último problema no fue algo que pudiera revertir. Marzo fue el peor mes de mi vida, abril fue un mes donde me estuve recuperando y en mayo ya me estaba muriendo de amor JAJJSJA, o sea corazón, mis problemas no son relevantes pero yo los sentí como tal, por favor, nunca te des por vencido, tus problemas son importantes, lídia con ellos primero.",
    "10-11": "Si todo se siente plano, quédate para ver si al menos se arruga. Hasta las hojas lisas se doblan y vuelven a tener textura.",
    "10-12": "Cuando cortan una planta, por ejemplo, la lechuga, emiten sonidos de angustia. Si una lechuga puede gritar por su vida, tú también.",
    "10-13": "La mayor parte del oxígeno del planeta (50%) viene del plancton, ni siquiera tiene cerebro. No tiene sistema nervioso y mantienen al mundo vivo. Por su diminuta y vacía mundo, sigue haciendo que produzcan oxígeno respirandolo.",
    "10-14": "Una vez un tipo me dijo de tener una cita donde definieramos nuestros rizos JAJSJAJ, vive hasta que alguien te haga ese tipo de propuestas",
    "10-15": "Los ojos pueden reconocer más de 10 milones de colores. Como intuyo que no los viste todos, anota en una libreta cuántos haz visto hasta que llegues a los 10 millones.",
    "10-16": "Tal vez no pasó nada bueno hoy. Pero tampoco fue el fin del mundo. Eso ya es algo.",
    "10-17": "Me dijiste que no te gustaba tomarle fotos a tus mascotas porque te sentirías muy triste cuando mueran, no sé si estoy confundida porque fue hace tiempo que lo dijiste. Qué lindo, me alegra que aunque a mancha no le tomes tantaas fotos, a Charlotte sí, amo. Hoy no es un motivo para vivir, es decir mi motivo de vida (fotos de Charlotte)",
    "10-18": "Algo que me recordó el día anterior, cuando tú me dijiste eso me causó gracia después (no por mofa). Tuve 1 loro que se murío después de 2 días en mi casa, y no sé por qué lo asocié a tomar fotos (el primer día le tomé una foto y el segundo no). Entonces con mi segundo loro, le tomé fotos todos los días, cuando lo olvidaba, le tomaba una foto rápida porque para mí fue una forma de decir 'sigues vivo', si algún día quieres recordar que estás vivo, tómate una foto jaja.",
    "10-19": "El dolor constante no es un fracaso, es una señal de que sigues resistiendo. Aunque qué mejor que nosentirlo, espero que si estás en una situación dificil, pronto puedas solucionarlo",
    "10-20": "Si no decides escribir tu autobiografía y por alguna razón, alguien quiere hacerla sobre ti, que sepas, que probablemente la va a escribir una persona que nunca te entendió",
    "10-21": "¿Sabes que ese sueño jamás se cumplirá? Perfecto. Conviértelo en un altar privado al que le prendas velas los domingos. Colecciona fracasos como si fueran reliquias de un santo inexistente. La felicidad es efímera, pero el autoengaño estético es eterno.",
    "10-22": "En méxico hay unas mujeres que se llaman 'madres buscadoras', ellas se centran en buscar a personas desaparecidas porque sus familiares desaparecieron y quieren darle paz a otras personas buscando restos o personas abandonadas en lugares medio turbios. Es algo bonito, ellas saben que cada día que salen a explorar, algún día pueden a encontrar los restos de sus familiares, pero igual siguen. No sé a qué quería llegar con esto, sólo que es algo que me parece lindo.",
    "10-23": "No todo tiene sentido. Pero si lo tuviera, ¿no querrías estar ahí para fingir que lo entiendes también?",
    "10-24": "Hay días donde el único logro es no haber gritado. Felicidades por ese autocontrol que nadie va a reconocer (no le pegues a naide porfis, ndi no al maltrato mi amor, yo sé que tú no eres así TT).",
    "10-25": "Porque alguien a quien ni siquiera conoces te escribió 365 razones para continuar (que las puedes considerar como razones o no), saqué a todas mis neuronas a pasear para sacarme 365 motivos.",
    "10-26": "PIENSAAA: Si fueras inmortal, tednrías que soportar por siempre a personas tontitas, el capitalismo, el comunismo, tu tipo de humor rancio y tus propios errores repitiéndose. La muerte es un lujo. Pero si te suicidas, lo desperdicias, no vivimos en un mundo inmortal así que aún no se considera un lujo. Mejor quédate y usa tu mortalidad: vive lo suficiente para ser testigo de cómo suceden las cositas, sabiendo que tarde o temprano, todos se pudrirán contigo -3-.",
    "10-27": "Si una persona a la cual aprecias mucho, se fuera por elección propia y por su propia mano, te sentirías mal, impotente por no ayudarlo mientras podías. Si te sientes mal, hablalo con alguien que te aprecie, quizá no puedan darte una solución rápida, pero da un poco más de tiempo.",
    "10-28": "La tristeza no es una señal de que algo está mal en ti; es una señal de que algo te importó. Y eso, en un mundo indiferente, es casi milagroso.",
    "10-29": "Si el principito hubiera sido un adulto, habría dicho: 'Lo esencial es invisible a los ojos... porque probablemente ni existe'. Pero igual le daría de beber al cordero, por si acaso.",
    "10-30": "HOY ES LA NOCHE DE LA NEVERA EMBRUJADA JAJJS, ve y limpia tu refri, no vaya a ser que se te meta un fantasma en él.",
    "10-31": "ES HALLOWEN, no hay más razones para existir, amo que en estos tiempos suban más contenido. ¿QUIERES VER CREEPYPASTAS CONMIGO? :3 Mentira, disfruta haciendo lo que sea que hagas hoy :3. Bonito día",
    "11-01": "Hoy es el día de muertos, aún no quiero dejarte una vela ni nada. Además, no sé cuál es tu comida favorita, tu dulce favorito o tu bebida favorita. Sin eso no te puedo hacer un altar, así que este no sea el día en que te vas mua.",
    "11-02": "Hoy es el día de muertos pero respecto a niños, no sé, si tienes a un sobrino o a un ñiño que quieres, dale un abracito, me da tristeza.",
    "11-03": "¿Por qué escuchar música o mirar el cielo si no sirve para nada? Precisamente por eso. Lo inútil es lo único que nos salva de ser máquinas.",
    "11-04": "Si sientes que todo da igual, piensa en esa sensación rara de abrir una bolsa de pan y que aún quede uno suave. Eso: aún hay cosas que no te decepcionan.",
    "11-05": "Tus médula ósea trabaja todo el tiempo para mantenerte vivo. Tus propias células no se rinden, tu sangre probablemente está más motivada que tú.",
    "11-06": "¿Pasas la vida esperando el amor, el éxito, la revolución? Deja de esperar. Ahora todo lo que hagas será por puro capricho, no por un futuro imaginario. Si no hay sentido, tampoco hay presión.",
    "11-07": "Las vacas tienen mejores amigas y se estresan cuando están separadas. Si tú te vas de mi vida, también me estresaría",
    "11-08": "En crimen y castigo, Raskólnikov descubre que el dolor no es un accidente, sino el precio de ser consciente. Dostoi creía sufrimiento nos hace humanos, es el único terreno donde dios y el hombre se encuentran. Si te suicidas, te pierdes la única cosa que te conecta con lo divino; la capacidad de sentir agonía y quizá, transenderla.",
    "11-09": "A veces sólo necesitas una siesta. Y después otra. Y luego verás que ya es mañana y tal vez, sólo tal vez, ya no duele tanto..",
    "11-10": "Se me borraron como 100 motivos y los estoy volviendo a hacer, no se me acabará el mundo, ni me desanimaré por eso. Si hay algo que sale mal pero puedes volver a hacer, hazlo con tristeza si puedes, al menos.",
    "11-11": "A veces estás bien, a veces estás como sopa fría: existes, pero sin sabor. Aún así puedes reconfortar a alguien.",
    "11-12": "Puedes esperar a que la muerte te borre, o puedes elegir qué destruir antes: relaciones tóxicas, expectativas, la idea de que debes ser feliz.",
    "11-13": "Dorian vendió su alma para ser joven, y al final se pudrió por dentro. Si te vas a autodestruir, no lo hagas con tu pinta tercer mundista. Hazlo con glamour victoriano, compra un espejo antiguo y mírate en él miestras bebe jugo de uva pq eres pobre",
    "11-14": "Hay una especie de rana que se pensó extinta desde los 80s, peroo, fue encontrada viva en 2020. Obviamente algunas especies extintas están ocultas, vivas en lugares remotos.ASÍ QUE, hablemos de que esto sirve para hablar de lo falso que es dar por perdido algo porque no lo ves, así que eso.",
    "11-15": "No es que todo vaya a mejorar, pero puedes hacer que al menos algo sí lo haga. Como cambiar de shampoo, a veces sirve.",
    "11-16": "Hay un meteoríto (ALH84001) tenía microestructuras que parecían bacterias marcianas. La nasa hizo algo para decir que era evidencia de marte, pero luego otros científicos sólo dijeron 'eso es contaminación de la Tierra, vro', siguen sin ponerse de acuerdo. Pero pongamos en el supuesto de que sea cierto lo que dice la nasa y poniendo en el hipotético de que sea un meteórito de donde comenzó la vida en la tierra (no lo es), pero si lo fuera, serías realmente una criatura de marte, eww, firma mi nalga antes de que mueras porfas, estoy buscando firmas de personas de marte (como no es posible que me firmes por la distancia, espera hasta el din de los tiempos).",
    "11-17": "No lo sé, quizá deberías de vivir sólo porque las gallinas existen.",
    "11-18": "Los recuerdos, los traumas, las personas que ya no están… son prueba de que algo ocurrió. Y eso es más que lo que tendrás en la muerte.",
    "11-19": "EL DIA DE LOS SKIBIDI TOILEDS, es el del retrete pero shh, suficiente razón por hoy.",
    "11-20": "Los gatos no pueden saborear lo dulce. Así que saborea las cosas por Charlotte",
    "11-21": "Si hoy te sientes raro y sin ganas, recuerda que la incomodidad también es parte del proceso. Como cuando te sientas en una silla mojada y no dices nada. Pero igual te secas, eventualmente.",
    "11-22": "Desde los estoicos hasta los poetas malditooos, todos han jugado con la idea. Pero si te matas, solo serás un cliché más _ _. ¿Tú acto de reveldía va a ser tan predecible como final de telenovela? Mejor roba la idea y transformate en Dio..",
    "11-23": "Los delfines nombran a sus amigos con silbidos únicos y tú dejas en visto a media parte de tus amikitos bruh. Un delfín valora más sus amistades que tú.",
    "11-24": "Un atardecer que te dejará sin aliento, un libro que te hará llorar, un abrazo inesperado que te hará sentir menos solo. Hay momentos hermosos que aún no han llegado, y tú mereces estar ahí para vivirlos.",
    "11-25": "Aunque parezca inhóspito, puede haber algo",
    "11-26": "La mayor parte de las razones aqui no son profundas. Puedes quedarte por pura terquedad o morbo, es suficiente razón. Realmente deberías de crear tu propia razones, que quizá ya tengas, si no la tienes, no te veas en la obligación de tenerla, no es necesario tenerla.",
    "11-27": "Hoy no me enciaste tiktoks (el día en que escribo esto), voy a dejar los otros motivos que involucraban esto porque en algún momento tenían sentido. Gracias papu, sentía presión de estar buscando tiktoks para enviarte, lamentablemente mi fyp no va con el tipo de tiktoks que te pudieron haber gustado.",
    "11-28": "Las estrellas de mar no tienen cerebro, tú tampoco, así que es prueba que incluso en ciercunsancias como esa, la vida puede seguir.",
    "11-29": "Llevo haciendo esta lista en mi clase de promagramación, nuestra ahora calificación está balanceandose por hacerme pato en toda la clase.",
    "11-30": "Las nutrias guardan su piedra favorita en un compartimiento de su piel para utilizarla como arma TT. Hazlo igual pero que tu arma sean tus ganas de vivir hasta que seas viejo, tu truco secreto vaya.",
    "11-31": "En los demonios, Krillov se mata para probar su libertad absoluta: Si dios no está, el hombre es dios, y su suicidio es su último acto de voluntad. Pero, ¿Y si te equivocas? Dostoyevski jugó con eso: El suicida no teme a la muerte, teme que la muerte no sea el final. Y si el infierno es real, será irónico que el acto definivo de control te condene al tormento eterno. Aunque dudo que esa sea tu voluntad, así que olvídalo",
    "12-01": "AYYYY, siempre he sido fan de dejar falsos diarios, pistas absurdad o algo para que tus familiares futuros puedan leer, que les hagas pensar si estabas bien (que claramente no, así que sólo haz dudar más).",
    "12-02": "Algo que he sentido que haces, y sinceramente espero que esté equivocada, es que probablemente tomas alcohol para olvidar. Si es que lo haces, sabes que no es la respuesta, aunque duela, trata de procesar el problema en tu mente, siento que es más sano que olvidar continuamente ingiriendo cosas. Si algún día quieres hablar, puedes ir conmigo, no doy los mejores consejos, pero si quieres que te escuchen y te den opinión miada, sólo dime que hablarás en serio.",
    "12-03": "Hay una diferencia entre rendirse y descansar. Si hoy estás acostado y medio llorando, técnicamente estás en pausa dramática. Muy cinematográfico de tu parte, qué lindo.",
    "12-04": "¿Odias tu trabajo? Quédate para ver cómo quiebra la empresa. ¿La humanidad se dirige al abismo? Compra palomitas y espera el colapso con curiosidad científica.",
    "12-05": "Antes de rendirte, pregúntate: ¿realmente quieres darle el gusto al universo con un final predecible? Hasta Joseph K. luchó contra un sistema absurdo antes de dejarse apuñalar 'como un perro'.",
    "12-06": "Creo que ya lo sabes, la creatividad está correlacionada con un ligero desrden mental, creo que tienes mucha imaginación en algunos aspectos. Por tanto, tienes TDAH (no), diagnósticado por mi, ¿te doy tu certificado? Vive un día más hasta que descubras todo sobre el TDAH, por amor al arte.",
    "12-07": "En 1909 para demostrar que el vuelo era seguro, volaron un cerdo en Londres :D, su foto fue usado por científicos aeronáuticos para demostrar que si vuela un cerdo, puede volar un humano. Ok, si un cerdo puede vivir, tú también puedes.",
    "12-08": "Tu cuerpo tiene suficientes minerales como para hacer un clavo, así que al menos si te mueres, si pides que te saquen los minerales para hacer un clavo, damelo y lo utilizo (así eres útil incluso en tu muerte).",
    "12-09": "Estuve viendo por mil y una partes ideas de motivaciones y la mayor parte tenían muy pocas, eventualmente se olvidaban de eso o eran las más típicas. La mayor parte de las personas no tenemos una motivación y es aún más difícil tratar de que otras personas simpatizen con las que tenemos, en los comentarios siempre había alguien quejandose de que el no podía por x o y. Esto sólo es un desahogo, yo sé que ni siquiera leerás esta parte -lo cual agracezco, esto lo hice porque se me dio la gana, no porque supiera que esto cambiaría tu vida. Espero que hagas algo lindo por otras personas -aunque probablemente ya lo haces.",
    "12-10": "Ozamu Dazai se suicidó, pero esto fue después de haber escribto 20 libros, tienes mi permiso de pedir muerte doble cuando escribas 21 libros con coerencia, te lo encargo (no).",
    "12-11": "Aunque yo en lo personal soy atea, espero que tú creas en algo. Usualmente no creer en nada te termina llevando a estar en un estado de depresión, y aunque probablemente ya hayas estado en este tipo de situaciones, espero que vivas en esa ignoracia. Mi perspectiva sobre ti quizá sea un poco mala y no te veo capaz de nada (mentiraaaa), no te pido que me demuestres de lo que eres capaz a mi, espero que des un golpe de realidad en tu caso. Espero que tengas una buena vida, me agradas mucho y me ardería la cola si sé que estás pasando un mal rato. Ánimo",
    "12-12": "Hoy es mi santo, acompañame un día más para ir por un marichi y que me canten '¿qué le pasa a Lupita? No sé, ¿qué tiene Lupita? No sé, porfas, ¿no?",
    "12-13": "Este fue mi intento de decirte 365 veces que te pienso sin que suene demasiado.",
    "12-14": "Miré un estudio que decía que la microbiota está porquito relacionada con ser extrovertido o introvertido. Y me causó gracia, DESDE MI PUNTO DE VISTA, tú eres extrovertido, así que quizá tengas una microbiota con muchas bacterias diversas. Así que no te mates porque tus bacterías hicieron todo su trabajo para formarte, como para que les hagas el feo.",
    "12-15": "Algo que me a pasado en el último tiempo, es que después de reir mucho, de la nada comienzo a llorar. Supongo que debe de ser por el esrés u algo, pero me alivia hacerlo.",
    "12-16": "Las babosas marinas comen algas y roban sus cloropastos, así que se vuelven fotosintéticas, no es una decisión consciente. ¿No es curioso? Sólo eso, qué curioso jaj.",
    "12-17": "He estado teniendo una alergia horrible que no me deja vivi en paz, fack, PERO A PESAR DE ESO, continuó respirando porque el gordo tiene que tener a alguien que lo moleste TT.",
    "12-18": "Hay más formas de vida en tu ombligo que personas en el planeta, tienes una tierra dentro de tu ombligo, sigue viviendo para mantener su colonia.",
    "12-19": "Noté que me faltan poquitas, en un inicio se veía difícil, pero siento la dopamina recorriendo mi sangre aaaaaaa. No te des por vencido aaa. Me parece gracioso decir eso, siento que tú no te dejarías vencer más fácil JAJSJAJ, ok, perdón por mis consejos cacas, para la próxima me hago un curso.",
    "12-20": "El universo es tan absurdo que mañana podrías ganarte la lotería si te compras un boleto hoy, quizá, quizá.",
    "12-21": "Bueno, si no ganaste la lotería, nimodo, otros miles de personas tampoco la han ganado, así pasa. Mejor vuelve a apostar a Charlote, YO LA QUIERO, mantenla viva hasta que la recoja de sus sucias y algo repugnantes manos -3-.",
    "12-22": "La muerte puede esperar porque tiene todo el tiempo del mundo, tú no, perdiste ahí.",
    "12-23": "Porque nadie jamás tendrá tu grandiosa, magnífica, más que magnífica, resplandeciente, quizá iluminadora o tal vez ruin personalidad. Tu forma de ser retrasado no solo es única, es patrimonio emocional de la decadencia humana.",
    "12-24": "Hoy nació Jesús, no soy creyente pero me vale si me dan vacaciones. Así que no sé, viva cristo rey ohmm.",
    "12-25": "Nunca he celebrado navidad y siempre lo confundo con el 24, pero eu, si me dices que te esforzaste este año por ser un buen chico (KKASKK), prometo enviarte un pedazo de carbón, shi?",
    "12-26": "Me sintiría bastante inútil si después de hacer 365 razones (que puedan parecer razones o no), te sintieras con ganas de morirte y que esta lista no hubiera servido. Todos tenemos días malos, cuando los tienes probablemente no quieras ni existir. Sé que esto no será una página que mires regularmente y eso me pone algo triste jajsja. Pero al menos espero que si entraste sólo un día durante un segundo, te hubiera ayudado a sentirte una milesima mejor. Gracias por existir, aunque son palabras vacias de mi parte, hay alguien en el mundo que realmente sí aprecia tu existencia.",
    "12-27": "Si hoy te sientes vacío después de toda la parafernalia navideña, recuerda que el vacío no es lo peor. Peor sería que te guste el recalentado y ya no haya nada. Quédate para el pan de dulce.",
    "12-28": "Quizá sólo necesitas comer el recalentado para sentirte mejor, inténtalo.",
    "12-29": "Explora tu creatividaddddd, siempre me gusta ver cosas que hacen otros, siento que es ver cómo ven el mundo, me dejash vers shi hashes algo? mentira, pero sí puedes explorarlo vaya.",
    "12-30": "Mañana acabará este año, usualmente por estos tiempos da poquita depresión porque llega la realización de cómo pasa el tiempo, pero al menos no te quedas estancado en un día infinitamente. Nunca entendí porque las personas se hacen metas por estos tiempos, las metas las puedes hacer en cualquier lugar, Pero bueno, recuerda hacer tu cartita de metas, esconderla en algún lugar, guardar en tu calendario dónde está y cuando deberías de recoger la cartita para así el siguiente año enontrarla y ver si realmente cumpliste una mínima cosa de la lista.",
    "12-31": "Usualmente a algunas personas les da depresión porque se dan cuenta de que ya acabó el año cuando apenas ayer era febrero, espero que tú seas de esos. Siento que hay algo en esa realización, o sea, qué mal plan el del tiempo que no se detiene, pero, supongo que justo en este tiempo es por el cual las personas hacen sus propósitos. Quieren aprovechar el tiempo que les queda. Así que si sientes preocupación hoy, eso demuestra que al menos quieres vivir un poquito, ¿cierto? ¿cierto? cierto?????.",
};


const monthlyMotivations = {
    0: "Enero, un nuevo comienzo, ¡hazlo increíble!",
    1: "Febrero, mes del amor propio. ¡Te mereces lo mejor!",
    2: "Marzo, sigue creciendo, cada paso cuenta.",
    3: "Abril, no te rindas",
    4: "Mayo, el 10 de mayo, yo me desmayo, quién será mi caba-",
    5: "Junio, sólo un mes random",
    6: "Julio, el mes de tu cumpleaños wuu",
    7: "Agosto, ya pasó la mitad de año, pero esta puede ser otra mitad",
    8: "Wuuu, fiestas patrias",
    9: "Octubre, quizá te encuentres al diablo en el cerro",
    10: "Noviembre, penúltimo día del año, aprovéchalo",
    11: "Último mes y por tanto, navidad yey"
};

let currentMonth = 6;
let currentYear = 2025; 

function renderCalendar(month, year) {
    const currentDate = new Date(year, month, 1);
    if (currentDate < startDate || currentDate > endDate) {
        return;
    }

    const firstDay = new Date(year, month, 1).getDay(); 
    const lastDate = new Date(year, month + 1, 0).getDate(); 
    
   
    document.getElementById("month-year").textContent = `${getMonthName(month)} ${year}`;
    
    
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";

    // Generar días del mes
    for (let i = 0; i < firstDay; i++) {
        calendarDiv.innerHTML += "<div class='calendar-day'></div>"; // Espacios vacíos antes del primer día
    }

    for (let day = 1; day <= lastDate; day++) {
        calendarDiv.innerHTML += `
            <div class='calendar-day' onclick="showMotivation(${day}, ${month}, ${year})">${day}</div>
        `;
    }
}

function getMonthName(month) {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return months[month];
}

function showMotivation(day, month, year) {
    const dateStr = `${("0" + (month + 1)).slice(-2)}-${("0" + day).slice(-2)}`; 
    
    let motivationBox = document.getElementById("motivation-text");
    
   
    if (dailyMotivations[dateStr]) {
        motivationBox.textContent = dailyMotivations[dateStr];
    } else {
        motivationBox.textContent = monthlyMotivations[month] || "¡Sigue adelante, estás haciendo un gran trabajo!";
    }
}

document.getElementById("prev-month").addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById("next-month").addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear, currentDay);


