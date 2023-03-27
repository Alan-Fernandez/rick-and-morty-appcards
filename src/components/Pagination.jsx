import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () =>{
        onPrevious();
    };

    const handleNext =()=>{
        onNext();
    };

  return (
    <div className="container pb-5">
        <nav>
            <ul className='pagination justify-content-center'>
                { prev ? (
                <li className='page-item'>
                    <button className='page-link text-nowrap bg-body-secondary border bg-primary text-bla '  onClick={handlePrevious}>
                        Previous
                    </button>
                </li>
                ) : null}

                {next ? (
                <li className='page-item'>
                    <button className='page-link text-nowrap bg-body-secondary borderp'  onClick={handleNext}>
                        Next
                    </button>
                </li>
                ) : null}
            </ul>
        </nav>
    </div>
  );
}

export default Pagination
