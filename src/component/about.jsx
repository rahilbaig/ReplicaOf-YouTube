import "../styles/about.css"
const About = () => {
    return (
        <div className="aboutt">
            <div className="abbb">
                <h1 style={{color:"white"}}>About Us</h1>
            </div>
            <div className="about">
                <h1>"Broadcast Yourself"</h1>
            </div>
            <div className="mission">
                <div>
                    <h1 style={{ textAlign: "center", color: "white"}}>YouTube Mission</h1>
                    <p>YouTube’s mission statement is “to give everyone a voice and show them the world.”
                        YouTube concentrates on video content. The company makes access and sharing of this
                        information easy and convenient through its online sharing platform. By doing so, it
                        shows its commitment to easing communication and entertainment. The following are
                        the components related to this mission statement.

                        <br /> 1.Give everyone a voice
                        <br /> 2.Show everyone the world
                    </p>
                </div>
                <div>
                    <img height="500px" width="500px" src="https://cdn.britannica.com/69/198469-050-03B03A06/YouTube-founders-Steve-Chen-Chad-Hurley-2007.jpg" alt="" />
                </div>
            </div>
            <div className="story">
                <div>
                    <h1 style={{ textAlign: "center", color: "white" }} >Our story</h1>
                    <p>YouTube, Web site for sharing videos. It was registered on February 14, 2005, by Steve Chen, 
                        Chad Hurley, and Jawed Karim, three former employees of the American e-commerce company PayPal.
                         They had the idea that ordinary people would enjoy sharing their “home videos.” The company 
                         is headquartered in San Bruno, California.  Shortly after the site opened on a limited (“beta”) 
                         basis in May 2005, it was attracting some 30,000 visitors per day. By the time YouTube was officially 
                         launched on December 15, 2005, it was serving more than two million video views each day. By January 
                         2006 that number had increased to more than 25 million views. The number of videos available at the site
                          surpassed 25 million in March 2006, with more than 20,000 new videos uploaded on a daily basis. By the
                           summer of 2006, YouTube was serving more than 100 million videos per day, and the number of videos being 
                           uploaded to the site showed no sign of slowing down.</p>
                </div>
                <div>
                    <img  height="500px" width="500px"src="https://images.news18.com/ibnkhabar/uploads/2022/12/Youtube_unSplash-16709137153x2.jpg" alt="" />
                </div>
            </div>
            <h1>History</h1>
            <div className="history">
                
                <div className="bgmi">
                    <h1>2005</h1>
                    <p>YouTube was founded by Chad Hurley, Steve Chen, and Jawed Karim, when they worked for PayPal.
                         Prior to working for PayPal, Hurley studied design at the Indiana University of Pennsylvania; 
                        Chen and Karim studied computer science together at the University of Illinois at Urbana–Champaign.
                      YouTube's initial headquarters was above a pizzeria and Japanese restaurant in San Mateo, California.</p>
                </div>
                <div className="bgmi">
                    <h1>2006</h1>
                    <p>After opening on a beta service in May 2005 YouTube.com was trafficking around 30,000 viewers a day
                         in just months of time. After launching six months later they would be hosting well over two million 
                         viewers a day on the website. By March 2006 the site had more than 25 million videos uploaded and was
                          generating around 20,000 uploads a day. During the summer of 2006, YouTube was one of the fastest
                           growing sites on the World Wide Web, hosting more than 65,000 new video uploads. The site delivered
                            an average of 100 million video views per day in July</p>
                </div>
                <div className="bgmi">
                    <h1>2007-2013</h1>
                    <p>YouTube's early website layout featured a pane of currently watched videos, as well as video listings 
                        with detailed information such as full  and later expandable descriptions, as well as
                         profile pictures , ratings, comment counts, and tags. Channels' pages were equipped
                          with standalone view counters, bulletin boards, and were awarded badges for various rank-based achievements, 
                          such as "#15 - Most Subscribed , "#89 - Most Subscribed , and "#15 - Most Viewed
                          . Channels themselves had a view count indicator</p>
                </div>
                <div className="bgmi">
                    <h1>2013-2019</h1>
                    <p>In early 2013, YouTube introduced a new layout for channels known as "One Channel", which added the
                         ability to put playlists into shelves on the channel front page, but removed custom backgrounds.
                          Formerly unified channel pages were separated into multiple sub pages such as "Videos", "Playlists", 
                          "Discussion" , "Channels", and "About" . This layout was initially optional, with a transitional 
                          period taking place between March 8 and June 5 after which it has been made permanent for all users.
                           Coarsely, this layout is still in operation as of 2022.</p>
                </div>
            </div>
        </div>
    );
}

export default About;