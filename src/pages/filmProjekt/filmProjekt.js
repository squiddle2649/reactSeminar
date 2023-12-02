import Header from './../../components/header'
import Timeline from './timeline/timeline'
const events = [
    { date: new Date('2023-9-18'), title: 'Und die sind toll' },
    { date: new Date('2023-11-2'), title: 'P-Seminar Stunde' },
  ];
window.filmEvents = events.map((i)=>(i.title))
function Filmprojekt(){
      
    return <div>
        <Header
        title="Filmprojekt"
        link1="/"
        link2="/berufskunde"
        link1Title="Main page"
        link2Title="Berufskunde"
        ></Header>
        <Timeline
            events={events}
        ></Timeline>
    </div>
}
export default Filmprojekt;