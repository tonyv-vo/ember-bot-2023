import logging
import os

import discord
from discord.ext import commands

from cogs.utils.config import *


# First time run config
def wizard():
    config = {}
    print('Welcome to the Ignite-Ember Discord Bot setup!')
    print('Please enter the bot\'s token:')
    config['token'] = input('| ').strip().strip('"')

    print('\nPlease enter the bot\'s command prefix:')
    config['prefix'] = input('| ').strip()

    input('\nThank you! Let\'s start this up, shall we?')
    with open('settings/config.json', encoding='utf-8', mode='w') as f:
        json.dump(config, f, sort_keys=True, indent=4)


try:
    with open('settings/config.json', encoding='utf-8', mode='r') as fp:
        data = json.load(fp)  # Let's see if we've got a valid settings file
except IOError:
    wizard()

# Now that all the setup's finished, we're good to go!
logging.basicConfig(level=logging.INFO)
# 2023 update: discord > 2.0.0 requires intents
intents = discord.Intents.all()
bot = commands.Bot(
    command_prefix=get_config_value('config', 'prefix'),
    description='''Ignite-Ember by Schulich Ignite''',
    intents=intents
)

# Time to load our modules :D
if __name__ == '__main__':
    for extension in os.listdir("cogs"):
        if extension.endswith('.py'):
            try:
                bot.load_extension("cogs." + extension[:-3])
            except Exception as e:
                print('Failed to load extension {}\n{}: {}'.format(extension, type(e).__name__, e))


@bot.event
async def on_ready():
    print('\nLogged in as %s' % bot.user)
    print('Bot ID is %s' % bot.user.id)


bot.run(get_config_value('config', 'token'))
