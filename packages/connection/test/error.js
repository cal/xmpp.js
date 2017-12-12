'use strict'

const test = require('ava')
const Connection = require('..')
const {EventEmitter} = require('@xmpp/events')

test('sets status to disconnect if status is connecting', t => {
  const conn = new Connection()
  conn._attachSocket(new EventEmitter())
  conn.status = 'connecting'
  conn.on('error', () => {})
  conn.socket.emit('error', {})
  t.is(conn.status, 'disconnect')
})
