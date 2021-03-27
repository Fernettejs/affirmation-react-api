import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  if ("speechSynthesis" in window) {
    // Speech Synthesis supported 🎉
  } else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
  }

  const aff_url = "https://dulce-affirmations-api.herokuapp.com/affirmation";
  async function getAff() {
    const response = await fetch(aff_url);
    const data = await response.json();
    const phrase = JSON.stringify(data[0].phrase);

    document.getElementById("phrase").textContent = phrase;

    function speak() {
      speechSynthesis.speak(new SpeechSynthesisUtterance(phrase));
    }
    speak();
  }

  getAff();

  return (
    <button onClick={getAff} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "#fff",
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
