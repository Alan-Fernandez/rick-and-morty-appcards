import React,{Fragment} from 'react'

const Characters = ({ characters }) => {
  return (
    <div className="container">
        <div className='row '>
          {
            characters.map((item, index)=> (
              <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>

                  <div className='card  bg-warning-subtle' style={{minWidth: "200px"}}>
                      <img src={item.image} alt="character" />
                      <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <hr/>
                        <p className="card-text">Species: {item.species}</p>
                        <p className="card-text">Location: {item.location.name}</p>
                      </div>
                  </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default Characters
