import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';

class MyHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      biod: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5001/biodata')
      .then(response => {
        // console.log(response.data)
        this.setState({biod: response.data})
      })
      .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retreiving data'})
      })
  }

  render() {
    const { biod } = this.state
    console.log(biod)
    return (
      <div>
        <section>
          <div className="skewed"></div>
        </section>

        <div className="biodiv">
          <div className="font">
            <img className="biopic" src="pic_bio1.png" alt="me"></img>
            <h2>{biod && biod.nama}</h2>
          </div>
          <div className="font2">
          <div>Age: {biod && biod.age}<br/></div>
          <div>Birthdate: {biod && biod.birthdate}<br/></div>
          <div>Birthplace: {biod && biod.birthplace}<br/></div>
          <div>Major: {biod && biod.major}<br/></div>
           <div>Email: {biod && biod.email}<br/></div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'));