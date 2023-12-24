import Header from './../../components/header'
import Timeline from './timeline/timeline'
const events = [
    { date: new Date('2023-9-18'), title: 'Einführung', link:"Einführung" },
    { date: new Date('2023-11-2'), title: 'Fehler bei Dokumentarfilmen', link:"Fehler20%bei20%Dokumentarfilmen" },
    { date: new Date('2023-11-9'), title: '"Fake documentary"', link:"Fake20%documentary" },
    { date: new Date('2023-11-16'), title: 'Übungsfilm Planung', link:"ubungsfilm20%Planung" },
    { date: new Date('2023-11-30'), title: 'Übungsfilm drehen', link:"ubungsfilm20%drehen" },
    { date: new Date('2023-12-14'), title: 'Übungsfilm drehen (2)', link:"ubungsfilm20%drehen20%(2)" },
    { date: new Date('2023-12-21'), title: 'Workshop an der HFF', link:"Workshop20%an20%der20%HFF" },
  ];

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