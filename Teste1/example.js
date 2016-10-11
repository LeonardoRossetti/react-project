<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>


<script type="text/babel">
  class ExampleApplication extends React.Component {
    render() {
      var elapsed = Math.round(this.props.elapsed  / 100);
      var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
      var message =
        `React has been successfully running for ${seconds} seconds.`;
        return <p>{message}</p>;
    }
  }
  var start = new Date().getTime();
    setInterval(() => {
      ReactDOM.render(
      <ExampleApplication elapsed={new Date().getTime() - start} />,
      document.getElementById('container')
    );
  }, 50);
</script>


<html>
<body>
<h1>
Teste
</h1>
</body>
</html>