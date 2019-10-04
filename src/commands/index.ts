import { Message } from 'discord.js'
import { join } from './join'
import { leave } from './leave'
import { info } from './info'
import { bcinfo } from './bcinfo'
import { help } from './help'

export type CommandHandler = (message: Message) => Promise<void>

export const commands: { [cmd in Command]: CommandHandler } = { join, leave, info, bcinfo, help }

export type Command = 'join' | 'leave' | 'info' | 'bcinfo' | 'help'
export const Command: Command[] = [ 'join', 'leave', 'info', 'bcinfo', 'help' ]
