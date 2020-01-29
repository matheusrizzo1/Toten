import React, { Component } from "react";
import $ from "jquery";

export class Checkin extends Component {
  constructor(props) {
    super(props);

    this.Validar = this.Validar.bind(this);
    this.cpfRef = React.createRef();
  }

  componentDidMount() {
    let Keyboard = window.SimpleKeyboard.default;
    let inputMask = window.SimpleKeyboardInputMask.default;

    let myKeyboard = new Keyboard({
      onChange: input => onChange(input),
      layout: {
        default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"]
      },
      modules: [inputMask],
      inputMask: "999.999.999-99",
      theme: "hg-theme-default hg-layout-numeric numeric-theme",
      disableCaretPositioning: true
    });

    function onChange(input) {
      $(".cpf").text(input);
    }

    $(".hg-button-bksp span").html('<i class="fas fa-backspace"></i>');
  }

  Validar() {
    window.OpenSwalLoading("Aguarde", "Validando informações...");
    const node = this.cpfRef.current;
    return new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
      var ok = Math.floor(Math.random() * Math.floor(2));

      if (ok === 1) {
        window
          .swal("Tudo certo", "Apto para viagem", "success")
          .then(() => this.props.history.push("/"));
      } else
        window.swal(
          "Atenção",
          "Entre em contato com a transportadora",
          "warning"
        );
    }); // 2 seconds
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <h3 className="light center-align">Digite seu CPF:</h3>
          <div className="row">
            <div className="input-field col s12 l4 offset-l4">
              <h2 className="thin center-align cpf" ref={this.cpfRef}></h2>
              <div className="simple-keyboard"></div>
            </div>
          </div>
          <div className="row">
            <p className="center-align">
              <a href="#!" className="btn" onClick={this.Validar}>
                Continuar
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
