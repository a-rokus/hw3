import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";

export default function FeaturedItem(props) {
    const [state, setState] = useState("Show")
    return <Card style={{margin:"30rem", alignSelf:"center", padding:"1rem"}}>
        {/* 2. Display Featured Item */}
        <Card.Img id={props.name} src={props.img} alt={props.name} style={{width:"90%", height:"auto", alignSelf:"center"}}/>
        <h1>{props.name}</h1>
        <h2>${props.price} per unit</h2>
        <p>{props.description}</p>

        {/* 3. Add Button */}
        <Button variant="secondary" onClick={() => {
            (state === 'Show' ? setState('Hide') : setState('Show'));
        }}>{state} Nutrition Facts</Button>

        {/* 4. Show Nutrition Facts */}
        {/*} Display table if toggled */}
        {state === "Hide" ? (
            <Table>
                <thead>
                    <tr>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Carbohydrates</th>
                        <th>Protein</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.nutrition.calories}</td>
                        {props.nutrition.fat ? <td>{props.nutrition.fat}</td> : <td>0g</td>}
                        {props.nutrition.carbohydrates ? <td>{props.nutrition.carbohydrates}</td> : <td>0g</td>}
                        {props.nutrition.protein ? <td>{props.nutrition.protein}</td> : <td>0g</td>}
                    </tr>
                </tbody>
            </Table>
        ) : <Table></Table>}

    </Card>
}