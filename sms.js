var account = require("./account.js");
var client = require("twilio")(account.sid, account.auth_token);

exports.test = function()
{
	var msg = {
		from : account.num,
		to : "+886989034211",
		body : "This is a TEST."
	};

	client.sendMessage(msg, function(err, responseData)
		{
			if(err)
			{
				LOG.warn(err.message);
			}
		}
	);
}
