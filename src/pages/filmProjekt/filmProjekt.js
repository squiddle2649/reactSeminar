import Header from './../../components/header'
import Timeline from './timeline/timeline'
function Filmprojekt(){
    const events = [
        { date: new Date('2023-9-18'), title: 'Und die sind toll' },
        { date: new Date('2023-11-2'), title: 'P-Seminar Stunde' },
        { date: new Date('2024-3-15'), title: 'filming day' },

        { date: new Date('2024-7-2'), title: 'the end' }

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