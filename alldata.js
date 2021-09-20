function AllData(props){              //all data props???                   

    return (
        <Card
          bgcolor="info"
          txtcolor="light"
          header={`BadBank All DATA  ${props.information}`}
          // title="CURRENTLY UNAVAILABLE"
          // text="WORK IN PROGRESS"        
          body={(<> <img src="bank.png" className="img-fluid" alt="Responsive image"/><br /><button
          type="submit"
          className="btn btn-light"  
          onClick={props} 
        >                                           
          Get All Data{" "}                      
        </button></>)}
        />    
      );  
    }

    const information = <AllData info="Hello" />;
    ReactDom.render(
      information,
      document.getElementById('root')
    )

        // 1) added a button
        // 2