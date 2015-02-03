var public_account = require("./account.js");
var public_client = require("twilio")(public_account.sid, public_account.auth_token);


exports.customize = function(private_account, message, exceptions_handler)
{
	var private_client = require("twilio")(private_account.sid, private_account.auth_token);
	private_client.sendMessage(message, excepitons_handler);
}

exports.sendMessage = function(dst_num, text, media_urls)
{
	var msg = {
		from : public_account.num,
		to : dst_num,
		body : text
	};

	if(media_urls)
	{
		msg.mediaUrl = media_urls;
	}

	public_client.sendMessage(msg, function(err, MIR)
		{
			if(err)
			{
				LOG.warn(err.message);
			}
			else
			{
				LOG.warn(MIR);
			}
		}
	);
}

exports.listMessages = function(list_filter, cb)
{
	public_client.listMessages(list_filter, cb);
}
