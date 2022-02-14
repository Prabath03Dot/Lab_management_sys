const Footerr = () => {
    return ( 
        <div>
            <div className="container mt-3 border-top">
            <footer className="py-5">
                <div className="row">
                

                {/* <div className="col-sm-2">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div> */}

                <div className="col-sm-3 ml-0 px-2 py-3">
                    <h5>Meditech Labs</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">No 258,</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Dniyester Mawatha,</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kohuwala</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tel: +94-112 789 589</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Email: meditech.cn@gmail.com</a></li>
                    </ul>
                </div>

                <div className="col-sm-3 mx-auto px-2 py-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms and Conditions</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy and Policy</a></li>
                    </ul>
                </div>

                <div className="col-sm-4 offset-1 mx-auto px-2 py-3">
                    <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of whats new and exciting from us.</p>
                    <div className="d-flex w-100 gap-2">
                        <label for="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                        <button className="btn btn-primary" type="button">Subscribe</button>
                    </div>
                    </form>
                </div>
                </div>

                <div className="d-flex justify-content-between py-1 mt-4 mb-0 border-top">
                <p>&copy; 2022 Meditech Company, Inc. All rights reserved.</p>
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