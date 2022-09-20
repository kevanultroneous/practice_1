import "./App.css";
import { Col, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

function App() {
  return (
    <Row className="DetailRow">
      <Col xl={12} lg={12} className="p-0">
        <p className="Adwrraper">
          LAST CHANCE to get 25% off our 16 Week Product Design course .
          Flexible Learning. Live Mentorship. Hiring Connections.
          <span className="SignupText">Sign up now!</span>
        </p>
      </Col>
      <Col xl={12} lg={12} className="TabsWrraper">
        {[
          "Discover",
          "Animation",
          "Branding",
          "Illustration",
          "Mobile",
          "Print",
          "Product Design",
          "Typography",
          "Web Design",
        ].map((v, i) => (
          <div key={i} className="Tabs">
            {v}
          </div>
        ))}
      </Col>

      <Col xl={12} lg={12} className="DFlexCenter">
        <h1 className="CenterHeading">
          Explore the world's Leading design portfolios
        </h1>
        <p className="SubContent">
          Millions of designers and agencies around the world showcase their
          portfolio work on Dribbble - the home to the world’s best design and
          creative professionals.
        </p>
        <div>
          <div className="InputWrraper">
            <BiSearch size={25} className="icons" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </Col>
      <Col xl={12} lg={12} className="TrandingSearchWrraper">
        <p className="SearchTitle">Trending searches</p>
        {[
          "Landing page",
          "ios",
          "food",
          "landingpage",
          "uxdesign",
          "app design",
        ].map((v, i) => (
          <div key={i} className="TrandingSearch">
            {v}
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default App;
