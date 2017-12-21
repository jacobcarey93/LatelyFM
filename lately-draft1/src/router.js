import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import AdminArtistManager from './components/Admin/AdminArtistManager/AdminArtistManager';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminProductManger from './components/Admin/AdminProductManager/AdminProductManager';
import AdminReviewManger from './components/Admin/AdminReviewManager/AdminReviewManager';
import AdminStoreManager from './components/Admin/AdminStoreManager/AdminStoreManager';
import ArtistsHome from './components/Artists/ArtistsHome/ArtistsHome';
import ArtistsSpecific from './components/Artists/ArtistsSpecific/ArtistsSpecific';
import HomePage from './components/HomePage/HomePage';
import PlaylistHome from './components/Playlist/PlaylistHome/PlaylistHome';
import PlaylistSpecific from './components/Playlist/PlaylistSpecific/PlaylistSpecific';
import ReviewsHome from './components/Reviews/ReviewsHome/ReviewsHome';
import ReviewsSpecific from './components/Reviews/ReviewsSpecific/ReviewsSpecific';
import AccountOverview from './components/Store/AccountOverview/AccountOverview';
import StoreHome from './components/Store/StoreHome/StoreHome';
import VideosHome from './components/Videos/VideosHome/VideosHome';
import VideosSpecific from './components/Videos/VideosSpecific/VideosSpecific';
import Splash from './components/Splash/Splash';
import Details from './components/Store/Details/Details';
import Checkout from './components/Store/Checkout/Checkout';
import Stripe from './components/Stripe/Stripe';
import AccountAddress from './components/Store/AccountOverview/AccountAddress/AccountAddress';
import AddressForm from './components/Store/AccountOverview/AccountAddress/AddressForm';

export default (
  <Switch>
    <Route component={ HomePage } path="/homepage" />
    <Route component={ About } path="/about" />
    <Route component={ AdminArtistManager } path="/admin/artistmanager" />
    <Route component={ AdminHome } path="/admin/home" />
    <Route component={ AdminProductManger } path="/admin/productmanager" />
    <Route component={ AdminReviewManger } path="/admin/reviewmanager" />
    <Route component={ AdminStoreManager } path="/admin/storemanager" />
    <Route component={ ArtistsHome } path="/artists" />
    <Route component={ ArtistsSpecific } path="/artists/:artistid" />
    <Route component={ PlaylistHome }  path="/playlists" />
    <Route component={ PlaylistSpecific } path="/playlists/:playlistid" />
    <Route component={ ReviewsHome } path="/reviews" />
    <Route component={ ReviewsSpecific } path="/morereviews" />
    <Route component={ AccountOverview } path="/account" />
    <Route component={ StoreHome } path="/store" />
    <Route component={ VideosHome } path="/videos" />
    <Route component={ VideosSpecific } path="/morevideos" />
    <Route component={ Splash } path='/' />
    <Route component={Details} path="/details/:productid" /> 
    <Route component={Checkout} path="/checkout" /> 
    <Route component={Stripe} path="/stripe" /> 
    <Route component={AccountAddress} path="/account/address" /> 
    <Route component={AddressForm} path="/addressform" /> 
  </Switch>
)
