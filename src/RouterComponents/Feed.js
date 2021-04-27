import React from 'react'

export default function Feed() {
    return (
        <div className="container">
            <div className="ptpage_composer col-md-12 col-sm-12 col-xs-12 compose-wrapper">
                <h3 className="compose_title">Feed Compose</h3>
                <form>
                    <div className="socialmedia-wrapper">
                        <div className="socialmedia-post-view">
                            <div className="user-post-text-wrap">
                                <div className="user-txt-post">
                                    <textarea className="form-control upostTextarea" rows="5" placeholder="Enter your message here"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="socialmedia_share">
                                                <div className="pull-left attachment-Section">
                                                    <span className="i_tag"><i className="mdi mdi-emoticon-outline" aria-hidden="true"></i></span>
                                                            <span className="i_tag"><i className="mdi mdi-email-outline" aria-hidden="true"></i></span>
                                                            <span className="i_tag i_button btn-group-vertical">
                                                                    <button type="button" className="btn btn-light hashtag-Button"> <i className="mdi mdi-plus"></i> <span>Add tags</span> </button>

                                                            </span>
                                                            <span className="i_tag i_button"><button type="button" className="btn btn-light hashtag-Button"> <i className=" mdi mdi-link" aria-hidden="true"></i> <span>URL Tracking</span> </button>
                                                            </span>

                                                </div>
                                                <div className="pull-right icon-Section">
                                            <div className="mobile-icon-section">
                                                    <div className="social-io-xs"><i className="fa fa-instagram social_io"></i></div>
                                                    <div className="social-io-xs"><i className="fa fa-twitter social_io"></i></div>
                                                    <div className="social-io-xs"><i className="fa fa-facebook-square social_io"></i></div>
                                                <div className="clearfix"></div>
                                            </div>
                                            </div>
                                            <div className="clearfix"></div>
                        </div>
                    </div>  
                </form>				
            </div>

            <div className="fetch-post-story-blog-container">
                <div className="fetch-story-list">
                    <div className="row">
                        <div className="hyper-pic col-xl-2 col-lg-2 col-md-2 reset-padding">
                            <div className="hyperImg_section">
                                <img src="https://picsum.photos/200/300" alt="friend" title="" class="rounded-circle avatar-xs-2" width = "50px" height ="50px" />
                            </div>                           
                        </div>     
                        <div className="story-blog_content col-xl-10 col-lg-10 col-md-10 text-left">
                            <span className="socialmedia-name">Facebook</span>
                            <h3>Testing Testing Testing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitssdds, sdd seddoeiusmod tempor incididunt ut
                            labore et dolore magnaaliquasdfdsf. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitssdds, sdd seddoeiusmod tempor incididunt ut
                            labore et dolore magnaaliquasdfdsf. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <div className="socialmedia-story-img-container">
                                <img src="https://picsum.photos/200/300"  width = "100%" height ="300px" />
                            </div>

                            <div className="sharecount-view">
                                <a className="gray-content count-view mr-2">Reactions :0</a>
                                <a className="gray-content count-view mr-2">Impressions :17</a>
                                <a className="gray-content count-view">Engagement :0</a>
                                <a href="" className="a-insights float-right mr-2">View Insights</a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                
                <div className="fetch-story-list">
                    <div className="row">
                        <div className="hyper-pic col-xl-2 col-lg-2 col-md-2 reset-padding">
                            <div className="hyperImg_section">
                                <img src="https://picsum.photos/200/300" alt="friend" title="" class="rounded-circle avatar-xs-2" width = "50px" height ="50px" />
                            </div>                           
                        </div>     
                        <div className="story-blog_content col-xl-10 col-lg-10 col-md-10 text-left">
                            <span className="socialmedia-name">Facebook</span>
                            <h3>Profile name goes here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitssdds, sdd seddoeiusmod tempor incididunt ut
                            labore et dolore magnaaliquasdfdsf. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitssdds, sdd seddoeiusmod tempor incididunt ut
                            labore et dolore magnaaliquasdfdsf. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <div className="socialmedia-story-img-container">
                                <img src="https://picsum.photos/200/300" width = "100%" height ="300px" />
                            </div>

                            <div className="sharecount-view">
                                <a className="gray-content count-view mr-2">Reactions :0</a>
                                <a className="gray-content count-view mr-2">Impressions :17</a>
                                <a className="gray-content count-view">Engagement :0</a>
                                <a href="" className="a-insights float-right mr-2">View Insights</a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
			</div>
        </div>
        
        
    )
}
