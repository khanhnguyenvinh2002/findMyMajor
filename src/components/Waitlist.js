import '../styles/waitlist.css'

export default function Waitlist(){
    return (
        <div className="i-phone-8-plus-1">
            <div className="overlap-group">
                <img className="vector" src="vector@1x.svg" />
                <img className="rectangle-1" src="rectangle-12@1x.svg"/>
                <img className="rectangle-1" src="rectangle-13-1@2x.png"/>
                <img className="rectangle-1" src="rectangle-14-1@2x.png"/>
                <img className="vector-1" src="vector@1x.svg"/>
            </div>
            <h1 className="title">
                Join the watilist.
            </h1>
            <div className="text-1">
                Be the first to know when we're ready
            </div>
            <div className="place opensans-regular-normal-mine-shaft-18px">
                Name
            </div>
            <div className="email opensans-regular-normal-mine-shaft-18px">
                Email
            </div>
            <div className="phone opensans-regular-normal-mine-shaft-18px">
                Phone
            </div>
            <div className="overlap-groupi">
                <div className="sign-up">
                    Sign up
                </div>
            </div>
        </div>
    );
}