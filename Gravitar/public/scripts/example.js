

var EmailInput = React.createClass({
  returnInput : function(){
    this.props.inputHandler(
      this.refs['emailInput'] .value
    );
  },
  render: function() {
    return (
      <div>
        <input type="email" ref="emailInput" onChange={this.returnInput}/>
      </div>
    );
  }

});

var Gravitar = React.createClass({
  getInitialState: function() {
    return {
      url: '',
      email: '', 
    };
  },
  getDefaultProps: function() {
    return {
      size: 50
    };
  },
  componentWillMount: function() {
    this.setState({
      url: this.getUrl()
    });
  },
  getUrl: function(email){
    var url = 'http://www.gravatar.com/avatar/'+ window.md5(email)+'?d=identicon&s=150';
    if(this.props.size){
      url += '&s=' + this.props.size;
    }
    return url;
  },
  updateEmail: function(email){
    this.setState({url: this.getUrl(email), email: email});
    console.log(this.state.url);
  },
  render: function() {
    return (
      <div>
        <EmailInput inputHandler={this.updateEmail} />
        <div className="gravitar"><img src={this.state.url}/></div>
      </div>
    );
  }
});

ReactDOM.render(
  <Gravitar />,
  document.getElementById('content')
);
