import React, { Component } from 'react';
import './AccountOverview.css';
// import axios from 'axios';
import { getUserInfo } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ShopNavbar from '../../Navbar/ShopNavbar';

class AccountOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        // const user = this.props.user;
        return (
            <div className='account_overview_main'>
                <ShopNavbar />
                <div className='account_overview_header'>ACCOUNT</div>
                <div className='account_overview_parent'>
                    <div className='account_overview_child'>
                        <h2><u>ORDER HISTORY</u></h2>
                        <Link to='/account/address'>
                        <p className='account_overview_view_addresses_btn'>VIEW ADDRESSES</p>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("this is the state", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(AccountOverview);