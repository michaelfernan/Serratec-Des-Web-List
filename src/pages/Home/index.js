import { Adds } from "../../components/Adds";
import { addArray } from "../../utils/adds";
import { Container, Content } from "./styled";

export function Home() {
    return (
        <Container>            
               <Content>            
              
                {addArray.map(add => {
                    return (
                         <Adds key={add.id}  info={add}/>
                    )
                })}             
              
            </Content>        
        </Container>
    )
}



  
  
 
