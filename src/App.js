import logo from './logo.svg';
import './App.css';
import './style.css'
import { Header } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import JoinButton from './joinbutton'
import RoadMap from './Roadmap';
function App() {
  return (
    <div className='homepage'>
      <div>
        <Header />
      </div>

      <div className='bodycontent'>
        <div className='commonproperties'>
          <div class="container" className='container1'>
            <div class='row' >

              <div class='col-md-6' >
                <div className='maintext'>
                  <h1 className='introtext'> Where people retrieve
                    their sense of humanity
                  </h1>
                </div>
              </div>
            </div>
          </div>


          <div class="container" className='container2' >
            <div class="row">

              <div class="col-md-6" >
                <div className='text2'>
                  <h1 className='text2content'>Myworld opens door to your community
                  </h1>
                </div>
              </div>

              <div class="col-md-6" >
                <img className='gif1' src='http://i.stack.imgur.com/kx8MT.gif' ></img>

              </div>

            </div>
          </div>


          <div class="row">

            <div class="col-md-8" >
              <div className='joinbutton'>
                <JoinButton />
              </div>
            </div>

            <div class="container" className='container3' >
              <div className='whiteboxcontent'>

                <div class="row">

                  <div class="col-md-5" >

                    <h1 className='whitetext1' >You belong to your community Invest in it.</h1>

                  </div>

                </div>

                <div class="row">

                  <div class="col-md-6"  >
                    <h1 className='whitetext2'>Whether you eat at a local restaurant or in gym class, or try new skills at ceramics , investment is mutual, both the community and individual benefit</h1>
                  </div>

                  <div class="col-md-6" >

                    <img className='gif2' src='http://i.stack.imgur.com/kx8MT.gif'></img>
                  </div>


                </div>

                <div class="row">

                  <div class="col-md-6" >
                    <h1 className='whitetext3'>Local + Social + Fair = Sustainable</h1>
                  </div>


                </div>

              </div>
            </div>


            <div class="container" className='container4' >
              <div className='lastSection'>
                <div class='row' >
                  <div class='col-md-6'  >
                    <div className='part2textdiv' >
                      <h1 className='part1text'> Roapmap 2022
                      </h1>
                    </div>
                  </div>
                </div>

                <div class='row' >
                  <div class='col-md-6' >
                    <div className='part2textdiv2' >
                      <h1 className='part2text'> This is our plan
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h1 className='year2022'>2    0    2    2</h1>
              </div>
              <div class="col-md-6">
                <div>
                  <RoadMap />
                </div>
              </div>
            </div>

          </div>


        </div >
      </div >
    </div >


  );
}

export default App;
