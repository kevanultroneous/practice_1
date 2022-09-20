import "./App.css";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import icon from "./img/dbl-icon.png";
function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="NavbarCustom">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src={icon} height={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {[
                "Inspiration",
                "Find Work",
                "Learn Design",
                "Go Pro",
                "Design Files",
                "Hire Designers",
              ].map((v, i) => (
                <Nav.Link href="#action1" key={i}>
                  {v}
                </Nav.Link>
              ))}
            </Nav>
            <Form className="d-flex FormCenter">
              <BiSearch size={20} color="#9E9EA7" />
              <p className="SigninText">Sign in</p>
              <Button variant="outline-success" className="BtnCustom">
                Share my work
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="DetailRow">
        <Col xl={12} lg={12} className="DFlexCenter">
          <div className="TabsWrraper">
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
          </div>
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
          <div className="TrandingSearchWrraper">
            <p className="SearchTitle">Trending searches</p>
            {[
              "landing page",
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
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
