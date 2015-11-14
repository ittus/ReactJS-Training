var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});


var ClickMe = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0 
    };
  },
  handleClick: function(){
    this.setState({clicks: this.state.clicks + 1});
  },
  render: function() {
    return (
      <div className="clicker" onClick={this.handleClick}>
        I have been clicked {this.state.clicks} Times
      </div>
    );
  }

});

var CountDownTimer = React.createClass({
  getInitialState: function() {
    return {
        secondsRemaining: 0 
    };
  },
  tick: function(){
      this.setState({secondsRemaining: this.state.secondsRemaining - 1});
      if(this.state.secondsRemaining <= 0){
        clearInterval(this.interval);
      }
  },
  componentDidMount: function() {
    this.setState({secondsRemaining: this.props.secondsRemaining});
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function(){
    if(this.state.secondsRemaining){
    return(
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
      );
    }else{
      return (<div>The auction has ended</div>);
    }
  }
});



var Auction = React.createClass({

  render: function() {
    return (
      <div className="auction-listing">
        <div className="image">
          <img src={this.props.image} alt="iPhone 5S" />
        </div>
        <div className="details">
          <h3 className='title'>{this.props.title}</h3>
          <p className='description'>{this.props.description}</p>
          <p className='countdown'><CountDownTimer secondsRemaining={this.props.remaining} /></p>
        </div>
      </div>
    );
  }

});


ReactDOM.render(<Timer />, document.getElementById('content'));
ReactDOM.render(<ClickMe />, document.getElementById('click_me'));
ReactDOM.render(<Auction 
  title="Do you love iOS?" 
  description="Best iOS puzzle game, do you want it!" 
  image="http://a1.mzstatic.com/us/r30/Purple3/v4/9b/16/ca/9b16caa4-4eda-553c-e4e5-b68f6e07756b/screen568x568.jpeg" 
  remaining="10"/>, document.getElementById('count_down'));
