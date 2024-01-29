import {Component} from 'react';
import './index.css'

class Welcome extends Component{
    state = {isSubscribed : false};

    changeText = () =>{
        this.setState(prevState => ({isSubscribed : !prevState.isSubscribed}))
    }
    getText = () =>{
        const {isSubscribed} = this.state;
        return isSubscribed ? 'Subscribe' : 'Subscribed';
    }
    render(){
         const buttonText = this.getText();
        return(
            <div className='container'>
                 <h1>Welcome</h1>
                 <p>Thankyou! Happy Learning</p>
                  <button onClick={this.changeText}>{buttonText}</button>
            </div>
        )
    }
}

export default Welcome