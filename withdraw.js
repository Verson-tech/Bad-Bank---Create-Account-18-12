function Withdraw(){

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  
  const [depositAmount, setName]    = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function digitalInput(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(depositAmount);
    if (!digitalInput(depositAmount,     'This feature is currently unavailable (WIP)'))     return;
        ctx.users.push({depositAmount,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
      setShow(true);
  }; 
    return(
    <Card
    bgcolor="info"
    txtcolor="light"
    header=" Balance"
    status={status}
    body={show ? (  
            <>
           
            Withdraw amount<br/>
            <input type="number" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw </button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="form-control"  data-toggle="tooltip" data-placement="bottom" title="Proceed to adding another account" onClick={clearForm}>Add another account</button>
            </>
          )}
  />
    )
          }
