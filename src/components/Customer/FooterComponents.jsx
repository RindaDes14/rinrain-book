import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {
  return (
    <>
      <footer className="mt-5">
        <Container>
          <hr className="d-lg-none d-block" />
          <Row>
            <Col lg={3}>
              <img src="../../src/assets/logo.png" alt="" width="120px" />
              <p className="mt-3">&copy; 2024 Rinrain Book. </p>
            </Col>
            <Col lg={3}>
              <h5>Belanja</h5>
              <div className="mt-3">
                <Link to="/">Berbelanja</Link>
                <Link to="/">Pembayaran</Link>
                <Link to="/">Pengiriman</Link>
              </div>
            </Col>
            <Col lg={3}>
              <h5>Tentang Rinrain</h5>
              <div className="mt-3">
                <Link to="/">Tentang Kami</Link>
                <Link to="/">Kerjasama</Link>
                <Link to="/">Kebijakan & Privasi</Link>
                <Link to="/">Bantuan</Link>
              </div>
            </Col>
            <Col lg={3}>
              <h5>Rinrain Office</h5>
              <div className="d-flex mb-2 mt-3">
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px' }} />
                <span>021 888 8888</span>
              </div>
              <div className="d-flex">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
                <span>Jalan Inpektur Sudirman, No. 1234, Sukajadi, Palembang, Sumatera Selatan, 3023</span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterComponent;
