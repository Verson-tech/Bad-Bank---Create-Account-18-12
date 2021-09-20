function AllData(props){              //all data props???                   

    return (
        <Card
          bgcolor="info"
          txtcolor="light"
          header={`BadBank All DATA <button ${props}`}
          // title="CURRENTLY UNAVAILABLE"
          // text="WORK IN PROGRESS"        
          body={(<> <img src="bank.png" className="img-fluid" alt="Responsive image"/><br /><button
          type="submit"
          className="btn btn-light"  
          onClick={props} 
        >                                           
          AllData{" "}                      
        </button></>)}
        />    
      );  
    }

    // added a button