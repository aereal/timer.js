#!/usr/bin/env rackup

require 'rack'

run Rack::Directory.new('.')
