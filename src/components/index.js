import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import s from '../styles/app.style';

/* Components */
import API from './SpreadsheetData';
import {PageNotFound, UnderConstruction, Donate} from './Snippets';
import EnterTheCode from './entercode/index';
import Collection from './collection/index';
import Portal from './portal/index';
import Home from './Home';

// const BlockAvoider = withRouter(Base)

render(
  <Router>
    {/* <BlockAvoider /> */}
    <Base path="/*" href="/" />
  </Router>
  , document.getElementById('root'),
);

function Routing(props) {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/PageNotFound" component={PageNotFound} />
      <Route path="/UnderConstruction" component={UnderConstruction} />
      <Route path="/EnterTheCode" component={EnterTheCode} />
      <Route path="/collection" component={Collection} />
      <Route path="/portal" component={Portal} />
    </React.Fragment>
  );
}

function Base(props) {
  // Configuration for the language and background
  // Images managed in css file
  const language = "ENG";
  const bkgrnd = "05";

  const children = <Routing {...props} />;

  return (
    <React.Fragment>
      <div className="fix-pgBkgrnd-repeat-x">
        <div className={"fix-img-bkgrnd fix-img-bkgrnd_"+bkgrnd}></div>
      </div>
      <div className="pgBkgrnd-repeat-x">
        <div className="img-bkgrnd">
          <div className="content-wrap">
            <div className="legacy legacy-header">
              <div className="header">
                <div id="nav">
                  <div className="zero-clear-line headerSpriteNav-wrap">
                    <ul id="unity-sprite" className={language}>
                      <li id="unity-nav1" className={language}></li>
                      <li id="unity-nav2" className={language}><Link to={`/collection/`}><span>Collect</span></Link></li>
                      <li id="unity-nav3" className={language}><a href="http://chaoticbackup.forumotion.com/f11-deck-building"><span>Build</span></a></li>
                      <li id="unity-nav4" className={language}><a href="http://chaoticbackup.forumotion.com/f16-trading-buying-and-selling"><span>Trade</span></a></li>
                      <li id="unity-nav5" className={language}><Link to={`/`}><span>Home</span></Link></li>
                      <li id="unity-nav6" className={language}><a href="http://chaoticbackup.forumotion.com"><span>Forums</span></a></li>
                      <li id="unity-nav7" className={language}><Link to={`/portal/`}><span>Portal</span></Link></li>
                      <li id="unity-nav8" className={language}><a href="https://untap.in"><span>Play</span></a></li>
                      <li id="unity-nav9" className={language}></li>
                    </ul>
                    <ul id="unityETC-sprite" className={language}>
                      <li id="unity-nav10" className={language}><Link to={`/EnterTheCode`}><span>Enter the Code</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-ad-top">
            </div>
            <div className="legacy content">
              <div className="left-column">
                <div className="full-width clear-line" style={{marginBottom: "5px"}}>
                </div>
              </div>
              <div className="full-column">
                <div className="pods-wrap pad5px-btm">
                  <div className="clear-line full-width">
                    <div className="adPod-top-wrap">
                      <div className="videoAdPod-topleft">
                        <div className="videoAdPod-topLeft-repeat-x"></div>
                      </div>
                      <div className="videoAdPod-topright">
                        <div className="videoAdPod-topRight-repeat-x"></div>
                      </div>
                    </div>
                  </div>
                  <div className="content-area-repeat-xy">
                    <div className="content-area-top-repeat-x">
                      <div className="content-area-left-repeat-y">
                        <div className="content-area-right-repeat-y">
                          <div style={{margin: "0 8px 0 10px"}}>
                            <div id="player">
                              {children}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-btm-wrap">
                    <div className="content-area-btm-left">
                      <div className="content-left-btm-repeat-x">
                      </div>
                    </div>
                    <div className="content-area-btm-right">
                      <div className="content-right-btm-repeat-x">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-column">
                <div className="full-width clear-line" style={{marginBottom: "5px"}}>
                </div>
              </div>
            </div>
            <div className="banner-ad-bottom">
            </div>
            <div className="legacy legacy-footer">
              <div className="footer-wrap">
                <div className="footer-repeat-x">
                  <div className="footer-left">
                    <div className="footer-right">
                      <div className="footer-text">
                        <div className="footer-search">
                          <br /><br />
                          <Donate />
                        </div>
                        <div className="footer-nav">
                          <div className="copyright">
                            ©2008 Chaotic USA Entertainment Group, Inc.
                            <br />
                            U.S. Pat 5810666 and 5954332 and other pending patent applications. All Rights Reserved.
                          </div>
                        </div>
                        <div className="footer-language">
                          <a href="javascript:;" onClick={(e) => {e.stopPropagation(); e.preventDefault(); API.purgeDB()}} className="page-options" title="Change Language">
                            <img src="/src/img/flag_usa_.gif" alt="English (Change Language)" width="40" height="27"/>
                            <br />English (Change Language)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
