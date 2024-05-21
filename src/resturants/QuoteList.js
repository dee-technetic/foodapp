export const QuoteList = ({Quote})=>{



    return(
    
                    <tr>
                     <td>{Quote.sn}</td>   
                    <td>{Quote.text}</td>
                    <td>{Quote.author}</td>
                    </tr>
                )
      
    
    
    
    }