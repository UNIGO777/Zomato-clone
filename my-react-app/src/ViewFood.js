import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import arr from './Foodarr'

const ViewFood = () => {
  return (
      <div>
          <div>
    
    <div className='container w-75 d-flex justify-content-between align-items-center'>
        <img  style={{width:'8rem'}} src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ujV6R3Y-bUGJ_wFMIOgqSFKnTFygO-pEPw&usqp=CAU'/>
        <h1>Search here</h1>   
    </div>

    <div>
                <form class="container d-flex justify-content-center align-items-center m-2">
                    <div class="col-lg-4">
                        <input type="text" class="form-control" id="inputPassword2" placeholder="search" />
                    </div>

                    <div class="col-auto mx-2">
                        <button type="submit" class="btn btn-primary mb-3">Search</button>
                    </div>
                </form>
            </div>

            <br />
              <section className='container w-75'>
                  <h1 style={{ fontWeight: 400 }} className=''> Best Food in the Bhopal</h1>
                  <div className='row d-flex justify-content-between align-item-center'>
                      {
                          arr.map((res) => {
                              return(
                            <div class="card" style={{width:300}}>
  <img src={res.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">{res.text }</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)
                          })
                      }
                  </div>

                  {/* <div class="card" style={{width:300}}>
  <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
</section>

  </div>

    </div>
  )
}

export default ViewFood