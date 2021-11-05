import React from 'react';

function Investor(){
    return(
        <div className="artist">
            <div className="overlap-group">
                <div className="introducing">
                    Introducing
                </div>
                <h1 className="title">
                    GIANT STEPS
                </h1>
                <div className= "rectangle-6"></div>
                <div className="text-1 montserrat-semi-bold-black-24px">
                    Earn money by listening.
                </div>
                <div className="rectangle-5"></div>
                <div className="how-it-works">
                    How it works
                </div>
                <img className="vector" src="vector-1@2x.png" />
                <img className="rectangle-7" src="rectangle-7-1@2x.png"/>
                <img className="rectangle-8" src="rectangle-8-1@2x.png" />
                <div className="text-2 montserrat-semi-bold-white-24px">
                    Invest early in raising talent
                </div>
                <img className="vector-1" src="vector-2@2x.png" />
                <img className="vector-1-1"src="vector-1-2@2x.png"/>
                <img className="line-7" src="line-7-1€2x.png" />
                <div className="i-am-an">
                I am an
                </div>
                <div className="rectangle-4"></div>
                <div className="investor">
                    investor
                </div>
                <img className="line-6" src="line-6-1@2x.png" />
                <div className="artist-1">
                    artist
                </div>
                <img className="investearly" src="investearly@1x.svg" />
                <img className="arrow-1" src="arrow-1@1x.svg" />
                <img className="line-8" src="line-8-1@2x.png"/>
                <img className="group-2" src="group-2@1x.svg" />
                <img className="ellipse-1" src="ellipse-1@1x.svg"/>
                <img className= "headphones-2" src="headphones-2-1@2x.png" />
                <img className="save-money-1-1"src="save-money--1--1@1x.svg"/>
                </div>
                <div className="flex-row">
                    <div className="overlap-group4">
                        <div className="place montserrat-reqular-normal-white-14px">
                            Peak
                        </div>
                        <div className="giant-steps montserrat-bold-white-14px">
                            GiantSteps
                        </div>
                    </div>
                    <div className="overlap-group3 montserrat-regular-normal-white-14px">
                        <div className="seasonality">
                            Seasonality
                        </div>
                        <div className="future-outcome">
                            Future <br />
                            outcome
                        </div>
                    </div>
                </div>
                <div className="flex-row-1 montserrat-regular-normal-white-14px">
                    <div className="x0-m">
                        O M
                    </div>
                    <div className="x12-m">
                        12M
                    </div>
                    <div className="x24-m">
                        24M
                    </div>
                </div>
                <div className="overlap-group2">
                    <div className="text-3 montserrat-semi-bold-white-24px">
                        Support small artists and <br/>
                        see them grow
                    </div>
                    <div className="text-4">
                        Invest in a small artist and watch your money
                        multiply as their viewers grow.
                    </div>
                    <p className="text-7 montserrat-regular-normal-white-14px">
                        <span className="montserrat-bold-white-14px">Record Labels</span>
                        <span className="montserrat-regular-normal-white-14px"> and </span>
                        <span className="montserrat-bold-white-14px">publisheres</span>
                    </p>
                    </div>
                    <div className="overlap-group1">
                        <div className="overlap-group5">
                            <div className="text-5 montserrat-semi-bold-black-24px">
                                Earn money while you Listen
                            </div>
                            <div className="text-6">
                                Listen to music from artists both big and
                                small, making returns from your investments in their
                                work.
                            </div>
                        </div>
                        <Component1>Join the waitlist</Component1>
                    </div>
                </div>
    );
}

export default Investor;

function Component1 (props) {
    const { children }= props;
    
    return (
        <div className="component-l">
            <div className="text-8">
                {children}
            </div>
        </div>
    );
}
