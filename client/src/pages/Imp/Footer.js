import { Link, useNavigate } from "react-router-dom";
import img from '../../images/Untitled(4).jpg'
import Talk from 'talkjs';
import { useEffect } from "react";

// sendbird-uikit
const Footerr = () => {
//     useEffect(() => {
//         const currentUser = this.props.currentUser;
//         Talk.ready.then(() => {
//           var me = new Talk.User({
//             id: currentUser.id,
//             name: currentUser.name,
//             email: currentUser.email,
//             photoUrl: currentUser.photo,
//             welcomeMessage: 'Hey there! How are you? :-)',
//             role: 'default',
//           });

//           if (!window.talkSession) {
//             window.talkSession = new Talk.Session({
//                 appId: "tbcCZf3F",
//                 me: me
//             });
//         }

//         var other = new Talk.User({
//             id: '654321',
//             name: 'Sebastian',
//             email: 'Sebastian@example.com',
//             photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
//             welcomeMessage: 'Hey, how can I help?',
//             role: 'default',
//           });

//           var conversation = window.talkSession.getOrCreateConversation(
//             Talk.oneOnOneId(me, other)
//           );

//         conversation.setParticipant(me);
//         conversation.setParticipant(other);

//         const popup = session.createPopup();
// popup.select(conversation);
// popup.mount({ show: false });

// const button = document.getElementById('btn-getInTouch');
// button.addEventListener('click', (event) => {
//   event.preventDefault();
//   popup.show();
// });

//         });
//       }, []);


   

    return ( 
        <div className=" mt-5 pt-5">

            <div className="container mt-5 border-top">
            <footer className="py-5">
                <div className="row">

                <div className="col-sm-3 ml-0 px-2 py-3">
                    <h5>Address</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">No 258,</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Daniyester Mawatha,</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kohuwala</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tel: +94-112 789 589</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Email: meditech@gmail.com</a></li>
                    </ul>
                </div>

                <div className="col-sm-3 mx-auto px-2 py-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                    {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li> */}
                    <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
                    <li className="nav-item mb-2"><Link to="/careers" className="nav-link p-0 text-muted">Careers</Link></li>
                    <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">Contact Us</Link></li>
                    {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms and Conditions</a></li> */}
                    <li className="nav-item mb-2"><Link to="/pvc" className="nav-link p-0 text-muted">Privacy and Policy</Link></li>
                    </ul>
                </div>

                <div className="col-sm-4 offset-1 mr-0 px-2 py-3 ">
                    <div className="">
                        <img src={img} alt={img} />
                        {/* <div className="text-secondary text-end">Quality First</div> */}
                        {/* <h1 className="fs-1 text-secondary text-center ">MediTech Labs</h1> */}
                    </div>
                </div>
                </div>

                <div className="d-flex justify-content-between py-1 mt-4 mb-0 border-top">
                <p>&copy; 2022 MediTech Labs, Pvt. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-twitter"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-instagram"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-facebook"></i></a></li>
                </ul>
                </div>
            </footer>
            </div>


        </div>
     );
}
 
export default Footerr;