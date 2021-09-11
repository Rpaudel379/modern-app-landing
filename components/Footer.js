const Footer = () => {
  return (
    <section id="footer" className="mt-5">
      <div className="container-sm">
        <div className="row gy-3 gy-md-0 mx-md-2 mx-lg-5">
          <div className="col-6 col-md-3">
            <p className="fw-bold text-blue  fs-6 lead my-4">About Us</p>

            <p className="mb-2">Support Center</p>
            <p className="mb-2">Customer Support</p>
            <p className="mb-2">About Us</p>
            <p className="mb-2">Copyright</p>
            <p className="mb-2">Popular Campaign</p>
          </div>
          {/* `````````````` */}
          {/* `````````````` */}
          <div className="col-6 col-md-3">
            <p className="fw-bold text-blue fs-6 lead  my-4">Our Information</p>

            <p className="mb-2">Return Policy</p>
            <p className="mb-2">Privacy Polict</p>
            <p className="mb-2">Terms & Condition</p>
            <p className="mb-2">Site Map</p>
            <p className="mb-2">Store Hours</p>
          </div>
          {/* `````````````` */}
          {/* `````````````` */}
          <div className="col-6 col-md-3">
            <p className="fw-bold text-blue fs-6 lead  my-4">My Account</p>

            <p className="mb-2">Press inquiries</p>
            <p className="mb-2">Social Media</p>
            <p className="mb-2">directories</p>
            <p className="mb-2">Images & B-roll</p>
            <p className="mb-2">Permissions</p>
          </div>
          {/* `````````````` */}
          {/* `````````````` */}
          <div className="col-6 col-md-3">
            <p className="fw-bold text-blue fs-6 lead  my-4">Policy</p>

            <p className="mb-2">Application security</p>
            <p className="mb-2">Software principles</p>
            <p className="mb-2">Unwanted software policy</p>
            <p className="mb-2">Responsible supply chain</p>
          </div>
        </div>

        <p className="text-center text-grey-2 my-5">
          Theme design by
          <a
            href="https://startuplanding.redq.io/"
            className="ms-2 text-decoration-none"
          >
            https://startuplanding.redq.io/
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
