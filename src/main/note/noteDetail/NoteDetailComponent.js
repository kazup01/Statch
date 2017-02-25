import React from 'react';
import './NoteDetail.css'

export default React.createClass({
  render: function(){
    $(document).ready(function () {
            $('#timer-submit').click(function () {
                var payload = {
                    comment: $('#comment').val()
                };
                $.ajax({
                    url: "/timer",
                    type: "POST",
                    contentType: "application/json",
                    processData: false,
                    data: JSON.stringify(payload),
                    complete: function (data) {
                        $('#output').html(data.responseText);
                    }
                });
            });
        });
    return(
      <div className="NoteDetail">
      <h3>Enter comment to enter into the database:</h3>
          <input id="comment" type="text" />
          <input id="timer-submit" type="submit" />
          <p id="output"></p>
      </div>
    )
  }
})
