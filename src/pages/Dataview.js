import React from "react";
import "./login.css";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function Dataview() {
  return (
    <div className="dataview">
      <>
        <div class="container">
          <div class="row">
            <h3>View all data here</h3>
            <table>
              <tr>
                <th>Agent Names</th>
                <th>Site-Location</th>
                <th>PH </th>
                <th>Oxygen </th>
                <th>Temperature</th>
                <th>Data</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <th>Temperature</th>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Mexico</td>
                <td>Mexico</td>
                <th>Temperature</th>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Austria</td>
                <td>Austria</td>
                <th>Temperature</th>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>UK</td>
                <td>UK</td>
                <th>Temperature</th>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>UK</td>
                <td>UK</td>
                <th>Temperature</th>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>UK</td>
                <td>UK</td>
                <th>Temperature</th>
              </tr>
            </table>
            <Link to="#" className="menu-bars">
              <IoIcons.IoMdArrowRoundForward />
            </Link>
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
        </div>
        </>
    </div>
  );
}

export default Dataview;
