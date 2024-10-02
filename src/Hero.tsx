import "./Hero.css";

function Hero() {
  const gradients = [
    {
      from: "#4CAF50",
      to: "#2196F3",
      name: "Green to Blue",
      description:
        "This gradient will create a smooth transition between green and blue.",
      backgroundColor: "#4CAF50",
      id: 1,
    },

    {
      from: "#FF9800",
      to: "#F44336",
      name: "Orange to Red",
      description:
        "This gradient will create a smooth transition between orange and red.",
      backgroundColor: "#4CAF50",
      id: 2,
    },

    {
      from: "#3F51B5",
      to: "#E91E63",
      name: "Blue to Pink",
      description:
        "This gradient will create a smooth transition between blue and pink.",
      backgroundColor: "#4CAF50",
      id: 3,
    },

    {
      from: "#4CAF50",
      to: "#FF9800",
      name: "Green to Orange",
      description:
        "This gradient will create a smooth transition between green and orange.",
      backgroundColor: "#4CAF50",
      id: 4,
    },

    {
      from: "#3F51B5",
      to: "#FFC107",
      name: "Blue to Yellow",
      description:
        "This gradient will create a smooth transition between blue and yellow.",
      backgroundColor: "#4CAF50",
      id: 5,
    },

    {
      from: "#FF9800",
      to: "#FFC107",
      name: "Orange to Yellow",
      description:
        "This gradient will create a smooth transition between orange and yellow.",
      backgroundColor: "#4CAF50",
      id: 6,
    },

    {
      from: "#4CAF50",
      to: "#E81CFF",
      name: "Green to Purple",
      description:
        "This gradient will create a smooth transition between green and blue.",
      backgroundColor: "#4CAF50",
      id: 7,
    },

    {
      from: "#FF9800",
      to: "#E91E63",
      name: "Orange to Pink",
      description:
        "This gradient will create a smooth transition between orange and pink.",
      backgroundColor: "#4CAF50",
      id: 8,
    },
  ];

  const gradientCode = [
    "background: linear-gradient(to right, #4CAF50, #2196F3);",
    "background: linear-gradient(to right, #FF9800, #F44336);",
    "background: linear-gradient(to right, #3F51B5, #E91E63);",
    "background: linear-gradient(to right, #4CAF50, #FF9800);",
    "background: linear-gradient(to right, #3F51B5, #FFC107);",
    "background: linear-gradient(to right, #FF9800, #FFC107);",
    "background: linear-gradient(to right, #4CAF50, #3F51B5);",
    "background: linear-gradient(to right, #FF9800, #E91E63);",
  ];

  const onclickCopyGradient = (gradientCode: string) => {
    navigator.clipboard.writeText(gradientCode);
    alert("Gradient code copied to clipboard!");
  };

  return (
    <div className="hero-background">
      <div>
        <div className="headingbox">
          <h1 className="head">
            Gradient
            <br />
            Maker
          </h1>
          <h3 className="mainhead">Create a gradient background using CSS</h3>
          <h3 className="mainhead">
            Make beautiful and unique gradients using only CSS!
          </h3>
        </div>
      </div>
      <div className="gradient-box">
        {gradients.map((gradient) => (
          <div key={gradient.id} className="gradient-item">
            <div
              className="card"
              style={{
                background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
              }}
            ></div>

            <h3>{gradient.name}</h3>
            <p>{gradient.description}</p>
            <button
              className="gradientButton"
              onClick={() => onclickCopyGradient(gradientCode[gradient.id - 1])}
            >
              Copy Gradient
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
