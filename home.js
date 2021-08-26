function Home(){
  return (
    <Card
      bgcolor="info"
      txtcolor="light"
      header="BadBank"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
