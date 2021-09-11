const Payment = () => {
  return (
    <section id="payment">
      <div className="container-sm ">
        <div className="payment-pattern "></div>

        <div className="row container-grid align-items-center justify-content-center gx-lg-5">
          {/* column 2 */}

          <div className="col-md col-lg-5 order-1 order-md-2">
            <p className="fw-bold  text-blue text-center text-md-start">
              PAYMENT SECURITY
            </p>

            <p className="h1 lh-base fs-2  fw-bolder mt-0 text-center text-md-start header">
              Secure Payment Transaction System with #1 Ranking
            </p>

            <p className="text-blue fw-custom lh-lg mt-4 text-center text-md-start  ">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>

            <div className="text-center text-md-start">
              <button
                type="button"
                className="btn mt-3 bg-blue text-white px-3 py-2 rounded-pill fw-custom custom-shadow-hover-blue "
              >
                Learn More
              </button>
            </div>
          </div>
          {/* end of column 2 */}

          {/* column 1 */}
          <div className="col-md col-lg-6 order-2 order-md-1 mt-5 mt-md-0 img-cont">
            <img
              src={"/paymentThumb.png"}
              alt="iphone image"
              className="img-fluid "
            />
          </div>
          {/* end of column 1 */}
        </div>
      </div>
    </section>
  );
};

export default Payment;
