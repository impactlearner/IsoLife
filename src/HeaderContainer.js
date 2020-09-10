import React from 'react'
import {Header, Image} from 'semantic-ui-react'
import IsoLifeLogo from './IsoLifeLogo.png'
class HeaderContainer extends React.Component {
    
    render () {
       
       return(
        <div>
            <Header className="header"> <Image src={IsoLifeLogo} className="logo"/></Header>
           
          

        </div>

       )
    }
        
    
}
export default HeaderContainer;