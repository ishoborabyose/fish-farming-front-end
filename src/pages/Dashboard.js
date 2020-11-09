import React from "react";
import "./login.css";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import './gauge1.css';
import './Graph.js';

function Dashboard() {
  
  return (
    <div className="dataview">
      <div class="container">
        <>
          <p class="row">
            <h3 style={{ color: "#060b26" }}>
              Rwanda Animal Ressources Improvement Cooperative
            </h3>

            <p>
              Dear users, with the implemetation of IoT, we want to assist the
              farming of fishes and move it to another level. Be the first one
              to change the production of our local products from intensive to
              extensive production. With challenges that we faced, we believe
              that this platform will bring a smile on your face!
            </p>

            <br />

            <br />
            <a
              class="btn btn-primary"
              data-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
              style={{width:'50%'}}
            >
              Check device now
            </a>

            <button
              class="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="multiCollapseExample1 multiCollapseExample2"
              style={{ backgroundColor: "white", color: "black", width:'49%' }}
              
            >
              Close tab
            </button>
          </p>
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                  <table>
                    <tr>
                      <th>PH</th>
                      <th>Disolved oxygen</th>
                      <th>Temperature</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              class="col-6 col-md-3"
              className="columns"
              style={{ backgroundColor: "white" }}
            >
              <Link to="#" className="menu-bars">
                <IoIcons.IoMdPeople />
              </Link>
              <div class="card-body">
                <h5 class="card-title">People</h5>
                <p class="card-text">Number of registered people:</p>
              </div>
            </div>

            <div
              class="col-6 col-md-3"
              className="columns"
              style={{ backgroundColor: "white" }}
            >
              <Link to="#" className="menu-bars">
                <IoIcons.IoIosToday />
              </Link>
              <div class="card-body">
                <h5 class="card-title">Working sensors</h5>
                <p class="card-text">Working sensors:</p>
              </div>
            </div>

            <div
              class="ccol-6 col-md-3"
              className="columns"
              style={{ backgroundColor: "white" }}
            >
              <Link to="#" className="menu-bars">
                <IoIcons.IoIosNotifications />
              </Link>
              <div class="card-body">
                <h5 class="card-title">Notifications</h5>
                <p class="card-text">Recieved notifications:</p>
                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>

            <div
              class="ccol-6 col-md-3"
              className="columns"
              style={{ backgroundColor: "white" }}
            >
              <Link to="#" className="menu-bars">
                <IoIcons.IoIosPeople />
              </Link>
              <div class="card-body">
                <h5 class="card-title">Qualified staff</h5>
                <p class="card-text">Working people:</p>
                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>
          </div>
          <div class="row">
            <p style={{ color: "white" }}>.</p>
          </div>

          <div class="message">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              style={{ marginLeft: "0px" }}
            >
              Write to us
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    {" "}
                    <input
                      type="email"
                      placeholder="user@x.com"
                      className="input-email"
                    ></input>
                    <br />
                    <input
                      type="text"
                      placeholder="enter your message"
                      className="input-text"
                    ></input>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <p style={{ color: "white" }}>.</p>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-8"
              style={{ backgroundColor: "white", border: "1px" }}
            >
              <h4 style={{ color: "#060b26", textAlign: "center" }}>
                Know more!
              </h4>
              <div class="column">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    
                   
                     

                    <div class='gauge'>
       <div class='gauge__body'>
           <div class='gauge__fill'></div>
               <div class='gauge__cover'>20%</div>

           

       </div>
       </div>
                   
                  </div>
                </div>

                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    
                    <div class='gauge'>
       <div class='gauge__body'>
           <div class='gauge__fill'></div>
               <div class='gauge__cover'>10%</div>

           

       </div>
       </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    
                    <div class='gauge'>
       <div class='gauge__body'>
           <div class='gauge__fill'></div>
               <div class='gauge__cover'>20%</div>

           

       </div>
       </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    
                    <div class='gauge'>
       <div class='gauge__body'>
           <div class='gauge__fill'></div>
               <div class='gauge__cover'>20%</div>

           

       </div>
       </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-6 col-md-4"
              style={{ backgroundColor: "black", border: "1px" }}
            >
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1" style={{ color: "white" }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  ></input>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" style={{ color: "white" }}>
                    Write your issue
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="message"
                  ></input>
                </div>

                <button type="submit" class="btn btn-primary">
                  Send Help Stipend
                </button>
              </form>
            </div>
          </div>
        
        <div class="row" style={{ backgroundColor: "white" }}>
          <p style={{ color: "white" }}>.</p>
        </div>

        <div class="row" style={{ backgroundColor: "#d3d8f8" }}>
          <div class="col-sm">
            <ul>
              <dt>
                {" "}
                <a href="/Services" style={{ color: "#060b26" }}>
                  Device status!
                </a>
              </dt>
              <dt>
                <a href="" style={{ color: "#060b26" }}>
                  New Account
                </a>
              </dt>
              <dt>
                <a href="" style={{ color: "#060b26" }}>
                  reports
                </a>
              </dt>
              <dt>
                <a href="" style={{ color: "#060b26" }}>
                  Monthly data
                </a>
              </dt>
            </ul>
          </div>
          <div class="col-sm">
            <ul>
              <dt style={{ color: "#060b26" }}>
                <img
                  src="/logo.png"
                  alt="image"
                  className="logo1"
                  style={{ textAlign: "start" }}
                />
              </dt>

              <dt style={{ color: "#060b26" }}>
                <p>Rwanda Animal Ressources Improvement Cooperative</p>
              </dt>
              <dt style={{ color: "#060b26" }}>
                <p style={{ color: "red", textAlign: "start" }}>"RARICO"</p>
              </dt>
              <dt style={{ color: "#060b26" }}>@copyright</dt>
            </ul>
          </div>
          <div class="col-sm">
            <ul>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <AiIcons.AiFillPhone />
                </Link>
                +250788443388
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineMail />
                </Link>
                info@rarico.com
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <IoIcons.IoLogoFacebook />
                </Link>
                rarico
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <IoIcons.IoLogoInstagram />
                </Link>
                rarico
              </dt>
            </ul>
          </div>
        </div>
        </>
      </div>
      
    </div>
  );
}

export default Dashboard;

const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}
