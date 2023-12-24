
import Header from './../../components/header'
import Grid from './grid/grid'


const berufTitles = ["Berufsabend", "meine Schwächen", "meine Stärken","New item"]
function Berufskunde(){
    return <div>
        <Header 
        title="Berufskunde" 
        link1="/" 
        link2="/filmprojekt"
        link1Title="Main page"
        link2Title="Filmprojekt"
        ></Header>
        <Grid titles = {berufTitles}>
        </Grid>
    </div>

}
export default Berufskunde