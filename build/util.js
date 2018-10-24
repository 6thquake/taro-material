const path = require('path')
const url = require('url')
const os = require('os')

function _normalizeFamily (family) {
  return family ? family.toLowerCase() : 'ipv4'
}

exports.getProjectRoot = function () {
  return path.resolve(__dirname, '..')
}

exports.zeroPad = function (num, places) {
  const zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}

exports.formatTime = function (date) {
  if (!date) {
    date = new Date()
  } else if (!(date instanceof Date)) {
    date = new Date(date)
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return `${year}-${exports.zeroPad(month, 2)}-${exports.zeroPad(day, 2)} ${exports.zeroPad(hour, 2)}:${exports.zeroPad(minute, 2)}`
}

exports.getLocalIp = function (name, family) {
  const interfaces = os.networkInterfaces()
  //
  // Default to `ipv4`
  //
  family = _normalizeFamily(family)

  //
  // If a specific network interface has been named,
  // return the address.
  //
  if (name && name !== 'private' && name !== 'public') {
    const res = interfaces[name].filter(details => {
      const itemFamily = details.family.toLowerCase()
      return itemFamily === family
    })
    if (res.length === 0) {
      return undefined
    }
    return res[0].address
  }

  const all = Object.keys(interfaces).map(nic => {
    //
    // Note: name will only be `public` or `private`
    // when this is called.
    //
    const addresses = interfaces[nic].filter(details => {
      details.family = details.family.toLowerCase()
      if (details.family !== family || exports.isLoopback(details.address)) {
        return false
      } else if (!name) {
        return true
      }

      return name === 'public' ? !exports.isPrivate(details.address)
        : exports.isPrivate(details.address)
    })
    return addresses.length ? addresses[0].address : undefined
  }).filter(Boolean)

  return !all.length ? exports.loopback(family) : all[0]
}

exports.loopback = function loopback (family) {
  //
  // Default to `ipv4`
  //
  family = _normalizeFamily(family)

  if (family !== 'ipv4' && family !== 'ipv6') {
    throw new Error('family must be ipv4 or ipv6')
  }

  return family === 'ipv4' ? '127.0.0.1' : 'fe80::1'
}

exports.isLoopback = function isLoopback (addr) {
  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
    .test(addr) ||
    /^fe80::1$/.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr)
}

exports.isPrivate = function isPrivate (addr) {
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/
    .test(addr) ||
    /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/.test(addr) ||
    /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/
      .test(addr) ||
    /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(addr) ||
    /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/.test(addr) ||
    /^fc00:/i.test(addr) ||
    /^fe80:/i.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr)
}

exports.isPublic = function isPublic (addr) {
  return !exports.isPrivate(addr)
}

exports.prepareUrls = function (protocol, host, port) {
  const formatUrl = hostname =>
    url.format({
      protocol,
      hostname,
      port,
      pathname: '/'
    })

  const isUnspecifiedHost = host === '0.0.0.0' || host === '::'
  let prettyHost, lanUrlForConfig, lanUrlForTerminal
  if (isUnspecifiedHost) {
    prettyHost = 'localhost'
    try {
      lanUrlForConfig = exports.getLocalIp()
      if (lanUrlForConfig) {
        if (exports.isPrivate(lanUrlForConfig)) {
          lanUrlForTerminal = formatUrl(lanUrlForConfig)
        } else {
          lanUrlForConfig = undefined
        }
      }
    } catch (err) {
      console.log(err)
    }
  } else {
    prettyHost = host
  }
  const localUrlForTerminal = formatUrl(prettyHost)
  const localUrlForBrowser = formatUrl(prettyHost)
  return {
    lanUrlForConfig,
    lanUrlForTerminal,
    localUrlForTerminal,
    localUrlForBrowser
  }
}
