
import Header from './../../components/header'
import Grid from './grid/grid'


function Berufskunde(){
    const titles = ["Berufsabend", "meine Schwächen", "meine Stärken"]
    return <div>
        <Header 
        title="Berufskunde" 
        link1="/" 
        link2="/filmprojekt"
        link1Title="Main page"
        link2Title="Filmprojekt"
        ></Header>
        <Grid titles = {titles}>
        </Grid>
    </div>

}
export default Berufskunde