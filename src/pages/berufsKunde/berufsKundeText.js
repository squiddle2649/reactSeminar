import Article from './../../components/article/article'
import Header from './../../components/header'

function BerufText(props){
    return <div>
    <Header 
    title={null}
    link1="/" 
    link2="/filmprojekt"
    link1Title="Main page"
    link2Title="Filmprojekt"
    ></Header>
    <Article>
    {
 (() => {
  if (props.topic === 'Berufsabend') {
    return <div>
        <h1>Berufsabend</h1>
        <p>Als erstes habe ich mich entschieden, von dem Beruf eines Softwareentwicklers zu hören, der auch eine Firma gegründet hat. Das erste, was mich an der Softwareentwicklung begeistert hat, ist, dass die Ausbildung für den meisten nicht besonders lang dauert, weil die Nachfrage nach Entwicklern so hoch ist. Es ist anscheinend einfach, einen guten Job zu finden, ohne z.B. eine Masterarbeit zu schreiben. Das fand ich interessant, weil ich mich viel mehr für die Praxis interessiere als für theoretische Konzepte, die man oft in der Ausbildung lernt. 
Eine andere große Lehre von diesem Berufsveranstaltung ist, wie man sich für einen Job entscheiden soll: uns wurde gesagt, dass nicht nur die Aufgaben des Jobs berücksichtigt werden sollen, sondern auch die Personen, mit denen man arbeiten wird. Daran hatte ich zuvor nie gedacht und ich werde jetzt versuchen, bei der Berufskunde nicht so spezifisch zu denken, weil manchmal die Mitarbeiter tolle Personen sind, auch wenn die Aufgaben auf dem ersten Blick nicht ganz passend aussehen.
Ein weiterer Grund für mein Interesse an dem Beruf dieser Person ist, dass er seine eigene Firma gegründet hat und das würde ich in meiner Zukunft ebenfalls machen. Allerdings wusste ich zuvor nicht, dass es so viele rechtliche Herausforderungen gibt, wenn man ein Gewerbe gründen möchte. Es müssen z.B. Patente angemeldet werden, eine Gesellschaftsform für das Unternehmen muss gewählt werden, Bilanzen müssen erstellt werden, etc. Vorher dachte ich, dass die Gründung eines Unternehmens eine anspruchsvolle und spannende Aufgabe war, aber anscheinend kann dieses Verfahren auch sehr langweilig und bürokratisch sein.
</p>
        <p>Anschließend habe ich vom Beruf eines Raumfahrtingenieurs gehört. Uns wurde erzählt, dass man überall auf der Welt als Ingenieur arbeiten kann, weil es sich dabei um internationale Fähigkeiten handelt. Das hat mein Interesse am Beruf interessiert, denn ich habe einen internationalen Hintergrund und kann sehr gut Englisch sprechen. Was sich nicht besonders gut angehört hat ist, dass man sehr gut Mathe und Physik können muss, um Ingenieur zu werden. Ich interessiere mich zwar für diese beiden Fächer, bin aber nicht so gut darin. Außerdem werden die Themen im Studium noch komplizierter, auch wenn man (wie uns der Ingenieur erzählt hat) gute Noten im Abitur schreibt. Ein weiterer Aspekt des Ingenieurberufs, der mir nicht gefiel, war, dass die meisten Arbeitsplätze für Ingenieure in sehr großen Unternehmen mit sehr großen Projekten angesiedelt sind. Das bedeutet, dass der einzelne Arbeitnehmer nur ein sehr kleiner Teil eines großen Projekts ist. Alle Prozesse verlaufen also sehr langsam und es ist schwierig, Änderungen vorzunehmen, da man wenig Kontrolle hat. Ich persönlich fühle mich motiviert, wenn ich in der Lage bin, meinen Beitrag zu einem Projekt klar zu erkennen, daher ist es vielleicht nicht die beste Idee für mich, als Ingenieur in einem großen Unternehmen zu arbeiten.
</p>
    </div>;
  } 
  if(props.topic === 'meine Stärken') {
    return <div>
    <h1>Meine Stärken</h1>
    <p>lisuefhsufhsieufhs </p>
</div>;}
  if(props.topic === 'meine Schwächen') {
    return <div>
    <h1>Meine Schwächen</h1>
    <p>I am a creeeeeep</p>
</div>;}
})()
}
    </Article>
</div>
    
}
export default BerufText