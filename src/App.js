import React from "react";
import { Results, Button } from "./Components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="wrepper">
          <Results result="2" />
          <table border="0">
            <tr>
              <td>
                <Button value="(" class="operator" />
              </td>
              <td>
                <Button value=")" class="operator" />
              </td>
              <td>
                <Button value="%" id="percent" />
              </td>
              <td>
                <Button value="AC" id="btn_ac" />
              </td>
            </tr>
            <tr>
              <td>
                <Button value="7" class="btn_number" />
              </td>
              <td>
                <Button value="8" class="btn_number" />
              </td>
              <td>
                <Button value="9" class="btn_number" />
              </td>
              <td>
                <Button value="/" class="operator" />
              </td>
            </tr>
            <tr>
              <td>
                <Button value="4" class="btn_number" />
              </td>
              <td>
                <Button value="5" class="btn_number" />
              </td>
              <td>
                <Button value="6" class="btn_number" />
              </td>
              <td>
                <Button value="*" class="operator" />
              </td>
            </tr>
            <tr>
              <td>
                <Button value="1" class="btn_number" />
              </td>
              <td>
                <Button value="2" class="btn_number" />
              </td>
              <td>
                <Button value="3" class="btn_number" />
              </td>
              <td>
                <Button value="-" class="operator" />
              </td>
            </tr>
            <tr>
              <td>
                <Button value="0" class="btn_number" />
              </td>
              <td>
                <Button class="btn_number" value="." />
              </td>
              <td>
                <Button value="=" id="solve" />
              </td>
              <td>
                <Button value="+" class="operator" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
