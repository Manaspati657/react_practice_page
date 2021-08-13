import Card from "./Card"


const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Our Services </h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                
                <Card title="Web Devlopment"/>
                <Card title="App Devlopment"/>
                <Card title="Software Devlopment"/>
                <Card title="Digital Marketing"/>
                <Card title="Andriod"/>
                <Card title="Marketing"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
