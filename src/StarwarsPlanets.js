import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import "./App.css";

function StarwarsPlanet() {
  let obj = {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    residents: "",
    films: "",
    created: "",
    edited: "",
    url: "",
  };

  const [planet, setPlanet] = useState(obj);
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    facade.fetchStarwarsPlanets().then((data) => setPlanetList(data.results));
    console.log(planetList);
  }, []);

  const handleSelect = (evt) => {
    console.log(evt);
    planetList.forEach(function (value, index, planetList) {
      if (evt === value.name) {
        setPlanet(value);
      }
    });
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          bsStyle="default"
          bsSize="small"
          style={{ maxHeight: "50px" }}
          title={"Qty"}
          key={1}
          id="dropdown-size-small"
          variant="success"
          id="dropdown-basic"
        >
          Select Country
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          {planetList.map((x) => (
            <Dropdown.Item onSelect={handleSelect} eventKey={x.name}>
              {x.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Table table table-striped table-bordered table-condensed>
        <tr>
          <thead>
            <th>Planet:</th>
          </thead>
          <td>{planet.name} </td>
        </tr>
        <tr>
          <th>rotation_period:</th>
          <td>{planet.rotation_period}</td>
        </tr>
        <tr>
          <th>orbital_period:</th>
          <td>{planet.orbital_period}</td>
        </tr>
        <tr>
          <th>diameter:</th>
          <td>{planet.diameter}</td>
        </tr>
        <tr>
          <th>climate:</th>
          <td>{planet.climate}</td>
        </tr>
        <tr>
          <th>terrain:</th>
          <td>{planet.terrain}</td>
        </tr>
        <tr>
          <th>surface_water:</th>
          <td>{planet.surface_water}</td>
        </tr>
        <tr>
          <th>population:</th>
          <td>{planet.population}</td>
        </tr>
        <tr>
          <th>residents:</th>
          <td>{planet.residents}</td>
        </tr>
        <tr>
          <th>films:</th>
          <td>{planet.films}</td>
        </tr>
        <tr>
          <th>created:</th>
          <td>{planet.created}</td>
        </tr>
        <tr>
          <th>edited:</th>
          <td>{planet.edited}</td>
        </tr>
        <tr>
          <th>url:</th>
          <td>{planet.url}</td>
        </tr>
      </Table>
    </div>
  );
}

export default StarwarsPlanet;
