import React from 'react';
import './NoteDetail.css'

export default React.createClass({
  render: function(){
    $(document).ready(function () {
            $('#user-submit').click(function () {
                var payload = {
                    name: $('#user-name').val()
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
      <h3>Enter a username to enter into the database:</h3>
          <input id="user-name" type="text" />
          <input id="user-submit" type="submit" />
          <p id="output"></p>
      </div>
    )
  }
})
