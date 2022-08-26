import "./App.css";
import ProfileInfo from "./components/ProfileInfo";
import ProfileMainComponent from "./components/ProfileMainComponent"
// import ProfileInterest from "./components/ProfileInterest";
import ProfileFooter from "./components/ProfileFooter"
import data from './data'

function App() {
  const mainSectionRender = data.map(item => {
    return <ProfileMainComponent 
              // title = {x.title}
              // description ={x.description}
              

              //Passing Props as an object
              // item = {item}

              //Spread object as Props
              {...item}
              
          />;
  })

  return (
    <div className="App">
      <div className="container">
        <ProfileInfo />
        {mainSectionRender}
        <ProfileFooter />
      </div>
    </div>
  );
}

export default App;


