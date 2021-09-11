const CoreFeatures = () => {
  return (
    <section id="core">
      <div className="container-sm">
        <div className="row container-grid align-items-center justify-content-around ">
          <div className="col-md col-lg-4 order-2 order-md-1 mt-5 mt-md-0">
            <img
              src={"/coreFeature.png"}
              alt="iphone image"
              className="img-fluid iphone-img"
            />
          </div>
          <div className="col-md col-lg-5 order-1 order-md-2">
            <p className="fw-bold  text-blue text-center text-md-start">
              CORE FEATURES
            </p>

            <p className="h1 lh-base fs-2  fw-bolder mt-0 text-center text-md-start">
              Smart Jackpots that you may love this anytime & anywhere
            </p>

            <div className="mt-5">
              <div className="d-flex  align-items-start ">
                <img src={"/core-feature/briefcase.svg"} className=" pe-4" />
                <div>
                  <p className="fs-5 fw-bold">Smart Features</p>
                  <p className="text-grey lh-base fw-custom">
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managements. your blood tests.
                  </p>
                </div>
              </div>
              <div className="d-flex  align-items-start mt-3 ">
                <img src={"/core-feature/secure.svg"} className=" pe-4" />
                <div>
                  <p className="fs-5 fw-bold">Secure Contents</p>
                  <p className="text-grey lh-base fw-custom">
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managements. your blood tests.
                  </p>
                </div>
              </div>
              <div className="d-flex bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
