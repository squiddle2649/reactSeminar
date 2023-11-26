import Header from './../../components/header'
import Timeline from './timeline/timeline'
function Filmprojekt(){
    const events = [
        { date: new Date('2023-9-18'), title: 'Und die sind toll' },
        { date: new Date('2023-04-10'), title: 'Event 2' },
        { date: new Date('2023-8-05'), title: 'Event 3' },
      ];
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