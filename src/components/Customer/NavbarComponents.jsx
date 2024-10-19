import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const NavbarComponents = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="custom-navbar mb-5">
        <Container className="d-flex align-items-center justify-content-between">
          <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-3">
              <Nav.Link href="/">Beranda</Nav.Link>
              <NavDropdown title="Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Best Seller</NavDropdown.Item>
                <NavDropdown.Item href="/">Fiksi & Fantasi</NavDropdown.Item>
                <NavDropdown.Item href="/">Motivasi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex ms-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>

            <Link to="/" className="btn btn-info ms-2">Masuk</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponents