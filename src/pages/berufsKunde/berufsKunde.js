
import Header from './../../components/header'
import Grid from './grid/grid'
import Block from './grid/block'

function Berufskunde(){
    return <div>
        <Header 
        title="Berufskunde" 
        link1="/" 
        link2="/filmprojekt"
        link1Title="Main page"
        link2Title="Filmprojekt"
        ></Header>
        <Grid>
            <Block title ="My strengths" ></Block>
            <Block title ="My weaknesses" ></Block>
            <Block title ="Berufsabend" ></Block>

        </Grid>
    </div>

}
export default Berufskunde