import {QuoteList}from './QuoteList.js'
const Quote = ({Quotes,calfunc})=>{

    // calfunc(20)

    const style = {
        height:"100%",
        padding:"50",
        color:"black",
    
    }
        return(
        
        <div className="body" style={style}>
            <h1>List Of Quotes</h1>
            <table className="table table-bordered bg-white shadow">
                <tr>
                    <th>S/N</th>
                    <th>Text</th>
                    <th>Author</th>
                </tr>
                
            {
                Quotes.map(function(Quote){
                    return(
                        <QuoteList Quote={Quote}/>
                    )
                })
            }
      
            </table>

            <button className="btn btn-warning btn-sm mb-3" onClick={()=>{calfunc(20)}}>Click Me</button>
        </div>
        
        
        
        )
        
        }
        export default Quote;