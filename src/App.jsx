
import React  from 'react'
import Comp1 from './Components/Comp1';
import Comp3 from './Components/Comp3';
import Comp2 from './Components/Comp2';
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className="card1 col-6">
            <Comp1 title={"Architecture news"}  image={"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4bb6fcf87d675862bf3325ba/photo-1578751333210-30e05d429f8d.jpg"} color = "#30333c" margin1 = "50px auto 0 0 "/>
            <div className='row'>
              <div className='col-6'>
                <Comp3 image3= {"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/42287100209058f69b40cf5a/gffgfg-min.jpg "}/>
              </div>
              <div className='col-6'>
                <Comp2 title={"Our team creates & builds ergonomic and attractive workplaces."} discription={"Images from"} Freepik={"Freepik"} button={"LEARN MORE"} display={"block"}/>
              </div>
            </div>
          </div>
          <div className='card1 col-6'>
            <div className='row'>
              <div className='col-6'>
                <Comp2 title={"ABOUT US"} discription={"Architects' studios"} button={""} display={"none"}  fontSize1 = {"18px"}  fontSize2 = {"36px"}/>
              </div>
              <div className='col-6'>
                <Comp3 image3= {"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3c185120d24c54829fd9bc77/cvbb-min.jpg"}/>
              </div>
            </div>
            <div className='col-6'>
            <Comp1 title={"We are an international design practice that believes in the transformative power of design."}  image={"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/6f5bc3766eed5cdfa9d0e842/632f3f6b-28b6-25fd-5c19-d233592ce1ca.jpg"} color = "#f52453" margin1 = "4px 0 0 auto " margin2 = "0 0 0 auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
