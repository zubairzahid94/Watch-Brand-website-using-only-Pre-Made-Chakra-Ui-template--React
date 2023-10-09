import CallToActionWithAnnotation from "./Components/Body"
import SmallWithLogoLeft from "./Components/Bottom"
import ContactFormWithSocialButtons from "./Components/Contact"
import SimpleThreeColumns from "./Components/Footer"
import WithAction from "./Components/Heading"
import ProductAddToCart from "./Components/Products"
import {BrowserRouter as Router ,Route,Routes } from "react-router-dom" 
function App() {
 

  return (
    <>
   
    <WithAction/>
    <CallToActionWithAnnotation/>
    <ProductAddToCart/>
    <ContactFormWithSocialButtons/>
    <SimpleThreeColumns/>
    <SmallWithLogoLeft/>
  
    </>
  )
}

export default App
