const inputStyle = {
  width: 235,
  margin: 5 };


class Magic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: "" };


    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: "" });

    }
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value });

  }

  render() {
    const possibleAnswers = [
    "You may want to keep your ship on an even keel today, but remember that no matter how hard as you try, this simply might not be possible. The wind is blowing pretty hard and you might just have to trim your sails and go full speed ahead. You'll move much more quickly, but it will also mean that you'll be more prone to capsizing. Live on the edge.",
    "This is your day to shine in many respects. The action you take is right on target, so draw back your arrow as far as you can before letting it fly. There is a quiet strength to your being that comes out occasionally. When it does, people will note it for miles around. Today gives you the opportunity to display your incredible strength and passion to the world. Don't hold back.",
    "You could be wondering why everyone has to be so serious and emotional all of a sudden. You're likely to be feeling this way, too. Take this as a reminder that there are many different walks of life and not all of them necessarily intersect your path. Those forces are apt to make themselves known in quite a traumatic fashion today. Prepare to defend yourself and your motives.",
    " Don't put up with anyone's shenanigans. Your time is too precious and your energy too powerful to waste on those who see you as a fair-weather friend or emotional crutch. Concentrate on your own problems. If someone has a sob story, tell him or her exactly what you think. No need to pad the honest truth with a bunch of fluff just to make the other person feel good.",
    "You may have the intellectual side of the equation completely set in your head. You've collected all the facts and have all the data worked out in such a way that it's impossible for anyone to fault your calculations. Don't think you're done, because there's one part of the picture left to consider - emotions. Extreme feelings could put a monkey wrench in your plans. Be prepared.",
    "Other people might have a hard time navigating through the day, thanks to the intensity and corruption that's likely to surface. You have nothing to worry about, because your adaptable nature is perfectly suited to dealing with the stubborn forces that are likely to rear their heads. This is a good time to clean out your closet and throw away things you no longer need. Be ruthless.",
    " Secure your bunker and make sure it's fully stocked with heavy artillery, because there is bound to be a battle. Trust that you need to be fully prepared in order to enter the fight today, because you do. There are some battles that you actually like - the ones that get things rolling and produce results. It will soon become clear which type this is.",
    " You tend to get quite emotional about things even though you don't always show it prominently to the outside world. The difference today is that more people are likely to be openly acting out their emotions, so you, in turn, could feel safer about exposing your true feelings to the people around you. Have faith that you'll find friends who share similar opinions on this day.",
    "If situations get too hot and heavy, your first instinct is to run away or jump to the next subject before anyone notices you're avoiding the serious ones. That's one way to deal with today's intensity, but deep down you know it isn't the best. What you really need to do is dig deep and take advantage of this emotional energy to thoroughly take care of things instead of skim over them.",
    "Your actions today could take an investigative approach. You're able to probe much more deeply than usual as you search people's eyes for the answers you seek. Feel free to take aggressive action based on your gut instincts. Use your powerful emotions as a tool instead of something that holds you back. People may come to you for advice, and you're in the perfect position to give it.",
    "Your courageous strength and desire to take a leadership role may be threatening to others today. Be careful of automatically assuming the dominant position before learning what other people feel about the situation. You could make some drastic mistakes if you don't watch out for the well-being of others. Things could get quite emotional, so beware of potential flare-ups.",
    " You can cut through to the truth quite easily today, so don't hesitate to do so. If you come to an intersection and no one seems to know who should go next, take the initiative and go. It might not be a bad idea to signal your intentions to the other drivers before you make your move. Being aggressive with your actions doesn't mean you have to be reckless."];


    const answer = possibleAnswers[this.state.randomIndex];
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        value: this.state.userInput,
        onChange: this.handleChange,
        style: inputStyle,
        placeholder: "write your zodiac name here" }), /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { onClick: this.ask }, "Click here to see your horoscope"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("h3", null, "Answer:"), /*#__PURE__*/
      React.createElement("h4", null, answer)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Magic, null), document.getElementById("root"));