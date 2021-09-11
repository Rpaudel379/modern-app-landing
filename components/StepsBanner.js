const StepsBanner = () => {
  return (
    <section id="steps-banner" className="bg-blue">
      <div className="container-sm">
        <p className="fw-bold text-secondary text-center text-grey-3">
          WHATS THE FUNCTION
        </p>
        <p className="h3 text-white fw-bold text-center lh-base ">
          Let’s see how it works
        </p>

        {/* grid */}

        <div className="row text-center text-md-start  mx-xl-5 gx-xl-5">
          {/* column */}
          <div className="col-md-6 col-lg-3 mt-5 mt-md-3">
            <p className="numbers mx-auto mx-md-0 fs-3 d-flex align-items-center justify-content-center text-blue bg-white fw-bolder">
              01
            </p>
            <p className="fs-6 fw-bold text-white">
              Set disbursement Instructions
            </p>
            <p className="text-grey-3 fw-custom lh-lg">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
          {/* column */}
          {/* column */}
          <div className="col-md-6 col-lg-3 mt-5 mt-md-3">
            <p className="numbers mx-auto mx-md-0 fs-3 d-flex align-items-center justify-content-center text-blue bg-white fw-bolder">
              02
            </p>
            <p className="fs-6 fw-bold text-white">
              Assembly retrieves funds from your account
            </p>
            <p className="text-grey-3 fw-custom">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
          {/* column */}
          {/* column */}
          <div className="col-md-6 col-lg-3 mt-5 mt-md-3">
            <p className="numbers mx-auto mx-md-0 fs-3 d-flex align-items-center justify-content-center text-blue bg-white fw-bolder">
              03
            </p>
            <p className="fs-6 fw-bold text-white">
              Assembly initiates disbursement
            </p>
            <p className="text-grey-3 fw-custom">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
          {/* column */}
          {/* column */}
          <div className="col-md-6 col-lg-3 mt-5 mt-md-3">
            <p className="numbers mx-auto mx-md-0 fs-3 d-flex align-items-center justify-content-center text-blue bg-white fw-bolder">
              04
            </p>
            <p className="fs-6 fw-bold text-white">
              Customer receives funds payment
            </p>
            <p className="text-grey-3 fw-custom">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
          {/* column */}
        </div>

        {/* end of grid */}
      </div>
    </section>
  );
};

export default StepsBanner;
