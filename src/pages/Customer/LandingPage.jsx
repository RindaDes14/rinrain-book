import NavbarComponents from "../../components/Customer/NavbarComponents";
import FooterComponents from "../../components/Customer/FooterComponents";

import { Link } from "react-router-dom"

import { Container, Row, Col, Carousel, Card, CardTitle } from "react-bootstrap";
import banner1 from "../../assets/newyear.png";
import banner2 from "../../assets/halloween.png";

import baruRilis from "../../assets/new.png";
import internationalBook from "../../assets/international-book.png";
import comic from "../../assets/comic.png";
import ebook from "../../assets/ebook.png";
import nonBook from "../../assets/non-book.png";
import event from "../../assets/event.png";

import emk from "../../assets/emk.jpg";
import mnc from "../../assets/mnc.jpg";
import grasindo from "../../assets/grasindo.jpg";
import gramedia from "../../assets/gra.jpg";
import bip from "../../assets/bip.jpg";
import fiora from "../../assets/fiora-book.jpg";

const LandingPage = () => {
  return (
    <>
      <NavbarComponents />

      <div id="banner">
        <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="icons">
        <Container className="mt-5 text-center">
          <Row>
            <Col lg={2}>
              <img src={baruRilis} alt="Baru Rilis" />
              <p className="icon-text">Baru Rilis</p>
            </Col>
            <Col lg={2}>
              <img src={internationalBook} alt="International Books" />
              <p className="icon-text">International Books</p>
            </Col>
            <Col lg={2}>
              <img src={comic} alt="Komik" />
              <p className="icon-text">Komik</p>
            </Col>
            <Col lg={2}>
              <img src={ebook} alt="eBook" />
              <p className="icon-text">eBook</p>
            </Col>
            <Col lg={2}>
              <img src={nonBook} alt="Non-Books" />
              <p className="icon-text">Non-Books</p>
            </Col>
            <Col lg={2}>
              <img src={event} alt="Event" />
              <p className="icon-text">Event</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="preview">
        <Container>
          <Row>
            <Col>
              <h4>Buku Terpopuler</h4>
            </Col>
            <Col className="text-end">
              <Link to="/" className="view">Lihat Semua</Link>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/bumi.jpg" />
                <Card.Body>
                  <Card.Title>Bumi</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text className="mt-3">Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/hujan.jpg" />
                <Card.Body>
                  <Card.Title>Hujan</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text className="mt-3">Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/about-you.jpg" />
                <Card.Body>
                  <Card.Title>About You</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/conan.jpg" />
                <Card.Body>
                  <Card.Title>Detektif Conan</Card.Title>
                  <Card.Text>Shima Mizuki</Card.Text>
                  <Card.Text>Rp 50.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/bintang.jpg" />
                <Card.Body>
                  <Card.Title>Bintang</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/fantasi2.jpg" />
                <Card.Body>
                  <Card.Title>Boruto Vol.2</Card.Title>
                  <Card.Text>Mikio Ikemoto</Card.Text>
                  <Card.Text>Rp 50.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </div>

      <div className="preview">
        <Container className="mt-5">
          <Row>
            <Col>
              <h4>Motivasi</h4>
            </Col>
            <Col className="text-end">
              <Link to="/" className="view">Lihat Semua</Link>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/motivasi2.jpg" />
                <Card.Body>
                  <Card.Title>Pulang</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/motivasi3.jpg" />
                <Card.Body>
                  <Card.Title>Garis Waktu</Card.Title>
                  <Card.Text>Fiersa Besari</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/motivasi4.jpg" />
                <Card.Body>
                  <Card.Title>Atomic Habits</Card.Title>
                  <Card.Text>James Clear</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/about-you.jpg" />
                <Card.Body>
                  <Card.Title>About You</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/hujan.jpg" />
                <Card.Body>
                  <Card.Title>Hujan</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text className="mt-3">Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/bumi.jpg" />
                <Card.Body>
                  <Card.Title>Bumi</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text className="mt-3">Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </div>

      <div className="preview">
        <Container className="mt-5">
          <Row>
            <Col>
              <h4>Fiksi dan Fantasi</h4>
            </Col>
            <Col className="text-end">
              <Link to="/" className="view">Lihat Semua</Link>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/hujan.jpg" />
                <Card.Body>
                  <Card.Title>Hujan</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text className="mt-3">Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/motivasi2.jpg" />
                <Card.Body>
                  <Card.Title>Pulang</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/fantasi2.jpg" />
                <Card.Body>
                  <Card.Title>Boruto Vol.2</Card.Title>
                  <Card.Text>Mikio Ikemoto</Card.Text>
                  <Card.Text>Rp 50.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/bumi.jpg" />
                <Card.Body>
                  <Card.Title>Bumi</Card.Title>
                  <Card.Text>Tere Liye</Card.Text>
                  <Card.Text className="mt-3">Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/bintang.jpg" />
                <Card.Body>
                  <Card.Title>Tere Liye</Card.Title>
                  <Card.Text>Bintang</Card.Text>
                  <Card.Text>Rp 80.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card className="book-card">
                <Card.Img variant="top" src="../src/assets/conan.jpg" />
                <Card.Body>
                  <Card.Text>Detektif Conan</Card.Text>
                  <Card.Title>Shima Mizuki</Card.Title>
                  <Card.Text>Rp 50.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </div>

      <div id="brand">
        <h3>Brand Pilihan</h3>
        <Container className="text-center">
          <Row>
            <Col lg={2}>
              <img src={emk} alt="Elex Media Komputindo" />
            </Col>
            <Col lg={2}>
              <img src={mnc} alt="m & c" />
            </Col>
            <Col lg={2}>
              <img src={grasindo} alt="Grasindo" />
            </Col>
            <Col lg={2}>
              <img src={gramedia} alt="Gramedia" />
            </Col>
            <Col lg={2}>
              <img src={bip} alt="Bhuana Ilmu Populer" />
            </Col>
            <Col lg={2}>
              <img src={fiora} alt="Fiora Book" />
            </Col>
          </Row>
        </Container>
      </div>

      <FooterComponents />
    </>
  );
};

export default LandingPage;
