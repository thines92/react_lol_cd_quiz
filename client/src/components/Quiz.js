import React from "react";

class Quiz extends React.Component {
  render() {
    return (
      <div className="ui segments">
        <div className="ui segment center aligned">
          <p>This is a random question that you have to answer?</p>
        </div>
        <div className="ui segment">
          <div className="ui grid centered">
            <div className="four wide column">
              <div className="ui radio checkbox">
                <input type="radio" name="1" tabindex="0" class="hidden" />
                <label>Question 1</label>
              </div>
            </div>
            <div className="four wide column">
              <div className="ui radio checkbox">
                <input type="radio" name="2" tabindex="0" class="hidden" />
                <label>Question 2</label>
              </div>
            </div>
            <div className="four wide column">
              <div className="ui radio checkbox">
                <input type="radio" name="3" tabindex="0" class="hidden" />
                <label>Question 3</label>
              </div>
            </div>
            <div className="four wide column">
              <div className="ui radio checkbox">
                <input type="radio" name="4" tabindex="0" class="hidden" />
                <label>Question 4</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
