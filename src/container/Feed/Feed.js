import React, {Component} from 'react';

import Navbar from '../../component/Navbar/Navbar';
import Head from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

class Feed extends Component {

    render(){

        return(
            <React.Fragment>
                <Navbar/>

                <Head>FEED</Head>
                <div>Home</div>

                <Footer/>
            </React.Fragment>
           
        )
    }
}

export default Feed;