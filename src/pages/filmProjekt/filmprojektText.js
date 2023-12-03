import Article from './../../components/article/article'
import Header from './../../components/header'

function FilmprojektText(props){
    return <div>
        <Header 
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
      } else {
        return <p>not Einführung</p>;
      }
    })()
  }
        </Article>
    </div>
}
export default FilmprojektText