import Article from './../../components/article/article'
import Header from './../../components/header'

function FilmprojektText(props){
    return <div>
        <Header 
        article={true}
        title={null}
        link1="/" 
        link2="/berufskunde"
        link1Title="Main page"
        link2Title="Berufskunde"
        ></Header>
        <Article>
        {
     (() => {
      if (props.topic === 'Einführung') {
        return <div>
            <h1>Einführung</h1>
            <p>Im Unterricht haben wir uns einen Film namens “Und die sind toll” angeschaut. Es ging um eine Frau namens Frederika, die eine Menge Haustiere hat.</p>
            <p>Der Film hat mir wirklich gut gefallen und die folgenden Aspekte will ich auch in meinem Dokumentarfilm haben:</p>
            <ul>
                <li>Es wurde mit einer Smartphone-Kamera gefilmt. Mir wurde dadurch klar, dass die Qualität des Film nicht von dem Preis der Kamera abhängt.</li>
                <li>Langsamer Aufbau: Im Laufe des Films erfährt man immer ein bisschen mehr von Frederika und ihre Tiere. Am Anfang ist sie eine normale unbekannte Frau und am Ende versteht man, was sie besonders macht.</li>
                <li>Schöne Kinematographie: die Aufnahmen und Kamerawinkel haben sehr gut das Leben von Frederika illustriert und haben zum dokumentarischen Erzählen beigetragen.</li>
                <li>Obwohl es im einem Haus voller Tiere gefilmt wurde, hatte der Ton eine sehr hohe Qualität</li>
            </ul>
            

        </div>;
      } 
      else if(props.topic === 'Übungsfilm Planung') {
        return <div>
          <h1>Übungsfilm Planung</h1>
          <p>Heute haben wir angefangen, einen Übungsfilm zum Thema Geschwister zu machen. Wir haben nur Ideen gesammelt, wie wir dieses Thema in einem fünf Minuten langen Film darstellen könnten.</p>
          <p>Unten ist das Intro für den Film, das ich ausgedacht habe: Zuerst wird die Wörterbuch-Definition eines Geschwisters angezeigt und danach wird die größere Bedeutung dahinter u.a. durch Interviews dargestellt.</p>
          <img alt="failed to load" style={{width:"100%"}} src={require('../../images/übungsFilmMeineIdee.jpg')}></img>
          <p>Nachdem alle Gruppenmitglieder ihre Ideen mitgeteilt haben, haben wir uns für Folgendes entschieden:</p>
          <img alt="failed to load" style={{width:"80%"}} src={require('../../images/übungsFilmAlleIdeen.png')}></img>
          <p>Der Film eröffnet mit einem Interview, in dem die Person schlechte Sachen über ihre Geschwister sagen (der Zuschauer weiß allerdings noch nicht, dass es um Geschwister geht). Während wird ein B-Roll angezeigt von den Nachteilen, Geschwister zu haben (z.B. sie lügen, sie klauen essen, sie lassen das Haus unordentlich). Irgendwann gibt es eine Wende, in der jemand, die keine Geschwister hat, über seine Begierde nach einem Geschwister redet.</p>
          <p>Ich habe den ersten Teil der Idee als Story Board konkretisiert:</p>
          <img alt="failed to load" style={{width:"100%"}} src={require('../../images/FilmIdeeStoryBoard.png')}></img>
          <p>Dann kommt der zweite Teil des Films, in dem die andere Seite gezeigt wird. Es werden positive Situationen zwischen Geschwister gezeigt. Somit wird es deutlich, dass sie sowohl Nach- als auch Vorteile haben.</p>
        </div>;
      }
      else if(props.topic === 'Fehler bei Dokumentarfilmen'){
        return <div>
        <h1>Fehler bei Dokumentarfilmen</h1>
        <p>Heute haben wir zwei Filme angeschaut: einer über einen BISS-Magazin Verkäufer und einer Basketball-Verein in München. Beide Filme haben mir aus ähnlichen Gründen nicht gut gefallen.</p>
        <ol>
          <li>Ton: In beiden Fällen war der Ton nicht sehr sanft im Laufe des Films. Manchmal wurde es plötzlich lauter oder leiser, was ich als Zuschauer unangenehm fand.</li>
          <li>Interviews: In beiden Filmen wurden Interviews mit der Person(en) geführt. Die interviewte Person sah aber nervös aus, vor der Kamera zu stehen und konnte nicht gut ihre Ideen äußern.</li>
          <li>Erzählen: Die Menge an Information, die ich als Zuschauer über das Thema des Dokumentarfilms weiß, soll wie in Und die sind toll langsam und konstant steigen. In den Filmen, die wir uns heute angeschaut haben, erfuhr man an manchen Stellen plötzlich sehr viel und der Film wurde danach langweilig, da man nichts mehr zu erfahren hatte. Es ist im Film wichtig, dass die Zuschauer immer ein bisschen mehr Informationen bekommen, aber es sollte nicht zu viel auf einmal verraten werden, damit der Betrachter ständig mehr erfahren möchte und somit bis zum Ende anschaut.</li>
        </ol>
        </div>
      }
      else if(props.topic === '"Fake documentary"'){
        return <div>
        <h1>"Fake documentary"</h1>
        <p>Zwei Dokumentarfilme, die wir heute angeschaut haben, haben mich sehr interessiert: 9 Kapitel für Ben und Finow. Diese beiden Filme waren sogenannte “fake” Dokumentarfilme. Das heißt, sie haben das Dokumentarformat, erzählen aber keine wahre Geschichte.</p>
        <p>Diese Filme haben mich inspiriert, kreativ in meinem Dokumentarfilm zu sein, anstatt einfach die normalen Standards als richtig anzunehmen.</p>
        <p>Anschließend haben wir uns einen sehr professionellen Film über Break-Dancing angeschaut, was ein riesiger Kontrast zu 9 Kapitel für Ben und Finow waren. Ich glaube, dass es technisch sehr schwierig sein wird, einen normalen Dokumentarfilm zu drehen, während ein “fake” Dokumentarfilm viel kreativer sein kann und ist technisch und logistisch gesehen sogar einfacher.</p>
        </div>
      }
      else if(props.topic === 'Übungsfilm drehen'){
        return <div>
        <h1>Übungsfilm drehen</h1>
        <p>Heute haben wir weiter an unserem Übungsfilm über Geschwister gearbeitet. Wir haben das Mikrofon in das Handy, welches wir als Kamera benutzen, reingesteckt und haben dann das Handy in den Gimbal installiert. Wir haben sehr lange gebraucht, bis der Gimbal richtig zum Laufen gebracht wurde (ca. 30 min). Das lag leider daran, dass das Gewicht des Mikrofon-Kabels das Handy dauernd in eine Richtung kippte. Nachdem wir das entdeckt haben, mussten wir den Kabel während der Aufnahme leicht hochheben, damit er nicht den Gimbal beeinflusst. Beim nächsten Mal sollten wir einfach die Lehrkraft fragen, warum das Gerät nicht funktioniert. Viel besser wäre es auch gewesen, wenn die Lehrkraft selbst Hilfe angeboten hätte. Sie war aber zu der Zeit nicht im Raum.</p>
        <p>Weil wir am Ende durch Ablenkungen und technische Probleme nicht viel mehr Zeit hatten, konnten wir nur die Interviews für den Anfang des Filmes machen. </p>
        <div className='interviews' style={{display:"flex"}}>
        <img alt="failed to load" style={{width:"50%"}} src={require('../../images/FilmInterview1.png')}></img>
        <img alt="failed to load" style={{width:"50%"}} src={require('../../images/FilmInterview2.png')}></img>
        </div>
        </div>
      }
      else if(props.topic === 'Übungsfilm drehen (2)'){
        return <div>
        <h1>Übungsfilm drehen</h1>
        <p>Heute haben wir weiter an unserem Übungsfilm über Geschwister gearbeitet. Wir haben das Mikrofon in das Handy, welches wir als Kamera benutzen, reingesteckt und haben dann das Handy in den Gimbal installiert. Wir haben sehr lange gebraucht, bis der Gimbal richtig zum Laufen gebracht wurde (ca. 30 min). Das lag leider daran, dass das Gewicht des Mikrofon-Kabels das Handy dauernd in eine Richtung kippte. Nachdem wir das entdeckt haben, mussten wir den Kabel während der Aufnahme leicht hochheben, damit er nicht den Gimbal beeinflusst. Beim nächsten Mal sollten wir einfach die Lehrkraft fragen, warum das Gerät nicht funktioniert. Viel besser wäre es auch gewesen, wenn die Lehrkraft selbst Hilfe angeboten hätte. Sie war aber zu der Zeit nicht im Raum.</p>
        <p>Weil wir am Ende durch Ablenkungen und technische Probleme nicht viel mehr Zeit hatten, konnten wir nur die Interviews für den Anfang des Filmes machen. </p>
        <p>Ich habe z.B. die Idee für den unteren Kamera-Winkel, in welchem die Kamera mit der Figur direkt neben den Füßen läuft. </p>
        <img alt="failed to load" style={{width:"100%"}}src={require('../../images/coolFootShot.jpg')}></img>
        <p>Den unteren “Over-the-shoulder shot” fand ich auch sehr cool, weil es den Zuschauer sehr nah an die Figur bringt.</p>
        <img alt="failed to load" style={{width:"100%"}}src={require('../../images/overShoulderShot.jpg')}></img>
        <p>Das untere Bild zeigt, wie zwei Geschwister miteinander ein Videospiel spielen. Ich finde es cool, wie die Kamera vor den Knien der beiden Brüder steht, denn es wird dadurch deutlich, wie gemütlich sie sitzen.</p>
        <img alt="failed to load" style={{width:"100%"}}src={require('../../images/gamingShot.jpeg')}></img>
        </div>
      }
      else if(props.topic === "Workshop an der HFF"){
        return <div>
          <h1>Workshop an der HFF</h1>
          <p>Die P-Seminar Gruppe ist heute zu einer Veranstaltung an der HFF (Hochschule für Fernsehen und Film) gegangen, in welcher wir uns einen Dokumentarfilm von einem Studenten angeschaut haben.</p>
          <p>Der Film ging um einen Mann namens Adolf Häberli, der in Saint Moritz lebt, ein luxuriöser Alpenort in der Schweiz. Er wohnt in einem riesigen Haus kurz vor dem Einsturz. Zwischen Bergen von Zeitungspapier tippt er auf eine Schreibmaschine: der Querulant Häberli kämpft in hunderten Briefen gegen den Politapparat der Gemeinde, der sein Haus zerstören und aus dem Grundstück Profit schlagen wollen. Zunächst haben wir uns den Film angeschaut und danach Fragen an den Regisseur gestellt.</p>
          <h3>Das ist mir im Film aufgefallen</h3>
          <ul>
            <li>Der Film hat einen sehr mysteriösen Anfang. Es ist unklar, warum dieser Man in einem Berg von Zeitungspapieren liegt; nach und nach erhält der Zuschauer aber mehr Information. Dieser Muster ist an mehreren Stellen des Films erkennbar. Im Laufe des Filmes taucht immer ein Rätsel bzw. etwas verwirrendes auf, das langsam erklärt und in einen Zusammenhang gestellt wird. Auf diese Weise will der Zuschauer mehr erfahren und den Film weiter schauen. Beispielsweise hat der Häberli sich einmal als Sikh verkleidet, was mich komplett verwirrt hat. In den 5 Minuten danach wurde aber gezeigt, wie er zu einer Art Kotümparty ging.</li>
            <li>Ein weiteres Mittel, um sicherzustellen, dass der Zuschauer bis zum Ende zuschaut, ist der Kontrast. Es wurde sehr oft den Kontrast zwischen den Meinungen von Häberli und den anderen in der Gemeinde verdeutlicht oder zwischen dem Chaos des Hauses und dem Luxus von Saint Moritz. Dadurch entstand immer ein bisschen Überraschung, die mich neugierig gemacht hat.</li>
            <li>Die Aufnahmen in diesem Film wurden durch Techniken wie Symmetrie und die Drittel-Regel wirklich schön gemacht. </li>
            <li>Die Musik sowie der Ton haben mir auch sehr gut gefallen. Die Musik im Film haben immer sehr gut zu der aktuellen Situation gepasst. Als der Häberli Am Anfang in einem Berg aus Zeitungspapier lag, war die Musik ein leichter abgehackter Jazz, welcher eine mysteriöse Stimmung vermittelt hat. Manchmal gab es auch lange Stellen im Film, an denen es einfach still war (außer der Geräuscheffekte). Dadurch kann der Film tief atmen, sozusagen, was ein bisschen Ruhe während des Chaos von Häberlis Leben vermittelt.</li>
          </ul>
          <h3>Das habe ich während der Besprechung des Films gelernt</h3>
          <ul>
            <li>Man muss keine genaue Struktur vom Film vor dem Drehen haben. Anscheinend hat der Regisseur einfach gedacht, dass Häberlis Geschichte “filmwert” ist und erst beim Bearbeiten wurde festgestellt, wie der Film strukturiert wurde.</li>
            <li>Obwohl Dokumentarfilme die Realität erzählen soll, ist die Planung genauso wichtig wie bei Spielfilmen. Der Regisseur musste Häberli mitteilen, wann er durch die Straße soll, sodass der Kamera-Setup fertig ist.</li>
            <li>Es wurde mir auch klar, dass der Film nicht 100% der Realität entsprechen soll. An einer Stelle des Films z.B. hat der Regisseur Häberli gefragt, ob er sich nochmal umziehen kann, um eine bessere Aufnahme zu bekommen. Es gibt keine Filmpolizei, die entscheidet, ob etwas die Grenze zwischen Realität und Geschichte überschreitet, sondern man muss für seinen eigenen Film selber entscheiden, wie viel Geschichte und wie viel Realität es geben soll.</li>
          </ul>
        </div>
      }
    })()
  }
        </Article>
    </div>
}
export default FilmprojektText