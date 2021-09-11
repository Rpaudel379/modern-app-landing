import Image from "next/image";

// images
import vectorImg from "../assets/key-feature/vector.svg";
import speed from "../assets/key-feature/speed.svg";
import editing from "../assets/key-feature/editing.svg";

const QualityFeatures = () => {
  return (
    <section className="container-sm text-center " id="features">
      <p className="fw-bold text-blue">QUALITY FEATURES</p>
      <p className="h3 fw-bold">Meet exciting feature of app</p>

      <div className="container-grid ">
        <div className="row mt-5 justify-content-between gx-5">
          {/* column  */}

          <div className="col-md-6 col-xl-4 mb-3">
            <Image src={vectorImg} alt="vector image" width={90} />
            <h5 className="fw-bold mt-3">Vector Editing</h5>
            <p className="fw-custom text-grey  mt-3">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
          {/* column  */}
          {/* column  */}
          <div className="col-md-6 col-xl-4 mb-3">
            <Image src={editing} alt="editing image" width={90} />
            <h5 className="fw-bold  mt-3">Customize & Monitoring</h5>
            <p className="fw-custom text-grey  mt-3">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
          {/* column  */}

          {/* column  */}
          <div className="col-md-6 col-xl-4 mb-3">
            <Image src={speed} alt="editing image" width={90} />
            <h5 className="fw-bold  mt-3">Quality & Short-period</h5>
            <p className="fw-custom text-grey  mt-3">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
          {/* column  */}
        </div>
      </div>
    </section>
  );
};

export default QualityFeatures;
