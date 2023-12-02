import Article from './../../components/article/article'

function BerufText(props){
    if(props.topic === "Berufsabend"){
        return <Article>
        <h1>Berufsabend</h1>
        <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas
  repellendus quasi eos. Autem, non quaerat eveniet ipsam tenetur eos quas id in
  voluptatum suscipit cupiditate. Magnam suscipit animi cum non cumque quos quod
  consectetur ipsum corrupti placeat numquam, neque laudantium accusantium
  praesentium accusamus voluptates quae quia inventore nisi rem.
</p>
    </Article>
    }
    if(props.topic === "meine Stärken"){
        return <Article>
        <h1>Meine Stärken</h1>
        <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas
  repellendus quasi eos. Autem, non quaerat eveniet ipsam tenetur eos quas id in
  voluptatum suscipit cupiditate. Magnam suscipit animi cum non cumque quos quod
  consectetur ipsum corrupti placeat numquam, neque laudantium accusantium
  praesentium accusamus voluptates quae quia inventore nisi rem.
</p>
    </Article>
    }
    if(props.topic === "meine Schwächen"){
    return <Article>
        <h1>Meine Shwächen</h1>
        <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas
  repellendus quasi eos. Autem, non quaerat eveniet ipsam tenetur eos quas id in
  voluptatum suscipit cupiditate. Magnam suscipit animi cum non cumque quos quod
  consectetur ipsum corrupti placeat numquam, neque laudantium accusantium
  praesentium accusamus voluptates quae quia inventore nisi rem.
</p>
    </Article>
    }
}
export default BerufText