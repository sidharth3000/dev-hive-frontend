import React, {Component} from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Head from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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