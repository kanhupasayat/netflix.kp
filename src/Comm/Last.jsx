import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Last.css";

const Last = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);


  const ShowPage1 = () => {
    setShow1(!show1);
  };
  const ShowPage2 = () => {
    setShow2(!show2)
  };
  const ShowPage3 = () => {
    setShow3(!show3)
  };
  const ShowPage4 = () => {
    setShow4(!show4)
  };
  const ShowPage5 = () => {
    setShow5(!show5)
  };
  const ShowPage6 = () => {
    setShow6(!show6)
  };

  return (
    <div className="last">
      <div className="con5">
        <h1 className="last5">Frequently Asked Questions</h1>

        <div className="textline">
          <button className="btn5" onClick={ShowPage1}>
            <div className="divbox c">What Is NetFlex
          
              {show1 && (
                <h3 className="hide">
                  <hr />
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  on thousands of internet-connected devices.
                  <br />
                  <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </h3>
              )}
            </div>
          </button>
          <button className="btn5" onClick={ShowPage2}>
            <div className="divbox c">How Much does Netflix Cost
              {show2 && (
                <h3 className="hide">
                  <hr />
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts
                </h3>
              )}
            </div>
          </button>
          <button className="btn5" onClick={ShowPage3}>
            <div className="divbox c">Where Can I Watch?

              {show3 && (
                <h3 className="hide">
                  <hr />
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br />
                  <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </h3>
              )}
            </div>
          </button>
          <button className="btn5" onClick={ShowPage4}>
            <div className="divbox c">How do I Cancel?
              {show4 && (
                <h3 className="hide">
                  <hr />
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </h3>
              )}
            </div>
          </button>
          <button className="btn5" onClick={ShowPage5}>
            <div className="divbox c">What Can I Watch on Netflex
            
              {show5 && (
                <h3 className="hide">
                  <hr />
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </h3>
              )}
            </div>
          </button>
          <button className="btn5" onClick={ShowPage6}>
            <div className="divbox c">Is Netflix good for kids?
            
              {show6 && (
                <h3 className="hide">
                  <hr />
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                  <br />
                   Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </h3>
              )}
            </div>
          </button>
        </div>
        <p className="lastp">Ready to watch? Enter your email to create or restart your membership.</p>

        <div className="serch1">
<input type="email" className="form__field" placeholder="Your E-Mail Address" />
			<button type="button" className="btn1 btn--primary btn--inside uppercase">Get Started</button>
</div>
      </div>
    </div>
  );
};

export default Last;
