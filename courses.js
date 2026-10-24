/* V.I.V.A. Brezel — contenido del curso (A2 + B1.1) */
window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m1',
  level: 'A2',
  num: 1,
  title: 'Recuerdos, trabajo y mudanza',
  emoji: '🧒',
  lessons: [
    {
      id: 'a2-01',
      title: 'Erinnerungen',
      es: 'Recuerdos de infancia y familia',
      goals: [
        'Contar el pasado con el Perfekt (haben y sein)',
        'Usar war y hatte (Präteritum de sein y haben)',
        'Situar hechos en el tiempo: letzte Woche, nächsten Monat, jeden Tag',
        'Hablar de la infancia con früher, damals, als Kind, vor drei Jahren'
      ],
      grammar: [
        {
          h: 'Perfekt: el participio (Partizip II)',
          p: 'El <b>Perfekt</b> se forma con <span class="de">haben / sein</span> en 2ª posición y el <b>participio al final</b>. Los verbos regulares hacen <span class="de">ge-…-t</span>, los irregulares <span class="de">ge-…-en</span> (a menudo con cambio de vocal). En los separables, <i>ge</i> va entre el prefijo y la raíz. Los verbos con prefijo inseparable (be-, er-, ver-, ent-…) y los verbos en <b>-ieren</b> <b>no</b> llevan <i>ge-</i>. Es como el pretérito perfecto español (<i>he jugado</i>), pero en alemán hablado se usa para casi todo el pasado.',
          table: {
            head: ['Tipo', 'Infinitivo', 'Participio II'],
            rows: [
              ['regular', 'spielen', '<b>ge</b>spiel<b>t</b>'],
              ['irregular', 'essen', '<b>ge</b>gess<b>en</b>'],
              ['irregular (cambia la vocal)', 'trinken', '<b>ge</b>trunk<b>en</b>'],
              ['mixto', 'bringen', '<b>ge</b>brach<b>t</b>'],
              ['separable', 'ein|kaufen', 'ein<b>ge</b>kauf<b>t</b>'],
              ['separable irregular', 'an|rufen', 'an<b>ge</b>rufen'],
              ['prefijo inseparable', 'besuchen', 'besucht'],
              ['verbo en -ieren', 'telefonieren', 'telefoniert']
            ]
          },
          ex: [
            { de: 'Als Kind habe ich viel gemalt.', es: 'De niño pintaba mucho.' },
            { de: 'Meine Mutter hat jeden Tag Brot gebacken.', es: 'Mi madre horneaba pan todos los días.' },
            { de: 'Gestern habe ich meine Oma angerufen.', es: 'Ayer llamé a mi abuela.' },
            { de: 'Wir haben oft Karten gespielt.', es: 'Jugábamos a menudo a las cartas.' },
            { de: 'Hast du früher viel telefoniert?', es: '¿Antes hablabas mucho por teléfono?' }
          ],
          tip: 'En español dices <i>jugaba</i> o <i>jugué</i>; en alemán hablado ambos se dicen igual: <span class="de">Ich habe gespielt</span>. Recuerda: el participio va siempre al final de la frase.'
        },
        {
          h: 'Perfekt con haben o con sein',
          p: 'La mayoría de los verbos usan <span class="de">haben</span>. Usa <span class="de">sein</span> con verbos de <b>movimiento hacia un lugar</b> (gehen, fahren, kommen, fliegen), de <b>cambio de estado</b> (einschlafen, aufwachen, aufstehen, werden) y con <span class="de">sein, bleiben, passieren</span>. Los verbos con objeto directo (Akkusativ) casi siempre usan haben, y los reflexivos también.',
          table: {
            head: ['haben', 'sein'],
            rows: [
              ['la mayoría: spielen, essen, machen, sehen', 'movimiento: gehen → gegangen, fahren → gefahren, kommen → gekommen'],
              ['con Akkusativ: einen Kuchen backen → gebacken', 'cambio: einschlafen → eingeschlafen, aufstehen → aufgestanden, werden → geworden'],
              ['reflexivos: sich erinnern → hat sich erinnert', 'sein → gewesen · bleiben → geblieben · aufwachsen → aufgewachsen']
            ]
          },
          ex: [
            { de: 'Ich bin in einem Dorf aufgewachsen.', es: 'Crecí en un pueblo.' },
            { de: 'Wir sind jeden Sommer ans Meer gefahren.', es: 'Cada verano íbamos al mar.' },
            { de: 'Mein Bruder ist früh eingeschlafen.', es: 'Mi hermano se durmió temprano.' },
            { de: 'Ich habe das Spiel gewonnen.', es: 'Gané el juego.' },
            { de: 'Opa ist lange bei uns geblieben.', es: 'El abuelo se quedó mucho tiempo con nosotros.' }
          ],
          tip: 'Error típico: <span class="de">Ich habe nach Hause gegangen</span>. Si hay movimiento hacia un destino, usa <b>sein</b>: <span class="de">Ich bin nach Hause gegangen</span>.'
        },
        {
          h: 'Präteritum de sein y haben: war, hatte',
          p: 'Con <span class="de">sein</span> y <span class="de">haben</span> se prefiere el <b>Präteritum</b> en vez del Perfekt, también al hablar: <span class="de">Ich war krank</span> (no <i>Ich bin krank gewesen</i>). Equivale a nuestro imperfecto: <i>era, estaba, tenía</i>. Para contar cómo era algo o qué tenías, usa war y hatte; para lo que hiciste, usa el Perfekt de los demás verbos.',
          table: {
            head: ['Persona', 'sein', 'haben'],
            rows: [
              ['ich', 'war', 'hatte'],
              ['du', 'warst', 'hattest'],
              ['er / sie / es', 'war', 'hatte'],
              ['wir', 'waren', 'hatten'],
              ['ihr', 'wart', 'hattet'],
              ['sie / Sie', 'waren', 'hatten']
            ]
          },
          ex: [
            { de: 'Als Kind hatte ich einen kleinen Hund.', es: 'De niño tenía un perrito pequeño.' },
            { de: 'Damals waren wir sehr glücklich.', es: 'Entonces éramos muy felices.' },
            { de: 'Meine Oma war immer freundlich.', es: 'Mi abuela siempre era amable.' },
            { de: 'Warst du gestern im Kino?', es: '¿Estuviste ayer en el cine?' },
            { de: 'Wir hatten keinen Fernseher.', es: 'No teníamos televisor.' }
          ],
          tip: 'Las formas de <i>ich</i> y <i>er/sie/es</i> son iguales: <span class="de">ich war / er war</span>, <span class="de">ich hatte / sie hatte</span>. Sin -e ni -st extra en la 3ª persona.'
        },
        {
          h: 'Expresiones de tiempo: letzt-, nächst-, jed-',
          p: 'Con <span class="de">letzt-</span> (pasado), <span class="de">nächst-</span> (próximo) y <span class="de">jed-</span> (cada) las expresiones de tiempo van en <b>acusativo</b> sin preposición: <span class="de">letzte Woche</span>, <span class="de">nächsten Monat</span>, <span class="de">jeden Tag</span>. Con preposición (<span class="de">im, in der, am</span>) van en <b>dativo</b>. Para hablar del pasado: <span class="de">früher</span> (antes), <span class="de">damals</span> (entonces), <span class="de">als Kind</span> (de niño), <span class="de">vor + dativo</span> (hace…: <span class="de">vor drei Jahren</span>).',
          table: {
            head: ['', 'der (m)', 'die (f)', 'das (n)'],
            rows: [
              ['letzt- (Akk)', 'letzten Monat', 'letzte Woche', 'letztes Jahr'],
              ['nächst- (Akk)', 'nächsten Monat', 'nächste Woche', 'nächstes Jahr'],
              ['jed- (Akk)', 'jeden Monat', 'jede Woche', 'jedes Jahr'],
              ['con preposición (Dat)', 'im letzten Monat', 'in der letzten Woche', 'im letzten Jahr']
            ]
          },
          ex: [
            { de: 'Letzte Woche war ich bei meiner Oma.', es: 'La semana pasada estuve en casa de mi abuela.' },
            { de: 'Nächsten Monat ziehen meine Eltern um.', es: 'El mes que viene mis padres se mudan.' },
            { de: 'Wir fahren jedes Jahr ans Meer.', es: 'Vamos al mar todos los años.' },
            { de: 'Vor drei Jahren habe ich in Wien gewohnt.', es: 'Hace tres años viví en Viena.' },
            { de: 'Früher hatte ich ein rotes Fahrrad.', es: 'Antes tenía una bicicleta roja.' },
            { de: 'Damals war ich noch klein.', es: 'Entonces yo todavía era pequeño.' }
          ],
          tip: 'No digas <i>vor drei Jahre</i>: después de <span class="de">vor</span> (hace) va dativo, y el plural de dativo termina en -n: <span class="de">vor drei Jahren</span>.'
        }
      ],
      vocab: [
        { de: 'der Spielplatz', pl: 'die Spielplätze', es: 'el parque infantil', ex: 'Wir haben oft auf dem Spielplatz gespielt.', exes: 'Jugábamos a menudo en el parque infantil.' },
        { de: 'das Spielzeug', pl: 'die Spielzeuge', es: 'el juguete', ex: 'Mein liebstes Spielzeug war ein alter Teddybär.', exes: 'Mi juguete favorito era un viejo osito de peluche.' },
        { de: 'die Puppe', pl: 'die Puppen', es: 'la muñeca', ex: 'Meine Schwester hatte viele Puppen.', exes: 'Mi hermana tenía muchas muñecas.' },
        { de: 'das Brettspiel', pl: 'die Brettspiele', es: 'el juego de mesa', ex: 'Am Sonntag haben wir immer ein Brettspiel gespielt.', exes: 'Los domingos siempre jugábamos a un juego de mesa.' },
        { de: 'Verstecken spielen', es: 'jugar al escondite', ex: 'Als Kinder haben wir im Garten Verstecken gespielt.', exes: 'De niños jugábamos al escondite en el jardín.', note: 'spielt – spielte – hat gespielt' },
        { de: 'die Kindheit', es: 'la infancia', ex: 'Meine Kindheit war sehr schön.', exes: 'Mi infancia fue muy bonita.' },
        { de: 'die Jugend', es: 'la juventud', ex: 'In meiner Jugend habe ich viel Musik gehört.', exes: 'En mi juventud escuchaba mucha música.' },
        { de: 'das Baby', pl: 'die Babys', es: 'el bebé', ex: 'Als Baby habe ich nachts viel geschrien.', exes: 'De bebé gritaba mucho por la noche.' },
        { de: 'erwachsen', es: 'adulto', ex: 'Jetzt bin ich erwachsen und arbeite in einem Büro.', exes: 'Ahora soy adulto y trabajo en una oficina.' },
        { de: 'die Großeltern', pl: 'die Großeltern', es: 'los abuelos', ex: 'Meine Großeltern haben auf einem Bauernhof gelebt.', exes: 'Mis abuelos vivían en una granja.' },
        { de: 'die Oma', pl: 'die Omas', es: 'la abuela', ex: 'Meine Oma hat jeden Sonntag Kuchen gebacken.', exes: 'Mi abuela horneaba pastel todos los domingos.' },
        { de: 'der Opa', pl: 'die Opas', es: 'el abuelo', ex: 'Mein Opa hat mir Geschichten erzählt.', exes: 'Mi abuelo me contaba historias.' },
        { de: 'der Cousin', pl: 'die Cousins', es: 'el primo', ex: 'Mein Cousin hat in den Ferien bei uns gewohnt.', exes: 'Mi primo vivía con nosotros en las vacaciones.' },
        { de: 'die Geschwister', pl: 'die Geschwister', es: 'los hermanos', ex: 'Ich hatte als Kind zwei Geschwister.', exes: 'De niño tenía dos hermanos.' },
        { de: 'der Schulweg', pl: 'die Schulwege', es: 'el camino a la escuela', ex: 'Mein Schulweg war nur zehn Minuten lang.', exes: 'Mi camino a la escuela duraba solo diez minutos.' },
        { de: 'der Ausflug', pl: 'die Ausflüge', es: 'la excursión', ex: 'Letzten Sommer haben wir einen Ausflug an den See gemacht.', exes: 'El verano pasado hicimos una excursión al lago.' },
        { de: 'klettern', es: 'trepar, escalar', ex: 'Als Kind bin ich oft auf Bäume geklettert.', exes: 'De niño trepaba a menudo a los árboles.', note: 'klettert – kletterte – ist geklettert' },
        { de: 'malen', es: 'pintar, dibujar', ex: 'Ich habe als Kind gern Bilder gemalt.', exes: 'De niño me gustaba pintar cuadros.', note: 'malt – malte – hat gemalt' },
        { de: 'auf|wachsen', es: 'crecer (criarse)', ex: 'Er ist in einer kleinen Stadt aufgewachsen.', exes: 'Él creció en una ciudad pequeña.', note: 'wächst auf – wuchs auf – ist aufgewachsen' },
        { de: 'sich erinnern (an + Akk)', es: 'acordarse (de)', ex: 'Ich erinnere mich noch gut an meinen ersten Schultag.', exes: 'Recuerdo muy bien mi primer día de escuela.', note: 'hat sich erinnert' }
      ],
      phrases: [
        { de: 'Ich erinnere mich noch gut an …', es: 'Recuerdo muy bien …', use: 'recordar' },
        { de: 'Weißt du noch, wie wir früher …?', es: '¿Te acuerdas de cómo antes …?', use: 'recordar' },
        { de: 'Als Kind habe ich oft …', es: 'De niño yo a menudo …', use: 'contar infancia' },
        { de: 'Früher war alles anders.', es: 'Antes todo era distinto.', use: 'comparar' },
        { de: 'Damals hatte ich keine Sorgen.', es: 'Entonces no tenía preocupaciones.', use: 'contar infancia' },
        { de: 'Vor drei Jahren bin ich umgezogen.', es: 'Hace tres años me mudé.', use: 'situar en el tiempo' },
        { de: 'Letzte Woche war ich bei meinen Großeltern.', es: 'La semana pasada estuve con mis abuelos.', use: 'situar en el tiempo' },
        { de: 'Jeden Sommer sind wir ans Meer gefahren.', es: 'Cada verano íbamos al mar.', use: 'hábitos pasados' },
        { de: 'Das war eine schöne Zeit.', es: 'Fue una época bonita.', use: 'valorar' }
      ],
      dialog: {
        title: 'Ein altes Foto',
        lines: [
          { s: 'A', de: 'Murat, schau mal! Ein altes Foto von unserem Spielplatz.', es: '¡Murat, mira! Una foto vieja de nuestro parque infantil.' },
          { s: 'B', de: 'Oh ja! Früher haben wir dort jeden Tag gespielt.', es: '¡Ah, sí! Antes jugábamos allí todos los días.' },
          { s: 'A', de: 'Weißt du noch? Du bist immer auf den hohen Baum geklettert.', es: '¿Te acuerdas? Siempre trepabas al árbol alto.' },
          { s: 'B', de: 'Stimmt, und du hattest Angst. Du bist unten geblieben.', es: 'Es verdad, y tú tenías miedo. Te quedabas abajo.' },
          { s: 'A', de: 'Ja, damals war ich noch klein. Letzte Woche habe ich meine Oma besucht, sie hat das Foto gefunden.', es: 'Sí, entonces yo todavía era pequeña. La semana pasada visité a mi abuela, ella encontró la foto.' },
          { s: 'B', de: 'Wie schön! Wie geht es ihr?', es: '¡Qué bonito! ¿Cómo está ella?' },
          { s: 'A', de: 'Gut. Nächsten Monat lädt sie uns zum Essen ein.', es: 'Bien. El mes que viene nos invita a comer.' },
          { s: 'B', de: 'Super! Vor drei Jahren war ich zuletzt bei ihr. Das war eine schöne Zeit.', es: '¡Genial! Hace tres años estuve con ella por última vez. Fue una época bonita.' },
          { s: 'A', de: 'Dann gehen wir zusammen hin.', es: 'Entonces vamos juntos.' },
          { s: 'B', de: 'Gern! Ich bringe das Foto mit.', es: '¡Con gusto! Llevo la foto.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Gestern ___ ich lange geschlafen.', o: ['bin', 'war', 'habe'], a: 2, why: 'schlafen forma el Perfekt con haben: ich habe geschlafen.' },
        { t: 'mc', q: 'Letzte Woche ___ wir nach Wien gefahren.', o: ['haben', 'sind', 'waren'], a: 1, why: 'fahren expresa movimiento hacia un lugar y forma el Perfekt con sein.' },
        { t: 'mc', q: 'Wir haben gestern meine Oma ___.', o: ['gebesucht', 'besuchen', 'besucht'], a: 2, why: 'Los verbos con prefijo inseparable (be-) no llevan ge-: besucht.' },
        { t: 'mc', q: 'Als Kind ___ ich einen kleinen Hund.', o: ['war', 'hatte', 'habe'], a: 1, why: 'Para decir que tenías algo en el pasado se usa el Präteritum: ich hatte.' },
        { t: 'mc', q: '___ Monat ziehen wir um.', o: ['Nächster', 'Nächste', 'Nächsten'], a: 2, why: 'Expresión de tiempo en acusativo, der Monat → nächsten Monat.' },
        { t: 'mc', q: 'In der ___ Woche war ich in Hamburg.', o: ['letztes', 'letzten', 'letzte'], a: 1, why: 'Después de in der (dativo femenino) el adjetivo termina en -en: in der letzten Woche.' },
        { t: 'gap', q: 'Er ___ gestern nach Berlin gefahren. (sein)', a: ['ist'], why: 'fahren con destino se conjuga con sein: er ist gefahren.' },
        { t: 'gap', q: 'Wir ___ als Kinder oft Verstecken gespielt. (haben)', a: ['haben'], why: 'spielen forma el Perfekt con haben; con wir: wir haben.' },
        { t: 'gap', q: 'Ich habe meine Tante vor zwei ___ besucht. (das Jahr)', a: ['jahren'], why: 'Después de vor va dativo; el plural de dativo termina en -n: vor zwei Jahren.' },
        { t: 'gap', q: 'Als ich klein war, ___ ich keine Angst vor Hunden. (haben, Präteritum)', a: ['hatte'], why: 'Präteritum de haben con ich: hatte.' },
        { t: 'gap', q: 'Gestern ___ wir den ganzen Tag im Kino. (sein, Präteritum)', a: ['waren'], why: 'Präteritum de sein con wir: waren.' },
        { t: 'order', es: 'La semana pasada visité a mi abuela.', de: 'Letzte Woche habe ich meine Oma besucht.', why: 'Si la oración empieza con una expresión de tiempo, el verbo conjugado va en 2ª posición y el participio al final.' },
        { t: 'order', es: 'Antes no teníamos computadora en casa.', de: 'Früher hatten wir keinen Computer zu Hause.', why: 'früher ocupa la 1ª posición, luego el verbo (hatten) y el sujeto.' },
        { t: 'order', es: 'De niño trepaba a menudo a los árboles.', de: 'Als Kind bin ich oft auf Bäume geklettert.', why: 'klettern usa sein; el participio geklettert va al final.' },
        { t: 'tr', es: 'Hace tres años estuve en Berlín con mi hermana.', de: ['Vor drei Jahren war ich mit meiner Schwester in Berlin.', 'Ich war vor drei Jahren mit meiner Schwester in Berlin.'], why: 'vor + dativo plural (Jahren); estar en un lugar en pasado: war.' },
        { t: 'tr', es: 'De niño tenía una bicicleta roja.', de: ['Als Kind hatte ich ein rotes Fahrrad.', 'Ich hatte als Kind ein rotes Fahrrad.'], why: 'Präteritum de haben (hatte) y acusativo neutro: ein rotes Fahrrad.' },
        { t: 'fix', q: 'Ich habe gestern nach Hause gegangen.', a: ['Ich bin gestern nach Hause gegangen.'], why: 'gehen con destino forma el Perfekt con sein.' },
        { t: 'fix', q: 'Er hat gestern seine Oma angeruft.', a: ['Er hat gestern seine Oma angerufen.'], why: 'anrufen es irregular: el participio es angerufen.' },
        { t: 'fix', q: 'Letzten Woche war ich krank.', a: ['Letzte Woche war ich krank.'], why: 'die Woche es femenino: letzte Woche en acusativo.' },
        { t: 'match', pairs: [['der Spielplatz', 'el parque infantil'], ['das Spielzeug', 'el juguete'], ['die Großeltern', 'los abuelos'], ['die Kindheit', 'la infancia'], ['das Brettspiel', 'el juego de mesa'], ['klettern', 'trepar']] }
      ],
      speak: [
        { prompt: 'Cuéntame en 5-6 frases cómo era tu infancia: ¿dónde vivías, con quién, a qué jugabas? Usa Perfekt y war/hatte.', model: 'Als Kind habe ich in einem kleinen Haus gewohnt. Ich hatte zwei Geschwister, und wir haben jeden Tag draußen gespielt. Meine Großeltern waren oft bei uns. Im Sommer sind wir ans Meer gefahren. Das war eine schöne Zeit.' },
        { prompt: 'Cuenta qué hiciste la semana pasada (5 frases). Mezcla verbos con haben y con sein y usa expresiones como letzte Woche o am Montag.', model: 'Letzte Woche bin ich am Montag früh aufgestanden und zur Arbeit gefahren. Am Dienstag habe ich meine Eltern angerufen. Am Mittwoch habe ich Pizza gekocht. Am Wochenende bin ich zu Hause geblieben und habe einen Film gesehen. Es war sehr ruhig.' },
        { prompt: 'Para decir en voz alta: describe una foto antigua de tu familia (¿quién aparece?, ¿cómo eran?, ¿qué hacían antes?). Usa war, hatte, früher y damals.', model: 'Das Foto ist von 1995. Mein Opa war damals noch jung und hatte einen großen Garten. Meine Oma hatte eine rote Jacke. Wir waren alle sehr glücklich. Früher haben wir jeden Sonntag zusammen gegessen.' }
      ]
    },
    {
      id: 'a2-02',
      title: 'Arbeit',
      es: 'Condiciones de trabajo',
      goals: [
        'Dar razones con la conjunción weil (verbo al final)',
        'Usar weil con Perfekt y verbos modales',
        'Dar las gracias, expresar deseos y valorar',
        'Decir qué es importante para ti en el trabajo'
      ],
      grammar: [
        {
          h: 'weil: la oración subordinada',
          p: 'Con <span class="de">weil</span> (porque) das una razón. Es una conjunción de <b>oración subordinada</b>: el verbo conjugado va <b>al final</b> y la oración se separa con coma. El sujeto va justo después de weil. En el Perfekt, al final queda <b>participio + auxiliar</b> (en ese orden). Con un modal, al final queda <b>infinitivo + modal conjugado</b>. Los verbos separables <b>no se separan</b> en la subordinada.',
          table: {
            head: ['Oración principal', 'weil', 'Sujeto …', 'verbo al final'],
            rows: [
              ['Ich bin müde,', 'weil', 'ich viel', '<b>arbeite</b>.'],
              ['Ich bin müde,', 'weil', 'ich gestern lange', '<b>gearbeitet habe</b>.'],
              ['Ich stehe früh auf,', 'weil', 'ich zur Arbeit fahren', '<b>muss</b>.'],
              ['Er ist pünktlich,', 'weil', 'der Zug früh', '<b>abfährt</b>.'],
              ['Sie ist zufrieden,', 'weil', 'sie nette Kollegen', '<b>hat</b>.']
            ]
          },
          ex: [
            { de: 'Ich arbeite gern hier, weil die Kollegen nett sind.', es: 'Trabajo a gusto aquí porque los colegas son simpáticos.' },
            { de: 'Er ist müde, weil er gestern Überstunden gemacht hat.', es: 'Está cansado porque ayer hizo horas extra.' },
            { de: 'Ich fahre früh los, weil ich pünktlich sein muss.', es: 'Salgo temprano porque tengo que ser puntual.' },
            { de: 'Sie möchte kündigen, weil sie mehr verdienen will.', es: 'Quiere renunciar porque quiere ganar más.' },
            { de: 'Ich komme später, weil der Bus nicht pünktlich abfährt.', es: 'Llego más tarde porque el autobús no sale puntual.' }
          ],
          tip: 'En español el verbo queda en su sitio (<i>porque estoy cansado</i>). En alemán se va al final: <span class="de">weil ich müde bin</span>. Error típico: <span class="de">weil ich bin müde</span>.'
        },
        {
          h: 'weil al principio de la frase',
          p: 'La oración con <span class="de">weil</span> puede ir <b>antes</b> de la principal. Entonces toda la subordinada ocupa la 1ª posición y el <b>verbo de la oración principal</b> va justo después de la coma, y después de él el sujeto. Mira la diferencia: <span class="de">Ich bleibe zu Hause, weil ich krank bin.</span> / <span class="de">Weil ich krank bin, bleibe ich zu Hause.</span>',
          table: {
            head: ['Orden normal', 'Subordinada primero'],
            rows: [
              ['Ich schlafe schlecht, weil ich Stress habe.', 'Weil ich Stress habe, schlafe ich schlecht.'],
              ['Er ist müde, weil er viel gearbeitet hat.', 'Weil er viel gearbeitet hat, ist er müde.'],
              ['Wir bleiben, weil wir noch arbeiten müssen.', 'Weil wir noch arbeiten müssen, bleiben wir.']
            ]
          },
          ex: [
            { de: 'Weil ich Stress habe, schlafe ich schlecht.', es: 'Como tengo estrés, duermo mal.' },
            { de: 'Weil der Chef krank ist, haben wir heute frei.', es: 'Como el jefe está enfermo, hoy tenemos libre.' },
            { de: 'Weil ich Überstunden gemacht habe, bin ich müde.', es: 'Como hice horas extra, estoy cansado.' },
            { de: 'Weil das Gehalt gut ist, bleibt sie in der Firma.', es: 'Como el sueldo es bueno, ella se queda en la empresa.' }
          ],
          tip: 'Detrás de la coma viene <b>primero el verbo</b>: <span class="de">Weil ich Stress habe, schlafe ich schlecht</span>, no <i>…, ich schlafe schlecht</i>.'
        },
        {
          h: 'weil, denn, deshalb: contraste breve',
          p: 'Las tres palabras dan relación causa-efecto, pero cambian el orden. <span class="de">weil</span> manda el verbo al final. <span class="de">denn</span> es una conjunción que no cambia nada (el verbo va en 2ª posición, como en una oración principal). <span class="de">deshalb</span> (por eso) introduce la <b>consecuencia</b> y el verbo va justo detrás (más en la lección a2-04).',
          table: {
            head: ['Palabra', 'Expresa', 'Posición del verbo', 'Ejemplo'],
            rows: [
              ['weil', 'causa', 'al final', 'Ich bin müde, weil ich viel arbeite.'],
              ['denn', 'causa', '2ª posición', 'Ich bin müde, denn ich arbeite viel.'],
              ['deshalb', 'consecuencia', 'justo después de deshalb', 'Ich arbeite viel. Deshalb bin ich müde.']
            ]
          },
          ex: [
            { de: 'Ich nehme eine Pause, weil ich müde bin.', es: 'Hago una pausa porque estoy cansado.' },
            { de: 'Ich nehme eine Pause, denn ich bin müde.', es: 'Hago una pausa, pues estoy cansado.' },
            { de: 'Ich bin müde. Deshalb nehme ich eine Pause.', es: 'Estoy cansado. Por eso hago una pausa.' }
          ],
          tip: 'Pregunta <span class="de">Warum?</span> y responde con <span class="de">Weil …</span>. En la respuesta corta puedes empezar con weil: <span class="de">Warum bist du müde? – Weil ich gestern lange gearbeitet habe.</span>'
        },
        {
          h: 'Agradecer, desear, justificar, valorar',
          p: 'Estas funciones son muy útiles en el trabajo. Para <b>agradecer</b>: <span class="de">Danke für + Akkusativ</span> (<span class="de">Danke für deine Hilfe</span>). Para <b>desear</b>: <span class="de">sich (Dat) etwas wünschen</span> y <span class="de">Ich hätte gern …</span> (forma fija). Para <b>expresar importancia</b>: <span class="de">… ist mir wichtig</span> (la persona va en dativo). Para <b>valorar</b>: <span class="de">Ich finde … gut / anstrengend</span> y <span class="de">Ich bin mit … zufrieden</span>. Siempre puedes justificar con <span class="de">weil</span>.',
          table: {
            head: ['Función', 'Frase modelo'],
            rows: [
              ['agradecer', 'Vielen Dank für Ihre Hilfe. / Danke für deine Hilfe.'],
              ['desear', 'Ich wünsche mir mehr Urlaub. / Ich hätte gern flexiblere Arbeitszeiten.'],
              ['justificar', 'Ich arbeite gern hier, weil die Kollegen nett sind.'],
              ['importancia', 'Das Gehalt ist mir sehr wichtig.'],
              ['valorar', 'Ich finde die Arbeitszeiten gut. / Ich bin mit dem Chef zufrieden.']
            ]
          },
          ex: [
            { de: 'Vielen Dank für Ihre Hilfe, Frau Weber.', es: 'Muchas gracias por su ayuda, señora Weber.' },
            { de: 'Ich wünsche mir mehr Urlaub.', es: 'Deseo tener más vacaciones.' },
            { de: 'Der Urlaub ist mir sehr wichtig.', es: 'Las vacaciones son muy importantes para mí.' },
            { de: 'Ich bin mit meinem Gehalt zufrieden.', es: 'Estoy satisfecho con mi sueldo.' },
            { de: 'Ich finde die Arbeit anstrengend, weil wir wenig Pausen haben.', es: 'Me parece agotador el trabajo porque tenemos pocas pausas.' }
          ],
          tip: 'Mira el orden de <span class="de">Das Gehalt ist mir wichtig</span>: lo importante es el sujeto (nominativo) y quien lo valora va en dativo (<i>mir</i>), como en <i>me importa</i>.'
        }
      ],
      vocab: [
        { de: 'das Gehalt', pl: 'die Gehälter', es: 'el sueldo', ex: 'Das Gehalt kommt am Ende des Monats.', exes: 'El sueldo llega a fin de mes.' },
        { de: 'die Arbeitszeit', pl: 'die Arbeitszeiten', es: 'el horario de trabajo', ex: 'Meine Arbeitszeit ist von acht bis siebzehn Uhr.', exes: 'Mi horario de trabajo es de ocho a cinco de la tarde.' },
        { de: 'der Urlaub', es: 'las vacaciones (laborales)', ex: 'Ich habe dreißig Tage Urlaub im Jahr.', exes: 'Tengo treinta días de vacaciones al año.' },
        { de: 'der Kollege', pl: 'die Kollegen', es: 'el colega', ex: 'Meine Kollegen helfen mir immer.', exes: 'Mis colegas siempre me ayudan.', note: 'f.: die Kollegin; der Kollege – den Kollegen' },
        { de: 'der Chef', pl: 'die Chefs', es: 'el jefe', ex: 'Der Chef ist heute nicht im Büro.', exes: 'El jefe hoy no está en la oficina.', note: 'f.: die Chefin' },
        { de: 'der Stress', es: 'el estrés', ex: 'Im Sommer habe ich weniger Stress.', exes: 'En verano tengo menos estrés.' },
        { de: 'der Vertrag', pl: 'die Verträge', es: 'el contrato', ex: 'Ich habe gestern den Vertrag unterschrieben.', exes: 'Ayer firmé el contrato.' },
        { de: 'die Überstunde', pl: 'die Überstunden', es: 'la hora extra', ex: 'Diese Woche habe ich fünf Überstunden gemacht.', exes: 'Esta semana hice cinco horas extra.' },
        { de: 'die Teilzeit', es: 'la jornada parcial', ex: 'Meine Schwester arbeitet in Teilzeit.', exes: 'Mi hermana trabaja a tiempo parcial.' },
        { de: 'die Vollzeit', es: 'la jornada completa', ex: 'Ich möchte nicht in Vollzeit arbeiten.', exes: 'No quiero trabajar a jornada completa.' },
        { de: 'der Arbeitsplatz', pl: 'die Arbeitsplätze', es: 'el puesto de trabajo', ex: 'Mein Arbeitsplatz ist direkt am Fenster.', exes: 'Mi puesto de trabajo está justo junto a la ventana.' },
        { de: 'die Stelle', pl: 'die Stellen', es: 'el puesto, el empleo', ex: 'Ich suche eine neue Stelle.', exes: 'Busco un empleo nuevo.' },
        { de: 'das Team', pl: 'die Teams', es: 'el equipo', ex: 'In unserem Team arbeiten acht Personen.', exes: 'En nuestro equipo trabajan ocho personas.' },
        { de: 'die Pause', pl: 'die Pausen', es: 'la pausa', ex: 'In der Pause trinke ich einen Kaffee.', exes: 'En la pausa tomo un café.' },
        { de: 'der Feierabend', es: 'el fin de la jornada', ex: 'Nach Feierabend gehe ich oft schwimmen.', exes: 'Después del trabajo suelo ir a nadar.' },
        { de: 'die Schicht', pl: 'die Schichten', es: 'el turno', ex: 'Er arbeitet in der Nachtschicht.', exes: 'Él trabaja en el turno de noche.' },
        { de: 'verdienen', es: 'ganar (dinero)', ex: 'Sie verdient in ihrem neuen Job mehr.', exes: 'Ella gana más en su nuevo trabajo.', note: 'verdient – verdiente – hat verdient' },
        { de: 'kündigen', es: 'renunciar, despedir (con contrato)', ex: 'Er hat gekündigt, weil er umgezogen ist.', exes: 'Renunció porque se mudó.', note: 'kündigt – kündigte – hat gekündigt' },
        { de: 'anstrengend', es: 'agotador, cansador', ex: 'Die Arbeit ist anstrengend, aber interessant.', exes: 'El trabajo es agotador, pero interesante.' },
        { de: 'flexibel', es: 'flexible', ex: 'Meine Arbeitszeiten sind sehr flexibel.', exes: 'Mis horarios de trabajo son muy flexibles.' }
      ],
      phrases: [
        { de: 'Vielen Dank für Ihre Hilfe.', es: 'Muchas gracias por su ayuda.', use: 'agradecer (formal)' },
        { de: 'Danke für deine Hilfe, das war sehr nett von dir.', es: 'Gracias por tu ayuda, fue muy amable de tu parte.', use: 'agradecer' },
        { de: 'Ich wünsche mir mehr Urlaub.', es: 'Deseo tener más vacaciones.', use: 'desear' },
        { de: 'Ich hätte gern flexiblere Arbeitszeiten.', es: 'Me gustaría tener horarios más flexibles.', use: 'desear' },
        { de: 'Ich arbeite gern hier, weil …', es: 'Trabajo a gusto aquí porque …', use: 'justificar' },
        { de: 'Das gefällt mir nicht, weil …', es: 'Eso no me gusta porque …', use: 'justificar' },
        { de: 'Das Gehalt ist mir sehr wichtig.', es: 'El sueldo es muy importante para mí.', use: 'importancia' },
        { de: 'Für mich ist … wichtiger als …', es: 'Para mí es más importante … que …', use: 'importancia' },
        { de: 'Ich bin mit … zufrieden.', es: 'Estoy satisfecho con …', use: 'valorar' }
      ],
      dialog: {
        title: 'Die neue Stelle',
        lines: [
          { s: 'A', de: 'Hallo Tim! Wie gefällt dir deine neue Stelle?', es: '¡Hola, Tim! ¿Cómo te gusta tu nuevo puesto?' },
          { s: 'B', de: 'Sehr gut! Ich bin zufrieden, weil die Kollegen so nett sind.', es: '¡Muy bien! Estoy contento porque los colegas son muy simpáticos.' },
          { s: 'A', de: 'Das freut mich. Und wie ist die Arbeitszeit?', es: 'Me alegro. ¿Y cómo es el horario?' },
          { s: 'B', de: 'Ich habe um vier Feierabend, weil wir keine Überstunden machen müssen.', es: 'Salgo a las cuatro, porque no tenemos que hacer horas extra.' },
          { s: 'A', de: 'Toll! Und das Gehalt?', es: '¡Genial! ¿Y el sueldo?' },
          { s: 'B', de: 'Das ist auch in Ordnung. Aber am wichtigsten ist mir der Urlaub.', es: 'También está bien. Pero lo más importante para mí son las vacaciones.' },
          { s: 'A', de: 'Warum?', es: '¿Por qué?' },
          { s: 'B', de: 'Weil ich im Sommer lange reisen möchte. Ich habe dreißig Tage Urlaub.', es: 'Porque en verano quiero viajar mucho tiempo. Tengo treinta días de vacaciones.' },
          { s: 'A', de: 'Wow! Mein Chef gibt mir nur zwanzig Tage, weil ich in Teilzeit arbeite.', es: '¡Guau! Mi jefe me da solo veinte días porque trabajo a tiempo parcial.' },
          { s: 'B', de: 'Sprich doch mal mit ihm. Ich wünsche dir viel Erfolg!', es: 'Habla con él alguna vez. ¡Te deseo mucho éxito!' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich bleibe zu Hause, ___ ich krank bin.', o: ['deshalb', 'weil', 'sondern'], a: 1, why: 'Da el verbo (bin) está al final, la conjunción es weil.' },
        { t: 'mc', q: 'Er arbeitet gern hier, weil die Kollegen nett ___.', o: ['sein', 'sind', 'ist'], a: 1, why: 'Verbo conjugado al final; die Kollegen es plural, así que sind.' },
        { t: 'mc', q: 'Ich bin müde, weil ich gestern lange gearbeitet ___.', o: ['bin', 'habe', 'hatte'], a: 1, why: 'arbeiten forma el Perfekt con haben, y en la subordinada queda al final: gearbeitet habe.' },
        { t: 'mc', q: 'Weil ich viel Stress habe, ___ ich nicht gut.', o: ['ich schlafe', 'schlafe', 'schlafe ich'], a: 2, why: 'Tras la subordinada va primero el verbo y luego el sujeto: schlafe ich.' },
        { t: 'mc', q: 'Ich nehme eine Pause, ___ ich bin sehr müde.', o: ['weil', 'denn', 'dass'], a: 1, why: 'Aquí el verbo (bin) está en 2ª posición, así que se usa denn y no weil.' },
        { t: 'mc', q: 'Er hat gekündigt, weil er mehr Geld verdienen ___.', o: ['wollen', 'will', 'wollte hat'], a: 1, why: 'Verbo modal conjugado al final de la subordinada: verdienen will.' },
        { t: 'gap', q: 'Ich bin zufrieden, weil ich nette Kollegen ___. (haben)', a: ['habe'], why: 'El verbo conjugado va al final; con ich: habe.' },
        { t: 'gap', q: 'Sie ist müde, weil sie heute sehr früh aufgestanden ___. (haben o sein)', a: ['ist'], why: 'aufstehen es cambio de posición y forma el Perfekt con sein.' },
        { t: 'gap', q: 'Vielen ___ für deine Hilfe!', a: ['dank'], why: 'La fórmula de agradecimiento es Vielen Dank für + Akkusativ.' },
        { t: 'gap', q: 'Weil der Zug Verspätung hat, ___ ich zu spät. (kommen)', a: ['komme'], why: 'Después de la subordinada el verbo va primero: komme ich.' },
        { t: 'gap', q: 'Der Urlaub ist ___ sehr wichtig. (ich)', a: ['mir'], why: 'Con wichtig ser, la persona que valora va en dativo: mir.' },
        { t: 'order', es: 'Me gusta mi trabajo porque mi jefe es muy simpático.', de: 'Ich mag meinen Job, weil mein Chef sehr nett ist.', why: 'weil envía el verbo ist al final de la subordinada.' },
        { t: 'order', es: 'Como hice horas extra, hoy estoy cansado.', de: 'Weil ich Überstunden gemacht habe, bin ich heute müde.', why: 'En la subordinada el auxiliar va al final; después de la coma va primero el verbo bin.' },
        { t: 'order', es: 'Tengo que levantarme temprano porque mi trabajo empieza a las siete.', de: 'Ich muss früh aufstehen, weil meine Arbeit um sieben Uhr beginnt.', why: 'Verbo conjugado de la subordinada (beginnt) al final.' },
        { t: 'tr', es: 'Estoy contento porque mis colegas son simpáticos.', de: ['Ich bin zufrieden, weil meine Kollegen nett sind.', 'Ich bin zufrieden, denn meine Kollegen sind nett.'], why: 'weil + verbo al final; con denn el verbo queda en 2ª posición.' },
        { t: 'tr', es: 'Quiero más vacaciones porque trabajo mucho.', de: ['Ich möchte mehr Urlaub, weil ich viel arbeite.', 'Ich will mehr Urlaub, weil ich viel arbeite.', 'Ich möchte mehr Urlaub, denn ich arbeite viel.'], why: 'weil ich viel arbeite: sujeto y verbo al final.' },
        { t: 'fix', q: 'Ich bin müde, weil ich habe viel gearbeitet.', a: ['Ich bin müde, weil ich viel gearbeitet habe.'], why: 'En la subordinada el auxiliar haben va al final, después del participio.' },
        { t: 'fix', q: 'Er kommt zu spät, weil er muss noch arbeiten.', a: ['Er kommt zu spät, weil er noch arbeiten muss.'], why: 'El modal conjugado va al final: arbeiten muss.' },
        { t: 'fix', q: 'Weil ich krank bin, ich bleibe zu Hause.', a: ['Weil ich krank bin, bleibe ich zu Hause.'], why: 'Tras la subordinada va primero el verbo de la principal: bleibe ich.' },
        { t: 'match', pairs: [['das Gehalt', 'el sueldo'], ['der Urlaub', 'las vacaciones'], ['der Vertrag', 'el contrato'], ['die Überstunde', 'la hora extra'], ['kündigen', 'renunciar'], ['der Feierabend', 'el fin de la jornada']] }
      ],
      speak: [
        { prompt: 'Explica en 4-5 frases por qué te gusta (o no) tu trabajo o tus estudios. Usa weil en cada frase.', model: 'Ich arbeite gern als Lehrer, weil ich gern mit Menschen spreche. Meine Arbeitszeit ist flexibel, weil ich viel online unterrichte. Manchmal habe ich Stress, weil ich viele Schüler habe. Das Gehalt ist nicht sehr hoch, aber ich bin zufrieden, weil mir die Arbeit Spaß macht.' },
        { prompt: 'Escribe un mensaje breve a un colega que te ayudó: agradece, valora su ayuda y expresa un deseo para tu trabajo con weil.', model: 'Liebe Anna, vielen Dank für deine Hilfe gestern! Das war sehr nett von dir. Ich wünsche mir mehr Zeit für Projekte, weil ich noch viel lernen möchte. Viele Grüße, Tim' },
        { prompt: 'Para decir en voz alta: ¿qué es importante para ti en un trabajo (Gehalt, Urlaub, Kollegen, Arbeitszeit)? Da 4 frases con weil.', model: 'Für mich ist der Urlaub sehr wichtig, weil ich gern reise. Die Kollegen sind mir auch wichtig, weil ich viel im Team arbeite. Ein hohes Gehalt ist gut, aber ich möchte keinen Stress haben, weil ich dann schlecht schlafe. Deshalb suche ich eine Stelle mit flexiblen Arbeitszeiten.' }
      ]
    },
    {
      id: 'a2-03',
      title: 'Umzug',
      es: 'Mudanza y naturaleza',
      goals: [
        'Usar unser, euer, ihr, Ihr en nominativo, acusativo y dativo',
        'Repasar mein, dein, sein con todos los géneros y casos',
        'Valorar un lugar, una vivienda o un paisaje',
        'Dar consejos para una excursión'
      ],
      grammar: [
        {
          h: 'Los posesivos: todas las personas',
          p: 'Los <b>Possessivartikel</b> (adjetivos posesivos) acompañan a un sustantivo y se declinan como <span class="de">ein</span> y <span class="de">kein</span>. Concuerdan con el <b>poseedor</b> (la persona) en el radical y con el <b>sustantivo poseído</b> en género, número y caso en la terminación. Los nuevos son <span class="de">unser</span> (nuestro), <span class="de">euer</span> (vuestro), <span class="de">ihr</span> (su, de ellos/ellas) e <span class="de">Ihr</span> (su, de usted/ustedes, con mayúscula).',
          table: {
            head: ['Persona', 'Posesivo', 'Ejemplo (Nominativ)'],
            rows: [
              ['ich', 'mein', 'mein Bruder'],
              ['du', 'dein', 'dein Bruder'],
              ['er / es', 'sein', 'sein Haus'],
              ['sie (ella)', 'ihr', 'ihr Haus'],
              ['wir', '<b>unser</b>', 'unser Haus'],
              ['ihr', '<b>euer</b>', 'euer Haus'],
              ['sie (ellos)', 'ihr', 'ihr Haus'],
              ['Sie (usted)', '<b>Ihr</b>', 'Ihr Haus']
            ]
          },
          ex: [
            { de: 'Unser Haus liegt am Wald.', es: 'Nuestra casa está junto al bosque.' },
            { de: 'Wo ist euer Garten?', es: '¿Dónde está su jardín (de ustedes)?' },
            { de: 'Lena und Tim wohnen mit ihren Kindern in einem Dorf.', es: 'Lena y Tim viven con sus hijos en un pueblo.' },
            { de: 'Frau Weber, ist das Ihr Rucksack?', es: 'Señora Weber, ¿es esta su mochila?' },
            { de: 'Ihre Wohnung gefällt mir.', es: 'Su apartamento me gusta (de ella).' }
          ],
          tip: 'Atención: <span class="de">ihr</span> (minúscula) significa <i>su</i> de ella o de ellos, y <span class="de">Ihr</span> (mayúscula) es el <i>su</i> formal de usted. No confundas con el pronombre <span class="de">ihr</span> (vosotros/ustedes).'
        },
        {
          h: 'Declinación de unser/euer en Nom, Akk, Dat',
          p: 'Las terminaciones son las de <span class="de">ein</span>: en el nominativo masculino y neutro <b>no hay terminación</b>; el femenino y el plural añaden <b>-e</b>. En acusativo solo cambia el masculino (<b>-en</b>). En dativo: <b>-em</b> (m, n), <b>-er</b> (f), <b>-en</b> (plural, y el sustantivo recibe -n). <span class="de">euer</span> pierde la <i>e</i> del medio cuando lleva terminación: <span class="de">eure</span>, <span class="de">euren</span>, <span class="de">eurem</span>, <span class="de">eurer</span>. Lo mismo vale para <span class="de">mein, dein, sein</span>.',
          table: {
            head: ['Caso', 'm (der Garten)', 'f (die Wohnung)', 'n (das Haus)', 'pl (die Kinder)'],
            rows: [
              ['Nominativ', 'unser Garten', 'unsere Wohnung', 'unser Haus', 'unsere Kinder'],
              ['Akkusativ', 'unser<b>en</b> Garten', 'unsere Wohnung', 'unser Haus', 'unsere Kinder'],
              ['Dativ', 'unser<b>em</b> Garten', 'unser<b>er</b> Wohnung', 'unser<b>em</b> Haus', 'unser<b>en</b> Kinder<b>n</b>'],
              ['Nominativ (euer)', 'euer Garten', 'eure Wohnung', 'euer Haus', 'eure Kinder'],
              ['Akkusativ (euer)', 'euren Garten', 'eure Wohnung', 'euer Haus', 'eure Kinder'],
              ['Dativ (euer)', 'eurem Garten', 'eurer Wohnung', 'eurem Haus', 'euren Kindern'],
              ['Akkusativ (mein)', 'meinen Garten', 'meine Wohnung', 'mein Haus', 'meine Kinder'],
              ['Dativ (mein)', 'meinem Garten', 'meiner Wohnung', 'meinem Haus', 'meinen Kindern']
            ]
          },
          ex: [
            { de: 'Wir lieben unsere neue Wohnung.', es: 'Amamos nuestro nuevo apartamento.' },
            { de: 'Habt ihr euren Hund mitgebracht?', es: '¿Trajeron a su perro?' },
            { de: 'Wir sitzen in unserem Garten.', es: 'Estamos sentados en nuestro jardín.' },
            { de: 'Ich spreche mit meiner Nachbarin.', es: 'Hablo con mi vecina.' },
            { de: 'Wir wohnen bei unseren Eltern.', es: 'Vivimos con nuestros padres.' },
            { de: 'Das ist eure Wohnung, oder?', es: 'Este es su apartamento, ¿verdad?' }
          ],
          tip: 'Error típico: <span class="de">euere Wohnung</span>. Se escribe <span class="de">eure Wohnung</span> (se pierde la <i>e</i>). Y recuerda: nominativo y acusativo son iguales, salvo el masculino (<span class="de">unser Garten → unseren Garten</span>).'
        },
        {
          h: 'Valorar y aconsejar en una excursión',
          p: 'Para <b>valorar</b> un lugar: <span class="de">Ich finde … toll / schön / langweilig</span>, <span class="de">… gefällt mir (gut)</span>, <span class="de">Die Aussicht ist wunderschön!</span>. Para <b>dar consejos</b> usa el <b>imperativo</b>: con <i>du</i> sin pronombre, con <i>ihr</i> el verbo en forma de <i>ihr</i> sin pronombre y con <i>Sie</i> el verbo antes del pronombre. Verbos con cambio de vocal e→i en el imperativo de <i>du</i>: <span class="de">nehmen → Nimm!</span>, <span class="de">vergessen → Vergiss!</span>. Los separables se separan: <span class="de">Nimm … mit!</span>',
          table: {
            head: ['Persona', 'mit|nehmen', 'vergessen', 'an|ziehen'],
            rows: [
              ['du', 'Nimm deinen Rucksack mit!', 'Vergiss das Wasser nicht!', 'Zieh eine Jacke an!'],
              ['ihr', 'Nehmt eure Rucksäcke mit!', 'Vergesst das Wasser nicht!', 'Zieht Jacken an!'],
              ['Sie', 'Nehmen Sie Ihren Rucksack mit!', 'Vergessen Sie das Wasser nicht!', 'Ziehen Sie eine Jacke an!']
            ]
          },
          ex: [
            { de: 'Die Aussicht ist wunderschön!', es: '¡La vista es preciosa!' },
            { de: 'Ich finde die Landschaft hier toll.', es: 'Me parece genial el paisaje de aquí.' },
            { de: 'Nimm bitte warme Kleidung mit.', es: 'Lleva ropa de abrigo, por favor.' },
            { de: 'Vergesst euer Wasser nicht!', es: '¡No se olviden de su agua!' },
            { de: 'Geht früh los, dann habt ihr mehr Zeit.', es: 'Salgan temprano y tendrán más tiempo.' }
          ],
          tip: 'Para aconsejar con <i>du</i>, el imperativo de los verbos como <i>nehmen</i> cambia la vocal: <span class="de">Nimm!</span> (no <i>Nehm!</i>), pero con <i>ihr</i> no cambia: <span class="de">Nehmt!</span>'
        }
      ],
      vocab: [
        { de: 'die Natur', es: 'la naturaleza', ex: 'Ich liebe die Natur und gehe oft spazieren.', exes: 'Amo la naturaleza y salgo a caminar a menudo.' },
        { de: 'der Berg', pl: 'die Berge', es: 'la montaña', ex: 'Im Winter fahren wir in die Berge.', exes: 'En invierno vamos a las montañas.' },
        { de: 'der See', pl: 'die Seen', es: 'el lago', ex: 'Am Wochenende sind wir an den See gefahren.', exes: 'El fin de semana fuimos al lago.', note: 'der See = lago; die See = mar (costa norte)' },
        { de: 'der Wald', pl: 'die Wälder', es: 'el bosque', ex: 'Hinter unserem Haus beginnt ein großer Wald.', exes: 'Detrás de nuestra casa empieza un gran bosque.' },
        { de: 'der Fluss', pl: 'die Flüsse', es: 'el río', ex: 'Der Fluss ist im Sommer sehr klar.', exes: 'El río es muy claro en verano.' },
        { de: 'das Meer', pl: 'die Meere', es: 'el mar', ex: 'Wir wohnen nur zehn Minuten vom Meer entfernt.', exes: 'Vivimos a solo diez minutos del mar.' },
        { de: 'die Wiese', pl: 'die Wiesen', es: 'el prado', ex: 'Die Kinder spielen auf der Wiese.', exes: 'Los niños juegan en el prado.' },
        { de: 'die Landschaft', pl: 'die Landschaften', es: 'el paisaje', ex: 'Die Landschaft im Süden ist wunderschön.', exes: 'El paisaje del sur es precioso.' },
        { de: 'die Aussicht', pl: 'die Aussichten', es: 'la vista', ex: 'Von unserem Balkon hat man eine tolle Aussicht.', exes: 'Desde nuestro balcón hay una vista estupenda.' },
        { de: 'der Vogel', pl: 'die Vögel', es: 'el pájaro', ex: 'Morgens singen die Vögel im Garten.', exes: 'Por las mañanas los pájaros cantan en el jardín.' },
        { de: 'das Pferd', pl: 'die Pferde', es: 'el caballo', ex: 'Auf der Wiese stehen drei Pferde.', exes: 'En el prado hay tres caballos.' },
        { de: 'die Kuh', pl: 'die Kühe', es: 'la vaca', ex: 'Die Kühe stehen im Sommer auf der Wiese.', exes: 'Las vacas están en el prado en verano.' },
        { de: 'der Fuchs', pl: 'die Füchse', es: 'el zorro', ex: 'Gestern habe ich einen Fuchs im Wald gesehen.', exes: 'Ayer vi un zorro en el bosque.' },
        { de: 'der Norden', es: 'el norte', ex: 'Hamburg liegt im Norden von Deutschland.', exes: 'Hamburgo está en el norte de Alemania.' },
        { de: 'der Süden', es: 'el sur', ex: 'Im Süden ist es im Sommer oft heiß.', exes: 'En el sur suele hacer calor en verano.' },
        { de: 'der Osten', es: 'el este', ex: 'Die Sonne geht im Osten auf.', exes: 'El sol sale por el este.' },
        { de: 'der Westen', es: 'el oeste', ex: 'Im Westen des Landes gibt es viele Städte.', exes: 'En el oeste del país hay muchas ciudades.' },
        { de: 'wandern', es: 'hacer senderismo', ex: 'Letzten Sonntag sind wir in den Bergen gewandert.', exes: 'El domingo pasado hicimos senderismo en las montañas.', note: 'wandert – wanderte – ist gewandert' },
        { de: 'um|ziehen', es: 'mudarse', ex: 'Meine Familie ist letzten Monat umgezogen.', exes: 'Mi familia se mudó el mes pasado.', note: 'zieht um – zog um – ist umgezogen' },
        { de: 'der Rucksack', pl: 'die Rucksäcke', es: 'la mochila', ex: 'Ich habe Wasser und ein Brot im Rucksack.', exes: 'Llevo agua y un pan en la mochila.' }
      ],
      phrases: [
        { de: 'Wie gefällt euch eure neue Wohnung?', es: '¿Cómo les gusta su nuevo apartamento?', use: 'preguntar' },
        { de: 'Unsere Wohnung gefällt uns sehr gut.', es: 'Nuestro apartamento nos gusta mucho.', use: 'valorar' },
        { de: 'Wo liegt euer Haus?', es: '¿Dónde queda su casa?', use: 'preguntar' },
        { de: 'Die Aussicht ist wunderschön!', es: '¡La vista es preciosa!', use: 'valorar' },
        { de: 'Das finde ich toll.', es: 'Eso me parece genial.', use: 'valorar' },
        { de: 'Nimm bitte warme Kleidung mit.', es: 'Lleva ropa de abrigo, por favor.', use: 'aconsejar' },
        { de: 'Vergiss deinen Rucksack nicht!', es: '¡No olvides tu mochila!', use: 'aconsejar' },
        { de: 'Geht am besten früh am Morgen los.', es: 'Lo mejor es salir temprano por la mañana.', use: 'aconsejar' },
        { de: 'Unser Haus liegt im Norden der Stadt.', es: 'Nuestra casa está en el norte de la ciudad.', use: 'describir lugar' }
      ],
      dialog: {
        title: 'Die neue Wohnung',
        lines: [
          { s: 'A', de: 'Hallo Mia! Ihr seid umgezogen, stimmt das?', es: '¡Hola, Mia! Se mudaron, ¿es cierto?' },
          { s: 'B', de: 'Ja, letzte Woche. Unsere neue Wohnung liegt im Norden, nah am Wald.', es: 'Sí, la semana pasada. Nuestro nuevo apartamento está en el norte, cerca del bosque.' },
          { s: 'A', de: 'Toll! Wie gefällt es euch dort?', es: '¡Genial! ¿Cómo les gusta allí?' },
          { s: 'B', de: 'Super. Unser Balkon hat eine tolle Aussicht auf die Berge.', es: 'Estupendo. Nuestro balcón tiene una vista fantástica a las montañas.' },
          { s: 'A', de: 'Schön! Und wie findet euer Hund die neue Wohnung?', es: '¡Qué bonito! ¿Y qué le parece a su perro el nuevo apartamento?' },
          { s: 'B', de: 'Unser Hund liebt den Wald. Wir gehen jeden Tag mit ihm spazieren.', es: 'A nuestro perro le encanta el bosque. Salimos a pasear con él todos los días.' },
          { s: 'A', de: 'Habt ihr am Wochenende Zeit? Ich möchte euch besuchen.', es: '¿Tienen tiempo el fin de semana? Quiero visitarlos.' },
          { s: 'B', de: 'Gern! Und bring deinen Rucksack mit, wir können wandern.', es: '¡Con gusto! Y trae tu mochila, podemos hacer senderismo.' },
          { s: 'A', de: 'Gute Idee. Soll ich auch warme Kleidung mitnehmen?', es: 'Buena idea. ¿Llevo también ropa de abrigo?' },
          { s: 'B', de: 'Ja, nimm unbedingt eine Jacke mit. Im Wald ist es oft kalt.', es: 'Sí, lleva sin falta una chaqueta. En el bosque suele hacer frío.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Wir lieben ___ neue Wohnung.', o: ['unser', 'unsere', 'unseren'], a: 1, why: 'die Wohnung es femenino; en acusativo femenino: unsere.' },
        { t: 'mc', q: 'Habt ihr ___ Hund mitgebracht?', o: ['euer', 'eure', 'euren'], a: 2, why: 'der Hund es masculino y objeto directo (acusativo): euren.' },
        { t: 'mc', q: 'Wir sprechen mit ___ Nachbarin.', o: ['unsere', 'unserer', 'unserem'], a: 1, why: 'Después de mit va dativo; die Nachbarin es femenino: unserer.' },
        { t: 'mc', q: 'Lena und Tim wohnen mit ___ Kindern in einem Haus.', o: ['ihre', 'ihrem', 'ihren'], a: 2, why: 'Dativo plural: -en (ihren Kindern); ihr = de ellos.' },
        { t: 'mc', q: 'Frau Weber, ist das ___ Rucksack?', o: ['Ihre', 'Ihr', 'Ihren'], a: 1, why: 'Forma de cortesía en mayúscula; der Rucksack en nominativo masculino no lleva terminación: Ihr.' },
        { t: 'mc', q: 'Wir sitzen in ___ Garten.', o: ['unseren', 'unser', 'unserem'], a: 2, why: 'in + dativo (lugar), der Garten masculino: unserem.' },
        { t: 'gap', q: 'Ihr habt ein schönes Haus. ___ Garten ist groß. (euer)', a: ['euer'], why: 'der Garten es nominativo masculino: euer, sin terminación.' },
        { t: 'gap', q: 'Mein Bruder und ich haben einen Hund. ___ Hund heißt Max. (unser)', a: ['unser'], why: 'der Hund es nominativo masculino: unser, sin terminación.' },
        { t: 'gap', q: 'Ich besuche ___ Großeltern am Meer. (mein)', a: ['meine'], why: 'Plural en acusativo: meine Großeltern.' },
        { t: 'gap', q: 'Kommst du mit ___ Schwester? (dein)', a: ['deiner'], why: 'mit + dativo; die Schwester femenino: deiner.' },
        { t: 'gap', q: 'Die Sonne geht im ___ auf. (este)', a: ['osten'], why: 'Los puntos cardinales llevan artículo: im Osten.' },
        { t: 'order', es: 'Nuestro nuevo apartamento tiene un balcón grande.', de: 'Unsere neue Wohnung hat einen großen Balkon.', why: 'der Balkon masculino en acusativo: einen großen Balkon; el sujeto es unsere neue Wohnung.' },
        { t: 'order', es: 'Lleva tu mochila y una chaqueta.', de: 'Nimm deinen Rucksack und eine Jacke mit.', why: 'En el imperativo con du, mitnehmen se separa y mit va al final.' },
        { t: 'order', es: 'La vista desde nuestro balcón es preciosa.', de: 'Die Aussicht von unserem Balkon ist wunderschön.', why: 'von + dativo masculino: von unserem Balkon.' },
        { t: 'tr', es: 'Nuestra casa está junto al bosque.', de: ['Unser Haus liegt am Wald.', 'Unser Haus liegt nah am Wald.', 'Unser Haus ist nah am Wald.'], why: 'das Haus neutro nominativo: unser Haus; am Wald = an dem Wald.' },
        { t: 'tr', es: '¿Cómo les gusta su nuevo apartamento?', de: ['Wie gefällt euch eure neue Wohnung?', 'Wie gefällt euch euer neues Apartment?', 'Wie gefällt euch eure neue Wohnung denn?'], why: 'gefallen + dativo (euch); die Wohnung femenino nominativo: eure.' },
        { t: 'fix', q: 'Wir besuchen unsere Opa am Sonntag.', a: ['Wir besuchen unseren Opa am Sonntag.'], why: 'der Opa es masculino y objeto directo: unseren.' },
        { t: 'fix', q: 'Ich wohne mit meine Eltern in Köln.', a: ['Ich wohne mit meinen Eltern in Köln.'], why: 'Después de mit, dativo plural: meinen Eltern.' },
        { t: 'fix', q: 'Das ist euere Wohnung.', a: ['Das ist eure Wohnung.'], why: 'euer pierde la e del medio cuando lleva terminación: eure.' },
        { t: 'match', pairs: [['der Berg', 'la montaña'], ['der Fluss', 'el río'], ['die Wiese', 'el prado'], ['der Norden', 'el norte'], ['die Aussicht', 'la vista'], ['der Fuchs', 'el zorro']] }
      ],
      speak: [
        { prompt: 'Describe en 5 frases tu casa o apartamento y a tu familia usando unser/unsere (¿dónde queda?, ¿qué hay?).', model: 'Unsere Wohnung liegt im Norden der Stadt. Unser Wohnzimmer ist groß, und unser Balkon hat eine schöne Aussicht. Meine Frau und ich wohnen hier mit unserem Hund. Unsere Nachbarn sind sehr nett. Wir lieben unser kleines Zuhause.' },
        { prompt: 'Unos amigos quieren hacer una excursión a la montaña. Dales 4 consejos con el imperativo de ihr y con euer/eure.', model: 'Nehmt eure Rucksäcke und warme Jacken mit! Vergesst euer Wasser nicht. Geht früh los, weil es im Tal heiß wird. Auf dem Berg ist die Aussicht wunderschön.' },
        { prompt: 'Para decir en voz alta: describe un paisaje que te guste (norte, sur, montañas, mar…) y da tu valoración con Ich finde …', model: 'Im Süden meines Landes gibt es viele Berge und Seen. Die Landschaft ist wunderschön, und die Aussicht von den Bergen finde ich fantastisch. Im Norden gibt es einen langen Strand am Meer. Ich finde beide Regionen toll.' }
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m2',
  level: 'A2',
  num: 2,
  title: 'Oficina, eventos y deporte',
  emoji: '🏢',
  lessons: [
    {
      id: 'a2-04',
      title: 'Deshalb bleibe ich länger',
      es: 'Trabajo de oficina y encargos',
      goals: [
        'Expresar una consecuencia con deshalb (verbo en 2ª posición)',
        'Distinguir deshalb de weil',
        'Dar encargos de trabajo con cortesía',
        'Reaccionar de forma positiva o negativa a un encargo'
      ],
      grammar: [
        {
          h: 'El conector deshalb (consecuencia)',
          p: '<span class="de">deshalb</span> significa <i>por eso</i>, <i>por lo tanto</i>. Une dos ideas: primero la <b>causa</b> y después la <b>consecuencia</b>. Importante: <span class="de">deshalb</span> ocupa la posición 1 de la oración y, por eso, el <b>verbo conjugado va en la posición 2</b>, justo detrás, y el sujeto pasa a la posición 3. No es una subordinada: el verbo <b>no</b> va al final. Puedes escribir un punto antes de deshalb o una coma. Sinónimos habituales: <span class="de">deswegen, darum, daher</span>.',
          table: {
            head: ['Causa', 'Posición 1', 'Posición 2 (verbo)', 'Sujeto + resto'],
            rows: [
              ['Der Drucker ist kaputt.', 'Deshalb', '<b>schicke</b>', 'ich die Datei per E-Mail.'],
              ['Ich habe viel Arbeit.', 'Deshalb', '<b>bleibe</b>', 'ich heute länger im Büro.'],
              ['Die Chefin ist krank.', 'Deshalb', '<b>findet</b>', 'die Besprechung nicht statt.'],
              ['Wir haben viele Aufträge.', 'Deshalb', '<b>brauchen</b>', 'wir neue Kollegen.'],
              ['Der Kunde ruft an.', 'Deshalb', '<b>muss</b>', 'ich den Bericht später schreiben.']
            ]
          },
          ex: [
            {de: 'Mein Computer ist kaputt, deshalb kann ich nicht arbeiten.', es: 'Mi ordenador está roto, por eso no puedo trabajar.'},
            {de: 'Ich habe morgen einen Termin. Deshalb gehe ich heute früh nach Hause.', es: 'Mañana tengo una cita. Por eso hoy me voy pronto a casa.'},
            {de: 'Der Kunde ist unzufrieden, deshalb ruft Anna ihn an.', es: 'El cliente está descontento, por eso Anna lo llama.'},
            {de: 'Die Frist ist morgen. Deshalb arbeiten wir am Wochenende.', es: 'El plazo es mañana. Por eso trabajamos el fin de semana.'},
            {de: 'Tim ist neu im Team, deshalb erkläre ich ihm alles.', es: 'Tim es nuevo en el equipo, por eso se lo explico todo.'}
          ],
          tip: 'En español <i>por eso</i> no cambia el orden (<i>por eso yo trabajo</i> o <i>por eso trabajo</i>). En alemán es obligatorio: <span class="de">Deshalb arbeite ich</span>, nunca <span class="de">Deshalb ich arbeite</span>.'
        },
        {
          h: 'deshalb frente a weil',
          p: 'Las dos palabras expresan la misma relación causa-efecto, pero <b>en orden inverso</b> y con distinta posición del verbo. <span class="de">weil</span> introduce la <b>causa</b> en una subordinada (verbo al <b>final</b>). <span class="de">deshalb</span> introduce la <b>consecuencia</b> y el verbo va en <b>2ª posición</b>. Piensa: <i>weil</i> = <i>porque</i>; <i>deshalb</i> = <i>por eso</i>. Una buena prueba: si después de la palabra el verbo aún no ha aparecido, es weil; si viene enseguida, es deshalb.',
          table: {
            head: ['Palabra', 'Qué introduce', 'Posición del verbo', 'Ejemplo'],
            rows: [
              ['weil', 'la causa', 'al final', 'Ich bleibe länger, weil ich viel Arbeit <b>habe</b>.'],
              ['deshalb', 'la consecuencia', 'posición 2', 'Ich habe viel Arbeit. Deshalb <b>bleibe</b> ich länger.']
            ]
          },
          ex: [
            {de: 'Ich komme zu spät, weil der Bus Verspätung hat.', es: 'Llego tarde porque el autobús va con retraso.'},
            {de: 'Der Bus hat Verspätung. Deshalb komme ich zu spät.', es: 'El autobús va con retraso. Por eso llego tarde.'},
            {de: 'Lena ist müde, weil sie lange gearbeitet hat.', es: 'Lena está cansada porque ha trabajado mucho.'},
            {de: 'Lena hat lange gearbeitet, deshalb ist sie müde.', es: 'Lena ha trabajado mucho, por eso está cansada.'},
            {de: 'Wir brauchen Papier, weil der Drucker leer ist.', es: 'Necesitamos papel porque la impresora está vacía.'}
          ],
          tip: 'Truco: con <b>weil</b> la causa va <i>después</i> (y el verbo al final); con <b>deshalb</b> la causa va <i>antes</i>. Si inviertes el orden de las ideas, cambia la palabra.'
        },
        {
          h: 'Dar encargos y reaccionar',
          p: 'En la oficina das encargos con <span class="de">Kannst du bitte …?</span> (informal, con compañeros) o <span class="de">Könnten Sie bitte …?</span> (formal, más cortés). El verbo en infinitivo va <b>al final</b>. También puedes decir <span class="de">Ich brauche bis Freitag …</span> o <span class="de">Bitte denk an …</span>. Para reaccionar bien: <span class="de">Ich kümmere mich darum.</span>, <span class="de">Das mache ich sofort.</span>, <span class="de">Kein Problem!</span>. Para decir que no: <span class="de">Das schaffe ich leider nicht.</span>, <span class="de">Dafür habe ich keine Zeit.</span>, <span class="de">Ich bin gerade beschäftigt.</span>. Con <span class="de">sich kümmern um + Akk.</span> indicas de qué te ocupas; <span class="de">darum</span> sustituye a la cosa que ya se ha mencionado.',
          table: {
            head: ['Función', 'Frase'],
            rows: [
              ['Encargo (tú)', 'Kannst du bitte den Bericht ausdrucken?'],
              ['Encargo (usted)', 'Könnten Sie bitte die Kunden anrufen?'],
              ['Reacción positiva', 'Ich kümmere mich darum. / Mache ich sofort. / Kein Problem!'],
              ['Reacción negativa', 'Das schaffe ich leider nicht. / Dafür habe ich keine Zeit.'],
              ['Aplazar', 'Ich mache das gleich, aber erst nach der Besprechung.']
            ]
          },
          ex: [
            {de: 'Kannst du bitte die Rechnung kopieren?', es: '¿Puedes fotocopiar la factura, por favor?'},
            {de: 'Könnten Sie mir bitte den Termin bestätigen?', es: '¿Podría confirmarme la cita, por favor?'},
            {de: 'Ich kümmere mich darum. Das mache ich gleich.', es: 'Yo me ocupo. Lo hago enseguida.'},
            {de: 'Das schaffe ich bis morgen leider nicht.', es: 'Eso no lo consigo hacer para mañana, lo siento.'},
            {de: 'Dafür habe ich heute keine Zeit, aber morgen früh gern.', es: 'Hoy no tengo tiempo para eso, pero mañana temprano con gusto.'}
          ],
          tip: 'Con compañeros basta <span class="de">Kannst du …?</span>, pero con el jefe o con clientes usa <span class="de">Könnten Sie …?</span>. Y recuerda: <span class="de">sich kümmern <b>um</b></span>, no <i>de</i>: <span class="de">Ich kümmere mich um den Bericht.</span>'
        }
      ],
      vocab: [
        {de: 'das Büro', pl: 'die Büros', es: 'la oficina', ex: 'Mein Büro ist im dritten Stock.', exes: 'Mi oficina está en el tercer piso.'},
        {de: 'der Bericht', pl: 'die Berichte', es: 'el informe', ex: 'Ich muss den Bericht bis Freitag schreiben.', exes: 'Tengo que escribir el informe para el viernes.'},
        {de: 'die Besprechung', pl: 'die Besprechungen', es: 'la reunión', ex: 'Die Besprechung beginnt um zehn Uhr.', exes: 'La reunión empieza a las diez.'},
        {de: 'der Termin', pl: 'die Termine', es: 'la cita, el compromiso', ex: 'Ich habe morgen drei Termine.', exes: 'Mañana tengo tres citas.'},
        {de: 'der Kunde', pl: 'die Kunden', es: 'el cliente', ex: 'Der Kunde möchte ein neues Angebot.', exes: 'El cliente quiere una nueva oferta.'},
        {de: 'der Kollege', pl: 'die Kollegen', es: 'el compañero de trabajo', ex: 'Mein Kollege hilft mir mit dem Bericht.', exes: 'Mi compañero me ayuda con el informe.'},
        {de: 'die Kollegin', pl: 'die Kolleginnen', es: 'la compañera de trabajo', ex: 'Meine Kollegin arbeitet heute von zu Hause.', exes: 'Mi compañera trabaja hoy desde casa.'},
        {de: 'der Drucker', pl: 'die Drucker', es: 'la impresora', ex: 'Der Drucker braucht neues Papier.', exes: 'La impresora necesita papel nuevo.'},
        {de: 'die Unterlagen', pl: 'die Unterlagen', es: 'los documentos (plural)', ex: 'Hast du die Unterlagen für die Besprechung?', exes: '¿Tienes los documentos para la reunión?'},
        {de: 'der Ordner', pl: 'die Ordner', es: 'la carpeta (archivador)', ex: 'Die Verträge liegen im blauen Ordner.', exes: 'Los contratos están en la carpeta azul.'},
        {de: 'der Auftrag', pl: 'die Aufträge', es: 'el encargo, el pedido', ex: 'Wir haben einen großen Auftrag bekommen.', exes: 'Hemos recibido un gran encargo.'},
        {de: 'die Frist', pl: 'die Fristen', es: 'el plazo', ex: 'Die Frist für das Projekt endet am Montag.', exes: 'El plazo del proyecto termina el lunes.'},
        {de: 'kopieren', es: 'fotocopiar, copiar', note: 'kopiert – kopierte – hat kopiert', ex: 'Kannst du bitte zehn Seiten kopieren?', exes: '¿Puedes fotocopiar diez páginas, por favor?'},
        {de: 'aus|drucken', es: 'imprimir', note: 'druckt aus – druckte aus – hat ausgedruckt', ex: 'Ich drucke die E-Mail für dich aus.', exes: 'Te imprimo el correo.'},
        {de: 'vereinbaren', es: 'acordar, concertar', note: 'vereinbart – vereinbarte – hat vereinbart', ex: 'Ich vereinbare einen Termin mit dem Kunden.', exes: 'Concierto una cita con el cliente.'},
        {de: 'erledigen', es: 'resolver, hacer (una tarea)', note: 'erledigt – erledigte – hat erledigt', ex: 'Ich erledige das noch vor dem Mittagessen.', exes: 'Lo resuelvo antes del almuerzo.'},
        {de: 'sich kümmern um', es: 'ocuparse de', note: 'kümmert sich – kümmerte sich – hat sich gekümmert', ex: 'Murat kümmert sich um die Rechnungen.', exes: 'Murat se ocupa de las facturas.'},
        {de: 'organisieren', es: 'organizar', note: 'organisiert – organisierte – hat organisiert', ex: 'Frau Weber organisiert das Treffen im Mai.', exes: 'La señora Weber organiza la reunión de mayo.'},
        {de: 'das Protokoll', pl: 'die Protokolle', es: 'el acta, el protocolo', ex: 'Wer schreibt heute das Protokoll?', exes: '¿Quién escribe hoy el acta?'},
        {de: 'beschäftigt', es: 'ocupado', ex: 'Entschuldigung, ich bin gerade sehr beschäftigt.', exes: 'Perdona, ahora mismo estoy muy ocupado.'}
      ],
      phrases: [
        {de: 'Kannst du bitte … ?', es: '¿Puedes … , por favor?', use: 'pedir (informal)'},
        {de: 'Könnten Sie bitte … ?', es: '¿Podría usted … , por favor?', use: 'pedir (formal)'},
        {de: 'Ich brauche das bis morgen.', es: 'Lo necesito para mañana.', use: 'dar plazo'},
        {de: 'Ich kümmere mich darum.', es: 'Yo me ocupo de eso.', use: 'aceptar'},
        {de: 'Das mache ich sofort.', es: 'Lo hago ahora mismo.', use: 'aceptar'},
        {de: 'Kein Problem!', es: '¡Ningún problema!', use: 'aceptar'},
        {de: 'Das schaffe ich leider nicht.', es: 'Eso, por desgracia, no lo consigo.', use: 'rechazar'},
        {de: 'Dafür habe ich keine Zeit.', es: 'Para eso no tengo tiempo.', use: 'rechazar'},
        {de: 'Ich bin gerade beschäftigt, aber später gern.', es: 'Ahora estoy ocupado, pero luego con gusto.', use: 'aplazar'},
        {de: 'Deshalb muss ich …', es: 'Por eso tengo que …', use: 'consecuencia'}
      ],
      dialog: {
        title: 'Viel zu tun im Büro',
        lines: [
          {s: 'A', de: 'Tim, hast du kurz Zeit? Ich brauche deine Hilfe.', es: 'Tim, ¿tienes un momento? Necesito tu ayuda.'},
          {s: 'B', de: 'Natürlich, Frau Weber. Worum geht es?', es: 'Claro, señora Weber. ¿De qué se trata?'},
          {s: 'A', de: 'Der Kunde kommt morgen früh. Könnten Sie bitte die Unterlagen kopieren?', es: 'El cliente viene mañana temprano. ¿Podría fotocopiar los documentos?'},
          {s: 'B', de: 'Kein Problem, ich kümmere mich darum. Wie viele Kopien brauchen Sie?', es: 'Ningún problema, yo me ocupo. ¿Cuántas copias necesita?'},
          {s: 'A', de: 'Zehn Stück. Außerdem muss jemand das Protokoll von gestern schreiben.', es: 'Diez. Además, alguien tiene que escribir el acta de ayer.'},
          {s: 'B', de: 'Das schaffe ich heute leider nicht. Ich habe schon drei Termine.', es: 'Eso hoy no lo consigo, lo siento. Ya tengo tres citas.'},
          {s: 'A', de: 'Dann frage ich Lena. Sie ist nicht so beschäftigt.', es: 'Entonces se lo pregunto a Lena. Ella no está tan ocupada.'},
          {s: 'B', de: 'Gute Idee. Der Drucker ist übrigens kaputt, deshalb drucke ich im anderen Büro.', es: 'Buena idea. Por cierto, la impresora está rota, por eso imprimo en la otra oficina.'},
          {s: 'A', de: 'Danke für die Information. Dann rufe ich den Techniker an.', es: 'Gracias por el aviso. Entonces llamo al técnico.'},
          {s: 'B', de: 'Super. Die Kopien lege ich bis zehn Uhr auf Ihren Tisch.', es: 'Estupendo. Las copias las dejo en su mesa antes de las diez.'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Der Drucker ist kaputt. ___ muss ich die Datei per E-Mail schicken.', o: ['Weil', 'Deshalb', 'Dass'], a: 1, why: 'Se expresa una consecuencia: deshalb (por eso) va en posición 1 y el verbo muss en posición 2.'},
        {t: 'mc', q: 'Ich habe viel zu tun, deshalb ___ heute länger.', o: ['ich bleibe', 'bleibe ich', 'ich bleiben'], a: 1, why: 'Tras deshalb (posición 1) el verbo conjugado va en posición 2 y el sujeto después: bleibe ich.'},
        {t: 'mc', q: 'Murat ist krank. Deshalb ___ Anna den Termin.', o: ['übernehmen', 'übernommen', 'übernimmt'], a: 2, why: 'Tras deshalb va el verbo conjugado; Anna es singular, así que übernimmt.'},
        {t: 'mc', q: 'Ich komme zu spät, ___ ich den Bus verpasst habe.', o: ['deshalb', 'weil', 'ob'], a: 1, why: 'Aquí se da la causa con el verbo al final (verpasst habe): eso es weil, no deshalb.'},
        {t: 'mc', q: 'Der Chef fragt: „Kannst du bitte den Bericht bis morgen schreiben?“ ¿Qué respuesta es una aceptación?', o: ['Das schaffe ich nicht.', 'Dafür habe ich keine Zeit.', 'Ich kümmere mich darum.'], a: 2, why: 'Ich kümmere mich darum significa que aceptas y te ocupas del encargo.'},
        {t: 'mc', q: 'Kollege: „Kannst du heute noch fünfzig Seiten kopieren?“ Du hast gleich einen Termin. Du sagst:', o: ['Kein Problem!', 'Das schaffe ich leider nicht.', 'Mache ich sofort.'], a: 1, why: 'Para rechazar con cortesía se dice Das schaffe ich leider nicht.'},
        {t: 'gap', q: 'Die Besprechung beginnt um acht. ___ stehe ich früh auf.', a: ['Deshalb', 'Deswegen', 'Daher', 'Darum'], why: 'Es la consecuencia; cualquier conector causal (deshalb, deswegen, daher, darum) con verbo en posición 2.'},
        {t: 'gap', q: 'Der Kunde ruft an. Deshalb ___ ich den Bericht später. (schreiben)', a: ['schreibe'], why: 'Tras deshalb el verbo va en posición 2: schreibe ich.'},
        {t: 'gap', q: 'Kannst du mir helfen? – Ja, ich ___ mich darum. (sich kümmern)', a: ['kümmere'], why: 'Ich kümmere mich darum: la primera persona termina en -e.'},
        {t: 'gap', q: 'Wir haben viele Aufträge. Deshalb ___ wir mehr Kollegen. (brauchen)', a: ['brauchen'], why: 'Tras deshalb va el verbo en posición 2 y con wir termina en -en.'},
        {t: 'order', es: 'Por eso tengo que trabajar más tiempo.', de: 'Deshalb muss ich länger arbeiten.', why: 'Deshalb en posición 1, el modal muss en posición 2 y el infinitivo al final.'},
        {t: 'order', es: 'La impresora está rota, por eso llamo al técnico.', de: 'Der Drucker ist kaputt, deshalb rufe ich den Techniker an.', why: 'Tras deshalb el verbo separable (rufe … an) ocupa la posición 2 y la partícula va al final.'},
        {t: 'order', es: 'Yo me ocupo de eso enseguida.', de: 'Ich kümmere mich sofort darum.', why: 'Verbo reflexivo en posición 2, mich después y darum al final.'},
        {t: 'tr', es: 'Tengo mucho trabajo. Por eso me quedo más tiempo en la oficina.', de: ['Ich habe viel Arbeit. Deshalb bleibe ich länger im Büro.', 'Ich habe viel Arbeit, deshalb bleibe ich länger im Büro.'], why: ''},
        {t: 'tr', es: '¿Puedes enviar por favor el correo al cliente?', de: ['Kannst du bitte die E-Mail an den Kunden schicken?', 'Kannst du bitte dem Kunden die E-Mail schicken?'], why: ''},
        {t: 'fix', q: 'Ich habe keine Zeit, deshalb ich kann nicht kommen.', a: ['Ich habe keine Zeit, deshalb kann ich nicht kommen.', 'Ich habe keine Zeit. Deshalb kann ich nicht kommen.'], why: 'Tras deshalb el verbo conjugado va en posición 2: deshalb kann ich.'},
        {t: 'fix', q: 'Ich bin müde, weil habe ich schlecht geschlafen.', a: ['Ich bin müde, weil ich schlecht geschlafen habe.'], why: 'Con weil el verbo conjugado (habe) va al final de la subordinada.'},
        {t: 'match', pairs: [['der Bericht', 'el informe'], ['die Besprechung', 'la reunión'], ['der Drucker', 'la impresora'], ['die Frist', 'el plazo'], ['der Auftrag', 'el encargo'], ['die Unterlagen', 'los documentos']]}
      ],
      speak: [
        {prompt: 'Imagina que tu compañera Lena te pide copiar unos documentos y no tienes tiempo. Responde en 3-4 frases: rechaza con cortesía, explica el motivo con deshalb y propón otro momento.', model: 'Lena, das schaffe ich leider gerade nicht. Ich habe in zehn Minuten eine Besprechung. Deshalb muss ich die Unterlagen noch vorbereiten. Aber nach der Besprechung kümmere ich mich gern darum.'},
        {prompt: 'Eres jefe/jefa. Da tres encargos a tu equipo para esta semana con Könnten Sie bitte … / Kannst du bitte … y pon un plazo.', model: 'Anna, kannst du bitte den Bericht bis Mittwoch schreiben? Tim, könntest du bitte einen Termin mit dem Kunden vereinbaren? Und Lena, kannst du bitte die Unterlagen bis Freitag kopieren? Danke euch!'},
        {prompt: 'Para uso real: cuenta en voz alta (5 frases) un día muy ocupado en tu trabajo y usa deshalb al menos 3 veces.', model: 'Heute habe ich viele Schüler. Deshalb stehe ich früh auf. Am Vormittag gebe ich drei Stunden Unterricht, deshalb habe ich keine Pause. Am Nachmittag muss ich Aufgaben korrigieren. Deshalb bleibe ich bis acht Uhr am Computer.'}
      ]
    },
    {
      id: 'a2-05',
      title: 'Über das Wochenende',
      es: 'Eventos, conciertos y festivales',
      goals: [
        'Expresar duración y límites de tiempo con über, seit y bis zum',
        'Valorar un evento (concierto, festival, exposición)',
        'Proponer algo y reaccionar a una propuesta',
        'Convencer a alguien de que venga contigo'
      ],
      grammar: [
        {
          h: 'über + Akkusativ: durante un período',
          p: 'Con <span class="de">über</span> indicas que algo ocurre <b>a lo largo de</b> un período de tiempo, normalmente un fin de semana, unas fiestas o varios días. Se construye con <b>Akkusativ</b>. El caso más común es <span class="de">über das Wochenende</span> (durante el fin de semana). Otras: <span class="de">über die Feiertage, über Weihnachten, über den Sommer</span>. En el lenguaje cotidiano <span class="de">über das</span> se contrae a <span class="de">übers</span>: <span class="de">übers Wochenende</span>.',
          table: {
            head: ['Genus', 'über + Akk.', 'Ejemplo'],
            rows: [
              ['das Wochenende', 'über <b>das</b> Wochenende / übers', 'Wir fahren über das Wochenende zum Festival.'],
              ['der Sommer', 'über <b>den</b> Sommer', 'Über den Sommer arbeitet sie im Café.'],
              ['die Feiertage (pl.)', 'über <b>die</b> Feiertage', 'Über die Feiertage bleiben wir zu Hause.'],
              ['Weihnachten', 'über Weihnachten', 'Über Weihnachten besuche ich meine Eltern.']
            ]
          },
          ex: [
            {de: 'Wir bleiben über das Wochenende in Hamburg.', es: 'Nos quedamos en Hamburgo durante el fin de semana.'},
            {de: 'Das Festival findet übers Wochenende statt.', es: 'El festival se celebra durante el fin de semana.'},
            {de: 'Über die Feiertage ist die Ausstellung geschlossen.', es: 'Durante las fiestas la exposición está cerrada.'},
            {de: 'Über den Sommer spielt die Band auf vielen Bühnen.', es: 'Durante el verano la banda toca en muchos escenarios.'},
            {de: 'Ich arbeite über Weihnachten nicht.', es: 'En Navidad no trabajo.'}
          ],
          tip: 'Aquí <span class="de">über</span> siempre lleva <b>Akkusativ</b> (<span class="de">über das Wochenende</span>, no <i>über dem</i>). No lo traduzcas con <i>por</i> o <i>sobre</i>: significa <i>durante / a lo largo de</i>.'
        },
        {
          h: 'seit + Dativ: desde hace',
          p: '<span class="de">seit</span> indica que algo <b>empezó en el pasado y sigue ahora</b>. Después de seit usamos <b>Dativ</b> y el verbo va normalmente en <b>presente</b> (como en español <i>vivo aquí desde hace dos años</i>). Puede ir con un período (<span class="de">seit zwei Jahren</span>) o con un punto de inicio (<span class="de">seit Montag, seit 2020</span>). Pregunta: <span class="de">Seit wann …?</span>. Terminaciones del Dativ: masculino y neutro <b>-em</b>, femenino <b>-er</b>, plural <b>-n</b> en el sustantivo.',
          table: {
            head: ['Genus', 'seit + Dativ', 'Ejemplo'],
            rows: [
              ['der Monat (m)', 'seit <b>einem</b> Monat', 'Ich lerne seit einem Monat Gitarre.'],
              ['das Jahr (n)', 'seit <b>einem</b> Jahr', 'Er spielt seit einem Jahr in einer Band.'],
              ['die Woche (f)', 'seit <b>einer</b> Woche', 'Ich warte seit einer Woche auf die Karten.'],
              ['die Tage (pl.)', 'seit zwei Tag<b>en</b>', 'Sie ist seit zwei Tagen in Berlin.'],
              ['Punto de inicio', 'seit Montag / seit 2021', 'Seit Montag ist das Festival ausverkauft.']
            ]
          },
          ex: [
            {de: 'Ich wohne seit drei Jahren in Köln.', es: 'Vivo en Colonia desde hace tres años.'},
            {de: 'Seit wann kennst du diese Band?', es: '¿Desde cuándo conoces a esta banda?'},
            {de: 'Wir suchen seit einer Stunde nach Karten.', es: 'Llevamos una hora buscando entradas.'},
            {de: 'Das Theater ist seit Montag geschlossen.', es: 'El teatro está cerrado desde el lunes.'},
            {de: 'Lena geht seit einem Monat zu jedem Konzert.', es: 'Lena va a todos los conciertos desde hace un mes.'}
          ],
          tip: 'En español decimos <i>desde hace tres años vivo</i>; en alemán el verbo también va en presente: <span class="de">Ich wohne seit drei Jahren hier</span>, no <i>wohnte</i>. No lo mezcles con <span class="de">vor drei Jahren</span> (<i>hace tres años</i>, algo ya terminado).'
        },
        {
          h: 'von … bis (zum) + Dativ: límites de tiempo',
          p: 'Con <span class="de">von … bis</span> marcas el <b>inicio y el final</b> de algo. Con días de la semana: <span class="de">von Montag bis Freitag</span>. Con fechas se usan los <b>números ordinales</b> y el Dativ: <span class="de">vom 5. bis zum 7. Juli</span> (leído: <i>vom fünften bis zum siebten Juli</i>). <span class="de">vom</span> = von + dem y <span class="de">zum</span> = zu + dem. La ordinal siempre lleva <b>-ten</b> hasta el 19 (<i>ersten, dritten, siebten</i>) y <b>-sten</b> desde el 20 (<i>zwanzigsten</i>). Si solo hay un límite: <span class="de">bis zum Sonntag</span> (hasta el domingo).',
          table: {
            head: ['Estructura', 'Ejemplo', 'Traducción'],
            rows: [
              ['von + día bis + día', 'von Freitag bis Sonntag', 'de viernes a domingo'],
              ['vom + fecha bis zum + fecha', 'vom 3. bis zum 10. Mai', 'del 3 al 10 de mayo'],
              ['bis zum + fecha', 'bis zum 20. Juni', 'hasta el 20 de junio'],
              ['von … bis … Uhr', 'von 18 bis 22 Uhr', 'de 18 a 22 horas']
            ]
          },
          ex: [
            {de: 'Das Festival dauert von Freitag bis Sonntag.', es: 'El festival dura de viernes a domingo.'},
            {de: 'Die Ausstellung ist vom ersten bis zum zehnten Mai geöffnet.', es: 'La exposición está abierta del 1 al 10 de mayo.'},
            {de: 'Du kannst die Karten bis zum Donnerstag abholen.', es: 'Puedes recoger las entradas hasta el jueves.'},
            {de: 'Das Konzert findet am 20. Juni statt, von 19 bis 22 Uhr.', es: 'El concierto es el 20 de junio, de 19 a 22 horas.'},
            {de: 'Der Vorverkauf läuft bis zum 15. September.', es: 'La venta anticipada dura hasta el 15 de septiembre.'}
          ],
          tip: 'Tras <span class="de">von</span> y <span class="de">bis zu</span> el sustantivo va en <b>Dativ</b>: <span class="de">vom Wochenende, bis zum Sonntag</span>. No olvides el punto tras el número ordinal escrito con cifra (<span class="de">5.</span>).'
        },
        {
          h: 'Valorar, proponer y convencer',
          p: 'Para <b>valorar</b> un evento usa adjetivos y <span class="de">Ich fand … + Adjektiv</span> o <span class="de">Es war …</span>. Para <b>proponer</b>: <span class="de">Wollen wir …?</span>, <span class="de">Hast du Lust auf …?</span>, <span class="de">Wie wäre es mit …?</span>. Para <b>aceptar</b>: <span class="de">Gute Idee!, Gern!, Ich bin dabei.</span>. Para <b>rechazar</b>: <span class="de">Leider kann ich nicht, ich habe schon etwas vor.</span>. Para <b>convencer</b>: <span class="de">Komm doch mit!, Das lohnt sich bestimmt!, Du wirst es nicht bereuen.</span>.',
          table: {
            head: ['Función', 'Frase'],
            rows: [
              ['Valorar', 'Das Konzert war toll. / Die Stimmung war super.'],
              ['Proponer', 'Wollen wir am Samstag zum Festival gehen?'],
              ['Aceptar', 'Gute Idee! / Ich bin dabei!'],
              ['Rechazar', 'Leider habe ich schon etwas vor.'],
              ['Convencer', 'Komm doch mit! Es lohnt sich bestimmt.']
            ]
          },
          ex: [
            {de: 'Wollen wir am Samstag ins Konzert gehen?', es: '¿Vamos el sábado al concierto?'},
            {de: 'Hast du Lust auf eine Ausstellung?', es: '¿Te apetece una exposición?'},
            {de: 'Gute Idee, ich bin dabei!', es: '¡Buena idea, me apunto!'},
            {de: 'Komm doch mit, es lohnt sich bestimmt!', es: '¡Ven con nosotros, seguro que merece la pena!'},
            {de: 'Die Stimmung auf dem Festival war fantastisch.', es: 'El ambiente en el festival fue fantástico.'}
          ],
          tip: 'La expresión <span class="de">Ich bin dabei</span> no es <i>estoy allí</i>: significa <i>cuenten conmigo, me apunto</i>. Y <span class="de">sich lohnen</span> es <i>merecer la pena</i>.'
        }
      ],
      vocab: [
        {de: 'das Konzert', pl: 'die Konzerte', es: 'el concierto', ex: 'Das Konzert beginnt um acht Uhr abends.', exes: 'El concierto empieza a las ocho de la tarde.'},
        {de: 'das Festival', pl: 'die Festivals', es: 'el festival', ex: 'Im Sommer fahren wir zu einem Festival am See.', exes: 'En verano vamos a un festival junto al lago.'},
        {de: 'die Ausstellung', pl: 'die Ausstellungen', es: 'la exposición', ex: 'Die Ausstellung über Fotos ist sehr interessant.', exes: 'La exposición de fotos es muy interesante.'},
        {de: 'die Karte', pl: 'die Karten', es: 'la entrada', ex: 'Hast du schon Karten für das Konzert?', exes: '¿Ya tienes entradas para el concierto?'},
        {de: 'der Eintritt', es: 'la entrada, el precio de entrada', ex: 'Der Eintritt für Kinder ist frei.', exes: 'La entrada para niños es gratuita.'},
        {de: 'das Programm', pl: 'die Programme', es: 'el programa', ex: 'Das Programm hängt am Eingang.', exes: 'El programa está colgado en la entrada.'},
        {de: 'die Veranstaltung', pl: 'die Veranstaltungen', es: 'el evento', ex: 'Die Veranstaltung ist leider ausverkauft.', exes: 'El evento está agotado, por desgracia.'},
        {de: 'die Bühne', pl: 'die Bühnen', es: 'el escenario', ex: 'Die Band steht schon auf der Bühne.', exes: 'La banda ya está en el escenario.'},
        {de: 'die Band', pl: 'die Bands', es: 'la banda', ex: 'Meine Lieblingsband spielt im August in Berlin.', exes: 'Mi banda favorita toca en agosto en Berlín.'},
        {de: 'das Publikum', es: 'el público', ex: 'Das Publikum hat laut applaudiert.', exes: 'El público aplaudió con fuerza.'},
        {de: 'die Stimmung', pl: 'die Stimmungen', es: 'el ambiente', ex: 'Die Stimmung bei dem Konzert war großartig.', exes: 'El ambiente en el concierto fue estupendo.'},
        {de: 'der Auftritt', pl: 'die Auftritte', es: 'la actuación', ex: 'Der Auftritt der Band dauert zwei Stunden.', exes: 'La actuación de la banda dura dos horas.'},
        {de: 'der Vorverkauf', es: 'la venta anticipada', ex: 'Im Vorverkauf sind die Karten billiger.', exes: 'En venta anticipada las entradas son más baratas.'},
        {de: 'das Zelt', pl: 'die Zelte', es: 'la tienda de campaña, la carpa', ex: 'Auf dem Festival schlafen wir im Zelt.', exes: 'En el festival dormimos en tienda de campaña.'},
        {de: 'statt|finden', es: 'tener lugar, celebrarse', note: 'findet statt – fand statt – hat stattgefunden', ex: 'Das Konzert findet im Park statt.', exes: 'El concierto se celebra en el parque.'},
        {de: 'vor|schlagen', es: 'proponer', note: 'schlägt vor – schlug vor – hat vorgeschlagen', ex: 'Ich schlage vor, dass wir früh hingehen.', exes: 'Propongo que vayamos temprano.'},
        {de: 'überzeugen', es: 'convencer', note: 'überzeugt – überzeugte – hat überzeugt', ex: 'Du hast mich überzeugt, ich komme mit.', exes: 'Me has convencido, voy contigo.'},
        {de: 'sich lohnen', es: 'merecer la pena', note: 'lohnt sich – lohnte sich – hat sich gelohnt', ex: 'Der Besuch der Ausstellung lohnt sich.', exes: 'Merece la pena visitar la exposición.'},
        {de: 'ausverkauft', es: 'agotado', ex: 'Das Festival ist seit Wochen ausverkauft.', exes: 'El festival está agotado desde hace semanas.'}
      ],
      phrases: [
        {de: 'Wollen wir … ?', es: '¿Queremos / vamos a … ?', use: 'proponer'},
        {de: 'Hast du Lust auf … ?', es: '¿Te apetece … ?', use: 'proponer'},
        {de: 'Wie wäre es mit … ?', es: '¿Qué te parece … ?', use: 'proponer'},
        {de: 'Gute Idee, ich bin dabei!', es: '¡Buena idea, me apunto!', use: 'aceptar'},
        {de: 'Leider habe ich schon etwas vor.', es: 'Por desgracia ya tengo otros planes.', use: 'rechazar'},
        {de: 'Komm doch mit!', es: '¡Anda, ven con nosotros!', use: 'convencer'},
        {de: 'Das lohnt sich bestimmt.', es: 'Seguro que merece la pena.', use: 'convencer'},
        {de: 'Du wirst es nicht bereuen.', es: 'No te arrepentirás.', use: 'convencer'},
        {de: 'Die Stimmung war toll.', es: 'El ambiente fue genial.', use: 'valorar'},
        {de: 'Es war leider ziemlich langweilig.', es: 'Por desgracia fue bastante aburrido.', use: 'valorar'}
      ],
      dialog: {
        title: 'Karten fürs Festival',
        lines: [
          {s: 'A', de: 'Hallo Lena! Hast du am Wochenende schon etwas vor?', es: '¡Hola Lena! ¿Ya tienes planes para el fin de semana?'},
          {s: 'B', de: 'Noch nicht. Warum fragst du?', es: 'Todavía no. ¿Por qué lo preguntas?'},
          {s: 'A', de: 'Das Musikfestival am See ist vom Freitag bis zum Sonntag. Wollen wir hingehen?', es: 'El festival de música junto al lago es de viernes a domingo. ¿Vamos?'},
          {s: 'B', de: 'Hm, ich weiß nicht. Ich bin seit einer Woche ziemlich müde.', es: 'Mm, no sé. Llevo una semana bastante cansada.'},
          {s: 'A', de: 'Komm doch mit! Wir übernachten im Zelt und die Stimmung ist bestimmt super.', es: '¡Anda, ven! Dormimos en una tienda y seguro que el ambiente es genial.'},
          {s: 'B', de: 'Und was kosten die Karten? Der Eintritt ist sicher teuer.', es: '¿Y cuánto cuestan las entradas? La entrada seguro que es cara.'},
          {s: 'A', de: 'Im Vorverkauf nur sechzig Euro für das ganze Wochenende.', es: 'En venta anticipada solo sesenta euros por todo el fin de semana.'},
          {s: 'B', de: 'Das ist okay. Welche Bands spielen denn?', es: 'Eso está bien. ¿Y qué bandas tocan?'},
          {s: 'A', de: 'Deine Lieblingsband spielt am Samstag. Das lohnt sich bestimmt!', es: 'Tu banda favorita toca el sábado. ¡Seguro que merece la pena!'},
          {s: 'B', de: 'Okay, du hast mich überzeugt. Ich bin dabei!', es: 'Vale, me has convencido. ¡Me apunto!'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Wir bleiben ___ das ganze Wochenende auf dem Festival.', o: ['seit', 'über', 'bis'], a: 1, why: 'Para un período de tiempo, como el fin de semana, se usa über + Akkusativ.'},
        {t: 'mc', q: 'Ich warte ___ einer Stunde auf die Karten.', o: ['über', 'bis', 'seit'], a: 2, why: 'La espera empezó antes y continúa: seit + Dativ (einer Stunde).'},
        {t: 'mc', q: 'Die Ausstellung läuft vom 3. ___ zum 20. Mai.', o: ['seit', 'über', 'bis'], a: 2, why: 'Para marcar el final se usa vom … bis zum …'},
        {t: 'mc', q: 'Seit ___ Jahr spielt sie in einer Band.', o: ['ein', 'einem', 'einen'], a: 1, why: 'seit exige Dativ; das Jahr es neutro, por eso einem.'},
        {t: 'mc', q: 'Tim: „Wollen wir am Samstag ins Konzert gehen?“ ¿Qué respuesta es una aceptación?', o: ['Leider habe ich schon etwas vor.', 'Gute Idee, ich bin dabei!', 'Das ist mir zu teuer.'], a: 1, why: 'Gute Idee, ich bin dabei! es la forma de aceptar una propuesta.'},
        {t: 'mc', q: 'Komm doch mit! Es ___ sich bestimmt.', o: ['lohnt', 'lohne', 'lohnen'], a: 0, why: 'El sujeto es es (3.ª persona singular): lohnt sich.'},
        {t: 'gap', q: 'Das Festival dauert ___ Freitag bis zum Sonntag.', a: ['von', 'vom'], why: 'La estructura es von/vom … bis zum …'},
        {t: 'gap', q: 'Ich wohne ___ drei Jahren in Köln.', a: ['seit'], why: 'Algo que empezó hace tres años y sigue: seit + Dativ, con verbo en presente.'},
        {t: 'gap', q: 'Wir bleiben über ___ Wochenende bei Freunden. (das)', a: ['das'], why: 'über en períodos de tiempo exige Akkusativ; das Wochenende → das.'},
        {t: 'gap', q: 'Seit ___ Woche suche ich Karten für das Konzert. (ein)', a: ['einer'], why: 'seit + Dativ; die Woche es femenino, por tanto einer.'},
        {t: 'order', es: 'El festival dura hasta el domingo.', de: 'Das Festival dauert bis zum Sonntag.', why: 'bis zum + Dativ (dem Sonntag) marca el límite final.'},
        {t: 'order', es: 'Llevamos una hora esperando entradas.', de: 'Wir warten seit einer Stunde auf Karten.', why: 'seit + Dativ (einer Stunde) con el verbo en presente en 2ª posición.'},
        {t: 'order', es: '¡Ven, seguro que merece la pena!', de: 'Komm doch mit, es lohnt sich bestimmt!', why: 'Imperativo con mitkommen: Komm … mit; después la oración con lohnt sich.'},
        {t: 'tr', es: 'Toco en esta banda desde hace dos semanas.', de: ['Ich spiele seit zwei Wochen in dieser Band.', 'Seit zwei Wochen spiele ich in dieser Band.'], why: ''},
        {t: 'tr', es: 'La exposición está abierta del 5 al 12 de junio.', de: ['Die Ausstellung ist vom 5. bis zum 12. Juni geöffnet.', 'Die Ausstellung ist vom fünften bis zum zwölften Juni geöffnet.'], why: ''},
        {t: 'fix', q: 'Ich lerne seit ein Jahr Gitarre.', a: ['Ich lerne seit einem Jahr Gitarre.'], why: 'seit exige Dativ: das Jahr → einem Jahr.'},
        {t: 'fix', q: 'Wir bleiben über dem Wochenende in Berlin.', a: ['Wir bleiben über das Wochenende in Berlin.', 'Wir bleiben übers Wochenende in Berlin.'], why: 'En expresiones de tiempo, über lleva Akkusativ: über das Wochenende.'},
        {t: 'match', pairs: [['das Konzert', 'el concierto'], ['die Karte', 'la entrada'], ['die Bühne', 'el escenario'], ['das Publikum', 'el público'], ['ausverkauft', 'agotado'], ['das Zelt', 'la tienda de campaña']]}
      ],
      speak: [
        {prompt: 'Cuéntale a un amigo un evento (concierto, festival o exposición) al que fuiste. Di cuándo fue (über / vom … bis zum) y cómo estuvo el ambiente. 4-5 frases.', model: 'Ich war vom 12. bis zum 14. Juli auf einem Festival. Wir sind über das Wochenende geblieben. Die Stimmung war fantastisch und das Publikum war sehr freundlich. Die Karten waren nicht billig, aber es hat sich gelohnt.'},
        {prompt: 'Convence a una amiga que no tiene muchas ganas de ir contigo a una exposición. Usa Komm doch mit, Das lohnt sich y una razón. 3-4 frases.', model: 'Komm doch mit! Die Ausstellung läuft nur bis zum Sonntag. Der Eintritt ist am Freitag frei. Ich bin sicher, das lohnt sich bestimmt.'},
        {prompt: 'Para uso real: preséntate en voz alta diciendo desde hace cuánto tiempo haces algo (seit …): trabajo, ciudad, un hobby. 4 frases.', model: 'Ich wohne seit fünf Jahren in dieser Stadt. Ich arbeite seit drei Jahren als Lehrer. Seit einem Jahr lerne ich Deutsch. Seit einem Monat gehe ich jede Woche ins Fitnessstudio.'}
      ]
    },
    {
      id: 'a2-06',
      title: 'Du könntest mal joggen',
      es: 'Deporte, consejos y propuestas',
      goals: [
        'Dar consejos con könnte y sollte (Konjunktiv II)',
        'Hacer propuestas amables: Wir könnten …, Wie wäre es mit …?',
        'Pedir consejo y reaccionar con entusiasmo o desgana',
        'Hablar de deporte y fitness'
      ],
      grammar: [
        {
          h: 'könnte y sollte: Konjunktiv II para consejos',
          p: 'El <b>Konjunktiv II</b> sirve para dar consejos y propuestas de forma <b>suave y cortés</b>. Con dos verbos modales ya es muy fácil: <span class="de">könnte</span> (<i>podría</i>, propuesta) y <span class="de">sollte</span> (<i>debería</i>, consejo). Las formas se parecen al Präteritum, pero el contexto indica que es un consejo, no un hecho pasado. El otro verbo va en <b>infinitivo al final</b>: <span class="de">Du könntest mehr schwimmen</span>. Con <span class="de">sollte</span> el consejo es más fuerte; con <span class="de">könnte</span> es una idea abierta.',
          table: {
            head: ['Persona', 'können → könnte', 'sollen → sollte'],
            rows: [
              ['ich', 'könnte', 'sollte'],
              ['du', 'könntest', 'solltest'],
              ['er / sie / es', 'könnte', 'sollte'],
              ['wir', 'könnten', 'sollten'],
              ['ihr', 'könntet', 'solltet'],
              ['sie / Sie', 'könnten', 'sollten']
            ]
          },
          ex: [
            {de: 'Du könntest öfter joggen gehen.', es: 'Podrías ir a correr más a menudo.'},
            {de: 'Du solltest mehr Wasser trinken.', es: 'Deberías beber más agua.'},
            {de: 'Wir könnten am Samstag zusammen schwimmen.', es: 'Podríamos nadar juntos el sábado.'},
            {de: 'Ihr solltet euch vor dem Training aufwärmen.', es: 'Deberíais calentar antes del entrenamiento.'},
            {de: 'Er sollte nicht so viel Süßes essen.', es: 'No debería comer tanto dulce.'}
          ],
          tip: 'En ich y er/sie/es <span class="de">könnte</span> y <span class="de">sollte</span> no llevan terminación (igual que en Präteritum). <span class="de">Du sollst</span> es una orden; <span class="de">du solltest</span> es un consejo. En español es la misma diferencia entre <i>debes</i> y <i>deberías</i>.'
        },
        {
          h: 'würde + infinitivo y Wie wäre es mit …?',
          p: 'Para casi todos los demás verbos el Konjunktiv II se forma con <span class="de">würde + infinitivo</span> (infinitivo al final). Es muy útil para decir <b>qué harías tú</b> en lugar de otra persona: <span class="de">An deiner Stelle würde ich …</span> (en tu lugar yo …). Otra propuesta muy común es <span class="de">Wie wäre es mit + Dativ?</span> (<i>¿qué tal si …?</i>) o <span class="de">Wie wäre es, wenn …?</span>. Con wäre solo cambia el sustantivo: <span class="de">mit einem Training, mit Yoga</span>.',
          table: {
            head: ['Persona', 'würde', 'Ejemplo'],
            rows: [
              ['ich', 'würde', 'Ich würde mehr trainieren.'],
              ['du', 'würdest', 'Würdest du mit mir joggen?'],
              ['er / sie / es', 'würde', 'Sie würde gern klettern.'],
              ['wir', 'würden', 'Wir würden gern schwimmen.'],
              ['ihr', 'würdet', 'Würdet ihr mitkommen?'],
              ['sie / Sie', 'würden', 'Sie würden mehr Spaß haben.']
            ]
          },
          ex: [
            {de: 'An deiner Stelle würde ich jeden Tag trainieren.', es: 'En tu lugar yo entrenaría todos los días.'},
            {de: 'Wie wäre es mit einem Yogakurs?', es: '¿Qué tal un curso de yoga?'},
            {de: 'Ich würde gern mal klettern gehen.', es: 'Me gustaría ir a escalar alguna vez.'},
            {de: 'Würdest du mit mir ins Schwimmbad gehen?', es: '¿Irías conmigo a la piscina?'},
            {de: 'Wie wäre es, wenn wir am Sonntag Rad fahren?', es: '¿Y si el domingo vamos en bici?'}
          ],
          tip: 'Con <span class="de">würde</span> el infinitivo va <b>siempre al final</b>: <span class="de">Ich würde gern ins Fitnessstudio <b>gehen</b></span>. No conjugues el segundo verbo (<i>Ich würde gehe</i> es incorrecto).'
        },
        {
          h: 'Pedir consejo, mostrar entusiasmo o desgana',
          p: 'Para <b>pedir consejo</b>: <span class="de">Was soll ich tun?, Was würdest du mir raten?, Was empfiehlst du mir?</span>. Para <b>entusiasmo</b>: <span class="de">Super Idee!, Da habe ich total Lust drauf!, Ich bin sofort dabei!</span>. Para <b>desgana</b>: <span class="de">Dazu habe ich keine Lust., Das ist nichts für mich., Lieber nicht.</span>. Con <span class="de">Lust haben auf + Akk.</span> hablas de ganas de algo (<span class="de">Ich habe Lust auf Fußball</span>) y con <span class="de">Lust haben, … zu + Inf.</span> de ganas de hacer algo.',
          table: {
            head: ['Función', 'Frase'],
            rows: [
              ['Pedir consejo', 'Was würdest du mir raten? / Was soll ich tun?'],
              ['Dar consejo', 'Du solltest … / An deiner Stelle würde ich …'],
              ['Entusiasmo', 'Super Idee! / Ich habe total Lust darauf!'],
              ['Desgana', 'Dazu habe ich keine Lust. / Das ist nichts für mich.'],
              ['Aceptar', 'Okay, das probiere ich aus.']
            ]
          },
          ex: [
            {de: 'Ich bin oft müde. Was würdest du mir raten?', es: 'Estoy a menudo cansado. ¿Qué me aconsejarías?'},
            {de: 'Du könntest abends spazieren gehen.', es: 'Podrías dar un paseo por las noches.'},
            {de: 'Klettern? Super Idee, da habe ich total Lust drauf!', es: '¿Escalar? ¡Buena idea, tengo muchas ganas!'},
            {de: 'Joggen ist nichts für mich, ich habe keine Lust dazu.', es: 'Correr no es lo mío, no tengo ganas.'},
            {de: 'Okay, das probiere ich gleich morgen aus.', es: 'Vale, eso lo pruebo mañana mismo.'}
          ],
          tip: 'Ojo: <span class="de">Ich habe keine Lust</span> es más directo que el español <i>no me apetece</i>. Para sonar más suave añade <span class="de">leider</span> o una razón: <span class="de">Leider habe ich heute keine Lust, ich bin müde.</span>'
        }
      ],
      vocab: [
        {de: 'der Sport', es: 'el deporte', ex: 'Ich mache dreimal pro Woche Sport.', exes: 'Hago deporte tres veces por semana.'},
        {de: 'die Sportart', pl: 'die Sportarten', es: 'el tipo de deporte', ex: 'Welche Sportart gefällt dir am besten?', exes: '¿Qué deporte te gusta más?'},
        {de: 'das Fitnessstudio', pl: 'die Fitnessstudios', es: 'el gimnasio', ex: 'Das Fitnessstudio ist bis 22 Uhr geöffnet.', exes: 'El gimnasio está abierto hasta las 22 horas.'},
        {de: 'der Verein', pl: 'die Vereine', es: 'el club', ex: 'Mein Bruder spielt im Verein Handball.', exes: 'Mi hermano juega al balonmano en un club.'},
        {de: 'die Mannschaft', pl: 'die Mannschaften', es: 'el equipo', ex: 'Unsere Mannschaft trainiert jeden Dienstag.', exes: 'Nuestro equipo entrena todos los martes.'},
        {de: 'das Training', pl: 'die Trainings', es: 'el entrenamiento', ex: 'Das Training beginnt um halb sieben.', exes: 'El entrenamiento empieza a las seis y media.'},
        {de: 'trainieren', es: 'entrenar', note: 'trainiert – trainierte – hat trainiert', ex: 'Wir trainieren zweimal in der Woche.', exes: 'Entrenamos dos veces por semana.'},
        {de: 'der Trainer', pl: 'die Trainer', es: 'el entrenador', ex: 'Der Trainer erklärt die neue Übung.', exes: 'El entrenador explica el nuevo ejercicio.'},
        {de: 'joggen', es: 'correr (hacer footing)', note: 'joggt – joggte – ist/hat gejoggt', ex: 'Am Morgen jogge ich im Park.', exes: 'Por la mañana corro en el parque.'},
        {de: 'klettern', es: 'escalar', note: 'klettert – kletterte – ist geklettert', ex: 'Am Wochenende klettern wir in den Bergen.', exes: 'El fin de semana escalamos en la montaña.'},
        {de: 'sich auf|wärmen', es: 'calentar (antes de entrenar)', note: 'wärmt sich auf – wärmte sich auf – hat sich aufgewärmt', ex: 'Vor dem Spiel wärmen wir uns zehn Minuten auf.', exes: 'Antes del partido calentamos diez minutos.'},
        {de: 'gewinnen', es: 'ganar', note: 'gewinnt – gewann – hat gewonnen', ex: 'Unsere Mannschaft hat das Spiel gewonnen.', exes: 'Nuestro equipo ganó el partido.'},
        {de: 'verlieren', es: 'perder', note: 'verliert – verlor – hat verloren', ex: 'Wir haben leider 2:3 verloren.', exes: 'Por desgracia hemos perdido 2-3.'},
        {de: 'der Wettkampf', pl: 'die Wettkämpfe', es: 'la competición', ex: 'Am Sonntag ist ein großer Wettkampf in Köln.', exes: 'El domingo hay una gran competición en Colonia.'},
        {de: 'die Kondition', es: 'la condición física', ex: 'Meine Kondition ist nach dem Winter nicht gut.', exes: 'Mi condición física no es buena después del invierno.'},
        {de: 'der Muskelkater', es: 'las agujetas', ex: 'Nach dem Training habe ich Muskelkater in den Beinen.', exes: 'Después del entrenamiento tengo agujetas en las piernas.'},
        {de: 'fit', es: 'en forma', ex: 'Mit dem Fahrrad bleibe ich fit.', exes: 'Con la bici me mantengo en forma.'},
        {de: 'das Schwimmbad', pl: 'die Schwimmbäder', es: 'la piscina', ex: 'Im Schwimmbad ist heute viel los.', exes: 'Hoy hay mucha gente en la piscina.'},
        {de: 'die Ausrüstung', pl: 'die Ausrüstungen', es: 'el equipo, el material', ex: 'Für das Klettern brauchst du die richtige Ausrüstung.', exes: 'Para escalar necesitas el equipo adecuado.'}
      ],
      phrases: [
        {de: 'Du könntest … / Du solltest …', es: 'Podrías … / Deberías …', use: 'aconsejar'},
        {de: 'An deiner Stelle würde ich …', es: 'En tu lugar yo …', use: 'aconsejar'},
        {de: 'Wir könnten zusammen … gehen.', es: 'Podríamos ir juntos a …', use: 'proponer'},
        {de: 'Wie wäre es mit …?', es: '¿Qué tal …?', use: 'proponer'},
        {de: 'Was würdest du mir raten?', es: '¿Qué me aconsejarías?', use: 'pedir consejo'},
        {de: 'Was soll ich nur tun?', es: '¿Qué debo hacer?', use: 'pedir consejo'},
        {de: 'Super Idee, ich bin dabei!', es: '¡Gran idea, me apunto!', use: 'entusiasmo'},
        {de: 'Darauf habe ich total Lust!', es: '¡Tengo muchísimas ganas!', use: 'entusiasmo'},
        {de: 'Dazu habe ich keine Lust.', es: 'No tengo ganas de eso.', use: 'desgana'},
        {de: 'Das ist nichts für mich.', es: 'Eso no es lo mío.', use: 'desgana'}
      ],
      dialog: {
        title: 'Mehr Bewegung, bitte',
        lines: [
          {s: 'A', de: 'Murat, du siehst müde aus. Alles in Ordnung?', es: 'Murat, te ves cansado. ¿Todo bien?'},
          {s: 'B', de: 'Ich sitze den ganzen Tag im Büro und mache keinen Sport. Was würdest du mir raten?', es: 'Me paso el día sentado en la oficina y no hago deporte. ¿Qué me aconsejarías?'},
          {s: 'A', de: 'Du könntest nach der Arbeit joggen gehen.', es: 'Podrías ir a correr después del trabajo.'},
          {s: 'B', de: 'Joggen ist nichts für mich. Dazu habe ich keine Lust.', es: 'Correr no es lo mío. No tengo ganas.'},
          {s: 'A', de: 'Wie wäre es mit Schwimmen? Das Schwimmbad ist bis 21 Uhr geöffnet.', es: '¿Qué tal natación? La piscina está abierta hasta las 21 horas.'},
          {s: 'B', de: 'Schwimmen finde ich gut. Aber alleine macht es keinen Spaß.', es: 'Nadar me gusta. Pero solo no tiene gracia.'},
          {s: 'A', de: 'Dann könnten wir zusammen gehen. Ich würde gern zweimal pro Woche trainieren.', es: 'Entonces podríamos ir juntos. A mí me gustaría entrenar dos veces por semana.'},
          {s: 'B', de: 'Super Idee, ich bin dabei! Wann wollen wir anfangen?', es: '¡Gran idea, me apunto! ¿Cuándo empezamos?'},
          {s: 'A', de: 'Am Dienstag. Und du solltest dich vorher kurz aufwärmen.', es: 'El martes. Y antes deberías calentar un poco.'},
          {s: 'B', de: 'Gut. Dann habe ich hoffentlich keinen Muskelkater.', es: 'Bien. Así, con suerte, no tendré agujetas.'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Du ___ mehr Sport machen. Das ist gesund.', o: ['solltest', 'solltet', 'sollten'], a: 0, why: 'Consejo a una persona (du): solltest.'},
        {t: 'mc', q: 'Wir ___ zusammen schwimmen gehen.', o: ['könnte', 'könnten', 'könntet'], a: 1, why: 'Con wir la forma de Konjunktiv II es könnten.'},
        {t: 'mc', q: 'Ich bin immer müde. Was ___ du mir raten?', o: ['wirst', 'würdest', 'würde'], a: 1, why: 'Pregunta cortés con du: würdest du … raten?'},
        {t: 'mc', q: '¿Qué respuesta expresa desgana?', o: ['Dazu habe ich keine Lust.', 'Super Idee, ich bin dabei!', 'Das klingt toll!'], a: 0, why: 'Dazu habe ich keine Lust significa no tener ganas.'},
        {t: 'mc', q: 'Ihr ___ mal ein Probetraining machen.', o: ['könnten', 'könnte', 'könntet'], a: 2, why: 'Con ihr el Konjunktiv II de können es könntet.'},
        {t: 'mc', q: 'An deiner Stelle ___ ich zum Arzt gehen.', o: ['würde', 'würdest', 'wurde'], a: 0, why: 'Con ich la forma es würde + infinitivo al final (gehen).'},
        {t: 'gap', q: 'Du ___ öfter joggen gehen. (sollen, Konjunktiv II)', a: ['solltest'], why: 'Consejo: solltest; el infinitivo va al final.'},
        {t: 'gap', q: 'Wie wäre es ___ einem Yogakurs?', a: ['mit'], why: 'Wie wäre es mit + Dativ.'},
        {t: 'gap', q: 'Ich ___ mich vor dem Spiel aufwärmen. (sollen, Konjunktiv II)', a: ['sollte'], why: 'Con ich el Konjunktiv II de sollen es sollte (sin terminación).'},
        {t: 'gap', q: 'Er ___ mit uns Fußball spielen. (können, Konjunktiv II: Vorschlag)', a: ['könnte'], why: 'Propuesta con er: könnte, sin terminación.'},
        {t: 'order', es: 'Podrías jugar al fútbol en un club.', de: 'Du könntest im Verein Fußball spielen.', why: 'könntest en posición 2 y el infinitivo spielen al final.'},
        {t: 'order', es: '¿Qué tal un entrenamiento?', de: 'Wie wäre es mit einem Training?', why: 'Wie wäre es mit + Dativ (einem Training).'},
        {t: 'order', es: 'En tu lugar yo entrenaría todos los días.', de: 'An deiner Stelle würde ich jeden Tag trainieren.', why: 'würde en posición 2 (tras la expresión inicial) y el infinitivo trainieren al final.'},
        {t: 'tr', es: 'Deberías beber más antes del entrenamiento.', de: ['Du solltest vor dem Training mehr trinken.', 'Du solltest mehr trinken vor dem Training.'], why: ''},
        {t: 'tr', es: 'Podríamos ir a correr juntos el sábado.', de: ['Wir könnten am Samstag zusammen joggen gehen.', 'Wir könnten am Samstag zusammen joggen.'], why: ''},
        {t: 'fix', q: 'Du solltest mehr Sport machst.', a: ['Du solltest mehr Sport machen.'], why: 'Con un modal o con würde el segundo verbo va en infinitivo, no conjugado.'},
        {t: 'fix', q: 'Ich würde gern ins Fitnessstudio gehe.', a: ['Ich würde gern ins Fitnessstudio gehen.'], why: 'würde + infinitivo (gehen) al final.'},
        {t: 'match', pairs: [['der Verein', 'el club'], ['die Mannschaft', 'el equipo'], ['der Muskelkater', 'las agujetas'], ['gewinnen', 'ganar'], ['verlieren', 'perder'], ['fit', 'en forma']]}
      ],
      speak: [
        {prompt: 'Un amigo dice que no hace deporte y siempre está cansado. Dale tres consejos con Du könntest … / Du solltest … y una propuesta de hacer algo juntos.', model: 'Du solltest mehr Sport machen. Du könntest zum Beispiel dreimal pro Woche joggen gehen. Außerdem könntest du im Verein Fußball spielen. Wie wäre es, wenn wir am Samstag zusammen schwimmen gehen?'},
        {prompt: 'Pide consejo a un compañero de gimnasio: dices que tienes agujetas y poca condición. Pregunta qué debes hacer y reacciona a su consejo.', model: 'Ich habe nach dem Training immer Muskelkater und meine Kondition ist schlecht. Was würdest du mir raten? – Du solltest dich besser aufwärmen. – Gute Idee, das probiere ich gleich beim nächsten Training aus.'},
        {prompt: 'Para uso real: di en voz alta (5 frases) qué deporte te gusta, cuál no te apetece nada y qué harías si tuvieras más tiempo.', model: 'Ich schwimme sehr gern. Joggen ist nichts für mich, dazu habe ich keine Lust. Ich würde gern klettern gehen. Am Wochenende könnte ich mit Freunden ins Schwimmbad gehen. Ich sollte öfter trainieren.'}
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m3',
  level: 'A2',
  num: 3,
  title: 'Comida, trabajo y casa',
  emoji: '🍔',
  lessons: [
    {
      id: 'a2-07',
      title: 'Ich finde, dass …',
      es: 'Comida rápida y pedidos',
      goals: [
        'Dar tu opinión y reproducir la de otras personas con dass',
        'Reaccionar con Super, dass … / Schade, dass …',
        'Pedir y pagar en un quiosco o puesto de comida',
        'Hablar de tus hábitos de compra y de cocina'
      ],
      grammar: [
        {
          h: 'La subordinada con dass (el verbo va al final)',
          p: '<span class="de">dass</span> equivale a <i>que</i> en español (<i>creo que…</i>). Introduce una oración subordinada y, igual que con <span class="de">weil</span>, el <b>verbo conjugado va al final</b>. Antes de dass siempre hay una <b>coma</b>. El sujeto va justo después de dass. Si hay dos verbos, el conjugado es el último (<span class="de">dass ich heute kochen muss</span>; <span class="de">dass er gegessen hat</span>).',
          table: {
            head: ['Oración principal', 'dass', 'Sujeto + resto', 'Verbo al final'],
            rows: [
              ['Ich finde,', 'dass', 'die Pommes', '<b>lecker sind</b>.'],
              ['Anna sagt,', 'dass', 'sie heute nicht', '<b>kocht</b>.'],
              ['Ich glaube,', 'dass', 'der Lieferdienst schnell', '<b>ist</b>.'],
              ['Tim denkt,', 'dass', 'wir zwei Portionen', '<b>bestellen müssen</b>.'],
              ['Er sagt,', 'dass', 'er schon', '<b>gegessen hat</b>.']
            ]
          },
          ex: [
            {de: 'Ich finde, dass der Döner hier sehr gut schmeckt.', es: 'Creo que el döner de aquí sabe muy bien.'},
            {de: 'Lena sagt, dass sie heute nicht kochen will.', es: 'Lena dice que hoy no quiere cocinar.'},
            {de: 'Ich denke, dass wir zu viel bestellt haben.', es: 'Pienso que hemos pedido demasiado.'},
            {de: 'Murat glaubt, dass der Lieferdienst schon da ist.', es: 'Murat cree que el reparto ya está aquí.'},
            {de: 'Meine Mutter meint, dass Fast Food ungesund ist.', es: 'Mi madre opina que la comida rápida es poco sana.'}
          ],
          tip: 'En español el verbo queda donde está (<i>creo que la pizza es cara</i>); en alemán va al final: <span class="de">dass die Pizza teuer ist</span>. No confundas <b>dass</b> (conjunción, con doble s) con <b>das</b> (artículo o pronombre).'
        },
        {
          h: 'Dar la opinión y reproducir lo que dicen otros',
          p: 'Con verbos de opinión y de decir sigue casi siempre un <span class="de">dass</span>-Satz: <span class="de">finden, denken, glauben, meinen, sagen</span>. Así puedes dar tu opinión (<span class="de">Ich finde, dass …</span>) o contar la opinión de otra persona (<span class="de">Anna sagt, dass …</span>). También se usa en reacciones breves: <span class="de">Super, dass …!</span> / <span class="de">Schade, dass …!</span> / <span class="de">Toll, dass …!</span>. En la lengua hablada se puede omitir dass y entonces el verbo vuelve a la posición 2 (<span class="de">Ich finde, die Pommes sind lecker</span>), pero con dass es más claro y es lo que debes practicar.',
          table: {
            head: ['Función', 'Estructura', 'Ejemplo'],
            rows: [
              ['Mi opinión', 'Ich finde / denke / glaube, dass …', 'Ich finde, dass Pizza lecker ist.'],
              ['Opinión de otros', 'Er / Sie / Mein Kollege sagt, dass …', 'Sie sagt, dass es zu scharf ist.'],
              ['Alegría', 'Super / Toll, dass …', 'Super, dass du kommst!'],
              ['Pena', 'Schade, dass …', 'Schade, dass es keine Pommes gibt.']
            ]
          },
          ex: [
            {de: 'Ich finde, dass Fast Food manchmal eine gute Idee ist.', es: 'Creo que la comida rápida a veces es buena idea.'},
            {de: 'Mein Bruder sagt, dass der Imbiss um die Ecke billig ist.', es: 'Mi hermano dice que el puesto de la esquina es barato.'},
            {de: 'Super, dass du heute für uns kochst!', es: '¡Qué bien que hoy cocines para nosotros!'},
            {de: 'Schade, dass der Lieferdienst so lange braucht.', es: 'Qué pena que el reparto tarde tanto.'},
            {de: 'Wir glauben, dass die Bratwurst hier frisch ist.', es: 'Creemos que la salchicha de aquí es fresca.'}
          ],
          tip: 'Con <span class="de">dass</span> no repitas un segundo <i>que</i>: <span class="de">Ich glaube, dass …</span> (solo una vez). Y recuerda la coma antes de dass: en alemán es obligatoria.'
        },
        {
          h: 'Pedir y pagar en un quiosco',
          p: 'Para pedir, lo más natural y cortés es <span class="de">Ich hätte gern …</span> o <span class="de">Einmal … bitte</span> (una ración de…). Para llevar se dice <span class="de">zum Mitnehmen</span>; para comer allí, <span class="de">zum Hier-Essen</span>. Al pagar, el vendedor dice <span class="de">Das macht …</span>; tú puedes preguntar <span class="de">Kann ich mit Karte zahlen?</span>. Con <span class="de">Stimmt so.</span> dejas el cambio como propina. En un restaurante el camarero pregunta <span class="de">Zusammen oder getrennt?</span> (¿junto o por separado?).',
          table: {
            head: ['Situación', 'Frase'],
            rows: [
              ['Pedir', 'Ich hätte gern eine Currywurst. / Einmal Pommes, bitte.'],
              ['Para llevar o aquí', 'Zum Mitnehmen oder zum Hier-Essen?'],
              ['Preguntar el precio', 'Was macht das? / Wie viel kostet das?'],
              ['Pagar', 'Kann ich mit Karte zahlen? / Hier sind zehn Euro.'],
              ['Propina', 'Stimmt so. / Der Rest ist für Sie.']
            ]
          },
          ex: [
            {de: 'Ich hätte gern eine Bratwurst mit Brötchen.', es: 'Quisiera una salchicha con panecillo.'},
            {de: 'Einmal Pommes mit Ketchup, bitte.', es: 'Una de patatas fritas con kétchup, por favor.'},
            {de: 'Zum Mitnehmen, bitte.', es: 'Para llevar, por favor.'},
            {de: 'Das macht sechs Euro fünfzig.', es: 'Son seis euros con cincuenta.'},
            {de: 'Stimmt so!', es: '¡Quédese con el cambio!'}
          ],
          tip: 'Di <span class="de">Ich hätte gern</span>, no <i>Ich will</i>: <span class="de">Ich will einen Kaffee</span> suena brusco. <span class="de">Ich möchte …</span> también es correcto.'
        }
      ],
      vocab: [
        {de: 'der Imbiss', pl: 'die Imbisse', es: 'el puesto de comida rápida', ex: 'Am Imbiss an der Ecke gibt es die beste Currywurst.', exes: 'En el puesto de la esquina hay la mejor currywurst.'},
        {de: 'die Currywurst', pl: 'die Currywürste', es: 'la salchicha con salsa de curry', ex: 'Zur Currywurst esse ich immer Pommes.', exes: 'Con la currywurst siempre como patatas fritas.'},
        {de: 'die Pommes', pl: 'die Pommes', es: 'las patatas fritas (plural)', ex: 'Ich nehme eine große Portion Pommes mit Mayo.', exes: 'Tomo una ración grande de patatas fritas con mayonesa.'},
        {de: 'das Brötchen', pl: 'die Brötchen', es: 'el panecillo', ex: 'Zum Frühstück esse ich ein Brötchen mit Käse.', exes: 'En el desayuno como un panecillo con queso.'},
        {de: 'das Getränk', pl: 'die Getränke', es: 'la bebida', ex: 'Welches Getränk möchten Sie zum Essen?', exes: '¿Qué bebida desea con la comida?'},
        {de: 'die Speisekarte', pl: 'die Speisekarten', es: 'la carta, el menú', ex: 'Können wir bitte die Speisekarte haben?', exes: '¿Podemos ver la carta, por favor?'},
        {de: 'die Portion', pl: 'die Portionen', es: 'la ración', ex: 'Die Portion ist so groß, dass wir sie teilen.', exes: 'La ración es tan grande que la compartimos.'},
        {de: 'das Gericht', pl: 'die Gerichte', es: 'el plato (comida)', ex: 'Mein Lieblingsgericht ist Pasta mit Tomatensoße.', exes: 'Mi plato favorito es pasta con salsa de tomate.'},
        {de: 'die Bestellung', pl: 'die Bestellungen', es: 'el pedido', ex: 'Ihre Bestellung ist in zehn Minuten fertig.', exes: 'Su pedido estará listo en diez minutos.'},
        {de: 'der Lieferdienst', pl: 'die Lieferdienste', es: 'el servicio de reparto', ex: 'Am Freitagabend bestellen wir oft beim Lieferdienst.', exes: 'Los viernes por la noche pedimos a menudo al servicio de reparto.'},
        {de: 'die Lieferung', pl: 'die Lieferungen', es: 'la entrega, el reparto', ex: 'Die Lieferung kommt normalerweise nach 30 Minuten.', exes: 'La entrega suele llegar a los 30 minutos.'},
        {de: 'das Trinkgeld', es: 'la propina', ex: 'Im Restaurant gebe ich meistens ein bisschen Trinkgeld.', exes: 'En el restaurante suelo dejar un poco de propina.'},
        {de: 'die Rechnung', pl: 'die Rechnungen', es: 'la cuenta, la factura', ex: 'Die Rechnung, bitte!', exes: '¡La cuenta, por favor!'},
        {de: 'der Geschmack', es: 'el sabor, el gusto', ex: 'Der Geschmack von dieser Soße ist ungewöhnlich.', exes: 'El sabor de esta salsa es poco común.'},
        {de: 'bestellen', es: 'pedir (encargar)', note: 'bestellt – bestellte – hat bestellt', ex: 'Ich bestelle lieber online als am Telefon.', exes: 'Prefiero pedir online que por teléfono.'},
        {de: 'liefern', es: 'entregar, repartir', note: 'liefert – lieferte – hat geliefert', ex: 'Der Supermarkt liefert auch nach Hause.', exes: 'El supermercado también entrega a domicilio.'},
        {de: 'bezahlen', es: 'pagar', note: 'bezahlt – bezahlte – hat bezahlt', ex: 'Ich bezahle meistens mit Karte.', exes: 'Casi siempre pago con tarjeta.'},
        {de: 'scharf', es: 'picante', ex: 'Die Soße ist mir zu scharf.', exes: 'La salsa me resulta demasiado picante.'},
        {de: 'ungesund', es: 'poco sano', ex: 'Zu viel Zucker ist ungesund.', exes: 'Demasiado azúcar no es sano.'},
        {de: 'frisch', es: 'fresco', ex: 'Das Brot ist heute ganz frisch.', exes: 'El pan está hoy muy fresco.'}
      ],
      phrases: [
        {de: 'Ich finde, dass …', es: 'Creo / Me parece que …', use: 'opinar'},
        {de: 'Ich glaube / denke, dass …', es: 'Creo / Pienso que …', use: 'opinar'},
        {de: 'Mein Kollege sagt, dass …', es: 'Mi compañero dice que …', use: 'reproducir'},
        {de: 'Super, dass du kommst!', es: '¡Qué bien que vengas!', use: 'alegrarse'},
        {de: 'Schade, dass es keine Pommes mehr gibt.', es: 'Qué pena que ya no haya patatas fritas.', use: 'lamentar'},
        {de: 'Ich hätte gern eine Currywurst, bitte.', es: 'Quisiera una currywurst, por favor.', use: 'pedir'},
        {de: 'Zum Mitnehmen oder zum Hier-Essen?', es: '¿Para llevar o para comer aquí?', use: 'preguntar'},
        {de: 'Was macht das?', es: '¿Cuánto es?', use: 'precio'},
        {de: 'Kann ich mit Karte zahlen?', es: '¿Puedo pagar con tarjeta?', use: 'pagar'},
        {de: 'Stimmt so.', es: 'Quédese con el cambio.', use: 'propina'}
      ],
      dialog: {
        title: 'Am Imbiss',
        lines: [
          {s: 'A', de: 'Guten Tag! Ich hätte gern eine Currywurst mit Pommes.', es: '¡Buenos días! Quisiera una currywurst con patatas fritas.'},
          {s: 'B', de: 'Gern. Möchten Sie auch etwas trinken?', es: 'Con gusto. ¿Desea también algo de beber?'},
          {s: 'A', de: 'Ja, eine Cola bitte. Ich glaube, dass Ihre Currywurst die beste in der Stadt ist.', es: 'Sí, una cola, por favor. Creo que su currywurst es la mejor de la ciudad.'},
          {s: 'B', de: 'Das freut mich! Viele Kunden finden, dass sie nicht zu scharf ist. Zum Mitnehmen oder zum Hier-Essen?', es: '¡Me alegra! Muchos clientes opinan que no es demasiado picante. ¿Para llevar o para comer aquí?'},
          {s: 'A', de: 'Zum Mitnehmen, bitte. Was macht das?', es: 'Para llevar, por favor. ¿Cuánto es?'},
          {s: 'B', de: 'Das macht sieben Euro fünfzig.', es: 'Son siete euros con cincuenta.'},
          {s: 'A', de: 'Hier sind zehn Euro. Stimmt so.', es: 'Aquí tiene diez euros. Quédese con el cambio.'},
          {s: 'B', de: 'Vielen Dank! Super, dass Sie so oft zu uns kommen.', es: '¡Muchas gracias! Qué bien que venga tantas veces a vernos.'},
          {s: 'A', de: 'Mein Kollege sagt, dass er lieber beim Lieferdienst bestellt. Aber ich finde, dass das Essen dann kalt ankommt.', es: 'Mi compañero dice que prefiere pedir al reparto. Pero yo creo que entonces la comida llega fría.'},
          {s: 'B', de: 'Da haben Sie recht. Schönen Tag noch!', es: 'Tiene razón. ¡Que tenga un buen día!'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Ich finde, ___ die Pommes hier sehr gut sind.', o: ['dass', 'weil', 'ob'], a: 0, why: 'Después de finden se introduce la opinión con dass (que).'},
        {t: 'mc', q: 'Anna glaubt, dass Pizza ungesund ___.', o: ['sind', 'ist', 'ist sie'], a: 1, why: 'En la subordinada con dass el verbo va al final y concuerda con el sujeto singular: die Pizza ist.'},
        {t: 'mc', q: 'Super, ___ du heute Abend kochst!', o: ['was', 'das', 'dass'], a: 2, why: 'Super, dass … es una reacción con la conjunción dass (con doble s).'},
        {t: 'mc', q: 'Ich denke, dass wir heute Abend Pizza ___.', o: ['bestellt', 'bestellen', 'bestellen wir'], a: 1, why: 'El verbo conjugado (wir bestellen) va al final de la subordinada.'},
        {t: 'mc', q: 'Ich ___ gern einen Kaffee, bitte.', o: ['habe', 'hatte', 'hätte'], a: 2, why: 'Ich hätte gern … es la fórmula cortés para pedir.'},
        {t: 'mc', q: 'Der Verkäufer sagt: „Das macht zwölf Euro.“ Du gibst fünfzehn Euro und das resto es para él. Was sagst du?', o: ['Stimmt so.', 'Getrennt, bitte.', 'Zum Mitnehmen.'], a: 0, why: 'Stimmt so significa que el cambio es la propina.'},
        {t: 'gap', q: 'Ich glaube, ___ der Lieferdienst heute lange braucht. (conjunción)', a: ['dass'], why: 'Tras glauben se usa dass para introducir lo que se cree.'},
        {t: 'gap', q: 'Ich finde, dass die Suppe zu scharf ___. (sein)', a: ['ist'], why: 'El verbo va al final: die Suppe ... ist.'},
        {t: 'gap', q: 'Tim sagt, dass er gestern Currywurst gegessen ___. (haben)', a: ['hat'], why: 'En el Perfekt con dass, el auxiliar conjugado va al final: gegessen hat.'},
        {t: 'gap', q: 'Schade, dass du nicht mitkommen ___. (können, du)', a: ['kannst'], why: 'Con verbo modal el modal conjugado va al final: mitkommen kannst.'},
        {t: 'order', es: 'Creo que la salchicha está muy rica.', de: 'Ich finde, dass die Bratwurst sehr lecker ist.', why: 'Tras la coma, dass + sujeto + resto y el verbo ist al final.'},
        {t: 'order', es: 'Lena dice que hoy no quiere cocinar.', de: 'Lena sagt, dass sie heute nicht kochen will.', why: 'El modal conjugado (will) va al final, detrás del infinitivo.'},
        {t: 'order', es: 'Qué bien que el reparto fuera tan rápido.', de: 'Super, dass der Lieferdienst so schnell war!', why: 'Super, dass + sujeto + resto + verbo al final (war).'},
        {t: 'tr', es: 'Creo que el döner de aquí es barato.', de: ['Ich glaube, dass der Döner hier günstig ist.', 'Ich glaube, dass der Döner hier billig ist.'], why: 'Glauben + dass; el verbo ist al final.'},
        {t: 'tr', es: 'Él dice que no tiene hambre.', de: ['Er sagt, dass er keinen Hunger hat.'], why: 'Hunger haben se niega con kein: keinen Hunger. El verbo hat va al final.'},
        {t: 'fix', q: 'Ich finde, dass die Pizza ist zu teuer.', a: ['Ich finde, dass die Pizza zu teuer ist.'], why: 'Tras dass el verbo conjugado va al final.'},
        {t: 'fix', q: 'Er sagt, dass er hat keine Zeit.', a: ['Er sagt, dass er keine Zeit hat.'], why: 'En la subordinada hat debe ir al final.'},
        {t: 'match', pairs: [['der Imbiss', 'el puesto de comida rápida'], ['das Trinkgeld', 'la propina'], ['die Rechnung', 'la cuenta'], ['scharf', 'picante'], ['liefern', 'entregar, repartir'], ['die Speisekarte', 'la carta']]}
      ],
      speak: [
        {prompt: 'Cuenta en 4-5 frases qué opinas de la comida rápida y del reparto a domicilio. Usa Ich finde, dass … / Ich glaube, dass …', model: 'Ich finde, dass Fast Food manchmal praktisch ist. Ich glaube aber, dass es oft ungesund ist. Ich bestelle nur selten beim Lieferdienst, weil das Essen dann oft kalt ist. Meine Freundin sagt, dass sie lieber selbst kocht. Ich denke, dass sie recht hat.'},
        {prompt: 'Cuenta qué dicen tu familia o tus amigos sobre la comida y cocinar (3-4 frases con ... sagt, dass …).', model: 'Mein Bruder sagt, dass er nicht gern kocht. Meine Mutter sagt, dass frisches Essen besser schmeckt. Mein Freund meint, dass Pizza das beste Essen der Welt ist. Und ich finde, dass alle ein bisschen recht haben.'},
        {prompt: 'Para uso real: imagina que estás en un puesto de comida y pide algo para llevar, pregunta cuánto es y paga con un billete. Dilo en voz alta.', model: 'Guten Tag! Ich hätte gern eine Bratwurst mit Brötchen und eine Cola, bitte. Zum Mitnehmen. Was macht das? Hier sind zehn Euro. Stimmt so. Vielen Dank, schönen Tag noch!'}
      ]
    },
    {
      id: 'a2-08',
      title: 'Wenn die Mittagspause beginnt',
      es: 'En la empresa: la pausa del almuerzo',
      goals: [
        'Usar wenn para hablar de situaciones repetidas y condiciones',
        'Distinguir wenn y als de forma básica',
        'Formar sustantivos con -ung a partir de verbos',
        'Dar tu opinión y comparar en el trabajo'
      ],
      grammar: [
        {
          h: 'La subordinada con wenn (cuando / si)',
          p: '<span class="de">wenn</span> significa <i>cuando</i> (algo que ocurre cada vez) o <i>si</i> (condición). Como en todas las subordinadas, el <b>verbo conjugado va al final</b>. Cuando la subordinada con wenn va primero, ocupa toda la posición 1, y en la oración principal el <b>verbo va inmediatamente después</b> (posición 2, antes del sujeto): <span class="de">Wenn ich Hunger habe, gehe ich in die Kantine.</span> Si va después, la principal sigue su orden normal: <span class="de">Ich gehe in die Kantine, wenn ich Hunger habe.</span>',
          table: {
            head: ['Subordinada (pos. 1)', 'Verbo principal', 'Sujeto', 'Resto'],
            rows: [
              ['Wenn ich Hunger <b>habe</b>,', '<b>gehe</b>', 'ich', 'in die Kantine.'],
              ['Wenn es regnet,', '<b>essen</b>', 'wir', 'im Büro.'],
              ['Wenn die Besprechung lange <b>dauert</b>,', '<b>bekommen</b>', 'wir', 'Kuchen.'],
              ['Wenn der Chef <b>kommt</b>,', '<b>sind</b>', 'alle', 'leise.']
            ]
          },
          ex: [
            {de: 'Wenn ich Pause habe, esse ich einen Salat.', es: 'Cuando tengo pausa, como una ensalada.'},
            {de: 'Ich trinke immer einen Kaffee, wenn ich müde bin.', es: 'Siempre tomo un café cuando estoy cansado.'},
            {de: 'Wenn es regnet, essen wir in der Kantine.', es: 'Si llueve, comemos en la cantina.'},
            {de: 'Wenn die Kollegen Zeit haben, gehen sie spazieren.', es: 'Cuando los compañeros tienen tiempo, van a pasear.'},
            {de: 'Wenn die Besprechung lange dauert, bekommen wir Kuchen.', es: 'Cuando la reunión dura mucho, nos dan pastel.'}
          ],
          tip: 'Error típico: <span class="de">Wenn ich Hunger habe, ich gehe …</span>. Recuerda: después de la coma, primero el verbo (<span class="de">gehe ich</span>). Con <span class="de">immer wenn</span> o <span class="de">jedes Mal, wenn</span> subrayas que ocurre siempre.'
        },
        {
          h: 'wenn, als y wann: un contraste breve',
          p: 'Para hechos <b>repetidos</b> (en presente o en pasado) usa <span class="de">wenn</span>: <span class="de">Immer wenn ich Pause hatte, bin ich in den Park gegangen.</span> Para un <b>único hecho en el pasado</b> usa <span class="de">als</span>: <span class="de">Als ich gestern ankam, war niemand da.</span> En futuro y presente es siempre wenn. No lo confundas con <span class="de">wann</span>, que es la palabra interrogativa (<i>¿cuándo?</i>): <span class="de">Wann ist Pause?</span>',
          table: {
            head: ['Palabra', 'Uso', 'Ejemplo'],
            rows: [
              ['wenn', 'presente, futuro o hecho repetido', 'Wenn ich Zeit habe, rufe ich an.'],
              ['wenn', 'pasado repetido (siempre que)', 'Immer wenn er kam, gab es Kaffee.'],
              ['als', 'pasado, una sola vez', 'Als er kam, war ich im Büro.'],
              ['wann', 'pregunta: ¿cuándo?', 'Wann beginnt die Pause?']
            ]
          },
          ex: [
            {de: 'Wenn ich morgen Zeit habe, helfe ich dir.', es: 'Si mañana tengo tiempo, te ayudo.'},
            {de: 'Immer wenn wir Besprechung hatten, gab es Kaffee.', es: 'Siempre que teníamos reunión, había café.'},
            {de: 'Als der Chef gestern kam, haben alle gearbeitet.', es: 'Cuando el jefe vino ayer, todos estaban trabajando.'},
            {de: 'Wann beginnt die Mittagspause?', es: '¿Cuándo empieza la pausa del almuerzo?'}
          ],
          tip: 'Regla corta: ¿una sola vez en el pasado? als. ¿Repetido, presente o futuro? wenn. ¿Es una pregunta? wann.'
        },
        {
          h: 'Palabras con -ung: de verbo a sustantivo',
          p: 'Con muchos verbos puedes formar un sustantivo añadiendo <b>-ung</b> a la raíz del verbo. Todos estos sustantivos son <b>femeninos</b> (<span class="de">die</span>) y el plural es <b>-en</b>. Algunos verbos cambian la vocal de la raíz o llevan una forma especial (<span class="de">besprechen → die Besprechung</span>, pero <span class="de">erfahren → die Erfahrung</span>). Aprende estos pares: te ayudan a duplicar el vocabulario con poco esfuerzo.',
          table: {
            head: ['Verbo', 'Sustantivo', 'Significado'],
            rows: [
              ['ein|laden', 'die <b>Einladung</b>', 'la invitación'],
              ['erfahren', 'die <b>Erfahrung</b>', 'la experiencia'],
              ['meinen', 'die <b>Meinung</b>', 'la opinión'],
              ['bewerben (sich)', 'die <b>Bewerbung</b>', 'la solicitud de empleo'],
              ['liefern', 'die <b>Lieferung</b>', 'la entrega'],
              ['verspäten (sich)', 'die <b>Verspätung</b>', 'el retraso'],
              ['besprechen', 'die <b>Besprechung</b>', 'la reunión']
            ]
          },
          ex: [
            {de: 'Danke für die Einladung zum Mittagessen!', es: '¡Gracias por la invitación al almuerzo!'},
            {de: 'Ich habe viel Erfahrung in diesem Beruf.', es: 'Tengo mucha experiencia en esta profesión.'},
            {de: 'Meiner Meinung nach ist die Kantine gut.', es: 'En mi opinión, la cantina es buena.'},
            {de: 'Die Besprechung beginnt um 13 Uhr.', es: 'La reunión empieza a las 13 h.'},
            {de: 'Der Zug hat zehn Minuten Verspätung.', es: 'El tren tiene diez minutos de retraso.'}
          ],
          tip: 'Todos los sustantivos en <b>-ung</b> son femeninos: <span class="de">die Wohnung, die Zeitung, die Übung</span>. Así sabrás el género sin buscarlo.'
        },
        {
          h: 'Dar tu opinión y comparar',
          p: 'Para opinar de forma educada en el trabajo usa <span class="de">Meiner Meinung nach …</span> (con verbo en posición 2) o <span class="de">Ich bin der Meinung, dass …</span> (con dass). Para comparar usa el comparativo + <span class="de">als</span> (<span class="de">billiger als</span>) y, para igualdad, <span class="de">genauso … wie</span> / <span class="de">so … wie</span>. Después de <i>als</i> y <i>wie</i> el sustantivo queda en el mismo caso que el primero: <span class="de">Die Kantine ist billiger als das Restaurant.</span>',
          table: {
            head: ['Comparación', 'Estructura', 'Ejemplo'],
            rows: [
              ['más que', 'Komparativ + als', 'Die Kantine ist günstiger als das Café.'],
              ['igual que', 'genauso / so + adj. + wie', 'Das Büro ist so groß wie die Kantine.'],
              ['opinión (1)', 'Meiner Meinung nach + verbo', 'Meiner Meinung nach ist das Essen gut.'],
              ['opinión (2)', 'Ich bin der Meinung, dass …', 'Ich bin der Meinung, dass die Pause zu kurz ist.']
            ]
          },
          ex: [
            {de: 'Die Kantine ist billiger als das Restaurant.', es: 'La cantina es más barata que el restaurante.'},
            {de: 'Das Essen im Büro ist genauso gut wie zu Hause.', es: 'La comida en la oficina es tan buena como en casa.'},
            {de: 'Meiner Meinung nach ist die Pause zu kurz.', es: 'En mi opinión la pausa es demasiado corta.'},
            {de: 'Ich bin der Meinung, dass wir mehr Zeit brauchen.', es: 'Soy de la opinión de que necesitamos más tiempo.'}
          ],
          tip: 'Comparativos útiles: <span class="de">gut – besser, gern – lieber, viel – mehr</span> (irregulares). Y recuerda: <i>más que</i> = <span class="de">als</span>, <i>tan … como</i> = <span class="de">wie</span>.'
        }
      ],
      vocab: [
        {de: 'die Firma', pl: 'die Firmen', es: 'la empresa', ex: 'Meine Firma hat zwei Büros in der Stadt.', exes: 'Mi empresa tiene dos oficinas en la ciudad.'},
        {de: 'der Kollege', pl: 'die Kollegen', es: 'el compañero de trabajo', ex: 'Mein Kollege bringt oft Kuchen mit.', exes: 'Mi compañero suele traer pastel.'},
        {de: 'die Kollegin', pl: 'die Kolleginnen', es: 'la compañera de trabajo', ex: 'Meine Kollegin isst jeden Tag einen Apfel.', exes: 'Mi compañera come una manzana cada día.'},
        {de: 'der Chef', pl: 'die Chefs', es: 'el jefe', ex: 'Der Chef lädt uns heute zum Mittagessen ein.', exes: 'El jefe nos invita hoy a almorzar.'},
        {de: 'die Abteilung', pl: 'die Abteilungen', es: 'el departamento', ex: 'In unserer Abteilung arbeiten zehn Leute.', exes: 'En nuestro departamento trabajan diez personas.'},
        {de: 'das Büro', pl: 'die Büros', es: 'la oficina', ex: 'Mein Büro ist im dritten Stock.', exes: 'Mi oficina está en el tercer piso.'},
        {de: 'die Besprechung', pl: 'die Besprechungen', es: 'la reunión', ex: 'Nach der Besprechung gehen wir essen.', exes: 'Después de la reunión vamos a comer.'},
        {de: 'die Kantine', pl: 'die Kantinen', es: 'la cantina', ex: 'In der Kantine gibt es heute Gemüsesuppe.', exes: 'Hoy hay sopa de verduras en la cantina.'},
        {de: 'die Mittagspause', pl: 'die Mittagspausen', es: 'la pausa del almuerzo', ex: 'Die Mittagspause dauert bei uns eine Stunde.', exes: 'Aquí la pausa del almuerzo dura una hora.'},
        {de: 'der Termin', pl: 'die Termine', es: 'la cita, el compromiso', ex: 'Ich habe um zwei Uhr einen Termin mit einem Kunden.', exes: 'A las dos tengo una cita con un cliente.'},
        {de: 'der Mitarbeiter', pl: 'die Mitarbeiter', es: 'el empleado', ex: 'Die Firma hat über hundert Mitarbeiter.', exes: 'La empresa tiene más de cien empleados.'},
        {de: 'die Einladung', pl: 'die Einladungen', es: 'la invitación', ex: 'Ich habe eine Einladung zur Firmenfeier bekommen.', exes: 'He recibido una invitación a la fiesta de la empresa.'},
        {de: 'die Erfahrung', pl: 'die Erfahrungen', es: 'la experiencia', ex: 'Mit diesem Programm habe ich gute Erfahrungen gemacht.', exes: 'Con este programa he tenido buenas experiencias.'},
        {de: 'die Meinung', pl: 'die Meinungen', es: 'la opinión', ex: 'Was ist deine Meinung zu dem Plan?', exes: '¿Cuál es tu opinión sobre el plan?'},
        {de: 'die Bewerbung', pl: 'die Bewerbungen', es: 'la solicitud de empleo', ex: 'Ich schreibe heute meine Bewerbung.', exes: 'Hoy escribo mi solicitud de empleo.'},
        {de: 'die Verspätung', pl: 'die Verspätungen', es: 'el retraso', ex: 'Entschuldigung für die Verspätung!', exes: '¡Disculpe el retraso!'},
        {de: 'der Kunde', pl: 'die Kunden', es: 'el cliente', ex: 'Der Kunde wartet im Besprechungsraum.', exes: 'El cliente espera en la sala de reuniones.'},
        {de: 'die Überstunde', pl: 'die Überstunden', es: 'la hora extra', ex: 'Diese Woche mache ich viele Überstunden.', exes: 'Esta semana hago muchas horas extra.'},
        {de: 'pünktlich', es: 'puntual', ex: 'Unser Chef ist immer pünktlich.', exes: 'Nuestro jefe siempre es puntual.'},
        {de: 'vereinbaren', es: 'acordar, concertar', note: 'vereinbart – vereinbarte – hat vereinbart', ex: 'Wir vereinbaren einen Termin für nächste Woche.', exes: 'Acordamos una cita para la próxima semana.'}
      ],
      phrases: [
        {de: 'Wenn ich Pause habe, …', es: 'Cuando tengo pausa, …', use: 'rutina'},
        {de: 'Immer wenn ich Hunger habe, …', es: 'Siempre que tengo hambre, …', use: 'hábito'},
        {de: 'Meiner Meinung nach …', es: 'En mi opinión …', use: 'opinar'},
        {de: 'Ich bin der Meinung, dass …', es: 'Soy de la opinión de que …', use: 'opinar'},
        {de: 'Das finde ich auch.', es: 'Yo también lo creo.', use: 'estar de acuerdo'},
        {de: 'Da bin ich anderer Meinung.', es: 'Ahí no opino igual.', use: 'discrepar'},
        {de: 'Die Kantine ist besser als das Café.', es: 'La cantina es mejor que el café.', use: 'comparar'},
        {de: 'Das ist genauso teuer wie dort.', es: 'Es tan caro como allí.', use: 'comparar'},
        {de: 'Danke für die Einladung!', es: '¡Gracias por la invitación!', use: 'agradecer'},
        {de: 'Wollen wir zusammen essen gehen?', es: '¿Vamos a comer juntos?', use: 'proponer'}
      ],
      dialog: {
        title: 'In der Mittagspause',
        lines: [
          {s: 'A', de: 'Hallo Sarah! Gehst du heute in die Kantine?', es: '¡Hola Sarah! ¿Vas hoy a la cantina?'},
          {s: 'B', de: 'Ja, immer wenn es regnet, esse ich dort. Kommst du mit?', es: 'Sí, siempre que llueve como allí. ¿Vienes?'},
          {s: 'A', de: 'Gern! Wenn die Besprechung nicht so lange dauert, bin ich um zwölf Uhr fertig.', es: '¡Con gusto! Si la reunión no dura tanto, termino a las doce.'},
          {s: 'B', de: 'Super. Ich finde, dass das Essen in der Kantine besser ist als im Café.', es: 'Genial. Creo que la comida de la cantina es mejor que la del café.'},
          {s: 'A', de: 'Meiner Meinung nach ist es auch billiger. Und wir haben mehr Zeit zum Reden.', es: 'En mi opinión también es más barata. Y tenemos más tiempo para hablar.'},
          {s: 'B', de: 'Stimmt. Wenn ich Stress habe, hilft mir die Pause sehr.', es: 'Cierto. Cuando tengo estrés, la pausa me ayuda mucho.'},
          {s: 'A', de: 'Hast du die Einladung vom Chef gesehen? Am Freitag gibt es eine kleine Feier.', es: '¿Has visto la invitación del jefe? El viernes hay una pequeña fiesta.'},
          {s: 'B', de: 'Ja, ich habe mich schon gefreut. Er hat viel Erfahrung mit solchen Treffen.', es: 'Sí, ya me alegré. Tiene mucha experiencia con ese tipo de encuentros.'},
          {s: 'A', de: 'Wann treffen wir uns heute? Um zwölf Uhr dreißig?', es: '¿Cuándo nos vemos hoy? ¿A las doce y media?'},
          {s: 'B', de: 'Ja, perfekt. Bis gleich!', es: 'Sí, perfecto. ¡Hasta ahora!'}
        ]
      },
      ex: [
        {t: 'mc', q: '___ es regnet, essen wir in der Kantine.', o: ['Wenn', 'Dass', 'Ob'], a: 0, why: 'Wenn = si/cuando; aquí expresa una condición habitual.'},
        {t: 'mc', q: 'Wenn ich Zeit habe, ___ gern im Park.', o: ['esse ich', 'ich esse', 'ich gegessen'], a: 0, why: 'Después de una subordinada en posición 1, el verbo de la principal va justo detrás: esse ich.'},
        {t: 'mc', q: 'Danke für die ___ zur Party!', o: ['Einladen', 'Einlader', 'Einladung'], a: 2, why: 'Verbo einladen + -ung = die Einladung.'},
        {t: 'mc', q: 'Meiner ___ nach ist die Kantine gut.', o: ['Meine', 'Meinung', 'Meinen'], a: 1, why: 'La expresión fija es Meiner Meinung nach (nach rige dativo).'},
        {t: 'mc', q: 'Die Kantine ist billiger ___ das Restaurant.', o: ['wie', 'wenn', 'als'], a: 2, why: 'Tras un comparativo (billiger) se usa als.'},
        {t: 'gap', q: 'Wenn ich Hunger habe, ___ ich in die Kantine. (gehen)', a: ['gehe'], why: 'Tras la subordinada, verbo en posición 2: gehe ich.'},
        {t: 'gap', q: 'Immer ___ wir eine Besprechung haben, gibt es Kaffee.', a: ['wenn'], why: 'Hecho repetido: wenn.'},
        {t: 'gap', q: 'Gestern, ___ ich ins Büro kam, war niemand da.', a: ['als'], why: 'Un solo hecho en el pasado: als.'},
        {t: 'gap', q: 'Verbo einladen: la forma con -ung es die ___.', a: ['Einladung'], why: 'Verbo + -ung; son femeninos.'},
        {t: 'gap', q: 'Wenn Murat Überstunden ___, ist er sehr müde. (machen)', a: ['macht'], why: 'En la subordinada con wenn el verbo va al final.'},
        {t: 'order', es: 'Cuando tengo pausa, como una ensalada.', de: 'Wenn ich Pause habe, esse ich einen Salat.', why: 'Wenn-Satz en pos. 1, luego verbo + sujeto.'},
        {t: 'order', es: 'Cuando la reunión dura mucho, recibimos pastel.', de: 'Wenn die Besprechung lange dauert, bekommen wir Kuchen.', why: 'Verbo final en la subordinada; después bekommen wir.'},
        {t: 'order', es: 'Soy de la opinión de que la cantina es mejor.', de: 'Ich bin der Meinung, dass die Kantine besser ist.', why: 'dass + sujeto + resto + verbo al final.'},
        {t: 'tr', es: 'Cuando tengo tiempo, cocino con gusto.', de: ['Wenn ich Zeit habe, koche ich gern.', 'Ich koche gern, wenn ich Zeit habe.', 'Wenn ich Zeit habe, koche ich gerne.'], why: ''},
        {t: 'tr', es: '¡Gracias por la invitación!', de: ['Danke für die Einladung!', 'Vielen Dank für die Einladung!'], why: ''},
        {t: 'fix', q: 'Wenn ich Hunger habe, ich esse in der Kantine.', a: ['Wenn ich Hunger habe, esse ich in der Kantine.'], why: 'Después de la subordinada, verbo en posición 2: esse ich.'},
        {t: 'fix', q: 'Wenn ich habe Pause, gehe ich spazieren.', a: ['Wenn ich Pause habe, gehe ich spazieren.'], why: 'En la subordinada con wenn el verbo va al final.'},
        {t: 'match', pairs: [['die Besprechung', 'la reunión'], ['der Kollege', 'el compañero de trabajo'], ['die Überstunde', 'la hora extra'], ['pünktlich', 'puntual'], ['die Abteilung', 'el departamento'], ['der Kunde', 'el cliente']]}
      ],
      speak: [
        {prompt: 'Describe en 4-5 frases tu rutina en la pausa del almuerzo (o del descanso) con wenn.', model: 'Wenn ich Pause habe, esse ich meistens zu Hause. Wenn das Wetter schön ist, gehe ich danach spazieren. Wenn ich müde bin, trinke ich einen Kaffee. Immer wenn ich viel Arbeit habe, esse ich nur ein Brötchen.'},
        {prompt: 'Compara dos sitios para comer (cantina / restaurante / casa) y da tu opinión. Usa als, wie y Meiner Meinung nach.', model: 'Meiner Meinung nach ist das Essen zu Hause besser als im Restaurant. Es ist auch billiger als in der Kantine. Aber die Kantine ist schneller als das Restaurant. Ich bin der Meinung, dass man dort am besten Kollegen trifft.'},
        {prompt: 'Para uso real: escribe o di una invitación a un compañero para comer juntos en la pausa y agradece una invitación recibida.', model: 'Hallo Anna, wollen wir heute zusammen essen gehen? Wenn du Zeit hast, treffen wir uns um halb eins in der Kantine. Und vielen Dank für die Einladung zur Feier am Freitag! Ich komme gern.'}
      ]
    },
    {
      id: 'a2-09',
      title: 'Wohin damit?',
      es: 'Hábitos y objetos en casa',
      goals: [
        'Usar legen, stellen, hängen (wohin? + Akkusativ) y liegen, stehen, hängen (wo? + Dativ)',
        'Dominar las 9 preposiciones mixtas con Akkusativ y Dativ',
        'Hablar de tus hábitos con objetos de la casa',
        'Expresar comprensión y asombro (Nicht schon wieder!, Echt jetzt?)'
      ],
      grammar: [
        {
          h: 'Las 9 preposiciones mixtas (Wechselpräpositionen)',
          p: 'Las preposiciones <span class="de">an, auf, hinter, in, neben, über, unter, vor, zwischen</span> pueden regir <b>Akkusativ</b> o <b>Dativ</b>. La regla: <b>wohin?</b> (hay movimiento hacia un lugar) → <b>Akkusativ</b>; <b>wo?</b> (ya está en un lugar, sin cambio de lugar) → <b>Dativ</b>. En el Dativ: masc./neutro <span class="de">dem</span>, femenino <span class="de">der</span>, plural <span class="de">den + -n</span>. Contracciones frecuentes: <span class="de">am, im, ans, ins, aufs, hinterm, überm, unterm, vorm</span>.',
          table: {
            head: ['', 'der (masc.)', 'die (fem.)', 'das (neutro)', 'die (plural)'],
            rows: [
              ['<b>wo?</b> + Dativ', 'auf <b>dem</b> Tisch', 'auf <b>der</b> Couch', 'auf <b>dem</b> Bett', 'auf <b>den</b> Stühlen'],
              ['<b>wohin?</b> + Akkusativ', 'auf <b>den</b> Tisch', 'auf <b>die</b> Couch', 'auf <b>das</b> Bett', 'auf <b>die</b> Stühle']
            ]
          },
          ex: [
            {de: 'Das Handy liegt auf dem Tisch.', es: 'El móvil está sobre la mesa.'},
            {de: 'Ich lege das Handy auf den Tisch.', es: 'Pongo el móvil sobre la mesa.'},
            {de: 'Die Lampe hängt über dem Sofa.', es: 'La lámpara cuelga sobre el sofá.'},
            {de: 'Wir stellen den Schrank neben das Fenster.', es: 'Ponemos el armario junto a la ventana.'},
            {de: 'Die Schuhe stehen vor der Tür.', es: 'Los zapatos están delante de la puerta.'}
          ],
          tip: 'Pregunta siempre: <b>¿wo?</b> (dónde, estado) = Dativ; <b>¿wohin?</b> (hacia dónde, movimiento) = Akkusativ. En español ambos son <i>en/sobre</i>, por eso necesitas esta pregunta.'
        },
        {
          h: 'legen – stellen – hängen vs. liegen – stehen – hängen',
          p: 'Con estos verbos de posición el alemán distingue la acción de poner (<b>Akkusativ</b>, <i>wohin?</i>) y el resultado (<b>Dativ</b>, <i>wo?</i>). <span class="de">legen</span> pone algo en horizontal; <span class="de">stellen</span> lo pone de pie; <span class="de">hängen</span> lo cuelga. Su resultado es <span class="de">liegen</span> (tumbado), <span class="de">stehen</span> (de pie) y <span class="de">hängen</span> (colgado). Fíjate: <b>hängen</b> es regular cuando es transitivo (<span class="de">Ich hänge das Bild auf.</span>) y fuerte cuando es intransitivo (<span class="de">Das Bild hängt an der Wand.</span>). Perfekt: <span class="de">hat gelegt / gestellt / gehängt</span>, y <span class="de">hat gelegen / gestanden / gehangen</span>.',
          table: {
            head: ['Acción (wohin? + Akk)', 'Estado (wo? + Dat)'],
            rows: [
              ['<b>legen</b>: Ich lege die Brille auf den Tisch.', '<b>liegen</b>: Die Brille liegt auf dem Tisch.'],
              ['<b>stellen</b>: Ich stelle die Lampe auf den Schrank.', '<b>stehen</b>: Die Lampe steht auf dem Schrank.'],
              ['<b>hängen</b>: Ich hänge das Bild an die Wand.', '<b>hängen</b>: Das Bild hängt an der Wand.']
            ]
          },
          ex: [
            {de: 'Ich lege den Schlüssel in die Tasche.', es: 'Pongo la llave en el bolso.'},
            {de: 'Der Schlüssel liegt in der Tasche.', es: 'La llave está en el bolso.'},
            {de: 'Tim stellt die Flasche in den Kühlschrank.', es: 'Tim mete la botella en la nevera.'},
            {de: 'Die Flasche steht im Kühlschrank.', es: 'La botella está en la nevera.'},
            {de: 'Anna hängt den Mantel an die Tür.', es: 'Anna cuelga el abrigo en la puerta.'},
            {de: 'Der Mantel hängt an der Tür.', es: 'El abrigo cuelga en la puerta.'}
          ],
          tip: 'En español usas <i>poner</i> para todo. En alemán elige según la forma: <span class="de">legen</span> si está tumbado, <span class="de">stellen</span> si está de pie, <span class="de">hängen</span> si está colgado.'
        },
        {
          h: 'Hablar de hábitos con objetos de la casa',
          p: 'Para contar costumbres usa adverbios de frecuencia (<span class="de">immer, oft, manchmal, nie, jeden Tag, jeden Abend</span>) y los verbos de posición: <span class="de">Ich lege meinen Schlüssel immer auf die Kommode.</span> Cuando ocurre algo cada vez, también puedes usar <span class="de">wenn</span>: <span class="de">Wenn ich nach Hause komme, hänge ich meine Jacke an die Garderobe.</span> Con <span class="de">sich</span> hay otros verbos (<span class="de">sich setzen</span>), pero aquí practicamos los verbos con objetos.',
          table: {
            head: ['Frecuencia', 'Alemán'],
            rows: [
              ['siempre', 'immer'],
              ['a menudo', 'oft'],
              ['a veces', 'manchmal'],
              ['casi nunca', 'fast nie'],
              ['cada día / cada noche', 'jeden Tag / jeden Abend']
            ]
          },
          ex: [
            {de: 'Ich lege mein Handy jeden Abend neben das Bett.', es: 'Cada noche dejo el móvil junto a la cama.'},
            {de: 'Meine Brille liegt oft auf dem Sofa.', es: 'Mis gafas están a menudo sobre el sofá.'},
            {de: 'Wenn ich nach Hause komme, hänge ich die Jacke an die Garderobe.', es: 'Cuando llego a casa, cuelgo la chaqueta en el perchero.'},
            {de: 'Mein Mann stellt die Schuhe nie ins Regal.', es: 'Mi marido nunca pone los zapatos en el estante.'}
          ],
          tip: 'Si el objeto tiene un lugar fijo, di <span class="de">Das gehört in …</span> (<i>eso va en…</i>) o simplemente usa <span class="de">stehen/liegen/hängen</span> + Dativ para describirlo.'
        },
        {
          h: 'Comprensión y asombro: Nicht schon wieder!',
          p: 'Para reaccionar con comprensión, enfado o asombro ante los hábitos de otros usa expresiones cortas con la entonación adecuada. <span class="de">Nicht schon wieder!</span> (¡otra vez no!) muestra cansancio o molestia. <span class="de">Echt jetzt?</span> (¿en serio?) y <span class="de">Das glaube ich nicht!</span> (¡no me lo creo!) muestran sorpresa. Para comprender: <span class="de">Das kenne ich.</span> (Me pasa también) y <span class="de">Das verstehe ich.</span>',
          table: {
            head: ['Reacción', 'Alemán'],
            rows: [
              ['harto/a', 'Nicht schon wieder!'],
              ['asombro', 'Echt jetzt? / Wirklich?'],
              ['incredulidad', 'Das glaube ich nicht!'],
              ['comprensión', 'Das kenne ich. / Das verstehe ich.']
            ]
          },
          ex: [
            {de: 'Du hast deinen Schlüssel verloren? Nicht schon wieder!', es: '¿Has perdido tu llave? ¡Otra vez no!'},
            {de: 'Er hat die Brille im Kühlschrank gefunden. Echt jetzt?', es: 'Encontró las gafas en la nevera. ¿En serio?'},
            {de: 'Du räumst nie auf? Das glaube ich nicht!', es: '¿Nunca ordenas? ¡No me lo creo!'},
            {de: 'Ich vergesse auch oft den Schlüssel. Das kenne ich.', es: 'Yo también olvido a menudo la llave. Me pasa igual.'}
          ],
          tip: 'La entonación lo es todo: sube en <i>Echt jetzt?</i> y baja y alarga en <i>Nicht schon wieder!</i>.'
        }
      ],
      vocab: [
        {de: 'der Schlüssel', pl: 'die Schlüssel', es: 'la llave', ex: 'Mein Schlüssel liegt immer auf der Kommode.', exes: 'Mi llave siempre está en la cómoda.'},
        {de: 'die Brille', pl: 'die Brillen', es: 'las gafas', ex: 'Wo ist meine Brille? Ich sehe nichts!', exes: '¿Dónde están mis gafas? ¡No veo nada!'},
        {de: 'das Handy', pl: 'die Handys', es: 'el móvil', ex: 'Ich lege das Handy abends neben das Bett.', exes: 'Por las noches dejo el móvil junto a la cama.'},
        {de: 'der Schrank', pl: 'die Schränke', es: 'el armario', ex: 'Die Teller stehen im Schrank.', exes: 'Los platos están en el armario.'},
        {de: 'das Regal', pl: 'die Regale', es: 'la estantería', ex: 'Die Bücher stehen im Regal.', exes: 'Los libros están en la estantería.'},
        {de: 'die Lampe', pl: 'die Lampen', es: 'la lámpara', ex: 'Die Lampe hängt über dem Tisch.', exes: 'La lámpara cuelga sobre la mesa.'},
        {de: 'der Spiegel', pl: 'die Spiegel', es: 'el espejo', ex: 'Der Spiegel hängt neben der Tür.', exes: 'El espejo cuelga junto a la puerta.'},
        {de: 'das Bild', pl: 'die Bilder', es: 'el cuadro, la imagen', ex: 'Ich hänge das Bild an die Wand.', exes: 'Cuelgo el cuadro en la pared.'},
        {de: 'der Teppich', pl: 'die Teppiche', es: 'la alfombra', ex: 'Der Teppich liegt unter dem Tisch.', exes: 'La alfombra está debajo de la mesa.'},
        {de: 'der Schreibtisch', pl: 'die Schreibtische', es: 'el escritorio', ex: 'Auf dem Schreibtisch liegen viele Papiere.', exes: 'Sobre el escritorio hay muchos papeles.'},
        {de: 'die Tasche', pl: 'die Taschen', es: 'el bolso, la bolsa', ex: 'Ich stelle die Tasche neben den Stuhl.', exes: 'Dejo el bolso junto a la silla.'},
        {de: 'der Kühlschrank', pl: 'die Kühlschränke', es: 'la nevera', ex: 'Die Milch steht im Kühlschrank.', exes: 'La leche está en la nevera.'},
        {de: 'die Wand', pl: 'die Wände', es: 'la pared', ex: 'An der Wand hängt ein großes Bild.', exes: 'En la pared cuelga un cuadro grande.'},
        {de: 'die Ecke', pl: 'die Ecken', es: 'la esquina, el rincón', ex: 'In der Ecke steht eine Pflanze.', exes: 'En la esquina hay una planta.'},
        {de: 'der Mantel', pl: 'die Mäntel', es: 'el abrigo', ex: 'Mein Mantel hängt an der Garderobe.', exes: 'Mi abrigo cuelga en el perchero.'},
        {de: 'die Gewohnheit', pl: 'die Gewohnheiten', es: 'el hábito, la costumbre', ex: 'Es ist meine Gewohnheit, früh aufzustehen.', exes: 'Tengo la costumbre de levantarme temprano.'},
        {de: 'legen', es: 'poner (tumbado), colocar', note: 'legt – legte – hat gelegt', ex: 'Ich lege die Zeitung auf den Tisch.', exes: 'Pongo el periódico sobre la mesa.'},
        {de: 'stellen', es: 'poner (de pie)', note: 'stellt – stellte – hat gestellt', ex: 'Sie stellt die Vase auf das Regal.', exes: 'Ella pone el jarrón en la estantería.'},
        {de: 'hängen', es: 'colgar / estar colgado', note: 'hängen (transitivo): hängt – hängte – hat gehängt; hängen (intransitivo): hängt – hing – hat gehangen', ex: 'Der Mantel hängt an der Tür.', exes: 'El abrigo cuelga en la puerta.'},
        {de: 'liegen', es: 'estar tumbado, estar puesto', note: 'liegt – lag – hat gelegen', ex: 'Das Buch liegt auf dem Sofa.', exes: 'El libro está sobre el sofá.'},
        {de: 'stehen', es: 'estar de pie, estar colocado', note: 'steht – stand – hat gestanden', ex: 'Das Glas steht auf dem Tisch.', exes: 'El vaso está sobre la mesa.'}
      ],
      phrases: [
        {de: 'Wo ist mein Schlüssel?', es: '¿Dónde está mi llave?', use: 'preguntar'},
        {de: 'Er liegt auf dem Tisch.', es: 'Está sobre la mesa.', use: 'localizar'},
        {de: 'Wohin soll ich die Tasche stellen?', es: '¿Dónde pongo el bolso?', use: 'preguntar'},
        {de: 'Leg ihn bitte auf das Regal.', es: 'Ponlo, por favor, en la estantería.', use: 'pedir'},
        {de: 'Ich lege meinen Schlüssel immer auf die Kommode.', es: 'Siempre dejo la llave en la cómoda.', use: 'hábitos'},
        {de: 'Das ist meine Gewohnheit.', es: 'Es mi costumbre.', use: 'hábitos'},
        {de: 'Nicht schon wieder!', es: '¡Otra vez no!', use: 'harto/a'},
        {de: 'Echt jetzt?', es: '¿En serio?', use: 'asombro'},
        {de: 'Das glaube ich nicht!', es: '¡No me lo creo!', use: 'incredulidad'},
        {de: 'Das kenne ich.', es: 'Me pasa igual.', use: 'comprensión'}
      ],
      dialog: {
        title: 'Wo ist denn mein Schlüssel?',
        lines: [
          {s: 'A', de: 'Wo ist denn mein Schlüssel? Nicht schon wieder!', es: '¿Dónde está mi llave? ¡Otra vez no!'},
          {s: 'B', de: 'Hast du ihn auf die Kommode gelegt?', es: '¿La has puesto en la cómoda?'},
          {s: 'A', de: 'Nein, ich lege ihn immer in die Tasche. Aber da liegt er nicht.', es: 'No, siempre la pongo en el bolso. Pero ahí no está.'},
          {s: 'B', de: 'Vielleicht liegt er auf dem Sofa unter der Zeitung.', es: 'Quizá está en el sofá debajo del periódico.'},
          {s: 'A', de: 'Nein, auch nicht. Die Brille liegt dort, aber kein Schlüssel.', es: 'No, tampoco. Allí están las gafas, pero la llave no.'},
          {s: 'B', de: 'Schau mal: Er hängt an der Tür!', es: 'Mira: ¡está colgada en la puerta!'},
          {s: 'A', de: 'Echt jetzt? Ich hänge ihn doch nie an die Tür.', es: '¿En serio? Yo nunca la cuelgo en la puerta.'},
          {s: 'B', de: 'Doch, gestern Abend hast du ihn dort gelassen. Das glaube ich dir sofort.', es: 'Sí, anoche la dejaste ahí. Eso te lo creo enseguida.'},
          {s: 'A', de: 'Dann stelle ich ab morgen eine kleine Schale neben die Tür.', es: 'Entonces desde mañana pondré un pequeño cuenco junto a la puerta.'},
          {s: 'B', de: 'Gute Idee! Dort kann der Schlüssel immer liegen.', es: '¡Buena idea! Allí la llave puede estar siempre.'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Das Bild hängt an ___ Wand.', o: ['der', 'die', 'den'], a: 0, why: 'hängen (estado, wo?) + Dativ femenino: an der Wand.'},
        {t: 'mc', q: 'Ich hänge das Bild an ___ Wand.', o: ['die', 'der', 'dem'], a: 0, why: 'wohin? (acción) → Akkusativ femenino: an die Wand.'},
        {t: 'mc', q: 'Die Schlüssel ___ auf dem Tisch.', o: ['legen', 'liegen', 'legt'], a: 1, why: 'Estado (wo?) con plural: liegen.'},
        {t: 'mc', q: 'Anna ___ die Lampe neben das Sofa.', o: ['steht', 'stellen', 'stellt'], a: 2, why: 'Acción (wohin?) con sujeto singular: stellt.'},
        {t: 'mc', q: 'Er ___ die Tasche in den Schrank.', o: ['legt', 'liegt', 'lag'], a: 0, why: 'Acción con Akkusativ (in den Schrank): legt.'},
        {t: 'mc', q: 'Mein Bruder hat schon wieder meinen Schlüssel verloren! – ___', o: ['Gern geschehen!', 'Nicht schon wieder!', 'Guten Appetit!'], a: 1, why: 'Nicht schon wieder! expresa cansancio ante algo repetido.'},
        {t: 'gap', q: 'Das Buch liegt auf ___ Tisch. (der Tisch)', a: ['dem'], why: 'liegen = wo? → Dativ masculino: dem Tisch.'},
        {t: 'gap', q: 'Ich stelle die Flasche in ___ Kühlschrank. (der Kühlschrank)', a: ['den'], why: 'stellen = wohin? → Akkusativ masculino: den Kühlschrank.'},
        {t: 'gap', q: 'Die Lampe ___ über dem Sofa. (hängen)', a: ['hängt'], why: 'Estado: la lámpara cuelga; 3.ª persona singular: hängt.'},
        {t: 'gap', q: 'Wohin legst du den Mantel? – Ich ___ ihn auf das Bett. (legen)', a: ['lege'], why: 'Primera persona singular de legen: ich lege.'},
        {t: 'order', es: 'Sé que la llave está sobre la mesa.', de: 'Ich weiß, dass der Schlüssel auf dem Tisch liegt.', why: 'dass + sujeto + lugar con Dativ; el verbo liegt va al final.'},
        {t: 'order', es: 'Él dice que la bolsa está debajo de la cama.', de: 'Er sagt, dass die Tasche unter dem Bett liegt.', why: 'Estado (wo?) → Dativ; verbo al final.'},
        {t: 'order', es: 'Cuando llego a casa, pongo los zapatos junto a la puerta.', de: 'Wenn ich nach Hause komme, stelle ich die Schuhe neben die Tür.', why: 'Wohin? → Akkusativ: neben die Tür; tras wenn, verbo + sujeto.'},
        {t: 'tr', es: 'El móvil está sobre el sofá.', de: ['Das Handy liegt auf dem Sofa.', 'Das Handy liegt auf der Couch.'], why: ''},
        {t: 'tr', es: 'Cuelgo el cuadro sobre el sofá.', de: ['Ich hänge das Bild über das Sofa.', 'Ich hänge das Bild über die Couch.'], why: ''},
        {t: 'fix', q: 'Ich lege die Tasche auf dem Stuhl.', a: ['Ich lege die Tasche auf den Stuhl.'], why: 'legen indica movimiento (wohin?) → Akkusativ: auf den Stuhl.'},
        {t: 'fix', q: 'Die Schuhe stehen unter den Bett.', a: ['Die Schuhe stehen unter dem Bett.'], why: 'stehen = wo? → Dativ neutro: unter dem Bett.'},
        {t: 'match', pairs: [['der Schlüssel', 'la llave'], ['das Regal', 'la estantería'], ['der Teppich', 'la alfombra'], ['die Ecke', 'la esquina, el rincón'], ['die Gewohnheit', 'el hábito'], ['der Spiegel', 'el espejo']]}
      ],
      speak: [
        {prompt: 'Describe tu habitación o tu salón: dónde están 4-5 objetos (liegen, stehen, hängen + Dativ).', model: 'In meinem Wohnzimmer steht ein Sofa. Vor dem Sofa liegt ein Teppich. An der Wand hängt ein großes Bild. Neben dem Fenster steht ein Regal. Auf dem Regal stehen viele Bücher.'},
        {prompt: 'Cuenta tus hábitos con objetos (llaves, móvil, abrigo): dónde los pones cada día. Usa immer, oft, jeden Abend y legen / stellen / hängen.', model: 'Ich lege meinen Schlüssel immer auf die Kommode. Das Handy lege ich jeden Abend neben das Bett. Meine Jacke hänge ich an die Garderobe. Die Schuhe stelle ich unter die Bank. Das ist meine Gewohnheit.'},
        {prompt: 'Para uso real: reacciona en voz alta a estas situaciones (perder la llave, mensajes de tu pareja, olvidos) con Nicht schon wieder! / Echt jetzt? / Das glaube ich nicht!', model: 'Meine Schlüssel sind weg? Nicht schon wieder! – Du hast sie im Kühlschrank gefunden? Echt jetzt? – Du ordnest nie die Schuhe? Das glaube ich nicht! – Das kenne ich, mir passiert das auch.'}
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m4',
  level: 'A2',
  num: 4,
  title: 'Moverse, viajar y tramitar',
  emoji: '🚆',
  lessons: [
    {
      id: 'a2-10',
      title: 'Wie komme ich dahin?',
      es: 'Movilidad en la ciudad',
      goals: [
        'Usar von, bei y zu con Dativ (vom, beim, zum, zur)',
        'Distinguir zu Hause y nach Hause, y decir zu Fuß y von … nach …',
        'Rechazar una propuesta, convencer a alguien y aceptar',
        'Hablar de tráfico y medios de transporte'
      ],
      grammar: [
        {
          h: 'von, bei, zu: tres preposiciones con Dativ',
          p: '<span class="de">von</span>, <span class="de">bei</span> y <span class="de">zu</span> llevan siempre <b>Dativ</b>. Sirven para personas, tiendas e instituciones y responden a tres preguntas: <b>woher?</b> (¿de dónde?) → <span class="de">von</span>; <b>wo?</b> (¿dónde?) → <span class="de">bei</span>; <b>wohin?</b> (¿adónde?) → <span class="de">zu</span>. Con el artículo masculino y neutro se contraen: <span class="de">von + dem = vom</span>, <span class="de">bei + dem = beim</span>, <span class="de">zu + dem = zum</span>; con el femenino: <span class="de">zu + der = zur</span>. Además, <span class="de">bei</span> significa <i>durante</i> con actividades (<span class="de">beim Essen</span>) y <i>en casa de</i> (<span class="de">bei meiner Tante</span>).',
          table: {
            head: ['Pregunta', 'Preposición', 'Ejemplo', 'Significado'],
            rows: [
              ['Woher?', '<b>von</b> (vom)', 'Ich komme vom Arzt.', 'Vengo del médico.'],
              ['Wo?', '<b>bei</b> (beim)', 'Ich bin beim Arzt.', 'Estoy en el médico.'],
              ['Wohin?', '<b>zu</b> (zum, zur)', 'Ich gehe zum Arzt.', 'Voy al médico.'],
              ['Wohin? (f.)', '<b>zu</b> (zur)', 'Ich gehe zur Bäckerin.', 'Voy a la panadera.'],
              ['Wo? (en casa de)', '<b>bei</b> + Dativ', 'Er wohnt bei seinen Eltern.', 'Vive con sus padres.']
            ]
          },
          ex: [
            {de: 'Ich komme gerade vom Bahnhof.', es: 'Acabo de llegar de la estación.'},
            {de: 'Meine Schwester ist heute beim Friseur.', es: 'Mi hermana está hoy en la peluquería.'},
            {de: 'Wir fahren morgen zum Flughafen.', es: 'Mañana vamos al aeropuerto.'},
            {de: 'Tim geht nach dem Unterricht zur Bibliothek.', es: 'Tim va a la biblioteca después de la clase.'},
            {de: 'Beim Frühstück lese ich gern die Zeitung.', es: 'Durante el desayuno me gusta leer el periódico.'}
          ],
          tip: 'En español casi todo se resuelve con <i>a, de, en</i>. En alemán decide la pregunta: ¿origen (von), lugar (bei) o destino (zu)? Para lugares como la ciudad o el cine se usa <span class="de">in</span> + Akkusativ (<span class="de">in die Stadt</span>), pero con personas y servicios, <span class="de">zu</span>.'
        },
        {
          h: 'zu Fuß, von … nach …, zu Hause y nach Hause',
          p: 'Para ir <b>a pie</b> se dice <span class="de">zu Fuß</span> (sin artículo). Con vehículos se usa <span class="de">mit</span> + Dativ: <span class="de">mit dem Bus, mit der U-Bahn, mit dem Rad</span>. Para el recorrido entre dos ciudades o países: <span class="de">von … nach …</span> (<span class="de">von Wien nach Salzburg</span>). Con <span class="de">Hause</span> hay dos expresiones fijas: <span class="de">zu Hause</span> responde a <b>wo?</b> (estar en casa) y <span class="de">nach Hause</span> responde a <b>wohin?</b> (volver a casa). Si hablas de la casa de otra persona, usa <span class="de">bei</span> / <span class="de">zu</span>: <span class="de">Ich bin bei Anna</span>, <span class="de">Ich gehe zu Anna</span>.',
          table: {
            head: ['Expresión', 'Significado', 'Ejemplo'],
            rows: [
              ['zu Fuß', 'a pie', 'Ich gehe zu Fuß zur Schule.'],
              ['mit dem / der …', 'en (medio de transporte)', 'Wir fahren mit der Straßenbahn.'],
              ['von … nach …', 'de … a …', 'Der Zug fährt von Köln nach Bonn.'],
              ['zu Hause (wo?)', 'en casa', 'Heute Abend bin ich zu Hause.'],
              ['nach Hause (wohin?)', 'a casa', 'Um sechs gehe ich nach Hause.'],
              ['bei / zu + persona', 'en / a casa de', 'Ich bin bei Murat. / Ich gehe zu Murat.']
            ]
          },
          ex: [
            {de: 'Ich gehe jeden Tag zu Fuß zur Arbeit.', es: 'Voy al trabajo a pie todos los días.'},
            {de: 'Der Bus fährt von der Schule zum Marktplatz.', es: 'El autobús va de la escuela a la plaza del mercado.'},
            {de: 'Am Sonntag bleiben wir zu Hause.', es: 'El domingo nos quedamos en casa.'},
            {de: 'Nach dem Kurs fahre ich direkt nach Hause.', es: 'Después del curso voy directamente a casa.'},
            {de: 'Lena übernachtet bei ihrer Freundin.', es: 'Lena duerme en casa de su amiga.'}
          ],
          tip: 'No digas <i>zu Hause gehen</i>: con un verbo de movimiento (gehen, fahren, kommen) va <span class="de">nach Hause</span>. Con sein o bleiben, <span class="de">zu Hause</span>. Y es <span class="de">zu Fuß</span>, no <i>mit Fuß</i>.'
        },
        {
          h: 'Rechazar, convencer y aceptar',
          p: 'Cuando alguien propone algo, puedes <b>aceptar</b>, <b>rechazar</b> o intentar <b>convencer</b>. Para rechazar con cortesía se da una disculpa y una razón: <span class="de">Tut mir leid, aber das geht leider nicht.</span> Para convencer se usa <span class="de">doch</span> (suaviza la invitación) y argumentos: <span class="de">Komm doch mit! Das macht bestimmt Spaß.</span> Para proponer una alternativa: <span class="de">Wie wäre es mit …?</span> (+ Dativ). Para aceptar: <span class="de">Gute Idee!</span>, <span class="de">Einverstanden!</span>, o con duda inicial, <span class="de">Na gut, überredet!</span> (vale, me has convencido).',
          table: {
            head: ['Función', 'Frases'],
            rows: [
              ['Aceptar', 'Gute Idee! / Einverstanden! / Gern, ich komme mit.'],
              ['Aceptar tras dudar', 'Na gut, überredet! / Warum nicht?'],
              ['Rechazar', 'Nein, danke. / Tut mir leid, das geht leider nicht. / Ich habe leider keine Zeit.'],
              ['Convencer', 'Komm doch mit! / Das macht bestimmt Spaß. / Überleg es dir noch einmal.'],
              ['Proponer otra cosa', 'Wie wäre es mit dem Fahrrad? / Fahren wir doch lieber mit dem Zug.']
            ]
          },
          ex: [
            {de: 'Komm doch mit, wir fahren zusammen zum See!', es: '¡Vente, vamos juntos al lago!'},
            {de: 'Tut mir leid, aber ich habe heute leider keine Zeit.', es: 'Lo siento, pero hoy no tengo tiempo.'},
            {de: 'Wie wäre es mit der U-Bahn? Sie ist schneller als der Bus.', es: '¿Qué tal el metro? Es más rápido que el autobús.'},
            {de: 'Na gut, überredet! Ich fahre mit dem Rad.', es: 'Vale, me has convencido. Voy en bici.'},
            {de: 'Einverstanden, wir treffen uns um acht an der Haltestelle.', es: 'De acuerdo, nos vemos a las ocho en la parada.'}
          ],
          tip: 'Un simple <span class="de">Nein</span> suena seco. Añade <span class="de">leider</span> y una razón. Y <span class="de">doch</span> en <span class="de">Komm doch mit!</span> no significa <i>pero</i>: es un suavizador que invita.'
        }
      ],
      vocab: [
        {de: 'der Verkehr', es: 'el tráfico', ex: 'Morgens ist der Verkehr in der Stadt sehr dicht.', exes: 'Por las mañanas el tráfico en la ciudad es muy denso.'},
        {de: 'der Stau', pl: 'die Staus', es: 'el atasco', ex: 'Auf der Autobahn gibt es heute einen langen Stau.', exes: 'Hoy hay un atasco largo en la autopista.'},
        {de: 'die Haltestelle', pl: 'die Haltestellen', es: 'la parada', ex: 'Die Haltestelle ist direkt vor dem Supermarkt.', exes: 'La parada está justo delante del supermercado.'},
        {de: 'der Bahnsteig', pl: 'die Bahnsteige', es: 'el andén', ex: 'Der Zug nach Hamburg fährt von Bahnsteig drei ab.', exes: 'El tren a Hamburgo sale del andén tres.'},
        {de: 'die Fahrkarte', pl: 'die Fahrkarten', es: 'el billete', ex: 'Ich kaufe die Fahrkarte am Automaten.', exes: 'Compro el billete en la máquina.'},
        {de: 'der Fahrplan', pl: 'die Fahrpläne', es: 'el horario (de transporte)', ex: 'Laut Fahrplan kommt der Bus um halb neun.', exes: 'Según el horario, el autobús llega a las ocho y media.'},
        {de: 'die Verspätung', pl: 'die Verspätungen', es: 'el retraso', ex: 'Der Zug hat zehn Minuten Verspätung.', exes: 'El tren lleva diez minutos de retraso.'},
        {de: 'die Straßenbahn', pl: 'die Straßenbahnen', es: 'el tranvía', ex: 'Mit der Straßenbahn fahre ich bis zum Marktplatz.', exes: 'Con el tranvía voy hasta la plaza del mercado.'},
        {de: 'die U-Bahn', pl: 'die U-Bahnen', es: 'el metro', ex: 'Die U-Bahn ist morgens oft sehr voll.', exes: 'El metro suele estar muy lleno por las mañanas.'},
        {de: 'der Flughafen', pl: 'die Flughäfen', es: 'el aeropuerto', ex: 'Vom Flughafen fährt alle zehn Minuten ein Zug in die Stadt.', exes: 'Del aeropuerto sale un tren a la ciudad cada diez minutos.'},
        {de: 'die Ampel', pl: 'die Ampeln', es: 'el semáforo', ex: 'An der Ampel müssen alle Autos warten.', exes: 'En el semáforo todos los coches tienen que esperar.'},
        {de: 'die Kreuzung', pl: 'die Kreuzungen', es: 'el cruce', ex: 'An der nächsten Kreuzung biegen Sie links ab.', exes: 'En el próximo cruce gire a la izquierda.'},
        {de: 'der Fußgänger', pl: 'die Fußgänger', es: 'el peatón', ex: 'Die Fußgänger dürfen bei Grün über die Straße gehen.', exes: 'Los peatones pueden cruzar la calle con luz verde.'},
        {de: 'der Radweg', pl: 'die Radwege', es: 'el carril bici', ex: 'Auf dem Radweg kann man sicher zur Arbeit fahren.', exes: 'Por el carril bici se puede ir al trabajo con seguridad.'},
        {de: 'die Fahrt', pl: 'die Fahrten', es: 'el viaje, el trayecto', ex: 'Die Fahrt zum Flughafen dauert eine halbe Stunde.', exes: 'El trayecto al aeropuerto dura media hora.'},
        {de: 'ein|steigen', es: 'subir (a un vehículo)', note: 'steigt ein – stieg ein – ist eingestiegen', ex: 'In Köln steige ich in den Zug ein.', exes: 'En Colonia me subo al tren.'},
        {de: 'aus|steigen', es: 'bajar (de un vehículo)', note: 'steigt aus – stieg aus – ist ausgestiegen', ex: 'An der nächsten Haltestelle müssen wir aussteigen.', exes: 'En la próxima parada tenemos que bajar.'},
        {de: 'um|steigen', es: 'hacer transbordo', note: 'steigt um – stieg um – ist umgestiegen', ex: 'In Frankfurt muss ich in den ICE umsteigen.', exes: 'En Fráncfort tengo que hacer transbordo al ICE.'},
        {de: 'ab|fahren', es: 'salir (un vehículo)', note: 'fährt ab – fuhr ab – ist abgefahren', ex: 'Der Bus fährt um Viertel nach sieben ab.', exes: 'El autobús sale a las siete y cuarto.'},
        {de: 'überzeugen', es: 'convencer', note: 'überzeugt – überzeugte – hat überzeugt', ex: 'Ich konnte meinen Bruder überzeugen, mit dem Rad zu fahren.', exes: 'Pude convencer a mi hermano de ir en bici.'}
      ],
      phrases: [
        {de: 'Ich komme gerade vom Arzt.', es: 'Acabo de venir del médico.', use: 'origen'},
        {de: 'Ich bin noch beim Friseur.', es: 'Todavía estoy en la peluquería.', use: 'ubicación'},
        {de: 'Wie komme ich zum Bahnhof?', es: '¿Cómo llego a la estación?', use: 'preguntar camino'},
        {de: 'Ich fahre von Köln nach Berlin.', es: 'Viajo de Colonia a Berlín.', use: 'trayecto'},
        {de: 'Heute bleibe ich lieber zu Hause.', es: 'Hoy prefiero quedarme en casa.', use: 'preferir'},
        {de: 'Tut mir leid, das geht leider nicht.', es: 'Lo siento, eso no es posible.', use: 'rechazar'},
        {de: 'Komm doch mit! Das macht bestimmt Spaß.', es: '¡Vente! Seguro que es divertido.', use: 'convencer'},
        {de: 'Wie wäre es mit dem Fahrrad?', es: '¿Qué tal la bicicleta?', use: 'proponer'},
        {de: 'Einverstanden!', es: '¡De acuerdo!', use: 'aceptar'},
        {de: 'Na gut, überredet!', es: 'Vale, me has convencido.', use: 'aceptar'}
      ],
      dialog: {
        title: 'Zum Konzert in der Stadthalle',
        lines: [
          {s: 'A', de: 'Hallo Tim! Ich komme gerade vom Bahnhof. Der Zug hatte wieder Verspätung.', es: '¡Hola Tim! Acabo de llegar de la estación. El tren volvió a llegar con retraso.'},
          {s: 'B', de: 'Schon wieder? Fährst du morgen trotzdem zum Konzert?', es: '¿Otra vez? ¿Vas mañana al concierto de todos modos?'},
          {s: 'A', de: 'Ja, aber ich weiß noch nicht, wie. Wie wäre es mit dem Auto? Wir fahren zusammen von deiner Wohnung zur Stadthalle.', es: 'Sí, pero todavía no sé cómo. ¿Qué tal el coche? Vamos juntos de tu casa a la sala de conciertos.'},
          {s: 'B', de: 'Tut mir leid, aber das geht leider nicht. In der Stadt ist so viel Verkehr, und es gibt keinen Parkplatz.', es: 'Lo siento, pero no es posible. En la ciudad hay mucho tráfico y no hay aparcamiento.'},
          {s: 'A', de: 'Stimmt. Aber mit der Straßenbahn muss ich einmal umsteigen, das dauert lange.', es: 'Es verdad. Pero en tranvía tengo que hacer un transbordo y tarda mucho.'},
          {s: 'B', de: 'Komm doch zu mir! Von meiner Wohnung sind es nur zehn Minuten zu Fuß bis zur Haltestelle.', es: '¡Vente a mi casa! Desde mi piso son solo diez minutos a pie hasta la parada.'},
          {s: 'A', de: 'Gute Idee! Dann gehe ich nach der Arbeit nicht nach Hause, sondern direkt zu dir.', es: '¡Buena idea! Entonces después del trabajo no voy a casa, sino directamente a la tuya.'},
          {s: 'B', de: 'Prima. Und die Straßenbahn fährt direkt zur Stadthalle.', es: 'Perfecto. Y el tranvía va directo a la sala de conciertos.'},
          {s: 'A', de: 'Einverstanden! Ich bin gegen sechs bei dir.', es: '¡De acuerdo! Estoy en tu casa hacia las seis.'},
          {s: 'B', de: 'Super. Bis morgen!', es: 'Genial. ¡Hasta mañana!'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Ich gehe jeden Morgen ___ Bahnhof und nehme die S-Bahn.', o: ['zum', 'beim', 'vom'], a: 0, why: 'Destino (wohin?) con un lugar masculino: zu + dem = zum.'},
        {t: 'mc', q: 'Meine Schwester wohnt noch ___ ihren Eltern.', o: ['zu', 'bei', 'von'], a: 1, why: 'Vivir en casa de alguien se dice wohnen bei + Dativ.'},
        {t: 'mc', q: 'Ich komme gerade ___ Arzt.', o: ['vom', 'zum', 'beim'], a: 0, why: 'Con kommen y origen (woher?) se usa von + dem = vom.'},
        {t: 'mc', q: 'Heute Abend bleiben wir ___.', o: ['nach Hause', 'zu Hause', 'von Hause'], a: 1, why: 'Con bleiben (lugar, wo?) se dice zu Hause.'},
        {t: 'mc', q: 'Um sechs Uhr gehe ich ___ Hause.', o: ['zu', 'nach', 'bei'], a: 1, why: 'Con un verbo de movimiento (wohin?) la expresión fija es nach Hause.'},
        {t: 'mc', q: 'Dein Freund lädt dich zu einer Radtour ein, aber du hast keine Zeit. Was sagst du?', o: ['Tut mir leid, aber das geht leider nicht.', 'Gute Idee, ich komme gern!', 'Wie wäre es mit dem Bus?'], a: 0, why: 'Para rechazar con cortesía: disculpa + leider + razón.'},
        {t: 'mc', q: 'Du willst deinen Freund überzeugen, mit dem Rad zu kommen. Was sagst du?', o: ['Das geht leider nicht.', 'Nein danke, ich habe keine Lust.', 'Komm doch mit! Das ist viel gesünder als der Bus.'], a: 2, why: 'Para convencer se invita con doch y se da un argumento.'},
        {t: 'gap', q: 'Ich gehe ___ Fuß zur Schule.', a: ['zu'], why: 'La expresión fija para ir a pie es zu Fuß.'},
        {t: 'gap', q: 'Der Zug fährt ___ München nach Hamburg.', a: ['von'], why: 'El recorrido entre dos ciudades se dice von … nach …'},
        {t: 'gap', q: 'Heute Nachmittag bin ich ___ meiner Zahnärztin.', a: ['bei'], why: 'Estar en el lugar de una persona (wo?) se dice bei + Dativ.'},
        {t: 'gap', q: 'Ich muss noch ___ Bäcker, Brötchen kaufen. (zu + dem)', a: ['zum', 'zu dem'], why: 'Destino con persona o tienda masculina: zu + dem = zum.'},
        {t: 'order', es: 'Ich komme gerade vom Bahnhof.', de: 'Ich komme gerade vom Bahnhof.', why: 'Origen (woher?) con vom; el verbo conjugado va en posición 2.'},
        {t: 'order', es: 'El autobús va de la parada al aeropuerto.', de: 'Der Bus fährt von der Haltestelle zum Flughafen.', why: 'von der (f.) para el origen y zu + dem = zum para el destino.'},
        {t: 'order', es: 'No me gusta ir en metro porque está lleno.', de: 'Ich fahre nicht gern mit der U-Bahn, weil sie so voll ist.', why: 'Con weil el verbo conjugado (ist) va al final; mit + der + Dativ.'},
        {t: 'tr', es: 'Voy a casa de mi amiga.', de: ['Ich gehe zu meiner Freundin.', 'Ich fahre zu meiner Freundin.'], why: 'A casa de una persona: zu + Dativ (meiner Freundin).'},
        {t: 'tr', es: 'Mañana me quedo en casa.', de: ['Morgen bleibe ich zu Hause.', 'Ich bleibe morgen zu Hause.', 'Morgen bleibe ich zuhause.'], why: 'Con bleiben se usa zu Hause (wo?), no nach Hause.'},
        {t: 'fix', q: 'Ich gehe heute Abend zu Hause.', a: ['Ich gehe heute Abend nach Hause.'], why: 'Con gehen (movimiento) se dice nach Hause.'},
        {t: 'fix', q: 'Ich komme von Bäcker.', a: ['Ich komme vom Bäcker.', 'Ich komme von dem Bäcker.'], why: 'von + dem Bäcker = vom Bäcker; falta el artículo contraído.'},
        {t: 'match', pairs: [['der Stau', 'el atasco'], ['die Haltestelle', 'la parada'], ['die Verspätung', 'el retraso'], ['um|steigen', 'hacer transbordo'], ['die Ampel', 'el semáforo'], ['der Fußgänger', 'el peatón']]}
      ],
      speak: [
        {prompt: 'Cuenta en 4-5 frases cómo vas normalmente al trabajo o a clase. Usa zu Fuß, mit dem …, von … nach … y nach Hause / zu Hause.', model: 'Ich wohne in der Nähe vom Zentrum. Morgens gehe ich zu Fuß zur Haltestelle und fahre mit der Straßenbahn zur Arbeit. Dann muss ich einmal umsteigen. Am Abend fahre ich von der Arbeit nach Hause. Am Wochenende bin ich gern zu Hause.'},
        {prompt: 'Un amigo te invita a una excursión, pero no quieres ir. Recházalo con cortesía y propón otra cosa (3-4 frases).', model: 'Danke für die Einladung, aber das geht leider nicht. Ich habe am Samstag keine Zeit. Wie wäre es mit Sonntag? Dann fahren wir zusammen mit dem Rad zum See.'},
        {prompt: 'Para uso real: convence en voz alta a alguien de ir contigo en transporte público en lugar de en coche, y deja que acepte al final.', model: 'Komm doch mit der U-Bahn! Das ist viel schneller als das Auto, und wir stehen nicht im Stau. Außerdem finden wir keinen Parkplatz. Na gut, überredet! Wir treffen uns um acht an der Haltestelle.'}
      ]
    },
    {
      id: 'a2-11',
      title: 'Ich hätte gern Ferien!',
      es: 'Vacaciones, deseos y estadísticas',
      goals: [
        'Expresar deseos con hätte y wäre + gern',
        'Decir preferencias con gern, lieber y am liebsten',
        'Hablar de vacaciones y de lo que se mete en la maleta',
        'Describir una estadística: die meisten, ein Viertel, mehr als …'
      ],
      grammar: [
        {
          h: 'Deseos con Konjunktiv II: hätte y wäre',
          p: 'Para expresar un deseo que ahora no se cumple, o para pedir con cortesía, se usa el <b>Konjunktiv II</b> de <span class="de">haben</span> y <span class="de">sein</span>: <span class="de">hätte</span> y <span class="de">wäre</span>. Equivale al condicional español: <i>tendría, estaría, sería</i>. La palabra <span class="de">gern</span> refuerza el deseo: <span class="de">Ich hätte gern mehr Zeit.</span> (<i>Me gustaría tener más tiempo</i>). <span class="de">Ich wäre jetzt gern am Meer.</span> (<i>Me gustaría estar ahora en el mar</i>). Se forman a partir del Präteritum (<span class="de">hatte</span> → <span class="de">hätte</span>, <span class="de">war</span> → <span class="de">wäre</span>), con las terminaciones <b>-e, -st, -e, -n, -t, -n</b>.',
          table: {
            head: ['Persona', 'haben', 'sein'],
            rows: [
              ['ich', '<b>hätte</b>', '<b>wäre</b>'],
              ['du', '<b>hättest</b>', '<b>wärst</b>'],
              ['er / sie / es', '<b>hätte</b>', '<b>wäre</b>'],
              ['wir', '<b>hätten</b>', '<b>wären</b>'],
              ['ihr', '<b>hättet</b>', '<b>wärt</b>'],
              ['sie / Sie', '<b>hätten</b>', '<b>wären</b>']
            ]
          },
          ex: [
            {de: 'Ich hätte gern drei Wochen Urlaub.', es: 'Me gustaría tener tres semanas de vacaciones.'},
            {de: 'Wir hätten gern ein Zimmer mit Meerblick.', es: 'Quisiéramos una habitación con vistas al mar.'},
            {de: 'Ich wäre jetzt gern am Strand.', es: 'Me gustaría estar ahora en la playa.'},
            {de: 'Wärst du auch gern in Italien?', es: '¿Te gustaría estar también en Italia?'},
            {de: 'Anna hätte gern einen Hund, aber die Wohnung ist zu klein.', es: 'Anna querría tener un perro, pero el piso es demasiado pequeño.'}
          ],
          tip: 'No uses <span class="de">Ich habe gern …</span> para un deseo: eso significa <i>me gusta tener</i>. Un deseo se dice <span class="de">Ich hätte gern …</span>. Y cuidado con <span class="de">hätte</span> (Konjunktiv) frente a <span class="de">hatte</span> (pasado de haben): una sola letra cambia el sentido.'
        },
        {
          h: 'gern, lieber, am liebsten',
          p: 'Estas tres palabras forman una escala: <span class="de">gern</span> (<i>con gusto</i>) → <span class="de">lieber</span> (<i>preferir</i>) → <span class="de">am liebsten</span> (<i>lo que más me gusta</i>). Se combinan con cualquier verbo (<span class="de">Ich fahre gern ans Meer</span>) y también con <span class="de">hätte</span> y <span class="de">wäre</span> para expresar deseos y preferencias. Para comparar dos cosas se usa <span class="de">lieber … als …</span>. Si <span class="de">am liebsten</span> abre la frase, el verbo sigue en la posición 2: <span class="de">Am liebsten fahre ich nach Italien.</span>',
          table: {
            head: ['Grado', 'Con un verbo normal', 'Con hätte / wäre'],
            rows: [
              ['gern', 'Ich fahre gern ans Meer.', 'Ich hätte gern Ruhe. / Ich wäre gern am Meer.'],
              ['lieber', 'Ich fahre lieber in die Berge.', 'Ich hätte lieber ein Zimmer mit Balkon.'],
              ['am liebsten', 'Am liebsten fahre ich nach Italien.', 'Am liebsten wäre ich in Italien.'],
              ['lieber … als …', 'Ich fahre lieber mit dem Zug als mit dem Bus.', 'Ich wäre lieber zu Hause als im Büro.']
            ]
          },
          ex: [
            {de: 'Ich esse gern Eis, aber lieber esse ich Kuchen.', es: 'Me gusta el helado, pero prefiero comer pastel.'},
            {de: 'Meine Eltern reisen lieber im Herbst als im Sommer.', es: 'Mis padres prefieren viajar en otoño que en verano.'},
            {de: 'Am liebsten hätte ich einen ganzen Monat frei.', es: 'Lo que más me gustaría es tener un mes entero libre.'},
            {de: 'Wir wären lieber in einer Ferienwohnung als in einem Hotel.', es: 'Preferiríamos estar en un apartamento vacacional que en un hotel.'},
            {de: 'Am liebsten fährt Tim mit dem Rad durch Holland.', es: 'Lo que más le gusta a Tim es recorrer Holanda en bici.'}
          ],
          tip: 'Los tres adverbios son invariables y <b>lieber</b> no es <i>mejor</i> sino <i>preferentemente</i>. Para decir <i>más que</i> usa <span class="de">als</span>, nunca <i>wie</i>: <span class="de">lieber Bus als Zug</span>.'
        },
        {
          h: 'Describir una infografía o estadística',
          p: 'Para comentar un gráfico o una encuesta, empieza con <span class="de">Die Grafik zeigt …</span> o <span class="de">Laut der Umfrage …</span> (<i>según la encuesta</i>). Para las cantidades usa fracciones y expresiones de mayoría: <span class="de">die meisten</span> (la mayoría), <span class="de">mehr als die Hälfte</span>, <span class="de">ein Viertel</span>, <span class="de">weniger als</span>. Con <span class="de">fast</span> (casi) y <span class="de">etwa</span> (aproximadamente) matizas. Con <span class="de">Prozent</span> el número va antes: <span class="de">40 Prozent</span>. Cuando la fracción va con <span class="de">der Befragten</span> (de los encuestados), el verbo va en singular.',
          table: {
            head: ['Porcentaje', 'Alemán', 'Ejemplo'],
            rows: [
              ['25 %', 'ein Viertel', 'Ein Viertel der Befragten bleibt zu Hause.'],
              ['33 %', 'ein Drittel', 'Ein Drittel fährt ans Meer.'],
              ['50 %', 'die Hälfte', 'Die Hälfte der Gäste kommt aus dem Ausland.'],
              ['75 %', 'drei Viertel', 'Drei Viertel buchen online.'],
              ['más del 50 %', 'die meisten / mehr als die Hälfte', 'Die meisten reisen im Sommer.'],
              ['menos', 'weniger als', 'Weniger als zehn Prozent fliegen im Winter.']
            ]
          },
          ex: [
            {de: 'Die Grafik zeigt, wohin die Deutschen am liebsten reisen.', es: 'El gráfico muestra adónde prefieren viajar los alemanes.'},
            {de: 'Laut der Umfrage fahren die meisten im Sommer weg.', es: 'Según la encuesta, la mayoría viaja en verano.'},
            {de: 'Mehr als die Hälfte der Befragten bleibt in Deutschland.', es: 'Más de la mitad de los encuestados se queda en Alemania.'},
            {de: 'Etwa ein Viertel der jungen Leute fährt mit dem Rad in den Urlaub.', es: 'Aproximadamente una cuarta parte de los jóvenes viaja en bici.'},
            {de: 'Fast ein Drittel bucht die Unterkunft online.', es: 'Casi un tercio reserva el alojamiento por internet.'}
          ],
          tip: 'En español decimos <i>la mayoría viaja</i>; en alemán <span class="de">die meisten</span> lleva siempre artículo y está en plural: <span class="de">die meisten fahren</span>. Y para comparar, <span class="de">mehr als</span> / <span class="de">weniger als</span> (nunca <i>wie</i>).'
        }
      ],
      vocab: [
        {de: 'der Koffer', pl: 'die Koffer', es: 'la maleta', ex: 'Mein Koffer ist schwer, weil ich viele Bücher mitnehme.', exes: 'Mi maleta pesa porque me llevo muchos libros.'},
        {de: 'die Reisetasche', pl: 'die Reisetaschen', es: 'el bolso de viaje', ex: 'Für das Wochenende reicht mir eine kleine Reisetasche.', exes: 'Para el fin de semana me basta con un bolso de viaje pequeño.'},
        {de: 'der Rucksack', pl: 'die Rucksäcke', es: 'la mochila', ex: 'Im Rucksack habe ich Wasser und ein Sandwich.', exes: 'En la mochila llevo agua y un sándwich.'},
        {de: 'das Handgepäck', es: 'el equipaje de mano', ex: 'Im Handgepäck darf keine große Flasche sein.', exes: 'En el equipaje de mano no puede haber una botella grande.'},
        {de: 'das Gepäck', es: 'el equipaje', ex: 'Das Gepäck kommt am Band Nummer zwei.', exes: 'El equipaje llega en la cinta número dos.'},
        {de: 'der Reiseführer', pl: 'die Reiseführer', es: 'la guía de viaje', ex: 'Im Reiseführer stehen viele gute Tipps für Wien.', exes: 'En la guía de viaje hay muchos buenos consejos para Viena.'},
        {de: 'die Sonnencreme', pl: 'die Sonnencremes', es: 'la crema solar', ex: 'Vergiss die Sonnencreme nicht, es wird sehr heiß.', exes: 'No olvides la crema solar, va a hacer mucho calor.'},
        {de: 'die Sonnenbrille', pl: 'die Sonnenbrillen', es: 'las gafas de sol', ex: 'Ohne Sonnenbrille kann ich am Strand nichts sehen.', exes: 'Sin gafas de sol no veo nada en la playa.'},
        {de: 'das Badetuch', pl: 'die Badetücher', es: 'la toalla de baño', ex: 'Ich lege das Badetuch in den Koffer.', exes: 'Pongo la toalla de baño en la maleta.'},
        {de: 'der Regenschirm', pl: 'die Regenschirme', es: 'el paraguas', ex: 'In Hamburg braucht man oft einen Regenschirm.', exes: 'En Hamburgo muchas veces hace falta un paraguas.'},
        {de: 'das Ladekabel', pl: 'die Ladekabel', es: 'el cable de carga', ex: 'Ich habe das Ladekabel für mein Handy vergessen.', exes: 'Olvidé el cable de carga de mi móvil.'},
        {de: 'die Zahnbürste', pl: 'die Zahnbürsten', es: 'el cepillo de dientes', ex: 'Die Zahnbürste liegt noch im Bad.', exes: 'El cepillo de dientes todavía está en el baño.'},
        {de: 'der Strand', pl: 'die Strände', es: 'la playa', ex: 'Am Strand liegen wir den ganzen Tag in der Sonne.', exes: 'En la playa nos tumbamos todo el día al sol.'},
        {de: 'die Unterkunft', pl: 'die Unterkünfte', es: 'el alojamiento', ex: 'Wir haben eine günstige Unterkunft am See gefunden.', exes: 'Hemos encontrado un alojamiento barato junto al lago.'},
        {de: 'die Umfrage', pl: 'die Umfragen', es: 'la encuesta', ex: 'In einer Umfrage haben 500 Personen geantwortet.', exes: 'En una encuesta respondieron 500 personas.'},
        {de: 'packen', es: 'hacer la maleta, empacar', note: 'packt – packte – hat gepackt', ex: 'Ich packe meinen Koffer erst am Abend vor der Reise.', exes: 'Hago la maleta solo la noche antes del viaje.'},
        {de: 'ein|packen', es: 'meter en la maleta', note: 'packt ein – packte ein – hat eingepackt', ex: 'Hast du die Sonnencreme eingepackt?', exes: '¿Has metido la crema solar?'},
        {de: 'vergessen', es: 'olvidar', note: 'vergisst – vergaß – hat vergessen', ex: 'Ich vergesse im Urlaub immer mein Ladekabel.', exes: 'En vacaciones siempre me olvido del cable de carga.'},
        {de: 'buchen', es: 'reservar', note: 'bucht – buchte – hat gebucht', ex: 'Wir buchen die Reise lieber früh als spät.', exes: 'Preferimos reservar el viaje pronto que tarde.'},
        {de: 'sich erholen', es: 'descansar, recuperarse', note: 'erholt sich – erholte sich – hat sich erholt', ex: 'Im Urlaub möchte ich mich richtig erholen.', exes: 'En vacaciones quiero descansar de verdad.'}
      ],
      phrases: [
        {de: 'Ich hätte gern mehr Urlaub.', es: 'Me gustaría tener más vacaciones.', use: 'deseo'},
        {de: 'Ich wäre jetzt am liebsten am Strand.', es: 'Ahora lo que más quisiera es estar en la playa.', use: 'deseo'},
        {de: 'Ich fahre lieber in die Berge als ans Meer.', es: 'Prefiero ir a la montaña que al mar.', use: 'preferir'},
        {de: 'Am liebsten fahre ich nach Spanien.', es: 'Lo que más me gusta es viajar a España.', use: 'preferencia'},
        {de: 'Wo wärst du jetzt am liebsten?', es: '¿Dónde te gustaría estar ahora?', use: 'preguntar'},
        {de: 'Wie wäre es mit einem Wochenende in Wien?', es: '¿Qué tal un fin de semana en Viena?', use: 'proponer'},
        {de: 'Die Grafik zeigt, dass die meisten im Sommer verreisen.', es: 'El gráfico muestra que la mayoría viaja en verano.', use: 'describir'},
        {de: 'Laut der Umfrage bleibt ein Viertel zu Hause.', es: 'Según la encuesta, una cuarta parte se queda en casa.', use: 'citar datos'},
        {de: 'Mehr als die Hälfte der Befragten …', es: 'Más de la mitad de los encuestados …', use: 'cantidad'},
        {de: 'Ich hätte gern ein Zimmer mit Balkon.', es: 'Quisiera una habitación con balcón.', use: 'pedir'}
      ],
      dialog: {
        title: 'Wohin im Sommer?',
        lines: [
          {s: 'A', de: 'Murat, wo wärst du jetzt am liebsten?', es: 'Murat, ¿dónde te gustaría estar ahora?'},
          {s: 'B', de: 'Am liebsten wäre ich jetzt am Strand. Ich hätte so gern Sonne und Ruhe!', es: 'Lo que más quisiera es estar ahora en la playa. ¡Tendría tanto gusto en tener sol y tranquilidad!'},
          {s: 'A', de: 'Ich wäre lieber in den Bergen. Am Meer ist es im Sommer immer so voll.', es: 'Yo preferiría estar en la montaña. En el mar siempre hay mucha gente en verano.'},
          {s: 'B', de: 'Stimmt, aber ich wandere nicht gern. Ich liege lieber den ganzen Tag in der Sonne.', es: 'Es verdad, pero no me gusta hacer senderismo. Prefiero tumbarme al sol todo el día.'},
          {s: 'A', de: 'Dann hätten wir ein Problem! Wie wäre es mit einem See in Österreich? Dort ist beides möglich.', es: '¡Entonces tendríamos un problema! ¿Qué tal un lago en Austria? Allí es posible ambas cosas.'},
          {s: 'B', de: 'Gute Idee! Ein See wäre perfekt. Hast du schon eine Unterkunft gesucht?', es: '¡Buena idea! Un lago sería perfecto. ¿Ya has buscado alojamiento?'},
          {s: 'A', de: 'Ja, ich habe eine Ferienwohnung mit Balkon gefunden. Ich hätte gern zwei Wochen Urlaub, aber ich habe nur eine Woche frei.', es: 'Sí, he encontrado un apartamento con balcón. Me gustaría tener dos semanas de vacaciones, pero solo tengo una semana libre.'},
          {s: 'B', de: 'Eine Woche ist besser als nichts. Was packst du ein?', es: 'Una semana es mejor que nada. ¿Qué metes en la maleta?'},
          {s: 'A', de: 'Sonnencreme, Sonnenbrille und mein Badetuch. Und du?', es: 'Crema solar, gafas de sol y mi toalla. ¿Y tú?'},
          {s: 'B', de: 'Ich vergesse bestimmt wieder das Ladekabel!', es: '¡Seguro que otra vez me olvido del cable de carga!'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Ich ___ gern mehr Zeit für Urlaub.', o: ['habe', 'hätte', 'wäre'], a: 1, why: 'Un deseo con tener se dice Ich hätte gern …'},
        {t: 'mc', q: 'Wir ___ jetzt gern am Meer.', o: ['hätten', 'wären', 'waren'], a: 1, why: 'Estar en un lugar como deseo: wir wären (Konjunktiv II de sein).'},
        {t: 'mc', q: 'Ich fahre ___ in die Berge als ans Meer.', o: ['gern', 'lieber', 'am liebsten'], a: 1, why: 'Con als (comparación entre dos cosas) se usa lieber.'},
        {t: 'mc', q: 'Von allen Ländern fahre ich ___ nach Italien.', o: ['gern', 'lieber', 'am liebsten'], a: 2, why: 'Von allen … indica el máximo: am liebsten.'},
        {t: 'mc', q: '50 % der Gäste kommen aus dem Ausland. Das ist ___ der Gäste.', o: ['die Hälfte', 'ein Viertel', 'ein Drittel'], a: 0, why: '50 % equivale a die Hälfte (la mitad).'},
        {t: 'mc', q: 'Die Grafik: 80 % fahren ans Meer, 20 % in die Berge. ___ fahren ans Meer.', o: ['Niemand', 'Die meisten', 'Wenige'], a: 1, why: 'Con un 80 % se habla de die meisten (la mayoría).'},
        {t: 'gap', q: 'Ich ___ jetzt gern im Urlaub. (sein, Konjunktiv II)', a: ['wäre'], why: 'Primera persona del Konjunktiv II de sein: wäre.'},
        {t: 'gap', q: 'Ihr ___ gern ein größeres Zimmer, oder? (haben, Konjunktiv II)', a: ['hättet'], why: 'Con ihr, Konjunktiv II de haben: hättet.'},
        {t: 'gap', q: 'Mein Bruder fährt nicht gern mit dem Zug. Er fährt ___ mit dem Auto. (comparativo de gern)', a: ['lieber'], why: 'El comparativo de gern es lieber.'},
        {t: 'gap', q: 'Mehr ___ die Hälfte der Befragten bleibt zu Hause.', a: ['als'], why: 'La comparación se expresa con mehr als.'},
        {t: 'order', es: 'Quisiera un apartamento vacacional cerca del mar.', de: 'Ich hätte gern eine Ferienwohnung am Meer.', why: 'hätte ocupa la posición 2; gern va tras el sujeto.'},
        {t: 'order', es: 'Más de la mitad de los encuestados se queda en Alemania.', de: 'Mehr als die Hälfte der Befragten bleibt in Deutschland.', why: 'El sujeto es die Hälfte (singular), por eso bleibt.'},
        {t: 'order', es: 'Prefiero ir a la montaña que al mar.', de: 'Ich fahre lieber in die Berge als ans Meer.', why: 'lieber … als … compara dos opciones.'},
        {t: 'tr', es: 'Me gustaría tener más vacaciones.', de: ['Ich hätte gern mehr Urlaub.', 'Ich hätte gerne mehr Urlaub.'], why: 'Deseo con tener: Ich hätte gern …'},
        {t: 'tr', es: 'Una cuarta parte de los jóvenes viaja preferentemente en tren.', de: ['Ein Viertel der Jugendlichen fährt lieber mit dem Zug.', 'Ein Viertel der jungen Leute fährt lieber mit dem Zug.', 'Ein Viertel der Jugendlichen reist lieber mit dem Zug.'], why: 'Ein Viertel + Singular del verbo; lieber expresa la preferencia.'},
        {t: 'fix', q: 'Ich wäre gern mehr Zeit.', a: ['Ich hätte gern mehr Zeit.'], why: 'Tener tiempo se construye con haben: hätte, no wäre.'},
        {t: 'fix', q: 'Mehr wie die Hälfte der Befragten fährt weg.', a: ['Mehr als die Hälfte der Befragten fährt weg.'], why: 'En comparaciones de cantidad se dice mehr als, no wie.'},
        {t: 'match', pairs: [['der Koffer', 'la maleta'], ['die Sonnenbrille', 'las gafas de sol'], ['das Badetuch', 'la toalla de baño'], ['der Regenschirm', 'el paraguas'], ['vergessen', 'olvidar'], ['sich erholen', 'descansar']]}
      ],
      speak: [
        {prompt: 'Cuenta en 4-5 frases dónde te gustaría estar ahora mismo y por qué. Usa Ich wäre … y Ich hätte gern …', model: 'Am liebsten wäre ich jetzt am Strand in Griechenland. Ich hätte gern Sonne, Ruhe und ein gutes Buch. Ich wäre nicht allein, meine Familie wäre auch dabei. Leider habe ich noch drei Wochen Arbeit.'},
        {prompt: 'Compara tus preferencias de vacaciones (mar o montaña, tren o avión, hotel o apartamento) con gern, lieber y am liebsten (4-5 frases).', model: 'Ich fahre gern ans Meer, aber lieber fahre ich in die Berge. Ich reise lieber mit dem Zug als mit dem Flugzeug. Ich wohne lieber in einer Ferienwohnung als in einem Hotel. Am liebsten bleibe ich zwei Wochen am selben Ort.'},
        {prompt: 'Para uso real: describe en voz alta esta estadística inventada: 40 % mar, 25 % montaña, 20 % ciudades, 15 % otros destinos.', model: 'Die Grafik zeigt, wohin die Menschen im Urlaub am liebsten fahren. Die meisten, nämlich 40 Prozent, fahren ans Meer. Ein Viertel macht Urlaub in den Bergen. Etwa ein Fünftel besucht Städte. Weniger als 20 Prozent wählen ein anderes Ziel.'}
      ]
    },
    {
      id: 'a2-12',
      title: 'Können Sie mir sagen, …?',
      es: 'Documentos y trámites: preguntas indirectas',
      goals: [
        'Formar preguntas indirectas con wie lange, wann, wo, wer, was …',
        'Formar preguntas indirectas con ob (sí/no)',
        'Preguntar con cortesía: Könnten Sie mir sagen, …?',
        'Expresar una decepción y reaccionar a la de otra persona'
      ],
      grammar: [
        {
          h: 'Preguntas indirectas con palabra interrogativa',
          p: 'Una <b>pregunta indirecta</b> es una pregunta metida dentro de otra frase: <span class="de">Weißt du, wann der Kurs anfängt?</span> La pregunta directa es <span class="de">Wann fängt der Kurs an?</span> Al integrarla, la palabra interrogativa (<span class="de">wann, wo, wer, was, wie lange, wie viel, warum</span>) funciona como una conjunción y el <b>verbo conjugado va al final</b>. Antes siempre hay una <b>coma</b>. Los verbos separables se juntan al final (<span class="de">anfängt</span>) y con dos verbos el conjugado es el último (<span class="de">mitbringen muss</span>). Las frases principales suelen ser: <span class="de">Ich weiß nicht, …</span>, <span class="de">Weißt du, …?</span>, <span class="de">Ich möchte wissen, …</span>, <span class="de">Er fragt, …</span>.',
          table: {
            head: ['Pregunta directa', 'Pregunta indirecta'],
            rows: [
              ['Wann fängt der Kurs an?', 'Weißt du, wann der Kurs <b>anfängt</b>?'],
              ['Wo ist das Büro?', 'Ich weiß nicht, wo das Büro <b>ist</b>.'],
              ['Wie lange dauert das Visum?', 'Sie fragt, wie lange das Visum <b>dauert</b>.'],
              ['Wer ist zuständig?', 'Wissen Sie, wer zuständig <b>ist</b>?'],
              ['Was muss ich mitbringen?', 'Ich möchte wissen, was ich mitbringen <b>muss</b>.']
            ]
          },
          ex: [
            {de: 'Ich weiß nicht, wo ich das Formular abgeben kann.', es: 'No sé dónde puedo entregar el formulario.'},
            {de: 'Weißt du, wie lange das Büro heute geöffnet ist?', es: '¿Sabes hasta qué hora está abierta hoy la oficina?'},
            {de: 'Lena fragt, wann das Zeugnis fertig ist.', es: 'Lena pregunta cuándo estará listo el certificado.'},
            {de: 'Ich möchte wissen, was ich zum Termin mitbringen muss.', es: 'Quiero saber qué tengo que llevar a la cita.'},
            {de: 'Wissen Sie, wer für den Antrag zuständig ist?', es: '¿Sabe quién es el responsable de la solicitud?'}
          ],
          tip: 'En español la pregunta indirecta mantiene el orden (<i>no sé dónde está la oficina</i>); en alemán el verbo se va al final: <span class="de">wo das Büro ist</span>. Y no repitas el orden de la pregunta directa: <span class="de">Ich weiß nicht, wo ist das Büro</span> es incorrecto.'
        },
        {
          h: 'Preguntas indirectas con ob',
          p: 'Las preguntas de <b>sí o no</b> no tienen palabra interrogativa. Al hacerlas indirectas se introducen con <span class="de">ob</span> (<i>si</i>) y el verbo conjugado va también al final: <span class="de">Brauche ich ein Visum?</span> → <span class="de">Ich weiß nicht, ob ich ein Visum brauche.</span> Con Perfekt, el auxiliar conjugado va al final detrás del participio: <span class="de">ob er den Antrag abgegeben hat</span>. Con modal, igual: <span class="de">ob ich ein Foto mitbringen muss</span>. Cuidado con no confundir <span class="de">ob</span> (duda, <i>si</i>) con <span class="de">dass</span> (<i>que</i>): <span class="de">Ich weiß, dass du kommst</span> frente a <span class="de">Ich weiß nicht, ob du kommst</span>.',
          table: {
            head: ['Pregunta directa (sí/no)', 'Pregunta indirecta con ob'],
            rows: [
              ['Brauche ich ein Visum?', 'Ich weiß nicht, ob ich ein Visum <b>brauche</b>.'],
              ['Hat er den Antrag abgegeben?', 'Ich frage mich, ob er den Antrag abgegeben <b>hat</b>.'],
              ['Muss ich ein Foto mitbringen?', 'Können Sie mir sagen, ob ich ein Foto mitbringen <b>muss</b>?'],
              ['Ist das Büro am Samstag offen?', 'Wissen Sie, ob das Büro am Samstag offen <b>ist</b>?']
            ]
          },
          ex: [
            {de: 'Ich weiß nicht, ob ich einen Termin brauche.', es: 'No sé si necesito una cita.'},
            {de: 'Weißt du, ob der Pass noch gültig ist?', es: '¿Sabes si el pasaporte sigue siendo válido?'},
            {de: 'Murat fragt, ob wir ein Passfoto mitbringen müssen.', es: 'Murat pregunta si tenemos que llevar una foto de pasaporte.'},
            {de: 'Ich möchte wissen, ob Sie schon die Bewerbung geschickt haben.', es: 'Quiero saber si ya ha enviado la solicitud.'},
            {de: 'Frau Weber fragt, ob die Unterlagen vollständig sind.', es: 'La señora Weber pregunta si los documentos están completos.'}
          ],
          tip: 'Es la misma idea que el <i>si</i> español de duda (<i>no sé si vienes</i>). Pero no uses <span class="de">wenn</span> aquí: <span class="de">wenn</span> es <i>cuando / si (condición)</i>, y para una duda siempre se dice <span class="de">ob</span>.'
        },
        {
          h: 'Preguntar con cortesía',
          p: 'En una oficina, un consulado o una tienda suena más amable una pregunta indirecta que una directa. Las fórmulas más útiles son <span class="de">Könnten Sie mir sagen, …?</span> (<i>¿Podría decirme…?</i>), <span class="de">Wissen Sie, …?</span>, <span class="de">Können Sie mir bitte erklären, …?</span> y <span class="de">Ich möchte gern wissen, …</span>. <span class="de">Könnten</span> es el Konjunktiv II de <span class="de">können</span> y es más cortés que <span class="de">Können</span>. Con <span class="de">Entschuldigung</span> o <span class="de">Guten Tag</span> al principio, la frase es todavía mejor. Si la frase principal es una pregunta, todo termina con <b>?</b>; si es una afirmación (<span class="de">Ich weiß nicht, …</span>), termina con punto.',
          table: {
            head: ['Nivel', 'Frase'],
            rows: [
              ['Directa (informal)', 'Wo ist das Büro?'],
              ['Indirecta (neutral)', 'Wissen Sie, wo das Büro ist?'],
              ['Indirecta (muy cortés)', 'Könnten Sie mir sagen, wo das Büro ist?'],
              ['Con deseo de información', 'Ich möchte gern wissen, wann das Büro öffnet.']
            ]
          },
          ex: [
            {de: 'Entschuldigung, könnten Sie mir sagen, wo der Schalter ist?', es: 'Disculpe, ¿podría decirme dónde está la ventanilla?'},
            {de: 'Könnten Sie mir bitte sagen, wie lange die Bearbeitung dauert?', es: '¿Podría decirme cuánto tarda la tramitación?'},
            {de: 'Können Sie mir erklären, wie ich das Formular ausfüllen muss?', es: '¿Puede explicarme cómo tengo que rellenar el formulario?'},
            {de: 'Ich möchte gern wissen, ob ich mein Zeugnis in Kopie abgeben kann.', es: 'Quisiera saber si puedo entregar mi certificado en copia.'},
            {de: 'Wissen Sie vielleicht, wann das Amt am Freitag schließt?', es: '¿Sabe usted por casualidad cuándo cierra la oficina el viernes?'}
          ],
          tip: 'Para mayor cortesía añade <span class="de">bitte</span> y <span class="de">vielleicht</span> (por casualidad). Con personas que tuteas, usa <span class="de">Weißt du …?</span> / <span class="de">Kannst du mir sagen, …?</span>.'
        },
        {
          h: 'Expresar una decepción y reaccionar',
          p: 'Para decir que algo te ha decepcionado se usa <span class="de">Schade!</span>, <span class="de">Das ist aber schade.</span> o <span class="de">Ich bin enttäuscht, dass …</span> (con <span class="de">dass</span> y el verbo al final). También puedes explicar lo que esperabas: <span class="de">Ich hatte gehofft, dass …</span> o <span class="de">Ich hatte mich so auf … gefreut.</span> Si alguien está decepcionado, puedes mostrar comprensión con <span class="de">Das tut mir leid.</span>, <span class="de">Das ist wirklich schade.</span>, o consolar con <span class="de">Mach dir nichts draus!</span> y <span class="de">Vielleicht klappt es beim nächsten Mal.</span>',
          table: {
            head: ['Función', 'Frases'],
            rows: [
              ['Expresar decepción', 'Schade! / Das habe ich nicht erwartet. / Ich bin enttäuscht, dass …'],
              ['Explicar la expectativa', 'Ich hatte gehofft, dass … / Ich hatte mich so auf … gefreut.'],
              ['Mostrar comprensión', 'Das tut mir leid. / Das ist wirklich schade.'],
              ['Consolar', 'Mach dir nichts draus! / Vielleicht klappt es beim nächsten Mal.']
            ]
          },
          ex: [
            {de: 'Ich bin enttäuscht, dass mein Antrag abgelehnt wurde.', es: 'Estoy decepcionado de que hayan rechazado mi solicitud.'},
            {de: 'Ich hatte gehofft, dass das Visum schneller kommt.', es: 'Esperaba que el visado llegara más rápido.'},
            {de: 'Schade, dass der Termin schon vorbei ist.', es: 'Qué pena que la cita ya haya pasado.'},
            {de: 'Das tut mir leid. Mach dir nichts draus!', es: 'Lo siento. ¡No te preocupes!'},
            {de: 'Vielleicht klappt es beim nächsten Mal besser.', es: 'Quizá salga mejor la próxima vez.'}
          ],
          tip: 'Después de <span class="de">enttäuscht sein, dass …</span> el verbo va al final. Y <span class="de">Schade!</span> por sí solo ya es una reacción completa y natural en la conversación diaria.'
        }
      ],
      vocab: [
        {de: 'der Reisepass', pl: 'die Reisepässe', es: 'el pasaporte (kurz: der Pass)', ex: 'Ohne Reisepass darf ich nicht ins Ausland fliegen.', exes: 'Sin pasaporte no puedo volar al extranjero.'},
        {de: 'der Personalausweis', pl: 'die Personalausweise', es: 'el documento de identidad', ex: 'Bitte zeigen Sie Ihren Personalausweis.', exes: 'Por favor, muestre su documento de identidad.'},
        {de: 'das Visum', pl: 'die Visa', es: 'el visado', ex: 'Für Ghana brauche ich ein Visum.', exes: 'Para Ghana necesito un visado.'},
        {de: 'das Zeugnis', pl: 'die Zeugnisse', es: 'el certificado, las notas', ex: 'Das Zeugnis von der Schule muss ich als Kopie mitbringen.', exes: 'Tengo que llevar el certificado del colegio en copia.'},
        {de: 'der Lebenslauf', pl: 'die Lebensläufe', es: 'el currículum', ex: 'Mein Lebenslauf ist nur eine Seite lang.', exes: 'Mi currículum tiene solo una página.'},
        {de: 'die Bewerbung', pl: 'die Bewerbungen', es: 'la solicitud, la candidatura', ex: 'Ich schicke meine Bewerbung noch heute ab.', exes: 'Hoy mismo envío mi solicitud.'},
        {de: 'das Formular', pl: 'die Formulare', es: 'el formulario', ex: 'Das Formular gibt es im Internet und im Büro.', exes: 'El formulario está en internet y en la oficina.'},
        {de: 'der Antrag', pl: 'die Anträge', es: 'la solicitud (trámite)', ex: 'Den Antrag muss man vor dem ersten Mai abgeben.', exes: 'La solicitud hay que entregarla antes del uno de mayo.'},
        {de: 'die Bescheinigung', pl: 'die Bescheinigungen', es: 'el justificante', ex: 'Für die Schule brauche ich eine Bescheinigung vom Arzt.', exes: 'Para el colegio necesito un justificante del médico.'},
        {de: 'die Unterschrift', pl: 'die Unterschriften', es: 'la firma', ex: 'Ohne Unterschrift ist das Formular nicht gültig.', exes: 'Sin firma el formulario no es válido.'},
        {de: 'die Kopie', pl: 'die Kopien', es: 'la copia', ex: 'Bitte machen Sie eine Kopie von Ihrem Pass.', exes: 'Por favor, haga una copia de su pasaporte.'},
        {de: 'der Führerschein', pl: 'die Führerscheine', es: 'el carné de conducir', ex: 'Meinen Führerschein habe ich mit achtzehn gemacht.', exes: 'Saqué el carné de conducir a los dieciocho.'},
        {de: 'die Geburtsurkunde', pl: 'die Geburtsurkunden', es: 'el acta de nacimiento', ex: 'Zum Termin brauchen Sie die Geburtsurkunde.', exes: 'Para la cita necesita el acta de nacimiento.'},
        {de: 'der Freiwilligendienst', pl: 'die Freiwilligendienste', es: 'el servicio voluntario', ex: 'Nach der Schule mache ich einen Freiwilligendienst im Ausland.', exes: 'Después del colegio hago un servicio voluntario en el extranjero.'},
        {de: 'beantragen', es: 'solicitar (un trámite)', note: 'beantragt – beantragte – hat beantragt', ex: 'Ich möchte ein Visum beantragen.', exes: 'Quiero solicitar un visado.'},
        {de: 'aus|füllen', es: 'rellenar', note: 'füllt aus – füllte aus – hat ausgefüllt', ex: 'Bitte füllen Sie das Formular in Druckbuchstaben aus.', exes: 'Por favor, rellene el formulario con letra de imprenta.'},
        {de: 'unterschreiben', es: 'firmar', note: 'unterschreibt – unterschrieb – hat unterschrieben', ex: 'Hier unterschreiben Sie bitte.', exes: 'Firme aquí, por favor.'},
        {de: 'ab|geben', es: 'entregar', note: 'gibt ab – gab ab – hat abgegeben', ex: 'Die Unterlagen kann man im Zimmer 12 abgeben.', exes: 'Los documentos se pueden entregar en la sala 12.'},
        {de: 'sich bewerben', es: 'presentar una candidatura', note: 'bewirbt sich – bewarb sich – hat sich beworben', ex: 'Ich bewerbe mich bei einer Organisation für ein soziales Jahr.', exes: 'Me presento a una organización para un año social.'},
        {de: 'verlängern', es: 'prorrogar, renovar', note: 'verlängert – verlängerte – hat verlängert', ex: 'Mein Visum muss ich im Mai verlängern.', exes: 'Tengo que renovar mi visado en mayo.'}
      ],
      phrases: [
        {de: 'Könnten Sie mir sagen, wo das Büro ist?', es: '¿Podría decirme dónde está la oficina?', use: 'preguntar cortés'},
        {de: 'Wissen Sie, wie lange das dauert?', es: '¿Sabe cuánto tiempo tarda?', use: 'preguntar'},
        {de: 'Ich möchte gern wissen, ob ich ein Visum brauche.', es: 'Quisiera saber si necesito un visado.', use: 'preguntar'},
        {de: 'Ich weiß nicht, wann das Amt öffnet.', es: 'No sé cuándo abre la oficina.', use: 'no saber'},
        {de: 'Können Sie mir bitte erklären, was ich mitbringen muss?', es: '¿Puede explicarme qué tengo que traer?', use: 'pedir info'},
        {de: 'Wissen Sie vielleicht, ob ich einen Termin brauche?', es: '¿Sabe por casualidad si necesito una cita?', use: 'preguntar'},
        {de: 'Schade! Das habe ich nicht erwartet.', es: '¡Qué pena! No lo esperaba.', use: 'decepción'},
        {de: 'Ich bin enttäuscht, dass es so lange dauert.', es: 'Estoy decepcionado de que tarde tanto.', use: 'decepción'},
        {de: 'Das tut mir leid. Vielleicht klappt es beim nächsten Mal.', es: 'Lo siento. Quizá salga bien la próxima vez.', use: 'consolar'},
        {de: 'Mach dir nichts draus!', es: '¡No te preocupes por eso!', use: 'consolar'}
      ],
      dialog: {
        title: 'Im Büro für Freiwilligendienste',
        lines: [
          {s: 'A', de: 'Guten Tag, ich möchte ein Freiwilliges Soziales Jahr machen. Könnten Sie mir sagen, wie ich mich bewerbe?', es: 'Buenos días, quiero hacer un año social voluntario. ¿Podría decirme cómo me presento?'},
          {s: 'B', de: 'Gern. Zuerst brauchen wir Ihren Lebenslauf und eine Kopie von Ihrem Zeugnis.', es: 'Con gusto. Primero necesitamos su currículum y una copia de su certificado.'},
          {s: 'A', de: 'Wissen Sie, bis wann ich die Unterlagen abgeben muss?', es: '¿Sabe hasta cuándo tengo que entregar los documentos?'},
          {s: 'B', de: 'Bis zum fünfzehnten März. Wissen Sie schon, ob Sie ins Ausland möchten?', es: 'Hasta el quince de marzo. ¿Sabe ya si quiere ir al extranjero?'},
          {s: 'A', de: 'Ja, ich wäre gern ein Jahr in Ghana. Wissen Sie, ob ich dafür ein Visum brauche?', es: 'Sí, me gustaría pasar un año en Ghana. ¿Sabe si necesito un visado?'},
          {s: 'B', de: 'Ja, ein Visum ist nötig. Sie müssen es bei der Botschaft beantragen. Ich weiß aber nicht genau, wie lange das dauert.', es: 'Sí, hace falta un visado. Tiene que solicitarlo en la embajada. Pero no sé exactamente cuánto tarda.'},
          {s: 'A', de: 'Das ist schade. Ich hatte gehofft, dass es schneller geht.', es: 'Qué pena. Esperaba que fuera más rápido.'},
          {s: 'B', de: 'Das verstehe ich. Aber Sie können den Antrag schon jetzt stellen. Hier ist das Formular.', es: 'Lo entiendo. Pero puede presentar la solicitud ya. Aquí está el formulario.'},
          {s: 'A', de: 'Danke! Könnten Sie mir noch sagen, wo ich das Formular abgeben kann?', es: '¡Gracias! ¿Podría decirme además dónde puedo entregar el formulario?'},
          {s: 'B', de: 'Natürlich. Im Zimmer 12, gleich links neben der Treppe. Vergessen Sie die Unterschrift nicht!', es: 'Claro. En la sala 12, justo a la izquierda junto a la escalera. ¡No olvide la firma!'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Ich möchte wissen, ___ ich ein Visum brauche. (Pregunta original: ¿Necesito un visado? → sí/no)', o: ['ob', 'wann', 'wer'], a: 0, why: 'Una pregunta de sí/no se hace indirecta con ob.'},
        {t: 'mc', q: 'Kannst du mir sagen, ___ der Bus abfährt? (Pregunta original: ¿Cuándo sale el autobús?)', o: ['ob', 'wann', 'wer'], a: 1, why: 'La palabra interrogativa original (wann) se mantiene en la indirecta.'},
        {t: 'mc', q: 'Ich weiß nicht, wann der Kurs ___.', o: ['anfängt', 'fängt an', 'fängt der an'], a: 0, why: 'En la subordinada el verbo separable se junta y va al final: anfängt.'},
        {t: 'mc', q: 'Könnten Sie mir sagen, wie lange die Bearbeitung ___?', o: ['dauert', 'dauern', 'dauert sie'], a: 0, why: 'El sujeto es singular (die Bearbeitung) y el verbo va al final: dauert.'},
        {t: 'mc', q: 'Ich weiß nicht, ob er den Antrag schon abgegeben ___.', o: ['haben', 'hat', 'hat er'], a: 1, why: 'En Perfekt el auxiliar conjugado (hat) va al final, detrás del participio.'},
        {t: 'mc', q: 'Deine Freundin hat die Prüfung nicht bestanden und ist enttäuscht. Was sagst du?', o: ['Das tut mir leid. Vielleicht klappt es beim nächsten Mal.', 'Super, herzlichen Glückwunsch!', 'Ich weiß nicht, ob du Zeit hast.'], a: 0, why: 'Para consolar se muestra comprensión y se da ánimo.'},
        {t: 'gap', q: 'Wissen Sie, ___ ich das Formular abgeben kann? (¿dónde?)', a: ['wo'], why: 'Dónde se dice wo; el verbo kann va al final.'},
        {t: 'gap', q: 'Ich möchte wissen, ___ ich ein Passfoto mitbringen muss. (pregunta de sí/no)', a: ['ob'], why: 'Pregunta de sí/no → ob.'},
        {t: 'gap', q: 'Ich weiß nicht, ___ für den Antrag zuständig ist. (¿quién?)', a: ['wer'], why: 'Para preguntar por una persona se usa wer.'},
        {t: 'gap', q: 'Sie fragt, wie lange das Visum gültig ___. (sein)', a: ['ist'], why: 'El verbo conjugado va al final de la pregunta indirecta: gültig ist.'},
        {t: 'order', es: '¿Podría decirme dónde está la oficina?', de: 'Könnten Sie mir sagen, wo das Büro ist?', why: 'Könnten Sie mir sagen + coma; en la subordinada con wo el verbo ist va al final.'},
        {t: 'order', es: 'No sé si necesito una cita.', de: 'Ich weiß nicht, ob ich einen Termin brauche.', why: 'ob introduce la pregunta de sí/no y brauche va al final.'},
        {t: 'order', es: 'Él pregunta si ya has rellenado el formulario.', de: 'Er fragt, ob du das Formular schon ausgefüllt hast.', why: 'Con Perfekt, el participio va antes del auxiliar conjugado, que cierra la frase.'},
        {t: 'tr', es: '¿Sabes cuándo empieza el curso?', de: ['Weißt du, wann der Kurs anfängt?', 'Weißt du, wann der Kurs beginnt?'], why: 'Pregunta indirecta con wann; el verbo va al final.'},
        {t: 'tr', es: 'No sé si necesito un visado.', de: ['Ich weiß nicht, ob ich ein Visum brauche.', 'Ich weiß nicht, ob ich ein Visum benötige.'], why: 'Duda sí/no: ob + verbo al final.'},
        {t: 'fix', q: 'Ich weiß nicht, wo ist das Amt.', a: ['Ich weiß nicht, wo das Amt ist.'], why: 'En la pregunta indirecta el verbo conjugado va al final.'},
        {t: 'fix', q: 'Ich möchte wissen, ob brauche ich ein Visum.', a: ['Ich möchte wissen, ob ich ein Visum brauche.'], why: 'Después de ob el verbo conjugado va al final.'},
        {t: 'match', pairs: [['das Visum', 'el visado'], ['das Zeugnis', 'el certificado'], ['der Lebenslauf', 'el currículum'], ['die Unterschrift', 'la firma'], ['beantragen', 'solicitar'], ['aus|füllen', 'rellenar']]}
      ],
      speak: [
        {prompt: 'Estás en una oficina de trámites. Haz 4 preguntas corteses con Könnten Sie mir sagen, … / Wissen Sie, … (sobre horario, documentos y duración).', model: 'Guten Tag! Könnten Sie mir sagen, wo ich das Formular bekomme? Wissen Sie, wie lange die Bearbeitung dauert? Könnten Sie mir sagen, ob ich eine Kopie von meinem Pass mitbringen muss? Und wissen Sie, wann das Büro am Freitag schließt?'},
        {prompt: 'Cuenta algo que te decepcionó (un viaje, un examen, un trámite) en 4-5 frases. Usa Ich bin enttäuscht, dass … e Ich hatte gehofft, dass …', model: 'Ich hatte gehofft, dass mein Visum schnell kommt. Ich bin enttäuscht, dass ich noch immer warte. Ich hatte mich so auf die Reise gefreut. Mein Freund sagt: Mach dir nichts draus! Vielleicht klappt es im Herbst.'},
        {prompt: 'Para uso real: escribe un breve correo (4-5 frases) a una organización de voluntariado preguntando por requisitos, plazo y visado.', model: 'Guten Tag, ich möchte gern wissen, welche Unterlagen ich für die Bewerbung brauche. Könnten Sie mir bitte sagen, bis wann ich sie abgeben muss? Ich möchte außerdem wissen, ob ich für das Land ein Visum beantragen muss. Vielen Dank für Ihre Hilfe! Mit freundlichen Grüßen, Anna Weber'}
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m5',
  level: 'A2',
  num: 5,
  title: 'Casa, mesa y trabajo',
  emoji: '🏠',
  lessons: [
    {
      id: 'a2-13',
      title: 'Zu Gast bei Freunden',
      es: 'Invitaciones privadas',
      goals: ['Usar verbos con dos complementos (Dativ y Akkusativ): geben, schenken, zeigen...', 'Colocar bien el Dativ y el Akkusativ en la oración', 'Dar la bienvenida, conversar en la mesa y despedirte', 'Hablar de especias, vajilla y sabores'],
      grammar: [
        {
          h: 'Verbos con Dativ y Akkusativ',
          p: 'Muchos verbos de dar, mostrar o comunicar llevan <b>dos complementos</b>: una persona en <b>Dativ</b> (a quién) y una cosa en <b>Akkusativ</b> (qué). Son verbos como <span class="de">geben, schenken, zeigen, empfehlen, bringen, schicken, erklären, leihen, kaufen</span>. En español también hay dos complementos: &quot;le doy el libro a Tim&quot;. Pregunta: <i>Wem?</i> (a quién) → Dativ; <i>Was?</i> → Akkusativ.',
          table: { head: ['Caso', 'der (m)', 'die (f)', 'das (n)', 'die (pl)'], rows: [['Akkusativ (¿qué?)', 'den Kuchen', 'die Suppe', 'das Brot', 'die Gläser'], ['Dativ (¿a quién?)', 'dem Gast', 'der Freundin', 'dem Kind', 'den Gästen']] },
          ex: [
            { de: 'Ich schenke meiner Freundin einen Kuchen.', es: 'Le regalo un pastel a mi amiga.' },
            { de: 'Murat zeigt den Gästen die Wohnung.', es: 'Murat les enseña el piso a los invitados.' },
            { de: 'Wir bringen unserer Gastgeberin Blumen mit.', es: 'Le llevamos flores a nuestra anfitriona.' },
            { de: 'Die Kellnerin empfiehlt uns den Fisch.', es: 'La camarera nos recomienda el pescado.' },
            { de: 'Kannst du mir das Salz geben?', es: '¿Me puedes pasar la sal?' }
          ],
          tip: 'En alemán no hay &quot;a&quot; delante de la persona: el Dativ se reconoce por el artículo (dem, der, den + -n). No digas nunca &quot;an den Mann&quot; para esto.'
        },
        {
          h: 'Pronombres personales en Dativ y Akkusativ',
          p: 'Cuando en vez de un sustantivo usas un pronombre, cambian las formas. Memoriza las dos columnas: son las mismas que usarás después con muchos otros verbos. Observa que <b>uns</b> y <b>euch</b> son iguales en Akkusativ y Dativ.',
          table: { head: ['Nominativ', 'Akkusativ', 'Dativ'], rows: [['ich', 'mich', '<b>mir</b>'], ['du', 'dich', '<b>dir</b>'], ['er', 'ihn', '<b>ihm</b>'], ['sie', 'sie', '<b>ihr</b>'], ['es', 'es', '<b>ihm</b>'], ['wir', 'uns', '<b>uns</b>'], ['ihr', 'euch', '<b>euch</b>'], ['sie / Sie', 'sie / Sie', '<b>ihnen / Ihnen</b>']] },
          ex: [
            { de: 'Ich schicke dir morgen die Fotos.', es: 'Mañana te mando las fotos.' },
            { de: 'Er zeigt uns sein neues Haus.', es: 'Nos enseña su casa nueva.' },
            { de: 'Wir schenken ihr ein Buch.', es: 'Le regalamos un libro.' },
            { de: 'Möchten Sie Kaffee? Ich bringe Ihnen eine Tasse.', es: '¿Quiere café? Le traigo una taza.' },
            { de: 'Ich erkläre euch das Rezept.', es: 'Os explico la receta.' }
          ],
          tip: 'Ojo: <b>ihm</b> sirve para &quot;él&quot; y para &quot;ello&quot; (<i>das Kind, das Buch</i>); <b>ihr</b> es &quot;ella&quot;; <b>ihnen</b> es &quot;ellos/ellas&quot;. En español todo eso es &quot;le/les&quot;.'
        },
        {
          h: 'Posición de Dativ y Akkusativ',
          p: 'Hay tres reglas simples. <b>1)</b> Sustantivo + sustantivo: normalmente primero el Dativ y luego el Akkusativ. <b>2)</b> Si uno es pronombre, el pronombre va primero (sea Dativ o Akkusativ). <b>3)</b> Si los dos son pronombres, primero el <b>Akkusativ</b> y después el <b>Dativ</b>. Por eso &quot;Ich gebe ihm es&quot; es incorrecto. En subordinadas el orden es el mismo, pero antes del verbo final.',
          table: { head: ['Caso', 'Ejemplo'], rows: [['Dativ-sust. + Akk-sust.', 'Ich gebe <b>dem Mann das Buch</b>.'], ['Dativ-pron. + Akk-sust.', 'Ich gebe <b>ihm das Buch</b>.'], ['Dativ-sust. + Akk-pron.', 'Ich gebe <b>es dem Mann</b>.'], ['Akk-pron. + Dativ-pron.', 'Ich gebe <b>es ihm</b>.']] },
          ex: [
            { de: 'Ich gebe dem Mann das Buch.', es: 'Le doy el libro al hombre.' },
            { de: 'Ich gebe ihm das Buch.', es: 'Le doy el libro.' },
            { de: 'Ich gebe es dem Mann.', es: 'Se lo doy al hombre.' },
            { de: 'Ich gebe es ihm.', es: 'Se lo doy.' },
            { de: 'Sie sagt, dass sie es dir morgen schickt.', es: 'Dice que te lo manda mañana.' }
          ],
          tip: 'En español el orden es fijo (&quot;se lo doy&quot;: Dativ + Akkusativ). En alemán es al revés con dos pronombres: <b>es ihm</b>, <b>sie dir</b>, <b>ihn uns</b>.'
        }
      ],
      vocab: [
        { de: 'das Gewürz', pl: 'die Gewürze', es: 'la especia', ex: 'Meine Mutter hat viele Gewürze in der Küche.', exes: 'Mi madre tiene muchas especias en la cocina.' },
        { de: 'der Pfeffer', es: 'la pimienta', ex: 'Kannst du mir bitte den Pfeffer reichen?', exes: '¿Me pasas la pimienta, por favor?' },
        { de: 'der Zimt', es: 'la canela', ex: 'Im Apfelkuchen ist ein bisschen Zimt.', exes: 'El pastel de manzana lleva un poco de canela.' },
        { de: 'der Löffel', pl: 'die Löffel', es: 'la cuchara', ex: 'Für die Suppe brauchst du einen Löffel.', exes: 'Para la sopa necesitas una cuchara.' },
        { de: 'die Gabel', pl: 'die Gabeln', es: 'el tenedor', ex: 'Die Gabel liegt links neben dem Teller.', exes: 'El tenedor está a la izquierda del plato.' },
        { de: 'das Messer', pl: 'die Messer', es: 'el cuchillo', ex: 'Das Messer ist sehr scharf.', exes: 'El cuchillo está muy afilado.' },
        { de: 'der Teller', pl: 'die Teller', es: 'el plato', ex: 'Darf ich dir noch etwas auf den Teller legen?', exes: '¿Te sirvo algo más en el plato?' },
        { de: 'das Glas', pl: 'die Gläser', es: 'el vaso / la copa', ex: 'Wir haben sechs Gläser für die Gäste.', exes: 'Tenemos seis vasos para los invitados.' },
        { de: 'die Schüssel', pl: 'die Schüsseln', es: 'el cuenco', ex: 'Der Salat ist in der großen Schüssel.', exes: 'La ensalada está en el cuenco grande.' },
        { de: 'die Serviette', pl: 'die Servietten', es: 'la servilleta', ex: 'Ich lege für jeden eine Serviette auf den Tisch.', exes: 'Pongo una servilleta para cada uno en la mesa.' },
        { de: 'der Gastgeber', pl: 'die Gastgeber', es: 'el anfitrión', ex: 'Der Gastgeber begrüßt jeden Gast an der Tür.', exes: 'El anfitrión saluda a cada invitado en la puerta.' },
        { de: 'der Nachtisch', es: 'el postre', ex: 'Zum Nachtisch gibt es Eis mit Zimt.', exes: 'De postre hay helado con canela.' },
        { de: 'scharf', es: 'picante', ex: 'Die Soße ist mir zu scharf.', exes: 'La salsa me resulta demasiado picante.' },
        { de: 'süß', es: 'dulce', ex: 'Der Kuchen ist nicht zu süß.', exes: 'El pastel no es demasiado dulce.' },
        { de: 'sauer', es: 'ácido / agrio', ex: 'Die Zitrone schmeckt sehr sauer.', exes: 'El limón sabe muy ácido.' },
        { de: 'salzig', es: 'salado', ex: 'Die Suppe ist ein bisschen zu salzig.', exes: 'La sopa está un poco salada.' },
        { de: 'würzig', es: 'sazonado / con mucho sabor', ex: 'Ich mag würziges Essen.', exes: 'Me gusta la comida con mucho sabor.' },
        { de: 'schenken', es: 'regalar', ex: 'Zum Geburtstag schenke ich meinem Bruder ein Buch.', exes: 'Por su cumpleaños le regalo un libro a mi hermano.' },
        { de: 'empfehlen', es: 'recomendar', note: 'empfiehlt – empfahl – hat empfohlen', ex: 'Ich empfehle dir die Linsensuppe.', exes: 'Te recomiendo la sopa de lentejas.' },
        { de: 'mit|bringen', es: 'traer (consigo)', note: 'bringt mit – brachte mit – hat mitgebracht', ex: 'Was soll ich zur Party mitbringen?', exes: '¿Qué debo llevar a la fiesta?' },
        { de: 'reichen', es: 'pasar / alcanzar (algo a alguien)', ex: 'Reichst du mir bitte die Serviette?', exes: '¿Me pasas la servilleta, por favor?' }
      ],
      phrases: [
        { de: 'Schön, dass ihr da seid!', es: '¡Qué bien que hayáis venido!', use: 'dar la bienvenida' },
        { de: 'Kommt doch herein und fühlt euch wie zu Hause.', es: 'Pasad y sentíos como en casa.', use: 'bienvenida' },
        { de: 'Greift bitte zu!', es: '¡Servíos, por favor!', use: 'invitar a comer' },
        { de: 'Das schmeckt wirklich wunderbar!', es: '¡Esto sabe realmente delicioso!', use: 'elogiar' },
        { de: 'Kannst du mir bitte das Salz reichen?', es: '¿Me pasas la sal, por favor?', use: 'pedir algo' },
        { de: 'Möchtest du noch etwas? – Nein danke, ich bin satt.', es: '¿Quieres algo más? – No gracias, estoy lleno.', use: 'rechazar' },
        { de: 'Erzähl doch mal, wie war dein Urlaub?', es: 'Cuéntame, ¿cómo fueron tus vacaciones?', use: 'conversar' },
        { de: 'Vielen Dank für die Einladung!', es: '¡Muchas gracias por la invitación!', use: 'agradecer' },
        { de: 'Es war ein sehr schöner Abend.', es: 'Fue una velada muy agradable.', use: 'despedirse' },
        { de: 'Kommt gut nach Hause!', es: '¡Que lleguéis bien a casa!', use: 'despedirse' }
      ],
      dialog: {
        title: 'Zum Abendessen bei Lena',
        lines: [
          { s: 'A', de: 'Hallo Murat, schön, dass du da bist! Komm doch herein.', es: 'Hola Murat, ¡qué bien que hayas venido! Pasa.' },
          { s: 'B', de: 'Danke für die Einladung! Hier, ich schenke dir diese Blumen.', es: '¡Gracias por la invitación! Toma, te regalo estas flores.' },
          { s: 'A', de: 'Wie schön! Ich stelle sie gleich ins Wasser. Möchtest du etwas trinken?', es: '¡Qué bonitas! Las pongo enseguida en agua. ¿Quieres beber algo?' },
          { s: 'B', de: 'Gern ein Glas Wasser. Das Essen riecht wunderbar!', es: 'Con gusto un vaso de agua. ¡La comida huele de maravilla!' },
          { s: 'A', de: 'Ich habe Reis mit Knoblauch und Zimt gekocht. Greif bitte zu!', es: 'He cocinado arroz con ajo y canela. ¡Sírvete, por favor!' },
          { s: 'B', de: 'Mmh, das schmeckt toll, aber ein bisschen scharf. Kannst du mir das Wasser reichen?', es: 'Mmh, está riquísimo, pero un poco picante. ¿Me pasas el agua?' },
          { s: 'A', de: 'Natürlich, hier. Ich schicke dir morgen das Rezept, wenn du möchtest.', es: 'Claro, aquí tienes. Mañana te mando la receta, si quieres.' },
          { s: 'B', de: 'Sehr gern! Und ich zeige dir dann mein Rezept für den Nachtisch.', es: '¡Con mucho gusto! Y entonces yo te enseño mi receta del postre.' },
          { s: 'A', de: 'Das wäre super. Ich gebe es dir auch gern an meine Mutter weiter.', es: 'Sería genial. También se la paso con gusto a mi madre.' },
          { s: 'B', de: 'Es war ein schöner Abend, aber jetzt muss ich leider gehen. Vielen Dank für alles!', es: 'Ha sido una velada agradable, pero ahora tengo que irme, por desgracia. ¡Gracias por todo!' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich schenke ___ Schwester ein Buch.', o: ['meiner', 'meine', 'meinen'], a: 0, why: 'Schwester es femenino y va en Dativ (a quién): meiner Schwester.' },
        { t: 'mc', q: 'Sie zeigt ___ die neue Wohnung.', o: ['wir', 'unser', 'uns'], a: 2, why: 'La persona a quien se le muestra va en Dativ: uns.' },
        { t: 'mc', q: 'Ich gebe ___ dem Kind. (das Buch)', o: ['ihm', 'es', 'das'], a: 1, why: 'Akkusativ en pronombre (es) va antes del Dativ en sustantivo (dem Kind).' },
        { t: 'mc', q: 'Ich gebe ___ das Buch. (dem Mann)', o: ['er', 'ihn', 'ihm'], a: 2, why: 'dem Mann es Dativ; el pronombre correspondiente es ihm.' },
        { t: 'mc', q: 'Kannst du mir bitte das Salz ___?', o: ['reichst', 'gereicht', 'reichen'], a: 2, why: 'Con kannst el verbo principal va en infinitivo al final: reichen.' },
        { t: 'gap', q: 'Ich schicke ___ morgen eine Einladung. (du)', a: ['dir'], why: 'La persona que recibe la invitación va en Dativ: dir.' },
        { t: 'gap', q: 'Das Buch? Ich gebe ___ dir morgen. (das Buch)', a: ['es'], why: 'das Buch = es (Akkusativ), y va antes del Dativ dir.' },
        { t: 'gap', q: 'Der Wein ist toll! Ich empfehle ___ euch. (der Wein)', a: ['ihn'], why: 'der Wein en Akkusativ masculino = ihn, antes de euch.' },
        { t: 'gap', q: 'Möchten Sie Tee? Ich bringe ___ gern eine Tasse. (Sie)', a: ['ihnen'], why: 'Dativ de la forma de cortesía Sie: Ihnen.' },
        { t: 'order', es: 'Ella dice que él se lo trae.', de: 'Sie sagt, dass er es ihr bringt.', why: 'En la subordinada con dass el verbo va al final; con dos pronombres, primero Akkusativ (es) y luego Dativ (ihr).' },
        { t: 'order', es: 'Dice que nos enseña las fotos.', de: 'Er sagt, dass er uns die Fotos zeigt.', why: 'Pronombre (uns) antes del sustantivo (die Fotos); verbo al final por dass.' },
        { t: 'order', es: '¿Cuándo me lo mandas?', de: 'Wann schickst du es mir?', why: 'Con dos pronombres: Akkusativ (es) antes de Dativ (mir).' },
        { t: 'tr', es: 'Le regalo flores a mi madre.', de: ['Ich schenke meiner Mutter Blumen.', 'Ich schenke meiner Mutter einen Blumenstrauß.'], why: '' },
        { t: 'tr', es: 'Te lo doy mañana.', de: ['Ich gebe es dir morgen.', 'Morgen gebe ich es dir.'], why: '' },
        { t: 'fix', q: 'Ich gebe ihm es.', a: ['Ich gebe es ihm.'], why: 'Con dos pronombres va primero el Akkusativ (es) y después el Dativ (ihm).' },
        { t: 'fix', q: 'Ich schicke meine Freundin eine Karte.', a: ['Ich schicke meiner Freundin eine Karte.'], why: 'La persona va en Dativ: meiner Freundin.' },
        { t: 'match', pairs: [['der Löffel', 'la cuchara'], ['die Gabel', 'el tenedor'], ['das Messer', 'el cuchillo'], ['der Teller', 'el plato'], ['die Serviette', 'la servilleta'], ['scharf', 'picante']] }
      ],
      speak: [
        { prompt: 'Imagina que invitas a un amigo a cenar. Salúdalo en la puerta, ofrécele algo de beber y recomiéndale un plato (4-5 frases). Usa verbos con Dativ y Akkusativ.', model: 'Hallo Tim, schön, dass du da bist! Komm herein und fühl dich wie zu Hause. Ich bringe dir gleich ein Glas Wasser. Ich empfehle dir die Suppe, sie ist würzig, aber nicht zu scharf. Greif bitte zu!' },
        { prompt: 'Cuenta qué regalas a tres personas de tu familia (3 frases, usa Dativ + Akkusativ con sustantivos y después cámbialo con un pronombre).', model: 'Ich schenke meiner Mutter ein Buch. Meinem Bruder schenke ich eine Tasse. Das Buch? Ich gebe es ihr am Samstag. Die Tasse schicke ich ihm per Post.' },
        { prompt: 'Para usar en voz alta: despídete de tu anfitrión tras una cena, agradeciendo y elogiando la comida (3-4 frases).', model: 'Vielen Dank für die Einladung! Das Essen war wirklich wunderbar, besonders der Nachtisch. Es war ein sehr schöner Abend. Kommt bald zu uns, dann koche ich euch auch etwas.' }
      ]
    },
    {
      id: 'a2-14',
      title: 'Ein gemütliches Zuhause',
      es: 'Vivienda',
      goals: ['Declinar el adjetivo después de der, die, das, die', 'Describir dónde está o adónde va algo en la casa', 'Ofrecer, aceptar y rechazar ayuda', 'Nombrar partes de la casa y muebles'],
      grammar: [
        {
          h: 'Adjetivo tras artículo definido: la tabla',
          p: 'Cuando el adjetivo va <b>entre el artículo (der/die/das) y el sustantivo</b>, recibe una terminación. La regla es corta: en Nominativ singular y en Akkusativ femenino y neutro la terminación es <b>-e</b>; en <b>todos los demás casos es -en</b>. El artículo ya muestra el caso, por eso el adjetivo solo necesita una terminación débil.',
          table: { head: ['Caso', 'm', 'f', 'n', 'pl'], rows: [['Nominativ', 'der neu<b>e</b> Tisch', 'die neu<b>e</b> Lampe', 'das neu<b>e</b> Sofa', 'die neu<b>en</b> Stühle'], ['Akkusativ', 'den neu<b>en</b> Tisch', 'die neu<b>e</b> Lampe', 'das neu<b>e</b> Sofa', 'die neu<b>en</b> Stühle'], ['Dativ', 'dem neu<b>en</b> Tisch', 'der neu<b>en</b> Lampe', 'dem neu<b>en</b> Sofa', 'den neu<b>en</b> Stühlen']] },
          ex: [
            { de: 'Der alte Keller ist sehr kühl.', es: 'El sótano viejo está muy fresco.' },
            { de: 'Ich mag die große Terrasse.', es: 'Me gusta la terraza grande.' },
            { de: 'Wir wohnen in dem kleinen Haus am Park.', es: 'Vivimos en la casita junto al parque.' },
            { de: 'Die hellen Zimmer gefallen mir.', es: 'Me gustan las habitaciones luminosas.' },
            { de: 'Ich helfe der netten Nachbarin.', es: 'Ayudo a la vecina simpática.' }
          ],
          tip: 'Truco para recordar: busca los cuatro huecos de -e (Nom. m/f/n/pl no, solo Nom. m/f/n + Akk. f/n). Todo lo demás es <b>-en</b>. Los plurales siempre -en.'
        },
        {
          h: 'Describir una posición: ¿dónde? y ¿adónde?',
          p: 'Para decir <b>dónde</b> está algo (<i>Wo?</i>) se usan los verbos de posición <span class="de">stehen, liegen, hängen, sitzen</span> con preposición + <b>Dativ</b>. Para decir <b>adónde</b> lo llevas (<i>Wohin?</i>) se usan <span class="de">stellen, legen, hängen, setzen</span> con <b>Akkusativ</b>. Las preposiciones son <span class="de">an, auf, in, über, unter, vor, hinter, neben, zwischen</span>. Los adjetivos siguen la tabla anterior.',
          table: { head: ['Wo? (Dativ)', 'Wohin? (Akkusativ)'], rows: [['stehen', 'stellen'], ['liegen', 'legen'], ['hängen (hing)', 'hängen (hängte)'], ['sitzen', 'setzen']] },
          ex: [
            { de: 'Die Lampe hängt über dem runden Tisch.', es: 'La lámpara cuelga sobre la mesa redonda.' },
            { de: 'Ich hänge die Lampe über den runden Tisch.', es: 'Cuelgo la lámpara sobre la mesa redonda.' },
            { de: 'Der Koffer steht im dunklen Keller.', es: 'La maleta está en el sótano oscuro.' },
            { de: 'Ich stelle den Koffer in den dunklen Keller.', es: 'Pongo la maleta (de pie) en el sótano oscuro.' },
            { de: 'Das Buch liegt auf dem kleinen Regal.', es: 'El libro está en la estantería pequeña.' }
          ],
          tip: 'Pregunta siempre <b>Wo?</b> o <b>Wohin?</b>. Si hay movimiento (<i>stellen, legen</i>) usa Akkusativ; si solo hay posición (<i>stehen, liegen</i>) usa Dativ. Ojo: <i>im</i> = in dem, <i>ins</i> = in das.'
        },
        {
          h: 'Ofrecer, aceptar y rechazar ayuda',
          p: 'Para ofrecer ayuda se usan preguntas con <span class="de">Soll ich ...?</span>, <span class="de">Kann ich ... helfen?</span> o <span class="de">Brauchst du Hilfe?</span> Para aceptar: <span class="de">Ja, gern!</span> / <span class="de">Das wäre nett.</span> Para rechazar con educación: <span class="de">Nein danke, das schaffe ich allein.</span> La ayuda a una persona usa <b>helfen + Dativ</b>: <i>Ich helfe dir.</i>',
          ex: [
            { de: 'Soll ich dir mit den schweren Kisten helfen?', es: '¿Te ayudo con las cajas pesadas?' },
            { de: 'Ja, gern, das wäre sehr nett von dir.', es: 'Sí, con gusto, sería muy amable de tu parte.' },
            { de: 'Nein danke, das schaffe ich allein.', es: 'No, gracias, yo solo puedo.' },
            { de: 'Brauchst du Hilfe beim Umzug?', es: '¿Necesitas ayuda con la mudanza?' },
            { de: 'Kannst du mir bitte helfen?', es: '¿Me puedes ayudar, por favor?' }
          ],
          tip: 'En español &quot;ayudar a alguien&quot; lleva a + persona; en alemán <i>helfen</i> pide <b>Dativ</b> directo: <i>Ich helfe meiner Schwester</i>, nunca &quot;an&quot; ni Akkusativ.'
        }
      ],
      vocab: [
        { de: 'das Haus', pl: 'die Häuser', es: 'la casa', ex: 'Unser Haus hat einen großen Garten.', exes: 'Nuestra casa tiene un jardín grande.' },
        { de: 'die Treppe', pl: 'die Treppen', es: 'la escalera', ex: 'Die Treppe zum Keller ist sehr steil.', exes: 'La escalera al sótano es muy empinada.' },
        { de: 'der Garten', pl: 'die Gärten', es: 'el jardín', ex: 'Im Sommer essen wir im Garten.', exes: 'En verano comemos en el jardín.' },
        { de: 'der Keller', pl: 'die Keller', es: 'el sótano', ex: 'Im Keller steht unser altes Fahrrad.', exes: 'En el sótano está nuestra bicicleta vieja.' },
        { de: 'der Balkon', pl: 'die Balkone', es: 'el balcón', ex: 'Auf dem Balkon wachsen kleine Tomaten.', exes: 'En el balcón crecen tomates pequeños.' },
        { de: 'der Flur', pl: 'die Flure', es: 'el pasillo / recibidor', ex: 'Im Flur hängt ein großer Spiegel.', exes: 'En el recibidor cuelga un espejo grande.' },
        { de: 'das Erdgeschoss', es: 'la planta baja', ex: 'Wir wohnen im Erdgeschoss.', exes: 'Vivimos en la planta baja.' },
        { de: 'der Aufzug', pl: 'die Aufzüge', es: 'el ascensor', ex: 'Der Aufzug ist leider kaputt.', exes: 'El ascensor está roto, por desgracia.' },
        { de: 'das Regal', pl: 'die Regale', es: 'la estantería', ex: 'Die Bücher stehen im Regal.', exes: 'Los libros están en la estantería.' },
        { de: 'der Schrank', pl: 'die Schränke', es: 'el armario', ex: 'Meine Jacken hängen im Schrank.', exes: 'Mis chaquetas están colgadas en el armario.' },
        { de: 'der Teppich', pl: 'die Teppiche', es: 'la alfombra', ex: 'Der Teppich im Wohnzimmer ist weich.', exes: 'La alfombra del salón es suave.' },
        { de: 'die Miete', pl: 'die Mieten', es: 'el alquiler', ex: 'Die Miete ist hier nicht teuer.', exes: 'Aquí el alquiler no es caro.' },
        { de: 'der Umzug', pl: 'die Umzüge', es: 'la mudanza', ex: 'Nach dem Umzug sind wir sehr müde.', exes: 'Después de la mudanza estamos muy cansados.' },
        { de: 'gemütlich', es: 'acogedor', ex: 'Das Wohnzimmer ist klein, aber gemütlich.', exes: 'El salón es pequeño pero acogedor.' },
        { de: 'hell', es: 'luminoso / claro', ex: 'Die Küche ist hell und freundlich.', exes: 'La cocina es luminosa y agradable.' },
        { de: 'stellen', es: 'poner (de pie)', ex: 'Ich stelle die Vase auf den Tisch.', exes: 'Pongo el jarrón sobre la mesa.' },
        { de: 'legen', es: 'poner (tumbado)', ex: 'Sie legt die Zeitung auf das Sofa.', exes: 'Ella pone el periódico sobre el sofá.' },
        { de: 'hängen', es: 'colgar / estar colgado', note: 'hängt – hing – hat gehangen (estar); hängt – hängte – hat gehängt (colgar algo)', ex: 'Das Bild hängt an der Wand.', exes: 'El cuadro cuelga de la pared.' },
        { de: 'tragen', es: 'llevar / cargar', note: 'trägt – trug – hat getragen', ex: 'Er trägt die Kisten in den Keller.', exes: 'Él lleva las cajas al sótano.' },
        { de: 'ein|ziehen', es: 'mudarse (entrar a vivir)', note: 'zieht ein – zog ein – ist eingezogen', ex: 'Nächste Woche ziehen wir in die neue Wohnung ein.', exes: 'La semana que viene nos mudamos al piso nuevo.' }
      ],
      phrases: [
        { de: 'Kann ich dir helfen?', es: '¿Puedo ayudarte?', use: 'ofrecer ayuda' },
        { de: 'Soll ich dir die Tasche tragen?', es: '¿Te llevo el bolso?', use: 'ofrecer ayuda' },
        { de: 'Brauchst du Hilfe?', es: '¿Necesitas ayuda?', use: 'ofrecer ayuda' },
        { de: 'Ja gern, das wäre toll!', es: 'Sí, con gusto, ¡sería genial!', use: 'aceptar' },
        { de: 'Das ist sehr nett von dir.', es: 'Es muy amable de tu parte.', use: 'agradecer' },
        { de: 'Nein danke, das schaffe ich allein.', es: 'No gracias, yo solo puedo.', use: 'rechazar' },
        { de: 'Ich komme schon zurecht.', es: 'Me las arreglo.', use: 'rechazar' },
        { de: 'Wo steht das Sofa? – Neben dem Fenster.', es: '¿Dónde está el sofá? – Junto a la ventana.', use: 'posición' },
        { de: 'Der Schlüssel liegt auf dem kleinen Tisch.', es: 'La llave está en la mesita.', use: 'posición' },
        { de: 'Wir haben eine helle Wohnung mit großem Balkon.', es: 'Tenemos un piso luminoso con un balcón grande.', use: 'describir' }
      ],
      dialog: {
        title: 'Der Umzug',
        lines: [
          { s: 'A', de: 'Hallo Anna, wie sieht deine neue Wohnung aus?', es: 'Hola Anna, ¿cómo es tu piso nuevo?' },
          { s: 'B', de: 'Sie ist toll! Die Küche ist hell, und es gibt einen kleinen Balkon.', es: '¡Es genial! La cocina es luminosa y hay un balcón pequeño.' },
          { s: 'A', de: 'Super. Soll ich dir am Samstag beim Umzug helfen?', es: 'Genial. ¿Te ayudo el sábado con la mudanza?' },
          { s: 'B', de: 'Ja gern, das wäre sehr nett von dir! Ich muss den schweren Schrank in den ersten Stock tragen.', es: '¡Sí, con gusto, es muy amable de tu parte! Tengo que subir el armario pesado al primer piso.' },
          { s: 'A', de: 'Gibt es einen Aufzug im Haus?', es: '¿Hay ascensor en la casa?' },
          { s: 'B', de: 'Leider nein, nur eine enge Treppe. Aber das schaffen wir zusammen.', es: 'Por desgracia no, solo una escalera estrecha. Pero lo conseguimos entre los dos.' },
          { s: 'A', de: 'Wo stellen wir das große Sofa hin?', es: '¿Dónde ponemos el sofá grande?' },
          { s: 'B', de: 'Ins Wohnzimmer, direkt neben das große Fenster. Das Regal steht schon an der Wand.', es: 'En el salón, justo al lado de la ventana grande. La estantería ya está junto a la pared.' },
          { s: 'A', de: 'Und wohin kommt der alte Teppich?', es: '¿Y adónde va la alfombra vieja?' },
          { s: 'B', de: 'Den legen wir unter den neuen Tisch. Dann ist es richtig gemütlich.', es: 'La ponemos debajo de la mesa nueva. Así queda muy acogedor.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Der ___ Garten ist sehr groß.', o: ['alte', 'alten', 'alter'], a: 0, why: 'Nominativ masculino tras der: terminación -e.' },
        { t: 'mc', q: 'Ich mag den ___ Balkon.', o: ['große', 'größer', 'großen'], a: 2, why: 'Akkusativ masculino tras den: terminación -en.' },
        { t: 'mc', q: 'Wir wohnen in dem ___ Haus.', o: ['kleine', 'kleinen', 'kleines'], a: 1, why: 'Dativ tras dem: siempre -en.' },
        { t: 'mc', q: 'Ich ___ das Buch auf das Regal.', o: ['liege', 'liegt', 'lege'], a: 2, why: 'Hay movimiento (Wohin? + Akkusativ): legen. Liegen no lleva Akkusativ.' },
        { t: 'mc', q: 'Soll ich dir helfen? – Nein danke, das ___ ich allein.', o: ['schaffe', 'schaffst', 'schaffen'], a: 0, why: 'Sujeto ich: la forma es schaffe.' },
        { t: 'gap', q: 'Ich kaufe die ___ Lampe. (neu)', a: ['neue'], why: 'Akkusativ femenino tras die: -e.' },
        { t: 'gap', q: 'Wir sitzen auf dem ___ Sofa. (alt)', a: ['alten'], why: 'Dativ neutro tras dem: -en.' },
        { t: 'gap', q: 'Die ___ Kinder spielen im Garten. (klein)', a: ['kleinen'], why: 'Nominativ plural tras die: -en.' },
        { t: 'gap', q: 'Ich helfe der ___ Nachbarin. (nett)', a: ['netten'], why: 'Dativ femenino tras der: -en.' },
        { t: 'order', es: 'Pongo la maleta pesada en el sótano.', de: 'Ich stelle den schweren Koffer in den Keller.', why: 'Wohin? → stellen + Akkusativ: den schweren Koffer, in den Keller.' },
        { t: 'order', es: 'Sé que la cocina nueva es muy luminosa.', de: 'Ich weiß, dass die neue Küche sehr hell ist.', why: 'dass envía el verbo al final; die neue Küche: Nominativ femenino con -e.' },
        { t: 'order', es: '¿Te ayudo con las cajas pesadas?', de: 'Soll ich dir mit den schweren Kisten helfen?', why: 'Pregunta con modal: sollen en 2.ª posición, infinitivo al final; mit + Dativ plural: -en.' },
        { t: 'tr', es: 'Me gusta el jardín grande.', de: ['Mir gefällt der große Garten.', 'Ich mag den großen Garten.'], why: '' },
        { t: 'tr', es: 'Pongo el libro nuevo en la estantería.', de: ['Ich stelle das neue Buch ins Regal.', 'Ich stelle das neue Buch in das Regal.', 'Ich lege das neue Buch ins Regal.'], why: '' },
        { t: 'fix', q: 'Ich wohne in der kleinen Haus.', a: ['Ich wohne in dem kleinen Haus.', 'Ich wohne im kleinen Haus.'], why: 'Haus es neutro: en Dativ dem (im), no der.' },
        { t: 'fix', q: 'Das Bild hängt an die Wand.', a: ['Das Bild hängt an der Wand.'], why: 'Posición (Wo?) → Dativ: an der Wand.' },
        { t: 'match', pairs: [['die Treppe', 'la escalera'], ['der Keller', 'el sótano'], ['der Balkon', 'el balcón'], ['das Regal', 'la estantería'], ['der Schrank', 'el armario'], ['der Umzug', 'la mudanza']] }
      ],
      speak: [
        { prompt: 'Describe tu casa o tu piso (5-6 frases): habitaciones, cómo son (adjetivos con terminación) y dónde están los muebles principales.', model: 'Ich wohne in einer kleinen Wohnung im zweiten Stock. Das Wohnzimmer ist hell und gemütlich. Das alte Sofa steht neben dem großen Fenster. Das Regal hängt an der Wand. In der kleinen Küche gibt es einen runden Tisch. Ich mag die ruhige Wohnung sehr.' },
        { prompt: 'Un vecino se muda. Ofrécele ayuda y reacciona a su respuesta (rechaza con educación una cosa y acepta otra).', model: 'Hallo Herr Weber, soll ich Ihnen beim Umzug helfen? – Die Kisten schaffe ich allein, aber den schweren Schrank können wir zusammen tragen. Ja gern, das wäre sehr nett von Ihnen!' },
        { prompt: 'Para usar en voz alta: explica a un amigo adónde pones cinco cosas de tu casa (usa stellen, legen, hängen y Akkusativ).', model: 'Ich stelle die neue Lampe auf den kleinen Tisch. Das Buch lege ich auf das Sofa. Das Bild hänge ich an die weiße Wand. Die Schuhe stelle ich in den Schrank. Den Koffer bringe ich in den Keller.' }
      ]
    },
    {
      id: 'a2-15',
      title: 'Der erste Arbeitstag',
      es: 'Primer día de trabajo',
      goals: ['Declinar el adjetivo tras ein, kein y los posesivos', 'Formar adjetivos con -ig (sonnig, windig, lustig)', 'Pedir una opinión, dar y agradecer un consejo', 'Desear suerte y hablar del día a día laboral'],
      grammar: [
        {
          h: 'Adjetivo tras ein, kein, mein...: la tabla',
          p: 'Después de <span class="de">ein, kein, mein, dein, sein, unser...</span> el adjetivo lleva casi las mismas terminaciones que tras el artículo definido, con una excepción importante: donde <b>ein/kein/mein no tiene terminación</b> (Nominativ masculino, y Nominativ y Akkusativ neutro), el adjetivo <b>muestra el género</b> con <b>-er</b> (m) y <b>-es</b> (n). En plural no existe <i>ein</i>, pero <i>keine / meine</i> + adjetivo siempre lleva <b>-en</b>.',
          table: { head: ['Caso', 'm', 'f', 'n', 'pl (kein)'], rows: [['Nominativ', 'ein neu<b>er</b> Kollege', 'eine neu<b>e</b> Chefin', 'ein neu<b>es</b> Büro', 'keine neu<b>en</b> Kollegen'], ['Akkusativ', 'einen neu<b>en</b> Kollegen', 'eine neu<b>e</b> Chefin', 'ein neu<b>es</b> Büro', 'keine neu<b>en</b> Kollegen'], ['Dativ', 'einem neu<b>en</b> Kollegen', 'einer neu<b>en</b> Chefin', 'einem neu<b>en</b> Büro', 'keinen neu<b>en</b> Kollegen']] },
          ex: [
            { de: 'Das ist ein netter Kollege.', es: 'Es un compañero simpático.' },
            { de: 'Ich habe eine freundliche Chefin.', es: 'Tengo una jefa amable.' },
            { de: 'Wir haben leider kein eigenes Büro.', es: 'Por desgracia no tenemos un despacho propio.' },
            { de: 'Ich arbeite mit meinem neuen Kollegen zusammen.', es: 'Trabajo junto con mi nuevo compañero.' },
            { de: 'Sie hat keine langen Pausen.', es: 'Ella no tiene descansos largos.' }
          ],
          tip: 'Compara: <b>der</b> neue Chef / <b>ein</b> neu<b>er</b> Chef; <b>das</b> neue Büro / <b>ein</b> neu<b>es</b> Büro. Donde el artículo se queda &quot;desnudo&quot;, el adjetivo hace su trabajo.'
        },
        {
          h: 'Formar adjetivos: sustantivo + -ig',
          p: 'Con la terminación <b>-ig</b> puedes crear adjetivos a partir de sustantivos: <i>die Sonne → sonnig</i> (soleado). A veces desaparece una -e final (<i>die Ruhe → ruhig</i>) o aparece un Umlaut (<i>die Kraft → kräftig</i>). Muy útil para el tiempo y para describir personas y días de trabajo. Como cualquier adjetivo, delante del sustantivo toma terminación: <i>ein sonniger Tag</i>, <i>der windige Morgen</i>.',
          table: { head: ['Sustantivo', 'Adjetivo', 'Significado'], rows: [['die Sonne', 'sonnig', 'soleado'], ['der Wind', 'windig', 'ventoso'], ['die Wolke', 'wolkig', 'nublado'], ['die Lust', 'lustig', 'divertido'], ['der Fleiß', 'fleißig', 'aplicado, trabajador'], ['der Mut', 'mutig', 'valiente'], ['die Geduld', 'geduldig', 'paciente'], ['der Nebel', 'neblig', 'con niebla']] },
          ex: [
            { de: 'Heute ist es sonnig und warm.', es: 'Hoy hace sol y calor.' },
            { de: 'An einem windigen Tag fahre ich nicht Rad.', es: 'En un día ventoso no voy en bici.' },
            { de: 'Meine neue Kollegin ist sehr fleißig.', es: 'Mi nueva compañera es muy trabajadora.' },
            { de: 'Ich habe einen lustigen Chef.', es: 'Tengo un jefe divertido.' },
            { de: 'Ein geduldiger Lehrer erklärt alles noch einmal.', es: 'Un profesor paciente lo explica todo otra vez.' }
          ],
          tip: 'No confundas <b>-ig</b> con <b>-lich</b> (<i>freundlich, ruhig</i>): no hay regla segura, aprende cada adjetivo con su sustantivo.'
        },
        {
          h: 'Pedir opinión y dar consejos',
          p: 'Para pedir opinión: <span class="de">Was meinst du?</span>, <span class="de">Wie findest du ...?</span>, <span class="de">Was würdest du an meiner Stelle tun?</span> Para aconsejar usa <span class="de">Du solltest ...</span> (deberías), <span class="de">Ich würde ...</span> (yo haría), <span class="de">Am besten ...</span> (lo mejor es) o <span class="de">Ich rate dir, ... zu ...</span>. Detrás de <i>solltest</i> y <i>würde</i> el otro verbo va en infinitivo al final. Para agradecer: <span class="de">Danke für den Tipp!</span> Para desear suerte: <span class="de">Ich drücke dir die Daumen!</span>',
          ex: [
            { de: 'Was würdest du an meiner Stelle tun?', es: '¿Qué harías tú en mi lugar?' },
            { de: 'Du solltest deine Chefin fragen.', es: 'Deberías preguntarle a tu jefa.' },
            { de: 'Ich würde zuerst mit dem Team sprechen.', es: 'Yo hablaría primero con el equipo.' },
            { de: 'Am besten schreibst du eine kurze E-Mail.', es: 'Lo mejor es que escribas un correo corto.' },
            { de: 'Danke für den Tipp! Ich drücke dir die Daumen!', es: '¡Gracias por el consejo! ¡Te deseo suerte!' }
          ],
          tip: '&quot;Ich drücke dir die Daumen&quot; es literal &quot;te aprieto los pulgares&quot;: se dice antes de un examen, entrevista o primer día. Siempre en plural, <i>die Daumen</i>.'
        }
      ],
      vocab: [
        { de: 'der Kollege', pl: 'die Kollegen', es: 'el compañero de trabajo', ex: 'Mein Kollege zeigt mir den Arbeitsplatz.', exes: 'Mi compañero me enseña el puesto de trabajo.' },
        { de: 'die Kollegin', pl: 'die Kolleginnen', es: 'la compañera de trabajo', ex: 'Die Kollegin hilft mir bei der ersten Aufgabe.', exes: 'La compañera me ayuda con la primera tarea.' },
        { de: 'der Chef', pl: 'die Chefs', es: 'el jefe', ex: 'Der Chef begrüßt das neue Team.', exes: 'El jefe da la bienvenida al nuevo equipo.' },
        { de: 'die Chefin', pl: 'die Chefinnen', es: 'la jefa', ex: 'Die Chefin hat heute viele Termine.', exes: 'La jefa tiene hoy muchas citas.' },
        { de: 'die Besprechung', pl: 'die Besprechungen', es: 'la reunión', ex: 'Um zehn Uhr ist die erste Besprechung.', exes: 'A las diez es la primera reunión.' },
        { de: 'der Termin', pl: 'die Termine', es: 'la cita / el compromiso', ex: 'Ich habe heute noch einen Termin.', exes: 'Hoy todavía tengo una cita.' },
        { de: 'die Aufgabe', pl: 'die Aufgaben', es: 'la tarea', ex: 'Meine Aufgabe ist es, E-Mails zu beantworten.', exes: 'Mi tarea es contestar correos.' },
        { de: 'die Pause', pl: 'die Pausen', es: 'el descanso', ex: 'In der Pause essen wir in der Kantine.', exes: 'En el descanso comemos en el comedor.' },
        { de: 'die Kantine', pl: 'die Kantinen', es: 'el comedor de la empresa', ex: 'Die Kantine hat heute eine gute Suppe.', exes: 'Hoy el comedor tiene una sopa buena.' },
        { de: 'der Arbeitsplatz', pl: 'die Arbeitsplätze', es: 'el puesto de trabajo', ex: 'Mein Arbeitsplatz ist am Fenster.', exes: 'Mi puesto de trabajo está junto a la ventana.' },
        { de: 'der Vertrag', pl: 'die Verträge', es: 'el contrato', ex: 'Ich unterschreibe heute meinen Vertrag.', exes: 'Hoy firmo mi contrato.' },
        { de: 'der Drucker', pl: 'die Drucker', es: 'la impresora', ex: 'Der Drucker im Flur funktioniert nicht.', exes: 'La impresora del pasillo no funciona.' },
        { de: 'das Passwort', pl: 'die Passwörter', es: 'la contraseña', ex: 'Ich brauche noch ein Passwort für den Computer.', exes: 'Todavía necesito una contraseña para el ordenador.' },
        { de: 'die Überstunde', pl: 'die Überstunden', es: 'la hora extra', ex: 'Heute mache ich keine Überstunden.', exes: 'Hoy no hago horas extra.' },
        { de: 'stressig', es: 'estresante', ex: 'Der erste Tag war ziemlich stressig.', exes: 'El primer día fue bastante estresante.' },
        { de: 'pünktlich', es: 'puntual', ex: 'Bitte seid morgen pünktlich um neun Uhr da.', exes: 'Por favor, estad mañana puntuales a las nueve.' },
        { de: 'an|fangen', es: 'empezar', note: 'fängt an – fing an – hat angefangen', ex: 'Die Arbeit fängt um acht Uhr an.', exes: 'El trabajo empieza a las ocho.' },
        { de: 'sich vor|stellen', es: 'presentarse', note: 'stellt sich vor – stellte sich vor – hat sich vorgestellt', ex: 'Ich stelle mich dem ganzen Team vor.', exes: 'Me presento a todo el equipo.' },
        { de: 'erledigen', es: 'resolver / hacer (una tarea)', ex: 'Bis Freitag muss ich diese Aufgabe erledigen.', exes: 'Tengo que terminar esta tarea para el viernes.' },
        { de: 'sich ein|arbeiten', es: 'ponerse al día en el puesto', note: 'arbeitet sich ein – hat sich eingearbeitet', ex: 'In der ersten Woche arbeite ich mich ein.', exes: 'En la primera semana me voy familiarizando con el puesto.' }
      ],
      phrases: [
        { de: 'Was meinst du dazu?', es: '¿Qué opinas de eso?', use: 'pedir opinión' },
        { de: 'Wie findest du meinen Plan?', es: '¿Qué te parece mi plan?', use: 'pedir opinión' },
        { de: 'Was würdest du an meiner Stelle tun?', es: '¿Qué harías en mi lugar?', use: 'pedir consejo' },
        { de: 'Du solltest mit deiner Chefin sprechen.', es: 'Deberías hablar con tu jefa.', use: 'aconsejar' },
        { de: 'Ich würde an deiner Stelle zuerst fragen.', es: 'Yo en tu lugar preguntaría primero.', use: 'aconsejar' },
        { de: 'Am besten fängst du früh an.', es: 'Lo mejor es que empieces pronto.', use: 'aconsejar' },
        { de: 'Danke für den Tipp, das hilft mir sehr.', es: 'Gracias por el consejo, me ayuda mucho.', use: 'agradecer' },
        { de: 'Das ist eine gute Idee, das mache ich.', es: 'Es una buena idea, lo haré.', use: 'aceptar consejo' },
        { de: 'Ich drücke dir die Daumen!', es: '¡Te deseo mucha suerte!', use: 'desear suerte' },
        { de: 'Viel Erfolg am ersten Tag!', es: '¡Mucho éxito el primer día!', use: 'desear suerte' }
      ],
      dialog: {
        title: 'Vor dem ersten Arbeitstag',
        lines: [
          { s: 'A', de: 'Morgen ist mein erster Arbeitstag, und ich bin ziemlich nervös.', es: 'Mañana es mi primer día de trabajo y estoy bastante nervioso.' },
          { s: 'B', de: 'Das verstehe ich. Du bekommst bestimmt einen netten Kollegen als Partner.', es: 'Lo entiendo. Seguro que te asignan a un compañero simpático como pareja.' },
          { s: 'A', de: 'Hoffentlich! Was soll ich anziehen? Was würdest du an meiner Stelle tun?', es: '¡Ojalá! ¿Qué me pongo? ¿Qué harías tú en mi lugar?' },
          { s: 'B', de: 'Ich würde ein ordentliches Hemd tragen. Du solltest auch pünktlich sein.', es: 'Yo llevaría una camisa arreglada. También deberías ser puntual.' },
          { s: 'A', de: 'Danke für den Tipp! Und wie findest du meine neue Tasche?', es: '¡Gracias por el consejo! ¿Y qué te parece mi bolso nuevo?' },
          { s: 'B', de: 'Sie ist wirklich schön. Eine moderne Tasche passt gut zu einem neuen Job.', es: 'Es muy bonito. Un bolso moderno encaja bien con un trabajo nuevo.' },
          { s: 'A', de: 'Was meinst du, soll ich meiner neuen Chefin ein kleines Geschenk mitbringen?', es: '¿Qué opinas, le llevo un pequeño regalo a mi nueva jefa?' },
          { s: 'B', de: 'Nein, das ist am ersten Tag nicht nötig. Am besten stellst du dich einfach freundlich vor.', es: 'No, el primer día no hace falta. Lo mejor es que te presentes con simpatía.' },
          { s: 'A', de: 'Gut, das mache ich. Hoffentlich ist der Tag nicht zu stressig.', es: 'Bien, así lo haré. Ojalá el día no sea demasiado estresante.' },
          { s: 'B', de: 'Bestimmt nicht. Ich drücke dir die Daumen!', es: 'Seguro que no. ¡Te deseo mucha suerte!' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Das ist ein ___ Kollege.', o: ['nette', 'netter', 'netten'], a: 1, why: 'Nominativ masculino tras ein (sin terminación): el adjetivo muestra -er.' },
        { t: 'mc', q: 'Sie hat eine ___ Chefin.', o: ['freundlichen', 'freundlicher', 'freundliche'], a: 2, why: 'Nominativ/Akkusativ femenino tras eine: -e.' },
        { t: 'mc', q: 'Wir haben kein ___ Büro.', o: ['eigene', 'eigenes', 'eigenen'], a: 1, why: 'Neutro Akkusativ tras kein (sin terminación): -es.' },
        { t: 'mc', q: 'Ich arbeite mit meinem ___ Kollegen.', o: ['neuen', 'neuem', 'neue'], a: 0, why: 'Dativ tras meinem: siempre -en.' },
        { t: 'mc', q: 'Heute scheint die Sonne. Es ist ___.', o: ['sonnenlich', 'sonnig', 'sonnlich'], a: 1, why: 'Sonne + -ig = sonnig (soleado).' },
        { t: 'gap', q: 'Ich habe einen ___ Chef. (gut)', a: ['guten'], why: 'Akkusativ masculino tras einen: -en.' },
        { t: 'gap', q: 'Heute ist ein ___ Tag mit viel Wind. (adjetivo de Wind)', a: ['windiger'], why: 'Wind + -ig = windig; Nominativ masculino tras ein: -er.' },
        { t: 'gap', q: 'Sie arbeitet in einer ___ Firma. (groß)', a: ['großen'], why: 'Dativ femenino tras einer: -en.' },
        { t: 'gap', q: 'Das ist leider kein ___ Problem. (klein)', a: ['kleines'], why: 'Nominativ neutro tras kein: -es.' },
        { t: 'order', es: 'Mi nuevo compañero es de España.', de: 'Mein neuer Kollege kommt aus Spanien.', why: 'Nominativ masculino tras mein: neuer. El verbo va en 2.ª posición.' },
        { t: 'order', es: '¿Qué harías tú en mi lugar?', de: 'Was würdest du an meiner Stelle tun?', why: 'Pregunta con partícula interrogativa: würdest en 2.ª posición e infinitivo al final.' },
        { t: 'order', es: 'Creo que ella es una jefa simpática.', de: 'Ich finde, dass sie eine nette Chefin ist.', why: 'dass envía el verbo al final; eine nette Chefin: femenino con -e.' },
        { t: 'tr', es: 'Tengo un trabajo nuevo.', de: ['Ich habe einen neuen Job.', 'Ich habe eine neue Arbeit.', 'Ich habe eine neue Stelle.'], why: '' },
        { t: 'tr', es: 'Te aconsejo hablar con tu jefa.', de: ['Ich rate dir, mit deiner Chefin zu sprechen.', 'Du solltest mit deiner Chefin sprechen.'], why: '' },
        { t: 'fix', q: 'Ich arbeite in einem große Büro.', a: ['Ich arbeite in einem großen Büro.'], why: 'Dativ tras einem: el adjetivo lleva -en.' },
        { t: 'fix', q: 'Ich habe keinen neue Idee.', a: ['Ich habe keine neue Idee.'], why: 'Idee es femenino: keine (Akkusativ femenino) + neue.' },
        { t: 'match', pairs: [['der Kollege', 'el compañero'], ['die Besprechung', 'la reunión'], ['die Kantine', 'el comedor de empresa'], ['der Vertrag', 'el contrato'], ['die Überstunde', 'la hora extra'], ['pünktlich', 'puntual']] }
      ],
      speak: [
        { prompt: 'Describe a un nuevo compañero o jefe que conoces (5 frases). Usa adjetivos con ein/mein + terminación y al menos un adjetivo con -ig.', model: 'Mein neuer Kollege heißt Lukas. Er ist ein freundlicher und fleißiger Mann. Er hat einen lustigen Humor und eine ruhige Stimme. Mit meinem neuen Kollegen arbeite ich gern zusammen. Er ist nie ein stressiger Typ.' },
        { prompt: 'Un amigo empieza un trabajo nuevo y te pide consejo. Dale tres consejos y desea suerte (4-5 frases).', model: 'Du solltest pünktlich sein. Am besten stellst du dich allen Kollegen freundlich vor. Ich würde viele Fragen stellen, das ist kein Problem. Ich drücke dir die Daumen, du schaffst das!' },
        { prompt: 'Para usar en voz alta: cuéntale a alguien cómo imaginas tu día de trabajo ideal (4-5 frases).', model: 'Mein idealer Arbeitstag fängt um acht Uhr an. Ich habe einen netten Chef und ein kleines Büro am Fenster. In der Pause gehe ich mit meinen Kollegen in die Kantine. Am Nachmittag habe ich keine langen Besprechungen. Um fünf Uhr gehe ich nach Hause.' }
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m6',
  level: 'A2',
  num: 6,
  title: 'Medios y trabajo en equipo',
  emoji: '📺',
  lessons: [
    {
      id: 'a2-16',
      title: 'Mein Lieblingsfilm',
      es: 'Series, películas y medios',
      goals: ['Usar verbos reflexivos (sich freuen, sich ärgern, sich interessieren...)', 'Elegir bien el pronombre reflexivo en Akkusativ y en Dativ', 'Colocar el pronombre reflexivo en la oración', 'Describir y valorar una serie o una película, y hablar de coincidencias y diferencias'],
      grammar: [
        {
          h: 'Verbos reflexivos con pronombre en Akkusativ',
          p: 'Un verbo es <b>reflexivo</b> cuando la acción vuelve sobre el sujeto: <span class="de">Ich freue mich.</span> En alemán el pronombre reflexivo es obligatorio con muchos verbos que en español no lo llevan (<i>sich ärgern</i> = enfadarse, pero también <i>sich interessieren</i> = interesarse, <i>sich treffen</i> = verse/quedar). Las formas son las del Akkusativ, salvo la 3ª persona, que es siempre <b>sich</b>. Los verbos reflexivos más frecuentes llevan además una preposición fija: <i>sich freuen auf/über, sich ärgern über, sich interessieren für, sich erinnern an</i>.',
          table: { head: ['Persona', 'Pronombre', 'Ejemplo'], rows: [['ich', '<b>mich</b>', 'Ich freue mich.'], ['du', '<b>dich</b>', 'Du ärgerst dich.'], ['er / sie / es', '<b>sich</b>', 'Sie interessiert sich für Krimis.'], ['wir', '<b>uns</b>', 'Wir treffen uns im Kino.'], ['ihr', '<b>euch</b>', 'Ihr erinnert euch an den Film.'], ['sie / Sie', '<b>sich</b>', 'Sie langweilen sich.']] },
          ex: [
            { de: 'Ich freue mich auf den neuen Film.', es: 'Tengo muchas ganas de ver la nueva película.' },
            { de: 'Tim ärgert sich über das schlechte Ende.', es: 'Tim se enfada por el mal final.' },
            { de: 'Wir interessieren uns für deutsche Serien.', es: 'Nos interesamos por las series alemanas.' },
            { de: 'Erinnerst du dich an den ersten Teil?', es: '¿Te acuerdas de la primera parte?' },
            { de: 'Die Kinder langweilen sich bei dem langen Film.', es: 'Los niños se aburren con la película larga.' }
          ],
          tip: 'Memoriza el verbo junto con su pronombre y su preposición: <b>sich freuen auf</b>, <b>sich ärgern über</b>. En 3ª persona (singular y plural) siempre es <b>sich</b>, nunca &quot;ihn&quot; ni &quot;ihnen&quot;.'
        },
        {
          h: 'Pronombre reflexivo en Dativ',
          p: 'Si el verbo reflexivo ya tiene un <b>objeto directo</b> (Akkusativ) —por ejemplo <i>die Hände</i>, <i>einen Film</i>—, el pronombre reflexivo pasa a <b>Dativ</b> (significa «para mí / a mí mismo»). Solo cambian <b>ich → mir</b> y <b>du → dir</b>; las demás personas son iguales que en Akkusativ. Verbos típicos: <span class="de">sich (Dat) die Hände waschen, sich (Dat) etwas ansehen, sich (Dat) etwas kaufen, sich (Dat) etwas vorstellen, sich (Dat) die Zähne putzen</span>.',
          table: { head: ['Persona', 'Akkusativ (sin objeto)', 'Dativ (con objeto Akk)'], rows: [['ich', 'Ich wasche <b>mich</b>.', 'Ich wasche <b>mir</b> die Hände.'], ['du', 'Du wäschst <b>dich</b>.', 'Du wäschst <b>dir</b> die Hände.'], ['er / sie / es', 'Er wäscht <b>sich</b>.', 'Er wäscht <b>sich</b> die Hände.'], ['wir', 'Wir waschen <b>uns</b>.', 'Wir waschen <b>uns</b> die Hände.'], ['ihr', 'Ihr wascht <b>euch</b>.', 'Ihr wascht <b>euch</b> die Hände.']] },
          ex: [
            { de: 'Ich wasche mir vor dem Essen die Hände.', es: 'Me lavo las manos antes de comer.' },
            { de: 'Hast du dir den Trailer schon angesehen?', es: '¿Ya has visto el tráiler?' },
            { de: 'Heute Abend sehen wir uns eine Komödie an.', es: 'Esta noche vemos una comedia.' },
            { de: 'Er kauft sich ein Ticket für die Vorstellung.', es: 'Se compra una entrada para la función.' },
            { de: 'Kannst du dir das vorstellen?', es: '¿Te lo puedes imaginar?' }
          ],
          tip: 'En español las partes del cuerpo llevan «me/te» y artículo («me lavo las manos»); en alemán también, pero con artículo en vez de posesivo: <b>mir die Hände</b>, nunca &quot;meine Hände&quot;.'
        },
        {
          h: 'Posición del pronombre reflexivo',
          p: 'El pronombre reflexivo se comporta como un complemento corto: va <b>justo detrás del verbo conjugado</b> en la oración principal. Si el sujeto es un pronombre, el reflexivo va después del sujeto aunque haya inversión. En la <b>subordinada</b> va antes del verbo final (y, con sujeto pronombre, justo detrás de él). En el Perfekt, casi todos los reflexivos usan <b>haben</b>. En imperativo, el pronombre sigue al verbo: <i>Freu dich! Setzt euch!</i>',
          table: { head: ['Tipo de oración', 'Ejemplo'], rows: [['Principal', 'Ich ärgere <b>mich</b> über die Werbung.'], ['Con inversión', 'Heute ärgere ich <b>mich</b> nicht.'], ['Subordinada', 'Ich weiß, dass sie <b>sich</b> für Krimis interessiert.'], ['Perfekt', 'Wir haben <b>uns</b> sehr gefreut.'], ['Imperativo', 'Setz <b>dich</b> doch!']] },
          ex: [
            { de: 'Ich ärgere mich über die Werbung.', es: 'Me enfada la publicidad.' },
            { de: 'Gestern habe ich mich über das Ende geärgert.', es: 'Ayer me enfadé por el final.' },
            { de: 'Ich glaube, dass sie sich für Krimis interessiert.', es: 'Creo que ella se interesa por las novelas policíacas.' },
            { de: 'Wir haben uns sehr über den Film gefreut.', es: 'Nos alegramos mucho con la película.' },
            { de: 'Freu dich nicht zu früh!', es: '¡No te alegres demasiado pronto!' }
          ],
          tip: 'Con sujeto sustantivo, el pronombre puede ir antes: <i>Weil sich Tim langweilt…</i> o <i>Weil Tim sich langweilt…</i> (ambas son correctas). Con sujeto pronombre, el orden es fijo: <i>weil er sich langweilt</i>.'
        },
        {
          h: 'Coincidencias y diferencias',
          p: 'Para hablar de series y películas necesitas saber decir que piensas lo mismo o algo distinto. Con respuestas cortas, <b>Ich auch</b> / <b>Ich nicht</b> (coincidencia) y <b>Ich schon</b> / <b>Ich aber nicht</b> (contraste). Para valorar usa <span class="de">Ich finde …+ adjetivo</span> o <span class="de">Die Serie gefällt mir, weil …</span>. Para comparar, <b>genauso … wie</b> (igual que), <b>ganz anders</b> (muy diferente) y <b>im Gegensatz zu</b> + Dativ (a diferencia de).',
          table: { head: ['Función', 'Alemán', 'Español'], rows: [['Coincidir (+)', 'Ich auch. / Das sehe ich genauso.', 'Yo también. / Lo veo igual.'], ['Coincidir (–)', 'Ich auch nicht. / Mir geht es genauso.', 'Yo tampoco. / A mí me pasa igual.'], ['Contrastar', 'Ich schon. / Ich dagegen nicht.', 'Yo sí. / Yo, en cambio, no.'], ['Valorar', 'Ich finde die Serie spannend.', 'Me parece emocionante.']] },
          ex: [
            { de: 'Ich mag Krimis. – Ich auch!', es: 'Me gustan las novelas policíacas. – ¡A mí también!' },
            { de: 'Ich schaue keine Werbung. – Ich auch nicht.', es: 'No veo publicidad. – Yo tampoco.' },
            { de: 'Ich finde die Serie langweilig. – Ich dagegen finde sie lustig.', es: 'Me parece aburrida la serie. – A mí, en cambio, me parece divertida.' },
            { de: 'Im Gegensatz zu Anna sieht Tim gern Komödien.', es: 'A diferencia de Anna, a Tim le gusta ver comedias.' },
            { de: 'Der Film ist genauso spannend wie das Buch.', es: 'La película es tan emocionante como el libro.' }
          ],
          tip: 'No traduzcas «yo tampoco» como &quot;ich auch&quot; si la frase anterior es negativa: usa <b>ich auch nicht</b>. Y «a mí sí» se dice <b>ich schon</b> (no &quot;ich ja&quot;).'
        }
      ],
      vocab: [
        { de: 'die Serie', pl: 'die Serien', es: 'la serie', ex: 'Welche Serie siehst du gerade?', exes: '¿Qué serie estás viendo ahora?' },
        { de: 'die Folge', pl: 'die Folgen', es: 'el episodio', ex: 'Jeden Abend sehen wir eine Folge.', exes: 'Cada noche vemos un episodio.' },
        { de: 'die Staffel', pl: 'die Staffeln', es: 'la temporada', ex: 'Die zweite Staffel ist noch spannender.', exes: 'La segunda temporada es aún más emocionante.' },
        { de: 'der Krimi', pl: 'die Krimis', es: 'la novela / serie policíaca', ex: 'Am Sonntagabend läuft immer ein Krimi.', exes: 'Los domingos por la noche siempre hay una película policíaca.' },
        { de: 'die Komödie', pl: 'die Komödien', es: 'la comedia', ex: 'Nach der Arbeit sehe ich gern eine Komödie.', exes: 'Después del trabajo me gusta ver una comedia.' },
        { de: 'der Schauspieler', pl: 'die Schauspieler', es: 'el actor', ex: 'Der Schauspieler spielt einen Lehrer.', exes: 'El actor interpreta a un profesor.' },
        { de: 'die Handlung', pl: 'die Handlungen', es: 'la trama', ex: 'Die Handlung ist leicht zu verstehen.', exes: 'La trama es fácil de entender.' },
        { de: 'die Hauptrolle', pl: 'die Hauptrollen', es: 'el papel principal', ex: 'Lena spielt die Hauptrolle in dem Film.', exes: 'Lena interpreta el papel principal en la película.' },
        { de: 'der Sender', pl: 'die Sender', es: 'el canal de televisión', ex: 'Dieser Sender zeigt viele Dokumentationen.', exes: 'Este canal emite muchos documentales.' },
        { de: 'die Mediathek', pl: 'die Mediatheken', es: 'la mediateca (televisión a la carta)', ex: 'In der Mediathek kann ich Sendungen später ansehen.', exes: 'En la mediateca puedo ver los programas más tarde.' },
        { de: 'die Sendung', pl: 'die Sendungen', es: 'el programa', ex: 'Meine Lieblingssendung beginnt um acht Uhr.', exes: 'Mi programa favorito empieza a las ocho.' },
        { de: 'die Werbung', es: 'la publicidad', ex: 'Die Werbung im Fernsehen nervt mich.', exes: 'La publicidad en la tele me molesta.' },
        { de: 'spannend', es: 'emocionante, con suspense', ex: 'Der Film war bis zum Schluss spannend.', exes: 'La película fue emocionante hasta el final.' },
        { de: 'langweilig', es: 'aburrido', ex: 'Die erste Folge war leider langweilig.', exes: 'El primer episodio fue por desgracia aburrido.' },
        { de: 'lustig', es: 'divertido, gracioso', ex: 'Die Komödie ist wirklich lustig.', exes: 'La comedia es realmente divertida.' },
        { de: 'sich freuen', es: 'alegrarse', note: 'freut sich – freute sich – hat sich gefreut', ex: 'Wir freuen uns auf den Kinoabend.', exes: 'Tenemos muchas ganas de la noche de cine.' },
        { de: 'sich ärgern', es: 'enfadarse', ex: 'Ich ärgere mich über die vielen Werbepausen.', exes: 'Me enfado por las muchas pausas publicitarias.' },
        { de: 'sich interessieren', es: 'interesarse', ex: 'Meine Schwester interessiert sich für Dokumentarfilme.', exes: 'Mi hermana se interesa por los documentales.' },
        { de: 'sich erinnern', es: 'acordarse', ex: 'Ich erinnere mich gut an den Schluss.', exes: 'Me acuerdo bien del final.' },
        { de: 'sich langweilen', es: 'aburrirse', ex: 'Im Kino langweile ich mich nie.', exes: 'En el cine nunca me aburro.' },
        { de: 'sich (Dat) an|sehen', es: 'ver, mirar (con atención)', note: 'sieht sich an – sah sich an – hat sich angesehen', ex: 'Hast du dir die neue Folge schon angesehen?', exes: '¿Ya has visto el nuevo episodio?' }
      ],
      phrases: [
        { de: 'Ich freue mich schon auf …', es: 'Ya tengo muchas ganas de …', use: 'expectativa' },
        { de: 'Ich ärgere mich über …', es: 'Me enfada …', use: 'quejarse' },
        { de: 'Ich interessiere mich besonders für …', es: 'Me interesa especialmente …', use: 'intereses' },
        { de: 'Ich habe mir gestern … angesehen.', es: 'Ayer vi …', use: 'contar' },
        { de: 'Die Serie handelt von …', es: 'La serie trata de …', use: 'resumir' },
        { de: 'Ich finde den Film spannend, weil …', es: 'Me parece emocionante la película porque …', use: 'valorar' },
        { de: 'Das sehe ich genauso.', es: 'Yo lo veo igual.', use: 'coincidir' },
        { de: 'Ich sehe das ganz anders.', es: 'Yo lo veo muy diferente.', use: 'discrepar' },
        { de: 'Mir gefällt die Hauptrolle gut. – Mir auch!', es: 'Me gusta el papel principal. – ¡A mí también!', use: 'coincidir' },
        { de: 'Hast du Lust, dir die Folge mit mir anzusehen?', es: '¿Te apetece ver el episodio conmigo?', use: 'proponer' }
      ],
      dialog: {
        title: 'Was schaust du gerade?',
        lines: [
          { s: 'A', de: 'Hallo Lena! Hast du dir die neue Serie schon angesehen?', es: '¡Hola Lena! ¿Ya has visto la nueva serie?' },
          { s: 'B', de: 'Ja, gestern Abend habe ich zwei Folgen gesehen. Ich finde sie richtig spannend!', es: 'Sí, ayer por la noche vi dos episodios. ¡Me parece muy emocionante!' },
          { s: 'A', de: 'Wirklich? Ich habe mich ein bisschen gelangweilt. Die Handlung ist zu langsam.', es: '¿De verdad? Yo me aburrí un poco. La trama es demasiado lenta.' },
          { s: 'B', de: 'Ich sehe das ganz anders. Ich interessiere mich sehr für die Geschichte.', es: 'Yo lo veo muy diferente. Me interesa mucho la historia.' },
          { s: 'A', de: 'Und die Hauptrolle? Der Schauspieler gefällt mir nicht.', es: '¿Y el papel principal? El actor no me gusta.' },
          { s: 'B', de: 'Mir schon! Er ist genauso gut wie in seinem letzten Film.', es: '¡A mí sí! Es tan bueno como en su última película.' },
          { s: 'A', de: 'Vielleicht erinnere ich mich nur falsch an den Anfang. Wie heißt die Serie noch mal?', es: 'Quizá recuerdo mal el principio. ¿Cómo se llama la serie otra vez?' },
          { s: 'B', de: 'Sie heißt „Nachtzug“. Du findest sie in der Mediathek.', es: 'Se llama «Nachtzug». La encuentras en la mediateca.' },
          { s: 'A', de: 'Gut, dann sehe ich mir heute Abend die zweite Folge an.', es: 'Bien, entonces esta noche veo el segundo episodio.' },
          { s: 'B', de: 'Super! Wir können uns morgen darüber unterhalten. Ich freue mich schon!', es: '¡Genial! Mañana podemos hablar de ello. ¡Ya tengo ganas!' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich freue ___ auf das Wochenende.', o: ['mich', 'mir', 'sich'], a: 0, why: 'ich + verbo reflexivo sin objeto directo → mich (Akkusativ).' },
        { t: 'mc', q: 'Tim ärgert ___ über die lange Werbepause.', o: ['mich', 'sich', 'dich'], a: 1, why: 'En 3ª persona del singular el pronombre reflexivo es siempre sich.' },
        { t: 'mc', q: 'Wir interessieren ___ für Krimis.', o: ['uns', 'sich', 'euch'], a: 0, why: 'Con wir el reflexivo es uns.' },
        { t: 'mc', q: 'Ich wasche ___ vor dem Essen die Hände.', o: ['mich', 'sich', 'mir'], a: 2, why: 'Hay un objeto directo (die Hände), así que el pronombre va en Dativ: mir.' },
        { t: 'mc', q: 'Hast du ___ die neue Serie schon angesehen?', o: ['dich', 'dir', 'sich'], a: 1, why: 'sich (Dat) etwas ansehen: con objeto en Akkusativ, du → dir.' },
        { t: 'mc', q: 'Gestern ___ ich mich sehr über die Folge geärgert.', o: ['bin', 'war', 'habe'], a: 2, why: 'sich ärgern forma el Perfekt con haben.' },
        { t: 'mc', q: 'Welcher Satz ist richtig?', o: ['Heute ich freue mich auf den Film.', 'Heute freue ich mich auf den Film.', 'Heute freue mich ich auf den Film.'], a: 1, why: 'El verbo va en 2ª posición y el pronombre reflexivo detrás del sujeto pronombre (ich).' },
        { t: 'gap', q: 'Anna und Tim treffen ___ heute im Kino.', a: ['sich'], why: 'Sujeto en 3ª persona plural (Anna und Tim = sie) → sich.' },
        { t: 'gap', q: 'Ich habe ___ gestern eine neue Serie angesehen. (ich)', a: ['mir'], why: 'Con objeto en Akkusativ (eine neue Serie), ich → mir (Dativ).' },
        { t: 'gap', q: 'Kinder, setzt ___ bitte hin! (ihr)', a: ['euch'], why: 'Imperativo de ihr: el pronombre reflexivo es euch y sigue al verbo.' },
        { t: 'gap', q: 'Erinnerst du ___ an unseren ersten Kinobesuch?', a: ['dich'], why: 'sich erinnern an + Akk; du → dich.' },
        { t: 'gap', q: 'Tim sagt, dass er ___ für Komödien interessiert. (er)', a: ['sich'], why: 'er → sich; en la subordinada va justo detrás del sujeto, antes del verbo final.' },
        { t: 'order', es: 'Tengo muchas ganas de ver la nueva película.', de: 'Ich freue mich auf den neuen Film.', why: 'Verbo en 2ª posición; el pronombre reflexivo mich va justo detrás del verbo.' },
        { t: 'order', es: 'Ayer me enfadé por el final.', de: 'Gestern habe ich mich über das Ende geärgert.', why: 'Perfekt con haben: el auxiliar en 2ª posición, el reflexivo tras el sujeto y el participio al final.' },
        { t: 'order', es: 'Creo que ella se interesa por las novelas policíacas.', de: 'Ich glaube, dass sie sich für Krimis interessiert.', why: 'En la subordinada con dass, el verbo va al final y sich justo detrás del sujeto sie.' },
        { t: 'tr', es: 'Me acuerdo de la última temporada.', de: ['Ich erinnere mich an die letzte Staffel.'], why: 'sich erinnern an + Akk.' },
        { t: 'tr', es: 'Nos interesamos por las series alemanas.', de: ['Wir interessieren uns für deutsche Serien.'], why: 'sich interessieren für + Akk; wir → uns.' },
        { t: 'fix', q: 'Ich freue mir auf das Wochenende.', a: ['Ich freue mich auf das Wochenende.'], why: 'sich freuen no lleva objeto directo, por eso Akkusativ: mich, no mir.' },
        { t: 'fix', q: 'Er hat gestern sich geärgert.', a: ['Er hat sich gestern geärgert.', 'Gestern hat er sich geärgert.'], why: 'El pronombre reflexivo va pegado al sujeto pronombre, antes de la indicación de tiempo.' },
        { t: 'match', pairs: [['die Staffel', 'la temporada'], ['die Folge', 'el episodio'], ['die Handlung', 'la trama'], ['der Schauspieler', 'el actor'], ['spannend', 'emocionante'], ['der Sender', 'el canal de televisión']] }
      ],
      speak: [
        { prompt: 'Habla de tu serie o película favorita en 5-6 frases: ¿cómo se llama, de qué trata y por qué te gusta? Usa al menos dos verbos reflexivos.', model: 'Meine Lieblingsserie heißt „Dark“. Sie handelt von einer kleinen Stadt und von der Zeit. Ich interessiere mich sehr für solche Geschichten. Die Handlung ist kompliziert, aber ich finde sie spannend. Ich habe mich schon über das Ende der zweiten Staffel geärgert, aber ich freue mich auf die nächste Folge.' },
        { prompt: 'Un amigo dice: «Ich finde Krimis langweilig.» Reacciona de dos maneras: una vez coincidiendo y otra discrepando, con una frase de justificación cada vez.', model: 'Ich auch! Ich langweile mich bei Krimis oft. – Ich sehe das anders. Ich finde Krimis spannend, weil man mitdenken muss.' },
        { prompt: 'Para uso real: cuéntale a alguien (en voz alta) qué te interesa, qué te alegra y qué te enfada en tu rutina de ocio. Una frase con cada verbo.', model: 'Ich interessiere mich für Sprachen und für Filme. Ich freue mich auf den Feierabend. Ich ärgere mich über laute Werbung im Fernsehen. Am Wochenende erhole ich mich und sehe mir eine Serie an.' }
      ]
    },
    {
      id: 'a2-17',
      title: 'Wir sind ein Team',
      es: 'Trabajo en equipo',
      goals: ['Usar verbos, adjetivos y expresiones con preposición fija y su caso', 'Hacer preguntas con Worauf? Woran? Worüber? y con Auf wen? Mit wem?', 'Responder con adverbios pronominales: darauf, daran, darüber, dafür...', 'Expresar comprensión y cooperar en el trabajo'],
      grammar: [
        {
          h: 'Verbos con preposición fija',
          p: 'Muchos verbos alemanes se combinan siempre con una <b>preposición concreta</b> y esa preposición exige un caso (Akkusativ o Dativ). No se puede deducir del español: hay que aprender el <b>verbo + preposición + caso</b> como un bloque. Después de la preposición, la cosa o persona va con su artículo en ese caso: <span class="de">Ich warte auf den Bus. / Ich warte auf meine Kollegin.</span>',
          table: { head: ['Verbo + preposición', 'Caso', 'Español'], rows: [['warten <b>auf</b>', 'Akk', 'esperar (a)'], ['denken <b>an</b>', 'Akk', 'pensar en'], ['sich freuen <b>auf</b> / <b>über</b>', 'Akk', 'alegrarse por (futuro / presente)'], ['sprechen <b>über</b>', 'Akk', 'hablar de / sobre'], ['sich kümmern <b>um</b>', 'Akk', 'ocuparse de'], ['teilnehmen <b>an</b>', 'Dat', 'participar en'], ['Angst haben <b>vor</b>', 'Dat', 'tener miedo de'], ['träumen <b>von</b>', 'Dat', 'soñar con']] },
          ex: [
            { de: 'Wir warten auf die Chefin.', es: 'Esperamos a la jefa.' },
            { de: 'Ich denke oft an die Besprechung morgen.', es: 'Pienso a menudo en la reunión de mañana.' },
            { de: 'Murat kümmert sich um die Termine.', es: 'Murat se ocupa de las citas.' },
            { de: 'Alle nehmen an dem Workshop teil.', es: 'Todos participan en el taller.' },
            { de: 'Lena hat Angst vor dem Fehler.', es: 'Lena tiene miedo del error.' }
          ],
          tip: 'Con <b>sich freuen</b> distingue: <b>auf</b> + Akk = algo futuro (<i>sich auf den Urlaub freuen</i>); <b>über</b> + Akk = algo presente o pasado (<i>sich über das Geschenk freuen</i>).'
        },
        {
          h: 'Adjetivos y expresiones con preposición',
          p: 'También algunos <b>adjetivos</b> (después de <i>sein</i>) llevan una preposición fija con su caso. Se construyen igual que los verbos: <span class="de">Ich bin stolz auf mein Team.</span> Aprende el adjetivo con su preposición.',
          table: { head: ['Adjetivo + preposición', 'Caso', 'Español'], rows: [['stolz <b>auf</b>', 'Akk', 'orgulloso de'], ['gespannt <b>auf</b>', 'Akk', 'curioso por, expectante ante'], ['froh <b>über</b>', 'Akk', 'contento por'], ['zufrieden <b>mit</b>', 'Dat', 'satisfecho con'], ['begeistert <b>von</b>', 'Dat', 'entusiasmado con'], ['interessiert <b>an</b>', 'Dat', 'interesado en'], ['verantwortlich <b>für</b>', 'Akk', 'responsable de']] },
          ex: [
            { de: 'Ich bin stolz auf mein Team.', es: 'Estoy orgulloso de mi equipo.' },
            { de: 'Der Chef ist mit dem Ergebnis zufrieden.', es: 'El jefe está satisfecho con el resultado.' },
            { de: 'Wir sind sehr gespannt auf die neue Aufgabe.', es: 'Tenemos mucha curiosidad por la nueva tarea.' },
            { de: 'Anna ist von der Idee begeistert.', es: 'Anna está entusiasmada con la idea.' },
            { de: 'Er ist an einem neuen Projekt interessiert.', es: 'Está interesado en un proyecto nuevo.' }
          ],
          tip: 'No confundas <b>sich interessieren für</b> (verbo, Akk) con <b>interessiert sein an</b> (adjetivo, Dat). Los dos significan «interesarse por», pero tienen preposición y caso distintos.'
        },
        {
          h: 'Preguntar: Worauf? Woran? / Auf wen? An wen?',
          p: 'La pregunta depende de si preguntas por una <b>cosa</b> o por una <b>persona</b>. Para cosas se usa <b>wo(r) + preposición</b>: <i>Worauf, Woran, Worüber, Wofür, Womit, Wovor, Wovon</i>. Se añade una <b>r</b> si la preposición empieza por vocal (wo<b>r</b>auf, wo<b>r</b>an, wo<b>r</b>über). Para personas se usa la <b>preposición + wen/wem</b>: Akk → <i>Auf wen? An wen? Über wen?</i>; Dativ → <i>Mit wem? Vor wem? Von wem?</i>',
          table: { head: ['Pregunta', 'Cosa', 'Persona'], rows: [['warten auf', '<b>Worauf</b> wartest du?', '<b>Auf wen</b> wartest du?'], ['denken an', '<b>Woran</b> denkst du?', '<b>An wen</b> denkst du?'], ['sprechen über', '<b>Worüber</b> sprecht ihr?', '<b>Über wen</b> sprecht ihr?'], ['sich interessieren für', '<b>Wofür</b> interessierst du dich?', '<b>Für wen</b> interessierst du dich?'], ['Angst haben vor', '<b>Wovor</b> hast du Angst?', '<b>Vor wem</b> hast du Angst?'], ['zusammenarbeiten mit', '<b>Womit</b> arbeitest du?', '<b>Mit wem</b> arbeitest du zusammen?']] },
          ex: [
            { de: 'Worauf wartest du? – Auf den Zug.', es: '¿Qué esperas? – El tren.' },
            { de: 'Auf wen wartest du? – Auf meine Kollegin.', es: '¿A quién esperas? – A mi colega.' },
            { de: 'Worüber sprecht ihr? – Über das neue Projekt.', es: '¿De qué habláis? – Del nuevo proyecto.' },
            { de: 'Mit wem arbeitest du zusammen? – Mit Murat.', es: '¿Con quién trabajas? – Con Murat.' },
            { de: 'Wovor hast du Angst? – Vor dem Termin.', es: '¿De qué tienes miedo? – De la cita.' }
          ],
          tip: 'En español preguntamos «¿De qué…? ¿En qué…? ¿Con quién…?» con la preposición delante también. La diferencia es que en alemán la forma depende de la cosa/persona: <b>wo(r)-</b> para cosas, <b>preposición + wen/wem</b> para personas.'
        },
        {
          h: 'Responder: darauf, daran, darüber... y con personas',
          p: 'Para no repetir una cosa ya mencionada, se usa el <b>adverbio pronominal</b>: <b>da(r) + preposición</b> (<i>darauf, daran, darüber, dafür, damit, davor, davon</i>; con <b>r</b> delante de vocal). Con <b>personas</b> no se usa da-: se pone la preposición + pronombre personal (<i>auf sie, mit ihm, an ihn</i>). Si después viene una subordinada con <i>dass</i> o un infinitivo con <i>zu</i>, el <b>da(r)-</b> la anuncia: <span class="de">Ich freue mich darauf, euch zu sehen.</span>',
          table: { head: ['Cosa (da-)', 'Persona (prep. + pronombre)'], rows: [['Ich warte <b>darauf</b>.', 'Ich warte <b>auf ihn</b>.'], ['Ich denke <b>daran</b>.', 'Ich denke <b>an sie</b>.'], ['Wir sprechen <b>darüber</b>.', 'Wir sprechen <b>über ihn</b>.'], ['Ich bin <b>dafür</b>.', 'Ich bin <b>für ihn</b>.'], ['Wir arbeiten <b>damit</b>.', 'Wir arbeiten <b>mit ihr</b>.']] },
          ex: [
            { de: 'Bald ist die Besprechung. Ich bereite mich darauf vor.', es: 'Pronto es la reunión. Me preparo para ella.' },
            { de: 'Wir haben einen Fehler gemacht. Wir sprechen morgen darüber.', es: 'Hemos cometido un error. Hablamos de ello mañana.' },
            { de: 'Tim ist neu. Wir kümmern uns um ihn.', es: 'Tim es nuevo. Nos ocupamos de él.' },
            { de: 'Ich freue mich darauf, euch zu sehen.', es: 'Tengo ganas de veros.' },
            { de: 'Er denkt daran, dass morgen Abgabetermin ist.', es: 'Se acuerda de que mañana es la fecha de entrega.' }
          ],
          tip: 'No digas &quot;darauf ihn&quot; ni uses <i>da-</i> para personas: <i>Ich warte auf ihn</i> (nunca &quot;Ich warte darauf&quot; si te refieres a una persona).'
        }
      ],
      vocab: [
        { de: 'das Team', pl: 'die Teams', es: 'el equipo', ex: 'Unser Team besteht aus fünf Personen.', exes: 'Nuestro equipo está formado por cinco personas.' },
        { de: 'der Kollege', pl: 'die Kollegen', es: 'el colega, el compañero', note: 'der Kollege – des Kollegen (n-Deklination)', ex: 'Mein Kollege hilft mir bei der Präsentation.', exes: 'Mi compañero me ayuda con la presentación.' },
        { de: 'die Aufgabe', pl: 'die Aufgaben', es: 'la tarea', ex: 'Jeder im Team hat eine Aufgabe.', exes: 'Cada miembro del equipo tiene una tarea.' },
        { de: 'das Projekt', pl: 'die Projekte', es: 'el proyecto', ex: 'Wir arbeiten seit März an diesem Projekt.', exes: 'Trabajamos en este proyecto desde marzo.' },
        { de: 'die Besprechung', pl: 'die Besprechungen', es: 'la reunión', ex: 'Die Besprechung beginnt um zehn Uhr.', exes: 'La reunión empieza a las diez.' },
        { de: 'der Vorschlag', pl: 'die Vorschläge', es: 'la propuesta', ex: 'Das ist ein guter Vorschlag von dir.', exes: 'Es una buena propuesta tuya.' },
        { de: 'die Lösung', pl: 'die Lösungen', es: 'la solución', ex: 'Wir suchen gemeinsam eine Lösung.', exes: 'Buscamos juntos una solución.' },
        { de: 'die Verantwortung', es: 'la responsabilidad', ex: 'Die Chefin trägt die Verantwortung für das Projekt.', exes: 'La jefa tiene la responsabilidad del proyecto.' },
        { de: 'der Termin', pl: 'die Termine', es: 'la cita, el plazo', ex: 'Der Termin für die Abgabe ist am Freitag.', exes: 'El plazo de entrega es el viernes.' },
        { de: 'die Zusammenarbeit', es: 'la colaboración', ex: 'Die Zusammenarbeit im Team funktioniert gut.', exes: 'La colaboración en el equipo funciona bien.' },
        { de: 'der Fehler', pl: 'die Fehler', es: 'el error', ex: 'Jeder macht mal einen Fehler.', exes: 'Todo el mundo comete un error alguna vez.' },
        { de: 'zusammen|arbeiten', es: 'trabajar juntos, colaborar', note: 'arbeitet zusammen – arbeitete zusammen – hat zusammengearbeitet', ex: 'Ich arbeite gern mit Anna zusammen.', exes: 'Me gusta trabajar con Anna.' },
        { de: 'unterstützen', es: 'apoyar', ex: 'Meine Kollegen unterstützen mich immer.', exes: 'Mis compañeros siempre me apoyan.' },
        { de: 'verteilen', es: 'repartir', ex: 'Wir verteilen die Aufgaben gleich.', exes: 'Repartimos las tareas ahora mismo.' },
        { de: 'sich kümmern um', es: 'ocuparse de', ex: 'Wer kümmert sich um den Raum für die Besprechung?', exes: '¿Quién se ocupa de la sala para la reunión?' },
        { de: 'teil|nehmen an', es: 'participar en', note: 'nimmt teil – nahm teil – hat teilgenommen', ex: 'Alle nehmen an der Schulung teil.', exes: 'Todos participan en el curso de formación.' },
        { de: 'sich einigen auf', es: 'ponerse de acuerdo en', ex: 'Wir haben uns auf einen Termin geeinigt.', exes: 'Nos hemos puesto de acuerdo en una fecha.' },
        { de: 'zuverlässig', es: 'fiable, de confianza', ex: 'Murat ist ein sehr zuverlässiger Kollege.', exes: 'Murat es un compañero muy fiable.' },
        { de: 'hilfsbereit', es: 'dispuesto a ayudar', ex: 'Unsere Teamleiterin ist immer hilfsbereit.', exes: 'Nuestra jefa de equipo siempre está dispuesta a ayudar.' },
        { de: 'gemeinsam', es: 'juntos, en común', ex: 'Gemeinsam schaffen wir das bis Freitag.', exes: 'Juntos lo conseguimos para el viernes.' },
        { de: 'einverstanden', es: 'de acuerdo', ex: 'Bist du mit dem Plan einverstanden?', exes: '¿Estás de acuerdo con el plan?' }
      ],
      phrases: [
        { de: 'Ich verstehe, was du meinst.', es: 'Entiendo lo que quieres decir.', use: 'comprensión' },
        { de: 'Das kann ich gut nachvollziehen.', es: 'Eso lo puedo entender bien.', use: 'comprensión' },
        { de: 'Du hast recht, das ist ein guter Punkt.', es: 'Tienes razón, es un buen punto.', use: 'acuerdo' },
        { de: 'Wer kümmert sich um …?', es: '¿Quién se ocupa de …?', use: 'repartir' },
        { de: 'Das übernehme ich.', es: 'De eso me encargo yo.', use: 'ofrecerse' },
        { de: 'Können wir die Aufgaben gerecht verteilen?', es: '¿Podemos repartir las tareas de forma justa?', use: 'proponer' },
        { de: 'Wie sieht es bei dir mit der Zeit aus?', es: '¿Cómo andas tú de tiempo?', use: 'preguntar' },
        { de: 'Ich bin mit dem Vorschlag einverstanden.', es: 'Estoy de acuerdo con la propuesta.', use: 'aceptar' },
        { de: 'Darf ich dir dabei helfen?', es: '¿Puedo ayudarte con eso?', use: 'ofrecer ayuda' },
        { de: 'Worauf warten wir noch?', es: '¿A qué estamos esperando?', use: 'animar' }
      ],
      dialog: {
        title: 'In der Teambesprechung',
        lines: [
          { s: 'A', de: 'Guten Morgen, Murat! Worüber sprechen wir heute in der Besprechung?', es: '¡Buenos días, Murat! ¿De qué hablamos hoy en la reunión?' },
          { s: 'B', de: 'Über das neue Projekt. Wir müssen die Aufgaben verteilen.', es: 'Sobre el nuevo proyecto. Tenemos que repartir las tareas.' },
          { s: 'A', de: 'Gut. Ich kümmere mich gern um den Termin mit dem Kunden.', es: 'Bien. Yo me ocupo con gusto de la cita con el cliente.' },
          { s: 'B', de: 'Danke! Dafür bin ich dir wirklich dankbar. Ich habe wenig Zeit.', es: '¡Gracias! Te lo agradezco de verdad. Tengo poco tiempo.' },
          { s: 'A', de: 'Kein Problem. Mit wem arbeite ich bei dem Projekt zusammen?', es: 'No hay problema. ¿Con quién trabajo en el proyecto?' },
          { s: 'B', de: 'Mit Lena. Sie ist sehr zuverlässig. Ich bin zufrieden mit ihrer Arbeit.', es: 'Con Lena. Es muy fiable. Estoy satisfecho con su trabajo.' },
          { s: 'A', de: 'Das habe ich auch gehört. Hat jemand Angst vor dem Abgabetermin?', es: 'Eso también lo he oído. ¿Alguien tiene miedo de la fecha de entrega?' },
          { s: 'B', de: 'Ein bisschen schon, aber wir sind ein gutes Team. Ich bin stolz auf euch.', es: 'Un poco sí, pero somos un buen equipo. Estoy orgulloso de vosotros.' },
          { s: 'A', de: 'Ich verstehe, was du meinst. Wir schaffen das gemeinsam.', es: 'Entiendo lo que quieres decir. Lo conseguiremos juntos.' },
          { s: 'B', de: 'Genau! Dann denken wir jetzt nur noch an die Lösung. Worauf warten wir noch?', es: '¡Exacto! Entonces ahora solo pensamos en la solución. ¿A qué esperamos?' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich warte ___ den Bus.', o: ['auf', 'an', 'für'], a: 0, why: 'warten + auf + Akkusativ.' },
        { t: 'mc', q: 'Sie hat Angst ___ dem Chef.', o: ['von', 'vor', 'für'], a: 1, why: 'Angst haben vor + Dativ.' },
        { t: 'mc', q: 'Wir sind sehr zufrieden ___ dem Ergebnis.', o: ['für', 'von', 'mit'], a: 2, why: 'zufrieden sein mit + Dativ.' },
        { t: 'mc', q: '___ wartest du? – Auf den Zug.', o: ['Worauf', 'Auf wen', 'Woran'], a: 0, why: 'Se pregunta por una cosa (el tren) con warten auf → Worauf.' },
        { t: 'mc', q: '___ sprichst du? – Über meine Chefin.', o: ['Worüber', 'Über wen', 'Mit wem'], a: 1, why: 'Se pregunta por una persona con sprechen über (Akk) → Über wen.' },
        { t: 'mc', q: 'Bald haben wir Urlaub. Ich freue mich schon ___.', o: ['darüber', 'darauf', 'daran'], a: 1, why: 'Algo futuro: sich freuen auf → darauf.' },
        { t: 'gap', q: 'Wir denken ___ die nächste Besprechung. (Präposition)', a: ['an'], why: 'denken an + Akkusativ.' },
        { t: 'gap', q: 'Ich bin sehr stolz ___ mein Team.', a: ['auf'], why: 'stolz sein auf + Akkusativ.' },
        { t: 'gap', q: '___ interessierst du dich? – Für Fotografie.', a: ['Wofür'], why: 'sich interessieren für + Akk; cosa → Wofür.' },
        { t: 'gap', q: 'Kannst du dich ___ den Termin kümmern?', a: ['um'], why: 'sich kümmern um + Akkusativ.' },
        { t: 'gap', q: 'Wir haben einen Fehler gemacht. Wir sprechen morgen ___. (sprechen über → da-)', a: ['darüber'], why: 'sprechen über + Akk; para una cosa → darüber (da + r + über).' },
        { t: 'order', es: 'Tengo ganas de colaborar contigo.', de: 'Ich freue mich auf die Zusammenarbeit mit dir.', why: 'sich freuen auf + Akk; die Zusammenarbeit es femenino, mit + Dativ (dir).' },
        { t: 'order', es: '¿De qué habéis hablado en la reunión?', de: 'Worüber habt ihr in der Besprechung gesprochen?', why: 'Worüber ocupa la 1ª posición, el verbo auxiliar va en 2ª y el participio al final.' },
        { t: 'order', es: '¿Con quién trabajas en este proyecto?', de: 'Mit wem arbeitest du an diesem Projekt zusammen?', why: 'Mit wem abre la pregunta; la partícula separable zusammen va al final.' },
        { t: 'tr', es: 'Estoy satisfecho con mi equipo.', de: ['Ich bin zufrieden mit meinem Team.'], why: 'zufrieden sein mit + Dativ (dem Team → meinem Team).' },
        { t: 'tr', es: 'Pienso en la reunión de mañana.', de: ['Ich denke an die Besprechung morgen.', 'Ich denke an die morgige Besprechung.'], why: 'denken an + Akkusativ.' },
        { t: 'fix', q: 'Ich warte für den Bus.', a: ['Ich warte auf den Bus.'], why: 'La preposición fija de warten es auf (+ Akk).' },
        { t: 'fix', q: 'Sie hat Angst von dem Chef.', a: ['Sie hat Angst vor dem Chef.'], why: 'Angst haben se construye con vor + Dativ.' },
        { t: 'match', pairs: [['warten auf', 'esperar a'], ['Angst haben vor', 'tener miedo de'], ['sich kümmern um', 'ocuparse de'], ['stolz sein auf', 'estar orgulloso de'], ['zufrieden sein mit', 'estar satisfecho con'], ['teilnehmen an', 'participar en']] }
      ],
      speak: [
        { prompt: 'Describe en 5-6 frases a tu equipo (o a tus compañeros): con quién trabajas, de qué estás orgulloso y de qué te ocupas. Usa verbos y adjetivos con preposición.', model: 'Ich arbeite mit drei Kollegen zusammen. Wir sind ein gutes Team. Ich kümmere mich um die Termine, und Anna kümmert sich um die Aufgaben. Ich bin stolz auf unsere Zusammenarbeit. Wir sind zufrieden mit dem Projekt, aber wir warten noch auf die Antwort vom Kunden.' },
        { prompt: 'Haz cuatro preguntas a un compañero con Worauf / Woran / Worüber / Mit wem y respóndelas tú mismo con darauf / daran / darüber / mit ihm.', model: 'Worauf wartest du? – Ich warte auf die Mail vom Chef. – Woran denkst du? – Ich denke an die Besprechung. – Worüber sprecht ihr? – Wir sprechen darüber morgen. – Mit wem arbeitest du? – Ich arbeite mit Murat zusammen.' },
        { prompt: 'Para uso real: en una reunión, ofrece ayuda, di que entiendes la situación y propón repartir las tareas. 4 frases en voz alta.', model: 'Ich verstehe, was du meinst. Darf ich dir dabei helfen? Ich übernehme die Präsentation. Können wir die Aufgaben gerecht verteilen?' }
      ]
    },
    {
      id: 'a2-18',
      title: 'Trotzdem online',
      es: 'Hábitos con los medios',
      goals: ['Usar trotzdem para expresar una oposición inesperada (verbo en 2ª posición)', 'Distinguir weil, deshalb y trotzdem', 'Describir tus hábitos con los medios y con internet', 'Dar datos imprecisos: ungefähr, etwa, fast, ein paar, mehrere'],
      grammar: [
        {
          h: 'trotzdem: «a pesar de eso, aun así»',
          p: '<b>Trotzdem</b> introduce algo que pasa <b>a pesar de</b> lo dicho antes: <span class="de">Es regnet. Trotzdem gehen wir spazieren.</span> Es un <b>adverbio</b>, no una conjunción, así que ocupa la posición 1 de la frase y el <b>verbo va inmediatamente después</b> (posición 2), como en cualquier oración principal. Va casi siempre en una oración nueva o después de una coma, y el sujeto pasa detrás del verbo.',
          table: { head: ['Parte', 'Ejemplo'], rows: [['Situación', 'Es ist schon spät.'], ['trotzdem (pos. 1)', '<b>Trotzdem</b>'], ['verbo (pos. 2)', '<b>sehen</b>'], ['sujeto + resto', 'wir noch eine Folge.']] },
          ex: [
            { de: 'Es regnet. Trotzdem gehen wir spazieren.', es: 'Llueve. Aun así vamos a pasear.' },
            { de: 'Er ist müde, trotzdem sieht er noch eine Folge.', es: 'Está cansado, aun así ve otro episodio.' },
            { de: 'Das Internet ist langsam. Trotzdem lade ich das Video herunter.', es: 'Internet va lento. Aun así descargo el vídeo.' },
            { de: 'Ich habe wenig Zeit. Trotzdem höre ich jeden Tag einen Podcast.', es: 'Tengo poco tiempo. Aun así escucho un pódcast cada día.' },
            { de: 'Sie hat Fieber, geht aber trotzdem zur Arbeit.', es: 'Tiene fiebre, pero va igualmente al trabajo.' }
          ],
          tip: 'Error muy típico: &quot;Trotzdem ich gehe…&quot;. Tras <b>trotzdem</b> el verbo conjugado va <b>siempre</b> en la posición 2: <i>Trotzdem gehe ich</i>.'
        },
        {
          h: 'weil, deshalb y trotzdem: tres relaciones',
          p: 'Estos tres elementos expresan <b>causa, consecuencia y oposición</b>. <b>Weil</b> es conjunción de subordinada: el verbo va al <b>final</b>. <b>Deshalb</b> (o <i>darum</i>) y <b>trotzdem</b> son adverbios: el verbo va en <b>2ª posición</b>. Deshalb indica consecuencia lógica («por eso»); trotzdem indica una consecuencia que no esperabas («aun así»).',
          table: { head: ['Palabra', 'Relación', 'Posición del verbo', 'Ejemplo'], rows: [['<b>weil</b>', 'causa', 'al final', 'Ich bleibe zu Hause, weil ich krank bin.'], ['<b>deshalb</b>', 'consecuencia', '2ª posición', 'Ich bin krank. Deshalb bleibe ich zu Hause.'], ['<b>trotzdem</b>', 'oposición', '2ª posición', 'Ich bin krank. Trotzdem gehe ich arbeiten.']] },
          ex: [
            { de: 'Ich bleibe online, weil ich auf eine Nachricht warte.', es: 'Sigo conectado porque espero un mensaje.' },
            { de: 'Ich habe mein Passwort vergessen. Deshalb kann ich mich nicht anmelden.', es: 'He olvidado mi contraseña. Por eso no puedo iniciar sesión.' },
            { de: 'Mein Handy ist kaputt. Darum rufe ich dich vom Laptop an.', es: 'Mi móvil está roto. Por eso te llamo desde el portátil.' },
            { de: 'Die App ist kostenlos. Trotzdem benutze ich sie selten.', es: 'La app es gratuita. Aun así la uso poco.' },
            { de: 'Es ist schon spät, trotzdem schaue ich noch ein Video.', es: 'Ya es tarde, aun así veo todavía un vídeo.' }
          ],
          tip: 'Pregúntate: ¿lo que sigue es lo que esperaba? Entonces <b>deshalb</b>. ¿Es lo contrario de lo esperado? Entonces <b>trotzdem</b>. En español ambos se parecen a «por eso» y «aun así».'
        },
        {
          h: 'Describir hábitos: frecuencia y tiempo',
          p: 'Para hablar de hábitos usa <b>adverbios de frecuencia</b> y expresiones temporales. Los adverbios de frecuencia suelen ir detrás del verbo conjugado. Con <b>pro</b> + sustantivo o <b>jeden/jede</b> + sustantivo (Akk) indicas la repetición: <i>zweimal pro Woche, jeden Abend, jede Woche</i>. Con <b>stundenlang</b> o <b>den ganzen Tag</b> indicas duración.',
          table: { head: ['Adverbio', 'Significado', 'Ejemplo'], rows: [['immer', 'siempre', 'Ich bin immer online.'], ['meistens', 'casi siempre', 'Ich sehe meistens abends fern.'], ['oft', 'a menudo', 'Wir chatten oft.'], ['manchmal', 'a veces', 'Ich poste manchmal Fotos.'], ['selten', 'raramente', 'Er liest selten Nachrichten.'], ['nie', 'nunca', 'Sie sieht nie Werbung.']] },
          ex: [
            { de: 'Ich bin fast jeden Tag online.', es: 'Estoy conectado casi todos los días.' },
            { de: 'Ich surfe meistens abends im Internet.', es: 'Casi siempre navego por internet por la noche.' },
            { de: 'Meine Tochter streamt zweimal pro Woche Filme.', es: 'Mi hija ve películas en streaming dos veces por semana.' },
            { de: 'Er sitzt manchmal stundenlang am Handy.', es: 'A veces se pasa horas con el móvil.' },
            { de: 'Ich lese nie Kommentare im Internet.', es: 'Nunca leo comentarios en internet.' }
          ],
          tip: 'En alemán el adverbio de frecuencia va normalmente <b>después del verbo</b>: <i>Ich sehe oft Videos</i>. Si empiezas la frase con el adverbio, el sujeto pasa detrás del verbo: <i>Oft sehe ich Videos</i>.'
        },
        {
          h: 'Datos imprecisos: ungefähr, etwa, fast, ein paar, mehrere',
          p: 'Para dar cantidades aproximadas: <b>ungefähr / etwa / circa (ca.)</b> = aproximadamente, delante de la cifra; <b>fast / knapp</b> = casi, un poco menos; <b>mehr als / weniger als</b>; <b>ein paar</b> = unos cuantos (invariable); <b>einige / mehrere / viele / wenige</b> = varios / muchos / pocos (se declinan como un adjetivo plural). Con cantidades indefinidas en plural no se usa artículo: <i>mehrere Apps, ein paar Videos</i>.',
          table: { head: ['Expresión', 'Significado', 'Ejemplo'], rows: [['ungefähr / etwa / ca.', 'aproximadamente', 'Das Video dauert ungefähr 20 Minuten.'], ['fast / knapp', 'casi', 'Ich bin fast zwei Stunden online.'], ['mehr als / weniger als', 'más de / menos de', 'Er hat mehr als hundert Follower.'], ['ein paar', 'unos pocos, unos cuantos', 'Ich habe ein paar Minuten Zeit.'], ['einige / mehrere', 'algunos / varios', 'Sie hat mehrere Apps auf dem Handy.']] },
          ex: [
            { de: 'Der Podcast dauert ungefähr dreißig Minuten.', es: 'El pódcast dura aproximadamente treinta minutos.' },
            { de: 'Ich bin täglich etwa zwei Stunden im Internet.', es: 'Estoy en internet unas dos horas al día.' },
            { de: 'Hast du ein paar Minuten Zeit?', es: '¿Tienes unos minutos?' },
            { de: 'Mein Bruder hat mehrere Konten bei sozialen Netzwerken.', es: 'Mi hermano tiene varias cuentas en redes sociales.' },
            { de: 'Fast alle meine Freunde benutzen diese App.', es: 'Casi todos mis amigos usan esta app.' }
          ],
          tip: '<b>ein paar</b> (con minúscula, dos palabras) significa «unos cuantos». <b>ein Paar</b> (con mayúscula) es «una pareja / un par». Distínguelos bien al escribir.'
        }
      ],
      vocab: [
        { de: 'das Internet', es: 'internet', ex: 'Ohne Internet kann ich nicht arbeiten.', exes: 'Sin internet no puedo trabajar.' },
        { de: 'die Website', pl: 'die Websites', es: 'el sitio web', ex: 'Auf der Website findest du alle Informationen.', exes: 'En el sitio web encuentras toda la información.' },
        { de: 'die App', pl: 'die Apps', es: 'la aplicación', ex: 'Ich benutze eine App für Sprachen.', exes: 'Uso una aplicación para idiomas.' },
        { de: 'die Nachricht', pl: 'die Nachrichten', es: 'el mensaje (pl.: las noticias)', ex: 'Ich habe dir eine Nachricht geschickt.', exes: 'Te he enviado un mensaje.' },
        { de: 'der Podcast', pl: 'die Podcasts', es: 'el pódcast', ex: 'Im Zug höre ich gern einen Podcast.', exes: 'En el tren me gusta escuchar un pódcast.' },
        { de: 'das soziale Netzwerk', pl: 'die sozialen Netzwerke', es: 'la red social', ex: 'Meine Eltern benutzen kein soziales Netzwerk.', exes: 'Mis padres no usan ninguna red social.' },
        { de: 'das Passwort', pl: 'die Passwörter', es: 'la contraseña', ex: 'Du solltest ein sicheres Passwort wählen.', exes: 'Deberías elegir una contraseña segura.' },
        { de: 'das Konto', pl: 'die Konten', es: 'la cuenta', ex: 'Ich habe ein Konto bei einem Streamingdienst.', exes: 'Tengo una cuenta en un servicio de streaming.' },
        { de: 'das Video', pl: 'die Videos', es: 'el vídeo', ex: 'Das Video hat schon viele Aufrufe.', exes: 'El vídeo ya tiene muchas visualizaciones.' },
        { de: 'surfen', es: 'navegar (por internet)', ex: 'Abends surfe ich gern ein bisschen im Netz.', exes: 'Por las tardes me gusta navegar un poco por la red.' },
        { de: 'streamen', es: 'ver o escuchar en streaming', ex: 'Wir streamen am Wochenende einen Film.', exes: 'El fin de semana vemos una película en streaming.' },
        { de: 'posten', es: 'publicar (en redes)', ex: 'Ich poste selten Fotos von mir.', exes: 'Rara vez publico fotos mías.' },
        { de: 'herunter|laden', es: 'descargar', note: 'lädt herunter – lud herunter – hat heruntergeladen', ex: 'Ich lade die Folge herunter und sehe sie im Zug.', exes: 'Descargo el episodio y lo veo en el tren.' },
        { de: 'chatten', es: 'chatear', ex: 'Meine Freundin und ich chatten jeden Abend.', exes: 'Mi amiga y yo chateamos cada noche.' },
        { de: 'googeln', es: 'buscar en Google', ex: 'Ich googele das Wort schnell.', exes: 'Busco rápidamente la palabra en Google.' },
        { de: 'teilen', es: 'compartir', ex: 'Kannst du mir den Link teilen?', exes: '¿Puedes compartirme el enlace?' },
        { de: 'sich an|melden', es: 'iniciar sesión, registrarse', ex: 'Ich melde mich mit meinem Passwort an.', exes: 'Inicio sesión con mi contraseña.' },
        { de: 'online', es: 'en línea, conectado', ex: 'Bist du heute Abend online?', exes: '¿Estás conectado esta noche?' },
        { de: 'kostenlos', es: 'gratis', ex: 'Die App ist kostenlos, aber mit Werbung.', exes: 'La app es gratis, pero con publicidad.' },
        { de: 'ständig', es: 'constantemente', ex: 'Mein Bruder ist ständig am Handy.', exes: 'Mi hermano está constantemente con el móvil.' },
        { de: 'der Beitrag', pl: 'die Beiträge', es: 'la publicación, la entrada', ex: 'Dein Beitrag hat viele Likes bekommen.', exes: 'Tu publicación ha recibido muchos likes.' }
      ],
      phrases: [
        { de: 'Es ist schon spät. Trotzdem …', es: 'Ya es tarde. Aun así …', use: 'oponer' },
        { de: 'Ich bin täglich etwa zwei Stunden online.', es: 'Estoy en línea unas dos horas al día.', use: 'hábitos' },
        { de: 'Ich benutze das Internet vor allem für …', es: 'Uso internet sobre todo para …', use: 'hábitos' },
        { de: 'Ich schaue fast jeden Abend eine Folge.', es: 'Veo un episodio casi cada noche.', use: 'frecuencia' },
        { de: 'Ich habe ungefähr … Apps auf dem Handy.', es: 'Tengo más o menos … apps en el móvil.', use: 'cantidad' },
        { de: 'Das weiß ich nicht genau, vielleicht ungefähr …', es: 'No lo sé con exactitud, quizá unos …', use: 'aproximar' },
        { de: 'Ich habe mich im Netz angemeldet.', es: 'Me he registrado en la web.', use: 'contar' },
        { de: 'Hast du ein paar Minuten Zeit?', es: '¿Tienes unos minutos?', use: 'pedir tiempo' },
        { de: 'Ich lese mehrere Nachrichten pro Tag.', es: 'Leo varios mensajes al día.', use: 'cantidad' },
        { de: 'Das ist mir zu viel Zeit am Handy.', es: 'Es demasiado tiempo con el móvil para mí.', use: 'opinar' }
      ],
      dialog: {
        title: 'Wie viel Zeit verbringst du online?',
        lines: [
          { s: 'A', de: 'Sag mal, Nina, wie oft bist du eigentlich online?', es: 'Dime, Nina, ¿con qué frecuencia estás realmente conectada?' },
          { s: 'B', de: 'Ehrlich gesagt, fast jeden Tag. Ungefähr drei Stunden am Tag.', es: 'Sinceramente, casi todos los días. Aproximadamente tres horas al día.' },
          { s: 'A', de: 'Drei Stunden! Was machst du denn so lange?', es: '¡Tres horas! ¿Y qué haces durante tanto tiempo?' },
          { s: 'B', de: 'Ich chatte mit Freunden, höre einen Podcast und streame manchmal eine Serie.', es: 'Chateo con amigos, escucho un pódcast y a veces veo una serie en streaming.' },
          { s: 'A', de: 'Hast du auch ein paar soziale Netzwerke?', es: '¿Tienes también unas cuantas redes sociales?' },
          { s: 'B', de: 'Ja, mehrere. Aber ich poste selten etwas.', es: 'Sí, varias. Pero rara vez publico algo.' },
          { s: 'A', de: 'Ich habe nur wenig Zeit, deshalb bin ich selten online.', es: 'Yo tengo poco tiempo, por eso estoy poco conectado.' },
          { s: 'B', de: 'Bei mir ist es anders. Ich habe viel Arbeit, trotzdem bin ich abends lange im Netz.', es: 'En mi caso es distinto. Tengo mucho trabajo, aun así estoy mucho tiempo en la red por las noches.' },
          { s: 'A', de: 'Das klingt anstrengend. Du solltest dich ein bisschen besser erholen.', es: 'Eso suena agotador. Deberías descansar un poco mejor.' },
          { s: 'B', de: 'Du hast recht. Vielleicht lade ich nächste Woche die Apps herunter und teste ein neues Programm.', es: 'Tienes razón. Quizá la semana que viene me descargue las apps y pruebe un programa nuevo.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Es regnet. ___ gehen wir joggen.', o: ['Trotzdem', 'Weil', 'Deshalb'], a: 0, why: 'Hacer deporte con lluvia es lo inesperado → trotzdem (aun así).' },
        { t: 'mc', q: 'Ich bin krank, ___ bleibe ich im Bett.', o: ['deshalb', 'trotzdem', 'obwohl'], a: 0, why: 'Estar enfermo es la causa lógica de quedarse en cama → deshalb.' },
        { t: 'mc', q: 'Welcher Satz ist richtig?', o: ['Es ist spät. Trotzdem ich arbeite noch.', 'Es ist spät. Trotzdem arbeite ich noch.', 'Es ist spät. Trotzdem ich noch arbeite.'], a: 1, why: 'Tras trotzdem (posición 1) el verbo va en la posición 2.' },
        { t: 'mc', q: 'Anna hat wenig Zeit. ___ hört sie jeden Tag einen Podcast.', o: ['Deshalb', 'Weil', 'Trotzdem'], a: 2, why: 'Tener poco tiempo y aun así escuchar el pódcast es una oposición → trotzdem.' },
        { t: 'mc', q: 'Ich schaue ___ eine Stunde Videos.', o: ['mehrere', 'ein paar', 'ungefähr'], a: 2, why: 'Delante de una cifra, la aproximación es ungefähr; mehrere y ein paar necesitan un plural.' },
        { t: 'mc', q: 'Mein Bruder hat ___ Freunde, die oft online spielen.', o: ['mehrere', 'ungefähr', 'etwa'], a: 0, why: 'Con un plural sin artículo se usa mehrere (varios); ungefähr y etwa acompañan a cifras.' },
        { t: 'gap', q: 'Es ist schon spät. Wir sehen ___ noch eine Folge. (aun así)', a: ['trotzdem'], why: 'Oposición inesperada → trotzdem; el verbo sehen queda en 2ª posición.' },
        { t: 'gap', q: 'Ich habe mein Passwort vergessen. ___ kann ich mich nicht anmelden. (por eso)', a: ['deshalb', 'darum'], why: 'Consecuencia lógica → deshalb o darum; el verbo kann va en 2ª posición.' },
        { t: 'gap', q: 'Der Podcast dauert ___ dreißig Minuten. (ungefähr)', a: ['ungefähr', 'etwa', 'circa', 'ca'], why: 'Para una cantidad aproximada se usa ungefähr, etwa o circa antes de la cifra.' },
        { t: 'gap', q: 'Hast du ___ Minuten Zeit für mich? (unos cuantos)', a: ['ein paar', 'einige'], why: 'ein paar o einige = unos cuantos, con un plural sin artículo.' },
        { t: 'gap', q: 'Ich bin ___ jeden Tag online. (casi)', a: ['fast', 'beinahe'], why: 'fast = casi, y se coloca delante de jeden Tag.' },
        { t: 'order', es: 'Llueve, por eso nos quedamos en casa.', de: 'Es regnet, deshalb bleiben wir zu Hause.', why: 'Deshalb ocupa la posición 1 de la segunda oración y el verbo conjugado va en 2ª posición.' },
        { t: 'order', es: 'Está cansado, aun así ve otro episodio.', de: 'Er ist müde, trotzdem schaut er noch eine Folge.', why: 'Tras trotzdem el verbo va en 2ª posición y el sujeto pasa detrás.' },
        { t: 'order', es: 'Sigo conectado porque espero un mensaje.', de: 'Ich bleibe online, weil ich auf eine Nachricht warte.', why: 'weil introduce una subordinada: el verbo conjugado (warte) va al final.' },
        { t: 'tr', es: 'Estoy cansada, aun así veo una serie.', de: ['Ich bin müde, trotzdem sehe ich eine Serie.', 'Ich bin müde. Trotzdem sehe ich eine Serie.', 'Ich bin müde, trotzdem schaue ich eine Serie.'], why: 'Trotzdem + verbo + sujeto.' },
        { t: 'tr', es: 'Veo unas dos horas de vídeos al día.', de: ['Ich schaue täglich ungefähr zwei Stunden Videos.', 'Ich sehe jeden Tag etwa zwei Stunden Videos.', 'Ich schaue jeden Tag ungefähr zwei Stunden Videos.'], why: 'ungefähr/etwa + cifra; täglich o jeden Tag para «al día».' },
        { t: 'fix', q: 'Es ist spät. Trotzdem ich arbeite noch.', a: ['Es ist spät. Trotzdem arbeite ich noch.'], why: 'Tras trotzdem el verbo va en 2ª posición: Trotzdem arbeite ich.' },
        { t: 'fix', q: 'Ich bin krank, deshalb ich bleibe zu Hause.', a: ['Ich bin krank, deshalb bleibe ich zu Hause.'], why: 'Deshalb también ocupa la posición 1; el verbo va justo detrás.' },
        { t: 'match', pairs: [['der Podcast', 'el pódcast'], ['das Passwort', 'la contraseña'], ['herunterladen', 'descargar'], ['teilen', 'compartir'], ['kostenlos', 'gratis'], ['sich anmelden', 'iniciar sesión']] }
      ],
      speak: [
        { prompt: 'Describe tus hábitos con internet y los medios en 5-6 frases: cuánto tiempo estás conectado, qué haces y con qué frecuencia. Usa al menos tres expresiones imprecisas (ungefähr, fast, ein paar, mehrere…).', model: 'Ich bin täglich ungefähr zwei Stunden im Internet. Morgens lese ich ein paar Nachrichten. Abends höre ich meistens einen Podcast oder sehe eine Serie. Ich habe mehrere Apps, aber ich benutze fast nur drei. Ich poste selten Fotos.' },
        { prompt: 'Cuenta tres cosas que haces a pesar de que no deberías (por cansancio, falta de tiempo…). Usa trotzdem en cada frase.', model: 'Ich bin müde. Trotzdem sehe ich noch eine Folge. Ich habe viel Arbeit. Trotzdem chatte ich mit Freunden. Es ist schon spät. Trotzdem surfe ich noch im Internet.' },
        { prompt: 'Para uso real: explica en voz alta por qué usas (o no usas) una red social, con weil, deshalb y trotzdem en una frase cada uno.', model: 'Ich benutze nur ein soziales Netzwerk, weil ich wenig Zeit habe. Ich habe wenig Zeit, deshalb poste ich selten. Es ist nicht mein Lieblingsnetzwerk, trotzdem bin ich dort fast jeden Tag.' }
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m7',
  level: 'A2',
  num: 7,
  title: 'Vida, trabajo y compromiso',
  emoji: '🌱',
  lessons: [
    {
      id: 'a2-19',
      title: 'Das hätte ich nicht gedacht!',
      es: 'Experiencias de vida y sorpresas',
      goals: [
        'Usar el Präteritum de los verbos modales (konnte, musste, wollte...)',
        'Elegir entre Präteritum y Perfekt al hablar del pasado',
        'Expresar sorpresa y comentar noticias',
        'Hablar de acontecimientos importantes de la vida'
      ],
      grammar: [
        {
          h: 'Präteritum de los verbos modales',
          p: 'Para hablar del pasado con un verbo modal casi siempre se usa el <b>Präteritum</b>, no el Perfekt. Se forma con la raíz + <b>-te</b> + terminación, y <b>se pierde el Umlaut</b> del infinitivo: <span class="de">können → konnte</span>. En <i>ich</i> y <i>er/sie/es</i> la forma es idéntica y no lleva terminación. El verbo <i>mögen</i> cambia a <span class="de">mochte</span>. Para "quería" también se usa <span class="de">wollte</span>; <i>möchte</i> no tiene Präteritum propio.',
          table: {
            head: ['Persona', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'mögen'],
            rows: [
              ['ich', '<b>konnte</b>', '<b>musste</b>', '<b>wollte</b>', '<b>durfte</b>', '<b>sollte</b>', '<b>mochte</b>'],
              ['du', 'konntest', 'musstest', 'wolltest', 'durftest', 'solltest', 'mochtest'],
              ['er/sie/es', '<b>konnte</b>', '<b>musste</b>', '<b>wollte</b>', '<b>durfte</b>', '<b>sollte</b>', '<b>mochte</b>'],
              ['wir', 'konnten', 'mussten', 'wollten', 'durften', 'sollten', 'mochten'],
              ['ihr', 'konntet', 'musstet', 'wolltet', 'durftet', 'solltet', 'mochtet'],
              ['sie/Sie', 'konnten', 'mussten', 'wollten', 'durften', 'sollten', 'mochten']
            ]
          },
          ex: [
            {de: 'Als Kind konnte ich nicht schwimmen.', es: 'De niño no sabía nadar.'},
            {de: 'Mein Vater musste früh aufstehen.', es: 'Mi padre tenía que levantarse temprano.'},
            {de: 'Wir wollten ins Kino gehen, aber es war zu spät.', es: 'Queríamos ir al cine, pero era demasiado tarde.'},
            {de: 'Du durftest damals nicht allein reisen.', es: 'En esa época no podías viajar solo (no tenías permiso).'},
            {de: 'Früher mochte ich keinen Fisch.', es: 'Antes no me gustaba el pescado.'}
          ],
          tip: 'Ojo: <span class="de">konnte</span> (pasado) no es lo mismo que <span class="de">könnte</span> (Konjunktiv II, "podría"). Sin Umlaut = pasado real.'
        },
        {
          h: 'Präteritum o Perfekt al hablar',
          p: 'Regla práctica para la lengua hablada: con <b>sein, haben y los verbos modales</b> se usa el Präteritum (<span class="de">ich war, ich hatte, ich musste</span>); con casi todos los demás verbos se usa el <b>Perfekt</b> (<span class="de">ich bin gefahren, ich habe gekauft</span>). En textos escritos (biografías, cuentos) se usa el Präteritum para todo. En oraciones subordinadas el verbo conjugado va al final: <span class="de">weil ich arbeiten musste</span>.',
          ex: [
            {de: 'Gestern bin ich zu spät gekommen, denn ich musste noch arbeiten.', es: 'Ayer llegué tarde porque todavía tenía que trabajar.'},
            {de: 'Ich war krank und konnte nicht zur Party gehen.', es: 'Estaba enfermo y no pude ir a la fiesta.'},
            {de: 'Wir hatten kein Auto, deshalb mussten wir den Bus nehmen.', es: 'No teníamos coche, por eso tuvimos que tomar el autobús.'},
            {de: 'Sie kam spät, weil sie lange warten musste.', es: 'Llegó tarde porque tuvo que esperar mucho.'},
            {de: 'Ich habe gestern Pizza gegessen und wollte danach spazieren gehen.', es: 'Ayer comí pizza y después quería ir a pasear.'}
          ],
          tip: 'No digas <span class="de">ich habe gekonnt</span> o <span class="de">ich habe gemusst</span>: en la práctica se dice <span class="de">ich konnte / ich musste</span>.'
        },
        {
          h: 'Expresar sorpresa y comentar',
          p: 'Cuando alguien cuenta una noticia puedes reaccionar con sorpresa. <span class="de">Das hätte ich nicht gedacht!</span> significa "no lo habría pensado"; <i>hätte</i> es una forma fija (Konjunktiv II) que por ahora basta con aprender completa. Para añadir tu comentario sobre algo ya pasado, usa el Präteritum de sein, haben y los modales: <span class="de">Ich konnte es kaum glauben.</span>',
          table: {
            head: ['Expresión', 'Significado'],
            rows: [
              ['Echt? / Wirklich?', '¿En serio?'],
              ['Das hätte ich nicht gedacht!', '¡No lo habría pensado!'],
              ['Das ist ja unglaublich!', '¡Es increíble!'],
              ['Was für eine Überraschung!', '¡Qué sorpresa!'],
              ['Kein Wunder!', '¡No me extraña!'],
              ['Das gibt es doch nicht!', '¡No puede ser!']
            ]
          },
          ex: [
            {de: 'Du hast im Lotto gewonnen? Das hätte ich nicht gedacht!', es: '¿Ganaste en la lotería? ¡No lo habría pensado!'},
            {de: 'Lena heiratet schon? Echt?', es: '¿Lena ya se casa? ¿En serio?'},
            {de: 'Er hat die Prüfung nicht bestanden? Kein Wunder, er hat nie gelernt.', es: '¿No aprobó el examen? No me extraña, nunca estudió.'},
            {de: 'Das ist ja unglaublich! Wann ist das passiert?', es: '¡Es increíble! ¿Cuándo pasó?'},
            {de: 'Ich konnte es kaum glauben, als ich die Nachricht las.', es: 'Apenas podía creerlo cuando leí la noticia.'}
          ],
          tip: 'Una sorpresa positiva suele sonar con entonación ascendente: <span class="de">Echt?!</span> Si la noticia es mala, añade <span class="de">Das tut mir leid.</span>'
        }
      ],
      vocab: [
        {de: 'das Ereignis', pl: 'die Ereignisse', es: 'el acontecimiento', ex: 'Die Hochzeit war das schönste Ereignis des Jahres.', exes: 'La boda fue el acontecimiento más bonito del año.'},
        {de: 'die Hochzeit', pl: 'die Hochzeiten', es: 'la boda', ex: 'Auf der Hochzeit meiner Schwester haben wir bis spät getanzt.', exes: 'En la boda de mi hermana bailamos hasta tarde.'},
        {de: 'die Geburt', pl: 'die Geburten', es: 'el nacimiento', ex: 'Nach der Geburt ihres Sohnes blieb Julia ein Jahr zu Hause.', exes: 'Después del nacimiento de su hijo, Julia se quedó un año en casa.'},
        {de: 'der Umzug', pl: 'die Umzüge', es: 'la mudanza', ex: 'Beim Umzug haben uns viele Freunde geholfen.', exes: 'En la mudanza nos ayudaron muchos amigos.'},
        {de: 'der Abschluss', pl: 'die Abschlüsse', es: 'el título, la graduación', ex: 'Nach dem Abschluss reiste Tim drei Monate durch Asien.', exes: 'Después de graduarse, Tim viajó tres meses por Asia.'},
        {de: 'die Prüfung', pl: 'die Prüfungen', es: 'el examen', ex: 'Ich war sehr nervös vor der Prüfung.', exes: 'Estaba muy nervioso antes del examen.'},
        {de: 'das Glück', es: 'la suerte, la felicidad', ex: 'Wir hatten Glück und bekamen noch Karten.', exes: 'Tuvimos suerte y todavía conseguimos entradas.'},
        {de: 'der Zufall', pl: 'die Zufälle', es: 'la casualidad', ex: 'Ich habe meinen Mann durch Zufall kennengelernt.', exes: 'Conocí a mi marido por casualidad.'},
        {de: 'die Überraschung', pl: 'die Überraschungen', es: 'la sorpresa', ex: 'Die Party war eine tolle Überraschung für mich.', exes: 'La fiesta fue una sorpresa estupenda para mí.'},
        {de: 'die Einladung', pl: 'die Einladungen', es: 'la invitación', ex: 'Ich habe eine Einladung zur Hochzeit bekommen.', exes: 'Recibí una invitación para la boda.'},
        {de: 'das Fest', pl: 'die Feste', es: 'la fiesta, la celebración', ex: 'Zum Fest kamen fast fünfzig Gäste.', exes: 'A la fiesta vinieron casi cincuenta invitados.'},
        {de: 'heiraten', es: 'casarse', note: 'heiratet – heiratete – hat geheiratet', ex: 'Meine Eltern haben vor dreißig Jahren geheiratet.', exes: 'Mis padres se casaron hace treinta años.'},
        {de: 'sich verlieben', es: 'enamorarse (de)', note: 'verliebt sich (in + Akk) – hat sich verliebt', ex: 'Sie hat sich in einen Kollegen verliebt.', exes: 'Se enamoró de un compañero de trabajo.'},
        {de: 'sich trennen', es: 'separarse (de)', note: 'trennt sich (von + Dat) – hat sich getrennt', ex: 'Nach drei Jahren trennten sie sich.', exes: 'Después de tres años se separaron.'},
        {de: 'um|ziehen', es: 'mudarse', note: 'zieht um – zog um – ist umgezogen', ex: 'Wir sind letztes Jahr nach Hamburg umgezogen.', exes: 'El año pasado nos mudamos a Hamburgo.'},
        {de: 'bestehen', es: 'aprobar (un examen)', note: 'besteht – bestand – hat bestanden', ex: 'Zum Glück habe ich die Prüfung bestanden.', exes: 'Por suerte aprobé el examen.'},
        {de: 'feiern', es: 'celebrar', ex: 'Wir feiern meinen Geburtstag im Garten.', exes: 'Celebramos mi cumpleaños en el jardín.'},
        {de: 'gratulieren', es: 'felicitar', ex: 'Alle haben ihm zum Abschluss gratuliert.', exes: 'Todos lo felicitaron por su título.'},
        {de: 'plötzlich', es: 'de repente', ex: 'Plötzlich klingelte das Telefon.', exes: 'De repente sonó el teléfono.'},
        {de: 'in Rente gehen', es: 'jubilarse', note: 'geht in Rente – ging in Rente – ist in Rente gegangen', ex: 'Mein Opa ist mit 65 in Rente gegangen.', exes: 'Mi abuelo se jubiló a los 65.'}
      ],
      phrases: [
        {de: 'Das hätte ich nicht gedacht!', es: '¡No lo habría pensado!', use: 'sorpresa'},
        {de: 'Echt? / Wirklich?', es: '¿En serio?', use: 'sorpresa'},
        {de: 'Das ist ja unglaublich!', es: '¡Es increíble!', use: 'sorpresa'},
        {de: 'Was für eine Überraschung!', es: '¡Qué sorpresa!', use: 'sorpresa'},
        {de: 'Kein Wunder!', es: '¡No me extraña!', use: 'comentar'},
        {de: 'Ich konnte es kaum glauben.', es: 'Apenas podía creerlo.', use: 'comentar'},
        {de: 'Herzlichen Glückwunsch!', es: '¡Felicidades!', use: 'felicitar'},
        {de: 'Damals wollte ich unbedingt …', es: 'En aquella época quería a toda costa …', use: 'contar'},
        {de: 'Stell dir vor: …', es: 'Imagínate: …', use: 'contar noticias'}
      ],
      dialog: {
        title: 'Noticias de un viejo amigo',
        lines: [
          {s: 'A', de: 'Hallo Tim! Ich habe gehört, du bist umgezogen. Stimmt das?', es: '¡Hola Tim! Me enteré de que te mudaste. ¿Es verdad?'},
          {s: 'B', de: 'Ja, im Mai. Ich wollte schon lange in eine größere Wohnung, aber ich konnte lange keine finden.', es: 'Sí, en mayo. Hacía tiempo que quería un piso más grande, pero durante mucho tiempo no pude encontrar ninguno.'},
          {s: 'A', de: 'Und wie hast du dann diese gefunden?', es: '¿Y cómo encontraste entonces este?'},
          {s: 'B', de: 'Durch Zufall! Ein Kollege musste plötzlich ins Ausland und durfte die Wohnung nicht behalten.', es: '¡Por casualidad! Un compañero tuvo que irse de repente al extranjero y no podía quedarse con el piso.'},
          {s: 'A', de: 'Das hätte ich nicht gedacht! So ein Glück!', es: '¡No lo habría pensado! ¡Qué suerte!'},
          {s: 'B', de: 'Und stell dir vor: Am Umzugstag habe ich Lena wiedergetroffen. Wir hatten uns zehn Jahre nicht gesehen.', es: 'Y imagínate: el día de la mudanza me reencontré con Lena. Llevábamos diez años sin vernos.'},
          {s: 'A', de: 'Echt? Die Lena aus unserer Schule? Das ist ja unglaublich!', es: '¿En serio? ¿La Lena de nuestro colegio? ¡Es increíble!'},
          {s: 'B', de: 'Sie wohnt jetzt im selben Haus! Sie war genauso überrascht wie ich.', es: '¡Ahora vive en el mismo edificio! Estaba tan sorprendida como yo.'},
          {s: 'A', de: 'Kein Wunder! Ihr müsst unbedingt feiern.', es: '¡No me extraña! Tienen que celebrarlo sin falta.'},
          {s: 'B', de: 'Machen wir. Am Samstag gibt es ein kleines Fest. Du darfst gern kommen.', es: 'Lo haremos. El sábado hay una fiestecita. Puedes venir si quieres.'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Als Kind ___ ich nicht schwimmen.', o: ['konnte', 'konnten', 'konntest'], a: 0, why: 'Con ich el Präteritum de können es konnte, sin terminación.'},
        {t: 'mc', q: 'Gestern ___ wir lange auf den Bus warten.', o: ['musste', 'mussten', 'musstet'], a: 1, why: 'Con wir el Präteritum de müssen es mussten.'},
        {t: 'mc', q: 'Du ___ damals noch nicht allein verreisen.', o: ['durften', 'durfte', 'durftest'], a: 2, why: 'Con du el Präteritum lleva -st: durftest.'},
        {t: 'mc', q: 'Du hast im Lotto gewonnen? ___', o: ['Das hätte ich nicht gedacht!', 'Das würde ich nicht gedacht!', 'Das wäre ich nicht gedacht!'], a: 0, why: 'La expresión fija de sorpresa es Das hätte ich nicht gedacht!'},
        {t: 'mc', q: 'Mein Bruder ___ Pilot werden, aber er hat Informatik studiert.', o: ['wollten', 'wollte', 'wolltest'], a: 1, why: 'Con er/sie/es el Präteritum de wollen es wollte.'},
        {t: 'mc', q: 'Früher ___ ich keinen Fisch, heute esse ich ihn gern.', o: ['mochten', 'mögte', 'mochte'], a: 2, why: 'El Präteritum de mögen es mochte (g cambia a ch).'},
        {t: 'gap', q: 'Als Kind ___ ich nie lange fernsehen. (dürfen)', a: ['durfte'], why: 'Präteritum de dürfen con ich: durfte, sin Umlaut.'},
        {t: 'gap', q: 'Wir ___ gestern bis acht Uhr arbeiten, deshalb sind wir so müde. (müssen)', a: ['mussten'], why: 'Präteritum de müssen con wir: mussten.'},
        {t: 'gap', q: 'Ihr ___ mir damals helfen, aber ihr hattet keine Zeit. (wollen)', a: ['wolltet'], why: 'Con ihr el Präteritum lleva -t: wolltet.'},
        {t: 'gap', q: 'Du ___ gestern deine Oma anrufen. Hast du das vergessen? (sollen)', a: ['solltest'], why: 'Con du el Präteritum lleva -st: solltest.'},
        {t: 'order', es: 'Ich kam zu spät, weil ich arbeiten musste.', de: 'Ich kam zu spät, weil ich arbeiten musste.', why: 'Después de weil el verbo conjugado (musste) va al final.'},
        {t: 'order', es: '¿Por qué no pudiste venir ayer?', de: 'Warum konntest du gestern nicht kommen?', why: 'Pregunta con palabra interrogativa: verbo conjugado en segunda posición; nicht va antes del infinitivo.'},
        {t: 'order', es: 'Apenas podíamos creerlo, pero era verdad.', de: 'Wir konnten es kaum glauben, aber es stimmte.', why: 'Modal en Präteritum en segunda posición e infinitivo al final de la primera oración.'},
        {t: 'tr', es: 'De niño no sabía nadar.', de: ['Als Kind konnte ich nicht schwimmen.', 'Als ich ein Kind war, konnte ich nicht schwimmen.', 'Als ich klein war, konnte ich nicht schwimmen.'], why: ''},
        {t: 'tr', es: 'Ayer tuvimos que trabajar hasta las ocho.', de: ['Gestern mussten wir bis acht Uhr arbeiten.', 'Wir mussten gestern bis acht Uhr arbeiten.', 'Gestern mussten wir bis um acht Uhr arbeiten.'], why: ''},
        {t: 'fix', q: 'Wir konnte gestern nicht kommen.', a: ['Wir konnten gestern nicht kommen.'], why: 'Con wir la forma es konnten, no konnte.'},
        {t: 'fix', q: 'Als Kind ich durfte nie lange aufbleiben.', a: ['Als Kind durfte ich nie lange aufbleiben.'], why: 'Tras la expresión inicial el verbo conjugado debe ir en segunda posición.'},
        {t: 'match', pairs: [['die Hochzeit', 'la boda'], ['die Geburt', 'el nacimiento'], ['der Umzug', 'la mudanza'], ['die Prüfung', 'el examen'], ['der Zufall', 'la casualidad'], ['plötzlich', 'de repente']]}
      ],
      speak: [
        {prompt: 'Cuenta un acontecimiento importante de tu vida (una mudanza, un viaje, un cambio de trabajo). Usa konnte, musste o wollte al menos dos veces (5-6 frases).', model: 'Vor drei Jahren bin ich in eine andere Stadt umgezogen. Ich wollte näher bei meiner Familie wohnen. Zuerst konnte ich keine Wohnung finden, und ich musste lange suchen. Dann habe ich durch Zufall ein schönes Zimmer gesehen. Ich war sehr glücklich und konnte es kaum glauben.'},
        {prompt: 'Cuenta qué querías hacer de niño y qué no podías o no te permitían (4-5 frases con wollte, durfte, konnte).', model: 'Als Kind wollte ich immer lange fernsehen, aber ich durfte nicht. Ich musste um acht Uhr ins Bett gehen. Ich konnte noch nicht Fahrrad fahren, aber ich wollte es unbedingt lernen. Mein Opa hat es mir gezeigt.'},
        {prompt: 'Uso real (en voz alta): un amigo te cuenta una buena noticia. Reacciona con sorpresa, felicítalo y haz una pregunta (4-5 frases).', model: 'Du hast eine neue Wohnung? Echt? Das hätte ich nicht gedacht! Herzlichen Glückwunsch! Wann ziehst du denn um? Ich helfe dir gern beim Umzug.'}
      ]
    },
    {
      id: 'a2-20',
      title: 'Neuer Job, neuer Weg',
      es: 'Cambios laborales y de camino',
      goals: [
        'Describir recorridos con an … vorbei, durch y um … herum',
        'Indicar la posición con gegenüber (von)',
        'Formar nombres de profesión con -er / -erin',
        'Expresar descontento y satisfacción en el trabajo'
      ],
      grammar: [
        {
          h: 'Preposiciones locales con Dativ: an … vorbei, gegenüber (von)',
          p: '<b>an + Dativ … vorbei</b> significa "pasar por delante de": <span class="de">Ich fahre am Bahnhof vorbei.</span> La preposición va delante del sustantivo y <i>vorbei</i> al final de la oración. Si el verbo es separable, <i>vorbei</i> funciona como prefijo: <span class="de">vorbeigehen, vorbeifahren</span>. <b>gegenüber von + Dativ</b> significa "enfrente de": <span class="de">Das Café liegt gegenüber vom Bahnhof.</span> (<i>von dem</i> se contrae en <i>vom</i>; <i>an dem</i> en <i>am</i>.)',
          table: {
            head: ['Preposición', 'Caso', 'Ejemplo'],
            rows: [
              ['an … vorbei', 'Dativ', 'Wir gehen <b>an der</b> Schule <b>vorbei</b>.'],
              ['an … vorbei', 'Dativ', 'Der Bus fährt <b>am</b> Park <b>vorbei</b>.'],
              ['gegenüber von', 'Dativ', 'Die Bank ist <b>gegenüber von der</b> Post.'],
              ['gegenüber von', 'Dativ', 'Das Hotel liegt <b>gegenüber vom</b> Bahnhof.']
            ]
          },
          ex: [
            {de: 'Jeden Morgen fahre ich am Supermarkt vorbei.', es: 'Cada mañana paso por delante del supermercado.'},
            {de: 'Gehen Sie an der Kirche vorbei und dann links.', es: 'Pase por delante de la iglesia y luego a la izquierda.'},
            {de: 'Die Apotheke ist gegenüber von der Bäckerei.', es: 'La farmacia está enfrente de la panadería.'},
            {de: 'Mein Büro liegt gegenüber vom Bahnhof.', es: 'Mi oficina está enfrente de la estación.'},
            {de: 'Der Zug fuhr am Dorf vorbei, ohne zu halten.', es: 'El tren pasó junto al pueblo sin detenerse.'}
          ],
          tip: 'En español "pasar por delante de" lleva la preposición delante; en alemán se parte en dos: <span class="de">an</span> + sustantivo + <span class="de">vorbei</span>.'
        },
        {
          h: 'Preposiciones locales con Akkusativ: durch, um … (herum)',
          p: '<b>durch + Akkusativ</b> = "a través de, por dentro de": <span class="de">Wir laufen durch den Park.</span> <b>um + Akkusativ (… herum)</b> = "alrededor de": <span class="de">Er fährt um den See (herum).</span> La palabra <i>herum</i> es opcional y va al final. Con das se contrae: <span class="de">durch das → durchs, um das → ums</span>.',
          table: {
            head: ['Preposición', 'Caso', 'Ejemplo'],
            rows: [
              ['durch', 'Akkusativ', 'Ich gehe <b>durch den</b> Wald.'],
              ['durch', 'Akkusativ', 'Der Zug fährt <b>durch einen</b> Tunnel.'],
              ['um (… herum)', 'Akkusativ', 'Wir laufen <b>um den</b> See <b>herum</b>.'],
              ['um (… herum)', 'Akkusativ', 'Sie gehen <b>um die</b> Ecke.']
            ]
          },
          ex: [
            {de: 'Wir sind durch die Altstadt gelaufen.', es: 'Caminamos por el casco antiguo.'},
            {de: 'Der Fluss fließt durch die ganze Stadt.', es: 'El río atraviesa toda la ciudad.'},
            {de: 'Im Sommer fahren wir mit dem Rad um den See herum.', es: 'En verano damos la vuelta al lago en bicicleta.'},
            {de: 'Das Postamt ist gleich um die Ecke.', es: 'La oficina de correos está a la vuelta de la esquina.'},
            {de: 'Er ging durchs Zimmer und öffnete das Fenster.', es: 'Cruzó la habitación y abrió la ventana.'}
          ],
          tip: 'Memoriza que <span class="de">durch</span> y <span class="de">um</span> siempre llevan Akkusativ; <span class="de">an … vorbei</span> y <span class="de">gegenüber</span> llevan Dativ.'
        },
        {
          h: 'Wortbildung: verbo + -er para personas',
          p: 'Muchos nombres de profesión y de personas se forman con la raíz del verbo + <b>-er</b> (masculino): <span class="de">lehren → der Lehrer</span>. El femenino añade <b>-in</b> (<span class="de">die Lehrerin</span>, plural <span class="de">die Lehrerinnen</span>). El plural masculino es igual al singular (<span class="de">die Lehrer</span>). Algunos verbos cambian la vocal a Umlaut: <span class="de">verkaufen → der Verkäufer</span>. Todos son de género masculino (der) en la forma base.',
          table: {
            head: ['Verbo', 'Masculino', 'Femenino'],
            rows: [
              ['lehren', 'der Lehrer', 'die Lehrerin'],
              ['fahren', 'der Fahrer', 'die Fahrerin'],
              ['spielen', 'der Spieler', 'die Spielerin'],
              ['arbeiten', 'der Arbeiter', 'die Arbeiterin'],
              ['verkaufen', 'der Verkäufer', 'die Verkäuferin'],
              ['beraten', 'der Berater', 'die Beraterin'],
              ['leiten', 'der Leiter', 'die Leiterin']
            ]
          },
          ex: [
            {de: 'Mein Onkel ist Busfahrer in Köln.', es: 'Mi tío es conductor de autobús en Colonia.'},
            {de: 'Die Verkäuferin hat mir sehr gut geholfen.', es: 'La vendedora me ayudó muy bien.'},
            {de: 'Frau Weber ist die neue Leiterin unseres Teams.', es: 'La señora Weber es la nueva jefa de nuestro equipo.'},
            {de: 'Die Spieler laufen auf den Platz.', es: 'Los jugadores salen al campo.'},
            {de: 'Ich möchte Berater werden und Kunden helfen.', es: 'Quiero ser asesor y ayudar a los clientes.'}
          ],
          tip: 'En alemán se dice <span class="de">Ich bin Lehrer</span> sin artículo para profesiones. Pero con adjetivo sí: <span class="de">Ich bin ein guter Lehrer.</span>'
        },
        {
          h: 'Expresar descontento y satisfacción',
          p: 'En el trabajo y en la vida diaria puedes decir cómo te sientes con ciertas fórmulas. Para el <b>descontento</b>: <span class="de">Ich bin nicht zufrieden mit …</span>, <span class="de">Das nervt mich.</span>, <span class="de">Das gefällt mir gar nicht.</span> Para la <b>satisfacción o entusiasmo</b>: <span class="de">Ich bin sehr zufrieden mit …</span>, <span class="de">Ich bin begeistert!</span>, <span class="de">Das macht mir richtig Spaß.</span> Después de <i>zufrieden / begeistert / unzufrieden</i> se usa <b>mit + Dativ</b>.',
          ex: [
            {de: 'Ich bin mit meinem neuen Chef sehr zufrieden.', es: 'Estoy muy satisfecho con mi nuevo jefe.'},
            {de: 'Die vielen Überstunden nerven mich.', es: 'Las muchas horas extra me molestan.'},
            {de: 'Ich bin von der Arbeit im Team begeistert.', es: 'Estoy entusiasmado con el trabajo en equipo.'},
            {de: 'Mit dem Gehalt bin ich leider nicht zufrieden.', es: 'Lamentablemente no estoy satisfecho con el sueldo.'},
            {de: 'Der Job macht mir richtig Spaß.', es: 'El trabajo me divierte de verdad.'}
          ],
          tip: 'No traduzcas "estoy contento con" como <span class="de">mit</span> + Akkusativ: <span class="de">mit</span> siempre lleva Dativ (<span class="de">mit meinem Chef, mit der Arbeit</span>).'
        }
      ],
      vocab: [
        {de: 'der Beruf', pl: 'die Berufe', es: 'la profesión', ex: 'Mein Traumberuf ist Lehrer.', exes: 'La profesión de mis sueños es profesor.'},
        {de: 'die Stelle', pl: 'die Stellen', es: 'el puesto de trabajo', ex: 'Ich habe eine neue Stelle bei einer Bank gefunden.', exes: 'Encontré un nuevo puesto en un banco.'},
        {de: 'die Bewerbung', pl: 'die Bewerbungen', es: 'la solicitud de empleo', ex: 'Ich schreibe heute Abend meine Bewerbung.', exes: 'Esta noche escribo mi solicitud.'},
        {de: 'der Lebenslauf', pl: 'die Lebensläufe', es: 'el currículum', ex: 'Im Lebenslauf stehen meine Ausbildung und meine Erfahrung.', exes: 'En el currículum figuran mi formación y mi experiencia.'},
        {de: 'das Vorstellungsgespräch', pl: 'die Vorstellungsgespräche', es: 'la entrevista de trabajo', ex: 'Morgen habe ich ein Vorstellungsgespräch.', exes: 'Mañana tengo una entrevista de trabajo.'},
        {de: 'der Chef', pl: 'die Chefs', es: 'el jefe (la jefa: die Chefin)', ex: 'Mein Chef ist sehr freundlich.', exes: 'Mi jefe es muy amable.'},
        {de: 'der Kollege', pl: 'die Kollegen', es: 'el compañero de trabajo (die Kollegin)', ex: 'Meine Kollegen gehen mittags zusammen essen.', exes: 'Mis compañeros van juntos a comer al mediodía.'},
        {de: 'der Mitarbeiter', pl: 'die Mitarbeiter', es: 'el empleado (die Mitarbeiterin)', ex: 'In unserer Firma arbeiten zwanzig Mitarbeiter.', exes: 'En nuestra empresa trabajan veinte empleados.'},
        {de: 'die Firma', pl: 'die Firmen', es: 'la empresa', ex: 'Die Firma sucht neue Mitarbeiter.', exes: 'La empresa busca nuevos empleados.'},
        {de: 'das Gehalt', pl: 'die Gehälter', es: 'el sueldo', ex: 'Das Gehalt kommt am Ende des Monats.', exes: 'El sueldo llega a fin de mes.'},
        {de: 'der Vertrag', pl: 'die Verträge', es: 'el contrato', ex: 'Ich habe den Vertrag schon unterschrieben.', exes: 'Ya firmé el contrato.'},
        {de: 'die Kündigung', pl: 'die Kündigungen', es: 'el despido, la renuncia', ex: 'Nach der Kündigung suchte er sofort etwas Neues.', exes: 'Después del despido buscó enseguida algo nuevo.'},
        {de: 'die Überstunden', es: 'las horas extra (solo plural)', ex: 'Im Dezember mache ich viele Überstunden.', exes: 'En diciembre hago muchas horas extra.'},
        {de: 'die Teilzeit', es: 'la jornada parcial', ex: 'Seit der Geburt ihrer Tochter arbeitet sie in Teilzeit.', exes: 'Desde el nacimiento de su hija trabaja a tiempo parcial.'},
        {de: 'der Verkäufer', pl: 'die Verkäufer', es: 'el vendedor (die Verkäuferin)', ex: 'Der Verkäufer zeigt mir verschiedene Schuhe.', exes: 'El vendedor me muestra diferentes zapatos.'},
        {de: 'der Fahrer', pl: 'die Fahrer', es: 'el conductor (die Fahrerin)', ex: 'Der Fahrer wartet vor dem Hotel.', exes: 'El conductor espera delante del hotel.'},
        {de: 'sich bewerben', es: 'postularse (bei / um)', note: 'bewirbt sich – bewarb sich – hat sich beworben', ex: 'Ich habe mich bei drei Firmen beworben.', exes: 'Me postulé en tres empresas.'},
        {de: 'ein|stellen', es: 'contratar', note: 'stellt ein – stellte ein – hat eingestellt', ex: 'Die Firma hat gestern zwei neue Leute eingestellt.', exes: 'La empresa contrató ayer a dos personas nuevas.'},
        {de: 'kündigen', es: 'renunciar, despedir', note: 'kündigt – kündigte – hat gekündigt', ex: 'Ich möchte kündigen, weil ich weniger verdiene als früher.', exes: 'Quiero renunciar porque gano menos que antes.'},
        {de: 'wechseln', es: 'cambiar', note: 'wechselt – wechselte – hat gewechselt', ex: 'Nach zehn Jahren will er den Job wechseln.', exes: 'Después de diez años quiere cambiar de trabajo.'}
      ],
      phrases: [
        {de: 'Ich bin mit … sehr zufrieden.', es: 'Estoy muy satisfecho con …', use: 'satisfacción'},
        {de: 'Ich bin begeistert!', es: '¡Estoy entusiasmado!', use: 'entusiasmo'},
        {de: 'Das macht mir richtig Spaß.', es: 'Esto me divierte de verdad.', use: 'satisfacción'},
        {de: 'Das ist genau das Richtige für mich.', es: 'Esto es justo lo que me conviene.', use: 'satisfacción'},
        {de: 'Ich freue mich riesig auf …', es: 'Tengo muchísimas ganas de …', use: 'entusiasmo'},
        {de: 'Ich bin mit … nicht zufrieden.', es: 'No estoy satisfecho con …', use: 'descontento'},
        {de: 'Das nervt mich.', es: 'Eso me molesta.', use: 'descontento'},
        {de: 'Das gefällt mir gar nicht.', es: 'No me gusta nada.', use: 'descontento'},
        {de: 'Es reicht mir!', es: '¡Ya es suficiente! (me harté)', use: 'descontento'},
        {de: 'Gehen Sie an der Bank vorbei und dann links.', es: 'Pase por delante del banco y luego gire a la izquierda.', use: 'indicar camino'}
      ],
      dialog: {
        title: 'El nuevo trabajo de Murat',
        lines: [
          {s: 'A', de: 'Murat, wie läuft es in deiner neuen Firma?', es: 'Murat, ¿cómo va todo en tu nueva empresa?'},
          {s: 'B', de: 'Super! Ich bin richtig begeistert. Mein Chef ist nett, und das Team ist toll.', es: '¡Genial! Estoy realmente entusiasmado. Mi jefe es amable y el equipo es estupendo.'},
          {s: 'A', de: 'Und der Weg zur Arbeit? Früher hast du ja über eine Stunde gebraucht.', es: '¿Y el camino al trabajo? Antes tardabas más de una hora.'},
          {s: 'B', de: 'Jetzt fahre ich nur zwanzig Minuten. Ich fahre am Stadtpark vorbei und dann durch die Altstadt.', es: 'Ahora solo tardo veinte minutos. Paso por delante del parque y luego por el casco antiguo.'},
          {s: 'A', de: 'Wo genau ist die Firma?', es: '¿Dónde está exactamente la empresa?'},
          {s: 'B', de: 'Gegenüber vom Bahnhof. Du kannst sie nicht übersehen.', es: 'Enfrente de la estación. No puedes no verla.'},
          {s: 'A', de: 'Und was machst du da genau?', es: '¿Y qué haces allí exactamente?'},
          {s: 'B', de: 'Ich bin jetzt Teamleiter. Aber ich muss manchmal Überstunden machen. Das gefällt mir nicht.', es: 'Ahora soy jefe de equipo. Pero a veces tengo que hacer horas extra. Eso no me gusta.'},
          {s: 'A', de: 'Das kann ich verstehen. Aber das Gehalt ist besser, oder?', es: 'Lo entiendo. Pero el sueldo es mejor, ¿no?'},
          {s: 'B', de: 'Ja, und das ist wichtig. Nur die Überstunden nerven mich.', es: 'Sí, y eso es importante. Solo las horas extra me molestan.'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Der Bus fährt jeden Tag direkt ___ unserem Haus vorbei.', o: ['durch', 'um', 'an'], a: 2, why: 'Pasar por delante de algo = an + Dativ … vorbei.'},
        {t: 'mc', q: 'Wir sind ___ den Wald gelaufen, das war der kürzeste Weg.', o: ['um', 'durch', 'an'], a: 1, why: 'Atravesar un lugar por dentro se dice durch + Akkusativ.'},
        {t: 'mc', q: 'Das Hotel liegt gegenüber ___ Bahnhof.', o: ['von', 'vom', 'vor den'], a: 1, why: 'gegenüber von + Dativ; von dem se contrae en vom.'},
        {t: 'mc', q: 'Er ist ein guter ___ und erklärt sehr gut.', o: ['Lehren', 'Lehrerin', 'Lehrer'], a: 2, why: 'Er es masculino, por eso Lehrer (verbo lehren + -er).'},
        {t: 'mc', q: 'Frau Yilmaz verkauft Schuhe. Sie ist ___.', o: ['Verkäuferin', 'Verkäufer', 'Verkauferin'], a: 0, why: 'Para una mujer se añade -in y se mantiene el Umlaut: Verkäuferin.'},
        {t: 'mc', q: 'Der Job gefällt mir. Ich bin mit meiner Arbeit sehr ___.', o: ['zufrieden', 'Zufriedenheit', 'zufrieder'], a: 0, why: 'Necesitamos el adjetivo zufrieden después de sein.'},
        {t: 'gap', q: 'Wir gehen jeden Tag an ___ Bäckerei vorbei. (die)', a: ['der'], why: 'an … vorbei lleva Dativ; Bäckerei es femenino: der.'},
        {t: 'gap', q: 'Der Zug fährt ___ einen langen Tunnel. (a través de)', a: ['durch'], why: 'Atravesar = durch + Akkusativ.'},
        {t: 'gap', q: 'Die Apotheke ist ___ von der Post. (enfrente)', a: ['gegenüber'], why: 'Enfrente de se dice gegenüber von + Dativ.'},
        {t: 'gap', q: 'Im Sommer fahre ich mit dem Rad ___ den See herum. (alrededor)', a: ['um'], why: 'Alrededor de = um + Akkusativ (… herum).'},
        {t: 'gap', q: 'Anna spielt Fußball. Sie ist eine gute Fußball___. (spielen)', a: ['spielerin'], why: 'Verbo spielen + -er; en femenino se añade -in: Spielerin.'},
        {t: 'order', es: 'Murat dice que la empresa está enfrente de la estación.', de: 'Murat sagt, dass die Firma gegenüber vom Bahnhof liegt.', why: 'Después de dass el verbo conjugado va al final.'},
        {t: 'order', es: '¿Por qué no vas por el parque?', de: 'Warum fährst du nicht durch den Park?', why: 'durch + Akkusativ (den Park); pregunta con verbo en segunda posición.'},
        {t: 'order', es: '¿Cuánto te satisface tu nuevo puesto?', de: 'Wie zufrieden bist du mit deiner neuen Stelle?', why: 'zufrieden sein mit + Dativ (deiner neuen Stelle).'},
        {t: 'tr', es: 'Cada día paso en coche por delante del colegio.', de: ['Jeden Tag fahre ich mit dem Auto an der Schule vorbei.', 'Ich fahre jeden Tag mit dem Auto an der Schule vorbei.'], why: ''},
        {t: 'tr', es: 'La oficina está enfrente de la estación.', de: ['Das Büro ist gegenüber vom Bahnhof.', 'Das Büro liegt gegenüber vom Bahnhof.', 'Das Büro ist gegenüber dem Bahnhof.'], why: ''},
        {t: 'fix', q: 'Wir gehen jeden Tag an der Park vorbei.', a: ['Wir gehen jeden Tag am Park vorbei.', 'Wir gehen jeden Tag an dem Park vorbei.'], why: 'Park es masculino; con an … vorbei va Dativ: am / an dem Park.'},
        {t: 'fix', q: 'Der Bus fährt durch dem Tunnel.', a: ['Der Bus fährt durch den Tunnel.'], why: 'durch lleva Akkusativ: den Tunnel.'},
        {t: 'match', pairs: [['der Lebenslauf', 'el currículum'], ['die Bewerbung', 'la solicitud de empleo'], ['das Gehalt', 'el sueldo'], ['die Überstunden', 'las horas extra'], ['der Vertrag', 'el contrato'], ['kündigen', 'renunciar']]}
      ],
      speak: [
        {prompt: 'Describe tu camino al trabajo o a clase: por dónde pasas, qué lugares quedan enfrente. Usa an … vorbei, durch, um … herum y gegenüber von (5-6 frases).', model: 'Morgens gehe ich zuerst zur Bushaltestelle. Der Bus fährt am Supermarkt vorbei und dann durch die Altstadt. Ich steige gegenüber von der Post aus. Dann gehe ich um die Ecke, und da ist schon mein Büro.'},
        {prompt: 'Presenta tres profesiones con la forma masculina y la femenina, y di qué hacen (usa -er / -erin; 4-5 frases).', model: 'Mein Bruder ist Fahrer bei einer Firma. Meine Freundin ist Lehrerin an einer Schule. Die Verkäuferin im Supermarkt ist sehr freundlich. Der Berater in der Bank hilft mir oft.'},
        {prompt: 'Uso real (en voz alta): cuenta cómo estás de satisfecho con tu trabajo, tus estudios o tu rutina. Menciona algo que te gusta y algo que te molesta (4-5 frases).', model: 'Ich bin mit meiner Arbeit ziemlich zufrieden. Die Kollegen sind nett, und die Aufgaben machen mir Spaß. Nur die langen Besprechungen nerven mich. Das gefällt mir gar nicht. Aber insgesamt bin ich begeistert.'}
      ]
    },
    {
      id: 'a2-21',
      title: 'Lass uns was tun!',
      es: 'Compromiso y vida sostenible',
      goals: [
        'Usar el verbo lassen en sus distintos significados',
        'Usar el Perfekt con lassen (doble infinitivo)',
        'Expresar desagrado y reaccionar a él',
        'Dar tu opinión, preguntar, contradecir y exhortar'
      ],
      grammar: [
        {
          h: 'El verbo lassen: dejar, permitir',
          p: '<b>lassen</b> tiene varios significados. Como verbo principal: <b>dejar (algo en un sitio)</b>: <span class="de">Ich lasse den Schlüssel zu Hause.</span> También significa <b>permitir</b> (con infinitivo): <span class="de">Meine Eltern lassen mich spät ausgehen.</span> Es irregular en <i>du</i> y <i>er/sie/es</i>: la <b>a</b> se vuelve <b>ä</b> y la terminación de <i>du</i> pierde la -s.',
          table: {
            head: ['Persona', 'lassen'],
            rows: [
              ['ich', 'lasse'],
              ['du', '<b>lässt</b>'],
              ['er/sie/es', '<b>lässt</b>'],
              ['wir', 'lassen'],
              ['ihr', 'lasst'],
              ['sie/Sie', 'lassen']
            ]
          },
          ex: [
            {de: 'Ich lasse mein Handy oft im Auto liegen.', es: 'A menudo dejo mi celular en el coche.'},
            {de: 'Du lässt deine Tasche immer im Büro.', es: 'Siempre dejas tu bolso en la oficina.'},
            {de: 'Meine Eltern lassen mich nie allein verreisen.', es: 'Mis padres nunca me dejan viajar solo.'},
            {de: 'Lässt du deinen Hund im Garten laufen?', es: '¿Dejas que tu perro corra por el jardín?'},
            {de: 'Wir lassen die Kinder heute länger aufbleiben.', es: 'Hoy dejamos que los niños se queden despiertos más tiempo.'}
          ],
          tip: 'Para "dejar de hacer algo" se usa <span class="de">aufhören</span>, no lassen. Y "deja eso" se dice <span class="de">Lass das!</span>'
        },
        {
          h: 'lassen + infinitivo: hacer hacer algo',
          p: 'Con <b>lassen + infinitivo</b> expresas que <b>otra persona hace algo por ti</b> (un servicio): <span class="de">Ich lasse mein Auto reparieren.</span> = "Hago reparar mi coche". El infinitivo va al final. Con <b>Lass uns …</b> haces una propuesta o exhortación: <span class="de">Lass uns gehen!</span> (a una persona, tú), <span class="de">Lasst uns gehen!</span> (a varias personas), <span class="de">Lassen Sie uns gehen!</span> (formal).',
          ex: [
            {de: 'Ich lasse mein Auto in der Werkstatt reparieren.', es: 'Hago reparar mi coche en el taller.'},
            {de: 'Lena lässt sich die Haare schneiden.', es: 'Lena se hace cortar el pelo.'},
            {de: 'Wir lassen uns eine Pizza liefern.', es: 'Nos hacemos traer una pizza.'},
            {de: 'Lass uns heute Abend zusammen kochen!', es: '¡Cocinemos juntos esta noche!'},
            {de: 'Lasst uns ein Repair-Café besuchen!', es: '¡Visitemos un café de reparación!'}
          ],
          tip: 'En español se dice "me corto el pelo", pero en alemán, si lo hace el peluquero: <span class="de">Ich lasse mir die Haare schneiden.</span> (no <span class="de">ich schneide mir</span>).'
        },
        {
          h: 'Perfekt con lassen',
          p: 'Si <i>lassen</i> es verbo principal ("dejar") forma un Perfekt normal: <span class="de">Ich habe den Schlüssel zu Hause gelassen.</span> Si va con otro infinitivo, <b>no se usa gelassen</b>, sino el <b>infinitivo lassen</b> al final (doble infinitivo): <span class="de">Ich habe mein Auto reparieren lassen.</span> El auxiliar es siempre <i>haben</i>. En subordinadas: <span class="de">weil ich das Auto habe reparieren lassen.</span> (forma avanzada).',
          ex: [
            {de: 'Ich habe meinen Regenschirm zu Hause gelassen.', es: 'Dejé mi paraguas en casa.'},
            {de: 'Er hat sein Fahrrad reparieren lassen.', es: 'Hizo reparar su bicicleta.'},
            {de: 'Sie hat sich die Haare schneiden lassen.', es: 'Se hizo cortar el pelo.'},
            {de: 'Wir haben uns ein Essen kommen lassen.', es: 'Nos hicimos traer comida a domicilio.'},
            {de: 'Hast du deinen Computer prüfen lassen?', es: '¿Hiciste revisar tu computadora?'}
          ],
          tip: 'Error típico: <span class="de">Ich habe es reparieren gelassen</span>. Correcto: <span class="de">Ich habe es reparieren lassen</span> (dos infinitivos al final).'
        },
        {
          h: 'Desagrado, opinión, contradicción y exhortación',
          p: 'Para expresar <b>desagrado</b>: <span class="de">Das gefällt mir gar nicht.</span> / <span class="de">Das finde ich unmöglich.</span> Para <b>reaccionar</b>: <span class="de">Entschuldigung, das war keine Absicht.</span> / <span class="de">Tut mir leid.</span> Para <b>opinar</b>: <span class="de">Meiner Meinung nach …</span> / <span class="de">Ich finde, dass …</span> Para <b>preguntar</b> la opinión: <span class="de">Was meinst du dazu?</span> Para <b>contradecir</b>: <span class="de">Das sehe ich anders.</span> Para <b>exhortar</b>: <span class="de">Lass uns anfangen!</span> / <span class="de">Komm, wir gehen!</span>',
          ex: [
            {de: 'Meiner Meinung nach sollten wir weniger Plastik benutzen.', es: 'En mi opinión deberíamos usar menos plástico.'},
            {de: 'Ich finde, dass Bio-Obst wichtig ist.', es: 'Creo que la fruta orgánica es importante.'},
            {de: 'Was meinst du dazu? Fährst du lieber mit dem Rad?', es: '¿Qué opinas? ¿Prefieres ir en bicicleta?'},
            {de: 'Das sehe ich anders. Ein Auto ist manchmal nötig.', es: 'Yo lo veo distinto. A veces un coche es necesario.'},
            {de: 'Das gefällt mir gar nicht: Der Müll liegt auf der Straße!', es: 'No me gusta nada: ¡la basura está tirada en la calle!'}
          ],
          tip: '<span class="de">Ich finde, dass …</span> lleva el verbo al final; <span class="de">Ich finde, das ist …</span> (sin dass) lleva el verbo en segunda posición. Ambas son correctas.'
        }
      ],
      vocab: [
        {de: 'nachhaltig', es: 'sostenible', ex: 'Ich möchte nachhaltiger leben und weniger kaufen.', exes: 'Quiero vivir de forma más sostenible y comprar menos.'},
        {de: 'die Umwelt', es: 'el medio ambiente', ex: 'Fahrradfahren ist gut für die Umwelt.', exes: 'Andar en bicicleta es bueno para el medio ambiente.'},
        {de: 'der Müll', es: 'la basura', ex: 'Wir bringen den Müll jeden Abend raus.', exes: 'Sacamos la basura todas las noches.'},
        {de: 'die Mülltrennung', es: 'la separación de residuos', ex: 'In Deutschland ist die Mülltrennung sehr wichtig.', exes: 'En Alemania la separación de residuos es muy importante.'},
        {de: 'die Plastiktüte', pl: 'die Plastiktüten', es: 'la bolsa de plástico', ex: 'Im Supermarkt nehme ich keine Plastiktüte mehr.', exes: 'En el supermercado ya no tomo bolsas de plástico.'},
        {de: 'die Mehrwegflasche', pl: 'die Mehrwegflaschen', es: 'la botella retornable', ex: 'Mehrwegflaschen kann man zurückgeben.', exes: 'Las botellas retornables se pueden devolver.'},
        {de: 'der Strom', es: 'la electricidad', ex: 'Wir sparen Strom und schalten das Licht aus.', exes: 'Ahorramos electricidad y apagamos la luz.'},
        {de: 'die Energie', pl: 'die Energien', es: 'la energía', ex: 'Solarenergie ist eine saubere Energie.', exes: 'La energía solar es una energía limpia.'},
        {de: 'der Klimawandel', es: 'el cambio climático', ex: 'Viele Menschen machen sich Sorgen um den Klimawandel.', exes: 'Mucha gente se preocupa por el cambio climático.'},
        {de: 'der Verein', pl: 'die Vereine', es: 'la asociación, el club', ex: 'Ich bin in einem Verein für Umweltschutz.', exes: 'Estoy en una asociación para la protección del medio ambiente.'},
        {de: 'das Engagement', es: 'el compromiso, la implicación', ex: 'Sein Engagement für die Schule ist beeindruckend.', exes: 'Su compromiso con la escuela es impresionante.'},
        {de: 'sparen', es: 'ahorrar', ex: 'Mit LED-Lampen kann man viel Strom sparen.', exes: 'Con lámparas LED se puede ahorrar mucha electricidad.'},
        {de: 'verbrauchen', es: 'consumir, gastar', note: 'verbraucht – verbrauchte – hat verbraucht', ex: 'Mein alter Kühlschrank verbraucht zu viel Strom.', exes: 'Mi viejo refrigerador consume demasiada electricidad.'},
        {de: 'recyceln', es: 'reciclar', ex: 'Wir recyceln Papier, Glas und Plastik.', exes: 'Reciclamos papel, vidrio y plástico.'},
        {de: 'reparieren', es: 'reparar', ex: 'Ich repariere meine Schuhe, statt neue zu kaufen.', exes: 'Reparo mis zapatos en lugar de comprar nuevos.'},
        {de: 'verzichten', es: 'renunciar (a)', note: 'verzichtet (auf + Akk) – hat verzichtet', ex: 'Ich verzichte auf Plastikflaschen.', exes: 'Renuncio a las botellas de plástico.'},
        {de: 'sich engagieren', es: 'comprometerse (con), implicarse (en)', note: 'engagiert sich (für + Akk) – hat sich engagiert', ex: 'Sie engagiert sich für den Umweltschutz.', exes: 'Ella se compromete con la protección del medio ambiente.'},
        {de: 'spenden', es: 'donar', ex: 'Wir spenden alte Kleidung an einen Verein.', exes: 'Donamos ropa vieja a una asociación.'},
        {de: 'tauschen', es: 'intercambiar', ex: 'Auf dem Flohmarkt tauschen wir Bücher.', exes: 'En el mercadillo intercambiamos libros.'},
        {de: 'regional', es: 'regional, de la zona', ex: 'Ich kaufe gern regionales Gemüse auf dem Markt.', exes: 'Me gusta comprar verduras de la zona en el mercado.'},
        {de: 'gebraucht', es: 'usado, de segunda mano', ex: 'Das Sofa war gebraucht, aber noch sehr schön.', exes: 'El sofá era de segunda mano, pero aún muy bonito.'}
      ],
      phrases: [
        {de: 'Das gefällt mir gar nicht.', es: 'No me gusta nada.', use: 'desagrado'},
        {de: 'Das finde ich unmöglich!', es: '¡Me parece inaceptable!', use: 'desagrado'},
        {de: 'Entschuldigung, das war keine Absicht.', es: 'Perdón, no fue con intención.', use: 'reaccionar'},
        {de: 'Tut mir leid, das mache ich nicht mehr.', es: 'Lo siento, no lo volveré a hacer.', use: 'reaccionar'},
        {de: 'Meiner Meinung nach …', es: 'En mi opinión …', use: 'opinar'},
        {de: 'Was meinst du dazu?', es: '¿Qué opinas de esto?', use: 'preguntar'},
        {de: 'Das sehe ich anders.', es: 'Yo lo veo diferente.', use: 'contradecir'},
        {de: 'Da bin ich nicht deiner Meinung.', es: 'En eso no estoy de acuerdo contigo.', use: 'contradecir'},
        {de: 'Lass uns etwas tun!', es: '¡Hagamos algo!', use: 'exhortar'},
        {de: 'Komm, wir fangen gleich an!', es: '¡Vamos, empecemos ya!', use: 'exhortar'}
      ],
      dialog: {
        title: 'Menos plástico, más compromiso',
        lines: [
          {s: 'A', de: 'Lena, du hast schon wieder eine Plastiktüte genommen. Das gefällt mir gar nicht.', es: 'Lena, otra vez tomaste una bolsa de plástico. No me gusta nada.'},
          {s: 'B', de: 'Oh, tut mir leid! Ich habe meinen Stoffbeutel zu Hause gelassen.', es: '¡Ay, perdón! Dejé mi bolsa de tela en casa.'},
          {s: 'A', de: 'Das ist doch kein Grund. Meiner Meinung nach sollte man immer einen dabeihaben.', es: 'Eso no es excusa. En mi opinión uno siempre debería llevar una.'},
          {s: 'B', de: 'Da hast du recht. Und was machst du für die Umwelt?', es: 'Tienes razón. ¿Y tú qué haces por el medio ambiente?'},
          {s: 'A', de: 'Ich lasse das Auto oft stehen und fahre mit dem Rad. Neulich habe ich es sogar reparieren lassen, statt ein neues zu kaufen.', es: 'Dejo el coche a menudo y voy en bicicleta. Hace poco incluso la hice reparar en lugar de comprar una nueva.'},
          {s: 'B', de: 'Das finde ich super! Mein Toaster ist kaputt, und ich wollte schon einen neuen kaufen.', es: '¡Me parece genial! Mi tostadora está rota y ya quería comprar una nueva.'},
          {s: 'A', de: 'Das sehe ich anders! Lass ihn doch reparieren. Im Repair-Café helfen sie dir dabei.', es: '¡Yo lo veo distinto! Mejor hazla reparar. En el café de reparación te ayudan con eso.'},
          {s: 'B', de: 'Wirklich? Dann lasse ich ihn reparieren. Kommst du mit?', es: '¿En serio? Entonces la haré reparar. ¿Vienes conmigo?'},
          {s: 'A', de: 'Klar! Lass uns am Samstag zusammen hingehen.', es: '¡Claro! Vayamos juntos el sábado.'},
          {s: 'B', de: 'Abgemacht! Und danach trinken wir einen Kaffee.', es: '¡Trato hecho! Y después tomamos un café.'}
        ]
      },
      ex: [
        {t: 'mc', q: 'Meine Eltern ___ mich nie allein verreisen.', o: ['lasse', 'lässt', 'lassen'], a: 2, why: 'Sujeto plural (meine Eltern): lassen.'},
        {t: 'mc', q: 'Du ___ dein Handy immer im Auto liegen!', o: ['lässt', 'lasst', 'lassen'], a: 0, why: 'Con du: lässt (a se vuelve ä).'},
        {t: 'mc', q: 'Er hat seinen Computer reparieren ___.', o: ['gelassen', 'lassen', 'lässt'], a: 1, why: 'Con otro infinitivo se usa el doble infinitivo: reparieren lassen.'},
        {t: 'mc', q: 'Anna, ___ uns heute ins Kino gehen!', o: ['Lasst', 'Lass', 'Lasse'], a: 1, why: 'Dirigiéndose a una sola persona (tú): Lass uns …'},
        {t: 'mc', q: '___ Meinung nach sollten wir weniger Plastik benutzen. (En mi opinión)', o: ['Meiner', 'Mein', 'Meine'], a: 0, why: 'La expresión es Meiner Meinung nach (Dativ femenino).'},
        {t: 'mc', q: 'Du sagst, Bio ist zu teuer? Das sehe ich ___.', o: ['andere', 'anderer', 'anders'], a: 2, why: 'La expresión fija es Das sehe ich anders.'},
        {t: 'gap', q: 'Ich ___ mein Fahrrad in der Werkstatt reparieren. (lassen)', a: ['lasse'], why: 'Con ich: lasse.'},
        {t: 'gap', q: 'Heute Morgen habe ich den Schlüssel zu Hause ___. (lassen, Partizip II)', a: ['gelassen'], why: 'Como verbo principal ("dejar") el participio es gelassen.'},
        {t: 'gap', q: 'Lena hat sich die Haare schneiden ___. (lassen)', a: ['lassen'], why: 'Con otro infinitivo: doble infinitivo, lassen en lugar de gelassen.'},
        {t: 'gap', q: 'Warum ___ du mich nicht in Ruhe? (lassen)', a: ['lässt', 'laesst'], why: 'Con du: lässt.'},
        {t: 'gap', q: 'Tim, ___ uns einen Kaffee trinken! (lassen)', a: ['lass'], why: 'Imperativo de tú: lass uns …'},
        {t: 'order', es: '¿Cuándo haces reparar tu bicicleta?', de: 'Wann lässt du dein Fahrrad reparieren?', why: 'Pregunta con wann: lassen en segunda posición, reparieren al final.'},
        {t: 'order', es: 'Se enoja porque tiene que hacer reparar su coche.', de: 'Er ärgert sich, weil er sein Auto reparieren lassen muss.', why: 'Tras weil el verbo conjugado (muss) va al final, después de los dos infinitivos.'},
        {t: 'order', es: 'Mejor vayamos a pie.', de: 'Lass uns doch einfach zu Fuß gehen!', why: 'Lass uns + infinitivo al final.'},
        {t: 'tr', es: '¿Dónde te hiciste cortar el pelo?', de: ['Wo hast du dir die Haare schneiden lassen?', 'Wo hast du deine Haare schneiden lassen?'], why: ''},
        {t: 'tr', es: 'Dejé el paraguas en casa.', de: ['Ich habe den Regenschirm zu Hause gelassen.', 'Ich habe meinen Regenschirm zu Hause gelassen.', 'Den Regenschirm habe ich zu Hause gelassen.'], why: ''},
        {t: 'fix', q: 'Ich habe mein Auto reparieren gelassen.', a: ['Ich habe mein Auto reparieren lassen.'], why: 'Con otro infinitivo no se usa gelassen: doble infinitivo reparieren lassen.'},
        {t: 'fix', q: 'Lass wir heute Abend kochen!', a: ['Lass uns heute Abend kochen!'], why: 'La estructura correcta es Lass uns + infinitivo.'},
        {t: 'match', pairs: [['nachhaltig', 'sostenible'], ['der Müll', 'la basura'], ['sparen', 'ahorrar'], ['die Umwelt', 'el medio ambiente'], ['verzichten', 'renunciar'], ['spenden', 'donar']]}
      ],
      speak: [
        {prompt: 'Da tu opinión sobre cómo vivir de forma sostenible. Usa Meiner Meinung nach y Ich finde, dass … (5-6 frases).', model: 'Meiner Meinung nach sollten wir weniger Plastik benutzen. Ich finde, dass man oft das Fahrrad nehmen kann. Außerdem kaufe ich regionales Gemüse auf dem Markt. Ich finde, dass kleine Schritte auch helfen.'},
        {prompt: 'Cuenta qué cosas haces hacer a otras personas (corte de pelo, reparación, entrega a domicilio...). Usa lassen en presente y en Perfekt (4-5 frases).', model: 'Ich lasse mir alle sechs Wochen die Haare schneiden. Mein Fahrrad lasse ich in einer Werkstatt reparieren. Letzte Woche habe ich meinen Laptop prüfen lassen. Und manchmal lasse ich mir eine Pizza liefern.'},
        {prompt: 'Uso real (en voz alta): un vecino hace mucho ruido o deja basura. Exprésale tu desagrado con educación, reacciona a su disculpa y propón una solución (4-5 frases).', model: 'Entschuldigung, das gefällt mir gar nicht: Der Müll liegt im Hof. Können Sie ihn bitte wegbringen? Ach, das war keine Absicht? Kein Problem. Lassen Sie uns zusammen eine Lösung finden.'}
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'a2m8',
  level: 'A2',
  num: 8,
  title: 'Sueños, vida y cambios',
  emoji: '🌟',
  lessons: [
    {
      id: 'a2-22',
      title: 'Wünsche und Träume',
      es: 'Deseos y sueños',
      goals: ['Formar oraciones de relativo en Nominativ y Akkusativ (der, die, das, den)', 'Colocar bien la coma y el verbo al final en la oración de relativo', 'Expresar que no sabes algo o que no estás seguro (Keine Ahnung, Ich bin nicht sicher, ob...)', 'Hablar de sentimientos, deseos y sueños'],
      grammar: [
        {
          h: 'Oraciones de relativo: el pronombre concuerda con el antecedente',
          p: 'Una oración de relativo da más información sobre un sustantivo (el <b>antecedente</b>). Empieza con un <b>pronombre relativo</b> (en español: &quot;que&quot;, &quot;quien&quot;). Tres reglas: <b>1)</b> siempre va separada por <b>comas</b>; <b>2)</b> el <b>verbo conjugado va al final</b>; <b>3)</b> el <b>género y el número</b> del pronombre son los del antecedente, pero el <b>caso</b> lo decide la función que tiene el pronombre dentro de su propia oración. En Nominativ el relativo hace de sujeto.',
          table: { head: ['Caso', 'm (der Mann)', 'f (die Frau)', 'n (das Kind)', 'pl (die Leute)'], rows: [['Nominativ', '<b>der</b>', '<b>die</b>', '<b>das</b>', '<b>die</b>'], ['Akkusativ', '<b>den</b>', '<b>die</b>', '<b>das</b>', '<b>die</b>']] },
          ex: [
            { de: 'Das ist der Mann, der neben uns wohnt.', es: 'Ese es el hombre que vive junto a nosotros.' },
            { de: 'Die Frau, die dort steht, ist meine Lehrerin.', es: 'La mujer que está allí es mi profesora.' },
            { de: 'Das Kind, das gerade lacht, heißt Mia.', es: 'La niña que se está riendo ahora se llama Mia.' },
            { de: 'Die Leute, die im Garten sitzen, sind meine Nachbarn.', es: 'Las personas que están sentadas en el jardín son mis vecinos.' },
            { de: 'Ich suche einen Job, der mir Spaß macht.', es: 'Busco un trabajo que me guste.' }
          ],
          tip: 'En español &quot;que&quot; sirve para todo. En alemán tienes que elegir <b>der / die / das</b> según el antecedente. Y no olvides las comas: antes y después de la oración de relativo.'
        },
        {
          h: 'Relativo en Akkusativ',
          p: 'Si el pronombre relativo es el <b>complemento directo</b> de su oración (lo que alguien ve, tiene, desea...), va en <b>Akkusativ</b>. Solo cambia la forma masculina: <b>der → den</b>. Femenino, neutro y plural son iguales que en Nominativ. Para decidir el caso, mira la oración de relativo sola: si ya tiene otro sujeto (ich, du, wir...), el relativo es Akkusativ.',
          table: { head: ['Frase', 'Función del relativo'], rows: [['Der Mann, <b>der</b> hier arbeitet, ...', 'sujeto (nadie más hace la acción) → Nominativ'], ['Der Mann, <b>den</b> ich kenne, ...', 'objeto (ich es el sujeto) → Akkusativ'], ['Die Frau, <b>die</b> ich gestern gesehen habe, ...', 'objeto (ich es el sujeto) → Akkusativ'], ['Das Auto, <b>das</b> ich mir wünsche, ...', 'objeto (ich es el sujeto) → Akkusativ']] },
          ex: [
            { de: 'Das ist der Pullover, den ich mir wünsche.', es: 'Ese es el jersey que deseo.' },
            { de: 'Die Frau, die ich gestern getroffen habe, ist Ärztin.', es: 'La mujer con quien me encontré ayer es médica.' },
            { de: 'Das Buch, das du mir geschenkt hast, ist toll.', es: 'El libro que me regalaste es genial.' },
            { de: 'Die Träume, die man als Kind hat, vergisst man nicht.', es: 'Los sueños que se tienen de niño no se olvidan.' },
            { de: 'Ich mag den Film, den wir gestern gesehen haben.', es: 'Me gusta la película que vimos ayer.' }
          ],
          tip: 'Con tiempos compuestos el verbo final es el auxiliar: <i>…, den ich gesehen <b>habe</b></i>. Si dudas entre <b>der</b> y <b>den</b>, pregúntate: ¿hay otro sujeto en la oración? Si sí, es <b>den</b>.'
        },
        {
          h: 'Expresar ignorancia e inseguridad',
          p: 'Para decir que no sabes algo usa frases fijas como <span class="de">Keine Ahnung</span> (informal), <span class="de">Das weiß ich nicht</span> o <span class="de">Ich bin nicht sicher</span>. Si la pregunta es de sí o no, usa <b>ob</b> (&quot;si&quot;) y el verbo va <b>al final</b>. Si lleva una palabra interrogativa (wann, wo, was, wer...), esa palabra abre la subordinada y el verbo también va al final.',
          table: { head: ['Pregunta directa', 'Subordinada con inseguridad'], rows: [['Kommt Tim heute?', 'Keine Ahnung, <b>ob</b> Tim heute <b>kommt</b>.'], ['Ist sie glücklich?', 'Ich bin nicht sicher, <b>ob</b> sie glücklich <b>ist</b>.'], ['Wann beginnt der Kurs?', 'Ich weiß nicht, <b>wann</b> der Kurs <b>beginnt</b>.'], ['Wo wohnt er jetzt?', 'Ich habe keine Ahnung, <b>wo</b> er jetzt <b>wohnt</b>.']] },
          ex: [
            { de: 'Keine Ahnung, ob er zufrieden ist.', es: 'Ni idea de si está contento.' },
            { de: 'Ich bin nicht sicher, ob ich die Stelle wechseln soll.', es: 'No estoy seguro de si debo cambiar de empleo.' },
            { de: 'Ich weiß nicht genau, was ich mir wünschen soll.', es: 'No sé exactamente qué desear.' },
            { de: 'Vielleicht kommt sie, aber ich bin mir nicht sicher.', es: 'Quizá venga, pero no estoy segura.' },
            { de: 'Keine Ahnung, wer das Geschenk bringt.', es: 'Ni idea de quién trae el regalo.' }
          ],
          tip: 'No uses <b>dass</b> aquí: &quot;si&quot; en una pregunta indirecta es <b>ob</b>. &quot;Ich weiß nicht, dass…&quot; significaría otra cosa. Con <i>Keine Ahnung</i> no necesitas conjugar nada: es una frase fija.'
        }
      ],
      vocab: [
        { de: 'glücklich', es: 'feliz', ex: 'Ich bin glücklich, weil heute die Sonne scheint.', exes: 'Soy feliz porque hoy brilla el sol.' },
        { de: 'traurig', es: 'triste', ex: 'Der Film hat mich sehr traurig gemacht.', exes: 'La película me puso muy triste.' },
        { de: 'wütend', es: 'furioso', ex: 'Mein Bruder ist wütend, weil sein Handy kaputt ist.', exes: 'Mi hermano está furioso porque su móvil está roto.' },
        { de: 'nervös', es: 'nervioso', ex: 'Vor der Prüfung bin ich immer nervös.', exes: 'Antes del examen siempre estoy nervioso.' },
        { de: 'ängstlich', es: 'miedoso / temeroso', ex: 'Das Kind ist im Dunkeln ein bisschen ängstlich.', exes: 'El niño es un poco miedoso en la oscuridad.' },
        { de: 'eifersüchtig', es: 'celoso', ex: 'Er ist eifersüchtig auf den Erfolg seines Freundes.', exes: 'Está celoso del éxito de su amigo.' },
        { de: 'stolz', es: 'orgulloso', ex: 'Wir sind stolz auf unsere Tochter.', exes: 'Estamos orgullosos de nuestra hija.' },
        { de: 'enttäuscht', es: 'decepcionado', ex: 'Anna ist enttäuscht, weil das Konzert ausfällt.', exes: 'Anna está decepcionada porque se cancela el concierto.' },
        { de: 'überrascht', es: 'sorprendido', ex: 'Ich war überrascht, als er plötzlich vor der Tür stand.', exes: 'Me sorprendí cuando de repente apareció en la puerta.' },
        { de: 'einsam', es: 'solo / solitario', ex: 'In der neuen Stadt fühlte sie sich anfangs einsam.', exes: 'En la ciudad nueva al principio se sentía sola.' },
        { de: 'gelassen', es: 'sereno / tranquilo', ex: 'Mein Opa bleibt immer gelassen.', exes: 'Mi abuelo siempre se mantiene sereno.' },
        { de: 'neugierig', es: 'curioso', ex: 'Ich bin neugierig, was in dem Paket ist.', exes: 'Tengo curiosidad por saber qué hay en el paquete.' },
        { de: 'zufrieden', es: 'satisfecho / contento', ex: 'Sie ist mit ihrer Arbeit sehr zufrieden.', exes: 'Está muy satisfecha con su trabajo.' },
        { de: 'aufgeregt', es: 'emocionado / agitado', ex: 'Die Kinder sind vor der Reise ganz aufgeregt.', exes: 'Los niños están muy emocionados antes del viaje.' },
        { de: 'verliebt', es: 'enamorado', ex: 'Lena ist seit dem Sommer verliebt.', exes: 'Lena está enamorada desde el verano.' },
        { de: 'erleichtert', es: 'aliviado', ex: 'Nach dem Test war ich sehr erleichtert.', exes: 'Después del examen me sentí muy aliviado.' },
        { de: 'besorgt', es: 'preocupado', ex: 'Meine Mutter ist besorgt, weil ich so spät komme.', exes: 'Mi madre está preocupada porque llego tan tarde.' },
        { de: 'der Wunsch', pl: 'die Wünsche', es: 'el deseo', ex: 'Mein größter Wunsch ist ein Haus am Meer.', exes: 'Mi mayor deseo es una casa junto al mar.' },
        { de: 'der Traum', pl: 'die Träume', es: 'el sueño', ex: 'Er hat einen Traum: Er will ein Café eröffnen.', exes: 'Tiene un sueño: quiere abrir una cafetería.' },
        { de: 'träumen (von)', es: 'soñar (con)', ex: 'Ich träume von einer Reise nach Japan.', exes: 'Sueño con un viaje a Japón.' },
        { de: 'hoffen', es: 'esperar (tener esperanza)', ex: 'Wir hoffen, dass das Wetter gut wird.', exes: 'Esperamos que el tiempo sea bueno.' }
      ],
      phrases: [
        { de: 'Keine Ahnung!', es: '¡Ni idea!', use: 'no saber' },
        { de: 'Das weiß ich leider nicht.', es: 'Por desgracia, eso no lo sé.', use: 'no saber' },
        { de: 'Ich bin nicht sicher, ob …', es: 'No estoy seguro de si …', use: 'inseguridad' },
        { de: 'Ich bin mir nicht ganz sicher.', es: 'No estoy del todo seguro.', use: 'inseguridad' },
        { de: 'Vielleicht, aber ich weiß es nicht genau.', es: 'Quizá, pero no lo sé con exactitud.', use: 'dudar' },
        { de: 'Ich wünsche mir …', es: 'Deseo … / Quisiera …', use: 'expresar deseo' },
        { de: 'Mein größter Traum ist …', es: 'Mi mayor sueño es …', use: 'hablar de sueños' },
        { de: 'Ich träume davon, …', es: 'Sueño con …', use: 'hablar de sueños' },
        { de: 'Ich hoffe, dass alles gut geht.', es: 'Espero que todo salga bien.', use: 'esperanza' }
      ],
      dialog: {
        title: 'Was wünschst du dir?',
        lines: [
          { s: 'A', de: 'Sag mal, Lena, hast du einen großen Wunsch?', es: 'Dime, Lena, ¿tienes algún gran deseo?' },
          { s: 'B', de: 'Ja, ich träume von einem kleinen Haus am Meer. Das ist ein Traum, der mich schon lange begleitet.', es: 'Sí, sueño con una casita junto al mar. Es un sueño que me acompaña desde hace mucho.' },
          { s: 'A', de: 'Wie schön! Ich wünsche mir einen Job, der mir wirklich Spaß macht.', es: '¡Qué bonito! Yo deseo un trabajo que me guste de verdad.' },
          { s: 'B', de: 'Bist du denn nicht zufrieden mit deiner Arbeit?', es: '¿Es que no estás contento con tu trabajo?' },
          { s: 'A', de: 'Nicht richtig. Mein Chef, der oft schlechte Laune hat, macht mich nervös.', es: 'No del todo. Mi jefe, que a menudo está de mal humor, me pone nervioso.' },
          { s: 'B', de: 'Das tut mir leid. Weißt du schon, was du machen willst?', es: 'Lo siento. ¿Ya sabes qué quieres hacer?' },
          { s: 'A', de: 'Keine Ahnung. Ich bin nicht sicher, ob ich die Stelle wechseln soll.', es: 'Ni idea. No estoy seguro de si debo cambiar de puesto.' },
          { s: 'B', de: 'Sprich doch mit der Kollegin, die du so nett findest. Sie kennt die Firma gut.', es: 'Habla con la colega que te parece tan simpática. Conoce bien la empresa.' },
          { s: 'A', de: 'Gute Idee! Ich hoffe, dass sie Zeit hat.', es: '¡Buena idea! Espero que tenga tiempo.' },
          { s: 'B', de: 'Bestimmt. Und wenn mein Traum wahr wird, lade ich dich ans Meer ein!', es: 'Seguro. Y si mi sueño se hace realidad, ¡te invito a la playa!' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Das ist der Mann, ___ neben uns wohnt.', o: ['der', 'den', 'die'], a: 0, why: 'Der Mann es masculino y hace de sujeto de wohnt: relativo en Nominativ, der.' },
        { t: 'mc', q: 'Die Frau, ___ ich gestern gesehen habe, ist Ärztin.', o: ['der', 'die', 'den'], a: 1, why: 'Frau es femenino; como objeto es Akkusativ, y el femenino es die.' },
        { t: 'mc', q: 'Das Kind, ___ dort spielt, ist mein Neffe.', o: ['den', 'die', 'das'], a: 2, why: 'Kind es neutro y es el sujeto de spielt: das.' },
        { t: 'mc', q: 'Das ist der Pullover, ___ ich mir wünsche.', o: ['der', 'den', 'das'], a: 1, why: 'Pullover es masculino y ich es el sujeto; el relativo es objeto, Akkusativ: den.' },
        { t: 'mc', q: 'Ich weiß nicht, ___ er heute kommt.', o: ['dass', 'weil', 'ob'], a: 2, why: 'En una pregunta indirecta de sí o no se usa ob (&quot;si&quot;).' },
        { t: 'gap', q: 'Die Leute, ___ im Haus wohnen, sind sehr nett.', a: ['die'], why: 'Leute es plural y sujeto de wohnen: die.' },
        { t: 'gap', q: 'Der Film, ___ wir gestern gesehen haben, war traurig. (der Film)', a: ['den'], why: 'Film es masculino y wir es el sujeto: relativo en Akkusativ, den.' },
        { t: 'gap', q: 'Das Mädchen, ___ dort steht, heißt Lena.', a: ['das'], why: 'Mädchen es neutro (aunque sea una niña) y sujeto: das.' },
        { t: 'gap', q: 'Keine Ahnung, ___ sie heute Abend Zeit hat.', a: ['ob'], why: 'Es una pregunta de sí o no, por eso ob y el verbo al final.' },
        { t: 'order', es: 'La mujer que trabaja aquí es muy simpática.', de: 'Die Frau, die hier arbeitet, ist sehr nett.', why: 'La oración de relativo va entre comas y su verbo (arbeitet) al final.' },
        { t: 'order', es: 'Ese es el hombre que conozco desde hace años.', de: 'Das ist der Mann, den ich seit Jahren kenne.', why: 'Mann masculino y objeto (ich es el sujeto): den; verbo kenne al final.' },
        { t: 'order', es: 'Ni idea de si el tren llega puntual.', de: 'Keine Ahnung, ob der Zug pünktlich ankommt.', why: 'Después de ob el verbo va al final y el separable queda junto: ankommt.' },
        { t: 'tr', es: 'El hombre que vive allí es mi profesor.', de: ['Der Mann, der dort wohnt, ist mein Lehrer.', 'Der Mann, der da wohnt, ist mein Lehrer.'], why: 'Relativo masculino en Nominativ (der), entre comas, con verbo al final.' },
        { t: 'tr', es: 'No sé si Tim es feliz.', de: ['Ich weiß nicht, ob Tim glücklich ist.', 'Keine Ahnung, ob Tim glücklich ist.'], why: 'Con ob el verbo va al final: ob Tim glücklich ist.' },
        { t: 'fix', q: 'Der Mann, der ich gestern gesehen habe, ist Arzt.', a: ['Der Mann, den ich gestern gesehen habe, ist Arzt.'], why: 'Ich es el sujeto, así que el relativo es objeto: Akkusativ masculino, den.' },
        { t: 'fix', q: 'Das ist das Kind, das spielt dort.', a: ['Das ist das Kind, das dort spielt.'], why: 'En la oración de relativo el verbo conjugado va al final.' },
        { t: 'match', pairs: [['glücklich', 'feliz'], ['traurig', 'triste'], ['wütend', 'furioso'], ['stolz', 'orgulloso'], ['erleichtert', 'aliviado'], ['neugierig', 'curioso']] }
      ],
      speak: [
        { prompt: 'Describe tu trabajo o tu casa ideal con 3 oraciones de relativo (Ich wünsche mir einen Job, der … / ein Haus, das …).', model: 'Ich wünsche mir einen Job, der mir viel Freiheit gibt. Ich träume von einem Haus, das einen kleinen Garten hat. Und ich möchte Kollegen, die freundlich und hilfsbereit sind.' },
        { prompt: 'Habla de una persona o cosa que te alegra o te molesta, usando un relativo en Akkusativ (der Mensch, den …; das Lied, das …) y un adjetivo de sentimiento (4-5 frases).', model: 'Ich habe einen Freund, den ich sehr mag. Er ist ein Mensch, der immer gelassen bleibt. Das Lied, das er mir geschickt hat, macht mich glücklich. Ich bin stolz auf ihn.' },
        { prompt: 'Para usar en voz alta: te preguntan algo que no sabes. Responde con tres formas distintas de expresar inseguridad (informal y más educada).', model: 'Keine Ahnung, ob der Bus um zehn fährt. Ich bin nicht sicher, wann das Konzert beginnt. Das weiß ich leider nicht, aber ich frage gern meine Kollegin.' }
      ]
    },
    {
      id: 'a2-23',
      title: 'Mein Lebenslauf',
      es: 'Biografía, escuela y formación',
      goals: ['Declinar los sustantivos de la n-Deklination (der Student, den Studenten)', 'Formar el Präteritum de verbos regulares e irregulares', 'Contar y escribir una biografía con fechas y conectores de tiempo', 'Hablar de escuela, formación y trabajo'],
      grammar: [
        {
          h: 'n-Deklination: sustantivos masculinos con -n / -en',
          p: 'Un grupo de sustantivos <b>masculinos</b> (casi todos personas o animales) recibe <b>-n o -en en todos los casos menos en el Nominativ singular</b>. Es decir: <i>der Student</i>, pero <i>den / dem Studenten</i>. El plural también termina en -n / -en. El sustantivo <i>der Name</i> es especial: Akk. y Dat. <i>Namen</i>, Gen. <i>Namens</i>. Los más frecuentes: <span class="de">der Junge, der Kollege, der Kunde, der Nachbar, der Student, der Herr, der Mensch, der Polizist, der Tourist, der Praktikant, der Name</span>.',
          table: { head: ['Caso', 'der Junge', 'der Student', 'der Name'], rows: [['Nominativ', 'der Junge', 'der Student', 'der Name'], ['Akkusativ', 'den <b>Jungen</b>', 'den <b>Studenten</b>', 'den <b>Namen</b>'], ['Dativ', 'dem <b>Jungen</b>', 'dem <b>Studenten</b>', 'dem <b>Namen</b>'], ['Genitiv', 'des <b>Jungen</b>', 'des <b>Studenten</b>', 'des <b>Namens</b>'], ['Plural', 'die <b>Jungen</b>', 'die <b>Studenten</b>', 'die <b>Namen</b>']] },
          ex: [
            { de: 'Ich kenne den Studenten aus meinem Kurs.', es: 'Conozco al estudiante de mi curso.' },
            { de: 'Anna schreibt ihrem Kollegen eine E-Mail.', es: 'Anna le escribe un correo a su colega.' },
            { de: 'Der Lehrer fragt den Jungen nach seinem Namen.', es: 'El profesor le pregunta al chico su nombre.' },
            { de: 'Wir helfen dem Nachbarn beim Umzug.', es: 'Ayudamos al vecino con la mudanza.' },
            { de: 'Die Polizisten fragen den Touristen nach dem Pass.', es: 'Los policías piden el pasaporte al turista.' }
          ],
          tip: 'Los hispanohablantes olvidan la terminación porque en español el sustantivo no cambia. Si es masculino, persona y estás en Akkusativ o Dativ, piensa en <b>-en</b>: <i>den Kollegen, dem Kunden</i>. Las mujeres no cambian (<i>die Studentin</i>).'
        },
        {
          h: 'Präteritum de los verbos regulares',
          p: 'El <b>Präteritum</b> es el pasado de la <b>lengua escrita</b>: biografías, cuentos, noticias. En la conversación se usa el Perfekt, salvo con <i>sein, haben</i> y los verbos modales. En los verbos regulares (débiles) se añade <b>-te</b> a la raíz y después las terminaciones personales. Si la raíz acaba en <b>-t, -d</b> o varias consonantes (arbeiten, warten, öffnen), se añade <b>-ete</b>. Ojo: <b>ich</b> y <b>er/sie/es</b> tienen la misma forma.',
          table: { head: ['Persona', 'machen', 'arbeiten'], rows: [['ich', 'mach<b>te</b>', 'arbeit<b>ete</b>'], ['du', 'mach<b>test</b>', 'arbeit<b>etest</b>'], ['er / sie / es', 'mach<b>te</b>', 'arbeit<b>ete</b>'], ['wir', 'mach<b>ten</b>', 'arbeit<b>eten</b>'], ['ihr', 'mach<b>tet</b>', 'arbeit<b>etet</b>'], ['sie / Sie', 'mach<b>ten</b>', 'arbeit<b>eten</b>']] },
          ex: [
            { de: 'Ich machte 2012 mein Abitur.', es: 'Hice el bachillerato en 2012.' },
            { de: 'Er arbeitete drei Jahre in einer Bank.', es: 'Trabajó tres años en un banco.' },
            { de: 'Wir wohnten damals in Hamburg.', es: 'Entonces vivíamos en Hamburgo.' },
            { de: 'Sie lernte schon als Kind Klavier.', es: 'Aprendió piano ya de niña.' },
            { de: 'Meine Eltern kauften ein kleines Haus.', es: 'Mis padres compraron una casita.' }
          ],
          tip: 'El Präteritum no equivale a un solo pasado español: puede traducirse como indefinido o imperfecto. En una conversación normal, di <i>Ich habe gearbeitet</i>; en un texto escrito, <i>Ich arbeitete</i>.'
        },
        {
          h: 'Präteritum de los verbos irregulares',
          p: 'Los verbos irregulares (fuertes) <b>cambian la vocal de la raíz</b> y <b>no llevan -te</b>. Las formas <b>ich</b> y <b>er/sie/es</b> no tienen terminación; los demás añaden <b>-st, -en, -t, -en</b>: <i>ich ging, du gingst, er ging, wir gingen, ihr gingt, sie gingen</i>. Hay que aprender cada forma. Recuerda además <b>sein → war, haben → hatte, werden → wurde</b>, y otros muy usados: <i>geben – gab, nehmen – nahm, lesen – las, sprechen – sprach, essen – aß</i>.',
          table: { head: ['Infinitivo', 'Präteritum (er/sie)', 'Perfekt'], rows: [['gehen', '<b>ging</b>', 'ist gegangen'], ['kommen', '<b>kam</b>', 'ist gekommen'], ['finden', '<b>fand</b>', 'hat gefunden'], ['sehen', '<b>sah</b>', 'hat gesehen'], ['schreiben', '<b>schrieb</b>', 'hat geschrieben'], ['bleiben', '<b>blieb</b>', 'ist geblieben'], ['fahren', '<b>fuhr</b>', 'ist gefahren'], ['beginnen', '<b>begann</b>', 'hat begonnen']] },
          ex: [
            { de: 'Mit sechs Jahren kam ich in die Schule.', es: 'A los seis años entré en el colegio.' },
            { de: 'Nach der Schule ging er nach Berlin.', es: 'Después del colegio se fue a Berlín.' },
            { de: 'Sie fand schnell eine Stelle.', es: 'Encontró rápido un empleo.' },
            { de: 'Wir blieben ein Jahr in Spanien.', es: 'Nos quedamos un año en España.' },
            { de: 'Er schrieb seine erste Bewerbung mit 19.', es: 'Escribió su primera solicitud a los 19.' }
          ],
          tip: 'Truco: aprende cada verbo irregular con sus tres formas (<i>gehen – ging – ist gegangen</i>). Un error típico es inventar formas regulares como <i>gehte</i> o <i>kommte</i>: no existen.'
        },
        {
          h: 'Contar una biografía',
          p: 'Para una biografía o un currículum narrado usa el <b>Präteritum</b> y expresiones de tiempo que ordenen los hechos. Fíjate: <i>geboren werden</i> se dice <b>Ich wurde … geboren</b>. Con los años, di <i>1998</i> o <i>im Jahr 1998</i>, sin &quot;en&quot; delante de la cifra sola. Y para algo que sigue hoy usa <b>seit</b> con el Präsens.',
          table: { head: ['Expresión', 'Ejemplo'], rows: [['1998 / im Jahr 1998', 'Ich wurde 1998 in Köln geboren.'], ['mit sechs Jahren', 'Mit sechs Jahren kam ich in die Schule.'], ['von … bis …', 'Von 2016 bis 2020 studierte ich in Leipzig.'], ['danach / später', 'Danach machte ich ein Praktikum.'], ['seit + Dativ (con Präsens)', 'Seit 2021 arbeite ich als Lehrer.']] },
          ex: [
            { de: 'Ich wurde 1990 in Dresden geboren.', es: 'Nací en 1990 en Dresde.' },
            { de: 'Danach besuchte ich das Gymnasium.', es: 'Después fui al instituto.' },
            { de: 'Von 2010 bis 2014 studierte sie Biologie.', es: 'De 2010 a 2014 estudió Biología.' },
            { de: 'Später zog er nach München um.', es: 'Más tarde se mudó a Múnich.' },
            { de: 'Seit 2019 arbeite ich als Lehrerin.', es: 'Desde 2019 trabajo como profesora.' }
          ],
          tip: 'Con verbos separables en Präteritum la partícula va al <b>final</b>: <i>Er zog 2018 nach Wien um.</i> En una subordinada se junta: <i>…, weil er nach Wien umzog.</i>'
        }
      ],
      vocab: [
        { de: 'die Grundschule', pl: 'die Grundschulen', es: 'la escuela primaria', ex: 'Meine Tochter geht noch in die Grundschule.', exes: 'Mi hija todavía va a la escuela primaria.' },
        { de: 'das Gymnasium', pl: 'die Gymnasien', es: 'el instituto (de bachillerato)', ex: 'Nach der Grundschule ging ich auf das Gymnasium.', exes: 'Después de la primaria fui al instituto.' },
        { de: 'die Klasse', pl: 'die Klassen', es: 'la clase / el curso', ex: 'In meiner Klasse waren fünfundzwanzig Kinder.', exes: 'En mi clase había veinticinco niños.' },
        { de: 'der Schulabschluss', pl: 'die Schulabschlüsse', es: 'el título escolar', ex: 'Mit dem Schulabschluss kann man eine Ausbildung beginnen.', exes: 'Con el título escolar se puede empezar una formación.' },
        { de: 'das Zeugnis', pl: 'die Zeugnisse', es: 'el boletín / certificado de notas', ex: 'Im Zeugnis stand eine gute Note in Mathe.', exes: 'En el boletín había una buena nota en mates.' },
        { de: 'die Prüfung', pl: 'die Prüfungen', es: 'el examen', ex: 'Die Prüfung war schwer, aber fair.', exes: 'El examen fue difícil, pero justo.' },
        { de: 'die Ausbildung', pl: 'die Ausbildungen', es: 'la formación profesional', ex: 'Sie machte eine Ausbildung als Krankenschwester.', exes: 'Hizo una formación como enfermera.' },
        { de: 'das Studium', pl: 'die Studien', es: 'los estudios universitarios', ex: 'Das Studium dauerte vier Jahre.', exes: 'Los estudios duraron cuatro años.' },
        { de: 'die Universität', pl: 'die Universitäten', es: 'la universidad', ex: 'Er studierte an der Universität in Wien.', exes: 'Estudió en la Universidad de Viena.' },
        { de: 'der Student', pl: 'die Studenten', es: 'el estudiante', ex: 'Der Student wohnt in einer kleinen WG.', exes: 'El estudiante vive en un piso compartido pequeño.' },
        { de: 'der Kollege', pl: 'die Kollegen', es: 'el colega', ex: 'Mein Kollege hilft mir oft bei der Arbeit.', exes: 'Mi colega me ayuda a menudo en el trabajo.' },
        { de: 'der Junge', pl: 'die Jungen', es: 'el chico / el niño', ex: 'Der Junge spielt jeden Tag Fußball.', exes: 'El chico juega al fútbol todos los días.' },
        { de: 'der Name', pl: 'die Namen', es: 'el nombre', ex: 'Wie ist der Name Ihrer Firma?', exes: '¿Cómo se llama su empresa?' },
        { de: 'das Praktikum', pl: 'die Praktika', es: 'las prácticas', ex: 'Im Sommer machte ich ein Praktikum in einem Verlag.', exes: 'En verano hice unas prácticas en una editorial.' },
        { de: 'der Lebenslauf', pl: 'die Lebensläufe', es: 'el currículum', ex: 'Ich schreibe meinen Lebenslauf neu.', exes: 'Estoy reescribiendo mi currículum.' },
        { de: 'der Beruf', pl: 'die Berufe', es: 'la profesión', ex: 'Welchen Beruf hat dein Vater?', exes: '¿Qué profesión tiene tu padre?' },
        { de: 'studieren', es: 'estudiar (una carrera)', note: 'studiert – studierte – hat studiert', ex: 'Ich studierte zuerst Geschichte.', exes: 'Primero estudié Historia.' },
        { de: 'bestehen', es: 'aprobar / superar', note: 'besteht – bestand – hat bestanden', ex: 'Sie bestand die Prüfung im ersten Versuch.', exes: 'Aprobó el examen al primer intento.' },
        { de: 'ab|schließen', es: 'terminar / completar', note: 'schließt ab – schloss ab – hat abgeschlossen', ex: 'Er schloss seine Ausbildung mit Erfolg ab.', exes: 'Terminó su formación con éxito.' },
        { de: 'um|ziehen', es: 'mudarse', note: 'zieht um – zog um – ist umgezogen', ex: 'Wir zogen vor zehn Jahren nach Hamburg um.', exes: 'Nos mudamos a Hamburgo hace diez años.' },
        { de: 'geboren werden', es: 'nacer', note: 'wird geboren – wurde geboren – ist geboren worden', ex: 'Mein Opa wurde 1950 in einem Dorf geboren.', exes: 'Mi abuelo nació en 1950 en un pueblo.' }
      ],
      phrases: [
        { de: 'Ich wurde 1995 in … geboren.', es: 'Nací en 1995 en …', use: 'nacimiento' },
        { de: 'Ich ging in … zur Schule.', es: 'Fui al colegio en …', use: 'escuela' },
        { de: 'Nach dem Schulabschluss machte ich eine Ausbildung als …', es: 'Después del colegio hice una formación como …', use: 'formación' },
        { de: 'Von 2010 bis 2014 studierte ich …', es: 'De 2010 a 2014 estudié …', use: 'estudios' },
        { de: 'Danach arbeitete ich als …', es: 'Después trabajé como …', use: 'secuencia' },
        { de: 'Später zog ich nach … um.', es: 'Más tarde me mudé a …', use: 'secuencia' },
        { de: 'Mit 25 Jahren fing ich bei … an.', es: 'A los 25 empecé en …', use: 'edad y hechos' },
        { de: 'Seit … arbeite ich bei …', es: 'Desde … trabajo en …', use: 'situación actual' },
        { de: 'Das war eine wichtige Zeit für mich.', es: 'Fue una época importante para mí.', use: 'valorar' }
      ],
      dialog: {
        title: 'Ein Interview mit Frau Weber',
        lines: [
          { s: 'A', de: 'Frau Weber, erzählen Sie uns bitte etwas über Ihr Leben. Wo wurden Sie geboren?', es: 'Señora Weber, cuéntenos algo de su vida. ¿Dónde nació?' },
          { s: 'B', de: 'Ich wurde 1985 in Dresden geboren. Dort besuchte ich auch die Grundschule.', es: 'Nací en 1985 en Dresde. Allí fui también a la escuela primaria.' },
          { s: 'A', de: 'Und danach?', es: '¿Y después?' },
          { s: 'B', de: 'Danach ging ich auf das Gymnasium und schloss die Schule mit dem Abitur ab.', es: 'Después fui al instituto y terminé el colegio con el Abitur (bachillerato).' },
          { s: 'A', de: 'Was machten Sie nach dem Schulabschluss?', es: '¿Qué hizo después de terminar el colegio?' },
          { s: 'B', de: 'Ich studierte vier Jahre Biologie in Leipzig. Dort lernte ich einen Studenten aus Spanien kennen.', es: 'Estudié cuatro años Biología en Leipzig. Allí conocí a un estudiante de España.' },
          { s: 'A', de: 'Und wann begann Ihre Arbeit als Lehrerin?', es: '¿Y cuándo empezó su trabajo como profesora?' },
          { s: 'B', de: 'Nach dem Studium machte ich ein Praktikum an einer Schule. Dort fand ich auch meine Stelle.', es: 'Después de la carrera hice unas prácticas en un colegio. Allí encontré también mi puesto.' },
          { s: 'A', de: 'Und Sie blieben bis heute dort?', es: '¿Y se quedó allí hasta hoy?' },
          { s: 'B', de: 'Ja, ich bin sehr zufrieden. Ich habe nette Kollegen und tolle Schüler.', es: 'Sí, estoy muy satisfecha. Tengo colegas simpáticos y alumnos estupendos.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich kenne den ___ aus meinem Kurs.', o: ['Studenten', 'Student', 'Studentes'], a: 0, why: 'Student es n-Deklination: en Akkusativ lleva -en (den Studenten).' },
        { t: 'mc', q: 'Ich schreibe meinem ___ eine E-Mail.', o: ['Kollege', 'Kollegen', 'Kollegens'], a: 1, why: 'Dativ de un sustantivo de n-Deklination: -n (dem Kollegen).' },
        { t: 'mc', q: 'Gestern ___ Anna lange im Büro.', o: ['arbeitete', 'arbeitetet', 'arbeitte'], a: 0, why: 'Raíz acabada en -t: Präteritum con -ete; con er/sie/es: arbeitete.' },
        { t: 'mc', q: 'Vor zehn Jahren ___ er nach Wien.', o: ['gehte', 'gegangen', 'ging'], a: 2, why: 'El Präteritum de gehen es ging (verbo irregular, sin -te).' },
        { t: 'mc', q: 'Sie ___ ein Jahr in Spanien.', o: ['bleibte', 'blieb', 'geblieben'], a: 1, why: 'El Präteritum de bleiben es blieb.' },
        { t: 'gap', q: 'Der Lehrer fragt den ___ nach seinem Namen. (der Junge)', a: ['jungen'], why: 'Junge es n-Deklination: en Akkusativ lleva -n (den Jungen).' },
        { t: 'gap', q: 'Er ___ 2015 sein Studium. (beginnen, Präteritum)', a: ['begann'], why: 'beginnen es irregular: begann.' },
        { t: 'gap', q: 'Wir ___ damals in einer kleinen Stadt. (wohnen, Präteritum)', a: ['wohnten'], why: 'Verbo regular: wohn + te + n para wir: wohnten.' },
        { t: 'gap', q: 'Ich ___ gestern einen interessanten Roman. (lesen, Präteritum)', a: ['las'], why: 'lesen es irregular: ich las (sin terminación en ich).' },
        { t: 'order', es: 'Anna le preguntó el camino al chico.', de: 'Anna fragte den Jungen nach dem Weg.', why: 'Präteritum de fragen = fragte; Junge en Akkusativ con -n: den Jungen.' },
        { t: 'order', es: 'Después de la escuela hizo una formación.', de: 'Nach der Schule machte er eine Ausbildung.', why: 'Con un complemento de tiempo al principio, el verbo conjugado (machte) va en segunda posición.' },
        { t: 'order', es: 'Después fue al instituto.', de: 'Danach ging sie auf das Gymnasium.', why: 'Danach ocupa la primera posición, así que el verbo ging va segundo.' },
        { t: 'tr', es: 'Mi colega trabajó diez años en Madrid.', de: ['Mein Kollege arbeitete zehn Jahre in Madrid.', 'Mein Kollege arbeitete zehn Jahre lang in Madrid.', 'Meine Kollegin arbeitete zehn Jahre in Madrid.'], why: 'arbeiten en Präteritum: arbeitete. Kollege es sujeto, no cambia.' },
        { t: 'tr', es: 'Conozco al chico y a su amigo.', de: ['Ich kenne den Jungen und seinen Freund.'], why: 'Akkusativ masculino: den Jungen (n-Deklination) y seinen Freund.' },
        { t: 'fix', q: 'Ich habe den Student gestern gesehen.', a: ['Ich habe den Studenten gestern gesehen.', 'Ich habe gestern den Studenten gesehen.'], why: 'En Akkusativ, Student lleva -en: den Studenten.' },
        { t: 'fix', q: 'Gestern gehte er nach Hause.', a: ['Gestern ging er nach Hause.'], why: 'gehen es irregular: Präteritum ging, no gehte.' },
        { t: 'match', pairs: [['die Grundschule', 'la escuela primaria'], ['das Zeugnis', 'el boletín de notas'], ['die Ausbildung', 'la formación profesional'], ['das Studium', 'los estudios universitarios'], ['der Lebenslauf', 'el currículum'], ['bestehen', 'aprobar']] }
      ],
      speak: [
        { prompt: 'Cuenta en 5-6 frases tu biografía en Präteritum: dónde naciste, escuela, formación o estudios (usa wurde … geboren, danach, später).', model: 'Ich wurde 1990 in einer kleinen Stadt geboren. Mit sechs Jahren kam ich in die Schule. Danach besuchte ich das Gymnasium. Von 2009 bis 2013 studierte ich Sprachen. Später zog ich in eine größere Stadt um. Seit 2016 arbeite ich als Lehrer.' },
        { prompt: 'Escribe sobre un familiar (abuelo, abuela, tío…) en Präteritum: qué hizo, dónde vivió y trabajó (4-5 frases).', model: 'Mein Opa wurde 1950 auf dem Land geboren. Er ging nur kurz zur Schule und arbeitete schon mit 15 Jahren auf einem Bauernhof. Später fuhr er Taxi in der Stadt. Er blieb dort sein ganzes Leben und war immer sehr zufrieden.' },
        { prompt: 'Para usar en voz alta: preséntate en una entrevista de trabajo con tu currículum (Sie-Form, 4-5 frases).', model: 'Ich heiße Maria Lopez. Ich studierte Sprachen an der Universität und machte danach ein Praktikum in Berlin. Dort lernte ich viele Kollegen kennen und arbeitete zwei Jahre in einer Schule. Seit 2022 unterrichte ich online. Ich suche jetzt eine neue Aufgabe.' }
      ]
    },
    {
      id: 'a2-24',
      title: 'Ein Neuanfang',
      es: 'Nuevos comienzos',
      goals: ['Formar y usar el Passiv Präsens (werden + Partizip II)', 'Hablar de procesos sin decir quién actúa', 'Hacer propuestas y reaccionar de forma positiva y negativa', 'Hablar de tiendas, negocios y servicios'],
      grammar: [
        {
          h: 'Passiv Präsens: werden + Partizip II',
          p: 'En la <b>voz pasiva</b> importa lo que ocurre, no quién lo hace. Se forma con <b>werden</b> (conjugado, en segunda posición) + <b>Partizip II</b> (al final). El objeto de la frase activa pasa a ser el <b>sujeto</b> (Nominativ). En español se parece a &quot;se abre la tienda&quot; o &quot;la luz es apagada&quot;; en alemán se usa mucho para procesos, instrucciones y anuncios. Con verbos separables el participio es <i>ausgemacht, aufgemacht, eingekauft</i>.',
          table: { head: ['Activo (man)', 'Pasivo'], rows: [['Man macht das Licht aus.', 'Das Licht <b>wird ausgemacht</b>.'], ['Man verkauft hier frisches Brot.', 'Hier <b>wird</b> frisches Brot <b>verkauft</b>.'], ['Man öffnet den Laden um neun.', 'Der Laden <b>wird</b> um neun <b>geöffnet</b>.'], ['Man repariert die Fahrräder.', 'Die Fahrräder <b>werden repariert</b>.']] },
          ex: [
            { de: 'Das Licht wird ausgemacht.', es: 'Se apaga la luz.' },
            { de: 'Die Brötchen werden jeden Morgen frisch gebacken.', es: 'Los panecillos se hornean frescos cada mañana.' },
            { de: 'Der Laden wird renoviert.', es: 'Están reformando la tienda.' },
            { de: 'Das Paket wird morgen geliefert.', es: 'El paquete se entrega mañana.' },
            { de: 'Hier werden alte Fahrräder repariert.', es: 'Aquí se reparan bicicletas viejas.' }
          ],
          tip: 'El verbo <b>werden</b> concuerda con el sujeto del pasivo: singular → <i>wird</i>, plural → <i>werden</i>. No lo confundas con <i>sein</i>: <i>Das Licht ist aus</i> (estado) frente a <i>Das Licht wird ausgemacht</i> (acción).'
        },
        {
          h: 'Pasivo sin agente y con von',
          p: 'Casi siempre el pasivo <b>no menciona quién actúa</b>, porque no se sabe o no importa: <i>Hier wird nicht geraucht.</i> Si quieres decir quién lo hace, puedes añadir <b>von + Dativ</b>, pero solo cuando el agente es importante: <i>Das Brot wird von einem Bäcker gebacken.</i> En las instrucciones y los avisos es muy habitual el pasivo (<i>Die Tür wird um 22 Uhr geschlossen.</i>).',
          table: { head: ['Tipo', 'Ejemplo'], rows: [['sin agente (lo normal)', 'Der Laden <b>wird</b> um 20 Uhr <b>geschlossen</b>.'], ['con von + Dativ (poco frecuente)', 'Der Laden <b>wird von der Besitzerin</b> geschlossen.'], ['pregunta', '<b>Wird</b> hier Obst <b>verkauft</b>?'], ['negación', 'Hier <b>wird</b> nicht <b>geraucht</b>.']] },
          ex: [
            { de: 'In diesem Geschäft werden Schuhe verkauft.', es: 'En esta tienda se venden zapatos.' },
            { de: 'Wird hier auch Brot geliefert?', es: '¿Aquí también se entrega pan?' },
            { de: 'Das Geschäft wird von zwei Brüdern geführt.', es: 'El negocio lo llevan dos hermanos.' },
            { de: 'Die Kasse wird um 18 Uhr geschlossen.', es: 'La caja se cierra a las 18 h.' },
            { de: 'Hier wird nicht geraucht.', es: 'Aquí no se fuma.' }
          ],
          tip: 'En español usas &quot;se&quot; (&quot;se vende&quot;). En alemán <b>no existe ese &quot;se&quot;</b>: usa <b>werden + participio</b> (o <i>man</i> + activo: <i>Man verkauft hier Schuhe</i>).'
        },
        {
          h: 'Hacer propuestas y reaccionar',
          p: 'Para proponer algo se usan fórmulas fijas: <span class="de">Wollen wir …?</span> (con infinitivo al final), <span class="de">Wie wäre es mit …?</span> (+ Dativ), <span class="de">Wir könnten …</span>, <span class="de">Hast du Lust, … zu …?</span>, <span class="de">Lass uns …</span>. Reacciona con una frase positiva (aceptar) o negativa (rechazar con educación y, mejor, con motivo o alternativa).',
          table: { head: ['Positivo', 'Negativo'], rows: [['Gute Idee!', 'Tut mir leid, das passt mir nicht.'], ['Das klingt super!', 'Ich finde das nicht so gut.'], ['Ja, gern!', 'Dazu habe ich keine Lust.'], ['Einverstanden!', 'Lieber nicht. Wie wäre es mit …?']] },
          ex: [
            { de: 'Wollen wir zusammen zum Wochenmarkt gehen?', es: '¿Vamos juntos al mercado?' },
            { de: 'Wie wäre es mit einem Kaffee?', es: '¿Qué tal un café?' },
            { de: 'Wir könnten den Laden gemeinsam renovieren.', es: 'Podríamos reformar la tienda juntos.' },
            { de: 'Hast du Lust, morgen mit mir einzukaufen?', es: '¿Tienes ganas de ir de compras conmigo mañana?' },
            { de: 'Gute Idee! Das klingt super.', es: '¡Buena idea! Suena genial.' }
          ],
          tip: 'Después de <b>Wollen wir</b> el verbo principal va en infinitivo al final: <i>Wollen wir ins Kino gehen?</i> Con <i>Hast du Lust, … zu …?</i> se añade <b>zu</b> antes del infinitivo (con separables: <i>einzukaufen</i>).'
        }
      ],
      vocab: [
        { de: 'der Laden', pl: 'die Läden', es: 'la tienda', ex: 'Der Laden an der Ecke hat lange geöffnet.', exes: 'La tienda de la esquina abre hasta tarde.' },
        { de: 'das Geschäft', pl: 'die Geschäfte', es: 'el comercio / el negocio', ex: 'Meine Tante hat ein kleines Geschäft in der Altstadt.', exes: 'Mi tía tiene un pequeño negocio en el casco antiguo.' },
        { de: 'die Bäckerei', pl: 'die Bäckereien', es: 'la panadería', ex: 'In der Bäckerei gibt es frische Brötchen.', exes: 'En la panadería hay panecillos frescos.' },
        { de: 'die Metzgerei', pl: 'die Metzgereien', es: 'la carnicería', ex: 'Die Metzgerei verkauft auch Wurst.', exes: 'La carnicería también vende embutidos.' },
        { de: 'die Apotheke', pl: 'die Apotheken', es: 'la farmacia', ex: 'Die Apotheke hat bis 20 Uhr geöffnet.', exes: 'La farmacia está abierta hasta las 20 h.' },
        { de: 'der Supermarkt', pl: 'die Supermärkte', es: 'el supermercado', ex: 'Im Supermarkt kaufe ich Milch und Obst.', exes: 'En el supermercado compro leche y fruta.' },
        { de: 'die Buchhandlung', pl: 'die Buchhandlungen', es: 'la librería', ex: 'In der Buchhandlung gibt es viele Kinderbücher.', exes: 'En la librería hay muchos libros infantiles.' },
        { de: 'der Wochenmarkt', pl: 'die Wochenmärkte', es: 'el mercado semanal', ex: 'Am Samstag gehen wir auf den Wochenmarkt.', exes: 'El sábado vamos al mercado semanal.' },
        { de: 'der Kunde', pl: 'die Kunden', es: 'el cliente', ex: 'Der Kunde fragt nach dem Preis.', exes: 'El cliente pregunta por el precio.' },
        { de: 'der Verkäufer', pl: 'die Verkäufer', es: 'el vendedor', ex: 'Der Verkäufer berät die Kunden freundlich.', exes: 'El vendedor asesora amablemente a los clientes.' },
        { de: 'die Kasse', pl: 'die Kassen', es: 'la caja', ex: 'An der Kasse muss man lange warten.', exes: 'En la caja hay que esperar mucho.' },
        { de: 'die Öffnungszeiten', es: 'el horario de apertura (pl.)', ex: 'Die Öffnungszeiten stehen an der Tür.', exes: 'El horario de apertura está en la puerta.' },
        { de: 'das Angebot', pl: 'die Angebote', es: 'la oferta', ex: 'Diese Woche gibt es ein tolles Angebot für Obst.', exes: 'Esta semana hay una oferta estupenda de fruta.' },
        { de: 'eröffnen', es: 'abrir / inaugurar', note: 'eröffnet – eröffnete – hat eröffnet', ex: 'Im Mai wird hier ein neues Café eröffnet.', exes: 'En mayo se inaugura aquí una cafetería nueva.' },
        { de: 'schließen', es: 'cerrar', note: 'schließt – schloss – hat geschlossen', ex: 'Der Laden schließt um 19 Uhr.', exes: 'La tienda cierra a las 19 h.' },
        { de: 'verkaufen', es: 'vender', note: 'verkauft – verkaufte – hat verkauft', ex: 'Der Händler verkauft frisches Gemüse.', exes: 'El comerciante vende verdura fresca.' },
        { de: 'liefern', es: 'entregar / repartir', ex: 'Das Geschäft liefert die Waren nach Hause.', exes: 'La tienda entrega la mercancía a domicilio.' },
        { de: 'reparieren', es: 'reparar', ex: 'Hier werden Handys repariert.', exes: 'Aquí se reparan móviles.' },
        { de: 'renovieren', es: 'reformar / renovar', ex: 'Der Besitzer renoviert den Laden im Sommer.', exes: 'El dueño reforma la tienda en verano.' },
        { de: 'an|bieten', es: 'ofrecer', note: 'bietet an – bot an – hat angeboten', ex: 'Die Bäckerei bietet auch Kaffee zum Mitnehmen an.', exes: 'La panadería también ofrece café para llevar.' }
      ],
      phrases: [
        { de: 'Wollen wir …?', es: '¿Vamos a …? / ¿Quieres que …?', use: 'proponer' },
        { de: 'Wie wäre es mit …?', es: '¿Qué tal …?', use: 'proponer' },
        { de: 'Wir könnten …', es: 'Podríamos …', use: 'proponer' },
        { de: 'Hast du Lust, … zu …?', es: '¿Tienes ganas de …?', use: 'invitar' },
        { de: 'Gute Idee!', es: '¡Buena idea!', use: 'aceptar' },
        { de: 'Das klingt super!', es: '¡Suena genial!', use: 'aceptar' },
        { de: 'Ja, gern. Einverstanden!', es: 'Sí, con gusto. ¡De acuerdo!', use: 'aceptar' },
        { de: 'Tut mir leid, das passt mir nicht.', es: 'Lo siento, no me viene bien.', use: 'rechazar' },
        { de: 'Ich finde das nicht so gut. Wie wäre es stattdessen mit …?', es: 'No me parece tan bien. ¿Qué tal en su lugar …?', use: 'rechazar' }
      ],
      dialog: {
        title: 'Eine neue Bäckerei',
        lines: [
          { s: 'A', de: 'Hast du gesehen? In der Hauptstraße wird eine neue Bäckerei eröffnet.', es: '¿Has visto? En la calle principal van a abrir una panadería nueva.' },
          { s: 'B', de: 'Wirklich? Der Laden wird doch gerade renoviert, oder?', es: '¿De verdad? La tienda la están reformando ahora mismo, ¿no?' },
          { s: 'A', de: 'Genau. Am Samstag werden dort die ersten Brötchen verkauft.', es: 'Exacto. El sábado se venden allí los primeros panecillos.' },
          { s: 'B', de: 'Wie schön! Wollen wir am Samstag zusammen hingehen?', es: '¡Qué bien! ¿Vamos juntos allí el sábado?' },
          { s: 'A', de: 'Gute Idee! Wir könnten danach noch auf den Wochenmarkt gehen.', es: '¡Buena idea! Podríamos ir luego también al mercado semanal.' },
          { s: 'B', de: 'Hmm, das passt mir leider nicht. Ich muss um zwölf Uhr zu Hause sein.', es: 'Mmm, por desgracia no me viene bien. Tengo que estar en casa a las doce.' },
          { s: 'A', de: 'Kein Problem. Wie wäre es dann mit einem Kaffee in der Bäckerei?', es: 'No hay problema. ¿Y qué tal un café en la panadería?' },
          { s: 'B', de: 'Das klingt super! Wird dort auch Kuchen angeboten?', es: '¡Suena genial! ¿Allí también se ofrece pastel?' },
          { s: 'A', de: 'Ich glaube schon. Auf dem Schild steht: Hier wird jeden Tag frisch gebacken.', es: 'Creo que sí. En el cartel pone: aquí se hornea fresco cada día.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Das Licht ___ ausgemacht.', o: ['wird', 'werden', 'hat'], a: 0, why: 'Passiv: werden + Partizip II; con Licht (singular) usamos wird.' },
        { t: 'mc', q: 'Die Brötchen ___ jeden Morgen frisch gebacken.', o: ['wird', 'wirst', 'werden'], a: 2, why: 'El sujeto Brötchen es plural, por eso werden.' },
        { t: 'mc', q: 'Im Laden ___ frisches Brot verkauft.', o: ['wird', 'werden', 'ist'], a: 0, why: 'Frisches Brot es singular: wird + verkauft (Passiv).' },
        { t: 'mc', q: 'Das Paket ___ morgen geliefert.', o: ['hat', 'wird', 'wirst'], a: 1, why: 'Passiv Präsens: Das Paket (3.ª persona singular) → wird.' },
        { t: 'mc', q: 'Wollen wir heute Abend essen gehen? – Elige la reacción positiva:', o: ['Das klingt super!', 'Tut mir leid, das passt mir nicht.', 'Ich finde das nicht so gut.'], a: 0, why: 'Das klingt super es una reacción positiva; las otras dos rechazan.' },
        { t: 'gap', q: 'Die Kunden ___ von der Verkäuferin freundlich bedient. (werden)', a: ['werden'], why: 'Sujeto plural (die Kunden) → werden.' },
        { t: 'gap', q: 'Der Laden ___ um 20 Uhr geschlossen. (werden)', a: ['wird'], why: 'Sujeto singular (der Laden) → wird.' },
        { t: 'gap', q: 'Das Licht wird ___. (aus|machen)', a: ['ausgemacht'], why: 'El participio de ausmachen lleva ge- entre la partícula y la raíz: ausgemacht.' },
        { t: 'gap', q: 'Wie ___ es mit einem Spaziergang? (sein, Vorschlag)', a: ['wäre'], why: 'La fórmula fija para proponer es Wie wäre es mit …?' },
        { t: 'order', es: 'La farmacia se abre a las ocho.', de: 'Die Apotheke wird um acht Uhr geöffnet.', why: 'Passiv: wird en segunda posición y el Partizip II (geöffnet) al final.' },
        { t: 'order', es: 'Aquí se reparan bicicletas viejas.', de: 'Hier werden alte Fahrräder repariert.', why: 'Sujeto plural (Fahrräder) → werden; participio al final.' },
        { t: 'order', es: '¿Qué tal un café?', de: 'Wie wäre es mit einem Kaffee?', why: 'Wie wäre es mit + Dativ: einem Kaffee.' },
        { t: 'tr', es: 'Aquí se venden zapatos.', de: ['Hier werden Schuhe verkauft.', 'In diesem Laden werden Schuhe verkauft.'], why: 'Passiv sin agente: werden + verkauft.' },
        { t: 'tr', es: 'La tienda se abre a las nueve.', de: ['Der Laden wird um neun Uhr geöffnet.', 'Der Laden wird um neun Uhr aufgemacht.', 'Das Geschäft wird um neun Uhr geöffnet.'], why: 'Passiv Präsens: wird + Partizip II (geöffnet o aufgemacht).' },
        { t: 'fix', q: 'Das Licht wird ausmachen.', a: ['Das Licht wird ausgemacht.'], why: 'En el pasivo se necesita el Partizip II (ausgemacht), no el infinitivo.' },
        { t: 'fix', q: 'Der Laden werden renoviert.', a: ['Der Laden wird renoviert.'], why: 'Sujeto singular (der Laden) → wird, no werden.' },
        { t: 'match', pairs: [['die Bäckerei', 'la panadería'], ['die Apotheke', 'la farmacia'], ['die Buchhandlung', 'la librería'], ['die Öffnungszeiten', 'el horario de apertura'], ['liefern', 'entregar'], ['eröffnen', 'inaugurar']] }
      ],
      speak: [
        { prompt: 'Describe en 4-5 frases qué se hace en una tienda o negocio que conoces (usa el pasivo: Hier wird … verkauft / repariert / geliefert).', model: 'In unserer Bäckerei werden jeden Morgen frische Brötchen gebacken. Um sieben Uhr wird der Laden geöffnet. Hier wird auch Kaffee verkauft. Am Abend werden die Reste billiger angeboten.' },
        { prompt: 'Haz tres propuestas a un amigo para el fin de semana (Wollen wir …? / Wie wäre es mit …? / Wir könnten …) y reacciona una vez de forma positiva y otra de forma negativa.', model: 'Wollen wir am Samstag auf den Wochenmarkt gehen? Wie wäre es danach mit einem Kaffee? Wir könnten auch ins Kino gehen. – Gute Idee, das klingt super! – Hmm, das passt mir leider nicht. Wie wäre es stattdessen mit Sonntag?' },
        { prompt: 'Para usar en voz alta: en una tienda nueva, pregunta qué servicios se ofrecen y cuál es el horario (3-4 frases, Sie-Form).', model: 'Entschuldigung, wird hier auch Kuchen verkauft? Wie sind Ihre Öffnungszeiten? Werden die Waren auch nach Hause geliefert? Vielen Dank für Ihre Hilfe!' }
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'b1m1',
  level: 'B1',
  num: 1,
  title: 'Recuerdos y amistades',
  emoji: '🤝',
  lessons: [
    {
      id: 'b1-01',
      title: 'Weißt du noch, als …?',
      es: 'Recuerdos y fases de la vida',
      goals: ['Distinguir als (una vez en el pasado) y wenn (repetición, presente, futuro, condición)', 'Contar vivencias y recuerdos con marcadores temporales', 'Comparar tu experiencia con la de otras personas', 'Hablar de las fases de la vida'],
      grammar: [
        {
          h: 'als o wenn: ¿una vez o muchas veces?',
          p: 'En español los dos son &quot;cuando&quot;, pero el alemán obliga a elegir. <b>als</b> se usa solo en el <b>pasado</b> para un hecho único o una fase concreta (<i>als ich zehn war</i>). <b>wenn</b> se usa para algo que se <b>repite</b> (también en el pasado), para el <b>presente</b> y para el <b>futuro</b>. Los dos son conectores subordinantes: el verbo conjugado va <b>al final</b> de la subordinada.',
          table: { head: ['Situación', 'Conector', 'Ejemplo'], rows: [['Pasado, una sola vez / una fase', '<b>als</b>', 'Als ich zwölf war, bekam ich ein Fahrrad.'], ['Pasado, repetido', '<b>wenn</b>', 'Wenn wir Ferien hatten, fuhren wir zu Oma.'], ['Presente, habitual', '<b>wenn</b>', 'Wenn ich müde bin, trinke ich Tee.'], ['Futuro', '<b>wenn</b>', 'Wenn ich in Rente bin, reise ich viel.']] },
          ex: [
            { de: 'Als ich zehn war, sind wir nach Hamburg umgezogen.', es: 'Cuando tenía diez años, nos mudamos a Hamburgo.' },
            { de: 'Als meine Tochter geboren wurde, war ich sehr aufgeregt.', es: 'Cuando nació mi hija, estaba muy emocionado.' },
            { de: 'Wenn wir früher Ferien hatten, sind wir ans Meer gefahren.', es: 'Cada vez que antes teníamos vacaciones, íbamos al mar.' },
            { de: 'Immer wenn ich Zimt rieche, denke ich an Weihnachten.', es: 'Siempre que huelo canela, pienso en la Navidad.' },
            { de: 'Wenn ich im Sommer Zeit habe, besuche ich dich.', es: 'Cuando tenga tiempo en verano, te visito.' }
          ],
          tip: 'Prueba rápida: si puedes añadir <i>jedes Mal</i> o <i>immer</i> delante, usa <b>wenn</b>. Para preguntar &quot;¿cuándo?&quot; se usa <b>wann</b>: <i>Wann bist du geboren?</i> Nunca digas &quot;wenn ich klein war&quot;.'
        },
        {
          h: 'wenn como condición y orden de la frase',
          p: '<b>wenn</b> también significa &quot;si&quot; cuando hablas de una condición posible: <i>Wenn es regnet, bleibe ich zu Hause.</i> Si la subordinada va <b>primero</b>, ocupa toda la posición 1 y el verbo de la oración principal pasa a la <b>posición 2 justo después de la coma</b>: <i>Wenn ich Zeit habe, rufe ich an</i> (no &quot;…, ich rufe an&quot;). No confundas <b>wenn</b> (si, condición) con <b>ob</b> (si, pregunta indirecta): <i>Ich weiß nicht, ob er kommt.</i>',
          table: { head: ['Orden', 'Estructura', 'Ejemplo'], rows: [['Subordinada primero', 'Wenn … Verbo, Verbo + sujeto …', 'Wenn ich Zeit habe, rufe ich dich an.'], ['Principal primero', 'Sujeto + verbo …, wenn … Verbo', 'Ich rufe dich an, wenn ich Zeit habe.'], ['Con modal en la subordinada', '…, wenn … infinitivo + modal', 'Ich helfe dir, wenn du umziehen musst.']] },
          ex: [
            { de: 'Wenn es morgen regnet, bleiben wir zu Hause.', es: 'Si mañana llueve, nos quedamos en casa.' },
            { de: 'Ich rufe dich an, wenn ich angekommen bin.', es: 'Te llamo cuando haya llegado.' },
            { de: 'Wenn du willst, kannst du bei mir übernachten.', es: 'Si quieres, puedes dormir en mi casa.' },
            { de: 'Wenn ich Hunger habe, koche ich etwas Einfaches.', es: 'Cuando tengo hambre, cocino algo sencillo.' },
            { de: 'Ich weiß nicht, ob er morgen kommt.', es: 'No sé si viene mañana.' }
          ],
          tip: 'Error típico: &quot;Wenn ich Zeit habe, ich rufe dich an.&quot; Tras la coma el verbo conjugado va primero: <b>rufe ich</b>.'
        },
        {
          h: 'Contar vivencias: tiempos y marcadores',
          p: 'Para contar recuerdos usas <b>Präteritum</b> de <i>sein, haben</i> y los modales, y <b>Perfekt</b> para el resto de acciones (sobre todo al hablar). En la subordinada con <i>als</i> puedes usar ambos: <i>als ich in Berlin wohnte / als ich in Berlin gewohnt habe</i>. Los marcadores de tiempo ordenan tu relato y hacen que suene natural. Para comparar con otros, usa <i>Bei mir war das ähnlich / ganz anders</i>.',
          table: { head: ['Marcador', 'Significado'], rows: [['damals', 'en aquella época'], ['früher', 'antes, en el pasado'], ['in meiner Kindheit / Jugend', 'en mi infancia / juventud'], ['mit zehn (Jahren)', 'a los diez años'], ['eines Tages', 'un día (en un relato)'], ['seitdem', 'desde entonces'], ['schon immer', 'desde siempre']] },
          ex: [
            { de: 'Damals war das Leben auf dem Dorf viel ruhiger.', es: 'En aquella época la vida en el pueblo era mucho más tranquila.' },
            { de: 'Mit zehn Jahren konnte ich schon schwimmen.', es: 'A los diez años ya sabía nadar.' },
            { de: 'Eines Tages ist meine Katze auf das Dach geklettert.', es: 'Un día mi gata se subió al tejado.' },
            { de: 'Ich habe mir ein Fahrrad gekauft und fahre seitdem jeden Tag zur Arbeit.', es: 'Me compré una bici y desde entonces voy cada día al trabajo.' },
            { de: 'Als ich in der Schule war, habe ich viel Fußball gespielt.', es: 'Cuando iba a la escuela, jugaba mucho al fútbol.' }
          ],
          tip: 'En alemán hablado, <i>sein, haben</i> y los modales casi siempre van en Präteritum (<i>war, hatte, musste</i>); con otros verbos se prefiere el Perfekt (<i>ich habe gespielt</i>).'
        }
      ],
      vocab: [
        { de: 'die Kindheit', es: 'la infancia', ex: 'In meiner Kindheit habe ich viel draußen gespielt.', exes: 'En mi infancia jugué mucho al aire libre.' },
        { de: 'die Jugend', es: 'la juventud', ex: 'In meiner Jugend habe ich Gitarre gespielt.', exes: 'En mi juventud toqué la guitarra.' },
        { de: 'die Schulzeit', es: 'la época escolar', ex: 'Aus meiner Schulzeit habe ich noch zwei gute Freunde.', exes: 'De mi época escolar todavía tengo dos buenos amigos.' },
        { de: 'die Ausbildung', pl: 'die Ausbildungen', es: 'la formación profesional', ex: 'Nach der Schule habe ich eine Ausbildung als Köchin gemacht.', exes: 'Después del colegio hice una formación como cocinera.' },
        { de: 'das Studium', es: 'los estudios universitarios', ex: 'Mein Studium hat fünf Jahre gedauert.', exes: 'Mis estudios duraron cinco años.' },
        { de: 'die Hochzeit', pl: 'die Hochzeiten', es: 'la boda', ex: 'Auf ihrer Hochzeit haben alle bis Mitternacht getanzt.', exes: 'En su boda todos bailaron hasta medianoche.' },
        { de: 'die Geburt', pl: 'die Geburten', es: 'el nacimiento, el parto', ex: 'Bei der Geburt war mein Mann dabei.', exes: 'Mi marido estuvo presente en el parto.' },
        { de: 'der Ruhestand', es: 'la jubilación', ex: 'Mein Opa genießt seinen Ruhestand im Garten.', exes: 'Mi abuelo disfruta de su jubilación en el jardín.' },
        { de: 'die Erinnerung', pl: 'die Erinnerungen', es: 'el recuerdo', ex: 'Ich habe viele schöne Erinnerungen an diesen Sommer.', exes: 'Tengo muchos recuerdos bonitos de ese verano.' },
        { de: 'die Lebensphase', pl: 'die Lebensphasen', es: 'la etapa de la vida', ex: 'Jede Lebensphase hat ihre eigenen Herausforderungen.', exes: 'Cada etapa de la vida tiene sus propios retos.' },
        { de: 'das Alter', es: 'la edad / la vejez', ex: 'Im Alter möchte ich auf dem Land wohnen.', exes: 'De mayor quiero vivir en el campo.' },
        { de: 'die Vergangenheit', es: 'el pasado', ex: 'Man sollte aus der Vergangenheit lernen.', exes: 'Se debería aprender del pasado.' },
        { de: 'auf|wachsen', es: 'crecer (criarse)', note: 'wächst auf – wuchs auf – ist aufgewachsen', ex: 'Ich bin in einer kleinen Stadt aufgewachsen.', exes: 'Me crié en una ciudad pequeña.' },
        { de: 'heiraten', es: 'casarse', ex: 'Meine Eltern haben 1995 geheiratet.', exes: 'Mis padres se casaron en 1995.' },
        { de: 'sich verlieben', es: 'enamorarse', note: 'verliebt sich – verliebte sich – hat sich verliebt', ex: 'Sie hat sich in einen Kollegen verliebt.', exes: 'Se enamoró de un compañero de trabajo.' },
        { de: 'erwachsen', es: 'adulto', ex: 'Mit 18 ist man rechtlich erwachsen.', exes: 'A los 18 años uno es legalmente adulto.' },
        { de: 'vermissen', es: 'echar de menos', ex: 'Ich vermisse die Sommerferien bei meinen Großeltern.', exes: 'Echo de menos las vacaciones de verano con mis abuelos.' },
        { de: 'erleben', es: 'vivir (una experiencia)', ex: 'Wir haben im Urlaub viel Schönes erlebt.', exes: 'En las vacaciones vivimos muchas cosas bonitas.' },
        { de: 'damals', es: 'en aquella época', ex: 'Damals gab es noch keine Smartphones.', exes: 'En aquella época todavía no había smartphones.' },
        { de: 'ab|schließen', es: 'terminar / concluir', note: 'schließt ab – schloss ab – hat abgeschlossen', ex: 'Er hat sein Studium letztes Jahr abgeschlossen.', exes: 'Terminó sus estudios el año pasado.' }
      ],
      phrases: [
        { de: 'Als ich klein war, habe ich oft …', es: 'Cuando era pequeño, a menudo …', use: 'contar' },
        { de: 'Damals war alles ganz anders.', es: 'En aquella época todo era muy distinto.', use: 'comparar' },
        { de: 'Ich erinnere mich gut daran, wie wir im Garten gespielt haben.', es: 'Recuerdo bien cómo jugábamos en el jardín.', use: 'recordar' },
        { de: 'Weißt du noch, als wir zusammen im Zeltlager waren?', es: '¿Te acuerdas de cuando estuvimos juntos en el campamento?', use: 'recordar' },
        { de: 'Bei mir war das ganz ähnlich.', es: 'En mi caso fue muy parecido.', use: 'comparar' },
        { de: 'Mir ging es genauso.', es: 'A mí me pasó exactamente igual.', use: 'coincidir' },
        { de: 'Eines Tages ist mir etwas Lustiges passiert.', es: 'Un día me pasó algo divertido.', use: 'narrar' },
        { de: 'Immer wenn ich daran denke, muss ich lächeln.', es: 'Siempre que pienso en ello, tengo que sonreír.', use: 'valorar' },
        { de: 'Seitdem hat sich viel verändert.', es: 'Desde entonces ha cambiado mucho.', use: 'narrar' }
      ],
      dialog: {
        title: 'Beim Klassentreffen',
        lines: [
          { s: 'A', de: 'Mensch, Murat, weißt du noch, als wir in der Schulzeit immer zu spät gekommen sind?', es: 'Madre mía, Murat, ¿te acuerdas de cuando en la escuela llegábamos siempre tarde?' },
          { s: 'B', de: 'Natürlich! Als wir zwölf waren, hat uns der Lehrer jeden Morgen an der Tür erwartet.', es: '¡Claro! Cuando teníamos doce años, el profesor nos esperaba cada mañana en la puerta.' },
          { s: 'A', de: 'Und wenn wir Ferien hatten, haben wir die ganze Zeit am See verbracht.', es: 'Y cuando teníamos vacaciones, pasábamos todo el tiempo en el lago.' },
          { s: 'B', de: 'Das habe ich sehr vermisst, als ich nach dem Abitur nach München gezogen bin.', es: 'Eso lo eché mucho de menos cuando me mudé a Múnich después del bachillerato.' },
          { s: 'A', de: 'Wie war dein Studium dort?', es: '¿Cómo fueron tus estudios allí?' },
          { s: 'B', de: 'Am Anfang schwer, aber wenn ich Heimweh hatte, habe ich einfach meine Eltern angerufen.', es: 'Al principio difíciles, pero cuando tenía morriña, simplemente llamaba a mis padres.' },
          { s: 'A', de: 'Und als du dein Studium abgeschlossen hast, hattest du gleich eine Stelle?', es: 'Y cuando terminaste los estudios, ¿tuviste enseguida un trabajo?' },
          { s: 'B', de: 'Nein, erst nach einem halben Jahr, aber seitdem bin ich sehr zufrieden.', es: 'No, solo después de medio año, pero desde entonces estoy muy contento.' },
          { s: 'A', de: 'Schön! Wenn ich an damals denke, muss ich immer lächeln.', es: '¡Qué bien! Cuando pienso en aquella época, siempre tengo que sonreír.' },
          { s: 'B', de: 'Mir geht es genauso. Auf die alten Zeiten!', es: 'A mí me pasa igual. ¡Por los viejos tiempos!' }
        ]
      },
      ex: [
        { t: 'mc', q: '___ ich ein Kind war, habe ich auf dem Land gewohnt.', o: ['Als', 'Wenn', 'Wann'], a: 0, why: 'Una fase única del pasado (mi infancia) se introduce con als.' },
        { t: 'mc', q: '___ ich Kopfschmerzen habe, nehme ich eine Tablette.', o: ['Als', 'Wenn', 'Ob'], a: 1, why: 'Presente y habitual: siempre wenn, nunca als.' },
        { t: 'mc', q: 'Jedes Mal, ___ wir Ferien hatten, fuhren wir ans Meer.', o: ['als', 'wann', 'wenn'], a: 2, why: 'Pasado repetido (jedes Mal) → wenn.' },
        { t: 'mc', q: '___ bist du eigentlich geboren?', o: ['Wann', 'Wenn', 'Als'], a: 0, why: 'Para preguntar &quot;¿cuándo?&quot; se usa la palabra interrogativa wann.' },
        { t: 'mc', q: 'Als ich 20 war, ___ zum Studium nach Wien.', o: ['ich zog', 'ich zogen', 'zog ich'], a: 2, why: 'Tras una subordinada inicial, el verbo de la principal va en primera posición: zog ich.' },
        { t: 'mc', q: 'Wenn ich im Sommer Zeit habe, ___ ich dich besuchen.', o: ['werde', 'wurde', 'werden'], a: 0, why: 'Futuro con sujeto ich: werde + infinitivo; wurde sería pasado.' },
        { t: 'gap', q: '___ meine Oma jung war, gab es in ihrem Dorf noch kein Fernsehen.', a: ['als'], why: 'Fase única del pasado (cuando mi abuela era joven) → als.' },
        { t: 'gap', q: 'Immer ___ ich Zimt rieche, denke ich an Weihnachten.', a: ['wenn'], why: 'Algo que se repite en el presente → wenn.' },
        { t: 'gap', q: 'Als ich zehn war, ___ wir nach Bremen umgezogen. (sein)', a: ['sind'], why: 'umziehen indica cambio de lugar y forma el Perfekt con sein: sind umgezogen.' },
        { t: 'gap', q: 'Wenn wir früher bei Oma ___, gab es immer Apfelkuchen. (sein, Präteritum)', a: ['waren'], why: 'Pasado repetido con sein en Präteritum: wir waren.' },
        { t: 'order', es: 'Cuando era pequeña, vivía en un pueblo.', de: 'Als ich klein war, wohnte ich in einem Dorf.', why: 'als envía el verbo al final (war); después de la coma va el verbo de la principal: wohnte ich.' },
        { t: 'order', es: 'Mi abuela me contaba cuentos cuando yo no podía dormir.', de: 'Meine Oma hat mir Geschichten erzählt, wenn ich nicht schlafen konnte.', why: 'Situación repetida en el pasado → wenn; verbo conjugado (konnte) al final.' },
        { t: 'order', es: 'Cuando haya terminado mi formación, me mudaré a Hamburgo.', de: 'Wenn ich meine Ausbildung abgeschlossen habe, ziehe ich nach Hamburg.', why: 'Futuro con wenn: Perfekt en la subordinada (abgeschlossen habe al final) y verbo en primera posición en la principal.' },
        { t: 'tr', es: 'Cuando era joven, vivíamos en Berlín.', de: ['Als ich jung war, haben wir in Berlin gewohnt.', 'Als ich jung war, wohnten wir in Berlin.'], why: '' },
        { t: 'tr', es: 'Siempre que pienso en mi infancia, tengo que sonreír.', de: ['Immer wenn ich an meine Kindheit denke, muss ich lächeln.', 'Immer wenn ich an meine Kindheit denke, muss ich schmunzeln.'], why: '' },
        { t: 'fix', q: 'Wenn ich fünf war, habe ich Rad fahren gelernt.', a: ['Als ich fünf war, habe ich Rad fahren gelernt.', 'Als ich fünf war, habe ich Fahrrad fahren gelernt.'], why: 'Un único momento del pasado → als, no wenn.' },
        { t: 'fix', q: 'Als ich Kind war, ich habe viel gespielt.', a: ['Als ich Kind war, habe ich viel gespielt.'], why: 'Después de la subordinada el verbo de la principal va primero: habe ich.' },
        { t: 'match', pairs: [['die Kindheit', 'la infancia'], ['die Jugend', 'la juventud'], ['der Ruhestand', 'la jubilación'], ['die Hochzeit', 'la boda'], ['auf|wachsen', 'crecer, criarse'], ['vermissen', 'echar de menos']] }
      ],
      speak: [
        { prompt: 'Cuenta un recuerdo de tu infancia en 5-6 frases. Usa al menos una vez als y una vez wenn.', model: 'Als ich sieben war, sind wir in ein kleines Dorf gezogen. Am Anfang war ich traurig, weil ich meine Freunde vermisst habe. Wenn wir Ferien hatten, sind wir immer zu meiner Oma gefahren. Dort habe ich im Garten gespielt. Als ich zwölf war, habe ich zum ersten Mal allein ein Eis gekauft. Daran erinnere ich mich gern.' },
        { prompt: 'Compara una etapa pasada de tu vida con tu vida actual (5 frases). Usa als, wenn y damals / heute.', model: 'Als ich jung war, hatte ich viel Zeit, aber wenig Geld. Heute arbeite ich viel, aber ich verdiene mehr. Wenn ich damals Prüfungen hatte, war ich sehr nervös. Heute bin ich viel gelassener. Wenn ich in Rente bin, möchte ich wieder mehr Zeit zum Lesen haben.' },
        { prompt: 'Para usar en voz alta: pregunta a un compañero por su infancia y reacciona a lo que cuenta (4-5 frases).', model: 'Wo bist du aufgewachsen? Was hast du als Kind am liebsten gemacht? – Ach, das kenne ich auch! Bei mir war das ähnlich: Wenn es regnete, haben wir drinnen gespielt. Weißt du noch, als wir zusammen im Zeltlager waren?' }
      ]
    },
    {
      id: 'b1-02',
      title: 'Echte Freunde',
      es: 'Amistades',
      goals: ['Expresar consecuencias con darum, daher, deswegen y deshalb', 'Comparar la posición del verbo con weil y denn', 'Usar adjetivos sustantivados (der Bekannte, etwas Neues)', 'Expresar duda y confianza'],
      grammar: [
        {
          h: 'darum, daher, deswegen, deshalb: la consecuencia',
          p: 'Estos cuatro adverbios son <b>sinónimos</b> y significan &quot;por eso / por esa razón&quot;. Indican la <b>consecuencia</b> de lo que acabas de decir. Ocupan la <b>posición 1</b> de la segunda oración, así que el <b>verbo va en posición 2</b> y el sujeto pasa detrás: <i>…, deshalb bleibt sie zu Hause.</i> Compáralos con <i>weil</i> (causa, verbo al final) y <i>denn</i> (causa, orden normal).',
          table: { head: ['Conector', 'Posición del verbo', 'Ejemplo'], rows: [['<b>weil</b> (causa)', 'subordinada: verbo al final', 'Anna bleibt zu Hause, weil sie krank ist.'], ['<b>denn</b> (causa)', 'posición 0: orden normal, verbo en 2.ª posición', 'Anna bleibt zu Hause, denn sie ist krank.'], ['<b>deshalb / darum / daher / deswegen</b> (consecuencia)', 'posición 1: verbo en 2.ª posición, sujeto detrás', 'Anna ist krank, deshalb bleibt sie zu Hause.']] },
          ex: [
            { de: 'Mein Freund zieht nach Wien, deshalb sehen wir uns selten.', es: 'Mi amigo se muda a Viena, por eso nos vemos poco.' },
            { de: 'Ich vertraue Lena, darum erzähle ich ihr alles.', es: 'Confío en Lena, por eso se lo cuento todo.' },
            { de: 'Wir kennen uns seit der Schule, daher verstehen wir uns blind.', es: 'Nos conocemos desde el colegio, por eso nos entendemos sin palabras.' },
            { de: 'Es gab viel Streit, deswegen haben wir lange nicht gesprochen.', es: 'Hubo muchas peleas, por eso estuvimos mucho tiempo sin hablar.' },
            { de: 'Ich habe hier viele Bekannte, deshalb fühle ich mich nicht einsam.', es: 'Aquí tengo muchos conocidos, por eso no me siento solo.' }
          ],
          tip: 'Con estos conectores la causa va <b>antes</b> y la consecuencia <b>después</b>; con <i>weil/denn</i> es al revés. Error típico: &quot;deshalb ich bleibe&quot;. Correcto: <b>deshalb bleibe ich</b>.'
        },
        {
          h: 'Adjetivos sustantivados',
          p: 'Muchos adjetivos y participios se convierten en sustantivos y se escriben con <b>mayúscula</b>, pero <b>conservan la terminación del adjetivo</b>. Para <b>personas</b> existen formas masculina, femenina y plural: <span class="de">der Bekannte, die Bekannte, die Bekannten</span>; igual con <i>der Angestellte, der Verwandte, der Jugendliche, der Erwachsene</i>. Para <b>cosas</b> y conceptos se usa el neutro: <span class="de">das Gute</span>, y tras <i>etwas, nichts, viel, wenig, alles</i> el adjetivo va en mayúscula con terminación <b>-es</b>: <i>etwas Neues, nichts Besonderes</i>.',
          table: { head: ['Caso', 'Masculino', 'Femenino', 'Plural'], rows: [['Nominativ (definido)', 'der Bekannte', 'die Bekannte', 'die Bekannten'], ['Nominativ (indefinido)', 'ein Bekannter', 'eine Bekannte', 'Bekannte'], ['Akkusativ (definido)', 'den Bekannten', 'die Bekannte', 'die Bekannten'], ['Dativ (definido)', 'dem Bekannten', 'der Bekannten', 'den Bekannten']] },
          ex: [
            { de: 'Ein Bekannter von mir arbeitet in Wien.', es: 'Un conocido mío trabaja en Viena.' },
            { de: 'Die Angestellte im Reisebüro war sehr hilfsbereit.', es: 'La empleada de la agencia de viajes fue muy servicial.' },
            { de: 'Ich habe heute etwas Neues gelernt.', es: 'Hoy he aprendido algo nuevo.' },
            { de: 'Mit einem Verwandten habe ich gestern telefoniert.', es: 'Ayer hablé por teléfono con un pariente.' },
            { de: 'Alles Gute zum Geburtstag!', es: '¡Todo lo mejor por tu cumpleaños!' }
          ],
          tip: 'Compara: <i>der Freund → ein Freund</i> (sustantivo normal) pero <i>der Bekannte → ein Bekannter</i> (adjetivo sustantivado). Si el artículo no muestra el caso, la terminación lo hace.'
        },
        {
          h: 'Expresar duda y confianza',
          p: 'Para expresar duda o confianza sobre algo usas expresiones fijas seguidas de una subordinada con <b>dass</b> (verbo al final). Cuando falta certeza total se usa <b>ob</b> (&quot;si&quot;). Importante: tras estas expresiones el alemán usa el <b>indicativo</b>, no el subjuntivo del español (<i>&quot;dudo que venga&quot; → Ich bezweifle, dass er kommt</i>).',
          table: { head: ['Duda', 'Confianza'], rows: [['Ich bezweifle, dass …', 'Ich bin zuversichtlich, dass …'], ['Ich glaube kaum, dass …', 'Ich bin überzeugt, dass …'], ['Ich bin nicht sicher, ob …', 'Ich bin mir sicher, dass …'], ['Ich habe Zweifel, ob …', 'Ich vertraue darauf, dass …']] },
          ex: [
            { de: 'Ich bezweifle, dass Tim pünktlich kommt.', es: 'Dudo que Tim llegue puntual.' },
            { de: 'Ich bin zuversichtlich, dass wir uns bald wiedersehen.', es: 'Confío en que nos veamos pronto.' },
            { de: 'Ich bin mir nicht sicher, ob sie die Einladung bekommen hat.', es: 'No estoy segura de si recibió la invitación.' },
            { de: 'Ich bin überzeugt, dass echte Freundschaft Zeit braucht.', es: 'Estoy convencido de que la verdadera amistad necesita tiempo.' },
            { de: 'Ich glaube kaum, dass er das Geheimnis weitererzählt.', es: 'Apenas creo que cuente el secreto.' }
          ],
          tip: 'No traduzcas el subjuntivo: <i>Ich bezweifle, dass er <b>kommt</b></i>. Y con &quot;zuversichtlich&quot; siempre <b>dass</b>, nunca <i>ob</i>.'
        }
      ],
      vocab: [
        { de: 'die Freundschaft', pl: 'die Freundschaften', es: 'la amistad', ex: 'Unsere Freundschaft hält schon seit zwanzig Jahren.', exes: 'Nuestra amistad dura ya veinte años.' },
        { de: 'der Bekannte', pl: 'die Bekannten', es: 'el conocido', note: 'ein Bekannter / eine Bekannte', ex: 'Ein Bekannter hat mir diese Wohnung empfohlen.', exes: 'Un conocido me recomendó este piso.' },
        { de: 'der Kumpel', pl: 'die Kumpel', es: 'el colega (informal)', ex: 'Mein Kumpel Tim hilft mir oft beim Umzug.', exes: 'Mi colega Tim me ayuda a menudo con la mudanza.' },
        { de: 'die Beziehung', pl: 'die Beziehungen', es: 'la relación', ex: 'Eine gute Beziehung zu den Nachbarn ist mir wichtig.', exes: 'Una buena relación con los vecinos es importante para mí.' },
        { de: 'das Vertrauen', es: 'la confianza', ex: 'Ohne Vertrauen gibt es keine echte Freundschaft.', exes: 'Sin confianza no hay una amistad verdadera.' },
        { de: 'der Streit', es: 'la pelea / la discusión', ex: 'Nach dem Streit haben wir eine Woche nicht gesprochen.', exes: 'Después de la pelea estuvimos una semana sin hablar.' },
        { de: 'das Geheimnis', pl: 'die Geheimnisse', es: 'el secreto', ex: 'Kannst du ein Geheimnis für dich behalten?', exes: '¿Puedes guardar un secreto?' },
        { de: 'der Kontakt', pl: 'die Kontakte', es: 'el contacto', ex: 'Wir haben seit Jahren keinen Kontakt mehr.', exes: 'Desde hace años ya no tenemos contacto.' },
        { de: 'die Verabredung', pl: 'die Verabredungen', es: 'la quedada / la cita', ex: 'Ich habe heute Abend eine Verabredung mit Lena.', exes: 'Esta noche he quedado con Lena.' },
        { de: 'der Ratschlag', pl: 'die Ratschläge', es: 'el consejo', ex: 'Danke für deinen Ratschlag, er hat mir sehr geholfen.', exes: 'Gracias por tu consejo, me ayudó mucho.' },
        { de: 'der Verwandte', pl: 'die Verwandten', es: 'el pariente', note: 'ein Verwandter / eine Verwandte', ex: 'Zu Weihnachten kommen alle Verwandten zu uns.', exes: 'En Navidad vienen todos los parientes a casa.' },
        { de: 'sich verstehen', es: 'llevarse bien (con)', note: 'versteht sich – verstand sich – hat sich verstanden', ex: 'Ich verstehe mich sehr gut mit meinen Kollegen.', exes: 'Me llevo muy bien con mis compañeros.' },
        { de: 'sich streiten', es: 'pelearse, discutir', note: 'streitet sich – stritt sich – hat sich gestritten', ex: 'Meine Geschwister streiten sich selten.', exes: 'Mis hermanos rara vez se pelean.' },
        { de: 'sich versöhnen', es: 'reconciliarse', ex: 'Nach dem Streit haben wir uns schnell versöhnt.', exes: 'Después de la pelea nos reconciliamos rápido.' },
        { de: 'vertrauen', es: 'confiar (en alguien)', note: 'vertraut + Dativ', ex: 'Ich vertraue meiner besten Freundin völlig.', exes: 'Confío plenamente en mi mejor amiga.' },
        { de: 'kennen|lernen', es: 'conocer (a alguien)', note: 'lernt kennen – lernte kennen – hat kennengelernt', ex: 'Wir haben uns beim Sprachkurs kennengelernt.', exes: 'Nos conocimos en el curso de idiomas.' },
        { de: 'verlässlich', es: 'fiable', ex: 'Murat ist ein verlässlicher Freund.', exes: 'Murat es un amigo fiable.' },
        { de: 'hilfsbereit', es: 'servicial', ex: 'Meine Nachbarn sind immer hilfsbereit.', exes: 'Mis vecinos siempre están dispuestos a ayudar.' },
        { de: 'eifersüchtig', es: 'celoso', ex: 'Er war eifersüchtig, weil sie viel Zeit mit ihren Freunden verbrachte.', exes: 'Estaba celoso porque ella pasaba mucho tiempo con sus amigos.' },
        { de: 'einsam', es: 'solo, solitario', ex: 'In der neuen Stadt habe ich mich anfangs einsam gefühlt.', exes: 'En la ciudad nueva me sentí solo al principio.' }
      ],
      phrases: [
        { de: 'Ich bezweifle, dass das eine gute Idee ist.', es: 'Dudo que sea una buena idea.', use: 'dudar' },
        { de: 'Ich glaube kaum, dass er heute noch kommt.', es: 'Apenas creo que venga hoy.', use: 'dudar' },
        { de: 'Ich bin mir nicht sicher, ob das stimmt.', es: 'No estoy seguro de si eso es verdad.', use: 'dudar' },
        { de: 'Ich bin zuversichtlich, dass wir das schaffen.', es: 'Confío en que lo lograremos.', use: 'confiar' },
        { de: 'Darauf kannst du dich verlassen.', es: 'Puedes contar con ello.', use: 'confiar' },
        { de: 'Ich vertraue dir völlig.', es: 'Confío totalmente en ti.', use: 'confiar' },
        { de: 'Wir sind schon lange befreundet, deshalb kenne ich sie so gut.', es: 'Somos amigas desde hace mucho, por eso la conozco tan bien.', use: 'explicar' },
        { de: 'Ich brauche deinen Rat.', es: 'Necesito tu consejo.', use: 'pedir consejo' },
        { de: 'Es tut mir leid, dass wir uns gestritten haben.', es: 'Lamento que nos hayamos peleado.', use: 'disculparse' }
      ],
      dialog: {
        title: 'Ein Streit unter Freunden',
        lines: [
          { s: 'A', de: 'Du siehst bedrückt aus, Murat. Was ist denn los?', es: 'Te veo abatido, Murat. ¿Qué pasa?' },
          { s: 'B', de: 'Ich habe mich mit meinem besten Kumpel gestritten, deshalb bin ich nicht gut drauf.', es: 'Me peleé con mi mejor colega, por eso no estoy de buen humor.' },
          { s: 'A', de: 'Worum ging es denn?', es: '¿Por qué fue?' },
          { s: 'B', de: 'Er hat mein Geheimnis weitererzählt, darum vertraue ich ihm gerade nicht mehr.', es: 'Contó mi secreto a otros, por eso ahora no confío en él.' },
          { s: 'A', de: 'Das tut mir leid. Aber ich bezweifle, dass er es mit Absicht getan hat.', es: 'Lo siento. Pero dudo que lo haya hecho a propósito.' },
          { s: 'B', de: 'Vielleicht. Wir kennen uns seit der Schule, daher fällt mir der Streit besonders schwer.', es: 'Quizás. Nos conocemos desde el colegio, por eso la pelea me cuesta especialmente.' },
          { s: 'A', de: 'Ruf ihn doch an. Ich bin zuversichtlich, dass ihr euch schnell versöhnt.', es: 'Llámalo. Confío en que os reconciliaréis pronto.' },
          { s: 'B', de: 'Ich bin mir nicht sicher, ob er überhaupt mit mir reden will.', es: 'No estoy seguro de si siquiera quiere hablar conmigo.' },
          { s: 'A', de: 'Bestimmt will er das. Ein ehrliches Gespräch ist das Beste, was du jetzt tun kannst.', es: 'Seguro que quiere. Una conversación sincera es lo mejor que puedes hacer ahora.' },
          { s: 'B', de: 'Du hast recht. Ich rufe ihn heute Abend an. Danke für deinen Ratschlag!', es: 'Tienes razón. Lo llamo esta noche. ¡Gracias por tu consejo!' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Es regnet stark, ___ bleiben wir zu Hause.', o: ['weil', 'deshalb', 'denn'], a: 1, why: 'Consecuencia con el verbo en 2.ª posición (bleiben wir): deshalb.' },
        { t: 'mc', q: 'Wir bleiben zu Hause, ___ es stark regnet.', o: ['deshalb', 'darum', 'weil'], a: 2, why: 'Causa con el verbo al final (regnet): weil.' },
        { t: 'mc', q: 'Tim ist sehr verlässlich, ___ vertraue ich ihm.', o: ['weil', 'darum', 'dass'], a: 1, why: 'Consecuencia con inversión (vertraue ich): darum.' },
        { t: 'mc', q: 'Gestern habe ich einen ___ getroffen.', o: ['Bekannte', 'Bekannten', 'Bekannter'], a: 1, why: 'Akkusativ masculino tras einen: adjetivo sustantivado con -en.' },
        { t: 'mc', q: 'Ich möchte dir etwas ___ erzählen.', o: ['Neues', 'Neue', 'Neuen'], a: 0, why: 'Tras etwas el adjetivo sustantivado va en mayúscula con -es.' },
        { t: 'mc', q: 'Ich bin zuversichtlich, ___ wir den Termin schaffen.', o: ['dass', 'ob', 'darum'], a: 0, why: 'Tras expresiones de confianza se usa dass con el verbo al final.' },
        { t: 'gap', q: 'Anna war krank, ___ konnte sie nicht zur Party kommen.', a: ['deshalb', 'darum', 'daher', 'deswegen'], why: 'Los cuatro conectores de consecuencia son válidos aquí y llevan el verbo en 2.ª posición.' },
        { t: 'gap', q: 'Das ist ein ___ von meiner Schwester. (bekannt → sustantivo masculino)', a: ['Bekannter'], why: 'Nominativ masculino tras ein: ein Bekannter.' },
        { t: 'gap', q: 'Ich habe heute nichts ___ gemacht. (besonders → sustantivado)', a: ['Besonderes'], why: 'Tras nichts va el neutro sustantivado con -es: nichts Besonderes.' },
        { t: 'gap', q: 'Die ___ im Reisebüro war sehr nett. (angestellt → sustantivo femenino)', a: ['Angestellte'], why: 'Nominativ femenino tras die: die Angestellte.' },
        { t: 'order', es: 'Tim cumple años, por eso horneo un pastel.', de: 'Tim hat Geburtstag, deshalb backe ich einen Kuchen.', why: 'deshalb ocupa la posición 1; después va el verbo (backe) y luego el sujeto (ich).' },
        { t: 'order', es: 'Confío en que ellos nos ayudan con la mudanza.', de: 'Ich bin zuversichtlich, dass sie uns bei dem Umzug helfen.', why: 'dass lleva el verbo al final (helfen).' },
        { t: 'order', es: 'Dudo que él llegue puntual mañana.', de: 'Ich bezweifle, dass er morgen pünktlich kommt.', why: 'Tras dass el verbo conjugado va al final, en indicativo.' },
        { t: 'tr', es: 'Mi amiga estaba enferma, por eso no vino.', de: ['Meine Freundin war krank, deshalb ist sie nicht gekommen.', 'Meine Freundin war krank, darum ist sie nicht gekommen.', 'Meine Freundin war krank, deswegen ist sie nicht gekommen.'], why: '' },
        { t: 'tr', es: 'Estoy convencido de que nuestra amistad durará.', de: ['Ich bin überzeugt, dass unsere Freundschaft hält.', 'Ich bin sicher, dass unsere Freundschaft hält.', 'Ich bin zuversichtlich, dass unsere Freundschaft hält.'], why: '' },
        { t: 'fix', q: 'Ich war müde, deshalb ich bin früh ins Bett gegangen.', a: ['Ich war müde, deshalb bin ich früh ins Bett gegangen.'], why: 'Tras deshalb el verbo va en 2.ª posición: deshalb bin ich.' },
        { t: 'fix', q: 'Ich bezweifle, dass er hat Zeit.', a: ['Ich bezweifle, dass er Zeit hat.'], why: 'En la subordinada con dass el verbo conjugado va al final.' },
        { t: 'match', pairs: [['das Vertrauen', 'la confianza'], ['der Streit', 'la pelea, la discusión'], ['das Geheimnis', 'el secreto'], ['sich versöhnen', 'reconciliarse'], ['verlässlich', 'fiable'], ['einsam', 'solo, solitario']] }
      ],
      speak: [
        { prompt: 'Describe a un buen amigo o amiga (5-6 frases). Explica por qué os lleváis bien usando deshalb, darum, daher o deswegen.', model: 'Meine beste Freundin heißt Lena. Wir kennen uns seit der Schule, deshalb sind wir sehr vertraut miteinander. Sie ist sehr verlässlich, darum erzähle ich ihr alle meine Geheimnisse. Wir sehen uns nicht oft, weil sie in Wien wohnt. Wir telefonieren aber jede Woche. Eine Freundin wie sie ist etwas Besonderes.' },
        { prompt: 'Una amiga duda de que su plan salga bien. Responde con una frase de duda y otra de confianza (3-4 frases).', model: 'Ich bezweifle ein bisschen, dass du alles in einer Woche schaffst. Aber ich bin zuversichtlich, dass du gute Hilfe bekommst. Ich bin mir nicht sicher, ob du genug Zeit hast. Ich bin überzeugt, dass du es trotzdem gut machst.' },
        { prompt: 'Para usar en voz alta: explica a un conocido por qué sois buenos amigos o por qué os habéis distanciado (4-5 frases, con al menos un adjetivo sustantivado).', model: 'Wir haben uns viele Jahre nicht gesehen, deswegen war der Kontakt nicht mehr so eng. Ich habe ihm etwas Neues erzählt, und er hat mir zugehört. Ich bin zuversichtlich, dass wir uns jetzt öfter treffen. Ein alter Bekannter ist manchmal besser als ein neuer Freund.' }
      ]
    },
    {
      id: 'b1-03',
      title: 'Was kann ich gut?',
      es: 'Fortalezas y autorreflexión',
      goals: ['Declinar el adjetivo en Komparativ y Superlativ (ein besserer Plan, der beste Plan)', 'Formar adjetivos con Nomen + -lich (freundlich, ehrlich, persönlich)', 'Repasar las terminaciones del adjetivo en los tres grupos', 'Hablar de tus fortalezas y evaluarte'],
      grammar: [
        {
          h: 'Komparativ y Superlativ delante del sustantivo',
          p: 'Ya sabes comparar con <i>-er</i> y <i>am -sten</i>. Cuando el comparativo o el superlativo va <b>delante de un sustantivo</b>, se declina como cualquier adjetivo: primero la marca <b>-er</b> (comparativo) o <b>-st</b> (superlativo) y <b>después la terminación</b> de caso. <i>ein besser<b>er</b> Plan, der be<b>ste</b> Plan, die schnell<b>ste</b> Lösung</i>. Si el adjetivo no lleva sustantivo, el superlativo se forma con <i>am … -sten</i>: <i>Lena arbeitet am schnellsten</i>. Tras -t, -d, -s, -ß, -z se intercala -e-: <i>am ältesten</i>.',
          table: { head: ['Adjetivo', 'Komparativ', 'am … (sin sustantivo)', 'der/die/das … (con sustantivo)'], rows: [['schnell', 'schneller', 'am schnellsten', 'der schnellste'], ['groß', 'größer', 'am größten', 'der größte'], ['gut', 'besser', 'am besten', 'der beste'], ['hoch', 'höher', 'am höchsten', 'der höchste'], ['nah', 'näher', 'am nächsten', 'der nächste'], ['teuer', 'teurer', 'am teuersten', 'der teuerste'], ['alt', 'älter', 'am ältesten', 'der älteste'], ['jung', 'jünger', 'am jüngsten', 'der jüngste']] },
          ex: [
            { de: 'Das ist die beste Lösung für uns.', es: 'Esta es la mejor solución para nosotros.' },
            { de: 'Ich suche eine größere Wohnung.', es: 'Busco un piso más grande.' },
            { de: 'Mit meiner jüngeren Schwester verstehe ich mich gut.', es: 'Me llevo bien con mi hermana menor.' },
            { de: 'Er ist der netteste Kollege im Team.', es: 'Es el compañero más simpático del equipo.' },
            { de: 'Gestern hatte ich einen besseren Tag als heute.', es: 'Ayer tuve un día mejor que hoy.' }
          ],
          tip: 'Fíjate en las formas irregulares: <b>gut – besser – am besten</b>, <b>hoch – höher</b> (la c desaparece), <b>nah – näher – am nächsten</b>. Y no olvides la terminación: <i>eine größer Wohnung</i> es incorrecto.'
        },
        {
          h: 'Repaso: las terminaciones del adjetivo',
          p: 'La regla de oro: <b>el caso se muestra una sola vez</b>. Si el artículo ya lo marca (<i>der, den, dem</i>), el adjetivo lleva <b>-e / -en</b>. Si el artículo no tiene terminación (<i>ein, kein, mein</i> en Nom. m y Nom./Akk. n) o no hay artículo, el adjetivo muestra el caso con <b>-er, -es, -em…</b>. Las mismas terminaciones valen para el comparativo y el superlativo.',
          table: { head: ['Grupo', 'Caso', 'm', 'f', 'n', 'pl'], rows: [['der / die / das', 'Nom.', '-e', '-e', '-e', '-en'], ['der / die / das', 'Akk.', '-en', '-e', '-e', '-en'], ['ein / kein / mein', 'Nom.', '-er', '-e', '-es', '-en'], ['ein / kein / mein', 'Akk.', '-en', '-e', '-es', '-en'], ['der- y ein-Gruppe', 'Dat.', '-en', '-en', '-en', '-en'], ['sin artículo', 'Nom.', '-er', '-e', '-es', '-e'], ['sin artículo', 'Akk.', '-en', '-e', '-es', '-e'], ['sin artículo', 'Dat.', '-em', '-er', '-em', '-en']] },
          ex: [
            { de: 'Der neue Kollege ist sehr hilfsbereit.', es: 'El nuevo compañero es muy servicial.' },
            { de: 'Sie hat einen besseren Job gefunden.', es: 'Ha encontrado un trabajo mejor.' },
            { de: 'Mit dem ältesten Freund meines Vaters habe ich gesprochen.', es: 'Hablé con el amigo más antiguo de mi padre.' },
            { de: 'Gute Freunde sind selten.', es: 'Los buenos amigos son escasos.' },
            { de: 'Ich trinke gern heißen Tee.', es: 'Me gusta beber té caliente.' }
          ],
          tip: 'Truco: el <b>Dativ</b> siempre acaba en <b>-en</b> tras artículo, y el <b>plural</b> también (salvo plural sin artículo en Nom./Akk.: <i>gute Freunde</i>).'
        },
        {
          h: 'Formar adjetivos: sustantivo + -lich',
          p: 'Con el sufijo <b>-lich</b> se crean adjetivos a partir de sustantivos. A veces aparece un Umlaut o se pierde una letra: <i>der Freund → freundlich</i>, <i>die Gefahr → gefährlich</i>, <i>die Ehre → ehrlich</i>. Muchas palabras de personalidad y de trabajo se forman así. Algunos de estos adjetivos funcionan también como adverbios de tiempo: <i>täglich</i> (cada día), <i>wöchentlich</i>, <i>jährlich</i>.',
          table: { head: ['Sustantivo', 'Adjetivo', 'Significado'], rows: [['der Freund', 'freundlich', 'amable'], ['die Ehre', 'ehrlich', 'sincero, honesto'], ['die Person', 'persönlich', 'personal'], ['der Beruf', 'beruflich', 'profesional (del trabajo)'], ['der Tag', 'täglich', 'diario'], ['die Gefahr', 'gefährlich', 'peligroso'], ['der Mensch', 'menschlich', 'humano'], ['das Glück', 'glücklich', 'feliz, afortunado']] },
          ex: [
            { de: 'Meine Kollegin ist immer freundlich zu den Kunden.', es: 'Mi compañera siempre es amable con los clientes.' },
            { de: 'Ich schätze ehrliche Menschen.', es: 'Valoro a las personas sinceras.' },
            { de: 'Das ist eine sehr persönliche Frage.', es: 'Es una pregunta muy personal.' },
            { de: 'Aus beruflichen Gründen ziehe ich nach Köln.', es: 'Me mudo a Colonia por motivos profesionales.' },
            { de: 'Ich übe täglich zwanzig Minuten Deutsch.', es: 'Practico alemán veinte minutos al día.' }
          ],
          tip: '<b>-lich</b> no es lo mismo que <b>-ig</b> (<i>ruhig, sonnig</i>); aprende cada adjetivo junto a su sustantivo. Ojo: <i>freundlich</i> = amable (conducta), pero &quot;somos amigos&quot; es <i>wir sind befreundet</i>.'
        },
        {
          h: 'Hablar de tus fortalezas y evaluarte',
          p: 'Para describirte usa superlativos y comparaciones con matices: <span class="de">Meine größte Stärke ist …</span>, <span class="de">Ich bin gut / stark in …</span>, <span class="de">Das fällt mir leicht / schwer</span>. Para reflexionar sobre tu evolución: <span class="de">Ich bin viel / etwas / deutlich … geworden</span> (comparativo + <i>werden</i>). Para una debilidad: <span class="de">Eine Schwäche von mir ist, dass …</span>. Las valoraciones de otros: <span class="de">Meine Kollegen sagen, dass ich …</span>',
          ex: [
            { de: 'Meine größte Stärke ist meine Geduld.', es: 'Mi mayor fortaleza es mi paciencia.' },
            { de: 'Ich bin viel selbstständiger geworden als früher.', es: 'Me he vuelto mucho más independiente que antes.' },
            { de: 'Eine Schwäche von mir ist, dass ich manchmal zu ungeduldig bin.', es: 'Una debilidad mía es que a veces soy demasiado impaciente.' },
            { de: 'Meine Kollegen sagen, dass ich sehr belastbar bin.', es: 'Mis compañeros dicen que soy muy resistente a la presión.' },
            { de: 'Am meisten bin ich auf meine Ausbildung stolz.', es: 'De lo que estoy más orgulloso es de mi formación.' }
          ],
          tip: 'Para intensificar un comparativo usa <i>viel, deutlich, etwas, noch</i>: <i>viel besser, etwas ruhiger</i>. No uses <i>mehr</i> + adjetivo (<i>&quot;mehr gut&quot;</i>).'
        }
      ],
      vocab: [
        { de: 'die Stärke', pl: 'die Stärken', es: 'la fortaleza', ex: 'Meine größte Stärke ist meine Zuverlässigkeit.', exes: 'Mi mayor fortaleza es mi fiabilidad.' },
        { de: 'die Schwäche', pl: 'die Schwächen', es: 'la debilidad', ex: 'Eine Schwäche von mir ist, dass ich oft zu spät antworte.', exes: 'Una debilidad mía es que a menudo respondo demasiado tarde.' },
        { de: 'die Eigenschaft', pl: 'die Eigenschaften', es: 'la cualidad', ex: 'Geduld ist für diesen Beruf eine wichtige Eigenschaft.', exes: 'La paciencia es una cualidad importante para esta profesión.' },
        { de: 'die Fähigkeit', pl: 'die Fähigkeiten', es: 'la capacidad', ex: 'Sie hat die Fähigkeit, andere zu motivieren.', exes: 'Tiene la capacidad de motivar a los demás.' },
        { de: 'das Talent', pl: 'die Talente', es: 'el talento', ex: 'Mein Bruder hat ein großes Talent für Musik.', exes: 'Mi hermano tiene mucho talento para la música.' },
        { de: 'das Selbstvertrauen', es: 'la confianza en uno mismo', ex: 'Nach dem Erfolg hatte sie mehr Selbstvertrauen.', exes: 'Después del éxito tenía más confianza en sí misma.' },
        { de: 'die Erfahrung', pl: 'die Erfahrungen', es: 'la experiencia', ex: 'Ich habe viel Erfahrung im Kundenservice.', exes: 'Tengo mucha experiencia en atención al cliente.' },
        { de: 'die Leistung', pl: 'die Leistungen', es: 'el rendimiento / el logro', ex: 'Der Chef lobt die Leistung des ganzen Teams.', exes: 'El jefe elogia el rendimiento de todo el equipo.' },
        { de: 'die Teamfähigkeit', es: 'la capacidad de trabajo en equipo', ex: 'In diesem Projekt war Teamfähigkeit besonders wichtig.', exes: 'En este proyecto la capacidad de trabajo en equipo fue especialmente importante.' },
        { de: 'ehrlich', es: 'sincero, honesto', ex: 'Meine Freundin ist ehrlich, auch wenn die Wahrheit unangenehm ist.', exes: 'Mi amiga es sincera, aunque la verdad sea desagradable.' },
        { de: 'freundlich', es: 'amable', ex: 'Der Verkäufer war sehr freundlich und hat mir viel erklärt.', exes: 'El vendedor fue muy amable y me explicó mucho.' },
        { de: 'kreativ', es: 'creativo', ex: 'Für dieses Problem brauchen wir eine kreative Lösung.', exes: 'Para este problema necesitamos una solución creativa.' },
        { de: 'ehrgeizig', es: 'ambicioso', ex: 'Sie ist ehrgeizig und lernt jeden Tag etwas Neues.', exes: 'Es ambiciosa y aprende algo nuevo cada día.' },
        { de: 'gelassen', es: 'sereno, tranquilo', ex: 'Auch im Stress bleibt er gelassen.', exes: 'Incluso bajo estrés permanece sereno.' },
        { de: 'belastbar', es: 'resistente a la presión', ex: 'Für diese Stelle sollte man sehr belastbar sein.', exes: 'Para este puesto hay que ser muy resistente a la presión.' },
        { de: 'flexibel', es: 'flexible', ex: 'Ich bin flexibel und kann auch am Wochenende arbeiten.', exes: 'Soy flexible y también puedo trabajar los fines de semana.' },
        { de: 'selbstständig', es: 'independiente', ex: 'Mit 18 wollte ich endlich selbstständig leben.', exes: 'A los 18 por fin quería vivir de forma independiente.' },
        { de: 'stolz', es: 'orgulloso', note: 'stolz sein auf + Akkusativ', ex: 'Ich bin stolz auf meine Fortschritte im Deutschen.', exes: 'Estoy orgulloso de mis progresos en alemán.' },
        { de: 'sich verbessern', es: 'mejorar', note: 'verbessert sich – verbesserte sich – hat sich verbessert', ex: 'Ich möchte mich beim Präsentieren noch verbessern.', exes: 'Quiero mejorar todavía al hacer presentaciones.' },
        { de: 'loben', es: 'elogiar', ex: 'Die Lehrerin lobt mich oft für meine Aussprache.', exes: 'La profesora me elogia a menudo por mi pronunciación.' }
      ],
      phrases: [
        { de: 'Meine größte Stärke ist meine Geduld.', es: 'Mi mayor fortaleza es mi paciencia.', use: 'presentarse' },
        { de: 'Ich bin ziemlich gut darin, Probleme zu lösen.', es: 'Soy bastante bueno resolviendo problemas.', use: 'fortaleza' },
        { de: 'Im Vergleich zu früher bin ich viel gelassener geworden.', es: 'En comparación con antes, me he vuelto mucho más sereno.', use: 'comparar' },
        { de: 'Eine Schwäche von mir ist, dass ich manchmal zu ungeduldig bin.', es: 'Una debilidad mía es que a veces soy demasiado impaciente.', use: 'autocrítica' },
        { de: 'Das fällt mir leicht.', es: 'Eso me resulta fácil.', use: 'valorar' },
        { de: 'Das fällt mir noch schwer.', es: 'Eso todavía me resulta difícil.', use: 'valorar' },
        { de: 'Meine Kollegen sagen, dass ich sehr zuverlässig bin.', es: 'Mis compañeros dicen que soy muy fiable.', use: 'citar a otros' },
        { de: 'Ich möchte mich noch im Präsentieren verbessern.', es: 'Quiero mejorar todavía al presentar.', use: 'objetivo' },
        { de: 'Ich bin stolz darauf, dass ich meine Ausbildung abgeschlossen habe.', es: 'Estoy orgulloso de haber terminado mi formación.', use: 'orgullo' }
      ],
      dialog: {
        title: 'Im Vorstellungsgespräch',
        lines: [
          { s: 'A', de: 'Erzählen Sie mir bitte etwas über Ihre Stärken.', es: 'Cuénteme, por favor, algo sobre sus fortalezas.' },
          { s: 'B', de: 'Meine größte Stärke ist meine Zuverlässigkeit. In meinem letzten Job war ich der zuverlässigste Mitarbeiter im Team.', es: 'Mi mayor fortaleza es mi fiabilidad. En mi último trabajo era el empleado más fiable del equipo.' },
          { s: 'A', de: 'Das klingt gut. Und was fällt Ihnen schwer?', es: 'Suena bien. ¿Y qué le resulta difícil?' },
          { s: 'B', de: 'Ich bin manchmal zu ehrgeizig, deshalb arbeite ich zu lange.', es: 'A veces soy demasiado ambicioso, por eso trabajo demasiado tiempo.' },
          { s: 'A', de: 'Wie gehen Sie mit Stress um?', es: '¿Cómo maneja el estrés?' },
          { s: 'B', de: 'Früher war ich unruhiger, aber jetzt bin ich viel gelassener geworden.', es: 'Antes estaba más inquieto, pero ahora me he vuelto mucho más sereno.' },
          { s: 'A', de: 'Was war Ihre beste Erfahrung in diesem Beruf?', es: '¿Cuál fue su mejor experiencia en esta profesión?' },
          { s: 'B', de: 'Ein schwieriges Projekt: Wir hatten wenig Zeit, aber ein tolles Team.', es: 'Un proyecto difícil: teníamos poco tiempo, pero un equipo estupendo.' },
          { s: 'A', de: 'Welche Eigenschaft ist in einem Team am wichtigsten?', es: '¿Qué cualidad es la más importante en un equipo?' },
          { s: 'B', de: 'Ehrlichkeit, denke ich. Ein ehrlicher Kollege ist mir lieber als ein sehr talentierter.', es: 'La sinceridad, creo. Prefiero un compañero sincero a uno muy talentoso.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Das ist ein ___ Plan als dein erster.', o: ['besserer', 'besser', 'bester'], a: 0, why: 'Comparativo delante del sustantivo, Nominativ masculino tras ein: besser + -er.' },
        { t: 'mc', q: 'Das ist der ___ Plan von allen.', o: ['bessere', 'beste', 'besten'], a: 1, why: 'Superlativo con artículo definido, Nominativ masculino: der beste.' },
        { t: 'mc', q: 'Lena arbeitet von uns allen ___.', o: ['am schnellsten', 'der schnellste', 'schnellsten'], a: 0, why: 'Sin sustantivo, el superlativo se forma con am … -sten.' },
        { t: 'mc', q: 'Ich suche eine ___ Wohnung.', o: ['größer', 'größeren', 'größere'], a: 2, why: 'Akkusativ femenino tras eine: comparativo + -e.' },
        { t: 'mc', q: 'Er ist ein ___ Mensch.', o: ['ehrliche', 'ehrlicher', 'ehrlichen'], a: 1, why: 'Nominativ masculino tras ein: terminación -er.' },
        { t: 'mc', q: 'Ich trinke gern ___ Tee.', o: ['heiße', 'heißer', 'heißen'], a: 2, why: 'Akkusativ masculino sin artículo: -en.' },
        { t: 'gap', q: 'Das war die ___ Idee des Tages. (gut, Superlativ)', a: ['beste'], why: 'Nominativ femenino tras die: der Superlativ de gut es beste.' },
        { t: 'gap', q: 'Hast du schon eine ___ Lösung gefunden? (einfach, Komparativ)', a: ['einfachere'], why: 'Akkusativ femenino tras eine: einfach + -er + -e.' },
        { t: 'gap', q: 'Mein Chef ist ein ___ Mann. (der Freund → adjetivo con -lich)', a: ['freundlicher'], why: 'Freund + -lich = freundlich; Nominativ masculino tras ein: -er.' },
        { t: 'gap', q: 'Sie ist die ___ Chefin, die ich je hatte. (nett, Superlativ)', a: ['netteste'], why: 'nett termina en -t, por eso -est-; Nominativ femenino tras die: netteste.' },
        { t: 'order', es: 'Él es el mejor compañero de nuestro equipo.', de: 'Er ist der beste Kollege in unserem Team.', why: 'Superlativo con sustantivo y artículo: der beste Kollege; in unserem Team es Dativ.' },
        { t: 'order', es: 'Busco un lugar más tranquilo para estudiar.', de: 'Ich suche einen ruhigeren Platz zum Lernen.', why: 'Akkusativ masculino tras einen: ruhiger + -en = ruhigeren.' },
        { t: 'order', es: 'En comparación con antes me he vuelto mucho más sereno.', de: 'Im Vergleich zu früher bin ich viel gelassener geworden.', why: 'Comparativo como predicado (sin terminación); el verbo conjugado ocupa la 2.ª posición tras el complemento inicial.' },
        { t: 'tr', es: 'Mi mejor amiga es una persona muy sincera.', de: ['Meine beste Freundin ist ein sehr ehrlicher Mensch.', 'Meine beste Freundin ist eine sehr ehrliche Person.'], why: '' },
        { t: 'tr', es: 'Mi mayor fortaleza es mi paciencia.', de: ['Meine größte Stärke ist meine Geduld.'], why: '' },
        { t: 'fix', q: 'Sie hat die gutste Note bekommen.', a: ['Sie hat die beste Note bekommen.'], why: 'El superlativo de gut es irregular: beste.' },
        { t: 'fix', q: 'Ich habe einen größere Wohnung gefunden.', a: ['Ich habe eine größere Wohnung gefunden.'], why: 'Wohnung es femenino: eine größere (Akkusativ femenino).' },
        { t: 'match', pairs: [['die Stärke', 'la fortaleza'], ['die Schwäche', 'la debilidad'], ['ehrgeizig', 'ambicioso'], ['gelassen', 'sereno'], ['belastbar', 'resistente a la presión'], ['selbstständig', 'independiente']] }
      ],
      speak: [
        { prompt: 'Describe tres fortalezas tuyas (5-6 frases). Usa al menos un superlativo y un comparativo con terminación.', model: 'Meine größte Stärke ist meine Geduld. Ich bin außerdem ein ziemlich ehrlicher Mensch. Im Vergleich zu früher bin ich viel gelassener geworden. Mit schwierigen Schülern bleibe ich ruhig. Das ist für mich die wichtigste Eigenschaft in meinem Beruf. Eine Schwäche von mir ist, dass ich manchmal zu viel arbeite.' },
        { prompt: 'Compara tu yo de hace cinco años con tu yo actual (4-5 frases). Usa comparativos.', model: 'Vor fünf Jahren war ich unsicherer als heute. Jetzt habe ich mehr Erfahrung und mehr Selbstvertrauen. Ich bin selbstständiger und ein besserer Lehrer geworden. Aber ich möchte mich noch im Planen verbessern.' },
        { prompt: 'Para usar en voz alta: responde a la pregunta de una entrevista &quot;Was sind Ihre Stärken und Schwächen?&quot; (4-5 frases).', model: 'Meine größten Stärken sind Zuverlässigkeit und Teamfähigkeit. Meine Kollegen sagen, dass ich sehr freundlich und belastbar bin. Eine Schwäche von mir ist, dass ich manchmal zu ehrgeizig bin. Ich arbeite daran und werde jeden Tag ein bisschen gelassener.' }
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'b1m2',
  level: 'B1',
  num: 2,
  title: 'Cambios y nuevos caminos',
  emoji: '🚲',
  lessons: [
    {
      id: 'b1-04',
      title: 'Damit sich etwas ändert',
      es: 'Movilidad y cambios',
      goals: ['Expresar finalidad con damit (sujetos distintos) y um … zu (mismo sujeto)', 'Elegir correctamente entre damit, um … zu y weil', 'Introducir, estructurar y cerrar una presentación', 'Hacer y responder preguntas después de una presentación'],
      grammar: [
        {
          h: 'damit: &quot;para que&quot; (sujetos distintos)',
          p: '<b>damit</b> introduce la <b>finalidad</b> (¿para qué? = <i>wozu?</i>) y significa &quot;para que&quot;. Es un conector subordinante: el verbo conjugado va <b>al final</b> de la subordinada y delante hay siempre una coma. Se usa sobre todo cuando el <b>sujeto de las dos oraciones es distinto</b>: uno hace algo para que otro pueda hacer otra cosa. Si hay un verbo modal, el modal va al final: <i>damit du pünktlich kommen kannst</i>.',
          table: { head: ['Oración principal', 'damit + subordinada (verbo al final)'], rows: [['Ich schicke dir den Fahrplan,', 'damit du den Bus nicht verpasst.'], ['Die Stadt baut neue Radwege,', 'damit mehr Menschen aufs Rad umsteigen.'], ['Wir erklären das System genau,', 'damit alle es verstehen können.'], ['Mein Kollege holt mich ab,', 'damit ich nicht im Stau stehen muss.']] },
          ex: [
            { de: 'Ich schicke dir den Fahrplan, damit du den Bus nicht verpasst.', es: 'Te mando el horario para que no pierdas el autobús.' },
            { de: 'Die Stadt baut neue Radwege, damit mehr Menschen aufs Rad umsteigen.', es: 'La ciudad construye nuevos carriles bici para que más personas cambien a la bici.' },
            { de: 'Wir bilden eine Fahrgemeinschaft, damit weniger Autos in die Stadt fahren.', es: 'Formamos un coche compartido para que entren menos coches a la ciudad.' },
            { de: 'Der Lehrer wiederholt die Regel, damit alle sie verstehen.', es: 'El profesor repite la regla para que todos la entiendan.' },
            { de: 'Ich gebe dir meinen Schlüssel, damit du in meiner Abwesenheit die Blumen gießen kannst.', es: 'Te doy mi llave para que puedas regar las flores mientras no estoy.' }
          ],
          tip: 'En español, &quot;para que&quot; exige subjuntivo; en alemán usas el <b>indicativo normal</b> (<i>damit du kommst</i>), sin ninguna forma especial. Y no lo confundas con <b>weil</b>: <i>damit</i> responde a <i>wozu?</i> (finalidad), <i>weil</i> responde a <i>warum?</i> (causa).'
        },
        {
          h: 'um … zu: &quot;para&quot; + infinitivo (mismo sujeto)',
          p: 'Cuando <b>quien hace la acción es el mismo</b> en las dos partes, el alemán no repite el sujeto: usa <b>um … zu + infinitivo</b>, como el español &quot;para + infinitivo&quot;. El infinitivo con <b>zu</b> va al <b>final</b> de la frase y la coma va delante de <i>um</i>. Con verbos <b>separables</b>, <i>zu</i> se coloca entre el prefijo y el verbo y se escribe junto: <i>einzusteigen, abzuholen</i>. Con verbos inseparables, <i>zu</i> va delante: <i>zu besuchen, zu erreichen</i>. Para negar: <i>um nicht zu …</i>.',
          table: { head: ['Verbo', 'um … zu', 'Ejemplo'], rows: [['sparen', 'um … <b>zu</b> sparen', 'um Geld zu sparen'], ['besuchen', 'um … <b>zu</b> besuchen', 'um die Oma zu besuchen'], ['ab|holen (separable)', 'um … <b>ab</b>zuholen', 'um das Kind abzuholen'], ['ein|steigen (separable)', 'um … <b>ein</b>zusteigen', 'um in den Zug einzusteigen'], ['verpassen (con negación)', 'um nicht … <b>zu</b> verpassen', 'um den Zug nicht zu verpassen']] },
          ex: [
            { de: 'Ich fahre mit dem Rad zur Arbeit, um Geld zu sparen.', es: 'Voy al trabajo en bici para ahorrar dinero.' },
            { de: 'Sie steht früh auf, um den ersten Zug zu erreichen.', es: 'Ella se levanta temprano para alcanzar el primer tren.' },
            { de: 'Er fährt zum Bahnhof, um seine Schwester abzuholen.', es: 'Él va a la estación para recoger a su hermana.' },
            { de: 'Wir nehmen die U-Bahn, um nicht im Stau zu stehen.', es: 'Tomamos el metro para no quedarnos en el atasco.' },
            { de: 'Ich lerne Deutsch, um in Wien zu arbeiten.', es: 'Aprendo alemán para trabajar en Viena.' }
          ],
          tip: 'Regla práctica: si en español puedes decir &quot;para + infinitivo&quot; (mismo sujeto), usa <b>um … zu</b>; si necesitas &quot;para que + otro sujeto&quot;, usa <b>damit</b>. Error típico: &quot;um ich Geld spare&quot;. Tras <i>um</i> nunca hay sujeto: <i>um Geld zu sparen</i>.'
        },
        {
          h: 'Hacer una presentación y responder preguntas',
          p: 'Una buena presentación tiene tres partes: <b>introducción</b> (tema y estructura), <b>parte central</b> (con conectores de orden: <i>zuerst, danach, außerdem</i>) y <b>cierre</b> (resumen y agradecimiento). Al final se abre una ronda de preguntas. Ante tus compañeros usa <i>euch</i> (tuteo); ante un público formal, <i>Sie / Ihnen</i> (<i>Sehr geehrte Damen und Herren</i>). Si no sabes responder, es perfectamente normal decirlo con elegancia.',
          table: { head: ['Fase', 'Fórmulas útiles'], rows: [['Introducir', 'Heute möchte ich euch … vorstellen. / In meiner Präsentation geht es um …'], ['Estructurar', 'Zuerst … Danach … Außerdem … Zum Schluss …'], ['Cerrar', 'Zusammenfassend kann man sagen, dass … / Vielen Dank für eure Aufmerksamkeit!'], ['Preguntar', 'Ich habe eine Frage zu … / Könntest du das bitte noch einmal erklären?'], ['Responder', 'Gute Frage! / Das kann ich so beantworten: … / Das weiß ich leider nicht, aber ich schaue es nach.']] },
          ex: [
            { de: 'Heute möchte ich euch das Carsharing in unserer Stadt vorstellen.', es: 'Hoy quiero presentaros el carsharing en nuestra ciudad.' },
            { de: 'Zuerst erkläre ich, wie es funktioniert, danach nenne ich die Vorteile.', es: 'Primero explico cómo funciona y después menciono las ventajas.' },
            { de: 'Zum Schluss fasse ich kurz zusammen: Es ist günstig und gut für die Umwelt.', es: 'Para terminar resumo brevemente: es barato y bueno para el medio ambiente.' },
            { de: 'Ich habe eine Frage zu den Kosten: Was zahlt man pro Stunde?', es: 'Tengo una pregunta sobre los costes: ¿cuánto se paga por hora?' },
            { de: 'Gute Frage! Das weiß ich leider nicht genau, aber ich schaue es nach.', es: '¡Buena pregunta! Eso no lo sé con exactitud, pero lo miro.' }
          ],
          tip: 'Para que tu presentación suene fluida, enlaza las ideas con conectores de orden y no leas el texto palabra por palabra. Tras la presentación, un simple <i>Vielen Dank für eure Aufmerksamkeit!</i> es el cierre más habitual.'
        }
      ],
      vocab: [
        { de: 'die Veränderung', pl: 'die Veränderungen', es: 'el cambio', ex: 'In unserer Stadt hat es große Veränderungen im Verkehr gegeben.', exes: 'En nuestra ciudad ha habido grandes cambios en el tráfico.' },
        { de: 'die Mobilität', es: 'la movilidad', ex: 'Moderne Mobilität bedeutet nicht nur Autofahren.', exes: 'La movilidad moderna no significa solo conducir.' },
        { de: 'der Verkehr', es: 'el tráfico', ex: 'Morgens ist der Verkehr in der Innenstadt sehr dicht.', exes: 'Por las mañanas el tráfico en el centro es muy denso.' },
        { de: 'das Verkehrsmittel', pl: 'die Verkehrsmittel', es: 'el medio de transporte', ex: 'Welches Verkehrsmittel nimmst du am liebsten?', exes: '¿Qué medio de transporte prefieres?' },
        { de: 'der Berufsverkehr', es: 'la hora punta', ex: 'Im Berufsverkehr sind die Straßen voll und die Bahnen überfüllt.', exes: 'En hora punta las calles están llenas y los trenes abarrotados.' },
        { de: 'der Stau', pl: 'die Staus', es: 'el atasco', ex: 'Wegen eines Unfalls standen wir eine Stunde im Stau.', exes: 'Por un accidente estuvimos una hora en un atasco.' },
        { de: 'der Pendler', pl: 'die Pendler', es: 'el viajero cotidiano (que va y viene al trabajo)', ex: 'Viele Pendler fahren jeden Tag mehr als eine Stunde.', exes: 'Muchos viajeros cotidianos van más de una hora cada día.' },
        { de: 'pendeln', es: 'ir y venir (al trabajo)', ex: 'Ich pendle jeden Tag von Bonn nach Köln.', exes: 'Voy cada día de Bonn a Colonia y vuelvo.' },
        { de: 'die Fahrgemeinschaft', pl: 'die Fahrgemeinschaften', es: 'el coche compartido', ex: 'Wir haben eine Fahrgemeinschaft gegründet, damit nicht alle allein fahren.', exes: 'Hemos creado un coche compartido para que no vayan todos solos.' },
        { de: 'der Radweg', pl: 'die Radwege', es: 'el carril bici', ex: 'Der neue Radweg verbindet den Bahnhof mit der Universität.', exes: 'El nuevo carril bici une la estación con la universidad.' },
        { de: 'der Fahrplan', pl: 'die Fahrpläne', es: 'el horario (de transportes)', ex: 'Laut Fahrplan kommt der Bus um Viertel nach acht.', exes: 'Según el horario, el autobús llega a las ocho y cuarto.' },
        { de: 'die Haltestelle', pl: 'die Haltestellen', es: 'la parada', ex: 'Die Haltestelle ist nur zwei Minuten von meiner Wohnung entfernt.', exes: 'La parada está a solo dos minutos de mi piso.' },
        { de: 'um|steigen', es: 'hacer transbordo, cambiar', note: 'steigt um – stieg um – ist umgestiegen', ex: 'In Mainz müssen Sie in einen anderen Zug umsteigen.', exes: 'En Maguncia tiene que cambiar a otro tren.' },
        { de: 'die Verspätung', pl: 'die Verspätungen', es: 'el retraso', ex: 'Der Zug hat zwanzig Minuten Verspätung.', exes: 'El tren lleva veinte minutos de retraso.' },
        { de: 'aus|bauen', es: 'ampliar, desarrollar', note: 'baut aus – baute aus – hat ausgebaut', ex: 'Die Stadt will das Busnetz weiter ausbauen.', exes: 'La ciudad quiere seguir ampliando la red de autobuses.' },
        { de: 'sich verändern', es: 'cambiar (transformarse)', note: 'verändert sich – veränderte sich – hat sich verändert', ex: 'Seit der Eröffnung der U-Bahn hat sich das Viertel stark verändert.', exes: 'Desde la apertura del metro el barrio ha cambiado mucho.' },
        { de: 'die Umwelt', es: 'el medio ambiente', ex: 'Das Fahrrad ist gut für die Umwelt.', exes: 'La bicicleta es buena para el medio ambiente.' },
        { de: 'der Vorteil', pl: 'die Vorteile', es: 'la ventaja', ex: 'Ein Vorteil der Bahn ist, dass man unterwegs arbeiten kann.', exes: 'Una ventaja del tren es que se puede trabajar durante el viaje.' },
        { de: 'die Innenstadt', pl: 'die Innenstädte', es: 'el centro de la ciudad', ex: 'In der Innenstadt gibt es kaum noch Parkplätze.', exes: 'En el centro de la ciudad apenas quedan plazas de aparcamiento.' },
        { de: 'ersetzen', es: 'sustituir', ex: 'Viele Menschen wollen das Auto durch das Fahrrad ersetzen.', exes: 'Muchas personas quieren sustituir el coche por la bicicleta.' }
      ],
      phrases: [
        { de: 'In meiner Präsentation geht es um …', es: 'Mi presentación trata de …', use: 'introducir' },
        { de: 'Zuerst zeige ich euch …, danach …', es: 'Primero os muestro …, después …', use: 'estructurar' },
        { de: 'Außerdem möchte ich noch erwähnen, dass …', es: 'Además quiero mencionar que …', use: 'añadir' },
        { de: 'Zum Schluss fasse ich kurz zusammen: …', es: 'Para terminar resumo brevemente: …', use: 'cerrar' },
        { de: 'Vielen Dank für eure Aufmerksamkeit!', es: '¡Muchas gracias por vuestra atención!', use: 'cerrar' },
        { de: 'Gibt es noch Fragen?', es: '¿Hay más preguntas?', use: 'preguntas' },
        { de: 'Ich habe eine Frage zu …', es: 'Tengo una pregunta sobre …', use: 'preguntar' },
        { de: 'Könnten Sie das bitte noch einmal erklären?', es: '¿Podría explicarlo otra vez, por favor?', use: 'pedir aclaración' },
        { de: 'Gute Frage! Das kann ich so beantworten: …', es: '¡Buena pregunta! Puedo responder así: …', use: 'responder' }
      ],
      dialog: {
        title: 'Nach der Präsentation',
        lines: [
          { s: 'A', de: 'So, das war meine Präsentation über Carsharing in unserer Stadt. Gibt es noch Fragen?', es: 'Bien, esa fue mi presentación sobre el carsharing en nuestra ciudad. ¿Hay más preguntas?' },
          { s: 'B', de: 'Ja, eine Frage habe ich: Wozu gibt es die neuen Stationen am Stadtrand?', es: 'Sí, tengo una pregunta: ¿para qué están las nuevas estaciones en las afueras?' },
          { s: 'A', de: 'Sie sind da, damit Pendler dort ihr Auto abstellen und mit der Bahn weiterfahren können.', es: 'Están para que los viajeros cotidianos dejen allí su coche y sigan en tren.' },
          { s: 'B', de: 'Das leuchtet mir ein. Und wie bucht man ein Auto?', es: 'Eso tiene sentido. ¿Y cómo se reserva un coche?' },
          { s: 'A', de: 'Man braucht nur eine App, um ein Auto zu reservieren. Eine Stunde kostet etwa vier Euro.', es: 'Solo hace falta una app para reservar un coche. Una hora cuesta unos cuatro euros.' },
          { s: 'B', de: 'Nutzt du das Angebot selbst?', es: '¿Usas tú mismo el servicio?' },
          { s: 'A', de: 'Ja, ich leihe mir manchmal ein Auto, um am Wochenende meine Eltern zu besuchen.', es: 'Sí, a veces alquilo un coche para visitar a mis padres el fin de semana.' },
          { s: 'B', de: 'Dann probiere ich es auch einmal aus, um Geld zu sparen. Deine Präsentation war übrigens sehr klar.', es: 'Entonces yo también lo probaré, para ahorrar dinero. Por cierto, tu presentación fue muy clara.' },
          { s: 'A', de: 'Danke! Ich habe viel geübt, um nicht nervös zu werden.', es: '¡Gracias! He practicado mucho para no ponerme nervioso.' },
          { s: 'B', de: 'Das hat man dir nicht angemerkt. Gehen wir jetzt einen Kaffee trinken?', es: 'No se te ha notado. ¿Nos vamos ahora a tomar un café?' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich fahre mit dem Rad zur Arbeit, ___ Geld zu sparen.', o: ['damit', 'um', 'weil'], a: 1, why: 'Mismo sujeto (yo voy y yo ahorro) y finalidad: um … zu + infinitivo.' },
        { t: 'mc', q: 'Die Stadt baut neue Radwege, ___ mehr Menschen aufs Rad umsteigen.', o: ['um', 'damit', 'deshalb'], a: 1, why: 'Sujetos distintos (la ciudad / las personas) y verbo conjugado al final: damit.' },
        { t: 'mc', q: 'Wir nehmen den Bus, ___ unser Auto kaputt ist.', o: ['damit', 'um', 'weil'], a: 2, why: 'Aquí hay una causa (el coche está roto), no una finalidad: weil.' },
        { t: 'mc', q: 'Ich stehe früh auf, um den Zug ___.', o: ['erreichen zu', 'zu erreichen', 'erreiche'], a: 1, why: 'erreichen es inseparable: zu va delante del infinitivo, al final de la frase.' },
        { t: 'mc', q: 'Sie fährt zum Flughafen, um ihren Onkel ___.', o: ['zu abholen', 'abzuholen', 'abholen zu'], a: 1, why: 'abholen es separable: zu va entre el prefijo y el verbo, todo junto (abzuholen).' },
        { t: 'mc', q: 'Zu Beginn der Präsentation sagt man: &quot;In meiner Präsentation ___ es um die Zukunft des Verkehrs.&quot;', o: ['macht', 'geht', 'kommt'], a: 1, why: 'La fórmula fija es es geht um + Akk. (tratar de).' },
        { t: 'gap', q: 'Ich schreibe dir die Adresse auf, ___ du das Café findest.', a: ['damit'], why: 'Sujetos distintos (yo escribo, tú encuentras) y verbo al final: damit.' },
        { t: 'gap', q: 'Sie fährt nach Köln, um dort einen Kurs ___ besuchen.', a: ['zu'], why: 'Con um tiene que haber un infinitivo con zu; besuchen es inseparable.' },
        { t: 'gap', q: 'Ich erkläre den Plan noch einmal, damit alle ihn ___. (verstehen)', a: ['verstehen'], why: 'Tras damit el verbo conjugado va al final: alle verstehen.' },
        { t: 'gap', q: 'Zum Schluss fasse ich kurz ___.', a: ['zusammen'], why: 'zusammen|fassen es separable: en la oración principal el prefijo va al final.' },
        { t: 'order', es: 'Ayer cogí el tren para no quedarme en el atasco.', de: 'Gestern habe ich den Zug genommen, um nicht im Stau zu stehen.', why: 'um nicht … zu + infinitivo al final de la frase; el Perfekt de la principal lleva el participio al final de su parte.' },
        { t: 'order', es: 'La ciudad amplía las líneas de autobús para que más personas puedan viajar.', de: 'Die Stadt baut die Buslinien aus, damit mehr Menschen fahren können.', why: 'damit manda el verbo conjugado (können) al final; aus|bauen es separable y aus va al final de la principal.' },
        { t: 'order', es: 'Para terminar quiero darles las gracias por su atención.', de: 'Zum Schluss möchte ich mich für eure Aufmerksamkeit bedanken.', why: 'Modal en posición 2 (möchte) y el infinitivo bedanken al final; sich bedanken für + Akk.' },
        { t: 'tr', es: 'Trabajo en casa para ahorrar tiempo.', de: ['Ich arbeite zu Hause, um Zeit zu sparen.', 'Ich arbeite im Homeoffice, um Zeit zu sparen.', 'Ich arbeite von zu Hause aus, um Zeit zu sparen.'], why: '' },
        { t: 'tr', es: 'Te mando el horario para que no pierdas el autobús.', de: ['Ich schicke dir den Fahrplan, damit du den Bus nicht verpasst.', 'Ich schicke dir die Abfahrtszeiten, damit du den Bus nicht verpasst.'], why: '' },
        { t: 'fix', q: 'Ich fahre mit dem Rad, um ich Geld spare.', a: ['Ich fahre mit dem Rad, um Geld zu sparen.'], why: 'Mismo sujeto: um + infinitivo con zu, sin repetir el sujeto.' },
        { t: 'fix', q: 'Sie steigt in Köln aus, um ihren Bruder zu abholen.', a: ['Sie steigt in Köln aus, um ihren Bruder abzuholen.'], why: 'Con verbos separables, zu va entre el prefijo y el verbo: abzuholen.' },
        { t: 'fix', q: 'Ich schicke dir die Karte, um du die Haltestelle findest.', a: ['Ich schicke dir die Karte, damit du die Haltestelle findest.'], why: 'Sujetos distintos (yo / tú): damit, no um.' },
        { t: 'match', pairs: [['der Stau', 'el atasco'], ['der Fahrplan', 'el horario'], ['die Haltestelle', 'la parada'], ['pendeln', 'ir y venir al trabajo'], ['die Verspätung', 'el retraso'], ['um|steigen', 'hacer transbordo']] }
      ],
      speak: [
        { prompt: 'Explica en 5-6 frases por qué usas cada medio de transporte en tu vida diaria. Usa al menos una vez um … zu y una vez damit.', model: 'Ich fahre meistens mit dem Rad zur Arbeit, um Geld zu sparen und fit zu bleiben. Bei schlechtem Wetter nehme ich die Straßenbahn, damit ich nicht nass werde. Das Auto benutze ich nur selten, zum Beispiel um große Einkäufe zu transportieren. Ich finde, die Stadt sollte mehr Radwege bauen, damit noch mehr Menschen umsteigen können.' },
        { prompt: 'Prepara una mini-presentación (6-7 frases) sobre un cambio reciente en tu ciudad o barrio: introduce el tema, estructura y cierra.', model: 'Guten Tag zusammen! Heute möchte ich euch etwas über den neuen Radweg in meiner Stadt erzählen. Zuerst erkläre ich, wo er verläuft. Danach zeige ich, was sich für die Pendler verändert hat. Zum Schluss fasse ich die Vorteile kurz zusammen. Vielen Dank für eure Aufmerksamkeit! Gibt es noch Fragen?' },
        { prompt: 'Para usar en voz alta: tras una presentación, haz dos preguntas a quien presenta y responde tú a una pregunta que no sabes contestar (4-5 frases).', model: 'Ich habe eine Frage zu deinem Beispiel: Wozu braucht man die zweite App? – Gute Frage! Man braucht sie, damit man die Fahrkarten direkt bezahlen kann. Könntest du bitte noch einmal erklären, wie das funktioniert? – Das weiß ich leider nicht genau, aber ich schaue es nach und schreibe dir.' }
      ]
    },
    {
      id: 'b1-05',
      title: 'Wenn ich könnte, …',
      es: 'Formas alternativas de vivir',
      goals: ['Hablar de situaciones irreales con Konjunktiv II en oraciones con wenn', 'Formar palabras compuestas con n o s de unión (Gästezimmer, Wohnungsmarkt)', 'Dar deseos, consejos y propuestas, y valorar algo', 'Resumir una conversación'],
      grammar: [
        {
          h: 'Konjunktiv II de sein, haben, können y werden',
          p: 'El <b>Konjunktiv II</b> sirve para hablar de lo <b>irreal, hipotético o deseado</b>, y también para ser más cortés. Equivale al condicional español (&quot;sería, tendría, podría&quot;) y al imperfecto de subjuntivo. Con <b>sein, haben, los modales</b> y <b>werden</b> se usan formas propias, que salen del Präteritum con <b>Umlaut</b> y terminación en <b>-e</b>. Para casi todos los demás verbos se usa <b>würde + infinitivo</b>, que es más fácil y totalmente correcto. Los modales <i>müssen</i> y <i>dürfen</i> hacen <i>müsste, dürfte</i>; <i>wollen</i> y <i>sollen</i> no cambian (<i>wollte, sollte</i>).',
          table: { head: ['Persona', 'sein', 'haben', 'können', 'werden'], rows: [['ich', '<b>wäre</b>', '<b>hätte</b>', '<b>könnte</b>', '<b>würde</b>'], ['du', 'wärst', 'hättest', 'könntest', 'würdest'], ['er / sie / es', '<b>wäre</b>', '<b>hätte</b>', '<b>könnte</b>', '<b>würde</b>'], ['wir', 'wären', 'hätten', 'könnten', 'würden'], ['ihr', 'wärt', 'hättet', 'könntet', 'würdet'], ['sie / Sie', 'wären', 'hätten', 'könnten', 'würden']] },
          ex: [
            { de: 'Ich wäre gern öfter im Grünen.', es: 'Me gustaría estar más a menudo en plena naturaleza.' },
            { de: 'Hätten wir einen Garten, könnten wir Gemüse anbauen.', es: 'Si tuviéramos un jardín, podríamos cultivar verdura.' },
            { de: 'Du könntest mich am Wochenende besuchen.', es: 'Podrías visitarme el fin de semana.' },
            { de: 'Das würde mir bestimmt gefallen.', es: 'Seguro que eso me gustaría.' },
            { de: 'Mehr Platz wäre schön.', es: 'Tener más espacio sería bonito.' }
          ],
          tip: 'Recuerda que <b>ich</b> y <b>er/sie/es</b> tienen la <b>misma forma</b> (<i>ich hätte, er hätte</i>). Y no digas &quot;würde sein&quot; ni &quot;würde haben&quot;: usa directamente <b>wäre</b> y <b>hätte</b>.'
        },
        {
          h: 'Oraciones con wenn: situaciones irreales',
          p: 'Para una situación <b>irreal o poco probable</b> pones el <b>Konjunktiv II en las dos partes</b>: <i>Wenn ich mehr Zeit hätte, würde ich …</i> (&quot;Si tuviera más tiempo, …&quot;). La subordinada con <b>wenn</b> lleva el verbo al final; si va primero, el verbo de la principal abre la segunda parte (<i>würde ich</i>). Compara una posibilidad real (<i>Wenn ich Zeit habe, komme ich.</i> = indicativo) con una irreal (<i>Wenn ich Zeit hätte, würde ich kommen.</i>). Con verbos <b>frecuentes</b> se usan formas propias que suenan natural; con el resto, <b>würde + infinitivo</b>, porque en los verbos débiles el Konjunktiv II es igual al Präteritum (<i>wohnte</i>) y confunde.',
          table: { head: ['Infinitivo', 'Konjunktiv II', 'Ejemplo'], rows: [['gehen', '<b>ginge</b>', 'Wenn ich Zeit hätte, ginge ich öfter ins Hallenbad.'], ['kommen', '<b>käme</b>', 'Wenn du früher käme(st) … → du kämst'], ['wissen', '<b>wüsste</b>', 'Wenn ich es wüsste, würde ich es dir sagen.'], ['brauchen', '<b>bräuchte</b>', 'Wenn ich weniger Platz bräuchte, würde ich umziehen.'], ['geben', '<b>gäbe</b>', 'Wenn es einen Aufzug gäbe, wäre es leichter.']] },
          ex: [
            { de: 'Wenn ich mehr Zeit hätte, würde ich öfter ins Hallenbad gehen.', es: 'Si tuviera más tiempo, iría más a menudo a la piscina cubierta.' },
            { de: 'Wenn wir einen Aufzug hätten, wäre der Umzug einfacher.', es: 'Si tuviéramos ascensor, la mudanza sería más fácil.' },
            { de: 'Wenn ich wüsste, wo der Schlüssel liegt, würde ich ihn dir sofort geben.', es: 'Si supiera dónde está la llave, te la daría enseguida.' },
            { de: 'Wenn du früher kämst, könnten wir zusammen essen.', es: 'Si vinieras antes, podríamos comer juntos.' },
            { de: 'Ich würde sofort umziehen, wenn die Miete niedriger wäre.', es: 'Me mudaría enseguida si el alquiler fuera más bajo.' },
            { de: 'Wenn ich nicht so viel Platz bräuchte, würde ich in eine WG ziehen.', es: 'Si no necesitara tanto espacio, me iría a vivir a un piso compartido.' }
          ],
          tip: 'Evita <i>würde</i> dentro de la subordinada con <i>wenn</i>: es mejor &quot;Wenn ich mehr Zeit <b>hätte</b>, …&quot; que &quot;Wenn ich mehr Zeit haben würde, …&quot;. Con <i>ginge, käme, wüsste, bräuchte, gäbe</i> suenas más natural, pero <i>würde gehen / würde kommen</i> también es correcto.'
        },
        {
          h: 'Deseos, consejos, propuestas y valoraciones',
          p: 'El Konjunktiv II te da fórmulas muy útiles para la vida real. Con ellas <b>expresas deseos</b>, <b>aconsejas</b>, <b>propones</b> algo y <b>valoras</b> con más suavidad. También sirve para <b>resumir una conversación</b>: enumeras de qué hablasteis y a qué conclusión llegasteis (<i>Wir haben darüber gesprochen, dass …; Alle waren sich einig, dass …; Zusammenfassend kann man sagen, dass …</i>).',
          table: { head: ['Función', 'Fórmula', 'Ejemplo'], rows: [['Deseo', 'Ich würde gern … / Ich hätte gern … / Ich wünschte, …', 'Ich würde gern in einer WG wohnen.'], ['Consejo', 'An deiner Stelle würde ich … / Du könntest …', 'An deiner Stelle würde ich den Altbau nehmen.'], ['Propuesta', 'Wie wäre es, wenn wir …? / Hättest du Lust, …?', 'Wie wäre es, wenn wir uns das Haus ansehen?'], ['Cortesía', 'Könntest du …? / Würden Sie …?', 'Könntest du mir beim Umzug helfen?'], ['Valorar', 'Ich fände es gut / schön, wenn … / Der Vorteil wäre …', 'Ich fände es schön, wenn es einen Gemeinschaftsraum gäbe.']] },
          ex: [
            { de: 'Ich würde gern in einem Mehrgenerationenhaus wohnen.', es: 'Me gustaría vivir en una casa multigeneracional.' },
            { de: 'An deiner Stelle würde ich zuerst die Nachbarn kennenlernen.', es: 'En tu lugar, primero conocería a los vecinos.' },
            { de: 'Wie wäre es, wenn wir am Samstag den Altbau besichtigen?', es: '¿Qué tal si el sábado visitamos el edificio antiguo?' },
            { de: 'Ich fände es toll, wenn es im Haus eine Gemeinschaftsküche gäbe.', es: 'Me parecería genial que hubiera una cocina común en la casa.' },
            { de: 'Wir haben darüber gesprochen, ob ein Umzug sinnvoll wäre, und waren uns einig, dass wir noch warten.', es: 'Hemos hablado de si mudarse tendría sentido y estuvimos de acuerdo en esperar todavía.' }
          ],
          tip: 'En alemán <i>Ich wünschte, ich hätte …</i> expresa un deseo irreal (&quot;ojalá tuviera …&quot;). Para consejos suaves, <i>An deiner Stelle würde ich …</i> es la fórmula estándar; con <i>Sie</i> di <i>An Ihrer Stelle würde ich …</i>.'
        },
        {
          h: 'Palabras compuestas: Nomen + n/s + Nomen',
          p: 'En alemán las palabras compuestas se forman uniendo sustantivos y el <b>último componente</b> decide el <b>artículo y el género</b>: <i>das Zimmer</i> → <span class="de">das Gästezimmer</span>. Entre los dos sustantivos a veces aparece una <b>letra de unión</b> (<b>-s-</b>, <b>-n-</b>, <b>-e-</b>) o un plural. No hay una regla perfecta, pero ayuda saber que tras <b>-ung, -heit, -keit, -schaft, -tät, -ion</b> casi siempre va <b>-s-</b> (<i>Wohnungs-, Gesundheits-</i>), muchos femeninos en <b>-e</b> toman <b>-n-</b> (<i>Küchen-, Straßen-</i>) y otros compuestos no llevan nada (<i>Haustür</i>). Lo más seguro es aprender el compuesto completo.',
          table: { head: ['1.er elemento', 'Unión', '2.º elemento', 'Compuesto'], rows: [['der Geburtstag', '-s-', 'die Feier', 'die Geburtstagsfeier'], ['die Wohnung', '-s-', 'der Markt', 'der Wohnungsmarkt'], ['die Küche', '-n-', 'der Tisch', 'der Küchentisch'], ['der Gast', 'Gäste (plural)', 'das Zimmer', 'das Gästezimmer'], ['die Straße', '-n-', 'die Bahn', 'die Straßenbahn'], ['das Haus', '(nada)', 'die Tür', 'die Haustür']] },
          ex: [
            { de: 'Das Gästezimmer ist klein, aber sehr gemütlich.', es: 'La habitación de invitados es pequeña, pero muy acogedora.' },
            { de: 'Auf dem Wohnungsmarkt ist es schwer, etwas Günstiges zu finden.', es: 'En el mercado de la vivienda es difícil encontrar algo barato.' },
            { de: 'Wir planen eine Geburtstagsfeier im Garten.', es: 'Estamos planeando una fiesta de cumpleaños en el jardín.' },
            { de: 'Die Straßenbahn hält direkt vor dem Hochhaus.', es: 'El tranvía para justo delante del bloque de pisos.' },
            { de: 'Im Kinderzimmer steht ein großes Hochbett.', es: 'En la habitación infantil hay una cama alta grande.' }
          ],
          tip: 'Error típico: poner el artículo del primer componente. Siempre vale el del <b>último</b>: <i>der</i> Wohnungsmarkt (der Markt), <i>die</i> Geburtstagsfeier (die Feier).'
        }
      ],
      vocab: [
        { de: 'das Gebäude', pl: 'die Gebäude', es: 'el edificio', ex: 'Das Gebäude am Marktplatz ist über hundert Jahre alt.', exes: 'El edificio de la plaza del mercado tiene más de cien años.' },
        { de: 'das Hochhaus', pl: 'die Hochhäuser', es: 'el rascacielos, el bloque alto', ex: 'Im zwölften Stock des Hochhauses hat man eine tolle Aussicht.', exes: 'En la planta doce del bloque alto se tiene una vista estupenda.' },
        { de: 'der Altbau', pl: 'die Altbauten', es: 'el edificio antiguo', ex: 'Im Altbau sind die Decken hoch und die Fenster groß.', exes: 'En el edificio antiguo los techos son altos y las ventanas grandes.' },
        { de: 'der Neubau', pl: 'die Neubauten', es: 'el edificio nuevo', ex: 'Der Neubau hat einen Aufzug und eine Tiefgarage.', exes: 'El edificio nuevo tiene ascensor y garaje subterráneo.' },
        { de: 'das Reihenhaus', pl: 'die Reihenhäuser', es: 'la casa adosada', ex: 'Wir haben ein kleines Reihenhaus mit Garten gemietet.', exes: 'Hemos alquilado una pequeña casa adosada con jardín.' },
        { de: 'die Wohngemeinschaft', pl: 'die Wohngemeinschaften', es: 'el piso compartido (WG)', ex: 'In unserer Wohngemeinschaft teilen sich vier Leute die Küche.', exes: 'En nuestro piso compartido, cuatro personas comparten la cocina.' },
        { de: 'das Treppenhaus', pl: 'die Treppenhäuser', es: 'la escalera (del edificio)', ex: 'Im Treppenhaus begegne ich oft meinen Nachbarn.', exes: 'En la escalera me encuentro a menudo con mis vecinos.' },
        { de: 'der Aufzug', pl: 'die Aufzüge', es: 'el ascensor', ex: 'Der Aufzug ist leider schon wieder kaputt.', exes: 'Por desgracia el ascensor está estropeado otra vez.' },
        { de: 'der Keller', pl: 'die Keller', es: 'el sótano', ex: 'Im Keller hat jede Wohnung einen eigenen Abstellraum.', exes: 'En el sótano cada vivienda tiene su propio trastero.' },
        { de: 'der Dachboden', pl: 'die Dachböden', es: 'el desván', ex: 'Auf dem Dachboden stehen noch alte Möbel meiner Großeltern.', exes: 'En el desván todavía hay muebles viejos de mis abuelos.' },
        { de: 'der Gemeinschaftsraum', pl: 'die Gemeinschaftsräume', es: 'la sala común', ex: 'Im Gemeinschaftsraum feiern wir manchmal zusammen.', exes: 'En la sala común a veces celebramos juntos.' },
        { de: 'der Innenhof', pl: 'die Innenhöfe', es: 'el patio interior', ex: 'Die Kinder spielen im Innenhof, weil dort keine Autos fahren.', exes: 'Los niños juegan en el patio interior porque allí no pasan coches.' },
        { de: 'die Einrichtung', pl: 'die Einrichtungen', es: 'la instalación, el servicio', ex: 'In unserem Viertel gibt es viele öffentliche Einrichtungen.', exes: 'En nuestro barrio hay muchos servicios públicos.' },
        { de: 'der Wohnungsmarkt', es: 'el mercado de la vivienda', ex: 'Auf dem Wohnungsmarkt ist es schwierig, etwas Günstiges zu finden.', exes: 'En el mercado de la vivienda es difícil encontrar algo barato.' },
        { de: 'die Miete', pl: 'die Mieten', es: 'el alquiler (precio)', ex: 'Die Miete steigt fast jedes Jahr.', exes: 'El alquiler sube casi todos los años.' },
        { de: 'das Gästezimmer', pl: 'die Gästezimmer', es: 'la habitación de invitados', ex: 'Unser Gästezimmer ist klein, aber gemütlich.', exes: 'Nuestra habitación de invitados es pequeña, pero acogedora.' },
        { de: 'die Tiefgarage', pl: 'die Tiefgaragen', es: 'el garaje subterráneo', ex: 'In der Tiefgarage gibt es auch Platz für Fahrräder.', exes: 'En el garaje subterráneo también hay sitio para bicicletas.' },
        { de: 'die Sporthalle', pl: 'die Sporthallen', es: 'el polideportivo', ex: 'Die Sporthalle ist abends für alle Bewohner geöffnet.', exes: 'El polideportivo está abierto por las tardes para todos los vecinos.' },
        { de: 'das Hallenbad', pl: 'die Hallenbäder', es: 'la piscina cubierta', ex: 'Am Sonntagmorgen gehe ich gern ins Hallenbad.', exes: 'Los domingos por la mañana me gusta ir a la piscina cubierta.' },
        { de: 'die Bücherei', pl: 'die Büchereien', es: 'la biblioteca (pública pequeña)', ex: 'Die Bücherei im Erdgeschoss leiht auch Spiele aus.', exes: 'La biblioteca de la planta baja también presta juegos.' }
      ],
      phrases: [
        { de: 'Wenn ich mehr Platz hätte, würde ich …', es: 'Si tuviera más espacio, yo …', use: 'hipótesis' },
        { de: 'An deiner Stelle würde ich …', es: 'En tu lugar, yo …', use: 'aconsejar' },
        { de: 'Du könntest doch mal …', es: 'Podrías, por ejemplo, …', use: 'proponer' },
        { de: 'Wie wäre es, wenn wir …?', es: '¿Qué tal si nosotros …?', use: 'proponer' },
        { de: 'Ich wünschte, ich hätte mehr Zeit.', es: 'Ojalá tuviera más tiempo.', use: 'deseo' },
        { de: 'Ich fände es toll, wenn …', es: 'Me parecería genial que …', use: 'valorar' },
        { de: 'Der Vorteil wäre, dass …', es: 'La ventaja sería que …', use: 'valorar' },
        { de: 'Wir haben darüber gesprochen, ob …', es: 'Hemos hablado de si …', use: 'resumir' },
        { de: 'Alle waren sich einig, dass …', es: 'Todos estuvieron de acuerdo en que …', use: 'resumir' },
        { de: 'Zusammenfassend kann man sagen, dass …', es: 'En resumen, se puede decir que …', use: 'resumir' }
      ],
      dialog: {
        title: 'Alternative Wohnformen',
        lines: [
          { s: 'A', de: 'Hast du den Artikel über das Mehrgenerationenhaus gelesen? Dort wohnen Junge und Alte in einem Gebäude zusammen.', es: '¿Has leído el artículo sobre la casa multigeneracional? Allí viven jóvenes y mayores en un mismo edificio.' },
          { s: 'B', de: 'Ja, das klingt spannend. Wenn ich weniger Platz bräuchte, würde ich sofort einziehen.', es: 'Sí, suena interesante. Si necesitara menos espacio, me mudaría enseguida.' },
          { s: 'A', de: 'Wieso? Es gibt doch einen großen Gemeinschaftsraum und einen schönen Innenhof.', es: '¿Por qué? Si hay una gran sala común y un bonito patio interior.' },
          { s: 'B', de: 'Stimmt, aber ich hätte gern ein Gästezimmer, wenn meine Eltern zu Besuch kommen.', es: 'Es verdad, pero me gustaría tener una habitación de invitados cuando vengan mis padres de visita.' },
          { s: 'A', de: 'Das ginge bestimmt. Viele Häuser haben ein Zimmer, das man tageweise mieten kann.', es: 'Seguro que eso sería posible. Muchas casas tienen una habitación que se puede alquilar por días.' },
          { s: 'B', de: 'Das wäre super. Wie hoch ist denn die Miete?', es: 'Eso sería genial. ¿Y a cuánto asciende el alquiler?' },
          { s: 'A', de: 'Sie ist niedriger als auf dem normalen Wohnungsmarkt, weil man viel gemeinsam nutzt.', es: 'Es más baja que en el mercado normal de la vivienda, porque se comparten muchas cosas.' },
          { s: 'B', de: 'Dann sollten wir es uns ansehen. Wie wäre es, wenn wir am Samstag zusammen hinfahren?', es: 'Entonces deberíamos verlo. ¿Qué tal si vamos juntos el sábado?' },
          { s: 'A', de: 'Gern! Zusammengefasst: Wir fahren am Samstag hin und sprechen mit den Bewohnern.', es: '¡Con gusto! En resumen: vamos el sábado y hablamos con los vecinos.' },
          { s: 'B', de: 'Perfekt, ich schreibe schon mal meine Fragen auf.', es: 'Perfecto, voy anotando ya mis preguntas.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Wenn ich mehr Geld ___, würde ich ein Haus kaufen.', o: ['habe', 'hätte', 'hatte'], a: 1, why: 'Situación irreal: Konjunktiv II de haben = hätte.' },
        { t: 'mc', q: 'Wenn ich mehr Zeit hätte, ___ ich öfter ins Hallenbad.', o: ['gehe', 'ginge', 'ging'], a: 1, why: 'Konjunktiv II de gehen: ginge (Präteritum ging sería el pasado).' },
        { t: 'mc', q: 'Wenn wir mehr Platz hätten, ___ wir ein Gästezimmer einrichten.', o: ['werden', 'würden', 'wurden'], a: 1, why: 'Konjunktiv II de werden + infinitivo: wir würden einrichten.' },
        { t: 'mc', q: 'Wenn es in der Stadt mehr Wohnungen ___, wären die Mieten niedriger.', o: ['gibt', 'gab', 'gäbe'], a: 2, why: 'Hipótesis irreal: Konjunktiv II de geben = gäbe.' },
        { t: 'mc', q: 'Wir feiern im Garten eine ___.', o: ['Geburtstagfeier', 'Geburtstagsfeier', 'Geburtstagenfeier'], a: 1, why: 'Geburtstag + -s- + Feier: la letra de unión es -s-.' },
        { t: 'mc', q: 'An deiner Stelle ___ ich mit dem Vermieter sprechen.', o: ['würde', 'werde', 'wurde'], a: 0, why: 'Para aconsejar suavemente: An deiner Stelle würde ich + infinitivo.' },
        { t: 'gap', q: 'Wenn ich mehr Platz hätte, ___ ich ein Gästezimmer einrichten. (werden)', a: ['würde'], why: 'Konjunktiv II de werden con ich: würde + infinitivo.' },
        { t: 'gap', q: 'Wenn ich du ___, würde ich nicht in ein Hochhaus ziehen. (sein)', a: ['wäre'], why: 'Konjunktiv II de sein con ich: wäre.' },
        { t: 'gap', q: 'Wenn er das Wort ___, würde er es erklären. (wissen)', a: ['wüsste'], why: 'Konjunktiv II de wissen: wüsste (con Umlaut).' },
        { t: 'gap', q: 'Wenn mein Mann früher nach Hause ___, könnten wir zusammen kochen. (kommen)', a: ['käme'], why: 'Konjunktiv II de kommen: käme.' },
        { t: 'gap', q: 'Wenn ich weniger Platz ___, würde ich in eine kleine Wohnung ziehen. (brauchen, forma con Umlaut)', a: ['bräuchte'], why: 'brauchen hace bräuchte en Konjunktiv II (con Umlaut).' },
        { t: 'order', es: 'Si tuviera tiempo, iría más a menudo a nadar.', de: 'Wenn ich Zeit hätte, würde ich öfter schwimmen gehen.', why: 'wenn manda hätte al final; en la principal, würde va en primera posición tras la coma.' },
        { t: 'order', es: 'En tu lugar yo cogería el piso.', de: 'An deiner Stelle würde ich die Wohnung nehmen.', why: 'Fórmula de consejo: An deiner Stelle + würde ich + infinitivo al final.' },
        { t: 'order', es: '¿Qué tal si visitamos juntos el edificio antiguo?', de: 'Wie wäre es, wenn wir den Altbau zusammen besichtigen?', why: 'Wie wäre es, wenn + subordinada con el verbo al final (besichtigen).' },
        { t: 'tr', es: 'Si tuviera una casa grande, invitaría a todos mis amigos.', de: ['Wenn ich ein großes Haus hätte, würde ich alle meine Freunde einladen.', 'Ich würde alle meine Freunde einladen, wenn ich ein großes Haus hätte.'], why: '' },
        { t: 'tr', es: 'En tu lugar hablaría con el casero.', de: ['An deiner Stelle würde ich mit dem Vermieter sprechen.', 'An deiner Stelle würde ich mit dem Vermieter reden.', 'Ich würde an deiner Stelle mit dem Vermieter sprechen.'], why: '' },
        { t: 'fix', q: 'Wenn ich mehr Zeit hatte, würde ich mehr lesen.', a: ['Wenn ich mehr Zeit hätte, würde ich mehr lesen.'], why: 'Hipótesis irreal: se necesita Konjunktiv II (hätte), no el Präteritum (hatte).' },
        { t: 'fix', q: 'Wenn ich reich wäre, ich würde ein Schloss kaufen.', a: ['Wenn ich reich wäre, würde ich ein Schloss kaufen.'], why: 'Tras la subordinada inicial, el verbo de la principal va primero: würde ich.' },
        { t: 'match', pairs: [['der Altbau', 'el edificio antiguo'], ['der Aufzug', 'el ascensor'], ['der Keller', 'el sótano'], ['die Miete', 'el alquiler'], ['das Hallenbad', 'la piscina cubierta'], ['der Innenhof', 'el patio interior']] }
      ],
      speak: [
        { prompt: 'Describe tu casa o tu forma de vivir ideal en 5-6 frases. Usa varias veces Wenn ich … hätte, würde ich … y al menos una forma propia (wäre, könnte, ginge …).', model: 'Wenn ich mehr Geld hätte, würde ich in ein Reihenhaus mit großem Garten ziehen. Ich würde ein Gästezimmer einrichten, damit meine Familie öfter bei mir übernachten könnte. Wenn es in der Nähe ein Hallenbad gäbe, ginge ich jede Woche schwimmen. Außerdem hätte ich gern eine große Küche, weil ich gern für Freunde koche. Das wäre mein Traum.' },
        { prompt: 'Aconseja a un amigo que busca piso (4-5 frases). Usa An deiner Stelle würde ich …, Du könntest … y Wie wäre es, wenn …?', model: 'An deiner Stelle würde ich zuerst auf dem Wohnungsmarkt im Internet suchen. Du könntest auch einen Altbau ansehen, denn dort sind die Zimmer oft größer. Wie wäre es, wenn wir am Samstag zusammen Wohnungen besichtigen? Ich würde dir gern helfen.' },
        { prompt: 'Para usar en voz alta: resume en 4-5 frases una conversación reciente (con un amigo, en clase o en el trabajo). Usa Wir haben darüber gesprochen, … y Alle waren sich einig, …', model: 'Wir haben darüber gesprochen, ob wir eine Wohngemeinschaft gründen sollten. Anna meinte, dass es billiger wäre, und Murat fand es toll, wenn es einen Gemeinschaftsraum gäbe. Alle waren sich einig, dass wir zuerst mehrere Altbauten besichtigen. Zusammenfassend kann man sagen, dass die Idee allen gefällt.' }
      ]
    },
    {
      id: 'b1-06',
      title: 'Mut zur Veränderung',
      es: 'Atreverse a algo nuevo',
      goals: ['Expresar contraste y concesión con obwohl', 'Distinguir obwohl, trotzdem, weil y aber', 'Valorar críticamente ventajas y desventajas', 'Animar y apoyar a alguien ante un cambio profesional'],
      grammar: [
        {
          h: 'obwohl: &quot;aunque, a pesar de que&quot;',
          p: '<b>obwohl</b> introduce una <b>concesión</b>: algo ocurre aunque <b>no era lo esperado</b>. Es un conector subordinante, así que el verbo conjugado va <b>al final</b> y delante hay coma. La subordinada puede ir <b>detrás</b> de la principal o <b>delante</b>; si va delante, el verbo de la principal pasa a la <b>primera posición</b> tras la coma (<i>Obwohl ich Angst habe, bewerbe ich mich.</i>). A diferencia del español &quot;aunque&quot;, con <i>obwohl</i> el verbo va en <b>indicativo</b> (es un hecho real).',
          table: { head: ['Relación', 'Conector', 'Ejemplo'], rows: [['Concesión (aunque, a pesar de que)', '<b>obwohl</b> + verbo al final', 'Obwohl es regnet, gehen wir spazieren.'], ['Causa (porque)', '<b>weil</b> + verbo al final', 'Wir bleiben zu Hause, weil es regnet.']] },
          ex: [
            { de: 'Obwohl sie Angst hatte, hat sie ihren Job gekündigt.', es: 'Aunque tenía miedo, renunció a su trabajo.' },
            { de: 'Er hat die Stelle bekommen, obwohl er keine Erfahrung hatte.', es: 'Consiguió el puesto, a pesar de que no tenía experiencia.' },
            { de: 'Obwohl das Gehalt niedriger ist, nehme ich die Stelle.', es: 'Aunque el sueldo es más bajo, acepto el puesto.' },
            { de: 'Ich mache eine Umschulung, obwohl ich schon vierzig bin.', es: 'Hago una reconversión profesional aunque ya tengo cuarenta años.' },
            { de: 'Sie lächelt, obwohl sie sehr müde ist.', es: 'Ella sonríe aunque está muy cansada.' }
          ],
          tip: 'La idea clave es la <b>contraexpectativa</b>: si el resultado es lo normal, usa <i>weil</i>; si es lo contrario de lo esperado, usa <i>obwohl</i>. Error típico: &quot;Obwohl ich müde bin, ich gehe …&quot;. Correcto: <b>Obwohl ich müde bin, gehe ich …</b>.'
        },
        {
          h: 'obwohl, trotzdem, aber, weil y deshalb',
          p: '<b>trotzdem</b> (&quot;a pesar de eso, aun así&quot;) expresa la misma idea que <i>obwohl</i>, pero es un <b>adverbio</b>, no un conector subordinante: ocupa la <b>posición 1</b> de la segunda oración y el verbo conjugado va en <b>posición 2</b>. Así, <i>obwohl</i> manda el verbo al final, <i>trotzdem</i> lo deja en segunda posición y <i>aber</i> no cambia el orden. Compáralo con <i>weil</i> (causa) y <i>deshalb</i> (consecuencia).',
          table: { head: ['Conector', 'Tipo y verbo', 'Ejemplo'], rows: [['<b>obwohl</b>', 'subordinante: verbo al final', 'Obwohl er müde ist, arbeitet er weiter.'], ['<b>trotzdem</b>', 'adverbio: pos. 1, verbo en pos. 2', 'Er ist müde, trotzdem arbeitet er weiter.'], ['<b>aber</b>', 'coordinante: pos. 0, orden normal', 'Er ist müde, aber er arbeitet weiter.'], ['<b>weil</b>', 'subordinante (causa): verbo al final', 'Er arbeitet weiter, weil er das Projekt fertig machen will.'], ['<b>deshalb</b>', 'adverbio (consecuencia): verbo en pos. 2', 'Er will das Projekt fertig machen, deshalb arbeitet er weiter.']] },
          ex: [
            { de: 'Das Risiko ist groß, trotzdem möchte ich es versuchen.', es: 'El riesgo es grande, aun así quiero intentarlo.' },
            { de: 'Obwohl das Risiko groß ist, möchte ich es versuchen.', es: 'Aunque el riesgo es grande, quiero intentarlo.' },
            { de: 'Der Weg war schwer, trotzdem bereut er seine Entscheidung nicht.', es: 'El camino fue duro, aun así no se arrepiente de su decisión.' },
            { de: 'Ich habe wenig Geld, aber ich bin glücklich.', es: 'Tengo poco dinero, pero soy feliz.' },
            { de: 'Sie hat gekündigt, weil sie etwas Neues ausprobieren wollte.', es: 'Renunció porque quería probar algo nuevo.' }
          ],
          tip: 'Truco: con <i>trotzdem</i> puedes cambiar a <i>aber</i> sin tocar el orden; con <i>obwohl</i> no. Error típico: &quot;Trotzdem ich bin müde, …&quot; (mezcla de los dos). Correcto: <i>Trotzdem bin ich müde</i> no tiene sentido aquí: la forma buena es <b>Ich bin müde, trotzdem arbeite ich</b>.'
        },
        {
          h: 'Valorar críticamente y animar',
          p: 'Antes de dar un paso importante conviene <b>valorar</b> con equilibrio las ventajas y los riesgos, y luego <b>animar</b> o apoyar a la otra persona. Para valorar sirven <i>einerseits … andererseits …</i> (por un lado … por otro …), <i>der Vorteil / der Nachteil</i> y <i>Meiner Meinung nach …</i>. Para animar se usan imperativos cortos (<i>Trau dich! Gib nicht auf!</i>), el verbo <i>schaffen</i> (<i>Du schaffst das!</i>) y frases de apoyo como <i>Ich drücke dir die Daumen.</i> (&quot;te deseo suerte&quot;, literalmente &quot;te aprieto los pulgares&quot;).',
          table: { head: ['Función', 'Fórmulas'], rows: [['Valorar con equilibrio', 'Einerseits …, andererseits … / Der Vorteil ist …, der Nachteil ist …'], ['Dar opinión crítica', 'Meiner Meinung nach … / Ich sehe das kritisch, weil … / Es kommt darauf an, ob …'], ['Animar', 'Trau dich! / Du schaffst das! / Das ist eine tolle Chance. / Was hast du zu verlieren?'], ['Apoyar', 'Ich drücke dir die Daumen. / Ich bin sicher, dass du das kannst. / Gib nicht auf!']] },
          ex: [
            { de: 'Einerseits ist die Umschulung teuer, andererseits bekommst du danach bessere Chancen.', es: 'Por un lado, la reconversión es cara; por otro, luego tendrás mejores oportunidades.' },
            { de: 'Der Vorteil ist, dass du endlich einen Beruf machst, der dir gefällt.', es: 'La ventaja es que por fin harás un trabajo que te gusta.' },
            { de: 'Ich finde es mutig, dass du dich selbstständig machst.', es: 'Me parece valiente que te hagas autónomo.' },
            { de: 'Trau dich! Du hast doch nichts zu verlieren.', es: '¡Atrévete! No tienes nada que perder.' },
            { de: 'Ich drücke dir die Daumen für das Vorstellungsgespräch.', es: 'Te deseo suerte en la entrevista de trabajo.' }
          ],
          tip: 'El imperativo de <i>du</i> pierde el pronombre: <i>Du traust dich</i> → <b>Trau dich!</b>; <i>Du gibst nicht auf</i> → <b>Gib nicht auf!</b>. Con <i>Sie</i> sí se mantiene: <i>Trauen Sie sich!</i>'
        }
      ],
      vocab: [
        { de: 'die Umschulung', pl: 'die Umschulungen', es: 'la reconversión profesional', ex: 'Nach der Kündigung hat er eine Umschulung zum Pfleger gemacht.', exes: 'Tras el despido hizo una reconversión para ser enfermero.' },
        { de: 'die Weiterbildung', pl: 'die Weiterbildungen', es: 'la formación continua', ex: 'Meine Firma bezahlt mir eine Weiterbildung in Marketing.', exes: 'Mi empresa me paga una formación continua en marketing.' },
        { de: 'der Quereinsteiger', pl: 'die Quereinsteiger', es: 'la persona que entra en una profesión desde otro campo', ex: 'Als Quereinsteigerin hat sie im Lehrerberuf noch einmal ganz neu angefangen.', exes: 'Como persona llegada desde otro sector, empezó de cero en la enseñanza.' },
        { de: 'die Karriere', pl: 'die Karrieren', es: 'la carrera profesional', ex: 'Für ihre Karriere hat sie viele Überstunden gemacht.', exes: 'Por su carrera hizo muchas horas extra.' },
        { de: 'der Neuanfang', pl: 'die Neuanfänge', es: 'el nuevo comienzo', ex: 'Der Umzug war für uns ein richtiger Neuanfang.', exes: 'La mudanza fue para nosotros un verdadero nuevo comienzo.' },
        { de: 'kündigen', es: 'dar de baja / renunciar (al trabajo)', note: 'kündigt – kündigte – hat gekündigt', ex: 'Ich habe meinen Job gekündigt, weil ich etwas Neues machen wollte.', exes: 'Renuncié a mi trabajo porque quería hacer algo nuevo.' },
        { de: 'die Kündigung', pl: 'die Kündigungen', es: 'el despido, la renuncia', ex: 'Die Kündigung muss schriftlich erfolgen.', exes: 'La renuncia debe hacerse por escrito.' },
        { de: 'sich bewerben', es: 'presentarse a una oferta, postular', note: 'bewirbt sich – bewarb sich – hat sich beworben', ex: 'Sie hat sich bei drei Firmen um eine Stelle beworben.', exes: 'Se presentó a un puesto en tres empresas.' },
        { de: 'die Bewerbung', pl: 'die Bewerbungen', es: 'la solicitud (de empleo)', ex: 'Ich schicke meine Bewerbung heute per E-Mail ab.', exes: 'Hoy envío mi solicitud por correo electrónico.' },
        { de: 'das Risiko', pl: 'die Risiken', es: 'el riesgo', ex: 'Ein neuer Beruf ist immer mit einem Risiko verbunden.', exes: 'Una nueva profesión siempre conlleva un riesgo.' },
        { de: 'der Mut', es: 'el valor, el ánimo', ex: 'Es braucht viel Mut, noch einmal ganz von vorn anzufangen.', exes: 'Hace falta mucho valor para empezar de nuevo desde cero.' },
        { de: 'sich trauen', es: 'atreverse', note: 'traut sich – traute sich – hat sich getraut', ex: 'Ich traue mich nicht, meinem Chef die Wahrheit zu sagen.', exes: 'No me atrevo a decirle la verdad a mi jefe.' },
        { de: 'wagen', es: 'arriesgarse a, atreverse a', note: 'wagt – wagte – hat gewagt', ex: 'Sie hat den Schritt in die Selbstständigkeit gewagt.', exes: 'Se atrevió a dar el paso de hacerse autónoma.' },
        { de: 'die Herausforderung', pl: 'die Herausforderungen', es: 'el reto', ex: 'Die neue Aufgabe ist eine große Herausforderung für mich.', exes: 'La nueva tarea es un gran reto para mí.' },
        { de: 'das Gehalt', pl: 'die Gehälter', es: 'el sueldo', ex: 'Das Gehalt ist am Anfang niedriger, aber die Arbeit macht mir Spaß.', exes: 'Al principio el sueldo es más bajo, pero el trabajo me gusta.' },
        { de: 'selbstständig', es: 'autónomo, independiente', ex: 'Seit zwei Jahren bin ich als Fotografin selbstständig.', exes: 'Desde hace dos años trabajo como fotógrafa autónoma.' },
        { de: 'die Stelle', pl: 'die Stellen', es: 'el puesto de trabajo', ex: 'Die Stelle ist ab dem ersten Mai frei.', exes: 'El puesto está libre a partir del uno de mayo.' },
        { de: 'der Lebenslauf', pl: 'die Lebensläufe', es: 'el currículum', ex: 'In meinem Lebenslauf fehlt noch ein Praktikum.', exes: 'A mi currículum todavía le falta unas prácticas.' },
        { de: 'der Traumberuf', pl: 'die Traumberufe', es: 'la profesión soñada', ex: 'Tischler war schon immer mein Traumberuf.', exes: 'Carpintero siempre fue mi profesión soñada.' },
        { de: 'zweifeln', es: 'dudar', note: 'zweifelt – zweifelte – hat gezweifelt', ex: 'Manchmal zweifle ich, ob der Schritt richtig war.', exes: 'A veces dudo de si el paso fue acertado.' }
      ],
      phrases: [
        { de: 'Obwohl es riskant ist, würde ich es versuchen.', es: 'Aunque es arriesgado, yo lo intentaría.', use: 'conceder' },
        { de: 'Das Risiko ist groß, trotzdem lohnt es sich.', es: 'El riesgo es grande, aun así merece la pena.', use: 'contrastar' },
        { de: 'Einerseits …, andererseits …', es: 'Por un lado …, por otro …', use: 'valorar' },
        { de: 'Ich sehe das kritisch, weil …', es: 'Lo veo con ojo crítico porque …', use: 'criticar' },
        { de: 'Ich finde es mutig, dass du …', es: 'Me parece valiente que tú …', use: 'valorar' },
        { de: 'Trau dich! Du schaffst das!', es: '¡Atrévete! ¡Tú puedes!', use: 'animar' },
        { de: 'Was hast du schon zu verlieren?', es: '¿Qué tienes que perder?', use: 'animar' },
        { de: 'Gib nicht auf!', es: '¡No te rindas!', use: 'animar' },
        { de: 'Ich drücke dir die Daumen.', es: 'Te deseo mucha suerte.', use: 'apoyar' }
      ],
      dialog: {
        title: 'Ein neuer Beruf',
        lines: [
          { s: 'A', de: 'Ich überlege, meinen Job zu kündigen und eine Umschulung zur Erzieherin zu machen.', es: 'Estoy pensando en dejar mi trabajo y hacer una reconversión para ser educadora infantil.' },
          { s: 'B', de: 'Wirklich? Du verdienst doch gut in der Bank.', es: '¿De verdad? Si ganas bien en el banco.' },
          { s: 'A', de: 'Ja, aber obwohl ich gut verdiene, bin ich nicht mehr glücklich.', es: 'Sí, pero aunque gano bien, ya no soy feliz.' },
          { s: 'B', de: 'Das verstehe ich. Hast du keine Angst vor dem Risiko?', es: 'Lo entiendo. ¿No tienes miedo al riesgo?' },
          { s: 'A', de: 'Doch, ich habe Angst. Trotzdem möchte ich es versuchen.', es: 'Sí, tengo miedo. Aun así quiero intentarlo.' },
          { s: 'B', de: 'Einerseits ist das Gehalt als Erzieherin niedriger, andererseits hast du dann einen Beruf, der dir Spaß macht.', es: 'Por un lado, el sueldo como educadora es más bajo; por otro, tendrás una profesión que te gusta.' },
          { s: 'A', de: 'Genau. Aber ich bin schon achtunddreißig. Manchmal denke ich, dass es zu spät ist.', es: 'Exacto. Pero ya tengo treinta y ocho. A veces pienso que es demasiado tarde.' },
          { s: 'B', de: 'Unsinn! In deiner Gruppe sind bestimmt auch Quereinsteiger, die älter sind als du. Trau dich, du schaffst das!', es: '¡Tonterías! En tu grupo seguro que hay también gente que cambia de profesión y es mayor que tú. ¡Atrévete, tú puedes!' },
          { s: 'A', de: 'Danke, das macht mir Mut. Ich schicke morgen meine Bewerbung ab.', es: 'Gracias, eso me da ánimo. Mañana envío mi solicitud.' },
          { s: 'B', de: 'Super! Ich drücke dir die Daumen.', es: '¡Genial! Te deseo mucha suerte.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Sie geht zur Arbeit, ___ sie krank ist.', o: ['weil', 'obwohl', 'trotzdem'], a: 1, why: 'Ir a trabajar estando enferma es contrario a lo esperado: obwohl.' },
        { t: 'mc', q: 'Der Job ist riskant, ___ möchte ich ihn machen.', o: ['obwohl', 'trotzdem', 'weil'], a: 1, why: 'Tras el verbo en pos. 2 (möchte ich) hace falta el adverbio trotzdem; obwohl y weil mandarían el verbo al final.' },
        { t: 'mc', q: 'Obwohl das Gehalt niedriger ist, ___ die Stelle.', o: ['ich nehme', 'nehme ich', 'nehmen ich'], a: 1, why: 'Tras una subordinada inicial, el verbo de la principal va primero: nehme ich.' },
        { t: 'mc', q: 'Ich habe die Prüfung bestanden, ___ ich nur wenig gelernt hatte.', o: ['obwohl', 'trotzdem', 'aber'], a: 0, why: 'El verbo (hatte) está al final: hace falta el conector subordinante obwohl.' },
        { t: 'mc', q: '___ dich! Das ist deine Chance.', o: ['Traust', 'Trau', 'Trauen'], a: 1, why: 'Imperativo de du con sich trauen: Trau dich! (sin pronombre du).' },
        { t: 'mc', q: 'Einerseits ist es riskant, ___ lernt man viel dabei.', o: ['sonst', 'andererseits', 'weil'], a: 1, why: 'einerseits va siempre acompañado de andererseits.' },
        { t: 'gap', q: 'Er hat die Stelle bekommen, ___ er keine Erfahrung hatte. (aunque)', a: ['obwohl'], why: 'Contra lo esperado y verbo al final: obwohl.' },
        { t: 'gap', q: 'Ich bin sehr müde, ___ gehe ich nicht ins Bett. Ich muss noch lernen. (aun así)', a: ['trotzdem'], why: 'Verbo en segunda posición tras el conector y sentido de aun así: trotzdem.' },
        { t: 'gap', q: 'Obwohl sie Angst ___, hat sie ihren Job gekündigt. (haben, Präteritum)', a: ['hatte'], why: 'Tras obwohl el verbo va al final; Präteritum de haben con sie: hatte.' },
        { t: 'gap', q: 'Morgen ist dein Vorstellungsgespräch. Ich ___ dir die Daumen. (drücken)', a: ['drücke'], why: 'Expresión fija Ich drücke dir die Daumen; verbo conjugado con ich.' },
        { t: 'order', es: 'Aunque el riesgo es grande, me atrevo a un nuevo comienzo.', de: 'Obwohl das Risiko groß ist, wage ich den Neuanfang.', why: 'obwohl manda ist al final; en la principal el verbo va primero: wage ich.' },
        { t: 'order', es: 'Renunció aunque todavía no tenía otro puesto.', de: 'Er hat gekündigt, obwohl er noch keine neue Stelle hatte.', why: 'En la subordinada con obwohl el verbo conjugado (hatte) va al final.' },
        { t: 'order', es: 'El camino fue duro, aun así no se arrepiente de su decisión.', de: 'Der Weg war schwer, trotzdem bereut er seine Entscheidung nicht.', why: 'trotzdem ocupa la posición 1, por eso el verbo (bereut) va en segunda posición.' },
        { t: 'tr', es: 'Aunque tengo miedo, me presento al puesto.', de: ['Obwohl ich Angst habe, bewerbe ich mich um die Stelle.', 'Obwohl ich Angst habe, bewerbe ich mich auf die Stelle.'], why: '' },
        { t: 'tr', es: 'Aunque el sueldo es más bajo, está contento con su nuevo trabajo.', de: ['Obwohl das Gehalt niedriger ist, ist er mit seinem neuen Job zufrieden.', 'Obwohl das Gehalt niedriger ist, ist er zufrieden mit seinem neuen Job.'], why: '' },
        { t: 'fix', q: 'Obwohl ich müde bin, ich gehe zur Arbeit.', a: ['Obwohl ich müde bin, gehe ich zur Arbeit.'], why: 'Tras la subordinada inicial el verbo de la principal va primero: gehe ich.' },
        { t: 'fix', q: 'Das Gehalt ist niedriger, trotzdem ich nehme die Stelle.', a: ['Das Gehalt ist niedriger, trotzdem nehme ich die Stelle.'], why: 'trotzdem ocupa la posición 1: el verbo conjugado va en segunda (nehme ich).' },
        { t: 'match', pairs: [['der Mut', 'el valor'], ['wagen', 'atreverse a'], ['kündigen', 'renunciar al trabajo'], ['der Lebenslauf', 'el currículum'], ['das Risiko', 'el riesgo'], ['die Umschulung', 'la reconversión profesional']] }
      ],
      speak: [
        { prompt: 'Cuenta en 5-6 frases algo que hiciste (o quieres hacer) aunque era difícil o arriesgado. Usa obwohl y trotzdem.', model: 'Ich habe vor zwei Jahren eine neue Sprache gelernt, obwohl ich wenig Zeit hatte. Es war anstrengend, trotzdem habe ich jeden Tag eine halbe Stunde geübt. Obwohl ich anfangs viele Fehler gemacht habe, hat es mir großen Spaß gemacht. Heute kann ich schon einfache Gespräche führen. Ich bin stolz, dass ich nicht aufgegeben habe.' },
        { prompt: 'Un amigo duda si cambiar de profesión. Valora ventajas y desventajas (einerseits … andererseits) y dale tu opinión en 5 frases.', model: 'Einerseits ist ein Berufswechsel riskant, andererseits könntest du endlich etwas machen, das dir Spaß macht. Der Nachteil ist, dass das Gehalt am Anfang niedriger wäre. Meiner Meinung nach lohnt es sich trotzdem, weil du jetzt noch jung genug für einen Neuanfang bist. Ich finde es mutig, dass du darüber nachdenkst.' },
        { prompt: 'Para usar en voz alta: anima a una persona que tiene miedo de presentarse a una entrevista de trabajo (4-5 frases).', model: 'Ich weiß, dass du Angst hast, aber du bist sehr gut vorbereitet. Trau dich! Was hast du schon zu verlieren? Obwohl du keine lange Erfahrung hast, hast du viele gute Ideen. Du schaffst das, und ich drücke dir die Daumen!' }
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'b1m3',
  level: 'B1',
  num: 3,
  title: 'Viajes, sociedad y estudios',
  emoji: '🌍',
  lessons: [
    {
      id: 'b1-07',
      title: 'Allein unterwegs',
      es: 'Viajar solo',
      goals: ['Declinar el adjetivo sin artículo (frische Luft, mit netten Leuten)', 'Formar diminutivos con -chen (das Mädchen, das Brötchen)', 'Contar experiencias de viaje con orden y detalles', 'Hablar de alojamiento, paisajes y encuentros durante un viaje'],
      grammar: [
        {
          h: 'Adjetivo sin artículo (Nullartikel)',
          p: 'Cuando delante del sustantivo <b>no hay artículo</b> (con sustantivos incontables, en plural general o con nombres de materias), el adjetivo tiene que mostrar el caso él mismo. Por eso recibe las terminaciones del artículo definido: <b>-er, -e, -es</b> en Nominativ, <b>-en</b> en Akkusativ masculino, <b>-em / -er</b> en Dativ… La única diferencia llamativa es el Genitiv masculino y neutro, que lleva <b>-en</b> (y el sustantivo -(e)s). El Genitiv sin artículo es muy raro (<i>der Preis guten Weins</i>); lo que más usarás son Nominativ, Akkusativ y Dativ.',
          table: { head: ['Caso', 'm (Kaffee)', 'f (Luft)', 'n (Wasser)', 'pl (Brötchen)'], rows: [['Nominativ', 'frisch<b>er</b> Kaffee', 'frisch<b>e</b> Luft', 'frisch<b>es</b> Wasser', 'frisch<b>e</b> Brötchen'], ['Akkusativ', 'frisch<b>en</b> Kaffee', 'frisch<b>e</b> Luft', 'frisch<b>es</b> Wasser', 'frisch<b>e</b> Brötchen'], ['Dativ', 'frisch<b>em</b> Kaffee', 'frisch<b>er</b> Luft', 'frisch<b>em</b> Wasser', 'frisch<b>en</b> Brötchen'], ['Genitiv', 'frisch<b>en</b> Kaffees', 'frisch<b>er</b> Luft', 'frisch<b>en</b> Wassers', 'frisch<b>er</b> Brötchen']] },
          ex: [
            { de: 'Zum Frühstück gibt es frischen Kaffee und frisches Brot.', es: 'Para desayunar hay café fresco y pan fresco.' },
            { de: 'Frische Luft und ruhige Landschaften tun mir gut.', es: 'El aire fresco y los paisajes tranquilos me sientan bien.' },
            { de: 'Bei schönem Wetter sitzen wir am liebsten draußen.', es: 'Con buen tiempo nos gusta más sentarnos fuera.' },
            { de: 'Ich reise gern mit netten Leuten.', es: 'Me gusta viajar con gente simpática.' },
            { de: 'Mit kaltem Wasser wäscht er sich das Gesicht.', es: 'Se lava la cara con agua fría.' }
          ],
          tip: 'Truco: sin artículo, el adjetivo &quot;se pone el uniforme&quot; del artículo definido (<i>der → -er, das → -es, dem → -em, der → -er</i>). Cuidado con el Dativ: <i>mit kaltem Wasser</i>, no &quot;mit kalten Wasser&quot;.'
        },
        {
          h: 'Las tres declinaciones lado a lado',
          p: 'Ahora tienes tres posibilidades. Tras <b>der/die/das</b> el adjetivo casi siempre lleva <b>-e / -en</b>. Tras <b>ein/kein/mein</b> el adjetivo lleva <b>-er / -es</b> solo donde el artículo se queda sin terminación (Nominativ m, Nominativ y Akkusativ n). <b>Sin artículo</b>, el adjetivo lleva la terminación completa del artículo. Pregúntate siempre: ¿qué palabra muestra aquí el caso? Si no hay artículo, será el adjetivo.',
          table: { head: ['Caso', 'der / die / das', 'ein / eine', 'sin artículo'], rows: [['Nom. m', 'der frisch<b>e</b> Kaffee', 'ein frisch<b>er</b> Kaffee', 'frisch<b>er</b> Kaffee'], ['Nom. n', 'das frisch<b>e</b> Wasser', 'ein frisch<b>es</b> Wasser', 'frisch<b>es</b> Wasser'], ['Akk. m', 'den frisch<b>en</b> Kaffee', 'einen frisch<b>en</b> Kaffee', 'frisch<b>en</b> Kaffee'], ['Akk. f', 'die frisch<b>e</b> Luft', 'eine frisch<b>e</b> Luft', 'frisch<b>e</b> Luft'], ['Dat. f', 'der frisch<b>en</b> Luft', 'einer frisch<b>en</b> Luft', 'frisch<b>er</b> Luft'], ['Dat. n', 'dem frisch<b>en</b> Wasser', 'einem frisch<b>en</b> Wasser', 'frisch<b>em</b> Wasser'], ['Dat. pl', 'den frisch<b>en</b> Brötchen', 'keinen frisch<b>en</b> Brötchen', 'frisch<b>en</b> Brötchen']] },
          ex: [
            { de: 'Ich trinke gern den frischen Kaffee hier und nie kalten Kaffee.', es: 'Me gusta el café fresco de aquí y nunca bebo café frío.' },
            { de: 'Er hat einen guten Reiseführer und gute Karten dabei.', es: 'Lleva una buena guía de viaje y buenos mapas.' },
            { de: 'Sie wohnt in einem kleinen Hotel mit freundlichem Personal.', es: 'Se aloja en un hotel pequeño con personal amable.' },
            { de: 'Wir haben nette Leute getroffen, und die netten Leute haben uns geholfen.', es: 'Conocimos a gente simpática, y esa gente simpática nos ayudó.' },
            { de: 'Ich esse gern das frische Brot, aber nicht altes Brot.', es: 'Me gusta el pan fresco, pero no el pan duro.' }
          ],
          tip: 'Atajo: Dativ plural = <b>-en</b> en las tres declinaciones (<i>mit den netten Leuten / mit netten Leuten</i>). Es el caso más seguro para empezar.'
        },
        {
          h: 'Diminutivo con -chen',
          p: 'La terminación <b>-chen</b> hace un sustantivo más pequeño o más cariñoso. Todos los sustantivos con -chen son <b>neutros</b> (<i>das</i>), aunque la persona sea femenina: <i>das Mädchen</i>. El plural no cambia (<i>die Brötchen</i>). Las vocales <b>a, o, u, au</b> suelen recibir Umlaut y se pierde la -e final (<i>die Katze → das Kätzchen</i>). Algunas palabras ya no se sienten como diminutivos: <i>das Brötchen</i> es simplemente &quot;el panecillo&quot; y <i>das Märchen</i> es &quot;el cuento&quot;. En el sur se usa también <b>-lein</b> (<i>das Büchlein</i>).',
          table: { head: ['Base', 'Diminutivo', 'Significado'], rows: [['das Brot', 'das Br<b>ö</b>tchen', 'el panecillo'], ['das Haus', 'das H<b>ä</b>uschen', 'la casita'], ['der Hund', 'das H<b>ü</b>ndchen', 'el perrito'], ['die Katze', 'das K<b>ä</b>tzchen', 'el gatito'], ['die Tasse', 'das T<b>ä</b>sschen', 'la tacita'], ['der Kuss', 'das K<b>ü</b>sschen', 'el besito']] },
          ex: [
            { de: 'Das Mädchen kauft ein Brötchen.', es: 'La chica compra un panecillo.' },
            { de: 'Wir haben ein Häuschen am Meer gemietet.', es: 'Hemos alquilado una casita junto al mar.' },
            { de: 'Das Kätzchen schläft auf dem Sofa.', es: 'El gatito duerme en el sofá.' },
            { de: 'Möchtest du ein Tässchen Tee?', es: '¿Quieres una tacita de té?' },
            { de: 'Zum Frühstück esse ich zwei Brötchen mit Käse.', es: 'De desayuno como dos panecillos con queso.' }
          ],
          tip: '&quot;La chica&quot; es femenino en español, pero <b>das Mädchen</b> es neutro: <i>Das Mädchen sagt, dass es müde ist</i> (pronombre <i>es</i>, aunque en la conversación se oye <i>sie</i>).'
        },
        {
          h: 'Contar experiencias de viaje',
          p: 'Para contar un viaje, oralmente usa el <b>Perfekt</b> (<i>Ich bin gefahren, ich habe gesehen</i>) y, para <span class="de">sein, haben</span> y los modales, el <b>Präteritum</b> (<i>war, hatte, konnte</i>). Ordena la historia con conectores: <span class="de">zuerst, dann, danach, später, am Ende</span>; añade tu valoración con <span class="de">zum Glück, leider, überraschend</span>; y cierra con una conclusión: <span class="de">Das Beste war …, Besonders schön fand ich …</span>',
          ex: [
            { de: 'Zuerst bin ich mit dem Zug nach Lissabon gefahren, danach habe ich zwei Wochen lang Portugal erkundet.', es: 'Primero fui en tren a Lisboa y después pasé dos semanas explorando Portugal.' },
            { de: 'Zum Glück habe ich unterwegs nette Leute kennengelernt.', es: 'Por suerte conocí a gente simpática por el camino.' },
            { de: 'Am Anfang war ich allein, aber am Ende hatte ich viele neue Freunde.', es: 'Al principio estaba solo, pero al final tenía muchos amigos nuevos.' },
            { de: 'Leider habe ich mich in der Altstadt verlaufen.', es: 'Por desgracia me perdí en el casco antiguo.' },
            { de: 'Das Schönste war die Gastfreundschaft der Menschen.', es: 'Lo más bonito fue la hospitalidad de la gente.' }
          ],
          tip: 'En español cuentas todo con el indefinido (&quot;fui, vi&quot;). En alemán hablado, no uses el Präteritum para verbos normales: <i>ich bin gefahren</i>, no &quot;ich fuhr&quot;. Para escribir una crónica, sí se usa.'
        }
      ],
      vocab: [
        { de: 'der Rucksack', pl: 'die Rucksäcke', es: 'la mochila', ex: 'Mit einem leichten Rucksack reist man bequemer.', exes: 'Con una mochila ligera se viaja con más comodidad.' },
        { de: 'die Unterkunft', pl: 'die Unterkünfte', es: 'el alojamiento', ex: 'Die Unterkunft liegt direkt am Strand.', exes: 'El alojamiento está justo en la playa.' },
        { de: 'die Sehenswürdigkeit', pl: 'die Sehenswürdigkeiten', es: 'el lugar de interés', ex: 'In Rom gibt es unzählige Sehenswürdigkeiten.', exes: 'En Roma hay innumerables lugares de interés.' },
        { de: 'der Reiseführer', pl: 'die Reiseführer', es: 'la guía de viaje', ex: 'Im Reiseführer steht ein guter Tipp für ein kleines Restaurant.', exes: 'En la guía hay un buen consejo para un restaurante pequeño.' },
        { de: 'die Grenze', pl: 'die Grenzen', es: 'la frontera', ex: 'An der Grenze mussten wir den Pass zeigen.', exes: 'En la frontera tuvimos que enseñar el pasaporte.' },
        { de: 'das Abenteuer', pl: 'die Abenteuer', es: 'la aventura', ex: 'Die Reise war für mich ein echtes Abenteuer.', exes: 'El viaje fue para mí una verdadera aventura.' },
        { de: 'die Erfahrung', pl: 'die Erfahrungen', es: 'la experiencia', ex: 'Allein zu reisen war eine wichtige Erfahrung.', exes: 'Viajar solo fue una experiencia importante.' },
        { de: 'die Landschaft', pl: 'die Landschaften', es: 'el paisaje', ex: 'Die Landschaft in Norwegen ist atemberaubend.', exes: 'El paisaje de Noruega es impresionante.' },
        { de: 'das Gepäck', es: 'el equipaje', ex: 'Mein Gepäck ist im Zug geblieben.', exes: 'Mi equipaje se quedó en el tren.' },
        { de: 'die Rundreise', pl: 'die Rundreisen', es: 'el viaje en circuito', ex: 'Wir haben eine Rundreise durch Süditalien gemacht.', exes: 'Hicimos un viaje en circuito por el sur de Italia.' },
        { de: 'die Gastfreundschaft', es: 'la hospitalidad', ex: 'Die Gastfreundschaft der Menschen hat mich beeindruckt.', exes: 'La hospitalidad de la gente me impresionó.' },
        { de: 'die Erinnerung', pl: 'die Erinnerungen', es: 'el recuerdo', ex: 'Ich habe viele schöne Erinnerungen an die Reise.', exes: 'Tengo muchos recuerdos bonitos del viaje.' },
        { de: 'verreisen', es: 'irse de viaje', note: 'verreist – verreiste – ist verreist', ex: 'Im Sommer verreisen wir immer ans Meer.', exes: 'En verano siempre nos vamos de viaje al mar.' },
        { de: 'übernachten', es: 'pasar la noche', note: 'übernachtet – übernachtete – hat übernachtet', ex: 'Wir haben in einem kleinen Hotel übernachtet.', exes: 'Pasamos la noche en un hotel pequeño.' },
        { de: 'sich verlaufen', es: 'perderse (a pie)', note: 'verläuft sich – verlief sich – hat sich verlaufen', ex: 'In der Altstadt habe ich mich zweimal verlaufen.', exes: 'En el casco antiguo me perdí dos veces.' },
        { de: 'begegnen', es: 'encontrarse con (+ Dativ)', note: 'begegnet – begegnete – ist begegnet', ex: 'Auf der Reise bin ich vielen interessanten Menschen begegnet.', exes: 'Durante el viaje me encontré con mucha gente interesante.' },
        { de: 'erkunden', es: 'explorar', ex: 'Ich erkunde neue Städte am liebsten zu Fuß.', exes: 'Lo que más me gusta es explorar ciudades nuevas a pie.' },
        { de: 'unterwegs', es: 'de camino / de viaje', ex: 'Ich war drei Wochen lang unterwegs.', exes: 'Estuve tres semanas de viaje.' },
        { de: 'allein', es: 'solo', ex: 'Zum ersten Mal bin ich allein verreist.', exes: 'Por primera vez me fui de viaje solo.' },
        { de: 'einheimisch', es: 'local / del lugar', ex: 'Wir haben in einem einheimischen Restaurant gegessen.', exes: 'Comimos en un restaurante local.' }
      ],
      phrases: [
        { de: 'Ich bin drei Wochen lang allein gereist.', es: 'Viajé solo durante tres semanas.', use: 'contar' },
        { de: 'Am Anfang war es schwer, aber dann hat es mir richtig gefallen.', es: 'Al principio fue difícil, pero luego me gustó mucho.', use: 'contar' },
        { de: 'Zum Glück habe ich unterwegs nette Leute getroffen.', es: 'Por suerte conocí a gente simpática por el camino.', use: 'valorar' },
        { de: 'Das Beste war die Gastfreundschaft der Menschen.', es: 'Lo mejor fue la hospitalidad de la gente.', use: 'destacar' },
        { de: 'Besonders beeindruckt hat mich die Landschaft.', es: 'Me impresionó especialmente el paisaje.', use: 'destacar' },
        { de: 'Leider habe ich mich ein paar Mal verlaufen.', es: 'Por desgracia me perdí unas cuantas veces.', use: 'contar problemas' },
        { de: 'Hast du einen Tipp für eine günstige Unterkunft?', es: '¿Tienes algún consejo para un alojamiento barato?', use: 'pedir consejo' },
        { de: 'Ich würde sofort wieder allein verreisen.', es: 'Volvería a viajar solo enseguida.', use: 'concluir' }
      ],
      dialog: {
        title: 'Drei Wochen in Portugal',
        lines: [
          { s: 'A', de: 'Du warst drei Wochen allein in Portugal? Hattest du keine Angst?', es: '¿Estuviste tres semanas solo en Portugal? ¿No tuviste miedo?' },
          { s: 'B', de: 'Am Anfang schon ein bisschen. Aber ich habe schnell nette Leute kennengelernt.', es: 'Al principio un poco. Pero enseguida conocí a gente simpática.' },
          { s: 'A', de: 'Wo hast du denn übernachtet?', es: '¿Y dónde dormiste?' },
          { s: 'B', de: 'Meistens in kleinen Hostels. Dort gab es immer frischen Kaffee und freundliche Gastgeber.', es: 'Casi siempre en hostales pequeños. Allí siempre había café fresco y anfitriones amables.' },
          { s: 'A', de: 'Und was war das Beste an der Reise?', es: '¿Y qué fue lo mejor del viaje?' },
          { s: 'B', de: 'Die Gastfreundschaft! Eine alte Frau hat mich in ihr Häuschen eingeladen und mir frisches Brot und warme Suppe gegeben.', es: '¡La hospitalidad! Una señora mayor me invitó a su casita y me dio pan fresco y sopa caliente.' },
          { s: 'A', de: 'Hast du dich nie verlaufen?', es: '¿Nunca te perdiste?' },
          { s: 'B', de: 'Doch, einmal. Zum Glück hat mir ein Mädchen den Weg gezeigt.', es: 'Sí, una vez. Por suerte una chica me indicó el camino.' },
          { s: 'A', de: 'Das klingt toll. Ich möchte auch einmal allein verreisen.', es: 'Suena genial. A mí también me gustaría viajar solo alguna vez.' },
          { s: 'B', de: 'Mach das! Mit einem guten Reiseführer und offenen Augen schaffst du das leicht.', es: '¡Hazlo! Con una buena guía y los ojos abiertos lo consigues fácilmente.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich trinke gern ___ Kaffee.', o: ['frischer', 'frischen', 'frisches'], a: 1, why: 'Kaffee es masculino y va en Akkusativ sin artículo: el adjetivo lleva -en.' },
        { t: 'mc', q: 'Bei ___ Wetter wandere ich gern.', o: ['schönem', 'schönen', 'schönes'], a: 0, why: 'bei + Dativ; Wetter es neutro y sin artículo: -em.' },
        { t: 'mc', q: '___ Luft tut mir nach der Fahrt gut.', o: ['Frisches', 'Frischer', 'Frische'], a: 2, why: 'Luft es femenino; en Nominativ sin artículo: -e.' },
        { t: 'mc', q: 'Auf der Reise habe ich ___ Menschen kennengelernt.', o: ['nette', 'netten', 'netter'], a: 0, why: 'Plural en Akkusativ sin artículo: -e.' },
        { t: 'mc', q: 'Sie reist gern mit ___ Leuten.', o: ['nette', 'netter', 'netten'], a: 2, why: 'mit + Dativ plural: el adjetivo lleva siempre -en.' },
        { t: 'mc', q: '___ Mädchen sitzt im Zug und liest.', o: ['Der', 'Die', 'Das'], a: 2, why: 'Todos los sustantivos con -chen son neutros: das Mädchen.' },
        { t: 'gap', q: 'Im Hostel gibt es jeden Morgen ___ Kaffee. (frisch)', a: ['frischen'], why: 'Akkusativ masculino sin artículo: frischen.' },
        { t: 'gap', q: 'Wir hatten die ganze Woche ___ Wetter. (herrlich)', a: ['herrliches'], why: 'Wetter es neutro, Akkusativ sin artículo: -es.' },
        { t: 'gap', q: 'Mit ___ Menschen habe ich viel gelacht. (freundlich)', a: ['freundlichen'], why: 'mit + Dativ plural: -en.' },
        { t: 'gap', q: 'Nach der Fahrt brauche ich ___ Luft. (frisch)', a: ['frische'], why: 'Luft es femenino, Akkusativ sin artículo: -e.' },
        { t: 'order', es: 'Durante el viaje conocí a gente simpática.', de: 'Unterwegs habe ich nette Leute kennengelernt.', why: 'Perfekt: habe en 2.ª posición y el participio al final; nette Leute = Akkusativ plural sin artículo.' },
        { t: 'order', es: 'Con buen tiempo hacemos largos paseos junto al mar.', de: 'Bei schönem Wetter machen wir lange Spaziergänge am Meer.', why: 'bei schönem Wetter (Dativ neutro, -em) ocupa la 1.ª posición; el verbo conjugado va en la 2.ª.' },
        { t: 'order', es: 'La chica compra dos panecillos frescos.', de: 'Das Mädchen kauft zwei frische Brötchen.', why: 'das Mädchen es neutro; frische es plural en Akkusativ tras zwei (sin artículo): -e.' },
        { t: 'tr', es: 'Bebo con gusto agua fría.', de: ['Ich trinke gern kaltes Wasser.', 'Ich trinke gerne kaltes Wasser.'], why: '' },
        { t: 'tr', es: 'Hemos conocido a gente muy amable.', de: ['Wir haben sehr nette Leute kennengelernt.', 'Wir haben sehr freundliche Menschen kennengelernt.', 'Wir haben sehr nette Menschen kennengelernt.'], why: '' },
        { t: 'fix', q: 'Ich trinke gern kalte Wasser.', a: ['Ich trinke gern kaltes Wasser.', 'Ich trinke gerne kaltes Wasser.'], why: 'Wasser es neutro y va en Akkusativ sin artículo: kaltes.' },
        { t: 'fix', q: 'Ich reise gern mit nette Leuten.', a: ['Ich reise gern mit netten Leuten.', 'Ich reise gerne mit netten Leuten.'], why: 'mit + Dativ plural: el adjetivo lleva -en.' },
        { t: 'match', pairs: [['der Rucksack', 'la mochila'], ['die Grenze', 'la frontera'], ['die Landschaft', 'el paisaje'], ['das Gepäck', 'el equipaje'], ['sich verlaufen', 'perderse (a pie)'], ['einheimisch', 'local, del lugar']] }
      ],
      speak: [
        { prompt: 'Cuenta un viaje (real o imaginario) que hiciste solo o con amigos (5-6 frases). Usa Perfekt, conectores (zuerst, danach, am Ende) y al menos dos adjetivos sin artículo.', model: 'Letzten Sommer bin ich zwei Wochen allein durch Italien gereist. Zuerst habe ich in Rom übernachtet, danach bin ich mit dem Zug nach Florenz gefahren. Unterwegs habe ich nette Leute kennengelernt und viel frisches Obst gegessen. Leider habe ich mich in Florenz verlaufen. Das Beste war die Landschaft in der Toskana. Ich würde sofort wieder verreisen.' },
        { prompt: 'Describe qué pides o buscas en un buen alojamiento (4-5 frases). Usa adjetivos sin artículo: Wasser, Kaffee, Luft, Leute…', model: 'Ich suche eine Unterkunft mit sauberem Wasser und frischer Luft. Am Morgen möchte ich frischen Kaffee und warme Brötchen. Ein kleines Häuschen am Meer wäre ideal. Ich mag auch freundliche Gastgeber und ruhige Nachbarn.' },
        { prompt: 'Para usar en voz alta: recomienda a un amigo viajar solo y dile por qué (4 frases).', model: 'Du solltest einmal allein verreisen! Man lernt unterwegs nette Leute kennen und trifft viele interessante Menschen. Es ist eine wichtige Erfahrung und manchmal auch ein Abenteuer. Ich habe es gemacht und würde es sofort wieder tun.' }
      ]
    },
    {
      id: 'b1-08',
      title: 'Ein Jahr für die Gesellschaft?',
      es: 'Año social obligatorio: política y sociedad',
      goals: ['Usar el Infinitiv mit zu con verbos, adjetivos y sustantivos', 'Saber cuándo no se usa zu (modales, gehen, bleiben, lassen) y distinguir um … zu', 'Dar tu opinión, estar de acuerdo, contradecir y pedir la palabra', 'Hablar de política y sociedad con vocabulario básico'],
      grammar: [
        {
          h: 'Infinitiv mit zu: cuándo se usa',
          p: 'El <b>Infinitiv mit zu</b> aparece en una oración subordinada <b>sin sujeto propio</b>: el sujeto es el mismo que el de la oración principal. Se coloca al final, con <b>zu justo antes del verbo</b>. Se usa después de: (1) <b>verbos</b> como <span class="de">anfangen, aufhören, versuchen, vergessen, hoffen, vorhaben</span>; (2) <b>expresiones con sein / haben</b>: <span class="de">Es ist wichtig / schwer / schön, …</span>, <span class="de">Ich habe Lust / Zeit / keine Lust, …</span>; (3) <b>sustantivos</b> como <i>die Absicht, die Idee</i>. Es habitual separar la parte con zu con <b>coma</b>, y la coma es muy recomendable cuando hay más palabras.',
          ex: [
            { de: 'Ich habe keine Lust, früh aufzustehen.', es: 'No tengo ganas de madrugar.' },
            { de: 'Es ist wichtig, Verantwortung zu übernehmen.', es: 'Es importante asumir responsabilidad.' },
            { de: 'Sie hofft, bald eine Stelle zu finden.', es: 'Ella espera encontrar pronto un trabajo.' },
            { de: 'Es macht Spaß, anderen Menschen zu helfen.', es: 'Es divertido ayudar a otras personas.' },
            { de: 'Hast du vergessen, den Termin abzusagen?', es: '¿Te has olvidado de cancelar la cita?' }
          ],
          tip: 'En español usamos el infinitivo sin más (&quot;tengo ganas de madrugar&quot;); en alemán necesitas <b>zu</b>. Con sujeto distinto, no puedes usar zu: <i>Ich möchte, dass du kommst</i> (dass-Satz).'
        },
        {
          h: 'Verbos separables e inseparables con zu',
          p: 'Con <b>verbos separables</b>, <i>zu</i> se coloca <b>entre el prefijo y el verbo</b> y todo se escribe junto: <i>aufstehen → aufzustehen</i>. Con <b>verbos inseparables</b> (be-, ge-, er-, ver-, zer-, ent-, emp-) y con verbos sin prefijo, <i>zu</i> va delante y por separado: <i>besuchen → zu besuchen</i>. Si hay dos verbos (infinitivo + otro), zu va delante del último: <i>nicht mehr arbeiten zu müssen</i>.',
          table: { head: ['Infinitivo', 'Con zu', 'Tipo'], rows: [['auf|stehen', 'aufzustehen', 'separable'], ['an|rufen', 'anzurufen', 'separable'], ['mit|bringen', 'mitzubringen', 'separable'], ['ein|kaufen', 'einzukaufen', 'separable'], ['besuchen', 'zu besuchen', 'inseparable'], ['verstehen', 'zu verstehen', 'inseparable'], ['helfen', 'zu helfen', 'sin prefijo'], ['sein', 'zu sein', 'sin prefijo']] },
          ex: [
            { de: 'Ich habe vergessen, dich anzurufen.', es: 'Se me olvidó llamarte.' },
            { de: 'Es ist schwer, jeden Tag so früh aufzustehen.', es: 'Es difícil levantarse tan temprano todos los días.' },
            { de: 'Er hat vor, seine Großeltern zu besuchen.', es: 'Tiene pensado visitar a sus abuelos.' },
            { de: 'Es ist nicht leicht, immer pünktlich zu sein.', es: 'No es fácil ser siempre puntual.' },
            { de: 'Vergiss nicht, ein paar Getränke mitzubringen!', es: '¡No te olvides de traer algunas bebidas!' }
          ],
          tip: 'Pregunta clave: ¿el verbo se separa en presente? Si <i>ruft … an</i> se separa, entonces <i>an<b>zu</b>rufen</i>. Si no se separa (<i>besucht</i>), entonces <i>zu besuchen</i>.'
        },
        {
          h: 'Cuándo NO se usa zu, y um … zu',
          p: '<b>Sin zu</b> (infinitivo puro) detrás de: los <b>verbos modales</b> (<i>müssen, können, wollen, dürfen, sollen, möchten</i>), <b>gehen</b> + actividad (<i>einkaufen gehen</i>), <b>bleiben</b> (<i>sitzen bleiben</i>), <b>lassen</b> (<i>machen lassen</i>), y verbos de percepción como <i>hören, sehen</i>. Por otro lado, <b>um … zu</b> expresa la <b>finalidad</b> (&quot;para&quot;): responde a <i>Wozu? / Wofür?</i>, siempre con el mismo sujeto y con coma. Para sujetos distintos se usa <b>damit</b> + subordinada con verbo conjugado.',
          table: { head: ['Estructura', 'Ejemplo'], rows: [['Modal + infinitivo', 'Ich muss früh <b>aufstehen</b>.'], ['gehen + infinitivo', 'Wir gehen am Samstag <b>einkaufen</b>.'], ['bleiben + infinitivo', 'Er bleibt gern lange <b>sitzen</b>.'], ['lassen + infinitivo', 'Ich lasse mir die Haare <b>schneiden</b>.'], ['um … zu (mismo sujeto)', 'Ich lerne, <b>um</b> in Berlin <b>zu</b> studieren.'], ['damit (otro sujeto)', 'Ich helfe dir, <b>damit</b> du früher fertig bist.']] },
          ex: [
            { de: 'Ich muss morgen früh aufstehen.', es: 'Mañana tengo que madrugar.' },
            { de: 'Am Samstag gehen wir im Park spazieren.', es: 'El sábado vamos a pasear por el parque.' },
            { de: 'Er lernt Deutsch, um in Wien zu studieren.', es: 'Aprende alemán para estudiar en Viena.' },
            { de: 'Sie spart Geld, um ein Jahr ins Ausland zu gehen.', es: 'Ahorra dinero para pasar un año en el extranjero.' },
            { de: 'Wir bleiben noch kurz sitzen, bis der Regen aufhört.', es: 'Nos quedamos sentados un rato más hasta que pare la lluvia.' }
          ],
          tip: 'Error típico: &quot;Ich muss früh zu aufstehen&quot;. Con modales jamás hay <i>zu</i>. Y recuerda: <i>um … zu</i> = &quot;para + infinitivo&quot;, pero si cambia el sujeto debes decir <i>damit</i>.'
        },
        {
          h: 'Opinar, estar de acuerdo, contradecir, pedir la palabra',
          p: 'En un debate, estas fórmulas te ayudan a participar con educación. Para <b>opinar</b>: <span class="de">Ich finde, dass …</span>, <span class="de">Meiner Meinung nach …</span>. Para <b>aprobar</b>: <span class="de">Da stimme ich dir zu.</span> Para <b>contradecir</b>: <span class="de">Das sehe ich anders.</span>, <span class="de">Da bin ich nicht deiner Meinung.</span> Para <b>pedir la palabra</b>: <span class="de">Darf ich etwas dazu sagen?</span> Para <b>no dejarte interrumpir</b>: <span class="de">Moment, ich bin noch nicht fertig.</span>',
          ex: [
            { de: 'Ich finde, dass ein soziales Jahr für junge Menschen sinnvoll ist.', es: 'Opino que un año social es útil para los jóvenes.' },
            { de: 'Meiner Meinung nach sollte niemand gezwungen werden, es zu machen.', es: 'En mi opinión nadie debería ser obligado a hacerlo.' },
            { de: 'Da stimme ich dir völlig zu.', es: 'En eso estoy totalmente de acuerdo contigo.' },
            { de: 'Das sehe ich anders: Man lernt viel dabei.', es: 'Yo lo veo diferente: se aprende mucho.' },
            { de: 'Moment, ich bin noch nicht fertig. Darf ich bitte ausreden?', es: 'Un momento, no he terminado. ¿Puedo terminar de hablar, por favor?' }
          ],
          tip: 'Para sonar más natural, mezcla: primero acuerdo parcial, luego &quot;aber&quot;: <i>Das stimmt, aber ich denke, dass …</i>'
        }
      ],
      vocab: [
        { de: 'die Gesellschaft', pl: 'die Gesellschaften', es: 'la sociedad', ex: 'Jeder kann etwas für die Gesellschaft tun.', exes: 'Todos pueden hacer algo por la sociedad.' },
        { de: 'der Freiwilligendienst', pl: 'die Freiwilligendienste', es: 'el servicio voluntario', ex: 'Nach der Schule macht sie einen Freiwilligendienst in einem Krankenhaus.', exes: 'Después del colegio hace un servicio voluntario en un hospital.' },
        { de: 'die Pflicht', pl: 'die Pflichten', es: 'el deber / la obligación', ex: 'Wählen zu gehen ist für viele eine Bürgerpflicht.', exes: 'Ir a votar es para muchos un deber ciudadano.' },
        { de: 'die Regierung', pl: 'die Regierungen', es: 'el gobierno', ex: 'Die Regierung plant ein neues Gesetz.', exes: 'El gobierno planea una nueva ley.' },
        { de: 'das Gesetz', pl: 'die Gesetze', es: 'la ley', ex: 'Das Gesetz gilt ab dem nächsten Jahr.', exes: 'La ley rige a partir del año que viene.' },
        { de: 'die Wahl', pl: 'die Wahlen', es: 'la elección', ex: 'Bei der Wahl dürfen alle Erwachsenen abstimmen.', exes: 'En las elecciones pueden votar todos los adultos.' },
        { de: 'der Bürger', pl: 'die Bürger', es: 'el ciudadano', ex: 'Die Bürger diskutieren über den Vorschlag.', exes: 'Los ciudadanos discuten sobre la propuesta.' },
        { de: 'die Meinung', pl: 'die Meinungen', es: 'la opinión', ex: 'Jeder hat das Recht auf seine eigene Meinung.', exes: 'Todos tienen derecho a su propia opinión.' },
        { de: 'der Vorschlag', pl: 'die Vorschläge', es: 'la propuesta', ex: 'Der Vorschlag der Jugendlichen ist interessant.', exes: 'La propuesta de los jóvenes es interesante.' },
        { de: 'die Verantwortung', es: 'la responsabilidad', ex: 'Mit achtzehn übernimmt man mehr Verantwortung.', exes: 'A los dieciocho se asume más responsabilidad.' },
        { de: 'die Freiheit', pl: 'die Freiheiten', es: 'la libertad', ex: 'Viele Jugendliche wollen ihre Freiheit nicht verlieren.', exes: 'Muchos jóvenes no quieren perder su libertad.' },
        { de: 'das Ehrenamt', pl: 'die Ehrenämter', es: 'el trabajo voluntario', ex: 'Mein Vater hat ein Ehrenamt im Sportverein.', exes: 'Mi padre tiene un cargo voluntario en el club deportivo.' },
        { de: 'die Gerechtigkeit', es: 'la justicia', ex: 'Alle wünschen sich mehr Gerechtigkeit im Alltag.', exes: 'Todos desean más justicia en la vida cotidiana.' },
        { de: 'die Zukunft', es: 'el futuro', ex: 'Wir müssen für die Zukunft planen.', exes: 'Tenemos que planificar para el futuro.' },
        { de: 'sich engagieren', es: 'comprometerse / implicarse', note: 'engagiert sich – engagierte sich – hat sich engagiert', ex: 'Ich engagiere mich in einer Initiative für saubere Parks.', exes: 'Me implico en una iniciativa por parques limpios.' },
        { de: 'unterstützen', es: 'apoyar', ex: 'Viele Menschen unterstützen diese Idee.', exes: 'Mucha gente apoya esta idea.' },
        { de: 'zu|stimmen', es: 'estar de acuerdo con (+ Dativ)', note: 'stimmt zu – stimmte zu – hat zugestimmt', ex: 'Ich stimme deiner Meinung zu.', exes: 'Estoy de acuerdo con tu opinión.' },
        { de: 'widersprechen', es: 'contradecir (+ Dativ)', note: 'widerspricht – widersprach – hat widersprochen', ex: 'Darf ich dir kurz widersprechen?', exes: '¿Puedo contradecirte un momento?' },
        { de: 'verpflichten', es: 'obligar / comprometer', note: 'verpflichtet – verpflichtete – hat verpflichtet', ex: 'Das Gesetz verpflichtet alle zu einem Dienst.', exes: 'La ley obliga a todos a prestar un servicio.' },
        { de: 'sozial', es: 'social', ex: 'Sie arbeitet in einem sozialen Beruf.', exes: 'Trabaja en una profesión social.' },
        { de: 'verpflichtend', es: 'obligatorio', ex: 'Ein verpflichtendes Jahr ist nicht bei allen beliebt.', exes: 'Un año obligatorio no es popular entre todos.' }
      ],
      phrases: [
        { de: 'Ich finde, dass ein soziales Jahr sinnvoll ist.', es: 'Opino que un año social es útil.', use: 'opinar' },
        { de: 'Meiner Meinung nach sollte man niemanden zwingen.', es: 'En mi opinión no se debería obligar a nadie.', use: 'opinar' },
        { de: 'Da stimme ich dir völlig zu.', es: 'En eso estoy totalmente de acuerdo.', use: 'aprobar' },
        { de: 'Das sehe ich genauso.', es: 'Yo lo veo igual.', use: 'aprobar' },
        { de: 'Das sehe ich anders.', es: 'Yo lo veo de otra manera.', use: 'contradecir' },
        { de: 'Da bin ich nicht deiner Meinung.', es: 'En eso no estoy de acuerdo contigo.', use: 'contradecir' },
        { de: 'Darf ich etwas dazu sagen?', es: '¿Puedo decir algo al respecto?', use: 'pedir la palabra' },
        { de: 'Moment, ich bin noch nicht fertig.', es: 'Un momento, no he terminado.', use: 'no interrumpir' },
        { de: 'Lass mich bitte ausreden.', es: 'Déjame terminar, por favor.', use: 'no interrumpir' }
      ],
      dialog: {
        title: 'Soll das soziale Jahr Pflicht sein?',
        lines: [
          { s: 'A', de: 'Hast du schon gehört? Die Regierung plant ein soziales Jahr für alle Jugendlichen.', es: '¿Ya te has enterado? El gobierno planea un año social para todos los jóvenes.' },
          { s: 'B', de: 'Ja, ich finde die Idee gut. Es ist wichtig, etwas für die Gesellschaft zu tun.', es: 'Sí, me parece buena idea. Es importante hacer algo por la sociedad.' },
          { s: 'A', de: 'Das sehe ich anders. Ich habe keine Lust, ein ganzes Jahr zu verlieren.', es: 'Yo lo veo diferente. No tengo ganas de perder un año entero.' },
          { s: 'B', de: 'Aber du verlierst es doch nicht! Man lernt, Verantwortung zu übernehmen.', es: '¡Pero no lo pierdes! Se aprende a asumir responsabilidad.' },
          { s: 'A', de: 'Das stimmt, aber es sollte freiwillig bleiben. Niemand sollte gezwungen werden.', es: 'Eso es cierto, pero debería seguir siendo voluntario. Nadie debería ser obligado.' },
          { s: 'B', de: 'Darf ich etwas dazu sagen? Freiwillig machen es leider nur wenige.', es: '¿Puedo decir algo? Por desgracia, voluntariamente lo hacen solo pocos.' },
          { s: 'A', de: 'Moment, ich bin noch nicht fertig. Man kann auch ohne Pflicht anfangen, sich zu engagieren.', es: 'Un momento, no he terminado. También se puede empezar a implicarse sin obligación.' },
          { s: 'B', de: 'Okay, da hast du recht. Vielleicht ist ein Anreiz besser, zum Beispiel ein Stipendium.', es: 'Vale, en eso tienes razón. Quizá un incentivo sea mejor, por ejemplo una beca.' },
          { s: 'A', de: 'Genau, so kann man junge Leute überzeugen, ohne sie zu zwingen.', es: 'Exacto, así se puede convencer a los jóvenes sin obligarlos.' },
          { s: 'B', de: 'Da stimme ich dir zu. Wir sollten das beim nächsten Treffen vorschlagen.', es: 'En eso estoy de acuerdo. Deberíamos proponerlo en la próxima reunión.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich habe keine Lust, heute früh ___.', o: ['aufstehen', 'aufzustehen', 'zu aufstehen'], a: 1, why: 'Verbo separable con zu: zu va entre el prefijo y el verbo, todo junto: aufzustehen.' },
        { t: 'mc', q: 'Ich muss morgen sehr früh ___.', o: ['aufzustehen', 'aufstehen', 'zu aufstehen'], a: 1, why: 'Detrás de un modal (müssen) no se usa zu.' },
        { t: 'mc', q: 'Es ist wichtig, Verantwortung ___.', o: ['übernehmen', 'überzunehmen', 'zu übernehmen'], a: 2, why: 'übernehmen es inseparable: zu va delante y por separado.' },
        { t: 'mc', q: 'Er hat vergessen, mich ___.', o: ['anrufen', 'zu anrufen', 'anzurufen'], a: 2, why: 'anrufen es separable: an + zu + rufen = anzurufen.' },
        { t: 'mc', q: 'Wir gehen am Samstag ___.', o: ['einzukaufen', 'zu einkaufen', 'einkaufen'], a: 2, why: 'Detrás de gehen no se usa zu: einkaufen gehen.' },
        { t: 'mc', q: 'Er lernt Deutsch, ___ in Wien zu arbeiten.', o: ['damit', 'um', 'weil'], a: 1, why: 'Finalidad con el mismo sujeto: um … zu + infinitivo.' },
        { t: 'gap', q: 'Ich versuche, jeden Tag eine Stunde Deutsch ___. (lernen)', a: ['zu lernen'], why: 'Después de versuchen: zu + infinitivo al final de la frase.' },
        { t: 'gap', q: 'Sie hat vor, nächstes Jahr ein soziales Jahr ___. (machen)', a: ['zu machen'], why: 'Después de vorhaben se usa zu + infinitivo: zu machen.' },
        { t: 'gap', q: 'Hast du Lust, heute Abend ___? (mit|kommen)', a: ['mitzukommen'], why: 'Verbo separable: mit + zu + kommen = mitzukommen.' },
        { t: 'gap', q: 'Ich muss heute nicht ___. (arbeiten)', a: ['arbeiten'], why: 'Con el modal müssen no se usa zu: nicht arbeiten.' },
        { t: 'gap', q: 'Es ist nicht leicht, immer pünktlich ___. (sein)', a: ['zu sein'], why: 'Después de es ist leicht/schwer se usa zu + infinitivo: zu sein.' },
        { t: 'order', es: 'No tengo ganas de trabajar el domingo.', de: 'Ich habe keine Lust, am Sonntag zu arbeiten.', why: 'Lust haben + zu + infinitivo al final, separado por coma.' },
        { t: 'order', es: 'Es importante ayudar a otras personas.', de: 'Es ist wichtig, anderen Menschen zu helfen.', why: 'Es ist wichtig + Infinitiv mit zu al final; helfen lleva Dativ (anderen Menschen).' },
        { t: 'order', es: 'Se olvidó de cancelar la cita.', de: 'Sie hat vergessen, den Termin abzusagen.', why: 'absagen es separable: abzusagen; el infinitivo con zu va al final.' },
        { t: 'tr', es: 'Tengo ganas de aprender alemán.', de: ['Ich habe Lust, Deutsch zu lernen.', 'Ich habe Lust Deutsch zu lernen.'], why: '' },
        { t: 'tr', es: 'Viajamos a Berlín para visitar a nuestros amigos.', de: ['Wir fahren nach Berlin, um unsere Freunde zu besuchen.', 'Wir reisen nach Berlin, um unsere Freunde zu besuchen.'], why: '' },
        { t: 'fix', q: 'Ich habe keine Lust, früh aufstehen.', a: ['Ich habe keine Lust, früh aufzustehen.'], why: 'Después de keine Lust haben hace falta zu; con separables: aufzustehen.' },
        { t: 'fix', q: 'Wir gehen am Samstag zu schwimmen.', a: ['Wir gehen am Samstag schwimmen.'], why: 'Detrás de gehen no se usa zu.' },
        { t: 'match', pairs: [['die Gesellschaft', 'la sociedad'], ['die Pflicht', 'el deber'], ['die Regierung', 'el gobierno'], ['der Vorschlag', 'la propuesta'], ['widersprechen', 'contradecir'], ['sich engagieren', 'comprometerse']] }
      ],
      speak: [
        { prompt: 'Da tu opinión sobre un año social obligatorio (5-6 frases): usa ich finde, dass…, meiner Meinung nach… y al menos dos construcciones con zu.', model: 'Ich finde, dass ein soziales Jahr eine gute Erfahrung ist. Es ist wichtig, früh Verantwortung zu übernehmen. Meiner Meinung nach sollte es aber nicht Pflicht sein. Viele junge Menschen haben keine Lust, ein Jahr lang unbezahlt zu arbeiten. Besser wäre ein Stipendium, um mehr Leute zu motivieren.' },
        { prompt: 'Un amigo opina algo que no compartes. Responde en 4 frases: reconoce una parte, contradice con educación y pide poder terminar de hablar.', model: 'Das stimmt zum Teil, aber das sehe ich anders. Ich glaube nicht, dass man alle zwingen sollte. Moment, ich bin noch nicht fertig: Freiwillige Arbeit macht mehr Spaß und bringt mehr. Darf ich das so sagen?' },
        { prompt: 'Para usar en voz alta: di qué piensas hacer para ayudar a tu barrio o a tu comunidad (4 frases con zu o um … zu).', model: 'Ich habe vor, mich in meinem Viertel zu engagieren. Ich versuche, jede Woche zwei Stunden bei einer Initiative zu helfen. Am Wochenende gehe ich auch Müll sammeln. So kann ich etwas für die Gesellschaft tun, um die Straßen sauber zu halten.' }
      ]
    },
    {
      id: 'b1-09',
      title: 'Ein Semester im Ausland',
      es: 'Estudios y experiencia en el extranjero',
      goals: ['Usar wegen y trotz con Genitiv (y reconocer el Dativ coloquial)', 'Declinar el adjetivo en Genitiv (des guten Films, eines kleinen Kindes)', 'Escribir un e-mail (semi)formal con estructura y cortesía', 'Disculparte, justificarte, proponer alternativas, preguntar más y agradecer'],
      grammar: [
        {
          h: 'wegen y trotz + Genitiv',
          p: '<span class="de">wegen</span> (por, a causa de) expresa la <b>causa</b>; <span class="de">trotz</span> (a pesar de) expresa una <b>oposición</b>. Ambas son preposiciones que piden <b>Genitiv</b>: <i>wegen des Wetters, trotz des Regens</i>. Observa el Genitiv: masculino y neutro → <b>des + sustantivo + -(e)s</b>; femenino y plural → <b>der</b>. En el alemán hablado se oye mucho <i>wegen dem Wetter</i> (Dativ); es coloquial: en un correo, un examen o un texto formal usa el Genitiv. Si no hay artículo, no cambia nada en el verbo: <i>Wegen Krankheit</i> (por enfermedad).',
          table: { head: ['Género', 'wegen (causa)', 'trotz (oposición)'], rows: [['m', 'wegen <b>des</b> Wetter<b>s</b>', 'trotz <b>des</b> Regen<b>s</b>'], ['f', 'wegen <b>der</b> Prüfung', 'trotz <b>der</b> Kälte'], ['n', 'wegen <b>des</b> Semester<b>s</b>', 'trotz <b>des</b> Problem<b>s</b>'], ['pl', 'wegen <b>der</b> Kosten', 'trotz <b>der</b> Schwierigkeiten']] },
          ex: [
            { de: 'Wegen des schlechten Wetters bleibe ich zu Hause.', es: 'Por el mal tiempo me quedo en casa.' },
            { de: 'Trotz des Regens gehen wir spazieren.', es: 'A pesar de la lluvia vamos a pasear.' },
            { de: 'Wegen meiner Prüfung kann ich leider nicht kommen.', es: 'Por mi examen, lamentablemente no puedo venir.' },
            { de: 'Trotz der hohen Kosten möchte sie im Ausland studieren.', es: 'A pesar de los altos costes, quiere estudiar en el extranjero.' },
            { de: 'Er musste wegen einer Krankheit das Semester verschieben.', es: 'Tuvo que aplazar el semestre por una enfermedad.' }
          ],
          tip: 'Sustantivos masculinos y neutros añaden <b>-s</b> (<i>des Studiums</i>) o <b>-es</b> (<i>des Kindes, des Tages</i>) en Genitiv. Los de la n-Deklination llevan <b>-en</b>: <i>des Studenten, des Kollegen</i>. En plural no se añade nada.'
        },
        {
          h: 'Adjetivo en Genitiv',
          p: 'Para completar el cuadro: en <b>Genitiv</b> el adjetivo lleva siempre <b>-en</b> con artículo definido (<i>des guten Films, der guten Idee</i>), con artículo indefinido (<i>eines kleinen Kindes</i>) y sin artículo en masculino y neutro. Solo el femenino y el plural sin artículo llevan <b>-er</b> (<i>guter Ideen</i>). Observa que en Genitiv femenino la terminación del artículo (<i>der / einer</i>) ya muestra el caso.',
          table: { head: ['Género', 'artículo definido', 'artículo indefinido'], rows: [['m', 'des gut<b>en</b> Film<b>s</b>', 'eines gut<b>en</b> Film<b>s</b>'], ['f', 'der gut<b>en</b> Idee', 'einer gut<b>en</b> Idee'], ['n', 'des klein<b>en</b> Kind<b>es</b>', 'eines klein<b>en</b> Kind<b>es</b>'], ['pl', 'der gut<b>en</b> Filme', 'keiner gut<b>en</b> Filme']] },
          ex: [
            { de: 'Wegen des langen Films bin ich spät nach Hause gekommen.', es: 'Por la larga película volví tarde a casa.' },
            { de: 'Trotz der schweren Prüfung war er ruhig.', es: 'A pesar del difícil examen estaba tranquilo.' },
            { de: 'Die Meinung eines kleinen Kindes ist oft ehrlich.', es: 'La opinión de un niño pequeño suele ser sincera.' },
            { de: 'Das ist der Name des neuen Studenten.', es: 'Ese es el nombre del nuevo estudiante.' },
            { de: 'Trotz der vielen Arbeit hat sie das Semester genossen.', es: 'A pesar del mucho trabajo, disfrutó del semestre.' }
          ],
          tip: 'Regla de oro del Genitiv: <b>todo -en</b> salvo femenino/plural sin artículo. Si dudas, usa -en; acertarás casi siempre.'
        },
        {
          h: 'Escribir un e-mail (semi)formal',
          p: 'Un correo formal tiene cuatro partes: <b>saludo</b> (<i>Sehr geehrte Frau Weber,</i> / semiformal: <i>Liebe Frau Weber,</i>), <b>motivo</b> (<i>ich schreibe Ihnen, weil …</i>), <b>cuerpo</b> con justificaciones, alternativas y preguntas, y <b>despedida</b> (<i>Mit freundlichen Grüßen</i> / semiformal: <i>Viele Grüße</i>). Con la forma <b>Sie</b> usa el Konjunktiv II para suavizar: <i>Könnten Sie …? Ich würde gern …</i>. Para <b>disculparte</b>: <span class="de">Es tut mir leid, dass …</span>; para <b>justificar</b>: <span class="de">wegen …, deshalb …</span>; para <b>proponer</b>: <span class="de">Wäre es möglich, …? Alternativ könnte ich …</span>; para <b>agradecer</b>: <span class="de">Vielen Dank im Voraus / für Ihre Hilfe.</span>',
          table: { head: ['Función', 'Fórmula'], rows: [['Saludo formal', 'Sehr geehrte Frau Weber,'], ['Motivo', 'ich schreibe Ihnen wegen meines Auslandssemesters.'], ['Disculpa', 'Es tut mir sehr leid, dass ich den Termin absagen muss.'], ['Alternativa', 'Wäre es möglich, die Frist zu verlängern?'], ['Pregunta', 'Könnten Sie mir bitte noch mitteilen, welche Unterlagen ich brauche?'], ['Agradecimiento', 'Vielen Dank im Voraus für Ihre Hilfe.'], ['Despedida', 'Mit freundlichen Grüßen, Anna Müller']] },
          ex: [
            { de: 'Sehr geehrte Frau Weber, ich schreibe Ihnen wegen meiner Bewerbung für ein Auslandssemester.', es: 'Estimada señora Weber, le escribo por mi solicitud para un semestre en el extranjero.' },
            { de: 'Es tut mir leid, dass ich den Termin wegen einer Prüfung absagen muss.', es: 'Lamento tener que cancelar la cita por un examen.' },
            { de: 'Wäre es möglich, den Termin auf Freitag zu verschieben?', es: '¿Sería posible aplazar la cita al viernes?' },
            { de: 'Könnten Sie mir bitte mitteilen, welche Unterlagen ich noch brauche?', es: '¿Podría decirme qué documentos necesito todavía?' },
            { de: 'Vielen Dank im Voraus für Ihre Hilfe. Mit freundlichen Grüßen, Anna Müller', es: 'Muchas gracias de antemano por su ayuda. Atentamente, Anna Müller' }
          ],
          tip: 'En alemán el saludo lleva coma y la primera línea del texto empieza con minúscula (salvo sustantivos): <i>Sehr geehrte Frau Weber,</i> ↵ <i>ich schreibe Ihnen …</i> A diferencia del español, no se usa dos puntos.'
        }
      ],
      vocab: [
        { de: 'das Studium', pl: 'die Studien', es: 'los estudios', ex: 'Während des Studiums wohne ich in einem Wohnheim.', exes: 'Durante los estudios vivo en una residencia.' },
        { de: 'die Universität', pl: 'die Universitäten', es: 'la universidad', ex: 'Die Universität bietet viele Kurse auf Englisch an.', exes: 'La universidad ofrece muchos cursos en inglés.' },
        { de: 'das Semester', pl: 'die Semester', es: 'el semestre', ex: 'Im nächsten Semester besuche ich ein Seminar über Politik.', exes: 'El próximo semestre asistiré a un seminario sobre política.' },
        { de: 'das Stipendium', pl: 'die Stipendien', es: 'la beca', ex: 'Mit einem Stipendium kann ich ein Jahr im Ausland studieren.', exes: 'Con una beca puedo estudiar un año en el extranjero.' },
        { de: 'die Vorlesung', pl: 'die Vorlesungen', es: 'la clase magistral', ex: 'Die Vorlesung beginnt um acht Uhr.', exes: 'La clase magistral empieza a las ocho.' },
        { de: 'das Seminar', pl: 'die Seminare', es: 'el seminario', ex: 'Im Seminar diskutieren wir über aktuelle Themen.', exes: 'En el seminario debatimos temas de actualidad.' },
        { de: 'der Studiengang', pl: 'die Studiengänge', es: 'la carrera / el plan de estudios', ex: 'Dieser Studiengang dauert sechs Semester.', exes: 'Esta carrera dura seis semestres.' },
        { de: 'die Bewerbung', pl: 'die Bewerbungen', es: 'la solicitud / candidatura', ex: 'Die Bewerbung muss bis Ende Mai bei der Uni sein.', exes: 'La solicitud tiene que estar en la universidad a finales de mayo.' },
        { de: 'die Prüfung', pl: 'die Prüfungen', es: 'el examen', ex: 'Ich habe nächste Woche eine wichtige Prüfung.', exes: 'La semana que viene tengo un examen importante.' },
        { de: 'der Abschluss', pl: 'die Abschlüsse', es: 'el título / la graduación', ex: 'Mit diesem Abschluss findet man leicht einen Job.', exes: 'Con este título se encuentra trabajo fácilmente.' },
        { de: 'das Wohnheim', pl: 'die Wohnheime', es: 'la residencia de estudiantes', ex: 'Im Wohnheim teile ich die Küche mit vier Leuten.', exes: 'En la residencia comparto la cocina con cuatro personas.' },
        { de: 'die Frist', pl: 'die Fristen', es: 'el plazo', ex: 'Die Frist für die Anmeldung endet am Freitag.', exes: 'El plazo de inscripción termina el viernes.' },
        { de: 'die Unterlagen', es: 'los documentos (plural)', ex: 'Ich schicke Ihnen alle Unterlagen per E-Mail.', exes: 'Le envío todos los documentos por correo electrónico.' },
        { de: 'das Zeugnis', pl: 'die Zeugnisse', es: 'el certificado de notas', ex: 'Bitte schicken Sie uns Ihr letztes Zeugnis.', exes: 'Por favor, envíenos su último certificado de notas.' },
        { de: 'sich bewerben', es: 'solicitar / presentarse a (um + Akk.)', note: 'bewirbt sich – bewarb sich – hat sich beworben', ex: 'Ich bewerbe mich um ein Stipendium.', exes: 'Estoy solicitando una beca.' },
        { de: 'teil|nehmen', es: 'participar (an + Dativ)', note: 'nimmt teil – nahm teil – hat teilgenommen', ex: 'Ich möchte an dem Sprachkurs teilnehmen.', exes: 'Me gustaría participar en el curso de idiomas.' },
        { de: 'ab|sagen', es: 'cancelar / anular', ex: 'Leider muss ich den Termin absagen.', exes: 'Lamentablemente tengo que cancelar la cita.' },
        { de: 'verschieben', es: 'aplazar', note: 'verschiebt – verschob – hat verschoben', ex: 'Können wir das Gespräch auf nächste Woche verschieben?', exes: '¿Podemos aplazar la conversación a la semana que viene?' },
        { de: 'bestehen', es: 'aprobar (un examen)', note: 'besteht – bestand – hat bestanden', ex: 'Sie hat die Prüfung mit guter Note bestanden.', exes: 'Aprobó el examen con buena nota.' },
        { de: 'verlängern', es: 'prolongar / ampliar', ex: 'Kann man die Frist um eine Woche verlängern?', exes: '¿Se puede ampliar el plazo en una semana?' }
      ],
      phrases: [
        { de: 'Sehr geehrte Frau Weber, sehr geehrter Herr Schmidt,', es: 'Estimada señora Weber, estimado señor Schmidt,', use: 'saludo formal' },
        { de: 'Ich schreibe Ihnen wegen meines Auslandssemesters.', es: 'Le escribo por mi semestre en el extranjero.', use: 'motivo' },
        { de: 'Es tut mir sehr leid, dass ich absagen muss.', es: 'Lamento mucho tener que cancelar.', use: 'disculparse' },
        { de: 'Leider kann ich wegen einer Prüfung nicht kommen.', es: 'Lamentablemente no puedo venir por un examen.', use: 'justificar' },
        { de: 'Wäre es möglich, den Termin zu verschieben?', es: '¿Sería posible aplazar la cita?', use: 'proponer' },
        { de: 'Alternativ könnte ich am Freitag kommen.', es: 'Alternativamente podría ir el viernes.', use: 'alternativa' },
        { de: 'Könnten Sie mir bitte mitteilen, bis wann ich mich bewerben kann?', es: '¿Podría decirme hasta cuándo puedo presentar la solicitud?', use: 'preguntar' },
        { de: 'Haben Sie noch Fragen an mich?', es: '¿Tiene alguna pregunta más para mí?', use: 'preguntar' },
        { de: 'Vielen Dank im Voraus für Ihre Hilfe.', es: 'Muchas gracias de antemano por su ayuda.', use: 'agradecer' },
        { de: 'Mit freundlichen Grüßen', es: 'Atentamente / Saludos cordiales', use: 'despedida' }
      ],
      dialog: {
        title: 'Eine E-Mail an die Universität',
        lines: [
          { s: 'A', de: 'Ich muss der Universität schreiben. Wegen meiner Prüfung kann ich den Termin nicht wahrnehmen.', es: 'Tengo que escribir a la universidad. Por mi examen no puedo asistir a la cita.' },
          { s: 'B', de: 'Dann solltest du dich höflich entschuldigen und eine Alternative vorschlagen.', es: 'Entonces deberías disculparte con cortesía y proponer una alternativa.' },
          { s: 'A', de: 'Gute Idee. Wie fange ich an? Sehr geehrte Frau Weber, …?', es: 'Buena idea. ¿Cómo empiezo? ¿Sehr geehrte Frau Weber, …?' },
          { s: 'B', de: 'Genau. Danach schreibst du, warum du schreibst: „Ich schreibe Ihnen wegen meines Termins am Dienstag.“', es: 'Exacto. Después escribes por qué escribes: «Le escribo por mi cita del martes».' },
          { s: 'A', de: 'Und dann: „Es tut mir sehr leid, aber ich muss den Termin wegen einer Prüfung absagen.“', es: 'Y luego: «Lo siento mucho, pero tengo que cancelar la cita por un examen».' },
          { s: 'B', de: 'Sehr gut. Trotz der kurzen Zeit solltest du eine Alternative nennen.', es: 'Muy bien. A pesar del poco tiempo, deberías mencionar una alternativa.' },
          { s: 'A', de: '„Wäre es möglich, den Termin auf Freitag zu verschieben?“ Und noch eine Frage zu den Unterlagen.', es: '«¿Sería posible aplazar la cita al viernes?». Y otra pregunta sobre los documentos.' },
          { s: 'B', de: 'Zum Beispiel: „Könnten Sie mir bitte mitteilen, welche Unterlagen ich mitbringen soll?“', es: 'Por ejemplo: «¿Podría decirme qué documentos debo llevar?».' },
          { s: 'A', de: 'Perfekt. Am Ende danke ich im Voraus und schreibe „Mit freundlichen Grüßen“.', es: 'Perfecto. Al final doy las gracias de antemano y escribo «Mit freundlichen Grüßen».' },
          { s: 'B', de: 'Genau so. Trotz des formellen Tons klingt die E-Mail dann freundlich.', es: 'Justo así. A pesar del tono formal, el correo suena amable.' }
        ]
      },
      ex: [
        { t: 'mc', q: '___ des schlechten Wetters bleiben wir zu Hause.', o: ['Trotz', 'Wegen', 'Obwohl'], a: 1, why: 'Causa del hecho: wegen + Genitiv. Trotz expresaría una oposición.' },
        { t: 'mc', q: '___ der Kälte gehen wir schwimmen.', o: ['Wegen', 'Trotz', 'Weil'], a: 1, why: 'Oposición (a pesar de): trotz + Genitiv.' },
        { t: 'mc', q: 'Wegen des ___ Films bin ich spät nach Hause gekommen.', o: ['langen', 'lange', 'langem'], a: 0, why: 'Genitiv masculino tras des: el adjetivo lleva -en.' },
        { t: 'mc', q: 'Trotz der ___ Prüfung war er ruhig.', o: ['schwere', 'schweren', 'schwerer'], a: 1, why: 'Genitiv femenino tras der: -en.' },
        { t: 'mc', q: 'Die Meinung eines ___ Kindes ist oft ehrlich.', o: ['kleines', 'kleine', 'kleinen'], a: 2, why: 'Genitiv neutro tras eines: el adjetivo lleva -en (y el sustantivo -es).' },
        { t: 'mc', q: 'Ich bleibe wegen des ___ in Berlin.', o: ['Studium', 'Studiums', 'Studiumes'], a: 1, why: 'Genitiv de un sustantivo neutro: des Studiums (-s).' },
        { t: 'mc', q: 'Am Ende der E-Mail schreibe ich: Mit freundlichen ___.', o: ['Grüßen', 'Grüße', 'Gruß'], a: 0, why: 'Fórmula fija de despedida formal: Mit freundlichen Grüßen (Dativ plural).' },
        { t: 'gap', q: 'Trotz des ___ Regens gehen wir wandern. (stark)', a: ['starken'], why: 'Genitiv masculino tras des: starken.' },
        { t: 'gap', q: 'Wegen eines ___ Problems kann ich nicht kommen. (technisch)', a: ['technischen'], why: 'Genitiv neutro tras eines: -en.' },
        { t: 'gap', q: 'Wegen der ___ Mieten ziehe ich zu meinen Eltern. (hoch)', a: ['hohen'], why: 'Genitiv plural tras der: -en (hoch pierde la c: hohen).' },
        { t: 'gap', q: 'Der Preis des ___ Zimmers ist niedrig. (klein)', a: ['kleinen'], why: 'Genitiv neutro tras des: -en.' },
        { t: 'gap', q: 'Wegen ___ Krankheit habe ich den Kurs abgesagt. (mein)', a: ['meiner'], why: 'Krankheit es femenino; Genitiv femenino: meiner.' },
        { t: 'order', es: 'A pesar de la lluvia vamos a pasear.', de: 'Trotz des Regens gehen wir spazieren.', why: 'Trotz + Genitiv (des Regens) ocupa la 1.ª posición; el verbo conjugado va en 2.ª.' },
        { t: 'order', es: 'Por el examen no puedo venir, lamentablemente.', de: 'Wegen der Prüfung kann ich leider nicht kommen.', why: 'wegen + Genitiv femenino (der Prüfung); kann en 2.ª posición e infinitivo al final.' },
        { t: 'order', es: 'Me disculpo por la respuesta tardía.', de: 'Ich entschuldige mich für die späte Antwort.', why: 'sich entschuldigen für + Akkusativ; die späte Antwort: femenino Akkusativ con -e.' },
        { t: 'tr', es: 'A pesar del mal tiempo, el viaje fue bonito.', de: ['Trotz des schlechten Wetters war die Reise schön.', 'Die Reise war trotz des schlechten Wetters schön.'], why: '' },
        { t: 'tr', es: 'Por mi trabajo no tengo tiempo.', de: ['Wegen meiner Arbeit habe ich keine Zeit.', 'Wegen meines Jobs habe ich keine Zeit.', 'Wegen meiner Arbeit habe ich leider keine Zeit.'], why: '' },
        { t: 'fix', q: 'Wegen dem Regen bleibe ich zu Hause.', a: ['Wegen des Regens bleibe ich zu Hause.'], why: 'En lengua formal wegen lleva Genitiv: des Regens (el Dativ es coloquial).' },
        { t: 'fix', q: 'Trotz des gutes Wetters gehen wir nicht spazieren.', a: ['Trotz des guten Wetters gehen wir nicht spazieren.'], why: 'Genitiv neutro tras des: el adjetivo lleva -en (guten).' },
        { t: 'match', pairs: [['das Semester', 'el semestre'], ['das Stipendium', 'la beca'], ['die Frist', 'el plazo'], ['die Unterlagen', 'los documentos'], ['absagen', 'cancelar'], ['bestehen', 'aprobar (un examen)']] }
      ],
      speak: [
        { prompt: 'Escribe un correo semiformal (5-6 frases) a un profesor en el que cancelas una cita. Incluye saludo, motivo con wegen, disculpa, alternativa y despedida.', model: 'Sehr geehrter Herr Schmidt, ich schreibe Ihnen wegen unseres Termins am Dienstag. Leider muss ich ihn wegen einer wichtigen Prüfung absagen. Es tut mir sehr leid. Wäre es möglich, den Termin auf Freitag zu verschieben? Vielen Dank im Voraus für Ihr Verständnis. Mit freundlichen Grüßen, Anna Müller' },
        { prompt: 'Cuenta (3-4 frases) algo que hiciste a pesar de un obstáculo. Usa trotz + Genitiv y adjetivos con -en.', model: 'Trotz des starken Regens bin ich gestern zur Uni gefahren. Trotz der vielen Arbeit habe ich die Prüfung bestanden. Trotz der hohen Kosten möchte ich nächstes Jahr ein Semester im Ausland machen.' },
        { prompt: 'Para usar en voz alta: pregunta por teléfono a la secretaría de una universidad por la fecha límite y los documentos (4 frases de cortesía).', model: 'Guten Tag, ich rufe wegen meiner Bewerbung an. Könnten Sie mir bitte sagen, bis wann ich mich bewerben kann? Welche Unterlagen brauche ich noch? Vielen Dank für Ihre Hilfe!' }
      ]
    }
  ]
});

window.BREZEL = window.BREZEL || {modules: []};
window.BREZEL.modules.push({
  id: 'b1m4',
  level: 'B1',
  num: 4,
  title: 'Trabajo, productos y cocina',
  emoji: '🍳',
  lessons: [
    {
      id: 'b1-10',
      title: 'Zufrieden im Job?',
      es: 'Satisfacción laboral',
      goals: ['Usar los conectores temporales bis, seit, bevor y während en subordinadas', 'Distinguir conector y preposición (bis / seit / vor / während + caso)', 'Hablar de una estadística y de una encuesta', 'Hablar del trabajo, del ambiente laboral y del sueldo'],
      grammar: [
        {
          h: 'bis y seit: hasta que / desde que',
          p: '<span class="de">bis</span> y <span class="de">seit</span> pueden ser <b>conectores</b> (introducen una subordinada con el verbo conjugado <b>al final</b>) o <b>preposiciones</b> (van con un sustantivo). <b>bis</b> responde a <i>¿Hasta cuándo?</i> y <b>seit</b> a <i>¿Desde cuándo?</i>. Con <b>seit</b> el alemán usa el <b>Präsens</b> para algo que sigue vigente (<i>Ich arbeite seit drei Jahren hier</i>), mientras que el español dice &quot;trabajo aquí desde hace tres años&quot;. La subordinada puede ir delante o detrás de la principal; si va delante, la principal empieza con el verbo (<i>Seit ich hier arbeite, bin ich zufriedener</i>).',
          table: { head: ['', 'Conector (subordinada)', 'Preposición (+ sustantivo)'], rows: [['<b>bis</b> (hasta)', 'Ich warte, <b>bis</b> der Chef kommt.', 'Ich warte <b>bis</b> Freitag. / <b>bis zum</b> Feierabend.'], ['<b>seit</b> (desde)', '<b>Seit</b> ich hier arbeite, bin ich zufrieden.', 'Ich arbeite hier <b>seit</b> einem Jahr (+ Dativ).']] },
          ex: [
            { de: 'Ich bleibe im Büro, bis die Arbeit fertig ist.', es: 'Me quedo en la oficina hasta que el trabajo esté terminado.' },
            { de: 'Er arbeitet hier, seit er sein Studium beendet hat.', es: 'Trabaja aquí desde que terminó sus estudios.' },
            { de: 'Seit wir flexible Arbeitszeiten haben, ist die Stimmung besser.', es: 'Desde que tenemos horarios flexibles, el ambiente es mejor.' },
            { de: 'Wir warten bis zum Ende der Besprechung.', es: 'Esperamos hasta el final de la reunión.' },
            { de: 'Sie ist seit zwei Jahren Abteilungsleiterin.', es: 'Es jefa de departamento desde hace dos años.' }
          ],
          tip: 'Como preposición, <b>bis</b> casi nunca lleva artículo con días o fechas (<i>bis Montag</i>); con sustantivos usa <b>bis zu</b> + Dativ (<i>bis zum Mittag, bis zur Pause</i>). <b>seit</b> siempre lleva Dativ (<i>seit einem Monat, seit drei Wochen</i>).'
        },
        {
          h: 'bevor y während: antes de que / mientras',
          p: '<span class="de">bevor</span> (antes de que) indica que algo ocurre <b>antes</b> que otra cosa; <span class="de">während</span> (mientras) indica que dos cosas ocurren <b>a la vez</b>. Ambos introducen una subordinada con el <b>verbo al final</b>. En el Perfekt, el auxiliar queda al final tras el participio: <i>Bevor ich gekündigt habe, …</i>. Con <b>während</b>, ten en cuenta también su segundo significado de contraste (&quot;mientras que&quot;): <i>Er arbeitet viel, während sie viel Freizeit hat.</i>',
          table: { head: ['Conector', 'Significado', 'Ejemplo'], rows: [['<b>bevor</b>', 'antes de que / antes de + infinitivo', '<b>Bevor</b> ich gehe, schalte ich den Computer aus.'], ['<b>während</b>', 'mientras', '<b>Während</b> ich arbeite, höre ich Musik.'], ['<b>bis</b>', 'hasta que', 'Ich arbeite, <b>bis</b> es dunkel wird.'], ['<b>seit(dem)</b>', 'desde que', '<b>Seit(dem)</b> ich Teilzeit arbeite, schlafe ich besser.']] },
          ex: [
            { de: 'Bevor ich nach Hause gehe, räume ich meinen Schreibtisch auf.', es: 'Antes de irme a casa, ordeno mi escritorio.' },
            { de: 'Während ich die E-Mails lese, trinke ich meinen Kaffee.', es: 'Mientras leo los correos, me tomo el café.' },
            { de: 'Ich möchte mit dir sprechen, bevor ich die Stelle annehme.', es: 'Quiero hablar contigo antes de aceptar el puesto.' },
            { de: 'Während der Chef telefoniert, bereite ich die Unterlagen vor.', es: 'Mientras el jefe habla por teléfono, preparo los documentos.' },
            { de: 'Er hat sich lange informiert, bevor er sich beworben hat.', es: 'Se informó durante mucho tiempo antes de presentarse.' }
          ],
          tip: 'En español decimos &quot;antes de irme&quot; (infinitivo). En alemán, si el sujeto es el mismo, aún puedes usar <b>bevor</b> con verbo conjugado: <i>Bevor ich gehe</i>. Nunca digas &quot;bevor zu gehen&quot;.'
        },
        {
          h: 'Conector o preposición: misma idea, otra construcción',
          p: 'Cuando el sujeto de ambas frases es el mismo, el alemán prefiere con frecuencia una <b>preposición + sustantivo</b> en lugar de una subordinada: <i>Bevor ich esse → vor dem Essen</i>. Atención a los casos: <b>vor</b> + <b>Dativ</b>, <b>seit</b> + <b>Dativ</b>, <b>bis zu</b> + <b>Dativ</b>, <b>während</b> + <b>Genitiv</b> (en la lengua hablada también se oye el Dativ, pero en un texto formal usa el Genitiv). Al convertir el verbo en sustantivo suele servir el infinitivo (<i>das Essen</i>) o un sustantivo con -ung.',
          table: { head: ['Subordinada', 'Preposición + sustantivo'], rows: [['Bevor ich zur Arbeit gehe, …', '<b>Vor der</b> Arbeit …'], ['Bevor wir essen, …', '<b>Vor dem</b> Essen …'], ['Während ich arbeite, …', '<b>Während der</b> Arbeit …'], ['Während wir in der Pause sind, …', '<b>Während der</b> Pause …'], ['Bis die Besprechung zu Ende ist, …', '<b>Bis zum</b> Ende der Besprechung …'], ['Seit ich in dieser Firma bin, …', '<b>Seit</b> meinem Eintritt in die Firma …']] },
          ex: [
            { de: 'Vor der Arbeit gehe ich joggen.', es: 'Antes del trabajo salgo a correr.' },
            { de: 'Vor dem Essen waschen wir uns die Hände.', es: 'Antes de comer nos lavamos las manos.' },
            { de: 'Während der Arbeitszeit darf man nicht privat telefonieren.', es: 'Durante el horario laboral no se puede telefonear en privado.' },
            { de: 'Bis zum Feierabend muss der Bericht fertig sein.', es: 'El informe tiene que estar listo antes de que acabe la jornada.' },
            { de: 'Seit einem Jahr arbeite ich im Home-Office.', es: 'Llevo un año trabajando desde casa.' }
          ],
          tip: 'Para saber cuál usar: si tras la palabra va un <b>verbo conjugado con sujeto</b>, es conector y el verbo va al final; si va un <b>sustantivo</b>, es preposición y necesitas el caso correcto (Dativ para vor y seit, Genitiv para während).'
        },
        {
          h: 'Hablar de una estadística',
          p: 'Para presentar datos de una encuesta se usan fórmulas como <span class="de">Laut einer Umfrage …</span> (laut + Dativ), <span class="de">Die Grafik zeigt, dass …</span> o <span class="de">Im Vergleich zum letzten Jahr …</span>. Las proporciones se expresan con porcentajes o con fracciones. Con <b>die Mehrheit</b> o <b>die Hälfte</b> el verbo va en singular; con <b>70 Prozent</b> y un grupo plural, en plural. Para cambios usa <span class="de">steigen</span> (subir) y <span class="de">sinken</span> (bajar): <b>um</b> + cifra indica la diferencia, <b>auf</b> + cifra el nuevo valor.',
          table: { head: ['Proporción', 'Alemán'], rows: [['100 %', 'alle'], ['90 %', 'fast alle'], ['75 %', 'drei Viertel'], ['50 %', 'die Hälfte'], ['33 %', 'ein Drittel (jeder Dritte)'], ['25 %', 'ein Viertel'], ['10 %', 'jeder Zehnte'], ['0 %', 'niemand / keiner']] },
          ex: [
            { de: 'Laut einer Umfrage sind 72 Prozent der Beschäftigten mit ihrer Arbeit zufrieden.', es: 'Según una encuesta, el 72 % de los empleados está satisfecho con su trabajo.' },
            { de: 'Die Grafik zeigt, dass mehr als die Hälfte der Befragten flexible Arbeitszeiten möchte.', es: 'El gráfico muestra que más de la mitad de los encuestados quiere horarios flexibles.' },
            { de: 'Nur jeder Dritte ist mit seinem Gehalt zufrieden.', es: 'Solo uno de cada tres está satisfecho con su sueldo.' },
            { de: 'Die Mehrheit wünscht sich mehr Weiterbildung.', es: 'La mayoría desea más formación continua.' },
            { de: 'Im Vergleich zum letzten Jahr ist der Anteil der Zufriedenen um fünf Prozent gestiegen.', es: 'En comparación con el año pasado, la proporción de satisfechos ha subido un cinco por ciento.' }
          ],
          tip: 'Los verbos <i>steigen – stieg – ist gestiegen</i> y <i>sinken – sank – ist gesunken</i> forman el Perfekt con <b>sein</b>. En alemán se escribe <i>Prozent</i> (sin %) en el texto corrido y la coma decimal: <i>2,5 Prozent</i>.'
        }
      ],
      vocab: [
        { de: 'der Arbeitgeber', pl: 'die Arbeitgeber', es: 'el empleador', ex: 'Mein Arbeitgeber bietet jedes Jahr eine Weiterbildung an.', exes: 'Mi empleador ofrece cada año una formación continua.' },
        { de: 'der Arbeitnehmer', pl: 'die Arbeitnehmer', es: 'el empleado / el trabajador', ex: 'Die Arbeitnehmer wünschen sich flexible Arbeitszeiten.', exes: 'Los trabajadores desean horarios flexibles.' },
        { de: 'das Gehalt', pl: 'die Gehälter', es: 'el sueldo', ex: 'Mit meinem Gehalt bin ich eigentlich zufrieden.', exes: 'En realidad estoy satisfecho con mi sueldo.' },
        { de: 'die Arbeitszeit', pl: 'die Arbeitszeiten', es: 'el horario de trabajo', ex: 'Unsere Arbeitszeit beginnt um acht Uhr.', exes: 'Nuestro horario de trabajo empieza a las ocho.' },
        { de: 'die Überstunde', pl: 'die Überstunden', es: 'la hora extra', ex: 'Im Dezember mache ich oft viele Überstunden.', exes: 'En diciembre suelo hacer muchas horas extra.' },
        { de: 'das Betriebsklima', es: 'el ambiente laboral', ex: 'Ein gutes Betriebsklima ist mir wichtiger als ein hohes Gehalt.', exes: 'Un buen ambiente laboral me importa más que un sueldo alto.' },
        { de: 'die Weiterbildung', pl: 'die Weiterbildungen', es: 'la formación continua', ex: 'Durch die Weiterbildung habe ich neue Aufgaben bekommen.', exes: 'Gracias a la formación continua he recibido nuevas tareas.' },
        { de: 'die Beförderung', pl: 'die Beförderungen', es: 'el ascenso', ex: 'Nach der Beförderung hat sie ein eigenes Team.', exes: 'Tras el ascenso tiene su propio equipo.' },
        { de: 'die Umfrage', pl: 'die Umfragen', es: 'la encuesta', ex: 'An der Umfrage haben mehr als tausend Personen teilgenommen.', exes: 'En la encuesta participaron más de mil personas.' },
        { de: 'die Mehrheit', pl: 'die Mehrheiten', es: 'la mayoría', ex: 'Die Mehrheit der Kollegen arbeitet gern im Team.', exes: 'La mayoría de los colegas trabaja a gusto en equipo.' },
        { de: 'der Anteil', pl: 'die Anteile', es: 'la proporción', ex: 'Der Anteil der Frauen in der Firma steigt langsam.', exes: 'La proporción de mujeres en la empresa sube lentamente.' },
        { de: 'der Vertrag', pl: 'die Verträge', es: 'el contrato', ex: 'Mein Vertrag läuft noch bis nächsten Sommer.', exes: 'Mi contrato dura todavía hasta el próximo verano.' },
        { de: 'kündigen', es: 'despedirse / rescindir el contrato', note: 'kündigt – kündigte – hat gekündigt', ex: 'Er hat gekündigt, weil er eine neue Stelle gefunden hat.', exes: 'Ha dejado su trabajo porque ha encontrado un puesto nuevo.' },
        { de: 'verdienen', es: 'ganar (dinero) / merecer', note: 'verdient – verdiente – hat verdient', ex: 'Als Ingenieurin verdient sie ziemlich gut.', exes: 'Como ingeniera gana bastante bien.' },
        { de: 'sich bewerben', es: 'postularse', note: 'bewirbt sich – bewarb sich – hat sich beworben (bei + Dativ, um + Akkusativ)', ex: 'Ich habe mich bei einer Bank um eine Stelle beworben.', exes: 'Me postulé a un puesto en un banco.' },
        { de: 'zufrieden', es: 'satisfecho', ex: 'Ich bin mit meinen Kollegen sehr zufrieden.', exes: 'Estoy muy satisfecho con mis colegas.' },
        { de: 'anstrengend', es: 'agotador', ex: 'Der Tag war lang und anstrengend.', exes: 'El día fue largo y agotador.' },
        { de: 'abwechslungsreich', es: 'variado', ex: 'Meine Arbeit ist abwechslungsreich, kein Tag ist wie der andere.', exes: 'Mi trabajo es variado, ningún día es como otro.' },
        { de: 'befristet', es: 'temporal / de duración limitada', ex: 'Der Vertrag ist befristet und läuft nach einem Jahr aus.', exes: 'El contrato es temporal y termina al cabo de un año.' },
        { de: 'flexibel', es: 'flexible', ex: 'Flexible Arbeitszeiten helfen vielen Eltern.', exes: 'Los horarios flexibles ayudan a muchos padres.' }
      ],
      phrases: [
        { de: 'Laut einer Umfrage sind 70 Prozent der Beschäftigten zufrieden.', es: 'Según una encuesta, el 70 % de los empleados está satisfecho.', use: 'citar datos' },
        { de: 'Die Grafik zeigt, dass der Anteil gestiegen ist.', es: 'El gráfico muestra que la proporción ha subido.', use: 'describir gráfico' },
        { de: 'Die Mehrheit der Befragten wünscht sich mehr Flexibilität.', es: 'La mayoría de los encuestados desea más flexibilidad.', use: 'resumir' },
        { de: 'Im Vergleich zum letzten Jahr hat sich viel verbessert.', es: 'En comparación con el año pasado ha mejorado mucho.', use: 'comparar' },
        { de: 'Seit ich hier arbeite, fühle ich mich wohl.', es: 'Desde que trabajo aquí me siento a gusto.', use: 'hablar de cambios' },
        { de: 'Bevor ich die Stelle angenommen habe, habe ich mich gut informiert.', es: 'Antes de aceptar el puesto me informé bien.', use: 'contar' },
        { de: 'Ich bin mit meinem Gehalt nicht ganz zufrieden.', es: 'No estoy del todo satisfecho con mi sueldo.', use: 'opinar' },
        { de: 'Das überrascht mich nicht.', es: 'Eso no me sorprende.', use: 'reaccionar' },
        { de: 'Ich arbeite hier, bis ich in Rente gehe.', es: 'Trabajo aquí hasta que me jubile.', use: 'planes' }
      ],
      dialog: {
        title: 'Die Umfrage im Büro',
        lines: [
          { s: 'A', de: 'Hast du die Umfrage zur Zufriedenheit im Job schon gelesen?', es: '¿Ya leíste la encuesta sobre la satisfacción en el trabajo?' },
          { s: 'B', de: 'Ja, laut der Umfrage sind 72 Prozent der Beschäftigten mit ihrer Arbeit zufrieden.', es: 'Sí, según la encuesta, el 72 % de los empleados está satisfecho con su trabajo.' },
          { s: 'A', de: 'Das überrascht mich nicht. Seit wir flexible Arbeitszeiten haben, ist die Stimmung viel besser.', es: 'No me sorprende. Desde que tenemos horarios flexibles, el ambiente es mucho mejor.' },
          { s: 'B', de: 'Stimmt. Früher musste ich im Büro bleiben, bis mein Chef nach Hause gegangen ist.', es: 'Cierto. Antes tenía que quedarme en la oficina hasta que mi jefe se fuera a casa.' },
          { s: 'A', de: 'Und während der Mittagspause konnte man nicht einmal in Ruhe essen.', es: 'Y durante el descanso del mediodía ni siquiera se podía comer tranquilo.' },
          { s: 'B', de: 'Heute dürfen wir sogar zu Hause arbeiten, während die Kinder in der Schule sind.', es: 'Hoy incluso podemos trabajar desde casa mientras los niños están en el colegio.' },
          { s: 'A', de: 'Was steht in der Umfrage zum Gehalt?', es: '¿Qué dice la encuesta sobre el sueldo?' },
          { s: 'B', de: 'Nur jeder Dritte findet es angemessen. Die Mehrheit wünscht sich außerdem mehr Weiterbildung.', es: 'Solo uno de cada tres lo considera adecuado. Además, la mayoría desea más formación continua.' },
          { s: 'A', de: 'Dann sollten wir mit der Chefin sprechen, bevor sie das Budget plant.', es: 'Entonces deberíamos hablar con la jefa antes de que planifique el presupuesto.' },
          { s: 'B', de: 'Gute Idee. Ich schreibe ihr gleich eine E-Mail.', es: 'Buena idea. Le escribo un correo enseguida.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Ich arbeite in dieser Firma, ___ ich mein Studium beendet habe.', o: ['bis', 'seit', 'bevor'], a: 1, why: 'Algo que empezó en el pasado y continúa: seit (desde que).' },
        { t: 'mc', q: 'Ich bleibe im Büro, ___ die Arbeit fertig ist.', o: ['seit', 'während', 'bis'], a: 2, why: 'Límite temporal: bis (hasta que) la acción termine.' },
        { t: 'mc', q: 'Ich trinke meinen Kaffee, ___ ich die ersten E-Mails lese. (al mismo tiempo)', o: ['bevor', 'während', 'bis'], a: 1, why: 'Dos acciones simultáneas: während (mientras).' },
        { t: 'mc', q: 'Ich muss noch viel erledigen, ___ ich in den Urlaub fahre.', o: ['bevor', 'seit', 'während'], a: 0, why: 'Primero las tareas, después las vacaciones: bevor (antes de que).' },
        { t: 'mc', q: 'Vor ___ Meeting trinke ich noch schnell einen Kaffee.', o: ['das', 'den', 'dem'], a: 2, why: 'vor + Dativ; Meeting es neutro: vor dem Meeting.' },
        { t: 'mc', q: 'Sie arbeitet ___ drei Jahren in dieser Abteilung.', o: ['bis', 'seit', 'während'], a: 1, why: 'seit + Dativ plural (drei Jahren) con Präsens: lleva tres años y sigue.' },
        { t: 'mc', q: 'Die Statistik zeigt, ___ 70 Prozent der Befragten zufrieden sind.', o: ['ob', 'dass', 'wenn'], a: 1, why: 'Tras zeigen se introduce el contenido con dass.' },
        { t: 'gap', q: 'Ich warte hier, ___ der Chef zurückkommt. (hasta que)', a: ['bis'], why: 'hasta que = bis; el verbo conjugado va al final.' },
        { t: 'gap', q: 'Wir sind viel zufriedener, ___ wir ein neues Büro haben. (desde que)', a: ['seit', 'seitdem'], why: 'Desde que = seit (o seitdem), con el verbo al final.' },
        { t: 'gap', q: 'Sie räumt den Schreibtisch auf, ___ sie nach Hause geht. (antes de que)', a: ['bevor'], why: 'Primero ordena, luego se va: bevor.' },
        { t: 'gap', q: '___ der Besprechung dürfen wir nicht telefonieren. (durante)', a: ['während'], why: 'durante + sustantivo = während + Genitiv (der Besprechung).' },
        { t: 'order', es: 'Desde que tengo un jefe nuevo, estoy mucho más satisfecho.', de: 'Seit ich einen neuen Chef habe, bin ich viel zufriedener.', why: 'Subordinada con seit al inicio: la principal empieza con el verbo (bin ich).' },
        { t: 'order', es: 'Antes de irme a casa apago el ordenador.', de: 'Bevor ich nach Hause gehe, schalte ich den Computer aus.', why: 'bevor + verbo al final (gehe); la principal empieza con el verbo separable: schalte … aus.' },
        { t: 'order', es: 'Mientras trabajo, llama mi jefe.', de: 'Während ich arbeite, ruft mein Chef an.', why: 'während lleva el verbo al final; después de la coma, la principal empieza con el verbo (ruft … an).' },
        { t: 'tr', es: 'Desde que trabajo aquí, estoy más contento.', de: ['Seit ich hier arbeite, bin ich zufriedener.', 'Seitdem ich hier arbeite, bin ich zufriedener.', 'Seit ich hier arbeite, bin ich glücklicher.'], why: '' },
        { t: 'tr', es: 'Antes de la reunión tomo un café.', de: ['Vor der Besprechung trinke ich einen Kaffee.', 'Ich trinke vor der Besprechung einen Kaffee.', 'Vor dem Meeting trinke ich einen Kaffee.'], why: '' },
        { t: 'fix', q: 'Ich muss noch aufräumen, vor ich gehe.', a: ['Ich muss noch aufräumen, bevor ich gehe.'], why: 'vor es una preposición; para introducir una subordinada hace falta bevor.' },
        { t: 'fix', q: 'Ich warte hier, bis kommt der Chef.', a: ['Ich warte hier, bis der Chef kommt.'], why: 'En la subordinada con bis el verbo conjugado va al final.' },
        { t: 'fix', q: 'Während der Meeting habe ich Notizen gemacht.', a: ['Während des Meetings habe ich Notizen gemacht.'], why: 'während + Genitiv: des Meetings (neutro, con -s).' },
        { t: 'match', pairs: [['das Gehalt', 'el sueldo'], ['die Überstunde', 'la hora extra'], ['die Mehrheit', 'la mayoría'], ['kündigen', 'rescindir el contrato'], ['befristet', 'temporal'], ['die Umfrage', 'la encuesta']] }
      ],
      speak: [
        { prompt: 'Cuenta cómo es tu día de trabajo o de estudio (5-6 frases). Usa bevor, während y bis, por ejemplo: qué haces antes de salir, mientras trabajas y hasta cuándo.', model: 'Bevor ich zur Arbeit gehe, trinke ich einen Kaffee und lese die Nachrichten. Während ich im Büro sitze, höre ich manchmal leise Musik. Ich arbeite, bis es sechs Uhr ist. Danach gehe ich nach Hause, weil ich abends Zeit für meine Familie haben möchte. Seit ich flexible Arbeitszeiten habe, bin ich viel entspannter.' },
        { prompt: 'Presenta una encuesta inventada sobre la satisfacción en el trabajo (4-5 frases) con laut einer Umfrage, Prozent, die Hälfte, die Mehrheit o jeder Dritte.', model: 'Laut einer Umfrage sind 68 Prozent der Beschäftigten mit ihrer Arbeit zufrieden. Die Hälfte der Befragten wünscht sich flexiblere Arbeitszeiten. Nur jeder Dritte ist mit dem Gehalt zufrieden. Im Vergleich zum letzten Jahr ist der Anteil der Zufriedenen um drei Prozent gestiegen.' },
        { prompt: 'Para usar en voz alta: habla de qué cambió en tu trabajo desde un momento concreto (4 frases con seit).', model: 'Seit ich im Home-Office arbeite, spare ich viel Zeit. Seit einem Jahr habe ich auch mehr Verantwortung. Seit wir ein neues Team sind, macht mir die Arbeit mehr Spaß. Ich möchte hier bleiben, bis ich eine Beförderung bekomme.' }
      ]
    },
    {
      id: 'b1-11',
      title: 'Das Ding, mit dem ich lebe',
      es: 'Objetos cotidianos y productos: oraciones de relativo',
      goals: ['Formar oraciones de relativo en Nominativ, Akkusativ y Dativ', 'Usar preposición + pronombre relativo (die App, mit der ich lerne)', 'Describir un objeto y nombrar sus funciones', 'Presentar un producto con argumentos publicitarios'],
      grammar: [
        {
          h: 'Oración de relativo: Nominativ y Akkusativ (repaso)',
          p: 'Una oración de relativo <b>describe un sustantivo</b> y va siempre <b>entre comas</b>, con el <b>verbo conjugado al final</b>. El pronombre relativo toma el <b>género y el número</b> del sustantivo al que se refiere (el antecedente), pero su <b>caso</b> depende de la función que tiene <b>dentro</b> de la oración de relativo: ¿es sujeto (Nominativ) o complemento directo (Akkusativ)? Compara: <i>der Kollege, <b>der</b> neben mir sitzt</i> (él es el sujeto) y <i>der Kollege, <b>den</b> ich gut kenne</i> (él es el objeto; el sujeto es ich).',
          table: { head: ['Caso', 'm', 'f', 'n', 'pl'], rows: [['Nominativ', '<b>der</b>', '<b>die</b>', '<b>das</b>', '<b>die</b>'], ['Akkusativ', '<b>den</b>', '<b>die</b>', '<b>das</b>', '<b>die</b>'], ['Dativ', '<b>dem</b>', '<b>der</b>', '<b>dem</b>', '<b>denen</b>']] },
          ex: [
            { de: 'Das ist der Kollege, der neben mir sitzt.', es: 'Ese es el colega que se sienta a mi lado.' },
            { de: 'Die App, die ich benutze, ist kostenlos.', es: 'La app que uso es gratuita.' },
            { de: 'Das Gerät, das auf dem Tisch liegt, gehört meiner Schwester.', es: 'El aparato que está sobre la mesa es de mi hermana.' },
            { de: 'Die Kopfhörer, die ich gekauft habe, sind sehr leicht.', es: 'Los auriculares que compré son muy ligeros.' },
            { de: 'Der Rucksack, den ich letzte Woche gekauft habe, ist wasserdicht.', es: 'La mochila que compré la semana pasada es impermeable.' }
          ],
          tip: 'Solo hay <b>tres formas distintas</b> que debes aprender de más: <b>den</b> (Akkusativ masculino), <b>dem / der / denen</b> (Dativ). El resto coincide con el artículo definido (existe también el Genitiv: <i>dessen, deren</i>, que verás más adelante).'
        },
        {
          h: 'Relativo en Dativ',
          p: 'Si el verbo de la oración de relativo pide un <b>complemento en Dativ</b> (<span class="de">helfen, gehören, gefallen, danken, antworten, schicken + a alguien</span>), el pronombre relativo va en Dativ: <b>dem</b> (m y n), <b>der</b> (f), <b>denen</b> (plural). Fíjate en que el <b>plural</b> es el único caso con forma distinta del artículo (<i>denen</i>, no <i>den</i>). Para decidir el caso, pregunta: ¿qué pide el verbo de la oración de relativo? <i>jemandem helfen → dem</i>.',
          ex: [
            { de: 'Der Kollege, dem ich helfe, kommt aus Spanien.', es: 'El colega al que ayudo es de España.' },
            { de: 'Die Kundin, der ich die Rechnung geschickt habe, hat schon bezahlt.', es: 'La clienta a la que envié la factura ya ha pagado.' },
            { de: 'Das Kind, dem das Fahrrad gehört, wohnt nebenan.', es: 'El niño al que pertenece la bicicleta vive al lado.' },
            { de: 'Die Freunde, denen ich oft schreibe, wohnen im Ausland.', es: 'Los amigos a los que escribo a menudo viven en el extranjero.' },
            { de: 'Wie heißt die Kollegin, der du das Programm gezeigt hast?', es: '¿Cómo se llama la colega a la que le enseñaste el programa?' }
          ],
          tip: 'En español &quot;al que / a la que / a los que&quot; te recuerda que hay un Dativ: <i>el colega <b>al que</b> ayudo → der Kollege, <b>dem</b> ich helfe</i>.'
        },
        {
          h: 'Preposición + pronombre relativo',
          p: 'Cuando el verbo o la expresión lleva una <b>preposición</b>, esta se coloca <b>antes</b> del pronombre relativo (nunca al final como en inglés). La <b>preposición decide el caso</b>: <i>mit, bei, von, aus, nach, zu</i> → Dativ; <i>für, über, um, durch</i> → Akkusativ; <i>in, auf, an</i> → Dativ si responde a ¿dónde? y Akkusativ si responde a ¿adónde? Con verbos con preposición fija (<i>sprechen über + Akk, warten auf + Akk, sich freuen auf/über + Akk</i>) el caso es el de ese verbo.',
          table: { head: ['Preposición', 'Caso', 'Ejemplo'], rows: [['mit, bei, von, zu', 'Dativ', 'die App, <b>mit der</b> ich lerne'], ['für, über, um', 'Akkusativ', 'das Thema, <b>über das</b> wir sprechen'], ['in (¿dónde?)', 'Dativ', 'der Stadtteil, <b>in dem</b> ich wohne'], ['in (¿adónde?)', 'Akkusativ', 'die Stadt, <b>in die</b> ich ziehe'], ['mit (plural)', 'Dativ', 'die Kollegen, <b>mit denen</b> ich arbeite']] },
          ex: [
            { de: 'Die App, mit der ich Deutsch lerne, ist kostenlos.', es: 'La app con la que aprendo alemán es gratuita.' },
            { de: 'Das Thema, über das wir sprechen, ist sehr wichtig.', es: 'El tema del que hablamos es muy importante.' },
            { de: 'Das ist die Firma, bei der mein Bruder arbeitet.', es: 'Esa es la empresa en la que trabaja mi hermano.' },
            { de: 'Der Stuhl, auf dem ich sitze, ist sehr bequem.', es: 'La silla en la que estoy sentado es muy cómoda.' },
            { de: 'Das ist das Gerät, für das ich lange gespart habe.', es: 'Ese es el aparato para el que ahorré mucho tiempo.' },
            { de: 'Die Kollegen, mit denen ich zusammenarbeite, sind sehr nett.', es: 'Los colegas con los que trabajo son muy simpáticos.' }
          ],
          tip: 'Truco en 2 pasos: 1) identifica género y número del sustantivo (<i>die App → f</i>); 2) mira el caso de la preposición (<i>mit → Dativ</i>) y elige la casilla de la tabla: <b>mit der</b>.'
        },
        {
          h: 'Describir un objeto y hacer publicidad',
          p: 'Para describir un objeto combina <b>adjetivos</b> (<span class="de">leicht, robust, praktisch, handlich</span>), <b>materiales</b> y <b>funciones</b>. Para la función usa <span class="de">Man kann damit … + infinitivo</span>, <span class="de">Es ist zum … geeignet</span> o una oración de relativo: <i>ein Gerät, mit dem man … kann</i>. En la publicidad se usa el imperativo de cortesía (<span class="de">Probieren Sie es aus!</span>), frases cortas y la fórmula <span class="de">so … dass</span> para exagerar: <i>so leicht, dass man es kaum spürt</i>. Para mencionar ventajas: <span class="de">Der große Vorteil ist, dass …</span>',
          ex: [
            { de: 'Der Staubsauger ist leicht, handlich und leise.', es: 'La aspiradora es ligera, manejable y silenciosa.' },
            { de: 'Mit diesem Mixer können Sie in wenigen Sekunden einen Smoothie machen.', es: 'Con esta batidora puede preparar un batido en pocos segundos.' },
            { de: 'Dieser Rucksack ist so robust, dass er jahrelang hält.', es: 'Esta mochila es tan resistente que dura años.' },
            { de: 'Das ist eine Lampe, die man mit dem Handy steuern kann.', es: 'Es una lámpara que se puede controlar con el móvil.' },
            { de: 'Probieren Sie es aus und überzeugen Sie sich selbst!', es: '¡Pruébelo y convénzase usted mismo!' }
          ],
          tip: 'Si quieres preguntar por el nombre de un objeto: <i>Wie nennt man das Ding, mit dem man …?</i> es muy útil cuando no recuerdas la palabra.'
        }
      ],
      vocab: [
        { de: 'das Gerät', pl: 'die Geräte', es: 'el aparato', ex: 'Dieses Gerät kann man mit dem Handy steuern.', exes: 'Este aparato se puede controlar con el móvil.' },
        { de: 'die Funktion', pl: 'die Funktionen', es: 'la función', ex: 'Die Uhr hat viele nützliche Funktionen.', exes: 'El reloj tiene muchas funciones útiles.' },
        { de: 'das Produkt', pl: 'die Produkte', es: 'el producto', ex: 'Das Produkt wird in Deutschland hergestellt.', exes: 'El producto se fabrica en Alemania.' },
        { de: 'der Akku', pl: 'die Akkus', es: 'la batería', ex: 'Der Akku hält bei diesem Handy zwei Tage.', exes: 'La batería de este móvil dura dos días.' },
        { de: 'das Material', pl: 'die Materialien', es: 'el material', ex: 'Das Material ist weich, aber sehr stabil.', exes: 'El material es suave pero muy resistente.' },
        { de: 'die Garantie', pl: 'die Garantien', es: 'la garantía', ex: 'Auf das Gerät gibt es zwei Jahre Garantie.', exes: 'El aparato tiene dos años de garantía.' },
        { de: 'der Vorteil', pl: 'die Vorteile', es: 'la ventaja', ex: 'Der größte Vorteil ist der niedrige Preis.', exes: 'La mayor ventaja es el precio bajo.' },
        { de: 'die Werbung', pl: 'die Werbungen', es: 'la publicidad', ex: 'Die Werbung für das neue Handy läuft im Fernsehen.', exes: 'La publicidad del nuevo móvil sale en la televisión.' },
        { de: 'die Anleitung', pl: 'die Anleitungen', es: 'las instrucciones', ex: 'In der Anleitung steht, wie man den Akku auflädt.', exes: 'En las instrucciones pone cómo se carga la batería.' },
        { de: 'benutzen', es: 'usar', note: 'benutzt – benutzte – hat benutzt', ex: 'Ich benutze das Tablet jeden Tag zum Lernen.', exes: 'Uso la tableta todos los días para estudiar.' },
        { de: 'auf|laden', es: 'cargar', note: 'lädt auf – lud auf – hat aufgeladen', ex: 'Ich lade das Handy über Nacht auf.', exes: 'Cargo el móvil durante la noche.' },
        { de: 'funktionieren', es: 'funcionar', note: 'funktioniert – funktionierte – hat funktioniert', ex: 'Der Toaster funktioniert nicht mehr.', exes: 'La tostadora ya no funciona.' },
        { de: 'leicht', es: 'ligero / fácil', ex: 'Der Laptop ist so leicht, dass ich ihn überallhin mitnehme.', exes: 'El portátil es tan ligero que lo llevo a todas partes.' },
        { de: 'robust', es: 'resistente / robusto', ex: 'Eine robuste Tasche hält auch im Alltag viel aus.', exes: 'Un bolso resistente aguanta mucho en el día a día.' },
        { de: 'praktisch', es: 'práctico', ex: 'Ein Klapptisch ist praktisch, wenn man wenig Platz hat.', exes: 'Una mesa plegable es práctica si se tiene poco espacio.' },
        { de: 'handlich', es: 'manejable', ex: 'Die Kamera ist klein und handlich.', exes: 'La cámara es pequeña y manejable.' },
        { de: 'wasserdicht', es: 'impermeable', ex: 'Meine Jacke ist wasserdicht und winddicht.', exes: 'Mi chaqueta es impermeable y cortaviento.' },
        { de: 'hochwertig', es: 'de alta calidad', ex: 'Die Schuhe sind aus hochwertigem Leder.', exes: 'Los zapatos son de cuero de alta calidad.' },
        { de: 'zerbrechlich', es: 'frágil', ex: 'Vorsicht, das Paket ist zerbrechlich!', exes: '¡Cuidado, el paquete es frágil!' },
        { de: 'nützlich', es: 'útil', ex: 'Das ist ein nützliches Werkzeug für jeden Haushalt.', exes: 'Es una herramienta útil para cualquier hogar.' }
      ],
      phrases: [
        { de: 'Das ist ein Gerät, mit dem man … kann.', es: 'Es un aparato con el que se puede …', use: 'describir función' },
        { de: 'Man kann es zum Kochen benutzen.', es: 'Se puede usar para cocinar.', use: 'usos' },
        { de: 'Wie nennt man das Ding, mit dem man Dosen öffnet?', es: '¿Cómo se llama la cosa con la que se abren latas?', use: 'preguntar' },
        { de: 'Das Produkt, das ich meine, ist ziemlich leicht.', es: 'El producto al que me refiero es bastante ligero.', use: 'identificar' },
        { de: 'Der große Vorteil ist, dass es so handlich ist.', es: 'La gran ventaja es que es tan manejable.', use: 'argumentar' },
        { de: 'Wie funktioniert das eigentlich?', es: '¿Cómo funciona esto realmente?', use: 'preguntar' },
        { de: 'Für wen ist das Produkt geeignet?', es: '¿Para quién es adecuado el producto?', use: 'preguntar' },
        { de: 'Probieren Sie es aus und überzeugen Sie sich selbst!', es: '¡Pruébelo y convénzase usted mismo!', use: 'publicidad' },
        { de: 'Das ist die App, über die alle sprechen.', es: 'Es la app de la que todos hablan.', use: 'recomendar' }
      ],
      dialog: {
        title: 'Neue Kopfhörer',
        lines: [
          { s: 'A', de: 'Entschuldigung, ich suche Kopfhörer, die nicht so schwer sind.', es: 'Disculpe, busco unos auriculares que no pesen mucho.' },
          { s: 'B', de: 'Dann sind diese hier genau richtig. Sie sind sehr leicht, und der Akku hält zwanzig Stunden.', es: 'Entonces estos son perfectos. Son muy ligeros y la batería dura veinte horas.' },
          { s: 'A', de: 'Sind sie auch robust? Ich nehme sie jeden Tag mit zum Sport.', es: '¿Son también resistentes? Los llevo todos los días al entrenamiento.' },
          { s: 'B', de: 'Ja, sie sind wasserdicht. Das Modell, das Sie in der Hand halten, ist unser Bestseller.', es: 'Sí, son impermeables. El modelo que tiene en la mano es nuestro más vendido.' },
          { s: 'A', de: 'Mit welcher App kann man sie steuern?', es: '¿Con qué app se pueden controlar?' },
          { s: 'B', de: 'Mit der App, die Sie kostenlos herunterladen können. Damit stellen Sie auch den Klang ein.', es: 'Con la app que puede descargar gratis. Con ella también ajusta el sonido.' },
          { s: 'A', de: 'Gibt es eine Garantie?', es: '¿Hay garantía?' },
          { s: 'B', de: 'Ja, zwei Jahre. Und Kunden, denen sie nicht gefallen, können sie innerhalb von dreißig Tagen zurückgeben.', es: 'Sí, dos años. Y los clientes a quienes no les gusten pueden devolverlos en treinta días.' },
          { s: 'A', de: 'Das klingt praktisch. Ich nehme die schwarzen.', es: 'Suena práctico. Me quedo con los negros.' },
          { s: 'B', de: 'Eine gute Wahl! Das ist das Modell, über das sich die meisten Kunden freuen.', es: '¡Buena elección! Es el modelo con el que la mayoría de los clientes está contenta.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Das ist die App, ___ ich jeden Tag benutze.', o: ['der', 'die', 'das'], a: 1, why: 'App es femenino; es el objeto directo (Akkusativ) en la oración de relativo: die.' },
        { t: 'mc', q: 'Der Kollege, ___ ich helfe, heißt Murat.', o: ['den', 'dem', 'der'], a: 1, why: 'helfen pide Dativ; Kollege es masculino: dem.' },
        { t: 'mc', q: 'Die Kundin, ___ ich die Rechnung geschickt habe, hat noch nicht geantwortet.', o: ['die', 'der', 'den'], a: 1, why: 'Se le envía algo a alguien (Dativ); Kundin es femenino: der.' },
        { t: 'mc', q: 'Die Kollegen, mit ___ ich zusammenarbeite, sind sehr nett.', o: ['denen', 'die', 'den'], a: 0, why: 'mit + Dativ; en plural el pronombre relativo en Dativ es denen.' },
        { t: 'mc', q: 'Das Thema, über ___ wir sprechen, ist wichtig.', o: ['dem', 'das', 'denen'], a: 1, why: 'sprechen über + Akkusativ; Thema es neutro: über das.' },
        { t: 'mc', q: 'Der Stadtteil, in ___ ich wohne, ist ruhig.', o: ['dem', 'den', 'der'], a: 0, why: 'wohnen responde a ¿dónde? (Dativ); Stadtteil es masculino: in dem.' },
        { t: 'mc', q: 'Das ist der Rucksack, ___ ich gestern gekauft habe.', o: ['der', 'dem', 'den'], a: 2, why: 'Objeto directo masculino (Akkusativ): den.' },
        { t: 'gap', q: 'Die Kaffeemaschine, ___ ich gekauft habe, ist leider kaputt.', a: ['die'], why: 'Kaffeemaschine es femenino y objeto directo (Akkusativ): die.' },
        { t: 'gap', q: 'Das ist die Firma, bei ___ ich arbeite.', a: ['der'], why: 'bei + Dativ; Firma es femenino: bei der.' },
        { t: 'gap', q: 'Wie heißt das Werkzeug, mit ___ man Schrauben dreht?', a: ['dem'], why: 'mit + Dativ; Werkzeug es neutro: mit dem.' },
        { t: 'gap', q: 'Die Nachbarn, ___ das Haus gehört, sind verreist.', a: ['denen'], why: 'gehören pide Dativ; en plural: denen.' },
        { t: 'order', es: 'Esta es la app con la que aprendo alemán.', de: 'Das ist die App, mit der ich Deutsch lerne.', why: 'La preposición va antes del relativo (mit der) y el verbo conjugado al final de la subordinada.' },
        { t: 'order', es: 'El colega al que ayudo trabaja en contabilidad.', de: 'Der Kollege, dem ich helfe, arbeitet in der Buchhaltung.', why: 'La oración de relativo (dem ich helfe) se inserta entre comas; después sigue la principal.' },
        { t: 'order', es: 'El tema del que hablamos me interesa mucho.', de: 'Das Thema, über das wir sprechen, interessiert mich sehr.', why: 'über das (Akkusativ neutro) + verbo al final; luego la principal continúa con el verbo.' },
        { t: 'tr', es: 'La app con la que aprendo es gratuita.', de: ['Die App, mit der ich lerne, ist kostenlos.', 'Die App, mit der ich lerne, ist gratis.'], why: '' },
        { t: 'tr', es: 'El colega al que ayudo trabaja en Hamburgo.', de: ['Der Kollege, dem ich helfe, arbeitet in Hamburg.'], why: '' },
        { t: 'fix', q: 'Der Kollege, den ich helfe, ist sehr nett.', a: ['Der Kollege, dem ich helfe, ist sehr nett.'], why: 'helfen pide Dativ: dem, no den.' },
        { t: 'fix', q: 'Das ist die App, mit die ich lerne.', a: ['Das ist die App, mit der ich lerne.'], why: 'mit + Dativ femenino: mit der.' },
        { t: 'fix', q: 'Das Thema, das wir sprechen, ist interessant.', a: ['Das Thema, über das wir sprechen, ist interessant.'], why: 'sprechen necesita la preposición über delante del relativo.' },
        { t: 'match', pairs: [['das Gerät', 'el aparato'], ['der Akku', 'la batería'], ['wasserdicht', 'impermeable'], ['handlich', 'manejable'], ['die Anleitung', 'las instrucciones'], ['zerbrechlich', 'frágil']] }
      ],
      speak: [
        { prompt: 'Describe un objeto que usas todos los días (5-6 frases): cómo es, para qué sirve y por qué lo tienes. Incluye una oración de relativo (der/die/das …) y una con preposición (mit dem/der …).', model: 'Mein Handy ist ein Gerät, das ich jeden Tag benutze. Es ist leicht und handlich, und der Akku hält fast zwei Tage. Die App, mit der ich Deutsch lerne, ist darauf gespeichert. Ich habe es vor zwei Jahren gekauft, und es funktioniert noch immer sehr gut. Es ist das Gerät, ohne das ich kaum leben könnte.' },
        { prompt: 'Haz publicidad de un producto inventado (4-5 frases) con adjetivos, una oración de relativo y un imperativo de cortesía (Probieren Sie …).', model: 'Das ist der Rucksack, der Sie überall begleitet. Er ist leicht, robust und wasserdicht. Mit diesem Rucksack können Sie sogar im Regen wandern, ohne dass Ihre Sachen nass werden. Probieren Sie ihn aus und überzeugen Sie sich selbst!' },
        { prompt: 'Para usar en voz alta: no recuerdas el nombre de un objeto. Descríbelo con una oración de relativo para que alguien te ayude (3-4 frases).', model: 'Wie nennt man das Ding, mit dem man Dosen öffnet? Es ist klein und aus Metall. Das ist das Werkzeug, das in jeder Küche liegt. Ach ja, ein Dosenöffner!' }
      ]
    },
    {
      id: 'b1-12',
      title: 'Guten Appetit!',
      es: 'Comer y cocinar',
      goals: ['Expresar consecuencia con sodass y so … dass', 'Formar sustantivos a partir de verbos (das Essen, die Bestellung, der Anfang, die Fahrt)', 'Explicar expresiones de otras lenguas', 'Describir un plato, recomendarlo y compararlo con otro'],
      grammar: [
        {
          h: 'Consecuencia: sodass y so … dass',
          p: 'Para expresar una <b>consecuencia</b> usa <span class="de">sodass</span> (de modo que, así que) o <span class="de">so + adjetivo/adverbio + dass</span> (tan … que). Ambos introducen una subordinada con el <b>verbo conjugado al final</b>. Con <b>so … dass</b> destacas la <b>intensidad</b> (<i>so laut, dass …</i>); con <b>sodass</b> expresas simplemente el <b>resultado</b> (<i>Der Kurs war gut, sodass ich ihn empfehle</i>). Se escribe en una palabra (<i>sodass</i>), aunque también existe la forma separada <i>so dass</i>. Delante siempre hay una coma.',
          table: { head: ['Estructura', 'Ejemplo', 'Español'], rows: [['<b>so</b> + adj. + <b>dass</b>', 'Es war <b>so</b> laut, <b>dass</b> ich nichts verstanden habe.', 'Hacía tanto ruido que no entendí nada.'], ['<b>so</b> + adv. + <b>dass</b>', 'Er isst <b>so</b> schnell, <b>dass</b> er sich verschluckt.', 'Come tan rápido que se atraganta.'], ['<b>so viel(e)</b> … <b>dass</b>', 'Es gab <b>so viel</b> Essen, <b>dass</b> wir Reste mitnehmen mussten.', 'Había tanta comida que tuvimos que llevarnos sobras.'], ['<b>sodass</b>', 'Der Kurs war sehr gut, <b>sodass</b> ich ihn empfehle.', 'El curso fue muy bueno, de modo que lo recomiendo.']] },
          ex: [
            { de: 'Die Suppe war so heiß, dass ich mich verbrannt habe.', es: 'La sopa estaba tan caliente que me quemé.' },
            { de: 'Der Kuchen war so süß, dass ich nur ein Stück essen konnte.', es: 'El pastel estaba tan dulce que solo pude comer un trozo.' },
            { de: 'Wir haben einen Tisch reserviert, sodass wir nicht warten mussten.', es: 'Reservamos una mesa, de modo que no tuvimos que esperar.' },
            { de: 'Es gab so viel zu essen, dass alle satt wurden.', es: 'Había tanto de comer que todos quedaron llenos.' },
            { de: 'Das Restaurant war voll, sodass wir lange auf einen Platz gewartet haben.', es: 'El restaurante estaba lleno, así que esperamos mucho por un sitio.' }
          ],
          tip: 'En español &quot;tan … que&quot; no cambia el orden del verbo, pero en alemán el verbo se va <b>al final</b>: <i>so laut, dass ich nichts <b>verstanden habe</b></i>. No mezcles: <i>so laut, sodass</i> es incorrecto.'
        },
        {
          h: 'Sustantivos a partir de verbos',
          p: 'El alemán forma muchos sustantivos a partir de verbos. Hay <b>cuatro patrones</b>: (1) el <b>infinitivo como sustantivo</b>, siempre <b>neutro</b>: <i>essen → das Essen</i>; (2) la terminación <b>-ung</b>, siempre <b>femenino</b>: <i>bestellen → die Bestellung</i>; (3) la <b>raíz del verbo</b>, con género que debes aprender: <i>anfangen → der Anfang, fahren → die Fahrt</i>; (4) la terminación <b>-er</b> para la persona que realiza la acción, <b>masculino</b>: <i>fahren → der Fahrer</i>. Si el verbo es separable, el prefijo se queda delante: <i>einkaufen → der Einkauf</i>. Aprende siempre el sustantivo con su artículo.',
          table: { head: ['Verbo', 'Sustantivo', 'Patrón'], rows: [['essen', '<b>das</b> Essen', 'infinitivo (n)'], ['kochen', '<b>das</b> Kochen / <b>der</b> Koch', 'infinitivo / persona'], ['bestellen', '<b>die</b> Bestellung', '-ung (f)'], ['einladen', '<b>die</b> Einladung', '-ung (f)'], ['anfangen', '<b>der</b> Anfang', 'raíz (m)'], ['einkaufen', '<b>der</b> Einkauf', 'raíz (m)'], ['fahren', '<b>die</b> Fahrt', 'raíz (f)'], ['trinken', '<b>das</b> Getränk', 'ge- + raíz (n)']] },
          ex: [
            { de: 'Das Essen in diesem Restaurant ist hervorragend.', es: 'La comida de este restaurante es excelente.' },
            { de: 'Die Bestellung dauert nur zehn Minuten.', es: 'El pedido tarda solo diez minutos.' },
            { de: 'Am Anfang des Abends gab es eine kleine Vorspeise.', es: 'Al principio de la noche hubo un pequeño entrante.' },
            { de: 'Die Fahrt zum Markt dauert eine halbe Stunde.', es: 'El viaje al mercado dura media hora.' },
            { de: 'Vielen Dank für die Einladung zum Abendessen!', es: '¡Muchas gracias por la invitación a cenar!' }
          ],
          tip: 'Regla segura: todo lo que acaba en <b>-ung</b> es <b>femenino</b> (<i>die Bestellung, die Mischung, die Zubereitung</i>), y todo infinitivo convertido en sustantivo es <b>neutro</b> (<i>das Kochen, das Backen</i>).'
        },
        {
          h: 'Explicar expresiones de otras lenguas',
          p: 'Cuando quieres explicar un dicho o una palabra de tu idioma, combina fórmulas fijas con oraciones de relativo y con <b>dass</b>: <span class="de">In meiner Sprache sagt man …</span>, <span class="de">Wörtlich übersetzt bedeutet das …</span>, <span class="de">Das ist ein Ausdruck, den man benutzt, wenn …</span>, <span class="de">Im Deutschen sagt man dazu …</span>, <span class="de">Das entspricht dem deutschen Ausdruck …</span> Compara con español: muchas expresiones no se traducen palabra por palabra y por eso es útil dar el sentido.',
          ex: [
            { de: 'Auf Spanisch sagt man „ser pan comido“, wenn etwas sehr leicht ist.', es: 'En español se dice &quot;ser pan comido&quot; cuando algo es muy fácil.' },
            { de: 'Im Deutschen sagt man dazu: Das ist ein Kinderspiel.', es: 'En alemán se dice: Das ist ein Kinderspiel.' },
            { de: 'Das ist ein Ausdruck, den man benutzt, wenn man etwas nicht versteht.', es: 'Es una expresión que se usa cuando no se entiende algo.' },
            { de: 'Wörtlich übersetzt heißt „Ich verstehe nur Bahnhof“: Ich verstehe nur Estación.', es: 'Traducido literalmente, &quot;Ich verstehe nur Bahnhof&quot; sería: solo entiendo Estación (= no entiendo nada).' },
            { de: 'Das entspricht dem spanischen Ausdruck „no entender ni papa“.', es: 'Equivale a la expresión española &quot;no entender ni papa&quot;.' }
          ],
          tip: 'Para evitar que tu interlocutor se pierda, da siempre <b>tres cosas</b>: la expresión, su significado y una situación donde se usa (<i>wenn …</i>).'
        },
        {
          h: 'Describir, recomendar y comparar platos',
          p: 'Para describir un plato usa verbos como <span class="de">bestehen aus + Dativ</span> (<i>Das Gericht besteht aus Reis und Gemüse</i>), <span class="de">schmecken</span> + adjetivo (<i>Es schmeckt scharf</i>) y adjetivos de sabor. Para <b>recomendar</b> usa <span class="de">Ich empfehle dir …</span>, <span class="de">Probier unbedingt …</span> y <span class="de">Das solltest du probieren.</span> Para <b>comparar</b> usa el <b>Komparativ + als</b> (<i>besser als</i>), <b>so … wie</b> para igualdad y el <b>Superlativ</b> (<i>am besten</i> o <i>das beste Gericht</i>).',
          table: { head: ['Positiv', 'Komparativ', 'Superlativ'], rows: [['gut', 'besser', 'am besten'], ['gern', 'lieber', 'am liebsten'], ['viel', 'mehr', 'am meisten'], ['scharf', 'schärfer', 'am schärfsten'], ['süß', 'süßer', 'am süßesten'], ['lecker', 'leckerer', 'am leckersten']] },
          ex: [
            { de: 'Das Gericht besteht aus Reis, Gemüse und Hähnchen.', es: 'El plato consta de arroz, verduras y pollo.' },
            { de: 'Die Pizza hier schmeckt besser als bei mir zu Hause.', es: 'La pizza de aquí sabe mejor que en mi casa.' },
            { de: 'Die Soße ist so scharf wie das Curry von gestern.', es: 'La salsa es tan picante como el curry de ayer.' },
            { de: 'Das ist das beste Gericht, das ich je gegessen habe.', es: 'Es el mejor plato que he comido jamás.' },
            { de: 'Ich empfehle dir unbedingt den Apfelstrudel zum Nachtisch.', es: 'Te recomiendo sin falta el strudel de manzana de postre.' }
          ],
          tip: 'Con el Superlativ después de un verbo usa <b>am … -sten</b> (<i>Die Suppe schmeckt am besten</i>); delante de un sustantivo usa <b>der/die/das … -ste</b> (<i>die beste Suppe</i>).'
        }
      ],
      vocab: [
        { de: 'die Zutat', pl: 'die Zutaten', es: 'el ingrediente', ex: 'Für dieses Rezept brauchst du nur fünf Zutaten.', exes: 'Para esta receta solo necesitas cinco ingredientes.' },
        { de: 'das Rezept', pl: 'die Rezepte', es: 'la receta', ex: 'Das Rezept habe ich von meiner Oma.', exes: 'La receta me la dio mi abuela.' },
        { de: 'der Topf', pl: 'die Töpfe', es: 'la olla', ex: 'Das Wasser im Topf kocht schon.', exes: 'El agua de la olla ya hierve.' },
        { de: 'die Pfanne', pl: 'die Pfannen', es: 'la sartén', ex: 'Er brät die Zwiebeln in einer heißen Pfanne.', exes: 'Fríe las cebollas en una sartén caliente.' },
        { de: 'das Gewürz', pl: 'die Gewürze', es: 'la especia', ex: 'Zimt ist mein Lieblingsgewürz zum Backen.', exes: 'La canela es mi especia favorita para hornear.' },
        { de: 'die Soße', pl: 'die Soßen', es: 'la salsa', ex: 'Die Soße schmeckt wunderbar zu Nudeln.', exes: 'La salsa sabe de maravilla con la pasta.' },
        { de: 'das Gericht', pl: 'die Gerichte', es: 'el plato (comida)', ex: 'Das Gericht besteht aus Reis und Gemüse.', exes: 'El plato consta de arroz y verduras.' },
        { de: 'der Geschmack', pl: 'die Geschmäcke', es: 'el sabor / el gusto', ex: 'Der Geschmack erinnert mich an meine Kindheit.', exes: 'El sabor me recuerda a mi infancia.' },
        { de: 'der Nachtisch', pl: 'die Nachtische', es: 'el postre', ex: 'Zum Nachtisch gibt es heute Obstsalat.', exes: 'De postre hoy hay macedonia.' },
        { de: 'braten', es: 'freír / asar', note: 'brät – briet – hat gebraten', ex: 'Ich brate das Fleisch ungefähr zehn Minuten.', exes: 'Frío la carne unos diez minutos.' },
        { de: 'kochen', es: 'cocinar / hervir', note: 'kocht – kochte – hat gekocht', ex: 'Am Wochenende koche ich gern für Freunde.', exes: 'Los fines de semana me gusta cocinar para mis amigos.' },
        { de: 'würzen', es: 'sazonar', note: 'würzt – würzte – hat gewürzt', ex: 'Sie würzt die Suppe mit Salz und Pfeffer.', exes: 'Sazona la sopa con sal y pimienta.' },
        { de: 'schneiden', es: 'cortar', note: 'schneidet – schnitt – hat geschnitten', ex: 'Zuerst schneidest du das Gemüse in kleine Stücke.', exes: 'Primero cortas la verdura en trozos pequeños.' },
        { de: 'rühren', es: 'remover', note: 'rührt – rührte – hat gerührt', ex: 'Rühr die Soße bitte langsam um, sonst brennt sie an.', exes: 'Remueve la salsa despacio, por favor, o se pegará.' },
        { de: 'backen', es: 'hornear', note: 'backt – backte – hat gebacken', ex: 'Wir backen am Sonntag einen Kuchen für Oma.', exes: 'El domingo horneamos un pastel para la abuela.' },
        { de: 'schälen', es: 'pelar', note: 'schält – schälte – hat geschält', ex: 'Hast du schon die Kartoffeln geschält?', exes: '¿Ya has pelado las patatas?' },
        { de: 'zu|bereiten', es: 'preparar (comida)', note: 'bereitet zu – bereitete zu – hat zubereitet', ex: 'Das Gericht lässt sich in zwanzig Minuten zubereiten.', exes: 'El plato se puede preparar en veinte minutos.' },
        { de: 'lecker', es: 'rico / sabroso', ex: 'Der Salat war frisch und richtig lecker.', exes: 'La ensalada estaba fresca y realmente rica.' },
        { de: 'scharf', es: 'picante', ex: 'Das Curry war so scharf, dass ich Wasser trinken musste.', exes: 'El curry estaba tan picante que tuve que beber agua.' },
        { de: 'salzig', es: 'salado', ex: 'Die Suppe ist mir ein bisschen zu salzig.', exes: 'La sopa me resulta un poco salada.' },
        { de: 'knusprig', es: 'crujiente', ex: 'Das Brot ist außen knusprig und innen weich.', exes: 'El pan es crujiente por fuera y blando por dentro.' }
      ],
      phrases: [
        { de: 'Es war so lecker, dass ich noch einen Teller bestellt habe.', es: 'Estaba tan rico que pedí otro plato.', use: 'valorar' },
        { de: 'Das Gericht besteht aus …', es: 'El plato consta de …', use: 'describir' },
        { de: 'Zuerst schneidet man …, dann brät man …', es: 'Primero se corta …, luego se fríe …', use: 'explicar receta' },
        { de: 'In meiner Sprache sagt man …, das bedeutet …', es: 'En mi idioma se dice …, eso significa …', use: 'explicar expresión' },
        { de: 'Das entspricht dem deutschen Ausdruck …', es: 'Eso equivale a la expresión alemana …', use: 'comparar idiomas' },
        { de: 'Ich empfehle dir unbedingt …', es: 'Te recomiendo sin falta …', use: 'recomendar' },
        { de: 'Das schmeckt besser als …', es: 'Esto sabe mejor que …', use: 'comparar' },
        { de: 'Das ist das beste Gericht, das ich je gegessen habe.', es: 'Es el mejor plato que he comido jamás.', use: 'superlativo' },
        { de: 'Probier mal, das musst du kosten!', es: '¡Prueba esto, tienes que probarlo!', use: 'invitar a probar' }
      ],
      dialog: {
        title: 'Nach dem Restaurant',
        lines: [
          { s: 'A', de: 'Wie war das Restaurant gestern?', es: '¿Cómo estuvo el restaurante ayer?' },
          { s: 'B', de: 'Super! Das Essen war so gut, dass wir gleich einen Tisch für nächste Woche reserviert haben.', es: '¡Genial! La comida estuvo tan buena que enseguida reservamos una mesa para la próxima semana.' },
          { s: 'A', de: 'Was hast du bestellt?', es: '¿Qué pediste?' },
          { s: 'B', de: 'Ein Gericht, das aus Reis, Gemüse und Garnelen besteht. Es war so scharf, dass mir die Nase gelaufen ist.', es: 'Un plato de arroz, verduras y gambas. Estaba tan picante que me moqueaba la nariz.' },
          { s: 'A', de: 'Ich mag es lieber milder. Gab es auch einen Nachtisch?', es: 'A mí me gusta más suave. ¿Había también postre?' },
          { s: 'B', de: 'Ja, Apfelstrudel. Ich empfehle ihn dir. Man schält die Äpfel, würzt sie mit Zimt, wickelt sie in dünnen Teig und backt sie im Ofen.', es: 'Sí, strudel de manzana. Te lo recomiendo. Se pelan las manzanas, se sazonan con canela, se envuelven en masa fina y se hornean.' },
          { s: 'A', de: 'Klingt einfach. Auf Spanisch sagen wir „ser pan comido“, wenn etwas ganz leicht ist.', es: 'Suena fácil. En español decimos &quot;ser pan comido&quot; cuando algo es muy fácil.' },
          { s: 'B', de: 'Bei uns sagt man dann: Das ist ein Kinderspiel.', es: 'Entre nosotros se dice entonces: Das ist ein Kinderspiel.' },
          { s: 'A', de: 'Dann backe ich dir den Strudel nächste Woche!', es: '¡Entonces te horneo el strudel la semana que viene!' },
          { s: 'B', de: 'Gern! Die Einladung nehme ich sofort an.', es: '¡Con gusto! Acepto la invitación enseguida.' }
        ]
      },
      ex: [
        { t: 'mc', q: 'Es war ___ laut, dass wir uns nicht unterhalten konnten.', o: ['sodass', 'so', 'sehr'], a: 1, why: 'Con adjetivo, la estructura es so + adjetivo + dass.' },
        { t: 'mc', q: 'Der Kurs war sehr gut, ___ ich ihn weiterempfehle.', o: ['sodass', 'damit', 'obwohl'], a: 0, why: 'Resultado de lo anterior: sodass (de modo que).' },
        { t: 'mc', q: 'Das Essen war so scharf, ___ mir die Tränen kamen.', o: ['weil', 'dass', 'wenn'], a: 1, why: 'so + adjetivo pide dass como segundo elemento.' },
        { t: 'mc', q: 'Alle Substantive auf -ung sind ___.', o: ['maskulin', 'neutral', 'feminin'], a: 2, why: 'Los sustantivos con -ung son siempre femeninos: die Bestellung.' },
        { t: 'mc', q: 'Das Gericht ___ aus Reis, Gemüse und Hähnchen.', o: ['besteht', 'enthält', 'macht'], a: 0, why: 'bestehen aus + Dativ = constar de.' },
        { t: 'mc', q: 'Die Pizza hier schmeckt ___ als bei mir zu Hause.', o: ['gut', 'besser', 'am besten'], a: 1, why: 'Comparación con als: Komparativ (besser).' },
        { t: 'mc', q: 'Ich empfehle dir die Suppe. Sie ist ___ Gericht auf der Karte.', o: ['besser', 'das beste', 'gut'], a: 1, why: 'Superlativ delante de un sustantivo: das beste Gericht.' },
        { t: 'gap', q: 'Das Essen war ___ gut, dass ich noch einen Teller bestellt habe. (tan)', a: ['so'], why: 'tan … que = so … dass.' },
        { t: 'gap', q: 'Wir waren sehr müde, ___ wir früh ins Bett gegangen sind. (de modo que)', a: ['sodass', 'so dass'], why: 'sodass expresa el resultado de lo anterior; verbo conjugado al final.' },
        { t: 'gap', q: 'Der Kuchen war so süß, ___ ich nur ein Stück essen konnte.', a: ['dass'], why: 'so + adjetivo se completa con dass y el verbo al final.' },
        { t: 'gap', q: 'Die ___ dauert nur zehn Minuten. (bestellen → sustantivo con -ung)', a: ['bestellung'], why: 'bestellen + -ung = die Bestellung (femenino).' },
        { t: 'order', es: 'Era tan ruidoso que no entendí nada.', de: 'Es war so laut, dass ich nichts verstanden habe.', why: 'so laut, dass + verbo conjugado al final (verstanden habe).' },
        { t: 'order', es: 'La verdura estaba fresca, de modo que la sopa sabía muy bien.', de: 'Das Gemüse war frisch, sodass die Suppe sehr gut schmeckte.', why: 'sodass introduce una subordinada: el verbo conjugado (schmeckte) va al final.' },
        { t: 'order', es: 'El pastel estaba tan dulce que solo pude comer un trozo.', de: 'Der Kuchen war so süß, dass ich nur ein Stück essen konnte.', why: 'En la subordinada con dass, los dos verbos van al final: essen konnte.' },
        { t: 'tr', es: 'Hacía tanto calor que no tenía hambre.', de: ['Es war so heiß, dass ich keinen Hunger hatte.', 'Es war so warm, dass ich keinen Hunger hatte.'], why: '' },
        { t: 'tr', es: 'Reservé una mesa, de modo que no tuvimos que esperar.', de: ['Ich habe einen Tisch reserviert, sodass wir nicht warten mussten.', 'Ich habe einen Tisch reserviert, so dass wir nicht warten mussten.'], why: '' },
        { t: 'fix', q: 'Es war so laut, sodass ich nichts verstanden habe.', a: ['Es war so laut, dass ich nichts verstanden habe.'], why: 'Con so + adjetivo hace falta dass; sodass no se combina con so.' },
        { t: 'fix', q: 'Die Suppe war sehr heiß, dass ich mich verbrannt habe.', a: ['Die Suppe war so heiß, dass ich mich verbrannt habe.'], why: 'Para la consecuencia con dass hace falta so antes del adjetivo, no sehr.' },
        { t: 'fix', q: 'Der Kurs war gut, sodass ich habe ihn empfohlen.', a: ['Der Kurs war gut, sodass ich ihn empfohlen habe.'], why: 'En la subordinada con sodass el verbo conjugado (habe) va al final.' },
        { t: 'match', pairs: [['die Zutat', 'el ingrediente'], ['würzen', 'sazonar'], ['schälen', 'pelar'], ['knusprig', 'crujiente'], ['die Pfanne', 'la sartén'], ['der Nachtisch', 'el postre']] }
      ],
      speak: [
        { prompt: 'Describe una comida que te gustó mucho (5-6 frases): de qué se compone, cómo sabía y qué consecuencia tuvo. Usa so … dass y sodass.', model: 'Letzte Woche habe ich eine Gemüsesuppe gegessen. Sie bestand aus Karotten, Kartoffeln und etwas Ingwer. Die Suppe war so lecker, dass ich einen zweiten Teller genommen habe. Sie war auch so heiß, dass ich zuerst warten musste. Ich habe das Rezept notiert, sodass ich sie bald selbst kochen kann.' },
        { prompt: 'Explica una expresión de tu idioma relacionada con la comida (4-5 frases): di la expresión, su sentido literal y cuándo se usa.', model: 'Auf Spanisch sagt man „ser pan comido“. Wörtlich übersetzt heißt das: Brot gegessen sein. Das ist ein Ausdruck, den man benutzt, wenn etwas ganz leicht ist. Im Deutschen sagt man dazu: Das ist ein Kinderspiel.' },
        { prompt: 'Para usar en voz alta: recomienda un plato o un restaurante a un amigo y compáralo con otro (4 frases).', model: 'Ich empfehle dir unbedingt die Pizza bei Luigi. Sie schmeckt besser als die Pizza im Restaurant neben dem Bahnhof. Der Teig ist außen knusprig und innen weich. Das ist die beste Pizza, die ich je gegessen habe.' }
      ]
    }
  ]
});
