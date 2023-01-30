import React, { Component } from "react";
import axios from "axios";
import { Input, Footer, Card, CardBody, CardTitle } from "mdbreact";
import { Routes, Route } from "react-router-dom";
import Place from "./Place";
import "./Cards.css";

class Cards extends Component {
  state = {
    search: "",
    placeList: [],
  };

  componentDidMount() {
    this.getPlace();
  }

  getPlace() {
    axios
      .get("http://localhost:5000/getAutocomplete", {
        params: { q: this.state.search },
      })
      .then((response) =>
        this.setState({ ...Cards, placeList: response.data })
      );
  }

  renderCity = (city) => {
    const { search } = this.state;
    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <CardTitle title={city}>
              {city.name.substring(0, 15)}
              {city.name.length > 15 && "..."}
            </CardTitle>
            <a href={`/place?place=${city.name}`} id="anchorPlace">
              See Review
            </a>
          </CardBody>
        </Card>
        <Routes>
          <Route path="*place" element={<Place />} />
        </Routes>
      </div>
    );
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
    this.getPlace();
  };

  render() {
    const { search } = this.state;
    const filteredCities = this.state.placeList.filter((city) => {
      return city.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <>
        <div className="flyout">
          <main style={{ marginTop: "4rem" }}>
            <div className="card-container">
              <div className="row">
                <div className="col">
                <div class="form__group">
                    <input  class="form__input" id="name" placeholder="Enter City Name" required="" 
                      type="text" onChange={this.onchange}/>
                <label for="name" class="form__label">City</label>
                  </div>
                  </div>
                <div className="col" />
              </div>
              <div className="row">
                {filteredCities.map((city) => {
                  return this.renderCity(city);
                })}
              </div>
            </div>
          </main>
          <Footer color="indigo">
            <p className="footer-copyright mb-0">
              &copy; {new Date().getFullYear()} Copyright
            </p>
          </Footer>
        </div>
      </>
    );
  }
}

export default Cards;
