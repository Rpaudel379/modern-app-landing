const CoreFeaturesBottom = () => {
  return (
    <section id="core-bottom">
      <div className="container-sm">
        <div className="row mx-lg-5 gx-lg-5 align-items-center ">
          {/* texts */}
          <div className="col-md">
            <p className="fw-bold text-secondary text-center text-md-start text-blue">
              CORE FEATURES
            </p>
            <p className="h3  fw-bold text-center text-md-start lh-base ">
              Smart Jackpots that you may love this anytime & anywhere
            </p>

            <p className=" lh-lg fw-custom mt-4 text-grey-2">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>

            <button
              type="button"
              className="btn mt-3 bg-blue text-white px-3 py-2 rounded-pill fw-custom custom-shadow-hover-blue "
            >
              Get Started
            </button>
          </div>
          {/* end of texts */}

          {/* image */}

          <div className="col-md">
            <img
              src="/partner.png"
              alt="picture"
              className="img-fluid mt-5 mt-md-0"
            />
          </div>

          {/* end of image */}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesBottom;
