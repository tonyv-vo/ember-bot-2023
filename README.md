# Ember Bot

&nbsp;

## Information for Students / Mentors

To join your squad in *Schulich Ignite*'s Discord server, use this command to get started:
- `!squad set [name]` - *Replace `[name]` with your squad's name*
- Example: `!squad set monday-3`

That's all you have to do for now! If you cannot see your squad's channels, please contact a mentor ASAP.

&nbsp;

&nbsp;

## Information for Admins

### Creating the Bot

1. Log in and head to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Press the **[New Application]** button, name it "EmberBot", and press **[Create]**
3. Select the **Bot** tab, press **[Add Bot]**, and press **[Yes, do it!]**
4. Press **[Copy Token]** and store it safely (do NOT share it with other people!)
5. Select the **OAuth2** tab, press **[Copy]** under the Client ID, and paste it into the following link:
	- `https://discord.com/api/oauth2/authorize?client_id=[PASTE_HERE_WITHOUT_BRACKETS]&permissions=268454992&scope=bot`
6. Click your updated link, select the *Schulich Ignite* server from the dropdown list, and press **[Continue]**
7. The Discord Bot should now be in your server!
	- But there are still things left to do! Please continue following the guide.&nbsp;

&nbsp;
### Hosting the Bot

1. Edit the bot's `config.json` file with the preferred prefix, wildcard symbol (used in `!squad new`), and your own Discord User ID
2. Change the `token.json` file with the bot's token (see: Creating the Bot, step 4)
3. Access *Schulich Ignite*'s Cloud service
4. Upload the bot's files onto a new instance
5. Run the bot by using `python startup.py`
6. The Discord Bot should now be up and running!

&nbsp;
### Bot Commands (Admin only!)

These commands can only be run by server administrators
The bot will not execute any of these commands if a non-admin tries using them
However, admins may use non-admin commands
If you are having trouble using these, please make sure you have the `Administrator` role in the *Schulich Ignite* server

- `!help` - Displays a help message
- `!help squad` - Displays all available squad commands
- `!help [command]` - Displays more details about a specific command, as well as its usage
	- Example: `!help squad new`
&nbsp;
- `!squad new [name] [# of groups]` - Create  one or more squads
	- A squad is a text channel, a voice channel, and a role, all with the same name
	- Example 1: `!squad new monday` - Creates the "monday" squad
	- Example 2: `!squad new friday-? 5` - Creates 5 new groups, "friday-1" through "friday-5"
		- `?` is the default wildcard character, which is what the number will replace in the name when making groups
- `!squad assign [squad] [user]` - Assign a user to a certain squad
	- Example: `!squad assign monday-3 @AlanAyy` (Yes, you have to *@mention* the user!)
- `!squad delete` - Coming Soon!
- `!squad clear` - Coming Soon!
