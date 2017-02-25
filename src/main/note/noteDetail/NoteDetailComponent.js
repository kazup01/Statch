import React from 'react';
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'
import './NoteDetail.css'

export default React.createClass({
  render: function(){
    $(document).ready(function () {
            $('#comment-submit').click(function () {
                var payload = {
                    comment: $('#comment').val()
                };
                $.ajax({
                    url: "/comment",
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
          <Input id="comment" type="text" />
          <Button id="comment-submit" type="submit">Submit</Button>
          <p id="output"></p>
      </div>
    )
  }
})
