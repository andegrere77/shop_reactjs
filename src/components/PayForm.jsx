import { useState } from "react";

function PayForm({ emptyCart, setPaymentCompleted }) {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    surnames: "",
    telephone: "",
    email: "",
    address: "",
    zip_code: "",
    state: "",
    city: "",
    card_holder: "",
    card_number: "",
    expiration_date: "",
    cvv: "",
  });

  const states = [
    "Alabama    AL",
    "Alaska     AK",
    "Arizona    AZ",
    "Arkansas   AR",
    "California CA",
    "Colorado    CO",
    "Connecticut CT",
    "Delaware   DE",
    "District of Columbia   DC",
    "Florida    FL",
    "Georgia GA",
    "Hawaii HI",
    "Idaho  ID",
    "Illinois   IL",
    "Indiana    IN",
    "Iowa   IA",
    "Kansas KS",
    "Kentucky   KY",
    "Louisiana  LA",
    "Maine  ME",
    "Montana    MT",
    "Nebraska   NE",
    "Nevada NV",
    "New Hampshire  NH",
    "New Jersey NJ",
    "New Mexico NM",
    "New York   NY",
    "North Carolina NC",
    "North Dakota   ND",
    "Ohio   OH",
    "Oklahoma   OK",
    "Oregon OR",
    "Maryland   MD",
    "Massachusetts  MA",
    "Michigan   MI",
    "Minnesota  MN",
    "Mississippi    MS",
    "Missouri   MO",
    "Pennsylvania   PA",
    "Rhode Island   RI",
    "South Carolina SC",
    "South Dakota   SD",
    "Tennessee  TN",
    "Texas  TX",
    "Utah   UT",
    "Vermont    VT",
    "Virginia   VA",
    "Washington WA",
    "West Virginia  WV",
    "Wisconsin  WI",
    "Wyoming    WY",
  ];

  function handleInputCardNumber(e) {
    //Recogemos el valor del campo:
    let value = e.target.value;

    // Eliminar cualquier carácter que no sea un número
    value = value.replace(/\D/g, "");

    // Insertar espacios cada cuatro caracteres
    value = value.replace(/(\d{4})(?!$)/g, "$1 ");

    // Limitar a 19 caracteres (16 números y 3 espacios)
    value = value.substring(0, 19);

    setCreditCardNumber(value);
    handleInputChange(e);
  }

  function handleExpirationDate(e) {
    let value = e.target.value;
    // Eliminar todos los '/' presentes en el valor actual
    value = value.replace(/\//g, "");
    // Inserta / cada 2 caracteres
    value = value.replace(/(\d{2})(?!$)/g, "$1/");
    // Limitar a 5 caracteres
    value = value.substring(0, 5);
    setExpirationDate(value);
    handleInputChange(e);
  }

  function handleSubmit(e) {
    //Evitamos que la página se actualice
    e.preventDefault();
    //Mostrar que se ha completado el pago
    setFormData({
      first_name: "",
      surnames: "",
      telephone: "",
      email: "",
      address: "",
      zip_code: "",
      state: "Select an state...",
      city: "",
      card_holder: "",
      card_number: "",
      expiration_date: "",
      cvv: "",
    });
    setCreditCardNumber("");
    setExpirationDate("");
    setPaymentCompleted(true);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="mb-3">Pay form</h4>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="First name"
            name="first_name"
            onChange={handleInputChange}
            value={formData.first_name}
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Surnames"
            name="surnames"
            onChange={handleInputChange}
            value={formData.surnames}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Address"
            name="address"
            onChange={handleInputChange}
            value={formData.address}
            required
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Zip code"
            name="zip_code"
            onChange={handleInputChange}
            value={formData.zip_code}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <select
            className="form-control mb-3"
            name="state"
            onChange={handleInputChange}
            value={formData.state}
            required
          >
            <option disabled selected>
              Select an state...
            </option>
            {states.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="City"
            name="city"
            onChange={handleInputChange}
            value={formData.city}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <input
            type="email"
            className="form-control mb-3"
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            required
          />
        </div>
        <div className="col-3">
          <input
            type="tel"
            className="form-control mb-3"
            placeholder="telephone"
            name="telephone"
            onChange={handleInputChange}
            value={formData.telephone}
          />
        </div>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cardholder"
        name="cardholder"
        onChange={handleInputChange}
        value={formData.card_holder}
      />

      <div className="row">
        <div className="col-8">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Card number"
            name="card_number"
            onChange={handleInputCardNumber}
            value={creditCardNumber}
            required
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="expiration date"
            name="expiration_date"
            onChange={handleExpirationDate}
            value={expirationDate}
            required
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="cvv"
            name="cvv"
            maxLength="3"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-50"
        onClick={emptyCart}
      >
        Pay
      </button>
    </form>
  );
}

export default PayForm;
