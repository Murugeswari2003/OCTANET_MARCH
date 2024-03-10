import React, { Component } from "react";
import { Icon } from "@iconify/react";
import "../CSS/Home.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import Navbar from "./Navbar.js";
import gym from "../IMAGE/gym1.jpg";
import ayur from "../IMAGE/ayur.jpg";
import baby from "../IMAGE/baby1.jpg";
import breakfast from "../IMAGE/snack1.jpg";
import pet from "../IMAGE/pet1.jpg";
import snack from "../IMAGE/snack.jpg";
import supp from "../IMAGE/spp1.jpg";
import tab from "../IMAGE/tablet.jpg";
import preg from "../IMAGE/preg.jpg";
import nutri from "../IMAGE/nutri.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      nutrition: false,
      consumer: false,
      anchorEl: null,
      nutritionContentVisible: false,
    };
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
    const { isOpen } = this.state;
    const { anchorEl } = this.state;
    return (
      <div style={{ overflow: "hidden" }}>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="total1">
          <Fade bottom>
            <Container className="servicenew">
              <Row style={{ marginTop: "5%" }}>
                {/* <h3 style={{ color: "#008000", fontWeight: "700" }}>
                DAILY CAR WASH
              </h3>
              <br /> <br /> */}
                <div className="colone">
                  <p
                    className="ptext"
                    style={{ fontFamily: "font_2 wixui-rich-text__text" }}
                  >
                    Welcome to Nutrition website
                    {/* Praposhan */}
                    <br />
                    Your Personalized Nutrition Companion!
                  </p>
                </div>
                <div className="coltwo">
                  <p className="ptext1">
                    Elevate Your Health Journey with Expert Guidance and Trusted
                    Insights to Achieve your Health goals, Enhance your
                    Wellbeing, or Manage your Health conditions.
                  </p>
                </div>
                {/* <div className="colthree">
                  <p className="ptext1">
                    Unbox is your personalized consumption assistant for
                    packaged foods and health supplements. In an industry filled
                    with misinformation, manipulation and marketing tricks, we
                    offer
                    <span className="span1"> lab-tested facts</span> and{" "}
                    <span className="span1"> zero opinions.</span>
                  </p>
                </div> */}
                <Fade right>
                  <div className="colfour">
                    <button className="btn1" onClick={this.togglemodal5}>
                      JOIN WAITLIST
                    </button>
                  </div>
                </Fade>
              </Row>

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
                                <button className="btn2 btn-block">
                                  Submit
                                </button>
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
                                <button className="btn2 btn-block">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </Bounce>
                        </div>
                      </div>
                    </Fade>
                  </ModalBody>
                </Modal>
              )}

              <br />
              <br />
            </Container>
          </Fade>
        </div>
        <div className="total2">
          <p className="contenttotal">
            {/* Praposhan, */}
            At Nutrition website we're committed to revolutionizing the way you
            approach nutrition. Our platform combines cutting-edge technology
            with expert knowledge to empower you on making the right choices to
            reach your health goals. Here's what sets us apart:
          </p>
          <Fade bottom>
            <Container className="research-container">
              {/* <Fade bottom> */}
              <Row>
                {/* <Row style={{margin:'0px'}} > */}

                <Col lg={3} md={4} className="mb-4">
                  <Card className="h-cards">
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="19.993 20 160.015 160"
                      viewBox="19.993 20 160.015 160"
                      height="200"
                      width="200"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                      className="svg1"
                    >
                      <path
                        d="M121.974 119.971a3.804 3.804 0 0 1-1.778-.44L100 108.874l-20.197 10.657a3.811 3.811 0 0 1-5.533-4.011l3.861-22.591-16.35-15.996a3.809 3.809 0 0 1 2.114-6.493l22.584-3.294 10.102-20.545a3.809 3.809 0 0 1 6.838 0l10.102 20.545 22.584 3.294a3.812 3.812 0 0 1 2.114 6.493l-16.35 15.996 3.86 22.59a3.809 3.809 0 0 1-3.755 4.452zM72.61 76.869l12.276 12.01a3.809 3.809 0 0 1 1.091 3.365l-2.896 16.941 15.141-7.989a3.81 3.81 0 0 1 3.556 0l15.14 7.989-2.895-16.941a3.81 3.81 0 0 1 1.091-3.365l12.276-12.01-16.952-2.472a3.813 3.813 0 0 1-2.869-2.089L100 56.916l-7.568 15.392a3.813 3.813 0 0 1-2.869 2.089L72.61 76.869z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M100 149.524c-35.71 0-64.762-29.052-64.762-64.762S64.29 20 100 20s64.762 29.052 64.762 64.762S135.71 149.524 100 149.524zm0-121.905c-31.509 0-57.143 25.634-57.143 57.143S68.491 141.905 100 141.905s57.143-25.634 57.143-57.143S131.509 27.619 100 27.619z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M23.81 159.683a3.81 3.81 0 0 1-2.693-6.504l30.626-30.626a3.81 3.81 0 0 1 5.387 5.388l-30.626 30.626a3.798 3.798 0 0 1-2.694 1.116z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M44.127 180a3.81 3.81 0 0 1-3.81-3.81v-20.317a3.81 3.81 0 1 1 7.62 0v20.317a3.81 3.81 0 0 1-3.81 3.81z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M44.127 159.683H23.81a3.81 3.81 0 1 1 0-7.62h20.317a3.81 3.81 0 1 1 0 7.62z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M155.873 180a3.796 3.796 0 0 1-2.693-1.116l-34.378-34.378a3.81 3.81 0 0 1 5.387-5.388l34.378 34.378a3.81 3.81 0 0 1-2.694 6.504z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M176.19 159.683a3.796 3.796 0 0 1-2.693-1.116l-30.628-30.627a3.81 3.81 0 0 1 5.387-5.388l30.628 30.627a3.81 3.81 0 0 1-2.694 6.504z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M155.873 180a3.81 3.81 0 0 1-3.81-3.81v-20.317a3.81 3.81 0 1 1 7.62 0v20.317a3.81 3.81 0 0 1-3.81 3.81z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M176.19 159.683h-20.317a3.81 3.81 0 1 1 0-7.62h20.317a3.81 3.81 0 1 1 0 7.62z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M44.127 180a3.81 3.81 0 0 1-2.693-6.504l34.377-34.377a3.81 3.81 0 0 1 5.387 5.388L46.82 178.884A3.796 3.796 0 0 1 44.127 180z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                    </svg>

                    {/* <Card.Img variant="top" src={car} className="f-img" /> */}
                    <Card.Body>
                      <Card.Title className="card-title">
                        AI-Powered Guidance
                      </Card.Title>

                      <p className="textforcard" style={{ textAlign: "left" }}>
                        Say goodbye to guesswork! Our AI algorithms analyze your
                        unique needs and preferences to deliver personalized
                        nutrition recommendations tailored just for you.
                        &nbsp;&nbsp;
                        {/* <Link to="">
                        <BsFillArrowUpRightSquareFill className="learnmore-icon" />
                      </Link> */}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3} md={4} className="mb-4">
                  <Card className="h-cards">
                    {/* <Card.Img variant="top" src={car1} className="f-img" /> */}
                    {/* <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="43 38 114 124"
                      viewBox="43 38 114 124"
                      height="200"
                      width="200"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label
                      className="svg1"
                    >
                      <path
                        fill="#aefa2a"
                        d="M90.3 38v8.8H69.6V38h20.7z"
                        data-color="1"
                      ></path>
                      <path
                        d="M157 69h-46.3l.3 33.8c-4-5.6-9.6-10.1-16.3-12.8V61.9h10.2v-8.8H55.1v8.8h11.3v28.2C52.2 95.8 43 109.3 43 124.7c0 20.6 16.8 37.3 37.5 37.3 13.1 0 24.6-6.7 31.3-16.8 2 9.5 10 16.6 19.3 16.6 5 0 9.7-2.1 13.3-5.8.1-.1.2-.3.4-.4 3.6-4 5.6-9.3 5.5-14.9l-.6-62.7h7.2v-9h.1zm-76.5 84.2c-15.8 0-28.6-12.8-28.6-28.5 0-12.6 8.1-23.5 20.2-27.2l3.1-1V61.9h10.6v34.6l3.1 1c11.7 3.6 19.7 14 20.1 26.1H93.7v8.8h14.4c-3.4 11.9-14.5 20.8-27.6 20.8zM143 98.6h-12.6v8.8h12.7l.3 33.3c.1 3.6-1.2 7-3.5 9.5-2.4 2.4-5.4 3.9-8.7 4-6.9 0-12.7-6.1-12.8-13.6l-.5-62.7h25l.1 20.7z"
                        fill="#55a630"
                        data-color="2"
                      ></path>
                      <path
                        fill="#aefa2a"
                        d="M143.1 107.4h-12.7v-8.8H143l.1 8.8z"
                        data-color="1"
                      ></path>
                      <path
                        d="M93.7 132.5H108c.7-2.5 1.1-5.2 1.1-8v-1H93.7v9z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                    </svg> */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="svg1"
                    >
                      <path
                        fill="none"
                        stroke="#aefa2a"
                        stroke-width="2"
                        d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm6.643 4.696a6.745 6.745 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22L23 13"
                      />
                    </svg>
                    <Card.Body>
                      <Card.Title className="card-title">
                        Expert Content
                      </Card.Title>

                      <p className="textforcard" style={{ textAlign: "left" }}>
                        Access a wealth of curated content crafted by certified
                        nutritionists and backed by scientific research. From
                        informative articles to delicious recipes, we've got you
                        covered.
                        {/* <Link to="">
                        <BsFillArrowUpRightSquareFill className="learnmore-icon" />
                      </Link> */}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3} md={4} className="mb-4">
                  <Card className="h-cards">
                    {/* <Card.Img variant="top" src={car3} className="f-img" /> */}
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="18 32 164 136"
                      viewBox="18 32 164 136"
                      height="200"
                      width="200"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label
                      className="svg1"
                    >
                      <path
                        d="M115.279 140.771c-4.023 2.009-6.811 6.12-6.808 10.917.003 4.793 2.79 8.898 6.809 10.905 4.023-2.009 6.811-6.12 6.808-10.917-.003-4.794-2.79-8.898-6.809-10.905z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M60.813 140.771c-4.023 2.009-6.811 6.12-6.808 10.917.003 4.793 2.79 8.898 6.809 10.905 4.023-2.009 6.811-6.12 6.808-10.917-.003-4.794-2.791-8.898-6.809-10.905z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M167.022 37.44h-27.233c-3.681 0-6.907.077-7.88 3.623l-9.17 26.296H41.958l.576-.68c-7.489 0-11.289 5.771-8.796 12.824l11.505 33.509c2.493 7.053 10.803 14.184 18.292 14.184h43.573c7.489 0 15.656-7.131 18.148-14.184l11.361-32.829c.098-.277.121-.197.199-.47l9.202-25.954h21.002c4.513 0 8.17-3.652 8.17-8.16s-3.655-8.159-8.168-8.159z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M109.475 135.361h-.005c-9.009.008-16.335 7.331-16.331 16.33a16.203 16.203 0 0 0 4.792 11.536A16.238 16.238 0 0 0 109.473 168h.013a16.246 16.246 0 0 0 11.553-4.784 16.206 16.206 0 0 0 4.779-11.544c-.004-8.996-7.333-16.311-16.343-16.311zm5.784 22.086a8.113 8.113 0 0 1-5.776 2.393h-.007a8.12 8.12 0 0 1-5.771-2.385 8.1 8.1 0 0 1-2.396-5.769c-.001-4.5 3.662-8.162 8.165-8.165h.004c4.504 0 8.17 3.658 8.171 8.157a8.098 8.098 0 0 1-2.39 5.769z"
                        fill="#55a630"
                        data-color="2"
                      ></path>
                      <path
                        d="M55.008 135.361h-.005c-9.009.008-16.335 7.331-16.331 16.33a16.203 16.203 0 0 0 4.792 11.536A16.242 16.242 0 0 0 55.007 168h.013a16.246 16.246 0 0 0 11.553-4.784 16.206 16.206 0 0 0 4.779-11.544c-.004-8.996-7.333-16.311-16.344-16.311zm5.785 22.086a8.111 8.111 0 0 1-5.776 2.393h-.007a8.12 8.12 0 0 1-5.771-2.385 8.1 8.1 0 0 1-2.396-5.769c-.001-4.5 3.662-8.162 8.165-8.165h.004c4.504 0 8.17 3.658 8.171 8.157a8.098 8.098 0 0 1-2.39 5.769z"
                        fill="#55a630"
                        data-color="2"
                      ></path>
                      <path
                        d="M169.745 32h-27.233c-3.469 0-9.904 0-11.778 6.476l-8.175 23.443H85.531V42.88c0-2.252-1.828-4.08-4.085-4.08s-4.085 1.827-4.085 4.08v19.04H31.065a3.96 3.96 0 0 0-.537.035c-4.323.276-7.913 2.159-10.191 5.376-2.546 3.594-3.036 8.401-1.35 13.174l11.512 33.016c3.195 9.042 13.129 16.396 22.144 16.396h57.189c8.969 0 18.838-7.278 22.005-16.24L143.19 81.21c.118-.332.215-.754.302-1.272l8.157-23.459h18.096c6.758 0 12.255-5.49 12.255-12.24S176.503 32 169.745 32zm0 16.319h-21.002a4.085 4.085 0 0 0-3.859 2.741l-9.27 26.678c-.069.242-.13.539-.197.954l-11.289 32.283c-1.993 5.642-8.808 10.781-14.296 10.781H52.643c-5.532 0-12.414-5.219-14.434-10.935L26.697 77.805c-.798-2.258-.685-4.359.31-5.764 1.149-1.623 3.155-1.963 4.635-1.963h45.719v23.321l-10.845-10a4.092 4.092 0 0 0-5.772.231 4.077 4.077 0 0 0 .23 5.766l17.702 16.319c.019.017.044.022.063.039.316.281.669.524 1.07.699.037.016.075.021.112.036.056.023.113.034.17.054.442.157.898.253 1.355.253h.003c.457 0 .912-.096 1.355-.253.057-.02.114-.031.17-.054.037-.015.076-.02.112-.036a4.052 4.052 0 0 0 1.07-.699c.019-.017.044-.022.063-.039l17.701-16.319a4.077 4.077 0 0 0 .23-5.766 4.092 4.092 0 0 0-5.772-.231l-10.845 10v-23.32h39.931c1.738 0 3.286-1.1 3.858-2.738l9.17-26.296c.031-.085.057-.175.082-.263.049-.181.094-.266.09-.271.531-.351 2.77-.351 3.85-.351h27.233c2.253 0 4.085 1.83 4.085 4.08s-1.834 4.079-4.087 4.079z"
                        fill="#55a630"
                        data-color="2"
                      ></path>
                    </svg>
                    <Card.Body>
                      <Card.Title className="card-title">
                        Interactive Tools
                      </Card.Title>{" "}
                      <p className="textforcard" style={{ textAlign: "left" }}>
                        Our interactive tools make it easy to track your
                        progress, set goals, and stay motivated. Whether you're
                        counting macros or monitoring your hydration levels,
                        we've got the tools you need to succeed. &nbsp;&nbsp;
                        {/* <Link to="">
                        <BsFillArrowUpRightSquareFill className="learnmore-icon" />
                      </Link> */}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3} md={4} className="mb-4">
                  <Card className="h-cards">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      className="svg1"
                    >
                      <path
                        fill="#aefa2a"
                        d="M7.879 7.5c.504-.61 1.267-1 2.121-1c.854 0 1.617.39 2.121 1a2.75 2.75 0 1 1-4.243 0m5.871 1.75c0-.632-.156-1.228-.432-1.75H17.5A1.5 1.5 0 0 1 19 9v.5c0 1.587-1.206 3.212-3.315 3.784A2.5 2.5 0 0 0 13.5 12h-.95a3.74 3.74 0 0 0 1.2-2.75M13.5 13a1.496 1.496 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4c-3.14 0-5-2.029-5-4v-.5A1.496 1.496 0 0 1 6.5 13zM1 9.5c0 1.587 1.206 3.212 3.315 3.784A2.5 2.5 0 0 1 6.5 12h.95a3.74 3.74 0 0 1-1.2-2.75c0-.632.156-1.228.433-1.75H2.5A1.5 1.5 0 0 0 1 9zm7.75-5.75a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0m8 0a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0"
                      />
                    </svg>
                    <Card.Body>
                      <Card.Title className="card-title">
                        Community Support
                      </Card.Title>{" "}
                      <p className="textforcard" style={{ textAlign: "left" }}>
                        Connect with like-minded individuals in our vibrant
                        community. Share tips, swap recipes, and celebrate
                        victories together as you work towards your health and
                        wellness goals. &nbsp;&nbsp;
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Row>
                <Col lg={4} md={4} className="mb-4">
                  <Card className="h-cards">
                    <Icon
                      icon="fluent:people-community-20-filled"
                      className="svg1"
                      style={{ color: "#aefa2a" }}
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        Community Support
                      </Card.Title>{" "}
                      <p className="textforcard" style={{ textAlign: "left" }}>
                        Connect with like-minded individuals in our vibrant
                        community. Share tips, swap recipes, and celebrate
                        victories together as you work towards your health and
                        wellness goals. &nbsp;&nbsp;
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={4} className="mb-4">
                  <Card className="h-cards">
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="55 60.5 90.001 79.001"
                      viewBox="55 60.5 90.001 79.001"
                      height="200"
                      width="200"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label
                      className="svg1"
                    >
                      <path
                        d="M120.58 95.34c0-8.633-5.463-15.992-13.097-18.838-.332-3.867-3.54-6.921-7.482-6.921s-7.151 3.054-7.484 6.921c-7.633 2.843-13.094 10.183-13.092 18.731-.715 12.876-4.927 21.656-7.375 25.747-1.336 2.234-1.366 4.93-.077 7.209 1.306 2.311 3.664 3.691 6.308 3.691h9.959c2.082 4.6 6.627 7.621 11.761 7.621 5.133 0 9.677-3.021 11.759-7.621h9.961c2.644 0 5.005-1.379 6.308-3.693 1.289-2.279 1.256-4.972-.08-7.206-2.447-4.092-6.656-12.875-7.369-25.641zm-20.579-21.921c1.435 0 2.668.827 3.288 2.023a20.042 20.042 0 0 0-2.767-.214H99.48c-.942 0-1.861.088-2.769.215.62-1.197 1.854-2.024 3.29-2.024zm0 62.243a9.097 9.097 0 0 1-7.391-3.783h14.78a9.094 9.094 0 0 1-7.389 3.783zm24.699-9.365a3.385 3.385 0 0 1-2.978 1.744H78.281a3.384 3.384 0 0 1-2.978-1.744c-.608-1.077-.596-2.294.032-3.343 2.627-4.393 7.15-13.808 7.916-27.613 0-8.973 7.28-16.274 16.23-16.274h1.042c8.95 0 16.23 7.301 16.232 16.382.76 13.696 5.284 23.111 7.913 27.506.625 1.048.637 2.265.032 3.342z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M100.522 82.269H99.48c-7.188 0-13.035 5.865-13.035 13.021l-.007.335c-.673 12.071-4.142 21.024-6.931 26.409a1.92 1.92 0 0 0 1.695 2.803 1.91 1.91 0 0 0 1.7-1.034c2.966-5.72 6.647-15.212 7.362-28.021l.01-.442c0-5.09 4.13-9.233 9.207-9.233h1.042c1.057 0 1.914-.86 1.914-1.919s-.858-1.919-1.915-1.919z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M77.877 71.415a1.883 1.883 0 0 0 2.679-.28c.331-.385.486-.897.434-1.409-.077-.51-.307-.972-.715-1.279l-7.861-6.422c-.79-.64-2.041-.512-2.704.282-.307.41-.459.895-.409 1.407.052.512.307.972.715 1.304l7.861 6.397z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M62.258 76.917l9.264 4.145c.254.102.511.152.793.152.738 0 1.428-.435 1.735-1.124.434-.972 0-2.099-.97-2.534l-9.239-4.145c-.945-.41-2.118.025-2.527.972-.204.46-.229.972-.05 1.459.176.485.535.87.994 1.075z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M68.486 88.226l-10.007-1.612a1.942 1.942 0 0 0-2.193 1.612c-.077.487.05.997.331 1.407.307.435.74.692 1.251.767l10.004 1.614c.102.025.204.025.307.025.945 0 1.76-.692 1.887-1.612a1.796 1.796 0 0 0-.331-1.434 1.918 1.918 0 0 0-1.249-.767z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M66.801 99.74l-10.081 1.05c-.511.05-.97.28-1.276.69a1.872 1.872 0 0 0-.434 1.409 1.913 1.913 0 0 0 1.914 1.714h.177l10.081-1.049a1.923 1.923 0 0 0 1.303-.717 1.72 1.72 0 0 0 .406-1.382c-.101-1.075-1.043-1.842-2.09-1.715z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M120.931 70.725c.434 0 .867-.155 1.199-.435l7.861-6.397c.409-.332.663-.795.715-1.304a1.94 1.94 0 0 0-.434-1.409c-.638-.767-1.889-.92-2.682-.28l-7.861 6.422c-.406.332-.663.767-.713 1.279a1.95 1.95 0 0 0 .409 1.407c.382.46.918.717 1.506.717z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M125.933 78.963c.331.692 1.019 1.152 1.76 1.152.282 0 .536-.077.793-.18l9.239-4.145a1.998 1.998 0 0 0 1.019-1.074c.179-.46.155-.997-.05-1.457-.409-.922-1.583-1.409-2.527-.975l-9.264 4.145c-.945.435-1.378 1.562-.97 2.534z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M132.109 90.887l10.004-1.587a1.95 1.95 0 0 0 1.608-2.201 1.949 1.949 0 0 0-2.196-1.612l-10.029 1.612c-.484.077-.945.36-1.224.77a1.9 1.9 0 0 0-.359 1.432c.155.922.97 1.612 1.889 1.612.103-.001.205-.001.307-.026z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                      <path
                        d="M144.563 100.355c-.331-.41-.79-.64-1.301-.692l-10.056-1.049c-1.047-.127-2.016.667-2.118 1.717-.05.51.102.997.434 1.407.307.382.768.64 1.276.69l10.106 1.049h.179c.97 0 1.787-.742 1.914-1.714.025-.514-.102-.998-.434-1.408z"
                        fill="#aefa2a"
                        data-color="1"
                      ></path>
                    </svg>
                    <Card.Body>
                      <Card.Title className="card-title">
                        Convenient Consultations
                      </Card.Title>{" "}
                      <p className="textforcard" style={{ textAlign: "left" }}>
                        Need personalized guidance? Book virtual consultations
                        with experienced nutritionists right from the comfort of
                        your home. Get expert advice, ask questions, and take
                        control of your health journey. &nbsp;&nbsp;
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={4} className="mb-4">
                  <Card className="h-cards">
                    <Icon
                      icon="codicon:workspace-trusted"
                      className="svg1"
                      style={{ color: "#aefa2a" }}
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        Trusted Marketplace
                      </Card.Title>{" "}
                      <p className="textforcard" style={{ textAlign: "left" }}>
                        Shop with confidence in our curated marketplace
                        featuring a wide selection of high-quality nutritional
                        products. Rest assured, every product undergoes rigorous
                        testing and meets our strict quality standards.
                        &nbsp;&nbsp;
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row> */}

              <br />
              <br />
            </Container>
          </Fade>
        </div>
        <div className="total3">
          <Container>
            <Fade bottom>
              <p className="t3">
                Join us at Nutritionist and take the first step towards a
                Healthier, Happier you!
              </p>
            </Fade>
            <Fade right>
              <div className="colfour1">
                <button className="btn1" onClick={this.togglemodal5}>
                  JOIN WAITLIST
                </button>
              </div>
            </Fade>
          </Container>
        </div>
        <div className="total4">
          <div className="position-relative">
            <img src={gym} className="imgone" alt="Gym" />
            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade left>
                <div>Sports & Gym Supplements</div>
              </Fade>
            </div>
          </div>

          <div className="position-relative">
            <img src={tab} className="imgone" alt="tablet" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade right>
                <div>Dietary Supplements</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={supp} className="imgone" alt="supplementary" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade left>
                <div>Nutraceuticals</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={ayur} className="imgone" alt="ayurvedic" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade right>
                <div>Ayurvedic & Herbal Supplements</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={snack} className="imgone" alt="snack" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade left>
                <div> Everyday Packaged Snacks</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={breakfast} className="imgone" alt="breakfast" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade right>
                <div> Breakfast Essentials</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={baby} className="imgone" alt="baby" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              {" "}
              <Fade left>
                <div> Baby Food Products</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={preg} className="imgone" alt="pregnancy" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade right>
                <div> Pregnancy Foods</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={nutri} className="imgone" alt="nutri" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade left>
                <div> Geriatric Nutrition Products</div>
              </Fade>
            </div>
          </div>
          <div className="position-relative">
            <img src={pet} className="imgone" alt="pet" />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-white text-center font-weight-bold newname"
              style={{ zIndex: 1 }}
            >
              <Fade right>
                <div>Pet Food Products</div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="total5">
          <Fade bottom>
            <p className="contact">
              {" "}
              Join the waitlist - we'll notify you when we launch.
            </p>
          </Fade>
          <Fade bottom>
            <div className="contactpad">
              <div class="container">
                <div class="row">
                  {/* <!-- Web View: All fields in a single row --> */}
                  <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="mb-3">
                      <div className="t5">
                        <label for="firstname" class="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstname"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="mb-3">
                      <div className="t5">
                        <label for="lastname" class="form-label">
                          Last Name
                        </label>
                        <input type="text" class="form-control" id="lastname" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="mb-3">
                      <div className="t5">
                        <label for="phone" class="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          class="form-control"
                          id="phonenumber"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="mb-3">
                      <div className="t5">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input type="email" class="form-control" id="email" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="mb-3">
                      <button class="btn2  btn-block">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="total6">
          <Fade bottom>
            <div class="logo-container">
              <a href="https://www.instagram.com/" target="_blank">
                <Icon
                  icon="ri:instagram-fill"
                  style={{ color: "#b8b2b2" }}
                  className="icon1"
                />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.youtube.com/" target="_blank">
                <Icon
                  icon="icon-park-solid:youtube"
                  style={{ color: "#b8b2b2" }}
                  className="icon1"
                />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/" target="_blank">
                <Icon
                  icon="mingcute:linkedin-fill"
                  style={{ color: "#b8b2b2" }}
                  className="icon1"
                />
              </a>
            </div>
          </Fade>
          <Fade bottom>
            <div class="copyright">
              <p style={{ marginBottom: "0em", color: "white", padding: "1%" }}>
                Copyright © 2024. All rights reserved.
              </p>
              <br />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
