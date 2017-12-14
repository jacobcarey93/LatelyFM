import React, { Component } from 'react';
import './ShopNavbar.css';
import shoppingcart from './ContactSvg/shoppingcart.svg';
import gohome from './ContactSvg/gohome.svg';
import login from './ContactSvg/login.svg';
import Cart from '../Store/Cart/Cart';
import { Link } from 'react-router-dom';


class ShopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSlideVisible: false,
      menuAnimation: false,
      contactSlideVisible: false,
      searchText: '',
    }

    this.openSlide = this.openSlide.bind(this);
    this.crissCross = this.crissCross.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.openContactSlide = this.openContactSlide.bind(this);

  }

  openSlide() {
    if (this.state.contactSlideVisible && this.state.mainSlideVisible === true) {
      this.setState({
        contactSlideVisible: false,
        mainSlideVisible: false
      })
    } else {
      this.setState({
        mainSlideVisible: !this.state.mainSlideVisible
      })
    }
  }

  crissCross() {
    this.setState({
      menuAnimation: !this.state.menuAnimation
    })
  }

  openContactSlide() {
    this.setState({
      contactSlideVisible: !this.state.contactSlideVisible
    })
  }

  handleSearchChange(event) {
    this.setState({
      text: event.target.value
    })
  }


  render() {
    return (

      // main divs
      <div className={this.state.mainSlideVisible ? 'nav_slide nav_open' : 'nav_slide'} >
        <div className="nav_head_parent_container charcoal">
          <div className="nav_head_child_container">

            {/* lately logo */}

            <div className="nav_head_child_left">
              <Link to='/homepage'>
              <span className="nav_head_title lato">LATELY.FM</span>
              </Link>
            </div>

            {/* search image */}
            <div className='shopnav_head_child_right'>
              {/* <img src='http://www.iconsdb.com/icons/preview/white/search-12-xxl.png' className='nav_search_img' alt='search' />
              <div>
                <div id="wrap">
                  <input id="search" name="search" type="text" placeholder="search" onChange={this.handleSearchChange} className='shopnav_input_one'/><input id="search_submit" value="Rechercher" type="submit" className='shopnav_input_two'/>
                </div>
              </div> */}

              {/* shopping cart image */}
              <div className='nav_shopping_cart'>
                <img src={shoppingcart} className='nav_shopping_icon_size' onClick={this.openContactSlide} alt='cart' />
              </div>

              {/* login image */}
              <div className='nav_shopping_cart'>
                <Link to='/account'>
                <img src={login} className='shopnav_login_icon' alt='login' />
                </Link>
              </div>

              {/* home image */}
              <div className='nav_shopping_cart'>
                <Link to='/store'>
                <img src={gohome} className='shopnav_home_icon' alt='home' />
                </Link>
              </div>
            </div>

          </div>
        </div>


        <div className={this.state.contactSlideVisible ? 'shopnav_contact_slide shopnav_open_contact' : 'shopnav_contact_slide'}>
          <div className='nav_pullout_cart'>
            <p className='move_over'><u>CART</u></p>
            <Cart />
            <Link to='/checkout' >
              <p className='move_over fix_checkout_footer'><u>CHECKOUT</u></p>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default ShopNavbar