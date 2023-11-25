import Header from './../../components/header'
import Timeline from './../../components/timeline/timeline'
function Filmprojekt(){
    return <div>
        <Header
        title="Filmprojekt"
        link1="/"
        link2="/berufskunde"
        link1Title="Main page"
        link2Title="Berufskunde"
        ></Header>
        <Timeline></Timeline>
    </div>
}
export default Filmprojekt;