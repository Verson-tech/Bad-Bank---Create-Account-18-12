function AllData(props){              //all data props???                   

    return (
        <Card
          bgcolor="info"
          txtcolor="light"
          header={`BadBank All DATA ${props.name}`}
          // title="CURRENTLY UNAVAILABLE"
          // text="WORK IN PROGRESS"        
          body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />    
      );  
    }

