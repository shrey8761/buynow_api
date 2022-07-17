const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ewvtubinelzuyc',
    host: 'ec2-52-205-61-230.compute-1.amazonaws.com',
    database: 'ddgpscudnqidhv',
    password: 'c74862f54d2fcbddb4ae5088e0df5cf88e26bc2d61c1e9b1ef50323aeb843610',
    port: 5432,
})




module.exports = pool;