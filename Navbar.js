import React, { Component } from "react";
import "../CSS/Navbar.css";
import logo from "../IMAGE/logob.png";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, // Example state variable
      isOpen: false,
    };
    // Bind event handler methods if needed
  }

  togglemodal5 = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  nutritiontoggle = () => {
    this.setState(() => {
      this.setState({ nutrition: !this.state.nutrition });
    });
  };
  consumertoggle = () => {
    this.setState(() => {
      this.setState({ consumer: !this.state.consumer });
    });
  };
  toggleNutritionContent = () => {
    this.setState((prevState) => ({
      nutritionContentVisible: !prevState.nutritionContentVisible,
    }));
  };
  handleClick = (event) => this.setState({ anchorEl: event.currentTarget });
  handleClose = () => this.setState({ isOpen: false });

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary " id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img id="logo" src={logo} alt="logo"></img>
          </a>
          <div className="colfour2">
            <button
              className="btn1"
              // onClick={this.togglemodal5}S
            >
              Nutritionist Blog
            </button>
          </div>
          {this.state.isOpen && (
            <Modal isOpen={this.togglemodal5} centered>
              <ModalHeader toggle={this.togglemodal5}>
                <button
                  className="popup-option"
                  onClick={() => {
                    this.nutritiontoggle();
                    this.handleClose();
                    // this.toggleNutritionContent();
                  }}
                >
                  Join as Nutritionist
                </button>{" "}
                <button
                  className="popup-option"
                  onClick={() => {
                    this.consumertoggle();
                    this.handleClose();
                  }}
                >
                  Join as Consumer
                </button>
              </ModalHeader>
            </Modal>
          )}

          {this.state.nutrition && (
            <Modal
              isOpen={this.state.nutrition}
              onHide={this.nutritiontoggle}
              centered
              width={400}
            >
              <ModalHeader toggle={this.nutritiontoggle}>
                <Fade bottom>
                  <p className="contact1">Nutrition Contact Details</p>
                </Fade>
              </ModalHeader>
              <ModalBody>
                <Fade bottom>
                  <div className="total7">
                    <div className="nutricon">
                      {/* First Name */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="firstname"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          First Name
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="lastname"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          Last Name
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="phone"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          Phone
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="email"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          Email
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>

                      <Bounce right>
                        {/* Submit Button */}
                        <div className="form-group row">
                          <div className="col-sm-12 text-center">
                            {" "}
                            {/* Centering Submit Button */}
                            <button className="btn2 btn-block">Submit</button>
                          </div>
                        </div>
                      </Bounce>
                    </div>
                  </div>
                </Fade>
              </ModalBody>
            </Modal>
          )}
          {this.state.consumer && (
            <Modal
              isOpen={this.state.consumer}
              onHide={this.consumertoggle}
              centered
              width={400}
            >
              <ModalHeader toggle={this.consumertoggle}>
                <Fade bottom>
                  <p className="contact1">Consumer Contact Details</p>
                </Fade>
              </ModalHeader>
              <ModalBody>
                <Fade bottom>
                  <div className="total7">
                    <div className="nutricon">
                      {/* First Name */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="firstname"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          First Name
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="lastname"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          Last Name
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="phone"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          Phone
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="email"
                          className="col-sm-4 col-form-label"
                          style={{ fontWeight: "700" }}
                        >
                          Email
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Bounce right>
                        <div className="form-group row">
                          <div className="col-sm-12 text-center">
                            {" "}
                            {/* Centering Submit Button */}
                            <button className="btn2 btn-block">Submit</button>
                          </div>
                        </div>
                      </Bounce>
                    </div>
                  </div>
                </Fade>
              </ModalBody>
            </Modal>
          )}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
