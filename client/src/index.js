import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';

class MyHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      biod: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5001/biodata')
      .then(response => {
        console.log(response)
        this.setState({biod: response.data})
      })
      .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retreiving data'})
      })
  }

  render() {
    const { biod } = this.state
    return (
      <div>
        <section>
          <div className="skewed"></div>
        </section>

        <div className="biodiv">
          <div className="font">
            <img className="biopic" src="pic_bio1.png" alt="me"></img>
            {
              biod.length ?
              biod.map(bio => <h2>{bio.nama}</h2>) :
              null
            }
          </div>
          <div className="font2">
            {
              biod.length ?
              biod.map(bio => <div>Age: {bio.age}<br/></div>) :
              null
            }
            {
              biod.length ?
              biod.map(bio => <div>Birthdate: {bio.birthdate}<br/></div>) :
              null
            }
            {
              biod.length ?
              biod.map(bio => <div>Birthplace: {bio.birthplace}<br/></div>) :
              null
            }
            {
              biod.length ?
              biod.map(bio => <div>Major: {bio.major}<br/></div>) :
              null
            }
            {
              biod.length ?
              biod.map(bio => <div>Email: {bio.email}<br/></div>) :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'));